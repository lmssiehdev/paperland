import { Fragment, createContext, createElement } from "preact";
import type { TargetedEvent } from "preact";
import { useContext, useEffect, useRef, useState } from "preact/hooks";
import type { StateUpdater, Dispatch } from "preact/hooks";
import type { PaperioApi } from "../api";
import type { GameResult } from "../game/game";
import { LANGUAGES, getLanguage } from "./i18n";
import type { Language } from "./i18n";

/** Screens the root App can show. */
export type Route = "menu" | "game" | "results" | "skins";

/** Cookie storage (the js-cookie default export); only the methods the UI calls. */
export interface CookieStorage {
  getJSON(name: string): unknown;
  set(name: string, value: unknown, options?: { expires?: number }): unknown;
}

/** Persisted UI state in the "paper.io.storage" cookie. */
interface StoredProfile {
  nickName?: string;
  bestScore?: number;
  skin?: string;
}

/** One entry of assets/skins/skins.json; the UI only needs the name. */
export interface SkinInfo {
  name: string;
}

type Setter<T> = Dispatch<StateUpdater<T>>;

/** Current UI language; App always provides it. */
const LanguageContext = createContext<Language | null>(null);

/** Reads LanguageContext; every screen is rendered under App's Provider. */
const useLanguage = (): Language => {
  const language = useContext(LanguageContext);
  if (!language) {
    throw new Error("LanguageContext used outside App's Provider");
  }
  return language;
};

interface TipsProps {
  messages: string[];
}
const Tips = ({
  messages
}: TipsProps) => {
  const [tipIndex, setTipIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setTipIndex(index => (index + 1) % messages.length), 3000);
    return () => clearInterval(intervalId);
  }, []);
  return createElement("div", {
    class: "tips"
  }, createElement("div", {
    class: "tip",
    key: tipIndex
  }, messages[tipIndex]));
};

