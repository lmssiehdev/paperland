import { fmt2 } from "../engine/math";
import type { Polygon } from "../engine/polygon";
import type { Base } from "./base";
import type { DeathReason } from "./constants";
import type { Game } from "./game";
import type { Unit } from "./units";

/** Territory captured from another unit's base during a return (see Game.handleReturn). */
export interface ComebackVictim {
  base: Base;
  poly: Polygon;
}

/** Payload passed to `comeback` when a unit closes its trail back into its base. */
export interface ComebackInfo {
  /** Gained share of the arena (0..1). */
  increment: number;
  /** The newly captured polygon. */
  rise: Polygon;
  victims: ComebackVictim[];
  game: Game;
}

/** Constructor of a concrete score scheme. */
export type ScoreSchemeClass = new (unit: Unit) => ScoreScheme;

export class SchemesManager {
  Schemes: ScoreSchemeClass[];
  current: number;

  constructor(...Schemes: ScoreSchemeClass[]) {
    this.Schemes = Schemes;
    this.current = 0;
  }
  getSchemes(unit: Unit) {
    return new SchemeSet(
      this.Schemes.map(Scheme => new Scheme(unit)),
      this
    );
  }
  /** Makes `Scheme` (one of the registered classes) the current scheme. */
  select(Scheme: ScoreSchemeClass) {
    this.current = Math.max(0, this.Schemes.indexOf(Scheme));
  }
  next() {
    this.current++;
    if (this.current === this.Schemes.length) {
      this.current = 0;
    }
  }
}
/** One instance of every registered scheme for a unit; delegates to the manager's current scheme. */
export class SchemeSet {
  schemes: ScoreScheme[];
  manager: SchemesManager;

  constructor(schemes: ScoreScheme[], manager: SchemesManager) {
    this.schemes = schemes;
    this.manager = manager;
  }
  getScheme(name?: string) {
    if (name) {
      return this.schemes.find(scheme => scheme.name === name);
    } else {
      return this.schemes[this.manager.current];
    }
  }
  scores() {
    return this.schemes[this.manager.current].scores();
  }
  result() {
    return this.schemes[this.manager.current].result();
  }
  print(value?: number) {
    return this.schemes[this.manager.current].print(value);
  }
  update(dt: number) {
    this.schemes.forEach((scheme, index) => scheme.update(dt, this.manager.current !== index));
  }
  kill(victim: Unit, reason: DeathReason) {
    this.schemes.forEach((scheme, index) => scheme.kill(victim, reason, this.manager.current !== index));
  }
  out() {
    this.schemes.forEach((scheme, index) => scheme.out(this.manager.current !== index));
  }
  comeback(info: ComebackInfo) {
    this.schemes.forEach((scheme, index) => scheme.comeback(info, this.manager.current !== index));
  }
}
/** Base score scheme: hooks receive `silent` = true when the scheme is not the active one. */
export class ScoreScheme {
  unit: Unit;
  name: string;
  /** Score bucket fed by death particles (spawnDeathParticles); never initialized by the classic scheme. */
  declare accumulator: number;

  constructor(unit: Unit, name: string) {
    this.unit = unit;
    this.name = name;
  }
  getScheme() {
    return this;
  }
  scores() {
    return 0;
  }
  print(value?: number) {
    return fmt2(this.scores());
  }
  result() {
    return this.scores();
  }
  kill(victim: Unit, reason: DeathReason, silent: boolean) {}
  update(dt: number, silent: boolean) {}
  out(silent: boolean) {}
  comeback(info: ComebackInfo, silent: boolean) {}
}
export class ClassicScoreScheme extends ScoreScheme {
  constructor(unit: Unit) {
    super(unit, "percent");
  }
  scores() {
    return this.unit.percent * 100;
  }
  result() {
    return +this.scores().toFixed(2);
  }
  print(value?: number) {
    const shown = value || this.scores();
    return fmt2(shown) + "%";
  }
  kill(victim: Unit, reason: DeathReason, silent: boolean) {
    if (!silent && this.unit.isPlayer) {
      this.unit.addLabel({
        text: this.unit.game.language.killText,
        color: victim.skin.colors.main,
        unit: this.unit,
        time: 1000,
        fading: true
      });
    }
  }
  comeback({ increment, rise, victims, game }: ComebackInfo, silent: boolean) {
    if (!silent && increment * 100 >= 0.01 && this.unit.isPlayer) {
      this.unit.addLabel({
        text: "+" + (increment * 100).toFixed(2) + "%",
        color: this.unit.skin.colors.nick,
        unit: this.unit,
        time: 1000,
        fading: true
      });
    }
  }
}
/**
 * Team modes (the original's TeamScoreScheme): a unit scores the territory it captured itself, including loops
 * captured in its name by a teammate's return (Game.handleCross). Hosts of one base share `percent`.
 */
export class TeamScoreScheme extends ClassicScoreScheme {
  constructor(unit: Unit) {
    super(unit);
    this.name = "team";
  }
  scores() {
    return this.unit.personalPercent * 100;
  }
  comeback(info: ComebackInfo, silent: boolean) {
    if (!this.unit.team) {
      return;
    }
    const gain = info.rise.area() / info.game.arenaArea;
    this.unit.personalPercent += gain;
    super.comeback({ ...info, increment: gain }, silent);
  }
}
