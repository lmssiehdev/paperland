import { Fragment, createContext, createElement } from "preact";
import type { RefObject, TargetedEvent } from "preact";
import { useContext, useEffect, useRef, useState } from "preact/hooks";
import type { StateUpdater, Dispatch } from "preact/hooks";
import type { Game } from "../game/game";
import { LANGUAGES, getLanguage } from "./i18n";
import type { Language } from "./i18n";

/** Screens the root App can show. */
export type Route = "menu" | "game" | "results" | "config" | "skins";

/** Value of one editable game config entry (DEFAULT_CONFIG holds numbers, strings and booleans). */
type ConfigValue = string | number | boolean;
/** Game config viewed as a mutable string-keyed record, as the config editor treats it. */
type EditableConfig = Record<string, ConfigValue>;

/** Object passed by Game to the game-over callback (see Game's gameOverCallback call). */
export interface GameResults {
  build?: unknown;
  game?: Game;
  percent: number;
  score: number;
  newBest: boolean;
  name: string;
  top?: number;
  best: number;
  bestPercent: number;
  time: number;
  kills: number;
  image: string;
  reason: number;
}

/**
 * The parts of window.paperio2api (created by createApi in src/api.ts) the UI uses.
 * Declared locally because createApi's return type is not typed yet.
 */
export interface PaperioApi {
  game?: Game;
  preparing?: boolean;
  create(view: HTMLCanvasElement): void;
  prepare(onReady: () => void): void;
  start(name: string, skin: string, bestScore: number, onGameOver: (results: GameResults) => void, extraLife?: number): void;
  /** Installed by App; called by the page's preroll-ad script (original/index.html) once the ad ends. */
  startGame?: () => void;
}

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

/** Globals provided by the hosting page (ads SDK, GTM). */
type HostWindow = Window & {
  ads?: {
    showAds?: () => void;
    hideAds?: () => void;
  };
  dataLayer?: Record<string, unknown>[];
  /** Defined by the host page (original/index.html); assumed present. */
  ShowPreroll?: () => void;
};
const hostWindow = window as HostWindow;

type Setter<T> = Dispatch<StateUpdater<T>>;

const LanguageContext = createContext<Language>(undefined);

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

