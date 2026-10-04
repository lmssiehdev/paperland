import type { LanguageStrings } from "@paperio/core/language";

/** Static data a headless game needs, read from the captured site assets (original/assets). */
export interface GameData {
  /** Image skin names in skins.json order (the client registers the same list). */
  skinNames: string[];
  /** English strings: the server's default player name and kill labels. */
  language: LanguageStrings;
}

const assets = new URL("../../../original/assets/", import.meta.url).pathname;

export async function loadGameData(): Promise<GameData> {
  const skins = (await Bun.file(assets + "skins/skins.json").json()) as { name: string }[];
  const languages = (await Bun.file(assets + "languages.json").json()) as { en: LanguageStrings };
  return { skinNames: skins.map(skin => skin.name), language: languages.en };
}
