# @nexla/sdk

## 0.3.0

### Minor Changes

- Align the SDK with the backend contract and cover the public backend API.

  - **HTTP methods and paths.** Approval reject uses PUT. Self-sign-up approve uses POST. Marketplace domain create uses `POST /marketplace/domains`. Operations with no backend route are marked `@deprecated`.
  - **Custodians (behavior change).** `add_org_custodians` and `add_domain_custodians` now send PUT, which adds custodians. Before, they sent POST, which replaced the list. Use `reset_org_custodians` or `reset_domain_custodians` to replace the list. `update_org_custodians` and `update_domain_custodians` remain as `@deprecated` aliases.
  - **Errors.** Every error body shape is parsed. New classes: `AccountLockedError` (423), `NexlaTimeoutError`, and `NexlaConnectionError`. `NexlaError` adds `body`, `errorCode`, `requestId`, `method`, and `url`. An empty error body throws. A 423 is not refreshed like a 401.
  - **Retries.** POST and PATCH are not retried on 5xx. A 429 is retried for every method. The wait uses the body `error.retry_after`, then `Retry-After`. A wait over 60 seconds is not retried. Default backoff is 500 ms, capped at 8 seconds. `retryOn` defaults to 502, 503, and 504.
  - **Timeouts and cancellation.** New `timeoutMs` option (default 60000) and a per-call `signal`.
  - **Auth.** New `apiKey` option (env `NEXLA_API_KEY`), `email`/`password`/`orgId` login, `dataplane` option, and `switchOrg(orgId)`. Concurrent token requests share one call. Requests send `Accept: application/json`. The `apiVersion` option is deprecated.
  - **Pagination.** `client.paginate()` yields pages. `client.paginateItems()` yields items. `client.requestWithResponse()` returns the response headers.
  - **Query parameters.** New `ListParams` and `AccessRole` types. A `tags` array is sent as one comma-separated value.
  - **Backend coverage.** The generator reads `openapi/nexla-api.public.json` in addition to `plugin-redoc-0.yaml`. Every operation in the public backend spec now has a generated method. Existing method names are unchanged. New resource classes include `tools`, `tool_sets`, `mcp_sessions`, `sdk_applications`, `validators`, `vendors`, and others. Backend routes that already had an SDK resource (for example `data_sources`, `data_sinks`, and `data_sets`) use the existing resource name (`sources`, `destinations`, `nexsets`). The `resourceMap` export no longer has the keys `cubejs`, `marketplace`, and `search_health`, because they had no operations.
  - **Contract fixtures.** Shared request and response fixtures are replayed through `NexlaClient` in the test suite.
  - **Runtime.** The SDK source does not use `Buffer`. Environment reads work when `process` is not defined.
  - **Removed routes.** `client.root` (`GET /`), `client.mock_catalog_add` (`POST /mock_catalog_add`), `GET /health`, and the `PUT` and `PATCH` routes on `/gen_ai_org_settings/{setting_id}` are removed. The backend does not serve these routes.
  - **Path parameter names (breaking).** Thirteen operations now use the placeholder name from their path. Before, the value did not replace the placeholder, so the request went to a URL that still contained it. Pass the new names:
    - `data_set_docs_recommendation`: `set_id` becomes `data_set_id`.
    - Audit logs: `data_source_id` becomes `source_id`, `data_sink_id` becomes `sink_id`, `data_set_id` becomes `set_id`, `data_credential_id` becomes `credential_id`, and `data_schema_id` becomes `schema_id`.
    - Flow accessors (get and delete): `data_flow_id` becomes `flow_id`.
    - Gen AI integration configs (get, update, delete): `set_id` becomes `gen_ai_config_id`.
    - Gen AI org settings (get, delete): `org_gen_ai_config_id` becomes `gen_ai_org_setting_id`.
  - **Query parameters (breaking).** `all` on flow activate and pause, `read` on notifications and notification count, and `groupby` and `orderby` on metrics are query parameters now. Before, they were declared as path parameters and were not sent. Pass them under `query`.
  - **Operation IDs.** The get-by-id auth config operation is `get_api_auth_config`. `get_api_auth_configs` remains the list operation. The update operation for `/orgs/{org_id}/auth_settings/{auth_setting_id}` is `update_org_auth_setting`.
  - **Deprecated.** The backend operations under `/data_flows/*` (except `/data_flows/metrics/*`) are backwards-compatible aliases of `/flows`. Their methods are `@deprecated`. Use the `flows` methods instead.
  - **Packaging.** `require()` consumers get declaration types from `dist/index.d.cts`. Before, they got the ESM declaration file.

## 0.2.0

### Minor Changes

- a40fcc6: Ship the TypeScript SDK with OpenAPI coverage gates and spec metadata validation.
