// Tighten class fields typed `any`: use the checker type of what's assigned to them
// (`this.game = game` with `game: Game` -> `game: Game`), else a type implied by the field name.
import { Project, Node, SyntaxKind, ts } from "ts-morph";

const NAME_TYPES: Record<string, string> = {
  game: "Game", unit: "Unit", player: "Player", killer: "Unit", position: "Vec2", target: "Vec2",
  center: "Vec2", base: "Base", track: "Track", polygon: "Polygon", polyline: "Polyline", skin: "Skin",
};
const project = new Project({ tsConfigFilePath: "tsconfig.json" });
const before = project.getPreEmitDiagnostics().length;
const classHome = new Map<string, string>();
for (const sf of project.getSourceFiles())
  for (const c of sf.getClasses()) if (c.isExported()) classHome.set(c.getName()!, sf.getFilePath().replace(/\.ts$/, ""));

let refined = 0;
for (let round = 0; round < 3; round++) {
  for (const sf of project.getSourceFiles()) {
    const needed = new Set<string>();
    for (const cls of sf.getClasses()) {
      for (const prop of cls.getProperties()) {
        if (prop.getTypeNode()?.getText() !== "any") continue;
        const name = prop.getName();
        const types = new Set<string>();
        cls.forEachDescendant((n) => {
          if (!Node.isBinaryExpression(n) || n.getOperatorToken().getKind() !== SyntaxKind.EqualsToken) return;
          const left = n.getLeft();
          if (!Node.isPropertyAccessExpression(left) || left.getName() !== name || left.getExpression().getKind() !== SyntaxKind.ThisKeyword) return;
          const t = n.getRight().getType();
          if (t.isAny() || t.isUndefined() || t.isNull()) return;
          const text = t.getText(cls, ts.TypeFormatFlags.NoTruncation);
          if (text.includes("import(") || text.length > 80) return;
          types.add(t.isLiteral() ? t.getBaseTypeOfLiteralType().getText() : text);
        });
        let type: string | null = types.size === 1 ? [...types][0] : null;
        if (!type && NAME_TYPES[name]) type = NAME_TYPES[name];
        if (!type) continue;
        prop.setType(type);
        refined++;
        const base = type.replace(/\[\]$/, "");
        if (classHome.has(base)) needed.add(base);
      }
    }
    const own = new Set(sf.getClasses().map((c) => c.getName()));
    const imported = new Set(sf.getImportDeclarations().flatMap((d) => d.getNamedImports().map((i) => i.getName())));
    for (const t of needed) {
      if (own.has(t) || imported.has(t)) continue;
      sf.addImportDeclaration({ moduleSpecifier: sf.getRelativePathAsModuleSpecifierTo(classHome.get(t)! + ".ts"), namedImports: [t], isTypeOnly: true });
    }
  }
}
await project.save();
const p2 = new Project({ tsConfigFilePath: "tsconfig.json" });
console.log(`refined ${refined} fields; errors ${before} -> ${p2.getPreEmitDiagnostics().length}`);
