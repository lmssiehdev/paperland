import type { TargetedEvent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import type { StateUpdater, Dispatch } from "preact/hooks";
import type { GameResult } from "@paperio/core/game/game";
import { MODES } from "@paperio/core/modes/index";
import type { ModeId } from "@paperio/core/modes/index";
import type { PlatformStorage } from "@paperio/core/platform";
import { useI18n } from "./i18n";
import { useGameSession } from "./session-context";

/** Screens the root App can show. */
export type Route = "menu" | "game" | "results" | "skins";

/** Persisted UI state under the "paper.io.storage" key. */
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

interface TipsProps {
  messages: string[];
}
const Tips = ({ messages }: TipsProps) => {
  const [tipIndex, setTipIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setTipIndex(index => (index + 1) % messages.length), 3000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div class="tips">
      <div class="tip" key={tipIndex}>
        {messages[tipIndex]}
      </div>
    </div>
  );
};

const LanguageFooter = () => {
  const { language: currentLanguage, languages, setLanguage } = useI18n();
  const languageItems = languages.map((item, index) => (
    <li class={item === currentLanguage ? "active" : ""} onClick={() => setLanguage(languages[index])}>
      {item.name.toUpperCase()}
    </li>
  ));
  return (
    <div id="footer">
      <ul id="lng">{languageItems}</ul>
    </div>
  );
};
interface MainMenuProps {
  nickName: string;
  setNickName: Setter<string>;
  start: () => void;
  route: Setter<Route>;
  skin: string;
  mode: ModeId;
  setMode: Setter<ModeId>;
}
const MainMenu = ({ nickName, setNickName, start, route, skin, mode, setMode }: MainMenuProps) => {
  const { t } = useI18n();
  const onNickInput = (event: TargetedEvent<HTMLInputElement, Event>) => setNickName(event.currentTarget.value);
  const onPlayClick = (event: TargetedEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    start();
  };
  return (
    <>
      <div id="left_side" />
      <div class="uibox">
        <div class="logo">
          <img src="assets/images/logo.png" />
        </div>
        <Tips messages={t.messages} />
        <div class="play">
          <input
            type="text"
            id="nick"
            name="nick"
            value={nickName}
            autocomplete="off"
            placeholder={t.placeholderText}
            maxlength={12}
            onInput={onNickInput}
          />
          <button id="play" name="play" class="yellow" onClick={onPlayClick}>
            {t.btnPlay}
          </button>
          <button id="skins" name="skins" class="orange noPadding" onClick={() => route("skins")}>
            <img
              width="30"
              height="30"
              src={"assets/skins/select/" + (skin || "noskin").toLowerCase().replace(/\s+/g, "") + ".png"}
            />
          </button>
        </div>
        <div class="modes">
          {MODES.map(item => (
            <button
              key={item.id}
              id={"mode-" + item.id}
              class={item.id === mode ? "green" : "orange"}
              style={{ margin: "8px 4px 0" }}
              onClick={() => setMode(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div id="right_side" />
    </>
  );
};
interface GameScreenProps {
  nickName: string;
  bestScore: number;
  setBestScore: Setter<number>;
  setResults: Setter<GameResult | null>;
  route: Setter<Route>;
  skin: string;
  /** Extra-life base size (percent); App never passes it. */
  lastPercent?: number;
  mode: ModeId;
}
/** Renders nothing; starts a round when mounted and routes to results on game over. */
const GameScreen = ({
  nickName,
  bestScore,
  setBestScore,
  setResults,
  route,
  skin,
  lastPercent,
  mode
}: GameScreenProps): null => {
  const session = useGameSession();
  useEffect(() => {
    const onGameOver = (results: GameResult) => {
      if (results.newBest) {
        setBestScore(results.score);
      }
      setResults(results);
      route("results");
    };
    let skinName = skin;
    if (skinName === "default" || skinName === "No skin") {
      skinName = "";
    }
    session.setMode(mode);
    session.start({ name: nickName, skin: skinName, best: bestScore, onGameOver, extraLife: lastPercent });
  }, []);
  return null;
};
interface ResultsProps {
  bestScore: number;
  results: GameResult;
  route: Setter<Route>;
}
const Results = ({ bestScore, results, route }: ResultsProps) => {
  const goToMenu = () => route("menu");
  const { t } = useI18n();
  return (
    <>
      <div id="left_side" />
      <div class="uibox">
        <div class="logo">
          <img src="assets/images/logo.png" />
        </div>
        <div class="nav">
          <button class="yellow slider-5" id="menu" onClick={goToMenu}>
            {t.btnContinue}
          </button>
        </div>
        <div class="resultbox">
          <div class="results">
            <div class="left">
              <div class="slider-1">
                {t.yourScore}
                {":"}
              </div>
              <div class="slider-2">
                {results.newBest && <span class="newScore">{t.newText} </span>}
                {t.bestScore}
                {":"}
              </div>
              <div class="slider-3">
                {t.timePlayed}
                {":"}
              </div>
              <div class="slider-4">
                {t.playersKilled}
                {":"}
              </div>
            </div>
            <div class="right">
              <div class="slider-1">{results.score.toFixed(2) + "%"}</div>
              <div class="slider-2">{bestScore.toFixed(2) + "%"}</div>
              <div class="slider-3">{new Date(results.time).toISOString().slice(14, -5)}</div>
              <div class="slider-4">{results.kills}</div>
            </div>
          </div>
        </div>
      </div>
      <div id="right_side" />
    </>
  );
};
interface SkinPreviewProps {
  name: string;
}
const SkinPreview = ({ name }: SkinPreviewProps) => {
  return (
    <div class="skin">
      <div class="skin-view">
        <h3>{name}</h3>
        <img src={"assets/skins/select/" + name.toLowerCase().replace(/\s+/g, "") + ".png"} />
      </div>
    </div>
  );
};
interface SkinPickerProps {
  skins: SkinInfo[];
  skin: string;
  menu: () => void;
  setSkin: Setter<string>;
}
const SkinPicker = ({ skins, skin, menu, setSkin }: SkinPickerProps) => {
  const { t } = useI18n();
  const index = skins.findIndex(candidate => candidate.name === skin);
  const [selectedIndex, setSelectedIndex] = useState(index > 0 ? index : 0);
  const selectSkin = (nextIndex: number) => {
    if (nextIndex >= 0 && nextIndex < skins.length) {
      setSelectedIndex(nextIndex);
      setSkin(skins[nextIndex].name);
    }
  };
  return (
    <div class="skinbox">
      <div class="skins-container">
        <button name="left" class="orange" onClick={() => selectSkin(selectedIndex - 1)}>
          {"<"}
        </button>
        <SkinPreview name={skins[selectedIndex].name} />
        <button name="right" class="orange" onClick={() => selectSkin(selectedIndex + 1)}>
          {">"}
        </button>
      </div>
      <div class="nav">
        <button class="green" onClick={menu}>
          {t.btnSelect}
        </button>
      </div>
    </div>
  );
};
interface SkinsScreenProps {
  skins: SkinInfo[];
  skin: string;
  route: Setter<Route>;
  setSkin: Setter<string>;
}
const SkinsScreen = ({ skins, skin, route, setSkin }: SkinsScreenProps) => {
  const goToMenu = () => route("menu");
  return (
    <>
      <div id="left_side" />
      <div class="uibox">
        <div class="logo">
          <img src="assets/images/logo.png" />
        </div>
        <SkinPicker skins={[{ name: "No skin" }].concat(skins)} menu={goToMenu} setSkin={setSkin} skin={skin} />
      </div>
      <div id="right_side" />
    </>
  );
};
export interface AppProps {
  storage: PlatformStorage;
  skins: SkinInfo[];
  /** Mode preselected in the menu (dev: ?mode=); default classic. */
  initialMode?: ModeId;
}
export const App = ({ storage, skins, initialMode = "classic" }: AppProps) => {
  const session = useGameSession();
  const viewRef = useRef<HTMLCanvasElement>(null);
  const [route, setRoute] = useState<Route>("menu");
  const [sessionState, setSessionState] = useState(session.state);
  const preparing = sessionState === "preparing";
  const [results, setResults] = useState<GameResult | null>(null);
  const storageKey = "paper.io.storage";
  const stored: StoredProfile = storage.getJSON<StoredProfile>(storageKey) || {};
  const [nickName, setNickName] = useState(stored.nickName || "");
  const [bestScore, setBestScore] = useState(stored.bestScore || 0);
  const [skin, setSkin] = useState(stored.skin || "");
  const [mode, setMode] = useState<ModeId>(initialMode);
  if (nickName !== stored.nickName || bestScore !== stored.bestScore || skin !== stored.skin) {
    storage.set(storageKey, {
      nickName: nickName,
      bestScore: bestScore,
      skin: skin
    });
  }
  useEffect(() => {
    const unsubscribe = session.subscribe(setSessionState);
    // The canvas is mounted by this render, so the ref is set when the effect runs.
    session.attach(viewRef.current!);
    return unsubscribe;
  }, []);
  /** Starts a round (Play button). */
  const startGame = () => {
    session.showGame();
    setRoute("game");
  };
  return (
    <>
      <canvas class={route === "game" || preparing ? "" : "fadein"} id="view" ref={viewRef} />
      {route !== "game" && <div id="ui_overlay" />}
      <div id="ui" class={route === "game" ? "hide" : ""}>
        {route === "menu" && (
          <MainMenu
            nickName={nickName}
            setNickName={setNickName}
            start={startGame}
            route={setRoute}
            skin={skin}
            mode={mode}
            setMode={setMode}
          />
        )}
        {route === "game" && (
          <GameScreen
            nickName={nickName}
            bestScore={bestScore}
            setBestScore={setBestScore}
            setResults={setResults}
            route={setRoute}
            skin={skin}
            mode={mode}
          />
        )}
        {route === "results" && results && <Results bestScore={bestScore} results={results} route={setRoute} />}
        {route === "skins" && <SkinsScreen skins={skins} skin={skin} route={setRoute} setSkin={setSkin} />}
      </div>
      {route !== "game" && <LanguageFooter />}
    </>
  );
};
