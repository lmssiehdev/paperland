import { Vec2 } from "@paperio/core/engine/vec2";
import type { TerritoryImager } from "@paperio/core/game/game";

/** PNG of the player's territory for the results screen (moved from Game.gameOver). */
export const renderTerritoryImage: TerritoryImager = player => {
  let minX = Infinity;
  let maxX = 0;
  let minY = Infinity;
  let maxY = 0;
  player.base.polygon.segments.forEach(segment => {
    const { x, y } = segment.start;
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  });
  const width = maxX - minX;
  const height = maxY - minY;
  const size = Math.max(width, height);
  const center = new Vec2(minX + width / 2, minY + height / 2);
  const imageSize = 500;
  const imageScale = (imageSize * 0.95) / size;
  const depth = imageSize / 100;
  const canvas = document.createElement("canvas");
  canvas.width = imageSize;
  canvas.height = imageSize;
  // A fresh canvas always provides a 2D context.
  const ctx = canvas.getContext("2d")!;
  ctx.scale(imageScale, imageScale);
  ctx.translate(imageSize / 2 / imageScale - center.x, imageSize / 2 / imageScale - center.y);
  ctx.translate(0, depth / imageScale);
  ctx.fillStyle = player.skin.colors.back;
  ctx.fill(player.base.polygon.path);
  ctx.translate(0, (depth * -2) / imageScale);
  ctx.fillStyle = (player.skin.pattern && player.skin.pattern.pattern) || player.skin.colors.main;
  ctx.fill(player.base.polygon.path);
  return canvas.toDataURL("image/png");
};
