import type { Config } from "../config";
import { PALETTE } from "../config";
import { hexToRgb, hsvLighten, hsvMulValue, hsvSetValue, hsvToHex, rgbToHsv } from "../engine/color";
import type { Rng } from "../engine/math";
import { createRng } from "../engine/math";
import type { Game } from "../game/game";
import type { Unit } from "../game/units";
import type { SkinAvatarConfig, SkinPatternConfig } from "./display";
import { SkinAvatar, SkinDisplay, SkinPattern } from "./display";

/** Unit color scheme (hex strings). */
export interface SkinColors {
  main: string;
  back: string;
  nick: string;
  plate: string;
  particles: string[];
}

/** One entry of assets/skins/skins.json. */
export interface SkinConfig {
  name: string;
  colors?: Partial<SkinColors>;
  pattern?: SkinPatternConfig;
  avatar?: SkinAvatarConfig;
}

/** What a loaded asset contributes to a Skin. */
export interface AssetContent {
  colors?: SkinColors;
  pattern?: SkinPattern;
  display?: SkinAvatar;
  /** Shield pool assets only (not in this build): nickname color. */
  color?: string;
  /** Flag pool assets only (not in this build): round flag icon for minimap/leaderboard. */
  roundedFlag?: HTMLCanvasElement | HTMLImageElement;
}

/** Entry of SkinManager.assets: an asset plus the pool tag it was registered with. */
interface RegisteredAsset {
  asset: Asset;
  tag: string;
}

var _0x3028d1 = Object.assign;
export class Skin {
    config: unknown;
    user: Unit;
    name: string;
    assets: Asset[];
    colors: SkinColors;
    pattern: SkinPattern;
    container: SkinDisplay;

  constructor() {
    this.config = undefined;
    this.user = undefined;
    this.name = undefined;
    this.assets = [];
    this.colors = {
      main: "black",
      back: "black",
      nick: "black",
      plate: "black",
      particles: ["black"]
    };
    this.pattern = null;
    this.container = new SkinDisplay();
  }
  addAsset(asset: Asset) {
    if (asset.content.colors) {
      this.colors = asset.content.colors;
    }
    if (asset.content.pattern) {
      this.pattern = asset.content.pattern;
    }
    if (asset.content.display) {
      this.container.add(asset.content.display);
    }
    this.assets.push(asset);
  }
}
export class Asset {
    pool: AssetPool;
    loadingStarted: boolean;
    name: string;
    content: AssetContent;
    ready: boolean;

  constructor(name: string) {
    this.pool = undefined;
    this.loadingStarted = false;
    this.name = name;
    this.content = {};
    this.ready = false;
  }
  load() {}
}
export class ColorAsset extends Asset {
    declare pool: ColoredPool;
    source: SkinColors;

  constructor(pool: ColoredPool, item: string, source: SkinColors) {
    super(item);
    this.pool = pool;
    this.source = source;
  }
}
export class ImageAsset extends Asset {
    declare pool: ClassicSkinPool;
    source: SkinConfig;

  constructor(pool: ClassicSkinPool, name: string, source: SkinConfig) {
    super(name);
    this.pool = pool;
    this.source = source;
  }
  load() {
    if (this.loadingStarted) {
      return;
    }
    this.loadingStarted = true;
    const updateReady = () => {
      this.ready = this.content.display.ready && (this.content.pattern ? this.content.pattern.ready : true);
    };
    const {
      source
    } = this;
    if (source.colors) {
      this.content.colors = _0x3028d1({
        main: "#000000",
        back: "#000000",
        nick: "#000000",
        plate: "#000000",
        particles: ["#000000"]
      }, source.colors);
    }
    if (source.pattern) {
      this.content.pattern = new SkinPattern(this.pool.config, this.pool.view, this.pool.path, source.pattern, updateReady);
    }
    if (source.avatar) {
      this.content.display = new SkinAvatar(this.pool.config, this.pool.path, source.avatar, updateReady);
    }
  }
}
class AssetPool {
    config: Config;
    name: string;
    assets: Asset[];

  constructor(name: string) {
    this.config = undefined;
    this.name = name;
    this.assets = [];
  }
  get(name: string, onlyReady?: boolean) {
    let found: Asset;
    found = this.assets.find(asset => asset.name === name && (onlyReady ? asset.ready === true : true));
    if (!found) {
      return null;
    }
    found.load();
    return found;
  }
}
export class ColoredPool extends AssetPool {
  constructor(config: Config) {
    super("colors");
    this.config = config;
    this.add(PALETTE);
  }
  add(hexColors: string[]) {
    const {
      config
    } = this;
    this.assets.push(...(hexColors || []).map((item): ColorAsset => {
      const rgb = hexToRgb(item);
      const hsv = rgbToHsv(rgb);
      const darkerHsv = hsvMulValue(hsv, 0.75);
      const darker = hsvToHex(darkerHsv);
      const darkestHsv = hsvMulValue(hsv, 0.5);
      const darkest = hsvToHex(darkestHsv);
      const lighterHsv = hsvLighten(hsv, 1.5);
      const lighter = hsvToHex(lighterHsv);
      const lightestHsv = hsvLighten(hsv, 2);
      const lightest = hsvToHex(lightestHsv);
      const source: SkinColors = {
        main: item,
        back: darker,
        nick: darkest,
        plate: hsv.v > 50 ? darkest : lightest,
        particles: [hsvToHex(hsvSetValue(hsv, 100)), hsvToHex(hsvSetValue(hsv, 90)), hsvToHex(hsvSetValue(hsv, 80)), hsvToHex(hsvSetValue(hsv, 70)), hsvToHex(hsvSetValue(hsv, 60)), hsvToHex(hsvSetValue(hsv, 50)), hsvToHex(hsvSetValue(hsv, 40)), hsvToHex(hsvSetValue(hsv, 30)), hsvToHex(hsvSetValue(hsv, 20))]
      };
      const colorAsset = new ColorAsset(this, item, source);
      colorAsset.content.colors = source;
      if (config) {
        colorAsset.content.display = new SkinAvatar(config, "", {
          layers: [{
            src: makeColorCanvas(source.nick, source.nick)
          }, {
            level: 1,
            src: makeColorCanvas(source.main, source.back)
          }]
        });
      }
      colorAsset.ready = true;
      colorAsset.name = item;
      return colorAsset;
    }));
  }
  loadAsset(asset: Asset) {
    return asset;
  }
}
export class ClassicSkinPool extends AssetPool {
    view: HTMLCanvasElement;
    path: string;

