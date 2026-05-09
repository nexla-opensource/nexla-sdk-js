# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository. It reflects the current codebase and recent changes.

## Repository Layout

This is a pnpm + Turborepo workspace housing the `@nexla/sdk` TypeScript SDK.

```
packages/ts-sdk/      # @nexla/sdk source, tests, build config
docs/ts-sdk/          # architecture, API coverage, integration-test policy
.changeset/           # Changesets for npm releases
plugin-redoc-0.yaml   # OpenAPI spec, source of truth for codegen
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
- **`NexlaClient`** (`packages/ts-sdk/src/client/`): main entry point; supports `serviceKey`, `accessToken`, retry/backoff, typed request pipeline.
- **Auth** (`packages/ts-sdk/src/auth/`): service-key session-token flow (auto-refresh on 401, retry once) and direct access-token flow.
- **Resources** (`packages/ts-sdk/src/resources/generated/`): per-resource operation clients generated from OpenAPI `operationId`s.
- **Generated types** (`packages/ts-sdk/src/generated/`): `schema.ts`, `resource-map.ts`, `spec-metadata.ts` — all generated from `plugin-redoc-0.yaml`.
- **Webhooks** (`packages/ts-sdk/src/webhooks/`): API-key authenticated webhook client.
- **Errors** (`packages/ts-sdk/src/errors.ts`): `NexlaError`, `AuthenticationError`, `NotFoundError`, `ValidationError`, `RateLimitError`.

### Resource Mappings
Notable backend mappings include `credentials → /data_credentials`, `sources → /data_sources`, `destinations → /data_sinks`, `nexsets → /data_sets`, `lookups → /data_maps`. The full set is generated from `plugin-redoc-0.yaml` into `packages/ts-sdk/src/resources/generated/`.

### Build Pipeline
- **`tsup`** produces ESM (`dist/index.js`), CJS (`dist/index.cjs`), and `.d.ts` outputs declared in `packages/ts-sdk/package.json` `exports`.
- **`openapi-typescript`** generates `schema.ts` from `plugin-redoc-0.yaml` (relative path `../../plugin-redoc-0.yaml` from the `ts-sdk` package).
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

## Testing Structure

- **Unit tests**: `packages/ts-sdk/tests/unit/` — mock `fetch`, focus on logic.
- **Resource tests**: `packages/ts-sdk/tests/resource/` — typed request shape and response parsing.
- **Integration tests**: `packages/ts-sdk/tests/integration/` — real API calls, gated by `NEXLA_SERVICE_KEY`/`NEXLA_ACCESS_TOKEN`. Run with `pnpm -C packages/ts-sdk test:integration`.
- **Test utilities**: `packages/ts-sdk/tests/utils/factories/`.
- Frameworks: **vitest** (with v8 coverage), **openapi-fetch** for typed requests.

## Code Style
- TypeScript 5.x, strict mode; ES2020 target.
- Lint via flat-config ESLint (`packages/ts-sdk/eslint.config.js`); typescript-eslint v8.
- Avoid hand-editing files under `packages/ts-sdk/src/generated/` and `packages/ts-sdk/src/resources/generated/` — re-run `pnpm -C packages/ts-sdk gen` instead.
- Public API stability: do not change exported method signatures without discussion; add a Changeset entry for any user-visible change.

## Environment Variables
- `NEXLA_SERVICE_KEY` — service key for auth
- `NEXLA_ACCESS_TOKEN` — direct access token
- `NEXLA_API_URL` — API base URL (defaults to production)
- `NEXLA_WEBHOOK_API_KEY` — webhook API key (only for `WebhooksClient`)

## CI, Docs, and Release
- **CI** (`.github/workflows/ci.yml`): pnpm install → `check:generated` → `gen` (verifies idempotency) → lint → typecheck → coverage → build, on Node 20.
- **Integration CI** (`.github/workflows/ci-integration.yml`): scheduled weekly + manual dispatch + PRs touching ts-sdk; gated by repository secrets.
- **Release** (`.github/workflows/release.yml`): Changesets-driven npm publish on push to `main`.

## Adding a Changeset

Whenever you make a user-visible change:

```bash
pnpm changeset       # interactive: pick package, bump kind, write summary
git add .changeset/<file>.md
```

Merging a PR with a changeset triggers the release workflow to either open a "Version Packages" PR or publish to npm.
