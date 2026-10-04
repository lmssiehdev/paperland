import { DEFAULT_CONFIG } from "./config";
import type { Config } from "./config";
import { Border } from "./engine/border";
import { SpatialGrid } from "./engine/spatial-grid";
import { Vec2 } from "./engine/vec2";
import { AchievementStore } from "./game/achievements";
import { Game } from "./game/game";
import { BOT_NAMES, NamePool } from "./game/names";
import { ClassicScoreScheme, SchemesManager, TeamScoreScheme } from "./game/scoring";
import type { LanguageStrings } from "./language";
import { createMode } from "./modes/index";
import type { ModeId } from "./modes/index";
import { Asset, AssetPool, ColoredPool, SkinManager } from "./skins/skin";

export interface HeadlessGameOptions {
  /** Strings for the default player name and kill labels (an entry of assets/languages.json). */
  language: LanguageStrings;
  /**
   * Names of the image skins (assets/skins/skins.json, in file order). Bots draw skins from colored +
   * these names with the skin manager's own RNG, so the same list as the browser keeps the RNG in step.
   */
  skinNames: string[];
  config?: Config;
  mode?: ModeId;
  /** Game RNG seed; defaults to Math.random(), drawn at the same point as the client's api.create(). */
  seed?: number;
  /** Seed of the bot name pool (the client draws it from Math.random() once at page load). */
  nameSeed?: number;
}

/**
 * Builds a Game with no view, input, renderer or images: the same setup as the client's
 * api.create() (packages/client/src/api.ts), minus the browser parts. Used by tests and server rooms.
 * Step it with game.update(dt); loop() is for the browser.
 */
export function createHeadlessGame(options: HeadlessGameOptions): Game {
  const config = options.config ?? { ...DEFAULT_CONFIG };
  const gameMode = createMode(options.mode ?? "classic");
  // As main.ts + api.create(): every scheme registered, the mode's selected.
  const schemesManager = new SchemesManager(ClassicScoreScheme, TeamScoreScheme);
  schemesManager.select(gameMode.scoreScheme);
  const gameConfig = { ...config, ...gameMode.config };
  const {
    arenaSize,
    quadSize,
    borderPoints
  } = gameConfig;
  const spatialGrid = new SpatialGrid(arenaSize, arenaSize, quadSize);
  Vec2.grid = spatialGrid;
  const center = new Vec2(arenaSize / 2, arenaSize / 2);
  const baseRadius = Math.min(center.x, center.y) * 0.95;
  const border = Border.circular(center, borderPoints, baseRadius);
  // Image skins by name only: the client's ClassicSkinPool registers the same names (plus artwork).
  const classicSkins = new AssetPool("classic");
  classicSkins.config = gameConfig;
  for (const name of options.skinNames) {
    const asset = new Asset(name);
    asset.pool = classicSkins;
    classicSkins.assets.push(asset);
  }
  const skinManager = new SkinManager(new ColoredPool(gameConfig), classicSkins, 1);
  const nameManager = new NamePool(BOT_NAMES.slice(), options.nameSeed ?? 1);
  const achievements = new AchievementStore([]);
  // No local input device: readInput() is a no-op without game.input.
  const noController = {};
  const game = new Game(gameConfig, null, spatialGrid, border, skinManager, null, nameManager, noController, options.language, schemesManager, achievements, options.seed ?? Math.random());
  game.mode = gameMode;
  return game;
}
