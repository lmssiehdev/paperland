(function () {
  'use strict';

  function _typeof(Symbol2) {
    return (_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x2bb456) {
      return typeof _0x2bb456;
    } : function (_0xd3e289) {
      if (_0xd3e289 && typeof Symbol == "function" && _0xd3e289.constructor === Symbol && _0xd3e289 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0xd3e289;
      }
    })(Symbol2);
  }
  function _classCallCheck(_0x69622f, SkinAvatar) {
    if (!(_0x69622f instanceof SkinAvatar)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(prototype, _0x2e6c65) {
    for (var i = 0; i < _0x2e6c65.length; i++) {
      var _0x6056e2 = _0x2e6c65[i];
      _0x6056e2.enumerable = _0x6056e2.enumerable || false;
      _0x6056e2.configurable = true;
      if ("value" in _0x6056e2) {
        _0x6056e2.writable = true;
      }
      Object.defineProperty(prototype, _0x6056e2.key, _0x6056e2);
    }
  }
  function _createClass(prototype, _0x15ef68, _0x156713) {
    if (_0x15ef68) {
      _defineProperties(prototype.prototype, _0x15ef68);
    }
    if (_0x156713) {
      _defineProperties(prototype, _0x156713);
    }
    return prototype;
  }
  function _defineProperty(ScoreScheme, item, _0x44611d) {
    if (item in ScoreScheme) {
      Object.defineProperty(ScoreScheme, item, {
        value: _0x44611d,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      ScoreScheme[item] = _0x44611d;
    }
    return ScoreScheme;
  }
  function _ownKeys(_0x3a1f46, _0x34b38c) {
    var result = Object.keys(_0x3a1f46);
    if (Object.getOwnPropertySymbols) {
      var ownPropertySymbols = Object.getOwnPropertySymbols(_0x3a1f46);
      if (_0x34b38c) {
        ownPropertySymbols = ownPropertySymbols.filter(function (ownPropertySymbol) {
          return Object.getOwnPropertyDescriptor(_0x3a1f46, ownPropertySymbol).enumerable;
        });
      }
      result.push.apply(result, ownPropertySymbols);
    }
    return result;
  }
  function _objectSpread2(ScoreScheme) {
    for (var i = 1; i < arguments.length; i++) {
      var _0x5558d5 = arguments[i] ?? {};
      if (i % 2) {
        _ownKeys(Object(_0x5558d5), true).forEach(function (item) {
          _defineProperty(ScoreScheme, item, _0x5558d5[item]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(ScoreScheme, Object.getOwnPropertyDescriptors(_0x5558d5));
      } else {
        _ownKeys(Object(_0x5558d5)).forEach(function (item) {
          Object.defineProperty(ScoreScheme, item, Object.getOwnPropertyDescriptor(_0x5558d5, item));
        });
      }
    }
    return ScoreScheme;
  }
  function _inherits(_0x5f1408, _0x28df61) {
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
      _setPrototypeOf(_0x5f1408, _0x28df61);
    }
  }
  function _getPrototypeOf(_0x59f4ef) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x4d162b) {
      return _0x4d162b.__proto__ || Object.getPrototypeOf(_0x4d162b);
    })(_0x59f4ef);
  }
  function _setPrototypeOf(_0x223abe, _0x2402f8) {
    return (_setPrototypeOf = Object.setPrototypeOf || function (_0x58e3d3, _0x276c30) {
      _0x58e3d3.__proto__ = _0x276c30;
      return _0x58e3d3;
    })(_0x223abe, _0x2402f8);
  }
  function _assertThisInitialized(_0x3fb719) {
    if (_0x3fb719 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return _0x3fb719;
  }
  function _createSuper(_0x1a4c38) {
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
      var _0xb8bb16 = _getPrototypeOf(_0x1a4c38);
      if (_0x7d425b) {
        var constructor = _getPrototypeOf(this).constructor;
        _0x3ae3ef = Reflect.construct(_0xb8bb16, arguments, constructor);
      } else {
        _0x3ae3ef = _0xb8bb16.apply(this, arguments);
      }
      _0x16158d = this;
      if (!(_0x2800c5 = _0x3ae3ef) || typeof _0x2800c5 != "object" && typeof _0x2800c5 != "function") {
        return _assertThisInitialized(_0x16158d);
      } else {
        return _0x2800c5;
      }
    };
  }
  function _superGet(_0x59db55, _0x55b1f3, _0x54eac0) {
    return (_superGet = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function (_0x52afee, _0x1c2638, _0x575876) {
      var _0x13dfe1 = function (_0x2b98d3, _0x38c12b) {
        while (!Object.prototype.hasOwnProperty.call(_0x2b98d3, _0x38c12b) && (_0x2b98d3 = _getPrototypeOf(_0x2b98d3)) !== null);
        return _0x2b98d3;
      }(_0x52afee, _0x1c2638);
      if (_0x13dfe1) {
        var ownPropertyDescriptor = Object.getOwnPropertyDescriptor(_0x13dfe1, _0x1c2638);
        if (ownPropertyDescriptor.get) {
          return ownPropertyDescriptor.get.call(_0x575876);
        } else {
          return ownPropertyDescriptor.value;
        }
      }
    })(_0x59db55, _0x55b1f3, _0x54eac0 || _0x59db55);
  }
  function _slicedToArray(_0x260001, _0x2251c9) {
    return function (_0x332fcc) {
      if (Array.isArray(_0x332fcc)) {
        return _0x332fcc;
      }
    }(_0x260001) || function (_0x5b8f9a, _0x40140a) {
      if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(_0x5b8f9a))) {
        return;
      }
      var result = [];
      var _0x464885 = true;
      var _0x140099 = false;
      var _0x3107be = undefined;
      try {
        for (var _0x484231, _0x243c01 = _0x5b8f9a[Symbol.iterator](); !(_0x464885 = (_0x484231 = _0x243c01.next()).done) && (result.push(_0x484231.value), !_0x40140a || result.length !== _0x40140a); _0x464885 = true);
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
      return result;
    }(_0x260001, _0x2251c9) || _unsupportedIterableToArray(_0x260001, _0x2251c9) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _toConsumableArray(_0x40dab4) {
    return function (_0x516378) {
      if (Array.isArray(_0x516378)) {
        return _arrayLikeToArray(_0x516378);
      }
    }(_0x40dab4) || function (_0x1b13fc) {
      if (typeof Symbol != "undefined" && Symbol.iterator in Object(_0x1b13fc)) {
        return Array.from(_0x1b13fc);
      }
    }(_0x40dab4) || _unsupportedIterableToArray(_0x40dab4) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _unsupportedIterableToArray(_0xf74304, _0x26831c) {
    if (_0xf74304) {
      if (typeof _0xf74304 == "string") {
        return _arrayLikeToArray(_0xf74304, _0x26831c);
      }
      var _0x1f00b1 = Object.prototype.toString.call(_0xf74304).slice(8, -1);
      if (_0x1f00b1 === "Object" && _0xf74304.constructor) {
        _0x1f00b1 = _0xf74304.constructor.name;
      }
      if (_0x1f00b1 === "Map" || _0x1f00b1 === "Set") {
        return Array.from(_0xf74304);
      } else if (_0x1f00b1 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x1f00b1)) {
        return _arrayLikeToArray(_0xf74304, _0x26831c);
      } else {
        return undefined;
      }
    }
  }
  function _arrayLikeToArray(_0x4a5f16, _0x3de6b7) {
    if (_0x3de6b7 == null || _0x3de6b7 > _0x4a5f16.length) {
      _0x3de6b7 = _0x4a5f16.length;
    }
    for (var i = 0, array = new Array(_0x3de6b7); i < _0x3de6b7; i++) {
      array[i] = _0x4a5f16[i];
    }
    return array;
  }
  var options;
  var rerenderQueue;
  var defer;
  var prevDebounce;
  var EMPTY_OBJ_ALIAS;
  var contextIdCounter;
  var EMPTY_OBJ = {};
  var EMPTY_ARR = [];
  var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function assign(_0x354175, _0x43f1c3) {
    for (var key in _0x43f1c3) {
      _0x354175[key] = _0x43f1c3[key];
    }
    return _0x354175;
  }
  function removeNode(_0x2f71eb) {
    var parentNode = _0x2f71eb.parentNode;
    if (parentNode) {
      parentNode.removeChild(_0x2f71eb);
    }
  }
  function createElement(_0x319dd8, _0x44f40b, _0x377821) {
    var key;
    var _0x59012b;
    var _0x531e3e;
    var args = arguments;
    var props = {};
    for (_0x531e3e in _0x44f40b) {
      if (_0x531e3e == "key") {
        key = _0x44f40b[_0x531e3e];
      } else if (_0x531e3e == "ref") {
        _0x59012b = _0x44f40b[_0x531e3e];
      } else {
        props[_0x531e3e] = _0x44f40b[_0x531e3e];
      }
    }
    if (arguments.length > 3) {
      _0x377821 = [_0x377821];
      _0x531e3e = 3;
      for (; _0x531e3e < arguments.length; _0x531e3e++) {
        _0x377821.push(args[_0x531e3e]);
      }
    }
    if (_0x377821 != null) {
      props.children = _0x377821;
    }
    if (typeof _0x319dd8 == "function" && _0x319dd8.defaultProps != null) {
      for (_0x531e3e in _0x319dd8.defaultProps) {
        if (props[_0x531e3e] === undefined) {
          props[_0x531e3e] = _0x319dd8.defaultProps[_0x531e3e];
        }
      }
    }
    return createVNode(_0x319dd8, props, key, _0x59012b, null);
  }
  function createVNode(_0x1bd14a, props, key, _0x349830, __v) {
    var result = {
      type: _0x1bd14a,
      props: props,
      key: key,
      ref: _0x349830,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: undefined,
      __c: null,
      __h: null,
      constructor: undefined,
      __v: __v
    };
    if (__v == null) {
      result.__v = result;
    }
    if (options.vnode != null) {
      options.vnode(result);
    }
    return result;
  }
  function Fragment(_0x4ccf6e) {
    return _0x4ccf6e.children;
  }
  function Component(props, context) {
    this.props = props;
    this.context = context;
  }
  function getDomSibling(__, _0x2a9214) {
    if (_0x2a9214 == null) {
      if (__.__) {
        return getDomSibling(__.__, __.__.__k.indexOf(__) + 1);
      } else {
        return null;
      }
    }
    var _0x36783e;
    for (; _0x2a9214 < __.__k.length; _0x2a9214++) {
      if ((_0x36783e = __.__k[_0x2a9214]) != null && _0x36783e.__e != null) {
        return _0x36783e.__e;
      }
    }
    if (typeof __.type == "function") {
      return getDomSibling(__);
    } else {
      return null;
    }
  }
  function updateParentDomPointers(_0x5d1804) {
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
      return updateParentDomPointers(_0x5d1804);
    }
  }
  function enqueueRender(_0x317915) {
    if (!_0x317915.__d && (_0x317915.__d = true) && rerenderQueue.push(_0x317915) && !processRenderQueue.__r++ || prevDebounce !== options.debounceRendering) {
      ((prevDebounce = options.debounceRendering) || defer)(processRenderQueue);
    }
  }
  function processRenderQueue() {
    var _0x5a881f;
    while (processRenderQueue.__r = rerenderQueue.length) {
      _0x5a881f = rerenderQueue.sort(function (a, b) {
        return a.__v.__b - b.__v.__b;
      });
      rerenderQueue = [];
      _0x5a881f.some(function (item) {
        var _0x2986f3;
        var _0x25941d;
        var _0x32e0f2;
        var _0x4ebaa5;
        var __;
        var _0x8639ed;
        var _0x2eb0c1;
        if (item.__d) {
          _0x8639ed = (__ = (_0x2986f3 = item).__v).__e;
          if (_0x2eb0c1 = _0x2986f3.__P) {
            _0x25941d = [];
            _0x4ebaa5 = diff(_0x2eb0c1, __, (_0x32e0f2 = assign({}, __)).__v = _0x32e0f2, _0x2986f3.__n, _0x2eb0c1.ownerSVGElement !== undefined, __.__h != null ? [_0x8639ed] : null, _0x25941d, _0x8639ed == null ? getDomSibling(__) : _0x8639ed, __.__h);
            commitRoot(_0x25941d, __);
            if (_0x4ebaa5 != _0x8639ed) {
              updateParentDomPointers(__);
            }
          }
        }
      });
    }
  }
  function diffChildren(_0x465f8a, _0x4e83ee, vnode, __, __n, _0x55c8da, _0x309dfe, _0x46ca8b, _0x23f21e, __h) {
    var _0x41df1b;
    var _0x1ea583;
    var __2;
    var children;
    var __e;
    var _0x430360;
    var _0x1f7fd5;
    var __k = __ && __.__k || EMPTY_ARR;
    var count = __k.length;
    if (_0x23f21e == EMPTY_OBJ) {
      _0x23f21e = _0x309dfe != null ? _0x309dfe[0] : count ? getDomSibling(__, 0) : null;
    }
    vnode.__k = [];
    _0x41df1b = 0;
    for (; _0x41df1b < _0x4e83ee.length; _0x41df1b++) {
      if ((children = vnode.__k[_0x41df1b] = (children = _0x4e83ee[_0x41df1b]) == null || typeof children == "boolean" ? null : typeof children == "string" || typeof children == "number" ? createVNode(null, children, null, null, children) : Array.isArray(children) ? createVNode(Fragment, {
        children: children
      }, null, null, null) : children.__e != null || children.__c != null ? createVNode(children.type, children.props, children.key, null, children.__v) : children) != null) {
        children.__ = vnode;
        children.__b = vnode.__b + 1;
        if ((__2 = __k[_0x41df1b]) === null || __2 && children.key == __2.key && children.type === __2.type) {
          __k[_0x41df1b] = undefined;
        } else {
          for (_0x1ea583 = 0; _0x1ea583 < count; _0x1ea583++) {
            if ((__2 = __k[_0x1ea583]) && children.key == __2.key && children.type === __2.type) {
              __k[_0x1ea583] = undefined;
              break;
            }
            __2 = null;
          }
        }
        __e = diff(_0x465f8a, children, __2 = __2 || EMPTY_OBJ, __n, _0x55c8da, _0x309dfe, _0x46ca8b, _0x23f21e, __h);
        if ((_0x1ea583 = children.ref) && __2.ref != _0x1ea583) {
          _0x1f7fd5 = _0x1f7fd5 || [];
          if (__2.ref) {
            _0x1f7fd5.push(__2.ref, null, children);
          }
          _0x1f7fd5.push(_0x1ea583, children.__c || __e, children);
        }
        if (__e != null) {
          if (_0x430360 == null) {
            _0x430360 = __e;
          }
          _0x23f21e = placeChild(_0x465f8a, children, __2, __k, _0x309dfe, __e, _0x23f21e);
          if (__h || vnode.type != "option") {
            if (typeof vnode.type == "function") {
              vnode.__d = _0x23f21e;
            }
          } else {
            _0x465f8a.value = "";
          }
        } else if (_0x23f21e && __2.__e == _0x23f21e && _0x23f21e.parentNode != _0x465f8a) {
          _0x23f21e = getDomSibling(__2);
        }
      }
    }
    vnode.__e = _0x430360;
    if (_0x309dfe != null && typeof vnode.type != "function") {
      for (_0x41df1b = _0x309dfe.length; _0x41df1b--;) {
        if (_0x309dfe[_0x41df1b] != null) {
          removeNode(_0x309dfe[_0x41df1b]);
        }
      }
    }
    for (_0x41df1b = count; _0x41df1b--;) {
      if (__k[_0x41df1b] != null) {
        unmount(__k[_0x41df1b], __k[_0x41df1b]);
      }
    }
    if (_0x1f7fd5) {
      for (_0x41df1b = 0; _0x41df1b < _0x1f7fd5.length; _0x41df1b++) {
        applyRef(_0x1f7fd5[_0x41df1b], _0x1f7fd5[++_0x41df1b], _0x1f7fd5[++_0x41df1b]);
      }
    }
  }
  function placeChild(_0x3af9a7, children, children2, __k, _0x20cd7f, __e, _0x3fbaba) {
    var _0x459838;
    var _0x2b2baa;
    var _0x4f7e90;
    if (children.__d !== undefined) {
      _0x459838 = children.__d;
      children.__d = undefined;
    } else if (_0x20cd7f == children2 || __e != _0x3fbaba || __e.parentNode == null) {
      _0x5d5092: if (_0x3fbaba == null || _0x3fbaba.parentNode !== _0x3af9a7) {
        _0x3af9a7.appendChild(__e);
        _0x459838 = null;
      } else {
        _0x2b2baa = _0x3fbaba;
        _0x4f7e90 = 0;
        for (; (_0x2b2baa = _0x2b2baa.nextSibling) && _0x4f7e90 < __k.length; _0x4f7e90 += 2) {
          if (_0x2b2baa == __e) {
            break _0x5d5092;
          }
        }
        _0x3af9a7.insertBefore(__e, _0x3fbaba);
        _0x459838 = _0x3fbaba;
      }
    }
    if (_0x459838 !== undefined) {
      return _0x459838;
    } else {
      return __e.nextSibling;
    }
  }
  function setStyle(style, _0x2d61f9, _0x39d443) {
    if (_0x2d61f9[0] === "-") {
      style.setProperty(_0x2d61f9, _0x39d443);
    } else {
      style[_0x2d61f9] = _0x39d443 == null ? "" : typeof _0x39d443 != "number" || IS_NON_DIMENSIONAL.test(_0x2d61f9) ? _0x39d443 : _0x39d443 + "px";
    }
  }
  function setProperty(_0x333369, _0x47cd33, _0x8d73b4, _0x32b095, _0x399451) {
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
              setStyle(_0x333369.style, _0x47cd33, "");
            }
          }
        }
        if (_0x8d73b4) {
          for (_0x47cd33 in _0x8d73b4) {
            if (!_0x32b095 || _0x8d73b4[_0x47cd33] !== _0x32b095[_0x47cd33]) {
              setStyle(_0x333369.style, _0x47cd33, _0x8d73b4[_0x47cd33]);
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
      _0x289cc7 = _0x3801f9 ? eventProxyCapture : eventProxy;
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
  function eventProxy(_0x4f2ecc) {
    this.l[_0x4f2ecc.type + false](options.event ? options.event(_0x4f2ecc) : _0x4f2ecc);
  }
  function eventProxyCapture(_0x49975c) {
    this.l[_0x49975c.type + true](options.event ? options.event(_0x49975c) : _0x49975c);
  }
  function diff(_0x2152d3, vnode, __, __n, _0x3b4001, _0x343c71, _0x4ec875, _0x1b7dfb, __h) {
    var vnode2;
    var point;
    var _0x5ac264;
    var _0x2f77b6;
    var _0x4a5e70;
    var _0x959026;
    var _0x57dcee;
    var _0x19d639;
    var _0x57f620;
    var _0xbfd459;
    var _0x3f9b4b;
    var type = vnode.type;
    if (vnode.constructor !== undefined) {
      return null;
    }
    if (__.__h != null) {
      __h = __.__h;
      _0x1b7dfb = vnode.__e = __.__e;
      vnode.__h = null;
      _0x343c71 = [_0x1b7dfb];
    }
    if (vnode2 = options.__b) {
      vnode2(vnode);
    }
    try {
      _0x2571cd: if (typeof type == "function") {
        _0x19d639 = vnode.props;
        _0x57f620 = (vnode2 = type.contextType) && __n[vnode2.__c];
        _0xbfd459 = vnode2 ? _0x57f620 ? _0x57f620.props.value : vnode2.__ : __n;
        if (__.__c) {
          _0x57dcee = (point = vnode.__c = __.__c).__ = point.__E;
        } else {
          if ("prototype" in type && type.prototype.render) {
            vnode.__c = point = new type(_0x19d639, _0xbfd459);
          } else {
            vnode.__c = point = new Component(_0x19d639, _0xbfd459);
            point.constructor = type;
            point.render = doRender;
          }
          if (_0x57f620) {
            _0x57f620.sub(point);
          }
          point.props = _0x19d639;
          point.state ||= {};
          point.context = _0xbfd459;
          point.__n = __n;
          _0x5ac264 = point.__d = true;
          point.__h = [];
        }
        if (point.__s == null) {
          point.__s = point.state;
        }
        if (type.getDerivedStateFromProps != null) {
          if (point.__s == point.state) {
            point.__s = assign({}, point.__s);
          }
          assign(point.__s, type.getDerivedStateFromProps(_0x19d639, point.__s));
        }
        _0x2f77b6 = point.props;
        _0x4a5e70 = point.state;
        if (_0x5ac264) {
          if (type.getDerivedStateFromProps == null && point.componentWillMount != null) {
            point.componentWillMount();
          }
          if (point.componentDidMount != null) {
            point.__h.push(point.componentDidMount);
          }
        } else {
          if (type.getDerivedStateFromProps == null && _0x19d639 !== _0x2f77b6 && point.componentWillReceiveProps != null) {
            point.componentWillReceiveProps(_0x19d639, _0xbfd459);
          }
          if (!point.__e && point.shouldComponentUpdate != null && point.shouldComponentUpdate(_0x19d639, point.__s, _0xbfd459) === false || vnode.__v === __.__v) {
            point.props = _0x19d639;
            point.state = point.__s;
            if (vnode.__v !== __.__v) {
              point.__d = false;
            }
            (point.__v = vnode).__e = __.__e;
            vnode.__k = __.__k;
            if (point.__h.length) {
              _0x4ec875.push(point);
            }
            (function _0x169a4e(_0x50a67f, _0x168091, _0x2d8898) {
              var _0x326b28;
              var children;
              for (_0x326b28 = 0; _0x326b28 < _0x50a67f.__k.length; _0x326b28++) {
                if (children = _0x50a67f.__k[_0x326b28]) {
                  children.__ = _0x50a67f;
                  if (children.__e) {
                    if (typeof children.type == "function" && children.__k.length > 1) {
                      _0x169a4e(children, _0x168091, _0x2d8898);
                    }
                    _0x168091 = placeChild(_0x2d8898, children, children, _0x50a67f.__k, null, children.__e, _0x168091);
                    if (typeof _0x50a67f.type == "function") {
                      _0x50a67f.__d = _0x168091;
                    }
                  }
                }
              }
            })(vnode, _0x1b7dfb, _0x2152d3);
            break _0x2571cd;
          }
          if (point.componentWillUpdate != null) {
            point.componentWillUpdate(_0x19d639, point.__s, _0xbfd459);
          }
          if (point.componentDidUpdate != null) {
            point.__h.push(function () {
              point.componentDidUpdate(_0x2f77b6, _0x4a5e70, _0x959026);
            });
          }
        }
        point.context = _0xbfd459;
        point.props = _0x19d639;
        point.state = point.__s;
        if (vnode2 = options.__r) {
          vnode2(vnode);
        }
        point.__d = false;
        point.__v = vnode;
        point.__P = _0x2152d3;
        vnode2 = point.render(point.props, point.state, point.context);
        point.state = point.__s;
        if (point.getChildContext != null) {
          __n = assign(assign({}, __n), point.getChildContext());
        }
        if (!_0x5ac264 && point.getSnapshotBeforeUpdate != null) {
          _0x959026 = point.getSnapshotBeforeUpdate(_0x2f77b6, _0x4a5e70);
        }
        _0x3f9b4b = vnode2 != null && vnode2.type == Fragment && vnode2.key == null ? vnode2.props.children : vnode2;
        diffChildren(_0x2152d3, Array.isArray(_0x3f9b4b) ? _0x3f9b4b : [_0x3f9b4b], vnode, __, __n, _0x3b4001, _0x343c71, _0x4ec875, _0x1b7dfb, __h);
        point.base = vnode.__e;
        vnode.__h = null;
        if (point.__h.length) {
          _0x4ec875.push(point);
        }
        if (_0x57dcee) {
          point.__E = point.__ = null;
        }
        point.__e = false;
      } else if (_0x343c71 == null && vnode.__v === __.__v) {
        vnode.__k = __.__k;
        vnode.__e = __.__e;
      } else {
        vnode.__e = function (_0x50198f, vnode, __, __n, _0x47c24e, _0x5a976c, _0xf47396, __h) {
          var _0x4a96c2;
          var _0x3536fd;
          var _0x333af8;
          var _0x3ece71;
          var _0x1f7b9c;
          var props = __.props;
          var props2 = vnode.props;
          _0x47c24e = vnode.type === "svg" || _0x47c24e;
          if (_0x5a976c != null) {
            for (_0x4a96c2 = 0; _0x4a96c2 < _0x5a976c.length; _0x4a96c2++) {
              if ((_0x3536fd = _0x5a976c[_0x4a96c2]) != null && ((vnode.type === null ? _0x3536fd.nodeType === 3 : _0x3536fd.localName === vnode.type) || _0x50198f == _0x3536fd)) {
                _0x50198f = _0x3536fd;
                _0x5a976c[_0x4a96c2] = null;
                break;
              }
            }
          }
          if (_0x50198f == null) {
            if (vnode.type === null) {
              return document.createTextNode(props2);
            }
            _0x50198f = _0x47c24e ? document.createElementNS("http://www.w3.org/2000/svg", vnode.type) : document.createElement(vnode.type, props2.is && {
              is: props2.is
            });
            _0x5a976c = null;
            __h = false;
          }
          if (vnode.type === null) {
            if (props !== props2 && (!__h || _0x50198f.data !== props2)) {
              _0x50198f.data = props2;
            }
          } else {
            if (_0x5a976c != null) {
              _0x5a976c = EMPTY_ARR.slice.call(_0x50198f.childNodes);
            }
            _0x333af8 = (props = __.props || EMPTY_OBJ).dangerouslySetInnerHTML;
            _0x3ece71 = props2.dangerouslySetInnerHTML;
            if (!__h) {
              if (_0x5a976c != null) {
                props = {};
                _0x1f7b9c = 0;
                for (; _0x1f7b9c < _0x50198f.attributes.length; _0x1f7b9c++) {
                  props[_0x50198f.attributes[_0x1f7b9c].name] = _0x50198f.attributes[_0x1f7b9c].value;
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
                  setProperty(_0x5ed53f, _0x18b9fa, null, _0x2f5048[_0x18b9fa], _0x15049a);
                }
              }
              for (_0x18b9fa in _0x450f20) {
                if ((!_0x5c496d || typeof _0x450f20[_0x18b9fa] == "function") && _0x18b9fa !== "children" && _0x18b9fa !== "key" && _0x18b9fa !== "value" && _0x18b9fa !== "checked" && _0x2f5048[_0x18b9fa] !== _0x450f20[_0x18b9fa]) {
                  setProperty(_0x5ed53f, _0x18b9fa, _0x450f20[_0x18b9fa], _0x2f5048[_0x18b9fa], _0x15049a);
                }
              }
            })(_0x50198f, props2, props, _0x47c24e, __h);
            if (_0x3ece71) {
              vnode.__k = [];
            } else {
              _0x4a96c2 = vnode.props.children;
              diffChildren(_0x50198f, Array.isArray(_0x4a96c2) ? _0x4a96c2 : [_0x4a96c2], vnode, __, __n, vnode.type !== "foreignObject" && _0x47c24e, _0x5a976c, _0xf47396, EMPTY_OBJ, __h);
            }
            if (!__h) {
              if ("value" in props2 && (_0x4a96c2 = props2.value) !== undefined && (_0x4a96c2 !== _0x50198f.value || vnode.type === "progress" && !_0x4a96c2)) {
                setProperty(_0x50198f, "value", _0x4a96c2, props.value, false);
              }
              if ("checked" in props2 && (_0x4a96c2 = props2.checked) !== undefined && _0x4a96c2 !== _0x50198f.checked) {
                setProperty(_0x50198f, "checked", _0x4a96c2, props.checked, false);
              }
            }
          }
          return _0x50198f;
        }(__.__e, vnode, __, __n, _0x3b4001, _0x343c71, _0x4ec875, __h);
      }
      if (vnode2 = options.diffed) {
        vnode2(vnode);
      }
    } catch (_0x53e222) {
      vnode.__v = null;
      if (!!__h || _0x343c71 != null) {
        vnode.__e = _0x1b7dfb;
        vnode.__h = !!__h;
        _0x343c71[_0x343c71.indexOf(_0x1b7dfb)] = null;
      }
      options.__e(_0x53e222, vnode, __);
    }
    return vnode.__e;
  }
  function commitRoot(_0x247e5b, _0x402e31) {
    if (options.__c) {
      options.__c(_0x402e31, _0x247e5b);
    }
    _0x247e5b.some(function (item) {
      try {
        _0x247e5b = item.__h;
        item.__h = [];
        _0x247e5b.some(function (item2) {
          item2.call(item);
        });
      } catch (_0x296f64) {
        options.__e(_0x296f64, item.__v);
      }
    });
  }
  function applyRef(_0xc8af07, _0x4d2e3a, _0x13d214) {
    try {
      if (typeof _0xc8af07 == "function") {
        _0xc8af07(_0x4d2e3a);
      } else {
        _0xc8af07.current = _0x4d2e3a;
      }
    } catch (_0x320ba1) {
      options.__e(_0x320ba1, _0x13d214);
    }
  }
  function unmount(_0x402dbe, _0x144f34, _0x19f793) {
    var _0x3e7938;
    var _0x2d70b9;
    var _0x11fdb2;
    if (options.unmount) {
      options.unmount(_0x402dbe);
    }
    if (_0x3e7938 = _0x402dbe.ref) {
      if (!_0x3e7938.current || _0x3e7938.current === _0x402dbe.__e) {
        applyRef(_0x3e7938, null, _0x144f34);
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
          options.__e(_0x3d0432, _0x144f34);
        }
      }
      _0x3e7938.base = _0x3e7938.__P = null;
    }
    if (_0x3e7938 = _0x402dbe.__k) {
      for (_0x11fdb2 = 0; _0x11fdb2 < _0x3e7938.length; _0x11fdb2++) {
        if (_0x3e7938[_0x11fdb2]) {
          unmount(_0x3e7938[_0x11fdb2], _0x144f34, _0x19f793);
        }
      }
    }
    if (_0x2d70b9 != null) {
      removeNode(_0x2d70b9);
    }
  }
  function doRender(_0x2f776b, _0x533452, _0x2cbd69) {
    return this.constructor(_0x2f776b, _0x2cbd69);
  }
  options = {
    __e: function (_0x27c119, _0x3b21dc) {
      var _0x3f5da2;
      var _0x5ed87d;
      for (var _0x22887d, __h = _0x3b21dc.__h; _0x3b21dc = _0x3b21dc.__;) {
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
              _0x3b21dc.__h = __h;
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
  Component.prototype.setState = function (_0x32737d, _0x356bc6) {
    var _0x566764;
    _0x566764 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = assign({}, this.state);
    if (typeof _0x32737d == "function") {
      _0x32737d = _0x32737d(assign({}, _0x566764), this.props);
    }
    if (_0x32737d) {
      assign(_0x566764, _0x32737d);
    }
    if (_0x32737d != null && this.__v) {
      if (_0x356bc6) {
        this.__h.push(_0x356bc6);
      }
      enqueueRender(this);
    }
  };
  Component.prototype.forceUpdate = function (_0x502404) {
    if (this.__v) {
      this.__e = true;
      if (_0x502404) {
        this.__h.push(_0x502404);
      }
      enqueueRender(this);
    }
  };
  Component.prototype.render = Fragment;
  rerenderQueue = [];
  defer = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
  EMPTY_OBJ_ALIAS = EMPTY_OBJ;
  contextIdCounter = processRenderQueue.__r = 0;
  function createCommonjsModule(_0x1973de, _0xc884b9) {
    _0x1973de(_0xc884b9 = {
      exports: {}
    }, _0xc884b9.exports);
    return _0xc884b9.exports;
  }
  function isZero(distance) {
    return Math.abs(distance) <= EPSILON;
  }
  function nearlyEqual(_0x97bc62, _0x2dd8ee) {
    return Math.abs(_0x97bc62 - _0x2dd8ee) <= EPSILON;
  }
  function lerp(_0x48313d, _0x58d038, percent) {
    return _0x48313d + (_0x58d038 - _0x48313d) * percent;
  }
  function cross2d(_0x52d0fe, _0x152fbc, _0xf87a81, _0x13e2da) {
    return _0x52d0fe * _0x13e2da - _0x152fbc * _0xf87a81;
  }
  function inRange(_0x40298f, _0x139d4c, _0x5f7cbf) {
    return Math.min(_0x40298f, _0x139d4c) - EPSILON <= _0x5f7cbf && _0x5f7cbf <= Math.max(_0x40298f, _0x139d4c) + EPSILON;
  }
  function rangeOverlap(_0x3be053, _0x393292, _0x254cfb, _0x280ce6) {
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
  function nextId() {
    return ++idCounter;
  }
  function rayCrossingSign(point, point2, point3) {
    var dx = point.x - point3.x;
    var dy = point.y - point3.y;
    var dx2 = point2.x - point3.x;
    var dy2 = point2.y - point3.y;
    if (dy * dy2 > 0) {
      return 1;
    }
    var distance = dx * dy2 - dy * dx2;
    var result = isZero(distance) ? 0 : Math.sign(distance);
    if (result === 0) {
      if (dx * dx2 <= 0) {
        return 0;
      } else {
        return 1;
      }
    } else if (dy < 0) {
      return -result;
    } else if (dy2 < 0) {
      return result;
    } else {
      return 1;
    }
  }
  function rgbToHex(_0x4dabc8) {
    function _0x1c57f8(_0x4ddc6d) {
      var result = _0x4ddc6d.toString(16);
      if (result.length < 2) {
        return `0${result}`;
      } else {
        return result;
      }
    }
    var r = _0x4dabc8.r;
    var g = _0x4dabc8.g;
    var b = _0x4dabc8.b;
    return `#${_0x1c57f8(r)}${_0x1c57f8(g)}${_0x1c57f8(b)}`;
  }
  function hsvToHex(_0x5a2fc5) {
    return rgbToHex(function (_0x8c1ab5) {
      var _0x596111;
      var _0x3e4219;
      var _0x1a72b6;
      var _0x503c8c;
      var _0x34efda;
      var _0x25d49b;
      var _0x3a5ddf;
      var _0x42d206;
      var h = _0x8c1ab5.h;
      var s = _0x8c1ab5.s;
      var v = _0x8c1ab5.v;
      h = Math.max(0, Math.min(360, h));
      s = Math.max(0, Math.min(100, s));
      v = Math.max(0, Math.min(100, v));
      v /= 100;
      if ((s /= 100) == 0) {
        _0x596111 = _0x3e4219 = _0x1a72b6 = v;
        return {
          r: Math.round(_0x596111 * 255),
          g: Math.round(_0x3e4219 * 255),
          b: Math.round(_0x1a72b6 * 255)
        };
      }
      _0x25d49b = v * (1 - s);
      _0x3a5ddf = v * (1 - s * (_0x34efda = (h /= 60) - (_0x503c8c = Math.floor(h))));
      _0x42d206 = v * (1 - s * (1 - _0x34efda));
      switch (_0x503c8c) {
        case 0:
          _0x596111 = v;
          _0x3e4219 = _0x42d206;
          _0x1a72b6 = _0x25d49b;
          break;
        case 1:
          _0x596111 = _0x3a5ddf;
          _0x3e4219 = v;
          _0x1a72b6 = _0x25d49b;
          break;
        case 2:
          _0x596111 = _0x25d49b;
          _0x3e4219 = v;
          _0x1a72b6 = _0x42d206;
          break;
        case 3:
          _0x596111 = _0x25d49b;
          _0x3e4219 = _0x3a5ddf;
          _0x1a72b6 = v;
          break;
        case 4:
          _0x596111 = _0x42d206;
          _0x3e4219 = _0x25d49b;
          _0x1a72b6 = v;
          break;
        default:
          _0x596111 = v;
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
  function fillPath(ctx, path, _0x181ab4) {
    ctx.fillStyle = _0x181ab4;
    ctx.fill(path);
  }
  function strokeTrack(ctx, _0x6ff55b, track, position, _0x14c150) {
    if (track.polyline.segments.length) {
      ctx.lineWidth = _0x14c150;
      ctx.strokeStyle = _0x6ff55b;
      ctx.stroke(track.polyline.path);
    }
  }
  function drawSkinLayers(config, _0x11c1a3, unit2, container, _0x565d5a) {
    (_0x565d5a ? container.frontLayers : container.backLayers).forEach(function (item) {
      return function (_0x4dcdde, _0x47ef26, unit, _0x142217, _0xb57a8) {
        var trackWidth = _0x4dcdde.trackWidth;
        if (_0xb57a8.image) {
          var _0x5c1029 = _0xb57a8.image.naturalWidth || _0xb57a8.image.width;
          var _0x2a15b7 = _0xb57a8.image.naturalHeight || _0xb57a8.image.height;
          var _0x4896ff = trackWidth * _0x142217.scale * _0xb57a8.scale / _0x5c1029;
          _0x47ef26.save();
          _0x47ef26.translate(unit.position.x, unit.position.y - _0x4dcdde.baseHeight * _0xb57a8.level);
          _0x47ef26.rotate(unit.direction + Math.PI / 2);
          _0x47ef26.translate((_0x142217.x + _0xb57a8.x) * trackWidth, (_0x142217.y + _0xb57a8.y) * trackWidth);
          var _0x5be5a4 = 0;
          if (_0xb57a8.direction === "target" && unit.target) {
            var point;
            try {
              point = unit.target.clone().sub(unit.position);
            } catch (_0x43bc77) {
              console.log("unit.name", unit.name);
              console.log("unit.fsm.state", unit.fsm.state);
              console.log("unit.base", unit.base);
              throw new Error(_0x43bc77);
            }
            _0x5be5a4 += Math.atan2(point.y, point.x) - unit.direction;
          }
          if (_0xb57a8.direction === "billboard") {
            _0x5be5a4 += -unit.direction - Math.PI / 2;
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
      }(config, _0x11c1a3, unit2, item.display, item.layer);
    });
  }
  function roundRect(ctx, _0x15be5f, padding, barWidth, barHeight, _0x3eb4f7, strokeWidth) {
    var _0x32e34e = _slicedToArray(_0x3eb4f7, 4);
    var _0x1ea458 = _0x32e34e[0];
    var _0x26a121 = _0x32e34e[1];
    var _0x582126 = _0x32e34e[2];
    var _0x5e09e3 = _0x32e34e[3];
    ctx.beginPath();
    ctx.moveTo(_0x15be5f + _0x1ea458, padding);
    ctx.lineTo(_0x15be5f + barWidth - _0x26a121, padding);
    ctx.quadraticCurveTo(_0x15be5f + barWidth, padding, _0x15be5f + barWidth, padding + _0x26a121);
    ctx.lineTo(_0x15be5f + barWidth, padding + barHeight - _0x582126);
    ctx.quadraticCurveTo(_0x15be5f + barWidth, padding + barHeight, _0x15be5f + barWidth - _0x582126, padding + barHeight);
    ctx.lineTo(_0x15be5f + _0x5e09e3, padding + barHeight);
    ctx.quadraticCurveTo(_0x15be5f, padding + barHeight, _0x15be5f, padding + barHeight - _0x5e09e3);
    ctx.lineTo(_0x15be5f, padding + _0x1ea458);
    ctx.quadraticCurveTo(_0x15be5f, padding, _0x15be5f + _0x1ea458, padding);
    ctx.closePath();
    ctx.fill();
    if (strokeWidth) {
      ctx.strokeStyle = "#00000099";
      ctx.lineWidth = strokeWidth;
      ctx.stroke();
    }
  }
  function identity(_0x4680f8) {
    return _0x4680f8;
  }
  function noop() {}
  function drawArena(_0x4c7e18) {
    var _0x508106;
    var _0x31bd64;
    var _0x42f3ba;
    var _0x117e43;
    var game = _0x4c7e18.game;
    var ctx = _0x4c7e18.ctx;
    var viewScreenWidth = _0x4c7e18.viewScreenWidth;
    var viewScreenHeight = _0x4c7e18.viewScreenHeight;
    var config = game.config;
    var baseHeight = config.baseHeight;
    var arenaColor = config.arenaColor;
    var borderColor = config.borderColor;
    var backgroundTopColor = config.backgroundTopColor;
    var backgroundBottomColor = config.backgroundBottomColor;
    fillPath(ctx, game.border.polygon.path, arenaColor);
    ctx.translate(0, baseHeight * 3);
    fillPath(ctx, game.border.polygon.path, borderColor);
    ctx.translate(0, baseHeight * -3);
    _0x508106 = ctx;
    _0x31bd64 = game.space;
    _0x42f3ba = backgroundTopColor;
    _0x117e43 = backgroundBottomColor;
    if (_0x508106 !== undefined || _0x42f3ba !== undefined || _0x117e43 !== undefined) {
      (arenaGradient = _0x508106.createLinearGradient(_0x31bd64.width / 2, 0, _0x31bd64.width / 2, _0x31bd64.height)).addColorStop(0, _0x42f3ba);
      arenaGradient.addColorStop(1, _0x117e43);
    }
    ctx.fillStyle = arenaGradient;
    ctx.fillRect(viewScreenWidth / -2, viewScreenHeight / -2, game.space.width + viewScreenWidth, game.space.height + viewScreenHeight);
  }
  function drawLeaderCrown(_0x4d00c6) {
    var game = _0x4d00c6.game;
    var ctx = _0x4d00c6.ctx;
    var scale = _0x4d00c6.scale;
    var scaler = _0x4d00c6.scaler;
    var fontSize = _0x4d00c6.fontSize;
    var team = game.teams.find(function (team) {
      return team.top === 1;
    });
    if (team) {
      team.units.forEach(function (unit) {
        ctx2 = ctx;
        _0x53775d = unit;
        _0x5c20e2 = scale;
        _0x4396ee = scaler;
        _0x19ad2d = fontSize;
        _0x446c69 = window.devicePixelRatio;
        _0x73909f = _0x19ad2d * 1.7 / _0x446c69;
        ctx2.save();
        ctx2.translate(_0x53775d.position.x, _0x53775d.position.y);
        ctx2.scale(1 / (_0x5c20e2 * _0x446c69), 1 / (_0x5c20e2 * _0x446c69));
        ctx2.fillStyle = "#ffff00";
        ctx2.strokeStyle = "#ff8800";
        ctx2.lineJoin = "round";
        ctx2.lineWidth = 1;
        ctx2.translate(0, _0x5c20e2 * -12 * _0x446c69);
        ctx2.translate(0, -_0x73909f * _0x446c69);
        ctx2.scale(_0x4396ee, _0x4396ee);
        ctx2.translate(0, -4);
        ctx2.fill(CROWN_PATH);
        ctx2.stroke(CROWN_PATH);
        ctx2.restore();
        return;
        var ctx2;
        var _0x53775d;
        var _0x5c20e2;
        var _0x4396ee;
        var _0x19ad2d;
        var _0x446c69;
        var _0x73909f;
      });
    }
  }
  function drawMinimap(_0x9735f7) {
    var game = _0x9735f7.game;
    var ctx = _0x9735f7.ctx;
    var scaler = _0x9735f7.scaler;
    var calcMult = _0x9735f7.calcMult;
    var viewScreenWidth = _0x9735f7.viewScreenWidth;
    var viewScreenHeight = _0x9735f7.viewScreenHeight;
    var padding = _0x9735f7.padding;
    _0x9735f7.strokeWidth;
    var player = game.player;
    var _0x110d97 = viewScreenWidth / calcMult(8, 3);
    var _0x3e5957 = game.space.width / _0x110d97 * scaler * 3;
    ctx.save();
    ctx.translate(viewScreenWidth - padding * 2 - _0x110d97, viewScreenHeight - padding * 2 - _0x110d97);
    ctx.scale(_0x110d97 / game.space.width, _0x110d97 / game.space.height);
    fillPath(ctx, game.border.polygon.path, "#c2d6cdaa");
    player.team.bases.forEach(function (base) {
      var ctx2;
      var _0x5e0219;
      var _0x455011;
      var _0x1dd479;
      var skin = base.team.skin;
      fillPath(ctx, base.polygon.path, skin.colors.main);
      ctx2 = ctx;
      _0x5e0219 = base.polygon.path;
      _0x455011 = skin.colors.back;
      _0x1dd479 = _0x3e5957 / 2;
      ctx2.strokeStyle = _0x455011;
      ctx2.lineWidth = _0x1dd479;
      ctx2.stroke(_0x5e0219);
    });
    strokeTrack(ctx, player.team.skin.colors.back, player.track, player.position, _0x3e5957 / 2);
    player.team.units.forEach(function (unit) {
      var _0x3c46f8 = unit === player ? 2 / 3 : 0.5;
      var skin = unit.team.skin;
      ctx.beginPath();
      ctx.arc(unit.position.x, unit.position.y, _0x3e5957 * _0x3c46f8 * 2, 0, Math.PI * 2);
      ctx.fillStyle = skin.colors.main;
      ctx.fill();
      ctx.strokeStyle = skin.colors.nick;
      ctx.lineWidth = _0x3e5957 / 2;
      ctx.stroke();
    });
    var _0x5866cb = 0;
    var _0x1b7510 = performance.now() / 10000;
    var _0x433930 = 1 / game.fullPercent;
    var _0x253d67 = [];
    var _0xd3d99 = _0x3e5957 * 6;
    var center = game.space.center;
    var x = center.x;
    var y = center.y;
    var radius = game.border.radius;
    var _0x203901 = radius + _0xd3d99;
    var _0x25a767 = radius + 0;
    game.teams.forEach(function (team) {
      var _0x877fe = _0x5866cb + team.percent;
      var _0x2cf150 = _0x5866cb * _0x433930 * Math.PI * 2 + _0x1b7510;
      var _0x1ab074 = _0x877fe * _0x433930 * Math.PI * 2 + _0x1b7510;
      _0x253d67.push(_0x2cf150);
      ctx.beginPath();
      ctx.arc(x, y, _0x203901, _0x2cf150, _0x1ab074);
      ctx.arc(x, y, _0x25a767, _0x1ab074, _0x2cf150, true);
      ctx.fillStyle = team.skin.colors.main;
      ctx.fill();
      _0x5866cb = _0x877fe;
    });
    _0x253d67.forEach(function (item) {
      var cos = Math.cos(item);
      var sin = Math.sin(item);
      ctx.beginPath();
      ctx.moveTo(x + _0x203901 * cos, y + _0x203901 * sin);
      ctx.lineTo(x + _0x25a767 * cos, y + _0x25a767 * sin);
      ctx.lineWidth = _0x3e5957;
      ctx.strokeStyle = "#00000099";
      ctx.stroke();
    });
    ctx.lineWidth = _0x3e5957;
    ctx.strokeStyle = "#00000099";
    ctx.beginPath();
    ctx.arc(x, y, _0x203901, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, _0x25a767, 0, Math.PI * 2);
    ctx.stroke();
    var asset = player.team.skin.assets.find(function (asset) {
      return asset.pool && asset.pool.name === "flags";
    });
    var _0x44680a = asset && asset.content.roundedFlag;
    if (_0x44680a && player.cities) {
      player.cities.forEach(function (city) {
        ctx.save();
        ctx.translate(city.position.x, city.position.y);
        ctx.scale(2, 2);
        ctx.drawImage(_0x44680a, -_0x44680a.width / 2, -_0x44680a.height / 2);
        ctx.restore();
      });
    }
    ctx.restore();
  }
  function drawKillCounter(_0x51a3cf) {
    var ctx;
    var _0x98439b;
    var _0x580a77;
    var _0x3a0a8a;
    var game = _0x51a3cf.game;
    var ctx2 = _0x51a3cf.ctx;
    _0x51a3cf.scaler;
    var padding = _0x51a3cf.padding;
    var backHeight = _0x51a3cf.backHeight;
    var barHeight = _0x51a3cf.barHeight;
    var halfBarHeight = _0x51a3cf.halfBarHeight;
    _0x51a3cf.fontSize;
    var uiFont = _0x51a3cf.uiFont;
    var padding2 = padding + backHeight + barHeight + padding / 2 + barHeight + padding / 2;
    ctx2.fillStyle = "#00000088";
    roundRect(ctx2, 0, padding2, barHeight * 1.5, barHeight, [0, halfBarHeight, halfBarHeight, 0]);
    _0x98439b = barHeight * 1.4 / 2;
    _0x580a77 = padding2 + barHeight / 2;
    _0x3a0a8a = barHeight / 30;
    (ctx = ctx2).save();
    ctx.fillStyle = "#ffffffcc";
    ctx.translate(_0x98439b, _0x580a77);
    ctx.scale(_0x3a0a8a, _0x3a0a8a);
    ctx.fill(SKULL_PATH);
    ctx.restore();
    ctx2.font = uiFont;
    ctx2.textAlign = "left";
    ctx2.textBaseline = "middle";
    ctx2.fillText(`x${game.player.statistics.kills}`, barHeight * 1.5 + 8, padding2 + halfBarHeight);
  }
  function renderGame(_0x3a4c9e) {
    var game = _0x3a4c9e.game;
    var ctx = _0x3a4c9e.ctx;
    var devicePixelRatio = _0x3a4c9e.devicePixelRatio;
    var viewWidth = _0x3a4c9e.viewWidth;
    var viewHeight = _0x3a4c9e.viewHeight;
    var origin = _0x3a4c9e.origin;
    var scale = _0x3a4c9e.scale;
    var baseHeight = game.config.baseHeight;
    ctx.resetTransform();
    ctx.clearRect(0, 0, viewWidth, viewHeight);
    var _0x16b0bf;
    var game2;
    var ctx2;
    var _0x5b318e;
    var _0x43cb1c;
    var _0x3e17a5;
    var _0x1336ff;
    var ctx3;
    var _0x14706c;
    var _0x17087a;
    var _0x5d14a9;
    var _0x2d13c8;
    var game3;
    var _0xca12f7;
    var _0x1d115d;
    var _0x47f990;
    var _0x447150;
    var game4;
    var ctx4;
    var _0x1a0c55;
    var _0x562a4d;
    var _0x1c009a;
    var _0x2ec18;
    var ctx5;
    var _0x24bad4;
    var _0xdb1356;
    var _0x2e2bbb;
    var game5;
    var _0x1f9ddb;
    var _0x3b8957;
    var _0x5dedd0;
    var _0x27fc8f;
    var game6;
    var _0x54ec09;
    var _0x2b2712;
    var _0x3982ff;
    var _0x308495 = origin.x * scale - viewWidth / 2;
    var _0x279aff = origin.y * scale - viewHeight / 2;
    ctx.translate(-_0x308495, -_0x279aff);
    ctx.scale(scale, scale);
    ctx.translate(0, -baseHeight);
    _0x1336ff = (_0x3e17a5 = _0x3a4c9e).game;
    ctx3 = _0x3e17a5.ctx;
    _0x14706c = _0x3e17a5.boundsInView;
    _0x17087a = _0x1336ff.config.trackWidth;
    _0x5d14a9 = 0;
    _0x1336ff.bases.forEach(function (base) {
      if (_0x14706c(base.polygon, _0x17087a)) {
        _0x5d14a9++;
        var skin = base.team.skin;
        fillPath(ctx3, base.polygon.path, skin.pattern && skin.pattern.pattern || skin.colors.main);
      }
    });
    _0x1336ff.drawedBases = _0x5d14a9;
    game2 = (_0x16b0bf = _0x3a4c9e).game;
    ctx2 = _0x16b0bf.ctx;
    _0x5b318e = _0x16b0bf.boundsInView;
    _0x43cb1c = game2.config.trackWidth;
    ctx2.save();
    ctx2.lineCap = "round";
    ctx2.globalCompositeOperation = "destination-out";
    game2.units.forEach(function (unit) {
      if (unit.track.polyline.start && _0x5b318e(unit.track.polyline, _0x43cb1c)) {
        var skin = unit.team.skin;
        strokeTrack(ctx2, skin.colors.main, unit.track, unit.position, _0x43cb1c);
        ctx2.save();
        ctx2.globalCompositeOperation = "destination-over";
        ctx2.clip(unit.base.polygon.path);
        strokeTrack(ctx2, skin.pattern && skin.pattern.pattern || skin.colors.main, unit.track, unit.position, _0x43cb1c + 2);
        ctx2.restore();
      }
    });
    ctx2.restore();
    ctx.translate(0, baseHeight);
    ctx.globalCompositeOperation = "destination-over";
    game3 = (_0x2d13c8 = _0x3a4c9e).game;
    _0xca12f7 = _0x2d13c8.ctx;
    _0x1d115d = _0x2d13c8.pointInView;
    _0x47f990 = game3.config.trackWidth;
    game3.units.forEach(function (unit) {
      if (_0x1d115d(unit.position, _0x47f990 * 4)) {
        var skin = unit.team.skin;
        drawSkinLayers(game3.config, _0xca12f7, unit, skin.container, false);
      }
    });
    game4 = (_0x447150 = _0x3a4c9e).game;
    ctx4 = _0x447150.ctx;
    _0x1a0c55 = _0x447150.boundsInView;
    _0x562a4d = game4.config.trackWidth;
    ctx4.save();
    ctx4.lineCap = "round";
    ctx4.globalAlpha = 0.6;
    game4.units.forEach(function (unit) {
      if (unit.in !== unit.base && _0x1a0c55(unit.track.polyline, _0x562a4d)) {
        var skin = unit.team.skin;
        strokeTrack(ctx4, skin.colors.main, unit.track, unit.position, _0x562a4d);
      }
    });
    ctx4.restore();
    _0x2ec18 = (_0x1c009a = _0x3a4c9e).game;
    ctx5 = _0x1c009a.ctx;
    _0x24bad4 = _0x1c009a.boundsInView;
    _0xdb1356 = _0x2ec18.config.trackWidth;
    _0x2ec18.bases.forEach(function (base) {
      if (_0x24bad4(base.polygon, _0xdb1356)) {
        var skin = base.team.skin;
        fillPath(ctx5, base.polygon.path, `${skin.colors.back}`);
      }
    });
    drawArena(_0x3a4c9e);
    ctx.globalCompositeOperation = "source-over";
    game5 = (_0x2e2bbb = _0x3a4c9e).game;
    _0x1f9ddb = _0x2e2bbb.ctx;
    _0x3b8957 = _0x2e2bbb.pointInView;
    _0x5dedd0 = game5.config.trackWidth;
    game5.units.forEach(function (unit) {
      if (_0x3b8957(unit.position, _0x5dedd0 * 4)) {
        var skin = unit.team.skin;
        drawSkinLayers(game5.config, _0x1f9ddb, unit, skin.container, true);
      }
    });
    game6 = (_0x27fc8f = _0x3a4c9e).game;
    _0x54ec09 = _0x27fc8f.pointInView;
    _0x2b2712 = game6.config.trackWidth;
    game6.units.forEach(function (unit) {
      if (_0x54ec09(unit.position, _0x2b2712 * 20)) {
        (function (_0x4ee30d, _0x2ed10c) {
          var ctx = _0x4ee30d.ctx;
          var devicePixelRatio = _0x4ee30d.devicePixelRatio;
          var scale = _0x4ee30d.scale;
          _0x4ee30d.scaler;
          var font = _0x4ee30d.font;
          var _0x5917cb = _0x4ee30d.fontSize * 1.5;
          var _0x116da7 = _0x5917cb / 6;
          ctx.save();
          ctx.translate(_0x2ed10c.position.x, _0x2ed10c.position.y);
          ctx.scale(1 / (scale * devicePixelRatio), 1 / (scale * devicePixelRatio));
          ctx.font = `${_0x5917cb}px ${font}`;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";
          var name = _0x2ed10c.name;
          var _0x3a9cc9 = scale * -12 * devicePixelRatio;
          var _0x6576dd = "#363331";
          ctx.lineWidth = _0x116da7;
          ctx.strokeStyle = _0x6576dd;
          ctx.shadowColor = _0x6576dd;
          ctx.shadowBlur = _0x116da7 / 4;
          ctx.strokeText(name, 0, _0x3a9cc9);
          var _0x47b0cc = "#dddddd";
          var asset = _0x2ed10c.team.skin.assets.find(function (asset) {
            return asset.pool.name === "shields";
          });
          if (asset) {
            _0x47b0cc = asset.content.color;
          }
          ctx.fillStyle = _0x47b0cc;
          ctx.fillText(name, 0, _0x3a9cc9);
          ctx.restore();
        })(_0x27fc8f, unit);
      }
    });
    (_0x3982ff = _0x3a4c9e).game.particles.forEach(function (particle) {
      return particle.time > 0 && particle.draw(_0x3982ff, true);
    });
    (function (_0x49c237) {
      var game = _0x49c237.game;
      var ctx = _0x49c237.ctx;
      var scale = _0x49c237.scale;
      _0x49c237.scaler;
      game.config.font;
      ctx.scale(1 / scale, 1 / scale);
      game.labels.forEach(function (label) {
        return !label.ui && label.draw(_0x49c237);
      });
      ctx.scale(scale, scale);
    })(_0x3a4c9e);
    drawLeaderCrown(_0x3a4c9e);
    ctx.resetTransform();
    ctx.scale(1 / devicePixelRatio, 1 / devicePixelRatio);
    if (game.player) {
      (function (_0x309d87) {
        var game = _0x309d87.game;
        var ctx = _0x309d87.ctx;
        var padding = _0x309d87.padding;
        var backHeight = _0x309d87.backHeight;
        var barHeight = _0x309d87.barHeight;
        var halfBarHeight = _0x309d87.halfBarHeight;
        var barWidth = _0x309d87.barWidth;
        var strokeWidth = _0x309d87.strokeWidth;
        var uiFont = _0x309d87.uiFont;
        var player = game.player;
        var skin = player.team.skin;
        ctx.fillStyle = "#00000022";
        roundRect(ctx, 0, padding, barWidth, barHeight + backHeight, [0, (barHeight + backHeight) / 2, (barHeight + backHeight) / 2, 0]);
        var barWidth2 = barWidth * (0.25 + (game.best ? Math.min(1, game.scheme.scores(player) / game.best) : 1) * 0.75);
        ctx.fillStyle = skin.colors.back;
        roundRect(ctx, 0, padding + backHeight, barWidth2, barHeight, [0, halfBarHeight, halfBarHeight, 0], strokeWidth);
        ctx.fillStyle = skin.colors.main;
        roundRect(ctx, 0, padding, barWidth2, barHeight, [0, halfBarHeight, halfBarHeight, 0], strokeWidth);
        ctx.fillStyle = skin.colors.plate;
        ctx.font = uiFont;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(game.scheme.print(player), halfBarHeight, padding + halfBarHeight * 1.1);
      })(_0x3a4c9e);
      (function (_0x208606) {
        var game = _0x208606.game;
        var ctx = _0x208606.ctx;
        var padding = _0x208606.padding;
        var backHeight = _0x208606.backHeight;
        var barHeight = _0x208606.barHeight;
        var uiFont = _0x208606.uiFont;
        ctx.fillStyle = "#00000066";
        ctx.font = uiFont;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        var _0x461098 = padding + backHeight + barHeight + padding / 2 + barHeight / 2;
        ctx.fillText(`${game.language.bestTxt} ${game.scheme.print(null, game.best)}`, padding / 2, _0x461098);
      })(_0x3a4c9e);
      drawKillCounter(_0x3a4c9e);
      drawMinimap(_0x3a4c9e);
      (function (_0x26f1b2) {
        var game = _0x26f1b2.game;
        var ctx = _0x26f1b2.ctx;
        _0x26f1b2.scaler;
        var padding = _0x26f1b2.padding;
        var backHeight = _0x26f1b2.backHeight;
        var barHeight = _0x26f1b2.barHeight;
        _0x26f1b2.halfBarHeight;
        var fontSize = _0x26f1b2.fontSize;
        var uiFont = _0x26f1b2.uiFont;
        _0x26f1b2.viewWidth;
        _0x26f1b2.viewHeight;
        var viewScreenWidth = _0x26f1b2.viewScreenWidth;
        _0x26f1b2.viewScreenHeight;
        if (game.notifications.length) {
          var notification = game.notifications[0];
          if (notification.ready) {
            ctx.save();
            ctx.font = uiFont;
            var barHeight2 = fontSize * 2 + padding;
            var padding2 = notification.position() * (barHeight2 + padding) - barHeight2;
            var _0x10fb79 = fontSize * 2;
            var barWidth = Math.max(ctx.measureText(notification.title).width, ctx.measureText(notification.description).width) + padding * 5 + _0x10fb79;
            var _0x1ca813 = padding / 2;
            ctx.fillStyle = "#00000088";
            roundRect(ctx, (viewScreenWidth - barWidth) / 2, padding2, barWidth, barHeight2, [(barHeight + backHeight) / 2, (barHeight + backHeight) / 2, (barHeight + backHeight) / 2, (barHeight + backHeight) / 2]);
            ctx.fillStyle = "#ffffff";
            ctx.shadowColor = "#ffffff";
            ctx.shadowBlur = 1;
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillText(notification.title, (viewScreenWidth - barWidth) / 2 + barWidth / 2 + _0x10fb79 / 2, padding2 + _0x1ca813);
            ctx.fillStyle = "#ffffff88";
            ctx.shadowColor = "#ffffff88";
            ctx.shadowBlur = 1;
            ctx.font = uiFont;
            ctx.fillText(notification.description, (viewScreenWidth - barWidth) / 2 + barWidth / 2 + _0x10fb79 / 2, padding2 + _0x1ca813 + fontSize);
            ctx.shadowColor = "#ffffff";
            ctx.shadowBlur = 10;
            if (notification.image) {
              ctx.drawImage(notification.image, (viewScreenWidth - barWidth) / 2 + _0x1ca813, padding2 + _0x1ca813, _0x10fb79, _0x10fb79);
            }
            ctx.restore();
          }
        }
      })(_0x3a4c9e);
    }
  }
  function decodeCharTable(_0x3acc45) {
    return fromCharCode.apply(null, _0x3acc45[2].map(function (item) {
      return _0x3acc45[1].reduce(function (acc, item2, _0x3179ea) {
        if (_0x3179ea <= item) {
          return acc + item2;
        } else {
          return acc;
        }
      }, _0x3acc45[0]);
    }));
  }
  function decodeCharTableBroken(_0x3412b7) {
    return fromCharCode.apply(null, _0x3412b7.map(function (item) {
      return ye.reduce(function (acc, item2, _0x4d191d) {
        if (_0x4d191d <= item) {
          return acc + item2;
        } else {
          return acc;
        }
      }, 47);
    }));
  }
  var arenaGradient;
  var crownPathBuilder;
  var skullPathBuilder;
  var skullScale;
  var crossShape;
  var crossArm;
  var circleShape;
  var squareShape;
  var jsCookie = createCommonjsModule(function (_0x4554a0, _0x4e25b2) {
    var _0xd7b810;
    _0xd7b810 = function () {
      function _0x29f0e4() {
        for (var i = 0, result = {}; i < arguments.length; i++) {
          var _0x196f14 = arguments[i];
          for (var key in _0x196f14) {
            result[key] = _0x196f14[key];
          }
        }
        return result;
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
            for (var key in _0x462d71) {
              if (_0x462d71[key]) {
                _0x3be886 += "; " + key;
                if (_0x462d71[key] !== true) {
                  _0x3be886 += "=" + _0x462d71[key].split(";")[0];
                }
              }
            }
            return document.cookie = _0x223b71 + "=" + _0x1963d5 + _0x3be886;
          }
        }
        function _0x48d81d(_0x36f65e, _0x1c070a) {
          if (typeof document != "undefined") {
            var result = {};
            for (var _0x4c243a = document.cookie ? document.cookie.split("; ") : [], i = 0; i < _0x4c243a.length; i++) {
              var parts = _0x4c243a[i].split("=");
              var _0x3066bf = parts.slice(1).join("=");
              if (!_0x1c070a && _0x3066bf.charAt(0) === "\"") {
                _0x3066bf = _0x3066bf.slice(1, -1);
              }
              try {
                var _0x5e8a52 = _0x42cc4e(parts[0]);
                _0x3066bf = (_0x56236e.read || _0x56236e)(_0x3066bf, _0x5e8a52) || _0x42cc4e(_0x3066bf);
                if (_0x1c070a) {
                  try {
                    _0x3066bf = JSON.parse(_0x3066bf);
                  } catch (_0x47ecf0) {}
                }
                result[_0x5e8a52] = _0x3066bf;
                if (_0x36f65e === _0x5e8a52) {
                  break;
                }
              } catch (_0x2b1715) {}
            }
            if (_0x36f65e) {
              return result[_0x36f65e];
            } else {
              return result;
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
  var EPSILON = Math.pow(2, -26);
  var TAU = Math.PI * 2;
  var idCounter = 0;
  var vecPool = Array.from({
    length: 30000
  });
  var vecPoolSize = 0;
  var vecPending = Array.from({
    length: 10000
  });
  var vecPendingCount = 0;
  class Vec2 {
    constructor(_0x10fff9, y) {
      this.id = nextId();
      this.cell = null;
      this.segments = [];
      this.set(_0x10fff9, y);
    }
    static alloc(_0x416ec2, y) {
      if (vecPoolSize) {
        var _0xb64a0 = vecPool[--vecPoolSize];
        vecPool[vecPoolSize] = null;
        return _0xb64a0.set(_0x416ec2, y);
      }
      return new Vec2(_0x416ec2, y);
    }
    static clone(point) {
      return Vec2.alloc(point.x, point.y);
    }
    static length() {
      return vecPoolSize + vecPendingCount;
    }
    static flush() {
      for (var vecPendingCount2 = vecPendingCount; vecPendingCount2 > 0; vecPendingCount2--) {
        var _0x164cb7 = vecPending[vecPendingCount2 - 1];
        vecPending[vecPendingCount2 - 1] = null;
        if (vecPoolSize < 30000) {
          _0x164cb7.id = nextId();
          vecPool[vecPoolSize++] = _0x164cb7;
        }
      }
      vecPendingCount = 0;
    }
    static release(_0x3f17b7) {
      if (vecPoolSize < 30000) {
        _0x3f17b7.id = nextId();
        vecPool[vecPoolSize++] = _0x3f17b7;
      }
    }
    toJSON() {
      return {
        x: this.x,
        y: this.y,
        id: this.id
      };
    }
    set(_0x32e206, _0x15816f) {
      this.x = _0x32e206 || 0;
      this.y = _0x15816f || (_0x15816f === 0 ? 0 : this.x);
      return this;
    }
    test() {
      return Vec2.space.cell(this).findPoint(this);
    }
    commit(_0x4a710f) {
      if (this.segments.indexOf(_0x4a710f) === -1) {
        this.segments.push(_0x4a710f);
      }
      if (!this.cell) {
        Vec2.space.cell(this).commit(this);
      }
    }
    remove(_0x563b6e) {
      var index = this.segments.indexOf(_0x563b6e);
      this.segments.splice(index, 1);
      if (this.cell && !this.segments.length) {
        this.cell.remove(this);
      }
    }
    release() {
      Vec2.release(this);
    }
    add(point) {
      this.x += point.x;
      this.y += point.y;
      return this;
    }
    sub(point) {
      this.x -= point.x;
      this.y -= point.y;
      return this;
    }
    mul(point) {
      this.x *= point.x;
      this.y *= point.y;
      return this;
    }
    mulScalar(unitSpeed) {
      this.x *= unitSpeed;
      this.y *= unitSpeed;
      return this;
    }
    magnitude() {
      var x = this.x;
      var y = this.y;
      return Math.sqrt(x * x + y * y);
    }
    normalize() {
      var len = this.magnitude();
      if (len) {
        this.mulScalar(1 / len);
      }
      return this;
    }
    copy(point) {
      this.x = point.x;
      this.y = point.y;
      return this;
    }
    distance(point) {
      return Math.sqrt(this.distance2(point));
    }
    distance2(point) {
      var dx = this.x - point.x;
      var dy = this.y - point.y;
      return dx * dx + dy * dy;
    }
    cross(point) {
      return this.x * point.y - this.y * point.x;
    }
    dot(point) {
      return this.x * point.x + this.y * point.y;
    }
    rotate(_0x50b465) {
      var x = this.x;
      var y = this.y;
      var cos = Math.cos(_0x50b465);
      var sin = Math.sin(_0x50b465);
      this.x = x * cos - y * sin;
      this.y = x * sin + y * cos;
      return this;
    }
    angle(point) {
      return Math.atan2(this.cross(point), this.dot(point));
    }
    invert() {
      return this.mulScalar(-1);
    }
    equal(point) {
      return nearlyEqual(this.x, point.x) && nearlyEqual(this.y, point.y);
    }
    clone() {
      return new Vec2(this.x, this.y);
    }
  }
  var touchedCells = {};
  class GridCell {
    constructor(x, y) {
      this.points = [];
      this.x = x;
      this.y = y;
    }
    findPoint(point) {
      return this.points.find(function (point2) {
        return point2.equal(point);
      });
    }
    commit(_0x125088) {
      this.points.push(_0x125088);
      _0x125088.cell = this;
    }
    remove(_0x25d9bb) {
      var points = this.points;
      var index = points.indexOf(_0x25d9bb);
      if (index !== -1) {
        points.splice(index, 1);
        _0x25d9bb.cell = null;
      }
    }
  }
  class SpatialGrid {
    constructor(width, height, size) {
      this.width = width;
      this.height = height;
      this.center = new Vec2(width / 2, height / 2);
      this.size = size;
      this.w = Math.ceil(width / size);
      this.h = Math.ceil(height / size);
      this.cells = [];
      for (var i = 0; i < this.h; i++) {
        for (var j = 0; j < this.w; j++) {
          this.cells.push(new GridCell(j, i));
        }
      }
    }
    static flush() {
      var _0x338625 = 0;
      var _0xc6d390 = 0;
      for (var key in touchedCells) {
        if (touchedCells.hasOwnProperty(key)) {
          _0xc6d390++;
          if (!touchedCells[key].segments.length) {
            _0x338625++;
          }
        }
      }
      touchedCells = {};
      if (_0xc6d390) {
        console.log(`candidates ${_0x338625}/${_0xc6d390}`);
      }
    }
    count() {
      var result = 0;
      this.cells.forEach(function (cell) {
        result += cell.points.length;
      });
      return result;
    }
    cell(point) {
      return this.getCell(Math.floor(point.x / this.size), Math.floor(point.y / this.size));
    }
    getCell(j, i) {
      return this.cells[j + i * this.w];
    }
    checkPoint(point) {
      return this.cell(point).points.find(function (point2) {
        return point2.equal(point);
      }) || point;
    }
    segmentsCount() {
      var result = {};
      for (var i = 0; i < this.h; i++) {
        for (var j = 0; j < this.w; j++) {
          this.getCell(j, i).points.forEach(function (point) {
            point.segments.forEach(function (segment) {
              return result[segment.id] = segment;
            });
          });
        }
      }
      return result;
    }
    intersections(segment) {
      var point = this.cell(segment.start);
      var point2 = this.cell(segment.end);
      var _0x4a7a3b = Math.max(Math.min(point.x, point2.x) - 1, 0);
      var _0x51b00f = Math.min(Math.max(point.x, point2.x) + 1, this.w - 1);
      var _0x1f5efd = Math.max(Math.min(point.y, point2.y) - 1, 0);
      for (var _0x23c8e6 = Math.min(Math.max(point.y, point2.y) + 1, this.h - 1), _0x2e4c18 = nextId(), result = [], i = _0x1f5efd; i <= _0x23c8e6; i++) {
        for (var j = _0x4a7a3b; j <= _0x51b00f; j++) {
          this.getCell(j, i).points.forEach(function (point) {
            point.segments.forEach(function (segment2) {
              if (segment2.mark !== _0x2e4c18) {
                var _0x2d46b9 = segment2.intersect(segment);
                if (_0x2d46b9) {
                  result.push(_0x2d46b9);
                }
                segment2.mark = _0x2e4c18;
              }
            });
          });
        }
      }
      return result;
    }
  }
  class Segment {
    constructor(start, end) {
      this.id = nextId();
      start.equal(end);
      this.mark = 0;
      this.shape = null;
      this.start = start;
      this.end = end;
      this.calc();
    }
    static nullableNew(start, point) {
      if (start.equal(point)) {
        return null;
      } else {
        return new Segment(start, point);
      }
    }
    calc() {
      var start = this.start;
      var end = this.end;
      var a = start.y - end.y;
      var b = end.x - start.x;
      var dist = Math.sqrt(a * a + b * b);
      a /= dist;
      b /= dist;
      this.a = a;
      this.b = b;
      this.c = -(a * start.x + b * start.y);
      this.vector = Vec2.clone(end).sub(start);
    }
    clone() {
      return new Segment(this.start, this.end);
    }
    reverse() {
      var end = this.start;
      this.start = this.end;
      this.end = end;
      this.calc();
      return this;
    }
    commit(shape) {
      this.shape = shape;
      this.start.commit(this);
      this.end.commit(this);
      return this;
    }
    remove() {
      this.shape = null;
      this.start.remove(this);
      this.end.remove(this);
      this.vector.release();
    }
    length() {
      return this.vector.magnitude();
    }
    zn(other) {
      var a = other.a;
      var b = other.b;
      var a2 = this.a;
      var b2 = this.b;
      return cross2d(a, b, a2, b2);
    }
    intersect(other, asRay) {
      var a = other.a;
      var b = other.b;
      var c = other.c;
      var start = other.start;
      var end = other.end;
      var a2 = this.a;
      var b2 = this.b;
      var c2 = this.c;
      var start2 = this.start;
      var end2 = this.end;
      var rawZN = cross2d(a, b, a2, b2);
      if (isZero(rawZN)) {
        return null;
      }
      var x = -cross2d(c, b, c2, b2) / rawZN;
      var y = -cross2d(a, c, a2, c2) / rawZN;
      if (asRay) {
        var x2 = start.x;
        var y2 = start.y;
        if ((x - x2) * (end.x - x2) + (y - y2) * (end.y - y2) < 0) {
          return null;
        }
        var point = inRange(start2.x, end2.x, x) && inRange(start2.y, end2.y, y) && new Vec2(x, y);
        if (point) {
          return start2.equal(point) && start2 || end2.equal(point) && end2 || start.equal(point) && start || point;
        } else {
          return null;
        }
      }
      var point2 = inRange(start.x, end.x, x) && inRange(start.y, end.y, y) && inRange(start2.x, end2.x, x) && inRange(start2.y, end2.y, y) && new Vec2(x, y);
      if (point2) {
        return {
          point: start2.equal(point2) && start2 || end2.equal(point2) && end2 || start.equal(point2) && start || end.equal(point2) && end || point2,
          segment: this,
          distance: point2.distance2(start),
          get overlay() {
            throw Error("overlay");
          },
          zn: Math.sign(rawZN),
          rawZN: rawZN
        };
      } else {
        return null;
      }
    }
    has(point) {
      return this.start === point || this.end === point;
    }
    hasEqual(point) {
      return this.start.equal(point) || this.end.equal(point);
    }
    contains(point) {
      var distance = this.a * point.x + this.b * point.y + this.c;
      var start = this.start;
      var end = this.end;
      return isZero(distance) && inRange(start.x, end.x, point.x) && inRange(start.y, end.y, point.y);
    }
    get owner() {}
  }
  var FRAME_MS = 1000 / 60;
  class Polygon {
    constructor(points) {
      this.segments = [];
      this.simplify = [];
      this.simplifyIndexes = [];
      this.owner = null;
      this.bounds = null;
      for (var count = points.length, i = 0; i < count;) {
        var segment = Segment.nullableNew(points[i++], points[i < count ? i : 0]);
        if (segment) {
          this.segments.push(segment);
        }
      }
      this.updateBounds();
    }
    static fromSegments(segments) {
      var polygon = new Polygon();
      polygon.segments = segments;
      polygon.updateBounds();
      return polygon;
    }
    commit(owner) {
      var polygon = this;
      if (owner) {
        this.owner = owner;
      }
      this.segments.forEach(function (segment) {
        return segment.commit(polygon);
      });
    }
    remove() {
      this.segments.forEach(function (segment) {
        return segment.remove();
      });
    }
    reverse() {
      this.segments.reverse();
      this.segments.forEach(function (segment) {
        return segment.reverse();
      });
      return this;
    }
    insert(segment, point) {
      if (!segment.has(point)) {
        var index = this.segments.findIndex(function (segment2) {
          return segment2 === segment;
        });
        var head = new Segment(segment.start, point).commit(this);
        var tail = new Segment(point, segment.end).commit(this);
        segment.remove();
        this.segments.splice(index, 1, head, tail);
        return [head, tail];
      }
    }
    hasPoint(point) {
      return this.segments.some(function (segment) {
        return segment.has(point);
      });
    }
    findSegment(point) {
      return this.segments.findIndex(function (segment) {
        return segment.start === point;
      });
    }
    left(points, from, to) {
      var segs;
      var polygon = this;
      var newSegments = [];
      for (var i = 0; i < points.length - 1; i++) {
        newSegments.push(new Segment(points[i], points[i + 1]));
      }
      var removed = (segs = this.segments).splice.apply(segs, [from, to - from].concat(newSegments));
      newSegments.forEach(function (newSegment) {
        return newSegment.commit(polygon);
      });
      removed.forEach(function (item) {
        return item.remove();
      });
    }
    right(points, from, to) {
      var polygon = this;
      var newSegments = [];
      for (var i = 0; i < points.length - 1; i++) {
        newSegments.push(new Segment(points[i], points[i + 1]));
      }
      var removed = this.segments.splice(from, to - from);
      this.remove();
      newSegments.reverse().forEach(function (item) {
        return item.reverse().commit(polygon);
      });
      this.segments = removed.concat(newSegments);
    }
    points() {
      return this.segments.map(function (segment) {
        return segment.start;
      });
    }
    intersections(other) {
      var result = [];
      if (this.segments.length > 1) {
        this.segments.forEach(function (segment) {
          var hit = segment.intersect(other);
          if (hit) {
            result.push(hit);
          }
        });
      }
      result.sort(function (a, b) {
        return a.distance - b.distance;
      });
      return result;
    }
    inside(point) {
      var bounds = this.bounds;
      var left = bounds.left;
      var right = bounds.right;
      var top = bounds.top;
      var bottom = bounds.bottom;
      if (left > point.x || point.x > right || top > point.y || point.y > bottom) {
        return false;
      }
      for (var count = this.segments.length, i = 1, i2 = 0; i2 < count; i2++) {
        var segment = this.segments[i2];
        var start = segment.start;
        var end = segment.end;
        var sign = rayCrossingSign(start, end, point);
        if (sign === 0) {
          return true;
        }
        i *= sign;
      }
      return i !== 1;
    }
    rawSquare() {
      var sum = 0;
      this.segments.forEach(function (segment) {
        var start = segment.start;
        var end = segment.end;
        sum += (start.x + end.x) * (end.y - start.y);
      });
      return sum / 2;
    }
    square() {
      var raw = this.rawSquare();
      return Math.abs(raw);
    }
    calcPath() {
      var path = new Path2D();
      var segments = this.segments;
      var count = segments.length;
      var start = segments[0].start;
      path.moveTo(start.x, start.y);
      for (var i = 1; i < count; i++) {
        var start2 = segments[i].start;
        path.lineTo(start2.x, start2.y);
      }
      path.closePath();
      this.path = path;
      this.updateBounds();
    }
    calcSimplify() {
      var left = Infinity;
      var right = -Infinity;
      var top = Infinity;
      var bottom = -Infinity;
      var simplify = [];
      var simplifyIndexes = [];
      var count = 0;
      this.segments.forEach(function (segment, index) {
        var start = segment.start;
        var x = start.x;
        var y = start.y;
        left = Math.min(left, x);
        right = Math.max(right, x);
        top = Math.min(top, y);
        bottom = Math.max(bottom, y);
        if (count < 2) {
          simplify.push(start);
          simplifyIndexes.push(index);
          count++;
        } else {
          var point = simplify[count - 2];
          if (start.distance2(point) < 625) {
            simplify[count - 1] = start;
            simplifyIndexes[count - 1] = index;
          } else {
            simplify.push(start);
            simplifyIndexes.push(index);
            count++;
          }
        }
      });
      this.simplify = simplify;
      this.simplifyIndexes = simplifyIndexes;
      left -= 25;
      right += 25;
      top -= 25;
      bottom += 25;
      this.bounds = {
        left: left,
        right: right,
        top: top,
        bottom: bottom
      };
    }
    updateBounds() {
      this.calcSimplify();
    }
    findNearestPoint(position) {
      var segments = this.segments;
      var simplify = this.simplify;
      var simplifyIndexes = this.simplifyIndexes;
      var baseDistance = Infinity;
      var nearest = -1;
      simplify.forEach(function (item, index) {
        var distSq = item.distance2(position);
        if (distSq < baseDistance) {
          baseDistance = distSq;
          nearest = index;
        }
      });
      var prev = nearest > 0 ? nearest - 1 : nearest;
      var next = nearest < simplify.length - 1 ? nearest + 1 : nearest;
      var simplifyIndex = simplifyIndexes[prev];
      var simplifyIndex2 = simplifyIndexes[next];
      baseDistance = Infinity;
      var nearestIndex = -1;
      for (var simplifyIndex3 = simplifyIndex; simplifyIndex3 < simplifyIndex2; simplifyIndex3++) {
        var distSq = segments[simplifyIndex3].start.distance2(position);
        if (distSq < baseDistance) {
          baseDistance = distSq;
          nearestIndex = simplifyIndex3;
        }
      }
      var simplifyIndex4 = simplifyIndexes[nearest];
      var prevSimplifyNearestIndex = prev;
      var nextSimplifyNearestIndex = nearest;
      if (simplifyIndex4 < nearestIndex) {
        prevSimplifyNearestIndex = nearest;
        nextSimplifyNearestIndex = next;
      }
      var baseNearestPoint = segments[nearestIndex].start;
      return {
        baseDistance: baseDistance,
        baseRealNearestIndex: nearestIndex,
        baseNearestPoint: baseNearestPoint,
        prevSimplifyNearestIndex: prevSimplifyNearestIndex,
        nextSimplifyNearestIndex: nextSimplifyNearestIndex
      };
    }
  }
  var perf = typeof performance != "undefined" && performance || Date;
  var now = perf.now.bind(perf);
  class Border {
    constructor(center, borderPoints, a, b) {
      this.center = center;
      this.a = a;
      this.b = b;
      this.c = Math.sqrt(a * a - b * b);
      this.e = this.c / a;
      this.polygon = new Polygon(function (point, _0x2c7c34, _0x5b3322, _0x22ae2f) {
        var x = point.x;
        var y = point.y;
        for (var _0x2c29ed = TAU / _0x2c7c34, result = [], i = 0; i < TAU - EPSILON; i += _0x2c29ed) {
          result.push(new Vec2(x + _0x5b3322 * Math.cos(i), y + _0x22ae2f * Math.sin(i)));
        }
        return result;
      }(center, borderPoints, a, b));
    }
    intersections(segment) {
      return this.polygon.intersections(segment);
    }
    radiusByAngle(angle) {
      var cos = Math.cos(angle);
      return this.b / Math.sqrt(1 - this.e * this.e * cos * cos);
    }
    radiusByAngleSlow(angle) {
      var _0x4c816a = Math.atan(this.a / this.b * Math.tan(angle));
      if (angle > Math.PI / 2 && angle < Math.PI * 2 * 0.75) {
        _0x4c816a += Math.PI;
      }
      var vec2 = new Vec2(this.center.x + Math.cos(_0x4c816a) * this.a, this.center.y + Math.sin(_0x4c816a) * this.b);
      return this.center.distance(vec2);
    }
    radiusByPoint(point) {
      var angle = Math.atan2(point.y - this.center.y, point.x - this.center.x);
      return this.radiusByAngle(angle);
    }
    radiusByPointSlow(point) {
      var _0x46371e = this.nearPoint(point);
      return this.center.distance(_0x46371e);
    }
    distance(point) {
      return point.distance(this.nearPoint(point));
    }
    nearPoint(point) {
      var angle = Math.atan2(point.y - this.center.y, point.x - this.center.x);
      var _0x253387 = this.radiusByAngle(angle);
      return new Vec2(_0x253387, 0).rotate(angle).add(this.center);
    }
    nearPointSlow(point) {
      var angle = Math.atan2(point.y - this.center.y, point.x - this.center.x);
      if (angle < 0) {
        angle = Math.PI * 2 + angle;
      }
      var _0x11bb8b = Math.atan(this.a / this.b * Math.tan(angle));
      if (angle > Math.PI / 2 && angle < Math.PI * 2 * 0.75) {
        _0x11bb8b += Math.PI;
      }
      return new Vec2(this.center.x + Math.cos(_0x11bb8b) * this.a, this.center.y + Math.sin(_0x11bb8b) * this.b);
    }
    inside(point) {
      return this.center.distance(point) + 1 < this.radiusByPoint(point);
    }
    get radius() {
      return this.a;
    }
  }
  (crownPathBuilder = new Path2D()).moveTo(-15, -15);
  crownPathBuilder.lineTo(-5, -5);
  crownPathBuilder.lineTo(0, -15);
  crownPathBuilder.lineTo(5, -5);
  crownPathBuilder.lineTo(15, -15);
  crownPathBuilder.lineTo(10, 5);
  crownPathBuilder.lineTo(-10, 5);
  crownPathBuilder.closePath();
  var CROWN_PATH = crownPathBuilder;
  skullPathBuilder = new Path2D();
  skullScale = 1.6;
  skullPathBuilder.moveTo(0, skullScale * -7);
  skullPathBuilder.lineTo(8, skullScale * -6);
  skullPathBuilder.lineTo(skullScale * 7, skullScale * -3);
  skullPathBuilder.lineTo(skullScale * 6, 3.2);
  skullPathBuilder.lineTo(6.4, skullScale * 3);
  skullPathBuilder.lineTo(skullScale * 3, skullScale * 6);
  skullPathBuilder.lineTo(0, skullScale * 7);
  skullPathBuilder.lineTo(skullScale * -3, skullScale * 6);
  skullPathBuilder.lineTo(-6.4, skullScale * 3);
  skullPathBuilder.lineTo(skullScale * -6, 3.2);
  skullPathBuilder.lineTo(skullScale * -7, skullScale * -3);
  skullPathBuilder.lineTo(-8, skullScale * -6);
  skullPathBuilder.closePath();
  skullPathBuilder.arc(skullScale * -3, -1.6, 3.2, 0, Math.PI * 2, true);
  skullPathBuilder.closePath();
  skullPathBuilder.arc(skullScale * 3, -1.6, 3.2, 0, Math.PI * 2, true);
  skullPathBuilder.closePath();
  skullPathBuilder.moveTo(0, skullScale);
  skullPathBuilder.lineTo(-3.2, skullScale * 3);
  skullPathBuilder.lineTo(0, 6.4);
  skullPathBuilder.lineTo(3.2, skullScale * 3);
  skullPathBuilder.closePath();
  var SKULL_PATH = skullPathBuilder;
  class Base {
    constructor(points) {
      this.id = nextId();
      this.team = null;
      this.hosts = [];
      if (points) {
        this.polygon = new Polygon(points);
        this.polygon.commit(this);
        this.polygon.calcPath();
        this.calcSquare();
        this.lastSquare = this.square;
      }
    }
    join(unit) {
      this.hosts.push(unit);
      unit.base = this;
      unit.in = this;
    }
    leave(unit) {
      var index = this.hosts.indexOf(unit);
      this.hosts.splice(index, 1);
    }
    hasHost(unit) {
      return this.hosts.includes(unit);
    }
    hasSomeHost() {
      return !!this.hosts.length;
    }
    DEBUG_Unit_In_Base() {
      return this.DEBUG_Unit.in === this;
    }
    getSkin() {
      return this.team.skin;
    }
    boundaryHasPoint(point) {
      var base = this;
      return !!point.cell && point.segments.some(function (segment) {
        return segment.shape === base.polygon;
      });
    }
    calcSquare() {
      this.square = this.polygon.square();
    }
    remove() {
      this.polygon.remove();
    }
    handleIntersect(intersection, unit, movement, game) {
      if (this.hosts.length) {
        if (this.hasHost(unit)) {
          this.handleSelfIntersect(intersection, unit, movement, game);
        } else {
          this.handleEnemyIntersect(intersection, unit, movement, game);
        }
      }
    }
    handleIntersects(intersections, unit, movement, game) {
      if (intersections.length) {
        if (this.hasHost(unit)) {
          this.handleSelfIntersects(intersections, unit, movement, game);
        } else {
          this.handleEnemyIntersects(intersections, unit, movement, game);
        }
      }
    }
    checkEnemyEntry(movement, point, znSum, baseSegments) {
      if (znSum === null) {
        znSum = baseSegments.reduce(function (acc, baseSegment) {
          var hit = baseSegment.intersect(movement);
          return acc + (hit ? hit.zn : 0);
        }, 0);
      }
      if (znSum > 0) {
        return false;
      }
      if (point.equal(movement.end)) {
        return false;
      }
      if (znSum === 0) {
        point.clone().add(movement.vector.clone().normalize().mulScalar(EPSILON * 10));
        if (!this.polygon.inside(movement.end)) {
          return false;
        }
      }
      if (znSum === -1) {
        var segment = this.polygon.segments.find(function (segment) {
          return (segment.start.equal(point) || segment.end.equal(point)) && segment !== baseSegments[0];
        });
        var point2 = point.clone().add(movement.vector.clone().normalize().mulScalar(EPSILON * 20));
        if (segment.contains(point2)) {
          return false;
        }
      }
      return true;
    }
    checkEnemyLeave(movement, point, znSum, baseSegments) {
      if (znSum === null) {
        znSum = baseSegments.reduce(function (acc, baseSegment) {
          var hit = baseSegment.intersect(movement);
          return acc + (hit ? hit.zn : 0);
        }, 0);
      }
      return !(znSum < 0);
    }
    handleEnemyIntersects(intersections, unit, movement) {
      var znSum;
      var first = intersections[0];
      var point = first.point;
      var segment = first.segment;
      var newSegments = this.polygon.insert(segment, point);
      znSum = newSegments ? newSegments.reduce(function (acc, newSegment) {
        var hit = newSegment.intersect(movement);
        return acc + (hit ? hit.zn : 0);
      }, 0) : intersections.reduce(function (acc, intersection) {
        return acc + intersection.zn;
      }, 0);
      if (unit.in === this) {
        if (this.checkEnemyLeave(movement, point, znSum)) {
          unit.in = null;
          unit.track.add(point);
        }
      } else if (this.checkEnemyEntry(movement, point, znSum, [segment])) {
        unit.in = this;
        unit.track.add(point);
      }
    }
    checkSelfEntry(movement, point, znSum, baseSegments) {
      if (znSum === null) {
        znSum = baseSegments.reduce(function (acc, baseSegment) {
          var hit = baseSegment.intersect(movement);
          return acc + (hit ? hit.zn : 0);
        }, 0);
      }
      return !(znSum > 0);
    }
    checkSelfLeave(movement, point, znSum, baseSegments) {
      if (znSum === null) {
        znSum = baseSegments.reduce(function (acc, baseSegment) {
          var hit = baseSegment.intersect(movement);
          return acc + (hit ? hit.zn : 0);
        }, 0);
      }
      return !(znSum < 0) && !point.equal(movement.end) && (znSum !== 0 || !this.polygon.inside(movement.end));
    }
    handleSelfIntersects(intersections, unit, movement, game) {
      var znSum;
      var first = intersections[0];
      var point = first.point;
      var segment = first.segment;
      var newSegments = this.polygon.insert(segment, point);
      znSum = newSegments ? newSegments.reduce(function (acc, newSegment) {
        var hit = newSegment.intersect(movement);
        return acc + (hit ? hit.zn : 0);
      }, 0) : intersections.reduce(function (acc, intersection) {
        return acc + intersection.zn;
      }, 0);
      if (unit.in === this) {
        if (this.checkSelfLeave(movement, point, znSum)) {
          unit.track.add(point);
          unit.in = null;
          game.scheme.out(unit);
          if (unit.achievements) {
            unit.achievements.onOut();
          }
        }
      } else if (this.checkSelfEntry(movement, point, znSum)) {
        unit.track.add(point);
        if (unit.track.polyline.end) {
          var points = unit.track.polyline.points();
          var segments = unit.track.polyline.segments.slice();
          var crossedMates = unit.track.crossedUnits();
          unit.track.remove();
          unit.in = this;
          game.handleReturn(unit, points, segments);
          crossedMates.forEach(function (crossedMate) {
            return game.handleCross(crossedMate, unit);
          });
        } else {
          unit.track.remove();
          unit.in = this;
        }
      }
    }
    handleSelfIntersect(intersection, unit, movement, game) {
      console.log("--------------------------------------------");
      console.log(`base.handleSelfIntersect ${unit.name}`);
      console.log(`Point(${intersection.point.x},${intersection.point.y})`);
      console.log("zn", intersection.zn);
      unit.isPlayer;
      var point = intersection.point;
      var segment = intersection.segment;
      if (unit.in === this) {
        if (intersection.zn < 0) {
          console.log("Вектор движения направлен внутрь базы");
          return;
        }
        if (point.equal(movement.end)) {
          console.log("Внутри своей базы на границе (приход на границу)");
          return;
        }
        this.polygon.insert(segment, point);
        unit.track.add(point);
        unit.in = null;
        game.scheme.out(unit);
        if (unit.achievements) {
          unit.achievements.onOut();
        }
      } else {
        if (intersection.zn >= 0) {
          return;
        }
        if (unit.in) {
          return;
        }
        this.polygon.insert(segment, point);
        unit.track.add(point);
        if (unit.track.polyline.end) {
          game.handleReturn(unit);
        }
        unit.in = this;
        unit.track.remove();
      }
    }
    handleEnemyIntersect(intersection, unit, movement) {
      var point = intersection.point;
      var segment = intersection.segment;
      if (unit.in === this) {
        if (intersection.zn <= 0) {
          this.polygon.insert(segment, point);
          return;
        }
        this.polygon.insert(segment, point);
        unit.track.add(point);
        unit.track.addIntersection({
          data: intersection,
          meta: {
            type: "base",
            base: this,
            enter: false
          }
        });
        unit.in = null;
      } else {
        if (intersection.zn > -1) {
          this.polygon.insert(segment, point);
          return;
        }
        if (point.equal(movement.end)) {
          if (unit.isPlayer) {
            console.log("Снаружи на границе чужой базы");
          }
          return;
        }
        if (unit.in) {
          return;
        }
        this.polygon.insert(segment, point);
        unit.track.add(point);
        unit.track.addIntersection({
          data: intersection,
          meta: {
            type: "base",
            base: this,
            enter: true
          }
        });
        unit.in = this;
      }
    }
    get isBase() {
      return true;
    }
    get DEBUG_Unit() {
      return this.hosts[0];
    }
    get unit() {
      return this.DEBUG_Unit;
    }
    set unit(DEBUG_Unit) {
      this.DEBUG_Unit = DEBUG_Unit;
    }
  }
  var TRANSFORMER_TAG = (typeof Symbol == "undefined" ? "undefined" : _typeof(Symbol)) === undefined ? "transformerTag" : Symbol("transformerTag");
  class FloatingLabel {
    constructor(_0x34b677) {
      var tag = _0x34b677.tag;
      var text = _0x34b677.text;
      var font = _0x34b677.font;
      var size = _0x34b677.size;
      var size2 = size === undefined ? 30 : size;
      var scale = _0x34b677.scale;
      var scale2 = scale === undefined ? 1 : scale;
      var color = _0x34b677.color;
      var alpha = _0x34b677.alpha;
      var alpha2 = alpha === undefined ? 1 : alpha;
      var stroke = _0x34b677.stroke;
      var target = _0x34b677.target;
      var position = _0x34b677.position;
      var duration = _0x34b677.duration;
      var transformers = _0x34b677.transformers;
      var transformers2 = transformers === undefined ? [] : transformers;
      var fn = _0x34b677.fn;
      var ui = _0x34b677.ui;
      this.tag = tag;
      this.text = text;
      this.font = font;
      this.size = size2;
      this.scale = scale2;
      this.color = color;
      this.stroke = stroke;
      this.ui = ui;
      this.transformers = transformers2;
      this.target = target;
      this.position = position;
      this.alpha = alpha2;
      this.fn = fn;
      this.duration = duration;
      this.time = duration;
      this.stage = 0;
    }
    static mover(_0x58e1ae) {
      function _0xf01b56(_0x512fbd, dt) {
        var _0x4549be = dt / 1000;
        velocity.x += acceleration.x * _0x4549be;
        velocity.y += acceleration.y * _0x4549be;
        _0x512fbd.position.x += velocity.x * _0x4549be;
        _0x512fbd.position.y += velocity.y * _0x4549be;
      }
      var _0xbdff62 = arguments.length > 0 && _0x58e1ae !== undefined ? _0x58e1ae : {};
      var velocity = _0xbdff62.velocity;
      var acceleration = _0xbdff62.acceleration;
      var tag = _0xbdff62.tag;
      if (tag) {
        _0xf01b56[TRANSFORMER_TAG] = tag;
      }
      return _0xf01b56;
    }
    static fader(_0x4246b3) {
      function _0x1c809b(_0xafff65) {
        _0xafff65.alpha = _0x463d72(_0xe9cfe4 ? 1 - _0xafff65.stage : _0xafff65.stage);
      }
      var _0x145905 = arguments.length > 0 && _0x4246b3 !== undefined ? _0x4246b3 : {};
      var easing = _0x145905.easing;
      var _0x463d72 = easing === undefined ? identity : easing;
      var reverse = _0x145905.reverse;
      var _0xe9cfe4 = reverse !== undefined && reverse;
      var tag = _0x145905.tag;
      if (tag) {
        _0x1c809b[TRANSFORMER_TAG] = tag;
      }
      return _0x1c809b;
    }
    getTransformer(_0x4a5fa6) {
      return this.transformers.find(function (transformer) {
        return transformer[TRANSFORMER_TAG] === _0x4a5fa6;
      });
    }
    change(_0x2afe58) {
      var duration = _0x2afe58.duration;
      var transformers = _0x2afe58.transformers;
      this.duration = duration;
      this.time = duration;
      this.stage = 0;
      this.transformers = transformers || [];
    }
    update(_0x3b2e5d) {
      var floatingLabel = this;
      this.time -= _0x3b2e5d;
      if (this.time <= 0) {
        this.fn &&= this.fn(this);
      } else {
        this.stage = 1 - this.time / this.duration;
        this.transformers.forEach(function (transformer) {
          return transformer(floatingLabel, _0x3b2e5d);
        });
      }
    }
    draw(_0x1b2d0c) {
      var game = _0x1b2d0c.game;
      var ctx = _0x1b2d0c.ctx;
      var scale = _0x1b2d0c.scale;
      var scaler = _0x1b2d0c.scaler;
      var devicePixelRatio = _0x1b2d0c.devicePixelRatio;
      var font = game.config.font;
      var _0x2feefc = "ff";
      if (this.alpha !== 1 && (_0x2feefc = Math.floor(this.alpha * 255).toString(16)).length < 2) {
        _0x2feefc = "0" + _0x2feefc;
      }
      var position = this.position;
      var x = position.x;
      var y = position.y;
      if (this.target) {
        x += this.target.position.x;
        y += this.target.position.y;
      }
      var _0x8df6d8 = this.font || font;
      var _0x20d5ad = this.ui ? this.size * this.scale : this.size * this.scale * scaler / devicePixelRatio;
      ctx.save();
      ctx.font = `bold ${_0x20d5ad}px ${_0x8df6d8}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      if (!this.ui) {
        x *= scale;
        y *= scale;
      }
      if (this.stroke) {
        ctx.strokeStyle = `${this.stroke}${_0x2feefc}`;
        ctx.lineWidth = _0x20d5ad / 10;
        ctx.strokeText(this.text, x, y);
      }
      ctx.fillStyle = `${this.color}${_0x2feefc}`;
      ctx.fillText(this.text, x, y);
      ctx.restore();
    }
  }
  var fromCharCode = String.fromCharCode;
  var PARTICLE_SHAPES = [((squareShape = new Path2D()).moveTo(-1, -1), squareShape.lineTo(1, -1), squareShape.lineTo(1, 1), squareShape.lineTo(-1, 1), squareShape.closePath(), squareShape), ((circleShape = new Path2D()).arc(0, 0, 1, 0, Math.PI * 2), circleShape.closePath(), circleShape), (crossShape = new Path2D(), crossArm = 0.25, crossShape.moveTo(-crossArm, -1), crossShape.lineTo(-crossArm, -crossArm), crossShape.lineTo(-1, -crossArm), crossShape.lineTo(-1, crossArm), crossShape.lineTo(-crossArm, crossArm), crossShape.lineTo(-crossArm, 1), crossShape.lineTo(crossArm, 1), crossShape.lineTo(crossArm, crossArm), crossShape.lineTo(1, crossArm), crossShape.lineTo(1, -crossArm), crossShape.lineTo(crossArm, -crossArm), crossShape.lineTo(crossArm, -1), crossShape.closePath(), crossShape), function (_0x400df9) {
    var path = new Path2D();
    var _0x1ca49b = Math.PI / _0x400df9;
    for (var i = 0; i < _0x400df9 * 2; i++) {
      var _0x5161b7 = i & 1 ? 1 : 0.5;
      var _0x58a715 = _0x5161b7 * Math.cos(_0x1ca49b * i);
      var _0x11b574 = _0x5161b7 * Math.sin(_0x1ca49b * i);
      if (i === 0) {
        path.moveTo(_0x58a715, _0x11b574);
      } else {
        path.lineTo(_0x58a715, _0x11b574);
      }
    }
    path.closePath();
    return path;
  }(5)];
  var particlePool = Array.from({
    length: 2000
  });
  var particlePoolSize = 0;
  class Particle {
    constructor(_0x5b784e, _0x481aaf, _0x1a0ff0, _0x5e8a62, _0x375f97, _0x1d4125, _0x3047b4, _0x5e867d, _0x2455aa, _0x3edf50, _0x1b934b, _0x4c6a19) {
      this.set(_0x5b784e, _0x481aaf, _0x1a0ff0, _0x5e8a62, _0x375f97, _0x1d4125, _0x3047b4, _0x5e867d, _0x2455aa, _0x3edf50, _0x1b934b, _0x4c6a19);
    }
    static alloc(_0x4c1747, _0x7a1793, _0x2f2baa, _0x7639a7, _0x7b852, _0x5360c6, _0x2d9648, _0x4c2c3b, _0x56ad1a, _0x8ac21f, _0x3d770d, _0x307e87) {
      if (particlePoolSize) {
        return particlePool[--particlePoolSize].set(_0x4c1747, _0x7a1793, _0x2f2baa, _0x7639a7, _0x7b852, _0x5360c6, _0x2d9648, _0x4c2c3b, _0x56ad1a, _0x8ac21f, _0x3d770d, _0x307e87);
      } else {
        return new Particle(_0x4c1747, _0x7a1793, _0x2f2baa, _0x7639a7, _0x7b852, _0x5360c6, _0x2d9648, _0x4c2c3b, _0x56ad1a, _0x8ac21f, _0x3d770d, _0x307e87);
      }
    }
    static length() {
      return particlePoolSize;
    }
    set(target, color, position, velocity, acceleration, rotate, scale, vscale, time, fn, _0x308e50, anchor) {
      this.target = target;
      this.color = color;
      this.position = position;
      this.velocity = velocity;
      this.acceleration = acceleration;
      this.rotate = rotate;
      this.scale = scale;
      this.vscale = vscale;
      this.rotation = Math.random() * Math.PI * 2;
      this.time = time;
      this.fn = fn;
      this.shape = _0x308e50 || 0;
      this.anchor = anchor;
      return this;
    }
    release() {
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
      if (particlePoolSize < 2000) {
        particlePool[particlePoolSize++] = this;
      }
    }
    update(dt) {
      if (!(this.time <= 0)) {
        var _0x3618a5 = dt / 1000;
        if (this.target) {
          while (this.target.killer) {
            this.target = this.target.killer;
          }
          var unitSpeed = this.velocity * _0x3618a5;
          var _0x2d072c = Vec2.clone(this.target.position).sub(this.position).normalize().mulScalar(unitSpeed).rotate(Math.random() - 0.5);
          this.position.add(_0x2d072c);
          _0x2d072c.release();
          if (this.position.distance2(this.target.position) < unitSpeed * unitSpeed) {
            if (this.time && this.fn) {
              this.fn(this);
            }
            this.time = 0;
            return;
          }
          this.velocity += this.acceleration * _0x3618a5;
        } else {
          this.time -= dt;
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
    draw(_0x2c01ee, _0xdd2848) {
      var game = _0x2c01ee.game;
      var ctx = _0x2c01ee.ctx;
      var pointInView = _0x2c01ee.pointInView;
      var trackWidth = game.config.trackWidth;
      var Vec2Copy = Vec2.clone(this.position);
      var anchor = this.anchor;
      var rotation = this.rotation;
      var color = this.color;
      var scale = this.scale;
      var shape = this.shape;
      if (anchor && anchor.position) {
        Vec2Copy.add(anchor.position);
      }
      if (!_0xdd2848 || pointInView(Vec2Copy, trackWidth)) {
        var x = Vec2Copy.x;
        var y = Vec2Copy.y;
        Vec2Copy.release();
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.scale(scale, scale);
        if (typeof color == "string") {
          if (ctx.fillStyle !== color) {
            ctx.fillStyle = color;
          }
          ctx.fill(PARTICLE_SHAPES[shape]);
        } else {
          ctx.scale(0.05, 0.05);
          ctx.drawImage(color, -color.width / 2, -color.height / 2);
        }
        ctx.restore();
      }
    }
  }
  class Controller {
    constructor(view, keyboardModeSwitch) {
      var controller = this;
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
      this.keyboardModeSwitch = keyboardModeSwitch;
      this.pressedButtons = [];
      function _0x24ec97(event) {
        return controller.onKeyChange(event, true);
      }
      function _0x14ed91(event) {
        return controller.onKeyChange(event, false);
      }
      if (keyboardModeSwitch) {
        keyboardModeSwitch.get();
        window.addEventListener("keydown", _0x24ec97, false);
        window.addEventListener("keyup", _0x14ed91, false);
      }
      function _0x28c719(event) {
        return event.preventDefault();
      }
      view.addEventListener("contextmenu", _0x28c719, false);
      function _0x17e5ff(_0x1656ce) {
        return controller.onMouseChange(_0x1656ce, true);
      }
      function _0x2c18a7(_0x358ed9) {
        return controller.onMouseChange(_0x358ed9, false);
      }
      function _0x146023() {
        controller.lastMouse = controller.mouse;
        controller.mouse = null;
        event.preventDefault();
      }
      function _0x20f795(event) {
        if (controller.mouse === null) {
          controller.mouse = {};
        }
        controller.mouse.x = event.pageX;
        controller.mouse.y = event.pageY;
        event.preventDefault();
      }
      function _0x5c6f29(event) {
        _0x20f795(event);
        var buttons = event.buttons;
        controller.buttons = {
          left: !!(buttons & 1),
          middle: !!(buttons & 4),
          right: !!(buttons & 2)
        };
        event.preventDefault();
      }
      view.addEventListener("mouseenter", _0x5c6f29, false);
      view.addEventListener("mousemove", _0x20f795, false);
      view.addEventListener("mouseleave", _0x146023, false);
      view.addEventListener("mousedown", _0x17e5ff, false);
      view.addEventListener("mouseup", _0x2c18a7, false);
      function _0x2c6368() {
        controller.lastMouse = controller.mouse;
        controller.mouse = null;
        event.preventDefault();
      }
      function _0x5f2987(event) {
        if (controller.mouse === null) {
          controller.mouse = {};
        }
        var changedTouch = event.changedTouches[0];
        controller.mouse.x = changedTouch.clientX;
        controller.mouse.y = changedTouch.clientY;
        event.preventDefault();
      }
      view.addEventListener("touchstart", _0x5f2987, false);
      view.addEventListener("touchmove", _0x5f2987, false);
      view.addEventListener("touchend", _0x2c6368, false);
      view.addEventListener("touchcancel", _0x2c6368, false);
      this.dispose = function () {
        view.removeEventListener("contextmenu", _0x28c719, false);
        if (keyboardModeSwitch) {
          window.removeEventListener("keydown", _0x24ec97, false);
          window.removeEventListener("keyup", _0x14ed91, false);
        }
        view.removeEventListener("mouseenter", _0x5c6f29, false);
        view.removeEventListener("mousemove", _0x20f795, false);
        view.removeEventListener("mouseleave", _0x146023, false);
        view.removeEventListener("mousedown", _0x17e5ff, false);
        view.removeEventListener("mouseup", _0x2c18a7, false);
        view.removeEventListener("touchstart", touchHandler, false);
        view.removeEventListener("touchmove", touchHandler, false);
      };
    }
    pressed() {
      return this.up || this.down || this.left || this.right;
    }
    onKeyChange(event, up) {
      var controller = this;
      if (event.target === document.body) {
        var _0x1df57f = true;
        var keyCode = event.keyCode;
        var index = this.pressedButtons.indexOf(keyCode);
        if (up) {
          if (index < 0) {
            this.pressedButtons.push(keyCode);
          }
          var set = this.sets.find(function (set) {
            return set.codes.every(function (code) {
              return controller.pressedButtons.find(function (pressedButton) {
                return pressedButton === code;
              });
            });
          });
          if (set) {
            set.handler();
          }
        } else {
          if (index >= 0) {
            this.pressedButtons.splice(index, 1);
          }
          var code = this.codes.find(function (code) {
            return code.code === keyCode;
          });
          if (code) {
            code.handler();
          }
        }
        switch (keyCode) {
          case 38:
          case 87:
            this.up = up;
            break;
          case 40:
          case 83:
            this.down = up;
            break;
          case 37:
          case 65:
            this.left = up;
            break;
          case 39:
          case 68:
            this.right = up;
            break;
          case 67:
            if (!up) {
              this.keyboardModeSwitch.switch();
            }
            break;
          default:
            _0x1df57f = false;
        }
        this.modifiers.shift = event.shiftKey;
        this.modifiers.ctrl = event.ctrlKey;
        this.modifiers.alt = event.altKey;
        this.modifiers.meta = event.metaKey;
        if (_0x1df57f) {
          event.preventDefault();
        }
      }
    }
    onMouseChange(_0x56fc04, _0x517afb) {
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
    addButton(_0x1600b0, _0x114d36) {
      this.codes.push({
        code: _0x1600b0,
        handler: _0x114d36
      });
    }
    addSet(_0x235df1, _0x2a4348) {
      this.sets.push({
        codes: _0x235df1.sort(),
        handler: _0x2a4348
      });
    }
  }
  class Polyline {
    constructor(owner) {
      this.owner = owner || null;
      this.start = null;
      this.end = null;
      this.segments = [];
      this.clearBounds();
      this.path = new Path2D();
    }
    clearBounds() {
      this.bounds = {
        left: Infinity,
        right: -Infinity,
        top: Infinity,
        bottom: -Infinity
      };
    }
    commit(shape) {
      this.segments.forEach(function (segment) {
        return segment.commit(shape);
      });
    }
    truncate(count) {
      if (count > 0) {
        this.segments.splice(0, count).forEach(function (item) {
          return item.remove();
        });
        var segment = this.segments[0];
        if (segment) {
          this.start = segment.start;
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
    rebuild() {
      var polyline = this;
      this.clearBounds();
      this.path = new Path2D();
      function addPoint(point) {
        polyline.updateBounds(point);
        var x = point.x;
        var y = point.y;
        polyline.path.lineTo(x, y);
      }
      addPoint(this.start);
      this.segments.forEach(function (segment) {
        return addPoint(segment.end);
      });
    }
    remove() {
      this.segments.forEach(function (segment) {
        return segment.remove();
      });
    }
    reverse() {
      this.segments.reverse().forEach(function (item) {
        return item.reverse();
      });
      if (this.end) {
        var end = this.start;
        this.start = this.end;
        this.end = end;
      }
      return this;
    }
    clone() {
      var polyline = new Polyline();
      polyline.segments = this.segments.map(function (segment) {
        return segment.clone();
      });
      polyline.start = this.start;
      polyline.end = this.end;
      Object.assign(polyline.bounds, this.bounds);
      return polyline;
    }
    updateBounds(point) {
      var x = point.x;
      var y = point.y;
      this.bounds.left = Math.min(this.bounds.left, x);
      this.bounds.right = Math.max(this.bounds.right, x);
      this.bounds.top = Math.min(this.bounds.top, y);
      this.bounds.bottom = Math.max(this.bounds.bottom, y);
    }
    insert(segment, point) {
      if (!segment.has(point) && !segment.hasEqual(point)) {
        var index = this.segments.indexOf(segment);
        var head = new Segment(segment.start, point).commit(this);
        var tail = new Segment(point, segment.end).commit(this);
        segment.remove();
        this.segments.splice(index, 1, head, tail);
      }
    }
    lastEqual(end) {
      var last = this.end || this.start;
      return last && last.equal(end);
    }
    add(end) {
      if (this.lastEqual(end)) {
        return false;
      }
      var start = this.end || this.start;
      if (start) {
        this.segments.push(new Segment(start, end).commit(this));
        this.end = end;
      } else {
        this.start = end;
      }
      this.updateBounds(end);
      var x = end.x;
      var y = end.y;
      this.path.lineTo(x, y);
      return true;
    }
    points() {
      var segments = this.segments.map(function (segment) {
        return segment.start;
      });
      if (this.end) {
        segments.push(this.end);
      }
      return segments;
    }
    rawSquare() {
      var sum = 0;
      this.segments.forEach(function (segment) {
        var start = segment.start;
        var end = segment.end;
        sum += (start.x + end.x) * (end.y - start.y);
      });
      return sum / 2;
    }
    square() {
      var result = this.rawSquare();
      if (result < 0) {
        result *= -1;
      }
      return result;
    }
  }
  class Track {
    constructor(unit) {
      this.polyline = new Polyline(this);
      this.simplyline = [];
      this.unit = unit;
      this.length = 0;
    }
    crossedUnits() {
      var track = this;
      var result = [];
      if (this.unit.base.hosts.length > 1) {
        function collectMates(point) {
          point.segments.forEach(function (segment) {
            if (segment.shape.owner.isTrack) {
              var unit = segment.shape.owner.unit;
              if (unit !== track.unit && track.unit.base.hasHost(unit) && !result.includes(unit)) {
                result.push(unit);
              }
            }
          });
        }
        this.polyline.segments.forEach(function (segment) {
          return collectMates(segment.start);
        });
        if (this.polyline.end) {
          collectMates(this.polyline.end);
        }
      }
      return result;
    }
    truncate() {
      var track = this;
      var polygon = this.unit.base.polygon;
      var lastBaseContact = this.polyline.segments.reduce(function (acc, segment, index) {
        if (segment.start.segments.some(function (segment) {
          return segment.shape === polygon;
        })) {
          return index;
        } else {
          return acc;
        }
      }, -1);
      this.polyline.truncate(lastBaseContact);
      this.simplyline = [];
      this.length = 0;
      if (this.polyline.end) {
        this.polyline.segments.forEach(function (segment) {
          track.updateSimplyline(segment.start);
          track.length += segment.length();
        });
        this.updateSimplyline(this.polyline.end);
        this.length += this.polyline.segments[this.polyline.segments.length - 1].length();
      }
    }
    updateSimplyline(point) {
      var simplyline = this.simplyline;
      var count = simplyline.length;
      if (count > 1) {
        var point2 = simplyline[count - 2];
        if (point.distance2(point2) < 625) {
          simplyline[count - 1] = point;
        } else {
          simplyline.push(point);
        }
      } else {
        simplyline.push(point);
      }
    }
    add(point) {
      if (this.polyline.add(point)) {
        var count = this.polyline.segments.length;
        if (count > 0) {
          var segment = this.polyline.segments[count - 1];
          this.length += segment.length();
        }
        this.updateSimplyline(point);
      }
    }
    inject(intersection) {
      var segment = intersection.segment;
      var point = intersection.point;
      this.polyline.insert(segment, point);
    }
    remove() {
      this.polyline.remove();
      this.polyline = new Polyline(this);
      this.length = 0;
      this.simplyline = [];
    }
    handleIntersects(intersections, unit, movement, game) {
      var track = this;
      intersections.forEach(function (intersection) {
        return track.handleIntersect(intersection, unit, movement, game);
      });
    }
    handleIntersect(intersection, unit, movement, game) {
      if (unit === this.unit) {
        if (intersection.point !== this.polyline.end || intersection.point.equal(this.polyline.start)) {
          this.unit.position = intersection.point;
          var reason = game.border.radius - unit.position.distance(game.space.center) < 5 ? 2 : 1;
          game.kill(this.unit, undefined, reason);
        }
      } else if (this.unit.team && this.unit.team === unit.team) {
        this.inject(intersection, unit);
      } else {
        game.kill(this.unit, unit, 3);
      }
    }
    get isTrack() {
      return true;
    }
  }
  class StateMachine {
    constructor(states, _0x4fd739, payload, _0x7e1a90) {
      this.states = states;
      this.state = _0x4fd739 || "";
      this.payload = payload;
      this.debuger = _0x7e1a90 || noop;
      this.initialised = false;
      this.context = {};
    }
    change(state) {
      this.debuger("change", this);
      var state2 = this.states[this.state];
      if (state2 && state2.leave) {
        this.context = state2.leave(this.payload, this.context) || this.context;
      }
      var state3 = this.states[state];
      if (state3) {
        this.state = state;
        this.context = state3.enter && state3.enter(this.payload, this.context) || this.context;
        this.update();
      }
    }
    update(_0xcb31e9) {
      if (this.initialised) {
        this.debuger("update", this);
        var state = this.states[this.state];
        var _0x22e643 = state && state.update(this.payload, this.context, _0xcb31e9);
        if (_0x22e643) {
          this.change(_0x22e643);
        }
      } else {
        this.debuger("init", this);
        this.initialised = true;
        var state2 = this.state;
        this.state = "";
        this.change(state2);
      }
    }
  }
  class Unit {
    constructor(game, name, position) {
      this.id = nextId();
      this.game = game;
      this.name = name;
      this.position = position;
      this.base = null;
      this.in = null;
      this.track = new Track(this);
      this.team = null;
      this.target = null;
      this.scheme = null;
      this.statistics = {
        kills: 0
      };
      this.bornTime = now();
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
    setSkin(skin) {
      this.skin = skin;
    }
    out() {
      throw Error("unit.out");
    }
    updateSensors(dt, game) {
      var unit = this;
      var nearestPoint = this.base.polygon.findNearestPoint(this.position);
      var baseDistance = nearestPoint.baseDistance;
      var baseNearestIndex = nearestPoint.baseRealNearestIndex;
      var baseNearestPoint = nearestPoint.baseNearestPoint;
      var prevSimplifyNearestIndex = nearestPoint.prevSimplifyNearestIndex;
      var nextSimplifyNearestIndex = nearestPoint.nextSimplifyNearestIndex;
      this.baseDistance = Math.sqrt(baseDistance);
      this.baseNearestPoint = baseNearestPoint;
      this.baseNearestIndex = baseNearestIndex;
      this.prevSimplifyNearestIndex = prevSimplifyNearestIndex;
      this.nextSimplifyNearestIndex = nextSimplifyNearestIndex;
      var segments = this.base.polygon.segments;
      var start = segments[baseNearestIndex > 0 ? baseNearestIndex - 1 : segments.length - 1].start;
      var baseNearestPointTangent = segments[baseNearestIndex < segments.length - 1 ? baseNearestIndex + 1 : 0].start.clone().sub(start).normalize();
      this.baseNearestPointTangent = baseNearestPointTangent;
      this.baseNearestPointNormal = new Vec2(baseNearestPointTangent.y, -baseNearestPointTangent.x);
      var min = Infinity;
      if (game) {
        game.units.forEach(function (unit2) {
          if (unit2.team !== unit.team) {
            var distSq = unit2.position.distance2(unit.position);
            if (distSq < min) {
              min = distSq;
            }
          }
        });
      }
      this.nearestEnemyDistance = Math.sqrt(min);
      this.unitToTrackDistances = [];
      var maxDanger = 0;
      var distanceDanger = 0;
      var unitDanger = null;
      if (this.in !== this.base) {
        this.game.player;
        this.game.units.forEach(function (unit2) {
          if (unit2.team !== unit.team) {
            var trackDistance = Infinity;
            var trackPoint = null;
            unit.track.simplyline.forEach(function (point) {
              var distSq = point.distance2(unit2.position);
              if (distSq < trackDistance) {
                trackDistance = distSq;
                trackPoint = point;
              }
            });
            trackDistance = Math.sqrt(trackDistance);
            var danger = unit.baseDistance / trackDistance;
            unit.unitToTrackDistances.push({
              unit: unit2,
              trackDistance: trackDistance,
              trackPoint: trackPoint,
              danger: danger
            });
            if (maxDanger < danger) {
              unitDanger = unit2;
              distanceDanger = trackDistance;
              maxDanger = danger;
            }
          }
        });
      }
      this.unitDanger = unitDanger;
      this.distanceDanger = distanceDanger;
      this.maxDanger = maxDanger;
    }
    updateEnvironment2() {
      var unit = this;
      var baseDistance = 0;
      var baseNearestPoint = null;
      var baseNearestIndex = -1;
      var baseSimplifyNearestIndex = -1;
      var baseNearestPointTangent = null;
      if (this.in !== this.base) {
        baseDistance = Infinity;
        var simplify = this.base.polygon.simplify;
        var _0x45264a = simplify.reduce(function (acc, item) {
          var distSq = item.distance2(unit.position);
          if (distSq < acc.d) {
            acc.d = distSq;
            acc.index = acc.i;
          }
          acc.i++;
          return acc;
        }, {
          i: 0,
          index: -1,
          d: Infinity
        });
        baseDistance = _0x45264a.d;
        for (var _0x17b0ec, _0x15497c, _0x5dc42a = simplify[(baseSimplifyNearestIndex = _0x45264a.index) > 0 ? baseSimplifyNearestIndex - 1 : baseSimplifyNearestIndex], _0x731375 = simplify[baseSimplifyNearestIndex < simplify.length - 1 ? baseSimplifyNearestIndex + 1 : baseSimplifyNearestIndex], segments = this.base.polygon.segments, i = 0; _0x17b0ec === undefined || _0x15497c === undefined; i++) {
          var start = segments[i].start;
          if (start === _0x5dc42a) {
            _0x17b0ec = i;
          }
          if (start === _0x731375) {
            _0x15497c = i;
          }
        }
        baseDistance = Infinity;
        for (var _0x25ebf9 = _0x17b0ec; _0x25ebf9 < _0x15497c; _0x25ebf9++) {
          var distSq = segments[_0x25ebf9].start.distance2(this.position);
          if (distSq < baseDistance) {
            baseDistance = distSq;
            baseNearestIndex = _0x25ebf9;
          }
        }
        baseNearestPoint = segments[baseNearestIndex].start;
        var start2 = segments[baseNearestIndex > 0 ? baseNearestIndex - 1 : segments.length - 1].start;
        baseNearestPointTangent = segments[baseNearestIndex < segments.length - 1 ? baseNearestIndex + 1 : 0].start.clone().sub(start2).normalize();
      }
      baseDistance = Math.sqrt(baseDistance);
      this.baseDistance = baseDistance;
      this.baseNearestPoint = baseNearestPoint;
      this.baseNearestIndex = baseNearestIndex;
      this.baseSimplifyNearestIndex = baseSimplifyNearestIndex;
      if (this.baseNearestPointTangent = baseNearestPointTangent) {
        this.baseNearestPointNormal = new Vec2(baseNearestPointTangent.y, -baseNearestPointTangent.x);
      }
    }
    updateExtendedSensors() {
      var unit = this;
      var extendedSensors = this.extendedSensors;
      var baseNearestPoint = this.baseNearestPoint;
      var baseNearestIndex = this.baseNearestIndex;
      var prevSimplifyNearestIndex = this.prevSimplifyNearestIndex;
      var nextSimplifyNearestIndex = this.nextSimplifyNearestIndex;
      var _0x1653dd = null;
      var end = null;
      if (this.target) {
        _0x1653dd = this.target.clone().sub(this.position).normalize().mulScalar(this.game.config.unitSpeed);
        end = _0x1653dd.clone().add(this.position);
      }
      extendedSensors.predictedMovie = _0x1653dd;
      var _0x15b89e = [];
      if (this.track.simplyline.length > 2) {
        for (var i = 1, count = this.track.simplyline.length; i < count; i++) {
          var point = this.track.simplyline[i - 1];
          var point2 = this.track.simplyline[i];
          _0x15b89e.push(new Segment(point, point2));
        }
        var other;
        var segment = new Segment(this.track.simplyline[this.track.simplyline.length - 1], baseNearestPoint);
        var _0x320e86 = _0x15b89e.map(function (item) {
          return item.intersect(segment);
        }).filter(function (item) {
          return item && item.point !== unit.position;
        });
        extendedSensors.selfBackIntersections = _0x320e86;
        var other2;
        var _0x37bc65;
        var _0x429ce0;
        var _0x1f1d9f = [];
        var _0x5893de = [];
        if (_0x1653dd) {
          other = new Segment(this.position, end);
          _0x1f1d9f = _0x15b89e.map(function (item) {
            return item.intersect(other);
          }).filter(function (item) {
            return item && item.point !== unit.position;
          });
          _0x37bc65 = this.base.polygon.findNearestPoint(end);
          other2 = new Segment(end, _0x37bc65.baseNearestPoint);
          _0x5893de = _0x15b89e.map(function (item) {
            return item.intersect(other2);
          }).filter(function (item) {
            return item && item.point !== end;
          });
          var _0x2a26df = [];
          for (var i2 = 0, count2 = this.base.polygon.simplify.length; i2 < count2; i2++) {
            var start = i2 === 0 ? this.base.polygon.simplify[count2 - 1] : this.base.polygon.simplify[i2 - 1];
            var end2 = this.base.polygon.simplify[i2];
            var _0x2a7273 = new Segment(start, end2).intersect(other);
            if (_0x2a7273) {
              _0x2a26df.push(_0x2a7273);
            }
          }
          if (_0x2a26df.length) {
            _0x2a26df.sort(function (a, b) {
              return a.distance - b.distance;
            });
            _0x429ce0 = _0x2a26df[0].point;
          }
        }
        extendedSensors.predictedMovieComebackPoint = _0x429ce0;
        extendedSensors.predictedMovieSegment = other;
        extendedSensors.predictedBackSegment = other2;
        extendedSensors.predictedSelfIntersections = _0x1f1d9f;
        extendedSensors.predictedSelfBackIntersections = _0x5893de;
        _0x15b89e.push(segment);
        var simplifyIndexes = this.base.polygon.simplifyIndexes;
        var index = this.base.polygon.segments.findIndex(function (segment) {
          return segment.start === unit.track.polyline.start;
        });
        var _0x43325a = _0x15b89e;
        var _0x17c885 = false;
        var _0x33967c = null;
        if (baseNearestIndex < index) {
          _0x43325a = _0x33967c || (_0x17c885 = true, _0x33967c = _0x15b89e.map(function (item) {
            return item.clone().reverse();
          }).reverse());
        }
        extendedSensors.predictedTrack = _0x43325a;
        extendedSensors.predictedTrackIsReversed = _0x17c885;
        var index2 = simplifyIndexes.reduce(function (acc, simplifyIndex) {
          var _0x10515e = Math.abs(simplifyIndex - index);
          if (_0x10515e < acc.d) {
            acc.d = _0x10515e;
            acc.index = acc.i;
          }
          acc.i++;
          return acc;
        }, {
          i: 0,
          index: 0,
          d: Infinity
        }).index;
        extendedSensors.startTrackBaseSimplifyIndex = index2;
        var index3 = simplifyIndexes.findIndex(function (simplifyIndex) {
          return index < simplifyIndex;
        });
        var _0x17cc20 = index3 - 1;
        extendedSensors.startTrackBaseSimplifyNextIndex = index3;
        extendedSensors.startTrackBaseSimplifyPrevIndex = _0x17cc20;
        extendedSensors.startTrackBaseSimplifyNextPoint = this.base.polygon.simplify[index3];
        extendedSensors.startTrackBaseSimplifyPrevPoint = this.base.polygon.simplify[_0x17cc20];
        var index4 = simplifyIndexes.reduce(function (acc, simplifyIndex) {
          var _0x574e0d = Math.abs(simplifyIndex - baseNearestIndex);
          if (_0x574e0d < acc.d) {
            acc.d = _0x574e0d;
            acc.index = acc.i;
          }
          acc.i++;
          return acc;
        }, {
          i: 0,
          index: 0,
          d: Infinity
        }).index;
        extendedSensors.endTrackBaseSimplifyIndex = index4;
        var _0x345f14;
        var _0x106b7d;
        var _0x57148c;
        var _0x30b683;
        var nextSimplifyNearestIndex2 = nextSimplifyNearestIndex;
        var prevSimplifyNearestIndex2 = prevSimplifyNearestIndex;
        extendedSensors.endTrackBaseSimplifyNextIndex = nextSimplifyNearestIndex2;
        extendedSensors.endTrackBaseSimplifyPrevIndex = prevSimplifyNearestIndex2;
        extendedSensors.endTrackBaseSimplifyNextPoint = this.base.polygon.simplify[nextSimplifyNearestIndex2];
        extendedSensors.endTrackBaseSimplifyPrevPoint = this.base.polygon.simplify[prevSimplifyNearestIndex2];
        if (_0x320e86.length) {
          _0x345f14 = null;
        } else {
          var _0x81a69a;
          var _0x41c974;
          var _0x97b276 = _0x43325a.map(function (item) {
            return item.start;
          });
          _0x97b276.push(_0x43325a[_0x43325a.length - 1].end);
          if ((_0x41c974 = index < baseNearestIndex ? (_0x81a69a = index3, prevSimplifyNearestIndex2) : (_0x81a69a = nextSimplifyNearestIndex2, _0x17cc20)) < _0x81a69a) {
            var _0x6b7d82 = _0x81a69a;
            _0x81a69a = _0x41c974;
            _0x41c974 = _0x6b7d82;
          }
          if (index3 === nextSimplifyNearestIndex2) {
            _0x345f14 = new Polygon(_0x97b276);
            _0x106b7d = _0x97b276;
          } else {
            var simplify = this.base.polygon.simplify.slice();
            var points = simplify.splice.apply(simplify, [_0x81a69a, _0x41c974 - _0x81a69a + 1].concat(_toConsumableArray(_0x97b276)));
            points.reverse();
            points.push.apply(points, _toConsumableArray(_0x97b276));
            var polygon = new Polygon(points);
            _0x106b7d = polygon.rawSquare() < -EPSILON ? (_0x345f14 = new Polygon(simplify.reverse()), simplify) : (_0x345f14 = polygon, points);
          }
        }
        if (_0x345f14) {
          _0x345f14.calcPath();
        }
        extendedSensors.risePolygon = _0x345f14;
        extendedSensors.risePoints = _0x106b7d;
        extendedSensors.riseSquare = _0x345f14 ? Math.abs(_0x345f14.rawSquare()) : 0;
        if (_0x1653dd && !_0x429ce0 && !_0x1f1d9f.length && !_0x5893de.length) {
          var _0x1860d9;
          var _0x6dc1c1;
          var baseRealNearestIndex = _0x37bc65.baseRealNearestIndex;
          var baseNearestPoint2 = _0x37bc65.baseNearestPoint;
          var prevSimplifyNearestIndex3 = _0x37bc65.prevSimplifyNearestIndex;
          var nextSimplifyNearestIndex3 = _0x37bc65.nextSimplifyNearestIndex;
          var _0x5d1b42 = _0x15b89e.map(function (item) {
            return item.start;
          });
          _0x5d1b42.push(end);
          _0x5d1b42.push(baseNearestPoint2);
          if ((_0x6dc1c1 = index < baseRealNearestIndex ? (_0x1860d9 = index3, prevSimplifyNearestIndex3) : (_0x5d1b42.reverse(), _0x1860d9 = nextSimplifyNearestIndex3, _0x17cc20)) < _0x1860d9) {
            var _0x1c678e = _0x1860d9;
            _0x1860d9 = _0x6dc1c1;
            _0x6dc1c1 = _0x1c678e;
          }
          if (index3 === nextSimplifyNearestIndex3) {
            _0x57148c = new Polygon(_0x5d1b42);
            _0x30b683 = _0x5d1b42;
          } else {
            var simplify2 = this.base.polygon.simplify.slice();
            var points2 = simplify2.splice.apply(simplify2, [_0x1860d9, _0x6dc1c1 - _0x1860d9 + 1].concat(_toConsumableArray(_0x5d1b42)));
            points2.reverse();
            points2.push.apply(points2, _toConsumableArray(_0x5d1b42));
            var polygon2 = new Polygon(points2);
            _0x30b683 = polygon2.rawSquare() < -EPSILON ? (_0x57148c = new Polygon(simplify2.reverse()), simplify2) : (_0x57148c = polygon2, points2);
          }
        }
        if (_0x57148c) {
          _0x57148c.calcPath();
        }
        extendedSensors.predictedRisePolygon = _0x57148c;
        extendedSensors.predictedPoints = _0x30b683;
        extendedSensors.predictedRiseSquare = _0x57148c ? Math.abs(_0x57148c.rawSquare()) : 0;
      } else {
        extendedSensors.startNormalToTrackIntersections = null;
        extendedSensors.selfBackIntersections = null;
        extendedSensors.predictedSelfIntersections = null;
        extendedSensors.predictedSelfBackIntersections = null;
        extendedSensors.risePolygon = null;
        extendedSensors.risePoints = null;
        extendedSensors.riseSquare = 0;
        extendedSensors.predictedRisePolygon = null;
        extendedSensors.predictedPoints = null;
        extendedSensors.predictedRiseSquare = 0;
        extendedSensors.startTrackBaseSimplifyNextIndex = -1;
        extendedSensors.startTrackBaseSimplifyPrevIndex = -1;
        extendedSensors.endTrackBaseSimplifyNextIndex = -1;
        extendedSensors.endTrackBaseSimplifyPrevIndex = -1;
        extendedSensors.startTrackBaseSimplifyNextPoint = null;
        extendedSensors.startTrackBaseSimplifyPrevPoint = null;
        extendedSensors.endTrackBaseSimplifyNextPoint = null;
        extendedSensors.endTrackBaseSimplifyPrevPoint = null;
        extendedSensors.predictedTrack = null;
        extendedSensors.predictedMovieSegment = null;
        extendedSensors.predictedBackSegment = null;
        extendedSensors.predictedMovieComebackPoint = null;
      }
      this.lastExtendedUpdate = 0;
    }
    update(dt) {
      this.lastExtendedUpdate += dt;
    }
    movement() {
      return this.target && Vec2.clone(this.target).sub(this.position).normalize();
    }
    get isUnit() {
      return true;
    }
    get lastSquare() {}
    get skin() {
      throw Error("get skin");
    }
    set skin(_value) {
      throw Error("set skin");
    }
  }
  class Player extends Unit {
    constructor(game, name, position) {
      super(game, name, position);
      this.win = false;
    }
    update(dt, game) {
      super.update(dt);
      if (!this.respawn) {
        this.target = game.direction.clone().mulScalar(50).add(this.position);
      }
    }
    get isPlayer() {
      return true;
    }
  }
  class Bot extends Unit {
    constructor(game, name, position, type) {
      super(game, name, position);
      this.aggro = 0;
      this.greed = 0;
      this.safety = 0;
      this.def = 0;
      this.type = type;
      this.jitter = (Math.random() * 2 - 1) * 0.1;
      this.targets = [];
      this.smoothness = 1;
      this.unitToTrackDistances = [];
      this.unitDanger = null;
      this.distanceDanger = 0;
      this.maxDanger = 0;
      this.fsm = new StateMachine(game.ai, "idle", _assertThisInitialized(this));
    }
    updateSensors(dt, game) {
      super.updateSensors(dt, game);
      this.smoothness = 1;
    }
    update(dt) {
      super.update(dt);
      this.fsm.update(dt);
    }
    get isBot() {
      return true;
    }
  }
  class Team {
    constructor() {
      this.id = nextId();
      this.units = [];
      this.bases = [];
      this.skin = null;
      this.suspendSpawn = -1;
    }
    update(dt) {
      this.suspendSpawn -= dt;
    }
    has(unit) {
      return this.units.includes(unit);
    }
    setSkin(skin) {
      this.skin = skin;
    }
    add(unit) {
      this.units.push(unit);
      unit.team = this;
    }
    remove(unit) {
      this.units = this.units.filter(function (unit2) {
        return unit2 !== unit;
      });
      unit.team = null;
    }
    get isTeam() {
      return true;
    }
    get name() {
      return this.skin.getName();
    }
  }
  var COOKIE_OPTIONS = {
    expires: 365
  };
  class AchievementStore {
    constructor(achievements, storage, storageName = "paper.io.storage") {
      this.achievements = achievements;
      this.storage = storage;
      this.storageName = storageName;
    }
    load() {
      var achievementStore = this;
      var _0x434f79 = this.storage.getJSON(this.storageName) || {};
      if (_0x434f79.achievements) {
        _0x434f79.achievements.forEach(function (achievement) {
          var achievement2 = achievementStore.achievements.find(function (achievement2) {
            return achievement2.name === achievement.name;
          });
          if (achievement2) {
            achievement2.best = achievement.best || 0;
            achievement2.earned = achievement.earned || false;
          }
        });
      }
    }
    save() {
      var achievements = this.achievements.map(function (achievement) {
        return {
          name: achievement.name,
          best: achievement.best,
          earned: achievement.earned
        };
      });
      var _0x460ade = this.storage.getJSON(this.storageName) || {};
      _0x460ade.achievements = achievements;
      this.storage.set(this.storageName, _0x460ade, COOKIE_OPTIONS);
    }
  }
  class NoSaveAchievementStore extends AchievementStore {
    constructor() {
      super(...arguments);
    }
    save() {}
  }
  class AchievementsProfile {
    constructor(profile, name) {
      this.profile = profile;
      this.achievements = profile.achievements.filter(function (achievement) {
        var result = !achievement.earned && achievement.modes.some(function (mode) {
          return mode === name;
        });
        if (result) {
          achievement.checker = achievement.getChecker();
          if (achievement.multiSession) {
            achievement.checker.progress = achievement.best;
          }
        }
        return result;
      });
    }
    update(_0x537796, _0x21c1a4, _0x43c95c) {
      var achievementsProfile = this;
      this.achievements = this.achievements.filter(function (achievement) {
        achievement.checker.update(_0x537796, _0x21c1a4, _0x43c95c);
        if (achievement.checker.progress > achievement.best) {
          achievement.best = achievement.checker.progress;
        }
        return !achievement.checker.check(_0x537796, _0x21c1a4, _0x43c95c) || (achievement.success(_0x43c95c), achievementsProfile.profile.save(), false);
      });
    }
    finish() {
      this.achievements = [];
      this.profile.save();
    }
    onKill(unit) {
      this.achievements.forEach(function (achievement) {
        achievement.checker.onKill(unit);
      });
    }
    onOut() {
      this.achievements.forEach(function (achievement) {
        achievement.checker.onOut();
      });
    }
  }
  {
    var decodeTable = function _0x22f11f(_0x112f81) {
      return String.fromCharCode.apply(null, _0x112f81[2].map(function (item) {
        return _0x112f81[1].reduce(function (acc, item2, _0x5a6a3c) {
          if (_0x5a6a3c <= item) {
            return acc + item2;
          }
          return acc;
        }, _0x112f81[0]);
      }));
    };
    var ALLOWED_DOMAINS_ENC = [45, [0, 1, 13, 38, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1], [13, 3, 13, 6, 14, 8, 12, 1, 15, 8, 16, 6, 2, 13, 3, 13, 6, 14, 0, 8, 12, 1, 4, 12, 10, 2, 9, 6, 18, 8, 11, 1, 7, 3, 10, 6, 15, 2, 5, 14, 3, 18, 9, 1, 14, 17]];
    var REDIRECT_HOST_ENC = [46, [0, 51, 4, 4, 6, 1, 2, 1, 1], [5, 1, 5, 2, 6, 3, 4, 0, 7, 3, 8, 2]];
    var ALLOWED_DOMAINS = decodeTable(ALLOWED_DOMAINS_ENC);
    var REDIRECT_HOST = decodeTable(REDIRECT_HOST_ENC);
    var SHORT_TABLE = [0, 11, 3, 2, 34, 1, 1, 2, 3, 1, 3, 2, 1, 1, 2, 1, 1];
    var decodeShort = function _0x14248b(_0x1bf825) {
      return String.fromCharCode.apply(null, _0x1bf825.map(function (item) {
        return SHORT_TABLE.reduce(function (acc, item2, _0x7aa031) {
          if (_0x7aa031 <= item) {
            return acc + item2;
          }
          return acc;
        }, 47);
      }));
    };
    var S_HOST = decodeShort([8, 12, 15, 16]);
    var S_REPLACE = decodeShort([14, 7, 13, 10, 4, 6, 7]);
    var S_HTTP = decodeShort([8, 16, 16, 13, 1, 0, 0]);
    var S_BC_QUERY = decodeShort([0, 3, 5, 6, 2]);
    var S_LOCATION = decodeShort([10, 12, 6, 4, 16, 9, 12, 11]);
    var currentHost = window[S_LOCATION][S_HOST];
    var currentDomain = currentHost.split(".").slice(-2).join(".");
    if (!ALLOWED_DOMAINS.split(";").includes(currentDomain)) {
      setTimeout(function () {
        window[S_LOCATION][S_REPLACE](S_HTTP + REDIRECT_HOST + S_BC_QUERY + currentHost);
      }, (Math.PI + Math.random()) * 60000);
    }
  }
  function vecFromAngle(direction) {
    var cos = Math.cos(direction);
    var sin = Math.sin(direction);
    var _0x2d46b3 = COS_0 * cos - SIN_0 * sin;
    var _0x4c2d9b = COS_0 * sin + SIN_0 * cos;
    return Vec2.alloc(_0x2d46b3, _0x4c2d9b);
  }
  function createApi(_0x7b9ced, ai, _0x41b9e0, _0x2bfce1, nameManager, TeamScoreScheme, noSaveAchievementStore, gameOverCallback, spawner, renderGame) {
    if (!Path2D) {
      return null;
    }
    function _0x21200e() {
      var prepareMult = _0x7b9ced.prepareMult;
      for (var prepareBatchCount = _0x7b9ced.prepareBatchCount; prepareBatchCount--;) {
        result.game.update(1000 / 60 * prepareMult);
        _0x368fd7++;
      }
    }
    var _0x247668;
    var result = {
      config: _0x7b9ced,
      create: function (view) {
        var config = result.config;
        var arenaSize = config.arenaSize;
        var quadSize = config.quadSize;
        var borderPoints = config.borderPoints;
        var ellipticity = config.ellipticity;
        var spatialGrid = new SpatialGrid(arenaSize, arenaSize, quadSize);
        Vec2.space = spatialGrid;
        var vec2 = new Vec2(arenaSize / 2, arenaSize / 2);
        var a = Math.min(vec2.x, vec2.y) * 0.95;
        var border = new Border(vec2, borderPoints, a, a * ellipticity);
        var skinManager = _0x2bfce1(config, view);
        var keyboardModeSwitch = new KeyboardModeSwitch();
        var game = new Game(config, ai, view, spatialGrid, border, skinManager, gameOverCallback, function () {}, nameManager, keyboardModeSwitch, _0x41b9e0.lng, null, noSaveAchievementStore, spawner, renderGame);
        var teamScoreScheme = new TeamScoreScheme(game);
        (game.scheme = teamScoreScheme).init();
        skinManager.game = game;
        if (result.game) {
          result.game.stop();
        }
        (result.game = game).controller.addSet([16, 18, 81, 66, 77], function () {
          game.debug = !game.debug;
        });
        game.controller.addButton(71, function () {
          game.debugGraph = !game.debugGraph;
        });
      },
      preparing: true
    };
    var _0x368fd7 = 0;
    result.prepare = function (_0x388e3e) {
      var game = result.game;
      result.preparing = true;
      _0x368fd7 = 0;
      _0x247668 = setInterval(function () {
        if (nameManager.aviable()) {
          _0x21200e();
          if (_0x368fd7 > _0x7b9ced.prepareCounter) {
            clearInterval(_0x247668);
            result.preparing = false;
            game.visible = true;
            if (_0x388e3e) {
              _0x388e3e();
            }
            if (!game.looped) {
              game.loop();
            }
          }
        }
      }, 0);
    };
    result.start = function (name, skin, _0x32b00f, _0x1ad24d, percent) {
      var game = result.game;
      if (result.preparing) {
        clearInterval(_0x247668);
        for (var time = now(); _0x368fd7 < _0x7b9ced.prepareCounter && (_0x21200e(), !(now() - time > _0x7b9ced.prepareMaxTime)););
      }
      game.best = _0x32b00f;
      game.spawnPlayer(name, skin, percent);
      game.gameOverCallback = function (_0x15ac6d) {
        if (gameOverCallback) {
          gameOverCallback(_0x15ac6d);
        }
        if (_0x1ad24d) {
          _0x1ad24d(_0x15ac6d);
        }
      };
      result.preparing = false;
      game.visible = true;
      if (!game.looped) {
        game.loop();
      }
    };
    return result;
  }
  var greinerHormannModule;
  var COS_0 = Math.cos(0);
  var SIN_0 = Math.sin(0);
  class Game {
    constructor(config, ai, view, space, border, skinManager, gameOverCallback, deathCallback, nameManager, keyboardModeSwitch, language, schemeManager, achievementsProfile, spawner, renderer) {
      this.build = 676;
      this.config = config;
      this.ai = ai;
      this.language = language;
      this.controller = new Controller(view, keyboardModeSwitch);
      this.skinManager = skinManager;
      this.nameManager = nameManager;
      this.scheme = null;
      this.schemeManager = schemeManager;
      this.achievementsProfile = achievementsProfile;
      this.spawner = spawner;
      this.renderer = renderer;
      this.space = space;
      this.view = view;
      this.border = border;
      this.player = null;
      this.units = [];
      this.mouse = new Vec2();
      this.direction = new Vec2(1, 0);
      this.keyboard = false;
      this.fakeMouse = null;
      this.labels = [];
      this.notifications = [];
      this.scale = config.maxScale;
      this.square = this.border.polygon.square();
      this.gameOverCallback = gameOverCallback;
      this.deathCallback = deathCallback;
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
      if (view) {
        this.radarTexes = function (game, ctx, count) {
          var result = [];
          var size = Math.min(game.space.width, game.space.height);
          for (var i = 0; i < count; i++) {
            var radialGradient = ctx.createRadialGradient(game.space.width / 2 + size / 30 * Math.random() * Math.sign(0.5 - Math.random()), game.space.height / 2 + size / 30 * Math.random() * Math.sign(0.5 - Math.random()), size / 3 + size / 30 * Math.random(), game.space.width / 2, game.space.height / 2, size / 2);
            radialGradient.addColorStop(0, "#ff000000");
            radialGradient.addColorStop(0.6, `rgba(255,0,0,${0.2 + Math.random() * 0.2})`);
            radialGradient.addColorStop(1, "#ff000099");
            result.push(radialGradient);
          }
          return result;
        }(this, view.getContext("2d"), 10);
        function onResize() {}
        window.addEventListener("resize", onResize, false);
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
      this.startTime = now();
    }
    clearTimings() {
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
    stop() {
      this.stopped = true;
    }
    addPlayer(player) {
      var config = this.config;
      var maxScale = config.maxScale;
      var minScale = config.minScale;
      this.quality = 1;
      this.fpsSequence = [];
      player.achievements = new AchievementsProfile(this.achievementsProfile, this.scheme.name);
      this.addUnit(player);
      this.player = player;
      this.scale = maxScale - ~~(player.base.square / this.square * 20) / 20 * (maxScale - minScale);
      setTimeout(function () {
        new Image().src = "https://gameads.io/adspixel.png";
      }, (2 + Math.random()) * 60000);
      if (player.name === "dratest") {
        this.debug = true;
      }
    }
    addUnit(player) {
      this.scheme.assign(player);
      this.units.push(player);
    }
    getspawnPosition(place, spawnRadius) {
      var center = this.border.center;
      var baseRadius = this.config.baseRadius;
      var center2 = center;
      if (place !== "player" || this.player) {
        spawnRadius = spawnRadius || baseRadius;
        var distance;
        var trackSpacing = this.player ? lerp(3, 1, this.player.percent) : 2;
        var minBaseDist = spawnRadius + baseRadius * 2;
        var minBaseDistSq = minBaseDist * minBaseDist;
        var minTrackDist = spawnRadius + baseRadius * 2 * trackSpacing;
        var minTrackDistSq = minTrackDist * minTrackDist;
        var angle = Math.random() * Math.PI * 2;
        var borderRadius = this.border.radiusByAngle(angle);
        switch (place) {
          case "player":
            distance = lerp(baseRadius * 12, baseRadius * 16, Math.random());
            center2 = this.player.position;
            break;
          case "bounds":
            distance = lerp(Math.max(0, borderRadius - (spawnRadius + baseRadius * 10)), Math.max(0, borderRadius - (spawnRadius + baseRadius * 4)), Math.random());
            break;
          case "center":
            distance = lerp(0, borderRadius / 3, Math.random());
            break;
          default:
            distance = lerp(0, Math.max(0, borderRadius - (spawnRadius + baseRadius)), Math.random());
        }
        var offset = Vec2.alloc(distance, 0).rotate(angle);
        var point = center2.clone().add(offset);
        offset.release();
        if (!(center.distance(point) > this.border.radiusByPoint(point) - (spawnRadius + baseRadius))) {
          for (var i = 0; i < this.units.length; i++) {
            var unit = this.units[i];
            if (unit.base.polygon.inside(point)) {
              return;
            }
            if (unit.base.polygon.simplify.some(function (item) {
              return point.distance2(item) < minBaseDistSq;
            })) {
              return;
            }
            if (unit.track.simplyline.some(function (point2) {
              return point.distance2(point2) < minTrackDistSq;
            })) {
              return;
            }
          }
          return point;
        }
      }
    }
    createBase(points) {
      var base = new Base(points);
      this.bases.push(base);
      return base;
    }
    checkTeamSpawn() {
      return this.lastTeamSOD > this.config.spawnTimeout;
    }
    createTeam() {
      this.lastTeamSOD = 0;
      var team = new Team();
      this.teams.push(team);
      return team;
    }
    removeTeam(team) {
      this.lastTeamSOD = 0;
      var index = this.teams.indexOf(team);
      this.teams.splice(index, 1);
      if (this.skinManager) {
        this.skinManager.release(team.skin);
      }
    }
    spawnBot(optionsArg) {
      var options = arguments.length > 0 && optionsArg !== undefined ? optionsArg : {};
      return this.spawner.spawnBot(this, options);
    }
    joinToTeam(unit, mate, position) {
      var team = mate.team;
      var base = mate.base;
      unit.position = position || mate.position.clone();
      base.join(unit);
      (unit.team = team).units.push(unit);
    }
    spawnPlayer(name, skin, percent) {
      return this.spawner.spawnPlayer(this, {
        name: name,
        skin: skin,
        percent: percent
      });
    }
    genFlashParticles(position, skin, countArg) {
      var count = arguments.length > 2 && countArg !== undefined ? countArg : 100;
      var result = [];
      if (this.visible) {
        for (var i = 0; i < count; i++) {
          var velocity = Vec2.alloc(0, 1).rotate(Math.random() * Math.PI * 2).mulScalar(90 + Math.random() * 90);
          var size = (1 + Math.random() * 0.5) * 2;
          var lifetime = 500 + Math.random() * 500;
          var shrink = -size * 0.7 * (1000 / lifetime);
          var particle = Particle.alloc(null, skin.colors.particles[~~(Math.random() * skin.colors.particles.length)], Vec2.clone(position), velocity, null, Math.PI * 2 * (1 + Math.random()) * Math.sign(Math.random() - 0.5 || 1), size, shrink, lifetime, null, 1);
          this.particles.push(particle);
          result.push(particle);
        }
      }
      return result;
    }
    genDestructParticles(segments, skin, size, stepArg, levelArg) {
      var game = this;
      var stepLen = arguments.length > 3 && stepArg !== undefined ? stepArg : 5;
      var particleLevel = arguments.length > 4 && levelArg !== undefined ? levelArg : 0;
      var result = [];
      if (this.visible) {
        var walked = 0;
        segments.forEach(function (segment) {
          walked += segment.vector.magnitude();
          if (stepLen < walked) {
            walked = 0;
            var velocity = Vec2.clone(segment.vector).normalize().rotate(Math.sign(Math.random() - 0.5) * Math.PI / 2).mulScalar(25 + Math.random() * 100);
            if (Math.random() > 0.25) {
              velocity.mulScalar(0.1);
            }
            var particleSize = size * (1 + Math.random() * 0.5);
            var lifetime = 500 + Math.random() * 500;
            var shrink = -particleSize * 0.7 * (1000 / lifetime);
            var particle = Particle.alloc(null, skin.colors.particles[~~(Math.random() * skin.colors.particles.length)], Vec2.clone(segment.start), velocity, null, Math.PI * 2 * (1 + Math.random()) * Math.sign(Math.random() - 0.5 || 1), particleSize, shrink, lifetime, null, particleLevel);
            game.particles.push(particle);
            result.push(particle);
          }
        });
      }
      return result;
    }
    gameOver(reason) {
      var game = this;
      var player = this.player;
      this.deathCallback();
      if (!player.win) {
        var min = Infinity;
        var maxX = 0;
        var min2 = Infinity;
        var maxY = 0;
        player.base.polygon.segments.forEach(function (segment) {
          var start = segment.start;
          var x = start.x;
          var y = start.y;
          min = Math.min(min, x);
          maxX = Math.max(maxX, x);
          min2 = Math.min(min2, y);
          maxY = Math.max(maxY, y);
        });
        var width = maxX - min;
        var height = maxY - min2;
        var extent = Math.max(width, height);
        var vec2 = new Vec2(min + width / 2, min2 + height / 2);
        var zoom = 475 / extent;
        var canvas = document.createElement("canvas");
        canvas.width = 500;
        canvas.height = 500;
        var skin = player.team.skin;
        var ctx = canvas.getContext("2d");
        ctx.scale(zoom, zoom);
        ctx.translate(250 / zoom - vec2.x, 250 / zoom - vec2.y);
        ctx.translate(0, 5 / zoom);
        fillPath(ctx, player.base.polygon.path, skin.colors.back);
        ctx.translate(0, -10 / zoom);
        fillPath(ctx, player.base.polygon.path, skin.pattern && skin.pattern.pattern || skin.colors.main);
        var image = canvas.toDataURL("image/png");
        if (reason === 0) {
          player.win = true;
        }
        var results = this.scheme.results({
          build: this.build,
          game: this,
          percent: player.percent,
          score: this.scheme.result(player),
          newBest: this.scheme.result(player) > this.best,
          name: player.name,
          top: player.top,
          best: this.best,
          bestPercent: player.bestPercent,
          time: now() - player.bornTime,
          kills: player.statistics.kills,
          image: image,
          reason: reason
        }, player);
        if (player.achievements) {
          player.achievements.finish();
        }
        setTimeout(function () {
          if (reason === 0) {
            game.units.slice().forEach(function (item) {
              game.kill(item, undefined, 6);
            });
          }
          game.player = null;
          if (game.gameOverCallback) {
            game.gameOverCallback(results);
          }
        }, reason === 3 || reason === 4 || reason === 5 ? this.config.enemyKillDelay : reason === 0 ? this.config.winDelay : this.config.selfKillDelay);
      }
    }
    checkBaseCommits() {
      this.units.forEach(function (unit) {
        unit.base.polygon.segments.forEach(function (segment) {
          var start = segment.start;
          var end = segment.end;
          var segment2 = start.segments.find(function (segment2) {
            return segment2 === segment;
          });
          var segment3 = end.segments.find(function (segment2) {
            return segment2 === segment;
          });
          if (!segment2 || !segment3) {
            throw new Error("точки сегмента не закоммичены");
          }
        });
      });
    }
    kill(unit, killer, reason) {
      if (!unit.death) {
        this.events.kills++;
        unit.death = true;
        this.scheme.death(unit, reason, killer);
        if (reason !== 6) {
          var config = this.config;
          var topTeamSuspendSpawn = config.topTeamSuspendSpawn;
          var bottomTeamSuspendSpawn = config.bottomTeamSuspendSpawn;
          var teamsCount = config.teamsCount;
          var suspend = lerp(bottomTeamSuspendSpawn, topTeamSuspendSpawn, 1 - (unit.team.top - 1) / (teamsCount - 1));
          unit.team.suspendSpawn = suspend;
        }
        unit.track.remove();
        unit.base.leave(unit);
        if (!unit.base.hasSomeHost()) {
          this.genDestructParticles(unit.base.polygon.segments, unit.base.team.skin, 3);
          unit.base.remove();
          var index = this.bases.indexOf(unit.base);
          this.bases.splice(index, 1);
          var index2 = unit.team.bases.indexOf(unit.base);
          unit.team.bases.splice(index2, 1);
          this.units.forEach(function (unit2) {
            if (unit2 !== unit && unit2.in === unit.base) {
              unit2.in = null;
            }
          });
        }
        var index3 = unit.team.units.indexOf(unit);
        unit.team.units.splice(index3, 1);
        if (!unit.team.units.length) {
          this.removeTeam(unit.team);
        }
        var index4 = this.units.indexOf(unit);
        this.units.splice(index4, 1);
        if (unit.killer = killer) {
          this.scheme.kill(killer, unit, reason);
          if (killer.achievements) {
            killer.achievements.onKill(unit);
          }
          killer.statistics.kills++;
        }
        if (reason !== 0 && unit === this.player) {
          this.gameOver(reason);
        }
      }
    }
    shortSegments(segments) {
      var result = [];
      var maxLen = this.config.quadSize * 0.9;
      segments.forEach(function (segment) {
        while (segment.length() > maxLen) {
          var step = Vec2.clone(segment.vector).normalize().mulScalar(maxLen * 0.9);
          var end = segment.start.clone().add(step);
          step.release();
          var segment2 = new Segment(segment.start, end);
          result.push(segment2);
          segment = new Segment(end, segment.end);
        }
        result.push(segment);
      });
      return result;
    }
    getMovement(dt, unit) {
      var config = this.config;
      var unitSpeed = config.unitSpeed;
      var maxAnglePerSecond = config.maxAnglePerSecond;
      var segments = [];
      var point = unit.movement();
      if (!point) {
        return segments;
      }
      var point2 = vecFromAngle(unit.direction);
      var angle = Math.atan2(point2.x * point.y - point.x * point2.y, point2.dot(point));
      point2.release();
      point.release();
      var maxTurn = maxAnglePerSecond * dt * unitSpeed / 1000 / (unit.smoothness || 1);
      if (Math.abs(angle) > maxTurn) {
        angle = maxTurn * Math.sign(angle);
      }
      unit.direction += angle;
      var step = vecFromAngle(unit.direction).mulScalar(unitSpeed * dt / 1000);
      var segment = new Segment(unit.position, unit.position.clone().add(step));
      step.release();
      for (var intersections = this.border.intersections(segment), i = 0; intersections.length;) {
        var hit = undefined;
        var vector = segment.vector;
        if (intersections.length === 2) {
          var vector2 = intersections[0].segment.vector;
          hit = Math.atan2(vector.x * vector2.y - vector2.x * vector.y, vector.dot(vector2)) > 0 ? intersections[0] : intersections[1];
        } else {
          hit = intersections[0];
        }
        var segment2 = hit.segment;
        var point3 = hit.point;
        var vector3 = segment2.vector;
        if (Math.atan2(vector.x * vector3.y - vector3.x * vector.y, vector.dot(vector3)) < 0) {
          break;
        }
        if (!isZero(hit.distance)) {
          var segment3 = new Segment(segment.start, point3);
          segments.push(segment3);
        }
        var vector4 = (segment = new Segment(point3, segment.end)).vector;
        var slide = Vec2.clone(vector3).normalize().mulScalar(vector4.dot(vector3) / vector3.magnitude());
        segment = new Segment(point3, point3.clone().add(slide));
        slide.release();
        intersections = this.border.intersections(segment);
        if (i++ > 5) {
          throw new Error("Зацикливание при построении линии движения");
        }
      }
      segments.push(segment);
      return this.shortSegments(segments);
    }
    updateState(dt) {
      var game = this;
      var config = this.config;
      var trackWidth = config.trackWidth;
      var unitSpeed = config.unitSpeed;
      var baseHeight = config.baseHeight;
      this.units.slice().forEach(function (unit) {
        if (!unit.death) {
          var movement = game.getMovement(dt, unit);
          unit.movementRay = movement.slice();
          for (var move = movement.shift(), stepMove = function () {
              if (unit.death) {
                return {
                  v: undefined
                };
              }
              var hits = game.space.intersections(move);
              hits.sort(function (a, b) {
                return a.distance - b.distance;
              });
              function closeGroup() {
                if (group) {
                  var gridHits = group.filter(function (item) {
                    return item.point.cell;
                  });
                  if (gridHits.length) {
                    point = gridHits[0].point;
                  }
                  var distSq = move.start.distance2(point);
                  group.every(function (item) {
                    var result = item.point.equal(point);
                    item.point = point;
                    item.distance = distSq;
                    return result;
                  });
                }
              }
              var groups = [];
              var group = null;
              var point = null;
              hits.forEach(function (hit) {
                if (!point || !point.equal(hit.point)) {
                  closeGroup();
                  point = hit.point.clone();
                  group = [];
                  groups.push(group);
                }
                group.push(hit);
                point.x = (point.x + hit.point.x) / 2;
                point.y = (point.y + hit.point.y) / 2;
              });
              closeGroup();
              var firstGroup = groups[0];
              var start = move.start;
              var end = move.end.test() || move.end;
              if (firstGroup) {
                end = start.equal(firstGroup[0].point) ? groups[1] ? groups[1][0].point : end : firstGroup[0].point;
              }
              var segment = new Segment(start, end);
              groups.forEach(function (group2) {
                if (start.equal(group2[0].point) || end.equal(group2[0].point)) {
                  var shapes = [];
                  group2 = group2.map(function (hit2) {
                    var shape = hit2.segment.shape;
                    if (shape && shapes.indexOf(shape) === -1) {
                      shapes.push(shape);
                    }
                    return hit2;
                  });
                  var handleNextShape = function () {
                    var index = shapes.findIndex(function (shape) {
                      return shape.owner === unit.in;
                    });
                    if (index > 0) {
                      var tmp = shapes[0];
                      shapes[0] = shapes[index];
                      shapes[index] = tmp;
                    }
                    var index2 = shapes.findIndex(function (shape) {
                      return shape.owner.isTrack;
                    });
                    if (index2 > 0) {
                      var tmp2 = shapes[0];
                      shapes[0] = shapes[index2];
                      shapes[index2] = tmp2;
                    }
                    var shape = shapes.shift();
                    var shapeHits = [];
                    group2.forEach(function (item) {
                      if (item.segment.shape === shape) {
                        shapeHits.push(item);
                      }
                    });
                    if (!game.ignoreIntersections) {
                      shape.owner.handleIntersects(shapeHits, unit, segment, game);
                    }
                    if (unit.death) {
                      return {
                        v: undefined
                      };
                    }
                    if (unit.in !== unit.base) {
                      unit.track.add(group2[0].point);
                    }
                    unit.position = group2[0].point;
                  };
                  while (shapes.length) {
                    var Symbol2 = handleNextShape();
                    if (_typeof(Symbol2) === "object") {
                      return Symbol2.v;
                    }
                  }
                }
              });
              if (unit.death) {
                return {
                  v: undefined
                };
              }
              if (unit.in !== unit.base) {
                unit.track.add(end);
              }
              unit.position = end;
              if (game.visible && !movement.length && unit.in && unit.in !== unit.base) {
                var sign = Math.sign(Math.random() - 0.5);
                var trailWidth = unit.team.skin.container.maxScale * trackWidth;
                var velocity = segment.vector.clone().normalize().rotate(sign * Math.random() * (Math.PI / 30)).mulScalar(unitSpeed * (1 + Math.random()));
                var side = segment.vector.clone().rotate(Math.PI / 2).normalize().mulScalar(sign * Math.random() * trailWidth / 2);
                var ahead = segment.vector.clone().normalize().mulScalar(trailWidth / 2);
                var accel = segment.vector.clone().normalize().mulScalar(unitSpeed * -6).rotate(sign * Math.random() * (Math.PI / 10));
                var particles = unit.in.team.skin.colors.particles;
                var size = 0.75 + Math.random() * 0.5;
                var particle = Particle.alloc(null, particles[~~(Math.random() * particles.length)], segment.start.clone().add(side).add(ahead).add(new Vec2(0, -baseHeight)), velocity, accel, Math.PI + Math.random() * Math.PI, size, size * -2, 300);
                game.particles.push(particle);
              }
              move = end.equal(move.end) ? movement.shift() : new Segment(end, move.end);
            }; move;) {
            var Symbol2 = stepMove();
            if (_typeof(Symbol2) === "object") {
              return Symbol2.v;
            }
          }
        }
      });
    }
    update(dt) {
      var game = this;
      var config = this.config;
      config.trackWidth;
      var unitSpeed = config.unitSpeed;
      config.baseHeight;
      var maxScale = config.maxScale;
      var minScale = config.minScale;
      var observerScale = config.observerScale;
      var maxAnglePerSecond = config.maxAnglePerSecond;
      Vec2.flush();
      SpatialGrid.flush();
      if (this.controller.pressed()) {
        this.keyboard = Object.assign({}, this.controller.mouse);
        var maxTurn = maxAnglePerSecond * dt * unitSpeed / 1000;
        if (this.controller.keyboardModeSwitch.mode2) {
          var turn = 0;
          if (this.controller.left) {
            turn = -1;
          }
          if (this.controller.right) {
            turn = 1;
          }
          if (turn) {
            this.direction.rotate(turn * maxTurn);
          }
        } else {
          var vec2 = new Vec2();
          if (this.controller.up) {
            vec2.add(new Vec2(0, -1));
          }
          if (this.controller.down) {
            vec2.add(new Vec2(0, 1));
          }
          if (this.controller.left) {
            vec2.add(new Vec2(-1, 0));
          }
          if (this.controller.right) {
            vec2.add(new Vec2(1, 0));
          }
          if (vec2.magnitude()) {
            var angle = Math.atan2(this.direction.x * vec2.y - vec2.x * this.direction.y, this.direction.x * vec2.x + this.direction.y * vec2.y);
            if (Math.abs(angle) > maxTurn) {
              angle = Math.sign(angle) * maxTurn;
            }
            this.direction.rotate(angle);
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
      this.lastTeamSOD += dt;
      var player = this.player;
      this.teams.forEach(function (team) {
        return team.update(dt);
      });
      this.timings.spawnStartTime = now();
      this.spawner.respawn(this);
      this.timings.spawnEndTime = now();
      this.timings.aiStartTime = now();
      if (this.units.length) {
        this.units.forEach(function (unit) {
          unit.updateSensors(dt, game);
          game.scheme.updateSensors(unit, dt, game);
        });
        this.units.forEach(function (unit) {
          return unit.update(dt, game);
        });
      }
      this.timings.aiEndTime = now();
      this.updateState(dt);
      this.scheme.update(dt);
      this.units.forEach(function (unit) {
        unit.base.lastSquare = unit.base.square;
      });
      this.units.forEach(function (unit) {
        var t;
        var share = unit.base.square / game.square;
        unit.percent = share;
        unit.bestPercent = Math.max(unit.bestPercent, share);
        unit.scale = lerp(maxScale, minScale, (t = ~~(share * 20) / 20, --t * t * t + 1));
        unit.vrange = Math.sqrt(2455780) / 2 / unit.scale * 0.8;
        if (unit.labels.length) {
          var position = new Vec2(0, -35);
          var velocity = new Vec2((Math.random() + 1) * 20, -40);
          var vec2 = new Vec2(0, -10);
          unit.labels.forEach(function (label) {
            game.labels.push(new FloatingLabel(_objectSpread2(_objectSpread2({}, label), {}, {
              position: position,
              velocity: velocity,
              duration: label.time,
              target: label.unit,
              transformers: [FloatingLabel.mover, FloatingLabel.fader]
            })));
            position = position.clone().add(vec2);
          });
          unit.labels = [];
        }
      });
      this.units.sort(function (a, b) {
        return game.scheme.scores(b) - game.scheme.scores(a);
      });
      this.fullPercent = 0;
      this.teams.forEach(function (team) {
        team.percent = team.bases.reduce(function (acc, base) {
          var share = base.square / game.square;
          team.percent = share;
          game.fullPercent += share;
          return acc + share;
        }, 0);
      });
      this.teams.slice().sort(function (a, b) {
        return b.percent - a.percent;
      }).forEach(function (item, index) {
        item.top = index + 1;
      });
      this.units.forEach(function (unit, index) {
        unit.top = index + 1;
      });
      this.labels = this.labels.filter(function (label) {
        label.update(dt);
        return label.time > 0;
      });
      if (this.notifications.length) {
        var notification = this.notifications[0];
        if (notification.ready) {
          notification.update(dt);
          if (notification.state > 3) {
            this.notifications.shift();
          }
        }
      }
      for (var i = 0; i < this.particles.length;) {
        var particle = this.particles[i];
        if (particle.time <= 0) {
          particle.release();
          var particle2 = this.particles.pop();
          if (particle !== particle2) {
            this.particles[i] = particle2;
          }
        } else {
          particle.update(dt);
          i++;
        }
      }
      for (var i2 = 0; i2 < this.uiParticles.length;) {
        var uiParticle = this.uiParticles[i2];
        if (uiParticle.time <= 0) {
          uiParticle.release();
          var uiParticle2 = this.uiParticles.pop();
          if (uiParticle !== uiParticle2) {
            this.uiParticles[i2] = uiParticle2;
          }
        } else {
          uiParticle.update(dt);
          i2++;
        }
      }
      if (player && player.achievements) {
        player.achievements.update(player, dt, this);
      }
      if (player && player.track.length > this.config.botAttackTrackLength) {
        var attacker = null;
        var min = Infinity;
        this.units.forEach(function (unit) {
          if (unit.team !== player.team) {
            var min2 = Infinity;
            player.track.simplyline.forEach(function (point) {
              var distSq = point.distance2(unit.position);
              if (distSq < min2) {
                min2 = distSq;
              }
            });
            if ((min2 = Math.sqrt(min2)) < min) {
              attacker = unit;
              min = min2;
            }
          }
        });
        if (attacker) {
          attacker.fsm.change("attack");
        }
      }
      var scaleDelta = (player ? player.scale : observerScale) - this.scale;
      this.scale += scaleDelta * dt / 400;
      var end = this.scheme.checkEnd();
      var winner = end.winner;
      var completed = end.completed;
      if (winner) {
        winner.winner = true;
      }
      if (player && winner === player) {
        this.gameOver(0);
      }
      if (completed) {
        this.scheme.completed();
      }
    }
    getRenderContext() {
      var view = this.view;
      if (view) {
        var font = this.config.font;
        var ctx = view.getContext("2d", {
          alpha: false
        });
        var clientWidth = view.clientWidth;
        var clientHeight = view.clientHeight;
        var width = ~~(clientWidth * this.quality);
        var height = ~~(clientHeight * this.quality);
        if (view.width !== width || view.height !== height) {
          view.width = width;
          view.height = height;
        }
        var origin;
        var devicePixelRatio = window.devicePixelRatio;
        var pxWidth = width * devicePixelRatio;
        var pxHeight = height * devicePixelRatio;
        var viewScale = Math.sqrt(pxWidth * pxWidth + pxHeight * pxHeight) / Math.sqrt(2455780);
        var zoom = this.scale * viewScale / devicePixelRatio;
        if (this.player) {
          origin = this.player.position;
          if (this.player.killer && this.config.followKiller) {
            origin = this.player.killer.position;
          }
        } else {
          origin = this.space.center;
        }
        if (this.origin && (!this.player || this.player.killer)) {
          var unitSpeed = this.origin.distance(origin) / 30;
          var _0x3b651f = origin.clone().sub(this.origin).normalize().mulScalar(unitSpeed);
          origin = this.origin.add(_0x3b651f);
        }
        this.origin = origin.clone();
        var left = origin.x - width / 2 / zoom;
        var right = origin.x + width / 2 / zoom;
        var top = origin.y - height / 2 / zoom;
        var bottom = origin.y + height / 2 / zoom;
        function byAspect(_0x588e10, _0x29526a) {
          var _0x1a0c82;
          var _0x2522ab;
          var _0x5e7d81;
          var _0x1e167d = _0x588e10 - _0x29526a;
          var _0x31cffd = 9 / 16 - 16 / 9;
          return -(-(16 / 9 * _0x1e167d + _0x31cffd * _0x588e10) + _0x1e167d * (_0x2522ab = 16 / 9, (_0x5e7d81 = pxWidth / pxHeight) < (_0x1a0c82 = 9 / 16) ? _0x1a0c82 : _0x2522ab < _0x5e7d81 ? _0x2522ab : _0x5e7d81)) / _0x31cffd;
        }
        var fontSize = byAspect(20, 30) * viewScale;
        var strokeWidth = this.config.platesStrokeWidth * viewScale;
        var backHeight = viewScale * 4;
        var uiFont = `${fontSize}px ${font}`;
        var barHeight = fontSize * 1.5;
        var barWidth = pxWidth / byAspect(4, 2.25);
        return {
          game: this,
          view: view,
          ctx: ctx,
          devicePixelRatio: devicePixelRatio,
          viewWidth: width,
          viewHeight: height,
          viewScreenWidth: pxWidth,
          viewScreenHeight: pxHeight,
          scaler: viewScale,
          scale: zoom,
          origin: origin,
          font: font,
          uiFont: uiFont,
          fontSize: fontSize,
          strokeWidth: strokeWidth,
          padding: viewScale * 16,
          backHeight: backHeight,
          barHeight: barHeight,
          halfBarHeight: barHeight / 2,
          barWidth: barWidth,
          halfBarWidth: barWidth / 2,
          left: left,
          right: right,
          top: top,
          bottom: bottom,
          pointInView: function (point, _0x5f6414) {
            var _0x18d9b2 = arguments.length > 1 && _0x5f6414 !== undefined ? _0x5f6414 : 0;
            return inRange(left - _0x18d9b2, right + _0x18d9b2, point.x) && inRange(top - _0x18d9b2, bottom + _0x18d9b2, point.y);
          },
          boundsInView: function (_0x44ee9c, _0x21504f) {
            var _0x4563ef = arguments.length > 1 && _0x21504f !== undefined ? _0x21504f : 0;
            return rangeOverlap(_0x44ee9c.bounds.left - _0x4563ef, _0x44ee9c.bounds.right + _0x4563ef, left, right) > 0 && rangeOverlap(_0x44ee9c.bounds.top - _0x4563ef, _0x44ee9c.bounds.bottom + _0x4563ef, top, bottom) > 0;
          },
          calcMult: byAspect
        };
      }
    }
    render() {
      var context = this.getRenderContext();
      if (this.context = context) {
        this.renderer(context);
      }
    }
    updateMetrics(elapsed) {
      var stats = this.stats;
      var timings = this.timings;
      var _0x4682fe = {
        updateTime: timings.updateEndTime - timings.updateStartTime,
        renderTime: timings.renderEndTime - timings.renderStartTime,
        frameTime: elapsed,
        events: this.events
      };
      this.metrics.push(_0x4682fe);
      if (this.metrics.length > 240) {
        this.metrics.shift();
      }
      stats.fps = lerp(stats.fps, 1000 / elapsed, 0.05);
      stats.ut = lerp(stats.ut, timings.updateEndTime - timings.updateStartTime, 0.05);
      stats.ait = lerp(stats.ait, timings.aiEndTime - timings.aiStartTime, 0.05);
      stats.st = lerp(stats.st, timings.spawnEndTime - timings.spawnStartTime, 0.05);
      stats.rt = lerp(stats.rt, timings.renderEndTime - timings.renderStartTime, 0.05);
      this.fpsSequence.push(stats.fps);
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
    post() {
      var paper2_results = window.paper2_results;
      var scores = paper2_results.scores;
      var _0x156d73 = {
        build: paper2_results.build || 0,
        player: window.playerId || 0,
        lng: (navigator.languages && navigator.languages[0] || navigator.userLanguage || navigator.language || navigator.browserLanguage || "en").substr(0, 2).toUpperCase(),
        name: typeof Cookies != "undefined" && Cookies.get("paperio_username") || "",
        top: paper2_results.top || 0,
        persent: Math.round(paper2_results.score * 100),
        best: paper2_results.bestPercent && Math.round(paper2_results.bestPercent * 10000) || 0,
        time: Math.round(paper2_results.time / 1000),
        kills: paper2_results.kills,
        scores: {
          accumulator: scores && scores.accumulator || 0,
          kills: scores && scores.kills || 0
        },
        reason: paper2_results.reason || 0
      };
      fetch("/newpaperio/ajax/results.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: function (_0x10506d) {
          var result = "";
          for (var i = 0; i < _0x10506d.length; i++) {
            var _0x3c47fe = _0x10506d.charCodeAt(i) ^ 42;
            result += String.fromCharCode(_0x3c47fe);
          }
          return result;
        }(escape(JSON.stringify(_0x156d73)))
      });
    }
    info() {
      var game = this;
      if (this.debug) {
        var view = this.view;
        if (!view) {
          return;
        }
        var font = this.config.font;
        var ctx = view.getContext("2d");
        ctx.fillStyle = "#000000";
        ctx.font = `${this.quality * 20}px ${font}`;
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        var _0x5d1805 = this.quality * 200;
        function _0x444a32(_0x5ae0b7, _0x4cf701) {
          var _0xdd3023 = arguments.length > 0 && _0x5ae0b7 !== undefined ? _0x5ae0b7 : "";
          var _0x3debea = arguments.length > 1 && _0x4cf701 !== undefined ? _0x4cf701 : 0;
          if (_0xdd3023) {
            ctx.fillText(_0xdd3023, 10 + _0x3debea * 20, _0x5d1805);
          }
          _0x5d1805 += game.quality * 20;
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
        _0x444a32(`Points pool: ${Vec2.length()}`);
        _0x444a32(`Particles pool: ${Particle.length()}`);
        this.player;
        if (this.debugGraph) {
          var _0x3ed0b0 = view.width / 3;
          var path = new Path2D();
          var path2 = new Path2D();
          var path3 = new Path2D();
          var path4 = new Path2D();
          path4.moveTo(0, 0);
          var _0x5dcc69 = 16.67;
          this.metrics.forEach(function (metric) {
            _0x5dcc69 = Math.max(_0x5dcc69, metric.frameTime);
          });
          var _0x39db43 = _0x3ed0b0 / 239;
          var _0x15ffb4 = 100 / (_0x5dcc69 *= 1.1);
          ctx.save();
          ctx.translate((view.width - _0x3ed0b0) / 2, 100);
          ctx.fillStyle = "#ffffffaa";
          ctx.fillRect(0, -100, _0x3ed0b0, 100);
          this.metrics.forEach(function (metric, index) {
            path.lineTo(_0x39db43 * index, -metric.updateTime * _0x15ffb4);
            path2.lineTo(_0x39db43 * index, -metric.renderTime * _0x15ffb4);
            path4.lineTo(_0x39db43 * index, -(metric.updateTime + metric.renderTime) * _0x15ffb4);
            path3.lineTo(_0x39db43 * index, -metric.frameTime * _0x15ffb4);
          });
          path4.lineTo(_0x39db43 * (this.metrics.length - 1), 0);
          ctx.lineWidth = 1;
          var _0x3dafb3 = _0x15ffb4 * 16.67;
          ctx.strokeStyle = "red";
          ctx.beginPath();
          ctx.moveTo(0, -_0x3dafb3);
          ctx.lineTo(_0x3ed0b0, -_0x3dafb3);
          ctx.stroke();
          ctx.fillStyle = "#ffff00a0";
          ctx.fill(path4);
          ctx.strokeStyle = "#990099cc";
          ctx.stroke(path);
          ctx.strokeStyle = "#009900cc";
          ctx.stroke(path2);
          ctx.strokeStyle = "#0000ffcc";
          ctx.stroke(path3);
          ctx.lineWidth = 0.5;
          this.metrics.forEach(function (metric, index) {
            var events = metric.events;
            var returns = events.returns;
            var kills = events.kills;
            if (returns || kills) {
              ctx.strokeStyle = kills ? "#99000088" : "#00000088";
              ctx.beginPath();
              ctx.moveTo(_0x39db43 * index, 0);
              ctx.lineTo(_0x39db43 * index, -100);
              ctx.stroke();
            }
          });
          ctx.restore();
        }
      }
    }
    checkSegments() {
      this.units.forEach(function (unit) {
        unit.base.polygon.segments.length;
        unit.track.polyline.segments.length;
      });
      var counts = this.space.segmentsCount();
      Object.keys(counts).length;
    }
    handleCross(mate, by) {
      var baseSegs;
      var game = this;
      var trackPoints = mate.track.polyline.points();
      var base = mate.base;
      var contacts = [];
      trackPoints.forEach(function (point, index) {
        baseSegs = null;
        point.segments.forEach(function (segment) {
          if (segment.shape.owner === base) {
            (baseSegs = baseSegs || []).push(segment);
          }
        });
        if (baseSegs) {
          contacts.push({
            point: point,
            index: index,
            segments: baseSegs
          });
        }
      });
      var expectLeave = true;
      var loops = [];
      var pair = [];
      contacts.forEach(function (contact) {
        var trackPoint = trackPoints[contact.index];
        var trackPoint2 = trackPoints[contact.index + 1];
        if (!trackPoint2) {
          trackPoint = trackPoints[contact.index - 1];
          trackPoint2 = trackPoints[contact.index];
        }
        [new Segment(trackPoint, trackPoint2)].forEach(function (item) {
          if (item) {
            if (expectLeave) {
              if (base.checkSelfLeave(item, contact.point, null, contact.segments)) {
                pair.push(contact.index);
                expectLeave = false;
              }
            } else if (base.checkSelfEntry(item, contact.point, null, contact.segments)) {
              pair.push(contact.index);
              loops.push({
                pair: pair
              });
              pair = [];
              expectLeave = true;
            }
          }
        });
      });
      loops.forEach(function (loop) {
        loop.track = mate.track.polyline.points().slice(loop.pair[0], loop.pair[1] + 1);
        loop.segments = mate.track.polyline.segments.slice(loop.pair[0], loop.pair[1]);
      });
      var crossedMates = loops.length ? mate.track.crossedUnits() : [];
      mate.track.truncate();
      loops.forEach(function (loop) {
        game.handleReturn(mate, loop.track, loop.segments);
      });
      crossedMates.forEach(function (next) {
        return next !== by && game.handleCross(next, mate);
      });
    }
    handleReturn(unit, points, segments) {
      var game = this;
      if (!unit.death) {
        this.events.returns++;
        var trail = points.slice();
        var first = trail[0];
        var last = trail[trail.length - 1];
        var base = unit.base;
        var index = base.polygon.segments.findIndex(function (segment) {
          return segment.start === first;
        });
        if (index !== -1) {
          var index2 = base.polygon.segments.findIndex(function (segment) {
            return segment.start === last;
          });
          if (index2 !== -1) {
            if (index !== index2) {
              var from = Math.min(index2, index);
              var to = Math.max(index2, index);
              if (from !== index) {
                trail.reverse();
              }
              var basePoints = base.polygon.points();
              var removedArc = basePoints.splice.apply(basePoints, [from, to - from + 1].concat(_toConsumableArray(trail)));
              removedArc.shift();
              removedArc.pop();
              base.square;
              removedArc.reverse();
              removedArc.push.apply(removedArc, _toConsumableArray(trail));
              var rise;
              var candidate = new Polygon(removedArc);
              if (candidate.rawSquare() < -EPSILON) {
                rise = new Polygon(basePoints.reverse());
                base.polygon.right(trail, from, to);
              } else {
                rise = candidate;
                base.polygon.left(trail, from, to);
              }
              try {
                base.calcSquare();
              } catch (error) {
                throw error;
              }
              base.polygon.calcPath();
              this.units.filter(function (unit2) {
                return unit2.team !== unit.team && !unit2.death;
              }).forEach(function (enemy) {
                if (enemy.in === enemy.base && rise.inside(enemy.position)) {
                  game.kill(enemy, unit, 5);
                } else if (enemy.track.polyline.start && rise.inside(enemy.track.polyline.start)) {
                  game.kill(enemy, unit, 4);
                } else if (rise.inside(enemy.position)) {
                  enemy.in = unit.base;
                }
              });
              var increment = (unit.base.square - unit.base.lastSquare) / this.square;
              this.scheme.comeback(unit, {
                increment: increment,
                rise: rise,
                game: this
              });
              var openVisit = [];
              var friendlyVisits = [];
              var trailSegments = segments;
              for (var count = trailSegments.length, entryTrackPointIndex = 0, visitPoint = function (i) {
                  var nextSeg = trailSegments[i];
                  var prevSeg = trailSegments[i - 1];
                  var point = nextSeg ? nextSeg.start : prevSeg.end;
                  [prevSeg, nextSeg].forEach(function (seg) {
                    if (seg) {
                      var otherBaseSegs = point.segments.filter(function (segment) {
                        return segment.shape.owner.isBase && segment.shape.owner !== unit.base;
                      });
                      if (otherBaseSegs.length) {
                        var byShape = [];
                        otherBaseSegs.forEach(function (otherBaseSeg) {
                          var entry = byShape.find(function (item) {
                            return item.shape === otherBaseSeg.shape;
                          });
                          if (!entry) {
                            entry = {
                              shape: otherBaseSeg.shape,
                              segments: []
                            };
                            byShape.push(entry);
                          }
                          entry.segments.push(otherBaseSeg);
                        });
                        if (openVisit.length) {
                          var visit = openVisit[0];
                          var visitShape = byShape.find(function (item) {
                            return item.shape === visit.shape;
                          });
                          if (visitShape && visitShape.shape.owner.checkEnemyLeave(seg, point, null, visitShape.segments)) {
                            openVisit.pop();
                            visit.leavePoint = point;
                            visit.leaveTrackPointIndex = entryTrackPointIndex;
                            if (visit.shape.owner.team !== unit.team) {
                              (function (visit) {
                                var shape = visit.shape;
                                var entryPoint = visit.entryPoint;
                                var entryTrackPointIndex = visit.entryTrackPointIndex;
                                var leavePoint = visit.leavePoint;
                                var leaveTrackPointIndex = visit.leaveTrackPointIndex;
                                var owner = shape.owner;
                                var index = owner.polygon.segments.findIndex(function (segment) {
                                  return segment.start === entryPoint;
                                });
                                var index2 = owner.polygon.segments.findIndex(function (segment) {
                                  return segment.start === leavePoint;
                                });
                                var from = Math.min(index2, index);
                                var to = Math.max(index2, index);
                                var chord = points.slice(entryTrackPointIndex, leaveTrackPointIndex + 1);
                                var chordReversed = chord.slice().reverse();
                                var chordFwd = from === index ? chord : chordReversed;
                                var chordBack = from === index ? chordReversed : chord;
                                var keptPoints = owner.polygon.points();
                                var cutPoints = keptPoints.splice.apply(keptPoints, [from, to - from + 1].concat(_toConsumableArray(chordFwd)));
                                cutPoints.shift();
                                cutPoints.pop();
                                cutPoints.push.apply(cutPoints, _toConsumableArray(chordBack));
                                var lostPart;
                                var cutPoly = new Polygon(cutPoints);
                                var keptPoly = new Polygon(keptPoints);
                                cutPoly.square();
                                keptPoly.square();
                                var hostsCut = owner.hosts.filter(function (host) {
                                  if (host.in === owner) {
                                    return cutPoly.inside(host.position);
                                  } else {
                                    return cutPoly.inside(host.track.polyline.start);
                                  }
                                });
                                var hostsKept = owner.hosts.filter(function (host) {
                                  return !hostsCut.includes(host);
                                });
                                if (Math.min(hostsCut.length, hostsKept.length) === 0) {
                                  lostPart = hostsCut.length > 0 ? (owner.polygon.right(chordFwd, from, to), keptPoly) : (owner.polygon.left(chordFwd, from, to), cutPoly);
                                } else {
                                  var baseA = new Base();
                                  (baseA.polygon = cutPoly).commit(baseA);
                                  cutPoly.calcPath();
                                  baseA.calcSquare();
                                  baseA.lastSquare = baseA.square;
                                  game.bases.push(baseA);
                                  baseA.team = owner.team;
                                  (baseA.hosts = hostsCut).forEach(function (item) {
                                    item.base = baseA;
                                    if (item.in === owner) {
                                      item.in = baseA;
                                    }
                                  });
                                  var baseB = new Base();
                                  (baseB.polygon = keptPoly).commit(baseB);
                                  keptPoly.calcPath();
                                  baseB.calcSquare();
                                  baseB.lastSquare = baseB.square;
                                  game.bases.push(baseB);
                                  baseB.team = owner.team;
                                  (baseB.hosts = hostsKept).forEach(function (item) {
                                    item.base = baseB;
                                    if (item.in === owner) {
                                      item.in = baseB;
                                    }
                                  });
                                  game.units.filter(function (unit) {
                                    return unit.team !== owner.team && unit.in === owner;
                                  }).forEach(function (item) {
                                    item.in = cutPoly.inside(item.position) ? baseA : baseB;
                                  });
                                  owner.hosts = [];
                                  owner.remove();
                                  game.bases = game.bases.filter(function (base) {
                                    return base !== owner;
                                  });
                                  owner.team.bases = owner.team.bases.filter(function (base) {
                                    return base !== owner;
                                  });
                                  owner.team.bases.push(baseA);
                                  owner.team.bases.push(baseB);
                                }
                                if (lostPart) {
                                  try {
                                    owner.calcSquare();
                                  } catch (error) {
                                    throw new Error(error);
                                  }
                                  owner.polygon.calcPath();
                                  game.scheme.decrease(unit, {
                                    base: owner,
                                    poly: lostPart,
                                    game: game
                                  });
                                  game.units.forEach(function (unit) {
                                    if (!owner.hasHost(unit) && unit.in === owner && lostPart.inside(unit.position)) {
                                      unit.in = null;
                                    }
                                  });
                                }
                              })(visit);
                            } else {
                              var friendly = friendlyVisits.find(function (friendlyVisit) {
                                return friendlyVisit.shape === visit.shape;
                              });
                              if (!friendly) {
                                friendly = {
                                  shape: visit.shape,
                                  candidates: []
                                };
                                friendlyVisits.push(friendly);
                              }
                              friendly.candidates.push(visit);
                            }
                          }
                        } else {
                          var entered = byShape.filter(function (shapeEntry) {
                            var hitCount = 0;
                            var hits = [];
                            var znSum = shapeEntry.segments.reduce(function (acc, segment) {
                              var hit = segment.intersect(seg);
                              if (hit) {
                                hitCount++;
                              }
                              hits.push({
                                segment: segment,
                                intersect: hit
                              });
                              return acc + (hit ? hit.zn : 0);
                            }, 0);
                            if (hitCount === 0) {
                              return false;
                            }
                            if (znSum > 0) {
                              return false;
                            }
                            if (point.equal(seg.end)) {
                              return false;
                            }
                            if (znSum === 0) {
                              return false;
                            }
                            if (znSum === -1) {
                              var segment = hits.find(function (hit) {
                                return !hit.intersect;
                              }).segment;
                              var point2 = point.clone().add(seg.vector.clone().normalize().mulScalar(EPSILON * 20));
                              if (segment.contains(point2)) {
                                return false;
                              }
                            }
                            shapeEntry.zns = znSum;
                            return true;
                          });
                          if (entered.length) {
                            var enteredShape = entered[0];
                            if (!openVisit.length) {
                              var visitStart = {
                                shape: enteredShape.shape,
                                entryPoint: point,
                                entryTrackPointIndex: entryTrackPointIndex
                              };
                              openVisit.push(visitStart);
                            }
                          }
                        }
                      }
                    }
                  });
                }, i = 0; i <= count; i++, entryTrackPointIndex++) {
                visitPoint(i);
              }
              friendlyVisits.forEach(function (friendly) {
                return function (friendly) {
                  var segs;
                  var candidates = friendly.candidates;
                  var owner = friendly.shape.owner;
                  var marks = [];
                  var myIndexes = [];
                  candidates.forEach(function (candidate) {
                    var point = candidate.entryPoint;
                    var point2 = candidate.leavePoint;
                    var trackIndex = candidate.entryTrackPointIndex;
                    var trackIndex2 = candidate.leaveTrackPointIndex;
                    var ownerIndex = owner.polygon.segments.findIndex(function (segment) {
                      return segment.start === point;
                    });
                    var ownerIndex2 = owner.polygon.segments.findIndex(function (segment) {
                      return segment.start === point2;
                    });
                    candidate.entrySegmentOwnerIndex = ownerIndex;
                    candidate.leaveSegmentOwnerIndex = ownerIndex2;
                    marks.push({
                      point: point,
                      ownerIndex: ownerIndex,
                      trackIndex: trackIndex,
                      entry: true
                    });
                    marks.push({
                      point: point2,
                      ownerIndex: ownerIndex2,
                      trackIndex: trackIndex2,
                      entry: false
                    });
                    var index = base.polygon.segments.findIndex(function (segment) {
                      return segment.start === point;
                    });
                    var index2 = base.polygon.segments.findIndex(function (segment) {
                      return segment.start === point2;
                    });
                    myIndexes.push(index);
                    myIndexes.push(index2);
                  });
                  marks.sort(function (a, b) {
                    return a.ownerIndex - b.ownerIndex;
                  });
                  var candidate = candidates[0];
                  var candidate2 = candidates[candidates.length - 1];
                  var trail2 = points.slice();
                  var entrySegmentOwnerIndex = candidate.entrySegmentOwnerIndex;
                  var leaveSegmentOwnerIndex = candidate2.leaveSegmentOwnerIndex;
                  var leavePoint = candidate2.leavePoint;
                  if (base.polygon.inside(owner.polygon.segments[candidate.entrySegmentOwnerIndex].end)) {
                    entrySegmentOwnerIndex = candidate2.leaveSegmentOwnerIndex;
                    leaveSegmentOwnerIndex = candidate.entrySegmentOwnerIndex;
                    leavePoint = candidate.entryPoint;
                    trail2.reverse();
                    var count = trail2.length;
                    marks.forEach(function (mark) {
                      mark.entry = !mark.entry;
                      mark.trackIndex = count - mark.trackIndex - 1;
                    });
                  }
                  var merged = [];
                  for (var ring = marks.slice(); ring[0].ownerIndex !== entrySegmentOwnerIndex;) {
                    ring.push(ring.shift());
                  }
                  for (var i = 0; i < ring.length - 1; i++) {
                    var mark = ring[i];
                    if (mark.ownerIndex === leaveSegmentOwnerIndex) {
                      break;
                    }
                    if (mark.entry) {
                      for (var ownerIndex = mark.ownerIndex; ownerIndex !== ring[i + 1].ownerIndex;) {
                        var start = owner.polygon.segments[ownerIndex].start;
                        merged.push(start);
                        if (++ownerIndex === owner.polygon.segments.length) {
                          ownerIndex = 0;
                        }
                      }
                    } else {
                      (function () {
                        var trackIndex = mark.trackIndex;
                        var min = Infinity;
                        var nextMark = undefined;
                        ring.forEach(function (item, index) {
                          var trackIndex2 = item.trackIndex;
                          if (trackIndex < trackIndex2 && trackIndex2 < min) {
                            min = trackIndex2;
                            nextMark = index;
                          }
                        });
                        for (var trackIndex2 = trackIndex; trackIndex2 < min; trackIndex2++) {
                          var trailPoint = trail2[trackIndex2];
                          merged.push(trailPoint);
                        }
                        i = nextMark - 1;
                      })();
                    }
                  }
                  merged.push(leavePoint);
                  var mergedSegments = [];
                  for (var i2 = 0; i2 < merged.length - 1; i2++) {
                    mergedSegments.push(new Segment(merged[i2], merged[i2 + 1]).commit(base.polygon));
                  }
                  myIndexes.sort(function (a, b) {
                    return a - b;
                  });
                  var spliceFrom = myIndexes[0];
                  var spliceTo = myIndexes[myIndexes.length - 1];
                  game.units.forEach(function (unit) {
                    if (unit.in === owner) {
                      unit.in = base;
                    }
                  });
                  owner.hosts.forEach(function (host) {
                    (host.base = base).hosts.push(host);
                  });
                  owner.hosts = [];
                  game.bases = game.bases.filter(function (base) {
                    return base !== owner;
                  });
                  unit.team.bases = unit.team.bases.filter(function (base) {
                    return base !== owner;
                  });
                  (segs = base.polygon.segments).splice.apply(segs, [spliceFrom, spliceTo - spliceFrom].concat(mergedSegments)).forEach(function (item) {
                    return item.remove();
                  });
                  base.polygon.calcPath();
                  owner.remove();
                  base.hosts.forEach(function (host) {
                    if (host !== unit) {
                      if (base.polygon.inside(host.position)) {
                        host.in = base;
                        host.track.remove();
                      }
                      host.track.truncate();
                    }
                  });
                }(friendly);
              });
              this.units.forEach(function (unit2) {
                if (unit2 !== unit) {
                  if (!unit2.death) {
                    if (unit2.team === unit.team && rise.inside(unit2.position)) {
                      unit2.in = unit.base;
                      if (unit.base.hasHost(unit2)) {
                        game.handleCross(unit2);
                        unit2.track.remove();
                      }
                    }
                  }
                }
              });
            } else {
              this.kill(unit, undefined, 1);
            }
          }
        }
      }
    }
    loop() {
      var game = this;
      try {
        if (this.stopped) {
          return;
        }
        this.looped = true;
        var last = now();
        this.last = this.last || (last < FRAME_MS ? 0 : last - FRAME_MS);
        var elapsed = last - this.last;
        if (elapsed < 1) {
          elapsed = 1;
        }
        this.updateMetrics(elapsed);
        if (elapsed > 10000) {
          elapsed = 10000 + Math.random();
        }
        var maxStep = FRAME_MS * 2;
        for (this.timings.updateStartTime = last; elapsed > 0;) {
          var step = elapsed <= maxStep ? elapsed : elapsed < maxStep * 2 ? elapsed / 2 + Math.random() : maxStep + Math.random();
          this.update(step);
          elapsed -= step;
        }
        this.timings.updateEndTime = now();
        this.timings.renderStartTime = now();
        if (this.visible) {
          this.render();
          this.info();
        }
        this.timings.renderEndTime = now();
        this.last = last;
      } catch (error) {
        if (this.logger) {
          this.logger.error(error.message);
        }
        throw error;
      }
      requestAnimationFrame(function () {
        return game.loop();
      });
    }
    saveState() {
      console.time("saveState");
      var _0x13f1d1 = {};
      this.space.cells.forEach(function (cell) {
        cell.points.forEach(function (point) {
          if (_0x13f1d1[point.id]) {
            throw Error("Точка уже записана");
          }
          _0x13f1d1[point.id] = {
            id: point.id,
            x: point.x,
            y: point.y,
            used: false
          };
        });
      });
      var teams = this.teams.map(function (team) {
        return {
          id: team.id,
          units: team.units.map(function (unit) {
            return unit.id;
          }),
          bases: team.bases.map(function (base) {
            return base.id;
          }),
          skin: team.skin.getName()
        };
      });
      var bases = this.bases.map(function (base) {
        var polygon = base.polygon.segments.map(function (segment) {
          var start = segment.start;
          _0x13f1d1[start.id].used = true;
          return start.id;
        });
        return {
          id: base.id,
          polygon: polygon
        };
      });
      var units = this.units.map(function (unit) {
        var track = unit.track.polyline.segments.map(function (segment) {
          var start = segment.start;
          _0x13f1d1[start.id].used = true;
          return start.id;
        });
        if (unit.track.polyline.end) {
          var id = unit.track.polyline.end.id;
          track.push(id);
          _0x13f1d1[id].used = true;
        }
        return {
          track: track,
          id: unit.id,
          name: unit.name,
          position: unit.position && {
            id: unit.position.id,
            x: unit.position.x,
            y: unit.position.y
          },
          target: unit.target && {
            id: unit.target.id,
            x: unit.target.x,
            y: unit.target.y
          },
          base: unit.base.id,
          in: unit.in && unit.in.id,
          direction: unit.direction,
          team: unit.team.id,
          player: !!unit.isPlayer
        };
      });
      var points = Object.values(_0x13f1d1);
      var points2 = points.filter(function (point) {
        return !point.used;
      });
      if (points2.length) {
        console.log("unused", points2);
      }
      var result = {
        teams: teams,
        bases: bases,
        units: units,
        points: points
      };
      console.timeEnd("saveState");
      console.time("stringifyState");
      var _0x284405 = JSON.stringify(result);
      console.timeEnd("stringifyState");
      console.log(_0x284405);
      return result;
    }
  }
  class KeyboardModeSwitch {
    constructor() {
      this.mode2 = false;
    }
    get() {
      return this.mode2;
    }
    switch() {}
  }
  class NamePool {
    constructor(pool) {
      this.pool = pool;
    }
    get() {
      return this.pool[~~(Math.random() * this.pool.length)];
    }
    aviable() {
      return true;
    }
    request() {}
    release() {}
  }
  var NAMES_TEXT = "!!!JORDAN!!!\n!@#$%^&*()\n!AMERICA!\n!GO! ANTRONI\n!MEXICO!\n#1\n#1 Malta\n#20$\n#add north k\n#canada\n#canadawin\n#Canadian\n#DOGO\n#kittycorn\n#Love\n#shopatshara\n#superstar#\n#teamtrees\n#TeamUSA\n#WIN\n#zephyr\n$$$$$$$$\n$$$$$$$$$$$$\n$_$\n$1000=1%\n$HydroFlask$\n$TheCamilo$\n( . )( . )\n( ͡° ͜ʖ ͡°)\n()(_)()\n(:\n(▀̿Ĺ̯▀̿)\n(▀̿Ĺ̯▀̿+̿)\n(☢️)\n(0_0)\n(0_0) Elixr.\n(0_0) GUNNER\n(0_0)USA4EVR\n(PAK)AMMAD\n(USA)\n(づ｡◕‿‿◕｡)づ\n************\n****KONG****\n*ÙwÚ*\n*тип крутой*\n.\n...\n-....-\n...???\n..OTTOMAN..\n/\n////\n:------\n:)\n:))\n:):):):):):)\n:-_-_--_0\n:3\n:D-l-<\n:l\n@##/////////\n@butcheck.Bo\n@FRANCE\n@yana\n[GD]Daninot\n[HaHa]x2broJ\n[IX]FIREPWR\n[IYI]Diriliş\n[P] Parynhar\n[P] Quest On\n[SM\n[SM]+PRO\n[T]TARGET\n[TT]Fatso\n^_^\n-_-\n-_GO=GREEN_-\n_Russia_\nSDD\n{_MYTHICAL_}\n{AZ} hhhh\n{Trump 2020}\n|==|=======>\n|A+B|≤|A|+|B\n~Royo~\n~siam~\n~strontium~\n~Typical_YT~\n¡COLOMBIA!..\n¡COLOMBIA-.!\n₮ⱧɆ+₭ł₦₲\n〘☢〙\n꧁༒☬Yee☬༒꧂\n++\n+++KONG+++\n+❤гмаолпоапл\n</keysmash>\n<algeria\n>:)\n⫷♔ツ⫸₭€₣₭Ø\n◙ Cube ◙\n█▬█ █ ▀█▀\n█▬█+█+▀█▀\n☾★🇵🇰\n♂emily♀\n♥☻☺France☺☻♥\n♥ELENA♥MX♥\n♥Emma♥ ^^\n♥OH FRANCIS♥\n✠Huxery✠\n❤AMERICA❤\n❥❥𝙪𝙬𝙪+✉\n✨   ℱỮŘ¥ ✦\n☙Ѻ❧\n⚖️ for 🇵🇰\n0.0\n0TanqR0_YT\n1%=$1000\n1%=1$\n1%=1000\n100% legal\n100% PLS\n100%BOY\n100%PLS\n1000$=5%\n1000+1.\n100000 like\n123 yur dead\n1234567890hm\n1W\n2 shotsVodka\n2.0\n2.cuz\n2.cuz sweden\n20 BOMS PLS\n20cent\n22W\n2bias\n2mokey cat\n358/2\n3D\n3r1k\n5 world cups\n5+world+cups\n68.93%\n69420fu\n6RSKY9\n700fu\n7snoo\n8===D 69\na\nA Bit Tired\na cat\na good name\nA MAAAAD MAN\na person\nA small loan\nA_person\nA+\na+guy\nA+Person\nAA\naa\naaa\naaaaa\naaaaaaa\naakashtheboi\nAakhyan\naakkash\naaon\nAarav\naarope\naayash  pro\naayyy\nAB\nab\nababua\nabbeäbög\nÄbbëï\nAbby\nAbc\nabc\nAbc123\nabcde\nabcdefg\nabcneat123\nAbdul\nAbdul aziz\nabdullahhi\nabdulmajid\nabekat\nabi\nabir\nABIR.216\nAboriginal\nAceOfSpades\nachoo\nachtung\nacts2.38(bi)\nad devil\nADA\nAdam\nADAM\nADAWE\nADD JZD_1029\nAddie\nAddie!🍰!!!!\nADR\nAdrian\nADROS\nadsa\nADSF\nAdventurer2\nÆ\naeiou yyyy\nAG31\nagent x9999\nAgi\nAgt+zsafety\nah baba\nahh\nahhaha\nahhh\nahmad\naid\nAidan\nAiden\nAIDEN ROBINS\naids\nAigarosik\nair\nAIRFORCEGIRL\nAis\naiskkdSK\naj\nAJ PLAYZ\nAJYomastr\nak47\nAK-47juice\nakaash\nakaysha\nAkbar\nAkira\nAl\nalabama\nAlan Edam\nAlan Walker\nalani akacat\nALB\nAlba\nalban\nalbania\nAlbania\nALBANIA\nAlBaNiA\nAlbania4ever\nalbert\nAlbertEnstin\nAlbertnoobb\nalegor\nAlejo+Toro\nalek\nalelilisisi\nAlen Jins\nalen+roshni\nAleQu\nAlex\nalex\nalexa190\nalexandra\nAlexey\nALEXIS\nalexx\nAlexzandra\nalgeria\nALGERIA\nalgerian boy\nalgirian boy\nAli\nali raza\nAli Sh\nALI07\nAliA\nalice\naliraza\naliv\nALIVE\nAll Blacks\nallahakbar\nallect\nalli_a\nAlmidorya\nalpha wolf\nAlred\nAlvato\nalx\nAlx\nAlyssa\nAM_savage26\namanda\namantegado\nAmarica\nAmbush flex\nAmelcia\namelie\nAmelie\namerica\nAMERICA\nAmerica\nAMERICA !!!!\nAMERICA YEET\namerica=best\nAMERICABABY\nametz\namg friends\namit sharma\nAmmar\nAnarchy\nanasaqil\nAnasun\nAncalagon\nANCIENT01\nAnd I oop\nAnd i oop\nandres\nAndrey\nandrey 22807\nandroid\nAndromeda\nandrw22\nangel\nAngel\nangelamunt\nangelo 1510\nangelo abas\nangg31\nanimals 101\nAninha\nanis\nanita a\nanna\nanna bortion\nANNAFEDE\nAnonihouse\nAnonymous\nANONYMOYS\nanyád\nⒶⓄⒾⒻⒺ\nAON\napepa\nApple Inc.\napply+pie\nArabs+no.1\naraceli\naragatina\nArarat\nArdian\nargentina\nARGENTINA\nArgentina\narhaan\nAriANNA\nARIANNA77\nariel\nAritz\nArizona\narmagedon\nARMENIA\nÁrpád vezér\nartem\narthur\nArtury\nARYAN RACE\nas20\nAsd\nasd\nasdf\nasdfgh\nAsh\nash\nashe\nashley\nAshmita\nAShoky\nAsian Man\naspessoas\naspod\nasta\nATAHAN\natankwadi\natizaz\nAtletiMadrid\nAtomic_Nut\nattack70\naubrie\nAudrey\nAuri :3\nAurora\nAUS\nAus+best\nAusie\nAussie\naussie\nAUSSIE\nAussie ****\naussie 1\nAUSSIE 2\nAUSSIE 64\nAussie Aussi\nAussie beast\nAUSSIE ROO\nAussie+Aussi\naussie18\naustin😠😇😜\nAustrailia\nAustralia\nAUSTRALIA\naustralia\nAustralia 1\nava\nAvadaKedavra\nAvagyan\nAvalak13\navalina\nAvans\navd\naver\navi\nAvocadoToast\nAvrey\nawd\nawe\nAwesome\nawesome\nAWESOME!\nawien chewie\naxel.liam.kl\nAXIS\nAyaan\nayaz\nAYBARS\nayberk\nayden\nAytric\nAyuma\naz\nazan\nAZERBAIJAN\nAzerbaijan\nazerbaijan\nAzerbaycan\nAZƏRBAYCAN\nazz\nAzzyland\nB\nb\nB GFCRTEN\nB_SAUCE3 gam\nb2by\nbab\nBabilawi\nBaby\nbaby lips\nbabyJack7\nBACK IN NAM\nbad+bunny+\nbadr\nBaguette\nBahartet\nBahrain\nbahraini3451\nBaju\nbaka\nBALI\nbaligeul\nbalša\nbalta\nBalzac\nbam\nbamam\nBAN\nbanana\nBanana\nBANANA\nBanana boat\nbanana man\nbananapotato\nBangladesh\nBANGLADESH\nBara\nBarni\nbarrhet\nbart\nbart simpson\nbartolo\nBaryonx\nBäschti\nbasem\nBasher\nbatty\nbautista\nbazing\nBB\nbb\nbbb\nBBB\nbbobbobo\nBC190\nbd212\nBeakers Lab\nBeanos\nbeanos\nbear\nBeast\nbeast\nBeast+Mode\nBeau\nBecca\nBEEF CURRY\nbeep\nBees\nbejnjamin\nBelarus 2\nbelgium\nBelgium team\nBella360\nbellathecat\nBello\nBelyn G.\nben\nBen\nBEN\nben dover\nBenDover\nBÉNÉ\nBenet\nbenitocamela\nBenji\nberddewalvis\nBernie+2020\nBernie2020\nbest\nBEST BOSS\nBest Player\nbest.io\nBestie#2\nbestisindia\nbesty\nbfcjfv\nBFFs\nbh\nbhhygu\nbhoongar\nbia\nbiche\nbicth\nbielARTICO\nBig\nbig boi\nbig bois\nbig chicken\nbig dad\nbig daddy\nBig Daddy\nbig e\nBIG MAC\nbig nicca\nbig papa\nBIG SHAQ\nbig shaq\nbig sista\nbig slangers\nbig+boy\nBig+Boy\nBig+Boy=NOOO\nbig+brain\nBIG+BRAINS\nbig-boy1158\nbigchungus\nBigChungus69\nBIGETRON\nBIGGERSON\nBIGGGGBOY!\nbiggiecheese\nbigpeen69\nBigRgo\nBigs\nBigT\nbigtoe\nBiH\nBiiG Makk\nBiju Mike\nbill\nbillaraa 1\nBilly\nbillybai\nBillz.\nBin\nBinder\nbip\nbiro BR\nbishop\nBj\nBJ\nbjorn\nBK\nBl3ckJack YT\nBL7\nBlackFlash\nBlacky\nblake\nblantra\nBlaster\nBLClRE\nBleh\nbleumeanie\nbling\nBlink\nBlip Blop\nBLITZ\nBlizzard156\nBlob\nBLOB BOY\nBlobble\nblobs\nblobsly\nBlocked\nBLOCKITY\nBlood4Life\nblossom\nblow\nblow me\nblu+the+best\nblub blub\nblue7y\nblueberry\nblueberrypie\nblueboy\nbluebronco7\nbluhbluh\nblur\nBlur 2\nblur 3\nBM\nbmw\nBO$$\nboas\nbob\nBOB\nBob\nbob esponja\nbob ross\nbob the noob\nbob100\nbob2\nboba\nBoBa\nbobbone\nbobert\nBOB-omb\nbobplayz\nbobthebuilde\nbobyz\nBoch is back\nbode\nboe\nBOEF\nBog\nbog leo\nBogDan\nBognar\nBoho\nboi\nBoi\nBOi\nboiii\nboizzzzzzzzz\nbojkata\nbok\nboneless\nBonitão_br\nBonny\nboo\nboof\nBOOFI\nbooger08\nBooh!kkake\nBOOOOOOOOOY\nBOOP\nboot\nbop\nbordbistro\nbörk viking\nborna\nbosna\nBOSS\nBoss\nboss\nboss+TW+BM\nBossDude 2.0\nbot\nBOT\nbot boooooot\nBOT+2.0\nBOT1\nbot1212\nbot12122\nbotaaaaaa\nBots\nbouji\nboy\nboy+loves+me\nBoysInGreen\nboyviking\nbozo\nbraaaaaaaaap\nbraaaaaap\nbrady\nBrainiac14\nBrasil\nBRASIL\nbrasil\nBRASIL CARAI\nbrasil-matt\nBRAXTON$$$\nBRAXTON$$$$$\nBrayan\nBRAZIL\nBrazil\nbrazil\nBrazil mito\nBRAZIL MITO\nBrazil Mito\nBRAZIL MITO2\nBrazil+mito\nBRAZILRULES!\nBrazilSnake\nbrenaopvp\nBrendoo1\nBrett\nBrian\nbrickboss\nBRITIAN\nBritish\nBritSpeed\nbro\nBrockly san\nbrofourt\nBrookie_uwu\nbrooklyn n\nbrooxslugger\nBROSKITO\nBrownBear\nbru\nBruh\nbruh\nBRUH\nbruklin\nBrunofoda\nbrush my hat\nBRUTE\nbryleigh\nBTS\nbts army\nbubba\nbubby\nbucins\nBuddy\nBuguinha_13\nBulgaria\nbulldog68\nBuna\nBUNINGS SNAG\nBUNNINGSSNAG\nBunnyfur\nBunnyo\nburger\nButkizz\nBúúúzi\nbuwygib\nBuz-T\nbye\nBYE\nBZX\nC\nc vcbgnbfm\nc2\nCaam\ncaarlaaa❄️\ncaca\ncaca water\ncade\ncaden\nCAIO\ncake\ncalabresa\ncaleb\nCaleb\ncalebb213\ncallum\ncam\nCANADA\nCanada\ncanada\ncanada best\ncanada sucks\ncanada trash\nCanada=life\ncanadabest\nCanadaLeader\nCANADIANS\nCandinho\nCANNON\nCantu\nCapitooooosh\nCappapotomus\nCAPS LOCK\ncaptain\nCaPtAiN_MaRs\ncarenzo\ncarl\nCARLLLLLLLLL\nCarlos\nCarolus Rex\ncarrot\ncarrots1\nCARRSRSTDYYT\nCARSONCAVE\ncart\nCarter\nCARTER\nCash\ncash\ncat\ncatboy_isaac\ncatcher\ncatforcanada\nCathal\nCaThErIne\nCatMaker\ncats\nCATS4LIFE\ncaule\nCAussier\ncc\ncc gamer\nccccc\nCerealKiller\nCF\nchags\nchai\nCHAIR\nchamp\nChampion\nchanyeol\nchao\nChào\nChaoCB\nCHAOSCC101\nchap\nchar\ncharie c\ncharlie gren\ncharlotte\nchase\nChase H.\nChaselliot9\nChavez :v\nChavez Vive\nchckenvnd_lo\nCheckmate\nchee ne ma\ncheeki breek\nCheerwine\ncheesballxx\ncheese boi\ncheeseburger\ncheezydibz\ncheng chang\nChesse\nChewie\nchgicken\nchicken\nchico rey\nChile\nchill\nchill B )\nChilllllllll\nCHiNA\nchina\nChina\nCHINA\nCHINA RULES!\nCHINGONA\nchinoooo\nchistmas!!!!\nChloe\nChomp\nChopper\nchris\nchrisbrunt\nchristian\nchristine\nChristmas\nchuckll boy\nchuglet\nchungo scrun\nchynn\nCirrus\ncisarmilos\ncj\nclaire\nClara\nclash\nClatter\nClaudia\nClenched\nClint\nC-Money\ncnhwrg\ncoal\ncobby\nCobby\ncobos\nCocaCola\ncoco\ncode lazar\nCode: wolf\ncodelazaryet\ncolombia\nColombia\nColombia hpt\ncome on uk\ncome tudo\ncomi sua mae\nCOMMIE KILLA\ncommonwealth\nCommunism\nComputer_01\nConic\nconor\nConor\nconquistame!\ncontrolw=hax\nCookie Gamer\nCookieGuy\ncool\nCOOL\ncool  boy\ncool guy 39\nCool man\ncooleo\ncoop\nCooper\nCORBIN$$$$$$\nCorey\nCorvus\nCosmic Bagel\nCosta rica\nCougarclaw\nCoulombCube\nCow+goes+moo\nCOYR213\nCR7\nCr7\ncrack\ncrackhead\nCraftian\ncrainer\nCrainer\ncrainer1422\ncrazy nonga\nCRAZYARNO\nCrazyKidooo9\nCreeperAwMan\nCrimeaisours\ncristianocr7\nCroatia\nCroatia4Life\nCrocomire\ncrown killer\nCroydzzz\ncskns\nctrl w\nctrl w team\nctrl+w\nctrl+w (HACK\nctrl-w\nctrlwforspee\nCtrlWToHack\ncube\ncubix\nCUCA\ncujo\ncullengreat\ncupcake\nCurry\ncute+hunter\nCute247\ncw\nCYBERHUNTER\ncyka blayt\nCyka Blyat\ncyprus demon\nCyrus 2\nCzech Empire\nCzechia\nd\nda way\ndab\ndab master\nDaCeeb\ndad\nDad\ndadaddy\ndaddy\nDaddy\ndaddyo\nDaFisHBoy83\nDafloppa\ndaichei22\nDakDudez\ndakota\nDALE SNAIL\nDaleWhite\nDallasusa\nDaltonW_GG13\ndalyarak\nDAMONKEYPREZ\ndan\ndance+is+fun\nDancequeen\ndanger\nDanger\nDangerMouse!\ndani21\ndaniel\nDaniel\nDaniel@USA👑\nDaniella\nDanislav\ndank doge\nDanmark\ndannybot\nDanTDM\nDANTDM\ndantdm\ndanTDM\ndantegol1432\ndany_many\nDANZ\ndapizzaman\nDarius\nDark\nDark Nebula\ndarkleader\nDarkyz\ndarrison33\nDarsh\nDarth Sauron\ndasda\nDASH\nDatiMomtente\ndave\nDavid\ndavid\nDAWG8\ndawnelle\ndaws dhbabad\nday\nDAZ\nDBT_CAMERON\nDBT_diesel\nDBT_James\ndd\nDd\nddd\nddog\nDe\nde naam\ndead\nDead\nDeadpool\ndean marney\nDeath+Itself\nDEATHOFKILL\nDeathPlays09\ndebaixoviado\ndedi\ndee vegemie\nDEEMAR\nDeepak\nDEEZ NUTZ\nDegurchaff\nDeimon.EXE\nDejmian\nDem REREs\ndEm0g0RgAn\nDema\nDemid\ndemogorgon\ndemongurlie\ndenisa\nDenmark\ndennis\nDerEchte\nderf\nDerGerman\nderive omr\nDerNEGER\ndesmatasão\ndestroyer\ndestrukt\nDEUTSCHLAND\nDeutschland\nDEUTSHCLAND\nDeutshland\ndevansh\ndfew\nDGYA8805YI\ndharel\nDHP studios!\nDiamondlucas\ndiana\nDiar Arifi\ndiara\ndie\nDIE\nDie to Death\nDie+noOB\ndie25\nDieforme\nDiegoChacon\nDieku2909\nDieku2909+MX\nDiex177\ndieyou\nDiggyHole\ndigitalkids\nDiktator\ndiman\nDimka\nDimond\ndin mamma\nding dong\nDingleberry\ndingo\nDINGOEZ:(o)\ndio sama\ndio12345\nDis2008\ndisney+\ndkofjkvdfvfn\ndo\nDO CTRL+W\ndoge\nDoge\nDoh\nDom\nDomiiiii\nDominate\nDOMINIKXY\nDonald Duck\nDonald Trump\nDonald+TRUMP\ndont hurt me\nDont kill me\ndont kill me\ndont+kill+\ndont+kill+me\nDoNtAtMEbRo\nDONTKILLME\ndontkillme\ndontkillnoob\ndoof\nDOOFIS\ndoom\nDoom\nDooney\nDowdi\ndr.paper\nDracoHeart\ndragnea life\ndrago\nDragon3.0\nDrama\ndreizer\nDREWSKI\ndripak-47\nDrisikray\nDrizzyAiden\nDrogon\nDropBear\nDrUgs\nDRUNK FIG\nDRUNK OBAMA\nds\ndsallsa\ndsawwaa\ndsf\nDTMdan\ndtrgfxfghuyg\nDubai\nduc+anh\nduck\nDuck\nduck duck ya\nduck+2.0\nducky\nDucky\ndude\ndudu+lindo\ndumpstered\ndutch\ndxrk_shxdxw\ndyl\ndylanperr4\ndynamois\ndysha\nDziadzia\ne\nE\nE MASTERMORT\ne.romero\nEamon\neamon\nEastNed\neasy 1° top\nEat\neAt iT\neat me0\neat+me\nebuking\ned\neden1\nEder\neder\nedgar\nEDKH\neeee\neeeeeeeeeeee\nEeonegee\neevee\negg\nEGGGGGGGG\nEgoitz Hernandez\nEgypt\neh\nehan\nel guero\nEl Salvador\nEL SALVADOR\nEl Thirox\nEL VIEJO360\nelaine\nELAM0\nELENA174RUS\neli\nElias\nelias sucks\nelijah\nElijah\nEliminater\nEliTinyRex\nELItinyREX\nella\nElmastroOO\nelmira\nEloyFerreiro\nƏlqasım\nElRoberto93\nelsacha35\nelvis\nELVIS OMG\nElWachin\nEma\nEmad\nEmanuel\nemerald\nemil\nemily\nemily 18\neminem\nEMINEM\nemir\nEmirkohall\nEmirPr14\nemmet\nempire of is\nEMPIREMEMES\nemre sikecek\nEngille\nENGLAND\nEnsar_V7-123\nEnzito\nEnzo plays\nepic+noob\nepic+pro!!!!\nEquipoMéxico\neragon\neres mariqua\neric\nerichbete\nErick\nerick\nERICLOL\nErik\nErli\nERNAR\nErnesto\nerwef\nEshla\nESPAÑA\nEspañita\nespecteral\nestonia\neth50%\nethan\nEthan\nEthnic Brit\netyg6f4567v7\neua\neufwe\nEugene.com\nEve Get\nEverleigh224\nEveryday bro\nEvgenii\nevil\nEvil John\nEWA FAKA\nEX Guardian\nexpectations\nEYE LIGMA\neyes\nez number 1\nf\nF\nf Shaman\nf u       .n\nF*** rUsSia\nf**k\nF*ck off\nF*ck+off+\nf111\nfaa\nfacundo\nfady\nFAHEEM\nfaith\nfaku\nFalak\nFANAF\nfantastic 5\nfar5\nfarhan\nFARİD\nfarleyfun\nfat pig!!!!!\nfat+pig!!!!!\nfatafat land\nfatanah\nFATHERLAND\nfatty\nfaye\nFaZe jarvis\nfaze lucas\nFaze_Uzamaki\nFaZeAtlantic\nFBI\nfbi\nFCK U\nfddjbkhbjkdf\nfdgfh\nfdkjm\nfearless70\nFeetus\nfermito2008\nFernanda\nFernanfloo\nFERRIX\nFEW\nff\nfff\nffff\nfgeetv\nFGEETV FAN\nfgeev\nfgfd\nFGTEEV\nFgteev\nfgteev\nfgteev Aarav\nFGTEEV DAD.\nFGTEEV DUDDY\nfgteev duddy\nfgteev fan\nFgteev Lexi\nFGTEEV+DUDDY\nfgtv\nfgtv fan\nfgtv+duddy\nfgtvv\nfgtvvy fan\nfgva\nfhhcvhvdvhhg\nfiawsome\nFierce\nFIFI\nFight me\nFight Me NOW\nfighter\nfilip+t.\nfilipino\nfire\nFIRE_BOY\nfirered\nFISHSTICK\nfishy\nFiVx\nfizzgig\nfj\nfJWASDKNFIO\nFlame\nflamingo\nFlash\nFletch\nFLEX TAPE LF\nflipous\nFlitzdefelar\nfloat\nfloof\nFlora\nflorida\nFlorijn\nFLYBOY\nFlying solo\nflynn\nfolk\nFOOT\nFOR AUSSIES\nFor straya\nForeigner\nForge\nForrest gump\nForrest Gump\nFORTNIT2\nFORTNITECOOL\nFotis\nfour twenty\nFox\nfoxy soap\nfoxy+soap+\nfr\nfrahermes\nfrance\nFrance\nFRANCE\nFRANCE!!!!!!\nFrancewillwi\nFranco\nFranco777\nfrancoooo\nFrancsFranco\nFrank Pepe\nFrankenstein\nfreank\nFrece\nFRED\nfreddy\nFREE FIRE\nfreek@\nFreence\nFrenchboy456\nFrenchPlayer\nfresh\nFreya\nfriemel kont\nfriend\nFrodo\nfroggyboy483\nFrooty\nFrost King\nFrostFire\nfrozen 2\nFRT\nFryskjongkje\nfsd\nfsu\nftgv+fam+boy\nfu\nfucj swedan\nFull\nFurt1\nfutdebt\nfutebol\nFutureHacker\nFUZIONS38\nfvv\nfwog\nFyre\nℱгίєηđ\ng\nG\nGaaaaaldi\nGabe\ngabe\nGabe itch\ngabe itches\ngabe+itch\nGABEE\ngabes dad\ngabi\nGabi\ngabienivaldo\nGABIFOOTBALL\ngabigol\nGABO\ngabriel\ngabriele\ngagaga\nGage\ngage\nGalaxy Paper\nGalaxy+Blitz\nGalaxyKnown\ngalexyyyyyyy\nGallardin\nGamer 101\ngamer+bent\nGamerJax11\nGamers\ngamingkhan\ngandork\nGanesti\ngang\nGanjaWay420\nGapci\nGarlictwins\ngarrett\ngato panama\ngautham pro\ngay\nGay - Niger\nGB2A\ngd.henrique\ngday mate\nGEAR 4 LUFFY\nGE-HDT\nGemany\ngemma\nGem🍔🍕🍟\ngendikari\nGeneralTOM\nGeorge🐖🐷🐽\nGeorgia\ngeorgia\nGeorgian\nGErma\nGERMAN\nGerman Guy\nGerman Reich\nGermanReich\nGermanreich\nGermany\ngermany\nGERMANY\nGermany 1944\nGermany Ian\ngerms\nGerry Adams\ngesuzzo\nget clapped\nget gud\nget rekt\nGet+off\ngetmethanos\nGetNaeNaed\nGetRektM8\ngfdxhgzs\ngfgdfsgdgd\ngfgfg\nGG\ngg\nggg\ngggg\nGggggggggggg\nggman\nggs\nghost\ngialy\ngibs 1234\ngilad ori z\nGiocatore\nGipssksmm\ngiselle\nGlaGlaGlaGla\nGlitch222\nGLORIOUS\nGlue\nGlug glug\ngm\ngmb\nGMF MATTEO\nGM-SCORPION\ngo\ngo AUSTRALIA\nGo Canada101\nGo Nepal\ngo NZ\ngoat\nGOAT\nGoAustralia🇦🇺\ngoblin\nGOCANADAGO\nGoCanadaGo\ngogeta\ngogo\ngogogadget\ngojira\nGOKU\nGoldpaper\ngoloma\ngonnacrushU\ngood\ngood girl\ngood old USA\nGoodbye\ngoogle+\nGOOIE\nGOOTED\ngordominais\ngorqui\nGota+(GER)\nGP/Denmark\nGrace\nGrades\nGradovskY\nGramma\nGran\nGrease light\nGreatGermany\ngreece\nGreek Geek\nGreen\ngreen\nGreg\nGregory\ngreta rex\nGrey\ngrey couch\nGrian\nGringo\ngrucci_gang\nGuardsman\nguatemala\nGuava+Juice\nGucci\ngui10\nGuilherme\nGuizinho\ngurnishan\nGUS\nGustav Vasa\nGustav2Adolf\ngustavo\nguy\ngyggygygygyg\nh\nh.g.\nha§cker\nHabilis\nhacker\nHagenGANG\nHagenGANGSTA\nhaha\nHAHAHAHAHHA\nhahahha\nhai\nhail norway\nhakan23cm\nHAKER\nhallah walla\nham\nham pizza\nhamoodeh\nhamza\nHamza\nHanii\nhank\nHappy Boy\nhappyplace34\nHar\nhar+de+snarl\nharanga\nhardik\nHarrison\nharry\nHARTK VTKUPV\nhatz\nHAWAII\nhayhay\nHazbin hotel\nHECTOR\nhedgi\nheehoo\nhehe\nheheeh\nhei på deg\nheinrik\nhejhej\nhejjj\nHekler\nHelen+\nHELO\nhelp\nHELPFOR NUKE\nhelpme\nhenk\nhenry\nHenry2209\nhenrydanger\nHenryking\nHer0\nHermione\nherobrine\nHexa\nhey\nhey you smel\nheyhey\nHEYIMCASEY\nHeylo\nheyyyyyyy\nheyyyyyyyyyy\nHGC\nhgfd\nhhh\nhhhh\nhhjjhjhjjhjh\nHHKB\nhi\nHi\nHI\nhi bob andje\nhi boy\nhi dude\nhi im stan\nhi luis\nhi peoples\nHi Walkers\nHi!\nhi+123\nhi+die\nhi+person\nhi+wyatt\nhi+😛😛😛😛\nhid\nhidde\nHidden Leaf\nHide in tree\nHIGH FIGH\nhihi\nhihihihi\nhihihihihihi\nhiiiiii\nhiiiiiiiiiii\nhikeplays\nHillyBilly\nhindustan\nhipe\nhirochima\nHitman\nHiTTVbtw\nhi😛😛😛😛\nhjb\nhjgkljşsdfos\nhjjj\nhjk\nhkiufit\nh-k-v\nhmm\nho joe\nHobbit\nhockeylover4\nhoddieryne\nhoe\nHOGWARTS\nHoi\nhola\nHolden chan\nhOle.io\nHolly\nHoly Romans\nHOLYJARVIS\nHomer_S\nHONDURAS\nHong Kong!!!\nHONZA\nHOT DEATH\nhot dog\nhour\nhouston\nhouthi rebel\nHow you doin\nhowdy\nHristijan\nhrllo\nHSWR\nhtflame\nHuddy!!!\nHUEstation\nHufflepuff\nHUGO\nHUGO-IPTV\nhugoprohaker\nHungary\nhungary\nhunter\nhuts\nhuzefa\nhvfhjjmg jvf\nhwy\nhxhxjjk\nHyacinth\nhyh\nHyper\nhytw123\ni am a noob\nI am Charles\nI AM DA🐐\ni am drad\nI AM GROOT!!\nI am Noob\ni clapped u\ni got 100nvm\ni kill you\ni love CHINA\ni love you\nI no harm u\ni no kill\ni pro $$$$$$\ni wanna die\nI want Peace\ni will eat u\ni win\ni win sike\nI.m greece\nI+am+DA+🐐+\nI+AM+DA🐐\nI+AM+MENACE\ni+will+beat+\ni9=7\nialwayswin\nIan\nibad\nice cream\nICE CREAM\nicebear42\nicecreamking\niced 2\nICEman\niceman\nICEPAJINGKO\nIda\nidiot\nIDIOT\nidk\nIDK\nIDK18\nID-OS\nidris\nIf you\nifirst4evr\nifkillmeugay\nigotthesnap\niHASYOU\nihatemy life\nIhjhy\niiiii\niiiiiiiiii\niiiiiiiiiiii\nIKEAN EMPIRE\nikjuhygtfrde\nIKKO\nilie\nill roll ya\nilovecorn\nILoveMyMommy\nIluvcats\nIm a mer\nim a toast\nIm a tree\nim depressed\nim gay mama\nim in school\nIM THE BEST\nIm your boss\nIM_IRISSH\nim+100%india\nIM+A+PAPER\nIM+A+SQUARE\nIm+Thanos\nim100percent\nima winner\nimachristan\nImaunicorn\nimbryk\nimCANADIAN\nimcoming4you\nIMGRINDIN4UK\nImJustDrunk\nimm win bruv\nimmigration\nIMPEACH !\nIMPEACH!\nImpeachment\nimpeachment\nImpeachTrump\nImperium\nimtc\nimusti42\nindia\nIndia\nINDIA\nIndia rules\nindia560020\nIndia-best\nindiaisbest\nindian\nINDIAN BOSS\nIndian game\nindian king\nIndian Pro\nindonesia\nINDONESIA\ninfinity\nInfinity\ningooooooooo\ningrid\nInklink\nINKYZ\ninuyasha\nInvensible\nio\nio2\niornmanmk75\nios.0\nIOU\nIRA\nira kot\nirairaniran\nIRAN\niran\nIRAQ\nireberrrr\nireland\nIreland\nIRELAND\nirene\nIRIS\nIrish Brit\nIRON MAN\nIron Sabbath\nironmanmk14\nironmanmk608\nirsh lad\nis the best\nisaaac\nisaac\nIsaac and Sa\nIsaac H LACS\nisaak\nISAC[TYB]\nisam\nisamil\nIsamil_pro\nISINHA\nIslambad\nismailovic15\nISMELLPENNYS\nIsrael\nisrael\nisreal\nIsreal\nissasheep\nIT\nit\nit_victory25\nITA..KILLER\nITALIA\nitalia\nITALIAN\nitaly\nITALY\nItaly\nItaly_Boch_1\nITALYYYY OwO\nits meee\nits ye boi\nIts_BrunoYT\nItsOver\nıu<bbjhızuui\niungiyoibbbb\nIvan\nIvanBars\nivangol\nIWINYOULOSER\nixpo\nizahia\nIzzy\nizzy\nI💗😘Jacob\nJ\nj\nJ.E.R.K.\nj.t\nj0enu\njace\nJaci\njackbenimble\njacob\nJacob\nJacquie\nJAD\njafet.v.593\njaidyn\nJak+\nJakdude\nJake\nJake Cool\nJAKE+WALL\njakemerecr\njakituning\njakkie smith\njakobandmax\njamaica jr\nJAMAICA4LIFE\njames\nJames\njames.w\njamesward+p5\njan\njanbannan\nJasmineSandl\njason\njavi\njaxon\nJaybae82\njayden\nJAYJAY++BOYY\njaylen\nJayle👟locker\nJayMinecraft\nJAyyy\njaz\nJBEE\njbl\nJD\nJdvinter\nje\nJe mama\njebisesrbija\njed123456789\njeef\njeff\nJeffery\njeffy\njelly\nJELLY\nJelly\njelly fan\nJelly2.0\nJellybeans\njellyiscool\nJEMMA DA UNI\njenne\nJENS NORRMAN\nJeonghyeok\nJeremiah+\nJeremy Stoke\nJerry\njessica\nJèsus Crust\nJesus Saves!\nJetsky\nJew h8er\nJews...\njezwik\njfng\njhetalal\njhlkhlkh\njhun vhuv vc\nJicken\nJigglewiggle\nJim Jam Jong\nJimbo\nJimenakiller\njimmy\njimmy+swag\njimmybob\nJingle Bells\nJJ\njj\nJJs\njk\njkhh\nJkk\njksdjksdqa\nJL\njlovo\njmlvk\njo\njo mama\njoddiejo\njoe\nJOE\nJoe\njoe daddy\nJOE MAMA\nJoe mama\nJoe Mama\njoe mama\nJOE moma\nJoe?\nJoe+Moma\njoe+mooomyy\njOEmAMmA\njoey\nJogador\njohan\njohao\njohn\nJohn\nJohn+Ellis\nJohnSA\njohnson\nJOJO\nJojoeeta\nJoKaRy\nJoker\njomo\njon\nJon\njon snow\njonathan\njoni\nJOOJ\nJooJ\nJordan\njordan 1\njordankiller\njordi gay\njordyn\njos\nJosBanana\njose\njose A. $$$$\nJOSE LOL\nJoseMourinho\nJosephi Krak\njosh\nJosh\nJoshTSM\njoshyboy\nJoshyLegends\njosyel\nJotaro+kuzo\nJoueur\nJR\njswag\nJT\njtt\nju\njuan\nJuanM\njuanson\nJuChE GaNg\njudge rachel\nJuegagerman\nJuhis\njuice\nJUJU\njuju\njulian\njuliana\nJulie\njulie\njulien\njulius\nJuly 4 1776\nJumbo\nJune Iparis\njunebee09\nJupiter\nJustice\njv sqod\njx\nJ🐭\nk\nK\nk1rby\nk1slyy\nk1w1p0w3r\nkaaaaarl\nKaaba\nkaas+\nkafu\nkage\nKai is mine\nKaitlynn\nKaizar i Rum\nKaKa\nKAKA DO C.V\nkakka\nkaleb_1204\nkall+öl+hurr\nKappetroelia\nKaren\nkaren is a b\nKarl\nKarl X\nkat gamer 12\nkat gamer 77\nkatrina\nkatsudon\nkatt russian\nKatya(;\nkatΣ(￣ロ￣lll)\nKawhi\nkayaismylove\nkayden\nKazakhstan\nkbmnbuidhibd\nkc\nKC\nkcv\nkd\nKEBAB\nkefal\nKeizo\nKek+Bur\nKEKW\nken kaneki\nKendall\nkendog\nkenya\nKerby\nKerfuffle\nKERMIT\nKevin\nkez\nkgf\nkhaled\nKhattab\nKiddo\nkidfury2123\nkien\nkier\nKilian2.0\nkill\nkill me\nKill me\nkilla_cat\nKiller\nkiller\nkiller!\nkiller+\nkillerzombie\nkillmonger\nKillTrump\nKillz\nkim jon uun\nKim Jong Un\nkimberly\nKimitzuu\nKim-Jung-Un\nkinca\nking\nKing\nKING\nKing 100%\nking 11\nKING BOB\nking boy\nKING BRIER\nking Jr\nKING KILL\nKing of all\nKING OF ME\nKing Pengu\nking rian\nking.io\nking_iusti\nKINGBEAST😛\nkingcobra\nKingGeorge\nkingkinohi\nkingman\nkingnoah\nkip\nkira\nKIRB!!\nkirito\nKittaM\nkitty\nkiwi\nKiya\nkk\nKKTC\nKLAUS\nklc\nKlose\nKlovborg\nKnickers\nknock knock\nknockyghost\nknowlen\nkoasar\nKoby(billy\nKohai\nkolek\nkolibri\nKonstantin\nKonstantinos\nkool+cid\nKOOLAIDMAN\nKorea\nkosi6ixx\nkostis4\nKrachen\nKRAL\nkrall\nKramek\nkret\nkrvtky\nKSI\nKT\nKUBUS\nKURVA\nkuy\nKuzgret99\nkvamp\nkx\nky\nkylancruz\nkyle\nkys\nL\nl\nL is 4 Layla\nL0rdFox\nL8Nick\nla mala suer\nla+faucheuse\nlachie\nlachydachy\nladd\nLady\nlady\nladybag\nLagz\nlala\nlalalalalala\nlalalalla\nlalaland\nlambolovers\nlamis\nlan\nlance\nlandon\nlandon.h\nlano\nLaraffel\nLars Gille\nLATVIJA\nLaura\nlauren gallo\nLaUruguaya\nlava\nlavey lavey\nLavika\nLayla\nlazarbeam\nLazarbeam\nLAZARBEAM\nLazarBeam\nLAZARLAZAR\nlazer beam\nlazer yeet\nLazer_Glow\nlazerkid\nlbj\nle\nLe Pagg\nle TUEUR\nleah\nleandro\nLEANDRO\nlebanon\nlebensraum\nLEBHjr\nlebron james\nlee\nLeeLa\nlega\nLegend\nlegend\nLegomancalle\nlel\nLELO\nlemme get100\nlemonisha\nlenka\nlentil\nleo\nLeo\nleonekip\nleopapi69\nlesturmwaffe\nLET IT GO!!!\nlet me 100%\nletme%50pls\nletme100%pls\nletmeget100%\nlets piay\nLets Play\nlets swim ;)\nLetsdothis\nlevani\nLevant\nlevel1\nlevi stinkt\nlevman\nLew\nLewiatann\nLewisPlayz\nlex\nLexluFV\nleys096\nLiam\nLiam YouTube\nLiaoPing\nliban\nlicea\nlichtenstein\nlicon ligers\nlIe SucKs\nlier\nLietuva\nlightning\nligma\nlike a boss\nlil boat\nLil nazbol\nLIL paper\nlil+big+brai\nlil+nax+x\nLIL+TJ\nLilac\nLILBOB\nlilbon\nlilian\nlilly\nLilly\nLilo\nLilou\nLilpootpoot\nlilproon\nlilpump449\nlilu\nlily\nLily S.\nlilymachmakr\nlimbo\nlina\nLionman\nLisa\nLISE\nlitdabfam\nLithuania\nlithuania\nlittle j\nlittle timmy\nLittle_Billy\nLittleBike\nLiya\nLiz;) ;)\nlk\nlkd\nLL\nLLLLOOOOLLLL\nLloyd\nlmao\nLMAO\nlnj349\nLoading...\nloading...\nloaggy\nLocky\nloding...\nlogan\nlogan205\nLOGIN\nlol\nLol\nlOl\nLOL\nLol hi\nlol sdf\nLOL U YT\nlol2\nLOL3D\nLolmini\nlolo\nLOLy\nlong\nlord\nLORD\nLordPawwGame\nLordplayer\nLorenzo\nloro=ivan\nLort\nLos mejores\nloser\nLosinTex\nLost\nLostCause\nlots+of+cash\nLouis\nlove\nLove\nlove daniela\nLove1234\nlovebug\nᶫᵒᵛᵉᵧₒᵤ\nlubag op zon\nLUCA\nLUCA83\nLucaasak747\nLucas\nlucas\nLUCI the lol\nLucy\nLucy3\nluiz\nLuk\nLukas\nLuke\nluke storm\nLukerdepuuk\nlukezquad\nlul\nLula Livre\nlula livre\nLullin\nlulu\nlunapup\nlunchtime\nLUZ\nluz\nLuz\nLynetteNoni\nM\nm\nM E X I C O\nM Qaseem\nM&M\nM.Verstappen\nM+AND+A\nM10D\nmaas\nMacedonia\nmacedonia\nmacedonija\nMACY+MY+DOG\nmad dog\nMAD!\nmadara\nmadddddd\nmaddog\nmaddy\nMadHamster\nMaegaard\nmaelspi\nmaguire\nmaitrephenix\nmaja\nMajik Paper\nmak\nMAK\nMakar And M.\nmakealgergrt\nMakerFaffa\nMAKI681\nmalala\nMALAYMAN\nMalaysia\nMALEAH\nmalek+Bully\nmalik\nmalikye\nMalta\nmamaam\nMamma russia\nmammamia\nMan 0f Y33ts\nmandascript\nMANDO\nmanga!\nmAnixX\nmannekam\nManofMelon\nManon\nMap\nmar\nMARA+......\nmaravilhoso\nMARCELO\nmarchelo\nMarcolla\nMarcos\nmarcproo\nMargaret\nmaria  isabe\nmariana\nmarianabr...\nMarie\nMARIEM\nmarina\nMarinette\nMArio\nmario\nMario\nmario tiffo7\nMarkelpro\nMarkify\nmarkus\nmarquitos\nmarshmello\nMarthaLupton\nmartin\nMartin Brody\nMartinli\nmarzens\nMascara Maro\nmason\nmason#6\nMast3r4life\nmaster\nMaster.T\nMasterGamers\nMasterJak\nMat Eagle\nmateeney\nMATEFRANCO🇪🇸🇪🇸\nMATEJQQ\nmateo\nMateusz\nmath is cool\nmatheus\nMATHIAS\nMathilde\nMathon54\nmatin\nMatteo\nMatthew\nMATTHEW\nmatthew\nMATTIE\nMauri\nmaury2\nMAX\nmax mandel\nmaya\nMaya\nmayi\nmazlum\nMazur\nMC_475\nmc+rhyan\nmcfatty\nMD\nMe\nME\nme\nme #1\nME > YOU\nme lucky\nme me\nme name jeff\nMe ow\nme+de100%pfv\nMea\nMeah\nmee is marco\nMEEEEE\nmeep\nMEGA.P\nMegan\nmeh\nmehmet\nmelis\nmelke\nmelon\nMeme\nMemeDawg123\nmemememememe\nmemes\nMeow\nmeow kitty\nMeowrian_opi\nMephi$to\nmepis\nMepis\nMerca\nMerchanj\nMercifulLord\nmerhaba\nmeri\nmerica\nMERICA\nMerica\nmerlin32\nMessi\nmestre\nmet\nMetamorphicl\nMETHFORKIDS\nmew\nMexicanos\nMexico\nmexico\nMEXICO\nMéxico\nMEXICO_\nMey\nmhkgy\nMI\nmi paraguay.\nmia\nMia:D\nMIALG\nmiau\nMicah\nMichael\nmichael\nMichel849\nmichiel\nMickis\nmicko\nMidnight\nMids\nmiedema\nmig\nmighty gay\nMiguel\nMihaxGaming\nmihir\nMikaela\nMike\nmike\nmike ock\nmikey\nmikhail\nMIKI\nMilk++++++++\nMilliano\nmillie\nmillinum\nmilosh\nmimai\nmine\nMini morgz\nminibytor14Y\nminnietong\nmiriam\nmiss biggest\nmit\nmitchel\nMITT+NAMN+\nmitvit\nMiya\nMizgin\nMJ\nMJOLNIR\nml\nmm\nmmehdi\nMMER FOREVER\nmmmmmmmmeeee\nmo\nMO+KHAN\nModelHorse\nmoenhide\nmoh321\nmohamed\nMohammadOmar\nmoki+baba\nMoldova Înt.\nmolina\nMom\nmom\nmomma\nmommy\nmommy+mommy+\nmomo\nmomomcjol\nMONEY\nmoney man\nMONEY!\nmonkey+\nMonkey13 🐒\nmonkeycat\nMonster_1\nmoo\nmoon\nmoon21\nmoos milk\nmorgan\nmorganbrosct\nmorocco\nMOROCCO\nMoş Moldovan\nmoskow\nMother\nMother bird\nmotherland\nMOTHERRUSSIA\nMotherRussia\nmotomoto\nMountainMama\nmoutaindrew\nmoutasem\nmove like\nmqi34wejpiwf\nmr almutari\nmr beast\nmr crab\nmr krabs :)\nmr man\nMr Meat\nMr TurtleMan\nMr. McBean\nMr.blueberry\nMr.Minion\nMr.TurtleMan\nMr+E+boy+27\nMrbeast6000\nmrfreshasian\nMRFRESHASIAN\nMrTyr16\nMrvel\nMr-woo\nMSNB\nMszV2\nmuchogracias\nMugh\nmuhammad\nMuharrem\nMuhib\nmuji\nMulle\nMurica\nmurilo\nmuslim\nmuslim child\nmuslimsrule\nmuslk\nmustafa\nmv\nMwahahahaha\nMy Doom\nMy frienz\nmy nats\nMY SECRET\nmy+name+is+j\nMya\nMyDemons\nmym\nMyName=Noddy\nMyNameIsJeff\nN\nN O R G E\nn.54t834\nna\nNABIL\nnacl\nnada a ve\nnaden\nnaimaD\nnaji\nnajib\nnala\nnamastha\nname\nName=Noddy l\nnamit\nnani\nnanny\nNapoleon\nNara\nNARUTO\nNash\nnate\nNatedogg\nNATII 599 PL\nnative\nNats\nnaughtyomega\nnaut\nnave\nnaya\nnayr\nNazar0360\nNBA265$$$$\nndsbkhcs\nNeach-raoin\nnebman\nnederland\nneed reaper\nNegro\nNEIKO\nnein\nneneng b di\nNeneng Z\nneo\nneolixy\nneolixy Fra\nNeoTilted\nNepal\nNerdyPorg99\nnetanel\nNetherlands\nnETHERLANDS\nNeupi\nnevo\nnew hair\nnew kid\nNew zealand\nnew zealand\nNext Victim\nneymar\nNeymar Jr\nNEZUKOOOO !!\nNf\nNguyen\nni\nnice\nnice pro\nnici\nNICK\nnick gur\nNick J\nNICK MANATE\nNick_alberto\nnickosama\nNico\nnicolas\nNicolas Pro!\nnicole\nnicu\nNIGERIAS BAD\nnight\nnight_cay\nnijo\nnika tsomaia\nNIK-ART\nnike fan jr\nNIKO\nNiNipineツ🍍\nNinja\nninja\nNinja kid\nninja urso\nNip_Nip\nNisaa\nNishad\nNITRO+GALIXY\nNix\nNizam\nnkls\nNL gamer\nnn\nNnbg\nnnn\nNNN survivor\nno\nNo\nno pewdiepie\nno u\nNO U\nNO u\nNO!\nNo_name\nno+u\nnoa\nNOAH\nnoah\nnocapowo\nnoco\nNOE\nnohemi\nNOLA\nNolan\nnome\nnomi\nnoncepedo\nNono\nnoob\nNoob\nNOOB\nnoobbbb\nnoobie\nNoobies2006\nnoobs kill\nnooob\nnooooooobers\nnoooooooo\nNoorPlayys\nnope\nNorge4theWIN\nNorth\nnorway\nNORWAY\nNORWAY FOR W\nnos.vs.vos.\nnostopme\nNot Bill\nnot dumbey\nNot your toy\nNothing\nNotMyTail\nNova\nNOVA/KERIE\nNOW UNITED\nNowOrNever\nNP-1\nNR-077\nnu3ga/lu3\nNUGGETS\nNum nom\nnumsei02\nnunes\nnutnoodles\nNUTY ALIADO\nnwo1840\nnyan cat\nnyan+cat\nnyck\nnyon cat bye\nNz\nNZ BOIZ\nNz Rules\nNZ!! x3\nNZ!! X3\nNZ!!! X3\no\nO+Muhammad\nObi-Wan\nOBJECTION!\nOG\nog\nogaurav\nOGnarutobeat\nOGnoobie\nOH CANADA\nOH YEAHHH\nohio\nohockey22\noi\noigdfggyh ty\noij\nok\nOK Boomer\nok boomer\nok+\nOLCAY\nolddad\nOldSkooler03\nOldtimer\nolivia\nollallol\nollie\nolliePRO\nolly is best\nololo\nomar\nOmar\nomar king\nOMG4lif\nOneF8\nonepaperman\nonii~chan\nO-O\nOOF\noof\noof+master\nookko\noooooooo\noops\nop\nOP THE ONE\nop twisty\nopium GR\nopium+(IZI)\nopos\noptimusprime\norange\norchid\nOrigar me\nORIGIN\nØŞ〗๖ۣۜǤнσsτ༻\nOsc45\noscdosc\nOskar\noso\nÖsterreich\notario\nOTSOSU\nOtto\nOttoman\noui\nouououououou\nOurChael\nouss\noutmeal\nowe\nowen pro!!!\nOWL CITY\nOwl hoot\nOwO germany\noww+noo\nOxo+Whitney\nOyuncu\nOZ\nOz Bloke\nOzmainia\nP 19/53\nP.A.Trick.O\nP+S=6\nP11\np13\np3n1s\npablo\npaco\nPadfoot\npahan\nPaislee77\nPAISLEY\npaitton\nPak\npak zindabad\npakdabest\npalistine\npanama\nPancho Villa\npancrazienn\npanda\npanda16 🐼\nPandix\npanther\nPanzer\nPanzerwagen\npapa bear\npapa io\nPAPA LÉGUAS\nPapa smurf\nPapelFolha\npaper\nPaper\nPaper 2.0\npaper money\npaper. io 2\nPaper.io\nPAPER.IO\npaper.io\npaper.io2\nPaperBoi\nPaperiochamp\npapermaster\nPapers\npapper\npapperskalle\npapy\nPARASITA BR\nParker\nparker\nParkerjr89Yt\npartizan\nparty\nparynhar\npastry\npat\npatataxD\npatilla\npatria\npatrick star\npatriotuluca\npaul\npaulina\npaulius\npauly\nPAX!!!:)\nPB\nPC Ragin\nPCM\nPCRM\nPDOGELEGEND\npeace makers\nPecularis\nPedik\nPedoMan69\npedro\npedroloveusa\npeduncle\npee and poo\npeeen\nPeen\npeki\nPENCILM8\npendejo\nPenela\nPenn State\npennis\nPenny\npenny wise\npenny+wise\nPennyise\npennywise\nPENNYWISE\npennywise+jr\npenywise\npeople\npepalacerda\nPepe\npepe\npepo\nPeppa pig\nPercybeth\nperdy\nPerdy\npereira\nperhaps\nPERIDOT\nPerko\nperrro69\nPersian23\nPerson\nperson2.0\nperu\nperuuu\nPeterParkour\nPewDiePie\nPewdiepie\nPEWDIEPIE\npewdiepie\npeyton fanni\nphantom\nPharoah\nPhatan\nPhe\npheobe\nPHIAAAAA\nPhil\nphilippenes]\nPhilippines\nphilippines\nPhilippines!\nPhloxx\nphoenix\nphong\nPI-077\nPia\npianter\npichu\npickle27\npidor\nPIE\nPierce\nPierogi\npietje\nPiggy\npiiiiiiiiiii\npikachu\nPikachu786\npikaso\npILar\nPilipinas\npilippinas\nPineapples\nPINGAS\nPingPongPie\npipka\nPixalated\nPixel\npizza\nPizza\npizza man\nPIZZA ROLLS\npizza123\npizzaking\npizzz\nPj Iese\npk\nplackins\nPlankaster\nPLANTAIN\nPlayer\nplayer\nPlayer One\nplayer3812\nplayer587joe\nPlease don’\nplease dont\nplolal\nplonk\nploopy\nplsletme100%\nPlywood\nPLZDONTKILL\nPlzdontkillm\nplzdontkilme\nplzplz1!1!!1\np-noob\npo\nPOJHIOP\npoker\nPoland\npoland\nPOLAND\nPoland byycz\nPOLAND PLAYE\nPolar Bear\nPOLICE+CHASE\nPolloh\nPOLO\npolo\nPOLSKA\npolska\nPolska\npolska ;]\nPOLSKA GUROM\npooh\npoohfromztek\nPoon888\npoooooo\npoooooooooop\npoooooooop\npoooop\npooooppppppp\npop\npopcorn!!!!!\npopo\nporcodue\nPorgy\nporphygennet\nportabacaxi\nportugal\nPortugal\nPosada\nPoseidon\nposwjhygscfj\nPoT_LbEaR\npotato\nPotato\nPotato ;)\nPotatoLover\nPOWER\npp\nPP Water\npppp\npppppp\nPranked\nPratham\nPrentes\nPresident Xi\npress ctrl w\npresto boy\npreston\nPreston\nprettydark\nprime time\nprinces\nPringles\nPrinz Eugen\npro\nPRO\nPRO Status\npro+gamer$$$\npro+in+usa+\npro360\nProoo\nPROS\nprosciuttix\nProud Aussie\nproudtobePK\nProZ\npseudo\nPSM2005\nPSU\nPU$$YSTILLB*\nPUBG MOBILE\nPUMBA\npumpkin\nPumpkin King\npuppy lover\npups\nPure\npurple grape\nPurpureon\nPurringMotor\nPUTIN\nPutin\nputinukraine\npuzzlez.io\nPweedy_33\nPwnd\npz9\nq\nQARABAG\nQeen\nQINGDYNASTY\nQixStar\nQuébec\nQueebOfHeart\nQUEEEEENN!!!\nQueen\nqueen\nQueen juicy\nQueen S***\nQueenjuicy😍\nQuicoarpro\nquim\nQUINCY\nQuinnDH\nqwerty\nqwerty.io\nqwertyqwerty\nr razzel\nr u ok\nR. Moldova\nra\nRā\nRaccr\nRaceTraitor\nrachelkgreen\nRadiant+Oryx\nRæ\nraed\nrageElixer\nrahmo\nRaiden\nRAIF\nrainbow\nRainbow\nRainman\nraja\nrami\nRandom User\nraphael\nRAPHAEL 075\nrara\nRATATATA\nRATATAYEET.0\nRaven23\nray\nraycon\nRayman\nRayy\nraziq\nRAZOR BLADE\nRdy+Player+1\nrdyer\nReal jelly\nrealibby\nrealization\nREALJELLY\nreally cool\nRealYourName\nReap YT\nRed Axe\nred fox\nred robbin\nRedcenter\nRedCenter\nredpanda\nree\nreee\nREEE!!\nreeee\nREEEEEEEEEE\nreeeeeeeeeee\nrekt\nREMY CRAKERS\nRenato\nrereeeeeee\nREUTRIOX\nreuven\nrevengetime\nRex. Lousdal\nReyna\nRhayven\nRHEC\nRHENIUS\nRhubarb\nrhyan\nrhys\nricardo777XD\nRice Farmer\nrichhomie\nRick\nrickenbacker\nridge\nriggidy\nRiket\nRILEYRILEY\nRinger\nRipDuko\nRIPPER\nrj\nRM52\nrob\nrobby\nroblox\nrock\nRocket\nrockstar\nrød grød\nrodrigao\nRoey\nrohit\nrojos\nromania\nRomeo\nRomes\nromrom\nromrorm\nRonald OMG\nRonaldo\nRONALDO7\nronaldomg\nRONNIE\nroosalieee\nrose\nRoSh\nrot\nRouchdi22\nrourou\nroverbre\nRoxane BTW\nRoxanne\nroza\nrozaanim\nRPTROJANS\nRR2\nrRazvan\nrrr\nrrrrrrrrrrrr\nrrwwertf\nRSA\nrtkgjgvkjgbj\nRubiksMan\nRUBY\nRukiKazuki\nrup\nRuperto\nrusame\nRusherTR\nRuske\nRUSSIA\nRussia\nrussia\nRussia  :^)\nRussia Putin\nRUSSIA!!!!!!\nRUSSIAN DIMA\nRussian SFSR\nRUSSIAN SFSR\nRusso\nRUUUUUDDDDYY\nryan\nRyan\nRyan the pro\nRylie\ns\nS*A*R*G*E\nS.M.A\ns8n\nSA Wichmann\nsab kat\nsaba\nsaba 6\nsaba nayb\nsaber\nSacred\nsad ^-^\nsad cube boi\nSadiq2010\nsafg\nSage\nsai\nsaid\nSaiko+Bears\nsaitama\nsalgadoBR\nsam\nSam\nsam Bates\nSamantha\nsammy+sonic\nSamoJako\nsan\nSANJIN\nsanone\nsans\nSanta]\nsap\nsapwings\nSara\nsas\nSASCounqerer\nsasha\nSasuke\nsasuske\nSaudi Arabia\nSaugat\nsavage\nSAVAGE\nsavage Foxy\nSavagegemini\nsavion\nSchnaubi\nSCHON\nschumhey\nSchumhey\nscissors\nScones\nScott-zen\nscp-49\nSCRSBRATHENS\nScrubby\nsda\nsdr\nsdsdsd\nseaku\nSearch Bts!\nseb is waifu\nSebas.SZN\nSEBASTIAN\nsebasydani\nSec\nsedres\nsedric\nSEF\nsefs\nsenor pot\nsenor potty\nSenpai~\nSeppl\nSerbia\nSergei\nserginho\nSERGIO\nServ\nServexal\nSes ed\nSEV7N\nSGE\nSGEKids\nSGthe2nd\nshadow\nShadow\nshadow kille\nShadowAlx\nshae\nshaheer ibe\nSHAI\nshako\nShannon\nshannon-usa\nShanShan\nShanyya\nshar shya\nshark puppet\nsharons maf\nShayan Hadi\nSHAZIL\nshekelstein\nsherry\nshoj\nSHopa\nshortie\nshorty\nShqiperia\nshrek 2\nShreyash\nShrungus\nshut_up\nSiIvaGunner\nSiLeNtViRgEn\nSillyMrQ\nsime\nSingapore\nsir awesome\nSirGeorge\nSissy\nSixball\nSJ Boyz\nsjon van der\nSk3tchYT\nSKÅNE ER VOR\nskeletongame\nskeppyBALD\nskillz\nskinnyafrica\nskrt skrt\nSKS16\nSKSKSKSK\nSKSKSKSKS\nSKSKSKSKSKS\nSkull\nSkullcrusher\nsky peace\nSkyla\nSkylanders!\nSlade\nslak\nslavdo\nslemmsf\nslime moster\nslimer1011\nslipknot\nSlither.io\nSlithshowbob\nSlogoman\nslotz\nsmaker\nSmall Asian\nsmall head\nsmash\nSMASH\nsmell mu toe\nSmelly negro\nSnakeGamer\nsneaKING(HU)\nSnickers_007\nsnip+snip\nSniper\nSnipez_Tylor\nSNOR\nsnowflake\nsoban gamer\nSocialismSUX\nSofia J.\nsokk\nSoldMyKids\nsomeee\nsomeone\nsometimesno\nsomila\nsomo\nsonia\nsonic\nsonic+max\nSonicspeed\nsønnike\nsoolkig\nSOPHIE&KEEFE\nSorry\nSorry eh\nSorry Eh?\nsorryheather\nsou seu pai\nSouth Africa\nSOUTH KOREA\nSouth Korea\nSouth Korean\nSouwla\nSoviet\nSovietRussia\nSovietUnion\nsp\nSPAIN\nSpain\nspain\nSpain is bes\nSpain winner\nSpamInaCan\nspangles\nspare me plz\nSPARKLES\nspbk\nSPEEDISKEY!!\nSpeedP01\nSpeler\nspider man\nspider_royd\nSpieler\nSpongeBob\nSpottedleaf\nsprinkles\nSQ\nsquidbob\nsquidward\nSr Ezecolas\nSrbija\nSree Hari🎮\nSrTheMeryem\nSS\nss\nssC\nsskkiinn.\nSST\nssundee\nSSundee\nSt. Pierre\nStalin\nstalin\nSTALKER\nSTANDREU 14\nStandWithHK\nstar\nStarcastic\nStarry sky\nsteen\nstefan88\nStegtFlæsk!\nStephanie\nStephDami\nsteve\nSteve\nSteve Irwin\nSteve Smith\nSteve+Irwin\nstfu\nStickyPaper\nSTILAGa\nStinky Mex\nstnomas\nStokolaN\nStracheBeidl\nstrawberry\nstrong\nSTRONG\nstu\nStubbur04\nstud\nStuxnet\nsuatunarda\nsub 2 fgteev\nSub 2 SSunde\nSUB 2 SUNDEE\nSub+2+sundee\nSub+To+Me\nSUB2BADGAMER\nsub2blitz\nsub2estib\nSub2MVRowner\nsub2Patherz\nsub2pewds\nSub2pudiepie\nsub2RHally\nSUB2SSUNDE\nSub2Ssundee\nSub2SSundee\nsub2ssundee\nsub2Ssundee\nsub2sundee\nSub2SUNDEE\nsubham\nsubpewdiepie\nsubpurpleify\nSubSpyrosTDB\nSubTobytalks\nsubtofralica\nSUBTOPHANTOM\nsubtossundee\nsubtosundee\nsucc\nsuck     dd\nsuck d\nsullo\nSULTAN\nsunan\nsuomi\nSuomi\nsup\nSUP WITH YOU\nsuper mine\nsuperaaronAH\nSUPERGI7000\nSUPERHERO\nsupeRman\nSuperNova\nsuperpichu\nsuperstar4n\nSuperThanos\nsuperuser\nSUPREME\nSUUUUU!!!!!!\nsuwayda\nsv\nSvea Rike\nSven\nSven pro\nsw\nswampman\nsway\nswe\nsweat_bilol\nSweden\nSWEDEN\nSweden Börk\nswedish\nSweet\nsweetnsister\nswety swedn\nSwitzerland\nşxh\nsyd\nSydney\nsylar\nSylar\nSyrianRefuge\nt\nt.a\nT0mmy1010100\nta mère\nTacoman\ntacos\nTai 108\ntAimMD_ILG\nTaiwan NO. 1\ntajus\ntake that\nTake+the+L\nTalvisota\ntaman suria\nTania\ntank boy\ntank you\nTankart364\nTANKSCOMIN\nTatann09\ntauaneee\ntaxty winky\ntay\nTaye(:\nTaysian08\nTazlen\nTazzer\nTBNR_FRAGS\nTBNRFrags\ntea\nTeam Denmark\nTeam kanada\nteam trees\nTEAM U.S.A!\nTEAM U.S.A.\nteam U.S.A;)\nteam up\nteam USA\nteam with me\nTeam?!\nTEAM+U.S.A.\nteamcanada\nteammalaysia\nteamU.S.A:)\nteamU.S.A;)\nTeamW/Me\nTedde\nTeddy\nTEDT\nTehno King\ntele\nteletubbie\ntelletubi\nTemas2323\nteo\ntermico\ntessa\nTessbajanger\ntester\nTetPez\ntex\ntfs\nTfue\nTHAHAHAHAH\nthales\nThanoidugly\nThanos\nthanos\nTHANOS\nthANOS\nThanos Snap\nThanos#1\nThanos2\nthatguy\nthawra\nthcboi\nThe  Guy\nthe beata\nThe best\nThe Best\nTHE BEST\nthe best\nTHE BEST ONE\nthe best wd\nTHE BOSS\nthe brusier\nThe Buddy\nthe cholo\nthe cool kid\nThe Disowner\nThe Doctor\nThe Eraser\nthe fake 23\nthe fastest\nThe Game\nthe goat\nThe Hype\nthe kid\nthe killer\nThe KING\nthe king\nThe legend\nThe Master\nTHE MVP\nTHE Noob\nthe NXT\nThe one\nTHE PENGUIN\nthe pro\nThe Pug\nthe snowpand\nThe SUCC\nthe_best_guy\nthe0nly.Jae\ntheboss\nTheCatsFans\nTheChuky YT\nthedanklord\nTheDGamer09\nThefiend\nthegoat56\nTheKillerBR\nTheKing\nTheNameless\ntheoden+.g\nThepenguin50\nTheProcess21\nthethegiri\nTheZak king\nthhhhhh\nTHICCBOI\nthiccy miky\nTHIS IS USA\nthiz is USA\nTHOMAS\nThomas TANK\nthor\nthotpatrol\nthunderthe1\nti\ntic tocer\nTifo\nTIFO\ntifo\ntifo nl\nTIFO.\nTifoGang\nTIGRE\nTikTok\ntim\nTim hortons\nTimo\nTimors rage\nTimothee\nTiNaO\ntiss\nTJENA\ntnbq;\nto nem ai\nTodoroki\nTodorov\nToeCollector\ntoeeater\nTOESSS\nTolkeus\ntom\ntom n\nTOM.COM\ntomas\nTommy\ntomtom\nTonT0\ntony\nTony24\ntooooooooooo\nTop Ramen\nTOP.io2\ntorbje\ntortle\nToryMusic\ntotal pharoh\ntoto\ntotolasticot\nTotolito\nTotus Nata\nToyree\nTpdddd\nTr\nTR3$\ntrao\ntrash\nTRASH$$$$\nTrenton\ntributo\ntrinaty\ntrisha\ntristan\ntroywilldoit\nTruce\ntrud bucket\nTrueComrade\ntrueno+pai\nTrueNorth🇨🇦\nTRUMP\ntrump\nTrump\nTRUMP 2020\ntrump 2020\ntrump fan\nTrump Rocks\nTrump Sucks\nTRUMPFORLIFE\nTRUMPsupport\nTrumpWallBad\ntruse\ntry me\ntry+me\ntryghujk#\nTrympan\nTsar+Ivan\ntsjr.+aj\ntsm_jeremiah\ntsneia\nTt\nTTTTT\nTTV King Kay\nTTV.OWENLIT$\nTtvJaygucci\ntu madar cho\ntu mama\nTuesday\nTUKI-K2009\ntumadre69\ntung handsom\ntuo+sorello\nTURK\nTURKEY\nTurkey\nturkey\nTürkiye\ntürkiye\nTÜRKİYE\ntürkk\nTurky\nturnip\nTurpin\ntushar\ntutu\ntutubiel\ntuvieja\nTUY\ntwinky winky\ntwoja stara\ntxera\nTxR kkkk\nty\nTy the guy\nu\nU BOT\nU eat I eat\nu mommy\nU S YAY\nu suck i win\nU.A.E\nU.K\nu.r.r.s\nU.S.A\nu.s.a\nU.s.A\nU.S.A 1\nU.S.A!!!!!!!\nU.S.A.\nu.s.a.\nU.S.M.\nU.S.S.R\nU.S.S.R.\nU.U\nu+gay\nu+lost\nUAE\nuae is best\nUbahn\nubermensh\nUchicago\nUday\nudit\nuhPanda\nuhttikjb cxs\nui\nuiiiii\nuk\nUK\nUK 4 DA WIN\nuk for life\nUK is BEST\nUkraine\nUkraine best\null float 2\nultarvision\nultra goko\nULTRA NK\numair\nUmairica\numm\nuna peca\nuncle phil\nunicorn\nunicorn girl\nunicorncrazy\nunicornnnnnn\nUnited king\nunited Kingd\nUnited state\nUnitedStates\nunitedstates\nunknown\nUNKNOWN X\nUNKNOWN+X\nunspeakable\nunspeakableb\nunspeakablz\nUnspeakale\nuofaku5 cv c\nup da ra\nupanddown\nUR bad\nur dad\nUR DEATH\nur mom\nUR MOM\nur mum\nur+daddy\nUR+MUM\nur+mum+gay\nurielsucks\nurmomgaylul\nurmumgay\nurself\nUS Al te Way\nUS Killer\nUS MILITARY\nus patriot\nUS trump fan\nUS+Border+\nUSA\nusa\nUsa\nU-S-A\nUSA +++ EU\nUSA BEST\nUSA DE BOSS\nUSA dominate\nUsa for life\nusa for win\nUSA IsMyCity\nUSA kill you\nUSA KING\nUSA Mina\nUSA ON TOP!!\nUSA RULES\nUSA USA\nUSA USA USA\nUSA USA USA!\nUSA!\nUSA!!\nUSA!!!\nUSA!!!!\nUSA!!!!!!\nUSA!!!!!!!!!\nUSA.USA.USA.\nUSA/United\nUSA+++EU\nUsa+for+life\nUSA+KING\nUSA+NO.1\nUSA+ಠ_ಠ\nUSAAAAAAÆ\nUSAFORTHEWIN\nUSAisBetter\nusaismycity\nUSARULES!\nUSAtrump fan\nUSAUSAUSAUSA\nusbruthers\nusg\nUSofA\nUSSR\nUstaj Srbine\nUsuck\nuuuusssaaa\nuwu\nuy\nUzair\nV\nv\nV00D00\nV0rix 93\nvadfer\nvale\nValou\nVanderboy\nVanessa\nvanessa\nvango\nVanilla\nvankata\nVAR\nVargen\nVava\nvb\nVCcrew12\nvedant\nvenezolano\nVerby\nVesta\nviavidi\nvictor\nViet Nam\nvieze jos\nviki show\nVikiingen\nViking\nviking\nViking horde\nviktorblook\nVincent\nVINCENTE\nvinh\nvini dibra\nvinizx\nVIRT@RUS\nvishvak\nVisitTürkiye\nviva\nViva Chavez\nViva españa\nviva MEXICO\nViva Vox\nVIVAMEXICO\nVIVE ALGERIA\nvive israel!\nvkng\nvlad\nvlad.putin\nVLADA\nVladimir\nvlado\nvlle\nVoid_Zpace\nvoldimortina\nVoldymorte\nvoodoo king\nVoughnDaBoss\nVovchik_007\nVOX\nvs\nVSCO\nVSCO Girl\nVSCO+girl\nvuci\nvufidviudhvo\nvvb\nvvbvbvbv\nW0rldRun\nWa saaaa DUD\nwabble\nWackyBacky\nwallace\nwantpunani\nWanturoil\nwar\nWarming\nwarren good\nwartshoter\nwas mama\nwasd\nwasezfe\nWatarMelen\nwater\nWaterBlaster\nwatermalon\nWavyy\nwawa\nWAYNE 14\nWE\nwe are Groot\nWe will win!\nwebby\nweeeee\nweener\nwesad+\nWesGamer\nWeston\nWhaaaaat\nWhat\nWHAT THE F\nWHATSAPPDIY!\nWhatsappdiy!\nwhiplash636\nWhither+A\nWho Cares?\nwho dat\nWho?\nwhotfisnuty\nWHY\nwhy\nWhy So Mean\nwhy+?\nWiiiiiiiiiii\nWiiPii Fit\nWiiPii OnU\nWiktor\nWil Smiff\nwill\nwilliam\nwilljoal\nwilmer\nWily_S\nwin kenya\nwinner\nWINNER\nWinner\nwinston\nWitruwiusz\nwog\nWogan\nWojo\nWolf Lover\nwolf pack\nWolfierose\nwolverine700\nwoot\nworld\nWorld King\nWorst+player\nwow\nWoW\nWOW+!!!\nwowzerz\nWriterGirl\nwrwf\nwsad\nwtf\nwueeee\nWWPAPER\nwwwww\nWWWWWWWWWWWW\nwyatt\nwyattplays\nwywy\nx\nx$xa\nX3DGamerYTX\nx3m\nXagustin5111\nXavier\nxazza\nxc\nXD\nxd\nxD\nXelan\nX-hibit26.ph\nXllth\nXMAN\nx-mas\nXmas iscomin\nXoax\nXS\nxTman417xUSA\nXtrullor\nxwolf\nxx\nXxJibTemixX\nXxnz4lifexX\nXXOKWOWXX\nxXVoidPlayzX\nxyVikash\ny\nY U DUMB?\nY1N6Y4N6\nY1N9Y4N9\nYA BOI\nYA DED SON\nya yeet\nYa_King-Boy\nYAA HACK!\nyaaaaaa\nyaboi4639\nYah Man\nyahooooo\nYall Aint\nyall bots\nYamamoto\nyamum\nyanislepr0_0\nyas\nYas\nYas queen\nyasmin\nYasmine\nYay\nYaY\nyayeet\nyea\nyeah\nYears\nyee\nyee haw\nYEEEEEEEEEET\nyeeeeeeeeeet\nyeeeeeeeeet\nYEEEEEEEEET\nyeeeeet\nyEeEeEt!!!!\nyeeeet\nyeeet\nyeeet me\nyeet\nYEET\nYeet\nyeet boi\nyeet master\nyeet sauce\nyeet sir\nyeet. 42069\nyeet_gg\nYeet+Monters\nyeetakis\nYEETMAN\nYEETYBOI\nyeeyee\nYellowz\nyelo\nyes\nyes sirr U.S\nyfl\nYGo USA\nyi\nYikes\nYımırta Kafa\nyiyiyy\nYNW melly\nyo\nyo check\nYo mama\nYo MAMA\nyo mama\nYobama\nYoboyjb13\nYoGayIfKill\nyogi\nYolo\nyolopro\nYOMAHDUDES\nYonadush\nyonatan aviz\nyonatanYT\nyoria_player\nyosra\nYou\nYou Are Dead\nyou lose 157\nyou noobbb\nyou suck\nyou trash\nyour a BOT\nYOUR AL TALK\nyour awesome\nyour dad\nyour doom\nyour mama!!!\nYour Mom\nyour mom\nyour mommy\nyour momy\nYour mum\nYour name\nyour name\nYour Name\nyour name___\nyour pitaji\nyour the man\nyour+mom\nYour+Name\nyour+name\nYour+name\nyourdaddy\nYourDead\nYOURMOM\nyourmum\nYOUSEF\nYoutube ViBe\nyoutude\nyoyo\nyoyoyo\nyoyoyomama\nyrt\nYT\nythytfgvvhhh\nYukheisMine\nyuki\nYukiii\nyukjh\nyungpinch\nyuriysid\nyuyu999\nYYeet\nYyooooythvhg\nYyyyyyyyyyyy\nz\nZ.A\nzach\nzaden\nzahary\nZahary\nzainab\nzair\nzaki\nzammer1\nzanderfire\nzappierflash\nZarla\nZaven_Wolf\nzavion335\nZAZA\nze luis\nzeke\nzekrom\nZemond\nzen\nzendel\nzenitsu\nzeus\nZeusNaCausa\nzeuuubbbiii\nzghjbnhb\nziad\nziggle\nZiggy\nzimbabwe\nZispy\nZoe\nzombsgaming\nzoom\nzoomer+toons\nZorux\nzuly\nzVolcomBr\nzwicki\nzxc\nzz\nzzz\nZZZZZ\nʕ•ᴥ•ʔ\nΒΑΝ\nΕλλαδα\nΕλλάδα\nΕλλάδαGreece\nορσαλία\nалиса и папа\nАня\nБешеныйХомяк\nВадим\nваня\nварпроф\nВиктория\nВова\nвыкторыя\nГЕРОЯМ СЛАВА\nГлеб\nдима\nева\nевик\nжожа\nиванка\nигорь\nИгрок\nилона.ш.\nилюха и леха\nищу парня ха\nйуввпсппеыаы\nКатя\nкатя син\nКилер\nКирилл\nКОЛ\nКошка\nКририлл\nлаила\nЛОЛ\nлох\nмакс\nМАЛЯ\nмама данила\nМейбл+Girl\nмейиржан\nМолдова\nМонова\nнаследник\nнгпам\nне ИванЦой я\nпенсия\nпец\nпидружка\nПОГ\nпраогкиа\nпривет\nпро\nрорборибли6\nРОССИЯ\nроссия\nрулёва\nслава лава\nсмерт 2.0\nсмпсм\nссср\nСушиВок\nТатьяна\nуееор\nчеловечик\nЧИКИБОМБОНИ\nчитер\nЪЖСЛО\nя царь\nღDaira-chanღ\n�𝐉𝐨𝐉𝐨�\n𝓙𝓞𝓚𝓔𝓡\n𝓶𝓸𝓶𝓶𝔂\n𝔼𝕦𝕟𝕚𝕔𝕖\n🇺🇸BO$$🇺🇸\n🐢OppP+SksKs\n👀👀👀👀👀\n👌👌👌👌\n😍\n😎🇦🇱🇦🇱😎\n🤓Reizuru🤓\n🤩\n🥖🥪🍟🍔🍿😃\nяна".split("\n");
  var greinerHormann = createCommonjsModule(function (_0x1d46f9, _0x1c0167) {
    (function (_0xa4165b) {
      var _0x1bcf7 = function _0x2d033a(x, y) {
        if (arguments.length === 1) {
          if (Array.isArray(x)) {
            y = x[1];
            x = x[0];
          } else {
            y = x.y;
            x = x.x;
          }
        }
        this.x = x;
        this.y = y;
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
      _0x1bcf7.prototype.equals = function _0x4f7ee4(point) {
        return this.x === point.x && this.y === point.y;
      };
      _0x1bcf7.prototype.isInside = function _0x48f458(_0x18d313) {
        var result = false;
        var first = _0x18d313.first;
        var next = first.next;
        var x = this.x;
        var y = this.y;
        do {
          if ((first.y < y && next.y >= y || next.y < y && first.y >= y) && (first.x <= x || next.x <= x)) {
            result ^= first.x + (y - first.y) / (next.y - first.y) * (next.x - first.x) < x;
          }
          first = first.next;
          next = first.next || _0x18d313.first;
        } while (!first.equals(_0x18d313.first));
        return result;
      };
      var _0xd1026b = function _0x55135a(point, point2, point3, point4) {
        this.x = 0;
        this.y = 0;
        this.toSource = 0;
        this.toClip = 0;
        var _0xbd7742 = (point4.y - point3.y) * (point2.x - point.x) - (point4.x - point3.x) * (point2.y - point.y);
        if (_0xbd7742 === 0) {
          return;
        }
        this.toSource = ((point4.x - point3.x) * (point.y - point3.y) - (point4.y - point3.y) * (point.x - point3.x)) / _0xbd7742;
        this.toClip = ((point2.x - point.x) * (point.y - point3.y) - (point2.y - point.y) * (point.x - point3.x)) / _0xbd7742;
        if (this.valid()) {
          this.x = point.x + this.toSource * (point2.x - point.x);
          this.y = point.y + this.toSource * (point2.y - point.y);
        }
      };
      _0xd1026b.prototype.valid = function _0x108e76() {
        return this.toSource > 0 && this.toSource < 1 && this.toClip > 0 && this.toClip < 1;
      };
      var _0x2b1f73 = function _0x30607f(_0xdd53d4, _0x1571ea) {
        var self = this;
        this.first = null;
        this.vertices = 0;
        this._lastUnprocessed = null;
        this._arrayVertices = typeof _0x1571ea === "undefined" ? Array.isArray(_0xdd53d4[0]) : _0x1571ea;
        for (var i = 0, count = _0xdd53d4.length; i < count; i++) {
          self.addVertex(new _0x1bcf7(_0xdd53d4[i]));
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
      _0x2b1f73.prototype.addVertex = function _0x338c89(first) {
        if (this.first === null) {
          this.first = first;
          this.first.next = first;
          this.first.prev = first;
        } else {
          var first2 = this.first;
          var prev = first2.prev;
          first2.prev = first;
          first.next = first2;
          first.prev = prev;
          prev.next = first;
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
        var result = _0x494ba9;
        while (result._isIntersection) {
          result = result.next;
        }
        return result;
      };
      _0x2b1f73.prototype.getFirstIntersect = function _0xcf3009() {
        var _firstIntersect = this._firstIntersect || this.first;
        do {
          if (_firstIntersect._isIntersection && !_firstIntersect._visited) {
            break;
          }
          _firstIntersect = _firstIntersect.next;
        } while (!_firstIntersect.equals(this.first));
        this._firstIntersect = _firstIntersect;
        return _firstIntersect;
      };
      _0x2b1f73.prototype.hasUnprocessed = function _0x2ae2a() {
        var self = this;
        var _0x409fe7 = this._lastUnprocessed || this.first;
        do {
          if (_0x409fe7._isIntersection && !_0x409fe7._visited) {
            self._lastUnprocessed = _0x409fe7;
            return true;
          }
          _0x409fe7 = _0x409fe7.next;
        } while (!_0x409fe7.equals(this.first));
        this._lastUnprocessed = null;
        return false;
      };
      _0x2b1f73.prototype.getPoints = function _0x2b7c20() {
        var result = [];
        var first = this.first;
        if (this._arrayVertices) {
          do {
            result.push([first.x, first.y]);
            first = first.next;
          } while (first !== this.first);
        } else {
          do {
            result.push({
              x: first.x,
              y: first.y
            });
            first = first.next;
          } while (first !== this.first);
        }
        return result;
      };
      _0x2b1f73.prototype.clip = function _0x14dbbb(_0x1e9b4a, _0x576a5f, _0x5280db) {
        var self = this;
        var first = this.first;
        var first2 = _0x1e9b4a.first;
        var _0x599399;
        var _0x3b223f;
        var _0x28b027 = !_0x576a5f && !_0x5280db;
        var _0x4d1ea1 = _0x576a5f && _0x5280db;
        do {
          if (!first._isIntersection) {
            do {
              if (!first2._isIntersection) {
                var _0x2bf6a7 = new _0xd1026b(first, self.getNext(first.next), first2, _0x1e9b4a.getNext(first2.next));
                if (_0x2bf6a7.valid()) {
                  var intersection = _0x1bcf7.createIntersection(_0x2bf6a7.x, _0x2bf6a7.y, _0x2bf6a7.toSource);
                  var intersection2 = _0x1bcf7.createIntersection(_0x2bf6a7.x, _0x2bf6a7.y, _0x2bf6a7.toClip);
                  intersection._corresponding = intersection2;
                  intersection2._corresponding = intersection;
                  self.insertVertex(intersection, first, self.getNext(first.next));
                  _0x1e9b4a.insertVertex(intersection2, first2, _0x1e9b4a.getNext(first2.next));
                }
              }
              first2 = first2.next;
            } while (!first2.equals(_0x1e9b4a.first));
          }
          first = first.next;
        } while (!first.equals(this.first));
        first = this.first;
        first2 = _0x1e9b4a.first;
        _0x599399 = first.isInside(_0x1e9b4a);
        _0x3b223f = first2.isInside(this);
        _0x576a5f ^= _0x599399;
        _0x5280db ^= _0x3b223f;
        do {
          if (first._isIntersection) {
            first._isEntry = _0x576a5f;
            _0x576a5f = !_0x576a5f;
          }
          first = first.next;
        } while (!first.equals(this.first));
        do {
          if (first2._isIntersection) {
            first2._isEntry = _0x5280db;
            _0x5280db = !_0x5280db;
          }
          first2 = first2.next;
        } while (!first2.equals(_0x1e9b4a.first));
        var result = [];
        while (this.hasUnprocessed()) {
          var firstIntersect = self.getFirstIntersect();
          var _0x424f4f = new _0x2b1f73([], self._arrayVertices);
          _0x424f4f.addVertex(new _0x1bcf7(firstIntersect.x, firstIntersect.y));
          do {
            firstIntersect.visit();
            if (firstIntersect._isEntry) {
              do {
                firstIntersect = firstIntersect.next;
                _0x424f4f.addVertex(new _0x1bcf7(firstIntersect.x, firstIntersect.y));
              } while (!firstIntersect._isIntersection);
            } else {
              do {
                firstIntersect = firstIntersect.prev;
                _0x424f4f.addVertex(new _0x1bcf7(firstIntersect.x, firstIntersect.y));
              } while (!firstIntersect._isIntersection);
            }
            firstIntersect = firstIntersect._corresponding;
          } while (!firstIntersect._visited);
          result.push(_0x424f4f.getPoints());
        }
        if (result.length === 0) {
          if (_0x28b027) {
            if (_0x599399) {
              result.push(_0x1e9b4a.getPoints());
            } else if (_0x3b223f) {
              result.push(this.getPoints());
            } else {
              result.push(this.getPoints(), _0x1e9b4a.getPoints());
            }
          } else if (_0x4d1ea1) {
            if (_0x599399) {
              result.push(this.getPoints());
            } else if (_0x3b223f) {
              result.push(_0x1e9b4a.getPoints());
            }
          } else if (_0x599399) {
            result.push(_0x1e9b4a.getPoints(), this.getPoints());
          } else if (_0x3b223f) {
            result.push(this.getPoints(), _0x1e9b4a.getPoints());
          } else {
            result.push(this.getPoints());
          }
          if (result.length === 0) {
            result = null;
          }
        }
        return result;
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
  if ((greinerHormannModule = greinerHormann) && greinerHormannModule.__esModule && Object.prototype.hasOwnProperty.call(greinerHormannModule, "default")) {
    greinerHormannModule.default;
  }
  class ScoreScheme {
    constructor(game) {
      this.game = game;
      this.data = {};
    }
    init() {}
    completed() {}
    checkEnd() {
      return ScoreScheme.noWinnerNoCompleted;
    }
    assign(unit) {
      unit.scheme = {};
    }
    scores() {
      return 0;
    }
    print(unit, fallback) {
      if (unit) {
        return this.scores(unit);
      } else {
        return fallback;
      }
    }
    result(unit) {
      return this.scores(unit);
    }
    results(results) {
      return results;
    }
    updateSensors() {}
    updateExtendedSensors() {}
    update() {}
    kill() {}
    death() {}
    out() {}
    comeback(unit, event) {
      event.increment;
      event.rise;
      event.victims;
      event.game;
    }
    decrease(aggressor, event) {
      event.aggressor;
      event.base;
      event.poly;
    }
    increase() {}
    get name() {
      return "abstract";
    }
  }
  _defineProperty(ScoreScheme, "noWinnerCompleted", {
    winner: null,
    completed: true
  });
  _defineProperty(ScoreScheme, "noWinnerNoCompleted", {
    winner: null,
    completed: false
  });
  function createBot(game, name, position) {
    var typeCounts = [0, 0, 0, 0];
    var TYPE_ROTATION = [[1, 2, 2, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 2, 2, 2, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0], [1, 1, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0]];
    game.units.forEach(function (unit) {
      if (unit.isBot) {
        typeCounts[unit.type]++;
      }
    });
    game.bots = typeCounts.slice();
    for (var rotation = TYPE_ROTATION[Math.round(game.level * (TYPE_ROTATION.length - 1))], slot = -1; typeCounts[rotation[++slot]] > 0;) {
      typeCounts[rotation[slot]]--;
    }
    var type = rotation[slot];
    game.bots[type]++;
    var bot = new Bot(game, name, position, type);
    game.addUnit(bot);
    return bot;
  }
  var currentIndex;
  var currentComponent;
  var prevRaf;
  class TeamScoreScheme extends ScoreScheme {
    constructor(game) {
      return super(game);
    }
    scores(unit) {
      return unit.scheme.personalPercent * 100;
    }
    result(unit) {
      return +this.scores(unit).toFixed(2);
    }
    print(unit, fallback) {
      var value = unit ? this.scores(unit) : fallback;
      return `${value.toFixed(2)}%`;
    }
    checkEnd() {
      var game = this.game;
      var winner = game.player;
      if (game.player && game.player.team.percent > 0.9999) {
        return {
          winner: winner,
          completed: false
        };
      } else {
        return ScoreScheme.noWinnerNoCompleted;
      }
    }
    assign(unit) {
      unit.scheme = {
        personalPercent: 0
      };
    }
    update() {
      var game;
      var config;
      var player;
      game = this.game;
      config = game.config;
      player = game.player;
      game.level = player ? lerp(config.startBotLevel, 1, player.percent) : config.noPlayerBotLevel;
      if (config.botLevel !== -1) {
        game.level = config.botLevel;
      }
      game.units.forEach(function (unit) {
        if (unit !== player) {
          var percent = Math.min(1, Math.max(0, game.level + unit.jitter));
          var botAggroMin = config.botAggroMin;
          var botAggroMax = config.botAggroMax;
          var botDefMin = config.botDefMin;
          var botDefMax = config.botDefMax;
          var botGreedMin = config.botGreedMin;
          var botGreedMax = config.botGreedMax;
          var botSafetyMin = config.botSafetyMin;
          var botSafetyMax = config.botSafetyMax;
          switch (unit.type) {
            case 1:
              botAggroMin *= 1.25;
              botAggroMax *= 1.25;
              break;
            case 2:
              botGreedMin *= 2;
              botGreedMax *= 1.1;
              botSafetyMin *= 0.75;
              botSafetyMax *= 0.75;
              break;
            case 3:
              botAggroMin *= 0.75;
              botAggroMax *= 0.75;
              botGreedMin *= 4;
              botGreedMax *= 1.1;
              botSafetyMin *= 0.5;
              botSafetyMax *= 0.5;
              botDefMin *= 2;
              botDefMax *= 2;
          }
          unit.aggro = lerp(botAggroMin, botAggroMax, percent);
          unit.greed = lerp(botGreedMin, botGreedMax, percent);
          unit.safety = lerp(botSafetyMin, botSafetyMax, percent);
          unit.def = lerp(botDefMin, botDefMax, percent);
        }
      });
    }
    death(unit) {
      this.game.genDestructParticles(unit.track.polyline.segments, unit.team.skin, 1, 5);
      this.game.genFlashParticles(unit.position, unit.team.skin);
    }
    kill(killer, victim) {
      if (killer.isPlayer) {
        killer.labels.push({
          text: this.game.language.killText,
          color: victim.team.skin.colors.main,
          unit: killer,
          time: 1000,
          fading: true
        });
      }
    }
    comeback(unit, event) {
      event.increment;
      var rise = event.rise;
      event.victims;
      var game = event.game;
      var gain = rise.square() / game.square;
      unit.scheme.personalPercent += gain;
      if (gain * 100 >= 0.01 && unit.isPlayer) {
        this.game.labels.push(new FloatingLabel({
          text: `+${(gain * 100).toFixed(2)}%`,
          color: unit.team.skin.colors.nick,
          target: unit,
          duration: 1000,
          position: new Vec2(0, -25),
          transformers: [FloatingLabel.mover({
            velocity: new Vec2(0, -45),
            acceleration: new Vec2(0, 60),
            tag: "mover"
          })],
          fn: function (label) {
            var transformer = label.getTransformer("mover");
            label.change({
              duration: 300,
              transformers: [transformer, FloatingLabel.fader({
                reverse: true
              })]
            });
          }
        }));
      }
    }
    decrease(aggressor, event) {
      var base = event.base;
      var poly = event.poly;
      this.game.genDestructParticles(poly.segments, base.team.skin, 1, 15);
    }
    get name() {
      return "TF";
    }
  }
  var spawner = {
    createBot: createBot,
    respawn: function (game) {
      (function (game2) {
        var config = game2.config;
        for (var teamsCount = config.teamsCount, nearPlayerBotSpawnCount = config.nearPlayerBotSpawnCount, i = 0; game2.teams.length < teamsCount && i < nearPlayerBotSpawnCount; i++) {
          game2.spawnBot({
            place: "player"
          });
        }
        if (game2.teams.length < teamsCount) {
          if (!game2.spawnBot({
            place: "center"
          })) {
            game2.spawnBot({
              place: Math.random() > 0.3 ? "bounds" : "random"
            });
          }
        }
      })(game);
      var config = game.config;
      var teamsCount = config.teamsCount;
      var teamSize = config.teamSize;
      var topTeamSuspendSpawn = config.topTeamSuspendSpawn;
      var bottomTeamSuspendSpawn = config.bottomTeamSuspendSpawn;
      game.teams.forEach(function (team) {
        if (team.suspendSpawn < 0 && team.units.length < teamSize) {
          var leader = team.units.find(function (unit) {
            return unit.in === unit.base;
          });
          if (leader && game.spawnBot({
            leader: leader
          })) {
            var suspend = lerp(bottomTeamSuspendSpawn, topTeamSuspendSpawn, 1 - ((team.top || teamsCount) - 1) / (teamsCount - 1));
            team.suspendSpawn = suspend;
          }
        }
      });
    },
    spawnBot: function (game, optionsArg) {
      var options = arguments.length > 1 && optionsArg !== undefined ? optionsArg : {};
      var config = game.config;
      var baseRadius = config.baseRadius;
      var baseDensity = config.baseDensity;
      config.spawnTimeout;
      var leader = options.leader;
      var place = options.place;
      var name = options.name;
      var skin = options.skin;
      if ((leader || !game.visible || game.checkTeamSpawn()) && game.nameManager.aviable() && game.skinManager.available()) {
        var spawnRadius = options.spawnRadius || baseRadius;
        var position = leader ? leader.position.clone() : game.getspawnPosition(place, spawnRadius);
        if (position) {
          var skinEntry;
          var drawn = [];
          if (!name || !skin) {
            while (game.nameManager.aviable() && (!skinEntry || skinEntry.user)) {
              var entry = game.nameManager.get();
              if (entry.name) {
                name = entry.name;
                skin = entry.skin;
                skinEntry = game.skinManager.has(entry.skin);
                drawn.push(entry);
              } else {
                name = entry;
                skinEntry = {};
              }
            }
            if (!skinEntry || !!skinEntry.user) {
              skin = "";
            }
            drawn.pop();
            game.nameManager.release(drawn);
          }
          var bot = createBot(game, name, position);
          var base = leader ? leader.base : game.createBase(function (point, count, radius) {
            var stepAngle = TAU / count;
            var result = [];
            for (var i = 0; i < count; i++) {
              var angle = i * stepAngle;
              result.push(new Vec2(point.x + Math.cos(angle) * radius, point.y + Math.sin(angle) * radius));
            }
            return result;
          }(position, Math.round(Math.PI * 2 * spawnRadius * baseDensity), spawnRadius));
          base.join(bot);
          if (leader) {
            bot.team = leader.team;
          } else {
            var team = game.createTeam();
            var teamSkin = game.skinManager.get(team, skin);
            team.skin = teamSkin;
            team.bases.push(base);
            base.team = team;
            bot.team = team;
          }
          bot.team.units.push(bot);
          bot.updateSensors();
          bot.fsm.update();
          return bot;
        }
      }
    },
    spawnPlayer: function (game, options) {
      var teamSize = game.config.teamSize;
      var name = options.name;
      options.skin;
      options.percent;
      var teams = game.teams.filter(function (team) {
        return team.units.length < teamSize;
      });
      if (teams.length === 0) {
        teams = game.teams;
      }
      var host;
      var candidates = teams.reduce(function (acc, team) {
        team.units.forEach(function (unit) {
          if (unit.in === unit.base) {
            acc.push(unit);
          }
        });
        return acc;
      }, []);
      var player = new Player(game, name || game.language.defaultPlayerName, null);
      if (candidates.length) {
        host = candidates[Math.floor(Math.random() * candidates.length)];
        game.joinToTeam(player, host);
      } else {
        var spawnPoint;
        do {
          var start = (host = game.units[Math.floor(Math.random() * game.units.length)]).track.polyline.start;
          var segment = host.track.polyline.segments[0];
          if (segment) {
            var vector = segment.clone().reverse().vector;
            spawnPoint = start.clone().add(vector);
          } else {
            spawnPoint = null;
          }
        } while (!spawnPoint || !host.base.polygon.inside(spawnPoint));
        game.joinToTeam(player, host, spawnPoint);
      }
      game.addPlayer(player);
      if (host.team.units.length > teamSize) {
        game.kill(host, undefined, 6);
      }
      return player;
    }
  };
  var currentHook = 0;
  var afterPaintEffects = [];
  var oldBeforeRender = options.__r;
  var oldAfterDiff = options.diffed;
  var oldCommit = options.__c;
  var oldBeforeUnmount = options.unmount;
  function getHookState(_0x83fa31, _0x53a232) {
    if (options.__h) {
      options.__h(currentComponent, _0x83fa31, currentHook || _0x53a232);
    }
    currentHook = 0;
    var _0x4ea02a = currentComponent.__H ||= {
      __: [],
      __h: []
    };
    if (_0x83fa31 >= _0x4ea02a.__.length) {
      _0x4ea02a.__.push({});
    }
    return _0x4ea02a.__[_0x83fa31];
  }
  function useState(_0x314b1f) {
    currentHook = 1;
    _0x474691 = invokeOrReturn;
    _0x5ed5ae = _0x314b1f;
    (_0x3a91ba = getHookState(currentIndex++, 2)).t = _0x474691;
    if (!_0x3a91ba.__c) {
      _0x3a91ba.__ = [_0x41177d ? _0x41177d(_0x5ed5ae) : invokeOrReturn(undefined, _0x5ed5ae), function (_0x599f24) {
        var _0x256050 = _0x3a91ba.t(_0x3a91ba.__[0], _0x599f24);
        if (_0x3a91ba.__[0] !== _0x256050) {
          _0x3a91ba.__ = [_0x256050, _0x3a91ba.__[1]];
          _0x3a91ba.__c.setState({});
        }
      }];
      _0x3a91ba.__c = currentComponent;
    }
    return _0x3a91ba.__;
    var _0x474691;
    var _0x5ed5ae;
    var _0x41177d;
    var _0x3a91ba;
  }
  function useEffect(_0xb4549, _0x50b293) {
    var hookState = getHookState(currentIndex++, 3);
    if (!options.__s && argsChanged(hookState.__H, _0x50b293)) {
      hookState.__ = _0xb4549;
      hookState.__H = _0x50b293;
      currentComponent.__H.__h.push(hookState);
    }
  }
  function useRef(_0x4b9fe8) {
    currentHook = 5;
    _0x279773 = function () {
      return {
        current: _0x4b9fe8
      };
    };
    _0x42a679 = [];
    if (argsChanged((_0x5971fb = getHookState(currentIndex++, 7)).__H, _0x42a679)) {
      _0x5971fb.__ = _0x279773();
      _0x5971fb.__H = _0x42a679;
      _0x5971fb.__h = _0x279773;
    }
    return _0x5971fb.__;
    var _0x279773;
    var _0x42a679;
    var _0x5971fb;
  }
  function useContext(LanguageContext) {
    var _0x4bdfa9 = currentComponent.context[LanguageContext.__c];
    var hookState = getHookState(currentIndex++, 9);
    hookState.__c = LanguageContext;
    if (_0x4bdfa9) {
      if (hookState.__ == null) {
        hookState.__ = true;
        _0x4bdfa9.sub(currentComponent);
      }
      return _0x4bdfa9.props.value;
    } else {
      return LanguageContext.__;
    }
  }
  function flushAfterPaintEffects() {
    afterPaintEffects.forEach(function (afterPaintEffect) {
      if (afterPaintEffect.__P) {
        try {
          afterPaintEffect.__H.__h.forEach(invokeCleanup);
          afterPaintEffect.__H.__h.forEach(invokeEffect);
          afterPaintEffect.__H.__h = [];
        } catch (_0x970d3f) {
          afterPaintEffect.__H.__h = [];
          options.__e(_0x970d3f, afterPaintEffect.__v);
        }
      }
    });
    afterPaintEffects = [];
  }
  options.__r = function (_0x55b5c6) {
    if (oldBeforeRender) {
      oldBeforeRender(_0x55b5c6);
    }
    currentIndex = 0;
    var __H = (currentComponent = _0x55b5c6.__c).__H;
    if (__H) {
      __H.__h.forEach(invokeCleanup);
      __H.__h.forEach(invokeEffect);
      __H.__h = [];
    }
  };
  options.diffed = function (_0x22b908) {
    if (oldAfterDiff) {
      oldAfterDiff(_0x22b908);
    }
    var __c = _0x22b908.__c;
    if (__c && __c.__H && __c.__H.__h.length) {
      if (afterPaintEffects.push(__c) === 1 || prevRaf !== options.requestAnimationFrame) {
        ((prevRaf = options.requestAnimationFrame) || function (_0x13b4ab) {
          function _0x24a68d() {
            clearTimeout(_0x3a2965);
            if (HAS_RAF) {
              cancelAnimationFrame(_0x53e471);
            }
            setTimeout(_0x13b4ab);
          }
          var _0x53e471;
          var _0x3a2965 = setTimeout(_0x24a68d, 100);
          if (HAS_RAF) {
            _0x53e471 = requestAnimationFrame(_0x24a68d);
          }
        })(flushAfterPaintEffects);
      }
    }
  };
  options.__c = function (_0xff6bb4, _0x54a10b) {
    _0x54a10b.some(function (item) {
      try {
        item.__h.forEach(invokeCleanup);
        item.__h = item.__h.filter(function (item) {
          return !item.__ || invokeEffect(item);
        });
      } catch (_0x371199) {
        _0x54a10b.some(function (item) {
          item.__h &&= [];
        });
        _0x54a10b = [];
        options.__e(_0x371199, item.__v);
      }
    });
    if (oldCommit) {
      oldCommit(_0xff6bb4, _0x54a10b);
    }
  };
  options.unmount = function (_0x492df9) {
    if (oldBeforeUnmount) {
      oldBeforeUnmount(_0x492df9);
    }
    var __c = _0x492df9.__c;
    if (__c && __c.__H) {
      try {
        __c.__H.__.forEach(invokeCleanup);
      } catch (_0x372683) {
        options.__e(_0x372683, __c.__v);
      }
    }
  };
  var HAS_RAF = typeof requestAnimationFrame == "function";
  function invokeCleanup(_0x2df6f7) {
    if (typeof _0x2df6f7.__c == "function") {
      _0x2df6f7.__c();
    }
  }
  function invokeEffect(item) {
    item.__c = item.__();
  }
  function argsChanged(__H, _0x27a7a4) {
    return !__H || __H.length !== _0x27a7a4.length || _0x27a7a4.some(function (item, index) {
      return item !== __H[index];
    });
  }
  function invokeOrReturn(_0x236eca, _0x336972) {
    if (typeof _0x336972 == "function") {
      return _0x336972(_0x236eca);
    } else {
      return _0x336972;
    }
  }
  function getLanguage() {
    return LANGUAGES.find(function (item) {
      return item.name === browserLanguage;
    }) || LANGUAGES.find(function (item) {
      return item.name === "en";
    });
  }
  function Tips(_0x14e5bf) {
    var messages = _0x14e5bf.messages;
    var _0xa4fee0 = _slicedToArray(useState(0), 2);
    var key = _0xa4fee0[0];
    var _0x26e2a1 = _0xa4fee0[1];
    useEffect(function () {
      var _0xbc73e7 = setInterval(function () {
        return _0x26e2a1(function (_0x56ad81) {
          return (_0x56ad81 + 1) % messages.length;
        });
      }, 3000);
      return function () {
        return clearInterval(_0xbc73e7);
      };
    }, []);
    return createElement("div", {
      class: "tips"
    }, createElement("div", {
      class: "tip",
      key: key
    }, messages[key]));
  }
  function LeaderboardRow(_0x89cb9e) {
    var top = _0x89cb9e.top;
    var name = _0x89cb9e.name;
    var scores = _0x89cb9e.scores;
    var player = _0x89cb9e.player;
    return createElement("li", {
      class: top > 11 ? "extra_margin" : ""
    }, createElement("div", {
      class: "lb_item_left"
    }, createElement("span", {
      class: `top top${top}`
    }, top), createElement("span", {
      class: `title${player ? " player" : ""}`
    }, name)), createElement("span", null, scores));
  }
  function LeaderboardList(_0x378713) {
    var leaderboard = _0x378713.leaderboard;
    var title = _0x378713.title;
    var userId = _0x378713.userId;
    return leaderboard && createElement("div", {
      class: "liderboard"
    }, createElement("div", {
      class: "wrapper"
    }, createElement("h3", null, title), createElement("ul", null, leaderboard.map(function (item) {
      return createElement(LeaderboardRow, {
        top: item.leaderboardPosition,
        name: item.userName.length > 150 ? item.userName.substring(0, 15) + "..." : item.userName,
        scores: item.leaderboardValue,
        player: item.userId == userId
      });
    }))));
  }
  function ModeDropdown(_0x51be2e) {
    function _0x51a1cf() {
      if (!preparing) {
        _0x1d6d60(!_0x1dfe84);
      }
    }
    var setMode = _0x51be2e.setMode;
    var modes = _0x51be2e.modes;
    var currentMode = _0x51be2e.currentMode;
    var preparing = _0x51be2e.preparing;
    var _0x4172c9 = _slicedToArray(useState(false), 2);
    var _0x1dfe84 = _0x4172c9[0];
    var _0x1d6d60 = _0x4172c9[1];
    var elementById = document.getElementById("paper-io-com_336x280");
    if (elementById) {
      elementById.className = _0x1dfe84 ? "openedSelect" : "";
    }
    return createElement("div", {
      class: "flag-select"
    }, createElement("div", {
      class: "flag-selected",
      onClick: _0x51a1cf
    }, createElement("div", {
      class: "country-label"
    }, createElement("span", null, `Teams - ${currentMode.title}`)), createElement("span", {
      class: "arrow-down"
    }, "▾")), _0x1dfe84 && createElement("div", {
      class: "flag-options"
    }, modes.map(function (mode, index) {
      return createElement("div", {
        class: "flag-option",
        key: index,
        tabIndex: "0",
        onClick: function () {
          _0x2613d2 = mode;
          _0x51a1cf();
          setMode(_0x2613d2);
          return;
          var _0x2613d2;
        }
      }, createElement("div", {
        class: "country-label"
      }, createElement("span", null, mode.title)));
    })));
  }
  function MainMenu(_0x4d8495) {
    var value = _0x4d8495.nickName;
    var setNickName = _0x4d8495.setNickName;
    _0x4d8495.playable;
    var preparing = _0x4d8495.preparing;
    var start = _0x4d8495.start;
    _0x4d8495.route;
    _0x4d8495.provider;
    var api = _0x4d8495.api;
    _0x4d8495.skin;
    var storage = _0x4d8495.storage;
    var modes = _0x4d8495.modes;
    var currentMode = _0x4d8495.currentMode;
    var setMode = _0x4d8495.setMode;
    var lng = useContext(LanguageContext).lng;
    if (api && api.game) {
      api.game.config;
    }
    var _0x5dd68f = !!api;
    var _0x1e1c14 = _0x5dd68f;
    var _0x9bfb96 = _slicedToArray(useState(null), 2);
    var leaderboard = _0x9bfb96[0];
    var _0x4b3684 = _0x9bfb96[1];
    useEffect(function () {
      if (window.ShowAds) {
        window.ShowAds();
      }
      fetch("https://leaderboard.paper-io.com/json/paperteams_kills_1.json").then(function (result) {
        return result.json();
      }).then(function (result) {
        return _0x4b3684(result.slice(0, 10));
      });
    }, []);
    return createElement(Fragment, null, createElement("div", {
      id: "left_side"
    }, createElement(LeaderboardList, {
      leaderboard: leaderboard,
      title: lng.top10Killers,
      userId: storage.get("player_id")
    })), createElement("div", {
      class: "uibox"
    }, createElement("div", {
      class: "logo"
    }, createElement("img", {
      src: "assets/images/logo.png"
    })), createElement(Tips, {
      messages: lng.messages
    }), createElement("div", {
      class: "play"
    }, createElement("input", {
      type: "text",
      id: "nick",
      name: "nick",
      value: value,
      autocomplete: "off",
      placeholder: lng.placeholderText,
      maxlength: "12",
      oninput: function (_0x1c537b) {
        return setNickName(_0x1c537b.target.value);
      }
    }), createElement("button", {
      id: "play",
      name: "play",
      class: "yellow" + (_0x1e1c14 ? "" : " disabled"),
      onClick: function (event) {
        event.preventDefault();
        if (_0x1e1c14) {
          if (window.ga) {
            window.ga("send", "event", "teams", "start_play");
          }
          start();
        }
      }
    }, lng.btnPlay)), createElement(ModeDropdown, {
      preparing: preparing,
      setMode: setMode,
      modes: modes,
      currentMode: currentMode
    }), !_0x5dd68f && createElement("p", {
      class: "notsupported"
    }, lng.nosupport)), createElement("div", {
      id: "right_side"
    }));
  }
  function GameScreen(_0x543e6b) {
    var nickName = _0x543e6b.nickName;
    var bestScore = _0x543e6b.bestScore;
    var setBestScore = _0x543e6b.setBestScore;
    var setResults = _0x543e6b.setResults;
    var setPreparing = _0x543e6b.setPreparing;
    var api = _0x543e6b.api;
    var route = _0x543e6b.route;
    var skin = _0x543e6b.skin;
    var lastPercent = _0x543e6b.lastPercent;
    useEffect(function () {
      if (window.ads && window.ads.hideAds) {
        window.ads.hideAds();
      }
      if (window.HideAds) {
        window.HideAds();
      }
      api.game.language = useContext(LanguageContext).lng;
      var skin2 = skin;
      if (skin2 === "default" || skin2 === "No skin" || skin2 === "noskin") {
        skin2 = "";
      }
      api.start(nickName, skin2, bestScore, function (_0x18e8b2) {
        if (_0x18e8b2.newBest) {
          setBestScore(_0x18e8b2.score);
        }
        setResults(_0x18e8b2);
        route("results");
      }, lastPercent);
      setPreparing(false);
    }, []);
    return null;
  }
  function Results(_0x23dfbc) {
    var bestScore = _0x23dfbc.bestScore;
    var results = _0x23dfbc.results;
    var start = _0x23dfbc.start;
    var route = _0x23dfbc.route;
    _0x23dfbc.provider;
    _0x23dfbc.country;
    var storage = _0x23dfbc.storage;
    var lng = useContext(LanguageContext).lng;
    var _0x55c40b = _slicedToArray(useState(null), 2);
    var leaderboard = _0x55c40b[0];
    var _0x13f73a = _0x55c40b[1];
    useEffect(function () {
      if (window.ShowAds) {
        window.ShowAds();
      }
      if (results.reason === 0 && window.ga) {
        window.ga("send", "event", "teams", "win");
      }
      fetch("https://leaderboard.paper-io.com/json/paperteams_kills_1.json").then(function (result) {
        return result.json();
      }).then(function (result) {
        return _0x13f73a(result.slice(0, 10));
      });
    }, []);
    return createElement(Fragment, null, createElement("div", {
      id: "left_side"
    }, createElement(LeaderboardList, {
      leaderboard: leaderboard,
      title: lng.top10Killers,
      userId: storage.get("player_id")
    })), createElement("div", {
      class: "uibox"
    }, createElement("div", {
      class: "logo"
    }, createElement("img", {
      src: "assets/images/logo.png"
    })), createElement("div", {
      class: "nav"
    }, createElement("button", {
      class: "yellow slider-5",
      id: "again",
      onClick: function () {
        if (window.ga) {
          window.ga("send", "event", "teams", "play_again");
        }
        start();
      }
    }, lng.playAgain), createElement("button", {
      class: "green slider-5",
      id: "menu",
      onClick: function () {
        return route("menu");
      }
    }, lng.menu), createElement("button", {
      class: "green slider-5",
      id: "mode",
      onClick: function () {
        window.location.href = "//paperio.site";
      }
    }, lng.btnCGM)), createElement("div", {
      class: "resultbox"
    }, createElement("div", {
      class: "results"
    }, createElement("div", {
      class: "left"
    }, createElement("div", {
      class: "slider-1"
    }, lng.yourScore, ":"), createElement("div", {
      class: "slider-2"
    }, results.newBest && createElement("span", {
      class: "newScore"
    }, lng.newText, " "), lng.bestScore, ":"), createElement("div", {
      class: "slider-3"
    }, lng.timePlayed, ":"), createElement("div", {
      class: "slider-4"
    }, lng.playersKilled, ":")), createElement("div", {
      class: "right"
    }, createElement("div", {
      class: "slider-1"
    }, `${results.score.toFixed(2)}%`), createElement("div", {
      class: "slider-2"
    }, bestScore.toFixed(2) + "%"), createElement("div", {
      class: "slider-3"
    }, new Date(results.time).toISOString().slice(14, -5)), createElement("div", {
      class: "slider-4"
    }, results.kills)))), createElement("div", {
      id: "yandex_rtb"
    })), createElement("div", {
      id: "right_side"
    }));
  }
  function ConfigForm(_0x206620) {
    var config = _0x206620.config;
    var onSubmit = _0x206620.apply;
    if (config) {
      return createElement("form", {
        class: "config",
        onSubmit: onSubmit
      }, Object.entries(config).map(function (item) {
        var _0x21c9b7 = _slicedToArray(item, 2);
        var _0x22a276 = _0x21c9b7[0];
        return createElement("label", {
          style: "color: white;"
        }, _0x22a276, "\xA0", createElement("input", {
          type: "text",
          id: _0x22a276,
          name: _0x22a276,
          value: _0x21c9b7[1],
          autocomplete: "off",
          maxlength: "10"
        }));
      }), createElement("button", {
        id: "apply",
        name: "apply",
        class: "yellow"
      }, "Применить"));
    } else {
      return null;
    }
  }
  function ConfigScreen(_0x7004c0) {
    var api = _0x7004c0.api;
    var view = _0x7004c0.view;
    var setPreparing = _0x7004c0.setPreparing;
    var setState = _0x7004c0.setState;
    var config = api && api.game && api.game.config;
    return createElement("div", {
      class: "uibox"
    }, createElement("div", {
      class: "logo"
    }, createElement("img", {
      src: "assets/images/logo.png"
    })), createElement(ConfigForm, {
      config: config,
      apply: function (event) {
        event.preventDefault();
        Object.keys(config).forEach(function (item) {
          var elementById = document.getElementById(item);
          if (elementById) {
            var _0x4a1209 = parseFloat(elementById.value);
            config[item] = _0x4a1209 != _0x4a1209 ? elementById.value : _0x4a1209;
          }
        });
        api.game.stopped = true;
        api.create(view.current);
        setPreparing(true);
        api.prepare(function () {
          return setPreparing(false);
        });
        setState("menu");
      }
    }));
  }
  function LanguageFooter(_0x345a23) {
    var setLanguage = _0x345a23.setLanguage;
    var _0x430db5 = useContext(LanguageContext);
    var _0x45e94f = LANGUAGES.map(function (item, index) {
      return createElement("li", {
        class: item === _0x430db5 ? "active" : "",
        onClick: function () {
          return setLanguage(LANGUAGES[index]);
        }
      }, item.name.toUpperCase());
    });
    return createElement("div", {
      id: "footer"
    }, createElement("ul", {
      id: "lng"
    }, _0x45e94f));
  }
  function App(_0x41e13e) {
    var config = _0x41e13e.config;
    var api = _0x41e13e.api;
    var storage = _0x41e13e.storage;
    _0x41e13e.ads;
    var provider = _0x41e13e.provider;
    var skins = _0x41e13e.skins;
    var mode = _0x41e13e.mode;
    var _0x3ddcd6 = function (_0x4ca404, _0x5b1b04, _0x1f49dd, _0x2e3a1c) {
      var options = {
        expires: 365,
        path: "/"
      };
      var playable = !!_0x4ca404;
      var view = useRef(null);
      var _0x2a40a3 = _slicedToArray(useState("menu"), 2);
      var state = _0x2a40a3[0];
      var setState = _0x2a40a3[1];
      var _0x3abbe6 = _slicedToArray(useState(true), 2);
      var preparing = _0x3abbe6[0];
      var setPreparing = _0x3abbe6[1];
      var _0x518447 = _slicedToArray(useState(getLanguage()), 2);
      var language = _0x518447[0];
      var setLanguage = _0x518447[1];
      var _0x2a555c = _slicedToArray(useState(null), 2);
      var results = _0x2a555c[0];
      var setResults = _0x2a555c[1];
      var _0x1f431f = "paper.io.";
      var commonStorageName = `${_0x1f431f}storage`;
      var _0x330ff1 = _0x5b1b04.getJSON(commonStorageName) || {};
      var _0x1778a2 = _0x330ff1.nickName || "";
      if (_0x2e3a1c) {
        _0x1778a2 = _0x5b1b04.get("paperio_username") || "";
      }
      var _0x36efdb = _slicedToArray(useState(_0x1778a2), 2);
      var nickName = _0x36efdb[0];
      var setNickName = _0x36efdb[1];
      if (nickName !== _0x330ff1.nickName) {
        _0x330ff1.nickName = nickName;
        _0x5b1b04.set(commonStorageName, _0x330ff1, options);
      }
      if (_0x2e3a1c && nickName !== _0x1778a2) {
        _0x5b1b04.set("paperio_username", nickName, options);
      }
      var modeStorageName = `${_0x1f431f}${_0x1f49dd}`;
      var _0x307cc6 = _0x5b1b04.getJSON(modeStorageName) || {};
      var _0x1d617b = _slicedToArray(useState(_0x307cc6.bestScore || 0), 2);
      var bestScore = _0x1d617b[0];
      var setBestScore = _0x1d617b[1];
      if (bestScore !== _0x307cc6.bestScore) {
        _0x307cc6.bestScore = bestScore;
        _0x5b1b04.set(modeStorageName, _0x307cc6, options);
      }
      useEffect(function () {
        if (playable) {
          _0x4ca404.create(view.current);
          _0x4ca404.prepare(function () {
            return setPreparing(false);
          });
        }
      }, []);
      return {
        view: view,
        playable: playable,
        state: state,
        setState: setState,
        preparing: preparing,
        setPreparing: setPreparing,
        language: language,
        setLanguage: setLanguage,
        results: results,
        setResults: setResults,
        nickName: nickName,
        setNickName: setNickName,
        bestScore: bestScore,
        setBestScore: setBestScore,
        commonStorageName: commonStorageName,
        modeStorageName: modeStorageName,
        options: options,
        setStorageField: function (_0x5a76d4, _0x28a897, _0x457f07) {
          var _0x53f7d2 = _0x5b1b04.getJSON(_0x5a76d4) || {};
          if (_0x457f07 !== _0x53f7d2[_0x28a897]) {
            _0x53f7d2[_0x28a897] = _0x457f07;
            _0x5b1b04.set(_0x5a76d4, _0x53f7d2, options);
          }
        }
      };
    }(api, storage, mode === undefined ? "storage" : mode, true);
    var view = _0x3ddcd6.view;
    var playable = _0x3ddcd6.playable;
    var state = _0x3ddcd6.state;
    var setState = _0x3ddcd6.setState;
    var preparing = _0x3ddcd6.preparing;
    var setPreparing = _0x3ddcd6.setPreparing;
    var value = _0x3ddcd6.language;
    var setLanguage = _0x3ddcd6.setLanguage;
    var results = _0x3ddcd6.results;
    var setResults = _0x3ddcd6.setResults;
    var nickName = _0x3ddcd6.nickName;
    var setNickName = _0x3ddcd6.setNickName;
    var bestScore = _0x3ddcd6.bestScore;
    var setBestScore = _0x3ddcd6.setBestScore;
    var _0x5e3298 = storage.get("darkTheme");
    var _0x5ed972 = _slicedToArray(useState(SUB_MODES[0]), 2);
    var currentMode = _0x5ed972[0];
    var _0x153fa2 = _0x5ed972[1];
    function _0x470474() {
      var elementById = document.getElementById("overlay");
      if (elementById) {
        elementById.style.display = "block";
        elementById.style.animation = "fadein 500ms";
      }
      if (api && api.game) {
        api.game.visible = false;
      }
      window.ShowPreroll();
    }
    api.startGame = function () {
      if (api && api.game) {
        var elementById = document.getElementById("overlay");
        if (elementById) {
          elementById.style.display = "none";
        }
        var config = api.game.config;
        Object.assign(config, _0x5e3298 === "true" ? config.darkTheme : config.lightTheme);
        api.game.visible = true;
        if (window.ga) {
          ga("send", "event", "teams", currentMode.ga);
        }
        setState("game");
      }
    };
    return createElement(Fragment, null, createElement("canvas", {
      class: state === "game" || preparing ? "" : "fadein",
      id: "view",
      ref: view
    }), state !== "game" && createElement("div", {
      id: "ui_overlay"
    }), createElement(LanguageContext.Provider, {
      value: value
    }, createElement("div", {
      id: "ui",
      class: state === "game" ? "hide" : ""
    }, state === "menu" && createElement(MainMenu, {
      nickName: nickName,
      setNickName: setNickName,
      playable: playable,
      preparing: preparing,
      start: _0x470474,
      route: setState,
      provider: provider,
      setLanguage: setLanguage,
      api: api,
      setState: setState,
      skins: skins,
      storage: storage,
      modes: SUB_MODES,
      currentMode: currentMode,
      setMode: function (_0x3b3b23) {
        var _0x5df93d;
        if (currentMode !== _0x3b3b23) {
          _0x5df93d = _objectSpread2(_objectSpread2({}, config), _0x3b3b23.config);
          if (api) {
            api.config = _0x5df93d;
            api.create(view.current);
            setPreparing(true);
            api.prepare(function () {
              return setPreparing(false);
            });
          }
          _0x153fa2(_0x3b3b23);
        }
      }
    }), state === "game" && createElement(GameScreen, {
      nickName: nickName,
      bestScore: bestScore,
      setBestScore: setBestScore,
      setResults: setResults,
      setPreparing: setPreparing,
      api: api,
      route: setState
    }), state === "results" && createElement(Results, {
      bestScore: bestScore,
      results: results,
      start: _0x470474,
      route: setState,
      provider: provider,
      storage: storage
    }), state === "config" && createElement(ConfigScreen, {
      api: api,
      view: view,
      setPreparing: setPreparing,
      setState: setState
    })), state !== "game" && createElement(LanguageFooter, {
      setLanguage: setLanguage
    })), createElement("div", {
      id: "overlay"
    }));
  }
  function SkinAvatar(config, _0x1b8ce5, _0x44f375, _0x151e81) {
    var self = this;
    function _0x1dd1a7(_0x16bfd5) {
      _0x16bfd5.rescale(self.scale);
      if (self.layers.length === ++_0x36acbd) {
        self.ready = true;
        if (_0x151e81) {
          _0x151e81();
        }
      }
    }
    _classCallCheck(this, SkinAvatar);
    Object.assign(this, {
      scale: 1,
      x: 0,
      y: 0,
      layers: [],
      ready: false
    }, _0x44f375);
    var _0x36acbd = 0;
    this.layers = (this.layers || []).map(function (item) {
      return new SkinLayer(config, _objectSpread2(_objectSpread2({}, item), {}, {
        url: item.url && `${_0x1b8ce5}${item.url}`
      }), _0x1dd1a7);
    });
    this.frontLayers = this.layers.filter(function (layer) {
      return layer.level >= 1;
    }).sort(function (a, b) {
      return a.level - b.level;
    });
    this.backLayers = this.layers.filter(function (layer) {
      return layer.level < 1;
    }).sort(function (a, b) {
      return b.level - a.level;
    });
  }
  function botNearPlayerTrack(unit) {
    var player = unit.game.player;
    if (player && unit.team !== player.team) {
      var _0xa72998 = Math.max(unit.vrange, player.vrange) * unit.aggro * 0.75;
      var _0x34ce53 = _0xa72998 * _0xa72998;
      return player.track.simplyline.some(function (point) {
        return unit.position.distance2(point) < _0x34ce53;
      });
    }
  }
  function botFeelsThreatened(unit, _0x37c02f) {
    if (unit.in !== unit.base) {
      var player = unit.game.player;
      var _0x1a5033 = _0x37c02f ? player.baseDistance / player.maxDanger : Infinity;
      var _0x230836 = unit.game.config.unitSpeed * 0.5 * unit.def;
      var _0x36d55d = unit.baseDistance / unit.maxDanger;
      return (!_0x37c02f || !(unit.baseDistance > _0x36d55d + _0x230836)) && !(_0x1a5033 < _0x36d55d - _0x230836) && (_0x36d55d < _0x230836 || _0x36d55d - unit.baseDistance < _0x230836);
    }
  }
  function predictSelfCross(unit) {
    var simplyline = unit.track.simplyline;
    if (simplyline.length < 2) {
      return false;
    }
    var unitSpeed = unit.game.config.unitSpeed;
    var _0x5a1566 = unit.target.clone().sub(unit.position).normalize().mulScalar(unitSpeed);
    var segment = new Segment(unit.position, _0x5a1566.add(unit.position));
    for (var i = 0; i < simplyline.length - 1; i++) {
      var _0x37ceca = new Segment(simplyline[i], simplyline[i + 1]).intersect(segment);
      if (_0x37ceca && _0x37ceca.point !== unit.track.polyline.end && _0x37ceca.point !== unit.track.polyline.start) {
        return _0x37ceca.point;
      }
    }
    return false;
  }
  var languageDefault;
  var languageContextId;
  var languageContextObj;
  var LANGUAGES = [];
  var browserLanguage = (navigator.languages && navigator.languages.length && navigator.languages[0] || navigator.userLanguage || navigator.language || navigator.browserLanguage || "en").substr(0, 2).toLowerCase();
  var LanguageContext = (languageContextObj = {
    __c: languageContextId = "__cC" + contextIdCounter++,
    __: languageDefault,
    Consumer: function (_0x221885, _0x5c92a6) {
      return _0x221885.children(_0x5c92a6);
    },
    Provider: function (_0x5586cd, _0x4c0c71, _0x2e9e7d) {
      if (!this.getChildContext) {
        _0x4c0c71 = [];
        ((_0x2e9e7d = {})[languageContextId] = this).getChildContext = function () {
          return _0x2e9e7d;
        };
        this.shouldComponentUpdate = function (_0x551dee) {
          if (this.props.value !== _0x551dee.value) {
            _0x4c0c71.some(enqueueRender);
          }
        };
        this.sub = function (_0x230548) {
          _0x4c0c71.push(_0x230548);
          var componentWillUnmount = _0x230548.componentWillUnmount;
          _0x230548.componentWillUnmount = function () {
            _0x4c0c71.splice(_0x4c0c71.indexOf(_0x230548), 1);
            if (componentWillUnmount) {
              componentWillUnmount.call(_0x230548);
            }
          };
        };
      }
      return _0x5586cd.children;
    }
  }).Provider.__ = languageContextObj.Consumer.contextType = languageContextObj;
  var SUB_MODES = [{
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
  var TEAM_PALETTE = ["#f77f00", "#ffe066", "#ac3232", "#ff3377", "#ff99cc", "#99e550", "#4b692f", "#1a936f", "#8a6f30", "#3b7dd8"];
  class SkinLayer {
    constructor(config, _0x5724cb, _0x2f7a76) {
      var skinLayer = this;
      this.config = config;
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
        var image = new Image();
        image.onload = function () {
          skinLayer.src = image;
          skinLayer.rescale(1);
          if (_0x2f7a76) {
            _0x2f7a76(skinLayer);
          }
        };
        image.src = this.url;
      }
      if (this.src) {
        Promise.resolve(this.src).then(function (result) {
          skinLayer.src = result;
          skinLayer.rescale(1);
          if (_0x2f7a76) {
            _0x2f7a76(skinLayer);
          }
        });
      }
    }
    rescale(scale) {
      var config = this.config;
      var _0x510323 = config.trackWidth * config.maxScale;
      var src = this.src;
      var _0x1c8521 = src.naturalWidth || src.width;
      var _0xccc9ce = src.naturalHeight || src.height;
      var _0x42403d = _0x510323 * scale * this.scale / _0x1c8521;
      var _0x535009 = ~~(_0x1c8521 * _0x42403d);
      var _0x172bf7 = ~~(_0xccc9ce * _0x42403d);
      var _0x13eb01 = _0x535009 / _0x1c8521;
      var _0x500c0a = _0x172bf7 / _0xccc9ce;
      var image = document.createElement("canvas");
      image.width = _0x535009;
      image.height = _0x172bf7;
      var ctx = image.getContext("2d");
      ctx.scale(_0x13eb01, _0x500c0a);
      ctx.drawImage(src, 0, 0);
      this.image = image;
    }
  }
  document.createElementNS("http://www.w3.org/2000/svg", "svg");
  class SkinDisplay {
    constructor() {
      this.displays = [];
      this.frontLayers = [];
      this.backLayers = [];
      this.maxScale = 0;
    }
    sort() {
      var _0x1278e7;
      var _0x2a237c;
      this.frontLayers = (_0x1278e7 = []).concat.apply(_0x1278e7, _toConsumableArray(this.displays.map(function (display) {
        return display.frontLayers.map(function (frontLayer) {
          return {
            display: display,
            layer: frontLayer
          };
        });
      }))).sort(function (a, b) {
        return a.layer.level - b.layer.level;
      });
      this.backLayers = (_0x2a237c = []).concat.apply(_0x2a237c, _toConsumableArray(this.displays.map(function (display) {
        return display.backLayers.map(function (backLayer) {
          return {
            display: display,
            layer: backLayer
          };
        });
      }))).sort(function (a, b) {
        return b.layer.level - a.layer.level;
      });
      this.maxScale = Math.max.apply(Math, _toConsumableArray(this.frontLayers.map(function (frontLayer) {
        return frontLayer.display.scale * frontLayer.layer.scale;
      })));
    }
    add(_0xd3351c) {
      this.displays.push(_0xd3351c);
      this.sort();
    }
    remove(_0x2592ac) {
      this.displays = this.displays.filter(function (display) {
        return display !== _0x2592ac;
      });
      this.sort();
    }
    get ready() {
      return this.displays.every(function (display) {
        return display.ready;
      });
    }
  }
  class Skin {
    constructor() {
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
      this.container = new SkinDisplay();
    }
    addAsset(_0x716734, _0x571f99) {
      var skin = this;
      (_0x571f99 || Object.keys(_0x716734.content)).forEach(function (item) {
        var _0x4b25d3 = _0x716734.content[item];
        if (_0x4b25d3) {
          switch (item) {
            case "colors":
            case "pattern":
              skin[item] = _0x4b25d3;
              break;
            case "display":
              skin.container.add(_0x4b25d3);
          }
        }
      });
      this.assets.push(_0x716734);
      _0x716734.use(this);
    }
    removeAsset(_0xa7c5ac, _0x14f28e) {
      var skin = this;
      (_0x14f28e || Object.keys(_0xa7c5ac.content)).forEach(function (item) {
        var _0x802c54 = _0xa7c5ac.content[item];
        if (_0x802c54) {
          switch (item) {
            case "colors":
            case "pattern":
              skin[item] = undefined;
              break;
            case "display":
              skin.container.remove(_0x802c54);
          }
        }
      });
      this.assets = this.assets.filter(function (asset) {
        return asset !== _0xa7c5ac;
      });
      _0xa7c5ac.unuse(this);
    }
    getName() {
      return this.assets[0].name;
    }
  }
  class Asset {
    constructor(pool, name, source) {
      this.pool = pool;
      this.name = name;
      this.source = source;
      this.content = {};
      this.consumers = [];
      this.ready = false;
    }
    use(_0x55bf96) {
      this.consumers.push(_0x55bf96);
    }
    unuse(_0x2cf372) {
      this.consumers = this.consumers.filter(function (consumer) {
        return consumer !== _0x2cf372;
      });
    }
  }
  class AssetPool {
    constructor(name) {
      this.name = name;
      this.assets = [];
    }
    get(_0x2b9136, _0x3b78a2) {
      var _0x2922a1;
      if (_0x2b9136) {
        _0x2922a1 = this.assets.find(function (asset) {
          return asset.name === _0x2b9136 && (!_0x3b78a2 || asset.ready === true);
        });
      } else {
        var assets = this.assets.filter(function (asset) {
          return asset.consumers.length === 0 && (!_0x3b78a2 || asset.ready === true);
        });
        _0x2922a1 = assets[~~(Math.random() * assets.length)];
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
    free() {
      return this.assets.filter(function (asset) {
        return asset.consumers.length === 0;
      }).length;
    }
  }
  class ColoredPool extends AssetPool {
    constructor(config, _0x6bc915) {
      super("colors");
      this.config = config;
      this.add(_0x6bc915);
    }
    add(_0x26fe0a) {
      function _0xf32c82(_0x33de6a, _0xe53faf) {
        var canvas = document.createElement("canvas");
        canvas.width = 100;
        canvas.height = 100;
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = _0xe53faf;
        ctx.fillRect(0, 0, 100, 100);
        ctx.fillStyle = _0x33de6a;
        ctx.fillRect(10, 10, 80, 80);
        return canvas;
      }
      var _0x1a54ce;
      var coloredPool = this;
      var config = this.config;
      (_0x1a54ce = this.assets).push.apply(_0x1a54ce, _toConsumableArray((_0x26fe0a || []).map(function (item) {
        function _0x56c558(_0x49517f, _0x23d423) {
          var h = _0x49517f.h;
          var s = _0x49517f.s;
          var v = _0x49517f.v;
          return {
            h: h,
            s: s,
            v: v *= _0x23d423
          };
        }
        function _0x2ce7a2(_0x5c1145, _0x56f6a3) {
          var h = _0x5c1145.h;
          var s = _0x5c1145.s;
          var v = _0x5c1145.v;
          var _0x408f1f = 100 - v;
          return {
            h: h,
            s: s,
            v: v = Math.max(v * _0x56f6a3, v + _0x56f6a3 * _0x408f1f / 4)
          };
        }
        function _0x48e6cd(_0x2de087, _0x957b51) {
          var h = _0x2de087.h;
          var s = _0x2de087.s;
          _0x2de087.v;
          return {
            h: h,
            s: s,
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
        _0x2aaf5b = item;
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
        var back = hsvToHex(_0x314676);
        var _0x9c90db = _0x56c558(_0x51754a, 0.5);
        var nick = hsvToHex(_0x9c90db);
        var _0x3addba = _0x2ce7a2(_0x51754a, 1.5);
        hsvToHex(_0x3addba);
        var _0x50c24c = _0x2ce7a2(_0x51754a, 2);
        var _0x8cf7be = hsvToHex(_0x50c24c);
        var source = {
          main: item,
          back: back,
          nick: nick,
          plate: _0x51754a.v > 50 ? nick : _0x8cf7be,
          particles: [hsvToHex(_0x48e6cd(_0x51754a, 100)), hsvToHex(_0x48e6cd(_0x51754a, 90)), hsvToHex(_0x48e6cd(_0x51754a, 80)), hsvToHex(_0x48e6cd(_0x51754a, 70)), hsvToHex(_0x48e6cd(_0x51754a, 60)), hsvToHex(_0x48e6cd(_0x51754a, 50)), hsvToHex(_0x48e6cd(_0x51754a, 40)), hsvToHex(_0x48e6cd(_0x51754a, 30)), hsvToHex(_0x48e6cd(_0x51754a, 20))]
        };
        var asset = new Asset(coloredPool, item, source);
        asset.content.colors = source;
        if (config) {
          asset.content.display = new SkinAvatar(config, "", {
            layers: [{
              src: _0xf32c82(source.nick, source.nick)
            }, {
              level: 1,
              src: _0xf32c82(source.main, source.back)
            }]
          });
        }
        asset.ready = true;
        asset.botsEnable = true;
        return asset;
      })));
    }
    loadAsset(_0x90f7c9) {
      return _0x90f7c9;
    }
  }
  class SkinManager {
    constructor(config, _0x3e0753) {
      this.coloredSkinAssets = new ColoredPool(config, _0x3e0753);
    }
    available() {
      return this.coloredSkinAssets.free();
    }
    has(_0x6d219d) {
      return this.coloredSkinAssets.get(_0x6d219d);
    }
    get(_0x6a983f, _0x4b7656) {
      var _0x3825f3;
      if (_0x4b7656) {
        var _0x31f587 = this.coloredSkinAssets.get(_0x4b7656);
        if (_0x31f587) {
          if (_0x31f587.consumers.length > 0) {
            var consumer = _0x31f587.consumers[0];
            var _0x323664 = this.coloredSkinAssets.get();
            consumer.removeAsset(_0x31f587);
            consumer.addAsset(_0x323664);
          }
          _0x3825f3 = _0x31f587;
        }
      } else {
        _0x3825f3 = this.coloredSkinAssets.get();
      }
      var skin = new Skin();
      skin.addAsset(_0x3825f3);
      skin.user = _0x6a983f;
      return skin;
    }
    release(_0x4842e3) {
      _0x4842e3.assets.forEach(function (asset) {
        return asset.unuse(_0x4842e3);
      });
    }
  }
  var BOT_STATES = {
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
      update: function (unit, _0x17c632) {
        if (unit.in !== unit.base) {
          return "capture";
        }
        unit.game.border.distance(unit.position);
        unit.target = _0x17c632.point;
      }
    },
    cut: {
      findExit: function (unit) {
        var segment = new Segment(unit.position, unit.game.border.nearPoint(unit.position));
        var intersections = unit.base.polygon.intersections(segment);
        intersections.sort(function (a, b) {
          return a.distance - b.distance;
        });
        var result = intersections[0] && intersections[0].segment.start;
        if (result && unit.game.border.distance(result) > 15) {
          return result;
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
      enter: function (unit) {
        var _0x55b191;
        var result = {};
        var min = Infinity;
        var count = unit.base.polygon.segments.length;
        var unitSpeed = unit.game.config.unitSpeed;
        for (result.minDistance = unitSpeed; _0x55b191 === undefined;) {
          for (var j = 0; j < 1; j++) {
            var _0x211701 = ~~(Math.random() * count);
            var dist = unit.base.polygon.segments[_0x211701].start.distance(unit.position);
            if (dist < min && unitSpeed < dist) {
              min = dist;
              _0x55b191 = _0x211701;
            }
          }
          unitSpeed *= 0.75;
        }
        result.exitPoint = unit.base.polygon.segments[_0x55b191].start;
        return result;
      },
      update: function (unit, _0x19b191) {
        if (unit.in !== unit.base) {
          _0x19b191 = {};
          return "capture";
        }
        if (botNearPlayerTrack(unit)) {
          return "attack";
        }
        var count = unit.base.polygon.segments.length;
        var minDistance = _0x19b191.minDistance;
        var _0x4014b4 = ~~(Math.random() * count);
        var start = unit.base.polygon.segments[_0x4014b4].start;
        var dist = start.distance(unit.position);
        var dist2 = _0x19b191.exitPoint.distance(unit.position);
        if (minDistance < dist && dist < dist2) {
          _0x19b191.exitPoint = start;
        } else {
          if (!Object.values(_0x19b191.exitPoint.segments).some(function (item) {
            return item && item.shape === unit.base.polygon;
          })) {
            _0x19b191.exitPoint = start;
          }
          if (unit.target && !unit.game.border.inside(unit.target)) {
            _0x19b191.exitPoint = start;
          }
        }
        unit.target = _0x19b191.exitPoint;
      }
    },
    capture: {
      update: function (unit) {
        if (unit.in === unit.base) {
          return "idle";
        }
        if (botNearPlayerTrack(unit)) {
          return "attack";
        }
        if (botFeelsThreatened(unit)) {
          return "back";
        }
        if (predictSelfCross(unit)) {
          return "back";
        }
        var unitSpeed = unit.game.config.unitSpeed;
        var center = unit.game.border.center;
        var dist = unit.position.distance(center);
        var dist2 = unit.game.border.distance(unit.position);
        if (unit.baseDistance < unitSpeed / 4 && unit.track.length > unitSpeed * 2 && dist2 > 10) {
          return "back";
        }
        if (!(unit.position.distance2(unit.target) < 156.25) || !(dist2 > 25)) {
          var _0x3028f4 = 0;
          if (unit.track.simplyline.length) {
            for (var i = 1, count = unit.track.simplyline.length; i < count; i++) {
              var point = unit.track.simplyline[i - 1];
              var point2 = unit.track.simplyline[i];
              _0x3028f4 += (point.x + point2.x) * (point2.y - point.y);
            }
            var point3 = unit.track.simplyline[unit.track.simplyline.length - 1];
            var baseNearestPoint = unit.baseNearestPoint;
            _0x3028f4 += (point3.x + baseNearestPoint.x) * (baseNearestPoint.y - point3.y);
            point3 = unit.baseNearestPoint;
            baseNearestPoint = unit.track.simplyline[0];
            _0x3028f4 += (point3.x + baseNearestPoint.x) * (baseNearestPoint.y - point3.y);
          }
          var sign = Math.sign(_0x3028f4);
          _0x3028f4 = Math.abs(_0x3028f4 / 2);
          unit.capSquare = _0x3028f4;
          var _0x6857a3;
          var def = unit.def;
          var greed = unit.greed;
          var safety = unit.safety;
          var _0x4313a9 = Math.PI * 2 * unit.vrange * greed;
          var _0x4dc58f = unit.track.length / _0x4313a9;
          var _0x316631 = Math.min(unit.base.square, Math.PI * unit.vrange * unit.vrange) * greed;
          var _0x2c6959 = unit.capSquare / _0x316631;
          var _0x74a20c = unit.vrange * lerp(3, 0.7, safety);
          try {
            _0x6857a3 = unit.position.distance(unit.track.polyline.start) / _0x74a20c;
          } catch (_0x4651c6) {
            console.log(unit);
            throw _0x4651c6;
          }
          var _0x543006 = unit.unitToTrackDistances.reduce(function (acc, unitToTrackDistance) {
            return Math.min(unitToTrackDistance.trackDistance, acc);
          }, Infinity) * 0.8 * def;
          var _0x2d0af5 = unit.baseDistance / _0x543006;
          var _0xeb99fb = Math.max(_0x4dc58f, _0x2c6959, _0x6857a3, _0x2d0af5);
          if (_0xeb99fb > 1) {
            return "back";
          }
          var _0x9d92ad;
          var _0x160d80 = unit.vrange * greed;
          unit.distanceDanger;
          var _0x559c86 = _0x160d80;
          var _0x1c3e24 = _0x559c86 * 0.8;
          var delta = unit.target.clone().sub(unit.position);
          if (unit.baseDistance > _0x559c86 || _0xeb99fb > 0.75) {
            unit.aspect = "приближение";
            _0x9d92ad = unit.baseNearestPointNormal.clone().mulScalar(25).rotate((Math.PI / 2 + Math.PI / 4) * sign);
          } else if (unit.baseDistance < _0x1c3e24) {
            unit.aspect = "отдаление";
            var _0x4c5b94 = Math.PI / 4;
            var percent = unit.track.length / _0x1c3e24;
            if (percent < 1) {
              unit.aspect = "отстрел";
              _0x4c5b94 = lerp(Math.PI / 2 * greed, 0, percent);
            }
            _0x9d92ad = unit.baseNearestPointNormal.clone().mulScalar(25).rotate((Math.PI / 2 - _0x4c5b94) * sign);
          } else {
            unit.aspect = "проход";
            _0x9d92ad = unit.baseNearestPointNormal.clone().mulScalar(25).rotate(Math.PI / 2 * sign);
            unit.smoothness = 1 + (1 - Math.min(1, unit.maxDanger)) * 3;
          }
          unit.smoothness = 1 - Math.min(1, unit.maxDanger) + 1;
          if (dist2 < 50 && dist2 < unit.position.clone().add(_0x9d92ad).distance(center)) {
            return "slide";
          }
          unit.target = unit.position.clone().add(_0x9d92ad);
          var _0xf32dde = unit.game.border.radiusByPoint(unit.target);
          if (unit.target.distance(center) > _0xf32dde + 18.75) {
            var angle = unit.position.clone().sub(center).angle(delta);
            var unitSpeed2 = (_0xf32dde * _0xf32dde - 625 + dist * dist) / (dist * 2);
            var dist3 = Math.sqrt(_0xf32dde * _0xf32dde - unitSpeed2 * unitSpeed2);
            var dir = unit.position.clone().sub(center).normalize();
            var _0x541bb0 = center.clone().add(dir.clone().mulScalar(unitSpeed2));
            _0x9d92ad = dir.clone().rotate(Math.PI / 2 * angle).rotate(Math.PI / 8 * -angle).mulScalar(dist3);
            unit.target = _0x541bb0.clone().add(_0x9d92ad);
          } else if (unit.target.distance(center) > _0xf32dde) {
            unit.target.distance(center);
          }
        }
      }
    },
    slide: {
      enter: function (unit) {
        var _0x106553;
        var _0x228d54;
        var position = unit.position;
        var baseNearestPoint = unit.baseNearestPoint;
        var target = unit.target;
        baseNearestPoint.clone().sub(position);
        var delta = target.clone().sub(position);
        var delta2 = unit.position.clone().sub(unit.game.border.center);
        var segments = unit.track.polyline.segments;
        if (segments.length) {
          var segment = segments[segments.length - 1];
          _0x106553 = segment.a;
          _0x228d54 = segment.b;
        } else {
          _0x106553 = position.y - delta.y;
          _0x228d54 = delta.x - position.x;
        }
        var dy = position.y - delta2.y;
        var dx = delta2.x - position.x;
        return {
          zn: Math.sign(cross2d(_0x106553, _0x228d54, dy, dx)) || 1,
          reversed: false
        };
      },
      update: function (unit, _0x136c17) {
        var def = unit.def;
        var greed = unit.greed;
        var safety = unit.safety;
        if (unit.in === unit.base) {
          return "idle";
        }
        if (botNearPlayerTrack(unit)) {
          return "attack";
        }
        if (botFeelsThreatened(unit)) {
          return "slideOut";
        }
        var _0x2ec496 = unit.unitToTrackDistances.reduce(function (acc, unitToTrackDistance) {
          return Math.min(unitToTrackDistance.trackDistance, acc);
        }, Infinity) * 0.8 * def;
        var _0x5d059c = unit.baseDistance / _0x2ec496;
        var _0x491484 = Math.PI * unit.vrange * greed;
        var _0x4d2e85 = unit.track.length / _0x491484;
        var _0x70b422 = unit.vrange * lerp(3, 0.7, safety);
        var _0x23fda5 = unit.position.distance(unit.track.polyline.start) / _0x70b422;
        if (Math.max(_0x4d2e85, _0x5d059c, _0x23fda5) > 1) {
          return "slideOut";
        }
        var position = unit.position;
        unit.baseNearestPoint;
        unit.target;
        var zn = _0x136c17.zn;
        var dist = unit.game.border.distance(position);
        var _0x3e425f = lerp(Math.PI / 3, 0, dist / 50);
        var _0x41e113 = position.clone().sub(unit.game.border.center).normalize().mulScalar(25).rotate(_0x3e425f * zn);
        unit.target = unit.position.clone().add(_0x41e113);
      }
    },
    slideOut: {
      update: function (unit) {
        if (unit.in === unit.base) {
          return "idle";
        }
        if (predictSelfCross(unit)) {
          return "back";
        }
        if (unit.game.border.distance(unit.position) > 25) {
          return "back";
        }
        var _0x3188a9 = unit.position.clone().sub(unit.game.border.center).normalize().mulScalar(-25);
        unit.target = unit.position.clone().add(_0x3188a9);
      }
    },
    back_old: {
      enter: function (_0x2aca07) {
        _0x2aca07.target = _0x2aca07.baseNearestPoint;
      },
      update: function (unit) {
        if (unit.in === unit.base) {
          return "idle";
        }
        unit.smoothness = lerp(1, Math.max(1, Math.max(1, Math.min(unit.def, unit.greed) * 4)), Math.max(1, unit.maxDanger));
        if (unit.game.border.distance(unit.position) < 20) {
          unit.smoothness = 1;
        }
        unit.target = unit.baseNearestPoint;
      }
    },
    back: {
      enter: function (_0x34a7c2) {
        _0x34a7c2.target = _0x34a7c2.baseNearestPoint;
        return {
          time: 0
        };
      },
      update: function (unit, _0x2076ac, _0x27b473) {
        if (unit.in === unit.base) {
          return "idle";
        }
        unit.smoothness = 1;
        if (unit.game.border.distance(unit.position) < 20) {
          unit.smoothness = 1;
        }
        var _0x1c940f = predictSelfCross(unit);
        if (_0x1c940f) {
          _0x2076ac.safe = true;
          var _0xe7aaa2 = _0x1c940f.distance2(unit.position) * 0.9;
          var index = unit.track.simplyline.reduce(function (acc, point) {
            var distSq = point.distance2(unit.position);
            if (distSq < acc.d && _0xe7aaa2 < distSq) {
              acc.d = distSq;
              acc.index = acc.i;
            }
            acc.i++;
            return acc;
          }, {
            i: 0,
            index: 0,
            d: Infinity
          }).index;
          var _0x55fc84 = index - 1;
          var _0x59b917 = index + 1;
          if (index === 0) {
            _0x55fc84 = index;
          }
          if (index === unit.track.simplyline.length - 1) {
            _0x59b917 = index;
          }
          var _0x179abf = unit.track.simplyline[_0x55fc84].clone().sub(unit.track.simplyline[_0x59b917]).normalize().mulScalar(5);
          unit.target = _0x179abf.add(unit.position);
        } else if (_0x2076ac.safe) {
          _0x2076ac.time += _0x27b473;
          if (_0x2076ac.time > 200) {
            _0x2076ac.time = 0;
            _0x2076ac.safe = false;
          }
        } else {
          unit.target = unit.baseNearestPoint;
        }
      }
    },
    attack: {
      enter: function () {
        return {};
      },
      update: function (unit) {
        var player = unit.game.player;
        if (!player || player.death) {
          return "idle";
        }
        var simplyline = player.track.simplyline;
        if (!simplyline.length) {
          return "idle";
        }
        if (player.track.length < unit.game.config.botAttackTrackLength && botFeelsThreatened(unit, true)) {
          return "idle";
        }
        var _0x52fe22 = 0;
        var min = Infinity;
        simplyline.forEach(function (point, index) {
          var distSq = unit.position.distance2(point);
          if (distSq < min) {
            min = distSq;
            _0x52fe22 = index;
          }
        });
        unit.target = simplyline[_0x52fe22];
      }
    }
  };
  var CONFIG = _objectSpread2(_objectSpread2({}, {
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
  var languagesPromise = fetch("assets/languages.json?v2").then(function (result) {
    return result.json();
  });
  Promise.all([languagesPromise]).then(function (result) {
    var _0x28657b;
    var _0x1da47f;
    var _0x27c00f = _slicedToArray(result, 1)[0];
    _0x1da47f = (_0x28657b = _0x27c00f).en;
    Object.entries(_0x28657b).forEach(function (item) {
      var _0x5454bb = _slicedToArray(item, 2);
      var name = _0x5454bb[0];
      var _0x24f0b2 = _0x5454bb[1];
      LANGUAGES.push({
        name: name,
        lng: _objectSpread2(_objectSpread2({}, _0x1da47f), _0x24f0b2)
      });
    });
    var _0x4b6cc1;
    var _0x20d5e6;
    var _0x214a26;
    var __h;
    var _0x2cb891;
    var _0x43a29e;
    var noSaveAchievementStore = new NoSaveAchievementStore([]);
    var api = createApi(CONFIG, BOT_STATES, getLanguage(), function (config) {
      return new SkinManager(config, TEAM_PALETTE);
    }, new NamePool(NAMES_TEXT), TeamScoreScheme, noSaveAchievementStore, function (_0x2ba0ea) {
      var userId = jsCookie.get("player_id");
      if (userId && _0x2ba0ea.kills) {
        var _0x566016 = {
          userId: userId,
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
    }, spawner, renderGame);
    window.paperio2api = api;
    _0x4b6cc1 = createElement(App, {
      config: CONFIG,
      api: api,
      storage: jsCookie,
      mode: "teams"
    });
    _0x20d5e6 = document.getElementById("game");
    if (options.__) {
      options.__(_0x4b6cc1, _0x20d5e6);
    }
    _0x2cb891 = (__h = _0x214a26 === EMPTY_OBJ_ALIAS) ? null : _0x214a26 && _0x214a26.__k || _0x20d5e6.__k;
    _0x4b6cc1 = createElement(Fragment, null, [_0x4b6cc1]);
    _0x43a29e = [];
    diff(_0x20d5e6, (!__h && _0x214a26 || _0x20d5e6).__k = _0x4b6cc1, _0x2cb891 || EMPTY_OBJ, EMPTY_OBJ, _0x20d5e6.ownerSVGElement !== undefined, _0x214a26 && !__h ? [_0x214a26] : !_0x2cb891 && _0x20d5e6.childNodes.length ? EMPTY_ARR.slice.call(_0x20d5e6.childNodes) : null, _0x43a29e, _0x214a26 || EMPTY_OBJ, __h);
    commitRoot(_0x43a29e, _0x4b6cc1);
  });
})();