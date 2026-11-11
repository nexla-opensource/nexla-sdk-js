/**
 * Auth modes (spec section 2): apiKey, email/password/orgId, dataplane, switchOrg,
 * shared token fetch, Accept header, env access, and a runtime without process.
 */

import { afterEach, describe, expect, it, vi } from "vitest";
import { NexlaClient } from "../src/client/nexla-client.js";
import { NexlaError } from "../src/errors.js";
import { WebhooksClient } from "../src/webhooks/index.js";
import { base64Encode, readEnv } from "../src/runtime.js";

type Recorded = { method: string; url: string; headers: Headers };

/** Answers /token and /token/refresh with the given token; any other path gets [] (or `data`). */
const scriptedFetch = (options: { token?: string; data?: unknown; tokenDelayMs?: number } = {}) => {
  const calls: Recorded[] = [];
  const token = options.token ?? "tok-1";
  const fetchFn: typeof fetch = async (input, init) => {
    const request = input instanceof Request ? input : new Request(input, init);
    calls.push({ method: request.method, url: request.url, headers: request.headers });
    const path = new URL(request.url).pathname;
    if (path.endsWith("/token") || path.endsWith("/token/refresh")) {
      if (options.tokenDelayMs) await new Promise((resolve) => setTimeout(resolve, options.tokenDelayMs));
      const issued = path.endsWith("/token/refresh") ? "tok-org-7" : token;
      return new Response(JSON.stringify({ access_token: issued, token_type: "Bearer", expires_in: 86400, extra: "kept" }), {
        status: 200,
        headers: { "content-type": "application/json" }
      });
    }
    return new Response(JSON.stringify(options.data ?? []), { status: 200, headers: { "content-type": "application/json" } });
  };
  return { fetchFn, calls, tokenCalls: () => calls.filter((call) => call.url.match(/\/token(\/refresh)?(\?|$)/)).length };
};

const BASE = "https://test.nexla.io";

afterEach(() => {
  vi.unstubAllGlobals();
  delete process.env["NEXLA_API_KEY"];
  delete process.env["NEXLA_ACCESS_TOKEN"];
  delete process.env["NEXLA_SERVICE_KEY"];
});

describe("credential modes", () => {
  it("sends an apiKey as Basic (as is) to /token, then Bearer for data calls", async () => {
    const mock = scriptedFetch({ data: [{ id: 1 }] });
    const client = new NexlaClient({ apiKey: "ak-123", baseUrl: BASE, fetch: mock.fetchFn });

    await expect(client.request("get", "/flows")).resolves.toEqual([{ id: 1 }]);

    expect(mock.calls[0]?.url).toBe(`${BASE}/token`);
    expect(mock.calls[0]?.headers.get("authorization")).toBe("Basic ak-123");
    expect(mock.calls[1]?.headers.get("authorization")).toBe("Bearer tok-1");
  });

  it("reads NEXLA_API_KEY from the environment when no option is given", async () => {
    process.env["NEXLA_API_KEY"] = "env-key";
    const mock = scriptedFetch();
    const client = new NexlaClient({ baseUrl: BASE, fetch: mock.fetchFn });

    await client.request("get", "/flows");

    expect(mock.calls[0]?.headers.get("authorization")).toBe("Basic env-key");
  });

  it("sends email and password as Basic base64(email:password:org_id)", async () => {
    const mock = scriptedFetch({ data: { id: 1, name: "src-1", status: "ACTIVE" } });
    const client = new NexlaClient({
      email: "dev@example.com",
      password: "pw",
      orgId: 3,
      baseUrl: BASE,
      fetch: mock.fetchFn
    });

    await client.request("get", "/data_sources/1");

    expect(mock.calls[0]?.headers.get("authorization")).toBe("Basic ZGV2QGV4YW1wbGUuY29tOnB3OjM=");
  });

  it("omits org_id from the password credential when orgId is not set", async () => {
    const mock = scriptedFetch();
    const client = new NexlaClient({ email: "dev@example.com", password: "pw", baseUrl: BASE, fetch: mock.fetchFn });

    await client.request("get", "/flows");

    expect(mock.calls[0]?.headers.get("authorization")).toBe(`Basic ${Buffer.from("dev@example.com:pw").toString("base64")}`);
  });

  it("requires both email and password for password login", () => {
    expect(() => new NexlaClient({ email: "dev@example.com", baseUrl: BASE, fetch: scriptedFetch().fetchFn })).toThrow(NexlaError);
  });

  it("rejects more than one explicit credential", () => {
    expect(() => new NexlaClient({ serviceKey: "a", apiKey: "b", baseUrl: BASE, fetch: scriptedFetch().fetchFn })).toThrow(NexlaError);
  });

  it("prefers an explicit option over an environment variable", async () => {
    process.env["NEXLA_ACCESS_TOKEN"] = "env-access";
    const mock = scriptedFetch();
    const client = new NexlaClient({ serviceKey: "svc", baseUrl: BASE, fetch: mock.fetchFn });

    await client.request("get", "/flows");

    expect(mock.calls[0]?.url).toBe(`${BASE}/token`);
    expect(mock.calls[0]?.headers.get("authorization")).toBe("Basic svc");
  });
});