  constructor(config: Config, view: HTMLCanvasElement, path: string, skinConfigs: SkinConfig[], preload = false) {
    super("classic");
    this.config = config;
    this.view = view;
    this.path = path;
    this.add(skinConfigs);
    if (preload) {
      for (let asset of this.assets) {
        asset.load();
      }
    }
  }
  add(skinConfigs: SkinConfig[]) {
    this.assets.push(...(skinConfigs || []).map((item): ImageAsset => new ImageAsset(this, item.name, item)));
  }
}
function makeColorCanvas(innerColor: string, borderColor: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 100;
  canvas.height = 100;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = borderColor;
  ctx.fillRect(0, 0, 100, 100);
  ctx.fillStyle = innerColor;
  ctx.fillRect(10, 10, 80, 80);
  return canvas;
}
class SkinManagerBase {
    usedBy: Record<string, Skin[]>;
    assets: Record<string, RegisteredAsset>;
    unusedAssets: Record<string, RegisteredAsset>;
    rng: Rng;
    /** Assigned externally by api.ts after the Game is created. */
    declare game?: Game;

  constructor(seed: number) {
    this.usedBy = {};
    this.assets = {};
    this.unusedAssets = {};
    this.rng = createRng(seed);
  }
  registerAsset(asset: Asset, tag: string) {
    this.unusedAssets[asset.name] = this.assets[asset.name] = {
      asset: asset,
      tag: tag
    };
  }
  registerAssets(pool: AssetPool, tag: string) {
    for (let asset of pool.assets) {
      this.registerAsset(asset, tag);
    }
  }
  /** Number of unused assets, optionally only those with the given tag. */
  available(tag?: string) {
    let unused = Object.values(this.unusedAssets);
    if (tag) {
      return unused.filter(item => item.tag == tag).length;
    } else {
      return unused.length;
    }
  }
  has(name: string) {
    return name in this.unusedAssets;
  }
  randomAssetName(tag?: string, onlyUnused = true) {
    let source = onlyUnused ? this.unusedAssets : this.assets;
    let names = Object.keys(source);
    if (tag) {
      names = names.filter(item => source[item].tag == tag);
    }
    let roll = this.rng(names.length);
    let result = names[roll];
    return result;
  }
  /** Creates a Skin from the named asset (random one with `tag` if no name) and marks it used. */
  get(name?: string, tag?: string) {
    if (!name) {
      name = this.randomAssetName(tag);
    }
    let asset = this.assets[name].asset;
    delete this.unusedAssets[name];
    asset.load();
    const skin = new Skin();
    skin.addAsset(asset);
    skin.name = name;
    this.usedBy[name] = (this.usedBy[name] || []).concat(skin);
    return skin;
  }
  release(skin: Skin) {
    this.usedBy[skin.name] = this.usedBy[skin.name].filter((item): boolean => item != skin);
    if (this.usedBy[skin.name].length == 0) {
      delete this.usedBy[skin.name];
      this.unusedAssets[skin.name] = this.assets[skin.name];
    }
  }
  /** Gives every unit currently using skin `name` a fresh random skin, freeing `name`. */
  reskin(name: string) {
    let users = this.usedBy[name];
    if (users) {
      for (let item of users) {
        item.user.setSkin(this.get());
      }
      delete this.usedBy[name];
    }
  }
  /** Flag mode only; stub in this build (always undefined). */
  getCitySkin(name: string): Skin {
    debugger;
    return undefined;
  }
}
export class SkinManager extends SkinManagerBase {
  constructor(coloredPool: ColoredPool, classicSkinPool: ClassicSkinPool, seed: number) {
    super(seed);
    this.registerAssets(coloredPool, "colored");
    this.registerAssets(classicSkinPool, "classic");
  }
  /** `skinName` is the skin the player picked (asset name); falls back to a random colored skin. */
  getPlayerSkin(skinName: string) {
    if (!skinName) {
      return this.get(null, "colored");
    }
    this.reskin(skinName);
    return this.get(skinName);
  }
  getBotSkin() {
    let tagOrder = this.rng() < 0.25 ? ["colored", "classic"] : ["classic", "colored"];
    let name = this.randomAssetName(tagOrder[0], true) || this.randomAssetName(tagOrder[1]);
    return this.get(name);
  }
}
