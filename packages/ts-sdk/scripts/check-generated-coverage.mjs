import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { MERGED_SPEC_PATH, buildMergedSpecText } from "./build-merged-spec.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageRoot = path.resolve(__dirname, "..");

const specPath = MERGED_SPEC_PATH;
const generatedResourcesDir = path.join(packageRoot, "src", "resources", "generated");
const specMetadataPath = path.join(packageRoot, "src", "generated", "spec-metadata.ts");

const METHODS = ["get", "post", "put", "patch", "delete", "options", "head", "trace"];

const endpointKey = (method, apiPath) => `${method.toUpperCase()} ${apiPath}`;
const normalizeTag = (value) => String(value).replace(/\s+/g, " ").trim();

const readSpecOperations = () => {
  const rawSpec = fs.readFileSync(specPath, "utf8");
  const spec = JSON.parse(rawSpec);
  const endpointToOperationId = new Map();

  for (const [apiPath, pathItem] of Object.entries(spec?.paths ?? {})) {
    for (const method of METHODS) {
      const operation = pathItem?.[method];
      if (!operation) continue;

      const tags = Array.isArray(operation.tags) ? operation.tags.map(normalizeTag) : [];
      if (tags.includes("Webhooks")) continue;

      endpointToOperationId.set(endpointKey(method, apiPath), operation.operationId ?? null);
    }
  }

  return endpointToOperationId;
};

const readGeneratedEndpoints = () => {
  const endpoints = new Set();
  const operationIds = new Set();
  const methodNames = new Set();
  const files = fs
    .readdirSync(generatedResourcesDir)
    .filter((fileName) => fileName.endsWith(".ts") && fileName !== "index.ts" && fileName !== "utils.ts")
    .sort();

  const requestRegex = /\.request\(\s*"([a-z]+)"\s*,\s*"([^"]+)"/g;
  const requestOperationRegex = /\.requestOperation\(\s*"([^"]+)"\s*,\s*"([a-z]+)"\s*,\s*"([^"]+)"/g;
  const asyncMethodRegex = /async\s+(?:\["([^"]+)"\]|([A-Za-z_$][A-Za-z0-9_$]*))\s*\(/g;

  for (const fileName of files) {
    const fullPath = path.join(generatedResourcesDir, fileName);
    const contents = fs.readFileSync(fullPath, "utf8");

    for (const match of contents.matchAll(requestRegex)) {
      endpoints.add(endpointKey(match[1], match[2]));
    }

    for (const match of contents.matchAll(requestOperationRegex)) {
      endpoints.add(endpointKey(match[2], match[3]));
      operationIds.add(match[1]);
    }

    for (const match of contents.matchAll(asyncMethodRegex)) {
      methodNames.add(match[1] || match[2]);
    }
  }

  return { endpoints, operationIds, methodNames };
};

const parseSpecMetadata = () => {
  if (!fs.existsSync(specMetadataPath)) {
    throw new Error(`Missing generated file: ${specMetadataPath}`);
  }

  const contents = fs.readFileSync(specMetadataPath, "utf8");
  const hashAlgorithmMatch = contents.match(/export const SPEC_HASH_ALGORITHM\s*=\s*"([^"]+)"/);
  const hashMatch = contents.match(/export const SPEC_HASH\s*=\s*"([0-9a-fA-F]+)"/);

  if (!hashAlgorithmMatch || !hashMatch) {
    throw new Error(
      `Unable to parse SPEC_HASH_ALGORITHM and SPEC_HASH from ${specMetadataPath}. Run: pnpm -C packages/ts-sdk gen:spec-metadata`
    );
  }

  return {
    hashAlgorithm: hashAlgorithmMatch[1],
    hash: hashMatch[1].toLowerCase()
  };
};

// The committed merged spec must equal the output of its inputs (plugin-redoc and the public backend spec).
const checkMergedSpecInSync = () => {
  const expected = buildMergedSpecText().text;
  const actual = fs.readFileSync(specPath, "utf8");
  return expected === actual
    ? null
    : `${path.relative(packageRoot, specPath)} is out of date with its inputs. Run: pnpm -C packages/ts-sdk gen:merged-spec`;
};

const computeSpecHash = (hashAlgorithm) =>
  crypto.createHash(hashAlgorithm).update(fs.readFileSync(specPath)).digest("hex");

const formatEndpointList = (items, limit = 20) => {
  const shown = items.slice(0, limit).map((item) => `  - ${item}`);
  if (items.length > limit) {
    shown.push(`  - ... (${items.length - limit} more)`);
  }
  return shown.join("\n");
};