describe("token request details", () => {
  it("sends X-Nexla-Dataplane on /token only", async () => {
    const mock = scriptedFetch();
    const client = new NexlaClient({ serviceKey: "svc", dataplane: "dp-7", baseUrl: BASE, fetch: mock.fetchFn });

    await client.request("get", "/flows");

    expect(mock.calls[0]?.headers.get("x-nexla-dataplane")).toBe("dp-7");
    expect(mock.calls[1]?.headers.get("x-nexla-dataplane")).toBeNull();
  });

  it("sends Accept: application/json on every request", async () => {
    const mock = scriptedFetch();
    const client = new NexlaClient({ serviceKey: "svc", baseUrl: BASE, fetch: mock.fetchFn });

    await client.request("get", "/flows");

    expect(mock.calls[0]?.headers.get("accept")).toBe("application/json");
    expect(mock.calls[1]?.headers.get("accept")).toBe("application/json");
  });

  it("shares one in-flight /token request between concurrent callers", async () => {
    const mock = scriptedFetch({ tokenDelayMs: 10 });
    const client = new NexlaClient({ serviceKey: "svc", baseUrl: BASE, fetch: mock.fetchFn });

    await Promise.all([1, 2, 3, 4, 5].map(() => client.request("get", "/flows")));

    expect(mock.tokenCalls()).toBe(1);
  });
});

describe("switchOrg", () => {
  it("calls POST /token/refresh?org_id= with the current Bearer token and uses the new token", async () => {
    const mock = scriptedFetch();
    const client = new NexlaClient({ serviceKey: "svc", baseUrl: BASE, fetch: mock.fetchFn });

    await client.request("get", "/flows");
    await client.switchOrg(7);
    await client.request("get", "/flows");

    const refresh = mock.calls[2];
    expect(refresh?.method).toBe("POST");
    expect(refresh?.url).toBe(`${BASE}/token/refresh?org_id=7`);
    expect(refresh?.headers.get("authorization")).toBe("Bearer tok-1");
    expect(mock.calls[3]?.headers.get("authorization")).toBe("Bearer tok-org-7");
  });

  it("rejects switchOrg for a direct access token", async () => {
    const client = new NexlaClient({ accessToken: "direct", baseUrl: BASE, fetch: scriptedFetch().fetchFn });

    await expect(client.switchOrg(7)).rejects.toBeInstanceOf(NexlaError);
  });
});

describe("runtime neutrality", () => {
  it("reads no environment variable when process is not defined", async () => {
    vi.stubGlobal("process", undefined);
    expect(readEnv("NEXLA_API_KEY")).toBeUndefined();

    const mock = scriptedFetch();
    const client = new NexlaClient({ accessToken: "direct", baseUrl: BASE, fetch: mock.fetchFn });
    await expect(client.request("get", "/flows")).resolves.toEqual([]);
  });

  it("encodes base64 without Buffer and matches Buffer output", () => {
    expect(base64Encode("dev@example.com:pw:3")).toBe("ZGV2QGV4YW1wbGUuY29tOnB3OjM=");
    expect(base64Encode("é:ü")).toBe(Buffer.from("é:ü").toString("base64"));
  });

  it("sends a webhook header credential without Buffer", async () => {
    let authorization: string | null = null;
    const fetchFn: typeof fetch = (input, init) => {
      const request = input instanceof Request ? input : new Request(input, init);
      authorization = request.headers.get("authorization");
      return Promise.resolve(new Response("{}", { status: 200, headers: { "content-type": "application/json" } }));
    };
    const webhooks = new WebhooksClient({ apiKey: "wk", fetch: fetchFn });

    await webhooks.sendOneRecord("https://hooks.example.com/abc", { id: 1 }, { authMethod: "header" });

    expect(authorization).toBe("Basic d2s=");
  });
});
