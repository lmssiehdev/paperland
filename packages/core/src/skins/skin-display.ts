import type { SkinAvatarHandle, SkinLayerHandle } from "../handles";

/** A layer of a SkinAvatar paired with its owning display (see SkinDisplay.sort). */
export interface SkinDisplayLayer {
  display: SkinAvatarHandle;
  layer: SkinLayerHandle;
}

export class SkinDisplay {
    displays: SkinAvatarHandle[];
    frontLayers: SkinDisplayLayer[];
    backLayers: SkinDisplayLayer[];
    maxScale: number;

  constructor() {
    this.displays = [];
    this.frontLayers = [];
    this.backLayers = [];
    this.maxScale = 0;
  }
  get ready() {
    return this.displays.every(display => display.ready);
  }
  sort() {
    this.frontLayers = ([] as SkinDisplayLayer[]).concat(...this.displays.map(display => display.frontLayers.map((frontLayer): SkinDisplayLayer => ({
      display: display,
      layer: frontLayer
    })))).sort((a, b) => a.layer.level - b.layer.level);
    this.backLayers = ([] as SkinDisplayLayer[]).concat(...this.displays.map(display => display.backLayers.map((backLayer): SkinDisplayLayer => ({
      display: display,
      layer: backLayer
    })))).sort((a, b) => b.layer.level - a.layer.level);
    this.maxScale = Math.max(...this.frontLayers.map(frontLayer => frontLayer.display.scale * frontLayer.layer.scale));
  }
  add(display: SkinAvatarHandle) {
    this.displays.push(display);
    this.sort();
  }
  remove(removed: SkinAvatarHandle) {
    this.displays = this.displays.filter(display => display !== removed);
    this.sort();
  }
}
