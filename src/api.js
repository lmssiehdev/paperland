import { Border } from "./engine/border.js";
import { now } from "./engine/math.js";
import { SpatialGrid } from "./engine/spatial-grid.js";
import { Vec2 } from "./engine/vec2.js";
import { Game } from "./game/game.js";
import { Controller, KeyboardModeSwitch } from "./input/controller.js";
import { renderGame } from "./render/game-renderer.js";
import { LANG_RU } from "./ui/i18n.js";

export const createApi = (config, _0x51cd14, _0x4e068e, nameManager, schemesManager, achievementsProfile) => {
  let result = {};
  if (Path2D) {
    result.create = view => {
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
    let _0x1e248a;
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
    result.prepare = _0x53bf70 => {
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
    result.start = (name, skin, _0x441c23, _0x190f9e, extraLife) => {
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
