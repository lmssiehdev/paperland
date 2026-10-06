import type { TargetedEvent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import type { StateUpdater, Dispatch } from "preact/hooks";
import type { GameResult } from "@paperio/core/game/game";
import { MODES } from "@paperio/core/modes/index";
import type { ModeId } from "@paperio/core/modes/index";
import type { SkinConfig } from "../skins/image-skins";
import { useI18n } from "./i18n";
import { useGameSession } from "./session-context";
import { useStoredProfile } from "./stored-profile";

/** Screens the root App can show. */
export type Route = "menu" | "game" | "results" | "skins";

/** One entry of assets/skins/skins.json ("No skin" has no avatar). */
export type SkinInfo = Pick<SkinConfig, "name" | "avatar">;

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
  setNickName: (nickName: string) => void;
  start: () => void;
  route: Setter<Route>;
  skins: SkinInfo[];
  skin: string;
  mode: ModeId;
  setMode: Setter<ModeId>;
}
const MainMenu = ({ nickName, setNickName, start, route, skins, skin, mode, setMode }: MainMenuProps) => {
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
          <img src="assets/images/logo.webp" />
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
            <SkinImage key={skin} skin={skins.find(candidate => candidate.name === skin)} size={30} />
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
  setBestScore: (bestScore: number) => void;
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
          <img src="assets/images/logo.webp" />
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
interface SkinImageProps {
  skin: SkinInfo | undefined;
  size: number;
}
/**
 * A skin as seen from above: its in-game SVG front layers (level >= 1) stacked in level order, placed by
 * their scale, pivot and offset from skins.json, then fitted into the size x size box once every layer's
 * aspect ratio is known. "No skin" (no avatar) shows the captured cube. Remount per skin (key).
 */
const SkinImage = ({ skin, size }: SkinImageProps) => {
  const [ratios, setRatios] = useState<Record<string, number>>({});
  const avatar = skin?.avatar;
  const layers = (avatar?.layers ?? [])
    .filter(layer => layer.url && (layer.level ?? 0) >= 1)
    .sort((a, b) => (a.level ?? 0) - (b.level ?? 0));
  if (!avatar || layers.length === 0) {
    return <img class="skin-image" width={size} height={size} src="assets/skins/select/noskin.png" />;
  }
  // Layer rects in track widths, as the game draws them (game-renderer.ts drawSkinLayer).
  const rects = layers.map(layer => {
    const width = (avatar.scale ?? 1) * (layer.scale ?? 1);
    const height = width * (ratios[layer.url!] ?? 1);
    const x = (avatar.x ?? 0) + (layer.x ?? 0) - (layer.pivot?.x ?? 0.5) * width;
    const y = (avatar.y ?? 0) + (layer.y ?? 0) - (layer.pivot?.y ?? 0.5) * height;
    return { x, y, width, height };
  });
  const left = Math.min(...rects.map(rect => rect.x));
  const top = Math.min(...rects.map(rect => rect.y));
  const boxWidth = Math.max(...rects.map(rect => rect.x + rect.width)) - left;
  const boxHeight = Math.max(...rects.map(rect => rect.y + rect.height)) - top;
  // Fit the longer side, but count it as at most 1.4x the shorter one: a long, thin skin (Bat's wings,
  // 2.1:1) stays big and overflows the box instead of shrinking; every other skin is within 1.3:1.
  const fit = size / Math.max(Math.min(boxWidth, boxHeight * 1.4), Math.min(boxHeight, boxWidth * 1.4));
  const originX = (size - boxWidth * fit) / 2 - left * fit;
  const originY = (size - boxHeight * fit) / 2 - top * fit;
  const ready = layers.every(layer => ratios[layer.url!] !== undefined);
  return (
    <span class="skin-image" style={{ width: `${size}px`, height: `${size}px` }}>
      {layers.map((layer, index) => (
        <img
          key={layer.url}
          src={"assets/skins/" + layer.url}
          onLoad={event => {
            const image = event.currentTarget;
            setRatios(known => ({ ...known, [layer.url!]: image.naturalHeight / image.naturalWidth }));
          }}
          style={{
            visibility: ready ? "visible" : "hidden",
            left: `${originX + rects[index].x * fit}px`,
            top: `${originY + rects[index].y * fit}px`,
            width: `${rects[index].width * fit}px`
          }}
        />
      ))}
    </span>
  );
};
interface SkinPreviewProps {
  skin: SkinInfo;
}
const SkinPreview = ({ skin }: SkinPreviewProps) => {
  return (
    <div class="skin">
      <div class="skin-view">
        <h3>{skin.name}</h3>
        <SkinImage key={skin.name} skin={skin} size={96} />
      </div>
    </div>
  );
};
interface SkinPickerProps {
  skins: SkinInfo[];
  skin: string;
  menu: () => void;
  setSkin: (skin: string) => void;
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
        <SkinPreview skin={skins[selectedIndex]} />
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
  setSkin: (skin: string) => void;
}
const SkinsScreen = ({ skins, skin, route, setSkin }: SkinsScreenProps) => {
  const goToMenu = () => route("menu");
  return (
    <>
      <div id="left_side" />
      <div class="uibox">
        <div class="logo">
          <img src="assets/images/logo.webp" />
        </div>
        <SkinPicker skins={[{ name: "No skin" }].concat(skins)} menu={goToMenu} setSkin={setSkin} skin={skin} />
      </div>
      <div id="right_side" />
    </>
  );
};
export interface AppProps {
  skins: SkinInfo[];
  /** Mode preselected in the menu (dev: ?mode=); default classic. */
  initialMode?: ModeId;
}
export const App = ({ skins, initialMode = "classic" }: AppProps) => {
  const session = useGameSession();
  const viewRef = useRef<HTMLCanvasElement>(null);
  const [route, setRoute] = useState<Route>("menu");
  const [sessionState, setSessionState] = useState(session.state);
  const preparing = sessionState === "preparing";
  const [results, setResults] = useState<GameResult | null>(null);
  const [{ nickName, bestScore, skin }, updateProfile] = useStoredProfile();
  const setNickName = (value: string) => updateProfile({ nickName: value });
  const setBestScore = (value: number) => updateProfile({ bestScore: value });
  const setSkin = (value: string) => updateProfile({ skin: value });
  const [mode, setMode] = useState<ModeId>(initialMode);
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
            skins={skins}
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
