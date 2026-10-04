// Pass 4: recover local variable / parameter names from evidence that survived obfuscation
// (property names, constructors, callback receivers). Rewrites deob/game.js in place.
//
// Evidence, strongest first:
//   this.game = _0x1        -> game          (param stored on this)
//   { game: _0x1 } = x      -> game          (destructuring key)
//   _0x1 = new Vec2()       -> vec2          (constructor)
//   _0x1 = a.b.position     -> position      (member read)
//   _0x1 = getFoo() / x.getFoo() -> foo
//   units.forEach(_0x1 =>   -> unit, index   (singular of receiver)
//   for (let _0x1 = 0; ...  -> i / j / k
//   _0x1.start + _0x1.end   -> segment, etc. (shape of member usage)
// Collisions are avoided by checking every identifier inside the binding's scope.
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";
import * as t from "@babel/types";

const traverse = (_traverse as any).default ?? _traverse;
const generate = (_generate as any).default ?? _generate;

// usage: bun scripts/rename-locals.ts [in.js] [out.js] [--params params.json] [--teams]
//   default: rewrites deob/game.js in place with the classic PARAMS below (classic pipeline unchanged).
//   --params: replaces the hand-confirmed PARAMS table (JSON {"Class.method": [names]}, or a rename-map
//             file with a "$params" key), for other builds whose signatures differ.
//   --teams:  extra usage-shape rules for the teams build (676 engine: hosts, simplyline, in, square).
const argv = process.argv.slice(2);
const flag = (k: string) => { const i = argv.indexOf(k); if (i < 0) return null; const v = argv[i + 1]; argv.splice(i, v && !v.startsWith("--") ? 2 : 1); return v ?? ""; };
const paramsFile = flag("--params");
const TEAMS = flag("--teams") !== null;
const file = argv[0] ?? "deob/game.js";
const outFile = argv[1] ?? file;
const ast = parse(await Bun.file(file).text(), { sourceType: "script" });
const OBF = /^_0x[0-9a-f]+$/;
const RESERVED = new Set(["arguments", "eval", "undefined", "NaN", "Infinity", "let", "static", "yield", "await", "enum"]);

const lcfirst = (s: string) => s[0].toLowerCase() + s.slice(1);
const singular = (s: string) => {
  if (/ies$/.test(s)) return s.slice(0, -3) + "y";
  if (/(ss|sh|ch|x)es$/.test(s)) return s.slice(0, -2);
  if (/[^s]s$/.test(s)) return s.slice(0, -1);
  if (s === "simplyline" || s === "polyline") return "point";
  return null;
};
const nameOf = (n: any): string | null => {
  if (!n) return null;
  if (t.isIdentifier(n)) return OBF.test(n.name) || ["undefined", "NaN", "Infinity", "arguments"].includes(n.name) || /^[A-Z0-9_]+$/.test(n.name) ? null : n.name;
  if (t.isMemberExpression(n) && !n.computed && t.isIdentifier(n.property)) return n.property.name;
  if (t.isThisExpression(n)) return null;
  return null;
};

