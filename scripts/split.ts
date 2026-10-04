// Splits deob/game.js (one IIFE) into ES modules under src/.
// - Each top-level statement goes to the module of the most recent ANCHOR before it.
// - Imports/exports are computed from Babel scope bindings, so nothing is hand-wired.
// - Vendored Preact / js-cookie are dropped and replaced with npm imports.
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";
import { mkdirSync, rmSync } from "node:fs";
import { dirname, relative } from "node:path";

const traverse = (_traverse as any).default ?? _traverse;
const generate = (_generate as any).default ?? _generate;

// First binding declared by a statement -> module that statement (and following ones) belong to.
const ANCHORS: Record<string, string> = {
  _0x4c28c2: "vendor/preact",
  _0x18fb1c: "vendor/js-cookie",
  EPSILON: "engine/math",
  Segment: "engine/segment",
  _0x49b883: "engine/spatial-grid",
  VEC_POOL_MAX: "engine/vec2",
  CELL_RADIUS: "game/constants",
  Polyline: "engine/polyline",
  rayCrossingSign: "engine/polygon",
  clock: "engine/math",
  circlePoints: "engine/polygon",
  hexToRgb: "engine/color",
  createRng: "engine/math",
  loadImage: "engine/load-image",
  hsvMulValue: "engine/color",
  fmt2: "engine/math",
  Border: "engine/border",
  Base: "game/base",
  Track: "game/track",
  StateMachine: "ai/state-machine",
  botNearPlayerTrack: "ai/bot-states",
  _0x1d96bc: "game/particles",
  SchemesManager: "game/scoring",
  Tip: "game/achievements",
  City: "game/city",
  Unit: "game/units",
  FloatingLabel: "game/floating-label",
  fromCharCode: "game/domain-lock",
  NamePool: "game/names",
  _0x24884b: "game/domain-lock",
  TAU: "engine/math",
  Game: "game/game",
  KeyboardModeSwitch: "input/controller",
  _0x577878: "skins/display",
  _0x2d02fe: "render/game-renderer",
  renderDebugOverlay: "render/debug-overlay",
  LANG_RU: "ui/i18n",
  createApi: "api",
  _0x4214bf: "vendor/preact-hooks",
  _0x2aa187: "ui/i18n",
  LanguageContext: "ui/components",
  DEFAULT_CONFIG: "config",
  _0x3028d1: "skins/skin",
  BOT_NAMES_RAW: "game/names",
  _0xb5f7a4: "main",
};

// Vendor bindings the game uses -> npm import.
const NPM: Record<string, { from: string; name: string }> = {
  createElement: { from: "preact", name: "createElement" },
  render: { from: "preact", name: "render" },
  Fragment: { from: "preact", name: "Fragment" },
  Component: { from: "preact", name: "Component" },
  createContext: { from: "preact", name: "createContext" },
  useState: { from: "preact/hooks", name: "useState" },
  useReducer: { from: "preact/hooks", name: "useReducer" },
  useEffect: { from: "preact/hooks", name: "useEffect" },
  useRef: { from: "preact/hooks", name: "useRef" },
  useMemo: { from: "preact/hooks", name: "useMemo" },
  useContext: { from: "preact/hooks", name: "useContext" },
  Cookies: { from: "js-cookie", name: "default" },
};
const isVendor = (m: string) => m.startsWith("vendor/");

// Hand patches applied to specific modules after generation.
const DOMAIN_LOCK_NOTE = `// ORIGINAL: domain lock. Decodes "paperio.site" / "paper-io.com"; on any other host it
// redirects to http://paper-io.com/?bc=<host> after ~3-4 min, and only on the real host does it set
// Player.prototype.moveTo (needed by Game.recoverTail). Disabled for local builds; original kept in
// deob/game.js.
`;

const src = await Bun.file("deob/game.js").text();
const ast = parse(src, { sourceType: "script" });
const iifePath: any = { node: null };
traverse(ast, {
  FunctionExpression(p: any) {
    if (!iifePath.node && p.parentPath.isCallExpression() && p.parentPath.parentPath.isExpressionStatement()) {
      iifePath.node = p;
      p.stop();
    }
  },
});
const fn = iifePath.node;

// PATCH: the original UI calls useContext() inside a useEffect callback. The Preact it bundled
// tolerated that; current Preact throws (no current component). Hoist such calls to the
// component body: `useEffect(() => { x = useContext(C).lng })` -> `const ctxC = useContext(C)`.
fn.traverse({
  CallExpression(p: any) {
    if (p.node.callee.name !== "useContext") return;
    const effectCb = p.getFunctionParent();
    const effectCall = effectCb?.parentPath;
    if (!effectCall?.isCallExpression() || effectCall.node.callee.name !== "useEffect") return;
    const component = effectCall.getFunctionParent();
    const id = p.scope.generateUidIdentifier(`${p.node.arguments[0].name}Value`);
    component.get("body").unshiftContainer("body", parse(`const ${id.name} = 0;`).program.body[0]);
    component.get("body.body.0.declarations.0.init").replaceWith(p.node);
    p.replaceWith(id);
  },
});
fn.scope.crawl();

