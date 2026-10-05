import { clamp, inRange, rangeOverlap } from "@paperio/core/engine/math";
import type { Bounds } from "@paperio/core/engine/polyline";
import type { Vec2 } from "@paperio/core/engine/vec2";
import type { Game } from "@paperio/core/game/game";

/** Per-frame view data passed to the renderers (see getRenderContext). */
export interface RenderContext {
  game: Game;
  view: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  viewWidth: number;
  viewHeight: number;
  devicePixelRatio: number;
  /** Screen diagonal relative to the reference resolution. */
  scaler: number;
  /** World -> canvas scale. */
  scale: number;
  /** World point at the center of the view. */
  origin: Vec2;
  pointInView: (point: Vec2, margin?: number) => boolean;
  boundsInView: (item: { bounds: Bounds }, margin?: number) => boolean;
  calcMult: (landscape: number, portrait: number) => number;
  viewScreenWidth: number;
  viewScreenHeight: number;
  fontSize: number;
  strokeWidth: number;
  backHeight: number;
  uiFont: string;
  padding: number;
  barHeight: number;
  halfBarHeight: number;
  barWidth: number;
  halfBarWidth: number;
}

/** Sizes the canvas and computes this frame's view data; moves the smoothed camera (game.origin). Moved from Game.getRenderContext. */
export function getRenderContext(game: Game): RenderContext | undefined {
  const { view } = game;
  if (!view) {
    return;
  }
  const { font } = game.config;
  // The game canvas is only ever used with a 2D context.
  const ctx = view.getContext("2d")!;
  const clientWidth = view.clientWidth;
  const clientHeight = view.clientHeight;
  const viewWidth = ~~(clientWidth * game.quality);
  const viewHeight = ~~(clientHeight * game.quality);
  if (view.width !== viewWidth || view.height !== viewHeight) {
    view.width = viewWidth;
    view.height = viewHeight;
  }
  const { devicePixelRatio } = window;
  const viewScreenWidth = viewWidth * devicePixelRatio;
  const viewScreenHeight = viewHeight * devicePixelRatio;
  const scaler =
    Math.sqrt(viewScreenWidth * viewScreenWidth + viewScreenHeight * viewScreenHeight) / Math.sqrt(2455780);
  const scale = (game.scale * scaler) / devicePixelRatio;
  let point: Vec2;
  if (game.player) {
    point = game.player.position;
    if (game.player.killer && game.config.followKiller) {
      point = game.player.killer.position;
    }
  } else {
    point = game.grid.center;
  }
  if (game.origin && (!game.player || game.player.killer)) {
    const dist = game.origin.distance(point);
    const cameraStep = dist / 30;
    const step = point.clone().sub(game.origin).normalize().mulScalar(cameraStep);
    point = game.origin.add(step);
  }
  game.origin = point.clone();
  const left = point.x - viewWidth / 2 / scale;
  const right = point.x + viewWidth / 2 / scale;
  const top = point.y - viewHeight / 2 / scale;
  const bottom = point.y + viewHeight / 2 / scale;
  const pointInView = (point: Vec2, margin = 0) =>
    inRange(left - margin, right + margin, point.x) && inRange(top - margin, bottom + margin, point.y);
  const boundsInView = (item: { bounds: Bounds }, margin = 0) =>
    rangeOverlap(item.bounds.left - margin, item.bounds.right + margin, left, right) > 0 &&
    rangeOverlap(item.bounds.top - margin, item.bounds.bottom + margin, top, bottom) > 0;
  const calcMult = (landscape: number, portrait: number) => {
    const landscapeAspect = 16 / 9;
    const portraitAspect = 9 / 16;
    const aspect = clamp(portraitAspect, landscapeAspect, viewScreenWidth / viewScreenHeight);
    const multRange = landscape - portrait;
    const aspectRange = portraitAspect - landscapeAspect;
    const intercept = -(multRange * landscapeAspect + aspectRange * landscape);
    return -(intercept + multRange * aspect) / aspectRange;
  };
  const fontSize = ~~(calcMult(20, 30) * scaler);
  const strokeWidth = game.config.platesStrokeWidth * scaler;
  const backHeight = ~~(scaler * 4);
  const uiFont = fontSize + "px " + font;
  const padding = ~~(scaler * 16);
  const halfBarHeight = ~~(fontSize * 0.75);
  const barHeight = halfBarHeight * 2;
  const barWidth = ~~(viewScreenWidth / calcMult(4, 2.25));
  const halfBarWidth = ~~(barWidth / 2);
  return {
    game: game,
    view: view,
    ctx: ctx,
    viewWidth: viewWidth,
    viewHeight: viewHeight,
    devicePixelRatio: devicePixelRatio,
    scaler: scaler,
    scale: scale,
    origin: point,
    pointInView: pointInView,
    boundsInView: boundsInView,
    calcMult: calcMult,
    viewScreenWidth: viewScreenWidth,
    viewScreenHeight: viewScreenHeight,
    fontSize: fontSize,
    strokeWidth: strokeWidth,
    backHeight: backHeight,
    uiFont: uiFont,
    padding: padding,
    barHeight: barHeight,
    halfBarHeight: halfBarHeight,
    barWidth: barWidth,
    halfBarWidth: halfBarWidth
  };
}