// --- candidate from the binding's declaration/usage ---
function guess(binding: any, loopDepth: Map<any, number>): string | null {
  const p = binding.path;
  const id = binding.identifier;

  // destructuring key  { game: _0x1 }
  if (p.isVariableDeclarator() || binding.kind === "param") {
    const prop = binding.path.scope.getBinding(id.name) && findPatternKey(binding);
    if (prop) return prop;
  }

  if (binding.kind === "param") {
    const fn = p.isFunction() ? p : p.findParent((x: any) => x.isFunction());
    // this.x = param
    let stored: string | null = null;
    for (const ref of binding.referencePaths) {
      const a = ref.parentPath;
      if (a.isAssignmentExpression({ operator: "=" }) && a.node.right === ref.node && t.isMemberExpression(a.node.left) &&
          t.isThisExpression(a.node.left.object) && !a.node.left.computed) { stored = a.node.left.property.name; break; }
    }
    if (stored) return stored;

    // callback params: recv.forEach((item, index) => ...)
    const call = fn?.parentPath;
    if (call?.isCallExpression() && call.node.arguments[0] === fn.node && t.isMemberExpression(call.node.callee)) {
      const method = call.node.callee.property.name;
      const idx = fn.node.params.indexOf(id) >= 0 ? fn.node.params.indexOf(id) : fn.node.params.findIndex((x: any) => x.left === id);
      const recv = nameOf(call.node.callee.object);
      const item = (recv && singular(recv)) || "item";
      if (["forEach", "map", "filter", "find", "findIndex", "some", "every", "flatMap"].includes(method))
        return idx === 0 ? item : idx === 1 ? "index" : null;
      if (method === "sort") return idx === 0 ? "a" : "b";
      if (method === "reduce") return idx === 0 ? "acc" : idx === 1 ? item : null;
      if (method === "then") return "result";
      if (method === "addEventListener") return null;
    }
    if (call?.isCallExpression() && t.isMemberExpression(call.node.callee) &&
        call.node.callee.property.name === "addEventListener" && call.node.arguments[1] === fn.node) return "event";
    if (call?.isNewExpression() && t.isIdentifier(call.node.callee, { name: "Promise" }))
      return fn.node.params[0] === id ? "resolve" : "reject";
    if (p.isCatchClause?.() || p.parentPath?.isCatchClause?.()) return "error";
    return shapeGuess(binding) ?? dtGuess(binding) ?? callerGuess(binding) ?? argGuess(binding);
  }

  if (p.isVariableDeclarator()) {
    const init = p.node.init;
    // teams: a var whose value ends up in `this.prop = v` or `{ key: v }` (one distinct name) takes that name
    if (TEAMS) {
      const sinks = new Set<string>();
      for (const ref of binding.referencePaths) {
        const a = ref.parentPath;
        if (a.isAssignmentExpression({ operator: "=" }) && a.node.right === ref.node && t.isMemberExpression(a.node.left) &&
            t.isThisExpression(a.node.left.object) && !a.node.left.computed && t.isIdentifier(a.node.left.property)) sinks.add(a.node.left.property.name);
        if (a.isObjectProperty() && a.node.value === ref.node && !a.node.computed && t.isIdentifier(a.node.key)) sinks.add(a.node.key.name);
      }
      if (sinks.size === 1) { const [n] = sinks; if (!OBF.test(n!)) return n!; }
    }
    // teams (Babel ES5): `var _this = this` -> name of the enclosing class (game, base, track...)
    if (TEAMS && t.isThisExpression(init)) {
      const m = p.findParent((x: any) => x.isClassMethod());
      const cls = m?.parentPath.parentPath.node.id?.name;
      return cls && !OBF.test(cls) ? lcfirst(cls) : "self";
    }
    // for (let i = 0; ...)
    const loop = p.parentPath.parentPath;
    if (loop.isForStatement() && t.isNumericLiteral(init)) {
      return ["i", "j", "k", "m"][loopDepth.get(loop.node) ?? 0] ?? "n";
    }
    if (loop.isForOfStatement()) return singular(nameOf(loop.node.right) ?? "") ?? "item";
    if (loop.isForInStatement()) return "key";
    if (!init) return argGuess(binding) ?? shapeGuess(binding);
    if (t.isNewExpression(init) && t.isIdentifier(init.callee)) {
      const n = init.callee.name;
      if (OBF.test(n)) return null;
      return n === "Path2D" ? "path" : n === "Promise" ? "promise" : lcfirst(n);
    }
    if (t.isIdentifier(init, { name: "arguments" })) return "args";
    if (t.isIdentifier(init) && !OBF.test(init.name) && /^[a-z]/.test(init.name) && init.name !== "undefined") return init.name;
    if (t.isIdentifier(init, { name: "Infinity" })) return "min";
    if (t.isUnaryExpression(init, { operator: "-" }) && t.isIdentifier(init.argument, { name: "Infinity" })) return "max";
    if (t.isMemberExpression(init) && init.computed && nameOf(init.object) && singular(nameOf(init.object)!)) return singular(nameOf(init.object)!);
    if (t.isBinaryExpression(init, { operator: "-" }) && t.isMemberExpression(init.left) && t.isMemberExpression(init.right) &&
        !init.left.computed && !init.right.computed && init.left.property.name === init.right.property.name &&
        ["x", "y"].includes(init.left.property.name)) return "d" + init.left.property.name;
    if (t.isMemberExpression(init) && !init.computed && t.isIdentifier(init.property)) {
      const n = init.property.name;
      return n === "length" ? "count" : n === "prototype" ? null : n;
    }
    if (t.isCallExpression(init)) {
      const c = init.callee;
      const fname = t.isIdentifier(c) ? c.name : t.isMemberExpression(c) && !c.computed ? c.property.name : null;
      if (fname === "createElement" && t.isStringLiteral(init.arguments[0])) return init.arguments[0].value;
      if (fname === "getContext") return "ctx";
      if (fname === "now") return "time";
      if (fname === "json") return "json";
      if (fname === "split") return "parts";
      if (fname === "sqrt" || fname === "distance") return "dist";
      if (fname === "distance2") return "distSq";
      if (fname === "magnitude") return "len";
      if (fname === "normalize") return "dir";
      if (fname === "sub") return "delta";
      if (fname === "atan2" || fname === "angle") return "angle";
      if (fname === "sign") return "sign";
      if (fname === "cos" || fname === "sin") return fname;
      if (fname === "rng" || fname === "random") return "roll";
      if (fname === "getJSON") return "stored";
      if (fname === "intersections") return "intersections";
      if (fname === "splice") return "removed";
      if (fname === "round" || fname === "floor") return null;
      if (fname === "clone" && nameOf(c.object)) return nameOf(c.object) + "Copy";
      if (fname === "filter" || fname === "slice" || fname === "map") return nameOf(c.object);
      if ((fname === "find" || fname === "pop" || fname === "shift") && nameOf(c.object)) return singular(nameOf(c.object)!);
      if (fname === "findIndex" || fname === "indexOf") return "index";
      const m = fname && /^(get|calc|create|make|find|read|load)([A-Z]\w*)$/.exec(fname);
      if (m) return lcfirst(m[2]);
    }
    return argGuess(binding) ?? shapeGuess(binding) ?? returnedGuess(binding);
  }
  return null;
}

