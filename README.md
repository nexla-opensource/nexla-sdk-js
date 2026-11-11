# Nexla JavaScript / TypeScript SDK

TypeScript SDK for interacting with the Nexla API, distributed on npm as [`@nexla/sdk`](https://www.npmjs.com/package/@nexla/sdk).

> The SDK source lives in [`packages/ts-sdk`](./packages/ts-sdk). This repository is a pnpm + Turborepo workspace so future packages can live alongside it under `packages/`.

## Install

```bash
npm install @nexla/sdk
# or
pnpm add @nexla/sdk
# or
yarn add @nexla/sdk
```

## Quick Start

```ts
import { NexlaClient } from "@nexla/sdk";

const client = new NexlaClient({ serviceKey: process.env.NEXLA_SERVICE_KEY });

const flows = await client.flows.list();
const sources = await client.sources.list();
```

See the package README for full usage: [`packages/ts-sdk/README.md`](./packages/ts-sdk/README.md).

## Authentication

The SDK supports four authentication modes. Pass one credential. An explicit option takes precedence over the environment variable.

- **Service key** (recommended): `serviceKey` or `NEXLA_SERVICE_KEY`. The client gets session tokens from `POST /token`.
- **API key**: `apiKey` or `NEXLA_API_KEY`. The client gets session tokens from `POST /token`.
- **Email and password**: `email` and `password`, with an optional `orgId`. The client gets session tokens from `POST /token`.
- **Access token**: `accessToken` or `NEXLA_ACCESS_TOKEN`. The token is sent as is, and the SDK does not refresh it.

The three modes that use `POST /token` refresh the session token when it nears expiry, and retry a 401 once.

Optional: `NEXLA_API_URL` overrides the default API base URL.

## Documentation

- [Architecture](./docs/ts-sdk/architecture.md)
- [API coverage process](./docs/ts-sdk/api-coverage.md)
- [Integration test policy](./docs/ts-sdk/integration-tests.md)
- [Behavior spec](./docs/ts-sdk/behavior-spec.md)

## Repository Layout

```
nexla-sdk-js/
  packages/
    ts-sdk/                 # @nexla/sdk source, tests, build config
  docs/
    ts-sdk/                 # architecture, API coverage, integration-test policy
  .changeset/               # Changesets for npm releases
  package.json              # pnpm workspace root
  pnpm-workspace.yaml
  pnpm-lock.yaml
  turbo.json                # Turborepo pipeline
  plugin-redoc-0.yaml       # OpenAPI spec consumed by ts-sdk codegen
  openapi/                  # public backend OpenAPI spec consumed by ts-sdk codegen
```

## Development

Requires Node.js >= 18 and pnpm 9. CI runs the checks on Node 20 and the consumer smoke test on Node 18 and 20.

```bash
# Install workspace dependencies
pnpm install --frozen-lockfile

# From the repo root
pnpm lint        # turbo run lint
pnpm typecheck   # turbo run typecheck
pnpm test        # turbo run test
pnpm build       # turbo run build

# Or scope to the SDK package directly
pnpm -C packages/ts-sdk lint
pnpm -C packages/ts-sdk typecheck
pnpm -C packages/ts-sdk coverage
pnpm -C packages/ts-sdk build
pnpm -C packages/ts-sdk gen           # regenerate OpenAPI artifacts
pnpm -C packages/ts-sdk format:check
pnpm -C packages/ts-sdk publint       # package metadata (needs build)
pnpm -C packages/ts-sdk attw          # type resolution (needs build)
pnpm -C packages/ts-sdk size          # bundle size budget (needs build)
pnpm -C packages/ts-sdk smoke:consumer  # pack, install, import, type check (needs build)
```

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the full contribution guide and [`CLAUDE.md`](./CLAUDE.md) / [`AGENTS.md`](./AGENTS.md) for AI-assistant guidance.

## Releases

Releases are managed with [Changesets](https://github.com/changesets/changesets). For each user-visible change, run `pnpm changeset`. Before you merge, run `pnpm changeset version` and commit the version bump and `CHANGELOG.md`. A merge that changes `packages/ts-sdk/package.json` on `main` runs the release workflow. It publishes any version that npm does not have yet.

## License

MIT
