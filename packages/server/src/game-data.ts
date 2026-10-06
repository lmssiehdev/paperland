import type { LanguageStrings } from "@paperio/core/language";
// Imported, not read at runtime: the bundler inlines both, so the compiled server binary needs no asset files.
import languages from "../../../original/assets/languages.json";
import skins from "../../../original/assets/skins/skins.json";

/** Static data a headless game needs, from the captured site assets (original/assets). */
export interface GameData {
  /** Image skin names in skins.json order (the client registers the same list). */
  skinNames: string[];
  /** English strings: the server's default player name and kill labels. */
  language: LanguageStrings;
}

export const GAME_DATA: GameData = {
  skinNames: skins.map(skin => skin.name),
  // SAFETY: captured asset file; "en" is complete (see LanguagesFile).
  language: languages.en as LanguageStrings
};
