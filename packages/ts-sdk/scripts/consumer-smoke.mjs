/**
 * Consumer smoke test. Packs @nexla/sdk, installs the tarball into a fresh project,
 * then checks ESM import, CJS require, and TypeScript types against the installed package.
 * Runs on the Node version that invokes it, so CI runs it on each supported Node version.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const requireFromPackage = createRequire(path.join(packageRoot, "package.json"));
const tscBin = requireFromPackage.resolve("typescript/bin/tsc");

const run = (command, args, cwd) => {
  const result = spawnSync(command, args, { cwd, encoding: "utf8" });
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} failed in ${cwd}:\n${result.stdout}\n${result.stderr}`);
  }
  return result.stdout;
};

const work = fs.mkdtempSync(path.join(os.tmpdir(), "nexla-sdk-smoke-"));
try {
  const packDir = path.join(work, "pack");
  const consumer = path.join(work, "consumer");
  fs.mkdirSync(packDir);
  fs.mkdirSync(consumer);

  const [{ filename }] = JSON.parse(run("npm", ["pack", "--json", "--pack-destination", packDir], packageRoot));
  const tarball = path.join(packDir, filename);

  fs.writeFileSync(
    path.join(consumer, "package.json"),
    JSON.stringify({ name: "consumer-smoke", private: true, type: "module" }, null, 2),
  );
  run("npm", ["install", "--no-audit", "--no-fund", tarball], consumer);

  fs.writeFileSync(
    path.join(consumer, "esm-check.mjs"),
    `import { NexlaClient } from "@nexla/sdk";
const client = new NexlaClient({ accessToken: "smoke" });
if (typeof client.sources.list !== "function") throw new Error("ESM: sources.list missing");
console.log("ESM import ok");
`,
  );
  fs.writeFileSync(
    path.join(consumer, "cjs-check.cjs"),
    `const { NexlaClient } = require("@nexla/sdk");
const client = new NexlaClient({ accessToken: "smoke" });
if (typeof client.sources.list !== "function") throw new Error("CJS: sources.list missing");
console.log("CJS require ok");
`,
  );
  run(process.execPath, ["esm-check.mjs"], consumer);
  run(process.execPath, ["cjs-check.cjs"], consumer);

  fs.writeFileSync(
    path.join(consumer, "types-esm.ts"),
    `import { NexlaClient, type NexlaClientOptions } from "@nexla/sdk";
const options: NexlaClientOptions = { accessToken: "smoke" };
const client = new NexlaClient(options);
export const listed: Promise<unknown> = client.sources.list();
// @ts-expect-error unknown resource name must not type-check
client.resourceThatDoesNotExist;
`,
  );
  fs.writeFileSync(
    path.join(consumer, "types-cjs.cts"),
    `import { NexlaClient } from "@nexla/sdk";
export const client: NexlaClient = new NexlaClient({ accessToken: "smoke" });
`,
  );
  fs.writeFileSync(
    path.join(consumer, "tsconfig.json"),
    JSON.stringify(
      {
        compilerOptions: {
          target: "ES2022",
          module: "NodeNext",
          moduleResolution: "NodeNext",
          strict: true,
          noEmit: true,
          skipLibCheck: true,
          types: [],
        },
        files: ["types-esm.ts", "types-cjs.cts"],
      },
      null,
      2,
    ),
  );
  run(process.execPath, [tscBin, "-p", "tsconfig.json"], consumer);
  console.log(`Consumer smoke test passed on Node ${process.version}`);
} finally {
  fs.rmSync(work, { recursive: true, force: true });
}
