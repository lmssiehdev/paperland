// Evidence-based name recovery for older builds (teams, ...): match functions against the
// already-readable classic build (deob/game.js) by a scope-normalised fingerprint.
//
// A fingerprint is the function's source with every *bound* identifier replaced by `$`
// (property names, globals and literals are kept), whitespace and quote style removed.
// Two functions with equal fingerprints are the same code modulo naming.
//
//   bun scripts/match-classic.ts toplevel <target.js> [classic.js]
//       prints a JSON map {obfuscatedTopLevelName: classicName} for unique exact matches
//       of top-level functions / classes (class = majority of its methods match one classic class).
//   bun scripts/match-classic.ts locals <target.js> <out.js> [classic.js]
//       for every function / method whose fingerprint matches exactly one classic function,
//       copies the classic local + parameter names positionally (scope-safe rename).
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";
import * as t from "@babel/types";

const traverse = (_traverse as any).default ?? _traverse;
const generate = (_generate as any).default ?? _generate;
const OBF = /^_0x[0-9a-f]+$/;

const [mode, target, a3, a4] = process.argv.slice(2);
const classicFile = (mode === "locals" ? a4 : a3) ?? "deob/game.js";

type Fn = { path: any; fp: string; key: string; bindings: string[] };

function load(file: string, text: string) {
  return parse(text, { sourceType: "script" });
}

