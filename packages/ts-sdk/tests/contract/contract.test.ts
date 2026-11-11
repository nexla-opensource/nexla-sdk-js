/**
 * Replays the shared contract fixtures (_work/contract-fixtures, copied here) through the
 * real NexlaClient with a scripted fetch. Each fixture lists the requests the SDK must send,
 * in order, and the result or error it must return.
 */

import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { NexlaClient } from "../../src/client/nexla-client.js";
import * as errors from "../../src/errors.js";
import type { NexlaError, RateLimitError } from "../../src/errors.js";

const FIXTURE_DIR = fileURLToPath(new URL("./fixtures/", import.meta.url));
const BASE_URL = "https://contract.test";
const noSleep = async () => {};

type ExpectedRequest = {
  method: string;
  path: string;
  query?: Record<string, string>;
  headers?: Record<string, string>;
  body?: unknown;
};

type Exchange = {
  request: ExpectedRequest;
  response: { status: number; body?: unknown; text?: string; headers?: Record<string, string> };
};

type Fixture = {
  name: string;
  description: string;
  client: {
    service_key?: string;
    access_token?: string;
    email?: string;
    password?: string;
    org_id?: number;
    max_retries?: number;
  };
  call: { op: string; args: Record<string, unknown> };
  exchanges: Exchange[];
  expect: {
    result?: unknown;
    error?: {
      class: string;
      status: number;
      message?: string;
      error_code?: string;
      retry_after?: number;
      request_id?: string;
    };
  };
};

const loadFixtures = (): Array<{ file: string; fixture: Fixture }> =>
  readdirSync(FIXTURE_DIR)
    .filter((file) => file.endsWith(".json"))
    .sort()
    .map((file) => ({ file, fixture: JSON.parse(readFileSync(join(FIXTURE_DIR, file), "utf8")) as Fixture }));

/** Runs one fixture's call through the SDK. Returns the result, or the error it threw. */
const runCall = async (fixture: Fixture, client: NexlaClient): Promise<{ result?: unknown; error?: unknown }> => {
  const { op, args } = fixture.call;
  try {
    switch (op) {
      case "get_source":
        return {
          result: await client.request("get", "/data_sources/{source_id}", {
            params: { path: { source_id: args["id"] } },
          }),
        };
      case "create_source":
        return { result: await client.request("post", "/data_sources", { body: args["body"] }) };
      case "list_sources_all": {
        const items: unknown[] = [];
        for await (const item of client.paginateItems("get", "/data_sources", {
          params: { query: { per_page: args["per_page"] } },
        })) {
          items.push(item);
        }
        return { result: items };
      }
      case "add_custodians":
        return {
          result: await client.organizations.add_org_custodians({
            params: { path: { org_id: args["org_id"] as number } },
            body: { custodians: args["custodians"] as Array<{ id: number }> },
          }),
        };
      case "reset_custodians":
        return {
          result: await client.organizations.reset_org_custodians({
            params: { path: { org_id: args["org_id"] as number } },
            body: { custodians: args["custodians"] as Array<{ id: number }> },
          }),
        };
      case "reject_approval":
        return {
          result: await client.approval_requests.reject_approval_request({
            params: { path: { request_id: args["request_id"] as number } },
          }),
        };
      case "login":
        // Force a token fetch, then read source 1 with the new token.
        await client.authProvider.getAccessToken();
        return {
          result: await client.request("get", "/data_sources/{source_id}", { params: { path: { source_id: 1 } } }),
        };
      default:
        throw new Error(`Unknown fixture op: ${op}`);
    }
  } catch (error) {
    return { error };
  }
};

