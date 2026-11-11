/**
 * Builds the OpenAPI document that codegen consumes.
 *
 * Input:
 *   - plugin-redoc-0.yaml: every operation is kept unchanged.
 *   - openapi/nexla-api.public.json: backend operations. Only operations whose
 *     (method, normalized path) is not in plugin-redoc are added.
 *
 * Output: src/generated/merged-spec.json (committed; CI checks it with `git diff`).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(packageRoot, "..", "..");

export const REDOC_SPEC_PATH = path.join(repoRoot, "plugin-redoc-0.yaml");
export const PUBLIC_SPEC_PATH = path.join(repoRoot, "openapi", "nexla-api.public.json");
export const MERGED_SPEC_PATH = path.join(packageRoot, "src", "generated", "merged-spec.json");

const METHODS = ["get", "post", "put", "patch", "delete", "options", "head", "trace"];
const SCHEMA_REF_PREFIX = "#/components/schemas/";
const BACKEND_SCHEMA_PREFIX = "Backend";
const RESOURCE_KEY_PATTERN = /^[a-z][a-z0-9_]*$/;

// Backend first path segment -> SDK resource key, where the SDK already has a name.
// Other segments become resource keys unchanged.
const SEGMENT_TO_RESOURCE = {
  api_auth_configs: "org_auth_configs",
  data_credentials: "credentials",
  data_maps: "lookups",
  data_sets: "nexsets",
  data_sinks: "destinations",
  data_sources: "sources",
  gen_ai_integration_configs: "genai",
  gen_ai_org_settings: "genai",
  notification_setting: "notification_settings",
  orgs: "organizations",
  token: "tokens",
  transform: "transforms",
};

export const normalizePath = (apiPath) => {
  const withoutQuery = apiPath.split("?")[0];
  const templated = withoutQuery.replace(/\{[^}]*\}/g, "{}");
  return templated.replace(/\/+$/, "") || "/";
};

export const resourceKeyForPath = (apiPath) => {
  const first = apiPath.split("/").find((segment) => segment.length > 0);
  if (!first) return "root";
  const key = SEGMENT_TO_RESOURCE[first] ?? first;
  if (!RESOURCE_KEY_PATTERN.test(key)) {
    throw new Error(`Cannot derive a resource key from path segment "${first}" (${apiPath}).`);
  }
  return key;
};

const rewriteSchemaRefs = (node, referenced) => {
  if (Array.isArray(node)) {
    node.forEach((item) => rewriteSchemaRefs(item, referenced));
    return node;
  }
  if (node && typeof node === "object") {
    for (const [key, value] of Object.entries(node)) {
      if (key === "$ref" && typeof value === "string" && value.startsWith(SCHEMA_REF_PREFIX)) {
        const name = value.slice(SCHEMA_REF_PREFIX.length);
        referenced.add(name);
        node[key] = `${SCHEMA_REF_PREFIX}${BACKEND_SCHEMA_PREFIX}${name}`;
      } else {
        rewriteSchemaRefs(value, referenced);
      }
    }
  }
  return node;
};

const mapSecurity = (security) =>
  security.map((requirement) =>
    Object.fromEntries(
      Object.entries(requirement).map(([scheme, scopes]) => [
        // The backend names the session bearer HTTPBearer. The SDK names it NexlaSessionToken.
        scheme === "HTTPBearer" ? "NexlaSessionToken" : scheme,
        scopes,
      ])
    )
  );

const operationEntries = (spec) => {
  const entries = [];
  for (const [apiPath, pathItem] of Object.entries(spec.paths ?? {})) {
    for (const key of Object.keys(pathItem ?? {})) {
      if (key === "parameters" || key === "$ref" || key === "summary" || key === "description") {
        throw new Error(`Unsupported path-item key "${key}" at ${apiPath}. Extend build-merged-spec.mjs.`);
      }
    }
    for (const method of METHODS) {
      const operation = pathItem?.[method];
      if (operation) entries.push({ method, apiPath, operation });
    }
  }
  return entries;
};

/**
 * Pure merge. Takes parsed redoc and public documents, returns the merged document and counts.
 */