// source of `path` with bound identifiers -> `$`
function fingerprint(path: any, src: string): string {
  const start = path.node.start, end = path.node.end;
  const holes: [number, number][] = [];
  path.traverse({
    Identifier(p: any) {
      if (!(p.isReferencedIdentifier() || p.isBindingIdentifier())) return;
      if (p.scope.getBinding(p.node.name) || p.isBindingIdentifier()) holes.push([p.node.start, p.node.end]);
    },
  });
  // the function's own name (if any) is a hole too
  if (path.node.id) holes.push([path.node.id.start, path.node.id.end]);
  holes.sort((x, y) => x[0] - y[0]);
  let out = "", pos = start;
  for (const [s, e] of holes) {
    if (s < pos) continue;
    out += src.slice(pos, s) + "$";
    pos = e;
  }
  out += src.slice(pos, end);
  return out.replace(/\s+/g, "").replace(/'/g, '"');
}

// bindings declared in this function (own scope + nested block scopes, not nested functions), in source order
function ownBindings(path: any): any[] {
  const list: any[] = [];
  const add = (scope: any) => { for (const b of Object.values<any>(scope.bindings)) list.push(b); };
  add(path.scope);
  path.traverse({
    Scope(p: any) {
      if (p.isFunction()) { p.skip(); return; }
      if (p.scope !== path.scope) add(p.scope);
    },
  });
  return list.sort((x, y) => x.identifier.start - y.identifier.start);
}

function nameKey(path: any): string {
  if (path.isClassMethod()) {
    const cls = path.parentPath.parentPath.node.id?.name ?? "?";
    const k = t.isIdentifier(path.node.key) ? path.node.key.name : "?";
    return `${cls}.${path.node.kind === "method" || path.node.kind === "constructor" ? "" : path.node.kind + " "}${k}`;
  }
  if (path.node.id) return path.node.id.name;
  if (path.parentPath.isVariableDeclarator() && t.isIdentifier(path.parentPath.node.id)) return path.parentPath.node.id.name;
  return "<anon>";
}

function collect(ast: any, src: string): Fn[] {
  const fns: Fn[] = [];
  traverse(ast, {
    Function(p: any) {
      if (p.node.end - p.node.start < 60) return; // too small to be evidence
      fns.push({ path: p, fp: fingerprint(p, src), key: nameKey(p), bindings: ownBindings(p).map((b) => b.identifier.name) });
    },
  });
  return fns;
}

const classicSrc = await Bun.file(classicFile).text();
const classicAst = load(classicFile, classicSrc);
const classicFns = collect(classicAst, classicSrc);
const byFp = new Map<string, Fn[]>();
for (const f of classicFns) { if (!byFp.has(f.fp)) byFp.set(f.fp, []); byFp.get(f.fp)!.push(f); }

const targetSrc = await Bun.file(target!).text();
const targetAst = load(target!, targetSrc);
const targetFns = collect(targetAst, targetSrc);
const targetFpCount = new Map<string, number>();
for (const f of targetFns) targetFpCount.set(f.fp, (targetFpCount.get(f.fp) ?? 0) + 1);

const unique = (f: Fn) => byFp.get(f.fp)?.length === 1 && targetFpCount.get(f.fp) === 1 ? byFp.get(f.fp)![0] : null;

if (mode === "toplevel") {
  // IIFE scope = scope of the first function expression called at statement level
  let iife: any = null;
  traverse(targetAst, { FunctionExpression(p: any) { if (!iife && p.parentPath.isCallExpression()) { iife = p.scope; p.stop(); } } });
  const map: Record<string, string> = {};
  const votes = new Map<string, Map<string, number>>(); // target class -> classic class -> votes
  for (const f of targetFns) {
    const m = unique(f);
    if (!m) continue;
    const p = f.path;
    // top-level function declaration / var = function
    const declName = p.isFunctionDeclaration() ? p.node.id?.name : p.parentPath.isVariableDeclarator() ? p.parentPath.node.id?.name : null;
    if (declName && OBF.test(declName) && iife?.hasOwnBinding(declName) && iife.getBinding(declName).path.node === (p.isFunctionDeclaration() ? p.node : p.parentPath.node)) {
      const cn = m.key;
      if (!OBF.test(cn) && cn !== "<anon>" && !cn.includes(".")) map[declName] = cn;
    }
    if (p.isClassMethod() && m.path.isClassMethod()) {
      const tc = p.parentPath.parentPath.node.id?.name, cc = m.path.parentPath.parentPath.node.id?.name;
      if (tc && cc && OBF.test(tc) && !OBF.test(cc)) {
        if (!votes.has(tc)) votes.set(tc, new Map());
        votes.get(tc)!.set(cc, (votes.get(tc)!.get(cc) ?? 0) + 1);
      }
    }
  }
  const classVotes: Record<string, string> = {};
  for (const [tc, m] of votes) {
    const sorted = [...m].sort((x, y) => y[1] - x[1]);
    classVotes[tc] = sorted.map(([c, n]) => `${c}:${n}`).join(",");
    if (sorted.length === 1 || sorted[0]![1] >= 2 * sorted[1]![1]) map[tc] = sorted[0]![0];
  }
  console.error("class votes:", JSON.stringify(classVotes, null, 1));
  console.log(JSON.stringify(map, null, 1));
} else if (mode === "locals") {
  const out = a3!;
  let fnsMatched = 0, renamed = 0;
  // process outermost-first is unnecessary: each function only renames its own bindings
  for (const f of targetFns) {
    const m = unique(f);
    if (!m) continue;
    const own = ownBindings(f.path);
    const theirs = m.bindings;
    if (own.length !== theirs.length) continue;
    fnsMatched++;
    own.forEach((b: any, i: number) => {
      const from = b.identifier.name, to = theirs[i]!;
      if (!OBF.test(from) || OBF.test(to) || from === to) return;
      // collision check: the new name must not be visible/used anywhere in the binding's scope
      let clash = b.scope.hasBinding(to);
      if (!clash) b.scope.path.traverse({ Identifier(p: any) { if (p.node.name === to) { clash = true; p.stop(); } } });
      if (clash) return;
      b.scope.rename(from, to);
      renamed++;
    });
  }
  await Bun.write(out, generate(targetAst, { jsescOption: { minimal: true } }).code);
  console.log(`matched ${fnsMatched} functions, renamed ${renamed} locals -> ${out}`);
} else {
  console.error("usage: match-classic.ts toplevel <target> [classic] | locals <target> <out> [classic]");
  process.exit(1);
}
