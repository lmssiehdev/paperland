import { TAU, _0xd09b08, clamp, createRng, easeOutCubic, inRange, isZero, lerp, nearlyEqual, now, rangeOverlap, vecFromAngle } from "../engine/math";
import { Polygon, circlePoints } from "../engine/polygon";
import { Segment } from "../engine/segment";
import { Vec2 } from "../engine/vec2";
import { AchievementsProfile, AchievementStore } from "./achievements";
import { Base } from "./base";
import { City } from "./city";
import { DEATH_CAPITAL_SURROUNDED, DEATH_EXIT_CAPTURED, DEATH_REMOVED, DEATH_SURROUNDED, DEATH_TRACK_CROSSED, DEATH_WIN, TICK_MS, TICK_MS_X2 } from "./constants";
import { _0x24884b } from "./domain-lock";
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

/** Legacy / analytics globals touched by the game. */
declare global {
  interface Window {
    /** Google Analytics command queue (also declared, identically, in game/achievements.ts). */
    ga?: (...args: unknown[]) => void;
    /** Last results set by the host page, consumed by Game.post(). */
    paper2_results?: Paper2Results;
    playerId?: number | string;
  }
  interface Navigator {
    /** Legacy IE. */
    userLanguage?: string;
    /** Legacy IE. */
    browserLanguage?: string;
  }
}

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

/** Shape of window.paper2_results read by Game.post(). */
export interface Paper2Results {
  build?: number;
  top?: number;
  score: number;
  bestPercent?: number;
  time: number;
  kills: number;
  reason?: number;
  scores?: { accumulator?: number; kills?: number; };
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

/** Debug/autopilot hook checked on the player; never declared on Unit (always undefined in this build). */
interface DebugMoveTo {
  moveTo?: unknown;
}

/** Owner of a shape that a returning track passes through. */
type ShapeOwner = Base | Track;

/** A point where a returning track touches a foreign shape (see handleReturn). */
interface TrackContact {
  owner: ShapeOwner;
  point: Vec2;
  segment: Segment;
  /** Index of the point along the track polyline. */
  index: number;
}

/**
 * One entry of Track.intersections[i].intersections (see Track.intersect).
 * TODO(types): should be exported from game/track.ts once Track.intersections is typed.
 */
interface TrackIntersectionRecord {
  intersection: Intersection;
  base: ShapeOwner;
  enter: boolean;
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

/** Spawn area selector for getSpawnPosition / spawnBot. */
export type SpawnZone = "player" | "bounds" | "center" | "random";

export type GameRenderer = (game: Game) => void;

export class Game {
    best: number;
    isTest: boolean;
    playerDeathCallback: () => void;
    keyboard: { x: number; y: number; } | null;
    tailRecovered: boolean;
    topListChanged: boolean;
    /** Country -> city name lookup (flag mode only; never set in this build). */
    citiesManager: { get(country: string): string; };
    renderer: GameRenderer;
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
    /** Quality levels already reported to analytics, keyed "q5".."q9". */
    qualityEventsPending: Record<string, boolean>;
    stats: GameStats;
    timings: GameTimings;
    events: GameEvents;
    updateParticlesId: number;
    startTime: number;
    /** Player heading quantized to 0..253 (see update). */
    angle: number;
    /** Smoothed camera center. */
    origin: Vec2;

