// One-shot migration of src/**/*.js -> .ts using the TypeScript compiler itself.
// 1. While still JS (checkJs), read the type TS infers for every class field (`this.x = ...`).
// 2. Write .ts files with those fields declared, extensionless imports.
// 3. Annotate params named after a class (unit -> Unit, point -> Vec2, ...).
// 4. Apply TS's own "infer parameter types from usage" fix to every file until it stops changing.
import { Project, Node, ts, SyntaxKind } from "ts-morph";
import { readdirSync, statSync, unlinkSync } from "node:fs";
import { join } from "node:path";

const files = (dir: string): string[] =>
  readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? files(join(dir, f)) : [join(dir, f)]));
const jsFiles = files("src").filter((f) => f.endsWith(".js"));

const compilerOptions = {
  allowJs: true, checkJs: true, noEmit: true, target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.Bundler, lib: ["lib.es2022.d.ts", "lib.dom.d.ts"], skipLibCheck: true,
  strict: false, noImplicitAny: true, allowImportingTsExtensions: false,
};

// ---------- 1. class field types from the JS checker ----------
const js = new Project({ compilerOptions });
js.addSourceFilesAtPaths(jsFiles);
type Field = { name: string; type: string; isStatic: boolean };
const fieldsByClass = new Map<string, Field[]>(); // "file::Class" -> fields
const clean = (t: string) => t.replace(/import\("[^"]*\/src\/([^"]+)"\)\./g, (_, p) => `import("@/${p}").`);

for (const sf of js.getSourceFiles()) {
  for (const cls of sf.getClasses()) {
    const declared = new Set(cls.getMembers().map((m: any) => m.getName?.()).filter(Boolean));
    const out: Field[] = [];
    const inst = cls.getType();
    for (const sym of inst.getProperties()) {
      const name = sym.getName();
      if (declared.has(name) || name.startsWith("__")) continue;
      const decl = sym.getDeclarations()[0];
      if (!decl || decl.getSourceFile() !== sf || !decl.getFirstAncestorByKind(SyntaxKind.ClassDeclaration)) continue;
      if (decl.getFirstAncestorByKind(SyntaxKind.ClassDeclaration) !== cls) continue; // inherited
      let type = clean(sym.getTypeAtLocation(cls).getText(cls, ts.TypeFormatFlags.NoTruncation | ts.TypeFormatFlags.UseFullyQualifiedType));
      if (type === "undefined" || type === "null" || type.length > 200) type = "any";
      out.push({ name, type, isStatic: false });
    }
    // statics assigned outside the class: `Vec2.space = undefined`
    for (const st of sf.getStatements()) {
      const m = st.getText().match(new RegExp(`^${cls.getName()}\\.(\\w+) = `));
      if (m && !declared.has(m[1])) out.push({ name: m[1], type: "any", isStatic: true });
    }
    fieldsByClass.set(`${sf.getFilePath()}::${cls.getName()}`, out);
  }
}

// ---------- 2. write .ts files ----------
const tsProject = new Project({ compilerOptions: { ...compilerOptions, allowJs: false, checkJs: false } });
const classHome = new Map<string, string>(); // class name -> module path (no ext)
for (const sf of js.getSourceFiles()) {
  for (const cls of sf.getClasses()) if (cls.isExported() && cls.getName()) classHome.set(cls.getName()!, sf.getFilePath().replace(/\.js$/, ""));
  const tsPath = sf.getFilePath().replace(/\.js$/, ".ts");
  const text = sf.getFullText().replace(/(from\s+"\.{1,2}\/[^"]+)\.js"/g, '$1"').replace(/(import\s+"\.{1,2}\/[^"]+)\.js"/g, '$1"');
  const out = tsProject.createSourceFile(tsPath, text, { overwrite: true });
  for (const cls of out.getClasses()) {
    const fields = fieldsByClass.get(`${sf.getFilePath()}::${cls.getName()}`) ?? [];
    cls.insertProperties(0, fields.map((f) => ({ name: f.name, type: f.type, isStatic: f.isStatic })));
  }
}

// `import("@/x").T` -> real relative import paths
for (const sf of tsProject.getSourceFiles()) {
  let text = sf.getFullText();
  text = text.replace(/import\("@\/([^"]+?)(\.js)?"\)\./g, (_, p) => {
    let rel = require("node:path").relative(require("node:path").dirname(sf.getFilePath()), join(process.cwd(), "src", p));
    if (!rel.startsWith(".")) rel = "./" + rel;
    return `import("${rel}").`;
  });
  sf.replaceWithText(text);
}

