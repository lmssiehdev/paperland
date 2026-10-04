import { loadImage } from "../engine/load-image.js";

var _0x577878 = Object.assign;
class SkinLayer {
  constructor(config, _0x3a27c4, _0x5c0a2e) {
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
    Object.assign(this, _0x3a27c4);
    this.pivot = Object.assign({
      x: 0.5,
      y: 0.5
    }, _0x3a27c4.pivot);
    let _0x477016 = this.url ? loadImage(this.url) : this.src ? Promise.resolve(this.src) : null;
    if (_0x477016) {
      _0x477016.then(src => {
        this.src = src;
        this.rescale(1);
        if (_0x5c0a2e) {
          _0x5c0a2e(this);
        }
      });
    }
  }
  rescale(scale) {
    const {
      trackWidth,
      maxScale
    } = this.config;
    const _0x20f488 = trackWidth * maxScale;
    const src = this.src;
    const _0x7c46da = src.naturalWidth || src.width;
    const _0x5794f4 = src.naturalHeight || src.height;
    const _0x2dc538 = _0x20f488 * scale * this.scale / _0x7c46da;
    const _0x1c07b1 = ~~(_0x7c46da * _0x2dc538);
    const _0x306f8b = ~~(_0x5794f4 * _0x2dc538);
    const _0x20a4ae = _0x1c07b1 / _0x7c46da;
    const _0x145a85 = _0x306f8b / _0x5794f4;
    const canvas = document.createElement("canvas");
    canvas.width = _0x1c07b1;
    canvas.height = _0x306f8b;
    const ctx = canvas.getContext("2d");
    ctx.scale(_0x20a4ae, _0x145a85);
    ctx.drawImage(src, 0, 0);
    this.image = canvas;
  }
}
let _0x486b34;
export class SkinPattern {
  constructor(config, view, path, pattern = {}, _0x2317d8) {
    this.url = path + pattern.url;
    this.scale = pattern.scale || 1;
    this.src = null;
    this.ready = false;
    const {
      maxScale
    } = config;
    loadImage(this.url).then(src => {
      this.src = src;
      const _0x2a57f3 = ~~(src.naturalWidth || src.width);
      const _0xd536fd = ~~(src.naturalHeight || src.height);
      const _0x394a8d = maxScale * 100 * this.scale / _0x2a57f3;
      if (_0x2a57f3 == 0) {
        console.log(this.url + " has no width");
      }
      if (_0xd536fd == 0) {
        console.log(this.url + " has no heigth");
      }
      const _0x1e3321 = Math.floor(_0x2a57f3 * _0x394a8d) || 1;
      const _0x50e221 = Math.floor(_0xd536fd * _0x394a8d) || 1;
      const canvas = document.createElement("canvas");
      canvas.width = _0x1e3321;
      canvas.height = _0x50e221;
      canvas.getContext("2d").drawImage(src, 0, 0, _0x1e3321 + 1, _0x50e221 + 1);
      this.pattern = view.getContext("2d").createPattern(canvas, "repeat");
      const _0x3fc465 = 1 / maxScale;
      if (!_0x486b34) {
        _0x486b34 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      }
      const _0x146217 = _0x486b34.createSVGMatrix().scale(_0x3fc465, _0x3fc465);
      if (this.pattern.setTransform) {
        this.pattern.setTransform(_0x146217);
      }
      this.ready = true;
      if (_0x2317d8) {
        _0x2317d8();
      }
    });
  }
}
export class SkinAvatar {
  constructor(config, path, avatar, _0x5942cc) {
    this.layers = [];
    this.scale = 1;
    this.x = 0;
    this.y = 0;
    this.ready = false;
    Object.assign(this, avatar);
    let _0x6b881a = 0;
    const _0x41860f = _0x5c5381 => {
      _0x5c5381.rescale(this.scale);
      if (this.layers.length === ++_0x6b881a) {
        this.ready = true;
        if (_0x5942cc) {
          _0x5942cc();
        }
      }
    };
    this.layers = (this.layers || []).map(item => new SkinLayer(config, _0x577878(_0x577878({}, item), {
      url: item.url && "" + path + item.url
    }), _0x41860f));
    this.frontLayers = this.layers.filter(layer => layer.level >= 1).sort((a, b) => a.level - b.level);
    this.backLayers = this.layers.filter(layer => layer.level < 1).sort((a, b) => b.level - a.level);
  }
}
export class SkinDisplay {
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
    this.frontLayers = [].concat(...this.displays.map(display => display.frontLayers.map(frontLayer => ({
      display: display,
      layer: frontLayer
    })))).sort((a, b) => a.layer.level - b.layer.level);
    this.backLayers = [].concat(...this.displays.map(display => display.backLayers.map(backLayer => ({
      display: display,
      layer: backLayer
    })))).sort((a, b) => b.layer.level - a.layer.level);
    this.maxScale = Math.max(...this.frontLayers.map(frontLayer => frontLayer.display.scale * frontLayer.layer.scale));
  }
  add(_0x1bcc1a) {
    this.displays.push(_0x1bcc1a);
    this.sort();
  }
  remove(_0x4625c7) {
    this.displays = this.displays.filter(display => display !== _0x4625c7);
    this.sort();
  }
}
