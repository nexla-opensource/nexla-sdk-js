/**
 * Backend drift check. Compares the committed public spec with a fresh public backend spec.
 * Compares (method, normalized path) pairs, so renamed placeholders do not count as drift.
 *
 * Input: NEXLA_BACKEND_OPENAPI, the path to the fresh public spec JSON.
 * When the variable is unset or empty, the check prints a skip notice and exits 0.
 * Exits 1 when an operation was added or removed. See docs/ts-sdk/architecture.md.
 */
import fs from "node:fs";
import path from "node:path";
import { PUBLIC_SPEC_PATH, normalizePath } from "./build-merged-spec.mjs";

const METHODS = ["get", "post", "put", "patch", "delete", "options", "head", "trace"];

const operationKeys = (spec) => {
  const keys = new Set();
  for (const [apiPath, item] of Object.entries(spec.paths ?? {})) {
    for (const method of METHODS) {
      if (item?.[method]) keys.add(`${method.toUpperCase()} ${normalizePath(apiPath)}`);
    }
  }
  return keys;
};

const freshInput = process.env.NEXLA_BACKEND_OPENAPI;
if (!freshInput) {
  console.log("Backend drift check skipped: NEXLA_BACKEND_OPENAPI is not set.");
  process.exit(0);
}

const freshPath = path.resolve(freshInput);
if (!fs.existsSync(freshPath)) {
  console.error(`NEXLA_BACKEND_OPENAPI points to a missing file: ${freshPath}`);
  process.exit(1);
}

const committed = operationKeys(JSON.parse(fs.readFileSync(PUBLIC_SPEC_PATH, "utf8")));
const fresh = operationKeys(JSON.parse(fs.readFileSync(freshPath, "utf8")));
const added = [...fresh].filter((key) => !committed.has(key)).sort();
const removed = [...committed].filter((key) => !fresh.has(key)).sort();

console.log(`Committed public spec: ${committed.size} operations. Fresh backend spec: ${fresh.size} operations.`);

if (added.length === 0 && removed.length === 0) {
  console.log("No drift: the committed public spec matches the backend.");
  process.exit(0);
}

if (added.length > 0) {
  console.error(`Added in backend (${added.length}):\n${added.map((key) => `  + ${key}`).join("\n")}`);
}
if (removed.length > 0) {
  console.error(`Removed from backend (${removed.length}):\n${removed.map((key) => `  - ${key}`).join("\n")}`);
}
console.error("\nRegenerate openapi/nexla-api.public.json from the backend, then run: pnpm -C packages/ts-sdk gen");
process.exit(1);
