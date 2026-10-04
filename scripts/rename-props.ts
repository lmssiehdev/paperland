// Type-aware property/method renames across src/ via the TS language service (ts-morph).
// usage: bun scripts/rename-props.ts [--dry]   (edit RENAMES below)
//
// Safety net, in order:
//  1. ts-morph `rename()` updates every reference the type checker can link.
//  2. Afterwards, any leftover `.oldName` access is printed: those are on `any`-typed values the
//     checker couldn't link. Review them by hand (or type the value and rerun).
//  3. Run `tsc` and the headless smoke/autopilot tests.
import { Project, Node } from "ts-morph";

// "Class.member" -> new name
const RENAMES: Record<string, string> = {
  // units
  "Unit.in": "insideBase",            // base the unit is currently inside (own base = safe)
  "Unit.vrange": "viewRange",         // world-space radius visible around the unit
  "Unit.top": "rank",                 // leaderboard position (1-based)
  "Unit.log": "positionLog",
  "Unit.lastSquare": "lastArea",
  "Bot.def": "defense",
  "Bot.capSquare": "captureArea",     // area the current loop would capture
  // area ("square" in the original = area)
  "Base.square": "area",
  "Base.calcSquare": "calcArea",
  "Game.square": "arenaArea",
  "Polygon.square": "area",
  "Polygon.rawSquare": "signedArea",
  // trails / polygons
  "Track.simplyline": "simplifiedPoints",
  "Polygon.simplify": "simplifiedPoints",
  "Polyline.add2": "addPoint",
  // geometry
  "Segment.a": "normalX",             // unit normal of the line (a*x + b*y + c = 0)
  "Segment.b": "normalY",
  "Segment.c": "lineOffset",
  "Game.space": "grid",               // SpatialGrid
  "Vec2.space": "grid",
  // misc
  "Game.qas": "qualityEventsPending", // one-shot analytics flags per quality level
  "NamePool.aviable": "available",    // typo in original
};

const dry = process.argv.includes("--dry");
const project = new Project({ tsConfigFilePath: "tsconfig.json" });
const errorsBefore = project.getPreEmitDiagnostics().length;

const findMember = (cls: string, member: string) => {
  for (const sf of project.getSourceFiles()) {
    const c = sf.getClass(cls);
    if (!c) continue;
    return c.getProperty(member) ?? c.getMethod(member) ?? c.getGetAccessor(member) ?? c.getStaticProperty(member) ?? c.getStaticMethod(member);
  }
};

const leftovers: string[] = [];
for (const [key, to] of Object.entries(RENAMES)) {
  const [cls, from] = key.split(".");
  const member = findMember(cls!, from!);
  if (!member) { console.log(`skip ${key}: not found`); continue; }
  const refs = (member as any).findReferencesAsNodes?.() ?? [];
  console.log(`${key} -> ${to}  (${refs.length} linked refs)`);
  if (!dry) (member as any).rename(to);
  // accesses the checker could NOT link (receiver typed any)
  for (const sf of project.getSourceFiles()) {
    sf.forEachDescendant((n) => {
      if (Node.isPropertyAccessExpression(n) && n.getName() === from && n.getExpression().getType().isAny())
        leftovers.push(`${sf.getFilePath().split("/src/")[1]}:${n.getStartLineNumber()} ${n.getText().slice(0, 60)}  (${key}?)`);
    });
  }
}
if (!dry) await project.save();
const errorsAfter = new Project({ tsConfigFilePath: "tsconfig.json" }).getPreEmitDiagnostics().length;
console.log(`tsc errors: ${errorsBefore} -> ${errorsAfter}`);
if (leftovers.length) console.log(`\nunlinked accesses on any-typed values (check by hand):\n  ${leftovers.join("\n  ")}`);
