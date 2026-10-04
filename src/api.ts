import { Border } from "./engine/border";
import { now } from "./engine/math";
import { SpatialGrid } from "./engine/spatial-grid";
import { Vec2 } from "./engine/vec2";
import { AchievementStore } from "./game/achievements";
import { Game } from "./game/game";
import type { GameConfig, GameResult } from "./game/game";
import { SchemesManager } from "./game/scoring";
import { NamePool } from "./game/names";
import { Controller, KeyboardModeSwitch } from "./input/controller";
import { renderGame } from "./render/game-renderer";
import { SkinManager } from "./skins/skin";
import { LANG_RU } from "./ui/i18n";
import { createMode } from "./modes";
import type { ModeId } from "./modes";
import type { Language } from "./ui/i18n";

/** Builds the SkinManager for a new game (see main.ts). */
export type SkinManagerFactory = (config: GameConfig, view: HTMLCanvasElement) => SkinManager;

/** Public game API exposed as window.paperio2api and consumed by the UI. */
export interface PaperioApi {
  /** Current game; set by create(). */
  game: Game;
  /** True until the warm-up simulation has finished. */
  preparing: boolean;
  /** Creates a new Game in `mode` (default classic) rendering into `view`. */
  create(view: HTMLCanvasElement, mode?: ModeId): void;
  /** Runs the warm-up simulation in the background, then starts the loop and calls `onReady`. */
  prepare(onReady?: () => void): void;
  /**
   * Spawns the player and starts the game.
   * @param skinName asset name of the chosen skin ("" for a random colored skin)
   * @param best previous best score
   * @param extraLife fraction of the arena to start with (continue after death); falsy for a normal start
   * @param mode game mode; if it differs from the current game's, a fresh game is created first
   */
  start(name: string, skinName: string, best: number, onGameOver?: (result: GameResult) => void, extraLife?: number, mode?: ModeId): void;
  /** Installed by the UI (App): same as pressing Play. Used by the headless scripts. */
  startGame?: () => void;
}

export const createApi = (config: GameConfig, language: Language, createSkinManager: SkinManagerFactory, nameManager: NamePool, schemesManager: SchemesManager, achievementsProfile: AchievementStore): PaperioApi | null => {
  if (!Path2D) {
    return null;
  }
  // Filled in below; `game` is set by create(), which the UI calls before anything else.
  const result = {} as PaperioApi;
  // Remembered so start() can recreate the game in another mode.
  let currentView: HTMLCanvasElement;
  result.create = (view: HTMLCanvasElement, mode: ModeId = "classic"): void => {
    currentView = view;
    const gameMode = createMode(mode);
    schemesManager.select(gameMode.scoreScheme);
    const gameConfig = { ...config, ...gameMode.config };
    const {
      arenaSize,
      quadSize,
      borderPoints
    } = gameConfig;
    const spatialGrid = new SpatialGrid(arenaSize, arenaSize, quadSize);
    Vec2.grid = spatialGrid;
    const vec2 = new Vec2(arenaSize / 2, arenaSize / 2);
    const baseRadius = Math.min(vec2.x, vec2.y) * 0.95;
    const border = Border.circular(vec2, borderPoints, baseRadius);
    const skinManager = createSkinManager(gameConfig, view);
    const game = new Game(gameConfig, view, spatialGrid, border, skinManager, null, nameManager, new Controller(view, new KeyboardModeSwitch()), language.lng, schemesManager, achievementsProfile, Math.random());
    game.renderer = renderGame;
    game.mode = gameMode;
    result.game = game;
    game.controller.addSet([16, 18, 81, 66, 77], () => {
      game.debug = !game.debug;
    });
    game.controller.addButton(71, () => {
      game.debugGraph = !game.debugGraph;
    });
  };
  result.preparing = true;
  let preparedCycles = 0;
  let prepareInterval: number;
  const runPrepareBatch = () => {
    const {
      prepareMult
    } = config;
    let {
      prepareBatchCount
    } = config;
    while (prepareBatchCount--) {
      result.game.update(1000 / 60 * prepareMult + Math.random());
      preparedCycles++;
    }
  };
  result.prepare = (onReady?: () => void): void => {
    const {
      game: game
    } = result;
    prepareInterval = setInterval(() => {
      if (nameManager.available()) {
        runPrepareBatch();
        if (preparedCycles > config.prepareCounter) {
          clearInterval(prepareInterval);
          result.preparing = false;
          game.visible = true;
          if (!game.looped) {
            game.loop();
          }
          if (onReady) {
            onReady();
          }
        }
      }
    }, 0);
  };
  result.start = (name: string, skinName: string, best: number, onGameOver?: (result: GameResult) => void, extraLife?: number, mode?: ModeId): void => {
    if (mode && mode !== result.game.mode.id) {
      clearInterval(prepareInterval);
      result.game.stop();
      result.game.controller.dispose();
      result.create(currentView, mode);
      preparedCycles = 0;
      result.preparing = true;
    }
    const game = result.game;
    if (result.preparing) {
      clearInterval(prepareInterval);
      const time = now();
      while (preparedCycles < config.prepareCounter) {
        runPrepareBatch();
        if (now() - time > config.maxPreparingTime) {
          break;
        }
      }
    }
    game.best = best;
    // spawnPlayer treats a falsy extraLife as a normal start.
    game.spawnPlayer(name, skinName, extraLife ?? 0);
    if (extraLife) {
      // spawnPlayer always sets game.player via addPlayer.
      game.player!.addLabel({
        text: LANG_RU.lng.extraLife,
        time: 5000,
        color: "#7fed4c"
      });
    }
    if (onGameOver) {
      game.gameOverCallback = onGameOver;
    }
    result.preparing = false;
    game.visible = true;
    if (!game.looped) {
      game.loop();
    }
    window.focus();
  };
  return result;
};
