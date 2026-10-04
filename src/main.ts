import { BOT_STATES } from "./ai/bot-states";
import { StateMachine } from "./ai/state-machine";
import { createApi } from "./api";
import { DEFAULT_CONFIG } from "./config";
import { createRng } from "./engine/math";
import { Polygon } from "./engine/polygon";
import { Vec2 } from "./engine/vec2";
import { AchievementStore } from "./game/achievements";
import { Game } from "./game/game";
import { BOT_NAMES, NamePool } from "./game/names";
import { ClassicScoreScheme, SchemesManager } from "./game/scoring";
import { Bot, Player, Unit } from "./game/units";
import Cookies from "js-cookie";
import { createElement, render } from "preact";
import { ClassicSkinPool, ColoredPool, SkinManager } from "./skins/skin";
import { App } from "./ui/components";
import { getLanguage, setLanguages } from "./ui/i18n";
import "./engine/math";
import "./engine/segment";
import "./engine/spatial-grid";
import "./engine/vec2";
import "./game/constants";
import "./engine/polyline";
import "./engine/polygon";
import "./engine/color";
import "./engine/load-image";
import "./engine/border";
import "./game/base";
import "./game/track";
import "./ai/state-machine";
import "./ai/bot-states";
import "./game/particles";
import "./game/scoring";
import "./game/achievements";
import "./game/city";
import "./game/units";
import "./game/floating-label";
import "./game/domain-lock";
import "./game/names";
import "./game/game";
import "./input/controller";
import "./skins/display";
import "./render/game-renderer";
import "./render/debug-overlay";
import "./ui/i18n";
import "./api";
import "./ui/components";
import "./config";
import "./skins/skin";

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
  const _0x57ada2 = (config: any, view: any) => {
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
