export class City {
  constructor(name, capital, position, unit) {
    this.name = name;
    this.capital = capital;
    this.position = position;
    this.unit = unit;
    this.labels = [];
    this.country = unit && unit.skin.assets.find(asset => asset.pool.name === "flags").name;
    this.scores = 0;
    this.skin = null;
  }
  add(_0x132d06) {
    const name = this.unit.skin.assets.find(asset => asset.pool.name === "flags").name;
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
