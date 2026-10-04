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
import type { Language } from "./ui/i18n";

/** Builds the SkinManager for a new game (see main.ts). */
export type SkinManagerFactory = (config: GameConfig, view: HTMLCanvasElement) => SkinManager;

/** Public game API exposed as window.paperio2api and consumed by the UI. */
export interface PaperioApi {
  /** Current game; set by create(). */
  game: Game;
  /** True until the warm-up simulation has finished. */
  preparing: boolean;
  /** Creates a new Game rendering into `view`. */
  create(view: HTMLCanvasElement): void;
  /** Runs the warm-up simulation in the background, then starts the loop and calls `onReady`. */
  prepare(onReady?: () => void): void;
  /**
   * Spawns the player and starts the game.
   * @param skinName asset name of the chosen skin ("" for a random colored skin)
   * @param best previous best score
   * @param extraLife fraction of the arena to start with (continue after death); falsy for a normal start
   */
  start(name: string, skinName: string, best: number, onGameOver?: (result: GameResult) => void, extraLife?: number): void;
  /** Installed by the UI (App); called by the host page once the preroll ad ends. */
  startGame?: () => void;
}

export const createApi = (config: GameConfig, language: Language, createSkinManager: SkinManagerFactory, nameManager: NamePool, schemesManager: SchemesManager, achievementsProfile: AchievementStore): PaperioApi | null => {
  let result = {} as PaperioApi;
  if (Path2D) {
    result.create = (view: HTMLCanvasElement): void => {
      const {
        arenaSize,
        quadSize,
        borderPoints
      } = config;
      const spatialGrid = new SpatialGrid(arenaSize, arenaSize, quadSize);
      Vec2.grid = spatialGrid;
      const vec2 = new Vec2(arenaSize / 2, arenaSize / 2);
      const baseRadius = Math.min(vec2.x, vec2.y) * 0.95;
      const border = Border.circular(vec2, borderPoints, baseRadius);
      const skinManager = createSkinManager(config, view);
      const game = new Game(config, view, spatialGrid, border, skinManager, null, nameManager, new Controller(view, new KeyboardModeSwitch()), language.lng, schemesManager, achievementsProfile, Math.random());
      // TODO(types): SkinManager does not declare `game` (set here, never read in this build)
      (skinManager as SkinManager & { game?: Game }).game = game;
      game.renderer = renderGame;
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
    result.start = (name: string, skinName: string, best: number, onGameOver?: (result: GameResult) => void, extraLife?: number): void => {
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
      game.spawnPlayer(name, skinName, extraLife);
      if (extraLife) {
        game.player.addLabel({
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
  } else {
    result = null;
  }
  return result;
};
