// Widens core's client-only handles (packages/core/src/handles.ts) to the real browser types, so the
// renderer and UI see e.g. `polygon.path` as a Path2D and `game.view` as an HTMLCanvasElement.
// Types only: nothing imports this file at runtime; tsconfig "include" picks it up.
import type { Controller } from "./input/controller";
import type { SkinAvatar, SkinLayer, SkinPattern } from "./skins/display";

declare module "@paperio/core/handles" {
  interface ViewHandle extends HTMLCanvasElement {}
  interface ControllerHandle extends Controller {}
  // Also covers roundedFlag/particle bitmaps, which were image-or-canvas but are never set in this build.
  interface ImageHandle extends HTMLImageElement {}
  interface PathHandle extends Path2D {}
  interface SkinPatternHandle extends SkinPattern {}
  interface SkinLayerHandle extends SkinLayer {}
  interface SkinAvatarHandle extends SkinAvatar {}
}
