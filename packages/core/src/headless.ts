import { DEFAULT_CONFIG } from "./config";
import type { Config } from "./config";
import { createGame } from "./create-game";
import { AchievementStore } from "./game/achievements";
import type { Game, GameConfig } from "./game/game";
import { BOT_NAMES, NamePool } from "./game/names";
import { ClassicScoreScheme, SchemesManager, TeamScoreScheme } from "./game/scoring";
import type { LanguageStrings } from "./language";
import type { ModeId } from "./modes/index";
import { Asset, AssetPool, ColoredPool, SkinManager } from "./skins/skin";

export interface HeadlessGameOptions {
  /** Strings for the default player name and kill labels (an entry of assets/languages.json). */
  language: LanguageStrings;
  /**
   * Names of the image skins (assets/skins/skins.json, in file order). Bots draw skins from colored +
   * these names with the skin manager's own RNG, so the same list as the browser keeps the RNG in step.
   */
  skinNames: string[];
  config?: Config;
  mode?: ModeId;
  /** Game RNG seed; defaults to Math.random(), drawn where the browser session draws it. */
  seed?: number;
  /** Seed of the bot name pool (the client draws it from Math.random() once at page load). */
  nameSeed?: number;
}

/** Skin manager with image skins by name only; the client's ClassicSkinPool registers the same names (plus artwork). */
const headlessSkinManager = (skinNames: string[]) => (config: GameConfig) => {
  const classicSkins = new AssetPool("classic");
  classicSkins.config = config;
  for (const name of skinNames) {
    const asset = new Asset(name);
    asset.pool = classicSkins;
    classicSkins.assets.push(asset);
  }
  return new SkinManager(new ColoredPool(config), classicSkins, 1);
};

/**
 * A Game with no view, input, renderer or images, built by the same createGame() as the browser session.
 * Used by tests and server rooms. Step it with game.update(dt); loop() is for the browser.
 */
export function createHeadlessGame(options: HeadlessGameOptions): Game {
  return createGame({
    config: options.config ?? { ...DEFAULT_CONFIG },
    mode: options.mode ?? "classic",
    language: options.language,
    createSkinManager: headlessSkinManager(options.skinNames),
    nameManager: new NamePool(BOT_NAMES.slice(), options.nameSeed ?? 1),
    schemesManager: new SchemesManager(ClassicScoreScheme, TeamScoreScheme),
    achievements: new AchievementStore([]),
    seed: options.seed
  });
}
