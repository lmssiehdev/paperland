import { BOT_STATES } from "./ai/bot-states.js";
import { StateMachine } from "./ai/state-machine.js";
import { createApi } from "./api.js";
import { DEFAULT_CONFIG } from "./config.js";
import { createRng } from "./engine/math.js";
import { Polygon } from "./engine/polygon.js";
import { Vec2 } from "./engine/vec2.js";
import { AchievementStore } from "./game/achievements.js";
import { Game } from "./game/game.js";
import { BOT_NAMES, NamePool } from "./game/names.js";
import { ClassicScoreScheme, SchemesManager } from "./game/scoring.js";
import { Bot, Player, Unit } from "./game/units.js";
import Cookies from "js-cookie";
import { createElement, render } from "preact";
import { ClassicSkinPool, ColoredPool, SkinManager } from "./skins/skin.js";
import { App } from "./ui/components.js";
import { getLanguage, setLanguages } from "./ui/i18n.js";
import "./engine/math.js";
import "./engine/segment.js";
import "./engine/spatial-grid.js";
import "./engine/vec2.js";
import "./game/constants.js";
import "./engine/polyline.js";
import "./engine/polygon.js";
import "./engine/color.js";
import "./engine/load-image.js";
import "./engine/border.js";
import "./game/base.js";
import "./game/track.js";
import "./ai/state-machine.js";
import "./ai/bot-states.js";
import "./game/particles.js";
import "./game/scoring.js";
import "./game/achievements.js";
import "./game/city.js";
import "./game/units.js";
import "./game/floating-label.js";
import "./game/domain-lock.js";
import "./game/names.js";
import "./game/game.js";
import "./input/controller.js";
import "./skins/display.js";
import "./render/game-renderer.js";
import "./render/debug-overlay.js";
import "./ui/i18n.js";
import "./api.js";
import "./ui/components.js";
import "./config.js";
import "./skins/skin.js";

var _0xb5f7a4 = Object.assign;
console.log("Version: A6 2020-10-14T10:51:36.392Z");
const CONFIG = _0xb5f7a4(_0xb5f7a4({}, DEFAULT_CONFIG), {
  followKiller: true,
  selfKillDelay: 1000,
  enemyKillDelay: 2000
});
const _0x5d6a09 = fetch("assets/languages.json").then(result => result.json());
const _0x1632c3 = fetch("assets/skins/skins.json").then(result => result.json());
Promise.all([_0x5d6a09, _0x1632c3]).then(([result, result2]) => {
  setLanguages(result);
  const _0x57ada2 = (config, view) => {
    let coloredPool = new ColoredPool(config);
    let classicSkinPool = new ClassicSkinPool(config, view, "assets/skins/", result2);
    const skinManager = new SkinManager(coloredPool, classicSkinPool, 1);
    return skinManager;
  };
  const schemesManager = new SchemesManager(ClassicScoreScheme);
  const achievementStore = new AchievementStore([]);
  achievementStore.load();
  const api = createApi(CONFIG, getLanguage(), _0x57ada2, new NamePool(BOT_NAMES, Math.random()), schemesManager, achievementStore);
  window.paperio2api = api;
  render(createElement(App, {
    api: api,
    storage: Cookies,
    skins: result2
  }), document.getElementById("game"));
});
window.__paperio = {
  Game,
  Unit,
  Player,
  Bot,
  Vec2,
  Polygon,
  StateMachine,
  BOT_STATES,
  DEFAULT_CONFIG,
  CONFIG,
  createRng
};
