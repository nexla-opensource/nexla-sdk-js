import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  outDir: "dist",
  target: "node18",
  // Inline openapi-fetch so the CJS bundle does not have to interop with its
  // ESM `default` export at runtime. Without this, esbuild's node-compat
  // wrapping overrides `.default` with the whole module object and the
  // generated `(0, import_openapi_fetch.default)(...)` call throws.
  noExternal: ["openapi-fetch", "openapi-typescript-helpers"]
});
