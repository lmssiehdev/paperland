import type { Config } from "./config";
import { Border } from "./engine/border";
import { SpatialGrid } from "./engine/spatial-grid";
import { Vec2 } from "./engine/vec2";
import type { AchievementStore } from "./game/achievements";
import { Game } from "./game/game";
import type { GameConfig, GameHooks } from "./game/game";
import type { NamePool } from "./game/names";
import type { SchemesManager } from "./game/scoring";
import type { ControllerHandle, ViewHandle } from "./handles";
import type { LanguageStrings } from "./language";
import { createMode } from "./modes/index";
import type { ModeId } from "./modes/index";
import type { SkinManager } from "./skins/skin";

export interface CreateGameOptions {
  /** Base config; the mode's overrides are applied on top. */
  config: Config;
  mode: ModeId;
  language: LanguageStrings;
  /** Builds the skin manager for the final (mode-adjusted) config. */
  createSkinManager: (config: GameConfig) => SkinManager;
  nameManager: NamePool;
  /** Every score scheme registered; the mode's scheme gets selected. */
  schemesManager: SchemesManager;
  achievements: AchievementStore;
  /** Game RNG seed. Default: Math.random(), drawn after everything above is built (as the original did). */
  seed?: number;
  /** Browser only: canvas, input device and render/input hooks. Headless games have none. */
  view?: ViewHandle | null;
  controller?: ControllerHandle;
  hooks?: GameHooks;
}

/**
 * The one way to build a Game: mode, score scheme, spatial grid, circular border, skins, seed, hooks.
 * Used by the browser session (client/src/session.ts) and by createHeadlessGame (tests, server rooms).
 */
export function createGame(options: CreateGameOptions): Game {
  const gameMode = createMode(options.mode);
  options.schemesManager.select(gameMode.scoreScheme);
  const gameConfig = { ...options.config, ...gameMode.config };
  const { arenaSize, quadSize, borderPoints } = gameConfig;
  const spatialGrid = new SpatialGrid(arenaSize, arenaSize, quadSize);
  Vec2.grid = spatialGrid;
  const center = new Vec2(arenaSize / 2, arenaSize / 2);
  const baseRadius = Math.min(center.x, center.y) * 0.95;
  const border = Border.circular(center, borderPoints, baseRadius);
  const skinManager = options.createSkinManager(gameConfig);
  const game = new Game(
    gameConfig,
    options.view ?? null,
    spatialGrid,
    border,
    skinManager,
    null,
    options.nameManager,
    options.controller ?? null,
    options.language,
    options.schemesManager,
    options.achievements,
    options.seed ?? Math.random()
  );
  if (options.hooks) {
    Object.assign(game, options.hooks);
  }
  game.mode = gameMode;
  return game;
}
