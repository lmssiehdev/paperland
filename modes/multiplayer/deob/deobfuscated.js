(function (_0x52184a) {
  "use strict";
  const _0x204775 = 1e-9;
  const _0x10eb6c = _0x43a260 => -_0x204775 <= _0x43a260 && _0x43a260 <= _0x204775;
  const _0x56564b = (_0x281687, _0x49c08d) => Math.abs(_0x281687 - _0x49c08d) <= _0x204775;
  const _0x4e739f = (_0x438f8f, _0x2e366b, _0x119570) => _0x438f8f + (_0x2e366b - _0x438f8f) * _0x119570;
  const _0x342080 = _0x4a0008 => --_0x4a0008 * _0x4a0008 * _0x4a0008 + 1;
  const _0x2088ff = (_0xf653c0, _0x1b3641, _0x367e49) => {
    if (_0x367e49 < _0xf653c0) {
      return _0xf653c0;
    }
    if (_0x367e49 > _0x1b3641) {
      return _0x1b3641;
    }
    return _0x367e49;
  };
  const _0x18d637 = (_0x3bfd64, _0x3f43f5, _0x41be5d) => Math.min(_0x3bfd64, _0x3f43f5) - _0x204775 <= _0x41be5d && _0x41be5d <= Math.max(_0x3bfd64, _0x3f43f5) + _0x204775;
  const _0x58d461 = (_0x303f45, _0x336170, _0x4e3d0b, _0x57e83e) => {
    if (_0x303f45 > _0x336170) {
      [_0x303f45, _0x336170] = [_0x336170, _0x303f45];
    }
    if (_0x4e3d0b > _0x57e83e) {
      [_0x4e3d0b, _0x57e83e] = [_0x57e83e, _0x4e3d0b];
    }
    return Math.min(_0x336170, _0x57e83e) - Math.max(_0x303f45, _0x4e3d0b);
  };
  function _0x4258a5(_0x57e6ac, _0x229947) {
    let _0x5bd50c = _0x57e6ac.length;
    let _0x421984 = [];
    for (let _0x40f695 = 0, _0x3ff60e = _0x5bd50c - 1; _0x40f695 < _0x5bd50c; _0x3ff60e = _0x40f695++) {
      let _0x1fff41 = _0x57e6ac[_0x40f695];
      let _0x2f5bdc = _0x57e6ac[_0x3ff60e];
      if (_0x4f214b(_0x229947, {
        start: _0x1fff41,
        end: _0x2f5bdc
      })) {
        return 1;
      }
      var _0x5e0e4d = _0x1fff41.y > _0x229947.y != _0x2f5bdc.y > _0x229947.y && _0x229947.x < (_0x2f5bdc.x - _0x1fff41.x) * (_0x229947.y - _0x1fff41.y) / (_0x2f5bdc.y - _0x1fff41.y) + _0x1fff41.x;
      if (_0x5e0e4d) {
        _0x421984.push([_0x229947, _0x1fff41, _0x2f5bdc]);
      }
    }
    let _0x16b1ed = _0x421984.length % 2 == 1;
    if (_0x16b1ed) {
      return 2;
    } else {
      return 0;
    }
  }
  function _0x4f214b(_0x58de38, {
    start: _0x4f7ae8,
    end: _0x1302ae
  }, _0xd7c862 = _0x204775) {
    let _0x259e74 = _0x1302ae.x - _0x4f7ae8.x;
    let _0x3932d7 = _0x1302ae.y - _0x4f7ae8.y;
    var _0x458774 = _0x259e74 * _0x259e74 + _0x3932d7 * _0x3932d7;
    if (_0x458774 == 0) {
      return false;
    }
    let _0x49d2ca = _0x4f7ae8.x - _0x58de38.x;
    let _0x6bbdf8 = _0x4f7ae8.y - _0x58de38.y;
    var _0x436d3c = (-_0x49d2ca * _0x259e74 - _0x6bbdf8 * _0x3932d7) / _0x458774;
    if (_0x436d3c < 0) {
      return _0x49d2ca * _0x49d2ca + _0x6bbdf8 * _0x6bbdf8 <= _0xd7c862 * _0xd7c862;
    } else if (_0x436d3c >= 0 && _0x436d3c <= 1) {
      var _0x5a91fe = (_0x6bbdf8 * _0x259e74 - _0x49d2ca * _0x3932d7) / _0x458774;
      return Math.abs(_0x5a91fe) * Math.sqrt(_0x458774) <= _0xd7c862;
    } else {
      return (_0x1302ae.x - _0x58de38.x) ** 2 + (_0x1302ae.y - _0x58de38.y) ** 2 <= _0xd7c862 ** 2;
    }
  }
  function _0x192842(_0x2a72ef, _0x197df8, _0x409ff0) {
    let [_0x4b82fd, _0x5874de, _0x2cf4bb, _0x206ec5, _0x17b65b, _0x391a5a, _0x582979, _0x3d558a] = [_0x2a72ef.start.x, _0x2a72ef.start.y, _0x2a72ef.end.x, _0x2a72ef.end.y, _0x197df8.start.x, _0x197df8.start.y, _0x197df8.end.x, _0x197df8.end.y];
    let _0x16be20 = (_0x2cf4bb - _0x4b82fd) * (_0x3d558a - _0x391a5a) - (_0x582979 - _0x17b65b) * (_0x206ec5 - _0x5874de);
    let _0x2da8c6 = _0x4f214b(_0x2a72ef.start, _0x197df8) ? [_0x4b82fd, _0x5874de] : _0x4f214b(_0x2a72ef.end, _0x197df8) ? [_0x2cf4bb, _0x206ec5] : _0x4f214b(_0x197df8.start, _0x2a72ef) ? [_0x17b65b, _0x391a5a] : _0x4f214b(_0x197df8.end, _0x2a72ef) ? [_0x582979, _0x3d558a] : null;
    let _0x2fa596;
    if (!_0x10eb6c(_0x16be20)) {
      let _0x5e1c37 = _0x16be20 < 0 ? -1 : 1;
      _0x16be20 *= _0x5e1c37;
      let _0xfdc80b = ((_0x3d558a - _0x391a5a) * (_0x582979 - _0x4b82fd) + (_0x17b65b - _0x582979) * (_0x3d558a - _0x5874de)) * _0x5e1c37;
      let _0x4da3af = ((_0x5874de - _0x206ec5) * (_0x582979 - _0x4b82fd) + (_0x2cf4bb - _0x4b82fd) * (_0x3d558a - _0x5874de)) * _0x5e1c37;
      if (_0x409ff0) {
        [_0x409ff0[0], _0x409ff0[1]] = [_0xfdc80b / _0x16be20, _0x4da3af / _0x16be20];
      }
      if (_0xfdc80b >= 0 && _0xfdc80b <= _0x16be20 && _0x4da3af >= 0 && _0x4da3af <= _0x16be20) {
        _0x2fa596 = [_0x4b82fd + (_0x2cf4bb - _0x4b82fd) * _0xfdc80b / _0x16be20, _0x5874de + (_0x206ec5 - _0x5874de) * _0xfdc80b / _0x16be20];
      }
    }
    return _0x2da8c6 || _0x2fa596;
  }
  function _0x530c26(_0x39925f) {
    let _0x33c5af = 0;
    const _0x409527 = _0x39925f.length;
    for (var _0x455025 = 0, _0x548798 = _0x409527 - 1; _0x455025 < _0x409527; _0x548798 = _0x455025++) {
      _0x33c5af += _0x39925f[_0x548798].x * _0x39925f[_0x455025].y - _0x39925f[_0x455025].x * _0x39925f[_0x548798].y;
    }
    return _0x33c5af / 2;
  }
  function _0x3c4d7c(_0x98098c, _0x2b62a3) {
    if (_0x2b62a3) {
      let _0x15aef0 = _0x98098c.findIndex(_0x2a2d12 => _0x2a2d12.x == _0x2b62a3.x && _0x2a2d12.y == _0x2b62a3.y);
      if (_0x15aef0) {
        _0x98098c = [..._0x98098c.slice(_0x15aef0), ..._0x98098c.slice(0, _0x15aef0)];
      }
    }
    for (let _0xc82826 = 0; _0xc82826 < _0x98098c.length - 1; _0xc82826++) {
      if (_0x4f214b(_0x98098c[(_0xc82826 + 1) % _0x98098c.length], {
        start: _0x98098c[_0xc82826],
        end: _0x98098c[(_0xc82826 + 2) % _0x98098c.length]
      })) {
        _0x98098c.splice(_0xc82826 + 1, 1);
        _0xc82826--;
      }
    }
    return _0x98098c;
  }
  var _0x2732f6 = Object.defineProperty;
  var _0x53311c = (_0x29c40a, _0x4b8904, _0x473c1f) => {
    if (typeof _0x4b8904 !== "symbol") {
      _0x4b8904 += "";
    }
    if (_0x4b8904 in _0x29c40a) {
      return _0x2732f6(_0x29c40a, _0x4b8904, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x473c1f
      });
    }
    return _0x29c40a[_0x4b8904] = _0x473c1f;
  };
  class _0x31b6aa {
    constructor(_0x3a2f9b, _0x40cfd7, _0x34bbb3) {
      this.title = _0x40cfd7;
      this.description = _0x3a2f9b;
      this.state = 0;
      this.current = 0;
      this.states = [500, 3000, 500, 250];
      this.image = null;
      if (_0x34bbb3) {
        this.ready = false;
        const _0x1e03fc = new Image();
        _0x1e03fc.onload = () => {
          this.ready = true;
          this.image = _0x1e03fc;
        };
        _0x1e03fc.onerror = () => {
          this.ready = true;
        };
        _0x1e03fc.src = _0x34bbb3;
      } else {
        this.ready = true;
      }
    }
    update(_0x416ce5) {
      this.current += _0x416ce5;
      if (this.current > this.states[this.state]) {
        this.state++;
        this.current = 0;
      }
    }
    position() {
      switch (this.state) {
        case 0:
          return _0x342080(this.current / this.states[0]);
        case 1:
          return 1;
        case 2:
          return 1 - _0x342080(this.current / this.states[2]);
        default:
          return 0;
      }
    }
  }
  class _0x158da9 {
    constructor() {
      _0x53311c(this, "notifications", []);
    }
    update(_0x406762) {
      if (this.notifications.length) {
        const _0x3a7d72 = this.notifications[0];
        if (_0x3a7d72.ready) {
          _0x3a7d72.update(_0x406762);
          if (_0x3a7d72.state > 3) {
            this.notifications.shift();
          }
        }
      }
    }
    add(_0x2b0293) {
      this.notifications.push(_0x2b0293);
    }
  }
  var _0x405b89;
  var _0x147049;
  var _0x2e31e7;
  var _0x12f4e5;
  var _0x397906;
  var _0x34d56d;
  var _0x45f125;
  var _0x56c355;
  var _0x257689;
  var _0x4e476b;
  var _0x269a2d;
  var _0x53607d;
  var _0x42df34;
  var _0x47de15 = {};
  var _0x1744e0 = [];
  var _0x51c498 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var _0x4379e2 = Array.isArray;
  function _0x50c354(_0x5b543b, _0x23fb10) {
    for (var _0xf9f99b in _0x23fb10) {
      _0x5b543b[_0xf9f99b] = _0x23fb10[_0xf9f99b];
    }
    return _0x5b543b;
  }
  function _0x2bf11d(_0x1f156b) {
    if (_0x1f156b && _0x1f156b.parentNode) {
      _0x1f156b.parentNode.removeChild(_0x1f156b);
    }
  }
  function _0xce770f(_0x4de9dd, _0x418fae, _0xfe2a1) {
    var _0xd16f8c;
    var _0x7c9c85;
    var _0x17ca2b;
    var _0x441406 = {};
    for (_0x17ca2b in _0x418fae) {
      if (_0x17ca2b == "key") {
        _0xd16f8c = _0x418fae[_0x17ca2b];
      } else if (_0x17ca2b == "ref") {
        _0x7c9c85 = _0x418fae[_0x17ca2b];
      } else {
        _0x441406[_0x17ca2b] = _0x418fae[_0x17ca2b];
      }
    }
    if (arguments.length > 2) {
      _0x441406.children = arguments.length > 3 ? _0x405b89.call(arguments, 2) : _0xfe2a1;
    }
    if (typeof _0x4de9dd == "function" && _0x4de9dd.defaultProps != null) {
      for (_0x17ca2b in _0x4de9dd.defaultProps) {
        if (_0x441406[_0x17ca2b] === undefined) {
          _0x441406[_0x17ca2b] = _0x4de9dd.defaultProps[_0x17ca2b];
        }
      }
    }
    return _0x43c4c5(_0x4de9dd, _0x441406, _0xd16f8c, _0x7c9c85, null);
  }
  function _0x43c4c5(_0x1d48ad, _0x3f01da, _0x5de875, _0xed454e, _0x56bcf1) {
    var _0x3d31e2 = {
      type: _0x1d48ad,
      props: _0x3f01da,
      key: _0x5de875,
      ref: _0xed454e,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: undefined,
      __v: _0x56bcf1 == null ? ++_0x2e31e7 : _0x56bcf1,
      __i: -1,
      __u: 0
    };
    if (_0x56bcf1 == null && _0x147049.vnode != null) {
      _0x147049.vnode(_0x3d31e2);
    }
    return _0x3d31e2;
  }
  function _0xcf5735() {
    return {
      current: null
    };
  }
  function _0x120574(_0x379a7f) {
    return _0x379a7f.children;
  }
  function _0x220d8f(_0x3b68bc, _0x4ead39) {
    this.props = _0x3b68bc;
    this.context = _0x4ead39;
  }
  function _0x219072(_0x56ee66, _0x317e64) {
    if (_0x317e64 == null) {
      if (_0x56ee66.__) {
        return _0x219072(_0x56ee66.__, _0x56ee66.__i + 1);
      } else {
        return null;
      }
    }
    var _0x481649;
    for (; _0x317e64 < _0x56ee66.__k.length; _0x317e64++) {
      if ((_0x481649 = _0x56ee66.__k[_0x317e64]) != null && _0x481649.__e != null) {
        return _0x481649.__e;
      }
    }
    if (typeof _0x56ee66.type == "function") {
      return _0x219072(_0x56ee66);
    } else {
      return null;
    }
  }
  function _0x4f3472(_0x2ad568) {
    var _0x4d95bb;
    var _0x363387;
    if ((_0x2ad568 = _0x2ad568.__) != null && _0x2ad568.__c != null) {
      _0x2ad568.__e = _0x2ad568.__c.base = null;
      _0x4d95bb = 0;
      for (; _0x4d95bb < _0x2ad568.__k.length; _0x4d95bb++) {
        if ((_0x363387 = _0x2ad568.__k[_0x4d95bb]) != null && _0x363387.__e != null) {
          _0x2ad568.__e = _0x2ad568.__c.base = _0x363387.__e;
          break;
        }
      }
      return _0x4f3472(_0x2ad568);
    }
  }
  function _0x36953a(_0x2f6659) {
    if (!_0x2f6659.__d && (_0x2f6659.__d = true) && _0x397906.push(_0x2f6659) && !_0x59543d.__r++ || _0x34d56d != _0x147049.debounceRendering) {
      ((_0x34d56d = _0x147049.debounceRendering) || _0x45f125)(_0x59543d);
    }
  }
  function _0x59543d() {
    var _0x2b0f6b;
    var _0x163792;
    for (var _0x3ed236, _0x4d73ef, _0x155935, _0x36be52, _0x3a33ee, _0x1b861b = 1; _0x397906.length;) {
      if (_0x397906.length > _0x1b861b) {
        _0x397906.sort(_0x56c355);
      }
      _0x2b0f6b = _0x397906.shift();
      _0x1b861b = _0x397906.length;
      if (_0x2b0f6b.__d) {
        _0x3ed236 = undefined;
        _0x4d73ef = undefined;
        _0x155935 = (_0x4d73ef = (_0x163792 = _0x2b0f6b).__v).__e;
        _0x36be52 = [];
        _0x3a33ee = [];
        if (_0x163792.__P) {
          (_0x3ed236 = _0x50c354({}, _0x4d73ef)).__v = _0x4d73ef.__v + 1;
          if (_0x147049.vnode) {
            _0x147049.vnode(_0x3ed236);
          }
          _0x1c7ef0(_0x163792.__P, _0x3ed236, _0x4d73ef, _0x163792.__n, _0x163792.__P.namespaceURI, _0x4d73ef.__u & 32 ? [_0x155935] : null, _0x36be52, _0x155935 == null ? _0x219072(_0x4d73ef) : _0x155935, !!(_0x4d73ef.__u & 32), _0x3a33ee);
          _0x3ed236.__v = _0x4d73ef.__v;
          _0x3ed236.__.__k[_0x3ed236.__i] = _0x3ed236;
          _0x1738c4(_0x36be52, _0x3ed236, _0x3a33ee);
          _0x4d73ef.__e = _0x4d73ef.__ = null;
          if (_0x3ed236.__e != _0x155935) {
            _0x4f3472(_0x3ed236);
          }
        }
      }
    }
    _0x59543d.__r = 0;
  }
  function _0x594fb5(_0xaa4f04, _0x5ba76b, _0x3df069, _0x2d8dd2, _0x204850, _0x1f27cc, _0x340506, _0x13572c, _0x2466e4, _0x2e8922, _0x37d4fb) {
    var _0x39e629;
    var _0x85ac8;
    var _0x28e084;
    var _0x5dd280;
    var _0x65780f;
    var _0xe12c1c;
    var _0x53e19c;
    var _0x17ade9 = _0x2d8dd2 && _0x2d8dd2.__k || _0x1744e0;
    var _0x515e82 = _0x5ba76b.length;
    _0x2466e4 = _0xd411c3(_0x3df069, _0x5ba76b, _0x17ade9, _0x2466e4, _0x515e82);
    _0x39e629 = 0;
    for (; _0x39e629 < _0x515e82; _0x39e629++) {
      if ((_0x28e084 = _0x3df069.__k[_0x39e629]) != null) {
        _0x85ac8 = _0x28e084.__i == -1 ? _0x47de15 : _0x17ade9[_0x28e084.__i] || _0x47de15;
        _0x28e084.__i = _0x39e629;
        _0xe12c1c = _0x1c7ef0(_0xaa4f04, _0x28e084, _0x85ac8, _0x204850, _0x1f27cc, _0x340506, _0x13572c, _0x2466e4, _0x2e8922, _0x37d4fb);
        _0x5dd280 = _0x28e084.__e;
        if (_0x28e084.ref && _0x85ac8.ref != _0x28e084.ref) {
          if (_0x85ac8.ref) {
            _0x37f221(_0x85ac8.ref, null, _0x28e084);
          }
          _0x37d4fb.push(_0x28e084.ref, _0x28e084.__c || _0x5dd280, _0x28e084);
        }
        if (_0x65780f == null && _0x5dd280 != null) {
          _0x65780f = _0x5dd280;
        }
        if ((_0x53e19c = !!(_0x28e084.__u & 4)) || _0x85ac8.__k === _0x28e084.__k) {
          _0x2466e4 = _0x31b30c(_0x28e084, _0x2466e4, _0xaa4f04, _0x53e19c);
        } else if (typeof _0x28e084.type == "function" && _0xe12c1c !== undefined) {
          _0x2466e4 = _0xe12c1c;
        } else if (_0x5dd280) {
          _0x2466e4 = _0x5dd280.nextSibling;
        }
        _0x28e084.__u &= -7;
      }
    }
    _0x3df069.__e = _0x65780f;
    return _0x2466e4;
  }
  function _0xd411c3(_0x420321, _0x543c6a, _0x3288f0, _0x1eb12a, _0x27f208) {
    var _0x4f3675;
    var _0x1b4651;
    var _0x15e630;
    var _0x2dd304;
    var _0x55cc70;
    var _0x43dc25 = _0x3288f0.length;
    var _0x1b203c = _0x43dc25;
    var _0x434366 = 0;
    _0x420321.__k = new Array(_0x27f208);
    _0x4f3675 = 0;
    for (; _0x4f3675 < _0x27f208; _0x4f3675++) {
      if ((_0x1b4651 = _0x543c6a[_0x4f3675]) != null && typeof _0x1b4651 != "boolean" && typeof _0x1b4651 != "function") {
        _0x2dd304 = _0x4f3675 + _0x434366;
        (_0x1b4651 = _0x420321.__k[_0x4f3675] = typeof _0x1b4651 == "string" || typeof _0x1b4651 == "number" || typeof _0x1b4651 == "bigint" || _0x1b4651.constructor == String ? _0x43c4c5(null, _0x1b4651, null, null, null) : _0x4379e2(_0x1b4651) ? _0x43c4c5(_0x120574, {
          children: _0x1b4651
        }, null, null, null) : _0x1b4651.constructor == null && _0x1b4651.__b > 0 ? _0x43c4c5(_0x1b4651.type, _0x1b4651.props, _0x1b4651.key, _0x1b4651.ref ? _0x1b4651.ref : null, _0x1b4651.__v) : _0x1b4651).__ = _0x420321;
        _0x1b4651.__b = _0x420321.__b + 1;
        _0x15e630 = null;
        if ((_0x55cc70 = _0x1b4651.__i = _0x461619(_0x1b4651, _0x3288f0, _0x2dd304, _0x1b203c)) != -1) {
          _0x1b203c--;
          if (_0x15e630 = _0x3288f0[_0x55cc70]) {
            _0x15e630.__u |= 2;
          }
        }
        if (_0x15e630 == null || _0x15e630.__v == null) {
          if (_0x55cc70 == -1) {
            if (_0x27f208 > _0x43dc25) {
              _0x434366--;
            } else if (_0x27f208 < _0x43dc25) {
              _0x434366++;
            }
          }
          if (typeof _0x1b4651.type != "function") {
            _0x1b4651.__u |= 4;
          }
        } else if (_0x55cc70 != _0x2dd304) {
          if (_0x55cc70 == _0x2dd304 - 1) {
            _0x434366--;
          } else if (_0x55cc70 == _0x2dd304 + 1) {
            _0x434366++;
          } else {
            if (_0x55cc70 > _0x2dd304) {
              _0x434366--;
            } else {
              _0x434366++;
            }
            _0x1b4651.__u |= 4;
          }
        }
      } else {
        _0x420321.__k[_0x4f3675] = null;
      }
    }
    if (_0x1b203c) {
      for (_0x4f3675 = 0; _0x4f3675 < _0x43dc25; _0x4f3675++) {
        if ((_0x15e630 = _0x3288f0[_0x4f3675]) != null && (_0x15e630.__u & 2) == 0) {
          if (_0x15e630.__e == _0x1eb12a) {
            _0x1eb12a = _0x219072(_0x15e630);
          }
          _0x2bbdfb(_0x15e630, _0x15e630);
        }
      }
    }
    return _0x1eb12a;
  }
  function _0x31b30c(_0x53e922, _0x4a77b3, _0x4390e6, _0x3fdcdc) {
    var _0x162400;
    var _0x189726;
    if (typeof _0x53e922.type == "function") {
      _0x162400 = _0x53e922.__k;
      _0x189726 = 0;
      for (; _0x162400 && _0x189726 < _0x162400.length; _0x189726++) {
        if (_0x162400[_0x189726]) {
          _0x162400[_0x189726].__ = _0x53e922;
          _0x4a77b3 = _0x31b30c(_0x162400[_0x189726], _0x4a77b3, _0x4390e6, _0x3fdcdc);
        }
      }
      return _0x4a77b3;
    }
    if (_0x53e922.__e != _0x4a77b3) {
      if (_0x3fdcdc) {
        if (_0x4a77b3 && _0x53e922.type && !_0x4a77b3.parentNode) {
          _0x4a77b3 = _0x219072(_0x53e922);
        }
        _0x4390e6.insertBefore(_0x53e922.__e, _0x4a77b3 || null);
      }
      _0x4a77b3 = _0x53e922.__e;
    }
    do {
      _0x4a77b3 = _0x4a77b3 && _0x4a77b3.nextSibling;
    } while (_0x4a77b3 != null && _0x4a77b3.nodeType == 8);
    return _0x4a77b3;
  }
  function _0x1ce82b(_0x112f35, _0x2a6155) {
    _0x2a6155 = _0x2a6155 || [];
    if (_0x112f35 != null && typeof _0x112f35 != "boolean") {
      if (_0x4379e2(_0x112f35)) {
        _0x112f35.some(function (_0x17f429) {
          _0x1ce82b(_0x17f429, _0x2a6155);
        });
      } else {
        _0x2a6155.push(_0x112f35);
      }
    }
    return _0x2a6155;
  }
  function _0x461619(_0x35dc14, _0x5458ad, _0xdce8d3, _0x469ac4) {
    var _0x30a85a;
    var _0x27062b;
    var _0x42d725;
    var _0x1b663c = _0x35dc14.key;
    var _0x35d70c = _0x35dc14.type;
    var _0xb8d83b = _0x5458ad[_0xdce8d3];
    var _0x51305e = _0xb8d83b != null && (_0xb8d83b.__u & 2) == 0;
    if (_0xb8d83b === null && _0x35dc14.key == null || _0x51305e && _0x1b663c == _0xb8d83b.key && _0x35d70c == _0xb8d83b.type) {
      return _0xdce8d3;
    }
    if (_0x469ac4 > (_0x51305e ? 1 : 0)) {
      _0x30a85a = _0xdce8d3 - 1;
      _0x27062b = _0xdce8d3 + 1;
      while (_0x30a85a >= 0 || _0x27062b < _0x5458ad.length) {
        if ((_0xb8d83b = _0x5458ad[_0x42d725 = _0x30a85a >= 0 ? _0x30a85a-- : _0x27062b++]) != null && (_0xb8d83b.__u & 2) == 0 && _0x1b663c == _0xb8d83b.key && _0x35d70c == _0xb8d83b.type) {
          return _0x42d725;
        }
      }
    }
    return -1;
  }
  function _0x5be4c0(_0x5eb1be, _0x565437, _0x130e43) {
    if (_0x565437[0] == "-") {
      _0x5eb1be.setProperty(_0x565437, _0x130e43 == null ? "" : _0x130e43);
    } else {
      _0x5eb1be[_0x565437] = _0x130e43 == null ? "" : typeof _0x130e43 != "number" || _0x51c498.test(_0x565437) ? _0x130e43 : _0x130e43 + "px";
    }
  }
  function _0x5849ed(_0xe5fd26, _0x44184a, _0x3bc60a, _0x9b609c, _0x75856a) {
    var _0x2ab47d;
    var _0x4b924e;
    _0xc1ecd3: if (_0x44184a == "style") {
      if (typeof _0x3bc60a == "string") {
        _0xe5fd26.style.cssText = _0x3bc60a;
      } else {
        if (typeof _0x9b609c == "string") {
          _0xe5fd26.style.cssText = _0x9b609c = "";
        }
        if (_0x9b609c) {
          for (_0x44184a in _0x9b609c) {
            if (!_0x3bc60a || !(_0x44184a in _0x3bc60a)) {
              _0x5be4c0(_0xe5fd26.style, _0x44184a, "");
            }
          }
        }
        if (_0x3bc60a) {
          for (_0x44184a in _0x3bc60a) {
            if (!_0x9b609c || _0x3bc60a[_0x44184a] != _0x9b609c[_0x44184a]) {
              _0x5be4c0(_0xe5fd26.style, _0x44184a, _0x3bc60a[_0x44184a]);
            }
          }
        }
      }
    } else if (_0x44184a[0] == "o" && _0x44184a[1] == "n") {
      _0x2ab47d = _0x44184a != (_0x44184a = _0x44184a.replace(_0x257689, "$1"));
      _0x4b924e = _0x44184a.toLowerCase();
      _0x44184a = _0x4b924e in _0xe5fd26 || _0x44184a == "onFocusOut" || _0x44184a == "onFocusIn" ? _0x4b924e.slice(2) : _0x44184a.slice(2);
      _0xe5fd26.l ||= {};
      _0xe5fd26.l[_0x44184a + _0x2ab47d] = _0x3bc60a;
      if (_0x3bc60a) {
        if (_0x9b609c) {
          _0x3bc60a.u = _0x9b609c.u;
        } else {
          _0x3bc60a.u = _0x4e476b;
          _0xe5fd26.addEventListener(_0x44184a, _0x2ab47d ? _0x53607d : _0x269a2d, _0x2ab47d);
        }
      } else {
        _0xe5fd26.removeEventListener(_0x44184a, _0x2ab47d ? _0x53607d : _0x269a2d, _0x2ab47d);
      }
    } else {
      if (_0x75856a == "http://www.w3.org/2000/svg") {
        _0x44184a = _0x44184a.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      } else if (_0x44184a != "width" && _0x44184a != "height" && _0x44184a != "href" && _0x44184a != "list" && _0x44184a != "form" && _0x44184a != "tabIndex" && _0x44184a != "download" && _0x44184a != "rowSpan" && _0x44184a != "colSpan" && _0x44184a != "role" && _0x44184a != "popover" && _0x44184a in _0xe5fd26) {
        try {
          _0xe5fd26[_0x44184a] = _0x3bc60a == null ? "" : _0x3bc60a;
          break _0xc1ecd3;
        } catch (_0x1f2bd0) {}
      }
      if (typeof _0x3bc60a != "function") {
        if (_0x3bc60a == null || _0x3bc60a === false && _0x44184a[4] != "-") {
          _0xe5fd26.removeAttribute(_0x44184a);
        } else {
          _0xe5fd26.setAttribute(_0x44184a, _0x44184a == "popover" && _0x3bc60a == 1 ? "" : _0x3bc60a);
        }
      }
    }
  }
  function _0x30e8ce(_0x158e2b) {
    return function (_0x7f1881) {
      if (this.l) {
        var _0xb71f70 = this.l[_0x7f1881.type + _0x158e2b];
        if (_0x7f1881.t == null) {
          _0x7f1881.t = _0x4e476b++;
        } else if (_0x7f1881.t < _0xb71f70.u) {
          return;
        }
        return _0xb71f70(_0x147049.event ? _0x147049.event(_0x7f1881) : _0x7f1881);
      }
    };
  }
  function _0x1c7ef0(_0x34ce86, _0x27bb2d, _0x3b14d0, _0x537d8c, _0x5d6c8f, _0x37008b, _0x1cf486, _0x8f55dd, _0x45f90e, _0x402cac) {
    var _0xe273b8;
    var _0x5c5524;
    var _0xf5980e;
    var _0x3ecba4;
    var _0x48c253;
    var _0x1877c9;
    var _0x3281ea;
    var _0x76934b;
    var _0xcef89b;
    var _0x37532f;
    var _0x5b1586;
    var _0x5861ac;
    var _0x1804ee;
    var _0x4a7f5f;
    var _0xe47f32;
    var _0x57ad2d;
    var _0x20274a;
    var _0x1a7a78 = _0x27bb2d.type;
    if (_0x27bb2d.constructor != null) {
      return null;
    }
    if (_0x3b14d0.__u & 128) {
      _0x45f90e = !!(_0x3b14d0.__u & 32);
      _0x37008b = [_0x8f55dd = _0x27bb2d.__e = _0x3b14d0.__e];
    }
    if (_0xe273b8 = _0x147049.__b) {
      _0xe273b8(_0x27bb2d);
    }
    _0x3324c1: if (typeof _0x1a7a78 == "function") {
      try {
        _0x76934b = _0x27bb2d.props;
        _0xcef89b = "prototype" in _0x1a7a78 && _0x1a7a78.prototype.render;
        _0x37532f = (_0xe273b8 = _0x1a7a78.contextType) && _0x537d8c[_0xe273b8.__c];
        _0x5b1586 = _0xe273b8 ? _0x37532f ? _0x37532f.props.value : _0xe273b8.__ : _0x537d8c;
        if (_0x3b14d0.__c) {
          _0x3281ea = (_0x5c5524 = _0x27bb2d.__c = _0x3b14d0.__c).__ = _0x5c5524.__E;
        } else {
          if (_0xcef89b) {
            _0x27bb2d.__c = _0x5c5524 = new _0x1a7a78(_0x76934b, _0x5b1586);
          } else {
            _0x27bb2d.__c = _0x5c5524 = new _0x220d8f(_0x76934b, _0x5b1586);
            _0x5c5524.constructor = _0x1a7a78;
            _0x5c5524.render = _0x572a64;
          }
          if (_0x37532f) {
            _0x37532f.sub(_0x5c5524);
          }
          _0x5c5524.props = _0x76934b;
          _0x5c5524.state ||= {};
          _0x5c5524.context = _0x5b1586;
          _0x5c5524.__n = _0x537d8c;
          _0xf5980e = _0x5c5524.__d = true;
          _0x5c5524.__h = [];
          _0x5c5524._sb = [];
        }
        if (_0xcef89b && _0x5c5524.__s == null) {
          _0x5c5524.__s = _0x5c5524.state;
        }
        if (_0xcef89b && _0x1a7a78.getDerivedStateFromProps != null) {
          if (_0x5c5524.__s == _0x5c5524.state) {
            _0x5c5524.__s = _0x50c354({}, _0x5c5524.__s);
          }
          _0x50c354(_0x5c5524.__s, _0x1a7a78.getDerivedStateFromProps(_0x76934b, _0x5c5524.__s));
        }
        _0x3ecba4 = _0x5c5524.props;
        _0x48c253 = _0x5c5524.state;
        _0x5c5524.__v = _0x27bb2d;
        if (_0xf5980e) {
          if (_0xcef89b && _0x1a7a78.getDerivedStateFromProps == null && _0x5c5524.componentWillMount != null) {
            _0x5c5524.componentWillMount();
          }
          if (_0xcef89b && _0x5c5524.componentDidMount != null) {
            _0x5c5524.__h.push(_0x5c5524.componentDidMount);
          }
        } else {
          if (_0xcef89b && _0x1a7a78.getDerivedStateFromProps == null && _0x76934b !== _0x3ecba4 && _0x5c5524.componentWillReceiveProps != null) {
            _0x5c5524.componentWillReceiveProps(_0x76934b, _0x5b1586);
          }
          if (!_0x5c5524.__e && _0x5c5524.shouldComponentUpdate != null && _0x5c5524.shouldComponentUpdate(_0x76934b, _0x5c5524.__s, _0x5b1586) === false || _0x27bb2d.__v == _0x3b14d0.__v) {
            if (_0x27bb2d.__v != _0x3b14d0.__v) {
              _0x5c5524.props = _0x76934b;
              _0x5c5524.state = _0x5c5524.__s;
              _0x5c5524.__d = false;
            }
            _0x27bb2d.__e = _0x3b14d0.__e;
            _0x27bb2d.__k = _0x3b14d0.__k;
            _0x27bb2d.__k.some(function (_0x596c0a) {
              if (_0x596c0a) {
                _0x596c0a.__ = _0x27bb2d;
              }
            });
            _0x5861ac = 0;
            for (; _0x5861ac < _0x5c5524._sb.length; _0x5861ac++) {
              _0x5c5524.__h.push(_0x5c5524._sb[_0x5861ac]);
            }
            _0x5c5524._sb = [];
            if (_0x5c5524.__h.length) {
              _0x1cf486.push(_0x5c5524);
            }
            break _0x3324c1;
          }
          if (_0x5c5524.componentWillUpdate != null) {
            _0x5c5524.componentWillUpdate(_0x76934b, _0x5c5524.__s, _0x5b1586);
          }
          if (_0xcef89b && _0x5c5524.componentDidUpdate != null) {
            _0x5c5524.__h.push(function () {
              _0x5c5524.componentDidUpdate(_0x3ecba4, _0x48c253, _0x1877c9);
            });
          }
        }
        _0x5c5524.context = _0x5b1586;
        _0x5c5524.props = _0x76934b;
        _0x5c5524.__P = _0x34ce86;
        _0x5c5524.__e = false;
        _0x1804ee = _0x147049.__r;
        _0x4a7f5f = 0;
        if (_0xcef89b) {
          _0x5c5524.state = _0x5c5524.__s;
          _0x5c5524.__d = false;
          if (_0x1804ee) {
            _0x1804ee(_0x27bb2d);
          }
          _0xe273b8 = _0x5c5524.render(_0x5c5524.props, _0x5c5524.state, _0x5c5524.context);
          _0xe47f32 = 0;
          for (; _0xe47f32 < _0x5c5524._sb.length; _0xe47f32++) {
            _0x5c5524.__h.push(_0x5c5524._sb[_0xe47f32]);
          }
          _0x5c5524._sb = [];
        } else {
          do {
            _0x5c5524.__d = false;
            if (_0x1804ee) {
              _0x1804ee(_0x27bb2d);
            }
            _0xe273b8 = _0x5c5524.render(_0x5c5524.props, _0x5c5524.state, _0x5c5524.context);
            _0x5c5524.state = _0x5c5524.__s;
          } while (_0x5c5524.__d && ++_0x4a7f5f < 25);
        }
        _0x5c5524.state = _0x5c5524.__s;
        if (_0x5c5524.getChildContext != null) {
          _0x537d8c = _0x50c354(_0x50c354({}, _0x537d8c), _0x5c5524.getChildContext());
        }
        if (_0xcef89b && !_0xf5980e && _0x5c5524.getSnapshotBeforeUpdate != null) {
          _0x1877c9 = _0x5c5524.getSnapshotBeforeUpdate(_0x3ecba4, _0x48c253);
        }
        _0x57ad2d = _0xe273b8;
        if (_0xe273b8 != null && _0xe273b8.type === _0x120574 && _0xe273b8.key == null) {
          _0x57ad2d = _0x1049d8(_0xe273b8.props.children);
        }
        _0x8f55dd = _0x594fb5(_0x34ce86, _0x4379e2(_0x57ad2d) ? _0x57ad2d : [_0x57ad2d], _0x27bb2d, _0x3b14d0, _0x537d8c, _0x5d6c8f, _0x37008b, _0x1cf486, _0x8f55dd, _0x45f90e, _0x402cac);
        _0x5c5524.base = _0x27bb2d.__e;
        _0x27bb2d.__u &= -161;
        if (_0x5c5524.__h.length) {
          _0x1cf486.push(_0x5c5524);
        }
        if (_0x3281ea) {
          _0x5c5524.__E = _0x5c5524.__ = null;
        }
      } catch (_0x65c2d4) {
        _0x27bb2d.__v = null;
        if (_0x45f90e || _0x37008b != null) {
          if (_0x65c2d4.then) {
            for (_0x27bb2d.__u |= _0x45f90e ? 160 : 128; _0x8f55dd && _0x8f55dd.nodeType == 8 && _0x8f55dd.nextSibling;) {
              _0x8f55dd = _0x8f55dd.nextSibling;
            }
            _0x37008b[_0x37008b.indexOf(_0x8f55dd)] = null;
            _0x27bb2d.__e = _0x8f55dd;
          } else {
            for (_0x20274a = _0x37008b.length; _0x20274a--;) {
              _0x2bf11d(_0x37008b[_0x20274a]);
            }
            _0x38dd0c(_0x27bb2d);
          }
        } else {
          _0x27bb2d.__e = _0x3b14d0.__e;
          _0x27bb2d.__k = _0x3b14d0.__k;
          if (!_0x65c2d4.then) {
            _0x38dd0c(_0x27bb2d);
          }
        }
        _0x147049.__e(_0x65c2d4, _0x27bb2d, _0x3b14d0);
      }
    } else if (_0x37008b == null && _0x27bb2d.__v == _0x3b14d0.__v) {
      _0x27bb2d.__k = _0x3b14d0.__k;
      _0x27bb2d.__e = _0x3b14d0.__e;
    } else {
      _0x8f55dd = _0x27bb2d.__e = _0x428ed5(_0x3b14d0.__e, _0x27bb2d, _0x3b14d0, _0x537d8c, _0x5d6c8f, _0x37008b, _0x1cf486, _0x45f90e, _0x402cac);
    }
    if (_0xe273b8 = _0x147049.diffed) {
      _0xe273b8(_0x27bb2d);
    }
    if (_0x27bb2d.__u & 128) {
      return undefined;
    } else {
      return _0x8f55dd;
    }
  }
  function _0x38dd0c(_0x57f94d) {
    if (_0x57f94d && _0x57f94d.__c) {
      _0x57f94d.__c.__e = true;
    }
    if (_0x57f94d && _0x57f94d.__k) {
      _0x57f94d.__k.forEach(_0x38dd0c);
    }
  }
  function _0x1738c4(_0xe51d36, _0x4a1bf6, _0x4abc03) {
    for (var _0x2cfbb6 = 0; _0x2cfbb6 < _0x4abc03.length; _0x2cfbb6++) {
      _0x37f221(_0x4abc03[_0x2cfbb6], _0x4abc03[++_0x2cfbb6], _0x4abc03[++_0x2cfbb6]);
    }
    if (_0x147049.__c) {
      _0x147049.__c(_0x4a1bf6, _0xe51d36);
    }
    _0xe51d36.some(function (_0x3e93c6) {
      try {
        _0xe51d36 = _0x3e93c6.__h;
        _0x3e93c6.__h = [];
        _0xe51d36.some(function (_0x237d51) {
          _0x237d51.call(_0x3e93c6);
        });
      } catch (_0x1e316e) {
        _0x147049.__e(_0x1e316e, _0x3e93c6.__v);
      }
    });
  }
  function _0x1049d8(_0x526b53) {
    if (typeof _0x526b53 != "object" || _0x526b53 == null || _0x526b53.__b && _0x526b53.__b > 0) {
      return _0x526b53;
    } else if (_0x4379e2(_0x526b53)) {
      return _0x526b53.map(_0x1049d8);
    } else {
      return _0x50c354({}, _0x526b53);
    }
  }
  function _0x428ed5(_0x68af1f, _0x4520f0, _0x342295, _0xdc506d, _0x182cf1, _0x3f2386, _0x351437, _0xf30cfc, _0x155c74) {
    var _0x14ca70;
    var _0x4ba643;
    var _0xe1470d;
    var _0x305355;
    var _0x20c8c4;
    var _0x17e071;
    var _0x8a52c0;
    var _0xb233d = _0x342295.props;
    var _0x5d3e6 = _0x4520f0.props;
    var _0x58c9ee = _0x4520f0.type;
    if (_0x58c9ee == "svg") {
      _0x182cf1 = "http://www.w3.org/2000/svg";
    } else if (_0x58c9ee == "math") {
      _0x182cf1 = "http://www.w3.org/1998/Math/MathML";
    } else {
      _0x182cf1 ||= "http://www.w3.org/1999/xhtml";
    }
    if (_0x3f2386 != null) {
      for (_0x14ca70 = 0; _0x14ca70 < _0x3f2386.length; _0x14ca70++) {
        if ((_0x20c8c4 = _0x3f2386[_0x14ca70]) && "setAttribute" in _0x20c8c4 == !!_0x58c9ee && (_0x58c9ee ? _0x20c8c4.localName == _0x58c9ee : _0x20c8c4.nodeType == 3)) {
          _0x68af1f = _0x20c8c4;
          _0x3f2386[_0x14ca70] = null;
          break;
        }
      }
    }
    if (_0x68af1f == null) {
      if (_0x58c9ee == null) {
        return document.createTextNode(_0x5d3e6);
      }
      _0x68af1f = document.createElementNS(_0x182cf1, _0x58c9ee, _0x5d3e6.is && _0x5d3e6);
      if (_0xf30cfc) {
        if (_0x147049.__m) {
          _0x147049.__m(_0x4520f0, _0x3f2386);
        }
        _0xf30cfc = false;
      }
      _0x3f2386 = null;
    }
    if (_0x58c9ee == null) {
      if (_0xb233d !== _0x5d3e6 && (!_0xf30cfc || _0x68af1f.data != _0x5d3e6)) {
        _0x68af1f.data = _0x5d3e6;
      }
    } else {
      _0x3f2386 = _0x3f2386 && _0x405b89.call(_0x68af1f.childNodes);
      _0xb233d = _0x342295.props || _0x47de15;
      if (!_0xf30cfc && _0x3f2386 != null) {
        _0xb233d = {};
        _0x14ca70 = 0;
        for (; _0x14ca70 < _0x68af1f.attributes.length; _0x14ca70++) {
          _0xb233d[(_0x20c8c4 = _0x68af1f.attributes[_0x14ca70]).name] = _0x20c8c4.value;
        }
      }
      for (_0x14ca70 in _0xb233d) {
        _0x20c8c4 = _0xb233d[_0x14ca70];
        if (_0x14ca70 == "children") ;else if (_0x14ca70 == "dangerouslySetInnerHTML") {
          _0xe1470d = _0x20c8c4;
        } else if (!(_0x14ca70 in _0x5d3e6)) {
          if (_0x14ca70 == "value" && "defaultValue" in _0x5d3e6 || _0x14ca70 == "checked" && "defaultChecked" in _0x5d3e6) {
            continue;
          }
          _0x5849ed(_0x68af1f, _0x14ca70, null, _0x20c8c4, _0x182cf1);
        }
      }
      for (_0x14ca70 in _0x5d3e6) {
        _0x20c8c4 = _0x5d3e6[_0x14ca70];
        if (_0x14ca70 == "children") {
          _0x305355 = _0x20c8c4;
        } else if (_0x14ca70 == "dangerouslySetInnerHTML") {
          _0x4ba643 = _0x20c8c4;
        } else if (_0x14ca70 == "value") {
          _0x17e071 = _0x20c8c4;
        } else if (_0x14ca70 == "checked") {
          _0x8a52c0 = _0x20c8c4;
        } else if ((!_0xf30cfc || typeof _0x20c8c4 == "function") && _0xb233d[_0x14ca70] !== _0x20c8c4) {
          _0x5849ed(_0x68af1f, _0x14ca70, _0x20c8c4, _0xb233d[_0x14ca70], _0x182cf1);
        }
      }
      if (_0x4ba643) {
        if (!_0xf30cfc && (!_0xe1470d || _0x4ba643.__html != _0xe1470d.__html && _0x4ba643.__html != _0x68af1f.innerHTML)) {
          _0x68af1f.innerHTML = _0x4ba643.__html;
        }
        _0x4520f0.__k = [];
      } else {
        if (_0xe1470d) {
          _0x68af1f.innerHTML = "";
        }
        _0x594fb5(_0x4520f0.type == "template" ? _0x68af1f.content : _0x68af1f, _0x4379e2(_0x305355) ? _0x305355 : [_0x305355], _0x4520f0, _0x342295, _0xdc506d, _0x58c9ee == "foreignObject" ? "http://www.w3.org/1999/xhtml" : _0x182cf1, _0x3f2386, _0x351437, _0x3f2386 ? _0x3f2386[0] : _0x342295.__k && _0x219072(_0x342295, 0), _0xf30cfc, _0x155c74);
        if (_0x3f2386 != null) {
          for (_0x14ca70 = _0x3f2386.length; _0x14ca70--;) {
            _0x2bf11d(_0x3f2386[_0x14ca70]);
          }
        }
      }
      if (!_0xf30cfc) {
        _0x14ca70 = "value";
        if (_0x58c9ee == "progress" && _0x17e071 == null) {
          _0x68af1f.removeAttribute("value");
        } else if (_0x17e071 != null && (_0x17e071 !== _0x68af1f[_0x14ca70] || _0x58c9ee == "progress" && !_0x17e071 || _0x58c9ee == "option" && _0x17e071 != _0xb233d[_0x14ca70])) {
          _0x5849ed(_0x68af1f, _0x14ca70, _0x17e071, _0xb233d[_0x14ca70], _0x182cf1);
        }
        _0x14ca70 = "checked";
        if (_0x8a52c0 != null && _0x8a52c0 != _0x68af1f[_0x14ca70]) {
          _0x5849ed(_0x68af1f, _0x14ca70, _0x8a52c0, _0xb233d[_0x14ca70], _0x182cf1);
        }
      }
    }
    return _0x68af1f;
  }
  function _0x37f221(_0x54725a, _0x648046, _0x2cb03c) {
    try {
      if (typeof _0x54725a == "function") {
        var _0x43e246 = typeof _0x54725a.__u == "function";
        if (_0x43e246) {
          _0x54725a.__u();
        }
        if (!_0x43e246 || _0x648046 != null) {
          _0x54725a.__u = _0x54725a(_0x648046);
        }
      } else {
        _0x54725a.current = _0x648046;
      }
    } catch (_0x25cdfc) {
      _0x147049.__e(_0x25cdfc, _0x2cb03c);
    }
  }
  function _0x2bbdfb(_0x12dd3d, _0x5043ab, _0x539ee7) {
    var _0x205d98;
    var _0x44950b;
    if (_0x147049.unmount) {
      _0x147049.unmount(_0x12dd3d);
    }
    if (_0x205d98 = _0x12dd3d.ref) {
      if (!_0x205d98.current || _0x205d98.current == _0x12dd3d.__e) {
        _0x37f221(_0x205d98, null, _0x5043ab);
      }
    }
    if ((_0x205d98 = _0x12dd3d.__c) != null) {
      if (_0x205d98.componentWillUnmount) {
        try {
          _0x205d98.componentWillUnmount();
        } catch (_0x1aa025) {
          _0x147049.__e(_0x1aa025, _0x5043ab);
        }
      }
      _0x205d98.base = _0x205d98.__P = null;
    }
    if (_0x205d98 = _0x12dd3d.__k) {
      for (_0x44950b = 0; _0x44950b < _0x205d98.length; _0x44950b++) {
        if (_0x205d98[_0x44950b]) {
          _0x2bbdfb(_0x205d98[_0x44950b], _0x5043ab, _0x539ee7 || typeof _0x12dd3d.type != "function");
        }
      }
    }
    if (!_0x539ee7) {
      _0x2bf11d(_0x12dd3d.__e);
    }
    _0x12dd3d.__c = _0x12dd3d.__ = _0x12dd3d.__e = undefined;
  }
  function _0x572a64(_0x266ca9, _0x3731de, _0x23f397) {
    return this.constructor(_0x266ca9, _0x23f397);
  }
  function _0x421458(_0x17e138, _0x33c9aa, _0xbe2720) {
    var _0x769c51;
    var _0x3e6cc2;
    var _0x74cda4;
    var _0xefdc16;
    if (_0x33c9aa == document) {
      _0x33c9aa = document.documentElement;
    }
    if (_0x147049.__) {
      _0x147049.__(_0x17e138, _0x33c9aa);
    }
    _0x3e6cc2 = (_0x769c51 = typeof _0xbe2720 == "function") ? null : _0xbe2720 && _0xbe2720.__k || _0x33c9aa.__k;
    _0x74cda4 = [];
    _0xefdc16 = [];
    _0x1c7ef0(_0x33c9aa, _0x17e138 = (!_0x769c51 && _0xbe2720 || _0x33c9aa).__k = _0xce770f(_0x120574, null, [_0x17e138]), _0x3e6cc2 || _0x47de15, _0x47de15, _0x33c9aa.namespaceURI, !_0x769c51 && _0xbe2720 ? [_0xbe2720] : _0x3e6cc2 ? null : _0x33c9aa.firstChild ? _0x405b89.call(_0x33c9aa.childNodes) : null, _0x74cda4, !_0x769c51 && _0xbe2720 ? _0xbe2720 : _0x3e6cc2 ? _0x3e6cc2.__e : _0x33c9aa.firstChild, _0x769c51, _0xefdc16);
    _0x1738c4(_0x74cda4, _0x17e138, _0xefdc16);
  }
  function _0x197416(_0x22e30b, _0xb10346) {
    _0x421458(_0x22e30b, _0xb10346, _0x197416);
  }
  function _0x555afa(_0x2e5399, _0x5b42c9, _0x13187a) {
    var _0x5d16a2;
    var _0x45a584;
    var _0x4b9955;
    var _0x5da9bb;
    var _0x43704d = _0x50c354({}, _0x2e5399.props);
    if (_0x2e5399.type && _0x2e5399.type.defaultProps) {
      _0x5da9bb = _0x2e5399.type.defaultProps;
    }
    for (_0x4b9955 in _0x5b42c9) {
      if (_0x4b9955 == "key") {
        _0x5d16a2 = _0x5b42c9[_0x4b9955];
      } else if (_0x4b9955 == "ref") {
        _0x45a584 = _0x5b42c9[_0x4b9955];
      } else {
        _0x43704d[_0x4b9955] = _0x5b42c9[_0x4b9955] === undefined && _0x5da9bb != null ? _0x5da9bb[_0x4b9955] : _0x5b42c9[_0x4b9955];
      }
    }
    if (arguments.length > 2) {
      _0x43704d.children = arguments.length > 3 ? _0x405b89.call(arguments, 2) : _0x13187a;
    }
    return _0x43c4c5(_0x2e5399.type, _0x43704d, _0x5d16a2 || _0x2e5399.key, _0x45a584 || _0x2e5399.ref, null);
  }
  function _0x4c762f(_0x20da4f) {
    function _0x79101e(_0x1e7f77) {
      var _0xee6053;
      var _0x577b23;
      if (!this.getChildContext) {
        _0xee6053 = new Set();
        (_0x577b23 = {})[_0x79101e.__c] = this;
        this.getChildContext = function () {
          return _0x577b23;
        };
        this.componentWillUnmount = function () {
          _0xee6053 = null;
        };
        this.shouldComponentUpdate = function (_0x58fc07) {
          if (this.props.value != _0x58fc07.value) {
            _0xee6053.forEach(function (_0x9bda4d) {
              _0x9bda4d.__e = true;
              _0x36953a(_0x9bda4d);
            });
          }
        };
        this.sub = function (_0x25312c) {
          _0xee6053.add(_0x25312c);
          var _0x414f90 = _0x25312c.componentWillUnmount;
          _0x25312c.componentWillUnmount = function () {
            if (_0xee6053) {
              _0xee6053.delete(_0x25312c);
            }
            if (_0x414f90) {
              _0x414f90.call(_0x25312c);
            }
          };
        };
      }
      return _0x1e7f77.children;
    }
    _0x79101e.__c = "__cC" + _0x42df34++;
    _0x79101e.__ = _0x20da4f;
    _0x79101e.Provider = _0x79101e.__l = (_0x79101e.Consumer = function (_0x18520b, _0x30463e) {
      return _0x18520b.children(_0x30463e);
    }).contextType = _0x79101e;
    return _0x79101e;
  }
  _0x405b89 = _0x1744e0.slice;
  _0x147049 = {
    __e: function (_0x179578, _0xe488fa, _0x11a416, _0x1b8fde) {
      var _0x38f663;
      var _0x12bb47;
      for (var _0x224c68; _0xe488fa = _0xe488fa.__;) {
        if ((_0x38f663 = _0xe488fa.__c) && !_0x38f663.__) {
          try {
            if ((_0x12bb47 = _0x38f663.constructor) && _0x12bb47.getDerivedStateFromError != null) {
              _0x38f663.setState(_0x12bb47.getDerivedStateFromError(_0x179578));
              _0x224c68 = _0x38f663.__d;
            }
            if (_0x38f663.componentDidCatch != null) {
              _0x38f663.componentDidCatch(_0x179578, _0x1b8fde || {});
              _0x224c68 = _0x38f663.__d;
            }
            if (_0x224c68) {
              return _0x38f663.__E = _0x38f663;
            }
          } catch (_0x48ccac) {
            _0x179578 = _0x48ccac;
          }
        }
      }
      throw _0x179578;
    }
  };
  _0x2e31e7 = 0;
  _0x12f4e5 = function (_0x587203) {
    return _0x587203 != null && _0x587203.constructor == null;
  };
  _0x220d8f.prototype.setState = function (_0x53f468, _0x36e928) {
    var _0x4135e3;
    _0x4135e3 = this.__s != null && this.__s != this.state ? this.__s : this.__s = _0x50c354({}, this.state);
    if (typeof _0x53f468 == "function") {
      _0x53f468 = _0x53f468(_0x50c354({}, _0x4135e3), this.props);
    }
    if (_0x53f468) {
      _0x50c354(_0x4135e3, _0x53f468);
    }
    if (_0x53f468 != null && this.__v) {
      if (_0x36e928) {
        this._sb.push(_0x36e928);
      }
      _0x36953a(this);
    }
  };
  _0x220d8f.prototype.forceUpdate = function (_0x4df9df) {
    if (this.__v) {
      this.__e = true;
      if (_0x4df9df) {
        this.__h.push(_0x4df9df);
      }
      _0x36953a(this);
    }
  };
  _0x220d8f.prototype.render = _0x120574;
  _0x397906 = [];
  _0x45f125 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
  _0x56c355 = function (_0x49da66, _0x3fcaf2) {
    return _0x49da66.__v.__b - _0x3fcaf2.__v.__b;
  };
  _0x59543d.__r = 0;
  _0x257689 = /(PointerCapture)$|Capture$/i;
  _0x4e476b = 0;
  _0x269a2d = _0x30e8ce(false);
  _0x53607d = _0x30e8ce(true);
  _0x42df34 = 0;
  var _0x38f14e = Object.freeze({
    "__proto__": null,
    Component: _0x220d8f,
    Fragment: _0x120574,
    cloneElement: _0x555afa,
    createContext: _0x4c762f,
    createElement: _0xce770f,
    createRef: _0xcf5735,
    h: _0xce770f,
    hydrate: _0x197416,
    get isValidElement() {
      return _0x12f4e5;
    },
    get options() {
      return _0x147049;
    },
    render: _0x421458,
    toChildArray: _0x1ce82b
  });
  function _0x40c87e(_0x5e9eb5) {
    if (_0x5e9eb5.__esModule) {
      return _0x5e9eb5;
    }
    var _0x2d3674 = Object.defineProperty({}, "__esModule", {
      value: true
    });
    Object.keys(_0x5e9eb5).forEach(function (_0x3a18f3) {
      var _0x4feafd = Object.getOwnPropertyDescriptor(_0x5e9eb5, _0x3a18f3);
      Object.defineProperty(_0x2d3674, _0x3a18f3, _0x4feafd.get ? _0x4feafd : {
        enumerable: true,
        get: function () {
          return _0x5e9eb5[_0x3a18f3];
        }
      });
    });
    return _0x2d3674;
  }
  function _0x5b7b88(_0x2889e8) {
    var _0x13eb01 = {
      exports: {}
    };
    _0x2889e8(_0x13eb01, _0x13eb01.exports);
    return _0x13eb01.exports;
  }
  var _0x47e82d = _0x40c87e(_0x38f14e);
  var _0x54f17f = _0x5b7b88(function (_0x24247d, _0x2c6402) {
    var _0x4c6843 = _0x47e82d;
    function _0x861802(_0x53afdf, _0x5d2aca) {
      for (var _0x1c3f81 in _0x5d2aca) {
        _0x53afdf[_0x1c3f81] = _0x5d2aca[_0x1c3f81];
      }
      return _0x53afdf;
    }
    function _0x40535e(_0x31d16c) {
      this.getChildContext = function () {
        return {
          store: _0x31d16c.store
        };
      };
    }
    _0x40535e.prototype.render = function (_0x1564b1) {
      return _0x1564b1.children && _0x1564b1.children[0] || _0x1564b1.children;
    };
    _0x2c6402.createStore = function (_0x52b618) {
      var _0x25294e = [];
      function _0x1d84cc(_0x12d18f) {
        var _0x2454d3 = [];
        for (var _0x4b6b56 = 0; _0x4b6b56 < _0x25294e.length; _0x4b6b56++) {
          if (_0x25294e[_0x4b6b56] === _0x12d18f) {
            _0x12d18f = null;
          } else {
            _0x2454d3.push(_0x25294e[_0x4b6b56]);
          }
        }
        _0x25294e = _0x2454d3;
      }
      function _0x382826(_0x3a43ac, _0x584170, _0x2dcef9) {
        _0x52b618 = _0x584170 ? _0x3a43ac : _0x861802(_0x861802({}, _0x52b618), _0x3a43ac);
        for (var _0x21c156 = _0x25294e, _0x12bf54 = 0; _0x12bf54 < _0x21c156.length; _0x12bf54++) {
          _0x21c156[_0x12bf54](_0x52b618, _0x2dcef9);
        }
      }
      _0x52b618 = _0x52b618 || {};
      return {
        action: function (_0x1cdcf0) {
          function _0x42fff2(_0x204e98) {
            _0x382826(_0x204e98, false, _0x1cdcf0);
          }
          return function () {
            var _0x2e72e7 = arguments;
            var _0x49f82c = [_0x52b618];
            for (var _0x34863f = 0; _0x34863f < arguments.length; _0x34863f++) {
              _0x49f82c.push(_0x2e72e7[_0x34863f]);
            }
            var _0xfcffa4 = _0x1cdcf0.apply(this, _0x49f82c);
            if (_0xfcffa4 != null) {
              if (_0xfcffa4.then) {
                return _0xfcffa4.then(_0x42fff2);
              } else {
                return _0x42fff2(_0xfcffa4);
              }
            }
          };
        },
        setState: _0x382826,
        subscribe: function (_0x593044) {
          _0x25294e.push(_0x593044);
          return function () {
            _0x1d84cc(_0x593044);
          };
        },
        unsubscribe: _0x1d84cc,
        getState: function () {
          return _0x52b618;
        }
      };
    };
    _0x2c6402.Provider = _0x40535e;
    _0x2c6402.connect = function (_0xdfde42, _0x434da4) {
      var _0x31c5a0;
      if (typeof _0xdfde42 != "function") {
        if (typeof (_0x31c5a0 = _0xdfde42 || {}) == "string") {
          _0x31c5a0 = _0x31c5a0.split(/\s*,\s*/);
        }
        _0xdfde42 = function (_0x1a0593) {
          var _0x5ca31d = {};
          for (var _0xce4089 = 0; _0xce4089 < _0x31c5a0.length; _0xce4089++) {
            _0x5ca31d[_0x31c5a0[_0xce4089]] = _0x1a0593[_0x31c5a0[_0xce4089]];
          }
          return _0x5ca31d;
        };
      }
      return function (_0x814319) {
        function _0x2d23a3(_0x3915f7, _0x1c48f6) {
          var _0x12b647 = this;
          var _0x153827 = _0x1c48f6.store;
          var _0x35ca4d = _0xdfde42(_0x153827 ? _0x153827.getState() : {}, _0x3915f7);
          var _0x1fe520 = _0x434da4 ? function (_0x2110fa, _0x44fa73) {
            if (typeof _0x2110fa == "function") {
              _0x2110fa = _0x2110fa(_0x44fa73);
            }
            var _0x1bd609 = {};
            for (var _0x194b23 in _0x2110fa) {
              _0x1bd609[_0x194b23] = _0x44fa73.action(_0x2110fa[_0x194b23]);
            }
            return _0x1bd609;
          }(_0x434da4, _0x153827) : {
            store: _0x153827
          };
          function _0x5c1d2a() {
            var _0x271606 = _0xdfde42(_0x153827 ? _0x153827.getState() : {}, _0x3915f7);
            for (var _0x531728 in _0x271606) {
              if (_0x271606[_0x531728] !== _0x35ca4d[_0x531728]) {
                _0x35ca4d = _0x271606;
                return _0x12b647.setState({});
              }
            }
            for (var _0x4f59fe in _0x35ca4d) {
              if (!(_0x4f59fe in _0x271606)) {
                _0x35ca4d = _0x271606;
                return _0x12b647.setState({});
              }
            }
          }
          this.componentWillReceiveProps = function (_0x1e7c73) {
            _0x3915f7 = _0x1e7c73;
            _0x5c1d2a();
          };
          this.componentDidMount = function () {
            _0x153827.subscribe(_0x5c1d2a);
          };
          this.componentWillUnmount = function () {
            _0x153827.unsubscribe(_0x5c1d2a);
          };
          this.render = function (_0x3d9aa1) {
            return _0x4c6843.h(_0x814319, _0x861802(_0x861802(_0x861802({}, _0x1fe520), _0x3d9aa1), _0x35ca4d));
          };
        }
        return (_0x2d23a3.prototype = new _0x4c6843.Component()).constructor = _0x2d23a3;
      };
    };
  });
  const _0x2f3ae0 = 25;
  const _0x345974 = _0x2f3ae0 * _0x2f3ae0;
  const _0x3d705d = 0;
  const _0x17919a = 1;
  const _0x106406 = 2;
  const _0x54bd06 = 3;
  const _0x267d9f = 4;
  const _0x5e1b05 = 5;
  const _0x705a43 = 6;
  const _0x580f4f = 7;
  const _0x25cec7 = 10;
  const _0x57ae42 = 240;
  const _0x4e59a9 = Math.PI * 2 / _0x57ae42;
  function _0x324f72() {
    let _0x3284c9 = navigator.vendor && navigator.vendor.indexOf("Apple") > -1 && navigator.userAgent && navigator.userAgent.indexOf("CriOS") == -1 && navigator.userAgent.indexOf("FxiOS") == -1;
    return _0x3284c9;
  }
  const _0x3abd82 = () => !_0x324f72();
  var _0x15d988 = Object.defineProperty;
  var _0x3a9dd8 = (_0x14c82d, _0x13afe6, _0x476f2e) => {
    if (typeof _0x13afe6 !== "symbol") {
      _0x13afe6 += "";
    }
    if (_0x13afe6 in _0x14c82d) {
      return _0x15d988(_0x14c82d, _0x13afe6, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x476f2e
      });
    }
    return _0x14c82d[_0x13afe6] = _0x476f2e;
  };
  const _0x3ba929 = Math.cos(0);
  const _0x177b1d = Math.sin(0);
  const _0x511c32 = 3.141592653589793;
  class _0x320aa6 {
    constructor(_0x5969fb, _0x1ba566) {
      _0x3a9dd8(this, "x");
      _0x3a9dd8(this, "y");
      this.x = _0x5969fb;
      this.y = _0x1ba566;
    }
    set(_0x544ee0, _0x3caa19) {
      this.x = _0x544ee0;
      this.y = _0x3caa19;
      return this;
    }
    add(_0x1e7b3b) {
      this.x += _0x1e7b3b.x;
      this.y += _0x1e7b3b.y;
      return this;
    }
    sub(_0x56150f) {
      this.x -= _0x56150f.x;
      this.y -= _0x56150f.y;
      return this;
    }
    mulv(_0x1dc079) {
      return this.x * _0x1dc079.x + this.y * _0x1dc079.y;
    }
    scale(_0x467211) {
      this.x *= _0x467211;
      this.y *= _0x467211;
      return this;
    }
    magnitude() {
      const {
        x: _0x40d003,
        y: _0x3b1bcc
      } = this;
      return Math.sqrt(_0x40d003 * _0x40d003 + _0x3b1bcc * _0x3b1bcc);
    }
    normalize() {
      const _0x3afecd = this.magnitude();
      if (_0x3afecd) {
        this.scale(1 / _0x3afecd);
      }
      return this;
    }
    setLength(_0x4355ed) {
      const _0x3852b6 = this.magnitude();
      if (_0x3852b6) {
        this.scale(_0x4355ed / _0x3852b6);
      }
      return this;
    }
    copy(_0x445e0d) {
      this.x = _0x445e0d.x;
      this.y = _0x445e0d.y;
      return this;
    }
    distance(_0x3dccb3) {
      return Math.sqrt(this.distance2(_0x3dccb3));
    }
    distance2(_0x4cb816) {
      const _0x1a3dd6 = this.x - _0x4cb816.x;
      const _0x2ae6c7 = this.y - _0x4cb816.y;
      return _0x1a3dd6 * _0x1a3dd6 + _0x2ae6c7 * _0x2ae6c7;
    }
    cross(_0x1f5eb2) {
      return this.x * _0x1f5eb2.y - this.y * _0x1f5eb2.x;
    }
    dot(_0x342104) {
      return this.x * _0x342104.x + this.y * _0x342104.y;
    }
    rotate(_0x175c77) {
      const {
        x: _0x44880c,
        y: _0x594b77
      } = this;
      const _0x5508a0 = Math.cos(_0x175c77);
      const _0x51e0e7 = Math.sin(_0x175c77);
      this.x = _0x44880c * _0x5508a0 - _0x594b77 * _0x51e0e7;
      this.y = _0x44880c * _0x51e0e7 + _0x594b77 * _0x5508a0;
      return this;
    }
    angle(_0x3e9eb5) {
      return Math.atan2(this.cross(_0x3e9eb5), this.dot(_0x3e9eb5));
    }
    direction() {
      return Math.atan2(this.y, this.x) / Math.PI * 120;
    }
    invert() {
      return this.scale(-1);
    }
    equal(_0x2458b2) {
      return _0x56564b(this.x, _0x2458b2.x) && _0x56564b(this.y, _0x2458b2.y);
    }
    clone() {
      return new _0x320aa6(this.x, this.y);
    }
    static clone(_0x5d25ed) {
      return new _0x320aa6(_0x5d25ed.x, _0x5d25ed.y);
    }
    toString() {
      return "[" + _0x676e06(this.x) + "," + _0x676e06(this.y) + "]";
    }
    static make(_0x3941ca, _0x559d41) {
      return new _0x320aa6(_0x3941ca, _0x559d41);
    }
    static fromAngle(_0x4e7c41) {
      const _0x5a7749 = Math.cos(_0x4e7c41);
      const _0x32469a = Math.sin(_0x4e7c41);
      const _0x3d9d03 = _0x3ba929 * _0x5a7749 - _0x177b1d * _0x32469a;
      const _0x2fc7e2 = _0x3ba929 * _0x32469a + _0x177b1d * _0x5a7749;
      return _0x320aa6.make(_0x3d9d03, _0x2fc7e2);
    }
    static lerp(_0xde8b6c, _0x377f63, _0x421cf1) {
      return new _0x320aa6(_0xde8b6c.x + (_0x377f63.x - _0xde8b6c.x) * _0x421cf1, _0xde8b6c.y + (_0x377f63.y - _0xde8b6c.y) * _0x421cf1);
    }
    static delta(_0x19b696, _0x2c4e3f) {
      return _0x2c4e3f.clone().sub(_0x19b696);
    }
    static fromFlatArray(_0x24b064) {
      let _0x1511c6 = [];
      for (let _0x168330 = 0; _0x168330 < _0x24b064.length; _0x168330 += 2) {
        _0x1511c6.push(new _0x320aa6(_0x24b064[_0x168330], _0x24b064[_0x168330 + 1]));
      }
      return _0x1511c6;
    }
    projection(_0x4ac0e) {
      return _0x4ac0e.clone().normalize().scale(this.dot(_0x4ac0e) / _0x4ac0e.magnitude());
    }
    toDirection() {
      return Math.round(Math.atan2(this.y, this.x) / (_0x511c32 * 2) * _0x57ae42 + _0x57ae42) % _0x57ae42;
    }
    toAngle() {
      return Math.atan2(this.y, this.x);
    }
    static fromDirection(_0x1947c3) {
      let _0x453298 = (_0x1947c3 || 0) * _0x511c32 * 2 / _0x57ae42;
      return _0x320aa6.make(Math.cos(_0x453298), Math.sin(_0x453298));
    }
    length2() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    fromVec(_0x3d3704, _0x4a256f) {
      return _0x4a256f.sub(_0x3d3704);
    }
    slideAlong(_0x381889, _0x1f7d01 = 0) {
      let _0x121442 = this.projection(_0x381889);
      if (_0x1f7d01) {
        let _0x133346 = this.clone().sub(_0x121442);
        _0x121442.add(_0x133346.normalize().scale(-_0x1f7d01));
      }
      return _0x121442;
    }
  }
  var _0x5ec61a = Object.defineProperty;
  var _0xc3561d = Object.assign;
  var _0x3beff4 = (_0x33e9f6, _0x4ac663, _0x26ec92) => {
    if (typeof _0x4ac663 !== "symbol") {
      _0x4ac663 += "";
    }
    if (_0x4ac663 in _0x33e9f6) {
      return _0x5ec61a(_0x33e9f6, _0x4ac663, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x26ec92
      });
    }
    return _0x33e9f6[_0x4ac663] = _0x26ec92;
  };
  var _0x4b46d7 = (_0x4c0e79, _0x4e816e, _0x5e7036) => {
    return new Promise((_0x2deefd, _0x4f4e00) => {
      var _0x1b3435 = _0xfee3bc => {
        try {
          _0x5b0b50(_0x5e7036.next(_0xfee3bc));
        } catch (_0x76b5f6) {
          _0x4f4e00(_0x76b5f6);
        }
      };
      var _0x1dad95 = _0x4a0461 => {
        try {
          _0x5b0b50(_0x5e7036.throw(_0x4a0461));
        } catch (_0x144021) {
          _0x4f4e00(_0x144021);
        }
      };
      var _0x5b0b50 = _0x573acc => {
        if (_0x573acc.done) {
          return _0x2deefd(_0x573acc.value);
        } else {
          return Promise.resolve(_0x573acc.value).then(_0x1b3435, _0x1dad95);
        }
      };
      _0x5b0b50((_0x5e7036 = _0x5e7036.apply(_0x4c0e79, _0x4e816e)).next());
    });
  };
  const _0x18e363 = 86400000;
  const _0xd4a7b4 = typeof performance !== "undefined" ? performance : Date;
  const _0x493b69 = _0xd4a7b4.now.bind(_0xd4a7b4);
  const _0x3d3e32 = (_0x2a012f, _0x1cc2e6, _0x6818b4) => {
    if (typeof _0x2a012f.x !== "number") {
      throw Error("circle");
    }
    const _0xfe5e39 = Math.PI * 2;
    const _0x592ac6 = _0xfe5e39 / _0x1cc2e6;
    const _0x3a867e = [];
    for (let _0x3df328 = 0; _0x3df328 < _0xfe5e39 - _0x204775; _0x3df328 += _0x592ac6) {
      _0x3a867e.push(new _0x320aa6(_0x2a012f.x + Math.cos(_0x3df328) * _0x6818b4, _0x2a012f.y + Math.sin(_0x3df328) * _0x6818b4));
    }
    return _0x3a867e;
  };
  const _0x44b649 = _0x19cc2c => {
    const _0x14761a = parseInt(_0x19cc2c.substring(1, 3), 16);
    const _0x308126 = parseInt(_0x19cc2c.substring(3, 5), 16);
    const _0x25325e = parseInt(_0x19cc2c.substring(5, 7), 16);
    return [_0x14761a, _0x308126, _0x25325e];
  };
  const _0x6a18f7 = ([_0x7ebe39, _0x3570b9, _0x25f1f5]) => {
    let _0x1d85e5;
    let _0xb5ad4b;
    let _0x4381f8;
    let _0x263590;
    let _0x3567f5;
    let _0x452d0f;
    let _0x462f4c;
    let _0x530934;
    let _0x74f83c;
    let _0x2fe7f1;
    let _0x24a99a;
    let _0x3c84c1;
    _0x1d85e5 = _0x7ebe39 / 255;
    _0xb5ad4b = _0x3570b9 / 255;
    _0x4381f8 = _0x25f1f5 / 255;
    _0x74f83c = Math.max(_0x1d85e5, _0xb5ad4b, _0x4381f8);
    _0x2fe7f1 = _0x74f83c - Math.min(_0x1d85e5, _0xb5ad4b, _0x4381f8);
    _0x24a99a = _0x2a60e6 => (_0x74f83c - _0x2a60e6) / 6 / _0x2fe7f1 + 1 / 2;
    _0x3c84c1 = _0x1483d5 => Math.round(_0x1483d5 * 100) / 100;
    if (_0x2fe7f1 == 0) {
      _0x462f4c = _0x530934 = 0;
    } else {
      _0x530934 = _0x2fe7f1 / _0x74f83c;
      _0x263590 = _0x24a99a(_0x1d85e5);
      _0x3567f5 = _0x24a99a(_0xb5ad4b);
      _0x452d0f = _0x24a99a(_0x4381f8);
      if (_0x1d85e5 === _0x74f83c) {
        _0x462f4c = _0x452d0f - _0x3567f5;
      } else if (_0xb5ad4b === _0x74f83c) {
        _0x462f4c = 1 / 3 + _0x263590 - _0x452d0f;
      } else if (_0x4381f8 === _0x74f83c) {
        _0x462f4c = 2 / 3 + _0x3567f5 - _0x263590;
      }
      if (_0x462f4c < 0) {
        _0x462f4c += 1;
      } else if (_0x462f4c > 1) {
        _0x462f4c -= 1;
      }
    }
    return [Math.round(_0x462f4c * 360), _0x3c84c1(_0x530934 * 100), _0x3c84c1(_0x74f83c * 100)];
  };
  const _0x1843cf = ([_0x505ce9, _0x25d55a, _0x1b93d0]) => {
    const _0x5c9d7e = _0x589a31 => {
      const _0x26e2c0 = _0x589a31.toString(16);
      if (_0x26e2c0.length < 2) {
        return "0" + _0x26e2c0;
      } else {
        return _0x26e2c0;
      }
    };
    return "#" + _0x5c9d7e(_0x505ce9) + _0x5c9d7e(_0x25d55a) + _0x5c9d7e(_0x1b93d0);
  };
  const _0x53f4f6 = ([_0x1bc303, _0x2fc707, _0x4fdc8f]) => {
    var _0x1d1e03;
    var _0x45f44f;
    var _0x2c0288;
    var _0x2f20f1;
    var _0x2079bb;
    var _0x518b0f;
    var _0x5375f;
    var _0x450ec4;
    _0x1bc303 = Math.max(0, Math.min(360, _0x1bc303));
    _0x2fc707 = Math.max(0, Math.min(100, _0x2fc707));
    _0x4fdc8f = Math.max(0, Math.min(100, _0x4fdc8f));
    _0x2fc707 /= 100;
    _0x4fdc8f /= 100;
    if (_0x2fc707 == 0) {
      _0x1d1e03 = _0x45f44f = _0x2c0288 = _0x4fdc8f;
      return [Math.round(_0x1d1e03 * 255), Math.round(_0x45f44f * 255), Math.round(_0x2c0288 * 255)];
    }
    _0x1bc303 /= 60;
    _0x2f20f1 = Math.floor(_0x1bc303);
    _0x2079bb = _0x1bc303 - _0x2f20f1;
    _0x518b0f = _0x4fdc8f * (1 - _0x2fc707);
    _0x5375f = _0x4fdc8f * (1 - _0x2fc707 * _0x2079bb);
    _0x450ec4 = _0x4fdc8f * (1 - _0x2fc707 * (1 - _0x2079bb));
    switch (_0x2f20f1) {
      case 0:
        _0x1d1e03 = _0x4fdc8f;
        _0x45f44f = _0x450ec4;
        _0x2c0288 = _0x518b0f;
        break;
      case 1:
        _0x1d1e03 = _0x5375f;
        _0x45f44f = _0x4fdc8f;
        _0x2c0288 = _0x518b0f;
        break;
      case 2:
        _0x1d1e03 = _0x518b0f;
        _0x45f44f = _0x4fdc8f;
        _0x2c0288 = _0x450ec4;
        break;
      case 3:
        _0x1d1e03 = _0x518b0f;
        _0x45f44f = _0x5375f;
        _0x2c0288 = _0x4fdc8f;
        break;
      case 4:
        _0x1d1e03 = _0x450ec4;
        _0x45f44f = _0x518b0f;
        _0x2c0288 = _0x4fdc8f;
        break;
      default:
        _0x1d1e03 = _0x4fdc8f;
        _0x45f44f = _0x518b0f;
        _0x2c0288 = _0x5375f;
    }
    return [Math.round(_0x1d1e03 * 255), Math.round(_0x45f44f * 255), Math.round(_0x2c0288 * 255)];
  };
  const _0x419428 = _0x3c0fec => _0x1843cf(_0x53f4f6(_0x3c0fec));
  function _0x32f7f2(_0x49c993, _0x2845fe = false) {
    if (_0x49c993 > 0 && _0x49c993 < 1) {
      _0x49c993 = Math.floor(_0x49c993 * 1000000000);
    }
    let _0x30604b = _0xd95c62 => {
      _0x49c993 = (_0x49c993 * 69069 + 1) % 2147483648;
      return _0x49c993 % _0xd95c62;
    };
    let _0x3a7f0e = _0xfd09a6 => {
      if (_0xfd09a6 == -1) {
        return _0x49c993;
      } else if (_0xfd09a6 == undefined) {
        return _0x30604b(1000000000) / 1000000000;
      } else {
        return _0x30604b(_0xfd09a6);
      }
    };
    return _0x3a7f0e;
  }
  function _0x226750(_0x458d55) {
    let _0x1c210d = 0;
    let _0x41b61e = false;
    function _0x90d63d(_0x197860) {
      return _0x4b46d7(this, null, function* () {
        _0x458d55(_0x197860 - _0x1c210d, _0x197860);
        _0x1c210d = _0x197860;
        if (!_0x41b61e) {
          requestAnimationFrame(_0x90d63d);
        }
      });
    }
    _0x90d63d(0);
    return () => {
      _0x41b61e = true;
    };
  }
  function _0x5c6f3f(_0x22b69e) {
    return new Promise(_0x1cc037 => {
      let _0x2f84e7 = document.createElement("img");
      _0x2f84e7.src = _0x22b69e;
      _0x2f84e7.decode().then(_0x28785e => {
        _0x1cc037(_0x2f84e7);
      });
      _0x2f84e7.addEventListener("error", _0x2aa935 => {
        console.log(_0x2aa935);
      });
    });
  }
  function _0x40ee19([_0x110b29, _0x2c2592, _0x3a8c59], _0x469b8f) {
    return [_0x110b29, _0x2c2592, _0x3a8c59 * _0x469b8f];
  }
  function _0x30f30a([_0x2f55fb, _0x5929fa, _0x55f089], _0x51fdb0) {
    const _0x1d2c15 = 100 - _0x55f089;
    _0x55f089 = Math.max(_0x55f089 * _0x51fdb0, _0x55f089 + _0x51fdb0 * _0x1d2c15 / 4);
    return [_0x2f55fb, _0x5929fa, _0x55f089];
  }
  function _0x47c4c0([_0x3ff3d9, _0x598bd3, _0xdd8a5d], _0x34d750) {
    _0xdd8a5d = _0x34d750;
    return [_0x3ff3d9, _0x598bd3, _0x34d750];
  }
  function _0x50f18f(_0x137b57, _0x35f669 = 4) {
    return _0x137b57 && (~~_0x137b57 == _0x137b57 ? _0x137b57 : _0x137b57.toFixed(_0x35f669));
  }
  function _0x676e06(_0x2abda1) {
    return _0x2abda1 && _0x2abda1.toLocaleString("en-US", {
      maximumSignificantDigits: 8
    });
  }
  function _0x1c30f2(_0x18d22c) {
    return _0x18d22c.sort((_0x329cc9, _0x11c3ba) => _0x329cc9 - _0x11c3ba);
  }
  function _0x4ee89f(_0x293803, _0x3a3707) {
    if (_0x293803 < _0x3a3707) {
      return [_0x293803, _0x3a3707];
    } else {
      return [_0x3a3707, _0x293803];
    }
  }
  function _0x48ac67(_0x2e08ac, _0x1cb54a) {
    let _0x3a7e61 = _0x2e08ac.reduce(({
      element: _0x444edb,
      value: _0x35b1c5,
      index: _0x2fe4ab
    }, _0x59c17a, _0x2bd46d) => {
      let _0x2c04fe = _0x1cb54a(_0x59c17a);
      if (_0x2c04fe < _0x35b1c5) {
        _0x35b1c5 = _0x2c04fe;
        _0x444edb = _0x59c17a;
        _0x2fe4ab = _0x2bd46d;
      }
      return {
        element: _0x444edb,
        value: _0x35b1c5,
        index: _0x2fe4ab
      };
    }, {
      element: null,
      value: Number.MAX_VALUE,
      index: 0
    });
    return _0x3a7e61;
  }
  function _0x52ee1f(_0x3a3a5f, _0x5d6533) {
    let _0x14eca6 = _0x3a3a5f.reduce(({
      element: _0x2efa07,
      index: _0xac669f
    }, _0x5265d, _0x403e41) => {
      if (_0x5d6533(_0x5265d, _0x2efa07) < 0) {
        _0x2efa07 = _0x5265d;
        _0xac669f = _0x403e41;
      }
      return {
        element: _0x2efa07,
        index: _0xac669f
      };
    }, {
      element: _0x3a3a5f[0],
      index: 0
    });
    return _0x14eca6;
  }
  function _0x334095(_0x247350, _0x4f7596) {
    return (_0x247350 % _0x4f7596 + _0x4f7596) % _0x4f7596;
  }
  class _0xf760a1 {
    constructor() {
      _0x3beff4(this, "events", {});
    }
    emit(_0x4b7396) {
      if (this.events[_0x4b7396.event]) {
        for (let _0x23e677 of this.events[_0x4b7396.event]) {
          _0x23e677(_0x4b7396);
        }
      }
      if (this.events.event) {
        for (let _0x4dc3ce of this.events.event) {
          _0x4dc3ce(_0x4b7396);
        }
      }
    }
    on(_0x45b2ec, _0x30375a) {
      (this.events[_0x45b2ec] = this.events[_0x45b2ec] || []).push(_0x30375a);
      return () => this.events[_0x45b2ec] = this.events[_0x45b2ec].filter(_0x3df8cd => _0x3df8cd !== _0x30375a);
    }
    bind(_0x2bfa69) {
      for (let _0x2b1966 in _0x2bfa69) {
        this.on(_0x2b1966, _0x2bfa69[_0x2b1966]);
      }
    }
    when(_0x5ad004) {
      return new Promise(_0x2222c6 => this.on(_0x5ad004, _0x2222c6));
    }
  }
  function _0x45f3ce() {
    return new Promise(_0x5d1be0 => {
      requestAnimationFrame(_0x5d1be0);
    });
  }
  function _0x3bf684(_0x29e36a) {
    return new Promise(_0x5e2804 => {
      setTimeout(_0x5e2804, _0x29e36a);
    });
  }
  function _0x2272ed(_0x5bf789, _0x2c41de) {
    if (_0x5bf789) {
      return _0x5bf789[~~(_0x2c41de() * _0x5bf789.length)];
    } else {
      return null;
    }
  }
  function _0x1339a6(_0x522580, _0x14ee5d, _0x21b72b) {
    let _0x4a3d91 = new Promise(_0x481489 => {
      try {
        const _0x13f717 = new XMLHttpRequest();
        _0x13f717.open("POST", _0x522580);
        _0x13f717.onload = () => {
          if (_0x13f717.status === 200) {
            try {
              _0x481489(JSON.parse(_0x13f717.responseText));
            } catch (_0x3b973d) {
              return _0x13f717.responseText;
            }
          } else {
            _0x481489({
              error: _0x13f717.responseText,
              status: _0x13f717.status
            });
          }
        };
        _0x13f717.send(JSON.stringify(_0x14ee5d));
      } catch (_0x74e4bc) {
        console.log(_0x74e4bc);
      }
    });
    if (_0x21b72b) {
      _0x4a3d91.then(_0x3fd796 => _0x21b72b(_0x3fd796));
    }
    return _0x4a3d91;
  }
  function _0x240d62(_0x2e89e1, _0x506d3e) {
    return _0x4b46d7(this, arguments, function* (_0x5821e4, _0x3902f5, _0x405c92 = {}) {
      try {
        let _0x38de8a = yield fetch(_0x5821e4, _0xc3561d({
          method: "POST",
          cache: "no-cache",
          body: JSON.stringify(_0x3902f5)
        }, _0x405c92));
        return _0x38de8a.json();
      } catch (_0xfc7646) {
        return _0xfc7646;
      }
    });
  }
  function _0x108a5c(_0x38e9a8) {
    return _0x38e9a8.reduce((_0x5091f4, _0x412b85) => _0x5091f4 + _0x412b85, 0);
  }
  function _0x51a1dc(_0x4ec14b) {
    return _0x4ec14b != undefined && _0x4ec14b.includes("dratest");
  }
  function _0x253f2d(_0x56af54) {
    return _0x56af54.split("").reduce((_0x412fd7, _0x6f2b1e) => {
      _0x412fd7 = (_0x412fd7 << 5) - _0x412fd7 + _0x6f2b1e.charCodeAt(0);
      return _0x412fd7 & _0x412fd7;
    }, 0);
  }
  function _0x441924(_0x2295f0) {
    return (_0x2295f0 || "").replace("dratest", "");
  }
  function _0x46b8f1(_0x5f2baa) {
    let _0x5292c2 = /^\p{Extended_Pictographic}/u.exec(_0x5f2baa);
    if (_0x5292c2 && _0x5292c2[0].charCodeAt(0) > 255) {
      return _0x5292c2[0];
    }
    return null;
  }
  function _0x24e0c2(_0x258808, _0x23ade0) {
    _0x258808 = [..._0x258808];
    for (var _0x181f1b = _0x258808.length - 1; _0x181f1b > 0; _0x181f1b--) {
      var _0x3874d2 = _0x23ade0(_0x181f1b);
      var _0x4963a3 = _0x258808[_0x181f1b];
      _0x258808[_0x181f1b] = _0x258808[_0x3874d2];
      _0x258808[_0x3874d2] = _0x4963a3;
    }
    return _0x258808;
  }
  const _0x3990c0 = _0x510b07 => _0x510b07.filter((_0x413df6, _0x38cf43) => _0x510b07.indexOf(_0x413df6) == _0x38cf43);
  var _0x334cab = Object.defineProperty;
  var _0x122569 = Object.assign;
  var _0x22064c = (_0x390abe, _0x4c9c6c, _0xd3fa68) => {
    if (typeof _0x4c9c6c !== "symbol") {
      _0x4c9c6c += "";
    }
    if (_0x4c9c6c in _0x390abe) {
      return _0x334cab(_0x390abe, _0x4c9c6c, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0xd3fa68
      });
    }
    return _0x390abe[_0x4c9c6c] = _0xd3fa68;
  };
  class _0x372644 {
    constructor(_0x4d313f, _0x12dec5) {
      _0x22064c(this, "achievements");
      _0x22064c(this, "all");
      this.environment = _0x4d313f;
      this.events = new _0xf760a1();
      this.achievements = (_0x12dec5 || []).map(_0x11ffc5 => new _0x1064c5(_0x11ffc5));
      this.all = Object.fromEntries(this.achievements.map(_0xeb1cd8 => [_0xeb1cd8.name, _0xeb1cd8]));
      this.achievements = this.achievements.filter(_0x5ce71c => {
        const _0x1f1584 = !_0x5ce71c.earned && _0x5ce71c.mode.any || _0x5ce71c.mode[_0x4d313f.gameMode];
        if (_0x1f1584) {
          _0x5ce71c.checker = _0x5ce71c.getChecker();
          if (_0x5ce71c.cumulative) {
            _0x5ce71c.checker.progress = _0x5ce71c.best;
          }
        }
        return _0x1f1584;
      });
      this.load();
    }
    resetCheckers() {
      for (let _0x8069d8 of this.achievements) {
        _0x8069d8.checker = _0x8069d8.getChecker();
      }
    }
    earned(_0x58cb05) {
      return this.all[_0x58cb05].earned;
    }
    update(_0x4983ce, _0x46a2c8) {
      this.achievements = this.achievements.filter(_0x5b027f => {
        let _0x51e11c = _0x5b027f.update(_0x4983ce, _0x46a2c8, this);
        if (_0x51e11c) {
          this.events.emit({
            event: "achievement",
            name: _0x5b027f.name
          });
          this.save();
          return false;
        }
        return true;
      });
    }
    checkCimpleted() {}
    finish() {
      this.achievements = [];
      this.save();
    }
    onKill(_0x4e8676) {
      this.achievements.forEach(_0x48cc02 => {
        _0x48cc02.checker.onKill(_0x4e8676);
      });
    }
    onOut() {
      this.achievements.forEach(_0x34ba59 => {
        _0x34ba59.checker.onOut();
      });
    }
    load() {
      if (this.environment.achieved) {
        for (let _0x4b7be0 in this.environment.achieved) {
          let _0x44ddc7 = this.environment.achieved[_0x4b7be0];
          let _0x7a0354 = this.achievements.find(_0x1c6adc => _0x1c6adc.name == _0x4b7be0);
          if (!_0x7a0354) {
            return;
          }
          _0x7a0354.best = _0x44ddc7.best;
          _0x7a0354.earned = _0x44ddc7.earned;
        }
      }
    }
    save() {
      this.environment.achieved = Object.fromEntries(Object.values(this.all).map(_0x23f27b => [_0x23f27b.name, _0x122569({
        best: _0x23f27b.best,
        earned: _0x23f27b.earned
      }, _0x23f27b.checker && _0x23f27b.checker.save && _0x23f27b.checker.save() || {})]));
    }
  }
  let _0x33e8bc = 1;
  const _0x4c052a = () => _0x33e8bc++;
  var _0x91a49 = Object.defineProperty;
  var _0x4d6274 = (_0x71a99d, _0xef7d2d, _0x27626f) => {
    if (typeof _0xef7d2d !== "symbol") {
      _0xef7d2d += "";
    }
    if (_0xef7d2d in _0x71a99d) {
      return _0x91a49(_0x71a99d, _0xef7d2d, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x27626f
      });
    }
    return _0x71a99d[_0xef7d2d] = _0x27626f;
  };
  class _0x4b58e0 {
    constructor(_0x429217, _0x57d692, _0x12a5c2) {
      _0x4d6274(this, "vector");
      _0x4d6274(this, "mark");
      this.id = _0x4c052a();
      if (!_0x12a5c2) {
        debugger;
      }
      this.start = _0x429217;
      this.end = _0x57d692;
      this.shape = _0x12a5c2;
      this.start.addSegment(this);
      this.end.addSegment(this);
      if (this.shape.owner) {
        this.shape.owner.space().commit(this);
      }
      this.calc();
    }
    calc() {
      const {
        start: _0x280c33,
        end: _0xf109e9
      } = this;
      this.vector = _0xf109e9.at.clone().sub(_0x280c33.at);
    }
    clone(_0x371f86) {
      return new _0x4b58e0(this.start, this.end, _0x371f86);
    }
    reverse() {
      const _0x4f2d96 = this.start;
      this.start = this.end;
      this.end = _0x4f2d96;
      this.calc();
      return this;
    }
    remove() {
      this.start.remove(this);
      this.end.remove(this);
      this.shape.owner.space().remove(this);
      this.removed = true;
    }
    length() {
      return this.vector.magnitude();
    }
    hasPoint(_0x50b48a) {
      if (this.start.at.equal(_0x50b48a)) {
        return this.start;
      } else if (this.end.at.equal(_0x50b48a)) {
        return this.end;
      } else {
        return null;
      }
    }
    intersect(_0x376903) {
      let _0x437b11 = _0x192842(this, _0x376903);
      return _0x437b11 && _0x320aa6.make(_0x437b11[0], _0x437b11[1]);
    }
    split(_0x559998) {
      let _0x44e7d3 = this.hasPoint(_0x559998);
      if (_0x44e7d3) {
        return _0x44e7d3;
      }
      let _0x200f1a = this.shape;
      const _0x2d8b5b = _0x200f1a.segments.findIndex(_0x5abf69 => _0x5abf69 === this);
      let _0x10dc3a = _0x405116.make(_0x559998, this.shape.owner.space());
      const _0x58651e = new _0x4b58e0(this.start, _0x10dc3a, this.shape);
      const _0x1eaf8f = new _0x4b58e0(_0x10dc3a, this.end, this.shape);
      this.remove();
      _0x200f1a.segments.splice(_0x2d8b5b, 1, _0x58651e, _0x1eaf8f);
      return _0x10dc3a;
    }
    static fromVertices(_0x12e698, _0x30f814) {
      let _0x1dc0ae = _0x12e698.slice(1).map((_0x10a86c, _0x320224) => new _0x4b58e0(_0x12e698[_0x320224], _0x10a86c, _0x30f814));
      return _0x1dc0ae;
    }
  }
  const _0x26200e = 1;
  class _0x21bf0e {
    constructor(_0x10230a, _0x2fbbb9) {
      this.segments = [];
      this.x = _0x10230a;
      this.y = _0x2fbbb9;
    }
    commit(_0x442d60) {
      this.segments.push(_0x442d60);
    }
    remove(_0x4af05d) {
      const {
        segments: _0x4639b7
      } = this;
      const _0x30f6c3 = _0x4639b7.indexOf(_0x4af05d);
      if (_0x30f6c3 !== -1) {
        _0x4639b7.splice(_0x30f6c3, 1);
      }
    }
  }
  class _0xcbc100 {
    constructor(_0x5b628f, _0x524f00, _0x292cfb) {
      this.width = _0x5b628f;
      this.height = _0x524f00;
      this.center = new _0x320aa6(_0x5b628f / 2, _0x524f00 / 2);
      this.size = _0x292cfb;
      this.columns = Math.ceil(_0x5b628f / _0x292cfb);
      this.rows = Math.ceil(_0x524f00 / _0x292cfb);
      this.cells = [];
      for (let _0x4e7e81 = 0; _0x4e7e81 < this.rows; _0x4e7e81++) {
        for (let _0x290bdc = 0; _0x290bdc < this.columns; _0x290bdc++) {
          this.cells.push(new _0x21bf0e(_0x290bdc, _0x4e7e81));
        }
      }
    }
    count() {
      let _0x1977d2 = 0;
      this.cells.forEach(_0xb7aad8 => {
        _0x1977d2 += _0xb7aad8.segments.length;
      });
      return _0x1977d2;
    }
    cell(_0x1bd095) {
      if (!_0x1bd095) {
        debugger;
      }
      return this.getCell(~~(_0x1bd095.x / this.size), ~~(_0x1bd095.y / this.size));
    }
    colRow(_0x2b6127) {
      return {
        col: ~~(_0x2b6127.x / this.size),
        row: ~~(_0x2b6127.y / this.size)
      };
    }
    getCell(_0x959c13, _0x4feddb) {
      {
        if (_0x959c13 < 0 || _0x959c13 > this.columns - 1 || _0x4feddb < 0 || _0x4feddb > this.rows - 1) {
          console.log(_0x959c13, _0x4feddb);
          throw new Error("Точка выходит за границы пространства");
        }
      }
      let _0x5a1f5c = this.cells[_0x334095(_0x959c13, this.columns) + _0x334095(_0x4feddb, this.rows) * this.columns];
      if (!_0x5a1f5c) {
        debugger;
      }
      return _0x5a1f5c;
    }
    verticeAt(_0x21f8e8) {
      const _0x417ee2 = this.cell(_0x21f8e8);
      for (let _0x12e132 of _0x417ee2.segments) {
        if (_0x12e132.start.at.equal(_0x21f8e8)) {
          return _0x12e132.start;
        }
        if (_0x12e132.end.at.equal(_0x21f8e8)) {
          return _0x12e132.end;
        }
      }
      return null;
    }
    intersections(_0x14701b) {
      let _0x9c856d = _0x4ee89f(_0x14701b.start.x, _0x14701b.end.x);
      let _0x23deba = _0x4ee89f(_0x14701b.start.y, _0x14701b.end.y);
      const _0x345a85 = this.colRow({
        x: _0x9c856d[0] - _0x26200e,
        y: _0x23deba[0] - _0x26200e
      });
      const _0xa69b96 = this.colRow({
        x: _0x9c856d[1] + _0x26200e,
        y: _0x23deba[1] + _0x26200e
      });
      const _0x44b2bc = _0x345a85.col;
      const _0x307433 = _0xa69b96.col;
      const _0xc7f793 = _0x345a85.row;
      const _0x5cc411 = _0xa69b96.row;
      const _0x48ca0f = [];
      const _0x299d48 = new Set();
      for (let _0x1fe7c6 = _0xc7f793; _0x1fe7c6 <= _0x5cc411; _0x1fe7c6++) {
        for (let _0x4592c6 = _0x44b2bc; _0x4592c6 <= _0x307433; _0x4592c6++) {
          for (let _0x5f41df of this.getCell(_0x4592c6, _0x1fe7c6).segments) {
            _0x299d48.add(_0x5f41df);
          }
        }
      }
      for (let _0x17d145 of _0x299d48) {
        if (_0x17d145.removed) {
          debugger;
        }
        const _0x3b38df = _0x17d145.intersect(_0x14701b);
        if (_0x3b38df) {
          _0x48ca0f.push({
            point: _0x3b38df,
            segment: _0x17d145,
            distance: _0x3b38df.distance(_0x14701b.start)
          });
        }
      }
      return _0x48ca0f.sort((_0x54a8ff, _0x417efe) => _0x54a8ff.distance - _0x417efe.distance);
    }
    clear() {
      this.cells = [];
    }
    commit(_0x5eae52) {
      for (let _0x2a309 of this.segmentCells(_0x5eae52)) {
        _0x2a309.commit(_0x5eae52);
      }
    }
    segmentCells(_0xa566, _0x1fade2 = _0x204775 * 2) {
      let _0x4f5a03 = _0x4ee89f(_0xa566.start.x, _0xa566.end.x);
      let _0x25799c = _0x4ee89f(_0xa566.start.y, _0xa566.end.y);
      let _0x593f79 = this.colRow({
        x: _0x4f5a03[0] - _0x1fade2,
        y: _0x25799c[0] - _0x1fade2
      });
      let _0x2393be = this.colRow({
        x: _0x4f5a03[1] + _0x1fade2,
        y: _0x25799c[1] + _0x1fade2
      });
      let _0x513dd6 = [];
      for (let _0x146780 = _0x593f79.col; _0x146780 <= _0x2393be.col; _0x146780++) {
        for (let _0x137a0a = _0x593f79.row; _0x137a0a <= _0x2393be.row; _0x137a0a++) {
          _0x513dd6.push(this.getCell(_0x146780, _0x137a0a));
        }
      }
      return _0x513dd6;
    }
    remove(_0xe322ff) {
      for (let _0xf999ee of this.segmentCells(_0xe322ff)) {
        _0xf999ee.remove(_0xe322ff);
      }
    }
  }
  var _0x47cae4 = Object.defineProperty;
  var _0x45c158 = (_0x223894, _0x22aaa9, _0x5d5c3a) => {
    if (typeof _0x22aaa9 !== "symbol") {
      _0x22aaa9 += "";
    }
    if (_0x22aaa9 in _0x223894) {
      return _0x47cae4(_0x223894, _0x22aaa9, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x5d5c3a
      });
    }
    return _0x223894[_0x22aaa9] = _0x5d5c3a;
  };
  class _0x405116 {
    constructor(_0x17ef5c) {
      _0x45c158(this, "absorbedBy");
      this.at = _0x17ef5c;
      this.segments = [];
      this.id = _0x4c052a();
    }
    addSegment(_0x32590a) {
      if (this.segments.indexOf(_0x32590a) === -1) {
        this.segments.push(_0x32590a);
      }
    }
    remove(_0x15649c) {
      const _0x37d805 = this.segments.indexOf(_0x15649c);
      this.segments.splice(_0x37d805, 1);
    }
    static make(_0x59be0f, _0x78536a) {
      if (_0x78536a) {
        let _0x247728 = _0x78536a.verticeAt(_0x59be0f);
        if (_0x247728) {
          return _0x247728;
        }
      }
      return new _0x405116(_0x59be0f);
    }
    absorb(_0x492b68) {
      if (_0x492b68 == this) {
        debugger;
      }
      if (_0x492b68.segments.length > 0) {
        this.segments = this.segments.concat(_0x492b68.segments);
        for (let _0x49a04a of _0x492b68.segments) {
          if (_0x49a04a.start == _0x492b68) {
            _0x49a04a.start = this;
          }
          if (_0x49a04a.end == _0x492b68) {
            _0x49a04a.end = this;
          }
        }
      }
      _0x492b68.absorbedBy = this;
      return this;
    }
    absorber() {
      if (this.absorbedBy) {
        return this.absorbedBy.absorber();
      } else {
        return this;
      }
    }
    get x() {
      return this.at.x;
    }
    get y() {
      return this.at.y;
    }
    toString() {
      return this.at.toString();
    }
  }
  class _0x81a349 {
    get isTrack() {
      return false;
    }
    constructor(_0x5c3f77, _0x474f00, _0x428562, _0x40a979) {
      this.game = _0x5c3f77;
      this.polygon = new _0x1eff3e(_0x474f00.map(_0x2e4fd6 => new _0x405116(_0x2e4fd6)), this);
      this.radius = _0x40a979;
      this.center = _0x428562;
    }
    static fromPoints(_0x3173ee, _0x34e677) {
      return new _0x81a349(_0x3173ee, _0x34e677, new _0x320aa6(0, 0), 0);
    }
    static circular(_0x47ba8e, _0x38c126, _0xefacb7, _0x1297cc) {
      return _0x81a349.fromPoints(_0x47ba8e, _0x3d3e32(_0x38c126, _0xefacb7, _0x1297cc));
    }
    space() {
      return this.game.space;
    }
    intersections(_0x1b3fe6) {
      if (!this.isNear(_0x1b3fe6)) {
        return [];
      }
      let _0x481c8c = this.space().intersections(_0x1b3fe6);
      let _0x28a854 = _0x481c8c.filter(_0x521d30 => _0x521d30.segment.shape.owner == this);
      return _0x28a854;
    }
    isNear(_0x52af71) {
      if (this.center) {
        if (_0x52af71.start.distance2(this.center) < this.radius ** 2 * 0.95 && _0x52af71.end.distance2(this.center) < this.radius ** 2 * 0.95) {
          return false;
        }
      }
      return true;
    }
    enterInto() {}
  }
  var _0x432c50 = Object.defineProperty;
  var _0x527b1c = (_0xf7aa32, _0x1be736, _0x546618) => {
    if (typeof _0x1be736 !== "symbol") {
      _0x1be736 += "";
    }
    if (_0x1be736 in _0xf7aa32) {
      return _0x432c50(_0xf7aa32, _0x1be736, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x546618
      });
    }
    return _0xf7aa32[_0x1be736] = _0x546618;
  };
  class _0xe6be52 {
    constructor() {
      _0x527b1c(this, "owner");
      _0x527b1c(this, "segments", []);
    }
  }
  var _0x29c81e = Object.defineProperty;
  var _0xe04287 = (_0x3c4f72, _0xf4aa50, _0x294c38) => {
    if (typeof _0xf4aa50 !== "symbol") {
      _0xf4aa50 += "";
    }
    if (_0xf4aa50 in _0x3c4f72) {
      return _0x29c81e(_0x3c4f72, _0xf4aa50, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x294c38
      });
    }
    return _0x3c4f72[_0xf4aa50] = _0x294c38;
  };
  class _0x1eff3e extends _0xe6be52 {
    constructor(_0x2219f2, _0x3004e7) {
      super();
      _0xe04287(this, "path");
      this.segments;
      this.simplify = [];
      this.owner = _0x3004e7;
      this.bounds = null;
      const {
        length: _0x38ee2e
      } = _0x2219f2;
      for (let _0x2c4590 = 0; _0x2c4590 < _0x38ee2e;) {
        this.segments.push(new _0x4b58e0(_0x2219f2[_0x2c4590++], _0x2219f2[_0x2c4590 < _0x38ee2e ? _0x2c4590 : 0], this));
      }
      this.calcProperties();
    }
    static fromFlatArray(_0x37d534, _0x2e972f) {
      let _0x415f2d = [];
      for (let _0x3308bf = 0; _0x3308bf < _0x37d534.length; _0x3308bf += 2) {
        _0x415f2d.push(new _0x405116(new _0x320aa6(_0x37d534[_0x3308bf], _0x37d534[_0x3308bf + 1])));
      }
      return new _0x1eff3e(_0x415f2d, _0x2e972f);
    }
    remove() {
      this.segments.forEach(_0x8bc89d => _0x8bc89d.remove());
    }
    reverse() {
      this.segments.reverse();
      this.segments.forEach(_0x2e2c4a => _0x2e2c4a.reverse());
      return this;
    }
    splice(_0x1a88a2, _0xd2000, _0x5bacd8) {
      const _0x3e94c7 = this.segments.splice(_0xd2000, _0x5bacd8 - _0xd2000, ..._0x4b58e0.fromVertices(_0x1a88a2, this));
      _0x3e94c7.forEach(_0x34cb06 => _0x34cb06.remove());
    }
    unsplice(_0x5b3807, _0x41392b, _0xa2fa5d) {
      const _0x4d7e82 = this.segments.splice(_0x41392b, _0xa2fa5d - _0x41392b);
      this.remove();
      this.segments = _0x4d7e82.concat(_0x4b58e0.fromVertices(_0x5b3807.reverse(), this));
    }
    left(_0x12c055, _0x3ad05c, _0x4283c2) {
      const _0x50bb68 = [];
      for (let _0x4236cb = 0; _0x4236cb < _0x12c055.length - 1; _0x4236cb++) {
        _0x50bb68.push(new _0x4b58e0(_0x12c055[_0x4236cb], _0x12c055[_0x4236cb + 1], this));
      }
      const _0x5f366a = this.segments.splice(_0x3ad05c, _0x4283c2 - _0x3ad05c, ..._0x50bb68);
      _0x5f366a.forEach(_0x3c33fd => _0x3c33fd.remove());
    }
    right(_0x1e8712, _0x2aeb10, _0x2631b1) {
      const _0x411a3e = [];
      for (let _0x5e1791 = 0; _0x5e1791 < _0x1e8712.length - 1; _0x5e1791++) {
        _0x411a3e.push(new _0x4b58e0(_0x1e8712[_0x5e1791], _0x1e8712[_0x5e1791 + 1], this));
      }
      const _0x493e6d = this.segments.splice(_0x2aeb10, _0x2631b1 - _0x2aeb10);
      this.remove();
      _0x411a3e.reverse().forEach(_0x43a367 => _0x43a367.reverse());
      this.segments = _0x493e6d.concat(_0x411a3e);
    }
    vertices() {
      return this.segments.map(_0x4e1815 => _0x4e1815.start);
    }
    intersections(_0x39a13) {
      let _0x48392c = [];
      if (this.segments.length > 1) {
        this.segments.forEach(_0x38d21d => {
          const _0x4544cf = _0x38d21d.intersect(_0x39a13);
          if (_0x4544cf) {
            _0x48392c.push({
              segment: _0x38d21d,
              point: _0x4544cf,
              distance: _0x4544cf.distance(_0x39a13.start)
            });
          }
        });
      }
      if (_0x48392c.length > 1) {
        _0x48392c.sort((_0x2e62c4, _0xb9f758) => _0x2e62c4.distance - _0xb9f758.distance);
      }
      return _0x48392c;
    }
    inside(_0x4e13f1) {
      let _0x1cc36a = this.owner.polygon.owner;
      let _0x103a7d = _0x1cc36a instanceof _0x81a349 ? _0x1cc36a.game : _0x1cc36a.unit.game;
      for (let _0x300725 = 0; _0x300725 < 3; _0x300725++) {
        let _0x1efc14 = {
          start: _0x4e13f1,
          end: new _0x320aa6(_0x103a7d.space.width * 0.99, _0x4e13f1.y + Math.max(1, Math.min(Math.sin(_0x103a7d.tic) * 10, _0x103a7d.space.height - 1)))
        };
        let _0x320a52 = _0x103a7d.space.intersections(_0x1efc14).sort((_0x164b82, _0x416177) => _0x164b82.point.x - _0x416177.point.y);
        _0x320a52 = _0x320a52.filter(_0x56c2eb => _0x56c2eb.segment.shape == this);
        for (let _0x34c43f of _0x320a52) {
          if (_0x4f214b(_0x4e13f1, _0x34c43f.segment)) {
            return 1;
          }
        }
        let _0x111660 = 0;
        for (let _0x471694 of _0x320a52) {
          if (_0x471694.point.equal(_0x471694.segment.start) || _0x471694.point.equal(_0x471694.segment.end)) {
            continue;
          }
          _0x111660++;
        }
        if (_0x111660 % 2 == 1) {
          return 2;
        } else {
          return 0;
        }
      }
      debugger;
    }
    areaOld() {
      let _0x297872 = 0;
      this.segments.forEach(_0x59d778 => {
        const {
          start: _0x3dd700,
          end: _0x5541fd
        } = _0x59d778;
        _0x297872 += (_0x3dd700.at.x + _0x5541fd.at.x) * (_0x5541fd.at.y - _0x3dd700.at.y);
      });
      return _0x297872 / 2;
    }
    signedArea() {
      return _0x530c26(this.segments.map(_0x171604 => _0x171604.start.at));
    }
    calcSimplify() {
      this.simplify = [];
      let _0x1f6599 = 0;
      this.segments.forEach(_0x3bb3c4 => {
        const _0x5785a2 = _0x3bb3c4.start.at;
        if (_0x1f6599 < 2) {
          this.simplify.push(_0x5785a2);
          _0x1f6599++;
        } else {
          const _0x1b5abb = this.simplify[_0x1f6599 - 2];
          if (_0x5785a2.distance2(_0x1b5abb) < _0x345974) {
            this.simplify[_0x1f6599 - 1] = _0x5785a2;
          } else {
            this.simplify.push(_0x5785a2);
            _0x1f6599++;
          }
        }
      });
    }
    calcProperties() {
      delete this.path;
      this.calcSimplify();
      this.calcBounds();
      this.area = this.signedArea();
      if (this.area < 0) {
        console.error("negative area size");
        debugger;
      }
    }
    calcBounds() {
      let _0x1de2b6 = Infinity;
      let _0x270f5e = -Infinity;
      let _0x469ae3 = Infinity;
      let _0x13f1e8 = -Infinity;
      this.simplify.forEach(_0x6ab852 => {
        const {
          x: _0x336f7c,
          y: _0x1bbe71
        } = _0x6ab852;
        _0x1de2b6 = Math.min(_0x1de2b6, _0x336f7c);
        _0x270f5e = Math.max(_0x270f5e, _0x336f7c);
        _0x469ae3 = Math.min(_0x469ae3, _0x1bbe71);
        _0x13f1e8 = Math.max(_0x13f1e8, _0x1bbe71);
      });
      _0x1de2b6 -= _0x2f3ae0;
      _0x270f5e += _0x2f3ae0;
      _0x469ae3 -= _0x2f3ae0;
      _0x13f1e8 += _0x2f3ae0;
      this.bounds = {
        left: _0x1de2b6,
        right: _0x270f5e,
        top: _0x469ae3,
        bottom: _0x13f1e8
      };
    }
    points() {
      return this.vertices().map(_0x48b6e6 => _0x48b6e6.at);
    }
    pointsUnified(_0x570a6b) {
      return _0x3c4d7c(this.points(), _0x570a6b).map(_0x542ebb => new _0x320aa6(_0x542ebb.x, _0x542ebb.y));
    }
    toString() {
      return this.segments.map(_0x124750 => _0x124750.start).map(_0x1701d5 => _0x1701d5.toString()).join("");
    }
  }
  class _0x452e65 extends _0xe6be52 {
    constructor(_0xeb573c) {
      super();
      this.owner = _0xeb573c || null;
      this.start = null;
      this.end = null;
      this.segments = [];
      this.bounds = {
        left: Infinity,
        right: -Infinity,
        top: Infinity,
        bottom: -Infinity
      };
    }
    remove() {
      this.segments.forEach(_0x4b2424 => _0x4b2424.remove());
      this.segments = [];
    }
    reverse() {
      this.segments.reverse().forEach(_0x53e3c1 => _0x53e3c1.reverse());
      if (this.end) {
        [this.start, this.end] = [this.end, this.start];
      }
      return this;
    }
    updateBounds(_0x5a87e9) {
      const {
        x: _0x20bc0d,
        y: _0x22745b
      } = _0x5a87e9;
      this.bounds.left = Math.min(this.bounds.left, _0x20bc0d);
      this.bounds.right = Math.max(this.bounds.right, _0x20bc0d);
      this.bounds.top = Math.min(this.bounds.top, _0x22745b);
      this.bounds.bottom = Math.max(this.bounds.bottom, _0x22745b);
    }
    add(_0x40a691) {
      if (this.end && this.end === _0x40a691) {
        return false;
      }
      if (this.end) {
        this.segments.push(new _0x4b58e0(this.end, _0x40a691, this));
      } else {
        this.start = _0x40a691;
      }
      this.end = _0x40a691;
      this.updateBounds(_0x40a691.at);
      return true;
    }
    addVertices(_0x18ca8b) {
      this.segments = _0x4b58e0.fromVertices(_0x18ca8b, this);
      this.end = this.segments[this.segments.length - 1].end;
      for (let _0x16936a of _0x18ca8b) {
        this.updateBounds(new _0x320aa6(_0x16936a.at.x, _0x16936a.at.y));
      }
      return this;
    }
    toString() {
      return [this.segments[0].start, ...this.segments.map(_0x44fda4 => _0x44fda4.end)].map(_0x1f2c34 => _0x1f2c34.toString()).join("");
    }
    inside(_0x74dcdb) {
      return 0;
    }
    endSegment() {
      if (this.segments.length > 0) {
        return this.segments[this.segments.length - 1];
      } else {
        return null;
      }
    }
    vertices() {
      if (this.start) {
        return [this.start, ...this.segments.map(_0x156253 => _0x156253.end)];
      } else {
        return [];
      }
    }
  }
  var _0x3370cf = Object.defineProperty;
  var _0x2dc091 = (_0x5b25b4, _0x19fe1c, _0x5a3956) => {
    if (typeof _0x19fe1c !== "symbol") {
      _0x19fe1c += "";
    }
    if (_0x19fe1c in _0x5b25b4) {
      return _0x3370cf(_0x5b25b4, _0x19fe1c, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x5a3956
      });
    }
    return _0x5b25b4[_0x19fe1c] = _0x5a3956;
  };
  class _0x57568a {
    constructor(_0x522c34, _0x324164) {
      _0x2dc091(this, "unit");
      this.unit = _0x522c34;
      this.merges = [];
      this.polygon = new _0x1eff3e(_0x324164.map(_0x31e1c4 => new _0x405116(_0x31e1c4)), this);
      this.polygon.calcProperties();
    }
    get isTrack() {
      return false;
    }
    get area() {
      return this.polygon.area;
    }
    remove() {
      this.polygon.remove();
    }
    touchBy(_0x2ab6ae, _0x2941ec) {
      if (_0x2ab6ae.death || this.unit.death) {
        debugger;
      }
      if (_0x2ab6ae == this.unit) {
        return this.handleSelfIntersect();
      } else {
        return this.handleEnemyIntersect(_0x2ab6ae);
      }
    }
    handleSelfIntersect() {
      if (this.unit.tail.hasSegments()) {
        this.unit.handleComeback();
        return "comeback";
      }
    }
    handleEnemyIntersect(_0xc1c0f9) {
      if (_0xc1c0f9.in == this) {
        _0xc1c0f9.tail.intersect(this, false);
        _0xc1c0f9.in = null;
      }
    }
    removeCapturedArea(_0x4fd530) {
      let _0x4c4069 = _0x4fd530[0];
      let _0x10d3fb = _0x4fd530[_0x4fd530.length - 1];
      const _0x250fef = this.polygon.segments.findIndex(_0x4a4b17 => _0x4a4b17.start === _0x4c4069);
      const _0x227fbb = this.polygon.segments.findIndex(_0x1824d3 => _0x1824d3.start === _0x10d3fb);
      if (_0x250fef < 0 || _0x227fbb < 0) {
        return;
      }
      const [_0x4f9273, _0x2829f3] = _0x1c30f2([_0x250fef, _0x227fbb]);
      if (_0x4f9273 !== _0x250fef) {
        _0x4fd530.reverse();
      }
      const _0x1f7f2c = this.polygon.vertices();
      const _0x124f84 = _0x1f7f2c.splice(_0x4f9273, _0x2829f3 - _0x4f9273 + 1, ..._0x4fd530);
      _0x124f84.shift();
      _0x124f84.pop();
      _0x124f84.push(..._0x4fd530.slice().reverse());
      if (this.unit.in === this.unit.base && _0x4258a5(_0x124f84, this.unit.at) || this.unit.in !== this.unit.base && _0x4258a5(_0x124f84, this.unit.tail.polyline.start.at)) {
        this.polygon.right(_0x4fd530, _0x4f9273, _0x2829f3);
      } else {
        this.polygon.left(_0x4fd530, _0x4f9273, _0x2829f3);
      }
      this.polygon.calcProperties();
    }
    addCapturedArea(_0x54eae0) {
      const _0x411846 = _0x54eae0.vertices();
      let {
        start: _0x19ce7d,
        end: _0x1f8232
      } = _0x54eae0;
      const _0x9e6efe = this.polygon.segments.findIndex(_0x3efb95 => _0x3efb95.start === _0x19ce7d);
      const _0x48b67d = this.polygon.segments.findIndex(_0x441504 => _0x441504.start === _0x1f8232);
      if (_0x9e6efe == -1 || _0x48b67d == -1) {
        return [];
      }
      const [_0x11eb16, _0x1e180b] = _0x1c30f2([_0x48b67d, _0x9e6efe]);
      if (_0x11eb16 !== _0x9e6efe) {
        _0x411846.reverse();
      }
      const _0x260275 = this.polygon.vertices();
      const _0x37db21 = _0x260275.splice(_0x11eb16, _0x1e180b - _0x11eb16 + 1, ..._0x411846);
      _0x37db21.shift();
      _0x37db21.pop();
      _0x37db21.reverse();
      _0x37db21.push(..._0x411846);
      let _0x333159;
      if (_0x530c26(_0x37db21) < 0) {
        _0x333159 = _0x260275.reverse();
        this.polygon.unsplice(_0x411846, _0x11eb16, _0x1e180b);
      } else {
        _0x333159 = _0x37db21;
        this.polygon.splice(_0x411846, _0x11eb16, _0x1e180b);
      }
      this.polygon.calcProperties();
      return _0x333159;
    }
    space() {
      return this.unit.game.space;
    }
    static havingVertice(_0x3f623) {
      return _0x3990c0(_0x3f623.segments.map(_0x4c5d11 => _0x4c5d11.shape instanceof _0x1eff3e ? _0x4c5d11.shape.owner : null).filter(_0x2a66dd => _0x2a66dd && _0x2a66dd instanceof _0x57568a));
    }
  }
  class _0x396995 {
    get isTrack() {
      return true;
    }
    constructor(_0x2d7f46) {
      this.polyline = new _0x452e65(this);
      this.simplyline = [];
      this.unit = _0x2d7f46;
      this.length = 0;
      if (typeof Path2D != "undefined") {
        this.path = new Path2D();
      }
      this.baseIntersections = [];
    }
    add(_0xcca5d) {
      if (this.polyline.add(_0xcca5d)) {
        if (this.path) {
          this.path.lineTo(_0xcca5d.at.x, _0xcca5d.at.y);
        }
        const _0x2be6e4 = this.polyline.segments.length;
        if (_0x2be6e4 > 0) {
          const _0x63739b = this.polyline.segments[_0x2be6e4 - 1];
          this.length += _0x63739b.start.at.distance(_0x63739b.end.at);
        }
        const {
          simplyline: _0x1d4f60
        } = this;
        const {
          length: _0x215e3a
        } = _0x1d4f60;
        if (_0x215e3a > 2) {
          const _0x204644 = _0x1d4f60[_0x215e3a - 2];
          if (_0xcca5d.at.distance2(_0x204644) < _0x345974) {
            _0x1d4f60[_0x215e3a - 1] = _0xcca5d.at;
          } else {
            _0x1d4f60.push(_0xcca5d.at);
          }
        } else {
          _0x1d4f60.push(_0xcca5d.at);
        }
      }
      return this.polyline.end;
    }
    intersect(_0x4b471b, _0x5c62af) {
      if (_0x4b471b.unit == this.unit) {
        debugger;
      }
      let _0x1968e5 = this.polyline.endSegment();
      if (_0x5c62af) {
        this.baseIntersections.push({
          enter: _0x1968e5.start,
          base: _0x4b471b,
          exit: null
        });
      } else {
        this.baseIntersections[this.baseIntersections.length - 1].exit = _0x1968e5.end;
      }
    }
    remove() {
      if (typeof Path2D != "undefined") {
        this.path = new Path2D();
      }
      this.polyline.remove();
      this.polyline = new _0x452e65(this);
      this.length = 0;
      this.simplyline = [];
      this.baseIntersections = [];
    }
    touchBy(_0x216bf3, _0x3fff70) {
      if (_0x216bf3 == this.unit) {
        let _0x2ecd7a = this.unit.tail.hasSegments() && _0x3fff70.segment != _0x216bf3.tail.polyline.endSegment();
        if (!_0x2ecd7a) {
          return;
        }
        const _0x21bb7c = _0x216bf3.game.border.radius - _0x216bf3.at.distance(_0x216bf3.game.space.center) < 5 ? _0x106406 : _0x17919a;
        this.unit.kill(undefined, _0x21bb7c);
      } else {
        this.unit.kill(_0x216bf3, _0x54bd06);
        if (_0x216bf3.in == this.unit.base) {
          _0x216bf3.in = null;
        }
      }
    }
    hasSegments() {
      return this.polyline.segments.length > 0;
    }
    space() {
      return this.unit.game.space;
    }
  }
  let _0x482cf5;
  const _0x216514 = () => {
    if (!_0x482cf5) {
      const _0x18186b = new Path2D();
      const _0x576078 = 1;
      _0x18186b.moveTo(-_0x576078, -_0x576078);
      _0x18186b.lineTo(_0x576078, -_0x576078);
      _0x18186b.lineTo(_0x576078, _0x576078);
      _0x18186b.lineTo(-_0x576078, _0x576078);
      _0x18186b.closePath();
      _0x482cf5 = _0x18186b;
    }
    return _0x482cf5;
  };
  class _0x5c8195 {
    constructor(_0x5b5687, _0x777e0d, _0x3b3391, _0x384400, _0x1c7fb2, _0x40314b, _0xa9d467, _0xb65893, _0x54ece7, _0x76815d) {
      this.target = _0x5b5687;
      this.unit = _0x777e0d;
      let _0x3911bc = _0x777e0d.skin ? _0x777e0d.skin.colors.particles : "#fff";
      this.graphics = _0x3911bc[~~(Math.random() * _0x3911bc.length)];
      this.at = _0x3b3391;
      this.velocity = _0x384400;
      this.acceleration = _0x1c7fb2;
      this.rotate = _0x40314b;
      this.scale = _0xa9d467;
      this.vscale = _0xb65893;
      this.rotation = Math.random() * Math.PI * 2;
      this.time = _0x54ece7;
      this.fn = _0x76815d;
    }
    update(_0x495d98) {
      const _0x4f3945 = _0x495d98 / 1000;
      this.time -= _0x495d98;
      if (this.time <= 0) {
        if (this.fn) {
          this.fn(this);
        }
        return;
      }
      this.at.x += this.velocity.x * _0x4f3945;
      this.at.y += this.velocity.y * _0x4f3945;
      if (this.acceleration) {
        this.velocity.x += this.acceleration.x * _0x4f3945;
        this.velocity.y += this.acceleration.y * _0x4f3945;
      }
      this.rotation += this.rotate * _0x4f3945;
      this.scale += this.vscale * _0x4f3945;
    }
    draw(_0x59fc31) {
      const {
        x: _0x3f687b,
        y: _0x33e044
      } = this.at;
      const {
        rotation: _0x4168cd,
        graphics: _0xbab97d,
        scale: _0x430fa6
      } = this;
      let _0x300a7c = _0x59fc31.getTransform();
      _0x59fc31.translate(_0x3f687b, _0x33e044);
      _0x59fc31.rotate(_0x4168cd);
      _0x59fc31.scale(_0x430fa6, _0x430fa6);
      if (typeof _0xbab97d === "string") {
        if (_0x59fc31.fillStyle !== _0xbab97d) {
          _0x59fc31.fillStyle = _0xbab97d;
        }
        _0x59fc31.fill(_0x216514());
      } else {
        _0x59fc31.scale(3 / _0xbab97d.width, 3 / _0xbab97d.width);
        _0x59fc31.drawImage(_0xbab97d, -_0xbab97d.width / 2, -_0xbab97d.height / 2);
      }
      _0x59fc31.setTransform(_0x300a7c);
    }
    static nom(_0xbc676a, _0x3dc802, _0x591d70) {
      const _0x5c4fe2 = Math.sign(Math.random() - 0.5);
      const _0xd68597 = (_0xbc676a.skin ? _0xbc676a.skin.container.maxScale : 1) * _0x591d70;
      const {
        unitSpeed: _0x3b0c65,
        baseHeight: _0x3eb9da
      } = _0xbc676a.game.config;
      let _0x2e9138 = _0x320aa6.delta(_0x3dc802.start, _0x3dc802.end);
      const _0x625f43 = _0x2e9138.clone().normalize().rotate(_0x5c4fe2 * Math.random() * (Math.PI / 30)).scale(_0x3b0c65 * (1 + Math.random()));
      const _0x137a4b = _0x2e9138.clone().rotate(Math.PI / 2).normalize().scale(_0x5c4fe2 * Math.random() * _0xd68597 / 2);
      const _0x24d378 = _0x2e9138.clone().normalize().scale(_0xd68597 / 2);
      const _0x4c51de = _0x2e9138.clone().normalize().scale(_0x3b0c65 * -6).rotate(_0x5c4fe2 * Math.random() * (Math.PI / 10));
      const _0xdd5a7 = 0.75 + Math.random() * 0.5;
      const _0xfc9d70 = new _0x5c8195(null, _0xbc676a.in.unit, _0x3dc802.start.clone().add(_0x137a4b).add(_0x24d378).add(new _0x320aa6(0, -_0x3eb9da)), _0x625f43, _0x4c51de, Math.PI + Math.random() * Math.PI, _0xdd5a7, _0xdd5a7 * -2, 300);
      return _0xfc9d70;
    }
  }
  function _0x16ae18(_0x5cf611, _0x12bea9, _0x1bb66c, _0x42ead3) {
    let _0x2a268a = _0x5cf611.game;
    if (_0x2a268a.generateParticles) {
      const _0x515d00 = _0x5cf611.schemes ? _0x5cf611.schemes.scores() : 0;
      let _0x151534 = 0;
      let _0xedddea = 0;
      let _0x507d1d = 0;
      _0x1bb66c.forEach(_0x41528f => {
        _0xedddea += _0x41528f.vector.magnitude();
        if (_0xedddea > 5) {
          _0xedddea = 0;
          const _0x3f185f = _0x41528f.vector.clone().normalize().rotate(Math.sign(Math.random() - 0.5) * Math.PI / 2).scale(25 + Math.random() * 100);
          if (Math.random() > 0.25) {
            _0x3f185f.scale(0.1);
          }
          const _0x48ec04 = (_0x42ead3 ? 3 : 1) * (1 + Math.random() * 0.5);
          const _0x4a14f9 = 500 + Math.random() * 500;
          const _0x1b8b23 = -_0x48ec04 * 0.7 * (1000 / _0x4a14f9);
          const _0x2cc1e6 = new _0x5c8195(null, _0x5cf611, _0x41528f.start.at.clone(), _0x3f185f, null, Math.PI * 2 * (1 + Math.random()) * Math.sign(Math.random() - 0.5 || 1), _0x48ec04, _0x1b8b23, _0x4a14f9, _0xfd50b9 => {
            if (_0x12bea9) {
              _0xfd50b9.target = _0x12bea9;
              _0xfd50b9.time = 1;
              _0xfd50b9.velocity = _0xfd50b9.velocity.magnitude();
              _0xfd50b9.acceleration = (1.5 + Math.random() * 0.5) * _0x2a268a.config.unitSpeed;
              _0xfd50b9.fn = () => {
                if (_0x42ead3) {
                  _0x12bea9.schemes.getScheme().accumulator += _0x507d1d;
                }
              };
              _0xfd50b9.vscale = 0;
              _0xfd50b9.scale = 1;
            }
          });
          _0x2a268a.particles.push(_0x2cc1e6);
          _0x151534++;
        }
      });
      _0x507d1d = _0x515d00 / _0x151534;
    }
  }
  class _0x1e89e6 {
    constructor(..._0x8698dd) {
      this.Schemes = _0x8698dd;
      this.current = 0;
    }
    getSchemes(_0x2b4330) {
      return new _0x14666b(this.Schemes.map(_0x5bcd16 => new _0x5bcd16(_0x2b4330)), this);
    }
    next() {
      this.current++;
      if (this.current === this.Schemes.length) {
        this.current = 0;
      }
    }
  }
  class _0x14666b {
    constructor(_0x38ec97, _0xa3b265) {
      this.schemes = _0x38ec97;
      this.manager = _0xa3b265;
    }
    getScheme(_0x4af92c) {
      if (_0x4af92c) {
        return this.schemes.find(_0x3ca5a4 => _0x3ca5a4.name === _0x4af92c);
      } else {
        return this.schemes[this.manager.current];
      }
    }
    scores() {
      return this.schemes[this.manager.current].scores();
    }
    result() {
      return this.schemes[this.manager.current].result();
    }
    print(_0x244bee) {
      return this.schemes[this.manager.current].print(_0x244bee);
    }
    update(_0x56b6e4) {
      this.schemes.forEach((_0x1af426, _0x2ffe73) => _0x1af426.update(_0x56b6e4, this.manager.current !== _0x2ffe73));
    }
    kill(_0x27ef42, _0x5c9c8f) {
      this.schemes.forEach((_0x35599e, _0x2f6763) => _0x35599e.kill(_0x27ef42, _0x5c9c8f, this.manager.current !== _0x2f6763));
    }
    out() {
      this.schemes.forEach((_0x209360, _0x15386f) => _0x209360.out(this.manager.current !== _0x15386f));
    }
    comeback(_0x2204b6) {
      this.schemes.forEach((_0x2acbe8, _0x403917) => _0x2acbe8.comeback(_0x2204b6, this.manager.current !== _0x403917));
    }
  }
  class _0x3e7c72 {
    constructor(_0xf13bb1, _0x30f056) {
      this.unit = _0xf13bb1;
      this.name = _0x30f056;
    }
    getScheme() {
      return this;
    }
    scores() {
      return 0;
    }
    print(_0x5b1189) {
      return this.scores().toFixed(2);
    }
    result() {
      return this.scores();
    }
    kill() {}
    update() {}
    out() {}
    comeback() {}
  }
  class _0x512929 extends _0x3e7c72 {
    constructor(_0x1cf050) {
      super(_0x1cf050, "percent");
    }
    scores() {
      return this.unit.percent * 100;
    }
    result() {
      return +this.scores().toFixed(2);
    }
    print(_0x34bab1) {
      const _0x280005 = _0x34bab1 || this.scores();
      return _0x280005.toFixed(2) + "%";
    }
    kill(_0x753a62, _0x46ef08, _0x25b903) {
      if (!_0x25b903) {
        this.unit.addKillLabel(this.unit.game.language.killText);
      }
    }
    comeback({
      increment: _0x3d6a7,
      rise: _0x1bf877,
      victims: _0x53325b,
      game: _0x42399c
    }, _0x2299cc) {
      if (!_0x2299cc && _0x3d6a7 * 100 >= 0.01 && this.unit.skin) {
        this.unit.addLabel({
          text: "+" + (_0x3d6a7 * 100).toFixed(2) + "%",
          color: this.unit.skin.colors.nick,
          unit: this.unit,
          time: 1000,
          fading: true
        });
      }
    }
  }
  class _0x5d0f1a {
    constructor(_0x530a36, _0x3726c9, _0x22cf3c) {
      this.states = _0x530a36;
      this.state = "";
      this.payload = _0x22cf3c;
      this.context = {};
      this.change(_0x3726c9);
    }
    change(_0x35218a) {
      const _0x48f389 = this.states[this.state];
      if (_0x48f389 && _0x48f389.leave) {
        this.context = _0x48f389.leave(this.payload, this.context) || this.context;
      }
      const _0x1b1094 = this.states[_0x35218a];
      if (_0x1b1094) {
        this.state = _0x35218a;
        this.context = _0x1b1094.enter && _0x1b1094.enter(this.payload, this.context) || this.context;
        this.update();
      }
    }
    update() {
      const _0x1f5873 = this.states[this.state];
      const _0x1f483f = _0x1f5873 && _0x1f5873.update(this.payload, this.context);
      if (_0x1f483f) {
        this.change(_0x1f483f);
      }
    }
  }
  const _0x26868b = _0x31b31e => {
    const _0x381ad7 = _0x31b31e.unit.game.players;
    for (let _0x39a4ca of _0x381ad7) {
      if (_0x31b31e.unit != _0x39a4ca && _0x45d3a5(_0x31b31e, _0x39a4ca)) {
        return true;
      }
    }
    return false;
  };
  const _0x45d3a5 = (_0x3caeba, _0x36e0a5) => {
    if (!_0x36e0a5) {
      return false;
    }
    const _0x167cbd = Math.max(_0x3caeba.unit.vrange, _0x36e0a5.vrange) + (_0x36e0a5.tail ? _0x36e0a5.tail.length * 2 : 0);
    const _0x3c85f5 = _0x167cbd * _0x3caeba.aggro * _0x3caeba.unit.game.config.botAggro;
    const _0x3c12b9 = _0x36e0a5.tail.simplyline;
    for (let _0x1bdd18 = 0, _0x5c80a1 = _0x3c12b9.length; _0x1bdd18 < _0x5c80a1; _0x1bdd18++) {
      if (_0x3caeba.unit.at.distance2(_0x3c12b9[_0x1bdd18]) < _0x3c85f5 * _0x3c85f5) {
        return true;
      }
    }
    return false;
  };
  const _0x4fe996 = _0x3fd85f => {
    if (_0x3fd85f.unit && _0x3fd85f.unit.in === _0x3fd85f.unit.base) {
      return false;
    }
    return _0x3fd85f.maxDanger > _0x3fd85f.def * 0.8;
  };
  var _0x536a66 = {
    idle: {
      enter: function () {
        return {};
      },
      update: function (_0x2dd527, _0x4387b4) {
        if (_0x2dd527.unit.in === _0x2dd527.unit.base) {
          if (_0x2dd527.rng() < 0.25) {
            return "cut";
          } else {
            return "exit";
          }
        } else {
          return "back";
        }
      }
    },
    cut: {
      enter: function (_0x4ee734) {
        const _0x26165c = _0x4ee734.unit.at.clone().sub(_0x4ee734.unit.game.space.center);
        const _0x1c756b = {
          start: _0x4ee734.unit.at,
          end: _0x26165c.normalize().scale(_0x4ee734.unit.game.border.radius + 10).add(_0x4ee734.unit.game.space.center)
        };
        const _0x27e6e7 = _0x4ee734.unit.base.polygon.intersections(_0x1c756b);
        const _0x22848f = {};
        if (!_0x27e6e7.length) {
          console.log("bot.position", _0x4ee734.unit.at.x, _0x4ee734.unit.at.y);
          console.log("intersections", _0x27e6e7);
          return;
        }
        let _0x5cbb66 = _0x48ac67(_0x27e6e7, _0x26bc74 => _0x26bc74.distance);
        _0x22848f.exitVertice = _0x5cbb66.element.segment.start;
        if (!_0x22848f.exitVertice) {
          debugger;
        }
        return _0x22848f;
      },
      update: function (_0x16deb5, _0x38c16f) {
        if (_0x16deb5.unit.in !== _0x16deb5.unit.base) {
          return "capture";
        }
        const _0x11ff01 = _0x16deb5.unit.at.distance(_0x16deb5.unit.game.space.center);
        _0x16deb5.unit.game.border.radius - _0x11ff01;
        _0x16deb5.target = _0x38c16f.exitVertice.at;
      }
    },
    exit: {
      enter: function (_0x28c17f) {
        const _0x302186 = {};
        let _0x1f9825 = Infinity;
        let _0xee9899;
        let _0x1a2a19 = _0x28c17f.unit.game.config.unitSpeed;
        _0x302186.minDistance = _0x1a2a19;
        while (_0xee9899 === undefined) {
          for (let _0x50ad4a = 0; _0x50ad4a < 1; _0x50ad4a++) {
            let _0x201753 = _0x2272ed(_0x28c17f.unit.base.polygon.segments, _0x28c17f.rng).start;
            const _0x106c71 = _0x201753.at.distance(_0x28c17f.unit.at);
            if (_0x106c71 < _0x1f9825 && _0x106c71 > _0x1a2a19) {
              _0x1f9825 = _0x106c71;
              _0xee9899 = _0x201753;
            }
          }
          _0x1a2a19 *= 0.75;
        }
        _0x302186.exitVertice = _0xee9899;
        return _0x302186;
      },
      update: function (_0x30f4e1, _0x123698) {
        if (_0x30f4e1.unit.in !== _0x30f4e1.unit.base) {
          _0x123698 = {};
          return "capture";
        }
        if (_0x26868b(_0x30f4e1)) {
          return "attack";
        }
        _0x30f4e1.unit.base.polygon.segments;
        const {
          minDistance: _0x40a647
        } = _0x123698;
        const _0xc17829 = _0x2272ed(_0x30f4e1.unit.base.polygon.segments, _0x30f4e1.rng);
        const _0x3f3c9d = _0xc17829.start;
        const _0x224573 = _0x3f3c9d.at.distance(_0x30f4e1.unit.at);
        let _0x2a4332 = _0x123698.exitVertice ? _0x123698.exitVertice.at.distance(_0x30f4e1.unit.at) : Number.MAX_VALUE;
        if (_0x224573 > _0x40a647 && _0x224573 < _0x2a4332) {
          _0x123698.exitVertice = _0x3f3c9d;
        } else {
          if (!_0x123698.exitVertice || !Object.values(_0x123698.exitVertice.segments).some(_0x4cb579 => _0x4cb579 && _0x4cb579.shape === _0x30f4e1.unit.base.polygon)) {
            _0x123698.exitVertice = _0x3f3c9d;
          }
          if (_0x30f4e1.target && _0x30f4e1.target.distance(_0x30f4e1.unit.game.space.center) > _0x30f4e1.unit.game.border.radius - 1) {
            _0x123698.exitVertice = _0x3f3c9d;
          }
        }
        _0x30f4e1.target = _0x123698.exitVertice.at;
      }
    },
    capture: {
      update: function (_0xfeb8bd) {
        if (_0xfeb8bd.unit.in === _0xfeb8bd.unit.base) {
          return "idle";
        }
        if (_0x26868b(_0xfeb8bd)) {
          return "attack";
        }
        const {
          unitSpeed: _0x1a7ce8
        } = _0xfeb8bd.unit.game.config;
        const {
          center: _0x4c6ea9
        } = _0xfeb8bd.unit.game.space;
        const {
          radius: _0x350bc6
        } = _0xfeb8bd.unit.game.border;
        const _0x2f67d3 = _0xfeb8bd.unit.at.distance(_0x4c6ea9);
        const _0x53419b = _0x350bc6 - _0x2f67d3;
        if (_0xfeb8bd.baseDistance < _0x1a7ce8 / 4 && _0xfeb8bd.unit.tail.length > _0x1a7ce8 * 2 && _0x53419b > 10) {
          console.log("near back");
          return "back";
        }
        const _0x3f4a4b = 25;
        const _0x5acbaf = _0x3f4a4b / 2;
        const _0x16495a = _0x5acbaf * _0x5acbaf;
        if (_0xfeb8bd.unit.at.distance2(_0xfeb8bd.target) < _0x16495a && _0x53419b > _0x3f4a4b) {
          return;
        }
        let _0x44332a = 0;
        for (let _0x4212ea = 1, _0x4cfde4 = _0xfeb8bd.unit.tail.simplyline.length; _0x4212ea < _0x4cfde4; _0x4212ea++) {
          const _0x50f470 = _0xfeb8bd.unit.tail.simplyline[_0x4212ea - 1];
          const _0x149ed7 = _0xfeb8bd.unit.tail.simplyline[_0x4212ea];
          _0x44332a += (_0x50f470.x + _0x149ed7.x) * (_0x149ed7.y - _0x50f470.y);
        }
        let _0x2757c7 = _0xfeb8bd.unit.tail.simplyline[_0xfeb8bd.unit.tail.simplyline.length - 1];
        let _0x12fb11 = _0xfeb8bd.baseNearestPoint;
        _0x44332a += (_0x2757c7.x + _0x12fb11.x) * (_0x12fb11.y - _0x2757c7.y);
        _0x2757c7 = _0xfeb8bd.baseNearestPoint;
        _0x12fb11 = _0xfeb8bd.unit.tail.simplyline[0];
        _0x44332a += (_0x2757c7.x + _0x12fb11.x) * (_0x12fb11.y - _0x2757c7.y);
        const _0x3e2913 = Math.sign(_0x44332a);
        _0x44332a = Math.abs(_0x44332a / 2);
        _0xfeb8bd.capSquare = _0x44332a;
        const {
          def: _0x4f6428,
          greed: _0x532488,
          safety: _0x23753f
        } = _0xfeb8bd;
        const _0x4aaf38 = Math.PI * 2 * _0xfeb8bd.unit.vrange * _0x532488;
        const _0x1a8288 = _0xfeb8bd.unit.tail.length / _0x4aaf38;
        const _0x1d4d70 = Math.min(_0xfeb8bd.unit.base.area, Math.PI * _0xfeb8bd.unit.vrange * _0xfeb8bd.unit.vrange) * _0x532488;
        const _0x2f7c69 = _0xfeb8bd.capSquare / _0x1d4d70;
        const _0x169c30 = _0xfeb8bd.unit.vrange * _0x4e739f(3, 0.7, _0x23753f);
        const _0x33e93c = _0xfeb8bd.unit.at.distance(_0xfeb8bd.unit.tail.polyline.start) / _0x169c30;
        const _0x37d6b6 = _0xfeb8bd.unitToTrackDistances.reduce((_0x55b2fb, _0x50b32c) => Math.min(_0x50b32c.trackDistance, _0x55b2fb), Infinity) * 0.8 * _0x4f6428;
        const _0x58966c = _0xfeb8bd.baseDistance / _0x37d6b6;
        const _0x194df3 = Math.max(_0x1a8288, _0x2f7c69, _0x33e93c, _0x58966c);
        {
          _0xfeb8bd.factors = "l " + _0x1a8288.toFixed(1) + " sq " + _0x2f7c69.toFixed(1) + " sf " + _0x33e93c.toFixed(1) + " d " + _0x58966c.toFixed(1);
        }
        if (_0x194df3 > 1) {
          return "back";
        }
        const _0x2861cc = _0xfeb8bd.unit.vrange * _0x532488;
        _0xfeb8bd.distanceDanger * 0.6 * _0x4f6428;
        const _0x4c1d79 = _0x2861cc;
        const _0x29394f = _0x4c1d79 * 0.8;
        const _0x1901a7 = _0xfeb8bd.target.clone().sub(_0xfeb8bd.unit.at);
        let _0x9c7150;
        if (_0xfeb8bd.baseDistance > _0x4c1d79 || _0x194df3 > 0.75) {
          _0xfeb8bd.aspect = "приближение";
          _0x9c7150 = _0xfeb8bd.baseNearestPointNormal.clone().scale(_0x3f4a4b).rotate((Math.PI / 2 + Math.PI / 4) * _0x3e2913);
        } else if (_0xfeb8bd.baseDistance < _0x29394f) {
          _0xfeb8bd.aspect = "отдаление";
          let _0x40a7cf = Math.PI / 4;
          const _0x2b8068 = _0xfeb8bd.unit.tail.length / _0x29394f;
          if (_0x2b8068 < 1) {
            _0xfeb8bd.aspect = "отстрел";
            _0x40a7cf = _0x4e739f(Math.PI / 2 * _0x532488, 0, _0x2b8068);
          }
          _0x9c7150 = _0xfeb8bd.baseNearestPointNormal.clone().scale(_0x3f4a4b).rotate((Math.PI / 2 - _0x40a7cf) * _0x3e2913);
        } else {
          _0xfeb8bd.aspect = "проход";
          _0x9c7150 = _0xfeb8bd.baseNearestPointNormal.clone().scale(_0x3f4a4b).rotate(Math.PI / 2 * _0x3e2913);
          _0xfeb8bd.smoothness = 1 + (1 - Math.min(1, _0xfeb8bd.maxDanger)) * 3;
        }
        _0xfeb8bd.smoothness = 1 + (1 - Math.min(1, _0xfeb8bd.maxDanger)) * 1;
        _0xfeb8bd.target = _0xfeb8bd.unit.at.clone().add(_0x9c7150);
        if (_0xfeb8bd.target.distance(_0x4c6ea9) > _0x350bc6 + _0x3f4a4b * 0.75) {
          const _0x581ca4 = _0xfeb8bd.unit.at.clone().sub(_0x4c6ea9);
          const _0x4d82f7 = _0x581ca4.angle(_0x1901a7);
          const _0x127aaf = _0x2f67d3;
          const _0x1284ab = (_0x350bc6 * _0x350bc6 - _0x3f4a4b * _0x3f4a4b + _0x127aaf * _0x127aaf) / (_0x127aaf * 2);
          const _0x19adf0 = Math.sqrt(_0x350bc6 * _0x350bc6 - _0x1284ab * _0x1284ab);
          const _0x35f476 = _0xfeb8bd.unit.at.clone().sub(_0x4c6ea9).normalize();
          const _0x2f8b08 = _0x4c6ea9.clone().add(_0x35f476.clone().scale(_0x1284ab));
          _0x9c7150 = _0x35f476.clone().rotate(Math.PI / 2 * _0x4d82f7).rotate(Math.PI / 8 * -_0x4d82f7).scale(_0x19adf0);
          _0xfeb8bd.target = _0x2f8b08.clone().add(_0x9c7150);
        } else if (_0xfeb8bd.target.distance(_0x4c6ea9) > _0x350bc6 && _0xfeb8bd.target.distance(_0x4c6ea9) < _0x350bc6 + _0x3f4a4b * 0.5) ;
      }
    },
    back: {
      enter: function (_0x35f64c, _0x2f615d) {},
      update: function (_0x4d4e8d, _0x3b7470) {
        if (_0x4d4e8d.unit.in === _0x4d4e8d.unit.base) {
          return "idle";
        }
        _0x4d4e8d.smoothness = _0x4e739f(1, Math.max(1, Math.max(1, Math.min(_0x4d4e8d.def, _0x4d4e8d.greed) * 4)), Math.max(1, _0x4d4e8d.maxDanger));
        const _0x17ba52 = _0x4d4e8d.unit.game.border.radius - _0x4d4e8d.unit.at.distance(_0x4d4e8d.unit.game.space.center);
        if (_0x17ba52 < 20) {
          _0x4d4e8d.smoothness = 1;
        }
        _0x4d4e8d.target = _0x4d4e8d.baseNearestPoint;
      }
    },
    attack: {
      enter: _0x477378 => {
        console.log("attack by " + _0x477378.unit.name + " aggro " + _0x477378.aggro);
      },
      update: function (_0x3084dc) {
        let _0x4f657a = _0x3084dc.unit.game.nearestPlayer(_0x3084dc.unit);
        if (!_0x4f657a) {
          return "idle";
        }
        const {
          simplyline: _0x3e0f8f
        } = _0x4f657a.tail;
        if (!_0x3e0f8f.length) {
          return "idle";
        }
        if (_0x4f657a.tail.length < _0x3084dc.unit.game.config.botAttackTrackLength && _0x4fe996(_0x3084dc)) {
          return "idle";
        }
        let _0x3d5649 = 0;
        let _0x24d65d = Infinity;
        _0x3e0f8f.forEach((_0x496a43, _0x4e6f08) => {
          const _0x228dd5 = _0x3084dc.unit.at.distance2(_0x496a43);
          if (_0x228dd5 < _0x24d65d) {
            _0x24d65d = _0x228dd5;
            _0x3d5649 = _0x4e6f08;
          }
        });
        _0x3084dc.target = _0x3e0f8f[_0x3d5649];
      }
    }
  };
  var _0x493453 = Object.defineProperty;
  var _0xc0d817 = (_0x10db9b, _0x181955, _0x1bd7f4) => {
    if (typeof _0x181955 !== "symbol") {
      _0x181955 += "";
    }
    if (_0x181955 in _0x10db9b) {
      return _0x493453(_0x10db9b, _0x181955, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x1bd7f4
      });
    }
    return _0x10db9b[_0x181955] = _0x1bd7f4;
  };
  class _0x15067b {
    constructor(_0xb2f7a7) {
      this.unit = _0xb2f7a7;
    }
    direction() {
      return 0;
    }
  }
  class _0x2185ea extends _0x15067b {
    constructor(_0x1db5fe, _0x51ea47) {
      super(_0x1db5fe);
      this.local = _0x51ea47;
    }
    direction() {
      return this.unit.game.directions[this.unit.id];
    }
  }
  class _0x55140 extends _0x15067b {
    constructor(_0xe7e084, _0x45d8cb, _0x1a0f24) {
      super(_0xe7e084);
      _0xc0d817(this, "capSquare");
      _0xc0d817(this, "aspect");
      _0xc0d817(this, "baseNearestPoint");
      _0xc0d817(this, "factors");
      _0xc0d817(this, "level", 0);
      _0xc0d817(this, "target");
      this.rng = _0x32f7f2(_0x1a0f24);
      this.aggro = 0;
      this.greed = 0;
      this.safety = 0;
      this.def = 0;
      this.jitter = (this.rng() * 2 - 1) * 0.1;
      this.type = _0x45d8cb;
      this.targets = [];
      this.smoothness = 1;
      this.maxDanger = 0;
      this.unitDanger = null;
      this.ai = new _0x5d0f1a(_0x536a66, "idle", this);
    }
    update() {
      let _0x3110d6 = 0;
      let _0x321c95 = null;
      let _0x2725a7 = null;
      if (this.unit.in !== this.unit.base) {
        _0x3110d6 = Infinity;
        let _0x1bf4d1 = 0;
        const {
          simplify: _0x51dae1
        } = this.unit.base.polygon;
        _0x51dae1.forEach((_0x16018a, _0x2449a2) => {
          const _0xaec17e = _0x16018a.distance2(this.unit.at);
          if (_0xaec17e < _0x3110d6) {
            _0x3110d6 = _0xaec17e;
            _0x321c95 = _0x16018a;
            _0x1bf4d1 = _0x2449a2;
          }
        });
        const _0x291cf7 = _0x51dae1[_0x1bf4d1 > 0 ? _0x1bf4d1 - 1 : _0x51dae1.length - 1];
        const _0x24848a = _0x51dae1[_0x1bf4d1 < _0x51dae1.length - 1 ? _0x1bf4d1 + 1 : 0];
        _0x2725a7 = _0x24848a.clone().sub(_0x291cf7).normalize();
      }
      _0x3110d6 = Math.sqrt(_0x3110d6);
      this.baseDistance = _0x3110d6;
      this.baseNearestPoint = _0x321c95;
      this.baseNearestPointTangent = _0x2725a7;
      this.baseNearestPointNormal = _0x2725a7 && _0x2725a7.clone().rotate(-Math.PI / 2);
      this.unitToTrackDistances = [];
      let _0x3c08cc = 0;
      let _0x1e9067 = 0;
      let _0x54444b = null;
      let _0x4d9845 = this.unit;
      if (_0x4d9845.in !== _0x4d9845.base) {
        const _0x5124d0 = _0x4d9845.game.nearestPlayer(_0x4d9845);
        _0x4d9845.game.units.forEach(_0x2ecece => {
          const _0x25dd8a = _0x5124d0 === _0x2ecece && _0x4d9845.at.distance(_0x2ecece.at) > _0x4d9845.vrange;
          if (_0x2ecece !== _0x4d9845 && !_0x25dd8a) {
            let _0x1b0c9c = Infinity;
            let _0x28f9fa = null;
            _0x4d9845.tail.simplyline.forEach(_0x4b88aa => {
              const _0x20b239 = _0x4b88aa.distance2(_0x2ecece.at);
              if (_0x20b239 < _0x1b0c9c) {
                _0x1b0c9c = _0x20b239;
                _0x28f9fa = _0x4b88aa;
              }
            });
            _0x1b0c9c = Math.sqrt(_0x1b0c9c);
            const _0xe2eaef = _0x4d9845.baseDistance / _0x1b0c9c;
            this.unitToTrackDistances.push({
              unit: _0x2ecece,
              trackDistance: _0x1b0c9c,
              trackPoint: _0x28f9fa,
              danger: _0xe2eaef
            });
            if (_0xe2eaef > _0x3c08cc) {
              _0x54444b = _0x2ecece;
              _0x1e9067 = _0x1b0c9c;
              _0x3c08cc = _0xe2eaef;
            }
          }
        });
      }
      this.unitDanger = _0x54444b;
      this.distanceDanger = _0x1e9067;
      this.maxDanger = _0x3c08cc;
      this.smoothness = 1;
      if (this.rng() < 0.005) {
        this.ai.state = "idle";
      }
      this.ai.update();
      this.updateLevel();
    }
    updateLevel() {
      const _0x249436 = Math.min(1, Math.max(0, this.level + this.jitter));
      let {
        botAggroMin: _0x4f6bbb,
        botAggroMax: _0x394372,
        botDefMin: _0x27bd51,
        botDefMax: _0x20ddbf,
        botGreedMin: _0x1d9fc9,
        botGreedMax: _0x48d0e0,
        botSafetyMin: _0x7910a9,
        botSafetyMax: _0x44b518
      } = this.unit.game.config;
      switch (this.type) {
        case 1:
          _0x4f6bbb *= 1.25;
          _0x394372 *= 1.25;
          break;
        case 2:
          _0x1d9fc9 *= 2;
          _0x48d0e0 *= 1.1;
          _0x7910a9 *= 0.75;
          _0x44b518 *= 0.75;
          break;
        case 3:
          _0x4f6bbb *= 0.75;
          _0x394372 *= 0.75;
          _0x1d9fc9 *= 4;
          _0x48d0e0 *= 1.1;
          _0x7910a9 *= 0.5;
          _0x44b518 *= 0.5;
          _0x27bd51 *= 2;
          _0x20ddbf *= 2;
          break;
      }
      this.aggro = _0x4e739f(_0x4f6bbb, _0x394372, _0x249436);
      this.greed = _0x4e739f(_0x1d9fc9, _0x48d0e0, _0x249436);
      this.safety = _0x4e739f(_0x7910a9, _0x44b518, _0x249436);
      this.def = _0x4e739f(_0x27bd51, _0x20ddbf, _0x249436);
    }
    direction() {
      this.update();
      let _0x27efc1 = this.target ? this.target.clone().sub(this.unit.at).toDirection() : this.unit.direction;
      return _0x27efc1;
    }
    aggroBotOnLongPlayerTail() {}
  }
  var _0x33f750 = Object.defineProperty;
  var _0x4f4c9a = (_0x512dec, _0x117869, _0x334df3) => {
    if (typeof _0x117869 !== "symbol") {
      _0x117869 += "";
    }
    if (_0x117869 in _0x512dec) {
      return _0x33f750(_0x512dec, _0x117869, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x334df3
      });
    }
    return _0x512dec[_0x117869] = _0x334df3;
  };
  class _0x3eada8 {
    constructor(_0x5d8f60, _0x530ac9, _0x2ba9a5, _0x6d155f, _0x5db685, _0x34774b) {
      _0x4f4c9a(this, "killer");
      _0x4f4c9a(this, "achievements");
      _0x4f4c9a(this, "death");
      _0x4f4c9a(this, "id");
      _0x4f4c9a(this, "type");
      _0x4f4c9a(this, "vertice");
      _0x4f4c9a(this, "direction");
      _0x4f4c9a(this, "director");
      _0x4f4c9a(this, "autopilotDirector");
      _0x4f4c9a(this, "movement", 0);
      _0x4f4c9a(this, "isPlayer", false);
      _0x4f4c9a(this, "_target");
      _0x4f4c9a(this, "realSpeedRatio", 1);
      this.game = _0x5d8f60;
      this.name = _0x530ac9;
      this.at = _0x2ba9a5;
      this.extrapolated = {
        at: null,
        facing: null,
        direction: null
      };
      this.base = new _0x57568a(this, _0x6d155f);
      this.tail = new _0x396995(this);
      this.lastArea = this.base.area;
      this.in = this.base;
      this.respawn = false;
      this.statistics = {
        kills: 0
      };
      if (!_0x5db685 && this.game.skinManager) {
        _0x5db685 = this.game.skinManager.get();
      }
      if (_0x5db685) {
        this.skin = _0x5db685;
        _0x5db685.user = this;
      }
      this.bornTime = _0x493b69();
      this.cities = [];
      this.labels = [];
      this.percent = 0;
      this.bestPercent = 0;
      this.scale = 0;
      this.vrange = 1;
      this.direction = 0;
      this.scores = {
        accumulator: 0,
        kills: 0
      };
      this.schemes = _0x34774b && _0x34774b.getSchemes(this);
      this.baseDistance = 0;
      this.baseNearestPoint = null;
      this.baseNearestPointTangent = null;
      this.baseNearestPointNormal = null;
    }
    set target(_0x1770dd) {
      if (!_0x1770dd) {
        debugger;
      }
      this._target = _0x1770dd;
    }
    get target() {
      return this._target;
    }
    rank() {
      return this.game.ranks.indexOf(this) + 1;
    }
    extrapolateAt(_0x4d0bfc, _0x5900f3) {
      if (this.death) {
        return this.at;
      }
      let _0x4efef2 = this.nextMovement(_0x4d0bfc, _0x5900f3);
      let _0x48d491 = this.nextSteps(this.getNextPosition(_0x4d0bfc, _0x4efef2));
      let _0x4dbb9b = _0x48d491 ? _0x48d491[_0x48d491.length - 1] : this.at;
      return _0x4dbb9b;
    }
    get extrapolatedAt() {
      return this.extrapolated.at || this.at;
    }
    set extrapolatedAt(_0x7636cc) {
      this.extrapolated.at = _0x7636cc;
    }
    get extrapolatedFacing() {
      return this.extrapolated.facing || _0x320aa6.fromDirection(this.movement);
    }
    set extrapolatedFacing(_0x178cf5) {
      this.extrapolated.facing = _0x178cf5;
    }
    get extrapolatedDirection() {
      return this.extrapolated.direction || _0x320aa6.fromDirection(this.direction);
    }
    set extrapolatedDirection(_0x38404c) {
      this.extrapolated.direction = _0x38404c;
    }
    setSkin(_0x23f986) {
      this.skin = _0x23f986;
      if (!_0x23f986) {
        debugger;
      }
      _0x23f986.user = this;
    }
    think() {
      this.direction = this.director.direction();
      if (this.direction == undefined) {
        debugger;
      }
    }
    addLabel(_0x532d07) {
      if (!_0x532d07.unit) {
        _0x532d07.unit = this;
      }
      this.labels.push(_0x532d07);
    }
    maxDirectionChange(_0x1a22ab) {
      const _0x5d0dd0 = this.game.config.maxAnglePerSecond * _0x1a22ab / _0x4e59a9 / 1000;
      return _0x5d0dd0;
    }
    nextMovement(_0x2256fa, _0x139228) {
      let _0x5881b5 = (_0x139228 - this.movement + _0x57ae42 * 1.5) % _0x57ae42 - _0x57ae42 * 0.5;
      let _0x1a3546 = Math.abs(_0x5881b5);
      let _0x106d5a = _0x2256fa * this.game.config.fullTurnsPerSecond / 1000 * _0x57ae42;
      if (_0x1a3546 > _0x106d5a) {
        _0x5881b5 = _0x106d5a * Math.sign(_0x5881b5);
      }
      let _0x226688 = Math.round(this.movement + _0x5881b5 + _0x57ae42) % _0x57ae42;
      return _0x226688;
    }
    move(_0x2906ba) {
      if (this.death) {
        return;
      }
      let _0x232c34 = this.game;
      this.movement = this.nextMovement(_0x2906ba, this.direction);
      let _0x58c86c = this.nextSteps(this.getNextPosition(_0x2906ba, this.movement));
      if (this.at.distance(_0x58c86c[_0x58c86c.length - 1]) < 1) {
        return;
      }
      for (let _0x4a1d49 of _0x58c86c) {
        if (this.death) {
          break;
        }
        if (this.game.generateParticles && this.in && this.in !== this.base) {
          let _0x2ae406 = _0x5c8195.nom(this, {
            start: this.at,
            end: _0x4a1d49
          }, _0x232c34.config.trackWidth);
          this.game.particles.push(_0x2ae406);
        }
        this.goTo(_0x4a1d49);
      }
      if (this.game.units.indexOf(this) % 100 == this.game.tic % 100) {
        this.recoverTail();
      }
    }
    nextSteps(_0x3d4c05) {
      let _0x506bbf = this.game.adjustForBorderNewer({
        start: this.at.clone(),
        end: _0x3d4c05.clone()
      });
      let _0x7551ba = _0x506bbf[_0x506bbf.length - 1];
      let _0x48e34b = this.at.distance(_0x3d4c05);
      let _0x3a6ad8 = this.at.distance(_0x7551ba);
      this.realSpeedRatio = _0x3a6ad8 / _0x48e34b;
      for (let _0x457ed8 of this.game.units) {
        if (_0x457ed8 != this && _0x457ed8.realSpeedRatio < 1 && _0x4f214b(_0x457ed8.at, {
          start: this.at,
          end: _0x7551ba
        }, 0.1)) {
          _0x457ed8.kill(this, _0x25cec7);
        }
      }
      return _0x506bbf;
    }
    takeClosestIntersection(_0x27c423) {
      if (_0x27c423.length < 0) {
        debugger;
      }
      let _0x478700 = _0x52ee1f(_0x27c423, (_0x3417f3, _0x2fa28c) => {
        let _0x33bb17 = _0x3417f3.distance - _0x2fa28c.distance;
        if (_0x10eb6c(_0x33bb17)) {
          let _0x19a061 = _0x3417f3.segment.shape.owner;
          let _0x361645 = _0x2fa28c.segment.shape.owner;
          if (_0x19a061 instanceof _0x81a349) {
            return 1;
          }
          if (_0x361645 instanceof _0x81a349) {
            return -1;
          }
          if (_0x19a061.isTrack) {
            return -1;
          }
          if (_0x361645.isTrack) {
            return 1;
          }
          if (_0x19a061.unit == this) {
            return 1;
          }
          if (_0x361645.unit == this) {
            return -1;
          }
        }
        return _0x33bb17;
      });
      _0x27c423.splice(_0x478700.index, 1);
      return _0x478700.element;
    }
    goTo(_0x55e5c4) {
      const _0x3e85e0 = this.game.space.intersections({
        start: this.at,
        end: _0x55e5c4
      });
      if (_0x3e85e0.length > 100) {
        console.error("Too many intersections seed " + this.game.seed + " tic " + this.game.tic + " ");
      }
      for (let _0x445557 of _0x3e85e0) {
        if (!(_0x445557.segment.shape.owner instanceof _0x81a349)) {
          _0x445557.vertice = _0x445557.segment.split(_0x445557.point);
        }
      }
      while (_0x3e85e0.length > 0 && !this.death) {
        let _0x241ea7 = this.takeClosestIntersection(_0x3e85e0);
        let _0x4c444b = _0x241ea7.segment.shape;
        if (_0x241ea7.vertice && _0x241ea7.vertice.segments.length == 0) {
          return this.goTo(_0x55e5c4);
        }
        if (!this.death && _0x4c444b && !(_0x4c444b.owner instanceof _0x81a349) && !_0x4c444b.owner.unit.death) {
          if (_0x4c444b.owner instanceof _0x57568a) {
            this.leaveTo(_0x241ea7.vertice);
          }
          _0x4c444b.owner.touchBy(this, _0x241ea7);
        }
      }
      this.leaveTo(_0x55e5c4);
    }
    leaveTo(_0x5d4317) {
      if (!_0x5d4317) {
        debugger;
      }
      if (_0x5d4317 == this.vertice) {
        return;
      }
      let [_0x33733b, _0x2b4812] = _0x5d4317 instanceof _0x320aa6 ? [_0x5d4317, null] : [_0x5d4317.at, _0x5d4317];
      if (this.vertice && this.at.equal(_0x33733b)) {
        if (_0x2b4812) {
          _0x2b4812 = this.vertice.absorb(_0x2b4812);
        } else {
          _0x2b4812 = this.vertice;
        }
      } else if (this.vertice) {
        let _0x5a3fe5 = _0x320aa6.lerp(this.at, _0x33733b, 0.5);
        let _0x50172b = _0x57568a.havingVertice(this.vertice);
        let _0x4ab841 = null;
        if (_0x50172b.length > 0) {
          let _0x278895 = _0x50172b.map(_0x5efc85 => ({
            base: _0x5efc85,
            inside: _0x5efc85.polygon.inside(_0x5a3fe5)
          }));
          let _0x3627b7 = false;
          if (this.in) {
            let _0x468249 = _0x278895.find(_0x348434 => _0x348434.base == this.in);
            if (_0x468249 && _0x468249.inside) {
              _0x3627b7 = true;
            }
          }
          if (_0x3627b7 && _0x5d4317 instanceof _0x405116 && !_0x10eb6c(_0x5d4317.at.distance2(_0x5a3fe5)) && !_0x57568a.havingVertice(_0x5d4317).includes(this.base)) {
            _0x3627b7 = false;
          }
          if (!_0x3627b7) {
            this.leaveBase();
            let _0x386040 = _0x278895.find(_0x489e29 => _0x489e29.inside == 2);
            if (_0x386040 && _0x386040.base instanceof _0x57568a) {
              _0x4ab841 = _0x386040.base;
            }
          }
        }
        if (this.in != this.base) {
          if (!this.tail.hasSegments()) {
            this.tail.add(this.vertice);
          }
          _0x2b4812 = this.tail.add(_0x2b4812 || new _0x405116(_0x33733b));
        }
        if (_0x4ab841) {
          if (_0x4ab841 == this.base) {
            this.handleComeback();
          } else {
            this.enterBase(_0x4ab841);
          }
        }
      }
      this.at = _0x33733b;
      this.vertice = _0x2b4812;
    }
    leaveBase() {
      if (this.in == this.base) {
        if (this.schemes) {
          this.schemes.out();
        }
        if (this.achievements) {
          this.achievements.onOut();
        }
        this.in = null;
      }
    }
    enterBase(_0xc8d795) {
      this.in = _0xc8d795;
      this.tail.intersect(_0xc8d795, true);
    }
    handleComeback() {
      if (this.death) {
        return;
      }
      let _0x5e3b76 = this.base.addCapturedArea(this.tail.polyline);
      this.game.units.filter(_0x522a00 => _0x522a00 !== this).forEach(_0x23f5de => {
        if (!_0x23f5de.death) {
          let _0x143ade = _0x4258a5(_0x5e3b76, _0x23f5de.at);
          if (_0x143ade) {
            _0x23f5de.kill(this, _0x5e1b05);
            return;
          }
          if (_0x23f5de.tail.polyline.start && _0x4258a5(_0x5e3b76, _0x23f5de.tail.polyline.start.at)) {
            _0x23f5de.kill(this, _0x267d9f);
            return;
          }
          if (_0x23f5de.cities && _0x23f5de.cities[0] && _0x4258a5(_0x5e3b76, _0x23f5de.cities[0].at)) {
            _0x23f5de.kill(this, _0x580f4f);
            return;
          }
        }
      });
      const _0x286641 = [];
      let _0x2f88dc = this.tail.baseIntersections.filter(_0x3842ca => !_0x3842ca.base.unit.death);
      for (let _0x44e15f = 0; _0x44e15f < _0x2f88dc.length; _0x44e15f++) {
        let _0x580d12 = _0x2f88dc[_0x44e15f];
        if (!_0x580d12.exit) {
          _0x2f88dc.splice(_0x44e15f, 1);
          _0x44e15f--;
          continue;
        }
        let _0x515145 = !_0x580d12.exit.segments.some(_0xd2d8f9 => _0xd2d8f9.shape == _0x580d12.base.polygon);
        if (_0x515145) {
          let _0x4c47c2 = _0x2f88dc[_0x44e15f].base;
          let _0xf243b5 = _0x44e15f + 1;
          while (_0xf243b5 < _0x2f88dc.length && (_0x2f88dc[_0xf243b5].base != _0x4c47c2 || !_0x2f88dc[_0xf243b5].exit.segments.some(_0x270a93 => _0x270a93.shape == _0x4c47c2.polygon))) {
            _0xf243b5++;
          }
          if (_0xf243b5 < _0x2f88dc.length) {
            _0x2f88dc[_0x44e15f].exit = _0x2f88dc[_0xf243b5].exit;
            _0x2f88dc.splice(_0x44e15f + 1, _0xf243b5 - _0x44e15f);
          }
        }
      }
      for (let _0x44297c of _0x2f88dc) {
        this.removeCapturedArea(_0x44297c);
      }
      const _0x5b6419 = (this.base.area - this.lastArea) / this.game.area;
      if (this.schemes) {
        this.schemes.comeback({
          increment: _0x5b6419,
          rise: _0x5e3b76,
          victims: _0x286641,
          game: this
        });
      }
      this.in = this.base;
      this.tail.remove();
      this.game.events.emit({
        event: "returnToBase",
        unit: this
      });
    }
    kill(_0x1b6ff7, _0x1f0781) {
      if (this.death) {
        return;
      }
      this.death = true;
      this.deathTic = this.game.tic;
      if (this.skin) {
        this.skin.release();
      }
      if (_0x1f0781 !== _0x705a43) {
        _0x16ae18(this, null, this.tail.polyline.segments);
        _0x16ae18(this, null, this.base.polygon.segments);
      }
      this.tail.remove();
      this.base.remove();
      this.game.units.splice(this.game.units.indexOf(this), 1);
      if (this.isPlayer) {
        this.game.players.splice(this.game.players.indexOf(this), 1);
      }
      this.killer = _0x1b6ff7;
      if (_0x1b6ff7) {
        _0x1b6ff7.scores.kills = this.scores.kills + this.scores.accumulator;
        if (_0x1b6ff7.schemes) {
          _0x1b6ff7.schemes.kill(this, _0x1f0781);
        }
        if (_0x1b6ff7 && _0x1b6ff7.achievements) {
          _0x1b6ff7.achievements.onKill(this);
        }
        _0x1b6ff7.statistics.kills++;
      }
      for (let _0x6d76bd of this.game.units) {
        if (_0x6d76bd.in == this.base) {
          _0x6d76bd.in = null;
        }
      }
      this.game.onKill(this, _0x1f0781);
    }
    removeCapturedArea({
      base: _0x3b1772,
      enter: _0x49fda2,
      exit: _0x2b8c92
    }) {
      if (_0x3b1772.unit.death) {
        return;
      }
      if (!_0x2b8c92) {
        debugger;
        return;
      }
      _0x49fda2 = _0x49fda2.absorber();
      _0x2b8c92 = _0x2b8c92.absorber();
      let _0x39b757 = this.tail.polyline.segments.findIndex(_0x3d7047 => _0x3d7047.start == _0x49fda2);
      let _0x39495a = this.tail.polyline.segments.findIndex(_0x555ff7 => _0x555ff7.end == _0x2b8c92);
      const _0x524d01 = this.tail.polyline.segments.slice(_0x39b757, _0x39495a + 1);
      _0x3b1772.removeCapturedArea([_0x524d01[0].start, ..._0x524d01.map(_0x583f8b => _0x583f8b.end)]);
    }
    get speed() {
      return this.game.config.unitSpeed;
    }
    getNextPosition(_0x135755, _0x274a66) {
      const {
        unitSpeed: _0x161f34
      } = this.game.config;
      const _0x2a5476 = _0x320aa6.fromDirection(_0x274a66);
      _0x2a5476.scale(_0x161f34 * _0x135755 / 1000);
      if (isNaN(_0x2a5476.x)) {
        debugger;
      }
      return this.at.clone().add(_0x2a5476);
    }
    turnLeft() {
      return (this.movement + _0x57ae42 / 4) % _0x57ae42;
    }
    addKillLabel(_0x15e812) {
      if (!this.skin) {
        return;
      }
      this.addLabel({
        text: _0x15e812,
        color: this.skin.colors.nick,
        unit: this,
        time: 1000,
        fading: true
      });
    }
    updateScores(_0x1f1d88) {
      const {
        maxScale: _0x25bb5e,
        minScale: _0x2ada4f,
        scaleStep: _0xfcb02e
      } = this.game.config;
      this.lastArea = this.base.area;
      if (this.achievements) {
        this.achievements.update(this, _0x1f1d88, this.game);
      }
      if (this.in !== this.base) {
        this.scores.accumulator += this.percent * 100 * _0x1f1d88 / 1000;
      }
      const _0x22cd27 = this.base.area / this.game.area;
      this.percent = _0x22cd27;
      this.bestPercent = Math.max(this.bestPercent, _0x22cd27);
      let _0x5b342c = _0x4e739f(_0x25bb5e, _0x2ada4f, _0x342080(~~(_0x22cd27 * (this.game.config.scaleAcceleration || 1) / _0xfcb02e) * _0xfcb02e));
      if (!this.scale) {
        this.scale = _0x5b342c;
      } else if (this.scale != _0x5b342c) {
        this.scale = _0x4e739f(this.scale, _0x5b342c, 0.2);
      }
      this.vrange = Math.sqrt(2455780) / 2 / this.scale * 0.8;
      if (this.schemes) {
        this.schemes.update(_0x1f1d88);
      }
      if (this.labels.length) {
        let _0x1dd1b3 = new _0x320aa6(0, -35);
        const _0x5d0a18 = new _0x320aa6(0, -10);
        const _0x159a5b = new _0x320aa6(0, -10);
        this.labels.forEach(_0x3272d4 => {
          this.game.labels.push(new _0x42278e(_0x3272d4.text, _0x3272d4.color, _0x3272d4.unit, _0x1dd1b3, _0x5d0a18, _0x3272d4.time, _0x3272d4.fading));
          _0x1dd1b3 = _0x1dd1b3.clone().add(_0x159a5b);
        });
        this.labels = [];
      }
    }
    recoverTail() {
      if (this && this.in == this.base && !this.base.polygon.inside(this.at)) {
        console.log(this);
        console.log("tic", this.game.tic);
        debugger;
        this.base.polygon.inside(this.at);
        let _0x3135d7 = this.base.polygon.segments.reduce((_0x1854aa, _0x40bdcf) => _0x1854aa.start.at.distance2(this.at) < _0x40bdcf.start.at.distance2(this.at) ? _0x1854aa : _0x40bdcf);
        this.at = _0x3135d7.start.at;
        this.tail.remove();
        {
          this.game.alert("game recovered");
          console.error("Recovering tail, cycle: " + this.game.tic);
          this.tailRecovered = true;
        }
      }
    }
    isLeader() {
      return this == this.game.ranks[0];
    }
  }
  class _0x42278e {
    constructor(_0x6a73d0, _0x44422f, _0x4fb8ed, _0x2a3ca4 = new _0x320aa6(0, 0), _0x342d0b = new _0x320aa6(0, -50), _0x58fcb5 = 2000, _0x2cbe41 = true) {
      this.text = _0x6a73d0;
      this.color = _0x44422f || "#000000";
      this.unit = _0x4fb8ed;
      this.position = _0x2a3ca4;
      this.velocity = _0x342d0b;
      this.acceleration = _0x342d0b.clone().scale(-2000 / _0x58fcb5);
      this.duration = _0x58fcb5;
      this.time = _0x58fcb5;
      this.fading = _0x2cbe41;
    }
    update(_0x1603e4) {
      this.time -= _0x1603e4;
      if (this.time > 0) {
        this.velocity.add(this.acceleration.clone().scale(_0x1603e4 / 1000));
        this.position.add(this.velocity.clone().scale(_0x1603e4 / 1000));
      }
    }
    draw(_0x3fdf33, _0x3e9abe, _0x228504, _0x362081) {
      const _0x5d56f6 = _0x1efcd => 1 + --_0x1efcd * _0x1efcd * _0x1efcd * _0x1efcd * _0x1efcd;
      let _0x3818b6 = Math.floor(_0x5d56f6(this.time / this.duration) * 255).toString(16);
      if (_0x3818b6.length < 2) {
        _0x3818b6 = "0" + _0x3818b6;
      }
      const _0x27af1b = this.unit ? this.unit.extrapolatedAt.clone().add(this.position) : this.position;
      const {
        devicePixelRatio: _0x30fd04
      } = window;
      const _0x48e210 = _0x362081 * 30 / _0x30fd04;
      _0x3fdf33.save();
      _0x3fdf33.fillStyle = "" + this.color + (this.fading ? _0x3818b6 : "");
      _0x3fdf33.font = "bold " + _0x48e210 + "px " + _0x3e9abe;
      _0x3fdf33.textAlign = "center";
      _0x3fdf33.textBaseline = "middle";
      _0x3fdf33.fillText(this.text, _0x27af1b.x * _0x228504, _0x27af1b.y * _0x228504);
      _0x3fdf33.restore();
    }
  }
  class _0x322294 {
    constructor(_0xefb82d, _0x582444) {
      this.pool = _0xefb82d;
      this.rng = _0x32f7f2(_0x582444);
    }
    get() {
      let _0x234816 = this.rng();
      let _0x5ea154 = this.pool[~~(_0x234816 * this.pool.length)];
      return _0x5ea154;
    }
    aviable() {
      return true;
    }
    request() {}
    release(_0x599d2d) {
      this.pool.push(..._0x599d2d);
    }
  }
  var _0x2b266c = Object.defineProperty;
  var _0x122623 = (_0x2eaa23, _0x3da552, _0x5a197a) => {
    if (typeof _0x3da552 !== "symbol") {
      _0x3da552 += "";
    }
    if (_0x3da552 in _0x2eaa23) {
      return _0x2b266c(_0x2eaa23, _0x3da552, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x5a197a
      });
    }
    return _0x2eaa23[_0x3da552] = _0x5a197a;
  };
  class _0x5d3fac {
    constructor(_0x4c00a3) {
      _0x122623(this, "tStart", {});
      _0x122623(this, "tEnd", {});
      _0x122623(this, "dif", {});
      _0x122623(this, "average", {});
      _0x122623(this, "lastFrameTime", 0);
      _0x122623(this, "averageFrameLength", 0);
      _0x122623(this, "averageFrameDivergence", 0);
      _0x122623(this, "fps", 0);
      this.now = _0x4c00a3;
    }
    start(_0x37c546) {
      this.tStart[_0x37c546] = this.now();
    }
    end(_0x4dbab0) {
      this.tEnd[_0x4dbab0] = this.now();
    }
    frame() {
      let _0x2e2a9a = this.now();
      let _0x18d249 = _0x2e2a9a - (this.lastFrameTime || _0x2e2a9a);
      this.averageFrameLength = _0x4e739f(this.averageFrameLength, _0x18d249, 0.05);
      this.fps = 1000 / this.averageFrameLength;
      let _0x12b87 = Math.abs(_0x18d249 - this.averageFrameLength);
      this.averageFrameDivergence += (_0x12b87 - this.averageFrameDivergence) * (_0x12b87 > this.averageFrameDivergence ? 0.05 : 0.02);
      for (let _0x35c386 in this.tStart) {
        this.dif[_0x35c386] = this.tEnd[_0x35c386] - this.tStart[_0x35c386] || 0;
        this.tStart[_0x35c386] = this.tEnd[_0x35c386] = 0;
        this.average[_0x35c386] = _0x4e739f(this.average[_0x35c386] || 0, this.dif[_0x35c386] || 0, 0.05);
      }
      this.lastFrameTime = _0x2e2a9a;
    }
  }
  var _0x44adb4 = Object.defineProperty;
  var _0x2ef7f5 = Object.assign;
  var _0x3e2b2d = (_0x3da134, _0x11ed23, _0x94e655) => {
    if (typeof _0x11ed23 !== "symbol") {
      _0x11ed23 += "";
    }
    if (_0x11ed23 in _0x3da134) {
      return _0x44adb4(_0x3da134, _0x11ed23, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x94e655
      });
    }
    return _0x3da134[_0x11ed23] = _0x94e655;
  };
  const _0x2e850e = 240;
  class _0x3d1e5f {
    constructor({
      config: _0x197040,
      space: _0x5c85eb,
      border: _0x69c335,
      center: _0x40a794,
      radius: _0x1379b0,
      language: _0x1eff47,
      skinManager: _0x5837d5,
      nameManager: _0x5a94d4,
      schemesManager: _0x4a3700,
      seed: _0x5044f0,
      profiler: _0x2e3e1a
    }) {
      _0x3e2b2d(this, "best");
      _0x3e2b2d(this, "over", false);
      _0x3e2b2d(this, "localPlayerId");
      _0x3e2b2d(this, "tailRecovered", false);
      _0x3e2b2d(this, "generateParticles", true);
      _0x3e2b2d(this, "renderer");
      if (!_0x4a3700) {
        _0x4a3700 = new _0x1e89e6(_0x512929);
      }
      this.rng = _0x32f7f2(_0x5044f0);
      this.profiler = _0x2e3e1a;
      this.angle = 0;
      this.time = 0;
      this.events = new _0xf760a1();
      this.language = _0x1eff47 || {};
      _0x40a794 = _0x40a794 || new _0x320aa6(_0x197040.arenaSize / 2, _0x197040.arenaSize / 2);
      _0x1379b0 = _0x1379b0 || Math.min(_0x40a794.x, _0x40a794.y) * 0.95;
      _0x69c335 = _0x69c335 || _0x3d3e32(_0x40a794, _0x197040.borderPoints, _0x1379b0);
      this.config = _0x197040;
      this.skinManager = _0x5837d5;
      this.nameManager = _0x5a94d4;
      this.space = new _0xcbc100(...(_0x5c85eb || [_0x197040.arenaSize || 2000, _0x197040.arenaSize || 2000, _0x197040.quadSize || 10]));
      this.border = new _0x81a349(this, _0x69c335, _0x40a794, _0x1379b0);
      this.units = [];
      this.ranks = [];
      this.players = [];
      this.tic = 0;
      this.seed = _0x5044f0;
      this.labels = [];
      this.area = this.border.polygon.signedArea();
      this.leaderboard = null;
      this.level = 0;
      this.bots = [0, 0, 0, 0];
      this.particles = [];
      this.metrics = [];
      this.currMetric = null;
      this.schemesManager = _0x4a3700;
    }
    actions() {
      return {
        spawn: _0x2d51b4 => this.spawnPlayer(_0x2d51b4.id, _0x2d51b4.name, _0x2d51b4.skin),
        moves: _0x3fe302 => {
          this.update(_0x3fe302.ticDuration || 50, _0x3fe302.directions);
        },
        death: _0x3c4732 => this.killById(_0x3c4732.id, _0x3c4732.reason)
      };
    }
    addPlayer(_0x19ad42) {
      this.addUnit(_0x19ad42);
      this.director = new _0x2185ea(_0x19ad42, false);
    }
    addUnit(_0x73ef69) {
      this.units.push(_0x73ef69);
      if (_0x73ef69.isPlayer) {
        this.players.push(_0x73ef69);
      }
      this.updateRanks();
    }
    getSpawnPosition(_0xbe0511, _0x22a684, _0x491dc7) {
      const {
        center: _0xc4054
      } = this.space;
      const {
        radius: _0x11c04f
      } = this.border;
      _0x491dc7 = _0x491dc7 || this.config.baseRadius;
      let _0x4a93b4 = _0xc4054;
      _0x22a684 = _0x22a684 || _0x491dc7;
      const _0x32b9e1 = 2;
      var _0x28a340 = _0x22a684 + _0x491dc7 * 2;
      var _0x49173a = _0x28a340 * _0x28a340;
      var _0xd9759f = _0x22a684 + _0x491dc7 * 2 * _0x32b9e1;
      var _0x2a52a9 = _0xd9759f * _0xd9759f;
      let _0x3e9bae;
      switch (_0xbe0511) {
        case "player":
          let _0x203ccb = this.randomPlayer();
          if (!_0x203ccb) {
            return;
          }
          _0x3e9bae = _0x4e739f(_0x491dc7 * 12, _0x491dc7 * 16, this.rng());
          _0x4a93b4 = _0x203ccb.at;
          break;
        case "bounds":
          _0x3e9bae = _0x4e739f(Math.max(0, _0x11c04f - (_0x22a684 + _0x491dc7 * 10)), Math.max(0, _0x11c04f - (_0x22a684 + _0x491dc7 * 4)), this.rng());
          break;
        case "center":
          _0x3e9bae = _0x4e739f(0, _0x11c04f / 3, this.rng());
          break;
        default:
          _0x3e9bae = _0x4e739f(0, Math.max(0, _0x11c04f - (_0x22a684 + _0x491dc7)), this.rng());
          break;
      }
      var _0x118089 = new _0x320aa6(0, _0x3e9bae).rotate(this.rng() * Math.PI * 2);
      var _0x580c88 = _0x4a93b4.clone().add(_0x118089);
      if (_0x580c88.distance(_0xc4054) > _0x11c04f - (_0x22a684 + _0x491dc7)) {
        return;
      }
      for (var _0x1f11a4 = 0; _0x1f11a4 < this.units.length; _0x1f11a4++) {
        var _0x28659b = this.units[_0x1f11a4];
        if (_0x28659b.base.polygon.inside(_0x580c88)) {
          return;
        }
        if (_0x28659b.base.polygon.simplify.some(function (_0x2658b9) {
          return _0x580c88.distance2(_0x2658b9) < _0x49173a;
        })) {
          return;
        }
        if (_0x28659b.tail.simplyline.some(function (_0x5ba281) {
          return _0x580c88.distance2(_0x5ba281) < _0x2a52a9;
        })) {
          return;
        }
      }
      return _0x580c88;
    }
    spawnBotMaybe(_0x553723, _0x3d70ab = 0.1) {
      const {
        baseCount: _0xc6dd3c,
        botsCount: _0x2f8cc2,
        initialBotMaxBaseSize: _0x4989a3
      } = this.config;
      let {
        baseRadius: _0x4b16a3,
        initialBotMinBaseSize: _0x57d572
      } = this.config;
      let _0x2a8d49 = _0x4b16a3;
      if (this.rng() > _0x3d70ab) {
        return;
      }
      if (this.tic == 1 && _0x4989a3 > 0) {
        _0x57d572 = _0x57d572 || _0x4b16a3;
        _0x4b16a3 = this.rng() * (_0x4989a3 - _0x57d572) + _0x57d572;
        _0x2a8d49 = _0x4b16a3;
      }
      if (this.units.length >= _0x2f8cc2) {
        return;
      }
      if (this.skinManager && !this.skinManager.available()) {
        console.error("Can't assign skin to bot");
      }
      const _0x1655d2 = this.getSpawnPosition(_0x553723, _0x2a8d49, _0x4b16a3);
      if (!_0x1655d2) {
        return;
      }
      const _0x523b3e = [0, 0, 0, 0];
      const _0x271019 = [[1, 2, 2, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 2, 2, 2, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0], [1, 1, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0]];
      this.units.forEach(_0x5ad1da => {
        if (!_0x5ad1da.isPlayer) {
          _0x523b3e[_0x5ad1da.type]++;
        }
      });
      this.bots = _0x2ef7f5({}, _0x523b3e);
      const _0x194558 = _0x271019[~~(this.level * (_0x271019.length - 1))];
      let _0x3a4d4e = -1;
      while (_0x523b3e[_0x194558[++_0x3a4d4e]] > 0) {
        _0x523b3e[_0x194558[_0x3a4d4e]]--;
      }
      const _0xfb7697 = _0x194558[_0x3a4d4e];
      let _0x237254 = this.nameManager ? this.nameManager.get() : Math.random().toString();
      let _0x7a8459;
      if (this.skinManager) {
        let _0x5720fa = this.skinManager.rng(2);
        if (_0x5720fa == 2) {
          let _0x4f027f = String.fromCodePoint(128512 + this.skinManager.rng(80));
          _0x237254 = _0x4f027f + _0x237254;
          _0x7a8459 = this.skinManager.get(_0x4f027f);
        } else {
          _0x7a8459 = this.skinManager.get(null, _0x5720fa == 0 ? ["colored"] : ["classic"]);
        }
      }
      const _0x1713ab = new _0x3eada8(this, _0x237254, _0x1655d2, _0x3d3e32(_0x1655d2, _0xc6dd3c, _0x4b16a3), _0x7a8459, this.schemesManager);
      _0x1713ab.director = new _0x55140(_0x1713ab, _0xfb7697, this.rng(-1));
      this.addUnit(_0x1713ab);
      this.bots[_0xfb7697]++;
      return _0x1713ab;
    }
    removeBot() {}
    findSpawnPositionSingleplayer(_0x141c5b) {
      if (this.units.length && this.units.length >= this.config.botsCount && this.config.allowKillingBotToSpawnPlayer) {
        this.removeBot();
      }
      let _0x34ea64;
      let _0x530096 = 0;
      while (!_0x34ea64) {
        if (_0x530096++ > 50) {
          _0x530096 = 0;
          this.removeBot();
        }
        _0x34ea64 = this.getSpawnPosition("random", _0x141c5b);
      }
      return _0x34ea64;
    }
    findSpawnPositionMultiplayer(_0x5c5f1f) {
      for (let _0x13c1f9 = 0; _0x13c1f9 < 100; _0x13c1f9++) {
        let _0x15ce79 = this.getSpawnPosition("random", _0x5c5f1f);
        if (_0x15ce79) {
          return _0x15ce79;
        }
      }
    }
    createUnit(_0x1d35ad, _0x57f27c, _0x440b43) {
      const _0x11550f = new _0x3eada8(this, _0x57f27c, _0x1d35ad, _0x3d3e32(_0x1d35ad, this.config.baseCount, this.config.baseRadius), _0x440b43, this.schemesManager);
      return _0x11550f;
    }
    getRespawnerSpawnRadius(_0x3f2788) {
      const _0x3fb678 = _0x3f2788 ? Math.sqrt(this.area * _0x3f2788 / Math.PI) : this.config.baseRadius;
      return _0x3fb678;
    }
    spawnPlayer(_0x29541c, _0x73fd4e, _0x64074e, _0x1194fe = true) {
      const _0x2b9bc8 = this.localPlayerId == _0x29541c;
      let _0xe1500 = _0x1194fe ? this.findSpawnPositionMultiplayer(this.config.baseRadius) : this.findSpawnPositionSingleplayer(this.config.baseRadius);
      if (!_0xe1500) {
        this.events.emit({
          event: "joinError",
          id: _0x29541c,
          name: _0x73fd4e,
          skin: _0x64074e,
          tic: this.tic,
          reason: "noPlaceToSpawn"
        });
        return;
      }
      _0x64074e = _0x46b8f1(_0x64074e) || _0x46b8f1(_0x73fd4e) || _0x64074e;
      const _0xaa7c5d = _0x2b9bc8 ? this.skinManager.getPlayerSkin(_0x64074e) : this.skinManager.get(_0x64074e);
      console.log("^GAME: " + this.tic + ": spawn player", _0x73fd4e, _0x64074e, _0x29541c, _0x2b9bc8, _0xe1500, this.rng(-1));
      const _0xb2ba46 = this.createUnit(_0xe1500, _0x73fd4e || "Player", _0xaa7c5d);
      _0xb2ba46.id = _0x29541c;
      _0xb2ba46.director = new _0x2185ea(_0xb2ba46, _0x2b9bc8);
      _0xb2ba46.autopilotDirector = new _0x55140(_0xb2ba46, "assassin", _0x32f7f2(this.rng(-1)));
      _0xb2ba46.isPlayer = true;
      this.addPlayer(_0xb2ba46);
      this.events.emit({
        event: "spawn",
        id: _0x29541c,
        name: _0x73fd4e,
        skin: _0x64074e,
        tic: this.tic
      });
      return _0xb2ba46;
    }
    adjustForBorder(_0x3fc5b4, _0x1d6c59) {
      const _0x4cf133 = 0.5 + Math.sin(this.tic * 10) * 0.2;
      const _0x4227bd = [];
      if (!this.border.isNear(_0x3fc5b4)) {
        return [_0x3fc5b4.end];
      }
      for (let _0x5ead04 = 0; _0x5ead04 < 10; _0x5ead04++) {
        let _0x5ab3ca = this.space.intersections(_0x3fc5b4);
        let _0x5c9e57 = _0x5ab3ca.filter(_0x66cb9a => _0x66cb9a.segment.shape.owner == this.border);
        if (_0x5c9e57.length == 0) {
          break;
        }
        let _0x5e0613 = _0x5c9e57[0];
        if (_0x1d6c59.in == _0x1d6c59.base) {
          let _0xbdef0d = _0x5ab3ca.find(_0x2bc31b => _0x2bc31b.segment.shape.owner == _0x1d6c59.base);
          if (_0xbdef0d) {
            _0x3fc5b4.end = _0x3fc5b4.start.clone().add(_0x320aa6.delta(_0x3fc5b4.start, _0x3fc5b4.end).slideAlong(_0x5e0613.segment.vector, 0.1));
            continue;
          }
        }
        let _0x112874 = _0x5e0613.distance;
        let _0x3bba74;
        let _0x4b01a8 = _0x5ab3ca.filter(_0x8ba76d => _0x8ba76d.distance != 0 && _0x8ba76d.distance < _0x112874);
        let _0x1d5bdd = 0;
        if (_0x4b01a8.length > 0) {
          let _0x13fc08 = _0x4b01a8[_0x4b01a8.length - 1];
          _0x1d5bdd = (_0x13fc08.distance + _0x112874) / 2;
        } else {
          let _0x5edfd4 = Math.tan(_0x5e0613.segment.vector.angle(_0x320aa6.delta(_0x3fc5b4.start, _0x3fc5b4.end)));
          let _0x8a1b1b = Math.sqrt(1 / Math.sin(_0x5edfd4) ** 2 - 1);
          _0x1d5bdd = _0x5e0613.distance - _0x4cf133 * _0x8a1b1b;
        }
        if (_0x1d5bdd > 0) {
          _0x3bba74 = _0x3fc5b4.start.clone().add(_0x320aa6.delta(_0x3fc5b4.start, _0x3fc5b4.end).setLength(_0x1d5bdd));
        }
        if (_0x3bba74) {
          _0x3fc5b4.start = _0x3bba74;
          _0x4227bd.push(_0x3bba74);
        }
        _0x3fc5b4.end = _0x3fc5b4.start.clone().add(_0x320aa6.delta(_0x3fc5b4.start, _0x3fc5b4.end).slideAlong(_0x5e0613.segment.vector, 0.05));
      }
      _0x4227bd.push(_0x3fc5b4.end);
      return _0x4227bd;
    }
    adjustForBorderNew(_0x43d075) {
      debugger;
      const _0x412dd5 = 0.01;
      const _0xe7a8ba = [];
      if (!this.border.isNear(_0x43d075)) {
        return [_0x43d075.end];
      }
      for (let _0x527c55 = 0; _0x527c55 < 10; _0x527c55++) {
        let _0x5a2724 = this.space.intersections(_0x43d075);
        let _0x361be6 = _0x5a2724.filter(_0x4f298e => _0x4f298e.segment.shape.owner == this.border);
        if (_0x361be6.length == 0) {
          break;
        }
        let _0x37adfd = _0x361be6[0];
        let _0xbc4cee = _0x37adfd.distance;
        let _0x5cafbc;
        let _0x4871ee = _0x5a2724.filter(_0x5d302d => _0x5d302d.distance != 0 && _0x5d302d.distance < _0xbc4cee);
        if (_0x4871ee.length > 0) {
          _0x5cafbc = _0x4871ee[_0x4871ee.length - 1].point;
        } else {
          let _0x50446a = _0x37adfd.distance - _0x412dd5;
          if (_0x50446a > _0x412dd5) {
            _0x5cafbc = _0x43d075.start.clone().add(_0x320aa6.delta(_0x43d075.start, _0x43d075.end).setLength(_0x50446a));
          }
        }
        if (_0x5cafbc) {
          _0x43d075.start = _0x5cafbc;
          _0xe7a8ba.push(_0x5cafbc);
        }
        const _0x151c41 = _0x37adfd.segment.vector;
        const _0x4d63da = _0x320aa6.delta(_0x43d075.start, _0x43d075.end);
        var _0x328c69 = _0x4d63da.projection(_0x151c41);
        _0x43d075.end = _0x43d075.start.clone().add(_0x328c69);
      }
      _0xe7a8ba.push(_0x43d075.end);
      return _0xe7a8ba;
    }
    adjustForBorderNewer(_0x48ad01) {
      const _0x36f9f5 = [];
      if (!this.border.isNear(_0x48ad01)) {
        return [_0x48ad01.end];
      }
      const _0x3d9b1c = 20;
      for (let _0x3e2a10 = 0; _0x3e2a10 < _0x3d9b1c; _0x3e2a10++) {
        let _0x1d1057 = this.space.intersections(_0x48ad01);
        let _0x410734 = _0x1d1057.filter(_0x5e149d => _0x5e149d.segment.shape.owner == this.border && _0x5e149d.segment.vector.cross(_0x48ad01.end.clone().sub(_0x48ad01.start)) < -_0x204775);
        if (_0x410734.length == 0) {
          break;
        }
        let _0x5ab565 = _0x410734[0];
        let _0x204cc3;
        let _0x4db33d = _0x5ab565.distance;
        if (_0x4db33d > _0x204775) {
          _0x204cc3 = _0x48ad01.start.clone().add(_0x320aa6.delta(_0x48ad01.start, _0x48ad01.end).setLength(_0x4db33d));
          if (_0x204cc3) {
            _0x48ad01.start = _0x204cc3;
            _0x36f9f5.push(_0x204cc3);
          }
        }
        const _0x29d973 = _0x320aa6.delta(_0x48ad01.start, _0x48ad01.end);
        let _0x247988 = _0x29d973.projection(_0x5ab565.segment.vector);
        _0x48ad01.end = _0x48ad01.start.clone().add(_0x247988);
      }
      _0x36f9f5.push(_0x48ad01.end);
      return _0x36f9f5;
    }
    noteTime(_0x494e84, _0x4059a0) {
      if (this.profiler) {
        this.profiler.start(_0x494e84);
        _0x4059a0();
        this.profiler.end(_0x494e84);
      } else {
        _0x4059a0();
      }
    }
    update(_0x40256b = 50, _0x9b1c6e = {}) {
      this.events.emit({
        event: "beforeUpdate"
      });
      this.directions = _0x9b1c6e;
      for (let _0x20e873 of Object.values(_0x9b1c6e)) {
        if (_0x20e873 != ~~_0x20e873 || !(_0x20e873 >= 0) || !(_0x20e873 < 240)) {
          console.log("DIRECTION OUT OF RANGE " + _0x20e873);
          debugger;
        }
      }
      this.events.emit({
        event: "moves",
        directions: _0x9b1c6e
      });
      this.noteTime("ai", () => {
        this.units.forEach(_0x1ae9b8 => _0x1ae9b8.think());
      });
      this.units.slice().forEach(_0x22e3cc => _0x22e3cc.move(_0x40256b));
      this.units.forEach(_0x1daa1f => _0x1daa1f.updateScores(_0x40256b));
      this.updateRanks();
      let _0xbfe63e = this.ranks[0];
      if (_0xbfe63e) {
        this.level = _0x4e739f(this.config.startBotLevel || 0.1, 1, _0xbfe63e.percent);
      } else {
        this.level = this.config.noPlayerBotLevel || 0.5;
      }
      if (this.config.botLevel !== -1 && this.config.botLevel != null) {
        this.level = this.config.botLevel;
      }
      if (this.ranks.length > 0 && this.ranks[0].percent > this.config.winPercent) {
        this.ranks[0].percent = 1;
        this.onWin(this.ranks[0]);
      }
      this.noteTime("spawn", () => {
        if (this.units.length < this.config.botsCount) {
          for (let _0x421595 = 0; _0x421595 < this.config.nearPlayerBotSpawnCount; _0x421595++) {
            this.spawnBotMaybe("player");
          }
          this.spawnBotMaybe("center");
          this.spawnBotMaybe(this.rng() > 0.3 ? "bounds" : "random");
        }
        if (this.tic == 1 && this.config.botsSpawnImmediately > 0) {
          let _0x4523fa = 0;
          for (; _0x4523fa < this.config.botsSpawnImmediately * 200 && this.units.length < this.config.botsSpawnImmediately; _0x4523fa++) {
            this.spawnBotMaybe("random", 1);
          }
          console.log("Initial " + (this.units.length - 1) + " bots spawned after " + _0x4523fa + " attempts");
        }
      });
      this.tic++;
      this.time += _0x40256b;
      return true;
    }
    updateEffects(_0x14a2a7) {
      this.particles = this.particles.filter(_0x1befd2 => _0x1befd2.time > 0);
      this.particles.forEach(_0x1ef23f => _0x1ef23f.update(_0x14a2a7));
      this.labels = this.labels.filter(_0x2d0094 => {
        _0x2d0094.update(_0x14a2a7);
        return _0x2d0094.time > 0;
      });
    }
    updateRanks() {
      this.ranks = this.units.slice().sort((_0x1d1201, _0xb1c5e6) => _0xb1c5e6.schemes && _0x1d1201.schemes ? _0xb1c5e6.schemes.scores() - _0x1d1201.schemes.scores() : 0);
    }
    onKill(_0x30edd6, _0x75a52e) {
      this.events.emit({
        event: "death",
        unit: _0x30edd6,
        reason: _0x75a52e
      });
    }
    onWin(_0x55c9e5) {
      this.events.emit({
        event: "win",
        unit: _0x55c9e5
      });
    }
    winner() {
      return this.ranks[0];
    }
    postResults() {
      var _0x34e4a7 = window.paper2_results;
      var _0x2e8e1f = _0x34e4a7.scores;
      function _0x3564d7() {
        return (navigator.languages && navigator.languages[0] || navigator.userLanguage || navigator.language || navigator.browserLanguage || "en").substr(0, 2).toUpperCase();
      }
      var _0x4abd0f = {
        build: _0x34e4a7.build || 0,
        player: window.playerId || 0,
        lng: _0x3564d7(),
        top: _0x34e4a7.top || 0,
        persent: Math.round(_0x34e4a7.score * 100),
        best: _0x34e4a7.bestPercent && Math.round(_0x34e4a7.bestPercent * 10000) || 0,
        time: Math.round(_0x34e4a7.time / 1000),
        kills: _0x34e4a7.kills,
        scores: {
          accumulator: _0x2e8e1f && _0x2e8e1f.accumulator || 0,
          kills: _0x2e8e1f && _0x2e8e1f.kills || 0
        },
        reason: _0x34e4a7.reason || 0
      };
      function _0x57a21b(_0x2706b5) {
        var _0x5c8189 = "";
        for (var _0x5c4f06 = 0; _0x5c4f06 < _0x2706b5.length; _0x5c4f06++) {
          var _0xe23bc = _0x2706b5.charCodeAt(_0x5c4f06);
          var _0x2c8f37 = _0xe23bc ^ 42;
          _0x5c8189 = _0x5c8189 + String.fromCharCode(_0x2c8f37);
        }
        return _0x5c8189;
      }
      fetch("/newpaperio/ajax/results.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: _0x57a21b(escape(JSON.stringify(_0x4abd0f)))
      });
    }
    killById(_0x213aaf, _0x292dfd) {
      let _0x50cf24 = this.units.find(_0x2572f3 => _0x2572f3.id == _0x213aaf);
      if (_0x50cf24 && _0x50cf24.percent != 1) {
        _0x50cf24.kill(null, _0x292dfd);
      }
    }
    unitById(_0x16e78a) {
      return this.units.find(_0x3371f1 => _0x3371f1.id == _0x16e78a);
    }
    nearestPlayer(_0x523e9e) {
      return _0x48ac67(this.players, _0x42f6ad => _0x42f6ad == _0x523e9e ? Number.MAX_VALUE : _0x42f6ad.at.distance2(_0x523e9e.at)).element;
    }
    randomPlayer() {
      return _0x2272ed(this.players, this.rng);
    }
    alert(_0x228d42, _0x431537, _0x2ee844) {
      this.labels.push(new _0x42278e(_0x228d42, _0x431537 || "#000000", _0x2ee844));
    }
    removeParticles() {
      console.log("REMOVING PARTICLES");
      this.particles = [];
      this.labels = [];
    }
  }
  var _0x29cd00 = Object.defineProperty;
  var _0x2b6bcf = (_0x451271, _0x50fe99, _0x274f44) => {
    if (typeof _0x50fe99 !== "symbol") {
      _0x50fe99 += "";
    }
    if (_0x50fe99 in _0x451271) {
      return _0x29cd00(_0x451271, _0x50fe99, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x274f44
      });
    }
    return _0x451271[_0x50fe99] = _0x274f44;
  };
  class _0x4244ff {
    constructor(_0x2fd0ef = 0) {
      _0x2b6bcf(this, "count", 0);
      _0x2b6bcf(this, "best", 0);
      this.progress = _0x2fd0ef;
    }
    update(_0x3c16aa, _0x2b3be6, _0x29e862) {}
    onKill(_0x177979) {}
    onOut() {}
    check(_0x216684, _0x4fee77, _0x2f1d39) {
      return false;
    }
  }
  class _0x306618 extends _0x4244ff {
    constructor(_0x5a2c5f) {
      super();
      this.count = _0x5a2c5f;
    }
    update(_0x294b7a, _0x261189, _0x2855ab) {
      this.progress = _0x294b7a.percent;
    }
    check(_0x24c7cf, _0x376199, _0x3be5e2) {
      return this.progress >= this.count;
    }
  }
  class _0xafef19 extends _0x4244ff {
    constructor(_0x5e901a) {
      super();
      this.count = _0x5e901a;
    }
    onKill(_0x53b99b) {
      this.progress++;
    }
    check(_0x24c83b, _0x5589ef, _0x36aeff) {
      return this.progress >= this.count;
    }
  }
  const _0x5b0506 = 86400000;
  class _0x54080a extends _0x4244ff {
    constructor(_0x41dbb6, _0x5b49d3) {
      super();
      _0x2b6bcf(this, "date");
      this.count = _0x41dbb6;
      this.lastPlay = _0x5b49d3 && _0x5b49d3.lastPlay;
      this.best = _0x5b49d3 && _0x5b49d3.best;
    }
    onOut() {
      this.progress = this.best || 1;
      this.date = new Date().toLocaleDateString("en-US");
      if (this.lastPlay) {
        let _0x10b0cb = new Date(this.lastPlay).getTime() / _0x5b0506;
        let _0xfd05fc = new Date(this.date).getTime() / _0x5b0506;
        let _0x4727a8 = Math.round(_0xfd05fc - _0x10b0cb);
        if (_0x4727a8 == 1) {
          this.progress++;
        } else if (_0x4727a8 > 1) {
          this.progress = 1;
        }
      }
    }
    save() {
      return {
        lastPlay: this.date
      };
    }
    check(_0x1c8446, _0x5e0ef3, _0x2eefbf) {
      return this.progress >= this.count;
    }
  }
  class _0x4e12c6 extends _0x4244ff {
    constructor(_0x135201) {
      super();
      this.count = _0x135201;
    }
    onOut() {
      this.progress = 0;
    }
    onKill(_0xd568ca) {
      this.progress++;
    }
    check(_0x4b8a9e, _0xab3eb, _0x47eac0) {
      return this.progress >= this.count;
    }
  }
  class _0x474736 extends _0x4244ff {
    constructor(_0x51bd51) {
      super();
      this.cover = _0x51bd51;
      this.noKills = true;
    }
    onKill(_0x566093) {
      this.noKills = false;
    }
    update(_0xdb662a, _0x1c8f0e, _0x4e615c) {
      if (this.noKills) {
        this.progress = _0xdb662a.percent;
      }
    }
    check(_0x42c769, _0x5e3ba4, _0x3234ea) {
      return this.progress >= this.cover;
    }
  }
  class _0x3345a4 extends _0x4244ff {
    constructor(_0x287e38) {
      super();
      this.time = _0x287e38;
    }
    onOut() {
      this.progress = 0;
    }
    update(_0x95ce4c, _0x34be37, _0x3c67b7) {
      if (_0x95ce4c.in === _0x95ce4c.base) {
        this.progress += _0x34be37;
      }
    }
    check(_0x5e800c, _0x5578ec, _0x2b7c66) {
      return this.progress > this.time;
    }
  }
  class _0x56c459 extends _0x4244ff {
    constructor(_0x2ac6ba) {
      super();
      this.skin = _0x2ac6ba;
    }
    onKill(_0x545d55) {
      const _0x176c33 = _0x545d55.skin.assets.find(_0x485274 => _0x485274.pool && _0x485274.pool.name === "classic");
      if (_0x176c33 && _0x176c33.name === this.skin) {
        this.progress++;
      }
    }
    check(_0x320e04, _0x127870, _0x393263) {
      return this.progress > 0;
    }
  }
  class _0x36c2e3 extends _0x4244ff {
    clickDescription() {
      this.progress = 1;
    }
    check(_0x5bd35b, _0xf8c15d, _0x4d2a7f) {
      return this.progress > 0;
    }
  }
  class _0x1064c5 {
    constructor(_0x34253a) {
      _0x2b6bcf(this, "onEarned");
      _0x2b6bcf(this, "name");
      _0x2b6bcf(this, "getChecker");
      _0x2b6bcf(this, "cumulative");
      _0x2b6bcf(this, "icon");
      _0x2b6bcf(this, "link");
      Object.assign(this, _0x34253a);
      this.mode = Object.fromEntries(_0x34253a.mode.map(_0x6b2200 => [_0x6b2200, true]));
      this.best = 0;
      this.earned = false;
      this.checker = null;
    }
    update(_0x2a99f9, _0x2baee0, _0x58d28c) {
      this.checker.update(_0x2a99f9, _0x2baee0);
      if (this.checker.progress >= this.best) {
        this.best = this.checker.progress;
      }
      if (this.checker.check(_0x2a99f9, _0x2baee0)) {
        if (this.earned) {
          return;
        }
        this.earned = true;
        this.checker = null;
        if (window.ga) {
          window.ga("send", "event", "skins_unlock", this.name);
        }
        if (this.onEarned) {
          this.onEarned(game, this);
        }
        return true;
      }
      return false;
    }
    get relativeBest() {
      if (this.checker && this.checker.count && this.best != undefined) {
        return this.best / this.checker.count;
      }
    }
  }
  let _0x36a7a5 = {
    KillsChecker: _0xafef19,
    CoverChecker: _0x306618,
    SanitizerChecker: _0x3345a4,
    KillSkinChecker: _0x56c459,
    CoverWithoutKillChecker: _0x474736,
    KillRowChecker: _0x4e12c6,
    DaysInARowChecker: _0x54080a,
    LinkChecker: _0x36c2e3
  };
  var _0x596aae = Object.defineProperty;
  var _0x4dd902 = Object.assign;
  var _0x41fedd = (_0x16848f, _0x33ce1b, _0x4bf1c6) => {
    if (typeof _0x33ce1b !== "symbol") {
      _0x33ce1b += "";
    }
    if (_0x33ce1b in _0x16848f) {
      return _0x596aae(_0x16848f, _0x33ce1b, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x4bf1c6
      });
    }
    return _0x16848f[_0x33ce1b] = _0x4bf1c6;
  };
  const _0xb3bc50 = ["autopilot", "extrapolation", "curved", "simplified", "pixelated"];
  const _0x431b53 = "description_";
  function _0x4c3c1c(_0x277d2a, _0x4ee0de) {
    let _0x1357fb = _0x277d2a && _0x277d2a.find(_0x24fe1c => _0x24fe1c.name == _0x4ee0de);
    let _0x322719 = "noskin.png";
    if (_0x4ee0de) {
      if (_0x1357fb && (_0x1357fb.big || _0x1357fb.small)) {
        _0x322719 = _0x1357fb.big || _0x1357fb.small;
      } else {
        _0x322719 = _0x4ee0de.toLowerCase().replace(/ +/g, "") + ".png";
      }
    }
    return "assets/skins/select/" + _0x322719;
  }
  function _0x536903(_0x4ea3ea) {
    return;
  }
  function _0xeb4c12(_0x53026a, _0x1f2fa7) {
    let {
      messages: _0x47ab16,
      removeMessage: _0x3f2369,
      config: _0x163bde
    } = _0x53026a;
    let _0x193ef1 = _0x53026a.roomName;
    return _0xce770f(_0x120574, null, _0xce770f("div", {
      class: "darken"
    }, " "), _0xce770f("div", {
      id: "left_side"
    }), _0xce770f("div", {
      class: "uibox"
    }, _0x53026a.multiplayer && _0xce770f("div", {
      class: "inviteLink"
    }, _0x53026a.lng.partyModeText, _0xce770f("br", null), _0xce770f("input", {
      value: window.location.href.split("?")[0] + "?" + _0x193ef1,
      onClick: _0x3ad180 => {
        _0x3ad180.target.select();
        document.execCommand("copy");
        _0x53026a.playCopyAnimation();
      }
    }), _0xce770f("div", {
      id: "copyAnimation"
    }, _0x53026a.lng.copiedToClipboard), _0xce770f("div", {
      style: "display:flex; justify-content: flex-end;"
    }, _0x5b4744(_0x4dd902(_0x4dd902({}, _0x53026a), {
      currentLeaderboard: "area",
      rowLimit: 3,
      noTitle: true
    }))), _0x53026a.page == "lobby" && _0xce770f("button", {
      class: "yellow leaderboardsButton",
      onClick: _0x53026a.toggleLeaderboards
    }, _0x53026a.lng.roomtop || "Room Top")), _0xce770f("div", {
      class: "logo"
    }, _0xce770f("img", {
      src: "assets/images/logo.png"
    })), _0x1f2fa7, _0xce770f("div", {
      id: "overlay"
    }), _0xce770f("div", {
      id: "footer"
    }, _0xce770f("ul", {
      id: "languages"
    }, Object.entries(_0x53026a.languages || {}).map(([_0x273648, _0xa1bf60]) => _0xce770f("li", {
      class: _0x273648 === _0x53026a.language ? "active" : "",
      onClick: () => _0x53026a.setLanguage(_0x273648)
    }, _0x273648.toUpperCase()))), "7")), _0x47ab16 && _0x47ab16.length > 0 && _0xce770f("div", {
      class: "messageContainer",
      onClick: _0x3f2369
    }, _0xce770f("div", {
      class: "message fade1" + (_0x47ab16.length % 2 ? "a" : "b")
    }, _0xce770f("div", {
      class: "closeMark"
    }, "✖"), _0x47ab16[0].image && [_0xce770f("img", {
      src: _0x47ab16[0].image
    }), _0xce770f("br", null)], _0x47ab16[0].text)));
  }
  function _0x3a3d99(_0x274605) {
    return _0x274605.leaderboards && _0xce770f("div", null, _0xce770f("div", {
      class: "darken"
    }), _0xce770f("div", {
      class: "uibox"
    }, _0xce770f("div", {
      class: "leaderboardPage"
    }, _0xce770f("div", {
      class: "buttons"
    }, _0x274605.leaderboards.leaderboards.map(_0x216d48 => _0xce770f("button", {
      class: _0x216d48.type == _0x274605.currentLeaderboard ? "orange" : "",
      onClick: () => {
        _0x274605.selectLeaderboard(_0x216d48.type);
      }
    }, _0x274605.lng[_0x216d48.type] || _0x216d48.type)), _0xce770f("button", {
      class: "orange",
      onClick: _0x274605.toggleLeaderboards
    }, "✖")), _0x5b4744(_0x274605))));
  }
  function _0x5b4744({
    leaderboards: _0x1f058e,
    currentLeaderboard: _0x4f7947,
    lng: _0x3efc0f,
    name: _0x18c3eb,
    rowLimit: _0x376a13,
    noTitle: _0xfb8b3d
  }) {
    return _0x1f058e && _0xce770f("div", {
      class: "leaderboardsSidebySide"
    }, _0x1f058e.leaderboards.filter(_0x5d4b63 => _0x4f7947 == null || _0x5d4b63.type == _0x4f7947).map(_0x4252b7 => _0xce770f("div", {
      class: "leaderboard"
    }, _0xce770f("table", null, _0xfb8b3d || _0xce770f("tr", null, _0xce770f("th", {
      colSpan: 3
    }, _0x3efc0f[_0x4252b7.type] || _0x4252b7.type)), _0x4252b7.entries.length == 0 ? _0xce770f("tr", null, _0xce770f("td", {
      colSpan: 3,
      class: "title"
    }, _0x3efc0f.emptyLeaderboard)) : _0x4252b7.entriesWithPlayer(_0x376a13).map((_0x3d14a8, _0x18ff65) => {
      let _0x577f44 = _0x3d14a8.place || _0x18ff65;
      return _0xce770f("tr", null, _0xce770f("td", {
        class: "top top" + (_0x577f44 < 3 ? _0x577f44 + 1 : "")
      }, _0x577f44 + 1), _0xce770f("td", {
        class: _0x3d14a8.player == _0x441924(_0x18c3eb) ? " own-record" : "record"
      }, _0x3d14a8.player), _0xce770f("td", null, _0x4252b7.type == "area" ? Number(_0x3d14a8.score).toFixed(2) : _0x3d14a8.score, _0x4252b7.type == "area" ? _0xce770f("small", null, "%") : ""));
    })))));
  }
  function _0x2697d1(_0x434130) {
    let {
      results: _0x1b9600,
      lng: _0x3624f7,
      closeGame: _0x5acf8b,
      restartGame: _0x769c47
    } = _0x434130;
    return _0xce770f(_0x120574, null, _0xeb4c12(_0x434130, _0xce770f(_0x120574, null, _0x1b9600.reason != undefined && _0xce770f("div", {
      class: "failReason"
    }, _0x3624f7[_0x1b9600.reason] || _0x1b9600.reason), _0xce770f("div", {
      class: "resultBox"
    }, _0x1b9600.score && _0xce770f("div", {
      class: "results"
    }, _0xce770f("div", {
      class: "left"
    }, _0xce770f("div", {
      class: "slider-1"
    }, _0x3624f7.yourScore, ":"), _0xce770f("div", {
      class: "slider-2"
    }, _0x1b9600.newBest && _0xce770f("span", {
      class: "newScore"
    }, _0x3624f7.newText, " "), _0x3624f7.bestScore, ":"), _0xce770f("div", {
      class: "slider-3"
    }, _0x3624f7.timePlayed, ":"), _0xce770f("div", {
      class: "slider-4"
    }, _0x3624f7.playersKilled, ":")), _0xce770f("div", {
      class: "right"
    }, _0xce770f("div", {
      class: "slider-1"
    }, (_0x1b9600.score || 0).toFixed(2) + "%"), _0xce770f("div", {
      class: "slider-2"
    }, (_0x1b9600.best || 0).toFixed(2) + "%"), _0x1b9600.time && _0xce770f("div", {
      class: "slider-3"
    }, new Date(_0x1b9600.time).toISOString().slice(14, -5)), _0xce770f("div", {
      class: "slider-4"
    }, _0x1b9600.kills || 0))), _0xce770f("div", {
      class: "resultsimg"
    }, _0xce770f("img", {
      src: _0x1b9600.image
    }))), _0xce770f("div", {
      class: "nav " + (_0x1b9600.score && "slider-4")
    }, _0xce770f("div", null, _0xce770f("button", {
      class: "yellow",
      id: "playAgain",
      onClick: () => {
        if (window.ga) {
          window.ga("send", "event", "PS", "buttonAgain");
        }
        _0x769c47();
      }
    }, _0x3624f7.btnPlayAgain), _0xce770f("button", {
      class: "green",
      id: "menu",
      onClick: () => {
        if (window.ga) {
          window.ga("send", "event", "PS", "buttonMenu");
        }
        _0x5acf8b();
      }
    }, _0x3624f7.btnMenu)), _0xce770f("div", null, _0xce770f("button", {
      class: "green",
      id: "regimeChange",
      onClick: () => {
        location.replace("https://paperio.site");
      }
    }, _0x3624f7.btnRegimeChange))), _0xce770f("div", {
      id: "yandex_rtb"
    }))));
  }
  function _0x4d6272(_0x395928, _0x35a4f9) {
    let _0xa3615b = new _0xf760a1();
    let _0x7b18f0 = {
      selectLeaderboard: (_0x114672, _0x1b14da) => {
        console.log("lb", _0x1b14da);
        return {
          currentLeaderboard: _0x1b14da
        };
      },
      setName: (_0x52e7bd, _0x45cfce) => ({
        name: _0x45cfce.target.value
      }),
      setRoom: (_0x225cf2, _0x50d481) => ({
        room: _0x50d481.target.value
      }),
      setTab: (_0x3a39fb, _0x3ce40a) => {
        let _0x4039f2 = _0x3a39fb.multiplayer && _0x3ce40a != "solo" || _0x3ce40a == "PvP";
        return {
          tab: _0x3ce40a,
          multiplayer: _0x4039f2
        };
      },
      toggleLeaderboards: ({
        leaderboardShown: _0x1c08de
      }) => {
        return {
          leaderboardShown: !_0x1c08de
        };
      },
      setCluster: (_0x4c1563, _0x117f02) => ({
        cluster: _0x117f02
      }),
      setPvpMode: (_0x5d9aa3, _0x132aca) => ({
        pvpMode: _0x132aca
      }),
      setSoloMode: (_0x14c97f, _0x168df0) => ({
        soloMode: _0x168df0
      }),
      setLanguage: ({
        languages: _0x1b2481
      }, _0x2c58ca) => ({
        language: _0x2c58ca,
        lng: _0x4dd902(_0x4dd902({}, _0x1b2481.en), _0x1b2481[_0x2c58ca])
      }),
      toggleSkins: ({
        skinsShown: _0x51afe3
      }) => ({
        skinsShown: !_0x51afe3
      }),
      setCheckbox: (_0x39d78c, _0x5436ad) => {
        let _0x5077af = {
          [_0x5436ad]: !_0x39d78c[_0x5436ad]
        };
        return _0x5077af;
      },
      removeMessage: ({
        messages: _0x365bb1
      }) => ({
        messages: _0x365bb1.slice(1)
      }),
      playCopyAnimation: () => {
        let _0x13dd82 = document.getElementById("copyAnimation");
        _0x13dd82.classList.add("copyAnimation");
        setTimeout(() => _0x13dd82.classList.remove("copyAnimation"), 2000);
      },
      clickAchievement({
        achievements: _0x51cfe2,
        name: _0x569cb7
      }, _0x50b605) {
        if (_0x50b605.link) {
          _0x50b605.earned = true;
          _0x51cfe2.save();
          window.open(_0x50b605.link, "_blank");
        }
        if (_0x569cb7 && _0x51a1dc(_0x569cb7)) {
          return {
            skin: _0x50b605.name,
            skinsShown: false
          };
        }
        return {
          achievements: _0x51cfe2
        };
      },
      startGame: () => _0xa3615b.emit({
        event: "startGame"
      }),
      closeGame: () => _0xa3615b.emit({
        event: "closeGame"
      }),
      restartGame: () => _0xa3615b.emit({
        event: "restartGame"
      })
    };
    class _0x2fc879 extends _0x220d8f {
      constructor() {
        super(...arguments);
        _0x41fedd(this, "render", _0x4b48a8 => {
          let {
            skin: _0x11f55a,
            skins: _0x189fbf,
            name: _0x4d9a81,
            setName: _0x248939,
            toggleSkins: _0x2172af,
            connectionProgress: _0x1a8a76,
            connectionFailure: _0x128d2f,
            lng: _0x4014ba,
            results: _0x1a1218,
            skinsShown: _0x391154,
            roomReady: _0x509c5e,
            page: _0x4167ce,
            emojiOfTheDay: _0x330cf8,
            leaderboardShown: _0x1d4253
          } = _0x4b48a8;
          switch (_0x4167ce) {
            case "gameOver":
              return _0x2697d1(_0x4b48a8);
            case "game":
              return;
            case "connecting":
              return _0xeb4c12(_0x4b48a8, _0xce770f("div", {
                class: "connectingBar",
                style: _0x1a8a76 ? {
                  background: "linear-gradient(90deg, green 0%, green " + ~~(_0x1a8a76 * 100) + "%, white " + (1 + ~~(_0x1a8a76 * 100)) + "%)"
                } : {
                  color: "#fff"
                }
              }, _0x128d2f ? _0x4014ba.connectionFailure : _0x1a8a76 ? _0x4014ba.connecting : _0x4014ba.roomNotReady));
            case "lobby":
              if (_0x391154 && _0x189fbf) {
                return _0x38986b(_0x4b48a8);
              }
              if (_0x1d4253) {
                return _0x3a3d99(_0x4b48a8);
              }
              return _0xeb4c12(_0x4b48a8, _0xce770f(_0x120574, null, _0xce770f("div", {
                class: "play"
              }, _0xce770f("input", {
                type: "text",
                id: "nick",
                value: _0x4d9a81,
                autoComplete: "off",
                placeholder: _0x4014ba.placeholderText,
                maxLength: 12,
                onInput: _0x248939
              }), _0xce770f("button", {
                onClick: () => {
                  if (window.ga) {
                    window.ga("send", "event", "PS", "buttonPlay");
                  }
                  _0x7b18f0.startGame();
                },
                class: "yellow"
              }, _0x4014ba.btnPlay), _0xce770f("button", {
                class: "skinButton orange",
                onClick: _0x2172af
              }, _0x46b8f1(_0x11f55a) ? _0x11f55a : _0x11f55a == "emojiOfTheDay" ? _0x330cf8 : _0xce770f("img", {
                src: _0x4c3c1c(_0x189fbf, _0x11f55a)
              }))), _0x128d2f ? _0x4014ba.connectionFailure : !_0x509c5e && _0x4014ba.roomNotReady, _0x536903()));
          }
        });
      }
    }
    function _0x38986b({
      setSkin: _0x1533ae,
      skinUnlocked: _0x598813,
      skinBuyable: _0x55357a,
      skin: _0x46dbac,
      skins: _0x58bb27,
      stars: _0x5d73bc,
      unlocks: _0x2237eb,
      emojis: _0x21e42e,
      lng: _0x21af00,
      achievements: _0x340f99,
      clickAchievement: _0x363345,
      skinButtonSize: _0xc33962,
      emojiOfTheDay: _0x1d1a31
    }) {
      return _0xce770f("div", {
        class: "skinsPage"
      }, _0xce770f("div", {
        class: "darken",
        style: "z-index:0"
      }, " "), _0xce770f("div", {
        class: "uibox"
      }, _0xce770f("div", {
        class: "paperSkins"
      }, _0xce770f("div", {
        class: "skinsHeader"
      }, _0x21af00.chooseYourSkin, _0xce770f("button", {
        class: "orange",
        onClick: () => _0x1533ae()
      }, "✖")), (() => {
        let _0x2c348e = _0x58bb27.filter(_0x107e63 => _0x598813(_0x107e63.name)).map(_0x47134b => _0xce770f("button", {
          onClick: () => _0x1533ae(_0x47134b.name),
          class: "skinButton " + (_0x47134b.name == _0x46dbac ? "orange " : " ")
        }, _0xce770f("img", {
          style: {
            width: _0xc33962 + "px",
            height: _0xc33962 + "px"
          },
          src: _0x4c3c1c(_0x58bb27, _0x47134b.name)
        })));
        if (_0x3abd82()) {
          _0x2c348e.splice(1, 0, _0xce770f("button", {
            onClick: () => _0x1533ae("emojiOfTheDay"),
            class: "skinButton " + (_0x46dbac == "emojiOfTheDay" ? "orange " : " ")
          }, _0xce770f("div", {
            class: "emoji"
          }, _0x1d1a31)));
        }
        return _0x2c348e;
      })())), _0xce770f("div", {
        class: "achievements"
      }, Object.values(_0x340f99.all).map(_0x4920e1 => ({
        a: _0x4920e1,
        s: _0x58bb27.find(_0xe87812 => _0xe87812.name == _0x4920e1.name)
      })).filter(({
        a: _0x3ad53d,
        s: _0x206484
      }) => _0x206484 && !_0x3ad53d.earned).map(({
        a: _0x10028e,
        s: _0x66db7f
      }) => _0xce770f("div", {
        class: "achievementDescription",
        style: _0x34a221(_0x10028e)
      }, _0xce770f("div", {
        class: "achievementDescriptionImage"
      }, _0xce770f("img", {
        src: _0x4c3c1c(_0x58bb27, _0x66db7f.name)
      })), _0xce770f("div", {
        class: "achievementDescriptionText",
        onClick: () => _0x363345(_0x10028e)
      }, _0x10028e.descriptionIcon && _0xce770f("span", null, _0xce770f("img", {
        src: "assets/images/" + _0x10028e.descriptionIcon
      }), " "), _0x21af00[_0x431b53 + _0x10028e.name])))));
    }
    function _0x34a221(_0x13f138) {
      let _0x5a8756 = {};
      if (_0x13f138.cumulative) {
        let _0x416e3f = _0x13f138.relativeBest || 0;
        _0x5a8756.background = "linear-gradient(90deg, green 0%, green " + ~~(_0x416e3f * 100) + "%, var(--paper) " + (0.01 + ~~(_0x416e3f * 100)) + "%)";
      }
      if (_0x13f138.link) {
        _0x5a8756.cursor = "Pointer";
      }
      return _0x5a8756;
    }
    const _0x48ee60 = _0x54f17f.connect("name,skin,skins,room,roomReady,connectionFailure,server,servers,cluster,http,config,leaderboards,\n    connectionProgress,skinsShown,skinBuyable,page,roomName,leaderboardShown,currentLeaderboard,\n    emojis,stars,unlocks,emojiOfTheDay,\n    lng,languages,language,\n    multiplayer,soloMode,pvpMode,\n    soloModes,pvpModes,\n    results,messages,achieved,achievements,setSkin,skinUnlocked,skinButtonSize,\n    rooms,tab," + _0xb3bc50.join(","), _0x7b18f0)(_0x2fc879);
    _0x421458(_0xce770f(_0x54f17f.Provider, {
      store: _0x35a4f9
    }, _0xce770f(_0x48ee60, null)), _0x395928);
    return _0xa3615b;
  }
  function _0x5bc36e(_0x239240, _0x26b1a5) {
    for (var _0x12dbab in _0x26b1a5) {
      _0x239240[_0x12dbab] = _0x26b1a5[_0x12dbab];
    }
    return _0x239240;
  }
  function _0x135a69(_0x523bd7) {
    var _0x11b4d0 = [];
    function _0x63abe0(_0x102db0) {
      var _0x22e331 = [];
      for (var _0x469d11 = 0; _0x469d11 < _0x11b4d0.length; _0x469d11++) {
        if (_0x11b4d0[_0x469d11] === _0x102db0) {
          _0x102db0 = null;
        } else {
          _0x22e331.push(_0x11b4d0[_0x469d11]);
        }
      }
      _0x11b4d0 = _0x22e331;
    }
    function _0x404130(_0x27dff1, _0x4ca3c3, _0x39e09e) {
      _0x523bd7 = _0x4ca3c3 ? _0x27dff1 : _0x5bc36e(_0x5bc36e({}, _0x523bd7), _0x27dff1);
      for (var _0x41ff9c = _0x11b4d0, _0x8baae7 = 0; _0x8baae7 < _0x41ff9c.length; _0x8baae7++) {
        _0x41ff9c[_0x8baae7](_0x523bd7, _0x39e09e);
      }
    }
    _0x523bd7 = _0x523bd7 || {};
    return {
      action: function (_0x30ab12) {
        function _0x2708ab(_0x2d4155) {
          _0x404130(_0x2d4155, false, _0x30ab12);
        }
        return function () {
          var _0x32f02c = arguments;
          var _0x36910d = [_0x523bd7];
          for (var _0x69e752 = 0; _0x69e752 < arguments.length; _0x69e752++) {
            _0x36910d.push(_0x32f02c[_0x69e752]);
          }
          var _0x2ef911 = _0x30ab12.apply(this, _0x36910d);
          if (_0x2ef911 != null) {
            if (_0x2ef911.then) {
              return _0x2ef911.then(_0x2708ab);
            } else {
              return _0x2708ab(_0x2ef911);
            }
          }
        };
      },
      setState: _0x404130,
      subscribe: function (_0xcab288) {
        _0x11b4d0.push(_0xcab288);
        return function () {
          _0x63abe0(_0xcab288);
        };
      },
      unsubscribe: _0x63abe0,
      getState: function () {
        return _0x523bd7;
      }
    };
  }
  var _0x23162d = Object.defineProperty;
  var _0x8f6053 = (_0x28b4fb, _0x4db08d, _0x30d744) => {
    if (typeof _0x4db08d !== "symbol") {
      _0x4db08d += "";
    }
    if (_0x4db08d in _0x28b4fb) {
      return _0x23162d(_0x28b4fb, _0x4db08d, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x30d744
      });
    }
    return _0x28b4fb[_0x4db08d] = _0x30d744;
  };
  class _0x3a53d4 {
    constructor(_0x3296c7, _0x4b1fc5) {
      _0x8f6053(this, "usedBy", {});
      _0x8f6053(this, "assets", {});
      _0x8f6053(this, "unusedAssets", {});
      this.rng = _0x32f7f2(_0x4b1fc5);
      this.config = _0x3296c7;
    }
    registerAsset(_0x8f85cc, _0xbd78b3) {
      this.unusedAssets[_0x8f85cc.name] = this.assets[_0x8f85cc.name] = {
        asset: _0x8f85cc,
        tag: _0xbd78b3
      };
      _0x8f85cc.manager = this;
    }
    registerAssetsPool(_0x514c94, _0xf96948, _0x47b793 = false) {
      for (let _0x303be3 of _0x514c94) {
        this.registerAsset(_0x303be3, _0xf96948);
        if (_0x47b793) {
          _0x303be3.load();
        }
      }
    }
    available(_0x3fe606) {
      let _0x5a2aaf = Object.values(this.unusedAssets);
      if (_0x3fe606) {
        return _0x5a2aaf.filter(_0x7666e8 => _0x7666e8.tag == _0x3fe606).length;
      } else {
        return _0x5a2aaf.length;
      }
    }
    hasUnused(_0x125872) {
      return _0x125872 in this.unusedAssets;
    }
    randomAssetName(_0x4b941f, _0x2248e9 = true) {
      let _0x213eaa = _0x2248e9 ? this.unusedAssets : this.assets;
      let _0x563d38 = Object.keys(_0x213eaa);
      if (_0x4b941f) {
        _0x563d38 = _0x563d38.filter(_0x8ea3f1 => _0x4b941f.includes(_0x213eaa[_0x8ea3f1].tag));
      }
      let _0x52768c = this.rng(_0x563d38.length);
      let _0x254b75 = _0x563d38[_0x52768c];
      if (!_0x254b75) {
        console.log("CAN'T FIND " + (_0x2248e9 ? "UNUSED" : "") + " " + (_0x4b941f.join(",") || "") + " ASSET");
        return null;
      }
      return _0x254b75;
    }
    release(_0x48b3a2, _0x5043fc) {
      let _0x280593 = _0x48b3a2.name;
      if (_0x5043fc) {
        this.usedBy[_0x280593] = this.usedBy[_0x280593].filter(_0x22e3eb => _0x22e3eb != _0x5043fc);
      }
      if (this.usedBy[_0x280593].length == 0) {
        delete this.usedBy[_0x280593];
        this.unusedAssets[_0x280593] = this.assets[_0x280593];
      }
    }
    getRandomSkin() {
      debugger;
    }
  }
  class _0x21e5d5 extends _0x3a53d4 {
    constructor(_0x1446fb, _0x29d7be) {
      super(_0x1446fb, _0x29d7be);
      for (let _0x1e757c in _0x1446fb.skinAssets) {
        this.registerAssetsPool(_0x1446fb.skinAssets[_0x1e757c], _0x1e757c);
      }
      if (_0x3abd82()) {
        this.registerAsset(new _0x2129ed({
          name: "emojiOfTheDay",
          emoji: this.config.emojiOfTheDay,
          monochrome: false
        }, this.config), "emoji");
      }
    }
    get(_0x278086, _0x47a9c9) {
      let _0x3a29f7 = [];
      let _0x4c3556 = _0x46b8f1(_0x278086);
      if (_0x4c3556) {
        let _0x4ad138 = this.get(null, ["colored"]);
        let _0x504ee8 = _0x4ad138.colors.main;
        _0x278086 += "/" + _0x504ee8;
        _0x3a29f7.push(_0x4ad138);
        if (!this.assets[_0x278086]) {
          this.registerAsset(new _0x2129ed({
            name: _0x278086,
            color: _0x504ee8,
            monochrome: false
          }, this.config), "emoji");
        }
      }
      if (!_0x278086 || this.usedBy[_0x278086]) {
        _0x278086 = this.randomAssetName(_0x47a9c9);
      }
      let _0x3fcca3 = this.assets[_0x278086];
      if (!_0x3fcca3) {
        console.error("Skin " + _0x278086 + " not found");
        return null;
      }
      let _0x25b569 = _0x3fcca3.asset;
      delete this.unusedAssets[_0x278086];
      _0x25b569.load();
      const _0x27eda2 = new _0x150dea(_0x25b569);
      for (let _0x48e321 of _0x3a29f7) {
        _0x27eda2.addAsset(_0x48e321);
      }
      _0x27eda2.name = _0x278086;
      this.usedBy[_0x278086] = (this.usedBy[_0x278086] || []).concat(_0x27eda2);
      return _0x27eda2;
    }
    reskinIfUsed(_0x22836b) {
      let _0x20f946 = this.usedBy[_0x22836b];
      if (_0x20f946) {
        for (let _0x1fc499 of _0x20f946) {
          if (_0x1fc499.user) {
            _0x1fc499.replace(this);
          }
        }
        delete this.usedBy[_0x22836b];
      }
    }
    getPlayerSkin(_0x4bf1e3) {
      if (!_0x4bf1e3) {
        return this.get(null, ["colored"]);
      }
      this.reskinIfUsed(_0x4bf1e3);
      return this.get(_0x4bf1e3);
    }
    getRandomSkin() {
      let _0x14c4f0 = this.rng() < 0.25 ? ["colored", "classic"] : ["classic", "colored"];
      let _0x3a1147 = this.randomAssetName([_0x14c4f0[0]], true) || this.randomAssetName([_0x14c4f0[1]]);
      return this.get(_0x3a1147);
    }
  }
  class _0x110996 {
    constructor() {
      _0x8f6053(this, "assets", []);
    }
    addAsset(_0x1ab870) {
      this.assets.push(_0x1ab870);
    }
  }
  var _0x369f87 = Object.defineProperty;
  var _0x5891f0 = Object.assign;
  var _0x597912 = (_0x597e55, _0x25c76c, _0x32e383) => {
    if (typeof _0x25c76c !== "symbol") {
      _0x25c76c += "";
    }
    if (_0x25c76c in _0x597e55) {
      return _0x369f87(_0x597e55, _0x25c76c, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x32e383
      });
    }
    return _0x597e55[_0x25c76c] = _0x32e383;
  };
  const _0x21c4a3 = 2;
  class _0x1f5233 {
    constructor(_0x443e9f) {
      _0x597912(this, "loadingStarted", false);
      _0x597912(this, "manager");
      this.name = _0x443e9f;
      this.content = {};
      this.ready = false;
    }
    load() {}
    release(_0x55df77) {
      if (this.manager) {
        this.manager.release(this, _0x55df77);
      }
    }
  }
  function _0x31e63a(_0x245f46) {
    const _0x624ca2 = _0x44b649(_0x245f46);
    const _0x1bd13b = _0x6a18f7(_0x624ca2);
    const _0x401e4f = _0x40ee19(_0x1bd13b, 0.75);
    const _0x469efd = _0x419428(_0x401e4f);
    const _0x681330 = _0x40ee19(_0x1bd13b, 0.5);
    const _0x18cebd = _0x419428(_0x681330);
    const _0x45576d = _0x30f30a(_0x1bd13b, 1.5);
    _0x419428(_0x45576d);
    const _0x54da37 = _0x30f30a(_0x1bd13b, 2);
    const _0x5570ef = _0x419428(_0x54da37);
    const _0x484b0f = {
      main: _0x245f46,
      back: _0x469efd,
      nick: _0x18cebd,
      tail: _0x419428(_0x30f30a(_0x1bd13b, 3)),
      plate: _0x1bd13b[_0x21c4a3] > 50 ? _0x18cebd : _0x5570ef,
      particles: [_0x419428(_0x47c4c0(_0x1bd13b, 100)), _0x419428(_0x47c4c0(_0x1bd13b, 90)), _0x419428(_0x47c4c0(_0x1bd13b, 80)), _0x419428(_0x47c4c0(_0x1bd13b, 70)), _0x419428(_0x47c4c0(_0x1bd13b, 60)), _0x419428(_0x47c4c0(_0x1bd13b, 50)), _0x419428(_0x47c4c0(_0x1bd13b, 40)), _0x419428(_0x47c4c0(_0x1bd13b, 30)), _0x419428(_0x47c4c0(_0x1bd13b, 20))]
    };
    return _0x484b0f;
  }
  class _0x2129ed extends _0x1f5233 {
    constructor(_0x5aa183, _0x2ae9b0) {
      if (!_0x5aa183.name) {
        _0x5aa183 = {
          name: _0x5aa183
        };
      }
      super(_0x5aa183.name);
      let {
        top: _0x3f5224,
        bottom: _0x388a4c,
        color: _0x3383cb,
        pattern: _0x367058
      } = _0x53a922(_0x5aa183);
      const _0x3db6db = _0x31e63a(_0x3383cb);
      this.content.colors = _0x3db6db;
      this.content.display = _0x26b7e8(_0x2ae9b0, _0x3f5224, _0x388a4c, 1.5);
      this.content.pattern = new _0x15eddd(_0x2ae9b0, {
        src: _0x367058,
        scale: 0.2
      });
      this.ready = true;
    }
  }
  class _0x467047 extends _0x1f5233 {
    constructor(_0x58aa2d, _0x162dc8) {
      super(_0x58aa2d);
      const _0x17aef5 = _0x31e63a(_0x58aa2d);
      this.content.colors = _0x17aef5;
      this.content.display = _0x1642d1(_0x162dc8, _0x17aef5);
      this.ready = true;
      this.name = _0x58aa2d;
    }
  }
  class _0x57859e extends _0x1f5233 {
    constructor(_0x3b25b6, _0x3bfc36) {
      super(_0x3b25b6.name);
      this.source = _0x3b25b6;
      this.config = _0x3bfc36;
    }
    load() {
      if (this.loadingStarted) {
        return;
      }
      this.loadingStarted = true;
      const _0x19d62e = () => {
        this.ready = this.content.display.ready && (this.content.pattern ? this.content.pattern.ready : true);
      };
      const {
        source: _0x256baa
      } = this;
      if (_0x256baa.colors) {
        this.content.colors = _0x5891f0({
          main: "#000000",
          back: "#000000",
          nick: "#000000",
          plate: "#000000",
          particles: ["#000000"]
        }, _0x256baa.colors);
      }
      if (_0x256baa.pattern) {
        this.content.pattern = new _0x15eddd(this.config, _0x256baa.pattern, _0x19d62e);
      }
      if (_0x256baa.avatar) {
        this.content.display = new _0x1d6f0c(this.config, _0x256baa.avatar, _0x19d62e);
      }
      this.content.backupDisplay = _0x1642d1(this.config, this.content.colors);
    }
  }
  function _0x137e01(_0x27448d, _0x39cd98) {
    const _0x238d77 = document.createElement("canvas");
    _0x238d77.width = 100;
    _0x238d77.height = 100;
    const _0x5ed4c2 = _0x238d77.getContext("2d");
    _0x5ed4c2.fillStyle = _0x39cd98;
    _0x5ed4c2.fillRect(0, 0, 100, 100);
    _0x5ed4c2.fillStyle = _0x27448d;
    _0x5ed4c2.fillRect(10, 10, 80, 80);
    return _0x238d77;
  }
  function _0x53a922({
    name: _0x47ff8d,
    emoji: _0x45e0e7,
    color: _0x105516,
    monochrome: _0x15d48f
  }) {
    _0x45e0e7 = _0x45e0e7 || _0x46b8f1(_0x47ff8d);
    const _0x260c80 = 100;
    if (typeof document === "undefined") {
      return null;
    }
    const _0x236245 = document.createElement("canvas");
    _0x236245.width = _0x260c80;
    _0x236245.height = _0x260c80;
    const _0x13d321 = _0x236245.getContext("2d");
    _0x236245.width = _0x236245.height = _0x260c80;
    _0x13d321.font = _0x260c80 * 0.7 + "px \"Segoe UI\"";
    _0x13d321.textAlign = "center";
    _0x13d321.textBaseline = "middle";
    if (_0x105516 == null) {
      _0x13d321.filter = "blur(20px)";
      _0x13d321.fillText(_0x45e0e7, _0x260c80 * 0.5, _0x260c80 * 0.5);
      const _0x582fff = _0x13d321.getImageData(_0x260c80 / 2, _0x260c80 / 2, 1, 1).data;
      _0x105516 = _0x1843cf([..._0x582fff]);
      _0x13d321.filter = "none";
    }
    _0x13d321.clearRect(0, 0, _0x260c80, _0x260c80);
    if (_0x15d48f) {
      _0x13d321.fillText(_0x45e0e7, _0x260c80 * 0.5, _0x260c80 * 0.5);
      _0x13d321.fillStyle = _0x105516;
      _0x13d321.globalCompositeOperation = "multiply";
      _0x13d321.fillRect(0, 0, _0x260c80, _0x260c80);
      _0x13d321.globalCompositeOperation = "destination-in";
      _0x13d321.fillText(_0x45e0e7, _0x260c80 * 0.5, _0x260c80 * 0.5);
      _0x13d321.globalCompositeOperation = "source-over";
      _0x13d321.filter = "none";
    } else {
      _0x13d321.fillText(_0x45e0e7, _0x260c80 * 0.5, _0x260c80 * 0.5);
    }
    const _0x221473 = document.createElement("canvas");
    _0x221473.width = _0x260c80;
    _0x221473.height = _0x260c80;
    const _0x3e7e74 = _0x221473.getContext("2d");
    _0x3e7e74.filter = "saturate(0%) brightness(0.2)";
    _0x3e7e74.drawImage(_0x236245, 0, 0);
    const _0xeb58c4 = document.createElement("canvas");
    _0xeb58c4.width = _0x260c80 * 2;
    _0xeb58c4.height = _0x260c80;
    const _0x2002d0 = _0xeb58c4.getContext("2d");
    _0x2002d0.fillStyle = _0x105516;
    _0x2002d0.fillRect(0, 0, _0x260c80 * 2, _0x260c80);
    _0x2002d0.drawImage(_0x236245, 0, 0);
    _0x2002d0.translate(_0x260c80 * 1.5, _0x260c80 * 0.5);
    _0x2002d0.rotate(Math.PI);
    _0x2002d0.drawImage(_0x236245, -_0x260c80 * 0.5, -_0x260c80);
    _0x2002d0.drawImage(_0x236245, -_0x260c80 * 0.5, 0);
    return {
      top: _0x236245,
      bottom: _0x221473,
      pattern: _0xeb58c4,
      color: _0x105516
    };
  }
  function _0x1642d1(_0x4bb945, _0x333ce0) {
    return new _0x1d6f0c(_0x4bb945, {
      layers: [{
        src: _0x137e01(_0x333ce0.nick, _0x333ce0.nick)
      }, {
        level: 1,
        src: _0x137e01(_0x333ce0.main, _0x333ce0.back)
      }]
    });
  }
  function _0x26b7e8(_0x467897, _0x1c682a, _0x39c212, _0xfefe4e = 1.5) {
    return new _0x1d6f0c(_0x467897, {
      scale: _0xfefe4e,
      layers: [{
        src: _0x39c212
      }, {
        level: 0.5,
        front: true,
        src: _0x1c682a
      }]
    });
  }
  function _0x267ef6(_0x173633, _0x489ea3, _0x56c1dd) {
    let _0x485c25 = {
      colored: [],
      classic: []
    };
    for (let _0x4bf49b of _0x56c1dd) {
      _0x485c25.colored.push(new _0x467047(_0x4bf49b, _0x173633));
    }
    for (let _0xd64f1a of _0x489ea3) {
      _0x485c25.classic.push(new _0x57859e(_0xd64f1a, _0x173633));
    }
    return _0x485c25;
  }
  var _0x234972 = Object.defineProperty;
  var _0xab0e9d = Object.assign;
  var _0x5e2d74 = (_0x402628, _0x5824d2, _0x8bf421) => {
    if (typeof _0x5824d2 !== "symbol") {
      _0x5824d2 += "";
    }
    if (_0x5824d2 in _0x402628) {
      return _0x234972(_0x402628, _0x5824d2, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x8bf421
      });
    }
    return _0x402628[_0x5824d2] = _0x8bf421;
  };
  class _0x150dea extends _0x110996 {
    constructor(_0x321a99) {
      super();
      _0x5e2d74(this, "config");
      _0x5e2d74(this, "user");
      _0x5e2d74(this, "name");
      _0x5e2d74(this, "container");
      _0x5e2d74(this, "backupContainer");
      this.colors = {
        main: "black",
        back: "black",
        nick: "black",
        tail: "black",
        plate: "black",
        particles: ["black"]
      };
      this.pattern = null;
      if (_0x321a99) {
        this.useAsset(_0x321a99);
      }
    }
    replace(_0x3775e8) {
      this.release();
      for (let _0x5e1441 = 0; _0x5e1441 < 1000; _0x5e1441++) {
        let _0xf2a599 = _0x3775e8.get();
        if (_0xf2a599.name != this.name) {
          this.user.setSkin(_0x3775e8.get());
          return;
        }
      }
      console.error("COULD NOT REPLACE SKIN");
      debugger;
    }
    useAsset(_0x136245) {
      this.addAsset(_0x136245);
      if (_0x136245.content.colors) {
        this.colors = _0x136245.content.colors;
      }
      if (_0x136245.content.pattern) {
        this.pattern = _0x136245.content.pattern;
      }
      if (_0x136245.content.display) {
        if (!this.container) {
          this.container = new _0xe4713();
        }
        this.container.add(_0x136245.content.display);
      }
      if (_0x136245.content.backupDisplay) {
        if (!this.backupContainer) {
          this.backupContainer = new _0xe4713();
        }
        this.backupContainer.add(_0x136245.content.backupDisplay);
      }
    }
    release() {
      for (let _0x5e4c26 of this.assets) {
        _0x5e4c26.release(this);
      }
    }
  }
  class _0x274c05 {
    constructor(_0x160bbe, _0x14120a, _0x12becc) {
      _0x5e2d74(this, "level", 0);
      _0x5e2d74(this, "scale", 1);
      _0x5e2d74(this, "x", 0);
      _0x5e2d74(this, "y", 0);
      _0x5e2d74(this, "direction", "");
      _0x5e2d74(this, "rotation", 0);
      _0x5e2d74(this, "url", "");
      _0x5e2d74(this, "src", null);
      _0x5e2d74(this, "image", null);
      this.config = _0x160bbe;
      Object.assign(this, _0x14120a);
      this.pivot = Object.assign({
        x: 0.5,
        y: 0.5
      }, _0x14120a.pivot);
      let _0x186427 = this.url ? _0x5c6f3f(this.url) : this.src ? Promise.resolve(this.src) : null;
      if (_0x186427) {
        _0x186427.then(_0x50892c => {
          this.src = _0x50892c;
          if (this.rescale(1)) {
            if (_0x12becc) {
              _0x12becc(this);
            }
          }
        });
      }
    }
    rescale(_0x3435bf) {
      const {
        trackWidth: _0x1560eb,
        maxScale: _0x3019c3
      } = this.config;
      const _0x5e370a = _0x1560eb * _0x3019c3;
      const _0x225e30 = this.src;
      const _0x4e3e27 = _0x225e30.naturalWidth || _0x225e30.width;
      const _0x25af19 = _0x225e30.naturalHeight || _0x225e30.height;
      if (!_0x4e3e27 || !_0x25af19) {
        console.log("Не удалось установить размер " + this.url);
        return false;
      }
      const _0x2168e2 = _0x5e370a * _0x3435bf * this.scale / _0x4e3e27;
      const _0x482475 = ~~(_0x4e3e27 * _0x2168e2);
      const _0x28cc88 = ~~(_0x25af19 * _0x2168e2);
      const _0x2c9a84 = _0x482475 / _0x4e3e27;
      const _0x1f1f3f = _0x28cc88 / _0x25af19;
      const _0xd01671 = document.createElement("canvas");
      _0xd01671.width = _0x482475;
      _0xd01671.height = _0x28cc88;
      const _0x2939b7 = _0xd01671.getContext("2d");
      _0x2939b7.scale(_0x2c9a84, _0x1f1f3f);
      _0x2939b7.drawImage(_0x225e30, 0, 0);
      this.image = _0xd01671;
      return true;
    }
  }
  function _0xaddf2b(_0x50adf7) {
    const _0x4affb2 = new DOMMatrix().scale(_0x50adf7, _0x50adf7);
    return _0x4affb2;
  }
  class _0x15eddd {
    constructor(_0x316a3e, _0x4827e7 = {}, _0x96b360) {
      this.url = _0x316a3e.skinsPath + _0x4827e7.url;
      this.scale = _0x4827e7.scale || 1;
      this.src = _0x4827e7.src;
      this.ready = false;
      if (this.src) {
        this.useImage(this.src, _0x316a3e, _0x96b360);
      } else {
        _0x5c6f3f(this.url).then(_0x5ec8f7 => {
          this.useImage(_0x5ec8f7, _0x316a3e, _0x96b360);
        }).catch(_0x19deb7 => console.error(_0x19deb7, this.url));
      }
    }
    useImage(_0x2e07fb, _0x562e89, _0x3ac55c) {
      this.pattern = _0x3b74ef(_0x2e07fb, this.scale, _0x562e89.maxScale);
      this.src = _0x2e07fb;
      this.ready = true;
      if (_0x3ac55c) {
        _0x3ac55c();
      }
    }
  }
  function _0x3b74ef(_0x20c327, _0x1d0492, _0x174510) {
    const _0x4e91a7 = ~~(_0x20c327.naturalWidth || _0x20c327.width);
    const _0x67a1f8 = ~~(_0x20c327.naturalHeight || _0x20c327.height);
    const _0x523598 = _0x174510 * 100 * _0x1d0492 / _0x4e91a7;
    if (_0x4e91a7 == 0 || _0x67a1f8 == 0) {
      throw "Не удалось установить размер";
    }
    const _0x571cec = Math.floor(_0x4e91a7 * _0x523598) || 1;
    const _0x491c93 = Math.floor(_0x67a1f8 * _0x523598) || 1;
    const _0x1e8912 = document.createElement("canvas");
    _0x1e8912.width = _0x571cec;
    _0x1e8912.height = _0x491c93;
    _0x1e8912.getContext("2d").drawImage(_0x20c327, 0, 0, _0x571cec + 1, _0x491c93 + 1);
    const _0x495563 = _0x1e8912.getContext("2d").createPattern(_0x1e8912, "repeat");
    const _0x24726e = 1 / _0x174510;
    const _0x45e8a9 = _0xaddf2b(_0x24726e);
    if (_0x495563.setTransform) {
      _0x495563.setTransform(_0x45e8a9);
    }
    return _0x495563;
  }
  class _0x1d6f0c {
    constructor(_0x4571ac, _0x267960, _0x189694) {
      this.layers = [];
      this.scale = _0x267960.scale || 1;
      this.x = 0;
      this.y = 0;
      this.ready = false;
      Object.assign(this, _0x267960);
      let _0x48b518 = 0;
      this.layers = (this.layers || []).map(_0x304b29 => new _0x274c05(_0x4571ac, _0xab0e9d(_0xab0e9d({}, _0x304b29), {
        url: _0x304b29.url ? _0x4571ac.skinsPath + _0x304b29.url : undefined
      }), _0x1d4f42 => {
        _0x1d4f42.rescale(this.scale);
        if (this.layers.length === ++_0x48b518) {
          this.ready = true;
          if (_0x189694) {
            _0x189694();
          }
        }
      }));
      this.frontLayers = this.layers.filter(_0x126bca => _0x126bca.level >= 1 || _0x126bca.front).sort((_0x1c0001, _0x447d9c) => _0x1c0001.level - _0x447d9c.level);
      this.backLayers = this.layers.filter(_0x37dbcb => _0x37dbcb.level < 1 && !_0x37dbcb.front).sort((_0x3eacd7, _0xbf746f) => _0xbf746f.level - _0x3eacd7.level);
    }
  }
  class _0xe4713 {
    constructor() {
      this.displays = [];
      this.frontLayers = [];
      this.backLayers = [];
      this.maxScale = 0;
    }
    get ready() {
      return this.displays.every(_0x1bfedc => _0x1bfedc.ready);
    }
    sort() {
      this.frontLayers = [].concat(...this.displays.map(_0x24d8cc => _0x24d8cc.frontLayers.map(_0x210c20 => ({
        display: _0x24d8cc,
        layer: _0x210c20
      })))).sort((_0xd8228e, _0x254bf9) => _0xd8228e.layer.level - _0x254bf9.layer.level);
      this.backLayers = [].concat(...this.displays.map(_0x26be70 => _0x26be70.backLayers.map(_0x4381fd => ({
        display: _0x26be70,
        layer: _0x4381fd
      })))).sort((_0xa3101, _0x4a01a1) => _0x4a01a1.layer.level - _0xa3101.layer.level);
      this.maxScale = Math.max(...this.frontLayers.map(_0x36a5c0 => _0x36a5c0.display.scale * _0x36a5c0.layer.scale));
    }
    add(_0x5a8c8e) {
      this.displays.push(_0x5a8c8e);
      this.sort();
    }
    remove(_0x1a836b) {
      this.displays = this.displays.filter(_0xc28836 => _0xc28836 !== _0x1a836b);
      this.sort();
    }
  }
  var _0x469868 = Object.assign;
  let _0x306e4e;
  let _0x3ab8ff;
  let _0x334b6a;
  let _0x313933;
  const _0x2eb1da = 100;
  let _0x37efce = {
    smoothingMode: 0,
    simplified: false
  };
  const _0x1d8f96 = (_0x46dae8, _0x50eb4b, _0x1ae03c, _0x15ef69) => {
    if (_0x313933 !== _0x46dae8 || _0x3ab8ff !== _0x1ae03c || _0x334b6a !== _0x15ef69) {
      _0x306e4e = _0x46dae8.createLinearGradient(_0x50eb4b.width / 2, 0, _0x50eb4b.width / 2, _0x50eb4b.height);
      _0x306e4e.addColorStop(0, _0x1ae03c);
      _0x306e4e.addColorStop(1, _0x15ef69);
    }
    return _0x306e4e;
  };
  const _0x17a769 = (_0x3360cd, _0x587f1a, _0x3478c6, _0x7cf923) => {
    _0x3360cd.strokeStyle = _0x3478c6;
    _0x3360cd.lineWidth = _0x7cf923;
    _0x3360cd.stroke(_0x587f1a);
  };
  const _0x1e1669 = (_0x368628, _0x30fbf9, _0x82a3fd, _0x2c9a29, _0x2f132d, _0xd51f22) => {
    let _0x27677f = _0x82a3fd.tail.polyline.segments;
    let _0x27e47f = _0x27677f.length;
    if (_0x27e47f) {
      _0x368628.beginPath();
      let _0x255a44 = _0x93f452(_0x368628, _0x27677f, {
        stopNear: _0x82a3fd.extrapolatedAt,
        center: _0x2f132d,
        distance: 10
      });
      let _0x495b96 = _0x82a3fd.extrapolatedAt;
      if (_0x255a44 && _0x320aa6.fromDirection(_0x82a3fd.movement).dot(_0x495b96.clone().sub(_0x255a44)) > 0) {
        _0x368628.lineCap = "round";
        _0x368628.lineTo(_0x495b96.x, _0x495b96.y);
      }
      _0x368628.lineWidth = _0x2c9a29;
      _0x368628.strokeStyle = _0x30fbf9;
      _0x368628.stroke();
    }
  };
  const _0x339887 = (_0x50f753, _0x88437b, _0x453eb2, _0x413602, _0x1c4735, _0x399445) => {
    let _0x6bb9c2 = _0x453eb2.tail.polyline.segments;
    let _0x38256f = _0x6bb9c2.length;
    if (_0x38256f) {
      _0x50f753.beginPath();
      _0x93f452(_0x50f753, _0x6bb9c2);
      _0x50f753.lineWidth = _0x413602;
      _0x50f753.strokeStyle = _0x88437b;
      _0x50f753.lineTo(_0x453eb2.at.x, _0x453eb2.at.y);
      _0x50f753.stroke();
    }
  };
  const _0x5c9aab = (_0x4ab01f, _0x37f069, _0x415013, _0x503137, _0x48e725, _0x165150) => {
    const {
      devicePixelRatio: _0x133122
    } = window;
    const _0x4589b2 = _0x503137 * 24 / _0x133122;
    _0x4ab01f.save();
    let _0x7d3ff8 = _0x37f069.extrapolatedAt;
    _0x4ab01f.translate(_0x7d3ff8.x, _0x7d3ff8.y);
    _0x4ab01f.scale(1.001 / _0x415013, 1.001 / _0x415013);
    _0x4ab01f.font = _0x4589b2 + "px " + _0x48e725;
    _0x4ab01f.textAlign = "center";
    _0x4ab01f.textBaseline = "bottom";
    let _0x7909ae = _0x37f069.name;
    if (_0x37f069.fsm) {
      const _0x5b1224 = ["зевака", "убийца", "хапуга", "дурачок"];
      _0x7909ae += " (" + _0x5b1224[_0x37f069.type] + ")";
    }
    const _0x556811 = ~~(_0x415013 * -12);
    const _0x92e445 = "#363331";
    _0x4ab01f.fillStyle = _0x92e445;
    _0x4ab01f.filter = "brightness(0)";
    _0x4ab01f.fillText(_0x7909ae, 1, _0x556811 + 1);
    _0x4ab01f.filter = "none";
    let _0x3749ca = "#dddddd";
    _0x4ab01f.fillStyle = _0x3749ca;
    _0x4ab01f.fillText(_0x7909ae, 0, _0x556811);
    _0x4ab01f.strokeStyle = "#000";
    _0x4ab01f.lineWidth = 0.2;
    _0x4ab01f.strokeText(_0x7909ae, 0, _0x556811);
    let _0xca6dab = _0x37f069.director instanceof _0x55140 ? _0x37f069.director : _0x37f069.autopilotDirector;
    let _0x19ecd2 = _0xca6dab.ai;
    if (_0x165150) {
      _0x4ab01f.font = _0x4589b2 * 0.7 + "px " + _0x48e725;
      _0x4ab01f.fillStyle = "black";
      let _0xff450 = _0x19ecd2.state;
      if (_0xff450 === "capture") {
        _0xff450 += " (" + Math.round(_0xca6dab.capSquare) + "/" + Math.round(_0x37f069.tail.length) + "/" + Math.round(_0x37f069.baseDistance) + ") " + _0xca6dab.aspect + " " + _0xca6dab.factors;
      }
      _0x4ab01f.fillText(_0xff450, 0, _0x415013 * -10 - 60 / _0x133122);
    }
    _0x4ab01f.restore();
  };
  const _0x40e105 = () => {
    if (!Path2D) {
      return;
    }
    const _0x53a35e = new Path2D();
    const _0xc71f73 = 5;
    _0x53a35e.moveTo(_0xc71f73 * -3, _0xc71f73 * -3);
    _0x53a35e.lineTo(_0xc71f73 * -1, _0xc71f73 * -1);
    _0x53a35e.lineTo(_0xc71f73 * 0, _0xc71f73 * -3);
    _0x53a35e.lineTo(_0xc71f73 * 1, _0xc71f73 * -1);
    _0x53a35e.lineTo(_0xc71f73 * 3, _0xc71f73 * -3);
    _0x53a35e.lineTo(_0xc71f73 * 2, _0xc71f73 * 1);
    _0x53a35e.lineTo(_0xc71f73 * -2, _0xc71f73 * 1);
    _0x53a35e.closePath();
    return _0x53a35e;
  };
  const _0x38ca36 = _0x40e105();
  const _0x189e42 = (_0x4f4531, _0x1aa95c, _0x175ef3, _0x238274) => {
    const {
      devicePixelRatio: _0x46ed12
    } = window;
    const _0x2f2408 = _0x238274 * 24 / _0x46ed12;
    _0x4f4531.save();
    let _0x4b8ec3 = _0x1aa95c.extrapolatedAt;
    _0x4f4531.translate(_0x4b8ec3.x, _0x4b8ec3.y);
    _0x4f4531.scale(1 / (_0x175ef3 * _0x46ed12), 1 / (_0x175ef3 * _0x46ed12));
    _0x4f4531.fillStyle = "#ffff00";
    _0x4f4531.strokeStyle = "#ff8800";
    _0x4f4531.lineJoin = "round";
    _0x4f4531.lineWidth = 1;
    _0x4f4531.translate(0, _0x175ef3 * -10 * _0x46ed12);
    _0x4f4531.translate(0, -_0x2f2408 * _0x46ed12);
    _0x4f4531.scale(_0x238274, _0x238274);
    _0x4f4531.translate(0, -4);
    _0x4f4531.translate(0, -12);
    _0x4f4531.fill(_0x38ca36);
    _0x4f4531.stroke(_0x38ca36);
    _0x4f4531.restore();
  };
  const _0x34e310 = () => {
    const _0x1212d2 = new Path2D();
    const _0xe51388 = 1.6;
    _0x1212d2.moveTo(_0xe51388 * 0, _0xe51388 * -7);
    _0x1212d2.lineTo(_0xe51388 * 5, _0xe51388 * -6);
    _0x1212d2.lineTo(_0xe51388 * 7, _0xe51388 * -3);
    _0x1212d2.lineTo(_0xe51388 * 6, _0xe51388 * 2);
    _0x1212d2.lineTo(_0xe51388 * 4, _0xe51388 * 3);
    _0x1212d2.lineTo(_0xe51388 * 3, _0xe51388 * 6);
    _0x1212d2.lineTo(_0xe51388 * 0, _0xe51388 * 7);
    _0x1212d2.lineTo(_0xe51388 * -3, _0xe51388 * 6);
    _0x1212d2.lineTo(_0xe51388 * -4, _0xe51388 * 3);
    _0x1212d2.lineTo(_0xe51388 * -6, _0xe51388 * 2);
    _0x1212d2.lineTo(_0xe51388 * -7, _0xe51388 * -3);
    _0x1212d2.lineTo(_0xe51388 * -5, _0xe51388 * -6);
    _0x1212d2.closePath();
    _0x1212d2.arc(_0xe51388 * -3, _0xe51388 * -1, _0xe51388 * 2, 0, Math.PI * 2, true);
    _0x1212d2.closePath();
    _0x1212d2.arc(_0xe51388 * 3, _0xe51388 * -1, _0xe51388 * 2, 0, Math.PI * 2, true);
    _0x1212d2.closePath();
    _0x1212d2.moveTo(_0xe51388 * 0, _0xe51388 * 1);
    _0x1212d2.lineTo(_0xe51388 * -2, _0xe51388 * 3);
    _0x1212d2.lineTo(_0xe51388 * 0, _0xe51388 * 4);
    _0x1212d2.lineTo(_0xe51388 * 2, _0xe51388 * 3);
    _0x1212d2.closePath();
    return _0x1212d2;
  };
  const _0xa5b129 = _0x34e310();
  const _0x2d6124 = (_0x3a1249, _0x220500, _0x2f447e, _0x12d026) => {
    _0x3a1249.save();
    _0x3a1249.fillStyle = "#ffffffcc";
    _0x3a1249.translate(_0x220500, _0x2f447e);
    _0x3a1249.scale(_0x12d026, _0x12d026);
    _0x3a1249.fill(_0xa5b129);
    _0x3a1249.restore();
  };
  const _0x50d4c1 = (_0x224883, _0x384836, _0x2d6bab, _0x34db31, _0x2eaceb) => {
    const {
      trackWidth: _0x28de14
    } = _0x224883;
    if (_0x2eaceb.image) {
      const _0x17e2de = _0x2eaceb.image.naturalWidth || _0x2eaceb.image.width;
      const _0x140aab = _0x2eaceb.image.naturalHeight || _0x2eaceb.image.height;
      const _0x20bede = _0x28de14 * _0x34db31.scale * _0x2eaceb.scale / _0x17e2de;
      _0x384836.save();
      let _0xd705c9 = _0x2d6bab.extrapolatedAt;
      let _0x87160b = _0x2d6bab.extrapolatedFacing.toAngle();
      _0x384836.translate(_0xd705c9.x, _0xd705c9.y - _0x224883.baseHeight * _0x2eaceb.level);
      _0x384836.rotate(_0x87160b + Math.PI / 2);
      _0x384836.translate((_0x34db31.x + _0x2eaceb.x) * _0x28de14, (_0x34db31.y + _0x2eaceb.y) * _0x28de14);
      let _0x3a4880 = 0;
      if (_0x2eaceb.direction === "target") {
        const _0x542223 = _0x2d6bab.extrapolatedDirection.toAngle();
        _0x3a4880 += _0x542223 - _0x87160b;
      }
      if (_0x2eaceb.direction === "billboard") {
        _0x3a4880 += -_0x87160b - Math.PI / 2;
      }
      if (_0x2eaceb.rotation) {
        _0x3a4880 += _0x2eaceb.rotation * 0.0174533;
      }
      if (_0x3a4880) {
        _0x384836.rotate(_0x3a4880);
      }
      _0x384836.scale(_0x20bede, _0x20bede);
      _0x384836.translate(_0x17e2de * -_0x2eaceb.pivot.x, _0x140aab * -_0x2eaceb.pivot.y);
      _0x384836.drawImage(_0x2eaceb.image, 0, 0);
      _0x384836.restore();
    }
  };
  const _0x3fed07 = (_0x4066e0, _0x2e43c8, _0x493103, _0x2f8506, _0x5cb1a0) => {
    for (let _0x23238d of _0x2f8506) {
      if (!_0x23238d) {
        continue;
      }
      const _0x127801 = _0x5cb1a0 ? _0x23238d.frontLayers : _0x23238d.backLayers;
      _0x127801.forEach(_0x492cd6 => _0x50d4c1(_0x4066e0, _0x2e43c8, _0x493103, _0x492cd6.display, _0x492cd6.layer));
      return;
    }
  };
  const _0x1e1b7b = (_0x2cb298, _0x3195f3, _0x236b26, _0x1b507d, _0x14fe8a, _0x2c1359, _0x17493f) => {
    const [_0xbf1056, _0x2f257d, _0x5591ae, _0x324321] = _0x2c1359;
    _0x2cb298.beginPath();
    _0x2cb298.moveTo(_0x3195f3 + _0xbf1056, _0x236b26);
    _0x2cb298.lineTo(_0x3195f3 + _0x1b507d - _0x2f257d, _0x236b26);
    _0x2cb298.quadraticCurveTo(_0x3195f3 + _0x1b507d, _0x236b26, _0x3195f3 + _0x1b507d, _0x236b26 + _0x2f257d);
    _0x2cb298.lineTo(_0x3195f3 + _0x1b507d, _0x236b26 + _0x14fe8a - _0x5591ae);
    _0x2cb298.quadraticCurveTo(_0x3195f3 + _0x1b507d, _0x236b26 + _0x14fe8a, _0x3195f3 + _0x1b507d - _0x5591ae, _0x236b26 + _0x14fe8a);
    _0x2cb298.lineTo(_0x3195f3 + _0x324321, _0x236b26 + _0x14fe8a);
    _0x2cb298.quadraticCurveTo(_0x3195f3, _0x236b26 + _0x14fe8a, _0x3195f3, _0x236b26 + _0x14fe8a - _0x324321);
    _0x2cb298.lineTo(_0x3195f3, _0x236b26 + _0xbf1056);
    _0x2cb298.quadraticCurveTo(_0x3195f3, _0x236b26, _0x3195f3 + _0xbf1056, _0x236b26);
    _0x2cb298.closePath();
    _0x2cb298.fill();
    if (_0x17493f) {
      _0x2cb298.strokeStyle = "#00000099";
      _0x2cb298.lineWidth = _0x17493f;
      _0x2cb298.stroke();
    }
  };
  function _0x163a9d(_0x1ab442) {
    const _0x497c4e = document.createElement("canvas");
    _0x497c4e.style.display = "none";
    _0x497c4e.style.width = "100%";
    _0x497c4e.style.height = "100%";
    _0x497c4e.style.position = "absolute";
    _0x497c4e.style.top = "50%";
    _0x497c4e.style.left = "50%";
    _0x497c4e.style.transform = "translate(-50%, -50%)";
    _0x497c4e.id = "PaperCanvas" + Math.random();
    if (_0x1ab442) {
      _0x1ab442.appendChild(_0x497c4e);
    }
    return _0x497c4e;
  }
  function _0x3366d7(_0x371469) {
    let _0x2e0fa1 = Infinity;
    let _0x777d2a = 0;
    let _0x8fd34 = Infinity;
    let _0x32d826 = 0;
    _0x371469.base.polygon.segments.forEach(_0x4a5fe3 => {
      const {
        x: _0x2cecad,
        y: _0x4ecee5
      } = _0x4a5fe3.start.at;
      _0x2e0fa1 = Math.min(_0x2e0fa1, _0x2cecad);
      _0x777d2a = Math.max(_0x777d2a, _0x2cecad);
      _0x8fd34 = Math.min(_0x8fd34, _0x4ecee5);
      _0x32d826 = Math.max(_0x32d826, _0x4ecee5);
    });
    const _0x1cc20c = _0x777d2a - _0x2e0fa1;
    const _0x3a19c8 = _0x32d826 - _0x8fd34;
    const _0x3e376a = Math.max(_0x1cc20c, _0x3a19c8);
    const _0x12d4c8 = new _0x320aa6(_0x2e0fa1 + _0x1cc20c / 2, _0x8fd34 + _0x3a19c8 / 2);
    const _0x4bf46d = 500;
    const _0x10ba7c = _0x4bf46d * 0.95 / _0x3e376a;
    const _0x2918f6 = _0x4bf46d / 100;
    let _0x21f609;
    if (typeof document !== "undefined") {
      const _0xae3d18 = document.createElement("canvas");
      _0xae3d18.width = _0x4bf46d;
      _0xae3d18.height = _0x4bf46d;
      _0xae3d18.id = "resultCanvas";
      const _0x4aa22f = _0xae3d18.getContext("2d");
      _0x4aa22f.scale(_0x10ba7c, _0x10ba7c);
      _0x4aa22f.translate(_0x4bf46d / 2 / _0x10ba7c - _0x12d4c8.x, _0x4bf46d / 2 / _0x10ba7c - _0x12d4c8.y);
      _0x4aa22f.translate(0, _0x2918f6 / _0x10ba7c);
      _0x4aa22f.fillStyle = _0x371469.skin.colors.back;
      _0x4aa22f.fill(_0x371469.base.polygon.path);
      _0x4aa22f.translate(0, _0x2918f6 * -2 / _0x10ba7c);
      _0x4aa22f.fillStyle = _0x371469.skin.pattern && _0x371469.skin.pattern.pattern || _0x371469.skin.colors.main;
      _0x4aa22f.fill(_0x371469.base.polygon.path);
      _0x21f609 = _0xae3d18.toDataURL("image/png");
    }
    return _0x21f609;
  }
  function _0x56d00d(_0x16f00a, _0x40cc90) {
    _0x16f00a.moveTo(_0x40cc90[0].start.at.x, _0x40cc90[0].start.at.y);
    let _0x1c7be4 = _0x40cc90.length;
    let _0x41b608;
    for (let _0x5dda59 = 0; _0x5dda59 < _0x1c7be4; _0x5dda59++) {
      _0x41b608 = _0x40cc90[_0x5dda59].end.at;
      _0x16f00a.lineTo(_0x41b608.x, _0x41b608.y);
    }
  }
  function _0x93f452(_0x3298da, _0xbb5bd3, {
    algorithm: _0x405899,
    center: _0x3fbeb5,
    distance: _0x17e8b8,
    stopNear: _0x3b975d
  } = {}) {
    _0x3298da.moveTo(_0xbb5bd3[0].start.at.x, _0xbb5bd3[0].start.at.y);
    let _0x15aec3 = _0xbb5bd3.length;
    let _0x3bf9ca;
    let _0x56f011;
    if (_0x3fbeb5 && !_0x17e8b8) {
      _0x17e8b8 = _0x2eb1da;
    }
    if (_0x405899 == undefined) {
      _0x405899 = _0x37efce.smoothingMode;
    }
    let _0x56a88a;
    for (let _0x499fcd = 0; _0x499fcd < _0x15aec3 - 1; _0x499fcd++) {
      _0x56a88a = _0xbb5bd3[_0x499fcd].end.at;
      let _0x3246e7 = _0x405899;
      if (_0xbb5bd3[_0x499fcd].vector.length2() < 1) {
        continue;
      }
      if (_0x499fcd == 0 || _0xbb5bd3[_0x499fcd - 1].vector.length2() < 1 || _0x17e8b8 && _0x3fbeb5 && _0x56a88a.distance(_0x3fbeb5) > _0x17e8b8) {
        _0x3246e7 = 0;
      }
      switch (_0x3246e7) {
        case 0:
          _0x3298da.lineTo(_0x56a88a.x, _0x56a88a.y);
          break;
        case 1:
          _0x3bf9ca = _0xbb5bd3[_0x499fcd - 1].end.at;
          _0x56f011 = _0xbb5bd3[_0x499fcd - 1].vector.clone().scale(0.3).add(_0x3bf9ca);
          _0x3298da.quadraticCurveTo(_0x56f011.x, _0x56f011.y, _0x56a88a.x, _0x56a88a.y);
          break;
        case 2:
          _0x3bf9ca = _0xbb5bd3[_0x499fcd - 1].end.at;
          _0x56f011 = _0xbb5bd3[_0x499fcd - 1].vector.clone().add(_0xbb5bd3[_0x499fcd].vector).scale(0.25).add(_0x3bf9ca);
          _0x3298da.lineTo(_0x56f011.x, _0x56f011.y);
          _0x3298da.lineTo(_0x56a88a.x, _0x56a88a.y);
          break;
      }
      if (_0x3b975d && _0x499fcd > _0x15aec3 - 6 && _0x56a88a.distance2(_0x3b975d) < 30) {
        break;
      }
    }
    return _0x56a88a;
  }
  function _0x18b595(_0x4f1b07, _0x12104e, _0xf4ede5, _0x233555) {
    _0x4f1b07.fillStyle = _0xf4ede5;
    if (_0x37efce.smoothingMode != 0 && (_0x233555 || _0x12104e instanceof _0x452e65)) {
      _0x4f1b07.beginPath();
      _0x93f452(_0x4f1b07, _0x12104e.segments, _0x233555);
      if (_0x12104e instanceof _0x1eff3e) {
        _0x4f1b07.closePath();
      }
      _0x4f1b07.fill();
    } else if (_0x12104e instanceof _0x1eff3e) {
      _0x4f1b07.fill(_0x12104e.path);
    }
  }
  function _0x198b9c(_0x324bee) {
    if (_0x324bee) {
      let _0x12855b = new Path2D();
      _0x93f452(_0x12855b, _0x324bee.segments, _0x469868(_0x469868({}, _0x324bee), {
        algorithm: 0
      }));
      let _0x2fd8c4 = _0x324bee.segments[0].start.at;
      _0x12855b.lineTo(_0x2fd8c4.x, _0x2fd8c4.y);
      _0x324bee.path = _0x12855b;
    }
  }
  var _0x4473ac = Object.defineProperty;
  var _0x176cfd = Object.assign;
  var _0x564932 = (_0x494608, _0x4a8973, _0x5aef47) => {
    if (typeof _0x4a8973 !== "symbol") {
      _0x4a8973 += "";
    }
    if (_0x4a8973 in _0x494608) {
      return _0x4473ac(_0x494608, _0x4a8973, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x5aef47
      });
    }
    return _0x494608[_0x4a8973] = _0x5aef47;
  };
  class _0x180be5 {
    constructor(_0x155eb1) {
      _0x564932(this, "limit", 10);
      _0x564932(this, "entries", []);
      _0x564932(this, "type");
      _0x564932(this, "category");
      _0x564932(this, "player");
      _0x564932(this, "playerScore");
      _0x564932(this, "playerPlace");
      for (let _0x1de569 in _0x155eb1) {
        this[_0x1de569] = _0x155eb1[_0x1de569];
      }
    }
    add(_0x58ee39) {
      let _0x32cbeb = this.entries.find(_0x102499 => _0x102499.player == _0x58ee39.player);
      if (_0x32cbeb) {
        if (_0x32cbeb.score < _0x58ee39.score) {
          this.entries = this.entries.filter(_0x540f44 => _0x540f44.player != _0x58ee39.player);
        } else {
          return;
        }
      }
      let _0x40b195 = false;
      if (_0x58ee39.player == this.player && _0x58ee39.score > this.playerScore) {
        this.playerScore = _0x58ee39.score;
        _0x40b195 = true;
      }
      this.entries.push(_0x58ee39);
      this.entries = this.entries.sort((_0x4549a2, _0x109635) => _0x109635.score - _0x4549a2.score);
      this.entries = this.entries.slice(0, this.limit);
      if (this.entries.find(_0x1e3133 => _0x1e3133 == _0x58ee39) || _0x40b195) {
        return true;
      } else {
        return false;
      }
    }
    playerInTop(_0x16971b) {
      return (_0x16971b == null ? this.entries : this.entries.slice(0, _0x16971b)).find(_0x82d3df => _0x82d3df.player == this.player);
    }
    entriesWithPlayer(_0x543bef = 10) {
      let _0x51ebbe = this.entries;
      if (_0x543bef != null) {
        _0x51ebbe = _0x51ebbe.slice(0, _0x543bef);
      }
      if (!this.playerInTop(_0x543bef) && this.player) {
        _0x51ebbe = [..._0x51ebbe.slice(0, _0x543bef - 1), {
          player: this.player,
          score: this.playerScore || 0,
          place: this.playerPlace
        }];
      }
      return _0x51ebbe;
    }
  }
  class _0x2517c0 {
    constructor(_0x62a94d) {
      _0x564932(this, "leaderboards", []);
      this.events = new _0xf760a1();
      try {
        if (_0x62a94d && Array.isArray(_0x62a94d)) {
          for (let _0x1db122 of _0x62a94d) {
            this.leaderboards.push(new _0x180be5(_0x1db122));
          }
        }
      } catch (_0x35b07f) {
        console.log("leaderboard creation error", _0x62a94d, _0x35b07f);
      }
    }
    serialize() {
      return JSON.stringify(this);
    }
    add(_0x194642) {
      if (!Array.isArray(_0x194642)) {
        _0x194642 = [_0x194642];
      }
      let _0x29f4e1;
      for (let _0x11a61f of _0x194642) {
        for (let _0x64ec57 of this.leaderboards) {
          if (_0x64ec57.type == _0x11a61f.type) {
            let _0x32b35b = _0x64ec57.add(_0x11a61f);
            if (_0x32b35b) {
              _0x29f4e1 = _0x29f4e1 || [];
              _0x29f4e1.push(_0x176cfd(_0x176cfd({}, _0x11a61f), {
                category: _0x64ec57.category
              }));
            }
          }
        }
      }
      if (_0x29f4e1 && _0x29f4e1.length > 0) {
        this.events.emit({
          event: "newRecords",
          records: _0x29f4e1
        });
      }
      return _0x29f4e1;
    }
  }
  var _0x3ca8bd = Object.defineProperty;
  var _0x184dcc = Object.assign;
  var _0x2d440e = (_0x101dca, _0x49808d, _0x4fa754) => {
    if (typeof _0x49808d !== "symbol") {
      _0x49808d += "";
    }
    if (_0x49808d in _0x101dca) {
      return _0x3ca8bd(_0x101dca, _0x49808d, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x4fa754
      });
    }
    return _0x101dca[_0x49808d] = _0x4fa754;
  };
  var _0x4bf94f = (_0x4962ca, _0x48ac25, _0x13e321) => {
    return new Promise((_0x5561c7, _0x4b7d01) => {
      var _0x53a674 = _0xaac59d => {
        try {
          _0x54209b(_0x13e321.next(_0xaac59d));
        } catch (_0x4a1c49) {
          _0x4b7d01(_0x4a1c49);
        }
      };
      var _0x1dd5f4 = _0x426854 => {
        try {
          _0x54209b(_0x13e321.throw(_0x426854));
        } catch (_0x3652eb) {
          _0x4b7d01(_0x3652eb);
        }
      };
      var _0x54209b = _0x12d0d9 => {
        if (_0x12d0d9.done) {
          return _0x5561c7(_0x12d0d9.value);
        } else {
          return Promise.resolve(_0x12d0d9.value).then(_0x53a674, _0x1dd5f4);
        }
      };
      _0x54209b((_0x13e321 = _0x13e321.apply(_0x4962ca, _0x48ac25)).next());
    });
  };
  const _0x4badae = 5;
  const _0xb9eb30 = class {
    constructor(_0x56ada4, _0x59e7d2, _0x3706f0, _0x4ce0d2) {
      _0x2d440e(this, "shortName");
      _0x2d440e(this, "prefix");
      _0x2d440e(this, "mode");
      _0x2d440e(this, "httpServer");
      _0x2d440e(this, "gameServer");
      _0x2d440e(this, "leaderboards");
      var _0x2e8416;
      this.config = _0x59e7d2;
      this.events = new _0xf760a1();
      this.events.bind(_0x4ce0d2);
      this.environment = _0x3706f0;
      this.masterServer = (_0x2e8416 = _0x59e7d2.servers.master) == null ? undefined : _0x2e8416.uri;
      _0x56ada4.replace(/[^0-9a-zA-Z_-]/g, () => Math.random().toString(36)[3]).toLowerCase();
      let _0x276d21 = Object.keys(_0x59e7d2.prefixes).filter(_0x1f3aa3 => _0x56ada4.substr(0, _0x1f3aa3.length) === _0x1f3aa3).sort().reverse();
      let _0xd85621 = _0x276d21[0];
      let _0x487bf5 = "";
      if (!_0xd85621) {
        _0x487bf5 = _0x56ada4;
        _0xd85621 = _0x59e7d2.defaultInvitePrefix;
      } else {
        _0x487bf5 = _0x56ada4.substr(_0xd85621.length);
      }
      this.mode = _0x59e7d2.prefixes[_0xd85621].modeName;
      console.log("Game mode " + this.mode);
      if (_0x487bf5.length === 0) {
        _0x487bf5 = String.fromCharCode(97 + Math.floor(Math.random() * 26)) + Math.random().toString(36).substring(2, 8);
      }
      this.shortName = _0x487bf5;
      this.prefix = _0xd85621;
      this.pickServers(_0x59e7d2.prefixes[_0xd85621].servers);
    }
    get name() {
      return this.prefix + this.shortName;
    }
    pickServers(_0x46bf03) {
      return _0x4bf94f(this, null, function* () {
        yield _0x45f3ce();
        if (_0x46bf03) {
          if (_0x46bf03.length > 0) {
            yield this.pickHttpServer(_0x46bf03);
          } else {
            yield this.httpServerPicked(_0x46bf03[0].uri);
          }
        }
        this.events.emit({
          event: "serverPicked"
        });
      });
    }
    pickHttpServer(_0x22786d) {
      let _0x568d45 = {};
      let _0x4d3478 = {};
      for (let _0x2ee78a of _0x22786d) {
        _0x568d45[_0x2ee78a.uri] = [];
        let _0x4f5255 = _0x144a88 => {
          if (_0x144a88.event && _0x144a88.event === "pong" && _0x568d45) {
            let _0xc366a8 = Date.now() - _0x144a88.time;
            _0x568d45[_0x2ee78a.uri].push(_0xc366a8);
          }
        };
        for (let _0x111d4b = 0; _0x111d4b < _0x4badae; _0x111d4b++) {
          _0x1339a6(_0x2ee78a.uri, {
            cmd: "ping",
            time: Date.now()
          }, _0x4f5255);
        }
        _0x1339a6(_0x2ee78a.uri, {
          cmd: "cpu"
        }, _0x1f5004 => _0x4d3478[_0x2ee78a.uri] = _0x1f5004);
      }
      return new Promise(_0x6d9641 => {
        const _0x2e1a48 = () => {
          let _0x517ad2 = {};
          for (let _0x55c6cf in _0x568d45) {
            if (_0x568d45[_0x55c6cf].length >= _0x4badae) {
              _0x517ad2[_0x55c6cf] = _0x108a5c(_0x568d45[_0x55c6cf]) / _0x568d45[_0x55c6cf].length;
            }
          }
          if (Object.keys(_0x517ad2).length == 0) {
            console.log("Server not found");
            this.events.emit({
              event: "connectionFailure"
            });
            return;
          }
          for (let _0x45ed38 in _0x517ad2) {
            if (Number(_0x4d3478[_0x45ed38]) && this.config.CPUPenalty) {
              _0x517ad2[_0x45ed38] += (Math.max(0, Number(_0x4d3478[_0x45ed38]) - (this.config.CPUBaseline || 0)) || 1) * this.config.CPUPenalty;
            }
            console.log("Ping to " + _0x45ed38 + " : " + ~~_0x517ad2[_0x45ed38] + "ms");
          }
          this.averagePing = _0x517ad2;
          let _0x2883e7 = Object.keys(_0x517ad2).sort((_0x2a84bb, _0x55fbfb) => _0x517ad2[_0x2a84bb] - _0x517ad2[_0x55fbfb]);
          this.httpServer = _0x2883e7[0];
          if (this.config.prefixes && this.config.prefixes[this.prefix]) {
            let _0x42605f = this.config.prefixes[this.prefix];
            let _0x40d9d9 = _0x22786d.find(_0x3c6990 => _0x3c6990.uri == this.httpServer);
            this.serverName = _0x40d9d9.name;
            this.prefix = _0x42605f.mode.prefix + "-" + _0x40d9d9.name;
          }
          this.httpServerPicked(_0x2883e7[0]);
          console.log("Using server", this.httpServer);
          console.log("Room name set to", this.name);
          this.events.emit({
            event: "nameChanged",
            name: this.name
          });
          _0x6d9641();
          clearInterval(_0x21b393);
          _0x568d45 = null;
        };
        let _0x21b393 = setInterval(_0x2e1a48, 1500);
      });
    }
    get nameWithPrefix() {
      return (_0xb9eb30.useModePrefix ? this.mode + "|" : "") + this.name;
    }
    httpServerPicked(_0x1b877c) {
      return _0x4bf94f(this, null, function* () {
        this.httpServer = _0x1b877c;
        if (!this.masterServer) {
          this.masterServer = this.httpServer;
        }
        this.loadLeaderboards();
        this.events.emit({
          event: "nameChanged",
          name: this.name
        });
        yield this.pickGameServer(_0x1b877c);
      });
    }
    pickGameServer(_0x52c05f) {
      return new Promise(_0x17b1b7 => {
        console.log("Requesting game server for", this.name);
        _0x1339a6(_0x52c05f, {
          cmd: "socket",
          room: this.name
        }, _0x2f6a50 => {
          this.gameServer = _0x2f6a50.uri;
          console.log("Using game server", this.gameServer);
          this.events.emit({
            event: "gameServerPicked",
            gameServer: this.gameServer
          });
          _0x17b1b7();
        });
      });
    }
    loadLeaderboards() {
      return _0x4bf94f(this, null, function* () {
        let _0x4d1c31 = this.environment.visibleName;
        this.leaderboards = new _0x2517c0([{
          type: "kills",
          category: this.nameWithPrefix + ":kills:daily",
          player: _0x4d1c31,
          limit: 10
        }, {
          type: "area",
          category: this.nameWithPrefix + ":area:daily",
          player: _0x4d1c31,
          limit: 10
        }]);
        let _0x17f383 = [];
        for (let _0x2d0cf9 of this.leaderboards.leaderboards) {
          _0x17f383.push({
            cmd: "top",
            category: _0x2d0cf9.category,
            limit: 10
          }, {
            cmd: "score",
            category: _0x2d0cf9.category,
            player: _0x4d1c31
          }, {
            cmd: "place",
            category: _0x2d0cf9.category,
            player: _0x4d1c31
          });
        }
        let _0xbc0321 = yield _0x1339a6(this.masterServer + "/leaderboards", _0x17f383);
        console.log("LB requests results", _0xbc0321);
        for (let _0x4e9a8b = 0; _0x4e9a8b < _0xbc0321.length / 3; _0x4e9a8b++) {
          let _0x2dcc20 = this.leaderboards.leaderboards[_0x4e9a8b];
          _0x2dcc20.entries = _0xbc0321[_0x4e9a8b * 3].map(([_0x5b6842, _0x31baf5]) => ({
            player: _0x5b6842,
            score: _0x31baf5
          }));
          _0x2dcc20.playerScore = _0xbc0321[_0x4e9a8b * 3 + 1];
          _0x2dcc20.playerPlace = _0xbc0321[_0x4e9a8b * 3 + 2];
        }
        this.events.emit({
          event: "leaderboardsLoaded",
          leaderboards: this.leaderboards
        });
      });
    }
    addRecord(_0x41ee8c) {
      if (!this.leaderboards) {
        return;
      }
      let _0x33c80b = this.leaderboards.add(_0x41ee8c);
      if (_0x33c80b && _0x33c80b.length > 0) {
        this.sendRecords(_0x33c80b);
      }
      return _0x33c80b;
    }
    getGameServer() {
      return _0x4bf94f(this, null, function* () {
        if (this.gameServer == null) {
          yield this.events.when("gameServerPicked");
        }
        return this.gameServer;
      });
    }
    sendRecords(_0x5dcee0) {
      let _0x3f6ff3 = _0x5dcee0.map(_0x20dace => _0x184dcc(_0x184dcc({}, _0x20dace), {
        cmd: "addrecord",
        secret: _0x253f2d(_0x20dace.category + "secret" + _0x20dace.player + "salt" + _0x20dace.score)
      }));
      _0x240d62(this.masterServer + "/leaderboards", _0x3f6ff3);
      this.events.emit({
        event: "leaderboardsLoaded",
        leaderboards: this.leaderboards
      });
    }
  };
  let _0x3e8dd6 = _0xb9eb30;
  _0x2d440e(_0x3e8dd6, "useModePrefix", true);
  let _0x2e085e = {
    arenaSize: 2000,
    quadSize: 10,
    borderPoints: 300,
    prepareMult: 3,
    prepareBatchCount: 5,
    maxPreparingTime: 500,
    baseRadius: 30,
    baseCount: 50,
    minScale: 3,
    maxScale: 4.5,
    scaleStep: 0.05,
    skinsPath: "assets/skins/",
    observerScale: 2.5,
    trackWidth: 8,
    unitSpeed: 90,
    spawnTimeout: 3000,
    prepareCounter: 4000,
    prepareCounterMultiplayer: 1000,
    prepareAcceleration: 30,
    prepareTimeLimit: 3000,
    prepareTimeLimitPerCycle: 100,
    baseHeight: 2,
    botsCount: 15,
    botLevel: -1,
    startBotLevel: 0.1,
    noPlayerBotLevel: 0.5,
    nearPlayerBotSpawnCount: 1,
    skinAssets: {},
    oneFrameTime: 50,
    followKiller: false,
    selfKillDelay: 1000,
    enemyKillDelay: 2000,
    arenaColor: "#e7fff4",
    borderColor: "#88a799",
    backgroundTopColor: "#2d6998",
    backgroundBottomColor: "#81faff",
    leaderBoardURI: "https://leaderboard.paper-io.com/save",
    platesStrokeWidth: 0,
    botAggroMin: 0.2,
    botAggroMax: 1,
    botDefMin: 1.2,
    botDefMax: 0.6,
    botGreedMin: 0.1,
    botGreedMax: 0.6,
    botSafetyMin: 0.5,
    botSafetyMax: 1,
    botAttackTrackLength: 1500,
    fullTurnsPerSecond: 1,
    fixedStep: true,
    font: "'PT Sans Caption', Quicksand, Verdana",
    achievementIconsPath: "assets/skins/select/",
    botAggro: 0.75,
    winPercent: 0.99,
    skinsWhitelist: null,
    simpleInvite: false
  };
  var _0x20c2c1 = ["#3b5998", "#8b9dc3", "#2a4d69", "#4b86b4", "#8dbdff", "#64a1f4", "#3b7dd8", "#843b62", "#8874a3", "#8d5524", "#c68642", "#f1c27d", "#f77f00", "#fcbf49", "#ffe066", "#65737e", "#a7adba", "#4a7c59", "#1a936f", "#88d498", "#2a9d8f", "#68b0ab", "#99e550", "#6abe30", "#4b692f", "#8f974a", "#8a6f30", "#524b24", "#d62828", "#fe4a49", "#ed6a5a", "#ff3377", "#ff77aa", "#ff99cc", "#b23a48", "#fcb9b2"];
  var _0x279b35 = Object.defineProperty;
  var _0x115444 = Object.assign;
  var _0x52a8bd = (_0x535f7b, _0x4b8349, _0x5d9827) => {
    if (typeof _0x4b8349 !== "symbol") {
      _0x4b8349 += "";
    }
    if (_0x4b8349 in _0x535f7b) {
      return _0x279b35(_0x535f7b, _0x4b8349, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x5d9827
      });
    }
    return _0x535f7b[_0x4b8349] = _0x5d9827;
  };
  var _0x38b40c = (_0x11544e, _0x4f0420, _0x394051) => {
    return new Promise((_0x4e372e, _0x1ca8ca) => {
      var _0x556e6b = _0x9255b5 => {
        try {
          _0x27e55f(_0x394051.next(_0x9255b5));
        } catch (_0xf3b4dd) {
          _0x1ca8ca(_0xf3b4dd);
        }
      };
      var _0x2215d8 = _0xe776fe => {
        try {
          _0x27e55f(_0x394051.throw(_0xe776fe));
        } catch (_0x44df4e) {
          _0x1ca8ca(_0x44df4e);
        }
      };
      var _0x27e55f = _0x573975 => {
        if (_0x573975.done) {
          return _0x4e372e(_0x573975.value);
        } else {
          return Promise.resolve(_0x573975.value).then(_0x556e6b, _0x2215d8);
        }
      };
      _0x27e55f((_0x394051 = _0x394051.apply(_0x11544e, _0x4f0420)).next());
    });
  };
  const _0x3118f0 = "description_";
  class _0x433ebc {
    constructor() {
      _0x52a8bd(this, "config");
    }
    static load() {
      return _0x38b40c(this, null, function* () {
        let _0x3c126a = new _0x433ebc();
        yield _0x3c126a.loadResources();
        return _0x3c126a;
      });
    }
    loadResources() {
      return _0x38b40c(this, null, function* () {
        let _0x7361c8 = "pvp";
        let _0xff8911 = ["skins", "languages", "servers", "achievements", "modes", _0x7361c8];
        let _0x7df022;
        let _0x5d2325 = yield Promise.all(_0xff8911.map(_0x43fb96 => fetch("assets/" + _0x43fb96 + ".json?" + Date.now()).catch(_0x1ce4f9 => {
          console.log("ERROR loading " + _0x43fb96 + ".json:", _0x1ce4f9);
          return null;
        })));
        let _0x3c7db6 = _0x5d2325 ? yield Promise.all(_0x5d2325.map((_0x498604, _0x2b43b9) => _0x498604.json().catch(_0x5735b8 => {
          console.log("ERROR parsing " + _0xff8911[_0x2b43b9] + ".json:", _0x5735b8);
          return _0x5735b8;
        }))) : {};
        _0x7df022 = Object.fromEntries(_0x3c7db6.map((_0x425f77, _0x2dc71f) => [_0xff8911[_0x2dc71f], _0x425f77]));
        this.config = _0x115444(_0x115444({}, _0x2e085e), _0x7df022[_0x7361c8]);
        this.loadModes(_0x7df022.modes);
        this.loadLanguages(_0x7df022.languages);
        this.loadServers(_0x7df022.servers);
        this.loadSkins(_0x7df022.skins);
        this.loadAchievements(_0x7df022.achievements);
        this.config = _0x115444(_0x115444({}, this.config), {
          modes: this.modes,
          languages: this.languages,
          servers: _0x7df022.servers,
          skins: this.skins,
          skinAssets: this.skinAssets,
          achievements: this.achievements
        });
      });
    }
    loadModes(_0x59a811) {
      this.modes = _0x59a811;
      this.allModes = _0x115444(_0x115444({}, _0x59a811.solo), _0x59a811.pvp);
      this.defaultSoloMode = Object.keys(_0x59a811.solo)[0];
      this.defaultPvpMode = Object.keys(_0x59a811.pvp)[0];
    }
    modeConfig(_0x234216) {
      return _0x115444(_0x115444({}, this.config), this.allModes[_0x234216]);
    }
    loadLanguages(_0x2ba9ef) {
      this.languages = _0x2ba9ef;
      this.defaultLanguage = (navigator.languages && navigator.languages.length && navigator.languages[0] || navigator.userLanguage || navigator.language || navigator.browserLanguage || "en").substr(0, 2).toLowerCase();
    }
    loadSkins(_0x425041) {
      this.skins = _0x425041;
      if (this.config.skinsWhitelist) {
        this.skins = this.skins.filter(_0x3e3585 => this.config.skinsWhitelist.includes(_0x3e3585.name));
      }
      this.skinAssets = _0x267ef6(this.config, this.skins, _0x20c2c1);
    }
    loadAchievements(_0x3c5c4d) {
      this.achievements = Object.fromEntries(Object.entries(_0x3c5c4d).map(([_0x36cca5, _0x131713]) => {
        if (!Array.isArray(_0x131713.checker)) {
          _0x131713.checker = [_0x131713.checker];
        }
        let _0x48a923 = _0x131713.checker[0];
        let _0x449453 = _0x36a7a5[_0x48a923] || _0x36a7a5[_0x48a923 + "Checker"];
        let _0x5ef330 = _0x131713.mode;
        if (!_0x131713.icon) {
          let _0x528123 = this.skins.find(_0x4261bd => _0x4261bd.name === _0x36cca5);
          if (_0x528123) {
            _0x131713.icon = _0x528123.big;
          }
        }
        if (_0x5ef330 == undefined) {
          _0x5ef330 = ["any"];
        }
        if (!Array.isArray(_0x5ef330)) {
          _0x5ef330 = [_0x5ef330];
        }
        if (_0x131713.description && !(_0x3118f0 + _0x36cca5 in this.languages.en)) {
          this.languages.en[_0x3118f0 + _0x36cca5] = _0x131713.description;
        }
        return [_0x36cca5, _0x115444(_0x115444({}, _0x131713), {
          name: _0x36cca5,
          checkerName: _0x48a923,
          mode: _0x5ef330,
          getChecker: _0x3a5506 => new _0x449453(..._0x131713.checker.slice(1), _0x3a5506)
        })];
      }));
    }
    loadServers(_0x1be080) {
      for (let _0x22b728 of Object.values(_0x1be080)) {
        for (let _0x132431 = 0; _0x132431 < 20; _0x132431++) {
          let _0x51c584 = _0x1be080[_0x22b728.group];
          if (!_0x51c584) {
            break;
          }
          _0x22b728.uri = _0x51c584.uri;
          _0x22b728.group = _0x51c584.group;
        }
      }
      let _0x5414d7 = [];
      let _0x3a897d = [];
      for (let _0x332e6f in _0x1be080) {
        _0x1be080[_0x332e6f].name = _0x332e6f;
        _0x3a897d.push(_0x1be080[_0x332e6f]);
        if (_0x1be080[_0x332e6f].group === "public") {
          _0x5414d7.push(_0x1be080[_0x332e6f]);
        }
      }
      this.config.prefixes = this.config.prefixes || {};
      for (let [_0x2b1b91, _0x32a2d5] of Object.entries(this.modes.pvp)) {
        for (let _0x3deaa5 of _0x32a2d5.prefix ? [_0x2b1b91, _0x32a2d5.prefix] : [_0x2b1b91]) {
          this.config.prefixes[_0x32a2d5.autoselect] = {
            mode: _0x32a2d5,
            modeName: _0x2b1b91,
            servers: _0x5414d7
          };
          for (let _0x223088 of _0x3a897d) {
            this.config.prefixes[_0x3deaa5 + "-" + _0x223088.name] = {
              mode: _0x32a2d5,
              modeName: _0x2b1b91,
              servers: [_0x223088]
            };
          }
        }
      }
      for (let [_0x2b870a, _0x49c2cc] of Object.entries(this.modes.solo)) {
        for (let _0x5a44f7 of _0x49c2cc.prefix ? [_0x2b870a, _0x49c2cc.prefix] : [_0x2b870a]) {
          this.config.prefixes[_0x5a44f7] = {
            mode: _0x49c2cc,
            modeName: _0x2b870a
          };
        }
      }
    }
  }
  var _0x370407 = Object.defineProperty;
  var _0x211ffc = Object.assign;
  var _0x30bfd8 = (_0x3105e9, _0x2ef57b, _0x2f30da) => {
    if (typeof _0x2ef57b !== "symbol") {
      _0x2ef57b += "";
    }
    if (_0x2ef57b in _0x3105e9) {
      return _0x370407(_0x3105e9, _0x2ef57b, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x2f30da
      });
    }
    return _0x3105e9[_0x2ef57b] = _0x2f30da;
  };
  class _0x318f45 {
    constructor() {
      _0x30bfd8(this, "events", {});
    }
    emit(_0x2ee2dc) {
      if (this.events[_0x2ee2dc.event]) {
        for (let _0xfd6cda of this.events[_0x2ee2dc.event]) {
          _0xfd6cda(_0x2ee2dc);
        }
      }
      if (this.events.event) {
        for (let _0x58263b of this.events.event) {
          _0x58263b(_0x2ee2dc);
        }
      }
    }
    on(_0x185ee8, _0x13b520) {
      (this.events[_0x185ee8] = this.events[_0x185ee8] || []).push(_0x13b520);
      return () => this.events[_0x185ee8] = this.events[_0x185ee8].filter(_0x45a01c => _0x45a01c !== _0x13b520);
    }
    bind(_0x1a6920) {
      for (let _0x4026ed in _0x1a6920) {
        this.on(_0x4026ed, _0x1a6920[_0x4026ed]);
      }
    }
    when(_0x54bf83) {
      return new Promise(_0x888b3 => this.on(_0x54bf83, _0x888b3));
    }
  }
  const _0x343f73 = 255;
  class _0x374491 {
    constructor(_0x3ae88d) {
      _0x30bfd8(this, "id");
      _0x30bfd8(this, "firstTic");
      _0x30bfd8(this, "deathTic");
      _0x30bfd8(this, "deathReason");
      _0x30bfd8(this, "name");
      _0x30bfd8(this, "skin");
      _0x30bfd8(this, "directions", []);
      _0x30bfd8(this, "directionsStr");
      _0x30bfd8(this, "spawned", false);
      _0x30bfd8(this, "joined", false);
      Object.assign(this, _0x3ae88d);
    }
    direction(_0x65fb29) {
      return this.directions[_0x65fb29 - this.firstTic];
    }
    setDirection(_0x19941d, _0xd4c2d2) {
      if (this.firstTic == undefined) {
        this.firstTic = _0x19941d;
      }
      this.directions[_0x19941d - this.firstTic] = _0xd4c2d2;
    }
    aliveAt(_0x557b81) {
      return _0x557b81 >= this.firstTic && !(_0x557b81 > this.deathTic);
    }
    lastKnownMove() {
      let _0x3af6a7 = this.directions.length;
      if (_0x3af6a7) {
        return this.directions[this.directions.length - 1];
      } else {
        return null;
      }
    }
    joinAndSpawnEvents() {
      return [{
        event: "join",
        id: this.id,
        skin: this.skin,
        name: this.name
      }, {
        event: "spawn",
        id: this.id,
        skin: this.skin,
        name: this.name
      }];
    }
  }
  const _0x1be5a8 = {
    join: (_0x28425c, _0x2a1f69) => _0x28425c.join(_0x2a1f69),
    move: (_0xf5ee8c, _0x2b9f04) => {
      let _0x351ae8 = _0x2b9f04.tic;
      if (_0x351ae8 == undefined) {
        _0x351ae8 = _0xf5ee8c.lastCompleteTic + 1;
      }
      _0xf5ee8c.setMove(_0x2b9f04.id, _0x351ae8, _0x2b9f04.direction, _0x2b9f04.time);
      if (_0x351ae8 == _0xf5ee8c.lastCompleteTic + 1) {
        _0xf5ee8c.tryToCompleteMove();
      }
    },
    moves: (_0x4b43fc, _0x1968e6) => _0x4b43fc.setMoves(_0x1968e6.tic, _0x1968e6.directions, _0x1968e6.time, _0x1968e6.force),
    death: (_0x3a5dcc, _0x1682dc) => _0x3a5dcc.death(_0x1682dc.id, _0x1682dc.reason),
    deadline: (_0x207479, _0x612fe5) => _0x207479.deadline(_0x612fe5.tic)
  };
  class _0x47d279 {
    constructor(_0x45fd84, _0x4a63e1 = {}) {
      _0x30bfd8(this, "id");
      _0x30bfd8(this, "initialTic");
      _0x30bfd8(this, "initialTicTime");
      _0x30bfd8(this, "lastTic");
      _0x30bfd8(this, "lastCompleteTic");
      _0x30bfd8(this, "localPlayerId");
      this.name = Math.random().toString().substring(2, 10);
      this.date = Date.now();
      this.seed = _0x45fd84;
      this.players = [];
      this.playersById = {};
      this.notes = _0x4a63e1;
      this.events = new _0x318f45();
      this.msPerTic = 1000 / _0x4a63e1.fps || 50;
    }
    onEvent(_0x1d419d) {
      const _0x35e264 = _0x1be5a8[_0x1d419d.event];
      if (_0x35e264) {
        _0x35e264(this, _0x1d419d);
      }
    }
    join({
      id: _0xf1d758,
      name: _0x5e30df,
      skin: _0x42b15b,
      local: _0x3ef4d4
    }) {
      let _0x2d9230 = new _0x374491({
        id: _0xf1d758,
        name: _0x5e30df,
        skin: _0x42b15b
      });
      if (_0x3ef4d4 && !this.localPlayerId) {
        this.localPlayerId = _0xf1d758;
      }
      this.players.push(_0x2d9230);
      this.playersById[_0x2d9230.id] = _0x2d9230;
    }
    death(_0xcdf016, _0x291828) {
      let _0x3faff0 = this.playersById[_0xcdf016];
      if (!_0x3faff0) {
        console.error("Can't find a player " + _0xcdf016 + " to kill");
        return;
      }
      if (_0x3faff0.deathTic != undefined) {
        return;
      }
      if (_0x291828) {
        _0x3faff0.deathReason = _0x291828;
      }
      _0x3faff0.deathTic = _0x3faff0.firstTic + _0x3faff0.directions.length - 1;
      this.events.emit({
        event: "death",
        id: _0x3faff0.id,
        reason: _0x291828
      });
    }
    tryToCompleteMove() {
      let _0x311171 = this.lastCompleteTic + 1;
      if (!this.canCompleteMove(_0x311171)) {
        return false;
      }
      this.lastCompleteTic = _0x311171;
      for (let _0x5ee0b1 of this.players) {
        if (_0x5ee0b1.firstTic == _0x311171) {
          _0x5ee0b1.joinAndSpawnEvents().map(_0x21f156 => this.events.emit(_0x21f156));
        }
      }
      this.events.emit({
        event: "moves",
        tic: _0x311171,
        directions: this.getDirections(_0x311171),
        now: Date.now()
      });
      return true;
    }
    toEventLog() {
      let _0x3a51f6 = [];
      for (let _0x164c65 = 0; _0x164c65 <= this.lastCompleteTic; _0x164c65++) {
        _0x3a51f6.push(this.ticEvents(_0x164c65));
      }
      return _0x3a51f6.flat();
    }
    ticEvents(_0x2e2944) {
      let _0x143f11 = [];
      let _0x5f0792 = [];
      for (let _0x3c5d24 of this.players) {
        if (_0x3c5d24.firstTic == _0x2e2944) {
          _0x143f11.push(..._0x3c5d24.joinAndSpawnEvents());
        }
        if (_0x3c5d24.aliveAt(_0x2e2944)) {
          _0x5f0792.push(_0x3c5d24);
        }
      }
      _0x143f11.push({
        event: "moves",
        tic: _0x2e2944,
        directions: Object.fromEntries(_0x5f0792.map(_0x1a64ab => [_0x1a64ab.id, _0x1a64ab.direction(_0x2e2944)])),
        now: _0x2e2944 == this.initialTic ? this.initialTicTime : undefined
      });
      for (let _0x5de824 of this.players) {
        if (_0x5de824.deathTic == _0x2e2944) {
          _0x143f11.push({
            event: "death",
            id: _0x5de824.id
          });
        }
      }
      return _0x143f11;
    }
    toString() {
      return this.serialize();
    }
    toBinary() {
      return this.serialize(true);
    }
    serialize(_0x3a9826 = false) {
      let _0x3339cd = _0x211ffc({}, this);
      delete _0x3339cd.events;
      delete _0x3339cd.playersById;
      _0x3339cd.players = _0x3339cd.players.map(_0x412179 => {
        let _0x13aaeb = _0x211ffc(_0x211ffc({}, _0x412179), {
          directionsStr: _0x3a9826 ? undefined : _0x412179.directions.map(_0x40883e => _0x40883e == undefined ? "FF" : _0x54cb1a(_0x40883e)).join(""),
          spawned: undefined,
          joined: undefined
        });
        delete _0x13aaeb.directions;
        return _0x13aaeb;
      });
      let _0x20e709 = JSON.stringify(_0x3339cd, null, 2);
      if (_0x3a9826) {
        const _0x3f1192 = new TextEncoder().encode(_0x20e709);
        const _0x562e8e = this.players.map(_0x27c7d3 => new Uint8Array(_0x27c7d3.directions.map(_0x2474fb => _0x2474fb == undefined ? _0x343f73 : _0x2474fb)));
        const _0x35311e = [_0x3f1192, ..._0x562e8e];
        const _0x25865e = new Uint8Array(_0x35311e.map(_0x17fe30 => _0x17fe30.length).reduce((_0x14c3ad, _0x4f6dd0) => _0x14c3ad + _0x4f6dd0 + 4, 0));
        const _0x5791d6 = new DataView(_0x25865e.buffer);
        let _0x198a66 = 0;
        for (let _0x12b922 of _0x35311e) {
          _0x5791d6.setInt32(_0x198a66, _0x12b922.length);
          _0x25865e.set(_0x12b922, _0x198a66 + 4);
          _0x198a66 += _0x12b922.length + 4;
        }
        return _0x25865e.buffer;
      }
      return _0x20e709;
    }
    static deserialize(_0x2e6ed6) {
      let _0x2e7515;
      let _0x384fdc = false;
      let _0x4bc5cf = [];
      if (_0x2e6ed6 instanceof ArrayBuffer) {
        _0x384fdc = true;
        const _0x3d9cb9 = new DataView(_0x2e6ed6);
        for (let _0x1063a8 = 0; _0x1063a8 < _0x2e6ed6.byteLength;) {
          let _0x4727c9 = _0x3d9cb9.getInt32(_0x1063a8);
          _0x4bc5cf.push(_0x2e6ed6.slice(_0x1063a8 + 4, _0x1063a8 + 4 + _0x4727c9));
          _0x1063a8 += _0x4727c9 + 4;
        }
        _0x2e7515 = new TextDecoder().decode(_0x4bc5cf[0]);
        _0x4bc5cf.shift();
      } else {
        _0x2e7515 = _0x2e6ed6;
      }
      let _0x13a4d6;
      try {
        _0x13a4d6 = JSON.parse(_0x2e7515);
      } catch (_0x13fe22) {
        console.error("RECORD JSON PARSE ERROR");
        console.error(_0x13fe22);
        return null;
      }
      let _0x4080dd = new _0x47d279(_0x13a4d6.seed);
      Object.assign(_0x4080dd, _0x13a4d6);
      _0x4080dd.players = _0x4080dd.players.map(_0x36a4a1 => {
        let _0x532879 = new _0x374491(_0x36a4a1);
        if (_0x384fdc) {
          _0x532879.directions = [...new Uint8Array(_0x4bc5cf.shift())];
        } else {
          _0x532879.directions = _0x197f4f(_0x532879.directionsStr);
        }
        delete _0x532879.directionsStr;
        return _0x532879;
      });
      _0x4080dd.playersById = Object.fromEntries(_0x4080dd.players.map(_0x489168 => [_0x489168.id, _0x489168]));
      return _0x4080dd;
    }
    get duration() {
      return (this.lastCompleteTic - this.initialTic) / this.msPerTic || 0;
    }
    get fps() {
      return 1000 / this.msPerTic;
    }
    setMove(_0x2de7d3, _0x1fa8c8, _0x24010e, _0x508a13) {
      let _0x5308a5 = this.playersById[_0x2de7d3];
      if (!_0x5308a5) {
        console.error("rec: player " + _0x2de7d3 + " not found");
      }
      if (_0x1fa8c8 < _0x5308a5.firstTic || _0x1fa8c8 > _0x5308a5.deathTic) {
        console.error("rec: tic out of order " + _0x1fa8c8 + " " + _0x5308a5.id);
        return;
      }
      _0x5308a5.setDirection(_0x1fa8c8, _0x24010e);
      if (_0x508a13 != undefined && (this.initialTicTime == undefined || this.initialTicTime > _0x508a13)) {
        this.initialTicTime = _0x508a13;
      }
      if (this.initialTic == undefined || _0x1fa8c8 < this.initialTic) {
        this.initialTic = _0x1fa8c8;
      }
      if (this.lastTic == undefined || _0x1fa8c8 > this.lastTic) {
        this.lastTic = _0x1fa8c8;
      }
    }
    setMoves(_0x5cbece, _0x56085b, _0x3532df, _0x389342) {
      if (this.lastCompleteTic > _0x5cbece - 1) {
        console.error("Trying to set tic " + _0x5cbece + "'s moves after tic " + this.lastCompleteTic + ". Moves should be set in order.");
        return;
      }
      if (_0x5cbece == null) {
        _0x5cbece = this.lastCompleteTic == null ? 0 : this.lastCompleteTic + 1;
      }
      this.lastCompleteTic = _0x5cbece - 1;
      for (let _0x3684e0 in _0x56085b) {
        this.setMove(_0x3684e0, _0x5cbece, _0x56085b[_0x3684e0], _0x3532df);
      }
      if (_0x389342) {
        for (let _0x1d38e7 of this.players) {
          if (!_0x1d38e7.deathTic && !(_0x1d38e7.id in _0x56085b)) {
            this.setMove(_0x1d38e7.id, _0x5cbece, _0x1d38e7.lastKnownMove(), _0x3532df);
          }
        }
      }
      if (!this.tryToCompleteMove()) {
        console.error("Can't complete move after setMoves");
      }
    }
    canCompleteMove(_0xbaf603) {
      for (let _0x40d532 of this.playersAliveAt(_0xbaf603)) {
        if (_0x40d532.direction(_0xbaf603) == undefined) {
          return false;
        }
      }
      return true;
    }
    getDirections(_0x4cb9ec) {
      return Object.fromEntries(this.playersAliveAt(_0x4cb9ec).map(_0x3de0da => [_0x3de0da.id, _0x3de0da.direction(_0x4cb9ec)]));
    }
    playersAliveAt(_0x117a45) {
      return this.players.filter(_0x50b225 => _0x50b225.aliveAt(_0x117a45));
    }
    forceCompleteMove(_0x52dd31) {
      for (let _0x152423 = this.lastCompleteTic + 1; _0x152423 <= _0x52dd31; _0x152423++) {
        let _0x450e35 = this.canCompleteMove(_0x152423);
        if (!_0x450e35) {
          for (let _0x39bc6c of this.playersAliveAt(_0x152423)) {
            if (_0x39bc6c.direction(this.lastCompleteTic + 1) == undefined) {
              _0x39bc6c.setDirection(this.lastCompleteTic + 1, _0x39bc6c.lastKnownMove());
            }
          }
        }
      }
      if (!this.tryToCompleteMove()) {
        console.error("Can't force complete move");
      }
    }
    deadline(_0x5d289c) {
      while (this.lastCompleteTic < _0x5d289c) {
        this.forceCompleteMove();
      }
    }
    emitTo(_0x3791dd) {
      return this.events.on("event", _0x3791dd);
    }
    clone() {
      return _0x47d279.deserialize(this.serialize());
    }
    ticTime(_0x158f85) {
      let _0x5a0c79 = this.msPerTic * (_0x158f85 - this.initialTic) + this.initialTicTime;
      return _0x5a0c79;
    }
    skipTo(_0x3da75c) {
      this.lastCompleteTic = _0x3da75c;
    }
  }
  function _0x54cb1a(_0x1abaf4) {
    return ("00" + _0x1abaf4.toString(16)).slice(-2);
  }
  function _0x197f4f(_0x4cbefb) {
    let _0x24b81b = [];
    for (let _0x533aa5 = 0; _0x533aa5 * 2 < _0x4cbefb.length; _0x533aa5++) {
      _0x24b81b.push(parseInt(_0x4cbefb.substr(_0x533aa5 * 2, 2), 16));
    }
    return _0x24b81b;
  }
  var _0x54af11 = Object.defineProperty;
  var _0x907455 = Object.assign;
  var _0x437c15 = (_0x1dc50b, _0x40590c, _0x16a26b) => {
    if (typeof _0x40590c !== "symbol") {
      _0x40590c += "";
    }
    if (_0x40590c in _0x1dc50b) {
      return _0x54af11(_0x1dc50b, _0x40590c, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x16a26b
      });
    }
    return _0x1dc50b[_0x40590c] = _0x16a26b;
  };
  var _0x288744 = (_0x4474f8, _0xbcefe7, _0x3635e1) => {
    return new Promise((_0x36586b, _0x5a21f0) => {
      var _0x36105d = _0x25eeb0 => {
        try {
          _0xf02d21(_0x3635e1.next(_0x25eeb0));
        } catch (_0xa73e98) {
          _0x5a21f0(_0xa73e98);
        }
      };
      var _0x1d852b = _0x3ceeed => {
        try {
          _0xf02d21(_0x3635e1.throw(_0x3ceeed));
        } catch (_0x313781) {
          _0x5a21f0(_0x313781);
        }
      };
      var _0xf02d21 = _0x4cd08e => {
        if (_0x4cd08e.done) {
          return _0x36586b(_0x4cd08e.value);
        } else {
          return Promise.resolve(_0x4cd08e.value).then(_0x36105d, _0x1d852b);
        }
      };
      _0xf02d21((_0x3635e1 = _0x3635e1.apply(_0x4474f8, _0xbcefe7)).next());
    });
  };
  class _0x45a104 {
    constructor(_0x3f8b5c = {}) {
      _0x437c15(this, "lagSimulation", 0);
      this.events = new _0xf760a1();
      this.recorder = _0x3f8b5c.recorder;
      this.player = _0x3f8b5c.player;
      if (this.recorder) {
        if (this.recorder.localPlayerId) {
          this.player.id = this.recorder.localPlayerId;
        } else if (this.recorder.players && this.recorder.players.length > 0) {
          this.player.id = this.recorder.players.filter(_0xe6dd19 => _0xe6dd19.deathTic == null)[0].id;
        }
      }
      this.options = _0x3f8b5c;
    }
    connect() {
      return _0x288744(this, null, function* () {
        yield _0x45f3ce();
        let _0x450454 = this.options.seed || Math.random();
        this.events.emit({
          event: "connected",
          id: this.player.id
        });
        if (!this.recorder) {
          this.recorder = new _0x47d279(_0x450454, {
            gameMode: this.options.gameMode
          });
          if (this.options.tics) {
            this.recorder.skipTo(this.options.tics);
          }
          this.recorder.join(_0x907455({
            id: this.player.id,
            local: true
          }, this.player));
        }
        yield this.warmup();
      });
    }
    completeWarmup() {
      this.warmupComplete = true;
      this.events.emit({
        event: "warmupComplete"
      });
    }
    debrief() {
      return {};
    }
    dispose() {}
    join(_0x29eaa3, _0x8b356f, _0x1e3519) {
      if (!this.player.id) {
        this.player.id = Math.random().toString();
      }
      this.playerId = this.player.id;
      this.events.emit({
        event: "join",
        name: _0x29eaa3,
        skin: _0x8b356f,
        id: this.player.id,
        local: true
      });
    }
    death(_0x5c00f7 = undefined) {
      this.recorder.onEvent({
        event: "death",
        tic: _0x5c00f7
      });
    }
    sendMove(_0x289aae, _0x27376e) {
      if (this.warmupComplete) {
        if (this.options.noPlayer) {
          this.recorder.onEvent({
            event: "moves",
            directions: {},
            tic: _0x27376e
          });
        } else {
          this.recorder.onEvent({
            event: "moves",
            directions: {
              [this.player.id]: _0x289aae
            },
            tic: _0x27376e,
            force: true
          });
        }
      }
    }
    warmup() {
      return _0x288744(this, null, function* () {
        this.backlog = this.recorder.toEventLog();
        const _0x4ae138 = this.recorder.emitTo(_0x5ea895 => this.backlog.push(_0x5ea895));
        this.events.emit({
          event: "createGame",
          seed: this.recorder.seed
        });
        console.log("WARMUP START");
        let _0x14f138 = Math.ceil(this.backlog.length / 10);
        for (let _0x37e8ad = 0; _0x37e8ad < this.backlog.length; _0x37e8ad++) {
          let _0x47c071 = this.backlog[_0x37e8ad];
          this.events.emit(_0x47c071);
          if (_0x37e8ad % _0x14f138 === 0 && _0x37e8ad / this.backlog.length < 0.9) {
            yield _0x3bf684(10);
            let _0x56ac2b = Math.min(Math.max(0.001, _0x37e8ad / this.backlog.length), 0.999);
            this.events.emit({
              event: "warmup",
              progress: _0x56ac2b
            });
          }
        }
        delete this.backlog;
        _0x4ae138();
        this.recorder.emitTo(_0x2212d8 => this.events.emit(_0x2212d8));
        this.completeWarmup();
        console.log("WARMUP END");
      });
    }
    info() {
      return {};
    }
  }
  const _0x19b808 = "DeadMorose\nold_demon\nfox\nDeFreeZe\nGoSeek\nKeyplex\nDarkfury\nFunnyway\nBLACK_PRINCE\n[BigBoss]ShadiBoo\nDizzer\nKARATEL\nHowlux\nLight_Soul\n2fab4u\nBoOT\nMrKat2017\nSkulL\nCmeTano4Ka\nflash\nh1me3ra\nHoward\ni_Pro\nred_devil\nbest_of_the_best\nblow_crazy \nface_of_vengeance\nGlambit \nMASTER_GRIF\nMr.ByBlIk\nn1ce_DayZ\nRantom\nAbove Daemons\ncompany_THE_Best\nDanie\ndarklight\nDaxmaut\ndiablo\ngreat_man\nkiller_innothing\nNix\nValett\nDarkAngelKael\nduelist\ni_zadrot\nMonster_Energy\nMr.Winston\nRaindrops\nSumerbraum\nTermit\nTITAN\nWOOOlf\nAVSTRAL\nBadLike\nBuri\ncop_zombie\ndestroyer_for_us\nEKEN\nEksnet\nFrostorik\nghost_of_fear\nHotzarzim\nj111m\nKael\nKikET\n4CHAN\nPIKABU\n9GAG\naustralia\naustria\nayylmao\nbait\nbangladesh\nbelgium\nbosnia\nbotswana\nbrazil\nbulgaria\ncambodia\ncanada\nchile\nchina\ncia\nconfederate\ncroatia\ndenmark\nea\nearth\nestonia\neuropeanunion\nfacepunch\nfeminism\nfinland\nfrance\ngermanempire\ngermany\ngreece\nhongkong\nhungary\nindia\nindiana\nindonesia\niran\niraq\nireland\nitaly\njamaica\njapan\nkc\nlatvia\nlithuania\nluxembourg\nmaldivas\nmatriarchy\nmexico\nmoon\nnazi\nnetherlands\nnigeria\nnorthkorea\nnorway\norigin\npakistan\npatriarchy\nperu\npewdiepie\npiccolo\npoland\nportugal\nprodota\nqingdynasty\nquebec\nreddit\nrussia\nsanik\nsatanist\nsealand\nsouthkorea\nspain\nstalin\nsteam\nsweden\nswitzerland\ntaiwan\ntexas\nthailand\ntsaristrussia\ntumblr\nukraine\nunitedkingdom\nusa\nussr\nvinesauce\nyaranaika\ntumblr\nhongkong\nKillerGamer\nLimuzin\nmage\nMCGaMeR\nMr_Het\nNadornsMonsters\nnero\noutcaster\nSteepCat\nTUCA\nurban_hunter\nvirtual_lord\nwertyi\nWinstonLight\nWoJDoo\nArtemad\nClydeKautz\nBarney\nRhodaPing\nSharlaPropes\nNanciTyner\nIlaWorm\nSebastianRawlinson\nCraigFlury\nEstebanBrehm\nDeberaVancuren\nTabithaOlivieri\nTrishaKimball\nMilagrosHyler\nCinderellaGerson\nFranBaldridge\nMelisaBrock\nGaynelleSimmonds\nEttaMirabella\nLaveraLabrecque\nBudNormand\nEliasSherwood\nJackpot\nSensation\nChuck\nSoots\nTheSaint\nICEman\nMiracleSnoopy\nBahartet\nBiotary\nHammer85\nBizcarit\nBlackenta\nBurkelstrin\nBurntSeen\nChariana\ngoldfinger\nConfidentHelp\nCopiconc\nDemocoman\nGaartely\nGenantro\nGlitzMcGenius\nJuliatu\nKalstaxi\nKeymatr\nKredicon\nLuvGurly\nMasteranca\nMediaBolt\nMeemuset\nMonsterInformer\nOccuiffu\nOnnitall\nRodeonevedo\nSandBlondeFully\nShipnease\nSlypectle\nSpinfonexu\nAdocarli\nAnglosi\nSimba\nAuetonbr\nBanshfeli\nQWERT\nBezequaci\nBizarrebobw\nBizarrewo\nBlenetra\nBootXboxStein\nBradleyFinest\nCeticRaven\nChunkyKlug\nDailiesHigh\nDravencybe\nFarerSaiyan\nGabring\nHalcytech\nHeminepe\nHeraldhama\nImagene\nLolandexte\nLucebayn\nMatroner\nMediumbben\nMofficanki\nNateinvelo\nTIMBERLAKE\nNessDiddy\nPlatinumTrippin\ntheviking\nPlusedge\nRaetstalyda\nJustinStromberg\nRebecaSenn\nRoxy\nNeil\nMaria\nWarren\nGrace\nWilliam\nJane\nVanessa\nLisa\nStephanie\nDidi\nBoris\nRuth\nLeonard\nJack\nCaroline\nSebastian\nConnor\nIan\nTOMAS\nSue\nFOX\nDylan\nLisa\nGrace\nJabbaDabba\nJennifer\nBenjamin\nPiPPa\nSteven\nJoe\nKNine\nKevin\nCaroline\nMcFlurry\nKatherine\nLeah\nIrene\nOwen\nUna\nGabrielleSlater\nAmyFisher\nAngelaGrant\nAlisonOgden\nDeadshot\nNitro\nTrevorBlack\nKatherinePullman\nOliverMacDonald\nAvaVaughan\nJenniferWhite\nWarrenPeters\nLeahCameron\nAlisonBerry\nKeithBuckland\nJulianMackay\nNatalieSanderson\nviZion\nJoshuaPeake\nKeithDowd\nHotdog\nJamesLambert\nJanBond\nColinMarshall\nJasonRees\nFRED\nJaneHughes\nLeonardOliver\nHarryAnderson\nGraceSmith\nDeirdreJones\nAudreySpringer\nEllaGray\nDominicHamilton\nKeithBlake\nRuthJackson\nMollyHudson\nSophieBerry\nCarolineLyman\nEmmaHudson\nJoeLyman\nOliviaPiper\nChristopherAllan\nMariaKing\nPippaSlater\nSarahJohnston\nRyanWhite\nJackHill\nWilliamMackay\nBenjaminAlsop\nAmandaRoberts\nThomasParsons\nLiamMcGrath\nJanHenderson\nSoniaChapman\nWilliam\nLily\nPeter\nKeith\nIsaac\nLeah\nMadeleine\nKaren\nFrank\nAlan\nMichael\nRachel\nDominic\nPaul\nNicola\nEmily\nTim\nbigBEN\nCohen\nGood\nFrancis\nOdom\nGreen\nCain\nTrevino\nLucero\nAshley\nigloo\nduffer\nloaded\nsickness\ngreeting\nlonely\nbafflement\ntrusty\nalteration\nevil\nsolva\npenumbra\ndauphine\nalluring\nlilly\nstinchar\ncubic\nblackbrook\nrebuff\ninclined\nlyon\nsquash\nunique\nlyne\nchewy\nmasticate\nmagnet\nknit\nindolent\nsevere\nfestus\ntrain\nincisionKim\nBean\nAguilar\nErnesto\nCurtis\nCortez\nTyshawn\nBrady\nBeckett\nXavier\nCason\nBryson\nSheldon\nPierce\nDeshawn\nAndy\nAaron\nArmando\nKarson\nK9\nNadia\nJovan\nErin\nTerry\nGrayson\nCelia\nAlexzander\nCannon\nJoey\nStella\nGracie\nKFCLOVER\nChico\nPrince\nMocha\nScooter\nChester\nCoco\nDusty\nZoe\nSocks\njefferson\nignore\nalladale\nvirtue\nprovided\ncohesive\nbullfinche\ncomet\ndip\nzipper\npostulate\nlick\nbashful\npascals\nrudy\ngloaming\ncashew\nmixcloud\ntraumatic\nprostate\npeas\nmelon\nbulbous\ngavel\nnumnah\nnavel\nriver\nsaskatoon\ncaused\nhardy\npare\nfemale\nvolunteer\nspeck\nyears\nvalid\narmpit\nbobby\nbolham\ngoogle\nbrennand\npastry\nweapon\ncuillin\ndescent\neasier\nmore\nrisedale\ngoggles\ncute\nmagellanic\nrenal\nzunyi\nEveryPrivate\nChipmunkThreat\nLeafyForefoot\nSebastianExxon\nHuckFaisalabad\nWheelchairHadar\nBulimiaMilk\nEiderStallion\nMoronicBuckinghamshire\nPayBiff\nHillsboroughEnvelope\nAllianzRhapsody\nArseEnteral\nBoronRadiant\nArchiveUntrue\nPlasticSpeech\nOfficerWiltshire\nBungBuzzard\nMoscowStellar\nTrialsHearty\nModelHorse\nBootsGrimacing\nShiraMosedale\nLeopardClapper\nSkatersStars\nCaramelizeStraws\nAngolanVinomadefied\nBatterySiemens\nHedgeThompson\nLukaIcing\nMimosaBrunswick\nTinForgetful\nHumberHook\nSeagullTrump\nBookerTouring\nSugarWarn\nCustardsStructure\nRudyBarium\nElectrolyteDisfigured\nBlighterPhysicist\nAntoniadiAtom\nPachaRule\nMaltyPatches\nHonoluluSwedish\nGemGleaming\nAssociatedThose\nAfterCointreau\nEyesPierre\nStewartGels\nAretePuppy\nFullscreenTrophic\nMailWillow\nScaupFrosty\nZaraBipedal\nCheapScafell\nDevonYolk\nSkegCohesive\nCricketBashful\nCocoaPuck\nDecathlonIschemic\nOftSnottor\nCheepNewlyn\nSwimGrill\nBaubleSymbolic\nAstronomerSpam\nVarlotLealt\nSensorSquamish\nKeyTechnetium\nCrummyQuirky\nVinePlane\nWaterskiBlind\nOrdinateCrown\nSpotTense\nFumeVine\nGlasswareCherries\nPhenomenonWillied\nPappusWazzed\nFilterSpace\nHypnosisSociable\nGaffEnder\nTordaHelpless\nResearchMat\nAmpereHeptagon\nEclipseBaldy\nLliediDiopside\nRockersGatcombe\nSabineEssential\nPlutoAbsurd\nTagTestify\nForswearJosie\nEquuleusFalter\nChewieFluther\nWombYakama\nHinderHighland\nBiteSeptum\nRifleGym\nJuneauInboard\nTroubadourChillingwood\nNeogeneLecturer\nSullivanStencils\nCheesecakePit\nClumpUnhelpful\nCheckBig\nLollyPumpkin\nCitrusyCountless\nVarunaRemy\nDivergentOils\nFallingTalisker\nBlackwaterNifty\nBrinkworthFranklyn\nFreddyPostman\nClumperPoke\nSlopeTokahee\nStencilsHume\nJijiKey\nAdeptStores\nUnicodeIgneous\nMeatyNut\nMaskSpark\nForegoingMoist\nEthicalConfident\nOblongataIsraeli\nGreenAle\nFibulaJoss\nShrugMinge\nFlowsWhispers\nActiveGlissade\nExaltedSpaghetti\nMeerkatMatch\nCouldHoff\nYawnObtuse\nCrazyUnknown\nPlanemoTyler\nCalderaBeans\nSoundcloudJapan\nSeveralGalled\nStarbucksDomain\nEdibleGlazier\nResourcesCapital\nNitrogenBella\nFlavorfulProtoplanet\nTeachSqueeze\nMeiosisSiphon\nTelephoneMarl\nTrundleRitec\nTheodoreShamrock\nNoirMelody\nVanillaArmenian\nHonkExoticism\nMandibleSepsis\nVenomousSignal\nManukaEval\nLooksLeaves\nFriedInto\nBlowTalented\nStubbsHeadphones\nWigeonNewcastle\nLoadHamster\nPinkieSaint\nEuphoniumRedundant\nSabdenRoad\nSuccessApache\nPateraCitric\nBalnagownQuiver\nGambianHartford\nRidingNostalgic\nAmbushFlex\nBretonCommon\nSpot!Fine\nPlaintivePride\nDiphthongPraline\nShearraInflate\nWoldsLennon\nSordiniMeathead\nSordCegidog\nSelfiesWeigh\nOrganVile\nPinchWeixin\nSassyFlag\nAlberniDart\nBowenImmense\nRulerFocus\nMaggotMine\nRegulateInventions\nMeshAlbite\nPoxArabella\nTikiFredericton\nNeedleDiapir\nGeneBlurt\nBindyFollowed\nMongolianTurtle\nSenseProfess\nFoldingHacking\nArsonistClipping\nKerryBonnie\nMaliciousMilitary\nMountainFrivolous\nCannonCog\nCordFlapping\nSnickerIndonesian\ndome\nking\nohio\nstandard\nfustilarian\nnative\nsupply\namherst\ninitial\ntowel\npumpion\nperfect\nmouldy\nflasks\ncarina\nduchess\ncrackers\nexciting\nhole\nwiggle\ngreat\nben\npoop\notis\npolite\nslapping\notherwise\ngrilled\nwes\nsummary\nnice\nbasketball\nstarbolins\nbaby\nbooking\nrhubarb\nperson\nshooter\nbounded\nnorthamptonshire\nsyllable\ngreenish\nuptight\ntweed\nthe\nreeky\nlathered\nascension\nobtain\nnagging\nchallenger\nsecret\nworcester\nlangley\npolly\nurinal\ntrusting\nbeverley\nfrankie\ndartmoor\nmash\ngillie\nmethodist\ngalaxy\nmozart\nbarrage\nspoticus\nscheduled\neel\npanel\nflapjack\nchemist\nalbert\nmetacarpus\ndense\nbleeding\nfixation\nniggles\ncamel\nrosin\ncommunity\nleash\ndulais\nladder\nlee\nindices\nyou\neducation\ndumplings\nbid\nprince\nartiste\navocet\nburns\nbarney\nmanaged\nburritos\npeduncle\npaltry\nequator\nsubmerge\nexpected\nfags\nperl\nclueless\ncartier\nwombled\nbearded\nkalman\ntrees\npink\naddie\ntod\nusd";
  var _0x408225 = _0x19b808.split("\n");
  var _0x50b8c9 = Object.defineProperty;
  var _0x447217 = (_0x8ff006, _0x1b2667, _0xbc7cda) => {
    if (typeof _0x1b2667 !== "symbol") {
      _0x1b2667 += "";
    }
    if (_0x1b2667 in _0x8ff006) {
      return _0x50b8c9(_0x8ff006, _0x1b2667, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0xbc7cda
      });
    }
    return _0x8ff006[_0x1b2667] = _0xbc7cda;
  };
  class _0x3216a4 {
    constructor(_0xc4692b) {
      _0x447217(this, "onMouseDownPaper");
      _0x447217(this, "onKeyDown", _0x4d7610 => this.onKeyChange(_0x4d7610, true));
      _0x447217(this, "onKeyUp", _0x21b8b1 => this.onKeyChange(_0x21b8b1, false));
      _0x447217(this, "onMouseDown", _0x4d07f2 => {
        if (this.onMouseDownPaper) {
          this.onMouseDownPaper(_0x4d07f2);
        }
        this.onMouseChange(_0x4d07f2, true);
      });
      _0x447217(this, "onMouseUp", _0x225612 => this.onMouseChange(_0x225612, false));
      _0x447217(this, "onMouseLeave", _0x4de02f => {
        _0x4de02f.preventDefault();
      });
      _0x447217(this, "onTouchEnd", this.onMouseLeave);
      _0x447217(this, "onMouseMove", _0x2b4841 => {
        this.mouse = {
          x: _0x2b4841.pageX,
          y: _0x2b4841.pageY
        };
        _0x2b4841.preventDefault();
      });
      _0x447217(this, "onMouseEnter", _0x5c7967 => {
        this.onMouseMove(_0x5c7967);
        const {
          buttons: _0xdf17d5
        } = _0x5c7967;
        this.buttons = {
          left: !!(_0xdf17d5 & 1),
          middle: !!(_0xdf17d5 & 4),
          right: !!(_0xdf17d5 & 2)
        };
        _0x5c7967.preventDefault();
      });
      _0x447217(this, "onTouchMove", _0x5b72dc => {
        const _0x1a5f93 = _0x5b72dc.changedTouches[0];
        this.mouse = {
          x: _0x1a5f93.clientX,
          y: _0x1a5f93.clientY
        };
      });
      this.up = false;
      this.down = false;
      this.left = false;
      this.right = false;
      this.modifiers = {
        shift: false,
        ctrl: false,
        alt: false,
        meta: false
      };
      this.mouse = null;
      this.buttons = {
        left: false,
        middle: false,
        right: false
      };
      this.view = _0xc4692b;
      this.handlers = [];
      this.keyboard = null;
      this.wheel = 0;
      this.listen("keydown", this.onKeyDown, window);
      this.listen("keyup", this.onKeyUp, window);
      this.listen("contextmenu", _0x18fab0 => _0x18fab0.preventDefault());
      this.listen("mouseenter", this.onMouseEnter);
      this.listen("mousemove", this.onMouseMove);
      this.listen("mouseleave", this.onMouseLeave);
      this.listen("mousedown", this.onMouseDown);
      this.listen("mouseup", this.onMouseUp);
      this.listen("wheel", this.onMouseWheel);
      this.listen("touchstart", this.onTouchMove);
      this.listen("touchmove", this.onTouchMove);
      this.listen("touchend", this.onTouchEnd);
      this.listen("touchcancel", this.onTouchEnd);
    }
    listen(_0x866e32, _0x3e4fa6, _0x4b6ce0) {
      if (!_0x4b6ce0) {
        _0x4b6ce0 = this.view;
      }
      _0x4b6ce0.addEventListener(_0x866e32, _0x3e4fa6.bind(this), ["touchstart", "touchmove", "wheel"].includes(_0x866e32) ? {
        passive: true
      } : false);
      this.handlers.push({
        element: _0x4b6ce0,
        event: _0x866e32,
        handler: _0x3e4fa6
      });
    }
    dispose() {
      for (let {
        element: _0x4118e5,
        event: _0x49fa1a,
        handler: _0xf7d1db
      } of this.handlers) {
        _0x4118e5.removeEventListener(_0x49fa1a, _0xf7d1db, false);
      }
    }
    keyPressed() {
      return this.up || this.down || this.left || this.right;
    }
    onKeyChange(_0xa5d27a, _0x436b1d) {
      if (_0xa5d27a.target === document.body) {
        let _0x3056e2 = true;
        const {
          keyCode: _0x1f26a7
        } = _0xa5d27a;
        switch (_0x1f26a7) {
          case 38:
          case 87:
            this.up = _0x436b1d;
            break;
          case 40:
          case 83:
            this.down = _0x436b1d;
            break;
          case 37:
          case 65:
            this.left = _0x436b1d;
            break;
          case 39:
          case 68:
            this.right = _0x436b1d;
            break;
          case 67:
            if (!_0x436b1d) {
              this.switchKeyboardMode();
            }
            break;
          default:
            _0x3056e2 = false;
            break;
        }
        this.modifiers.shift = _0xa5d27a.shiftKey;
        this.modifiers.ctrl = _0xa5d27a.ctrlKey;
        this.modifiers.alt = _0xa5d27a.altKey;
        this.modifiers.meta = _0xa5d27a.metaKey;
        if (_0x3056e2) {
          _0xa5d27a.preventDefault();
        }
      }
    }
    switchKeyboardMode() {}
    onMouseChange(_0x16e926, _0x11fbb4) {
      switch (_0x16e926.button) {
        case 0:
          this.buttons.left = _0x11fbb4;
          break;
        case 1:
          this.buttons.middle = _0x11fbb4;
          break;
        case 2:
          this.buttons.right = _0x11fbb4;
          break;
      }
    }
    readInput() {
      let _0x3f8c25 = null;
      if (this.keyPressed()) {
        this.lastMouse = null;
        const _0x5656bb = new _0x320aa6(0, 0);
        if (this.up) {
          _0x5656bb.add(new _0x320aa6(0, -1));
        }
        if (this.down) {
          _0x5656bb.add(new _0x320aa6(0, 1));
        }
        if (this.left) {
          _0x5656bb.add(new _0x320aa6(-1, 0));
        }
        if (this.right) {
          _0x5656bb.add(new _0x320aa6(1, 0));
        }
        if (_0x5656bb.magnitude()) {
          _0x3f8c25 = _0x5656bb;
        } else {
          return this.direction || 0;
        }
        let _0x17faa8 = _0x3f8c25.toDirection();
        let _0x2aa67d = (_0x17faa8 - this.direction + _0x57ae42) % _0x57ae42;
        if (_0x2aa67d < 6 || _0x2aa67d > _0x57ae42 - 6) {
          this.direction = _0x17faa8;
        } else {
          this.direction = (this.direction + (_0x2aa67d < _0x57ae42 / 2 ? 2 : -2) + _0x57ae42) % _0x57ae42;
        }
        delete this.mouse;
      } else if (this.mouse) {
        let _0x238209 = new _0x320aa6(this.view.clientWidth / 2, this.view.clientHeight / 2);
        if (this.mouse) {
          _0x3f8c25 = new _0x320aa6(this.mouse.x, this.mouse.y).sub(_0x238209).normalize();
        }
        this.direction = _0x3f8c25.toDirection();
      }
      return this.direction || 0;
    }
    onMouseWheel(_0x19a967) {
      this.wheel += _0x19a967.deltaY;
    }
  }
  let _0x4390f1;
  function _0x114111(_0x20e6a2) {
    _0x20e6a2.game.updateEffects(_0x20e6a2.delta);
    _0x4390f1 = _0x20e6a2;
    let {
      game: _0x586c87,
      localPlayer: _0x19105a
    } = _0x20e6a2;
    const {
      baseHeight: _0x3ebbc5
    } = _0x586c87.config;
    for (let _0x7d522c of _0x586c87.units) {
      if (_0x7d522c.base) {
        _0x198b9c(_0x7d522c.base.polygon);
      }
    }
    _0x198b9c(_0x586c87.border.polygon);
    let {
      ctx: _0x25f743,
      devicePixelRatio: _0x1249cc,
      viewWidth: _0x59cd50,
      viewHeight: _0x556f44,
      origin: _0x4dc906,
      scale: _0x234199
    } = _0x20e6a2;
    _0x25f743.lineCap = "round";
    _0x20e6a2.verticeNumbers = false;
    if (_0x20e6a2.debugView) {
      if (_0x20e6a2.debugSettings.scale != null) {
        _0x234199 = _0x20e6a2.debugSettings.scale;
        if (_0x234199 > 10) {
          _0x20e6a2.verticeNumbers = true;
        }
      }
      if (_0x20e6a2.debugSettings.origin != null) {
        _0x4dc906 = _0x20e6a2.debugSettings.origin;
      }
    }
    _0x25f743.resetTransform();
    _0x25f743.clearRect(0, 0, _0x59cd50, _0x556f44);
    const _0x4e5c0a = _0x4dc906.x * _0x234199 - _0x59cd50 / 2;
    const _0x24f0f4 = _0x4dc906.y * _0x234199 - _0x556f44 / 2;
    _0x25f743.translate(-_0x4e5c0a, -_0x24f0f4);
    _0x25f743.scale(_0x234199, _0x234199);
    _0x25f743.translate(0, -_0x3ebbc5);
    _0x39092b(_0x20e6a2);
    _0x50b8e8(_0x20e6a2);
    if (!_0x20e6a2.debugView) {
      _0x25f743.translate(0, _0x3ebbc5);
    }
    _0x25f743.globalCompositeOperation = "destination-over";
    _0x476d(_0x20e6a2, "back");
    _0x565e9c(_0x20e6a2);
    if (!_0x37efce.simplified) {
      _0xce081c(_0x20e6a2);
    }
    _0x45deae(_0x20e6a2);
    _0x25f743.globalCompositeOperation = "source-over";
    _0x476d(_0x20e6a2, "front");
    _0x90ff6a(_0x20e6a2);
    _0x2aa8d6(_0x20e6a2);
    _0x5f4a54(_0x20e6a2);
    _0x358f46(_0x20e6a2);
    {
      if (_0x20e6a2.debugView) {
        _0x3aace8(_0x20e6a2, true);
      }
    }
    _0x25f743.resetTransform();
    _0x25f743.scale(1 / _0x1249cc, 1 / _0x1249cc);
    if (!_0x19105a || !_0x19105a.death) {
      _0x300f18(_0x20e6a2);
      _0x115b3a(_0x20e6a2);
      _0x10b7d9(_0x20e6a2);
      _0x1599a7(_0x20e6a2);
      _0x3360ab(_0x20e6a2);
      _0x48b3dc(_0x20e6a2);
    }
    if (_0x20e6a2.showGameInfo) {
      _0x5ac4dd(_0x20e6a2);
    }
  }
  const _0x39092b = _0x471c67 => {
    const {
      game: _0x38e98e,
      boundsInView: _0x14605e
    } = _0x471c67;
    const _0x3b56c2 = _0x471c67.ctx;
    const {
      trackWidth: _0xfe9580
    } = _0x38e98e.config;
    _0x38e98e.units.forEach(_0x2b8b6f => {
      if (_0x14605e(_0x2b8b6f.base.polygon, _0xfe9580) || _0x471c67.debugView) {
        if (_0x471c67.debugView) {
          let _0x49c8ed = "rgba(" + Object.values(_0x44b649(_0x2b8b6f.skin.colors.main)).join(",") + ",0.3)";
          _0x18b595(_0x3b56c2, _0x2b8b6f.base.polygon, _0x49c8ed);
          _0x3b56c2.beginPath();
          _0x3b56c2.strokeStyle = _0x2b8b6f.skin.colors.back;
          _0x56d00d(_0x3b56c2, _0x2b8b6f.base.polygon.segments);
          _0x3b56c2.stroke();
          _0x3b56c2.fillStyle = _0x2b8b6f.skin.colors.main;
          for (let _0x1eabe9 in _0x2b8b6f.base.polygon.segments) {
            let _0x3cb928 = _0x2b8b6f.base.polygon.segments[_0x1eabe9];
            let _0x15a5a3 = _0x3cb928.start.at;
            _0x3b56c2.fillRect(_0x15a5a3.x - 0.2, _0x15a5a3.y - 0.2, 0.4, 0.4);
          }
          if (_0x471c67.verticeNumbers) {
            _0x3b56c2.fillStyle = "#000";
            for (let _0x51516c in _0x2b8b6f.base.polygon.segments) {
              let _0x37a6ff = _0x2b8b6f.base.polygon.segments[_0x51516c];
              let _0x2c4fa0 = _0x37a6ff.start.at;
              _0x3b56c2.font = 14 / _0x471c67.debugSettings.scale + "px " + _0x471c67.font;
              _0x3b56c2.fillText(_0x51516c + " " + _0x37a6ff.start.id + " " + _0x37a6ff.id, _0x2c4fa0.x, _0x2c4fa0.y);
              _0x3b56c2.fillText(~~_0x37a6ff.start.at.x + " " + ~~_0x37a6ff.start.at.y, _0x2c4fa0.x, _0x2c4fa0.y + 14 / _0x471c67.debugSettings.scale);
            }
          }
        } else {
          _0x18b595(_0x3b56c2, _0x2b8b6f.base.polygon, _0x2b8b6f.skin.pattern && _0x2b8b6f.skin.pattern.pattern || _0x2b8b6f.skin.colors.main, {
            center: _0x471c67.origin
          });
        }
      }
    });
  };
  const _0xce081c = _0x1f8572 => {
    const {
      game: _0x4e064b,
      ctx: _0x27ecad,
      boundsInView: _0x30c87f
    } = _0x1f8572;
    const {
      trackWidth: _0x1f1dd3
    } = _0x4e064b.config;
    if (_0x1f8572.debugView) {
      return;
    }
    _0x4e064b.units.forEach(_0x5bd24c => {
      if (_0x30c87f(_0x5bd24c.base.polygon, _0x1f1dd3)) {
        _0x18b595(_0x27ecad, _0x5bd24c.base.polygon, _0x5bd24c.skin.colors.back, {
          center: _0x1f8572.origin
        });
      }
    });
  };
  const _0x50b8e8 = _0x105157 => {
    const {
      game: _0x489b2b,
      ctx: _0x21df7f,
      boundsInView: _0x4d3d22,
      origin: _0x3e8333
    } = _0x105157;
    const _0x5add0b = _0x489b2b.config.trackWidth;
    if (_0x105157.debugView) {
      return;
    }
    _0x21df7f.save();
    if (!_0x37efce.simplified) {
      _0x21df7f.globalCompositeOperation = "destination-out";
    }
    _0x489b2b.units.forEach(_0x2e919a => {
      if (_0x105157.debugView) {
        return;
      }
      if (_0x2e919a.tail.polyline.start) {
        if (_0x4d3d22(_0x2e919a.tail.polyline, _0x5add0b) || _0x105157.debugView) {
          _0x1e1669(_0x21df7f, _0x2e919a.skin.colors.main, _0x2e919a, _0x5add0b, _0x3e8333);
          if (!_0x37efce.simplified) {
            _0x21df7f.save();
            _0x21df7f.globalCompositeOperation = "destination-over";
            _0x21df7f.clip(_0x2e919a.base.polygon.path);
            _0x1e1669(_0x21df7f, _0x2e919a.skin.pattern && _0x2e919a.skin.pattern.pattern || _0x2e919a.skin.colors.main, _0x2e919a, _0x5add0b + 2, _0x3e8333);
            _0x21df7f.restore();
          }
        }
      }
    });
    _0x21df7f.restore();
  };
  const _0x476d = (_0x4ab5f3, _0x237ad4) => {
    const {
      game: _0x50362b,
      pointInView: _0x202e07
    } = _0x4ab5f3;
    let _0x2cd082 = _0x4ab5f3.ctx;
    const {
      trackWidth: _0x2b18a7
    } = _0x50362b.config;
    let _0x411aa6 = _0x237ad4 != "back";
    _0x50362b.units.forEach(_0x27666d => {
      if (_0x4ab5f3.debugView) {
        _0x2cd082.strokeStyle = _0x27666d.skin.colors.main;
        _0x2cd082.lineWidth = 0.5;
        _0x2cd082.strokeRect(_0x27666d.at.x - 3, _0x27666d.at.y - 3, 6, 6);
        _0x2cd082.lineWidth = 0.2;
        _0x2cd082.strokeRect(_0x27666d.at.x - 0.2, _0x27666d.at.y - 0.2, 0.4, 0.4);
      } else if (_0x202e07(_0x27666d.at, _0x2b18a7 * 4) || _0x4ab5f3.debugView) {
        _0x3fed07(_0x50362b.config, _0x2cd082, _0x27666d, [_0x27666d.skin.container, _0x27666d.skin.backupContainer], _0x411aa6);
      }
    });
  };
  const _0x2aa8d6 = _0x4424e6 => {
    const {
      game: _0x3ccdbd,
      ctx: _0x18e071,
      scale: _0x4202f8,
      scaler: _0x2f548d,
      pointInView: _0x26ab0c
    } = _0x4424e6;
    const {
      trackWidth: _0xff6c0a,
      font: _0x31de3c
    } = _0x3ccdbd.config;
    _0x3ccdbd.units.forEach(_0x4b2d84 => {
      if (_0x26ab0c(_0x4b2d84.at, _0xff6c0a * 20) || _0x4424e6.debugView) {
        _0x5c9aab(_0x18e071, _0x4b2d84, _0x4202f8, _0x2f548d, _0x31de3c, _0x4424e6.showGameInfo);
      }
    });
  };
  const _0x565e9c = _0x11e2a7 => {
    const {
      game: _0x2fd828,
      ctx: _0x6059d8,
      boundsInView: _0x4403a6,
      localPlayer: _0x19ff23,
      origin: _0x1d9b32,
      scaler: _0x120c4a
    } = _0x11e2a7;
    let _0x329ad6 = _0x11e2a7.debugView ? _0x11e2a7.debugSettings.trackWidth : _0x2fd828.config.trackWidth;
    _0x6059d8.save();
    _0x6059d8.lineCap = "round";
    _0x2fd828.units.forEach(_0x5dd5e6 => {
      if (_0x5dd5e6.in !== _0x5dd5e6.base) {
        if (_0x11e2a7.debugView) {
          _0x6059d8.lineWidth = 0.5;
          _0x6059d8.fillStyle = "#000000";
          for (let _0x409b6a of _0x5dd5e6.tail.polyline.segments) {
            let _0x202b3c = _0x409b6a.start.at;
            _0x6059d8.fillRect(_0x202b3c.x - 0.1, _0x202b3c.y - 0.1, 0.2, 0.2);
          }
          _0x339887(_0x6059d8, _0x5dd5e6.skin.colors.main, _0x5dd5e6, 0.3);
        } else if (_0x4403a6(_0x5dd5e6.tail.polyline, _0x329ad6) || _0x11e2a7.debugView) {
          _0x1e1669(_0x6059d8, _0x2fd828.tailRecovered && _0x5dd5e6 == _0x19ff23 ? "#f00" : _0x5dd5e6.skin.colors.main, _0x5dd5e6, _0x329ad6, _0x1d9b32, _0x5dd5e6.skin.colors.back);
        }
      }
    });
    _0x6059d8.restore();
  };
  const _0x45deae = _0x50ad28 => {
    const {
      game: _0x23ec19,
      ctx: _0x4342f8,
      viewScreenWidth: _0x286845,
      viewScreenHeight: _0x28c88d
    } = _0x50ad28;
    const {
      baseHeight: _0x385cc8,
      arenaColor: _0x637b7b,
      borderColor: _0x77299b,
      backgroundTopColor: _0xd01c00,
      backgroundBottomColor: _0x291357
    } = _0x23ec19.config;
    if (!_0x37efce.simplified) {
      _0x18b595(_0x4342f8, _0x23ec19.border.polygon, _0x637b7b);
    }
    _0x4342f8.strokeStyle = _0x77299b;
    _0x4342f8.lineWidth = _0x385cc8 * 3;
    _0x4342f8.stroke(_0x23ec19.border.polygon.path);
    _0x4342f8.closePath();
    _0x4342f8.fillStyle = _0x37efce.simplified ? _0x637b7b : _0x1d8f96(_0x4342f8, _0x23ec19.space, _0xd01c00, _0x291357);
    _0x4342f8.fillRect(_0x286845 / -2, _0x28c88d / -2, _0x23ec19.space.width + _0x286845, _0x23ec19.space.height + _0x28c88d);
  };
  const _0x5f4a54 = _0x27e882 => {
    const {
      game: _0x3ed8c7,
      ctx: _0x4f5cff,
      pointInView: _0x2f800f
    } = _0x27e882;
    const {
      trackWidth: _0x114924
    } = _0x3ed8c7.config;
    _0x4f5cff.save();
    _0x3ed8c7.particles.forEach(_0x40eaaf => _0x40eaaf.time > 0 && _0x2f800f(_0x40eaaf.at, _0x114924) && _0x40eaaf.draw(_0x4f5cff));
    _0x4f5cff.restore();
  };
  const _0x3aace8 = (_0x260b7b, _0x1c9cdd) => {
    const {
      game: _0x77413b,
      ctx: _0x3c3c04
    } = _0x260b7b;
    _0x77413b.units.forEach(_0xb30821 => {
      if (_0x1c9cdd && !_0xb30821.isPlayer) {
        return;
      }
      const {
        x: _0xbd0586,
        y: _0x131d87
      } = _0xb30821.at;
      _0x3c3c04.beginPath();
      _0x3c3c04.lineWidth = 1;
      _0x3c3c04.strokeStyle = _0xb30821 == _0x260b7b.localPlayer ? "#a0a" : "#000";
      _0x3c3c04.arc(_0xbd0586, _0x131d87, _0xb30821.vrange, 0, Math.PI * 2);
      _0x3c3c04.stroke();
    });
  };
  const _0x358f46 = _0x5d9e29 => {
    const {
      game: _0x551883,
      ctx: _0x389f98,
      scale: _0x594147,
      scaler: _0x4acfb5
    } = _0x5d9e29;
    const {
      font: _0x24fd9d
    } = _0x551883.config;
    _0x389f98.scale(1 / _0x594147, 1 / _0x594147);
    _0x551883.labels.forEach(_0x3c2223 => _0x3c2223.draw(_0x389f98, _0x24fd9d, _0x594147, _0x4acfb5));
    _0x389f98.scale(_0x594147, _0x594147);
  };
  const _0x90ff6a = _0x29a182 => {
    const {
      game: _0x4b949e,
      ctx: _0x2e01fd,
      scale: _0x2e8e5b,
      scaler: _0x230765
    } = _0x29a182;
    const _0x1fd32c = _0x4b949e.ranks[0];
    if (_0x1fd32c) {
      _0x189e42(_0x2e01fd, _0x1fd32c, _0x2e8e5b, _0x230765);
    }
  };
  const _0x3360ab = _0x587b5f => {
    const {
      game: _0x6a2772,
      ctx: _0x57d0e5,
      scaler: _0x350e87,
      calcMult: _0x176f4a,
      viewScreenWidth: _0xada89d,
      viewScreenHeight: _0x588f87,
      padding: _0x498c9e,
      localPlayer: _0x2dcb51,
      origin: _0xacf614
    } = _0x587b5f;
    const _0x437f05 = _0xada89d / _0x176f4a(8, 3);
    const _0x32a67e = _0x6a2772.space.width / _0x437f05 * _0x350e87 * 3;
    _0x57d0e5.save();
    _0x57d0e5.translate(_0xada89d - _0x498c9e - _0x437f05, _0x588f87 - _0x498c9e - _0x437f05);
    _0x57d0e5.scale(_0x437f05 / _0x6a2772.space.width, _0x437f05 / _0x6a2772.space.height);
    _0x18b595(_0x57d0e5, _0x6a2772.border.polygon, "#c2d6cdaa");
    if (_0x587b5f.showGameInfo) {
      for (let _0x2dd362 of _0x6a2772.units) {
        _0x47b0d1(_0x57d0e5, _0x2dd362, _0x32a67e);
      }
    } else if (_0x2dcb51) {
      _0x47b0d1(_0x57d0e5, _0x2dcb51, _0x32a67e);
    }
    const _0x5ddea4 = _0x6a2772.units.some(_0x45fea8 => _0x2dcb51 && _0x45fea8 != _0x2dcb51 && _0x45fea8.in === _0x2dcb51.base) ? "#ff0000" : "#00000099";
    _0x17a769(_0x57d0e5, _0x6a2772.border.polygon.path, _0x5ddea4, _0x32a67e);
    _0x57d0e5.restore();
  };
  function _0x47b0d1(_0x3a6f50, _0x2edf03, _0x49717c) {
    if (_0x2edf03.isPlayer) {
      _0x18b595(_0x3a6f50, _0x2edf03.base.polygon, _0x2edf03.skin.colors.main);
    }
    _0x17a769(_0x3a6f50, _0x2edf03.base.polygon.path, _0x2edf03.skin.colors.back, _0x49717c / 2);
    _0x1e1669(_0x3a6f50, _0x2edf03.skin.colors.back, _0x2edf03, _0x49717c / 2, null);
    _0x3a6f50.beginPath();
    _0x3a6f50.arc(_0x2edf03.at.x, _0x2edf03.at.y, _0x49717c, 0, Math.PI * 2);
    _0x3a6f50.fillStyle = _0x2edf03.skin.colors.nick;
    _0x3a6f50.fill();
  }
  let _0x22bf99;
  window.addEventListener("resize", () => _0x22bf99 = null, false);
  const _0x300f18 = _0x525088 => {
    let {
      ctx: _0x2c3f83,
      devicePixelRatio: _0x2d269c
    } = _0x525088;
    if (!_0x22bf99) {
      _0x22bf99 = document.createElement("canvas");
      _0x22bf99.width = ~~_0x525088.barWidth;
      _0x22bf99.height = ~~(_0x525088.barHeight * 1.3 * 8);
    }
    if (_0xbc0b1b(_0x525088)) {
      let _0x89cdd7 = _0x22bf99.getContext("2d");
      _0x89cdd7.save();
      _0x89cdd7.clearRect(0, 0, _0x22bf99.width, _0x22bf99.height);
      _0x89cdd7.translate(-_0x2c3f83.canvas.width + _0x22bf99.width, 0);
      _0x89cdd7.scale(1 / _0x2d269c, 1 / _0x2d269c);
      _0x211271(_0x89cdd7, _0x525088);
      _0x89cdd7.restore();
    }
    _0x2c3f83.save();
    _0x2c3f83.resetTransform();
    if (_0x22bf99.width > 0) {
      _0x2c3f83.drawImage(_0x22bf99, _0x2c3f83.canvas.width - _0x22bf99.width, 0);
    }
    _0x2c3f83.restore();
  };
  let _0x5c6ee7;
  const _0x38a909 = (_0xb5d502, _0xf600ef, _0x48adcd, _0x22c102, _0x579217, _0x6f93fc) => {
    const {
      game: _0x27def4,
      viewScreenWidth: _0x2e4843,
      padding: _0xc0ee0e,
      backHeight: _0x149ac3,
      barHeight: _0x54a1b8,
      halfBarHeight: _0x186630,
      barWidth: _0x527ebe,
      halfBarWidth: _0xae7fae,
      strokeWidth: _0x23acda,
      uiFont: _0xde3e0c
    } = _0xf600ef;
    const _0x35cb6b = _0xc0ee0e + _0x579217 * (_0x54a1b8 * 1.3);
    const _0x567591 = _0x48adcd.schemes.scores();
    let _0x32e324 = _0xae7fae * (_0x567591 / _0x6f93fc);
    if (_0x5c6ee7 && _0x32e324 > _0x5c6ee7 - _0xae7fae * 0.05) {
      _0x32e324 = _0x5c6ee7 - _0xae7fae * 0.05;
    }
    _0x5c6ee7 = _0x32e324;
    const _0x33c592 = _0xae7fae + _0x32e324;
    let _0x12f9b0 = _0x2e4843 - _0x33c592;
    const _0x5b4fd3 = [_0x186630, 0, 0, _0x186630];
    _0xb5d502.fillStyle = "#00000022";
    _0x1e1b7b(_0xb5d502, _0x12f9b0 + _0x149ac3, _0x35cb6b + _0x149ac3 * 3, _0x527ebe, _0x54a1b8, _0x5b4fd3);
    _0xb5d502.fillStyle = _0x48adcd.skin.colors.back;
    _0x1e1b7b(_0xb5d502, _0x12f9b0, _0x35cb6b + _0x149ac3, _0x527ebe, _0x54a1b8, _0x5b4fd3, _0x23acda);
    _0xb5d502.fillStyle = _0x48adcd.skin.colors.main;
    _0x1e1b7b(_0xb5d502, _0x12f9b0, _0x35cb6b, _0x527ebe, _0x54a1b8, _0x5b4fd3, _0x23acda);
    _0xb5d502.fillStyle = _0x48adcd.skin.colors.plate;
    _0xb5d502.font = _0xde3e0c;
    _0xb5d502.textAlign = "left";
    _0xb5d502.textBaseline = "middle";
    _0xb5d502.fillText(_0x22c102 + " – " + _0x48adcd.schemes.print() + " " + _0x48adcd.name, _0x12f9b0 + _0x186630, _0x35cb6b + _0x186630 * 1.1);
  };
  const _0x211271 = (_0x43ce5c, _0xe33414) => {
    const _0x4ec068 = _0xe33414.game.ranks[0];
    const _0x3231b1 = _0x4ec068 && _0x4ec068.schemes.scores();
    for (let _0xd72c65 = 0; _0xd72c65 < _0x9e4891.length; _0xd72c65++) {
      _0x38a909(_0x43ce5c, _0xe33414, _0x9e4891[_0xd72c65][0], _0xd72c65 + 1, _0xd72c65, _0x3231b1);
    }
    _0x5c6ee7 = null;
  };
  let _0x9e4891 = [];
  function _0xbc0b1b(_0x1a58ad) {
    let _0x1e3dfd = _0x49e265(_0x1a58ad);
    let _0x7e3209 = _0x1e3dfd.length == _0x9e4891.length && _0x1e3dfd.every((_0x21ac97, _0x7c7afb) => _0x21ac97[0] == _0x9e4891[_0x7c7afb][0] && _0x21ac97[1] == _0x9e4891[_0x7c7afb][1]);
    if (!_0x7e3209) {
      _0x9e4891 = _0x1e3dfd;
    }
    return !_0x7e3209;
  }
  function _0x49e265({
    game: _0x2245e3,
    localPlayer: _0x4d8bdc
  }) {
    let _0x1e1204 = [];
    let _0x102f91 = false;
    for (let _0x5b4bec = 0; _0x5b4bec < 5; _0x5b4bec++) {
      const _0x3b4c83 = _0x2245e3.ranks[_0x5b4bec];
      if (_0x3b4c83) {
        if (_0x3b4c83 == _0x4d8bdc) {
          _0x102f91 = true;
        }
        _0x1e1204.push([_0x3b4c83, _0x3b4c83.percent]);
      }
    }
    if (!_0x102f91 && _0x4d8bdc && !_0x4d8bdc.death) {
      _0x1e1204.push([_0x4d8bdc, _0x4d8bdc.percent]);
    }
    return _0x1e1204;
  }
  const _0x115b3a = _0x2be1bf => {
    const {
      game: _0xefc2c0,
      ctx: _0x22debc,
      padding: _0x387c85,
      backHeight: _0x31ccbd,
      barHeight: _0x53edfe,
      halfBarHeight: _0xeb073b,
      barWidth: _0x124db9,
      strokeWidth: _0x1d3e8b,
      uiFont: _0x3d6df3,
      localPlayer: _0x100f6e
    } = _0x2be1bf;
    if (!_0x100f6e) {
      return;
    }
    _0x22debc.fillStyle = "#00000022";
    _0x1e1b7b(_0x22debc, 0, _0x387c85, _0x124db9, _0x53edfe + _0x31ccbd, [0, (_0x53edfe + _0x31ccbd) / 2, (_0x53edfe + _0x31ccbd) / 2, 0]);
    const _0x5e2d19 = _0xefc2c0.best ? Math.min(1, _0x100f6e.schemes.scores() / _0xefc2c0.best) : 1;
    const _0x5794dd = _0x124db9 * (0.25 + _0x5e2d19 * 0.75);
    _0x22debc.fillStyle = _0x100f6e.skin.colors.back;
    _0x1e1b7b(_0x22debc, 0, _0x387c85 + _0x31ccbd, _0x5794dd, _0x53edfe, [0, _0xeb073b, _0xeb073b, 0], _0x1d3e8b);
    _0x22debc.fillStyle = _0x100f6e.skin.colors.main;
    _0x1e1b7b(_0x22debc, 0, _0x387c85, _0x5794dd, _0x53edfe, [0, _0xeb073b, _0xeb073b, 0], _0x1d3e8b);
    _0x22debc.fillStyle = _0x100f6e.skin.colors.plate;
    _0x22debc.font = _0x3d6df3;
    _0x22debc.textAlign = "left";
    _0x22debc.textBaseline = "middle";
    _0x22debc.fillText(_0x100f6e.schemes.print(), _0xeb073b, _0x387c85 + _0xeb073b * 1.1);
  };
  const _0x10b7d9 = _0x19e48e => {
    const {
      game: _0x2e5fd6,
      ctx: _0x3398b1,
      padding: _0x45eb6b,
      backHeight: _0x5aef9b,
      barHeight: _0x410b26,
      uiFont: _0x29eab2,
      localPlayer: _0x45e88e,
      bestResult: _0x33e276
    } = _0x19e48e;
    if (!_0x45e88e) {
      return;
    }
    _0x3398b1.font = _0x29eab2;
    _0x3398b1.textAlign = "left";
    _0x3398b1.textBaseline = "top";
    let _0x2fb312 = _0x19e48e.language.bestTxt + " " + _0x45e88e.schemes.print(_0x33e276);
    _0x3398b1.fillStyle = "#00000066";
    _0x3398b1.fillText(_0x2fb312, _0x45eb6b / 2, _0x45eb6b + _0x410b26 + _0x5aef9b + _0x45eb6b / 2);
  };
  const _0x1599a7 = _0x313182 => {
    const {
      game: _0x12e6ef,
      ctx: _0x250e1e,
      scaler: _0x2a4378,
      padding: _0x2e5c7d,
      backHeight: _0x2e360c,
      barHeight: _0x2a6143,
      halfBarHeight: _0x5a26c5,
      fontSize: _0x272c0d,
      uiFont: _0x2351b7,
      localPlayer: _0x5946f1
    } = _0x313182;
    if (!_0x5946f1) {
      return;
    }
    const _0x358377 = _0x2e5c7d + _0x2a6143 + _0x2e360c + _0x272c0d + _0x2e5c7d / 2 + 4;
    _0x250e1e.font = _0x2351b7;
    _0x250e1e.textAlign = "left";
    _0x250e1e.textBaseline = "middle";
    let _0x1c187a = "x" + _0x5946f1.statistics.kills;
    _0x250e1e.fillStyle = "#00000088";
    _0x1e1b7b(_0x250e1e, 0, _0x358377, _0x2a6143 * 1.5 + _0x250e1e.measureText(_0x1c187a).width, _0x2a6143, [0, _0x5a26c5, _0x5a26c5, 0]);
    _0x2d6124(_0x250e1e, _0x2a6143 * 1.4 / 2, _0x358377 + _0x2a6143 / 2, _0x2a4378);
    _0x250e1e.fillStyle = "#ffffffcc";
    _0x250e1e.fillText(_0x1c187a, _0x2a6143 * 1.25, _0x358377 + _0x5a26c5 + _0x2a6143 * 0.03);
  };
  const _0x48b3dc = _0x3e2a21 => {
    const {
      game: _0x40aeab,
      ctx: _0x182611,
      scaler: _0x12b783,
      padding: _0x5c1254,
      backHeight: _0x495b7c,
      barHeight: _0x1be586,
      halfBarHeight: _0x39f71e,
      fontSize: _0x3c65d5,
      uiFont: _0x1d309f,
      viewWidth: _0x3c59cf,
      viewHeight: _0x313eff,
      viewScreenWidth: _0x253fbc,
      viewScreenHeight: _0x24996f
    } = _0x3e2a21;
    const _0x21d061 = _0x3e2a21.notifications.notifications;
    if (_0x21d061.length) {
      const _0xca1f85 = _0x21d061[0];
      if (_0xca1f85.ready) {
        _0x182611.save();
        let {
          title: _0xc9d8fa,
          description: _0x3b2fbf,
          image: _0x275a1a
        } = _0xca1f85;
        _0x182611.font = _0x1d309f;
        const _0xa40149 = _0x3c65d5 * 2 + _0x5c1254;
        const _0x32e2ef = _0xca1f85.position() * (_0xa40149 + _0x5c1254) - _0xa40149;
        const _0x2eef55 = Math.max(_0x182611.measureText(_0xc9d8fa).width, _0x182611.measureText(_0x3b2fbf).width);
        const _0x4b1462 = _0x275a1a ? _0x3c65d5 * 2 : 0;
        const _0x5c8c41 = _0x2eef55 + _0x5c1254 * 5 + _0x4b1462;
        const _0x1515f5 = _0x5c1254 / 2;
        _0x182611.fillStyle = "#00000088";
        _0x1e1b7b(_0x182611, (_0x253fbc - _0x5c8c41) / 2, _0x32e2ef, _0x5c8c41, _0xa40149, [(_0x1be586 + _0x495b7c) / 2, (_0x1be586 + _0x495b7c) / 2, (_0x1be586 + _0x495b7c) / 2, (_0x1be586 + _0x495b7c) / 2]);
        _0x182611.fillStyle = "#ffffff";
        _0x182611.shadowColor = "#ffffff";
        _0x182611.shadowBlur = 1;
        _0x182611.textAlign = "center";
        _0x182611.textBaseline = "top";
        if (_0xc9d8fa != null) {
          _0x182611.fillText(_0xc9d8fa, (_0x253fbc - _0x5c8c41) / 2 + _0x5c8c41 / 2 + _0x4b1462 / 2, _0x32e2ef + _0x1515f5);
        }
        _0x182611.fillStyle = "#ffffff88";
        _0x182611.shadowColor = "#ffffff88";
        _0x182611.shadowBlur = 1;
        _0x182611.font = _0x1d309f;
        _0x182611.fillText(_0x3b2fbf, (_0x253fbc - _0x5c8c41) / 2 + _0x5c8c41 / 2 + _0x4b1462 / 2, _0x32e2ef + _0x1515f5 + (_0xc9d8fa != null ? _0x3c65d5 : _0x3c65d5 / 2));
        _0x182611.shadowColor = "#ffffff";
        _0x182611.shadowBlur = 10;
        if (_0x275a1a) {
          _0x182611.drawImage(_0x275a1a, (_0x253fbc - _0x5c8c41) / 2 + _0x1515f5, _0x32e2ef + _0x1515f5, _0x4b1462, _0x4b1462);
        }
        _0x182611.restore();
      }
    }
  };
  function _0x225f53(_0x230b6e, _0x2ce624) {
    if (!_0x2ce624) {
      _0x2ce624 = _0x4390f1;
    }
    let {
      viewWidth: _0x5a165a,
      viewHeight: _0x159dcb
    } = _0x2ce624;
    let _0x41effa = _0x2ce624.debugSettings.origin.x + (_0x230b6e.x - _0x5a165a / 2) / _0x2ce624.debugSettings.scale;
    let _0x233b46 = _0x2ce624.debugSettings.origin.y + (_0x230b6e.y - _0x159dcb / 2) / _0x2ce624.debugSettings.scale;
    return new _0x320aa6(_0x41effa, _0x233b46);
  }
  function _0x5ac4dd(_0x4fdd7f) {
    const {
      ctx: _0x5a7592,
      game: _0x592495,
      font: _0x1bf602,
      debugSettings: _0x376297,
      mouse: _0x2264a6
    } = _0x4fdd7f;
    _0x5a7592.save();
    _0x5a7592.resetTransform();
    _0x5a7592.textAlign = "left";
    _0x5a7592.textBaseline = "top";
    _0x5a7592.font = "16px " + _0x1bf602;
    let _0x182e61;
    let _0x56f2e3 = 0;
    const _0x43933e = (_0x3bbeea = "", _0x39901c = 0) => {
      if (_0x3bbeea) {
        _0x5a7592.fillText(_0x3bbeea, 10 + _0x39901c * 16 + _0x56f2e3, _0x182e61);
      }
      _0x182e61 += 16;
    };
    for (let _0x2aa757 of Object.entries(["#000000"])) {
      _0x5a7592.fillStyle = _0x2aa757[1];
      _0x182e61 = _0x4fdd7f.quality * 200 - Number(_0x2aa757[0]) * 1;
      _0x56f2e3 = Number(_0x2aa757[0]) * 1;
      let _0xf72cc6 = _0x592495.profiler.average;
      if (_0x376297 && _0x376297.replaySpeed != 1 && _0x376297.replaySpeed != undefined) {
        _0x43933e("Replay Speed: " + _0x376297.replaySpeed);
      }
      _0x43933e("Room: " + _0x4fdd7f.room.name);
      _0x43933e("FPS: " + _0x50f18f(_0x592495.profiler.fps));
      _0x43933e("FPS divergence: " + _0x50f18f(_0x592495.profiler.averageFrameDivergence));
      _0x43933e("Tic: " + _0x592495.tic);
      _0x43933e("Units: " + _0x592495.units.length);
      _0x43933e("Level: " + _0x50f18f(_0x592495.level));
      if (_0x2264a6) {
        let _0x338c7f = _0x225f53(_0x2264a6);
        _0x43933e("Mouse at: " + ~~_0x338c7f.x + "," + ~~_0x338c7f.y);
      }
      _0x43933e();
      _0x43933e("Frame time: " + _0x50f18f(_0xf72cc6.frame));
      _0x43933e("Game time: " + _0x50f18f(_0xf72cc6.game), 1);
      _0x43933e("AI time: " + _0x50f18f(_0xf72cc6.ai), 1);
      _0x43933e("Spawn time: " + _0x50f18f(_0xf72cc6.spawn), 1);
      _0x43933e("Render time: " + _0x50f18f(_0xf72cc6.render), 1);
      if (_0x4fdd7f.localPlayer && _0x4fdd7f.localPlayer.tail) {
        _0x43933e("Track length: " + _0x50f18f(_0x4fdd7f.localPlayer.tail.length), 1);
      }
      _0x43933e("Quality: " + _0x4fdd7f.quality);
      _0x43933e("Scale: " + _0x50f18f(_0x4fdd7f.debugSettings && _0x4fdd7f.debugSettings.scale || _0x4fdd7f.scale));
      _0x43933e("Accum time: " + _0x50f18f(_0x4fdd7f.accumulatedtime));
      _0x43933e("Player Scale: " + _0x50f18f(_0x4fdd7f.playerScale));
      if (_0x4fdd7f.info) {
        for (let _0x4155ad in _0x4fdd7f.info) {
          _0x43933e(_0x4155ad + ":" + _0x4fdd7f.info[_0x4155ad]);
        }
      }
      _0x43933e();
      _0x43933e("Vertices: " + (_0x592495.units.reduce((_0x522075, _0x22d497) => _0x522075 + (_0x22d497.tail ? _0x22d497.tail.polyline.segments.length : 0), 0) + _0x592495.units.reduce((_0xc37e9b, _0x1d3f7a) => _0xc37e9b + (_0x1d3f7a.base ? _0x1d3f7a.base.polygon.segments.length : 0), 0)) + " ");
      _0x43933e("Particles: " + _0x592495.particles.length);
      if (_0x4fdd7f.accumulatedTime) {
        _0x43933e("Last update: " + _0x50f18f(_0x4fdd7f.accumulatedTime) + "ms ago");
      }
      if (_0x4fdd7f.networkInfo) {
        for (let _0x31a738 of Object.keys(_0x4fdd7f.networkInfo)) {
          _0x43933e(_0x31a738 + ": " + _0x50f18f(_0x4fdd7f.networkInfo[_0x31a738]));
        }
      }
      _0x43933e();
      _0x43933e("[A]utopilot " + (_0x4fdd7f.autopilot ? "ON" : "OFF"));
      _0x43933e("[E]xtrapolation " + (_0x4fdd7f.extrapolation ? "ON" : "OFF"));
      _0x43933e("[L]ag simulation " + (_0x4fdd7f.lagSimulation || 0));
      if (_0x4fdd7f.recording) {
        _0x43933e("Recording: " + _0x4fdd7f.recording.duration().toFixed(1) + " s");
      }
      if (_0x4fdd7f.replaying) {
        _0x43933e("Replaying: " + _0x4fdd7f.replaying.currentlyPlaying().toFixed(1) + "/" + _0x4fdd7f.replaying.duration().toFixed(1) + " s");
      }
    }
    _0x5a7592.restore();
    if (_0x4fdd7f.debugGraph) {
      const _0x125e8b = _0x5a7592.canvas.width / 3;
      const _0x1e1084 = 100;
      const _0x2af7fb = new Path2D();
      const _0x412861 = new Path2D();
      const _0x4b8739 = new Path2D();
      const _0x361b61 = new Path2D();
      _0x361b61.moveTo(0, 0);
      let _0x49321c = 16.67;
      _0x592495.metrics.forEach(_0x11ca98 => {
        _0x49321c = Math.max(_0x49321c, _0x11ca98.frameTime);
      });
      _0x49321c *= 1.1;
      const _0xebf01f = _0x125e8b / (_0x2e850e - 1);
      const _0x2d17ba = _0x1e1084 / _0x49321c;
      _0x5a7592.save();
      _0x5a7592.translate((_0x5a7592.canvas.width - _0x125e8b) / 2, _0x1e1084);
      _0x5a7592.fillStyle = "#00000033";
      _0x5a7592.fillRect(0, -_0x1e1084, _0x125e8b, _0x1e1084);
      _0x592495.metrics.forEach((_0x4a0af4, _0x97b111) => {
        _0x2af7fb.lineTo(_0xebf01f * _0x97b111, -_0x4a0af4.updateTime * _0x2d17ba);
        _0x412861.lineTo(_0xebf01f * _0x97b111, -_0x4a0af4.renderTime * _0x2d17ba);
        _0x361b61.lineTo(_0xebf01f * _0x97b111, -(_0x4a0af4.updateTime + _0x4a0af4.renderTime) * _0x2d17ba);
        _0x4b8739.lineTo(_0xebf01f * _0x97b111, -_0x4a0af4.frameTime * _0x2d17ba);
      });
      _0x361b61.lineTo(_0xebf01f * (_0x592495.metrics.length - 1), 0);
      _0x5a7592.lineWidth = 1;
      const _0x4b87c4 = _0x2d17ba * 16.67;
      _0x5a7592.strokeStyle = "red";
      _0x5a7592.beginPath();
      _0x5a7592.moveTo(0, -_0x4b87c4);
      _0x5a7592.lineTo(_0x125e8b, -_0x4b87c4);
      _0x5a7592.stroke();
      _0x5a7592.fillStyle = "#ffff00a0";
      _0x5a7592.fill(_0x361b61);
      _0x5a7592.strokeStyle = "#990099cc";
      _0x5a7592.stroke(_0x2af7fb);
      _0x5a7592.strokeStyle = "#009900cc";
      _0x5a7592.stroke(_0x412861);
      _0x5a7592.strokeStyle = "#0000ffcc";
      _0x5a7592.stroke(_0x4b8739);
      _0x5a7592.lineWidth = 0.5;
      _0x592495.metrics.forEach((_0x31f0df, _0xecfb3f) => {
        const {
          returns: _0x13a25b,
          kills: _0x5b34f2
        } = _0x31f0df.events;
        if (_0x13a25b || _0x5b34f2) {
          if (_0x5b34f2) {
            _0x5a7592.strokeStyle = "#99000040";
          } else {
            _0x5a7592.strokeStyle = "#00000040";
          }
          _0x5a7592.beginPath();
          _0x5a7592.moveTo(_0xebf01f * _0xecfb3f, 0);
          _0x5a7592.lineTo(_0xebf01f * _0xecfb3f, -_0x1e1084);
          _0x5a7592.stroke();
        }
      });
      _0x5a7592.restore();
    }
  }
  var _0xb57166 = Object.defineProperty;
  var _0x1c2aaa = (_0x4c4a03, _0x588e3b, _0x48163d) => {
    if (typeof _0x588e3b !== "symbol") {
      _0x588e3b += "";
    }
    if (_0x588e3b in _0x4c4a03) {
      return _0xb57166(_0x4c4a03, _0x588e3b, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x48163d
      });
    }
    return _0x4c4a03[_0x588e3b] = _0x48163d;
  };
  const _0x304750 = typeof window !== "undefined";
  class _0xc5577 {
    constructor(_0x4726be, _0x5025c6) {
      _0x1c2aaa(this, "tps", 20);
      _0x1c2aaa(this, "debugView", false);
      _0x1c2aaa(this, "clientInfo", {});
      _0x1c2aaa(this, "hideBeforePlayerJoined", false);
      _0x1c2aaa(this, "qas", {
        q9: true,
        q8: true,
        q7: true,
        q6: true,
        q5: true
      });
      _0x1c2aaa(this, "atl", []);
      this.events = new _0xf760a1();
      this.records = [];
      this.environment = _0x4726be;
      this.config = _0x5025c6;
      this.profiler = new _0x5d3fac(_0x493b69);
      this.skins = _0x5025c6.skins && _0x5025c6.skins.filter(_0x47b976 => !_0x47b976.category);
      this.view = _0x4726be.view;
      if (this.startGameOnInit) {
        this.game = this.createGame();
      }
      this.paused = false;
      this.quality = 1;
      this.replaying = null;
      this.startGameOnInit = false;
      this.frameDuration = 50;
      this.game = null;
      this.results = null;
      this.localPlayer = null;
      this.debugSettings = {
        scale: 0.5,
        trackWidth: 2
      };
      if (_0x304750) {
        this.controller = new _0x3216a4(this.view);
        this.controller.onMouseDownPaper = _0x39cbd5 => {
          if (this.debugView) {
            let _0x31ce5c = _0x225f53(this.controller.mouse);
            this.debugSettings.origin = _0x31ce5c;
            let _0x47bba4 = [...this.game.units].sort((_0x376ca0, _0x268a2b) => _0x376ca0.at.distance(_0x31ce5c) - _0x268a2b.at.distance(_0x31ce5c))[0];
            if (_0x47bba4) {
              console.log(_0x47bba4);
              let _0x3bc02d = [..._0x47bba4.base.polygon.segments].sort((_0x49f240, _0xba00ba) => _0x49f240.start.at.distance(_0x31ce5c) - _0xba00ba.start.at.distance(_0x31ce5c))[0];
              console.log(_0x3bc02d);
            }
          }
        };
        this.stopLoop = _0x226750(() => {
          if (this.localPlayer && false) {
            if (!this.localPlayer.moveTo && this.localPlayer.in === null && Math.random() < 0.0005) {
              this.localPlayer.in = this.localPlayer.base;
            }
          }
          this.loop();
        });
      } else {
        setInterval(() => this.loop(), 50);
      }
    }
    loop() {
      if (!this.hideBeforePlayerJoined && !this.localPlayer) {
        return;
      }
      let _0xf4d612 = _0x493b69() - this.lastLoopTime || 0;
      this.lastLoopTime = _0x493b69();
      if (!this.game) {
        return;
      }
      this.profiler.frame();
      this.profiler.start("frame");
      this.profiler.start("game");
      if (!this.paused && !this.visible) {
        let _0x140f3f = _0x493b69();
        this.lastTime = _0x140f3f;
      }
      this.profiler.end("game");
      this.extrapolateUnits(_0xf4d612);
      if (this.visible && _0x114111) {
        this.profiler.start("render");
        let _0x5156fd = this.renderContext;
        _0x5156fd.delta = _0xf4d612;
        _0x114111(_0x5156fd);
        this.profiler.end("render");
      }
      this.profiler.end("frame");
      this.adjustQuality();
    }
    createGame(_0x539a0e, _0x374af3) {
      if (_0x539a0e === null) {
        _0x539a0e = Math.random();
      }
      let _0x6a2697 = new _0x21e5d5(this.config, _0x539a0e);
      let _0x19cdc5 = new _0x3d1e5f({
        config: this.config,
        language: this.environment.lng,
        skinManager: _0x6a2697,
        nameManager: new _0x322294(_0x408225, _0x539a0e),
        schemesManager: new _0x1e89e6(_0x512929),
        seed: _0x539a0e,
        profiler: this.profiler
      });
      this.game = _0x19cdc5;
      _0x19cdc5.localPlayerId = _0x374af3;
      _0x19cdc5.events.bind({
        death: ({
          unit: _0x5dcb03,
          reason: _0x435c5b
        }) => {
          if (_0x5dcb03 === this.localPlayer) {
            this.gameOver(_0x435c5b);
          }
        },
        win: () => {
          this.gameOver(_0x3d705d);
        },
        event: _0x45981b => {
          this.events.emit(_0x45981b);
        },
        spawn: ({
          id: _0xe23c4f
        }) => {
          let _0x6d8fcd = _0xe23c4f === this.game.localPlayerId;
          if (_0x6d8fcd) {
            this.localPlayer = _0x19cdc5.unitById(_0xe23c4f);
            this.initAchievements();
            this.showGame();
          }
        },
        joinError: ({
          id: _0x388a96,
          reason: _0x517e86
        }) => {
          if (_0x388a96 === this.game.localPlayerId) {
            this.gameOver(_0x517e86 || "joinError");
          }
        }
      });
      return _0x19cdc5;
    }
    initAchievements() {
      this.localPlayer.achievements = this.environment.achievements;
      this.environment.achievements.resetCheckers();
    }
    showGame() {
      if (this.visible) {
        return;
      }
      if (this.view) {
        this.view.style.display = "block";
      }
      this.game.removeParticles();
      this.scale = this.config.maxScale - ~~(Math.pow(this.config.baseRadius, 2) * Math.PI / this.game.area * 20) / 20 * (this.config.maxScale - this.config.minScale);
      this.visible = true;
      this.startTime = _0x493b69();
      window.focus();
    }
    extrapolateUnits(_0x230d4c) {
      for (let _0x103b50 of this.game.units) {
        let _0x1b0667;
        _0x1b0667 = _0x320aa6.fromDirection(_0x103b50.nextMovement(this.accumulatedTime, _0x103b50.direction));
        if (_0x103b50 == this.localPlayer && !this.environment.autopilot) {
          _0x1b0667 = _0x1b0667.add(_0x320aa6.fromDirection(this.controller.readInput()).scale(this.accumulatedTime / 1000));
        }
        _0x103b50.extrapolatedFacing = _0x1b0667;
        let _0x1aa7c6 = _0x103b50.extrapolateAt(this.accumulatedTime, _0x103b50.direction);
        let _0xcb659d = _0x320aa6.lerp(_0x103b50.extrapolatedAt, _0x1aa7c6, Math.min(1, _0x230d4c / 50) * (_0x103b50.realSpeedRatio < 0.2 ? _0x103b50.realSpeedRatio : 1));
        _0x103b50.extrapolatedAt = _0xcb659d;
      }
    }
    showGameInfo() {
      return this.localPlayer && this.localPlayer.name && this.environment.isAdmin || this.debugView;
    }
    alert(_0x1ccff9, _0x4f0273) {
      this.game.alert(_0x1ccff9, _0x4f0273, this.localPlayer);
    }
    closeGame() {
      if (this.view) {
        this.view.style.display = "none";
      }
      this.visible = false;
    }
    gameOver(_0x23fc92) {
      var _0x24bfce;
      var _0x10ddb5;
      if (this.game && this.game.over) {
        return;
      }
      console.log("GAME OVER", _0x23fc92);
      let _0xc8f635 = this.game;
      let _0x387341 = this.localPlayer;
      if (window.ga) {
        switch (_0x23fc92) {
          case "connectionError":
            window.ga("send", "event", "PS", "ConnectionError");
            break;
          case "noPlaceToSpawn":
            window.ga("send", "event", "PS", "NoPlaceToSpawn");
            break;
          case "invalidRoomName":
            window.ga("send", "event", "PS", "InvalidRoomName");
            break;
        }
      }
      if (_0x387341 && _0x387341.killer) {
        this.deathPoint = this.localPlayer.killer.at.clone();
      }
      if (_0x23fc92 === _0x3d705d) {
        if (_0xc8f635 && _0xc8f635.winner() == this.localPlayer) {
          if (window.ga) {
            window.ga("send", "event", "PS", "win");
          }
          _0x23fc92 = "win";
        } else {
          _0x23fc92 = "lose";
        }
      }
      this.results = _0x387341 ? {
        version: "A25-2025-12-03T15:49:27.202Z",
        game: _0xc8f635,
        percent: _0x387341.percent,
        score: _0x387341.schemes && _0x387341.schemes.result(),
        name: _0x387341.name,
        top: _0x387341.rank(),
        bestPercent: _0x387341.bestPercent,
        time: _0x493b69() - this.startTime,
        gameOverTime: _0x493b69(),
        kills: _0x387341.statistics.kills,
        killer: _0x387341.killer,
        image: _0x3366d7(this.localPlayer),
        reason: _0x23fc92
      } : {
        reason: _0x23fc92
      };
      this.events.emit({
        event: "gameOver",
        results: this.results
      });
      if (_0x387341 && _0x387341.achievements) {
        _0x387341.achievements.finish();
      }
      this.sendToLeaderboard(this.environment.playerId, this.config.leaderBoardURI);
      if (this.game) {
        this.game.over = true;
      }
      if ((_0x10ddb5 = (_0x24bfce = this.environment) == null ? undefined : _0x24bfce.room) == null) {
        undefined;
      } else {
        _0x10ddb5.loadLeaderboards();
      }
    }
    sendToLeaderboard(_0x4b51fc, _0x260c19) {
      if (_0x260c19 && _0x4b51fc) {
        let _0x393c56 = {
          userId: _0x4b51fc,
          gameCode: "PAPER",
          userName: this.localPlayer.name,
          results: [{
            leaderboardType: "KILLS",
            leaderboardValue: this.localPlayer.statistics ? this.localPlayer.statistics.kills : 0
          }, {
            leaderboardType: "SCORE",
            leaderboardValue: this.localPlayer.schemes ? Math.floor(this.localPlayer.schemes.result() * 100) : 0
          }, {
            leaderboardType: "TIME",
            leaderboardValue: Math.floor((_0x493b69() - this.startTime) / 1000)
          }]
        };
        let _0x327630 = JSON.stringify(_0x393c56);
        fetch(_0x260c19, {
          method: "POST",
          body: _0x327630
        }).catch(_0x37224f => {
          console.log(_0x37224f);
        });
      }
    }
    get renderContext() {
      let {
        game: _0x32933a,
        view: _0x39b200
      } = this;
      if (!_0x39b200) {
        return null;
      }
      const {
        font: _0x50ea01
      } = this.config;
      const _0x4f5153 = _0x39b200.getContext("2d");
      const _0x4808e6 = _0x39b200.clientWidth;
      const _0x37466b = _0x39b200.clientHeight;
      const _0x2bffb8 = ~~(_0x4808e6 * this.quality);
      const _0x15be21 = ~~(_0x37466b * this.quality);
      if (_0x39b200.width !== _0x2bffb8 || _0x39b200.height !== _0x15be21) {
        _0x39b200.width = _0x2bffb8;
        _0x39b200.height = _0x15be21;
      }
      const {
        devicePixelRatio: _0x478d05
      } = window;
      const _0x3b09bb = _0x2bffb8 * _0x478d05;
      const _0xc1ab8f = _0x15be21 * _0x478d05;
      const _0x2d1efc = Math.sqrt(_0x3b09bb * _0x3b09bb + _0xc1ab8f * _0xc1ab8f) / Math.sqrt(2455780);
      let _0x357bf1 = this.scale * _0x2d1efc / _0x478d05;
      if (this.results && this.results.gameOverTime) {
        _0x357bf1 /= 1 + Math.atan((_0x493b69() - this.results.gameOverTime) / 1000) * 0.5;
      }
      let _0x174885;
      let _0x137165 = this.localPlayer || this.game.players[0];
      if (_0x137165) {
        if (_0x137165.scale) {
          this.scale = _0x137165.scale;
        }
        _0x174885 = _0x137165.extrapolatedAt;
        if (this.localPlayer && this.localPlayer.killer) {
          if (this.config.followKiller) {
            _0x174885 = this.localPlayer.killer.at;
          } else {
            _0x174885 = this.deathPoint;
          }
        }
      } else {
        _0x174885 = _0x32933a.space.center;
      }
      if (this.origin && (!this.localPlayer || this.localPlayer.killer)) {
        const _0x2d8ed1 = this.origin.distance(_0x174885);
        let _0x8a03a4 = _0x2d8ed1 / 30;
        const _0xf32237 = _0x174885.clone().sub(this.origin).normalize().scale(_0x8a03a4);
        _0x174885 = this.origin.add(_0xf32237);
      }
      this.origin = _0x174885.clone();
      const _0x35094f = _0x174885.x - _0x2bffb8 / 2 / _0x357bf1;
      const _0x42b44a = _0x174885.x + _0x2bffb8 / 2 / _0x357bf1;
      const _0x2ef75b = _0x174885.y - _0x15be21 / 2 / _0x357bf1;
      const _0x3766db = _0x174885.y + _0x15be21 / 2 / _0x357bf1;
      const _0x3d7c0a = (_0x54a2d0, _0x61f800 = 0) => _0x18d637(_0x35094f - _0x61f800, _0x42b44a + _0x61f800, _0x54a2d0.x) && _0x18d637(_0x2ef75b - _0x61f800, _0x3766db + _0x61f800, _0x54a2d0.y);
      const _0x5f5099 = (_0x53505f, _0x1d6482 = 0) => _0x58d461(_0x53505f.bounds.left - _0x1d6482, _0x53505f.bounds.right + _0x1d6482, _0x35094f, _0x42b44a) > 0 && _0x58d461(_0x53505f.bounds.top - _0x1d6482, _0x53505f.bounds.bottom + _0x1d6482, _0x2ef75b, _0x3766db) > 0;
      const _0x4cba88 = (_0x435ac0, _0x32846c) => {
        const _0x1b56ca = 16 / 9;
        const _0x14f7e4 = 9 / 16;
        const _0x42558a = _0x2088ff(_0x14f7e4, _0x1b56ca, _0x3b09bb / _0xc1ab8f);
        const _0x26b867 = _0x435ac0 - _0x32846c;
        const _0xe42cd0 = _0x14f7e4 - _0x1b56ca;
        const _0x19b380 = -(_0x26b867 * _0x1b56ca + _0xe42cd0 * _0x435ac0);
        return -(_0x19b380 + _0x26b867 * _0x42558a) / _0xe42cd0;
      };
      const _0xc95f4e = ~~(_0x4cba88(20, 30) * _0x2d1efc);
      const _0x4d221f = this.config.platesStrokeWidth * _0x2d1efc;
      const _0xfbea48 = ~~(_0x2d1efc * 4);
      const _0x582167 = _0xc95f4e + "px " + _0x50ea01;
      const _0x18b49b = ~~(_0x2d1efc * 16);
      const _0xf1008e = ~~(_0xc95f4e * 0.75);
      const _0x10d9cb = _0xf1008e * 2;
      const _0x4ff75b = ~~(_0x3b09bb / _0x4cba88(4, 2.25));
      const _0x2989b2 = ~~(_0x4ff75b / 2);
      if (!this.debugSettings.origin) {
        this.debugSettings.origin = _0x32933a.space.center;
      }
      _0x37efce.smoothingMode = this.environment.curved && this.profiler && this.profiler.averageFrameDivergence < 1 ? 1 : 0;
      _0x37efce.simplified = this.environment.simplified;
      this.debugSettings.scale = 1.2 ** (-this.controller.wheel / 100) * 0.5;
      return {
        game: _0x32933a,
        ctx: _0x4f5153,
        viewWidth: _0x2bffb8,
        viewHeight: _0x15be21,
        devicePixelRatio: _0x478d05,
        scaler: _0x2d1efc,
        scale: _0x357bf1,
        playerScale: this.localPlayer && this.localPlayer.scale,
        origin: _0x174885,
        pointInView: _0x3d7c0a,
        boundsInView: _0x5f5099,
        calcMult: _0x4cba88,
        viewScreenWidth: _0x3b09bb,
        viewScreenHeight: _0xc1ab8f,
        fontSize: _0xc95f4e,
        font: _0x50ea01,
        strokeWidth: _0x4d221f,
        backHeight: _0xfbea48,
        uiFont: _0x582167,
        padding: _0x18b49b,
        room: this.environment.room,
        language: this.environment.lng,
        quality: this.quality,
        barHeight: _0x10d9cb,
        halfBarHeight: _0xf1008e,
        bestResult: this.environment.bestResult,
        gameOver: this.localPlayer && this.localPlayer.death,
        localPlayer: this.localPlayer,
        debugView: this.debugView,
        debugSettings: this.debugSettings,
        autopilot: this.environment.autopilot,
        extrapolation: this.environment.extrapolation,
        lagSimulation: this.environment.lagSimulation,
        accumulatedtime: this.accumulatedTime,
        showGameInfo: this.showGameInfo(),
        mouse: this.controller.mouse,
        wheel: this.controller.wheel,
        notifications: this.environment.notifications,
        info: this.clientInfo || {},
        barWidth: _0x4ff75b,
        halfBarWidth: _0x2989b2
      };
    }
    handleResizing() {
      const _0x180894 = () => {
        {
          console.log("window.devicePixelRatio", window.devicePixelRatio);
          console.log("window.innerWidth", window.innerWidth);
          console.log("document.documentElement.clientWidth", document.documentElement.clientWidth);
          console.log("window.innerWidth*window.devicePixelRatio", window.innerWidth * window.devicePixelRatio);
          console.log("window.innerWidth/window.devicePixelRatio", window.innerWidth / window.devicePixelRatio);
        }
      };
      window.addEventListener("resize", _0x180894, false);
      _0x180894();
    }
    adjustQuality() {
      if (this.fpsSequence == undefined) {
        this.fpsSequence = [];
      }
      this.fpsSequence.push(this.profiler.fps);
      const _0x5637d2 = 35;
      const _0x59346d = 25;
      const _0x142b55 = 10;
      const _0x33f34f = 120;
      const _0x19cce6 = 0.5;
      if (this.fpsSequence.length > _0x33f34f) {
        this.fpsSequence.sort((_0x1d821d, _0x182c17) => _0x1d821d - _0x182c17);
        const _0x4d8f7b = this.fpsSequence[~~(_0x33f34f / 2)];
        if (_0x4d8f7b < _0x59346d) {
          this.quality -= 0.1;
        }
        if (_0x4d8f7b < _0x142b55) {
          this.quality -= 0.1;
        }
        if (this.quality < _0x19cce6) {
          this.quality = _0x19cce6;
        }
        if (_0x4d8f7b > _0x5637d2) {
          this.quality += 0.1;
        }
        if (this.quality > 1) {
          this.quality = 1;
        }
        const _0xf37395 = Math.round(this.quality * 10);
        this.quality = _0xf37395 / 10;
        if (_0xf37395 < 10) {
          const _0x3eb62a = "q" + _0xf37395;
          if (this.qas[_0x3eb62a]) {
            this.qas[_0x3eb62a] = false;
            if (window.ga) {
              window.ga("send", "event", "fps", _0x3eb62a);
            }
          }
        }
        this.fpsSequence = [];
      }
      if (this.environment.pixelated) {
        this.quality = 0.5;
      }
    }
    dispose() {
      console.log("PAPER DISPOSED");
      this.events.events = {};
      this.disposed = true;
      if (this.stopLoop) {
        this.stopLoop();
      }
    }
    listen(_0x1d08a0) {
      _0x1d08a0.bind(this.game.actions());
      _0x1d08a0.on("moves", _0x158e72 => {
        this.lastReceivedTic = _0x158e72.tic;
        this.lastReceivedTicTime = Date.now();
        let _0x503469 = Date.now() - _0x158e72.tic * this.msPerTic;
        this.zeroTicTimeEstimate = this.zeroTicTimeEstimate ? this.zeroTicTimeEstimate * 0.9 + _0x503469 * 0.1 : _0x503469;
      });
    }
    get accumulatedTime() {
      if (!this.zeroTicTimeEstimate) {
        return 0;
      }
      let _0x5040af = this.zeroTicTimeEstimate + this.lastReceivedTic * this.msPerTic;
      let _0x46a913 = Date.now() - _0x5040af;
      return Math.max(0, Math.min(_0x46a913, 500));
    }
    get msPerTic() {
      return 1000 / this.tps;
    }
  }
  var _0x33e321 = Object.defineProperty;
  var _0x158ced = Object.assign;
  var _0x4fa66f = (_0x11f0ca, _0x449620, _0x98aac3) => {
    if (typeof _0x449620 !== "symbol") {
      _0x449620 += "";
    }
    if (_0x449620 in _0x11f0ca) {
      return _0x33e321(_0x11f0ca, _0x449620, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x98aac3
      });
    }
    return _0x11f0ca[_0x449620] = _0x98aac3;
  };
  var _0x53b49c = (_0x46b641, _0x2d0aa4, _0x4335e7) => {
    return new Promise((_0x29a08f, _0x3fc3ce) => {
      var _0x152561 = _0x477b7e => {
        try {
          _0x1b29d0(_0x4335e7.next(_0x477b7e));
        } catch (_0x5b42e) {
          _0x3fc3ce(_0x5b42e);
        }
      };
      var _0x3d5037 = _0x58f85a => {
        try {
          _0x1b29d0(_0x4335e7.throw(_0x58f85a));
        } catch (_0x384a46) {
          _0x3fc3ce(_0x384a46);
        }
      };
      var _0x1b29d0 = _0x1d1ee6 => {
        if (_0x1d1ee6.done) {
          return _0x29a08f(_0x1d1ee6.value);
        } else {
          return Promise.resolve(_0x1d1ee6.value).then(_0x152561, _0x3d5037);
        }
      };
      _0x1b29d0((_0x4335e7 = _0x4335e7.apply(_0x46b641, _0x2d0aa4)).next());
    });
  };
  class _0x1e03f2 {
    constructor(_0x75387f, _0x17b5bb = {}) {
      _0x4fa66f(this, "state", "connecting");
      _0x4fa66f(this, "client");
      _0x4fa66f(this, "ticsToRun", -1);
      _0x4fa66f(this, "hideBeforePlayerJoined", false);
      _0x4fa66f(this, "firstMove", true);
      this.room = _0x75387f.room;
      this.options = _0x17b5bb;
      this.events = new _0xf760a1();
      this.environment = _0x75387f;
      this.looper = setInterval(() => this.loop(), 50);
      this.initPaper();
    }
    togglePause() {
      this.ticsToRun = this.ticsToRun == 0 ? -1 : 0;
    }
    someTicsForward(_0x32f3ae = 1) {
      this.ticsToRun = _0x32f3ae;
    }
    connect(_0x5e27c0) {
      this.client = _0x5e27c0;
      this.client.events.bind({
        connected: () => {
          if (this.environment.name === "nopreroll") {
            this.prerollComplete();
          } else {
            this.environment.startPreroll();
          }
          let _0x18a168 = this.environment.skin;
          this.client.join(this.environment.visibleName, _0x18a168, this.room.nameWithPrefix);
        },
        createGame: ({
          seed: _0x26baf3
        }) => {
          this.paper.createGame(_0x26baf3, this.client.playerId);
          this.paper.listen(this.client.events);
        },
        warmup: _0xfbd7b1 => {
          this.events.emit(_0xfbd7b1);
        },
        moves: () => {
          this.paper.clientInfo = this.client.info();
        },
        warmupComplete: () => {
          this.warmupComplete = true;
          this.showGameIfReady();
          if (this.options.custom) {
            this.ticsToRun = 0;
          }
        },
        error: ({
          reason: _0x27811a
        }) => this.gameOver({
          reason: _0x27811a || "connectionError"
        }),
        death: ({
          id: _0x232c7a,
          reason: _0x5a523b
        }) => {
          if (_0x232c7a == this.client.playerId) {
            this.gameOver({
              reason: _0x5a523b || "connectionError"
            });
          }
        }
      });
      _0x5e27c0.connect();
    }
    initPaper() {
      let _0xadf1f4 = this.environment.resources.modeConfig(this.options.mode || this.room.mode);
      this.paper = new _0xc5577(this.environment, _0xadf1f4);
      if (this.options.custom) {
        this.paper.debugView = true;
      }
      this.paper.events.bind({
        achievement: ({
          name: _0x362b73
        }) => {
          this.environment.addMessage(this.environment.lng.skinUnlocked, this.environment.config.achievementIconsPath + this.environment.achievements.all[_0x362b73].icon);
        },
        death: _0x123bc4 => _0x53b49c(this, [_0x123bc4], function* ({
          unit: _0x16286
        }) {
          yield _0x45f3ce();
          let _0x3c7c23 = _0x16286.killer;
          if (_0x3c7c23 && _0x3c7c23.isPlayer && _0x3c7c23 == this.paper.localPlayer) {
            this.room.addRecord({
              player: _0x3c7c23.name,
              type: "kills",
              score: _0x3c7c23.statistics.kills
            });
            this.events.emit({
              event: "playerKills",
              unit: _0x16286
            });
          }
          if (_0x16286 === this.paper.localPlayer && this.client) {
            this.client.death(this.paper.game.tic);
          }
        }),
        returnToBase: _0x1b003e => _0x53b49c(this, [_0x1b003e], function* ({
          unit: _0x2af212
        }) {
          yield _0x45f3ce();
          if (_0x2af212.isPlayer && _0x2af212 == this.paper.localPlayer) {
            this.room.addRecord({
              player: _0x2af212.name,
              type: "area",
              score: _0x2af212.schemes.scores()
            });
          }
        }),
        gameOver: ({
          results: _0x26585f
        }) => this.gameOver(_0x26585f)
      });
    }
    gameOver(_0x50b7d8) {
      if (this.state == "gameOver") {
        return;
      }
      this.state = "gameOver";
      this.events.emit(_0x158ced(_0x158ced({}, _0x50b7d8), {
        event: "gameOver"
      }));
      this.postDebrief(_0x50b7d8);
      console.log("Recorder", this.client.recorder);
      if (window.ga) {
        window.ga("send", "event", "gameOverReason", _0x50b7d8.reason);
      }
    }
    postDebrief(_0x110665) {
      if (this.client && this.environment.room.httpServer) {
        let _0x4a0317 = this.room.httpServer;
        let _0x5112f3 = this.room.prefix.split("-")[1];
        fetch(_0x4a0317, {
          method: "POST",
          body: JSON.stringify(_0x158ced({
            cmd: "save",
            reason: _0x110665.reason,
            serverName: _0x5112f3,
            playerId: this.client.playerId
          }, this.client.debrief()))
        });
      }
    }
    showGameIfReady() {
      if (this.prerollIsComplete && this.warmupComplete && this.state != "game") {
        this.showGame();
      }
    }
    showGame() {
      this.state = "game";
      this.paper.hideBeforePlayerJoined = this.hideBeforePlayerJoined;
      this.paper.showGame();
      this.environment.showGame();
    }
    loop() {
      if (this.ticsToRun == 0) {
        return;
      }
      let _0xc1c68c = this.ticsToRun > 0 ? Math.min(100, this.ticsToRun) : 1;
      for (let _0x39ea41 = 0; _0x39ea41 < _0xc1c68c; _0x39ea41++) {
        this.firstMove = false;
        if (this.state == "game") {
          if (this.environment.autopilot && this.environment.isAdmin && this.paper.localPlayer) {
            this.client.sendMove(this.paper.localPlayer.autopilotDirector.direction());
          } else {
            this.client.sendMove(this.paper.controller.readInput());
          }
        }
        if (this.ticsToRun > 0) {
          this.ticsToRun--;
        }
      }
    }
    dispose() {
      if (this.disposed) {
        return;
      }
      this.disposed = true;
      this.client.dispose();
      this.paper.dispose();
      clearInterval(this.looper);
    }
    prerollComplete() {
      this.prerollIsComplete = true;
      this.showGameIfReady();
    }
    replay() {
      return this.client.recorder;
    }
  }
  var _0x4a2760 = Object.defineProperty;
  var _0x18f6b7 = Object.assign;
  var _0x380a9d = (_0x25648f, _0xff3447, _0x3f3a38) => {
    if (typeof _0xff3447 !== "symbol") {
      _0xff3447 += "";
    }
    if (_0xff3447 in _0x25648f) {
      return _0x4a2760(_0x25648f, _0xff3447, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x3f3a38
      });
    }
    return _0x25648f[_0xff3447] = _0x3f3a38;
  };
  const _0x2e6617 = 10000;
  class _0x3a1fad {
    constructor(_0x26473e, _0x18be65, _0x4de136 = false) {
      _0x380a9d(this, "socketId");
      _0x380a9d(this, "callbacks", {});
      this.io = _0x18be65;
      this.logging = _0x4de136;
      this.serverURL = _0x26473e;
      this.connect();
    }
    connect() {
      let _0x5a5842 = new URL(this.serverURL).pathname;
      if (_0x5a5842 == "/" || _0x5a5842 == "") {
        _0x5a5842 = "/socket.io";
      }
      this.socket = this.io(this.serverURL, {
        path: _0x5a5842,
        transports: ["websocket"],
        timeout: _0x2e6617,
        reconnection: false
      });
      console.log("CONNECTING", this.serverURL);
      this.connected = false;
      this.connectTimeoutHandle = setTimeout(() => {
        if (!this.connected) {
          console.log("CONNECTION ERROR - TIMEOUT");
          this.callbacks.leave({
            event: "error",
            reason: "connectionError"
          });
        }
      }, _0x2e6617 + 50);
      this.socket.on("disconnect", _0x483fc9 => {
        console.log("DISCONNECTED", _0x483fc9);
        this.callbacks.disconnect({
          event: "disconnect",
          reason: _0x483fc9
        });
      });
      this.socket.on("connect_error", _0x463b39 => {
        clearTimeout(this.connectTimeoutHandle);
        console.log("CONNECTION ERROR");
        this.callbacks.leave({
          event: "error",
          reason: "connectionError"
        });
      });
      this.socket.on("connect", () => {
        clearTimeout(this.connectTimeoutHandle);
        this.connected = true;
        this.mouse = null;
        this.socketId = this.socket.id;
        console.log("CONNECTED TO " + this.serverURL + " AS " + this.socketId);
      });
    }
    message(_0x17af09, _0x5a2018) {
      let _0x29ac38 = Object.assign({
        cmd: _0x17af09
      }, _0x5a2018);
      if (this.logging && _0x17af09 != "ping") {
        console.log("sent", _0x29ac38);
      }
      this.socket.send(_0x29ac38);
    }
    on(_0x39a13f) {
      this.callbacks = _0x18f6b7(_0x18f6b7({}, this.callbacks), _0x39a13f);
      this.socket.on("message", _0x3b44e5 => {
        if (_0x3b44e5 instanceof ArrayBuffer && "binary" in _0x39a13f) {
          _0x39a13f.binary(_0x3b44e5);
        }
        if (this.logging && _0x3b44e5.event != "pong") {
          console.log("got", _0x3b44e5);
        }
        if (_0x39a13f[_0x3b44e5.event]) {
          _0x39a13f[_0x3b44e5.event](_0x3b44e5);
        }
      });
    }
    disconnect() {
      this.socket.disconnect();
    }
  }
  var _0x18b0f2 = (_0x36eafe, _0x261467, _0xbc9054) => {
    return new Promise((_0x3831c9, _0x5cfef6) => {
      var _0x39df2b = _0x2a3db1 => {
        try {
          _0x51d394(_0xbc9054.next(_0x2a3db1));
        } catch (_0x5c1975) {
          _0x5cfef6(_0x5c1975);
        }
      };
      var _0x3a7249 = _0x21674e => {
        try {
          _0x51d394(_0xbc9054.throw(_0x21674e));
        } catch (_0x354c3b) {
          _0x5cfef6(_0x354c3b);
        }
      };
      var _0x51d394 = _0x1bb2a9 => {
        if (_0x1bb2a9.done) {
          return _0x3831c9(_0x1bb2a9.value);
        } else {
          return Promise.resolve(_0x1bb2a9.value).then(_0x39df2b, _0x3a7249);
        }
      };
      _0x51d394((_0xbc9054 = _0xbc9054.apply(_0x36eafe, _0x261467)).next());
    });
  };
  function _0x1175ac() {
    return Date.now();
  }
  const _0x93760e = 30;
  let _0x5e963d = [];
  class _0x564000 extends _0x45a104 {
    constructor(_0x4243f0) {
      super();
      this.disposed = false;
      this.averageTimeDifference = 0;
      this.averagePing = 0;
      this.lastPingSentTime = 0;
      this.pingsSent = 0;
      this.freezes = 0;
      this.server = _0x4243f0;
      this.movesSentTime = {};
      this.backlog = null;
      this.creationTime = Date.now();
      const _0x378951 = {
        pong: _0x2644c4 => _0x18b0f2(this, [_0x2644c4], function* ({
          time: _0x4279e6,
          now: _0x5442df
        }) {
          let _0x59b63c = _0x5442df - (_0x4279e6 + _0x1175ac()) / 2;
          if (this.averageTimeDifference == 0) {
            this.averageTimeDifference = _0x59b63c;
          } else {
            this.averageTimeDifference = (this.averageTimeDifference * (_0x93760e - 1) + _0x59b63c) / _0x93760e;
          }
          let _0x56c59d = _0x1175ac() - _0x4279e6;
          if (this.averagePing == 0) {
            this.averagePing = _0x56c59d;
          } else {
            this.averagePing = (this.averagePing * (_0x93760e - 1) + _0x56c59d) / _0x93760e;
          }
        }),
        binary: _0x2830aa => _0x18b0f2(this, null, function* () {
          this.onGameData(_0x2830aa);
        }),
        join: _0x517375 => _0x18b0f2(this, null, function* () {
          this.recorder.onEvent(_0x517375);
        }),
        moves: _0x3e1faf => _0x18b0f2(this, null, function* () {
          if (this.lagSimulation) {
            _0x5e963d.push(_0x3e1faf);
            yield _0x3bf684(Math.random() * this.lagSimulation);
            _0x3e1faf = _0x5e963d.shift();
          }
          if ((this.nextMoveToSend == undefined || this.nextMoveToSend < _0x3e1faf.tic + 1) && this.playerId in _0x3e1faf.directions) {
            this.nextMoveToSend = _0x3e1faf.tic + 1;
          }
          this.recorder.onEvent(_0x3e1faf);
        }),
        death: _0x439131 => _0x18b0f2(this, null, function* () {
          this.recorder.onEvent(_0x439131);
        }),
        move: _0x4deb29 => _0x18b0f2(this, [_0x4deb29], function* ({
          id: _0x321857,
          time: _0x3fe97a,
          now: _0x5b3506
        }) {
          if (_0x5b3506 && (_0x321857 == this.playerId || _0x321857 === undefined)) {
            _0x378951.pong({
              time: _0x3fe97a,
              now: _0x5b3506
            });
          }
        }),
        leave: _0x4acb8c => _0x18b0f2(this, [_0x4acb8c], function* ({
          id: _0x46c45f,
          reason: _0x524a07
        }) {
          if (_0x46c45f == undefined) {
            this.events.emit({
              event: "error",
              reason: _0x524a07 || "connectionError"
            });
          }
          if (_0x46c45f === this.playerId) {
            this.killPlayerByServer(_0x524a07);
          }
        }),
        error: _0x5b0166 => _0x18b0f2(this, [_0x5b0166], function* ({
          reason: _0x4f18f9
        }) {
          this.killPlayerByServer(_0x4f18f9);
        }),
        disconnect: _0x2b14c2 => _0x18b0f2(this, [_0x2b14c2], function* ({
          reason: _0x24b5e0
        }) {
          this.killPlayerByServer("disconnect");
        }),
        leaderboards: _0x15ed34 => _0x18b0f2(this, null, function* () {
          this.events.emit(_0x15ed34);
        })
      };
      _0x4243f0.on(_0x378951);
      _0x4243f0.socket.on("connect", () => {
        this.playerId = _0x4243f0.socketId;
        this.events.emit({
          event: "connected",
          id: this.playerId
        });
      });
      this.updateInterval = setInterval(() => this.update(), 4);
    }
    leave(_0x283b14) {
      this.server.message("leave", {
        reason: _0x283b14
      });
    }
    death(_0x1f950a) {
      this.server.message("death", {
        tic: _0x1f950a
      });
      this.joined = false;
    }
    killPlayerByServer(_0x2a8052) {
      this.events.emit({
        event: "death",
        id: this.playerId,
        reason: _0x2a8052
      });
    }
    onGameData(_0x4474cc) {
      return _0x18b0f2(this, null, function* () {
        this.recorder = _0x47d279.deserialize(_0x4474cc);
        this.recorder.localPlayerId = this.playerId;
        yield this.warmup();
      });
    }
    update() {
      if (this.disposed) {
        return;
      }
      let _0x460a63 = _0x1175ac();
      if (_0x460a63 >= this.lastPingSentTime + (this.pingsSent < 30 ? 100 : 1000000)) {
        this.pingsSent++;
        if (this.pingsSent === 30) {
          this.reportPingResult();
        }
        this.server.message("ping", {
          time: _0x460a63
        });
        this.lastPingSentTime = _0x460a63;
      }
    }
    sendMove(_0x566491) {
      this.server.message("move", {
        direction: _0x566491,
        time: _0x1175ac()
      });
    }
    ticTime(_0x54d608) {
      return this.recorder.ticTime(_0x54d608) - this.averageTimeDifference;
    }
    currentTic() {
      let _0x5a1722 = Math.round((_0x1175ac() - this.recorder.initialTicTime + this.averageTimeDifference) / this.recorder.msPerTic) + this.recorder.initialTic;
      return _0x5a1722;
    }
    accumulatedTime() {
      let _0xc7774e = Math.max(0, _0x1175ac() - this.averagePing / 2 - this.ticTime(this.recorder.lastCompleteTic)) || 0;
      return _0xc7774e;
    }
    join(_0x4bba3f, _0x10aac5, _0x170fb9) {
      console.log("JOINING");
      if (_0x170fb9 == "") {
        _0x170fb9 = undefined;
      }
      this.server.message("join", {
        name: _0x4bba3f,
        skin: _0x10aac5,
        room: _0x170fb9
      });
    }
    reportPingResult() {
      console.log("NC: Average time difference", this.averageTimeDifference);
      console.log("NC: Average ping", this.averagePing);
    }
    info() {
      return {
        "Time difference": ~~this.averageTimeDifference,
        Ping: ~~this.averagePing
      };
    }
    dispose() {
      this.disposed = true;
      this.server.disconnect();
    }
    isLocal(_0x393670) {
      return _0x393670 === this.playerId;
    }
    debrief() {
      var _0x160c42;
      return {
        ping: this.averagePing,
        roomId: (_0x160c42 = this.recorder) == null ? undefined : _0x160c42.id,
        freezes: this.freezes,
        duration: Date.now() - this.creationTime
      };
    }
    connect() {
      return _0x18b0f2(this, null, function* () {});
    }
  }
  var _0x551a7d = Object.defineProperty;
  var _0x404226 = Object.assign;
  var _0x25eacf = (_0xb2db7f, _0x582f50, _0x3854cc) => {
    if (typeof _0x582f50 !== "symbol") {
      _0x582f50 += "";
    }
    if (_0x582f50 in _0xb2db7f) {
      return _0x551a7d(_0xb2db7f, _0x582f50, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _0x3854cc
      });
    }
    return _0xb2db7f[_0x582f50] = _0x3854cc;
  };
  var _0x1225e3 = (_0x16cbc0, _0x5f4068, _0x4d3987) => {
    return new Promise((_0x17507f, _0xa96337) => {
      var _0x4cb0d9 = _0x2329d2 => {
        try {
          _0x1b3c5e(_0x4d3987.next(_0x2329d2));
        } catch (_0xa8d94) {
          _0xa96337(_0xa8d94);
        }
      };
      var _0x1f6b91 = _0x122db4 => {
        try {
          _0x1b3c5e(_0x4d3987.throw(_0x122db4));
        } catch (_0x4a92bf) {
          _0xa96337(_0x4a92bf);
        }
      };
      var _0x1b3c5e = _0x466b25 => {
        if (_0x466b25.done) {
          return _0x17507f(_0x466b25.value);
        } else {
          return Promise.resolve(_0x466b25.value).then(_0x4cb0d9, _0x1f6b91);
        }
      };
      _0x1b3c5e((_0x4d3987 = _0x4d3987.apply(_0x16cbc0, _0x5f4068)).next());
    });
  };
  const _0x11029f = "paper-io-settings";
  const _0x48800d = [...new Array(80)].map((_0x5024f0, _0x174731) => String.fromCodePoint(128512 + _0x174731));
  let _0x2632f1 = _0x24e0c2(_0x48800d.slice(0, 69), _0x32f7f2(1));
  let _0x4d5ae1 = new Date("2021-9-1 UTC").getTime();
  class _0x4a83b6 {
    constructor(_0x2641d1, _0x50b5dc) {
      _0x25eacf(this, "updateLocation", false);
      _0x25eacf(this, "serversStatus", {});
      _0x25eacf(this, "room");
      _0x25eacf(this, "notifications", new _0x158da9());
      _0x25eacf(this, "lastPreroll", 0);
      _0x25eacf(this, "themes", {
        light: {
          arenaColor: "#e7fff4",
          orderColor: "#88a799",
          backgroundTopColor: "#2d6998",
          backgroundBottomColor: "#81faff"
        },
        dark: {
          arenaColor: "#3f474e",
          borderColor: "#222222",
          backgroundTopColor: "#232327",
          backgroundBottomColor: "#36363d"
        }
      });
      console.log("Version: A25-2025-12-03T15:49:27.202Z");
      this.storage = _0x50b5dc;
      this.playerId = _0x2641d1;
      this.init();
    }
    loop() {
      let _0xc2d732 = Date.now() - this.lastLoopTime || 0;
      this.lastLoopTime = Date.now();
      this.notifications.update(_0xc2d732);
    }
    achievementGained(_0x4a23e8) {
      this.notifications.add(new _0x31b6aa(_0x4a23e8.description, "New skin unlocked!", this.config.achievementIconsPath + _0x4a23e8.icon));
    }
    updateEmojiOfTheDay() {
      let _0x505943 = Math.floor((Date.now() - _0x4d5ae1) / _0x18e363);
      let _0x10752a = _0x2632f1[(_0x505943 % _0x2632f1.length + _0x2632f1.length) % _0x2632f1.length];
      this.state.setState({
        emojiOfTheDay: _0x10752a
      });
      this.resources.skins.emojiOfTheDay = _0x10752a;
      this.config.emojiOfTheDay = _0x10752a;
    }
    dailyLoop() {
      if (!_0x4d5ae1) {
        return;
      }
      this.updateEmojiOfTheDay();
      let _0x139e8a = _0x18e363 - (Date.now() - _0x4d5ae1) % _0x18e363;
      let _0x5763a9 = Math.max(1000, _0x139e8a);
      setInterval(() => {
        this.dailyLoop();
      }, _0x5763a9);
    }
    init() {
      return _0x1225e3(this, null, function* () {
        this.resources = yield _0x433ebc.load();
        let _0x1d90d7 = this.loadSettings();
        setInterval(() => this.loop(), 50);
        this.state = _0x135a69();
        this.state.setState(_0x1d90d7);
        this.config = this.resources.config;
        if (this.config.emojisOfTheDay) {
          _0x2632f1 = [...this.config.emojisOfTheDay];
        }
        if (this.config.dayZero) {
          _0x4d5ae1 = new Date(this.config.dayZero).getTime();
        }
        this.achievements = new _0x372644(this.resources.achievements);
        this.achievements.events.on("achievement", ({
          name: _0x13cfe6
        }) => {
          this.achievementGained(_0x13cfe6);
        });
        this.state.setState({
          skinButtonSize: (this.config.skinButtonsScale || 1) * 30,
          page: "lobby",
          multiplayer: true,
          languages: this.resources.languages
        });
        this.setLanguage(this.state.getState().language || this.resources.defaultLanguage);
        this.state.setState({
          emojis: _0x48800d.slice(0, 20).map(_0x46487a => ({
            name: _0x46487a,
            price: 10
          })),
          soloModes: Object.keys(this.resources.modes.solo),
          pvpModes: Object.keys(this.resources.modes.pvp),
          skins: [{
            name: "noskin",
            big: "noskin.png"
          }, ...this.resources.skins],
          achievements: this.achievements,
          setSkin: _0x581545 => this.setSkin(_0x581545),
          skinUnlocked: _0x11542e => this.skinUnlocked(_0x11542e),
          skinBuyable: _0x5e780b => this.skinBuyable(_0x5e780b),
          soloMode: this.soloMode || this.resources.defaultSoloMode,
          pvpMode: this.pvpMode || this.resources.defaultPvpMode,
          currentLeaderboard: "area"
        });
        this.updateEmojiOfTheDay();
        this.io = window.io;
        this.state.subscribe(() => {
          let _0x1e58c2 = _0x404226({}, this.state.getState());
          this.saveSettings(_0x1e58c2);
        });
        window.paperio2api = {
          prerollComplete: () => {
            this.playSession.prerollComplete();
          }
        };
        let _0x27da63 = document.getElementById("game");
        this.viewDiv = _0x27da63.appendChild(document.createElement("div"));
        let _0x9134db = _0x27da63.appendChild(document.createElement("div"));
        let _0x2bdef1 = this;
        _0x4d6272(_0x9134db, this.state).bind({
          startGame: () => _0x2bdef1.startGame(),
          restartGame: () => _0x2bdef1.restartGame(),
          closeGame: () => _0x2bdef1.closeGame()
        });
        this.view = _0x163a9d(this.viewDiv);
        window.addEventListener("keydown", _0x4ca4f6 => {
          if (_0x4ca4f6.shiftKey) {
            if (this.isAdmin) {
              if (_0x4ca4f6.code === "Digit1" || _0x4ca4f6.code == "Numpad1") {
                this.playSession.someTicsForward(1);
              }
              if (_0x4ca4f6.code === "Digit2" || _0x4ca4f6.code == "Numpad3") {
                this.playSession.someTicsForward(10);
              }
              if (_0x4ca4f6.code === "Digit3" || _0x4ca4f6.code == "Numpad3") {
                this.playSession.someTicsForward(100);
              }
              if (_0x4ca4f6.code === "Digit3" || _0x4ca4f6.code == "Numpad3") {
                this.playSession.someTicsForward(1000);
              }
              if (_0x4ca4f6.code === "Digit4" || _0x4ca4f6.code == "Numpad4") {
                this.playSession.someTicsForward(10000000);
              }
              if (_0x4ca4f6.code === "Space") {
                this.playSession.togglePause();
              }
              if (_0x4ca4f6.code === "KeyA") {
                this.autopilot = !this.autopilot;
              }
              if (_0x4ca4f6.code === "KeyE") {
                this.extrapolation = !this.extrapolation;
              }
              if (_0x4ca4f6.code === "KeyL") {
                this.lagSimulation = ((this.lagSimulation || 0) + 100) % 400;
                if (this.playSession && this.playSession.client) {
                  this.playSession.client.lagSimulation = this.lagSimulation;
                }
              }
              if (_0x4ca4f6.code === "KeyK" && this.playSession) {
                this.playSession.gameOver({
                  reason: "suicide"
                });
              }
              if (_0x4ca4f6.code === "KeyN" && this.playSession) {
                let _0x28cb9f = this.playSession.paper.localPlayer;
                [...this.playSession.paper.game.units].forEach(_0x2e68f4 => _0x2e68f4 != _0x28cb9f && _0x2e68f4.kill(null, 1));
              }
              if (_0x4ca4f6.code === "KeyS") {
                if (this.playSession) {
                  this.notify({
                    title: "Debug Message",
                    text: "Replay Saved"
                  });
                  if (this.debugConsole) {
                    this.debugConsole.addRecord(this.playSession.client.recorder.toString());
                  }
                }
              }
            }
          }
        });
        this.queryString = window.location.search.substr(1);
        this.room = new _0x3e8dd6(this.queryString, this.config, this, {
          serverPicked: () => {
            this.state.setState({
              roomReady: true
            });
          },
          connectionFailure: () => {
            this.state.setState({
              connectionFailure: true
            });
          },
          leaderboardsLoaded: ({
            leaderboards: _0x1c8447
          }) => {
            this.state.setState({
              leaderboards: _0x1c8447
            });
          },
          nameChanged: ({
            name: _0x2837fe
          }) => {
            this.state.setState({
              roomName: _0x2837fe
            });
            this.updateRoomUrl();
          }
        });
        if (ShowAds) {
          ShowAds();
        }
        this.dailyLoop();
      });
    }
    startGame(_0x2acc1f = {}) {
      if (this.playSession) {
        this.playSession.dispose();
      }
      this.updateEmojiOfTheDay();
      this.page = "connecting";
      this.playSession = new _0x1e03f2(this, _0x2acc1f);
      if (!_0x2acc1f.recorder && this.room.httpServer && !_0x2acc1f.custom) {
        this.room.getGameServer().then(_0x63c9ef => {
          this.playSession.hideBeforePlayerJoined = true;
          this.playSession.connect(new _0x564000(new _0x3a1fad(_0x63c9ef, this.io)));
          this.playSession.client.lagSimulation = this.lagSimulation;
        });
      } else {
        this.playSession.connect(new _0x45a104(_0x404226(_0x404226({}, _0x2acc1f), {
          player: {
            name: this.name,
            skin: this.skin,
            gameMode: this.gameMode
          }
        })));
      }
      this.playSession.events.bind({
        playerKills: ({
          unit: _0x3bab94
        }) => {
          if (_0x3bab94 == _0x3bab94.killer) {
            return;
          }
        },
        gameOver: _0x4effa2 => this.onGameOver(_0x4effa2),
        notify: _0x3bc281 => this.notify(_0x3bc281),
        warmup: ({
          progress: _0x54f2f3
        }) => this.connectionProgress = _0x54f2f3
      });
    }
    notify({
      title: _0x4fc212,
      text: _0x2b1442,
      icon: _0x5e525b
    }) {
      this.notifications.add(new _0x31b6aa(_0x2b1442, _0x4fc212, this.config.achievementIconsPath + _0x5e525b));
    }
    restartGame() {
      this.closeGame();
      setTimeout(() => this.startGame(), 0);
    }
    get isAdmin() {
      return _0x51a1dc(this.name);
    }
    setSkin(_0x583757 = undefined) {
      if (_0x583757 == undefined) {
        this.state.setState({
          skinsShown: false
        });
        if (ShowAds) {
          ShowAds();
        }
      } else if (this.skinUnlocked(_0x583757)) {
        this.state.setState({
          skin: _0x583757,
          skinsShown: false
        });
        if (ShowAds) {
          ShowAds();
        }
      } else if (this.skinBuyable(_0x583757)) {
        this.buySkin(_0x583757);
      }
    }
    emojiPrice(_0x4039a1) {
      let _0x59707a = this.state.getState().emojis.find(_0x139ab0 => _0x139ab0.name == _0x4039a1);
      return _0x59707a.price;
    }
    skinBuyable(_0x248621) {
      let {
        stars: _0x485cdd
      } = this.state.getState();
      return this.emojiPrice(_0x248621) <= _0x485cdd;
    }
    buySkin(_0x264d2c) {
      let {
        stars: _0x3d4e44,
        unlocks: _0x1dfa1e
      } = this.state.getState();
      let _0x493b4d = this.emojiPrice(_0x264d2c);
      this.state.setState({
        stars: _0x3d4e44 - _0x493b4d,
        unlocks: _0x404226(_0x404226({}, _0x1dfa1e), {
          [_0x264d2c]: true
        })
      });
    }
    startPreroll() {
      console.log("START PREROLL");
      this.state.setState({
        connectionProgress: 0.01
      });
      let _0x5ce5dc = this.config.prerollInterval;
      _0x5ce5dc = 0;
      let _0x53c2c5 = Date.now();
      if (!_0x5ce5dc || _0x53c2c5 - this.lastPreroll > _0x5ce5dc) {
        if (ShowPreroll) {
          ShowPreroll();
        }
        this.lastPreroll = _0x53c2c5;
      } else if (PrerollComplete) {
        PrerollComplete();
      }
    }
    setLanguage(_0x4c8dc1) {
      let _0x7013a1 = _0x404226(_0x404226({}, this.resources.languages.en), this.resources.languages[_0x4c8dc1]);
      this.state.setState({
        lng: _0x7013a1,
        language: _0x4c8dc1
      });
    }
    addMessage(_0x5a9341, _0x1cf041) {
      this.state.setState({
        messages: [...(this.state.getState().messages || []), {
          text: _0x5a9341,
          image: _0x1cf041
        }]
      });
    }
    skinUnlocked(_0x507720) {
      let _0x1f24b9 = this.state.getState();
      if (_0x507720 == "emojiOfTheDay") {
        return true;
      }
      if (_0x46b8f1(_0x507720)) {
        return _0x1f24b9.unlocks && _0x1f24b9.unlocks[_0x507720];
      }
      return !_0x1f24b9.achievements || !_0x1f24b9.achievements.all[_0x507720] || _0x1f24b9.achievements.earned(_0x507720);
    }
    skinRequirement(_0x31fc2a) {
      let _0x4b8831 = this.achievements[_0x31fc2a];
      let _0xc7e2eb = this.state.getState();
      if (_0x4b8831) {
        let _0x4dff65 = _0xc7e2eb.achieved && _0xc7e2eb.achieved[_0x31fc2a] ? _0xc7e2eb.achieved[_0x31fc2a].progress : undefined;
        return {
          description: _0x4b8831.description,
          progress: _0x4dff65
        };
      }
    }
    showGame() {
      HideAds();
      this.page = "game";
    }
    set connectionProgress(_0x5e48c2) {
      this.state.setState({
        connectionProgress: _0x5e48c2
      });
    }
    get autopilot() {
      return this.option("autopilot");
    }
    set autopilot(_0x1ae9d1) {
      this.state.setState({
        autopilot: _0x1ae9d1
      });
    }
    get replay() {
      return this.option("replay");
    }
    set replay(_0x5728eb) {
      this.state.setState({
        replay: _0x5728eb
      });
    }
    get extrapolation() {
      return this.option("extrapolation");
    }
    set extrapolation(_0x32ec1b) {
      this.state.setState({
        extrapolation: _0x32ec1b
      });
    }
    get multiplayer() {
      return this.option("multiplayer");
    }
    get pixelated() {
      return this.option("pixelated");
    }
    get curved() {
      return this.option("curved");
    }
    get simplified() {
      return this.option("simplified");
    }
    get config() {
      return this.option("config");
    }
    set config(_0x1f89fa) {
      this.state.setState({
        config: _0x1f89fa
      });
    }
    get skin() {
      let _0x25489e = this.option("skin");
      if (_0x25489e === "noskin") {
        _0x25489e = undefined;
      }
      return _0x25489e;
    }
    get name() {
      return this.option("name");
    }
    get visibleName() {
      return _0x441924(this.name);
    }
    set page(_0x255d87) {
      this.state.setState({
        page: _0x255d87
      });
    }
    get achieved() {
      return this.option("achieved") || [];
    }
    set achieved(_0x5b0bb2) {
      this.state.setState({
        achieved: _0x5b0bb2
      });
    }
    get connectionProgress() {
      return this.option("connectionProgress");
    }
    get lng() {
      return this.option("lng");
    }
    get pvpMode() {
      return this.option("pvpMode") || this.resources.defaultPvpMode;
    }
    get soloMode() {
      return this.option("soloMode") || this.resources.defaultSoloMode;
    }
    get gameMode() {
      return this.room.mode;
    }
    option(_0x36a413) {
      return this.state.getState()[_0x36a413];
    }
    get bestResult() {
      return (this.state.getState().best || {})[this.gameMode] || 0;
    }
    onGameOver(_0x5d7348) {
      return _0x1225e3(this, null, function* () {
        if (this.debugConsole) {
          this.debugConsole.addRecord(this.playSession.client.recorder.toString());
        }
        if (_0x5d7348.time > 0) {
          yield _0x3bf684(_0x5d7348.killer ? this.config.enemyKillDelay : this.config.selfKillDelay);
        }
        var {
          game: _0x31a661,
          score: _0x567533,
          reason: _0x3a4dea
        } = _0x5d7348;
        this.page = "gameOver";
        if (_0x3a4dea === "lose") {
          _0x3a4dea = this.lng.lose || "lose";
          _0x3a4dea = _0x3a4dea.replace("_", _0x31a661 ? _0x31a661.winner().name : "someone");
          _0x5d7348.reason = _0x3a4dea;
        }
        _0x5d7348.best = this.bestResult;
        if (_0x567533 && _0x567533 > _0x5d7348.best) {
          let _0x3467cc = this.state.getState().best || {};
          _0x3467cc[this.gameMode] = _0x567533;
          this.state.setState({
            best: _0x3467cc
          });
          _0x5d7348.newBest = true;
          _0x5d7348.best = _0x567533;
        }
        delete _0x5d7348.game;
        this.replay = null;
        _0x5d7348.reason = _0x5d7348.reason.length > 2 ? _0x5d7348.reason : "";
        this.state.setState({
          results: _0x5d7348,
          gameOverTime: Date.now()
        });
        if (ShowAds) {
          ShowAds();
        }
        if (LoadAds) {
          LoadAds();
        }
        if (this.autopilot && this.isAdmin) {
          this.closeGame();
          setTimeout(() => this.startGame(), 500);
        }
        this.updateEmojiOfTheDay();
      });
    }
    closeGame() {
      this.playSession.dispose();
      this.page = "lobby";
    }
    theme() {
      return "light";
    }
    updateRoomUrl() {
      if (this.queryString.length > 0) {
        window.history.replaceState({}, document.title, window.location.pathname + "?" + this.room.name);
      }
    }
    saveSettings(_0x550398) {
      let _0x491f67 = _0x404226(_0x404226({}, this.loadSettings()), _0x550398);
      const _0x5c8520 = "pvpMode,soloMode,skin,language,name,multiplayer,extrapolation,autopilot,curved,simplified,pixelated,roomName,tab,cluster,best,stars,unlocks".split(",");
      let _0x362c4f = {};
      for (let _0x471793 of _0x5c8520) {
        _0x362c4f[_0x471793] = _0x491f67[_0x471793];
      }
      let _0x1740c0 = JSON.stringify(_0x362c4f);
      if (localStorage.getItem(_0x11029f) != _0x1740c0) {
        localStorage.setItem(_0x11029f, _0x1740c0);
      }
    }
    loadSettings() {
      try {
        let _0x97cfa1 = _0x404226({
          extrapolation: true,
          stars: 33,
          unlocks: {}
        }, JSON.parse(localStorage.getItem(_0x11029f) || "{}"));
        if (!_0x97cfa1 || !(_0x97cfa1 instanceof Object)) {
          return {};
        }
        if (!_0x97cfa1.tab) {
          _0x97cfa1.tab = "PvP";
        }
        if (!_0x97cfa1.gameMode) {
          _0x97cfa1.gameMode = this.resources.defaultSoloMode;
        }
        return _0x97cfa1;
      } catch (_0x28219c) {
        console.log(_0x28219c);
        return {};
      }
    }
  }
  new _0x4a83b6();
  _0x52184a.MultiplayerEnvironment = _0x4a83b6;
  Object.defineProperty(_0x52184a, "__esModule", {
    value: true
  });
  return _0x52184a;
})({});