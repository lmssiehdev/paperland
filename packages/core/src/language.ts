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
  /** "Extra life" popup when continuing after death (in languages.json for en and ru; others fall back to en). */
  extraLife: string;
  btnSelect: string;
}
