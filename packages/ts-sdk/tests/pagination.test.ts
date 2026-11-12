/**
 * Pagination (spec section 6): client.paginate() yields pages, client.paginateItems() yields items.
 * Stop rules, first match wins: X-Current-Page/X-Total-Page-Count, then Link rel="Next", then a short page.
 */

import { describe, expect, it } from "vitest";
import { NexlaClient } from "../src/client/nexla-client.js";
import { createMockFetch, type MockResponse } from "./utils/mock-fetch.js";

const BASE = "https://test.nexla.io";

const rows = (from: number, count: number) =>
  Array.from({ length: count }, (_, index) => ({ id: from + index, name: `src-${from + index}` }));

const clientFor = (responses: MockResponse[]) => {
  const mock = createMockFetch(responses);
  const client = new NexlaClient({ accessToken: "tok", baseUrl: BASE, fetch: mock.fetchFn, retry: { maxRetries: 0 } });
  return { client, calls: mock.calls };
};

const drain = async <T>(iterable: AsyncIterable<T>): Promise<T[]> => {
  const values: T[] = [];
  for await (const value of iterable) values.push(value);
  return values;
};

const queryOf = (call: Request | undefined) => {
  const url = new URL(call?.url ?? "");
  return { page: url.searchParams.get("page"), perPage: url.searchParams.get("per_page") };
};

describe("client.paginate", () => {
  it("follows X-Current-Page and X-Total-Page-Count, then stops at the last page", async () => {
    const pageHeaders = (current: number) => ({
      "X-Current-Page": String(current),
      "X-Page-Count": "2",
      "X-Total-Count": "5",
      "X-Total-Page-Count": "3",
    });
    const { client, calls } = clientFor([
      { status: 200, body: rows(1, 2), headers: pageHeaders(1) },
      { status: 200, body: rows(3, 2), headers: pageHeaders(2) },
      { status: 200, body: rows(5, 1), headers: pageHeaders(3) },
    ]);

    const pages = [];
    for await (const page of client.paginate("get", "/data_sources", { params: { query: { per_page: 2 } } })) {
      pages.push(page);
    }

    expect(calls.map((call) => queryOf(call))).toEqual([
      { page: "1", perPage: "2" },
      { page: "2", perPage: "2" },
      { page: "3", perPage: "2" },
    ]);
    expect(pages.map((page) => page.items.length)).toEqual([2, 2, 1]);
    expect(pages[0]).toMatchObject({ page: 1, perPage: 2, totalCount: 5, totalPages: 3 });
  });

  it('continues while Link has rel="Next" and ignores rel="Previous"', async () => {
    const { client, calls } = clientFor([
      { status: 200, body: rows(1, 2), headers: { Link: '<https://x/data_sources?page=2&per_page=2>; rel="Next"' } },
      {
        status: 200,
        body: rows(3, 2),
        headers: { Link: '<https://x/data_sources?page=1&per_page=2>; rel="Previous"' },
      },
    ]);

    const items = [];
    for await (const item of client.paginateItems("get", "/data_sources", { params: { query: { per_page: 2 } } })) {
      items.push(item);
    }

    expect(items).toHaveLength(4);
    expect(calls).toHaveLength(2);
  });

  it('treats rel="next" in lower case as a next link', async () => {
    const { client, calls } = clientFor([
      { status: 200, body: rows(1, 1), headers: { Link: '<https://x/data_sources?page=2>; rel="next"' } },
      { status: 200, body: rows(2, 1) },
    ]);

    const pages = [];
    for await (const page of client.paginate("get", "/data_sources", { params: { query: { per_page: 2 } } })) {
      pages.push(page);
    }

    expect(pages).toHaveLength(2);
    expect(calls).toHaveLength(2);
  });

  it("does not follow the Link URL. It increments page on the configured base URL", async () => {
    const { client, calls } = clientFor([
      {
        status: 200,
        body: rows(1, 2),
        headers: { Link: '<https://other-host/api/v1/data_sources?page=2>; rel="Next"' },
      },
      { status: 200, body: rows(3, 1) },
    ]);

    await drain(client.paginate("get", "/data_sources", { params: { query: { per_page: 2 } } }));

    expect(calls[1]?.url.startsWith(`${BASE}/data_sources?`)).toBe(true);
    expect(queryOf(calls[1])).toEqual({ page: "2", perPage: "2" });
  });

  it("stops on a short page when no pagination headers are present", async () => {
    const { client, calls } = clientFor([{ status: 200, body: rows(1, 1) }]);

    const items = [];
    for await (const item of client.paginateItems("get", "/data_sources", { params: { query: { per_page: 2 } } })) {
      items.push(item);
    }

    expect(items).toHaveLength(1);
    expect(calls).toHaveLength(1);
  });

  it("stops on an empty page and does not yield it", async () => {
    const { client, calls } = clientFor([
      { status: 200, body: rows(1, 2), headers: { Link: '<x>; rel="Next"' } },
      { status: 200, body: [], headers: { Link: '<x>; rel="Next"' } },
    ]);

    const pages = [];
    for await (const page of client.paginate("get", "/data_sources", { params: { query: { per_page: 2 } } })) {
      pages.push(page);
    }

    expect(pages).toHaveLength(1);
    expect(calls).toHaveLength(2);
  });

  it("sends per_page=100 by default", async () => {
    const { client, calls } = clientFor([{ status: 200, body: [] }]);

    await drain(client.paginate("get", "/data_sources"));

    expect(queryOf(calls[0])).toEqual({ page: "1", perPage: "100" });
  });

  it("paginates a list with query parameters that the caller set", async () => {
    const { client, calls } = clientFor([{ status: 200, body: [] }]);

    await drain(client.paginate("get", "/data_sources", { params: { query: { status: "ACTIVE" } } }));

    expect(new URL(calls[0]?.url ?? "").searchParams.get("status")).toBe("ACTIVE");
  });
});

describe("client.requestWithResponse", () => {
  it("returns the data and the response headers. request() still returns data only", async () => {
    const { client } = clientFor([{ status: 200, body: rows(1, 1), headers: { "X-Total-Count": "9" } }]);

    const { data, headers } = await client.requestWithResponse("get", "/data_sources");

    expect(data).toEqual(rows(1, 1));
    expect(headers.get("x-total-count")).toBe("9");
  });

  it("request() returns the same data as before", async () => {
    const { client } = clientFor([{ status: 200, body: rows(1, 1) }]);

    await expect(client.request("get", "/data_sources")).resolves.toEqual(rows(1, 1));
  });
});