// ---------- 3. name -> type annotations ----------
const NAME_TYPES: Record<string, string> = {
  unit: "Unit", unit2: "Unit", killer: "Unit", bot: "Bot", player: "Player", game: "Game",
  point: "Vec2", point2: "Vec2", point3: "Vec2", position: "Vec2", vec2: "Vec2", center: "Vec2", target: "Vec2",
  segment: "Segment", segment2: "Segment", polygon: "Polygon", polyline: "Polyline",
  base: "Base", track: "Track", skin: "Skin", border: "Border",
  ctx: "CanvasRenderingContext2D", dt: "number", index: "number", i: "number", x: "number", y: "number",
  name: "string", event: "any",
};
for (const sf of tsProject.getSourceFiles()) {
  const needed = new Set<string>();
  sf.forEachDescendant((node) => {
    if (!Node.isParameterDeclaration(node) || node.getTypeNode()) return;
    const n = node.getName();
    const t = NAME_TYPES[n];
    if (!t || node.isRestParameter()) return;
    // skip callbacks of typed array methods (contextual type is better) and destructured params
    const fn = node.getParent();
    if (Node.isArrowFunction(fn) || Node.isFunctionExpression(fn)) {
      const call = fn.getParent();
      if (Node.isCallExpression(call)) return;
    }
    node.setType(t);
    if (classHome.has(t)) needed.add(t);
  });
  const own = new Set(sf.getClasses().map((c) => c.getName()));
  const imported = new Set(sf.getImportDeclarations().flatMap((d) => d.getNamedImports().map((i) => i.getName())));
  for (const t of needed) {
    if (own.has(t) || imported.has(t)) continue;
    let rel = require("node:path").relative(require("node:path").dirname(sf.getFilePath().replace(/\.ts$/, "")), classHome.get(t)!);
    if (!rel.startsWith(".")) rel = "./" + rel;
    sf.addImportDeclaration({ moduleSpecifier: rel, namedImports: [t], isTypeOnly: true });
  }
}
await tsProject.save();
for (const f of jsFiles) unlinkSync(f);

// ---------- 4. infer-from-usage, repeated ----------
const project = new Project({ compilerOptions: { ...compilerOptions, allowJs: false, checkJs: false } });
project.addSourceFilesAtPaths("src/**/*.ts");
const ls = project.getLanguageService().compilerObject;
const fmt = ts.getDefaultFormatCodeSettings();
const count = () => project.getPreEmitDiagnostics().length;
console.log("errors after name typing:", count());
for (let round = 0; round < 4; round++) {
  let changed = 0;
  for (const sf of project.getSourceFiles()) {
    const fix = ls.getCombinedCodeFix({ type: "file", fileName: sf.getFilePath() }, "inferFromUsage", fmt, {});
    for (const change of fix.changes) {
      const target = project.getSourceFileOrThrow(change.fileName);
      const sorted = [...change.textChanges].sort((a, b) => b.span.start - a.span.start);
      let text = target.getFullText();
      for (const c of sorted) text = text.slice(0, c.span.start) + c.newText + text.slice(c.span.start + c.span.length);
      target.replaceWithText(text);
      changed += sorted.length;
    }
  }
  console.log(`inferFromUsage round ${round + 1}: ${changed} edits, errors: ${count()}`);
  if (!changed) break;
}
await project.save();
const byCode = new Map<number, number>();
for (const d of project.getPreEmitDiagnostics()) byCode.set(d.getCode(), (byCode.get(d.getCode()) ?? 0) + 1);
console.log("remaining by code:", [...byCode].sort((a, b) => b[1] - a[1]).map(([c, n]) => `TS${c}:${n}`).join(" "));