export const buildMergedSpec = (redoc, pub) => {
  const merged = structuredClone(redoc);
  merged.paths = merged.paths ?? {};
  merged.components = merged.components ?? {};
  merged.components.schemas = merged.components.schemas ?? {};

  const redocKeys = new Set(
    operationEntries(redoc).map(({ method, apiPath }) => `${method} ${normalizePath(apiPath)}`)
  );
  const addedKeys = new Set();
  const usedOperationIds = new Set(operationEntries(redoc).map(({ operation }) => operation.operationId));
  const referencedSchemas = new Set();
  const stats = { redocKeys: redocKeys.size, backendOperations: 0, skippedOverlap: 0, skippedDuplicate: 0, added: 0, renamedOperationIds: 0 };

  for (const { method, apiPath, operation } of operationEntries(pub)) {
    stats.backendOperations += 1;
    const key = `${method} ${normalizePath(apiPath)}`;
    if (redocKeys.has(key)) {
      stats.skippedOverlap += 1;
      continue;
    }
    // Two backend routes can share a method and normalized path (for example a trailing slash variant).
    // Keep the first one.
    if (addedKeys.has(key)) {
      stats.skippedDuplicate += 1;
      continue;
    }
    addedKeys.add(key);

    const resource = resourceKeyForPath(apiPath);
    const next = structuredClone(operation);
    if (usedOperationIds.has(next.operationId)) {
      next.operationId = `${resource}_${next.operationId}`;
      stats.renamedOperationIds += 1;
      if (usedOperationIds.has(next.operationId)) {
        throw new Error(`operationId collision after rename: ${next.operationId}`);
      }
    }
    usedOperationIds.add(next.operationId);
    next.tags = [resource];
    if (Array.isArray(next.security)) next.security = mapSecurity(next.security);
    rewriteSchemaRefs(next, referencedSchemas);

    if (!merged.paths[apiPath]) merged.paths[apiPath] = {};
    merged.paths[apiPath][method] = next;
    stats.added += 1;
  }

  // Copy only the backend schemas that added operations reach, directly or through other schemas.
  const backendSchemas = pub.components?.schemas ?? {};
  const queue = [...referencedSchemas];
  const copied = new Set();
  while (queue.length > 0) {
    const name = queue.pop();
    if (copied.has(name)) continue;
    if (!(name in backendSchemas)) throw new Error(`Backend schema "${name}" is referenced but not defined.`);
    copied.add(name);
    const targetName = `${BACKEND_SCHEMA_PREFIX}${name}`;
    if (targetName in merged.components.schemas) throw new Error(`Schema name collision: ${targetName}`);
    const nested = new Set();
    merged.components.schemas[targetName] = rewriteSchemaRefs(structuredClone(backendSchemas[name]), nested);
    nested.forEach((ref) => queue.push(ref));
  }
  stats.schemas = copied.size;

  return { spec: merged, stats };
};

export const buildMergedSpecText = () => {
  const redoc = YAML.parse(fs.readFileSync(REDOC_SPEC_PATH, "utf8"));
  const pub = JSON.parse(fs.readFileSync(PUBLIC_SPEC_PATH, "utf8"));
  const { spec, stats } = buildMergedSpec(redoc, pub);
  return { text: `${JSON.stringify(spec, null, 2)}\n`, stats };
};

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);

if (isMain) {
  const { text, stats } = buildMergedSpecText();
  fs.mkdirSync(path.dirname(MERGED_SPEC_PATH), { recursive: true });
  fs.writeFileSync(MERGED_SPEC_PATH, text, "utf8");
  console.log(`Merged spec written to ${MERGED_SPEC_PATH}`);
  console.log(JSON.stringify(stats));
}
