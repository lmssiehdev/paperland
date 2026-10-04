import { PALETTE } from "../config.js";
import { hexToRgb, hsvLighten, hsvMulValue, hsvSetValue, hsvToHex, rgbToHsv } from "../engine/color.js";
import { createRng } from "../engine/math.js";
import { SkinAvatar, SkinDisplay, SkinPattern } from "./display.js";

var _0x3028d1 = Object.assign;
class Skin {
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
  addAsset(asset) {
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
class Asset {
  constructor(name) {
    this.pool = undefined;
    this.loadingStarted = false;
    this.name = name;
    this.content = {};
    this.ready = false;
  }
  load() {}
}
class ColorAsset extends Asset {
  constructor(pool, item, source) {
    super(item);
    this.pool = pool;
    this.source = source;
  }
}
class ImageAsset extends Asset {
  constructor(pool, name, source) {
    super(name);
    this.pool = pool;
    this.source = source;
  }
  load() {
    if (this.loadingStarted) {
      return;
    }
    this.loadingStarted = true;
    const _0x173606 = () => {
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
      this.content.pattern = new SkinPattern(this.pool.config, this.pool.view, this.pool.path, source.pattern, _0x173606);
    }
    if (source.avatar) {
      this.content.display = new SkinAvatar(this.pool.config, this.pool.path, source.avatar, _0x173606);
    }
  }
}
class AssetPool {
  constructor(name) {
    this.config = undefined;
    this.name = name;
    this.assets = [];
  }
  get(_0x58d069, _0x5971db) {
    let _0x1058fe;
    _0x1058fe = this.assets.find(asset => asset.name === _0x58d069 && (_0x5971db ? asset.ready === true : true));
    if (!_0x1058fe) {
      return null;
    }
    _0x1058fe.load();
    return _0x1058fe;
  }
}
export class ColoredPool extends AssetPool {
  constructor(config) {
    super("colors");
    this.config = config;
    this.add(PALETTE);
  }
  add(_0x1f90aa) {
    const {
      config
    } = this;
    this.assets.push(...(_0x1f90aa || []).map(item => {
      const _0x1b3992 = hexToRgb(item);
      const _0x89367 = rgbToHsv(_0x1b3992);
      const _0x468f36 = hsvMulValue(_0x89367, 0.75);
      const _0x1daa61 = hsvToHex(_0x468f36);
      const _0x10a960 = hsvMulValue(_0x89367, 0.5);
      const _0x5d6eb5 = hsvToHex(_0x10a960);
      const _0x48b60f = hsvLighten(_0x89367, 1.5);
      const _0x53ef8a = hsvToHex(_0x48b60f);
      const _0x4a4356 = hsvLighten(_0x89367, 2);
      const _0x545b5f = hsvToHex(_0x4a4356);
      const source = {
        main: item,
        back: _0x1daa61,
        nick: _0x5d6eb5,
        plate: _0x89367.v > 50 ? _0x5d6eb5 : _0x545b5f,
        particles: [hsvToHex(hsvSetValue(_0x89367, 100)), hsvToHex(hsvSetValue(_0x89367, 90)), hsvToHex(hsvSetValue(_0x89367, 80)), hsvToHex(hsvSetValue(_0x89367, 70)), hsvToHex(hsvSetValue(_0x89367, 60)), hsvToHex(hsvSetValue(_0x89367, 50)), hsvToHex(hsvSetValue(_0x89367, 40)), hsvToHex(hsvSetValue(_0x89367, 30)), hsvToHex(hsvSetValue(_0x89367, 20))]
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
  loadAsset(_0x49b2f3) {
    return _0x49b2f3;
  }
}
export class ClassicSkinPool extends AssetPool {
  constructor(config, view, path, result2, _0x2e765a = false) {
    super("classic");
    this.config = config;
    this.view = view;
    this.path = path;
    this.add(result2);
    if (_0x2e765a) {
      for (let asset of this.assets) {
        asset.load();
      }
    }
  }
  add(_0x4f0d2d) {
    this.assets.push(...(_0x4f0d2d || []).map(item => new ImageAsset(this, item.name, item)));
  }
}
function makeColorCanvas(_0x42a686, _0x46edb9) {
  const canvas = document.createElement("canvas");
  canvas.width = 100;
  canvas.height = 100;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = _0x46edb9;
  ctx.fillRect(0, 0, 100, 100);
  ctx.fillStyle = _0x42a686;
  ctx.fillRect(10, 10, 80, 80);
  return canvas;
}
class SkinManagerBase {
  constructor(seed) {
    this.usedBy = {};
    this.assets = {};
    this.unusedAssets = {};
    this.rng = createRng(seed);
  }
  registerAsset(asset, _0x41ecba) {
    this.unusedAssets[asset.name] = this.assets[asset.name] = {
      asset: asset,
      tag: _0x41ecba
    };
  }
  registerAssets(_0x326294, _0x1f77bd) {
    for (let asset of _0x326294.assets) {
      this.registerAsset(asset, _0x1f77bd);
    }
  }
  available(_0xedc88d) {
    let _0x4c671b = Object.values(this.unusedAssets);
    if (_0xedc88d) {
      return _0x4c671b.filter(item => item.tag == _0xedc88d).length;
    } else {
      return _0x4c671b.length;
    }
  }
  has(_0x3ee3b8) {
    return _0x3ee3b8 in this.unusedAssets;
  }
  randomAssetName(_0x358092, _0x34ea06 = true) {
    let _0x4e7371 = _0x34ea06 ? this.unusedAssets : this.assets;
    let _0x7beccd = Object.keys(_0x4e7371);
    if (_0x358092) {
      _0x7beccd = _0x7beccd.filter(item => _0x4e7371[item].tag == _0x358092);
    }
    let roll = this.rng(_0x7beccd.length);
    let result = _0x7beccd[roll];
    return result;
  }
  get(_0x2e4e12, _0x4f1e5b) {
    if (!_0x2e4e12) {
      _0x2e4e12 = this.randomAssetName(_0x4f1e5b);
    }
    let asset = this.assets[_0x2e4e12].asset;
    delete this.unusedAssets[_0x2e4e12];
    asset.load();
    const skin = new Skin();
    skin.addAsset(asset);
    skin.name = _0x2e4e12;
    this.usedBy[_0x2e4e12] = (this.usedBy[_0x2e4e12] || []).concat(skin);
    return skin;
  }
  release(_0x17a073) {
    this.usedBy[_0x17a073.name] = this.usedBy[_0x17a073.name].filter(item => item != _0x17a073);
    if (this.usedBy[_0x17a073.name].length == 0) {
      delete this.usedBy[_0x17a073.name];
      this.unusedAssets[_0x17a073.name] = this.assets[_0x17a073.name];
    }
  }
  reskin(skin) {
    let _0x18b3e0 = this.usedBy[skin];
    if (_0x18b3e0) {
      for (let item of _0x18b3e0) {
        item.user.setSkin(this.get());
      }
      delete this.usedBy[skin];
    }
  }
  getCitySkin(name) {
    debugger;
  }
}
export class SkinManager extends SkinManagerBase {
  constructor(coloredPool, classicSkinPool, _0xf7287f) {
    super(_0xf7287f);
    this.registerAssets(coloredPool, "colored");
    this.registerAssets(classicSkinPool, "classic");
  }
  getPlayerSkin(skin) {
    if (!skin) {
      return this.get(null, "colored");
    }
    this.reskin(skin);
    return this.get(skin);
  }
  getBotSkin() {
    let _0x1782a5 = this.rng() < 0.25 ? ["colored", "classic"] : ["classic", "colored"];
    let _0x44aa5f = this.randomAssetName(_0x1782a5[0], true) || this.randomAssetName(_0x1782a5[1]);
    return this.get(_0x44aa5f);
  }
}
