import { createContext } from "preact";
import type { ComponentChildren } from "preact";
import { useContext, useState } from "preact/hooks";
import type { LanguageStrings } from "@paperio/core/language";

export type { LanguageStrings };

/** A selectable language: two-letter code plus its strings (merged over English). */
export interface Language {
  name: string;
  lng: LanguageStrings;
}

/** assets/languages.json: language code -> (possibly partial) strings. "en" is complete. */
export type LanguagesFile = { en: LanguageStrings } & Record<string, Partial<LanguageStrings>>;

/** The selectable languages, in file order, each merged over English. Built once at startup (main.ts). */
export const buildLanguages = (languages: LanguagesFile): Language[] => {
  const { en } = languages;
  return Object.entries(languages).map(([code, strings]) => ({
    name: code,
    lng: Object.assign({}, en, strings)
  }));
};

/** Legacy IE/old-browser navigator fields that the original code still probes. */
type LegacyNavigator = Navigator & {
  userLanguage?: string;
  browserLanguage?: string;
};
/** Two-letter code of the browser's language. */
export const browserLanguageCode = (): string => {
  const legacyNavigator: LegacyNavigator = navigator;
  return (
    (legacyNavigator.languages && legacyNavigator.languages.length && legacyNavigator.languages[0]) ||
    legacyNavigator.userLanguage ||
    legacyNavigator.language ||
    legacyNavigator.browserLanguage ||
    "en"
  )
    .substr(0, 2)
    .toLowerCase();
};

/** The language with `code` (default: the browser's), else English. */
export const pickLanguage = (languages: Language[], code = browserLanguageCode()): Language => {
  const language = languages.find(item => item.name === code) || languages.find(item => item.name === "en");
  if (!language) {
    throw new Error('languages.json has no "en" entry');
  }
  return language;
};

export interface I18n {
  /** Strings of the current language. */
  t: LanguageStrings;
  language: Language;
  setLanguage: (language: Language) => void;
  languages: Language[];
}

const I18nContext = createContext<I18n | null>(null);

export interface I18nProviderProps {
  languages: Language[];
  /** Starting language (main.ts: the browser's, else English). */
  initial: Language;
  /** Called after every switch; main.ts forwards the strings to the game via api.setLanguage(). */
  onChange?: (language: Language) => void;
  children?: ComponentChildren;
}

/** Holds the current UI language for everything below it. */
export const I18nProvider = ({ languages, initial, onChange, children }: I18nProviderProps) => {
  const [language, setCurrent] = useState(initial);
  const setLanguage = (next: Language) => {
    setCurrent(next);
    if (onChange) {
      onChange(next);
    }
  };
  return (
    <I18nContext.Provider value={{ t: language.lng, language, setLanguage, languages }}>
      {children}
    </I18nContext.Provider>
  );
};

/** Current language and switcher; use under I18nProvider. */
export const useI18n = (): I18n => {
  const i18n = useContext(I18nContext);
  if (!i18n) {
    throw new Error("useI18n used outside I18nProvider");
  }
  return i18n;
};
