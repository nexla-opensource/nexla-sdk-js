/**
 * Error mapping contract (spec section 5). Each case sends one scripted response
 * through the real NexlaClient with mocked fetch and checks the thrown error.
 */

import { describe, expect, it } from "vitest";
import { NexlaClient } from "../src/client/nexla-client.js";
import {
  AccountLockedError,
  AuthenticationError,
  AuthorizationError,
  NexlaConnectionError,
  NexlaError,
  NexlaTimeoutError,
  NotFoundError,
  RateLimitError,
  ResourceConflictError,
  ServerError,
  ValidationError
} from "../src/errors.js";

type Scripted = { status: number; body?: unknown; text?: string; headers?: Record<string, string> };

const toResponse = (scripted: Scripted): Response => {
  const headers: Record<string, string> = { ...(scripted.headers ?? {}) };
  let payload = "";
  if (scripted.text !== undefined) {
    payload = scripted.text;
  } else if (scripted.body !== undefined) {
    payload = JSON.stringify(scripted.body);
    headers["content-type"] ??= "application/json";
  }
  return new Response(payload, { status: scripted.status, headers });
};

const errorFor = async (scripted: Scripted): Promise<NexlaError> => {
  const fetchFn: typeof fetch = () => Promise.resolve(toResponse(scripted));
  const client = new NexlaClient({
    accessToken: "tok",
    baseUrl: "https://example.com",
    fetch: fetchFn,
    retry: { maxRetries: 0 }
  });
  try {
    await client.request("get", "/flows");
  } catch (error) {
    if (error instanceof NexlaError) return error;
    throw error;
  }
  throw new Error("request did not throw");
};

describe("error body shapes", () => {
  it("reads message and error_code (shape 1)", async () => {
    const error = await errorFor({ status: 409, body: { message: "Name taken", error_code: "duplicate_name" } });
    expect(error).toBeInstanceOf(ResourceConflictError);
    expect(error.message).toBe("Name taken");
    expect(error.errorCode).toBe("duplicate_name");
    expect(error.body).toEqual({ message: "Name taken", error_code: "duplicate_name" });
  });

  it("uses message and keeps detail in body (shape 2)", async () => {
    const error = await errorFor({ status: 403, body: { detail: "Not authorized to manage this Org", message: "Forbidden" } });
    expect(error).toBeInstanceOf(AuthorizationError);
    expect(error.message).toBe("Forbidden");
    expect(error.body).toEqual({ detail: "Not authorized to manage this Org", message: "Forbidden" });
  });

  it("reads nested 429 error object (shape 3)", async () => {
    const error = await errorFor({
      status: 429,
      body: { error: { detail: "Rate limit exceeded.", retry_after: 120, type: "RateLimitExceeded" } }
    });
    expect(error).toBeInstanceOf(RateLimitError);
    expect(error.message).toBe("Rate limit exceeded.");
    expect(error.errorCode).toBe("RateLimitExceeded");
    expect((error as RateLimitError).retryAfter).toBe(120);
  });

  it("reads error as a string (shape 4)", async () => {
    const error = await errorFor({ status: 500, body: { error: "db down" } });
    expect(error).toBeInstanceOf(ServerError);
    expect(error.message).toBe("db down");
  });

  it("reads detail as a string (shape 5)", async () => {
    const error = await errorFor({ status: 404, body: { detail: "No such source" } });
    expect(error).toBeInstanceOf(NotFoundError);
    expect(error.message).toBe("No such source");
  });

  it("uses trimmed text for a non-JSON body (shape 6)", async () => {
    const error = await errorFor({ status: 429, text: "Retry later\n", headers: { "content-type": "text/plain" } });
    expect(error).toBeInstanceOf(RateLimitError);
    expect(error.message).toBe("Retry later");
    expect(error.body).toBe("Retry later\n");
  });

  it("uses status and reason for an empty body (shape 7)", async () => {
    const error = await errorFor({ status: 401, text: "" });
    expect(error).toBeInstanceOf(AuthenticationError);
    expect(error.message).not.toBe("");
    expect(error.message).toContain("401");
    expect(error.body).toBeUndefined();
  });

  it("maps 400 with message to ValidationError", async () => {
    const error = await errorFor({ status: 400, body: { message: "name is required" } });
    expect(error).toBeInstanceOf(ValidationError);
    expect(error.message).toBe("name is required");
  });

  it("maps 422 pagination range to ValidationError", async () => {
    const error = await errorFor({ status: 422, body: { detail: "per_page", message: "Pagination value is out of range" } });
    expect(error).toBeInstanceOf(ValidationError);
    expect(error.message).toBe("Pagination value is out of range");
  });
});

describe("error classes and fields", () => {
  it("maps 423 to AccountLockedError, which is an AuthenticationError", async () => {
    const error = await errorFor({ status: 423, text: "" });
    expect(error).toBeInstanceOf(AccountLockedError);
    expect(error).toBeInstanceOf(AuthenticationError);
    expect(error.statusCode).toBe(423);
  });

  it("reads X-Request-Id into requestId", async () => {
    const error = await errorFor({ status: 404, text: "", headers: { "X-Request-Id": "req-123" } });
    expect(error).toBeInstanceOf(NotFoundError);
    expect(error.requestId).toBe("req-123");
  });

  it("never returns a falsy error for an error response", async () => {
    const error = await errorFor({ status: 500, text: "" });
    expect(error).toBeInstanceOf(ServerError);
    expect(error.message.length).toBeGreaterThan(0);
  });

  it("builds NexlaTimeoutError and NexlaConnectionError as NexlaError subclasses", () => {
    const timeout = new NexlaTimeoutError("timed out");
    const connection = new NexlaConnectionError("reset");
    expect(timeout).toBeInstanceOf(NexlaError);
    expect(connection).toBeInstanceOf(NexlaError);
    expect(timeout.name).toBe("NexlaTimeoutError");
    expect(connection.name).toBe("NexlaConnectionError");
  });
});

describe("423 is not refreshed like 401", () => {
  it("does not fetch a new service token on 423", async () => {
    let tokenCalls = 0;
    const fetchFn: typeof fetch = (input, init) => {
      const request = input instanceof Request ? input : new Request(input, init);
      if (request.url.endsWith("/token")) {
        tokenCalls += 1;
        return Promise.resolve(new Response(JSON.stringify({ access_token: "tok", expires_in: 86400 }), {
          status: 200,
          headers: { "content-type": "application/json" }
        }));
      }
      return Promise.resolve(new Response("", { status: 423 }));
    };
    const client = new NexlaClient({ serviceKey: "svc", baseUrl: "https://example.com", fetch: fetchFn, retry: { maxRetries: 0 } });

    await expect(client.request("get", "/flows")).rejects.toBeInstanceOf(AccountLockedError);
    expect(tokenCalls).toBe(1);
  });
});
