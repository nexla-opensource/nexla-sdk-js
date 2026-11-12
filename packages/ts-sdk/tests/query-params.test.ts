/**
 * Typed list query parameters (spec section 7). Wire names are used as keys.
 * tags is sent as one comma-separated value. from and to are the wire names for date filters.
 */

import { describe, expect, it } from "vitest";
import { NexlaClient } from "../src/client/nexla-client.js";
import type { AccessRole, ListParams } from "../src/index.js";
import { createMockFetch } from "./utils/mock-fetch.js";

const BASE = "https://test.nexla.io";

const clientFor = (bodies: unknown[] = [[]]) => {
  const mock = createMockFetch(bodies.map((body) => ({ status: 200, body })));
  const client = new NexlaClient({ accessToken: "tok", baseUrl: BASE, fetch: mock.fetchFn, retry: { maxRetries: 0 } });
  return { client, calls: mock.calls };
};

describe("AccessRole", () => {
  it("accepts the eleven documented values and rejects others at compile time", () => {
    const roles: AccessRole[] = [
      "admin",
      "admin_only",
      "all",
      "collaborator",
      "collaborator_only",
      "member",
      "operator",
      "owner",
      "owner_only",
      "sharer",
      "sharer_only"
    ];
    expect(roles).toHaveLength(11);

    // @ts-expect-error "boss" is not an access role
    const invalid: AccessRole = "boss";
    expect(invalid).toBe("boss");
  });
});

describe("ListParams on request", () => {
  it("sends every common parameter under its wire name", async () => {
    const { client, calls } = clientFor();
    const params: ListParams = {
      expand: true,
      sort_by: "name",
      sort_order: "desc",
      status: "ACTIVE",
      name: "orders",
      access_role: "owner_only",
      from: "2026-01-01",
      to: "2026-02-01",
      org_id: 3,
      page: 2,
      per_page: 25
    };

    await client.request("get", "/data_sources", { params: { query: params } });

    const url = new URL(calls[0]?.url ?? "");
    expect(Object.fromEntries(url.searchParams.entries())).toEqual({
      expand: "true",
      sort_by: "name",
      sort_order: "desc",
      status: "ACTIVE",
      name: "orders",
      access_role: "owner_only",
      from: "2026-01-01",
      to: "2026-02-01",
      org_id: "3",
      page: "2",
      per_page: "25"
    });
  });

  it("joins tags into one comma-separated value", async () => {
    const { client, calls } = clientFor();

    await client.request("get", "/data_sources", { params: { query: { tags: ["finance", "prod"] } } });

    const url = new URL(calls[0]?.url ?? "");
    expect(url.searchParams.getAll("tags")).toEqual(["finance,prod"]);
  });

  it("still passes a plain string tags value through unchanged", async () => {
    const { client, calls } = clientFor();

    await client.request("get", "/data_sources", { params: { query: { tags: "finance,prod" } } });

    const url = new URL(calls[0]?.url ?? "");
    expect(url.searchParams.getAll("tags")).toEqual(["finance,prod"]);
  });
});

describe("ListParams with paginate", () => {
  it("merges ListParams with the page and per_page the iterator sends", async () => {
    const { client, calls } = clientFor([[{ id: 1 }], []]);
    const params: ListParams = { tags: ["a", "b"], access_role: "sharer", per_page: 1 };

    const pages = [];
    for await (const page of client.paginate("get", "/data_sources", { params: { query: params } })) {
      pages.push(page);
    }

    expect(pages).toHaveLength(1);
    const first = new URL(calls[0]?.url ?? "");
    expect(first.searchParams.get("tags")).toBe("a,b");
    expect(first.searchParams.get("access_role")).toBe("sharer");
    expect(first.searchParams.get("page")).toBe("1");
    expect(first.searchParams.get("per_page")).toBe("1");
  });
});
