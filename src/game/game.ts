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
import type { Unit } from "./units";
import { SpatialGrid } from "../engine/spatial-grid";
import { Controller } from "../input/controller";
import { SkinManager } from "../skins/skin";
import { NamePool } from "./names";
import { SchemesManager } from "./scoring";
import { Track } from "./track";

export class Game {
    best: any;
    isTest: any;
    playerDeathCallback: any;
    keyboard: {};
    tailRecovered: boolean;
    topListChanged: boolean;
    citiesManager: any;
    renderer: any;
    rng: (_0x1dfc31: any) => number;
    build: number;
    config: any;
    language: any;
    controller: Controller;
    skinManager: SkinManager;
    nameManager: NamePool;
    achievementsProfile: AchievementStore;
    space: SpatialGrid;
    view: any;
    border: Border;
    player: Player;
    units: any[];
    mouse: Vec2;
    direction: Vec2;
    cycle: number;
    seed: number;
    botSpawnLimited: boolean;
    fakeMouse: any;
    labels: any[];
    notifications: any[];
    scale: number;
    square: number;
    gameOverCallback: any;
    visible: boolean;
    stopped: boolean;
    debugView: boolean;
    leaderboard: any;
    level: number;
    bots: number[];
    debug: boolean;
    debugGraph: boolean;
    spawnSuspend: number;
    particles: any[];
    metrics: any[];
    currMetric: any;
    schemesManager: SchemesManager;
    last: number;
    timeAccumulated: number;
    looped: boolean;
    quality: number;
    fpsSequence: any[];
    qas: { q9: boolean; q8: boolean; q7: boolean; q6: boolean; q5: boolean; };
    stats: { fps: number; ut: number; ait: number; st: number; rt: number; };
    timings: { updateStartTime: number; updateEndTime: number; aiStartTime: number; aiEndTime: number; spawnStartTime: number; spawnEndTime: number; renderStartTime: number; renderEndTime: number; };
    events: { returns: number; kills: number; };
    updateParticlesId: number;
    startTime: any;
    angle: number;
    origin: any;

