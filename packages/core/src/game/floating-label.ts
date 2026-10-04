import { Vec2 } from "../engine/vec2";
import type { Unit } from "./units";

export class FloatingLabel {
  text: string;
  color: string;
  /** Unit the label follows; without one it is drawn at `position` (Game.alert passes a possibly-null player). */
  unit: Unit | null | undefined;
  position: Vec2;
  velocity: Vec2;
  acceleration: Vec2;
  duration: number;
  time: number;
  fading: boolean;

  constructor(
    text: string,
    color: string,
    unit: Unit | null | undefined,
    position: Vec2 = new Vec2(0, 0),
    velocity = new Vec2(0, -50),
    duration = 2000,
    fading = true
  ) {
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
}
