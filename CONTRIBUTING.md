Contributing to nexla-sdk-js
============================

Thanks for your interest in contributing!

Setup
- Node.js >= 20 and pnpm 9 are required (`corepack enable` will pick up the pinned version from `package.json`).
- Install workspace deps: `pnpm install --frozen-lockfile`
- Run unit + resource tests: `pnpm -C packages/ts-sdk test`

Workflow
- Make your code change in `packages/ts-sdk/src/` (or generated artifacts via `pnpm -C packages/ts-sdk gen`).
- Run lint, typecheck, tests, build locally before opening a PR:

  ```bash
  pnpm -C packages/ts-sdk lint
  pnpm -C packages/ts-sdk typecheck
  pnpm -C packages/ts-sdk coverage
  pnpm -C packages/ts-sdk build
  ```
- Add a changeset for any user-visible change: `pnpm changeset` and commit the generated file.

Coding standards
- TypeScript strict mode; ES2020 target.
- Keep the public API surface stable; deprecate before breaking.
- Do not hand-edit `packages/ts-sdk/src/generated/` or `packages/ts-sdk/src/resources/generated/`. Update `plugin-redoc-0.yaml` (or the upstream OpenAPI source) and re-run `pnpm -C packages/ts-sdk gen`.

Testing
- Prefer unit tests with mocked `fetch` (see `packages/ts-sdk/tests/utils/factories/`).
- Avoid network in unit tests; integration tests are gated by `NEXLA_SERVICE_KEY` / `NEXLA_ACCESS_TOKEN` and run separately.

Release
- Versions are managed by [Changesets](https://github.com/changesets/changesets).
- Merging a PR with a changeset triggers `.github/workflows/release.yml` to either open a "Version Packages" PR or publish to npm.
- Update `docs/ts-sdk/` for any user-facing change.
