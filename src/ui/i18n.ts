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
};
var _0x2aa187 = Object.assign;
export const LANGUAGES: any[] = [];
export const setLanguages = (result: ArrayLike<unknown> | { [s: string]: unknown; }): { [s: string]: unknown; } | ArrayLike<unknown> => {
  const {
    en
  } = result;
  Object.entries(result).forEach(([_0x481b18, _0x2f0d2c]) => {
    LANGUAGES.push({
      name: _0x481b18,
      lng: _0x2aa187(_0x2aa187({}, en), _0x2f0d2c)
    });
  });
};
const _0x4d828b = (navigator.languages && navigator.languages.length && navigator.languages[0] || navigator.userLanguage || navigator.language || navigator.browserLanguage || "en").substr(0, 2).toLowerCase();
export const getLanguage = () => LANGUAGES.find(item => item.name === _0x4d828b) || LANGUAGES.find(item => item.name === "en");
