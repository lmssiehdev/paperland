export const hexToRgb = item => {
  const _0xb42ed3 = parseInt(item.substring(1, 3), 16);
  const _0x4c451e = parseInt(item.substring(3, 5), 16);
  const _0x900965 = parseInt(item.substring(5, 7), 16);
  return {
    r: _0xb42ed3,
    g: _0x4c451e,
    b: _0x900965
  };
};
export const rgbToHsv = ({
  r,
  g,
  b
}) => {
  let _0x41c2d1;
  let _0x3e79c6;
  let _0x1e228e;
  let _0x5d8573;
  let _0x1dd657;
  let _0xa339c4;
  let _0x2b6087;
  let _0x51507f;
  let _0x42049b;
  let _0x1c52d9;
  let _0x13db08;
  let _0x146af6;
  _0x41c2d1 = r / 255;
  _0x3e79c6 = g / 255;
  _0x1e228e = b / 255;
  _0x42049b = Math.max(_0x41c2d1, _0x3e79c6, _0x1e228e);
  _0x1c52d9 = _0x42049b - Math.min(_0x41c2d1, _0x3e79c6, _0x1e228e);
  _0x13db08 = _0x1e65f9 => (_0x42049b - _0x1e65f9) / 6 / _0x1c52d9 + 1 / 2;
  _0x146af6 = _0x2ed2f4 => Math.round(_0x2ed2f4 * 100) / 100;
  if (_0x1c52d9 == 0) {
    _0x2b6087 = _0x51507f = 0;
  } else {
    _0x51507f = _0x1c52d9 / _0x42049b;
    _0x5d8573 = _0x13db08(_0x41c2d1);
    _0x1dd657 = _0x13db08(_0x3e79c6);
    _0xa339c4 = _0x13db08(_0x1e228e);
    if (_0x41c2d1 === _0x42049b) {
      _0x2b6087 = _0xa339c4 - _0x1dd657;
    } else if (_0x3e79c6 === _0x42049b) {
      _0x2b6087 = 1 / 3 + _0x5d8573 - _0xa339c4;
    } else if (_0x1e228e === _0x42049b) {
      _0x2b6087 = 2 / 3 + _0x1dd657 - _0x5d8573;
    }
    if (_0x2b6087 < 0) {
      _0x2b6087 += 1;
    } else if (_0x2b6087 > 1) {
      _0x2b6087 -= 1;
    }
  }
  return {
    h: Math.round(_0x2b6087 * 360),
    s: _0x146af6(_0x51507f * 100),
    v: _0x146af6(_0x42049b * 100)
  };
};
const rgbToHex = ({
  r,
  g,
  b
}) => {
  const _0x76d75 = _0x42cf50 => {
    const result = _0x42cf50.toString(16);
    if (result.length < 2) {
      return "0" + result;
    } else {
      return result;
    }
  };
  return "#" + _0x76d75(r) + _0x76d75(g) + _0x76d75(b);
};
const hsvToRgb = ({
  h,
  s,
  v
}) => {
  var _0x18605b;
  var _0x1af8eb;
  var _0xd7fdbe;
  var _0x3ece4f;
  var _0xb9da1b;
  var _0x4d9923;
  var _0x42369d;
  var _0x5970af;
  h = Math.max(0, Math.min(360, h));
  s = Math.max(0, Math.min(100, s));
  v = Math.max(0, Math.min(100, v));
  s /= 100;
  v /= 100;
  if (s == 0) {
    _0x18605b = _0x1af8eb = _0xd7fdbe = v;
    return {
      r: Math.round(_0x18605b * 255),
      g: Math.round(_0x1af8eb * 255),
      b: Math.round(_0xd7fdbe * 255)
    };
  }
  h /= 60;
  _0x3ece4f = Math.floor(h);
  _0xb9da1b = h - _0x3ece4f;
  _0x4d9923 = v * (1 - s);
  _0x42369d = v * (1 - s * _0xb9da1b);
  _0x5970af = v * (1 - s * (1 - _0xb9da1b));
  switch (_0x3ece4f) {
    case 0:
      _0x18605b = v;
      _0x1af8eb = _0x5970af;
      _0xd7fdbe = _0x4d9923;
      break;
    case 1:
      _0x18605b = _0x42369d;
      _0x1af8eb = v;
      _0xd7fdbe = _0x4d9923;
      break;
    case 2:
      _0x18605b = _0x4d9923;
      _0x1af8eb = v;
      _0xd7fdbe = _0x5970af;
      break;
    case 3:
      _0x18605b = _0x4d9923;
      _0x1af8eb = _0x42369d;
      _0xd7fdbe = v;
      break;
    case 4:
      _0x18605b = _0x5970af;
      _0x1af8eb = _0x4d9923;
      _0xd7fdbe = v;
      break;
    default:
      _0x18605b = v;
      _0x1af8eb = _0x4d9923;
      _0xd7fdbe = _0x42369d;
  }
  return {
    r: Math.round(_0x18605b * 255),
    g: Math.round(_0x1af8eb * 255),
    b: Math.round(_0xd7fdbe * 255)
  };
};
export const hsvToHex = _0x8d0fc2 => rgbToHex(hsvToRgb(_0x8d0fc2));
export function hsvMulValue(_0x25a581, _0x474ff8) {
  let {
    h,
    s,
    v
  } = _0x25a581;
  v *= _0x474ff8;
  return {
    h: h,
    s: s,
    v: v
  };
}
export function hsvLighten(_0xf88f07, _0x5301b4) {
  let {
    h,
    s,
    v
  } = _0xf88f07;
  const _0x7e5e36 = 100 - v;
  v = Math.max(v * _0x5301b4, v + _0x5301b4 * _0x7e5e36 / 4);
  return {
    h: h,
    s: s,
    v: v
  };
}
export function hsvSetValue(_0x4e37c0, _0x5b933a) {
  let {
    h,
    s,
    v
  } = _0x4e37c0;
  v = _0x5b933a;
  return {
    h: h,
    s: s,
    v: v
  };
}
