/**
 * HTTP retry, Retry-After, timeout and cancellation policy (spec sections 3 and 4).
 * No network: every scenario uses a scripted fetch and an injected sleep.
 */

import { describe, expect, it } from "vitest";
import { createFetchWithRetry } from "../src/client/http.js";
import { NexlaClient } from "../src/client/nexla-client.js";
import { NexlaConnectionError, NexlaTimeoutError, RateLimitError, ServerError } from "../src/errors.js";

const json = (status: number, body: unknown = {}, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json", ...headers } });

const rateLimited = (retryAfter: number, headers: Record<string, string> = {}) =>
  json(429, { error: { detail: "Rate limit exceeded.", retry_after: retryAfter, type: "RateLimitExceeded" } }, headers);

/** Records each delay the retry loop asks for and does not wait. */
const recordingSleep = () => {
  const delays: number[] = [];
  const sleep = (ms: number) => {
    delays.push(ms);
    return Promise.resolve();
};
  return { delays, sleep };
};

const connectError = () =>
  Object.assign(new TypeError("fetch failed"), {
    cause: Object.assign(new Error("connect ECONNREFUSED"), { code: "ECONNREFUSED" })
  });

const resetAfterSend = () =>
  Object.assign(new TypeError("fetch failed"), {
    cause: Object.assign(new Error("socket hang up"), { code: "ECONNRESET" })
  });

/** A fetch that never answers and rejects when the request signal aborts. */
const hangUntilAborted: typeof fetch = (input) =>
  new Promise((_resolve, reject) => {
    const request = input as Request;
    request.signal.addEventListener("abort", () => reject(request.signal.reason as Error));
  });

describe("Retry-After handling for 429", () => {
  it("uses body error.retry_after before the Retry-After header", async () => {
    const { delays, sleep } = recordingSleep();
    const responses = [rateLimited(1, { "retry-after": "5" }), json(200, { ok: true })];
    const baseFetch: typeof fetch = () => Promise.resolve(responses.shift() ?? json(200));

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 2, sleep });
    const response = await fetchWithRetry(new Request("https://example.com/flows"));

    expect(response.status).toBe(200);
    expect(delays).toEqual([1000]);
  });

  it("uses a Retry-After header in seconds when the body has no retry_after", async () => {
    const { delays, sleep } = recordingSleep();
    const responses = [json(429, { message: "slow" }, { "retry-after": "7" }), json(200)];
    const baseFetch: typeof fetch = () => Promise.resolve(responses.shift() ?? json(200));

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 2, sleep });
    await fetchWithRetry(new Request("https://example.com/flows"));

    expect(delays).toEqual([7000]);
  });

  it("uses a Retry-After HTTP date when no seconds value is present", async () => {
    const { delays, sleep } = recordingSleep();
    const when = new Date(Date.now() + 3000).toUTCString();
    const responses = [json(429, {}, { "retry-after": when }), json(200)];
    const baseFetch: typeof fetch = () => Promise.resolve(responses.shift() ?? json(200));

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 2, sleep });
    await fetchWithRetry(new Request("https://example.com/flows"));

    expect(delays).toHaveLength(1);
    // The HTTP date has one-second resolution, so allow a window below 3000 ms.
    expect(delays[0]).toBeGreaterThan(1000);
    expect(delays[0]).toBeLessThanOrEqual(3000);
  });

  it("does not retry when the wait is over 60 s and returns the 429", async () => {
    const { delays, sleep } = recordingSleep();
    let calls = 0;
    const baseFetch: typeof fetch = () => {
      calls += 1;
      return Promise.resolve(rateLimited(120));
    };

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 3, sleep });
    const response = await fetchWithRetry(new Request("https://example.com/flows"));

    expect(response.status).toBe(429);
    expect(calls).toBe(1);
    expect(delays).toEqual([]);
  });

  it("retries when the wait is exactly 60 s", async () => {
    const { delays, sleep } = recordingSleep();
    const responses = [rateLimited(60), json(200)];
    const baseFetch: typeof fetch = () => Promise.resolve(responses.shift() ?? json(200));

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 2, sleep });
    const response = await fetchWithRetry(new Request("https://example.com/flows"));

    expect(response.status).toBe(200);
    expect(delays).toEqual([60000]);
  });
});

