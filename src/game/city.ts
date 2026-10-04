import type { Vec2 } from "../engine/vec2";
import type { Unit } from "./units";

export class City {
    name: string;
    capital: boolean;
    position: Vec2;
    unit: Unit;
    labels: any[];
    country: any;
    scores: number;
    skin: Skin;

  constructor(name: string, capital: boolean, position: Vec2, unit: Unit) {
    this.name = name;
    this.capital = capital;
    this.position = position;
    this.unit = unit;
    this.labels = [];
    this.country = unit && unit.skin.assets.find((asset: { pool: { name: string; }; }): { pool: { name: string; }; } => asset.pool.name === "flags").name;
    this.scores = 0;
    this.skin = null;
  }
  add(_0x132d06: number) {
    const name = this.unit.skin.assets.find((asset: { pool: { name: string; }; }): { pool: { name: string; }; } => asset.pool.name === "flags").name;
    let result = 0;
    if (name === this.country) {
      result = _0x132d06 * (this.capital ? 1 : 0.5);
    } else {
      result = _0x132d06 * 0.1;
    }
    this.scores += result;
    return result;
  }
}
