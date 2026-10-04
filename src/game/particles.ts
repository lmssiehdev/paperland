import { Vec2 } from "../engine/vec2";
import type { Segment } from "../engine/segment";
import type { Unit } from "./units";

const createSquarePath = () => {
  const path = new Path2D();
  const half = 1;
  path.moveTo(-half, -half);
  path.lineTo(half, -half);
  path.lineTo(half, half);
  path.lineTo(-half, half);
  path.closePath();
  return path;
};
const SQUARE_PATH = createSquarePath();

/** A fill color, or an image drawn centered at 1/20 scale. */
export type ParticleColor = string | HTMLImageElement | HTMLCanvasElement;

/**
 * State a death particle is switched to when it flies to a collector unit: the original code
 * overwrites the Vec2 velocity/acceleration with scalar speeds (see spawnDeathParticles).
 */
type HomingParticle = Omit<Particle, "velocity" | "acceleration"> & {
  velocity: number;
  acceleration: number;
};

export class Particle {
    target: Unit | null;
    color: ParticleColor;
    position: Vec2;
    velocity: Vec2;
    acceleration: Vec2 | null;
    rotate: number;
    scale: number;
    vscale: number;
    rotation: number;
    time: number;
    fn: ((particle: Particle) => void) | undefined;

  constructor(target: Unit | null, color: ParticleColor, position: Vec2, velocity: Vec2, acceleration: Vec2 | null, rotate: number, scale: number, vscale: number, time: number, fn?: (particle: Particle) => void) {
    this.target = target;
    this.color = color;
    this.position = position;
    this.velocity = velocity;
    this.acceleration = acceleration;
    this.rotate = rotate;
    this.scale = scale;
    this.vscale = vscale;
    this.rotation = Math.random() * Math.PI * 2;
    this.time = time;
    this.fn = fn;
  }
  update(dt: number) {
    const seconds = dt / 1000;
    this.time -= dt;
    if (this.time <= 0) {
      if (this.fn) {
        this.fn(this);
      }
      return;
    }
    this.position.x += this.velocity.x * seconds;
    this.position.y += this.velocity.y * seconds;
    if (this.acceleration) {
      this.velocity.x += this.acceleration.x * seconds;
      this.velocity.y += this.acceleration.y * seconds;
    }
    this.rotation += this.rotate * seconds;
    this.scale += this.vscale * seconds;
  }
  draw(ctx: CanvasRenderingContext2D) {
    const {
      x,
      y
    } = this.position;
    const {
      rotation,
      color,
      scale
    } = this;
    let transform = ctx.getTransform();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.scale(scale, scale);
    if (typeof color === "string") {
      if (ctx.fillStyle !== color) {
        ctx.fillStyle = color;
      }
      ctx.fill(SQUARE_PATH);
    } else {
      ctx.scale(1 / 20, 1 / 20);
      ctx.drawImage(color, -color.width / 2, -color.height / 2);
    }
    ctx.setTransform(transform);
  }
  /** Crumb spawned when `unit` eats into the base it is currently in. */
  static nom(unit: Unit, segment: Segment, trackWidth: number) {
    const sign = Math.sign(Math.random() - 0.5);
    const trackWidthPx = unit.skin.container.maxScale * trackWidth;
    const {
      unitSpeed,
      baseHeight
    } = unit.game.config;
    const velocity = segment.vector.clone().normalize().rotate(sign * Math.random() * (Math.PI / 30)).mulScalar(unitSpeed * (1 + Math.random()));
    const sideOffset = segment.vector.clone().rotate(Math.PI / 2).normalize().mulScalar(sign * Math.random() * trackWidthPx / 2);
    const forwardOffset = segment.vector.clone().normalize().mulScalar(trackWidthPx / 2);
    const acceleration = segment.vector.clone().normalize().mulScalar(unitSpeed * -6).rotate(sign * Math.random() * (Math.PI / 10));
    // Game.handleUnitMovements only calls nom() while unit.insideBase is set.
    const {
      particles
    } = unit.insideBase!.unit.skin.colors;
    const scale = 0.75 + Math.random() * 0.5;
    const particle = new Particle(null, particles[~~(Math.random() * particles.length)], segment.start.clone().add(sideOffset).add(forwardOffset).add(new Vec2(0, -baseHeight)), velocity, acceleration, Math.PI + Math.random() * Math.PI, scale, scale * -2, 300);
    return particle;
  }
}
/**
 * Bursts particles along `segments` of a dead unit. With a `collector`, particles fly to it on expiry;
 * with `transferScore` they are bigger and add the victim's score share to the collector's scheme.
 */
export function spawnDeathParticles(unit: Unit, collector: Unit | null, segments: Segment[], transferScore?: boolean) {
  let game = unit.game;
  if (game.visible) {
    const victimScore = unit.schemes.scores();
    let particleCount = 0;
    let distanceSinceLast = 0;
    let scorePerParticle = 0;
    segments.forEach(segment => {
      distanceSinceLast += segment.vector.magnitude();
      if (distanceSinceLast > 5) {
        distanceSinceLast = 0;
        const velocity = segment.vector.clone().normalize().rotate(Math.sign(Math.random() - 0.5) * Math.PI / 2).mulScalar(25 + Math.random() * 100);
        if (Math.random() > 0.25) {
          velocity.mulScalar(0.1);
        }
        const scale = (transferScore ? 3 : 1) * (1 + Math.random() * 0.5);
        const time = 500 + Math.random() * 500;
        const vscale = -scale * 0.7 * (1000 / time);
        const particle = new Particle(null, unit.skin.colors.particles[~~(Math.random() * unit.skin.colors.particles.length)], segment.start.clone(), velocity, null, Math.PI * 2 * (1 + Math.random()) * Math.sign(Math.random() - 0.5 || 1), scale, vscale, time, (particle: Particle) => {
          if (collector) {
            const homing: HomingParticle = particle as unknown as HomingParticle;
            homing.target = collector;
            homing.time = 1;
            homing.velocity = particle.velocity.magnitude();
            homing.acceleration = (1.5 + Math.random() * 0.5) * game.config.unitSpeed;
            homing.fn = () => {
              if (transferScore) {
                // The manager's current scheme always exists (bug: its accumulator is never initialized, see FINDINGS #7).
                collector.schemes.getScheme()!.accumulator += scorePerParticle;
              }
            };
            homing.vscale = 0;
            homing.scale = 1;
          }
        });
        game.particles.push(particle);
        particleCount++;
      }
    });
    scorePerParticle = victimScore / particleCount;
  }
}
