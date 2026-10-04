import { Vec2 } from "../engine/vec2.js";

const _0x1d96bc = () => {
  const path = new Path2D();
  const _0x522de8 = 1;
  path.moveTo(-_0x522de8, -_0x522de8);
  path.lineTo(_0x522de8, -_0x522de8);
  path.lineTo(_0x522de8, _0x522de8);
  path.lineTo(-_0x522de8, _0x522de8);
  path.closePath();
  return path;
};
const _0x158cbc = _0x1d96bc();
export class Particle {
  constructor(target, color, position, velocity, acceleration, rotate, scale, vscale, time, fn) {
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
  update(dt) {
    const _0xc9a712 = dt / 1000;
    this.time -= dt;
    if (this.time <= 0) {
      if (this.fn) {
        this.fn(this);
      }
      return;
    }
    this.position.x += this.velocity.x * _0xc9a712;
    this.position.y += this.velocity.y * _0xc9a712;
    if (this.acceleration) {
      this.velocity.x += this.acceleration.x * _0xc9a712;
      this.velocity.y += this.acceleration.y * _0xc9a712;
    }
    this.rotation += this.rotate * _0xc9a712;
    this.scale += this.vscale * _0xc9a712;
  }
  draw(ctx) {
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
      ctx.fill(_0x158cbc);
    } else {
      ctx.scale(1 / 20, 1 / 20);
      ctx.drawImage(color, -color.width / 2, -color.height / 2);
    }
    ctx.setTransform(transform);
  }
  static nom(item, segment, trackWidth) {
    const sign = Math.sign(Math.random() - 0.5);
    const _0x44b37d = item.skin.container.maxScale * trackWidth;
    const {
      unitSpeed,
      baseHeight
    } = item.game.config;
    const velocity = segment.vector.clone().normalize().rotate(sign * Math.random() * (Math.PI / 30)).mulScalar(unitSpeed * (1 + Math.random()));
    const _0x4054ee = segment.vector.clone().rotate(Math.PI / 2).normalize().mulScalar(sign * Math.random() * _0x44b37d / 2);
    const _0x32752a = segment.vector.clone().normalize().mulScalar(_0x44b37d / 2);
    const acceleration = segment.vector.clone().normalize().mulScalar(unitSpeed * -6).rotate(sign * Math.random() * (Math.PI / 10));
    const {
      particles
    } = item.in.unit.skin.colors;
    const scale = 0.75 + Math.random() * 0.5;
    const particle = new Particle(null, particles[~~(Math.random() * particles.length)], segment.start.clone().add(_0x4054ee).add(_0x32752a).add(new Vec2(0, -baseHeight)), velocity, acceleration, Math.PI + Math.random() * Math.PI, scale, scale * -2, 300);
    return particle;
  }
}
export function spawnDeathParticles(unit, _0x46b899, segments, _0x5cc3d8) {
  let game = unit.game;
  if (game.visible) {
    const _0x48cafa = unit.schemes.scores();
    let _0x66ee8c = 0;
    let _0x20affe = 0;
    let _0x3abe5c = 0;
    segments.forEach(segment => {
      _0x20affe += segment.vector.magnitude();
      if (_0x20affe > 5) {
        _0x20affe = 0;
        const velocity = segment.vector.clone().normalize().rotate(Math.sign(Math.random() - 0.5) * Math.PI / 2).mulScalar(25 + Math.random() * 100);
        if (Math.random() > 0.25) {
          velocity.mulScalar(0.1);
        }
        const scale = (_0x5cc3d8 ? 3 : 1) * (1 + Math.random() * 0.5);
        const time = 500 + Math.random() * 500;
        const vscale = -scale * 0.7 * (1000 / time);
        const particle = new Particle(null, unit.skin.colors.particles[~~(Math.random() * unit.skin.colors.particles.length)], segment.start.clone(), velocity, null, Math.PI * 2 * (1 + Math.random()) * Math.sign(Math.random() - 0.5 || 1), scale, vscale, time, _0x553fdc => {
          if (_0x46b899) {
            _0x553fdc.target = _0x46b899;
            _0x553fdc.time = 1;
            _0x553fdc.velocity = _0x553fdc.velocity.magnitude();
            _0x553fdc.acceleration = (1.5 + Math.random() * 0.5) * game.config.unitSpeed;
            _0x553fdc.fn = () => {
              if (_0x5cc3d8) {
                _0x46b899.schemes.getScheme().accumulator += _0x3abe5c;
              }
            };
            _0x553fdc.vscale = 0;
            _0x553fdc.scale = 1;
          }
        });
        game.particles.push(particle);
        _0x66ee8c++;
      }
    });
    _0x3abe5c = _0x48cafa / _0x66ee8c;
  }
}
