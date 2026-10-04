/** UI strings for one language. Shape of each entry in assets/languages.json. */
export interface LanguageStrings {
  yourScore: string;
  bestScore: string;
  newText: string;
  timePlayed: string;
  playersKilled: string;
  playAgain: string;
  menu: string;
  messages: string[];
  nosupport: string;
  btnPlay: string;
  placeholderText: string;
  defaultPlayerName: string;
  bestTxt: string;
  killText: string;
  btnContinue: string;
  /** Only present in the built-in Russian fallback, not in languages.json. */
  extraLife?: string;
  btnSelect: string;
}
