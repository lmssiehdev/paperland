// Map bindings in a renamed file back to their names in an earlier stage of the same file (same AST shape).
// Used to key hand-written rename maps on the stable `_0x` names while reading the readable output.
//
//   bun scripts/binding-keys.ts <stage.js> <renamed.js> <line:name> [<line:name> ...]
//       prints  line:name  ->  _0xkey   for each query (line/name as seen in renamed.js)
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";

const traverse = (_traverse as any).default ?? _traverse;
const [stageFile, renamedFile, ...queries] = process.argv.slice(2);

function bindingIds(file: string) {
  const ast = parse(require("fs").readFileSync(file, "utf8"), { sourceType: "script" });
  const ids: { name: string; line: number }[] = [];
  const seen = new Set<any>();
  traverse(ast, {
    Scope(p: any) {
      for (const b of Object.values<any>(p.scope.bindings)) {
        if (seen.has(b)) continue;
        seen.add(b);
        ids.push({ name: b.identifier.name, line: b.identifier.loc.start.line, start: b.identifier.start } as any);
      }
    },
  });
  return ids;
}
const a = bindingIds(stageFile!), b = bindingIds(renamedFile!);
if (a.length !== b.length) console.error(`warning: binding counts differ (${a.length} vs ${b.length})`);
for (const q of queries) {
  const [line, name] = q.split(":");
  const hits = b.map((x, i) => [x, i] as const).filter(([x]) => x.line === Number(line) && x.name === name);
  if (!hits.length) { console.log(`${q} -> ?`); continue; }
  console.log(`${q} -> ${hits.map(([, i]) => a[i]!.name).join(" | ")}`);
}
