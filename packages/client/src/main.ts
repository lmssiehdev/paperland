import { BOT_STATES } from "@paperio/core/ai/bot-states";
import { StateMachine } from "@paperio/core/ai/state-machine";
import { createApi } from "./api";
import type { PaperioApi } from "./api";
import { DEFAULT_CONFIG } from "@paperio/core/config";
import type { Config } from "@paperio/core/config";
import { createRng } from "@paperio/core/engine/math";
import { Polygon } from "@paperio/core/engine/polygon";
import { Vec2 } from "@paperio/core/engine/vec2";
import { AchievementStore } from "@paperio/core/game/achievements";
import { Game } from "@paperio/core/game/game";
import { BOT_NAMES, NamePool } from "@paperio/core/game/names";
import { ClassicScoreScheme, SchemesManager, TeamScoreScheme } from "@paperio/core/game/scoring";
import { Bot, Player, Unit } from "@paperio/core/game/units";
import { setPlatform } from "@paperio/core/platform";
import Cookies from "js-cookie";
import { createElement, render } from "preact";
import { ColoredPool, SkinManager } from "@paperio/core/skins/skin";
import { ClassicSkinPool, createColorAvatar } from "./skins/image-skins";
import { App } from "./ui/components";
import { I18nProvider, buildLanguages, pickLanguage } from "./ui/i18n";
import type { LanguagesFile } from "./ui/i18n";
import type { SkinConfig } from "./skins/image-skins";

declare global {
  interface Window {
    /** Game API used by the UI and the host page. */
    paperio2api?: PaperioApi | null;
    /** Debug handle: core classes and configs, for poking at the game from the console. */
    __paperio?: Record<string, unknown>;
  }
}

/** Build of the original game this port is based on. */
export const VERSION = "A6 2020-10-14T10:51:36.392Z";
// Browser implementations of core's platform services (core defaults are headless no-ops).
setPlatform({
  createPath: () => new Path2D(),
  loadImage: (url, done) => {
    const image = new Image();
    image.onload = () => done(image);
    image.onerror = () => done(null);
    image.src = url;
  },
  storage: Cookies
});
/** Live game config: a copy of DEFAULT_CONFIG (the original's overrides all equalled the defaults). */
const CONFIG: Config = { ...DEFAULT_CONFIG };
const languagesRequest = fetch("assets/languages.json").then((result): Promise<LanguagesFile> => result.json());
const skinsRequest = fetch("assets/skins/skins.json").then((result): Promise<SkinConfig[]> => result.json());
Promise.all([languagesRequest, skinsRequest]).then(([languagesFile, skinsList]) => {
  const languages = buildLanguages(languagesFile);
  const initialLanguage = pickLanguage(languages);
  const createSkinManager = (config: Config, view: HTMLCanvasElement): SkinManager => {
    let coloredPool = new ColoredPool(config, createColorAvatar);
    let classicSkinPool = new ClassicSkinPool(config, view, "assets/skins/", skinsList);
    const skinManager = new SkinManager(coloredPool, classicSkinPool, 1);
    return skinManager;
  };
  const schemesManager = new SchemesManager(ClassicScoreScheme, TeamScoreScheme);
  const achievementStore = new AchievementStore([]);
  achievementStore.load();
  const api = createApi(CONFIG, initialLanguage, createSkinManager, new NamePool(BOT_NAMES, Math.random()), schemesManager, achievementStore);
  window.paperio2api = api;
  const root = document.getElementById("game");
  if (!root) {
    throw new Error("index.html has no #game element");
  }
  render(createElement(I18nProvider, {
    languages: languages,
    initial: initialLanguage,
    // The game keeps plain strings (core never sees the UI context): forward every switch.
    onChange: language => api?.setLanguage(language.lng)
  }, createElement(App, {
    api: api,
    storage: Cookies,
    skins: skinsList
  })), root);
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