const scope = fn.scope;
const stmts: any[] = fn.get("body.body");

// 1. assign statements to modules
const stmtModule = new Map<any, string>();
let current = "";
for (const s of stmts) {
  const declared = Object.keys(s.getOuterBindingIdentifiers?.() ?? {});
  const anchor = declared.find((n) => ANCHORS[n]);
  if (anchor) current = ANCHORS[anchor];
  if (!current) throw new Error(`no module for statement at line ${s.node.loc.start.line}`);
  stmtModule.set(s.node, current);
}
const topStmtOf = (p: any) => p.findParent((x: any) => x.parentPath === fn.get("body"))?.node ?? p.node;

// 2. owner module of every IIFE-level binding
const owner = new Map<string, string>();
for (const [name, b] of Object.entries<any>(scope.bindings)) {
  const node = b.path.isVariableDeclarator() ? b.path.parentPath.node : b.path.node;
  const m = stmtModule.get(node);
  if (m) owner.set(name, m);
}

// 3. cross-module references and illegal cross-module reassignments
const imports = new Map<string, Map<string, Set<string>>>(); // module -> from -> names
const exported = new Map<string, Set<string>>();
const problems: string[] = [];
const addImport = (mod: string, from: string, name: string) => {
  if (!imports.has(mod)) imports.set(mod, new Map());
  const m = imports.get(mod)!;
  if (!m.has(from)) m.set(from, new Set());
  m.get(from)!.add(name);
};
for (const [name, b] of Object.entries<any>(scope.bindings)) {
  const def = owner.get(name)!;
  for (const ref of b.referencePaths) {
    const user = stmtModule.get(topStmtOf(ref));
    if (!user || user === def) continue;
    if (isVendor(user)) continue;
    if (isVendor(def)) {
      if (!NPM[name]) problems.push(`${user} uses vendor internal ${name} (${def})`);
      else addImport(user, NPM[name].from, name);
      continue;
    }
    addImport(user, def, name);
    if (!exported.has(def)) exported.set(def, new Set());
    exported.get(def)!.add(name);
  }
  for (const v of b.constantViolations) {
    const user = stmtModule.get(topStmtOf(v));
    if (user && user !== def && !(isVendor(user) && isVendor(def))) problems.push(`${user} reassigns ${name} owned by ${def}`);
  }
}
if (problems.length) {
  console.error([...new Set(problems)].join("\n"));
  process.exit(1);
}

// 4. emit
rmSync("src", { recursive: true, force: true });
const byModule = new Map<string, any[]>();
for (const s of stmts) {
  const m = stmtModule.get(s.node)!;
  if (isVendor(m)) continue;
  if (!byModule.has(m)) byModule.set(m, []);
  byModule.get(m)!.push(s.node);
}
const order = [...byModule.keys()];

for (const [mod, nodes] of byModule) {
  const exp = exported.get(mod) ?? new Set();
  const lines: string[] = [];
  const imp = imports.get(mod) ?? new Map();
  for (const [from, names] of [...imp].sort(([a], [b]) => a.localeCompare(b))) {
    const sorted = [...names].sort();
    if (NPM[sorted[0]] && !from.includes("/") || from.startsWith("preact") || from === "js-cookie") {
      const def = sorted.filter((n) => NPM[n]?.name === "default");
      const named = sorted.filter((n) => NPM[n]?.name !== "default");
      const parts = [...def, ...(named.length ? [`{ ${named.join(", ")} }`] : [])];
      lines.push(`import ${parts.join(", ")} from "${from}";`);
    } else {
      let rel = relative(dirname(`src/${mod}`), `src/${from}`);
      if (!rel.startsWith(".")) rel = "./" + rel;
      lines.push(`import { ${sorted.join(", ")} } from "${rel}.js";`);
    }
  }
  if (mod === "main") {
    // keep original module evaluation order for side effects
    for (const m of order) if (m !== "main") lines.push(`import "./${m}.js";`);
  }
  if (lines.length) lines.push("");

  {
    for (const n of nodes) {
      if (mod === "game/domain-lock" && n.type === "BlockStatement") {
        lines.push(DOMAIN_LOCK_NOTE + "Player.prototype.moveTo = true;");
        continue;
      }
      let code = generate(n, { jsescOption: { minimal: true } }).code;
      const names = Object.keys(
        n.type === "VariableDeclaration" ? Object.fromEntries(n.declarations.map((d: any) => [d.id.name, 1])) : n.id ? { [n.id.name]: 1 } : {},
      );
      if (names.some((x) => exp.has(x))) code = "export " + code;
      lines.push(code);
    }
  }
  const out = `src/${mod}.js`;
  mkdirSync(dirname(out), { recursive: true });
  await Bun.write(out, lines.join("\n") + "\n");
}
console.log(`wrote ${byModule.size} modules to src/`);
for (const m of order) console.log(`  src/${m}.js  (${byModule.get(m)!.length} stmts, exports ${exported.get(m)?.size ?? 0})`);