// time deltas: used as `x * dt / 1000` or `dt / 1000`
function dtGuess(binding: any): string | null {
  return binding.referencePaths.some((r: any) => {
    const b = r.findParent((x: any) => x.isBinaryExpression({ operator: "/" }));
    return b && t.isNumericLiteral(b.node.right, { value: 1000 }) && r.findParent((x: any) => x === b);
  }) ? "dt" : null;
}

function returnedGuess(binding: any): string | null {
  return binding.referencePaths.some((r: any) => r.parentPath.isReturnStatement()) ? "result" : null;
}

function findPatternKey(binding: any): string | null {
  const parent = binding.identifier && binding.path.scope;
  let found: string | null = null;
  binding.path.traverse?.({
    ObjectProperty(op: any) {
      if (op.node.value === binding.identifier && t.isIdentifier(op.node.key)) { found = op.node.key.name; op.stop(); }
    },
  });
  if (!found && binding.path.isVariableDeclarator?.()) return null;
  // params: search the function's params for { key: id }
  if (!found && binding.kind === "param") {
    const fn = binding.path.isFunction() ? binding.path : binding.path.findParent((x: any) => x.isFunction());
    fn?.get("params").forEach((pp: any) => pp.traverse?.({
      ObjectProperty(op: any) { if (op.node.value === binding.identifier && t.isIdentifier(op.node.key)) found = op.node.key.name; },
    }));
  }
  void parent;
  return found;
}

