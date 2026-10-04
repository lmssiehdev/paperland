import type { Config } from "../config";
import { loadImage } from "../engine/load-image";

/** Bitmap a skin layer/pattern is drawn from (loaded image or generated canvas). */
export type SkinImageSource = HTMLImageElement | HTMLCanvasElement;

/** One avatar layer as described in skins.json (or generated for colored skins). */
export interface SkinLayerConfig {
  level?: number;
  url?: string;
  src?: SkinImageSource;
  rotation?: number;
  scale?: number;
  /** "target": layer rotates toward the unit's target instead of its heading. */
  direction?: string;
  pivot?: { x?: number; y?: number };
}

/** `avatar` entry of skins.json. */
export interface SkinAvatarConfig {
  scale?: number;
  x?: number;
  y?: number;
  layers: SkinLayerConfig[];
}

/** `pattern` entry of skins.json. */
export interface SkinPatternConfig {
  url: string;
  scale?: number;
}

/** A layer of a SkinAvatar paired with its owning display (see SkinDisplay.sort). */
export interface SkinDisplayLayer {
  display: SkinAvatar;
  layer: SkinLayer;
}

var _0x577878 = Object.assign;
export class SkinLayer {
    level: number;
    scale: number;
    x: number;
    y: number;
    direction: string;
    rotation: number;
    url: string;
    src: SkinImageSource;
    image: HTMLCanvasElement;
    config: Config;
    pivot: { x: number; y: number };

  constructor(config: Config, layerConfig: SkinLayerConfig, onLoad?: (layer: SkinLayer) => void) {
    this.level = 0;
    this.scale = 1;
    this.x = 0;
    this.y = 0;
    this.direction = "";
    this.rotation = 0;
    this.url = "";
    this.src = null;
    this.image = null;
    this.config = config;
    Object.assign(this, layerConfig);
    this.pivot = Object.assign({
      x: 0.5,
      y: 0.5
    }, layerConfig.pivot);
    let sourcePromise: Promise<SkinImageSource> = this.url ? loadImage(this.url) : this.src ? Promise.resolve(this.src) : null;
    if (sourcePromise) {
      sourcePromise.then(src => {
        this.src = src;
        this.rescale(1);
        if (onLoad) {
          onLoad(this);
        }
      });
    }
  }
  rescale(scale: number) {
    const {
      trackWidth,
      maxScale
    } = this.config;
    const maxPixelWidth = trackWidth * maxScale;
    const src = this.src;
    const srcWidth = (src as HTMLImageElement).naturalWidth || src.width;
    const srcHeight = (src as HTMLImageElement).naturalHeight || src.height;
    const factor = maxPixelWidth * scale * this.scale / srcWidth;
    const width = ~~(srcWidth * factor);
    const height = ~~(srcHeight * factor);
    const scaleX = width / srcWidth;
    const scaleY = height / srcHeight;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.scale(scaleX, scaleY);
    ctx.drawImage(src, 0, 0);
    this.image = canvas;
  }
}
let matrixSvg: SVGSVGElement;
export class SkinPattern {
    url: string;
    scale: number;
    src: HTMLImageElement;
    ready: boolean;
    pattern: CanvasPattern;

  constructor(config: Config, view: HTMLCanvasElement, path: string, pattern: SkinPatternConfig = {} as SkinPatternConfig, onReady?: () => void) {
    this.url = path + pattern.url;
    this.scale = pattern.scale || 1;
    this.src = null;
    this.ready = false;
    const {
      maxScale
    } = config;
    loadImage(this.url).then(src => {
      this.src = src;
      const srcWidth = ~~(src.naturalWidth || src.width);
      const srcHeight = ~~(src.naturalHeight || src.height);
      const factor = maxScale * 100 * this.scale / srcWidth;
      if (srcWidth == 0) {
        console.log(this.url + " has no width");
      }
      if (srcHeight == 0) {
        console.log(this.url + " has no heigth");
      }
      const width = Math.floor(srcWidth * factor) || 1;
      const height = Math.floor(srcHeight * factor) || 1;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(src, 0, 0, width + 1, height + 1);
      this.pattern = view.getContext("2d").createPattern(canvas, "repeat");
      const invScale = 1 / maxScale;
      if (!matrixSvg) {
        matrixSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      }
      const matrix = matrixSvg.createSVGMatrix().scale(invScale, invScale);
      if (this.pattern.setTransform) {
        this.pattern.setTransform(matrix);
      }
      this.ready = true;
      if (onReady) {
        onReady();
      }
    });
  }
}
export class SkinAvatar {
    layers: SkinLayer[];
    scale: number;
    x: number;
    y: number;
    ready: boolean;
    frontLayers: SkinLayer[];
    backLayers: SkinLayer[];

  constructor(config: Config, path: string, avatar: SkinAvatarConfig, onReady?: () => void) {
    this.layers = [];
    this.scale = 1;
    this.x = 0;
    this.y = 0;
    this.ready = false;
    Object.assign(this, avatar);
    let loadedCount = 0;
    const onLayerLoad = (layer: SkinLayer): void => {
      layer.rescale(this.scale);
      if (this.layers.length === ++loadedCount) {
        this.ready = true;
        if (onReady) {
          onReady();
        }
      }
    };
    // Object.assign above copied the raw layer configs; they are replaced by SkinLayer instances here.
    const layerConfigs: SkinLayerConfig[] = this.layers || [];
    this.layers = layerConfigs.map(item => new SkinLayer(config, _0x577878(_0x577878({}, item), {
      url: item.url && "" + path + item.url
    }), onLayerLoad));
    this.frontLayers = this.layers.filter(layer => layer.level >= 1).sort((a, b) => a.level - b.level);
    this.backLayers = this.layers.filter(layer => layer.level < 1).sort((a, b) => b.level - a.level);
  }
}
export class SkinDisplay {
    displays: SkinAvatar[];
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
  add(display: SkinAvatar) {
    this.displays.push(display);
    this.sort();
  }
  remove(removed: SkinAvatar) {
    this.displays = this.displays.filter(display => display !== removed);
    this.sort();
  }
}
