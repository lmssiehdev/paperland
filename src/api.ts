import { Border } from "./engine/border";
import { now } from "./engine/math";
import { SpatialGrid } from "./engine/spatial-grid";
import { Vec2 } from "./engine/vec2";
import { AchievementStore } from "./game/achievements";
import { Game } from "./game/game";
import { SchemesManager } from "./game/scoring";
import { NamePool } from "./game/names";
import { Controller, KeyboardModeSwitch } from "./input/controller";
import { renderGame } from "./render/game-renderer";
import { SkinManager } from "./skins/skin";
import { LANG_RU } from "./ui/i18n";

export const createApi = (config: { arenaSize: number; quadSize: number; borderPoints: number; prepareMult: number; prepareBatchCount: number; maxPreparingTime: number; baseRadius: number; baseCount: number; minScale: number; maxScale: number; observerScale: number; trackWidth: number; unitSpeed: number; spawnTimeout: number; prepareCounter: number; prepareAcceleration: number; baseHeight: number; botsCount: number; botLevel: number; startBotLevel: number; noPlayerBotLevel: number; nearPlayerBotSpawnCount: number; followKiller: boolean; selfKillDelay: number; enemyKillDelay: number; arenaColor: string; borderColor: string; backgroundTopColor: string; backgroundBottomColor: string; platesStrokeWidth: number; botAggroMin: number; botAggroMax: number; botDefMin: number; botDefMax: number; botGreedMin: number; botGreedMax: number; botSafetyMin: number; botSafetyMax: number; botAttackTrackLength: number; font: string; } & { followKiller: boolean; selfKillDelay: number; enemyKillDelay: number; }, _0x51cd14: { lng: any; }, _0x4e068e: { (config: any, view: any): SkinManager; (arg0: any, arg1: any): any; }, nameManager: NamePool, schemesManager: SchemesManager, achievementsProfile: AchievementStore) => {
  let result = {};
  if (Path2D) {
    result.create = (view: { addEventListener: (arg0: string, arg1: { (event: any): any; (event: any): void; (event: any): void; (event: any): void; (_0x5d0f61: any): void; (_0x2c9dbd: any): void; (event: any): void; (event: any): void; (event: any): void; (event: any): void; }, arg2: boolean) => void; removeEventListener: (arg0: string, arg1: { (event: any): any; (event: any): void; (event: any): void; (event: any): void; (_0x5d0f61: any): void; (_0x2c9dbd: any): void; }, arg2: boolean) => void; }): any => {
      const {
        arenaSize,
        quadSize,
        borderPoints
      } = config;
      const spatialGrid = new SpatialGrid(arenaSize, arenaSize, quadSize);
      Vec2.space = spatialGrid;
      const vec2 = new Vec2(arenaSize / 2, arenaSize / 2);
      const baseRadius = Math.min(vec2.x, vec2.y) * 0.95;
      const border = Border.circular(vec2, borderPoints, baseRadius);
      const skinManager = _0x4e068e(config, view);
      const game = new Game(config, view, spatialGrid, border, skinManager, null, nameManager, new Controller(view, new KeyboardModeSwitch()), _0x51cd14.lng, schemesManager, achievementsProfile, Math.random());
      skinManager.game = game;
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
    let _0x3ad283 = 0;
    let _0x1e248a: number;
    const _0x3b8a97 = () => {
      const {
        prepareMult
      } = config;
      let {
        prepareBatchCount
      } = config;
      while (prepareBatchCount--) {
        result.game.update(1000 / 60 * prepareMult + Math.random());
        _0x3ad283++;
      }
    };
    result.prepare = (_0x53bf70: () => void): () => void => {
      const {
        game: game
      } = result;
      _0x1e248a = setInterval(() => {
        if (nameManager.aviable()) {
          _0x3b8a97();
          if (_0x3ad283 > config.prepareCounter) {
            clearInterval(_0x1e248a);
            result.preparing = false;
            game.visible = true;
            if (!game.looped) {
              game.loop();
            }
            if (_0x53bf70) {
              _0x53bf70();
            }
          }
        }
      }, 0);
    };
    result.start = (name: string, skin: Skin, _0x441c23: any, _0x190f9e: any, extraLife: any) => {
      const game = result.game;
      if (result.preparing) {
        clearInterval(_0x1e248a);
        const time = now();
        while (_0x3ad283 < config.prepareCounter) {
          _0x3b8a97();
          if (now() - time > config.maxPreparingTime) {
            break;
          }
        }
      }
      game.best = _0x441c23;
      game.spawnPlayer(name, skin, extraLife);
      if (extraLife) {
        game.player.addLabel({
          text: LANG_RU.lng.extraLife,
          time: 5000,
          color: "#7fed4c"
        });
      }
      if (_0x190f9e) {
        game.gameOverCallback = _0x190f9e;
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
