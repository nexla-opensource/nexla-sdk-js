# Nexla TypeScript SDK Architecture

## Goals

- Ship a production-ready TypeScript SDK with strict typing and stable runtime behavior.
- Keep API coverage OpenAPI-first so endpoint additions are code-generated, not hand-written.
- Preserve idiomatic resource naming and common call patterns to minimize ergonomic friction.

## Package Boundaries

- This repository is a pnpm + Turborepo workspace.
- The TypeScript SDK lives in `packages/ts-sdk` and has independent build/test/lint/typecheck tasks.
- SDK docs live in `docs/ts-sdk` and are versioned with code.

## TypeScript SDK Layout

```text
packages/ts-sdk/
  src/
    auth/                  # Service-key and access-token providers
    client/                # NexlaClient, retry logic, typed request helpers
    generated/             # OpenAPI-generated schema + resource map
    resources/
      generated/           # Generated resource clients (operationId methods + CRUD aliases)
    webhooks/              # Webhook client (API key auth)
    errors.ts              # SDK exception hierarchy
    index.ts               # Public package exports
  scripts/
    generate-resource-map.mjs
    generate-spec-metadata.mjs
    check-generated-coverage.mjs
  tests/
```

## Runtime Request Pipeline

1. `NexlaClient` selects auth mode from constructor options or env vars.
2. `createFetchWithRetry` wraps `fetch` with retry/backoff behavior.
3. `openapi-fetch` middleware injects headers:
   - `Authorization: Bearer <token>`
   - `Accept: application/json` (versioning is path-only)
   - `Content-Type: application/json` for non-GET/HEAD
4. Typed requests flow through `request` / `requestOperation`.
5. HTTP status codes map to SDK errors (`AuthenticationError`, `ValidationError`, `RateLimitError`, etc.).
6. Basic-credential auth (service key, API key, email and password) can auto-refresh on 401 and retry once. A 423 is not refreshed.

## Authentication Architecture

- `serviceKey`, `apiKey`, `email`/`password`: obtain session tokens via `POST /token`, cache the token, and refresh with a margin. Concurrent callers share one in-flight `/token` request.
- `accessToken`: direct bearer token, no refresh flow.
- `webhookApiKey`: optional webhook client (`client.webhooks`) for webhook endpoints.

## Backend OpenAPI Spec (Public)

`openapi/nexla-api.public.json` is generator input. It describes the public Nexla backend API: 1,249 operations and 227 component schemas.

Provenance:

- The backend FastAPI app exports the document with `app.openapi()`.
- The `/api/v1` prefix is removed from every path.
- Admin-only routes are removed. The exclusion list is kept with the backend tooling.
- Each `operationId` is the name of the backend route function. When two routes share a name, the builder adds the resource name or the HTTP method to make it unique.

How to rebuild:

1. Export the OpenAPI document and the route list from the backend.
2. Run the public spec builder. The builder is maintained with the backend tooling and is not in this repository.
3. Copy the output to `openapi/nexla-api.public.json`.
4. Run `pnpm -C packages/ts-sdk gen`.

CI does not rebuild this file. The builder needs the private backend source.

## OpenAPI Generation Pipeline

The inputs are `plugin-redoc-0.yaml` and `openapi/nexla-api.public.json`. The codegen reads one merged document, `packages/ts-sdk/src/generated/merged-spec.json`, which `gen` builds from both inputs.

Merge rules (`scripts/build-merged-spec.mjs`):

- Every plugin-redoc operation is kept unchanged.
- A backend operation is added only when its method and normalized path are not in plugin-redoc. A path is normalized by replacing `{...}` with `{}` and removing any query string and trailing slash.
- Backend component schemas are copied under a `Backend` prefix, and their `$ref`s are rewritten. Only schemas that the added operations reach are copied.
- The backend `HTTPBearer` security requirement becomes `NexlaSessionToken`. An operation without a `security` field keeps the default, which requires a session token.
- Each added operation gets a tag that equals its resource key. The first path segment selects the key. `data_sources` maps to `sources`, `data_sinks` to `destinations`, `data_sets` to `nexsets`, `data_credentials` to `credentials`, `data_maps` to `lookups`, `orgs` to `organizations`, `api_auth_configs` to `org_auth_configs`, `gen_ai_*` to `genai`, `token` to `tokens`, `transform` to `transforms`, and `notification_setting` to `notification_settings`. Any other segment becomes its own resource key. The root path becomes `root`.
- When an added `operationId` matches an existing one, the resource key is added as a prefix.
- Backend operations under `/data_flows/*` are backwards-compatible aliases of `/flows`. They are marked `deprecated`, so their generated methods carry `@deprecated`. The `/data_flows/metrics/*` routes are not aliases and are not marked.

```bash
pnpm -C packages/ts-sdk gen
```

This generates:

- `packages/ts-sdk/src/generated/merged-spec.json` (merged input, committed)
- `packages/ts-sdk/src/generated/schema.ts` (all paths/components/operations types)
- `packages/ts-sdk/src/generated/resource-map.ts` (CRUD alias map)
- `packages/ts-sdk/src/generated/spec-metadata.ts` (spec hash + endpoint inventory)
- `packages/ts-sdk/src/resources/generated/*.ts` (per-resource operation clients)

Coverage is enforced by `check-generated-coverage.mjs`, which compares generated endpoints against the merged spec. It also fails when the committed merged spec differs from a rebuild of its inputs.

## Coverage Model

- **Operation coverage:** measured against OpenAPI `operationId`s in generated resources; enforced in CI by `check-generated-coverage.mjs`.
- See `docs/ts-sdk/api-coverage.md` for the refresh workflow and PR checklist.

## Release and CI Boundaries

Blocking TypeScript checks are in `.github/workflows/ci.yml`:

- changeset check (no unversioned `.changeset/*.md`)
- artifact generation + clean diff, and `check:generated`
- lint and format check
- typecheck
- tests/coverage
- build
- package checks: publint, attw, and size-limit (budgets in `packages/ts-sdk/package.json`)
- consumer smoke test on Node 18 and 20 (`scripts/consumer-smoke.mjs`, a separate job)

The package floor is Node.js 18, from `engines` in `packages/ts-sdk/package.json`. The main job runs on Node 20.

Integration tests are intentionally documented as non-blocking relative to publish/release gating:

- `docs/ts-sdk/integration-tests.md`

## Related Docs

- [Coverage process](./api-coverage.md)
- [Integration test policy](./integration-tests.md)
- [Behavior spec](./behavior-spec.md)
