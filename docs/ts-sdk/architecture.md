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
   - `Accept: application/vnd.nexla.api.<version>+json`
   - `Content-Type: application/json` for non-GET/HEAD
4. Typed requests flow through `request` / `requestOperation`.
5. HTTP status codes map to SDK errors (`AuthenticationError`, `ValidationError`, `RateLimitError`, etc.).
6. Service-key auth can auto-refresh on 401 and retry once.

## Authentication Architecture

- `serviceKey`: obtains session tokens via `/token`, caches token, refreshes with margin.
- `accessToken`: direct bearer token, no refresh flow.
- `webhookApiKey`: optional webhook client (`client.webhooks`) for webhook endpoints.

## OpenAPI Generation Pipeline

The OpenAPI spec (`plugin-redoc-0.yaml`) is the source of truth.

```bash
pnpm -C packages/ts-sdk gen
```

This generates:

- `packages/ts-sdk/src/generated/schema.ts` (all paths/components/operations types)
- `packages/ts-sdk/src/generated/resource-map.ts` (CRUD alias map)
- `packages/ts-sdk/src/generated/spec-metadata.ts` (spec hash + endpoint inventory)
- `packages/ts-sdk/src/resources/generated/*.ts` (per-resource operation clients)

Coverage is enforced by `check-generated-coverage.mjs`, which compares generated operationIds against the spec.

## Coverage Model

- **Operation coverage:** measured against OpenAPI `operationId`s in generated resources; enforced in CI by `check-generated-coverage.mjs`.
- See `docs/ts-sdk/api-coverage.md` for the refresh workflow and PR checklist.

## Release and CI Boundaries

Blocking TypeScript checks are in `.github/workflows/ci.yml`:

- artifact generation + clean diff
- lint
- typecheck
- tests/coverage
- build

Integration tests are intentionally documented as non-blocking relative to publish/release gating:

- `docs/ts-sdk/integration-tests.md`

## Related Docs

- [Coverage process](./api-coverage.md)
- [Integration test policy](./integration-tests.md)
