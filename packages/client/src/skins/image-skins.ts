import type { Config } from "@paperio/core/config";
import { Asset, AssetPool } from "@paperio/core/skins/skin";
import type { SkinColors } from "@paperio/core/skins/skin";
import type { SkinAvatarConfig, SkinPatternConfig } from "./display";
import { SkinAvatar, SkinPattern } from "./display";

// Browser half of the skin system (moved from skins/skin.ts, which now lives in core): image skins
// loaded from assets/skins/, and the canvas avatar of plain-colored skins.

/** One entry of assets/skins/skins.json. */
export interface SkinConfig {
  name: string;
  colors?: Partial<SkinColors>;
  pattern?: SkinPatternConfig;
  avatar?: SkinAvatarConfig;
}

var assign = Object.assign;
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
      // Every skins.json entry has an avatar, so `display` is set below before any layer/pattern finishes loading.
      this.ready = this.content.display!.ready && (this.content.pattern ? this.content.pattern.ready : true);
    };
    const { source } = this;
    if (source.colors) {
      this.content.colors = assign(
        {
          main: "#000000",
          back: "#000000",
          nick: "#000000",
          plate: "#000000",
          particles: ["#000000"]
        },
        source.colors
      );
    }
    if (source.pattern) {
      this.content.pattern = new SkinPattern(
        this.pool.config,
        this.pool.view,
        this.pool.path,
        source.pattern,
        updateReady
      );
    }
    if (source.avatar) {
      this.content.display = new SkinAvatar(this.pool.config, this.pool.path, source.avatar, updateReady);
    }
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
  // A fresh canvas always provides a 2d context.
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = borderColor;
  ctx.fillRect(0, 0, 100, 100);
  ctx.fillStyle = innerColor;
  ctx.fillRect(10, 10, 80, 80);
  return canvas;
}

/** Avatar of a plain-colored skin (core's ColoredPool calls this; moved here from ColoredPool.add). */
export const createColorAvatar = (config: Config, source: SkinColors): SkinAvatar =>
  new SkinAvatar(config, "", {
    layers: [
      {
        src: makeColorCanvas(source.nick, source.nick)
      },
      {
        level: 1,
        src: makeColorCanvas(source.main, source.back)
      }
    ]
  });