// Each operationId must name one route. Each {placeholder} in a path must have a path parameter of the same name, and no path parameter may lack a placeholder.
const checkOperationIntegrity = (spec) => {
  const problems = [];
  const routesById = new Map();

  for (const [apiPath, pathItem] of Object.entries(spec?.paths ?? {})) {
    const templateNames = [...apiPath.matchAll(/\{([^}]+)\}/g)].map((match) => match[1]);
    const pathLevel = Array.isArray(pathItem?.parameters) ? pathItem.parameters : [];

    for (const method of METHODS) {
      const operation = pathItem?.[method];
      if (!operation) continue;

      const route = endpointKey(method, apiPath);
      if (operation.operationId) {
        routesById.set(operation.operationId, [...(routesById.get(operation.operationId) ?? []), route]);
      }

      const operationParameters = Array.isArray(operation.parameters) ? operation.parameters : [];
      const declared = [...pathLevel, ...operationParameters]
        .filter((parameter) => parameter?.in === "path")
        .map((parameter) => parameter.name);
      const undeclared = templateNames.filter((name) => !declared.includes(name));
      const unused = declared.filter((name) => !templateNames.includes(name));
      if (undeclared.length > 0 || unused.length > 0) {
        problems.push(
          `${route}: path template {${templateNames.join("}, {")}} does not match path parameters [${declared.join(", ")}]`
        );
      }
    }
  }

  for (const [operationId, routes] of routesById) {
    if (routes.length > 1) {
      problems.push(`operationId ${operationId} is used by ${routes.length} routes: ${routes.join(", ")}`);
    }
  }

  return problems;
};

const specOperations = readSpecOperations();
const specEndpoints = new Set(specOperations.keys());
const {
  endpoints: generatedEndpoints,
  operationIds: generatedOperationIds,
  methodNames: generatedMethodNames
} = readGeneratedEndpoints();

const missingEndpoints = [...specEndpoints].filter((key) => !generatedEndpoints.has(key));
const coveredByOperationId = [];
const hardMissingEndpoints = [];

for (const missingEndpoint of missingEndpoints) {
  const operationId = specOperations.get(missingEndpoint);
  if (operationId && (generatedOperationIds.has(operationId) || generatedMethodNames.has(operationId))) {
    coveredByOperationId.push(missingEndpoint);
  } else {
    hardMissingEndpoints.push(missingEndpoint);
  }
}

hardMissingEndpoints.sort();
coveredByOperationId.sort();
const extraEndpoints = [...generatedEndpoints].filter((key) => !specEndpoints.has(key)).sort();

const errors = [];

const mergedSpecDrift = checkMergedSpecInSync();
if (mergedSpecDrift) errors.push(mergedSpecDrift);

const operationProblems = checkOperationIntegrity(JSON.parse(fs.readFileSync(specPath, "utf8")));
if (operationProblems.length > 0) {
  errors.push(
    [
      `Spec operation integrity failed for ${operationProblems.length} item(s):`,
      formatEndpointList(operationProblems, 50)
    ].join("\n")
  );
}

if (hardMissingEndpoints.length > 0) {
  errors.push(
    [
      `Missing generated endpoint coverage for ${hardMissingEndpoints.length} spec path/method entries (excluding Webhooks):`,
      formatEndpointList(hardMissingEndpoints)
    ].join("\n")
  );
}

if (extraEndpoints.length > 0) {
  errors.push(
    [
      `Generated resource endpoint coverage includes ${extraEndpoints.length} path/method entries not present in spec:`,
      formatEndpointList(extraEndpoints)
    ].join("\n")
  );
}

let metadata;
try {
  metadata = parseSpecMetadata();
  const computedHash = computeSpecHash(metadata.hashAlgorithm);
  if (computedHash !== metadata.hash) {
    errors.push(
      `Spec hash mismatch: spec-metadata has ${metadata.hashAlgorithm}:${metadata.hash}, expected ${metadata.hashAlgorithm}:${computedHash}. Run: pnpm -C packages/ts-sdk gen:spec-metadata`
    );
  }
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  errors.push(message);
}

if (errors.length > 0) {
  console.error("Generated SDK quality gate failed:\n");
  console.error(errors.join("\n\n"));
  process.exit(1);
}

if (coveredByOperationId.length > 0) {
  console.warn(
    [
      `Coverage note: ${coveredByOperationId.length} spec path/method entries are covered by a generated operation method with the same operationId, not by a route match:`,
      formatEndpointList(coveredByOperationId)
    ].join("\n")
  );
}

console.log(
  `Generated endpoint coverage OK: ${generatedEndpoints.size} unique endpoints match ${specEndpoints.size} spec endpoints (excluding Webhooks-tagged operations).`
);
console.log(`Spec metadata hash OK: ${metadata.hashAlgorithm}:${metadata.hash}`);