  constructor(config: { arenaSize: number; quadSize: number; borderPoints: number; prepareMult: number; prepareBatchCount: number; maxPreparingTime: number; baseRadius: number; baseCount: number; minScale: number; maxScale: number; observerScale: number; trackWidth: number; unitSpeed: number; spawnTimeout: number; prepareCounter: number; prepareAcceleration: number; baseHeight: number; botsCount: number; botLevel: number; startBotLevel: number; noPlayerBotLevel: number; nearPlayerBotSpawnCount: number; followKiller: boolean; selfKillDelay: number; enemyKillDelay: number; arenaColor: string; borderColor: string; backgroundTopColor: string; backgroundBottomColor: string; platesStrokeWidth: number; botAggroMin: number; botAggroMax: number; botDefMin: number; botDefMax: number; botGreedMin: number; botGreedMax: number; botSafetyMin: number; botSafetyMax: number; botAttackTrackLength: number; font: string; } & { followKiller: boolean; selfKillDelay: number; enemyKillDelay: number; }, view: any, space: SpatialGrid, border: Border, skinManager: SkinManager, gameOverCallback: null, nameManager: NamePool, controller: Controller, language: any, schemesManager: SchemesManager, achievementsProfile: AchievementStore, seed: number) {
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
    this.space = space;
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
    this.square = this.border.polygon.square();
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
    this.qas = {
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
  addUnit(player: Player) {
    this.units.push(player);
  }
  getSpawnPosition(_0x366515: string, baseRadius2: number) {
    const {
      center
    } = this.space;
    const {
      radius
    } = this.border;
    const {
      baseRadius
    } = this.config;
    let center2 = center;
    if (_0x366515 === "player" && !this.player) {
      return;
    }
    baseRadius2 = baseRadius2 || baseRadius;
    const _0x29c8d5 = this.player ? lerp(3, 1, this.player.percent) : 2;
    var _0x4a6a2e = baseRadius2 + baseRadius * 2;
    var _0x513981 = _0x4a6a2e * _0x4a6a2e;
    var _0x27d25e = baseRadius2 + baseRadius * 2 * _0x29c8d5;
    var _0x2b6b9f = _0x27d25e * _0x27d25e;
    let y;
    switch (_0x366515) {
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
      if (unit.base.polygon.simplify.some(function (item: any) {
        return point3.distance2(item) < _0x513981;
      })) {
        return;
      }
      if (unit.track.simplyline.some(function (point: any) {
        return point3.distance2(point) < _0x2b6b9f;
      })) {
        return;
      }
    }
    return point3;
  }
  spawnBot(_0x128903: string) {
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
    if (!this.nameManager || !this.nameManager.aviable()) {
      return;
    }
    if (!this.skinManager || !this.skinManager.available()) {
      return;
    }
    const spawnPosition = this.getSpawnPosition(_0x128903);
    if (!spawnPosition) {
      return;
    }
    const _0x485540 = [0, 0, 0, 0];
    const _0x1caadb = [[1, 2, 2, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 2, 2, 2, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0], [1, 1, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0]];
    this.units.forEach(unit => {
      if (unit !== this.player) {
        _0x485540[unit.type]++;
      }
    });
    this.bots = _0x24884b({}, _0x485540);
    const _0x546f25 = _0x1caadb[Math.round(this.level * (_0x1caadb.length - 1))];
    let _0x50cd16 = -1;
    while (_0x485540[_0x546f25[++_0x50cd16]] > 0) {
      _0x485540[_0x546f25[_0x50cd16]]--;
    }
    const type = _0x546f25[_0x50cd16];
    const name = this.nameManager.get();
    const bot = new Bot(this, type, name, spawnPosition, circlePoints(spawnPosition, baseCount, baseRadius), undefined, this.schemesManager);
    const skin = this.skinManager.get();
    bot.setSkin(skin);
    this.addUnit(bot);
    this.bots[type]++;
  }
  spawnPlayer(name: string, skin: Skin, extraLife: number) {
    const {
      baseCount,
      baseRadius,
      maxScale,
      minScale,
      botsCount
    } = this.config;
    const _0x5c9977 = () => {
      if (this.units.length) {
        this.kill(this.units[~~(this.units.length / 2)], undefined, DEATH_REMOVED);
      }
    };
    if (this.units.length && this.units.length >= botsCount) {
      _0x5c9977();
    }
    let position;
    let _0x87ab5e = 0;
    var baseRadius2 = extraLife ? Math.sqrt(this.square * extraLife / Math.PI) : baseRadius;
    while (!position) {
      if (_0x87ab5e++ > 50) {
        _0x87ab5e = 0;
        _0x5c9977();
      }
      position = this.getSpawnPosition("random", baseRadius2);
    }
    const player = new Player(this, name || this.language.defaultPlayerName, position, circlePoints(position, baseCount, baseRadius2), undefined, this.schemesManager);
    const playerSkin = this.skinManager.getPlayerSkin(skin);
    player.setSkin(playerSkin);
    this.addPlayer(player);
    this.scale = maxScale - ~~(player.base.square / this.square * 20) / 20 * (maxScale - minScale);
    this.startTime = now();
  }
  gameOver(reason: number) {
    const {
      player
    } = this;
    if (!player.win) {
      let min = Infinity;
      let _0x218cef = 0;
      let min2 = Infinity;
      let _0x38b4b3 = 0;
      player.base.polygon.segments.forEach((segment: { start: { x: any; y: any; }; }): { start: { x: any; y: any; }; } => {
        const {
          x,
          y
        } = segment.start;
        min = Math.min(min, x);
        _0x218cef = Math.max(_0x218cef, x);
        min2 = Math.min(min2, y);
        _0x38b4b3 = Math.max(_0x38b4b3, y);
      });
      const _0x542aa7 = _0x218cef - min;
      const _0x1e1e9c = _0x38b4b3 - min2;
      const _0x3cd457 = Math.max(_0x542aa7, _0x1e1e9c);
      const vec2 = new Vec2(min + _0x542aa7 / 2, min2 + _0x1e1e9c / 2);
      const _0x5a7d03 = 500;
      const _0x28bf89 = _0x5a7d03 * 0.95 / _0x3cd457;
      const _0x4be932 = _0x5a7d03 / 100;
      let _0x149dc6;
      if (typeof document !== "undefined") {
        const canvas = document.createElement("canvas");
        canvas.width = _0x5a7d03;
        canvas.height = _0x5a7d03;
        const ctx = canvas.getContext("2d");
        ctx.scale(_0x28bf89, _0x28bf89);
        ctx.translate(_0x5a7d03 / 2 / _0x28bf89 - vec2.x, _0x5a7d03 / 2 / _0x28bf89 - vec2.y);
        ctx.translate(0, _0x4be932 / _0x28bf89);
        ctx.fillStyle = player.skin.colors.back;
        ctx.fill(player.base.polygon.path);
        ctx.translate(0, _0x4be932 * -2 / _0x28bf89);
        ctx.fillStyle = player.skin.pattern && player.skin.pattern.pattern || player.skin.colors.main;
        ctx.fill(player.base.polygon.path);
        _0x149dc6 = canvas.toDataURL("image/png");
      }
      const _0x432ce9 = {
        build: this.build,
        game: this,
        percent: player.percent,
        score: player.schemes && player.schemes.result(),
        newBest: player.schemes && player.schemes.result() > this.best,
        name: player.name,
        top: player.top,
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
          this.gameOverCallback(_0x432ce9);
        }
      }, reason === DEATH_TRACK_CROSSED || reason === DEATH_EXIT_CAPTURED || reason === DEATH_SURROUNDED ? this.config.enemyKillDelay : this.config.selfKillDelay);
    }
  }
  checkBaseCommits() {
    this.units.forEach(unit => {
      const polygon = unit.base.polygon;
      polygon.segments.forEach((segment: { start: any; end: any; }): { start: any; end: any; } => {
        const {
          start,
          end
        } = segment;
        const segment2 = start.segments.find((segment2: any): any => segment2 === segment);
        const segment3 = end.segments.find((segment2: any): any => segment2 === segment);
        if (!segment2 || !segment3) {
          throw new Error("точки сегмента не закоммичены");
        }
      });
    });
  }
  kill(unit: Unit, killer: Unit, reason: number) {
    if (unit.death) {
      return;
    }
    if (this.isTest) {
      const _0x33e839 = ["выигрыш", "самопересечение", "убит об стену", "убит пересечением трека", "убит захватом точки выхода", "убит окружением", "удален системой", "убит откружением столицы", "убит разделением со столицей"];
      console.log(unit.name + " убит" + (killer ? " " + killer.name : "") + " (" + _0x33e839[reason] + ")");
    }
    this.events.kills++;
    unit.death = true;
    if (this.skinManager) {
      this.skinManager.release(unit.skin);
    }
    this.units.forEach(unit2 => {
      if (unit2 !== unit && unit2.in === unit.base) {
        unit2.in = null;
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
    const _0x58c896 = TAU * dt / 1000 / (unit.smoothness || 1);
    if (Math.abs(angle) > _0x58c896) {
      angle = _0x58c896 * Math.sign(angle);
    }
    unit.direction += angle;
    const _0x3b2cd3 = vecFromAngle(unit.direction).mulScalar(unitSpeed * dt / 1000);
    let segment = new Segment(unit.position, unit.position.clone().add(_0x3b2cd3));
    _0x3b2cd3.release();
    let intersections = this.border.intersections(segment);
    while (intersections.length) {
      let _0x5efed0;
      const vector = segment.vector;
      if (intersections.length === 2) {
        const vector2 = intersections[0].segment.vector;
        let angle = Math.atan2(vector.x * vector2.y - vector2.x * vector.y, vector.dot(vector2));
        _0x5efed0 = angle > 0 ? intersections[0] : intersections[1];
      } else {
        _0x5efed0 = intersections[0];
      }
      const {
        segment: segment2,
        point: point
      } = _0x5efed0;
      const vector2 = segment2.vector;
      let angle = Math.atan2(vector.x * vector2.y - vector2.x * vector.y, vector.dot(vector2));
      if (angle < 0) {
        break;
      }
      if (!isZero(_0x5efed0.distance)) {
        const segment2 = new Segment(segment.start, point);
        result.push(segment2);
      }
      segment = new Segment(point, segment.end);
      const vector3 = segment.vector;
      const _0x25c070 = Vec2.clone(vector2).normalize().mulScalar(vector3.dot(vector2) / vector2.magnitude());
      segment = new Segment(point, point.clone().add(_0x25c070));
      _0x25c070.release();
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
      const _0x1c56e4 = TAU * dt / 1000;
      if (this.controller.keyboardModeSwitch.mode2) {
        let _0x19aa5b = 0;
        if (this.controller.left) {
          _0x19aa5b = -1;
        }
        if (this.controller.right) {
          _0x19aa5b = 1;
        }
        if (_0x19aa5b) {
          this.direction.rotate(_0x19aa5b * _0x1c56e4);
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
          if (Math.abs(angle) > _0x1c56e4) {
            angle = Math.sign(angle) * _0x1c56e4;
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
  prepareAndUpdate(_0x4275d6: number) {
    if (this.preparing()) {
      let prepareAcceleration = this.config.prepareAcceleration;
      while (this.preparing() && prepareAcceleration > 0) {
        this.update(TICK_MS_X2);
        prepareAcceleration--;
      }
    } else {
      console.log(_0x4275d6);
      this.update(_0x4275d6);
    }
  }
  preparing() {
    return this.cycle < this.config.prepareCounter;
  }
  finishPrepare() {
    let _0x5477e9 = this.replaying ? this.replaying.start : this.config.prepareCounter;
    if (this.cycle < _0x5477e9) {
      console.log("skip cycles to: " + _0x5477e9);
    }
    while (this.cycle < _0x5477e9) {
      this.update();
    }
  }
  recoverTail() {
    let player = this.player;
    if (player && player.in == player.base && !player.base.polygon.inside(player.position)) {
      {
        if (!player.moveTo) {
          return;
        }
      }
      let _0x3dd1cb = player.base.polygon.segments.reduce((acc: { start: { distance2: (arg0: any) => number; }; }, segment: { start: { distance2: (arg0: any) => number; }; }) => acc.start.distance2(player.position) < segment.start.distance2(player.position) ? acc : segment);
      let delta = _0x3dd1cb.start.clone().sub(player.position);
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
  update(dt: number) {
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
    Vec2.space = this.space;
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
      unit.lastSquare = unit.base.square;
    });
    this.units.forEach(unit => {
      const _0x50e657 = unit.base.square / this.square;
      unit.percent = _0x50e657;
      unit.bestPercent = Math.max(unit.bestPercent, _0x50e657);
      unit.scale = lerp(maxScale, minScale, easeOutCubic(~~(_0x50e657 * 20) / 20));
      unit.vrange = Math.sqrt(2455780) / 2 / unit.scale * 0.8;
      if (unit.schemes) {
        unit.schemes.update(dt);
      }
      if (unit.labels.length) {
        let vec2 = new Vec2(0, -35);
        const vec22 = new Vec2(0, -10);
        const vec23 = new Vec2(0, -10);
        unit.labels.forEach((label: { text: any; color: string; unit: Unit; time: number; fading: boolean; }): { text: any; color: string; unit: Unit; time: number; fading: boolean; } => {
          this.labels.push(new FloatingLabel(label.text, label.color, label.unit, vec2, vec22, label.time, label.fading));
          vec2 = vec2.clone().add(vec23);
        });
        unit.labels = [];
      }
    });
    this.units.sort((a, b) => b.schemes && a.schemes ? b.schemes.scores() - a.schemes.scores() : 0);
    this.units.forEach((unit, index) => {
      unit.top = index + 1;
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
        const _0x5594f3 = Math.min(1, Math.max(0, this.level + unit.jitter));
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
        unit.aggro = lerp(botAggroMin, botAggroMax, _0x5594f3);
        unit.greed = lerp(botGreedMin, botGreedMax, _0x5594f3);
        unit.safety = lerp(botSafetyMin, botSafetyMax, _0x5594f3);
        unit.def = lerp(botDefMin, botDefMax, _0x5594f3);
      }
    });
    if (this.player && this.player.achievements) {
      this.player.achievements.update(this.player, dt, this);
    }
    if (player && player.track.length > this.config.botAttackTrackLength) {
      let _0x3bbba2 = null;
      let min = Infinity;
      this.units.forEach(unit => {
        if (unit instanceof Bot) {
          let min2 = Infinity;
          player.track.simplyline.forEach((point: { distance2: (arg0: any) => any; }): { distance2: (arg0: any) => any; } => {
            const distSq = point.distance2(unit.position);
            if (distSq < min2) {
              min2 = distSq;
            }
          });
          min2 = Math.sqrt(min2);
          if (min2 < min) {
            _0x3bbba2 = unit;
            min = min2;
          }
        }
      });
      if (_0x3bbba2) {
        _0x3bbba2.fsm.change("attack");
      }
    }
    const _0x709870 = player ? player.scale : observerScale;
    const _0x39165b = _0x709870 - this.scale;
    this.scale += _0x39165b * dt / 400;
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
  get renderContext() {
    return this.getRenderContext();
  }
  getRenderContext() {
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
    const _0x54a346 = ~~(clientWidth * this.quality);
    const _0x41629c = ~~(clientHeight * this.quality);
    if (view.width !== _0x54a346 || view.height !== _0x41629c) {
      view.width = _0x54a346;
      view.height = _0x41629c;
    }
    const {
      devicePixelRatio
    } = window;
    const _0x2ddf06 = _0x54a346 * devicePixelRatio;
    const _0x5c3e17 = _0x41629c * devicePixelRatio;
    const _0x3b8c8f = Math.sqrt(_0x2ddf06 * _0x2ddf06 + _0x5c3e17 * _0x5c3e17) / Math.sqrt(2455780);
    const _0x2b1e55 = this.scale * _0x3b8c8f / devicePixelRatio;
    let point;
    if (this.player) {
      point = this.player.position;
      if (this.player.killer && this.config.followKiller) {
        point = this.player.killer.position;
      }
    } else {
      point = this.space.center;
    }
    if (this.origin && (!this.player || this.player.killer)) {
      const dist = this.origin.distance(point);
      let dist3 = dist / 30;
      const _0x4caab5 = point.clone().sub(this.origin).normalize().mulScalar(dist3);
      point = this.origin.add(_0x4caab5);
    }
    this.origin = point.clone();
    const _0x5010a6 = point.x - _0x54a346 / 2 / _0x2b1e55;
    const _0x4fe2d2 = point.x + _0x54a346 / 2 / _0x2b1e55;
    const _0x15266b = point.y - _0x41629c / 2 / _0x2b1e55;
    const _0x29bcc8 = point.y + _0x41629c / 2 / _0x2b1e55;
    const _0x4f0c46 = (point: Vec2, _0x568ea6 = 0) => inRange(_0x5010a6 - _0x568ea6, _0x4fe2d2 + _0x568ea6, point.x) && inRange(_0x15266b - _0x568ea6, _0x29bcc8 + _0x568ea6, point.y);
    const _0x2a41b8 = (_0x49fb9c: { bounds: { left: number; right: number; top: number; bottom: number; }; }, _0x5af2d7 = 0) => rangeOverlap(_0x49fb9c.bounds.left - _0x5af2d7, _0x49fb9c.bounds.right + _0x5af2d7, _0x5010a6, _0x4fe2d2) > 0 && rangeOverlap(_0x49fb9c.bounds.top - _0x5af2d7, _0x49fb9c.bounds.bottom + _0x5af2d7, _0x15266b, _0x29bcc8) > 0;
    const _0x54d13e = (_0x532992: number, _0x58c40d: number) => {
      const _0x3475d4 = 16 / 9;
      const _0x5e288c = 9 / 16;
      const _0x158e1e = clamp(_0x5e288c, _0x3475d4, _0x2ddf06 / _0x5c3e17);
      const _0x174801 = _0x532992 - _0x58c40d;
      const _0x5bf426 = _0x5e288c - _0x3475d4;
      const _0x531332 = -(_0x174801 * _0x3475d4 + _0x5bf426 * _0x532992);
      return -(_0x531332 + _0x174801 * _0x158e1e) / _0x5bf426;
    };
    const _0x11876d = ~~(_0x54d13e(20, 30) * _0x3b8c8f);
    const _0xf7a325 = this.config.platesStrokeWidth * _0x3b8c8f;
    const _0x163ec9 = ~~(_0x3b8c8f * 4);
    const _0x5052ae = _0x11876d + "px " + font;
    const _0x2809cc = ~~(_0x3b8c8f * 16);
    const _0x751269 = ~~(_0x11876d * 0.75);
    const _0x593bf3 = _0x751269 * 2;
    const _0x33d922 = ~~(_0x2ddf06 / _0x54d13e(4, 2.25));
    const _0x35ec6f = ~~(_0x33d922 / 2);
    return {
      game: this,
      view: view,
      ctx: ctx,
      viewWidth: _0x54a346,
      viewHeight: _0x41629c,
      devicePixelRatio: devicePixelRatio,
      scaler: _0x3b8c8f,
      scale: _0x2b1e55,
      origin: point,
      pointInView: _0x4f0c46,
      boundsInView: _0x2a41b8,
      calcMult: _0x54d13e,
      viewScreenWidth: _0x2ddf06,
      viewScreenHeight: _0x5c3e17,
      fontSize: _0x11876d,
      strokeWidth: _0xf7a325,
      backHeight: _0x163ec9,
      uiFont: _0x5052ae,
      padding: _0x2809cc,
      barHeight: _0x593bf3,
      halfBarHeight: _0x751269,
      barWidth: _0x33d922,
      halfBarWidth: _0x35ec6f
    };
  }
  updateMetrics(_0x54d46a: number) {
    const {
      stats,
      timings
    } = this;
    const _0x646ac0 = {
      updateTime: timings.updateEndTime - timings.updateStartTime,
      renderTime: timings.renderEndTime - timings.renderStartTime,
      frameTime: _0x54d46a,
      events: this.events
    };
    this.metrics.push(_0x646ac0);
    if (this.metrics.length > _0xd09b08) {
      this.metrics.shift();
    }
    const _0x29318d = 0.05;
    stats.fps = lerp(stats.fps, 1000 / _0x54d46a, _0x29318d);
    stats.ut = lerp(stats.ut, timings.updateEndTime - timings.updateStartTime, _0x29318d);
    stats.ait = lerp(stats.ait, timings.aiEndTime - timings.aiStartTime, _0x29318d);
    stats.st = lerp(stats.st, timings.spawnEndTime - timings.spawnStartTime, _0x29318d);
    stats.rt = lerp(stats.rt, timings.renderEndTime - timings.renderStartTime, _0x29318d);
    this.fpsSequence.push(stats.fps);
    const _0x2fbf93 = 25;
    const _0x48c44b = 35;
    const _0x2a54ee = 10;
    const _0x293934 = 120;
    const _0x3636ac = 0.5;
    if (this.fpsSequence.length > _0x293934) {
      this.fpsSequence.sort();
      const _0x535376 = this.fpsSequence[~~(_0x293934 / 2)];
      if (_0x535376 < _0x2fbf93) {
        this.quality -= 0.1;
      }
      if (_0x535376 < _0x2a54ee) {
        this.quality -= 0.1;
      }
      if (this.quality < _0x3636ac) {
        this.quality = _0x3636ac;
      }
      if (_0x535376 > _0x48c44b) {
        this.quality += 0.1;
      }
      if (this.quality > 1) {
        this.quality = 1;
      }
      const _0x3d8841 = Math.round(this.quality * 10);
      this.quality = _0x3d8841 / 10;
      if (_0x3d8841 < 10) {
        const _0x33b565 = "q" + _0x3d8841;
        if (this.qas[_0x33b565]) {
          this.qas[_0x33b565] = false;
          if (window.ga) {
            window.ga("send", "event", "fps", _0x33b565);
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
  setLeaderboard(leaderboard: any) {
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
      const _0x52f233 = countries[0] && countries[0].country;
      const _0x129382 = countries[1] && countries[1].country;
      const _0xc01a3 = countries[2] && countries[2].country;
      this.units.forEach(unit => {
        const asset = unit.skin.assets.find((asset: { pool: { name: string; }; }): { pool: { name: string; }; } => asset.pool.name === "shields");
        const asset2 = unit.skin.assets.find((asset: { pool: { name: string; }; }): { pool: { name: string; }; } => asset.pool.name === "flags");
        if (asset && asset2) {
          let _0x43471a = "gray";
          switch (asset2.name) {
            case _0x52f233:
              _0x43471a = "gold";
              break;
            case _0x129382:
              _0x43471a = "silver";
              break;
            case _0xc01a3:
              _0x43471a = "bronze";
              break;
          }
          if (asset.name !== _0x43471a) {
            unit.skin.removeAsset(asset);
            if ("shieldSkinAssets" in this.skinManager) {
              unit.skin.addAsset(this.skinManager.shieldSkinAssets.get(_0x43471a));
            }
          }
        }
      });
    }
  }
  post() {
    var paper2_results = window.paper2_results;
    var scores = paper2_results.scores;
    function _0x5f107b() {
      return (navigator.languages && navigator.languages[0] || navigator.userLanguage || navigator.language || navigator.browserLanguage || "en").substr(0, 2).toUpperCase();
    }
    var _0x129a88 = {
      build: paper2_results.build || 0,
      player: window.playerId || 0,
      lng: _0x5f107b(),
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
    function _0x2e5605(_0x47f4ae: string) {
      var result = "";
      for (var i = 0; i < _0x47f4ae.length; i++) {
        var _0xa11e69 = _0x47f4ae.charCodeAt(i);
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
      body: _0x2e5605(escape(JSON.stringify(_0x129a88)))
    });
  }
  addCity(unit: Unit) {
    const name = unit.skin.assets.find((asset: { pool: { name: string; }; }): { pool: { name: string; }; } => asset.pool.name === "flags").name;
    const city = new City(this.citiesManager.get(name), false, unit.position.clone(), unit);
    if (this.skinManager.isFlagSkinManager) {
      const citySkin = this.skinManager.getCitySkin(name);
      city.skin = citySkin;
    }
    unit.cities.push(city);
  }
  checkSegments(_0x4d4a5b: any) {
    let _0x136bc7 = 0;
    this.units.forEach(unit => {
      _0x136bc7 += unit.base.polygon.segments.length;
      _0x136bc7 += unit.track.polyline.segments.length;
    });
    const _0x33065f = this.space.segmentsCount();
    const count = Object.keys(_0x33065f).length;
  }
  handleReturn(_0x5ebb6f: Unit) {
    if (_0x5ebb6f.death) {
      return;
    }
    this.events.returns++;
    const polylineCopy = _0x5ebb6f.track.polyline.clone();
    const {
      base: base
    } = _0x5ebb6f;
    const index = base.polygon.segments.findIndex((segment): { start: any; } => segment.start === polylineCopy.start);
    const index2 = base.polygon.segments.findIndex((segment): { start: any; } => segment.start === polylineCopy.end);
    const _0x4ffa2b = Math.min(index2, index);
    const _0x490c91 = Math.max(index2, index);
    if (_0x4ffa2b !== index) {
      polylineCopy.reverse();
    }
    const _0x5a7e19 = polylineCopy.points();
    const _0x1051b1 = base.polygon.points();
    const removed = _0x1051b1.splice(_0x4ffa2b, _0x490c91 - _0x4ffa2b + 1, ..._0x5a7e19);
    removed.shift();
    removed.pop();
    removed.reverse();
    removed.push(..._0x5a7e19);
    const polygon = new Polygon(removed);
    let _0x1b07c0;
    if (polygon.rawSquare() < 0) {
      _0x1b07c0 = new Polygon(_0x1051b1.reverse());
      base.polygon.unsplice(polylineCopy, _0x4ffa2b, _0x490c91);
    } else {
      _0x1b07c0 = polygon;
      base.polygon.splice(polylineCopy, _0x4ffa2b, _0x490c91);
    }
    base.square += _0x1b07c0.square();
    base.polygon.calcPath();
    this.units.filter(unit => unit !== _0x5ebb6f).forEach(item => {
      if (!item.death) {
        if (item.in === item.base && _0x1b07c0.inside(item.position)) {
          this.kill(item, _0x5ebb6f, DEATH_SURROUNDED);
        }
        if (item.track.polyline.start && _0x1b07c0.inside(item.track.polyline.start)) {
          this.kill(item, _0x5ebb6f, DEATH_EXIT_CAPTURED);
        }
        if (item.cities && item.cities[0] && _0x1b07c0.inside(item.cities[0].position)) {
          this.kill(item, _0x5ebb6f, DEATH_CAPITAL_SURROUNDED);
        }
      }
    });
    let _0x4a8c56 = [];
    const segments = _0x5ebb6f.track.polyline.segments;
    const count = segments.length;
    const _0x1e03e0: { base: any; poly: Polygon; }[] = [];
    for (let i = 0; i <= count; i++) {
      const point = i === count ? segments[i - 1].end : segments[i].start;
      const segments2 = point.segments.filter((segment: { shape: { owner: Base | Track; }; start: any; }): { shape: { owner: any; }; start: any; } => segment.shape.owner !== _0x5ebb6f.track && segment.shape.owner !== _0x5ebb6f.base && segment.start === point);
      if (segments2.length) {
        let segments22 = segments2.map((item: { shape: { owner: any; }; }): { shape: { owner: any; }; } => ({
          owner: item.shape.owner,
          point: point,
          segment: item,
          index: i
        }));
        if (!_0x4a8c56.length) {
          const intersection = _0x5ebb6f.track.intersections.find((intersection): { point: { equal: (arg0: any) => any; }; } => intersection.point.equal(point));
          if (!intersection) {
            return false;
          }
          _0x4a8c56 = segments22.filter((item: { owner: any; }): { owner: any; } => {
            const intersections = intersection.intersections.filter((intersection: { base: any; }): { base: any; } => intersection.base === item.owner);
            if (!intersections.length) {
              return false;
            }
            return intersections[intersections.length - 1].enter;
          });
        } else {
          let _0x3deaf0 = _0x4a8c56.filter((item: { owner: any; }): { owner: any; } => segments22.some((item2: { owner: any; }): { owner: any; } => {
            return item2.owner === item.owner;
          }));
          if (_0x3deaf0.length) {
            const _0x12a6a7 = _0x3deaf0[0];
            const _0x1398d6 = segments22.find((item: { owner: any; }): { owner: any; } => item.owner === _0x12a6a7.owner);
            const _0x1a293a = (_0x125dfc: { owner?: any; enter?: any; startPoint?: any; startT?: any; leave?: any; endPoint?: any; endT?: any; }): { owner?: any; enter?: any; startPoint?: any; startT?: any; leave?: any; endPoint?: any; endT?: any; } => {
              const {
                owner,
                startT,
                endT,
                startPoint,
                endPoint
              } = _0x125dfc;
              let {
                enter,
                leave
              } = _0x125dfc;
              if (enter.shape !== owner.polygon) {
                enter = owner.polygon.segments.find((segment: { start: any; }): { start: any; } => segment.start === startPoint);
              }
              if (leave.shape !== owner.polygon) {
                leave = owner.polygon.segments.find((segment: { start: any; }): { start: any; } => segment.start === endPoint);
              }
              if (enter === leave) {
                return;
              }
              const removed = _0x5ebb6f.track.polyline.points().splice(startT, endT - startT + 1);
              const index = owner.polygon.segments.findIndex((segment: any): any => segment === enter);
              const index2 = owner.polygon.segments.findIndex((segment: any): any => segment === leave);
              const _0x53cd50 = Math.min(index2, index);
              const _0x517d46 = Math.max(index2, index);
              if (_0x53cd50 !== index) {
                removed.reverse();
              }
              const points = owner.polygon.points();
              const removed2 = points.splice(_0x53cd50, _0x517d46 - _0x53cd50 + 1, ...removed);
              removed2.shift();
              removed2.pop();
              removed2.push(...removed.slice().reverse());
              const polygon = new Polygon(removed2);
              const polygon2 = new Polygon(points);
              let _0xae7444;
              if (owner.unit.in === owner.unit.base && polygon.inside(owner.unit.position) || owner.unit.in !== owner.unit.base && polygon.inside(owner.unit.track.polyline.start)) {
                owner.polygon.right(removed, _0x53cd50, _0x517d46);
                _0xae7444 = polygon2;
              } else {
                owner.polygon.left(removed, _0x53cd50, _0x517d46);
                _0xae7444 = polygon;
              }
              owner.square -= _0xae7444.square();
              owner.polygon.calcPath();
              _0x1e03e0.push({
                base: owner,
                poly: _0xae7444
              });
              this.units.forEach(unit => {
                if (owner.unit !== unit && unit.in === owner && _0xae7444.inside(unit.position)) {
                  unit.in = null;
                }
              });
            };
            if (!(_0x12a6a7.owner instanceof Base)) {
              throw new Error("Это не база");
            }
            _0x1a293a({
              owner: _0x12a6a7.owner,
              enter: _0x12a6a7.segment,
              startPoint: _0x12a6a7.point,
              startT: _0x12a6a7.index,
              leave: _0x1398d6.segment,
              endPoint: _0x1398d6.point,
              endT: _0x1398d6.index
            });
            const intersection = _0x5ebb6f.track.intersections.find((intersection): { point: { equal: (arg0: any) => any; }; } => intersection.point.equal(point));
            const intersections = intersection.intersections.filter((intersection: { base: any; }): { base: any; } => intersection.base === _0x12a6a7.owner);
            if (intersections.length === 1 || intersections[intersections.length - 1].enter === false) {
              segments22 = segments22.filter((item: { owner: any; }): { owner: any; } => item.owner !== _0x12a6a7.owner);
            }
          }
          _0x4a8c56 = segments22;
        }
      }
    }
    this.units.forEach(unit => {
      if (_0x5ebb6f !== unit && _0x1b07c0.inside(unit.position)) {
        unit.in = _0x5ebb6f.base;
      }
    });
    const _0x41364a = (_0x5ebb6f.base.square - _0x5ebb6f.lastSquare) / this.square;
    if (_0x5ebb6f.schemes) {
      _0x5ebb6f.schemes.comeback({
        increment: _0x41364a,
        rise: _0x1b07c0,
        victims: _0x1e03e0,
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
    this.units.slice().forEach(item => {
      if (item.death) {
        return;
      }
      let movement = this.getMovement(dt, item);
      {
        if (item === this.player && !this.player.moveTo && item.in === null && Math.random() < 0.0005) {
          item.in = item.base;
        }
      }
      while (movement.length) {
        if (item.death) {
          return;
        }
        const _0x568c14 = movement.shift();
        const intersections = this.space.intersections(_0x568c14);
        const _0x1e224d: { intersections: any[]; }[] = [];
        intersections.forEach((intersection: { point: { cell: any; }; }): { point: { cell: any; }; } => {
          const index = _0x1e224d.findIndex(item => item.point.equal(intersection.point));
          if (index === -1) {
            _0x1e224d.push({
              point: intersection.point,
              intersections: [intersection]
            });
          } else {
            if (intersection.point !== _0x1e224d[index].point) {
              if (intersection.point.cell) {
                if (_0x1e224d[index].point.cell) {
                  throw new Error("Бывает ли такое?");
                } else {
                  _0x1e224d[index].point = intersection.point;
                  _0x1e224d[index].intersections.forEach((intersection2): { point: any; } => {
                    intersection2.point = intersection.point;
                  });
                }
              } else {
                intersection.point = _0x1e224d[index].point;
              }
            }
            _0x1e224d[index].intersections.push(intersection);
          }
        });
        intersections.forEach((intersection: { distance: any; point: any; }): { distance: any; point: any; } => {
          intersection.distance = _0x568c14.start.distance2(intersection.point);
        });
        intersections.sort((a: { distance: number; }, b: { distance: number; }) => a.distance - b.distance);
        const _0x5ecee4: any[][] = [];
        let _0x3f39da: any[] = null;
        let _0x3bea17 = -1;
        intersections.forEach((intersection: { distance: number; }): { distance: number; } => {
          if (!nearlyEqual(intersection.distance, _0x3bea17)) {
            _0x3f39da = [];
            _0x3bea17 = intersection.distance;
            _0x5ecee4.push(_0x3f39da);
          }
          _0x3f39da.push(intersection);
        });
        _0x5ecee4.forEach(item2 => {
          const _0x560361: any[] = [];
          item2.forEach((item): { segment: { shape: any; }; } => {
            const {
              shape
            } = item.segment;
            if (shape && _0x560361.indexOf(shape) === -1) {
              _0x560361.push(shape);
            }
          });
          while (_0x560361.length) {
            const index = _0x560361.findIndex(item2 => item2.owner === item.in);
            if (index > 0) {
              const _0x277c6a = _0x560361[0];
              _0x560361[0] = _0x560361[index];
              _0x560361[index] = _0x277c6a;
            }
            const index2 = _0x560361.findIndex(item => item.owner.isTrack);
            if (index2 > 0) {
              const _0x88019d = _0x560361[0];
              _0x560361[0] = _0x560361[index2];
              _0x560361[index2] = _0x88019d;
            }
            const _0xc50a80 = _0x560361.shift();
            const _0x549acd: any[] = [];
            item2.forEach((item): { segment: { shape: any; }; } => {
              if (item.segment.shape === _0xc50a80) {
                _0x549acd.push(item);
              }
            });
            while (!item.death && _0x549acd.length) {
              _0x549acd.sort((a, b) => {
                if (item.in) {
                  return b.zn - a.zn;
                } else {
                  return a.zn - b.zn;
                }
              });
              const _0x213f86 = _0x549acd.shift();
              if (_0x213f86.segment.shape && !_0xc50a80.owner.unit.death) {
                _0xc50a80.owner.handleIntersect(_0x213f86, item, _0x568c14);
              }
            }
          }
        });
        if (item.death) {
          return;
        }
        const {
          end
        } = _0x568c14;
        if (item.in !== item.base) {
          item.track.add(end);
        }
        item.position = end;
        if (this.visible && !movement.length && item.in && item.in !== item.base) {
          let _0x1d0ff0 = Particle.nom(item, _0x568c14, this.config.trackWidth);
          this.particles.push(_0x1d0ff0);
        }
      }
    });
  }
  isPlayer(_0x5b5dbb: any) {
    return _0x5b5dbb === this.player;
  }
  alert(text: string, _0x29a9fa: string) {
    this.labels.push(new FloatingLabel(text, _0x29a9fa || "#000000", this.player));
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
      let _0x176147 = time - this.last;
      if (_0x176147 < 1) {
        _0x176147 = 1;
      }
      this.updateMetrics(_0x176147);
      if (_0x176147 > 10000) {
        _0x176147 = 10000;
      }
      this.timings.updateStartTime = now();
      if (this.replaying || this.recording) {
        if (this.cycle < this.config.prepareCounter + 120 && _0x176147 > 100) {
          _0x176147 = 100;
        }
        if (_0x176147 > TICK_MS * 0.9 && _0x176147 < TICK_MS * 1.1) {
          _0x176147 = TICK_MS;
        }
        this.timeAccumulated += _0x176147;
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
        const _0x512f79 = TICK_MS * 2;
        while (_0x176147 > 0) {
          const _0x1d3150 = _0x176147 <= _0x512f79 ? _0x176147 : _0x176147 < _0x512f79 * 2 ? _0x176147 / 2 + Math.random() : _0x512f79 + Math.random();
          this.update(_0x1d3150);
          _0x176147 -= _0x1d3150;
        }
      } else {
        this.prepareAndUpdate(_0x176147);
      }
      this.timings.updateEndTime = now();
    }
    this.timings.renderStartTime = now();
    if (this.visible) {
      this.render();
    }
    this.timings.renderEndTime = now();
    this.last = time;
    requestAnimationFrame(_0x56970d => this.loop());
  }
}
