(function () {
  "use strict";
  function _0x3a8b7e(_0x31371e) {
    return (_0x3a8b7e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x1d4a0a) {
      return typeof _0x1d4a0a;
    } : function (_0x51b260) {
      if (_0x51b260 && typeof Symbol == "function" && _0x51b260.constructor === Symbol && _0x51b260 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x51b260;
      }
    })(_0x31371e);
  }
  function _0x3138e1(_0x435740, _0x28adb4) {
    if (!(_0x435740 instanceof _0x28adb4)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _0x185a68(_0x1f4e51, _0xbe600b) {
    for (var _0x4d11b2 = 0; _0x4d11b2 < _0xbe600b.length; _0x4d11b2++) {
      var _0x31f8c4 = _0xbe600b[_0x4d11b2];
      _0x31f8c4.enumerable = _0x31f8c4.enumerable || false;
      _0x31f8c4.configurable = true;
      if ("value" in _0x31f8c4) {
        _0x31f8c4.writable = true;
      }
      Object.defineProperty(_0x1f4e51, _0x31f8c4.key, _0x31f8c4);
    }
  }
  function _0x433dc2(_0x48dd17, _0x54960c, _0x48de0e) {
    if (_0x54960c) {
      _0x185a68(_0x48dd17.prototype, _0x54960c);
    }
    if (_0x48de0e) {
      _0x185a68(_0x48dd17, _0x48de0e);
    }
    return _0x48dd17;
  }
  function _0x19a98e(_0x14ca3, _0x53040c, _0x318d7c) {
    if (_0x53040c in _0x14ca3) {
      Object.defineProperty(_0x14ca3, _0x53040c, {
        value: _0x318d7c,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      _0x14ca3[_0x53040c] = _0x318d7c;
    }
    return _0x14ca3;
  }
  function _0x259c41(_0x5ed497, _0x2c6185) {
    var _0x5df74b = Object.keys(_0x5ed497);
    if (Object.getOwnPropertySymbols) {
      var _0x23a62e = Object.getOwnPropertySymbols(_0x5ed497);
      if (_0x2c6185) {
        _0x23a62e = _0x23a62e.filter(function (_0x393b20) {
          return Object.getOwnPropertyDescriptor(_0x5ed497, _0x393b20).enumerable;
        });
      }
      _0x5df74b.push.apply(_0x5df74b, _0x23a62e);
    }
    return _0x5df74b;
  }
  function _0x402863(_0x15eb26) {
    for (var _0xcd9c74 = 1; _0xcd9c74 < arguments.length; _0xcd9c74++) {
      var _0x2fb6ff = arguments[_0xcd9c74] ?? {};
      if (_0xcd9c74 % 2) {
        _0x259c41(Object(_0x2fb6ff), true).forEach(function (_0x2e1646) {
          _0x19a98e(_0x15eb26, _0x2e1646, _0x2fb6ff[_0x2e1646]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(_0x15eb26, Object.getOwnPropertyDescriptors(_0x2fb6ff));
      } else {
        _0x259c41(Object(_0x2fb6ff)).forEach(function (_0x55cb7f) {
          Object.defineProperty(_0x15eb26, _0x55cb7f, Object.getOwnPropertyDescriptor(_0x2fb6ff, _0x55cb7f));
        });
      }
    }
    return _0x15eb26;
  }
  function _0x2ed2b4(_0xe37404, _0x8db2fd) {
    if (typeof _0x8db2fd != "function" && _0x8db2fd !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    _0xe37404.prototype = Object.create(_0x8db2fd && _0x8db2fd.prototype, {
      constructor: {
        value: _0xe37404,
        writable: true,
        configurable: true
      }
    });
    if (_0x8db2fd) {
      _0x28058d(_0xe37404, _0x8db2fd);
    }
  }
  function _0x3b42e6(_0x2e9dd3) {
    return (_0x3b42e6 = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x3f1102) {
      return _0x3f1102.__proto__ || Object.getPrototypeOf(_0x3f1102);
    })(_0x2e9dd3);
  }
  function _0x28058d(_0x5d474a, _0x27d15e) {
    return (_0x28058d = Object.setPrototypeOf || function (_0x3dba8f, _0x16242b) {
      _0x3dba8f.__proto__ = _0x16242b;
      return _0x3dba8f;
    })(_0x5d474a, _0x27d15e);
  }
  function _0xf4a84(_0x57caf3) {
    if (_0x57caf3 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return _0x57caf3;
  }
  function _0x5c429a(_0x47e00d) {
    var _0xfd0d30 = function () {
      if (typeof Reflect == "undefined" || !Reflect.construct) {
        return false;
      }
      if (Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
        return true;
      } catch (_0x3061f2) {
        return false;
      }
    }();
    return function () {
      var _0xd82687;
      var _0x260fc4;
      var _0x53d1d7;
      var _0x1369ae = _0x3b42e6(_0x47e00d);
      if (_0xfd0d30) {
        var _0x144564 = _0x3b42e6(this).constructor;
        _0xd82687 = Reflect.construct(_0x1369ae, arguments, _0x144564);
      } else {
        _0xd82687 = _0x1369ae.apply(this, arguments);
      }
      _0x260fc4 = this;
      if (!(_0x53d1d7 = _0xd82687) || typeof _0x53d1d7 != "object" && typeof _0x53d1d7 != "function") {
        return _0xf4a84(_0x260fc4);
      } else {
        return _0x53d1d7;
      }
    };
  }
  function _0x25221d(_0x1395e0, _0x519e44, _0x2e9111) {
    return (_0x25221d = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function (_0x117801, _0x361f65, _0x1a49ab) {
      var _0x5c8f33 = function (_0x1bba47, _0x57d4e5) {
        while (!Object.prototype.hasOwnProperty.call(_0x1bba47, _0x57d4e5) && (_0x1bba47 = _0x3b42e6(_0x1bba47)) !== null);
        return _0x1bba47;
      }(_0x117801, _0x361f65);
      if (_0x5c8f33) {
        var _0x546a38 = Object.getOwnPropertyDescriptor(_0x5c8f33, _0x361f65);
        if (_0x546a38.get) {
          return _0x546a38.get.call(_0x1a49ab);
        } else {
          return _0x546a38.value;
        }
      }
    })(_0x1395e0, _0x519e44, _0x2e9111 || _0x1395e0);
  }
  function _0x2b49da(_0x2f4cbb, _0x477393) {
    return function (_0x56dec2) {
      if (Array.isArray(_0x56dec2)) {
        return _0x56dec2;
      }
    }(_0x2f4cbb) || function (_0x284864, _0x5e8457) {
      if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(_0x284864))) {
        return;
      }
      var _0x4e4d4a = [];
      var _0x56be61 = true;
      var _0x3713f5 = false;
      var _0xc6b9f0 = undefined;
      try {
        for (var _0x2a38d8, _0x4e19c0 = _0x284864[Symbol.iterator](); !(_0x56be61 = (_0x2a38d8 = _0x4e19c0.next()).done) && (_0x4e4d4a.push(_0x2a38d8.value), !_0x5e8457 || _0x4e4d4a.length !== _0x5e8457); _0x56be61 = true);
      } catch (_0x4d815d) {
        _0x3713f5 = true;
        _0xc6b9f0 = _0x4d815d;
      } finally {
        try {
          if (!_0x56be61 && _0x4e19c0.return != null) {
            _0x4e19c0.return();
          }
        } finally {
          if (_0x3713f5) {
            throw _0xc6b9f0;
          }
        }
      }
      return _0x4e4d4a;
    }(_0x2f4cbb, _0x477393) || _0xfd2fa4(_0x2f4cbb, _0x477393) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _0x1e7647(_0x461a52) {
    return function (_0x8a17c0) {
      if (Array.isArray(_0x8a17c0)) {
        return _0x1b8358(_0x8a17c0);
      }
    }(_0x461a52) || function (_0x2bb1ce) {
      if (typeof Symbol != "undefined" && Symbol.iterator in Object(_0x2bb1ce)) {
        return Array.from(_0x2bb1ce);
      }
    }(_0x461a52) || _0xfd2fa4(_0x461a52) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _0xfd2fa4(_0xaf682c, _0x10d79d) {
    if (_0xaf682c) {
      if (typeof _0xaf682c == "string") {
        return _0x1b8358(_0xaf682c, _0x10d79d);
      }
      var _0x1b9b21 = Object.prototype.toString.call(_0xaf682c).slice(8, -1);
      if (_0x1b9b21 === "Object" && _0xaf682c.constructor) {
        _0x1b9b21 = _0xaf682c.constructor.name;
      }
      if (_0x1b9b21 === "Map" || _0x1b9b21 === "Set") {
        return Array.from(_0xaf682c);
      } else if (_0x1b9b21 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x1b9b21)) {
        return _0x1b8358(_0xaf682c, _0x10d79d);
      } else {
        return undefined;
      }
    }
  }
  function _0x1b8358(_0xb85ed2, _0x1bc906) {
    if (_0x1bc906 == null || _0x1bc906 > _0xb85ed2.length) {
      _0x1bc906 = _0xb85ed2.length;
    }
    for (var _0x5db4a2 = 0, _0x5ed8f4 = new Array(_0x1bc906); _0x5db4a2 < _0x1bc906; _0x5db4a2++) {
      _0x5ed8f4[_0x5db4a2] = _0xb85ed2[_0x5db4a2];
    }
    return _0x5ed8f4;
  }
  var _0x447921;
  var _0x1901c4;
  var _0x3af09c;
  var _0x1509ac;
  var _0x33ee6b;
  var _0x3be664;
  var _0x3f12c9 = {};
  var _0x36eaab = [];
  var _0x30fb18 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function _0x13e5a9(_0x3dc82e, _0x503814) {
    for (var _0x193a48 in _0x503814) {
      _0x3dc82e[_0x193a48] = _0x503814[_0x193a48];
    }
    return _0x3dc82e;
  }
  function _0x248b19(_0x140754) {
    var _0x5d825f = _0x140754.parentNode;
    if (_0x5d825f) {
      _0x5d825f.removeChild(_0x140754);
    }
  }
  function _0x2bafa4(_0x50eae8, _0x125501, _0x14f702) {
    var _0xe23636;
    var _0x16f933;
    var _0x2e3759;
    var _0x3bddec = arguments;
    var _0x3cbff4 = {};
    for (_0x2e3759 in _0x125501) {
      if (_0x2e3759 == "key") {
        _0xe23636 = _0x125501[_0x2e3759];
      } else if (_0x2e3759 == "ref") {
        _0x16f933 = _0x125501[_0x2e3759];
      } else {
        _0x3cbff4[_0x2e3759] = _0x125501[_0x2e3759];
      }
    }
    if (arguments.length > 3) {
      _0x14f702 = [_0x14f702];
      _0x2e3759 = 3;
      for (; _0x2e3759 < arguments.length; _0x2e3759++) {
        _0x14f702.push(_0x3bddec[_0x2e3759]);
      }
    }
    if (_0x14f702 != null) {
      _0x3cbff4.children = _0x14f702;
    }
    if (typeof _0x50eae8 == "function" && _0x50eae8.defaultProps != null) {
      for (_0x2e3759 in _0x50eae8.defaultProps) {
        if (_0x3cbff4[_0x2e3759] === undefined) {
          _0x3cbff4[_0x2e3759] = _0x50eae8.defaultProps[_0x2e3759];
        }
      }
    }
    return _0xdb473d(_0x50eae8, _0x3cbff4, _0xe23636, _0x16f933, null);
  }
  function _0xdb473d(_0x31e0e8, _0x5e28ec, _0x3444af, _0x4143fb, _0x4bdd87) {
    var _0xa40a80 = {
      type: _0x31e0e8,
      props: _0x5e28ec,
      key: _0x3444af,
      ref: _0x4143fb,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: undefined,
      __c: null,
      __h: null,
      constructor: undefined,
      __v: _0x4bdd87
    };
    if (_0x4bdd87 == null) {
      _0xa40a80.__v = _0xa40a80;
    }
    if (_0x447921.vnode != null) {
      _0x447921.vnode(_0xa40a80);
    }
    return _0xa40a80;
  }
  function _0xa3bb41(_0x5eaefa) {
    return _0x5eaefa.children;
  }
  function _0x3e2f05(_0x5de4ab, _0x2996ae) {
    this.props = _0x5de4ab;
    this.context = _0x2996ae;
  }
  function _0x28ce40(_0x470286, _0x5ded89) {
    if (_0x5ded89 == null) {
      if (_0x470286.__) {
        return _0x28ce40(_0x470286.__, _0x470286.__.__k.indexOf(_0x470286) + 1);
      } else {
        return null;
      }
    }
    var _0x273143;
    for (; _0x5ded89 < _0x470286.__k.length; _0x5ded89++) {
      if ((_0x273143 = _0x470286.__k[_0x5ded89]) != null && _0x273143.__e != null) {
        return _0x273143.__e;
      }
    }
    if (typeof _0x470286.type == "function") {
      return _0x28ce40(_0x470286);
    } else {
      return null;
    }
  }
  function _0x12e70a(_0x2a8a3e) {
    var _0x5b9ae7;
    var _0x30dadb;
    if ((_0x2a8a3e = _0x2a8a3e.__) != null && _0x2a8a3e.__c != null) {
      _0x2a8a3e.__e = _0x2a8a3e.__c.base = null;
      _0x5b9ae7 = 0;
      for (; _0x5b9ae7 < _0x2a8a3e.__k.length; _0x5b9ae7++) {
        if ((_0x30dadb = _0x2a8a3e.__k[_0x5b9ae7]) != null && _0x30dadb.__e != null) {
          _0x2a8a3e.__e = _0x2a8a3e.__c.base = _0x30dadb.__e;
          break;
        }
      }
      return _0x12e70a(_0x2a8a3e);
    }
  }
  function _0x16388a(_0x5b8c22) {
    if (!_0x5b8c22.__d && (_0x5b8c22.__d = true) && _0x1901c4.push(_0x5b8c22) && !_0x470946.__r++ || _0x1509ac !== _0x447921.debounceRendering) {
      ((_0x1509ac = _0x447921.debounceRendering) || _0x3af09c)(_0x470946);
    }
  }
  function _0x470946() {
    var _0x3734ed;
    while (_0x470946.__r = _0x1901c4.length) {
      _0x3734ed = _0x1901c4.sort(function (_0x122e4c, _0x1eabfc) {
        return _0x122e4c.__v.__b - _0x1eabfc.__v.__b;
      });
      _0x1901c4 = [];
      _0x3734ed.some(function (_0x245ecb) {
        var _0x52760b;
        var _0x1d16d5;
        var _0x3beea6;
        var _0x563716;
        var _0x449e4f;
        var _0x5e93f7;
        var _0x1caed4;
        if (_0x245ecb.__d) {
          _0x5e93f7 = (_0x449e4f = (_0x52760b = _0x245ecb).__v).__e;
          if (_0x1caed4 = _0x52760b.__P) {
            _0x1d16d5 = [];
            _0x563716 = _0x8ce6a4(_0x1caed4, _0x449e4f, (_0x3beea6 = _0x13e5a9({}, _0x449e4f)).__v = _0x3beea6, _0x52760b.__n, _0x1caed4.ownerSVGElement !== undefined, _0x449e4f.__h != null ? [_0x5e93f7] : null, _0x1d16d5, _0x5e93f7 == null ? _0x28ce40(_0x449e4f) : _0x5e93f7, _0x449e4f.__h);
            _0x3dfb78(_0x1d16d5, _0x449e4f);
            if (_0x563716 != _0x5e93f7) {
              _0x12e70a(_0x449e4f);
            }
          }
        }
      });
    }
  }
  function _0xb3eb97(_0x49fdc4, _0x25d3e0, _0x4e3afd, _0x57b90c, _0x2e78e9, _0x1cfe7f, _0xfb0eff, _0x42f170, _0x3070d4, _0x438f05) {
    var _0x199abf;
    var _0x174818;
    var _0x2e800f;
    var _0x16ea8e;
    var _0x1a0b15;
    var _0x10243f;
    var _0x5a662f;
    var _0x240ecb = _0x57b90c && _0x57b90c.__k || _0x36eaab;
    var _0x589f77 = _0x240ecb.length;
    if (_0x3070d4 == _0x3f12c9) {
      _0x3070d4 = _0xfb0eff != null ? _0xfb0eff[0] : _0x589f77 ? _0x28ce40(_0x57b90c, 0) : null;
    }
    _0x4e3afd.__k = [];
    _0x199abf = 0;
    for (; _0x199abf < _0x25d3e0.length; _0x199abf++) {
      if ((_0x16ea8e = _0x4e3afd.__k[_0x199abf] = (_0x16ea8e = _0x25d3e0[_0x199abf]) == null || typeof _0x16ea8e == "boolean" ? null : typeof _0x16ea8e == "string" || typeof _0x16ea8e == "number" ? _0xdb473d(null, _0x16ea8e, null, null, _0x16ea8e) : Array.isArray(_0x16ea8e) ? _0xdb473d(_0xa3bb41, {
        children: _0x16ea8e
      }, null, null, null) : _0x16ea8e.__e != null || _0x16ea8e.__c != null ? _0xdb473d(_0x16ea8e.type, _0x16ea8e.props, _0x16ea8e.key, null, _0x16ea8e.__v) : _0x16ea8e) != null) {
        _0x16ea8e.__ = _0x4e3afd;
        _0x16ea8e.__b = _0x4e3afd.__b + 1;
        if ((_0x2e800f = _0x240ecb[_0x199abf]) === null || _0x2e800f && _0x16ea8e.key == _0x2e800f.key && _0x16ea8e.type === _0x2e800f.type) {
          _0x240ecb[_0x199abf] = undefined;
        } else {
          for (_0x174818 = 0; _0x174818 < _0x589f77; _0x174818++) {
            if ((_0x2e800f = _0x240ecb[_0x174818]) && _0x16ea8e.key == _0x2e800f.key && _0x16ea8e.type === _0x2e800f.type) {
              _0x240ecb[_0x174818] = undefined;
              break;
            }
            _0x2e800f = null;
          }
        }
        _0x1a0b15 = _0x8ce6a4(_0x49fdc4, _0x16ea8e, _0x2e800f = _0x2e800f || _0x3f12c9, _0x2e78e9, _0x1cfe7f, _0xfb0eff, _0x42f170, _0x3070d4, _0x438f05);
        if ((_0x174818 = _0x16ea8e.ref) && _0x2e800f.ref != _0x174818) {
          _0x5a662f = _0x5a662f || [];
          if (_0x2e800f.ref) {
            _0x5a662f.push(_0x2e800f.ref, null, _0x16ea8e);
          }
          _0x5a662f.push(_0x174818, _0x16ea8e.__c || _0x1a0b15, _0x16ea8e);
        }
        if (_0x1a0b15 != null) {
          if (_0x10243f == null) {
            _0x10243f = _0x1a0b15;
          }
          _0x3070d4 = _0x84c09a(_0x49fdc4, _0x16ea8e, _0x2e800f, _0x240ecb, _0xfb0eff, _0x1a0b15, _0x3070d4);
          if (_0x438f05 || _0x4e3afd.type != "option") {
            if (typeof _0x4e3afd.type == "function") {
              _0x4e3afd.__d = _0x3070d4;
            }
          } else {
            _0x49fdc4.value = "";
          }
        } else if (_0x3070d4 && _0x2e800f.__e == _0x3070d4 && _0x3070d4.parentNode != _0x49fdc4) {
          _0x3070d4 = _0x28ce40(_0x2e800f);
        }
      }
    }
    _0x4e3afd.__e = _0x10243f;
    if (_0xfb0eff != null && typeof _0x4e3afd.type != "function") {
      for (_0x199abf = _0xfb0eff.length; _0x199abf--;) {
        if (_0xfb0eff[_0x199abf] != null) {
          _0x248b19(_0xfb0eff[_0x199abf]);
        }
      }
    }
    for (_0x199abf = _0x589f77; _0x199abf--;) {
      if (_0x240ecb[_0x199abf] != null) {
        _0x33b6e4(_0x240ecb[_0x199abf], _0x240ecb[_0x199abf]);
      }
    }
    if (_0x5a662f) {
      for (_0x199abf = 0; _0x199abf < _0x5a662f.length; _0x199abf++) {
        _0x8ef919(_0x5a662f[_0x199abf], _0x5a662f[++_0x199abf], _0x5a662f[++_0x199abf]);
      }
    }
  }
  function _0x84c09a(_0xf81bad, _0x5a40e5, _0x26d510, _0x51ec6f, _0x10e187, _0x2ca6ca, _0x5a62cc) {
    var _0xf7b033;
    var _0x25b6b9;
    var _0x85be80;
    if (_0x5a40e5.__d !== undefined) {
      _0xf7b033 = _0x5a40e5.__d;
      _0x5a40e5.__d = undefined;
    } else if (_0x10e187 == _0x26d510 || _0x2ca6ca != _0x5a62cc || _0x2ca6ca.parentNode == null) {
      _0x4d4d7f: if (_0x5a62cc == null || _0x5a62cc.parentNode !== _0xf81bad) {
        _0xf81bad.appendChild(_0x2ca6ca);
        _0xf7b033 = null;
      } else {
        _0x25b6b9 = _0x5a62cc;
        _0x85be80 = 0;
        for (; (_0x25b6b9 = _0x25b6b9.nextSibling) && _0x85be80 < _0x51ec6f.length; _0x85be80 += 2) {
          if (_0x25b6b9 == _0x2ca6ca) {
            break _0x4d4d7f;
          }
        }
        _0xf81bad.insertBefore(_0x2ca6ca, _0x5a62cc);
        _0xf7b033 = _0x5a62cc;
      }
    }
    if (_0xf7b033 !== undefined) {
      return _0xf7b033;
    } else {
      return _0x2ca6ca.nextSibling;
    }
  }
  function _0x47bb4c(_0x29877a, _0x199fe1, _0x1c4727) {
    if (_0x199fe1[0] === "-") {
      _0x29877a.setProperty(_0x199fe1, _0x1c4727);
    } else {
      _0x29877a[_0x199fe1] = _0x1c4727 == null ? "" : typeof _0x1c4727 != "number" || _0x30fb18.test(_0x199fe1) ? _0x1c4727 : _0x1c4727 + "px";
    }
  }
  function _0x58ec36(_0x11a108, _0x259bf6, _0x349b85, _0x3c45b0, _0x5d32e7) {
    var _0x2d2303;
    var _0x5d51e0;
    var _0x55d057;
    if (_0x5d32e7 && _0x259bf6 == "className") {
      _0x259bf6 = "class";
    }
    if (_0x259bf6 === "style") {
      if (typeof _0x349b85 == "string") {
        _0x11a108.style.cssText = _0x349b85;
      } else {
        if (typeof _0x3c45b0 == "string") {
          _0x11a108.style.cssText = _0x3c45b0 = "";
        }
        if (_0x3c45b0) {
          for (_0x259bf6 in _0x3c45b0) {
            if (!_0x349b85 || !(_0x259bf6 in _0x349b85)) {
              _0x47bb4c(_0x11a108.style, _0x259bf6, "");
            }
          }
        }
        if (_0x349b85) {
          for (_0x259bf6 in _0x349b85) {
            if (!_0x3c45b0 || _0x349b85[_0x259bf6] !== _0x3c45b0[_0x259bf6]) {
              _0x47bb4c(_0x11a108.style, _0x259bf6, _0x349b85[_0x259bf6]);
            }
          }
        }
      }
    } else if (_0x259bf6[0] === "o" && _0x259bf6[1] === "n") {
      _0x2d2303 = _0x259bf6 !== (_0x259bf6 = _0x259bf6.replace(/Capture$/, ""));
      if ((_0x5d51e0 = _0x259bf6.toLowerCase()) in _0x11a108) {
        _0x259bf6 = _0x5d51e0;
      }
      _0x259bf6 = _0x259bf6.slice(2);
      _0x11a108.l ||= {};
      _0x55d057 = _0x2d2303 ? _0x1c2e20 : _0x429e85;
      if (_0x11a108.l[_0x259bf6 + _0x2d2303] = _0x349b85) {
        if (!_0x3c45b0) {
          _0x11a108.addEventListener(_0x259bf6, _0x55d057, _0x2d2303);
        }
      } else {
        _0x11a108.removeEventListener(_0x259bf6, _0x55d057, _0x2d2303);
      }
    } else if (_0x259bf6 !== "list" && _0x259bf6 !== "tagName" && _0x259bf6 !== "form" && _0x259bf6 !== "type" && _0x259bf6 !== "size" && _0x259bf6 !== "download" && _0x259bf6 !== "href" && !_0x5d32e7 && _0x259bf6 in _0x11a108) {
      _0x11a108[_0x259bf6] = _0x349b85 == null ? "" : _0x349b85;
    } else if (typeof _0x349b85 != "function" && _0x259bf6 !== "dangerouslySetInnerHTML") {
      if (_0x259bf6 !== (_0x259bf6 = _0x259bf6.replace(/xlink:?/, ""))) {
        if (_0x349b85 == null || _0x349b85 === false) {
          _0x11a108.removeAttributeNS("http://www.w3.org/1999/xlink", _0x259bf6.toLowerCase());
        } else {
          _0x11a108.setAttributeNS("http://www.w3.org/1999/xlink", _0x259bf6.toLowerCase(), _0x349b85);
        }
      } else if (_0x349b85 == null || _0x349b85 === false && !/^ar/.test(_0x259bf6)) {
        _0x11a108.removeAttribute(_0x259bf6);
      } else {
        _0x11a108.setAttribute(_0x259bf6, _0x349b85);
      }
    }
  }
  function _0x429e85(_0x2768fe) {
    this.l[_0x2768fe.type + false](_0x447921.event ? _0x447921.event(_0x2768fe) : _0x2768fe);
  }
  function _0x1c2e20(_0x182b3f) {
    this.l[_0x182b3f.type + true](_0x447921.event ? _0x447921.event(_0x182b3f) : _0x182b3f);
  }
  function _0x8ce6a4(_0x4994e3, _0xb1dfd, _0x1931d0, _0x3683ea, _0x342f80, _0x2cce82, _0x21045b, _0x58c554, _0x2dd8a6) {
    var _0x17f846;
    var _0x13d556;
    var _0x43bf1e;
    var _0x181471;
    var _0x5371ed;
    var _0x45dc9d;
    var _0x40f546;
    var _0x1bb1a0;
    var _0x24f81b;
    var _0x35dc58;
    var _0x5a3d4c;
    var _0x47d543 = _0xb1dfd.type;
    if (_0xb1dfd.constructor !== undefined) {
      return null;
    }
    if (_0x1931d0.__h != null) {
      _0x2dd8a6 = _0x1931d0.__h;
      _0x58c554 = _0xb1dfd.__e = _0x1931d0.__e;
      _0xb1dfd.__h = null;
      _0x2cce82 = [_0x58c554];
    }
    if (_0x17f846 = _0x447921.__b) {
      _0x17f846(_0xb1dfd);
    }
    try {
      _0x155ee7: if (typeof _0x47d543 == "function") {
        _0x1bb1a0 = _0xb1dfd.props;
        _0x24f81b = (_0x17f846 = _0x47d543.contextType) && _0x3683ea[_0x17f846.__c];
        _0x35dc58 = _0x17f846 ? _0x24f81b ? _0x24f81b.props.value : _0x17f846.__ : _0x3683ea;
        if (_0x1931d0.__c) {
          _0x40f546 = (_0x13d556 = _0xb1dfd.__c = _0x1931d0.__c).__ = _0x13d556.__E;
        } else {
          if ("prototype" in _0x47d543 && _0x47d543.prototype.render) {
            _0xb1dfd.__c = _0x13d556 = new _0x47d543(_0x1bb1a0, _0x35dc58);
          } else {
            _0xb1dfd.__c = _0x13d556 = new _0x3e2f05(_0x1bb1a0, _0x35dc58);
            _0x13d556.constructor = _0x47d543;
            _0x13d556.render = _0x2f3b3d;
          }
          if (_0x24f81b) {
            _0x24f81b.sub(_0x13d556);
          }
          _0x13d556.props = _0x1bb1a0;
          if (!_0x13d556.state) {
            _0x13d556.state = {};
          }
          _0x13d556.context = _0x35dc58;
          _0x13d556.__n = _0x3683ea;
          _0x43bf1e = _0x13d556.__d = true;
          _0x13d556.__h = [];
        }
        if (_0x13d556.__s == null) {
          _0x13d556.__s = _0x13d556.state;
        }
        if (_0x47d543.getDerivedStateFromProps != null) {
          if (_0x13d556.__s == _0x13d556.state) {
            _0x13d556.__s = _0x13e5a9({}, _0x13d556.__s);
          }
          _0x13e5a9(_0x13d556.__s, _0x47d543.getDerivedStateFromProps(_0x1bb1a0, _0x13d556.__s));
        }
        _0x181471 = _0x13d556.props;
        _0x5371ed = _0x13d556.state;
        if (_0x43bf1e) {
          if (_0x47d543.getDerivedStateFromProps == null && _0x13d556.componentWillMount != null) {
            _0x13d556.componentWillMount();
          }
          if (_0x13d556.componentDidMount != null) {
            _0x13d556.__h.push(_0x13d556.componentDidMount);
          }
        } else {
          if (_0x47d543.getDerivedStateFromProps == null && _0x1bb1a0 !== _0x181471 && _0x13d556.componentWillReceiveProps != null) {
            _0x13d556.componentWillReceiveProps(_0x1bb1a0, _0x35dc58);
          }
          if (!_0x13d556.__e && _0x13d556.shouldComponentUpdate != null && _0x13d556.shouldComponentUpdate(_0x1bb1a0, _0x13d556.__s, _0x35dc58) === false || _0xb1dfd.__v === _0x1931d0.__v) {
            _0x13d556.props = _0x1bb1a0;
            _0x13d556.state = _0x13d556.__s;
            if (_0xb1dfd.__v !== _0x1931d0.__v) {
              _0x13d556.__d = false;
            }
            (_0x13d556.__v = _0xb1dfd).__e = _0x1931d0.__e;
            _0xb1dfd.__k = _0x1931d0.__k;
            if (_0x13d556.__h.length) {
              _0x21045b.push(_0x13d556);
            }
            (function _0x515a91(_0x5995a1, _0x21cf1a, _0x5b8959) {
              var _0x12b60c;
              var _0xd40dc0;
              for (_0x12b60c = 0; _0x12b60c < _0x5995a1.__k.length; _0x12b60c++) {
                if (_0xd40dc0 = _0x5995a1.__k[_0x12b60c]) {
                  _0xd40dc0.__ = _0x5995a1;
                  if (_0xd40dc0.__e) {
                    if (typeof _0xd40dc0.type == "function" && _0xd40dc0.__k.length > 1) {
                      _0x515a91(_0xd40dc0, _0x21cf1a, _0x5b8959);
                    }
                    _0x21cf1a = _0x84c09a(_0x5b8959, _0xd40dc0, _0xd40dc0, _0x5995a1.__k, null, _0xd40dc0.__e, _0x21cf1a);
                    if (typeof _0x5995a1.type == "function") {
                      _0x5995a1.__d = _0x21cf1a;
                    }
                  }
                }
              }
            })(_0xb1dfd, _0x58c554, _0x4994e3);
            break _0x155ee7;
          }
          if (_0x13d556.componentWillUpdate != null) {
            _0x13d556.componentWillUpdate(_0x1bb1a0, _0x13d556.__s, _0x35dc58);
          }
          if (_0x13d556.componentDidUpdate != null) {
            _0x13d556.__h.push(function () {
              _0x13d556.componentDidUpdate(_0x181471, _0x5371ed, _0x45dc9d);
            });
          }
        }
        _0x13d556.context = _0x35dc58;
        _0x13d556.props = _0x1bb1a0;
        _0x13d556.state = _0x13d556.__s;
        if (_0x17f846 = _0x447921.__r) {
          _0x17f846(_0xb1dfd);
        }
        _0x13d556.__d = false;
        _0x13d556.__v = _0xb1dfd;
        _0x13d556.__P = _0x4994e3;
        _0x17f846 = _0x13d556.render(_0x13d556.props, _0x13d556.state, _0x13d556.context);
        _0x13d556.state = _0x13d556.__s;
        if (_0x13d556.getChildContext != null) {
          _0x3683ea = _0x13e5a9(_0x13e5a9({}, _0x3683ea), _0x13d556.getChildContext());
        }
        if (!_0x43bf1e && _0x13d556.getSnapshotBeforeUpdate != null) {
          _0x45dc9d = _0x13d556.getSnapshotBeforeUpdate(_0x181471, _0x5371ed);
        }
        _0x5a3d4c = _0x17f846 != null && _0x17f846.type == _0xa3bb41 && _0x17f846.key == null ? _0x17f846.props.children : _0x17f846;
        _0xb3eb97(_0x4994e3, Array.isArray(_0x5a3d4c) ? _0x5a3d4c : [_0x5a3d4c], _0xb1dfd, _0x1931d0, _0x3683ea, _0x342f80, _0x2cce82, _0x21045b, _0x58c554, _0x2dd8a6);
        _0x13d556.base = _0xb1dfd.__e;
        _0xb1dfd.__h = null;
        if (_0x13d556.__h.length) {
          _0x21045b.push(_0x13d556);
        }
        if (_0x40f546) {
          _0x13d556.__E = _0x13d556.__ = null;
        }
        _0x13d556.__e = false;
      } else if (_0x2cce82 == null && _0xb1dfd.__v === _0x1931d0.__v) {
        _0xb1dfd.__k = _0x1931d0.__k;
        _0xb1dfd.__e = _0x1931d0.__e;
      } else {
        _0xb1dfd.__e = function (_0x443980, _0x4bc317, _0x3d7832, _0x489b5c, _0x5a0b8f, _0x5d4cc3, _0x100ad0, _0x192246) {
          var _0x1c679e;
          var _0x1863ff;
          var _0x37297c;
          var _0x22bd77;
          var _0x138936;
          var _0x1ec595 = _0x3d7832.props;
          var _0x45264a = _0x4bc317.props;
          _0x5a0b8f = _0x4bc317.type === "svg" || _0x5a0b8f;
          if (_0x5d4cc3 != null) {
            for (_0x1c679e = 0; _0x1c679e < _0x5d4cc3.length; _0x1c679e++) {
              if ((_0x1863ff = _0x5d4cc3[_0x1c679e]) != null && ((_0x4bc317.type === null ? _0x1863ff.nodeType === 3 : _0x1863ff.localName === _0x4bc317.type) || _0x443980 == _0x1863ff)) {
                _0x443980 = _0x1863ff;
                _0x5d4cc3[_0x1c679e] = null;
                break;
              }
            }
          }
          if (_0x443980 == null) {
            if (_0x4bc317.type === null) {
              return document.createTextNode(_0x45264a);
            }
            _0x443980 = _0x5a0b8f ? document.createElementNS("http://www.w3.org/2000/svg", _0x4bc317.type) : document.createElement(_0x4bc317.type, _0x45264a.is && {
              is: _0x45264a.is
            });
            _0x5d4cc3 = null;
            _0x192246 = false;
          }
          if (_0x4bc317.type === null) {
            if (_0x1ec595 !== _0x45264a && (!_0x192246 || _0x443980.data !== _0x45264a)) {
              _0x443980.data = _0x45264a;
            }
          } else {
            if (_0x5d4cc3 != null) {
              _0x5d4cc3 = _0x36eaab.slice.call(_0x443980.childNodes);
            }
            _0x37297c = (_0x1ec595 = _0x3d7832.props || _0x3f12c9).dangerouslySetInnerHTML;
            _0x22bd77 = _0x45264a.dangerouslySetInnerHTML;
            if (!_0x192246) {
              if (_0x5d4cc3 != null) {
                _0x1ec595 = {};
                _0x138936 = 0;
                for (; _0x138936 < _0x443980.attributes.length; _0x138936++) {
                  _0x1ec595[_0x443980.attributes[_0x138936].name] = _0x443980.attributes[_0x138936].value;
                }
              }
              if (_0x22bd77 || _0x37297c) {
                if (!_0x22bd77 || (!_0x37297c || _0x22bd77.__html != _0x37297c.__html) && _0x22bd77.__html !== _0x443980.innerHTML) {
                  _0x443980.innerHTML = _0x22bd77 && _0x22bd77.__html || "";
                }
              }
            }
            (function (_0x49c488, _0x4e322e, _0x5e5d6b, _0x390016, _0x19c14d) {
              var _0x26f74e;
              for (_0x26f74e in _0x5e5d6b) {
                if (_0x26f74e !== "children" && _0x26f74e !== "key" && !(_0x26f74e in _0x4e322e)) {
                  _0x58ec36(_0x49c488, _0x26f74e, null, _0x5e5d6b[_0x26f74e], _0x390016);
                }
              }
              for (_0x26f74e in _0x4e322e) {
                if ((!_0x19c14d || typeof _0x4e322e[_0x26f74e] == "function") && _0x26f74e !== "children" && _0x26f74e !== "key" && _0x26f74e !== "value" && _0x26f74e !== "checked" && _0x5e5d6b[_0x26f74e] !== _0x4e322e[_0x26f74e]) {
                  _0x58ec36(_0x49c488, _0x26f74e, _0x4e322e[_0x26f74e], _0x5e5d6b[_0x26f74e], _0x390016);
                }
              }
            })(_0x443980, _0x45264a, _0x1ec595, _0x5a0b8f, _0x192246);
            if (_0x22bd77) {
              _0x4bc317.__k = [];
            } else {
              _0x1c679e = _0x4bc317.props.children;
              _0xb3eb97(_0x443980, Array.isArray(_0x1c679e) ? _0x1c679e : [_0x1c679e], _0x4bc317, _0x3d7832, _0x489b5c, _0x4bc317.type !== "foreignObject" && _0x5a0b8f, _0x5d4cc3, _0x100ad0, _0x3f12c9, _0x192246);
            }
            if (!_0x192246) {
              if ("value" in _0x45264a && (_0x1c679e = _0x45264a.value) !== undefined && (_0x1c679e !== _0x443980.value || _0x4bc317.type === "progress" && !_0x1c679e)) {
                _0x58ec36(_0x443980, "value", _0x1c679e, _0x1ec595.value, false);
              }
              if ("checked" in _0x45264a && (_0x1c679e = _0x45264a.checked) !== undefined && _0x1c679e !== _0x443980.checked) {
                _0x58ec36(_0x443980, "checked", _0x1c679e, _0x1ec595.checked, false);
              }
            }
          }
          return _0x443980;
        }(_0x1931d0.__e, _0xb1dfd, _0x1931d0, _0x3683ea, _0x342f80, _0x2cce82, _0x21045b, _0x2dd8a6);
      }
      if (_0x17f846 = _0x447921.diffed) {
        _0x17f846(_0xb1dfd);
      }
    } catch (_0x3199fb) {
      _0xb1dfd.__v = null;
      if (!!_0x2dd8a6 || _0x2cce82 != null) {
        _0xb1dfd.__e = _0x58c554;
        _0xb1dfd.__h = !!_0x2dd8a6;
        _0x2cce82[_0x2cce82.indexOf(_0x58c554)] = null;
      }
      _0x447921.__e(_0x3199fb, _0xb1dfd, _0x1931d0);
    }
    return _0xb1dfd.__e;
  }
  function _0x3dfb78(_0x5f514b, _0xb70bae) {
    if (_0x447921.__c) {
      _0x447921.__c(_0xb70bae, _0x5f514b);
    }
    _0x5f514b.some(function (_0x5e9399) {
      try {
        _0x5f514b = _0x5e9399.__h;
        _0x5e9399.__h = [];
        _0x5f514b.some(function (_0x1ba6d4) {
          _0x1ba6d4.call(_0x5e9399);
        });
      } catch (_0x54b8e1) {
        _0x447921.__e(_0x54b8e1, _0x5e9399.__v);
      }
    });
  }
  function _0x8ef919(_0xe663c2, _0x2f817f, _0x3254ed) {
    try {
      if (typeof _0xe663c2 == "function") {
        _0xe663c2(_0x2f817f);
      } else {
        _0xe663c2.current = _0x2f817f;
      }
    } catch (_0x596ac3) {
      _0x447921.__e(_0x596ac3, _0x3254ed);
    }
  }
  function _0x33b6e4(_0x1c3356, _0xd19981, _0x116ecf) {
    var _0x2f2e7d;
    var _0x4c0c20;
    var _0x21b5bf;
    if (_0x447921.unmount) {
      _0x447921.unmount(_0x1c3356);
    }
    if (_0x2f2e7d = _0x1c3356.ref) {
      if (!_0x2f2e7d.current || _0x2f2e7d.current === _0x1c3356.__e) {
        _0x8ef919(_0x2f2e7d, null, _0xd19981);
      }
    }
    if (!_0x116ecf && typeof _0x1c3356.type != "function") {
      _0x116ecf = (_0x4c0c20 = _0x1c3356.__e) != null;
    }
    _0x1c3356.__e = _0x1c3356.__d = undefined;
    if ((_0x2f2e7d = _0x1c3356.__c) != null) {
      if (_0x2f2e7d.componentWillUnmount) {
        try {
          _0x2f2e7d.componentWillUnmount();
        } catch (_0x335165) {
          _0x447921.__e(_0x335165, _0xd19981);
        }
      }
      _0x2f2e7d.base = _0x2f2e7d.__P = null;
    }
    if (_0x2f2e7d = _0x1c3356.__k) {
      for (_0x21b5bf = 0; _0x21b5bf < _0x2f2e7d.length; _0x21b5bf++) {
        if (_0x2f2e7d[_0x21b5bf]) {
          _0x33b6e4(_0x2f2e7d[_0x21b5bf], _0xd19981, _0x116ecf);
        }
      }
    }
    if (_0x4c0c20 != null) {
      _0x248b19(_0x4c0c20);
    }
  }
  function _0x2f3b3d(_0x6e316d, _0x57b831, _0x129628) {
    return this.constructor(_0x6e316d, _0x129628);
  }
  _0x447921 = {
    __e: function (_0x117578, _0xe5c51d) {
      var _0x183a37;
      var _0x291c9e;
      var _0x1bef82;
      var _0x320576 = _0xe5c51d.__h;
      while (_0xe5c51d = _0xe5c51d.__) {
        if ((_0x183a37 = _0xe5c51d.__c) && !_0x183a37.__) {
          try {
            if ((_0x291c9e = _0x183a37.constructor) && _0x291c9e.getDerivedStateFromError != null) {
              _0x183a37.setState(_0x291c9e.getDerivedStateFromError(_0x117578));
              _0x1bef82 = _0x183a37.__d;
            }
            if (_0x183a37.componentDidCatch != null) {
              _0x183a37.componentDidCatch(_0x117578);
              _0x1bef82 = _0x183a37.__d;
            }
            if (_0x1bef82) {
              _0xe5c51d.__h = _0x320576;
              return _0x183a37.__E = _0x183a37;
            }
          } catch (_0x3e0e2f) {
            _0x117578 = _0x3e0e2f;
          }
        }
      }
      throw _0x117578;
    }
  };
  _0x3e2f05.prototype.setState = function (_0x2d0de6, _0x58e69f) {
    var _0x1e8730;
    _0x1e8730 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = _0x13e5a9({}, this.state);
    if (typeof _0x2d0de6 == "function") {
      _0x2d0de6 = _0x2d0de6(_0x13e5a9({}, _0x1e8730), this.props);
    }
    if (_0x2d0de6) {
      _0x13e5a9(_0x1e8730, _0x2d0de6);
    }
    if (_0x2d0de6 != null && this.__v) {
      if (_0x58e69f) {
        this.__h.push(_0x58e69f);
      }
      _0x16388a(this);
    }
  };
  _0x3e2f05.prototype.forceUpdate = function (_0x4065ad) {
    if (this.__v) {
      this.__e = true;
      if (_0x4065ad) {
        this.__h.push(_0x4065ad);
      }
      _0x16388a(this);
    }
  };
  _0x3e2f05.prototype.render = _0xa3bb41;
  _0x1901c4 = [];
  _0x3af09c = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
  _0x33ee6b = _0x3f12c9;
  _0x3be664 = _0x470946.__r = 0;
  function _0x3ae245(_0xaa239, _0x13532f) {
    _0xaa239(_0x13532f = {
      exports: {}
    }, _0x13532f.exports);
    return _0x13532f.exports;
  }
  function _0x1c69cc(_0x399ed6) {
    return Math.abs(_0x399ed6) <= _0xe1e3c6;
  }
  function _0x4ad774(_0x1e2b56, _0x4d6f81) {
    return Math.abs(_0x1e2b56 - _0x4d6f81) <= _0xe1e3c6;
  }
  function _0x798ece(_0x4073d5, _0x380962, _0xccbef) {
    return _0x4073d5 + (_0x380962 - _0x4073d5) * _0xccbef;
  }
  function _0x57a388(_0x5baa42) {
    return --_0x5baa42 * _0x5baa42 * _0x5baa42 + 1;
  }
  function _0x269f14(_0x546077, _0x416af3, _0x107ba6, _0x233b6d) {
    return _0x546077 * _0x233b6d - _0x416af3 * _0x107ba6;
  }
  function _0x2cc099(_0x1e72f4, _0x34162f, _0x968835) {
    return Math.min(_0x1e72f4, _0x34162f) - _0xe1e3c6 <= _0x968835 && _0x968835 <= Math.max(_0x1e72f4, _0x34162f) + _0xe1e3c6;
  }
  function _0x3012d1(_0x7763e5, _0x11c732, _0x22d1ec, _0x322e9e) {
    var _0x314207;
    if (_0x11c732 < _0x7763e5) {
      _0x314207 = _0x7763e5;
      _0x7763e5 = _0x11c732;
      _0x11c732 = _0x314207;
    }
    if (_0x322e9e < _0x22d1ec) {
      _0x314207 = _0x22d1ec;
      _0x22d1ec = _0x322e9e;
      _0x322e9e = _0x314207;
    }
    return Math.min(_0x11c732, _0x322e9e) - Math.max(_0x7763e5, _0x22d1ec);
  }
  function _0x450885() {
    return ++_0x5c9f33;
  }
  function _0x82c099(_0x3100d1, _0x2f3906, _0x134563) {
    var _0x3df375 = _0x3100d1.x - _0x134563.x;
    var _0xa975ad = _0x3100d1.y - _0x134563.y;
    var _0xddf3ab = _0x2f3906.x - _0x134563.x;
    var _0x5e55e6 = _0x2f3906.y - _0x134563.y;
    if (_0xa975ad * _0x5e55e6 > 0) {
      return 1;
    }
    var _0x3a4cca = _0x3df375 * _0x5e55e6 - _0xa975ad * _0xddf3ab;
    var _0xa91f7e = _0x1c69cc(_0x3a4cca) ? 0 : Math.sign(_0x3a4cca);
    if (_0xa91f7e === 0) {
      if (_0x3df375 * _0xddf3ab <= 0) {
        return 0;
      } else {
        return 1;
      }
    } else if (_0xa975ad < 0) {
      return -_0xa91f7e;
    } else if (_0x5e55e6 < 0) {
      return _0xa91f7e;
    } else {
      return 1;
    }
  }
  function _0x48902a(_0x3fbac4, _0x428d19, _0x9d716) {
    var _0x3c4a92 = _0x1e8266 / _0x428d19;
    var _0x134da2 = [];
    for (var _0x1e06fd = 0; _0x1e06fd < _0x428d19; _0x1e06fd++) {
      var _0x111dad = _0x1e06fd * _0x3c4a92;
      _0x134da2.push(new _0x1c98db(_0x3fbac4.x + Math.cos(_0x111dad) * _0x9d716, _0x3fbac4.y + Math.sin(_0x111dad) * _0x9d716));
    }
    return _0x134da2;
  }
  function _0x231a73(_0x279a32) {
    function _0x833628(_0xb8a21d) {
      var _0x45598e = _0xb8a21d.toString(16);
      if (_0x45598e.length < 2) {
        return `0${_0x45598e}`;
      } else {
        return _0x45598e;
      }
    }
    var _0x33628b = _0x279a32.r;
    var _0x2c48a3 = _0x279a32.g;
    var _0x190629 = _0x279a32.b;
    return `#${_0x833628(_0x33628b)}${_0x833628(_0x2c48a3)}${_0x833628(_0x190629)}`;
  }
  function _0x5d6d75(_0x562d96) {
    return _0x231a73(function (_0x592c8b) {
      var _0x178c16;
      var _0x7af8ed;
      var _0xd5f8ac;
      var _0x511f3a;
      var _0x4085ca;
      var _0x30b0df;
      var _0xb812fb;
      var _0x4890d7;
      var _0x5acbf8 = _0x592c8b.h;
      var _0x42287c = _0x592c8b.s;
      var _0x10578c = _0x592c8b.v;
      _0x5acbf8 = Math.max(0, Math.min(360, _0x5acbf8));
      _0x42287c = Math.max(0, Math.min(100, _0x42287c));
      _0x10578c = Math.max(0, Math.min(100, _0x10578c));
      _0x10578c /= 100;
      if ((_0x42287c /= 100) == 0) {
        _0x178c16 = _0x7af8ed = _0xd5f8ac = _0x10578c;
        return {
          r: Math.round(_0x178c16 * 255),
          g: Math.round(_0x7af8ed * 255),
          b: Math.round(_0xd5f8ac * 255)
        };
      }
      _0x30b0df = _0x10578c * (1 - _0x42287c);
      _0xb812fb = _0x10578c * (1 - _0x42287c * (_0x4085ca = (_0x5acbf8 /= 60) - (_0x511f3a = Math.floor(_0x5acbf8))));
      _0x4890d7 = _0x10578c * (1 - _0x42287c * (1 - _0x4085ca));
      switch (_0x511f3a) {
        case 0:
          _0x178c16 = _0x10578c;
          _0x7af8ed = _0x4890d7;
          _0xd5f8ac = _0x30b0df;
          break;
        case 1:
          _0x178c16 = _0xb812fb;
          _0x7af8ed = _0x10578c;
          _0xd5f8ac = _0x30b0df;
          break;
        case 2:
          _0x178c16 = _0x30b0df;
          _0x7af8ed = _0x10578c;
          _0xd5f8ac = _0x4890d7;
          break;
        case 3:
          _0x178c16 = _0x30b0df;
          _0x7af8ed = _0xb812fb;
          _0xd5f8ac = _0x10578c;
          break;
        case 4:
          _0x178c16 = _0x4890d7;
          _0x7af8ed = _0x30b0df;
          _0xd5f8ac = _0x10578c;
          break;
        default:
          _0x178c16 = _0x10578c;
          _0x7af8ed = _0x30b0df;
          _0xd5f8ac = _0xb812fb;
      }
      return {
        r: Math.round(_0x178c16 * 255),
        g: Math.round(_0x7af8ed * 255),
        b: Math.round(_0xd5f8ac * 255)
      };
    }(_0x562d96));
  }
  function _0x2951ed(_0x47fa59, _0x2062b2, _0x5a92e3) {
    _0x47fa59.fillStyle = _0x5a92e3;
    _0x47fa59.fill(_0x2062b2);
  }
  function _0x1dcbf7(_0x1ddf23, _0x4e33cf, _0x506d5a, _0x3c5565) {
    _0x1ddf23.strokeStyle = _0x506d5a;
    _0x1ddf23.lineWidth = _0x3c5565;
    _0x1ddf23.stroke(_0x4e33cf);
  }
  function _0x5e6a44(_0x54c6fe, _0x3cbc33, _0x18ec5f, _0x3a9182, _0x53ffa6) {
    if (_0x18ec5f.polyline.segments.length) {
      _0x54c6fe.lineWidth = _0x53ffa6;
      _0x54c6fe.strokeStyle = _0x3cbc33;
      _0x54c6fe.stroke(_0x18ec5f.polyline.path);
    }
  }
  function _0x3eb461(_0x3adc08, _0x1dc0b6, _0x3e71e9, _0xf6edab, _0x451ba3) {
    (_0x451ba3 ? _0xf6edab.frontLayers : _0xf6edab.backLayers).forEach(function (_0x2fa07c) {
      return function (_0x12fd25, _0xa88054, _0x246c80, _0x347afd, _0x584bf3) {
        var _0x5705ce = _0x12fd25.trackWidth;
        if (_0x584bf3.image) {
          var _0x350583 = _0x584bf3.image.naturalWidth || _0x584bf3.image.width;
          var _0x352d75 = _0x584bf3.image.naturalHeight || _0x584bf3.image.height;
          var _0x4f0e92 = _0x5705ce * _0x347afd.scale * _0x584bf3.scale / _0x350583;
          _0xa88054.save();
          _0xa88054.translate(_0x246c80.position.x, _0x246c80.position.y - _0x12fd25.baseHeight * _0x584bf3.level);
          _0xa88054.rotate(_0x246c80.direction + Math.PI / 2);
          _0xa88054.translate((_0x347afd.x + _0x584bf3.x) * _0x5705ce, (_0x347afd.y + _0x584bf3.y) * _0x5705ce);
          var _0x16ddf9 = 0;
          if (_0x584bf3.direction === "target" && _0x246c80.target) {
            var _0x375016;
            try {
              _0x375016 = _0x246c80.target.clone().sub(_0x246c80.position);
            } catch (_0x3dfb13) {
              console.log("unit.name", _0x246c80.name);
              console.log("unit.fsm.state", _0x246c80.fsm.state);
              console.log("unit.base", _0x246c80.base);
              throw new Error(_0x3dfb13);
            }
            _0x16ddf9 += Math.atan2(_0x375016.y, _0x375016.x) - _0x246c80.direction;
          }
          if (_0x584bf3.direction === "billboard") {
            _0x16ddf9 += -_0x246c80.direction - Math.PI / 2;
          }
          if (_0x584bf3.rotation) {
            _0x16ddf9 += _0x584bf3.rotation * 0.0174533;
          }
          if (_0x16ddf9) {
            _0xa88054.rotate(_0x16ddf9);
          }
          _0xa88054.scale(_0x4f0e92, _0x4f0e92);
          _0xa88054.translate(_0x350583 * -_0x584bf3.pivot.x, _0x352d75 * -_0x584bf3.pivot.y);
          _0xa88054.drawImage(_0x584bf3.image, 0, 0);
          _0xa88054.restore();
        }
      }(_0x3adc08, _0x1dc0b6, _0x3e71e9, _0x2fa07c.display, _0x2fa07c.layer);
    });
  }
  function _0x211923(_0x2759c7, _0x26ce6c, _0x4b0c7b, _0x479d5a, _0x2cce0a, _0x4aeae8, _0xc51181) {
    var _0x273801 = _0x2b49da(_0x4aeae8, 4);
    var _0x28013d = _0x273801[0];
    var _0x19c98e = _0x273801[1];
    var _0x3b01e3 = _0x273801[2];
    var _0x5af558 = _0x273801[3];
    _0x2759c7.beginPath();
    _0x2759c7.moveTo(_0x26ce6c + _0x28013d, _0x4b0c7b);
    _0x2759c7.lineTo(_0x26ce6c + _0x479d5a - _0x19c98e, _0x4b0c7b);
    _0x2759c7.quadraticCurveTo(_0x26ce6c + _0x479d5a, _0x4b0c7b, _0x26ce6c + _0x479d5a, _0x4b0c7b + _0x19c98e);
    _0x2759c7.lineTo(_0x26ce6c + _0x479d5a, _0x4b0c7b + _0x2cce0a - _0x3b01e3);
    _0x2759c7.quadraticCurveTo(_0x26ce6c + _0x479d5a, _0x4b0c7b + _0x2cce0a, _0x26ce6c + _0x479d5a - _0x3b01e3, _0x4b0c7b + _0x2cce0a);
    _0x2759c7.lineTo(_0x26ce6c + _0x5af558, _0x4b0c7b + _0x2cce0a);
    _0x2759c7.quadraticCurveTo(_0x26ce6c, _0x4b0c7b + _0x2cce0a, _0x26ce6c, _0x4b0c7b + _0x2cce0a - _0x5af558);
    _0x2759c7.lineTo(_0x26ce6c, _0x4b0c7b + _0x28013d);
    _0x2759c7.quadraticCurveTo(_0x26ce6c, _0x4b0c7b, _0x26ce6c + _0x28013d, _0x4b0c7b);
    _0x2759c7.closePath();
    _0x2759c7.fill();
    if (_0xc51181) {
      _0x2759c7.strokeStyle = "#00000099";
      _0x2759c7.lineWidth = _0xc51181;
      _0x2759c7.stroke();
    }
  }
  function _0x522fc9() {}
  function _0x37a4b9(_0x5bfe52) {
    var _0x2b9e4c;
    var _0x3544a4;
    var _0x3d957d;
    var _0x1f98f0;
    var _0x52a0eb = _0x5bfe52.game;
    var _0x331382 = _0x5bfe52.ctx;
    var _0x3ff2cb = _0x5bfe52.viewScreenWidth;
    var _0x2b0d04 = _0x5bfe52.viewScreenHeight;
    var _0xab34a2 = _0x52a0eb.config;
    var _0x380413 = _0xab34a2.baseHeight;
    var _0x56ac9a = _0xab34a2.arenaColor;
    var _0x3f584a = _0xab34a2.borderColor;
    var _0xb3c218 = _0xab34a2.backgroundTopColor;
    var _0x4e87f6 = _0xab34a2.backgroundBottomColor;
    _0x2951ed(_0x331382, _0x52a0eb.border.polygon.path, _0x56ac9a);
    _0x331382.translate(0, _0x380413 * 3);
    _0x2951ed(_0x331382, _0x52a0eb.border.polygon.path, _0x3f584a);
    _0x331382.translate(0, _0x380413 * -3);
    _0x2b9e4c = _0x331382;
    _0x3544a4 = _0x52a0eb.space;
    _0x3d957d = _0xb3c218;
    _0x1f98f0 = _0x4e87f6;
    if (_0x2b9e4c !== undefined || _0x3d957d !== undefined || _0x1f98f0 !== undefined) {
      (_0x364d86 = _0x2b9e4c.createLinearGradient(_0x3544a4.width / 2, 0, _0x3544a4.width / 2, _0x3544a4.height)).addColorStop(0, _0x3d957d);
      _0x364d86.addColorStop(1, _0x1f98f0);
    }
    _0x331382.fillStyle = _0x364d86;
    _0x331382.fillRect(_0x3ff2cb / -2, _0x2b0d04 / -2, _0x52a0eb.space.width + _0x3ff2cb, _0x52a0eb.space.height + _0x2b0d04);
  }
  function _0x5dbd73(_0x2f6f04) {
    var _0x1fcf76 = _0x2f6f04.game;
    var _0x419858 = _0x2f6f04.ctx;
    var _0x2066ec = _0x1fcf76.config;
    _0x2066ec.baseHeight;
    _0x2066ec.arenaColor;
    _0x2066ec.borderColor;
    _0x2066ec.backgroundTopColor;
    _0x2066ec.backgroundBottomColor;
    var _0x9918ca = _0x1fcf76.scheme;
    _0x9918ca.zoneCenter;
    _0x9918ca.zonePath;
    _0x9918ca.zoneLinePath;
    var _0xa1fe1b = _0x9918ca.currentZoneCenter;
    var _0x18ad06 = _0x9918ca.currentZoneRadius;
    _0x9918ca.nextZoneCenter;
    _0x9918ca.nextPath;
    if (_0x18ad06 < _0x1fcf76.border.radius) {
      _0x419858.fillStyle = "#ff000099";
      _0x419858.lineWidth = 2;
      _0x419858.beginPath();
      _0x419858.arc(_0x1fcf76.border.center.x, _0x1fcf76.border.center.y, _0x1fcf76.border.radius, 0, Math.PI * 2, true);
      _0x419858.arc(_0xa1fe1b.x, _0xa1fe1b.y, _0x18ad06, 0, Math.PI * 2, false);
      _0x419858.closePath();
      _0x419858.fill();
    }
  }
  function _0x452e6b(_0x5c2e21, _0x188bdc) {
    var _0x345b06 = _0x5c2e21.game;
    var _0x1fce30 = _0x5c2e21.ctx;
    var _0x162b62 = _0x345b06.config;
    _0x162b62.baseHeight;
    _0x162b62.arenaColor;
    _0x162b62.borderColor;
    _0x162b62.backgroundTopColor;
    _0x162b62.backgroundBottomColor;
    var _0xe87c25 = _0x345b06.scheme;
    var _0x25ed77 = _0xe87c25.currentZoneCenter;
    var _0x1ec49a = _0xe87c25.currentZoneRadius;
    var _0x4dbfb6 = _0xe87c25.nextZoneCenter;
    var _0x5cfec5 = _0xe87c25.nextZoneRadius;
    if (_0x1ec49a < _0x345b06.border.radius) {
      _0x1fce30.strokeStyle = "#cc2222";
      _0x1fce30.lineWidth = 2;
      _0x1fce30.beginPath();
      _0x1fce30.arc(_0x25ed77.x, _0x25ed77.y, _0x1ec49a, 0, Math.PI * 2, true);
      _0x1fce30.closePath();
      _0x1fce30.stroke();
    }
    if (_0x188bdc && _0x4dbfb6 && _0x5cfec5) {
      var _0xb00402 = _0x4dbfb6;
      var _0x1a353c = ~~(Math.PI * 2 * _0x5cfec5 / 100);
      var _0x10a868 = _0x48902a(_0xb00402, _0x1a353c, _0x5cfec5);
      _0x1fce30.fillStyle = "#00aa00";
      _0x10a868.forEach(function (_0x789085) {
        _0x1fce30.beginPath();
        _0x1fce30.arc(_0x789085.x, _0x789085.y, 20, 0, Math.PI * 2);
        _0x1fce30.closePath();
        _0x1fce30.fill();
      });
    }
  }
  function _0x5e48b2(_0x30c20c) {
    var _0x9f4417 = _0x30c20c.game;
    var _0x2ccb71 = _0x30c20c.ctx;
    var _0x59da13 = _0x30c20c.devicePixelRatio;
    var _0x101d98 = _0x30c20c.viewWidth;
    var _0x496bfe = _0x30c20c.viewHeight;
    var _0x18fc93 = _0x30c20c.origin;
    var _0x18dc20 = _0x30c20c.scale;
    var _0x438756 = _0x9f4417.config.baseHeight;
    _0x2ccb71.resetTransform();
    _0x2ccb71.clearRect(0, 0, _0x101d98, _0x496bfe);
    var _0x58e555;
    var _0x12bf09;
    var _0x4cb8d9;
    var _0x465631;
    var _0x554e45;
    var _0x35c5c9;
    var _0x165760;
    var _0x36c358;
    var _0x5b1907;
    var _0x274a4b;
    var _0x282686;
    var _0x14cd42;
    var _0x5b9ae9;
    var _0x29a605;
    var _0x79942e;
    var _0x17c324;
    var _0x59302d;
    var _0x575fe1;
    var _0x101c0c;
    var _0x36812f;
    var _0x1de131;
    var _0x77795f;
    var _0x4a29f3;
    var _0x29acbf;
    var _0x694e93;
    var _0x5924ea;
    var _0x3218fc;
    var _0x58667d;
    var _0x44b1af;
    var _0x423d1c;
    var _0x4fb210;
    var _0xfbe3cf;
    var _0xc16cf0;
    var _0x21658d;
    var _0x457b31;
    var _0x1ccea7;
    var _0x4dda7a;
    var _0x1b9304;
    var _0x4ef927;
    var _0x4428d7;
    var _0x7f7c0;
    var _0x1cf6af;
    var _0x4fcf55;
    var _0x6fc9a9;
    var _0x444c36;
    var _0x4b4a49 = _0x18fc93.x * _0x18dc20 - _0x101d98 / 2;
    var _0x23dce4 = _0x18fc93.y * _0x18dc20 - _0x496bfe / 2;
    _0x2ccb71.translate(-_0x4b4a49, -_0x23dce4);
    _0x2ccb71.scale(_0x18dc20, _0x18dc20);
    _0x2ccb71.translate(0, -_0x438756);
    _0x165760 = (_0x35c5c9 = _0x30c20c).game;
    _0x36c358 = _0x35c5c9.ctx;
    _0x5b1907 = _0x35c5c9.boundsInView;
    _0x274a4b = _0x165760.config.trackWidth;
    _0x282686 = 0;
    _0x165760.bases.forEach(function (_0x1e5fa8) {
      if (_0x5b1907(_0x1e5fa8.polygon, _0x274a4b)) {
        _0x282686++;
        var _0x4a1231 = _0x1e5fa8.team.skin;
        _0x2951ed(_0x36c358, _0x1e5fa8.polygon.path, _0x4a1231.pattern && _0x4a1231.pattern.pattern || _0x4a1231.colors.main);
      }
    });
    _0x165760.drawedBases = _0x282686;
    _0x12bf09 = (_0x58e555 = _0x30c20c).game;
    _0x4cb8d9 = _0x58e555.ctx;
    _0x465631 = _0x58e555.boundsInView;
    _0x554e45 = _0x12bf09.config.trackWidth;
    _0x4cb8d9.save();
    _0x4cb8d9.lineCap = "round";
    _0x4cb8d9.globalCompositeOperation = "destination-out";
    _0x12bf09.units.forEach(function (_0x3680f2) {
      if (_0x3680f2.track.polyline.start && _0x465631(_0x3680f2.track.polyline, _0x554e45)) {
        var _0xd5c0cc = _0x3680f2.team.skin;
        _0x5e6a44(_0x4cb8d9, _0xd5c0cc.colors.main, _0x3680f2.track, _0x3680f2.position, _0x554e45);
        _0x4cb8d9.save();
        _0x4cb8d9.globalCompositeOperation = "destination-over";
        _0x4cb8d9.clip(_0x3680f2.base.polygon.path);
        _0x5e6a44(_0x4cb8d9, _0xd5c0cc.pattern && _0xd5c0cc.pattern.pattern || _0xd5c0cc.colors.main, _0x3680f2.track, _0x3680f2.position, _0x554e45 + 2);
        _0x4cb8d9.restore();
      }
    });
    _0x4cb8d9.restore();
    _0x2ccb71.translate(0, _0x438756);
    _0x2ccb71.globalCompositeOperation = "destination-over";
    _0x5b9ae9 = (_0x14cd42 = _0x30c20c).game;
    _0x29a605 = _0x14cd42.ctx;
    _0x79942e = _0x14cd42.pointInView;
    _0x17c324 = _0x5b9ae9.config.trackWidth;
    _0x5b9ae9.units.forEach(function (_0x281c99) {
      if (_0x79942e(_0x281c99.position, _0x17c324 * 4)) {
        var _0x5826fd = _0x281c99.team.skin;
        _0x3eb461(_0x5b9ae9.config, _0x29a605, _0x281c99, _0x5826fd.container, false);
      }
    });
    _0x575fe1 = (_0x59302d = _0x30c20c).game;
    _0x101c0c = _0x59302d.ctx;
    _0x36812f = _0x59302d.boundsInView;
    _0x1de131 = _0x575fe1.config.trackWidth;
    _0x101c0c.save();
    _0x101c0c.lineCap = "round";
    _0x101c0c.globalAlpha = 0.6;
    _0x575fe1.units.forEach(function (_0x3bb719) {
      if (_0x3bb719.in !== _0x3bb719.base && _0x36812f(_0x3bb719.track.polyline, _0x1de131)) {
        var _0x3c645a = _0x3bb719.team.skin;
        _0x5e6a44(_0x101c0c, _0x3c645a.colors.main, _0x3bb719.track, _0x3bb719.position, _0x1de131);
      }
    });
    _0x101c0c.restore();
    _0x4a29f3 = (_0x77795f = _0x30c20c).game;
    _0x29acbf = _0x77795f.ctx;
    _0x694e93 = _0x77795f.boundsInView;
    _0x5924ea = _0x4a29f3.config.trackWidth;
    _0x4a29f3.bases.forEach(function (_0x440dc9) {
      if (_0x694e93(_0x440dc9.polygon, _0x5924ea)) {
        var _0x577727 = _0x440dc9.team.skin;
        _0x2951ed(_0x29acbf, _0x440dc9.polygon.path, `${_0x577727.colors.back}`);
      }
    });
    _0x5dbd73(_0x30c20c);
    _0x37a4b9(_0x30c20c);
    _0x2ccb71.globalCompositeOperation = "source-over";
    _0x452e6b(_0x30c20c);
    _0x58667d = (_0x3218fc = _0x30c20c).game;
    _0x44b1af = _0x3218fc.ctx;
    _0x423d1c = _0x3218fc.pointInView;
    _0x4fb210 = _0x58667d.config.trackWidth;
    _0x58667d.units.forEach(function (_0x36d8cc) {
      if (_0x423d1c(_0x36d8cc.position, _0x4fb210 * 4)) {
        var _0x3bb4b7 = _0x36d8cc.team.skin;
        _0x3eb461(_0x58667d.config, _0x44b1af, _0x36d8cc, _0x3bb4b7.container, true);
      }
    });
    (_0xfbe3cf = _0x30c20c).game.particles.forEach(function (_0x463669) {
      return _0x463669.time > 0 && _0x463669.draw(_0xfbe3cf);
    });
    (function (_0x4e5a21) {
      var _0x39b36b = _0x4e5a21.game;
      var _0x288717 = _0x4e5a21.ctx;
      var _0x18c789 = _0x4e5a21.scale;
      _0x4e5a21.scaler;
      _0x39b36b.config.font;
      _0x288717.scale(1 / _0x18c789, 1 / _0x18c789);
      _0x39b36b.labels.forEach(function (_0x3bef00) {
        return !_0x3bef00.ui && _0x3bef00.draw(_0x4e5a21);
      });
      _0x288717.scale(_0x18c789, _0x18c789);
    })(_0x30c20c);
    _0x21658d = (_0xc16cf0 = _0x30c20c).game;
    _0x457b31 = _0xc16cf0.pointInView;
    _0x1ccea7 = _0x21658d.config.trackWidth;
    _0x21658d.units.forEach(function (_0x400466) {
      if (_0x457b31(_0x400466.position, _0x1ccea7 * 20)) {
        (function (_0x87e536, _0x1e2fdd) {
          var _0x1bd4cc = _0x87e536.ctx;
          var _0x1bda34 = _0x87e536.devicePixelRatio;
          var _0x222a2b = _0x87e536.scale;
          var _0x1f1d06 = _0x87e536.scaler;
          var _0x38376e = _0x87e536.font;
          var _0x308b8b = _0x1f1d06 * 24;
          var _0x34da11 = _0x1f1d06 * 4;
          _0x1bd4cc.save();
          _0x1bd4cc.translate(_0x1e2fdd.position.x, _0x1e2fdd.position.y);
          _0x1bd4cc.scale(1 / (_0x222a2b * _0x1bda34), 1 / (_0x222a2b * _0x1bda34));
          _0x1bd4cc.font = `${_0x308b8b}px ${_0x38376e}`;
          _0x1bd4cc.textAlign = "center";
          _0x1bd4cc.textBaseline = "bottom";
          var _0x58c911 = _0x1e2fdd.name;
          var _0xf1472b = _0x222a2b * -12 * _0x1bda34;
          var _0x53c866 = "#363331cc";
          _0x1bd4cc.lineWidth = _0x34da11;
          _0x1bd4cc.strokeStyle = _0x53c866;
          _0x1bd4cc.shadowColor = _0x53c866;
          _0x1bd4cc.shadowBlur = _0x34da11 / 2;
          _0x1bd4cc.strokeText(_0x58c911, 0, _0xf1472b);
          var _0x5b87ae = "#dddddd";
          var _0x39d82c = _0x1e2fdd.team.skin.assets.find(function (_0xf61152) {
            return _0xf61152.pool.name === "shields";
          });
          if (_0x39d82c) {
            _0x5b87ae = _0x39d82c.content.color;
          }
          _0x1bd4cc.fillStyle = _0x5b87ae;
          _0x1bd4cc.shadowColor = _0x5b87ae;
          _0x1bd4cc.shadowBlur = _0x34da11 / 3;
          _0x1bd4cc.fillText(_0x58c911, 0, _0xf1472b);
          _0x1bd4cc.restore();
        })(_0xc16cf0, _0x400466);
      }
    });
    _0x1b9304 = (_0x4dda7a = _0x30c20c).game;
    _0x4ef927 = _0x4dda7a.ctx;
    _0x4dda7a.padding;
    _0x4dda7a.backHeight;
    _0x4dda7a.barHeight;
    _0x4dda7a.halfBarHeight;
    _0x4dda7a.barWidth;
    _0x4dda7a.strokeWidth;
    _0x4dda7a.viewScreenWidth;
    _0x4dda7a.viewScreenHeight;
    _0x4dda7a.uiFont;
    _0x4428d7 = _0x4dda7a.devicePixelRatio;
    _0x7f7c0 = _0x4dda7a.scale;
    _0x1cf6af = _0x4dda7a.scaler;
    _0x4fcf55 = _0x4dda7a.fontSize;
    _0x6fc9a9 = _0x4dda7a.font;
    _0x1b9304.units.forEach(function (_0x1dc87a) {
      var _0x2c3baf = _0x1dc87a.scheme;
      var _0x2a604f = _0x2c3baf.HP;
      var _0x579877 = _0x2c3baf.maxHP;
      _0x4ef927.save();
      _0x4ef927.translate(_0x1dc87a.position.x, _0x1dc87a.position.y);
      _0x4ef927.scale(1 / (_0x7f7c0 * _0x4428d7), 1 / (_0x7f7c0 * _0x4428d7));
      var _0x16e382 = _0x7f7c0 * -12 * _0x4428d7 + _0x1cf6af * 6;
      var _0xf5a8b = _0x4fcf55 * 4;
      var _0x1a5df5 = _0x1cf6af * 6;
      var _0x46eb77 = _0x1cf6af * 2;
      _0x4ef927.fillStyle = "#363331";
      _0x4ef927.fillRect(-_0xf5a8b / 2 - _0x46eb77, _0x16e382 - _0x46eb77, _0xf5a8b + _0x46eb77 * 2, _0x1a5df5 + _0x46eb77 * 2);
      var _0x357960 = _0x2a604f / _0x579877 * _0xf5a8b;
      _0x4ef927.fillStyle = "#dddddd";
      _0x4ef927.fillRect(-_0xf5a8b / 2, _0x16e382, _0x357960, _0x1a5df5);
      _0x4ef927.font = `${_0x1cf6af * 12}px ${_0x6fc9a9}`;
      _0x4ef927.textAlign = "center";
      _0x4ef927.textBaseline = "top";
      var _0x19326d = _0x16e382 + _0x1a5df5 + _0x46eb77 * 2 + _0x1cf6af;
      var _0x5f2f6e = _0x1dc87a.scheme.buff / 1000;
      var _0xab9637 = _0x5f2f6e ? ` + ${_0x5f2f6e.toFixed(1)}s` : "";
      _0x4ef927.fillStyle = "#dddddd";
      _0x4ef927.strokeStyle = "#363331";
      _0x4ef927.lineWidth = _0x1cf6af * 3;
      _0x4ef927.strokeText(`${~~_0x2a604f}/${_0x579877}${_0xab9637}`, 0, _0x19326d);
      _0x4ef927.fillText(`${~~_0x2a604f}/${_0x579877}${_0xab9637}`, 0, _0x19326d);
      _0x4ef927.restore();
    });
    _0x2ccb71.resetTransform();
    _0x2ccb71.scale(1 / _0x59da13, 1 / _0x59da13);
    (_0x444c36 = _0x30c20c).game.uiParticles.forEach(function (_0x532e57) {
      return _0x532e57.time > 0 && _0x532e57.draw(_0x444c36);
    });
    (function (_0x9774a2) {
      var _0x50c905 = _0x9774a2.game;
      _0x9774a2.ctx;
      _0x9774a2.scale;
      _0x9774a2.scaler;
      _0x50c905.config.font;
      _0x50c905.labels.forEach(function (_0x2f8a4e) {
        return _0x2f8a4e.ui && _0x2f8a4e.draw(_0x9774a2);
      });
    })(_0x30c20c);
    if (_0x9f4417.player) {
      (function (_0x157794) {
        var _0xc2e149 = _0x157794.game;
        var _0x3240aa = _0x157794.ctx;
        var _0x334e51 = _0x157794.padding;
        _0x157794.backHeight;
        var _0x22091a = _0x157794.barHeight;
        var _0x22ad78 = _0x157794.halfBarHeight;
        _0x157794.barWidth;
        _0x157794.strokeWidth;
        var _0x771992 = _0x157794.viewScreenWidth;
        var _0x23998e = _0x157794.uiFont;
        _0x3240aa.font = _0x23998e;
        _0x3240aa.textAlign = "left";
        _0x3240aa.textBaseline = "middle";
        var _0x1bb7b0 = `Players Alive: ${_0xc2e149.units.length}`;
        var _0x100dc5 = ~~_0x3240aa.measureText(_0x1bb7b0).width;
        var _0x3fc576 = [_0x22ad78, 0, 0, _0x22ad78];
        var _0x3b8f5c = ~~(_0x22091a * 1.1);
        _0x3240aa.fillStyle = "#00000066";
        _0x211923(_0x3240aa, _0x771992 - _0x100dc5 - _0x334e51 * 2, _0x334e51, _0x100dc5 + _0x334e51 * 2, _0x3b8f5c, _0x3fc576);
        _0x3240aa.fillStyle = "#ffffffcc";
        _0x3240aa.fillText(_0x1bb7b0, _0x771992 - _0x100dc5 - _0x334e51, _0x334e51 + _0x3b8f5c / 2 + 1);
      })(_0x30c20c);
      (function (_0x10ef61) {
        var _0x525fe8 = _0x10ef61.game;
        var _0x3c4374 = _0x10ef61.ctx;
        var _0x51dc3b = _0x10ef61.padding;
        _0x10ef61.backHeight;
        var _0x4bcf8e = _0x10ef61.barHeight;
        var _0x168f19 = _0x10ef61.halfBarHeight;
        _0x10ef61.barWidth;
        _0x10ef61.strokeWidth;
        var _0x2b1e87 = _0x10ef61.viewScreenWidth;
        var _0xe7ea02 = _0x10ef61.viewScreenHeight;
        var _0x1d4195 = _0x10ef61.uiFont;
        var _0x5318ed = _0x525fe8.scheme;
        var _0x409e62 = _0x5318ed.active;
        var _0x449f2c = _0x5318ed.current;
        var _0xaaac0 = _0x5318ed.timer;
        var _0x50f3b5 = _0x5318ed.stages;
        if (_0x50f3b5[_0x449f2c]) {
          _0x3c4374.font = _0x1d4195;
          _0x3c4374.textAlign = "center";
          _0x3c4374.textBaseline = "middle";
          var _0x1d06a9 = _0x409e62 ? _0x50f3b5[_0x449f2c].activeText : _0x50f3b5[_0x449f2c].preparingText(Math.round((_0x50f3b5[_0x449f2c].preparing - _0xaaac0) / 1000));
          var _0x25d159 = ~~_0x3c4374.measureText(_0x1d06a9).width;
          var _0x315825 = [_0x168f19, _0x168f19, _0x168f19, _0x168f19];
          var _0x5e30ab = ~~(_0x4bcf8e * 1.1);
          _0x3c4374.fillStyle = "#00000066";
          _0x211923(_0x3c4374, _0x2b1e87 / 2 - _0x25d159 / 2 - _0x51dc3b, _0xe7ea02 - _0x51dc3b - _0x5e30ab, _0x25d159 + _0x51dc3b * 2, _0x5e30ab, _0x315825);
          _0x3c4374.fillStyle = "#ffffffcc";
          _0x3c4374.fillText(_0x1d06a9, _0x2b1e87 / 2, _0xe7ea02 - _0x51dc3b - _0x5e30ab / 2 + 1);
        }
      })(_0x30c20c);
      if (!_0x9f4417.player.death) {
        (function (_0x2ac5e5) {
          var _0x494513 = _0x2ac5e5.game;
          var _0x1f1f20 = _0x2ac5e5.ctx;
          var _0x274cc2 = _0x2ac5e5.scaler;
          var _0xad9c66 = _0x2ac5e5.calcMult;
          var _0x52328f = _0x2ac5e5.viewScreenWidth;
          var _0x262e9a = _0x2ac5e5.viewScreenHeight;
          var _0x222528 = _0x2ac5e5.padding;
          _0x2ac5e5.strokeWidth;
          var _0x273fda = _0x494513.player;
          var _0x4f128b = _0x52328f / _0xad9c66(8, 3);
          var _0x940dd = _0x494513.space.width / _0x4f128b * _0x274cc2 * 3;
          _0x1f1f20.save();
          _0x1f1f20.translate(_0x52328f - _0x222528 * 2 - _0x4f128b, _0x262e9a - _0x222528 * 2 - _0x4f128b);
          _0x1f1f20.scale(_0x4f128b / _0x494513.space.width, _0x4f128b / _0x494513.space.height);
          _0x2951ed(_0x1f1f20, _0x494513.border.polygon.path, "#c2d6cdaa");
          _0x273fda.team.bases.forEach(function (_0x117823) {
            var _0x3f9bcd = _0x117823.team.skin;
            _0x2951ed(_0x1f1f20, _0x117823.polygon.path, _0x3f9bcd.colors.main);
            _0x1dcbf7(_0x1f1f20, _0x117823.polygon.path, _0x3f9bcd.colors.back, _0x940dd / 2);
          });
          _0x5e6a44(_0x1f1f20, _0x273fda.team.skin.colors.back, _0x273fda.track, _0x273fda.position, _0x940dd / 2);
          if (!_0x494513.scheme.checkSafe(_0x273fda)) {
            _0x2951ed(_0x1f1f20, _0x494513.border.polygon.path, _0x494513.radarTexes[~~(_0x494513.radarTexes.length * Math.random())]);
          }
          _0x5dbd73(_0x2ac5e5);
          _0x452e6b(_0x2ac5e5, true);
          _0x1dcbf7(_0x1f1f20, _0x494513.border.polygon.path, "#444", _0x940dd);
          _0x273fda.team.units.forEach(function (_0x1b6eb9) {
            var _0x144788 = _0x1b6eb9 === _0x273fda ? 2 / 3 : 0.5;
            var _0x2389cf = _0x1b6eb9.team.skin;
            _0x1f1f20.beginPath();
            _0x1f1f20.arc(_0x1b6eb9.position.x, _0x1b6eb9.position.y, _0x940dd * _0x144788 * 2, 0, Math.PI * 2);
            _0x1f1f20.fillStyle = _0x2389cf.colors.main;
            _0x1f1f20.fill();
            _0x1f1f20.strokeStyle = _0x2389cf.colors.nick;
            _0x1f1f20.lineWidth = _0x940dd / 2;
            _0x1f1f20.stroke();
          });
          _0x1f1f20.restore();
        })(_0x30c20c);
      }
      (function (_0x260fae) {
        var _0x5c210d = _0x260fae.game;
        var _0x5dab8e = _0x260fae.ctx;
        _0x260fae.scaler;
        var _0x47d737 = _0x260fae.padding;
        var _0x25f74d = _0x260fae.backHeight;
        var _0x577609 = _0x260fae.barHeight;
        _0x260fae.halfBarHeight;
        var _0x3ae644 = _0x260fae.fontSize;
        var _0x34b212 = _0x260fae.uiFont;
        _0x260fae.viewWidth;
        _0x260fae.viewHeight;
        var _0x378c33 = _0x260fae.viewScreenWidth;
        _0x260fae.viewScreenHeight;
        if (_0x5c210d.notifications.length) {
          var _0x7d9f7a = _0x5c210d.notifications[0];
          if (_0x7d9f7a.ready) {
            _0x5dab8e.save();
            _0x5dab8e.font = _0x34b212;
            var _0x40c18c = _0x3ae644 * 2 + _0x47d737;
            var _0xb4b4bb = _0x7d9f7a.position() * (_0x40c18c + _0x47d737) - _0x40c18c;
            var _0x513e4f = _0x3ae644 * 2;
            var _0x1e5d76 = Math.max(_0x5dab8e.measureText(_0x7d9f7a.title).width, _0x5dab8e.measureText(_0x7d9f7a.description).width) + _0x47d737 * 5 + _0x513e4f;
            var _0x36df61 = _0x47d737 / 2;
            _0x5dab8e.fillStyle = "#00000088";
            _0x211923(_0x5dab8e, (_0x378c33 - _0x1e5d76) / 2, _0xb4b4bb, _0x1e5d76, _0x40c18c, [(_0x577609 + _0x25f74d) / 2, (_0x577609 + _0x25f74d) / 2, (_0x577609 + _0x25f74d) / 2, (_0x577609 + _0x25f74d) / 2]);
            _0x5dab8e.fillStyle = "#ffffff";
            _0x5dab8e.shadowColor = "#ffffff";
            _0x5dab8e.shadowBlur = 1;
            _0x5dab8e.textAlign = "center";
            _0x5dab8e.textBaseline = "top";
            _0x5dab8e.fillText(_0x7d9f7a.title, (_0x378c33 - _0x1e5d76) / 2 + _0x1e5d76 / 2 + _0x513e4f / 2, _0xb4b4bb + _0x36df61);
            _0x5dab8e.fillStyle = "#ffffff88";
            _0x5dab8e.shadowColor = "#ffffff88";
            _0x5dab8e.shadowBlur = 1;
            _0x5dab8e.font = _0x34b212;
            _0x5dab8e.fillText(_0x7d9f7a.description, (_0x378c33 - _0x1e5d76) / 2 + _0x1e5d76 / 2 + _0x513e4f / 2, _0xb4b4bb + _0x36df61 + _0x3ae644);
            _0x5dab8e.shadowColor = "#ffffff";
            _0x5dab8e.shadowBlur = 10;
            if (_0x7d9f7a.image) {
              _0x5dab8e.drawImage(_0x7d9f7a.image, (_0x378c33 - _0x1e5d76) / 2 + _0x36df61, _0xb4b4bb + _0x36df61, _0x513e4f, _0x513e4f);
            }
            _0x5dab8e.restore();
          }
        }
      })(_0x30c20c);
    }
  }
  function _0x42f412(_0x46d0c9) {
    return _0x14ec92.apply(null, _0x46d0c9[2].map(function (_0xbd7cee) {
      return _0x46d0c9[1].reduce(function (_0x434f6c, _0x55e65a, _0x1e8ea8) {
        if (_0x1e8ea8 <= _0xbd7cee) {
          return _0x434f6c + _0x55e65a;
        } else {
          return _0x434f6c;
        }
      }, _0x46d0c9[0]);
    }));
  }
  function _0x5f43a6(_0x590f23) {
    return _0x14ec92.apply(null, _0x590f23.map(function (_0x54f404) {
      return _0x444fd9.reduce(function (_0x2456b4, _0x1a3f2e, _0x59cbd9) {
        if (_0x59cbd9 <= _0x54f404) {
          return _0x2456b4 + _0x1a3f2e;
        } else {
          return _0x2456b4;
        }
      }, 47);
    }));
  }
  var _0x364d86;
  var _0x24b416;
  var _0x1a0fc5;
  var _0x365f35;
  var _0xd3d3a6;
  var _0x583470;
  var _0x47be22;
  var _0x5e8693;
  var _0x309d32 = _0x3ae245(function (_0x2e2e46, _0x4167d8) {
    var _0x3eda51;
    _0x3eda51 = function () {
      function _0x2d22fa() {
        for (var _0x3a7cb1 = 0, _0x1a0b04 = {}; _0x3a7cb1 < arguments.length; _0x3a7cb1++) {
          var _0x59f752 = arguments[_0x3a7cb1];
          for (var _0x270d8e in _0x59f752) {
            _0x1a0b04[_0x270d8e] = _0x59f752[_0x270d8e];
          }
        }
        return _0x1a0b04;
      }
      function _0x1825ae(_0x441029) {
        return _0x441029.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      return function _0x29bcd9(_0xed0595) {
        function _0x171569() {}
        function _0x5006e2(_0x524ae7, _0x2e8359, _0x37b555) {
          if (typeof document != "undefined") {
            if (typeof (_0x37b555 = _0x2d22fa({
              path: "/"
            }, _0x171569.defaults, _0x37b555)).expires == "number") {
              _0x37b555.expires = new Date(+new Date() + _0x37b555.expires * 86400000);
            }
            _0x37b555.expires = _0x37b555.expires ? _0x37b555.expires.toUTCString() : "";
            try {
              var _0x2e4259 = JSON.stringify(_0x2e8359);
              if (/^[\{\[]/.test(_0x2e4259)) {
                _0x2e8359 = _0x2e4259;
              }
            } catch (_0x9d34c6) {}
            _0x2e8359 = _0xed0595.write ? _0xed0595.write(_0x2e8359, _0x524ae7) : encodeURIComponent(String(_0x2e8359)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
            _0x524ae7 = encodeURIComponent(String(_0x524ae7)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
            var _0x28b504 = "";
            for (var _0x2113c8 in _0x37b555) {
              if (_0x37b555[_0x2113c8]) {
                _0x28b504 += "; " + _0x2113c8;
                if (_0x37b555[_0x2113c8] !== true) {
                  _0x28b504 += "=" + _0x37b555[_0x2113c8].split(";")[0];
                }
              }
            }
            return document.cookie = _0x524ae7 + "=" + _0x2e8359 + _0x28b504;
          }
        }
        function _0x18388d(_0x575514, _0x26c03d) {
          if (typeof document != "undefined") {
            var _0x4aac50 = {};
            for (var _0x4e8f21 = document.cookie ? document.cookie.split("; ") : [], _0x21ca0a = 0; _0x21ca0a < _0x4e8f21.length; _0x21ca0a++) {
              var _0x8589e8 = _0x4e8f21[_0x21ca0a].split("=");
              var _0x822d05 = _0x8589e8.slice(1).join("=");
              if (!_0x26c03d && _0x822d05.charAt(0) === "\"") {
                _0x822d05 = _0x822d05.slice(1, -1);
              }
              try {
                var _0x379178 = _0x1825ae(_0x8589e8[0]);
                _0x822d05 = (_0xed0595.read || _0xed0595)(_0x822d05, _0x379178) || _0x1825ae(_0x822d05);
                if (_0x26c03d) {
                  try {
                    _0x822d05 = JSON.parse(_0x822d05);
                  } catch (_0x498e0b) {}
                }
                _0x4aac50[_0x379178] = _0x822d05;
                if (_0x575514 === _0x379178) {
                  break;
                }
              } catch (_0x12e5a1) {}
            }
            if (_0x575514) {
              return _0x4aac50[_0x575514];
            } else {
              return _0x4aac50;
            }
          }
        }
        _0x171569.set = _0x5006e2;
        _0x171569.get = function (_0x11850c) {
          return _0x18388d(_0x11850c, false);
        };
        _0x171569.getJSON = function (_0x5452e0) {
          return _0x18388d(_0x5452e0, true);
        };
        _0x171569.remove = function (_0x302e49, _0x45d03f) {
          _0x5006e2(_0x302e49, "", _0x2d22fa(_0x45d03f, {
            expires: -1
          }));
        };
        _0x171569.defaults = {};
        _0x171569.withConverter = _0x29bcd9;
        return _0x171569;
      }(function () {});
    };
    _0x2e2e46.exports = _0x3eda51();
  });
  var _0xe1e3c6 = Math.pow(2, -26);
  var _0x210e5e = Math.PI / 4;
  var _0x2f3350 = Math.PI / 2;
  var _0x591161 = Math.PI;
  var _0x1e8266 = Math.PI * 2;
  var _0x5c9f33 = 0;
  var _0x1ec915 = Array.from({
    length: 30000
  });
  var _0x6797a9 = 0;
  var _0x4acc6e = Array.from({
    length: 10000
  });
  var _0x544f42 = 0;
  var _0x1c98db = function () {
    function _0x180e6b(_0x355c2, _0x195223) {
      _0x3138e1(this, _0x180e6b);
      this.id = _0x450885();
      this.cell = null;
      this.segments = [];
      this.set(_0x355c2, _0x195223);
    }
    _0x433dc2(_0x180e6b, null, [{
      key: "alloc",
      value: function (_0x5268f1, _0x1210a8) {
        if (_0x6797a9) {
          var _0x4f476e = _0x1ec915[--_0x6797a9];
          _0x1ec915[_0x6797a9] = null;
          return _0x4f476e.set(_0x5268f1, _0x1210a8);
        }
        return new _0x180e6b(_0x5268f1, _0x1210a8);
      }
    }, {
      key: "clone",
      value: function (_0x21ccac) {
        return _0x180e6b.alloc(_0x21ccac.x, _0x21ccac.y);
      }
    }, {
      key: "length",
      value: function () {
        return _0x6797a9 + _0x544f42;
      }
    }, {
      key: "flush",
      value: function () {
        for (var _0x3a4f2e = _0x544f42; _0x3a4f2e > 0; _0x3a4f2e--) {
          var _0x3f7ab2 = _0x4acc6e[_0x3a4f2e - 1];
          _0x4acc6e[_0x3a4f2e - 1] = null;
          if (_0x6797a9 < 30000) {
            _0x3f7ab2.id = _0x450885();
            _0x1ec915[_0x6797a9++] = _0x3f7ab2;
          }
        }
        _0x544f42 = 0;
      }
    }, {
      key: "release",
      value: function (_0x4aacc7) {
        if (_0x6797a9 < 30000) {
          _0x4aacc7.id = _0x450885();
          _0x1ec915[_0x6797a9++] = _0x4aacc7;
        }
      }
    }]);
    _0x433dc2(_0x180e6b, [{
      key: "toJSON",
      value: function () {
        return {
          x: this.x,
          y: this.y,
          id: this.id
        };
      }
    }, {
      key: "set",
      value: function (_0x4a5f24, _0x2d4177) {
        this.x = _0x4a5f24 || 0;
        this.y = _0x2d4177 || (_0x2d4177 === 0 ? 0 : this.x);
        return this;
      }
    }, {
      key: "test",
      value: function () {
        return _0x180e6b.space.cell(this).findPoint(this);
      }
    }, {
      key: "commit",
      value: function (_0x37326e) {
        if (this.segments.indexOf(_0x37326e) === -1) {
          this.segments.push(_0x37326e);
        }
        if (!this.cell) {
          _0x180e6b.space.cell(this).commit(this);
        }
      }
    }, {
      key: "remove",
      value: function (_0x5be7dd) {
        var _0x1fda38 = this.segments.indexOf(_0x5be7dd);
        this.segments.splice(_0x1fda38, 1);
        if (this.cell && !this.segments.length) {
          this.cell.remove(this);
        }
      }
    }, {
      key: "release",
      value: function () {
        _0x180e6b.release(this);
      }
    }, {
      key: "add",
      value: function (_0x457632) {
        this.x += _0x457632.x;
        this.y += _0x457632.y;
        return this;
      }
    }, {
      key: "sub",
      value: function (_0x5b9056) {
        this.x -= _0x5b9056.x;
        this.y -= _0x5b9056.y;
        return this;
      }
    }, {
      key: "mul",
      value: function (_0x4f8a64) {
        this.x *= _0x4f8a64.x;
        this.y *= _0x4f8a64.y;
        return this;
      }
    }, {
      key: "mulScalar",
      value: function (_0x5cad00) {
        this.x *= _0x5cad00;
        this.y *= _0x5cad00;
        return this;
      }
    }, {
      key: "magnitude",
      value: function () {
        var _0x1a1b38 = this.x;
        var _0x291c8e = this.y;
        return Math.sqrt(_0x1a1b38 * _0x1a1b38 + _0x291c8e * _0x291c8e);
      }
    }, {
      key: "normalize",
      value: function () {
        var _0x378d05 = this.magnitude();
        if (_0x378d05) {
          this.mulScalar(1 / _0x378d05);
        }
        return this;
      }
    }, {
      key: "copy",
      value: function (_0x35e85a) {
        this.x = _0x35e85a.x;
        this.y = _0x35e85a.y;
        return this;
      }
    }, {
      key: "distance",
      value: function (_0x2b09ad) {
        return Math.sqrt(this.distance2(_0x2b09ad));
      }
    }, {
      key: "distance2",
      value: function (_0x12536c) {
        var _0x554faa = this.x - _0x12536c.x;
        var _0x4cdc40 = this.y - _0x12536c.y;
        return _0x554faa * _0x554faa + _0x4cdc40 * _0x4cdc40;
      }
    }, {
      key: "cross",
      value: function (_0x47b930) {
        return this.x * _0x47b930.y - this.y * _0x47b930.x;
      }
    }, {
      key: "dot",
      value: function (_0x143016) {
        return this.x * _0x143016.x + this.y * _0x143016.y;
      }
    }, {
      key: "rotate",
      value: function (_0x48056e) {
        var _0x2b883a = this.x;
        var _0x1f95a8 = this.y;
        var _0xf26410 = Math.cos(_0x48056e);
        var _0x356403 = Math.sin(_0x48056e);
        this.x = _0x2b883a * _0xf26410 - _0x1f95a8 * _0x356403;
        this.y = _0x2b883a * _0x356403 + _0x1f95a8 * _0xf26410;
        return this;
      }
    }, {
      key: "angle",
      value: function (_0x32389d) {
        return Math.atan2(this.cross(_0x32389d), this.dot(_0x32389d));
      }
    }, {
      key: "invert",
      value: function () {
        return this.mulScalar(-1);
      }
    }, {
      key: "equal",
      value: function (_0x5a67df) {
        return _0x4ad774(this.x, _0x5a67df.x) && _0x4ad774(this.y, _0x5a67df.y);
      }
    }, {
      key: "clone",
      value: function () {
        return new _0x180e6b(this.x, this.y);
      }
    }]);
    return _0x180e6b;
  }();
  var _0x340bf7 = {};
  var _0x143a8e = function () {
    function _0xc84d14(_0x4f88f7, _0x53a375) {
      _0x3138e1(this, _0xc84d14);
      this.points = [];
      this.x = _0x4f88f7;
      this.y = _0x53a375;
    }
    _0x433dc2(_0xc84d14, [{
      key: "findPoint",
      value: function (_0x4c44d8) {
        return this.points.find(function (_0x4bce98) {
          return _0x4bce98.equal(_0x4c44d8);
        });
      }
    }, {
      key: "commit",
      value: function (_0x29a40e) {
        this.points.push(_0x29a40e);
        _0x29a40e.cell = this;
      }
    }, {
      key: "remove",
      value: function (_0x1b528a) {
        var _0x197093 = this.points;
        var _0x5ebbd6 = _0x197093.indexOf(_0x1b528a);
        if (_0x5ebbd6 !== -1) {
          _0x197093.splice(_0x5ebbd6, 1);
          _0x1b528a.cell = null;
        }
      }
    }]);
    return _0xc84d14;
  }();
  var _0x5d4ee5 = function () {
    function _0x4c45c7(_0x1cc2a4, _0x45011e, _0x4b0a19) {
      _0x3138e1(this, _0x4c45c7);
      this.width = _0x1cc2a4;
      this.height = _0x45011e;
      this.center = new _0x1c98db(_0x1cc2a4 / 2, _0x45011e / 2);
      this.size = _0x4b0a19;
      this.w = Math.ceil(_0x1cc2a4 / _0x4b0a19);
      this.h = Math.ceil(_0x45011e / _0x4b0a19);
      this.cells = [];
      for (var _0x305c05 = 0; _0x305c05 < this.h; _0x305c05++) {
        for (var _0x32c8f8 = 0; _0x32c8f8 < this.w; _0x32c8f8++) {
          this.cells.push(new _0x143a8e(_0x32c8f8, _0x305c05));
        }
      }
    }
    _0x433dc2(_0x4c45c7, null, [{
      key: "flush",
      value: function () {
        var _0x1c9f36 = 0;
        var _0x5bbbc3 = 0;
        for (var _0x8acd71 in _0x340bf7) {
          if (_0x340bf7.hasOwnProperty(_0x8acd71)) {
            _0x5bbbc3++;
            if (!_0x340bf7[_0x8acd71].segments.length) {
              _0x1c9f36++;
            }
          }
        }
        _0x340bf7 = {};
        if (_0x5bbbc3) {
          console.log(`candidates ${_0x1c9f36}/${_0x5bbbc3}`);
        }
      }
    }]);
    _0x433dc2(_0x4c45c7, [{
      key: "count",
      value: function () {
        var _0x41f24c = 0;
        this.cells.forEach(function (_0x49af14) {
          _0x41f24c += _0x49af14.points.length;
        });
        return _0x41f24c;
      }
    }, {
      key: "cell",
      value: function (_0x5eaeb3) {
        return this.getCell(Math.floor(_0x5eaeb3.x / this.size), Math.floor(_0x5eaeb3.y / this.size));
      }
    }, {
      key: "getCell",
      value: function (_0x5886db, _0x418ccc) {
        return this.cells[_0x5886db + _0x418ccc * this.w];
      }
    }, {
      key: "checkPoint",
      value: function (_0x42c67a) {
        return this.cell(_0x42c67a).points.find(function (_0x261948) {
          return _0x261948.equal(_0x42c67a);
        }) || _0x42c67a;
      }
    }, {
      key: "segmentsCount",
      value: function () {
        var _0x524646 = {};
        for (var _0x7c5165 = 0; _0x7c5165 < this.h; _0x7c5165++) {
          for (var _0x44a988 = 0; _0x44a988 < this.w; _0x44a988++) {
            this.getCell(_0x44a988, _0x7c5165).points.forEach(function (_0x25dbff) {
              _0x25dbff.segments.forEach(function (_0x3931e4) {
                return _0x524646[_0x3931e4.id] = _0x3931e4;
              });
            });
          }
        }
        return _0x524646;
      }
    }, {
      key: "intersections",
      value: function (_0x3087b0) {
        var _0x4474e4 = this.cell(_0x3087b0.start);
        var _0x53c3bc = this.cell(_0x3087b0.end);
        var _0x3439f5 = Math.max(Math.min(_0x4474e4.x, _0x53c3bc.x) - 1, 0);
        var _0x2fd59 = Math.min(Math.max(_0x4474e4.x, _0x53c3bc.x) + 1, this.w - 1);
        var _0x60564f = Math.max(Math.min(_0x4474e4.y, _0x53c3bc.y) - 1, 0);
        for (var _0x1b1014 = Math.min(Math.max(_0x4474e4.y, _0x53c3bc.y) + 1, this.h - 1), _0x250f3b = _0x450885(), _0x114f5d = [], _0x2474ee = _0x60564f; _0x2474ee <= _0x1b1014; _0x2474ee++) {
          for (var _0x5d2cca = _0x3439f5; _0x5d2cca <= _0x2fd59; _0x5d2cca++) {
            this.getCell(_0x5d2cca, _0x2474ee).points.forEach(function (_0x5a3b95) {
              _0x5a3b95.segments.forEach(function (_0x56eb2b) {
                if (_0x56eb2b.mark !== _0x250f3b) {
                  var _0x2e7aec = _0x56eb2b.intersect(_0x3087b0);
                  if (_0x2e7aec) {
                    _0x114f5d.push(_0x2e7aec);
                  }
                  _0x56eb2b.mark = _0x250f3b;
                }
              });
            });
          }
        }
        return _0x114f5d;
      }
    }]);
    return _0x4c45c7;
  }();
  var _0x7f4089 = function () {
    function _0x120f2f(_0x38a87b, _0x4f8734) {
      _0x3138e1(this, _0x120f2f);
      this.id = _0x450885();
      _0x38a87b.equal(_0x4f8734);
      this.mark = 0;
      this.shape = null;
      this.start = _0x38a87b;
      this.end = _0x4f8734;
      this.calc();
    }
    _0x433dc2(_0x120f2f, null, [{
      key: "nullableNew",
      value: function (_0x1d3646, _0x414407) {
        if (_0x1d3646.equal(_0x414407)) {
          return null;
        } else {
          return new _0x120f2f(_0x1d3646, _0x414407);
        }
      }
    }]);
    _0x433dc2(_0x120f2f, [{
      key: "calc",
      value: function () {
        var _0x24939f = this.start;
        var _0xe44b59 = this.end;
        var _0x44a984 = _0x24939f.y - _0xe44b59.y;
        var _0x33919d = _0xe44b59.x - _0x24939f.x;
        var _0x1b41a6 = Math.sqrt(_0x44a984 * _0x44a984 + _0x33919d * _0x33919d);
        _0x44a984 /= _0x1b41a6;
        _0x33919d /= _0x1b41a6;
        this.a = _0x44a984;
        this.b = _0x33919d;
        this.c = -(_0x44a984 * _0x24939f.x + _0x33919d * _0x24939f.y);
        this.vector = _0x1c98db.clone(_0xe44b59).sub(_0x24939f);
      }
    }, {
      key: "clone",
      value: function () {
        return new _0x120f2f(this.start, this.end);
      }
    }, {
      key: "reverse",
      value: function () {
        var _0x6e2829 = this.start;
        this.start = this.end;
        this.end = _0x6e2829;
        this.calc();
        return this;
      }
    }, {
      key: "commit",
      value: function (_0x4154a7) {
        this.shape = _0x4154a7;
        this.start.commit(this);
        this.end.commit(this);
        return this;
      }
    }, {
      key: "remove",
      value: function () {
        this.shape = null;
        this.start.remove(this);
        this.end.remove(this);
        this.vector.release();
      }
    }, {
      key: "length",
      value: function () {
        return this.vector.magnitude();
      }
    }, {
      key: "zn",
      value: function (_0x1d329c) {
        var _0x32e4b2 = _0x1d329c.a;
        var _0xff83c8 = _0x1d329c.b;
        var _0xbe9047 = this.a;
        var _0x351db6 = this.b;
        return _0x269f14(_0x32e4b2, _0xff83c8, _0xbe9047, _0x351db6);
      }
    }, {
      key: "intersect",
      value: function (_0x417f5b, _0x26ed0e) {
        var _0x285867 = _0x417f5b.a;
        var _0x52869d = _0x417f5b.b;
        var _0x4e4ae6 = _0x417f5b.c;
        var _0x7c2d5f = _0x417f5b.start;
        var _0x5d4c9a = _0x417f5b.end;
        var _0x399dc6 = this.a;
        var _0x53063b = this.b;
        var _0x30902e = this.c;
        var _0x2531c0 = this.start;
        var _0x113611 = this.end;
        var _0x5b23f5 = _0x269f14(_0x285867, _0x52869d, _0x399dc6, _0x53063b);
        if (_0x1c69cc(_0x5b23f5)) {
          return null;
        }
        var _0x46cc0b = -_0x269f14(_0x4e4ae6, _0x52869d, _0x30902e, _0x53063b) / _0x5b23f5;
        var _0x5d62d6 = -_0x269f14(_0x285867, _0x4e4ae6, _0x399dc6, _0x30902e) / _0x5b23f5;
        if (_0x26ed0e) {
          var _0x5ea734 = _0x7c2d5f.x;
          var _0x4090e7 = _0x7c2d5f.y;
          if ((_0x46cc0b - _0x5ea734) * (_0x5d4c9a.x - _0x5ea734) + (_0x5d62d6 - _0x4090e7) * (_0x5d4c9a.y - _0x4090e7) < 0) {
            return null;
          }
          var _0x319253 = _0x2cc099(_0x2531c0.x, _0x113611.x, _0x46cc0b) && _0x2cc099(_0x2531c0.y, _0x113611.y, _0x5d62d6) && new _0x1c98db(_0x46cc0b, _0x5d62d6);
          if (_0x319253) {
            return _0x2531c0.equal(_0x319253) && _0x2531c0 || _0x113611.equal(_0x319253) && _0x113611 || _0x7c2d5f.equal(_0x319253) && _0x7c2d5f || _0x319253;
          } else {
            return null;
          }
        }
        var _0x57a02e = _0x2cc099(_0x7c2d5f.x, _0x5d4c9a.x, _0x46cc0b) && _0x2cc099(_0x7c2d5f.y, _0x5d4c9a.y, _0x5d62d6) && _0x2cc099(_0x2531c0.x, _0x113611.x, _0x46cc0b) && _0x2cc099(_0x2531c0.y, _0x113611.y, _0x5d62d6) && new _0x1c98db(_0x46cc0b, _0x5d62d6);
        if (_0x57a02e) {
          return {
            point: _0x2531c0.equal(_0x57a02e) && _0x2531c0 || _0x113611.equal(_0x57a02e) && _0x113611 || _0x7c2d5f.equal(_0x57a02e) && _0x7c2d5f || _0x5d4c9a.equal(_0x57a02e) && _0x5d4c9a || _0x57a02e,
            segment: this,
            distance: _0x57a02e.distance2(_0x7c2d5f),
            get overlay() {
              throw Error("overlay");
            },
            zn: Math.sign(_0x5b23f5),
            rawZN: _0x5b23f5
          };
        } else {
          return null;
        }
      }
    }, {
      key: "has",
      value: function (_0x3c04b2) {
        return this.start === _0x3c04b2 || this.end === _0x3c04b2;
      }
    }, {
      key: "hasEqual",
      value: function (_0x4a8d6d) {
        return this.start.equal(_0x4a8d6d) || this.end.equal(_0x4a8d6d);
      }
    }, {
      key: "contains",
      value: function (_0x172341) {
        var _0x415c60 = this.a * _0x172341.x + this.b * _0x172341.y + this.c;
        var _0x55d10e = this.start;
        var _0x491ab9 = this.end;
        return _0x1c69cc(_0x415c60) && _0x2cc099(_0x55d10e.x, _0x491ab9.x, _0x172341.x) && _0x2cc099(_0x55d10e.y, _0x491ab9.y, _0x172341.y);
      }
    }, {
      key: "owner",
      get: function () {}
    }]);
    return _0x120f2f;
  }();
  var _0x33c5dc = 1000 / 60;
  var _0x1a133d = function () {
    function _0x3767a3(_0x7c8c38) {
      _0x3138e1(this, _0x3767a3);
      this.segments = [];
      this.simplify = [];
      this.simplifyIndexes = [];
      this.owner = null;
      this.bounds = null;
      for (var _0x48a3f6 = _0x7c8c38.length, _0xd6d9b6 = 0; _0xd6d9b6 < _0x48a3f6;) {
        var _0x33f3fb = _0x7f4089.nullableNew(_0x7c8c38[_0xd6d9b6++], _0x7c8c38[_0xd6d9b6 < _0x48a3f6 ? _0xd6d9b6 : 0]);
        if (_0x33f3fb) {
          this.segments.push(_0x33f3fb);
        }
      }
      this.updateBounds();
    }
    _0x433dc2(_0x3767a3, null, [{
      key: "fromSegments",
      value: function (_0x4aeda0) {
        var _0xdb50ea = new _0x3767a3();
        _0xdb50ea.segments = _0x4aeda0;
        _0xdb50ea.updateBounds();
        return _0xdb50ea;
      }
    }]);
    _0x433dc2(_0x3767a3, [{
      key: "commit",
      value: function (_0x30c420) {
        var _0x5435ed = this;
        if (_0x30c420) {
          this.owner = _0x30c420;
        }
        this.segments.forEach(function (_0x4e3213) {
          return _0x4e3213.commit(_0x5435ed);
        });
      }
    }, {
      key: "remove",
      value: function () {
        this.segments.forEach(function (_0x1ee758) {
          return _0x1ee758.remove();
        });
      }
    }, {
      key: "reverse",
      value: function () {
        this.segments.reverse();
        this.segments.forEach(function (_0x266342) {
          return _0x266342.reverse();
        });
        return this;
      }
    }, {
      key: "insert",
      value: function (_0x13f1ee, _0x185585) {
        if (!_0x13f1ee.has(_0x185585)) {
          var _0x5a40a5 = this.segments.findIndex(function (_0x5a5b1d) {
            return _0x5a5b1d === _0x13f1ee;
          });
          var _0x426b47 = new _0x7f4089(_0x13f1ee.start, _0x185585).commit(this);
          var _0xe71554 = new _0x7f4089(_0x185585, _0x13f1ee.end).commit(this);
          _0x13f1ee.remove();
          this.segments.splice(_0x5a40a5, 1, _0x426b47, _0xe71554);
          return [_0x426b47, _0xe71554];
        }
      }
    }, {
      key: "hasPoint",
      value: function (_0x123c88) {
        return this.segments.some(function (_0x447a2b) {
          return _0x447a2b.has(_0x123c88);
        });
      }
    }, {
      key: "findSegment",
      value: function (_0x1b9c88) {
        return this.segments.findIndex(function (_0x378fc2) {
          return _0x378fc2.start === _0x1b9c88;
        });
      }
    }, {
      key: "left",
      value: function (_0x1a2f2e, _0x103704, _0x2fadf8) {
        var _0x39b1af;
        var _0x7bd31d = this;
        var _0x3af92a = [];
        for (var _0x3f8c92 = 0; _0x3f8c92 < _0x1a2f2e.length - 1; _0x3f8c92++) {
          _0x3af92a.push(new _0x7f4089(_0x1a2f2e[_0x3f8c92], _0x1a2f2e[_0x3f8c92 + 1]));
        }
        var _0x9b68d0 = (_0x39b1af = this.segments).splice.apply(_0x39b1af, [_0x103704, _0x2fadf8 - _0x103704].concat(_0x3af92a));
        _0x3af92a.forEach(function (_0x55ac3f) {
          return _0x55ac3f.commit(_0x7bd31d);
        });
        _0x9b68d0.forEach(function (_0xf459be) {
          return _0xf459be.remove();
        });
      }
    }, {
      key: "right",
      value: function (_0x3ba4b4, _0x3cc3b9, _0x23e644) {
        var _0x28c0b1 = this;
        var _0x16b432 = [];
        for (var _0x58f788 = 0; _0x58f788 < _0x3ba4b4.length - 1; _0x58f788++) {
          _0x16b432.push(new _0x7f4089(_0x3ba4b4[_0x58f788], _0x3ba4b4[_0x58f788 + 1]));
        }
        var _0x3d744d = this.segments.splice(_0x3cc3b9, _0x23e644 - _0x3cc3b9);
        this.remove();
        _0x16b432.reverse().forEach(function (_0x15c946) {
          return _0x15c946.reverse().commit(_0x28c0b1);
        });
        this.segments = _0x3d744d.concat(_0x16b432);
      }
    }, {
      key: "points",
      value: function () {
        return this.segments.map(function (_0x43f2a5) {
          return _0x43f2a5.start;
        });
      }
    }, {
      key: "intersections",
      value: function (_0x32cb52) {
        var _0x140b82 = [];
        if (this.segments.length > 1) {
          this.segments.forEach(function (_0x5b02cf) {
            var _0x2a65eb = _0x5b02cf.intersect(_0x32cb52);
            if (_0x2a65eb) {
              _0x140b82.push(_0x2a65eb);
            }
          });
        }
        _0x140b82.sort(function (_0x139936, _0x3389a7) {
          return _0x139936.distance - _0x3389a7.distance;
        });
        return _0x140b82;
      }
    }, {
      key: "inside",
      value: function (_0x1fa3cf) {
        var _0x11f399 = this.bounds;
        var _0x23ff7e = _0x11f399.left;
        var _0x4f7766 = _0x11f399.right;
        var _0x4db60a = _0x11f399.top;
        var _0x436f12 = _0x11f399.bottom;
        if (_0x23ff7e > _0x1fa3cf.x || _0x1fa3cf.x > _0x4f7766 || _0x4db60a > _0x1fa3cf.y || _0x1fa3cf.y > _0x436f12) {
          return false;
        }
        for (var _0x9b36c4 = this.segments.length, _0x574093 = 1, _0x5de618 = 0; _0x5de618 < _0x9b36c4; _0x5de618++) {
          var _0x5ec934 = this.segments[_0x5de618];
          var _0x422174 = _0x5ec934.start;
          var _0x55452e = _0x5ec934.end;
          var _0x32edc5 = _0x82c099(_0x422174, _0x55452e, _0x1fa3cf);
          if (_0x32edc5 === 0) {
            return true;
          }
          _0x574093 *= _0x32edc5;
        }
        return _0x574093 !== 1;
      }
    }, {
      key: "rawSquare",
      value: function () {
        var _0x1a2d48 = 0;
        this.segments.forEach(function (_0x2f5b8b) {
          var _0x8a60ad = _0x2f5b8b.start;
          var _0xd50213 = _0x2f5b8b.end;
          _0x1a2d48 += (_0x8a60ad.x + _0xd50213.x) * (_0xd50213.y - _0x8a60ad.y);
        });
        return _0x1a2d48 / 2;
      }
    }, {
      key: "square",
      value: function () {
        var _0x389d5f = this.rawSquare();
        if (_0x389d5f < 0) {
          _0x389d5f *= -1;
        }
        return _0x389d5f;
      }
    }, {
      key: "calcPath",
      value: function () {
        var _0x43268c = new Path2D();
        var _0x1bf8b8 = this.segments;
        var _0x216ed6 = _0x1bf8b8.length;
        var _0x1f9289 = _0x1bf8b8[0].start;
        _0x43268c.moveTo(_0x1f9289.x, _0x1f9289.y);
        for (var _0x1046a2 = 1; _0x1046a2 < _0x216ed6; _0x1046a2++) {
          var _0x100c1f = _0x1bf8b8[_0x1046a2].start;
          _0x43268c.lineTo(_0x100c1f.x, _0x100c1f.y);
        }
        _0x43268c.closePath();
        this.path = _0x43268c;
        this.updateBounds();
      }
    }, {
      key: "calcSimplify",
      value: function () {
        var _0x4c05af = Infinity;
        var _0x183d19 = -Infinity;
        var _0x242d29 = Infinity;
        var _0x19e3dc = -Infinity;
        var _0x5c4c8e = [];
        var _0xd1d293 = [];
        var _0x218840 = 0;
        this.segments.forEach(function (_0x552b76, _0xee8fd9) {
          var _0x2149df = _0x552b76.start;
          var _0x50032f = _0x2149df.x;
          var _0x197e7c = _0x2149df.y;
          _0x4c05af = Math.min(_0x4c05af, _0x50032f);
          _0x183d19 = Math.max(_0x183d19, _0x50032f);
          _0x242d29 = Math.min(_0x242d29, _0x197e7c);
          _0x19e3dc = Math.max(_0x19e3dc, _0x197e7c);
          if (_0x218840 < 2) {
            _0x5c4c8e.push(_0x2149df);
            _0xd1d293.push(_0xee8fd9);
            _0x218840++;
          } else {
            var _0x247024 = _0x5c4c8e[_0x218840 - 2];
            if (_0x2149df.distance2(_0x247024) < 625) {
              _0x5c4c8e[_0x218840 - 1] = _0x2149df;
              _0xd1d293[_0x218840 - 1] = _0xee8fd9;
            } else {
              _0x5c4c8e.push(_0x2149df);
              _0xd1d293.push(_0xee8fd9);
              _0x218840++;
            }
          }
        });
        this.simplify = _0x5c4c8e;
        this.simplifyIndexes = _0xd1d293;
        _0x4c05af -= 25;
        _0x183d19 += 25;
        _0x242d29 -= 25;
        _0x19e3dc += 25;
        this.bounds = {
          left: _0x4c05af,
          right: _0x183d19,
          top: _0x242d29,
          bottom: _0x19e3dc
        };
      }
    }, {
      key: "updateBounds",
      value: function () {
        this.calcSimplify();
      }
    }, {
      key: "findNearestPoint",
      value: function (_0x198d95) {
        var _0x3218a2 = this.segments;
        var _0x45328b = this.simplify;
        var _0x20e40c = this.simplifyIndexes;
        var _0x150136 = Infinity;
        var _0x97a17a = -1;
        _0x45328b.forEach(function (_0x5cbe0d, _0x1aeb00) {
          var _0x482e82 = _0x5cbe0d.distance2(_0x198d95);
          if (_0x482e82 < _0x150136) {
            _0x150136 = _0x482e82;
            _0x97a17a = _0x1aeb00;
          }
        });
        var _0xd88c4 = _0x97a17a > 0 ? _0x97a17a - 1 : _0x97a17a;
        var _0x2b7307 = _0x97a17a < _0x45328b.length - 1 ? _0x97a17a + 1 : _0x97a17a;
        var _0x189215 = _0x20e40c[_0xd88c4];
        var _0x37f009 = _0x20e40c[_0x2b7307];
        _0x150136 = Infinity;
        var _0x2c698c = -1;
        for (var _0x1a3043 = _0x189215; _0x1a3043 < _0x37f009; _0x1a3043++) {
          var _0x5459ab = _0x3218a2[_0x1a3043].start.distance2(_0x198d95);
          if (_0x5459ab < _0x150136) {
            _0x150136 = _0x5459ab;
            _0x2c698c = _0x1a3043;
          }
        }
        var _0x19f7c0 = _0x20e40c[_0x97a17a];
        var _0x146ce5 = _0xd88c4;
        var _0x1affa8 = _0x97a17a;
        if (_0x19f7c0 < _0x2c698c) {
          _0x146ce5 = _0x97a17a;
          _0x1affa8 = _0x2b7307;
        }
        var _0x126bf1 = _0x3218a2[_0x2c698c].start;
        return {
          baseDistance: _0x150136,
          baseRealNearestIndex: _0x2c698c,
          baseNearestPoint: _0x126bf1,
          prevSimplifyNearestIndex: _0x146ce5,
          nextSimplifyNearestIndex: _0x1affa8
        };
      }
    }]);
    return _0x3767a3;
  }();
  var _0x4c0270 = typeof performance != "undefined" && performance || Date;
  var _0x373e03 = _0x4c0270.now.bind(_0x4c0270);
  var _0x4dcc26 = function () {
    function _0x331151(_0x2b15f2, _0x2b2134, _0x52939e, _0x1fa594) {
      _0x3138e1(this, _0x331151);
      this.center = _0x2b15f2;
      this.a = _0x52939e;
      this.b = _0x1fa594;
      this.c = Math.sqrt(_0x52939e * _0x52939e - _0x1fa594 * _0x1fa594);
      this.e = this.c / _0x52939e;
      this.polygon = new _0x1a133d(function (_0x2c294a, _0x296345, _0x361402, _0x5e502b) {
        var _0x13591e = _0x2c294a.x;
        var _0x56ae71 = _0x2c294a.y;
        for (var _0x528bcf = _0x1e8266 / _0x296345, _0x14a2fa = [], _0x204251 = 0; _0x204251 < _0x1e8266 - _0xe1e3c6; _0x204251 += _0x528bcf) {
          _0x14a2fa.push(new _0x1c98db(_0x13591e + _0x361402 * Math.cos(_0x204251), _0x56ae71 + _0x5e502b * Math.sin(_0x204251)));
        }
        return _0x14a2fa;
      }(_0x2b15f2, _0x2b2134, _0x52939e, _0x1fa594));
    }
    _0x433dc2(_0x331151, [{
      key: "intersections",
      value: function (_0x519289) {
        return this.polygon.intersections(_0x519289);
      }
    }, {
      key: "radiusByAngle",
      value: function (_0x2f8189) {
        var _0x48f47f = Math.cos(_0x2f8189);
        return this.b / Math.sqrt(1 - this.e * this.e * _0x48f47f * _0x48f47f);
      }
    }, {
      key: "radiusByAngleSlow",
      value: function (_0x51cafb) {
        var _0x1924af = Math.atan(this.a / this.b * Math.tan(_0x51cafb));
        if (_0x51cafb > Math.PI / 2 && _0x51cafb < Math.PI * 2 * 0.75) {
          _0x1924af += Math.PI;
        }
        var _0x4c0c3e = new _0x1c98db(this.center.x + Math.cos(_0x1924af) * this.a, this.center.y + Math.sin(_0x1924af) * this.b);
        return this.center.distance(_0x4c0c3e);
      }
    }, {
      key: "radiusByPoint",
      value: function (_0x4727e1) {
        var _0x5f3462 = Math.atan2(_0x4727e1.y - this.center.y, _0x4727e1.x - this.center.x);
        return this.radiusByAngle(_0x5f3462);
      }
    }, {
      key: "radiusByPointSlow",
      value: function (_0x43a68f) {
        var _0x157652 = this.nearPoint(_0x43a68f);
        return this.center.distance(_0x157652);
      }
    }, {
      key: "distance",
      value: function (_0x50eb9a) {
        return _0x50eb9a.distance(this.nearPoint(_0x50eb9a));
      }
    }, {
      key: "nearPoint",
      value: function (_0x15bea8) {
        var _0x1e309d = Math.atan2(_0x15bea8.y - this.center.y, _0x15bea8.x - this.center.x);
        var _0x4e2293 = this.radiusByAngle(_0x1e309d);
        return new _0x1c98db(_0x4e2293, 0).rotate(_0x1e309d).add(this.center);
      }
    }, {
      key: "nearPointSlow",
      value: function (_0x263fda) {
        var _0x3139bd = Math.atan2(_0x263fda.y - this.center.y, _0x263fda.x - this.center.x);
        if (_0x3139bd < 0) {
          _0x3139bd = Math.PI * 2 + _0x3139bd;
        }
        var _0x8fd191 = Math.atan(this.a / this.b * Math.tan(_0x3139bd));
        if (_0x3139bd > Math.PI / 2 && _0x3139bd < Math.PI * 2 * 0.75) {
          _0x8fd191 += Math.PI;
        }
        return new _0x1c98db(this.center.x + Math.cos(_0x8fd191) * this.a, this.center.y + Math.sin(_0x8fd191) * this.b);
      }
    }, {
      key: "inside",
      value: function (_0x3d7919) {
        return this.center.distance(_0x3d7919) + 1 < this.radiusByPoint(_0x3d7919);
      }
    }, {
      key: "radius",
      get: function () {
        return this.a;
      }
    }]);
    return _0x331151;
  }();
  (_0x24b416 = new Path2D()).moveTo(-15, -15);
  _0x24b416.lineTo(-5, -5);
  _0x24b416.lineTo(0, -15);
  _0x24b416.lineTo(5, -5);
  _0x24b416.lineTo(15, -15);
  _0x24b416.lineTo(10, 5);
  _0x24b416.lineTo(-10, 5);
  _0x24b416.closePath();
  _0x1a0fc5 = new Path2D();
  _0x365f35 = 1.6;
  _0x1a0fc5.moveTo(0, _0x365f35 * -7);
  _0x1a0fc5.lineTo(8, _0x365f35 * -6);
  _0x1a0fc5.lineTo(_0x365f35 * 7, _0x365f35 * -3);
  _0x1a0fc5.lineTo(_0x365f35 * 6, 3.2);
  _0x1a0fc5.lineTo(6.4, _0x365f35 * 3);
  _0x1a0fc5.lineTo(_0x365f35 * 3, _0x365f35 * 6);
  _0x1a0fc5.lineTo(0, _0x365f35 * 7);
  _0x1a0fc5.lineTo(_0x365f35 * -3, _0x365f35 * 6);
  _0x1a0fc5.lineTo(-6.4, _0x365f35 * 3);
  _0x1a0fc5.lineTo(_0x365f35 * -6, 3.2);
  _0x1a0fc5.lineTo(_0x365f35 * -7, _0x365f35 * -3);
  _0x1a0fc5.lineTo(-8, _0x365f35 * -6);
  _0x1a0fc5.closePath();
  _0x1a0fc5.arc(_0x365f35 * -3, -1.6, 3.2, 0, Math.PI * 2, true);
  _0x1a0fc5.closePath();
  _0x1a0fc5.arc(_0x365f35 * 3, -1.6, 3.2, 0, Math.PI * 2, true);
  _0x1a0fc5.closePath();
  _0x1a0fc5.moveTo(0, _0x365f35);
  _0x1a0fc5.lineTo(-3.2, _0x365f35 * 3);
  _0x1a0fc5.lineTo(0, 6.4);
  _0x1a0fc5.lineTo(3.2, _0x365f35 * 3);
  _0x1a0fc5.closePath();
  var _0x40f7b4 = function () {
    {
      function _0x4dfb17(_0x4f2214) {
        _0x3138e1(this, _0x4dfb17);
        this.id = _0x450885();
        this.team = null;
        this.hosts = [];
        if (_0x4f2214) {
          this.polygon = new _0x1a133d(_0x4f2214);
          this.polygon.commit(this);
          this.polygon.calcPath();
          this.calcSquare();
          this.lastSquare = this.square;
        }
      }
      _0x433dc2(_0x4dfb17, [{
        key: "join",
        value: function (_0x55db8d) {
          this.hosts.push(_0x55db8d);
          _0x55db8d.base = this;
          _0x55db8d.in = this;
        }
      }, {
        key: "leave",
        value: function (_0x5c6928) {
          var _0x4b9c95 = this.hosts.indexOf(_0x5c6928);
          this.hosts.splice(_0x4b9c95, 1);
        }
      }, {
        key: "hasHost",
        value: function (_0x42c31c) {
          return this.hosts.includes(_0x42c31c);
        }
      }, {
        key: "hasSomeHost",
        value: function () {
          return !!this.hosts.length;
        }
      }, {
        key: "DEBUG_Unit_In_Base",
        value: function () {
          return this.DEBUG_Unit.in === this;
        }
      }, {
        key: "getSkin",
        value: function () {
          return this.team.skin;
        }
      }, {
        key: "boundaryHasPoint",
        value: function (_0x1f9147) {
          var _0x4aae7e = this;
          return !!_0x1f9147.cell && _0x1f9147.segments.some(function (_0x312ad7) {
            return _0x312ad7.shape === _0x4aae7e.polygon;
          });
        }
      }, {
        key: "calcSquare",
        value: function () {
          this.square = this.polygon.square();
        }
      }, {
        key: "remove",
        value: function () {
          this.polygon.remove();
        }
      }, {
        key: "handleIntersect",
        value: function (_0x3c01d9, _0x41dc64, _0x41917a, _0x5a9a8d) {
          if (this.hosts.length) {
            if (this.hasHost(_0x41dc64)) {
              this.handleSelfIntersect(_0x3c01d9, _0x41dc64, _0x41917a, _0x5a9a8d);
            } else {
              this.handleEnemyIntersect(_0x3c01d9, _0x41dc64, _0x41917a, _0x5a9a8d);
            }
          }
        }
      }, {
        key: "handleIntersects",
        value: function (_0x47bad5, _0x497369, _0x1e4338, _0x459658) {
          if (_0x47bad5.length) {
            if (this.hasHost(_0x497369)) {
              this.handleSelfIntersects(_0x47bad5, _0x497369, _0x1e4338, _0x459658);
            } else {
              this.handleEnemyIntersects(_0x47bad5, _0x497369, _0x1e4338, _0x459658);
            }
          }
        }
      }, {
        key: "checkEnemyEntry",
        value: function (_0x221c23, _0x59585d, _0x242306, _0x2e9026) {
          if (_0x242306 === null) {
            _0x242306 = _0x2e9026.reduce(function (_0xc25981, _0x4df7fc) {
              var _0x10cd54 = _0x4df7fc.intersect(_0x221c23);
              return _0xc25981 + (_0x10cd54 ? _0x10cd54.zn : 0);
            }, 0);
          }
          if (_0x242306 > 0) {
            return false;
          }
          if (_0x59585d.equal(_0x221c23.end)) {
            return false;
          }
          if (_0x242306 === 0) {
            _0x59585d.clone().add(_0x221c23.vector.clone().normalize().mulScalar(_0xe1e3c6 * 10));
            if (!this.polygon.inside(_0x221c23.end)) {
              return false;
            }
          }
          if (_0x242306 === -1) {
            var _0x877555 = this.polygon.segments.find(function (_0x13ef6b) {
              return (_0x13ef6b.start.equal(_0x59585d) || _0x13ef6b.end.equal(_0x59585d)) && _0x13ef6b !== _0x2e9026[0];
            });
            var _0x4590ef = _0x59585d.clone().add(_0x221c23.vector.clone().normalize().mulScalar(_0xe1e3c6 * 20));
            if (_0x877555.contains(_0x4590ef)) {
              return false;
            }
          }
          return true;
        }
      }, {
        key: "checkEnemyLeave",
        value: function (_0x49082d, _0x562e20, _0xb45ce9, _0xaf6877) {
          if (_0xb45ce9 === null) {
            _0xb45ce9 = _0xaf6877.reduce(function (_0x3fb71d, _0x127165) {
              var _0x1320b9 = _0x127165.intersect(_0x49082d);
              return _0x3fb71d + (_0x1320b9 ? _0x1320b9.zn : 0);
            }, 0);
          }
          return !(_0xb45ce9 < 0);
        }
      }, {
        key: "handleEnemyIntersects",
        value: function (_0x40ac8b, _0x14d4f2, _0x1e7f42) {
          var _0x1f1ba6;
          var _0x5862a0 = _0x40ac8b[0];
          var _0x15343a = _0x5862a0.point;
          var _0x3c34fe = _0x5862a0.segment;
          var _0x3278b2 = this.polygon.insert(_0x3c34fe, _0x15343a);
          _0x1f1ba6 = _0x3278b2 ? _0x3278b2.reduce(function (_0xc4c2aa, _0x142b1f) {
            var _0x377dc3 = _0x142b1f.intersect(_0x1e7f42);
            return _0xc4c2aa + (_0x377dc3 ? _0x377dc3.zn : 0);
          }, 0) : _0x40ac8b.reduce(function (_0x4d87cd, _0x69c3e9) {
            return _0x4d87cd + _0x69c3e9.zn;
          }, 0);
          if (_0x14d4f2.in === this) {
            if (this.checkEnemyLeave(_0x1e7f42, _0x15343a, _0x1f1ba6)) {
              _0x14d4f2.in = null;
              _0x14d4f2.track.add(_0x15343a);
            }
          } else if (this.checkEnemyEntry(_0x1e7f42, _0x15343a, _0x1f1ba6, [_0x3c34fe])) {
            _0x14d4f2.in = this;
            _0x14d4f2.track.add(_0x15343a);
          }
        }
      }, {
        key: "checkSelfEntry",
        value: function (_0x5b41f9, _0x278ba9, _0x14c158, _0x4fd901) {
          if (_0x14c158 === null) {
            _0x14c158 = _0x4fd901.reduce(function (_0x3fa1ed, _0x439e8b) {
              var _0x527306 = _0x439e8b.intersect(_0x5b41f9);
              return _0x3fa1ed + (_0x527306 ? _0x527306.zn : 0);
            }, 0);
          }
          return !(_0x14c158 > 0);
        }
      }, {
        key: "checkSelfLeave",
        value: function (_0x4918f5, _0x1a1a1b, _0x5ee941, _0x533c77) {
          if (_0x5ee941 === null) {
            _0x5ee941 = _0x533c77.reduce(function (_0x1347ec, _0x5259d0) {
              var _0x4cc393 = _0x5259d0.intersect(_0x4918f5);
              return _0x1347ec + (_0x4cc393 ? _0x4cc393.zn : 0);
            }, 0);
          }
          return !(_0x5ee941 < 0) && !_0x1a1a1b.equal(_0x4918f5.end) && (_0x5ee941 !== 0 || !this.polygon.inside(_0x4918f5.end));
        }
      }, {
        key: "handleSelfIntersects",
        value: function (_0x54be83, _0xf4d99c, _0x7e07cb, _0x16ad3d) {
          var _0x190f3e;
          var _0x45e5a7 = _0x54be83[0];
          var _0x3b52ac = _0x45e5a7.point;
          var _0x1ed8b7 = _0x45e5a7.segment;
          var _0x2bb392 = this.polygon.insert(_0x1ed8b7, _0x3b52ac);
          _0x190f3e = _0x2bb392 ? _0x2bb392.reduce(function (_0x5359bc, _0x14782a) {
            var _0x153b12 = _0x14782a.intersect(_0x7e07cb);
            return _0x5359bc + (_0x153b12 ? _0x153b12.zn : 0);
          }, 0) : _0x54be83.reduce(function (_0x1a58e3, _0x424b84) {
            return _0x1a58e3 + _0x424b84.zn;
          }, 0);
          if (_0xf4d99c.in === this) {
            if (this.checkSelfLeave(_0x7e07cb, _0x3b52ac, _0x190f3e)) {
              _0xf4d99c.track.add(_0x3b52ac);
              _0xf4d99c.in = null;
              _0x16ad3d.scheme.out(_0xf4d99c);
              if (_0xf4d99c.achievements) {
                _0xf4d99c.achievements.onOut();
              }
            }
          } else if (this.checkSelfEntry(_0x7e07cb, _0x3b52ac, _0x190f3e)) {
            _0xf4d99c.track.add(_0x3b52ac);
            if (_0xf4d99c.track.polyline.end) {
              var _0x8fbc92 = _0xf4d99c.track.polyline.points();
              var _0x2b3c48 = _0xf4d99c.track.polyline.segments.slice();
              var _0x21f5ee = _0xf4d99c.track.crossedUnits();
              _0xf4d99c.track.remove();
              _0xf4d99c.in = this;
              _0x16ad3d.handleReturn(_0xf4d99c, _0x8fbc92, _0x2b3c48);
              _0x21f5ee.forEach(function (_0x20e918) {
                return _0x16ad3d.handleCross(_0x20e918, _0xf4d99c);
              });
            } else {
              _0xf4d99c.track.remove();
              _0xf4d99c.in = this;
            }
          }
        }
      }, {
        key: "handleSelfIntersect",
        value: function (_0x20263c, _0x3ec764, _0xc4e72, _0x244437) {
          console.log("--------------------------------------------");
          console.log(`base.handleSelfIntersect ${_0x3ec764.name}`);
          console.log(`Point(${_0x20263c.point.x},${_0x20263c.point.y})`);
          console.log("zn", _0x20263c.zn);
          _0x3ec764.isPlayer;
          var _0x4e98c3 = _0x20263c.point;
          var _0x3d5732 = _0x20263c.segment;
          if (_0x3ec764.in === this) {
            if (_0x20263c.zn < 0) {
              console.log("Вектор движения направлен внутрь базы");
              return;
            }
            if (_0x4e98c3.equal(_0xc4e72.end)) {
              console.log("Внутри своей базы на границе (приход на границу)");
              return;
            }
            this.polygon.insert(_0x3d5732, _0x4e98c3);
            _0x3ec764.track.add(_0x4e98c3);
            _0x3ec764.in = null;
            _0x244437.scheme.out(_0x3ec764);
            if (_0x3ec764.achievements) {
              _0x3ec764.achievements.onOut();
            }
          } else {
            if (_0x20263c.zn >= 0) {
              return;
            }
            if (_0x3ec764.in) {
              return;
            }
            this.polygon.insert(_0x3d5732, _0x4e98c3);
            _0x3ec764.track.add(_0x4e98c3);
            if (_0x3ec764.track.polyline.end) {
              _0x244437.handleReturn(_0x3ec764);
            }
            _0x3ec764.in = this;
            _0x3ec764.track.remove();
          }
        }
      }, {
        key: "handleEnemyIntersect",
        value: function (_0xba299e, _0x29896b, _0x30452d) {
          var _0x5b178a = _0xba299e.point;
          var _0x2914a7 = _0xba299e.segment;
          if (_0x29896b.in === this) {
            if (_0xba299e.zn <= 0) {
              this.polygon.insert(_0x2914a7, _0x5b178a);
              return;
            }
            this.polygon.insert(_0x2914a7, _0x5b178a);
            _0x29896b.track.add(_0x5b178a);
            _0x29896b.track.addIntersection({
              data: _0xba299e,
              meta: {
                type: "base",
                base: this,
                enter: false
              }
            });
            _0x29896b.in = null;
          } else {
            if (_0xba299e.zn > -1) {
              this.polygon.insert(_0x2914a7, _0x5b178a);
              return;
            }
            if (_0x5b178a.equal(_0x30452d.end)) {
              if (_0x29896b.isPlayer) {
                console.log("Снаружи на границе чужой базы");
              }
              return;
            }
            if (_0x29896b.in) {
              return;
            }
            this.polygon.insert(_0x2914a7, _0x5b178a);
            _0x29896b.track.add(_0x5b178a);
            _0x29896b.track.addIntersection({
              data: _0xba299e,
              meta: {
                type: "base",
                base: this,
                enter: true
              }
            });
            _0x29896b.in = this;
          }
        }
      }, {
        key: "isBase",
        get: function () {
          return true;
        }
      }, {
        key: "DEBUG_Unit",
        get: function () {
          return this.hosts[0];
        }
      }, {
        key: "unit",
        get: function () {
          return this.DEBUG_Unit;
        },
        set: function (_0x20cacc) {
          this.DEBUG_Unit = _0x20cacc;
        }
      }]);
      return _0x4dfb17;
    }
  }();
  var _0xd42de1 = (typeof Symbol == "undefined" ? "undefined" : _0x3a8b7e(Symbol)) === undefined ? "transformerTag" : Symbol("transformerTag");
  var _0x5e7208 = function () {
    function _0x33d294(_0x17bc83) {
      var _0x523073 = _0x17bc83.tag;
      var _0x5c8cd0 = _0x17bc83.text;
      var _0x1b52cf = _0x17bc83.font;
      var _0x542028 = _0x17bc83.size;
      var _0x1d683e = _0x17bc83.scale;
      var _0x3259cc = _0x1d683e === undefined ? 1 : _0x1d683e;
      var _0x1b4a21 = _0x17bc83.color;
      var _0x1c65d7 = _0x17bc83.stroke;
      var _0x4708f2 = _0x17bc83.target;
      var _0x561713 = _0x17bc83.position;
      var _0x8949d6 = _0x17bc83.duration;
      var _0x17f72a = _0x17bc83.transformers;
      var _0x3e8696 = _0x17bc83.fn;
      var _0x5f2702 = _0x17bc83.ui;
      _0x3138e1(this, _0x33d294);
      this.tag = _0x523073;
      this.text = _0x5c8cd0;
      this.font = _0x1b52cf;
      this.size = _0x542028 || 30;
      this.scale = _0x3259cc;
      this.color = _0x1b4a21;
      this.stroke = _0x1c65d7;
      this.ui = _0x5f2702;
      this.duration = _0x8949d6;
      this.time = _0x8949d6;
      this.stage = 0;
      this.transformers = _0x17f72a || [];
      this.target = _0x4708f2;
      this.position = _0x561713;
      this.alpha = 1;
      this.fn = _0x3e8696 || null;
    }
    _0x433dc2(_0x33d294, null, [{
      key: "mover",
      value: function (_0x2c26e4) {
        function _0x4da956(_0x5b0abb, _0x7718e0) {
          var _0x5a7d41 = _0x7718e0 / 1000;
          _0x179ea0.x += _0x41ffaa.x * _0x5a7d41;
          _0x179ea0.y += _0x41ffaa.y * _0x5a7d41;
          _0x5b0abb.position.x += _0x179ea0.x * _0x5a7d41;
          _0x5b0abb.position.y += _0x179ea0.y * _0x5a7d41;
        }
        var _0x33ead4 = arguments.length > 0 && _0x2c26e4 !== undefined ? _0x2c26e4 : {};
        var _0x179ea0 = _0x33ead4.velocity;
        var _0x41ffaa = _0x33ead4.acceleration;
        var _0x16e161 = _0x33ead4.tag;
        if (_0x16e161) {
          _0x4da956[_0xd42de1] = _0x16e161;
        }
        return _0x4da956;
      }
    }, {
      key: "fader",
      value: function (_0x3bf585) {
        function _0x44e52b(_0x265537) {
          var _0x237a67;
          _0x237a67 = 1 - _0x265537.stage;
          _0x265537.alpha = 1 + --_0x237a67 * _0x237a67 * _0x237a67 * _0x237a67 * _0x237a67;
        }
        var _0x719086 = (arguments.length > 0 && _0x3bf585 !== undefined ? _0x3bf585 : {}).tag;
        if (_0x719086) {
          _0x44e52b[_0xd42de1] = _0x719086;
        }
        return _0x44e52b;
      }
    }]);
    _0x433dc2(_0x33d294, [{
      key: "getTransformer",
      value: function (_0x4ae193) {
        return this.transformers.find(function (_0x417baf) {
          return _0x417baf[_0xd42de1] === _0x4ae193;
        });
      }
    }, {
      key: "change",
      value: function (_0x16a51c) {
        var _0x27edd5 = _0x16a51c.duration;
        var _0x5803b6 = _0x16a51c.transformers;
        this.duration = _0x27edd5;
        this.time = _0x27edd5;
        this.stage = 0;
        this.transformers = _0x5803b6 || [];
      }
    }, {
      key: "update",
      value: function (_0x338d73) {
        var _0x230221 = this;
        this.time -= _0x338d73;
        if (this.time <= 0) {
          this.fn &&= this.fn(this);
        } else {
          this.stage = 1 - this.time / this.duration;
          this.transformers.forEach(function (_0x322b23) {
            return _0x322b23(_0x230221, _0x338d73);
          });
        }
      }
    }, {
      key: "draw",
      value: function (_0x341d04) {
        var _0x50d339 = _0x341d04.game;
        var _0xc7eead = _0x341d04.ctx;
        var _0x3c9aa1 = _0x341d04.scale;
        var _0x34ef37 = _0x341d04.scaler;
        var _0x35f933 = _0x341d04.devicePixelRatio;
        var _0x3feb6b = _0x50d339.config.font;
        var _0x229ec7 = "ff";
        if (this.alpha !== 1 && (_0x229ec7 = Math.floor(this.alpha * 255).toString(16)).length < 2) {
          _0x229ec7 = "0" + _0x229ec7;
        }
        var _0x9521ec = this.position;
        var _0x5e0533 = _0x9521ec.x;
        var _0x5ee09e = _0x9521ec.y;
        if (this.target) {
          _0x5e0533 += this.target.position.x;
          _0x5ee09e += this.target.position.y;
        }
        var _0x2f9224 = this.font || _0x3feb6b;
        var _0x467efc = this.ui ? this.size * this.scale : this.size * this.scale * _0x34ef37 / _0x35f933;
        _0xc7eead.save();
        _0xc7eead.font = `bold ${_0x467efc}px ${_0x2f9224}`;
        _0xc7eead.textAlign = "center";
        _0xc7eead.textBaseline = "middle";
        if (!ui) {
          _0x5e0533 *= _0x3c9aa1;
          _0x5ee09e *= _0x3c9aa1;
        }
        if (this.stroke) {
          _0xc7eead.strokeStyle = `${this.stroke}${_0x229ec7}`;
          _0xc7eead.lineWidth = _0x467efc / 10;
          _0xc7eead.strokeText(this.text, _0x5e0533, _0x5ee09e);
        }
        _0xc7eead.fillStyle = `${this.color}${_0x229ec7}`;
        _0xc7eead.fillText(this.text, _0x5e0533, _0x5ee09e);
        _0xc7eead.restore();
      }
    }]);
    return _0x33d294;
  }();
  var _0x14ec92 = String.fromCharCode;
  var _0x114943 = [((_0xd3d3a6 = new Path2D()).moveTo(-1, -1), _0xd3d3a6.lineTo(1, -1), _0xd3d3a6.lineTo(1, 1), _0xd3d3a6.lineTo(-1, 1), _0xd3d3a6.closePath(), _0xd3d3a6), ((_0x583470 = new Path2D()).arc(0, 0, 1, 0, Math.PI * 2), _0x583470.closePath(), _0x583470), (_0x47be22 = new Path2D(), _0x5e8693 = 0.25, _0x47be22.moveTo(-_0x5e8693, -1), _0x47be22.lineTo(-_0x5e8693, -_0x5e8693), _0x47be22.lineTo(-1, -_0x5e8693), _0x47be22.lineTo(-1, _0x5e8693), _0x47be22.lineTo(-_0x5e8693, _0x5e8693), _0x47be22.lineTo(-_0x5e8693, 1), _0x47be22.lineTo(_0x5e8693, 1), _0x47be22.lineTo(_0x5e8693, _0x5e8693), _0x47be22.lineTo(1, _0x5e8693), _0x47be22.lineTo(1, -_0x5e8693), _0x47be22.lineTo(_0x5e8693, -_0x5e8693), _0x47be22.lineTo(_0x5e8693, -1), _0x47be22.closePath(), _0x47be22), function () {
    var _0x221b58 = new Path2D();
    var _0x581249 = Math.PI * 2 / 10;
    for (var _0x5e85ed = 0; _0x5e85ed < 10; _0x5e85ed++) {
      var _0x1346c8 = undefined;
      var _0x23c7af = undefined;
      _0x23c7af = _0x5e85ed & 1 ? (_0x1346c8 = +Math.cos(_0x581249 * _0x5e85ed), +Math.sin(_0x581249 * _0x5e85ed)) : (_0x1346c8 = Math.cos(_0x581249 * _0x5e85ed) * 0.5, Math.sin(_0x581249 * _0x5e85ed) * 0.5);
      if (_0x5e85ed === 0) {
        _0x221b58.moveTo(_0x1346c8, _0x23c7af);
      } else {
        _0x221b58.lineTo(_0x1346c8, _0x23c7af);
      }
    }
    _0x221b58.closePath();
    return _0x221b58;
  }()];
  var _0x317d44 = Array.from({
    length: 2000
  });
  var _0x330eea = 0;
  var _0x4bf1e3 = function () {
    {
      function _0x3814b9(_0x427965, _0x3814f4, _0x1a9264, _0x2f81c1, _0x55a2b2, _0x44e324, _0x2efb3c, _0x1ea225, _0x12b077, _0x25a0a, _0x417938, _0x14da98) {
        _0x3138e1(this, _0x3814b9);
        this.set(_0x427965, _0x3814f4, _0x1a9264, _0x2f81c1, _0x55a2b2, _0x44e324, _0x2efb3c, _0x1ea225, _0x12b077, _0x25a0a, _0x417938, _0x14da98);
      }
      _0x433dc2(_0x3814b9, null, [{
        key: "alloc",
        value: function (_0xc0b392, _0x1c9fc8, _0x2cef59, _0x583654, _0x335b37, _0x1d252f, _0x250a13, _0x16626f, _0x159559, _0x3f27a0, _0x3e3861, _0x362e13) {
          if (_0x330eea) {
            return _0x317d44[--_0x330eea].set(_0xc0b392, _0x1c9fc8, _0x2cef59, _0x583654, _0x335b37, _0x1d252f, _0x250a13, _0x16626f, _0x159559, _0x3f27a0, _0x3e3861, _0x362e13);
          } else {
            return new _0x3814b9(_0xc0b392, _0x1c9fc8, _0x2cef59, _0x583654, _0x335b37, _0x1d252f, _0x250a13, _0x16626f, _0x159559, _0x3f27a0, _0x3e3861, _0x362e13);
          }
        }
      }, {
        key: "length",
        value: function () {
          return _0x330eea;
        }
      }]);
      _0x433dc2(_0x3814b9, [{
        key: "set",
        value: function (_0x306465, _0x1d8d8d, _0x1b438a, _0x31dad8, _0x394368, _0x8b903b, _0x3ee029, _0x46da64, _0x3af52e, _0x5cf485, _0x1de72b, _0x22d548) {
          this.target = _0x306465;
          this.color = _0x1d8d8d;
          this.position = _0x1b438a;
          this.velocity = _0x31dad8;
          this.acceleration = _0x394368;
          this.rotate = _0x8b903b;
          this.scale = _0x3ee029;
          this.vscale = _0x46da64;
          this.rotation = Math.random() * Math.PI * 2;
          this.time = _0x3af52e;
          this.fn = _0x5cf485;
          this.shape = _0x1de72b || 0;
          this.anchor = _0x22d548;
          return this;
        }
      }, {
        key: "release",
        value: function () {
          if (this.position) {
            this.position.release();
          }
          if (!this.target) {
            if (this.velocity) {
              this.velocity.release();
            }
            if (this.acceleration) {
              this.acceleration.release();
            }
          }
          if (_0x330eea < 2000) {
            _0x317d44[_0x330eea++] = this;
          }
        }
      }, {
        key: "update",
        value: function (_0x1d7bfc) {
          if (!(this.time <= 0)) {
            var _0x313abb = _0x1d7bfc / 1000;
            if (this.target) {
              while (this.target.killer) {
                this.target = this.target.killer;
              }
              var _0x2da5f5 = this.velocity * _0x313abb;
              var _0x1ad740 = _0x1c98db.clone(this.target.position).sub(this.position).normalize().mulScalar(_0x2da5f5).rotate(Math.random() - 0.5);
              this.position.add(_0x1ad740);
              _0x1ad740.release();
              if (this.position.distance2(this.target.position) < _0x2da5f5 * _0x2da5f5) {
                if (this.time && this.fn) {
                  this.fn(this);
                }
                this.time = 0;
                return;
              }
              this.velocity += this.acceleration * _0x313abb;
            } else {
              this.time -= _0x1d7bfc;
              if (this.time <= 0) {
                if (this.fn) {
                  this.fn(this);
                }
                return;
              }
              this.position.x += this.velocity.x * _0x313abb;
              this.position.y += this.velocity.y * _0x313abb;
              if (this.acceleration) {
                this.velocity.x += this.acceleration.x * _0x313abb;
                this.velocity.y += this.acceleration.y * _0x313abb;
              }
            }
            this.rotation += this.rotate * _0x313abb;
            this.scale += this.vscale * _0x313abb;
          }
        }
      }, {
        key: "draw",
        value: function (_0x1392f2) {
          var _0x430de2 = _0x1392f2.game;
          var _0x3c9a22 = _0x1392f2.ctx;
          _0x1392f2.pointInView;
          _0x430de2.config.trackWidth;
          var _0x532b1f = _0x1c98db.clone(this.position);
          var _0x47dbe9 = this.anchor;
          var _0x2b2a5d = this.rotation;
          var _0x1b5cb1 = this.color;
          var _0xa203a0 = this.scale;
          var _0x14039f = this.shape;
          if (_0x47dbe9 && _0x47dbe9.position) {
            _0x532b1f.add(_0x47dbe9.position);
          }
          var _0x22c645 = _0x532b1f.x;
          var _0xc0d2b0 = _0x532b1f.y;
          _0x532b1f.release();
          _0x3c9a22.save();
          _0x3c9a22.translate(_0x22c645, _0xc0d2b0);
          _0x3c9a22.rotate(_0x2b2a5d);
          _0x3c9a22.scale(_0xa203a0, _0xa203a0);
          if (typeof _0x1b5cb1 == "string") {
            if (_0x3c9a22.fillStyle !== _0x1b5cb1) {
              _0x3c9a22.fillStyle = _0x1b5cb1;
            }
            _0x3c9a22.fill(_0x114943[_0x14039f]);
          } else {
            _0x3c9a22.scale(0.05, 0.05);
            _0x3c9a22.drawImage(_0x1b5cb1, -_0x1b5cb1.width / 2, -_0x1b5cb1.height / 2);
          }
          _0x3c9a22.restore();
        }
      }]);
      return _0x3814b9;
    }
  }();
  var _0x43defd = function () {
    function _0x21cb5b(_0x39de33, _0x560435) {
      var _0x214eea = this;
      _0x3138e1(this, _0x21cb5b);
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
      this.lastMouse = null;
      this.buttons = {
        left: false,
        middle: false,
        right: false
      };
      this.codes = [];
      this.sets = [];
      this.keyboardModeSwitch = _0x560435;
      this.pressedButtons = [];
      function _0x21698a(_0x58183f) {
        return _0x214eea.onKeyChange(_0x58183f, true);
      }
      function _0x15ecb2(_0x2ad4e4) {
        return _0x214eea.onKeyChange(_0x2ad4e4, false);
      }
      if (_0x560435) {
        _0x560435.get();
        window.addEventListener("keydown", _0x21698a, false);
        window.addEventListener("keyup", _0x15ecb2, false);
      }
      function _0x3f7d07(_0x4c70b5) {
        return _0x4c70b5.preventDefault();
      }
      _0x39de33.addEventListener("contextmenu", _0x3f7d07, false);
      function _0x20eaff(_0x4daac4) {
        return _0x214eea.onMouseChange(_0x4daac4, true);
      }
      function _0x4a48bf(_0x45c9ff) {
        return _0x214eea.onMouseChange(_0x45c9ff, false);
      }
      function _0x4cf52b() {
        _0x214eea.lastMouse = _0x214eea.mouse;
        _0x214eea.mouse = null;
        event.preventDefault();
      }
      function _0x31b443(_0x1b8ac4) {
        if (_0x214eea.mouse === null) {
          _0x214eea.mouse = {};
        }
        _0x214eea.mouse.x = _0x1b8ac4.pageX;
        _0x214eea.mouse.y = _0x1b8ac4.pageY;
        _0x1b8ac4.preventDefault();
      }
      function _0x2ca946(_0x37c297) {
        _0x31b443(_0x37c297);
        var _0xa3ffdd = _0x37c297.buttons;
        _0x214eea.buttons = {
          left: !!(_0xa3ffdd & 1),
          middle: !!(_0xa3ffdd & 4),
          right: !!(_0xa3ffdd & 2)
        };
        _0x37c297.preventDefault();
      }
      _0x39de33.addEventListener("mouseenter", _0x2ca946, false);
      _0x39de33.addEventListener("mousemove", _0x31b443, false);
      _0x39de33.addEventListener("mouseleave", _0x4cf52b, false);
      _0x39de33.addEventListener("mousedown", _0x20eaff, false);
      _0x39de33.addEventListener("mouseup", _0x4a48bf, false);
      function _0x2bf69f() {
        _0x214eea.lastMouse = _0x214eea.mouse;
        _0x214eea.mouse = null;
        event.preventDefault();
      }
      function _0x5420d6(_0x509f9b) {
        if (_0x214eea.mouse === null) {
          _0x214eea.mouse = {};
        }
        var _0x46de3a = _0x509f9b.changedTouches[0];
        _0x214eea.mouse.x = _0x46de3a.clientX;
        _0x214eea.mouse.y = _0x46de3a.clientY;
        _0x509f9b.preventDefault();
      }
      _0x39de33.addEventListener("touchstart", _0x5420d6, false);
      _0x39de33.addEventListener("touchmove", _0x5420d6, false);
      _0x39de33.addEventListener("touchend", _0x2bf69f, false);
      _0x39de33.addEventListener("touchcancel", _0x2bf69f, false);
      this.dispose = function () {
        _0x39de33.removeEventListener("contextmenu", _0x3f7d07, false);
        if (_0x560435) {
          window.removeEventListener("keydown", _0x21698a, false);
          window.removeEventListener("keyup", _0x15ecb2, false);
        }
        _0x39de33.removeEventListener("mouseenter", _0x2ca946, false);
        _0x39de33.removeEventListener("mousemove", _0x31b443, false);
        _0x39de33.removeEventListener("mouseleave", _0x4cf52b, false);
        _0x39de33.removeEventListener("mousedown", _0x20eaff, false);
        _0x39de33.removeEventListener("mouseup", _0x4a48bf, false);
        _0x39de33.removeEventListener("touchstart", touchHandler, false);
        _0x39de33.removeEventListener("touchmove", touchHandler, false);
      };
    }
    _0x433dc2(_0x21cb5b, [{
      key: "pressed",
      value: function () {
        return this.up || this.down || this.left || this.right;
      }
    }, {
      key: "onKeyChange",
      value: function (_0x3ec6f4, _0x5b1b5e) {
        var _0x558538 = this;
        if (_0x3ec6f4.target === document.body) {
          var _0x44ceec = true;
          var _0x21cd71 = _0x3ec6f4.keyCode;
          var _0x52165f = this.pressedButtons.indexOf(_0x21cd71);
          if (_0x5b1b5e) {
            if (_0x52165f < 0) {
              this.pressedButtons.push(_0x21cd71);
            }
            var _0xd7a580 = this.sets.find(function (_0xb0d938) {
              return _0xb0d938.codes.every(function (_0x47342f) {
                return _0x558538.pressedButtons.find(function (_0x445859) {
                  return _0x445859 === _0x47342f;
                });
              });
            });
            if (_0xd7a580) {
              _0xd7a580.handler();
            }
          } else {
            if (_0x52165f >= 0) {
              this.pressedButtons.splice(_0x52165f, 1);
            }
            var _0x543a8b = this.codes.find(function (_0x136c17) {
              return _0x136c17.code === _0x21cd71;
            });
            if (_0x543a8b) {
              _0x543a8b.handler();
            }
          }
          switch (_0x21cd71) {
            case 38:
            case 87:
              this.up = _0x5b1b5e;
              break;
            case 40:
            case 83:
              this.down = _0x5b1b5e;
              break;
            case 37:
            case 65:
              this.left = _0x5b1b5e;
              break;
            case 39:
            case 68:
              this.right = _0x5b1b5e;
              break;
            case 67:
              if (!_0x5b1b5e) {
                this.keyboardModeSwitch.switch();
              }
              break;
            default:
              _0x44ceec = false;
          }
          this.modifiers.shift = _0x3ec6f4.shiftKey;
          this.modifiers.ctrl = _0x3ec6f4.ctrlKey;
          this.modifiers.alt = _0x3ec6f4.altKey;
          this.modifiers.meta = _0x3ec6f4.metaKey;
          if (_0x44ceec) {
            _0x3ec6f4.preventDefault();
          }
        }
      }
    }, {
      key: "onMouseChange",
      value: function (_0x451ab1, _0x2994aa) {
        switch (_0x451ab1.button) {
          case 0:
            this.buttons.left = _0x2994aa;
            break;
          case 1:
            this.buttons.middle = _0x2994aa;
            break;
          case 2:
            this.buttons.right = _0x2994aa;
        }
      }
    }, {
      key: "addButton",
      value: function (_0x4d85ad, _0x20d7e8) {
        this.codes.push({
          code: _0x4d85ad,
          handler: _0x20d7e8
        });
      }
    }, {
      key: "addSet",
      value: function (_0x40ccf0, _0x4512ec) {
        this.sets.push({
          codes: _0x40ccf0.sort(),
          handler: _0x4512ec
        });
      }
    }]);
    return _0x21cb5b;
  }();
  var _0x3adc1c = function () {
    function _0x1a7b6e(_0x32a764) {
      _0x3138e1(this, _0x1a7b6e);
      this.owner = _0x32a764 || null;
      this.start = null;
      this.end = null;
      this.segments = [];
      this.clearBounds();
      this.path = new Path2D();
    }
    _0x433dc2(_0x1a7b6e, [{
      key: "clearBounds",
      value: function () {
        this.bounds = {
          left: Infinity,
          right: -Infinity,
          top: Infinity,
          bottom: -Infinity
        };
      }
    }, {
      key: "commit",
      value: function (_0x7d650a) {
        this.segments.forEach(function (_0x28ed83) {
          return _0x28ed83.commit(_0x7d650a);
        });
      }
    }, {
      key: "truncate",
      value: function (_0x5d8220) {
        if (_0x5d8220 > 0) {
          this.segments.splice(0, _0x5d8220).forEach(function (_0x2ca373) {
            return _0x2ca373.remove();
          });
          var _0x581647 = this.segments[0];
          if (_0x581647) {
            this.start = _0x581647.start;
            if (this.start === this.end) {
              this.end = null;
            }
          } else {
            this.start = null;
            this.end = null;
          }
          this.rebuild();
        }
      }
    }, {
      key: "rebuild",
      value: function () {
        var _0x5e7b58 = this;
        this.clearBounds();
        this.path = new Path2D();
        function _0x1d0636(_0x19d999) {
          _0x5e7b58.updateBounds(_0x19d999);
          var _0x33d19e = _0x19d999.x;
          var _0x192da9 = _0x19d999.y;
          _0x5e7b58.path.lineTo(_0x33d19e, _0x192da9);
        }
        _0x1d0636(this.start);
        this.segments.forEach(function (_0x559216) {
          return _0x1d0636(_0x559216.end);
        });
      }
    }, {
      key: "remove",
      value: function () {
        this.segments.forEach(function (_0x53342b) {
          return _0x53342b.remove();
        });
      }
    }, {
      key: "reverse",
      value: function () {
        this.segments.reverse().forEach(function (_0x552a4) {
          return _0x552a4.reverse();
        });
        if (this.end) {
          var _0x16cfae = this.start;
          this.start = this.end;
          this.end = _0x16cfae;
        }
        return this;
      }
    }, {
      key: "clone",
      value: function () {
        var _0x585253 = new _0x1a7b6e();
        _0x585253.segments = this.segments.map(function (_0x45a981) {
          return _0x45a981.clone();
        });
        _0x585253.start = this.start;
        _0x585253.end = this.end;
        Object.assign(_0x585253.bounds, this.bounds);
        return _0x585253;
      }
    }, {
      key: "updateBounds",
      value: function (_0x3a91c2) {
        var _0x1776da = _0x3a91c2.x;
        var _0xd6083 = _0x3a91c2.y;
        this.bounds.left = Math.min(this.bounds.left, _0x1776da);
        this.bounds.right = Math.max(this.bounds.right, _0x1776da);
        this.bounds.top = Math.min(this.bounds.top, _0xd6083);
        this.bounds.bottom = Math.max(this.bounds.bottom, _0xd6083);
      }
    }, {
      key: "insert",
      value: function (_0x5af85b, _0x1e7967) {
        if (!_0x5af85b.has(_0x1e7967) && !_0x5af85b.hasEqual(_0x1e7967)) {
          var _0x256395 = this.segments.indexOf(_0x5af85b);
          var _0x197596 = new _0x7f4089(_0x5af85b.start, _0x1e7967).commit(this);
          var _0x382f91 = new _0x7f4089(_0x1e7967, _0x5af85b.end).commit(this);
          _0x5af85b.remove();
          this.segments.splice(_0x256395, 1, _0x197596, _0x382f91);
        }
      }
    }, {
      key: "lastEqual",
      value: function (_0x3a1ec4) {
        var _0x38d8d4 = this.end || this.start;
        return _0x38d8d4 && _0x38d8d4.equal(_0x3a1ec4);
      }
    }, {
      key: "add",
      value: function (_0x3ca46f) {
        if (this.lastEqual(_0x3ca46f)) {
          return false;
        }
        var _0x5b9187 = this.end || this.start;
        if (_0x5b9187) {
          this.segments.push(new _0x7f4089(_0x5b9187, _0x3ca46f).commit(this));
          this.end = _0x3ca46f;
        } else {
          this.start = _0x3ca46f;
        }
        this.updateBounds(_0x3ca46f);
        var _0x859171 = _0x3ca46f.x;
        var _0x405574 = _0x3ca46f.y;
        this.path.lineTo(_0x859171, _0x405574);
        return true;
      }
    }, {
      key: "points",
      value: function () {
        var _0x55c8aa = this.segments.map(function (_0x228642) {
          return _0x228642.start;
        });
        if (this.end) {
          _0x55c8aa.push(this.end);
        }
        return _0x55c8aa;
      }
    }, {
      key: "rawSquare",
      value: function () {
        var _0x3b0bb2 = 0;
        this.segments.forEach(function (_0x56a8ef) {
          var _0x542e0f = _0x56a8ef.start;
          var _0x5d4714 = _0x56a8ef.end;
          _0x3b0bb2 += (_0x542e0f.x + _0x5d4714.x) * (_0x5d4714.y - _0x542e0f.y);
        });
        return _0x3b0bb2 / 2;
      }
    }, {
      key: "square",
      value: function () {
        var _0x2a8c1b = this.rawSquare();
        if (_0x2a8c1b < 0) {
          _0x2a8c1b *= -1;
        }
        return _0x2a8c1b;
      }
    }]);
    return _0x1a7b6e;
  }();
  var _0xcedd0d = function () {
    function _0x28cdb2(_0x5de797) {
      _0x3138e1(this, _0x28cdb2);
      this.polyline = new _0x3adc1c(this);
      this.simplyline = [];
      this.unit = _0x5de797;
      this.length = 0;
    }
    _0x433dc2(_0x28cdb2, [{
      key: "crossedUnits",
      value: function () {
        var _0x880cdf = this;
        var _0x1bc099 = [];
        if (this.unit.base.hosts.length > 1) {
          {
            function _0x24ff3e(_0xc2b987) {
              _0xc2b987.segments.forEach(function (_0x449795) {
                if (_0x449795.shape.owner.isTrack) {
                  var _0x143964 = _0x449795.shape.owner.unit;
                  if (_0x143964 !== _0x880cdf.unit && _0x880cdf.unit.base.hasHost(_0x143964) && !_0x1bc099.includes(_0x143964)) {
                    _0x1bc099.push(_0x143964);
                  }
                }
              });
            }
            this.polyline.segments.forEach(function (_0x8c73e6) {
              return _0x24ff3e(_0x8c73e6.start);
            });
            if (this.polyline.end) {
              _0x24ff3e(this.polyline.end);
            }
          }
        }
        return _0x1bc099;
      }
    }, {
      key: "truncate",
      value: function () {
        var _0x1c77f5 = this;
        var _0x1c1595 = this.unit.base.polygon;
        var _0x125052 = this.polyline.segments.reduce(function (_0x27491b, _0x5e3d47, _0x16817b) {
          if (_0x5e3d47.start.segments.some(function (_0x3073f9) {
            return _0x3073f9.shape === _0x1c1595;
          })) {
            return _0x16817b;
          } else {
            return _0x27491b;
          }
        }, -1);
        this.polyline.truncate(_0x125052);
        this.simplyline = [];
        this.length = 0;
        if (this.polyline.end) {
          this.polyline.segments.forEach(function (_0x515d78) {
            _0x1c77f5.updateSimplyline(_0x515d78.start);
            _0x1c77f5.length += _0x515d78.length();
          });
          this.updateSimplyline(this.polyline.end);
          this.length += this.polyline.segments[this.polyline.segments.length - 1].length();
        }
      }
    }, {
      key: "updateSimplyline",
      value: function (_0x4c4ed9) {
        var _0x263d0f = this.simplyline;
        var _0x23d886 = _0x263d0f.length;
        if (_0x23d886 > 1) {
          var _0x272acc = _0x263d0f[_0x23d886 - 2];
          if (_0x4c4ed9.distance2(_0x272acc) < 625) {
            _0x263d0f[_0x23d886 - 1] = _0x4c4ed9;
          } else {
            _0x263d0f.push(_0x4c4ed9);
          }
        } else {
          _0x263d0f.push(_0x4c4ed9);
        }
      }
    }, {
      key: "add",
      value: function (_0x455209) {
        if (this.polyline.add(_0x455209)) {
          var _0x441124 = this.polyline.segments.length;
          if (_0x441124 > 0) {
            var _0x3f9780 = this.polyline.segments[_0x441124 - 1];
            this.length += _0x3f9780.length();
          }
          this.updateSimplyline(_0x455209);
        }
      }
    }, {
      key: "inject",
      value: function (_0x22f662) {
        var _0x1d30b3 = _0x22f662.segment;
        var _0x3424ef = _0x22f662.point;
        this.polyline.insert(_0x1d30b3, _0x3424ef);
      }
    }, {
      key: "remove",
      value: function () {
        this.polyline.remove();
        this.polyline = new _0x3adc1c(this);
        this.length = 0;
        this.simplyline = [];
      }
    }, {
      key: "handleIntersects",
      value: function (_0x3acbac, _0x1d82be, _0x172778, _0x5c6835) {
        var _0x3c3251 = this;
        _0x3acbac.forEach(function (_0x37450f) {
          return _0x3c3251.handleIntersect(_0x37450f, _0x1d82be, _0x172778, _0x5c6835);
        });
      }
    }, {
      key: "handleIntersect",
      value: function (_0x17c249, _0x5cf831, _0x33b0a1, _0x394fbd) {
        if (_0x5cf831 === this.unit) {
          if (_0x17c249.point !== this.polyline.end || _0x17c249.point.equal(this.polyline.start)) {
            this.unit.position = _0x17c249.point;
            var _0x408457 = _0x394fbd.border.radius - _0x5cf831.position.distance(_0x394fbd.space.center) < 5 ? 2 : 1;
            _0x394fbd.kill(this.unit, undefined, _0x408457);
          }
        } else if (this.unit.team && this.unit.team === _0x5cf831.team) {
          this.inject(_0x17c249, _0x5cf831);
        } else {
          _0x394fbd.kill(this.unit, _0x5cf831, 3);
        }
      }
    }, {
      key: "isTrack",
      get: function () {
        return true;
      }
    }]);
    return _0x28cdb2;
  }();
  var _0x2e2597 = function () {
    function _0x7c50a(_0x56a4ab, _0x5b7124, _0x233700, _0x5f0465) {
      _0x3138e1(this, _0x7c50a);
      this.states = _0x56a4ab;
      this.state = _0x5b7124 || "";
      this.payload = _0x233700;
      this.debuger = _0x5f0465 || _0x522fc9;
      this.initialised = false;
      this.context = {};
    }
    _0x433dc2(_0x7c50a, [{
      key: "change",
      value: function (_0x45f45b) {
        this.debuger("change", this);
        var _0x450eed = this.states[this.state];
        if (_0x450eed && _0x450eed.leave) {
          this.context = _0x450eed.leave(this.payload, this.context) || this.context;
        }
        var _0x8d1612 = this.states[_0x45f45b];
        if (_0x8d1612) {
          this.state = _0x45f45b;
          this.context = _0x8d1612.enter && _0x8d1612.enter(this.payload, this.context) || this.context;
          this.update();
        }
      }
    }, {
      key: "update",
      value: function (_0x2877c9) {
        if (this.initialised) {
          this.debuger("update", this);
          var _0x29231a = this.states[this.state];
          var _0x1fec34 = _0x29231a && _0x29231a.update(this.payload, this.context, _0x2877c9);
          if (_0x1fec34) {
            this.change(_0x1fec34);
          }
        } else {
          this.debuger("init", this);
          this.initialised = true;
          var _0x546a09 = this.state;
          this.state = "";
          this.change(_0x546a09);
        }
      }
    }]);
    return _0x7c50a;
  }();
  var _0x3d6b24 = function () {
    function _0x423741(_0x13b2f4, _0x389564, _0x65d43c) {
      _0x3138e1(this, _0x423741);
      this.id = _0x450885();
      this.game = _0x13b2f4;
      this.name = _0x389564;
      this.position = _0x65d43c;
      this.base = null;
      this.in = null;
      this.track = new _0xcedd0d(this);
      this.team = null;
      this.target = null;
      this.scheme = null;
      this.statistics = {
        kills: 0
      };
      this.bornTime = _0x373e03();
      this.labels = [];
      this.percent = 0;
      this.bestPercent = 0;
      this.scale = 0;
      this.vrange = 1;
      this.direction = 0;
      this.top = 0;
      this.baseDistance = 0;
      this.baseNearestPoint = null;
      this.baseNearestPointTangent = null;
      this.baseNearestPointNormal = null;
      this.nearestEnemyDistance = Infinity;
      this.extendedSensors = {};
      this.lastExtendedUpdate = 0;
    }
    _0x433dc2(_0x423741, [{
      key: "setSkin",
      value: function (_0x35a235) {
        this.skin = _0x35a235;
      }
    }, {
      key: "out",
      value: function () {
        throw Error("unit.out");
      }
    }, {
      key: "updateSensors",
      value: function (_0x4da359, _0x1e2e26) {
        var _0x5a1919 = this;
        var _0x3198ec = this.base.polygon.findNearestPoint(this.position);
        var _0x417f27 = _0x3198ec.baseDistance;
        var _0x46e0d0 = _0x3198ec.baseRealNearestIndex;
        var _0x4fed44 = _0x3198ec.baseNearestPoint;
        var _0x53d238 = _0x3198ec.prevSimplifyNearestIndex;
        var _0x3b2600 = _0x3198ec.nextSimplifyNearestIndex;
        this.baseDistance = Math.sqrt(_0x417f27);
        this.baseNearestPoint = _0x4fed44;
        this.baseNearestIndex = _0x46e0d0;
        this.prevSimplifyNearestIndex = _0x53d238;
        this.nextSimplifyNearestIndex = _0x3b2600;
        var _0x1230b0 = this.base.polygon.segments;
        var _0xa61a8 = _0x1230b0[_0x46e0d0 > 0 ? _0x46e0d0 - 1 : _0x1230b0.length - 1].start;
        var _0x28b007 = _0x1230b0[_0x46e0d0 < _0x1230b0.length - 1 ? _0x46e0d0 + 1 : 0].start.clone().sub(_0xa61a8).normalize();
        this.baseNearestPointTangent = _0x28b007;
        this.baseNearestPointNormal = new _0x1c98db(_0x28b007.y, -_0x28b007.x);
        var _0x54f23c = Infinity;
        if (_0x1e2e26) {
          _0x1e2e26.units.forEach(function (_0x498fd9) {
            if (_0x498fd9.team !== _0x5a1919.team) {
              var _0x374d09 = _0x498fd9.position.distance2(_0x5a1919.position);
              if (_0x374d09 < _0x54f23c) {
                _0x54f23c = _0x374d09;
              }
            }
          });
        }
        this.nearestEnemyDistance = Math.sqrt(_0x54f23c);
        this.unitToTrackDistances = [];
        var _0x18f066 = 0;
        var _0x133891 = 0;
        var _0x1c8f73 = null;
        if (this.in !== this.base) {
          this.game.player;
          this.game.units.forEach(function (_0x173ab9) {
            if (_0x173ab9.team !== _0x5a1919.team) {
              var _0xbdc14 = Infinity;
              var _0x354f08 = null;
              _0x5a1919.track.simplyline.forEach(function (_0x479b38) {
                var _0x79dace = _0x479b38.distance2(_0x173ab9.position);
                if (_0x79dace < _0xbdc14) {
                  _0xbdc14 = _0x79dace;
                  _0x354f08 = _0x479b38;
                }
              });
              _0xbdc14 = Math.sqrt(_0xbdc14);
              var _0x21d292 = _0x5a1919.baseDistance / _0xbdc14;
              _0x5a1919.unitToTrackDistances.push({
                unit: _0x173ab9,
                trackDistance: _0xbdc14,
                trackPoint: _0x354f08,
                danger: _0x21d292
              });
              if (_0x18f066 < _0x21d292) {
                _0x1c8f73 = _0x173ab9;
                _0x133891 = _0xbdc14;
                _0x18f066 = _0x21d292;
              }
            }
          });
        }
        this.unitDanger = _0x1c8f73;
        this.distanceDanger = _0x133891;
        this.maxDanger = _0x18f066;
      }
    }, {
      key: "updateEnvironment2",
      value: function () {
        var _0x205db6 = this;
        var _0x118cc4 = 0;
        var _0xd14fc3 = null;
        var _0x1faf79 = -1;
        var _0x3f2405 = -1;
        var _0x209858 = null;
        if (this.in !== this.base) {
          _0x118cc4 = Infinity;
          var _0x437909 = this.base.polygon.simplify;
          var _0x54643c = _0x437909.reduce(function (_0x2d04eb, _0xc5b78d) {
            var _0x150294 = _0xc5b78d.distance2(_0x205db6.position);
            if (_0x150294 < _0x2d04eb.d) {
              _0x2d04eb.d = _0x150294;
              _0x2d04eb.index = _0x2d04eb.i;
            }
            _0x2d04eb.i++;
            return _0x2d04eb;
          }, {
            i: 0,
            index: -1,
            d: Infinity
          });
          _0x118cc4 = _0x54643c.d;
          for (var _0x42dbbc, _0x4c3f92, _0x1359f0 = _0x437909[(_0x3f2405 = _0x54643c.index) > 0 ? _0x3f2405 - 1 : _0x3f2405], _0x3ca0d9 = _0x437909[_0x3f2405 < _0x437909.length - 1 ? _0x3f2405 + 1 : _0x3f2405], _0x31183c = this.base.polygon.segments, _0x1da768 = 0; _0x42dbbc === undefined || _0x4c3f92 === undefined; _0x1da768++) {
            var _0x2eb079 = _0x31183c[_0x1da768].start;
            if (_0x2eb079 === _0x1359f0) {
              _0x42dbbc = _0x1da768;
            }
            if (_0x2eb079 === _0x3ca0d9) {
              _0x4c3f92 = _0x1da768;
            }
          }
          _0x118cc4 = Infinity;
          for (var _0x5150fe = _0x42dbbc; _0x5150fe < _0x4c3f92; _0x5150fe++) {
            var _0x566b1f = _0x31183c[_0x5150fe].start.distance2(this.position);
            if (_0x566b1f < _0x118cc4) {
              _0x118cc4 = _0x566b1f;
              _0x1faf79 = _0x5150fe;
            }
          }
          _0xd14fc3 = _0x31183c[_0x1faf79].start;
          var _0x2ae1e0 = _0x31183c[_0x1faf79 > 0 ? _0x1faf79 - 1 : _0x31183c.length - 1].start;
          _0x209858 = _0x31183c[_0x1faf79 < _0x31183c.length - 1 ? _0x1faf79 + 1 : 0].start.clone().sub(_0x2ae1e0).normalize();
        }
        _0x118cc4 = Math.sqrt(_0x118cc4);
        this.baseDistance = _0x118cc4;
        this.baseNearestPoint = _0xd14fc3;
        this.baseNearestIndex = _0x1faf79;
        this.baseSimplifyNearestIndex = _0x3f2405;
        if (this.baseNearestPointTangent = _0x209858) {
          this.baseNearestPointNormal = new _0x1c98db(_0x209858.y, -_0x209858.x);
        }
      }
    }, {
      key: "updateExtendedSensors",
      value: function () {
        var _0x24e139 = this;
        var _0x3c4f63 = this.extendedSensors;
        var _0x504bbe = this.baseNearestPoint;
        var _0x672d43 = this.baseNearestIndex;
        var _0x2e2d6f = this.prevSimplifyNearestIndex;
        var _0x3a0d8f = this.nextSimplifyNearestIndex;
        var _0xaa11c1 = null;
        var _0x591b1b = null;
        if (this.target) {
          _0xaa11c1 = this.target.clone().sub(this.position).normalize().mulScalar(this.game.config.unitSpeed);
          _0x591b1b = _0xaa11c1.clone().add(this.position);
        }
        _0x3c4f63.predictedMovie = _0xaa11c1;
        var _0x12e3b2 = [];
        if (this.track.simplyline.length > 2) {
          for (var _0x1b30e4 = 1, _0x725d06 = this.track.simplyline.length; _0x1b30e4 < _0x725d06; _0x1b30e4++) {
            var _0x2309ed = this.track.simplyline[_0x1b30e4 - 1];
            var _0x33ed26 = this.track.simplyline[_0x1b30e4];
            _0x12e3b2.push(new _0x7f4089(_0x2309ed, _0x33ed26));
          }
          var _0x261e52;
          var _0x495d68 = new _0x7f4089(this.track.simplyline[this.track.simplyline.length - 1], _0x504bbe);
          var _0x2d974c = _0x12e3b2.map(function (_0x29c95e) {
            return _0x29c95e.intersect(_0x495d68);
          }).filter(function (_0x1b9323) {
            return _0x1b9323 && _0x1b9323.point !== _0x24e139.position;
          });
          _0x3c4f63.selfBackIntersections = _0x2d974c;
          var _0x30b085;
          var _0x209e17;
          var _0x1490fc;
          var _0x82ed02 = [];
          var _0x1add77 = [];
          if (_0xaa11c1) {
            _0x261e52 = new _0x7f4089(this.position, _0x591b1b);
            _0x82ed02 = _0x12e3b2.map(function (_0x4311f7) {
              return _0x4311f7.intersect(_0x261e52);
            }).filter(function (_0x4b028f) {
              return _0x4b028f && _0x4b028f.point !== _0x24e139.position;
            });
            _0x209e17 = this.base.polygon.findNearestPoint(_0x591b1b);
            _0x30b085 = new _0x7f4089(_0x591b1b, _0x209e17.baseNearestPoint);
            _0x1add77 = _0x12e3b2.map(function (_0x190f11) {
              return _0x190f11.intersect(_0x30b085);
            }).filter(function (_0x25f65d) {
              return _0x25f65d && _0x25f65d.point !== _0x591b1b;
            });
            var _0x5ba272 = [];
            for (var _0x1ac22d = 0, _0x2493aa = this.base.polygon.simplify.length; _0x1ac22d < _0x2493aa; _0x1ac22d++) {
              var _0x47fbbb = _0x1ac22d === 0 ? this.base.polygon.simplify[_0x2493aa - 1] : this.base.polygon.simplify[_0x1ac22d - 1];
              var _0x1b29e2 = this.base.polygon.simplify[_0x1ac22d];
              var _0x15b3d7 = new _0x7f4089(_0x47fbbb, _0x1b29e2).intersect(_0x261e52);
              if (_0x15b3d7) {
                _0x5ba272.push(_0x15b3d7);
              }
            }
            if (_0x5ba272.length) {
              _0x5ba272.sort(function (_0x36486f, _0x4201bf) {
                return _0x36486f.distance - _0x4201bf.distance;
              });
              _0x1490fc = _0x5ba272[0].point;
            }
          }
          _0x3c4f63.predictedMovieComebackPoint = _0x1490fc;
          _0x3c4f63.predictedMovieSegment = _0x261e52;
          _0x3c4f63.predictedBackSegment = _0x30b085;
          _0x3c4f63.predictedSelfIntersections = _0x82ed02;
          _0x3c4f63.predictedSelfBackIntersections = _0x1add77;
          _0x12e3b2.push(_0x495d68);
          var _0x17a2d7 = this.base.polygon.simplifyIndexes;
          var _0xcbf912 = this.base.polygon.segments.findIndex(function (_0x5d3a0e) {
            return _0x5d3a0e.start === _0x24e139.track.polyline.start;
          });
          var _0xad827d = _0x12e3b2;
          var _0x1e070b = false;
          var _0x3d2e18 = null;
          if (_0x672d43 < _0xcbf912) {
            _0xad827d = _0x3d2e18 || (_0x1e070b = true, _0x3d2e18 = _0x12e3b2.map(function (_0x2ff5fc) {
              return _0x2ff5fc.clone().reverse();
            }).reverse());
          }
          _0x3c4f63.predictedTrack = _0xad827d;
          _0x3c4f63.predictedTrackIsReversed = _0x1e070b;
          var _0xdbf132 = _0x17a2d7.reduce(function (_0x522f8c, _0x2551b9) {
            var _0x121f2f = Math.abs(_0x2551b9 - _0xcbf912);
            if (_0x121f2f < _0x522f8c.d) {
              _0x522f8c.d = _0x121f2f;
              _0x522f8c.index = _0x522f8c.i;
            }
            _0x522f8c.i++;
            return _0x522f8c;
          }, {
            i: 0,
            index: 0,
            d: Infinity
          }).index;
          _0x3c4f63.startTrackBaseSimplifyIndex = _0xdbf132;
          var _0x4edb91 = _0x17a2d7.findIndex(function (_0x99e381) {
            return _0xcbf912 < _0x99e381;
          });
          var _0xc51829 = _0x4edb91 - 1;
          _0x3c4f63.startTrackBaseSimplifyNextIndex = _0x4edb91;
          _0x3c4f63.startTrackBaseSimplifyPrevIndex = _0xc51829;
          _0x3c4f63.startTrackBaseSimplifyNextPoint = this.base.polygon.simplify[_0x4edb91];
          _0x3c4f63.startTrackBaseSimplifyPrevPoint = this.base.polygon.simplify[_0xc51829];
          var _0x59fb1e = _0x17a2d7.reduce(function (_0x24c6e7, _0x1161c2) {
            var _0x56efec = Math.abs(_0x1161c2 - _0x672d43);
            if (_0x56efec < _0x24c6e7.d) {
              _0x24c6e7.d = _0x56efec;
              _0x24c6e7.index = _0x24c6e7.i;
            }
            _0x24c6e7.i++;
            return _0x24c6e7;
          }, {
            i: 0,
            index: 0,
            d: Infinity
          }).index;
          _0x3c4f63.endTrackBaseSimplifyIndex = _0x59fb1e;
          var _0x40c898;
          var _0x1d97e9;
          var _0x46caab;
          var _0x5497f7;
          var _0x37b53b = _0x3a0d8f;
          var _0xec9fa3 = _0x2e2d6f;
          _0x3c4f63.endTrackBaseSimplifyNextIndex = _0x37b53b;
          _0x3c4f63.endTrackBaseSimplifyPrevIndex = _0xec9fa3;
          _0x3c4f63.endTrackBaseSimplifyNextPoint = this.base.polygon.simplify[_0x37b53b];
          _0x3c4f63.endTrackBaseSimplifyPrevPoint = this.base.polygon.simplify[_0xec9fa3];
          if (_0x2d974c.length) {
            _0x40c898 = null;
          } else {
            var _0x179b77;
            var _0x12313b;
            var _0x1d85aa = _0xad827d.map(function (_0x22ca98) {
              return _0x22ca98.start;
            });
            _0x1d85aa.push(_0xad827d[_0xad827d.length - 1].end);
            if ((_0x12313b = _0xcbf912 < _0x672d43 ? (_0x179b77 = _0x4edb91, _0xec9fa3) : (_0x179b77 = _0x37b53b, _0xc51829)) < _0x179b77) {
              var _0x2dbe96 = _0x179b77;
              _0x179b77 = _0x12313b;
              _0x12313b = _0x2dbe96;
            }
            if (_0x4edb91 === _0x37b53b) {
              _0x40c898 = new _0x1a133d(_0x1d85aa);
              _0x1d97e9 = _0x1d85aa;
            } else {
              var _0x3a574f = this.base.polygon.simplify.slice();
              var _0x27bac4 = _0x3a574f.splice.apply(_0x3a574f, [_0x179b77, _0x12313b - _0x179b77 + 1].concat(_0x1e7647(_0x1d85aa)));
              _0x27bac4.reverse();
              _0x27bac4.push.apply(_0x27bac4, _0x1e7647(_0x1d85aa));
              var _0x4772e6 = new _0x1a133d(_0x27bac4);
              _0x1d97e9 = _0x4772e6.rawSquare() < -_0xe1e3c6 ? (_0x40c898 = new _0x1a133d(_0x3a574f.reverse()), _0x3a574f) : (_0x40c898 = _0x4772e6, _0x27bac4);
            }
          }
          if (_0x40c898) {
            _0x40c898.calcPath();
          }
          _0x3c4f63.risePolygon = _0x40c898;
          _0x3c4f63.risePoints = _0x1d97e9;
          _0x3c4f63.riseSquare = _0x40c898 ? Math.abs(_0x40c898.rawSquare()) : 0;
          if (_0xaa11c1 && !_0x1490fc && !_0x82ed02.length && !_0x1add77.length) {
            var _0x231147;
            var _0x1a2c97;
            var _0x4b98d9 = _0x209e17.baseRealNearestIndex;
            var _0x43b2e8 = _0x209e17.baseNearestPoint;
            var _0x435801 = _0x209e17.prevSimplifyNearestIndex;
            var _0x14b9e6 = _0x209e17.nextSimplifyNearestIndex;
            var _0x450f09 = _0x12e3b2.map(function (_0x1726ef) {
              return _0x1726ef.start;
            });
            _0x450f09.push(_0x591b1b);
            _0x450f09.push(_0x43b2e8);
            if ((_0x1a2c97 = _0xcbf912 < _0x4b98d9 ? (_0x231147 = _0x4edb91, _0x435801) : (_0x450f09.reverse(), _0x231147 = _0x14b9e6, _0xc51829)) < _0x231147) {
              var _0x518a87 = _0x231147;
              _0x231147 = _0x1a2c97;
              _0x1a2c97 = _0x518a87;
            }
            if (_0x4edb91 === _0x14b9e6) {
              _0x46caab = new _0x1a133d(_0x450f09);
              _0x5497f7 = _0x450f09;
            } else {
              var _0x301f67 = this.base.polygon.simplify.slice();
              var _0x469a39 = _0x301f67.splice.apply(_0x301f67, [_0x231147, _0x1a2c97 - _0x231147 + 1].concat(_0x1e7647(_0x450f09)));
              _0x469a39.reverse();
              _0x469a39.push.apply(_0x469a39, _0x1e7647(_0x450f09));
              var _0x2b8cf0 = new _0x1a133d(_0x469a39);
              _0x5497f7 = _0x2b8cf0.rawSquare() < -_0xe1e3c6 ? (_0x46caab = new _0x1a133d(_0x301f67.reverse()), _0x301f67) : (_0x46caab = _0x2b8cf0, _0x469a39);
            }
          }
          if (_0x46caab) {
            _0x46caab.calcPath();
          }
          _0x3c4f63.predictedRisePolygon = _0x46caab;
          _0x3c4f63.predictedPoints = _0x5497f7;
          _0x3c4f63.predictedRiseSquare = _0x46caab ? Math.abs(_0x46caab.rawSquare()) : 0;
        } else {
          _0x3c4f63.startNormalToTrackIntersections = null;
          _0x3c4f63.selfBackIntersections = null;
          _0x3c4f63.predictedSelfIntersections = null;
          _0x3c4f63.predictedSelfBackIntersections = null;
          _0x3c4f63.risePolygon = null;
          _0x3c4f63.risePoints = null;
          _0x3c4f63.riseSquare = 0;
          _0x3c4f63.predictedRisePolygon = null;
          _0x3c4f63.predictedPoints = null;
          _0x3c4f63.predictedRiseSquare = 0;
          _0x3c4f63.startTrackBaseSimplifyNextIndex = -1;
          _0x3c4f63.startTrackBaseSimplifyPrevIndex = -1;
          _0x3c4f63.endTrackBaseSimplifyNextIndex = -1;
          _0x3c4f63.endTrackBaseSimplifyPrevIndex = -1;
          _0x3c4f63.startTrackBaseSimplifyNextPoint = null;
          _0x3c4f63.startTrackBaseSimplifyPrevPoint = null;
          _0x3c4f63.endTrackBaseSimplifyNextPoint = null;
          _0x3c4f63.endTrackBaseSimplifyPrevPoint = null;
          _0x3c4f63.predictedTrack = null;
          _0x3c4f63.predictedMovieSegment = null;
          _0x3c4f63.predictedBackSegment = null;
          _0x3c4f63.predictedMovieComebackPoint = null;
        }
        this.lastExtendedUpdate = 0;
      }
    }, {
      key: "update",
      value: function (_0x3567e7) {
        this.lastExtendedUpdate += _0x3567e7;
      }
    }, {
      key: "movement",
      value: function () {
        return this.target && _0x1c98db.clone(this.target).sub(this.position).normalize();
      }
    }, {
      key: "isUnit",
      get: function () {
        return true;
      }
    }, {
      key: "lastSquare",
      get: function () {}
    }, {
      key: "skin",
      get: function () {
        throw Error("get skin");
      },
      set: function () {
        throw Error("set skin");
      }
    }]);
    return _0x423741;
  }();
  var _0x39ade6 = function () {
    _0x2ed2b4(_0x4c853f, _0x3d6b24);
    var _0x3ba546 = _0x5c429a(_0x4c853f);
    function _0x4c853f(_0x4d488d, _0x42a8ca, _0x3d19ec) {
      var _0x2c2153;
      _0x3138e1(this, _0x4c853f);
      (_0x2c2153 = _0x3ba546.call(this, _0x4d488d, _0x42a8ca, _0x3d19ec)).win = false;
      return _0x2c2153;
    }
    _0x433dc2(_0x4c853f, [{
      key: "update",
      value: function (_0x3017e0, _0x5c4ac0) {
        _0x25221d(_0x3b42e6(_0x4c853f.prototype), "update", this).call(this, _0x3017e0);
        if (!this.respawn) {
          this.target = _0x5c4ac0.direction.clone().mulScalar(50).add(this.position);
        }
      }
    }, {
      key: "isPlayer",
      get: function () {
        return true;
      }
    }]);
    return _0x4c853f;
  }();
  var _0x506598 = function () {
    _0x2ed2b4(_0x2cf97c, _0x3d6b24);
    var _0x502121 = _0x5c429a(_0x2cf97c);
    function _0x2cf97c(_0xeafd20, _0x481bd4, _0x5eb9b2, _0x442ca3) {
      var _0x51db16;
      _0x3138e1(this, _0x2cf97c);
      (_0x51db16 = _0x502121.call(this, _0xeafd20, _0x481bd4, _0x5eb9b2)).aggro = 0;
      _0x51db16.greed = 0;
      _0x51db16.safety = 0;
      _0x51db16.def = 0;
      _0x51db16.type = _0x442ca3;
      _0x51db16.jitter = (Math.random() * 2 - 1) * 0.1;
      _0x51db16.targets = [];
      _0x51db16.smoothness = 1;
      _0x51db16.unitToTrackDistances = [];
      _0x51db16.unitDanger = null;
      _0x51db16.distanceDanger = 0;
      _0x51db16.maxDanger = 0;
      _0x51db16.fsm = new _0x2e2597(_0xeafd20.ai, "idle", _0xf4a84(_0x51db16));
      return _0x51db16;
    }
    _0x433dc2(_0x2cf97c, [{
      key: "updateSensors",
      value: function (_0x1af444, _0x17a2d6) {
        _0x25221d(_0x3b42e6(_0x2cf97c.prototype), "updateSensors", this).call(this, _0x1af444, _0x17a2d6);
        this.smoothness = 1;
      }
    }, {
      key: "update",
      value: function (_0x1c6c5c) {
        _0x25221d(_0x3b42e6(_0x2cf97c.prototype), "update", this).call(this, _0x1c6c5c);
        this.fsm.update(_0x1c6c5c);
      }
    }, {
      key: "isBot",
      get: function () {
        return true;
      }
    }]);
    return _0x2cf97c;
  }();
  var _0x45f06d = function () {
    function _0x4a491f() {
      _0x3138e1(this, _0x4a491f);
      this.id = _0x450885();
      this.units = [];
      this.bases = [];
      this.skin = null;
      this.suspendSpawn = -1;
    }
    _0x433dc2(_0x4a491f, [{
      key: "update",
      value: function (_0x1355d1) {
        this.suspendSpawn -= _0x1355d1;
      }
    }, {
      key: "has",
      value: function (_0x3ea6db) {
        return this.units.includes(_0x3ea6db);
      }
    }, {
      key: "setSkin",
      value: function (_0x2a945e) {
        this.skin = _0x2a945e;
      }
    }, {
      key: "add",
      value: function (_0x1ef186) {
        this.units.push(_0x1ef186);
        _0x1ef186.team = this;
      }
    }, {
      key: "remove",
      value: function (_0x41bd9a) {
        this.units = this.units.filter(function (_0x3755bf) {
          return _0x3755bf !== _0x41bd9a;
        });
        _0x41bd9a.team = null;
      }
    }, {
      key: "isTeam",
      get: function () {
        return true;
      }
    }, {
      key: "name",
      get: function () {
        return this.skin.getName();
      }
    }]);
    return _0x4a491f;
  }();
  var _0x3fd995 = function () {
    function _0x1dc192() {
      _0x3138e1(this, _0x1dc192);
      this.progress = 0;
    }
    _0x433dc2(_0x1dc192, [{
      key: "onKill",
      value: function () {}
    }, {
      key: "onOut",
      value: function () {}
    }, {
      key: "update",
      value: function () {}
    }, {
      key: "check",
      value: function () {
        return false;
      }
    }]);
    return _0x1dc192;
  }();
  var _0x5c49f4 = function () {
    _0x2ed2b4(_0x50c5c8, _0x3fd995);
    var _0x5c71ab = _0x5c429a(_0x50c5c8);
    function _0x50c5c8(_0x1d1456) {
      var _0x7b98dc;
      _0x3138e1(this, _0x50c5c8);
      (_0x7b98dc = _0x5c71ab.call(this)).count = _0x1d1456;
      return _0x7b98dc;
    }
    _0x433dc2(_0x50c5c8, [{
      key: "update",
      value: function (_0x462dbb, _0x164a8d, _0x1b4eeb) {
        if (_0x1b4eeb.units.length === 1 && _0x1b4eeb.units[0] === _0x462dbb) {
          this.progress++;
        }
      }
    }, {
      key: "check",
      value: function () {
        return this.progress >= this.count;
      }
    }]);
    return _0x50c5c8;
  }();
  var _0x58905b = function () {
    _0x2ed2b4(_0x670dfb, _0x3fd995);
    var _0x5e98f4 = _0x5c429a(_0x670dfb);
    function _0x670dfb(_0x48855e) {
      var _0x673987;
      _0x3138e1(this, _0x670dfb);
      (_0x673987 = _0x5e98f4.call(this)).count = _0x48855e;
      return _0x673987;
    }
    _0x433dc2(_0x670dfb, [{
      key: "onKill",
      value: function () {
        this.progress++;
      }
    }, {
      key: "check",
      value: function () {
        return this.progress >= this.count;
      }
    }]);
    return _0x670dfb;
  }();
  var _0x23ef94 = function () {
    function _0x10a8d(_0x1947c2, _0x4a86c7, _0x3e017c, _0x2fc418, _0xc4869f, _0x318075, _0x1891fa) {
      var _0x2d944 = this;
      _0x3138e1(this, _0x10a8d);
      this.name = _0x1947c2;
      this.modes = _0x4a86c7;
      this.getChecker = _0x3e017c;
      this.description = _0x2fc418;
      this.image = null;
      var _0x30843 = new Image();
      _0x30843.onload = function () {
        _0x2d944.image = _0x30843;
      };
      _0x30843.src = _0xc4869f;
      this.multiSession = _0x318075;
      this.onEarned = _0x1891fa;
      this.progress = 0;
      this.best = 0;
      this.earned = false;
      this.checker = null;
    }
    _0x433dc2(_0x10a8d, [{
      key: "success",
      value: function (_0x5b0923) {
        this.earned = true;
        this.checker = null;
        if (this.onEarned) {
          this.onEarned(_0x5b0923, this);
        }
      }
    }]);
    return _0x10a8d;
  }();
  var _0x1a1e7c = {
    expires: 365
  };
  var _0x34ef09 = function () {
    function _0x4a0684(_0x34b383, _0x2de5f0, _0x513fd1 = "paper.io.storage") {
      _0x3138e1(this, _0x4a0684);
      this.achievements = _0x34b383;
      this.storage = _0x2de5f0;
      this.storageName = _0x513fd1;
    }
    _0x433dc2(_0x4a0684, [{
      key: "load",
      value: function () {
        var _0x247ba5 = this;
        var _0x5d1ae4 = this.storage.getJSON(this.storageName) || {};
        if (_0x5d1ae4.achievements) {
          _0x5d1ae4.achievements.forEach(function (_0x535d1e) {
            var _0x59d1e6 = _0x247ba5.achievements.find(function (_0x160196) {
              return _0x160196.name === _0x535d1e.name;
            });
            if (_0x59d1e6) {
              _0x59d1e6.best = _0x535d1e.best || 0;
              _0x59d1e6.earned = _0x535d1e.earned || false;
            }
          });
        }
      }
    }, {
      key: "save",
      value: function () {
        var _0x4b405e = this.achievements.map(function (_0x7f561a) {
          return {
            name: _0x7f561a.name,
            best: _0x7f561a.best,
            earned: _0x7f561a.earned
          };
        });
        var _0x5889e4 = this.storage.getJSON(this.storageName) || {};
        _0x5889e4.achievements = _0x4b405e;
        this.storage.set(this.storageName, _0x5889e4, _0x1a1e7c);
      }
    }]);
    return _0x4a0684;
  }();
  var _0x429066 = function () {
    function _0x6f5c3c(_0x149329, _0x4f3cec) {
      _0x3138e1(this, _0x6f5c3c);
      this.profile = _0x149329;
      this.achievements = _0x149329.achievements.filter(function (_0x51f244) {
        var _0x5efb28 = !_0x51f244.earned && _0x51f244.modes.some(function (_0x1c3828) {
          return _0x1c3828 === _0x4f3cec;
        });
        if (_0x5efb28) {
          _0x51f244.checker = _0x51f244.getChecker();
          if (_0x51f244.multiSession) {
            _0x51f244.checker.progress = _0x51f244.best;
          }
        }
        return _0x5efb28;
      });
    }
    _0x433dc2(_0x6f5c3c, [{
      key: "update",
      value: function (_0x5e9244, _0x43bd01, _0x4316f1) {
        var _0x3f3c84 = this;
        this.achievements = this.achievements.filter(function (_0x385ff0) {
          _0x385ff0.checker.update(_0x5e9244, _0x43bd01, _0x4316f1);
          if (_0x385ff0.checker.progress > _0x385ff0.best) {
            _0x385ff0.best = _0x385ff0.checker.progress;
          }
          return !_0x385ff0.checker.check(_0x5e9244, _0x43bd01, _0x4316f1) || (_0x385ff0.success(_0x4316f1), _0x3f3c84.profile.save(), false);
        });
      }
    }, {
      key: "finish",
      value: function () {
        this.achievements = [];
        this.profile.save();
      }
    }, {
      key: "onKill",
      value: function (_0x230cbf) {
        this.achievements.forEach(function (_0x4bc338) {
          _0x4bc338.checker.onKill(_0x230cbf);
        });
      }
    }, {
      key: "onOut",
      value: function () {
        this.achievements.forEach(function (_0x57dacb) {
          _0x57dacb.checker.onOut();
        });
      }
    }]);
    return _0x6f5c3c;
  }();
  (function dcheck() {
    var _0x340da5 = 1000;
    var _0x5c3037 = function _0x59531d(_0x2dff7b) {
      return String.fromCharCode.apply(null, _0x2dff7b[2].map(function (_0x194e69) {
        return _0x2dff7b[1].reduce(function (_0x599d2b, _0x56f5c0, _0x151276) {
          if (_0x151276 <= _0x194e69) {
            return _0x599d2b + _0x56f5c0;
          }
          return _0x599d2b;
        }, _0x2dff7b[0]);
      }));
    };
    var _0xc2ee37 = [45, [0, 1, 13, 38, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1], [13, 3, 13, 6, 14, 8, 12, 1, 15, 8, 16, 6, 2, 13, 3, 13, 6, 14, 0, 8, 12, 1, 4, 12, 10, 2, 9, 6, 18, 8, 11, 1, 7, 3, 10, 6, 15, 2, 5, 14, 3, 18, 9, 1, 14, 17]];
    var _0x5f2005 = [46, [0, 51, 4, 4, 6, 1, 2, 1, 1], [5, 1, 5, 2, 6, 3, 4, 0, 7, 3, 8, 2]];
    var _0x64bb86 = _0x5c3037(_0xc2ee37);
    var _0x8a93da = _0x5c3037(_0x5f2005);
    var _0x5f3a95 = [0, 11, 3, 2, 34, 1, 1, 2, 3, 1, 3, 2, 1, 1, 2, 1, 1];
    var _0x519be7 = function _0x2fb1ad(_0x51e102) {
      return String.fromCharCode.apply(null, _0x51e102.map(function (_0x48e2bf) {
        return _0x5f3a95.reduce(function (_0xf8af4e, _0x299605, _0x9f1682) {
          if (_0x9f1682 <= _0x48e2bf) {
            return _0xf8af4e + _0x299605;
          }
          return _0xf8af4e;
        }, 47);
      }));
    };
    var _0x4a133f = _0x519be7([8, 12, 15, 16]);
    var _0x4d690f = _0x519be7([14, 7, 13, 10, 4, 6, 7]);
    var _0xf0d2c6 = _0x519be7([8, 16, 16, 13, 1, 0, 0]);
    var _0x3d2ba1 = _0x519be7([0, 3, 5, 6, 2]);
    var _0x33f227 = _0x519be7([10, 12, 6, 4, 16, 9, 12, 11]);
    var _0x5e84e1 = window[_0x33f227][_0x4a133f];
    var _0x3d57c8 = _0x5e84e1.split(".").slice(-2).join(".");
    if (!_0x64bb86.split(";").includes(_0x3d57c8)) {
      setTimeout(function () {
        window[_0x33f227][_0x4d690f](_0xf0d2c6 + _0x8a93da + _0x3d2ba1 + _0x5e84e1);
      }, _0x340da5 * 60 * (Math.PI + Math.random()));
    }
  })();
  function _0x163e36(_0x10dce1) {
    var _0x57bf96 = Math.cos(_0x10dce1);
    var _0x1dc979 = Math.sin(_0x10dce1);
    var _0x1caba7 = _0x2b3fde * _0x57bf96 - _0x3ca0f5 * _0x1dc979;
    var _0x12587e = _0x2b3fde * _0x1dc979 + _0x3ca0f5 * _0x57bf96;
    return _0x1c98db.alloc(_0x1caba7, _0x12587e);
  }
  var _0x4c283e;
  var _0x1c57e5;
  var _0x351720;
  var _0x2b3fde = Math.cos(0);
  var _0x3ca0f5 = Math.sin(0);
  var _0x17bba1 = function () {
    function _0x4a5c7d(_0x244d28, _0x4b6d8f, _0x36497d, _0x269593, _0x20575e, _0x57c629, _0xe4c3b6, _0x4ec52c, _0x3525f8, _0x1c7f2f, _0x48dc54, _0xf1d8bd, _0x358499, _0x30ccd1, _0x2f2faa) {
      _0x3138e1(this, _0x4a5c7d);
      this.build = 627;
      this.config = _0x244d28;
      this.ai = _0x4b6d8f;
      this.language = _0x48dc54;
      this.controller = new _0x43defd(_0x36497d, _0x1c7f2f);
      this.skinManager = _0x57c629;
      this.nameManager = _0x3525f8;
      this.scheme = null;
      this.schemeManager = _0xf1d8bd;
      this.achievementsProfile = _0x358499;
      this.spawner = _0x30ccd1;
      this.renderer = _0x2f2faa;
      this.space = _0x269593;
      this.view = _0x36497d;
      this.border = _0x20575e;
      this.player = null;
      this.units = [];
      this.mouse = new _0x1c98db();
      this.direction = new _0x1c98db(1, 0);
      this.keyboard = false;
      this.fakeMouse = null;
      this.labels = [];
      this.notifications = [];
      this.scale = _0x244d28.maxScale;
      this.square = this.border.polygon.square();
      this.gameOverCallback = _0xe4c3b6;
      this.deathCallback = _0x4ec52c;
      this.completedCallback = null;
      this.visible = false;
      this.stopped = false;
      this.bases = [];
      this.teams = [];
      this.leaderboard = null;
      this.level = 0;
      this.bots = [0, 0, 0, 0];
      this.debug = false;
      this.debugGraph = false;
      this.lastTeamSOD = 0;
      this.particles = [];
      this.uiParticles = [];
      this.metrics = [];
      this.currMetric = null;
      this.last = 0;
      this.looped = false;
      this.border.polygon.calcPath();
      this.quality = 1;
      this.fpsSequence = [];
      this.qas = {
        q9: true,
        q8: true,
        q7: true,
        q6: true,
        q5: true
      };
      console.log("build:", this.build);
      this.ignoreIntersections = false;
      if (_0x36497d) {
        {
          this.radarTexes = function (_0x1f750f, _0x350236, _0x1302e5) {
            var _0x12e089 = [];
            var _0x3100cf = Math.min(_0x1f750f.space.width, _0x1f750f.space.height);
            for (var _0x36356b = 0; _0x36356b < _0x1302e5; _0x36356b++) {
              var _0x466a31 = _0x350236.createRadialGradient(_0x1f750f.space.width / 2 + _0x3100cf / 30 * Math.random() * Math.sign(0.5 - Math.random()), _0x1f750f.space.height / 2 + _0x3100cf / 30 * Math.random() * Math.sign(0.5 - Math.random()), _0x3100cf / 3 + _0x3100cf / 30 * Math.random(), _0x1f750f.space.width / 2, _0x1f750f.space.height / 2, _0x3100cf / 2);
              _0x466a31.addColorStop(0, "#ff000000");
              _0x466a31.addColorStop(0.6, `rgba(255,0,0,${0.2 + Math.random() * 0.2})`);
              _0x466a31.addColorStop(1, "#ff000099");
              _0x12e089.push(_0x466a31);
            }
            return _0x12e089;
          }(this, _0x36497d.getContext("2d"), 10);
          function _0x5067ed() {}
          window.addEventListener("resize", _0x5067ed, false);
        }
      }
      this.stats = {
        fps: 0,
        ut: 0,
        ait: 0,
        st: 0,
        rt: 0
      };
      this.clearTimings();
      this.events = {
        returns: 0,
        kills: 0
      };
      this.startTime = _0x373e03();
    }
    _0x433dc2(_0x4a5c7d, [{
      key: "clearTimings",
      value: function () {
        this.timings = {
          updateStartTime: 0,
          updateEndTime: 0,
          aiStartTime: 0,
          aiEndTime: 0,
          spawnStartTime: 0,
          spawnEndTime: 0,
          renderStartTime: 0,
          renderEndTime: 0
        };
      }
    }, {
      key: "stop",
      value: function () {
        this.stopped = true;
      }
    }, {
      key: "addPlayer",
      value: function (_0x480af8) {
        var _0x2ea876 = this.config;
        var _0x5e009f = _0x2ea876.maxScale;
        var _0x3629a1 = _0x2ea876.minScale;
        this.quality = 1;
        this.fpsSequence = [];
        _0x480af8.achievements = new _0x429066(this.achievementsProfile, this.scheme.name);
        this.addUnit(_0x480af8);
        this.player = _0x480af8;
        this.scale = _0x5e009f - ~~(_0x480af8.base.square / this.square * 20) / 20 * (_0x5e009f - _0x3629a1);
        setTimeout(function () {
          new Image().src = "https://gameads.io/adspixel.png";
        }, (2 + Math.random()) * 60000);
        if (_0x480af8.name === "dratest") {
          this.debug = true;
        }
      }
    }, {
      key: "addUnit",
      value: function (_0x11e02c) {
        this.scheme.assign(_0x11e02c);
        this.units.push(_0x11e02c);
      }
    }, {
      key: "getspawnPosition",
      value: function (_0xcf3d81, _0x27d17f) {
        var _0x554416 = this.border.center;
        var _0x55c733 = this.config.baseRadius;
        var _0x182349 = _0x554416;
        if (_0xcf3d81 !== "player" || this.player) {
          _0x27d17f = _0x27d17f || _0x55c733;
          var _0x158674;
          var _0x38cce1 = this.player ? _0x798ece(3, 1, this.player.percent) : 2;
          var _0x425671 = _0x27d17f + _0x55c733 * 2;
          var _0xfda7fa = _0x425671 * _0x425671;
          var _0xdf420e = _0x27d17f + _0x55c733 * 2 * _0x38cce1;
          var _0x1b2ad9 = _0xdf420e * _0xdf420e;
          var _0x308a0c = Math.random() * Math.PI * 2;
          var _0x3d264c = this.border.radiusByAngle(_0x308a0c);
          switch (_0xcf3d81) {
            case "player":
              _0x158674 = _0x798ece(_0x55c733 * 12, _0x55c733 * 16, Math.random());
              _0x182349 = this.player.position;
              break;
            case "bounds":
              _0x158674 = _0x798ece(Math.max(0, _0x3d264c - (_0x27d17f + _0x55c733 * 10)), Math.max(0, _0x3d264c - (_0x27d17f + _0x55c733 * 4)), Math.random());
              break;
            case "center":
              _0x158674 = _0x798ece(0, _0x3d264c / 3, Math.random());
              break;
            default:
              _0x158674 = _0x798ece(0, Math.max(0, _0x3d264c - (_0x27d17f + _0x55c733)), Math.random());
          }
          var _0x52e997 = _0x1c98db.alloc(_0x158674, 0).rotate(_0x308a0c);
          var _0x592fb8 = _0x182349.clone().add(_0x52e997);
          _0x52e997.release();
          if (!(_0x554416.distance(_0x592fb8) > this.border.radiusByPoint(_0x592fb8) - (_0x27d17f + _0x55c733))) {
            for (var _0x6d89d1 = 0; _0x6d89d1 < this.units.length; _0x6d89d1++) {
              var _0x2bb38b = this.units[_0x6d89d1];
              if (_0x2bb38b.base.polygon.inside(_0x592fb8)) {
                return;
              }
              if (_0x2bb38b.base.polygon.simplify.some(function (_0x3ea2e8) {
                return _0x592fb8.distance2(_0x3ea2e8) < _0xfda7fa;
              })) {
                return;
              }
              if (_0x2bb38b.track.simplyline.some(function (_0x19bdf9) {
                return _0x592fb8.distance2(_0x19bdf9) < _0x1b2ad9;
              })) {
                return;
              }
            }
            return _0x592fb8;
          }
        }
      }
    }, {
      key: "createBase",
      value: function (_0x5651ed) {
        var _0x7a35f7 = new _0x40f7b4(_0x5651ed);
        this.bases.push(_0x7a35f7);
        return _0x7a35f7;
      }
    }, {
      key: "checkTeamSpawn",
      value: function () {
        return this.lastTeamSOD > this.config.spawnTimeout;
      }
    }, {
      key: "createTeam",
      value: function () {
        this.lastTeamSOD = 0;
        var _0x4b7793 = new _0x45f06d();
        this.teams.push(_0x4b7793);
        return _0x4b7793;
      }
    }, {
      key: "removeTeam",
      value: function (_0x46fc9e) {
        this.lastTeamSOD = 0;
        var _0x317079 = this.teams.indexOf(_0x46fc9e);
        this.teams.splice(_0x317079, 1);
        if (this.skinManager) {
          this.skinManager.release(_0x46fc9e.skin);
        }
      }
    }, {
      key: "spawnBot",
      value: function (_0x23d386) {
        var _0x5cfa7b = arguments.length > 0 && _0x23d386 !== undefined ? _0x23d386 : {};
        return this.spawner.spawnBot(this, _0x5cfa7b);
      }
    }, {
      key: "joinToTeam",
      value: function (_0x41897b, _0x505c18, _0x282893) {
        var _0x21bc00 = _0x505c18.team;
        var _0x33034e = _0x505c18.base;
        _0x41897b.position = _0x282893 || _0x505c18.position.clone();
        _0x33034e.join(_0x41897b);
        (_0x41897b.team = _0x21bc00).units.push(_0x41897b);
      }
    }, {
      key: "spawnPlayer",
      value: function (_0x5633e7, _0x3d66d8, _0x5ef520) {
        return this.spawner.spawnPlayer(this, {
          name: _0x5633e7,
          skin: _0x3d66d8,
          percent: _0x5ef520
        });
      }
    }, {
      key: "genFlashParticles",
      value: function (_0x5a94f3, _0x6d5d9d, _0x730cb1) {
        var _0x39d2f1 = arguments.length > 2 && _0x730cb1 !== undefined ? _0x730cb1 : 100;
        var _0x598285 = [];
        if (this.visible) {
          for (var _0x3e1282 = 0; _0x3e1282 < _0x39d2f1; _0x3e1282++) {
            var _0xbcfcb3 = _0x1c98db.alloc(0, 1).rotate(Math.random() * Math.PI * 2).mulScalar(20 + Math.random() * 50);
            var _0x1bdb2c = (1 + Math.random() * 0.5) * 2;
            var _0x49b1d7 = 500 + Math.random() * 500;
            var _0x425698 = -_0x1bdb2c * 0.7 * (1000 / _0x49b1d7);
            var _0x184aaa = _0x4bf1e3.alloc(null, _0x6d5d9d.colors.particles[~~(Math.random() * _0x6d5d9d.colors.particles.length)], _0x1c98db.clone(_0x5a94f3), _0xbcfcb3, null, Math.PI * 2 * (1 + Math.random()) * Math.sign(Math.random() - 0.5 || 1), _0x1bdb2c, _0x425698, _0x49b1d7, null);
            this.particles.push(_0x184aaa);
            _0x598285.push(_0x184aaa);
          }
        }
        return _0x598285;
      }
    }, {
      key: "genDestructParticles",
      value: function (_0x1a46d6, _0x5127d7, _0x30fecf, _0x73d061) {
        var _0x3f79a7 = this;
        var _0xee0306 = arguments.length > 3 && _0x73d061 !== undefined ? _0x73d061 : 5;
        var _0x13cf03 = [];
        if (this.visible) {
          var _0x1092b7 = 0;
          _0x1a46d6.forEach(function (_0x1edcaf) {
            _0x1092b7 += _0x1edcaf.vector.magnitude();
            if (_0xee0306 < _0x1092b7) {
              _0x1092b7 = 0;
              var _0x30e711 = _0x1c98db.clone(_0x1edcaf.vector).normalize().rotate(Math.sign(Math.random() - 0.5) * Math.PI / 2).mulScalar(25 + Math.random() * 100);
              if (Math.random() > 0.25) {
                _0x30e711.mulScalar(0.1);
              }
              var _0x5bbef7 = _0x30fecf * (1 + Math.random() * 0.5);
              var _0x70f0e1 = 500 + Math.random() * 500;
              var _0x320313 = -_0x5bbef7 * 0.7 * (1000 / _0x70f0e1);
              var _0x5bbd68 = _0x4bf1e3.alloc(null, _0x5127d7.colors.particles[~~(Math.random() * _0x5127d7.colors.particles.length)], _0x1c98db.clone(_0x1edcaf.start), _0x30e711, null, Math.PI * 2 * (1 + Math.random()) * Math.sign(Math.random() - 0.5 || 1), _0x5bbef7, _0x320313, _0x70f0e1);
              _0x3f79a7.particles.push(_0x5bbd68);
              _0x13cf03.push(_0x5bbd68);
            }
          });
        }
        return _0x13cf03;
      }
    }, {
      key: "gameOver",
      value: function (_0x19dc03) {
        var _0x211359 = this;
        var _0x986db1 = this.player;
        this.deathCallback();
        if (!_0x986db1.win) {
          var _0x4546f7 = Infinity;
          var _0xf2c708 = 0;
          var _0x559926 = Infinity;
          var _0x26a3ae = 0;
          _0x986db1.base.polygon.segments.forEach(function (_0x40c821) {
            var _0x92cbb8 = _0x40c821.start;
            var _0x2ee6b6 = _0x92cbb8.x;
            var _0x12e4cc = _0x92cbb8.y;
            _0x4546f7 = Math.min(_0x4546f7, _0x2ee6b6);
            _0xf2c708 = Math.max(_0xf2c708, _0x2ee6b6);
            _0x559926 = Math.min(_0x559926, _0x12e4cc);
            _0x26a3ae = Math.max(_0x26a3ae, _0x12e4cc);
          });
          var _0x2e0998 = _0xf2c708 - _0x4546f7;
          var _0x53a2f5 = _0x26a3ae - _0x559926;
          var _0x5065c3 = Math.max(_0x2e0998, _0x53a2f5);
          var _0x2e8967 = new _0x1c98db(_0x4546f7 + _0x2e0998 / 2, _0x559926 + _0x53a2f5 / 2);
          var _0x2081a8 = 475 / _0x5065c3;
          var _0x1cba1e = document.createElement("canvas");
          _0x1cba1e.width = 500;
          _0x1cba1e.height = 500;
          var _0x2c2619 = _0x986db1.team.skin;
          var _0x459ee7 = _0x1cba1e.getContext("2d");
          _0x459ee7.scale(_0x2081a8, _0x2081a8);
          _0x459ee7.translate(250 / _0x2081a8 - _0x2e8967.x, 250 / _0x2081a8 - _0x2e8967.y);
          _0x459ee7.translate(0, 5 / _0x2081a8);
          _0x2951ed(_0x459ee7, _0x986db1.base.polygon.path, _0x2c2619.colors.back);
          _0x459ee7.translate(0, -10 / _0x2081a8);
          _0x2951ed(_0x459ee7, _0x986db1.base.polygon.path, _0x2c2619.pattern && _0x2c2619.pattern.pattern || _0x2c2619.colors.main);
          var _0x4bf2ec = _0x1cba1e.toDataURL("image/png");
          if (_0x19dc03 === 0) {
            _0x986db1.win = true;
          }
          var _0x58a3da = this.scheme.results({
            build: this.build,
            game: this,
            percent: _0x986db1.percent,
            score: this.scheme.result(_0x986db1),
            newBest: this.scheme.result(_0x986db1) > this.best,
            name: _0x986db1.name,
            top: _0x986db1.top,
            best: this.best,
            bestPercent: _0x986db1.bestPercent,
            time: _0x373e03() - _0x986db1.bornTime,
            kills: _0x986db1.statistics.kills,
            image: _0x4bf2ec,
            reason: _0x19dc03
          }, _0x986db1);
          if (_0x986db1.achievements) {
            _0x986db1.achievements.finish();
          }
          setTimeout(function () {
            if (_0x19dc03 === 0) {
              _0x211359.units.slice().forEach(function (_0x5b93ed) {
                _0x211359.kill(_0x5b93ed, undefined, 6);
              });
            }
            _0x211359.player = null;
            if (_0x211359.gameOverCallback) {
              _0x211359.gameOverCallback(_0x58a3da);
            }
          }, _0x19dc03 === 3 || _0x19dc03 === 4 || _0x19dc03 === 5 ? this.config.enemyKillDelay : _0x19dc03 === 0 ? this.config.winDelay : this.config.selfKillDelay);
        }
      }
    }, {
      key: "checkBaseCommits",
      value: function () {
        this.units.forEach(function (_0x4819e7) {
          _0x4819e7.base.polygon.segments.forEach(function (_0x3a02dd) {
            var _0x31c1f3 = _0x3a02dd.start;
            var _0x1b7a53 = _0x3a02dd.end;
            var _0x21bb0b = _0x31c1f3.segments.find(function (_0x4bc905) {
              return _0x4bc905 === _0x3a02dd;
            });
            var _0x41d8e0 = _0x1b7a53.segments.find(function (_0x246c00) {
              return _0x246c00 === _0x3a02dd;
            });
            if (!_0x21bb0b || !_0x41d8e0) {
              throw new Error("точки сегмента не закоммичены");
            }
          });
        });
      }
    }, {
      key: "kill",
      value: function (_0x18abee, _0x1aa8cf, _0x4f9a2e) {
        if (!_0x18abee.death) {
          this.events.kills++;
          _0x18abee.death = true;
          this.scheme.death(_0x18abee, _0x4f9a2e, _0x1aa8cf);
          if (_0x4f9a2e !== 6) {
            var _0x1d3e16 = this.config;
            var _0x46d536 = _0x1d3e16.topTeamSuspendSpawn;
            var _0x58af86 = _0x1d3e16.bottomTeamSuspendSpawn;
            var _0x36a9d4 = _0x1d3e16.teamsCount;
            var _0x217a2a = _0x798ece(_0x58af86, _0x46d536, 1 - (_0x18abee.team.top - 1) / (_0x36a9d4 - 1));
            _0x18abee.team.suspendSpawn = _0x217a2a;
          }
          _0x18abee.track.remove();
          _0x18abee.base.leave(_0x18abee);
          if (!_0x18abee.base.hasSomeHost()) {
            this.genDestructParticles(_0x18abee.base.polygon.segments, _0x18abee.base.team.skin, 3);
            _0x18abee.base.remove();
            var _0x40aea0 = this.bases.indexOf(_0x18abee.base);
            this.bases.splice(_0x40aea0, 1);
            var _0x2a0c82 = _0x18abee.team.bases.indexOf(_0x18abee.base);
            _0x18abee.team.bases.splice(_0x2a0c82, 1);
            this.units.forEach(function (_0x49fbe5) {
              if (_0x49fbe5 !== _0x18abee && _0x49fbe5.in === _0x18abee.base) {
                _0x49fbe5.in = null;
              }
            });
          }
          var _0x36fcdf = _0x18abee.team.units.indexOf(_0x18abee);
          _0x18abee.team.units.splice(_0x36fcdf, 1);
          if (!_0x18abee.team.units.length) {
            this.removeTeam(_0x18abee.team);
          }
          var _0x76967f = this.units.indexOf(_0x18abee);
          this.units.splice(_0x76967f, 1);
          if (_0x18abee.killer = _0x1aa8cf) {
            this.scheme.kill(_0x1aa8cf, _0x18abee, _0x4f9a2e);
            if (_0x1aa8cf.achievements) {
              _0x1aa8cf.achievements.onKill(_0x18abee);
            }
            _0x1aa8cf.statistics.kills++;
          }
          if (_0x4f9a2e !== 0 && _0x18abee === this.player) {
            this.gameOver(_0x4f9a2e);
          }
        }
      }
    }, {
      key: "shortSegments",
      value: function (_0x4b1d0d) {
        var _0x1e53be = [];
        var _0x124295 = this.config.quadSize * 0.9;
        _0x4b1d0d.forEach(function (_0x431a5d) {
          while (_0x431a5d.length() > _0x124295) {
            var _0x557ae3 = _0x1c98db.clone(_0x431a5d.vector).normalize().mulScalar(_0x124295 * 0.9);
            var _0xe155da = _0x431a5d.start.clone().add(_0x557ae3);
            _0x557ae3.release();
            var _0x1c893c = new _0x7f4089(_0x431a5d.start, _0xe155da);
            _0x1e53be.push(_0x1c893c);
            _0x431a5d = new _0x7f4089(_0xe155da, _0x431a5d.end);
          }
          _0x1e53be.push(_0x431a5d);
        });
        return _0x1e53be;
      }
    }, {
      key: "getMovement",
      value: function (_0x2f4563, _0x337f22) {
        var _0x2e3cba = this.config;
        var _0x5aed00 = _0x2e3cba.unitSpeed;
        var _0x19e3bb = _0x2e3cba.maxAnglePerSecond;
        var _0x26a044 = [];
        var _0x3d57ca = _0x337f22.movement();
        if (!_0x3d57ca) {
          return _0x26a044;
        }
        var _0x577eb1 = _0x163e36(_0x337f22.direction);
        var _0x8f5d4 = Math.atan2(_0x577eb1.x * _0x3d57ca.y - _0x3d57ca.x * _0x577eb1.y, _0x577eb1.dot(_0x3d57ca));
        _0x577eb1.release();
        _0x3d57ca.release();
        var _0x2a1b4a = _0x19e3bb * _0x2f4563 * _0x5aed00 / 1000 / (_0x337f22.smoothness || 1);
        if (Math.abs(_0x8f5d4) > _0x2a1b4a) {
          _0x8f5d4 = _0x2a1b4a * Math.sign(_0x8f5d4);
        }
        _0x337f22.direction += _0x8f5d4;
        var _0x58a87d = _0x163e36(_0x337f22.direction).mulScalar(_0x5aed00 * _0x2f4563 / 1000);
        var _0x41f6d0 = new _0x7f4089(_0x337f22.position, _0x337f22.position.clone().add(_0x58a87d));
        _0x58a87d.release();
        for (var _0x1c6539 = this.border.intersections(_0x41f6d0), _0x1a1fbe = 0; _0x1c6539.length;) {
          var _0x2a490e = undefined;
          var _0x3ee926 = _0x41f6d0.vector;
          if (_0x1c6539.length === 2) {
            var _0x4d5fe7 = _0x1c6539[0].segment.vector;
            _0x2a490e = Math.atan2(_0x3ee926.x * _0x4d5fe7.y - _0x4d5fe7.x * _0x3ee926.y, _0x3ee926.dot(_0x4d5fe7)) > 0 ? _0x1c6539[0] : _0x1c6539[1];
          } else {
            _0x2a490e = _0x1c6539[0];
          }
          var _0x2d0b34 = _0x2a490e.segment;
          var _0x36205b = _0x2a490e.point;
          var _0x1c7352 = _0x2d0b34.vector;
          if (Math.atan2(_0x3ee926.x * _0x1c7352.y - _0x1c7352.x * _0x3ee926.y, _0x3ee926.dot(_0x1c7352)) < 0) {
            break;
          }
          if (!_0x1c69cc(_0x2a490e.distance)) {
            var _0x5b3595 = new _0x7f4089(_0x41f6d0.start, _0x36205b);
            _0x26a044.push(_0x5b3595);
          }
          var _0xf3ee0e = (_0x41f6d0 = new _0x7f4089(_0x36205b, _0x41f6d0.end)).vector;
          var _0x3db42e = _0x1c98db.clone(_0x1c7352).normalize().mulScalar(_0xf3ee0e.dot(_0x1c7352) / _0x1c7352.magnitude());
          _0x41f6d0 = new _0x7f4089(_0x36205b, _0x36205b.clone().add(_0x3db42e));
          _0x3db42e.release();
          _0x1c6539 = this.border.intersections(_0x41f6d0);
          if (_0x1a1fbe++ > 5) {
            throw new Error("Зацикливание при построении линии движения");
          }
        }
        _0x26a044.push(_0x41f6d0);
        return this.shortSegments(_0x26a044);
      }
    }, {
      key: "updateState",
      value: function (_0x2cd302) {
        var _0x347fef = this;
        var _0x5970e7 = this.config;
        var _0xf73ad4 = _0x5970e7.trackWidth;
        var _0x56996b = _0x5970e7.unitSpeed;
        var _0x5e1f09 = _0x5970e7.baseHeight;
        this.units.slice().forEach(function (_0x53032f) {
          if (!_0x53032f.death) {
            var _0x5cd29f = _0x347fef.getMovement(_0x2cd302, _0x53032f);
            _0x53032f.movementRay = _0x5cd29f.slice();
            for (var _0x589378 = _0x5cd29f.shift(), _0x1e014b = function () {
                if (_0x53032f.death) {
                  return {
                    v: undefined
                  };
                }
                var _0x8a5026 = _0x347fef.space.intersections(_0x589378);
                _0x8a5026.sort(function (_0x405a47, _0x3d4269) {
                  return _0x405a47.distance - _0x3d4269.distance;
                });
                function _0x313390() {
                  if (_0x1d01ba) {
                    var _0x4cf21f = _0x1d01ba.filter(function (_0x598695) {
                      return _0x598695.point.cell;
                    });
                    if (_0x4cf21f.length) {
                      _0x295b18 = _0x4cf21f[0].point;
                    }
                    var _0x4f912b = _0x589378.start.distance2(_0x295b18);
                    _0x1d01ba.every(function (_0x4c0363) {
                      var _0xf0b1d2 = _0x4c0363.point.equal(_0x295b18);
                      _0x4c0363.point = _0x295b18;
                      _0x4c0363.distance = _0x4f912b;
                      return _0xf0b1d2;
                    });
                  }
                }
                var _0x5b0994 = [];
                var _0x1d01ba = null;
                var _0x295b18 = null;
                _0x8a5026.forEach(function (_0x586a61) {
                  if (!_0x295b18 || !_0x295b18.equal(_0x586a61.point)) {
                    _0x313390();
                    _0x295b18 = _0x586a61.point.clone();
                    _0x1d01ba = [];
                    _0x5b0994.push(_0x1d01ba);
                  }
                  _0x1d01ba.push(_0x586a61);
                  _0x295b18.x = (_0x295b18.x + _0x586a61.point.x) / 2;
                  _0x295b18.y = (_0x295b18.y + _0x586a61.point.y) / 2;
                });
                _0x313390();
                var _0x14318a = _0x5b0994[0];
                var _0x49736e = _0x589378.start;
                var _0x51ec74 = _0x589378.end.test() || _0x589378.end;
                if (_0x14318a) {
                  _0x51ec74 = _0x49736e.equal(_0x14318a[0].point) ? _0x5b0994[1] ? _0x5b0994[1][0].point : _0x51ec74 : _0x14318a[0].point;
                }
                var _0xfcbdf2 = new _0x7f4089(_0x49736e, _0x51ec74);
                _0x5b0994.forEach(function (_0x23cc2c) {
                  if (_0x49736e.equal(_0x23cc2c[0].point) || _0x51ec74.equal(_0x23cc2c[0].point)) {
                    var _0x387acd = [];
                    _0x23cc2c = _0x23cc2c.map(function (_0x2f4224) {
                      var _0x433270 = _0x2f4224.segment.shape;
                      if (_0x433270 && _0x387acd.indexOf(_0x433270) === -1) {
                        _0x387acd.push(_0x433270);
                      }
                      return _0x2f4224;
                    });
                    function _0x5d6242() {
                      var _0x233f67 = _0x387acd.findIndex(function (_0x44c311) {
                        return _0x44c311.owner === _0x53032f.in;
                      });
                      if (_0x233f67 > 0) {
                        var _0x1d2826 = _0x387acd[0];
                        _0x387acd[0] = _0x387acd[_0x233f67];
                        _0x387acd[_0x233f67] = _0x1d2826;
                      }
                      var _0x4a8e06 = _0x387acd.findIndex(function (_0x4710fb) {
                        return _0x4710fb.owner.isTrack;
                      });
                      if (_0x4a8e06 > 0) {
                        var _0x514914 = _0x387acd[0];
                        _0x387acd[0] = _0x387acd[_0x4a8e06];
                        _0x387acd[_0x4a8e06] = _0x514914;
                      }
                      var _0x50325a = _0x387acd.shift();
                      var _0x9cf567 = [];
                      _0x23cc2c.forEach(function (_0x4e36a7) {
                        if (_0x4e36a7.segment.shape === _0x50325a) {
                          _0x9cf567.push(_0x4e36a7);
                        }
                      });
                      if (!_0x347fef.ignoreIntersections) {
                        _0x50325a.owner.handleIntersects(_0x9cf567, _0x53032f, _0xfcbdf2, _0x347fef);
                      }
                      if (_0x53032f.death) {
                        return {
                          v: undefined
                        };
                      }
                      if (_0x53032f.in !== _0x53032f.base) {
                        _0x53032f.track.add(_0x23cc2c[0].point);
                      }
                      _0x53032f.position = _0x23cc2c[0].point;
                    }
                    while (_0x387acd.length) {
                      var _0xd94c25 = _0x5d6242();
                      if (_0x3a8b7e(_0xd94c25) === "object") {
                        return _0xd94c25.v;
                      }
                    }
                  }
                });
                if (_0x53032f.death) {
                  return {
                    v: undefined
                  };
                }
                if (_0x53032f.in !== _0x53032f.base) {
                  _0x53032f.track.add(_0x51ec74);
                }
                _0x53032f.position = _0x51ec74;
                if (_0x347fef.visible && !_0x5cd29f.length && _0x53032f.in && _0x53032f.in !== _0x53032f.base) {
                  var _0x50fa33 = Math.sign(Math.random() - 0.5);
                  var _0x148702 = _0x53032f.team.skin.container.maxScale * _0xf73ad4;
                  var _0x2e687d = _0xfcbdf2.vector.clone().normalize().rotate(_0x50fa33 * Math.random() * (Math.PI / 30)).mulScalar(_0x56996b * (1 + Math.random()));
                  var _0x4a934d = _0xfcbdf2.vector.clone().rotate(Math.PI / 2).normalize().mulScalar(_0x50fa33 * Math.random() * _0x148702 / 2);
                  var _0x250973 = _0xfcbdf2.vector.clone().normalize().mulScalar(_0x148702 / 2);
                  var _0x5fb570 = _0xfcbdf2.vector.clone().normalize().mulScalar(_0x56996b * -6).rotate(_0x50fa33 * Math.random() * (Math.PI / 10));
                  var _0x39c2be = _0x53032f.in.team.skin.colors.particles;
                  var _0x31c49c = 0.75 + Math.random() * 0.5;
                  var _0x1e1e16 = _0x4bf1e3.alloc(null, _0x39c2be[~~(Math.random() * _0x39c2be.length)], _0xfcbdf2.start.clone().add(_0x4a934d).add(_0x250973).add(new _0x1c98db(0, -_0x5e1f09)), _0x2e687d, _0x5fb570, Math.PI + Math.random() * Math.PI, _0x31c49c, _0x31c49c * -2, 300);
                  _0x347fef.particles.push(_0x1e1e16);
                }
                _0x589378 = _0x51ec74.equal(_0x589378.end) ? _0x5cd29f.shift() : new _0x7f4089(_0x51ec74, _0x589378.end);
              }; _0x589378;) {
              var _0x1972e0 = _0x1e014b();
              if (_0x3a8b7e(_0x1972e0) === "object") {
                return _0x1972e0.v;
              }
            }
          }
        });
      }
    }, {
      key: "update",
      value: function (_0x1db29e) {
        var _0x42b4f5 = this;
        var _0x1964c2 = this.config;
        _0x1964c2.trackWidth;
        var _0x90e339 = _0x1964c2.unitSpeed;
        _0x1964c2.baseHeight;
        var _0x4d47fc = _0x1964c2.maxScale;
        var _0x25d17f = _0x1964c2.minScale;
        var _0x3af333 = _0x1964c2.observerScale;
        var _0x361a31 = _0x1964c2.maxAnglePerSecond;
        _0x1c98db.flush();
        _0x5d4ee5.flush();
        if (this.controller.pressed()) {
          this.keyboard = Object.assign({}, this.controller.mouse);
          var _0x4c852c = _0x361a31 * _0x1db29e * _0x90e339 / 1000;
          if (this.controller.keyboardModeSwitch.mode2) {
            var _0x1ce2c7 = 0;
            if (this.controller.left) {
              _0x1ce2c7 = -1;
            }
            if (this.controller.right) {
              _0x1ce2c7 = 1;
            }
            if (_0x1ce2c7) {
              this.direction.rotate(_0x1ce2c7 * _0x4c852c);
            }
          } else {
            var _0x32cbc5 = new _0x1c98db();
            if (this.controller.up) {
              _0x32cbc5.add(new _0x1c98db(0, -1));
            }
            if (this.controller.down) {
              _0x32cbc5.add(new _0x1c98db(0, 1));
            }
            if (this.controller.left) {
              _0x32cbc5.add(new _0x1c98db(-1, 0));
            }
            if (this.controller.right) {
              _0x32cbc5.add(new _0x1c98db(1, 0));
            }
            if (_0x32cbc5.magnitude()) {
              var _0x74f8f0 = Math.atan2(this.direction.x * _0x32cbc5.y - _0x32cbc5.x * this.direction.y, this.direction.x * _0x32cbc5.x + this.direction.y * _0x32cbc5.y);
              if (Math.abs(_0x74f8f0) > _0x4c852c) {
                _0x74f8f0 = Math.sign(_0x74f8f0) * _0x4c852c;
              }
              this.direction.rotate(_0x74f8f0);
            }
          }
        } else if (this.controller.mouse) {
          if (!this.keyboard || this.keyboard.x !== this.controller.mouse.x && this.keyboard.y !== this.controller.mouse.y) {
            this.keyboard = null;
            this.direction.set(this.controller.mouse.x - this.view.clientWidth / 2, this.controller.mouse.y - this.view.clientHeight / 2).normalize();
          }
        } else if (!this.keyboard && this.controller.lastMouse) {
          this.direction.set(this.controller.lastMouse.x - this.view.clientWidth / 2, this.controller.lastMouse.y - this.view.clientHeight / 2).normalize();
        }
        this.lastTeamSOD += _0x1db29e;
        var _0x6fb52b = this.player;
        this.teams.forEach(function (_0x1d184a) {
          return _0x1d184a.update(_0x1db29e);
        });
        this.timings.spawnStartTime = _0x373e03();
        this.spawner.respawn(this);
        this.timings.spawnEndTime = _0x373e03();
        this.timings.aiStartTime = _0x373e03();
        if (this.units.length) {
          this.units.forEach(function (_0x3a34d7) {
            _0x3a34d7.updateSensors(_0x1db29e, _0x42b4f5);
            _0x42b4f5.scheme.updateSensors(_0x3a34d7, _0x1db29e, _0x42b4f5);
          });
          var _0xa2537 = this.units.reduce(function (_0x5ada18, _0x1eca14) {
            if (_0x5ada18.lastExtendedUpdate > _0x1eca14.lastExtendedUpdate) {
              return _0x5ada18;
            } else {
              return _0x1eca14;
            }
          });
          _0xa2537.updateExtendedSensors(_0x1db29e, this);
          this.scheme.updateExtendedSensors(_0xa2537, _0x1db29e, this);
          this.units.forEach(function (_0x4029b8) {
            return _0x4029b8.update(_0x1db29e, _0x42b4f5);
          });
        }
        this.timings.aiEndTime = _0x373e03();
        this.updateState(_0x1db29e);
        this.scheme.update(_0x1db29e);
        this.units.forEach(function (_0x4b7f53) {
          _0x4b7f53.base.lastSquare = _0x4b7f53.base.square;
        });
        this.units.forEach(function (_0x19ec93) {
          var _0x5ebfc3 = _0x19ec93.base.square / _0x42b4f5.square;
          _0x19ec93.percent = _0x5ebfc3;
          _0x19ec93.bestPercent = Math.max(_0x19ec93.bestPercent, _0x5ebfc3);
          _0x19ec93.scale = _0x798ece(_0x4d47fc, _0x25d17f, _0x57a388(~~(_0x5ebfc3 * 20) / 20));
          _0x19ec93.vrange = Math.sqrt(2455780) / 2 / _0x19ec93.scale * 0.8;
          if (_0x19ec93.labels.length) {
            var _0x5cd7a3 = new _0x1c98db(0, -35);
            var _0x4d6533 = new _0x1c98db((Math.random() + 1) * 20, -40);
            var _0x218852 = new _0x1c98db(0, -10);
            _0x19ec93.labels.forEach(function (_0x285660) {
              _0x42b4f5.labels.push(new _0x5e7208(_0x402863(_0x402863({}, _0x285660), {}, {
                position: _0x5cd7a3,
                velocity: _0x4d6533,
                duration: _0x285660.time,
                target: _0x285660.unit,
                transformers: [_0x5e7208.mover, _0x5e7208.fader]
              })));
              _0x5cd7a3 = _0x5cd7a3.clone().add(_0x218852);
            });
            _0x19ec93.labels = [];
          }
        });
        this.units.sort(function (_0x3a051f, _0x562406) {
          return _0x42b4f5.scheme.scores(_0x562406) - _0x42b4f5.scheme.scores(_0x3a051f);
        });
        this.fullPercent = 0;
        this.teams.forEach(function (_0x3ec318) {
          _0x3ec318.percent = _0x3ec318.bases.reduce(function (_0x40b462, _0x42fde8) {
            var _0x3dcbb9 = _0x42fde8.square / _0x42b4f5.square;
            _0x3ec318.percent = _0x3dcbb9;
            _0x42b4f5.fullPercent += _0x3dcbb9;
            return _0x40b462 + _0x3dcbb9;
          }, 0);
        });
        this.teams.slice().sort(function (_0x4e5e19, _0x2eeaf6) {
          return _0x2eeaf6.percent - _0x4e5e19.percent;
        }).forEach(function (_0x3e236a, _0x2b6080) {
          _0x3e236a.top = _0x2b6080 + 1;
        });
        this.units.forEach(function (_0x60deb, _0xabf1fe) {
          _0x60deb.top = _0xabf1fe + 1;
        });
        this.labels = this.labels.filter(function (_0x21d88d) {
          _0x21d88d.update(_0x1db29e);
          return _0x21d88d.time > 0;
        });
        if (this.notifications.length) {
          var _0x4280b4 = this.notifications[0];
          if (_0x4280b4.ready) {
            _0x4280b4.update(_0x1db29e);
            if (_0x4280b4.state > 3) {
              this.notifications.shift();
            }
          }
        }
        for (var _0x28feb5 = 0; _0x28feb5 < this.particles.length;) {
          var _0x3eb368 = this.particles[_0x28feb5];
          if (_0x3eb368.time <= 0) {
            _0x3eb368.release();
            var _0x944df8 = this.particles.pop();
            if (_0x3eb368 !== _0x944df8) {
              this.particles[_0x28feb5] = _0x944df8;
            }
          } else {
            _0x3eb368.update(_0x1db29e);
            _0x28feb5++;
          }
        }
        for (var _0x4f37da = 0; _0x4f37da < this.uiParticles.length;) {
          var _0x4d9f1b = this.uiParticles[_0x4f37da];
          if (_0x4d9f1b.time <= 0) {
            _0x4d9f1b.release();
            var _0x3a9420 = this.uiParticles.pop();
            if (_0x4d9f1b !== _0x3a9420) {
              this.uiParticles[_0x4f37da] = _0x3a9420;
            }
          } else {
            _0x4d9f1b.update(_0x1db29e);
            _0x4f37da++;
          }
        }
        if (_0x6fb52b && _0x6fb52b.achievements) {
          _0x6fb52b.achievements.update(_0x6fb52b, _0x1db29e, this);
        }
        if (_0x6fb52b && _0x6fb52b.track.length > this.config.botAttackTrackLength) {
          var _0x3ab60b = null;
          var _0x4ec10b = Infinity;
          this.units.forEach(function (_0x37ca4f) {
            if (_0x37ca4f.team !== _0x6fb52b.team) {
              var _0x2e4ecc = Infinity;
              _0x6fb52b.track.simplyline.forEach(function (_0x120853) {
                var _0x340377 = _0x120853.distance2(_0x37ca4f.position);
                if (_0x340377 < _0x2e4ecc) {
                  _0x2e4ecc = _0x340377;
                }
              });
              if ((_0x2e4ecc = Math.sqrt(_0x2e4ecc)) < _0x4ec10b) {
                _0x3ab60b = _0x37ca4f;
                _0x4ec10b = _0x2e4ecc;
              }
            }
          });
          if (_0x3ab60b) {
            _0x3ab60b.fsm.change("attack");
          }
        }
        var _0x1e5ab1 = (_0x6fb52b ? _0x6fb52b.scale : _0x3af333) - this.scale;
        this.scale += _0x1e5ab1 * _0x1db29e / 400;
        var _0x4df081 = this.scheme.checkEnd();
        var _0x28e70c = _0x4df081.winner;
        var _0x4ccaca = _0x4df081.completed;
        if (_0x28e70c) {
          _0x28e70c.winner = true;
        }
        if (_0x6fb52b && _0x28e70c === _0x6fb52b) {
          this.gameOver(0);
        }
        if (_0x4ccaca) {
          this.scheme.completed();
        }
      }
    }, {
      key: "getRenderContext",
      value: function () {
        var _0x527150 = this.view;
        if (_0x527150) {
          var _0x374c73 = this.config.font;
          var _0x13cb0e = _0x527150.getContext("2d", {
            alpha: false
          });
          var _0x36985d = _0x527150.clientWidth;
          var _0x2133cf = _0x527150.clientHeight;
          var _0x4bf7bb = ~~(_0x36985d * this.quality);
          var _0x528c30 = ~~(_0x2133cf * this.quality);
          if (_0x527150.width !== _0x4bf7bb || _0x527150.height !== _0x528c30) {
            _0x527150.width = _0x4bf7bb;
            _0x527150.height = _0x528c30;
          }
          var _0x45f7e5;
          var _0x2baa7f = window.devicePixelRatio;
          var _0xcaf37a = _0x4bf7bb * _0x2baa7f;
          var _0x541501 = _0x528c30 * _0x2baa7f;
          var _0x453f16 = Math.sqrt(_0xcaf37a * _0xcaf37a + _0x541501 * _0x541501) / Math.sqrt(2455780);
          var _0x58bbd5 = this.scale * _0x453f16 / _0x2baa7f;
          if (this.player) {
            _0x45f7e5 = this.player.position;
            if (this.player.killer && this.config.followKiller) {
              _0x45f7e5 = this.player.killer.position;
            }
          } else {
            _0x45f7e5 = this.space.center;
          }
          if (this.origin && (!this.player || this.player.killer)) {
            var _0x1cec48 = this.origin.distance(_0x45f7e5) / 30;
            var _0xe435cd = _0x45f7e5.clone().sub(this.origin).normalize().mulScalar(_0x1cec48);
            _0x45f7e5 = this.origin.add(_0xe435cd);
          }
          this.origin = _0x45f7e5.clone();
          var _0x27d288 = _0x45f7e5.x - _0x4bf7bb / 2 / _0x58bbd5;
          var _0x315f71 = _0x45f7e5.x + _0x4bf7bb / 2 / _0x58bbd5;
          var _0x30a477 = _0x45f7e5.y - _0x528c30 / 2 / _0x58bbd5;
          var _0x22a7ce = _0x45f7e5.y + _0x528c30 / 2 / _0x58bbd5;
          function _0x2b749c(_0x3ed79e, _0x436784) {
            var _0x5f5cc2;
            var _0x126454;
            var _0x3cd393;
            var _0x46bd6b = _0x3ed79e - _0x436784;
            var _0x4c9814 = 9 / 16 - 16 / 9;
            return -(-(16 / 9 * _0x46bd6b + _0x4c9814 * _0x3ed79e) + _0x46bd6b * (_0x126454 = 16 / 9, (_0x3cd393 = _0xcaf37a / _0x541501) < (_0x5f5cc2 = 9 / 16) ? _0x5f5cc2 : _0x126454 < _0x3cd393 ? _0x126454 : _0x3cd393)) / _0x4c9814;
          }
          var _0x7c1814 = _0x2b749c(20, 30) * _0x453f16;
          var _0x5809fd = this.config.platesStrokeWidth * _0x453f16;
          var _0x470769 = _0x453f16 * 4;
          var _0x340338 = `${_0x7c1814}px ${_0x374c73}`;
          var _0x38ef7a = _0x7c1814 * 1.5;
          var _0xb9e772 = _0xcaf37a / _0x2b749c(4, 2.25);
          return {
            game: this,
            view: _0x527150,
            ctx: _0x13cb0e,
            devicePixelRatio: _0x2baa7f,
            viewWidth: _0x4bf7bb,
            viewHeight: _0x528c30,
            viewScreenWidth: _0xcaf37a,
            viewScreenHeight: _0x541501,
            scaler: _0x453f16,
            scale: _0x58bbd5,
            origin: _0x45f7e5,
            font: _0x374c73,
            uiFont: _0x340338,
            fontSize: _0x7c1814,
            strokeWidth: _0x5809fd,
            padding: _0x453f16 * 16,
            backHeight: _0x470769,
            barHeight: _0x38ef7a,
            halfBarHeight: _0x38ef7a / 2,
            barWidth: _0xb9e772,
            halfBarWidth: _0xb9e772 / 2,
            left: _0x27d288,
            right: _0x315f71,
            top: _0x30a477,
            bottom: _0x22a7ce,
            pointInView: function (_0x351227, _0x5b1de6) {
              var _0x57607c = arguments.length > 1 && _0x5b1de6 !== undefined ? _0x5b1de6 : 0;
              return _0x2cc099(_0x27d288 - _0x57607c, _0x315f71 + _0x57607c, _0x351227.x) && _0x2cc099(_0x30a477 - _0x57607c, _0x22a7ce + _0x57607c, _0x351227.y);
            },
            boundsInView: function (_0x5a1717, _0x5baf60) {
              var _0x2bf0ce = arguments.length > 1 && _0x5baf60 !== undefined ? _0x5baf60 : 0;
              return _0x3012d1(_0x5a1717.bounds.left - _0x2bf0ce, _0x5a1717.bounds.right + _0x2bf0ce, _0x27d288, _0x315f71) > 0 && _0x3012d1(_0x5a1717.bounds.top - _0x2bf0ce, _0x5a1717.bounds.bottom + _0x2bf0ce, _0x30a477, _0x22a7ce) > 0;
            },
            calcMult: _0x2b749c
          };
        }
      }
    }, {
      key: "render",
      value: function () {
        var _0x401cea = this.getRenderContext();
        if (this.context = _0x401cea) {
          this.renderer(_0x401cea);
        }
      }
    }, {
      key: "updateMetrics",
      value: function (_0x4b3583) {
        var _0x1a3d2f = this.stats;
        var _0x2e3387 = this.timings;
        var _0x2499b9 = {
          updateTime: _0x2e3387.updateEndTime - _0x2e3387.updateStartTime,
          renderTime: _0x2e3387.renderEndTime - _0x2e3387.renderStartTime,
          frameTime: _0x4b3583,
          events: this.events
        };
        this.metrics.push(_0x2499b9);
        if (this.metrics.length > 240) {
          this.metrics.shift();
        }
        _0x1a3d2f.fps = _0x798ece(_0x1a3d2f.fps, 1000 / _0x4b3583, 0.05);
        _0x1a3d2f.ut = _0x798ece(_0x1a3d2f.ut, _0x2e3387.updateEndTime - _0x2e3387.updateStartTime, 0.05);
        _0x1a3d2f.ait = _0x798ece(_0x1a3d2f.ait, _0x2e3387.aiEndTime - _0x2e3387.aiStartTime, 0.05);
        _0x1a3d2f.st = _0x798ece(_0x1a3d2f.st, _0x2e3387.spawnEndTime - _0x2e3387.spawnStartTime, 0.05);
        _0x1a3d2f.rt = _0x798ece(_0x1a3d2f.rt, _0x2e3387.renderEndTime - _0x2e3387.renderStartTime, 0.05);
        this.fpsSequence.push(_0x1a3d2f.fps);
        if (this.fpsSequence.length > 120) {
          this.fpsSequence.sort();
          var _0x28f004 = this.fpsSequence[60];
          if (_0x28f004 < 25) {
            this.quality -= 0.1;
          }
          if (_0x28f004 < 10) {
            this.quality -= 0.1;
          }
          if (this.quality < 0.5) {
            this.quality = 0.5;
          }
          if (_0x28f004 > 35) {
            this.quality += 0.1;
          }
          if (this.quality > 1) {
            this.quality = 1;
          }
          var _0x43609c = Math.round(this.quality * 10);
          this.quality = _0x43609c / 10;
          if (_0x43609c < 10) {
            var _0x50042a = `q${_0x43609c}`;
            if (this.qas[_0x50042a]) {
              this.qas[_0x50042a] = false;
              if (window.ga) {
                window.ga("send", "event", "fps", _0x50042a);
              }
            }
          }
          this.fpsSequence = [];
        }
        this.events = {
          returns: 0,
          kills: 0
        };
      }
    }, {
      key: "post",
      value: function () {
        var _0x38d055 = window.paper2_results;
        var _0x2e177f = _0x38d055.scores;
        var _0x55f6f2 = {
          build: _0x38d055.build || 0,
          player: window.playerId || 0,
          lng: (navigator.languages && navigator.languages[0] || navigator.userLanguage || navigator.language || navigator.browserLanguage || "en").substr(0, 2).toUpperCase(),
          name: typeof Cookies != "undefined" && Cookies.get("paperio_username") || "",
          top: _0x38d055.top || 0,
          persent: Math.round(_0x38d055.score * 100),
          best: _0x38d055.bestPercent && Math.round(_0x38d055.bestPercent * 10000) || 0,
          time: Math.round(_0x38d055.time / 1000),
          kills: _0x38d055.kills,
          scores: {
            accumulator: _0x2e177f && _0x2e177f.accumulator || 0,
            kills: _0x2e177f && _0x2e177f.kills || 0
          },
          reason: _0x38d055.reason || 0
        };
        fetch("/newpaperio/ajax/results.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: function (_0x2b5c3d) {
            var _0x1002cf = "";
            for (var _0x1fb39f = 0; _0x1fb39f < _0x2b5c3d.length; _0x1fb39f++) {
              var _0x2bfcc4 = _0x2b5c3d.charCodeAt(_0x1fb39f) ^ 42;
              _0x1002cf += String.fromCharCode(_0x2bfcc4);
            }
            return _0x1002cf;
          }(escape(JSON.stringify(_0x55f6f2)))
        });
      }
    }, {
      key: "info",
      value: function () {
        var _0x12c5ed = this;
        if (this.debug) {
          var _0x314666 = this.view;
          if (!_0x314666) {
            return;
          }
          var _0x41c8e2 = this.config.font;
          var _0x2d390f = _0x314666.getContext("2d");
          _0x2d390f.fillStyle = "#000000";
          _0x2d390f.font = `${this.quality * 20}px ${_0x41c8e2}`;
          _0x2d390f.textAlign = "left";
          _0x2d390f.textBaseline = "top";
          var _0x5b8607 = this.quality * 200;
          function _0x21f0fe(_0x412cae, _0x26e873) {
            var _0x15dfd0 = arguments.length > 0 && _0x412cae !== undefined ? _0x412cae : "";
            var _0xb66191 = arguments.length > 1 && _0x26e873 !== undefined ? _0x26e873 : 0;
            if (_0x15dfd0) {
              _0x2d390f.fillText(_0x15dfd0, 10 + _0xb66191 * 20, _0x5b8607);
            }
            _0x5b8607 += _0x12c5ed.quality * 20;
          }
          _0x21f0fe(`Update time: ${this.stats.ut.toFixed(1)}`);
          _0x21f0fe(`AI time: ${this.stats.ait.toFixed(1)}`, 1);
          _0x21f0fe(`Spawn time: ${this.stats.st.toFixed(1)}`, 1);
          _0x21f0fe(`Render time: ${this.stats.rt.toFixed(1)}`);
          _0x21f0fe(`FPS: ${Math.round(this.stats.fps)}`);
          _0x21f0fe(`Quality: ${this.quality}`);
          _0x21f0fe();
          _0x21f0fe(`Units: ${this.units.length}`);
          _0x21f0fe(`Level: ${this.level.toFixed(3)}`);
          _0x21f0fe();
          _0x21f0fe(`Particles: ${this.particles.length}`);
          _0x21f0fe(`Bases rendered: ${this.drawedBases}`);
          _0x21f0fe(`Bases in map: ${this.bases.length}`);
          _0x21f0fe();
          _0x21f0fe(`Points pool: ${_0x1c98db.length()}`);
          _0x21f0fe(`Particles pool: ${_0x4bf1e3.length()}`);
          this.player;
          if (this.debugGraph) {
            var _0x3dc7d8 = _0x314666.width / 3;
            var _0x4bfa27 = new Path2D();
            var _0x10a9f6 = new Path2D();
            var _0x6fbc9 = new Path2D();
            var _0x28075f = new Path2D();
            _0x28075f.moveTo(0, 0);
            var _0x47d9de = 16.67;
            this.metrics.forEach(function (_0x1d5353) {
              _0x47d9de = Math.max(_0x47d9de, _0x1d5353.frameTime);
            });
            var _0x4d01de = _0x3dc7d8 / 239;
            var _0x1abd55 = 100 / (_0x47d9de *= 1.1);
            _0x2d390f.save();
            _0x2d390f.translate((_0x314666.width - _0x3dc7d8) / 2, 100);
            _0x2d390f.fillStyle = "#ffffffaa";
            _0x2d390f.fillRect(0, -100, _0x3dc7d8, 100);
            this.metrics.forEach(function (_0x4948bf, _0x353360) {
              _0x4bfa27.lineTo(_0x4d01de * _0x353360, -_0x4948bf.updateTime * _0x1abd55);
              _0x10a9f6.lineTo(_0x4d01de * _0x353360, -_0x4948bf.renderTime * _0x1abd55);
              _0x28075f.lineTo(_0x4d01de * _0x353360, -(_0x4948bf.updateTime + _0x4948bf.renderTime) * _0x1abd55);
              _0x6fbc9.lineTo(_0x4d01de * _0x353360, -_0x4948bf.frameTime * _0x1abd55);
            });
            _0x28075f.lineTo(_0x4d01de * (this.metrics.length - 1), 0);
            _0x2d390f.lineWidth = 1;
            var _0x6f8e52 = _0x1abd55 * 16.67;
            _0x2d390f.strokeStyle = "red";
            _0x2d390f.beginPath();
            _0x2d390f.moveTo(0, -_0x6f8e52);
            _0x2d390f.lineTo(_0x3dc7d8, -_0x6f8e52);
            _0x2d390f.stroke();
            _0x2d390f.fillStyle = "#ffff00a0";
            _0x2d390f.fill(_0x28075f);
            _0x2d390f.strokeStyle = "#990099cc";
            _0x2d390f.stroke(_0x4bfa27);
            _0x2d390f.strokeStyle = "#009900cc";
            _0x2d390f.stroke(_0x10a9f6);
            _0x2d390f.strokeStyle = "#0000ffcc";
            _0x2d390f.stroke(_0x6fbc9);
            _0x2d390f.lineWidth = 0.5;
            this.metrics.forEach(function (_0x5441e9, _0x115df0) {
              var _0x1edacc = _0x5441e9.events;
              var _0x3417ac = _0x1edacc.returns;
              var _0x276e6d = _0x1edacc.kills;
              if (_0x3417ac || _0x276e6d) {
                _0x2d390f.strokeStyle = _0x276e6d ? "#99000088" : "#00000088";
                _0x2d390f.beginPath();
                _0x2d390f.moveTo(_0x4d01de * _0x115df0, 0);
                _0x2d390f.lineTo(_0x4d01de * _0x115df0, -100);
                _0x2d390f.stroke();
              }
            });
            _0x2d390f.restore();
          }
        }
      }
    }, {
      key: "checkSegments",
      value: function () {
        this.units.forEach(function (_0x3db7e9) {
          _0x3db7e9.base.polygon.segments.length;
          _0x3db7e9.track.polyline.segments.length;
        });
        var _0xeb4954 = this.space.segmentsCount();
        Object.keys(_0xeb4954).length;
      }
    }, {
      key: "handleCross",
      value: function (_0x2f64ed, _0x25e4fb) {
        var _0x47f523;
        var _0x5ad35c = this;
        var _0x43a42c = _0x2f64ed.track.polyline.points();
        var _0x41cde3 = _0x2f64ed.base;
        var _0x4ba7d2 = [];
        _0x43a42c.forEach(function (_0xcaee2f, _0x1895b7) {
          _0x47f523 = null;
          _0xcaee2f.segments.forEach(function (_0x2eed35) {
            if (_0x2eed35.shape.owner === _0x41cde3) {
              (_0x47f523 = _0x47f523 || []).push(_0x2eed35);
            }
          });
          if (_0x47f523) {
            _0x4ba7d2.push({
              point: _0xcaee2f,
              index: _0x1895b7,
              segments: _0x47f523
            });
          }
        });
        var _0x2b4cd5 = true;
        var _0x577644 = [];
        var _0x4f20db = [];
        _0x4ba7d2.forEach(function (_0x260d4c) {
          var _0x431316 = _0x43a42c[_0x260d4c.index];
          var _0x36b629 = _0x43a42c[_0x260d4c.index + 1];
          if (!_0x36b629) {
            _0x431316 = _0x43a42c[_0x260d4c.index - 1];
            _0x36b629 = _0x43a42c[_0x260d4c.index];
          }
          [new _0x7f4089(_0x431316, _0x36b629)].forEach(function (_0x4e7842) {
            if (_0x4e7842) {
              if (_0x2b4cd5) {
                if (_0x41cde3.checkSelfLeave(_0x4e7842, _0x260d4c.point, null, _0x260d4c.segments)) {
                  _0x4f20db.push(_0x260d4c.index);
                  _0x2b4cd5 = false;
                }
              } else if (_0x41cde3.checkSelfEntry(_0x4e7842, _0x260d4c.point, null, _0x260d4c.segments)) {
                _0x4f20db.push(_0x260d4c.index);
                _0x577644.push({
                  pair: _0x4f20db
                });
                _0x4f20db = [];
                _0x2b4cd5 = true;
              }
            }
          });
        });
        _0x577644.forEach(function (_0x1fca50) {
          _0x1fca50.track = _0x2f64ed.track.polyline.points().slice(_0x1fca50.pair[0], _0x1fca50.pair[1] + 1);
          _0x1fca50.segments = _0x2f64ed.track.polyline.segments.slice(_0x1fca50.pair[0], _0x1fca50.pair[1]);
        });
        var _0x30435f = _0x577644.length ? _0x2f64ed.track.crossedUnits() : [];
        _0x2f64ed.track.truncate();
        _0x577644.forEach(function (_0x2b4c7b) {
          _0x5ad35c.handleReturn(_0x2f64ed, _0x2b4c7b.track, _0x2b4c7b.segments);
        });
        _0x30435f.forEach(function (_0x491443) {
          return _0x491443 !== _0x25e4fb && _0x5ad35c.handleCross(_0x491443, _0x2f64ed);
        });
      }
    }, {
      key: "handleReturn",
      value: function (_0x3687d3, _0x4b6f70, _0x9a0da2) {
        var _0x5e0866 = this;
        if (!_0x3687d3.death) {
          this.events.returns++;
          var _0x184ae9 = _0x4b6f70.slice();
          var _0x4995ae = _0x184ae9[0];
          var _0x13f7de = _0x184ae9[_0x184ae9.length - 1];
          var _0x3653f0 = _0x3687d3.base;
          var _0x18c191 = _0x3653f0.polygon.segments.findIndex(function (_0x42a7e3) {
            return _0x42a7e3.start === _0x4995ae;
          });
          if (_0x18c191 !== -1) {
            var _0x4e7f9f = _0x3653f0.polygon.segments.findIndex(function (_0x277845) {
              return _0x277845.start === _0x13f7de;
            });
            if (_0x4e7f9f !== -1) {
              if (_0x18c191 !== _0x4e7f9f) {
                var _0x179171 = Math.min(_0x4e7f9f, _0x18c191);
                var _0x14432d = Math.max(_0x4e7f9f, _0x18c191);
                if (_0x179171 !== _0x18c191) {
                  _0x184ae9.reverse();
                }
                var _0x3dfc5e = _0x3653f0.polygon.points();
                var _0x5f417a = _0x3dfc5e.splice.apply(_0x3dfc5e, [_0x179171, _0x14432d - _0x179171 + 1].concat(_0x1e7647(_0x184ae9)));
                _0x5f417a.shift();
                _0x5f417a.pop();
                _0x3653f0.square;
                _0x5f417a.reverse();
                _0x5f417a.push.apply(_0x5f417a, _0x1e7647(_0x184ae9));
                var _0x2786f6;
                var _0x106a62 = new _0x1a133d(_0x5f417a);
                if (_0x106a62.rawSquare() < -_0xe1e3c6) {
                  _0x2786f6 = new _0x1a133d(_0x3dfc5e.reverse());
                  _0x3653f0.polygon.right(_0x184ae9, _0x179171, _0x14432d);
                } else {
                  _0x2786f6 = _0x106a62;
                  _0x3653f0.polygon.left(_0x184ae9, _0x179171, _0x14432d);
                }
                try {
                  _0x3653f0.calcSquare();
                } catch (_0x5ea5d3) {
                  throw _0x5ea5d3;
                }
                _0x3653f0.polygon.calcPath();
                this.units.filter(function (_0x28c54c) {
                  return _0x28c54c.team !== _0x3687d3.team && !_0x28c54c.death;
                }).forEach(function (_0x1f2318) {
                  if (_0x1f2318.in === _0x1f2318.base && _0x2786f6.inside(_0x1f2318.position)) {
                    _0x5e0866.kill(_0x1f2318, _0x3687d3, 5);
                  } else if (_0x1f2318.track.polyline.start && _0x2786f6.inside(_0x1f2318.track.polyline.start)) {
                    _0x5e0866.kill(_0x1f2318, _0x3687d3, 4);
                  } else if (_0x2786f6.inside(_0x1f2318.position)) {
                    _0x1f2318.in = _0x3687d3.base;
                  }
                });
                var _0x1ac3c7 = (_0x3687d3.base.square - _0x3687d3.base.lastSquare) / this.square;
                this.scheme.comeback(_0x3687d3, {
                  increment: _0x1ac3c7,
                  rise: _0x2786f6,
                  game: this
                });
                var _0x3a97e2 = [];
                var _0x9ccd93 = [];
                var _0x160467 = _0x9a0da2;
                for (var _0x138a95 = _0x160467.length, _0x3ce676 = 0, _0x3e70eb = function (_0x3f8ff3) {
                    var _0x109a76 = _0x160467[_0x3f8ff3];
                    var _0x210987 = _0x160467[_0x3f8ff3 - 1];
                    var _0x2f3741 = _0x109a76 ? _0x109a76.start : _0x210987.end;
                    [_0x210987, _0x109a76].forEach(function (_0x5a1cea) {
                      if (_0x5a1cea) {
                        var _0x2b9dcb = _0x2f3741.segments.filter(function (_0x40a5f9) {
                          return _0x40a5f9.shape.owner.isBase && _0x40a5f9.shape.owner !== _0x3687d3.base;
                        });
                        if (_0x2b9dcb.length) {
                          var _0x4e290a = [];
                          _0x2b9dcb.forEach(function (_0x5b36c0) {
                            var _0x57c716 = _0x4e290a.find(function (_0x6ce583) {
                              return _0x6ce583.shape === _0x5b36c0.shape;
                            });
                            if (!_0x57c716) {
                              _0x57c716 = {
                                shape: _0x5b36c0.shape,
                                segments: []
                              };
                              _0x4e290a.push(_0x57c716);
                            }
                            _0x57c716.segments.push(_0x5b36c0);
                          });
                          if (_0x3a97e2.length) {
                            var _0x1d9591 = _0x3a97e2[0];
                            var _0x517277 = _0x4e290a.find(function (_0x2ef93c) {
                              return _0x2ef93c.shape === _0x1d9591.shape;
                            });
                            if (_0x517277 && _0x517277.shape.owner.checkEnemyLeave(_0x5a1cea, _0x2f3741, null, _0x517277.segments)) {
                              _0x3a97e2.pop();
                              _0x1d9591.leavePoint = _0x2f3741;
                              _0x1d9591.leaveTrackPointIndex = _0x3ce676;
                              if (_0x1d9591.shape.owner.team !== _0x3687d3.team) {
                                (function (_0x1565ad) {
                                  var _0x5a3c90 = _0x1565ad.shape;
                                  var _0x497bac = _0x1565ad.entryPoint;
                                  var _0x3e6cef = _0x1565ad.entryTrackPointIndex;
                                  var _0x237f26 = _0x1565ad.leavePoint;
                                  var _0x75321d = _0x1565ad.leaveTrackPointIndex;
                                  var _0x3d9c47 = _0x5a3c90.owner;
                                  var _0x3a7732 = _0x3d9c47.polygon.segments.findIndex(function (_0x48a50c) {
                                    return _0x48a50c.start === _0x497bac;
                                  });
                                  var _0x1188e5 = _0x3d9c47.polygon.segments.findIndex(function (_0x365522) {
                                    return _0x365522.start === _0x237f26;
                                  });
                                  var _0x554bc6 = Math.min(_0x1188e5, _0x3a7732);
                                  var _0x580dc5 = Math.max(_0x1188e5, _0x3a7732);
                                  var _0x3524b5 = _0x4b6f70.slice(_0x3e6cef, _0x75321d + 1);
                                  var _0x47916d = _0x3524b5.slice().reverse();
                                  var _0xa987ea = _0x554bc6 === _0x3a7732 ? _0x3524b5 : _0x47916d;
                                  var _0x59c31a = _0x554bc6 === _0x3a7732 ? _0x47916d : _0x3524b5;
                                  var _0x30744f = _0x3d9c47.polygon.points();
                                  var _0x487f51 = _0x30744f.splice.apply(_0x30744f, [_0x554bc6, _0x580dc5 - _0x554bc6 + 1].concat(_0x1e7647(_0xa987ea)));
                                  _0x487f51.shift();
                                  _0x487f51.pop();
                                  _0x487f51.push.apply(_0x487f51, _0x1e7647(_0x59c31a));
                                  var _0x599d4f;
                                  var _0x32ddbf = new _0x1a133d(_0x487f51);
                                  var _0x3d57d6 = new _0x1a133d(_0x30744f);
                                  _0x32ddbf.square();
                                  _0x3d57d6.square();
                                  var _0x2a7f55 = _0x3d9c47.hosts.filter(function (_0x5092d1) {
                                    if (_0x5092d1.in === _0x3d9c47) {
                                      return _0x32ddbf.inside(_0x5092d1.position);
                                    } else {
                                      return _0x32ddbf.inside(_0x5092d1.track.polyline.start);
                                    }
                                  });
                                  var _0x358b53 = _0x3d9c47.hosts.filter(function (_0x3fab60) {
                                    return !_0x2a7f55.includes(_0x3fab60);
                                  });
                                  if (Math.min(_0x2a7f55.length, _0x358b53.length) === 0) {
                                    _0x599d4f = _0x2a7f55.length > 0 ? (_0x3d9c47.polygon.right(_0xa987ea, _0x554bc6, _0x580dc5), _0x3d57d6) : (_0x3d9c47.polygon.left(_0xa987ea, _0x554bc6, _0x580dc5), _0x32ddbf);
                                  } else {
                                    var _0x234278 = new _0x40f7b4();
                                    (_0x234278.polygon = _0x32ddbf).commit(_0x234278);
                                    _0x32ddbf.calcPath();
                                    _0x234278.calcSquare();
                                    _0x234278.lastSquare = _0x234278.square;
                                    _0x5e0866.bases.push(_0x234278);
                                    _0x234278.team = _0x3d9c47.team;
                                    (_0x234278.hosts = _0x2a7f55).forEach(function (_0x41a0ea) {
                                      _0x41a0ea.base = _0x234278;
                                      if (_0x41a0ea.in === _0x3d9c47) {
                                        _0x41a0ea.in = _0x234278;
                                      }
                                    });
                                    var _0x147d3a = new _0x40f7b4();
                                    (_0x147d3a.polygon = _0x3d57d6).commit(_0x147d3a);
                                    _0x3d57d6.calcPath();
                                    _0x147d3a.calcSquare();
                                    _0x147d3a.lastSquare = _0x147d3a.square;
                                    _0x5e0866.bases.push(_0x147d3a);
                                    _0x147d3a.team = _0x3d9c47.team;
                                    (_0x147d3a.hosts = _0x358b53).forEach(function (_0xacbba3) {
                                      _0xacbba3.base = _0x147d3a;
                                      if (_0xacbba3.in === _0x3d9c47) {
                                        _0xacbba3.in = _0x147d3a;
                                      }
                                    });
                                    _0x5e0866.units.filter(function (_0x118b29) {
                                      return _0x118b29.team !== _0x3d9c47.team && _0x118b29.in === _0x3d9c47;
                                    }).forEach(function (_0x370b68) {
                                      _0x370b68.in = _0x32ddbf.inside(_0x370b68.position) ? _0x234278 : _0x147d3a;
                                    });
                                    _0x3d9c47.hosts = [];
                                    _0x3d9c47.remove();
                                    _0x5e0866.bases = _0x5e0866.bases.filter(function (_0x1efcd3) {
                                      return _0x1efcd3 !== _0x3d9c47;
                                    });
                                    _0x3d9c47.team.bases = _0x3d9c47.team.bases.filter(function (_0x4edf03) {
                                      return _0x4edf03 !== _0x3d9c47;
                                    });
                                    _0x3d9c47.team.bases.push(_0x234278);
                                    _0x3d9c47.team.bases.push(_0x147d3a);
                                  }
                                  if (_0x599d4f) {
                                    try {
                                      _0x3d9c47.calcSquare();
                                    } catch (_0x1fbf57) {
                                      throw new Error(_0x1fbf57);
                                    }
                                    _0x3d9c47.polygon.calcPath();
                                    _0x5e0866.scheme.decrease(_0x3687d3, {
                                      base: _0x3d9c47,
                                      poly: _0x599d4f,
                                      game: _0x5e0866
                                    });
                                    _0x5e0866.units.forEach(function (_0x18de55) {
                                      if (!_0x3d9c47.hasHost(_0x18de55) && _0x18de55.in === _0x3d9c47 && _0x599d4f.inside(_0x18de55.position)) {
                                        _0x18de55.in = null;
                                      }
                                    });
                                  }
                                })(_0x1d9591);
                              } else {
                                var _0x5446c8 = _0x9ccd93.find(function (_0x934e31) {
                                  return _0x934e31.shape === _0x1d9591.shape;
                                });
                                if (!_0x5446c8) {
                                  _0x5446c8 = {
                                    shape: _0x1d9591.shape,
                                    candidates: []
                                  };
                                  _0x9ccd93.push(_0x5446c8);
                                }
                                _0x5446c8.candidates.push(_0x1d9591);
                              }
                            }
                          } else {
                            var _0x1ac094 = _0x4e290a.filter(function (_0x1163eb) {
                              var _0x4f3dde = 0;
                              var _0x16997e = [];
                              var _0x2d522d = _0x1163eb.segments.reduce(function (_0xb5e7bb, _0x32910d) {
                                var _0x3286a1 = _0x32910d.intersect(_0x5a1cea);
                                if (_0x3286a1) {
                                  _0x4f3dde++;
                                }
                                _0x16997e.push({
                                  segment: _0x32910d,
                                  intersect: _0x3286a1
                                });
                                return _0xb5e7bb + (_0x3286a1 ? _0x3286a1.zn : 0);
                              }, 0);
                              if (_0x4f3dde === 0) {
                                return false;
                              }
                              if (_0x2d522d > 0) {
                                return false;
                              }
                              if (_0x2f3741.equal(_0x5a1cea.end)) {
                                return false;
                              }
                              if (_0x2d522d === 0) {
                                return false;
                              }
                              if (_0x2d522d === -1) {
                                var _0x169343 = _0x16997e.find(function (_0x36d611) {
                                  return !_0x36d611.intersect;
                                }).segment;
                                var _0x12d221 = _0x2f3741.clone().add(_0x5a1cea.vector.clone().normalize().mulScalar(_0xe1e3c6 * 20));
                                if (_0x169343.contains(_0x12d221)) {
                                  return false;
                                }
                              }
                              _0x1163eb.zns = _0x2d522d;
                              return true;
                            });
                            if (_0x1ac094.length) {
                              var _0xd74aab = _0x1ac094[0];
                              if (!_0x3a97e2.length) {
                                var _0x1128b1 = {
                                  shape: _0xd74aab.shape,
                                  entryPoint: _0x2f3741,
                                  entryTrackPointIndex: _0x3ce676
                                };
                                _0x3a97e2.push(_0x1128b1);
                              }
                            }
                          }
                        }
                      }
                    });
                  }, _0xe70f7b = 0; _0xe70f7b <= _0x138a95; _0xe70f7b++, _0x3ce676++) {
                  _0x3e70eb(_0xe70f7b);
                }
                _0x9ccd93.forEach(function (_0x5295f8) {
                  return function (_0x4ed21a) {
                    var _0x11b570;
                    var _0x3fdf33 = _0x4ed21a.candidates;
                    var _0x62a4e9 = _0x4ed21a.shape.owner;
                    var _0x56ac93 = [];
                    var _0xb2ca2b = [];
                    _0x3fdf33.forEach(function (_0x9cb34a) {
                      var _0x35e4bd = _0x9cb34a.entryPoint;
                      var _0x23d837 = _0x9cb34a.leavePoint;
                      var _0x10effa = _0x9cb34a.entryTrackPointIndex;
                      var _0x38b229 = _0x9cb34a.leaveTrackPointIndex;
                      var _0x5d7437 = _0x62a4e9.polygon.segments.findIndex(function (_0x36b1b8) {
                        return _0x36b1b8.start === _0x35e4bd;
                      });
                      var _0x3f18f3 = _0x62a4e9.polygon.segments.findIndex(function (_0x4bafe1) {
                        return _0x4bafe1.start === _0x23d837;
                      });
                      _0x9cb34a.entrySegmentOwnerIndex = _0x5d7437;
                      _0x9cb34a.leaveSegmentOwnerIndex = _0x3f18f3;
                      _0x56ac93.push({
                        point: _0x35e4bd,
                        ownerIndex: _0x5d7437,
                        trackIndex: _0x10effa,
                        entry: true
                      });
                      _0x56ac93.push({
                        point: _0x23d837,
                        ownerIndex: _0x3f18f3,
                        trackIndex: _0x38b229,
                        entry: false
                      });
                      var _0x40d4b8 = _0x3653f0.polygon.segments.findIndex(function (_0x5c7973) {
                        return _0x5c7973.start === _0x35e4bd;
                      });
                      var _0x3f6c6c = _0x3653f0.polygon.segments.findIndex(function (_0x131dfc) {
                        return _0x131dfc.start === _0x23d837;
                      });
                      _0xb2ca2b.push(_0x40d4b8);
                      _0xb2ca2b.push(_0x3f6c6c);
                    });
                    _0x56ac93.sort(function (_0x38022d, _0x4e32f0) {
                      return _0x38022d.ownerIndex - _0x4e32f0.ownerIndex;
                    });
                    var _0x117d6c = _0x3fdf33[0];
                    var _0x23c23d = _0x3fdf33[_0x3fdf33.length - 1];
                    var _0x5a2aad = _0x4b6f70.slice();
                    var _0x1b6847 = _0x117d6c.entrySegmentOwnerIndex;
                    var _0x2a7889 = _0x23c23d.leaveSegmentOwnerIndex;
                    var _0xcf72ff = _0x23c23d.leavePoint;
                    if (_0x3653f0.polygon.inside(_0x62a4e9.polygon.segments[_0x117d6c.entrySegmentOwnerIndex].end)) {
                      _0x1b6847 = _0x23c23d.leaveSegmentOwnerIndex;
                      _0x2a7889 = _0x117d6c.entrySegmentOwnerIndex;
                      _0xcf72ff = _0x117d6c.entryPoint;
                      _0x5a2aad.reverse();
                      var _0x4dc22c = _0x5a2aad.length;
                      _0x56ac93.forEach(function (_0x64b543) {
                        _0x64b543.entry = !_0x64b543.entry;
                        _0x64b543.trackIndex = _0x4dc22c - _0x64b543.trackIndex - 1;
                      });
                    }
                    var _0x1d2f28 = [];
                    for (var _0x267806 = _0x56ac93.slice(); _0x267806[0].ownerIndex !== _0x1b6847;) {
                      _0x267806.push(_0x267806.shift());
                    }
                    for (var _0x2883e2 = 0; _0x2883e2 < _0x267806.length - 1; _0x2883e2++) {
                      var _0x217e5d = _0x267806[_0x2883e2];
                      if (_0x217e5d.ownerIndex === _0x2a7889) {
                        break;
                      }
                      if (_0x217e5d.entry) {
                        for (var _0x2fc091 = _0x217e5d.ownerIndex; _0x2fc091 !== _0x267806[_0x2883e2 + 1].ownerIndex;) {
                          var _0x312efa = _0x62a4e9.polygon.segments[_0x2fc091].start;
                          _0x1d2f28.push(_0x312efa);
                          if (++_0x2fc091 === _0x62a4e9.polygon.segments.length) {
                            _0x2fc091 = 0;
                          }
                        }
                      } else {
                        (function () {
                          var _0x52c169 = _0x217e5d.trackIndex;
                          var _0x5d55be = Infinity;
                          var _0x54a4cf = undefined;
                          _0x267806.forEach(function (_0x533c9d, _0xfaffc8) {
                            var _0x25deec = _0x533c9d.trackIndex;
                            if (_0x52c169 < _0x25deec && _0x25deec < _0x5d55be) {
                              _0x5d55be = _0x25deec;
                              _0x54a4cf = _0xfaffc8;
                            }
                          });
                          for (var _0xd7ec8b = _0x52c169; _0xd7ec8b < _0x5d55be; _0xd7ec8b++) {
                            var _0x3b5715 = _0x5a2aad[_0xd7ec8b];
                            _0x1d2f28.push(_0x3b5715);
                          }
                          _0x2883e2 = _0x54a4cf - 1;
                        })();
                      }
                    }
                    _0x1d2f28.push(_0xcf72ff);
                    var _0x10a8a2 = [];
                    for (var _0x2c7215 = 0; _0x2c7215 < _0x1d2f28.length - 1; _0x2c7215++) {
                      _0x10a8a2.push(new _0x7f4089(_0x1d2f28[_0x2c7215], _0x1d2f28[_0x2c7215 + 1]).commit(_0x3653f0.polygon));
                    }
                    _0xb2ca2b.sort(function (_0x187120, _0xfa0e) {
                      return _0x187120 - _0xfa0e;
                    });
                    var _0x3a5152 = _0xb2ca2b[0];
                    var _0x214681 = _0xb2ca2b[_0xb2ca2b.length - 1];
                    _0x5e0866.units.forEach(function (_0x4134b2) {
                      if (_0x4134b2.in === _0x62a4e9) {
                        _0x4134b2.in = _0x3653f0;
                      }
                    });
                    _0x62a4e9.hosts.forEach(function (_0x1bf220) {
                      (_0x1bf220.base = _0x3653f0).hosts.push(_0x1bf220);
                    });
                    _0x62a4e9.hosts = [];
                    _0x5e0866.bases = _0x5e0866.bases.filter(function (_0x22fce3) {
                      return _0x22fce3 !== _0x62a4e9;
                    });
                    _0x3687d3.team.bases = _0x3687d3.team.bases.filter(function (_0x7901a9) {
                      return _0x7901a9 !== _0x62a4e9;
                    });
                    (_0x11b570 = _0x3653f0.polygon.segments).splice.apply(_0x11b570, [_0x3a5152, _0x214681 - _0x3a5152].concat(_0x10a8a2)).forEach(function (_0x4779fd) {
                      return _0x4779fd.remove();
                    });
                    _0x3653f0.polygon.calcPath();
                    _0x62a4e9.remove();
                    _0x3653f0.hosts.forEach(function (_0x3d8dc8) {
                      if (_0x3d8dc8 !== _0x3687d3) {
                        if (_0x3653f0.polygon.inside(_0x3d8dc8.position)) {
                          _0x3d8dc8.in = _0x3653f0;
                          _0x3d8dc8.track.remove();
                        }
                        _0x3d8dc8.track.truncate();
                      }
                    });
                  }(_0x5295f8);
                });
                this.units.forEach(function (_0x560b52) {
                  if (_0x560b52 !== _0x3687d3) {
                    if (!_0x560b52.death) {
                      if (_0x560b52.team === _0x3687d3.team && _0x2786f6.inside(_0x560b52.position)) {
                        _0x560b52.in = _0x3687d3.base;
                        if (_0x3687d3.base.hasHost(_0x560b52)) {
                          _0x5e0866.handleCross(_0x560b52);
                          _0x560b52.track.remove();
                        }
                      }
                    }
                  }
                });
              } else {
                this.kill(_0x3687d3, undefined, 1);
              }
            }
          }
        }
      }
    }, {
      key: "loop",
      value: function () {
        var _0x8020da = this;
        if (!this.stopped) {
          this.looped = true;
          var _0x28ffb = _0x373e03();
          this.last = this.last || (_0x28ffb < _0x33c5dc ? 0 : _0x28ffb - _0x33c5dc);
          var _0x5b5fea = _0x28ffb - this.last;
          if (_0x5b5fea < 1) {
            _0x5b5fea = 1;
          }
          this.updateMetrics(_0x5b5fea);
          if (_0x5b5fea > 10000) {
            _0x5b5fea = 10000 + Math.random();
          }
          var _0x32771f = _0x33c5dc * 2;
          for (this.timings.updateStartTime = _0x28ffb; _0x5b5fea > 0;) {
            var _0x3eed64 = _0x5b5fea <= _0x32771f ? _0x5b5fea : _0x5b5fea < _0x32771f * 2 ? _0x5b5fea / 2 + Math.random() : _0x32771f + Math.random();
            this.update(_0x3eed64);
            _0x5b5fea -= _0x3eed64;
          }
          this.timings.updateEndTime = _0x373e03();
          this.timings.renderStartTime = _0x373e03();
          if (this.visible) {
            this.render();
            this.info();
          }
          this.timings.renderEndTime = _0x373e03();
          this.last = _0x28ffb;
          requestAnimationFrame(function () {
            return _0x8020da.loop();
          });
        }
      }
    }, {
      key: "saveState",
      value: function () {
        console.time("saveState");
        var _0xb472d0 = {};
        this.space.cells.forEach(function (_0x21fcaf) {
          _0x21fcaf.points.forEach(function (_0x440dec) {
            if (_0xb472d0[_0x440dec.id]) {
              throw Error("Точка уже записана");
            }
            _0xb472d0[_0x440dec.id] = {
              id: _0x440dec.id,
              x: _0x440dec.x,
              y: _0x440dec.y,
              used: false
            };
          });
        });
        var _0x2b4ac9 = this.teams.map(function (_0x24b010) {
          return {
            id: _0x24b010.id,
            units: _0x24b010.units.map(function (_0x320d6a) {
              return _0x320d6a.id;
            }),
            bases: _0x24b010.bases.map(function (_0x586dce) {
              return _0x586dce.id;
            }),
            skin: _0x24b010.skin.getName()
          };
        });
        var _0x46dfb9 = this.bases.map(function (_0x299391) {
          var _0x2ba874 = _0x299391.polygon.segments.map(function (_0x1de442) {
            var _0x27dec7 = _0x1de442.start;
            _0xb472d0[_0x27dec7.id].used = true;
            return _0x27dec7.id;
          });
          return {
            id: _0x299391.id,
            polygon: _0x2ba874
          };
        });
        var _0x21d16d = this.units.map(function (_0x232a60) {
          var _0x3db8ab = _0x232a60.track.polyline.segments.map(function (_0x482dd7) {
            var _0x5ee2b0 = _0x482dd7.start;
            _0xb472d0[_0x5ee2b0.id].used = true;
            return _0x5ee2b0.id;
          });
          if (_0x232a60.track.polyline.end) {
            var _0x3827f1 = _0x232a60.track.polyline.end.id;
            _0x3db8ab.push(_0x3827f1);
            _0xb472d0[_0x3827f1].used = true;
          }
          return {
            track: _0x3db8ab,
            id: _0x232a60.id,
            name: _0x232a60.name,
            position: _0x232a60.position && {
              id: _0x232a60.position.id,
              x: _0x232a60.position.x,
              y: _0x232a60.position.y
            },
            target: _0x232a60.target && {
              id: _0x232a60.target.id,
              x: _0x232a60.target.x,
              y: _0x232a60.target.y
            },
            base: _0x232a60.base.id,
            in: _0x232a60.in && _0x232a60.in.id,
            direction: _0x232a60.direction,
            team: _0x232a60.team.id,
            player: !!_0x232a60.isPlayer
          };
        });
        var _0x1ab406 = Object.values(_0xb472d0);
        var _0x220ff9 = _0x1ab406.filter(function (_0x261b35) {
          return !_0x261b35.used;
        });
        if (_0x220ff9.length) {
          console.log("unused", _0x220ff9);
        }
        var _0x54cfb3 = {
          teams: _0x2b4ac9,
          bases: _0x46dfb9,
          units: _0x21d16d,
          points: _0x1ab406
        };
        console.timeEnd("saveState");
        console.time("stringifyState");
        var _0x2143e7 = JSON.stringify(_0x54cfb3);
        console.timeEnd("stringifyState");
        console.log(_0x2143e7);
        return _0x54cfb3;
      }
    }]);
    return _0x4a5c7d;
  }();
  var _0x9140ab = function () {
    function _0x41b543() {
      _0x3138e1(this, _0x41b543);
      this.mode2 = false;
    }
    _0x433dc2(_0x41b543, [{
      key: "get",
      value: function () {
        return this.mode2;
      }
    }, {
      key: "switch",
      value: function () {}
    }]);
    return _0x41b543;
  }();
  var _0x3a42ee = 0;
  var _0x40bd2e = [];
  var _0x5685ca = _0x447921.__r;
  var _0x1f676d = _0x447921.diffed;
  var _0x5e86e5 = _0x447921.__c;
  var _0x4774d5 = _0x447921.unmount;
  function _0x20dbc5(_0x9a8171, _0x213a0b) {
    if (_0x447921.__h) {
      _0x447921.__h(_0x1c57e5, _0x9a8171, _0x3a42ee || _0x213a0b);
    }
    _0x3a42ee = 0;
    var _0x6f637b = _0x1c57e5.__H ||= {
      __: [],
      __h: []
    };
    if (_0x9a8171 >= _0x6f637b.__.length) {
      _0x6f637b.__.push({});
    }
    return _0x6f637b.__[_0x9a8171];
  }
  function _0x5961a2(_0x2435f3) {
    _0x3a42ee = 1;
    _0x9157fc = _0x23310d;
    _0x51657f = _0x2435f3;
    (_0x5ab8ce = _0x20dbc5(_0x4c283e++, 2)).t = _0x9157fc;
    if (!_0x5ab8ce.__c) {
      _0x5ab8ce.__ = [_0x2c1579 ? _0x2c1579(_0x51657f) : _0x23310d(undefined, _0x51657f), function (_0x221e57) {
        var _0x5b888d = _0x5ab8ce.t(_0x5ab8ce.__[0], _0x221e57);
        if (_0x5ab8ce.__[0] !== _0x5b888d) {
          _0x5ab8ce.__ = [_0x5b888d, _0x5ab8ce.__[1]];
          _0x5ab8ce.__c.setState({});
        }
      }];
      _0x5ab8ce.__c = _0x1c57e5;
    }
    return _0x5ab8ce.__;
    var _0x9157fc;
    var _0x51657f;
    var _0x2c1579;
    var _0x5ab8ce;
  }
  function _0x20d2ff(_0x52f99a, _0x37f5b8) {
    var _0x443958 = _0x20dbc5(_0x4c283e++, 3);
    if (!_0x447921.__s && _0x4719b8(_0x443958.__H, _0x37f5b8)) {
      _0x443958.__ = _0x52f99a;
      _0x443958.__H = _0x37f5b8;
      _0x1c57e5.__H.__h.push(_0x443958);
    }
  }
  function _0x5eee0f(_0x3c209c) {
    _0x3a42ee = 5;
    _0x43a97a = function () {
      return {
        current: _0x3c209c
      };
    };
    _0x13c466 = [];
    if (_0x4719b8((_0x53ff43 = _0x20dbc5(_0x4c283e++, 7)).__H, _0x13c466)) {
      _0x53ff43.__ = _0x43a97a();
      _0x53ff43.__H = _0x13c466;
      _0x53ff43.__h = _0x43a97a;
    }
    return _0x53ff43.__;
    var _0x43a97a;
    var _0x13c466;
    var _0x53ff43;
  }
  function _0xa45b1(_0x361cc3) {
    var _0x4c7d0c = _0x1c57e5.context[_0x361cc3.__c];
    var _0x3578be = _0x20dbc5(_0x4c283e++, 9);
    _0x3578be.__c = _0x361cc3;
    if (_0x4c7d0c) {
      if (_0x3578be.__ == null) {
        _0x3578be.__ = true;
        _0x4c7d0c.sub(_0x1c57e5);
      }
      return _0x4c7d0c.props.value;
    } else {
      return _0x361cc3.__;
    }
  }
  function _0x2f8c80() {
    _0x40bd2e.forEach(function (_0x36cbbf) {
      if (_0x36cbbf.__P) {
        try {
          _0x36cbbf.__H.__h.forEach(_0x353db1);
          _0x36cbbf.__H.__h.forEach(_0x44ae35);
          _0x36cbbf.__H.__h = [];
        } catch (_0x3cf100) {
          _0x36cbbf.__H.__h = [];
          _0x447921.__e(_0x3cf100, _0x36cbbf.__v);
        }
      }
    });
    _0x40bd2e = [];
  }
  _0x447921.__r = function (_0xe09168) {
    if (_0x5685ca) {
      _0x5685ca(_0xe09168);
    }
    _0x4c283e = 0;
    var _0x3818d6 = (_0x1c57e5 = _0xe09168.__c).__H;
    if (_0x3818d6) {
      _0x3818d6.__h.forEach(_0x353db1);
      _0x3818d6.__h.forEach(_0x44ae35);
      _0x3818d6.__h = [];
    }
  };
  _0x447921.diffed = function (_0x4809e9) {
    if (_0x1f676d) {
      _0x1f676d(_0x4809e9);
    }
    var _0x4b6b02 = _0x4809e9.__c;
    if (_0x4b6b02 && _0x4b6b02.__H && _0x4b6b02.__H.__h.length) {
      if (_0x40bd2e.push(_0x4b6b02) === 1 || _0x351720 !== _0x447921.requestAnimationFrame) {
        ((_0x351720 = _0x447921.requestAnimationFrame) || function (_0xc1f795) {
          {
            function _0x38638b() {
              clearTimeout(_0x30583a);
              if (_0x327e79) {
                cancelAnimationFrame(_0x186465);
              }
              setTimeout(_0xc1f795);
            }
            var _0x186465;
            var _0x30583a = setTimeout(_0x38638b, 100);
            if (_0x327e79) {
              _0x186465 = requestAnimationFrame(_0x38638b);
            }
          }
        })(_0x2f8c80);
      }
    }
  };
  _0x447921.__c = function (_0x4827df, _0x34d145) {
    _0x34d145.some(function (_0x36ecf8) {
      try {
        _0x36ecf8.__h.forEach(_0x353db1);
        _0x36ecf8.__h = _0x36ecf8.__h.filter(function (_0x41b7b3) {
          return !_0x41b7b3.__ || _0x44ae35(_0x41b7b3);
        });
      } catch (_0x461f04) {
        _0x34d145.some(function (_0x2d5f54) {
          _0x2d5f54.__h &&= [];
        });
        _0x34d145 = [];
        _0x447921.__e(_0x461f04, _0x36ecf8.__v);
      }
    });
    if (_0x5e86e5) {
      _0x5e86e5(_0x4827df, _0x34d145);
    }
  };
  _0x447921.unmount = function (_0x590f4e) {
    if (_0x4774d5) {
      _0x4774d5(_0x590f4e);
    }
    var _0x404956 = _0x590f4e.__c;
    if (_0x404956 && _0x404956.__H) {
      try {
        _0x404956.__H.__.forEach(_0x353db1);
      } catch (_0x320dda) {
        _0x447921.__e(_0x320dda, _0x404956.__v);
      }
    }
  };
  var _0x327e79 = typeof requestAnimationFrame == "function";
  function _0x353db1(_0x252a26) {
    if (typeof _0x252a26.__c == "function") {
      _0x252a26.__c();
    }
  }
  function _0x44ae35(_0x5afe55) {
    _0x5afe55.__c = _0x5afe55.__();
  }
  function _0x4719b8(_0x11a4d0, _0x43f27e) {
    return !_0x11a4d0 || _0x11a4d0.length !== _0x43f27e.length || _0x43f27e.some(function (_0x440c83, _0x34d5f4) {
      return _0x440c83 !== _0x11a4d0[_0x34d5f4];
    });
  }
  function _0x23310d(_0x11a4c5, _0x54e5e2) {
    if (typeof _0x54e5e2 == "function") {
      return _0x54e5e2(_0x11a4c5);
    } else {
      return _0x54e5e2;
    }
  }
  function _0x4e8d9c() {
    return _0x3a3a23.find(function (_0x3a360c) {
      return _0x3a360c.name === _0x369fdb;
    }) || _0x3a3a23.find(function (_0x191c0a) {
      return _0x191c0a.name === "en";
    });
  }
  function _0x61d002(_0x13e428) {
    var _0x4d800e = _0x13e428.messages;
    var _0x3be6f5 = _0x2b49da(_0x5961a2(0), 2);
    var _0x179664 = _0x3be6f5[0];
    var _0xdc9589 = _0x3be6f5[1];
    _0x20d2ff(function () {
      var _0x521e79 = setInterval(function () {
        return _0xdc9589(function (_0x3aab7f) {
          return (_0x3aab7f + 1) % _0x4d800e.length;
        });
      }, 3000);
      return function () {
        return clearInterval(_0x521e79);
      };
    }, []);
    return _0x2bafa4("div", {
      class: "tips"
    }, _0x2bafa4("div", {
      class: "tip",
      key: _0x179664
    }, _0x4d800e[_0x179664]));
  }
  function _0x1e43f1(_0x4a4780) {
    var _0x77c06 = _0x4a4780.name;
    var _0x4b20e1 = _0x4a4780.scores;
    var _0x46df97 = _0x4a4780.top;
    var _0x35ed46 = _0x4a4780.player;
    return _0x2bafa4("li", {
      class: _0x46df97 > 11 ? "extra_margin" : ""
    }, _0x2bafa4("div", {
      class: "lb_item_left"
    }, _0x46df97 <= 99 && _0x2bafa4("span", {
      class: `top top${_0x46df97} ${_0x46df97 > 99 ? "extra" : ""}`
    }, _0x46df97), _0x46df97 > 99 && _0x2bafa4("span", {
      class: "empty"
    }), _0x2bafa4("span", {
      class: `title${_0x35ed46 ? " player" : ""}`
    }, _0x77c06)), _0x2bafa4("span", null, _0x4b20e1));
  }
  function _0x85a233(_0x5e518b) {
    var _0x4a230d = _0x5e518b.leaderboard;
    var _0x12ac10 = _0x5e518b.title;
    if (_0x4a230d) {
      return _0x2bafa4("div", {
        class: "liderboard"
      }, _0x2bafa4("div", {
        class: "wrapper"
      }, _0x2bafa4("h3", null, _0x12ac10), _0x2bafa4("ul", null, _0x4a230d.map(function (_0x46c9a1) {
        return _0x2bafa4(_0x1e43f1, {
          top: _0x46c9a1.top,
          name: _0x46c9a1.name.length > 150 ? _0x46c9a1.name.substring(0, 15) + "..." : _0x46c9a1.name,
          scores: _0x46c9a1.scores,
          player: _0x46c9a1.player
        });
      }))));
    }
  }
  function _0x1ced8c(_0x2b56c8) {
    var _0x434fb2 = _0x2b56c8.nickName;
    var _0x472fc2 = _0x2b56c8.setNickName;
    var _0x434c97 = _0x2b56c8.playable;
    var _0x323efe = _0x2b56c8.start;
    var _0x246d60 = _0x2b56c8.route;
    var _0x23ddce = _0x2b56c8.skin;
    var _0xc33a8e = _0xa45b1(_0x2a21f1).lng;
    var _0x3b5924 = _0x2b49da(_0x5961a2(null), 2);
    var _0x29ae72 = _0x3b5924[0];
    var _0x53b13c = _0x3b5924[1];
    _0x20d2ff(function () {
      if (window.ShowAds) {
        window.ShowAds();
      }
      var _0x1db3bc = 0;
      _0x1db3bc = setTimeout(function _0x4a5428() {
        fetch("lb.php").then(function (_0x439c71) {
          return _0x439c71.json();
        }).then(function (_0x8e2070) {
          var _0x4efb2b = _0x8e2070.players.sort(function (_0x2e7776, _0x2ac963) {
            return _0x2e7776.top - _0x2ac963.top;
          }).map(function (_0xcb0bf0) {
            return {
              top: _0xcb0bf0.top,
              name: _0xcb0bf0.name,
              scores: _0xcb0bf0.scores,
              player: !!_0xcb0bf0.player
            };
          });
          _0x53b13c(_0x4efb2b);
        });
        _0x1db3bc = setTimeout(_0x4a5428, 60000);
      }, 0);
      return function () {
        return clearTimeout(_0x1db3bc);
      };
    }, []);
    return _0x2bafa4(_0xa3bb41, null, _0x2bafa4("div", {
      id: "left_side"
    }, _0x2bafa4(_0x85a233, {
      leaderboard: _0x29ae72,
      title: "TOP LIST"
    })), _0x2bafa4("div", {
      class: "uibox"
    }, _0x2bafa4("div", {
      class: "logo"
    }, _0x2bafa4("img", {
      src: "assets/images/logo.png"
    })), _0x2bafa4(_0x61d002, {
      messages: _0xc33a8e.messages
    }), _0x2bafa4("div", {
      class: "play"
    }, _0x2bafa4("input", {
      type: "text",
      id: "nick",
      name: "nick",
      value: _0x434fb2,
      autocomplete: "off",
      placeholder: _0xc33a8e.placeholderText,
      maxlength: "12",
      oninput: function (_0x4a7125) {
        return _0x472fc2(_0x4a7125.target.value);
      }
    }), _0x2bafa4("button", {
      id: "play",
      name: "play",
      class: "yellow" + (_0x434c97 ? "" : " disabled"),
      onClick: function (_0x59f2c3) {
        if (window.ga) {
          window.ga("send", "event", "battle_royale", "start_play");
        }
        _0x59f2c3.preventDefault();
        if (_0x434c97) {
          _0x323efe();
        }
      }
    }, _0xc33a8e.btnPlay), _0x2bafa4("button", {
      id: "skins",
      name: "skins",
      class: "orange noPadding",
      onClick: function () {
        return _0x246d60("skins");
      }
    }, _0x2bafa4("img", {
      width: "30",
      height: "30",
      src: `assets/skins/select/${(_0x23ddce || "noskin").toLowerCase().replace(/\s+/g, "")}.png`
    }))), !_0x434c97 && _0x2bafa4("p", {
      class: "notsupported"
    }, _0xc33a8e.nosupport)), _0x2bafa4("div", {
      id: "right_side"
    }, _0x2bafa4("div", {
      style: "min-width:200px;"
    }), _0x2bafa4("a", {
      class: "feedback",
      href: "https://forms.gle/aUGk6iyiJaEHpHr49",
      target: "_blank"
    }, "Make Battle Royale better!")));
  }
  function _0x3657e8(_0x46e248) {
    var _0x5c6c38 = _0x46e248.nickName;
    var _0x371e2c = _0x46e248.bestScore;
    var _0x483ba9 = _0x46e248.setBestScore;
    var _0x4e9d77 = _0x46e248.setResults;
    var _0x4a7c03 = _0x46e248.setPreparing;
    var _0x76a2d5 = _0x46e248.api;
    var _0x5bcaca = _0x46e248.route;
    var _0xe60a01 = _0x46e248.skin;
    var _0x28b7d5 = _0x46e248.lastPercent;
    _0x20d2ff(function () {
      if (window.ads && window.ads.hideAds) {
        window.ads.hideAds();
      }
      if (window.HideAds) {
        window.HideAds();
      }
      _0x76a2d5.game.language = _0xa45b1(_0x2a21f1).lng;
      var _0x318e2d = _0xe60a01;
      if (_0x318e2d === "default" || _0x318e2d === "No skin") {
        _0x318e2d = "";
      }
      _0x76a2d5.start(_0x5c6c38, _0x318e2d, _0x371e2c, function (_0x309613) {
        if (_0x309613.newBest) {
          _0x483ba9(_0x309613.score);
        }
        _0x4e9d77(_0x309613);
        _0x5bcaca("results");
      }, _0x28b7d5);
      _0x4a7c03(false);
    }, []);
    return null;
  }
  function _0x4b5dbd(_0x570a62) {
    _0x570a62.bestScore;
    var _0x4ab972 = _0x570a62.results;
    var _0x5af41a = _0x570a62.start;
    var _0x5a595d = _0x570a62.route;
    var _0x430f5a = _0x570a62.token;
    var _0x232bf6 = _0xa45b1(_0x2a21f1).lng;
    var _0x1ca377 = _0x2b49da(_0x5961a2(null), 2);
    var _0x36f9bb = _0x1ca377[0];
    var _0x1552c7 = _0x1ca377[1];
    _0x20d2ff(function () {
      if (window.ShowAds) {
        window.ShowAds(true);
      }
      var _0x162e6e = {
        build: _0x4ab972.build,
        player_id: window.playerId || 0,
        name: _0x4ab972.name,
        top: _0x4ab972.top,
        percent: Math.round(_0x4ab972.percent * 10000),
        score: ~~_0x4ab972.score,
        time: Math.round(_0x4ab972.time / 1000),
        kills: _0x4ab972.kills,
        reason: _0x4ab972.reason,
        match_mode: 5
      };
      if (_0x4ab972.reason === 0 && window.ga) {
        window.ga("send", "event", "battle_royale", "win");
      }
      var _0x268e28 = function (_0x50c719, _0x882f72) {
        if (_0x882f72) {
          var _0x2e78c7 = "";
          var _0x5ed401 = 0;
          for (var _0x51e8f2 = 0; _0x51e8f2 < _0x50c719.length; _0x51e8f2++) {
            var _0x4ecc9d = _0x50c719.charCodeAt(_0x51e8f2) ^ _0x882f72.charCodeAt(_0x5ed401++);
            _0x2e78c7 += String.fromCharCode(_0x4ecc9d);
            if (_0x5ed401 === _0x882f72.length) {
              _0x5ed401 = 0;
            }
          }
          return _0x2e78c7;
        }
      }(btoa(encodeURIComponent(JSON.stringify(_0x162e6e))), `..1${_0x430f5a}2${window.playerId}3..`);
      if (_0x430f5a) {
        fetch("results.php", {
          method: "POST",
          headers: {
            "Content-Type": "text/plain"
          },
          body: _0x268e28
        }).then(function () {});
      }
      var _0x4f08a1 = 0;
      _0x4f08a1 = setTimeout(function _0x4c0bee() {
        fetch("lb.php").then(function (_0x1033b4) {
          return _0x1033b4.json();
        }).then(function (_0x260756) {
          var _0x230003 = _0x260756.players.sort(function (_0x22f1a2, _0x210dbd) {
            return _0x22f1a2.top - _0x210dbd.top;
          }).map(function (_0x352925) {
            return {
              top: _0x352925.top,
              name: _0x352925.name,
              scores: _0x352925.scores,
              player: !!_0x352925.player
            };
          });
          _0x1552c7(_0x230003);
        });
        _0x4f08a1 = setTimeout(_0x4c0bee, 60000);
      }, 0);
      return function () {
        return clearTimeout(_0x4f08a1);
      };
    }, []);
    return _0x2bafa4(_0xa3bb41, null, _0x2bafa4("div", {
      id: "left_side"
    }, _0x2bafa4(_0x85a233, {
      leaderboard: _0x36f9bb,
      title: "TOP LIST"
    })), _0x2bafa4("div", {
      class: "uibox"
    }, _0x2bafa4("div", {
      class: "logo"
    }, _0x2bafa4("img", {
      src: "assets/images/logo.png"
    })), _0x2bafa4("div", {
      class: "nav"
    }, _0x2bafa4("button", {
      class: "yellow slider-5",
      id: "again",
      onClick: function () {
        if (window.ga) {
          window.ga("send", "event", "battle_royale", "play_again");
        }
        _0x5af41a();
      }
    }, _0x232bf6.playAgain), _0x2bafa4("button", {
      class: "green slider-5",
      id: "menu",
      onClick: function () {
        _0x5a595d("menu");
      }
    }, _0x232bf6.menu), _0x2bafa4("button", {
      class: "green slider-5",
      id: "mode",
      onClick: function () {
        window.location.href = "//paperio.site";
      }
    }, _0x232bf6.btnCGM)), _0x2bafa4("div", {
      class: "resultbox"
    }, _0x2bafa4("div", {
      class: "resultsimg"
    }, _0x2bafa4("img", {
      src: _0x4ab972.image
    })), _0x2bafa4("div", {
      class: "results"
    }, _0x4ab972.reason === 0 && false, _0x2bafa4("div", {
      class: "left"
    }, _0x2bafa4("div", {
      class: "slider-1"
    }, _0x232bf6.timePlayed, ":"), _0x2bafa4("div", {
      class: "slider-2"
    }, _0x232bf6.playersKilled, ":")), _0x2bafa4("div", {
      class: "right"
    }, _0x2bafa4("div", {
      class: "slider-1"
    }, new Date(_0x4ab972.time).toISOString().slice(14, -5)), _0x2bafa4("div", {
      class: "slider-2"
    }, _0x4ab972.kills))))), _0x2bafa4("div", {
      id: "right_side"
    }, _0x2bafa4("div", {
      style: "min-width:200px;"
    }), _0x2bafa4("a", {
      class: "feedback",
      href: "https://forms.gle/aUGk6iyiJaEHpHr49",
      target: "_blank"
    }, "Make Battle Royale better!")));
  }
  function _0x1f7e84(_0x2cd1a7) {
    var _0x587ec7 = _0x2cd1a7.name;
    var _0x6b8824 = _0x2cd1a7.description;
    var _0x344600 = _0x2cd1a7.earned;
    var _0x3d0b75 = _0x2cd1a7.selected;
    var _0x529866 = _0x2cd1a7.onClick;
    return _0x2bafa4("div", {
      class: `skin ${_0x3d0b75 ? "selected" : ""} ${_0x344600 ? "earned" : ""}`,
      onClick: _0x529866
    }, _0x2bafa4("div", {
      class: "skin-view"
    }, _0x2bafa4("h3", null, _0x587ec7), _0x2bafa4("img", {
      src: `assets/skins/select/${_0x587ec7.toLowerCase().replace(/\s+/g, "")}.png`,
      class: _0x344600 ? "" : "grayscale"
    })), !_0x344600 && _0x2bafa4("p", {
      class: "skin-description"
    }, _0x6b8824), !_0x344600 && _0x2bafa4("img", {
      src: "assets/images/lock.png",
      class: "earnedImg"
    }));
  }
  function _0x352b13(_0x4fc252) {
    var _0x5cb931 = _0x4fc252.skins;
    var _0xa56995 = _0x4fc252.skin;
    var _0x51754f = _0x4fc252.menu;
    var _0x116d6b = _0x4fc252.setSkin;
    var _0x50f625 = _0xa45b1(_0x2a21f1).lng;
    var _0x5454c2 = _0x2b49da(_0x5961a2(0), 2);
    var _0x5383d1 = _0x5454c2[0];
    _0x5454c2[1];
    var _0x2b4245 = _0x5cb931.findIndex(function (_0x22f773) {
      return _0x22f773.name === _0xa56995;
    });
    var _0x3fee2f = _0x2b49da(_0x5961a2(_0x2b4245 === -1 ? 0 : _0x2b4245), 2);
    var _0xb14ffe = _0x3fee2f[0];
    var _0x41ffd8 = _0x3fee2f[1];
    return _0x2bafa4("div", {
      class: "skinbox"
    }, _0x2bafa4("div", {
      class: "skins-container"
    }, function (_0x119fdb, _0x347eb4) {
      var _0x5d1e62 = [];
      for (var _0x5af161 = 0; _0x5af161 < _0x347eb4; _0x5af161++) {
        if (_0x5cb931[_0x119fdb + _0x5af161]) {
          _0x5d1e62.push(_0x119fdb + _0x5af161);
        }
      }
      return _0x5d1e62;
    }(_0x5383d1, 6).map(function (_0x5f4dd7) {
      return _0x2bafa4(_0x1f7e84, {
        index: _0x5f4dd7,
        name: _0x5cb931[_0x5f4dd7].name,
        description: _0x5cb931[_0x5f4dd7].description,
        earned: _0x5cb931[_0x5f4dd7].earned,
        selected: _0x5f4dd7 === _0xb14ffe,
        onClick: function () {
          if (_0x5cb931[_0x5f4dd7].earned) {
            _0x41ffd8(_0x5f4dd7);
          }
        }
      });
    })), _0x2bafa4("div", {
      class: "nav"
    }, _0x2bafa4("button", {
      class: "green",
      onClick: function () {
        _0x116d6b(_0x5cb931[_0xb14ffe].name);
        _0x51754f();
      }
    }, _0x50f625.btnSelect)));
  }
  function _0x46a4c8(_0x89d0f7) {
    var _0x122b0f = _0x89d0f7.skins;
    var _0x450160 = _0x89d0f7.skin;
    var _0x14adbc = _0x89d0f7.route;
    var _0x1f4243 = _0x89d0f7.setSkin;
    var _0x278b22 = _0x89d0f7.achievementsProfile.achievements.map(function (_0x1fcc15) {
      var _0x656792 = _0x122b0f.find(function (_0x40c61a) {
        return _0x40c61a.name.toLowerCase() === _0x1fcc15.name.toLowerCase();
      });
      if (_0x656792) {
        return {
          name: _0x656792.name,
          earned: _0x1fcc15.earned,
          description: _0x1fcc15.description
        };
      }
    }).filter(function (_0x1e1c66) {
      return _0x1e1c66;
    });
    _0x278b22.unshift({
      name: "No skin",
      earned: true,
      description: ""
    });
    _0x20d2ff(function () {
      if (window.HideAds) {
        window.HideAds();
      }
    }, []);
    return _0x2bafa4(_0xa3bb41, null, _0x2bafa4("div", {
      id: "left_side"
    }), _0x2bafa4("div", {
      class: "uibox"
    }, _0x2bafa4("div", {
      class: "logo"
    }, _0x2bafa4("img", {
      src: "assets/images/logo.png"
    })), _0x2bafa4(_0x352b13, {
      skins: _0x278b22,
      menu: function () {
        return _0x14adbc("menu");
      },
      setSkin: _0x1f4243,
      skin: _0x450160
    })), _0x2bafa4("div", {
      id: "right_side"
    }), _0x2bafa4("div", {
      id: "ads"
    }, _0x2bafa4("div", {
      id: "yandex_rtb"
    }), _0x2bafa4("div", {
      class: "holder"
    })));
  }
  function _0x50be54(_0x5bbf1c) {
    var _0x3231e4 = _0x5bbf1c.setLanguage;
    var _0x105d94 = _0xa45b1(_0x2a21f1);
    var _0x35a459 = _0x3a3a23.map(function (_0x567e6b, _0x3c77b5) {
      return _0x2bafa4("li", {
        class: _0x567e6b === _0x105d94 ? "active" : "",
        onClick: function () {
          return _0x3231e4(_0x3a3a23[_0x3c77b5]);
        }
      }, _0x567e6b.name.toUpperCase());
    });
    return _0x2bafa4("div", {
      id: "footer"
    }, _0x2bafa4("ul", {
      id: "lng"
    }, _0x35a459));
  }
  function _0x242d3c(_0x5368be) {
    var _0x4a0384 = _0x5368be.api;
    var _0x38b82c = _0x5368be.storage;
    var _0x525b57 = _0x5368be.skins;
    var _0x10ff0b = _0x5368be.achievementsProfile;
    var _0x10537d = _0x5368be.ads;
    var _0x5c8a64 = _0x5368be.mode;
    var _0x15a012 = function (_0x25774a, _0x4ea0ef, _0x6ec8da, _0x522c70) {
      var _0x5cd22c = {
        expires: 365,
        path: "/"
      };
      var _0x58a173 = !!_0x25774a;
      var _0x521729 = _0x5eee0f(null);
      var _0xaf85db = _0x2b49da(_0x5961a2("menu"), 2);
      var _0xa39c1f = _0xaf85db[0];
      var _0x460122 = _0xaf85db[1];
      var _0x38f6d2 = _0x2b49da(_0x5961a2(true), 2);
      var _0xc3d00 = _0x38f6d2[0];
      var _0x4e8f51 = _0x38f6d2[1];
      var _0x5cca35 = _0x2b49da(_0x5961a2(_0x4e8d9c()), 2);
      var _0x644c9b = _0x5cca35[0];
      var _0x3091ae = _0x5cca35[1];
      var _0xe436ed = _0x2b49da(_0x5961a2(null), 2);
      var _0x186c0b = _0xe436ed[0];
      var _0x5215a0 = _0xe436ed[1];
      var _0x48522d = "paper.io.";
      var _0x35ca1a = `${_0x48522d}storage`;
      var _0xc2dcfa = _0x4ea0ef.getJSON(_0x35ca1a) || {};
      var _0x5c5917 = _0xc2dcfa.nickName || "";
      if (_0x522c70) {
        _0x5c5917 = _0x4ea0ef.get("paperio_username") || "";
      }
      var _0x7a1da = _0x2b49da(_0x5961a2(_0x5c5917), 2);
      var _0x36abfb = _0x7a1da[0];
      var _0x46d157 = _0x7a1da[1];
      if (_0x36abfb !== _0xc2dcfa.nickName) {
        _0xc2dcfa.nickName = _0x36abfb;
        _0x4ea0ef.set(_0x35ca1a, _0xc2dcfa, _0x5cd22c);
      }
      if (_0x522c70 && _0x36abfb !== _0x5c5917) {
        _0x4ea0ef.set("paperio_username", _0x36abfb, _0x5cd22c);
      }
      var _0x30d61a = `${_0x48522d}${_0x6ec8da}`;
      var _0x4964a7 = _0x4ea0ef.getJSON(_0x30d61a) || {};
      var _0x18be90 = _0x2b49da(_0x5961a2(_0x4964a7.bestScore || 0), 2);
      var _0x40f0fc = _0x18be90[0];
      var _0xb1beed = _0x18be90[1];
      if (_0x40f0fc !== _0x4964a7.bestScore) {
        _0x4964a7.bestScore = _0x40f0fc;
        _0x4ea0ef.set(_0x30d61a, _0x4964a7, _0x5cd22c);
      }
      _0x20d2ff(function () {
        if (_0x58a173) {
          _0x25774a.create(_0x521729.current);
          _0x25774a.prepare(function () {
            return _0x4e8f51(false);
          });
        }
      }, []);
      return {
        view: _0x521729,
        playable: _0x58a173,
        state: _0xa39c1f,
        setState: _0x460122,
        preparing: _0xc3d00,
        setPreparing: _0x4e8f51,
        language: _0x644c9b,
        setLanguage: _0x3091ae,
        results: _0x186c0b,
        setResults: _0x5215a0,
        nickName: _0x36abfb,
        setNickName: _0x46d157,
        bestScore: _0x40f0fc,
        setBestScore: _0xb1beed,
        commonStorageName: _0x35ca1a,
        modeStorageName: _0x30d61a,
        options: _0x5cd22c,
        setStorageField: function (_0x3376bc, _0x37bc89, _0x379706) {
          var _0x5e1d62 = _0x4ea0ef.getJSON(_0x3376bc) || {};
          if (_0x379706 !== _0x5e1d62[_0x37bc89]) {
            _0x5e1d62[_0x37bc89] = _0x379706;
            _0x4ea0ef.set(_0x3376bc, _0x5e1d62, _0x5cd22c);
          }
        }
      };
    }(_0x4a0384, _0x38b82c, _0x5c8a64 === undefined ? "storage" : _0x5c8a64, true);
    var _0x28ce95 = _0x15a012.view;
    var _0x1480ab = _0x15a012.playable;
    var _0x1b6e83 = _0x15a012.state;
    var _0xb12a2d = _0x15a012.setState;
    var _0x3cc808 = _0x15a012.preparing;
    var _0x369036 = _0x15a012.setPreparing;
    var _0x1ce113 = _0x15a012.language;
    var _0x51908f = _0x15a012.setLanguage;
    var _0x1fbd73 = _0x15a012.results;
    var _0x2e1151 = _0x15a012.setResults;
    var _0x5e479b = _0x15a012.nickName;
    var _0x47c40d = _0x15a012.setNickName;
    var _0x18f096 = _0x15a012.bestScore;
    var _0xc90427 = _0x15a012.setBestScore;
    var _0x552a38 = _0x15a012.modeStorageName;
    var _0x107e5a = _0x15a012.options;
    var _0xa3290b = _0x38b82c.getJSON(_0x552a38) || {};
    var _0x17525e = _0x2b49da(_0x5961a2(_0xa3290b.skin || ""), 2);
    var _0x3d2581 = _0x17525e[0];
    var _0xb78d02 = _0x17525e[1];
    if (_0x3d2581 !== _0xa3290b.skin) {
      _0xa3290b.skin = _0x3d2581;
      _0x38b82c.set(_0x552a38, _0xa3290b, _0x107e5a);
    }
    var _0x3ee436 = _0x2b49da(_0x5961a2(""), 2);
    var _0x5611fb = _0x3ee436[0];
    var _0x39833b = _0x3ee436[1];
    function _0x44afd5() {
      fetch("token.php").then(function (_0x45ed76) {
        return _0x45ed76.json();
      }).then(function (_0x12f6de) {
        _0x39833b(_0x12f6de.token);
        window.last_build = _0x12f6de.build;
      });
      _0x10537d.preroll();
    }
    _0x10537d.onClose = function () {
      if (_0x4a0384 && _0x4a0384.game) {
        var _0x39cba4 = document.getElementById("overlay");
        if (_0x39cba4) {
          _0x39cba4.style.display = "none";
        }
        _0x4a0384.game.visible = true;
        _0xb12a2d("game");
      }
    };
    _0x10537d.onOpen = function () {
      if (_0x4a0384 && _0x4a0384.game) {
        _0x4a0384.game.visible = false;
      }
    };
    return _0x2bafa4(_0xa3bb41, null, _0x2bafa4("canvas", {
      class: _0x1b6e83 === "game" || _0x3cc808 ? "" : "fadein",
      id: "view",
      ref: _0x28ce95
    }), _0x1b6e83 !== "game" && _0x2bafa4("div", {
      id: "substrate"
    }), _0x2bafa4(_0x2a21f1.Provider, {
      value: _0x1ce113
    }, _0x2bafa4("div", {
      id: "ui",
      class: _0x1b6e83 === "game" ? "hide" : ""
    }, _0x1b6e83 === "menu" && _0x2bafa4(_0x1ced8c, {
      nickName: _0x5e479b,
      setNickName: _0x47c40d,
      playable: _0x1480ab,
      start: _0x44afd5,
      route: _0xb12a2d,
      skin: _0x3d2581
    }), _0x1b6e83 === "game" && _0x2bafa4(_0x3657e8, {
      nickName: _0x5e479b,
      bestScore: _0x18f096,
      setBestScore: _0xc90427,
      setResults: _0x2e1151,
      setPreparing: _0x369036,
      api: _0x4a0384,
      route: _0xb12a2d,
      skin: _0x3d2581
    }), _0x1b6e83 === "results" && _0x2bafa4(_0x4b5dbd, {
      bestScore: _0x18f096,
      results: _0x1fbd73,
      setResults: _0x2e1151,
      start: _0x44afd5,
      route: _0xb12a2d,
      skin: _0x3d2581,
      token: _0x5611fb
    }), _0x1b6e83 === "skins" && _0x2bafa4(_0x46a4c8, {
      skins: _0x525b57,
      skin: _0x3d2581,
      route: _0xb12a2d,
      setSkin: _0xb78d02,
      achievementsProfile: _0x10ff0b
    })), _0x1b6e83 !== "game" && _0x2bafa4(_0x50be54, {
      setLanguage: _0x51908f
    })), _0x2bafa4("div", {
      id: "overlay"
    }));
  }
  function _0x2d3b5e(_0x2c756a, _0x37803b, _0x3607bd) {
    var _0x1b0323 = this;
    var _0x5841b1 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _0x30c6d7 = arguments.length > 4 ? arguments[4] : undefined;
    _0x3138e1(this, _0x2d3b5e);
    this.url = _0x3607bd + _0x5841b1.url;
    this.scale = _0x5841b1.scale || 1;
    this.src = null;
    this.ready = false;
    var _0x47170e = _0x2c756a.maxScale;
    var _0x1effd5 = new Image();
    _0x1effd5.onload = function () {
      var _0x264e16 = (_0x1b0323.src = _0x1effd5).naturalWidth || _0x1effd5.width;
      var _0x338bf2 = _0x1effd5.naturalHeight || _0x1effd5.height;
      var _0x2a429c = _0x47170e * 100 * _0x1b0323.scale / _0x264e16;
      var _0x2a456f = ~~(_0x264e16 * _0x2a429c);
      var _0x414229 = ~~(_0x338bf2 * _0x2a429c);
      var _0x1851c6 = document.createElement("canvas");
      _0x1851c6.width = _0x2a456f;
      _0x1851c6.height = _0x414229;
      _0x1851c6.getContext("2d").drawImage(_0x1effd5, 0, 0, _0x264e16, _0x338bf2, 0, 0, _0x2a456f, _0x414229);
      _0x1b0323.pattern = _0x37803b.getContext("2d").createPattern(_0x1851c6, "repeat");
      var _0xab8696 = 1 / _0x47170e;
      var _0x21b0e5 = _0x95d837.createSVGMatrix().scale(_0xab8696, _0xab8696);
      if (_0x1b0323.pattern.setTransform) {
        _0x1b0323.pattern.setTransform(_0x21b0e5);
      }
      _0x1b0323.ready = true;
      if (_0x30c6d7) {
        _0x30c6d7();
      }
    };
    _0x1effd5.src = this.url;
  }
  function _0x2d6c8f(_0x1ccafa, _0x379168, _0x398b13, _0x949585) {
    var _0x16f52f = this;
    function _0x3653d6(_0x220a45) {
      _0x220a45.rescale(_0x16f52f.scale);
      if (_0x16f52f.layers.length === ++_0x5596c9) {
        _0x16f52f.ready = true;
        if (_0x949585) {
          _0x949585();
        }
      }
    }
    _0x3138e1(this, _0x2d6c8f);
    Object.assign(this, {
      scale: 1,
      x: 0,
      y: 0,
      layers: [],
      ready: false
    }, _0x398b13);
    var _0x5596c9 = 0;
    this.layers = (this.layers || []).map(function (_0x2467a4) {
      return new _0x113df1(_0x1ccafa, _0x402863(_0x402863({}, _0x2467a4), {}, {
        url: _0x2467a4.url && `${_0x379168}${_0x2467a4.url}`
      }), _0x3653d6);
    });
    this.frontLayers = this.layers.filter(function (_0x54aa60) {
      return _0x54aa60.level >= 1;
    }).sort(function (_0x553a7b, _0x383338) {
      return _0x553a7b.level - _0x383338.level;
    });
    this.backLayers = this.layers.filter(function (_0x20b71a) {
      return _0x20b71a.level < 1;
    }).sort(function (_0x461072, _0x2975d3) {
      return _0x2975d3.level - _0x461072.level;
    });
  }
  function _0x29e960(_0x252ffa) {
    return _0x252ffa;
  }
  function _0x49b431(_0x444362) {
    return 1 + Math.pow(_0x444362 - 1, 3) * 2.70158 + Math.pow(_0x444362 - 1, 2) * 1.70158;
  }
  var _0x22f9c7;
  var _0x34e119;
  var _0x539712;
  var _0x4f7884;
  var _0x3a3a23 = [];
  var _0x369fdb = (navigator.languages && navigator.languages.length && navigator.languages[0] || navigator.userLanguage || navigator.language || navigator.browserLanguage || "en").substr(0, 2).toLowerCase();
  var _0x2a21f1 = (_0x539712 = {
    __c: _0x34e119 = "__cC" + _0x3be664++,
    __: _0x22f9c7,
    Consumer: function (_0x147b77, _0x485e9a) {
      return _0x147b77.children(_0x485e9a);
    },
    Provider: function (_0x44f01c, _0x5cbf6f, _0x4b94cb) {
      if (!this.getChildContext) {
        _0x5cbf6f = [];
        ((_0x4b94cb = {})[_0x34e119] = this).getChildContext = function () {
          return _0x4b94cb;
        };
        this.shouldComponentUpdate = function (_0x26c8f3) {
          if (this.props.value !== _0x26c8f3.value) {
            _0x5cbf6f.some(_0x16388a);
          }
        };
        this.sub = function (_0x21849b) {
          _0x5cbf6f.push(_0x21849b);
          var _0x36b572 = _0x21849b.componentWillUnmount;
          _0x21849b.componentWillUnmount = function () {
            _0x5cbf6f.splice(_0x5cbf6f.indexOf(_0x21849b), 1);
            if (_0x36b572) {
              _0x36b572.call(_0x21849b);
            }
          };
        };
      }
      return _0x44f01c.children;
    }
  }).Provider.__ = _0x539712.Consumer.contextType = _0x539712;
  var _0x45f010 = function () {
    function _0x784067(_0x244787, _0x52ccf2, _0x39d22c, _0x5d11aa) {
      _0x3138e1(this, _0x784067);
      this.title = _0x244787;
      this.description = _0x52ccf2;
      this.state = 0;
      this.current = 0;
      this.states = _0x5d11aa || [500, 3000, 500, 250];
      this.image = _0x39d22c;
      this.ready = true;
    }
    _0x433dc2(_0x784067, [{
      key: "update",
      value: function (_0x4113d0) {
        this.current += _0x4113d0;
        if (this.current > this.states[this.state]) {
          this.state++;
          this.current = 0;
        }
      }
    }, {
      key: "position",
      value: function () {
        switch (this.state) {
          case 0:
            return _0x57a388(this.current / this.states[0]);
          case 1:
            return 1;
          case 2:
            return 1 - _0x57a388(this.current / this.states[2]);
          default:
            return 0;
        }
      }
    }]);
    return _0x784067;
  }();
  var _0x4bf769 = ["#3b5998", "#8b9dc3", "#2a4d69", "#4b86b4", "#8dbdff", "#64a1f4", "#3b7dd8", "#843b62", "#8874a3", "#8d5524", "#c68642", "#f1c27d", "#f77f00", "#fcbf49", "#ffe066", "#65737e", "#a7adba", "#4a7c59", "#1a936f", "#88d498", "#2a9d8f", "#68b0ab", "#99e550", "#6abe30", "#4b692f", "#8f974a", "#8a6f30", "#524b24", "#d62828", "#fe4a49", "#ed6a5a", "#ff3377", "#ff77aa", "#ff99cc", "#b23a48", "#fcb9b2"];
  var _0x113df1 = function () {
    function _0x11b990(_0x210ed3, _0x1264eb, _0x155ad) {
      var _0x2b04ec = this;
      _0x3138e1(this, _0x11b990);
      this.config = _0x210ed3;
      Object.assign(this, {
        level: 0,
        scale: 1,
        x: 0,
        y: 0,
        direction: "",
        rotation: 0,
        url: "",
        src: null,
        image: null
      }, _0x1264eb);
      this.pivot = Object.assign({
        x: 0.5,
        y: 0.5
      }, _0x1264eb.pivot);
      if (this.url) {
        var _0x2b35a9 = new Image();
        _0x2b35a9.onload = function () {
          _0x2b04ec.src = _0x2b35a9;
          _0x2b04ec.rescale(1);
          if (_0x155ad) {
            _0x155ad(_0x2b04ec);
          }
        };
        _0x2b35a9.src = this.url;
      }
      if (this.src) {
        Promise.resolve(this.src).then(function (_0x5264ad) {
          _0x2b04ec.src = _0x5264ad;
          _0x2b04ec.rescale(1);
          if (_0x155ad) {
            _0x155ad(_0x2b04ec);
          }
        });
      }
    }
    _0x433dc2(_0x11b990, [{
      key: "rescale",
      value: function (_0x2091b0) {
        var _0x26cafd = this.config;
        var _0x5a7a7e = _0x26cafd.trackWidth * _0x26cafd.maxScale;
        var _0x15141b = this.src;
        var _0xee6b85 = _0x15141b.naturalWidth || _0x15141b.width;
        var _0x34fe4a = _0x15141b.naturalHeight || _0x15141b.height;
        var _0x3ceb68 = _0x5a7a7e * _0x2091b0 * this.scale / _0xee6b85;
        var _0x4cd557 = ~~(_0xee6b85 * _0x3ceb68);
        var _0xbcace3 = ~~(_0x34fe4a * _0x3ceb68);
        var _0xa3a1e8 = _0x4cd557 / _0xee6b85;
        var _0x25cfa2 = _0xbcace3 / _0x34fe4a;
        var _0x549523 = document.createElement("canvas");
        _0x549523.width = _0x4cd557;
        _0x549523.height = _0xbcace3;
        var _0x52aed0 = _0x549523.getContext("2d");
        _0x52aed0.scale(_0xa3a1e8, _0x25cfa2);
        _0x52aed0.drawImage(_0x15141b, 0, 0);
        this.image = _0x549523;
      }
    }]);
    return _0x11b990;
  }();
  var _0x95d837 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var _0x280bbc = function () {
    function _0x50fbec() {
      _0x3138e1(this, _0x50fbec);
      this.displays = [];
      this.frontLayers = [];
      this.backLayers = [];
      this.maxScale = 0;
    }
    _0x433dc2(_0x50fbec, [{
      key: "sort",
      value: function () {
        var _0x49ed8f;
        var _0x5cc99f;
        this.frontLayers = (_0x49ed8f = []).concat.apply(_0x49ed8f, _0x1e7647(this.displays.map(function (_0xd57e7c) {
          return _0xd57e7c.frontLayers.map(function (_0x491cb3) {
            return {
              display: _0xd57e7c,
              layer: _0x491cb3
            };
          });
        }))).sort(function (_0x51b8da, _0x4fb393) {
          return _0x51b8da.layer.level - _0x4fb393.layer.level;
        });
        this.backLayers = (_0x5cc99f = []).concat.apply(_0x5cc99f, _0x1e7647(this.displays.map(function (_0x58427f) {
          return _0x58427f.backLayers.map(function (_0x25fd81) {
            return {
              display: _0x58427f,
              layer: _0x25fd81
            };
          });
        }))).sort(function (_0x419da3, _0x3fb707) {
          return _0x3fb707.layer.level - _0x419da3.layer.level;
        });
        this.maxScale = Math.max.apply(Math, _0x1e7647(this.frontLayers.map(function (_0x5917cf) {
          return _0x5917cf.display.scale * _0x5917cf.layer.scale;
        })));
      }
    }, {
      key: "add",
      value: function (_0x3ed5f8) {
        this.displays.push(_0x3ed5f8);
        this.sort();
      }
    }, {
      key: "remove",
      value: function (_0x551ad7) {
        this.displays = this.displays.filter(function (_0x42e5b9) {
          return _0x42e5b9 !== _0x551ad7;
        });
        this.sort();
      }
    }, {
      key: "ready",
      get: function () {
        return this.displays.every(function (_0x4b93a7) {
          return _0x4b93a7.ready;
        });
      }
    }]);
    return _0x50fbec;
  }();
  var _0x4ec743 = function () {
    function _0xf5b644() {
      _0x3138e1(this, _0xf5b644);
      this.assets = [];
      this.user = null;
      this.colors = {
        main: "black",
        back: "black",
        nick: "black",
        plate: "black",
        particles: ["black"]
      };
      this.pattern = null;
      this.container = new _0x280bbc();
    }
    _0x433dc2(_0xf5b644, [{
      key: "addAsset",
      value: function (_0x6ce8df, _0x4fb951) {
        var _0x4163b9 = this;
        (_0x4fb951 || Object.keys(_0x6ce8df.content)).forEach(function (_0x1dbebc) {
          var _0x3c0ae8 = _0x6ce8df.content[_0x1dbebc];
          if (_0x3c0ae8) {
            switch (_0x1dbebc) {
              case "colors":
              case "pattern":
                _0x4163b9[_0x1dbebc] = _0x3c0ae8;
                break;
              case "display":
                _0x4163b9.container.add(_0x3c0ae8);
            }
          }
        });
        this.assets.push(_0x6ce8df);
        _0x6ce8df.use(this);
      }
    }, {
      key: "removeAsset",
      value: function (_0x1955ec, _0x1ff84f) {
        var _0x1794ff = this;
        (_0x1ff84f || Object.keys(_0x1955ec.content)).forEach(function (_0x57284e) {
          var _0x1ef972 = _0x1955ec.content[_0x57284e];
          if (_0x1ef972) {
            switch (_0x57284e) {
              case "colors":
              case "pattern":
                _0x1794ff[_0x57284e] = undefined;
                break;
              case "display":
                _0x1794ff.container.remove(_0x1ef972);
            }
          }
        });
        this.assets = this.assets.filter(function (_0x1cfe45) {
          return _0x1cfe45 !== _0x1955ec;
        });
        _0x1955ec.unuse(this);
      }
    }, {
      key: "getName",
      value: function () {
        return this.assets[0].name;
      }
    }]);
    return _0xf5b644;
  }();
  var _0x529d3b = function () {
    function _0x3af404(_0x501d62, _0xa56d65, _0xb7f1cf) {
      _0x3138e1(this, _0x3af404);
      this.pool = _0x501d62;
      this.name = _0xa56d65;
      this.source = _0xb7f1cf;
      this.content = {};
      this.consumers = [];
      this.ready = false;
    }
    _0x433dc2(_0x3af404, [{
      key: "use",
      value: function (_0xf98af7) {
        this.consumers.push(_0xf98af7);
      }
    }, {
      key: "unuse",
      value: function (_0x285dc7) {
        this.consumers = this.consumers.filter(function (_0x467f75) {
          return _0x467f75 !== _0x285dc7;
        });
      }
    }]);
    return _0x3af404;
  }();
  var _0x2d4c51 = function () {
    function _0x1125bd(_0x38d135) {
      _0x3138e1(this, _0x1125bd);
      this.name = _0x38d135;
      this.assets = [];
    }
    _0x433dc2(_0x1125bd, [{
      key: "get",
      value: function (_0x328daa, _0xbaf01) {
        var _0x424680;
        if (_0x328daa) {
          _0x424680 = this.assets.find(function (_0x3f9172) {
            return _0x3f9172.name === _0x328daa && (!_0xbaf01 || _0x3f9172.ready === true);
          });
        } else {
          var _0x4d9240 = this.assets.filter(function (_0x568859) {
            return _0x568859.consumers.length === 0 && (!_0xbaf01 || _0x568859.ready === true);
          });
          _0x424680 = _0x4d9240[~~(Math.random() * _0x4d9240.length)];
        }
        if (_0x424680) {
          if (!_0x424680.ready) {
            this.loadAsset(_0x424680);
          }
          return _0x424680;
        } else {
          return null;
        }
      }
    }, {
      key: "free",
      value: function () {
        return this.assets.filter(function (_0xb1ec4d) {
          return _0xb1ec4d.consumers.length === 0;
        }).length;
      }
    }]);
    return _0x1125bd;
  }();
  var _0x435101 = function () {
    _0x2ed2b4(_0x5015da, _0x2d4c51);
    var _0x389661 = _0x5c429a(_0x5015da);
    function _0x5015da(_0x54638b, _0x14cf46) {
      var _0x24d1fe;
      _0x3138e1(this, _0x5015da);
      (_0x24d1fe = _0x389661.call(this, "colors")).config = _0x54638b;
      _0x24d1fe.add(_0x14cf46);
      return _0x24d1fe;
    }
    _0x433dc2(_0x5015da, [{
      key: "add",
      value: function (_0x2c317f) {
        function _0x422755(_0xbb9f7a, _0x3acc3e) {
          var _0xfd91bb = document.createElement("canvas");
          _0xfd91bb.width = 100;
          _0xfd91bb.height = 100;
          var _0xb236a7 = _0xfd91bb.getContext("2d");
          _0xb236a7.fillStyle = _0x3acc3e;
          _0xb236a7.fillRect(0, 0, 100, 100);
          _0xb236a7.fillStyle = _0xbb9f7a;
          _0xb236a7.fillRect(10, 10, 80, 80);
          return _0xfd91bb;
        }
        var _0x34daaf;
        var _0x3d71a3 = this;
        var _0x3fff2e = this.config;
        (_0x34daaf = this.assets).push.apply(_0x34daaf, _0x1e7647((_0x2c317f || []).map(function (_0x1d81a8) {
          function _0x25d22d(_0x1de0c4, _0x5406c6) {
            var _0x55319d = _0x1de0c4.h;
            var _0x10b937 = _0x1de0c4.s;
            var _0x43599d = _0x1de0c4.v;
            return {
              h: _0x55319d,
              s: _0x10b937,
              v: _0x43599d *= _0x5406c6
            };
          }
          function _0x19f68a(_0x563b04, _0x2cc78c) {
            var _0x3b17d4 = _0x563b04.h;
            var _0x420b5a = _0x563b04.s;
            var _0x2084e8 = _0x563b04.v;
            var _0x3e2887 = 100 - _0x2084e8;
            return {
              h: _0x3b17d4,
              s: _0x420b5a,
              v: _0x2084e8 = Math.max(_0x2084e8 * _0x2cc78c, _0x2084e8 + _0x2cc78c * _0x3e2887 / 4)
            };
          }
          function _0xc692b5(_0x484c27, _0xc646df) {
            var _0x23bb60 = _0x484c27.h;
            var _0x385f6d = _0x484c27.s;
            _0x484c27.v;
            return {
              h: _0x23bb60,
              s: _0x385f6d,
              v: _0xc646df
            };
          }
          var _0x5b482a;
          var _0x48029d;
          var _0x37c11b;
          var _0x5772c0;
          var _0x5380a6;
          var _0x4f7d3a;
          var _0x1b8822;
          var _0x410397;
          var _0x2e0375;
          var _0xac8345;
          var _0x2a389a;
          var _0x9628bc;
          var _0x46364a;
          var _0x516719;
          _0x5b482a = _0x1d81a8;
          var _0x34b47a = {
            r: parseInt(_0x5b482a.substring(1, 3), 16),
            g: parseInt(_0x5b482a.substring(3, 5), 16),
            b: parseInt(_0x5b482a.substring(5, 7), 16)
          };
          _0x37c11b = (_0x48029d = _0x34b47a).r / 255;
          _0x5772c0 = _0x48029d.g / 255;
          _0x5380a6 = _0x48029d.b / 255;
          _0x2a389a = Math.max(_0x37c11b, _0x5772c0, _0x5380a6);
          _0x46364a = function (_0x317610) {
            return (_0x2a389a - _0x317610) / 6 / _0x9628bc + 0.5;
          };
          _0x516719 = function (_0x11b1fc) {
            return Math.round(_0x11b1fc * 100) / 100;
          };
          if ((_0x9628bc = _0x2a389a - Math.min(_0x37c11b, _0x5772c0, _0x5380a6)) == 0) {
            _0x2e0375 = _0xac8345 = 0;
          } else {
            _0xac8345 = _0x9628bc / _0x2a389a;
            _0x4f7d3a = _0x46364a(_0x37c11b);
            _0x1b8822 = _0x46364a(_0x5772c0);
            _0x410397 = _0x46364a(_0x5380a6);
            if (_0x37c11b === _0x2a389a) {
              _0x2e0375 = _0x410397 - _0x1b8822;
            } else if (_0x5772c0 === _0x2a389a) {
              _0x2e0375 = 1 / 3 + _0x4f7d3a - _0x410397;
            } else if (_0x5380a6 === _0x2a389a) {
              _0x2e0375 = 2 / 3 + _0x1b8822 - _0x4f7d3a;
            }
            if (_0x2e0375 < 0) {
              _0x2e0375 += 1;
            } else if (_0x2e0375 > 1) {
              --_0x2e0375;
            }
          }
          var _0x2bf619 = {
            h: Math.round(_0x2e0375 * 360),
            s: _0x516719(_0xac8345 * 100),
            v: _0x516719(_0x2a389a * 100)
          };
          var _0x3a5c08 = _0x25d22d(_0x2bf619, 0.75);
          var _0x49f8db = _0x5d6d75(_0x3a5c08);
          var _0x603d84 = _0x25d22d(_0x2bf619, 0.5);
          var _0x5449f0 = _0x5d6d75(_0x603d84);
          var _0x3f5a0e = _0x19f68a(_0x2bf619, 1.5);
          _0x5d6d75(_0x3f5a0e);
          var _0x5f1816 = _0x19f68a(_0x2bf619, 2);
          var _0x38880c = _0x5d6d75(_0x5f1816);
          var _0x44e739 = {
            main: _0x1d81a8,
            back: _0x49f8db,
            nick: _0x5449f0,
            plate: _0x2bf619.v > 50 ? _0x5449f0 : _0x38880c,
            particles: [_0x5d6d75(_0xc692b5(_0x2bf619, 100)), _0x5d6d75(_0xc692b5(_0x2bf619, 90)), _0x5d6d75(_0xc692b5(_0x2bf619, 80)), _0x5d6d75(_0xc692b5(_0x2bf619, 70)), _0x5d6d75(_0xc692b5(_0x2bf619, 60)), _0x5d6d75(_0xc692b5(_0x2bf619, 50)), _0x5d6d75(_0xc692b5(_0x2bf619, 40)), _0x5d6d75(_0xc692b5(_0x2bf619, 30)), _0x5d6d75(_0xc692b5(_0x2bf619, 20))]
          };
          var _0x4ef3bf = new _0x529d3b(_0x3d71a3, _0x1d81a8, _0x44e739);
          _0x4ef3bf.content.colors = _0x44e739;
          if (_0x3fff2e) {
            _0x4ef3bf.content.display = new _0x2d6c8f(_0x3fff2e, "", {
              layers: [{
                src: _0x422755(_0x44e739.nick, _0x44e739.nick)
              }, {
                level: 1,
                src: _0x422755(_0x44e739.main, _0x44e739.back)
              }]
            });
          }
          _0x4ef3bf.ready = true;
          return _0x4ef3bf;
        })));
      }
    }, {
      key: "loadAsset",
      value: function (_0x49a01e) {
        return _0x49a01e;
      }
    }]);
    return _0x5015da;
  }();
  var _0x5cbefd = function () {
    _0x2ed2b4(_0x1fb34f, _0x2d4c51);
    var _0x3e0ab5 = _0x5c429a(_0x1fb34f);
    function _0x1fb34f(_0x4c4de2, _0x34fd9d, _0x4078b1, _0x209777) {
      var _0x37a46a;
      _0x3138e1(this, _0x1fb34f);
      (_0x37a46a = _0x3e0ab5.call(this, "classic")).config = _0x4c4de2;
      _0x37a46a.view = _0x34fd9d;
      _0x37a46a.path = _0x4078b1;
      _0x37a46a.add(_0x209777);
      return _0x37a46a;
    }
    _0x433dc2(_0x1fb34f, [{
      key: "add",
      value: function (_0x1982aa) {
        var _0x277129;
        var _0x22b1ec = this;
        (_0x277129 = this.assets).push.apply(_0x277129, _0x1e7647((_0x1982aa || []).map(function (_0x3be47c) {
          return new _0x529d3b(_0x22b1ec, _0x3be47c.name, _0x3be47c);
        })));
      }
    }, {
      key: "loadAsset",
      value: function (_0x1d9ff2) {
        function _0x491ae2() {
          _0x1d9ff2.ready = _0x1d9ff2.content.display.ready && (!_0x1d9ff2.content.pattern || _0x1d9ff2.content.pattern.ready);
        }
        var _0x33cbea = _0x1d9ff2.source;
        if (_0x33cbea.colors) {
          _0x1d9ff2.content.colors = _0x402863({
            main: "#000000",
            back: "#000000",
            nick: "#000000",
            plate: "#000000",
            particles: ["#000000"]
          }, _0x33cbea.colors);
        }
        if (_0x33cbea.pattern) {
          _0x1d9ff2.content.pattern = new _0x2d3b5e(this.config, this.view, this.path, _0x33cbea.pattern, _0x491ae2);
        }
        if (_0x33cbea.avatar) {
          _0x1d9ff2.content.display = new _0x2d6c8f(this.config, this.path, _0x33cbea.avatar, _0x491ae2);
        }
        return _0x1d9ff2;
      }
    }]);
    return _0x1fb34f;
  }();
  var _0x38adf0 = function () {
    _0x2ed2b4(_0xa487ea, _0x4ec743);
    var _0x3320b5 = _0x5c429a(_0xa487ea);
    function _0xa487ea() {
      _0x3138e1(this, _0xa487ea);
      return _0x3320b5.apply(this, arguments);
    }
    _0x433dc2(_0xa487ea, [{
      key: "getName",
      value: function () {
        var _0x16f0ad = this.assets.find(function (_0x283f24) {
          return _0x283f24.pool && _0x283f24.pool.name === "classic";
        });
        if (_0x16f0ad) {
          return _0x16f0ad.name;
        }
        var _0x31b111 = this.assets.find(function (_0x31d22e) {
          return _0x31d22e.pool && _0x31d22e.pool.name === "colors";
        });
        return _0x31b111 && _0x31b111.name;
      }
    }]);
    return _0xa487ea;
  }();
  var _0x5c3c06 = function () {
    function _0x151e35(_0x57bac0, _0x47bc67, _0x3ed205, _0x485e5c) {
      _0x3138e1(this, _0x151e35);
      this.coloredSkinAssets = new _0x435101(_0x57bac0, _0x4bf769);
      this.classicSkinAssets = new _0x5cbefd(_0x57bac0, _0x47bc67, _0x3ed205, _0x485e5c);
    }
    _0x433dc2(_0x151e35, [{
      key: "available",
      value: function () {
        return this.coloredSkinAssets.free() + this.classicSkinAssets.free();
      }
    }, {
      key: "has",
      value: function (_0x495b91) {
        return this.classicSkinAssets.get(_0x495b91) || this.coloredSkinAssets.get(_0x495b91);
      }
    }, {
      key: "get",
      value: function (_0x1cfd88, _0x48526b) {
        var _0xb20870;
        if (_0x48526b) {
          var _0x22e795 = this.classicSkinAssets.get(_0x48526b) || this.coloredSkinAssets.get(_0x48526b);
          if (_0x22e795) {
            if (_0x22e795.consumers.length > 0) {
              var _0x51c833 = _0x22e795.consumers[0];
              var _0x23ca1b = this.classicSkinAssets.get() || this.coloredSkinAssets.get();
              _0x51c833.removeAsset(_0x22e795);
              _0x51c833.addAsset(_0x23ca1b);
            }
            _0xb20870 = _0x22e795;
          }
        } else {
          var _0x276f1b = !!_0x1cfd88.isPlayer;
          if (_0x1cfd88.isTeam) {
            _0x276f1b = _0x1cfd88.units.some(function (_0x178e14) {
              return _0x178e14.isPlayer;
            });
          }
          var _0x515fc3 = _0x276f1b ? [this.coloredSkinAssets, this.coloredSkinAssets] : [this.classicSkinAssets, this.coloredSkinAssets];
          if (Math.random() < 0.25) {
            _0x515fc3.reverse();
          }
          _0xb20870 = _0x515fc3[0].get() || _0x515fc3[1].get();
        }
        var _0x38df71 = new _0x38adf0();
        _0x38df71.addAsset(_0xb20870);
        _0x38df71.user = _0x1cfd88;
        return _0x38df71;
      }
    }, {
      key: "release",
      value: function (_0x295a88) {
        _0x295a88.assets.forEach(function (_0x29fb3f) {
          return _0x29fb3f.unuse(_0x295a88);
        });
      }
    }]);
    return _0x151e35;
  }();
  var _0x3f2976 = _0x3ae245(function (_0x1a085d, _0x1124b8) {
    (function (_0x4e9cbf) {
      var _0x7fe6af = function _0x2eeded(_0x2df732, _0x52ac67) {
        if (arguments.length === 1) {
          if (Array.isArray(_0x2df732)) {
            _0x52ac67 = _0x2df732[1];
            _0x2df732 = _0x2df732[0];
          } else {
            _0x52ac67 = _0x2df732.y;
            _0x2df732 = _0x2df732.x;
          }
        }
        this.x = _0x2df732;
        this.y = _0x52ac67;
        this.next = null;
        this.prev = null;
        this._corresponding = null;
        this._distance = 0;
        this._isEntry = true;
        this._isIntersection = false;
        this._visited = false;
      };
      _0x7fe6af.createIntersection = function _0x3c2a8f(_0x31b594, _0x249d38, _0x4749d1) {
        var _0x4d5620 = new _0x7fe6af(_0x31b594, _0x249d38);
        _0x4d5620._distance = _0x4749d1;
        _0x4d5620._isIntersection = true;
        _0x4d5620._isEntry = false;
        return _0x4d5620;
      };
      _0x7fe6af.prototype.visit = function _0x38dd8f() {
        this._visited = true;
        if (this._corresponding !== null && !this._corresponding._visited) {
          this._corresponding.visit();
        }
      };
      _0x7fe6af.prototype.equals = function _0x14f581(_0x5b0882) {
        return this.x === _0x5b0882.x && this.y === _0x5b0882.y;
      };
      _0x7fe6af.prototype.isInside = function _0x10665c(_0x35cd1a) {
        var _0xa62b09 = false;
        var _0x422d0e = _0x35cd1a.first;
        var _0x5dca37 = _0x422d0e.next;
        var _0xdc468d = this.x;
        var _0x325356 = this.y;
        do {
          if ((_0x422d0e.y < _0x325356 && _0x5dca37.y >= _0x325356 || _0x5dca37.y < _0x325356 && _0x422d0e.y >= _0x325356) && (_0x422d0e.x <= _0xdc468d || _0x5dca37.x <= _0xdc468d)) {
            _0xa62b09 ^= _0x422d0e.x + (_0x325356 - _0x422d0e.y) / (_0x5dca37.y - _0x422d0e.y) * (_0x5dca37.x - _0x422d0e.x) < _0xdc468d;
          }
          _0x422d0e = _0x422d0e.next;
          _0x5dca37 = _0x422d0e.next || _0x35cd1a.first;
        } while (!_0x422d0e.equals(_0x35cd1a.first));
        return _0xa62b09;
      };
      var _0x2acc46 = function _0x3ece19(_0x5b6f14, _0x57b317, _0x874111, _0x492aaa) {
        this.x = 0;
        this.y = 0;
        this.toSource = 0;
        this.toClip = 0;
        var _0x4e9327 = (_0x492aaa.y - _0x874111.y) * (_0x57b317.x - _0x5b6f14.x) - (_0x492aaa.x - _0x874111.x) * (_0x57b317.y - _0x5b6f14.y);
        if (_0x4e9327 === 0) {
          return;
        }
        this.toSource = ((_0x492aaa.x - _0x874111.x) * (_0x5b6f14.y - _0x874111.y) - (_0x492aaa.y - _0x874111.y) * (_0x5b6f14.x - _0x874111.x)) / _0x4e9327;
        this.toClip = ((_0x57b317.x - _0x5b6f14.x) * (_0x5b6f14.y - _0x874111.y) - (_0x57b317.y - _0x5b6f14.y) * (_0x5b6f14.x - _0x874111.x)) / _0x4e9327;
        if (this.valid()) {
          this.x = _0x5b6f14.x + this.toSource * (_0x57b317.x - _0x5b6f14.x);
          this.y = _0x5b6f14.y + this.toSource * (_0x57b317.y - _0x5b6f14.y);
        }
      };
      _0x2acc46.prototype.valid = function _0x5eec86() {
        return this.toSource > 0 && this.toSource < 1 && this.toClip > 0 && this.toClip < 1;
      };
      var _0x4dcd59 = function _0x45cba0(_0x338ced, _0xa4b404) {
        var _0x3cfe38 = this;
        this.first = null;
        this.vertices = 0;
        this._lastUnprocessed = null;
        this._arrayVertices = typeof _0xa4b404 === "undefined" ? Array.isArray(_0x338ced[0]) : _0xa4b404;
        for (var _0xc3ba18 = 0, _0x11ba85 = _0x338ced.length; _0xc3ba18 < _0x11ba85; _0xc3ba18++) {
          _0x3cfe38.addVertex(new _0x7fe6af(_0x338ced[_0xc3ba18]));
        }
      };
      function _0x5a16c9(_0x458a2b, _0x5b6622, _0x1abba8, _0xa78cd8) {
        var _0xe20313 = new _0x4dcd59(_0x458a2b);
        var _0x5bbd04 = new _0x4dcd59(_0x5b6622);
        return _0xe20313.clip(_0x5bbd04, _0x1abba8, _0xa78cd8);
      }
      function _0x3817ba(_0xdaac8f, _0x47ef0e) {
        return _0x5a16c9(_0xdaac8f, _0x47ef0e, false, false);
      }
      function _0xd61839(_0x586d05, _0x2e4a00) {
        return _0x5a16c9(_0x586d05, _0x2e4a00, true, true);
      }
      function _0x9ca571(_0x43a5c6, _0x2e75e9) {
        return _0x5a16c9(_0x43a5c6, _0x2e75e9, false, true);
      }
      _0x4dcd59.prototype.addVertex = function _0x38be0b(_0x424bf4) {
        if (this.first === null) {
          this.first = _0x424bf4;
          this.first.next = _0x424bf4;
          this.first.prev = _0x424bf4;
        } else {
          var _0x1a2759 = this.first;
          var _0x20b8c5 = _0x1a2759.prev;
          _0x1a2759.prev = _0x424bf4;
          _0x424bf4.next = _0x1a2759;
          _0x424bf4.prev = _0x20b8c5;
          _0x20b8c5.next = _0x424bf4;
        }
        this.vertices++;
      };
      _0x4dcd59.prototype.insertVertex = function _0x5f56ae(_0x16abcc, _0x4e5db5, _0x21b27d) {
        var _0x3dc6e5;
        var _0x485c71 = _0x4e5db5;
        while (!_0x485c71.equals(_0x21b27d) && _0x485c71._distance < _0x16abcc._distance) {
          _0x485c71 = _0x485c71.next;
        }
        _0x16abcc.next = _0x485c71;
        _0x3dc6e5 = _0x485c71.prev;
        _0x16abcc.prev = _0x3dc6e5;
        _0x3dc6e5.next = _0x16abcc;
        _0x485c71.prev = _0x16abcc;
        this.vertices++;
      };
      _0x4dcd59.prototype.getNext = function _0x43bfc8(_0x4816d4) {
        var _0xf2f541 = _0x4816d4;
        while (_0xf2f541._isIntersection) {
          _0xf2f541 = _0xf2f541.next;
        }
        return _0xf2f541;
      };
      _0x4dcd59.prototype.getFirstIntersect = function _0x586fff() {
        var _0x49fe85 = this._firstIntersect || this.first;
        do {
          if (_0x49fe85._isIntersection && !_0x49fe85._visited) {
            break;
          }
          _0x49fe85 = _0x49fe85.next;
        } while (!_0x49fe85.equals(this.first));
        this._firstIntersect = _0x49fe85;
        return _0x49fe85;
      };
      _0x4dcd59.prototype.hasUnprocessed = function _0x1ce260() {
        var _0x36664b = this;
        var _0x4c52ec = this._lastUnprocessed || this.first;
        do {
          if (_0x4c52ec._isIntersection && !_0x4c52ec._visited) {
            _0x36664b._lastUnprocessed = _0x4c52ec;
            return true;
          }
          _0x4c52ec = _0x4c52ec.next;
        } while (!_0x4c52ec.equals(this.first));
        this._lastUnprocessed = null;
        return false;
      };
      _0x4dcd59.prototype.getPoints = function _0x2f6310() {
        var _0x3cfede = [];
        var _0x657433 = this.first;
        if (this._arrayVertices) {
          do {
            _0x3cfede.push([_0x657433.x, _0x657433.y]);
            _0x657433 = _0x657433.next;
          } while (_0x657433 !== this.first);
        } else {
          do {
            _0x3cfede.push({
              x: _0x657433.x,
              y: _0x657433.y
            });
            _0x657433 = _0x657433.next;
          } while (_0x657433 !== this.first);
        }
        return _0x3cfede;
      };
      _0x4dcd59.prototype.clip = function _0x3569fc(_0x2177ea, _0x39ac24, _0x5ba019) {
        var _0x4218fe = this;
        var _0x404a07 = this.first;
        var _0x28920a = _0x2177ea.first;
        var _0xda679a;
        var _0xbf631d;
        var _0x10f511 = !_0x39ac24 && !_0x5ba019;
        var _0x26d5ce = _0x39ac24 && _0x5ba019;
        do {
          if (!_0x404a07._isIntersection) {
            do {
              if (!_0x28920a._isIntersection) {
                var _0x1d2b3f = new _0x2acc46(_0x404a07, _0x4218fe.getNext(_0x404a07.next), _0x28920a, _0x2177ea.getNext(_0x28920a.next));
                if (_0x1d2b3f.valid()) {
                  var _0x4fcf64 = _0x7fe6af.createIntersection(_0x1d2b3f.x, _0x1d2b3f.y, _0x1d2b3f.toSource);
                  var _0xd2ac8b = _0x7fe6af.createIntersection(_0x1d2b3f.x, _0x1d2b3f.y, _0x1d2b3f.toClip);
                  _0x4fcf64._corresponding = _0xd2ac8b;
                  _0xd2ac8b._corresponding = _0x4fcf64;
                  _0x4218fe.insertVertex(_0x4fcf64, _0x404a07, _0x4218fe.getNext(_0x404a07.next));
                  _0x2177ea.insertVertex(_0xd2ac8b, _0x28920a, _0x2177ea.getNext(_0x28920a.next));
                }
              }
              _0x28920a = _0x28920a.next;
            } while (!_0x28920a.equals(_0x2177ea.first));
          }
          _0x404a07 = _0x404a07.next;
        } while (!_0x404a07.equals(this.first));
        _0x404a07 = this.first;
        _0x28920a = _0x2177ea.first;
        _0xda679a = _0x404a07.isInside(_0x2177ea);
        _0xbf631d = _0x28920a.isInside(this);
        _0x39ac24 ^= _0xda679a;
        _0x5ba019 ^= _0xbf631d;
        do {
          if (_0x404a07._isIntersection) {
            _0x404a07._isEntry = _0x39ac24;
            _0x39ac24 = !_0x39ac24;
          }
          _0x404a07 = _0x404a07.next;
        } while (!_0x404a07.equals(this.first));
        do {
          if (_0x28920a._isIntersection) {
            _0x28920a._isEntry = _0x5ba019;
            _0x5ba019 = !_0x5ba019;
          }
          _0x28920a = _0x28920a.next;
        } while (!_0x28920a.equals(_0x2177ea.first));
        var _0x2ba891 = [];
        while (this.hasUnprocessed()) {
          var _0x4908ed = _0x4218fe.getFirstIntersect();
          var _0x3d0cb1 = new _0x4dcd59([], _0x4218fe._arrayVertices);
          _0x3d0cb1.addVertex(new _0x7fe6af(_0x4908ed.x, _0x4908ed.y));
          do {
            _0x4908ed.visit();
            if (_0x4908ed._isEntry) {
              do {
                _0x4908ed = _0x4908ed.next;
                _0x3d0cb1.addVertex(new _0x7fe6af(_0x4908ed.x, _0x4908ed.y));
              } while (!_0x4908ed._isIntersection);
            } else {
              do {
                _0x4908ed = _0x4908ed.prev;
                _0x3d0cb1.addVertex(new _0x7fe6af(_0x4908ed.x, _0x4908ed.y));
              } while (!_0x4908ed._isIntersection);
            }
            _0x4908ed = _0x4908ed._corresponding;
          } while (!_0x4908ed._visited);
          _0x2ba891.push(_0x3d0cb1.getPoints());
        }
        if (_0x2ba891.length === 0) {
          if (_0x10f511) {
            if (_0xda679a) {
              _0x2ba891.push(_0x2177ea.getPoints());
            } else if (_0xbf631d) {
              _0x2ba891.push(this.getPoints());
            } else {
              _0x2ba891.push(this.getPoints(), _0x2177ea.getPoints());
            }
          } else if (_0x26d5ce) {
            if (_0xda679a) {
              _0x2ba891.push(this.getPoints());
            } else if (_0xbf631d) {
              _0x2ba891.push(_0x2177ea.getPoints());
            }
          } else if (_0xda679a) {
            _0x2ba891.push(_0x2177ea.getPoints(), this.getPoints());
          } else if (_0xbf631d) {
            _0x2ba891.push(this.getPoints(), _0x2177ea.getPoints());
          } else {
            _0x2ba891.push(this.getPoints());
          }
          if (_0x2ba891.length === 0) {
            _0x2ba891 = null;
          }
        }
        return _0x2ba891;
      };
      var _0x491650 = _0x5a16c9;
      _0x4e9cbf.union = _0x3817ba;
      _0x4e9cbf.intersection = _0xd61839;
      _0x4e9cbf.diff = _0x9ca571;
      _0x4e9cbf.clip = _0x491650;
      Object.defineProperty(_0x4e9cbf, "__esModule", {
        value: true
      });
    })(_0x1124b8);
  });
  if ((_0x4f7884 = _0x3f2976) && _0x4f7884.__esModule && Object.prototype.hasOwnProperty.call(_0x4f7884, "default")) {
    _0x4f7884.default;
  }
  var _0xc3ab5e = function () {
    function _0x5e0a89(_0x2bb24d) {
      _0x3138e1(this, _0x5e0a89);
      this.game = _0x2bb24d;
      this.data = {};
    }
    _0x433dc2(_0x5e0a89, [{
      key: "init",
      value: function () {}
    }, {
      key: "checkWin",
      value: function () {
        return false;
      }
    }, {
      key: "checkEnd",
      value: function () {
        return _0x5e0a89.noWinnerNoCompleted;
      }
    }, {
      key: "assign",
      value: function (_0x26e439) {
        _0x26e439.scheme = {};
      }
    }, {
      key: "scores",
      value: function () {
        return 0;
      }
    }, {
      key: "print",
      value: function (_0x3d5b87, _0x4af17e) {
        if (_0x3d5b87) {
          return this.scores(_0x3d5b87);
        } else {
          return _0x4af17e;
        }
      }
    }, {
      key: "result",
      value: function (_0x38f0e6) {
        return this.scores(_0x38f0e6);
      }
    }, {
      key: "results",
      value: function (_0x493bc1) {
        return _0x493bc1;
      }
    }, {
      key: "updateSensors",
      value: function () {}
    }, {
      key: "updateExtendedSensors",
      value: function () {}
    }, {
      key: "update",
      value: function () {}
    }, {
      key: "kill",
      value: function () {}
    }, {
      key: "death",
      value: function () {}
    }, {
      key: "out",
      value: function () {}
    }, {
      key: "comeback",
      value: function (_0x381edf, _0x5130cf) {
        _0x5130cf.increment;
        _0x5130cf.rise;
        _0x5130cf.victims;
        _0x5130cf.game;
      }
    }, {
      key: "decrease",
      value: function (_0x35189e, _0x4b304c) {
        _0x4b304c.aggressor;
        _0x4b304c.base;
        _0x4b304c.poly;
      }
    }, {
      key: "increase",
      value: function () {}
    }, {
      key: "name",
      get: function () {
        return "abstract";
      }
    }]);
    return _0x5e0a89;
  }();
  _0x19a98e(_0xc3ab5e, "noWinnerCompleted", {
    winner: null,
    completed: true
  });
  _0x19a98e(_0xc3ab5e, "noWinnerNoCompleted", {
    winner: null,
    completed: false
  });
  function _0x4a1eb2() {}
  function _0x41862b(_0x3ad6da) {
    var _0x8b1e76 = _0x3ad6da.game.player;
    if (_0x8b1e76 && _0x3ad6da.team !== _0x8b1e76.team) {
      var _0x8a35f4 = Math.max(_0x3ad6da.vrange, _0x8b1e76.vrange) * 0.6;
      var _0x13a103 = _0x8a35f4 * _0x8a35f4;
      return _0x8b1e76.track.simplyline.some(function (_0x1d5407) {
        return _0x3ad6da.position.distance2(_0x1d5407) < _0x13a103;
      });
    }
  }
  function _0x305ad3(_0x1c32c8, _0x3de668) {
    if (_0x1c32c8.in !== _0x1c32c8.base) {
      var _0x320fa6 = _0x1c32c8.game.player;
      var _0x5bb71e = _0x3de668 ? _0x320fa6.baseDistance / _0x320fa6.maxDanger : Infinity;
      var _0x514526 = _0x1c32c8.game.config.unitSpeed * 0.5;
      var _0x24369b = _0x1c32c8.baseDistance / _0x1c32c8.maxDanger;
      return (!_0x3de668 || !(_0x1c32c8.baseDistance > _0x24369b + _0x514526)) && !(_0x5bb71e < _0x24369b - _0x514526) && (_0x24369b < _0x514526 || _0x24369b - _0x1c32c8.baseDistance < _0x514526);
    }
  }
  function _0x926422(_0x254e11) {
    var _0x13b49f = _0x254e11.track.simplyline;
    if (_0x13b49f.length < 2) {
      return false;
    }
    var _0x8fb6f0 = _0x254e11.game.config.unitSpeed;
    var _0x3c9e84 = _0x254e11.target.clone().sub(_0x254e11.position).normalize().mulScalar(_0x8fb6f0);
    var _0x1ff222 = new _0x7f4089(_0x254e11.position, _0x3c9e84.add(_0x254e11.position));
    for (var _0x447ae6 = 0; _0x447ae6 < _0x13b49f.length - 1; _0x447ae6++) {
      var _0x1ddb66 = new _0x7f4089(_0x13b49f[_0x447ae6], _0x13b49f[_0x447ae6 + 1]).intersect(_0x1ff222);
      if (_0x1ddb66 && _0x1ddb66.point !== _0x254e11.track.polyline.end && _0x1ddb66.point !== _0x254e11.track.polyline.start) {
        return _0x1ddb66.point;
      }
    }
    return false;
  }
  var _0x419e34 = function () {
    _0x2ed2b4(_0x4ec47a, _0xc3ab5e);
    var _0xfd749d = _0x5c429a(_0x4ec47a);
    function _0x4ec47a(_0x5c623f) {
      var _0xb977e3;
      _0x3138e1(this, _0x4ec47a);
      (_0xb977e3 = _0xfd749d.call(this, _0x5c623f)).currentZoneRadius = null;
      _0xb977e3.currentZoneCenter = null;
      _0xb977e3.nextZoneCenter = null;
      _0xb977e3.nextZoneRadius = null;
      _0xb977e3.timer = 0;
      _0xb977e3.preparing = true;
      _0xb977e3.startPositions = [];
      _0xb977e3.spawnerTimeoutId = 0;
      _0xb977e3.restartTimeout = 0;
      _0xb977e3.titled = false;
      function _0x571c74() {
        var _0x784791 = _0xb977e3.currentZoneRadius - _0xb977e3.nextZoneRadius;
        if (_0x784791 < 0.2) {
          _0xb977e3.currentZoneRadius = _0xb977e3.nextZoneRadius;
          _0xb977e3.currentZoneCenter = _0xb977e3.nextZoneCenter;
          return true;
        }
        _0xb977e3.currentZoneRadius -= 0.2;
        var _0x5bf101 = 0.2 / _0x784791;
        var _0x24d9b9 = _0xb977e3.nextZoneCenter.clone().sub(_0xb977e3.currentZoneCenter).mulScalar(_0x5bf101);
        _0xb977e3.currentZoneCenter.add(_0x24d9b9);
        return false;
      }
      function _0x1fd447() {
        var _0x55cf78 = _0xf4a84(_0xb977e3).game;
        var _0x3dd577 = _0xb977e3.stages[_0xb977e3.current];
        if (_0x3dd577) {
          _0xb977e3.nextZoneRadius = _0x3dd577.radius * _0x55cf78.border.radius;
          var _0x3b1a16 = _0xb977e3.currentZoneRadius - _0xb977e3.nextZoneRadius - 10;
          var _0x5c3ba2 = new _0x1c98db(_0x3b1a16, 0).rotate(Math.random() * Math.PI * 2);
          _0xb977e3.nextZoneCenter = _0x5c3ba2.add(_0xb977e3.currentZoneCenter);
        } else {
          _0xb977e3.nextZoneRadius = null;
          _0xb977e3.nextZoneCenter = null;
        }
      }
      _0xb977e3.stages = [{
        preparing: 0,
        preparingText: function () {
          return "";
        },
        activeText: "Waiting for players...",
        active: function () {
          return !_0xb977e3.preparing;
        }
      }, {
        preparing: 3000,
        preparingText: function (_0x40c38f) {
          return `Battle starting in ${_0x40c38f}s`;
        },
        activeText: "",
        active: function () {
          _0xb977e3.startPositions.forEach(function (_0x5099f8) {
            var _0x30c109 = _0x5099f8.bot;
            var _0x1f8939 = _0x5099f8.position;
            _0x30c109.position = _0x1f8939;
          });
          return !(_0x5c623f.ignoreIntersections = false);
        }
      }, {
        preparing: 10000,
        preparingText: function () {
          return "Stay inside the safe area and survive as long as you can!";
        },
        activeText: "",
        active: function () {
          return true;
        }
      }, {
        preparing: 10000,
        preparingText: function (_0x53efcc) {
          return `Safe area shrinking in ${_0x53efcc}s`;
        },
        activeText: "Go to safe area!",
        active: _0x571c74,
        init: _0x1fd447,
        radius: 0.8
      }, {
        preparing: 20000,
        preparingText: function (_0x477c31) {
          return `Safe area shrinking in ${_0x477c31}s`;
        },
        activeText: "Go to safe area!",
        active: _0x571c74,
        init: _0x1fd447,
        radius: 0.5
      }, {
        preparing: 20000,
        preparingText: function (_0x22f777) {
          return `Safe area shrinking in ${_0x22f777}s`;
        },
        activeText: "Go to safe area!",
        active: _0x571c74,
        init: _0x1fd447,
        radius: 0.2
      }, {
        preparing: 60000,
        preparingText: function (_0x3c834d) {
          return `Safe area shrinking in ${_0x3c834d}s`;
        },
        activeText: "Go to safe area!",
        active: _0x571c74,
        init: _0x1fd447,
        radius: 0.09
      }, {
        preparing: 0,
        preparingText: function () {
          return "";
        },
        activeText: "Stay inside the safe area and survive as long as you can!",
        active: function () {
          return false;
        }
      }];
      _0xb977e3.current = 0;
      return _0xb977e3;
    }
    _0x433dc2(_0x4ec47a, [{
      key: "checkEnd",
      value: function () {
        var _0x1aa773 = this.game;
        if (_0x1aa773.units.length === 0) {
          return _0xc3ab5e.noWinnerCompleted;
        }
        if (_0x1aa773.units.length !== 1) {
          return _0xc3ab5e.noWinnerNoCompleted;
        }
        var _0x7f8a68 = _0x1aa773.units[0];
        if (_0x7f8a68.isPlayer) {
          this.title();
        }
        return {
          winner: _0x7f8a68,
          completed: true
        };
      }
    }, {
      key: "title",
      value: function () {
        if (!this.titled) {
          this.titled = true;
          var _0x1c996b = this.game;
          var _0x18a578 = _0x1c996b.context;
          if (_0x18a578) {
            var _0x32e7f3 = _0x18a578.ctx;
            _0x18a578.padding;
            _0x18a578.backHeight;
            _0x18a578.barHeight;
            _0x18a578.halfBarHeight;
            _0x18a578.barWidth;
            _0x18a578.strokeWidth;
            var _0x4093ac = _0x18a578.viewScreenWidth;
            var _0x7f42c0 = _0x18a578.viewScreenHeight;
            _0x18a578.uiFont;
            var _0x27b9d2 = _0x18a578.font;
            var _0x15b8eb = _0x18a578.fontSize;
            var _0x3902ee = _0x4093ac / 2;
            var _0x592290 = _0x7f42c0 * 0.25;
            var _0x4b8133 = ["#0045b2"];
            var _0x2481ad = "Victory Royale";
            _0x32e7f3.font = `bold ${_0x15b8eb * 1.5}px ${_0x27b9d2}`;
            var _0x5985cf = 40 + ~~_0x32e7f3.measureText(_0x2481ad).width;
            for (var _0x170917 = 0; _0x170917 < 100; _0x170917++) {
              var _0x3c106f = _0x15b8eb * (1 + Math.random()) * 0.5 * 0.4;
              var _0x5ef45c = _0x4bf1e3.alloc(null, _0x4b8133[~~(Math.random() * _0x4b8133.length)], new _0x1c98db(_0x3902ee + (Math.random() - 0.5) * _0x5985cf, _0x592290 + (Math.random() - 0.5) * _0x15b8eb), _0x1c98db.alloc(0, 0), null, (Math.random() - 0.5) * 0.6, 0, _0x3c106f, 2500, function (_0x2b4705) {
                _0x2b4705.time = 7500;
                _0x2b4705.vscale = 0;
                _0x2b4705.fn = null;
              });
              _0x1c996b.uiParticles.push(_0x5ef45c);
            }
            for (var _0x2315f7 = 0; _0x2315f7 < 10; _0x2315f7++) {
              var _0x4992a6 = _0x15b8eb * (1 + Math.random()) * 0.5 * 0.4;
              var _0x166ccf = _0x4bf1e3.alloc(null, "#5390d8", new _0x1c98db(_0x3902ee + (Math.random() - 0.5) * _0x5985cf, _0x592290 + (Math.random() - 0.5) * _0x15b8eb), _0x1c98db.alloc(0, 0), null, (Math.random() - 0.5) * 0.6, 0, _0x4992a6, 2500, function (_0x220921) {
                _0x220921.time = 7500;
                _0x220921.vscale = 0;
                _0x220921.fn = null;
              }, 3);
              _0x1c996b.uiParticles.push(_0x166ccf);
            }
            function _0x33f6c2(_0x2f9531) {
              function _0xc0be60(_0x586a10) {
                _0x586a10.scale = _0x35a1ef * _0x41ec7c(_0x586a10.stage);
              }
              var _0x2902d8 = arguments.length > 0 && _0x2f9531 !== undefined ? _0x2f9531 : {};
              var _0x35a1ef = _0x2902d8.scale;
              var _0x40f050 = _0x2902d8.easing;
              var _0x41ec7c = _0x40f050 === undefined ? _0x29e960 : _0x40f050;
              var _0x5a66b2 = _0x2902d8.tag;
              if (_0x5a66b2) {
                _0xc0be60[transformerTag] = _0x5a66b2;
              }
              return _0xc0be60;
            }
            _0x1c996b.labels.push(new _0x5e7208({
              text: "#1",
              color: "#f9d341",
              size: _0x15b8eb * 2,
              target: null,
              duration: 3000,
              position: new _0x1c98db(_0x3902ee, _0x592290 - _0x15b8eb * 2),
              scale: 0,
              fn: function (_0x5d575b) {
                _0x5d575b.change({
                  duration: 1000,
                  transformers: [_0x33f6c2({
                    scale: 1
                  })]
                });
                var _0x2e57b2 = _0x15b8eb * 1.5 * 1;
                var _0x33a64f = _0x4bf1e3.alloc(null, "#0d144f", new _0x1c98db(_0x3902ee, _0x592290 - _0x15b8eb * 2), _0x1c98db.alloc(0, 0), null, 0, 0, _0x2e57b2, 1000, function (_0x34737f) {
                  _0x34737f.time = 6000;
                  _0x34737f.vscale = 0;
                  _0x34737f.fn = null;
                }, 1);
                _0x1c996b.uiParticles.push(_0x33a64f);
                return function (_0x55e8e3) {
                  _0x55e8e3.change({
                    duration: 6000,
                    transformers: []
                  });
                };
              },
              ui: true
            }));
            _0x1c996b.labels.push(new _0x5e7208({
              text: _0x2481ad,
              color: "#ffffff",
              size: _0x15b8eb * 1.5,
              target: null,
              duration: 1000,
              position: new _0x1c98db(_0x3902ee, _0x592290),
              scale: 0,
              fn: function (_0x5ac8a0) {
                _0x5ac8a0.change({
                  duration: 2000,
                  transformers: [_0x33f6c2({
                    scale: 1,
                    easing: _0x49b431
                  })]
                });
                return function (_0x53e5f6) {
                  _0x53e5f6.change({
                    duration: 7000,
                    transformers: []
                  });
                };
              },
              ui: true
            }));
          }
        }
      }
    }, {
      key: "completed",
      value: function () {
        var _0x269db1 = this;
        this.restartTimeout ||= setTimeout(function () {
          _0x269db1.startMatch();
          _0x269db1.restartTimeout = 0;
        }, 15000);
      }
    }, {
      key: "assign",
      value: function (_0x204d18) {
        var _0x7b4b20 = this.game.config.baseHP;
        _0x204d18.scheme = {
          maxHP: _0x7b4b20,
          HP: _0x7b4b20,
          buff: 0,
          debuff: 0,
          safe: true
        };
      }
    }, {
      key: "checkSafe",
      value: function (_0x1a0fe0) {
        return !this.currentZoneCenter || _0x1a0fe0.position.distance(this.currentZoneCenter) < this.currentZoneRadius;
      }
    }, {
      key: "updateSensors",
      value: function (_0x34f177) {
        if (this.currentZoneCenter) {
          _0x34f177.scheme.distanceToZoneCenter = _0x34f177.position.distance(this.currentZoneCenter);
        }
        _0x34f177.scheme.safe = this.checkSafe(_0x34f177);
      }
    }, {
      key: "fireworks",
      value: function (_0x59bfc8) {
        var _0x2829a4 = this.game;
        if (_0x2829a4.visible) {
          var _0x3fcad7 = _0x1c98db.alloc(0, 1).rotate(Math.random() * Math.PI * 2).mulScalar(20 + Math.random() * 100);
          var _0x49a80b = _0x3fcad7.clone().mulScalar(-0.2);
          var _0x50d6f1 = 1 + Math.random() * 3;
          var _0x66562a = 1000 + Math.random() * 1000;
          var _0x1af592 = -_0x50d6f1 * 0.7 * (1000 / _0x66562a);
          var _0x15c3db = ["#000000", "#663931", "#8f563b", "#d9a066", "#eec39a", "#fbf236", "#ffe119", "#e69b05", "#fa6419", "#df7126", "#99e550", "#6abe30", "#37946e", "#4b692f", "#524b24", "#323c39", "#8f974a", "#8a6f30", "#3f3f74", "#306082", "#469990", "#274edd", "#5b6ee1", "#639bff", "#5fcde4", "#cbdbfc", "#ffffff", "#9badb7", "#847e87", "#696a6a", "#595652", "#ac3232", "#d95763", "#fb7070", "#222034", "#45283c", "#76428a", "#d77bba", "#feaafe"];
          var _0x15f490 = _0x1c98db.alloc(0, 1).rotate(Math.random() * Math.PI * 2).mulScalar(Math.random() * 3);
          if (!_0x59bfc8.isPlayer) {
            _0x15f490.add(_0x59bfc8.position);
          }
          var _0x540bd5 = _0x4bf1e3.alloc(null, _0x15c3db[~~(Math.random() * _0x15c3db.length)], _0x15f490, _0x3fcad7, _0x49a80b, Math.PI * 2 * (1 + Math.random()) * Math.sign(Math.random() - 0.5 || 1), _0x50d6f1, _0x1af592, _0x66562a, null, 3, _0x59bfc8.isPlayer ? _0x59bfc8 : null);
          _0x2829a4.particles.push(_0x540bd5);
        }
      }
    }, {
      key: "updateUnit",
      value: function (_0xd315b1, _0x37b1d1) {
        if (!_0xd315b1.death) {
          var _0x1bde79 = this.game;
          if (_0xd315b1.winner) {
            this.fireworks(_0xd315b1);
          }
          var _0x3d79b8 = _0x1bde79.config;
          var _0x24909b = _0x3d79b8.deathDuration;
          var _0x1d5a40 = _0x3d79b8.regenDuration;
          var _0x14f4fe = _0x3d79b8.buffDuration;
          var _0x5b93ea = _0x3d79b8.baseHP;
          if (_0xd315b1.scheme.buff && (_0xd315b1.scheme.HP = Math.min(_0xd315b1.scheme.maxHP, _0xd315b1.scheme.HP + _0x5b93ea / _0x14f4fe * _0x37b1d1), _0xd315b1.scheme.buff = Math.max(0, _0xd315b1.scheme.buff - _0x37b1d1), _0x1bde79.visible)) {
            var _0x316a74 = _0x1c98db.alloc(0, 1).rotate(Math.random() * Math.PI * 2).mulScalar(10 + Math.random() * 20);
            var _0x22641a = (1 + Math.random() * 0.5) * 1.5;
            var _0x208749 = 250 + Math.random() * 250;
            var _0x4bceb3 = -_0x22641a * 0.7 * (1000 / _0x208749);
            var _0x74da97 = ["#00ff00", "#00cc00", "#00aa00", "#006600", "#003300"];
            var _0x137931 = _0x1c98db.alloc(0, 1).rotate(Math.random() * Math.PI * 2).mulScalar(Math.random() * 3);
            var _0x304bc1 = _0x4bf1e3.alloc(null, _0x74da97[~~(Math.random() * _0x74da97.length)], _0x137931, _0x316a74, null, Math.PI * 2 * (1 + Math.random()) * Math.sign(Math.random() - 0.5 || 1), _0x22641a, _0x4bceb3, _0x208749, null, 2, _0xd315b1);
            _0x1bde79.particles.push(_0x304bc1);
          }
          if (_0xd315b1.scheme.safe) {
            _0xd315b1.scheme.HP += _0x5b93ea / _0x1d5a40 * _0x37b1d1;
            if (_0xd315b1.scheme.HP > _0xd315b1.scheme.maxHP) {
              _0xd315b1.scheme.HP = _0xd315b1.scheme.maxHP;
            }
            return;
          }
          _0xd315b1.scheme.HP -= _0x5b93ea / _0x24909b * _0x37b1d1;
          if (_0xd315b1.scheme.HP < 0) {
            _0x1bde79.kill(_0xd315b1, undefined, 9);
          }
          if (_0x1bde79.visible) {
            var _0x1d670a = ~~((1 - _0xd315b1.scheme.HP / _0xd315b1.scheme.maxHP) / 0.1);
            var _0x4d4ac0 = ["#ff0000", "#cc0000", "#aa0000", "#660000", "#330000"];
            if (Math.random() > _0x1d670a / 10) {
              return;
            }
            var _0x1ac938 = _0x1c98db.alloc(0, 1).rotate(Math.random() * Math.PI * 2).mulScalar(20 + Math.random() * 50);
            var _0x59e3a6 = (1 + Math.random() * 0.5) * 1.5;
            var _0x32c2c8 = 500 + Math.random() * 500;
            var _0x5f22f3 = -_0x59e3a6 * 0.7 * (1000 / _0x32c2c8);
            var _0x3e81cc = _0x1c98db.alloc(0, 1).rotate(Math.random() * Math.PI * 2).mulScalar(Math.random() * 5);
            var _0x46d946 = _0x4bf1e3.alloc(null, _0x4d4ac0[~~(Math.random() * _0x4d4ac0.length)], _0x1c98db.clone(_0xd315b1.position).add(_0x3e81cc), _0x1ac938, null, Math.PI * 2 * (1 + Math.random()) * Math.sign(Math.random() - 0.5 || 1), _0x59e3a6, _0x5f22f3, _0x32c2c8, null, 1);
            _0x1bde79.particles.push(_0x46d946);
          }
        }
      }
    }, {
      key: "update",
      value: function (_0x3cefe6) {
        var _0x595e67;
        var _0x3a5825;
        var _0x55ae34;
        var _0x41c972 = this;
        var _0x34a2d1 = this.game;
        _0x595e67 = this.game;
        _0x3a5825 = _0x595e67.config;
        _0x55ae34 = _0x595e67.player;
        _0x595e67.level = _0x55ae34 ? _0x798ece(_0x3a5825.startBotLevel, 1, _0x55ae34.percent) : _0x3a5825.noPlayerBotLevel;
        if (_0x3a5825.botLevel !== -1) {
          _0x595e67.level = _0x3a5825.botLevel;
        }
        _0x595e67.units.forEach(function (_0x25549d) {
          if (_0x25549d !== _0x55ae34) {
            var _0x5aa542 = Math.min(1, Math.max(0, _0x595e67.level + _0x25549d.jitter));
            var _0x1913b9 = _0x3a5825.botAggroMin;
            var _0x4cf9af = _0x3a5825.botAggroMax;
            var _0x3f4a29 = _0x3a5825.botDefMin;
            var _0x4cd585 = _0x3a5825.botDefMax;
            var _0x1bd1de = _0x3a5825.botGreedMin;
            var _0x4f34f8 = _0x3a5825.botGreedMax;
            var _0x45c734 = _0x3a5825.botSafetyMin;
            var _0x207097 = _0x3a5825.botSafetyMax;
            switch (_0x25549d.type) {
              case 1:
                _0x1913b9 *= 1.25;
                _0x4cf9af *= 1.25;
                break;
              case 2:
                _0x1bd1de *= 2;
                _0x4f34f8 *= 1.1;
                _0x45c734 *= 0.75;
                _0x207097 *= 0.75;
                break;
              case 3:
                _0x1913b9 *= 0.75;
                _0x4cf9af *= 0.75;
                _0x1bd1de *= 4;
                _0x4f34f8 *= 1.1;
                _0x45c734 *= 0.5;
                _0x207097 *= 0.5;
                _0x3f4a29 *= 2;
                _0x4cd585 *= 2;
            }
            _0x25549d.aggro = _0x798ece(_0x1913b9, _0x4cf9af, _0x5aa542);
            _0x25549d.greed = _0x798ece(_0x1bd1de, _0x4f34f8, _0x5aa542);
            _0x25549d.safety = _0x798ece(_0x45c734, _0x207097, _0x5aa542);
            _0x25549d.def = _0x798ece(_0x3f4a29, _0x4cd585, _0x5aa542);
          }
        });
        _0x34a2d1.units.slice().forEach(function (_0x2f8a57) {
          _0x41c972.updateUnit(_0x2f8a57, _0x3cefe6);
        });
        var _0x2c2db7 = this.stages[this.current];
        this.timer += _0x3cefe6;
        if (this.current < this.stages.length && this.timer > _0x2c2db7.preparing && _0x2c2db7.active()) {
          this.timer = 0;
          this.current++;
          var _0x279338 = this.stages[this.current].init;
          if (_0x279338) {
            _0x279338();
          }
        }
      }
    }, {
      key: "scores",
      value: function (_0x47cdeb) {
        return _0x47cdeb.statistics.kills;
      }
    }, {
      key: "result",
      value: function (_0x262b0a) {
        return this.scores(_0x262b0a);
      }
    }, {
      key: "print",
      value: function (_0x3edc7f, _0x2d0164) {
        var _0x1640e9 = _0x3edc7f ? this.scores(_0x3edc7f) : _0x2d0164;
        return `${_0x1640e9}`;
      }
    }, {
      key: "checkWin",
      value: function () {
        var _0x179c63 = this.game;
        if (_0x179c63.player && _0x179c63.player.team.percent > 0.9999) {
          _0x179c63.player.team.percent = 1;
          _0x179c63.gameOver(0);
        }
      }
    }, {
      key: "spawnBot",
      value: function (_0x22932a) {
        var _0x4a8958 = this.game;
        var _0x4a9a57 = _0x4a8958.config;
        var _0x542ca8 = _0x4a9a57.baseRadius;
        var _0x2319d3 = _0x4a9a57.baseDensity;
        if (_0x4a8958.nameManager.aviable() && _0x4a8958.skinManager.available()) {
          var _0x341fca;
          var _0x9fc7a6;
          var _0x203a26;
          var _0x1b1b72 = [];
          if (!_0x9fc7a6 || !_0x203a26) {
            while (_0x4a8958.nameManager.aviable() && (!_0x341fca || _0x341fca.user)) {
              var _0x5c6239 = _0x4a8958.nameManager.get();
              if (_0x5c6239.name) {
                _0x9fc7a6 = _0x5c6239.name;
                _0x203a26 = _0x5c6239.skin;
                _0x341fca = _0x4a8958.skinManager.has(_0x5c6239.skin);
                _0x1b1b72.push(_0x5c6239);
              } else {
                _0x9fc7a6 = _0x5c6239;
                _0x341fca = {};
              }
            }
            if (!_0x341fca || !!_0x341fca.user) {
              _0x203a26 = "";
            }
            _0x1b1b72.pop();
            _0x4a8958.nameManager.release(_0x1b1b72);
          }
          var _0x421643 = _0x4a8958.spawner.createBot(_0x4a8958, _0x9fc7a6, _0x22932a);
          var _0x1361cf = _0x4a8958.createBase(_0x48902a(_0x22932a, Math.round(Math.PI * 2 * _0x542ca8 * _0x2319d3), _0x542ca8));
          _0x1361cf.join(_0x421643);
          var _0xf04a08 = _0x4a8958.createTeam();
          var _0xbd039f = _0x4a8958.skinManager.get(_0xf04a08, _0x203a26);
          _0xf04a08.skin = _0xbd039f;
          _0xf04a08.bases.push(_0x1361cf);
          _0x1361cf.team = _0xf04a08;
          _0x421643.team = _0xf04a08;
          _0x421643.team.units.push(_0x421643);
          _0x421643.updateSensors();
          _0x421643.fsm.update();
          return _0x421643;
        }
      }
    }, {
      key: "startMatch",
      value: function (_0x42784a) {
        var _0x5973da = this;
        this.titled = false;
        var _0x20974a = this.game;
        _0x20974a.ignoreIntersections = true;
        _0x20974a.visible = false;
        _0x20974a.units.slice().forEach(function (_0x105f07) {
          return _0x20974a.kill(_0x105f07, undefined, 6);
        });
        _0x20974a.visible = true;
        _0x20974a.particles.forEach(function (_0x6e43d1) {
          return _0x6e43d1.release();
        });
        _0x20974a.particles = [];
        _0x20974a.player = null;
        var _0x251485 = _0x20974a.config;
        var _0x4b1342 = _0x251485.baseRadius;
        var _0x192471 = _0x251485.teamsCount;
        this.preparing = true;
        this.nextZoneCenter = null;
        this.nextZoneRadius = null;
        this.currentZoneRadius = _0x20974a.border.radius;
        this.currentZoneCenter = _0x20974a.border.center.clone();
        this.current = 0;
        this.timer = 0;
        clearTimeout(this.spawnerTimeoutId);
        clearTimeout(this.restartTimeout);
        var _0x46d084 = _0x48902a(_0x20974a.space.center, _0x192471, _0x20974a.border.radius - _0x4b1342 * 3);
        this.startPositions = [];
        function _0x3ec25a(_0x3a26ef) {
          _0x5973da.startPositions.push({
            bot: _0x5973da.spawnBot(_0x3a26ef.clone()),
            position: _0x3a26ef
          });
        }
        for (var _0xaab654 = _0x42784a ? 1 + ~~(Math.random() * (_0x192471 - 2)) : 1, _0x320a17 = 0; _0x320a17 < _0xaab654; _0x320a17++) {
          var _0x4be9f1 = _0x46d084.shift();
          _0x3ec25a(_0x4be9f1);
        }
        (function _0x395616() {
          var _0x550e44 = _0x46d084.shift();
          if (_0x550e44) {
            _0x3ec25a(_0x550e44);
            _0x5973da.spawnerTimeoutId = setTimeout(_0x395616, 500 + Math.random() * 2000);
          } else {
            _0x5973da.preparing = false;
          }
        })();
        if (_0x42784a) {
          var _0x452035 = {
            position: _0x46d084.shift()
          };
          this.startPositions.push(_0x452035);
          return _0x452035;
        }
      }
    }, {
      key: "init",
      value: function () {
        this.startMatch();
      }
    }, {
      key: "death",
      value: function (_0x21c3c7) {
        this.game.genDestructParticles(_0x21c3c7.track.polyline.segments, _0x21c3c7.team.skin, 1, 5);
        this.game.genFlashParticles(_0x21c3c7.position, _0x21c3c7.team.skin);
      }
    }, {
      key: "kill",
      value: function (_0x15302a, _0x9d48df) {
        var _0x1cf4a2 = this.game.config;
        var _0x156176 = _0x1cf4a2.killHP;
        var _0x3d9f92 = _0x1cf4a2.buffDuration;
        var _0x2a7795 = _0x1cf4a2.baseHP;
        _0x15302a.scheme.maxHP += _0x156176;
        _0x15302a.scheme.buff += _0x3d9f92 * (_0x156176 / _0x2a7795);
        if (_0x15302a.isPlayer) {
          this.game.labels.push(new _0x5e7208({
            text: `+${_0x156176} to maximum HP for killing ${_0x9d48df.name}`,
            color: "#dddddd",
            stroke: "#363331",
            size: 24,
            target: _0x15302a,
            duration: 2000,
            position: new _0x1c98db(0, -35),
            transformers: [function (_0x3fcbba) {
              var _0x560c3d;
              var _0x2787a6;
              _0x560c3d = _0x3fcbba.stage;
              _0x2787a6 = Math.PI * 2 / 3;
              _0x3fcbba.scale = _0x560c3d === 0 ? 0 : _0x560c3d === 1 ? 1 : Math.pow(2, _0x560c3d * -10) * Math.sin((_0x560c3d * 10 - 0.75) * _0x2787a6) + 1;
            }],
            fn: function (_0xbf58e1) {
              _0xbf58e1.change({
                duration: 300,
                transformers: [_0x5e7208.fader()]
              });
            }
          }));
        }
      }
    }, {
      key: "comeback",
      value: function (_0x3249f7, _0x3d9504) {
        var _0x1eaea9 = _0x3d9504.increment;
        _0x3d9504.rise;
        _0x3d9504.victims;
        _0x3d9504.game;
        var _0x5cfeea = _0x1eaea9 * 100000;
        _0x3249f7.scheme.buff += _0x5cfeea;
        if (_0x5cfeea >= 100 && _0x3249f7.isPlayer) {
          this.game.labels.push(new _0x5e7208({
            text: `+${(_0x5cfeea / 1000).toFixed(1)}s buff`,
            color: _0x3249f7.team.skin.colors.nick,
            target: _0x3249f7,
            duration: 1000,
            position: new _0x1c98db(0, -25),
            transformers: [_0x5e7208.mover({
              velocity: new _0x1c98db(0, -45),
              acceleration: new _0x1c98db(0, 60),
              tag: "mover"
            })],
            fn: function (_0x44cd3f) {
              var _0x3c98f7 = _0x44cd3f.getTransformer("mover");
              _0x44cd3f.change({
                duration: 300,
                transformers: [_0x3c98f7, _0x5e7208.fader()]
              });
            }
          }));
        }
      }
    }, {
      key: "decrease",
      value: function (_0x2c0a37, _0x301a7d) {
        var _0x19eb50 = _0x301a7d.base;
        var _0xb00701 = _0x301a7d.poly;
        this.game.genDestructParticles(_0xb00701.segments, _0x19eb50.team.skin, 1, 15);
      }
    }, {
      key: "active",
      get: function () {
        return this.current < this.stages.length && this.timer > this.stages[this.current].preparing;
      }
    }, {
      key: "name",
      get: function () {
        return "BattleRoyale";
      }
    }]);
    return _0x4ec47a;
  }();
  var _0x326b7b = {
    createBot: function (_0x315ecd, _0x7462e, _0x18ce02) {
      var _0x5067a5 = [0, 0, 0, 0];
      var _0x27312e = [[1, 2, 2, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 2, 2, 2, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0], [1, 1, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0]];
      _0x315ecd.units.forEach(function (_0x1c2303) {
        if (_0x1c2303.isBot) {
          _0x5067a5[_0x1c2303.type]++;
        }
      });
      _0x315ecd.bots = _0x5067a5.slice();
      for (var _0x5465fa = _0x27312e[Math.round(_0x315ecd.level * (_0x27312e.length - 1))], _0x47a60f = -1; _0x5067a5[_0x5465fa[++_0x47a60f]] > 0;) {
        _0x5067a5[_0x5465fa[_0x47a60f]]--;
      }
      var _0x2d1601 = _0x5465fa[_0x47a60f];
      _0x315ecd.bots[_0x2d1601]++;
      var _0x11b164 = new _0x506598(_0x315ecd, _0x7462e, _0x18ce02, _0x2d1601);
      _0x315ecd.addUnit(_0x11b164);
      return _0x11b164;
    },
    respawn: _0x4a1eb2,
    spawnBot: _0x4a1eb2,
    spawnPlayer: function (_0x2be99c, _0x2b8e5f) {
      var _0x3a4d4d = arguments.length > 1 && _0x2b8e5f !== undefined ? _0x2b8e5f : {};
      var _0x437aa2 = _0x2be99c.config;
      var _0x250c74 = _0x437aa2.baseDensity;
      var _0x45387c = _0x437aa2.baseRadius;
      _0x437aa2.teamsCount;
      var _0x5b4f5e = _0x2be99c.scheme.startMatch(true);
      var _0x5409bd = _0x5b4f5e.position.clone();
      var _0x145461 = _0x3a4d4d.name;
      var _0x2874d6 = _0x3a4d4d.skin;
      var _0x35a27a = new _0x39ade6(_0x2be99c, _0x145461 || _0x2be99c.language.defaultPlayerName, _0x5409bd);
      _0x5b4f5e.bot = _0x35a27a;
      var _0x4a069b = _0x2be99c.createBase(_0x48902a(_0x5409bd, Math.round(Math.PI * 2 * _0x45387c * _0x250c74), _0x45387c));
      _0x4a069b.join(_0x35a27a);
      var _0x1818af = _0x2be99c.createTeam();
      (_0x35a27a.team = _0x1818af).units.push(_0x35a27a);
      var _0x1bfefa = _0x2be99c.skinManager.get(_0x1818af, _0x2874d6, true);
      _0x1818af.skin = _0x1bfefa;
      _0x1818af.bases.push(_0x4a069b);
      _0x4a069b.team = _0x1818af;
      _0x2be99c.addPlayer(_0x35a27a);
      return _0x35a27a;
    }
  };
  var _0x19860b = function () {
    function _0x15b1d1(_0x143f05) {
      _0x3138e1(this, _0x15b1d1);
      this.pool = _0x143f05;
    }
    _0x433dc2(_0x15b1d1, [{
      key: "get",
      value: function () {
        return this.pool[~~(Math.random() * this.pool.length)];
      }
    }, {
      key: "aviable",
      value: function () {
        return true;
      }
    }, {
      key: "request",
      value: function () {}
    }, {
      key: "release",
      value: function () {}
    }]);
    return _0x15b1d1;
  }();
  var _0x4bd796 = "!!!JORDAN!!!\n!@#$%^&*()\n!AMERICA!\n!GO! ANTRONI\n!MEXICO!\n#1\n#1 Malta\n#20$\n#add north k\n#canada\n#canadawin\n#Canadian\n#DOGO\n#kittycorn\n#Love\n#shopatshara\n#superstar#\n#teamtrees\n#TeamUSA\n#WIN\n#zephyr\n$$$$$$$$\n$$$$$$$$$$$$\n$_$\n$1000=1%\n$HydroFlask$\n$TheCamilo$\n( . )( . )\n( ͡° ͜ʖ ͡°)\n()(_)()\n(:\n(▀̿Ĺ̯▀̿)\n(▀̿Ĺ̯▀̿+̿)\n(☢️)\n(0_0)\n(0_0) Elixr.\n(0_0) GUNNER\n(0_0)USA4EVR\n(PAK)AMMAD\n(USA)\n(づ｡◕‿‿◕｡)づ\n************\n****KONG****\n*ÙwÚ*\n*тип крутой*\n.\n...\n-....-\n...???\n..OTTOMAN..\n/\n////\n:------\n:)\n:))\n:):):):):):)\n:-_-_--_0\n:3\n:D-l-<\n:l\n@##/////////\n@butcheck.Bo\n@FRANCE\n@yana\n[GD]Daninot\n[HaHa]x2broJ\n[IX]FIREPWR\n[IYI]Diriliş\n[P] Parynhar\n[P] Quest On\n[SM\n[SM]+PRO\n[T]TARGET\n[TT]Fatso\n^_^\n-_-\n-_GO=GREEN_-\n_Russia_\nSDD\n{_MYTHICAL_}\n{AZ} hhhh\n{Trump 2020}\n|==|=======>\n|A+B|≤|A|+|B\n~Royo~\n~siam~\n~strontium~\n~Typical_YT~\n¡COLOMBIA!..\n¡COLOMBIA-.!\n₮ⱧɆ+₭ł₦₲\n〘☢〙\n꧁༒☬Yee☬༒꧂\n++\n+++KONG+++\n+❤гмаолпоапл\n</keysmash>\n<algeria\n>:)\n⫷♔ツ⫸₭€₣₭Ø\n◙ Cube ◙\n█▬█ █ ▀█▀\n█▬█+█+▀█▀\n☾★🇵🇰\n♂emily♀\n♥☻☺France☺☻♥\n♥ELENA♥MX♥\n♥Emma♥ ^^\n♥OH FRANCIS♥\n✠Huxery✠\n❤AMERICA❤\n❥❥𝙪𝙬𝙪+✉\n✨   ℱỮŘ¥ ✦\n☙Ѻ❧\n⚖️ for 🇵🇰\n0.0\n0TanqR0_YT\n1%=$1000\n1%=1$\n1%=1000\n100% legal\n100% PLS\n100%BOY\n100%PLS\n1000$=5%\n1000+1.\n100000 like\n123 yur dead\n1234567890hm\n1W\n2 shotsVodka\n2.0\n2.cuz\n2.cuz sweden\n20 BOMS PLS\n20cent\n22W\n2bias\n2mokey cat\n358/2\n3D\n3r1k\n5 world cups\n5+world+cups\n68.93%\n69420fu\n6RSKY9\n700fu\n7snoo\n8===D 69\na\nA Bit Tired\na cat\na good name\nA MAAAAD MAN\na person\nA small loan\nA_person\nA+\na+guy\nA+Person\nAA\naa\naaa\naaaaa\naaaaaaa\naakashtheboi\nAakhyan\naakkash\naaon\nAarav\naarope\naayash  pro\naayyy\nAB\nab\nababua\nabbeäbög\nÄbbëï\nAbby\nAbc\nabc\nAbc123\nabcde\nabcdefg\nabcneat123\nAbdul\nAbdul aziz\nabdullahhi\nabdulmajid\nabekat\nabi\nabir\nABIR.216\nAboriginal\nAceOfSpades\nachoo\nachtung\nacts2.38(bi)\nad devil\nADA\nAdam\nADAM\nADAWE\nADD JZD_1029\nAddie\nAddie!🍰!!!!\nADR\nAdrian\nADROS\nadsa\nADSF\nAdventurer2\nÆ\naeiou yyyy\nAG31\nagent x9999\nAgi\nAgt+zsafety\nah baba\nahh\nahhaha\nahhh\nahmad\naid\nAidan\nAiden\nAIDEN ROBINS\naids\nAigarosik\nair\nAIRFORCEGIRL\nAis\naiskkdSK\naj\nAJ PLAYZ\nAJYomastr\nak47\nAK-47juice\nakaash\nakaysha\nAkbar\nAkira\nAl\nalabama\nAlan Edam\nAlan Walker\nalani akacat\nALB\nAlba\nalban\nalbania\nAlbania\nALBANIA\nAlBaNiA\nAlbania4ever\nalbert\nAlbertEnstin\nAlbertnoobb\nalegor\nAlejo+Toro\nalek\nalelilisisi\nAlen Jins\nalen+roshni\nAleQu\nAlex\nalex\nalexa190\nalexandra\nAlexey\nALEXIS\nalexx\nAlexzandra\nalgeria\nALGERIA\nalgerian boy\nalgirian boy\nAli\nali raza\nAli Sh\nALI07\nAliA\nalice\naliraza\naliv\nALIVE\nAll Blacks\nallahakbar\nallect\nalli_a\nAlmidorya\nalpha wolf\nAlred\nAlvato\nalx\nAlx\nAlyssa\nAM_savage26\namanda\namantegado\nAmarica\nAmbush flex\nAmelcia\namelie\nAmelie\namerica\nAMERICA\nAmerica\nAMERICA !!!!\nAMERICA YEET\namerica=best\nAMERICABABY\nametz\namg friends\namit sharma\nAmmar\nAnarchy\nanasaqil\nAnasun\nAncalagon\nANCIENT01\nAnd I oop\nAnd i oop\nandres\nAndrey\nandrey 22807\nandroid\nAndromeda\nandrw22\nangel\nAngel\nangelamunt\nangelo 1510\nangelo abas\nangg31\nanimals 101\nAninha\nanis\nanita a\nanna\nanna bortion\nANNAFEDE\nAnonihouse\nAnonymous\nANONYMOYS\nanyád\nⒶⓄⒾⒻⒺ\nAON\napepa\nApple Inc.\napply+pie\nArabs+no.1\naraceli\naragatina\nArarat\nArdian\nargentina\nARGENTINA\nArgentina\narhaan\nAriANNA\nARIANNA77\nariel\nAritz\nArizona\narmagedon\nARMENIA\nÁrpád vezér\nartem\narthur\nArtury\nARYAN RACE\nas20\nAsd\nasd\nasdf\nasdfgh\nAsh\nash\nashe\nashley\nAshmita\nAShoky\nAsian Man\naspessoas\naspod\nasta\nATAHAN\natankwadi\natizaz\nAtletiMadrid\nAtomic_Nut\nattack70\naubrie\nAudrey\nAuri :3\nAurora\nAUS\nAus+best\nAusie\nAussie\naussie\nAUSSIE\nAussie ****\naussie 1\nAUSSIE 2\nAUSSIE 64\nAussie Aussi\nAussie beast\nAUSSIE ROO\nAussie+Aussi\naussie18\naustin😠😇😜\nAustrailia\nAustralia\nAUSTRALIA\naustralia\nAustralia 1\nava\nAvadaKedavra\nAvagyan\nAvalak13\navalina\nAvans\navd\naver\navi\nAvocadoToast\nAvrey\nawd\nawe\nAwesome\nawesome\nAWESOME!\nawien chewie\naxel.liam.kl\nAXIS\nAyaan\nayaz\nAYBARS\nayberk\nayden\nAytric\nAyuma\naz\nazan\nAZERBAIJAN\nAzerbaijan\nazerbaijan\nAzerbaycan\nAZƏRBAYCAN\nazz\nAzzyland\nB\nb\nB GFCRTEN\nB_SAUCE3 gam\nb2by\nbab\nBabilawi\nBaby\nbaby lips\nbabyJack7\nBACK IN NAM\nbad+bunny+\nbadr\nBaguette\nBahartet\nBahrain\nbahraini3451\nBaju\nbaka\nBALI\nbaligeul\nbalša\nbalta\nBalzac\nbam\nbamam\nBAN\nbanana\nBanana\nBANANA\nBanana boat\nbanana man\nbananapotato\nBangladesh\nBANGLADESH\nBara\nBarni\nbarrhet\nbart\nbart simpson\nbartolo\nBaryonx\nBäschti\nbasem\nBasher\nbatty\nbautista\nbazing\nBB\nbb\nbbb\nBBB\nbbobbobo\nBC190\nbd212\nBeakers Lab\nBeanos\nbeanos\nbear\nBeast\nbeast\nBeast+Mode\nBeau\nBecca\nBEEF CURRY\nbeep\nBees\nbejnjamin\nBelarus 2\nbelgium\nBelgium team\nBella360\nbellathecat\nBello\nBelyn G.\nben\nBen\nBEN\nben dover\nBenDover\nBÉNÉ\nBenet\nbenitocamela\nBenji\nberddewalvis\nBernie+2020\nBernie2020\nbest\nBEST BOSS\nBest Player\nbest.io\nBestie#2\nbestisindia\nbesty\nbfcjfv\nBFFs\nbh\nbhhygu\nbhoongar\nbia\nbiche\nbicth\nbielARTICO\nBig\nbig boi\nbig bois\nbig chicken\nbig dad\nbig daddy\nBig Daddy\nbig e\nBIG MAC\nbig nicca\nbig papa\nBIG SHAQ\nbig shaq\nbig sista\nbig slangers\nbig+boy\nBig+Boy\nBig+Boy=NOOO\nbig+brain\nBIG+BRAINS\nbig-boy1158\nbigchungus\nBigChungus69\nBIGETRON\nBIGGERSON\nBIGGGGBOY!\nbiggiecheese\nbigpeen69\nBigRgo\nBigs\nBigT\nbigtoe\nBiH\nBiiG Makk\nBiju Mike\nbill\nbillaraa 1\nBilly\nbillybai\nBillz.\nBin\nBinder\nbip\nbiro BR\nbishop\nBj\nBJ\nbjorn\nBK\nBl3ckJack YT\nBL7\nBlackFlash\nBlacky\nblake\nblantra\nBlaster\nBLClRE\nBleh\nbleumeanie\nbling\nBlink\nBlip Blop\nBLITZ\nBlizzard156\nBlob\nBLOB BOY\nBlobble\nblobs\nblobsly\nBlocked\nBLOCKITY\nBlood4Life\nblossom\nblow\nblow me\nblu+the+best\nblub blub\nblue7y\nblueberry\nblueberrypie\nblueboy\nbluebronco7\nbluhbluh\nblur\nBlur 2\nblur 3\nBM\nbmw\nBO$$\nboas\nbob\nBOB\nBob\nbob esponja\nbob ross\nbob the noob\nbob100\nbob2\nboba\nBoBa\nbobbone\nbobert\nBOB-omb\nbobplayz\nbobthebuilde\nbobyz\nBoch is back\nbode\nboe\nBOEF\nBog\nbog leo\nBogDan\nBognar\nBoho\nboi\nBoi\nBOi\nboiii\nboizzzzzzzzz\nbojkata\nbok\nboneless\nBonitão_br\nBonny\nboo\nboof\nBOOFI\nbooger08\nBooh!kkake\nBOOOOOOOOOY\nBOOP\nboot\nbop\nbordbistro\nbörk viking\nborna\nbosna\nBOSS\nBoss\nboss\nboss+TW+BM\nBossDude 2.0\nbot\nBOT\nbot boooooot\nBOT+2.0\nBOT1\nbot1212\nbot12122\nbotaaaaaa\nBots\nbouji\nboy\nboy+loves+me\nBoysInGreen\nboyviking\nbozo\nbraaaaaaaaap\nbraaaaaap\nbrady\nBrainiac14\nBrasil\nBRASIL\nbrasil\nBRASIL CARAI\nbrasil-matt\nBRAXTON$$$\nBRAXTON$$$$$\nBrayan\nBRAZIL\nBrazil\nbrazil\nBrazil mito\nBRAZIL MITO\nBrazil Mito\nBRAZIL MITO2\nBrazil+mito\nBRAZILRULES!\nBrazilSnake\nbrenaopvp\nBrendoo1\nBrett\nBrian\nbrickboss\nBRITIAN\nBritish\nBritSpeed\nbro\nBrockly san\nbrofourt\nBrookie_uwu\nbrooklyn n\nbrooxslugger\nBROSKITO\nBrownBear\nbru\nBruh\nbruh\nBRUH\nbruklin\nBrunofoda\nbrush my hat\nBRUTE\nbryleigh\nBTS\nbts army\nbubba\nbubby\nbucins\nBuddy\nBuguinha_13\nBulgaria\nbulldog68\nBuna\nBUNINGS SNAG\nBUNNINGSSNAG\nBunnyfur\nBunnyo\nburger\nButkizz\nBúúúzi\nbuwygib\nBuz-T\nbye\nBYE\nBZX\nC\nc vcbgnbfm\nc2\nCaam\ncaarlaaa❄️\ncaca\ncaca water\ncade\ncaden\nCAIO\ncake\ncalabresa\ncaleb\nCaleb\ncalebb213\ncallum\ncam\nCANADA\nCanada\ncanada\ncanada best\ncanada sucks\ncanada trash\nCanada=life\ncanadabest\nCanadaLeader\nCANADIANS\nCandinho\nCANNON\nCantu\nCapitooooosh\nCappapotomus\nCAPS LOCK\ncaptain\nCaPtAiN_MaRs\ncarenzo\ncarl\nCARLLLLLLLLL\nCarlos\nCarolus Rex\ncarrot\ncarrots1\nCARRSRSTDYYT\nCARSONCAVE\ncart\nCarter\nCARTER\nCash\ncash\ncat\ncatboy_isaac\ncatcher\ncatforcanada\nCathal\nCaThErIne\nCatMaker\ncats\nCATS4LIFE\ncaule\nCAussier\ncc\ncc gamer\nccccc\nCerealKiller\nCF\nchags\nchai\nCHAIR\nchamp\nChampion\nchanyeol\nchao\nChào\nChaoCB\nCHAOSCC101\nchap\nchar\ncharie c\ncharlie gren\ncharlotte\nchase\nChase H.\nChaselliot9\nChavez :v\nChavez Vive\nchckenvnd_lo\nCheckmate\nchee ne ma\ncheeki breek\nCheerwine\ncheesballxx\ncheese boi\ncheeseburger\ncheezydibz\ncheng chang\nChesse\nChewie\nchgicken\nchicken\nchico rey\nChile\nchill\nchill B )\nChilllllllll\nCHiNA\nchina\nChina\nCHINA\nCHINA RULES!\nCHINGONA\nchinoooo\nchistmas!!!!\nChloe\nChomp\nChopper\nchris\nchrisbrunt\nchristian\nchristine\nChristmas\nchuckll boy\nchuglet\nchungo scrun\nchynn\nCirrus\ncisarmilos\ncj\nclaire\nClara\nclash\nClatter\nClaudia\nClenched\nClint\nC-Money\ncnhwrg\ncoal\ncobby\nCobby\ncobos\nCocaCola\ncoco\ncode lazar\nCode: wolf\ncodelazaryet\ncolombia\nColombia\nColombia hpt\ncome on uk\ncome tudo\ncomi sua mae\nCOMMIE KILLA\ncommonwealth\nCommunism\nComputer_01\nConic\nconor\nConor\nconquistame!\ncontrolw=hax\nCookie Gamer\nCookieGuy\ncool\nCOOL\ncool  boy\ncool guy 39\nCool man\ncooleo\ncoop\nCooper\nCORBIN$$$$$$\nCorey\nCorvus\nCosmic Bagel\nCosta rica\nCougarclaw\nCoulombCube\nCow+goes+moo\nCOYR213\nCR7\nCr7\ncrack\ncrackhead\nCraftian\ncrainer\nCrainer\ncrainer1422\ncrazy nonga\nCRAZYARNO\nCrazyKidooo9\nCreeperAwMan\nCrimeaisours\ncristianocr7\nCroatia\nCroatia4Life\nCrocomire\ncrown killer\nCroydzzz\ncskns\nctrl w\nctrl w team\nctrl+w\nctrl+w (HACK\nctrl-w\nctrlwforspee\nCtrlWToHack\ncube\ncubix\nCUCA\ncujo\ncullengreat\ncupcake\nCurry\ncute+hunter\nCute247\ncw\nCYBERHUNTER\ncyka blayt\nCyka Blyat\ncyprus demon\nCyrus 2\nCzech Empire\nCzechia\nd\nda way\ndab\ndab master\nDaCeeb\ndad\nDad\ndadaddy\ndaddy\nDaddy\ndaddyo\nDaFisHBoy83\nDafloppa\ndaichei22\nDakDudez\ndakota\nDALE SNAIL\nDaleWhite\nDallasusa\nDaltonW_GG13\ndalyarak\nDAMONKEYPREZ\ndan\ndance+is+fun\nDancequeen\ndanger\nDanger\nDangerMouse!\ndani21\ndaniel\nDaniel\nDaniel@USA👑\nDaniella\nDanislav\ndank doge\nDanmark\ndannybot\nDanTDM\nDANTDM\ndantdm\ndanTDM\ndantegol1432\ndany_many\nDANZ\ndapizzaman\nDarius\nDark\nDark Nebula\ndarkleader\nDarkyz\ndarrison33\nDarsh\nDarth Sauron\ndasda\nDASH\nDatiMomtente\ndave\nDavid\ndavid\nDAWG8\ndawnelle\ndaws dhbabad\nday\nDAZ\nDBT_CAMERON\nDBT_diesel\nDBT_James\ndd\nDd\nddd\nddog\nDe\nde naam\ndead\nDead\nDeadpool\ndean marney\nDeath+Itself\nDEATHOFKILL\nDeathPlays09\ndebaixoviado\ndedi\ndee vegemie\nDEEMAR\nDeepak\nDEEZ NUTZ\nDegurchaff\nDeimon.EXE\nDejmian\nDem REREs\ndEm0g0RgAn\nDema\nDemid\ndemogorgon\ndemongurlie\ndenisa\nDenmark\ndennis\nDerEchte\nderf\nDerGerman\nderive omr\nDerNEGER\ndesmatasão\ndestroyer\ndestrukt\nDEUTSCHLAND\nDeutschland\nDEUTSHCLAND\nDeutshland\ndevansh\ndfew\nDGYA8805YI\ndharel\nDHP studios!\nDiamondlucas\ndiana\nDiar Arifi\ndiara\ndie\nDIE\nDie to Death\nDie+noOB\ndie25\nDieforme\nDiegoChacon\nDieku2909\nDieku2909+MX\nDiex177\ndieyou\nDiggyHole\ndigitalkids\nDiktator\ndiman\nDimka\nDimond\ndin mamma\nding dong\nDingleberry\ndingo\nDINGOEZ:(o)\ndio sama\ndio12345\nDis2008\ndisney+\ndkofjkvdfvfn\ndo\nDO CTRL+W\ndoge\nDoge\nDoh\nDom\nDomiiiii\nDominate\nDOMINIKXY\nDonald Duck\nDonald Trump\nDonald+TRUMP\ndont hurt me\nDont kill me\ndont kill me\ndont+kill+\ndont+kill+me\nDoNtAtMEbRo\nDONTKILLME\ndontkillme\ndontkillnoob\ndoof\nDOOFIS\ndoom\nDoom\nDooney\nDowdi\ndr.paper\nDracoHeart\ndragnea life\ndrago\nDragon3.0\nDrama\ndreizer\nDREWSKI\ndripak-47\nDrisikray\nDrizzyAiden\nDrogon\nDropBear\nDrUgs\nDRUNK FIG\nDRUNK OBAMA\nds\ndsallsa\ndsawwaa\ndsf\nDTMdan\ndtrgfxfghuyg\nDubai\nduc+anh\nduck\nDuck\nduck duck ya\nduck+2.0\nducky\nDucky\ndude\ndudu+lindo\ndumpstered\ndutch\ndxrk_shxdxw\ndyl\ndylanperr4\ndynamois\ndysha\nDziadzia\ne\nE\nE MASTERMORT\ne.romero\nEamon\neamon\nEastNed\neasy 1° top\nEat\neAt iT\neat me0\neat+me\nebuking\ned\neden1\nEder\neder\nedgar\nEDKH\neeee\neeeeeeeeeeee\nEeonegee\neevee\negg\nEGGGGGGGG\nEgoitz Hernandez\nEgypt\neh\nehan\nel guero\nEl Salvador\nEL SALVADOR\nEl Thirox\nEL VIEJO360\nelaine\nELAM0\nELENA174RUS\neli\nElias\nelias sucks\nelijah\nElijah\nEliminater\nEliTinyRex\nELItinyREX\nella\nElmastroOO\nelmira\nEloyFerreiro\nƏlqasım\nElRoberto93\nelsacha35\nelvis\nELVIS OMG\nElWachin\nEma\nEmad\nEmanuel\nemerald\nemil\nemily\nemily 18\neminem\nEMINEM\nemir\nEmirkohall\nEmirPr14\nemmet\nempire of is\nEMPIREMEMES\nemre sikecek\nEngille\nENGLAND\nEnsar_V7-123\nEnzito\nEnzo plays\nepic+noob\nepic+pro!!!!\nEquipoMéxico\neragon\neres mariqua\neric\nerichbete\nErick\nerick\nERICLOL\nErik\nErli\nERNAR\nErnesto\nerwef\nEshla\nESPAÑA\nEspañita\nespecteral\nestonia\neth50%\nethan\nEthan\nEthnic Brit\netyg6f4567v7\neua\neufwe\nEugene.com\nEve Get\nEverleigh224\nEveryday bro\nEvgenii\nevil\nEvil John\nEWA FAKA\nEX Guardian\nexpectations\nEYE LIGMA\neyes\nez number 1\nf\nF\nf Shaman\nf u       .n\nF*** rUsSia\nf**k\nF*ck off\nF*ck+off+\nf111\nfaa\nfacundo\nfady\nFAHEEM\nfaith\nfaku\nFalak\nFANAF\nfantastic 5\nfar5\nfarhan\nFARİD\nfarleyfun\nfat pig!!!!!\nfat+pig!!!!!\nfatafat land\nfatanah\nFATHERLAND\nfatty\nfaye\nFaZe jarvis\nfaze lucas\nFaze_Uzamaki\nFaZeAtlantic\nFBI\nfbi\nFCK U\nfddjbkhbjkdf\nfdgfh\nfdkjm\nfearless70\nFeetus\nfermito2008\nFernanda\nFernanfloo\nFERRIX\nFEW\nff\nfff\nffff\nfgeetv\nFGEETV FAN\nfgeev\nfgfd\nFGTEEV\nFgteev\nfgteev\nfgteev Aarav\nFGTEEV DAD.\nFGTEEV DUDDY\nfgteev duddy\nfgteev fan\nFgteev Lexi\nFGTEEV+DUDDY\nfgtv\nfgtv fan\nfgtv+duddy\nfgtvv\nfgtvvy fan\nfgva\nfhhcvhvdvhhg\nfiawsome\nFierce\nFIFI\nFight me\nFight Me NOW\nfighter\nfilip+t.\nfilipino\nfire\nFIRE_BOY\nfirered\nFISHSTICK\nfishy\nFiVx\nfizzgig\nfj\nfJWASDKNFIO\nFlame\nflamingo\nFlash\nFletch\nFLEX TAPE LF\nflipous\nFlitzdefelar\nfloat\nfloof\nFlora\nflorida\nFlorijn\nFLYBOY\nFlying solo\nflynn\nfolk\nFOOT\nFOR AUSSIES\nFor straya\nForeigner\nForge\nForrest gump\nForrest Gump\nFORTNIT2\nFORTNITECOOL\nFotis\nfour twenty\nFox\nfoxy soap\nfoxy+soap+\nfr\nfrahermes\nfrance\nFrance\nFRANCE\nFRANCE!!!!!!\nFrancewillwi\nFranco\nFranco777\nfrancoooo\nFrancsFranco\nFrank Pepe\nFrankenstein\nfreank\nFrece\nFRED\nfreddy\nFREE FIRE\nfreek@\nFreence\nFrenchboy456\nFrenchPlayer\nfresh\nFreya\nfriemel kont\nfriend\nFrodo\nfroggyboy483\nFrooty\nFrost King\nFrostFire\nfrozen 2\nFRT\nFryskjongkje\nfsd\nfsu\nftgv+fam+boy\nfu\nfucj swedan\nFull\nFurt1\nfutdebt\nfutebol\nFutureHacker\nFUZIONS38\nfvv\nfwog\nFyre\nℱгίєηđ\ng\nG\nGaaaaaldi\nGabe\ngabe\nGabe itch\ngabe itches\ngabe+itch\nGABEE\ngabes dad\ngabi\nGabi\ngabienivaldo\nGABIFOOTBALL\ngabigol\nGABO\ngabriel\ngabriele\ngagaga\nGage\ngage\nGalaxy Paper\nGalaxy+Blitz\nGalaxyKnown\ngalexyyyyyyy\nGallardin\nGamer 101\ngamer+bent\nGamerJax11\nGamers\ngamingkhan\ngandork\nGanesti\ngang\nGanjaWay420\nGapci\nGarlictwins\ngarrett\ngato panama\ngautham pro\ngay\nGay - Niger\nGB2A\ngd.henrique\ngday mate\nGEAR 4 LUFFY\nGE-HDT\nGemany\ngemma\nGem🍔🍕🍟\ngendikari\nGeneralTOM\nGeorge🐖🐷🐽\nGeorgia\ngeorgia\nGeorgian\nGErma\nGERMAN\nGerman Guy\nGerman Reich\nGermanReich\nGermanreich\nGermany\ngermany\nGERMANY\nGermany 1944\nGermany Ian\ngerms\nGerry Adams\ngesuzzo\nget clapped\nget gud\nget rekt\nGet+off\ngetmethanos\nGetNaeNaed\nGetRektM8\ngfdxhgzs\ngfgdfsgdgd\ngfgfg\nGG\ngg\nggg\ngggg\nGggggggggggg\nggman\nggs\nghost\ngialy\ngibs 1234\ngilad ori z\nGiocatore\nGipssksmm\ngiselle\nGlaGlaGlaGla\nGlitch222\nGLORIOUS\nGlue\nGlug glug\ngm\ngmb\nGMF MATTEO\nGM-SCORPION\ngo\ngo AUSTRALIA\nGo Canada101\nGo Nepal\ngo NZ\ngoat\nGOAT\nGoAustralia🇦🇺\ngoblin\nGOCANADAGO\nGoCanadaGo\ngogeta\ngogo\ngogogadget\ngojira\nGOKU\nGoldpaper\ngoloma\ngonnacrushU\ngood\ngood girl\ngood old USA\nGoodbye\ngoogle+\nGOOIE\nGOOTED\ngordominais\ngorqui\nGota+(GER)\nGP/Denmark\nGrace\nGrades\nGradovskY\nGramma\nGran\nGrease light\nGreatGermany\ngreece\nGreek Geek\nGreen\ngreen\nGreg\nGregory\ngreta rex\nGrey\ngrey couch\nGrian\nGringo\ngrucci_gang\nGuardsman\nguatemala\nGuava+Juice\nGucci\ngui10\nGuilherme\nGuizinho\ngurnishan\nGUS\nGustav Vasa\nGustav2Adolf\ngustavo\nguy\ngyggygygygyg\nh\nh.g.\nha§cker\nHabilis\nhacker\nHagenGANG\nHagenGANGSTA\nhaha\nHAHAHAHAHHA\nhahahha\nhai\nhail norway\nhakan23cm\nHAKER\nhallah walla\nham\nham pizza\nhamoodeh\nhamza\nHamza\nHanii\nhank\nHappy Boy\nhappyplace34\nHar\nhar+de+snarl\nharanga\nhardik\nHarrison\nharry\nHARTK VTKUPV\nhatz\nHAWAII\nhayhay\nHazbin hotel\nHECTOR\nhedgi\nheehoo\nhehe\nheheeh\nhei på deg\nheinrik\nhejhej\nhejjj\nHekler\nHelen+\nHELO\nhelp\nHELPFOR NUKE\nhelpme\nhenk\nhenry\nHenry2209\nhenrydanger\nHenryking\nHer0\nHermione\nherobrine\nHexa\nhey\nhey you smel\nheyhey\nHEYIMCASEY\nHeylo\nheyyyyyyy\nheyyyyyyyyyy\nHGC\nhgfd\nhhh\nhhhh\nhhjjhjhjjhjh\nHHKB\nhi\nHi\nHI\nhi bob andje\nhi boy\nhi dude\nhi im stan\nhi luis\nhi peoples\nHi Walkers\nHi!\nhi+123\nhi+die\nhi+person\nhi+wyatt\nhi+😛😛😛😛\nhid\nhidde\nHidden Leaf\nHide in tree\nHIGH FIGH\nhihi\nhihihihi\nhihihihihihi\nhiiiiii\nhiiiiiiiiiii\nhikeplays\nHillyBilly\nhindustan\nhipe\nhirochima\nHitman\nHiTTVbtw\nhi😛😛😛😛\nhjb\nhjgkljşsdfos\nhjjj\nhjk\nhkiufit\nh-k-v\nhmm\nho joe\nHobbit\nhockeylover4\nhoddieryne\nhoe\nHOGWARTS\nHoi\nhola\nHolden chan\nhOle.io\nHolly\nHoly Romans\nHOLYJARVIS\nHomer_S\nHONDURAS\nHong Kong!!!\nHONZA\nHOT DEATH\nhot dog\nhour\nhouston\nhouthi rebel\nHow you doin\nhowdy\nHristijan\nhrllo\nHSWR\nhtflame\nHuddy!!!\nHUEstation\nHufflepuff\nHUGO\nHUGO-IPTV\nhugoprohaker\nHungary\nhungary\nhunter\nhuts\nhuzefa\nhvfhjjmg jvf\nhwy\nhxhxjjk\nHyacinth\nhyh\nHyper\nhytw123\ni am a noob\nI am Charles\nI AM DA🐐\ni am drad\nI AM GROOT!!\nI am Noob\ni clapped u\ni got 100nvm\ni kill you\ni love CHINA\ni love you\nI no harm u\ni no kill\ni pro $$$$$$\ni wanna die\nI want Peace\ni will eat u\ni win\ni win sike\nI.m greece\nI+am+DA+🐐+\nI+AM+DA🐐\nI+AM+MENACE\ni+will+beat+\ni9=7\nialwayswin\nIan\nibad\nice cream\nICE CREAM\nicebear42\nicecreamking\niced 2\nICEman\niceman\nICEPAJINGKO\nIda\nidiot\nIDIOT\nidk\nIDK\nIDK18\nID-OS\nidris\nIf you\nifirst4evr\nifkillmeugay\nigotthesnap\niHASYOU\nihatemy life\nIhjhy\niiiii\niiiiiiiiii\niiiiiiiiiiii\nIKEAN EMPIRE\nikjuhygtfrde\nIKKO\nilie\nill roll ya\nilovecorn\nILoveMyMommy\nIluvcats\nIm a mer\nim a toast\nIm a tree\nim depressed\nim gay mama\nim in school\nIM THE BEST\nIm your boss\nIM_IRISSH\nim+100%india\nIM+A+PAPER\nIM+A+SQUARE\nIm+Thanos\nim100percent\nima winner\nimachristan\nImaunicorn\nimbryk\nimCANADIAN\nimcoming4you\nIMGRINDIN4UK\nImJustDrunk\nimm win bruv\nimmigration\nIMPEACH !\nIMPEACH!\nImpeachment\nimpeachment\nImpeachTrump\nImperium\nimtc\nimusti42\nindia\nIndia\nINDIA\nIndia rules\nindia560020\nIndia-best\nindiaisbest\nindian\nINDIAN BOSS\nIndian game\nindian king\nIndian Pro\nindonesia\nINDONESIA\ninfinity\nInfinity\ningooooooooo\ningrid\nInklink\nINKYZ\ninuyasha\nInvensible\nio\nio2\niornmanmk75\nios.0\nIOU\nIRA\nira kot\nirairaniran\nIRAN\niran\nIRAQ\nireberrrr\nireland\nIreland\nIRELAND\nirene\nIRIS\nIrish Brit\nIRON MAN\nIron Sabbath\nironmanmk14\nironmanmk608\nirsh lad\nis the best\nisaaac\nisaac\nIsaac and Sa\nIsaac H LACS\nisaak\nISAC[TYB]\nisam\nisamil\nIsamil_pro\nISINHA\nIslambad\nismailovic15\nISMELLPENNYS\nIsrael\nisrael\nisreal\nIsreal\nissasheep\nIT\nit\nit_victory25\nITA..KILLER\nITALIA\nitalia\nITALIAN\nitaly\nITALY\nItaly\nItaly_Boch_1\nITALYYYY OwO\nits meee\nits ye boi\nIts_BrunoYT\nItsOver\nıu<bbjhızuui\niungiyoibbbb\nIvan\nIvanBars\nivangol\nIWINYOULOSER\nixpo\nizahia\nIzzy\nizzy\nI💗😘Jacob\nJ\nj\nJ.E.R.K.\nj.t\nj0enu\njace\nJaci\njackbenimble\njacob\nJacob\nJacquie\nJAD\njafet.v.593\njaidyn\nJak+\nJakdude\nJake\nJake Cool\nJAKE+WALL\njakemerecr\njakituning\njakkie smith\njakobandmax\njamaica jr\nJAMAICA4LIFE\njames\nJames\njames.w\njamesward+p5\njan\njanbannan\nJasmineSandl\njason\njavi\njaxon\nJaybae82\njayden\nJAYJAY++BOYY\njaylen\nJayle👟locker\nJayMinecraft\nJAyyy\njaz\nJBEE\njbl\nJD\nJdvinter\nje\nJe mama\njebisesrbija\njed123456789\njeef\njeff\nJeffery\njeffy\njelly\nJELLY\nJelly\njelly fan\nJelly2.0\nJellybeans\njellyiscool\nJEMMA DA UNI\njenne\nJENS NORRMAN\nJeonghyeok\nJeremiah+\nJeremy Stoke\nJerry\njessica\nJèsus Crust\nJesus Saves!\nJetsky\nJew h8er\nJews...\njezwik\njfng\njhetalal\njhlkhlkh\njhun vhuv vc\nJicken\nJigglewiggle\nJim Jam Jong\nJimbo\nJimenakiller\njimmy\njimmy+swag\njimmybob\nJingle Bells\nJJ\njj\nJJs\njk\njkhh\nJkk\njksdjksdqa\nJL\njlovo\njmlvk\njo\njo mama\njoddiejo\njoe\nJOE\nJoe\njoe daddy\nJOE MAMA\nJoe mama\nJoe Mama\njoe mama\nJOE moma\nJoe?\nJoe+Moma\njoe+mooomyy\njOEmAMmA\njoey\nJogador\njohan\njohao\njohn\nJohn\nJohn+Ellis\nJohnSA\njohnson\nJOJO\nJojoeeta\nJoKaRy\nJoker\njomo\njon\nJon\njon snow\njonathan\njoni\nJOOJ\nJooJ\nJordan\njordan 1\njordankiller\njordi gay\njordyn\njos\nJosBanana\njose\njose A. $$$$\nJOSE LOL\nJoseMourinho\nJosephi Krak\njosh\nJosh\nJoshTSM\njoshyboy\nJoshyLegends\njosyel\nJotaro+kuzo\nJoueur\nJR\njswag\nJT\njtt\nju\njuan\nJuanM\njuanson\nJuChE GaNg\njudge rachel\nJuegagerman\nJuhis\njuice\nJUJU\njuju\njulian\njuliana\nJulie\njulie\njulien\njulius\nJuly 4 1776\nJumbo\nJune Iparis\njunebee09\nJupiter\nJustice\njv sqod\njx\nJ🐭\nk\nK\nk1rby\nk1slyy\nk1w1p0w3r\nkaaaaarl\nKaaba\nkaas+\nkafu\nkage\nKai is mine\nKaitlynn\nKaizar i Rum\nKaKa\nKAKA DO C.V\nkakka\nkaleb_1204\nkall+öl+hurr\nKappetroelia\nKaren\nkaren is a b\nKarl\nKarl X\nkat gamer 12\nkat gamer 77\nkatrina\nkatsudon\nkatt russian\nKatya(;\nkatΣ(￣ロ￣lll)\nKawhi\nkayaismylove\nkayden\nKazakhstan\nkbmnbuidhibd\nkc\nKC\nkcv\nkd\nKEBAB\nkefal\nKeizo\nKek+Bur\nKEKW\nken kaneki\nKendall\nkendog\nkenya\nKerby\nKerfuffle\nKERMIT\nKevin\nkez\nkgf\nkhaled\nKhattab\nKiddo\nkidfury2123\nkien\nkier\nKilian2.0\nkill\nkill me\nKill me\nkilla_cat\nKiller\nkiller\nkiller!\nkiller+\nkillerzombie\nkillmonger\nKillTrump\nKillz\nkim jon uun\nKim Jong Un\nkimberly\nKimitzuu\nKim-Jung-Un\nkinca\nking\nKing\nKING\nKing 100%\nking 11\nKING BOB\nking boy\nKING BRIER\nking Jr\nKING KILL\nKing of all\nKING OF ME\nKing Pengu\nking rian\nking.io\nking_iusti\nKINGBEAST😛\nkingcobra\nKingGeorge\nkingkinohi\nkingman\nkingnoah\nkip\nkira\nKIRB!!\nkirito\nKittaM\nkitty\nkiwi\nKiya\nkk\nKKTC\nKLAUS\nklc\nKlose\nKlovborg\nKnickers\nknock knock\nknockyghost\nknowlen\nkoasar\nKoby(billy\nKohai\nkolek\nkolibri\nKonstantin\nKonstantinos\nkool+cid\nKOOLAIDMAN\nKorea\nkosi6ixx\nkostis4\nKrachen\nKRAL\nkrall\nKramek\nkret\nkrvtky\nKSI\nKT\nKUBUS\nKURVA\nkuy\nKuzgret99\nkvamp\nkx\nky\nkylancruz\nkyle\nkys\nL\nl\nL is 4 Layla\nL0rdFox\nL8Nick\nla mala suer\nla+faucheuse\nlachie\nlachydachy\nladd\nLady\nlady\nladybag\nLagz\nlala\nlalalalalala\nlalalalla\nlalaland\nlambolovers\nlamis\nlan\nlance\nlandon\nlandon.h\nlano\nLaraffel\nLars Gille\nLATVIJA\nLaura\nlauren gallo\nLaUruguaya\nlava\nlavey lavey\nLavika\nLayla\nlazarbeam\nLazarbeam\nLAZARBEAM\nLazarBeam\nLAZARLAZAR\nlazer beam\nlazer yeet\nLazer_Glow\nlazerkid\nlbj\nle\nLe Pagg\nle TUEUR\nleah\nleandro\nLEANDRO\nlebanon\nlebensraum\nLEBHjr\nlebron james\nlee\nLeeLa\nlega\nLegend\nlegend\nLegomancalle\nlel\nLELO\nlemme get100\nlemonisha\nlenka\nlentil\nleo\nLeo\nleonekip\nleopapi69\nlesturmwaffe\nLET IT GO!!!\nlet me 100%\nletme%50pls\nletme100%pls\nletmeget100%\nlets piay\nLets Play\nlets swim ;)\nLetsdothis\nlevani\nLevant\nlevel1\nlevi stinkt\nlevman\nLew\nLewiatann\nLewisPlayz\nlex\nLexluFV\nleys096\nLiam\nLiam YouTube\nLiaoPing\nliban\nlicea\nlichtenstein\nlicon ligers\nlIe SucKs\nlier\nLietuva\nlightning\nligma\nlike a boss\nlil boat\nLil nazbol\nLIL paper\nlil+big+brai\nlil+nax+x\nLIL+TJ\nLilac\nLILBOB\nlilbon\nlilian\nlilly\nLilly\nLilo\nLilou\nLilpootpoot\nlilproon\nlilpump449\nlilu\nlily\nLily S.\nlilymachmakr\nlimbo\nlina\nLionman\nLisa\nLISE\nlitdabfam\nLithuania\nlithuania\nlittle j\nlittle timmy\nLittle_Billy\nLittleBike\nLiya\nLiz;) ;)\nlk\nlkd\nLL\nLLLLOOOOLLLL\nLloyd\nlmao\nLMAO\nlnj349\nLoading...\nloading...\nloaggy\nLocky\nloding...\nlogan\nlogan205\nLOGIN\nlol\nLol\nlOl\nLOL\nLol hi\nlol sdf\nLOL U YT\nlol2\nLOL3D\nLolmini\nlolo\nLOLy\nlong\nlord\nLORD\nLordPawwGame\nLordplayer\nLorenzo\nloro=ivan\nLort\nLos mejores\nloser\nLosinTex\nLost\nLostCause\nlots+of+cash\nLouis\nlove\nLove\nlove daniela\nLove1234\nlovebug\nᶫᵒᵛᵉᵧₒᵤ\nlubag op zon\nLUCA\nLUCA83\nLucaasak747\nLucas\nlucas\nLUCI the lol\nLucy\nLucy3\nluiz\nLuk\nLukas\nLuke\nluke storm\nLukerdepuuk\nlukezquad\nlul\nLula Livre\nlula livre\nLullin\nlulu\nlunapup\nlunchtime\nLUZ\nluz\nLuz\nLynetteNoni\nM\nm\nM E X I C O\nM Qaseem\nM&M\nM.Verstappen\nM+AND+A\nM10D\nmaas\nMacedonia\nmacedonia\nmacedonija\nMACY+MY+DOG\nmad dog\nMAD!\nmadara\nmadddddd\nmaddog\nmaddy\nMadHamster\nMaegaard\nmaelspi\nmaguire\nmaitrephenix\nmaja\nMajik Paper\nmak\nMAK\nMakar And M.\nmakealgergrt\nMakerFaffa\nMAKI681\nmalala\nMALAYMAN\nMalaysia\nMALEAH\nmalek+Bully\nmalik\nmalikye\nMalta\nmamaam\nMamma russia\nmammamia\nMan 0f Y33ts\nmandascript\nMANDO\nmanga!\nmAnixX\nmannekam\nManofMelon\nManon\nMap\nmar\nMARA+......\nmaravilhoso\nMARCELO\nmarchelo\nMarcolla\nMarcos\nmarcproo\nMargaret\nmaria  isabe\nmariana\nmarianabr...\nMarie\nMARIEM\nmarina\nMarinette\nMArio\nmario\nMario\nmario tiffo7\nMarkelpro\nMarkify\nmarkus\nmarquitos\nmarshmello\nMarthaLupton\nmartin\nMartin Brody\nMartinli\nmarzens\nMascara Maro\nmason\nmason#6\nMast3r4life\nmaster\nMaster.T\nMasterGamers\nMasterJak\nMat Eagle\nmateeney\nMATEFRANCO🇪🇸🇪🇸\nMATEJQQ\nmateo\nMateusz\nmath is cool\nmatheus\nMATHIAS\nMathilde\nMathon54\nmatin\nMatteo\nMatthew\nMATTHEW\nmatthew\nMATTIE\nMauri\nmaury2\nMAX\nmax mandel\nmaya\nMaya\nmayi\nmazlum\nMazur\nMC_475\nmc+rhyan\nmcfatty\nMD\nMe\nME\nme\nme #1\nME > YOU\nme lucky\nme me\nme name jeff\nMe ow\nme+de100%pfv\nMea\nMeah\nmee is marco\nMEEEEE\nmeep\nMEGA.P\nMegan\nmeh\nmehmet\nmelis\nmelke\nmelon\nMeme\nMemeDawg123\nmemememememe\nmemes\nMeow\nmeow kitty\nMeowrian_opi\nMephi$to\nmepis\nMepis\nMerca\nMerchanj\nMercifulLord\nmerhaba\nmeri\nmerica\nMERICA\nMerica\nmerlin32\nMessi\nmestre\nmet\nMetamorphicl\nMETHFORKIDS\nmew\nMexicanos\nMexico\nmexico\nMEXICO\nMéxico\nMEXICO_\nMey\nmhkgy\nMI\nmi paraguay.\nmia\nMia:D\nMIALG\nmiau\nMicah\nMichael\nmichael\nMichel849\nmichiel\nMickis\nmicko\nMidnight\nMids\nmiedema\nmig\nmighty gay\nMiguel\nMihaxGaming\nmihir\nMikaela\nMike\nmike\nmike ock\nmikey\nmikhail\nMIKI\nMilk++++++++\nMilliano\nmillie\nmillinum\nmilosh\nmimai\nmine\nMini morgz\nminibytor14Y\nminnietong\nmiriam\nmiss biggest\nmit\nmitchel\nMITT+NAMN+\nmitvit\nMiya\nMizgin\nMJ\nMJOLNIR\nml\nmm\nmmehdi\nMMER FOREVER\nmmmmmmmmeeee\nmo\nMO+KHAN\nModelHorse\nmoenhide\nmoh321\nmohamed\nMohammadOmar\nmoki+baba\nMoldova Înt.\nmolina\nMom\nmom\nmomma\nmommy\nmommy+mommy+\nmomo\nmomomcjol\nMONEY\nmoney man\nMONEY!\nmonkey+\nMonkey13 🐒\nmonkeycat\nMonster_1\nmoo\nmoon\nmoon21\nmoos milk\nmorgan\nmorganbrosct\nmorocco\nMOROCCO\nMoş Moldovan\nmoskow\nMother\nMother bird\nmotherland\nMOTHERRUSSIA\nMotherRussia\nmotomoto\nMountainMama\nmoutaindrew\nmoutasem\nmove like\nmqi34wejpiwf\nmr almutari\nmr beast\nmr crab\nmr krabs :)\nmr man\nMr Meat\nMr TurtleMan\nMr. McBean\nMr.blueberry\nMr.Minion\nMr.TurtleMan\nMr+E+boy+27\nMrbeast6000\nmrfreshasian\nMRFRESHASIAN\nMrTyr16\nMrvel\nMr-woo\nMSNB\nMszV2\nmuchogracias\nMugh\nmuhammad\nMuharrem\nMuhib\nmuji\nMulle\nMurica\nmurilo\nmuslim\nmuslim child\nmuslimsrule\nmuslk\nmustafa\nmv\nMwahahahaha\nMy Doom\nMy frienz\nmy nats\nMY SECRET\nmy+name+is+j\nMya\nMyDemons\nmym\nMyName=Noddy\nMyNameIsJeff\nN\nN O R G E\nn.54t834\nna\nNABIL\nnacl\nnada a ve\nnaden\nnaimaD\nnaji\nnajib\nnala\nnamastha\nname\nName=Noddy l\nnamit\nnani\nnanny\nNapoleon\nNara\nNARUTO\nNash\nnate\nNatedogg\nNATII 599 PL\nnative\nNats\nnaughtyomega\nnaut\nnave\nnaya\nnayr\nNazar0360\nNBA265$$$$\nndsbkhcs\nNeach-raoin\nnebman\nnederland\nneed reaper\nNegro\nNEIKO\nnein\nneneng b di\nNeneng Z\nneo\nneolixy\nneolixy Fra\nNeoTilted\nNepal\nNerdyPorg99\nnetanel\nNetherlands\nnETHERLANDS\nNeupi\nnevo\nnew hair\nnew kid\nNew zealand\nnew zealand\nNext Victim\nneymar\nNeymar Jr\nNEZUKOOOO !!\nNf\nNguyen\nni\nnice\nnice pro\nnici\nNICK\nnick gur\nNick J\nNICK MANATE\nNick_alberto\nnickosama\nNico\nnicolas\nNicolas Pro!\nnicole\nnicu\nNIGERIAS BAD\nnight\nnight_cay\nnijo\nnika tsomaia\nNIK-ART\nnike fan jr\nNIKO\nNiNipineツ🍍\nNinja\nninja\nNinja kid\nninja urso\nNip_Nip\nNisaa\nNishad\nNITRO+GALIXY\nNix\nNizam\nnkls\nNL gamer\nnn\nNnbg\nnnn\nNNN survivor\nno\nNo\nno pewdiepie\nno u\nNO U\nNO u\nNO!\nNo_name\nno+u\nnoa\nNOAH\nnoah\nnocapowo\nnoco\nNOE\nnohemi\nNOLA\nNolan\nnome\nnomi\nnoncepedo\nNono\nnoob\nNoob\nNOOB\nnoobbbb\nnoobie\nNoobies2006\nnoobs kill\nnooob\nnooooooobers\nnoooooooo\nNoorPlayys\nnope\nNorge4theWIN\nNorth\nnorway\nNORWAY\nNORWAY FOR W\nnos.vs.vos.\nnostopme\nNot Bill\nnot dumbey\nNot your toy\nNothing\nNotMyTail\nNova\nNOVA/KERIE\nNOW UNITED\nNowOrNever\nNP-1\nNR-077\nnu3ga/lu3\nNUGGETS\nNum nom\nnumsei02\nnunes\nnutnoodles\nNUTY ALIADO\nnwo1840\nnyan cat\nnyan+cat\nnyck\nnyon cat bye\nNz\nNZ BOIZ\nNz Rules\nNZ!! x3\nNZ!! X3\nNZ!!! X3\no\nO+Muhammad\nObi-Wan\nOBJECTION!\nOG\nog\nogaurav\nOGnarutobeat\nOGnoobie\nOH CANADA\nOH YEAHHH\nohio\nohockey22\noi\noigdfggyh ty\noij\nok\nOK Boomer\nok boomer\nok+\nOLCAY\nolddad\nOldSkooler03\nOldtimer\nolivia\nollallol\nollie\nolliePRO\nolly is best\nololo\nomar\nOmar\nomar king\nOMG4lif\nOneF8\nonepaperman\nonii~chan\nO-O\nOOF\noof\noof+master\nookko\noooooooo\noops\nop\nOP THE ONE\nop twisty\nopium GR\nopium+(IZI)\nopos\noptimusprime\norange\norchid\nOrigar me\nORIGIN\nØŞ〗๖ۣۜǤнσsτ༻\nOsc45\noscdosc\nOskar\noso\nÖsterreich\notario\nOTSOSU\nOtto\nOttoman\noui\nouououououou\nOurChael\nouss\noutmeal\nowe\nowen pro!!!\nOWL CITY\nOwl hoot\nOwO germany\noww+noo\nOxo+Whitney\nOyuncu\nOZ\nOz Bloke\nOzmainia\nP 19/53\nP.A.Trick.O\nP+S=6\nP11\np13\np3n1s\npablo\npaco\nPadfoot\npahan\nPaislee77\nPAISLEY\npaitton\nPak\npak zindabad\npakdabest\npalistine\npanama\nPancho Villa\npancrazienn\npanda\npanda16 🐼\nPandix\npanther\nPanzer\nPanzerwagen\npapa bear\npapa io\nPAPA LÉGUAS\nPapa smurf\nPapelFolha\npaper\nPaper\nPaper 2.0\npaper money\npaper. io 2\nPaper.io\nPAPER.IO\npaper.io\npaper.io2\nPaperBoi\nPaperiochamp\npapermaster\nPapers\npapper\npapperskalle\npapy\nPARASITA BR\nParker\nparker\nParkerjr89Yt\npartizan\nparty\nparynhar\npastry\npat\npatataxD\npatilla\npatria\npatrick star\npatriotuluca\npaul\npaulina\npaulius\npauly\nPAX!!!:)\nPB\nPC Ragin\nPCM\nPCRM\nPDOGELEGEND\npeace makers\nPecularis\nPedik\nPedoMan69\npedro\npedroloveusa\npeduncle\npee and poo\npeeen\nPeen\npeki\nPENCILM8\npendejo\nPenela\nPenn State\npennis\nPenny\npenny wise\npenny+wise\nPennyise\npennywise\nPENNYWISE\npennywise+jr\npenywise\npeople\npepalacerda\nPepe\npepe\npepo\nPeppa pig\nPercybeth\nperdy\nPerdy\npereira\nperhaps\nPERIDOT\nPerko\nperrro69\nPersian23\nPerson\nperson2.0\nperu\nperuuu\nPeterParkour\nPewDiePie\nPewdiepie\nPEWDIEPIE\npewdiepie\npeyton fanni\nphantom\nPharoah\nPhatan\nPhe\npheobe\nPHIAAAAA\nPhil\nphilippenes]\nPhilippines\nphilippines\nPhilippines!\nPhloxx\nphoenix\nphong\nPI-077\nPia\npianter\npichu\npickle27\npidor\nPIE\nPierce\nPierogi\npietje\nPiggy\npiiiiiiiiiii\npikachu\nPikachu786\npikaso\npILar\nPilipinas\npilippinas\nPineapples\nPINGAS\nPingPongPie\npipka\nPixalated\nPixel\npizza\nPizza\npizza man\nPIZZA ROLLS\npizza123\npizzaking\npizzz\nPj Iese\npk\nplackins\nPlankaster\nPLANTAIN\nPlayer\nplayer\nPlayer One\nplayer3812\nplayer587joe\nPlease don’\nplease dont\nplolal\nplonk\nploopy\nplsletme100%\nPlywood\nPLZDONTKILL\nPlzdontkillm\nplzdontkilme\nplzplz1!1!!1\np-noob\npo\nPOJHIOP\npoker\nPoland\npoland\nPOLAND\nPoland byycz\nPOLAND PLAYE\nPolar Bear\nPOLICE+CHASE\nPolloh\nPOLO\npolo\nPOLSKA\npolska\nPolska\npolska ;]\nPOLSKA GUROM\npooh\npoohfromztek\nPoon888\npoooooo\npoooooooooop\npoooooooop\npoooop\npooooppppppp\npop\npopcorn!!!!!\npopo\nporcodue\nPorgy\nporphygennet\nportabacaxi\nportugal\nPortugal\nPosada\nPoseidon\nposwjhygscfj\nPoT_LbEaR\npotato\nPotato\nPotato ;)\nPotatoLover\nPOWER\npp\nPP Water\npppp\npppppp\nPranked\nPratham\nPrentes\nPresident Xi\npress ctrl w\npresto boy\npreston\nPreston\nprettydark\nprime time\nprinces\nPringles\nPrinz Eugen\npro\nPRO\nPRO Status\npro+gamer$$$\npro+in+usa+\npro360\nProoo\nPROS\nprosciuttix\nProud Aussie\nproudtobePK\nProZ\npseudo\nPSM2005\nPSU\nPU$$YSTILLB*\nPUBG MOBILE\nPUMBA\npumpkin\nPumpkin King\npuppy lover\npups\nPure\npurple grape\nPurpureon\nPurringMotor\nPUTIN\nPutin\nputinukraine\npuzzlez.io\nPweedy_33\nPwnd\npz9\nq\nQARABAG\nQeen\nQINGDYNASTY\nQixStar\nQuébec\nQueebOfHeart\nQUEEEEENN!!!\nQueen\nqueen\nQueen juicy\nQueen S***\nQueenjuicy😍\nQuicoarpro\nquim\nQUINCY\nQuinnDH\nqwerty\nqwerty.io\nqwertyqwerty\nr razzel\nr u ok\nR. Moldova\nra\nRā\nRaccr\nRaceTraitor\nrachelkgreen\nRadiant+Oryx\nRæ\nraed\nrageElixer\nrahmo\nRaiden\nRAIF\nrainbow\nRainbow\nRainman\nraja\nrami\nRandom User\nraphael\nRAPHAEL 075\nrara\nRATATATA\nRATATAYEET.0\nRaven23\nray\nraycon\nRayman\nRayy\nraziq\nRAZOR BLADE\nRdy+Player+1\nrdyer\nReal jelly\nrealibby\nrealization\nREALJELLY\nreally cool\nRealYourName\nReap YT\nRed Axe\nred fox\nred robbin\nRedcenter\nRedCenter\nredpanda\nree\nreee\nREEE!!\nreeee\nREEEEEEEEEE\nreeeeeeeeeee\nrekt\nREMY CRAKERS\nRenato\nrereeeeeee\nREUTRIOX\nreuven\nrevengetime\nRex. Lousdal\nReyna\nRhayven\nRHEC\nRHENIUS\nRhubarb\nrhyan\nrhys\nricardo777XD\nRice Farmer\nrichhomie\nRick\nrickenbacker\nridge\nriggidy\nRiket\nRILEYRILEY\nRinger\nRipDuko\nRIPPER\nrj\nRM52\nrob\nrobby\nroblox\nrock\nRocket\nrockstar\nrød grød\nrodrigao\nRoey\nrohit\nrojos\nromania\nRomeo\nRomes\nromrom\nromrorm\nRonald OMG\nRonaldo\nRONALDO7\nronaldomg\nRONNIE\nroosalieee\nrose\nRoSh\nrot\nRouchdi22\nrourou\nroverbre\nRoxane BTW\nRoxanne\nroza\nrozaanim\nRPTROJANS\nRR2\nrRazvan\nrrr\nrrrrrrrrrrrr\nrrwwertf\nRSA\nrtkgjgvkjgbj\nRubiksMan\nRUBY\nRukiKazuki\nrup\nRuperto\nrusame\nRusherTR\nRuske\nRUSSIA\nRussia\nrussia\nRussia  :^)\nRussia Putin\nRUSSIA!!!!!!\nRUSSIAN DIMA\nRussian SFSR\nRUSSIAN SFSR\nRusso\nRUUUUUDDDDYY\nryan\nRyan\nRyan the pro\nRylie\ns\nS*A*R*G*E\nS.M.A\ns8n\nSA Wichmann\nsab kat\nsaba\nsaba 6\nsaba nayb\nsaber\nSacred\nsad ^-^\nsad cube boi\nSadiq2010\nsafg\nSage\nsai\nsaid\nSaiko+Bears\nsaitama\nsalgadoBR\nsam\nSam\nsam Bates\nSamantha\nsammy+sonic\nSamoJako\nsan\nSANJIN\nsanone\nsans\nSanta]\nsap\nsapwings\nSara\nsas\nSASCounqerer\nsasha\nSasuke\nsasuske\nSaudi Arabia\nSaugat\nsavage\nSAVAGE\nsavage Foxy\nSavagegemini\nsavion\nSchnaubi\nSCHON\nschumhey\nSchumhey\nscissors\nScones\nScott-zen\nscp-49\nSCRSBRATHENS\nScrubby\nsda\nsdr\nsdsdsd\nseaku\nSearch Bts!\nseb is waifu\nSebas.SZN\nSEBASTIAN\nsebasydani\nSec\nsedres\nsedric\nSEF\nsefs\nsenor pot\nsenor potty\nSenpai~\nSeppl\nSerbia\nSergei\nserginho\nSERGIO\nServ\nServexal\nSes ed\nSEV7N\nSGE\nSGEKids\nSGthe2nd\nshadow\nShadow\nshadow kille\nShadowAlx\nshae\nshaheer ibe\nSHAI\nshako\nShannon\nshannon-usa\nShanShan\nShanyya\nshar shya\nshark puppet\nsharons maf\nShayan Hadi\nSHAZIL\nshekelstein\nsherry\nshoj\nSHopa\nshortie\nshorty\nShqiperia\nshrek 2\nShreyash\nShrungus\nshut_up\nSiIvaGunner\nSiLeNtViRgEn\nSillyMrQ\nsime\nSingapore\nsir awesome\nSirGeorge\nSissy\nSixball\nSJ Boyz\nsjon van der\nSk3tchYT\nSKÅNE ER VOR\nskeletongame\nskeppyBALD\nskillz\nskinnyafrica\nskrt skrt\nSKS16\nSKSKSKSK\nSKSKSKSKS\nSKSKSKSKSKS\nSkull\nSkullcrusher\nsky peace\nSkyla\nSkylanders!\nSlade\nslak\nslavdo\nslemmsf\nslime moster\nslimer1011\nslipknot\nSlither.io\nSlithshowbob\nSlogoman\nslotz\nsmaker\nSmall Asian\nsmall head\nsmash\nSMASH\nsmell mu toe\nSmelly negro\nSnakeGamer\nsneaKING(HU)\nSnickers_007\nsnip+snip\nSniper\nSnipez_Tylor\nSNOR\nsnowflake\nsoban gamer\nSocialismSUX\nSofia J.\nsokk\nSoldMyKids\nsomeee\nsomeone\nsometimesno\nsomila\nsomo\nsonia\nsonic\nsonic+max\nSonicspeed\nsønnike\nsoolkig\nSOPHIE&KEEFE\nSorry\nSorry eh\nSorry Eh?\nsorryheather\nsou seu pai\nSouth Africa\nSOUTH KOREA\nSouth Korea\nSouth Korean\nSouwla\nSoviet\nSovietRussia\nSovietUnion\nsp\nSPAIN\nSpain\nspain\nSpain is bes\nSpain winner\nSpamInaCan\nspangles\nspare me plz\nSPARKLES\nspbk\nSPEEDISKEY!!\nSpeedP01\nSpeler\nspider man\nspider_royd\nSpieler\nSpongeBob\nSpottedleaf\nsprinkles\nSQ\nsquidbob\nsquidward\nSr Ezecolas\nSrbija\nSree Hari🎮\nSrTheMeryem\nSS\nss\nssC\nsskkiinn.\nSST\nssundee\nSSundee\nSt. Pierre\nStalin\nstalin\nSTALKER\nSTANDREU 14\nStandWithHK\nstar\nStarcastic\nStarry sky\nsteen\nstefan88\nStegtFlæsk!\nStephanie\nStephDami\nsteve\nSteve\nSteve Irwin\nSteve Smith\nSteve+Irwin\nstfu\nStickyPaper\nSTILAGa\nStinky Mex\nstnomas\nStokolaN\nStracheBeidl\nstrawberry\nstrong\nSTRONG\nstu\nStubbur04\nstud\nStuxnet\nsuatunarda\nsub 2 fgteev\nSub 2 SSunde\nSUB 2 SUNDEE\nSub+2+sundee\nSub+To+Me\nSUB2BADGAMER\nsub2blitz\nsub2estib\nSub2MVRowner\nsub2Patherz\nsub2pewds\nSub2pudiepie\nsub2RHally\nSUB2SSUNDE\nSub2Ssundee\nSub2SSundee\nsub2ssundee\nsub2Ssundee\nsub2sundee\nSub2SUNDEE\nsubham\nsubpewdiepie\nsubpurpleify\nSubSpyrosTDB\nSubTobytalks\nsubtofralica\nSUBTOPHANTOM\nsubtossundee\nsubtosundee\nsucc\nsuck     dd\nsuck d\nsullo\nSULTAN\nsunan\nsuomi\nSuomi\nsup\nSUP WITH YOU\nsuper mine\nsuperaaronAH\nSUPERGI7000\nSUPERHERO\nsupeRman\nSuperNova\nsuperpichu\nsuperstar4n\nSuperThanos\nsuperuser\nSUPREME\nSUUUUU!!!!!!\nsuwayda\nsv\nSvea Rike\nSven\nSven pro\nsw\nswampman\nsway\nswe\nsweat_bilol\nSweden\nSWEDEN\nSweden Börk\nswedish\nSweet\nsweetnsister\nswety swedn\nSwitzerland\nşxh\nsyd\nSydney\nsylar\nSylar\nSyrianRefuge\nt\nt.a\nT0mmy1010100\nta mère\nTacoman\ntacos\nTai 108\ntAimMD_ILG\nTaiwan NO. 1\ntajus\ntake that\nTake+the+L\nTalvisota\ntaman suria\nTania\ntank boy\ntank you\nTankart364\nTANKSCOMIN\nTatann09\ntauaneee\ntaxty winky\ntay\nTaye(:\nTaysian08\nTazlen\nTazzer\nTBNR_FRAGS\nTBNRFrags\ntea\nTeam Denmark\nTeam kanada\nteam trees\nTEAM U.S.A!\nTEAM U.S.A.\nteam U.S.A;)\nteam up\nteam USA\nteam with me\nTeam?!\nTEAM+U.S.A.\nteamcanada\nteammalaysia\nteamU.S.A:)\nteamU.S.A;)\nTeamW/Me\nTedde\nTeddy\nTEDT\nTehno King\ntele\nteletubbie\ntelletubi\nTemas2323\nteo\ntermico\ntessa\nTessbajanger\ntester\nTetPez\ntex\ntfs\nTfue\nTHAHAHAHAH\nthales\nThanoidugly\nThanos\nthanos\nTHANOS\nthANOS\nThanos Snap\nThanos#1\nThanos2\nthatguy\nthawra\nthcboi\nThe  Guy\nthe beata\nThe best\nThe Best\nTHE BEST\nthe best\nTHE BEST ONE\nthe best wd\nTHE BOSS\nthe brusier\nThe Buddy\nthe cholo\nthe cool kid\nThe Disowner\nThe Doctor\nThe Eraser\nthe fake 23\nthe fastest\nThe Game\nthe goat\nThe Hype\nthe kid\nthe killer\nThe KING\nthe king\nThe legend\nThe Master\nTHE MVP\nTHE Noob\nthe NXT\nThe one\nTHE PENGUIN\nthe pro\nThe Pug\nthe snowpand\nThe SUCC\nthe_best_guy\nthe0nly.Jae\ntheboss\nTheCatsFans\nTheChuky YT\nthedanklord\nTheDGamer09\nThefiend\nthegoat56\nTheKillerBR\nTheKing\nTheNameless\ntheoden+.g\nThepenguin50\nTheProcess21\nthethegiri\nTheZak king\nthhhhhh\nTHICCBOI\nthiccy miky\nTHIS IS USA\nthiz is USA\nTHOMAS\nThomas TANK\nthor\nthotpatrol\nthunderthe1\nti\ntic tocer\nTifo\nTIFO\ntifo\ntifo nl\nTIFO.\nTifoGang\nTIGRE\nTikTok\ntim\nTim hortons\nTimo\nTimors rage\nTimothee\nTiNaO\ntiss\nTJENA\ntnbq;\nto nem ai\nTodoroki\nTodorov\nToeCollector\ntoeeater\nTOESSS\nTolkeus\ntom\ntom n\nTOM.COM\ntomas\nTommy\ntomtom\nTonT0\ntony\nTony24\ntooooooooooo\nTop Ramen\nTOP.io2\ntorbje\ntortle\nToryMusic\ntotal pharoh\ntoto\ntotolasticot\nTotolito\nTotus Nata\nToyree\nTpdddd\nTr\nTR3$\ntrao\ntrash\nTRASH$$$$\nTrenton\ntributo\ntrinaty\ntrisha\ntristan\ntroywilldoit\nTruce\ntrud bucket\nTrueComrade\ntrueno+pai\nTrueNorth🇨🇦\nTRUMP\ntrump\nTrump\nTRUMP 2020\ntrump 2020\ntrump fan\nTrump Rocks\nTrump Sucks\nTRUMPFORLIFE\nTRUMPsupport\nTrumpWallBad\ntruse\ntry me\ntry+me\ntryghujk#\nTrympan\nTsar+Ivan\ntsjr.+aj\ntsm_jeremiah\ntsneia\nTt\nTTTTT\nTTV King Kay\nTTV.OWENLIT$\nTtvJaygucci\ntu madar cho\ntu mama\nTuesday\nTUKI-K2009\ntumadre69\ntung handsom\ntuo+sorello\nTURK\nTURKEY\nTurkey\nturkey\nTürkiye\ntürkiye\nTÜRKİYE\ntürkk\nTurky\nturnip\nTurpin\ntushar\ntutu\ntutubiel\ntuvieja\nTUY\ntwinky winky\ntwoja stara\ntxera\nTxR kkkk\nty\nTy the guy\nu\nU BOT\nU eat I eat\nu mommy\nU S YAY\nu suck i win\nU.A.E\nU.K\nu.r.r.s\nU.S.A\nu.s.a\nU.s.A\nU.S.A 1\nU.S.A!!!!!!!\nU.S.A.\nu.s.a.\nU.S.M.\nU.S.S.R\nU.S.S.R.\nU.U\nu+gay\nu+lost\nUAE\nuae is best\nUbahn\nubermensh\nUchicago\nUday\nudit\nuhPanda\nuhttikjb cxs\nui\nuiiiii\nuk\nUK\nUK 4 DA WIN\nuk for life\nUK is BEST\nUkraine\nUkraine best\null float 2\nultarvision\nultra goko\nULTRA NK\numair\nUmairica\numm\nuna peca\nuncle phil\nunicorn\nunicorn girl\nunicorncrazy\nunicornnnnnn\nUnited king\nunited Kingd\nUnited state\nUnitedStates\nunitedstates\nunknown\nUNKNOWN X\nUNKNOWN+X\nunspeakable\nunspeakableb\nunspeakablz\nUnspeakale\nuofaku5 cv c\nup da ra\nupanddown\nUR bad\nur dad\nUR DEATH\nur mom\nUR MOM\nur mum\nur+daddy\nUR+MUM\nur+mum+gay\nurielsucks\nurmomgaylul\nurmumgay\nurself\nUS Al te Way\nUS Killer\nUS MILITARY\nus patriot\nUS trump fan\nUS+Border+\nUSA\nusa\nUsa\nU-S-A\nUSA +++ EU\nUSA BEST\nUSA DE BOSS\nUSA dominate\nUsa for life\nusa for win\nUSA IsMyCity\nUSA kill you\nUSA KING\nUSA Mina\nUSA ON TOP!!\nUSA RULES\nUSA USA\nUSA USA USA\nUSA USA USA!\nUSA!\nUSA!!\nUSA!!!\nUSA!!!!\nUSA!!!!!!\nUSA!!!!!!!!!\nUSA.USA.USA.\nUSA/United\nUSA+++EU\nUsa+for+life\nUSA+KING\nUSA+NO.1\nUSA+ಠ_ಠ\nUSAAAAAAÆ\nUSAFORTHEWIN\nUSAisBetter\nusaismycity\nUSARULES!\nUSAtrump fan\nUSAUSAUSAUSA\nusbruthers\nusg\nUSofA\nUSSR\nUstaj Srbine\nUsuck\nuuuusssaaa\nuwu\nuy\nUzair\nV\nv\nV00D00\nV0rix 93\nvadfer\nvale\nValou\nVanderboy\nVanessa\nvanessa\nvango\nVanilla\nvankata\nVAR\nVargen\nVava\nvb\nVCcrew12\nvedant\nvenezolano\nVerby\nVesta\nviavidi\nvictor\nViet Nam\nvieze jos\nviki show\nVikiingen\nViking\nviking\nViking horde\nviktorblook\nVincent\nVINCENTE\nvinh\nvini dibra\nvinizx\nVIRT@RUS\nvishvak\nVisitTürkiye\nviva\nViva Chavez\nViva españa\nviva MEXICO\nViva Vox\nVIVAMEXICO\nVIVE ALGERIA\nvive israel!\nvkng\nvlad\nvlad.putin\nVLADA\nVladimir\nvlado\nvlle\nVoid_Zpace\nvoldimortina\nVoldymorte\nvoodoo king\nVoughnDaBoss\nVovchik_007\nVOX\nvs\nVSCO\nVSCO Girl\nVSCO+girl\nvuci\nvufidviudhvo\nvvb\nvvbvbvbv\nW0rldRun\nWa saaaa DUD\nwabble\nWackyBacky\nwallace\nwantpunani\nWanturoil\nwar\nWarming\nwarren good\nwartshoter\nwas mama\nwasd\nwasezfe\nWatarMelen\nwater\nWaterBlaster\nwatermalon\nWavyy\nwawa\nWAYNE 14\nWE\nwe are Groot\nWe will win!\nwebby\nweeeee\nweener\nwesad+\nWesGamer\nWeston\nWhaaaaat\nWhat\nWHAT THE F\nWHATSAPPDIY!\nWhatsappdiy!\nwhiplash636\nWhither+A\nWho Cares?\nwho dat\nWho?\nwhotfisnuty\nWHY\nwhy\nWhy So Mean\nwhy+?\nWiiiiiiiiiii\nWiiPii Fit\nWiiPii OnU\nWiktor\nWil Smiff\nwill\nwilliam\nwilljoal\nwilmer\nWily_S\nwin kenya\nwinner\nWINNER\nWinner\nwinston\nWitruwiusz\nwog\nWogan\nWojo\nWolf Lover\nwolf pack\nWolfierose\nwolverine700\nwoot\nworld\nWorld King\nWorst+player\nwow\nWoW\nWOW+!!!\nwowzerz\nWriterGirl\nwrwf\nwsad\nwtf\nwueeee\nWWPAPER\nwwwww\nWWWWWWWWWWWW\nwyatt\nwyattplays\nwywy\nx\nx$xa\nX3DGamerYTX\nx3m\nXagustin5111\nXavier\nxazza\nxc\nXD\nxd\nxD\nXelan\nX-hibit26.ph\nXllth\nXMAN\nx-mas\nXmas iscomin\nXoax\nXS\nxTman417xUSA\nXtrullor\nxwolf\nxx\nXxJibTemixX\nXxnz4lifexX\nXXOKWOWXX\nxXVoidPlayzX\nxyVikash\ny\nY U DUMB?\nY1N6Y4N6\nY1N9Y4N9\nYA BOI\nYA DED SON\nya yeet\nYa_King-Boy\nYAA HACK!\nyaaaaaa\nyaboi4639\nYah Man\nyahooooo\nYall Aint\nyall bots\nYamamoto\nyamum\nyanislepr0_0\nyas\nYas\nYas queen\nyasmin\nYasmine\nYay\nYaY\nyayeet\nyea\nyeah\nYears\nyee\nyee haw\nYEEEEEEEEEET\nyeeeeeeeeeet\nyeeeeeeeeet\nYEEEEEEEEET\nyeeeeet\nyEeEeEt!!!!\nyeeeet\nyeeet\nyeeet me\nyeet\nYEET\nYeet\nyeet boi\nyeet master\nyeet sauce\nyeet sir\nyeet. 42069\nyeet_gg\nYeet+Monters\nyeetakis\nYEETMAN\nYEETYBOI\nyeeyee\nYellowz\nyelo\nyes\nyes sirr U.S\nyfl\nYGo USA\nyi\nYikes\nYımırta Kafa\nyiyiyy\nYNW melly\nyo\nyo check\nYo mama\nYo MAMA\nyo mama\nYobama\nYoboyjb13\nYoGayIfKill\nyogi\nYolo\nyolopro\nYOMAHDUDES\nYonadush\nyonatan aviz\nyonatanYT\nyoria_player\nyosra\nYou\nYou Are Dead\nyou lose 157\nyou noobbb\nyou suck\nyou trash\nyour a BOT\nYOUR AL TALK\nyour awesome\nyour dad\nyour doom\nyour mama!!!\nYour Mom\nyour mom\nyour mommy\nyour momy\nYour mum\nYour name\nyour name\nYour Name\nyour name___\nyour pitaji\nyour the man\nyour+mom\nYour+Name\nyour+name\nYour+name\nyourdaddy\nYourDead\nYOURMOM\nyourmum\nYOUSEF\nYoutube ViBe\nyoutude\nyoyo\nyoyoyo\nyoyoyomama\nyrt\nYT\nythytfgvvhhh\nYukheisMine\nyuki\nYukiii\nyukjh\nyungpinch\nyuriysid\nyuyu999\nYYeet\nYyooooythvhg\nYyyyyyyyyyyy\nz\nZ.A\nzach\nzaden\nzahary\nZahary\nzainab\nzair\nzaki\nzammer1\nzanderfire\nzappierflash\nZarla\nZaven_Wolf\nzavion335\nZAZA\nze luis\nzeke\nzekrom\nZemond\nzen\nzendel\nzenitsu\nzeus\nZeusNaCausa\nzeuuubbbiii\nzghjbnhb\nziad\nziggle\nZiggy\nzimbabwe\nZispy\nZoe\nzombsgaming\nzoom\nzoomer+toons\nZorux\nzuly\nzVolcomBr\nzwicki\nzxc\nzz\nzzz\nZZZZZ\nʕ•ᴥ•ʔ\nΒΑΝ\nΕλλαδα\nΕλλάδα\nΕλλάδαGreece\nορσαλία\nалиса и папа\nАня\nБешеныйХомяк\nВадим\nваня\nварпроф\nВиктория\nВова\nвыкторыя\nГЕРОЯМ СЛАВА\nГлеб\nдима\nева\nевик\nжожа\nиванка\nигорь\nИгрок\nилона.ш.\nилюха и леха\nищу парня ха\nйуввпсппеыаы\nКатя\nкатя син\nКилер\nКирилл\nКОЛ\nКошка\nКририлл\nлаила\nЛОЛ\nлох\nмакс\nМАЛЯ\nмама данила\nМейбл+Girl\nмейиржан\nМолдова\nМонова\nнаследник\nнгпам\nне ИванЦой я\nпенсия\nпец\nпидружка\nПОГ\nпраогкиа\nпривет\nпро\nрорборибли6\nРОССИЯ\nроссия\nрулёва\nслава лава\nсмерт 2.0\nсмпсм\nссср\nСушиВок\nТатьяна\nуееор\nчеловечик\nЧИКИБОМБОНИ\nчитер\nЪЖСЛО\nя царь\nღDaira-chanღ\n�𝐉𝐨𝐉𝐨�\n𝓙𝓞𝓚𝓔𝓡\n𝓶𝓸𝓶𝓶𝔂\n𝔼𝕦𝕟𝕚𝕔𝕖\n🇺🇸BO$$🇺🇸\n🐢OppP+SksKs\n👀👀👀👀👀\n👌👌👌👌\n😍\n😎🇦🇱🇦🇱😎\n🤓Reizuru🤓\n🤩\n🥖🥪🍟🍔🍿😃\nяна".split("\n");
  var _0x1e6cd8 = {
    enter: function () {
      return {};
    },
    idle: {
      update: function (_0x8f9266) {
        if (_0x8f9266.game.ignoreIntersections) {
          return "prepare";
        } else if (_0x8f9266.in === _0x8f9266.base) {
          return "exitCenter";
        } else {
          return "back";
        }
      }
    },
    exit: {
      enter: function (_0x3f47d3) {
        var _0x12030e;
        var _0x2ec02c = {};
        var _0x25b8ae = Infinity;
        var _0x548b4f = _0x3f47d3.base.polygon.segments.length;
        var _0x2e14b1 = _0x3f47d3.game.config.unitSpeed / 2;
        for (_0x2ec02c.minDistance = _0x2e14b1; _0x12030e === undefined;) {
          for (var _0x203c93 = 0; _0x203c93 < 20; _0x203c93++) {
            var _0x41f919 = ~~(Math.random() * _0x548b4f);
            var _0x5e6bf0 = _0x3f47d3.base.polygon.segments[_0x41f919].start.distance(_0x3f47d3.position);
            if (_0x5e6bf0 < _0x25b8ae && _0x2e14b1 < _0x5e6bf0) {
              _0x25b8ae = _0x5e6bf0;
              _0x12030e = _0x41f919;
            }
          }
          _0x2e14b1 *= 0.75;
        }
        _0x2ec02c.exitPoint = _0x3f47d3.base.polygon.segments[_0x12030e].start;
        return _0x2ec02c;
      },
      update: function (_0x1c7f16, _0x1a7e66) {
        if (_0x1c7f16.in !== _0x1c7f16.base) {
          return "capture";
        }
        if (_0x41862b(_0x1c7f16)) {
          return "attack";
        }
        var _0x1a3d1c = _0x1c7f16.game.config.unitSpeed;
        if (_0x1c7f16.nearestEnemyDistance < _0x1a3d1c * 0.3) {
          return "patrol";
        }
        _0x1c7f16.scheme.safe;
        var _0x21e7ca = _0x1c7f16.base.polygon.segments.length;
        var _0x3b7f29 = _0x1a7e66.minDistance;
        var _0x5aadcf = ~~(Math.random() * _0x21e7ca);
        var _0x152e31 = _0x1c7f16.base.polygon.segments[_0x5aadcf].start;
        var _0x22b72e = _0x152e31.distance(_0x1c7f16.position);
        var _0x730ff0 = _0x1a7e66.exitPoint.distance(_0x1c7f16.position);
        if (_0x3b7f29 < _0x22b72e && _0x22b72e < _0x730ff0) {
          _0x1a7e66.exitPoint = _0x152e31;
        } else {
          if (!Object.values(_0x1a7e66.exitPoint.segments).some(function (_0x2c6348) {
            return _0x2c6348 && _0x2c6348.shape === _0x1c7f16.base.polygon;
          })) {
            _0x1a7e66.exitPoint = _0x152e31;
          }
          if (_0x1c7f16.target && !_0x1c7f16.game.border.inside(_0x1c7f16.target)) {
            _0x1a7e66.exitPoint = _0x152e31;
          }
        }
        _0x1c7f16.target = _0x1a7e66.exitPoint;
      }
    },
    capture: {
      update: function (_0x1feca9) {
        if (_0x1feca9.in === _0x1feca9.base) {
          return "idle";
        }
        if (_0x41862b(_0x1feca9)) {
          return "attack";
        }
        if (_0x305ad3(_0x1feca9)) {
          return "back";
        }
        if (_0x926422(_0x1feca9)) {
          return "back";
        }
        if (!_0x1feca9.scheme.safe && _0x1feca9.scheme.HP / _0x1feca9.scheme.maxHP < 0.9) {
          return "back";
        }
        var _0x40fd49 = _0x1feca9.game.config.unitSpeed;
        var _0x8d9ec6 = _0x1feca9.game.border.center;
        var _0x3d9306 = _0x1feca9.position.distance(_0x8d9ec6);
        var _0x1d6336 = _0x1feca9.game.border.distance(_0x1feca9.position);
        if (_0x1feca9.baseDistance < _0x40fd49 / 4 && _0x1feca9.track.length > _0x40fd49 * 2 && _0x1d6336 > 10) {
          return "back";
        }
        var _0x19d3d4 = _0x40fd49 / 4;
        var _0x46bc59 = _0x19d3d4 / 2;
        var _0x18568d = _0x46bc59 * _0x46bc59;
        if (!(_0x1feca9.position.distance2(_0x1feca9.target) < _0x18568d) || !(_0x19d3d4 < _0x1d6336)) {
          var _0x485aad = 0;
          if (_0x1feca9.track.simplyline.length) {
            for (var _0x326390 = 1, _0x18d896 = _0x1feca9.track.simplyline.length; _0x326390 < _0x18d896; _0x326390++) {
              var _0x1984f6 = _0x1feca9.track.simplyline[_0x326390 - 1];
              var _0x5361da = _0x1feca9.track.simplyline[_0x326390];
              _0x485aad += (_0x1984f6.x + _0x5361da.x) * (_0x5361da.y - _0x1984f6.y);
            }
            var _0x28df68 = _0x1feca9.track.simplyline[_0x1feca9.track.simplyline.length - 1];
            var _0x52890d = _0x1feca9.baseNearestPoint;
            _0x485aad += (_0x28df68.x + _0x52890d.x) * (_0x52890d.y - _0x28df68.y);
            _0x28df68 = _0x1feca9.baseNearestPoint;
            _0x52890d = _0x1feca9.track.simplyline[0];
            _0x485aad += (_0x28df68.x + _0x52890d.x) * (_0x52890d.y - _0x28df68.y);
          }
          var _0x102031 = Math.sign(_0x485aad);
          _0x485aad = Math.abs(_0x485aad / 2);
          _0x1feca9.capSquare = _0x485aad;
          var _0x2288cc;
          var _0x1b9878 = _0x1feca9.def;
          var _0x9e8e1a = _0x1feca9.greed;
          var _0x223fdd = _0x1feca9.safety;
          var _0x5c315f = _0x1e8266 * _0x1feca9.vrange * _0x9e8e1a;
          var _0x4cbb70 = _0x1feca9.track.length / _0x5c315f;
          var _0x4d7db9 = Math.min(_0x1feca9.base.square, _0x591161 * _0x1feca9.vrange * _0x1feca9.vrange) * _0x9e8e1a;
          var _0x4c406d = _0x1feca9.capSquare / _0x4d7db9;
          var _0x5d7b29 = _0x1feca9.vrange * _0x798ece(3, 0.7, _0x223fdd);
          try {
            _0x2288cc = _0x1feca9.position.distance(_0x1feca9.track.polyline.start) / _0x5d7b29;
          } catch (_0x4649f2) {
            console.log(_0x1feca9);
            throw _0x4649f2;
          }
          var _0x506471 = _0x1feca9.unitToTrackDistances.reduce(function (_0x4a6318, _0x32bccd) {
            return Math.min(_0x32bccd.trackDistance, _0x4a6318);
          }, Infinity) * 0.8 * _0x1b9878;
          var _0x1a4bb4 = _0x1feca9.baseDistance / _0x506471;
          var _0x31a069 = Math.max(_0x4cbb70, _0x4c406d, _0x2288cc, _0x1a4bb4);
          if ((_0x1feca9.scheme.safe ? 1 : 0.7) < _0x31a069) {
            return "back";
          }
          var _0x5a1613;
          var _0x70427d = _0x1feca9.vrange * _0x9e8e1a;
          _0x1feca9.distanceDanger;
          var _0x3e3f11 = _0x70427d;
          var _0xaf255f = _0x3e3f11 * 0.8;
          var _0x5354e3 = _0x1feca9.target.clone().sub(_0x1feca9.position);
          if (_0x1feca9.baseDistance > _0x3e3f11 || _0x31a069 > 0.75) {
            _0x1feca9.aspect = "приближение";
            _0x5a1613 = _0x1feca9.baseNearestPointNormal.clone().mulScalar(_0x19d3d4).rotate((_0x2f3350 + _0x210e5e) * _0x102031);
          } else if (_0x1feca9.baseDistance < _0xaf255f) {
            _0x1feca9.aspect = "отдаление";
            var _0x2267d1 = _0x210e5e;
            var _0x2059ce = _0x1feca9.track.length / _0xaf255f;
            if (_0x2059ce < 1) {
              _0x1feca9.aspect = "отстрел";
              _0x2267d1 = _0x798ece(_0x2f3350 * _0x9e8e1a, 0, _0x2059ce);
            }
            _0x5a1613 = _0x1feca9.baseNearestPointNormal.clone().mulScalar(_0x19d3d4).rotate((_0x2f3350 - _0x2267d1) * _0x102031);
          } else {
            _0x1feca9.aspect = "проход";
            _0x5a1613 = _0x1feca9.baseNearestPointNormal.clone().mulScalar(_0x19d3d4).rotate(_0x2f3350 * _0x102031);
            _0x1feca9.smoothness = 1 + (1 - Math.min(1, _0x1feca9.maxDanger)) * 3;
          }
          _0x1feca9.smoothness = 1 - Math.min(1, _0x1feca9.maxDanger) + 1;
          if (_0x1d6336 < _0x19d3d4 * 2 && _0x19d3d4 / 4 < _0x1d6336 && _0x1d6336 < _0x1feca9.position.clone().add(_0x5a1613).distance(_0x8d9ec6)) {
            var _0xe0a65e = _0x1feca9.position.clone().sub(_0x8d9ec6);
            var _0x990562 = _0xe0a65e.angle(_0x5354e3);
            var _0x125a19 = Math.sign(_0x990562);
            var _0x1ffb00 = _0xe0a65e.angle(_0x5a1613);
            var _0x4a714a = Math.sign(_0x1ffb00);
            if (_0x125a19 !== _0x4a714a) {
              _0x1ffb00 *= -1;
              _0x4a714a *= -1;
              _0x5a1613.rotate(_0x1ffb00 * 2);
            }
            var _0x18e3f6 = Math.abs(_0x1ffb00);
            if (_0x18e3f6 < _0x210e5e) {
              _0x5a1613.rotate((_0x210e5e - _0x18e3f6) * _0x4a714a);
            }
          }
          _0x1feca9.target = _0x1feca9.position.clone().add(_0x5a1613);
          var _0x2859ae = _0x1feca9.game.border.radiusByPoint(_0x1feca9.target);
          if (_0x1feca9.target.distance(_0x8d9ec6) > _0x2859ae + _0x19d3d4 * 0.75) {
            var _0x3cc1dd = _0x1feca9.position.clone().sub(_0x8d9ec6).angle(_0x5354e3);
            var _0x22a811 = (_0x2859ae * _0x2859ae - _0x19d3d4 * _0x19d3d4 + _0x3d9306 * _0x3d9306) / (_0x3d9306 * 2);
            var _0x500e4 = Math.sqrt(_0x2859ae * _0x2859ae - _0x22a811 * _0x22a811);
            var _0x4324f9 = _0x1feca9.position.clone().sub(_0x8d9ec6).normalize();
            var _0x520eba = _0x8d9ec6.clone().add(_0x4324f9.clone().mulScalar(_0x22a811));
            _0x5a1613 = _0x4324f9.clone().rotate(_0x2f3350 * _0x3cc1dd).rotate(_0x591161 / 8 * -_0x3cc1dd).mulScalar(_0x500e4);
            _0x1feca9.target = _0x520eba.clone().add(_0x5a1613);
          } else if (_0x1feca9.target.distance(_0x8d9ec6) > _0x2859ae) {
            _0x1feca9.target.distance(_0x8d9ec6);
          }
        }
      }
    },
    patrol: {
      enter: function () {
        return {
          sign: Math.sign(Math.random() - 0.5),
          time: 0
        };
      },
      update: function (_0x13de5c, _0x56fee4, _0x46fdc7) {
        _0x56fee4.time += _0x46fdc7 || 0;
        if (_0x13de5c.in !== _0x13de5c.base) {
          return "back";
        }
        if (_0x41862b(_0x13de5c)) {
          return "attack";
        }
        if (!_0x13de5c.scheme.safe && _0x56fee4.time > 50) {
          return "idle";
        }
        var _0x53bebc = _0x13de5c.game.config.unitSpeed;
        if (_0x13de5c.nearestEnemyDistance > _0x53bebc / 2 && _0x56fee4.time > 200) {
          return "exitCenter";
        }
        if (!_0x13de5c.target || !(_0x13de5c.position.distance2(_0x13de5c.target) < 6.25)) {
          var _0x50d7f3 = _0x53bebc / 2;
          var _0x59c05e = _0x50d7f3 * 0.8;
          var _0x38ba24 = _0x56fee4.sign;
          var _0x261883 = 0;
          if (_0x13de5c.baseDistance > _0x50d7f3) {
            _0x261883 = -_0x210e5e;
          }
          if (_0x13de5c.baseDistance < _0x59c05e) {
            _0x261883 = _0x210e5e;
          }
          var _0x1d271d = _0x13de5c.baseNearestPointNormal.clone().mulScalar(5).rotate((_0x2f3350 + _0x261883) * _0x38ba24);
          _0x13de5c.smoothness = 1;
          _0x13de5c.target = _0x1d271d.add(_0x13de5c.position);
        }
      }
    },
    exitCenter2: {
      findExit: function (_0xa8bb26) {
        var _0x39d886 = new _0x7f4089(_0xa8bb26.position, _0xa8bb26.game.scheme.zoneCenter || _0xa8bb26.game.border.center);
        var _0x45bafa = _0xa8bb26.base.polygon.intersections(_0x39d886);
        _0x45bafa.sort(function (_0x5ce5fd, _0x3d7cf7) {
          return _0x5ce5fd.distance - _0x3d7cf7.distance;
        });
        return _0x45bafa[0] && _0x45bafa[0].segment.start;
      },
      enter: function (_0xfa8e2b) {
        return {
          exitPoint: this.findExit(_0xfa8e2b)
        };
      },
      update: function (_0x3a88c4, _0x2922a2) {
        if (_0x3a88c4.in !== _0x3a88c4.base) {
          return "capture";
        }
        if (_0x41862b(_0x3a88c4)) {
          return "attack";
        }
        var _0x47ead2 = _0x3a88c4.game.config.unitSpeed;
        if (_0x3a88c4.nearestEnemyDistance < _0x47ead2 * 0.3) {
          return "patrol";
        }
        var _0xbea474 = _0x2922a2.exitPoint;
        if (_0xbea474 && !_0x3a88c4.base.boundaryHasPoint(_0xbea474)) {
          _0xbea474 = this.findExit(_0x3a88c4);
          _0x2922a2.exitPoint = _0xbea474;
        }
        if (!_0xbea474) {
          return "exit";
        }
        _0x3a88c4.target = _0xbea474;
      }
    },
    back: {
      enter: function (_0x554230) {
        _0x554230.target = _0x554230.baseNearestPoint;
      },
      update: function (_0x18d27a) {
        if (_0x18d27a.in === _0x18d27a.base) {
          return "idle";
        }
        _0x18d27a.smoothness = 1;
        if (_0x18d27a.game.border.distance(_0x18d27a.position) < 20) {
          _0x18d27a.smoothness = 1;
        }
        _0x18d27a.target = _0x18d27a.baseNearestPoint;
        var _0x42b6b9 = _0x926422(_0x18d27a);
        if (_0x42b6b9) {
          var _0x5eef04 = _0x42b6b9.distance2(_0x18d27a.position) * 0.9;
          var _0x19dff5 = _0x18d27a.track.simplyline.reduce(function (_0xd54d3e, _0x561bc7) {
            var _0x24cfc2 = _0x561bc7.distance2(_0x18d27a.position);
            if (_0x24cfc2 < _0xd54d3e.d && _0x5eef04 < _0x24cfc2) {
              _0xd54d3e.d = _0x24cfc2;
              _0xd54d3e.index = _0xd54d3e.i;
            }
            _0xd54d3e.i++;
            return _0xd54d3e;
          }, {
            i: 0,
            index: 0,
            d: Infinity
          }).index;
          var _0x26d6d7 = _0x19dff5 - 1;
          var _0x496c2d = _0x19dff5 + 1;
          if (_0x19dff5 === 0) {
            _0x26d6d7 = _0x19dff5;
          }
          if (_0x19dff5 === _0x18d27a.track.simplyline.length - 1) {
            _0x496c2d = _0x19dff5;
          }
          var _0x37b4f2 = _0x18d27a.track.simplyline[_0x26d6d7].clone().sub(_0x18d27a.track.simplyline[_0x496c2d]).normalize().mulScalar(5);
          _0x18d27a.target = _0x37b4f2.add(_0x18d27a.position);
        } else {
          ;
        }
      }
    },
    attack: {
      enter: function () {
        return {};
      },
      update: function (_0x1e3e80) {
        var _0x38adaf = _0x1e3e80.game.player;
        if (_0x926422(_0x1e3e80)) {
          return "back";
        }
        if (!_0x38adaf || _0x38adaf.death) {
          return "idle";
        }
        var _0x56e6ff = _0x38adaf.track.simplyline;
        if (!_0x56e6ff.length) {
          return "idle";
        }
        if (_0x38adaf.track.length < _0x1e3e80.game.config.botAttackTrackLength && _0x305ad3(_0x1e3e80, true)) {
          return "idle";
        }
        var _0x5efed6 = 0;
        var _0x49a1a9 = Infinity;
        _0x56e6ff.forEach(function (_0x5d9354, _0x5540ce) {
          var _0xd2b6e1 = _0x1e3e80.position.distance2(_0x5d9354);
          if (_0xd2b6e1 < _0x49a1a9) {
            _0x49a1a9 = _0xd2b6e1;
            _0x5efed6 = _0x5540ce;
          }
        });
        _0x1e3e80.target = _0x56e6ff[_0x5efed6];
      }
    },
    exitCenter: {
      findExit: function (_0x3d73e8) {
        var _0x30df74 = new _0x7f4089(_0x3d73e8.position, _0x3d73e8.game.scheme.nextZoneCenter || _0x3d73e8.game.scheme.currentZoneCenter || _0x3d73e8.game.border.center);
        var _0x1bfb39 = _0x3d73e8.base.polygon.intersections(_0x30df74);
        _0x1bfb39.sort(function (_0x111508, _0xc4e26f) {
          return _0x111508.distance - _0xc4e26f.distance;
        });
        var _0x3478ca = _0x1bfb39[0] && _0x1bfb39[0].segment.start;
        if (_0x3478ca) {
          var _0x4ce1f5 = _0x3d73e8.game.config.unitSpeed / 4;
          for (var _0x905dab = _0x48902a(_0x3478ca, 8, _0x4ce1f5), _0x596b08 = [], _0x229d59 = 0; _0x229d59 < _0x905dab.length - 1; _0x229d59++) {
            var _0x10959b = new _0x7f4089(_0x905dab[_0x229d59], _0x905dab[_0x229d59 + 1]);
            var _0x3ca255 = _0x3d73e8.base.polygon.intersections(_0x10959b);
            if (_0x3ca255.length) {
              _0x596b08.push.apply(_0x596b08, _0x1e7647(_0x3ca255));
            }
          }
          if (_0x596b08.length) {
            _0x596b08.forEach(function (_0x4a4dd8) {
              _0x4a4dd8.d = _0x4a4dd8.point.distance2(_0x3d73e8.position);
            });
            _0x596b08.sort(function (_0x438656, _0x495d45) {
              return _0x438656.d - _0x495d45.d;
            });
            var _0x66c538 = _0x30df74.vector.normalize().mulScalar(_0x4ce1f5).add(_0x3478ca);
            var _0x2f6451 = _0x596b08[0].segment.start;
            return {
              capturePoint: _0x66c538,
              exitPoint: _0x2f6451,
              captureDistance: _0x66c538.distance(_0x2f6451)
            };
          }
        }
      },
      enter: function (_0x3ff340) {
        return this.findExit(_0x3ff340) || {};
      },
      update: function (_0x40d902, _0x15a59f) {
        if (!_0x15a59f.exitPoint || !_0x40d902.base.boundaryHasPoint(_0x15a59f.exitPoint)) {
          return "patrol";
        }
        var _0x31ed55 = _0x40d902.game.config.unitSpeed;
        if (_0x40d902.nearestEnemyDistance < _0x31ed55 * 0.3 && _0x40d902.scheme.safe) {
          return "patrol";
        }
        if (_0x40d902.in !== _0x40d902.base) {
          return "zoneCapture";
        }
        _0x40d902.target = _0x15a59f.exitPoint;
        var _0x114f1f = _0x40d902.target.distance2(_0x40d902.position);
        if (_0x114f1f < 25) {
          _0x15a59f.near = true;
        }
        if (_0x114f1f > 25 && _0x15a59f.near) {
          return "patrol";
        } else {
          return undefined;
        }
      }
    },
    zoneCapture: {
      enter: function (_0x5b6377, _0x14201c) {
        var _0x358614 = _0x5b6377.target.clone().sub(_0x5b6377.position);
        var _0x105651 = _0x14201c.capturePoint.clone().sub(_0x5b6377.position);
        _0x14201c.outDistance = _0x105651.magnitude();
        var _0x2c407c = Math.atan2(_0x358614.x * _0x105651.y - _0x105651.x * _0x358614.y, _0x358614.x * _0x105651.x + _0x358614.y * _0x105651.y);
        _0x14201c.sign = -Math.sign(_0x2c407c);
      },
      update: function (_0x214430, _0x14fb27) {
        if (_0x214430.in === _0x214430.base) {
          return "idle";
        }
        if (_0x41862b(_0x214430)) {
          return "attack";
        }
        if (_0x305ad3(_0x214430)) {
          return "back";
        }
        var _0x31a36f = _0x214430.game.config.unitSpeed;
        if (!_0x214430.scheme.safe && _0x214430.scheme.HP / _0x214430.scheme.maxHP < 0.9) {
          _0x214430.target = _0x214430.game.scheme.currentZoneCenter;
        } else {
          if (_0x214430.baseDistance < _0x31a36f / 4 && _0x214430.track.length > _0x31a36f * 2) {
            return "back";
          }
          if (_0x214430.track.length > _0x14fb27.captureDistance * Math.PI * 1.5 || _0x214430.track.length > _0x14fb27.outDistance * Math.PI * 1.5) {
            return "back";
          }
          var _0x5b7202 = _0x214430.def;
          _0x214430.greed;
          _0x214430.safety;
          var _0x7e4b0d = _0x214430.unitToTrackDistances.reduce(function (_0x262860, _0xc37352) {
            return Math.min(_0xc37352.trackDistance, _0x262860);
          }, Infinity) * 0.8 * _0x5b7202;
          if (_0x214430.baseDistance / _0x7e4b0d > 1) {
            return "back";
          }
          if (!(_0x214430.position.distance2(_0x214430.target) < 156.25)) {
            var _0x4442d9 = _0x214430.position.distance(_0x14fb27.capturePoint);
            var _0x2d3933 = _0x214430.position.clone().sub(_0x14fb27.capturePoint).rotate(_0x14fb27.sign * Math.PI * 0.5).normalize().mulScalar(25);
            if (_0x4442d9 > _0x214430.game.config.baseRadius) {
              _0x2d3933.rotate(_0x14fb27.sign * 0.3);
            }
            if (_0x4442d9 < _0x214430.game.config.baseRadius / 2) {
              _0x2d3933.rotate(-_0x14fb27.sign * 0.3);
            }
            _0x214430.target = _0x2d3933.add(_0x214430.position);
            if (_0x926422(_0x214430)) {
              return "back";
            } else {
              return undefined;
            }
          }
        }
      }
    },
    prepare: {
      update: function (_0x49b516, _0x59a70e, _0x156a15) {
        var _0x53b183 = _0x49b516.game;
        if (!_0x53b183.ignoreIntersections) {
          return "idle";
        }
        if (_0x59a70e.time) {
          _0x59a70e.time -= _0x156a15;
        }
        if (!_0x59a70e.time || _0x59a70e.time <= 0) {
          _0x59a70e.time = 500;
          var _0x3da7ba = _0x53b183.units;
          var _0x50397a = _0x3da7ba[~~(Math.random() * _0x3da7ba.length)];
          _0x49b516.target = _0x50397a.base.polygon.segments[0].start.clone();
        }
      }
    }
  };
  var _0x1972ff = _0x402863(_0x402863({}, {
    arenaSize: 2000,
    quadSize: 20,
    borderPoints: 300,
    ellipticity: 1,
    prepareCounter: 3000,
    prepareMult: 3,
    prepareBatchCount: 5,
    prepareMaxTime: 500,
    baseRadius: 30,
    baseCount: 50,
    baseDensity: 0.25,
    minScale: 3,
    maxScale: 4.5,
    observerScale: 2.5,
    trackWidth: 8,
    unitSpeed: 90,
    maxAnglePerSecond: 0.0698,
    spawnTimeout: 3000,
    baseHeight: 2,
    botsCount: 15,
    teamsCount: 15,
    teamSize: 1,
    teamSuspendSpawn: 10000,
    bottomTeamSuspendSpawn: 5000,
    topTeamSuspendSpawn: 20000,
    botLevel: -1,
    startBotLevel: 0.1,
    noPlayerBotLevel: 0.5,
    nearPlayerBotSpawnCount: 1,
    followKiller: true,
    selfKillDelay: 1000,
    enemyKillDelay: 2000,
    winDelay: 2000,
    arenaColor: "#e7fff4",
    borderColor: "#88a799",
    backgroundTopColor: "#2d6998",
    backgroundBottomColor: "#81faff",
    lightTheme: {
      arenaColor: "#e7fff4",
      borderColor: "#88a799",
      backgroundTopColor: "#2d6998",
      backgroundBottomColor: "#81faff"
    },
    darkTheme: {
      arenaColor: "#3f474e",
      borderColor: "#222222",
      backgroundTopColor: "#232327",
      backgroundBottomColor: "#36363d"
    },
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
    font: "PT Sans Caption"
  }), {}, {
    arenaSize: 1500,
    teamsCount: 15,
    prepareCounter: 0,
    prepareMult: 1,
    winDelay: 10000,
    deathDuration: 3000,
    regenDuration: 6000,
    debuffDuration: 4000,
    buffDuration: 4000,
    baseHP: 100,
    killHP: 50
  });
  if (window.playerName) {
    _0x309d32.set("paperio_username", window.playerName, {
      expires: 365,
      path: "/"
    });
  }
  var _0x49e846 = fetch("assets/languages.json").then(function (_0x311193) {
    return _0x311193.json();
  });
  var _0x97b350 = fetch("assets/skins/skins.json").then(function (_0x227e54) {
    return _0x227e54.json();
  });
  Promise.all([_0x49e846, _0x97b350]).then(function (_0x31333d) {
    var _0x45bace;
    var _0x108bbb;
    var _0x4b9b30 = _0x2b49da(_0x31333d, 2);
    var _0x161c90 = _0x4b9b30[0];
    var _0x3afce8 = _0x4b9b30[1];
    _0x108bbb = (_0x45bace = _0x161c90).en;
    Object.entries(_0x45bace).forEach(function (_0x3e1225) {
      var _0x3436d1 = _0x2b49da(_0x3e1225, 2);
      var _0x5d2e0c = _0x3436d1[0];
      var _0x334e08 = _0x3436d1[1];
      _0x3a3a23.push({
        name: _0x5d2e0c,
        lng: _0x402863(_0x402863({}, _0x108bbb), _0x334e08)
      });
    });
    function _0x1ab5d0(_0x143842, _0x1b6862) {
      if (window.ga) {
        window.ga("send", "event", "skins_unlock", _0x1b6862.name);
      }
      _0x143842.notifications.push(new _0x45f010("New skin unlocked!", _0x1b6862.description, _0x1b6862.image));
    }
    var _0xe7de9f = _0x3afce8.filter(function (_0x160455) {
      return _0x160455.category === undefined;
    });
    var _0x356dfd = [new _0x23ef94("duck", ["BattleRoyale"], function () {
      return new _0x5c49f4(1);
    }, "Win 1 battle", "assets/skins/select/duck.png", true, _0x1ab5d0), new _0x23ef94("watermelon", ["BattleRoyale"], function () {
      return new _0x5c49f4(5);
    }, "Win 5 battles", "assets/skins/select/watermelon.png", true, _0x1ab5d0), new _0x23ef94("cake", ["BattleRoyale"], function () {
      return new _0x5c49f4(10);
    }, "Win 10 battles", "assets/skins/select/cake.png", true, _0x1ab5d0), new _0x23ef94("bat", ["BattleRoyale"], function () {
      return new _0x58905b(1);
    }, "Kill 1 player", "assets/skins/select/bat.png", true, _0x1ab5d0), new _0x23ef94("tank", ["BattleRoyale"], function () {
      return new _0x58905b(10);
    }, "Kill 10 players", "assets/skins/select/tank.png", true, _0x1ab5d0)];
    var _0x3a8998 = new _0x34ef09(_0x356dfd, _0x309d32, "paper.io.br");
    _0x3a8998.load();
    var _0x1db84f = function (_0x389318, _0x16e647, _0x1ba4ea, _0x4e8500, _0x397f7e, _0x3a8c17, _0x166e86, _0x357ffd, _0x3e956b, _0x3421f8) {
      var _0x20b041 = {
        config: _0x389318
      };
      if (Path2D) {
        _0x20b041.create = function (_0x5b4c60) {
          var _0x4fb36c = _0x20b041.config;
          var _0x1c20dc = _0x4fb36c.arenaSize;
          var _0xf4e21e = _0x4fb36c.quadSize;
          var _0x15ea65 = _0x4fb36c.borderPoints;
          var _0x40e20a = _0x4fb36c.ellipticity;
          var _0x18f671 = new _0x5d4ee5(_0x1c20dc, _0x1c20dc, _0xf4e21e);
          _0x1c98db.space = _0x18f671;
          var _0x5614b2 = new _0x1c98db(_0x1c20dc / 2, _0x1c20dc / 2);
          var _0x5230ee = Math.min(_0x5614b2.x, _0x5614b2.y) * 0.95;
          var _0x1670ea = new _0x4dcc26(_0x5614b2, _0x15ea65, _0x5230ee, _0x5230ee * _0x40e20a);
          var _0x48cafd = _0x4e8500(_0x4fb36c, _0x5b4c60);
          var _0x4f577c = new _0x9140ab();
          var _0x3fe597 = new _0x17bba1(_0x4fb36c, _0x16e647, _0x5b4c60, _0x18f671, _0x1670ea, _0x48cafd, _0x357ffd, function () {}, _0x397f7e, _0x4f577c, _0x1ba4ea.lng, null, _0x166e86, _0x3e956b, _0x3421f8);
          var _0x4b4600 = new _0x3a8c17(_0x3fe597);
          (_0x3fe597.scheme = _0x4b4600).init();
          _0x48cafd.game = _0x3fe597;
          if (_0x20b041.game) {
            _0x20b041.game.stop();
          }
          (_0x20b041.game = _0x3fe597).controller.addSet([16, 18, 81, 66, 77], function () {
            _0x3fe597.debug = !_0x3fe597.debug;
          });
          _0x3fe597.controller.addButton(71, function () {
            _0x3fe597.debugGraph = !_0x3fe597.debugGraph;
          });
        };
        _0x20b041.preparing = true;
        var _0x504aed;
        var _0x4637ce = 0;
        function _0x3f90d0() {
          var _0x2ad07b = _0x389318.prepareMult;
          for (var _0x1317cf = _0x389318.prepareBatchCount; _0x1317cf--;) {
            _0x20b041.game.update(1000 / 60 * _0x2ad07b);
            _0x4637ce++;
          }
        }
        _0x20b041.prepare = function (_0x4d8f42) {
          var _0x2e1457 = _0x20b041.game;
          _0x20b041.preparing = true;
          _0x4637ce = 0;
          _0x504aed = setInterval(function () {
            if (_0x397f7e.aviable()) {
              _0x3f90d0();
              if (_0x4637ce > _0x389318.prepareCounter) {
                clearInterval(_0x504aed);
                _0x20b041.preparing = false;
                _0x2e1457.visible = true;
                if (_0x4d8f42) {
                  _0x4d8f42();
                }
                if (!_0x2e1457.looped) {
                  _0x2e1457.loop();
                }
              }
            }
          }, 0);
        };
        _0x20b041.start = function (_0x15a6ee, _0x4792b4, _0x43a0c5, _0x113d28, _0x411448) {
          var _0x4ef072 = _0x20b041.game;
          if (_0x20b041.preparing) {
            clearInterval(_0x504aed);
            for (var _0x2bae13 = _0x373e03(); _0x4637ce < _0x389318.prepareCounter && (_0x3f90d0(), !(_0x373e03() - _0x2bae13 > _0x389318.prepareMaxTime)););
          }
          _0x4ef072.best = _0x43a0c5;
          _0x4ef072.spawnPlayer(_0x15a6ee, _0x4792b4, _0x411448);
          _0x4ef072.gameOverCallback = function (_0x54d3fc) {
            if (_0x357ffd) {
              _0x357ffd(_0x54d3fc);
            }
            if (_0x113d28) {
              _0x113d28(_0x54d3fc);
            }
          };
          _0x20b041.preparing = false;
          _0x4ef072.visible = true;
          if (!_0x4ef072.looped) {
            _0x4ef072.loop();
          }
        };
      } else {
        _0x20b041 = null;
      }
      return _0x20b041;
    }(_0x1972ff, _0x1e6cd8, _0x4e8d9c(), function (_0x37d64d, _0x319568) {
      var _0x2e9f30 = new _0x5c3c06(_0x37d64d, _0x319568, "assets/skins/");
      _0x2e9f30.classicSkinAssets.add(_0xe7de9f);
      return _0x2e9f30;
    }, new _0x19860b(_0x4bd796), _0x419e34, _0x3a8998, null, _0x326b7b, _0x5e48b2);
    window.paperio2api = _0x1db84f;
    var _0x229662;
    var _0x52ff96;
    var _0x4229be;
    var _0x5659c3;
    var _0x1d3637;
    var _0x3f8c0e;
    var _0x82a946 = window.ads;
    _0x229662 = _0x2bafa4(_0x242d3c, {
      skins: _0xe7de9f,
      api: _0x1db84f,
      storage: _0x309d32,
      mode: "br",
      achievementsProfile: _0x3a8998,
      ads: _0x82a946
    });
    _0x52ff96 = document.getElementById("game");
    if (_0x447921.__) {
      _0x447921.__(_0x229662, _0x52ff96);
    }
    _0x1d3637 = (_0x5659c3 = _0x4229be === _0x33ee6b) ? null : _0x4229be && _0x4229be.__k || _0x52ff96.__k;
    _0x229662 = _0x2bafa4(_0xa3bb41, null, [_0x229662]);
    _0x3f8c0e = [];
    _0x8ce6a4(_0x52ff96, (!_0x5659c3 && _0x4229be || _0x52ff96).__k = _0x229662, _0x1d3637 || _0x3f12c9, _0x3f12c9, _0x52ff96.ownerSVGElement !== undefined, _0x4229be && !_0x5659c3 ? [_0x4229be] : !_0x1d3637 && _0x52ff96.childNodes.length ? _0x36eaab.slice.call(_0x52ff96.childNodes) : null, _0x3f8c0e, _0x4229be || _0x3f12c9, _0x5659c3);
    _0x3dfb78(_0x3f8c0e, _0x229662);
  });
})();