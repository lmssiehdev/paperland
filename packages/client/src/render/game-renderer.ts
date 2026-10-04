import { Vec2 } from "@paperio/core/engine/vec2";
import { renderDebugOverlay } from "./debug-overlay";
import type { Track } from "@paperio/core/game/track";
import type { Unit } from "@paperio/core/game/units";
import type { Game } from "@paperio/core/game/game";
import { drawLabel, drawParticle } from "./effects";
import { getRenderContext } from "./render-context";
import type { RenderContext } from "./render-context";
import type { Config } from "@paperio/core/config";
import type { Asset } from "@paperio/core/skins/skin";
import type { Tip } from "@paperio/core/game/achievements";
import type { SkinAvatar, SkinDisplay, SkinImageSource, SkinLayer } from "../skins/display";

type FillStyle = string | CanvasGradient | CanvasPattern;

// Cache keys for the background gradient. Never assigned, so the gradient is rebuilt every frame (see report).
let cachedGradient: CanvasGradient;
let cachedTopColor: string | undefined;
let cachedBottomColor: string | undefined;
let cachedGradientCtx: CanvasRenderingContext2D | undefined;
const getBackgroundGradient = (ctx: CanvasRenderingContext2D, space: { width: number; height: number; }, backgroundTopColor: string, backgroundBottomColor: string) => {
  if (cachedGradientCtx !== ctx || cachedTopColor !== backgroundTopColor || cachedBottomColor !== backgroundBottomColor) {
    cachedGradient = ctx.createLinearGradient(space.width / 2, 0, space.width / 2, space.height);
    cachedGradient.addColorStop(0, backgroundTopColor);
    cachedGradient.addColorStop(1, backgroundBottomColor);
  }
  return cachedGradient;
};
const strokePath = (ctx: CanvasRenderingContext2D, path: Path2D, style: FillStyle, lineWidth: number) => {
  ctx.strokeStyle = style;
  ctx.lineWidth = lineWidth;
  ctx.stroke(path);
};
const drawTrack = (ctx: CanvasRenderingContext2D, style: FillStyle, track: Track, position: Vec2, trackWidth: number) => {
  if (track.polyline.segments.length) {
    ctx.lineWidth = trackWidth;
    ctx.strokeStyle = style;
    ctx.stroke(track.polyline.path);
  }
};
const drawUnitName = (ctx: CanvasRenderingContext2D, unit: Unit, scale: number, scaler: number, font: string) => {
  const {
    devicePixelRatio
  } = window;
  const fontSize = scaler * 24 / devicePixelRatio;
  const shadowSize = scaler * 4 / devicePixelRatio;
  ctx.save();
  ctx.translate(unit.position.x, unit.position.y);
  ctx.scale(1.001 / scale, 1.001 / scale);
  ctx.font = fontSize + "px " + font;
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  let name = unit.name;
  if (unit == unit.game.player) {
    if (new Date().getSeconds() % 2 == 0) {
      if (unit.game.recording) {
        name = "Recording";
      } else if (unit.game.replaying) {
        name = "Replaying";
      }
    }
  }
  const textY = ~~(scale * -12);
  const outlineColor = "#363331";
  ctx.lineWidth = shadowSize / 4;
  ctx.strokeStyle = outlineColor;
  ctx.shadowColor = outlineColor;
  ctx.shadowBlur = shadowSize / 2;
  ctx.strokeText(name, 0, textY);
  ctx.fillStyle = outlineColor;
  ctx.fillText(name, 2, textY + 2);
  let textColor = "#dddddd";
  const asset = unit.skin.assets.find((asset: Asset) => asset.pool.name === "shields");
  if (asset) {
    // Shield assets always carry a nickname color (the shields pool isn't in this build).
    textColor = asset.content.color!;
  }
  ctx.fillStyle = textColor;
  ctx.shadowColor = textColor;
  ctx.shadowBlur = shadowSize / 3;
  ctx.fillText(name, 0, textY);
  ctx.restore();
};
const createCrownPath = () => {
  const path = new Path2D();
  const k = 5;
  path.moveTo(k * -3, k * -3);
  path.lineTo(k * -1, k * -1);
  path.lineTo(k * 0, k * -3);
  path.lineTo(k * 1, k * -1);
  path.lineTo(k * 3, k * -3);
  path.lineTo(k * 2, k * 1);
  path.lineTo(k * -2, k * 1);
  path.closePath();
  return path;
};
const CROWN_PATH = createCrownPath();
const drawCrown = (ctx: CanvasRenderingContext2D, unit: Unit, scale: number, scaler: number) => {
  const {
    devicePixelRatio
  } = window;
  const fontSize = scaler * 24 / devicePixelRatio;
  ctx.save();
  ctx.translate(unit.position.x, unit.position.y);
  ctx.scale(1 / (scale * devicePixelRatio), 1 / (scale * devicePixelRatio));
  ctx.fillStyle = "#ffff00";
  ctx.strokeStyle = "#ff8800";
  ctx.lineJoin = "round";
  ctx.lineWidth = 1;
  ctx.translate(0, scale * -10 * devicePixelRatio);
  ctx.translate(0, -fontSize * devicePixelRatio);
  ctx.scale(scaler, scaler);
  ctx.translate(0, -4);
  ctx.translate(0, -12);
  ctx.fill(CROWN_PATH);
  ctx.stroke(CROWN_PATH);
  ctx.restore();
};
const createSkullPath = () => {
  const path = new Path2D();
  const k = 1.6;
  path.moveTo(k * 0, k * -7);
  path.lineTo(k * 5, k * -6);
  path.lineTo(k * 7, k * -3);
  path.lineTo(k * 6, k * 2);
  path.lineTo(k * 4, k * 3);
  path.lineTo(k * 3, k * 6);
  path.lineTo(k * 0, k * 7);
  path.lineTo(k * -3, k * 6);
  path.lineTo(k * -4, k * 3);
  path.lineTo(k * -6, k * 2);
  path.lineTo(k * -7, k * -3);
  path.lineTo(k * -5, k * -6);
  path.closePath();
  path.arc(k * -3, k * -1, k * 2, 0, Math.PI * 2, true);
  path.closePath();
  path.arc(k * 3, k * -1, k * 2, 0, Math.PI * 2, true);
  path.closePath();
  path.moveTo(k * 0, k * 1);
  path.lineTo(k * -2, k * 3);
  path.lineTo(k * 0, k * 4);
  path.lineTo(k * 2, k * 3);
  path.closePath();
  return path;
};
const SKULL_PATH = createSkullPath();
const drawSkullIcon = (ctx: CanvasRenderingContext2D, x: number, y: number, scaler: number) => {
  ctx.save();
  ctx.fillStyle = "#ffffffcc";
  ctx.translate(x, y);
  ctx.scale(scaler, scaler);
  ctx.fill(SKULL_PATH);
  ctx.restore();
};
const drawSkinLayer = (config: Config, ctx: CanvasRenderingContext2D, unit: Unit, display: SkinAvatar, layer: SkinLayer) => {
  const {
    trackWidth
  } = config;
  if (layer.image) {
    const image = layer.image as SkinImageSource;
    const imageWidth = (image as HTMLImageElement).naturalWidth || image.width;
    const imageHeight = (image as HTMLImageElement).naturalHeight || image.height;
    const layerScale = trackWidth * display.scale * layer.scale / imageWidth;
    ctx.save();
    ctx.translate(unit.position.x, unit.position.y - config.baseHeight * layer.level);
    ctx.rotate(unit.direction + Math.PI / 2);
    ctx.translate((display.x + layer.x) * trackWidth, (display.y + layer.y) * trackWidth);
    let rotation = 0;
    if (layer.direction === "target") {
      const delta = (unit.target || new Vec2(0, 0)).clone().sub(unit.position);
      const angle = Math.atan2(delta.y, delta.x);
      rotation += angle - unit.direction;
    }
    if (layer.direction === "billboard") {
      rotation += -unit.direction - Math.PI / 2;
    }
    if (layer.rotation) {
      rotation += layer.rotation * 0.0174533;
    }
    if (rotation) {
      ctx.rotate(rotation);
    }
    ctx.scale(layerScale, layerScale);
    ctx.translate(imageWidth * -layer.pivot.x, imageHeight * -layer.pivot.y);
    ctx.drawImage(layer.image, 0, 0);
    ctx.restore();
  }
};
const drawSkinLayers = (config: Config, ctx: CanvasRenderingContext2D, unit: Unit, container: SkinDisplay, front: boolean) => {
  const layers = front ? container.frontLayers : container.backLayers;
  layers.forEach(item => drawSkinLayer(config, ctx, unit, item.display, item.layer));
};
/** Fills (and optionally strokes) a rect with per-corner radii [topLeft, topRight, bottomRight, bottomLeft] using the current fillStyle. */
const fillRoundedRect = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radii: number[], strokeWidth?: number) => {
  const [topLeft, topRight, bottomRight, bottomLeft] = radii;
  ctx.beginPath();
  ctx.moveTo(x + topLeft, y);
  ctx.lineTo(x + width - topRight, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
  ctx.lineTo(x + width, y + height - bottomRight);
  ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
  ctx.lineTo(x + bottomLeft, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
  ctx.lineTo(x, y + topLeft);
  ctx.quadraticCurveTo(x, y, x + topLeft, y);
  ctx.closePath();
  ctx.fill();
  if (strokeWidth) {
    ctx.strokeStyle = "#00000099";
    ctx.lineWidth = strokeWidth;
    ctx.stroke();
  }
};
const fillPath = (ctx: CanvasRenderingContext2D, path: Path2D, style: FillStyle) => {
  ctx.fillStyle = style;
  ctx.fill(path);
};
const drawBases = (renderContext: RenderContext) => {
  const {
    game: game,
    ctx,
    boundsInView
  } = renderContext;
  const {
    trackWidth
  } = game.config;
  game.units.forEach(unit => {
    if (boundsInView(unit.base.polygon, trackWidth) || game.debugView) {
      fillPath(ctx, unit.base.polygon.path, unit.skin.pattern && unit.skin.pattern.pattern || unit.skin.colors.main);
    }
  });
};
const cutTracksFromBases = (renderContext: RenderContext) => {
  const {
    game: game,
    ctx,
    boundsInView
  } = renderContext;
  const {
    trackWidth
  } = game.config;
  ctx.save();
  ctx.lineCap = "round";
  ctx.globalCompositeOperation = "destination-out";
  game.units.forEach(unit => {
    const {
      start
    } = unit.track.polyline;
    if (start) {
      if (boundsInView(unit.track.polyline, trackWidth)) {
        drawTrack(ctx, unit.skin.colors.main, unit.track, unit.position, trackWidth);
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.clip(unit.base.polygon.path);
        drawTrack(ctx, unit.skin.pattern && unit.skin.pattern.pattern || unit.skin.colors.main, unit.track, unit.position, trackWidth + 2);
        ctx.restore();
      }
    }
  });
  ctx.restore();
};
const drawFrontSkinLayers = (renderContext: RenderContext) => {
  const {
    game: game,
    ctx,
    pointInView
  } = renderContext;
  const {
    trackWidth
  } = game.config;
  game.units.forEach(unit => {
    if (pointInView(unit.position, trackWidth * 4)) {
      drawSkinLayers(game.config, ctx, unit, unit.skin.container, true);
    }
  });
};
const drawUnitNames = (renderContext: RenderContext) => {
  const {
    game: game,
    ctx,
    scale,
    scaler,
    pointInView
  } = renderContext;
  const {
    trackWidth,
    font
  } = game.config;
  game.units.forEach(unit => {
    if (pointInView(unit.position, trackWidth * 20) || game.debugView) {
      drawUnitName(ctx, unit, scale, scaler, font);
    }
  });
};
const drawBackSkinLayers = (renderContext: RenderContext) => {
  const {
    game: game,
    ctx,
    pointInView
  } = renderContext;
  const {
    trackWidth
  } = game.config;
  game.units.forEach(unit => {
    if (pointInView(unit.position, trackWidth * 4)) {
      drawSkinLayers(game.config, ctx, unit, unit.skin.container, false);
    }
  });
};
const drawTracks = (renderContext: RenderContext) => {
  const {
    game: game,
    ctx,
    boundsInView
  } = renderContext;
  const {
    trackWidth
  } = game.config;
  ctx.save();
  ctx.lineCap = "round";
  ctx.globalAlpha = 0.6;
  game.units.forEach(unit => {
    if (unit.insideBase !== unit.base) {
      if (boundsInView(unit.track.polyline, trackWidth)) {
        drawTrack(ctx, game.tailRecovered && unit == game.player ? "#f00" : unit.skin.colors.main, unit.track, unit.position, trackWidth);
      }
    }
  });
  ctx.restore();
};
const drawBaseSides = (renderContext: RenderContext) => {
  const {
    game: game,
    ctx,
    boundsInView
  } = renderContext;
  const {
    trackWidth
  } = game.config;
  game.units.forEach(unit => {
    if (boundsInView(unit.base.polygon, trackWidth)) {
      fillPath(ctx, unit.base.polygon.path, unit.skin.colors.back);
    }
  });
};
const drawArena = (renderContext: RenderContext) => {
  const {
    game: game,
    ctx,
    viewScreenWidth,
    viewScreenHeight
  } = renderContext;
  const {
    baseHeight,
    arenaColor,
    borderColor,
    backgroundTopColor,
    backgroundBottomColor
  } = game.config;
  fillPath(ctx, game.border.polygon.path, arenaColor);
  ctx.translate(0, baseHeight * 3);
  fillPath(ctx, game.border.polygon.path, borderColor);
  ctx.translate(0, baseHeight * -3);
  ctx.fillStyle = getBackgroundGradient(ctx, game.grid, backgroundTopColor, backgroundBottomColor);
  ctx.fillRect(viewScreenWidth / -2, viewScreenHeight / -2, game.grid.width + viewScreenWidth, game.grid.height + viewScreenHeight);
};
const drawParticles = (renderContext: RenderContext) => {
  const {
    game: game,
    ctx,
    pointInView
  } = renderContext;
  const {
    trackWidth
  } = game.config;
  ctx.save();
  game.particles.forEach(particle => particle.time > 0 && pointInView(particle.position, trackWidth) && drawParticle(ctx, particle));
  ctx.restore();
};
const drawLabels = (renderContext: RenderContext) => {
  const {
    game: game,
    ctx,
    scale,
    scaler
  } = renderContext;
  const {
    font
  } = game.config;
  ctx.scale(1 / scale, 1 / scale);
  game.labels.forEach(label => drawLabel(ctx, label, font, scale, scaler));
  ctx.scale(scale, scale);
};
const drawLeaderCrown = (renderContext: RenderContext) => {
  const {
    game: game,
    ctx,
    scale,
    scaler
  } = renderContext;
  const unit = game.units[0];
  if (unit) {
    drawCrown(ctx, unit, scale, scaler);
  }
};
const drawMinimap = (renderContext: RenderContext) => {
  // Only called from renderGame when game.player is set.
  const {
    game: game,
    ctx,
    scaler,
    calcMult,
    viewScreenWidth,
    viewScreenHeight,
    padding
  } = renderContext;
  const minimapSize = viewScreenWidth / calcMult(8, 3);
  const markerSize = game.grid.width / minimapSize * scaler * 3;
  ctx.save();
  ctx.translate(viewScreenWidth - padding - minimapSize, viewScreenHeight - padding - minimapSize);
  ctx.scale(minimapSize / game.grid.width, minimapSize / game.grid.height);
  fillPath(ctx, game.border.polygon.path, "#c2d6cdaa");
  fillPath(ctx, game.player!.base.polygon.path, game.player!.skin.colors.main);
  strokePath(ctx, game.player!.base.polygon.path, game.player!.skin.colors.back, markerSize / 2);
  drawTrack(ctx, game.player!.skin.colors.back, game.player!.track, game.player!.position, markerSize / 2);
  const borderStyle = game.units.some(unit => !game.isPlayer(unit) && unit.insideBase === game.player!.base) ? "#ff0000" : "#00000099";
  strokePath(ctx, game.border.polygon.path, borderStyle, markerSize);
  ctx.beginPath();
  ctx.arc(game.player!.position.x, game.player!.position.y, markerSize, 0, Math.PI * 2);
  ctx.fillStyle = game.player!.skin.colors.nick;
  ctx.fill();
  const asset = game.player!.skin.assets.find((asset: Asset) => asset.pool && asset.pool.name === "flags");
  const roundedFlag = asset && asset.content.roundedFlag;
  if (roundedFlag && game.player!.cities) {
    game.player!.cities.forEach((city: { position: Vec2; }) => {
      ctx.save();
      ctx.translate(city.position.x, city.position.y);
      ctx.scale(2, 2);
      ctx.drawImage(roundedFlag, -roundedFlag.width / 2, -roundedFlag.height / 2);
      ctx.restore();
    });
  }
  ctx.restore();
};
let leaderboardCanvas: HTMLCanvasElement | null;
window.addEventListener("resize", () => leaderboardCanvas = null, false);
const drawLeaderboard = (renderContext: RenderContext) => {
  let {
    ctx,
    devicePixelRatio
  } = renderContext;
  if (!leaderboardCanvas) {
    leaderboardCanvas = document.createElement("canvas");
    leaderboardCanvas.width = ~~renderContext.barWidth;
    leaderboardCanvas.height = ~~(renderContext.barHeight * 1.3 * 8);
  }
  if (renderContext.game.topListChanged) {
    renderContext.game.topListChanged = false;
    // A canvas always provides a 2d context.
    let ctx2 = leaderboardCanvas.getContext("2d")!;
    ctx2.save();
    ctx2.clearRect(0, 0, leaderboardCanvas.width, leaderboardCanvas.height);
    ctx2.translate(-ctx.canvas.width + leaderboardCanvas.width, 0);
    ctx2.scale(1 / devicePixelRatio, 1 / devicePixelRatio);
    renderLeaderboard(ctx2, renderContext);
    ctx2.restore();
  }
  ctx.save();
  ctx.resetTransform();
  ctx.drawImage(leaderboardCanvas, ctx.canvas.width - leaderboardCanvas.width, 0);
  ctx.restore();
};
const renderLeaderboard = (ctx: CanvasRenderingContext2D, renderContext: RenderContext) => {
  const {
    game: game,
    viewScreenWidth,
    padding,
    backHeight,
    barHeight,
    halfBarHeight,
    barWidth,
    halfBarWidth,
    strokeWidth,
    uiFont
  } = renderContext;
  let prevScoreWidth: number;
  const drawLeaderboardRow = (player: Unit, rank: string | number, i: number, topScore: number) => {
    const padding2 = padding + i * (barHeight * 1.3);
    const score = player.schemes.scores();
    let scoreWidth = halfBarWidth * (score / topScore);
    if (prevScoreWidth && scoreWidth > prevScoreWidth - halfBarWidth * 0.05) {
      scoreWidth = prevScoreWidth - halfBarWidth * 0.05;
    }
    prevScoreWidth = scoreWidth;
    const rowWidth = halfBarWidth + scoreWidth;
    let x = viewScreenWidth - rowWidth;
    const radii = [halfBarHeight, 0, 0, halfBarHeight];
    ctx.fillStyle = "#00000022";
    fillRoundedRect(ctx, x + backHeight, padding2 + backHeight * 3, barWidth, barHeight, radii);
    ctx.fillStyle = player.skin.colors.back;
    fillRoundedRect(ctx, x, padding2 + backHeight, barWidth, barHeight, radii, strokeWidth);
    ctx.fillStyle = player.skin.colors.main;
    fillRoundedRect(ctx, x, padding2, barWidth, barHeight, radii, strokeWidth);
    const asset = player.skin.assets.find((asset: Asset) => asset.pool && asset.pool.name === "flags");
    const roundedFlag = asset && asset.content.roundedFlag;
    if (roundedFlag) {
      const flagSize = barHeight * 0.8;
      const flagMargin = barHeight / 4;
      const flagScale = flagSize / roundedFlag.height;
      ctx.save();
      ctx.translate(x + flagMargin, padding2 + barHeight / 2);
      ctx.scale(flagScale, flagScale);
      ctx.drawImage(roundedFlag, 0, -roundedFlag.height / 2);
      ctx.restore();
      x += flagSize;
    }
    ctx.fillStyle = player.skin.colors.plate;
    ctx.font = uiFont;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(rank + " – " + player.schemes.print() + " " + player.name, x + halfBarHeight, padding2 + halfBarHeight * 1.1);
  };
  const unit = game.units[0];
  const topScore = unit && unit.schemes.scores();
  let playerShown = false;
  for (let i = 0; i < 5; i++) {
    const unit = game.units[i];
    if (unit) {
      if (game.isPlayer(unit)) {
        playerShown = true;
      }
      drawLeaderboardRow(unit, i + 1, i, topScore);
    }
  }
  if (!playerShown && game.player && !game.player.death) {
    const index = game.units.findIndex(unit => game.isPlayer(unit));
    drawLeaderboardRow(game.player, index + 1, 6, topScore);
  }
};
const drawScoreBar = (renderContext: RenderContext) => {
  // Only called from renderGame when game.player is set.
  const {
    game: game,
    ctx,
    padding,
    backHeight,
    barHeight,
    halfBarHeight,
    barWidth,
    strokeWidth,
    uiFont
  } = renderContext;
  const {
    player
  } = game;
  ctx.fillStyle = "#00000022";
  fillRoundedRect(ctx, 0, padding, barWidth, barHeight + backHeight, [0, (barHeight + backHeight) / 2, (barHeight + backHeight) / 2, 0]);
  const bestRatio = game.best ? Math.min(1, player!.schemes.scores() / game.best) : 1;
  const barWidth2 = barWidth * (0.25 + bestRatio * 0.75);
  ctx.fillStyle = player!.skin.colors.back;
  fillRoundedRect(ctx, 0, padding + backHeight, barWidth2, barHeight, [0, halfBarHeight, halfBarHeight, 0], strokeWidth);
  ctx.fillStyle = player!.skin.colors.main;
  fillRoundedRect(ctx, 0, padding, barWidth2, barHeight, [0, halfBarHeight, halfBarHeight, 0], strokeWidth);
  ctx.fillStyle = player!.skin.colors.plate;
  ctx.font = uiFont;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(player!.schemes.print(), halfBarHeight, padding + halfBarHeight * 1.1);
};
const drawBestScore = (renderContext: RenderContext) => {
  // Only called from renderGame when game.player is set.
  const {
    game: game,
    ctx,
    padding,
    backHeight,
    barHeight,
    uiFont
  } = renderContext;
  ctx.font = uiFont;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  let text = game.language.bestTxt + " " + game.player!.schemes.print(game.best);
  ctx.fillStyle = "#00000066";
  ctx.fillText(text, padding / 2, padding + barHeight + backHeight + padding / 2);
};
const drawKillCounter = (renderContext: RenderContext) => {
  // Only called from renderGame when game.player is set.
  const {
    game: game,
    ctx,
    scaler,
    padding,
    backHeight,
    barHeight,
    halfBarHeight,
    fontSize,
    uiFont
  } = renderContext;
  const padding2 = padding + barHeight + backHeight + fontSize + padding / 2 + 4;
  ctx.font = uiFont;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  let text = "x" + game.player!.statistics.kills;
  ctx.fillStyle = "#00000088";
  fillRoundedRect(ctx, 0, padding2, barHeight * 1.5 + ctx.measureText(text).width, barHeight, [0, halfBarHeight, halfBarHeight, 0]);
  drawSkullIcon(ctx, barHeight * 1.4 / 2, padding2 + barHeight / 2, scaler);
  ctx.fillStyle = "#ffffffcc";
  ctx.fillText(text, barHeight * 1.25, padding2 + halfBarHeight + barHeight * 0.03);
};
const drawNotification = (renderContext: RenderContext) => {
  const {
    game: game,
    ctx,
    scaler,
    padding,
    backHeight,
    barHeight,
    halfBarHeight,
    fontSize,
    uiFont,
    viewWidth,
    viewHeight,
    viewScreenWidth,
    viewScreenHeight
  } = renderContext;
  if (game.notifications.length) {
    // Notifications are always achievement Tips; GameNotification (game.ts) does not declare title/description/image/position yet.
    const notification = game.notifications[0] as Tip;
    if (notification.ready) {
      ctx.save();
      ctx.font = uiFont;
      const barHeight2 = fontSize * 2 + padding;
      const padding2 = notification.position() * (barHeight2 + padding) - barHeight2;
      const textWidth = Math.max(ctx.measureText(notification.title).width, ctx.measureText(notification.description).width);
      const iconSize = fontSize * 2;
      const barWidth = textWidth + padding * 5 + iconSize;
      const innerPadding = padding / 2;
      ctx.fillStyle = "#00000088";
      fillRoundedRect(ctx, (viewScreenWidth - barWidth) / 2, padding2, barWidth, barHeight2, [(barHeight + backHeight) / 2, (barHeight + backHeight) / 2, (barHeight + backHeight) / 2, (barHeight + backHeight) / 2]);
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "#ffffff";
      ctx.shadowBlur = 1;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText(notification.title, (viewScreenWidth - barWidth) / 2 + barWidth / 2 + iconSize / 2, padding2 + innerPadding);
      ctx.fillStyle = "#ffffff88";
      ctx.shadowColor = "#ffffff88";
      ctx.shadowBlur = 1;
      ctx.font = uiFont;
      ctx.fillText(notification.description, (viewScreenWidth - barWidth) / 2 + barWidth / 2 + iconSize / 2, padding2 + innerPadding + fontSize);
      ctx.shadowColor = "#ffffff";
      ctx.shadowBlur = 10;
      if (notification.image) {
        ctx.drawImage(notification.image, (viewScreenWidth - barWidth) / 2 + innerPadding, padding2 + innerPadding, iconSize, iconSize);
      }
      ctx.restore();
    }
  }
};
export function renderGame(game: Game) {
  const renderContext = getRenderContext(game);
  if (!renderContext) {
    return;
  }
  const {
    baseHeight
  } = game.config;
  let {
    ctx,
    devicePixelRatio,
    viewWidth,
    viewHeight,
    origin,
    scale
  } = renderContext;
  if (game.debugView) {
    scale = 0.5;
    origin = game.grid.center;
  }
  ctx.resetTransform();
  ctx.clearRect(0, 0, viewWidth, viewHeight);
  const offsetX = origin.x * scale - viewWidth / 2;
  const offsetY = origin.y * scale - viewHeight / 2;
  ctx.translate(-offsetX, -offsetY);
  ctx.scale(scale, scale);
  ctx.translate(0, -baseHeight);
  drawBases(renderContext);
  cutTracksFromBases(renderContext);
  ctx.translate(0, baseHeight);
  ctx.globalCompositeOperation = "destination-over";
  drawBackSkinLayers(renderContext);
  drawTracks(renderContext);
  drawBaseSides(renderContext);
  drawArena(renderContext);
  ctx.globalCompositeOperation = "source-over";
  drawFrontSkinLayers(renderContext);
  drawUnitNames(renderContext);
  drawParticles(renderContext);
  drawLabels(renderContext);
  drawLeaderCrown(renderContext);
  ctx.resetTransform();
  ctx.scale(1 / devicePixelRatio, 1 / devicePixelRatio);
  if (game.player) {
    drawLeaderboard(renderContext);
    drawScoreBar(renderContext);
    drawBestScore(renderContext);
    drawKillCounter(renderContext);
    drawMinimap(renderContext);
    drawNotification(renderContext);
  }
  if (game.debug || game.recording || game.replaying) {
    renderDebugOverlay(game);
  }
}
