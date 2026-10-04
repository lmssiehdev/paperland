import { TAU, METRICS_HISTORY_LENGTH, clamp, createRng, easeOutCubic, inRange, isZero, lerp, nearlyEqual, now, rangeOverlap, vecFromAngle } from "../engine/math";
import { Polygon, circlePoints } from "../engine/polygon";
import { Segment } from "../engine/segment";
import { Vec2 } from "../engine/vec2";
import { AchievementsProfile, AchievementStore } from "./achievements";
import { Base } from "./base";
import { City } from "./city";
import { DEATH_CAPITAL_SURROUNDED, DEATH_EXIT_CAPTURED, DEATH_REMOVED, DEATH_SELF_INTERSECT, DEATH_SURROUNDED, DEATH_TRACK_CROSSED, DEATH_WIN, TICK_MS, TICK_MS_X2 } from "./constants";
import { FloatingLabel } from "./floating-label";
import { Particle, spawnDeathParticles } from "./particles";
import { Bot, Player } from "./units";
import type { Border } from "../engine/border";
import type { Rng } from "../engine/math";
import type { Bounds } from "../engine/polyline";
import type { Intersection, Shape } from "../engine/segment";
import type { Config } from "../config";
import type { LanguageStrings } from "../ui/i18n";
import type { Unit } from "./units";
import type { DeathReason } from "./constants";
import { SpatialGrid } from "../engine/spatial-grid";
import { Controller } from "../input/controller";
import { SkinManager } from "../skins/skin";
import type { Asset, Skin } from "../skins/skin";
import { NamePool } from "./names";
import { SchemesManager } from "./scoring";
import { Track } from "./track";
import type { ReturnTrail, TrackBaseCrossing } from "./track";
import { Polyline } from "../engine/polyline";
import { areAllies } from "./team";
import { ClassicMode } from "../modes/classic";
import type { GameMode } from "../modes/mode";

/** Game configuration: DEFAULT_CONFIG plus the overrides applied in main.ts. */
export type GameConfig = Config;

/** Payload handed to Game.gameOverCallback when the player's round ends. */
export interface GameResult {
  build: number;
  game: Game;
  /** Fraction (0..1) of the arena owned at death. */
  percent: number;
  score: number;
  newBest: boolean;
  name: string;
  top: number;
  best: number;
  bestPercent: number;
  /** Round duration in ms. */
  time: number;
  kills: number;
  /** PNG data URL of the player's territory, when a DOM is available. */
  image: string | undefined;
  reason: DeathReason;
}

/** Recorder hooked into the update loop (not present in this build). */
export interface GameRecording {
  write(): void;
  duration(): number;
}

/** Replay driver hooked into the update loop (not present in this build). */
export interface GameReplay {
  /** Cycle at which the replay starts. */
  start: number;
  skip?: boolean;
  /** Feeds the next recorded input; false when the replay is over. */
  read(): boolean;
  skipping(): boolean;
  duration(): number;
  currentlyPlaying(): number;
}

/** A queued on-screen notification (achievement tip). */
export interface GameNotification {
  ready: boolean;
  state: number;
  update(dt: number): void;
}

/** Per-frame timing sample kept for the debug graph. */
export interface FrameMetric {
  updateTime: number;
  renderTime: number;
  frameTime: number;
  events: GameEvents;
}

/** Event counters reset every frame. */
export interface GameEvents {
  returns: number;
  kills: number;
}

export interface GameStats {
  fps: number;
  /** Update time. */
  ut: number;
  /** AI time. */
  ait: number;
  /** Spawn time. */
  st: number;
  /** Render time. */
  rt: number;
}

export interface GameTimings {
  updateStartTime: number;
  updateEndTime: number;
  aiStartTime: number;
  aiEndTime: number;
  spawnStartTime: number;
  spawnEndTime: number;
  renderStartTime: number;
  renderEndTime: number;
}

/** Server leaderboard (used for flag shields; not present in this build). */
export interface Leaderboard {
  countries?: { country: string; }[];
}

/** Optional extensions of a flag-based skin manager (not present in this build). */
interface FlagSkinManagerExtras {
  isFlagSkinManager?: boolean;
  shieldSkinAssets?: { get(name: string): Asset; };
}

/** Owner of a shape that a returning track passes through. */
type ShapeOwner = Base | Track;

/** A point where a returning track touches a foreign shape (see handleReturn). */
interface TrackContact {
  /** Null for an ownerless shape (e.g. the arena border polygon). */
  owner: ShapeOwner | null;
  point: Vec2;
  segment: Segment;
  /** Index of the point along the track polyline. */
  index: number;
}

/** A foreign base cut by a returning track (see handleReturn). */
interface BaseCut {
  owner: Base;
  enter: Segment;
  startPoint: Vec2;
  startT: number;
  leave: Segment;
  endPoint: Vec2;
  endT: number;
}

/** A pass of a returning trail through a teammate's separate base (merged after the walk, see mergeFriendlyBase). */
interface FriendlyVisit {
  entryPoint: Vec2;
  /** Index of entryPoint along the trail. */
  entryIndex: number;
  leavePoint: Vec2;
  leaveIndex: number;
}

/** Territory taken from another base during a capture. */
export interface CaptureVictim {
  base: Base;
  poly: Polygon;
}

/** Intersections of one movement step that share the same point. */
interface IntersectionGroup {
  point: Vec2;
  intersections: Intersection[];
}

/** Per-frame view data passed to the renderers (see Game.getRenderContext). */
export interface RenderContext {
  game: Game;
  view: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  viewWidth: number;
  viewHeight: number;
  devicePixelRatio: number;
  /** Screen diagonal relative to the reference resolution. */
  scaler: number;
  /** World -> canvas scale. */
  scale: number;
  /** World point at the center of the view. */
  origin: Vec2;
  pointInView: (point: Vec2, margin?: number) => boolean;
  boundsInView: (item: { bounds: Bounds; }, margin?: number) => boolean;
  calcMult: (landscape: number, portrait: number) => number;
  viewScreenWidth: number;
  viewScreenHeight: number;
  fontSize: number;
  strokeWidth: number;
  backHeight: number;
  uiFont: string;
  padding: number;
  barHeight: number;
  halfBarHeight: number;
  barWidth: number;
  halfBarWidth: number;
}

/** Where to look for a free spawn spot; "near" means around an anchor unit (default: the player). */
export type SpawnZone = "near" | "bounds" | "center" | "random";

/** Options for Game.spawnBot used by team modes. */
export interface SpawnBotOptions {
  /**
   * Team modes: the bot spawns on this teammate (standing in its base), joins its base as a co-host and its
   * team. No spawn spot is searched and no skin is drawn.
   */
  leader?: Unit;
}

export type GameRenderer = (game: Game) => void;

/** Counters of the shared-territory rule paths (team modes only; all stay 0 in classic). */
export interface TeamEvents {
  /** A unit crossed a teammate's trail (vertex shared by both trails). */
  injects: number;
  /** handleCross calls that found at least one loop of a teammate's trail to capture. */
  crosses: number;
  /** Loops captured in a teammate's name by handleCross. */
  crossLoops: number;
  /** handleCross left the teammate standing inside the base with a trail, so it was made home (fix for the original). */
  crossHome: number;
  /** handleCross left the teammate's trail starting off the outline, so it was cut back again (fix for the original). */
  crossRetruncate: number;
  /** Hosts whose trail start a capture had swallowed, cut back by repairTrailStarts (fix for the original). */
  repairedStarts: number;
  /** Returns dropped because a trail end was not a vertex of the base. */
  droppedReturns: number;
  /** Enemy captures that split a shared base in two. */
  splits: number;
  /** Friendly bases merged into the returning unit's base. */
  merges: number;
  /** Friendly merges skipped because the stitched outline was invalid. */
  mergesSkipped: number;
  /** Equal but distinct grid points hit in one step, unified as the original teams build does. */
  unifiedPoints: number;
}

