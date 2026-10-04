// Pass 3: scope-aware renames of identified bindings. Safe: uses Babel's scope.rename,
// so every reference moves together. Add names to RENAMES as more code gets understood.
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";

const traverse = (_traverse as any).default ?? _traverse;
const generate = (_generate as any).default ?? _generate;

// Top-level bindings inside the main IIFE.
const RENAMES: Record<string, string> = {
  // --- math / util ---
  _0x68ae04: "EPSILON", _0x8dca1d: "isZero", _0xb7ae0c: "nearlyEqual", _0x3c4389: "lerp",
  _0x16ad2b: "easeOutCubic", _0x105f7c: "clamp", _0x39a5a2: "cross2d", _0x1accb9: "inRange",
  _0x1559da: "rangeOverlap", _0x4494a5: "pointInPolygon", _0x296391: "pointOnSegment",
  _0x27b3a7: "nextId", _0x98c0a2: "clock", _0xa106df: "now", _0x1fc93f: "createRng",
  _0x5aec40: "TAU", _0xa92ac9: "vecFromAngle", _0xce11b3: "fmt2",
  // --- tick / death-reason constants ---
  _0x3e57df: "CELL_RADIUS", _0x2069c7: "CELL_RADIUS_SQ", _0x4eb235: "TICK_MS", _0xbeedd5: "TICK_MS_X2",
  _0x1f3950: "DEATH_WIN", _0x1466e3: "DEATH_SELF_INTERSECT", _0x46f91a: "DEATH_WALL",
  _0xdf8741: "DEATH_TRACK_CROSSED", _0x52fd24: "DEATH_EXIT_CAPTURED", _0x17fe5b: "DEATH_SURROUNDED",
  _0x21e037: "DEATH_REMOVED", _0x3bad23: "DEATH_CAPITAL_SURROUNDED",
  // --- geometry engine ---
  _0x55b7fb: "Segment", _0x273643: "GridCell", _0x1d7dd9: "SpatialGrid", _0x57ebac: "Vec2",
  _0x220205: "Polyline", _0x59ba56: "Polygon", _0x573c94: "Border",
  _0x159f84: "VEC_POOL_MAX", _0x112dd5: "vecPool", _0x331fd0: "vecPoolSize",
  // --- game entities ---
  _0x2c51f6: "Base", _0x3bf2d1: "Track", _0x55c57a: "Unit", _0x4c9af3: "Player", _0x29a0a0: "Bot",
  _0x516e3b: "City", _0x4678b1: "Particle", _0x797aae: "FloatingLabel", _0x54e83d: "spawnDeathParticles",
  // --- bot AI ---
  _0x413c0a: "StateMachine", _0x3d8162: "BOT_STATES", _0xaafa1c: "botNearPlayerTrack",
  _0x3845e6: "botFeelsThreatened",
  // --- scoring / achievements ---
  _0x55fdda: "SchemesManager", _0x59c04d: "SchemeSet", _0x37f671: "ScoreScheme",
  _0x666d9a: "ClassicScoreScheme", _0x279c29: "Tip", _0x1610ab: "Achievement",
  _0x180abc: "AchievementStore", _0x5ef101: "AchievementsProfile",
  // --- game / input / names ---
  _0x4314b9: "Game", _0x58fad4: "KeyboardModeSwitch", _0x2cad5a: "Controller", _0x26dff6: "NamePool",
  _0x113767: "BOT_NAMES", _0x5be379: "BOT_NAMES_RAW", _0x30561b: "DEFAULT_CONFIG", _0x2ed33d: "CONFIG",
  _0x4b9315: "PALETTE", _0x47dace: "LANG_RU", _0x1c04b3: "createApi", _0x594216: "renderGame",
  _0x3149c2: "renderDebugOverlay", _0x180a8c: "setLanguages", _0x433da0: "getLanguage",
  // --- skins ---
  _0x5bb36f: "SkinLayer", _0x2a78e7: "SkinPattern", _0x20fed4: "SkinAvatar", _0x2ae0b8: "SkinDisplay",
  _0xe72ac7: "Skin", _0x48502f: "Asset", _0x2ce35d: "ColorAsset", _0x36c5ae: "ImageAsset",
  _0x587494: "AssetPool", _0x5687e4: "ColoredPool", _0x50459b: "ClassicSkinPool",
  _0x410a0e: "SkinManagerBase", _0x56042c: "SkinManager", _0x542e67: "makeColorCanvas",
  // --- UI (Preact) ---
  _0x4ec2d4: "createElement", _0x20c799: "render", _0x1d032c: "App", _0x480125: "Cookies",
  _0x1a6367: "Fragment", _0x6579ff: "Component", _0x3ebc68: "createContext",
  _0x1e9b06: "useState", _0x48ca96: "useReducer", _0x4799a1: "useEffect", _0x52c2c5: "useRef",
  _0x58544d: "useMemo", _0x31adbe: "useContext", _0x888db7: "getHookState",
  // --- color / misc helpers ---
  _0x4723f6: "circlePoints", _0x5c7a96: "loadImage", _0x3dca80: "hexToRgb", _0x506635: "rgbToHsv",
  _0x220094: "rgbToHex", _0x272628: "hsvToRgb", _0x1f8093: "hsvToHex", _0x105534: "hsvMulValue",
  _0xf8d7f3: "hsvLighten", _0x409cb5: "hsvSetValue", _0x18cc5e: "rayCrossingSign",
  _0x5026e2: "fromCharCode", _0x2124e9: "LanguageContext", _0x5e349a: "LANGUAGES",
};

const [input = "deob/stage2/deobfuscated.js", output = "deob/game.js"] = process.argv.slice(2);
const ast = parse(await Bun.file(input).text(), { sourceType: "script" });

let renamed = 0;
const missing = new Set(Object.keys(RENAMES));
traverse(ast, {
  Scope(path: any) {
    for (const [from, to] of Object.entries(RENAMES)) {
      if (path.scope.hasOwnBinding(from)) {
        path.scope.rename(from, to);
        missing.delete(from);
        renamed++;
      }
    }
  },
  // FSM state handlers: (payload, context) -> (bot, ctx)
  ObjectProperty(path: any) {
    const parent = path.parentPath.parentPath;
    if (!parent?.isVariableDeclarator() || parent.node.id.name !== "BOT_STATES") return;
    path.get("value.properties").forEach((p: any) => {
      const fn = p.get("value");
      if (!fn.isFunction()) return;
      const [a, b] = fn.node.params;
      if (a?.type === "Identifier") fn.scope.rename(a.name, "bot");
      if (b?.type === "Identifier") fn.scope.rename(b.name, "ctx");
    });
  },
});

// Expose internals for the headless harness (only in our local build).
const EXPOSE = ["Game", "Unit", "Player", "Bot", "Vec2", "Polygon", "StateMachine", "BOT_STATES", "DEFAULT_CONFIG", "CONFIG", "createRng"];
const iife = ast.program.body.find((s: any) => s.type === "ExpressionStatement").expression.callee.body.body;
iife.push(parse(`window.__paperio = { ${EXPOSE.join(", ")} };`).program.body[0]);

await Bun.write(output, generate(ast, { jsescOption: { minimal: true } }).code);
console.log(`renamed ${renamed} bindings -> ${output}`);
if (missing.size) console.log("not found:", [...missing].join(", "));
