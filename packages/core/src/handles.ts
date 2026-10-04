/**
 * Handles for objects only the client can create: the canvas, input controller, Path2D, images and
 * skin artwork.
 *
 * Core stores and passes these around but uses nothing beyond the members declared here, so it
 * compiles without the DOM lib. The client widens them by declaration merging (see
 * packages/client/src/core-handles.ts, e.g. `interface PathHandle extends Path2D {}`), so its renderer
 * sees `polygon.path` as a real Path2D. Headless (tests, server) they are just the shapes below.
 */

/** The game's canvas (client: HTMLCanvasElement). */
export interface ViewHandle {}

/** Local input device (client: input/controller.ts Controller). */
export interface ControllerHandle {}

/** A bitmap (client: HTMLImageElement). */
export interface ImageHandle {}

/** Vector outline built point by point (client: Path2D). Create with platform.createPath(). */
export interface PathHandle {
  moveTo(x: number, y: number): void;
  lineTo(x: number, y: number): void;
  closePath(): void;
}

/** Repeating fill of an image skin (client: skins/display.ts SkinPattern). */
export interface SkinPatternHandle {
  ready: boolean;
}

/** One layer of a skin avatar (client: skins/display.ts SkinLayer). */
export interface SkinLayerHandle {
  level: number;
  scale: number;
}

/** Artwork drawn on a unit (client: skins/display.ts SkinAvatar). */
export interface SkinAvatarHandle {
  ready: boolean;
  scale: number;
  frontLayers: SkinLayerHandle[];
  backLayers: SkinLayerHandle[];
}