export class Game {
    /** Best score so far; assigned by api.start() right before spawnPlayer (read only for the player's result/HUD). */
    best!: number;
    isTest: boolean | undefined;
    playerDeathCallback: (() => void) | undefined;
    /** Mouse position when a key was last pressed; null once the mouse takes over, deleted in the constructor. */
    keyboard?: { x: number; y: number; } | null;
    tailRecovered: boolean;
    topListChanged: boolean;
    /** Country -> city name lookup (flag mode only; never set in this build). */
    citiesManager: { get(country: string): string; } | undefined;
    /** Assigned by api.ts. */
    renderer: GameRenderer | undefined;
    /** Mode-specific rules (spawning, win condition). Set by createApi; classic by default. */
    mode: GameMode = new ClassicMode();
    rng: Rng;
    build: number;
    config: GameConfig;
    language: LanguageStrings;
    controller: Controller;
    skinManager: SkinManager;
    nameManager: NamePool;
    achievementsProfile: AchievementStore;
    grid: SpatialGrid;
    view: HTMLCanvasElement | null;
    border: Border;
    player: Player | null;
    units: Unit[];
    mouse: Vec2;
    direction: Vec2;
    declare recording?: GameRecording;
    declare replaying?: GameReplay;
    cycle: number;
    seed: number;
    botSpawnLimited: boolean;
    fakeMouse: Vec2 | null;
    labels: FloatingLabel[];
    notifications: GameNotification[];
    scale: number;
    arenaArea: number;
    gameOverCallback: ((result: GameResult) => void) | null;
    visible: boolean;
    stopped: boolean;
    debugView: boolean;
    leaderboard: Leaderboard | null;
    level: number;
    bots: number[];
    debug: boolean;
    debugGraph: boolean;
    spawnSuspend: number;
    particles: Particle[];
    metrics: FrameMetric[];
    currMetric: FrameMetric | null;
    schemesManager: SchemesManager;
    last: number;
    timeAccumulated: number;
    looped: boolean;
    quality: number;
    fpsSequence: number[];
    stats: GameStats;
    timings: GameTimings;
    events: GameEvents;
    teamEvents: TeamEvents = { injects: 0, crosses: 0, crossLoops: 0, crossHome: 0, crossRetruncate: 0, repairedStarts: 0, droppedReturns: 0, splits: 0, merges: 0, mergesSkipped: 0, unifiedPoints: 0 };
    updateParticlesId: number;
    /** Assigned by spawnPlayer; only read in gameOver, which needs a spawned player. */
    startTime!: number;
    /** Player heading quantized to 0..253; assigned at the start of every update(), before any reader runs. */
    angle!: number;
    /** Smoothed camera center; undefined until the first getRenderContext(). */
    origin: Vec2 | undefined;

