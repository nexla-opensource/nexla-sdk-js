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

`openapi/nexla-api.public.json` is generator input. It describes the public Nexla backend API: 1,188 operations and 227 component schemas.

Provenance:

- The backend FastAPI app exports the document with `app.openapi()`.
- The `/api/v1` prefix is removed from every path. Root and `/api/v1` twins are merged.
- Each `operationId` is the name of the backend route function. When two routes share a name, the builder adds the resource name or the HTTP method to make it unique.
- Routes that are not public API are removed:
  - Admin-only routes. A route is admin-only when a dependency's name contains `super_user`, `nexla_admin`, `infra`, or `require_*admin`; when the handler calls `require_nexla_admin`, an infrastructure-user check, or `super_user_read_only`; or when a top-level `if not ...super_user...:` in the handler rejects the request. A super-user check nested in a branch (for example, only for the `public` field) does not make the route admin-only.
  - Non-API routes: `GET /`, `GET /health`, `POST /mock_catalog_add`, `/internal/*`, and handlers named `*_dead_route`.

How to rebuild (needs a checkout of the private backend):

```bash
cd "$NEXLA_ADMIN_API_PATH"
ENVIRONMENT=test ACCESS_TOKEN_SECRET_KEY=ci uv run --frozen python \
  /path/to/nexla-sdk-js/scripts/backend-spec/build_public_spec.py \
  --out /path/to/nexla-sdk-js/openapi/nexla-api.public.json
pnpm -C packages/ts-sdk gen
```

`ENVIRONMENT=test` skips the backend startup checks. Importing the app opens no database. CI does not rebuild this file, because the builder needs the private backend source.

## Backend Drift Check

`packages/ts-sdk/scripts/check-backend-drift.mjs` compares the committed `openapi/nexla-api.public.json` with a fresh public backend spec. It compares (method, normalized path) pairs, so a renamed placeholder is not drift. Operations that share a normalized key count once. A change to only one of them is not reported.

- Input: `NEXLA_BACKEND_OPENAPI`, the path to the fresh spec JSON.
- Unset or empty: the check prints a skip notice and exits 0.
- Drift: the check prints the added (`+`) and removed (`-`) operations and exits 1.

Run it locally:

```bash
NEXLA_BACKEND_OPENAPI=/path/to/nexla-api.public.json pnpm -C packages/ts-sdk check:backend-drift
```

Produce the fresh spec with these steps. The builders are maintained with the backend tooling, not in this repository.

1. In `admin-api-python`, export the FastAPI document with `app.openapi()`. Also export the route list (route name, method, path) and the admin-dependency metadata of each route.
2. Clean the document. Strip the `/api/v1` prefix, merge duplicate paths, and give each operation a readable, unique `operationId`.
3. Filter to the public API. Remove admin-only routes, `GET /`, `GET /health`, `POST /mock_catalog_add`, routes under `/internal`, and `*_dead_route` operations.
4. Save the result as the public spec, then set `NEXLA_BACKEND_OPENAPI` to its path.

CI runs the check in the `Backend drift check` step of `ci.yml`. The step passes the repository variable `vars.NEXLA_BACKEND_OPENAPI`. Public CI does not set the variable, so the step skips. To enforce the check, set the variable to a path that exists on the runner, for example on a self-hosted runner, or in a job that first creates the file.

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
- backend drift check (skips unless `vars.NEXLA_BACKEND_OPENAPI` is set; see below)

The package floor is Node.js 18, from `engines` in `packages/ts-sdk/package.json`. The main job runs on Node 20.

Integration tests are intentionally documented as non-blocking relative to publish/release gating:

- `docs/ts-sdk/integration-tests.md`

## Related Docs

- [Coverage process](./api-coverage.md)
- [Integration test policy](./integration-tests.md)
- [Behavior spec](./behavior-spec.md)
