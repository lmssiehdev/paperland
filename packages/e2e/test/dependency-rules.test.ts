// Enforces the package dependency rules (docs/ARCHITECTURE.md "Dependency rules") on the import specifiers of every
// source file: client -> protocol -> core, server -> protocol -> core, core imports nothing outside core,
// client and server never import each other.
import { expect, test } from "bun:test";
import { Glob } from "bun";
import { dirname, relative, resolve } from "node:path";

const packages = new URL("../../", import.meta.url).pathname;
const allowed: Record<string, string[]> = {
  core: ["core"],
  protocol: ["protocol", "core"],
  client: ["client", "protocol", "core"],
  server: ["server", "protocol", "core"]
};
// Third-party packages each package may use (anything else is a leak, e.g. elysia in core).
const external: Record<string, RegExp> = {
  core: /^$/,
  protocol: /^$/,
  client: /^(preact|preact\/hooks|preact\/jsx-runtime)$/,
  server: /^(elysia|@elysiajs\/eden|bun|bun:test|node:.*)$/
};

const importsOf = (source: string) =>
  [
    ...source.matchAll(/(?:^|\n)\s*(?:import|export)\s[^;]*?from\s+["']([^"']+)["']|import\(\s*["']([^"']+)["']\s*\)/g)
  ].map(m => m[1] ?? m[2]!);

for (const [pkg, may] of Object.entries(allowed)) {
  test(`${pkg} imports only ${may.join(", ")}`, async () => {
    const violations: string[] = [];
    for await (const file of new Glob(`${pkg}/{src,test}/**/*.{ts,tsx}`).scan(packages)) {
      const abs = resolve(packages, file);
      for (const spec of importsOf(await Bun.file(abs).text())) {
        let target: string | undefined;
        if (spec.startsWith("@paperio/")) target = spec.split("/")[1];
        else if (spec.startsWith(".")) target = relative(packages, resolve(dirname(abs), spec)).split("/")[0];
        if (
          target !== undefined
            ? !may.includes(target)
            : !(file.includes("/test/") && /^bun(:test)?$/.test(spec)) && !external[pkg]!.test(spec)
        ) {
          violations.push(`${file}: ${spec}`);
        }
      }
    }
    expect(violations).toEqual([]);
  });
}
