# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository. It reflects the current codebase and recent changes.

## Repository Layout

This is a pnpm + Turborepo workspace housing the `@nexla/sdk` TypeScript SDK.

```
packages/ts-sdk/      # @nexla/sdk source, tests, build config
docs/ts-sdk/          # architecture, API coverage, integration-test policy
.changeset/           # Changesets for npm releases
plugin-redoc-0.yaml   # OpenAPI spec (part 1 of the codegen input)
openapi/              # Public backend OpenAPI spec (part 2 of the codegen input)
```

## Development Commands

### Setup
```bash
corepack enable                # use pinned pnpm 9.x
pnpm install --frozen-lockfile
```

### From repo root (Turborepo)
```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

### Scoped to ts-sdk
```bash
pnpm -C packages/ts-sdk lint
pnpm -C packages/ts-sdk typecheck
pnpm -C packages/ts-sdk test           # vitest run
pnpm -C packages/ts-sdk test:watch
pnpm -C packages/ts-sdk coverage       # vitest run --coverage
pnpm -C packages/ts-sdk test:integration   # requires NEXLA_SERVICE_KEY or NEXLA_ACCESS_TOKEN
pnpm -C packages/ts-sdk build          # tsup
```

### Codegen (OpenAPI → TypeScript)
```bash
pnpm -C packages/ts-sdk gen            # types + resources + spec metadata
pnpm -C packages/ts-sdk gen:types
pnpm -C packages/ts-sdk gen:resources
pnpm -C packages/ts-sdk gen:spec-metadata
pnpm -C packages/ts-sdk check:generated   # CI gate: validates generated artifacts are in sync
```

After running `gen`, `git diff --exit-code` should be clean. CI fails otherwise.

### Test environment
```bash
export NEXLA_SERVICE_KEY="your_service_key"
export NEXLA_API_URL="https://dataops.nexla.io/nexla-api"
```

## Architecture Overview

### Core Components
- **`NexlaClient`** (`packages/ts-sdk/src/client/`): main entry point; supports `serviceKey`, `apiKey`, `email`/`password`, and `accessToken`, plus retry/backoff, timeouts, and a typed request pipeline.
- **Auth** (`packages/ts-sdk/src/auth/`): service-key, API-key, and email/password session-token flows (auto-refresh on 401, retry once) and the direct access-token flow.
- **Resources** (`packages/ts-sdk/src/resources/generated/`): per-resource operation clients generated from OpenAPI `operationId`s.
- **Generated types** (`packages/ts-sdk/src/generated/`): `merged-spec.json`, `schema.ts`, `resource-map.ts`, `spec-metadata.ts` — generated from `plugin-redoc-0.yaml` and `openapi/nexla-api.public.json`.
- **Webhooks** (`packages/ts-sdk/src/webhooks/`): API-key authenticated webhook client.
- **Errors** (`packages/ts-sdk/src/errors.ts`): 11 classes. `NexlaError` is the base. The others are `AuthenticationError`, `AccountLockedError`, `AuthorizationError`, `NotFoundError`, `ValidationError`, `RateLimitError`, `ServerError`, `ResourceConflictError`, `NexlaTimeoutError`, and `NexlaConnectionError`.

### Resource Mappings
Notable backend mappings include `credentials → /data_credentials`, `sources → /data_sources`, `destinations → /data_sinks`, `nexsets → /data_sets`, `lookups → /data_maps`. The full set is generated from `plugin-redoc-0.yaml` into `packages/ts-sdk/src/resources/generated/`.

### Build Pipeline
- **`tsup`** produces ESM (`dist/index.js`), CJS (`dist/index.cjs`), and `.d.ts` outputs declared in `packages/ts-sdk/package.json` `exports`.
- **`build-merged-spec.mjs`** merges `plugin-redoc-0.yaml` and `openapi/nexla-api.public.json` into `src/generated/merged-spec.json`. Run it with `gen:merged-spec`.
- **`openapi-typescript`** generates `schema.ts` from `src/generated/merged-spec.json`.
- **Custom mjs scripts** under `packages/ts-sdk/scripts/` generate the resource map (`generate-resource-map.mjs`) and spec metadata (`generate-spec-metadata.mjs`); `check-generated-coverage.mjs` is the CI gate that validates spec ↔ generated drift.

## Authentication Patterns

### Service Key (Recommended)
```ts
import { NexlaClient } from "@nexla/sdk";

