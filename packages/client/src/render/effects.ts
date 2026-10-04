import type { FloatingLabel } from "@paperio/core/game/floating-label";
import type { Particle } from "@paperio/core/game/particles";

// Drawing of core's visual effects (moved out of Particle.draw / FloatingLabel.draw so core has no canvas code).

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

export function drawParticle(ctx: CanvasRenderingContext2D, particle: Particle) {
  const { x, y } = particle.position;
  const { rotation, color, scale } = particle;
  const transform = ctx.getTransform();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.scale(scale, scale);
  if (color instanceof HTMLImageElement) {
    ctx.scale(1 / 20, 1 / 20);
    ctx.drawImage(color, -color.width / 2, -color.height / 2);
  } else {
    if (ctx.fillStyle !== color) {
      ctx.fillStyle = color;
    }
    ctx.fill(SQUARE_PATH);
  }
  ctx.setTransform(transform);
}
export function drawLabel(
  ctx: CanvasRenderingContext2D,
  label: FloatingLabel,
  font: string,
  scale: number,
  uiScale: number
) {
  const easeOutQuint = (t: number): number => 1 + --t * t * t * t * t;
  let alphaHex = Math.floor(easeOutQuint(label.time / label.duration) * 255).toString(16);
  if (alphaHex.length < 2) {
    alphaHex = "0" + alphaHex;
  }
  const point = label.unit ? label.unit.position.clone().add(label.position) : label.position;
  const { devicePixelRatio } = window;
  const fontSize = (uiScale * 30) / devicePixelRatio;
  ctx.save();
  ctx.fillStyle = "" + label.color + (label.fading ? alphaHex : "");
  ctx.font = "bold " + fontSize + "px " + font;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label.text, point.x * scale, point.y * scale);
  ctx.restore();
}
