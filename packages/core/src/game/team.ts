import type { Skin } from "../skins/skin";
import type { Unit } from "./units";

/** A side in team modes. Members share one skin (so one colour) and never hurt each other. */
export class Team {
  readonly units: Unit[] = [];

  constructor(readonly skin: Skin) {}

  add(unit: Unit) {
    this.units.push(unit);
    unit.team = this;
    unit.setSkin(this.skin);
  }

  remove(unit: Unit) {
    const index = this.units.indexOf(unit);
    if (index !== -1) {
      this.units.splice(index, 1);
    }
    unit.team = null;
  }
}

/** True if `a` and `b` are different units on the same team. Units outside team modes have no allies. */
export const areAllies = (a: Unit, b: Unit): boolean => a !== b && a.team !== null && a.team === b.team;