// --- interprocedural evidence: f(a, b) call sites vs f's parameter names ---
const fnIndex = new Map<string, any[]>(); // function/method name -> function paths
function indexFunctions() {
  fnIndex.clear();
  traverse(ast, {
    "FunctionDeclaration|ClassMethod|ObjectMethod"(p: any) {
      const n = p.node.id?.name ?? (t.isIdentifier(p.node.key) ? p.node.key.name : null);
      if (!n) return;
      const key = p.isClassMethod() && n === "constructor" ? "new " + p.parentPath.parentPath.node.id?.name : n;
      if (!fnIndex.has(key)) fnIndex.set(key, []);
      fnIndex.get(key)!.push(p);
    },
    VariableDeclarator(p: any) {
      if (t.isIdentifier(p.node.id) && (t.isArrowFunctionExpression(p.node.init) || t.isFunctionExpression(p.node.init))) {
        const n = p.node.id.name;
        if (!fnIndex.has(n)) fnIndex.set(n, []);
        fnIndex.get(n)!.push(p.get("init"));
      }
    },
  });
}
const calleeKey = (call: any): string | null => {
  const c = call.node.callee;
  if (call.isNewExpression()) return t.isIdentifier(c) ? "new " + c.name : null;
  if (t.isIdentifier(c)) return c.name;
  if (t.isMemberExpression(c) && !c.computed) return c.property.name;
  return null;
};
const paramName = (fn: any, i: number): string | null => {
  const prm = fn.node.params[i];
  const id = t.isAssignmentPattern(prm) ? prm.left : prm;
  return t.isIdentifier(id) && !OBF.test(id.name) ? id.name : null;
};
// binding passed as argument i to a uniquely-named function whose param i is named
function argGuess(binding: any): string | null {
  for (const ref of binding.referencePaths) {
    const call = ref.parentPath;
    if (!(call.isCallExpression() || call.isNewExpression())) continue;
    const i = call.node.arguments.indexOf(ref.node);
    if (i < 0) continue;
    const key = calleeKey(call);
    const fns = key && fnIndex.get(key);
    if (fns?.length === 1) { const n = paramName(fns[0], i); if (n) return n; }
  }
  return null;
}
// param i of a function: look at what its callers pass in
function callerGuess(binding: any): string | null {
  const fn = binding.path.isFunction() ? binding.path : binding.path.findParent((x: any) => x.isFunction());
  if (!fn) return null;
  const i = fn.node.params.findIndex((p: any) => p === binding.identifier || p.left === binding.identifier);
  if (i < 0) return null;
  let key: string | null = null;
  if (fn.isClassMethod()) key = fn.node.key.name === "constructor" ? "new " + fn.parentPath.parentPath.node.id?.name : fn.node.key.name;
  else if (fn.isFunctionDeclaration()) key = fn.node.id.name;
  else if (fn.parentPath.isVariableDeclarator()) key = fn.parentPath.node.id.name;
  if (!key || fnIndex.get(key)?.length !== 1) return null;
  const counts = new Map<string, number>();
  traverse(ast, {
    "CallExpression|NewExpression"(c: any) {
      if (calleeKey(c) !== key) return;
      const a = c.node.arguments[i];
      const n = a && nameOf(a);
      if (n && !["this"].includes(n)) counts.set(n, (counts.get(n) ?? 0) + 1);
    },
  });
  return counts.size === 1 ? [...counts.keys()][0] : null;
}

// usage shape: which properties are read off this binding?
function shapeGuess(binding: any): string | null {
  const props = new Set<string>();
  for (const ref of binding.referencePaths) {
    const m = ref.parentPath;
    if (m.isMemberExpression() && m.node.object === ref.node && !m.node.computed) props.add(m.node.property.name);
  }
  const has = (...k: string[]) => k.every((x) => props.has(x));
  if (TEAMS) {
    if (props.has("hosts") || props.has("hasHost") || has("polygon", "team")) return "base";
    if (props.has("simplyline") || props.has("crossedUnits") || props.has("inject")) return "track";
    if (has("units", "bases")) return "team";
    if (props.has("personalPercent")) return "scheme";
  }
  if (has("game") && (props.has("position") || props.has("base"))) return "unit";
  if (has("position") && (props.has("base") || props.has("track") || props.has("in"))) return "unit";
  if (has("position") && (props.has("direction") || props.has("smoothness") || props.has("movement"))) return "unit";
  if (has("units") && (props.has("config") || props.has("player"))) return "game";
  if (has("start", "end") || (props.has("vector") && props.has("start"))) return "segment";
  if (has("segments") && (props.has("square") || props.has("inside") || props.has("calcPath"))) return "polygon";
  if (has("polygon")) return "base";
  if (props.has("fillStyle") || props.has("beginPath") || props.has("strokeStyle")) return "ctx";
  if (has("x", "y") && [...props].every((p) => /^(x|y|clone|sub|add|distance|distance2|mulScalar|normalize|magnitude|rotate|equal|segments|cell|dot|cross|angle|set|release)$/.test(p))) return "point";
  if (has("clientX", "clientY") || props.has("preventDefault") || props.has("keyCode")) return "event";
  if (props.has("props") && props.has("type")) return "vnode";
  return null;
}

