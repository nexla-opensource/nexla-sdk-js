/**
 * Each generated operation must send the HTTP method and path that the backend route uses.
 * Source of truth: admin-api-python route decorators (see _work/coverage.json js_wrong).
 */

import { describe, expect, it } from "vitest";
import { createTestClient } from "../utils/test-client.js";

const BASE_URL = "https://test.nexla.io";

const lastRequest = (mockFetch: { getLastCall(): Request | undefined }) => {
  const request = mockFetch.getLastCall();
  if (!request) throw new Error("No request was sent");
  return { method: request.method, pathname: new URL(request.url).pathname };
};

describe("generated operation HTTP methods", () => {
  it("reject_approval_request sends PUT /approval_requests/{id}/reject", async () => {
    const { client, mockFetch } = createTestClient({ accessToken: "tok", baseUrl: BASE_URL });

    await client.approval_requests.reject_approval_request({ params: { path: { request_id: 5 } } });

    expect(lastRequest(mockFetch)).toEqual({ method: "PUT", pathname: "/approval_requests/5/reject" });
  });

  it("add_org_custodians sends PUT /orgs/{id}/custodians", async () => {
    const { client, mockFetch } = createTestClient({ accessToken: "tok", baseUrl: BASE_URL });

    await client.organizations.add_org_custodians({
      params: { path: { org_id: 3 } },
      body: { custodians: [{ id: 7 }] },
    });

    expect(lastRequest(mockFetch)).toEqual({ method: "PUT", pathname: "/orgs/3/custodians" });
    expect(await mockFetch.getRequestBody(0)).toEqual({ custodians: [{ id: 7 }] });
  });

  it("reset_org_custodians sends POST /orgs/{id}/custodians", async () => {
    const { client, mockFetch } = createTestClient({ accessToken: "tok", baseUrl: BASE_URL });

    await client.organizations.reset_org_custodians({
      params: { path: { org_id: 3 } },
      body: { custodians: [{ id: 7 }] },
    });

    expect(lastRequest(mockFetch)).toEqual({ method: "POST", pathname: "/orgs/3/custodians" });
  });

  it("update_org_custodians (deprecated alias) still sends PUT /orgs/{id}/custodians", async () => {
    const { client, mockFetch } = createTestClient({ accessToken: "tok", baseUrl: BASE_URL });

    await client.organizations.update_org_custodians({
      params: { path: { org_id: 3 } },
      body: { custodians: [{ id: 7 }] },
    });

    expect(lastRequest(mockFetch)).toEqual({ method: "PUT", pathname: "/orgs/3/custodians" });
  });

  it("add_domain_custodians sends PUT /marketplace/domains/{id}/custodians", async () => {
    const { client, mockFetch } = createTestClient({ accessToken: "tok", baseUrl: BASE_URL });

    await client.marketplace.add_domain_custodians({
      params: { path: { domain_id: 9 } },
      body: { custodians: [{ id: 7 }] },
    });

    expect(lastRequest(mockFetch)).toEqual({ method: "PUT", pathname: "/marketplace/domains/9/custodians" });
  });

  it("reset_domain_custodians sends POST /marketplace/domains/{id}/custodians", async () => {
    const { client, mockFetch } = createTestClient({ accessToken: "tok", baseUrl: BASE_URL });

    await client.marketplace.reset_domain_custodians({
      params: { path: { domain_id: 9 } },
      body: { custodians: [{ id: 7 }] },
    });

    expect(lastRequest(mockFetch)).toEqual({ method: "POST", pathname: "/marketplace/domains/9/custodians" });
  });

  it("update_domain_custodians (deprecated alias) still sends PUT /marketplace/domains/{id}/custodians", async () => {
    const { client, mockFetch } = createTestClient({ accessToken: "tok", baseUrl: BASE_URL });

    await client.marketplace.update_domain_custodians({
      params: { path: { domain_id: 9 } },
      body: { custodians: [{ id: 7 }] },
    });

    expect(lastRequest(mockFetch)).toEqual({ method: "PUT", pathname: "/marketplace/domains/9/custodians" });
  });

  it("create_domain sends POST /marketplace/domains", async () => {
    const { client, mockFetch } = createTestClient({ accessToken: "tok", baseUrl: BASE_URL });

    await client.marketplace.create_domain({ body: { name: "d" } });

    expect(lastRequest(mockFetch)).toEqual({ method: "POST", pathname: "/marketplace/domains" });
  });

  it("approve_self_sign_up_request sends POST /self_signup_requests/{id}/approve", async () => {
    const { client, mockFetch } = createTestClient({ accessToken: "tok", baseUrl: BASE_URL });

    await client.self_signup_admin.approve_self_sign_up_request({ params: { path: { request_id: "5" } } });

    expect(lastRequest(mockFetch)).toEqual({ method: "POST", pathname: "/self_signup_requests/5/approve" });
  });
});
