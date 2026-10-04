import { BOT_STATES } from "@paperio/core/ai/bot-states";
import { StateMachine } from "@paperio/core/ai/state-machine";
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
import type { ModeId } from "@paperio/core/modes/index";
import { setPlatform } from "@paperio/core/platform";
import Cookies from "js-cookie";
import { createElement, render } from "preact";
import { ColoredPool, SkinManager } from "@paperio/core/skins/skin";
import { GameSession } from "./session";
import { ClassicSkinPool, createColorAvatar } from "./skins/image-skins";
import type { SkinConfig } from "./skins/image-skins";
import { App } from "./ui/components";
import { I18nProvider, buildLanguages, pickLanguage } from "./ui/i18n";
import type { LanguagesFile } from "./ui/i18n";
import { GameSessionContext } from "./ui/session-context";

/** Dev-build console/e2e handles (absent from production bundles). */
const debugHandle = () => ({
  Game,
  Unit,
  Player,
  Bot,
  Vec2,
  Polygon,
  StateMachine,
  BOT_STATES,
  DEFAULT_CONFIG,
  createRng
});
declare global {
  interface Window {
    /** Dev builds: the game session (golden/parity/smoke/stress drive the game through it). */
    paperio2api?: GameSession;
    /** Dev builds: core classes and config, for poking at the game from the console. */
    __paperio?: ReturnType<typeof debugHandle>;
  }
}

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
// Dev-only URL overrides: ?seed=<number> fixes every game's seed, ?mode=<id> preselects a mode.
const params = __DEV__ ? new URLSearchParams(location.search) : null;
const seedParam = params?.get("seed");
const modeParam = params?.get("mode");
const languagesRequest = fetch("assets/languages.json").then((result): Promise<LanguagesFile> => result.json());
const skinsRequest = fetch("assets/skins/skins.json").then((result): Promise<SkinConfig[]> => result.json());
Promise.all([languagesRequest, skinsRequest]).then(([languagesFile, skinsList]) => {
  const languages = buildLanguages(languagesFile);
  const initialLanguage = pickLanguage(languages);
  const createSkinManager = (config: Config, view: HTMLCanvasElement): SkinManager => {
    const coloredPool = new ColoredPool(config, createColorAvatar);
    const classicSkinPool = new ClassicSkinPool(config, view, "assets/skins/", skinsList);
    return new SkinManager(coloredPool, classicSkinPool, 1);
  };
  const achievements = new AchievementStore([]);
  achievements.load();
  const session = new GameSession({
    config: DEFAULT_CONFIG,
    language: initialLanguage.lng,
    createSkinManager,
    nameManager: new NamePool(BOT_NAMES, Math.random()),
    schemesManager: new SchemesManager(ClassicScoreScheme, TeamScoreScheme),
    achievements,
    seed: seedParam ? Number(seedParam) : undefined
  });
  if (__DEV__) {
    window.paperio2api = session;
    window.__paperio = debugHandle();
  }
  const root = document.getElementById("game");
  if (!root) {
    throw new Error("index.html has no #game element");
  }
  render(
    createElement(
      GameSessionContext.Provider,
      { value: session },
      createElement(
        I18nProvider,
        {
          languages,
          initial: initialLanguage,
          // The game keeps plain strings (core never sees the UI context): forward every switch.
          onChange: language => session.setLanguage(language.lng)
        },
        createElement(App, {
          storage: Cookies,
          skins: skinsList,
          initialMode: modeParam === "teams" || modeParam === "classic" ? (modeParam satisfies ModeId) : undefined
        })
      )
    ),
    root
  );
});
