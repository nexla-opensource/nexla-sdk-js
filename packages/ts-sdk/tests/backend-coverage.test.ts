/**
 * Backend spec coverage. Every operation in the public backend spec must reach a
 * generated method that sends the same HTTP method and path. Plugin-redoc
 * operations must stay unchanged in the merged spec.
 */

import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import YAML from "yaml";
import { NexlaClient } from "../src/client/nexla-client.js";
import { createGeneratedResources } from "../src/resources/generated/index.js";
import { McpSessionsResource } from "../src/resources/generated/mcp_sessions.js";
import { SdkApplicationsResource } from "../src/resources/generated/sdk_applications.js";
import { SourcesResource } from "../src/resources/generated/sources.js";
import { ToolSetsResource } from "../src/resources/generated/tool_sets.js";
import { ToolsResource } from "../src/resources/generated/tools.js";
import { createMockFetch } from "./utils/mock-fetch.js";

const PUBLIC_SPEC_PATH = new URL("../../../openapi/nexla-api.public.json", import.meta.url);
const MERGED_SPEC_PATH = new URL("../src/generated/merged-spec.json", import.meta.url);
const REDOC_SPEC_PATH = new URL("../../../plugin-redoc-0.yaml", import.meta.url);
const BASE_URL = "https://test.nexla.io/nexla-api";
const ACCESS_TOKEN = "test-access-token";
const METHODS = ["get", "post", "put", "patch", "delete", "options", "head", "trace"] as const;

type SpecDocument = { paths: Record<string, Record<string, { operationId?: string } | undefined>> };
type OperationCall = (init?: Record<string, unknown>) => Promise<unknown>;

const readJson = (url: URL): SpecDocument => JSON.parse(readFileSync(url, "utf8")) as SpecDocument;

const normalizePath = (apiPath: string): string => {
  const templated = apiPath.split("?")[0].replace(/\{[^}]*\}/g, "{}");
  return templated.replace(/\/+$/, "") || "/";
};

const trimTrailingSlash = (value: string): string => value.replace(/\/+$/, "") || "/";

const keyOf = (method: string, apiPath: string): string => `${method.toUpperCase()} ${normalizePath(apiPath)}`;

const newClient = (fetchFn: typeof fetch): NexlaClient =>
  new NexlaClient({ accessToken: ACCESS_TOKEN, baseUrl: BASE_URL, fetch: fetchFn });

describe("backend spec coverage", () => {
  it("reaches every public backend operation through a generated method", async () => {
    const publicSpec = readJson(PUBLIC_SPEC_PATH);
    const mergedSpec = readJson(MERGED_SPEC_PATH);

    // The generated call uses the merged path template, so path values must use its placeholder names.
    const mergedOperations = new Map<string, { operationId: string; template: string }>();
    for (const [apiPath, item] of Object.entries(mergedSpec.paths)) {
      for (const method of METHODS) {
        const operationId = item[method]?.operationId;
        if (operationId) mergedOperations.set(keyOf(method, apiPath), { operationId, template: apiPath });
      }
    }

    const mock = createMockFetch([]);
    const client = newClient(mock.fetchFn);
    const owners = Object.values(createGeneratedResources(client)) as unknown as Record<string, unknown>[];
    const basePath = new URL(BASE_URL).pathname.replace(/\/+$/, "");

    const failures: string[] = [];
    let checked = 0;

    for (const [apiPath, item] of Object.entries(publicSpec.paths)) {
      for (const method of METHODS) {
        if (!item[method]) continue;
        checked += 1;

        const key = keyOf(method, apiPath);
        const merged = mergedOperations.get(key);
        if (!merged) {
          failures.push(`${key}: no operation in the merged spec`);
          continue;
        }
        const { operationId, template } = merged;

        const owner = owners.find((candidate) => typeof candidate[operationId] === "function");
        if (!owner) {
          failures.push(`${key}: no generated method named ${operationId}`);
          continue;
        }
        const call = owner[operationId] as OperationCall;

        const pathValues: Record<string, string> = Object.fromEntries(
          Array.from(template.matchAll(/\{([^}]+)\}/g), (match): [string, string] => [match[1] ?? "", "1"]),
        );
        const before = mock.calls.length;
        await call.call(owner, { params: { path: pathValues } });

        const request = mock.calls[before];
        if (mock.calls.length !== before + 1 || !request) {
          failures.push(`${key}: no request was sent`);
          continue;
        }

        const expectedPath = trimTrailingSlash(basePath + apiPath.split("?")[0].replace(/\{[^}]+\}/g, "1"));
        const actualPath = trimTrailingSlash(new URL(request.url).pathname);
        if (request.method !== method.toUpperCase() || actualPath !== expectedPath) {
          failures.push(`${key}: ${operationId} sent ${request.method} ${actualPath}`);
        }
      }
    }

    expect(checked).toBeGreaterThan(1000);
    expect(failures).toEqual([]);
  });

  it("keeps every plugin-redoc operation unchanged in the merged spec", () => {
    const redoc = YAML.parse(readFileSync(REDOC_SPEC_PATH, "utf8")) as SpecDocument;
    const merged = readJson(MERGED_SPEC_PATH);

    for (const [apiPath, item] of Object.entries(redoc.paths)) {
      for (const method of METHODS) {
        if (!item[method]) continue;
        expect(merged.paths[apiPath]?.[method], `${method} ${apiPath}`).toEqual(item[method]);
      }
    }
  });
});

