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
- For any user-visible change, run `pnpm changeset`, then `pnpm changeset version`, and commit the version bump and `CHANGELOG.md`. CI fails if an unversioned `.changeset/*.md` file is left in the PR.

Coding standards
- TypeScript strict mode; ES2020 target.
- Keep the public API surface stable; deprecate before breaking.
- Do not hand-edit `packages/ts-sdk/src/generated/` or `packages/ts-sdk/src/resources/generated/`. Update `plugin-redoc-0.yaml` (or the upstream OpenAPI source) and re-run `pnpm -C packages/ts-sdk gen`.

Testing
- Prefer unit tests with mocked `fetch` (see `packages/ts-sdk/tests/utils/factories/`).
- Avoid network in unit tests; integration tests are gated by `NEXLA_SERVICE_KEY` / `NEXLA_ACCESS_TOKEN` and run separately.

Release
- Versions are managed by [Changesets](https://github.com/changesets/changesets).
- Each release PR contains its own version bump and `CHANGELOG.md` entry (`pnpm changeset version`).
- Merging a PR that changes `packages/ts-sdk/package.json` runs `.github/workflows/release.yml`. It publishes the version if npm does not have it yet, then pushes the git tag. There is no bot "Version Packages" PR.
- Update `docs/ts-sdk/` for any user-facing change.
