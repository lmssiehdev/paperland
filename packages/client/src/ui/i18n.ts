import type { LanguageStrings } from "@paperio/core/language";

export type { LanguageStrings };

/** A selectable language: two-letter code plus its strings (merged over English). */
export interface Language {
  name: string;
  lng: LanguageStrings;
}

/** assets/languages.json: language code -> (possibly partial) strings. "en" is complete. */
export type LanguagesFile = { en: LanguageStrings } & Record<string, Partial<LanguageStrings>>;

export var LANG_RU = {
  name: "ru",
  lng: {
    yourScore: "ВАШ РЕЗУЛЬТАТ",
    bestScore: "ЛУЧШИЙ РЕЗУЛЬТАТ",
    newText: "НОВЫЙ",
    timePlayed: "ДЛИТЕЛЬНОСТЬ",
    playersKilled: "УБИТО",
    playAgain: "ИГРАТЬ СНОВА",
    menu: "МЕНЮ",
    messages: ["Не знаете как играть?", "Коснитесь экрана для управления", "Пересекайте хвосты противников и не позволяйте им пересечь свой!", "Захватите всю карту"],
    nosupport: "Игра не поддерживается на вашем браузере",
    btnPlay: "ИГРАТЬ",
    placeholderText: "Ваше имя",
    defaultPlayerName: "Игрок",
    bestTxt: "ЛУЧШИЙ",
    killText: "Убит",
    btnContinue: "ПРОДОЛЖИТЬ",
    extraLife: "ДОПОЛНИТЕЛЬНАЯ ЖИЗНЬ!",
    btnSelect: "ВЫБРАТЬ"
  }
} satisfies Language;
export const LANGUAGES: Language[] = [];
export const setLanguages = (languages: LanguagesFile): void => {
  const {
    en
  } = languages;
  Object.entries(languages).forEach(([code, strings]) => {
    LANGUAGES.push({
      name: code,
      lng: Object.assign({}, en, strings)
    });
  });
};
/** Legacy IE/old-browser navigator fields that the original code still probes. */
type LegacyNavigator = Navigator & {
  userLanguage?: string;
  browserLanguage?: string;
};
const legacyNavigator: LegacyNavigator = navigator;
const browserLanguageCode = (legacyNavigator.languages && legacyNavigator.languages.length && legacyNavigator.languages[0] || legacyNavigator.userLanguage || legacyNavigator.language || legacyNavigator.browserLanguage || "en").substr(0, 2).toLowerCase();
/** The browser's language, else English. Call after setLanguages(). */
export const getLanguage = (): Language => {
  const language = LANGUAGES.find(item => item.name === browserLanguageCode) || LANGUAGES.find(item => item.name === "en");
  if (!language) {
    throw new Error("languages.json has no \"en\" entry");
  }
  return language;
};
