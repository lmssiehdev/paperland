import { Vec2 } from "./vec2.js";

export const EPSILON = Math.pow(2, -26);
export const isZero = distance => Math.abs(distance) <= EPSILON;
export const nearlyEqual = (_0x2bc84b, _0x422639) => Math.abs(_0x2bc84b - _0x422639) <= EPSILON;
export const lerp = (_0x497e73, _0x1215fd, _0xc805ba) => _0x497e73 + (_0x1215fd - _0x497e73) * _0xc805ba;
export const easeOutCubic = _0x570a19 => --_0x570a19 * _0x570a19 * _0x570a19 + 1;
export const clamp = (_0x2cbd0e, _0x349ac0, _0x26617c) => {
  if (_0x26617c < _0x2cbd0e) {
    return _0x2cbd0e;
  }
  if (_0x26617c > _0x349ac0) {
    return _0x349ac0;
  }
  return _0x26617c;
};
export const cross2d = (_0x485df3, _0x2a85fc, _0x18d0a3, _0x4b57d3) => _0x485df3 * _0x4b57d3 - _0x2a85fc * _0x18d0a3;
export const inRange = (_0x50b329, _0x1b8016, _0x13f44a) => Math.min(_0x50b329, _0x1b8016) - EPSILON <= _0x13f44a && _0x13f44a <= Math.max(_0x50b329, _0x1b8016) + EPSILON;
export const rangeOverlap = (_0x398a2a, _0x88af21, _0x9eb278, _0x369d4a) => {
  if (_0x398a2a > _0x88af21) {
    [_0x398a2a, _0x88af21] = [_0x88af21, _0x398a2a];
  }
  if (_0x9eb278 > _0x369d4a) {
    [_0x9eb278, _0x369d4a] = [_0x369d4a, _0x9eb278];
  }
  return Math.min(_0x88af21, _0x369d4a) - Math.max(_0x398a2a, _0x9eb278);
};
export function pointInPolygon(_0x29a68f, x, y) {
  let _0x562c11 = false;
  let count = _0x29a68f.length;
  for (let i = 0, _0xea5051 = count - 1; i < count; _0xea5051 = i++) {
    let _0x3205eb = _0x29a68f[i][0];
    let _0x194c24 = _0x29a68f[i][1];
    let _0xdffee9 = _0x29a68f[_0xea5051][0];
    let _0x7ab471 = _0x29a68f[_0xea5051][1];
    if (pointOnSegment(x, y, _0x3205eb, _0x194c24, _0xdffee9, _0x7ab471)) {
      return 1;
    }
    var _0x5ac99c = _0x194c24 > y != _0x7ab471 > y && x < (_0xdffee9 - _0x3205eb) * (y - _0x194c24) / (_0x7ab471 - _0x194c24) + _0x3205eb;
    if (_0x5ac99c) {
      _0x562c11 = !_0x562c11;
    }
  }
  if (_0x562c11) {
    return 2;
  } else {
    return 0;
  }
}
function pointOnSegment(x, y, _0x546daf, _0x21e81c, _0x3d49bc, _0x3776c9) {
  let _0x539722 = _0x546daf - x;
  let _0x4520c5 = _0x21e81c - y;
  let _0xbbd220 = _0x3d49bc - x;
  let _0x59c1e4 = _0x3776c9 - y;
  let _0x3d83e6 = _0x539722 * _0x59c1e4 - _0x4520c5 * _0xbbd220;
  let _0x10959f = _0x539722 * _0xbbd220 + _0x4520c5 * _0x59c1e4;
  return _0x3d83e6 == 0 && _0x10959f <= 0;
}
let _0x5e2101 = 1;
export const nextId = () => _0x5e2101++;
const clock = typeof performance !== "undefined" ? performance : Date;
export const now = clock.now.bind(clock);
export function createRng(seed) {
  if (seed > 0 && seed < 1) {
    seed = Math.floor(seed * 1000000000);
  }
  let _0x449b8e = _0x51efea => {
    seed = (seed * 69069 + 1) % 2147483648;
    return seed % _0x51efea;
  };
  let result = _0x1dfc31 => _0x1dfc31 == null ? _0x449b8e(1000000000) / 1000000000 : _0x449b8e(_0x1dfc31);
  return result;
}
export function fmt2(_0x2134de) {
  return _0x2134de.toFixed(2);
}
export const TAU = Math.PI * 2;
const _0x1b92c1 = Math.cos(0);
const _0x55d618 = Math.sin(0);
export const _0xd09b08 = 240;
export const vecFromAngle = direction => {
  const cos = Math.cos(direction);
  const sin = Math.sin(direction);
  const x = _0x1b92c1 * cos - _0x55d618 * sin;
  const y = _0x1b92c1 * sin + _0x55d618 * cos;
  return Vec2.alloc(x, y);
};