describe("retry method rules", () => {
  it("retries a POST after a 429", async () => {
    const responses = [rateLimited(0), json(201)];
    const baseFetch: typeof fetch = () => Promise.resolve(responses.shift() ?? json(201));

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 2, sleep: async () => {} });
    const response = await fetchWithRetry(new Request("https://example.com/x", { method: "POST", body: "{}" }));

    expect(response.status).toBe(201);
  });

  it("retries POST on 503 when retryMethods includes POST", async () => {
    const responses = [json(503), json(200)];
    const baseFetch: typeof fetch = () => Promise.resolve(responses.shift() ?? json(200));

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 2, retryMethods: ["GET", "POST"], sleep: async () => {} });
    const response = await fetchWithRetry(new Request("https://example.com/x", { method: "POST", body: "{}" }));

    expect(response.status).toBe(200);
  });

  it("uses exponential backoff with a 500 ms base and jitter below 100 ms", async () => {
    const { delays, sleep } = recordingSleep();
    let calls = 0;
    const baseFetch: typeof fetch = () => {
      calls += 1;
      return Promise.resolve(calls < 4 ? json(503) : json(200));
    };

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 3, sleep });
    await fetchWithRetry(new Request("https://example.com/flows"));

    expect(delays).toHaveLength(3);
    expect(delays[0]).toBeGreaterThanOrEqual(500);
    expect(delays[0]).toBeLessThan(600);
    expect(delays[1]).toBeGreaterThanOrEqual(1000);
    expect(delays[1]).toBeLessThan(1100);
    expect(delays[2]).toBeGreaterThanOrEqual(2000);
    expect(delays[2]).toBeLessThan(2100);
  });
});

describe("network failures", () => {
  it("retries a connect error on POST", async () => {
    let calls = 0;
    const baseFetch: typeof fetch = () => {
      calls += 1;
      if (calls === 1) return Promise.reject(connectError());
      return Promise.resolve(json(201, { id: 1 }));
    };

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 2, sleep: async () => {} });
    const response = await fetchWithRetry(new Request("https://example.com/x", { method: "POST", body: "{}" }));

    expect(response.status).toBe(201);
    expect(calls).toBe(2);
  });

  it("does not retry a POST whose connection reset after send, and raises NexlaConnectionError", async () => {
    let calls = 0;
    const baseFetch: typeof fetch = () => {
      calls += 1;
      return Promise.reject(resetAfterSend());
    };

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 3, sleep: async () => {} });
    const request = fetchWithRetry(new Request("https://example.com/x", { method: "POST", body: "{}" }));

    await expect(request).rejects.toBeInstanceOf(NexlaConnectionError);
    expect(calls).toBe(1);
  });

  it("retries a GET whose connection reset after send", async () => {
    let calls = 0;
    const baseFetch: typeof fetch = () => {
      calls += 1;
      if (calls === 1) return Promise.reject(resetAfterSend());
      return Promise.resolve(json(200));
    };

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 2, sleep: async () => {} });
    const response = await fetchWithRetry(new Request("https://example.com/flows"));

    expect(response.status).toBe(200);
    expect(calls).toBe(2);
  });
});

describe("timeouts and cancellation", () => {
  it("throws NexlaTimeoutError when a GET exceeds timeoutMs", async () => {
    let calls = 0;
    const baseFetch: typeof fetch = (input, init) => {
      calls += 1;
      return hangUntilAborted(input, init);
    };

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 0, timeoutMs: 20 });

    await expect(fetchWithRetry(new Request("https://example.com/flows"))).rejects.toBeInstanceOf(NexlaTimeoutError);
    expect(calls).toBe(1);
  });

  it("retries a timed-out GET and then throws NexlaTimeoutError", async () => {
    let calls = 0;
    const baseFetch: typeof fetch = (input, init) => {
      calls += 1;
      return hangUntilAborted(input, init);
    };

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 1, timeoutMs: 20, sleep: async () => {} });

    await expect(fetchWithRetry(new Request("https://example.com/flows"))).rejects.toBeInstanceOf(NexlaTimeoutError);
    expect(calls).toBe(2);
  });

  it("does not retry a timed-out POST", async () => {
    let calls = 0;
    const baseFetch: typeof fetch = (input, init) => {
      calls += 1;
      return hangUntilAborted(input, init);
    };

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 3, timeoutMs: 20, sleep: async () => {} });

    await expect(
      fetchWithRetry(new Request("https://example.com/x", { method: "POST", body: "{}" }))
    ).rejects.toBeInstanceOf(NexlaTimeoutError);
    expect(calls).toBe(1);
  });

  it("aborts with the caller's signal, without a timeout error and without retrying", async () => {
    let calls = 0;
    const controller = new AbortController();
    const baseFetch: typeof fetch = (input, init) => {
      calls += 1;
      setTimeout(() => controller.abort(new Error("caller cancelled")), 5);
      return hangUntilAborted(input, init);
    };

    const fetchWithRetry = createFetchWithRetry(baseFetch, { maxRetries: 3, timeoutMs: 1000, sleep: async () => {} });
    const request = fetchWithRetry(new Request("https://example.com/flows", { signal: controller.signal }));

    await expect(request).rejects.toThrow("caller cancelled");
    await request.catch((error: unknown) => {
      expect(error).not.toBeInstanceOf(NexlaTimeoutError);
    });
    expect(calls).toBe(1);
  });
});