describe("representative backend methods", () => {
  it("registers new resource classes on NexlaClient", () => {
    const client = newClient(createMockFetch([]).fetchFn);

    expect(client.tools).toBeInstanceOf(ToolsResource);
    expect(client.tool_sets).toBeInstanceOf(ToolSetsResource);
    expect(client.mcp_sessions).toBeInstanceOf(McpSessionsResource);
    expect(client.sdk_applications).toBeInstanceOf(SdkApplicationsResource);
    expect(client.sources).toBeInstanceOf(SourcesResource);
  });

  it("lists tools with the session bearer token and query parameters", async () => {
    const mock = createMockFetch([]);
    const client = newClient(mock.fetchFn);

    await client.tools.tools_index_tools({ params: { query: { page: 2, per_page: 5 } } });

    const request = mock.getLastCall();
    expect(request?.method).toBe("GET");
    const url = new URL(request?.url ?? "");
    expect(url.pathname).toBe("/nexla-api/tools");
    expect(url.searchParams.get("page")).toBe("2");
    expect(url.searchParams.get("per_page")).toBe("5");
    expect(request?.headers.get("authorization")).toBe(`Bearer ${ACCESS_TOKEN}`);
  });

  it("lists tool sets", async () => {
    const mock = createMockFetch([]);
    const client = newClient(mock.fetchFn);

    await client.tool_sets.index_tool_sets();

    expect(mock.getLastCall()?.method).toBe("GET");
    expect(new URL(mock.getLastCall()?.url ?? "").pathname).toBe("/nexla-api/tool_sets");
  });

  it("creates an MCP session with a JSON body", async () => {
    const mock = createMockFetch([]);
    const client = newClient(mock.fetchFn);

    await client.mcp_sessions.create_mcp_session({ body: { name: "session-a" } });

    const request = mock.getLastCall();
    expect(request?.method).toBe("POST");
    expect(new URL(request?.url ?? "").pathname).toBe("/nexla-api/mcp_sessions");
    expect(await mock.getRequestBody(mock.calls.length - 1)).toEqual({ name: "session-a" });
  });

  it("reads and updates an SDK application by path id", async () => {
    const mock = createMockFetch([]);
    const client = newClient(mock.fetchFn);

    await client.sdk_applications.get_sdk_application({ params: { path: { app_id: 42 } } });
    expect(mock.getLastCall()?.method).toBe("GET");
    expect(new URL(mock.getLastCall()?.url ?? "").pathname).toBe("/nexla-api/sdk_applications/42");

    await client.sdk_applications.update_sdk_application({
      params: { path: { app_id: 42 } },
      body: { name: "renamed" },
    });
    expect(mock.getLastCall()?.method).toBe("PUT");
    expect(new URL(mock.getLastCall()?.url ?? "").pathname).toBe("/nexla-api/sdk_applications/42");
  });

  it("lists all data sources through the sources resource", async () => {
    const mock = createMockFetch([]);
    const client = newClient(mock.fetchFn);

    await client.sources.list_all_data_sources({ params: { query: { per_page: 3 } } });

    const url = new URL(mock.getLastCall()?.url ?? "");
    expect(mock.getLastCall()?.method).toBe("GET");
    expect(url.pathname).toBe("/nexla-api/data_sources/all");
    expect(url.searchParams.get("per_page")).toBe("3");
  });
});
