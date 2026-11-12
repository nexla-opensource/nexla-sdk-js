import { describe, expect, it } from "vitest";
import { createFetchWithRetry } from "../src/client/http.js";

const createResponse = (status: number, body: unknown = {}) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

const noSleep = async () => {};

describe("createFetchWithRetry", () => {
  it("retries GET on 503", async () => {
    let calls = 0;
    const baseFetch: typeof fetch = () => {
      calls += 1;
      if (calls < 3) return Promise.resolve(createResponse(503));
      return Promise.resolve(createResponse(200));
    };

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 3, sleep: noSleep });
    const response = await fetchWithRetry(new Request("https://example.com"));

    expect(response.status).toBe(200);
    expect(calls).toBe(3);
  });

  it("does not retry POST on 503 because it could duplicate a create", async () => {
    let calls = 0;
    const baseFetch: typeof fetch = () => {
      calls += 1;
      return Promise.resolve(createResponse(503, { message: "unavailable" }));
    };

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 3, sleep: noSleep });
    const response = await fetchWithRetry(new Request("https://example.com", { method: "POST", body: "{}" }));

    expect(response.status).toBe(503);
    expect(calls).toBe(1);
  });

  it("retries PUT on 502 and 504 but not on 500", async () => {
    const statuses = [502, 504, 500];
    let calls = 0;
    const baseFetch: typeof fetch = () => Promise.resolve(createResponse(statuses[calls++] ?? 200));

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 3, sleep: noSleep });
    const response = await fetchWithRetry(new Request("https://example.com", { method: "PUT", body: "{}" }));

    expect(response.status).toBe(500);
    expect(calls).toBe(3);
  });

  it("retries POST after 429 and resends the same body", async () => {
    let calls = 0;
    const bodies: string[] = [];
    const baseFetch: typeof fetch = async (input: RequestInfo | URL) => {
      calls += 1;
      bodies.push(await (input as Request).text());
      if (calls === 1)
        return createResponse(429, { error: { detail: "slow down", retry_after: 1, type: "RateLimitExceeded" } });
      return createResponse(201, { id: 9 });
    };

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 3, sleep: noSleep });
    const body = JSON.stringify({ name: "s" });
    const response = await fetchWithRetry(new Request("https://example.com", { method: "POST", body }));

    expect(response.status).toBe(201);
    expect(calls).toBe(2);
    expect(bodies).toEqual([body, body]);
  });
});
