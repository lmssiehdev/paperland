import type { Config } from "@paperio/core/config";
import { createGame } from "@paperio/core/create-game";
import { now } from "@paperio/core/engine/math";
import type { AchievementStore } from "@paperio/core/game/achievements";
import type { Game, GameConfig, GameResult } from "@paperio/core/game/game";
import type { NamePool } from "@paperio/core/game/names";
import type { SchemesManager } from "@paperio/core/game/scoring";
import type { LanguageStrings } from "@paperio/core/language";
import type { ModeId } from "@paperio/core/modes/index";
import type { SkinManager } from "@paperio/core/skins/skin";
import { Controller, KeyboardModeSwitch } from "./input/controller";
import { readControllerInput } from "./input/read-input";
import { renderGame } from "./render/game-renderer";
import { renderTerritoryImage } from "./render/territory-image";

/**
 * preparing: bot-only warm-up (prepareCounter ticks) is running in the background or still pending;
 * ready: warmed up, the game loops behind the menu; playing: the player is in; over: the player's round ended.
 */
export type SessionState = "preparing" | "ready" | "playing" | "over";

export interface SessionOptions {
  config: Config;
  /** Initial strings; see setLanguage(). */
  language: LanguageStrings;
  createSkinManager: (config: GameConfig, view: HTMLCanvasElement) => SkinManager;
  nameManager: NamePool;
  schemesManager: SchemesManager;
  achievements: AchievementStore;
  /** Fixed seed for every game (dev: ?seed=); default: a random seed per game. */
  seed?: number;
}

export interface StartOptions {
  name: string;
  /** Skin asset name ("" for a random colored skin). */
  skin: string;
  /** Previous best score. */
  best: number;
  /** Replaces the previous callback when given. */
  onGameOver?: (result: GameResult) => void;
  /** Fraction of the arena to start with (continue after death); omitted for a normal start. */
  extraLife?: number;
}

/** The browser game: one current Game, its warm-up, loop, mode and language. The UI reaches it via useGameSession(). */
export class GameSession {
  /** Current game; set by attach()/create(). */
  game!: Game;
  state: SessionState = "preparing";
  private view!: HTMLCanvasElement;
  private strings: LanguageStrings;
  private warmupCycles = 0;
  private warmupTimer: ReturnType<typeof setInterval> | undefined;
  private onGameOver: ((result: GameResult) => void) | undefined;
  private readonly listeners = new Set<(state: SessionState) => void>();

  constructor(private readonly options: SessionOptions) {
    this.strings = options.language;
  }

  /** Calls `listener` on every state change; returns the unsubscribe function. */
  subscribe(listener: (state: SessionState) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private setState(state: SessionState): void {
    this.state = state;
    this.listeners.forEach(listener => listener(state));
  }

  /** Mounts the session on the page's canvas: first game, then the background warm-up. */
  attach(view: HTMLCanvasElement): void {
    this.create(view);
    this.prepare();
  }

  /** Replaces the current game with a fresh one in `mode` on `view` (no warm-up; e2e scripts call this directly). */
  create(view: HTMLCanvasElement, mode: ModeId = "classic"): void {
    this.view = view;
    const controller = new Controller(view, new KeyboardModeSwitch());
    const game = createGame({
      config: this.options.config,
      mode,
      language: this.strings,
      createSkinManager: config => this.options.createSkinManager(config, view),
      nameManager: this.options.nameManager,
      schemesManager: this.options.schemesManager,
      achievements: this.options.achievements,
      seed: this.options.seed,
      view,
      controller,
      hooks: {
        renderer: renderGame,
        input: readControllerInput,
        territoryImage: renderTerritoryImage,
        requestFrame: callback => {
          requestAnimationFrame(callback);
        }
      }
    });
    if (__DEV__) {
      // Shift+Alt+Q+B+M: debug overlay; G: frame-time graph.
      controller.addSet([16, 18, 81, 66, 77], () => {
        game.debug = !game.debug;
      });
      controller.addButton(71, () => {
        game.debugGraph = !game.debugGraph;
      });
    }
    this.game = game;
    this.warmupCycles = 0;
  }

  private runWarmupBatch(): void {
    const { prepareMult } = this.options.config;
    let { prepareBatchCount } = this.options.config;
    while (prepareBatchCount--) {
      this.game.update((1000 / 60) * prepareMult + Math.random());
      this.warmupCycles++;
    }
  }

  /** Warm-up in small batches off the main path; when done the game starts looping behind the menu. */
  private prepare(): void {
    const game = this.game;
    this.setState("preparing");
    this.warmupTimer = setInterval(() => {
      this.runWarmupBatch();
      if (this.warmupCycles > this.options.config.prepareCounter) {
        clearInterval(this.warmupTimer);
        game.visible = true;
        if (!game.looped) {
          game.loop();
        }
        this.setState("ready");
      }
    }, 0);
  }

  /** Completes a pending warm-up synchronously, bounded by maxPreparingTime. */
  private finishWarmup(): void {
    if (this.state !== "preparing") {
      return;
    }
    clearInterval(this.warmupTimer);
    const { prepareCounter, maxPreparingTime } = this.options.config;
    const time = now();
    while (this.warmupCycles < prepareCounter) {
      this.runWarmupBatch();
      if (now() - time > maxPreparingTime) {
        break;
      }
    }
  }

  /** Switches to a fresh game in `mode` (warm-up pending, finished by start()). No-op for the current mode. */
  setMode(mode: ModeId): void {
    if (mode === this.game.mode.id) {
      return;
    }
    clearInterval(this.warmupTimer);
    this.game.stop();
    this.game.controller?.dispose();
    this.create(this.view, mode);
    this.setState("preparing");
  }

  /** Play pressed: show the game right away (start() follows once the game screen mounts). */
  showGame(): void {
    this.game.visible = true;
  }

  /** Spawns the player into the current game and runs it. */
  start({ name, skin, best, onGameOver, extraLife }: StartOptions): void {
    this.finishWarmup();
    const game = this.game;
    game.best = best;
    // spawnPlayer treats a falsy extraLife as a normal start.
    game.spawnPlayer(name, skin, extraLife ?? 0);
    if (extraLife) {
      // spawnPlayer always sets game.player via addPlayer.
      game.player!.addLabel({
        text: this.strings.extraLife,
        time: 5000,
        color: "#7fed4c"
      });
    }
    this.onGameOver = onGameOver ?? this.onGameOver;
    game.gameOverCallback = result => {
      this.setState("over");
      this.onGameOver?.(result);
    };
    this.setState("playing");
    game.visible = true;
    if (!game.looped) {
      game.loop();
    }
    window.focus();
  }

  /** Strings the game shows or uses (default player name, kill labels, HUD, extra-life popup); kept for later games. */
  setLanguage(strings: LanguageStrings): void {
    this.strings = strings;
    if (this.game) {
      this.game.language = strings;
    }
  }
}