// --- collision-safe rename ---
function namesIn(scope: any): Set<string> {
  const s = new Set<string>();
  scope.path.traverse({ Identifier(p: any) { if (p.isReferencedIdentifier() || p.isBindingIdentifier()) s.add(p.node.name); } });
  // identifiers referenced from this scope but bound outside also count (traverse doesn't visit the scope node itself)
  for (const n of Object.keys(scope.bindings)) s.add(n);
  return s;
}
function safeName(scope: any, base: string): string | null {
  if (!t.isValidIdentifier(base) || RESERVED.has(base)) base = "_" + base;
  if (!t.isValidIdentifier(base)) return null;
  const taken = namesIn(scope);
  // Also avoid outer bindings/globals that are referenced anywhere in this scope (captured by namesIn)
  let n = base, i = 2;
  while (taken.has(n) || scope.hasBinding(n) && taken.has(n)) n = base + i++;
  return n;
}

// Hand-confirmed parameter names for key methods ("Class.method" -> params). Applied first.
let PARAMS: Record<string, (string | null)[]> = {
  "Game.kill": ["unit", "killer", "reason"],
  "Game.spawnPlayer": ["name", "skin", "extraLife"],
  "Game.gameOver": ["reason"],
  "Unit.constructor": ["game", "name", "position", "basePoints", "unusedArg", "schemesManager"],
  "Player.constructor": ["game", "name", "position", "basePoints", "unusedArg", "schemesManager"],
  "Bot.constructor": ["game", "type", "name", "position", "basePoints", "unusedArg", "schemesManager"],
  "Base.constructor": ["unit", "points"],
};
if (paramsFile) {
  const j = await Bun.file(paramsFile).json();
  PARAMS = j.$params ?? j;
}
traverse(ast, {
  ClassMethod(p: any) {
    const key = `${p.parentPath.parentPath.node.id?.name}.${p.node.key.name}`;
    PARAMS[key]?.forEach((name, i) => {
      const prm = p.node.params[i];
      if (name && t.isIdentifier(prm) && OBF.test(prm.name)) p.scope.rename(prm.name, name);
    });
  },
});

// precompute for-loop nesting depth
const loopDepth = new Map<any, number>();
traverse(ast, {
  ForStatement(p: any) {
    let d = 0, q = p.parentPath;
    while (q && !q.isFunction()) { if (q.isForStatement()) d++; q = q.parentPath; }
    loopDepth.set(p.node, d);
  },
});

// find the main IIFE so its own (top-level) bindings are left to rename.ts
let iifeScope: any = null;
traverse(ast, {
  FunctionExpression(p: any) {
    if (!iifeScope && p.parentPath.isCallExpression() && p.parentPath.parentPath.isExpressionStatement()) { iifeScope = p.scope; p.stop(); }
  },
});

let renamed = 0, total = 0;
const stats: Record<string, number> = {};
for (let pass = 0; pass < 4; pass++) {
  indexFunctions();
  traverse(ast, {
    Scope(path: any) {
      if (path.scope === iifeScope) return;
      for (const [name, binding] of Object.entries<any>(path.scope.bindings)) {
        if (!OBF.test(name)) continue;
        if (pass === 0) total++;
        const g = guess(binding, loopDepth);
        if (!g) continue;
        const n = safeName(path.scope, g);
        if (!n) continue;
        path.scope.rename(name, n);
        renamed++;
        stats[g] = (stats[g] ?? 0) + 1;
      }
    },
  });
}

await Bun.write(outFile, generate(ast, { jsescOption: { minimal: true } }).code);
const top = Object.entries(stats).sort((a, b) => b[1] - a[1]).slice(0, 25).map(([k, v]) => `${k}:${v}`).join(" ");
console.log(`renamed ${renamed}/${total} local bindings in ${file} -> ${outFile}\n  top: ${top}`);
