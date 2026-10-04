import { Vec2 } from "../engine/vec2";
import type { Unit } from "./units";

export class FloatingLabel {
    text: string;
    color: string;
    unit: Unit;
    position: Vec2;
    velocity: Vec2;
    acceleration: Vec2;
    duration: number;
    time: number;
    fading: boolean;

  constructor(text: string, color: string, unit: Unit, position: Vec2 = new Vec2(0, 0), velocity = new Vec2(0, -50), duration = 2000, fading = true) {
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
  update(dt: number) {
    this.time -= dt;
    if (this.time > 0) {
      this.velocity.add(this.acceleration.clone().mulScalar(dt / 1000));
      this.position.add(this.velocity.clone().mulScalar(dt / 1000));
    }
  }
  draw(ctx: CanvasRenderingContext2D, font: string, scale: number, uiScale: number) {
    const easeOutQuint = (t: number): number => 1 + --t * t * t * t * t;
    let alphaHex = Math.floor(easeOutQuint(this.time / this.duration) * 255).toString(16);
    if (alphaHex.length < 2) {
      alphaHex = "0" + alphaHex;
    }
    const point = this.unit ? this.unit.position.clone().add(this.position) : this.position;
    const {
      devicePixelRatio
    } = window;
    const fontSize = uiScale * 30 / devicePixelRatio;
    ctx.save();
    ctx.fillStyle = "" + this.color + (this.fading ? alphaHex : "");
    ctx.font = "bold " + fontSize + "px " + font;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.text, point.x * scale, point.y * scale);
    ctx.restore();
  }
}
