import type { Vec2 } from "../engine/vec2";
import type { Skin } from "../skins/skin";
import type { Unit, UnitLabel } from "./units";

export class City {
  name: string;
  capital: boolean;
  position: Vec2;
  unit: Unit;
  labels: UnitLabel[];
  country: string;
  scores: number;
  /** Flag-mode city skin (Game.addCity); SkinManager.getCitySkin may return undefined. */
  skin: Skin | null | undefined;

  constructor(name: string, capital: boolean, position: Vec2, unit: Unit) {
    this.name = name;
    this.capital = capital;
    this.position = position;
    this.unit = unit;
    this.labels = [];
    // Flag mode only (dead in this build): every flag skin carries a "flags" asset.
    this.country = unit && unit.skin.assets.find(asset => asset.pool.name === "flags")!.name;
    this.scores = 0;
    this.skin = null;
  }
  add(amount: number) {
    const name = this.unit.skin.assets.find(asset => asset.pool.name === "flags")!.name;
    let result = 0;
    if (name === this.country) {
      result = amount * (this.capital ? 1 : 0.5);
    } else {
      result = amount * 0.1;
    }
    this.scores += result;
    return result;
  }
}
