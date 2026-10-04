// Generic scope-safe renamer driven by a JSON map.
//
//   bun scripts/rename-map.ts <in.js> <map.json> <out.js>
//
// map.json:
//   {
//     "_0x1aa65a": "Vec2",                       // any binding with this name, in any scope
//     "$params": { "Base.constructor": ["unit"],  // positional params of class methods / named functions
//                  "handleReturn": ["unit", "points", "segments"] },
//     "$comment": "..."                           // keys starting with "$" other than $params are ignored
//   }
//
// Renames go through Babel's scope.rename, so every reference of the binding moves together and nothing
// else is touched (property names, strings, other bindings that happen to share the text).
// A rename is skipped (and reported) if the new name is already bound in the same scope or appears anywhere
// inside it, because that would capture another binding or be captured by one.
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";
import * as t from "@babel/types";

const traverse = (_traverse as any).default ?? _traverse;
const generate = (_generate as any).default ?? _generate;

const [input, mapFile, output] = process.argv.slice(2);
if (!input || !mapFile || !output) {
  console.error("usage: bun scripts/rename-map.ts <in.js> <map.json> <out.js>");
  process.exit(1);
}
const map: Record<string, any> = await Bun.file(mapFile).json();
const params: Record<string, (string | null)[]> = map.$params ?? {};
const names = Object.fromEntries(Object.entries(map).filter(([k]) => !k.startsWith("$"))) as Record<string, string>;

for (const [from, to] of Object.entries(names)) {
  if (!t.isValidIdentifier(to)) throw new Error(`invalid target identifier ${from} -> ${to}`);
}

const ast = parse(await Bun.file(input).text(), { sourceType: "script" });

function usedInside(scope: any, name: string): boolean {
  let used = false;
  scope.path.traverse({ Identifier(p: any) {
    if (p.node.name === name && (p.isReferencedIdentifier() || p.isBindingIdentifier())) { used = true; p.stop(); }
  } });
  return used;
}
function safeRename(binding: any, to: string, why: string): boolean {
  const from = binding.identifier.name;
  if (from === to) return false;
  // Shadowing an outer `to` is fine as long as nothing inside this scope refers to it (usedInside catches that,
  // and also catches inner bindings named `to` that would capture our references).
  if (binding.scope.hasOwnBinding(to) || usedInside(binding.scope, to) || ["arguments", "eval", "undefined"].includes(to)) {
    skipped.push(`${from} -> ${to} (${why}): name already in use at line ${binding.identifier.loc?.start.line}`);
    return false;
  }
  binding.scope.rename(from, to);
  return true;
}

let renamed = 0;
const skipped: string[] = [];
const found = new Set<string>();
// collect first, rename after: renaming while traversing scopes would revisit renamed bindings
const work: [any, string][] = [];
traverse(ast, {
  Scope(path: any) {
    for (const [name, binding] of Object.entries<any>(path.scope.bindings)) {
      const to = names[name];
      if (to !== undefined && binding.scope === path.scope) work.push([binding, to]);
    }
  },
});
const seen = new Set<any>();
for (const [binding, to] of work) {
  if (seen.has(binding)) continue;
  seen.add(binding);
  found.add(binding.identifier.name);
  if (safeRename(binding, to, "map")) renamed++;
}

// positional parameters, keyed by "Class.method" or "functionName" (after the global renames above)
let paramRenames = 0;
const paramKeysFound = new Set<string>();
traverse(ast, {
  Function(p: any) {
    let key: string | null = null;
    if (p.isClassMethod()) key = `${p.parentPath.parentPath.node.id?.name}.${t.isIdentifier(p.node.key) ? p.node.key.name : "?"}`;
    else if (p.node.id) key = p.node.id.name;
    else if (p.parentPath.isVariableDeclarator() && t.isIdentifier(p.parentPath.node.id)) key = p.parentPath.node.id.name;
    else if (p.parentPath.isObjectProperty() && t.isIdentifier(p.parentPath.node.key)) {
      // object-literal methods: "<varName>.<key>", e.g. "spawner.respawn"
      const decl = p.parentPath.parentPath.parentPath;
      if (decl?.isVariableDeclarator() && t.isIdentifier(decl.node.id)) key = `${decl.node.id.name}.${p.parentPath.node.key.name}`;
    }
    const want = key ? params[key] : undefined;
    if (!want) return;
    paramKeysFound.add(key!);
    want.forEach((name, i) => {
      const prm = p.node.params[i];
      const id = t.isAssignmentPattern(prm) ? prm.left : prm;
      if (!name || !t.isIdentifier(id)) return;
      const binding = p.scope.getBinding(id.name);
      if (binding && safeRename(binding, name, key!)) paramRenames++;
    });
  },
});

await Bun.write(output, generate(ast, { jsescOption: { minimal: true } }).code);
console.log(`renamed ${renamed} bindings + ${paramRenames} params -> ${output}`);
const missing = Object.keys(names).filter((k) => !found.has(k));
if (missing.length) console.log(`not found (${missing.length}):`, missing.join(", "));
const missingParams = Object.keys(params).filter((k) => !paramKeysFound.has(k));
if (missingParams.length) console.log(`param keys not found (${missingParams.length}):`, missingParams.join(", "));
if (skipped.length) console.log(`skipped (${skipped.length}):\n  ` + skipped.join("\n  "));
