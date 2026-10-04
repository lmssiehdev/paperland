import type { Config } from "../config";
import { PALETTE } from "../config";
import { hexToRgb, hsvLighten, hsvMulValue, hsvSetValue, hsvToHex, rgbToHsv } from "../engine/color";
import type { Rng } from "../engine/math";
import { createRng } from "../engine/math";
import type { Game } from "../game/game";
import type { Unit } from "../game/units";
import type { ImageHandle, SkinAvatarHandle, SkinPatternHandle } from "../handles";
import { SkinDisplay } from "./skin-display";

/** Unit color scheme (hex strings). */
export interface SkinColors {
  main: string;
  back: string;
  nick: string;
  plate: string;
  particles: string[];
}

/** What a loaded asset contributes to a Skin. */
export interface AssetContent {
  colors?: SkinColors;
  pattern?: SkinPatternHandle;
  display?: SkinAvatarHandle;
  /** Shield pool assets only (not in this build): nickname color. */
  color?: string;
  /** Flag pool assets only (not in this build): round flag icon for minimap/leaderboard. */
  roundedFlag?: ImageHandle;
}

/** Entry of SkinManager.assets: an asset plus the pool tag it was registered with. */
interface RegisteredAsset {
  asset: Asset;
  tag: string;
}

export class Skin {
  config: unknown;
  /** Set by Unit.setSkin, which every caller of SkinManager.get runs on the new skin. */
  user!: Unit;
  /** Set by SkinManager.get right after construction. */
  name!: string;
  assets: Asset[];
  colors: SkinColors;
  pattern: SkinPatternHandle | null;
  container: SkinDisplay;

  constructor() {
    this.config = undefined;
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
  /** Set by the subclass constructors (ColorAsset, ImageAsset); Asset itself is never instantiated. */
  pool!: AssetPool;
  loadingStarted: boolean;
  name: string;
  content: AssetContent;
  ready: boolean;

  constructor(name: string) {
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
export class AssetPool {
  /** Set by every subclass constructor right after super(). */
  config!: Config;
  name: string;
  assets: Asset[];

  constructor(name: string) {
    this.name = name;
    this.assets = [];
  }
  get(name: string, onlyReady?: boolean) {
    const found: Asset | undefined = this.assets.find(
      asset => asset.name === name && (onlyReady ? asset.ready === true : true)
    );
    if (!found) {
      return null;
    }
    found.load();
    return found;
  }
}
/** Builds the avatar drawn for a plain-colored skin (client: skins/image-skins.ts). Headless: none. */
export type ColorAvatarFactory = (config: Config, colors: SkinColors) => SkinAvatarHandle;

export class ColoredPool extends AssetPool {
  colorAvatar: ColorAvatarFactory | undefined;

  constructor(config: Config, colorAvatar?: ColorAvatarFactory) {
    super("colors");
    this.config = config;
    this.colorAvatar = colorAvatar;
    this.add(PALETTE);
  }
  add(hexColors: string[]) {
    const { config } = this;
    this.assets.push(
      ...(hexColors || []).map((item): ColorAsset => {
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
          particles: [
            hsvToHex(hsvSetValue(hsv, 100)),
            hsvToHex(hsvSetValue(hsv, 90)),
            hsvToHex(hsvSetValue(hsv, 80)),
            hsvToHex(hsvSetValue(hsv, 70)),
            hsvToHex(hsvSetValue(hsv, 60)),
            hsvToHex(hsvSetValue(hsv, 50)),
            hsvToHex(hsvSetValue(hsv, 40)),
            hsvToHex(hsvSetValue(hsv, 30)),
            hsvToHex(hsvSetValue(hsv, 20))
          ]
        };
        const colorAsset = new ColorAsset(this, item, source);
        colorAsset.content.colors = source;
        if (config && this.colorAvatar) {
          colorAsset.content.display = this.colorAvatar(config, source);
        }
        colorAsset.ready = true;
        colorAsset.name = item;
        return colorAsset;
      })
    );
  }
  loadAsset(asset: Asset) {
    return asset;
  }
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
    for (const asset of pool.assets) {
      this.registerAsset(asset, tag);
    }
  }
  /** Number of unused assets, optionally only those with the given tag. */
  available(tag?: string) {
    const unused = Object.values(this.unusedAssets);
    if (tag) {
      return unused.filter(item => item.tag === tag).length;
    } else {
      return unused.length;
    }
  }
  has(name: string) {
    return name in this.unusedAssets;
  }
  randomAssetName(tag?: string, onlyUnused = true) {
    const source = onlyUnused ? this.unusedAssets : this.assets;
    let names = Object.keys(source);
    if (tag) {
      names = names.filter(item => source[item].tag === tag);
    }
    const roll = this.rng(names.length);
    const result = names[roll];
    return result;
  }
  /** Creates a Skin from the named asset (random one with `tag` if no name) and marks it used. */
  get(name?: string | null, tag?: string) {
    if (!name) {
      name = this.randomAssetName(tag);
    }
    const asset = this.assets[name].asset;
    delete this.unusedAssets[name];
    asset.load();
    const skin = new Skin();
    skin.addAsset(asset);
    skin.name = name;
    this.usedBy[name] = (this.usedBy[name] || []).concat(skin);
    return skin;
  }
  release(skin: Skin) {
    this.usedBy[skin.name] = this.usedBy[skin.name].filter((item): boolean => item !== skin);
    if (this.usedBy[skin.name].length === 0) {
      delete this.usedBy[skin.name];
      this.unusedAssets[skin.name] = this.assets[skin.name];
    }
  }
  /** Gives every unit currently using skin `name` a fresh random skin, freeing `name`. */
  reskin(name: string) {
    const users = this.usedBy[name];
    if (users) {
      for (const item of users) {
        item.user.setSkin(this.get());
      }
      delete this.usedBy[name];
    }
  }
  /** Flag mode only; stub in this build (always undefined). */
  getCitySkin(name: string): Skin | undefined {
    return undefined;
  }
}
export class SkinManager extends SkinManagerBase {
  constructor(coloredPool: ColoredPool, classicSkinPool: AssetPool, seed: number) {
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
    const tagOrder = this.rng() < 0.25 ? ["colored", "classic"] : ["classic", "colored"];
    const name = this.randomAssetName(tagOrder[0], true) || this.randomAssetName(tagOrder[1]);
    return this.get(name);
  }
}