interface LanguageFooterProps {
  setLanguage: Setter<Language>;
}
const LanguageFooter = ({
  setLanguage
}: LanguageFooterProps) => {
  const currentLanguage = useLanguage();
  const languageItems = LANGUAGES.map((item, index) => createElement("li", {
    class: item === currentLanguage ? "active" : "",
    onClick: () => setLanguage(LANGUAGES[index])
  }, item.name.toUpperCase()));
  return createElement("div", {
    id: "footer"
  }, createElement("ul", {
    id: "lng"
  }, languageItems));
};
interface MainMenuProps {
  nickName: string;
  setNickName: Setter<string>;
  start: () => void;
  route: Setter<Route>;
  setLanguage: Setter<Language>;
  api: PaperioApi | null;
  skin: string;
}
const MainMenu = ({
  nickName,
  setNickName,
  start,
  route,
  setLanguage,
  api,
  skin
}: MainMenuProps) => {
  const {
    lng
  } = useLanguage();
  const supported = !!api;
  const onNickInput = (event: TargetedEvent<HTMLInputElement, Event>) => setNickName(event.currentTarget.value);
  const onPlayClick = (event: TargetedEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (supported) {
      start();
    }
  };
  return createElement(Fragment, null, createElement("div", {
    id: "left_side"
  }), createElement("div", {
    class: "uibox"
  }, createElement("div", {
    class: "logo"
  }, createElement("img", {
    src: "assets/images/logo.png"
  })), createElement(Tips, {
    messages: lng.messages
  }), createElement("div", {
    class: "play"
  }, createElement("input", {
    type: "text",
    id: "nick",
    name: "nick",
    value: nickName,
    autocomplete: "off",
    placeholder: lng.placeholderText,
    maxlength: "12",
    oninput: onNickInput
  }), createElement("button", {
    id: "play",
    name: "play",
    class: "yellow" + (supported ? "" : " disabled"),
    onClick: onPlayClick
  }, lng.btnPlay), createElement("button", {
    id: "skins",
    name: "skins",
    class: "orange noPadding",
    onClick: () => route("skins")
  }, createElement("img", {
    width: "30",
    height: "30",
    src: "assets/skins/select/" + (skin || "noskin").toLowerCase().replace(/\s+/g, "") + ".png"
  }))), !supported && createElement("p", {
    class: "notsupported"
  }, lng.nosupport)), createElement("div", {
    id: "right_side"
  }));
};
interface GameScreenProps {
  nickName: string;
  bestScore: number;
  setBestScore: Setter<number>;
  setResults: Setter<GameResult | null>;
  setPreparing: Setter<boolean>;
  api: PaperioApi;
  route: Setter<Route>;
  skin: string;
  /** Extra-life base size (percent); App never passes it. */
  lastPercent?: number;
}
/** Renders nothing; starts a round when mounted and routes to results on game over. */
const GameScreen = ({
  nickName,
  bestScore,
  setBestScore,
  setResults,
  setPreparing,
  api,
  route,
  skin,
  lastPercent
}: GameScreenProps): null => {
  const language = useLanguage();
  useEffect(() => {
    const onGameOver = (results: GameResult) => {
      if (results.newBest) {
        setBestScore(results.score);
      }
      setResults(results);
      route("results");
    };
    api.game.language = language.lng;
    let skin2 = skin;
    if (skin2 === "default" || skin2 === "No skin") {
      skin2 = "";
    }
    api.start(nickName, skin2, bestScore, onGameOver, lastPercent);
    setPreparing(false);
  }, []);
  return null;
};
interface ResultsProps {
  bestScore: number;
  results: GameResult;
  route: Setter<Route>;
}
const Results = ({
  bestScore,
  results,
  route
}: ResultsProps) => {
  const goToMenu = () => route("menu");
  const {
    lng
  } = useLanguage();
  return createElement(Fragment, null, createElement("div", {
    id: "left_side"
  }), createElement("div", {
    class: "uibox"
  }, createElement("div", {
    class: "logo"
  }, createElement("img", {
    src: "assets/images/logo.png"
  })), createElement("div", {
    class: "nav"
  }, createElement("button", {
    class: "yellow slider-5",
    id: "menu",
    onClick: goToMenu
  }, lng.btnContinue)), createElement("div", {
    class: "resultbox"
  }, createElement("div", {
    class: "results"
  }, createElement("div", {
    class: "left"
  }, createElement("div", {
    class: "slider-1"
  }, lng.yourScore, ":"), createElement("div", {
    class: "slider-2"
  }, results.newBest && createElement("span", {
    class: "newScore"
  }, lng.newText, " "), lng.bestScore, ":"), createElement("div", {
    class: "slider-3"
  }, lng.timePlayed, ":"), createElement("div", {
    class: "slider-4"
  }, lng.playersKilled, ":")), createElement("div", {
    class: "right"
  }, createElement("div", {
    class: "slider-1"
  }, results.score.toFixed(2) + "%"), createElement("div", {
    class: "slider-2"
  }, bestScore.toFixed(2) + "%"), createElement("div", {
    class: "slider-3"
  }, new Date(results.time).toISOString().slice(14, -5)), createElement("div", {
    class: "slider-4"
  }, results.kills))))), createElement("div", {
    id: "right_side"
  }));
};
interface SkinPreviewProps {
  name: string;
}
const SkinPreview = ({
  name
}: SkinPreviewProps) => {
  return createElement("div", {
    class: "skin"
  }, createElement("div", {
    class: "skin-view"
  }, createElement("h3", null, name), createElement("img", {
    src: "assets/skins/select/" + name.toLowerCase().replace(/\s+/g, "") + ".png"
  })));
};
interface SkinPickerProps {
  skins: SkinInfo[];
  skin: string;
  menu: () => void;
  setSkin: Setter<string>;
}
const SkinPicker = ({
  skins,
  skin,
  menu,
  setSkin
}: SkinPickerProps) => {
  const {
    lng
  } = useLanguage();
  const index = skins.findIndex(skin2 => skin2.name === skin);
  const [selectedIndex, setSelectedIndex] = useState(index > 0 ? index : 0);
  const selectSkin = (nextIndex: number) => {
    if (nextIndex >= 0 && nextIndex < skins.length) {
      setSelectedIndex(nextIndex);
      setSkin(skins[nextIndex].name);
    }
  };
  return createElement("div", {
    class: "skinbox"
  }, createElement("div", {
    class: "skins-container"
  }, createElement("button", {
    name: "left",
    class: "orange",
    onClick: () => selectSkin(selectedIndex - 1)
  }, "<"), createElement(SkinPreview, {
    name: skins[selectedIndex].name
  }), createElement("button", {
    name: "right",
    class: "orange",
    onClick: () => selectSkin(selectedIndex + 1)
  }, ">")), createElement("div", {
    class: "nav"
  }, createElement("button", {
    class: "green",
    onClick: menu
  }, lng.btnSelect)));
};
interface SkinsScreenProps {
  skins: SkinInfo[];
  skin: string;
  route: Setter<Route>;
  setSkin: Setter<string>;
}
const SkinsScreen = ({
  skins,
  skin,
  route,
  setSkin
}: SkinsScreenProps) => {
  const goToMenu = () => route("menu");
  return createElement(Fragment, null, createElement("div", {
    id: "left_side"
  }), createElement("div", {
    class: "uibox"
  }, createElement("div", {
    class: "logo"
  }, createElement("img", {
    src: "assets/images/logo.png"
  })), createElement(SkinPicker, {
    skins: [{
      name: "No skin"
    }].concat(skins),
    menu: goToMenu,
    setSkin: setSkin,
    skin: skin
  })), createElement("div", {
    id: "right_side"
  }));
};
export interface AppProps {
  api: PaperioApi | null;
  storage: CookieStorage;
  skins: SkinInfo[];
}
export const App = ({
  api,
  storage,
  skins
}: AppProps) => {
  const viewRef = useRef<HTMLCanvasElement>(null);
  const [route, setRoute] = useState<Route>("menu");
  const [preparing, setPreparing] = useState(true);
  const [language, setLanguage] = useState(getLanguage());
  const [results, setResults] = useState<GameResult | null>(null);
  const storageKey = "paper.io.storage";
  const stored: StoredProfile = (storage.getJSON(storageKey) as StoredProfile) || {};
  const [nickName, setNickName] = useState(stored.nickName || "");
  const [bestScore, setBestScore] = useState(stored.bestScore || 0);
  const [skin, setSkin] = useState(stored.skin || "");
  const cookieOptions = {
    expires: 365
  };
  if (nickName !== stored.nickName || bestScore !== stored.bestScore || skin !== stored.skin) {
    storage.set(storageKey, {
      nickName: nickName,
      bestScore: bestScore,
      skin: skin
    }, cookieOptions);
  }
  useEffect(() => {
    if (api) {
      // The canvas is mounted by this render, so the ref is set when the effect runs.
      api.create(viewRef.current!);
      api.prepare(() => setPreparing(false));
    }
  }, []);
  /** Starts a round (Play button). */
  const startGame = () => {
    if (api && api.game) {
      api.game.visible = true;
    }
    setRoute("game");
  };
  if (api) {
    api.startGame = startGame;
  }
  return createElement(Fragment, null, createElement("canvas", {
    class: route === "game" || preparing ? "" : "fadein",
    id: "view",
    ref: viewRef
  }), route !== "game" && createElement("div", {
    id: "ui_overlay"
  }), createElement(LanguageContext.Provider, {
    value: language
  }, createElement("div", {
    id: "ui",
    class: route === "game" ? "hide" : ""
  }, route === "menu" && createElement(MainMenu, {
    nickName: nickName,
    setNickName: setNickName,
    start: startGame,
    route: setRoute,
    setLanguage: setLanguage,
    api: api,
    skin: skin
  }), route === "game" && api && createElement(GameScreen, {
    nickName: nickName,
    bestScore: bestScore,
    setBestScore: setBestScore,
    setResults: setResults,
    setPreparing: setPreparing,
    api: api,
    route: setRoute,
    skin: skin
  }), route === "results" && results && createElement(Results, {
    bestScore: bestScore,
    results: results,
    route: setRoute
  }), route === "skins" && createElement(SkinsScreen, {
    skins: skins,
    skin: skin,
    route: setRoute,
    setSkin: setSkin
  })), route !== "game" && createElement(LanguageFooter, {
    setLanguage: setLanguage
  })));
};
