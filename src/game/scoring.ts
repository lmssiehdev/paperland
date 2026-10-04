import { fmt2 } from "../engine/math";
import type { Unit } from "./units";

export class SchemesManager {
    Schemes: any[];
    current: number;

  constructor(...Schemes: (typeof ClassicScoreScheme)[]) {
    this.Schemes = Schemes;
    this.current = 0;
  }
  getSchemes(_0x5e6c0a: any) {
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
    schemes: any[];
    manager: any;

  constructor(schemes: any[], manager: this) {
    this.schemes = schemes;
    this.manager = manager;
  }
  getScheme(_0x3f5f0b: any) {
    if (_0x3f5f0b) {
      return this.schemes.find((scheme: { name: any; }): { name: any; } => scheme.name === _0x3f5f0b);
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
  print(_0x47c229: any) {
    return this.schemes[this.manager.current].print(_0x47c229);
  }
  update(_0x45b435: any) {
    this.schemes.forEach((scheme: { update: (arg0: any, arg1: boolean) => any; }, index: any) => scheme.update(_0x45b435, this.manager.current !== index));
  }
  kill(_0x58b7ea: any, _0x1f3790: any) {
    this.schemes.forEach((scheme: { kill: (arg0: any, arg1: any, arg2: boolean) => any; }, index: any) => scheme.kill(_0x58b7ea, _0x1f3790, this.manager.current !== index));
  }
  out() {
    this.schemes.forEach((scheme: { out: (arg0: boolean) => any; }, index: any) => scheme.out(this.manager.current !== index));
  }
  comeback(_0x27c4b2: any) {
    this.schemes.forEach((scheme: { comeback: (arg0: any, arg1: boolean) => any; }, index: any) => scheme.comeback(_0x27c4b2, this.manager.current !== index));
  }
}
class ScoreScheme {
    unit: Unit;
    name: string;

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
  print(_0x291604: any) {
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
  constructor(_0x5d8d87: Unit) {
    super(_0x5d8d87, "percent");
  }
  scores() {
    return this.unit.percent * 100;
  }
  result() {
    return +this.scores().toFixed(2);
  }
  print(_0x594090: number) {
    const _0xf310e2 = _0x594090 || this.scores();
    return fmt2(_0xf310e2) + "%";
  }
  kill(_0x30a62e: { skin: { colors: { main: any; }; }; }, _0x1242ed: any, _0x13f27c: any) {
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
  }: any, _0x29e8a4: any) {
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
