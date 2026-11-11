# TypeScript SDK API Coverage Process

## Coverage Dimension

The SDK tracks one coverage dimension:

- **OpenAPI operation coverage:** every operation declared in `plugin-redoc-0.yaml` (excluding webhook-tagged operations, which are served by the separate webhook client) must have a matching method on a generated TS resource client.

Coverage is enforced in CI; the build fails if generated artifacts drift from the spec.

## Source of Truth

- OpenAPI spec: `plugin-redoc-0.yaml`
- Generated TS schema: `packages/ts-sdk/src/generated/schema.ts`
- Generated TS resource map: `packages/ts-sdk/src/generated/resource-map.ts`
- Generated TS resource clients: `packages/ts-sdk/src/resources/generated/*.ts`
- Spec metadata snapshot: `packages/ts-sdk/src/generated/spec-metadata.ts`

## Refresh Workflow

Run this from the repository root whenever the API surface changes:

```bash
pnpm -C packages/ts-sdk gen
pnpm -C packages/ts-sdk check:generated
pnpm -C packages/ts-sdk lint
pnpm -C packages/ts-sdk typecheck
pnpm -C packages/ts-sdk coverage
pnpm -C packages/ts-sdk build
```

What this does:

1. Regenerates all TS OpenAPI artifacts under `src/generated/` and `src/resources/generated/`.
2. Validates that every spec operation has a generated method (`check:generated`).
3. Verifies SDK quality gates still pass.

## CI Expectations

`.github/workflows/ci.yml` enforces:

- Generated artifact consistency (`pnpm -C packages/ts-sdk gen` followed by `git diff --exit-code`).
- `check:generated` (operation coverage gate).
- Lint, typecheck, coverage, and build.

Stale generated files block merges.

## Gap Handling Policy

If an operation is not yet exposed via a first-class generated method:

- Use `client.raw` as a typed fallback for path-level access.
- File an issue or PR to extend the gen scripts so the operation becomes a first-class method on the next regeneration.

## PR Checklist (Coverage-Sensitive Changes)

1. Update `plugin-redoc-0.yaml` (or the upstream spec source).
2. Regenerate TS artifacts (`pnpm -C packages/ts-sdk gen`).
3. Run `pnpm -C packages/ts-sdk check:generated` and confirm clean output.
4. Run lint, typecheck, coverage, and build for the TS SDK.
5. Include any regenerated artifacts in the PR diff.

## Related Docs

- [Architecture](./architecture.md)
- [Integration test policy (non-blocking)](./integration-tests.md)
