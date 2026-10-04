import { BOT_STATES } from "./ai/bot-states";
import { StateMachine } from "./ai/state-machine";
import { createApi } from "./api";
import type { PaperioApi } from "./api";
import { DEFAULT_CONFIG } from "./config";
import type { Config } from "./config";
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
import type { LanguagesFile } from "./ui/i18n";
import type { SkinConfig } from "./skins/skin";
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

declare global {
  interface Window {
    /** Game API used by the UI and the host page. */
    paperio2api?: PaperioApi | null;
    /** Debug handle: core classes and configs, for poking at the game from the console. */
    __paperio?: Record<string, unknown>;
  }
}

var objectAssign = Object.assign;
console.log("Version: A6 2020-10-14T10:51:36.392Z");
const CONFIG: Config = objectAssign(objectAssign({}, DEFAULT_CONFIG), {
  followKiller: true,
  selfKillDelay: 1000,
  enemyKillDelay: 2000
});
const languagesRequest = fetch("assets/languages.json").then((result): Promise<LanguagesFile> => result.json());
const skinsRequest = fetch("assets/skins/skins.json").then((result): Promise<SkinConfig[]> => result.json());
Promise.all([languagesRequest, skinsRequest]).then(([languages, skinsList]) => {
  setLanguages(languages);
  const createSkinManager = (config: Config, view: HTMLCanvasElement): SkinManager => {
    let coloredPool = new ColoredPool(config);
    let classicSkinPool = new ClassicSkinPool(config, view, "assets/skins/", skinsList);
    const skinManager = new SkinManager(coloredPool, classicSkinPool, 1);
    return skinManager;
  };
  const schemesManager = new SchemesManager(ClassicScoreScheme);
  const achievementStore = new AchievementStore([]);
  achievementStore.load();
  const api = createApi(CONFIG, getLanguage(), createSkinManager, new NamePool(BOT_NAMES, Math.random()), schemesManager, achievementStore);
  window.paperio2api = api;
  render(createElement(App, {
    api: api,
    storage: Cookies,
    skins: skinsList
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
