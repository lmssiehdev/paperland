import { Vec2 } from "../engine/vec2.js";

export class FloatingLabel {
  constructor(text, color, unit, position = new Vec2(0, 0), velocity = new Vec2(0, -50), duration = 2000, fading = true) {
    this.text = text;
    this.color = color || "#000000";
    this.unit = unit;
    this.position = position;
    this.velocity = velocity;
    this.acceleration = velocity.clone().mulScalar(-2000 / duration);
    this.duration = duration;
    this.time = duration;
    this.fading = fading;
  }
  update(dt) {
    this.time -= dt;
    if (this.time > 0) {
      this.velocity.add(this.acceleration.clone().mulScalar(dt / 1000));
      this.position.add(this.velocity.clone().mulScalar(dt / 1000));
    }
  }
  draw(ctx, _0x8bf69f, _0xc619b1, _0xd54421) {
    const _0x4cbbb8 = _0x5029a2 => 1 + --_0x5029a2 * _0x5029a2 * _0x5029a2 * _0x5029a2 * _0x5029a2;
    let _0x3cba4f = Math.floor(_0x4cbbb8(this.time / this.duration) * 255).toString(16);
    if (_0x3cba4f.length < 2) {
      _0x3cba4f = "0" + _0x3cba4f;
    }
    const point = this.unit ? this.unit.position.clone().add(this.position) : this.position;
    const {
      devicePixelRatio
    } = window;
    const _0x1955d = _0xd54421 * 30 / devicePixelRatio;
    ctx.save();
    ctx.fillStyle = "" + this.color + (this.fading ? _0x3cba4f : "");
    ctx.font = "bold " + _0x1955d + "px " + _0x8bf69f;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.text, point.x * _0xc619b1, point.y * _0xc619b1);
    ctx.restore();
  }
}