const client = new NexlaClient({ serviceKey: process.env.NEXLA_SERVICE_KEY });
```

### Direct Access Token
```ts
const client = new NexlaClient({ accessToken: process.env.NEXLA_ACCESS_TOKEN });
```

### Webhook client
```ts
import { WebhooksClient } from "@nexla/sdk";

const webhooks = new WebhooksClient({ apiKey: process.env.NEXLA_WEBHOOK_API_KEY });
```

By default the key is sent in the URL query string (`authMethod: "query"`). Pass `authMethod: "header"` to send it in an `Authorization` header instead. The default is unchanged.

## Testing Structure

- **Unit tests**: `packages/ts-sdk/tests/*.test.ts` (client, auth, HTTP policy, errors, pagination). They mock `fetch`.
- **Resource tests**: `packages/ts-sdk/tests/resources/` and `packages/ts-sdk/tests/access-control/`. They check the request shape and response parsing.
- **Contract tests**: `packages/ts-sdk/tests/contract/`. They replay the shared JSON fixtures in `tests/contract/fixtures/` through `NexlaClient`. `MANIFEST.sha256` lists the fixture hashes.
- **Backend coverage**: `packages/ts-sdk/tests/backend-coverage.test.ts`. Every public backend operation must reach a generated method with the same HTTP method and path.
- **Integration tests**: `packages/ts-sdk/tests/integration/` — real API calls, gated by `NEXLA_SERVICE_KEY`/`NEXLA_ACCESS_TOKEN`. Run with `pnpm -C packages/ts-sdk test:integration`.
- **Test utilities**: `packages/ts-sdk/tests/utils/` (mock fetch and `factories/`).
- Frameworks: **vitest** (with v8 coverage), **openapi-fetch** for typed requests.

## Code Style
- TypeScript 5.x, strict mode; ES2022 target; Node.js 18 or later (the `engines` floor).
- Lint via flat-config ESLint (`packages/ts-sdk/eslint.config.js`): typescript-eslint v8 `recommendedTypeChecked`. Format with Prettier (`.prettierrc.json`). CI runs `format:check`.
- Avoid hand-editing files under `packages/ts-sdk/src/generated/` and `packages/ts-sdk/src/resources/generated/` — re-run `pnpm -C packages/ts-sdk gen` instead.
- Public API stability: do not change exported method signatures without discussion; add a Changeset entry for any user-visible change.

## Environment Variables
- `NEXLA_SERVICE_KEY` — service key for auth
- `NEXLA_ACCESS_TOKEN` — direct access token
- `NEXLA_API_URL` — API base URL (defaults to production)
- `NEXLA_WEBHOOK_API_KEY` — not read by the SDK. An application that uses `WebhooksClient` can read it and pass it as `apiKey`.

## CI, Docs, and Release
- **CI** (`.github/workflows/ci.yml`), Node 20: install → changeset check → `check:generated` → `gen` (clean diff) → lint → format check → typecheck → coverage → build → publint → attw → size-limit. A separate `consumer-smoke` job runs `smoke:consumer` on Node 18 and 20.
- **Integration CI** (`.github/workflows/ci-integration.yml`): scheduled weekly + manual dispatch + PRs touching ts-sdk; gated by repository secrets.
- **Release** (`.github/workflows/release.yml`): on push to `main` that changes `packages/ts-sdk/package.json`, publishes any version not yet on npm and pushes the git tag.

## Adding a Changeset

Whenever you make a user-visible change:

```bash
pnpm changeset          # interactive: pick package, bump kind, write summary
pnpm changeset version  # applies the bump, writes CHANGELOG.md, removes the changeset file
git add -A .changeset packages/ts-sdk/package.json packages/ts-sdk/CHANGELOG.md
```

CI fails if a PR leaves an unversioned `.changeset/*.md` file. Merging the PR publishes the new version to npm. There is no bot "Version Packages" PR.
