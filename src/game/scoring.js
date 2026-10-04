import { fmt2 } from "../engine/math.js";

export class SchemesManager {
  constructor(...Schemes) {
    this.Schemes = Schemes;
    this.current = 0;
  }
  getSchemes(_0x5e6c0a) {
    return new SchemeSet(this.Schemes.map(Scheme => new Scheme(_0x5e6c0a)), this);
  }
  next() {
    this.current++;
    if (this.current === this.Schemes.length) {
      this.current = 0;
    }
  }
}
class SchemeSet {
  constructor(schemes, manager) {
    this.schemes = schemes;
    this.manager = manager;
  }
  getScheme(_0x3f5f0b) {
    if (_0x3f5f0b) {
      return this.schemes.find(scheme => scheme.name === _0x3f5f0b);
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
  print(_0x47c229) {
    return this.schemes[this.manager.current].print(_0x47c229);
  }
  update(_0x45b435) {
    this.schemes.forEach((scheme, index) => scheme.update(_0x45b435, this.manager.current !== index));
  }
  kill(_0x58b7ea, _0x1f3790) {
    this.schemes.forEach((scheme, index) => scheme.kill(_0x58b7ea, _0x1f3790, this.manager.current !== index));
  }
  out() {
    this.schemes.forEach((scheme, index) => scheme.out(this.manager.current !== index));
  }
  comeback(_0x27c4b2) {
    this.schemes.forEach((scheme, index) => scheme.comeback(_0x27c4b2, this.manager.current !== index));
  }
}
class ScoreScheme {
  constructor(unit, name) {
    this.unit = unit;
    this.name = name;
  }
  getScheme() {
    return this;
  }
  scores() {
    return 0;
  }
  print(_0x291604) {
    return fmt2(this.scores());
  }
  result() {
    return this.scores();
  }
  kill() {}
  update() {}
  out() {}
  comeback() {}
}
export class ClassicScoreScheme extends ScoreScheme {
  constructor(_0x5d8d87) {
    super(_0x5d8d87, "percent");
  }
  scores() {
    return this.unit.percent * 100;
  }
  result() {
    return +this.scores().toFixed(2);
  }
  print(_0x594090) {
    const _0xf310e2 = _0x594090 || this.scores();
    return fmt2(_0xf310e2) + "%";
  }
  kill(_0x30a62e, _0x1242ed, _0x13f27c) {
    if (!_0x13f27c && this.unit.isPlayer) {
      this.unit.addLabel({
        text: this.unit.game.language.killText,
        color: _0x30a62e.skin.colors.main,
        unit: this.unit,
        time: 1000,
        fading: true
      });
    }
  }
  comeback({
    increment,
    rise,
    victims,
    game
  }, _0x29e8a4) {
    if (!_0x29e8a4 && increment * 100 >= 0.01 && this.unit.isPlayer) {
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