  constructor(config: GameConfig, view: HTMLCanvasElement | null, space: SpatialGrid, border: Border, skinManager: SkinManager, gameOverCallback: ((result: GameResult) => void) | null, nameManager: NamePool, controller: Controller, language: LanguageStrings, schemesManager: SchemesManager, achievementsProfile: AchievementStore, seed: number) {
    this.isTest = undefined;
    this.playerDeathCallback = undefined;
    this.keyboard = undefined;
    this.tailRecovered = false;
    this.topListChanged = false;
    this.citiesManager = undefined;
    this.renderer = undefined;
    this.rng = createRng(seed);
    this.build = 704;
    this.config = config;
    this.language = language;
    this.controller = controller;
    this.skinManager = skinManager;
    this.nameManager = nameManager;
    this.achievementsProfile = achievementsProfile;
    this.grid = space;
    this.view = view;
    this.border = border;
    this.player = null;
    this.units = [];
    this.mouse = new Vec2();
    this.direction = new Vec2(1, 0);
    this.recording;
    this.replaying;
    this.cycle = 0;
    this.seed = seed;
    this.botSpawnLimited = false;
    delete this.keyboard;
    this.fakeMouse = null;
    this.labels = [];
    this.notifications = [];
    this.scale = config.maxScale;
    this.arenaArea = this.border.polygon.area();
    this.gameOverCallback = gameOverCallback;
    this.visible = false;
    this.stopped = false;
    this.debugView = false;
    this.leaderboard = null;
    this.level = 0;
    this.bots = [0, 0, 0, 0];
    this.debug = false;
    this.debugGraph = false;
    this.spawnSuspend = 0;
    this.particles = [];
    this.metrics = [];
    this.currMetric = null;
    this.schemesManager = schemesManager;
    this.last = 0;
    this.timeAccumulated = 0;
    this.looped = false;
    this.border.polygon.calcPath();
    this.quality = 1;
    this.fpsSequence = [];
    if (view) {
      const onResize = () => {};
      window.addEventListener("resize", onResize, false);
    }
    this.stats = {
      fps: 0,
      ut: 0,
      ait: 0,
      st: 0,
      rt: 0
    };
    this.timings = {
      updateStartTime: 0,
      updateEndTime: 0,
      aiStartTime: 0,
      aiEndTime: 0,
      spawnStartTime: 0,
      spawnEndTime: 0,
      renderStartTime: 0,
      renderEndTime: 0
    };
    this.events = {
      returns: 0,
      kills: 0
    };
    this.updateParticlesId = setInterval(() => {
      this.particles = this.particles.filter(particle => particle.time > 0);
    }, 500);
  }
  stop() {
    this.stopped = true;
    clearInterval(this.updateParticlesId);
    // Teammates share one skin object; release each skin once.
    for (let skin of new Set(this.units.map(unit => unit.skin))) {
      this.skinManager.release(skin);
    }
  }
  addPlayer(player: Player) {
    this.quality = 1;
    this.fpsSequence = [];
    if (this.achievementsProfile) {
      player.achievements = new AchievementsProfile(this.achievementsProfile, "classic");
    }
    this.addUnit(player);
    this.player = player;
    // The original scheduled an ad-tracking pixel here with a random delay. The pixel is gone, but its
    // Math.random() draw is kept so the RNG stream (and the golden sim hash) stays identical.
    Math.random();
    this.debug = player.name === "dratest";
  }
  addUnit(unit: Unit) {
    this.units.push(unit);
  }
  getSpawnPosition(zone: SpawnZone, baseRadius2?: number, near: Unit | null = this.player): Vec2 | undefined {
    const {
      center
    } = this.grid;
    const {
      radius
    } = this.border;
    const {
      baseRadius
    } = this.config;
    let center2 = center;
    if (zone === "near" && !near) {
      return;
    }
    baseRadius2 = baseRadius2 || baseRadius;
    const trackClearanceScale = this.player ? lerp(3, 1, this.player.percent) : 2;
    var baseClearance = baseRadius2 + baseRadius * 2;
    var baseClearanceSq = baseClearance * baseClearance;
    var trackClearance = baseRadius2 + baseRadius * 2 * trackClearanceScale;
    var trackClearanceSq = trackClearance * trackClearance;
    let y;
    switch (zone) {
      case "near":
        y = lerp(baseRadius * 12, baseRadius * 16, Math.random());
        // zone "near" without an anchor returned above.
        center2 = near!.position;
        break;
      case "bounds":
        y = lerp(Math.max(0, radius - (baseRadius2 + baseRadius * 10)), Math.max(0, radius - (baseRadius2 + baseRadius * 4)), Math.random());
        break;
      case "center":
        y = lerp(0, radius / 3, Math.random());
        break;
      default:
        y = lerp(0, Math.max(0, radius - (baseRadius2 + baseRadius)), Math.random());
        break;
    }
    var offset = Vec2.alloc(0, y).rotate(Math.random() * Math.PI * 2);
    var point3 = center2.clone().add(offset);
    offset.release();
    if (point3.distance(center) > radius - (baseRadius2 + baseRadius)) {
      return;
    }
    for (var i = 0; i < this.units.length; i++) {
      var unit = this.units[i];
      if (unit.base.polygon.inside(point3)) {
        return;
      }
      if (unit.base.polygon.simplifiedPoints.some(function (item: Vec2) {
        return point3.distance2(item) < baseClearanceSq;
      })) {
        return;
      }
      if (unit.track.simplifiedPoints.some(function (point: Vec2) {
        return point3.distance2(point) < trackClearanceSq;
      })) {
        return;
      }
    }
    return point3;
  }
  /** Spawns one bot if there is room; returns it, or undefined when no bot was spawned. */
  spawnBot(zone: SpawnZone, { leader }: SpawnBotOptions = {}): Bot | undefined {
    const {
      baseCount,
      baseRadius,
      spawnTimeout,
      botsCount
    } = this.config;
    if (this.botSpawnLimited) {
      if (this.spawnSuspend > 0) {
        return;
      }
      this.spawnSuspend = spawnTimeout * (1 + this.rng());
    }
    if (this.units.length - (this.player ? 1 : 0) >= botsCount) {
      return;
    }
    if (!this.nameManager || !this.nameManager.available()) {
      return;
    }
    if (!leader && (!this.skinManager || !this.skinManager.available())) {
      return;
    }
    const spawnPosition = leader ? leader.position.clone() : this.getSpawnPosition(zone);
    if (!spawnPosition) {
      return;
    }
    const botCountsByType = [0, 0, 0, 0];
    const typeRotations = [[1, 2, 2, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 2, 2, 2, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0], [1, 1, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0]];
    this.units.forEach(unit => {
      if (unit !== this.player) {
        // Every non-player unit is a Bot, and Bot always sets `type`.
        botCountsByType[unit.type!]++;
      }
    });
    this.bots = Object.assign({}, botCountsByType);
    const typeRotation = typeRotations[Math.round(this.level * (typeRotations.length - 1))];
    let rotationIndex = -1;
    while (botCountsByType[typeRotation[++rotationIndex]] > 0) {
      botCountsByType[typeRotation[rotationIndex]]--;
    }
    const type = typeRotation[rotationIndex];
    const name = this.nameManager.get();
    const bot = new Bot(this, type, name, spawnPosition, leader ? leader.base : circlePoints(spawnPosition, baseCount, baseRadius), undefined, this.schemesManager);
    if (leader && leader.team) {
      leader.team.add(bot);
      bot.percent = leader.percent;
    } else {
      bot.setSkin(this.skinManager.get());
    }
    this.addUnit(bot);
    this.bots[type]++;
    return bot;
  }
  spawnPlayer(name: string, skinName: string, extraLife: number) {
    const {
      baseCount,
      baseRadius,
      maxScale,
      minScale,
      botsCount
    } = this.config;
    const removeMiddleUnit = () => {
      if (this.units.length) {
        this.kill(this.units[~~(this.units.length / 2)], undefined, DEATH_REMOVED);
      }
    };
    // Team modes: the player spawns on a teammate standing in its base and shares that base.
    const placement = this.mode.placePlayer?.(this);
    if (placement) {
      const player = new Player(this, name || this.language.defaultPlayerName, placement.position, placement.leader.base, undefined, this.schemesManager);
      placement.leader.team?.add(player);
      player.percent = placement.leader.percent;
      this.addPlayer(player);
      this.mode.onPlayerSpawned(this, player);
      this.scale = maxScale - ~~(player.base.area / this.arenaArea * 20) / 20 * (maxScale - minScale);
      this.startTime = now();
      return;
    }
    if (this.units.length && this.units.length >= botsCount) {
      removeMiddleUnit();
    }
    let position;
    let attempts = 0;
    var baseRadius2 = extraLife ? Math.sqrt(this.arenaArea * extraLife / Math.PI) : baseRadius;
    while (!position) {
      if (attempts++ > 50) {
        attempts = 0;
        removeMiddleUnit();
      }
      position = this.getSpawnPosition("random", baseRadius2);
    }
    const player = new Player(this, name || this.language.defaultPlayerName, position, circlePoints(position, baseCount, baseRadius2), undefined, this.schemesManager);
    const playerSkin = this.skinManager.getPlayerSkin(this.mode.playerSkins ? skinName : "");
    player.setSkin(playerSkin);
    this.addPlayer(player);
    this.mode.onPlayerSpawned(this, player);
    this.scale = maxScale - ~~(player.base.area / this.arenaArea * 20) / 20 * (maxScale - minScale);
    this.startTime = now();
  }
  gameOver(reason: DeathReason) {
    // Callers (kill of the player, the win check in update) only run while a player exists.
    const player = this.player!;
    if (!player.win) {
      let minX = Infinity;
      let maxX = 0;
      let minY = Infinity;
      let maxY = 0;
      player.base.polygon.segments.forEach(segment => {
        const {
          x,
          y
        } = segment.start;
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      });
      const width = maxX - minX;
      const height = maxY - minY;
      const size = Math.max(width, height);
      const vec2 = new Vec2(minX + width / 2, minY + height / 2);
      const imageSize = 500;
      const imageScale = imageSize * 0.95 / size;
      const depth = imageSize / 100;
      let image;
      if (typeof document !== "undefined") {
        const canvas = document.createElement("canvas");
        canvas.width = imageSize;
        canvas.height = imageSize;
        // A fresh canvas always provides a 2D context.
        const ctx = canvas.getContext("2d")!;
        ctx.scale(imageScale, imageScale);
        ctx.translate(imageSize / 2 / imageScale - vec2.x, imageSize / 2 / imageScale - vec2.y);
        ctx.translate(0, depth / imageScale);
        ctx.fillStyle = player.skin.colors.back;
        ctx.fill(player.base.polygon.path);
        ctx.translate(0, depth * -2 / imageScale);
        ctx.fillStyle = player.skin.pattern && player.skin.pattern.pattern || player.skin.colors.main;
        ctx.fill(player.base.polygon.path);
        image = canvas.toDataURL("image/png");
      }
      const result: GameResult = {
        build: this.build,
        game: this,
        percent: player.percent,
        score: player.schemes && player.schemes.result(),
        newBest: player.schemes && player.schemes.result() > this.best,
        name: player.name,
        top: player.rank,
        best: this.best,
        bestPercent: player.bestPercent,
        time: now() - this.startTime,
        kills: player.statistics.kills,
        image: image,
        reason: reason
      };
      if (reason === DEATH_WIN) {
        player.win = true;
      }
      if (player.achievements) {
        player.achievements.finish();
      }
      if (this.playerDeathCallback) {
        this.playerDeathCallback();
      }
      setTimeout(() => {
        if (reason === DEATH_WIN) {
          this.kill(player, undefined, reason);
        }
        this.player = null;
        if (this.gameOverCallback) {
          this.gameOverCallback(result);
        }
      }, reason === DEATH_TRACK_CROSSED || reason === DEATH_EXIT_CAPTURED || reason === DEATH_SURROUNDED ? this.config.enemyKillDelay : this.config.selfKillDelay);
    }
  }
  checkBaseCommits() {
    this.units.forEach(unit => {
      const polygon = unit.base.polygon;
      polygon.segments.forEach(segment => {
        const {
          start,
          end
        } = segment;
        const segment2 = start.segments.find(segment2 => segment2 === segment);
        const segment3 = end.segments.find(segment2 => segment2 === segment);
        if (!segment2 || !segment3) {
          throw new Error("точки сегмента не закоммичены");
        }
      });
    });
  }
  kill(unit: Unit, killer: Unit | undefined, reason: DeathReason) {
    if (unit.death) {
      return;
    }
    if (this.isTest) {
      const reasonNames = ["выигрыш", "самопересечение", "убит об стену", "убит пересечением трека", "убит захватом точки выхода", "убит окружением", "удален системой", "убит откружением столицы", "убит разделением со столицей"];
      console.log(unit.name + " убит" + (killer ? " " + killer.name : "") + " (" + reasonNames[reason] + ")");
    }
    this.events.kills++;
    unit.death = true;
    // Team members share one skin; it goes back to the pool with the last of them.
    if (this.skinManager && !this.units.some(other => other !== unit && other.skin === unit.skin)) {
      this.skinManager.release(unit.skin);
    }
    this.mode.onUnitKilled?.(this, unit, reason);
    unit.team?.remove(unit);
    // The territory outlives the unit while it has other hosts (team modes); classic bases have one host.
    const base = unit.base;
    base.leave(unit);
    const baseRemoved = base.hosts.length === 0;
    if (baseRemoved) {
      this.units.forEach(unit2 => {
        if (unit2 !== unit && unit2.insideBase === base) {
          unit2.insideBase = null;
        }
      });
    }
    if (reason !== DEATH_REMOVED) {
      spawnDeathParticles(unit, null, unit.track.polyline.segments);
      if (baseRemoved) {
        spawnDeathParticles(unit, null, base.polygon.segments);
      }
    }
    unit.track.remove();
    if (baseRemoved) {
      base.remove();
    }
    const index = this.units.findIndex(unit2 => unit2 === unit);
    this.units.splice(index, 1);
    unit.killer = killer;
    if (killer) {
      killer.scores.kills = unit.scores.kills + unit.scores.accumulator;
      if (killer.schemes) {
        killer.schemes.kill(unit, reason);
      }
      if (killer && killer.achievements) {
        killer.achievements.onKill(unit);
      }
      killer.statistics.kills++;
    }
    unit.onScoreChanged();
    if (killer) {
      killer.onScoreChanged();
    }
    if (reason !== DEATH_WIN && unit === this.player) {
      this.gameOver(reason);
    }
  }
  getMovement(dt: number, unit: Unit) {
    const {
      unitSpeed
    } = this.config;
    const result: Segment[] = [];
    const point = unit.movement();
    if (!point) {
      return result;
    }
    point.mulScalar(unitSpeed * dt / 1000);
    const point2 = vecFromAngle(unit.direction);
    let angle = Math.atan2(point2.x * point.y - point.x * point2.y, point2.dot(point));
    point2.release();
    const maxTurn = TAU * dt / 1000 / (unit.smoothness || 1);
    if (Math.abs(angle) > maxTurn) {
      angle = maxTurn * Math.sign(angle);
    }
    unit.direction += angle;
    const step = vecFromAngle(unit.direction).mulScalar(unitSpeed * dt / 1000);
    let segment = new Segment(unit.position, unit.position.clone().add(step));
    step.release();
    let intersections = this.border.intersections(segment);
    while (intersections.length) {
      let hit;
      const vector = segment.vector;
      if (intersections.length === 2) {
        const vector2 = intersections[0].segment.vector;
        let angle = Math.atan2(vector.x * vector2.y - vector2.x * vector.y, vector.dot(vector2));
        hit = angle > 0 ? intersections[0] : intersections[1];
      } else {
        hit = intersections[0];
      }
      const {
        segment: segment2,
        point: point
      } = hit;
      const vector2 = segment2.vector;
      let angle = Math.atan2(vector.x * vector2.y - vector2.x * vector.y, vector.dot(vector2));
      if (angle < 0) {
        break;
      }
      if (!isZero(hit.distance)) {
        const segment2 = new Segment(segment.start, point);
        result.push(segment2);
      }
      segment = new Segment(point, segment.end);
      const vector3 = segment.vector;
      const slide = Vec2.clone(vector2).normalize().mulScalar(vector3.dot(vector2) / vector2.magnitude());
      segment = new Segment(point, point.clone().add(slide));
      slide.release();
      intersections = this.border.intersections(segment);
    }
    result.push(segment);
    return result;
  }
  readInput(dt: number) {
    if (!this.controller) {
      return;
    }
    if (this.controller.pressed()) {
      this.keyboard = Object.assign({}, this.controller.mouse);
      const maxTurn = TAU * dt / 1000;
      if (this.controller.keyboardModeSwitch.mode2) {
        let turn = 0;
        if (this.controller.left) {
          turn = -1;
        }
        if (this.controller.right) {
          turn = 1;
        }
        if (turn) {
          this.direction.rotate(turn * maxTurn);
        }
      } else {
        const vec2 = new Vec2();
        if (this.controller.up) {
          vec2.add(new Vec2(0, -1));
        }
        if (this.controller.down) {
          vec2.add(new Vec2(0, 1));
        }
        if (this.controller.left) {
          vec2.add(new Vec2(-1, 0));
        }
        if (this.controller.right) {
          vec2.add(new Vec2(1, 0));
        }
        if (vec2.magnitude()) {
          let angle = Math.atan2(this.direction.x * vec2.y - vec2.x * this.direction.y, this.direction.x * vec2.x + this.direction.y * vec2.y);
          if (Math.abs(angle) > maxTurn) {
            angle = Math.sign(angle) * maxTurn;
          }
          this.direction.rotate(angle);
        }
      }
    } else if (this.controller.mouse) {
      if (!this.keyboard || this.keyboard.x !== this.controller.mouse.x && this.keyboard.y !== this.controller.mouse.y) {
        this.keyboard = null;
        // A controller (and so mouse input) only exists for a game with a view (see api.ts).
        this.direction = new Vec2(this.controller.mouse.x, this.controller.mouse.y).sub(new Vec2(this.view!.clientWidth / 2, this.view!.clientHeight / 2)).normalize();
      }
    } else if (!this.keyboard && this.controller.lastMouse) {
      this.direction = new Vec2(this.controller.lastMouse.x, this.controller.lastMouse.y).sub(new Vec2(this.view!.clientWidth / 2, this.view!.clientHeight / 2)).normalize();
    }
  }
  prepareAndUpdate(dt: number) {
    if (this.preparing()) {
      let prepareAcceleration = this.config.prepareAcceleration;
      while (this.preparing() && prepareAcceleration > 0) {
        this.update(TICK_MS_X2);
        prepareAcceleration--;
      }
    } else {
      console.log(dt);
      this.update(dt);
    }
  }
  preparing() {
    return this.cycle < this.config.prepareCounter;
  }
  finishPrepare() {
    let targetCycle = this.replaying ? this.replaying.start : this.config.prepareCounter;
    if (this.cycle < targetCycle) {
      console.log("skip cycles to: " + targetCycle);
    }
    while (this.cycle < targetCycle) {
      this.update();
    }
  }
  recoverTail() {
    let player = this.player;
    if (player && player.insideBase == player.base && !player.base.polygon.inside(player.position)) {
      let nearestSegment = player.base.polygon.segments.reduce((acc, segment) => acc.start.distance2(player.position) < segment.start.distance2(player.position) ? acc : segment);
      let delta = nearestSegment.start.clone().sub(player.position);
      let len = delta.magnitude();
      player.position = delta.mulScalar(1 + 1 / len).add(player.position);
      player.track.remove();
      if (this.debug) {
        player.game.alert("Tail is recovered");
        console.log("Recovering tail, cycle: " + this.cycle);
        this.tailRecovered = true;
      }
    }
  }
  update(dt?: number): boolean {
    const {
      trackWidth,
      unitSpeed,
      baseHeight,
      maxScale,
      minScale,
      observerScale
    } = this.config;
    if (this.stopped) {
      return false;
    }
    Vec2.grid = this.grid;
    if (dt == null) {
      dt = 1000 / 60;
    }
    dt += this.rng() * 0.01;
    this.spawnSuspend -= dt;
    if (!this.isTest) {
      this.readInput(dt);
    }
    this.angle = Math.round(Math.atan2(this.direction.y, this.direction.x) / Math.PI * 127 + 254) % 254;
    console.assert(this.angle >= 0 && this.angle < 256);
    if (this.replaying) {
      if (!this.replaying.read()) {
        delete this.replaying;
        this.alert("End of replay", "#ff0000");
        return false;
      }
    }
    if (this.recording) {
      this.recording.write();
    }
    this.recoverTail();
    const {
      player
    } = this;
    this.timings.aiStartTime = now();
    this.units.forEach(unit => unit.update(dt));
    this.timings.aiEndTime = now();
    this.handleUnitMovements(dt);
    this.units.forEach(unit => {
      unit.lastArea = unit.base.area;
    });
    this.units.forEach(unit => {
      const percent = unit.base.area / this.arenaArea;
      unit.percent = percent;
      unit.bestPercent = Math.max(unit.bestPercent, percent);
      unit.scale = lerp(maxScale, minScale, easeOutCubic(~~(percent * 20) / 20));
      unit.viewRange = Math.sqrt(2455780) / 2 / unit.scale * 0.8;
      if (unit.schemes) {
        unit.schemes.update(dt);
      }
      if (unit.labels.length) {
        let vec2 = new Vec2(0, -35);
        const vec22 = new Vec2(0, -10);
        const vec23 = new Vec2(0, -10);
        unit.labels.forEach(label => {
          this.labels.push(new FloatingLabel(label.text, label.color, label.unit, vec2, vec22, label.time, label.fading));
          vec2 = vec2.clone().add(vec23);
        });
        unit.labels = [];
      }
    });
    this.units.sort((a, b) => b.schemes && a.schemes ? b.schemes.scores() - a.schemes.scores() : 0);
    this.units.forEach((unit, index) => {
      unit.rank = index + 1;
    });
    this.labels = this.labels.filter(label => {
      label.update(dt);
      return label.time > 0;
    });
    if (this.notifications.length) {
      const notification = this.notifications[0];
      if (notification.ready) {
        notification.update(dt);
        if (notification.state > 3) {
          this.notifications.shift();
        }
      }
    }
    this.particles.forEach(particle => particle.update(dt));
    if (player) {
      this.level = lerp(this.config.startBotLevel, 1, player.percent);
    } else {
      this.level = this.config.noPlayerBotLevel;
    }
    if (this.config.botLevel !== -1) {
      this.level = this.config.botLevel;
    }
    this.units.forEach(unit => {
      if (unit instanceof Bot) {
        const skill = Math.min(1, Math.max(0, this.level + unit.jitter));
        let {
          botAggroMin,
          botAggroMax,
          botDefMin,
          botDefMax,
          botGreedMin,
          botGreedMax,
          botSafetyMin,
          botSafetyMax
        } = this.config;
        switch (unit.type) {
          case 1:
            botAggroMin *= 1.25;
            botAggroMax *= 1.25;
            break;
          case 2:
            botGreedMin *= 2;
            botGreedMax *= 1.1;
            botSafetyMin *= 0.75;
            botSafetyMax *= 0.75;
            break;
          case 3:
            botAggroMin *= 0.75;
            botAggroMax *= 0.75;
            botGreedMin *= 4;
            botGreedMax *= 1.1;
            botSafetyMin *= 0.5;
            botSafetyMax *= 0.5;
            botDefMin *= 2;
            botDefMax *= 2;
            break;
        }
        unit.aggro = lerp(botAggroMin, botAggroMax, skill);
        unit.greed = lerp(botGreedMin, botGreedMax, skill);
        unit.safety = lerp(botSafetyMin, botSafetyMax, skill);
        unit.defense = lerp(botDefMin, botDefMax, skill);
      }
    });
    if (this.player && this.player.achievements) {
      this.player.achievements.update(this.player, dt, this);
    }
    if (player && player.track.length > this.config.botAttackTrackLength) {
      // `as`: widens the initializer so TS doesn't narrow to null (it can't see the forEach assignment).
      let nearestBot = null as Bot | null;
      let min = Infinity;
      this.units.forEach(unit => {
        if (unit instanceof Bot && !areAllies(unit, player)) {
          let min2 = Infinity;
          player.track.simplifiedPoints.forEach(point => {
            const distSq = point.distance2(unit.position);
            if (distSq < min2) {
              min2 = distSq;
            }
          });
          min2 = Math.sqrt(min2);
          if (min2 < min) {
            nearestBot = unit;
            min = min2;
          }
        }
      });
      if (nearestBot) {
        nearestBot.fsm.change("attack");
      }
    }
    const targetScale = player ? player.scale : observerScale;
    const scaleDelta = targetScale - this.scale;
    this.scale += scaleDelta * dt / 400;
    if (player && this.mode.hasWon(this, player)) {
      player.percent = 1;
      this.gameOver(DEATH_WIN);
    }
    this.timings.spawnStartTime = now();
    this.mode.spawnBots(this, dt);
    this.timings.spawnEndTime = now();
    this.cycle++;
    return true;
  }
  get renderContext(): RenderContext | undefined {
    return this.getRenderContext();
  }
  getRenderContext(): RenderContext | undefined {
    const {
      view
    } = this;
    if (!view) {
      return;
    }
    const {
      font
    } = this.config;
    // The game canvas is only ever used with a 2D context.
    const ctx = view.getContext("2d")!;
    const clientWidth = view.clientWidth;
    const clientHeight = view.clientHeight;
    const viewWidth = ~~(clientWidth * this.quality);
    const viewHeight = ~~(clientHeight * this.quality);
    if (view.width !== viewWidth || view.height !== viewHeight) {
      view.width = viewWidth;
      view.height = viewHeight;
    }
    const {
      devicePixelRatio
    } = window;
    const viewScreenWidth = viewWidth * devicePixelRatio;
    const viewScreenHeight = viewHeight * devicePixelRatio;
    const scaler = Math.sqrt(viewScreenWidth * viewScreenWidth + viewScreenHeight * viewScreenHeight) / Math.sqrt(2455780);
    const scale = this.scale * scaler / devicePixelRatio;
    let point: Vec2;
    if (this.player) {
      point = this.player.position;
      if (this.player.killer && this.config.followKiller) {
        point = this.player.killer.position;
      }
    } else {
      point = this.grid.center;
    }
    if (this.origin && (!this.player || this.player.killer)) {
      const dist = this.origin.distance(point);
      let dist3 = dist / 30;
      const step = point.clone().sub(this.origin).normalize().mulScalar(dist3);
      point = this.origin.add(step);
    }
    this.origin = point.clone();
    const left = point.x - viewWidth / 2 / scale;
    const right = point.x + viewWidth / 2 / scale;
    const top = point.y - viewHeight / 2 / scale;
    const bottom = point.y + viewHeight / 2 / scale;
    const pointInView = (point: Vec2, margin = 0) => inRange(left - margin, right + margin, point.x) && inRange(top - margin, bottom + margin, point.y);
    const boundsInView = (item: { bounds: Bounds; }, margin = 0) => rangeOverlap(item.bounds.left - margin, item.bounds.right + margin, left, right) > 0 && rangeOverlap(item.bounds.top - margin, item.bounds.bottom + margin, top, bottom) > 0;
    const calcMult = (landscape: number, portrait: number) => {
      const landscapeAspect = 16 / 9;
      const portraitAspect = 9 / 16;
      const aspect = clamp(portraitAspect, landscapeAspect, viewScreenWidth / viewScreenHeight);
      const multRange = landscape - portrait;
      const aspectRange = portraitAspect - landscapeAspect;
      const intercept = -(multRange * landscapeAspect + aspectRange * landscape);
      return -(intercept + multRange * aspect) / aspectRange;
    };
    const fontSize = ~~(calcMult(20, 30) * scaler);
    const strokeWidth = this.config.platesStrokeWidth * scaler;
    const backHeight = ~~(scaler * 4);
    const uiFont = fontSize + "px " + font;
    const padding = ~~(scaler * 16);
    const halfBarHeight = ~~(fontSize * 0.75);
    const barHeight = halfBarHeight * 2;
    const barWidth = ~~(viewScreenWidth / calcMult(4, 2.25));
    const halfBarWidth = ~~(barWidth / 2);
    return {
      game: this,
      view: view,
      ctx: ctx,
      viewWidth: viewWidth,
      viewHeight: viewHeight,
      devicePixelRatio: devicePixelRatio,
      scaler: scaler,
      scale: scale,
      origin: point,
      pointInView: pointInView,
      boundsInView: boundsInView,
      calcMult: calcMult,
      viewScreenWidth: viewScreenWidth,
      viewScreenHeight: viewScreenHeight,
      fontSize: fontSize,
      strokeWidth: strokeWidth,
      backHeight: backHeight,
      uiFont: uiFont,
      padding: padding,
      barHeight: barHeight,
      halfBarHeight: halfBarHeight,
      barWidth: barWidth,
      halfBarWidth: halfBarWidth
    };
  }
  updateMetrics(frameTime: number) {
    const {
      stats,
      timings
    } = this;
    const metric = {
      updateTime: timings.updateEndTime - timings.updateStartTime,
      renderTime: timings.renderEndTime - timings.renderStartTime,
      frameTime: frameTime,
      events: this.events
    };
    this.metrics.push(metric);
    if (this.metrics.length > METRICS_HISTORY_LENGTH) {
      this.metrics.shift();
    }
    const smoothing = 0.05;
    stats.fps = lerp(stats.fps, 1000 / frameTime, smoothing);
    stats.ut = lerp(stats.ut, timings.updateEndTime - timings.updateStartTime, smoothing);
    stats.ait = lerp(stats.ait, timings.aiEndTime - timings.aiStartTime, smoothing);
    stats.st = lerp(stats.st, timings.spawnEndTime - timings.spawnStartTime, smoothing);
    stats.rt = lerp(stats.rt, timings.renderEndTime - timings.renderStartTime, smoothing);
    this.fpsSequence.push(stats.fps);
    const lowFps = 25;
    const highFps = 35;
    const veryLowFps = 10;
    const fpsSampleCount = 120;
    const minQuality = 0.5;
    if (this.fpsSequence.length > fpsSampleCount) {
      this.fpsSequence.sort();
      const medianFps = this.fpsSequence[~~(fpsSampleCount / 2)];
      if (medianFps < lowFps) {
        this.quality -= 0.1;
      }
      if (medianFps < veryLowFps) {
        this.quality -= 0.1;
      }
      if (this.quality < minQuality) {
        this.quality = minQuality;
      }
      if (medianFps > highFps) {
        this.quality += 0.1;
      }
      if (this.quality > 1) {
        this.quality = 1;
      }
      this.quality = Math.round(this.quality * 10) / 10;
      this.fpsSequence = [];
    }
    this.events = {
      returns: 0,
      kills: 0
    };
  }
  setLeaderboard(leaderboard: Leaderboard | null) {
    if (leaderboard) {
      this.leaderboard = leaderboard;
      this.changeShields();
    }
  }
  changeShields() {
    // Only called by setLeaderboard right after it assigns a non-null leaderboard.
    const {
      countries: countries
    } = this.leaderboard!;
    if (countries) {
      const goldCountry = countries[0] && countries[0].country;
      const silverCountry = countries[1] && countries[1].country;
      const bronzeCountry = countries[2] && countries[2].country;
      this.units.forEach(unit => {
        const asset = unit.skin.assets.find((asset: Asset) => asset.pool.name === "shields");
        const asset2 = unit.skin.assets.find((asset: Asset) => asset.pool.name === "flags");
        if (asset && asset2) {
          let shieldName = "gray";
          switch (asset2.name) {
            case goldCountry:
              shieldName = "gold";
              break;
            case silverCountry:
              shieldName = "silver";
              break;
            case bronzeCountry:
              shieldName = "bronze";
              break;
          }
          if (asset.name !== shieldName) {
            // TODO(types): Skin has no removeAsset (flag/shield mode only, unreachable in this build)
            (unit.skin as Skin & { removeAsset(asset: Asset): void; }).removeAsset(asset);
            if ("shieldSkinAssets" in this.skinManager) {
              unit.skin.addAsset((this.skinManager as SkinManager & FlagSkinManagerExtras).shieldSkinAssets!.get(shieldName));
            }
          }
        }
      });
    }
  }
  addCity(unit: Unit) {
    // Flag mode only (dead in this build): flag skins always carry a "flags" asset and a citiesManager is set.
    const name = unit.skin.assets.find((asset: Asset) => asset.pool.name === "flags")!.name;
    const city = new City(this.citiesManager!.get(name), false, unit.position.clone(), unit);
    if ((this.skinManager as SkinManager & FlagSkinManagerExtras).isFlagSkinManager) {
      const citySkin = this.skinManager.getCitySkin(name);
      city.skin = citySkin;
    }
    unit.cities.push(city);
  }
  checkSegments(unusedArg?: unknown) {
    let segmentCount = 0;
    this.units.forEach(unit => {
      segmentCount += unit.base.polygon.segments.length;
      segmentCount += unit.track.polyline.segments.length;
    });
    const gridSegmentCounts = this.grid.segmentsCount();
    const count = Object.keys(gridSegmentCounts).length;
  }
  /**
   * `returningUnit` closed `trail` (by default its whole track) back into its base: capture the loop, kill or
   * cut enemies it encloses or crosses. Team modes also pass slices of a teammate's trail (handleCross).
   */
  handleReturn(returningUnit: Unit, trail: ReturnTrail = returningUnit.track) {
    if (returningUnit.death) {
      return;
    }
    this.events.returns++;
    const polylineCopy = trail.polyline.clone();
    const {
      base: base
    } = returningUnit;
    const index = base.polygon.segments.findIndex(segment => segment.start === polylineCopy.start);
    const index2 = base.polygon.segments.findIndex(segment => segment.start === polylineCopy.end);
    if (returningUnit.team) {
      // Team modes (as the original teams build): a trail end that is no longer on the outline captures nothing,
      // and a trail that leaves and re-enters at the same vertex is a self-intersection.
      if (index === -1 || index2 === -1) {
        this.teamEvents.droppedReturns++;
        return;
      }
      if (index === index2) {
        this.kill(returningUnit, undefined, DEATH_SELF_INTERSECT);
        return;
      }
    }
    const startIndex = Math.min(index2, index);
    const endIndex = Math.max(index2, index);
    if (startIndex !== index) {
      polylineCopy.reverse();
    }
    const trackPoints = polylineCopy.points();
    const basePoints = base.polygon.points();
    const removed = basePoints.splice(startIndex, endIndex - startIndex + 1, ...trackPoints);
    removed.shift();
    removed.pop();
    removed.reverse();
    removed.push(...trackPoints);
    const polygon = new Polygon(removed);
    let captured: Polygon;
    if (polygon.signedArea() < 0) {
      captured = new Polygon(basePoints.reverse());
      base.polygon.unsplice(polylineCopy, startIndex, endIndex);
    } else {
      captured = polygon;
      base.polygon.splice(polylineCopy, startIndex, endIndex);
    }
    base.area += captured.area();
    base.polygon.calcPath();
    this.units.filter(unit => unit !== returningUnit && !areAllies(unit, returningUnit)).forEach(item => {
      if (!item.death) {
        if (item.insideBase === item.base && captured.inside(item.position)) {
          this.kill(item, returningUnit, DEATH_SURROUNDED);
        }
        if (item.track.polyline.start && captured.inside(item.track.polyline.start)) {
          this.kill(item, returningUnit, DEATH_EXIT_CAPTURED);
        }
        if (item.cities && item.cities[0] && captured.inside(item.cities[0].position)) {
          this.kill(item, returningUnit, DEATH_CAPITAL_SURROUNDED);
        }
      }
    });
    let openContacts: TrackContact[] = [];
    const segments = trail.polyline.segments;
    const count = segments.length;
    const victims: CaptureVictim[] = [];
    const friendlyVisits = new Map<Base, FriendlyVisit[]>();
    const cutBase = (cut: BaseCut): void => {
      const {
        owner,
        startT,
        endT,
        startPoint,
        endPoint
      } = cut;
      let {
        enter,
        leave
      }: { enter: Segment | undefined; leave: Segment | undefined; } = cut;
      if (enter.shape !== owner.polygon) {
        enter = owner.polygon.segments.find(segment => segment.start === startPoint);
      }
      if (leave.shape !== owner.polygon) {
        leave = owner.polygon.segments.find(segment => segment.start === endPoint);
      }
      if (enter === leave) {
        return;
      }
      const removed = trail.polyline.points().splice(startT, endT - startT + 1);
      const index = owner.polygon.segments.findIndex(segment => segment === enter);
      const index2 = owner.polygon.segments.findIndex(segment => segment === leave);
      const cutStart = Math.min(index2, index);
      const cutEnd = Math.max(index2, index);
      if (cutStart !== index) {
        removed.reverse();
      }
      const points = owner.polygon.points();
      const removed2 = points.splice(cutStart, cutEnd - cutStart + 1, ...removed);
      removed2.shift();
      removed2.pop();
      removed2.push(...removed.slice().reverse());
      const polygon = new Polygon(removed2);
      const polygon2 = new Polygon(points);
      let lost: Polygon;
      // Each host is on the side of the chord where it stands (home) or where its trail starts (outside).
      // Classic has one host, so exactly one side is non-empty.
      const hostsCut = owner.hosts.filter(host => host.insideBase === host.base ? polygon.inside(host.position) : polygon.inside(host.track.polyline.start || host.position));
      const hostsKept = owner.hosts.filter(host => !hostsCut.includes(host));
      if (hostsCut.length && hostsKept.length) {
        this.splitBase(owner, removed2, hostsCut, points, hostsKept);
        return;
      }
      if (hostsCut.length) {
        owner.polygon.right(removed, cutStart, cutEnd);
        lost = polygon2;
      } else {
        owner.polygon.left(removed, cutStart, cutEnd);
        lost = polygon;
      }
      owner.area -= lost.area();
      owner.polygon.calcPath();
      victims.push({
        base: owner,
        poly: lost
      });
      this.units.forEach(unit => {
        if (!owner.hasHost(unit) && unit.insideBase === owner && lost.inside(unit.position)) {
          unit.insideBase = null;
        }
      });
    };
    if (returningUnit.team) {
      // Team modes walk the trail as the original teams build does (visitPoint, L5481-5688): entry into and
      // exit from other bases are re-tested with crossing signs at every trail point, so a trail that leaves
      // my base straight into an adjacent base (no recorded entry) still cuts it.
      let open: { owner: Base; entryPoint: Vec2; entryIndex: number; } | null = null;
      for (let i = 0; i <= count; i++) {
        const nextSegment = segments[i];
        const prevSegment = segments[i - 1];
        const point = nextSegment ? nextSegment.start : prevSegment.end;
        for (const segment of [prevSegment, nextSegment]) {
          if (!segment) {
            continue;
          }
          const byOwner = new Map<Base, Segment[]>();
          point.segments.forEach(segment2 => {
            const owner = segment2.shape?.owner;
            if (owner instanceof Base && owner !== returningUnit.base) {
              byOwner.set(owner, [...(byOwner.get(owner) ?? []), segment2]);
            }
          });
          if (!byOwner.size) {
            continue;
          }
          if (open) {
            const visit: { owner: Base; entryPoint: Vec2; entryIndex: number; } = open;
            const ownerSegments = byOwner.get(visit.owner);
            if (ownerSegments && !(visit.owner.znSum(segment, ownerSegments) < 0)) {
              open = null;
              if (areAllies(visit.owner.unit, returningUnit)) {
                const visits = friendlyVisits.get(visit.owner) ?? [];
                visits.push({ entryPoint: visit.entryPoint, entryIndex: visit.entryIndex, leavePoint: point, leaveIndex: i });
                friendlyVisits.set(visit.owner, visits);
              } else {
                const enter = visit.owner.polygon.segments.find(segment2 => segment2.start === visit.entryPoint);
                const leave = visit.owner.polygon.segments.find(segment2 => segment2.start === point);
                if (enter && leave) {
                  cutBase({ owner: visit.owner, enter, startPoint: visit.entryPoint, startT: visit.entryIndex, leave, endPoint: point, endT: i });
                }
              }
            }
          } else {
            for (const [owner, ownerSegments] of byOwner) {
              if (owner.checkEnemyEntry(segment, point, ownerSegments)) {
                open = { owner, entryPoint: point, entryIndex: i };
                break;
              }
            }
          }
        }
      }
    }
    for (let i = 0; i <= count && !returningUnit.team; i++) {
      const point = i === count ? segments[i - 1].end : segments[i].start;
      // Segments held by a point are committed, so their shape is set.
      // In team modes a trail vertex can be shared with a teammate's trail; only bases are contacts.
      const segments2 = point.segments.filter(segment => segment.shape!.owner !== returningUnit.track && segment.shape!.owner !== returningUnit.base && segment.start === point && (!returningUnit.team || segment.shape!.owner instanceof Base));
      if (segments2.length) {
        let contacts = segments2.map((item): TrackContact => ({
          owner: item.shape!.owner,
          point: point,
          segment: item,
          index: i
        }));
        if (!openContacts.length) {
          const intersection = trail.intersections.find(intersection => intersection.point.equal(point));
          if (!intersection) {
            return false;
          }
          openContacts = contacts.filter(item => {
            const intersections = intersection.intersections.filter((intersection: TrackBaseCrossing) => intersection.base === item.owner);
            if (!intersections.length) {
              return false;
            }
            return intersections[intersections.length - 1].enter;
          });
        } else {
          let matching = openContacts.filter(item => contacts.some(item2 => {
            return item2.owner === item.owner;
          }));
          if (matching.length) {
            const entryContact = matching[0];
            // `matching` only keeps open contacts whose owner also appears in `contacts`.
            const exitContact = contacts.find(item => item.owner === entryContact.owner)!;
            if (!(entryContact.owner instanceof Base)) {
              throw new Error("Это не база");
            }
            // Teammates' territory is never cut; a separate teammate base is merged into mine after the walk.
            if (areAllies(entryContact.owner.unit, returningUnit)) {
              const visits = friendlyVisits.get(entryContact.owner) ?? [];
              visits.push({
                entryPoint: entryContact.point,
                entryIndex: entryContact.index,
                leavePoint: exitContact.point,
                leaveIndex: exitContact.index
              });
              friendlyVisits.set(entryContact.owner, visits);
            } else {
              cutBase({
                owner: entryContact.owner,
                enter: entryContact.segment,
                startPoint: entryContact.point,
                startT: entryContact.index,
                leave: exitContact.segment,
                endPoint: exitContact.point,
                endT: exitContact.index
              });
            }
            const intersection = trail.intersections.find(intersection => intersection.point.equal(point));
            // The original assumed a crossing is always recorded here and threw otherwise.
            const intersections = intersection ? intersection.intersections.filter((intersection: TrackBaseCrossing) => intersection.base === entryContact.owner) : [];
            if (intersections.length === 1 || intersections.at(-1)?.enter === false) {
              contacts = contacts.filter(item => item.owner !== entryContact.owner);
            }
          }
          openContacts = contacts;
        }
      }
    }
    if (friendlyVisits.size) {
      const trailPoints = trail.polyline.points();
      friendlyVisits.forEach((visits, owner) => this.mergeFriendlyBase(returningUnit, owner, visits, trailPoints));
    }
    // Snapshot: in team modes handleCross below can kill enemies (captures in a teammate's name).
    this.units.slice().forEach(unit => {
      if (returningUnit !== unit && !unit.death && captured.inside(unit.position)) {
        unit.insideBase = returningUnit.base;
        // A teammate sharing my base that the capture swallowed is home: its loops are captured, its trail dropped.
        if (areAllies(unit, returningUnit) && returningUnit.base.hasHost(unit)) {
          this.handleCross(unit);
          unit.insideBase = unit.base;
          unit.track.remove();
        }
      }
    });
    const increment = (returningUnit.base.area - returningUnit.lastArea) / this.arenaArea;
    if (returningUnit.schemes) {
      returningUnit.schemes.comeback({
        increment: increment,
        rise: captured,
        victims: victims,
        game: this
      });
    }
  }
  /**
   * Team modes: an enemy chord cut `owner` with hosts on both sides. Both pieces survive as separate bases of
   * the same team, each keeping the hosts on its side (teams L5554-5598). Nothing is lost.
   */
  splitBase(owner: Base, cutPoints: Vec2[], hostsCut: Unit[], keptPoints: Vec2[], hostsKept: Unit[]) {
    owner.remove();
    const baseA = new Base(hostsCut[0], cutPoints);
    const baseB = new Base(hostsKept[0], keptPoints);
    const assign = (base: Base, hosts: Unit[]) => {
      base.hosts = hosts;
      hosts.forEach(host => {
        host.base = base;
        if (host.insideBase === owner) {
          host.insideBase = base;
        }
      });
    };
    assign(baseA, hostsCut);
    assign(baseB, hostsKept);
    owner.hosts = [];
    this.units.forEach(unit => {
      if (unit.insideBase === owner) {
        unit.insideBase = baseA.polygon.inside(unit.position) ? baseA : baseB;
      }
    });
    this.teamEvents.splits++;
  }
  /**
   * Team modes: `returningUnit`'s trail passed through `owner`, a separate base of its own team (left over from
   * a split). Stitch `owner`'s outline into my base where my trail crossed it, then move its hosts into my base
   * (teams L5689-5827). The stitched outline is checked before it is committed; an invalid one is skipped.
   */
  mergeFriendlyBase(returningUnit: Unit, owner: Base, visits: FriendlyVisit[], points: Vec2[]) {
    const base = returningUnit.base;
    if (owner === base || !owner.hosts.length) {
      return;
    }
    const skip = () => {
      this.teamEvents.mergesSkipped++;
    };
    interface Mark { point: Vec2; ownerIndex: number; trackIndex: number; entry: boolean; }
    const marks: Mark[] = [];
    const myIndexes: number[] = [];
    const ownerIndexes = visits.map(visit => [owner.polygon.findSegment(visit.entryPoint), owner.polygon.findSegment(visit.leavePoint)]);
    for (let i = 0; i < visits.length; i++) {
      const visit = visits[i];
      const [entryOwnerIndex, leaveOwnerIndex] = ownerIndexes[i];
      marks.push({ point: visit.entryPoint, ownerIndex: entryOwnerIndex, trackIndex: visit.entryIndex, entry: true });
      marks.push({ point: visit.leavePoint, ownerIndex: leaveOwnerIndex, trackIndex: visit.leaveIndex, entry: false });
      myIndexes.push(base.polygon.findSegment(visit.entryPoint), base.polygon.findSegment(visit.leavePoint));
    }
    if (marks.some(mark => mark.ownerIndex === -1) || myIndexes.some(index => index === -1)) {
      return skip();
    }
    marks.sort((a, b) => a.ownerIndex - b.ownerIndex);
    const first = visits[0];
    const last = visits[visits.length - 1];
    let trail = points.slice();
    let entryOwnerIndex = ownerIndexes[0][0];
    let leaveOwnerIndex = ownerIndexes[visits.length - 1][1];
    let leavePoint = last.leavePoint;
    if (base.polygon.inside(owner.polygon.segments[entryOwnerIndex].end)) {
      entryOwnerIndex = ownerIndexes[visits.length - 1][1];
      leaveOwnerIndex = ownerIndexes[0][0];
      leavePoint = first.entryPoint;
      trail = trail.reverse();
      const count = trail.length;
      marks.forEach(mark => {
        mark.entry = !mark.entry;
        mark.trackIndex = count - mark.trackIndex - 1;
      });
    }
    const ring = marks.slice();
    for (let turns = 0; ring[0].ownerIndex !== entryOwnerIndex; turns++) {
      if (turns > ring.length) {
        return skip();
      }
      ring.push(ring.shift()!);
    }
    const ownerCount = owner.polygon.segments.length;
    const merged: Vec2[] = [];
    let guard = 0;
    for (let i = 0; i < ring.length - 1; i++) {
      if (++guard > ring.length * 4) {
        return skip();
      }
      const mark = ring[i];
      if (mark.ownerIndex === leaveOwnerIndex) {
        break;
      }
      if (mark.entry) {
        // Follow the friendly outline to the next mark.
        for (let ownerIndex = mark.ownerIndex, steps = 0; ownerIndex !== ring[i + 1].ownerIndex; steps++) {
          if (steps > ownerCount) {
            return skip();
          }
          merged.push(owner.polygon.segments[ownerIndex].start);
          if (++ownerIndex === ownerCount) {
            ownerIndex = 0;
          }
        }
      } else {
        // Follow my trail to the next mark along it.
        const { trackIndex } = mark;
        let min = Infinity;
        let nextMark = -1;
        ring.forEach((item, index) => {
          if (trackIndex < item.trackIndex && item.trackIndex < min) {
            min = item.trackIndex;
            nextMark = index;
          }
        });
        if (nextMark === -1) {
          return skip();
        }
        for (let trackIndex2 = trackIndex; trackIndex2 < min; trackIndex2++) {
          merged.push(trail[trackIndex2]);
        }
        i = nextMark - 1;
      }
    }
    merged.push(leavePoint);
    myIndexes.sort((a, b) => a - b);
    const spliceFrom = myIndexes[0];
    const spliceTo = myIndexes[myIndexes.length - 1];
    const fromPoint = base.polygon.segments[spliceFrom].start;
    const toPoint = base.polygon.segments[spliceTo].start;
    if (merged[0] !== fromPoint || merged[merged.length - 1] !== toPoint) {
      if (merged[0] === toPoint && merged[merged.length - 1] === fromPoint) {
        merged.reverse();
      } else {
        return skip();
      }
    }
    const mergedSegments: Segment[] = [];
    for (let i = 0; i < merged.length - 1; i++) {
      if (merged[i] !== merged[i + 1]) {
        mergedSegments.push(new Segment(merged[i], merged[i + 1]));
      }
    }
    const oldArea = base.polygon.area();
    const removed = base.polygon.segments.splice(spliceFrom, spliceTo - spliceFrom, ...mergedSegments);
    // Accept only an outline that contains both old outlines (so it is their union, no overlap left behind).
    const newArea = base.polygon.area();
    const contains = (polygon: Polygon) => polygon.segments.every(segment => base.polygon.inside(segment.start));
    if (newArea + 1e-6 < Math.max(oldArea, owner.area) || newArea > oldArea + owner.area + 1 || !contains(owner.polygon) || !removed.every(segment => base.polygon.inside(segment.start))) {
      base.polygon.segments.splice(spliceFrom, mergedSegments.length, ...removed);
      return skip();
    }
    mergedSegments.forEach(segment => segment.commit(base.polygon));
    removed.forEach(segment => segment.remove());
    owner.remove();
    base.calcArea();
    base.polygon.calcPath();
    this.units.forEach(unit => {
      if (unit.insideBase === owner) {
        unit.insideBase = base;
      }
    });
    owner.hosts.forEach(host => {
      host.base = base;
      base.hosts.push(host);
    });
    owner.hosts = [];
    base.hosts.forEach(host => {
      if (host !== returningUnit) {
        if (base.polygon.inside(host.position)) {
          host.insideBase = base;
          host.track.remove();
        }
        host.track.truncateToBase();
      }
    });
    this.teamEvents.merges++;
  }
  /**
   * Team modes: `mate` shares my base and our trails share vertices that my capture just put on the outline.
   * Capture, in the mate's name, every loop of its trail that leaves the base and comes back, then cut its trail
   * back to the outline (teams L5355-5416). Recurses into the teammates it had crossed, except `by`.
   */
  handleCross(mate: Unit, by?: Unit, depth = 0) {
    if (mate.death || depth > 32) {
      return;
    }
    const { base } = mate;
    const { polyline } = mate.track;
    const points = polyline.points();
    const contacts: { point: Vec2; index: number; segments: Segment[]; }[] = [];
    points.forEach((point, index) => {
      const baseSegments = point.segments.filter(segment => segment.shape === base.polygon);
      if (baseSegments.length) {
        contacts.push({ point, index, segments: baseSegments });
      }
    });
    let expectLeave = true;
    let loopStart = 0;
    const loops: [number, number][] = [];
    contacts.forEach(contact => {
      let from = points[contact.index];
      let to = points[contact.index + 1];
      if (!to) {
        from = points[contact.index - 1];
        to = points[contact.index];
      }
      if (!from || !to) {
        return;
      }
      const movement = new Segment(from, to);
      if (expectLeave) {
        if (base.checkSelfLeave(movement, contact.point, contact.segments)) {
          loopStart = contact.index;
          expectLeave = false;
        }
      } else if (base.checkSelfEntry(movement, contact.segments)) {
        loops.push([loopStart, contact.index]);
        expectLeave = true;
      }
    });
    if (!loops.length) {
      mate.track.truncateToBase();
      return;
    }
    this.teamEvents.crosses++;
    const crossed = mate.track.crossedTeammates();
    const subTrails = loops.map(([from, to]): ReturnTrail => {
      const sub = new Polyline();
      sub.segments = polyline.segments.slice(from, to);
      sub.start = points[from];
      sub.end = points[to];
      const loopPoints = points.slice(from, to + 1);
      return { polyline: sub, intersections: mate.track.intersections.filter(intersection => loopPoints.includes(intersection.point)) };
    });
    // Truncate BEFORE replaying (as the original): a nested handleCross on this mate (reached through the
    // replayed captures) then only sees the trail beyond the outline, not the loops being captured.
    mate.track.truncateToBase();
    subTrails.forEach(sub => {
      this.teamEvents.crossLoops++;
      this.handleReturn(mate, sub);
    });
    if (mate.death) {
      return;
    }
    // Fix for the original: a later loop's capture can remove the vertex the trail was cut back to, leaving a
    // trail that starts inside the base (its next return is then silently dropped). Re-check after replaying.
    const { start } = mate.track.polyline;
    if (mate.base.polygon.inside(mate.position)) {
      if (start && by) {
        this.teamEvents.crossHome++;
      }
      mate.insideBase = mate.base;
      mate.track.remove();
    } else if (start && !mate.base.polygon.hasPoint(start)) {
      this.teamEvents.crossRetruncate++;
      mate.track.truncateToBase();
    }
    crossed.forEach(next => {
      if (next !== by) {
        this.handleCross(next, mate, depth + 1);
      }
    });
  }
  /**
   * Team modes, after a return and its handleCross chain: a capture can swallow the outline vertex another host's
   * trail starts at (the original skips recursing back into `by`, so its trail then starts inside the base and
   * its next return is silently dropped). Cut such trails back to the outline, or make the host home.
   */
  repairTrailStarts(base: Base) {
    base.hosts.slice().forEach(host => {
      const start = () => host.track.polyline.start;
      if (host.death || !start() || base.polygon.hasPoint(start()!)) {
        return;
      }
      this.teamEvents.repairedStarts++;
      this.handleCross(host);
      if (host.death || host.base !== base) {
        return;
      }
      if (base.polygon.inside(host.position)) {
        host.insideBase = base;
        host.track.remove();
      }
    });
  }
  render() {
    if (this.renderer) {
      this.renderer(this);
    }
  }
  handleUnitMovements(dt: number) {
    this.units.slice().forEach(unit => {
      if (unit.death) {
        return;
      }
      let movement = this.getMovement(dt, unit);
      while (movement.length) {
        if (unit.death) {
          return;
        }
        const step = movement.shift()!;
        const intersections = this.grid.intersections(step);
        const pointGroups: IntersectionGroup[] = [];
        intersections.forEach(intersection => {
          const index = pointGroups.findIndex(group => group.point.equal(intersection.point));
          if (index === -1) {
            pointGroups.push({
              point: intersection.point,
              intersections: [intersection]
            });
          } else {
            if (intersection.point !== pointGroups[index].point) {
              if (intersection.point.cell) {
                if (pointGroups[index].point.cell) {
                  if (!unit.team) {
                    throw new Error("Бывает ли такое?");
                  }
                  // Team modes: teammates that spawned on one spot can lay equal but distinct vertices. The
                  // original teams build (updateState closeGroup) unifies the hits onto the first grid point.
                  intersection.point = pointGroups[index].point;
                  this.teamEvents.unifiedPoints++;
                } else {
                  pointGroups[index].point = intersection.point;
                  pointGroups[index].intersections.forEach(intersection2 => {
                    intersection2.point = intersection.point;
                  });
                }
              } else {
                intersection.point = pointGroups[index].point;
              }
            }
            pointGroups[index].intersections.push(intersection);
          }
        });
        intersections.forEach(intersection => {
          intersection.distance = step.start.distance2(intersection.point);
        });
        intersections.sort((a, b) => a.distance - b.distance);
        const distanceGroups: Intersection[][] = [];
        let currentGroup: Intersection[] | null = null;
        let currentDistance = -1;
        intersections.forEach(intersection => {
          if (!nearlyEqual(intersection.distance, currentDistance)) {
            currentGroup = [];
            currentDistance = intersection.distance;
            distanceGroups.push(currentGroup);
          }
          // Distances are >= 0, so the first iteration never matches -1 and always creates a group.
          currentGroup!.push(intersection);
        });
        distanceGroups.forEach(group => {
          const shapes: Shape[] = [];
          group.forEach(intersection => {
            const {
              shape
            } = intersection.segment;
            if (shape && shapes.indexOf(shape) === -1) {
              shapes.push(shape);
            }
          });
          while (shapes.length) {
            const index = shapes.findIndex(shape => shape.owner === unit.insideBase);
            if (index > 0) {
              const swapped = shapes[0];
              shapes[0] = shapes[index];
              shapes[index] = swapped;
            }
            // Shapes in the grid are unit bases and tracks, which always have an owner.
            const index2 = shapes.findIndex(shape => shape.owner!.isTrack);
            if (index2 > 0) {
              const swapped = shapes[0];
              shapes[0] = shapes[index2];
              shapes[index2] = swapped;
            }
            const currentShape = shapes.shift()!;
            const shapeIntersections: Intersection[] = [];
            group.forEach(intersection => {
              if (intersection.segment.shape === currentShape) {
                shapeIntersections.push(intersection);
              }
            });
            while (!unit.death && shapeIntersections.length) {
              shapeIntersections.sort((a, b) => {
                if (unit.insideBase) {
                  return b.zn - a.zn;
                } else {
                  return a.zn - b.zn;
                }
              });
              const nextIntersection = shapeIntersections.shift()!;
              if (nextIntersection.segment.shape && !currentShape.owner!.unit.death) {
                currentShape.owner!.handleIntersect(nextIntersection, unit, step);
              }
            }
          }
        });
        if (unit.death) {
          return;
        }
        const {
          end
        } = step;
        if (unit.insideBase !== unit.base) {
          unit.track.add(end);
        }
        unit.position = end;
        if (this.visible && !movement.length && unit.insideBase && unit.insideBase !== unit.base) {
          let trailParticle = Particle.nom(unit, step, this.config.trackWidth);
          this.particles.push(trailParticle);
        }
      }
    });
  }
  isPlayer(unit: Unit) {
    return unit === this.player;
  }
  alert(text: string, color?: string) {
    this.labels.push(new FloatingLabel(text, color || "#000000", this.player));
  }
  loop() {
    let time = now();
    if (this.stopped) {
      return;
    }
    if (!this.debugView && (this.visible || this.cycle < this.config.prepareCounter)) {
      this.looped = true;
      if (this.last == 0) {
        this.last = time;
      }
      let frameTime = time - this.last;
      if (frameTime < 1) {
        frameTime = 1;
      }
      this.updateMetrics(frameTime);
      if (frameTime > 10000) {
        frameTime = 10000;
      }
      this.timings.updateStartTime = now();
      if (this.replaying || this.recording) {
        if (this.cycle < this.config.prepareCounter + 120 && frameTime > 100) {
          frameTime = 100;
        }
        if (frameTime > TICK_MS * 0.9 && frameTime < TICK_MS * 1.1) {
          frameTime = TICK_MS;
        }
        this.timeAccumulated += frameTime;
        if (this.preparing()) {
          this.prepareAndUpdate(TICK_MS);
          this.timeAccumulated = 0;
        } else if (this.replaying && this.replaying.skip && this.replaying.skipping()) {
          let prepareAcceleration = this.config.prepareAcceleration;
          while (this.replaying && this.replaying.skipping() && prepareAcceleration-- > 0) {
            this.update(TICK_MS);
          }
          this.timeAccumulated = 0;
        } else {
          if (this.timeAccumulated > TICK_MS * 10) {
            this.timeAccumulated = TICK_MS * 10;
          }
          while (this.timeAccumulated >= TICK_MS) {
            this.timeAccumulated -= TICK_MS;
            this.update(TICK_MS);
          }
        }
      } else if (this.visible) {
        const maxStep = TICK_MS * 2;
        while (frameTime > 0) {
          const stepTime = frameTime <= maxStep ? frameTime : frameTime < maxStep * 2 ? frameTime / 2 + Math.random() : maxStep + Math.random();
          this.update(stepTime);
          frameTime -= stepTime;
        }
      } else {
        this.prepareAndUpdate(frameTime);
      }
      this.timings.updateEndTime = now();
    }
    this.timings.renderStartTime = now();
    if (this.visible) {
      this.render();
    }
    this.timings.renderEndTime = now();
    this.last = time;
    requestAnimationFrame(timestamp => this.loop());
  }
}