describe("NexlaClient wiring", () => {
  it("applies timeoutMs to a request made through the client", async () => {
    const client = new NexlaClient({
      accessToken: "tok",
      baseUrl: "https://example.com",
      fetch: hangUntilAborted,
      timeoutMs: 20,
      retry: { maxRetries: 0 }
    });

    await expect(client.request("get", "/flows")).rejects.toBeInstanceOf(NexlaTimeoutError);
  });

  it("retries the /token call on 429 and does not retry it on 503", async () => {
    let tokenCalls = 0;
    let tokenStatus = 429;
    const fetchFn: typeof fetch = (input, init) => {
      const request = input instanceof Request ? input : new Request(input, init);
      if (request.url.endsWith("/token")) {
        tokenCalls += 1;
        if (tokenStatus === 429) {
          tokenStatus = 200;
          return Promise.resolve(rateLimited(0));
        }
        return Promise.resolve(json(200, { access_token: "tok", expires_in: 86400 }));
      }
      return Promise.resolve(json(200, []));
    };
    const client = new NexlaClient({ serviceKey: "svc", baseUrl: "https://example.com", fetch: fetchFn, retry: { sleep: async () => {} } });

    await expect(client.request("get", "/flows")).resolves.toEqual([]);
    expect(tokenCalls).toBe(2);

    tokenCalls = 0;
    const failingFetch: typeof fetch = (input, init) => {
      const request = input instanceof Request ? input : new Request(input, init);
      if (request.url.endsWith("/token")) {
        tokenCalls += 1;
        return Promise.resolve(json(503, { message: "down" }));
      }
      return Promise.resolve(json(200, []));
    };
    const client503 = new NexlaClient({ serviceKey: "svc", baseUrl: "https://example.com", fetch: failingFetch, retry: { sleep: async () => {} } });

    await expect(client503.request("get", "/flows")).rejects.toBeInstanceOf(ServerError);
    expect(tokenCalls).toBe(1);
  });

  it("surfaces an over-cap 429 as RateLimitError with retryAfter", async () => {
    const client = new NexlaClient({
      accessToken: "tok",
      baseUrl: "https://example.com",
      fetch: () => Promise.resolve(rateLimited(120)),
      retry: { sleep: async () => {} }
    });

    const error = await client.request("get", "/flows").catch((caught: unknown) => caught);
    expect(error).toBeInstanceOf(RateLimitError);
    expect((error as RateLimitError).retryAfter).toBe(120);
  });
});

describe("per-call signal", () => {
  it("cancels a client request with the caller's signal and does not raise NexlaTimeoutError", async () => {
    const client = new NexlaClient({
      accessToken: "tok",
      baseUrl: "https://example.com",
      fetch: hangUntilAborted,
      retry: { maxRetries: 3, sleep: async () => {} }
    });
    const controller = new AbortController();
    setTimeout(() => controller.abort(new Error("stop")), 5);

    const error = await client.request("get", "/flows", { signal: controller.signal }).catch((caught: unknown) => caught);
    expect(error).toBeInstanceOf(Error);
    expect((error as Error).message).toBe("stop");
    expect(error).not.toBeInstanceOf(NexlaTimeoutError);
  });
});
