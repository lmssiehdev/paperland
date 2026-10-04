import { Fragment, createContext, createElement } from "preact";
import { useContext, useEffect, useRef, useState } from "preact/hooks";
import { LANGUAGES, getLanguage } from "./i18n";

const LanguageContext = createContext();
const _0x313732 = ({
  messages
}) => {
  const [_0x2eef6d, _0x3e00f1] = useState(0);
  useEffect(() => {
    const _0x88d3da = setInterval(() => _0x3e00f1(_0x39ba1e => (_0x39ba1e + 1) % messages.length), 3000);
    return () => clearInterval(_0x88d3da);
  }, []);
  return createElement("div", {
    class: "tips"
  }, createElement("div", {
    class: "tip",
    key: _0x2eef6d
  }, messages[_0x2eef6d]));
};
const _0x449096 = ({
  config,
  apply
}) => {
  if (!config) {
    return null;
  }
  return createElement("form", {
    class: "config",
    onSubmit: apply
  }, Object.entries(config).map(([_0x14b1f7, _0x22ff59]) => createElement("label", {
    style: "color: white;"
  }, _0x14b1f7, "\xA0", createElement("input", {
    type: "text",
    id: _0x14b1f7,
    name: _0x14b1f7,
    value: _0x22ff59,
    autocomplete: "off",
    maxlength: "10"
  }))), createElement("button", {
    id: "apply",
    name: "apply",
    class: "yellow"
  }, "Применить"));
};
const _0x613dc8 = ({
  api,
  view,
  setPreparing,
  setState
}) => {
  const _0x4dd059 = api && api.game && api.game.config;
  const _0x307f95 = (event: any) => {
    event.preventDefault();
    Object.keys(_0x4dd059).forEach(item => {
      const elementById = document.getElementById(item);
      if (elementById) {
        const _0x5c8252 = parseFloat(elementById.value);
        _0x4dd059[item] = _0x5c8252 !== _0x5c8252 ? elementById.value : _0x5c8252;
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
  })), createElement(_0x449096, {
    config: _0x4dd059,
    apply: _0x307f95
  }));
};
const _0x11635f = ({
  setLanguage
}) => {
  const _0x3ae834 = useContext(LanguageContext);
  const _0x1df60f = LANGUAGES.map((item, index) => createElement("li", {
    class: item === _0x3ae834 ? "active" : "",
    onClick: () => setLanguage(LANGUAGES[index])
  }, item.name.toUpperCase()));
  return createElement("div", {
    id: "footer"
  }, createElement("ul", {
    id: "lng"
  }, _0x1df60f));
};
const _0x2b87a7 = ({
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
}) => {
  const {
    lng
  } = useContext(LanguageContext);
  const _0x7e5b2d = api && api.game && api.game.config;
  const _0x582227 = !!api;
  const _0x3e6418 = (_0x474014: { target: { value: any; }; }): { target: { value: any; }; } => setNickName(_0x474014.target.value);
  const _0x56e19e = _0x582227;
  const _0xe04ee3 = (event: any) => {
    event.preventDefault();
    if (_0x56e19e) {
      start();
    }
  };
  useEffect(() => {
    if (window.ads && window.ads.showAds) {
      window.ads.showAds();
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
  })), createElement(_0x313732, {
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
    oninput: _0x3e6418
  }), createElement("button", {
    id: "play",
    name: "play",
    class: "yellow" + (_0x56e19e ? "" : " disabled"),
    onClick: _0xe04ee3
  }, lng.btnPlay), createElement("button", {
    id: "skins",
    name: "skins",
    class: "orange noPadding",
    onClick: () => route("skins")
  }, createElement("img", {
    width: "30",
    height: "30",
    src: "assets/skins/select/" + (skin || "noskin").toLowerCase().replace(/\s+/g, "") + ".png"
  }))), !_0x582227 && createElement("p", {
    class: "notsupported"
  }, lng.nosupport)), createElement("div", {
    id: "right_side"
  }));
};
const _0x5389c6 = ({
  nickName,
  bestScore,
  setBestScore,
  setResults,
  setPreparing,
  api,
  route,
  skin,
  lastPercent
}) => {
  const _LanguageContextValue = useContext(LanguageContext);
  useEffect(() => {
    const _0x545eda = (_0x3ee818: { newBest: any; score: any; }): { newBest: any; score: any; } => {
      if (_0x3ee818.newBest) {
        setBestScore(_0x3ee818.score);
      }
      setResults(_0x3ee818);
      route("results");
    };
    if (window.ads && window.ads.hideAds) {
      window.ads.hideAds();
    }
    api.game.language = _LanguageContextValue.lng;
    let skin2 = skin;
    if (skin2 === "default" || skin2 === "No skin") {
      skin2 = "";
    }
    api.start(nickName, skin2, bestScore, _0x545eda, lastPercent);
    const {
      dataLayer
    } = window;
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
const _0x665b7b = ({
  bestScore,
  results,
  start,
  route,
  provider,
  country = undefined
}) => {
  const _0xb87c1f = () => route("menu");
  const {
    lng
  } = useContext(LanguageContext);
  const {
    dataLayer
  } = window;
  if (dataLayer) {
    dataLayer.push({
      event: "levelCompletion",
      publisher: "CONNECT2MEDIA",
      productKey: "paper2IO"
    });
  }
  useEffect(() => {
    if (window.ads && window.ads.showAds) {
      window.ads.showAds();
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
    onClick: _0xb87c1f
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
const _0x16897a = ({
  name
}) => {
  return createElement("div", {
    class: "skin"
  }, createElement("div", {
    class: "skin-view"
  }, createElement("h3", null, name), createElement("img", {
    src: "assets/skins/select/" + name.toLowerCase().replace(/\s+/g, "") + ".png"
  })));
};
const _0x226e7e = ({
  skins,
  skin,
  menu,
  setSkin
}) => {
  const {
    lng
  } = useContext(LanguageContext);
  const index = skins.findIndex((skin2: { name: any; }): { name: any; } => skin2.name === skin);
  const [_0x52fa22, _0x2309d4] = useState(index > 0 ? index : 0);
  const _0xd186be = (_0xfc8857: number): number => {
    if (_0xfc8857 >= 0 && _0xfc8857 < skins.length) {
      _0x2309d4(_0xfc8857);
      setSkin(skins[_0xfc8857].name);
    }
  };
  return createElement("div", {
    class: "skinbox"
  }, createElement("div", {
    class: "skins-container"
  }, createElement("button", {
    name: "left",
    class: "orange",
    onClick: () => _0xd186be(_0x52fa22 - 1)
  }, "<"), createElement(_0x16897a, {
    name: skins[_0x52fa22].name
  }), createElement("button", {
    name: "right",
    class: "orange",
    onClick: () => _0xd186be(_0x52fa22 + 1)
  }, ">")), createElement("div", {
    class: "nav"
  }, createElement("button", {
    class: "green",
    onClick: menu
  }, lng.btnSelect)));
};
const _0x33ae25 = ({
  skins,
  skin,
  route,
  setSkin
}) => {
  const _0x511672 = () => route("menu");
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
  })), createElement(_0x226e7e, {
    skins: [{
      name: "No skin"
    }].concat(skins),
    menu: _0x511672,
    setSkin: setSkin,
    skin: skin
  })), createElement("div", {
    id: "right_side"
  }));
};
export const App = ({
  api,
  storage,
  ads,
  provider,
  skins,
  mode = "common"
}) => {
  const _0x2a1468 = useRef(null);
  const [_0xae90a5, _0xe9f489] = useState(false);
  const [_0x3c010f, _0x4213e6] = useState("menu");
  const [_0x7671bd, _0x4023ac] = useState(true);
  const [_0x293a25, _0x5c440b] = useState(getLanguage());
  const [_0x50dae7, _0x536f0c] = useState(null);
  const _0x1cb8f8 = "paper.io.storage";
  const _0x16b845 = storage.getJSON(_0x1cb8f8) || {};
  const [_0x38110e, _0x495989] = useState(_0x16b845.nickName || "");
  const [_0x43a473, _0x421708] = useState(_0x16b845.bestScore || 0);
  const [_0x4f80f0, _0x33ebdc] = useState(_0x16b845.skin || "");
  const _0x48fc9f = {
    expires: 365
  };
  if (_0x38110e !== _0x16b845.nickName || _0x43a473 !== _0x16b845.bestScore || _0x4f80f0 !== _0x16b845.skin) {
    storage.set(_0x1cb8f8, {
      nickName: _0x38110e,
      bestScore: _0x43a473,
      skin: _0x4f80f0
    }, _0x48fc9f);
  }
  useEffect(() => {
    if (api) {
      api.create(_0x2a1468.current);
      api.prepare(() => _0x4023ac(false));
      _0xe9f489(true);
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
    _0x4213e6("game");
  };
  const _0x28fd93 = () => {
    const elementById = document.getElementById("overlay");
    if (elementById) {
      elementById.style.display = "block";
      elementById.style.animation = "fadein 500ms";
    }
    if (api && api.game) {
      api.game.visible = false;
    }
    window.ShowPreroll();
  };
  return createElement(Fragment, null, createElement("canvas", {
    class: _0x3c010f === "game" || _0x7671bd ? "" : "fadein",
    id: "view",
    ref: _0x2a1468
  }), _0x3c010f !== "game" && createElement("div", {
    id: "ui_overlay"
  }), createElement(LanguageContext.Provider, {
    value: _0x293a25
  }, createElement("div", {
    id: "ui",
    class: _0x3c010f === "game" ? "hide" : ""
  }, _0x3c010f === "menu" && createElement(_0x2b87a7, {
    nickName: _0x38110e,
    setNickName: _0x495989,
    playable: _0xae90a5,
    preparing: _0x7671bd,
    start: _0x28fd93,
    route: _0x4213e6,
    provider: provider,
    setLanguage: _0x5c440b,
    api: api,
    setState: _0x4213e6,
    skins: skins,
    skin: _0x4f80f0
  }), _0x3c010f === "game" && createElement(_0x5389c6, {
    nickName: _0x38110e,
    bestScore: _0x43a473,
    setBestScore: _0x421708,
    setResults: _0x536f0c,
    setPreparing: _0x4023ac,
    api: api,
    route: _0x4213e6,
    skin: _0x4f80f0
  }), _0x3c010f === "results" && createElement(_0x665b7b, {
    bestScore: _0x43a473,
    results: _0x50dae7,
    start: _0x28fd93,
    route: _0x4213e6,
    provider: provider
  }), _0x3c010f === "config" && createElement(_0x613dc8, {
    api: api,
    view: _0x2a1468,
    setPreparing: _0x4023ac,
    setState: _0x4213e6
  }), _0x3c010f === "skins" && createElement(_0x33ae25, {
    skins: skins,
    skin: _0x4f80f0,
    route: _0x4213e6,
    setSkin: _0x33ebdc
  })), _0x3c010f !== "game" && createElement(_0x11635f, {
    setLanguage: _0x5c440b
  })), createElement("div", {
    id: "overlay"
  }));
};