interface ConfigFormProps {
  config: EditableConfig;
  apply: (event: TargetedEvent<HTMLFormElement, SubmitEvent>) => void;
}
const ConfigForm = ({
  config,
  apply
}: ConfigFormProps) => {
  if (!config) {
    return null;
  }
  return createElement("form", {
    class: "config",
    onSubmit: apply
  }, Object.entries(config).map(([key, value]) => createElement("label", {
    style: "color: white;"
  }, key, "\xA0", createElement("input", {
    type: "text",
    id: key,
    name: key,
    // Booleans are stringified by the DOM ("true"/"false").
    value: value as string | number,
    autocomplete: "off",
    maxlength: "10"
  }))), createElement("button", {
    id: "apply",
    name: "apply",
    class: "yellow"
  }, "Применить"));
};
interface ConfigScreenProps {
  api: PaperioApi;
  view: RefObject<HTMLCanvasElement>;
  setPreparing: Setter<boolean>;
  setState: Setter<Route>;
}
const ConfigScreen = ({
  api,
  view,
  setPreparing,
  setState
}: ConfigScreenProps) => {
  const config: EditableConfig = api && api.game && api.game.config;
  const applyConfig = (event: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
    event.preventDefault();
    Object.keys(config).forEach(item => {
      const elementById = document.getElementById(item) as HTMLInputElement | null;
      if (elementById) {
        const parsed = parseFloat(elementById.value);
        // parsed !== parsed is a NaN check: keep non-numeric input as a string.
        config[item] = parsed !== parsed ? elementById.value : parsed;
      }
    });
    api.game.stopped = true;
    api.create(view.current);
    setPreparing(true);
    api.prepare(() => setPreparing(false));
    setState("menu");
  };
  return createElement("div", {
    class: "uibox"
  }, createElement("div", {
    class: "logo"
  }, createElement("img", {
    src: "assets/images/logo.png"
  })), createElement(ConfigForm, {
    config: config,
    apply: applyConfig
  }));
};
interface LanguageFooterProps {
  setLanguage: Setter<Language>;
}
const LanguageFooter = ({
  setLanguage
}: LanguageFooterProps) => {
  const currentLanguage = useContext(LanguageContext);
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
  /** Unused by the menu. */
  playable?: boolean;
  /** Unused by the menu. */
  preparing?: boolean;
  start: () => void;
  route: Setter<Route>;
  /** Unused by the menu. */
  provider?: unknown;
  setLanguage: Setter<Language>;
  api: PaperioApi | null;
  /** Passed by App but unused by the menu. */
  setState?: Setter<Route>;
  /** Passed by App but unused by the menu. */
  skins?: SkinInfo[];
  skin: string;
}
const MainMenu = ({
  nickName,
  setNickName,
  playable,
  preparing,
  start,
  route,
  provider,
  setLanguage,
  api,
  skin
}: MainMenuProps) => {
  const {
    lng
  } = useContext(LanguageContext);
  const config = api && api.game && api.game.config;
  const supported = !!api;
  const onNickInput = (event: TargetedEvent<HTMLInputElement, Event>) => setNickName(event.currentTarget.value);
  const canPlay = supported;
  const onPlayClick = (event: TargetedEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (canPlay) {
      start();
    }
  };
  useEffect(() => {
    if (hostWindow.ads && hostWindow.ads.showAds) {
      hostWindow.ads.showAds();
    }
  }, []);
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
    class: "yellow" + (canPlay ? "" : " disabled"),
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
  setResults: Setter<GameResults | null>;
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
  const language = useContext(LanguageContext);
  useEffect(() => {
    const onGameOver = (results: GameResults) => {
      if (results.newBest) {
        setBestScore(results.score);
      }
      setResults(results);
      route("results");
    };
    if (hostWindow.ads && hostWindow.ads.hideAds) {
      hostWindow.ads.hideAds();
    }
    api.game.language = language.lng;
    let skin2 = skin;
    if (skin2 === "default" || skin2 === "No skin") {
      skin2 = "";
    }
    api.start(nickName, skin2, bestScore, onGameOver, lastPercent);
    const {
      dataLayer
    } = hostWindow;
    if (dataLayer) {
      dataLayer.push({
        event: "levelStart",
        publisher: "CONNECT2MEDIA",
        productKey: "paper2IO"
      });
    }
    setPreparing(false);
  }, []);
  return null;
};
interface ResultsProps {
  bestScore: number;
  results: GameResults;
  /** Unused by the results screen. */
  start?: () => void;
  route: Setter<Route>;
  /** Unused by the results screen. */
  provider?: unknown;
  /** Unused by the results screen. */
  country?: unknown;
}
const Results = ({
  bestScore,
  results,
  start,
  route,
  provider,
  country = undefined
}: ResultsProps) => {
  const goToMenu = () => route("menu");
  const {
    lng
  } = useContext(LanguageContext);
  const {
    dataLayer
  } = hostWindow;
  if (dataLayer) {
    dataLayer.push({
      event: "levelCompletion",
      publisher: "CONNECT2MEDIA",
      productKey: "paper2IO"
    });
  }
  useEffect(() => {
    if (hostWindow.ads && hostWindow.ads.showAds) {
      hostWindow.ads.showAds();
    }
  }, []);
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
  }, results.kills)))), createElement("div", {
    id: "yandex_rtb"
  })), createElement("div", {
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
  } = useContext(LanguageContext);
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
  useEffect(() => {
    const elementById = document.getElementById("paperio-site_multisize");
    if (elementById) {
      elementById.style.display = "none";
    }
  }, []);
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
  /** Unused. */
  ads?: unknown;
  /** Unused. */
  provider?: unknown;
  skins: SkinInfo[];
  /** Unused. */
  mode?: string;
}
export const App = ({
  api,
  storage,
  ads,
  provider,
  skins,
  mode = "common"
}: AppProps) => {
  const viewRef = useRef<HTMLCanvasElement>(null);
  const [playable, setPlayable] = useState(false);
  const [route, setRoute] = useState<Route>("menu");
  const [preparing, setPreparing] = useState(true);
  const [language, setLanguage] = useState(getLanguage());
  const [results, setResults] = useState<GameResults | null>(null);
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
      api.create(viewRef.current);
      api.prepare(() => setPreparing(false));
      setPlayable(true);
    }
  }, []);
  api.startGame = () => {
    const elementById = document.getElementById("overlay");
    if (elementById) {
      elementById.style.display = "none";
    }
    if (api && api.game) {
      api.game.visible = true;
    }
    setRoute("game");
  };
  /** Shows the overlay and hands off to the page's preroll ad, which calls api.startGame(). */
  const showPreroll = () => {
    const elementById = document.getElementById("overlay");
    if (elementById) {
      elementById.style.display = "block";
      elementById.style.animation = "fadein 500ms";
    }
    if (api && api.game) {
      api.game.visible = false;
    }
    hostWindow.ShowPreroll();
  };
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
    playable: playable,
    preparing: preparing,
    start: showPreroll,
    route: setRoute,
    provider: provider,
    setLanguage: setLanguage,
    api: api,
    setState: setRoute,
    skins: skins,
    skin: skin
  }), route === "game" && createElement(GameScreen, {
    nickName: nickName,
    bestScore: bestScore,
    setBestScore: setBestScore,
    setResults: setResults,
    setPreparing: setPreparing,
    api: api,
    route: setRoute,
    skin: skin
  }), route === "results" && createElement(Results, {
    bestScore: bestScore,
    results: results,
    start: showPreroll,
    route: setRoute,
    provider: provider
  }), route === "config" && createElement(ConfigScreen, {
    api: api,
    view: viewRef,
    setPreparing: setPreparing,
    setState: setRoute
  }), route === "skins" && createElement(SkinsScreen, {
    skins: skins,
    skin: skin,
    route: setRoute,
    setSkin: setSkin
  })), route !== "game" && createElement(LanguageFooter, {
    setLanguage: setLanguage
  })), createElement("div", {
    id: "overlay"
  }));
};
