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

The SDK supports two authentication modes:

- **Service key** (recommended): pass `serviceKey` or set `NEXLA_SERVICE_KEY`. The client obtains short-lived session tokens via `POST /token` on demand.
- **Direct access token**: pass `accessToken` or set `NEXLA_ACCESS_TOKEN`. No refresh is performed.

Optional: `NEXLA_API_URL` overrides the default API base URL.

## Documentation

- [Architecture](./docs/ts-sdk/architecture.md)
- [API coverage process](./docs/ts-sdk/api-coverage.md)
- [Integration test policy](./docs/ts-sdk/integration-tests.md)

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
```

## Development

Requires Node.js >= 20 and pnpm 9.

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
```

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the full contribution guide and [`CLAUDE.md`](./CLAUDE.md) / [`AGENTS.md`](./AGENTS.md) for AI-assistant guidance.

## Releases

Releases are managed with [Changesets](https://github.com/changesets/changesets). To propose a release, run `pnpm changeset`, commit the generated file, and merge — the `release` workflow handles the npm publish.

## License

MIT