  constructor(config: GameConfig, view: HTMLCanvasElement | null, space: SpatialGrid, border: Border, skinManager: SkinManager, gameOverCallback: ((result: GameResult) => void) | null, nameManager: NamePool, controller: Controller, language: LanguageStrings, schemesManager: SchemesManager, achievementsProfile: AchievementStore, seed: number) {
    this.best = undefined;
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
    this.qualityEventsPending = {
      q9: true,
      q8: true,
      q7: true,
      q6: true,
      q5: true
    };
    if (view) {
      const _0x3a5b55 = () => {};
      window.addEventListener("resize", _0x3a5b55, false);
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
    for (let unit of this.units) {
      this.skinManager.release(unit.skin);
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
    {
      setTimeout(() => {
        const img = document.createElement("img");
        img.src = "https://gameads.io/adspixel.png";
      }, (2 + Math.random()) * 60000);
    }
    this.debug = player.name === "dratest";
  }
  addUnit(unit: Unit) {
    this.units.push(unit);
  }
  getSpawnPosition(zone: SpawnZone, baseRadius2?: number): Vec2 | undefined {
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
    if (zone === "player" && !this.player) {
      return;
    }
    baseRadius2 = baseRadius2 || baseRadius;
    const _0x29c8d5 = this.player ? lerp(3, 1, this.player.percent) : 2;
    var _0x4a6a2e = baseRadius2 + baseRadius * 2;
    var _0x513981 = _0x4a6a2e * _0x4a6a2e;
    var _0x27d25e = baseRadius2 + baseRadius * 2 * _0x29c8d5;
    var _0x2b6b9f = _0x27d25e * _0x27d25e;
    let y;
    switch (zone) {
      case "player":
        y = lerp(baseRadius * 12, baseRadius * 16, Math.random());
        center2 = this.player.position;
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
    var _0x78d0cb = Vec2.alloc(0, y).rotate(Math.random() * Math.PI * 2);
    var point3 = center2.clone().add(_0x78d0cb);
    _0x78d0cb.release();
    if (point3.distance(center) > radius - (baseRadius2 + baseRadius)) {
      return;
    }
    for (var i = 0; i < this.units.length; i++) {
      var unit = this.units[i];
      if (unit.base.polygon.inside(point3)) {
        return;
      }
      if (unit.base.polygon.simplifiedPoints.some(function (item: Vec2) {
        return point3.distance2(item) < _0x513981;
      })) {
        return;
      }
      if (unit.track.simplifiedPoints.some(function (point: Vec2) {
        return point3.distance2(point) < _0x2b6b9f;
      })) {
        return;
      }
    }
    return point3;
  }
  spawnBot(zone: SpawnZone) {
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
    if (!this.skinManager || !this.skinManager.available()) {
      return;
    }
    const spawnPosition = this.getSpawnPosition(zone);
    if (!spawnPosition) {
      return;
    }
    const botCountsByType = [0, 0, 0, 0];
    const typeRotations = [[1, 2, 2, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 2, 2, 2, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0], [1, 1, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0]];
    this.units.forEach(unit => {
      if (unit !== this.player) {
        botCountsByType[unit.type]++;
      }
    });
    this.bots = _0x24884b({}, botCountsByType);
    const typeRotation = typeRotations[Math.round(this.level * (typeRotations.length - 1))];
    let rotationIndex = -1;
    while (botCountsByType[typeRotation[++rotationIndex]] > 0) {
      botCountsByType[typeRotation[rotationIndex]]--;
    }
    const type = typeRotation[rotationIndex];
    const name = this.nameManager.get();
    const bot = new Bot(this, type, name, spawnPosition, circlePoints(spawnPosition, baseCount, baseRadius), undefined, this.schemesManager);
    const skin = this.skinManager.get();
    bot.setSkin(skin);
    this.addUnit(bot);
    this.bots[type]++;
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
    const playerSkin = this.skinManager.getPlayerSkin(skinName);
    player.setSkin(playerSkin);
    this.addPlayer(player);
    this.scale = maxScale - ~~(player.base.area / this.arenaArea * 20) / 20 * (maxScale - minScale);
    this.startTime = now();
  }
  gameOver(reason: DeathReason) {
    const {
      player
    } = this;
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
      let _0x149dc6;
      if (typeof document !== "undefined") {
        const canvas = document.createElement("canvas");
        canvas.width = imageSize;
        canvas.height = imageSize;
        const ctx = canvas.getContext("2d");
        ctx.scale(imageScale, imageScale);
        ctx.translate(imageSize / 2 / imageScale - vec2.x, imageSize / 2 / imageScale - vec2.y);
        ctx.translate(0, depth / imageScale);
        ctx.fillStyle = player.skin.colors.back;
        ctx.fill(player.base.polygon.path);
        ctx.translate(0, depth * -2 / imageScale);
        ctx.fillStyle = player.skin.pattern && player.skin.pattern.pattern || player.skin.colors.main;
        ctx.fill(player.base.polygon.path);
        _0x149dc6 = canvas.toDataURL("image/png");
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
        image: _0x149dc6,
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
    if (this.skinManager) {
      this.skinManager.release(unit.skin);
    }
    this.units.forEach(unit2 => {
      if (unit2 !== unit && unit2.insideBase === unit.base) {
        unit2.insideBase = null;
      }
    });
    if (reason !== DEATH_REMOVED) {
      spawnDeathParticles(unit, null, unit.track.polyline.segments);
      spawnDeathParticles(unit, null, unit.base.polygon.segments);
    }
    unit.track.remove();
    unit.base.remove();
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
        this.direction = new Vec2(this.controller.mouse.x, this.controller.mouse.y).sub(new Vec2(this.view.clientWidth / 2, this.view.clientHeight / 2)).normalize();
      }
    } else if (!this.keyboard && this.controller.lastMouse) {
      this.direction = new Vec2(this.controller.lastMouse.x, this.controller.lastMouse.y).sub(new Vec2(this.view.clientWidth / 2, this.view.clientHeight / 2)).normalize();
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
      {
        if (!(player as Player & DebugMoveTo).moveTo) {
          return;
        }
      }
      let nearestSegment = player.base.polygon.segments.reduce((acc, segment) => acc.start.distance2(player.position) < segment.start.distance2(player.position) ? acc : segment);
      let delta = nearestSegment.start.clone().sub(player.position);
      let len = delta.magnitude();
      player.position = delta.mulScalar(1 + 1 / len).add(player.position);
      player.track.remove();
      if (this.debug) {
        player.game.alert("Tail is recovered");
        console.log("Recovering tail, cycle: " + this.cycle);
        this.tailRecovered = true;
      } else if (window.ga) {
        window.ga("send", "event", "error", "tailRecovered");
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
      let nearestBot: Bot | null = null;
      let min = Infinity;
      this.units.forEach(unit => {
        if (unit instanceof Bot) {
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
    if (player && player.percent > 0.9999) {
      player.percent = 1;
      this.gameOver(DEATH_WIN);
    }
    this.timings.spawnStartTime = now();
    for (let i = 0; i < this.config.nearPlayerBotSpawnCount; i++) {
      this.spawnBot("player");
    }
    this.spawnBot("center");
    this.spawnBot(this.rng() > 0.3 ? "bounds" : "random");
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
    const ctx = view.getContext("2d");
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
      const _0x3475d4 = 16 / 9;
      const _0x5e288c = 9 / 16;
      const _0x158e1e = clamp(_0x5e288c, _0x3475d4, viewScreenWidth / viewScreenHeight);
      const _0x174801 = landscape - portrait;
      const _0x5bf426 = _0x5e288c - _0x3475d4;
      const _0x531332 = -(_0x174801 * _0x3475d4 + _0x5bf426 * landscape);
      return -(_0x531332 + _0x174801 * _0x158e1e) / _0x5bf426;
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
    if (this.metrics.length > _0xd09b08) {
      this.metrics.shift();
    }
    const smoothing = 0.05;
    stats.fps = lerp(stats.fps, 1000 / frameTime, smoothing);
    stats.ut = lerp(stats.ut, timings.updateEndTime - timings.updateStartTime, smoothing);
    stats.ait = lerp(stats.ait, timings.aiEndTime - timings.aiStartTime, smoothing);
    stats.st = lerp(stats.st, timings.spawnEndTime - timings.spawnStartTime, smoothing);
    stats.rt = lerp(stats.rt, timings.renderEndTime - timings.renderStartTime, smoothing);
    this.fpsSequence.push(stats.fps);
    const _0x2fbf93 = 25;
    const _0x48c44b = 35;
    const _0x2a54ee = 10;
    const _0x293934 = 120;
    const _0x3636ac = 0.5;
    if (this.fpsSequence.length > _0x293934) {
      this.fpsSequence.sort();
      const medianFps = this.fpsSequence[~~(_0x293934 / 2)];
      if (medianFps < _0x2fbf93) {
        this.quality -= 0.1;
      }
      if (medianFps < _0x2a54ee) {
        this.quality -= 0.1;
      }
      if (this.quality < _0x3636ac) {
        this.quality = _0x3636ac;
      }
      if (medianFps > _0x48c44b) {
        this.quality += 0.1;
      }
      if (this.quality > 1) {
        this.quality = 1;
      }
      const qualityLevel = Math.round(this.quality * 10);
      this.quality = qualityLevel / 10;
      if (qualityLevel < 10) {
        const qualityKey = "q" + qualityLevel;
        if (this.qualityEventsPending[qualityKey]) {
          this.qualityEventsPending[qualityKey] = false;
          if (window.ga) {
            window.ga("send", "event", "fps", qualityKey);
          }
        }
      }
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
    const {
      countries: countries
    } = this.leaderboard;
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
              unit.skin.addAsset((this.skinManager as SkinManager & FlagSkinManagerExtras).shieldSkinAssets.get(shieldName));
            }
          }
        }
      });
    }
  }
  post() {
    var paper2_results = window.paper2_results;
    var scores = paper2_results.scores;
    function getBrowserLanguage() {
      return (navigator.languages && navigator.languages[0] || navigator.userLanguage || navigator.language || navigator.browserLanguage || "en").substr(0, 2).toUpperCase();
    }
    var payload = {
      build: paper2_results.build || 0,
      player: window.playerId || 0,
      lng: getBrowserLanguage(),
      name: this.player.name,
      top: paper2_results.top || 0,
      persent: Math.round(paper2_results.score * 100),
      best: paper2_results.bestPercent && Math.round(paper2_results.bestPercent * 10000) || 0,
      time: Math.round(paper2_results.time / 1000),
      kills: paper2_results.kills,
      scores: {
        accumulator: scores && scores.accumulator || 0,
        kills: scores && scores.kills || 0
      },
      reason: paper2_results.reason || 0
    };
    function xorEncode(text: string) {
      var result = "";
      for (var i = 0; i < text.length; i++) {
        var _0xa11e69 = text.charCodeAt(i);
        var _0x267820 = _0xa11e69 ^ 42;
        result = result + String.fromCharCode(_0x267820);
      }
      return result;
    }
    fetch("/newpaperio/ajax/results.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: xorEncode(escape(JSON.stringify(payload)))
    });
  }
  addCity(unit: Unit) {
    const name = unit.skin.assets.find((asset: Asset) => asset.pool.name === "flags").name;
    const city = new City(this.citiesManager.get(name), false, unit.position.clone(), unit);
    if ((this.skinManager as SkinManager & FlagSkinManagerExtras).isFlagSkinManager) {
      const citySkin = this.skinManager.getCitySkin(name);
      city.skin = citySkin;
    }
    unit.cities.push(city);
  }
  checkSegments(_0x4d4a5b?: unknown) {
    let _0x136bc7 = 0;
    this.units.forEach(unit => {
      _0x136bc7 += unit.base.polygon.segments.length;
      _0x136bc7 += unit.track.polyline.segments.length;
    });
    const _0x33065f = this.grid.segmentsCount();
    const count = Object.keys(_0x33065f).length;
  }
  handleReturn(returningUnit: Unit) {
    if (returningUnit.death) {
      return;
    }
    this.events.returns++;
    const polylineCopy = returningUnit.track.polyline.clone();
    const {
      base: base
    } = returningUnit;
    const index = base.polygon.segments.findIndex(segment => segment.start === polylineCopy.start);
    const index2 = base.polygon.segments.findIndex(segment => segment.start === polylineCopy.end);
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
    this.units.filter(unit => unit !== returningUnit).forEach(item => {
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
    const segments = returningUnit.track.polyline.segments;
    const count = segments.length;
    const victims: CaptureVictim[] = [];
    for (let i = 0; i <= count; i++) {
      const point = i === count ? segments[i - 1].end : segments[i].start;
      const segments2 = point.segments.filter(segment => segment.shape.owner !== returningUnit.track && segment.shape.owner !== returningUnit.base && segment.start === point);
      if (segments2.length) {
        let contacts = segments2.map((item): TrackContact => ({
          owner: item.shape.owner,
          point: point,
          segment: item,
          index: i
        }));
        if (!openContacts.length) {
          const intersection = returningUnit.track.intersections.find(intersection => intersection.point.equal(point));
          if (!intersection) {
            return false;
          }
          openContacts = contacts.filter(item => {
            const intersections = intersection.intersections.filter((intersection: TrackIntersectionRecord) => intersection.base === item.owner);
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
            const exitContact = contacts.find(item => item.owner === entryContact.owner);
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
              } = cut;
              if (enter.shape !== owner.polygon) {
                enter = owner.polygon.segments.find(segment => segment.start === startPoint);
              }
              if (leave.shape !== owner.polygon) {
                leave = owner.polygon.segments.find(segment => segment.start === endPoint);
              }
              if (enter === leave) {
                return;
              }
              const removed = returningUnit.track.polyline.points().splice(startT, endT - startT + 1);
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
              if (owner.unit.insideBase === owner.unit.base && polygon.inside(owner.unit.position) || owner.unit.insideBase !== owner.unit.base && polygon.inside(owner.unit.track.polyline.start)) {
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
                if (owner.unit !== unit && unit.insideBase === owner && lost.inside(unit.position)) {
                  unit.insideBase = null;
                }
              });
            };
            if (!(entryContact.owner instanceof Base)) {
              throw new Error("Это не база");
            }
            cutBase({
              owner: entryContact.owner,
              enter: entryContact.segment,
              startPoint: entryContact.point,
              startT: entryContact.index,
              leave: exitContact.segment,
              endPoint: exitContact.point,
              endT: exitContact.index
            });
            const intersection = returningUnit.track.intersections.find(intersection => intersection.point.equal(point));
            const intersections = intersection.intersections.filter((intersection: TrackIntersectionRecord) => intersection.base === entryContact.owner);
            if (intersections.length === 1 || intersections[intersections.length - 1].enter === false) {
              contacts = contacts.filter(item => item.owner !== entryContact.owner);
            }
          }
          openContacts = contacts;
        }
      }
    }
    this.units.forEach(unit => {
      if (returningUnit !== unit && captured.inside(unit.position)) {
        unit.insideBase = returningUnit.base;
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
      {
        if (unit === this.player && !(this.player as Player & DebugMoveTo).moveTo && unit.insideBase === null && Math.random() < 0.0005) {
          unit.insideBase = unit.base;
        }
      }
      while (movement.length) {
        if (unit.death) {
          return;
        }
        const step = movement.shift();
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
                  throw new Error("Бывает ли такое?");
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
        let currentGroup: Intersection[] = null;
        let currentDistance = -1;
        intersections.forEach(intersection => {
          if (!nearlyEqual(intersection.distance, currentDistance)) {
            currentGroup = [];
            currentDistance = intersection.distance;
            distanceGroups.push(currentGroup);
          }
          currentGroup.push(intersection);
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
              const _0x277c6a = shapes[0];
              shapes[0] = shapes[index];
              shapes[index] = _0x277c6a;
            }
            const index2 = shapes.findIndex(shape => shape.owner.isTrack);
            if (index2 > 0) {
              const _0x88019d = shapes[0];
              shapes[0] = shapes[index2];
              shapes[index2] = _0x88019d;
            }
            const currentShape = shapes.shift();
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
              const nextIntersection = shapeIntersections.shift();
              if (nextIntersection.segment.shape && !currentShape.owner.unit.death) {
                currentShape.owner.handleIntersect(nextIntersection, unit, step);
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
  isPlayer(_0x5b5dbb: Unit) {
    return _0x5b5dbb === this.player;
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