const clientFor = (
  fixture: Fixture,
  seen: Array<{ method: string; pathname: string; query: URLSearchParams; headers: Headers; body: unknown }>,
) => {
  let next = 0;
  const fetchFn: typeof fetch = async (input, init) => {
    const request = input instanceof Request ? input : new Request(input, init);
    const text = await request.clone().text();
    seen.push({
      method: request.method,
      pathname: new URL(request.url).pathname,
      query: new URL(request.url).searchParams,
      headers: request.headers,
      body: text === "" ? undefined : JSON.parse(text),
    });

    const exchange = fixture.exchanges[next];
    next += 1;
    if (!exchange) return new Response("unexpected request", { status: 599 });

    const { status, body, text: rawText, headers } = exchange.response;
    const responseHeaders: Record<string, string> = { ...(headers ?? {}) };
    let payload = rawText ?? "";
    if (rawText === undefined && body !== undefined) {
      payload = JSON.stringify(body);
      responseHeaders["content-type"] ??= "application/json";
    }
    return new Response(payload, { status, headers: responseHeaders });
  };

  const client = new NexlaClient({
    ...(fixture.client.service_key !== undefined ? { serviceKey: fixture.client.service_key } : {}),
    ...(fixture.client.access_token !== undefined ? { accessToken: fixture.client.access_token } : {}),
    ...(fixture.client.email !== undefined ? { email: fixture.client.email } : {}),
    ...(fixture.client.password !== undefined ? { password: fixture.client.password } : {}),
    ...(fixture.client.org_id !== undefined ? { orgId: fixture.client.org_id } : {}),
    baseUrl: BASE_URL,
    fetch: fetchFn,
    retry: {
      ...(fixture.client.max_retries !== undefined ? { maxRetries: fixture.client.max_retries } : {}),
      sleep: noSleep,
    },
  });
  return { client, exchangesUsed: () => next };
};

const sha256 = (buffer: Buffer): string => createHash("sha256").update(buffer).digest("hex");

describe("contract fixtures", () => {
  it("match MANIFEST.sha256 and cover every JSON fixture", () => {
    const lines = readFileSync(join(FIXTURE_DIR, "MANIFEST.sha256"), "utf8").trim().split("\n");
    const manifest = lines.map((line) => {
      const [hash = "", file = ""] = line.trim().split(/\s+/);
      return { hash, file };
    });

    for (const { hash, file } of manifest) {
      expect(sha256(readFileSync(join(FIXTURE_DIR, file))), file).toBe(hash);
    }

    const onDisk = readdirSync(FIXTURE_DIR)
      .filter((file) => file.endsWith(".json"))
      .sort();
    const listed = manifest
      .map((entry) => entry.file)
      .filter((file) => file.endsWith(".json"))
      .sort();
    expect(onDisk).toEqual(listed);
    expect(onDisk).toHaveLength(21);
  });

  for (const { file, fixture } of loadFixtures()) {
    it(`${fixture.name} (${file})`, async () => {
      const seen: Array<{ method: string; pathname: string; query: URLSearchParams; headers: Headers; body: unknown }> =
        [];
      const { client, exchangesUsed } = clientFor(fixture, seen);

      const outcome = await runCall(fixture, client);

      // Every request the SDK sent must match the next expected exchange, in order.
      expect(seen.length, "number of requests").toBe(fixture.exchanges.length);
      expect(exchangesUsed()).toBe(fixture.exchanges.length);
      fixture.exchanges.forEach((exchange, index) => {
        const actual = seen[index];
        const expected = exchange.request;
        if (!actual) return;
        expect(actual.method, `request ${index + 1} method`).toBe(expected.method.toUpperCase());
        expect(actual.pathname, `request ${index + 1} path`).toBe(expected.path);
        for (const [key, value] of Object.entries(expected.query ?? {})) {
          expect(actual.query.get(key), `request ${index + 1} query ${key}`).toBe(value);
        }
        for (const [key, value] of Object.entries(expected.headers ?? {})) {
          expect(actual.headers.get(key), `request ${index + 1} header ${key}`).toBe(value);
        }
        if (expected.body !== undefined) {
          expect(actual.body, `request ${index + 1} body`).toMatchObject(expected.body as object);
        }
      });

      if (fixture.expect.error) {
        const expected = fixture.expect.error;
        const ctor = (errors as Record<string, unknown>)[expected.class];
        expect(typeof ctor, `error class ${expected.class} is exported`).toBe("function");
        expect(outcome.error).toBeInstanceOf(ctor as new (...args: never[]) => NexlaError);

        const error = outcome.error as NexlaError;
        expect(error.statusCode).toBe(expected.status);
        if (expected.message !== undefined) expect(error.message).toBe(expected.message);
        if (expected.error_code !== undefined) expect(error.errorCode).toBe(expected.error_code);
        if (expected.retry_after !== undefined) expect((error as RateLimitError).retryAfter).toBe(expected.retry_after);
        if (expected.request_id !== undefined) expect(error.requestId).toBe(expected.request_id);
      } else {
        expect(outcome.error).toBeUndefined();
        expect(outcome.result).toEqual(fixture.expect.result);
      }
    });
  }
});
