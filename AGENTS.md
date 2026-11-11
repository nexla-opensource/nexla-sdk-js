# Repository Guidelines

## Project Structure & Module Organization
- `packages/ts-sdk/` — `@nexla/sdk` source (`src/`), tests (`tests/`), codegen scripts (`scripts/`), build config (`tsup.config.ts`, `tsconfig.json`, `eslint.config.js`).
- `docs/ts-sdk/` — architecture, API coverage process, integration-test policy.
- `.changeset/` — Changesets entries and config for npm releases.
- Root: `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`, `turbo.json`, `plugin-redoc-0.yaml`.

## Build, Test, and Development Commands
- Setup: `corepack enable && pnpm install --frozen-lockfile`
- Lint: `pnpm -C packages/ts-sdk lint` (or `pnpm lint` from root for the full pipeline).
- Typecheck: `pnpm -C packages/ts-sdk typecheck`
- Tests (unit + resource): `pnpm -C packages/ts-sdk test` • Coverage: `pnpm -C packages/ts-sdk coverage`
- Integration (creds required): `NEXLA_SERVICE_KEY=... pnpm -C packages/ts-sdk test:integration`
- Build: `pnpm -C packages/ts-sdk build` (tsup → dual ESM/CJS + `.d.ts`)
- Codegen: `pnpm -C packages/ts-sdk gen` (regenerate `src/generated/*` and `src/resources/generated/*` from `plugin-redoc-0.yaml`).

## Coding Style & Naming Conventions
- TypeScript 5.x, strict mode, ES2020 target; 2-space indent, semicolons required.
- Naming: variables/functions `camelCase`, types/classes `PascalCase`, constants `UPPER_SNAKE_CASE`, files `kebab-case.ts`.
- ESLint flat config (`packages/ts-sdk/eslint.config.js`) + typescript-eslint v8 enforces style. Run `pnpm -C packages/ts-sdk lint --fix` for auto-fix.
- Do not hand-edit `src/generated/` or `src/resources/generated/` — regenerate via `pnpm -C packages/ts-sdk gen`.

## Testing Guidelines
- Frameworks: **vitest** (v8 coverage), `openapi-fetch` for typed mocks.
- Test names: files `tests/**/*.test.ts`; describe blocks named after the unit under test.
- Avoid network in unit/resource tests — mock `fetch` or use the provided test factories under `tests/utils/factories/`.
- Integration tests are off by default; only enable when validating live behavior, and gate with secrets in CI.

## Commit & Pull Request Guidelines
- Commits: imperative, concise; prefer Conventional style: `feat:`, `fix:`, `docs:`, `refactor:`, `test:` (e.g., `feat: add webhook delivery history`).
- PRs: clear description, linked issues, test plan (commands/output), and docs/examples updates when behavior changes.
- **Changesets**: every user-visible change must include a `.changeset/*.md` entry — run `pnpm changeset`.
- CI must pass (lint + typecheck + coverage + build on Node 20).

## Security & Configuration Tips
- Do not hardcode tokens or URLs; read from env (`NEXLA_API_URL`, `NEXLA_SERVICE_KEY`, `NEXLA_ACCESS_TOKEN`).
- `.env` is gitignored; provide `.env.example` for any new env var you add.
- Never log tokens or full Authorization headers from generated request middleware.
