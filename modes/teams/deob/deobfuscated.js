(function () {
  'use strict';

  function _0x27cabf(_0x202ae1) {
    return (_0x27cabf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x2bb456) {
      return typeof _0x2bb456;
    } : function (_0xd3e289) {
      if (_0xd3e289 && typeof Symbol == "function" && _0xd3e289.constructor === Symbol && _0xd3e289 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0xd3e289;
      }
    })(_0x202ae1);
  }
  function _0x43fd4a(_0x69622f, _0x24780b) {
    if (!(_0x69622f instanceof _0x24780b)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _0x22e017(_0x4bf3dd, _0x2e6c65) {
    for (var _0x304662 = 0; _0x304662 < _0x2e6c65.length; _0x304662++) {
      var _0x6056e2 = _0x2e6c65[_0x304662];
      _0x6056e2.enumerable = _0x6056e2.enumerable || false;
      _0x6056e2.configurable = true;
      if ("value" in _0x6056e2) {
        _0x6056e2.writable = true;
      }
      Object.defineProperty(_0x4bf3dd, _0x6056e2.key, _0x6056e2);
    }
  }
  function _0x5796f0(_0x1002a0, _0x15ef68, _0x156713) {
    if (_0x15ef68) {
      _0x22e017(_0x1002a0.prototype, _0x15ef68);
    }
    if (_0x156713) {
      _0x22e017(_0x1002a0, _0x156713);
    }
    return _0x1002a0;
  }
  function _0x3dcaec(_0x4a982d, _0x2b3c48, _0x44611d) {
    if (_0x2b3c48 in _0x4a982d) {
      Object.defineProperty(_0x4a982d, _0x2b3c48, {
        value: _0x44611d,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      _0x4a982d[_0x2b3c48] = _0x44611d;
    }
    return _0x4a982d;
  }
  function _0x571f5c(_0x3a1f46, _0x34b38c) {
    var _0x21b5f0 = Object.keys(_0x3a1f46);
    if (Object.getOwnPropertySymbols) {
      var _0x51eca0 = Object.getOwnPropertySymbols(_0x3a1f46);
      if (_0x34b38c) {
        _0x51eca0 = _0x51eca0.filter(function (_0x5b7d51) {
          return Object.getOwnPropertyDescriptor(_0x3a1f46, _0x5b7d51).enumerable;
        });
      }
      _0x21b5f0.push.apply(_0x21b5f0, _0x51eca0);
    }
    return _0x21b5f0;
  }
  function _0x198d1a(_0x51a88c) {
    for (var _0x46d507 = 1; _0x46d507 < arguments.length; _0x46d507++) {
      var _0x5558d5 = arguments[_0x46d507] ?? {};
      if (_0x46d507 % 2) {
        _0x571f5c(Object(_0x5558d5), true).forEach(function (_0xab23d4) {
          _0x3dcaec(_0x51a88c, _0xab23d4, _0x5558d5[_0xab23d4]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(_0x51a88c, Object.getOwnPropertyDescriptors(_0x5558d5));
      } else {
        _0x571f5c(Object(_0x5558d5)).forEach(function (_0x4cf408) {
          Object.defineProperty(_0x51a88c, _0x4cf408, Object.getOwnPropertyDescriptor(_0x5558d5, _0x4cf408));
        });
      }
    }
    return _0x51a88c;
  }
  function _0x4961e6(_0x5f1408, _0x28df61) {
    if (typeof _0x28df61 != "function" && _0x28df61 !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    _0x5f1408.prototype = Object.create(_0x28df61 && _0x28df61.prototype, {
      constructor: {
        value: _0x5f1408,
        writable: true,
        configurable: true
      }
    });
    if (_0x28df61) {
      _0x2769c3(_0x5f1408, _0x28df61);
    }
  }
  function _0x46c3f5(_0x59f4ef) {
    return (_0x46c3f5 = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x4d162b) {
      return _0x4d162b.__proto__ || Object.getPrototypeOf(_0x4d162b);
    })(_0x59f4ef);
  }
  function _0x2769c3(_0x223abe, _0x2402f8) {
    return (_0x2769c3 = Object.setPrototypeOf || function (_0x58e3d3, _0x276c30) {
      _0x58e3d3.__proto__ = _0x276c30;
      return _0x58e3d3;
    })(_0x223abe, _0x2402f8);
  }
  function _0x179123(_0x3fb719) {
    if (_0x3fb719 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return _0x3fb719;
  }
  function _0x718478(_0x1a4c38) {
    var _0x7d425b = function () {
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
      } catch (_0x41d5c4) {
        return false;
      }
    }();
    return function () {
      var _0x3ae3ef;
      var _0x16158d;
      var _0x2800c5;
      var _0xb8bb16 = _0x46c3f5(_0x1a4c38);
      if (_0x7d425b) {
        var _0x574416 = _0x46c3f5(this).constructor;
        _0x3ae3ef = Reflect.construct(_0xb8bb16, arguments, _0x574416);
      } else {
        _0x3ae3ef = _0xb8bb16.apply(this, arguments);
      }
      _0x16158d = this;
      if (!(_0x2800c5 = _0x3ae3ef) || typeof _0x2800c5 != "object" && typeof _0x2800c5 != "function") {
        return _0x179123(_0x16158d);
      } else {
        return _0x2800c5;
      }
    };
  }
  function _0x5dcf9f(_0x59db55, _0x55b1f3, _0x54eac0) {
    return (_0x5dcf9f = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function (_0x52afee, _0x1c2638, _0x575876) {
      var _0x13dfe1 = function (_0x2b98d3, _0x38c12b) {
        while (!Object.prototype.hasOwnProperty.call(_0x2b98d3, _0x38c12b) && (_0x2b98d3 = _0x46c3f5(_0x2b98d3)) !== null);
        return _0x2b98d3;
      }(_0x52afee, _0x1c2638);
      if (_0x13dfe1) {
        var _0x3fb7d4 = Object.getOwnPropertyDescriptor(_0x13dfe1, _0x1c2638);
        if (_0x3fb7d4.get) {
          return _0x3fb7d4.get.call(_0x575876);
        } else {
          return _0x3fb7d4.value;
        }
      }
    })(_0x59db55, _0x55b1f3, _0x54eac0 || _0x59db55);
  }
  function _0x3ecf93(_0x260001, _0x2251c9) {
    return function (_0x332fcc) {
      if (Array.isArray(_0x332fcc)) {
        return _0x332fcc;
      }
    }(_0x260001) || function (_0x5b8f9a, _0x40140a) {
      if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(_0x5b8f9a))) {
        return;
      }
      var _0x2c7953 = [];
      var _0x464885 = true;
      var _0x140099 = false;
      var _0x3107be = undefined;
      try {
        for (var _0x484231, _0x243c01 = _0x5b8f9a[Symbol.iterator](); !(_0x464885 = (_0x484231 = _0x243c01.next()).done) && (_0x2c7953.push(_0x484231.value), !_0x40140a || _0x2c7953.length !== _0x40140a); _0x464885 = true);
      } catch (_0x58810f) {
        _0x140099 = true;
        _0x3107be = _0x58810f;
      } finally {
        try {
          if (!_0x464885 && _0x243c01.return != null) {
            _0x243c01.return();
          }
        } finally {
          if (_0x140099) {
            throw _0x3107be;
          }
        }
      }
      return _0x2c7953;
    }(_0x260001, _0x2251c9) || _0x31141(_0x260001, _0x2251c9) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _0x105c0a(_0x40dab4) {
    return function (_0x516378) {
      if (Array.isArray(_0x516378)) {
        return _0x28f9e9(_0x516378);
      }
    }(_0x40dab4) || function (_0x1b13fc) {
      if (typeof Symbol != "undefined" && Symbol.iterator in Object(_0x1b13fc)) {
        return Array.from(_0x1b13fc);
      }
    }(_0x40dab4) || _0x31141(_0x40dab4) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _0x31141(_0xf74304, _0x26831c) {
    if (_0xf74304) {
      if (typeof _0xf74304 == "string") {
        return _0x28f9e9(_0xf74304, _0x26831c);
      }
      var _0x1f00b1 = Object.prototype.toString.call(_0xf74304).slice(8, -1);
      if (_0x1f00b1 === "Object" && _0xf74304.constructor) {
        _0x1f00b1 = _0xf74304.constructor.name;
      }
      if (_0x1f00b1 === "Map" || _0x1f00b1 === "Set") {
        return Array.from(_0xf74304);
      } else if (_0x1f00b1 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x1f00b1)) {
        return _0x28f9e9(_0xf74304, _0x26831c);
      } else {
        return undefined;
      }
    }
  }
  function _0x28f9e9(_0x4a5f16, _0x3de6b7) {
    if (_0x3de6b7 == null || _0x3de6b7 > _0x4a5f16.length) {
      _0x3de6b7 = _0x4a5f16.length;
    }
    for (var _0x278cfb = 0, _0x1451d6 = new Array(_0x3de6b7); _0x278cfb < _0x3de6b7; _0x278cfb++) {
      _0x1451d6[_0x278cfb] = _0x4a5f16[_0x278cfb];
    }
    return _0x1451d6;
  }
  var _0x167353;
  var _0x20461b;
  var _0x1c80b6;
  var _0x219d14;
  var _0x3f1f8e;
  var _0xf52839;
  var _0x4ddd4c = {};
  var _0x141b01 = [];
  var _0x27bd51 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function _0x298b80(_0x354175, _0x43f1c3) {
    for (var _0x5900d9 in _0x43f1c3) {
      _0x354175[_0x5900d9] = _0x43f1c3[_0x5900d9];
    }
    return _0x354175;
  }
  function _0x57484e(_0x2f71eb) {
    var _0x361697 = _0x2f71eb.parentNode;
    if (_0x361697) {
      _0x361697.removeChild(_0x2f71eb);
    }
  }
  function _0xf89304(_0x319dd8, _0x44f40b, _0x377821) {
    var _0x1604eb;
    var _0x59012b;
    var _0x531e3e;
    var _0x42cb17 = arguments;
    var _0x559549 = {};
    for (_0x531e3e in _0x44f40b) {
      if (_0x531e3e == "key") {
        _0x1604eb = _0x44f40b[_0x531e3e];
      } else if (_0x531e3e == "ref") {
        _0x59012b = _0x44f40b[_0x531e3e];
      } else {
        _0x559549[_0x531e3e] = _0x44f40b[_0x531e3e];
      }
    }
    if (arguments.length > 3) {
      _0x377821 = [_0x377821];
      _0x531e3e = 3;
      for (; _0x531e3e < arguments.length; _0x531e3e++) {
        _0x377821.push(_0x42cb17[_0x531e3e]);
      }
    }
    if (_0x377821 != null) {
      _0x559549.children = _0x377821;
    }
    if (typeof _0x319dd8 == "function" && _0x319dd8.defaultProps != null) {
      for (_0x531e3e in _0x319dd8.defaultProps) {
        if (_0x559549[_0x531e3e] === undefined) {
          _0x559549[_0x531e3e] = _0x319dd8.defaultProps[_0x531e3e];
        }
      }
    }
    return _0xfccfd9(_0x319dd8, _0x559549, _0x1604eb, _0x59012b, null);
  }
  function _0xfccfd9(_0x1bd14a, _0x5d9404, _0x51048e, _0x349830, _0x24b968) {
    var _0x261d73 = {
      type: _0x1bd14a,
      props: _0x5d9404,
      key: _0x51048e,
      ref: _0x349830,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: undefined,
      __c: null,
      __h: null,
      constructor: undefined,
      __v: _0x24b968
    };
    if (_0x24b968 == null) {
      _0x261d73.__v = _0x261d73;
    }
    if (_0x167353.vnode != null) {
      _0x167353.vnode(_0x261d73);
    }
    return _0x261d73;
  }
  function _0x1c0527(_0x4ccf6e) {
    return _0x4ccf6e.children;
  }
  function _0xa6c71(_0x57eaa4, _0xd8e7c) {
    this.props = _0x57eaa4;
    this.context = _0xd8e7c;
  }
  function _0xd42c26(_0x1e4f45, _0x2a9214) {
    if (_0x2a9214 == null) {
      if (_0x1e4f45.__) {
        return _0xd42c26(_0x1e4f45.__, _0x1e4f45.__.__k.indexOf(_0x1e4f45) + 1);
      } else {
        return null;
      }
    }
    var _0x36783e;
    for (; _0x2a9214 < _0x1e4f45.__k.length; _0x2a9214++) {
      if ((_0x36783e = _0x1e4f45.__k[_0x2a9214]) != null && _0x36783e.__e != null) {
        return _0x36783e.__e;
      }
    }
    if (typeof _0x1e4f45.type == "function") {
      return _0xd42c26(_0x1e4f45);
    } else {
      return null;
    }
  }
  function _0x3c5ce2(_0x5d1804) {
    var _0x33f871;
    var _0x4de200;
    if ((_0x5d1804 = _0x5d1804.__) != null && _0x5d1804.__c != null) {
      _0x5d1804.__e = _0x5d1804.__c.base = null;
      _0x33f871 = 0;
      for (; _0x33f871 < _0x5d1804.__k.length; _0x33f871++) {
        if ((_0x4de200 = _0x5d1804.__k[_0x33f871]) != null && _0x4de200.__e != null) {
          _0x5d1804.__e = _0x5d1804.__c.base = _0x4de200.__e;
          break;
        }
      }
      return _0x3c5ce2(_0x5d1804);
    }
  }
  function _0x164414(_0x317915) {
    if (!_0x317915.__d && (_0x317915.__d = true) && _0x20461b.push(_0x317915) && !_0xeca96c.__r++ || _0x219d14 !== _0x167353.debounceRendering) {
      ((_0x219d14 = _0x167353.debounceRendering) || _0x1c80b6)(_0xeca96c);
    }
  }
  function _0xeca96c() {
    var _0x5a881f;
    while (_0xeca96c.__r = _0x20461b.length) {
      _0x5a881f = _0x20461b.sort(function (_0x444eca, _0xdd6a93) {
        return _0x444eca.__v.__b - _0xdd6a93.__v.__b;
      });
      _0x20461b = [];
      _0x5a881f.some(function (_0x48dd3a) {
        var _0x2986f3;
        var _0x25941d;
        var _0x32e0f2;
        var _0x4ebaa5;
        var _0x5456d7;
        var _0x8639ed;
        var _0x2eb0c1;
        if (_0x48dd3a.__d) {
          _0x8639ed = (_0x5456d7 = (_0x2986f3 = _0x48dd3a).__v).__e;
          if (_0x2eb0c1 = _0x2986f3.__P) {
            _0x25941d = [];
            _0x4ebaa5 = _0x165e36(_0x2eb0c1, _0x5456d7, (_0x32e0f2 = _0x298b80({}, _0x5456d7)).__v = _0x32e0f2, _0x2986f3.__n, _0x2eb0c1.ownerSVGElement !== undefined, _0x5456d7.__h != null ? [_0x8639ed] : null, _0x25941d, _0x8639ed == null ? _0xd42c26(_0x5456d7) : _0x8639ed, _0x5456d7.__h);
            _0x1d9516(_0x25941d, _0x5456d7);
            if (_0x4ebaa5 != _0x8639ed) {
              _0x3c5ce2(_0x5456d7);
            }
          }
        }
      });
    }
  }
  function _0x164e25(_0x465f8a, _0x4e83ee, _0x484d3d, _0x5abea8, _0x3692b2, _0x55c8da, _0x309dfe, _0x46ca8b, _0x23f21e, _0x51e5d2) {
    var _0x41df1b;
    var _0x1ea583;
    var _0x592bda;
    var _0x5528cb;
    var _0x35b900;
    var _0x430360;
    var _0x1f7fd5;
    var _0x22e5e0 = _0x5abea8 && _0x5abea8.__k || _0x141b01;
    var _0x48c055 = _0x22e5e0.length;
    if (_0x23f21e == _0x4ddd4c) {
      _0x23f21e = _0x309dfe != null ? _0x309dfe[0] : _0x48c055 ? _0xd42c26(_0x5abea8, 0) : null;
    }
    _0x484d3d.__k = [];
    _0x41df1b = 0;
    for (; _0x41df1b < _0x4e83ee.length; _0x41df1b++) {
      if ((_0x5528cb = _0x484d3d.__k[_0x41df1b] = (_0x5528cb = _0x4e83ee[_0x41df1b]) == null || typeof _0x5528cb == "boolean" ? null : typeof _0x5528cb == "string" || typeof _0x5528cb == "number" ? _0xfccfd9(null, _0x5528cb, null, null, _0x5528cb) : Array.isArray(_0x5528cb) ? _0xfccfd9(_0x1c0527, {
        children: _0x5528cb
      }, null, null, null) : _0x5528cb.__e != null || _0x5528cb.__c != null ? _0xfccfd9(_0x5528cb.type, _0x5528cb.props, _0x5528cb.key, null, _0x5528cb.__v) : _0x5528cb) != null) {
        _0x5528cb.__ = _0x484d3d;
        _0x5528cb.__b = _0x484d3d.__b + 1;
        if ((_0x592bda = _0x22e5e0[_0x41df1b]) === null || _0x592bda && _0x5528cb.key == _0x592bda.key && _0x5528cb.type === _0x592bda.type) {
          _0x22e5e0[_0x41df1b] = undefined;
        } else {
          for (_0x1ea583 = 0; _0x1ea583 < _0x48c055; _0x1ea583++) {
            if ((_0x592bda = _0x22e5e0[_0x1ea583]) && _0x5528cb.key == _0x592bda.key && _0x5528cb.type === _0x592bda.type) {
              _0x22e5e0[_0x1ea583] = undefined;
              break;
            }
            _0x592bda = null;
          }
        }
        _0x35b900 = _0x165e36(_0x465f8a, _0x5528cb, _0x592bda = _0x592bda || _0x4ddd4c, _0x3692b2, _0x55c8da, _0x309dfe, _0x46ca8b, _0x23f21e, _0x51e5d2);
        if ((_0x1ea583 = _0x5528cb.ref) && _0x592bda.ref != _0x1ea583) {
          _0x1f7fd5 = _0x1f7fd5 || [];
          if (_0x592bda.ref) {
            _0x1f7fd5.push(_0x592bda.ref, null, _0x5528cb);
          }
          _0x1f7fd5.push(_0x1ea583, _0x5528cb.__c || _0x35b900, _0x5528cb);
        }
        if (_0x35b900 != null) {
          if (_0x430360 == null) {
            _0x430360 = _0x35b900;
          }
          _0x23f21e = _0xa1185a(_0x465f8a, _0x5528cb, _0x592bda, _0x22e5e0, _0x309dfe, _0x35b900, _0x23f21e);
          if (_0x51e5d2 || _0x484d3d.type != "option") {
            if (typeof _0x484d3d.type == "function") {
              _0x484d3d.__d = _0x23f21e;
            }
          } else {
            _0x465f8a.value = "";
          }
        } else if (_0x23f21e && _0x592bda.__e == _0x23f21e && _0x23f21e.parentNode != _0x465f8a) {
          _0x23f21e = _0xd42c26(_0x592bda);
        }
      }
    }
    _0x484d3d.__e = _0x430360;
    if (_0x309dfe != null && typeof _0x484d3d.type != "function") {
      for (_0x41df1b = _0x309dfe.length; _0x41df1b--;) {
        if (_0x309dfe[_0x41df1b] != null) {
          _0x57484e(_0x309dfe[_0x41df1b]);
        }
      }
    }
    for (_0x41df1b = _0x48c055; _0x41df1b--;) {
      if (_0x22e5e0[_0x41df1b] != null) {
        _0x2c3387(_0x22e5e0[_0x41df1b], _0x22e5e0[_0x41df1b]);
      }
    }
    if (_0x1f7fd5) {
      for (_0x41df1b = 0; _0x41df1b < _0x1f7fd5.length; _0x41df1b++) {
        _0x2b5449(_0x1f7fd5[_0x41df1b], _0x1f7fd5[++_0x41df1b], _0x1f7fd5[++_0x41df1b]);
      }
    }
  }
  function _0xa1185a(_0x3af9a7, _0x7de20e, _0x4ec41f, _0xf33a21, _0x20cd7f, _0x45fad9, _0x3fbaba) {
    var _0x459838;
    var _0x2b2baa;
    var _0x4f7e90;
    if (_0x7de20e.__d !== undefined) {
      _0x459838 = _0x7de20e.__d;
      _0x7de20e.__d = undefined;
    } else if (_0x20cd7f == _0x4ec41f || _0x45fad9 != _0x3fbaba || _0x45fad9.parentNode == null) {
      _0x5d5092: if (_0x3fbaba == null || _0x3fbaba.parentNode !== _0x3af9a7) {
        _0x3af9a7.appendChild(_0x45fad9);
        _0x459838 = null;
      } else {
        _0x2b2baa = _0x3fbaba;
        _0x4f7e90 = 0;
        for (; (_0x2b2baa = _0x2b2baa.nextSibling) && _0x4f7e90 < _0xf33a21.length; _0x4f7e90 += 2) {
          if (_0x2b2baa == _0x45fad9) {
            break _0x5d5092;
          }
        }
        _0x3af9a7.insertBefore(_0x45fad9, _0x3fbaba);
        _0x459838 = _0x3fbaba;
      }
    }
    if (_0x459838 !== undefined) {
      return _0x459838;
    } else {
      return _0x45fad9.nextSibling;
    }
  }
  function _0x31c663(_0x11bc1a, _0x2d61f9, _0x39d443) {
    if (_0x2d61f9[0] === "-") {
      _0x11bc1a.setProperty(_0x2d61f9, _0x39d443);
    } else {
      _0x11bc1a[_0x2d61f9] = _0x39d443 == null ? "" : typeof _0x39d443 != "number" || _0x27bd51.test(_0x2d61f9) ? _0x39d443 : _0x39d443 + "px";
    }
  }
  function _0x2c8561(_0x333369, _0x47cd33, _0x8d73b4, _0x32b095, _0x399451) {
    var _0x3801f9;
    var _0x16252b;
    var _0x289cc7;
    if (_0x399451 && _0x47cd33 == "className") {
      _0x47cd33 = "class";
    }
    if (_0x47cd33 === "style") {
      if (typeof _0x8d73b4 == "string") {
        _0x333369.style.cssText = _0x8d73b4;
      } else {
        if (typeof _0x32b095 == "string") {
          _0x333369.style.cssText = _0x32b095 = "";
        }
        if (_0x32b095) {
          for (_0x47cd33 in _0x32b095) {
            if (!_0x8d73b4 || !(_0x47cd33 in _0x8d73b4)) {
              _0x31c663(_0x333369.style, _0x47cd33, "");
            }
          }
        }
        if (_0x8d73b4) {
          for (_0x47cd33 in _0x8d73b4) {
            if (!_0x32b095 || _0x8d73b4[_0x47cd33] !== _0x32b095[_0x47cd33]) {
              _0x31c663(_0x333369.style, _0x47cd33, _0x8d73b4[_0x47cd33]);
            }
          }
        }
      }
    } else if (_0x47cd33[0] === "o" && _0x47cd33[1] === "n") {
      _0x3801f9 = _0x47cd33 !== (_0x47cd33 = _0x47cd33.replace(/Capture$/, ""));
      if ((_0x16252b = _0x47cd33.toLowerCase()) in _0x333369) {
        _0x47cd33 = _0x16252b;
      }
      _0x47cd33 = _0x47cd33.slice(2);
      _0x333369.l ||= {};
      _0x289cc7 = _0x3801f9 ? _0x3d6f6b : _0x221b8a;
      if (_0x333369.l[_0x47cd33 + _0x3801f9] = _0x8d73b4) {
        if (!_0x32b095) {
          _0x333369.addEventListener(_0x47cd33, _0x289cc7, _0x3801f9);
        }
      } else {
        _0x333369.removeEventListener(_0x47cd33, _0x289cc7, _0x3801f9);
      }
    } else if (_0x47cd33 !== "list" && _0x47cd33 !== "tagName" && _0x47cd33 !== "form" && _0x47cd33 !== "type" && _0x47cd33 !== "size" && _0x47cd33 !== "download" && _0x47cd33 !== "href" && !_0x399451 && _0x47cd33 in _0x333369) {
      _0x333369[_0x47cd33] = _0x8d73b4 == null ? "" : _0x8d73b4;
    } else if (typeof _0x8d73b4 != "function" && _0x47cd33 !== "dangerouslySetInnerHTML") {
      if (_0x47cd33 !== (_0x47cd33 = _0x47cd33.replace(/xlink:?/, ""))) {
        if (_0x8d73b4 == null || _0x8d73b4 === false) {
          _0x333369.removeAttributeNS("http://www.w3.org/1999/xlink", _0x47cd33.toLowerCase());
        } else {
          _0x333369.setAttributeNS("http://www.w3.org/1999/xlink", _0x47cd33.toLowerCase(), _0x8d73b4);
        }
      } else if (_0x8d73b4 == null || _0x8d73b4 === false && !/^ar/.test(_0x47cd33)) {
        _0x333369.removeAttribute(_0x47cd33);
      } else {
        _0x333369.setAttribute(_0x47cd33, _0x8d73b4);
      }
    }
  }
  function _0x221b8a(_0x4f2ecc) {
    this.l[_0x4f2ecc.type + false](_0x167353.event ? _0x167353.event(_0x4f2ecc) : _0x4f2ecc);
  }
  function _0x3d6f6b(_0x49975c) {
    this.l[_0x49975c.type + true](_0x167353.event ? _0x167353.event(_0x49975c) : _0x49975c);
  }
  function _0x165e36(_0x2152d3, _0x383dbb, _0x22888a, _0x52a7d9, _0x3b4001, _0x343c71, _0x4ec875, _0x1b7dfb, _0x3a7ec2) {
    var _0x22eeac;
    var _0x1dcfe3;
    var _0x5ac264;
    var _0x2f77b6;
    var _0x4a5e70;
    var _0x959026;
    var _0x57dcee;
    var _0x19d639;
    var _0x57f620;
    var _0xbfd459;
    var _0x3f9b4b;
    var _0x3d993b = _0x383dbb.type;
    if (_0x383dbb.constructor !== undefined) {
      return null;
    }
    if (_0x22888a.__h != null) {
      _0x3a7ec2 = _0x22888a.__h;
      _0x1b7dfb = _0x383dbb.__e = _0x22888a.__e;
      _0x383dbb.__h = null;
      _0x343c71 = [_0x1b7dfb];
    }
    if (_0x22eeac = _0x167353.__b) {
      _0x22eeac(_0x383dbb);
    }
    try {
      _0x2571cd: if (typeof _0x3d993b == "function") {
        _0x19d639 = _0x383dbb.props;
        _0x57f620 = (_0x22eeac = _0x3d993b.contextType) && _0x52a7d9[_0x22eeac.__c];
        _0xbfd459 = _0x22eeac ? _0x57f620 ? _0x57f620.props.value : _0x22eeac.__ : _0x52a7d9;
        if (_0x22888a.__c) {
          _0x57dcee = (_0x1dcfe3 = _0x383dbb.__c = _0x22888a.__c).__ = _0x1dcfe3.__E;
        } else {
          if ("prototype" in _0x3d993b && _0x3d993b.prototype.render) {
            _0x383dbb.__c = _0x1dcfe3 = new _0x3d993b(_0x19d639, _0xbfd459);
          } else {
            _0x383dbb.__c = _0x1dcfe3 = new _0xa6c71(_0x19d639, _0xbfd459);
            _0x1dcfe3.constructor = _0x3d993b;
            _0x1dcfe3.render = _0xd4a97b;
          }
          if (_0x57f620) {
            _0x57f620.sub(_0x1dcfe3);
          }
          _0x1dcfe3.props = _0x19d639;
          _0x1dcfe3.state ||= {};
          _0x1dcfe3.context = _0xbfd459;
          _0x1dcfe3.__n = _0x52a7d9;
          _0x5ac264 = _0x1dcfe3.__d = true;
          _0x1dcfe3.__h = [];
        }
        if (_0x1dcfe3.__s == null) {
          _0x1dcfe3.__s = _0x1dcfe3.state;
        }
        if (_0x3d993b.getDerivedStateFromProps != null) {
          if (_0x1dcfe3.__s == _0x1dcfe3.state) {
            _0x1dcfe3.__s = _0x298b80({}, _0x1dcfe3.__s);
          }
          _0x298b80(_0x1dcfe3.__s, _0x3d993b.getDerivedStateFromProps(_0x19d639, _0x1dcfe3.__s));
        }
        _0x2f77b6 = _0x1dcfe3.props;
        _0x4a5e70 = _0x1dcfe3.state;
        if (_0x5ac264) {
          if (_0x3d993b.getDerivedStateFromProps == null && _0x1dcfe3.componentWillMount != null) {
            _0x1dcfe3.componentWillMount();
          }
          if (_0x1dcfe3.componentDidMount != null) {
            _0x1dcfe3.__h.push(_0x1dcfe3.componentDidMount);
          }
        } else {
          if (_0x3d993b.getDerivedStateFromProps == null && _0x19d639 !== _0x2f77b6 && _0x1dcfe3.componentWillReceiveProps != null) {
            _0x1dcfe3.componentWillReceiveProps(_0x19d639, _0xbfd459);
          }
          if (!_0x1dcfe3.__e && _0x1dcfe3.shouldComponentUpdate != null && _0x1dcfe3.shouldComponentUpdate(_0x19d639, _0x1dcfe3.__s, _0xbfd459) === false || _0x383dbb.__v === _0x22888a.__v) {
            _0x1dcfe3.props = _0x19d639;
            _0x1dcfe3.state = _0x1dcfe3.__s;
            if (_0x383dbb.__v !== _0x22888a.__v) {
              _0x1dcfe3.__d = false;
            }
            (_0x1dcfe3.__v = _0x383dbb).__e = _0x22888a.__e;
            _0x383dbb.__k = _0x22888a.__k;
            if (_0x1dcfe3.__h.length) {
              _0x4ec875.push(_0x1dcfe3);
            }
            (function _0x169a4e(_0x50a67f, _0x168091, _0x2d8898) {
              var _0x326b28;
              var _0x159283;
              for (_0x326b28 = 0; _0x326b28 < _0x50a67f.__k.length; _0x326b28++) {
                if (_0x159283 = _0x50a67f.__k[_0x326b28]) {
                  _0x159283.__ = _0x50a67f;
                  if (_0x159283.__e) {
                    if (typeof _0x159283.type == "function" && _0x159283.__k.length > 1) {
                      _0x169a4e(_0x159283, _0x168091, _0x2d8898);
                    }
                    _0x168091 = _0xa1185a(_0x2d8898, _0x159283, _0x159283, _0x50a67f.__k, null, _0x159283.__e, _0x168091);
                    if (typeof _0x50a67f.type == "function") {
                      _0x50a67f.__d = _0x168091;
                    }
                  }
                }
              }
            })(_0x383dbb, _0x1b7dfb, _0x2152d3);
            break _0x2571cd;
          }
          if (_0x1dcfe3.componentWillUpdate != null) {
            _0x1dcfe3.componentWillUpdate(_0x19d639, _0x1dcfe3.__s, _0xbfd459);
          }
          if (_0x1dcfe3.componentDidUpdate != null) {
            _0x1dcfe3.__h.push(function () {
              _0x1dcfe3.componentDidUpdate(_0x2f77b6, _0x4a5e70, _0x959026);
            });
          }
        }
        _0x1dcfe3.context = _0xbfd459;
        _0x1dcfe3.props = _0x19d639;
        _0x1dcfe3.state = _0x1dcfe3.__s;
        if (_0x22eeac = _0x167353.__r) {
          _0x22eeac(_0x383dbb);
        }
        _0x1dcfe3.__d = false;
        _0x1dcfe3.__v = _0x383dbb;
        _0x1dcfe3.__P = _0x2152d3;
        _0x22eeac = _0x1dcfe3.render(_0x1dcfe3.props, _0x1dcfe3.state, _0x1dcfe3.context);
        _0x1dcfe3.state = _0x1dcfe3.__s;
        if (_0x1dcfe3.getChildContext != null) {
          _0x52a7d9 = _0x298b80(_0x298b80({}, _0x52a7d9), _0x1dcfe3.getChildContext());
        }
        if (!_0x5ac264 && _0x1dcfe3.getSnapshotBeforeUpdate != null) {
          _0x959026 = _0x1dcfe3.getSnapshotBeforeUpdate(_0x2f77b6, _0x4a5e70);
        }
        _0x3f9b4b = _0x22eeac != null && _0x22eeac.type == _0x1c0527 && _0x22eeac.key == null ? _0x22eeac.props.children : _0x22eeac;
        _0x164e25(_0x2152d3, Array.isArray(_0x3f9b4b) ? _0x3f9b4b : [_0x3f9b4b], _0x383dbb, _0x22888a, _0x52a7d9, _0x3b4001, _0x343c71, _0x4ec875, _0x1b7dfb, _0x3a7ec2);
        _0x1dcfe3.base = _0x383dbb.__e;
        _0x383dbb.__h = null;
        if (_0x1dcfe3.__h.length) {
          _0x4ec875.push(_0x1dcfe3);
        }
        if (_0x57dcee) {
          _0x1dcfe3.__E = _0x1dcfe3.__ = null;
        }
        _0x1dcfe3.__e = false;
      } else if (_0x343c71 == null && _0x383dbb.__v === _0x22888a.__v) {
        _0x383dbb.__k = _0x22888a.__k;
        _0x383dbb.__e = _0x22888a.__e;
      } else {
        _0x383dbb.__e = function (_0x50198f, _0x27a78b, _0x5ab603, _0xbec6e5, _0x47c24e, _0x5a976c, _0xf47396, _0x33623c) {
          var _0x4a96c2;
          var _0x3536fd;
          var _0x333af8;
          var _0x3ece71;
          var _0x1f7b9c;
          var _0x231c4f = _0x5ab603.props;
          var _0x4c40af = _0x27a78b.props;
          _0x47c24e = _0x27a78b.type === "svg" || _0x47c24e;
          if (_0x5a976c != null) {
            for (_0x4a96c2 = 0; _0x4a96c2 < _0x5a976c.length; _0x4a96c2++) {
              if ((_0x3536fd = _0x5a976c[_0x4a96c2]) != null && ((_0x27a78b.type === null ? _0x3536fd.nodeType === 3 : _0x3536fd.localName === _0x27a78b.type) || _0x50198f == _0x3536fd)) {
                _0x50198f = _0x3536fd;
                _0x5a976c[_0x4a96c2] = null;
                break;
              }
            }
          }
          if (_0x50198f == null) {
            if (_0x27a78b.type === null) {
              return document.createTextNode(_0x4c40af);
            }
            _0x50198f = _0x47c24e ? document.createElementNS("http://www.w3.org/2000/svg", _0x27a78b.type) : document.createElement(_0x27a78b.type, _0x4c40af.is && {
              is: _0x4c40af.is
            });
            _0x5a976c = null;
            _0x33623c = false;
          }
          if (_0x27a78b.type === null) {
            if (_0x231c4f !== _0x4c40af && (!_0x33623c || _0x50198f.data !== _0x4c40af)) {
              _0x50198f.data = _0x4c40af;
            }
          } else {
            if (_0x5a976c != null) {
              _0x5a976c = _0x141b01.slice.call(_0x50198f.childNodes);
            }
            _0x333af8 = (_0x231c4f = _0x5ab603.props || _0x4ddd4c).dangerouslySetInnerHTML;
            _0x3ece71 = _0x4c40af.dangerouslySetInnerHTML;
            if (!_0x33623c) {
              if (_0x5a976c != null) {
                _0x231c4f = {};
                _0x1f7b9c = 0;
                for (; _0x1f7b9c < _0x50198f.attributes.length; _0x1f7b9c++) {
                  _0x231c4f[_0x50198f.attributes[_0x1f7b9c].name] = _0x50198f.attributes[_0x1f7b9c].value;
                }
              }
              if (_0x3ece71 || _0x333af8) {
                if (!_0x3ece71 || (!_0x333af8 || _0x3ece71.__html != _0x333af8.__html) && _0x3ece71.__html !== _0x50198f.innerHTML) {
                  _0x50198f.innerHTML = _0x3ece71 && _0x3ece71.__html || "";
                }
              }
            }
            (function (_0x5ed53f, _0x450f20, _0x2f5048, _0x15049a, _0x5c496d) {
              var _0x18b9fa;
              for (_0x18b9fa in _0x2f5048) {
                if (_0x18b9fa !== "children" && _0x18b9fa !== "key" && !(_0x18b9fa in _0x450f20)) {
                  _0x2c8561(_0x5ed53f, _0x18b9fa, null, _0x2f5048[_0x18b9fa], _0x15049a);
                }
              }
              for (_0x18b9fa in _0x450f20) {
                if ((!_0x5c496d || typeof _0x450f20[_0x18b9fa] == "function") && _0x18b9fa !== "children" && _0x18b9fa !== "key" && _0x18b9fa !== "value" && _0x18b9fa !== "checked" && _0x2f5048[_0x18b9fa] !== _0x450f20[_0x18b9fa]) {
                  _0x2c8561(_0x5ed53f, _0x18b9fa, _0x450f20[_0x18b9fa], _0x2f5048[_0x18b9fa], _0x15049a);
                }
              }
            })(_0x50198f, _0x4c40af, _0x231c4f, _0x47c24e, _0x33623c);
            if (_0x3ece71) {
              _0x27a78b.__k = [];
            } else {
              _0x4a96c2 = _0x27a78b.props.children;
              _0x164e25(_0x50198f, Array.isArray(_0x4a96c2) ? _0x4a96c2 : [_0x4a96c2], _0x27a78b, _0x5ab603, _0xbec6e5, _0x27a78b.type !== "foreignObject" && _0x47c24e, _0x5a976c, _0xf47396, _0x4ddd4c, _0x33623c);
            }
            if (!_0x33623c) {
              if ("value" in _0x4c40af && (_0x4a96c2 = _0x4c40af.value) !== undefined && (_0x4a96c2 !== _0x50198f.value || _0x27a78b.type === "progress" && !_0x4a96c2)) {
                _0x2c8561(_0x50198f, "value", _0x4a96c2, _0x231c4f.value, false);
              }
              if ("checked" in _0x4c40af && (_0x4a96c2 = _0x4c40af.checked) !== undefined && _0x4a96c2 !== _0x50198f.checked) {
                _0x2c8561(_0x50198f, "checked", _0x4a96c2, _0x231c4f.checked, false);
              }
            }
          }
          return _0x50198f;
        }(_0x22888a.__e, _0x383dbb, _0x22888a, _0x52a7d9, _0x3b4001, _0x343c71, _0x4ec875, _0x3a7ec2);
      }
      if (_0x22eeac = _0x167353.diffed) {
        _0x22eeac(_0x383dbb);
      }
    } catch (_0x53e222) {
      _0x383dbb.__v = null;
      if (!!_0x3a7ec2 || _0x343c71 != null) {
        _0x383dbb.__e = _0x1b7dfb;
        _0x383dbb.__h = !!_0x3a7ec2;
        _0x343c71[_0x343c71.indexOf(_0x1b7dfb)] = null;
      }
      _0x167353.__e(_0x53e222, _0x383dbb, _0x22888a);
    }
    return _0x383dbb.__e;
  }
  function _0x1d9516(_0x247e5b, _0x402e31) {
    if (_0x167353.__c) {
      _0x167353.__c(_0x402e31, _0x247e5b);
    }
    _0x247e5b.some(function (_0x280c07) {
      try {
        _0x247e5b = _0x280c07.__h;
        _0x280c07.__h = [];
        _0x247e5b.some(function (_0x75fe36) {
          _0x75fe36.call(_0x280c07);
        });
      } catch (_0x296f64) {
        _0x167353.__e(_0x296f64, _0x280c07.__v);
      }
    });
  }
  function _0x2b5449(_0xc8af07, _0x4d2e3a, _0x13d214) {
    try {
      if (typeof _0xc8af07 == "function") {
        _0xc8af07(_0x4d2e3a);
      } else {
        _0xc8af07.current = _0x4d2e3a;
      }
    } catch (_0x320ba1) {
      _0x167353.__e(_0x320ba1, _0x13d214);
    }
  }
  function _0x2c3387(_0x402dbe, _0x144f34, _0x19f793) {
    var _0x3e7938;
    var _0x2d70b9;
    var _0x11fdb2;
    if (_0x167353.unmount) {
      _0x167353.unmount(_0x402dbe);
    }
    if (_0x3e7938 = _0x402dbe.ref) {
      if (!_0x3e7938.current || _0x3e7938.current === _0x402dbe.__e) {
        _0x2b5449(_0x3e7938, null, _0x144f34);
      }
    }
    if (!_0x19f793 && typeof _0x402dbe.type != "function") {
      _0x19f793 = (_0x2d70b9 = _0x402dbe.__e) != null;
    }
    _0x402dbe.__e = _0x402dbe.__d = undefined;
    if ((_0x3e7938 = _0x402dbe.__c) != null) {
      if (_0x3e7938.componentWillUnmount) {
        try {
          _0x3e7938.componentWillUnmount();
        } catch (_0x3d0432) {
          _0x167353.__e(_0x3d0432, _0x144f34);
        }
      }
      _0x3e7938.base = _0x3e7938.__P = null;
    }
    if (_0x3e7938 = _0x402dbe.__k) {
      for (_0x11fdb2 = 0; _0x11fdb2 < _0x3e7938.length; _0x11fdb2++) {
        if (_0x3e7938[_0x11fdb2]) {
          _0x2c3387(_0x3e7938[_0x11fdb2], _0x144f34, _0x19f793);
        }
      }
    }
    if (_0x2d70b9 != null) {
      _0x57484e(_0x2d70b9);
    }
  }
  function _0xd4a97b(_0x2f776b, _0x533452, _0x2cbd69) {
    return this.constructor(_0x2f776b, _0x2cbd69);
  }
  _0x167353 = {
    __e: function (_0x27c119, _0x3b21dc) {
      var _0x3f5da2;
      var _0x5ed87d;
      for (var _0x22887d, _0xe39996 = _0x3b21dc.__h; _0x3b21dc = _0x3b21dc.__;) {
        if ((_0x3f5da2 = _0x3b21dc.__c) && !_0x3f5da2.__) {
          try {
            if ((_0x5ed87d = _0x3f5da2.constructor) && _0x5ed87d.getDerivedStateFromError != null) {
              _0x3f5da2.setState(_0x5ed87d.getDerivedStateFromError(_0x27c119));
              _0x22887d = _0x3f5da2.__d;
            }
            if (_0x3f5da2.componentDidCatch != null) {
              _0x3f5da2.componentDidCatch(_0x27c119);
              _0x22887d = _0x3f5da2.__d;
            }
            if (_0x22887d) {
              _0x3b21dc.__h = _0xe39996;
              return _0x3f5da2.__E = _0x3f5da2;
            }
          } catch (_0x3e008d) {
            _0x27c119 = _0x3e008d;
          }
        }
      }
      throw _0x27c119;
    }
  };
  _0xa6c71.prototype.setState = function (_0x32737d, _0x356bc6) {
    var _0x566764;
    _0x566764 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = _0x298b80({}, this.state);
    if (typeof _0x32737d == "function") {
      _0x32737d = _0x32737d(_0x298b80({}, _0x566764), this.props);
    }
    if (_0x32737d) {
      _0x298b80(_0x566764, _0x32737d);
    }
    if (_0x32737d != null && this.__v) {
      if (_0x356bc6) {
        this.__h.push(_0x356bc6);
      }
      _0x164414(this);
    }
  };
  _0xa6c71.prototype.forceUpdate = function (_0x502404) {
    if (this.__v) {
      this.__e = true;
      if (_0x502404) {
        this.__h.push(_0x502404);
      }
      _0x164414(this);
    }
  };
  _0xa6c71.prototype.render = _0x1c0527;
  _0x20461b = [];
  _0x1c80b6 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
  _0x3f1f8e = _0x4ddd4c;
  _0xf52839 = _0xeca96c.__r = 0;
  function _0x2cb6e4(_0x1973de, _0xc884b9) {
    _0x1973de(_0xc884b9 = {
      exports: {}
    }, _0xc884b9.exports);
    return _0xc884b9.exports;
  }
  function _0x1f3eaf(_0x51f12c) {
    return Math.abs(_0x51f12c) <= _0x13162a;
  }
  function _0xdf1949(_0x97bc62, _0x2dd8ee) {
    return Math.abs(_0x97bc62 - _0x2dd8ee) <= _0x13162a;
  }
  function _0x10566a(_0x48313d, _0x58d038, _0x3904da) {
    return _0x48313d + (_0x58d038 - _0x48313d) * _0x3904da;
  }
  function _0x470d99(_0x52d0fe, _0x152fbc, _0xf87a81, _0x13e2da) {
    return _0x52d0fe * _0x13e2da - _0x152fbc * _0xf87a81;
  }
  function _0x46d517(_0x40298f, _0x139d4c, _0x5f7cbf) {
    return Math.min(_0x40298f, _0x139d4c) - _0x13162a <= _0x5f7cbf && _0x5f7cbf <= Math.max(_0x40298f, _0x139d4c) + _0x13162a;
  }
  function _0x52ce11(_0x3be053, _0x393292, _0x254cfb, _0x280ce6) {
    var _0x539276;
    if (_0x393292 < _0x3be053) {
      _0x539276 = _0x3be053;
      _0x3be053 = _0x393292;
      _0x393292 = _0x539276;
    }
    if (_0x280ce6 < _0x254cfb) {
      _0x539276 = _0x254cfb;
      _0x254cfb = _0x280ce6;
      _0x280ce6 = _0x539276;
    }
    return Math.min(_0x393292, _0x280ce6) - Math.max(_0x3be053, _0x254cfb);
  }
  function _0x1fef0e() {
    return ++_0x8fbc39;
  }
  function _0x5c78ae(_0x5880dd, _0x4834d5, _0x56f63a) {
    var _0x102570 = _0x5880dd.x - _0x56f63a.x;
    var _0x45e29b = _0x5880dd.y - _0x56f63a.y;
    var _0x10e3ed = _0x4834d5.x - _0x56f63a.x;
    var _0x486e0f = _0x4834d5.y - _0x56f63a.y;
    if (_0x45e29b * _0x486e0f > 0) {
      return 1;
    }
    var _0x37c635 = _0x102570 * _0x486e0f - _0x45e29b * _0x10e3ed;
    var _0x2a3702 = _0x1f3eaf(_0x37c635) ? 0 : Math.sign(_0x37c635);
    if (_0x2a3702 === 0) {
      if (_0x102570 * _0x10e3ed <= 0) {
        return 0;
      } else {
        return 1;
      }
    } else if (_0x45e29b < 0) {
      return -_0x2a3702;
    } else if (_0x486e0f < 0) {
      return _0x2a3702;
    } else {
      return 1;
    }
  }
  function _0x516f4d(_0x4dabc8) {
    function _0x1c57f8(_0x4ddc6d) {
      var _0x1b5380 = _0x4ddc6d.toString(16);
      if (_0x1b5380.length < 2) {
        return `0${_0x1b5380}`;
      } else {
        return _0x1b5380;
      }
    }
    var _0x41c3fc = _0x4dabc8.r;
    var _0x568a84 = _0x4dabc8.g;
    var _0x57752e = _0x4dabc8.b;
    return `#${_0x1c57f8(_0x41c3fc)}${_0x1c57f8(_0x568a84)}${_0x1c57f8(_0x57752e)}`;
  }
  function _0x533d56(_0x5a2fc5) {
    return _0x516f4d(function (_0x8c1ab5) {
      var _0x596111;
      var _0x3e4219;
      var _0x1a72b6;
      var _0x503c8c;
      var _0x34efda;
      var _0x25d49b;
      var _0x3a5ddf;
      var _0x42d206;
      var _0x46e2a8 = _0x8c1ab5.h;
      var _0x466991 = _0x8c1ab5.s;
      var _0x5e9ba3 = _0x8c1ab5.v;
      _0x46e2a8 = Math.max(0, Math.min(360, _0x46e2a8));
      _0x466991 = Math.max(0, Math.min(100, _0x466991));
      _0x5e9ba3 = Math.max(0, Math.min(100, _0x5e9ba3));
      _0x5e9ba3 /= 100;
      if ((_0x466991 /= 100) == 0) {
        _0x596111 = _0x3e4219 = _0x1a72b6 = _0x5e9ba3;
        return {
          r: Math.round(_0x596111 * 255),
          g: Math.round(_0x3e4219 * 255),
          b: Math.round(_0x1a72b6 * 255)
        };
      }
      _0x25d49b = _0x5e9ba3 * (1 - _0x466991);
      _0x3a5ddf = _0x5e9ba3 * (1 - _0x466991 * (_0x34efda = (_0x46e2a8 /= 60) - (_0x503c8c = Math.floor(_0x46e2a8))));
      _0x42d206 = _0x5e9ba3 * (1 - _0x466991 * (1 - _0x34efda));
      switch (_0x503c8c) {
        case 0:
          _0x596111 = _0x5e9ba3;
          _0x3e4219 = _0x42d206;
          _0x1a72b6 = _0x25d49b;
          break;
        case 1:
          _0x596111 = _0x3a5ddf;
          _0x3e4219 = _0x5e9ba3;
          _0x1a72b6 = _0x25d49b;
          break;
        case 2:
          _0x596111 = _0x25d49b;
          _0x3e4219 = _0x5e9ba3;
          _0x1a72b6 = _0x42d206;
          break;
        case 3:
          _0x596111 = _0x25d49b;
          _0x3e4219 = _0x3a5ddf;
          _0x1a72b6 = _0x5e9ba3;
          break;
        case 4:
          _0x596111 = _0x42d206;
          _0x3e4219 = _0x25d49b;
          _0x1a72b6 = _0x5e9ba3;
          break;
        default:
          _0x596111 = _0x5e9ba3;
          _0x3e4219 = _0x25d49b;
          _0x1a72b6 = _0x3a5ddf;
      }
      return {
        r: Math.round(_0x596111 * 255),
        g: Math.round(_0x3e4219 * 255),
        b: Math.round(_0x1a72b6 * 255)
      };
    }(_0x5a2fc5));
  }
  function _0x4ad6cc(_0x48de85, _0x4adf45, _0x181ab4) {
    _0x48de85.fillStyle = _0x181ab4;
    _0x48de85.fill(_0x4adf45);
  }
  function _0x386d87(_0x51c09e, _0x6ff55b, _0x30cdbe, _0x5a2ac8, _0x14c150) {
    if (_0x30cdbe.polyline.segments.length) {
      _0x51c09e.lineWidth = _0x14c150;
      _0x51c09e.strokeStyle = _0x6ff55b;
      _0x51c09e.stroke(_0x30cdbe.polyline.path);
    }
  }
  function _0x39a74f(_0x1e5e19, _0x11c1a3, _0x5917a8, _0x1e14df, _0x565d5a) {
    (_0x565d5a ? _0x1e14df.frontLayers : _0x1e14df.backLayers).forEach(function (_0x5c7b16) {
      return function (_0x4dcdde, _0x47ef26, _0x588025, _0x142217, _0xb57a8) {
        var _0x222eda = _0x4dcdde.trackWidth;
        if (_0xb57a8.image) {
          var _0x5c1029 = _0xb57a8.image.naturalWidth || _0xb57a8.image.width;
          var _0x2a15b7 = _0xb57a8.image.naturalHeight || _0xb57a8.image.height;
          var _0x4896ff = _0x222eda * _0x142217.scale * _0xb57a8.scale / _0x5c1029;
          _0x47ef26.save();
          _0x47ef26.translate(_0x588025.position.x, _0x588025.position.y - _0x4dcdde.baseHeight * _0xb57a8.level);
          _0x47ef26.rotate(_0x588025.direction + Math.PI / 2);
          _0x47ef26.translate((_0x142217.x + _0xb57a8.x) * _0x222eda, (_0x142217.y + _0xb57a8.y) * _0x222eda);
          var _0x5be5a4 = 0;
          if (_0xb57a8.direction === "target" && _0x588025.target) {
            var _0x485759;
            try {
              _0x485759 = _0x588025.target.clone().sub(_0x588025.position);
            } catch (_0x43bc77) {
              console.log("unit.name", _0x588025.name);
              console.log("unit.fsm.state", _0x588025.fsm.state);
              console.log("unit.base", _0x588025.base);
              throw new Error(_0x43bc77);
            }
            _0x5be5a4 += Math.atan2(_0x485759.y, _0x485759.x) - _0x588025.direction;
          }
          if (_0xb57a8.direction === "billboard") {
            _0x5be5a4 += -_0x588025.direction - Math.PI / 2;
          }
          if (_0xb57a8.rotation) {
            _0x5be5a4 += _0xb57a8.rotation * 0.0174533;
          }
          if (_0x5be5a4) {
            _0x47ef26.rotate(_0x5be5a4);
          }
          _0x47ef26.scale(_0x4896ff, _0x4896ff);
          _0x47ef26.translate(_0x5c1029 * -_0xb57a8.pivot.x, _0x2a15b7 * -_0xb57a8.pivot.y);
          _0x47ef26.drawImage(_0xb57a8.image, 0, 0);
          _0x47ef26.restore();
        }
      }(_0x1e5e19, _0x11c1a3, _0x5917a8, _0x5c7b16.display, _0x5c7b16.layer);
    });
  }
  function _0x17455f(_0x2c8649, _0x15be5f, _0x38050b, _0x92392f, _0x372416, _0x3eb4f7, _0x454028) {
    var _0x32e34e = _0x3ecf93(_0x3eb4f7, 4);
    var _0x1ea458 = _0x32e34e[0];
    var _0x26a121 = _0x32e34e[1];
    var _0x582126 = _0x32e34e[2];
    var _0x5e09e3 = _0x32e34e[3];
    _0x2c8649.beginPath();
    _0x2c8649.moveTo(_0x15be5f + _0x1ea458, _0x38050b);
    _0x2c8649.lineTo(_0x15be5f + _0x92392f - _0x26a121, _0x38050b);
    _0x2c8649.quadraticCurveTo(_0x15be5f + _0x92392f, _0x38050b, _0x15be5f + _0x92392f, _0x38050b + _0x26a121);
    _0x2c8649.lineTo(_0x15be5f + _0x92392f, _0x38050b + _0x372416 - _0x582126);
    _0x2c8649.quadraticCurveTo(_0x15be5f + _0x92392f, _0x38050b + _0x372416, _0x15be5f + _0x92392f - _0x582126, _0x38050b + _0x372416);
    _0x2c8649.lineTo(_0x15be5f + _0x5e09e3, _0x38050b + _0x372416);
    _0x2c8649.quadraticCurveTo(_0x15be5f, _0x38050b + _0x372416, _0x15be5f, _0x38050b + _0x372416 - _0x5e09e3);
    _0x2c8649.lineTo(_0x15be5f, _0x38050b + _0x1ea458);
    _0x2c8649.quadraticCurveTo(_0x15be5f, _0x38050b, _0x15be5f + _0x1ea458, _0x38050b);
    _0x2c8649.closePath();
    _0x2c8649.fill();
    if (_0x454028) {
      _0x2c8649.strokeStyle = "#00000099";
      _0x2c8649.lineWidth = _0x454028;
      _0x2c8649.stroke();
    }
  }
  function _0x552f0d(_0x4680f8) {
    return _0x4680f8;
  }
  function _0x2867() {}
  function _0x671416(_0x4c7e18) {
    var _0x508106;
    var _0x31bd64;
    var _0x42f3ba;
    var _0x117e43;
    var _0x3c346f = _0x4c7e18.game;
    var _0x90d5f5 = _0x4c7e18.ctx;
    var _0x5fd644 = _0x4c7e18.viewScreenWidth;
    var _0x9a4e1d = _0x4c7e18.viewScreenHeight;
    var _0x415aef = _0x3c346f.config;
    var _0x5d1edd = _0x415aef.baseHeight;
    var _0x40cec1 = _0x415aef.arenaColor;
    var _0x1f9e58 = _0x415aef.borderColor;
    var _0x160475 = _0x415aef.backgroundTopColor;
    var _0x4daf73 = _0x415aef.backgroundBottomColor;
    _0x4ad6cc(_0x90d5f5, _0x3c346f.border.polygon.path, _0x40cec1);
    _0x90d5f5.translate(0, _0x5d1edd * 3);
    _0x4ad6cc(_0x90d5f5, _0x3c346f.border.polygon.path, _0x1f9e58);
    _0x90d5f5.translate(0, _0x5d1edd * -3);
    _0x508106 = _0x90d5f5;
    _0x31bd64 = _0x3c346f.space;
    _0x42f3ba = _0x160475;
    _0x117e43 = _0x4daf73;
    if (_0x508106 !== undefined || _0x42f3ba !== undefined || _0x117e43 !== undefined) {
      (_0x26e26f = _0x508106.createLinearGradient(_0x31bd64.width / 2, 0, _0x31bd64.width / 2, _0x31bd64.height)).addColorStop(0, _0x42f3ba);
      _0x26e26f.addColorStop(1, _0x117e43);
    }
    _0x90d5f5.fillStyle = _0x26e26f;
    _0x90d5f5.fillRect(_0x5fd644 / -2, _0x9a4e1d / -2, _0x3c346f.space.width + _0x5fd644, _0x3c346f.space.height + _0x9a4e1d);
  }
  function _0x392cca(_0x4d00c6) {
    var _0x38f5f7 = _0x4d00c6.game;
    var _0x5c4325 = _0x4d00c6.ctx;
    var _0x426dc3 = _0x4d00c6.scale;
    var _0x1a98ea = _0x4d00c6.scaler;
    var _0x2f16d2 = _0x4d00c6.fontSize;
    var _0xff4499 = _0x38f5f7.teams.find(function (_0x12c7f4) {
      return _0x12c7f4.top === 1;
    });
    if (_0xff4499) {
      _0xff4499.units.forEach(function (_0x229abb) {
        _0x52e897 = _0x5c4325;
        _0x53775d = _0x229abb;
        _0x5c20e2 = _0x426dc3;
        _0x4396ee = _0x1a98ea;
        _0x19ad2d = _0x2f16d2;
        _0x446c69 = window.devicePixelRatio;
        _0x73909f = _0x19ad2d * 1.7 / _0x446c69;
        _0x52e897.save();
        _0x52e897.translate(_0x53775d.position.x, _0x53775d.position.y);
        _0x52e897.scale(1 / (_0x5c20e2 * _0x446c69), 1 / (_0x5c20e2 * _0x446c69));
        _0x52e897.fillStyle = "#ffff00";
        _0x52e897.strokeStyle = "#ff8800";
        _0x52e897.lineJoin = "round";
        _0x52e897.lineWidth = 1;
        _0x52e897.translate(0, _0x5c20e2 * -12 * _0x446c69);
        _0x52e897.translate(0, -_0x73909f * _0x446c69);
        _0x52e897.scale(_0x4396ee, _0x4396ee);
        _0x52e897.translate(0, -4);
        _0x52e897.fill(_0x592bdb);
        _0x52e897.stroke(_0x592bdb);
        _0x52e897.restore();
        return;
        var _0x52e897;
        var _0x53775d;
        var _0x5c20e2;
        var _0x4396ee;
        var _0x19ad2d;
        var _0x446c69;
        var _0x73909f;
      });
    }
  }
  function _0x3b4aea(_0x9735f7) {
    var _0x38b6f2 = _0x9735f7.game;
    var _0x1ed93f = _0x9735f7.ctx;
    var _0x2c4600 = _0x9735f7.scaler;
    var _0x20a1e4 = _0x9735f7.calcMult;
    var _0x294e00 = _0x9735f7.viewScreenWidth;
    var _0x538fa5 = _0x9735f7.viewScreenHeight;
    var _0x41a145 = _0x9735f7.padding;
    _0x9735f7.strokeWidth;
    var _0x4bceeb = _0x38b6f2.player;
    var _0x110d97 = _0x294e00 / _0x20a1e4(8, 3);
    var _0x3e5957 = _0x38b6f2.space.width / _0x110d97 * _0x2c4600 * 3;
    _0x1ed93f.save();
    _0x1ed93f.translate(_0x294e00 - _0x41a145 * 2 - _0x110d97, _0x538fa5 - _0x41a145 * 2 - _0x110d97);
    _0x1ed93f.scale(_0x110d97 / _0x38b6f2.space.width, _0x110d97 / _0x38b6f2.space.height);
    _0x4ad6cc(_0x1ed93f, _0x38b6f2.border.polygon.path, "#c2d6cdaa");
    _0x4bceeb.team.bases.forEach(function (_0x4bf141) {
      var _0xa2beb8;
      var _0x5e0219;
      var _0x455011;
      var _0x1dd479;
      var _0x395615 = _0x4bf141.team.skin;
      _0x4ad6cc(_0x1ed93f, _0x4bf141.polygon.path, _0x395615.colors.main);
      _0xa2beb8 = _0x1ed93f;
      _0x5e0219 = _0x4bf141.polygon.path;
      _0x455011 = _0x395615.colors.back;
      _0x1dd479 = _0x3e5957 / 2;
      _0xa2beb8.strokeStyle = _0x455011;
      _0xa2beb8.lineWidth = _0x1dd479;
      _0xa2beb8.stroke(_0x5e0219);
    });
    _0x386d87(_0x1ed93f, _0x4bceeb.team.skin.colors.back, _0x4bceeb.track, _0x4bceeb.position, _0x3e5957 / 2);
    _0x4bceeb.team.units.forEach(function (_0xd7c538) {
      var _0x3c46f8 = _0xd7c538 === _0x4bceeb ? 2 / 3 : 0.5;
      var _0xc08b9b = _0xd7c538.team.skin;
      _0x1ed93f.beginPath();
      _0x1ed93f.arc(_0xd7c538.position.x, _0xd7c538.position.y, _0x3e5957 * _0x3c46f8 * 2, 0, Math.PI * 2);
      _0x1ed93f.fillStyle = _0xc08b9b.colors.main;
      _0x1ed93f.fill();
      _0x1ed93f.strokeStyle = _0xc08b9b.colors.nick;
      _0x1ed93f.lineWidth = _0x3e5957 / 2;
      _0x1ed93f.stroke();
    });
    var _0x5866cb = 0;
    var _0x1b7510 = performance.now() / 10000;
    var _0x433930 = 1 / _0x38b6f2.fullPercent;
    var _0x253d67 = [];
    var _0xd3d99 = _0x3e5957 * 6;
    var _0x24e7bc = _0x38b6f2.space.center;
    var _0x1dc576 = _0x24e7bc.x;
    var _0x2e6cf2 = _0x24e7bc.y;
    var _0x2bc544 = _0x38b6f2.border.radius;
    var _0x203901 = _0x2bc544 + _0xd3d99;
    var _0x25a767 = _0x2bc544 + 0;
    _0x38b6f2.teams.forEach(function (_0x25ce07) {
      var _0x877fe = _0x5866cb + _0x25ce07.percent;
      var _0x2cf150 = _0x5866cb * _0x433930 * Math.PI * 2 + _0x1b7510;
      var _0x1ab074 = _0x877fe * _0x433930 * Math.PI * 2 + _0x1b7510;
      _0x253d67.push(_0x2cf150);
      _0x1ed93f.beginPath();
      _0x1ed93f.arc(_0x1dc576, _0x2e6cf2, _0x203901, _0x2cf150, _0x1ab074);
      _0x1ed93f.arc(_0x1dc576, _0x2e6cf2, _0x25a767, _0x1ab074, _0x2cf150, true);
      _0x1ed93f.fillStyle = _0x25ce07.skin.colors.main;
      _0x1ed93f.fill();
      _0x5866cb = _0x877fe;
    });
    _0x253d67.forEach(function (_0xa83a3e) {
      var _0x328393 = Math.cos(_0xa83a3e);
      var _0x34c727 = Math.sin(_0xa83a3e);
      _0x1ed93f.beginPath();
      _0x1ed93f.moveTo(_0x1dc576 + _0x203901 * _0x328393, _0x2e6cf2 + _0x203901 * _0x34c727);
      _0x1ed93f.lineTo(_0x1dc576 + _0x25a767 * _0x328393, _0x2e6cf2 + _0x25a767 * _0x34c727);
      _0x1ed93f.lineWidth = _0x3e5957;
      _0x1ed93f.strokeStyle = "#00000099";
      _0x1ed93f.stroke();
    });
    _0x1ed93f.lineWidth = _0x3e5957;
    _0x1ed93f.strokeStyle = "#00000099";
    _0x1ed93f.beginPath();
    _0x1ed93f.arc(_0x1dc576, _0x2e6cf2, _0x203901, 0, Math.PI * 2);
    _0x1ed93f.stroke();
    _0x1ed93f.beginPath();
    _0x1ed93f.arc(_0x1dc576, _0x2e6cf2, _0x25a767, 0, Math.PI * 2);
    _0x1ed93f.stroke();
    var _0x217bbc = _0x4bceeb.team.skin.assets.find(function (_0x187e11) {
      return _0x187e11.pool && _0x187e11.pool.name === "flags";
    });
    var _0x44680a = _0x217bbc && _0x217bbc.content.roundedFlag;
    if (_0x44680a && _0x4bceeb.cities) {
      _0x4bceeb.cities.forEach(function (_0xc22ee0) {
        _0x1ed93f.save();
        _0x1ed93f.translate(_0xc22ee0.position.x, _0xc22ee0.position.y);
        _0x1ed93f.scale(2, 2);
        _0x1ed93f.drawImage(_0x44680a, -_0x44680a.width / 2, -_0x44680a.height / 2);
        _0x1ed93f.restore();
      });
    }
    _0x1ed93f.restore();
  }
  function _0x1b33c8(_0x51a3cf) {
    var _0x38ddb4;
    var _0x98439b;
    var _0x580a77;
    var _0x3a0a8a;
    var _0x5dde3d = _0x51a3cf.game;
    var _0x52598e = _0x51a3cf.ctx;
    _0x51a3cf.scaler;
    var _0x57ac28 = _0x51a3cf.padding;
    var _0x3d132b = _0x51a3cf.backHeight;
    var _0x566e60 = _0x51a3cf.barHeight;
    var _0xade969 = _0x51a3cf.halfBarHeight;
    _0x51a3cf.fontSize;
    var _0x4aee18 = _0x51a3cf.uiFont;
    var _0xf5a3c6 = _0x57ac28 + _0x3d132b + _0x566e60 + _0x57ac28 / 2 + _0x566e60 + _0x57ac28 / 2;
    _0x52598e.fillStyle = "#00000088";
    _0x17455f(_0x52598e, 0, _0xf5a3c6, _0x566e60 * 1.5, _0x566e60, [0, _0xade969, _0xade969, 0]);
    _0x98439b = _0x566e60 * 1.4 / 2;
    _0x580a77 = _0xf5a3c6 + _0x566e60 / 2;
    _0x3a0a8a = _0x566e60 / 30;
    (_0x38ddb4 = _0x52598e).save();
    _0x38ddb4.fillStyle = "#ffffffcc";
    _0x38ddb4.translate(_0x98439b, _0x580a77);
    _0x38ddb4.scale(_0x3a0a8a, _0x3a0a8a);
    _0x38ddb4.fill(_0x362803);
    _0x38ddb4.restore();
    _0x52598e.font = _0x4aee18;
    _0x52598e.textAlign = "left";
    _0x52598e.textBaseline = "middle";
    _0x52598e.fillText(`x${_0x5dde3d.player.statistics.kills}`, _0x566e60 * 1.5 + 8, _0xf5a3c6 + _0xade969);
  }
  function _0x3e52ba(_0x3a4c9e) {
    var _0x59ccb5 = _0x3a4c9e.game;
    var _0x22d882 = _0x3a4c9e.ctx;
    var _0x37f482 = _0x3a4c9e.devicePixelRatio;
    var _0xdc5bf9 = _0x3a4c9e.viewWidth;
    var _0x1cd179 = _0x3a4c9e.viewHeight;
    var _0x2beaeb = _0x3a4c9e.origin;
    var _0x2630f2 = _0x3a4c9e.scale;
    var _0x351189 = _0x59ccb5.config.baseHeight;
    _0x22d882.resetTransform();
    _0x22d882.clearRect(0, 0, _0xdc5bf9, _0x1cd179);
    var _0x16b0bf;
    var _0x141389;
    var _0xf3e4a4;
    var _0x5b318e;
    var _0x43cb1c;
    var _0x3e17a5;
    var _0x1336ff;
    var _0x49bc27;
    var _0x14706c;
    var _0x17087a;
    var _0x5d14a9;
    var _0x2d13c8;
    var _0x255640;
    var _0xca12f7;
    var _0x1d115d;
    var _0x47f990;
    var _0x447150;
    var _0x408106;
    var _0x319f3f;
    var _0x1a0c55;
    var _0x562a4d;
    var _0x1c009a;
    var _0x2ec18;
    var _0x5cf560;
    var _0x24bad4;
    var _0xdb1356;
    var _0x2e2bbb;
    var _0x4c103c;
    var _0x1f9ddb;
    var _0x3b8957;
    var _0x5dedd0;
    var _0x27fc8f;
    var _0x1a4dc9;
    var _0x54ec09;
    var _0x2b2712;
    var _0x3982ff;
    var _0x308495 = _0x2beaeb.x * _0x2630f2 - _0xdc5bf9 / 2;
    var _0x279aff = _0x2beaeb.y * _0x2630f2 - _0x1cd179 / 2;
    _0x22d882.translate(-_0x308495, -_0x279aff);
    _0x22d882.scale(_0x2630f2, _0x2630f2);
    _0x22d882.translate(0, -_0x351189);
    _0x1336ff = (_0x3e17a5 = _0x3a4c9e).game;
    _0x49bc27 = _0x3e17a5.ctx;
    _0x14706c = _0x3e17a5.boundsInView;
    _0x17087a = _0x1336ff.config.trackWidth;
    _0x5d14a9 = 0;
    _0x1336ff.bases.forEach(function (_0x78de42) {
      if (_0x14706c(_0x78de42.polygon, _0x17087a)) {
        _0x5d14a9++;
        var _0x498087 = _0x78de42.team.skin;
        _0x4ad6cc(_0x49bc27, _0x78de42.polygon.path, _0x498087.pattern && _0x498087.pattern.pattern || _0x498087.colors.main);
      }
    });
    _0x1336ff.drawedBases = _0x5d14a9;
    _0x141389 = (_0x16b0bf = _0x3a4c9e).game;
    _0xf3e4a4 = _0x16b0bf.ctx;
    _0x5b318e = _0x16b0bf.boundsInView;
    _0x43cb1c = _0x141389.config.trackWidth;
    _0xf3e4a4.save();
    _0xf3e4a4.lineCap = "round";
    _0xf3e4a4.globalCompositeOperation = "destination-out";
    _0x141389.units.forEach(function (_0x2391d8) {
      if (_0x2391d8.track.polyline.start && _0x5b318e(_0x2391d8.track.polyline, _0x43cb1c)) {
        var _0x5e9096 = _0x2391d8.team.skin;
        _0x386d87(_0xf3e4a4, _0x5e9096.colors.main, _0x2391d8.track, _0x2391d8.position, _0x43cb1c);
        _0xf3e4a4.save();
        _0xf3e4a4.globalCompositeOperation = "destination-over";
        _0xf3e4a4.clip(_0x2391d8.base.polygon.path);
        _0x386d87(_0xf3e4a4, _0x5e9096.pattern && _0x5e9096.pattern.pattern || _0x5e9096.colors.main, _0x2391d8.track, _0x2391d8.position, _0x43cb1c + 2);
        _0xf3e4a4.restore();
      }
    });
    _0xf3e4a4.restore();
    _0x22d882.translate(0, _0x351189);
    _0x22d882.globalCompositeOperation = "destination-over";
    _0x255640 = (_0x2d13c8 = _0x3a4c9e).game;
    _0xca12f7 = _0x2d13c8.ctx;
    _0x1d115d = _0x2d13c8.pointInView;
    _0x47f990 = _0x255640.config.trackWidth;
    _0x255640.units.forEach(function (_0x24964d) {
      if (_0x1d115d(_0x24964d.position, _0x47f990 * 4)) {
        var _0x49e5da = _0x24964d.team.skin;
        _0x39a74f(_0x255640.config, _0xca12f7, _0x24964d, _0x49e5da.container, false);
      }
    });
    _0x408106 = (_0x447150 = _0x3a4c9e).game;
    _0x319f3f = _0x447150.ctx;
    _0x1a0c55 = _0x447150.boundsInView;
    _0x562a4d = _0x408106.config.trackWidth;
    _0x319f3f.save();
    _0x319f3f.lineCap = "round";
    _0x319f3f.globalAlpha = 0.6;
    _0x408106.units.forEach(function (_0x5622ac) {
      if (_0x5622ac.in !== _0x5622ac.base && _0x1a0c55(_0x5622ac.track.polyline, _0x562a4d)) {
        var _0x394851 = _0x5622ac.team.skin;
        _0x386d87(_0x319f3f, _0x394851.colors.main, _0x5622ac.track, _0x5622ac.position, _0x562a4d);
      }
    });
    _0x319f3f.restore();
    _0x2ec18 = (_0x1c009a = _0x3a4c9e).game;
    _0x5cf560 = _0x1c009a.ctx;
    _0x24bad4 = _0x1c009a.boundsInView;
    _0xdb1356 = _0x2ec18.config.trackWidth;
    _0x2ec18.bases.forEach(function (_0x36cf5b) {
      if (_0x24bad4(_0x36cf5b.polygon, _0xdb1356)) {
        var _0x27f6d9 = _0x36cf5b.team.skin;
        _0x4ad6cc(_0x5cf560, _0x36cf5b.polygon.path, `${_0x27f6d9.colors.back}`);
      }
    });
    _0x671416(_0x3a4c9e);
    _0x22d882.globalCompositeOperation = "source-over";
    _0x4c103c = (_0x2e2bbb = _0x3a4c9e).game;
    _0x1f9ddb = _0x2e2bbb.ctx;
    _0x3b8957 = _0x2e2bbb.pointInView;
    _0x5dedd0 = _0x4c103c.config.trackWidth;
    _0x4c103c.units.forEach(function (_0x5f144e) {
      if (_0x3b8957(_0x5f144e.position, _0x5dedd0 * 4)) {
        var _0x4b468f = _0x5f144e.team.skin;
        _0x39a74f(_0x4c103c.config, _0x1f9ddb, _0x5f144e, _0x4b468f.container, true);
      }
    });
    _0x1a4dc9 = (_0x27fc8f = _0x3a4c9e).game;
    _0x54ec09 = _0x27fc8f.pointInView;
    _0x2b2712 = _0x1a4dc9.config.trackWidth;
    _0x1a4dc9.units.forEach(function (_0xdf4733) {
      if (_0x54ec09(_0xdf4733.position, _0x2b2712 * 20)) {
        (function (_0x4ee30d, _0x2ed10c) {
          var _0x18a9b7 = _0x4ee30d.ctx;
          var _0x201078 = _0x4ee30d.devicePixelRatio;
          var _0x3a7776 = _0x4ee30d.scale;
          _0x4ee30d.scaler;
          var _0x4b3994 = _0x4ee30d.font;
          var _0x5917cb = _0x4ee30d.fontSize * 1.5;
          var _0x116da7 = _0x5917cb / 6;
          _0x18a9b7.save();
          _0x18a9b7.translate(_0x2ed10c.position.x, _0x2ed10c.position.y);
          _0x18a9b7.scale(1 / (_0x3a7776 * _0x201078), 1 / (_0x3a7776 * _0x201078));
          _0x18a9b7.font = `${_0x5917cb}px ${_0x4b3994}`;
          _0x18a9b7.textAlign = "center";
          _0x18a9b7.textBaseline = "bottom";
          var _0x3829fb = _0x2ed10c.name;
          var _0x3a9cc9 = _0x3a7776 * -12 * _0x201078;
          var _0x6576dd = "#363331";
          _0x18a9b7.lineWidth = _0x116da7;
          _0x18a9b7.strokeStyle = _0x6576dd;
          _0x18a9b7.shadowColor = _0x6576dd;
          _0x18a9b7.shadowBlur = _0x116da7 / 4;
          _0x18a9b7.strokeText(_0x3829fb, 0, _0x3a9cc9);
          var _0x47b0cc = "#dddddd";
          var _0x2a640c = _0x2ed10c.team.skin.assets.find(function (_0x79e412) {
            return _0x79e412.pool.name === "shields";
          });
          if (_0x2a640c) {
            _0x47b0cc = _0x2a640c.content.color;
          }
          _0x18a9b7.fillStyle = _0x47b0cc;
          _0x18a9b7.fillText(_0x3829fb, 0, _0x3a9cc9);
          _0x18a9b7.restore();
        })(_0x27fc8f, _0xdf4733);
      }
    });
    (_0x3982ff = _0x3a4c9e).game.particles.forEach(function (_0x4a8121) {
      return _0x4a8121.time > 0 && _0x4a8121.draw(_0x3982ff, true);
    });
    (function (_0x49c237) {
      var _0x35b3ee = _0x49c237.game;
      var _0x486b42 = _0x49c237.ctx;
      var _0x183b3f = _0x49c237.scale;
      _0x49c237.scaler;
      _0x35b3ee.config.font;
      _0x486b42.scale(1 / _0x183b3f, 1 / _0x183b3f);
      _0x35b3ee.labels.forEach(function (_0x611454) {
        return !_0x611454.ui && _0x611454.draw(_0x49c237);
      });
      _0x486b42.scale(_0x183b3f, _0x183b3f);
    })(_0x3a4c9e);
    _0x392cca(_0x3a4c9e);
    _0x22d882.resetTransform();
    _0x22d882.scale(1 / _0x37f482, 1 / _0x37f482);
    if (_0x59ccb5.player) {
      (function (_0x309d87) {
        var _0x119be6 = _0x309d87.game;
        var _0x40916e = _0x309d87.ctx;
        var _0xfe1420 = _0x309d87.padding;
        var _0x4ba468 = _0x309d87.backHeight;
        var _0x5f040d = _0x309d87.barHeight;
        var _0x499ac6 = _0x309d87.halfBarHeight;
        var _0x4c4de5 = _0x309d87.barWidth;
        var _0x4b8723 = _0x309d87.strokeWidth;
        var _0x329a98 = _0x309d87.uiFont;
        var _0x504a84 = _0x119be6.player;
        var _0x35bbc7 = _0x504a84.team.skin;
        _0x40916e.fillStyle = "#00000022";
        _0x17455f(_0x40916e, 0, _0xfe1420, _0x4c4de5, _0x5f040d + _0x4ba468, [0, (_0x5f040d + _0x4ba468) / 2, (_0x5f040d + _0x4ba468) / 2, 0]);
        var _0x3e74ab = _0x4c4de5 * (0.25 + (_0x119be6.best ? Math.min(1, _0x119be6.scheme.scores(_0x504a84) / _0x119be6.best) : 1) * 0.75);
        _0x40916e.fillStyle = _0x35bbc7.colors.back;
        _0x17455f(_0x40916e, 0, _0xfe1420 + _0x4ba468, _0x3e74ab, _0x5f040d, [0, _0x499ac6, _0x499ac6, 0], _0x4b8723);
        _0x40916e.fillStyle = _0x35bbc7.colors.main;
        _0x17455f(_0x40916e, 0, _0xfe1420, _0x3e74ab, _0x5f040d, [0, _0x499ac6, _0x499ac6, 0], _0x4b8723);
        _0x40916e.fillStyle = _0x35bbc7.colors.plate;
        _0x40916e.font = _0x329a98;
        _0x40916e.textAlign = "left";
        _0x40916e.textBaseline = "middle";
        _0x40916e.fillText(_0x119be6.scheme.print(_0x504a84), _0x499ac6, _0xfe1420 + _0x499ac6 * 1.1);
      })(_0x3a4c9e);
      (function (_0x208606) {
        var _0x30b38e = _0x208606.game;
        var _0xa8087f = _0x208606.ctx;
        var _0x9fbc3e = _0x208606.padding;
        var _0x5b52eb = _0x208606.backHeight;
        var _0x1b75c6 = _0x208606.barHeight;
        var _0x43ca8b = _0x208606.uiFont;
        _0xa8087f.fillStyle = "#00000066";
        _0xa8087f.font = _0x43ca8b;
        _0xa8087f.textAlign = "left";
        _0xa8087f.textBaseline = "middle";
        var _0x461098 = _0x9fbc3e + _0x5b52eb + _0x1b75c6 + _0x9fbc3e / 2 + _0x1b75c6 / 2;
        _0xa8087f.fillText(`${_0x30b38e.language.bestTxt} ${_0x30b38e.scheme.print(null, _0x30b38e.best)}`, _0x9fbc3e / 2, _0x461098);
      })(_0x3a4c9e);
      _0x1b33c8(_0x3a4c9e);
      _0x3b4aea(_0x3a4c9e);
      (function (_0x26f1b2) {
        var _0x3b91b3 = _0x26f1b2.game;
        var _0x5e6a5e = _0x26f1b2.ctx;
        _0x26f1b2.scaler;
        var _0x5570ad = _0x26f1b2.padding;
        var _0x321a5c = _0x26f1b2.backHeight;
        var _0x916ff4 = _0x26f1b2.barHeight;
        _0x26f1b2.halfBarHeight;
        var _0x1a2713 = _0x26f1b2.fontSize;
        var _0x306e25 = _0x26f1b2.uiFont;
        _0x26f1b2.viewWidth;
        _0x26f1b2.viewHeight;
        var _0x5579e9 = _0x26f1b2.viewScreenWidth;
        _0x26f1b2.viewScreenHeight;
        if (_0x3b91b3.notifications.length) {
          var _0x49546e = _0x3b91b3.notifications[0];
          if (_0x49546e.ready) {
            _0x5e6a5e.save();
            _0x5e6a5e.font = _0x306e25;
            var _0x2692f2 = _0x1a2713 * 2 + _0x5570ad;
            var _0x5dc805 = _0x49546e.position() * (_0x2692f2 + _0x5570ad) - _0x2692f2;
            var _0x10fb79 = _0x1a2713 * 2;
            var _0x1ec956 = Math.max(_0x5e6a5e.measureText(_0x49546e.title).width, _0x5e6a5e.measureText(_0x49546e.description).width) + _0x5570ad * 5 + _0x10fb79;
            var _0x1ca813 = _0x5570ad / 2;
            _0x5e6a5e.fillStyle = "#00000088";
            _0x17455f(_0x5e6a5e, (_0x5579e9 - _0x1ec956) / 2, _0x5dc805, _0x1ec956, _0x2692f2, [(_0x916ff4 + _0x321a5c) / 2, (_0x916ff4 + _0x321a5c) / 2, (_0x916ff4 + _0x321a5c) / 2, (_0x916ff4 + _0x321a5c) / 2]);
            _0x5e6a5e.fillStyle = "#ffffff";
            _0x5e6a5e.shadowColor = "#ffffff";
            _0x5e6a5e.shadowBlur = 1;
            _0x5e6a5e.textAlign = "center";
            _0x5e6a5e.textBaseline = "top";
            _0x5e6a5e.fillText(_0x49546e.title, (_0x5579e9 - _0x1ec956) / 2 + _0x1ec956 / 2 + _0x10fb79 / 2, _0x5dc805 + _0x1ca813);
            _0x5e6a5e.fillStyle = "#ffffff88";
            _0x5e6a5e.shadowColor = "#ffffff88";
            _0x5e6a5e.shadowBlur = 1;
            _0x5e6a5e.font = _0x306e25;
            _0x5e6a5e.fillText(_0x49546e.description, (_0x5579e9 - _0x1ec956) / 2 + _0x1ec956 / 2 + _0x10fb79 / 2, _0x5dc805 + _0x1ca813 + _0x1a2713);
            _0x5e6a5e.shadowColor = "#ffffff";
            _0x5e6a5e.shadowBlur = 10;
            if (_0x49546e.image) {
              _0x5e6a5e.drawImage(_0x49546e.image, (_0x5579e9 - _0x1ec956) / 2 + _0x1ca813, _0x5dc805 + _0x1ca813, _0x10fb79, _0x10fb79);
            }
            _0x5e6a5e.restore();
          }
        }
      })(_0x3a4c9e);
    }
  }
  function _0x52571c(_0x3acc45) {
    return _0x18aeed.apply(null, _0x3acc45[2].map(function (_0x4588f6) {
      return _0x3acc45[1].reduce(function (_0x42a9fd, _0x5654e5, _0x3179ea) {
        if (_0x3179ea <= _0x4588f6) {
          return _0x42a9fd + _0x5654e5;
        } else {
          return _0x42a9fd;
        }
      }, _0x3acc45[0]);
    }));
  }
  function _0x55271a(_0x3412b7) {
    return _0x18aeed.apply(null, _0x3412b7.map(function (_0x393590) {
      return ye.reduce(function (_0x304daa, _0x243a5a, _0x4d191d) {
        if (_0x4d191d <= _0x393590) {
          return _0x304daa + _0x243a5a;
        } else {
          return _0x304daa;
        }
      }, 47);
    }));
  }
  var _0x26e26f;
  var _0x41014a;
  var _0x36da08;
  var _0x4a29e9;
  var _0x4de2c9;
  var _0x442712;
  var _0x393f58;
  var _0x211a37;
  var _0x19350e = _0x2cb6e4(function (_0x4554a0, _0x4e25b2) {
    var _0xd7b810;
    _0xd7b810 = function () {
      function _0x29f0e4() {
        for (var _0x481a51 = 0, _0x47b94c = {}; _0x481a51 < arguments.length; _0x481a51++) {
          var _0x196f14 = arguments[_0x481a51];
          for (var _0x7f1470 in _0x196f14) {
            _0x47b94c[_0x7f1470] = _0x196f14[_0x7f1470];
          }
        }
        return _0x47b94c;
      }
      function _0x42cc4e(_0x62b5f6) {
        return _0x62b5f6.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      return function _0x379c33(_0x56236e) {
        function _0x4eaa9d() {}
        function _0x12ed46(_0x223b71, _0x1963d5, _0x462d71) {
          if (typeof document != "undefined") {
            if (typeof (_0x462d71 = _0x29f0e4({
              path: "/"
            }, _0x4eaa9d.defaults, _0x462d71)).expires == "number") {
              _0x462d71.expires = new Date(+new Date() + _0x462d71.expires * 86400000);
            }
            _0x462d71.expires = _0x462d71.expires ? _0x462d71.expires.toUTCString() : "";
            try {
              var _0x4c9bbb = JSON.stringify(_0x1963d5);
              if (/^[\{\[]/.test(_0x4c9bbb)) {
                _0x1963d5 = _0x4c9bbb;
              }
            } catch (_0x4110ca) {}
            _0x1963d5 = _0x56236e.write ? _0x56236e.write(_0x1963d5, _0x223b71) : encodeURIComponent(String(_0x1963d5)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
            _0x223b71 = encodeURIComponent(String(_0x223b71)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
            var _0x3be886 = "";
            for (var _0x3fb74d in _0x462d71) {
              if (_0x462d71[_0x3fb74d]) {
                _0x3be886 += "; " + _0x3fb74d;
                if (_0x462d71[_0x3fb74d] !== true) {
                  _0x3be886 += "=" + _0x462d71[_0x3fb74d].split(";")[0];
                }
              }
            }
            return document.cookie = _0x223b71 + "=" + _0x1963d5 + _0x3be886;
          }
        }
        function _0x48d81d(_0x36f65e, _0x1c070a) {
          if (typeof document != "undefined") {
            var _0x3b7a87 = {};
            for (var _0x4c243a = document.cookie ? document.cookie.split("; ") : [], _0xc2a317 = 0; _0xc2a317 < _0x4c243a.length; _0xc2a317++) {
              var _0x218704 = _0x4c243a[_0xc2a317].split("=");
              var _0x3066bf = _0x218704.slice(1).join("=");
              if (!_0x1c070a && _0x3066bf.charAt(0) === "\"") {
                _0x3066bf = _0x3066bf.slice(1, -1);
              }
              try {
                var _0x5e8a52 = _0x42cc4e(_0x218704[0]);
                _0x3066bf = (_0x56236e.read || _0x56236e)(_0x3066bf, _0x5e8a52) || _0x42cc4e(_0x3066bf);
                if (_0x1c070a) {
                  try {
                    _0x3066bf = JSON.parse(_0x3066bf);
                  } catch (_0x47ecf0) {}
                }
                _0x3b7a87[_0x5e8a52] = _0x3066bf;
                if (_0x36f65e === _0x5e8a52) {
                  break;
                }
              } catch (_0x2b1715) {}
            }
            if (_0x36f65e) {
              return _0x3b7a87[_0x36f65e];
            } else {
              return _0x3b7a87;
            }
          }
        }
        _0x4eaa9d.set = _0x12ed46;
        _0x4eaa9d.get = function (_0x577ee0) {
          return _0x48d81d(_0x577ee0, false);
        };
        _0x4eaa9d.getJSON = function (_0x467c48) {
          return _0x48d81d(_0x467c48, true);
        };
        _0x4eaa9d.remove = function (_0x4e9881, _0x49f6b4) {
          _0x12ed46(_0x4e9881, "", _0x29f0e4(_0x49f6b4, {
            expires: -1
          }));
        };
        _0x4eaa9d.defaults = {};
        _0x4eaa9d.withConverter = _0x379c33;
        return _0x4eaa9d;
      }(function () {});
    };
    _0x4554a0.exports = _0xd7b810();
  });
  var _0x13162a = Math.pow(2, -26);
  var _0x1021b0 = Math.PI * 2;
  var _0x8fbc39 = 0;
  var _0x32daf8 = Array.from({
    length: 30000
  });
  var _0x5d3e27 = 0;
  var _0x5eea4a = Array.from({
    length: 10000
  });
  var _0x37f5c0 = 0;
  var _0x1aa65a = function () {
    function _0x27ccac(_0x10fff9, _0x153ed4) {
      _0x43fd4a(this, _0x27ccac);
      this.id = _0x1fef0e();
      this.cell = null;
      this.segments = [];
      this.set(_0x10fff9, _0x153ed4);
    }
    _0x5796f0(_0x27ccac, null, [{
      key: "alloc",
      value: function (_0x416ec2, _0x2c3be0) {
        if (_0x5d3e27) {
          var _0xb64a0 = _0x32daf8[--_0x5d3e27];
          _0x32daf8[_0x5d3e27] = null;
          return _0xb64a0.set(_0x416ec2, _0x2c3be0);
        }
        return new _0x27ccac(_0x416ec2, _0x2c3be0);
      }
    }, {
      key: "clone",
      value: function (_0x4ac717) {
        return _0x27ccac.alloc(_0x4ac717.x, _0x4ac717.y);
      }
    }, {
      key: "length",
      value: function () {
        return _0x5d3e27 + _0x37f5c0;
      }
    }, {
      key: "flush",
      value: function () {
        for (var _0x3fe888 = _0x37f5c0; _0x3fe888 > 0; _0x3fe888--) {
          var _0x164cb7 = _0x5eea4a[_0x3fe888 - 1];
          _0x5eea4a[_0x3fe888 - 1] = null;
          if (_0x5d3e27 < 30000) {
            _0x164cb7.id = _0x1fef0e();
            _0x32daf8[_0x5d3e27++] = _0x164cb7;
          }
        }
        _0x37f5c0 = 0;
      }
    }, {
      key: "release",
      value: function (_0x3f17b7) {
        if (_0x5d3e27 < 30000) {
          _0x3f17b7.id = _0x1fef0e();
          _0x32daf8[_0x5d3e27++] = _0x3f17b7;
        }
      }
    }]);
    _0x5796f0(_0x27ccac, [{
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
      value: function (_0x32e206, _0x15816f) {
        this.x = _0x32e206 || 0;
        this.y = _0x15816f || (_0x15816f === 0 ? 0 : this.x);
        return this;
      }
    }, {
      key: "test",
      value: function () {
        return _0x27ccac.space.cell(this).findPoint(this);
      }
    }, {
      key: "commit",
      value: function (_0x4a710f) {
        if (this.segments.indexOf(_0x4a710f) === -1) {
          this.segments.push(_0x4a710f);
        }
        if (!this.cell) {
          _0x27ccac.space.cell(this).commit(this);
        }
      }
    }, {
      key: "remove",
      value: function (_0x563b6e) {
        var _0x44824d = this.segments.indexOf(_0x563b6e);
        this.segments.splice(_0x44824d, 1);
        if (this.cell && !this.segments.length) {
          this.cell.remove(this);
        }
      }
    }, {
      key: "release",
      value: function () {
        _0x27ccac.release(this);
      }
    }, {
      key: "add",
      value: function (_0x5e2591) {
        this.x += _0x5e2591.x;
        this.y += _0x5e2591.y;
        return this;
      }
    }, {
      key: "sub",
      value: function (_0x5a7222) {
        this.x -= _0x5a7222.x;
        this.y -= _0x5a7222.y;
        return this;
      }
    }, {
      key: "mul",
      value: function (_0x3d8e79) {
        this.x *= _0x3d8e79.x;
        this.y *= _0x3d8e79.y;
        return this;
      }
    }, {
      key: "mulScalar",
      value: function (_0x4f61d6) {
        this.x *= _0x4f61d6;
        this.y *= _0x4f61d6;
        return this;
      }
    }, {
      key: "magnitude",
      value: function () {
        var _0x2567cc = this.x;
        var _0x4a6ebc = this.y;
        return Math.sqrt(_0x2567cc * _0x2567cc + _0x4a6ebc * _0x4a6ebc);
      }
    }, {
      key: "normalize",
      value: function () {
        var _0x2d9379 = this.magnitude();
        if (_0x2d9379) {
          this.mulScalar(1 / _0x2d9379);
        }
        return this;
      }
    }, {
      key: "copy",
      value: function (_0x4818eb) {
        this.x = _0x4818eb.x;
        this.y = _0x4818eb.y;
        return this;
      }
    }, {
      key: "distance",
      value: function (_0x4279f1) {
        return Math.sqrt(this.distance2(_0x4279f1));
      }
    }, {
      key: "distance2",
      value: function (_0x50634d) {
        var _0x27e305 = this.x - _0x50634d.x;
        var _0x5b6f7a = this.y - _0x50634d.y;
        return _0x27e305 * _0x27e305 + _0x5b6f7a * _0x5b6f7a;
      }
    }, {
      key: "cross",
      value: function (_0x27c4bd) {
        return this.x * _0x27c4bd.y - this.y * _0x27c4bd.x;
      }
    }, {
      key: "dot",
      value: function (_0x2a37b1) {
        return this.x * _0x2a37b1.x + this.y * _0x2a37b1.y;
      }
    }, {
      key: "rotate",
      value: function (_0x50b465) {
        var _0x28842c = this.x;
        var _0x1ca155 = this.y;
        var _0x3f67c = Math.cos(_0x50b465);
        var _0xcc4454 = Math.sin(_0x50b465);
        this.x = _0x28842c * _0x3f67c - _0x1ca155 * _0xcc4454;
        this.y = _0x28842c * _0xcc4454 + _0x1ca155 * _0x3f67c;
        return this;
      }
    }, {
      key: "angle",
      value: function (_0x4e6fd8) {
        return Math.atan2(this.cross(_0x4e6fd8), this.dot(_0x4e6fd8));
      }
    }, {
      key: "invert",
      value: function () {
        return this.mulScalar(-1);
      }
    }, {
      key: "equal",
      value: function (_0x57cc74) {
        return _0xdf1949(this.x, _0x57cc74.x) && _0xdf1949(this.y, _0x57cc74.y);
      }
    }, {
      key: "clone",
      value: function () {
        return new _0x27ccac(this.x, this.y);
      }
    }]);
    return _0x27ccac;
  }();
  var _0x445bd1 = {};
  var _0x53f573 = function () {
    function _0x1c9c9b(_0x177efd, _0x18d5e) {
      _0x43fd4a(this, _0x1c9c9b);
      this.points = [];
      this.x = _0x177efd;
      this.y = _0x18d5e;
    }
    _0x5796f0(_0x1c9c9b, [{
      key: "findPoint",
      value: function (_0x2a2f6f) {
        return this.points.find(function (_0x451fc8) {
          return _0x451fc8.equal(_0x2a2f6f);
        });
      }
    }, {
      key: "commit",
      value: function (_0x125088) {
        this.points.push(_0x125088);
        _0x125088.cell = this;
      }
    }, {
      key: "remove",
      value: function (_0x25d9bb) {
        var _0x500e20 = this.points;
        var _0x23c14e = _0x500e20.indexOf(_0x25d9bb);
        if (_0x23c14e !== -1) {
          _0x500e20.splice(_0x23c14e, 1);
          _0x25d9bb.cell = null;
        }
      }
    }]);
    return _0x1c9c9b;
  }();
  var _0x5cc12f = function () {
    function _0x56cc52(_0x1b8c0e, _0x488405, _0x34b0a9) {
      _0x43fd4a(this, _0x56cc52);
      this.width = _0x1b8c0e;
      this.height = _0x488405;
      this.center = new _0x1aa65a(_0x1b8c0e / 2, _0x488405 / 2);
      this.size = _0x34b0a9;
      this.w = Math.ceil(_0x1b8c0e / _0x34b0a9);
      this.h = Math.ceil(_0x488405 / _0x34b0a9);
      this.cells = [];
      for (var _0x2b88bb = 0; _0x2b88bb < this.h; _0x2b88bb++) {
        for (var _0x507e71 = 0; _0x507e71 < this.w; _0x507e71++) {
          this.cells.push(new _0x53f573(_0x507e71, _0x2b88bb));
        }
      }
    }
    _0x5796f0(_0x56cc52, null, [{
      key: "flush",
      value: function () {
        var _0x338625 = 0;
        var _0xc6d390 = 0;
        for (var _0x1c8594 in _0x445bd1) {
          if (_0x445bd1.hasOwnProperty(_0x1c8594)) {
            _0xc6d390++;
            if (!_0x445bd1[_0x1c8594].segments.length) {
              _0x338625++;
            }
          }
        }
        _0x445bd1 = {};
        if (_0xc6d390) {
          console.log(`candidates ${_0x338625}/${_0xc6d390}`);
        }
      }
    }]);
    _0x5796f0(_0x56cc52, [{
      key: "count",
      value: function () {
        var _0x4ee7ed = 0;
        this.cells.forEach(function (_0x1f689f) {
          _0x4ee7ed += _0x1f689f.points.length;
        });
        return _0x4ee7ed;
      }
    }, {
      key: "cell",
      value: function (_0x2e61a8) {
        return this.getCell(Math.floor(_0x2e61a8.x / this.size), Math.floor(_0x2e61a8.y / this.size));
      }
    }, {
      key: "getCell",
      value: function (_0x510992, _0x1d55aa) {
        return this.cells[_0x510992 + _0x1d55aa * this.w];
      }
    }, {
      key: "checkPoint",
      value: function (_0x50c345) {
        return this.cell(_0x50c345).points.find(function (_0x4b7d6c) {
          return _0x4b7d6c.equal(_0x50c345);
        }) || _0x50c345;
      }
    }, {
      key: "segmentsCount",
      value: function () {
        var _0x33625d = {};
        for (var _0x2feefd = 0; _0x2feefd < this.h; _0x2feefd++) {
          for (var _0x48ec1f = 0; _0x48ec1f < this.w; _0x48ec1f++) {
            this.getCell(_0x48ec1f, _0x2feefd).points.forEach(function (_0x154001) {
              _0x154001.segments.forEach(function (_0x3a632e) {
                return _0x33625d[_0x3a632e.id] = _0x3a632e;
              });
            });
          }
        }
        return _0x33625d;
      }
    }, {
      key: "intersections",
      value: function (_0x23d815) {
        var _0x1c9116 = this.cell(_0x23d815.start);
        var _0x27b2ca = this.cell(_0x23d815.end);
        var _0x4a7a3b = Math.max(Math.min(_0x1c9116.x, _0x27b2ca.x) - 1, 0);
        var _0x51b00f = Math.min(Math.max(_0x1c9116.x, _0x27b2ca.x) + 1, this.w - 1);
        var _0x1f5efd = Math.max(Math.min(_0x1c9116.y, _0x27b2ca.y) - 1, 0);
        for (var _0x23c8e6 = Math.min(Math.max(_0x1c9116.y, _0x27b2ca.y) + 1, this.h - 1), _0x2e4c18 = _0x1fef0e(), _0x4699dd = [], _0x25c8ff = _0x1f5efd; _0x25c8ff <= _0x23c8e6; _0x25c8ff++) {
          for (var _0x4cf6b2 = _0x4a7a3b; _0x4cf6b2 <= _0x51b00f; _0x4cf6b2++) {
            this.getCell(_0x4cf6b2, _0x25c8ff).points.forEach(function (_0x1c1c52) {
              _0x1c1c52.segments.forEach(function (_0x5adeb0) {
                if (_0x5adeb0.mark !== _0x2e4c18) {
                  var _0x2d46b9 = _0x5adeb0.intersect(_0x23d815);
                  if (_0x2d46b9) {
                    _0x4699dd.push(_0x2d46b9);
                  }
                  _0x5adeb0.mark = _0x2e4c18;
                }
              });
            });
          }
        }
        return _0x4699dd;
      }
    }]);
    return _0x56cc52;
  }();
  var _0x1b9fb2 = function () {
    function _0x2b9173(_0x7031ae, _0x2f2ba8) {
      _0x43fd4a(this, _0x2b9173);
      this.id = _0x1fef0e();
      _0x7031ae.equal(_0x2f2ba8);
      this.mark = 0;
      this.shape = null;
      this.start = _0x7031ae;
      this.end = _0x2f2ba8;
      this.calc();
    }
    _0x5796f0(_0x2b9173, null, [{
      key: "nullableNew",
      value: function (_0x1be8ba, _0x5ebbb3) {
        if (_0x1be8ba.equal(_0x5ebbb3)) {
          return null;
        } else {
          return new _0x2b9173(_0x1be8ba, _0x5ebbb3);
        }
      }
    }]);
    _0x5796f0(_0x2b9173, [{
      key: "calc",
      value: function () {
        var _0x44e9d2 = this.start;
        var _0xbbbbd9 = this.end;
        var _0x514bce = _0x44e9d2.y - _0xbbbbd9.y;
        var _0x15459c = _0xbbbbd9.x - _0x44e9d2.x;
        var _0x56e8f4 = Math.sqrt(_0x514bce * _0x514bce + _0x15459c * _0x15459c);
        _0x514bce /= _0x56e8f4;
        _0x15459c /= _0x56e8f4;
        this.a = _0x514bce;
        this.b = _0x15459c;
        this.c = -(_0x514bce * _0x44e9d2.x + _0x15459c * _0x44e9d2.y);
        this.vector = _0x1aa65a.clone(_0xbbbbd9).sub(_0x44e9d2);
      }
    }, {
      key: "clone",
      value: function () {
        return new _0x2b9173(this.start, this.end);
      }
    }, {
      key: "reverse",
      value: function () {
        var _0x297341 = this.start;
        this.start = this.end;
        this.end = _0x297341;
        this.calc();
        return this;
      }
    }, {
      key: "commit",
      value: function (_0x58f0d9) {
        this.shape = _0x58f0d9;
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
      value: function (_0x482d10) {
        var _0xc60fdf = _0x482d10.a;
        var _0x1d021f = _0x482d10.b;
        var _0x627082 = this.a;
        var _0x41f467 = this.b;
        return _0x470d99(_0xc60fdf, _0x1d021f, _0x627082, _0x41f467);
      }
    }, {
      key: "intersect",
      value: function (_0x49649e, _0x56d7b0) {
        var _0xfac85d = _0x49649e.a;
        var _0x7c01e4 = _0x49649e.b;
        var _0x2ec66a = _0x49649e.c;
        var _0x1b7790 = _0x49649e.start;
        var _0x7f3daf = _0x49649e.end;
        var _0x499d4c = this.a;
        var _0x2d1c2f = this.b;
        var _0x38d7e0 = this.c;
        var _0x9a9658 = this.start;
        var _0x128888 = this.end;
        var _0x520535 = _0x470d99(_0xfac85d, _0x7c01e4, _0x499d4c, _0x2d1c2f);
        if (_0x1f3eaf(_0x520535)) {
          return null;
        }
        var _0x5ee4d7 = -_0x470d99(_0x2ec66a, _0x7c01e4, _0x38d7e0, _0x2d1c2f) / _0x520535;
        var _0x597400 = -_0x470d99(_0xfac85d, _0x2ec66a, _0x499d4c, _0x38d7e0) / _0x520535;
        if (_0x56d7b0) {
          var _0xd5a8c2 = _0x1b7790.x;
          var _0x235477 = _0x1b7790.y;
          if ((_0x5ee4d7 - _0xd5a8c2) * (_0x7f3daf.x - _0xd5a8c2) + (_0x597400 - _0x235477) * (_0x7f3daf.y - _0x235477) < 0) {
            return null;
          }
          var _0x38b727 = _0x46d517(_0x9a9658.x, _0x128888.x, _0x5ee4d7) && _0x46d517(_0x9a9658.y, _0x128888.y, _0x597400) && new _0x1aa65a(_0x5ee4d7, _0x597400);
          if (_0x38b727) {
            return _0x9a9658.equal(_0x38b727) && _0x9a9658 || _0x128888.equal(_0x38b727) && _0x128888 || _0x1b7790.equal(_0x38b727) && _0x1b7790 || _0x38b727;
          } else {
            return null;
          }
        }
        var _0x483920 = _0x46d517(_0x1b7790.x, _0x7f3daf.x, _0x5ee4d7) && _0x46d517(_0x1b7790.y, _0x7f3daf.y, _0x597400) && _0x46d517(_0x9a9658.x, _0x128888.x, _0x5ee4d7) && _0x46d517(_0x9a9658.y, _0x128888.y, _0x597400) && new _0x1aa65a(_0x5ee4d7, _0x597400);
        if (_0x483920) {
          return {
            point: _0x9a9658.equal(_0x483920) && _0x9a9658 || _0x128888.equal(_0x483920) && _0x128888 || _0x1b7790.equal(_0x483920) && _0x1b7790 || _0x7f3daf.equal(_0x483920) && _0x7f3daf || _0x483920,
            segment: this,
            distance: _0x483920.distance2(_0x1b7790),
            get overlay() {
              throw Error("overlay");
            },
            zn: Math.sign(_0x520535),
            rawZN: _0x520535
          };
        } else {
          return null;
        }
      }
    }, {
      key: "has",
      value: function (_0x3851e9) {
        return this.start === _0x3851e9 || this.end === _0x3851e9;
      }
    }, {
      key: "hasEqual",
      value: function (_0x145092) {
        return this.start.equal(_0x145092) || this.end.equal(_0x145092);
      }
    }, {
      key: "contains",
      value: function (_0x3851e2) {
        var _0x1507a3 = this.a * _0x3851e2.x + this.b * _0x3851e2.y + this.c;
        var _0x58629b = this.start;
        var _0x149611 = this.end;
        return _0x1f3eaf(_0x1507a3) && _0x46d517(_0x58629b.x, _0x149611.x, _0x3851e2.x) && _0x46d517(_0x58629b.y, _0x149611.y, _0x3851e2.y);
      }
    }, {
      key: "owner",
      get: function () {}
    }]);
    return _0x2b9173;
  }();
  var _0x47b767 = 1000 / 60;
  var _0x5ce52c = function () {
    function _0x1e8295(_0xf88a43) {
      _0x43fd4a(this, _0x1e8295);
      this.segments = [];
      this.simplify = [];
      this.simplifyIndexes = [];
      this.owner = null;
      this.bounds = null;
      for (var _0x40a14c = _0xf88a43.length, _0x5e2281 = 0; _0x5e2281 < _0x40a14c;) {
        var _0x2738ae = _0x1b9fb2.nullableNew(_0xf88a43[_0x5e2281++], _0xf88a43[_0x5e2281 < _0x40a14c ? _0x5e2281 : 0]);
        if (_0x2738ae) {
          this.segments.push(_0x2738ae);
        }
      }
      this.updateBounds();
    }
    _0x5796f0(_0x1e8295, null, [{
      key: "fromSegments",
      value: function (_0x4d027d) {
        var _0x386a16 = new _0x1e8295();
        _0x386a16.segments = _0x4d027d;
        _0x386a16.updateBounds();
        return _0x386a16;
      }
    }]);
    _0x5796f0(_0x1e8295, [{
      key: "commit",
      value: function (_0x8aaf10) {
        var _0x10085 = this;
        if (_0x8aaf10) {
          this.owner = _0x8aaf10;
        }
        this.segments.forEach(function (_0x5c1191) {
          return _0x5c1191.commit(_0x10085);
        });
      }
    }, {
      key: "remove",
      value: function () {
        this.segments.forEach(function (_0xe77d7) {
          return _0xe77d7.remove();
        });
      }
    }, {
      key: "reverse",
      value: function () {
        this.segments.reverse();
        this.segments.forEach(function (_0x36efd1) {
          return _0x36efd1.reverse();
        });
        return this;
      }
    }, {
      key: "insert",
      value: function (_0xcfbbb5, _0x2b0b04) {
        if (!_0xcfbbb5.has(_0x2b0b04)) {
          var _0x21072b = this.segments.findIndex(function (_0x21bc56) {
            return _0x21bc56 === _0xcfbbb5;
          });
          var _0x3a224c = new _0x1b9fb2(_0xcfbbb5.start, _0x2b0b04).commit(this);
          var _0x16a3fc = new _0x1b9fb2(_0x2b0b04, _0xcfbbb5.end).commit(this);
          _0xcfbbb5.remove();
          this.segments.splice(_0x21072b, 1, _0x3a224c, _0x16a3fc);
          return [_0x3a224c, _0x16a3fc];
        }
      }
    }, {
      key: "hasPoint",
      value: function (_0xd4b623) {
        return this.segments.some(function (_0x34c7ee) {
          return _0x34c7ee.has(_0xd4b623);
        });
      }
    }, {
      key: "findSegment",
      value: function (_0x86242e) {
        return this.segments.findIndex(function (_0x4951e9) {
          return _0x4951e9.start === _0x86242e;
        });
      }
    }, {
      key: "left",
      value: function (_0x5691fa, _0x2169e2, _0x592d51) {
        var _0x5c84b1;
        var _0x3a0f42 = this;
        var _0x2c3e21 = [];
        for (var _0x45033e = 0; _0x45033e < _0x5691fa.length - 1; _0x45033e++) {
          _0x2c3e21.push(new _0x1b9fb2(_0x5691fa[_0x45033e], _0x5691fa[_0x45033e + 1]));
        }
        var _0x1dc88a = (_0x5c84b1 = this.segments).splice.apply(_0x5c84b1, [_0x2169e2, _0x592d51 - _0x2169e2].concat(_0x2c3e21));
        _0x2c3e21.forEach(function (_0x2cbbcc) {
          return _0x2cbbcc.commit(_0x3a0f42);
        });
        _0x1dc88a.forEach(function (_0x415ab1) {
          return _0x415ab1.remove();
        });
      }
    }, {
      key: "right",
      value: function (_0x94c1a3, _0x5a4228, _0x55f708) {
        var _0x21b9dd = this;
        var _0x468073 = [];
        for (var _0x11b390 = 0; _0x11b390 < _0x94c1a3.length - 1; _0x11b390++) {
          _0x468073.push(new _0x1b9fb2(_0x94c1a3[_0x11b390], _0x94c1a3[_0x11b390 + 1]));
        }
        var _0x4a8126 = this.segments.splice(_0x5a4228, _0x55f708 - _0x5a4228);
        this.remove();
        _0x468073.reverse().forEach(function (_0x4ff8ac) {
          return _0x4ff8ac.reverse().commit(_0x21b9dd);
        });
        this.segments = _0x4a8126.concat(_0x468073);
      }
    }, {
      key: "points",
      value: function () {
        return this.segments.map(function (_0x36483f) {
          return _0x36483f.start;
        });
      }
    }, {
      key: "intersections",
      value: function (_0x34ef19) {
        var _0x593728 = [];
        if (this.segments.length > 1) {
          this.segments.forEach(function (_0x429871) {
            var _0x497c92 = _0x429871.intersect(_0x34ef19);
            if (_0x497c92) {
              _0x593728.push(_0x497c92);
            }
          });
        }
        _0x593728.sort(function (_0x59a0e2, _0x2d30a5) {
          return _0x59a0e2.distance - _0x2d30a5.distance;
        });
        return _0x593728;
      }
    }, {
      key: "inside",
      value: function (_0x4485fc) {
        var _0xc279d3 = this.bounds;
        var _0x13d550 = _0xc279d3.left;
        var _0x274cc1 = _0xc279d3.right;
        var _0x1467cc = _0xc279d3.top;
        var _0x3484e0 = _0xc279d3.bottom;
        if (_0x13d550 > _0x4485fc.x || _0x4485fc.x > _0x274cc1 || _0x1467cc > _0x4485fc.y || _0x4485fc.y > _0x3484e0) {
          return false;
        }
        for (var _0x33f45f = this.segments.length, _0x1ee838 = 1, _0x460b01 = 0; _0x460b01 < _0x33f45f; _0x460b01++) {
          var _0x536629 = this.segments[_0x460b01];
          var _0x2374bb = _0x536629.start;
          var _0x51ffdd = _0x536629.end;
          var _0x43fa41 = _0x5c78ae(_0x2374bb, _0x51ffdd, _0x4485fc);
          if (_0x43fa41 === 0) {
            return true;
          }
          _0x1ee838 *= _0x43fa41;
        }
        return _0x1ee838 !== 1;
      }
    }, {
      key: "rawSquare",
      value: function () {
        var _0x416208 = 0;
        this.segments.forEach(function (_0x15a786) {
          var _0x24f88a = _0x15a786.start;
          var _0x1f437a = _0x15a786.end;
          _0x416208 += (_0x24f88a.x + _0x1f437a.x) * (_0x1f437a.y - _0x24f88a.y);
        });
        return _0x416208 / 2;
      }
    }, {
      key: "square",
      value: function () {
        var _0x5b4164 = this.rawSquare();
        return Math.abs(_0x5b4164);
      }
    }, {
      key: "calcPath",
      value: function () {
        var _0x12a355 = new Path2D();
        var _0x14783a = this.segments;
        var _0x489be2 = _0x14783a.length;
        var _0x1730b6 = _0x14783a[0].start;
        _0x12a355.moveTo(_0x1730b6.x, _0x1730b6.y);
        for (var _0x5a397a = 1; _0x5a397a < _0x489be2; _0x5a397a++) {
          var _0x4bb1e0 = _0x14783a[_0x5a397a].start;
          _0x12a355.lineTo(_0x4bb1e0.x, _0x4bb1e0.y);
        }
        _0x12a355.closePath();
        this.path = _0x12a355;
        this.updateBounds();
      }
    }, {
      key: "calcSimplify",
      value: function () {
        var _0x2bc761 = Infinity;
        var _0x2c897c = -Infinity;
        var _0x29c0ec = Infinity;
        var _0x377fc7 = -Infinity;
        var _0x7aad54 = [];
        var _0x1c2095 = [];
        var _0x13b56d = 0;
        this.segments.forEach(function (_0x2dfee9, _0xda112c) {
          var _0x97d6cb = _0x2dfee9.start;
          var _0xb142a8 = _0x97d6cb.x;
          var _0xc4c824 = _0x97d6cb.y;
          _0x2bc761 = Math.min(_0x2bc761, _0xb142a8);
          _0x2c897c = Math.max(_0x2c897c, _0xb142a8);
          _0x29c0ec = Math.min(_0x29c0ec, _0xc4c824);
          _0x377fc7 = Math.max(_0x377fc7, _0xc4c824);
          if (_0x13b56d < 2) {
            _0x7aad54.push(_0x97d6cb);
            _0x1c2095.push(_0xda112c);
            _0x13b56d++;
          } else {
            var _0x40ece4 = _0x7aad54[_0x13b56d - 2];
            if (_0x97d6cb.distance2(_0x40ece4) < 625) {
              _0x7aad54[_0x13b56d - 1] = _0x97d6cb;
              _0x1c2095[_0x13b56d - 1] = _0xda112c;
            } else {
              _0x7aad54.push(_0x97d6cb);
              _0x1c2095.push(_0xda112c);
              _0x13b56d++;
            }
          }
        });
        this.simplify = _0x7aad54;
        this.simplifyIndexes = _0x1c2095;
        _0x2bc761 -= 25;
        _0x2c897c += 25;
        _0x29c0ec -= 25;
        _0x377fc7 += 25;
        this.bounds = {
          left: _0x2bc761,
          right: _0x2c897c,
          top: _0x29c0ec,
          bottom: _0x377fc7
        };
      }
    }, {
      key: "updateBounds",
      value: function () {
        this.calcSimplify();
      }
    }, {
      key: "findNearestPoint",
      value: function (_0x246355) {
        var _0xf808d4 = this.segments;
        var _0x19541f = this.simplify;
        var _0x41109d = this.simplifyIndexes;
        var _0x1f70cf = Infinity;
        var _0x56b67e = -1;
        _0x19541f.forEach(function (_0x2a387c, _0x760737) {
          var _0x2184d0 = _0x2a387c.distance2(_0x246355);
          if (_0x2184d0 < _0x1f70cf) {
            _0x1f70cf = _0x2184d0;
            _0x56b67e = _0x760737;
          }
        });
        var _0x305d54 = _0x56b67e > 0 ? _0x56b67e - 1 : _0x56b67e;
        var _0x276bc9 = _0x56b67e < _0x19541f.length - 1 ? _0x56b67e + 1 : _0x56b67e;
        var _0x59cf09 = _0x41109d[_0x305d54];
        var _0x169c00 = _0x41109d[_0x276bc9];
        _0x1f70cf = Infinity;
        var _0x541cc8 = -1;
        for (var _0x442aeb = _0x59cf09; _0x442aeb < _0x169c00; _0x442aeb++) {
          var _0x4241a0 = _0xf808d4[_0x442aeb].start.distance2(_0x246355);
          if (_0x4241a0 < _0x1f70cf) {
            _0x1f70cf = _0x4241a0;
            _0x541cc8 = _0x442aeb;
          }
        }
        var _0x12532b = _0x41109d[_0x56b67e];
        var _0x2a45cc = _0x305d54;
        var _0xa01ef = _0x56b67e;
        if (_0x12532b < _0x541cc8) {
          _0x2a45cc = _0x56b67e;
          _0xa01ef = _0x276bc9;
        }
        var _0xb0a8da = _0xf808d4[_0x541cc8].start;
        return {
          baseDistance: _0x1f70cf,
          baseRealNearestIndex: _0x541cc8,
          baseNearestPoint: _0xb0a8da,
          prevSimplifyNearestIndex: _0x2a45cc,
          nextSimplifyNearestIndex: _0xa01ef
        };
      }
    }]);
    return _0x1e8295;
  }();
  var _0x5dd8d5 = typeof performance != "undefined" && performance || Date;
  var _0x6684af = _0x5dd8d5.now.bind(_0x5dd8d5);
  var _0x61b37f = function () {
    function _0x272be3(_0x1fc6ed, _0x562b72, _0x13cd0b, _0x1b634f) {
      _0x43fd4a(this, _0x272be3);
      this.center = _0x1fc6ed;
      this.a = _0x13cd0b;
      this.b = _0x1b634f;
      this.c = Math.sqrt(_0x13cd0b * _0x13cd0b - _0x1b634f * _0x1b634f);
      this.e = this.c / _0x13cd0b;
      this.polygon = new _0x5ce52c(function (_0x5b598b, _0x2c7c34, _0x5b3322, _0x22ae2f) {
        var _0x56b078 = _0x5b598b.x;
        var _0xc217d9 = _0x5b598b.y;
        for (var _0x2c29ed = _0x1021b0 / _0x2c7c34, _0x127959 = [], _0x4288f7 = 0; _0x4288f7 < _0x1021b0 - _0x13162a; _0x4288f7 += _0x2c29ed) {
          _0x127959.push(new _0x1aa65a(_0x56b078 + _0x5b3322 * Math.cos(_0x4288f7), _0xc217d9 + _0x22ae2f * Math.sin(_0x4288f7)));
        }
        return _0x127959;
      }(_0x1fc6ed, _0x562b72, _0x13cd0b, _0x1b634f));
    }
    _0x5796f0(_0x272be3, [{
      key: "intersections",
      value: function (_0x3850af) {
        return this.polygon.intersections(_0x3850af);
      }
    }, {
      key: "radiusByAngle",
      value: function (_0x34d3bb) {
        var _0x4b9522 = Math.cos(_0x34d3bb);
        return this.b / Math.sqrt(1 - this.e * this.e * _0x4b9522 * _0x4b9522);
      }
    }, {
      key: "radiusByAngleSlow",
      value: function (_0x5e1c54) {
        var _0x4c816a = Math.atan(this.a / this.b * Math.tan(_0x5e1c54));
        if (_0x5e1c54 > Math.PI / 2 && _0x5e1c54 < Math.PI * 2 * 0.75) {
          _0x4c816a += Math.PI;
        }
        var _0xba01ff = new _0x1aa65a(this.center.x + Math.cos(_0x4c816a) * this.a, this.center.y + Math.sin(_0x4c816a) * this.b);
        return this.center.distance(_0xba01ff);
      }
    }, {
      key: "radiusByPoint",
      value: function (_0x420fda) {
        var _0x202d3b = Math.atan2(_0x420fda.y - this.center.y, _0x420fda.x - this.center.x);
        return this.radiusByAngle(_0x202d3b);
      }
    }, {
      key: "radiusByPointSlow",
      value: function (_0x3bd42f) {
        var _0x46371e = this.nearPoint(_0x3bd42f);
        return this.center.distance(_0x46371e);
      }
    }, {
      key: "distance",
      value: function (_0x4c03a9) {
        return _0x4c03a9.distance(this.nearPoint(_0x4c03a9));
      }
    }, {
      key: "nearPoint",
      value: function (_0x444cbb) {
        var _0x2d1d43 = Math.atan2(_0x444cbb.y - this.center.y, _0x444cbb.x - this.center.x);
        var _0x253387 = this.radiusByAngle(_0x2d1d43);
        return new _0x1aa65a(_0x253387, 0).rotate(_0x2d1d43).add(this.center);
      }
    }, {
      key: "nearPointSlow",
      value: function (_0x1e6f7d) {
        var _0x92e16e = Math.atan2(_0x1e6f7d.y - this.center.y, _0x1e6f7d.x - this.center.x);
        if (_0x92e16e < 0) {
          _0x92e16e = Math.PI * 2 + _0x92e16e;
        }
        var _0x11bb8b = Math.atan(this.a / this.b * Math.tan(_0x92e16e));
        if (_0x92e16e > Math.PI / 2 && _0x92e16e < Math.PI * 2 * 0.75) {
          _0x11bb8b += Math.PI;
        }
        return new _0x1aa65a(this.center.x + Math.cos(_0x11bb8b) * this.a, this.center.y + Math.sin(_0x11bb8b) * this.b);
      }
    }, {
      key: "inside",
      value: function (_0x25149f) {
        return this.center.distance(_0x25149f) + 1 < this.radiusByPoint(_0x25149f);
      }
    }, {
      key: "radius",
      get: function () {
        return this.a;
      }
    }]);
    return _0x272be3;
  }();
  (_0x41014a = new Path2D()).moveTo(-15, -15);
  _0x41014a.lineTo(-5, -5);
  _0x41014a.lineTo(0, -15);
  _0x41014a.lineTo(5, -5);
  _0x41014a.lineTo(15, -15);
  _0x41014a.lineTo(10, 5);
  _0x41014a.lineTo(-10, 5);
  _0x41014a.closePath();
  var _0x592bdb = _0x41014a;
  _0x36da08 = new Path2D();
  _0x4a29e9 = 1.6;
  _0x36da08.moveTo(0, _0x4a29e9 * -7);
  _0x36da08.lineTo(8, _0x4a29e9 * -6);
  _0x36da08.lineTo(_0x4a29e9 * 7, _0x4a29e9 * -3);
  _0x36da08.lineTo(_0x4a29e9 * 6, 3.2);
  _0x36da08.lineTo(6.4, _0x4a29e9 * 3);
  _0x36da08.lineTo(_0x4a29e9 * 3, _0x4a29e9 * 6);
  _0x36da08.lineTo(0, _0x4a29e9 * 7);
  _0x36da08.lineTo(_0x4a29e9 * -3, _0x4a29e9 * 6);
  _0x36da08.lineTo(-6.4, _0x4a29e9 * 3);
  _0x36da08.lineTo(_0x4a29e9 * -6, 3.2);
  _0x36da08.lineTo(_0x4a29e9 * -7, _0x4a29e9 * -3);
  _0x36da08.lineTo(-8, _0x4a29e9 * -6);
  _0x36da08.closePath();
  _0x36da08.arc(_0x4a29e9 * -3, -1.6, 3.2, 0, Math.PI * 2, true);
  _0x36da08.closePath();
  _0x36da08.arc(_0x4a29e9 * 3, -1.6, 3.2, 0, Math.PI * 2, true);
  _0x36da08.closePath();
  _0x36da08.moveTo(0, _0x4a29e9);
  _0x36da08.lineTo(-3.2, _0x4a29e9 * 3);
  _0x36da08.lineTo(0, 6.4);
  _0x36da08.lineTo(3.2, _0x4a29e9 * 3);
  _0x36da08.closePath();
  var _0x362803 = _0x36da08;
  var _0x572862 = function () {
    function _0x1e60de(_0x4c30b9) {
      _0x43fd4a(this, _0x1e60de);
      this.id = _0x1fef0e();
      this.team = null;
      this.hosts = [];
      if (_0x4c30b9) {
        this.polygon = new _0x5ce52c(_0x4c30b9);
        this.polygon.commit(this);
        this.polygon.calcPath();
        this.calcSquare();
        this.lastSquare = this.square;
      }
    }
    _0x5796f0(_0x1e60de, [{
      key: "join",
      value: function (_0x1359c4) {
        this.hosts.push(_0x1359c4);
        _0x1359c4.base = this;
        _0x1359c4.in = this;
      }
    }, {
      key: "leave",
      value: function (_0x5b0e27) {
        var _0x30f9d4 = this.hosts.indexOf(_0x5b0e27);
        this.hosts.splice(_0x30f9d4, 1);
      }
    }, {
      key: "hasHost",
      value: function (_0x13e9d2) {
        return this.hosts.includes(_0x13e9d2);
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
      value: function (_0x4ce9f2) {
        var _0x534c84 = this;
        return !!_0x4ce9f2.cell && _0x4ce9f2.segments.some(function (_0x3940e5) {
          return _0x3940e5.shape === _0x534c84.polygon;
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
      value: function (_0x436e27, _0x2db0fb, _0x371a43, _0xae3e6e) {
        if (this.hosts.length) {
          if (this.hasHost(_0x2db0fb)) {
            this.handleSelfIntersect(_0x436e27, _0x2db0fb, _0x371a43, _0xae3e6e);
          } else {
            this.handleEnemyIntersect(_0x436e27, _0x2db0fb, _0x371a43, _0xae3e6e);
          }
        }
      }
    }, {
      key: "handleIntersects",
      value: function (_0xbe8527, _0x35b3fb, _0x6eee2b, _0x440fe9) {
        if (_0xbe8527.length) {
          if (this.hasHost(_0x35b3fb)) {
            this.handleSelfIntersects(_0xbe8527, _0x35b3fb, _0x6eee2b, _0x440fe9);
          } else {
            this.handleEnemyIntersects(_0xbe8527, _0x35b3fb, _0x6eee2b, _0x440fe9);
          }
        }
      }
    }, {
      key: "checkEnemyEntry",
      value: function (_0xeb8483, _0x3cbbb3, _0xc841de, _0x2c526a) {
        if (_0xc841de === null) {
          _0xc841de = _0x2c526a.reduce(function (_0x3ecc42, _0x16f6f6) {
            var _0x1ec967 = _0x16f6f6.intersect(_0xeb8483);
            return _0x3ecc42 + (_0x1ec967 ? _0x1ec967.zn : 0);
          }, 0);
        }
        if (_0xc841de > 0) {
          return false;
        }
        if (_0x3cbbb3.equal(_0xeb8483.end)) {
          return false;
        }
        if (_0xc841de === 0) {
          _0x3cbbb3.clone().add(_0xeb8483.vector.clone().normalize().mulScalar(_0x13162a * 10));
          if (!this.polygon.inside(_0xeb8483.end)) {
            return false;
          }
        }
        if (_0xc841de === -1) {
          var _0x7e5de4 = this.polygon.segments.find(function (_0x11d209) {
            return (_0x11d209.start.equal(_0x3cbbb3) || _0x11d209.end.equal(_0x3cbbb3)) && _0x11d209 !== _0x2c526a[0];
          });
          var _0x1b2a40 = _0x3cbbb3.clone().add(_0xeb8483.vector.clone().normalize().mulScalar(_0x13162a * 20));
          if (_0x7e5de4.contains(_0x1b2a40)) {
            return false;
          }
        }
        return true;
      }
    }, {
      key: "checkEnemyLeave",
      value: function (_0x57ad9e, _0x5d3598, _0x51b1a0, _0x50b32d) {
        if (_0x51b1a0 === null) {
          _0x51b1a0 = _0x50b32d.reduce(function (_0x311169, _0x4a7a7f) {
            var _0x59e57b = _0x4a7a7f.intersect(_0x57ad9e);
            return _0x311169 + (_0x59e57b ? _0x59e57b.zn : 0);
          }, 0);
        }
        return !(_0x51b1a0 < 0);
      }
    }, {
      key: "handleEnemyIntersects",
      value: function (_0x56f421, _0x302c85, _0x23ca0a) {
        var _0x10bf56;
        var _0x77ef8a = _0x56f421[0];
        var _0x1676e5 = _0x77ef8a.point;
        var _0x5c23e0 = _0x77ef8a.segment;
        var _0x69d431 = this.polygon.insert(_0x5c23e0, _0x1676e5);
        _0x10bf56 = _0x69d431 ? _0x69d431.reduce(function (_0x1266cc, _0x4ada50) {
          var _0x580a8b = _0x4ada50.intersect(_0x23ca0a);
          return _0x1266cc + (_0x580a8b ? _0x580a8b.zn : 0);
        }, 0) : _0x56f421.reduce(function (_0x5ebbe0, _0x2c9def) {
          return _0x5ebbe0 + _0x2c9def.zn;
        }, 0);
        if (_0x302c85.in === this) {
          if (this.checkEnemyLeave(_0x23ca0a, _0x1676e5, _0x10bf56)) {
            _0x302c85.in = null;
            _0x302c85.track.add(_0x1676e5);
          }
        } else if (this.checkEnemyEntry(_0x23ca0a, _0x1676e5, _0x10bf56, [_0x5c23e0])) {
          _0x302c85.in = this;
          _0x302c85.track.add(_0x1676e5);
        }
      }
    }, {
      key: "checkSelfEntry",
      value: function (_0x39d9d3, _0x14ed68, _0x51ee7f, _0x581e23) {
        if (_0x51ee7f === null) {
          _0x51ee7f = _0x581e23.reduce(function (_0x4084fc, _0x14dcb5) {
            var _0x5bb8b1 = _0x14dcb5.intersect(_0x39d9d3);
            return _0x4084fc + (_0x5bb8b1 ? _0x5bb8b1.zn : 0);
          }, 0);
        }
        return !(_0x51ee7f > 0);
      }
    }, {
      key: "checkSelfLeave",
      value: function (_0x458370, _0x2f4a03, _0xace9df, _0x2bce20) {
        if (_0xace9df === null) {
          _0xace9df = _0x2bce20.reduce(function (_0x5ce87, _0x263e72) {
            var _0x5a8cb8 = _0x263e72.intersect(_0x458370);
            return _0x5ce87 + (_0x5a8cb8 ? _0x5a8cb8.zn : 0);
          }, 0);
        }
        return !(_0xace9df < 0) && !_0x2f4a03.equal(_0x458370.end) && (_0xace9df !== 0 || !this.polygon.inside(_0x458370.end));
      }
    }, {
      key: "handleSelfIntersects",
      value: function (_0x1aa331, _0x155784, _0x3c76d5, _0x5f295c) {
        var _0x4b258d;
        var _0x29fadb = _0x1aa331[0];
        var _0x4928f3 = _0x29fadb.point;
        var _0x326742 = _0x29fadb.segment;
        var _0x213d26 = this.polygon.insert(_0x326742, _0x4928f3);
        _0x4b258d = _0x213d26 ? _0x213d26.reduce(function (_0x48ce6a, _0x4db047) {
          var _0x167652 = _0x4db047.intersect(_0x3c76d5);
          return _0x48ce6a + (_0x167652 ? _0x167652.zn : 0);
        }, 0) : _0x1aa331.reduce(function (_0x5af93f, _0x2e4a73) {
          return _0x5af93f + _0x2e4a73.zn;
        }, 0);
        if (_0x155784.in === this) {
          if (this.checkSelfLeave(_0x3c76d5, _0x4928f3, _0x4b258d)) {
            _0x155784.track.add(_0x4928f3);
            _0x155784.in = null;
            _0x5f295c.scheme.out(_0x155784);
            if (_0x155784.achievements) {
              _0x155784.achievements.onOut();
            }
          }
        } else if (this.checkSelfEntry(_0x3c76d5, _0x4928f3, _0x4b258d)) {
          _0x155784.track.add(_0x4928f3);
          if (_0x155784.track.polyline.end) {
            var _0x5e40b4 = _0x155784.track.polyline.points();
            var _0x51fcaf = _0x155784.track.polyline.segments.slice();
            var _0x50ce24 = _0x155784.track.crossedUnits();
            _0x155784.track.remove();
            _0x155784.in = this;
            _0x5f295c.handleReturn(_0x155784, _0x5e40b4, _0x51fcaf);
            _0x50ce24.forEach(function (_0x1fafa0) {
              return _0x5f295c.handleCross(_0x1fafa0, _0x155784);
            });
          } else {
            _0x155784.track.remove();
            _0x155784.in = this;
          }
        }
      }
    }, {
      key: "handleSelfIntersect",
      value: function (_0x4ebbfc, _0xe00e69, _0x549cc6, _0x4451fc) {
        console.log("--------------------------------------------");
        console.log(`base.handleSelfIntersect ${_0xe00e69.name}`);
        console.log(`Point(${_0x4ebbfc.point.x},${_0x4ebbfc.point.y})`);
        console.log("zn", _0x4ebbfc.zn);
        _0xe00e69.isPlayer;
        var _0x85dd4a = _0x4ebbfc.point;
        var _0x58ce76 = _0x4ebbfc.segment;
        if (_0xe00e69.in === this) {
          if (_0x4ebbfc.zn < 0) {
            console.log("Вектор движения направлен внутрь базы");
            return;
          }
          if (_0x85dd4a.equal(_0x549cc6.end)) {
            console.log("Внутри своей базы на границе (приход на границу)");
            return;
          }
          this.polygon.insert(_0x58ce76, _0x85dd4a);
          _0xe00e69.track.add(_0x85dd4a);
          _0xe00e69.in = null;
          _0x4451fc.scheme.out(_0xe00e69);
          if (_0xe00e69.achievements) {
            _0xe00e69.achievements.onOut();
          }
        } else {
          if (_0x4ebbfc.zn >= 0) {
            return;
          }
          if (_0xe00e69.in) {
            return;
          }
          this.polygon.insert(_0x58ce76, _0x85dd4a);
          _0xe00e69.track.add(_0x85dd4a);
          if (_0xe00e69.track.polyline.end) {
            _0x4451fc.handleReturn(_0xe00e69);
          }
          _0xe00e69.in = this;
          _0xe00e69.track.remove();
        }
      }
    }, {
      key: "handleEnemyIntersect",
      value: function (_0xef81f4, _0x8c02bd, _0x44de45) {
        var _0x3befe8 = _0xef81f4.point;
        var _0x1f8562 = _0xef81f4.segment;
        if (_0x8c02bd.in === this) {
          if (_0xef81f4.zn <= 0) {
            this.polygon.insert(_0x1f8562, _0x3befe8);
            return;
          }
          this.polygon.insert(_0x1f8562, _0x3befe8);
          _0x8c02bd.track.add(_0x3befe8);
          _0x8c02bd.track.addIntersection({
            data: _0xef81f4,
            meta: {
              type: "base",
              base: this,
              enter: false
            }
          });
          _0x8c02bd.in = null;
        } else {
          if (_0xef81f4.zn > -1) {
            this.polygon.insert(_0x1f8562, _0x3befe8);
            return;
          }
          if (_0x3befe8.equal(_0x44de45.end)) {
            if (_0x8c02bd.isPlayer) {
              console.log("Снаружи на границе чужой базы");
            }
            return;
          }
          if (_0x8c02bd.in) {
            return;
          }
          this.polygon.insert(_0x1f8562, _0x3befe8);
          _0x8c02bd.track.add(_0x3befe8);
          _0x8c02bd.track.addIntersection({
            data: _0xef81f4,
            meta: {
              type: "base",
              base: this,
              enter: true
            }
          });
          _0x8c02bd.in = this;
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
      set: function (_0x3f61a1) {
        this.DEBUG_Unit = _0x3f61a1;
      }
    }]);
    return _0x1e60de;
  }();
  var _0x259f1a = (typeof Symbol == "undefined" ? "undefined" : _0x27cabf(Symbol)) === undefined ? "transformerTag" : Symbol("transformerTag");
  var _0x58ceba = function () {
    function _0x2f7380(_0x34b677) {
      var _0x3d86e6 = _0x34b677.tag;
      var _0x33e6de = _0x34b677.text;
      var _0x405221 = _0x34b677.font;
      var _0x27e671 = _0x34b677.size;
      var _0x3545d5 = _0x27e671 === undefined ? 30 : _0x27e671;
      var _0x4f29a5 = _0x34b677.scale;
      var _0x3314a6 = _0x4f29a5 === undefined ? 1 : _0x4f29a5;
      var _0x541732 = _0x34b677.color;
      var _0x49ad4c = _0x34b677.alpha;
      var _0xe375b1 = _0x49ad4c === undefined ? 1 : _0x49ad4c;
      var _0x47e5c7 = _0x34b677.stroke;
      var _0xa9aba4 = _0x34b677.target;
      var _0x5d32bf = _0x34b677.position;
      var _0x17c1d1 = _0x34b677.duration;
      var _0xc0ecf6 = _0x34b677.transformers;
      var _0x5c53aa = _0xc0ecf6 === undefined ? [] : _0xc0ecf6;
      var _0x2e49b9 = _0x34b677.fn;
      var _0x5aac65 = _0x34b677.ui;
      _0x43fd4a(this, _0x2f7380);
      this.tag = _0x3d86e6;
      this.text = _0x33e6de;
      this.font = _0x405221;
      this.size = _0x3545d5;
      this.scale = _0x3314a6;
      this.color = _0x541732;
      this.stroke = _0x47e5c7;
      this.ui = _0x5aac65;
      this.transformers = _0x5c53aa;
      this.target = _0xa9aba4;
      this.position = _0x5d32bf;
      this.alpha = _0xe375b1;
      this.fn = _0x2e49b9;
      this.duration = _0x17c1d1;
      this.time = _0x17c1d1;
      this.stage = 0;
    }
    _0x5796f0(_0x2f7380, null, [{
      key: "mover",
      value: function (_0x58e1ae) {
        function _0xf01b56(_0x512fbd, _0x151d07) {
          var _0x4549be = _0x151d07 / 1000;
          _0x21e4f0.x += _0x2969c6.x * _0x4549be;
          _0x21e4f0.y += _0x2969c6.y * _0x4549be;
          _0x512fbd.position.x += _0x21e4f0.x * _0x4549be;
          _0x512fbd.position.y += _0x21e4f0.y * _0x4549be;
        }
        var _0xbdff62 = arguments.length > 0 && _0x58e1ae !== undefined ? _0x58e1ae : {};
        var _0x21e4f0 = _0xbdff62.velocity;
        var _0x2969c6 = _0xbdff62.acceleration;
        var _0x172592 = _0xbdff62.tag;
        if (_0x172592) {
          _0xf01b56[_0x259f1a] = _0x172592;
        }
        return _0xf01b56;
      }
    }, {
      key: "fader",
      value: function (_0x4246b3) {
        function _0x1c809b(_0xafff65) {
          _0xafff65.alpha = _0x463d72(_0xe9cfe4 ? 1 - _0xafff65.stage : _0xafff65.stage);
        }
        var _0x145905 = arguments.length > 0 && _0x4246b3 !== undefined ? _0x4246b3 : {};
        var _0xb0b42 = _0x145905.easing;
        var _0x463d72 = _0xb0b42 === undefined ? _0x552f0d : _0xb0b42;
        var _0x5ebbda = _0x145905.reverse;
        var _0xe9cfe4 = _0x5ebbda !== undefined && _0x5ebbda;
        var _0x545527 = _0x145905.tag;
        if (_0x545527) {
          _0x1c809b[_0x259f1a] = _0x545527;
        }
        return _0x1c809b;
      }
    }]);
    _0x5796f0(_0x2f7380, [{
      key: "getTransformer",
      value: function (_0x4a5fa6) {
        return this.transformers.find(function (_0x1cc3bd) {
          return _0x1cc3bd[_0x259f1a] === _0x4a5fa6;
        });
      }
    }, {
      key: "change",
      value: function (_0x2afe58) {
        var _0x2e5514 = _0x2afe58.duration;
        var _0xdd55df = _0x2afe58.transformers;
        this.duration = _0x2e5514;
        this.time = _0x2e5514;
        this.stage = 0;
        this.transformers = _0xdd55df || [];
      }
    }, {
      key: "update",
      value: function (_0x3b2e5d) {
        var _0xaec995 = this;
        this.time -= _0x3b2e5d;
        if (this.time <= 0) {
          this.fn &&= this.fn(this);
        } else {
          this.stage = 1 - this.time / this.duration;
          this.transformers.forEach(function (_0x3f693d) {
            return _0x3f693d(_0xaec995, _0x3b2e5d);
          });
        }
      }
    }, {
      key: "draw",
      value: function (_0x1b2d0c) {
        var _0x4de074 = _0x1b2d0c.game;
        var _0x31cd63 = _0x1b2d0c.ctx;
        var _0x5aa3e9 = _0x1b2d0c.scale;
        var _0x48a16e = _0x1b2d0c.scaler;
        var _0x26ac5a = _0x1b2d0c.devicePixelRatio;
        var _0x1661c1 = _0x4de074.config.font;
        var _0x2feefc = "ff";
        if (this.alpha !== 1 && (_0x2feefc = Math.floor(this.alpha * 255).toString(16)).length < 2) {
          _0x2feefc = "0" + _0x2feefc;
        }
        var _0x33e76a = this.position;
        var _0x4af2e3 = _0x33e76a.x;
        var _0x3d335a = _0x33e76a.y;
        if (this.target) {
          _0x4af2e3 += this.target.position.x;
          _0x3d335a += this.target.position.y;
        }
        var _0x8df6d8 = this.font || _0x1661c1;
        var _0x20d5ad = this.ui ? this.size * this.scale : this.size * this.scale * _0x48a16e / _0x26ac5a;
        _0x31cd63.save();
        _0x31cd63.font = `bold ${_0x20d5ad}px ${_0x8df6d8}`;
        _0x31cd63.textAlign = "center";
        _0x31cd63.textBaseline = "middle";
        if (!this.ui) {
          _0x4af2e3 *= _0x5aa3e9;
          _0x3d335a *= _0x5aa3e9;
        }
        if (this.stroke) {
          _0x31cd63.strokeStyle = `${this.stroke}${_0x2feefc}`;
          _0x31cd63.lineWidth = _0x20d5ad / 10;
          _0x31cd63.strokeText(this.text, _0x4af2e3, _0x3d335a);
        }
        _0x31cd63.fillStyle = `${this.color}${_0x2feefc}`;
        _0x31cd63.fillText(this.text, _0x4af2e3, _0x3d335a);
        _0x31cd63.restore();
      }
    }]);
    return _0x2f7380;
  }();
  var _0x18aeed = String.fromCharCode;
  var _0x5cbcc5 = [((_0x211a37 = new Path2D()).moveTo(-1, -1), _0x211a37.lineTo(1, -1), _0x211a37.lineTo(1, 1), _0x211a37.lineTo(-1, 1), _0x211a37.closePath(), _0x211a37), ((_0x393f58 = new Path2D()).arc(0, 0, 1, 0, Math.PI * 2), _0x393f58.closePath(), _0x393f58), (_0x4de2c9 = new Path2D(), _0x442712 = 0.25, _0x4de2c9.moveTo(-_0x442712, -1), _0x4de2c9.lineTo(-_0x442712, -_0x442712), _0x4de2c9.lineTo(-1, -_0x442712), _0x4de2c9.lineTo(-1, _0x442712), _0x4de2c9.lineTo(-_0x442712, _0x442712), _0x4de2c9.lineTo(-_0x442712, 1), _0x4de2c9.lineTo(_0x442712, 1), _0x4de2c9.lineTo(_0x442712, _0x442712), _0x4de2c9.lineTo(1, _0x442712), _0x4de2c9.lineTo(1, -_0x442712), _0x4de2c9.lineTo(_0x442712, -_0x442712), _0x4de2c9.lineTo(_0x442712, -1), _0x4de2c9.closePath(), _0x4de2c9), function (_0x400df9) {
    var _0x355e87 = new Path2D();
    var _0x1ca49b = Math.PI / _0x400df9;
    for (var _0x2fc65b = 0; _0x2fc65b < _0x400df9 * 2; _0x2fc65b++) {
      var _0x5161b7 = _0x2fc65b & 1 ? 1 : 0.5;
      var _0x58a715 = _0x5161b7 * Math.cos(_0x1ca49b * _0x2fc65b);
      var _0x11b574 = _0x5161b7 * Math.sin(_0x1ca49b * _0x2fc65b);
      if (_0x2fc65b === 0) {
        _0x355e87.moveTo(_0x58a715, _0x11b574);
      } else {
        _0x355e87.lineTo(_0x58a715, _0x11b574);
      }
    }
    _0x355e87.closePath();
    return _0x355e87;
  }(5)];
  var _0x2bbe0b = Array.from({
    length: 2000
  });
  var _0x2f490e = 0;
  var _0x5adbda = function () {
    function _0x370f5d(_0x5b784e, _0x481aaf, _0x1a0ff0, _0x5e8a62, _0x375f97, _0x1d4125, _0x3047b4, _0x5e867d, _0x2455aa, _0x3edf50, _0x1b934b, _0x4c6a19) {
      _0x43fd4a(this, _0x370f5d);
      this.set(_0x5b784e, _0x481aaf, _0x1a0ff0, _0x5e8a62, _0x375f97, _0x1d4125, _0x3047b4, _0x5e867d, _0x2455aa, _0x3edf50, _0x1b934b, _0x4c6a19);
    }
    _0x5796f0(_0x370f5d, null, [{
      key: "alloc",
      value: function (_0x4c1747, _0x7a1793, _0x2f2baa, _0x7639a7, _0x7b852, _0x5360c6, _0x2d9648, _0x4c2c3b, _0x56ad1a, _0x8ac21f, _0x3d770d, _0x307e87) {
        if (_0x2f490e) {
          return _0x2bbe0b[--_0x2f490e].set(_0x4c1747, _0x7a1793, _0x2f2baa, _0x7639a7, _0x7b852, _0x5360c6, _0x2d9648, _0x4c2c3b, _0x56ad1a, _0x8ac21f, _0x3d770d, _0x307e87);
        } else {
          return new _0x370f5d(_0x4c1747, _0x7a1793, _0x2f2baa, _0x7639a7, _0x7b852, _0x5360c6, _0x2d9648, _0x4c2c3b, _0x56ad1a, _0x8ac21f, _0x3d770d, _0x307e87);
        }
      }
    }, {
      key: "length",
      value: function () {
        return _0x2f490e;
      }
    }]);
    _0x5796f0(_0x370f5d, [{
      key: "set",
      value: function (_0x1de453, _0x7c1641, _0x1a74b7, _0x29947c, _0x3129da, _0x5b3dd8, _0x3c65fe, _0x4f5569, _0x61d064, _0x3bf79e, _0x308e50, _0x5904b1) {
        this.target = _0x1de453;
        this.color = _0x7c1641;
        this.position = _0x1a74b7;
        this.velocity = _0x29947c;
        this.acceleration = _0x3129da;
        this.rotate = _0x5b3dd8;
        this.scale = _0x3c65fe;
        this.vscale = _0x4f5569;
        this.rotation = Math.random() * Math.PI * 2;
        this.time = _0x61d064;
        this.fn = _0x3bf79e;
        this.shape = _0x308e50 || 0;
        this.anchor = _0x5904b1;
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
        if (_0x2f490e < 2000) {
          _0x2bbe0b[_0x2f490e++] = this;
        }
      }
    }, {
      key: "update",
      value: function (_0x1c00af) {
        if (!(this.time <= 0)) {
          var _0x3618a5 = _0x1c00af / 1000;
          if (this.target) {
            while (this.target.killer) {
              this.target = this.target.killer;
            }
            var _0x2c32bb = this.velocity * _0x3618a5;
            var _0x2d072c = _0x1aa65a.clone(this.target.position).sub(this.position).normalize().mulScalar(_0x2c32bb).rotate(Math.random() - 0.5);
            this.position.add(_0x2d072c);
            _0x2d072c.release();
            if (this.position.distance2(this.target.position) < _0x2c32bb * _0x2c32bb) {
              if (this.time && this.fn) {
                this.fn(this);
              }
              this.time = 0;
              return;
            }
            this.velocity += this.acceleration * _0x3618a5;
          } else {
            this.time -= _0x1c00af;
            if (this.time <= 0) {
              if (this.fn) {
                this.fn(this);
              }
              return;
            }
            this.position.x += this.velocity.x * _0x3618a5;
            this.position.y += this.velocity.y * _0x3618a5;
            if (this.acceleration) {
              this.velocity.x += this.acceleration.x * _0x3618a5;
              this.velocity.y += this.acceleration.y * _0x3618a5;
            }
          }
          this.rotation += this.rotate * _0x3618a5;
          this.scale += this.vscale * _0x3618a5;
        }
      }
    }, {
      key: "draw",
      value: function (_0x2c01ee, _0xdd2848) {
        var _0x29d449 = _0x2c01ee.game;
        var _0xcf1b78 = _0x2c01ee.ctx;
        var _0x53a4b0 = _0x2c01ee.pointInView;
        var _0x358e01 = _0x29d449.config.trackWidth;
        var _0x3da655 = _0x1aa65a.clone(this.position);
        var _0x391a10 = this.anchor;
        var _0x47bf31 = this.rotation;
        var _0x33725a = this.color;
        var _0x36562c = this.scale;
        var _0x7ee5d4 = this.shape;
        if (_0x391a10 && _0x391a10.position) {
          _0x3da655.add(_0x391a10.position);
        }
        if (!_0xdd2848 || _0x53a4b0(_0x3da655, _0x358e01)) {
          var _0x3b52bb = _0x3da655.x;
          var _0x4728d5 = _0x3da655.y;
          _0x3da655.release();
          _0xcf1b78.save();
          _0xcf1b78.translate(_0x3b52bb, _0x4728d5);
          _0xcf1b78.rotate(_0x47bf31);
          _0xcf1b78.scale(_0x36562c, _0x36562c);
          if (typeof _0x33725a == "string") {
            if (_0xcf1b78.fillStyle !== _0x33725a) {
              _0xcf1b78.fillStyle = _0x33725a;
            }
            _0xcf1b78.fill(_0x5cbcc5[_0x7ee5d4]);
          } else {
            _0xcf1b78.scale(0.05, 0.05);
            _0xcf1b78.drawImage(_0x33725a, -_0x33725a.width / 2, -_0x33725a.height / 2);
          }
          _0xcf1b78.restore();
        }
      }
    }]);
    return _0x370f5d;
  }();
  var _0x19646a = function () {
    function _0x191369(_0x18e324, _0x10df1b) {
      var _0x251eb5 = this;
      _0x43fd4a(this, _0x191369);
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
      this.keyboardModeSwitch = _0x10df1b;
      this.pressedButtons = [];
      function _0x24ec97(_0x2e6bf9) {
        return _0x251eb5.onKeyChange(_0x2e6bf9, true);
      }
      function _0x14ed91(_0x4033ad) {
        return _0x251eb5.onKeyChange(_0x4033ad, false);
      }
      if (_0x10df1b) {
        _0x10df1b.get();
        window.addEventListener("keydown", _0x24ec97, false);
        window.addEventListener("keyup", _0x14ed91, false);
      }
      function _0x28c719(_0x48c4d9) {
        return _0x48c4d9.preventDefault();
      }
      _0x18e324.addEventListener("contextmenu", _0x28c719, false);
      function _0x17e5ff(_0x1656ce) {
        return _0x251eb5.onMouseChange(_0x1656ce, true);
      }
      function _0x2c18a7(_0x358ed9) {
        return _0x251eb5.onMouseChange(_0x358ed9, false);
      }
      function _0x146023() {
        _0x251eb5.lastMouse = _0x251eb5.mouse;
        _0x251eb5.mouse = null;
        event.preventDefault();
      }
      function _0x20f795(_0x14ee4e) {
        if (_0x251eb5.mouse === null) {
          _0x251eb5.mouse = {};
        }
        _0x251eb5.mouse.x = _0x14ee4e.pageX;
        _0x251eb5.mouse.y = _0x14ee4e.pageY;
        _0x14ee4e.preventDefault();
      }
      function _0x5c6f29(_0x29b49d) {
        _0x20f795(_0x29b49d);
        var _0x2dffb5 = _0x29b49d.buttons;
        _0x251eb5.buttons = {
          left: !!(_0x2dffb5 & 1),
          middle: !!(_0x2dffb5 & 4),
          right: !!(_0x2dffb5 & 2)
        };
        _0x29b49d.preventDefault();
      }
      _0x18e324.addEventListener("mouseenter", _0x5c6f29, false);
      _0x18e324.addEventListener("mousemove", _0x20f795, false);
      _0x18e324.addEventListener("mouseleave", _0x146023, false);
      _0x18e324.addEventListener("mousedown", _0x17e5ff, false);
      _0x18e324.addEventListener("mouseup", _0x2c18a7, false);
      function _0x2c6368() {
        _0x251eb5.lastMouse = _0x251eb5.mouse;
        _0x251eb5.mouse = null;
        event.preventDefault();
      }
      function _0x5f2987(_0x58d2df) {
        if (_0x251eb5.mouse === null) {
          _0x251eb5.mouse = {};
        }
        var _0x1f9f4c = _0x58d2df.changedTouches[0];
        _0x251eb5.mouse.x = _0x1f9f4c.clientX;
        _0x251eb5.mouse.y = _0x1f9f4c.clientY;
        _0x58d2df.preventDefault();
      }
      _0x18e324.addEventListener("touchstart", _0x5f2987, false);
      _0x18e324.addEventListener("touchmove", _0x5f2987, false);
      _0x18e324.addEventListener("touchend", _0x2c6368, false);
      _0x18e324.addEventListener("touchcancel", _0x2c6368, false);
      this.dispose = function () {
        _0x18e324.removeEventListener("contextmenu", _0x28c719, false);
        if (_0x10df1b) {
          window.removeEventListener("keydown", _0x24ec97, false);
          window.removeEventListener("keyup", _0x14ed91, false);
        }
        _0x18e324.removeEventListener("mouseenter", _0x5c6f29, false);
        _0x18e324.removeEventListener("mousemove", _0x20f795, false);
        _0x18e324.removeEventListener("mouseleave", _0x146023, false);
        _0x18e324.removeEventListener("mousedown", _0x17e5ff, false);
        _0x18e324.removeEventListener("mouseup", _0x2c18a7, false);
        _0x18e324.removeEventListener("touchstart", touchHandler, false);
        _0x18e324.removeEventListener("touchmove", touchHandler, false);
      };
    }
    _0x5796f0(_0x191369, [{
      key: "pressed",
      value: function () {
        return this.up || this.down || this.left || this.right;
      }
    }, {
      key: "onKeyChange",
      value: function (_0x1cd72d, _0x32ee57) {
        var _0x6957f7 = this;
        if (_0x1cd72d.target === document.body) {
          var _0x1df57f = true;
          var _0x236653 = _0x1cd72d.keyCode;
          var _0xb2dddc = this.pressedButtons.indexOf(_0x236653);
          if (_0x32ee57) {
            if (_0xb2dddc < 0) {
              this.pressedButtons.push(_0x236653);
            }
            var _0x31c0d3 = this.sets.find(function (_0x27df15) {
              return _0x27df15.codes.every(function (_0x329674) {
                return _0x6957f7.pressedButtons.find(function (_0x30bbbb) {
                  return _0x30bbbb === _0x329674;
                });
              });
            });
            if (_0x31c0d3) {
              _0x31c0d3.handler();
            }
          } else {
            if (_0xb2dddc >= 0) {
              this.pressedButtons.splice(_0xb2dddc, 1);
            }
            var _0x10c984 = this.codes.find(function (_0x22cb17) {
              return _0x22cb17.code === _0x236653;
            });
            if (_0x10c984) {
              _0x10c984.handler();
            }
          }
          switch (_0x236653) {
            case 38:
            case 87:
              this.up = _0x32ee57;
              break;
            case 40:
            case 83:
              this.down = _0x32ee57;
              break;
            case 37:
            case 65:
              this.left = _0x32ee57;
              break;
            case 39:
            case 68:
              this.right = _0x32ee57;
              break;
            case 67:
              if (!_0x32ee57) {
                this.keyboardModeSwitch.switch();
              }
              break;
            default:
              _0x1df57f = false;
          }
          this.modifiers.shift = _0x1cd72d.shiftKey;
          this.modifiers.ctrl = _0x1cd72d.ctrlKey;
          this.modifiers.alt = _0x1cd72d.altKey;
          this.modifiers.meta = _0x1cd72d.metaKey;
          if (_0x1df57f) {
            _0x1cd72d.preventDefault();
          }
        }
      }
    }, {
      key: "onMouseChange",
      value: function (_0x56fc04, _0x517afb) {
        switch (_0x56fc04.button) {
          case 0:
            this.buttons.left = _0x517afb;
            break;
          case 1:
            this.buttons.middle = _0x517afb;
            break;
          case 2:
            this.buttons.right = _0x517afb;
        }
      }
    }, {
      key: "addButton",
      value: function (_0x1600b0, _0x114d36) {
        this.codes.push({
          code: _0x1600b0,
          handler: _0x114d36
        });
      }
    }, {
      key: "addSet",
      value: function (_0x235df1, _0x2a4348) {
        this.sets.push({
          codes: _0x235df1.sort(),
          handler: _0x2a4348
        });
      }
    }]);
    return _0x191369;
  }();
  var _0x2fcb5d = function () {
    function _0x2e1a52(_0x4aa125) {
      _0x43fd4a(this, _0x2e1a52);
      this.owner = _0x4aa125 || null;
      this.start = null;
      this.end = null;
      this.segments = [];
      this.clearBounds();
      this.path = new Path2D();
    }
    _0x5796f0(_0x2e1a52, [{
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
      value: function (_0x3911d7) {
        this.segments.forEach(function (_0x27268b) {
          return _0x27268b.commit(_0x3911d7);
        });
      }
    }, {
      key: "truncate",
      value: function (_0x3e6204) {
        if (_0x3e6204 > 0) {
          this.segments.splice(0, _0x3e6204).forEach(function (_0x309479) {
            return _0x309479.remove();
          });
          var _0x588836 = this.segments[0];
          if (_0x588836) {
            this.start = _0x588836.start;
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
        var _0x5e223d = this;
        this.clearBounds();
        this.path = new Path2D();
        function _0x307bce(_0x5c4bf8) {
          _0x5e223d.updateBounds(_0x5c4bf8);
          var _0x4e66df = _0x5c4bf8.x;
          var _0x2534ac = _0x5c4bf8.y;
          _0x5e223d.path.lineTo(_0x4e66df, _0x2534ac);
        }
        _0x307bce(this.start);
        this.segments.forEach(function (_0x38b429) {
          return _0x307bce(_0x38b429.end);
        });
      }
    }, {
      key: "remove",
      value: function () {
        this.segments.forEach(function (_0x9160eb) {
          return _0x9160eb.remove();
        });
      }
    }, {
      key: "reverse",
      value: function () {
        this.segments.reverse().forEach(function (_0x245c13) {
          return _0x245c13.reverse();
        });
        if (this.end) {
          var _0x4e8dbd = this.start;
          this.start = this.end;
          this.end = _0x4e8dbd;
        }
        return this;
      }
    }, {
      key: "clone",
      value: function () {
        var _0x4ca783 = new _0x2e1a52();
        _0x4ca783.segments = this.segments.map(function (_0x498861) {
          return _0x498861.clone();
        });
        _0x4ca783.start = this.start;
        _0x4ca783.end = this.end;
        Object.assign(_0x4ca783.bounds, this.bounds);
        return _0x4ca783;
      }
    }, {
      key: "updateBounds",
      value: function (_0x32b2a4) {
        var _0x27da85 = _0x32b2a4.x;
        var _0x2520b3 = _0x32b2a4.y;
        this.bounds.left = Math.min(this.bounds.left, _0x27da85);
        this.bounds.right = Math.max(this.bounds.right, _0x27da85);
        this.bounds.top = Math.min(this.bounds.top, _0x2520b3);
        this.bounds.bottom = Math.max(this.bounds.bottom, _0x2520b3);
      }
    }, {
      key: "insert",
      value: function (_0x4f190f, _0x331ba1) {
        if (!_0x4f190f.has(_0x331ba1) && !_0x4f190f.hasEqual(_0x331ba1)) {
          var _0x53ae1c = this.segments.indexOf(_0x4f190f);
          var _0x5e1386 = new _0x1b9fb2(_0x4f190f.start, _0x331ba1).commit(this);
          var _0x2b11d0 = new _0x1b9fb2(_0x331ba1, _0x4f190f.end).commit(this);
          _0x4f190f.remove();
          this.segments.splice(_0x53ae1c, 1, _0x5e1386, _0x2b11d0);
        }
      }
    }, {
      key: "lastEqual",
      value: function (_0x469d8f) {
        var _0x8e0172 = this.end || this.start;
        return _0x8e0172 && _0x8e0172.equal(_0x469d8f);
      }
    }, {
      key: "add",
      value: function (_0x596b62) {
        if (this.lastEqual(_0x596b62)) {
          return false;
        }
        var _0x173d75 = this.end || this.start;
        if (_0x173d75) {
          this.segments.push(new _0x1b9fb2(_0x173d75, _0x596b62).commit(this));
          this.end = _0x596b62;
        } else {
          this.start = _0x596b62;
        }
        this.updateBounds(_0x596b62);
        var _0x5d5de5 = _0x596b62.x;
        var _0x282560 = _0x596b62.y;
        this.path.lineTo(_0x5d5de5, _0x282560);
        return true;
      }
    }, {
      key: "points",
      value: function () {
        var _0x18a09c = this.segments.map(function (_0x260a61) {
          return _0x260a61.start;
        });
        if (this.end) {
          _0x18a09c.push(this.end);
        }
        return _0x18a09c;
      }
    }, {
      key: "rawSquare",
      value: function () {
        var _0x8af420 = 0;
        this.segments.forEach(function (_0x581389) {
          var _0x17f63f = _0x581389.start;
          var _0x38ad28 = _0x581389.end;
          _0x8af420 += (_0x17f63f.x + _0x38ad28.x) * (_0x38ad28.y - _0x17f63f.y);
        });
        return _0x8af420 / 2;
      }
    }, {
      key: "square",
      value: function () {
        var _0x44c1ea = this.rawSquare();
        if (_0x44c1ea < 0) {
          _0x44c1ea *= -1;
        }
        return _0x44c1ea;
      }
    }]);
    return _0x2e1a52;
  }();
  var _0x436d46 = function () {
    function _0x48a5c1(_0x33a49c) {
      _0x43fd4a(this, _0x48a5c1);
      this.polyline = new _0x2fcb5d(this);
      this.simplyline = [];
      this.unit = _0x33a49c;
      this.length = 0;
    }
    _0x5796f0(_0x48a5c1, [{
      key: "crossedUnits",
      value: function () {
        var _0x3ed519 = this;
        var _0x234fd4 = [];
        if (this.unit.base.hosts.length > 1) {
          function _0x4b191b(_0x4daeac) {
            _0x4daeac.segments.forEach(function (_0x1eaf34) {
              if (_0x1eaf34.shape.owner.isTrack) {
                var _0x519a9b = _0x1eaf34.shape.owner.unit;
                if (_0x519a9b !== _0x3ed519.unit && _0x3ed519.unit.base.hasHost(_0x519a9b) && !_0x234fd4.includes(_0x519a9b)) {
                  _0x234fd4.push(_0x519a9b);
                }
              }
            });
          }
          this.polyline.segments.forEach(function (_0x279a5f) {
            return _0x4b191b(_0x279a5f.start);
          });
          if (this.polyline.end) {
            _0x4b191b(this.polyline.end);
          }
        }
        return _0x234fd4;
      }
    }, {
      key: "truncate",
      value: function () {
        var _0x4c2ba1 = this;
        var _0x106980 = this.unit.base.polygon;
        var _0x161af6 = this.polyline.segments.reduce(function (_0x53c659, _0x3e8706, _0x354c3e) {
          if (_0x3e8706.start.segments.some(function (_0x128652) {
            return _0x128652.shape === _0x106980;
          })) {
            return _0x354c3e;
          } else {
            return _0x53c659;
          }
        }, -1);
        this.polyline.truncate(_0x161af6);
        this.simplyline = [];
        this.length = 0;
        if (this.polyline.end) {
          this.polyline.segments.forEach(function (_0x24f4c9) {
            _0x4c2ba1.updateSimplyline(_0x24f4c9.start);
            _0x4c2ba1.length += _0x24f4c9.length();
          });
          this.updateSimplyline(this.polyline.end);
          this.length += this.polyline.segments[this.polyline.segments.length - 1].length();
        }
      }
    }, {
      key: "updateSimplyline",
      value: function (_0x4ea216) {
        var _0x5d0f4d = this.simplyline;
        var _0x1b2549 = _0x5d0f4d.length;
        if (_0x1b2549 > 1) {
          var _0x28fe07 = _0x5d0f4d[_0x1b2549 - 2];
          if (_0x4ea216.distance2(_0x28fe07) < 625) {
            _0x5d0f4d[_0x1b2549 - 1] = _0x4ea216;
          } else {
            _0x5d0f4d.push(_0x4ea216);
          }
        } else {
          _0x5d0f4d.push(_0x4ea216);
        }
      }
    }, {
      key: "add",
      value: function (_0x1c8af9) {
        if (this.polyline.add(_0x1c8af9)) {
          var _0x3ddb76 = this.polyline.segments.length;
          if (_0x3ddb76 > 0) {
            var _0x4e10c9 = this.polyline.segments[_0x3ddb76 - 1];
            this.length += _0x4e10c9.length();
          }
          this.updateSimplyline(_0x1c8af9);
        }
      }
    }, {
      key: "inject",
      value: function (_0x538cb6) {
        var _0x58b857 = _0x538cb6.segment;
        var _0x4149dc = _0x538cb6.point;
        this.polyline.insert(_0x58b857, _0x4149dc);
      }
    }, {
      key: "remove",
      value: function () {
        this.polyline.remove();
        this.polyline = new _0x2fcb5d(this);
        this.length = 0;
        this.simplyline = [];
      }
    }, {
      key: "handleIntersects",
      value: function (_0x1f9b64, _0x545b99, _0x236778, _0x2fe5d1) {
        var _0xa87ab0 = this;
        _0x1f9b64.forEach(function (_0x3bcc9f) {
          return _0xa87ab0.handleIntersect(_0x3bcc9f, _0x545b99, _0x236778, _0x2fe5d1);
        });
      }
    }, {
      key: "handleIntersect",
      value: function (_0x39bb09, _0x31d3e3, _0x5c8537, _0x4676a1) {
        if (_0x31d3e3 === this.unit) {
          if (_0x39bb09.point !== this.polyline.end || _0x39bb09.point.equal(this.polyline.start)) {
            this.unit.position = _0x39bb09.point;
            var _0x2eac14 = _0x4676a1.border.radius - _0x31d3e3.position.distance(_0x4676a1.space.center) < 5 ? 2 : 1;
            _0x4676a1.kill(this.unit, undefined, _0x2eac14);
          }
        } else if (this.unit.team && this.unit.team === _0x31d3e3.team) {
          this.inject(_0x39bb09, _0x31d3e3);
        } else {
          _0x4676a1.kill(this.unit, _0x31d3e3, 3);
        }
      }
    }, {
      key: "isTrack",
      get: function () {
        return true;
      }
    }]);
    return _0x48a5c1;
  }();
  var _0x34b689 = function () {
    function _0x57c642(_0x5be4f5, _0x4fd739, _0x52ec42, _0x7e1a90) {
      _0x43fd4a(this, _0x57c642);
      this.states = _0x5be4f5;
      this.state = _0x4fd739 || "";
      this.payload = _0x52ec42;
      this.debuger = _0x7e1a90 || _0x2867;
      this.initialised = false;
      this.context = {};
    }
    _0x5796f0(_0x57c642, [{
      key: "change",
      value: function (_0x1ea536) {
        this.debuger("change", this);
        var _0x4b71a0 = this.states[this.state];
        if (_0x4b71a0 && _0x4b71a0.leave) {
          this.context = _0x4b71a0.leave(this.payload, this.context) || this.context;
        }
        var _0x805fcf = this.states[_0x1ea536];
        if (_0x805fcf) {
          this.state = _0x1ea536;
          this.context = _0x805fcf.enter && _0x805fcf.enter(this.payload, this.context) || this.context;
          this.update();
        }
      }
    }, {
      key: "update",
      value: function (_0xcb31e9) {
        if (this.initialised) {
          this.debuger("update", this);
          var _0x13aaae = this.states[this.state];
          var _0x22e643 = _0x13aaae && _0x13aaae.update(this.payload, this.context, _0xcb31e9);
          if (_0x22e643) {
            this.change(_0x22e643);
          }
        } else {
          this.debuger("init", this);
          this.initialised = true;
          var _0x13ccf2 = this.state;
          this.state = "";
          this.change(_0x13ccf2);
        }
      }
    }]);
    return _0x57c642;
  }();
  var _0x3aa17e = function () {
    function _0x2db509(_0x2ed2c0, _0xb038dd, _0x1a8851) {
      _0x43fd4a(this, _0x2db509);
      this.id = _0x1fef0e();
      this.game = _0x2ed2c0;
      this.name = _0xb038dd;
      this.position = _0x1a8851;
      this.base = null;
      this.in = null;
      this.track = new _0x436d46(this);
      this.team = null;
      this.target = null;
      this.scheme = null;
      this.statistics = {
        kills: 0
      };
      this.bornTime = _0x6684af();
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
    _0x5796f0(_0x2db509, [{
      key: "setSkin",
      value: function (_0x1f9434) {
        this.skin = _0x1f9434;
      }
    }, {
      key: "out",
      value: function () {
        throw Error("unit.out");
      }
    }, {
      key: "updateSensors",
      value: function (_0x370306, _0x480ccd) {
        var _0x57e51f = this;
        var _0x12c724 = this.base.polygon.findNearestPoint(this.position);
        var _0x25e12b = _0x12c724.baseDistance;
        var _0x1fa29f = _0x12c724.baseRealNearestIndex;
        var _0x21e34d = _0x12c724.baseNearestPoint;
        var _0x31b6eb = _0x12c724.prevSimplifyNearestIndex;
        var _0x4b91a6 = _0x12c724.nextSimplifyNearestIndex;
        this.baseDistance = Math.sqrt(_0x25e12b);
        this.baseNearestPoint = _0x21e34d;
        this.baseNearestIndex = _0x1fa29f;
        this.prevSimplifyNearestIndex = _0x31b6eb;
        this.nextSimplifyNearestIndex = _0x4b91a6;
        var _0x1834dc = this.base.polygon.segments;
        var _0x15efa1 = _0x1834dc[_0x1fa29f > 0 ? _0x1fa29f - 1 : _0x1834dc.length - 1].start;
        var _0x108200 = _0x1834dc[_0x1fa29f < _0x1834dc.length - 1 ? _0x1fa29f + 1 : 0].start.clone().sub(_0x15efa1).normalize();
        this.baseNearestPointTangent = _0x108200;
        this.baseNearestPointNormal = new _0x1aa65a(_0x108200.y, -_0x108200.x);
        var _0x24e589 = Infinity;
        if (_0x480ccd) {
          _0x480ccd.units.forEach(function (_0x584369) {
            if (_0x584369.team !== _0x57e51f.team) {
              var _0x51f630 = _0x584369.position.distance2(_0x57e51f.position);
              if (_0x51f630 < _0x24e589) {
                _0x24e589 = _0x51f630;
              }
            }
          });
        }
        this.nearestEnemyDistance = Math.sqrt(_0x24e589);
        this.unitToTrackDistances = [];
        var _0x3511d9 = 0;
        var _0x3768b3 = 0;
        var _0x5d95ed = null;
        if (this.in !== this.base) {
          this.game.player;
          this.game.units.forEach(function (_0x132cd0) {
            if (_0x132cd0.team !== _0x57e51f.team) {
              var _0xc29112 = Infinity;
              var _0x5ea928 = null;
              _0x57e51f.track.simplyline.forEach(function (_0x1e012e) {
                var _0x3f67aa = _0x1e012e.distance2(_0x132cd0.position);
                if (_0x3f67aa < _0xc29112) {
                  _0xc29112 = _0x3f67aa;
                  _0x5ea928 = _0x1e012e;
                }
              });
              _0xc29112 = Math.sqrt(_0xc29112);
              var _0x51a5f0 = _0x57e51f.baseDistance / _0xc29112;
              _0x57e51f.unitToTrackDistances.push({
                unit: _0x132cd0,
                trackDistance: _0xc29112,
                trackPoint: _0x5ea928,
                danger: _0x51a5f0
              });
              if (_0x3511d9 < _0x51a5f0) {
                _0x5d95ed = _0x132cd0;
                _0x3768b3 = _0xc29112;
                _0x3511d9 = _0x51a5f0;
              }
            }
          });
        }
        this.unitDanger = _0x5d95ed;
        this.distanceDanger = _0x3768b3;
        this.maxDanger = _0x3511d9;
      }
    }, {
      key: "updateEnvironment2",
      value: function () {
        var _0x3c049a = this;
        var _0x1e9e0c = 0;
        var _0x445deb = null;
        var _0x3ed2ed = -1;
        var _0x183acf = -1;
        var _0x4cf0bb = null;
        if (this.in !== this.base) {
          _0x1e9e0c = Infinity;
          var _0x4f1b20 = this.base.polygon.simplify;
          var _0x45264a = _0x4f1b20.reduce(function (_0x3e5056, _0x3307a6) {
            var _0x5672de = _0x3307a6.distance2(_0x3c049a.position);
            if (_0x5672de < _0x3e5056.d) {
              _0x3e5056.d = _0x5672de;
              _0x3e5056.index = _0x3e5056.i;
            }
            _0x3e5056.i++;
            return _0x3e5056;
          }, {
            i: 0,
            index: -1,
            d: Infinity
          });
          _0x1e9e0c = _0x45264a.d;
          for (var _0x17b0ec, _0x15497c, _0x5dc42a = _0x4f1b20[(_0x183acf = _0x45264a.index) > 0 ? _0x183acf - 1 : _0x183acf], _0x731375 = _0x4f1b20[_0x183acf < _0x4f1b20.length - 1 ? _0x183acf + 1 : _0x183acf], _0x31040d = this.base.polygon.segments, _0x672d88 = 0; _0x17b0ec === undefined || _0x15497c === undefined; _0x672d88++) {
            var _0x3f4cc2 = _0x31040d[_0x672d88].start;
            if (_0x3f4cc2 === _0x5dc42a) {
              _0x17b0ec = _0x672d88;
            }
            if (_0x3f4cc2 === _0x731375) {
              _0x15497c = _0x672d88;
            }
          }
          _0x1e9e0c = Infinity;
          for (var _0x25ebf9 = _0x17b0ec; _0x25ebf9 < _0x15497c; _0x25ebf9++) {
            var _0x52996a = _0x31040d[_0x25ebf9].start.distance2(this.position);
            if (_0x52996a < _0x1e9e0c) {
              _0x1e9e0c = _0x52996a;
              _0x3ed2ed = _0x25ebf9;
            }
          }
          _0x445deb = _0x31040d[_0x3ed2ed].start;
          var _0x39d68d = _0x31040d[_0x3ed2ed > 0 ? _0x3ed2ed - 1 : _0x31040d.length - 1].start;
          _0x4cf0bb = _0x31040d[_0x3ed2ed < _0x31040d.length - 1 ? _0x3ed2ed + 1 : 0].start.clone().sub(_0x39d68d).normalize();
        }
        _0x1e9e0c = Math.sqrt(_0x1e9e0c);
        this.baseDistance = _0x1e9e0c;
        this.baseNearestPoint = _0x445deb;
        this.baseNearestIndex = _0x3ed2ed;
        this.baseSimplifyNearestIndex = _0x183acf;
        if (this.baseNearestPointTangent = _0x4cf0bb) {
          this.baseNearestPointNormal = new _0x1aa65a(_0x4cf0bb.y, -_0x4cf0bb.x);
        }
      }
    }, {
      key: "updateExtendedSensors",
      value: function () {
        var _0x2f38bc = this;
        var _0x1fd3be = this.extendedSensors;
        var _0x4178aa = this.baseNearestPoint;
        var _0x203729 = this.baseNearestIndex;
        var _0x5c2612 = this.prevSimplifyNearestIndex;
        var _0x12880d = this.nextSimplifyNearestIndex;
        var _0x1653dd = null;
        var _0x348653 = null;
        if (this.target) {
          _0x1653dd = this.target.clone().sub(this.position).normalize().mulScalar(this.game.config.unitSpeed);
          _0x348653 = _0x1653dd.clone().add(this.position);
        }
        _0x1fd3be.predictedMovie = _0x1653dd;
        var _0x15b89e = [];
        if (this.track.simplyline.length > 2) {
          for (var _0x22fbb5 = 1, _0x4ffe06 = this.track.simplyline.length; _0x22fbb5 < _0x4ffe06; _0x22fbb5++) {
            var _0x2bb7d7 = this.track.simplyline[_0x22fbb5 - 1];
            var _0x49d0b2 = this.track.simplyline[_0x22fbb5];
            _0x15b89e.push(new _0x1b9fb2(_0x2bb7d7, _0x49d0b2));
          }
          var _0x4b2507;
          var _0x1a7e85 = new _0x1b9fb2(this.track.simplyline[this.track.simplyline.length - 1], _0x4178aa);
          var _0x320e86 = _0x15b89e.map(function (_0x261471) {
            return _0x261471.intersect(_0x1a7e85);
          }).filter(function (_0xf8e296) {
            return _0xf8e296 && _0xf8e296.point !== _0x2f38bc.position;
          });
          _0x1fd3be.selfBackIntersections = _0x320e86;
          var _0x515680;
          var _0x37bc65;
          var _0x429ce0;
          var _0x1f1d9f = [];
          var _0x5893de = [];
          if (_0x1653dd) {
            _0x4b2507 = new _0x1b9fb2(this.position, _0x348653);
            _0x1f1d9f = _0x15b89e.map(function (_0x237c10) {
              return _0x237c10.intersect(_0x4b2507);
            }).filter(function (_0x5cb8e5) {
              return _0x5cb8e5 && _0x5cb8e5.point !== _0x2f38bc.position;
            });
            _0x37bc65 = this.base.polygon.findNearestPoint(_0x348653);
            _0x515680 = new _0x1b9fb2(_0x348653, _0x37bc65.baseNearestPoint);
            _0x5893de = _0x15b89e.map(function (_0x4b506c) {
              return _0x4b506c.intersect(_0x515680);
            }).filter(function (_0x1eff03) {
              return _0x1eff03 && _0x1eff03.point !== _0x348653;
            });
            var _0x2a26df = [];
            for (var _0x433d40 = 0, _0x57d724 = this.base.polygon.simplify.length; _0x433d40 < _0x57d724; _0x433d40++) {
              var _0x14f410 = _0x433d40 === 0 ? this.base.polygon.simplify[_0x57d724 - 1] : this.base.polygon.simplify[_0x433d40 - 1];
              var _0x1411cc = this.base.polygon.simplify[_0x433d40];
              var _0x2a7273 = new _0x1b9fb2(_0x14f410, _0x1411cc).intersect(_0x4b2507);
              if (_0x2a7273) {
                _0x2a26df.push(_0x2a7273);
              }
            }
            if (_0x2a26df.length) {
              _0x2a26df.sort(function (_0xf597b4, _0x2b6f46) {
                return _0xf597b4.distance - _0x2b6f46.distance;
              });
              _0x429ce0 = _0x2a26df[0].point;
            }
          }
          _0x1fd3be.predictedMovieComebackPoint = _0x429ce0;
          _0x1fd3be.predictedMovieSegment = _0x4b2507;
          _0x1fd3be.predictedBackSegment = _0x515680;
          _0x1fd3be.predictedSelfIntersections = _0x1f1d9f;
          _0x1fd3be.predictedSelfBackIntersections = _0x5893de;
          _0x15b89e.push(_0x1a7e85);
          var _0x4a3e87 = this.base.polygon.simplifyIndexes;
          var _0x9311d2 = this.base.polygon.segments.findIndex(function (_0x5b1ffe) {
            return _0x5b1ffe.start === _0x2f38bc.track.polyline.start;
          });
          var _0x43325a = _0x15b89e;
          var _0x17c885 = false;
          var _0x33967c = null;
          if (_0x203729 < _0x9311d2) {
            _0x43325a = _0x33967c || (_0x17c885 = true, _0x33967c = _0x15b89e.map(function (_0x485b12) {
              return _0x485b12.clone().reverse();
            }).reverse());
          }
          _0x1fd3be.predictedTrack = _0x43325a;
          _0x1fd3be.predictedTrackIsReversed = _0x17c885;
          var _0x4e6077 = _0x4a3e87.reduce(function (_0x5aa74a, _0x22df2c) {
            var _0x10515e = Math.abs(_0x22df2c - _0x9311d2);
            if (_0x10515e < _0x5aa74a.d) {
              _0x5aa74a.d = _0x10515e;
              _0x5aa74a.index = _0x5aa74a.i;
            }
            _0x5aa74a.i++;
            return _0x5aa74a;
          }, {
            i: 0,
            index: 0,
            d: Infinity
          }).index;
          _0x1fd3be.startTrackBaseSimplifyIndex = _0x4e6077;
          var _0x53ea88 = _0x4a3e87.findIndex(function (_0x1ad837) {
            return _0x9311d2 < _0x1ad837;
          });
          var _0x17cc20 = _0x53ea88 - 1;
          _0x1fd3be.startTrackBaseSimplifyNextIndex = _0x53ea88;
          _0x1fd3be.startTrackBaseSimplifyPrevIndex = _0x17cc20;
          _0x1fd3be.startTrackBaseSimplifyNextPoint = this.base.polygon.simplify[_0x53ea88];
          _0x1fd3be.startTrackBaseSimplifyPrevPoint = this.base.polygon.simplify[_0x17cc20];
          var _0x38aa3b = _0x4a3e87.reduce(function (_0x33ca78, _0x28b2bb) {
            var _0x574e0d = Math.abs(_0x28b2bb - _0x203729);
            if (_0x574e0d < _0x33ca78.d) {
              _0x33ca78.d = _0x574e0d;
              _0x33ca78.index = _0x33ca78.i;
            }
            _0x33ca78.i++;
            return _0x33ca78;
          }, {
            i: 0,
            index: 0,
            d: Infinity
          }).index;
          _0x1fd3be.endTrackBaseSimplifyIndex = _0x38aa3b;
          var _0x345f14;
          var _0x106b7d;
          var _0x57148c;
          var _0x30b683;
          var _0x3726bf = _0x12880d;
          var _0x40251a = _0x5c2612;
          _0x1fd3be.endTrackBaseSimplifyNextIndex = _0x3726bf;
          _0x1fd3be.endTrackBaseSimplifyPrevIndex = _0x40251a;
          _0x1fd3be.endTrackBaseSimplifyNextPoint = this.base.polygon.simplify[_0x3726bf];
          _0x1fd3be.endTrackBaseSimplifyPrevPoint = this.base.polygon.simplify[_0x40251a];
          if (_0x320e86.length) {
            _0x345f14 = null;
          } else {
            var _0x81a69a;
            var _0x41c974;
            var _0x97b276 = _0x43325a.map(function (_0x5308ca) {
              return _0x5308ca.start;
            });
            _0x97b276.push(_0x43325a[_0x43325a.length - 1].end);
            if ((_0x41c974 = _0x9311d2 < _0x203729 ? (_0x81a69a = _0x53ea88, _0x40251a) : (_0x81a69a = _0x3726bf, _0x17cc20)) < _0x81a69a) {
              var _0x6b7d82 = _0x81a69a;
              _0x81a69a = _0x41c974;
              _0x41c974 = _0x6b7d82;
            }
            if (_0x53ea88 === _0x3726bf) {
              _0x345f14 = new _0x5ce52c(_0x97b276);
              _0x106b7d = _0x97b276;
            } else {
              var _0x54dc2f = this.base.polygon.simplify.slice();
              var _0x46c6c7 = _0x54dc2f.splice.apply(_0x54dc2f, [_0x81a69a, _0x41c974 - _0x81a69a + 1].concat(_0x105c0a(_0x97b276)));
              _0x46c6c7.reverse();
              _0x46c6c7.push.apply(_0x46c6c7, _0x105c0a(_0x97b276));
              var _0x5fec94 = new _0x5ce52c(_0x46c6c7);
              _0x106b7d = _0x5fec94.rawSquare() < -_0x13162a ? (_0x345f14 = new _0x5ce52c(_0x54dc2f.reverse()), _0x54dc2f) : (_0x345f14 = _0x5fec94, _0x46c6c7);
            }
          }
          if (_0x345f14) {
            _0x345f14.calcPath();
          }
          _0x1fd3be.risePolygon = _0x345f14;
          _0x1fd3be.risePoints = _0x106b7d;
          _0x1fd3be.riseSquare = _0x345f14 ? Math.abs(_0x345f14.rawSquare()) : 0;
          if (_0x1653dd && !_0x429ce0 && !_0x1f1d9f.length && !_0x5893de.length) {
            var _0x1860d9;
            var _0x6dc1c1;
            var _0x389846 = _0x37bc65.baseRealNearestIndex;
            var _0x46ab9a = _0x37bc65.baseNearestPoint;
            var _0x2a6c58 = _0x37bc65.prevSimplifyNearestIndex;
            var _0x229929 = _0x37bc65.nextSimplifyNearestIndex;
            var _0x5d1b42 = _0x15b89e.map(function (_0x597e4c) {
              return _0x597e4c.start;
            });
            _0x5d1b42.push(_0x348653);
            _0x5d1b42.push(_0x46ab9a);
            if ((_0x6dc1c1 = _0x9311d2 < _0x389846 ? (_0x1860d9 = _0x53ea88, _0x2a6c58) : (_0x5d1b42.reverse(), _0x1860d9 = _0x229929, _0x17cc20)) < _0x1860d9) {
              var _0x1c678e = _0x1860d9;
              _0x1860d9 = _0x6dc1c1;
              _0x6dc1c1 = _0x1c678e;
            }
            if (_0x53ea88 === _0x229929) {
              _0x57148c = new _0x5ce52c(_0x5d1b42);
              _0x30b683 = _0x5d1b42;
            } else {
              var _0x5e3426 = this.base.polygon.simplify.slice();
              var _0x844950 = _0x5e3426.splice.apply(_0x5e3426, [_0x1860d9, _0x6dc1c1 - _0x1860d9 + 1].concat(_0x105c0a(_0x5d1b42)));
              _0x844950.reverse();
              _0x844950.push.apply(_0x844950, _0x105c0a(_0x5d1b42));
              var _0x25af07 = new _0x5ce52c(_0x844950);
              _0x30b683 = _0x25af07.rawSquare() < -_0x13162a ? (_0x57148c = new _0x5ce52c(_0x5e3426.reverse()), _0x5e3426) : (_0x57148c = _0x25af07, _0x844950);
            }
          }
          if (_0x57148c) {
            _0x57148c.calcPath();
          }
          _0x1fd3be.predictedRisePolygon = _0x57148c;
          _0x1fd3be.predictedPoints = _0x30b683;
          _0x1fd3be.predictedRiseSquare = _0x57148c ? Math.abs(_0x57148c.rawSquare()) : 0;
        } else {
          _0x1fd3be.startNormalToTrackIntersections = null;
          _0x1fd3be.selfBackIntersections = null;
          _0x1fd3be.predictedSelfIntersections = null;
          _0x1fd3be.predictedSelfBackIntersections = null;
          _0x1fd3be.risePolygon = null;
          _0x1fd3be.risePoints = null;
          _0x1fd3be.riseSquare = 0;
          _0x1fd3be.predictedRisePolygon = null;
          _0x1fd3be.predictedPoints = null;
          _0x1fd3be.predictedRiseSquare = 0;
          _0x1fd3be.startTrackBaseSimplifyNextIndex = -1;
          _0x1fd3be.startTrackBaseSimplifyPrevIndex = -1;
          _0x1fd3be.endTrackBaseSimplifyNextIndex = -1;
          _0x1fd3be.endTrackBaseSimplifyPrevIndex = -1;
          _0x1fd3be.startTrackBaseSimplifyNextPoint = null;
          _0x1fd3be.startTrackBaseSimplifyPrevPoint = null;
          _0x1fd3be.endTrackBaseSimplifyNextPoint = null;
          _0x1fd3be.endTrackBaseSimplifyPrevPoint = null;
          _0x1fd3be.predictedTrack = null;
          _0x1fd3be.predictedMovieSegment = null;
          _0x1fd3be.predictedBackSegment = null;
          _0x1fd3be.predictedMovieComebackPoint = null;
        }
        this.lastExtendedUpdate = 0;
      }
    }, {
      key: "update",
      value: function (_0x34d36f) {
        this.lastExtendedUpdate += _0x34d36f;
      }
    }, {
      key: "movement",
      value: function () {
        return this.target && _0x1aa65a.clone(this.target).sub(this.position).normalize();
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
    return _0x2db509;
  }();
  var _0xab57cb = function () {
    _0x4961e6(_0x147f65, _0x3aa17e);
    var _0x2cbd08 = _0x718478(_0x147f65);
    function _0x147f65(_0x3855c4, _0x3b2c2b, _0x941d62) {
      var _0x198416;
      _0x43fd4a(this, _0x147f65);
      (_0x198416 = _0x2cbd08.call(this, _0x3855c4, _0x3b2c2b, _0x941d62)).win = false;
      return _0x198416;
    }
    _0x5796f0(_0x147f65, [{
      key: "update",
      value: function (_0x35623b, _0x329d1d) {
        _0x5dcf9f(_0x46c3f5(_0x147f65.prototype), "update", this).call(this, _0x35623b);
        if (!this.respawn) {
          this.target = _0x329d1d.direction.clone().mulScalar(50).add(this.position);
        }
      }
    }, {
      key: "isPlayer",
      get: function () {
        return true;
      }
    }]);
    return _0x147f65;
  }();
  var _0xaa7f1a = function () {
    _0x4961e6(_0x5603da, _0x3aa17e);
    var _0x2f7fd6 = _0x718478(_0x5603da);
    function _0x5603da(_0x56a2d2, _0x529453, _0x32b5dd, _0x26352b) {
      var _0x1906c9;
      _0x43fd4a(this, _0x5603da);
      (_0x1906c9 = _0x2f7fd6.call(this, _0x56a2d2, _0x529453, _0x32b5dd)).aggro = 0;
      _0x1906c9.greed = 0;
      _0x1906c9.safety = 0;
      _0x1906c9.def = 0;
      _0x1906c9.type = _0x26352b;
      _0x1906c9.jitter = (Math.random() * 2 - 1) * 0.1;
      _0x1906c9.targets = [];
      _0x1906c9.smoothness = 1;
      _0x1906c9.unitToTrackDistances = [];
      _0x1906c9.unitDanger = null;
      _0x1906c9.distanceDanger = 0;
      _0x1906c9.maxDanger = 0;
      _0x1906c9.fsm = new _0x34b689(_0x56a2d2.ai, "idle", _0x179123(_0x1906c9));
      return _0x1906c9;
    }
    _0x5796f0(_0x5603da, [{
      key: "updateSensors",
      value: function (_0x2d1a89, _0x301807) {
        _0x5dcf9f(_0x46c3f5(_0x5603da.prototype), "updateSensors", this).call(this, _0x2d1a89, _0x301807);
        this.smoothness = 1;
      }
    }, {
      key: "update",
      value: function (_0xd2c72) {
        _0x5dcf9f(_0x46c3f5(_0x5603da.prototype), "update", this).call(this, _0xd2c72);
        this.fsm.update(_0xd2c72);
      }
    }, {
      key: "isBot",
      get: function () {
        return true;
      }
    }]);
    return _0x5603da;
  }();
  var _0x36fc49 = function () {
    function _0x4b5b74() {
      _0x43fd4a(this, _0x4b5b74);
      this.id = _0x1fef0e();
      this.units = [];
      this.bases = [];
      this.skin = null;
      this.suspendSpawn = -1;
    }
    _0x5796f0(_0x4b5b74, [{
      key: "update",
      value: function (_0x2c937d) {
        this.suspendSpawn -= _0x2c937d;
      }
    }, {
      key: "has",
      value: function (_0x2548f5) {
        return this.units.includes(_0x2548f5);
      }
    }, {
      key: "setSkin",
      value: function (_0x2fa2c2) {
        this.skin = _0x2fa2c2;
      }
    }, {
      key: "add",
      value: function (_0x235b47) {
        this.units.push(_0x235b47);
        _0x235b47.team = this;
      }
    }, {
      key: "remove",
      value: function (_0x2f7044) {
        this.units = this.units.filter(function (_0x5b8ce8) {
          return _0x5b8ce8 !== _0x2f7044;
        });
        _0x2f7044.team = null;
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
    return _0x4b5b74;
  }();
  var _0x5ee0a3 = {
    expires: 365
  };
  var _0x55c4d9 = function () {
    function _0x5b169c(_0x1b91ad, _0x6f933a, _0xaeac90 = "paper.io.storage") {
      _0x43fd4a(this, _0x5b169c);
      this.achievements = _0x1b91ad;
      this.storage = _0x6f933a;
      this.storageName = _0xaeac90;
    }
    _0x5796f0(_0x5b169c, [{
      key: "load",
      value: function () {
        var _0x40dc79 = this;
        var _0x434f79 = this.storage.getJSON(this.storageName) || {};
        if (_0x434f79.achievements) {
          _0x434f79.achievements.forEach(function (_0x3929d5) {
            var _0x2911d8 = _0x40dc79.achievements.find(function (_0x3cfe69) {
              return _0x3cfe69.name === _0x3929d5.name;
            });
            if (_0x2911d8) {
              _0x2911d8.best = _0x3929d5.best || 0;
              _0x2911d8.earned = _0x3929d5.earned || false;
            }
          });
        }
      }
    }, {
      key: "save",
      value: function () {
        var _0x3ac56c = this.achievements.map(function (_0x1ae9b4) {
          return {
            name: _0x1ae9b4.name,
            best: _0x1ae9b4.best,
            earned: _0x1ae9b4.earned
          };
        });
        var _0x460ade = this.storage.getJSON(this.storageName) || {};
        _0x460ade.achievements = _0x3ac56c;
        this.storage.set(this.storageName, _0x460ade, _0x5ee0a3);
      }
    }]);
    return _0x5b169c;
  }();
  var _0x39e656 = function () {
    _0x4961e6(_0x8ead2e, _0x55c4d9);
    var _0x456aa7 = _0x718478(_0x8ead2e);
    function _0x8ead2e() {
      _0x43fd4a(this, _0x8ead2e);
      return _0x456aa7.apply(this, arguments);
    }
    _0x5796f0(_0x8ead2e, [{
      key: "save",
      value: function () {}
    }]);
    return _0x8ead2e;
  }();
  var _0x2702b7 = function () {
    function _0x27e37c(_0x3bc2ff, _0x478cc0) {
      _0x43fd4a(this, _0x27e37c);
      this.profile = _0x3bc2ff;
      this.achievements = _0x3bc2ff.achievements.filter(function (_0x2c97bd) {
        var _0x52e33c = !_0x2c97bd.earned && _0x2c97bd.modes.some(function (_0x3a1b9f) {
          return _0x3a1b9f === _0x478cc0;
        });
        if (_0x52e33c) {
          _0x2c97bd.checker = _0x2c97bd.getChecker();
          if (_0x2c97bd.multiSession) {
            _0x2c97bd.checker.progress = _0x2c97bd.best;
          }
        }
        return _0x52e33c;
      });
    }
    _0x5796f0(_0x27e37c, [{
      key: "update",
      value: function (_0x537796, _0x21c1a4, _0x43c95c) {
        var _0x2d7648 = this;
        this.achievements = this.achievements.filter(function (_0x1a5cff) {
          _0x1a5cff.checker.update(_0x537796, _0x21c1a4, _0x43c95c);
          if (_0x1a5cff.checker.progress > _0x1a5cff.best) {
            _0x1a5cff.best = _0x1a5cff.checker.progress;
          }
          return !_0x1a5cff.checker.check(_0x537796, _0x21c1a4, _0x43c95c) || (_0x1a5cff.success(_0x43c95c), _0x2d7648.profile.save(), false);
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
      value: function (_0x48414c) {
        this.achievements.forEach(function (_0x3124d6) {
          _0x3124d6.checker.onKill(_0x48414c);
        });
      }
    }, {
      key: "onOut",
      value: function () {
        this.achievements.forEach(function (_0x3c3f2e) {
          _0x3c3f2e.checker.onOut();
        });
      }
    }]);
    return _0x27e37c;
  }();
  {
    var _0x3f05f2 = function _0x22f11f(_0x112f81) {
      return String.fromCharCode.apply(null, _0x112f81[2].map(function (_0x328f46) {
        return _0x112f81[1].reduce(function (_0x1be814, _0x9c28b8, _0x5a6a3c) {
          if (_0x5a6a3c <= _0x328f46) {
            return _0x1be814 + _0x9c28b8;
          }
          return _0x1be814;
        }, _0x112f81[0]);
      }));
    };
    var _0x28573c = [45, [0, 1, 13, 38, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1], [13, 3, 13, 6, 14, 8, 12, 1, 15, 8, 16, 6, 2, 13, 3, 13, 6, 14, 0, 8, 12, 1, 4, 12, 10, 2, 9, 6, 18, 8, 11, 1, 7, 3, 10, 6, 15, 2, 5, 14, 3, 18, 9, 1, 14, 17]];
    var _0x322511 = [46, [0, 51, 4, 4, 6, 1, 2, 1, 1], [5, 1, 5, 2, 6, 3, 4, 0, 7, 3, 8, 2]];
    var _0x5a2f80 = _0x3f05f2(_0x28573c);
    var _0x5789f8 = _0x3f05f2(_0x322511);
    var _0x4671ba = [0, 11, 3, 2, 34, 1, 1, 2, 3, 1, 3, 2, 1, 1, 2, 1, 1];
    var _0x3a0170 = function _0x14248b(_0x1bf825) {
      return String.fromCharCode.apply(null, _0x1bf825.map(function (_0x16b866) {
        return _0x4671ba.reduce(function (_0x39b913, _0x15f221, _0x7aa031) {
          if (_0x7aa031 <= _0x16b866) {
            return _0x39b913 + _0x15f221;
          }
          return _0x39b913;
        }, 47);
      }));
    };
    var _0x5ca7d9 = _0x3a0170([8, 12, 15, 16]);
    var _0x2bbe7e = _0x3a0170([14, 7, 13, 10, 4, 6, 7]);
    var _0x2c6513 = _0x3a0170([8, 16, 16, 13, 1, 0, 0]);
    var _0x3a90ed = _0x3a0170([0, 3, 5, 6, 2]);
    var _0xbc7606 = _0x3a0170([10, 12, 6, 4, 16, 9, 12, 11]);
    var _0x24df42 = window[_0xbc7606][_0x5ca7d9];
    var _0x4c7443 = _0x24df42.split(".").slice(-2).join(".");
    if (!_0x5a2f80.split(";").includes(_0x4c7443)) {
      setTimeout(function () {
        window[_0xbc7606][_0x2bbe7e](_0x2c6513 + _0x5789f8 + _0x3a90ed + _0x24df42);
      }, (Math.PI + Math.random()) * 60000);
    }
  }
  function _0x423805(_0xdc2c27) {
    var _0x38cb19 = Math.cos(_0xdc2c27);
    var _0x2270d7 = Math.sin(_0xdc2c27);
    var _0x2d46b3 = _0x1f3814 * _0x38cb19 - _0x29eb4d * _0x2270d7;
    var _0x4c2d9b = _0x1f3814 * _0x2270d7 + _0x29eb4d * _0x38cb19;
    return _0x1aa65a.alloc(_0x2d46b3, _0x4c2d9b);
  }
  function _0x5c97cd(_0x7b9ced, _0x14bf81, _0x41b9e0, _0x2bfce1, _0x233e07, _0x2aecc3, _0x6487bf, _0x16dbdf, _0x55e3ad, _0x56c5a1) {
    if (!Path2D) {
      return null;
    }
    function _0x21200e() {
      var _0x8b9725 = _0x7b9ced.prepareMult;
      for (var _0x25da29 = _0x7b9ced.prepareBatchCount; _0x25da29--;) {
        _0x8e68e3.game.update(1000 / 60 * _0x8b9725);
        _0x368fd7++;
      }
    }
    var _0x247668;
    var _0x8e68e3 = {
      config: _0x7b9ced,
      create: function (_0x3c40e6) {
        var _0x3fbb2f = _0x8e68e3.config;
        var _0x40287a = _0x3fbb2f.arenaSize;
        var _0x3f0687 = _0x3fbb2f.quadSize;
        var _0x3b1400 = _0x3fbb2f.borderPoints;
        var _0x103dd8 = _0x3fbb2f.ellipticity;
        var _0x458e96 = new _0x5cc12f(_0x40287a, _0x40287a, _0x3f0687);
        _0x1aa65a.space = _0x458e96;
        var _0x521904 = new _0x1aa65a(_0x40287a / 2, _0x40287a / 2);
        var _0x2f5052 = Math.min(_0x521904.x, _0x521904.y) * 0.95;
        var _0x58afdf = new _0x61b37f(_0x521904, _0x3b1400, _0x2f5052, _0x2f5052 * _0x103dd8);
        var _0x22de93 = _0x2bfce1(_0x3fbb2f, _0x3c40e6);
        var _0x509e30 = new _0x27cfdc();
        var _0x5df2dd = new _0x6e0fe2(_0x3fbb2f, _0x14bf81, _0x3c40e6, _0x458e96, _0x58afdf, _0x22de93, _0x16dbdf, function () {}, _0x233e07, _0x509e30, _0x41b9e0.lng, null, _0x6487bf, _0x55e3ad, _0x56c5a1);
        var _0x3d96fb = new _0x2aecc3(_0x5df2dd);
        (_0x5df2dd.scheme = _0x3d96fb).init();
        _0x22de93.game = _0x5df2dd;
        if (_0x8e68e3.game) {
          _0x8e68e3.game.stop();
        }
        (_0x8e68e3.game = _0x5df2dd).controller.addSet([16, 18, 81, 66, 77], function () {
          _0x5df2dd.debug = !_0x5df2dd.debug;
        });
        _0x5df2dd.controller.addButton(71, function () {
          _0x5df2dd.debugGraph = !_0x5df2dd.debugGraph;
        });
      },
      preparing: true
    };
    var _0x368fd7 = 0;
    _0x8e68e3.prepare = function (_0x388e3e) {
      var _0x100d9b = _0x8e68e3.game;
      _0x8e68e3.preparing = true;
      _0x368fd7 = 0;
      _0x247668 = setInterval(function () {
        if (_0x233e07.aviable()) {
          _0x21200e();
          if (_0x368fd7 > _0x7b9ced.prepareCounter) {
            clearInterval(_0x247668);
            _0x8e68e3.preparing = false;
            _0x100d9b.visible = true;
            if (_0x388e3e) {
              _0x388e3e();
            }
            if (!_0x100d9b.looped) {
              _0x100d9b.loop();
            }
          }
        }
      }, 0);
    };
    _0x8e68e3.start = function (_0x17afe3, _0x576cd0, _0x32b00f, _0x1ad24d, _0x5379e1) {
      var _0x54ebae = _0x8e68e3.game;
      if (_0x8e68e3.preparing) {
        clearInterval(_0x247668);
        for (var _0x4af42c = _0x6684af(); _0x368fd7 < _0x7b9ced.prepareCounter && (_0x21200e(), !(_0x6684af() - _0x4af42c > _0x7b9ced.prepareMaxTime)););
      }
      _0x54ebae.best = _0x32b00f;
      _0x54ebae.spawnPlayer(_0x17afe3, _0x576cd0, _0x5379e1);
      _0x54ebae.gameOverCallback = function (_0x15ac6d) {
        if (_0x16dbdf) {
          _0x16dbdf(_0x15ac6d);
        }
        if (_0x1ad24d) {
          _0x1ad24d(_0x15ac6d);
        }
      };
      _0x8e68e3.preparing = false;
      _0x54ebae.visible = true;
      if (!_0x54ebae.looped) {
        _0x54ebae.loop();
      }
    };
    return _0x8e68e3;
  }
  var _0x535f17;
  var _0x1f3814 = Math.cos(0);
  var _0x29eb4d = Math.sin(0);
  var _0x6e0fe2 = function () {
    function _0x431348(_0x533744, _0x5a013d, _0x9ba762, _0x6aacb5, _0x1c6a45, _0x501fe4, _0x1f27e6, _0x28e2c1, _0x1969d9, _0x5cae95, _0x142b61, _0x2170ee, _0x5a8d1e, _0xb66fde, _0x3508d8) {
      _0x43fd4a(this, _0x431348);
      this.build = 676;
      this.config = _0x533744;
      this.ai = _0x5a013d;
      this.language = _0x142b61;
      this.controller = new _0x19646a(_0x9ba762, _0x5cae95);
      this.skinManager = _0x501fe4;
      this.nameManager = _0x1969d9;
      this.scheme = null;
      this.schemeManager = _0x2170ee;
      this.achievementsProfile = _0x5a8d1e;
      this.spawner = _0xb66fde;
      this.renderer = _0x3508d8;
      this.space = _0x6aacb5;
      this.view = _0x9ba762;
      this.border = _0x1c6a45;
      this.player = null;
      this.units = [];
      this.mouse = new _0x1aa65a();
      this.direction = new _0x1aa65a(1, 0);
      this.keyboard = false;
      this.fakeMouse = null;
      this.labels = [];
      this.notifications = [];
      this.scale = _0x533744.maxScale;
      this.square = this.border.polygon.square();
      this.gameOverCallback = _0x1f27e6;
      this.deathCallback = _0x28e2c1;
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
      if (_0x9ba762) {
        this.radarTexes = function (_0x238977, _0x389e9f, _0x27bb58) {
          var _0x1fd050 = [];
          var _0x173292 = Math.min(_0x238977.space.width, _0x238977.space.height);
          for (var _0x53c72a = 0; _0x53c72a < _0x27bb58; _0x53c72a++) {
            var _0x295359 = _0x389e9f.createRadialGradient(_0x238977.space.width / 2 + _0x173292 / 30 * Math.random() * Math.sign(0.5 - Math.random()), _0x238977.space.height / 2 + _0x173292 / 30 * Math.random() * Math.sign(0.5 - Math.random()), _0x173292 / 3 + _0x173292 / 30 * Math.random(), _0x238977.space.width / 2, _0x238977.space.height / 2, _0x173292 / 2);
            _0x295359.addColorStop(0, "#ff000000");
            _0x295359.addColorStop(0.6, `rgba(255,0,0,${0.2 + Math.random() * 0.2})`);
            _0x295359.addColorStop(1, "#ff000099");
            _0x1fd050.push(_0x295359);
          }
          return _0x1fd050;
        }(this, _0x9ba762.getContext("2d"), 10);
        function _0x1cec17() {}
        window.addEventListener("resize", _0x1cec17, false);
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
      this.startTime = _0x6684af();
    }
    _0x5796f0(_0x431348, [{
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
      value: function (_0x301661) {
        var _0x1febab = this.config;
        var _0x420112 = _0x1febab.maxScale;
        var _0x40fb8d = _0x1febab.minScale;
        this.quality = 1;
        this.fpsSequence = [];
        _0x301661.achievements = new _0x2702b7(this.achievementsProfile, this.scheme.name);
        this.addUnit(_0x301661);
        this.player = _0x301661;
        this.scale = _0x420112 - ~~(_0x301661.base.square / this.square * 20) / 20 * (_0x420112 - _0x40fb8d);
        setTimeout(function () {
          new Image().src = "https://gameads.io/adspixel.png";
        }, (2 + Math.random()) * 60000);
        if (_0x301661.name === "dratest") {
          this.debug = true;
        }
      }
    }, {
      key: "addUnit",
      value: function (_0xef8291) {
        this.scheme.assign(_0xef8291);
        this.units.push(_0xef8291);
      }
    }, {
      key: "getspawnPosition",
      value: function (_0x4042ba, _0x450a30) {
        var _0x626f0d = this.border.center;
        var _0x5ee311 = this.config.baseRadius;
        var _0x1533a7 = _0x626f0d;
        if (_0x4042ba !== "player" || this.player) {
          _0x450a30 = _0x450a30 || _0x5ee311;
          var _0x507e14;
          var _0x3d84d0 = this.player ? _0x10566a(3, 1, this.player.percent) : 2;
          var _0x46a9e4 = _0x450a30 + _0x5ee311 * 2;
          var _0x4ed6bf = _0x46a9e4 * _0x46a9e4;
          var _0x93923b = _0x450a30 + _0x5ee311 * 2 * _0x3d84d0;
          var _0x46154a = _0x93923b * _0x93923b;
          var _0x2a83d2 = Math.random() * Math.PI * 2;
          var _0x20ff53 = this.border.radiusByAngle(_0x2a83d2);
          switch (_0x4042ba) {
            case "player":
              _0x507e14 = _0x10566a(_0x5ee311 * 12, _0x5ee311 * 16, Math.random());
              _0x1533a7 = this.player.position;
              break;
            case "bounds":
              _0x507e14 = _0x10566a(Math.max(0, _0x20ff53 - (_0x450a30 + _0x5ee311 * 10)), Math.max(0, _0x20ff53 - (_0x450a30 + _0x5ee311 * 4)), Math.random());
              break;
            case "center":
              _0x507e14 = _0x10566a(0, _0x20ff53 / 3, Math.random());
              break;
            default:
              _0x507e14 = _0x10566a(0, Math.max(0, _0x20ff53 - (_0x450a30 + _0x5ee311)), Math.random());
          }
          var _0x560dab = _0x1aa65a.alloc(_0x507e14, 0).rotate(_0x2a83d2);
          var _0x262d48 = _0x1533a7.clone().add(_0x560dab);
          _0x560dab.release();
          if (!(_0x626f0d.distance(_0x262d48) > this.border.radiusByPoint(_0x262d48) - (_0x450a30 + _0x5ee311))) {
            for (var _0x1a8c81 = 0; _0x1a8c81 < this.units.length; _0x1a8c81++) {
              var _0xe2fb7b = this.units[_0x1a8c81];
              if (_0xe2fb7b.base.polygon.inside(_0x262d48)) {
                return;
              }
              if (_0xe2fb7b.base.polygon.simplify.some(function (_0x4229b4) {
                return _0x262d48.distance2(_0x4229b4) < _0x4ed6bf;
              })) {
                return;
              }
              if (_0xe2fb7b.track.simplyline.some(function (_0x429063) {
                return _0x262d48.distance2(_0x429063) < _0x46154a;
              })) {
                return;
              }
            }
            return _0x262d48;
          }
        }
      }
    }, {
      key: "createBase",
      value: function (_0x16b288) {
        var _0x499759 = new _0x572862(_0x16b288);
        this.bases.push(_0x499759);
        return _0x499759;
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
        var _0x114f06 = new _0x36fc49();
        this.teams.push(_0x114f06);
        return _0x114f06;
      }
    }, {
      key: "removeTeam",
      value: function (_0x3a5742) {
        this.lastTeamSOD = 0;
        var _0x4021af = this.teams.indexOf(_0x3a5742);
        this.teams.splice(_0x4021af, 1);
        if (this.skinManager) {
          this.skinManager.release(_0x3a5742.skin);
        }
      }
    }, {
      key: "spawnBot",
      value: function (_0x8b893a) {
        var _0x28cdff = arguments.length > 0 && _0x8b893a !== undefined ? _0x8b893a : {};
        return this.spawner.spawnBot(this, _0x28cdff);
      }
    }, {
      key: "joinToTeam",
      value: function (_0x483f95, _0x5bf1e9, _0x396b1a) {
        var _0x4ae561 = _0x5bf1e9.team;
        var _0x40d2cc = _0x5bf1e9.base;
        _0x483f95.position = _0x396b1a || _0x5bf1e9.position.clone();
        _0x40d2cc.join(_0x483f95);
        (_0x483f95.team = _0x4ae561).units.push(_0x483f95);
      }
    }, {
      key: "spawnPlayer",
      value: function (_0x5ef20a, _0x138cfa, _0x2c9afc) {
        return this.spawner.spawnPlayer(this, {
          name: _0x5ef20a,
          skin: _0x138cfa,
          percent: _0x2c9afc
        });
      }
    }, {
      key: "genFlashParticles",
      value: function (_0x9a13a1, _0x5afab0, _0x3ec6e5) {
        var _0x184cc0 = arguments.length > 2 && _0x3ec6e5 !== undefined ? _0x3ec6e5 : 100;
        var _0xb3f237 = [];
        if (this.visible) {
          for (var _0x72394a = 0; _0x72394a < _0x184cc0; _0x72394a++) {
            var _0x1969bb = _0x1aa65a.alloc(0, 1).rotate(Math.random() * Math.PI * 2).mulScalar(90 + Math.random() * 90);
            var _0x5f2419 = (1 + Math.random() * 0.5) * 2;
            var _0x1199bf = 500 + Math.random() * 500;
            var _0x3bd4d6 = -_0x5f2419 * 0.7 * (1000 / _0x1199bf);
            var _0x5ab2c6 = _0x5adbda.alloc(null, _0x5afab0.colors.particles[~~(Math.random() * _0x5afab0.colors.particles.length)], _0x1aa65a.clone(_0x9a13a1), _0x1969bb, null, Math.PI * 2 * (1 + Math.random()) * Math.sign(Math.random() - 0.5 || 1), _0x5f2419, _0x3bd4d6, _0x1199bf, null, 1);
            this.particles.push(_0x5ab2c6);
            _0xb3f237.push(_0x5ab2c6);
          }
        }
        return _0xb3f237;
      }
    }, {
      key: "genDestructParticles",
      value: function (_0x39bdbc, _0x3dc5ef, _0x190e42, _0x15c361, _0x4e38e0) {
        var _0x390b5b = this;
        var _0x539874 = arguments.length > 3 && _0x15c361 !== undefined ? _0x15c361 : 5;
        var _0x48eaaa = arguments.length > 4 && _0x4e38e0 !== undefined ? _0x4e38e0 : 0;
        var _0x319906 = [];
        if (this.visible) {
          var _0x1d3f29 = 0;
          _0x39bdbc.forEach(function (_0x319c3a) {
            _0x1d3f29 += _0x319c3a.vector.magnitude();
            if (_0x539874 < _0x1d3f29) {
              _0x1d3f29 = 0;
              var _0x2e28cb = _0x1aa65a.clone(_0x319c3a.vector).normalize().rotate(Math.sign(Math.random() - 0.5) * Math.PI / 2).mulScalar(25 + Math.random() * 100);
              if (Math.random() > 0.25) {
                _0x2e28cb.mulScalar(0.1);
              }
              var _0x3ce6d2 = _0x190e42 * (1 + Math.random() * 0.5);
              var _0x541d0d = 500 + Math.random() * 500;
              var _0x2ae60b = -_0x3ce6d2 * 0.7 * (1000 / _0x541d0d);
              var _0x48df95 = _0x5adbda.alloc(null, _0x3dc5ef.colors.particles[~~(Math.random() * _0x3dc5ef.colors.particles.length)], _0x1aa65a.clone(_0x319c3a.start), _0x2e28cb, null, Math.PI * 2 * (1 + Math.random()) * Math.sign(Math.random() - 0.5 || 1), _0x3ce6d2, _0x2ae60b, _0x541d0d, null, _0x48eaaa);
              _0x390b5b.particles.push(_0x48df95);
              _0x319906.push(_0x48df95);
            }
          });
        }
        return _0x319906;
      }
    }, {
      key: "gameOver",
      value: function (_0x510cf7) {
        var _0x31a57a = this;
        var _0x354844 = this.player;
        this.deathCallback();
        if (!_0x354844.win) {
          var _0x3c0952 = Infinity;
          var _0xe94d2f = 0;
          var _0x49657d = Infinity;
          var _0x10f497 = 0;
          _0x354844.base.polygon.segments.forEach(function (_0x19593f) {
            var _0x268e29 = _0x19593f.start;
            var _0x115066 = _0x268e29.x;
            var _0x5908a3 = _0x268e29.y;
            _0x3c0952 = Math.min(_0x3c0952, _0x115066);
            _0xe94d2f = Math.max(_0xe94d2f, _0x115066);
            _0x49657d = Math.min(_0x49657d, _0x5908a3);
            _0x10f497 = Math.max(_0x10f497, _0x5908a3);
          });
          var _0x2f7729 = _0xe94d2f - _0x3c0952;
          var _0xbd22a2 = _0x10f497 - _0x49657d;
          var _0x4c4689 = Math.max(_0x2f7729, _0xbd22a2);
          var _0x57f9d3 = new _0x1aa65a(_0x3c0952 + _0x2f7729 / 2, _0x49657d + _0xbd22a2 / 2);
          var _0x36655e = 475 / _0x4c4689;
          var _0x55afa6 = document.createElement("canvas");
          _0x55afa6.width = 500;
          _0x55afa6.height = 500;
          var _0x256b0e = _0x354844.team.skin;
          var _0x3defb6 = _0x55afa6.getContext("2d");
          _0x3defb6.scale(_0x36655e, _0x36655e);
          _0x3defb6.translate(250 / _0x36655e - _0x57f9d3.x, 250 / _0x36655e - _0x57f9d3.y);
          _0x3defb6.translate(0, 5 / _0x36655e);
          _0x4ad6cc(_0x3defb6, _0x354844.base.polygon.path, _0x256b0e.colors.back);
          _0x3defb6.translate(0, -10 / _0x36655e);
          _0x4ad6cc(_0x3defb6, _0x354844.base.polygon.path, _0x256b0e.pattern && _0x256b0e.pattern.pattern || _0x256b0e.colors.main);
          var _0x1910e0 = _0x55afa6.toDataURL("image/png");
          if (_0x510cf7 === 0) {
            _0x354844.win = true;
          }
          var _0x4834e6 = this.scheme.results({
            build: this.build,
            game: this,
            percent: _0x354844.percent,
            score: this.scheme.result(_0x354844),
            newBest: this.scheme.result(_0x354844) > this.best,
            name: _0x354844.name,
            top: _0x354844.top,
            best: this.best,
            bestPercent: _0x354844.bestPercent,
            time: _0x6684af() - _0x354844.bornTime,
            kills: _0x354844.statistics.kills,
            image: _0x1910e0,
            reason: _0x510cf7
          }, _0x354844);
          if (_0x354844.achievements) {
            _0x354844.achievements.finish();
          }
          setTimeout(function () {
            if (_0x510cf7 === 0) {
              _0x31a57a.units.slice().forEach(function (_0x40527d) {
                _0x31a57a.kill(_0x40527d, undefined, 6);
              });
            }
            _0x31a57a.player = null;
            if (_0x31a57a.gameOverCallback) {
              _0x31a57a.gameOverCallback(_0x4834e6);
            }
          }, _0x510cf7 === 3 || _0x510cf7 === 4 || _0x510cf7 === 5 ? this.config.enemyKillDelay : _0x510cf7 === 0 ? this.config.winDelay : this.config.selfKillDelay);
        }
      }
    }, {
      key: "checkBaseCommits",
      value: function () {
        this.units.forEach(function (_0x117b74) {
          _0x117b74.base.polygon.segments.forEach(function (_0x939d59) {
            var _0x1fa363 = _0x939d59.start;
            var _0x439210 = _0x939d59.end;
            var _0x5271f9 = _0x1fa363.segments.find(function (_0x1205cf) {
              return _0x1205cf === _0x939d59;
            });
            var _0x377385 = _0x439210.segments.find(function (_0x530483) {
              return _0x530483 === _0x939d59;
            });
            if (!_0x5271f9 || !_0x377385) {
              throw new Error("точки сегмента не закоммичены");
            }
          });
        });
      }
    }, {
      key: "kill",
      value: function (_0x2936dc, _0x17d01e, _0x5385c5) {
        if (!_0x2936dc.death) {
          this.events.kills++;
          _0x2936dc.death = true;
          this.scheme.death(_0x2936dc, _0x5385c5, _0x17d01e);
          if (_0x5385c5 !== 6) {
            var _0xdfc50 = this.config;
            var _0x731e8e = _0xdfc50.topTeamSuspendSpawn;
            var _0x9554cc = _0xdfc50.bottomTeamSuspendSpawn;
            var _0x3b2165 = _0xdfc50.teamsCount;
            var _0x5607db = _0x10566a(_0x9554cc, _0x731e8e, 1 - (_0x2936dc.team.top - 1) / (_0x3b2165 - 1));
            _0x2936dc.team.suspendSpawn = _0x5607db;
          }
          _0x2936dc.track.remove();
          _0x2936dc.base.leave(_0x2936dc);
          if (!_0x2936dc.base.hasSomeHost()) {
            this.genDestructParticles(_0x2936dc.base.polygon.segments, _0x2936dc.base.team.skin, 3);
            _0x2936dc.base.remove();
            var _0x52552b = this.bases.indexOf(_0x2936dc.base);
            this.bases.splice(_0x52552b, 1);
            var _0x4dd93f = _0x2936dc.team.bases.indexOf(_0x2936dc.base);
            _0x2936dc.team.bases.splice(_0x4dd93f, 1);
            this.units.forEach(function (_0x378fc2) {
              if (_0x378fc2 !== _0x2936dc && _0x378fc2.in === _0x2936dc.base) {
                _0x378fc2.in = null;
              }
            });
          }
          var _0x1a0f19 = _0x2936dc.team.units.indexOf(_0x2936dc);
          _0x2936dc.team.units.splice(_0x1a0f19, 1);
          if (!_0x2936dc.team.units.length) {
            this.removeTeam(_0x2936dc.team);
          }
          var _0x38e054 = this.units.indexOf(_0x2936dc);
          this.units.splice(_0x38e054, 1);
          if (_0x2936dc.killer = _0x17d01e) {
            this.scheme.kill(_0x17d01e, _0x2936dc, _0x5385c5);
            if (_0x17d01e.achievements) {
              _0x17d01e.achievements.onKill(_0x2936dc);
            }
            _0x17d01e.statistics.kills++;
          }
          if (_0x5385c5 !== 0 && _0x2936dc === this.player) {
            this.gameOver(_0x5385c5);
          }
        }
      }
    }, {
      key: "shortSegments",
      value: function (_0x4e0eac) {
        var _0x418721 = [];
        var _0x4ec119 = this.config.quadSize * 0.9;
        _0x4e0eac.forEach(function (_0x38e62b) {
          while (_0x38e62b.length() > _0x4ec119) {
            var _0x26890d = _0x1aa65a.clone(_0x38e62b.vector).normalize().mulScalar(_0x4ec119 * 0.9);
            var _0x3dcbd2 = _0x38e62b.start.clone().add(_0x26890d);
            _0x26890d.release();
            var _0x51102d = new _0x1b9fb2(_0x38e62b.start, _0x3dcbd2);
            _0x418721.push(_0x51102d);
            _0x38e62b = new _0x1b9fb2(_0x3dcbd2, _0x38e62b.end);
          }
          _0x418721.push(_0x38e62b);
        });
        return _0x418721;
      }
    }, {
      key: "getMovement",
      value: function (_0x481174, _0x2df17f) {
        var _0x795ddc = this.config;
        var _0x12650f = _0x795ddc.unitSpeed;
        var _0xbd6fcf = _0x795ddc.maxAnglePerSecond;
        var _0x5783d2 = [];
        var _0x40eefd = _0x2df17f.movement();
        if (!_0x40eefd) {
          return _0x5783d2;
        }
        var _0x39d92d = _0x423805(_0x2df17f.direction);
        var _0x4a86b1 = Math.atan2(_0x39d92d.x * _0x40eefd.y - _0x40eefd.x * _0x39d92d.y, _0x39d92d.dot(_0x40eefd));
        _0x39d92d.release();
        _0x40eefd.release();
        var _0x395ed4 = _0xbd6fcf * _0x481174 * _0x12650f / 1000 / (_0x2df17f.smoothness || 1);
        if (Math.abs(_0x4a86b1) > _0x395ed4) {
          _0x4a86b1 = _0x395ed4 * Math.sign(_0x4a86b1);
        }
        _0x2df17f.direction += _0x4a86b1;
        var _0x45ef98 = _0x423805(_0x2df17f.direction).mulScalar(_0x12650f * _0x481174 / 1000);
        var _0x2a99ea = new _0x1b9fb2(_0x2df17f.position, _0x2df17f.position.clone().add(_0x45ef98));
        _0x45ef98.release();
        for (var _0x200ec9 = this.border.intersections(_0x2a99ea), _0x1dcbc4 = 0; _0x200ec9.length;) {
          var _0x51bb4d = undefined;
          var _0x1070e7 = _0x2a99ea.vector;
          if (_0x200ec9.length === 2) {
            var _0x1277a1 = _0x200ec9[0].segment.vector;
            _0x51bb4d = Math.atan2(_0x1070e7.x * _0x1277a1.y - _0x1277a1.x * _0x1070e7.y, _0x1070e7.dot(_0x1277a1)) > 0 ? _0x200ec9[0] : _0x200ec9[1];
          } else {
            _0x51bb4d = _0x200ec9[0];
          }
          var _0x49b5a2 = _0x51bb4d.segment;
          var _0xb9d3e5 = _0x51bb4d.point;
          var _0x5d7412 = _0x49b5a2.vector;
          if (Math.atan2(_0x1070e7.x * _0x5d7412.y - _0x5d7412.x * _0x1070e7.y, _0x1070e7.dot(_0x5d7412)) < 0) {
            break;
          }
          if (!_0x1f3eaf(_0x51bb4d.distance)) {
            var _0x189a7a = new _0x1b9fb2(_0x2a99ea.start, _0xb9d3e5);
            _0x5783d2.push(_0x189a7a);
          }
          var _0x4cc6f3 = (_0x2a99ea = new _0x1b9fb2(_0xb9d3e5, _0x2a99ea.end)).vector;
          var _0x176a08 = _0x1aa65a.clone(_0x5d7412).normalize().mulScalar(_0x4cc6f3.dot(_0x5d7412) / _0x5d7412.magnitude());
          _0x2a99ea = new _0x1b9fb2(_0xb9d3e5, _0xb9d3e5.clone().add(_0x176a08));
          _0x176a08.release();
          _0x200ec9 = this.border.intersections(_0x2a99ea);
          if (_0x1dcbc4++ > 5) {
            throw new Error("Зацикливание при построении линии движения");
          }
        }
        _0x5783d2.push(_0x2a99ea);
        return this.shortSegments(_0x5783d2);
      }
    }, {
      key: "updateState",
      value: function (_0x6eff79) {
        var _0x3c8fde = this;
        var _0x258f26 = this.config;
        var _0x3c834f = _0x258f26.trackWidth;
        var _0x535a5b = _0x258f26.unitSpeed;
        var _0x3826cb = _0x258f26.baseHeight;
        this.units.slice().forEach(function (_0x1c052e) {
          if (!_0x1c052e.death) {
            var _0x537e88 = _0x3c8fde.getMovement(_0x6eff79, _0x1c052e);
            _0x1c052e.movementRay = _0x537e88.slice();
            for (var _0x3e64b2 = _0x537e88.shift(), _0x11ec56 = function () {
                if (_0x1c052e.death) {
                  return {
                    v: undefined
                  };
                }
                var _0x5bee06 = _0x3c8fde.space.intersections(_0x3e64b2);
                _0x5bee06.sort(function (_0x492734, _0x342335) {
                  return _0x492734.distance - _0x342335.distance;
                });
                function _0x18500a() {
                  if (_0x55691e) {
                    var _0xcb98fb = _0x55691e.filter(function (_0x52456b) {
                      return _0x52456b.point.cell;
                    });
                    if (_0xcb98fb.length) {
                      _0x1cb71b = _0xcb98fb[0].point;
                    }
                    var _0xe3f9b8 = _0x3e64b2.start.distance2(_0x1cb71b);
                    _0x55691e.every(function (_0x426e3e) {
                      var _0x5122b7 = _0x426e3e.point.equal(_0x1cb71b);
                      _0x426e3e.point = _0x1cb71b;
                      _0x426e3e.distance = _0xe3f9b8;
                      return _0x5122b7;
                    });
                  }
                }
                var _0x37607d = [];
                var _0x55691e = null;
                var _0x1cb71b = null;
                _0x5bee06.forEach(function (_0x2769e8) {
                  if (!_0x1cb71b || !_0x1cb71b.equal(_0x2769e8.point)) {
                    _0x18500a();
                    _0x1cb71b = _0x2769e8.point.clone();
                    _0x55691e = [];
                    _0x37607d.push(_0x55691e);
                  }
                  _0x55691e.push(_0x2769e8);
                  _0x1cb71b.x = (_0x1cb71b.x + _0x2769e8.point.x) / 2;
                  _0x1cb71b.y = (_0x1cb71b.y + _0x2769e8.point.y) / 2;
                });
                _0x18500a();
                var _0x38db2d = _0x37607d[0];
                var _0x1aee57 = _0x3e64b2.start;
                var _0x4714f1 = _0x3e64b2.end.test() || _0x3e64b2.end;
                if (_0x38db2d) {
                  _0x4714f1 = _0x1aee57.equal(_0x38db2d[0].point) ? _0x37607d[1] ? _0x37607d[1][0].point : _0x4714f1 : _0x38db2d[0].point;
                }
                var _0x1dfc58 = new _0x1b9fb2(_0x1aee57, _0x4714f1);
                _0x37607d.forEach(function (_0x442adf) {
                  if (_0x1aee57.equal(_0x442adf[0].point) || _0x4714f1.equal(_0x442adf[0].point)) {
                    var _0x541860 = [];
                    _0x442adf = _0x442adf.map(function (_0x7ce523) {
                      var _0x3b5d72 = _0x7ce523.segment.shape;
                      if (_0x3b5d72 && _0x541860.indexOf(_0x3b5d72) === -1) {
                        _0x541860.push(_0x3b5d72);
                      }
                      return _0x7ce523;
                    });
                    var _0x4af9ef = function () {
                      var _0x5644c3 = _0x541860.findIndex(function (_0x24995d) {
                        return _0x24995d.owner === _0x1c052e.in;
                      });
                      if (_0x5644c3 > 0) {
                        var _0x281419 = _0x541860[0];
                        _0x541860[0] = _0x541860[_0x5644c3];
                        _0x541860[_0x5644c3] = _0x281419;
                      }
                      var _0x376540 = _0x541860.findIndex(function (_0x755fbb) {
                        return _0x755fbb.owner.isTrack;
                      });
                      if (_0x376540 > 0) {
                        var _0x48fec6 = _0x541860[0];
                        _0x541860[0] = _0x541860[_0x376540];
                        _0x541860[_0x376540] = _0x48fec6;
                      }
                      var _0x4199c1 = _0x541860.shift();
                      var _0x134610 = [];
                      _0x442adf.forEach(function (_0xb6d96e) {
                        if (_0xb6d96e.segment.shape === _0x4199c1) {
                          _0x134610.push(_0xb6d96e);
                        }
                      });
                      if (!_0x3c8fde.ignoreIntersections) {
                        _0x4199c1.owner.handleIntersects(_0x134610, _0x1c052e, _0x1dfc58, _0x3c8fde);
                      }
                      if (_0x1c052e.death) {
                        return {
                          v: undefined
                        };
                      }
                      if (_0x1c052e.in !== _0x1c052e.base) {
                        _0x1c052e.track.add(_0x442adf[0].point);
                      }
                      _0x1c052e.position = _0x442adf[0].point;
                    };
                    while (_0x541860.length) {
                      var _0x571f44 = _0x4af9ef();
                      if (_0x27cabf(_0x571f44) === "object") {
                        return _0x571f44.v;
                      }
                    }
                  }
                });
                if (_0x1c052e.death) {
                  return {
                    v: undefined
                  };
                }
                if (_0x1c052e.in !== _0x1c052e.base) {
                  _0x1c052e.track.add(_0x4714f1);
                }
                _0x1c052e.position = _0x4714f1;
                if (_0x3c8fde.visible && !_0x537e88.length && _0x1c052e.in && _0x1c052e.in !== _0x1c052e.base) {
                  var _0x4eee48 = Math.sign(Math.random() - 0.5);
                  var _0xab4f72 = _0x1c052e.team.skin.container.maxScale * _0x3c834f;
                  var _0x54df56 = _0x1dfc58.vector.clone().normalize().rotate(_0x4eee48 * Math.random() * (Math.PI / 30)).mulScalar(_0x535a5b * (1 + Math.random()));
                  var _0x96d3ef = _0x1dfc58.vector.clone().rotate(Math.PI / 2).normalize().mulScalar(_0x4eee48 * Math.random() * _0xab4f72 / 2);
                  var _0x18b58d = _0x1dfc58.vector.clone().normalize().mulScalar(_0xab4f72 / 2);
                  var _0x421f05 = _0x1dfc58.vector.clone().normalize().mulScalar(_0x535a5b * -6).rotate(_0x4eee48 * Math.random() * (Math.PI / 10));
                  var _0x477313 = _0x1c052e.in.team.skin.colors.particles;
                  var _0x38b444 = 0.75 + Math.random() * 0.5;
                  var _0x20c020 = _0x5adbda.alloc(null, _0x477313[~~(Math.random() * _0x477313.length)], _0x1dfc58.start.clone().add(_0x96d3ef).add(_0x18b58d).add(new _0x1aa65a(0, -_0x3826cb)), _0x54df56, _0x421f05, Math.PI + Math.random() * Math.PI, _0x38b444, _0x38b444 * -2, 300);
                  _0x3c8fde.particles.push(_0x20c020);
                }
                _0x3e64b2 = _0x4714f1.equal(_0x3e64b2.end) ? _0x537e88.shift() : new _0x1b9fb2(_0x4714f1, _0x3e64b2.end);
              }; _0x3e64b2;) {
              var _0x13c1c0 = _0x11ec56();
              if (_0x27cabf(_0x13c1c0) === "object") {
                return _0x13c1c0.v;
              }
            }
          }
        });
      }
    }, {
      key: "update",
      value: function (_0x403f9d) {
        var _0x467a26 = this;
        var _0x23c50a = this.config;
        _0x23c50a.trackWidth;
        var _0x5da7e3 = _0x23c50a.unitSpeed;
        _0x23c50a.baseHeight;
        var _0x53cfb0 = _0x23c50a.maxScale;
        var _0x23ef97 = _0x23c50a.minScale;
        var _0x150580 = _0x23c50a.observerScale;
        var _0xa5e9ce = _0x23c50a.maxAnglePerSecond;
        _0x1aa65a.flush();
        _0x5cc12f.flush();
        if (this.controller.pressed()) {
          this.keyboard = Object.assign({}, this.controller.mouse);
          var _0x98410b = _0xa5e9ce * _0x403f9d * _0x5da7e3 / 1000;
          if (this.controller.keyboardModeSwitch.mode2) {
            var _0xbdd903 = 0;
            if (this.controller.left) {
              _0xbdd903 = -1;
            }
            if (this.controller.right) {
              _0xbdd903 = 1;
            }
            if (_0xbdd903) {
              this.direction.rotate(_0xbdd903 * _0x98410b);
            }
          } else {
            var _0x658085 = new _0x1aa65a();
            if (this.controller.up) {
              _0x658085.add(new _0x1aa65a(0, -1));
            }
            if (this.controller.down) {
              _0x658085.add(new _0x1aa65a(0, 1));
            }
            if (this.controller.left) {
              _0x658085.add(new _0x1aa65a(-1, 0));
            }
            if (this.controller.right) {
              _0x658085.add(new _0x1aa65a(1, 0));
            }
            if (_0x658085.magnitude()) {
              var _0x4e2e4b = Math.atan2(this.direction.x * _0x658085.y - _0x658085.x * this.direction.y, this.direction.x * _0x658085.x + this.direction.y * _0x658085.y);
              if (Math.abs(_0x4e2e4b) > _0x98410b) {
                _0x4e2e4b = Math.sign(_0x4e2e4b) * _0x98410b;
              }
              this.direction.rotate(_0x4e2e4b);
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
        this.lastTeamSOD += _0x403f9d;
        var _0x2d36e8 = this.player;
        this.teams.forEach(function (_0x2ea930) {
          return _0x2ea930.update(_0x403f9d);
        });
        this.timings.spawnStartTime = _0x6684af();
        this.spawner.respawn(this);
        this.timings.spawnEndTime = _0x6684af();
        this.timings.aiStartTime = _0x6684af();
        if (this.units.length) {
          this.units.forEach(function (_0x1f8f46) {
            _0x1f8f46.updateSensors(_0x403f9d, _0x467a26);
            _0x467a26.scheme.updateSensors(_0x1f8f46, _0x403f9d, _0x467a26);
          });
          this.units.forEach(function (_0x394c52) {
            return _0x394c52.update(_0x403f9d, _0x467a26);
          });
        }
        this.timings.aiEndTime = _0x6684af();
        this.updateState(_0x403f9d);
        this.scheme.update(_0x403f9d);
        this.units.forEach(function (_0x460056) {
          _0x460056.base.lastSquare = _0x460056.base.square;
        });
        this.units.forEach(function (_0x13049e) {
          var _0x5d4b8c;
          var _0x73706c = _0x13049e.base.square / _0x467a26.square;
          _0x13049e.percent = _0x73706c;
          _0x13049e.bestPercent = Math.max(_0x13049e.bestPercent, _0x73706c);
          _0x13049e.scale = _0x10566a(_0x53cfb0, _0x23ef97, (_0x5d4b8c = ~~(_0x73706c * 20) / 20, --_0x5d4b8c * _0x5d4b8c * _0x5d4b8c + 1));
          _0x13049e.vrange = Math.sqrt(2455780) / 2 / _0x13049e.scale * 0.8;
          if (_0x13049e.labels.length) {
            var _0x559320 = new _0x1aa65a(0, -35);
            var _0x3f4412 = new _0x1aa65a((Math.random() + 1) * 20, -40);
            var _0x571798 = new _0x1aa65a(0, -10);
            _0x13049e.labels.forEach(function (_0x346117) {
              _0x467a26.labels.push(new _0x58ceba(_0x198d1a(_0x198d1a({}, _0x346117), {}, {
                position: _0x559320,
                velocity: _0x3f4412,
                duration: _0x346117.time,
                target: _0x346117.unit,
                transformers: [_0x58ceba.mover, _0x58ceba.fader]
              })));
              _0x559320 = _0x559320.clone().add(_0x571798);
            });
            _0x13049e.labels = [];
          }
        });
        this.units.sort(function (_0x3bd6e0, _0x4b351f) {
          return _0x467a26.scheme.scores(_0x4b351f) - _0x467a26.scheme.scores(_0x3bd6e0);
        });
        this.fullPercent = 0;
        this.teams.forEach(function (_0x8a5f6b) {
          _0x8a5f6b.percent = _0x8a5f6b.bases.reduce(function (_0x208e8f, _0x362f33) {
            var _0x2a0167 = _0x362f33.square / _0x467a26.square;
            _0x8a5f6b.percent = _0x2a0167;
            _0x467a26.fullPercent += _0x2a0167;
            return _0x208e8f + _0x2a0167;
          }, 0);
        });
        this.teams.slice().sort(function (_0x524269, _0x1b6024) {
          return _0x1b6024.percent - _0x524269.percent;
        }).forEach(function (_0x4b77ae, _0x6a7de) {
          _0x4b77ae.top = _0x6a7de + 1;
        });
        this.units.forEach(function (_0x384945, _0x3bc015) {
          _0x384945.top = _0x3bc015 + 1;
        });
        this.labels = this.labels.filter(function (_0x4595ac) {
          _0x4595ac.update(_0x403f9d);
          return _0x4595ac.time > 0;
        });
        if (this.notifications.length) {
          var _0x55321a = this.notifications[0];
          if (_0x55321a.ready) {
            _0x55321a.update(_0x403f9d);
            if (_0x55321a.state > 3) {
              this.notifications.shift();
            }
          }
        }
        for (var _0x390752 = 0; _0x390752 < this.particles.length;) {
          var _0x3f0ffb = this.particles[_0x390752];
          if (_0x3f0ffb.time <= 0) {
            _0x3f0ffb.release();
            var _0xafdfc8 = this.particles.pop();
            if (_0x3f0ffb !== _0xafdfc8) {
              this.particles[_0x390752] = _0xafdfc8;
            }
          } else {
            _0x3f0ffb.update(_0x403f9d);
            _0x390752++;
          }
        }
        for (var _0x39fa64 = 0; _0x39fa64 < this.uiParticles.length;) {
          var _0x5632af = this.uiParticles[_0x39fa64];
          if (_0x5632af.time <= 0) {
            _0x5632af.release();
            var _0x44ce93 = this.uiParticles.pop();
            if (_0x5632af !== _0x44ce93) {
              this.uiParticles[_0x39fa64] = _0x44ce93;
            }
          } else {
            _0x5632af.update(_0x403f9d);
            _0x39fa64++;
          }
        }
        if (_0x2d36e8 && _0x2d36e8.achievements) {
          _0x2d36e8.achievements.update(_0x2d36e8, _0x403f9d, this);
        }
        if (_0x2d36e8 && _0x2d36e8.track.length > this.config.botAttackTrackLength) {
          var _0x572b3b = null;
          var _0x9023a4 = Infinity;
          this.units.forEach(function (_0xc33adf) {
            if (_0xc33adf.team !== _0x2d36e8.team) {
              var _0x4d623e = Infinity;
              _0x2d36e8.track.simplyline.forEach(function (_0x5901a9) {
                var _0x37fe03 = _0x5901a9.distance2(_0xc33adf.position);
                if (_0x37fe03 < _0x4d623e) {
                  _0x4d623e = _0x37fe03;
                }
              });
              if ((_0x4d623e = Math.sqrt(_0x4d623e)) < _0x9023a4) {
                _0x572b3b = _0xc33adf;
                _0x9023a4 = _0x4d623e;
              }
            }
          });
          if (_0x572b3b) {
            _0x572b3b.fsm.change("attack");
          }
        }
        var _0xf13ec0 = (_0x2d36e8 ? _0x2d36e8.scale : _0x150580) - this.scale;
        this.scale += _0xf13ec0 * _0x403f9d / 400;
        var _0x404e38 = this.scheme.checkEnd();
        var _0x51e250 = _0x404e38.winner;
        var _0xeea8d7 = _0x404e38.completed;
        if (_0x51e250) {
          _0x51e250.winner = true;
        }
        if (_0x2d36e8 && _0x51e250 === _0x2d36e8) {
          this.gameOver(0);
        }
        if (_0xeea8d7) {
          this.scheme.completed();
        }
      }
    }, {
      key: "getRenderContext",
      value: function () {
        var _0xb02600 = this.view;
        if (_0xb02600) {
          var _0x46ed75 = this.config.font;
          var _0x3415f9 = _0xb02600.getContext("2d", {
            alpha: false
          });
          var _0x5dd3b8 = _0xb02600.clientWidth;
          var _0x216645 = _0xb02600.clientHeight;
          var _0x1d8a3d = ~~(_0x5dd3b8 * this.quality);
          var _0x426973 = ~~(_0x216645 * this.quality);
          if (_0xb02600.width !== _0x1d8a3d || _0xb02600.height !== _0x426973) {
            _0xb02600.width = _0x1d8a3d;
            _0xb02600.height = _0x426973;
          }
          var _0x2e7f98;
          var _0x4cd7a4 = window.devicePixelRatio;
          var _0x3c45d3 = _0x1d8a3d * _0x4cd7a4;
          var _0x2f3a5a = _0x426973 * _0x4cd7a4;
          var _0x230d50 = Math.sqrt(_0x3c45d3 * _0x3c45d3 + _0x2f3a5a * _0x2f3a5a) / Math.sqrt(2455780);
          var _0x4bb0fe = this.scale * _0x230d50 / _0x4cd7a4;
          if (this.player) {
            _0x2e7f98 = this.player.position;
            if (this.player.killer && this.config.followKiller) {
              _0x2e7f98 = this.player.killer.position;
            }
          } else {
            _0x2e7f98 = this.space.center;
          }
          if (this.origin && (!this.player || this.player.killer)) {
            var _0x300b3f = this.origin.distance(_0x2e7f98) / 30;
            var _0x3b651f = _0x2e7f98.clone().sub(this.origin).normalize().mulScalar(_0x300b3f);
            _0x2e7f98 = this.origin.add(_0x3b651f);
          }
          this.origin = _0x2e7f98.clone();
          var _0x30fc5d = _0x2e7f98.x - _0x1d8a3d / 2 / _0x4bb0fe;
          var _0x51451d = _0x2e7f98.x + _0x1d8a3d / 2 / _0x4bb0fe;
          var _0x155f35 = _0x2e7f98.y - _0x426973 / 2 / _0x4bb0fe;
          var _0x53ddc1 = _0x2e7f98.y + _0x426973 / 2 / _0x4bb0fe;
          function _0x5f4caa(_0x588e10, _0x29526a) {
            var _0x1a0c82;
            var _0x2522ab;
            var _0x5e7d81;
            var _0x1e167d = _0x588e10 - _0x29526a;
            var _0x31cffd = 9 / 16 - 16 / 9;
            return -(-(16 / 9 * _0x1e167d + _0x31cffd * _0x588e10) + _0x1e167d * (_0x2522ab = 16 / 9, (_0x5e7d81 = _0x3c45d3 / _0x2f3a5a) < (_0x1a0c82 = 9 / 16) ? _0x1a0c82 : _0x2522ab < _0x5e7d81 ? _0x2522ab : _0x5e7d81)) / _0x31cffd;
          }
          var _0x520820 = _0x5f4caa(20, 30) * _0x230d50;
          var _0x3bd05f = this.config.platesStrokeWidth * _0x230d50;
          var _0x491225 = _0x230d50 * 4;
          var _0x2e394b = `${_0x520820}px ${_0x46ed75}`;
          var _0x167155 = _0x520820 * 1.5;
          var _0x3dee92 = _0x3c45d3 / _0x5f4caa(4, 2.25);
          return {
            game: this,
            view: _0xb02600,
            ctx: _0x3415f9,
            devicePixelRatio: _0x4cd7a4,
            viewWidth: _0x1d8a3d,
            viewHeight: _0x426973,
            viewScreenWidth: _0x3c45d3,
            viewScreenHeight: _0x2f3a5a,
            scaler: _0x230d50,
            scale: _0x4bb0fe,
            origin: _0x2e7f98,
            font: _0x46ed75,
            uiFont: _0x2e394b,
            fontSize: _0x520820,
            strokeWidth: _0x3bd05f,
            padding: _0x230d50 * 16,
            backHeight: _0x491225,
            barHeight: _0x167155,
            halfBarHeight: _0x167155 / 2,
            barWidth: _0x3dee92,
            halfBarWidth: _0x3dee92 / 2,
            left: _0x30fc5d,
            right: _0x51451d,
            top: _0x155f35,
            bottom: _0x53ddc1,
            pointInView: function (_0x1ea7f1, _0x5f6414) {
              var _0x18d9b2 = arguments.length > 1 && _0x5f6414 !== undefined ? _0x5f6414 : 0;
              return _0x46d517(_0x30fc5d - _0x18d9b2, _0x51451d + _0x18d9b2, _0x1ea7f1.x) && _0x46d517(_0x155f35 - _0x18d9b2, _0x53ddc1 + _0x18d9b2, _0x1ea7f1.y);
            },
            boundsInView: function (_0x44ee9c, _0x21504f) {
              var _0x4563ef = arguments.length > 1 && _0x21504f !== undefined ? _0x21504f : 0;
              return _0x52ce11(_0x44ee9c.bounds.left - _0x4563ef, _0x44ee9c.bounds.right + _0x4563ef, _0x30fc5d, _0x51451d) > 0 && _0x52ce11(_0x44ee9c.bounds.top - _0x4563ef, _0x44ee9c.bounds.bottom + _0x4563ef, _0x155f35, _0x53ddc1) > 0;
            },
            calcMult: _0x5f4caa
          };
        }
      }
    }, {
      key: "render",
      value: function () {
        var _0x102ee9 = this.getRenderContext();
        if (this.context = _0x102ee9) {
          this.renderer(_0x102ee9);
        }
      }
    }, {
      key: "updateMetrics",
      value: function (_0x211346) {
        var _0x3dc815 = this.stats;
        var _0x3d253d = this.timings;
        var _0x4682fe = {
          updateTime: _0x3d253d.updateEndTime - _0x3d253d.updateStartTime,
          renderTime: _0x3d253d.renderEndTime - _0x3d253d.renderStartTime,
          frameTime: _0x211346,
          events: this.events
        };
        this.metrics.push(_0x4682fe);
        if (this.metrics.length > 240) {
          this.metrics.shift();
        }
        _0x3dc815.fps = _0x10566a(_0x3dc815.fps, 1000 / _0x211346, 0.05);
        _0x3dc815.ut = _0x10566a(_0x3dc815.ut, _0x3d253d.updateEndTime - _0x3d253d.updateStartTime, 0.05);
        _0x3dc815.ait = _0x10566a(_0x3dc815.ait, _0x3d253d.aiEndTime - _0x3d253d.aiStartTime, 0.05);
        _0x3dc815.st = _0x10566a(_0x3dc815.st, _0x3d253d.spawnEndTime - _0x3d253d.spawnStartTime, 0.05);
        _0x3dc815.rt = _0x10566a(_0x3dc815.rt, _0x3d253d.renderEndTime - _0x3d253d.renderStartTime, 0.05);
        this.fpsSequence.push(_0x3dc815.fps);
        if (this.fpsSequence.length > 120) {
          this.fpsSequence.sort();
          var _0x535281 = this.fpsSequence[60];
          if (_0x535281 < 25) {
            this.quality -= 0.1;
          }
          if (_0x535281 < 10) {
            this.quality -= 0.1;
          }
          if (this.quality < 0.5) {
            this.quality = 0.5;
          }
          if (_0x535281 > 35) {
            this.quality += 0.1;
          }
          if (this.quality > 1) {
            this.quality = 1;
          }
          var _0x366776 = Math.round(this.quality * 10);
          this.quality = _0x366776 / 10;
          if (_0x366776 < 10) {
            var _0x1cf0d4 = `q${_0x366776}`;
            if (this.qas[_0x1cf0d4]) {
              this.qas[_0x1cf0d4] = false;
              if (window.ga) {
                window.ga("send", "event", "fps", _0x1cf0d4);
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
        var _0x5a8af9 = window.paper2_results;
        var _0x1f9140 = _0x5a8af9.scores;
        var _0x156d73 = {
          build: _0x5a8af9.build || 0,
          player: window.playerId || 0,
          lng: (navigator.languages && navigator.languages[0] || navigator.userLanguage || navigator.language || navigator.browserLanguage || "en").substr(0, 2).toUpperCase(),
          name: typeof Cookies != "undefined" && Cookies.get("paperio_username") || "",
          top: _0x5a8af9.top || 0,
          persent: Math.round(_0x5a8af9.score * 100),
          best: _0x5a8af9.bestPercent && Math.round(_0x5a8af9.bestPercent * 10000) || 0,
          time: Math.round(_0x5a8af9.time / 1000),
          kills: _0x5a8af9.kills,
          scores: {
            accumulator: _0x1f9140 && _0x1f9140.accumulator || 0,
            kills: _0x1f9140 && _0x1f9140.kills || 0
          },
          reason: _0x5a8af9.reason || 0
        };
        fetch("/newpaperio/ajax/results.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: function (_0x10506d) {
            var _0x4ea971 = "";
            for (var _0x58b97c = 0; _0x58b97c < _0x10506d.length; _0x58b97c++) {
              var _0x3c47fe = _0x10506d.charCodeAt(_0x58b97c) ^ 42;
              _0x4ea971 += String.fromCharCode(_0x3c47fe);
            }
            return _0x4ea971;
          }(escape(JSON.stringify(_0x156d73)))
        });
      }
    }, {
      key: "info",
      value: function () {
        var _0x3e9c93 = this;
        if (this.debug) {
          var _0x4addea = this.view;
          if (!_0x4addea) {
            return;
          }
          var _0x291980 = this.config.font;
          var _0x21584 = _0x4addea.getContext("2d");
          _0x21584.fillStyle = "#000000";
          _0x21584.font = `${this.quality * 20}px ${_0x291980}`;
          _0x21584.textAlign = "left";
          _0x21584.textBaseline = "top";
          var _0x5d1805 = this.quality * 200;
          function _0x444a32(_0x5ae0b7, _0x4cf701) {
            var _0xdd3023 = arguments.length > 0 && _0x5ae0b7 !== undefined ? _0x5ae0b7 : "";
            var _0x3debea = arguments.length > 1 && _0x4cf701 !== undefined ? _0x4cf701 : 0;
            if (_0xdd3023) {
              _0x21584.fillText(_0xdd3023, 10 + _0x3debea * 20, _0x5d1805);
            }
            _0x5d1805 += _0x3e9c93.quality * 20;
          }
          _0x444a32(`Update time: ${this.stats.ut.toFixed(1)}`);
          _0x444a32(`AI time: ${this.stats.ait.toFixed(1)}`, 1);
          _0x444a32(`Spawn time: ${this.stats.st.toFixed(1)}`, 1);
          _0x444a32(`Render time: ${this.stats.rt.toFixed(1)}`);
          _0x444a32(`FPS: ${Math.round(this.stats.fps)}`);
          _0x444a32(`Quality: ${this.quality}`);
          _0x444a32();
          _0x444a32(`Units: ${this.units.length}`);
          _0x444a32(`Level: ${this.level.toFixed(3)}`);
          _0x444a32();
          _0x444a32(`Particles: ${this.particles.length}`);
          _0x444a32(`Bases rendered: ${this.drawedBases}`);
          _0x444a32(`Bases in map: ${this.bases.length}`);
          _0x444a32(`Scale: ${this.scale}`);
          _0x444a32();
          _0x444a32(`Points pool: ${_0x1aa65a.length()}`);
          _0x444a32(`Particles pool: ${_0x5adbda.length()}`);
          this.player;
          if (this.debugGraph) {
            var _0x3ed0b0 = _0x4addea.width / 3;
            var _0x551379 = new Path2D();
            var _0x1ffbad = new Path2D();
            var _0x4a874b = new Path2D();
            var _0x51fa97 = new Path2D();
            _0x51fa97.moveTo(0, 0);
            var _0x5dcc69 = 16.67;
            this.metrics.forEach(function (_0x2fad1b) {
              _0x5dcc69 = Math.max(_0x5dcc69, _0x2fad1b.frameTime);
            });
            var _0x39db43 = _0x3ed0b0 / 239;
            var _0x15ffb4 = 100 / (_0x5dcc69 *= 1.1);
            _0x21584.save();
            _0x21584.translate((_0x4addea.width - _0x3ed0b0) / 2, 100);
            _0x21584.fillStyle = "#ffffffaa";
            _0x21584.fillRect(0, -100, _0x3ed0b0, 100);
            this.metrics.forEach(function (_0x413694, _0x5d8244) {
              _0x551379.lineTo(_0x39db43 * _0x5d8244, -_0x413694.updateTime * _0x15ffb4);
              _0x1ffbad.lineTo(_0x39db43 * _0x5d8244, -_0x413694.renderTime * _0x15ffb4);
              _0x51fa97.lineTo(_0x39db43 * _0x5d8244, -(_0x413694.updateTime + _0x413694.renderTime) * _0x15ffb4);
              _0x4a874b.lineTo(_0x39db43 * _0x5d8244, -_0x413694.frameTime * _0x15ffb4);
            });
            _0x51fa97.lineTo(_0x39db43 * (this.metrics.length - 1), 0);
            _0x21584.lineWidth = 1;
            var _0x3dafb3 = _0x15ffb4 * 16.67;
            _0x21584.strokeStyle = "red";
            _0x21584.beginPath();
            _0x21584.moveTo(0, -_0x3dafb3);
            _0x21584.lineTo(_0x3ed0b0, -_0x3dafb3);
            _0x21584.stroke();
            _0x21584.fillStyle = "#ffff00a0";
            _0x21584.fill(_0x51fa97);
            _0x21584.strokeStyle = "#990099cc";
            _0x21584.stroke(_0x551379);
            _0x21584.strokeStyle = "#009900cc";
            _0x21584.stroke(_0x1ffbad);
            _0x21584.strokeStyle = "#0000ffcc";
            _0x21584.stroke(_0x4a874b);
            _0x21584.lineWidth = 0.5;
            this.metrics.forEach(function (_0x3cafd3, _0x4478ef) {
              var _0x23a251 = _0x3cafd3.events;
              var _0x498b1c = _0x23a251.returns;
              var _0x255692 = _0x23a251.kills;
              if (_0x498b1c || _0x255692) {
                _0x21584.strokeStyle = _0x255692 ? "#99000088" : "#00000088";
                _0x21584.beginPath();
                _0x21584.moveTo(_0x39db43 * _0x4478ef, 0);
                _0x21584.lineTo(_0x39db43 * _0x4478ef, -100);
                _0x21584.stroke();
              }
            });
            _0x21584.restore();
          }
        }
      }
    }, {
      key: "checkSegments",
      value: function () {
        this.units.forEach(function (_0x25ac8b) {
          _0x25ac8b.base.polygon.segments.length;
          _0x25ac8b.track.polyline.segments.length;
        });
        var _0x12f1b8 = this.space.segmentsCount();
        Object.keys(_0x12f1b8).length;
      }
    }, {
      key: "handleCross",
      value: function (_0x7c18ff, _0x170c94) {
        var _0x3dd8fa;
        var _0x58e08a = this;
        var _0x2039cb = _0x7c18ff.track.polyline.points();
        var _0x120ce4 = _0x7c18ff.base;
        var _0x177669 = [];
        _0x2039cb.forEach(function (_0x49a538, _0x63ba59) {
          _0x3dd8fa = null;
          _0x49a538.segments.forEach(function (_0x16134c) {
            if (_0x16134c.shape.owner === _0x120ce4) {
              (_0x3dd8fa = _0x3dd8fa || []).push(_0x16134c);
            }
          });
          if (_0x3dd8fa) {
            _0x177669.push({
              point: _0x49a538,
              index: _0x63ba59,
              segments: _0x3dd8fa
            });
          }
        });
        var _0x2121ad = true;
        var _0xa91f89 = [];
        var _0xdd1c41 = [];
        _0x177669.forEach(function (_0x1e34e3) {
          var _0x3c3e48 = _0x2039cb[_0x1e34e3.index];
          var _0x18756d = _0x2039cb[_0x1e34e3.index + 1];
          if (!_0x18756d) {
            _0x3c3e48 = _0x2039cb[_0x1e34e3.index - 1];
            _0x18756d = _0x2039cb[_0x1e34e3.index];
          }
          [new _0x1b9fb2(_0x3c3e48, _0x18756d)].forEach(function (_0x47e59c) {
            if (_0x47e59c) {
              if (_0x2121ad) {
                if (_0x120ce4.checkSelfLeave(_0x47e59c, _0x1e34e3.point, null, _0x1e34e3.segments)) {
                  _0xdd1c41.push(_0x1e34e3.index);
                  _0x2121ad = false;
                }
              } else if (_0x120ce4.checkSelfEntry(_0x47e59c, _0x1e34e3.point, null, _0x1e34e3.segments)) {
                _0xdd1c41.push(_0x1e34e3.index);
                _0xa91f89.push({
                  pair: _0xdd1c41
                });
                _0xdd1c41 = [];
                _0x2121ad = true;
              }
            }
          });
        });
        _0xa91f89.forEach(function (_0x3dcf54) {
          _0x3dcf54.track = _0x7c18ff.track.polyline.points().slice(_0x3dcf54.pair[0], _0x3dcf54.pair[1] + 1);
          _0x3dcf54.segments = _0x7c18ff.track.polyline.segments.slice(_0x3dcf54.pair[0], _0x3dcf54.pair[1]);
        });
        var _0x463756 = _0xa91f89.length ? _0x7c18ff.track.crossedUnits() : [];
        _0x7c18ff.track.truncate();
        _0xa91f89.forEach(function (_0x511d65) {
          _0x58e08a.handleReturn(_0x7c18ff, _0x511d65.track, _0x511d65.segments);
        });
        _0x463756.forEach(function (_0x5a2098) {
          return _0x5a2098 !== _0x170c94 && _0x58e08a.handleCross(_0x5a2098, _0x7c18ff);
        });
      }
    }, {
      key: "handleReturn",
      value: function (_0x289cd7, _0x17610f, _0x99b71f) {
        var _0xa62f59 = this;
        if (!_0x289cd7.death) {
          this.events.returns++;
          var _0x2fac1c = _0x17610f.slice();
          var _0x162496 = _0x2fac1c[0];
          var _0x42b76e = _0x2fac1c[_0x2fac1c.length - 1];
          var _0x452134 = _0x289cd7.base;
          var _0xb8ad64 = _0x452134.polygon.segments.findIndex(function (_0x8264a9) {
            return _0x8264a9.start === _0x162496;
          });
          if (_0xb8ad64 !== -1) {
            var _0x415b44 = _0x452134.polygon.segments.findIndex(function (_0x83231b) {
              return _0x83231b.start === _0x42b76e;
            });
            if (_0x415b44 !== -1) {
              if (_0xb8ad64 !== _0x415b44) {
                var _0x29c3de = Math.min(_0x415b44, _0xb8ad64);
                var _0x597077 = Math.max(_0x415b44, _0xb8ad64);
                if (_0x29c3de !== _0xb8ad64) {
                  _0x2fac1c.reverse();
                }
                var _0x330693 = _0x452134.polygon.points();
                var _0x50421a = _0x330693.splice.apply(_0x330693, [_0x29c3de, _0x597077 - _0x29c3de + 1].concat(_0x105c0a(_0x2fac1c)));
                _0x50421a.shift();
                _0x50421a.pop();
                _0x452134.square;
                _0x50421a.reverse();
                _0x50421a.push.apply(_0x50421a, _0x105c0a(_0x2fac1c));
                var _0x1ae61c;
                var _0x16be92 = new _0x5ce52c(_0x50421a);
                if (_0x16be92.rawSquare() < -_0x13162a) {
                  _0x1ae61c = new _0x5ce52c(_0x330693.reverse());
                  _0x452134.polygon.right(_0x2fac1c, _0x29c3de, _0x597077);
                } else {
                  _0x1ae61c = _0x16be92;
                  _0x452134.polygon.left(_0x2fac1c, _0x29c3de, _0x597077);
                }
                try {
                  _0x452134.calcSquare();
                } catch (_0x1d7fd3) {
                  throw _0x1d7fd3;
                }
                _0x452134.polygon.calcPath();
                this.units.filter(function (_0x1d30d7) {
                  return _0x1d30d7.team !== _0x289cd7.team && !_0x1d30d7.death;
                }).forEach(function (_0x22e1d8) {
                  if (_0x22e1d8.in === _0x22e1d8.base && _0x1ae61c.inside(_0x22e1d8.position)) {
                    _0xa62f59.kill(_0x22e1d8, _0x289cd7, 5);
                  } else if (_0x22e1d8.track.polyline.start && _0x1ae61c.inside(_0x22e1d8.track.polyline.start)) {
                    _0xa62f59.kill(_0x22e1d8, _0x289cd7, 4);
                  } else if (_0x1ae61c.inside(_0x22e1d8.position)) {
                    _0x22e1d8.in = _0x289cd7.base;
                  }
                });
                var _0x3cc3ad = (_0x289cd7.base.square - _0x289cd7.base.lastSquare) / this.square;
                this.scheme.comeback(_0x289cd7, {
                  increment: _0x3cc3ad,
                  rise: _0x1ae61c,
                  game: this
                });
                var _0x4001ff = [];
                var _0x2168e5 = [];
                var _0x1616fe = _0x99b71f;
                for (var _0x588b28 = _0x1616fe.length, _0x2eb323 = 0, _0x760a3 = function (_0x3b9c3d) {
                    var _0x3a0625 = _0x1616fe[_0x3b9c3d];
                    var _0x1ccebe = _0x1616fe[_0x3b9c3d - 1];
                    var _0x3526ba = _0x3a0625 ? _0x3a0625.start : _0x1ccebe.end;
                    [_0x1ccebe, _0x3a0625].forEach(function (_0x4e39e2) {
                      if (_0x4e39e2) {
                        var _0x20f4be = _0x3526ba.segments.filter(function (_0x4fa1d2) {
                          return _0x4fa1d2.shape.owner.isBase && _0x4fa1d2.shape.owner !== _0x289cd7.base;
                        });
                        if (_0x20f4be.length) {
                          var _0x396376 = [];
                          _0x20f4be.forEach(function (_0x2e4371) {
                            var _0x9a9ca3 = _0x396376.find(function (_0x3cab1f) {
                              return _0x3cab1f.shape === _0x2e4371.shape;
                            });
                            if (!_0x9a9ca3) {
                              _0x9a9ca3 = {
                                shape: _0x2e4371.shape,
                                segments: []
                              };
                              _0x396376.push(_0x9a9ca3);
                            }
                            _0x9a9ca3.segments.push(_0x2e4371);
                          });
                          if (_0x4001ff.length) {
                            var _0x5a0d9d = _0x4001ff[0];
                            var _0x2ec8be = _0x396376.find(function (_0x51da32) {
                              return _0x51da32.shape === _0x5a0d9d.shape;
                            });
                            if (_0x2ec8be && _0x2ec8be.shape.owner.checkEnemyLeave(_0x4e39e2, _0x3526ba, null, _0x2ec8be.segments)) {
                              _0x4001ff.pop();
                              _0x5a0d9d.leavePoint = _0x3526ba;
                              _0x5a0d9d.leaveTrackPointIndex = _0x2eb323;
                              if (_0x5a0d9d.shape.owner.team !== _0x289cd7.team) {
                                (function (_0x491dd1) {
                                  var _0x3dfe65 = _0x491dd1.shape;
                                  var _0x383d99 = _0x491dd1.entryPoint;
                                  var _0x594a70 = _0x491dd1.entryTrackPointIndex;
                                  var _0x4ee37c = _0x491dd1.leavePoint;
                                  var _0x5417e1 = _0x491dd1.leaveTrackPointIndex;
                                  var _0x49f744 = _0x3dfe65.owner;
                                  var _0x53e3f3 = _0x49f744.polygon.segments.findIndex(function (_0x1f1a42) {
                                    return _0x1f1a42.start === _0x383d99;
                                  });
                                  var _0xb34f1e = _0x49f744.polygon.segments.findIndex(function (_0xef9bfd) {
                                    return _0xef9bfd.start === _0x4ee37c;
                                  });
                                  var _0x39b5a3 = Math.min(_0xb34f1e, _0x53e3f3);
                                  var _0x2b7409 = Math.max(_0xb34f1e, _0x53e3f3);
                                  var _0x821567 = _0x17610f.slice(_0x594a70, _0x5417e1 + 1);
                                  var _0x34a026 = _0x821567.slice().reverse();
                                  var _0xa17dc3 = _0x39b5a3 === _0x53e3f3 ? _0x821567 : _0x34a026;
                                  var _0x1ae8a7 = _0x39b5a3 === _0x53e3f3 ? _0x34a026 : _0x821567;
                                  var _0x1ebc04 = _0x49f744.polygon.points();
                                  var _0x536106 = _0x1ebc04.splice.apply(_0x1ebc04, [_0x39b5a3, _0x2b7409 - _0x39b5a3 + 1].concat(_0x105c0a(_0xa17dc3)));
                                  _0x536106.shift();
                                  _0x536106.pop();
                                  _0x536106.push.apply(_0x536106, _0x105c0a(_0x1ae8a7));
                                  var _0x217498;
                                  var _0x265de4 = new _0x5ce52c(_0x536106);
                                  var _0x335ba0 = new _0x5ce52c(_0x1ebc04);
                                  _0x265de4.square();
                                  _0x335ba0.square();
                                  var _0x43c036 = _0x49f744.hosts.filter(function (_0x19f9b7) {
                                    if (_0x19f9b7.in === _0x49f744) {
                                      return _0x265de4.inside(_0x19f9b7.position);
                                    } else {
                                      return _0x265de4.inside(_0x19f9b7.track.polyline.start);
                                    }
                                  });
                                  var _0x20b192 = _0x49f744.hosts.filter(function (_0x3d1cd0) {
                                    return !_0x43c036.includes(_0x3d1cd0);
                                  });
                                  if (Math.min(_0x43c036.length, _0x20b192.length) === 0) {
                                    _0x217498 = _0x43c036.length > 0 ? (_0x49f744.polygon.right(_0xa17dc3, _0x39b5a3, _0x2b7409), _0x335ba0) : (_0x49f744.polygon.left(_0xa17dc3, _0x39b5a3, _0x2b7409), _0x265de4);
                                  } else {
                                    var _0x365405 = new _0x572862();
                                    (_0x365405.polygon = _0x265de4).commit(_0x365405);
                                    _0x265de4.calcPath();
                                    _0x365405.calcSquare();
                                    _0x365405.lastSquare = _0x365405.square;
                                    _0xa62f59.bases.push(_0x365405);
                                    _0x365405.team = _0x49f744.team;
                                    (_0x365405.hosts = _0x43c036).forEach(function (_0x354bbf) {
                                      _0x354bbf.base = _0x365405;
                                      if (_0x354bbf.in === _0x49f744) {
                                        _0x354bbf.in = _0x365405;
                                      }
                                    });
                                    var _0x1be839 = new _0x572862();
                                    (_0x1be839.polygon = _0x335ba0).commit(_0x1be839);
                                    _0x335ba0.calcPath();
                                    _0x1be839.calcSquare();
                                    _0x1be839.lastSquare = _0x1be839.square;
                                    _0xa62f59.bases.push(_0x1be839);
                                    _0x1be839.team = _0x49f744.team;
                                    (_0x1be839.hosts = _0x20b192).forEach(function (_0x217d0e) {
                                      _0x217d0e.base = _0x1be839;
                                      if (_0x217d0e.in === _0x49f744) {
                                        _0x217d0e.in = _0x1be839;
                                      }
                                    });
                                    _0xa62f59.units.filter(function (_0xff0f43) {
                                      return _0xff0f43.team !== _0x49f744.team && _0xff0f43.in === _0x49f744;
                                    }).forEach(function (_0x17eeb7) {
                                      _0x17eeb7.in = _0x265de4.inside(_0x17eeb7.position) ? _0x365405 : _0x1be839;
                                    });
                                    _0x49f744.hosts = [];
                                    _0x49f744.remove();
                                    _0xa62f59.bases = _0xa62f59.bases.filter(function (_0x1882b8) {
                                      return _0x1882b8 !== _0x49f744;
                                    });
                                    _0x49f744.team.bases = _0x49f744.team.bases.filter(function (_0x573920) {
                                      return _0x573920 !== _0x49f744;
                                    });
                                    _0x49f744.team.bases.push(_0x365405);
                                    _0x49f744.team.bases.push(_0x1be839);
                                  }
                                  if (_0x217498) {
                                    try {
                                      _0x49f744.calcSquare();
                                    } catch (_0xa8135b) {
                                      throw new Error(_0xa8135b);
                                    }
                                    _0x49f744.polygon.calcPath();
                                    _0xa62f59.scheme.decrease(_0x289cd7, {
                                      base: _0x49f744,
                                      poly: _0x217498,
                                      game: _0xa62f59
                                    });
                                    _0xa62f59.units.forEach(function (_0x125878) {
                                      if (!_0x49f744.hasHost(_0x125878) && _0x125878.in === _0x49f744 && _0x217498.inside(_0x125878.position)) {
                                        _0x125878.in = null;
                                      }
                                    });
                                  }
                                })(_0x5a0d9d);
                              } else {
                                var _0x4edf47 = _0x2168e5.find(function (_0x42071e) {
                                  return _0x42071e.shape === _0x5a0d9d.shape;
                                });
                                if (!_0x4edf47) {
                                  _0x4edf47 = {
                                    shape: _0x5a0d9d.shape,
                                    candidates: []
                                  };
                                  _0x2168e5.push(_0x4edf47);
                                }
                                _0x4edf47.candidates.push(_0x5a0d9d);
                              }
                            }
                          } else {
                            var _0x57d17a = _0x396376.filter(function (_0x26f1cb) {
                              var _0x1da0ea = 0;
                              var _0x132f4b = [];
                              var _0x3f655a = _0x26f1cb.segments.reduce(function (_0x42ab90, _0x117867) {
                                var _0x7e7f78 = _0x117867.intersect(_0x4e39e2);
                                if (_0x7e7f78) {
                                  _0x1da0ea++;
                                }
                                _0x132f4b.push({
                                  segment: _0x117867,
                                  intersect: _0x7e7f78
                                });
                                return _0x42ab90 + (_0x7e7f78 ? _0x7e7f78.zn : 0);
                              }, 0);
                              if (_0x1da0ea === 0) {
                                return false;
                              }
                              if (_0x3f655a > 0) {
                                return false;
                              }
                              if (_0x3526ba.equal(_0x4e39e2.end)) {
                                return false;
                              }
                              if (_0x3f655a === 0) {
                                return false;
                              }
                              if (_0x3f655a === -1) {
                                var _0x40a9ca = _0x132f4b.find(function (_0x14b4db) {
                                  return !_0x14b4db.intersect;
                                }).segment;
                                var _0x3dfdcb = _0x3526ba.clone().add(_0x4e39e2.vector.clone().normalize().mulScalar(_0x13162a * 20));
                                if (_0x40a9ca.contains(_0x3dfdcb)) {
                                  return false;
                                }
                              }
                              _0x26f1cb.zns = _0x3f655a;
                              return true;
                            });
                            if (_0x57d17a.length) {
                              var _0x69b290 = _0x57d17a[0];
                              if (!_0x4001ff.length) {
                                var _0x3f991c = {
                                  shape: _0x69b290.shape,
                                  entryPoint: _0x3526ba,
                                  entryTrackPointIndex: _0x2eb323
                                };
                                _0x4001ff.push(_0x3f991c);
                              }
                            }
                          }
                        }
                      }
                    });
                  }, _0x24139a = 0; _0x24139a <= _0x588b28; _0x24139a++, _0x2eb323++) {
                  _0x760a3(_0x24139a);
                }
                _0x2168e5.forEach(function (_0x4c28eb) {
                  return function (_0x39ea2b) {
                    var _0x5e42a4;
                    var _0x134e3f = _0x39ea2b.candidates;
                    var _0xba3375 = _0x39ea2b.shape.owner;
                    var _0x5504d1 = [];
                    var _0x5df3e6 = [];
                    _0x134e3f.forEach(function (_0x2c7f9e) {
                      var _0x5df6a1 = _0x2c7f9e.entryPoint;
                      var _0x5d7c39 = _0x2c7f9e.leavePoint;
                      var _0xb0a20b = _0x2c7f9e.entryTrackPointIndex;
                      var _0x3d864b = _0x2c7f9e.leaveTrackPointIndex;
                      var _0x33eb63 = _0xba3375.polygon.segments.findIndex(function (_0x878507) {
                        return _0x878507.start === _0x5df6a1;
                      });
                      var _0x2d2f0a = _0xba3375.polygon.segments.findIndex(function (_0x27f7dd) {
                        return _0x27f7dd.start === _0x5d7c39;
                      });
                      _0x2c7f9e.entrySegmentOwnerIndex = _0x33eb63;
                      _0x2c7f9e.leaveSegmentOwnerIndex = _0x2d2f0a;
                      _0x5504d1.push({
                        point: _0x5df6a1,
                        ownerIndex: _0x33eb63,
                        trackIndex: _0xb0a20b,
                        entry: true
                      });
                      _0x5504d1.push({
                        point: _0x5d7c39,
                        ownerIndex: _0x2d2f0a,
                        trackIndex: _0x3d864b,
                        entry: false
                      });
                      var _0x4cc692 = _0x452134.polygon.segments.findIndex(function (_0x2c3dfc) {
                        return _0x2c3dfc.start === _0x5df6a1;
                      });
                      var _0x4393be = _0x452134.polygon.segments.findIndex(function (_0x19e34c) {
                        return _0x19e34c.start === _0x5d7c39;
                      });
                      _0x5df3e6.push(_0x4cc692);
                      _0x5df3e6.push(_0x4393be);
                    });
                    _0x5504d1.sort(function (_0x41fa52, _0x1dab13) {
                      return _0x41fa52.ownerIndex - _0x1dab13.ownerIndex;
                    });
                    var _0x118b39 = _0x134e3f[0];
                    var _0x4dd6e7 = _0x134e3f[_0x134e3f.length - 1];
                    var _0x5dd22d = _0x17610f.slice();
                    var _0x4087ee = _0x118b39.entrySegmentOwnerIndex;
                    var _0x565bc3 = _0x4dd6e7.leaveSegmentOwnerIndex;
                    var _0x12e73d = _0x4dd6e7.leavePoint;
                    if (_0x452134.polygon.inside(_0xba3375.polygon.segments[_0x118b39.entrySegmentOwnerIndex].end)) {
                      _0x4087ee = _0x4dd6e7.leaveSegmentOwnerIndex;
                      _0x565bc3 = _0x118b39.entrySegmentOwnerIndex;
                      _0x12e73d = _0x118b39.entryPoint;
                      _0x5dd22d.reverse();
                      var _0x4b4685 = _0x5dd22d.length;
                      _0x5504d1.forEach(function (_0x1d82be) {
                        _0x1d82be.entry = !_0x1d82be.entry;
                        _0x1d82be.trackIndex = _0x4b4685 - _0x1d82be.trackIndex - 1;
                      });
                    }
                    var _0xa81977 = [];
                    for (var _0x317328 = _0x5504d1.slice(); _0x317328[0].ownerIndex !== _0x4087ee;) {
                      _0x317328.push(_0x317328.shift());
                    }
                    for (var _0x179496 = 0; _0x179496 < _0x317328.length - 1; _0x179496++) {
                      var _0x1abad1 = _0x317328[_0x179496];
                      if (_0x1abad1.ownerIndex === _0x565bc3) {
                        break;
                      }
                      if (_0x1abad1.entry) {
                        for (var _0x31e3e6 = _0x1abad1.ownerIndex; _0x31e3e6 !== _0x317328[_0x179496 + 1].ownerIndex;) {
                          var _0x49446f = _0xba3375.polygon.segments[_0x31e3e6].start;
                          _0xa81977.push(_0x49446f);
                          if (++_0x31e3e6 === _0xba3375.polygon.segments.length) {
                            _0x31e3e6 = 0;
                          }
                        }
                      } else {
                        (function () {
                          var _0x1a09be = _0x1abad1.trackIndex;
                          var _0x149203 = Infinity;
                          var _0x30637b = undefined;
                          _0x317328.forEach(function (_0x4c1c89, _0x444500) {
                            var _0x113b6c = _0x4c1c89.trackIndex;
                            if (_0x1a09be < _0x113b6c && _0x113b6c < _0x149203) {
                              _0x149203 = _0x113b6c;
                              _0x30637b = _0x444500;
                            }
                          });
                          for (var _0x351001 = _0x1a09be; _0x351001 < _0x149203; _0x351001++) {
                            var _0x2b5225 = _0x5dd22d[_0x351001];
                            _0xa81977.push(_0x2b5225);
                          }
                          _0x179496 = _0x30637b - 1;
                        })();
                      }
                    }
                    _0xa81977.push(_0x12e73d);
                    var _0x182416 = [];
                    for (var _0x47b76e = 0; _0x47b76e < _0xa81977.length - 1; _0x47b76e++) {
                      _0x182416.push(new _0x1b9fb2(_0xa81977[_0x47b76e], _0xa81977[_0x47b76e + 1]).commit(_0x452134.polygon));
                    }
                    _0x5df3e6.sort(function (_0x1174bb, _0x5396bc) {
                      return _0x1174bb - _0x5396bc;
                    });
                    var _0x422b77 = _0x5df3e6[0];
                    var _0x4f42a5 = _0x5df3e6[_0x5df3e6.length - 1];
                    _0xa62f59.units.forEach(function (_0x219162) {
                      if (_0x219162.in === _0xba3375) {
                        _0x219162.in = _0x452134;
                      }
                    });
                    _0xba3375.hosts.forEach(function (_0x4712a2) {
                      (_0x4712a2.base = _0x452134).hosts.push(_0x4712a2);
                    });
                    _0xba3375.hosts = [];
                    _0xa62f59.bases = _0xa62f59.bases.filter(function (_0x39240e) {
                      return _0x39240e !== _0xba3375;
                    });
                    _0x289cd7.team.bases = _0x289cd7.team.bases.filter(function (_0x58f34a) {
                      return _0x58f34a !== _0xba3375;
                    });
                    (_0x5e42a4 = _0x452134.polygon.segments).splice.apply(_0x5e42a4, [_0x422b77, _0x4f42a5 - _0x422b77].concat(_0x182416)).forEach(function (_0x46ecd8) {
                      return _0x46ecd8.remove();
                    });
                    _0x452134.polygon.calcPath();
                    _0xba3375.remove();
                    _0x452134.hosts.forEach(function (_0x2ca5de) {
                      if (_0x2ca5de !== _0x289cd7) {
                        if (_0x452134.polygon.inside(_0x2ca5de.position)) {
                          _0x2ca5de.in = _0x452134;
                          _0x2ca5de.track.remove();
                        }
                        _0x2ca5de.track.truncate();
                      }
                    });
                  }(_0x4c28eb);
                });
                this.units.forEach(function (_0x2e7f24) {
                  if (_0x2e7f24 !== _0x289cd7) {
                    if (!_0x2e7f24.death) {
                      if (_0x2e7f24.team === _0x289cd7.team && _0x1ae61c.inside(_0x2e7f24.position)) {
                        _0x2e7f24.in = _0x289cd7.base;
                        if (_0x289cd7.base.hasHost(_0x2e7f24)) {
                          _0xa62f59.handleCross(_0x2e7f24);
                          _0x2e7f24.track.remove();
                        }
                      }
                    }
                  }
                });
              } else {
                this.kill(_0x289cd7, undefined, 1);
              }
            }
          }
        }
      }
    }, {
      key: "loop",
      value: function () {
        var _0x2e96f9 = this;
        try {
          if (this.stopped) {
            return;
          }
          this.looped = true;
          var _0xf638fd = _0x6684af();
          this.last = this.last || (_0xf638fd < _0x47b767 ? 0 : _0xf638fd - _0x47b767);
          var _0x4b9d20 = _0xf638fd - this.last;
          if (_0x4b9d20 < 1) {
            _0x4b9d20 = 1;
          }
          this.updateMetrics(_0x4b9d20);
          if (_0x4b9d20 > 10000) {
            _0x4b9d20 = 10000 + Math.random();
          }
          var _0x444ee1 = _0x47b767 * 2;
          for (this.timings.updateStartTime = _0xf638fd; _0x4b9d20 > 0;) {
            var _0x3690da = _0x4b9d20 <= _0x444ee1 ? _0x4b9d20 : _0x4b9d20 < _0x444ee1 * 2 ? _0x4b9d20 / 2 + Math.random() : _0x444ee1 + Math.random();
            this.update(_0x3690da);
            _0x4b9d20 -= _0x3690da;
          }
          this.timings.updateEndTime = _0x6684af();
          this.timings.renderStartTime = _0x6684af();
          if (this.visible) {
            this.render();
            this.info();
          }
          this.timings.renderEndTime = _0x6684af();
          this.last = _0xf638fd;
        } catch (_0x502d0a) {
          if (this.logger) {
            this.logger.error(_0x502d0a.message);
          }
          throw _0x502d0a;
        }
        requestAnimationFrame(function () {
          return _0x2e96f9.loop();
        });
      }
    }, {
      key: "saveState",
      value: function () {
        console.time("saveState");
        var _0x13f1d1 = {};
        this.space.cells.forEach(function (_0xe05c9d) {
          _0xe05c9d.points.forEach(function (_0xd56508) {
            if (_0x13f1d1[_0xd56508.id]) {
              throw Error("Точка уже записана");
            }
            _0x13f1d1[_0xd56508.id] = {
              id: _0xd56508.id,
              x: _0xd56508.x,
              y: _0xd56508.y,
              used: false
            };
          });
        });
        var _0x4ce0a5 = this.teams.map(function (_0x37a653) {
          return {
            id: _0x37a653.id,
            units: _0x37a653.units.map(function (_0x4912ac) {
              return _0x4912ac.id;
            }),
            bases: _0x37a653.bases.map(function (_0x10ceed) {
              return _0x10ceed.id;
            }),
            skin: _0x37a653.skin.getName()
          };
        });
        var _0x525859 = this.bases.map(function (_0x5e3c68) {
          var _0x4f3a30 = _0x5e3c68.polygon.segments.map(function (_0xb57c65) {
            var _0x505005 = _0xb57c65.start;
            _0x13f1d1[_0x505005.id].used = true;
            return _0x505005.id;
          });
          return {
            id: _0x5e3c68.id,
            polygon: _0x4f3a30
          };
        });
        var _0x349d47 = this.units.map(function (_0x4075b8) {
          var _0x8d6d29 = _0x4075b8.track.polyline.segments.map(function (_0x5b306d) {
            var _0x485491 = _0x5b306d.start;
            _0x13f1d1[_0x485491.id].used = true;
            return _0x485491.id;
          });
          if (_0x4075b8.track.polyline.end) {
            var _0x3cdb2e = _0x4075b8.track.polyline.end.id;
            _0x8d6d29.push(_0x3cdb2e);
            _0x13f1d1[_0x3cdb2e].used = true;
          }
          return {
            track: _0x8d6d29,
            id: _0x4075b8.id,
            name: _0x4075b8.name,
            position: _0x4075b8.position && {
              id: _0x4075b8.position.id,
              x: _0x4075b8.position.x,
              y: _0x4075b8.position.y
            },
            target: _0x4075b8.target && {
              id: _0x4075b8.target.id,
              x: _0x4075b8.target.x,
              y: _0x4075b8.target.y
            },
            base: _0x4075b8.base.id,
            in: _0x4075b8.in && _0x4075b8.in.id,
            direction: _0x4075b8.direction,
            team: _0x4075b8.team.id,
            player: !!_0x4075b8.isPlayer
          };
        });
        var _0x398e3d = Object.values(_0x13f1d1);
        var _0x45acf6 = _0x398e3d.filter(function (_0x1897ec) {
          return !_0x1897ec.used;
        });
        if (_0x45acf6.length) {
          console.log("unused", _0x45acf6);
        }
        var _0x435fd4 = {
          teams: _0x4ce0a5,
          bases: _0x525859,
          units: _0x349d47,
          points: _0x398e3d
        };
        console.timeEnd("saveState");
        console.time("stringifyState");
        var _0x284405 = JSON.stringify(_0x435fd4);
        console.timeEnd("stringifyState");
        console.log(_0x284405);
        return _0x435fd4;
      }
    }]);
    return _0x431348;
  }();
  var _0x27cfdc = function () {
    function _0x469210() {
      _0x43fd4a(this, _0x469210);
      this.mode2 = false;
    }
    _0x5796f0(_0x469210, [{
      key: "get",
      value: function () {
        return this.mode2;
      }
    }, {
      key: "switch",
      value: function () {}
    }]);
    return _0x469210;
  }();
  var _0x13ba7e = function () {
    function _0x7e24b9(_0x20b84b) {
      _0x43fd4a(this, _0x7e24b9);
      this.pool = _0x20b84b;
    }
    _0x5796f0(_0x7e24b9, [{
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
    return _0x7e24b9;
  }();
  var _0x3c5831 = "!!!JORDAN!!!\n!@#$%^&*()\n!AMERICA!\n!GO! ANTRONI\n!MEXICO!\n#1\n#1 Malta\n#20$\n#add north k\n#canada\n#canadawin\n#Canadian\n#DOGO\n#kittycorn\n#Love\n#shopatshara\n#superstar#\n#teamtrees\n#TeamUSA\n#WIN\n#zephyr\n$$$$$$$$\n$$$$$$$$$$$$\n$_$\n$1000=1%\n$HydroFlask$\n$TheCamilo$\n( . )( . )\n( ͡° ͜ʖ ͡°)\n()(_)()\n(:\n(▀̿Ĺ̯▀̿)\n(▀̿Ĺ̯▀̿+̿)\n(☢️)\n(0_0)\n(0_0) Elixr.\n(0_0) GUNNER\n(0_0)USA4EVR\n(PAK)AMMAD\n(USA)\n(づ｡◕‿‿◕｡)づ\n************\n****KONG****\n*ÙwÚ*\n*тип крутой*\n.\n...\n-....-\n...???\n..OTTOMAN..\n/\n////\n:------\n:)\n:))\n:):):):):):)\n:-_-_--_0\n:3\n:D-l-<\n:l\n@##/////////\n@butcheck.Bo\n@FRANCE\n@yana\n[GD]Daninot\n[HaHa]x2broJ\n[IX]FIREPWR\n[IYI]Diriliş\n[P] Parynhar\n[P] Quest On\n[SM\n[SM]+PRO\n[T]TARGET\n[TT]Fatso\n^_^\n-_-\n-_GO=GREEN_-\n_Russia_\nSDD\n{_MYTHICAL_}\n{AZ} hhhh\n{Trump 2020}\n|==|=======>\n|A+B|≤|A|+|B\n~Royo~\n~siam~\n~strontium~\n~Typical_YT~\n¡COLOMBIA!..\n¡COLOMBIA-.!\n₮ⱧɆ+₭ł₦₲\n〘☢〙\n꧁༒☬Yee☬༒꧂\n++\n+++KONG+++\n+❤гмаолпоапл\n</keysmash>\n<algeria\n>:)\n⫷♔ツ⫸₭€₣₭Ø\n◙ Cube ◙\n█▬█ █ ▀█▀\n█▬█+█+▀█▀\n☾★🇵🇰\n♂emily♀\n♥☻☺France☺☻♥\n♥ELENA♥MX♥\n♥Emma♥ ^^\n♥OH FRANCIS♥\n✠Huxery✠\n❤AMERICA❤\n❥❥𝙪𝙬𝙪+✉\n✨   ℱỮŘ¥ ✦\n☙Ѻ❧\n⚖️ for 🇵🇰\n0.0\n0TanqR0_YT\n1%=$1000\n1%=1$\n1%=1000\n100% legal\n100% PLS\n100%BOY\n100%PLS\n1000$=5%\n1000+1.\n100000 like\n123 yur dead\n1234567890hm\n1W\n2 shotsVodka\n2.0\n2.cuz\n2.cuz sweden\n20 BOMS PLS\n20cent\n22W\n2bias\n2mokey cat\n358/2\n3D\n3r1k\n5 world cups\n5+world+cups\n68.93%\n69420fu\n6RSKY9\n700fu\n7snoo\n8===D 69\na\nA Bit Tired\na cat\na good name\nA MAAAAD MAN\na person\nA small loan\nA_person\nA+\na+guy\nA+Person\nAA\naa\naaa\naaaaa\naaaaaaa\naakashtheboi\nAakhyan\naakkash\naaon\nAarav\naarope\naayash  pro\naayyy\nAB\nab\nababua\nabbeäbög\nÄbbëï\nAbby\nAbc\nabc\nAbc123\nabcde\nabcdefg\nabcneat123\nAbdul\nAbdul aziz\nabdullahhi\nabdulmajid\nabekat\nabi\nabir\nABIR.216\nAboriginal\nAceOfSpades\nachoo\nachtung\nacts2.38(bi)\nad devil\nADA\nAdam\nADAM\nADAWE\nADD JZD_1029\nAddie\nAddie!🍰!!!!\nADR\nAdrian\nADROS\nadsa\nADSF\nAdventurer2\nÆ\naeiou yyyy\nAG31\nagent x9999\nAgi\nAgt+zsafety\nah baba\nahh\nahhaha\nahhh\nahmad\naid\nAidan\nAiden\nAIDEN ROBINS\naids\nAigarosik\nair\nAIRFORCEGIRL\nAis\naiskkdSK\naj\nAJ PLAYZ\nAJYomastr\nak47\nAK-47juice\nakaash\nakaysha\nAkbar\nAkira\nAl\nalabama\nAlan Edam\nAlan Walker\nalani akacat\nALB\nAlba\nalban\nalbania\nAlbania\nALBANIA\nAlBaNiA\nAlbania4ever\nalbert\nAlbertEnstin\nAlbertnoobb\nalegor\nAlejo+Toro\nalek\nalelilisisi\nAlen Jins\nalen+roshni\nAleQu\nAlex\nalex\nalexa190\nalexandra\nAlexey\nALEXIS\nalexx\nAlexzandra\nalgeria\nALGERIA\nalgerian boy\nalgirian boy\nAli\nali raza\nAli Sh\nALI07\nAliA\nalice\naliraza\naliv\nALIVE\nAll Blacks\nallahakbar\nallect\nalli_a\nAlmidorya\nalpha wolf\nAlred\nAlvato\nalx\nAlx\nAlyssa\nAM_savage26\namanda\namantegado\nAmarica\nAmbush flex\nAmelcia\namelie\nAmelie\namerica\nAMERICA\nAmerica\nAMERICA !!!!\nAMERICA YEET\namerica=best\nAMERICABABY\nametz\namg friends\namit sharma\nAmmar\nAnarchy\nanasaqil\nAnasun\nAncalagon\nANCIENT01\nAnd I oop\nAnd i oop\nandres\nAndrey\nandrey 22807\nandroid\nAndromeda\nandrw22\nangel\nAngel\nangelamunt\nangelo 1510\nangelo abas\nangg31\nanimals 101\nAninha\nanis\nanita a\nanna\nanna bortion\nANNAFEDE\nAnonihouse\nAnonymous\nANONYMOYS\nanyád\nⒶⓄⒾⒻⒺ\nAON\napepa\nApple Inc.\napply+pie\nArabs+no.1\naraceli\naragatina\nArarat\nArdian\nargentina\nARGENTINA\nArgentina\narhaan\nAriANNA\nARIANNA77\nariel\nAritz\nArizona\narmagedon\nARMENIA\nÁrpád vezér\nartem\narthur\nArtury\nARYAN RACE\nas20\nAsd\nasd\nasdf\nasdfgh\nAsh\nash\nashe\nashley\nAshmita\nAShoky\nAsian Man\naspessoas\naspod\nasta\nATAHAN\natankwadi\natizaz\nAtletiMadrid\nAtomic_Nut\nattack70\naubrie\nAudrey\nAuri :3\nAurora\nAUS\nAus+best\nAusie\nAussie\naussie\nAUSSIE\nAussie ****\naussie 1\nAUSSIE 2\nAUSSIE 64\nAussie Aussi\nAussie beast\nAUSSIE ROO\nAussie+Aussi\naussie18\naustin😠😇😜\nAustrailia\nAustralia\nAUSTRALIA\naustralia\nAustralia 1\nava\nAvadaKedavra\nAvagyan\nAvalak13\navalina\nAvans\navd\naver\navi\nAvocadoToast\nAvrey\nawd\nawe\nAwesome\nawesome\nAWESOME!\nawien chewie\naxel.liam.kl\nAXIS\nAyaan\nayaz\nAYBARS\nayberk\nayden\nAytric\nAyuma\naz\nazan\nAZERBAIJAN\nAzerbaijan\nazerbaijan\nAzerbaycan\nAZƏRBAYCAN\nazz\nAzzyland\nB\nb\nB GFCRTEN\nB_SAUCE3 gam\nb2by\nbab\nBabilawi\nBaby\nbaby lips\nbabyJack7\nBACK IN NAM\nbad+bunny+\nbadr\nBaguette\nBahartet\nBahrain\nbahraini3451\nBaju\nbaka\nBALI\nbaligeul\nbalša\nbalta\nBalzac\nbam\nbamam\nBAN\nbanana\nBanana\nBANANA\nBanana boat\nbanana man\nbananapotato\nBangladesh\nBANGLADESH\nBara\nBarni\nbarrhet\nbart\nbart simpson\nbartolo\nBaryonx\nBäschti\nbasem\nBasher\nbatty\nbautista\nbazing\nBB\nbb\nbbb\nBBB\nbbobbobo\nBC190\nbd212\nBeakers Lab\nBeanos\nbeanos\nbear\nBeast\nbeast\nBeast+Mode\nBeau\nBecca\nBEEF CURRY\nbeep\nBees\nbejnjamin\nBelarus 2\nbelgium\nBelgium team\nBella360\nbellathecat\nBello\nBelyn G.\nben\nBen\nBEN\nben dover\nBenDover\nBÉNÉ\nBenet\nbenitocamela\nBenji\nberddewalvis\nBernie+2020\nBernie2020\nbest\nBEST BOSS\nBest Player\nbest.io\nBestie#2\nbestisindia\nbesty\nbfcjfv\nBFFs\nbh\nbhhygu\nbhoongar\nbia\nbiche\nbicth\nbielARTICO\nBig\nbig boi\nbig bois\nbig chicken\nbig dad\nbig daddy\nBig Daddy\nbig e\nBIG MAC\nbig nicca\nbig papa\nBIG SHAQ\nbig shaq\nbig sista\nbig slangers\nbig+boy\nBig+Boy\nBig+Boy=NOOO\nbig+brain\nBIG+BRAINS\nbig-boy1158\nbigchungus\nBigChungus69\nBIGETRON\nBIGGERSON\nBIGGGGBOY!\nbiggiecheese\nbigpeen69\nBigRgo\nBigs\nBigT\nbigtoe\nBiH\nBiiG Makk\nBiju Mike\nbill\nbillaraa 1\nBilly\nbillybai\nBillz.\nBin\nBinder\nbip\nbiro BR\nbishop\nBj\nBJ\nbjorn\nBK\nBl3ckJack YT\nBL7\nBlackFlash\nBlacky\nblake\nblantra\nBlaster\nBLClRE\nBleh\nbleumeanie\nbling\nBlink\nBlip Blop\nBLITZ\nBlizzard156\nBlob\nBLOB BOY\nBlobble\nblobs\nblobsly\nBlocked\nBLOCKITY\nBlood4Life\nblossom\nblow\nblow me\nblu+the+best\nblub blub\nblue7y\nblueberry\nblueberrypie\nblueboy\nbluebronco7\nbluhbluh\nblur\nBlur 2\nblur 3\nBM\nbmw\nBO$$\nboas\nbob\nBOB\nBob\nbob esponja\nbob ross\nbob the noob\nbob100\nbob2\nboba\nBoBa\nbobbone\nbobert\nBOB-omb\nbobplayz\nbobthebuilde\nbobyz\nBoch is back\nbode\nboe\nBOEF\nBog\nbog leo\nBogDan\nBognar\nBoho\nboi\nBoi\nBOi\nboiii\nboizzzzzzzzz\nbojkata\nbok\nboneless\nBonitão_br\nBonny\nboo\nboof\nBOOFI\nbooger08\nBooh!kkake\nBOOOOOOOOOY\nBOOP\nboot\nbop\nbordbistro\nbörk viking\nborna\nbosna\nBOSS\nBoss\nboss\nboss+TW+BM\nBossDude 2.0\nbot\nBOT\nbot boooooot\nBOT+2.0\nBOT1\nbot1212\nbot12122\nbotaaaaaa\nBots\nbouji\nboy\nboy+loves+me\nBoysInGreen\nboyviking\nbozo\nbraaaaaaaaap\nbraaaaaap\nbrady\nBrainiac14\nBrasil\nBRASIL\nbrasil\nBRASIL CARAI\nbrasil-matt\nBRAXTON$$$\nBRAXTON$$$$$\nBrayan\nBRAZIL\nBrazil\nbrazil\nBrazil mito\nBRAZIL MITO\nBrazil Mito\nBRAZIL MITO2\nBrazil+mito\nBRAZILRULES!\nBrazilSnake\nbrenaopvp\nBrendoo1\nBrett\nBrian\nbrickboss\nBRITIAN\nBritish\nBritSpeed\nbro\nBrockly san\nbrofourt\nBrookie_uwu\nbrooklyn n\nbrooxslugger\nBROSKITO\nBrownBear\nbru\nBruh\nbruh\nBRUH\nbruklin\nBrunofoda\nbrush my hat\nBRUTE\nbryleigh\nBTS\nbts army\nbubba\nbubby\nbucins\nBuddy\nBuguinha_13\nBulgaria\nbulldog68\nBuna\nBUNINGS SNAG\nBUNNINGSSNAG\nBunnyfur\nBunnyo\nburger\nButkizz\nBúúúzi\nbuwygib\nBuz-T\nbye\nBYE\nBZX\nC\nc vcbgnbfm\nc2\nCaam\ncaarlaaa❄️\ncaca\ncaca water\ncade\ncaden\nCAIO\ncake\ncalabresa\ncaleb\nCaleb\ncalebb213\ncallum\ncam\nCANADA\nCanada\ncanada\ncanada best\ncanada sucks\ncanada trash\nCanada=life\ncanadabest\nCanadaLeader\nCANADIANS\nCandinho\nCANNON\nCantu\nCapitooooosh\nCappapotomus\nCAPS LOCK\ncaptain\nCaPtAiN_MaRs\ncarenzo\ncarl\nCARLLLLLLLLL\nCarlos\nCarolus Rex\ncarrot\ncarrots1\nCARRSRSTDYYT\nCARSONCAVE\ncart\nCarter\nCARTER\nCash\ncash\ncat\ncatboy_isaac\ncatcher\ncatforcanada\nCathal\nCaThErIne\nCatMaker\ncats\nCATS4LIFE\ncaule\nCAussier\ncc\ncc gamer\nccccc\nCerealKiller\nCF\nchags\nchai\nCHAIR\nchamp\nChampion\nchanyeol\nchao\nChào\nChaoCB\nCHAOSCC101\nchap\nchar\ncharie c\ncharlie gren\ncharlotte\nchase\nChase H.\nChaselliot9\nChavez :v\nChavez Vive\nchckenvnd_lo\nCheckmate\nchee ne ma\ncheeki breek\nCheerwine\ncheesballxx\ncheese boi\ncheeseburger\ncheezydibz\ncheng chang\nChesse\nChewie\nchgicken\nchicken\nchico rey\nChile\nchill\nchill B )\nChilllllllll\nCHiNA\nchina\nChina\nCHINA\nCHINA RULES!\nCHINGONA\nchinoooo\nchistmas!!!!\nChloe\nChomp\nChopper\nchris\nchrisbrunt\nchristian\nchristine\nChristmas\nchuckll boy\nchuglet\nchungo scrun\nchynn\nCirrus\ncisarmilos\ncj\nclaire\nClara\nclash\nClatter\nClaudia\nClenched\nClint\nC-Money\ncnhwrg\ncoal\ncobby\nCobby\ncobos\nCocaCola\ncoco\ncode lazar\nCode: wolf\ncodelazaryet\ncolombia\nColombia\nColombia hpt\ncome on uk\ncome tudo\ncomi sua mae\nCOMMIE KILLA\ncommonwealth\nCommunism\nComputer_01\nConic\nconor\nConor\nconquistame!\ncontrolw=hax\nCookie Gamer\nCookieGuy\ncool\nCOOL\ncool  boy\ncool guy 39\nCool man\ncooleo\ncoop\nCooper\nCORBIN$$$$$$\nCorey\nCorvus\nCosmic Bagel\nCosta rica\nCougarclaw\nCoulombCube\nCow+goes+moo\nCOYR213\nCR7\nCr7\ncrack\ncrackhead\nCraftian\ncrainer\nCrainer\ncrainer1422\ncrazy nonga\nCRAZYARNO\nCrazyKidooo9\nCreeperAwMan\nCrimeaisours\ncristianocr7\nCroatia\nCroatia4Life\nCrocomire\ncrown killer\nCroydzzz\ncskns\nctrl w\nctrl w team\nctrl+w\nctrl+w (HACK\nctrl-w\nctrlwforspee\nCtrlWToHack\ncube\ncubix\nCUCA\ncujo\ncullengreat\ncupcake\nCurry\ncute+hunter\nCute247\ncw\nCYBERHUNTER\ncyka blayt\nCyka Blyat\ncyprus demon\nCyrus 2\nCzech Empire\nCzechia\nd\nda way\ndab\ndab master\nDaCeeb\ndad\nDad\ndadaddy\ndaddy\nDaddy\ndaddyo\nDaFisHBoy83\nDafloppa\ndaichei22\nDakDudez\ndakota\nDALE SNAIL\nDaleWhite\nDallasusa\nDaltonW_GG13\ndalyarak\nDAMONKEYPREZ\ndan\ndance+is+fun\nDancequeen\ndanger\nDanger\nDangerMouse!\ndani21\ndaniel\nDaniel\nDaniel@USA👑\nDaniella\nDanislav\ndank doge\nDanmark\ndannybot\nDanTDM\nDANTDM\ndantdm\ndanTDM\ndantegol1432\ndany_many\nDANZ\ndapizzaman\nDarius\nDark\nDark Nebula\ndarkleader\nDarkyz\ndarrison33\nDarsh\nDarth Sauron\ndasda\nDASH\nDatiMomtente\ndave\nDavid\ndavid\nDAWG8\ndawnelle\ndaws dhbabad\nday\nDAZ\nDBT_CAMERON\nDBT_diesel\nDBT_James\ndd\nDd\nddd\nddog\nDe\nde naam\ndead\nDead\nDeadpool\ndean marney\nDeath+Itself\nDEATHOFKILL\nDeathPlays09\ndebaixoviado\ndedi\ndee vegemie\nDEEMAR\nDeepak\nDEEZ NUTZ\nDegurchaff\nDeimon.EXE\nDejmian\nDem REREs\ndEm0g0RgAn\nDema\nDemid\ndemogorgon\ndemongurlie\ndenisa\nDenmark\ndennis\nDerEchte\nderf\nDerGerman\nderive omr\nDerNEGER\ndesmatasão\ndestroyer\ndestrukt\nDEUTSCHLAND\nDeutschland\nDEUTSHCLAND\nDeutshland\ndevansh\ndfew\nDGYA8805YI\ndharel\nDHP studios!\nDiamondlucas\ndiana\nDiar Arifi\ndiara\ndie\nDIE\nDie to Death\nDie+noOB\ndie25\nDieforme\nDiegoChacon\nDieku2909\nDieku2909+MX\nDiex177\ndieyou\nDiggyHole\ndigitalkids\nDiktator\ndiman\nDimka\nDimond\ndin mamma\nding dong\nDingleberry\ndingo\nDINGOEZ:(o)\ndio sama\ndio12345\nDis2008\ndisney+\ndkofjkvdfvfn\ndo\nDO CTRL+W\ndoge\nDoge\nDoh\nDom\nDomiiiii\nDominate\nDOMINIKXY\nDonald Duck\nDonald Trump\nDonald+TRUMP\ndont hurt me\nDont kill me\ndont kill me\ndont+kill+\ndont+kill+me\nDoNtAtMEbRo\nDONTKILLME\ndontkillme\ndontkillnoob\ndoof\nDOOFIS\ndoom\nDoom\nDooney\nDowdi\ndr.paper\nDracoHeart\ndragnea life\ndrago\nDragon3.0\nDrama\ndreizer\nDREWSKI\ndripak-47\nDrisikray\nDrizzyAiden\nDrogon\nDropBear\nDrUgs\nDRUNK FIG\nDRUNK OBAMA\nds\ndsallsa\ndsawwaa\ndsf\nDTMdan\ndtrgfxfghuyg\nDubai\nduc+anh\nduck\nDuck\nduck duck ya\nduck+2.0\nducky\nDucky\ndude\ndudu+lindo\ndumpstered\ndutch\ndxrk_shxdxw\ndyl\ndylanperr4\ndynamois\ndysha\nDziadzia\ne\nE\nE MASTERMORT\ne.romero\nEamon\neamon\nEastNed\neasy 1° top\nEat\neAt iT\neat me0\neat+me\nebuking\ned\neden1\nEder\neder\nedgar\nEDKH\neeee\neeeeeeeeeeee\nEeonegee\neevee\negg\nEGGGGGGGG\nEgoitz Hernandez\nEgypt\neh\nehan\nel guero\nEl Salvador\nEL SALVADOR\nEl Thirox\nEL VIEJO360\nelaine\nELAM0\nELENA174RUS\neli\nElias\nelias sucks\nelijah\nElijah\nEliminater\nEliTinyRex\nELItinyREX\nella\nElmastroOO\nelmira\nEloyFerreiro\nƏlqasım\nElRoberto93\nelsacha35\nelvis\nELVIS OMG\nElWachin\nEma\nEmad\nEmanuel\nemerald\nemil\nemily\nemily 18\neminem\nEMINEM\nemir\nEmirkohall\nEmirPr14\nemmet\nempire of is\nEMPIREMEMES\nemre sikecek\nEngille\nENGLAND\nEnsar_V7-123\nEnzito\nEnzo plays\nepic+noob\nepic+pro!!!!\nEquipoMéxico\neragon\neres mariqua\neric\nerichbete\nErick\nerick\nERICLOL\nErik\nErli\nERNAR\nErnesto\nerwef\nEshla\nESPAÑA\nEspañita\nespecteral\nestonia\neth50%\nethan\nEthan\nEthnic Brit\netyg6f4567v7\neua\neufwe\nEugene.com\nEve Get\nEverleigh224\nEveryday bro\nEvgenii\nevil\nEvil John\nEWA FAKA\nEX Guardian\nexpectations\nEYE LIGMA\neyes\nez number 1\nf\nF\nf Shaman\nf u       .n\nF*** rUsSia\nf**k\nF*ck off\nF*ck+off+\nf111\nfaa\nfacundo\nfady\nFAHEEM\nfaith\nfaku\nFalak\nFANAF\nfantastic 5\nfar5\nfarhan\nFARİD\nfarleyfun\nfat pig!!!!!\nfat+pig!!!!!\nfatafat land\nfatanah\nFATHERLAND\nfatty\nfaye\nFaZe jarvis\nfaze lucas\nFaze_Uzamaki\nFaZeAtlantic\nFBI\nfbi\nFCK U\nfddjbkhbjkdf\nfdgfh\nfdkjm\nfearless70\nFeetus\nfermito2008\nFernanda\nFernanfloo\nFERRIX\nFEW\nff\nfff\nffff\nfgeetv\nFGEETV FAN\nfgeev\nfgfd\nFGTEEV\nFgteev\nfgteev\nfgteev Aarav\nFGTEEV DAD.\nFGTEEV DUDDY\nfgteev duddy\nfgteev fan\nFgteev Lexi\nFGTEEV+DUDDY\nfgtv\nfgtv fan\nfgtv+duddy\nfgtvv\nfgtvvy fan\nfgva\nfhhcvhvdvhhg\nfiawsome\nFierce\nFIFI\nFight me\nFight Me NOW\nfighter\nfilip+t.\nfilipino\nfire\nFIRE_BOY\nfirered\nFISHSTICK\nfishy\nFiVx\nfizzgig\nfj\nfJWASDKNFIO\nFlame\nflamingo\nFlash\nFletch\nFLEX TAPE LF\nflipous\nFlitzdefelar\nfloat\nfloof\nFlora\nflorida\nFlorijn\nFLYBOY\nFlying solo\nflynn\nfolk\nFOOT\nFOR AUSSIES\nFor straya\nForeigner\nForge\nForrest gump\nForrest Gump\nFORTNIT2\nFORTNITECOOL\nFotis\nfour twenty\nFox\nfoxy soap\nfoxy+soap+\nfr\nfrahermes\nfrance\nFrance\nFRANCE\nFRANCE!!!!!!\nFrancewillwi\nFranco\nFranco777\nfrancoooo\nFrancsFranco\nFrank Pepe\nFrankenstein\nfreank\nFrece\nFRED\nfreddy\nFREE FIRE\nfreek@\nFreence\nFrenchboy456\nFrenchPlayer\nfresh\nFreya\nfriemel kont\nfriend\nFrodo\nfroggyboy483\nFrooty\nFrost King\nFrostFire\nfrozen 2\nFRT\nFryskjongkje\nfsd\nfsu\nftgv+fam+boy\nfu\nfucj swedan\nFull\nFurt1\nfutdebt\nfutebol\nFutureHacker\nFUZIONS38\nfvv\nfwog\nFyre\nℱгίєηđ\ng\nG\nGaaaaaldi\nGabe\ngabe\nGabe itch\ngabe itches\ngabe+itch\nGABEE\ngabes dad\ngabi\nGabi\ngabienivaldo\nGABIFOOTBALL\ngabigol\nGABO\ngabriel\ngabriele\ngagaga\nGage\ngage\nGalaxy Paper\nGalaxy+Blitz\nGalaxyKnown\ngalexyyyyyyy\nGallardin\nGamer 101\ngamer+bent\nGamerJax11\nGamers\ngamingkhan\ngandork\nGanesti\ngang\nGanjaWay420\nGapci\nGarlictwins\ngarrett\ngato panama\ngautham pro\ngay\nGay - Niger\nGB2A\ngd.henrique\ngday mate\nGEAR 4 LUFFY\nGE-HDT\nGemany\ngemma\nGem🍔🍕🍟\ngendikari\nGeneralTOM\nGeorge🐖🐷🐽\nGeorgia\ngeorgia\nGeorgian\nGErma\nGERMAN\nGerman Guy\nGerman Reich\nGermanReich\nGermanreich\nGermany\ngermany\nGERMANY\nGermany 1944\nGermany Ian\ngerms\nGerry Adams\ngesuzzo\nget clapped\nget gud\nget rekt\nGet+off\ngetmethanos\nGetNaeNaed\nGetRektM8\ngfdxhgzs\ngfgdfsgdgd\ngfgfg\nGG\ngg\nggg\ngggg\nGggggggggggg\nggman\nggs\nghost\ngialy\ngibs 1234\ngilad ori z\nGiocatore\nGipssksmm\ngiselle\nGlaGlaGlaGla\nGlitch222\nGLORIOUS\nGlue\nGlug glug\ngm\ngmb\nGMF MATTEO\nGM-SCORPION\ngo\ngo AUSTRALIA\nGo Canada101\nGo Nepal\ngo NZ\ngoat\nGOAT\nGoAustralia🇦🇺\ngoblin\nGOCANADAGO\nGoCanadaGo\ngogeta\ngogo\ngogogadget\ngojira\nGOKU\nGoldpaper\ngoloma\ngonnacrushU\ngood\ngood girl\ngood old USA\nGoodbye\ngoogle+\nGOOIE\nGOOTED\ngordominais\ngorqui\nGota+(GER)\nGP/Denmark\nGrace\nGrades\nGradovskY\nGramma\nGran\nGrease light\nGreatGermany\ngreece\nGreek Geek\nGreen\ngreen\nGreg\nGregory\ngreta rex\nGrey\ngrey couch\nGrian\nGringo\ngrucci_gang\nGuardsman\nguatemala\nGuava+Juice\nGucci\ngui10\nGuilherme\nGuizinho\ngurnishan\nGUS\nGustav Vasa\nGustav2Adolf\ngustavo\nguy\ngyggygygygyg\nh\nh.g.\nha§cker\nHabilis\nhacker\nHagenGANG\nHagenGANGSTA\nhaha\nHAHAHAHAHHA\nhahahha\nhai\nhail norway\nhakan23cm\nHAKER\nhallah walla\nham\nham pizza\nhamoodeh\nhamza\nHamza\nHanii\nhank\nHappy Boy\nhappyplace34\nHar\nhar+de+snarl\nharanga\nhardik\nHarrison\nharry\nHARTK VTKUPV\nhatz\nHAWAII\nhayhay\nHazbin hotel\nHECTOR\nhedgi\nheehoo\nhehe\nheheeh\nhei på deg\nheinrik\nhejhej\nhejjj\nHekler\nHelen+\nHELO\nhelp\nHELPFOR NUKE\nhelpme\nhenk\nhenry\nHenry2209\nhenrydanger\nHenryking\nHer0\nHermione\nherobrine\nHexa\nhey\nhey you smel\nheyhey\nHEYIMCASEY\nHeylo\nheyyyyyyy\nheyyyyyyyyyy\nHGC\nhgfd\nhhh\nhhhh\nhhjjhjhjjhjh\nHHKB\nhi\nHi\nHI\nhi bob andje\nhi boy\nhi dude\nhi im stan\nhi luis\nhi peoples\nHi Walkers\nHi!\nhi+123\nhi+die\nhi+person\nhi+wyatt\nhi+😛😛😛😛\nhid\nhidde\nHidden Leaf\nHide in tree\nHIGH FIGH\nhihi\nhihihihi\nhihihihihihi\nhiiiiii\nhiiiiiiiiiii\nhikeplays\nHillyBilly\nhindustan\nhipe\nhirochima\nHitman\nHiTTVbtw\nhi😛😛😛😛\nhjb\nhjgkljşsdfos\nhjjj\nhjk\nhkiufit\nh-k-v\nhmm\nho joe\nHobbit\nhockeylover4\nhoddieryne\nhoe\nHOGWARTS\nHoi\nhola\nHolden chan\nhOle.io\nHolly\nHoly Romans\nHOLYJARVIS\nHomer_S\nHONDURAS\nHong Kong!!!\nHONZA\nHOT DEATH\nhot dog\nhour\nhouston\nhouthi rebel\nHow you doin\nhowdy\nHristijan\nhrllo\nHSWR\nhtflame\nHuddy!!!\nHUEstation\nHufflepuff\nHUGO\nHUGO-IPTV\nhugoprohaker\nHungary\nhungary\nhunter\nhuts\nhuzefa\nhvfhjjmg jvf\nhwy\nhxhxjjk\nHyacinth\nhyh\nHyper\nhytw123\ni am a noob\nI am Charles\nI AM DA🐐\ni am drad\nI AM GROOT!!\nI am Noob\ni clapped u\ni got 100nvm\ni kill you\ni love CHINA\ni love you\nI no harm u\ni no kill\ni pro $$$$$$\ni wanna die\nI want Peace\ni will eat u\ni win\ni win sike\nI.m greece\nI+am+DA+🐐+\nI+AM+DA🐐\nI+AM+MENACE\ni+will+beat+\ni9=7\nialwayswin\nIan\nibad\nice cream\nICE CREAM\nicebear42\nicecreamking\niced 2\nICEman\niceman\nICEPAJINGKO\nIda\nidiot\nIDIOT\nidk\nIDK\nIDK18\nID-OS\nidris\nIf you\nifirst4evr\nifkillmeugay\nigotthesnap\niHASYOU\nihatemy life\nIhjhy\niiiii\niiiiiiiiii\niiiiiiiiiiii\nIKEAN EMPIRE\nikjuhygtfrde\nIKKO\nilie\nill roll ya\nilovecorn\nILoveMyMommy\nIluvcats\nIm a mer\nim a toast\nIm a tree\nim depressed\nim gay mama\nim in school\nIM THE BEST\nIm your boss\nIM_IRISSH\nim+100%india\nIM+A+PAPER\nIM+A+SQUARE\nIm+Thanos\nim100percent\nima winner\nimachristan\nImaunicorn\nimbryk\nimCANADIAN\nimcoming4you\nIMGRINDIN4UK\nImJustDrunk\nimm win bruv\nimmigration\nIMPEACH !\nIMPEACH!\nImpeachment\nimpeachment\nImpeachTrump\nImperium\nimtc\nimusti42\nindia\nIndia\nINDIA\nIndia rules\nindia560020\nIndia-best\nindiaisbest\nindian\nINDIAN BOSS\nIndian game\nindian king\nIndian Pro\nindonesia\nINDONESIA\ninfinity\nInfinity\ningooooooooo\ningrid\nInklink\nINKYZ\ninuyasha\nInvensible\nio\nio2\niornmanmk75\nios.0\nIOU\nIRA\nira kot\nirairaniran\nIRAN\niran\nIRAQ\nireberrrr\nireland\nIreland\nIRELAND\nirene\nIRIS\nIrish Brit\nIRON MAN\nIron Sabbath\nironmanmk14\nironmanmk608\nirsh lad\nis the best\nisaaac\nisaac\nIsaac and Sa\nIsaac H LACS\nisaak\nISAC[TYB]\nisam\nisamil\nIsamil_pro\nISINHA\nIslambad\nismailovic15\nISMELLPENNYS\nIsrael\nisrael\nisreal\nIsreal\nissasheep\nIT\nit\nit_victory25\nITA..KILLER\nITALIA\nitalia\nITALIAN\nitaly\nITALY\nItaly\nItaly_Boch_1\nITALYYYY OwO\nits meee\nits ye boi\nIts_BrunoYT\nItsOver\nıu<bbjhızuui\niungiyoibbbb\nIvan\nIvanBars\nivangol\nIWINYOULOSER\nixpo\nizahia\nIzzy\nizzy\nI💗😘Jacob\nJ\nj\nJ.E.R.K.\nj.t\nj0enu\njace\nJaci\njackbenimble\njacob\nJacob\nJacquie\nJAD\njafet.v.593\njaidyn\nJak+\nJakdude\nJake\nJake Cool\nJAKE+WALL\njakemerecr\njakituning\njakkie smith\njakobandmax\njamaica jr\nJAMAICA4LIFE\njames\nJames\njames.w\njamesward+p5\njan\njanbannan\nJasmineSandl\njason\njavi\njaxon\nJaybae82\njayden\nJAYJAY++BOYY\njaylen\nJayle👟locker\nJayMinecraft\nJAyyy\njaz\nJBEE\njbl\nJD\nJdvinter\nje\nJe mama\njebisesrbija\njed123456789\njeef\njeff\nJeffery\njeffy\njelly\nJELLY\nJelly\njelly fan\nJelly2.0\nJellybeans\njellyiscool\nJEMMA DA UNI\njenne\nJENS NORRMAN\nJeonghyeok\nJeremiah+\nJeremy Stoke\nJerry\njessica\nJèsus Crust\nJesus Saves!\nJetsky\nJew h8er\nJews...\njezwik\njfng\njhetalal\njhlkhlkh\njhun vhuv vc\nJicken\nJigglewiggle\nJim Jam Jong\nJimbo\nJimenakiller\njimmy\njimmy+swag\njimmybob\nJingle Bells\nJJ\njj\nJJs\njk\njkhh\nJkk\njksdjksdqa\nJL\njlovo\njmlvk\njo\njo mama\njoddiejo\njoe\nJOE\nJoe\njoe daddy\nJOE MAMA\nJoe mama\nJoe Mama\njoe mama\nJOE moma\nJoe?\nJoe+Moma\njoe+mooomyy\njOEmAMmA\njoey\nJogador\njohan\njohao\njohn\nJohn\nJohn+Ellis\nJohnSA\njohnson\nJOJO\nJojoeeta\nJoKaRy\nJoker\njomo\njon\nJon\njon snow\njonathan\njoni\nJOOJ\nJooJ\nJordan\njordan 1\njordankiller\njordi gay\njordyn\njos\nJosBanana\njose\njose A. $$$$\nJOSE LOL\nJoseMourinho\nJosephi Krak\njosh\nJosh\nJoshTSM\njoshyboy\nJoshyLegends\njosyel\nJotaro+kuzo\nJoueur\nJR\njswag\nJT\njtt\nju\njuan\nJuanM\njuanson\nJuChE GaNg\njudge rachel\nJuegagerman\nJuhis\njuice\nJUJU\njuju\njulian\njuliana\nJulie\njulie\njulien\njulius\nJuly 4 1776\nJumbo\nJune Iparis\njunebee09\nJupiter\nJustice\njv sqod\njx\nJ🐭\nk\nK\nk1rby\nk1slyy\nk1w1p0w3r\nkaaaaarl\nKaaba\nkaas+\nkafu\nkage\nKai is mine\nKaitlynn\nKaizar i Rum\nKaKa\nKAKA DO C.V\nkakka\nkaleb_1204\nkall+öl+hurr\nKappetroelia\nKaren\nkaren is a b\nKarl\nKarl X\nkat gamer 12\nkat gamer 77\nkatrina\nkatsudon\nkatt russian\nKatya(;\nkatΣ(￣ロ￣lll)\nKawhi\nkayaismylove\nkayden\nKazakhstan\nkbmnbuidhibd\nkc\nKC\nkcv\nkd\nKEBAB\nkefal\nKeizo\nKek+Bur\nKEKW\nken kaneki\nKendall\nkendog\nkenya\nKerby\nKerfuffle\nKERMIT\nKevin\nkez\nkgf\nkhaled\nKhattab\nKiddo\nkidfury2123\nkien\nkier\nKilian2.0\nkill\nkill me\nKill me\nkilla_cat\nKiller\nkiller\nkiller!\nkiller+\nkillerzombie\nkillmonger\nKillTrump\nKillz\nkim jon uun\nKim Jong Un\nkimberly\nKimitzuu\nKim-Jung-Un\nkinca\nking\nKing\nKING\nKing 100%\nking 11\nKING BOB\nking boy\nKING BRIER\nking Jr\nKING KILL\nKing of all\nKING OF ME\nKing Pengu\nking rian\nking.io\nking_iusti\nKINGBEAST😛\nkingcobra\nKingGeorge\nkingkinohi\nkingman\nkingnoah\nkip\nkira\nKIRB!!\nkirito\nKittaM\nkitty\nkiwi\nKiya\nkk\nKKTC\nKLAUS\nklc\nKlose\nKlovborg\nKnickers\nknock knock\nknockyghost\nknowlen\nkoasar\nKoby(billy\nKohai\nkolek\nkolibri\nKonstantin\nKonstantinos\nkool+cid\nKOOLAIDMAN\nKorea\nkosi6ixx\nkostis4\nKrachen\nKRAL\nkrall\nKramek\nkret\nkrvtky\nKSI\nKT\nKUBUS\nKURVA\nkuy\nKuzgret99\nkvamp\nkx\nky\nkylancruz\nkyle\nkys\nL\nl\nL is 4 Layla\nL0rdFox\nL8Nick\nla mala suer\nla+faucheuse\nlachie\nlachydachy\nladd\nLady\nlady\nladybag\nLagz\nlala\nlalalalalala\nlalalalla\nlalaland\nlambolovers\nlamis\nlan\nlance\nlandon\nlandon.h\nlano\nLaraffel\nLars Gille\nLATVIJA\nLaura\nlauren gallo\nLaUruguaya\nlava\nlavey lavey\nLavika\nLayla\nlazarbeam\nLazarbeam\nLAZARBEAM\nLazarBeam\nLAZARLAZAR\nlazer beam\nlazer yeet\nLazer_Glow\nlazerkid\nlbj\nle\nLe Pagg\nle TUEUR\nleah\nleandro\nLEANDRO\nlebanon\nlebensraum\nLEBHjr\nlebron james\nlee\nLeeLa\nlega\nLegend\nlegend\nLegomancalle\nlel\nLELO\nlemme get100\nlemonisha\nlenka\nlentil\nleo\nLeo\nleonekip\nleopapi69\nlesturmwaffe\nLET IT GO!!!\nlet me 100%\nletme%50pls\nletme100%pls\nletmeget100%\nlets piay\nLets Play\nlets swim ;)\nLetsdothis\nlevani\nLevant\nlevel1\nlevi stinkt\nlevman\nLew\nLewiatann\nLewisPlayz\nlex\nLexluFV\nleys096\nLiam\nLiam YouTube\nLiaoPing\nliban\nlicea\nlichtenstein\nlicon ligers\nlIe SucKs\nlier\nLietuva\nlightning\nligma\nlike a boss\nlil boat\nLil nazbol\nLIL paper\nlil+big+brai\nlil+nax+x\nLIL+TJ\nLilac\nLILBOB\nlilbon\nlilian\nlilly\nLilly\nLilo\nLilou\nLilpootpoot\nlilproon\nlilpump449\nlilu\nlily\nLily S.\nlilymachmakr\nlimbo\nlina\nLionman\nLisa\nLISE\nlitdabfam\nLithuania\nlithuania\nlittle j\nlittle timmy\nLittle_Billy\nLittleBike\nLiya\nLiz;) ;)\nlk\nlkd\nLL\nLLLLOOOOLLLL\nLloyd\nlmao\nLMAO\nlnj349\nLoading...\nloading...\nloaggy\nLocky\nloding...\nlogan\nlogan205\nLOGIN\nlol\nLol\nlOl\nLOL\nLol hi\nlol sdf\nLOL U YT\nlol2\nLOL3D\nLolmini\nlolo\nLOLy\nlong\nlord\nLORD\nLordPawwGame\nLordplayer\nLorenzo\nloro=ivan\nLort\nLos mejores\nloser\nLosinTex\nLost\nLostCause\nlots+of+cash\nLouis\nlove\nLove\nlove daniela\nLove1234\nlovebug\nᶫᵒᵛᵉᵧₒᵤ\nlubag op zon\nLUCA\nLUCA83\nLucaasak747\nLucas\nlucas\nLUCI the lol\nLucy\nLucy3\nluiz\nLuk\nLukas\nLuke\nluke storm\nLukerdepuuk\nlukezquad\nlul\nLula Livre\nlula livre\nLullin\nlulu\nlunapup\nlunchtime\nLUZ\nluz\nLuz\nLynetteNoni\nM\nm\nM E X I C O\nM Qaseem\nM&M\nM.Verstappen\nM+AND+A\nM10D\nmaas\nMacedonia\nmacedonia\nmacedonija\nMACY+MY+DOG\nmad dog\nMAD!\nmadara\nmadddddd\nmaddog\nmaddy\nMadHamster\nMaegaard\nmaelspi\nmaguire\nmaitrephenix\nmaja\nMajik Paper\nmak\nMAK\nMakar And M.\nmakealgergrt\nMakerFaffa\nMAKI681\nmalala\nMALAYMAN\nMalaysia\nMALEAH\nmalek+Bully\nmalik\nmalikye\nMalta\nmamaam\nMamma russia\nmammamia\nMan 0f Y33ts\nmandascript\nMANDO\nmanga!\nmAnixX\nmannekam\nManofMelon\nManon\nMap\nmar\nMARA+......\nmaravilhoso\nMARCELO\nmarchelo\nMarcolla\nMarcos\nmarcproo\nMargaret\nmaria  isabe\nmariana\nmarianabr...\nMarie\nMARIEM\nmarina\nMarinette\nMArio\nmario\nMario\nmario tiffo7\nMarkelpro\nMarkify\nmarkus\nmarquitos\nmarshmello\nMarthaLupton\nmartin\nMartin Brody\nMartinli\nmarzens\nMascara Maro\nmason\nmason#6\nMast3r4life\nmaster\nMaster.T\nMasterGamers\nMasterJak\nMat Eagle\nmateeney\nMATEFRANCO🇪🇸🇪🇸\nMATEJQQ\nmateo\nMateusz\nmath is cool\nmatheus\nMATHIAS\nMathilde\nMathon54\nmatin\nMatteo\nMatthew\nMATTHEW\nmatthew\nMATTIE\nMauri\nmaury2\nMAX\nmax mandel\nmaya\nMaya\nmayi\nmazlum\nMazur\nMC_475\nmc+rhyan\nmcfatty\nMD\nMe\nME\nme\nme #1\nME > YOU\nme lucky\nme me\nme name jeff\nMe ow\nme+de100%pfv\nMea\nMeah\nmee is marco\nMEEEEE\nmeep\nMEGA.P\nMegan\nmeh\nmehmet\nmelis\nmelke\nmelon\nMeme\nMemeDawg123\nmemememememe\nmemes\nMeow\nmeow kitty\nMeowrian_opi\nMephi$to\nmepis\nMepis\nMerca\nMerchanj\nMercifulLord\nmerhaba\nmeri\nmerica\nMERICA\nMerica\nmerlin32\nMessi\nmestre\nmet\nMetamorphicl\nMETHFORKIDS\nmew\nMexicanos\nMexico\nmexico\nMEXICO\nMéxico\nMEXICO_\nMey\nmhkgy\nMI\nmi paraguay.\nmia\nMia:D\nMIALG\nmiau\nMicah\nMichael\nmichael\nMichel849\nmichiel\nMickis\nmicko\nMidnight\nMids\nmiedema\nmig\nmighty gay\nMiguel\nMihaxGaming\nmihir\nMikaela\nMike\nmike\nmike ock\nmikey\nmikhail\nMIKI\nMilk++++++++\nMilliano\nmillie\nmillinum\nmilosh\nmimai\nmine\nMini morgz\nminibytor14Y\nminnietong\nmiriam\nmiss biggest\nmit\nmitchel\nMITT+NAMN+\nmitvit\nMiya\nMizgin\nMJ\nMJOLNIR\nml\nmm\nmmehdi\nMMER FOREVER\nmmmmmmmmeeee\nmo\nMO+KHAN\nModelHorse\nmoenhide\nmoh321\nmohamed\nMohammadOmar\nmoki+baba\nMoldova Înt.\nmolina\nMom\nmom\nmomma\nmommy\nmommy+mommy+\nmomo\nmomomcjol\nMONEY\nmoney man\nMONEY!\nmonkey+\nMonkey13 🐒\nmonkeycat\nMonster_1\nmoo\nmoon\nmoon21\nmoos milk\nmorgan\nmorganbrosct\nmorocco\nMOROCCO\nMoş Moldovan\nmoskow\nMother\nMother bird\nmotherland\nMOTHERRUSSIA\nMotherRussia\nmotomoto\nMountainMama\nmoutaindrew\nmoutasem\nmove like\nmqi34wejpiwf\nmr almutari\nmr beast\nmr crab\nmr krabs :)\nmr man\nMr Meat\nMr TurtleMan\nMr. McBean\nMr.blueberry\nMr.Minion\nMr.TurtleMan\nMr+E+boy+27\nMrbeast6000\nmrfreshasian\nMRFRESHASIAN\nMrTyr16\nMrvel\nMr-woo\nMSNB\nMszV2\nmuchogracias\nMugh\nmuhammad\nMuharrem\nMuhib\nmuji\nMulle\nMurica\nmurilo\nmuslim\nmuslim child\nmuslimsrule\nmuslk\nmustafa\nmv\nMwahahahaha\nMy Doom\nMy frienz\nmy nats\nMY SECRET\nmy+name+is+j\nMya\nMyDemons\nmym\nMyName=Noddy\nMyNameIsJeff\nN\nN O R G E\nn.54t834\nna\nNABIL\nnacl\nnada a ve\nnaden\nnaimaD\nnaji\nnajib\nnala\nnamastha\nname\nName=Noddy l\nnamit\nnani\nnanny\nNapoleon\nNara\nNARUTO\nNash\nnate\nNatedogg\nNATII 599 PL\nnative\nNats\nnaughtyomega\nnaut\nnave\nnaya\nnayr\nNazar0360\nNBA265$$$$\nndsbkhcs\nNeach-raoin\nnebman\nnederland\nneed reaper\nNegro\nNEIKO\nnein\nneneng b di\nNeneng Z\nneo\nneolixy\nneolixy Fra\nNeoTilted\nNepal\nNerdyPorg99\nnetanel\nNetherlands\nnETHERLANDS\nNeupi\nnevo\nnew hair\nnew kid\nNew zealand\nnew zealand\nNext Victim\nneymar\nNeymar Jr\nNEZUKOOOO !!\nNf\nNguyen\nni\nnice\nnice pro\nnici\nNICK\nnick gur\nNick J\nNICK MANATE\nNick_alberto\nnickosama\nNico\nnicolas\nNicolas Pro!\nnicole\nnicu\nNIGERIAS BAD\nnight\nnight_cay\nnijo\nnika tsomaia\nNIK-ART\nnike fan jr\nNIKO\nNiNipineツ🍍\nNinja\nninja\nNinja kid\nninja urso\nNip_Nip\nNisaa\nNishad\nNITRO+GALIXY\nNix\nNizam\nnkls\nNL gamer\nnn\nNnbg\nnnn\nNNN survivor\nno\nNo\nno pewdiepie\nno u\nNO U\nNO u\nNO!\nNo_name\nno+u\nnoa\nNOAH\nnoah\nnocapowo\nnoco\nNOE\nnohemi\nNOLA\nNolan\nnome\nnomi\nnoncepedo\nNono\nnoob\nNoob\nNOOB\nnoobbbb\nnoobie\nNoobies2006\nnoobs kill\nnooob\nnooooooobers\nnoooooooo\nNoorPlayys\nnope\nNorge4theWIN\nNorth\nnorway\nNORWAY\nNORWAY FOR W\nnos.vs.vos.\nnostopme\nNot Bill\nnot dumbey\nNot your toy\nNothing\nNotMyTail\nNova\nNOVA/KERIE\nNOW UNITED\nNowOrNever\nNP-1\nNR-077\nnu3ga/lu3\nNUGGETS\nNum nom\nnumsei02\nnunes\nnutnoodles\nNUTY ALIADO\nnwo1840\nnyan cat\nnyan+cat\nnyck\nnyon cat bye\nNz\nNZ BOIZ\nNz Rules\nNZ!! x3\nNZ!! X3\nNZ!!! X3\no\nO+Muhammad\nObi-Wan\nOBJECTION!\nOG\nog\nogaurav\nOGnarutobeat\nOGnoobie\nOH CANADA\nOH YEAHHH\nohio\nohockey22\noi\noigdfggyh ty\noij\nok\nOK Boomer\nok boomer\nok+\nOLCAY\nolddad\nOldSkooler03\nOldtimer\nolivia\nollallol\nollie\nolliePRO\nolly is best\nololo\nomar\nOmar\nomar king\nOMG4lif\nOneF8\nonepaperman\nonii~chan\nO-O\nOOF\noof\noof+master\nookko\noooooooo\noops\nop\nOP THE ONE\nop twisty\nopium GR\nopium+(IZI)\nopos\noptimusprime\norange\norchid\nOrigar me\nORIGIN\nØŞ〗๖ۣۜǤнσsτ༻\nOsc45\noscdosc\nOskar\noso\nÖsterreich\notario\nOTSOSU\nOtto\nOttoman\noui\nouououououou\nOurChael\nouss\noutmeal\nowe\nowen pro!!!\nOWL CITY\nOwl hoot\nOwO germany\noww+noo\nOxo+Whitney\nOyuncu\nOZ\nOz Bloke\nOzmainia\nP 19/53\nP.A.Trick.O\nP+S=6\nP11\np13\np3n1s\npablo\npaco\nPadfoot\npahan\nPaislee77\nPAISLEY\npaitton\nPak\npak zindabad\npakdabest\npalistine\npanama\nPancho Villa\npancrazienn\npanda\npanda16 🐼\nPandix\npanther\nPanzer\nPanzerwagen\npapa bear\npapa io\nPAPA LÉGUAS\nPapa smurf\nPapelFolha\npaper\nPaper\nPaper 2.0\npaper money\npaper. io 2\nPaper.io\nPAPER.IO\npaper.io\npaper.io2\nPaperBoi\nPaperiochamp\npapermaster\nPapers\npapper\npapperskalle\npapy\nPARASITA BR\nParker\nparker\nParkerjr89Yt\npartizan\nparty\nparynhar\npastry\npat\npatataxD\npatilla\npatria\npatrick star\npatriotuluca\npaul\npaulina\npaulius\npauly\nPAX!!!:)\nPB\nPC Ragin\nPCM\nPCRM\nPDOGELEGEND\npeace makers\nPecularis\nPedik\nPedoMan69\npedro\npedroloveusa\npeduncle\npee and poo\npeeen\nPeen\npeki\nPENCILM8\npendejo\nPenela\nPenn State\npennis\nPenny\npenny wise\npenny+wise\nPennyise\npennywise\nPENNYWISE\npennywise+jr\npenywise\npeople\npepalacerda\nPepe\npepe\npepo\nPeppa pig\nPercybeth\nperdy\nPerdy\npereira\nperhaps\nPERIDOT\nPerko\nperrro69\nPersian23\nPerson\nperson2.0\nperu\nperuuu\nPeterParkour\nPewDiePie\nPewdiepie\nPEWDIEPIE\npewdiepie\npeyton fanni\nphantom\nPharoah\nPhatan\nPhe\npheobe\nPHIAAAAA\nPhil\nphilippenes]\nPhilippines\nphilippines\nPhilippines!\nPhloxx\nphoenix\nphong\nPI-077\nPia\npianter\npichu\npickle27\npidor\nPIE\nPierce\nPierogi\npietje\nPiggy\npiiiiiiiiiii\npikachu\nPikachu786\npikaso\npILar\nPilipinas\npilippinas\nPineapples\nPINGAS\nPingPongPie\npipka\nPixalated\nPixel\npizza\nPizza\npizza man\nPIZZA ROLLS\npizza123\npizzaking\npizzz\nPj Iese\npk\nplackins\nPlankaster\nPLANTAIN\nPlayer\nplayer\nPlayer One\nplayer3812\nplayer587joe\nPlease don’\nplease dont\nplolal\nplonk\nploopy\nplsletme100%\nPlywood\nPLZDONTKILL\nPlzdontkillm\nplzdontkilme\nplzplz1!1!!1\np-noob\npo\nPOJHIOP\npoker\nPoland\npoland\nPOLAND\nPoland byycz\nPOLAND PLAYE\nPolar Bear\nPOLICE+CHASE\nPolloh\nPOLO\npolo\nPOLSKA\npolska\nPolska\npolska ;]\nPOLSKA GUROM\npooh\npoohfromztek\nPoon888\npoooooo\npoooooooooop\npoooooooop\npoooop\npooooppppppp\npop\npopcorn!!!!!\npopo\nporcodue\nPorgy\nporphygennet\nportabacaxi\nportugal\nPortugal\nPosada\nPoseidon\nposwjhygscfj\nPoT_LbEaR\npotato\nPotato\nPotato ;)\nPotatoLover\nPOWER\npp\nPP Water\npppp\npppppp\nPranked\nPratham\nPrentes\nPresident Xi\npress ctrl w\npresto boy\npreston\nPreston\nprettydark\nprime time\nprinces\nPringles\nPrinz Eugen\npro\nPRO\nPRO Status\npro+gamer$$$\npro+in+usa+\npro360\nProoo\nPROS\nprosciuttix\nProud Aussie\nproudtobePK\nProZ\npseudo\nPSM2005\nPSU\nPU$$YSTILLB*\nPUBG MOBILE\nPUMBA\npumpkin\nPumpkin King\npuppy lover\npups\nPure\npurple grape\nPurpureon\nPurringMotor\nPUTIN\nPutin\nputinukraine\npuzzlez.io\nPweedy_33\nPwnd\npz9\nq\nQARABAG\nQeen\nQINGDYNASTY\nQixStar\nQuébec\nQueebOfHeart\nQUEEEEENN!!!\nQueen\nqueen\nQueen juicy\nQueen S***\nQueenjuicy😍\nQuicoarpro\nquim\nQUINCY\nQuinnDH\nqwerty\nqwerty.io\nqwertyqwerty\nr razzel\nr u ok\nR. Moldova\nra\nRā\nRaccr\nRaceTraitor\nrachelkgreen\nRadiant+Oryx\nRæ\nraed\nrageElixer\nrahmo\nRaiden\nRAIF\nrainbow\nRainbow\nRainman\nraja\nrami\nRandom User\nraphael\nRAPHAEL 075\nrara\nRATATATA\nRATATAYEET.0\nRaven23\nray\nraycon\nRayman\nRayy\nraziq\nRAZOR BLADE\nRdy+Player+1\nrdyer\nReal jelly\nrealibby\nrealization\nREALJELLY\nreally cool\nRealYourName\nReap YT\nRed Axe\nred fox\nred robbin\nRedcenter\nRedCenter\nredpanda\nree\nreee\nREEE!!\nreeee\nREEEEEEEEEE\nreeeeeeeeeee\nrekt\nREMY CRAKERS\nRenato\nrereeeeeee\nREUTRIOX\nreuven\nrevengetime\nRex. Lousdal\nReyna\nRhayven\nRHEC\nRHENIUS\nRhubarb\nrhyan\nrhys\nricardo777XD\nRice Farmer\nrichhomie\nRick\nrickenbacker\nridge\nriggidy\nRiket\nRILEYRILEY\nRinger\nRipDuko\nRIPPER\nrj\nRM52\nrob\nrobby\nroblox\nrock\nRocket\nrockstar\nrød grød\nrodrigao\nRoey\nrohit\nrojos\nromania\nRomeo\nRomes\nromrom\nromrorm\nRonald OMG\nRonaldo\nRONALDO7\nronaldomg\nRONNIE\nroosalieee\nrose\nRoSh\nrot\nRouchdi22\nrourou\nroverbre\nRoxane BTW\nRoxanne\nroza\nrozaanim\nRPTROJANS\nRR2\nrRazvan\nrrr\nrrrrrrrrrrrr\nrrwwertf\nRSA\nrtkgjgvkjgbj\nRubiksMan\nRUBY\nRukiKazuki\nrup\nRuperto\nrusame\nRusherTR\nRuske\nRUSSIA\nRussia\nrussia\nRussia  :^)\nRussia Putin\nRUSSIA!!!!!!\nRUSSIAN DIMA\nRussian SFSR\nRUSSIAN SFSR\nRusso\nRUUUUUDDDDYY\nryan\nRyan\nRyan the pro\nRylie\ns\nS*A*R*G*E\nS.M.A\ns8n\nSA Wichmann\nsab kat\nsaba\nsaba 6\nsaba nayb\nsaber\nSacred\nsad ^-^\nsad cube boi\nSadiq2010\nsafg\nSage\nsai\nsaid\nSaiko+Bears\nsaitama\nsalgadoBR\nsam\nSam\nsam Bates\nSamantha\nsammy+sonic\nSamoJako\nsan\nSANJIN\nsanone\nsans\nSanta]\nsap\nsapwings\nSara\nsas\nSASCounqerer\nsasha\nSasuke\nsasuske\nSaudi Arabia\nSaugat\nsavage\nSAVAGE\nsavage Foxy\nSavagegemini\nsavion\nSchnaubi\nSCHON\nschumhey\nSchumhey\nscissors\nScones\nScott-zen\nscp-49\nSCRSBRATHENS\nScrubby\nsda\nsdr\nsdsdsd\nseaku\nSearch Bts!\nseb is waifu\nSebas.SZN\nSEBASTIAN\nsebasydani\nSec\nsedres\nsedric\nSEF\nsefs\nsenor pot\nsenor potty\nSenpai~\nSeppl\nSerbia\nSergei\nserginho\nSERGIO\nServ\nServexal\nSes ed\nSEV7N\nSGE\nSGEKids\nSGthe2nd\nshadow\nShadow\nshadow kille\nShadowAlx\nshae\nshaheer ibe\nSHAI\nshako\nShannon\nshannon-usa\nShanShan\nShanyya\nshar shya\nshark puppet\nsharons maf\nShayan Hadi\nSHAZIL\nshekelstein\nsherry\nshoj\nSHopa\nshortie\nshorty\nShqiperia\nshrek 2\nShreyash\nShrungus\nshut_up\nSiIvaGunner\nSiLeNtViRgEn\nSillyMrQ\nsime\nSingapore\nsir awesome\nSirGeorge\nSissy\nSixball\nSJ Boyz\nsjon van der\nSk3tchYT\nSKÅNE ER VOR\nskeletongame\nskeppyBALD\nskillz\nskinnyafrica\nskrt skrt\nSKS16\nSKSKSKSK\nSKSKSKSKS\nSKSKSKSKSKS\nSkull\nSkullcrusher\nsky peace\nSkyla\nSkylanders!\nSlade\nslak\nslavdo\nslemmsf\nslime moster\nslimer1011\nslipknot\nSlither.io\nSlithshowbob\nSlogoman\nslotz\nsmaker\nSmall Asian\nsmall head\nsmash\nSMASH\nsmell mu toe\nSmelly negro\nSnakeGamer\nsneaKING(HU)\nSnickers_007\nsnip+snip\nSniper\nSnipez_Tylor\nSNOR\nsnowflake\nsoban gamer\nSocialismSUX\nSofia J.\nsokk\nSoldMyKids\nsomeee\nsomeone\nsometimesno\nsomila\nsomo\nsonia\nsonic\nsonic+max\nSonicspeed\nsønnike\nsoolkig\nSOPHIE&KEEFE\nSorry\nSorry eh\nSorry Eh?\nsorryheather\nsou seu pai\nSouth Africa\nSOUTH KOREA\nSouth Korea\nSouth Korean\nSouwla\nSoviet\nSovietRussia\nSovietUnion\nsp\nSPAIN\nSpain\nspain\nSpain is bes\nSpain winner\nSpamInaCan\nspangles\nspare me plz\nSPARKLES\nspbk\nSPEEDISKEY!!\nSpeedP01\nSpeler\nspider man\nspider_royd\nSpieler\nSpongeBob\nSpottedleaf\nsprinkles\nSQ\nsquidbob\nsquidward\nSr Ezecolas\nSrbija\nSree Hari🎮\nSrTheMeryem\nSS\nss\nssC\nsskkiinn.\nSST\nssundee\nSSundee\nSt. Pierre\nStalin\nstalin\nSTALKER\nSTANDREU 14\nStandWithHK\nstar\nStarcastic\nStarry sky\nsteen\nstefan88\nStegtFlæsk!\nStephanie\nStephDami\nsteve\nSteve\nSteve Irwin\nSteve Smith\nSteve+Irwin\nstfu\nStickyPaper\nSTILAGa\nStinky Mex\nstnomas\nStokolaN\nStracheBeidl\nstrawberry\nstrong\nSTRONG\nstu\nStubbur04\nstud\nStuxnet\nsuatunarda\nsub 2 fgteev\nSub 2 SSunde\nSUB 2 SUNDEE\nSub+2+sundee\nSub+To+Me\nSUB2BADGAMER\nsub2blitz\nsub2estib\nSub2MVRowner\nsub2Patherz\nsub2pewds\nSub2pudiepie\nsub2RHally\nSUB2SSUNDE\nSub2Ssundee\nSub2SSundee\nsub2ssundee\nsub2Ssundee\nsub2sundee\nSub2SUNDEE\nsubham\nsubpewdiepie\nsubpurpleify\nSubSpyrosTDB\nSubTobytalks\nsubtofralica\nSUBTOPHANTOM\nsubtossundee\nsubtosundee\nsucc\nsuck     dd\nsuck d\nsullo\nSULTAN\nsunan\nsuomi\nSuomi\nsup\nSUP WITH YOU\nsuper mine\nsuperaaronAH\nSUPERGI7000\nSUPERHERO\nsupeRman\nSuperNova\nsuperpichu\nsuperstar4n\nSuperThanos\nsuperuser\nSUPREME\nSUUUUU!!!!!!\nsuwayda\nsv\nSvea Rike\nSven\nSven pro\nsw\nswampman\nsway\nswe\nsweat_bilol\nSweden\nSWEDEN\nSweden Börk\nswedish\nSweet\nsweetnsister\nswety swedn\nSwitzerland\nşxh\nsyd\nSydney\nsylar\nSylar\nSyrianRefuge\nt\nt.a\nT0mmy1010100\nta mère\nTacoman\ntacos\nTai 108\ntAimMD_ILG\nTaiwan NO. 1\ntajus\ntake that\nTake+the+L\nTalvisota\ntaman suria\nTania\ntank boy\ntank you\nTankart364\nTANKSCOMIN\nTatann09\ntauaneee\ntaxty winky\ntay\nTaye(:\nTaysian08\nTazlen\nTazzer\nTBNR_FRAGS\nTBNRFrags\ntea\nTeam Denmark\nTeam kanada\nteam trees\nTEAM U.S.A!\nTEAM U.S.A.\nteam U.S.A;)\nteam up\nteam USA\nteam with me\nTeam?!\nTEAM+U.S.A.\nteamcanada\nteammalaysia\nteamU.S.A:)\nteamU.S.A;)\nTeamW/Me\nTedde\nTeddy\nTEDT\nTehno King\ntele\nteletubbie\ntelletubi\nTemas2323\nteo\ntermico\ntessa\nTessbajanger\ntester\nTetPez\ntex\ntfs\nTfue\nTHAHAHAHAH\nthales\nThanoidugly\nThanos\nthanos\nTHANOS\nthANOS\nThanos Snap\nThanos#1\nThanos2\nthatguy\nthawra\nthcboi\nThe  Guy\nthe beata\nThe best\nThe Best\nTHE BEST\nthe best\nTHE BEST ONE\nthe best wd\nTHE BOSS\nthe brusier\nThe Buddy\nthe cholo\nthe cool kid\nThe Disowner\nThe Doctor\nThe Eraser\nthe fake 23\nthe fastest\nThe Game\nthe goat\nThe Hype\nthe kid\nthe killer\nThe KING\nthe king\nThe legend\nThe Master\nTHE MVP\nTHE Noob\nthe NXT\nThe one\nTHE PENGUIN\nthe pro\nThe Pug\nthe snowpand\nThe SUCC\nthe_best_guy\nthe0nly.Jae\ntheboss\nTheCatsFans\nTheChuky YT\nthedanklord\nTheDGamer09\nThefiend\nthegoat56\nTheKillerBR\nTheKing\nTheNameless\ntheoden+.g\nThepenguin50\nTheProcess21\nthethegiri\nTheZak king\nthhhhhh\nTHICCBOI\nthiccy miky\nTHIS IS USA\nthiz is USA\nTHOMAS\nThomas TANK\nthor\nthotpatrol\nthunderthe1\nti\ntic tocer\nTifo\nTIFO\ntifo\ntifo nl\nTIFO.\nTifoGang\nTIGRE\nTikTok\ntim\nTim hortons\nTimo\nTimors rage\nTimothee\nTiNaO\ntiss\nTJENA\ntnbq;\nto nem ai\nTodoroki\nTodorov\nToeCollector\ntoeeater\nTOESSS\nTolkeus\ntom\ntom n\nTOM.COM\ntomas\nTommy\ntomtom\nTonT0\ntony\nTony24\ntooooooooooo\nTop Ramen\nTOP.io2\ntorbje\ntortle\nToryMusic\ntotal pharoh\ntoto\ntotolasticot\nTotolito\nTotus Nata\nToyree\nTpdddd\nTr\nTR3$\ntrao\ntrash\nTRASH$$$$\nTrenton\ntributo\ntrinaty\ntrisha\ntristan\ntroywilldoit\nTruce\ntrud bucket\nTrueComrade\ntrueno+pai\nTrueNorth🇨🇦\nTRUMP\ntrump\nTrump\nTRUMP 2020\ntrump 2020\ntrump fan\nTrump Rocks\nTrump Sucks\nTRUMPFORLIFE\nTRUMPsupport\nTrumpWallBad\ntruse\ntry me\ntry+me\ntryghujk#\nTrympan\nTsar+Ivan\ntsjr.+aj\ntsm_jeremiah\ntsneia\nTt\nTTTTT\nTTV King Kay\nTTV.OWENLIT$\nTtvJaygucci\ntu madar cho\ntu mama\nTuesday\nTUKI-K2009\ntumadre69\ntung handsom\ntuo+sorello\nTURK\nTURKEY\nTurkey\nturkey\nTürkiye\ntürkiye\nTÜRKİYE\ntürkk\nTurky\nturnip\nTurpin\ntushar\ntutu\ntutubiel\ntuvieja\nTUY\ntwinky winky\ntwoja stara\ntxera\nTxR kkkk\nty\nTy the guy\nu\nU BOT\nU eat I eat\nu mommy\nU S YAY\nu suck i win\nU.A.E\nU.K\nu.r.r.s\nU.S.A\nu.s.a\nU.s.A\nU.S.A 1\nU.S.A!!!!!!!\nU.S.A.\nu.s.a.\nU.S.M.\nU.S.S.R\nU.S.S.R.\nU.U\nu+gay\nu+lost\nUAE\nuae is best\nUbahn\nubermensh\nUchicago\nUday\nudit\nuhPanda\nuhttikjb cxs\nui\nuiiiii\nuk\nUK\nUK 4 DA WIN\nuk for life\nUK is BEST\nUkraine\nUkraine best\null float 2\nultarvision\nultra goko\nULTRA NK\numair\nUmairica\numm\nuna peca\nuncle phil\nunicorn\nunicorn girl\nunicorncrazy\nunicornnnnnn\nUnited king\nunited Kingd\nUnited state\nUnitedStates\nunitedstates\nunknown\nUNKNOWN X\nUNKNOWN+X\nunspeakable\nunspeakableb\nunspeakablz\nUnspeakale\nuofaku5 cv c\nup da ra\nupanddown\nUR bad\nur dad\nUR DEATH\nur mom\nUR MOM\nur mum\nur+daddy\nUR+MUM\nur+mum+gay\nurielsucks\nurmomgaylul\nurmumgay\nurself\nUS Al te Way\nUS Killer\nUS MILITARY\nus patriot\nUS trump fan\nUS+Border+\nUSA\nusa\nUsa\nU-S-A\nUSA +++ EU\nUSA BEST\nUSA DE BOSS\nUSA dominate\nUsa for life\nusa for win\nUSA IsMyCity\nUSA kill you\nUSA KING\nUSA Mina\nUSA ON TOP!!\nUSA RULES\nUSA USA\nUSA USA USA\nUSA USA USA!\nUSA!\nUSA!!\nUSA!!!\nUSA!!!!\nUSA!!!!!!\nUSA!!!!!!!!!\nUSA.USA.USA.\nUSA/United\nUSA+++EU\nUsa+for+life\nUSA+KING\nUSA+NO.1\nUSA+ಠ_ಠ\nUSAAAAAAÆ\nUSAFORTHEWIN\nUSAisBetter\nusaismycity\nUSARULES!\nUSAtrump fan\nUSAUSAUSAUSA\nusbruthers\nusg\nUSofA\nUSSR\nUstaj Srbine\nUsuck\nuuuusssaaa\nuwu\nuy\nUzair\nV\nv\nV00D00\nV0rix 93\nvadfer\nvale\nValou\nVanderboy\nVanessa\nvanessa\nvango\nVanilla\nvankata\nVAR\nVargen\nVava\nvb\nVCcrew12\nvedant\nvenezolano\nVerby\nVesta\nviavidi\nvictor\nViet Nam\nvieze jos\nviki show\nVikiingen\nViking\nviking\nViking horde\nviktorblook\nVincent\nVINCENTE\nvinh\nvini dibra\nvinizx\nVIRT@RUS\nvishvak\nVisitTürkiye\nviva\nViva Chavez\nViva españa\nviva MEXICO\nViva Vox\nVIVAMEXICO\nVIVE ALGERIA\nvive israel!\nvkng\nvlad\nvlad.putin\nVLADA\nVladimir\nvlado\nvlle\nVoid_Zpace\nvoldimortina\nVoldymorte\nvoodoo king\nVoughnDaBoss\nVovchik_007\nVOX\nvs\nVSCO\nVSCO Girl\nVSCO+girl\nvuci\nvufidviudhvo\nvvb\nvvbvbvbv\nW0rldRun\nWa saaaa DUD\nwabble\nWackyBacky\nwallace\nwantpunani\nWanturoil\nwar\nWarming\nwarren good\nwartshoter\nwas mama\nwasd\nwasezfe\nWatarMelen\nwater\nWaterBlaster\nwatermalon\nWavyy\nwawa\nWAYNE 14\nWE\nwe are Groot\nWe will win!\nwebby\nweeeee\nweener\nwesad+\nWesGamer\nWeston\nWhaaaaat\nWhat\nWHAT THE F\nWHATSAPPDIY!\nWhatsappdiy!\nwhiplash636\nWhither+A\nWho Cares?\nwho dat\nWho?\nwhotfisnuty\nWHY\nwhy\nWhy So Mean\nwhy+?\nWiiiiiiiiiii\nWiiPii Fit\nWiiPii OnU\nWiktor\nWil Smiff\nwill\nwilliam\nwilljoal\nwilmer\nWily_S\nwin kenya\nwinner\nWINNER\nWinner\nwinston\nWitruwiusz\nwog\nWogan\nWojo\nWolf Lover\nwolf pack\nWolfierose\nwolverine700\nwoot\nworld\nWorld King\nWorst+player\nwow\nWoW\nWOW+!!!\nwowzerz\nWriterGirl\nwrwf\nwsad\nwtf\nwueeee\nWWPAPER\nwwwww\nWWWWWWWWWWWW\nwyatt\nwyattplays\nwywy\nx\nx$xa\nX3DGamerYTX\nx3m\nXagustin5111\nXavier\nxazza\nxc\nXD\nxd\nxD\nXelan\nX-hibit26.ph\nXllth\nXMAN\nx-mas\nXmas iscomin\nXoax\nXS\nxTman417xUSA\nXtrullor\nxwolf\nxx\nXxJibTemixX\nXxnz4lifexX\nXXOKWOWXX\nxXVoidPlayzX\nxyVikash\ny\nY U DUMB?\nY1N6Y4N6\nY1N9Y4N9\nYA BOI\nYA DED SON\nya yeet\nYa_King-Boy\nYAA HACK!\nyaaaaaa\nyaboi4639\nYah Man\nyahooooo\nYall Aint\nyall bots\nYamamoto\nyamum\nyanislepr0_0\nyas\nYas\nYas queen\nyasmin\nYasmine\nYay\nYaY\nyayeet\nyea\nyeah\nYears\nyee\nyee haw\nYEEEEEEEEEET\nyeeeeeeeeeet\nyeeeeeeeeet\nYEEEEEEEEET\nyeeeeet\nyEeEeEt!!!!\nyeeeet\nyeeet\nyeeet me\nyeet\nYEET\nYeet\nyeet boi\nyeet master\nyeet sauce\nyeet sir\nyeet. 42069\nyeet_gg\nYeet+Monters\nyeetakis\nYEETMAN\nYEETYBOI\nyeeyee\nYellowz\nyelo\nyes\nyes sirr U.S\nyfl\nYGo USA\nyi\nYikes\nYımırta Kafa\nyiyiyy\nYNW melly\nyo\nyo check\nYo mama\nYo MAMA\nyo mama\nYobama\nYoboyjb13\nYoGayIfKill\nyogi\nYolo\nyolopro\nYOMAHDUDES\nYonadush\nyonatan aviz\nyonatanYT\nyoria_player\nyosra\nYou\nYou Are Dead\nyou lose 157\nyou noobbb\nyou suck\nyou trash\nyour a BOT\nYOUR AL TALK\nyour awesome\nyour dad\nyour doom\nyour mama!!!\nYour Mom\nyour mom\nyour mommy\nyour momy\nYour mum\nYour name\nyour name\nYour Name\nyour name___\nyour pitaji\nyour the man\nyour+mom\nYour+Name\nyour+name\nYour+name\nyourdaddy\nYourDead\nYOURMOM\nyourmum\nYOUSEF\nYoutube ViBe\nyoutude\nyoyo\nyoyoyo\nyoyoyomama\nyrt\nYT\nythytfgvvhhh\nYukheisMine\nyuki\nYukiii\nyukjh\nyungpinch\nyuriysid\nyuyu999\nYYeet\nYyooooythvhg\nYyyyyyyyyyyy\nz\nZ.A\nzach\nzaden\nzahary\nZahary\nzainab\nzair\nzaki\nzammer1\nzanderfire\nzappierflash\nZarla\nZaven_Wolf\nzavion335\nZAZA\nze luis\nzeke\nzekrom\nZemond\nzen\nzendel\nzenitsu\nzeus\nZeusNaCausa\nzeuuubbbiii\nzghjbnhb\nziad\nziggle\nZiggy\nzimbabwe\nZispy\nZoe\nzombsgaming\nzoom\nzoomer+toons\nZorux\nzuly\nzVolcomBr\nzwicki\nzxc\nzz\nzzz\nZZZZZ\nʕ•ᴥ•ʔ\nΒΑΝ\nΕλλαδα\nΕλλάδα\nΕλλάδαGreece\nορσαλία\nалиса и папа\nАня\nБешеныйХомяк\nВадим\nваня\nварпроф\nВиктория\nВова\nвыкторыя\nГЕРОЯМ СЛАВА\nГлеб\nдима\nева\nевик\nжожа\nиванка\nигорь\nИгрок\nилона.ш.\nилюха и леха\nищу парня ха\nйуввпсппеыаы\nКатя\nкатя син\nКилер\nКирилл\nКОЛ\nКошка\nКририлл\nлаила\nЛОЛ\nлох\nмакс\nМАЛЯ\nмама данила\nМейбл+Girl\nмейиржан\nМолдова\nМонова\nнаследник\nнгпам\nне ИванЦой я\nпенсия\nпец\nпидружка\nПОГ\nпраогкиа\nпривет\nпро\nрорборибли6\nРОССИЯ\nроссия\nрулёва\nслава лава\nсмерт 2.0\nсмпсм\nссср\nСушиВок\nТатьяна\nуееор\nчеловечик\nЧИКИБОМБОНИ\nчитер\nЪЖСЛО\nя царь\nღDaira-chanღ\n�𝐉𝐨𝐉𝐨�\n𝓙𝓞𝓚𝓔𝓡\n𝓶𝓸𝓶𝓶𝔂\n𝔼𝕦𝕟𝕚𝕔𝕖\n🇺🇸BO$$🇺🇸\n🐢OppP+SksKs\n👀👀👀👀👀\n👌👌👌👌\n😍\n😎🇦🇱🇦🇱😎\n🤓Reizuru🤓\n🤩\n🥖🥪🍟🍔🍿😃\nяна".split("\n");
  var _0x11280e = _0x2cb6e4(function (_0x1d46f9, _0x1c0167) {
    (function (_0xa4165b) {
      var _0x1bcf7 = function _0x2d033a(_0x50d66e, _0x5a7adb) {
        if (arguments.length === 1) {
          if (Array.isArray(_0x50d66e)) {
            _0x5a7adb = _0x50d66e[1];
            _0x50d66e = _0x50d66e[0];
          } else {
            _0x5a7adb = _0x50d66e.y;
            _0x50d66e = _0x50d66e.x;
          }
        }
        this.x = _0x50d66e;
        this.y = _0x5a7adb;
        this.next = null;
        this.prev = null;
        this._corresponding = null;
        this._distance = 0;
        this._isEntry = true;
        this._isIntersection = false;
        this._visited = false;
      };
      _0x1bcf7.createIntersection = function _0x381429(_0x345157, _0x4ccd0e, _0x444cfa) {
        var _0x1f46a1 = new _0x1bcf7(_0x345157, _0x4ccd0e);
        _0x1f46a1._distance = _0x444cfa;
        _0x1f46a1._isIntersection = true;
        _0x1f46a1._isEntry = false;
        return _0x1f46a1;
      };
      _0x1bcf7.prototype.visit = function _0x22d3cd() {
        this._visited = true;
        if (this._corresponding !== null && !this._corresponding._visited) {
          this._corresponding.visit();
        }
      };
      _0x1bcf7.prototype.equals = function _0x4f7ee4(_0x16bb07) {
        return this.x === _0x16bb07.x && this.y === _0x16bb07.y;
      };
      _0x1bcf7.prototype.isInside = function _0x48f458(_0x18d313) {
        var _0x47ded0 = false;
        var _0x2c580d = _0x18d313.first;
        var _0x1d2e68 = _0x2c580d.next;
        var _0x7bc404 = this.x;
        var _0x4be43d = this.y;
        do {
          if ((_0x2c580d.y < _0x4be43d && _0x1d2e68.y >= _0x4be43d || _0x1d2e68.y < _0x4be43d && _0x2c580d.y >= _0x4be43d) && (_0x2c580d.x <= _0x7bc404 || _0x1d2e68.x <= _0x7bc404)) {
            _0x47ded0 ^= _0x2c580d.x + (_0x4be43d - _0x2c580d.y) / (_0x1d2e68.y - _0x2c580d.y) * (_0x1d2e68.x - _0x2c580d.x) < _0x7bc404;
          }
          _0x2c580d = _0x2c580d.next;
          _0x1d2e68 = _0x2c580d.next || _0x18d313.first;
        } while (!_0x2c580d.equals(_0x18d313.first));
        return _0x47ded0;
      };
      var _0xd1026b = function _0x55135a(_0x22034b, _0x2528de, _0x456102, _0x5bdb1e) {
        this.x = 0;
        this.y = 0;
        this.toSource = 0;
        this.toClip = 0;
        var _0xbd7742 = (_0x5bdb1e.y - _0x456102.y) * (_0x2528de.x - _0x22034b.x) - (_0x5bdb1e.x - _0x456102.x) * (_0x2528de.y - _0x22034b.y);
        if (_0xbd7742 === 0) {
          return;
        }
        this.toSource = ((_0x5bdb1e.x - _0x456102.x) * (_0x22034b.y - _0x456102.y) - (_0x5bdb1e.y - _0x456102.y) * (_0x22034b.x - _0x456102.x)) / _0xbd7742;
        this.toClip = ((_0x2528de.x - _0x22034b.x) * (_0x22034b.y - _0x456102.y) - (_0x2528de.y - _0x22034b.y) * (_0x22034b.x - _0x456102.x)) / _0xbd7742;
        if (this.valid()) {
          this.x = _0x22034b.x + this.toSource * (_0x2528de.x - _0x22034b.x);
          this.y = _0x22034b.y + this.toSource * (_0x2528de.y - _0x22034b.y);
        }
      };
      _0xd1026b.prototype.valid = function _0x108e76() {
        return this.toSource > 0 && this.toSource < 1 && this.toClip > 0 && this.toClip < 1;
      };
      var _0x2b1f73 = function _0x30607f(_0xdd53d4, _0x1571ea) {
        var _0x3e11f8 = this;
        this.first = null;
        this.vertices = 0;
        this._lastUnprocessed = null;
        this._arrayVertices = typeof _0x1571ea === "undefined" ? Array.isArray(_0xdd53d4[0]) : _0x1571ea;
        for (var _0x140051 = 0, _0x58279f = _0xdd53d4.length; _0x140051 < _0x58279f; _0x140051++) {
          _0x3e11f8.addVertex(new _0x1bcf7(_0xdd53d4[_0x140051]));
        }
      };
      function _0x17c76a(_0x582e1f, _0x387e51, _0x4b6ddd, _0x6fd791) {
        var _0xb931d0 = new _0x2b1f73(_0x582e1f);
        var _0x43ba0c = new _0x2b1f73(_0x387e51);
        return _0xb931d0.clip(_0x43ba0c, _0x4b6ddd, _0x6fd791);
      }
      function _0x42ae84(_0xf3ea52, _0x59efbf) {
        return _0x17c76a(_0xf3ea52, _0x59efbf, false, false);
      }
      function _0xf0f840(_0x59e5ed, _0x411bbf) {
        return _0x17c76a(_0x59e5ed, _0x411bbf, true, true);
      }
      function _0x41a7a7(_0xaa453e, _0x572f6f) {
        return _0x17c76a(_0xaa453e, _0x572f6f, false, true);
      }
      _0x2b1f73.prototype.addVertex = function _0x338c89(_0x203f6e) {
        if (this.first === null) {
          this.first = _0x203f6e;
          this.first.next = _0x203f6e;
          this.first.prev = _0x203f6e;
        } else {
          var _0x239c21 = this.first;
          var _0x2ee36c = _0x239c21.prev;
          _0x239c21.prev = _0x203f6e;
          _0x203f6e.next = _0x239c21;
          _0x203f6e.prev = _0x2ee36c;
          _0x2ee36c.next = _0x203f6e;
        }
        this.vertices++;
      };
      _0x2b1f73.prototype.insertVertex = function _0x4ae6a1(_0x277c66, _0x181c42, _0x319598) {
        var _0x16c4a9;
        var _0x2b8a66 = _0x181c42;
        while (!_0x2b8a66.equals(_0x319598) && _0x2b8a66._distance < _0x277c66._distance) {
          _0x2b8a66 = _0x2b8a66.next;
        }
        _0x277c66.next = _0x2b8a66;
        _0x16c4a9 = _0x2b8a66.prev;
        _0x277c66.prev = _0x16c4a9;
        _0x16c4a9.next = _0x277c66;
        _0x2b8a66.prev = _0x277c66;
        this.vertices++;
      };
      _0x2b1f73.prototype.getNext = function _0x4ffee4(_0x494ba9) {
        var _0x431b4c = _0x494ba9;
        while (_0x431b4c._isIntersection) {
          _0x431b4c = _0x431b4c.next;
        }
        return _0x431b4c;
      };
      _0x2b1f73.prototype.getFirstIntersect = function _0xcf3009() {
        var _0x38d60d = this._firstIntersect || this.first;
        do {
          if (_0x38d60d._isIntersection && !_0x38d60d._visited) {
            break;
          }
          _0x38d60d = _0x38d60d.next;
        } while (!_0x38d60d.equals(this.first));
        this._firstIntersect = _0x38d60d;
        return _0x38d60d;
      };
      _0x2b1f73.prototype.hasUnprocessed = function _0x2ae2a() {
        var _0x3e89de = this;
        var _0x409fe7 = this._lastUnprocessed || this.first;
        do {
          if (_0x409fe7._isIntersection && !_0x409fe7._visited) {
            _0x3e89de._lastUnprocessed = _0x409fe7;
            return true;
          }
          _0x409fe7 = _0x409fe7.next;
        } while (!_0x409fe7.equals(this.first));
        this._lastUnprocessed = null;
        return false;
      };
      _0x2b1f73.prototype.getPoints = function _0x2b7c20() {
        var _0x1afd29 = [];
        var _0x47adb7 = this.first;
        if (this._arrayVertices) {
          do {
            _0x1afd29.push([_0x47adb7.x, _0x47adb7.y]);
            _0x47adb7 = _0x47adb7.next;
          } while (_0x47adb7 !== this.first);
        } else {
          do {
            _0x1afd29.push({
              x: _0x47adb7.x,
              y: _0x47adb7.y
            });
            _0x47adb7 = _0x47adb7.next;
          } while (_0x47adb7 !== this.first);
        }
        return _0x1afd29;
      };
      _0x2b1f73.prototype.clip = function _0x14dbbb(_0x1e9b4a, _0x576a5f, _0x5280db) {
        var _0x9325d5 = this;
        var _0x25f6db = this.first;
        var _0x19aae8 = _0x1e9b4a.first;
        var _0x599399;
        var _0x3b223f;
        var _0x28b027 = !_0x576a5f && !_0x5280db;
        var _0x4d1ea1 = _0x576a5f && _0x5280db;
        do {
          if (!_0x25f6db._isIntersection) {
            do {
              if (!_0x19aae8._isIntersection) {
                var _0x2bf6a7 = new _0xd1026b(_0x25f6db, _0x9325d5.getNext(_0x25f6db.next), _0x19aae8, _0x1e9b4a.getNext(_0x19aae8.next));
                if (_0x2bf6a7.valid()) {
                  var _0x1b3c8a = _0x1bcf7.createIntersection(_0x2bf6a7.x, _0x2bf6a7.y, _0x2bf6a7.toSource);
                  var _0x1808ba = _0x1bcf7.createIntersection(_0x2bf6a7.x, _0x2bf6a7.y, _0x2bf6a7.toClip);
                  _0x1b3c8a._corresponding = _0x1808ba;
                  _0x1808ba._corresponding = _0x1b3c8a;
                  _0x9325d5.insertVertex(_0x1b3c8a, _0x25f6db, _0x9325d5.getNext(_0x25f6db.next));
                  _0x1e9b4a.insertVertex(_0x1808ba, _0x19aae8, _0x1e9b4a.getNext(_0x19aae8.next));
                }
              }
              _0x19aae8 = _0x19aae8.next;
            } while (!_0x19aae8.equals(_0x1e9b4a.first));
          }
          _0x25f6db = _0x25f6db.next;
        } while (!_0x25f6db.equals(this.first));
        _0x25f6db = this.first;
        _0x19aae8 = _0x1e9b4a.first;
        _0x599399 = _0x25f6db.isInside(_0x1e9b4a);
        _0x3b223f = _0x19aae8.isInside(this);
        _0x576a5f ^= _0x599399;
        _0x5280db ^= _0x3b223f;
        do {
          if (_0x25f6db._isIntersection) {
            _0x25f6db._isEntry = _0x576a5f;
            _0x576a5f = !_0x576a5f;
          }
          _0x25f6db = _0x25f6db.next;
        } while (!_0x25f6db.equals(this.first));
        do {
          if (_0x19aae8._isIntersection) {
            _0x19aae8._isEntry = _0x5280db;
            _0x5280db = !_0x5280db;
          }
          _0x19aae8 = _0x19aae8.next;
        } while (!_0x19aae8.equals(_0x1e9b4a.first));
        var _0x4eb51a = [];
        while (this.hasUnprocessed()) {
          var _0x48b463 = _0x9325d5.getFirstIntersect();
          var _0x424f4f = new _0x2b1f73([], _0x9325d5._arrayVertices);
          _0x424f4f.addVertex(new _0x1bcf7(_0x48b463.x, _0x48b463.y));
          do {
            _0x48b463.visit();
            if (_0x48b463._isEntry) {
              do {
                _0x48b463 = _0x48b463.next;
                _0x424f4f.addVertex(new _0x1bcf7(_0x48b463.x, _0x48b463.y));
              } while (!_0x48b463._isIntersection);
            } else {
              do {
                _0x48b463 = _0x48b463.prev;
                _0x424f4f.addVertex(new _0x1bcf7(_0x48b463.x, _0x48b463.y));
              } while (!_0x48b463._isIntersection);
            }
            _0x48b463 = _0x48b463._corresponding;
          } while (!_0x48b463._visited);
          _0x4eb51a.push(_0x424f4f.getPoints());
        }
        if (_0x4eb51a.length === 0) {
          if (_0x28b027) {
            if (_0x599399) {
              _0x4eb51a.push(_0x1e9b4a.getPoints());
            } else if (_0x3b223f) {
              _0x4eb51a.push(this.getPoints());
            } else {
              _0x4eb51a.push(this.getPoints(), _0x1e9b4a.getPoints());
            }
          } else if (_0x4d1ea1) {
            if (_0x599399) {
              _0x4eb51a.push(this.getPoints());
            } else if (_0x3b223f) {
              _0x4eb51a.push(_0x1e9b4a.getPoints());
            }
          } else if (_0x599399) {
            _0x4eb51a.push(_0x1e9b4a.getPoints(), this.getPoints());
          } else if (_0x3b223f) {
            _0x4eb51a.push(this.getPoints(), _0x1e9b4a.getPoints());
          } else {
            _0x4eb51a.push(this.getPoints());
          }
          if (_0x4eb51a.length === 0) {
            _0x4eb51a = null;
          }
        }
        return _0x4eb51a;
      };
      var _0x253f6b = _0x17c76a;
      _0xa4165b.union = _0x42ae84;
      _0xa4165b.intersection = _0xf0f840;
      _0xa4165b.diff = _0x41a7a7;
      _0xa4165b.clip = _0x253f6b;
      Object.defineProperty(_0xa4165b, "__esModule", {
        value: true
      });
    })(_0x1c0167);
  });
  if ((_0x535f17 = _0x11280e) && _0x535f17.__esModule && Object.prototype.hasOwnProperty.call(_0x535f17, "default")) {
    _0x535f17.default;
  }
  var _0x5d5341 = function () {
    function _0x530296(_0x1cfb29) {
      _0x43fd4a(this, _0x530296);
      this.game = _0x1cfb29;
      this.data = {};
    }
    _0x5796f0(_0x530296, [{
      key: "init",
      value: function () {}
    }, {
      key: "completed",
      value: function () {}
    }, {
      key: "checkEnd",
      value: function () {
        return _0x530296.noWinnerNoCompleted;
      }
    }, {
      key: "assign",
      value: function (_0x5129de) {
        _0x5129de.scheme = {};
      }
    }, {
      key: "scores",
      value: function () {
        return 0;
      }
    }, {
      key: "print",
      value: function (_0x4f429d, _0x36909a) {
        if (_0x4f429d) {
          return this.scores(_0x4f429d);
        } else {
          return _0x36909a;
        }
      }
    }, {
      key: "result",
      value: function (_0x3e80b9) {
        return this.scores(_0x3e80b9);
      }
    }, {
      key: "results",
      value: function (_0x117fdf) {
        return _0x117fdf;
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
      value: function (_0xaba5f5, _0x38c254) {
        _0x38c254.increment;
        _0x38c254.rise;
        _0x38c254.victims;
        _0x38c254.game;
      }
    }, {
      key: "decrease",
      value: function (_0x294681, _0x99d4e2) {
        _0x99d4e2.aggressor;
        _0x99d4e2.base;
        _0x99d4e2.poly;
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
    return _0x530296;
  }();
  _0x3dcaec(_0x5d5341, "noWinnerCompleted", {
    winner: null,
    completed: true
  });
  _0x3dcaec(_0x5d5341, "noWinnerNoCompleted", {
    winner: null,
    completed: false
  });
  function _0x37e56b(_0x64120c, _0x1dbb02, _0x10d631) {
    var _0x16aa70 = [0, 0, 0, 0];
    var _0x5b7199 = [[1, 2, 2, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 2, 2, 2, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0], [1, 1, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0]];
    _0x64120c.units.forEach(function (_0x4b32ba) {
      if (_0x4b32ba.isBot) {
        _0x16aa70[_0x4b32ba.type]++;
      }
    });
    _0x64120c.bots = _0x16aa70.slice();
    for (var _0x3e1baf = _0x5b7199[Math.round(_0x64120c.level * (_0x5b7199.length - 1))], _0x183b99 = -1; _0x16aa70[_0x3e1baf[++_0x183b99]] > 0;) {
      _0x16aa70[_0x3e1baf[_0x183b99]]--;
    }
    var _0x50b4e3 = _0x3e1baf[_0x183b99];
    _0x64120c.bots[_0x50b4e3]++;
    var _0x2acf29 = new _0xaa7f1a(_0x64120c, _0x1dbb02, _0x10d631, _0x50b4e3);
    _0x64120c.addUnit(_0x2acf29);
    return _0x2acf29;
  }
  var _0x5fde14;
  var _0x13dbb3;
  var _0x438385;
  var _0x99bd68 = function () {
    _0x4961e6(_0x1de6a8, _0x5d5341);
    var _0x500440 = _0x718478(_0x1de6a8);
    function _0x1de6a8(_0x16927c) {
      _0x43fd4a(this, _0x1de6a8);
      return _0x500440.call(this, _0x16927c);
    }
    _0x5796f0(_0x1de6a8, [{
      key: "scores",
      value: function (_0x36462a) {
        return _0x36462a.scheme.personalPercent * 100;
      }
    }, {
      key: "result",
      value: function (_0x8286cb) {
        return +this.scores(_0x8286cb).toFixed(2);
      }
    }, {
      key: "print",
      value: function (_0x238ec3, _0x380e4f) {
        var _0x36dd5a = _0x238ec3 ? this.scores(_0x238ec3) : _0x380e4f;
        return `${_0x36dd5a.toFixed(2)}%`;
      }
    }, {
      key: "checkEnd",
      value: function () {
        var _0x432d41 = this.game;
        var _0x3059bc = _0x432d41.player;
        if (_0x432d41.player && _0x432d41.player.team.percent > 0.9999) {
          return {
            winner: _0x3059bc,
            completed: false
          };
        } else {
          return _0x5d5341.noWinnerNoCompleted;
        }
      }
    }, {
      key: "assign",
      value: function (_0x417aac) {
        _0x417aac.scheme = {
          personalPercent: 0
        };
      }
    }, {
      key: "update",
      value: function () {
        var _0x446124;
        var _0x3e6fd8;
        var _0x1cde0d;
        _0x446124 = this.game;
        _0x3e6fd8 = _0x446124.config;
        _0x1cde0d = _0x446124.player;
        _0x446124.level = _0x1cde0d ? _0x10566a(_0x3e6fd8.startBotLevel, 1, _0x1cde0d.percent) : _0x3e6fd8.noPlayerBotLevel;
        if (_0x3e6fd8.botLevel !== -1) {
          _0x446124.level = _0x3e6fd8.botLevel;
        }
        _0x446124.units.forEach(function (_0x5cf990) {
          if (_0x5cf990 !== _0x1cde0d) {
            var _0x3c9dfd = Math.min(1, Math.max(0, _0x446124.level + _0x5cf990.jitter));
            var _0x2a2a21 = _0x3e6fd8.botAggroMin;
            var _0x5ea237 = _0x3e6fd8.botAggroMax;
            var _0x2b4f30 = _0x3e6fd8.botDefMin;
            var _0x4d6de3 = _0x3e6fd8.botDefMax;
            var _0x46d800 = _0x3e6fd8.botGreedMin;
            var _0x13939f = _0x3e6fd8.botGreedMax;
            var _0x3cd7bd = _0x3e6fd8.botSafetyMin;
            var _0x58774f = _0x3e6fd8.botSafetyMax;
            switch (_0x5cf990.type) {
              case 1:
                _0x2a2a21 *= 1.25;
                _0x5ea237 *= 1.25;
                break;
              case 2:
                _0x46d800 *= 2;
                _0x13939f *= 1.1;
                _0x3cd7bd *= 0.75;
                _0x58774f *= 0.75;
                break;
              case 3:
                _0x2a2a21 *= 0.75;
                _0x5ea237 *= 0.75;
                _0x46d800 *= 4;
                _0x13939f *= 1.1;
                _0x3cd7bd *= 0.5;
                _0x58774f *= 0.5;
                _0x2b4f30 *= 2;
                _0x4d6de3 *= 2;
            }
            _0x5cf990.aggro = _0x10566a(_0x2a2a21, _0x5ea237, _0x3c9dfd);
            _0x5cf990.greed = _0x10566a(_0x46d800, _0x13939f, _0x3c9dfd);
            _0x5cf990.safety = _0x10566a(_0x3cd7bd, _0x58774f, _0x3c9dfd);
            _0x5cf990.def = _0x10566a(_0x2b4f30, _0x4d6de3, _0x3c9dfd);
          }
        });
      }
    }, {
      key: "death",
      value: function (_0x5aeec6) {
        this.game.genDestructParticles(_0x5aeec6.track.polyline.segments, _0x5aeec6.team.skin, 1, 5);
        this.game.genFlashParticles(_0x5aeec6.position, _0x5aeec6.team.skin);
      }
    }, {
      key: "kill",
      value: function (_0x5c1ab8, _0x35a008) {
        if (_0x5c1ab8.isPlayer) {
          _0x5c1ab8.labels.push({
            text: this.game.language.killText,
            color: _0x35a008.team.skin.colors.main,
            unit: _0x5c1ab8,
            time: 1000,
            fading: true
          });
        }
      }
    }, {
      key: "comeback",
      value: function (_0x6ebd89, _0x17f734) {
        _0x17f734.increment;
        var _0x1cfd4b = _0x17f734.rise;
        _0x17f734.victims;
        var _0x4b08d8 = _0x17f734.game;
        var _0x385b31 = _0x1cfd4b.square() / _0x4b08d8.square;
        _0x6ebd89.scheme.personalPercent += _0x385b31;
        if (_0x385b31 * 100 >= 0.01 && _0x6ebd89.isPlayer) {
          this.game.labels.push(new _0x58ceba({
            text: `+${(_0x385b31 * 100).toFixed(2)}%`,
            color: _0x6ebd89.team.skin.colors.nick,
            target: _0x6ebd89,
            duration: 1000,
            position: new _0x1aa65a(0, -25),
            transformers: [_0x58ceba.mover({
              velocity: new _0x1aa65a(0, -45),
              acceleration: new _0x1aa65a(0, 60),
              tag: "mover"
            })],
            fn: function (_0x375a25) {
              var _0x1eb6f1 = _0x375a25.getTransformer("mover");
              _0x375a25.change({
                duration: 300,
                transformers: [_0x1eb6f1, _0x58ceba.fader({
                  reverse: true
                })]
              });
            }
          }));
        }
      }
    }, {
      key: "decrease",
      value: function (_0x273f52, _0x6a82eb) {
        var _0x3df7fb = _0x6a82eb.base;
        var _0x4925ed = _0x6a82eb.poly;
        this.game.genDestructParticles(_0x4925ed.segments, _0x3df7fb.team.skin, 1, 15);
      }
    }, {
      key: "name",
      get: function () {
        return "TF";
      }
    }]);
    return _0x1de6a8;
  }();
  var _0x5b6e56 = {
    createBot: _0x37e56b,
    respawn: function (_0x4f9915) {
      (function (_0x47c9cf) {
        var _0x3e3a50 = _0x47c9cf.config;
        for (var _0x2cac36 = _0x3e3a50.teamsCount, _0x18761c = _0x3e3a50.nearPlayerBotSpawnCount, _0x5f0d0d = 0; _0x47c9cf.teams.length < _0x2cac36 && _0x5f0d0d < _0x18761c; _0x5f0d0d++) {
          _0x47c9cf.spawnBot({
            place: "player"
          });
        }
        if (_0x47c9cf.teams.length < _0x2cac36) {
          if (!_0x47c9cf.spawnBot({
            place: "center"
          })) {
            _0x47c9cf.spawnBot({
              place: Math.random() > 0.3 ? "bounds" : "random"
            });
          }
        }
      })(_0x4f9915);
      var _0x1b1a53 = _0x4f9915.config;
      var _0x590197 = _0x1b1a53.teamsCount;
      var _0x2783bb = _0x1b1a53.teamSize;
      var _0x3b9d8e = _0x1b1a53.topTeamSuspendSpawn;
      var _0x42651d = _0x1b1a53.bottomTeamSuspendSpawn;
      _0x4f9915.teams.forEach(function (_0x1fe934) {
        if (_0x1fe934.suspendSpawn < 0 && _0x1fe934.units.length < _0x2783bb) {
          var _0x401462 = _0x1fe934.units.find(function (_0x1c2d9e) {
            return _0x1c2d9e.in === _0x1c2d9e.base;
          });
          if (_0x401462 && _0x4f9915.spawnBot({
            leader: _0x401462
          })) {
            var _0xfc41af = _0x10566a(_0x42651d, _0x3b9d8e, 1 - ((_0x1fe934.top || _0x590197) - 1) / (_0x590197 - 1));
            _0x1fe934.suspendSpawn = _0xfc41af;
          }
        }
      });
    },
    spawnBot: function (_0x42f6c3, _0x123a89) {
      var _0x53c548 = arguments.length > 1 && _0x123a89 !== undefined ? _0x123a89 : {};
      var _0x44382e = _0x42f6c3.config;
      var _0x342964 = _0x44382e.baseRadius;
      var _0x2ba427 = _0x44382e.baseDensity;
      _0x44382e.spawnTimeout;
      var _0x3b6c6e = _0x53c548.leader;
      var _0x365525 = _0x53c548.place;
      var _0x7d4a6f = _0x53c548.name;
      var _0x13f8a3 = _0x53c548.skin;
      if ((_0x3b6c6e || !_0x42f6c3.visible || _0x42f6c3.checkTeamSpawn()) && _0x42f6c3.nameManager.aviable() && _0x42f6c3.skinManager.available()) {
        var _0x482c2c = _0x53c548.spawnRadius || _0x342964;
        var _0x123866 = _0x3b6c6e ? _0x3b6c6e.position.clone() : _0x42f6c3.getspawnPosition(_0x365525, _0x482c2c);
        if (_0x123866) {
          var _0x401bc5;
          var _0x17c65b = [];
          if (!_0x7d4a6f || !_0x13f8a3) {
            while (_0x42f6c3.nameManager.aviable() && (!_0x401bc5 || _0x401bc5.user)) {
              var _0x24d2cf = _0x42f6c3.nameManager.get();
              if (_0x24d2cf.name) {
                _0x7d4a6f = _0x24d2cf.name;
                _0x13f8a3 = _0x24d2cf.skin;
                _0x401bc5 = _0x42f6c3.skinManager.has(_0x24d2cf.skin);
                _0x17c65b.push(_0x24d2cf);
              } else {
                _0x7d4a6f = _0x24d2cf;
                _0x401bc5 = {};
              }
            }
            if (!_0x401bc5 || !!_0x401bc5.user) {
              _0x13f8a3 = "";
            }
            _0x17c65b.pop();
            _0x42f6c3.nameManager.release(_0x17c65b);
          }
          var _0x205b64 = _0x37e56b(_0x42f6c3, _0x7d4a6f, _0x123866);
          var _0xc15505 = _0x3b6c6e ? _0x3b6c6e.base : _0x42f6c3.createBase(function (_0x31a2d4, _0x384e7b, _0x302fb2) {
            var _0x557280 = _0x1021b0 / _0x384e7b;
            var _0x250e61 = [];
            for (var _0x4b11eb = 0; _0x4b11eb < _0x384e7b; _0x4b11eb++) {
              var _0x578f75 = _0x4b11eb * _0x557280;
              _0x250e61.push(new _0x1aa65a(_0x31a2d4.x + Math.cos(_0x578f75) * _0x302fb2, _0x31a2d4.y + Math.sin(_0x578f75) * _0x302fb2));
            }
            return _0x250e61;
          }(_0x123866, Math.round(Math.PI * 2 * _0x482c2c * _0x2ba427), _0x482c2c));
          _0xc15505.join(_0x205b64);
          if (_0x3b6c6e) {
            _0x205b64.team = _0x3b6c6e.team;
          } else {
            var _0xa02008 = _0x42f6c3.createTeam();
            var _0x31d2d7 = _0x42f6c3.skinManager.get(_0xa02008, _0x13f8a3);
            _0xa02008.skin = _0x31d2d7;
            _0xa02008.bases.push(_0xc15505);
            _0xc15505.team = _0xa02008;
            _0x205b64.team = _0xa02008;
          }
          _0x205b64.team.units.push(_0x205b64);
          _0x205b64.updateSensors();
          _0x205b64.fsm.update();
          return _0x205b64;
        }
      }
    },
    spawnPlayer: function (_0x5f446f, _0x47c695) {
      var _0x5364c8 = _0x5f446f.config.teamSize;
      var _0xbd9931 = _0x47c695.name;
      _0x47c695.skin;
      _0x47c695.percent;
      var _0x5d281c = _0x5f446f.teams.filter(function (_0x92f7) {
        return _0x92f7.units.length < _0x5364c8;
      });
      if (_0x5d281c.length === 0) {
        _0x5d281c = _0x5f446f.teams;
      }
      var _0x2ba508;
      var _0x52bead = _0x5d281c.reduce(function (_0x3f13a1, _0x526f3c) {
        _0x526f3c.units.forEach(function (_0x851dc4) {
          if (_0x851dc4.in === _0x851dc4.base) {
            _0x3f13a1.push(_0x851dc4);
          }
        });
        return _0x3f13a1;
      }, []);
      var _0x37f877 = new _0xab57cb(_0x5f446f, _0xbd9931 || _0x5f446f.language.defaultPlayerName, null);
      if (_0x52bead.length) {
        _0x2ba508 = _0x52bead[Math.floor(Math.random() * _0x52bead.length)];
        _0x5f446f.joinToTeam(_0x37f877, _0x2ba508);
      } else {
        var _0x3a66f6;
        do {
          var _0x35fc1f = (_0x2ba508 = _0x5f446f.units[Math.floor(Math.random() * _0x5f446f.units.length)]).track.polyline.start;
          var _0x3293cf = _0x2ba508.track.polyline.segments[0];
          if (_0x3293cf) {
            var _0x505851 = _0x3293cf.clone().reverse().vector;
            _0x3a66f6 = _0x35fc1f.clone().add(_0x505851);
          } else {
            _0x3a66f6 = null;
          }
        } while (!_0x3a66f6 || !_0x2ba508.base.polygon.inside(_0x3a66f6));
        _0x5f446f.joinToTeam(_0x37f877, _0x2ba508, _0x3a66f6);
      }
      _0x5f446f.addPlayer(_0x37f877);
      if (_0x2ba508.team.units.length > _0x5364c8) {
        _0x5f446f.kill(_0x2ba508, undefined, 6);
      }
      return _0x37f877;
    }
  };
  var _0x505cbf = 0;
  var _0x3adcb6 = [];
  var _0x322009 = _0x167353.__r;
  var _0x55b609 = _0x167353.diffed;
  var _0x36ab57 = _0x167353.__c;
  var _0x30e1aa = _0x167353.unmount;
  function _0x363c5a(_0x83fa31, _0x53a232) {
    if (_0x167353.__h) {
      _0x167353.__h(_0x13dbb3, _0x83fa31, _0x505cbf || _0x53a232);
    }
    _0x505cbf = 0;
    var _0x4ea02a = _0x13dbb3.__H ||= {
      __: [],
      __h: []
    };
    if (_0x83fa31 >= _0x4ea02a.__.length) {
      _0x4ea02a.__.push({});
    }
    return _0x4ea02a.__[_0x83fa31];
  }
  function _0x3ce70b(_0x314b1f) {
    _0x505cbf = 1;
    _0x474691 = _0x5765cf;
    _0x5ed5ae = _0x314b1f;
    (_0x3a91ba = _0x363c5a(_0x5fde14++, 2)).t = _0x474691;
    if (!_0x3a91ba.__c) {
      _0x3a91ba.__ = [_0x41177d ? _0x41177d(_0x5ed5ae) : _0x5765cf(undefined, _0x5ed5ae), function (_0x599f24) {
        var _0x256050 = _0x3a91ba.t(_0x3a91ba.__[0], _0x599f24);
        if (_0x3a91ba.__[0] !== _0x256050) {
          _0x3a91ba.__ = [_0x256050, _0x3a91ba.__[1]];
          _0x3a91ba.__c.setState({});
        }
      }];
      _0x3a91ba.__c = _0x13dbb3;
    }
    return _0x3a91ba.__;
    var _0x474691;
    var _0x5ed5ae;
    var _0x41177d;
    var _0x3a91ba;
  }
  function _0x339d4a(_0xb4549, _0x50b293) {
    var _0x511a7e = _0x363c5a(_0x5fde14++, 3);
    if (!_0x167353.__s && _0x48fa8c(_0x511a7e.__H, _0x50b293)) {
      _0x511a7e.__ = _0xb4549;
      _0x511a7e.__H = _0x50b293;
      _0x13dbb3.__H.__h.push(_0x511a7e);
    }
  }
  function _0x46c75c(_0x4b9fe8) {
    _0x505cbf = 5;
    _0x279773 = function () {
      return {
        current: _0x4b9fe8
      };
    };
    _0x42a679 = [];
    if (_0x48fa8c((_0x5971fb = _0x363c5a(_0x5fde14++, 7)).__H, _0x42a679)) {
      _0x5971fb.__ = _0x279773();
      _0x5971fb.__H = _0x42a679;
      _0x5971fb.__h = _0x279773;
    }
    return _0x5971fb.__;
    var _0x279773;
    var _0x42a679;
    var _0x5971fb;
  }
  function _0x337dc6(_0x46c5a9) {
    var _0x4bdfa9 = _0x13dbb3.context[_0x46c5a9.__c];
    var _0x52c58b = _0x363c5a(_0x5fde14++, 9);
    _0x52c58b.__c = _0x46c5a9;
    if (_0x4bdfa9) {
      if (_0x52c58b.__ == null) {
        _0x52c58b.__ = true;
        _0x4bdfa9.sub(_0x13dbb3);
      }
      return _0x4bdfa9.props.value;
    } else {
      return _0x46c5a9.__;
    }
  }
  function _0x42ea27() {
    _0x3adcb6.forEach(function (_0x4e640a) {
      if (_0x4e640a.__P) {
        try {
          _0x4e640a.__H.__h.forEach(_0x31a0c9);
          _0x4e640a.__H.__h.forEach(_0x4507c5);
          _0x4e640a.__H.__h = [];
        } catch (_0x970d3f) {
          _0x4e640a.__H.__h = [];
          _0x167353.__e(_0x970d3f, _0x4e640a.__v);
        }
      }
    });
    _0x3adcb6 = [];
  }
  _0x167353.__r = function (_0x55b5c6) {
    if (_0x322009) {
      _0x322009(_0x55b5c6);
    }
    _0x5fde14 = 0;
    var _0x2d125a = (_0x13dbb3 = _0x55b5c6.__c).__H;
    if (_0x2d125a) {
      _0x2d125a.__h.forEach(_0x31a0c9);
      _0x2d125a.__h.forEach(_0x4507c5);
      _0x2d125a.__h = [];
    }
  };
  _0x167353.diffed = function (_0x22b908) {
    if (_0x55b609) {
      _0x55b609(_0x22b908);
    }
    var _0x3c698f = _0x22b908.__c;
    if (_0x3c698f && _0x3c698f.__H && _0x3c698f.__H.__h.length) {
      if (_0x3adcb6.push(_0x3c698f) === 1 || _0x438385 !== _0x167353.requestAnimationFrame) {
        ((_0x438385 = _0x167353.requestAnimationFrame) || function (_0x13b4ab) {
          function _0x24a68d() {
            clearTimeout(_0x3a2965);
            if (_0x4e7f6e) {
              cancelAnimationFrame(_0x53e471);
            }
            setTimeout(_0x13b4ab);
          }
          var _0x53e471;
          var _0x3a2965 = setTimeout(_0x24a68d, 100);
          if (_0x4e7f6e) {
            _0x53e471 = requestAnimationFrame(_0x24a68d);
          }
        })(_0x42ea27);
      }
    }
  };
  _0x167353.__c = function (_0xff6bb4, _0x54a10b) {
    _0x54a10b.some(function (_0x4e5498) {
      try {
        _0x4e5498.__h.forEach(_0x31a0c9);
        _0x4e5498.__h = _0x4e5498.__h.filter(function (_0x22db1e) {
          return !_0x22db1e.__ || _0x4507c5(_0x22db1e);
        });
      } catch (_0x371199) {
        _0x54a10b.some(function (_0x305432) {
          _0x305432.__h &&= [];
        });
        _0x54a10b = [];
        _0x167353.__e(_0x371199, _0x4e5498.__v);
      }
    });
    if (_0x36ab57) {
      _0x36ab57(_0xff6bb4, _0x54a10b);
    }
  };
  _0x167353.unmount = function (_0x492df9) {
    if (_0x30e1aa) {
      _0x30e1aa(_0x492df9);
    }
    var _0x4c4baa = _0x492df9.__c;
    if (_0x4c4baa && _0x4c4baa.__H) {
      try {
        _0x4c4baa.__H.__.forEach(_0x31a0c9);
      } catch (_0x372683) {
        _0x167353.__e(_0x372683, _0x4c4baa.__v);
      }
    }
  };
  var _0x4e7f6e = typeof requestAnimationFrame == "function";
  function _0x31a0c9(_0x2df6f7) {
    if (typeof _0x2df6f7.__c == "function") {
      _0x2df6f7.__c();
    }
  }
  function _0x4507c5(_0x32dd3c) {
    _0x32dd3c.__c = _0x32dd3c.__();
  }
  function _0x48fa8c(_0x5027cc, _0x27a7a4) {
    return !_0x5027cc || _0x5027cc.length !== _0x27a7a4.length || _0x27a7a4.some(function (_0x2658b8, _0x43b797) {
      return _0x2658b8 !== _0x5027cc[_0x43b797];
    });
  }
  function _0x5765cf(_0x236eca, _0x336972) {
    if (typeof _0x336972 == "function") {
      return _0x336972(_0x236eca);
    } else {
      return _0x336972;
    }
  }
  function _0x8e5689() {
    return _0x17adfe.find(function (_0x134d9f) {
      return _0x134d9f.name === _0x5ca8e6;
    }) || _0x17adfe.find(function (_0x409dc4) {
      return _0x409dc4.name === "en";
    });
  }
  function _0x5bea76(_0x14e5bf) {
    var _0x4a3e45 = _0x14e5bf.messages;
    var _0xa4fee0 = _0x3ecf93(_0x3ce70b(0), 2);
    var _0x261d5a = _0xa4fee0[0];
    var _0x26e2a1 = _0xa4fee0[1];
    _0x339d4a(function () {
      var _0xbc73e7 = setInterval(function () {
        return _0x26e2a1(function (_0x56ad81) {
          return (_0x56ad81 + 1) % _0x4a3e45.length;
        });
      }, 3000);
      return function () {
        return clearInterval(_0xbc73e7);
      };
    }, []);
    return _0xf89304("div", {
      class: "tips"
    }, _0xf89304("div", {
      class: "tip",
      key: _0x261d5a
    }, _0x4a3e45[_0x261d5a]));
  }
  function _0x1a8b93(_0x89cb9e) {
    var _0x2ce351 = _0x89cb9e.top;
    var _0x59cc88 = _0x89cb9e.name;
    var _0x9797ae = _0x89cb9e.scores;
    var _0x225797 = _0x89cb9e.player;
    return _0xf89304("li", {
      class: _0x2ce351 > 11 ? "extra_margin" : ""
    }, _0xf89304("div", {
      class: "lb_item_left"
    }, _0xf89304("span", {
      class: `top top${_0x2ce351}`
    }, _0x2ce351), _0xf89304("span", {
      class: `title${_0x225797 ? " player" : ""}`
    }, _0x59cc88)), _0xf89304("span", null, _0x9797ae));
  }
  function _0x56ffb5(_0x378713) {
    var _0x28ea1b = _0x378713.leaderboard;
    var _0x58ae08 = _0x378713.title;
    var _0x2fc986 = _0x378713.userId;
    return _0x28ea1b && _0xf89304("div", {
      class: "liderboard"
    }, _0xf89304("div", {
      class: "wrapper"
    }, _0xf89304("h3", null, _0x58ae08), _0xf89304("ul", null, _0x28ea1b.map(function (_0x35209a) {
      return _0xf89304(_0x1a8b93, {
        top: _0x35209a.leaderboardPosition,
        name: _0x35209a.userName.length > 150 ? _0x35209a.userName.substring(0, 15) + "..." : _0x35209a.userName,
        scores: _0x35209a.leaderboardValue,
        player: _0x35209a.userId == _0x2fc986
      });
    }))));
  }
  function _0x5dc747(_0x51be2e) {
    function _0x51a1cf() {
      if (!_0x3e02de) {
        _0x1d6d60(!_0x1dfe84);
      }
    }
    var _0x32e714 = _0x51be2e.setMode;
    var _0x2e424b = _0x51be2e.modes;
    var _0x3c88c6 = _0x51be2e.currentMode;
    var _0x3e02de = _0x51be2e.preparing;
    var _0x4172c9 = _0x3ecf93(_0x3ce70b(false), 2);
    var _0x1dfe84 = _0x4172c9[0];
    var _0x1d6d60 = _0x4172c9[1];
    var _0x3b060a = document.getElementById("paper-io-com_336x280");
    if (_0x3b060a) {
      _0x3b060a.className = _0x1dfe84 ? "openedSelect" : "";
    }
    return _0xf89304("div", {
      class: "flag-select"
    }, _0xf89304("div", {
      class: "flag-selected",
      onClick: _0x51a1cf
    }, _0xf89304("div", {
      class: "country-label"
    }, _0xf89304("span", null, `Teams - ${_0x3c88c6.title}`)), _0xf89304("span", {
      class: "arrow-down"
    }, "▾")), _0x1dfe84 && _0xf89304("div", {
      class: "flag-options"
    }, _0x2e424b.map(function (_0x12cbea, _0x347cc3) {
      return _0xf89304("div", {
        class: "flag-option",
        key: _0x347cc3,
        tabIndex: "0",
        onClick: function () {
          _0x2613d2 = _0x12cbea;
          _0x51a1cf();
          _0x32e714(_0x2613d2);
          return;
          var _0x2613d2;
        }
      }, _0xf89304("div", {
        class: "country-label"
      }, _0xf89304("span", null, _0x12cbea.title)));
    })));
  }
  function _0x431853(_0x4d8495) {
    var _0x4f64b4 = _0x4d8495.nickName;
    var _0x3ed417 = _0x4d8495.setNickName;
    _0x4d8495.playable;
    var _0x49603d = _0x4d8495.preparing;
    var _0x43817f = _0x4d8495.start;
    _0x4d8495.route;
    _0x4d8495.provider;
    var _0x542ddb = _0x4d8495.api;
    _0x4d8495.skin;
    var _0x5bf1fb = _0x4d8495.storage;
    var _0x2d8ac0 = _0x4d8495.modes;
    var _0x13966d = _0x4d8495.currentMode;
    var _0x600cfd = _0x4d8495.setMode;
    var _0xf7a3fd = _0x337dc6(_0x356000).lng;
    if (_0x542ddb && _0x542ddb.game) {
      _0x542ddb.game.config;
    }
    var _0x5dd68f = !!_0x542ddb;
    var _0x1e1c14 = _0x5dd68f;
    var _0x9bfb96 = _0x3ecf93(_0x3ce70b(null), 2);
    var _0xa9c369 = _0x9bfb96[0];
    var _0x4b3684 = _0x9bfb96[1];
    _0x339d4a(function () {
      if (window.ShowAds) {
        window.ShowAds();
      }
      fetch("https://leaderboard.paper-io.com/json/paperteams_kills_1.json").then(function (_0x31d626) {
        return _0x31d626.json();
      }).then(function (_0x484a76) {
        return _0x4b3684(_0x484a76.slice(0, 10));
      });
    }, []);
    return _0xf89304(_0x1c0527, null, _0xf89304("div", {
      id: "left_side"
    }, _0xf89304(_0x56ffb5, {
      leaderboard: _0xa9c369,
      title: _0xf7a3fd.top10Killers,
      userId: _0x5bf1fb.get("player_id")
    })), _0xf89304("div", {
      class: "uibox"
    }, _0xf89304("div", {
      class: "logo"
    }, _0xf89304("img", {
      src: "assets/images/logo.png"
    })), _0xf89304(_0x5bea76, {
      messages: _0xf7a3fd.messages
    }), _0xf89304("div", {
      class: "play"
    }, _0xf89304("input", {
      type: "text",
      id: "nick",
      name: "nick",
      value: _0x4f64b4,
      autocomplete: "off",
      placeholder: _0xf7a3fd.placeholderText,
      maxlength: "12",
      oninput: function (_0x1c537b) {
        return _0x3ed417(_0x1c537b.target.value);
      }
    }), _0xf89304("button", {
      id: "play",
      name: "play",
      class: "yellow" + (_0x1e1c14 ? "" : " disabled"),
      onClick: function (_0x3b232f) {
        _0x3b232f.preventDefault();
        if (_0x1e1c14) {
          if (window.ga) {
            window.ga("send", "event", "teams", "start_play");
          }
          _0x43817f();
        }
      }
    }, _0xf7a3fd.btnPlay)), _0xf89304(_0x5dc747, {
      preparing: _0x49603d,
      setMode: _0x600cfd,
      modes: _0x2d8ac0,
      currentMode: _0x13966d
    }), !_0x5dd68f && _0xf89304("p", {
      class: "notsupported"
    }, _0xf7a3fd.nosupport)), _0xf89304("div", {
      id: "right_side"
    }));
  }
  function _0x2b6756(_0x543e6b) {
    var _0x2c0bea = _0x543e6b.nickName;
    var _0x97fded = _0x543e6b.bestScore;
    var _0x54b629 = _0x543e6b.setBestScore;
    var _0x18303b = _0x543e6b.setResults;
    var _0x29708e = _0x543e6b.setPreparing;
    var _0x14fd22 = _0x543e6b.api;
    var _0x18f51e = _0x543e6b.route;
    var _0x5d1885 = _0x543e6b.skin;
    var _0x3752ae = _0x543e6b.lastPercent;
    _0x339d4a(function () {
      if (window.ads && window.ads.hideAds) {
        window.ads.hideAds();
      }
      if (window.HideAds) {
        window.HideAds();
      }
      _0x14fd22.game.language = _0x337dc6(_0x356000).lng;
      var _0x4a5f1a = _0x5d1885;
      if (_0x4a5f1a === "default" || _0x4a5f1a === "No skin" || _0x4a5f1a === "noskin") {
        _0x4a5f1a = "";
      }
      _0x14fd22.start(_0x2c0bea, _0x4a5f1a, _0x97fded, function (_0x18e8b2) {
        if (_0x18e8b2.newBest) {
          _0x54b629(_0x18e8b2.score);
        }
        _0x18303b(_0x18e8b2);
        _0x18f51e("results");
      }, _0x3752ae);
      _0x29708e(false);
    }, []);
    return null;
  }
  function _0x426836(_0x23dfbc) {
    var _0xb04557 = _0x23dfbc.bestScore;
    var _0x2eb528 = _0x23dfbc.results;
    var _0x2b0456 = _0x23dfbc.start;
    var _0x9f354 = _0x23dfbc.route;
    _0x23dfbc.provider;
    _0x23dfbc.country;
    var _0x3773d7 = _0x23dfbc.storage;
    var _0x122dea = _0x337dc6(_0x356000).lng;
    var _0x55c40b = _0x3ecf93(_0x3ce70b(null), 2);
    var _0x16c590 = _0x55c40b[0];
    var _0x13f73a = _0x55c40b[1];
    _0x339d4a(function () {
      if (window.ShowAds) {
        window.ShowAds();
      }
      if (_0x2eb528.reason === 0 && window.ga) {
        window.ga("send", "event", "teams", "win");
      }
      fetch("https://leaderboard.paper-io.com/json/paperteams_kills_1.json").then(function (_0x48173a) {
        return _0x48173a.json();
      }).then(function (_0x1728b1) {
        return _0x13f73a(_0x1728b1.slice(0, 10));
      });
    }, []);
    return _0xf89304(_0x1c0527, null, _0xf89304("div", {
      id: "left_side"
    }, _0xf89304(_0x56ffb5, {
      leaderboard: _0x16c590,
      title: _0x122dea.top10Killers,
      userId: _0x3773d7.get("player_id")
    })), _0xf89304("div", {
      class: "uibox"
    }, _0xf89304("div", {
      class: "logo"
    }, _0xf89304("img", {
      src: "assets/images/logo.png"
    })), _0xf89304("div", {
      class: "nav"
    }, _0xf89304("button", {
      class: "yellow slider-5",
      id: "again",
      onClick: function () {
        if (window.ga) {
          window.ga("send", "event", "teams", "play_again");
        }
        _0x2b0456();
      }
    }, _0x122dea.playAgain), _0xf89304("button", {
      class: "green slider-5",
      id: "menu",
      onClick: function () {
        return _0x9f354("menu");
      }
    }, _0x122dea.menu), _0xf89304("button", {
      class: "green slider-5",
      id: "mode",
      onClick: function () {
        window.location.href = "//paperio.site";
      }
    }, _0x122dea.btnCGM)), _0xf89304("div", {
      class: "resultbox"
    }, _0xf89304("div", {
      class: "results"
    }, _0xf89304("div", {
      class: "left"
    }, _0xf89304("div", {
      class: "slider-1"
    }, _0x122dea.yourScore, ":"), _0xf89304("div", {
      class: "slider-2"
    }, _0x2eb528.newBest && _0xf89304("span", {
      class: "newScore"
    }, _0x122dea.newText, " "), _0x122dea.bestScore, ":"), _0xf89304("div", {
      class: "slider-3"
    }, _0x122dea.timePlayed, ":"), _0xf89304("div", {
      class: "slider-4"
    }, _0x122dea.playersKilled, ":")), _0xf89304("div", {
      class: "right"
    }, _0xf89304("div", {
      class: "slider-1"
    }, `${_0x2eb528.score.toFixed(2)}%`), _0xf89304("div", {
      class: "slider-2"
    }, _0xb04557.toFixed(2) + "%"), _0xf89304("div", {
      class: "slider-3"
    }, new Date(_0x2eb528.time).toISOString().slice(14, -5)), _0xf89304("div", {
      class: "slider-4"
    }, _0x2eb528.kills)))), _0xf89304("div", {
      id: "yandex_rtb"
    })), _0xf89304("div", {
      id: "right_side"
    }));
  }
  function _0x5aedcd(_0x206620) {
    var _0x346922 = _0x206620.config;
    var _0x40efa3 = _0x206620.apply;
    if (_0x346922) {
      return _0xf89304("form", {
        class: "config",
        onSubmit: _0x40efa3
      }, Object.entries(_0x346922).map(function (_0x117e2c) {
        var _0x21c9b7 = _0x3ecf93(_0x117e2c, 2);
        var _0x22a276 = _0x21c9b7[0];
        return _0xf89304("label", {
          style: "color: white;"
        }, _0x22a276, "\xA0", _0xf89304("input", {
          type: "text",
          id: _0x22a276,
          name: _0x22a276,
          value: _0x21c9b7[1],
          autocomplete: "off",
          maxlength: "10"
        }));
      }), _0xf89304("button", {
        id: "apply",
        name: "apply",
        class: "yellow"
      }, "Применить"));
    } else {
      return null;
    }
  }
  function _0x3888a8(_0x7004c0) {
    var _0x552449 = _0x7004c0.api;
    var _0x1a5418 = _0x7004c0.view;
    var _0x22c89d = _0x7004c0.setPreparing;
    var _0x3bdcaa = _0x7004c0.setState;
    var _0x4eb224 = _0x552449 && _0x552449.game && _0x552449.game.config;
    return _0xf89304("div", {
      class: "uibox"
    }, _0xf89304("div", {
      class: "logo"
    }, _0xf89304("img", {
      src: "assets/images/logo.png"
    })), _0xf89304(_0x5aedcd, {
      config: _0x4eb224,
      apply: function (_0x23eee4) {
        _0x23eee4.preventDefault();
        Object.keys(_0x4eb224).forEach(function (_0x1cb633) {
          var _0x3be501 = document.getElementById(_0x1cb633);
          if (_0x3be501) {
            var _0x4a1209 = parseFloat(_0x3be501.value);
            _0x4eb224[_0x1cb633] = _0x4a1209 != _0x4a1209 ? _0x3be501.value : _0x4a1209;
          }
        });
        _0x552449.game.stopped = true;
        _0x552449.create(_0x1a5418.current);
        _0x22c89d(true);
        _0x552449.prepare(function () {
          return _0x22c89d(false);
        });
        _0x3bdcaa("menu");
      }
    }));
  }
  function _0x864be9(_0x345a23) {
    var _0x224b4d = _0x345a23.setLanguage;
    var _0x430db5 = _0x337dc6(_0x356000);
    var _0x45e94f = _0x17adfe.map(function (_0x4bcd2c, _0x148920) {
      return _0xf89304("li", {
        class: _0x4bcd2c === _0x430db5 ? "active" : "",
        onClick: function () {
          return _0x224b4d(_0x17adfe[_0x148920]);
        }
      }, _0x4bcd2c.name.toUpperCase());
    });
    return _0xf89304("div", {
      id: "footer"
    }, _0xf89304("ul", {
      id: "lng"
    }, _0x45e94f));
  }
  function _0x51cd56(_0x41e13e) {
    var _0x411390 = _0x41e13e.config;
    var _0xb8e4ed = _0x41e13e.api;
    var _0x24980c = _0x41e13e.storage;
    _0x41e13e.ads;
    var _0x2b17cb = _0x41e13e.provider;
    var _0x1c2acf = _0x41e13e.skins;
    var _0x1dc1a8 = _0x41e13e.mode;
    var _0x3ddcd6 = function (_0x4ca404, _0x5b1b04, _0x1f49dd, _0x2e3a1c) {
      var _0x558539 = {
        expires: 365,
        path: "/"
      };
      var _0x39e3af = !!_0x4ca404;
      var _0x2721d2 = _0x46c75c(null);
      var _0x2a40a3 = _0x3ecf93(_0x3ce70b("menu"), 2);
      var _0x95bd12 = _0x2a40a3[0];
      var _0x47b157 = _0x2a40a3[1];
      var _0x3abbe6 = _0x3ecf93(_0x3ce70b(true), 2);
      var _0x235071 = _0x3abbe6[0];
      var _0xdf7031 = _0x3abbe6[1];
      var _0x518447 = _0x3ecf93(_0x3ce70b(_0x8e5689()), 2);
      var _0x4db71c = _0x518447[0];
      var _0x4aa8ef = _0x518447[1];
      var _0x2a555c = _0x3ecf93(_0x3ce70b(null), 2);
      var _0x3b0ad0 = _0x2a555c[0];
      var _0x579d20 = _0x2a555c[1];
      var _0x1f431f = "paper.io.";
      var _0xfa0445 = `${_0x1f431f}storage`;
      var _0x330ff1 = _0x5b1b04.getJSON(_0xfa0445) || {};
      var _0x1778a2 = _0x330ff1.nickName || "";
      if (_0x2e3a1c) {
        _0x1778a2 = _0x5b1b04.get("paperio_username") || "";
      }
      var _0x36efdb = _0x3ecf93(_0x3ce70b(_0x1778a2), 2);
      var _0x2e8dbe = _0x36efdb[0];
      var _0x2848de = _0x36efdb[1];
      if (_0x2e8dbe !== _0x330ff1.nickName) {
        _0x330ff1.nickName = _0x2e8dbe;
        _0x5b1b04.set(_0xfa0445, _0x330ff1, _0x558539);
      }
      if (_0x2e3a1c && _0x2e8dbe !== _0x1778a2) {
        _0x5b1b04.set("paperio_username", _0x2e8dbe, _0x558539);
      }
      var _0x4b7213 = `${_0x1f431f}${_0x1f49dd}`;
      var _0x307cc6 = _0x5b1b04.getJSON(_0x4b7213) || {};
      var _0x1d617b = _0x3ecf93(_0x3ce70b(_0x307cc6.bestScore || 0), 2);
      var _0x95c4f1 = _0x1d617b[0];
      var _0xfee764 = _0x1d617b[1];
      if (_0x95c4f1 !== _0x307cc6.bestScore) {
        _0x307cc6.bestScore = _0x95c4f1;
        _0x5b1b04.set(_0x4b7213, _0x307cc6, _0x558539);
      }
      _0x339d4a(function () {
        if (_0x39e3af) {
          _0x4ca404.create(_0x2721d2.current);
          _0x4ca404.prepare(function () {
            return _0xdf7031(false);
          });
        }
      }, []);
      return {
        view: _0x2721d2,
        playable: _0x39e3af,
        state: _0x95bd12,
        setState: _0x47b157,
        preparing: _0x235071,
        setPreparing: _0xdf7031,
        language: _0x4db71c,
        setLanguage: _0x4aa8ef,
        results: _0x3b0ad0,
        setResults: _0x579d20,
        nickName: _0x2e8dbe,
        setNickName: _0x2848de,
        bestScore: _0x95c4f1,
        setBestScore: _0xfee764,
        commonStorageName: _0xfa0445,
        modeStorageName: _0x4b7213,
        options: _0x558539,
        setStorageField: function (_0x5a76d4, _0x28a897, _0x457f07) {
          var _0x53f7d2 = _0x5b1b04.getJSON(_0x5a76d4) || {};
          if (_0x457f07 !== _0x53f7d2[_0x28a897]) {
            _0x53f7d2[_0x28a897] = _0x457f07;
            _0x5b1b04.set(_0x5a76d4, _0x53f7d2, _0x558539);
          }
        }
      };
    }(_0xb8e4ed, _0x24980c, _0x1dc1a8 === undefined ? "storage" : _0x1dc1a8, true);
    var _0x2fe2d0 = _0x3ddcd6.view;
    var _0x251977 = _0x3ddcd6.playable;
    var _0x4aaa21 = _0x3ddcd6.state;
    var _0x59a86b = _0x3ddcd6.setState;
    var _0x2ba8a3 = _0x3ddcd6.preparing;
    var _0x385533 = _0x3ddcd6.setPreparing;
    var _0xa22d18 = _0x3ddcd6.language;
    var _0x5b50e9 = _0x3ddcd6.setLanguage;
    var _0x235571 = _0x3ddcd6.results;
    var _0x2574fd = _0x3ddcd6.setResults;
    var _0x5dc72a = _0x3ddcd6.nickName;
    var _0xc86b95 = _0x3ddcd6.setNickName;
    var _0x1fe1a7 = _0x3ddcd6.bestScore;
    var _0x15c70d = _0x3ddcd6.setBestScore;
    var _0x5e3298 = _0x24980c.get("darkTheme");
    var _0x5ed972 = _0x3ecf93(_0x3ce70b(_0x57eb52[0]), 2);
    var _0x28c078 = _0x5ed972[0];
    var _0x153fa2 = _0x5ed972[1];
    function _0x470474() {
      var _0x4c4ddf = document.getElementById("overlay");
      if (_0x4c4ddf) {
        _0x4c4ddf.style.display = "block";
        _0x4c4ddf.style.animation = "fadein 500ms";
      }
      if (_0xb8e4ed && _0xb8e4ed.game) {
        _0xb8e4ed.game.visible = false;
      }
      window.ShowPreroll();
    }
    _0xb8e4ed.startGame = function () {
      if (_0xb8e4ed && _0xb8e4ed.game) {
        var _0x55a743 = document.getElementById("overlay");
        if (_0x55a743) {
          _0x55a743.style.display = "none";
        }
        var _0x551376 = _0xb8e4ed.game.config;
        Object.assign(_0x551376, _0x5e3298 === "true" ? _0x551376.darkTheme : _0x551376.lightTheme);
        _0xb8e4ed.game.visible = true;
        if (window.ga) {
          ga("send", "event", "teams", _0x28c078.ga);
        }
        _0x59a86b("game");
      }
    };
    return _0xf89304(_0x1c0527, null, _0xf89304("canvas", {
      class: _0x4aaa21 === "game" || _0x2ba8a3 ? "" : "fadein",
      id: "view",
      ref: _0x2fe2d0
    }), _0x4aaa21 !== "game" && _0xf89304("div", {
      id: "ui_overlay"
    }), _0xf89304(_0x356000.Provider, {
      value: _0xa22d18
    }, _0xf89304("div", {
      id: "ui",
      class: _0x4aaa21 === "game" ? "hide" : ""
    }, _0x4aaa21 === "menu" && _0xf89304(_0x431853, {
      nickName: _0x5dc72a,
      setNickName: _0xc86b95,
      playable: _0x251977,
      preparing: _0x2ba8a3,
      start: _0x470474,
      route: _0x59a86b,
      provider: _0x2b17cb,
      setLanguage: _0x5b50e9,
      api: _0xb8e4ed,
      setState: _0x59a86b,
      skins: _0x1c2acf,
      storage: _0x24980c,
      modes: _0x57eb52,
      currentMode: _0x28c078,
      setMode: function (_0x3b3b23) {
        var _0x5df93d;
        if (_0x28c078 !== _0x3b3b23) {
          _0x5df93d = _0x198d1a(_0x198d1a({}, _0x411390), _0x3b3b23.config);
          if (_0xb8e4ed) {
            _0xb8e4ed.config = _0x5df93d;
            _0xb8e4ed.create(_0x2fe2d0.current);
            _0x385533(true);
            _0xb8e4ed.prepare(function () {
              return _0x385533(false);
            });
          }
          _0x153fa2(_0x3b3b23);
        }
      }
    }), _0x4aaa21 === "game" && _0xf89304(_0x2b6756, {
      nickName: _0x5dc72a,
      bestScore: _0x1fe1a7,
      setBestScore: _0x15c70d,
      setResults: _0x2574fd,
      setPreparing: _0x385533,
      api: _0xb8e4ed,
      route: _0x59a86b
    }), _0x4aaa21 === "results" && _0xf89304(_0x426836, {
      bestScore: _0x1fe1a7,
      results: _0x235571,
      start: _0x470474,
      route: _0x59a86b,
      provider: _0x2b17cb,
      storage: _0x24980c
    }), _0x4aaa21 === "config" && _0xf89304(_0x3888a8, {
      api: _0xb8e4ed,
      view: _0x2fe2d0,
      setPreparing: _0x385533,
      setState: _0x59a86b
    })), _0x4aaa21 !== "game" && _0xf89304(_0x864be9, {
      setLanguage: _0x5b50e9
    })), _0xf89304("div", {
      id: "overlay"
    }));
  }
  function _0x341ce4(_0x5e5749, _0x1b8ce5, _0x44f375, _0x151e81) {
    var _0x5bd18f = this;
    function _0x1dd1a7(_0x16bfd5) {
      _0x16bfd5.rescale(_0x5bd18f.scale);
      if (_0x5bd18f.layers.length === ++_0x36acbd) {
        _0x5bd18f.ready = true;
        if (_0x151e81) {
          _0x151e81();
        }
      }
    }
    _0x43fd4a(this, _0x341ce4);
    Object.assign(this, {
      scale: 1,
      x: 0,
      y: 0,
      layers: [],
      ready: false
    }, _0x44f375);
    var _0x36acbd = 0;
    this.layers = (this.layers || []).map(function (_0x26240c) {
      return new _0x329826(_0x5e5749, _0x198d1a(_0x198d1a({}, _0x26240c), {}, {
        url: _0x26240c.url && `${_0x1b8ce5}${_0x26240c.url}`
      }), _0x1dd1a7);
    });
    this.frontLayers = this.layers.filter(function (_0x4fc5d5) {
      return _0x4fc5d5.level >= 1;
    }).sort(function (_0x4ad2cf, _0x5e7a42) {
      return _0x4ad2cf.level - _0x5e7a42.level;
    });
    this.backLayers = this.layers.filter(function (_0x16ce81) {
      return _0x16ce81.level < 1;
    }).sort(function (_0x758b88, _0x4ed35a) {
      return _0x4ed35a.level - _0x758b88.level;
    });
  }
  function _0x151979(_0x5d1a9c) {
    var _0x38d94a = _0x5d1a9c.game.player;
    if (_0x38d94a && _0x5d1a9c.team !== _0x38d94a.team) {
      var _0xa72998 = Math.max(_0x5d1a9c.vrange, _0x38d94a.vrange) * _0x5d1a9c.aggro * 0.75;
      var _0x34ce53 = _0xa72998 * _0xa72998;
      return _0x38d94a.track.simplyline.some(function (_0x511f00) {
        return _0x5d1a9c.position.distance2(_0x511f00) < _0x34ce53;
      });
    }
  }
  function _0x216c74(_0x112e43, _0x37c02f) {
    if (_0x112e43.in !== _0x112e43.base) {
      var _0x2449ca = _0x112e43.game.player;
      var _0x1a5033 = _0x37c02f ? _0x2449ca.baseDistance / _0x2449ca.maxDanger : Infinity;
      var _0x230836 = _0x112e43.game.config.unitSpeed * 0.5 * _0x112e43.def;
      var _0x36d55d = _0x112e43.baseDistance / _0x112e43.maxDanger;
      return (!_0x37c02f || !(_0x112e43.baseDistance > _0x36d55d + _0x230836)) && !(_0x1a5033 < _0x36d55d - _0x230836) && (_0x36d55d < _0x230836 || _0x36d55d - _0x112e43.baseDistance < _0x230836);
    }
  }
  function _0x55fbaf(_0x57ffd1) {
    var _0x39ec90 = _0x57ffd1.track.simplyline;
    if (_0x39ec90.length < 2) {
      return false;
    }
    var _0x27b66b = _0x57ffd1.game.config.unitSpeed;
    var _0x5a1566 = _0x57ffd1.target.clone().sub(_0x57ffd1.position).normalize().mulScalar(_0x27b66b);
    var _0x45d863 = new _0x1b9fb2(_0x57ffd1.position, _0x5a1566.add(_0x57ffd1.position));
    for (var _0x25a24d = 0; _0x25a24d < _0x39ec90.length - 1; _0x25a24d++) {
      var _0x37ceca = new _0x1b9fb2(_0x39ec90[_0x25a24d], _0x39ec90[_0x25a24d + 1]).intersect(_0x45d863);
      if (_0x37ceca && _0x37ceca.point !== _0x57ffd1.track.polyline.end && _0x37ceca.point !== _0x57ffd1.track.polyline.start) {
        return _0x37ceca.point;
      }
    }
    return false;
  }
  var _0x138732;
  var _0xc8b607;
  var _0x581182;
  var _0x17adfe = [];
  var _0x5ca8e6 = (navigator.languages && navigator.languages.length && navigator.languages[0] || navigator.userLanguage || navigator.language || navigator.browserLanguage || "en").substr(0, 2).toLowerCase();
  var _0x356000 = (_0x581182 = {
    __c: _0xc8b607 = "__cC" + _0xf52839++,
    __: _0x138732,
    Consumer: function (_0x221885, _0x5c92a6) {
      return _0x221885.children(_0x5c92a6);
    },
    Provider: function (_0x5586cd, _0x4c0c71, _0x2e9e7d) {
      if (!this.getChildContext) {
        _0x4c0c71 = [];
        ((_0x2e9e7d = {})[_0xc8b607] = this).getChildContext = function () {
          return _0x2e9e7d;
        };
        this.shouldComponentUpdate = function (_0x551dee) {
          if (this.props.value !== _0x551dee.value) {
            _0x4c0c71.some(_0x164414);
          }
        };
        this.sub = function (_0x230548) {
          _0x4c0c71.push(_0x230548);
          var _0xfe867d = _0x230548.componentWillUnmount;
          _0x230548.componentWillUnmount = function () {
            _0x4c0c71.splice(_0x4c0c71.indexOf(_0x230548), 1);
            if (_0xfe867d) {
              _0xfe867d.call(_0x230548);
            }
          };
        };
      }
      return _0x5586cd.children;
    }
  }).Provider.__ = _0x581182.Consumer.contextType = _0x581182;
  var _0x57eb52 = [{
    title: "Classic mode",
    config: {},
    ga: "mode_classic"
  }, {
    title: "Small map",
    config: {
      arenaSize: 1000,
      botAttackTrackLength: 750
    },
    ga: "mode_smallmap"
  }, {
    title: "Fast speed",
    config: {
      unitSpeed: 180
    },
    ga: "mode_fastspeed"
  }];
  var _0x307b0f = ["#f77f00", "#ffe066", "#ac3232", "#ff3377", "#ff99cc", "#99e550", "#4b692f", "#1a936f", "#8a6f30", "#3b7dd8"];
  var _0x329826 = function () {
    function _0x5c70fe(_0x4f3e77, _0x5724cb, _0x2f7a76) {
      var _0xc0aa3 = this;
      _0x43fd4a(this, _0x5c70fe);
      this.config = _0x4f3e77;
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
      }, _0x5724cb);
      this.pivot = Object.assign({
        x: 0.5,
        y: 0.5
      }, _0x5724cb.pivot);
      if (this.url) {
        var _0x338e13 = new Image();
        _0x338e13.onload = function () {
          _0xc0aa3.src = _0x338e13;
          _0xc0aa3.rescale(1);
          if (_0x2f7a76) {
            _0x2f7a76(_0xc0aa3);
          }
        };
        _0x338e13.src = this.url;
      }
      if (this.src) {
        Promise.resolve(this.src).then(function (_0x1c71d1) {
          _0xc0aa3.src = _0x1c71d1;
          _0xc0aa3.rescale(1);
          if (_0x2f7a76) {
            _0x2f7a76(_0xc0aa3);
          }
        });
      }
    }
    _0x5796f0(_0x5c70fe, [{
      key: "rescale",
      value: function (_0x5adfba) {
        var _0x1cf153 = this.config;
        var _0x510323 = _0x1cf153.trackWidth * _0x1cf153.maxScale;
        var _0x5f20f0 = this.src;
        var _0x1c8521 = _0x5f20f0.naturalWidth || _0x5f20f0.width;
        var _0xccc9ce = _0x5f20f0.naturalHeight || _0x5f20f0.height;
        var _0x42403d = _0x510323 * _0x5adfba * this.scale / _0x1c8521;
        var _0x535009 = ~~(_0x1c8521 * _0x42403d);
        var _0x172bf7 = ~~(_0xccc9ce * _0x42403d);
        var _0x13eb01 = _0x535009 / _0x1c8521;
        var _0x500c0a = _0x172bf7 / _0xccc9ce;
        var _0x4e29c7 = document.createElement("canvas");
        _0x4e29c7.width = _0x535009;
        _0x4e29c7.height = _0x172bf7;
        var _0x180d0f = _0x4e29c7.getContext("2d");
        _0x180d0f.scale(_0x13eb01, _0x500c0a);
        _0x180d0f.drawImage(_0x5f20f0, 0, 0);
        this.image = _0x4e29c7;
      }
    }]);
    return _0x5c70fe;
  }();
  document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var _0xbd1d81 = function () {
    function _0x123cbe() {
      _0x43fd4a(this, _0x123cbe);
      this.displays = [];
      this.frontLayers = [];
      this.backLayers = [];
      this.maxScale = 0;
    }
    _0x5796f0(_0x123cbe, [{
      key: "sort",
      value: function () {
        var _0x1278e7;
        var _0x2a237c;
        this.frontLayers = (_0x1278e7 = []).concat.apply(_0x1278e7, _0x105c0a(this.displays.map(function (_0x4f87a2) {
          return _0x4f87a2.frontLayers.map(function (_0x44b48e) {
            return {
              display: _0x4f87a2,
              layer: _0x44b48e
            };
          });
        }))).sort(function (_0x2f8a66, _0x42fcf9) {
          return _0x2f8a66.layer.level - _0x42fcf9.layer.level;
        });
        this.backLayers = (_0x2a237c = []).concat.apply(_0x2a237c, _0x105c0a(this.displays.map(function (_0x448623) {
          return _0x448623.backLayers.map(function (_0x10d8fc) {
            return {
              display: _0x448623,
              layer: _0x10d8fc
            };
          });
        }))).sort(function (_0x39ecf5, _0x170597) {
          return _0x170597.layer.level - _0x39ecf5.layer.level;
        });
        this.maxScale = Math.max.apply(Math, _0x105c0a(this.frontLayers.map(function (_0x4f3540) {
          return _0x4f3540.display.scale * _0x4f3540.layer.scale;
        })));
      }
    }, {
      key: "add",
      value: function (_0xd3351c) {
        this.displays.push(_0xd3351c);
        this.sort();
      }
    }, {
      key: "remove",
      value: function (_0x2592ac) {
        this.displays = this.displays.filter(function (_0x3a6816) {
          return _0x3a6816 !== _0x2592ac;
        });
        this.sort();
      }
    }, {
      key: "ready",
      get: function () {
        return this.displays.every(function (_0x4d1bad) {
          return _0x4d1bad.ready;
        });
      }
    }]);
    return _0x123cbe;
  }();
  var _0x46eadc = function () {
    function _0x3e61b0() {
      _0x43fd4a(this, _0x3e61b0);
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
      this.container = new _0xbd1d81();
    }
    _0x5796f0(_0x3e61b0, [{
      key: "addAsset",
      value: function (_0x716734, _0x571f99) {
        var _0x513062 = this;
        (_0x571f99 || Object.keys(_0x716734.content)).forEach(function (_0x321076) {
          var _0x4b25d3 = _0x716734.content[_0x321076];
          if (_0x4b25d3) {
            switch (_0x321076) {
              case "colors":
              case "pattern":
                _0x513062[_0x321076] = _0x4b25d3;
                break;
              case "display":
                _0x513062.container.add(_0x4b25d3);
            }
          }
        });
        this.assets.push(_0x716734);
        _0x716734.use(this);
      }
    }, {
      key: "removeAsset",
      value: function (_0xa7c5ac, _0x14f28e) {
        var _0x53a3e0 = this;
        (_0x14f28e || Object.keys(_0xa7c5ac.content)).forEach(function (_0x5ae99b) {
          var _0x802c54 = _0xa7c5ac.content[_0x5ae99b];
          if (_0x802c54) {
            switch (_0x5ae99b) {
              case "colors":
              case "pattern":
                _0x53a3e0[_0x5ae99b] = undefined;
                break;
              case "display":
                _0x53a3e0.container.remove(_0x802c54);
            }
          }
        });
        this.assets = this.assets.filter(function (_0x1b599c) {
          return _0x1b599c !== _0xa7c5ac;
        });
        _0xa7c5ac.unuse(this);
      }
    }, {
      key: "getName",
      value: function () {
        return this.assets[0].name;
      }
    }]);
    return _0x3e61b0;
  }();
  var _0x4eea72 = function () {
    function _0x1bfa4a(_0x50632a, _0x65191b, _0x5379c5) {
      _0x43fd4a(this, _0x1bfa4a);
      this.pool = _0x50632a;
      this.name = _0x65191b;
      this.source = _0x5379c5;
      this.content = {};
      this.consumers = [];
      this.ready = false;
    }
    _0x5796f0(_0x1bfa4a, [{
      key: "use",
      value: function (_0x55bf96) {
        this.consumers.push(_0x55bf96);
      }
    }, {
      key: "unuse",
      value: function (_0x2cf372) {
        this.consumers = this.consumers.filter(function (_0x56887a) {
          return _0x56887a !== _0x2cf372;
        });
      }
    }]);
    return _0x1bfa4a;
  }();
  var _0x13bcbe = function () {
    function _0x53df09(_0x40d2d1) {
      _0x43fd4a(this, _0x53df09);
      this.name = _0x40d2d1;
      this.assets = [];
    }
    _0x5796f0(_0x53df09, [{
      key: "get",
      value: function (_0x2b9136, _0x3b78a2) {
        var _0x2922a1;
        if (_0x2b9136) {
          _0x2922a1 = this.assets.find(function (_0x5520e2) {
            return _0x5520e2.name === _0x2b9136 && (!_0x3b78a2 || _0x5520e2.ready === true);
          });
        } else {
          var _0x4be3b2 = this.assets.filter(function (_0x295ce4) {
            return _0x295ce4.consumers.length === 0 && (!_0x3b78a2 || _0x295ce4.ready === true);
          });
          _0x2922a1 = _0x4be3b2[~~(Math.random() * _0x4be3b2.length)];
        }
        if (_0x2922a1) {
          if (!_0x2922a1.ready) {
            this.loadAsset(_0x2922a1);
          }
          return _0x2922a1;
        } else {
          return null;
        }
      }
    }, {
      key: "free",
      value: function () {
        return this.assets.filter(function (_0x520b10) {
          return _0x520b10.consumers.length === 0;
        }).length;
      }
    }]);
    return _0x53df09;
  }();
  var _0x30913f = function () {
    _0x4961e6(_0x4c43d8, _0x13bcbe);
    var _0x185a6a = _0x718478(_0x4c43d8);
    function _0x4c43d8(_0x1badf9, _0x6bc915) {
      var _0x214948;
      _0x43fd4a(this, _0x4c43d8);
      (_0x214948 = _0x185a6a.call(this, "colors")).config = _0x1badf9;
      _0x214948.add(_0x6bc915);
      return _0x214948;
    }
    _0x5796f0(_0x4c43d8, [{
      key: "add",
      value: function (_0x26fe0a) {
        function _0xf32c82(_0x33de6a, _0xe53faf) {
          var _0x40eefa = document.createElement("canvas");
          _0x40eefa.width = 100;
          _0x40eefa.height = 100;
          var _0x3c36a2 = _0x40eefa.getContext("2d");
          _0x3c36a2.fillStyle = _0xe53faf;
          _0x3c36a2.fillRect(0, 0, 100, 100);
          _0x3c36a2.fillStyle = _0x33de6a;
          _0x3c36a2.fillRect(10, 10, 80, 80);
          return _0x40eefa;
        }
        var _0x1a54ce;
        var _0x5706c8 = this;
        var _0x430c9b = this.config;
        (_0x1a54ce = this.assets).push.apply(_0x1a54ce, _0x105c0a((_0x26fe0a || []).map(function (_0x40820e) {
          function _0x56c558(_0x49517f, _0x23d423) {
            var _0x5ccefb = _0x49517f.h;
            var _0x1b5f64 = _0x49517f.s;
            var _0x3dceef = _0x49517f.v;
            return {
              h: _0x5ccefb,
              s: _0x1b5f64,
              v: _0x3dceef *= _0x23d423
            };
          }
          function _0x2ce7a2(_0x5c1145, _0x56f6a3) {
            var _0x12990a = _0x5c1145.h;
            var _0x9196be = _0x5c1145.s;
            var _0x41becd = _0x5c1145.v;
            var _0x408f1f = 100 - _0x41becd;
            return {
              h: _0x12990a,
              s: _0x9196be,
              v: _0x41becd = Math.max(_0x41becd * _0x56f6a3, _0x41becd + _0x56f6a3 * _0x408f1f / 4)
            };
          }
          function _0x48e6cd(_0x2de087, _0x957b51) {
            var _0x41c952 = _0x2de087.h;
            var _0xc30c90 = _0x2de087.s;
            _0x2de087.v;
            return {
              h: _0x41c952,
              s: _0xc30c90,
              v: _0x957b51
            };
          }
          var _0x2aaf5b;
          var _0xce57c7;
          var _0x5bcda1;
          var _0x4c3511;
          var _0x52a786;
          var _0xe575a;
          var _0x124ecc;
          var _0x2d2266;
          var _0x11446a;
          var _0x487cad;
          var _0x5ca690;
          var _0x25825d;
          var _0x3160ac;
          var _0x13fb3a;
          _0x2aaf5b = _0x40820e;
          var _0x99263a = {
            r: parseInt(_0x2aaf5b.substring(1, 3), 16),
            g: parseInt(_0x2aaf5b.substring(3, 5), 16),
            b: parseInt(_0x2aaf5b.substring(5, 7), 16)
          };
          _0x5bcda1 = (_0xce57c7 = _0x99263a).r / 255;
          _0x4c3511 = _0xce57c7.g / 255;
          _0x52a786 = _0xce57c7.b / 255;
          _0x5ca690 = Math.max(_0x5bcda1, _0x4c3511, _0x52a786);
          _0x3160ac = function (_0x143159) {
            return (_0x5ca690 - _0x143159) / 6 / _0x25825d + 0.5;
          };
          _0x13fb3a = function (_0x2aed54) {
            return Math.round(_0x2aed54 * 100) / 100;
          };
          if ((_0x25825d = _0x5ca690 - Math.min(_0x5bcda1, _0x4c3511, _0x52a786)) == 0) {
            _0x11446a = _0x487cad = 0;
          } else {
            _0x487cad = _0x25825d / _0x5ca690;
            _0xe575a = _0x3160ac(_0x5bcda1);
            _0x124ecc = _0x3160ac(_0x4c3511);
            _0x2d2266 = _0x3160ac(_0x52a786);
            if (_0x5bcda1 === _0x5ca690) {
              _0x11446a = _0x2d2266 - _0x124ecc;
            } else if (_0x4c3511 === _0x5ca690) {
              _0x11446a = 1 / 3 + _0xe575a - _0x2d2266;
            } else if (_0x52a786 === _0x5ca690) {
              _0x11446a = 2 / 3 + _0x124ecc - _0xe575a;
            }
            if (_0x11446a < 0) {
              _0x11446a += 1;
            } else if (_0x11446a > 1) {
              --_0x11446a;
            }
          }
          var _0x51754a = {
            h: Math.round(_0x11446a * 360),
            s: _0x13fb3a(_0x487cad * 100),
            v: _0x13fb3a(_0x5ca690 * 100)
          };
          var _0x314676 = _0x56c558(_0x51754a, 0.75);
          var _0x20b115 = _0x533d56(_0x314676);
          var _0x9c90db = _0x56c558(_0x51754a, 0.5);
          var _0x134628 = _0x533d56(_0x9c90db);
          var _0x3addba = _0x2ce7a2(_0x51754a, 1.5);
          _0x533d56(_0x3addba);
          var _0x50c24c = _0x2ce7a2(_0x51754a, 2);
          var _0x8cf7be = _0x533d56(_0x50c24c);
          var _0x38bc89 = {
            main: _0x40820e,
            back: _0x20b115,
            nick: _0x134628,
            plate: _0x51754a.v > 50 ? _0x134628 : _0x8cf7be,
            particles: [_0x533d56(_0x48e6cd(_0x51754a, 100)), _0x533d56(_0x48e6cd(_0x51754a, 90)), _0x533d56(_0x48e6cd(_0x51754a, 80)), _0x533d56(_0x48e6cd(_0x51754a, 70)), _0x533d56(_0x48e6cd(_0x51754a, 60)), _0x533d56(_0x48e6cd(_0x51754a, 50)), _0x533d56(_0x48e6cd(_0x51754a, 40)), _0x533d56(_0x48e6cd(_0x51754a, 30)), _0x533d56(_0x48e6cd(_0x51754a, 20))]
          };
          var _0x5aebdc = new _0x4eea72(_0x5706c8, _0x40820e, _0x38bc89);
          _0x5aebdc.content.colors = _0x38bc89;
          if (_0x430c9b) {
            _0x5aebdc.content.display = new _0x341ce4(_0x430c9b, "", {
              layers: [{
                src: _0xf32c82(_0x38bc89.nick, _0x38bc89.nick)
              }, {
                level: 1,
                src: _0xf32c82(_0x38bc89.main, _0x38bc89.back)
              }]
            });
          }
          _0x5aebdc.ready = true;
          _0x5aebdc.botsEnable = true;
          return _0x5aebdc;
        })));
      }
    }, {
      key: "loadAsset",
      value: function (_0x90f7c9) {
        return _0x90f7c9;
      }
    }]);
    return _0x4c43d8;
  }();
  var _0x206e5a = function () {
    function _0x26947d(_0x4dfaa1, _0x3e0753) {
      _0x43fd4a(this, _0x26947d);
      this.coloredSkinAssets = new _0x30913f(_0x4dfaa1, _0x3e0753);
    }
    _0x5796f0(_0x26947d, [{
      key: "available",
      value: function () {
        return this.coloredSkinAssets.free();
      }
    }, {
      key: "has",
      value: function (_0x6d219d) {
        return this.coloredSkinAssets.get(_0x6d219d);
      }
    }, {
      key: "get",
      value: function (_0x6a983f, _0x4b7656) {
        var _0x3825f3;
        if (_0x4b7656) {
          var _0x31f587 = this.coloredSkinAssets.get(_0x4b7656);
          if (_0x31f587) {
            if (_0x31f587.consumers.length > 0) {
              var _0x1fa2d4 = _0x31f587.consumers[0];
              var _0x323664 = this.coloredSkinAssets.get();
              _0x1fa2d4.removeAsset(_0x31f587);
              _0x1fa2d4.addAsset(_0x323664);
            }
            _0x3825f3 = _0x31f587;
          }
        } else {
          _0x3825f3 = this.coloredSkinAssets.get();
        }
        var _0x305fa4 = new _0x46eadc();
        _0x305fa4.addAsset(_0x3825f3);
        _0x305fa4.user = _0x6a983f;
        return _0x305fa4;
      }
    }, {
      key: "release",
      value: function (_0x4842e3) {
        _0x4842e3.assets.forEach(function (_0x3b2eea) {
          return _0x3b2eea.unuse(_0x4842e3);
        });
      }
    }]);
    return _0x26947d;
  }();
  var _0x5ecd29 = {
    idle: {
      enter: function () {
        return {};
      },
      update: function (_0x2b7816) {
        if (_0x2b7816.in === _0x2b7816.base) {
          if (Math.random() < 0.25) {
            return "cut";
          } else {
            return "exit";
          }
        } else {
          return "back";
        }
      }
    },
    capital: {
      update: function (_0x2ccbf3, _0x17c632) {
        if (_0x2ccbf3.in !== _0x2ccbf3.base) {
          return "capture";
        }
        _0x2ccbf3.game.border.distance(_0x2ccbf3.position);
        _0x2ccbf3.target = _0x17c632.point;
      }
    },
    cut: {
      findExit: function (_0x175b84) {
        var _0xfc89ae = new _0x1b9fb2(_0x175b84.position, _0x175b84.game.border.nearPoint(_0x175b84.position));
        var _0x196f74 = _0x175b84.base.polygon.intersections(_0xfc89ae);
        _0x196f74.sort(function (_0x25c7b6, _0x35acab) {
          return _0x25c7b6.distance - _0x35acab.distance;
        });
        var _0x3b41ee = _0x196f74[0] && _0x196f74[0].segment.start;
        if (_0x3b41ee && _0x175b84.game.border.distance(_0x3b41ee) > 15) {
          return _0x3b41ee;
        }
      },
      enter: function (_0x59bb94) {
        return {
          exitPoint: this.findExit(_0x59bb94)
        };
      },
      update: function (_0x1f93ee, _0x4ac664) {
        if (_0x1f93ee.in !== _0x1f93ee.base) {
          return "capture";
        } else {
          if (_0x4ac664.exitPoint && !_0x1f93ee.base.boundaryHasPoint(_0x4ac664.exitPoint)) {
            _0x4ac664.exitPoint = this.findExit(_0x1f93ee);
          }
          if (_0x4ac664.exitPoint) {
            _0x1f93ee.target = _0x4ac664.exitPoint;
            return;
          } else {
            return "idle";
          }
        }
      }
    },
    exit: {
      enter: function (_0x236640) {
        var _0x55b191;
        var _0x10a481 = {};
        var _0x2e61d7 = Infinity;
        var _0x11ae32 = _0x236640.base.polygon.segments.length;
        var _0x5664dd = _0x236640.game.config.unitSpeed;
        for (_0x10a481.minDistance = _0x5664dd; _0x55b191 === undefined;) {
          for (var _0x5b2588 = 0; _0x5b2588 < 1; _0x5b2588++) {
            var _0x211701 = ~~(Math.random() * _0x11ae32);
            var _0x22f6eb = _0x236640.base.polygon.segments[_0x211701].start.distance(_0x236640.position);
            if (_0x22f6eb < _0x2e61d7 && _0x5664dd < _0x22f6eb) {
              _0x2e61d7 = _0x22f6eb;
              _0x55b191 = _0x211701;
            }
          }
          _0x5664dd *= 0.75;
        }
        _0x10a481.exitPoint = _0x236640.base.polygon.segments[_0x55b191].start;
        return _0x10a481;
      },
      update: function (_0x267003, _0x19b191) {
        if (_0x267003.in !== _0x267003.base) {
          _0x19b191 = {};
          return "capture";
        }
        if (_0x151979(_0x267003)) {
          return "attack";
        }
        var _0x2792b2 = _0x267003.base.polygon.segments.length;
        var _0x3bc81a = _0x19b191.minDistance;
        var _0x4014b4 = ~~(Math.random() * _0x2792b2);
        var _0x3578cd = _0x267003.base.polygon.segments[_0x4014b4].start;
        var _0x142739 = _0x3578cd.distance(_0x267003.position);
        var _0x5c1fa3 = _0x19b191.exitPoint.distance(_0x267003.position);
        if (_0x3bc81a < _0x142739 && _0x142739 < _0x5c1fa3) {
          _0x19b191.exitPoint = _0x3578cd;
        } else {
          if (!Object.values(_0x19b191.exitPoint.segments).some(function (_0x5a053a) {
            return _0x5a053a && _0x5a053a.shape === _0x267003.base.polygon;
          })) {
            _0x19b191.exitPoint = _0x3578cd;
          }
          if (_0x267003.target && !_0x267003.game.border.inside(_0x267003.target)) {
            _0x19b191.exitPoint = _0x3578cd;
          }
        }
        _0x267003.target = _0x19b191.exitPoint;
      }
    },
    capture: {
      update: function (_0x43c12f) {
        if (_0x43c12f.in === _0x43c12f.base) {
          return "idle";
        }
        if (_0x151979(_0x43c12f)) {
          return "attack";
        }
        if (_0x216c74(_0x43c12f)) {
          return "back";
        }
        if (_0x55fbaf(_0x43c12f)) {
          return "back";
        }
        var _0x5b0049 = _0x43c12f.game.config.unitSpeed;
        var _0x107071 = _0x43c12f.game.border.center;
        var _0x2db38a = _0x43c12f.position.distance(_0x107071);
        var _0x1ad507 = _0x43c12f.game.border.distance(_0x43c12f.position);
        if (_0x43c12f.baseDistance < _0x5b0049 / 4 && _0x43c12f.track.length > _0x5b0049 * 2 && _0x1ad507 > 10) {
          return "back";
        }
        if (!(_0x43c12f.position.distance2(_0x43c12f.target) < 156.25) || !(_0x1ad507 > 25)) {
          var _0x3028f4 = 0;
          if (_0x43c12f.track.simplyline.length) {
            for (var _0x2bc21e = 1, _0x55756a = _0x43c12f.track.simplyline.length; _0x2bc21e < _0x55756a; _0x2bc21e++) {
              var _0x2b6867 = _0x43c12f.track.simplyline[_0x2bc21e - 1];
              var _0x2e5477 = _0x43c12f.track.simplyline[_0x2bc21e];
              _0x3028f4 += (_0x2b6867.x + _0x2e5477.x) * (_0x2e5477.y - _0x2b6867.y);
            }
            var _0x2966fd = _0x43c12f.track.simplyline[_0x43c12f.track.simplyline.length - 1];
            var _0xcd3c9b = _0x43c12f.baseNearestPoint;
            _0x3028f4 += (_0x2966fd.x + _0xcd3c9b.x) * (_0xcd3c9b.y - _0x2966fd.y);
            _0x2966fd = _0x43c12f.baseNearestPoint;
            _0xcd3c9b = _0x43c12f.track.simplyline[0];
            _0x3028f4 += (_0x2966fd.x + _0xcd3c9b.x) * (_0xcd3c9b.y - _0x2966fd.y);
          }
          var _0x39f8b6 = Math.sign(_0x3028f4);
          _0x3028f4 = Math.abs(_0x3028f4 / 2);
          _0x43c12f.capSquare = _0x3028f4;
          var _0x6857a3;
          var _0x4e4d5e = _0x43c12f.def;
          var _0x4aee3a = _0x43c12f.greed;
          var _0x3b5b18 = _0x43c12f.safety;
          var _0x4313a9 = Math.PI * 2 * _0x43c12f.vrange * _0x4aee3a;
          var _0x4dc58f = _0x43c12f.track.length / _0x4313a9;
          var _0x316631 = Math.min(_0x43c12f.base.square, Math.PI * _0x43c12f.vrange * _0x43c12f.vrange) * _0x4aee3a;
          var _0x2c6959 = _0x43c12f.capSquare / _0x316631;
          var _0x74a20c = _0x43c12f.vrange * _0x10566a(3, 0.7, _0x3b5b18);
          try {
            _0x6857a3 = _0x43c12f.position.distance(_0x43c12f.track.polyline.start) / _0x74a20c;
          } catch (_0x4651c6) {
            console.log(_0x43c12f);
            throw _0x4651c6;
          }
          var _0x543006 = _0x43c12f.unitToTrackDistances.reduce(function (_0x5f4e96, _0x1d3594) {
            return Math.min(_0x1d3594.trackDistance, _0x5f4e96);
          }, Infinity) * 0.8 * _0x4e4d5e;
          var _0x2d0af5 = _0x43c12f.baseDistance / _0x543006;
          var _0xeb99fb = Math.max(_0x4dc58f, _0x2c6959, _0x6857a3, _0x2d0af5);
          if (_0xeb99fb > 1) {
            return "back";
          }
          var _0x9d92ad;
          var _0x160d80 = _0x43c12f.vrange * _0x4aee3a;
          _0x43c12f.distanceDanger;
          var _0x559c86 = _0x160d80;
          var _0x1c3e24 = _0x559c86 * 0.8;
          var _0x4c29c7 = _0x43c12f.target.clone().sub(_0x43c12f.position);
          if (_0x43c12f.baseDistance > _0x559c86 || _0xeb99fb > 0.75) {
            _0x43c12f.aspect = "приближение";
            _0x9d92ad = _0x43c12f.baseNearestPointNormal.clone().mulScalar(25).rotate((Math.PI / 2 + Math.PI / 4) * _0x39f8b6);
          } else if (_0x43c12f.baseDistance < _0x1c3e24) {
            _0x43c12f.aspect = "отдаление";
            var _0x4c5b94 = Math.PI / 4;
            var _0x1e085b = _0x43c12f.track.length / _0x1c3e24;
            if (_0x1e085b < 1) {
              _0x43c12f.aspect = "отстрел";
              _0x4c5b94 = _0x10566a(Math.PI / 2 * _0x4aee3a, 0, _0x1e085b);
            }
            _0x9d92ad = _0x43c12f.baseNearestPointNormal.clone().mulScalar(25).rotate((Math.PI / 2 - _0x4c5b94) * _0x39f8b6);
          } else {
            _0x43c12f.aspect = "проход";
            _0x9d92ad = _0x43c12f.baseNearestPointNormal.clone().mulScalar(25).rotate(Math.PI / 2 * _0x39f8b6);
            _0x43c12f.smoothness = 1 + (1 - Math.min(1, _0x43c12f.maxDanger)) * 3;
          }
          _0x43c12f.smoothness = 1 - Math.min(1, _0x43c12f.maxDanger) + 1;
          if (_0x1ad507 < 50 && _0x1ad507 < _0x43c12f.position.clone().add(_0x9d92ad).distance(_0x107071)) {
            return "slide";
          }
          _0x43c12f.target = _0x43c12f.position.clone().add(_0x9d92ad);
          var _0xf32dde = _0x43c12f.game.border.radiusByPoint(_0x43c12f.target);
          if (_0x43c12f.target.distance(_0x107071) > _0xf32dde + 18.75) {
            var _0x319578 = _0x43c12f.position.clone().sub(_0x107071).angle(_0x4c29c7);
            var _0x2391c3 = (_0xf32dde * _0xf32dde - 625 + _0x2db38a * _0x2db38a) / (_0x2db38a * 2);
            var _0x2cd0d1 = Math.sqrt(_0xf32dde * _0xf32dde - _0x2391c3 * _0x2391c3);
            var _0x35f8d2 = _0x43c12f.position.clone().sub(_0x107071).normalize();
            var _0x541bb0 = _0x107071.clone().add(_0x35f8d2.clone().mulScalar(_0x2391c3));
            _0x9d92ad = _0x35f8d2.clone().rotate(Math.PI / 2 * _0x319578).rotate(Math.PI / 8 * -_0x319578).mulScalar(_0x2cd0d1);
            _0x43c12f.target = _0x541bb0.clone().add(_0x9d92ad);
          } else if (_0x43c12f.target.distance(_0x107071) > _0xf32dde) {
            _0x43c12f.target.distance(_0x107071);
          }
        }
      }
    },
    slide: {
      enter: function (_0xd1f9b7) {
        var _0x106553;
        var _0x228d54;
        var _0x1967e9 = _0xd1f9b7.position;
        var _0x36622b = _0xd1f9b7.baseNearestPoint;
        var _0x401637 = _0xd1f9b7.target;
        _0x36622b.clone().sub(_0x1967e9);
        var _0x219695 = _0x401637.clone().sub(_0x1967e9);
        var _0x3565a2 = _0xd1f9b7.position.clone().sub(_0xd1f9b7.game.border.center);
        var _0x11b1f6 = _0xd1f9b7.track.polyline.segments;
        if (_0x11b1f6.length) {
          var _0x447a93 = _0x11b1f6[_0x11b1f6.length - 1];
          _0x106553 = _0x447a93.a;
          _0x228d54 = _0x447a93.b;
        } else {
          _0x106553 = _0x1967e9.y - _0x219695.y;
          _0x228d54 = _0x219695.x - _0x1967e9.x;
        }
        var _0x204da6 = _0x1967e9.y - _0x3565a2.y;
        var _0x188df4 = _0x3565a2.x - _0x1967e9.x;
        return {
          zn: Math.sign(_0x470d99(_0x106553, _0x228d54, _0x204da6, _0x188df4)) || 1,
          reversed: false
        };
      },
      update: function (_0xdb4266, _0x136c17) {
        var _0x45f76a = _0xdb4266.def;
        var _0x1cc3ba = _0xdb4266.greed;
        var _0x593249 = _0xdb4266.safety;
        if (_0xdb4266.in === _0xdb4266.base) {
          return "idle";
        }
        if (_0x151979(_0xdb4266)) {
          return "attack";
        }
        if (_0x216c74(_0xdb4266)) {
          return "slideOut";
        }
        var _0x2ec496 = _0xdb4266.unitToTrackDistances.reduce(function (_0x4a421a, _0x53386a) {
          return Math.min(_0x53386a.trackDistance, _0x4a421a);
        }, Infinity) * 0.8 * _0x45f76a;
        var _0x5d059c = _0xdb4266.baseDistance / _0x2ec496;
        var _0x491484 = Math.PI * _0xdb4266.vrange * _0x1cc3ba;
        var _0x4d2e85 = _0xdb4266.track.length / _0x491484;
        var _0x70b422 = _0xdb4266.vrange * _0x10566a(3, 0.7, _0x593249);
        var _0x23fda5 = _0xdb4266.position.distance(_0xdb4266.track.polyline.start) / _0x70b422;
        if (Math.max(_0x4d2e85, _0x5d059c, _0x23fda5) > 1) {
          return "slideOut";
        }
        var _0x23d130 = _0xdb4266.position;
        _0xdb4266.baseNearestPoint;
        _0xdb4266.target;
        var _0x558ca9 = _0x136c17.zn;
        var _0x270ac5 = _0xdb4266.game.border.distance(_0x23d130);
        var _0x3e425f = _0x10566a(Math.PI / 3, 0, _0x270ac5 / 50);
        var _0x41e113 = _0x23d130.clone().sub(_0xdb4266.game.border.center).normalize().mulScalar(25).rotate(_0x3e425f * _0x558ca9);
        _0xdb4266.target = _0xdb4266.position.clone().add(_0x41e113);
      }
    },
    slideOut: {
      update: function (_0x1dfabe) {
        if (_0x1dfabe.in === _0x1dfabe.base) {
          return "idle";
        }
        if (_0x55fbaf(_0x1dfabe)) {
          return "back";
        }
        if (_0x1dfabe.game.border.distance(_0x1dfabe.position) > 25) {
          return "back";
        }
        var _0x3188a9 = _0x1dfabe.position.clone().sub(_0x1dfabe.game.border.center).normalize().mulScalar(-25);
        _0x1dfabe.target = _0x1dfabe.position.clone().add(_0x3188a9);
      }
    },
    back_old: {
      enter: function (_0x2aca07) {
        _0x2aca07.target = _0x2aca07.baseNearestPoint;
      },
      update: function (_0x543b66) {
        if (_0x543b66.in === _0x543b66.base) {
          return "idle";
        }
        _0x543b66.smoothness = _0x10566a(1, Math.max(1, Math.max(1, Math.min(_0x543b66.def, _0x543b66.greed) * 4)), Math.max(1, _0x543b66.maxDanger));
        if (_0x543b66.game.border.distance(_0x543b66.position) < 20) {
          _0x543b66.smoothness = 1;
        }
        _0x543b66.target = _0x543b66.baseNearestPoint;
      }
    },
    back: {
      enter: function (_0x34a7c2) {
        _0x34a7c2.target = _0x34a7c2.baseNearestPoint;
        return {
          time: 0
        };
      },
      update: function (_0x5ba79d, _0x2076ac, _0x27b473) {
        if (_0x5ba79d.in === _0x5ba79d.base) {
          return "idle";
        }
        _0x5ba79d.smoothness = 1;
        if (_0x5ba79d.game.border.distance(_0x5ba79d.position) < 20) {
          _0x5ba79d.smoothness = 1;
        }
        var _0x1c940f = _0x55fbaf(_0x5ba79d);
        if (_0x1c940f) {
          _0x2076ac.safe = true;
          var _0xe7aaa2 = _0x1c940f.distance2(_0x5ba79d.position) * 0.9;
          var _0x34d68d = _0x5ba79d.track.simplyline.reduce(function (_0x490a54, _0x2b9847) {
            var _0x210a83 = _0x2b9847.distance2(_0x5ba79d.position);
            if (_0x210a83 < _0x490a54.d && _0xe7aaa2 < _0x210a83) {
              _0x490a54.d = _0x210a83;
              _0x490a54.index = _0x490a54.i;
            }
            _0x490a54.i++;
            return _0x490a54;
          }, {
            i: 0,
            index: 0,
            d: Infinity
          }).index;
          var _0x55fc84 = _0x34d68d - 1;
          var _0x59b917 = _0x34d68d + 1;
          if (_0x34d68d === 0) {
            _0x55fc84 = _0x34d68d;
          }
          if (_0x34d68d === _0x5ba79d.track.simplyline.length - 1) {
            _0x59b917 = _0x34d68d;
          }
          var _0x179abf = _0x5ba79d.track.simplyline[_0x55fc84].clone().sub(_0x5ba79d.track.simplyline[_0x59b917]).normalize().mulScalar(5);
          _0x5ba79d.target = _0x179abf.add(_0x5ba79d.position);
        } else if (_0x2076ac.safe) {
          _0x2076ac.time += _0x27b473;
          if (_0x2076ac.time > 200) {
            _0x2076ac.time = 0;
            _0x2076ac.safe = false;
          }
        } else {
          _0x5ba79d.target = _0x5ba79d.baseNearestPoint;
        }
      }
    },
    attack: {
      enter: function () {
        return {};
      },
      update: function (_0x30c349) {
        var _0x24913b = _0x30c349.game.player;
        if (!_0x24913b || _0x24913b.death) {
          return "idle";
        }
        var _0x4185bf = _0x24913b.track.simplyline;
        if (!_0x4185bf.length) {
          return "idle";
        }
        if (_0x24913b.track.length < _0x30c349.game.config.botAttackTrackLength && _0x216c74(_0x30c349, true)) {
          return "idle";
        }
        var _0x52fe22 = 0;
        var _0x4f553a = Infinity;
        _0x4185bf.forEach(function (_0x4b034b, _0x4b8129) {
          var _0xb98083 = _0x30c349.position.distance2(_0x4b034b);
          if (_0xb98083 < _0x4f553a) {
            _0x4f553a = _0xb98083;
            _0x52fe22 = _0x4b8129;
          }
        });
        _0x30c349.target = _0x4185bf[_0x52fe22];
      }
    }
  };
  var _0x2e4777 = _0x198d1a(_0x198d1a({}, {
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
    teamsCount: 5,
    teamSize: 6
  });
  var _0x5085c1 = fetch("assets/languages.json?v2").then(function (_0x1eb346) {
    return _0x1eb346.json();
  });
  Promise.all([_0x5085c1]).then(function (_0x168e53) {
    var _0x28657b;
    var _0x1da47f;
    var _0x27c00f = _0x3ecf93(_0x168e53, 1)[0];
    _0x1da47f = (_0x28657b = _0x27c00f).en;
    Object.entries(_0x28657b).forEach(function (_0x90335b) {
      var _0x5454bb = _0x3ecf93(_0x90335b, 2);
      var _0x4e851c = _0x5454bb[0];
      var _0x24f0b2 = _0x5454bb[1];
      _0x17adfe.push({
        name: _0x4e851c,
        lng: _0x198d1a(_0x198d1a({}, _0x1da47f), _0x24f0b2)
      });
    });
    var _0x4b6cc1;
    var _0x20d5e6;
    var _0x214a26;
    var _0x511d1f;
    var _0x2cb891;
    var _0x43a29e;
    var _0x30d8d8 = new _0x39e656([]);
    var _0x8c6a62 = _0x5c97cd(_0x2e4777, _0x5ecd29, _0x8e5689(), function (_0x558040) {
      return new _0x206e5a(_0x558040, _0x307b0f);
    }, new _0x13ba7e(_0x3c5831), _0x99bd68, _0x30d8d8, function (_0x2ba0ea) {
      var _0x15d821 = _0x19350e.get("player_id");
      if (_0x15d821 && _0x2ba0ea.kills) {
        var _0x566016 = {
          userId: _0x15d821,
          gameCode: "PAPERTEAMS",
          userName: _0x2ba0ea.name,
          results: [{
            leaderboardType: "KILLS",
            leaderboardValue: `${_0x2ba0ea.kills}`
          }]
        };
        fetch("https://leaderboard.paper-io.com/save", {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify(_0x566016)
        });
      }
    }, _0x5b6e56, _0x3e52ba);
    window.paperio2api = _0x8c6a62;
    _0x4b6cc1 = _0xf89304(_0x51cd56, {
      config: _0x2e4777,
      api: _0x8c6a62,
      storage: _0x19350e,
      mode: "teams"
    });
    _0x20d5e6 = document.getElementById("game");
    if (_0x167353.__) {
      _0x167353.__(_0x4b6cc1, _0x20d5e6);
    }
    _0x2cb891 = (_0x511d1f = _0x214a26 === _0x3f1f8e) ? null : _0x214a26 && _0x214a26.__k || _0x20d5e6.__k;
    _0x4b6cc1 = _0xf89304(_0x1c0527, null, [_0x4b6cc1]);
    _0x43a29e = [];
    _0x165e36(_0x20d5e6, (!_0x511d1f && _0x214a26 || _0x20d5e6).__k = _0x4b6cc1, _0x2cb891 || _0x4ddd4c, _0x4ddd4c, _0x20d5e6.ownerSVGElement !== undefined, _0x214a26 && !_0x511d1f ? [_0x214a26] : !_0x2cb891 && _0x20d5e6.childNodes.length ? _0x141b01.slice.call(_0x20d5e6.childNodes) : null, _0x43a29e, _0x214a26 || _0x4ddd4c, _0x511d1f);
    _0x1d9516(_0x43a29e, _0x4b6cc1);
  });
})();