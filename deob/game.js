(function () {
  "use strict";

  var _0x4c28c2;
  var _0x425b06;
  var _0x406d2a;
  var _0x5406f9;
  var _0x4c3ef1;
  var _0x43d241;
  var _0x316685 = {};
  var _0x9d84c4 = [];
  var _0x322d6e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function _0x58f7c8(__s, _0x3696bd) {
    for (var key in _0x3696bd) {
      __s[key] = _0x3696bd[key];
    }
    return __s;
  }
  function _0x541561(_0x53dc6d) {
    var parentNode = _0x53dc6d.parentNode;
    if (parentNode) {
      parentNode.removeChild(_0x53dc6d);
    }
  }
  function createElement(_0x7ee35d, _0x20f1ba, _0x530b5b) {
    var key;
    var _0x48c719;
    var _0x4203c8;
    var args = arguments;
    var props = {};
    for (_0x4203c8 in _0x20f1ba) {
      if (_0x4203c8 == "key") {
        key = _0x20f1ba[_0x4203c8];
      } else if (_0x4203c8 == "ref") {
        _0x48c719 = _0x20f1ba[_0x4203c8];
      } else {
        props[_0x4203c8] = _0x20f1ba[_0x4203c8];
      }
    }
    if (arguments.length > 3) {
      _0x530b5b = [_0x530b5b];
      _0x4203c8 = 3;
      for (; _0x4203c8 < arguments.length; _0x4203c8++) {
        _0x530b5b.push(args[_0x4203c8]);
      }
    }
    if (_0x530b5b != null) {
      props.children = _0x530b5b;
    }
    if (typeof _0x7ee35d == "function" && _0x7ee35d.defaultProps != null) {
      for (_0x4203c8 in _0x7ee35d.defaultProps) {
        if (props[_0x4203c8] === undefined) {
          props[_0x4203c8] = _0x7ee35d.defaultProps[_0x4203c8];
        }
      }
    }
    return _0x77e4ad(_0x7ee35d, props, key, _0x48c719, null);
  }
  function _0x77e4ad(_0x311635, props, key, _0x3fecb4, __v) {
    var result = {
      type: _0x311635,
      props: props,
      key: key,
      ref: _0x3fecb4,
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
    if (_0x4c28c2.vnode != null) {
      _0x4c28c2.vnode(result);
    }
    return result;
  }
  function Fragment(_0x403bd4) {
    return _0x403bd4.children;
  }
  function Component(props, context) {
    this.props = props;
    this.context = context;
  }
  function _0x1119d1(__, _0x28ea70) {
    if (_0x28ea70 == null) {
      if (__.__) {
        return _0x1119d1(__.__, __.__.__k.indexOf(__) + 1);
      } else {
        return null;
      }
    }
    var _0x3446aa;
    for (; _0x28ea70 < __.__k.length; _0x28ea70++) {
      if ((_0x3446aa = __.__k[_0x28ea70]) != null && _0x3446aa.__e != null) {
        return _0x3446aa.__e;
      }
    }
    if (typeof __.type == "function") {
      return _0x1119d1(__);
    } else {
      return null;
    }
  }
  function _0x79b884(_0x212da1) {
    var _0x1e6c54;
    var _0x4e7ab4;
    if ((_0x212da1 = _0x212da1.__) != null && _0x212da1.__c != null) {
      _0x212da1.__e = _0x212da1.__c.base = null;
      _0x1e6c54 = 0;
      for (; _0x1e6c54 < _0x212da1.__k.length; _0x1e6c54++) {
        if ((_0x4e7ab4 = _0x212da1.__k[_0x1e6c54]) != null && _0x4e7ab4.__e != null) {
          _0x212da1.__e = _0x212da1.__c.base = _0x4e7ab4.__e;
          break;
        }
      }
      return _0x79b884(_0x212da1);
    }
  }
  function _0x457993(_0x5b79a9) {
    if (!_0x5b79a9.__d && (_0x5b79a9.__d = true) && _0x425b06.push(_0x5b79a9) && !_0x154984.__r++ || _0x5406f9 !== _0x4c28c2.debounceRendering) {
      ((_0x5406f9 = _0x4c28c2.debounceRendering) || _0x406d2a)(_0x154984);
    }
  }
  function _0x154984() {
    var _0xbcb4e6;
    for (; _0x154984.__r = _0x425b06.length;) {
      _0xbcb4e6 = _0x425b06.sort(function (a, b) {
        return a.__v.__b - b.__v.__b;
      });
      _0x425b06 = [];
      _0xbcb4e6.some(function (item) {
        var _0x43f181;
        var _0x5e70d3;
        var __2;
        var _0x337ebf;
        var __;
        var _0x480b70;
        var __e;
        if (item.__d) {
          _0x480b70 = (__ = (_0x43f181 = item).__v).__e;
          if (__e = _0x43f181.__P) {
            _0x5e70d3 = [];
            (__2 = _0x58f7c8({}, __)).__v = __2;
            _0x337ebf = _0xee3c4b(__e, __, __2, _0x43f181.__n, __e.ownerSVGElement !== undefined, __.__h != null ? [_0x480b70] : null, _0x5e70d3, _0x480b70 == null ? _0x1119d1(__) : _0x480b70, __.__h);
            _0x250e35(_0x5e70d3, __);
            if (_0x337ebf != _0x480b70) {
              _0x79b884(__);
            }
          }
        }
      });
    }
  }
  function _0x47e317(__e, _0x1d4654, vnode, __, __n, _0x2c2d9d, _0x49261f, _0x2f3096, _0x4909bd, __h) {
    var _0x5b04cd;
    var _0x3a4948;
    var __2;
    var props;
    var __e2;
    var _0x4deee9;
    var _0x2ac253;
    var __k = __ && __.__k || _0x9d84c4;
    var count = __k.length;
    if (_0x4909bd == _0x316685) {
      _0x4909bd = _0x49261f != null ? _0x49261f[0] : count ? _0x1119d1(__, 0) : null;
    }
    vnode.__k = [];
    _0x5b04cd = 0;
    for (; _0x5b04cd < _0x1d4654.length; _0x5b04cd++) {
      if ((props = vnode.__k[_0x5b04cd] = (props = _0x1d4654[_0x5b04cd]) == null || typeof props == "boolean" ? null : typeof props == "string" || typeof props == "number" ? _0x77e4ad(null, props, null, null, props) : Array.isArray(props) ? _0x77e4ad(Fragment, {
        children: props
      }, null, null, null) : props.__e != null || props.__c != null ? _0x77e4ad(props.type, props.props, props.key, null, props.__v) : props) != null) {
        props.__ = vnode;
        props.__b = vnode.__b + 1;
        if ((__2 = __k[_0x5b04cd]) === null || __2 && props.key == __2.key && props.type === __2.type) {
          __k[_0x5b04cd] = undefined;
        } else {
          for (_0x3a4948 = 0; _0x3a4948 < count; _0x3a4948++) {
            if ((__2 = __k[_0x3a4948]) && props.key == __2.key && props.type === __2.type) {
              __k[_0x3a4948] = undefined;
              break;
            }
            __2 = null;
          }
        }
        __e2 = _0xee3c4b(__e, props, __2 = __2 || _0x316685, __n, _0x2c2d9d, _0x49261f, _0x2f3096, _0x4909bd, __h);
        if ((_0x3a4948 = props.ref) && __2.ref != _0x3a4948) {
          _0x2ac253 ||= [];
          if (__2.ref) {
            _0x2ac253.push(__2.ref, null, props);
          }
          _0x2ac253.push(_0x3a4948, props.__c || __e2, props);
        }
        if (__e2 != null) {
          if (_0x4deee9 == null) {
            _0x4deee9 = __e2;
          }
          _0x4909bd = _0x593ea3(__e, props, __2, __k, _0x49261f, __e2, _0x4909bd);
          if (__h || vnode.type != "option") {
            if (typeof vnode.type == "function") {
              vnode.__d = _0x4909bd;
            }
          } else {
            __e.value = "";
          }
        } else if (_0x4909bd && __2.__e == _0x4909bd && _0x4909bd.parentNode != __e) {
          _0x4909bd = _0x1119d1(__2);
        }
      }
    }
    vnode.__e = _0x4deee9;
    if (_0x49261f != null && typeof vnode.type != "function") {
      for (_0x5b04cd = _0x49261f.length; _0x5b04cd--;) {
        if (_0x49261f[_0x5b04cd] != null) {
          _0x541561(_0x49261f[_0x5b04cd]);
        }
      }
    }
    for (_0x5b04cd = count; _0x5b04cd--;) {
      if (__k[_0x5b04cd] != null) {
        _0x566630(__k[_0x5b04cd], __k[_0x5b04cd]);
      }
    }
    if (_0x2ac253) {
      for (_0x5b04cd = 0; _0x5b04cd < _0x2ac253.length; _0x5b04cd++) {
        _0x415d38(_0x2ac253[_0x5b04cd], _0x2ac253[++_0x5b04cd], _0x2ac253[++_0x5b04cd]);
      }
    }
  }
  function _0x593ea3(__e2, props, props2, __k, _0x590606, __e, _0x45928d) {
    var _0x44321c;
    var _0x2b771e;
    var _0x371e16;
    if (props.__d !== undefined) {
      _0x44321c = props.__d;
      props.__d = undefined;
    } else if (_0x590606 == props2 || __e != _0x45928d || __e.parentNode == null) {
      _0x48ed47: if (_0x45928d == null || _0x45928d.parentNode !== __e2) {
        __e2.appendChild(__e);
        _0x44321c = null;
      } else {
        _0x2b771e = _0x45928d;
        _0x371e16 = 0;
        for (; (_0x2b771e = _0x2b771e.nextSibling) && _0x371e16 < __k.length; _0x371e16 += 2) {
          if (_0x2b771e == __e) {
            break _0x48ed47;
          }
        }
        __e2.insertBefore(__e, _0x45928d);
        _0x44321c = _0x45928d;
      }
    }
    if (_0x44321c !== undefined) {
      return _0x44321c;
    } else {
      return __e.nextSibling;
    }
  }
  function _0x495f34(__e, props2, props, _0x3b8dff, __h) {
    var _0x1067d5;
    for (_0x1067d5 in props) {
      if (_0x1067d5 !== "children" && _0x1067d5 !== "key" && !(_0x1067d5 in props2)) {
        _0x51a52e(__e, _0x1067d5, null, props[_0x1067d5], _0x3b8dff);
      }
    }
    for (_0x1067d5 in props2) {
      if ((!__h || typeof props2[_0x1067d5] == "function") && _0x1067d5 !== "children" && _0x1067d5 !== "key" && _0x1067d5 !== "value" && _0x1067d5 !== "checked" && props[_0x1067d5] !== props2[_0x1067d5]) {
        _0x51a52e(__e, _0x1067d5, props2[_0x1067d5], props[_0x1067d5], _0x3b8dff);
      }
    }
  }
  function _0x1f5e39(style, _0x1e8e8c, _0x46b665) {
    if (_0x1e8e8c[0] === "-") {
      style.setProperty(_0x1e8e8c, _0x46b665);
    } else {
      style[_0x1e8e8c] = _0x46b665 == null ? "" : typeof _0x46b665 != "number" || _0x322d6e.test(_0x1e8e8c) ? _0x46b665 : _0x46b665 + "px";
    }
  }
  function _0x51a52e(__e, _0x407e62, _0x1f1db3, _0x554518, _0x50a1f8) {
    var _0x4a9714;
    var _0x4234e0;
    var _0x34ecd5;
    if (_0x50a1f8 && _0x407e62 == "className") {
      _0x407e62 = "class";
    }
    if (_0x407e62 === "style") {
      if (typeof _0x1f1db3 == "string") {
        __e.style.cssText = _0x1f1db3;
      } else {
        if (typeof _0x554518 == "string") {
          __e.style.cssText = _0x554518 = "";
        }
        if (_0x554518) {
          for (_0x407e62 in _0x554518) {
            if (!_0x1f1db3 || !(_0x407e62 in _0x1f1db3)) {
              _0x1f5e39(__e.style, _0x407e62, "");
            }
          }
        }
        if (_0x1f1db3) {
          for (_0x407e62 in _0x1f1db3) {
            if (!_0x554518 || _0x1f1db3[_0x407e62] !== _0x554518[_0x407e62]) {
              _0x1f5e39(__e.style, _0x407e62, _0x1f1db3[_0x407e62]);
            }
          }
        }
      }
    } else if (_0x407e62[0] === "o" && _0x407e62[1] === "n") {
      _0x4a9714 = _0x407e62 !== (_0x407e62 = _0x407e62.replace(/Capture$/, ""));
      if ((_0x4234e0 = _0x407e62.toLowerCase()) in __e) {
        _0x407e62 = _0x4234e0;
      }
      _0x407e62 = _0x407e62.slice(2);
      __e.l ||= {};
      __e.l[_0x407e62 + _0x4a9714] = _0x1f1db3;
      _0x34ecd5 = _0x4a9714 ? _0x1f7f09 : _0x17209f;
      if (_0x1f1db3) {
        if (!_0x554518) {
          __e.addEventListener(_0x407e62, _0x34ecd5, _0x4a9714);
        }
      } else {
        __e.removeEventListener(_0x407e62, _0x34ecd5, _0x4a9714);
      }
    } else if (_0x407e62 !== "list" && _0x407e62 !== "tagName" && _0x407e62 !== "form" && _0x407e62 !== "type" && _0x407e62 !== "size" && _0x407e62 !== "download" && _0x407e62 !== "href" && !_0x50a1f8 && _0x407e62 in __e) {
      __e[_0x407e62] = _0x1f1db3 == null ? "" : _0x1f1db3;
    } else if (typeof _0x1f1db3 != "function" && _0x407e62 !== "dangerouslySetInnerHTML") {
      if (_0x407e62 !== (_0x407e62 = _0x407e62.replace(/xlink:?/, ""))) {
        if (_0x1f1db3 == null || _0x1f1db3 === false) {
          __e.removeAttributeNS("http://www.w3.org/1999/xlink", _0x407e62.toLowerCase());
        } else {
          __e.setAttributeNS("http://www.w3.org/1999/xlink", _0x407e62.toLowerCase(), _0x1f1db3);
        }
      } else if (_0x1f1db3 == null || _0x1f1db3 === false && !/^ar/.test(_0x407e62)) {
        __e.removeAttribute(_0x407e62);
      } else {
        __e.setAttribute(_0x407e62, _0x1f1db3);
      }
    }
  }
  function _0x17209f(_0x2f73ae) {
    this.l[_0x2f73ae.type + false](_0x4c28c2.event ? _0x4c28c2.event(_0x2f73ae) : _0x2f73ae);
  }
  function _0x1f7f09(_0x39047b) {
    this.l[_0x39047b.type + true](_0x4c28c2.event ? _0x4c28c2.event(_0x39047b) : _0x39047b);
  }
  function _0x133c3b(_0x2182cf, _0x110832, __e2) {
    var _0x254dda;
    var props;
    for (_0x254dda = 0; _0x254dda < _0x2182cf.__k.length; _0x254dda++) {
      if (props = _0x2182cf.__k[_0x254dda]) {
        props.__ = _0x2182cf;
        if (props.__e) {
          if (typeof props.type == "function" && props.__k.length > 1) {
            _0x133c3b(props, _0x110832, __e2);
          }
          _0x110832 = _0x593ea3(__e2, props, props, _0x2182cf.__k, null, props.__e, _0x110832);
          if (typeof _0x2182cf.type == "function") {
            _0x2182cf.__d = _0x110832;
          }
        }
      }
    }
  }
  function _0xee3c4b(__e, vnode, __, __n, _0x30c4e7, _0x5d4155, _0x39b36c, _0x2d334e, __h) {
    var vnode2;
    var point;
    var _0xdc95d7;
    var _0x490cde;
    var _0x4c08c1;
    var _0x496f8f;
    var _0x531bff;
    var _0x7c2e61;
    var _0x36dd0c;
    var _0x24bd6d;
    var _0x27f629;
    var type = vnode.type;
    if (vnode.constructor !== undefined) {
      return null;
    }
    if (__.__h != null) {
      __h = __.__h;
      _0x2d334e = vnode.__e = __.__e;
      vnode.__h = null;
      _0x5d4155 = [_0x2d334e];
    }
    if (vnode2 = _0x4c28c2.__b) {
      vnode2(vnode);
    }
    try {
      _0x38b1fe: if (typeof type == "function") {
        _0x7c2e61 = vnode.props;
        _0x36dd0c = (vnode2 = type.contextType) && __n[vnode2.__c];
        _0x24bd6d = vnode2 ? _0x36dd0c ? _0x36dd0c.props.value : vnode2.__ : __n;
        if (__.__c) {
          _0x531bff = (point = vnode.__c = __.__c).__ = point.__E;
        } else {
          if ("prototype" in type && type.prototype.render) {
            vnode.__c = point = new type(_0x7c2e61, _0x24bd6d);
          } else {
            vnode.__c = point = new Component(_0x7c2e61, _0x24bd6d);
            point.constructor = type;
            point.render = _0x6aab8d;
          }
          if (_0x36dd0c) {
            _0x36dd0c.sub(point);
          }
          point.props = _0x7c2e61;
          point.state ||= {};
          point.context = _0x24bd6d;
          point.__n = __n;
          _0xdc95d7 = point.__d = true;
          point.__h = [];
        }
        if (point.__s == null) {
          point.__s = point.state;
        }
        if (type.getDerivedStateFromProps != null) {
          if (point.__s == point.state) {
            point.__s = _0x58f7c8({}, point.__s);
          }
          _0x58f7c8(point.__s, type.getDerivedStateFromProps(_0x7c2e61, point.__s));
        }
        _0x490cde = point.props;
        _0x4c08c1 = point.state;
        if (_0xdc95d7) {
          if (type.getDerivedStateFromProps == null && point.componentWillMount != null) {
            point.componentWillMount();
          }
          if (point.componentDidMount != null) {
            point.__h.push(point.componentDidMount);
          }
        } else {
          if (type.getDerivedStateFromProps == null && _0x7c2e61 !== _0x490cde && point.componentWillReceiveProps != null) {
            point.componentWillReceiveProps(_0x7c2e61, _0x24bd6d);
          }
          if (!point.__e && point.shouldComponentUpdate != null && point.shouldComponentUpdate(_0x7c2e61, point.__s, _0x24bd6d) === false || vnode.__v === __.__v) {
            point.props = _0x7c2e61;
            point.state = point.__s;
            if (vnode.__v !== __.__v) {
              point.__d = false;
            }
            point.__v = vnode;
            vnode.__e = __.__e;
            vnode.__k = __.__k;
            if (point.__h.length) {
              _0x39b36c.push(point);
            }
            _0x133c3b(vnode, _0x2d334e, __e);
            break _0x38b1fe;
          }
          if (point.componentWillUpdate != null) {
            point.componentWillUpdate(_0x7c2e61, point.__s, _0x24bd6d);
          }
          if (point.componentDidUpdate != null) {
            point.__h.push(function () {
              point.componentDidUpdate(_0x490cde, _0x4c08c1, _0x496f8f);
            });
          }
        }
        point.context = _0x24bd6d;
        point.props = _0x7c2e61;
        point.state = point.__s;
        if (vnode2 = _0x4c28c2.__r) {
          vnode2(vnode);
        }
        point.__d = false;
        point.__v = vnode;
        point.__P = __e;
        vnode2 = point.render(point.props, point.state, point.context);
        point.state = point.__s;
        if (point.getChildContext != null) {
          __n = _0x58f7c8(_0x58f7c8({}, __n), point.getChildContext());
        }
        if (!_0xdc95d7 && point.getSnapshotBeforeUpdate != null) {
          _0x496f8f = point.getSnapshotBeforeUpdate(_0x490cde, _0x4c08c1);
        }
        _0x27f629 = vnode2 != null && vnode2.type == Fragment && vnode2.key == null ? vnode2.props.children : vnode2;
        _0x47e317(__e, Array.isArray(_0x27f629) ? _0x27f629 : [_0x27f629], vnode, __, __n, _0x30c4e7, _0x5d4155, _0x39b36c, _0x2d334e, __h);
        point.base = vnode.__e;
        vnode.__h = null;
        if (point.__h.length) {
          _0x39b36c.push(point);
        }
        if (_0x531bff) {
          point.__E = point.__ = null;
        }
        point.__e = false;
      } else if (_0x5d4155 == null && vnode.__v === __.__v) {
        vnode.__k = __.__k;
        vnode.__e = __.__e;
      } else {
        vnode.__e = _0x522c69(__.__e, vnode, __, __n, _0x30c4e7, _0x5d4155, _0x39b36c, __h);
      }
      if (vnode2 = _0x4c28c2.diffed) {
        vnode2(vnode);
      }
    } catch (_0x4e08bd) {
      vnode.__v = null;
      if (__h || _0x5d4155 != null) {
        vnode.__e = _0x2d334e;
        vnode.__h = !!__h;
        _0x5d4155[_0x5d4155.indexOf(_0x2d334e)] = null;
      }
      _0x4c28c2.__e(_0x4e08bd, vnode, __);
    }
    return vnode.__e;
  }
  function _0x250e35(_0x1803c8, _0x12b46b) {
    if (_0x4c28c2.__c) {
      _0x4c28c2.__c(_0x12b46b, _0x1803c8);
    }
    _0x1803c8.some(function (item) {
      try {
        _0x1803c8 = item.__h;
        item.__h = [];
        _0x1803c8.some(function (item2) {
          item2.call(item);
        });
      } catch (_0x3c06b5) {
        _0x4c28c2.__e(_0x3c06b5, item.__v);
      }
    });
  }
  function _0x522c69(__e, vnode, __, __n, _0xa64301, _0x6d09fb, _0x3f9ad6, __h) {
    var _0x5e6fce;
    var _0x4b0e30;
    var _0x435245;
    var _0x588a70;
    var _0x3a51e6;
    var props = __.props;
    var props2 = vnode.props;
    _0xa64301 = vnode.type === "svg" || _0xa64301;
    if (_0x6d09fb != null) {
      for (_0x5e6fce = 0; _0x5e6fce < _0x6d09fb.length; _0x5e6fce++) {
        if ((_0x4b0e30 = _0x6d09fb[_0x5e6fce]) != null && ((vnode.type === null ? _0x4b0e30.nodeType === 3 : _0x4b0e30.localName === vnode.type) || __e == _0x4b0e30)) {
          __e = _0x4b0e30;
          _0x6d09fb[_0x5e6fce] = null;
          break;
        }
      }
    }
    if (__e == null) {
      if (vnode.type === null) {
        return document.createTextNode(props2);
      }
      __e = _0xa64301 ? document.createElementNS("http://www.w3.org/2000/svg", vnode.type) : document.createElement(vnode.type, props2.is && {
        is: props2.is
      });
      _0x6d09fb = null;
      __h = false;
    }
    if (vnode.type === null) {
      if (props !== props2 && (!__h || __e.data !== props2)) {
        __e.data = props2;
      }
    } else {
      if (_0x6d09fb != null) {
        _0x6d09fb = _0x9d84c4.slice.call(__e.childNodes);
      }
      _0x435245 = (props = __.props || _0x316685).dangerouslySetInnerHTML;
      _0x588a70 = props2.dangerouslySetInnerHTML;
      if (!__h) {
        if (_0x6d09fb != null) {
          props = {};
          _0x3a51e6 = 0;
          for (; _0x3a51e6 < __e.attributes.length; _0x3a51e6++) {
            props[__e.attributes[_0x3a51e6].name] = __e.attributes[_0x3a51e6].value;
          }
        }
        if (_0x588a70 || _0x435245) {
          if (!_0x588a70 || (!_0x435245 || _0x588a70.__html != _0x435245.__html) && _0x588a70.__html !== __e.innerHTML) {
            __e.innerHTML = _0x588a70 && _0x588a70.__html || "";
          }
        }
      }
      _0x495f34(__e, props2, props, _0xa64301, __h);
      if (_0x588a70) {
        vnode.__k = [];
      } else {
        _0x5e6fce = vnode.props.children;
        _0x47e317(__e, Array.isArray(_0x5e6fce) ? _0x5e6fce : [_0x5e6fce], vnode, __, __n, vnode.type !== "foreignObject" && _0xa64301, _0x6d09fb, _0x3f9ad6, _0x316685, __h);
      }
      if (!__h) {
        if ("value" in props2 && (_0x5e6fce = props2.value) !== undefined && (_0x5e6fce !== __e.value || vnode.type === "progress" && !_0x5e6fce)) {
          _0x51a52e(__e, "value", _0x5e6fce, props.value, false);
        }
        if ("checked" in props2 && (_0x5e6fce = props2.checked) !== undefined && _0x5e6fce !== __e.checked) {
          _0x51a52e(__e, "checked", _0x5e6fce, props.checked, false);
        }
      }
    }
    return __e;
  }
  function _0x415d38(_0x52f145, _0x3013b5, _0x43abad) {
    try {
      if (typeof _0x52f145 == "function") {
        _0x52f145(_0x3013b5);
      } else {
        _0x52f145.current = _0x3013b5;
      }
    } catch (_0x3f9d12) {
      _0x4c28c2.__e(_0x3f9d12, _0x43abad);
    }
  }
  function _0x566630(_0x5bcf77, _0x46fddb, _0x274471) {
    var _0x49487f;
    var _0x3a1192;
    var _0x463e59;
    if (_0x4c28c2.unmount) {
      _0x4c28c2.unmount(_0x5bcf77);
    }
    if (_0x49487f = _0x5bcf77.ref) {
      if (!_0x49487f.current || _0x49487f.current === _0x5bcf77.__e) {
        _0x415d38(_0x49487f, null, _0x46fddb);
      }
    }
    if (!_0x274471 && typeof _0x5bcf77.type != "function") {
      _0x274471 = (_0x3a1192 = _0x5bcf77.__e) != null;
    }
    _0x5bcf77.__e = _0x5bcf77.__d = undefined;
    if ((_0x49487f = _0x5bcf77.__c) != null) {
      if (_0x49487f.componentWillUnmount) {
        try {
          _0x49487f.componentWillUnmount();
        } catch (_0x3ae80d) {
          _0x4c28c2.__e(_0x3ae80d, _0x46fddb);
        }
      }
      _0x49487f.base = _0x49487f.__P = null;
    }
    if (_0x49487f = _0x5bcf77.__k) {
      for (_0x463e59 = 0; _0x463e59 < _0x49487f.length; _0x463e59++) {
        if (_0x49487f[_0x463e59]) {
          _0x566630(_0x49487f[_0x463e59], _0x46fddb, _0x274471);
        }
      }
    }
    if (_0x3a1192 != null) {
      _0x541561(_0x3a1192);
    }
  }
  function _0x6aab8d(_0x2bb351, _0x136766, _0x4dac4a) {
    return this.constructor(_0x2bb351, _0x4dac4a);
  }
  function render(_0xe1b337, __e, _0x21c44d) {
    var __h;
    var _0x34cd7a;
    var _0x38dafe;
    if (_0x4c28c2.__) {
      _0x4c28c2.__(_0xe1b337, __e);
    }
    _0x34cd7a = (__h = _0x21c44d === _0x4c3ef1) ? null : _0x21c44d && _0x21c44d.__k || __e.__k;
    _0xe1b337 = createElement(Fragment, null, [_0xe1b337]);
    _0x38dafe = [];
    _0xee3c4b(__e, (__h ? __e : _0x21c44d || __e).__k = _0xe1b337, _0x34cd7a || _0x316685, _0x316685, __e.ownerSVGElement !== undefined, _0x21c44d && !__h ? [_0x21c44d] : _0x34cd7a ? null : __e.childNodes.length ? _0x9d84c4.slice.call(__e.childNodes) : null, _0x38dafe, _0x21c44d || _0x316685, __h);
    _0x250e35(_0x38dafe, _0xe1b337);
  }
  function createContext(_0x5beed0, _0x33329b) {
    var _0x4e0e19 = {
      __c: _0x33329b = "__cC" + _0x43d241++,
      __: _0x5beed0,
      Consumer: function (_0x5c8130, _0x11d62d) {
        return _0x5c8130.children(_0x11d62d);
      },
      Provider: function (_0xfc529f, _0x3c7ed8, _0x30fb1b) {
        if (!this.getChildContext) {
          _0x3c7ed8 = [];
          (_0x30fb1b = {})[_0x33329b] = this;
          this.getChildContext = function () {
            return _0x30fb1b;
          };
          this.shouldComponentUpdate = function (_0x4a0131) {
            if (this.props.value !== _0x4a0131.value) {
              _0x3c7ed8.some(_0x457993);
            }
          };
          this.sub = function (_0x54bd38) {
            _0x3c7ed8.push(_0x54bd38);
            var componentWillUnmount = _0x54bd38.componentWillUnmount;
            _0x54bd38.componentWillUnmount = function () {
              _0x3c7ed8.splice(_0x3c7ed8.indexOf(_0x54bd38), 1);
              if (componentWillUnmount) {
                componentWillUnmount.call(_0x54bd38);
              }
            };
          };
        }
        return _0xfc529f.children;
      }
    };
    return _0x4e0e19.Provider.__ = _0x4e0e19.Consumer.contextType = _0x4e0e19;
  }
  _0x4c28c2 = {
    __e: function (_0x56617d, _0x4d6ef8) {
      var _0x261b62;
      var _0x1c0b4c;
      for (var _0x5c24e2, __h = _0x4d6ef8.__h; _0x4d6ef8 = _0x4d6ef8.__;) {
        if ((_0x261b62 = _0x4d6ef8.__c) && !_0x261b62.__) {
          try {
            if ((_0x1c0b4c = _0x261b62.constructor) && _0x1c0b4c.getDerivedStateFromError != null) {
              _0x261b62.setState(_0x1c0b4c.getDerivedStateFromError(_0x56617d));
              _0x5c24e2 = _0x261b62.__d;
            }
            if (_0x261b62.componentDidCatch != null) {
              _0x261b62.componentDidCatch(_0x56617d);
              _0x5c24e2 = _0x261b62.__d;
            }
            if (_0x5c24e2) {
              _0x4d6ef8.__h = __h;
              return _0x261b62.__E = _0x261b62;
            }
          } catch (_0x1af785) {
            _0x56617d = _0x1af785;
          }
        }
      }
      throw _0x56617d;
    }
  };
  Component.prototype.setState = function (_0xdad593, _0x10f265) {
    var __s;
    __s = this.__s != null && this.__s !== this.state ? this.__s : this.__s = _0x58f7c8({}, this.state);
    if (typeof _0xdad593 == "function") {
      _0xdad593 = _0xdad593(_0x58f7c8({}, __s), this.props);
    }
    if (_0xdad593) {
      _0x58f7c8(__s, _0xdad593);
    }
    if (_0xdad593 != null && this.__v) {
      if (_0x10f265) {
        this.__h.push(_0x10f265);
      }
      _0x457993(this);
    }
  };
  Component.prototype.forceUpdate = function (_0x4c9788) {
    if (this.__v) {
      this.__e = true;
      if (_0x4c9788) {
        this.__h.push(_0x4c9788);
      }
      _0x457993(this);
    }
  };
  Component.prototype.render = Fragment;
  _0x425b06 = [];
  _0x406d2a = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
  _0x154984.__r = 0;
  _0x4c3ef1 = _0x316685;
  _0x43d241 = 0;
  function _0x18fb1c(_0x46fac8, _0x56a002) {
    _0x56a002 = {
      exports: {}
    };
    _0x46fac8(_0x56a002, _0x56a002.exports);
    return _0x56a002.exports;
  }
  var Cookies = _0x18fb1c(function (_0x489395, _0x32ffe2) {
    (function (_0x5ccaa0) {
      var _0x38a1e2;
      {
        _0x489395.exports = _0x5ccaa0();
        _0x38a1e2 = true;
      }
      if (!_0x38a1e2) {
        var Cookies = window.Cookies;
        var result = window.Cookies = _0x5ccaa0();
        result.noConflict = function () {
          window.Cookies = Cookies;
          return result;
        };
      }
    })(function () {
      function _0x576780() {
        var _0x454a2b = 0;
        var result = {};
        for (; _0x454a2b < arguments.length; _0x454a2b++) {
          var _0x231da7 = arguments[_0x454a2b];
          for (var key in _0x231da7) {
            result[key] = _0x231da7[key];
          }
        }
        return result;
      }
      function _0x23ab54(_0x5776fd) {
        return _0x5776fd.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      function _0x2930f6(_0xa8c88) {
        function _0x316d13() {}
        function _0x17e273(_0x5b7742, _0x41d11e, _0x5ddbc3) {
          if (typeof document === "undefined") {
            return;
          }
          _0x5ddbc3 = _0x576780({
            path: "/"
          }, _0x316d13.defaults, _0x5ddbc3);
          if (typeof _0x5ddbc3.expires === "number") {
            _0x5ddbc3.expires = new Date(new Date() * 1 + _0x5ddbc3.expires * 86400000);
          }
          _0x5ddbc3.expires = _0x5ddbc3.expires ? _0x5ddbc3.expires.toUTCString() : "";
          try {
            var _0x3c25e5 = JSON.stringify(_0x41d11e);
            if (/^[\{\[]/.test(_0x3c25e5)) {
              _0x41d11e = _0x3c25e5;
            }
          } catch (_0x556778) {}
          _0x41d11e = _0xa8c88.write ? _0xa8c88.write(_0x41d11e, _0x5b7742) : encodeURIComponent(String(_0x41d11e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
          _0x5b7742 = encodeURIComponent(String(_0x5b7742)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var _0x32de11 = "";
          for (var key in _0x5ddbc3) {
            if (!_0x5ddbc3[key]) {
              continue;
            }
            _0x32de11 += "; " + key;
            if (_0x5ddbc3[key] === true) {
              continue;
            }
            _0x32de11 += "=" + _0x5ddbc3[key].split(";")[0];
          }
          return document.cookie = _0x5b7742 + "=" + _0x41d11e + _0x32de11;
        }
        function _0x25f39d(_0x5eafdb, _0x3b7cc9) {
          if (typeof document === "undefined") {
            return;
          }
          var result = {};
          var _0xa749cd = document.cookie ? document.cookie.split("; ") : [];
          var _0x108d0b = 0;
          for (; _0x108d0b < _0xa749cd.length; _0x108d0b++) {
            var parts = _0xa749cd[_0x108d0b].split("=");
            var _0x482fd7 = parts.slice(1).join("=");
            if (!_0x3b7cc9 && _0x482fd7.charAt(0) === "\"") {
              _0x482fd7 = _0x482fd7.slice(1, -1);
            }
            try {
              var _0x1b7fb2 = _0x23ab54(parts[0]);
              _0x482fd7 = (_0xa8c88.read || _0xa8c88)(_0x482fd7, _0x1b7fb2) || _0x23ab54(_0x482fd7);
              if (_0x3b7cc9) {
                try {
                  _0x482fd7 = JSON.parse(_0x482fd7);
                } catch (_0x1ba30e) {}
              }
              result[_0x1b7fb2] = _0x482fd7;
              if (_0x5eafdb === _0x1b7fb2) {
                break;
              }
            } catch (_0x35f9bb) {}
          }
          if (_0x5eafdb) {
            return result[_0x5eafdb];
          } else {
            return result;
          }
        }
        _0x316d13.set = _0x17e273;
        _0x316d13.get = function (_0x42280a) {
          return _0x25f39d(_0x42280a, false);
        };
        _0x316d13.getJSON = function (_0x280463) {
          return _0x25f39d(_0x280463, true);
        };
        _0x316d13.remove = function (_0x396dda, _0x3baebe) {
          _0x17e273(_0x396dda, "", _0x576780(_0x3baebe, {
            expires: -1
          }));
        };
        _0x316d13.defaults = {};
        _0x316d13.withConverter = _0x2930f6;
        return _0x316d13;
      }
      return _0x2930f6(function () {});
    });
  });
  const EPSILON = Math.pow(2, -26);
  const isZero = distance => Math.abs(distance) <= EPSILON;
  const nearlyEqual = (_0x2bc84b, _0x422639) => Math.abs(_0x2bc84b - _0x422639) <= EPSILON;
  const lerp = (_0x497e73, _0x1215fd, _0xc805ba) => _0x497e73 + (_0x1215fd - _0x497e73) * _0xc805ba;
  const easeOutCubic = _0x570a19 => --_0x570a19 * _0x570a19 * _0x570a19 + 1;
  const clamp = (_0x2cbd0e, _0x349ac0, _0x26617c) => {
    if (_0x26617c < _0x2cbd0e) {
      return _0x2cbd0e;
    }
    if (_0x26617c > _0x349ac0) {
      return _0x349ac0;
    }
    return _0x26617c;
  };
  const cross2d = (_0x485df3, _0x2a85fc, _0x18d0a3, _0x4b57d3) => _0x485df3 * _0x4b57d3 - _0x2a85fc * _0x18d0a3;
  const inRange = (_0x50b329, _0x1b8016, _0x13f44a) => Math.min(_0x50b329, _0x1b8016) - EPSILON <= _0x13f44a && _0x13f44a <= Math.max(_0x50b329, _0x1b8016) + EPSILON;
  const rangeOverlap = (_0x398a2a, _0x88af21, _0x9eb278, _0x369d4a) => {
    if (_0x398a2a > _0x88af21) {
      [_0x398a2a, _0x88af21] = [_0x88af21, _0x398a2a];
    }
    if (_0x9eb278 > _0x369d4a) {
      [_0x9eb278, _0x369d4a] = [_0x369d4a, _0x9eb278];
    }
    return Math.min(_0x88af21, _0x369d4a) - Math.max(_0x398a2a, _0x9eb278);
  };
  function pointInPolygon(_0x29a68f, x, y) {
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
  const nextId = () => _0x5e2101++;
  class Segment {
    constructor(start, end) {
      this.vector = undefined;
      this.a = undefined;
      this.b = undefined;
      this.c = undefined;
      if (start.equal(end)) ;
      this.mark = 0;
      this.shape = null;
      this.start = start;
      this.end = end;
      this.calc();
    }
    get owner() {
      return null;
    }
    calc() {
      const {
        start,
        end
      } = this;
      this.vector = end.clone().sub(start);
      let dy = start.y - end.y;
      let dx = end.x - start.x;
      const dist = Math.sqrt(dy * dy + dx * dx);
      dy /= dist;
      dx /= dist;
      this.a = dy;
      this.b = dx;
      this.c = -(dy * start.x + dx * start.y);
    }
    clone() {
      return new Segment(this.start, this.end);
    }
    reverse() {
      const start = this.start;
      this.start = this.end;
      this.end = start;
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
    }
    length() {
      return this.vector.magnitude();
    }
    zn(_0xc6e8f) {
      const a2 = _0xc6e8f.a;
      const b2 = _0xc6e8f.b;
      const {
        a,
        b
      } = this;
      return cross2d(a2, b2, a, b);
    }
    intersect(segment) {
      const a2 = segment.a;
      const b2 = segment.b;
      const c2 = segment.c;
      const start2 = segment.start;
      const end2 = segment.end;
      const {
        a,
        b,
        c,
        start,
        end
      } = this;
      const distance = cross2d(a2, b2, a, b);
      if (!isZero(distance)) {
        const x = -cross2d(c2, b2, c, b) / distance;
        const y = -cross2d(a2, c2, a, c) / distance;
        const point = inRange(start2.x, end2.x, x) && inRange(start2.y, end2.y, y) && inRange(start.x, end.x, x) && inRange(start.y, end.y, y) && new Vec2(x, y);
        if (!point) {
          return null;
        }
        return {
          point: start.equal(point) && start || end.equal(point) && end || start2.equal(point) && start2 || end2.equal(point) && end2 || point,
          segment: this,
          distance: point.distance2(start2),
          overlay: false,
          zn: Math.sign(distance)
        };
      }
      const _0x4d2c22 = rangeOverlap(start2.x, end2.x, start.x, end.x);
      const _0x599176 = rangeOverlap(start2.y, end2.y, start.y, end.y);
      if (isZero(cross2d(a2, c2, a, c)) && isZero(cross2d(b2, c2, b, c)) && _0x4d2c22 >= -EPSILON && _0x599176 >= -EPSILON) {
        if (_0x4d2c22 >= EPSILON || _0x599176 >= EPSILON) {
          let _0x357b15;
          if (inRange(start.x, end.x, start2.x) && inRange(start.y, end.y, start2.y)) {
            _0x357b15 = start.equal(start2) && start || end.equal(start2) && end || start2;
          } else {
            _0x357b15 = start2.distance2(start) >= start2.distance2(end) ? end : start;
          }
          return {
            point: _0x357b15,
            segment: this,
            distance: _0x357b15.distance2(start2),
            overlay: true,
            zn: 0
          };
        }
        const _0x447570 = start.equal(start2) || start.equal(end2) ? start : end;
        return {
          point: _0x447570,
          segment: this,
          distance: _0x447570.distance2(start2),
          overlay: false,
          zn: 0
        };
      }
      return null;
    }
    has(_0x1924dc) {
      return this.start === _0x1924dc || this.end === _0x1924dc;
    }
  }
  const _0x49b883 = 1;
  class GridCell {
    constructor(x, y) {
      this.points = [];
      this.x = x;
      this.y = y;
    }
    commit(_0x2450aa) {
      this.points.push(_0x2450aa);
      _0x2450aa.cell = this;
    }
    remove(_0x113f3c) {
      const {
        points
      } = this;
      const index = points.indexOf(_0x113f3c);
      if (index !== -1) {
        points.splice(index, 1);
        _0x113f3c.cell = null;
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
      for (let i = 0; i < this.h; i++) {
        for (let j = 0; j < this.w; j++) {
          this.cells.push(new GridCell(j, i));
        }
      }
      Vec2.space = this;
    }
    count() {
      let result = 0;
      this.cells.forEach(cell => {
        result += cell.points.length;
      });
      return result;
    }
    cell(point) {
      return this.getCell(Math.floor(point.x / this.size) % this.w, Math.floor(point.y / this.size) % this.h);
    }
    getCell(j, i) {
      let cell = this.cells[j + i * this.w];
      if (!cell) {
        debugger;
      }
      return cell;
    }
    checkPoint(point) {
      const _0x5e04d1 = this.cell(point);
      return _0x5e04d1.points.find(point2 => point2.equal(point)) || point;
    }
    segmentsCount() {
      const result = {};
      for (let i = 0; i < this.h; i++) {
        for (let j = 0; j < this.w; j++) {
          this.getCell(j, i).points.forEach(point => {
            point.segments.forEach(segment => result[segment.id] = segment);
          });
        }
      }
      return result;
    }
    intersections(segment) {
      const point = this.cell(segment.start);
      const point2 = this.cell(segment.end);
      const _0x25009c = Math.max(0, Math.min(point.x, point2.x) - _0x49b883);
      const _0x3daed4 = Math.min(this.w - 1, Math.max(point.x, point2.x) + _0x49b883);
      const _0x511ed8 = Math.max(0, Math.min(point.y, point2.y) - _0x49b883);
      const _0x149c88 = Math.min(this.h - 1, Math.max(point.y, point2.y) + _0x49b883);
      const _0x4cb258 = nextId();
      const result = [];
      for (let i = _0x511ed8; i <= _0x149c88; i++) {
        for (let j = _0x25009c; j <= _0x3daed4; j++) {
          this.getCell(j, i).points.forEach(point => {
            point.segments.forEach(segment2 => {
              if (segment2.mark !== _0x4cb258) {
                const _0x302e7a = segment2.intersect(segment);
                if (_0x302e7a) {
                  result.push(_0x302e7a);
                }
                segment2.mark = _0x4cb258;
              }
            });
          });
        }
      }
      return result;
    }
    clear() {
      this.cells = [];
    }
  }
  const VEC_POOL_MAX = 30000;
  const vecPool = Array.from({
    length: VEC_POOL_MAX
  });
  let vecPoolSize = 0;
  class Vec2 {
    constructor(x, y) {
      this.x = undefined;
      this.y = undefined;
      this.cell = null;
      this.segments = [];
      this.set(x, y);
    }
    set(_0x24ed4b, y) {
      this.x = _0x24ed4b || 0;
      this.y = y || (y === 0 ? 0 : this.x);
      return this;
    }
    commit(_0x49b35c) {
      if (this.segments.indexOf(_0x49b35c) === -1) {
        this.segments.push(_0x49b35c);
      }
      if (!this.cell) {
        const _0x19525f = Vec2.space.cell(this);
        _0x19525f.commit(this);
      }
    }
    remove(_0x5b5121) {
      const index = this.segments.indexOf(_0x5b5121);
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
    mulScalar(dist3) {
      this.x *= dist3;
      this.y *= dist3;
      return this;
    }
    magnitude() {
      const {
        x,
        y
      } = this;
      return Math.sqrt(x * x + y * y);
    }
    normalize() {
      const len = this.magnitude();
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
      const dx = this.x - point.x;
      const dy = this.y - point.y;
      return dx * dx + dy * dy;
    }
    cross(point) {
      return this.x * point.y - this.y * point.x;
    }
    dot(point) {
      return this.x * point.x + this.y * point.y;
    }
    rotate(rotation) {
      const {
        x,
        y
      } = this;
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);
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
    static alloc(x, y) {
      if (vecPoolSize) {
        let result = vecPool[--vecPoolSize].set(x, y);
        return result;
      }
      return new Vec2(x, y);
    }
    static clone(point) {
      return Vec2.alloc(point.x, point.y);
    }
    static poolLength() {
      return vecPoolSize;
    }
    toString() {
      return "[" + this.x.toFixed(4) + "," + this.y.toFixed(4) + "]";
    }
    static release(_0x1d0d5c) {
      if (vecPoolSize < VEC_POOL_MAX) {
        _0x1d0d5c.set();
        if (_0x1d0d5c.cell || _0x1d0d5c.segments.length) {
          debugger;
        }
        vecPool[vecPoolSize++] = _0x1d0d5c;
      }
    }
  }
  Vec2.space = undefined;
  const CELL_RADIUS = 25;
  const CELL_RADIUS_SQ = CELL_RADIUS * CELL_RADIUS;
  const DEATH_WIN = 0;
  const DEATH_SELF_INTERSECT = 1;
  const DEATH_WALL = 2;
  const DEATH_TRACK_CROSSED = 3;
  const DEATH_EXIT_CAPTURED = 4;
  const DEATH_SURROUNDED = 5;
  const DEATH_REMOVED = 6;
  const DEATH_CAPITAL_SURROUNDED = 7;
  const TICK_MS = 1000 / 60;
  const TICK_MS_X2 = 1000 / 60 * 2;
  class Polyline {
    constructor(_0x3d26c8) {
      this.owner = _0x3d26c8 || null;
      this.start = null;
      this.end = null;
      this.segments = [];
      this.bounds = {
        left: Infinity,
        right: -Infinity,
        top: Infinity,
        bottom: -Infinity
      };
      this.path = new Path2D();
    }
    commit(_0x3f07dd) {
      this.segments.forEach(segment => segment.commit(_0x3f07dd));
    }
    remove() {
      this.segments.forEach(segment => segment.remove());
    }
    reverse() {
      this.segments.reverse().forEach(item => item.reverse());
      if (this.end) {
        [this.start, this.end] = [this.end, this.start];
      }
      return this;
    }
    clone() {
      const polyline = new Polyline();
      polyline.segments = this.segments.map(segment => segment.clone());
      polyline.start = this.start;
      polyline.end = this.end;
      Object.assign(polyline.bounds, this.bounds);
      return polyline;
    }
    updateBounds(_0x1f0631) {
      const {
        x,
        y
      } = _0x1f0631;
      this.bounds.left = Math.min(this.bounds.left, x);
      this.bounds.right = Math.max(this.bounds.right, x);
      this.bounds.top = Math.min(this.bounds.top, y);
      this.bounds.bottom = Math.max(this.bounds.bottom, y);
    }
    add2(end) {
      const _0x2b66d7 = this.end || this.start;
      if (_0x2b66d7 && _0x2b66d7.equal(end)) {
        return false;
      }
      const {
        x,
        y
      } = end;
      if (this.end) {
        this.segments.push(new Segment(this.end, end).commit(this));
        this.end = end;
        this.updateBounds(end);
        this.path.lineTo(x, y);
        return true;
      }
      if (this.start) {
        this.segments.push(new Segment(this.start, end).commit(this));
        this.end = end;
        this.updateBounds(end);
        this.path.lineTo(x, y);
        return true;
      }
      this.start = end;
      this.updateBounds(end);
      this.path.moveTo(x, y);
      return true;
    }
    points() {
      const segments = this.segments.map(segment => segment.start);
      if (this.end) {
        segments.push(this.end);
      }
      return segments;
    }
    toString() {
      return this.segments.map(segment => segment.start.toString()).join("");
    }
  }
  const rayCrossingSign = (point, point2, point3) => {
    const dx = point.x - point3.x;
    const dy = point.y - point3.y;
    const dx2 = point2.x - point3.x;
    const dy2 = point2.y - point3.y;
    if (dy * dy2 > 0) {
      return 1;
    }
    const distance = dx * dy2 - dy * dx2;
    const result = isZero(distance) ? 0 : Math.sign(distance);
    if (result === 0) {
      if (dx * dx2 <= 0) {
        return 0;
      }
      return 1;
    }
    if (dy < 0) {
      return -result;
    }
    if (dy2 < 0) {
      return result;
    }
    return 1;
  };
  class Polygon {
    constructor(points) {
      this.segments = [];
      this.simplify = [];
      this.owner = null;
      this.bounds = null;
      const {
        length
      } = points;
      for (let i = 0; i < length;) {
        this.segments.push(new Segment(points[i++], points[i < length ? i : 0]));
      }
      this.updateBounds();
    }
    commit(owner) {
      if (owner) {
        this.owner = owner;
      }
      this.segments.forEach(segment => segment.commit(this));
    }
    remove() {
      this.segments.forEach(segment => segment.remove());
    }
    reverse() {
      this.segments.reverse();
      this.segments.forEach(segment => segment.reverse());
      return this;
    }
    insert(segment, end) {
      if (!segment.has(end)) {
        const index = this.segments.findIndex(segment2 => segment2 === segment);
        const _0x55e498 = new Segment(segment.start, end).commit(this);
        const _0x121664 = new Segment(end, segment.end).commit(this);
        segment.remove();
        this.segments.splice(index, 1, _0x55e498, _0x121664);
      }
    }
    hasPoint(_0x451bf0) {
      return this.segments.some(segment => segment.has(_0x451bf0));
    }
    findSegment(_0x596d0c) {
      const index = this.segments.findIndex(segment => segment.start === _0x596d0c);
      return index;
    }
    splice(_0x4ff73a, _0x2e9f8f, _0x198893) {
      const removed = this.segments.splice(_0x2e9f8f, _0x198893 - _0x2e9f8f, ..._0x4ff73a.segments);
      removed.forEach(item => item.remove());
      _0x4ff73a.commit(this);
    }
    unsplice(polylineCopy, _0x35431a, _0x11653f) {
      const removed = this.segments.splice(_0x35431a, _0x11653f - _0x35431a);
      this.remove();
      this.segments = removed.concat(polylineCopy.reverse().segments);
      polylineCopy.commit(this);
    }
    left(removed2, _0x2a2bca, _0x48f39f) {
      const _0x18a162 = [];
      for (let i = 0; i < removed2.length - 1; i++) {
        _0x18a162.push(new Segment(removed2[i], removed2[i + 1]));
      }
      const removed = this.segments.splice(_0x2a2bca, _0x48f39f - _0x2a2bca, ..._0x18a162);
      _0x18a162.forEach(item => item.commit(this));
      removed.forEach(item => item.remove());
    }
    right(removed2, _0x4ab91c, _0x458307) {
      const _0x9feb94 = [];
      for (let i = 0; i < removed2.length - 1; i++) {
        _0x9feb94.push(new Segment(removed2[i], removed2[i + 1]));
      }
      const removed = this.segments.splice(_0x4ab91c, _0x458307 - _0x4ab91c);
      this.remove();
      _0x9feb94.reverse().forEach(item => item.reverse().commit(this));
      this.segments = removed.concat(_0x9feb94);
    }
    points() {
      return this.segments.map(segment => segment.start);
    }
    intersections(_0x5d6a44) {
      let result = [];
      if (this.segments.length > 1) {
        this.segments.forEach(segment => {
          const _0x3c561e = segment.intersect(_0x5d6a44);
          if (_0x3c561e) {
            result.push(_0x3c561e);
          }
        });
      }
      if (result.length > 1) {
        result.sort((a, b) => a.distance - b.distance);
        result = result.filter(function (item, index) {
          return result.findIndex(item2 => item2.point === item.point) == index;
        });
      }
      return result;
    }
    inside(point3) {
      const {
        length
      } = this.segments;
      let _0x50b175 = 1;
      for (let i = 0; i < length; i++) {
        const {
          start,
          end
        } = this.segments[i];
        const _0x4985c4 = rayCrossingSign(start, end, point3);
        if (_0x4985c4 === 0) {
          return true;
        }
        _0x50b175 *= _0x4985c4;
      }
      return _0x50b175 !== 1;
    }
    insideNew(point) {
      return !!pointInPolygon(this.segments.map(segment => [segment.start.x, segment.start.y]), point.x, point.y);
    }
    rawSquare() {
      let _0x3e0443 = 0;
      this.segments.forEach(segment => {
        const {
          start,
          end
        } = segment;
        _0x3e0443 += (start.x + end.x) * (end.y - start.y);
      });
      return _0x3e0443 / 2;
    }
    square() {
      let result = this.rawSquare();
      if (result < 0) {
        {
          result *= -1;
        }
      }
      return result;
    }
    calcPath() {
      const path = new Path2D();
      const {
        segments
      } = this;
      const {
        length
      } = segments;
      const {
        start
      } = segments[0];
      path.moveTo(start.x, start.y);
      for (let i = 1; i < length; i++) {
        const {
          start: start
        } = segments[i];
        path.lineTo(start.x, start.y);
      }
      path.closePath();
      this.path = path;
      this.updateBounds();
    }
    calcSimplify() {
      this.simplify = [];
      let _0x3ed40b = 0;
      this.segments.forEach(segment => {
        const {
          start
        } = segment;
        if (_0x3ed40b < 2) {
          this.simplify.push(start);
          _0x3ed40b++;
        } else {
          const point = this.simplify[_0x3ed40b - 2];
          if (start.distance2(point) < CELL_RADIUS_SQ) {
            this.simplify[_0x3ed40b - 1] = start;
          } else {
            this.simplify.push(start);
            _0x3ed40b++;
          }
        }
      });
    }
    updateBounds() {
      this.calcSimplify();
      let min = Infinity;
      let max = -Infinity;
      let min2 = Infinity;
      let max2 = -Infinity;
      this.simplify.forEach(item => {
        const {
          x,
          y
        } = item;
        min = Math.min(min, x);
        max = Math.max(max, x);
        min2 = Math.min(min2, y);
        max2 = Math.max(max2, y);
      });
      min -= CELL_RADIUS;
      max += CELL_RADIUS;
      min2 -= CELL_RADIUS;
      max2 += CELL_RADIUS;
      this.bounds = {
        left: min,
        right: max,
        top: min2,
        bottom: max2
      };
    }
  }
  const clock = typeof performance !== "undefined" ? performance : Date;
  const now = clock.now.bind(clock);
  const circlePoints = (point, baseCount, baseRadius) => {
    if (typeof point.x !== "number") {
      throw Error("circle");
    }
    const _0x25a8fb = Math.PI * 2;
    const _0x2d7adf = _0x25a8fb / baseCount;
    const result = [];
    for (let i = 0; i < _0x25a8fb - EPSILON; i += _0x2d7adf) {
      result.push(new Vec2(point.x + Math.cos(i) * baseRadius, point.y + Math.sin(i) * baseRadius));
    }
    return result;
  };
  const hexToRgb = item => {
    const _0xb42ed3 = parseInt(item.substring(1, 3), 16);
    const _0x4c451e = parseInt(item.substring(3, 5), 16);
    const _0x900965 = parseInt(item.substring(5, 7), 16);
    return {
      r: _0xb42ed3,
      g: _0x4c451e,
      b: _0x900965
    };
  };
  const rgbToHsv = ({
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
  const hsvToHex = _0x8d0fc2 => rgbToHex(hsvToRgb(_0x8d0fc2));
  function createRng(seed) {
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
  function loadImage(url) {
    return new Promise(resolve => {
      let img = document.createElement("img");
      img.src = url;
      img.onload = function () {
        resolve(img);
      };
    });
  }
  function hsvMulValue(_0x25a581, _0x474ff8) {
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
  function hsvLighten(_0xf88f07, _0x5301b4) {
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
  function hsvSetValue(_0x4e37c0, _0x5b933a) {
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
  function fmt2(_0x2134de) {
    return _0x2134de.toFixed(2);
  }
  class Border {
    constructor(polygon, center, radius) {
      if (!(polygon instanceof Polygon)) {
        debugger;
      }
      this.polygon = polygon;
      this.radius = radius;
      this.center = center;
    }
    static circular(point, borderPoints, baseRadius) {
      return new Border(new Polygon(circlePoints(point, borderPoints, baseRadius)), point, baseRadius);
    }
    intersections(segment) {
      {
        if (segment.start.distance2(this.center) < this.radius ** 2 * 0.95 && segment.end.distance2(this.center) < this.radius ** 2 * 0.95) {
          return [];
        }
      }
      return this.polygon.intersections(segment).filter(item => !item.overlay);
    }
  }
  class Base {
    constructor(unit, points) {
      this.unit = undefined;
      this.isTrack = undefined;
      this.unit = unit;
      this.merges = [];
      this.polygon = new Polygon(points);
      this.polygon.commit(this);
      this.calcSquare();
      this.polygon.calcPath();
    }
    calcPath() {
      this.path = new Path2D();
      const {
        segments
      } = this.polygon;
      const {
        length
      } = segments;
      const {
        start
      } = segments[0];
      this.path.moveTo(start.x, start.y);
      for (let i = 1; i < length; i++) {
        const {
          start: start
        } = segments[i];
        this.path.lineTo(start.x, start.y);
      }
      this.path.closePath();
      return this.path;
    }
    calcSquare() {
      this.square = this.polygon.square();
    }
    remove() {
      this.polygon.remove();
    }
    handleIntersect(_0x17a22b, _0x7347fa, segment) {
      if (_0x7347fa === this.unit) {
        this.handleSelfIntersect(_0x17a22b, _0x7347fa, segment);
      } else {
        this.handleEnemyIntersect(_0x17a22b, _0x7347fa, segment);
      }
    }
    handleSelfIntersect(_0x445601, _0x56072c, segment) {
      if (_0x445601.overlay) {
        return;
      }
      this.unit.onScoreChanged();
      const {
        point: point,
        segment: segment2
      } = _0x445601;
      if (_0x56072c.in === this) {
        if (_0x445601.zn < 0) {
          return;
        }
        if (point.equal(segment.end)) {
          return;
        }
        this.polygon.insert(segment2, point);
        _0x56072c.track.add(point);
        _0x56072c.in = null;
        if (_0x56072c.schemes) {
          _0x56072c.schemes.out();
        }
        if (_0x56072c.achievements) {
          _0x56072c.achievements.onOut();
        }
      } else {
        if (_0x445601.zn > 0) {
          return;
        }
        if (point.equal(segment.start)) {
          return;
        }
        if (_0x56072c.in) {
          return;
        }
        this.polygon.insert(segment2, point);
        _0x56072c.track.add(point);
        if (_0x56072c.track.polyline.end) {
          this.unit.game.handleReturn(_0x56072c);
        }
        _0x56072c.in = this;
        _0x56072c.track.remove();
      }
    }
    handleEnemyIntersect(_0x1cb2ac, _0x25139d, segment2) {
      const {
        point: point,
        segment: segment
      } = _0x1cb2ac;
      if (_0x25139d.in === this) {
        if (_0x1cb2ac.zn < 0) {
          return;
        }
        this.polygon.insert(segment, point);
        _0x25139d.track.add(point);
        _0x25139d.track.intersect(_0x1cb2ac, this, false);
        _0x25139d.in = null;
      } else {
        if (_0x1cb2ac.zn > 0) {
          return;
        }
        if (_0x1cb2ac.overlay) {
          return;
        }
        if (point.equal(segment2.end)) {
          return;
        }
        if (_0x25139d.in) {
          return;
        }
        this.polygon.insert(segment, point);
        _0x25139d.track.add(point);
        _0x25139d.track.intersect(_0x1cb2ac, this, true);
        _0x25139d.in = this;
      }
    }
  }
  class Track {
    constructor(unit) {
      this.polyline = new Polyline(this);
      this.simplyline = [];
      this.unit = unit;
      this.length = 0;
      this.intersections = [];
      this.isTrack = true;
    }
    add(end) {
      if (this.polyline.add2(end)) {
        const count = this.polyline.segments.length;
        if (count > 0) {
          const segment = this.polyline.segments[count - 1];
          this.length += segment.start.distance(segment.end);
        }
        const {
          simplyline
        } = this;
        const {
          length
        } = simplyline;
        if (length > 2) {
          const point = simplyline[length - 2];
          if (end.distance2(point) < CELL_RADIUS_SQ) {
            simplyline[length - 1] = end;
          } else {
            simplyline.push(end);
          }
        } else {
          simplyline.push(end);
        }
      }
    }
    intersect(_0x19b8cd, _0x3142da, _0x463f2a) {
      const intersection = this.intersections.find(intersection => intersection.point.equal(_0x19b8cd.point));
      if (intersection) {
        intersection.intersections.push({
          intersection: _0x19b8cd,
          base: _0x3142da,
          enter: _0x463f2a
        });
      } else {
        this.intersections.push({
          point: _0x19b8cd.point,
          intersections: [{
            intersection: _0x19b8cd,
            base: _0x3142da,
            enter: _0x463f2a
          }]
        });
      }
    }
    remove() {
      this.polyline.remove();
      this.polyline = new Polyline(this);
      this.length = 0;
      this.simplyline = [];
      this.intersections = [];
    }
    handleIntersect(_0x1d2561, unit, _0x413bce) {
      let game = unit.game;
      if (unit === this.unit) {
        if (_0x1d2561.overlay === true || _0x1d2561.point !== this.polyline.segments[this.polyline.segments.length - 1].end) {
          this.unit.position = _0x1d2561.point;
          const _0x75cb21 = game.border.radius - unit.position.distance(game.space.center) < 5 ? DEATH_WALL : DEATH_SELF_INTERSECT;
          game.kill(this.unit, undefined, _0x75cb21);
        }
      } else {
        game.kill(this.unit, unit, DEATH_TRACK_CROSSED);
      }
    }
  }
  class StateMachine {
    constructor(states, state, payload) {
      this.states = states;
      this.state = "";
      this.payload = payload;
      this.context = {};
      this.change(state);
    }
    change(state) {
      const state2 = this.states[this.state];
      if (state2 && state2.leave) {
        this.context = state2.leave(this.payload, this.context) || this.context;
      }
      const state3 = this.states[state];
      if (state3) {
        this.state = state;
        this.context = state3.enter && state3.enter(this.payload, this.context) || this.context;
        this.update();
      }
    }
    update() {
      const state = this.states[this.state];
      const state2 = state && state.update(this.payload, this.context);
      if (state2) {
        this.change(state2);
      }
    }
  }
  const botNearPlayerTrack = unit => {
    const {
      player
    } = unit.game;
    if (player) {
      const _0x4ac939 = Math.max(unit.vrange, player.vrange);
      const _0x4c70de = _0x4ac939 * unit.aggro * 0.75;
      const {
        simplyline
      } = player.track;
      for (let i = 0, count = simplyline.length; i < count; i++) {
        if (unit.position.distance2(simplyline[i]) < _0x4c70de * _0x4c70de) {
          return true;
        }
      }
    }
  };
  const botFeelsThreatened = (bot, _0x44a2f5) => {
    if (bot.in === bot.base) {
      return false;
    }
    return bot.maxDanger > bot.def * 0.8;
  };
  var BOT_STATES = {
    idle: {
      enter: function () {
        return {};
      },
      update: function (bot, ctx) {
        if (bot.in === bot.base) {
          if (bot.game.rng() < 0.25) {
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
      update: function (bot, ctx) {
        if (bot.in !== bot.base) {
          return "capture";
        }
        const dist = bot.position.distance(bot.game.space.center);
        const _0x13ff07 = bot.game.border.radius - dist;
        bot.target = ctx.point;
      }
    },
    cut: {
      enter: function (bot) {
        const delta = bot.position.clone().sub(bot.game.space.center);
        const len = delta.magnitude();
        const segment = new Segment(bot.position, delta.normalize().mulScalar(bot.game.border.radius + 10).add(bot.game.space.center));
        const intersections = bot.base.polygon.intersections(segment);
        const result = {};
        if (!intersections.length) {
          console.log("bot.position", bot.position.x, bot.position.y);
          console.log("intersections", intersections);
        }
        intersections.sort((a, b) => a.distance - b.distance);
        result.exitPoint = intersections[0] && intersections[0].point;
        return result;
      },
      update: function (bot, ctx) {
        if (bot.in !== bot.base) {
          return "capture";
        }
        const dist = bot.position.distance(bot.game.space.center);
        const _0x4daa27 = bot.game.border.radius - dist;
        if (!ctx.exitPoint || _0x4daa27 < 1) {
          return "idle";
        }
        bot.target = ctx.exitPoint;
      }
    },
    exit: {
      enter: function (bot) {
        const result = {};
        let min = Infinity;
        let _0x16aea8;
        const {
          length
        } = bot.base.polygon.segments;
        let unitSpeed = bot.game.config.unitSpeed;
        result.minDistance = unitSpeed;
        while (_0x16aea8 === undefined) {
          for (let i = 0; i < 1; i++) {
            const _0x6b2a20 = ~~(bot.game.rng() * length);
            const start = bot.base.polygon.segments[_0x6b2a20].start;
            const dist = start.distance(bot.position);
            if (dist < min && dist > unitSpeed) {
              min = dist;
              _0x16aea8 = _0x6b2a20;
            }
          }
          unitSpeed *= 0.75;
        }
        result.exitPoint = bot.base.polygon.segments[_0x16aea8].start;
        return result;
      },
      update: function (bot, ctx) {
        if (bot.in !== bot.base) {
          ctx = {};
          return "capture";
        }
        if (botNearPlayerTrack(bot)) {
          return "attack";
        }
        const {
          length
        } = bot.base.polygon.segments;
        const {
          minDistance
        } = ctx;
        const _0x51571e = ~~(bot.game.rng() * length);
        const start = bot.base.polygon.segments[_0x51571e].start;
        const dist = start.distance(bot.position);
        let dist2 = ctx.exitPoint.distance(bot.position);
        if (dist > minDistance && dist < dist2) {
          ctx.exitPoint = start;
        } else {
          if (!Object.values(ctx.exitPoint.segments).some(item => item && item.shape === bot.base.polygon)) {
            ctx.exitPoint = start;
          }
          if (bot.target && bot.target.distance(bot.game.space.center) > bot.game.border.radius - 1) {
            ctx.exitPoint = start;
          }
        }
        bot.target = ctx.exitPoint;
      }
    },
    capture: {
      update: function (bot, ctx) {
        if (bot.in === bot.base) {
          return "idle";
        }
        if (botNearPlayerTrack(bot)) {
          return "attack";
        }
        const {
          unitSpeed
        } = bot.game.config;
        const {
          center
        } = bot.game.space;
        const {
          radius
        } = bot.game.border;
        const dist = bot.position.distance(center);
        const _0x4dd06d = radius - dist;
        if (bot.baseDistance < unitSpeed / 4 && bot.track.length > unitSpeed * 2 && _0x4dd06d > 10) {
          return "back";
        }
        const dist32 = 25;
        const _0x3e1504 = dist32 / 2;
        const _0x3cd5f8 = _0x3e1504 * _0x3e1504;
        if (bot.position.distance2(bot.target) < _0x3cd5f8 && _0x4dd06d > dist32) {
          return;
        }
        let _0x35b163 = 0;
        for (let i = 1, count = bot.track.simplyline.length; i < count; i++) {
          const point = bot.track.simplyline[i - 1];
          const point2 = bot.track.simplyline[i];
          _0x35b163 += (point.x + point2.x) * (point2.y - point.y);
        }
        let point = bot.track.simplyline[bot.track.simplyline.length - 1];
        let baseNearestPoint = bot.baseNearestPoint;
        _0x35b163 += (point.x + baseNearestPoint.x) * (baseNearestPoint.y - point.y);
        point = bot.baseNearestPoint;
        baseNearestPoint = bot.track.simplyline[0];
        _0x35b163 += (point.x + baseNearestPoint.x) * (baseNearestPoint.y - point.y);
        const sign = Math.sign(_0x35b163);
        _0x35b163 = Math.abs(_0x35b163 / 2);
        bot.capSquare = _0x35b163;
        const {
          def,
          greed,
          safety
        } = bot;
        const _0x212344 = Math.PI * 2 * bot.vrange * greed;
        const _0x422057 = bot.track.length / _0x212344;
        const _0x3d5796 = Math.min(bot.base.square, Math.PI * bot.vrange * bot.vrange) * greed;
        const _0x34bce9 = bot.capSquare / _0x3d5796;
        const _0x4b3e7c = bot.vrange * lerp(3, 0.7, safety);
        const _0x58b3d5 = bot.position.distance(bot.track.polyline.start) / _0x4b3e7c;
        const _0x557094 = bot.unitToTrackDistances.reduce((acc, unitToTrackDistance) => Math.min(unitToTrackDistance.trackDistance, acc), Infinity) * 0.8 * def;
        const _0x33222d = bot.baseDistance / _0x557094;
        const _0x30c878 = Math.max(_0x422057, _0x34bce9, _0x58b3d5, _0x33222d);
        if (_0x30c878 > 1) {
          return "back";
        }
        const _0x5318d4 = bot.vrange * greed;
        const _0x3cc1e4 = bot.distanceDanger * 0.6 * def;
        const _0x3447ec = _0x5318d4;
        const _0x1c2e20 = _0x3447ec * 0.8;
        const delta = bot.target.clone().sub(bot.position);
        let point2;
        if (bot.baseDistance > _0x3447ec || _0x30c878 > 0.75) {
          bot.aspect = "приближение";
          point2 = bot.baseNearestPointNormal.clone().mulScalar(dist32).rotate((Math.PI / 2 + Math.PI / 4) * sign);
        } else if (bot.baseDistance < _0x1c2e20) {
          bot.aspect = "отдаление";
          let _0x3d0139 = Math.PI / 4;
          const _0xcd291b = bot.track.length / _0x1c2e20;
          if (_0xcd291b < 1) {
            bot.aspect = "отстрел";
            _0x3d0139 = lerp(Math.PI / 2 * greed, 0, _0xcd291b);
          }
          point2 = bot.baseNearestPointNormal.clone().mulScalar(dist32).rotate((Math.PI / 2 - _0x3d0139) * sign);
        } else {
          bot.aspect = "проход";
          point2 = bot.baseNearestPointNormal.clone().mulScalar(dist32).rotate(Math.PI / 2 * sign);
          bot.smoothness = 1 + (1 - Math.min(1, bot.maxDanger)) * 3;
        }
        bot.smoothness = 1 + (1 - Math.min(1, bot.maxDanger)) * 1;
        if (_0x4dd06d < dist32 * 2 && _0x4dd06d > dist32 / 4 && _0x4dd06d < bot.position.clone().add(point2).distance(center)) {
          const delta2 = bot.position.clone().sub(center);
          const angle = delta2.angle(delta);
          const sign = Math.sign(angle);
          let angle2 = delta2.angle(point2);
          let sign2 = Math.sign(angle2);
          if (sign !== sign2) {
            angle2 *= -1;
            sign2 *= -1;
            point2.rotate(angle2 * 2);
          }
          const _0x26e63b = Math.abs(angle2);
          if (_0x26e63b < Math.PI / 4) {
            point2.rotate((Math.PI / 4 - _0x26e63b) * sign2);
          }
        }
        bot.target = bot.position.clone().add(point2);
        if (bot.target.distance(center) > radius + dist32 * 0.75) {
          const delta2 = bot.position.clone().sub(center);
          const angle = delta2.angle(delta);
          const dist2 = dist;
          const dist33 = (radius * radius - dist32 * dist32 + dist2 * dist2) / (dist2 * 2);
          const dist3 = Math.sqrt(radius * radius - dist33 * dist33);
          const dir = bot.position.clone().sub(center).normalize();
          const _0x58fa5c = center.clone().add(dir.clone().mulScalar(dist33));
          point2 = dir.clone().rotate(Math.PI / 2 * angle).rotate(Math.PI / 8 * -angle).mulScalar(dist3);
          bot.target = _0x58fa5c.clone().add(point2);
        } else if (bot.target.distance(center) > radius && bot.target.distance(center) < radius + dist32 * 0.5) ;
      }
    },
    back: {
      enter: function (bot, ctx) {},
      update: function (bot, ctx) {
        if (bot.in === bot.base) {
          return "idle";
        }
        bot.smoothness = lerp(1, Math.max(1, Math.max(1, Math.min(bot.def, bot.greed) * 4)), Math.max(1, bot.maxDanger));
        const _0x396076 = bot.game.border.radius - bot.position.distance(bot.game.space.center);
        if (_0x396076 < 20) {
          bot.smoothness = 1;
        }
        bot.target = bot.baseNearestPoint;
      }
    },
    attack: {
      enter: () => ({}),
      update: function (bot, ctx) {
        const {
          player
        } = bot.game;
        if (!player || player.death) {
          return "idle";
        }
        const {
          simplyline
        } = player.track;
        if (!simplyline.length) {
          return "idle";
        }
        if (player.track.length < bot.game.config.botAttackTrackLength && botFeelsThreatened(bot)) {
          return "idle";
        }
        let _0x2f1e36 = 0;
        let min = Infinity;
        simplyline.forEach((point, index) => {
          const distSq = bot.position.distance2(point);
          if (distSq < min) {
            min = distSq;
            _0x2f1e36 = index;
          }
        });
        bot.target = simplyline[_0x2f1e36];
      }
    }
  };
  const _0x1d96bc = () => {
    const path = new Path2D();
    const _0x522de8 = 1;
    path.moveTo(-_0x522de8, -_0x522de8);
    path.lineTo(_0x522de8, -_0x522de8);
    path.lineTo(_0x522de8, _0x522de8);
    path.lineTo(-_0x522de8, _0x522de8);
    path.closePath();
    return path;
  };
  const _0x158cbc = _0x1d96bc();
  class Particle {
    constructor(target, color, position, velocity, acceleration, rotate, scale, vscale, time, fn) {
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
    }
    update(dt) {
      const _0xc9a712 = dt / 1000;
      this.time -= dt;
      if (this.time <= 0) {
        if (this.fn) {
          this.fn(this);
        }
        return;
      }
      this.position.x += this.velocity.x * _0xc9a712;
      this.position.y += this.velocity.y * _0xc9a712;
      if (this.acceleration) {
        this.velocity.x += this.acceleration.x * _0xc9a712;
        this.velocity.y += this.acceleration.y * _0xc9a712;
      }
      this.rotation += this.rotate * _0xc9a712;
      this.scale += this.vscale * _0xc9a712;
    }
    draw(ctx) {
      const {
        x,
        y
      } = this.position;
      const {
        rotation,
        color,
        scale
      } = this;
      let transform = ctx.getTransform();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.scale(scale, scale);
      if (typeof color === "string") {
        if (ctx.fillStyle !== color) {
          ctx.fillStyle = color;
        }
        ctx.fill(_0x158cbc);
      } else {
        ctx.scale(1 / 20, 1 / 20);
        ctx.drawImage(color, -color.width / 2, -color.height / 2);
      }
      ctx.setTransform(transform);
    }
    static nom(item, segment, trackWidth) {
      const sign = Math.sign(Math.random() - 0.5);
      const _0x44b37d = item.skin.container.maxScale * trackWidth;
      const {
        unitSpeed,
        baseHeight
      } = item.game.config;
      const velocity = segment.vector.clone().normalize().rotate(sign * Math.random() * (Math.PI / 30)).mulScalar(unitSpeed * (1 + Math.random()));
      const _0x4054ee = segment.vector.clone().rotate(Math.PI / 2).normalize().mulScalar(sign * Math.random() * _0x44b37d / 2);
      const _0x32752a = segment.vector.clone().normalize().mulScalar(_0x44b37d / 2);
      const acceleration = segment.vector.clone().normalize().mulScalar(unitSpeed * -6).rotate(sign * Math.random() * (Math.PI / 10));
      const {
        particles
      } = item.in.unit.skin.colors;
      const scale = 0.75 + Math.random() * 0.5;
      const particle = new Particle(null, particles[~~(Math.random() * particles.length)], segment.start.clone().add(_0x4054ee).add(_0x32752a).add(new Vec2(0, -baseHeight)), velocity, acceleration, Math.PI + Math.random() * Math.PI, scale, scale * -2, 300);
      return particle;
    }
  }
  function spawnDeathParticles(unit, _0x46b899, segments, _0x5cc3d8) {
    let game = unit.game;
    if (game.visible) {
      const _0x48cafa = unit.schemes.scores();
      let _0x66ee8c = 0;
      let _0x20affe = 0;
      let _0x3abe5c = 0;
      segments.forEach(segment => {
        _0x20affe += segment.vector.magnitude();
        if (_0x20affe > 5) {
          _0x20affe = 0;
          const velocity = segment.vector.clone().normalize().rotate(Math.sign(Math.random() - 0.5) * Math.PI / 2).mulScalar(25 + Math.random() * 100);
          if (Math.random() > 0.25) {
            velocity.mulScalar(0.1);
          }
          const scale = (_0x5cc3d8 ? 3 : 1) * (1 + Math.random() * 0.5);
          const time = 500 + Math.random() * 500;
          const vscale = -scale * 0.7 * (1000 / time);
          const particle = new Particle(null, unit.skin.colors.particles[~~(Math.random() * unit.skin.colors.particles.length)], segment.start.clone(), velocity, null, Math.PI * 2 * (1 + Math.random()) * Math.sign(Math.random() - 0.5 || 1), scale, vscale, time, _0x553fdc => {
            if (_0x46b899) {
              _0x553fdc.target = _0x46b899;
              _0x553fdc.time = 1;
              _0x553fdc.velocity = _0x553fdc.velocity.magnitude();
              _0x553fdc.acceleration = (1.5 + Math.random() * 0.5) * game.config.unitSpeed;
              _0x553fdc.fn = () => {
                if (_0x5cc3d8) {
                  _0x46b899.schemes.getScheme().accumulator += _0x3abe5c;
                }
              };
              _0x553fdc.vscale = 0;
              _0x553fdc.scale = 1;
            }
          });
          game.particles.push(particle);
          _0x66ee8c++;
        }
      });
      _0x3abe5c = _0x48cafa / _0x66ee8c;
    }
  }
  class SchemesManager {
    constructor(...Schemes) {
      this.Schemes = Schemes;
      this.current = 0;
    }
    getSchemes(_0x5e6c0a) {
      return new SchemeSet(this.Schemes.map(Scheme => new Scheme(_0x5e6c0a)), this);
    }
    next() {
      this.current++;
      if (this.current === this.Schemes.length) {
        this.current = 0;
      }
    }
  }
  class SchemeSet {
    constructor(schemes, manager) {
      this.schemes = schemes;
      this.manager = manager;
    }
    getScheme(_0x3f5f0b) {
      if (_0x3f5f0b) {
        return this.schemes.find(scheme => scheme.name === _0x3f5f0b);
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
    print(_0x47c229) {
      return this.schemes[this.manager.current].print(_0x47c229);
    }
    update(_0x45b435) {
      this.schemes.forEach((scheme, index) => scheme.update(_0x45b435, this.manager.current !== index));
    }
    kill(_0x58b7ea, _0x1f3790) {
      this.schemes.forEach((scheme, index) => scheme.kill(_0x58b7ea, _0x1f3790, this.manager.current !== index));
    }
    out() {
      this.schemes.forEach((scheme, index) => scheme.out(this.manager.current !== index));
    }
    comeback(_0x27c4b2) {
      this.schemes.forEach((scheme, index) => scheme.comeback(_0x27c4b2, this.manager.current !== index));
    }
  }
  class ScoreScheme {
    constructor(unit, name) {
      this.unit = unit;
      this.name = name;
    }
    getScheme() {
      return this;
    }
    scores() {
      return 0;
    }
    print(_0x291604) {
      return fmt2(this.scores());
    }
    result() {
      return this.scores();
    }
    kill() {}
    update() {}
    out() {}
    comeback() {}
  }
  class ClassicScoreScheme extends ScoreScheme {
    constructor(_0x5d8d87) {
      super(_0x5d8d87, "percent");
    }
    scores() {
      return this.unit.percent * 100;
    }
    result() {
      return +this.scores().toFixed(2);
    }
    print(_0x594090) {
      const _0xf310e2 = _0x594090 || this.scores();
      return fmt2(_0xf310e2) + "%";
    }
    kill(_0x30a62e, _0x1242ed, _0x13f27c) {
      if (!_0x13f27c && this.unit.isPlayer) {
        this.unit.addLabel({
          text: this.unit.game.language.killText,
          color: _0x30a62e.skin.colors.main,
          unit: this.unit,
          time: 1000,
          fading: true
        });
      }
    }
    comeback({
      increment,
      rise,
      victims,
      game
    }, _0x29e8a4) {
      if (!_0x29e8a4 && increment * 100 >= 0.01 && this.unit.isPlayer) {
        this.unit.addLabel({
          text: "+" + (increment * 100).toFixed(2) + "%",
          color: this.unit.skin.colors.nick,
          unit: this.unit,
          time: 1000,
          fading: true
        });
      }
    }
  }
  class Tip {
    constructor(title, description, url) {
      this.title = title;
      this.description = description;
      this.state = 0;
      this.current = 0;
      this.states = [500, 3000, 500, 250];
      this.image = null;
      if (url) {
        this.ready = false;
        const image = new Image();
        image.onload = () => {
          this.ready = true;
          this.image = image;
        };
        image.onerror = () => {
          this.ready = true;
        };
        image.src = url;
      } else {
        this.ready = true;
      }
    }
    update(_0x4344b8) {
      this.current += _0x4344b8;
      if (this.current > this.states[this.state]) {
        this.state++;
        this.current = 0;
      }
    }
    position() {
      switch (this.state) {
        case 0:
          return easeOutCubic(this.current / this.states[0]);
        case 1:
          return 1;
        case 2:
          return 1 - easeOutCubic(this.current / this.states[2]);
        default:
          return 0;
      }
    }
  }
  class Achievement {
    constructor(name, modes, getChecker, description, url, onEarned) {
      this.name = name;
      this.modes = modes;
      this.getChecker = getChecker;
      this.description = description;
      this.url = url;
      this.onEarned = onEarned;
      this.best = 0;
      this.earned = false;
      this.checker = null;
    }
    success(_0x282f99) {
      this.earned = true;
      if (window.ga) {
        window.ga("send", "event", "skins_unlock", this.name);
      }
      this.checker = null;
      if (this.onEarned) {
        this.onEarned(_0x282f99, this);
      }
      _0x282f99.notifications.push(new Tip("New skin unlocked!", this.description, this.url));
    }
  }
  class AchievementStore {
    constructor(_0x192743, storageName = "paper.io.storage") {
      this.storageName = storageName;
      this.achievements = _0x192743.map(item => new Achievement(item.name, item.modes, item.getChecker, item.description, item.url, item.onEarned));
    }
    load() {
      const _0x5ed92b = Cookies.getJSON("paperio_challenges") || {};
      const _0xea5cb3 = (_0x327d6e, _0x59e923) => {
        if (_0x5ed92b[_0x327d6e]) {
          const achievement = this.achievements.find(achievement => achievement.name === _0x59e923);
          if (achievement) {
            achievement.earned = true;
          }
        }
      };
      _0xea5cb3("c13", "reaper");
      _0xea5cb3("c22", "capAmerica");
      _0xea5cb3("c22", "thanos");
      _0xea5cb3("geraldquest1", "geralt");
      const _0x3b1c17 = Cookies.getJSON(this.storageName) || {};
      if (_0x3b1c17.achievements) {
        _0x3b1c17.achievements.forEach(achievement => {
          const achievement2 = this.achievements.find(achievement2 => achievement2.name === achievement.name);
          if (achievement2) {
            achievement2.best = achievement.best || 0;
            achievement2.earned = achievement.earned || false;
          }
        });
      }
    }
    save() {
      const achievements = this.achievements.map(achievement => ({
        name: achievement.name,
        best: achievement.best,
        earned: achievement.earned
      }));
      const y = Cookies.getJSON(this.storageName) || {};
      y.achievements = achievements;
      const _0x4abe97 = {
        expires: 365
      };
      Cookies.set(this.storageName, y, _0x4abe97);
      const y2 = Cookies.getJSON("paperio_challenges") || {};
      const _0x24c73d = (_0x146a69, _0x3ef66a) => {
        const achievement = this.achievements.find(achievement => achievement.name === _0x3ef66a);
        if (achievement && achievement.earned) {
          y2[_0x146a69] = true;
        }
      };
      _0x24c73d("c13", "reaper");
      _0x24c73d("c22", "capAmerica");
      _0x24c73d("c22", "thanos");
      _0x24c73d("geraldquest1", "geralt");
      _0x24c73d("sanitizerquest", "sanitizer");
      _0x24c73d("doctorquest", "doctor");
      _0x24c73d("covidquest", "covid");
      Cookies.set("paperio_challenges", y2, _0x4abe97);
      window.paperio_challenges = y2;
      if (window.shop) {
        window.shop.autoCheckUnlock();
      } else {
        console.log("window.shop unavaliable");
      }
    }
  }
  class AchievementsProfile {
    constructor(profile, _0x4a9dcc) {
      this.profile = profile;
      if (!this.profile) {
        return;
      }
      this.achievements = profile.achievements.filter(achievement => {
        const result = !achievement.earned && achievement.modes.some(mode => mode === _0x4a9dcc);
        if (result) {
          achievement.checker = achievement.getChecker();
        }
        return result;
      });
    }
    update(_0x3caeb5, _0x2f04e5, _0x4592e0) {
      this.achievements = this.achievements.filter(achievement => {
        achievement.checker.update(_0x3caeb5, _0x2f04e5, _0x4592e0);
        if (achievement.checker.progress > achievement.best) {
          achievement.best = achievement.checker.progress;
        }
        if (achievement.checker.check(_0x3caeb5, _0x2f04e5, _0x4592e0)) {
          achievement.success(_0x4592e0);
          this.profile.save();
          return false;
        }
        return true;
      });
    }
    finish() {
      this.achievements = [];
      this.profile.save();
    }
    onKill(unit) {
      this.achievements.forEach(achievement => {
        achievement.checker.onKill(unit);
      });
    }
    onOut() {
      this.achievements.forEach(achievement => {
        achievement.checker.onOut();
      });
    }
  }
  class City {
    constructor(name, capital, position, unit) {
      this.name = name;
      this.capital = capital;
      this.position = position;
      this.unit = unit;
      this.labels = [];
      this.country = unit && unit.skin.assets.find(asset => asset.pool.name === "flags").name;
      this.scores = 0;
      this.skin = null;
    }
    add(_0x132d06) {
      const name = this.unit.skin.assets.find(asset => asset.pool.name === "flags").name;
      let result = 0;
      if (name === this.country) {
        result = _0x132d06 * (this.capital ? 1 : 0.5);
      } else {
        result = _0x132d06 * 0.1;
      }
      this.scores += result;
      return result;
    }
  }
  class Unit {
    constructor(game, name, position, basePoints, unusedArg, schemesManager) {
      this.killer = undefined;
      this.achievements = undefined;
      this.skin = undefined;
      this.death = undefined;
      this.jitter = undefined;
      this.smoothness = undefined;
      this.type = undefined;
      this.fsm = undefined;
      this.game = game;
      this.name = name;
      this.position = position;
      this.base = new Base(this, basePoints);
      this.track = new Track(this);
      this.lastSquare = this.base.square;
      this.in = this.base;
      this.target = null;
      this.respawn = false;
      this.statistics = {
        kills: 0
      };
      this.log = [];
      this.bornTime = now();
      this.cities = [];
      this.labels = [];
      this.percent = 0;
      this.bestPercent = 0;
      this.scale = 0;
      this.vrange = 1;
      this.direction = 0;
      this.top = 0;
      this.scores = {
        accumulator: 0,
        kills: 0
      };
      this.schemes = schemesManager && schemesManager.getSchemes(this);
      this.baseDistance = 0;
      this.baseNearestPoint = null;
      this.baseNearestPointTangent = null;
      this.baseNearestPointNormal = null;
    }
    get isPlayer() {
      return false;
    }
    setSkin(skin) {
      this.skin = skin;
      skin.user = this;
    }
    onScoreChanged() {
      if (this.game.units.indexOf(this) <= 5 || this.isPlayer) {
        this.game.topListChanged = true;
      }
    }
    update(dt) {
      this.log.push(this.position);
      if (this.in !== this.base) {
        this.scores.accumulator += this.percent * 100 * dt / 1000;
      }
      let _0x1175a6 = 0;
      let _0x580a5a = null;
      let _0x2dff70 = null;
      if (this.in !== this.base) {
        _0x1175a6 = Infinity;
        let _0x18290a = 0;
        const {
          simplify
        } = this.base.polygon;
        simplify.forEach((item, index) => {
          const distSq = item.distance2(this.position);
          if (distSq < _0x1175a6) {
            _0x1175a6 = distSq;
            _0x580a5a = item;
            _0x18290a = index;
          }
        });
        const point = simplify[_0x18290a > 0 ? _0x18290a - 1 : simplify.length - 1];
        const _0x54faf7 = simplify[_0x18290a < simplify.length - 1 ? _0x18290a + 1 : 0];
        _0x2dff70 = _0x54faf7.clone().sub(point).normalize();
      }
      _0x1175a6 = Math.sqrt(_0x1175a6);
      this.baseDistance = _0x1175a6;
      this.baseNearestPoint = _0x580a5a;
      this.baseNearestPointTangent = _0x2dff70;
      this.baseNearestPointNormal = _0x2dff70 && _0x2dff70.clone().rotate(-Math.PI / 2);
    }
    movement() {
      return this.target && this.target.clone().sub(this.position).normalize();
    }
    addLabel(_0x265f51) {
      if (!_0x265f51.unit) {
        _0x265f51.unit = this;
      }
      this.labels.push(_0x265f51);
    }
  }
  class Player extends Unit {
    get isPlayer() {
      return true;
    }
    constructor(game, name, position, basePoints, unusedArg, schemesManager) {
      super(game, name, position, basePoints, unusedArg, schemesManager);
      this.win = false;
    }
    update(_0x46f3c4) {
      super.update(_0x46f3c4);
      if (!this.respawn) {
        this.target = new Vec2(1, 0).rotate(this.game.angle * Math.PI / 127).mulScalar(50).add(this.position);
      }
    }
  }
  class Bot extends Unit {
    constructor(game, type, name, position, basePoints, unusedArg, schemesManager) {
      super(game, name, position, basePoints, unusedArg, schemesManager);
      this.aggro = 0;
      this.greed = 0;
      this.safety = 0;
      this.def = 0;
      this.type = type;
      this.jitter = (this.game.rng() * 2 - 1) * 0.1;
      this.targets = [];
      this.smoothness = 1;
      this.maxDanger = 0;
      this.unitDanger = null;
      this.fsm = new StateMachine(BOT_STATES, "idle", this);
    }
    update(_0x227a04) {
      super.update(_0x227a04);
      this.unitToTrackDistances = [];
      let _0x1349bf = 0;
      let _0x21ee3d = 0;
      let _0x22e30a = null;
      if (this.in !== this.base) {
        const {
          player
        } = this.game;
        this.game.units.forEach(unit => {
          const _0x5cc7c2 = player === unit && this.position.distance(unit.position) > this.vrange;
          if (unit !== this && !_0x5cc7c2) {
            let min = Infinity;
            let _0x48ff76 = null;
            this.track.simplyline.forEach(point => {
              const distSq = point.distance2(unit.position);
              if (distSq < min) {
                min = distSq;
                _0x48ff76 = point;
              }
            });
            min = Math.sqrt(min);
            const _0x552a35 = this.baseDistance / min;
            this.unitToTrackDistances.push({
              unit: unit,
              trackDistance: min,
              trackPoint: _0x48ff76,
              danger: _0x552a35
            });
            if (_0x552a35 > _0x1349bf) {
              _0x22e30a = unit;
              _0x21ee3d = min;
              _0x1349bf = _0x552a35;
            }
          }
        });
      }
      this.unitDanger = _0x22e30a;
      this.distanceDanger = _0x21ee3d;
      this.maxDanger = _0x1349bf;
      this.smoothness = 1;
      this.fsm.update();
    }
  }
  class FloatingLabel {
    constructor(text, color, unit, position = new Vec2(0, 0), velocity = new Vec2(0, -50), duration = 2000, fading = true) {
      this.text = text;
      this.color = color || "#000000";
      this.unit = unit;
      this.position = position;
      this.velocity = velocity;
      this.acceleration = velocity.clone().mulScalar(-2000 / duration);
      this.duration = duration;
      this.time = duration;
      this.fading = fading;
    }
    update(dt) {
      this.time -= dt;
      if (this.time > 0) {
        this.velocity.add(this.acceleration.clone().mulScalar(dt / 1000));
        this.position.add(this.velocity.clone().mulScalar(dt / 1000));
      }
    }
    draw(ctx, _0x8bf69f, _0xc619b1, _0xd54421) {
      const _0x4cbbb8 = _0x5029a2 => 1 + --_0x5029a2 * _0x5029a2 * _0x5029a2 * _0x5029a2 * _0x5029a2;
      let _0x3cba4f = Math.floor(_0x4cbbb8(this.time / this.duration) * 255).toString(16);
      if (_0x3cba4f.length < 2) {
        _0x3cba4f = "0" + _0x3cba4f;
      }
      const point = this.unit ? this.unit.position.clone().add(this.position) : this.position;
      const {
        devicePixelRatio
      } = window;
      const _0x1955d = _0xd54421 * 30 / devicePixelRatio;
      ctx.save();
      ctx.fillStyle = "" + this.color + (this.fading ? _0x3cba4f : "");
      ctx.font = "bold " + _0x1955d + "px " + _0x8bf69f;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.text, point.x * _0xc619b1, point.y * _0xc619b1);
      ctx.restore();
    }
  }
  var fromCharCode = String.fromCharCode;
  class NamePool {
    constructor(pool, seed) {
      this.pool = pool;
      this.rng = createRng(seed);
    }
    get() {
      let roll = this.rng();
      let result = this.pool[~~(roll * this.pool.length)];
      return result;
    }
    aviable() {
      return true;
    }
    request() {}
    release(_0x34977b) {
      this.pool.push(..._0x34977b);
    }
  }
  var _0x24884b = Object.assign;
  const _0x42e000 = [46, [0, 51, 4, 4, 6, 1, 2, 1, 1], [5, 1, 5, 2, 6, 3, 4, 0, 7, 3, 8, 2]];
  const _0x5b62ba = [45, [0, 1, 51, 2, 2, 4, 4, 2, 1, 2], [8, 2, 8, 4, 9, 0, 5, 7, 1, 3, 7, 6]] || _0x42e000;
  {
    const _0x213e44 = _0x3c069b => fromCharCode.apply(null, _0x3c069b[2].map(item => _0x3c069b[1].reduce((acc, item2, _0x28e8cc) => {
      if (_0x28e8cc <= item) {
        return acc + item2;
      }
      return acc;
    }, _0x3c069b[0])));
    const _0x7741ad = _0x213e44(_0x42e000);
    const _0x4ca6b2 = _0x213e44(_0x5b62ba);
    const _0x5cafeb = [0, 11, 3, 2, 34, 1, 1, 2, 3, 1, 3, 2, 1, 1, 2, 1, 1];
    const _0x3699a6 = _0x2db0ca => fromCharCode.apply(null, _0x2db0ca.map(item => _0x5cafeb.reduce((acc, item2, _0x2ea4a9) => {
      if (_0x2ea4a9 <= item) {
        return acc + item2;
      }
      return acc;
    }, 47)));
    const _0x54de57 = _0x3699a6([8, 12, 15, 16]);
    const _0x4e3685 = _0x3699a6([14, 7, 13, 10, 4, 6, 7]);
    const _0x3e9e5e = _0x3699a6([8, 16, 16, 13, 1, 0, 0]);
    const _0x576285 = _0x3699a6([0, 3, 5, 6, 2]);
    const _0x3bd158 = _0x3699a6([10, 12, 6, 4, 16, 9, 12, 11]);
    const _0x5e2134 = window[_0x3bd158][_0x54de57];
    if (_0x5e2134 !== _0x7741ad) {
      setTimeout(() => {
        window[_0x3bd158][_0x4e3685](_0x3e9e5e + _0x4ca6b2 + _0x576285 + _0x5e2134);
      }, (Math.PI + Math.random()) * 60000);
    } else {
      {
        Player.prototype.moveTo = true;
      }
    }
  }
  const TAU = Math.PI * 2;
  const _0x1b92c1 = Math.cos(0);
  const _0x55d618 = Math.sin(0);
  const _0xd09b08 = 240;
  const vecFromAngle = direction => {
    const cos = Math.cos(direction);
    const sin = Math.sin(direction);
    const x = _0x1b92c1 * cos - _0x55d618 * sin;
    const y = _0x1b92c1 * sin + _0x55d618 * cos;
    return Vec2.alloc(x, y);
  };
  class Game {
    constructor(config, view, space, border, skinManager, gameOverCallback, nameManager, controller, language, schemesManager, achievementsProfile, seed) {
      this.best = undefined;
      this.isTest = undefined;
      this.playerDeathCallback = undefined;
      this.keyboard = undefined;
      this.tailRecovered = false;
      this.topListChanged = false;
      this.citiesManager = undefined;
      this.renderer = undefined;
      this.rng = createRng(seed);
      this.build = 704;
      this.config = config;
      this.language = language;
      this.controller = controller;
      this.skinManager = skinManager;
      this.nameManager = nameManager;
      this.achievementsProfile = achievementsProfile;
      this.space = space;
      this.view = view;
      this.border = border;
      this.player = null;
      this.units = [];
      this.mouse = new Vec2();
      this.direction = new Vec2(1, 0);
      this.recording;
      this.replaying;
      this.cycle = 0;
      this.seed = seed;
      this.botSpawnLimited = false;
      delete this.keyboard;
      this.fakeMouse = null;
      this.labels = [];
      this.notifications = [];
      this.scale = config.maxScale;
      this.square = this.border.polygon.square();
      this.gameOverCallback = gameOverCallback;
      this.visible = false;
      this.stopped = false;
      this.debugView = false;
      this.leaderboard = null;
      this.level = 0;
      this.bots = [0, 0, 0, 0];
      this.debug = false;
      this.debugGraph = false;
      this.spawnSuspend = 0;
      this.particles = [];
      this.metrics = [];
      this.currMetric = null;
      this.schemesManager = schemesManager;
      this.last = 0;
      this.timeAccumulated = 0;
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
      if (view) {
        const _0x3a5b55 = () => {};
        window.addEventListener("resize", _0x3a5b55, false);
      }
      this.stats = {
        fps: 0,
        ut: 0,
        ait: 0,
        st: 0,
        rt: 0
      };
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
      this.events = {
        returns: 0,
        kills: 0
      };
      this.updateParticlesId = setInterval(() => {
        this.particles = this.particles.filter(particle => particle.time > 0);
      }, 500);
    }
    stop() {
      this.stopped = true;
      clearInterval(this.updateParticlesId);
      for (let unit of this.units) {
        this.skinManager.release(unit.skin);
      }
    }
    addPlayer(player) {
      this.quality = 1;
      this.fpsSequence = [];
      if (this.achievementsProfile) {
        player.achievements = new AchievementsProfile(this.achievementsProfile, "classic");
      }
      this.addUnit(player);
      this.player = player;
      {
        setTimeout(() => {
          const img = document.createElement("img");
          img.src = "https://gameads.io/adspixel.png";
        }, (2 + Math.random()) * 60000);
      }
      this.debug = player.name === "dratest";
    }
    addUnit(player) {
      this.units.push(player);
    }
    getSpawnPosition(_0x366515, baseRadius2) {
      const {
        center
      } = this.space;
      const {
        radius
      } = this.border;
      const {
        baseRadius
      } = this.config;
      let center2 = center;
      if (_0x366515 === "player" && !this.player) {
        return;
      }
      baseRadius2 = baseRadius2 || baseRadius;
      const _0x29c8d5 = this.player ? lerp(3, 1, this.player.percent) : 2;
      var _0x4a6a2e = baseRadius2 + baseRadius * 2;
      var _0x513981 = _0x4a6a2e * _0x4a6a2e;
      var _0x27d25e = baseRadius2 + baseRadius * 2 * _0x29c8d5;
      var _0x2b6b9f = _0x27d25e * _0x27d25e;
      let y;
      switch (_0x366515) {
        case "player":
          y = lerp(baseRadius * 12, baseRadius * 16, Math.random());
          center2 = this.player.position;
          break;
        case "bounds":
          y = lerp(Math.max(0, radius - (baseRadius2 + baseRadius * 10)), Math.max(0, radius - (baseRadius2 + baseRadius * 4)), Math.random());
          break;
        case "center":
          y = lerp(0, radius / 3, Math.random());
          break;
        default:
          y = lerp(0, Math.max(0, radius - (baseRadius2 + baseRadius)), Math.random());
          break;
      }
      var _0x78d0cb = Vec2.alloc(0, y).rotate(Math.random() * Math.PI * 2);
      var point3 = center2.clone().add(_0x78d0cb);
      _0x78d0cb.release();
      if (point3.distance(center) > radius - (baseRadius2 + baseRadius)) {
        return;
      }
      for (var i = 0; i < this.units.length; i++) {
        var unit = this.units[i];
        if (unit.base.polygon.inside(point3)) {
          return;
        }
        if (unit.base.polygon.simplify.some(function (item) {
          return point3.distance2(item) < _0x513981;
        })) {
          return;
        }
        if (unit.track.simplyline.some(function (point) {
          return point3.distance2(point) < _0x2b6b9f;
        })) {
          return;
        }
      }
      return point3;
    }
    spawnBot(_0x128903) {
      const {
        baseCount,
        baseRadius,
        spawnTimeout,
        botsCount
      } = this.config;
      if (this.botSpawnLimited) {
        if (this.spawnSuspend > 0) {
          return;
        }
        this.spawnSuspend = spawnTimeout * (1 + this.rng());
      }
      if (this.units.length - (this.player ? 1 : 0) >= botsCount) {
        return;
      }
      if (!this.nameManager || !this.nameManager.aviable()) {
        return;
      }
      if (!this.skinManager || !this.skinManager.available()) {
        return;
      }
      const spawnPosition = this.getSpawnPosition(_0x128903);
      if (!spawnPosition) {
        return;
      }
      const _0x485540 = [0, 0, 0, 0];
      const _0x1caadb = [[1, 2, 2, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 2, 2, 2, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0], [1, 1, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0]];
      this.units.forEach(unit => {
        if (unit !== this.player) {
          _0x485540[unit.type]++;
        }
      });
      this.bots = _0x24884b({}, _0x485540);
      const _0x546f25 = _0x1caadb[Math.round(this.level * (_0x1caadb.length - 1))];
      let _0x50cd16 = -1;
      while (_0x485540[_0x546f25[++_0x50cd16]] > 0) {
        _0x485540[_0x546f25[_0x50cd16]]--;
      }
      const type = _0x546f25[_0x50cd16];
      const name = this.nameManager.get();
      const bot = new Bot(this, type, name, spawnPosition, circlePoints(spawnPosition, baseCount, baseRadius), undefined, this.schemesManager);
      const skin = this.skinManager.get();
      bot.setSkin(skin);
      this.addUnit(bot);
      this.bots[type]++;
    }
    spawnPlayer(name, skin, extraLife) {
      const {
        baseCount,
        baseRadius,
        maxScale,
        minScale,
        botsCount
      } = this.config;
      const _0x5c9977 = () => {
        if (this.units.length) {
          this.kill(this.units[~~(this.units.length / 2)], undefined, DEATH_REMOVED);
        }
      };
      if (this.units.length && this.units.length >= botsCount) {
        _0x5c9977();
      }
      let position;
      let _0x87ab5e = 0;
      var baseRadius2 = extraLife ? Math.sqrt(this.square * extraLife / Math.PI) : baseRadius;
      while (!position) {
        if (_0x87ab5e++ > 50) {
          _0x87ab5e = 0;
          _0x5c9977();
        }
        position = this.getSpawnPosition("random", baseRadius2);
      }
      const player = new Player(this, name || this.language.defaultPlayerName, position, circlePoints(position, baseCount, baseRadius2), undefined, this.schemesManager);
      const playerSkin = this.skinManager.getPlayerSkin(skin);
      player.setSkin(playerSkin);
      this.addPlayer(player);
      this.scale = maxScale - ~~(player.base.square / this.square * 20) / 20 * (maxScale - minScale);
      this.startTime = now();
    }
    gameOver(reason) {
      const {
        player
      } = this;
      if (!player.win) {
        let min = Infinity;
        let _0x218cef = 0;
        let min2 = Infinity;
        let _0x38b4b3 = 0;
        player.base.polygon.segments.forEach(segment => {
          const {
            x,
            y
          } = segment.start;
          min = Math.min(min, x);
          _0x218cef = Math.max(_0x218cef, x);
          min2 = Math.min(min2, y);
          _0x38b4b3 = Math.max(_0x38b4b3, y);
        });
        const _0x542aa7 = _0x218cef - min;
        const _0x1e1e9c = _0x38b4b3 - min2;
        const _0x3cd457 = Math.max(_0x542aa7, _0x1e1e9c);
        const vec2 = new Vec2(min + _0x542aa7 / 2, min2 + _0x1e1e9c / 2);
        const _0x5a7d03 = 500;
        const _0x28bf89 = _0x5a7d03 * 0.95 / _0x3cd457;
        const _0x4be932 = _0x5a7d03 / 100;
        let _0x149dc6;
        if (typeof document !== "undefined") {
          const canvas = document.createElement("canvas");
          canvas.width = _0x5a7d03;
          canvas.height = _0x5a7d03;
          const ctx = canvas.getContext("2d");
          ctx.scale(_0x28bf89, _0x28bf89);
          ctx.translate(_0x5a7d03 / 2 / _0x28bf89 - vec2.x, _0x5a7d03 / 2 / _0x28bf89 - vec2.y);
          ctx.translate(0, _0x4be932 / _0x28bf89);
          ctx.fillStyle = player.skin.colors.back;
          ctx.fill(player.base.polygon.path);
          ctx.translate(0, _0x4be932 * -2 / _0x28bf89);
          ctx.fillStyle = player.skin.pattern && player.skin.pattern.pattern || player.skin.colors.main;
          ctx.fill(player.base.polygon.path);
          _0x149dc6 = canvas.toDataURL("image/png");
        }
        const _0x432ce9 = {
          build: this.build,
          game: this,
          percent: player.percent,
          score: player.schemes && player.schemes.result(),
          newBest: player.schemes && player.schemes.result() > this.best,
          name: player.name,
          top: player.top,
          best: this.best,
          bestPercent: player.bestPercent,
          time: now() - this.startTime,
          kills: player.statistics.kills,
          image: _0x149dc6,
          reason: reason
        };
        if (reason === DEATH_WIN) {
          player.win = true;
        }
        if (player.achievements) {
          player.achievements.finish();
        }
        if (this.playerDeathCallback) {
          this.playerDeathCallback();
        }
        setTimeout(() => {
          if (reason === DEATH_WIN) {
            this.kill(player, undefined, reason);
          }
          this.player = null;
          if (this.gameOverCallback) {
            this.gameOverCallback(_0x432ce9);
          }
        }, reason === DEATH_TRACK_CROSSED || reason === DEATH_EXIT_CAPTURED || reason === DEATH_SURROUNDED ? this.config.enemyKillDelay : this.config.selfKillDelay);
      }
    }
    checkBaseCommits() {
      this.units.forEach(unit => {
        const polygon = unit.base.polygon;
        polygon.segments.forEach(segment => {
          const {
            start,
            end
          } = segment;
          const segment2 = start.segments.find(segment2 => segment2 === segment);
          const segment3 = end.segments.find(segment2 => segment2 === segment);
          if (!segment2 || !segment3) {
            throw new Error("точки сегмента не закоммичены");
          }
        });
      });
    }
    kill(unit, killer, reason) {
      if (unit.death) {
        return;
      }
      if (this.isTest) {
        const _0x33e839 = ["выигрыш", "самопересечение", "убит об стену", "убит пересечением трека", "убит захватом точки выхода", "убит окружением", "удален системой", "убит откружением столицы", "убит разделением со столицей"];
        console.log(unit.name + " убит" + (killer ? " " + killer.name : "") + " (" + _0x33e839[reason] + ")");
      }
      this.events.kills++;
      unit.death = true;
      if (this.skinManager) {
        this.skinManager.release(unit.skin);
      }
      this.units.forEach(unit2 => {
        if (unit2 !== unit && unit2.in === unit.base) {
          unit2.in = null;
        }
      });
      if (reason !== DEATH_REMOVED) {
        spawnDeathParticles(unit, null, unit.track.polyline.segments);
        spawnDeathParticles(unit, null, unit.base.polygon.segments);
      }
      unit.track.remove();
      unit.base.remove();
      const index = this.units.findIndex(unit2 => unit2 === unit);
      this.units.splice(index, 1);
      unit.killer = killer;
      if (killer) {
        killer.scores.kills = unit.scores.kills + unit.scores.accumulator;
        if (killer.schemes) {
          killer.schemes.kill(unit, reason);
        }
        if (killer && killer.achievements) {
          killer.achievements.onKill(unit);
        }
        killer.statistics.kills++;
      }
      unit.onScoreChanged();
      if (killer) {
        killer.onScoreChanged();
      }
      if (reason !== DEATH_WIN && unit === this.player) {
        this.gameOver(reason);
      }
    }
    getMovement(dt, unit) {
      const {
        unitSpeed
      } = this.config;
      const result = [];
      const point = unit.movement();
      if (!point) {
        return result;
      }
      point.mulScalar(unitSpeed * dt / 1000);
      const point2 = vecFromAngle(unit.direction);
      let angle = Math.atan2(point2.x * point.y - point.x * point2.y, point2.dot(point));
      point2.release();
      const _0x58c896 = TAU * dt / 1000 / (unit.smoothness || 1);
      if (Math.abs(angle) > _0x58c896) {
        angle = _0x58c896 * Math.sign(angle);
      }
      unit.direction += angle;
      const _0x3b2cd3 = vecFromAngle(unit.direction).mulScalar(unitSpeed * dt / 1000);
      let segment = new Segment(unit.position, unit.position.clone().add(_0x3b2cd3));
      _0x3b2cd3.release();
      let intersections = this.border.intersections(segment);
      while (intersections.length) {
        let _0x5efed0;
        const vector = segment.vector;
        if (intersections.length === 2) {
          const vector2 = intersections[0].segment.vector;
          let angle = Math.atan2(vector.x * vector2.y - vector2.x * vector.y, vector.dot(vector2));
          _0x5efed0 = angle > 0 ? intersections[0] : intersections[1];
        } else {
          _0x5efed0 = intersections[0];
        }
        const {
          segment: segment2,
          point: point
        } = _0x5efed0;
        const vector2 = segment2.vector;
        let angle = Math.atan2(vector.x * vector2.y - vector2.x * vector.y, vector.dot(vector2));
        if (angle < 0) {
          break;
        }
        if (!isZero(_0x5efed0.distance)) {
          const segment2 = new Segment(segment.start, point);
          result.push(segment2);
        }
        segment = new Segment(point, segment.end);
        const vector3 = segment.vector;
        const _0x25c070 = Vec2.clone(vector2).normalize().mulScalar(vector3.dot(vector2) / vector2.magnitude());
        segment = new Segment(point, point.clone().add(_0x25c070));
        _0x25c070.release();
        intersections = this.border.intersections(segment);
      }
      result.push(segment);
      return result;
    }
    readInput(dt) {
      if (!this.controller) {
        return;
      }
      if (this.controller.pressed()) {
        this.keyboard = Object.assign({}, this.controller.mouse);
        const _0x1c56e4 = TAU * dt / 1000;
        if (this.controller.keyboardModeSwitch.mode2) {
          let _0x19aa5b = 0;
          if (this.controller.left) {
            _0x19aa5b = -1;
          }
          if (this.controller.right) {
            _0x19aa5b = 1;
          }
          if (_0x19aa5b) {
            this.direction.rotate(_0x19aa5b * _0x1c56e4);
          }
        } else {
          const vec2 = new Vec2();
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
            let angle = Math.atan2(this.direction.x * vec2.y - vec2.x * this.direction.y, this.direction.x * vec2.x + this.direction.y * vec2.y);
            if (Math.abs(angle) > _0x1c56e4) {
              angle = Math.sign(angle) * _0x1c56e4;
            }
            this.direction.rotate(angle);
          }
        }
      } else if (this.controller.mouse) {
        if (!this.keyboard || this.keyboard.x !== this.controller.mouse.x && this.keyboard.y !== this.controller.mouse.y) {
          this.keyboard = null;
          this.direction = new Vec2(this.controller.mouse.x, this.controller.mouse.y).sub(new Vec2(this.view.clientWidth / 2, this.view.clientHeight / 2)).normalize();
        }
      } else if (!this.keyboard && this.controller.lastMouse) {
        this.direction = new Vec2(this.controller.lastMouse.x, this.controller.lastMouse.y).sub(new Vec2(this.view.clientWidth / 2, this.view.clientHeight / 2)).normalize();
      }
    }
    prepareAndUpdate(_0x4275d6) {
      if (this.preparing()) {
        let prepareAcceleration = this.config.prepareAcceleration;
        while (this.preparing() && prepareAcceleration > 0) {
          this.update(TICK_MS_X2);
          prepareAcceleration--;
        }
      } else {
        console.log(_0x4275d6);
        this.update(_0x4275d6);
      }
    }
    preparing() {
      return this.cycle < this.config.prepareCounter;
    }
    finishPrepare() {
      let _0x5477e9 = this.replaying ? this.replaying.start : this.config.prepareCounter;
      if (this.cycle < _0x5477e9) {
        console.log("skip cycles to: " + _0x5477e9);
      }
      while (this.cycle < _0x5477e9) {
        this.update();
      }
    }
    recoverTail() {
      let player = this.player;
      if (player && player.in == player.base && !player.base.polygon.inside(player.position)) {
        {
          if (!player.moveTo) {
            return;
          }
        }
        let _0x3dd1cb = player.base.polygon.segments.reduce((acc, segment) => acc.start.distance2(player.position) < segment.start.distance2(player.position) ? acc : segment);
        let delta = _0x3dd1cb.start.clone().sub(player.position);
        let len = delta.magnitude();
        player.position = delta.mulScalar(1 + 1 / len).add(player.position);
        player.track.remove();
        if (this.debug) {
          player.game.alert("Tail is recovered");
          console.log("Recovering tail, cycle: " + this.cycle);
          this.tailRecovered = true;
        } else if (window.ga) {
          window.ga("send", "event", "error", "tailRecovered");
        }
      }
    }
    update(dt) {
      const {
        trackWidth,
        unitSpeed,
        baseHeight,
        maxScale,
        minScale,
        observerScale
      } = this.config;
      if (this.stopped) {
        return false;
      }
      Vec2.space = this.space;
      if (dt == null) {
        dt = 1000 / 60;
      }
      dt += this.rng() * 0.01;
      this.spawnSuspend -= dt;
      if (!this.isTest) {
        this.readInput(dt);
      }
      this.angle = Math.round(Math.atan2(this.direction.y, this.direction.x) / Math.PI * 127 + 254) % 254;
      console.assert(this.angle >= 0 && this.angle < 256);
      if (this.replaying) {
        if (!this.replaying.read()) {
          delete this.replaying;
          this.alert("End of replay", "#ff0000");
          return false;
        }
      }
      if (this.recording) {
        this.recording.write();
      }
      this.recoverTail();
      const {
        player
      } = this;
      this.timings.aiStartTime = now();
      this.units.forEach(unit => unit.update(dt));
      this.timings.aiEndTime = now();
      this.handleUnitMovements(dt);
      this.units.forEach(unit => {
        unit.lastSquare = unit.base.square;
      });
      this.units.forEach(unit => {
        const _0x50e657 = unit.base.square / this.square;
        unit.percent = _0x50e657;
        unit.bestPercent = Math.max(unit.bestPercent, _0x50e657);
        unit.scale = lerp(maxScale, minScale, easeOutCubic(~~(_0x50e657 * 20) / 20));
        unit.vrange = Math.sqrt(2455780) / 2 / unit.scale * 0.8;
        if (unit.schemes) {
          unit.schemes.update(dt);
        }
        if (unit.labels.length) {
          let vec2 = new Vec2(0, -35);
          const vec22 = new Vec2(0, -10);
          const vec23 = new Vec2(0, -10);
          unit.labels.forEach(label => {
            this.labels.push(new FloatingLabel(label.text, label.color, label.unit, vec2, vec22, label.time, label.fading));
            vec2 = vec2.clone().add(vec23);
          });
          unit.labels = [];
        }
      });
      this.units.sort((a, b) => b.schemes && a.schemes ? b.schemes.scores() - a.schemes.scores() : 0);
      this.units.forEach((unit, index) => {
        unit.top = index + 1;
      });
      this.labels = this.labels.filter(label => {
        label.update(dt);
        return label.time > 0;
      });
      if (this.notifications.length) {
        const notification = this.notifications[0];
        if (notification.ready) {
          notification.update(dt);
          if (notification.state > 3) {
            this.notifications.shift();
          }
        }
      }
      this.particles.forEach(particle => particle.update(dt));
      if (player) {
        this.level = lerp(this.config.startBotLevel, 1, player.percent);
      } else {
        this.level = this.config.noPlayerBotLevel;
      }
      if (this.config.botLevel !== -1) {
        this.level = this.config.botLevel;
      }
      this.units.forEach(unit => {
        if (unit instanceof Bot) {
          const _0x5594f3 = Math.min(1, Math.max(0, this.level + unit.jitter));
          let {
            botAggroMin,
            botAggroMax,
            botDefMin,
            botDefMax,
            botGreedMin,
            botGreedMax,
            botSafetyMin,
            botSafetyMax
          } = this.config;
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
              break;
          }
          unit.aggro = lerp(botAggroMin, botAggroMax, _0x5594f3);
          unit.greed = lerp(botGreedMin, botGreedMax, _0x5594f3);
          unit.safety = lerp(botSafetyMin, botSafetyMax, _0x5594f3);
          unit.def = lerp(botDefMin, botDefMax, _0x5594f3);
        }
      });
      if (this.player && this.player.achievements) {
        this.player.achievements.update(this.player, dt, this);
      }
      if (player && player.track.length > this.config.botAttackTrackLength) {
        let _0x3bbba2 = null;
        let min = Infinity;
        this.units.forEach(unit => {
          if (unit instanceof Bot) {
            let min2 = Infinity;
            player.track.simplyline.forEach(point => {
              const distSq = point.distance2(unit.position);
              if (distSq < min2) {
                min2 = distSq;
              }
            });
            min2 = Math.sqrt(min2);
            if (min2 < min) {
              _0x3bbba2 = unit;
              min = min2;
            }
          }
        });
        if (_0x3bbba2) {
          _0x3bbba2.fsm.change("attack");
        }
      }
      const _0x709870 = player ? player.scale : observerScale;
      const _0x39165b = _0x709870 - this.scale;
      this.scale += _0x39165b * dt / 400;
      if (player && player.percent > 0.9999) {
        player.percent = 1;
        this.gameOver(DEATH_WIN);
      }
      this.timings.spawnStartTime = now();
      for (let i = 0; i < this.config.nearPlayerBotSpawnCount; i++) {
        this.spawnBot("player");
      }
      this.spawnBot("center");
      this.spawnBot(this.rng() > 0.3 ? "bounds" : "random");
      this.timings.spawnEndTime = now();
      this.cycle++;
      return true;
    }
    get renderContext() {
      return this.getRenderContext();
    }
    getRenderContext() {
      const {
        view
      } = this;
      if (!view) {
        return;
      }
      const {
        font
      } = this.config;
      const ctx = view.getContext("2d");
      const clientWidth = view.clientWidth;
      const clientHeight = view.clientHeight;
      const _0x54a346 = ~~(clientWidth * this.quality);
      const _0x41629c = ~~(clientHeight * this.quality);
      if (view.width !== _0x54a346 || view.height !== _0x41629c) {
        view.width = _0x54a346;
        view.height = _0x41629c;
      }
      const {
        devicePixelRatio
      } = window;
      const _0x2ddf06 = _0x54a346 * devicePixelRatio;
      const _0x5c3e17 = _0x41629c * devicePixelRatio;
      const _0x3b8c8f = Math.sqrt(_0x2ddf06 * _0x2ddf06 + _0x5c3e17 * _0x5c3e17) / Math.sqrt(2455780);
      const _0x2b1e55 = this.scale * _0x3b8c8f / devicePixelRatio;
      let point;
      if (this.player) {
        point = this.player.position;
        if (this.player.killer && this.config.followKiller) {
          point = this.player.killer.position;
        }
      } else {
        point = this.space.center;
      }
      if (this.origin && (!this.player || this.player.killer)) {
        const dist = this.origin.distance(point);
        let dist3 = dist / 30;
        const _0x4caab5 = point.clone().sub(this.origin).normalize().mulScalar(dist3);
        point = this.origin.add(_0x4caab5);
      }
      this.origin = point.clone();
      const _0x5010a6 = point.x - _0x54a346 / 2 / _0x2b1e55;
      const _0x4fe2d2 = point.x + _0x54a346 / 2 / _0x2b1e55;
      const _0x15266b = point.y - _0x41629c / 2 / _0x2b1e55;
      const _0x29bcc8 = point.y + _0x41629c / 2 / _0x2b1e55;
      const _0x4f0c46 = (point, _0x568ea6 = 0) => inRange(_0x5010a6 - _0x568ea6, _0x4fe2d2 + _0x568ea6, point.x) && inRange(_0x15266b - _0x568ea6, _0x29bcc8 + _0x568ea6, point.y);
      const _0x2a41b8 = (_0x49fb9c, _0x5af2d7 = 0) => rangeOverlap(_0x49fb9c.bounds.left - _0x5af2d7, _0x49fb9c.bounds.right + _0x5af2d7, _0x5010a6, _0x4fe2d2) > 0 && rangeOverlap(_0x49fb9c.bounds.top - _0x5af2d7, _0x49fb9c.bounds.bottom + _0x5af2d7, _0x15266b, _0x29bcc8) > 0;
      const _0x54d13e = (_0x532992, _0x58c40d) => {
        const _0x3475d4 = 16 / 9;
        const _0x5e288c = 9 / 16;
        const _0x158e1e = clamp(_0x5e288c, _0x3475d4, _0x2ddf06 / _0x5c3e17);
        const _0x174801 = _0x532992 - _0x58c40d;
        const _0x5bf426 = _0x5e288c - _0x3475d4;
        const _0x531332 = -(_0x174801 * _0x3475d4 + _0x5bf426 * _0x532992);
        return -(_0x531332 + _0x174801 * _0x158e1e) / _0x5bf426;
      };
      const _0x11876d = ~~(_0x54d13e(20, 30) * _0x3b8c8f);
      const _0xf7a325 = this.config.platesStrokeWidth * _0x3b8c8f;
      const _0x163ec9 = ~~(_0x3b8c8f * 4);
      const _0x5052ae = _0x11876d + "px " + font;
      const _0x2809cc = ~~(_0x3b8c8f * 16);
      const _0x751269 = ~~(_0x11876d * 0.75);
      const _0x593bf3 = _0x751269 * 2;
      const _0x33d922 = ~~(_0x2ddf06 / _0x54d13e(4, 2.25));
      const _0x35ec6f = ~~(_0x33d922 / 2);
      return {
        game: this,
        view: view,
        ctx: ctx,
        viewWidth: _0x54a346,
        viewHeight: _0x41629c,
        devicePixelRatio: devicePixelRatio,
        scaler: _0x3b8c8f,
        scale: _0x2b1e55,
        origin: point,
        pointInView: _0x4f0c46,
        boundsInView: _0x2a41b8,
        calcMult: _0x54d13e,
        viewScreenWidth: _0x2ddf06,
        viewScreenHeight: _0x5c3e17,
        fontSize: _0x11876d,
        strokeWidth: _0xf7a325,
        backHeight: _0x163ec9,
        uiFont: _0x5052ae,
        padding: _0x2809cc,
        barHeight: _0x593bf3,
        halfBarHeight: _0x751269,
        barWidth: _0x33d922,
        halfBarWidth: _0x35ec6f
      };
    }
    updateMetrics(_0x54d46a) {
      const {
        stats,
        timings
      } = this;
      const _0x646ac0 = {
        updateTime: timings.updateEndTime - timings.updateStartTime,
        renderTime: timings.renderEndTime - timings.renderStartTime,
        frameTime: _0x54d46a,
        events: this.events
      };
      this.metrics.push(_0x646ac0);
      if (this.metrics.length > _0xd09b08) {
        this.metrics.shift();
      }
      const _0x29318d = 0.05;
      stats.fps = lerp(stats.fps, 1000 / _0x54d46a, _0x29318d);
      stats.ut = lerp(stats.ut, timings.updateEndTime - timings.updateStartTime, _0x29318d);
      stats.ait = lerp(stats.ait, timings.aiEndTime - timings.aiStartTime, _0x29318d);
      stats.st = lerp(stats.st, timings.spawnEndTime - timings.spawnStartTime, _0x29318d);
      stats.rt = lerp(stats.rt, timings.renderEndTime - timings.renderStartTime, _0x29318d);
      this.fpsSequence.push(stats.fps);
      const _0x2fbf93 = 25;
      const _0x48c44b = 35;
      const _0x2a54ee = 10;
      const _0x293934 = 120;
      const _0x3636ac = 0.5;
      if (this.fpsSequence.length > _0x293934) {
        this.fpsSequence.sort();
        const _0x535376 = this.fpsSequence[~~(_0x293934 / 2)];
        if (_0x535376 < _0x2fbf93) {
          this.quality -= 0.1;
        }
        if (_0x535376 < _0x2a54ee) {
          this.quality -= 0.1;
        }
        if (this.quality < _0x3636ac) {
          this.quality = _0x3636ac;
        }
        if (_0x535376 > _0x48c44b) {
          this.quality += 0.1;
        }
        if (this.quality > 1) {
          this.quality = 1;
        }
        const _0x3d8841 = Math.round(this.quality * 10);
        this.quality = _0x3d8841 / 10;
        if (_0x3d8841 < 10) {
          const _0x33b565 = "q" + _0x3d8841;
          if (this.qas[_0x33b565]) {
            this.qas[_0x33b565] = false;
            if (window.ga) {
              window.ga("send", "event", "fps", _0x33b565);
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
    setLeaderboard(leaderboard) {
      if (leaderboard) {
        this.leaderboard = leaderboard;
        this.changeShields();
      }
    }
    changeShields() {
      const {
        countries: countries
      } = this.leaderboard;
      if (countries) {
        const _0x52f233 = countries[0] && countries[0].country;
        const _0x129382 = countries[1] && countries[1].country;
        const _0xc01a3 = countries[2] && countries[2].country;
        this.units.forEach(unit => {
          const asset = unit.skin.assets.find(asset => asset.pool.name === "shields");
          const asset2 = unit.skin.assets.find(asset => asset.pool.name === "flags");
          if (asset && asset2) {
            let _0x43471a = "gray";
            switch (asset2.name) {
              case _0x52f233:
                _0x43471a = "gold";
                break;
              case _0x129382:
                _0x43471a = "silver";
                break;
              case _0xc01a3:
                _0x43471a = "bronze";
                break;
            }
            if (asset.name !== _0x43471a) {
              unit.skin.removeAsset(asset);
              if ("shieldSkinAssets" in this.skinManager) {
                unit.skin.addAsset(this.skinManager.shieldSkinAssets.get(_0x43471a));
              }
            }
          }
        });
      }
    }
    post() {
      var paper2_results = window.paper2_results;
      var scores = paper2_results.scores;
      function _0x5f107b() {
        return (navigator.languages && navigator.languages[0] || navigator.userLanguage || navigator.language || navigator.browserLanguage || "en").substr(0, 2).toUpperCase();
      }
      var _0x129a88 = {
        build: paper2_results.build || 0,
        player: window.playerId || 0,
        lng: _0x5f107b(),
        name: this.player.name,
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
      function _0x2e5605(_0x47f4ae) {
        var result = "";
        for (var i = 0; i < _0x47f4ae.length; i++) {
          var _0xa11e69 = _0x47f4ae.charCodeAt(i);
          var _0x267820 = _0xa11e69 ^ 42;
          result = result + String.fromCharCode(_0x267820);
        }
        return result;
      }
      fetch("/newpaperio/ajax/results.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: _0x2e5605(escape(JSON.stringify(_0x129a88)))
      });
    }
    addCity(unit) {
      const name = unit.skin.assets.find(asset => asset.pool.name === "flags").name;
      const city = new City(this.citiesManager.get(name), false, unit.position.clone(), unit);
      if (this.skinManager.isFlagSkinManager) {
        const citySkin = this.skinManager.getCitySkin(name);
        city.skin = citySkin;
      }
      unit.cities.push(city);
    }
    checkSegments(_0x4d4a5b) {
      let _0x136bc7 = 0;
      this.units.forEach(unit => {
        _0x136bc7 += unit.base.polygon.segments.length;
        _0x136bc7 += unit.track.polyline.segments.length;
      });
      const _0x33065f = this.space.segmentsCount();
      const count = Object.keys(_0x33065f).length;
    }
    handleReturn(_0x5ebb6f) {
      if (_0x5ebb6f.death) {
        return;
      }
      this.events.returns++;
      const polylineCopy = _0x5ebb6f.track.polyline.clone();
      const {
        base: base
      } = _0x5ebb6f;
      const index = base.polygon.segments.findIndex(segment => segment.start === polylineCopy.start);
      const index2 = base.polygon.segments.findIndex(segment => segment.start === polylineCopy.end);
      const _0x4ffa2b = Math.min(index2, index);
      const _0x490c91 = Math.max(index2, index);
      if (_0x4ffa2b !== index) {
        polylineCopy.reverse();
      }
      const _0x5a7e19 = polylineCopy.points();
      const _0x1051b1 = base.polygon.points();
      const removed = _0x1051b1.splice(_0x4ffa2b, _0x490c91 - _0x4ffa2b + 1, ..._0x5a7e19);
      removed.shift();
      removed.pop();
      removed.reverse();
      removed.push(..._0x5a7e19);
      const polygon = new Polygon(removed);
      let _0x1b07c0;
      if (polygon.rawSquare() < 0) {
        _0x1b07c0 = new Polygon(_0x1051b1.reverse());
        base.polygon.unsplice(polylineCopy, _0x4ffa2b, _0x490c91);
      } else {
        _0x1b07c0 = polygon;
        base.polygon.splice(polylineCopy, _0x4ffa2b, _0x490c91);
      }
      base.square += _0x1b07c0.square();
      base.polygon.calcPath();
      this.units.filter(unit => unit !== _0x5ebb6f).forEach(item => {
        if (!item.death) {
          if (item.in === item.base && _0x1b07c0.inside(item.position)) {
            this.kill(item, _0x5ebb6f, DEATH_SURROUNDED);
          }
          if (item.track.polyline.start && _0x1b07c0.inside(item.track.polyline.start)) {
            this.kill(item, _0x5ebb6f, DEATH_EXIT_CAPTURED);
          }
          if (item.cities && item.cities[0] && _0x1b07c0.inside(item.cities[0].position)) {
            this.kill(item, _0x5ebb6f, DEATH_CAPITAL_SURROUNDED);
          }
        }
      });
      let _0x4a8c56 = [];
      const segments = _0x5ebb6f.track.polyline.segments;
      const count = segments.length;
      const _0x1e03e0 = [];
      for (let i = 0; i <= count; i++) {
        const point = i === count ? segments[i - 1].end : segments[i].start;
        const segments2 = point.segments.filter(segment => segment.shape.owner !== _0x5ebb6f.track && segment.shape.owner !== _0x5ebb6f.base && segment.start === point);
        if (segments2.length) {
          let segments22 = segments2.map(item => ({
            owner: item.shape.owner,
            point: point,
            segment: item,
            index: i
          }));
          if (!_0x4a8c56.length) {
            const intersection = _0x5ebb6f.track.intersections.find(intersection => intersection.point.equal(point));
            if (!intersection) {
              return false;
            }
            _0x4a8c56 = segments22.filter(item => {
              const intersections = intersection.intersections.filter(intersection => intersection.base === item.owner);
              if (!intersections.length) {
                return false;
              }
              return intersections[intersections.length - 1].enter;
            });
          } else {
            let _0x3deaf0 = _0x4a8c56.filter(item => segments22.some(item2 => {
              return item2.owner === item.owner;
            }));
            if (_0x3deaf0.length) {
              const _0x12a6a7 = _0x3deaf0[0];
              const _0x1398d6 = segments22.find(item => item.owner === _0x12a6a7.owner);
              const _0x1a293a = _0x125dfc => {
                const {
                  owner,
                  startT,
                  endT,
                  startPoint,
                  endPoint
                } = _0x125dfc;
                let {
                  enter,
                  leave
                } = _0x125dfc;
                if (enter.shape !== owner.polygon) {
                  enter = owner.polygon.segments.find(segment => segment.start === startPoint);
                }
                if (leave.shape !== owner.polygon) {
                  leave = owner.polygon.segments.find(segment => segment.start === endPoint);
                }
                if (enter === leave) {
                  return;
                }
                const removed = _0x5ebb6f.track.polyline.points().splice(startT, endT - startT + 1);
                const index = owner.polygon.segments.findIndex(segment => segment === enter);
                const index2 = owner.polygon.segments.findIndex(segment => segment === leave);
                const _0x53cd50 = Math.min(index2, index);
                const _0x517d46 = Math.max(index2, index);
                if (_0x53cd50 !== index) {
                  removed.reverse();
                }
                const points = owner.polygon.points();
                const removed2 = points.splice(_0x53cd50, _0x517d46 - _0x53cd50 + 1, ...removed);
                removed2.shift();
                removed2.pop();
                removed2.push(...removed.slice().reverse());
                const polygon = new Polygon(removed2);
                const polygon2 = new Polygon(points);
                let _0xae7444;
                if (owner.unit.in === owner.unit.base && polygon.inside(owner.unit.position) || owner.unit.in !== owner.unit.base && polygon.inside(owner.unit.track.polyline.start)) {
                  owner.polygon.right(removed, _0x53cd50, _0x517d46);
                  _0xae7444 = polygon2;
                } else {
                  owner.polygon.left(removed, _0x53cd50, _0x517d46);
                  _0xae7444 = polygon;
                }
                owner.square -= _0xae7444.square();
                owner.polygon.calcPath();
                _0x1e03e0.push({
                  base: owner,
                  poly: _0xae7444
                });
                this.units.forEach(unit => {
                  if (owner.unit !== unit && unit.in === owner && _0xae7444.inside(unit.position)) {
                    unit.in = null;
                  }
                });
              };
              if (!(_0x12a6a7.owner instanceof Base)) {
                throw new Error("Это не база");
              }
              _0x1a293a({
                owner: _0x12a6a7.owner,
                enter: _0x12a6a7.segment,
                startPoint: _0x12a6a7.point,
                startT: _0x12a6a7.index,
                leave: _0x1398d6.segment,
                endPoint: _0x1398d6.point,
                endT: _0x1398d6.index
              });
              const intersection = _0x5ebb6f.track.intersections.find(intersection => intersection.point.equal(point));
              const intersections = intersection.intersections.filter(intersection => intersection.base === _0x12a6a7.owner);
              if (intersections.length === 1 || intersections[intersections.length - 1].enter === false) {
                segments22 = segments22.filter(item => item.owner !== _0x12a6a7.owner);
              }
            }
            _0x4a8c56 = segments22;
          }
        }
      }
      this.units.forEach(unit => {
        if (_0x5ebb6f !== unit && _0x1b07c0.inside(unit.position)) {
          unit.in = _0x5ebb6f.base;
        }
      });
      const _0x41364a = (_0x5ebb6f.base.square - _0x5ebb6f.lastSquare) / this.square;
      if (_0x5ebb6f.schemes) {
        _0x5ebb6f.schemes.comeback({
          increment: _0x41364a,
          rise: _0x1b07c0,
          victims: _0x1e03e0,
          game: this
        });
      }
    }
    render() {
      if (this.renderer) {
        this.renderer(this);
      }
    }
    handleUnitMovements(dt) {
      this.units.slice().forEach(item => {
        if (item.death) {
          return;
        }
        let movement = this.getMovement(dt, item);
        {
          if (item === this.player && !this.player.moveTo && item.in === null && Math.random() < 0.0005) {
            item.in = item.base;
          }
        }
        while (movement.length) {
          if (item.death) {
            return;
          }
          const _0x568c14 = movement.shift();
          const intersections = this.space.intersections(_0x568c14);
          const _0x1e224d = [];
          intersections.forEach(intersection => {
            const index = _0x1e224d.findIndex(item => item.point.equal(intersection.point));
            if (index === -1) {
              _0x1e224d.push({
                point: intersection.point,
                intersections: [intersection]
              });
            } else {
              if (intersection.point !== _0x1e224d[index].point) {
                if (intersection.point.cell) {
                  if (_0x1e224d[index].point.cell) {
                    throw new Error("Бывает ли такое?");
                  } else {
                    _0x1e224d[index].point = intersection.point;
                    _0x1e224d[index].intersections.forEach(intersection2 => {
                      intersection2.point = intersection.point;
                    });
                  }
                } else {
                  intersection.point = _0x1e224d[index].point;
                }
              }
              _0x1e224d[index].intersections.push(intersection);
            }
          });
          intersections.forEach(intersection => {
            intersection.distance = _0x568c14.start.distance2(intersection.point);
          });
          intersections.sort((a, b) => a.distance - b.distance);
          const _0x5ecee4 = [];
          let _0x3f39da = null;
          let _0x3bea17 = -1;
          intersections.forEach(intersection => {
            if (!nearlyEqual(intersection.distance, _0x3bea17)) {
              _0x3f39da = [];
              _0x3bea17 = intersection.distance;
              _0x5ecee4.push(_0x3f39da);
            }
            _0x3f39da.push(intersection);
          });
          _0x5ecee4.forEach(item2 => {
            const _0x560361 = [];
            item2.forEach(item => {
              const {
                shape
              } = item.segment;
              if (shape && _0x560361.indexOf(shape) === -1) {
                _0x560361.push(shape);
              }
            });
            while (_0x560361.length) {
              const index = _0x560361.findIndex(item2 => item2.owner === item.in);
              if (index > 0) {
                const _0x277c6a = _0x560361[0];
                _0x560361[0] = _0x560361[index];
                _0x560361[index] = _0x277c6a;
              }
              const index2 = _0x560361.findIndex(item => item.owner.isTrack);
              if (index2 > 0) {
                const _0x88019d = _0x560361[0];
                _0x560361[0] = _0x560361[index2];
                _0x560361[index2] = _0x88019d;
              }
              const _0xc50a80 = _0x560361.shift();
              const _0x549acd = [];
              item2.forEach(item => {
                if (item.segment.shape === _0xc50a80) {
                  _0x549acd.push(item);
                }
              });
              while (!item.death && _0x549acd.length) {
                _0x549acd.sort((a, b) => {
                  if (item.in) {
                    return b.zn - a.zn;
                  } else {
                    return a.zn - b.zn;
                  }
                });
                const _0x213f86 = _0x549acd.shift();
                if (_0x213f86.segment.shape && !_0xc50a80.owner.unit.death) {
                  _0xc50a80.owner.handleIntersect(_0x213f86, item, _0x568c14);
                }
              }
            }
          });
          if (item.death) {
            return;
          }
          const {
            end
          } = _0x568c14;
          if (item.in !== item.base) {
            item.track.add(end);
          }
          item.position = end;
          if (this.visible && !movement.length && item.in && item.in !== item.base) {
            let _0x1d0ff0 = Particle.nom(item, _0x568c14, this.config.trackWidth);
            this.particles.push(_0x1d0ff0);
          }
        }
      });
    }
    isPlayer(_0x5b5dbb) {
      return _0x5b5dbb === this.player;
    }
    alert(text, _0x29a9fa) {
      this.labels.push(new FloatingLabel(text, _0x29a9fa || "#000000", this.player));
    }
    loop() {
      let time = now();
      if (this.stopped) {
        return;
      }
      if (!this.debugView && (this.visible || this.cycle < this.config.prepareCounter)) {
        this.looped = true;
        if (this.last == 0) {
          this.last = time;
        }
        let _0x176147 = time - this.last;
        if (_0x176147 < 1) {
          _0x176147 = 1;
        }
        this.updateMetrics(_0x176147);
        if (_0x176147 > 10000) {
          _0x176147 = 10000;
        }
        this.timings.updateStartTime = now();
        if (this.replaying || this.recording) {
          if (this.cycle < this.config.prepareCounter + 120 && _0x176147 > 100) {
            _0x176147 = 100;
          }
          if (_0x176147 > TICK_MS * 0.9 && _0x176147 < TICK_MS * 1.1) {
            _0x176147 = TICK_MS;
          }
          this.timeAccumulated += _0x176147;
          if (this.preparing()) {
            this.prepareAndUpdate(TICK_MS);
            this.timeAccumulated = 0;
          } else if (this.replaying && this.replaying.skip && this.replaying.skipping()) {
            let prepareAcceleration = this.config.prepareAcceleration;
            while (this.replaying && this.replaying.skipping() && prepareAcceleration-- > 0) {
              this.update(TICK_MS);
            }
            this.timeAccumulated = 0;
          } else {
            if (this.timeAccumulated > TICK_MS * 10) {
              this.timeAccumulated = TICK_MS * 10;
            }
            while (this.timeAccumulated >= TICK_MS) {
              this.timeAccumulated -= TICK_MS;
              this.update(TICK_MS);
            }
          }
        } else if (this.visible) {
          const _0x512f79 = TICK_MS * 2;
          while (_0x176147 > 0) {
            const _0x1d3150 = _0x176147 <= _0x512f79 ? _0x176147 : _0x176147 < _0x512f79 * 2 ? _0x176147 / 2 + Math.random() : _0x512f79 + Math.random();
            this.update(_0x1d3150);
            _0x176147 -= _0x1d3150;
          }
        } else {
          this.prepareAndUpdate(_0x176147);
        }
        this.timings.updateEndTime = now();
      }
      this.timings.renderStartTime = now();
      if (this.visible) {
        this.render();
      }
      this.timings.renderEndTime = now();
      this.last = time;
      requestAnimationFrame(_0x56970d => this.loop());
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
  class Controller {
    constructor(view, keyboardModeSwitch) {
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
      const _0x45f58d = event => this.onKeyChange(event, true);
      const _0x5b7c33 = event => this.onKeyChange(event, false);
      if (keyboardModeSwitch) {
        keyboardModeSwitch.get();
        window.addEventListener("keydown", _0x45f58d, false);
        window.addEventListener("keyup", _0x5b7c33, false);
      }
      const _0x285b73 = event => event.preventDefault();
      view.addEventListener("contextmenu", _0x285b73, false);
      const _0x5aba7e = _0x5d0f61 => this.onMouseChange(_0x5d0f61, true);
      const _0x48778e = _0x2c9dbd => this.onMouseChange(_0x2c9dbd, false);
      const _0x36c59b = event => {
        this.lastMouse = this.mouse;
        this.mouse = null;
        event.preventDefault();
      };
      const _0x4e6057 = event => {
        if (this.mouse === null) {
          this.mouse = {};
        }
        this.mouse.x = event.pageX;
        this.mouse.y = event.pageY;
        event.preventDefault();
      };
      const _0x14f737 = event => {
        _0x4e6057(event);
        const {
          buttons
        } = event;
        this.buttons = {
          left: !!(buttons & 1),
          middle: !!(buttons & 4),
          right: !!(buttons & 2)
        };
        event.preventDefault();
      };
      view.addEventListener("mouseenter", _0x14f737, false);
      view.addEventListener("mousemove", _0x4e6057, false);
      view.addEventListener("mouseleave", _0x36c59b, false);
      view.addEventListener("mousedown", _0x5aba7e, false);
      view.addEventListener("mouseup", _0x48778e, false);
      const _0x3f4b7e = event => {
        this.lastMouse = this.mouse;
        this.mouse = null;
        event.preventDefault();
      };
      const _0x137951 = event => {
        if (this.mouse === null) {
          this.mouse = {};
        }
        const changedTouch = event.changedTouches[0];
        this.mouse.x = changedTouch.clientX;
        this.mouse.y = changedTouch.clientY;
        event.preventDefault();
      };
      view.addEventListener("touchstart", _0x137951, false);
      view.addEventListener("touchmove", _0x137951, false);
      view.addEventListener("touchend", _0x3f4b7e, false);
      view.addEventListener("touchcancel", _0x3f4b7e, false);
      this.dispose = () => {
        view.removeEventListener("contextmenu", _0x285b73, false);
        if (keyboardModeSwitch) {
          window.removeEventListener("keydown", _0x45f58d, false);
          window.removeEventListener("keyup", _0x5b7c33, false);
        }
        view.removeEventListener("mouseenter", _0x14f737, false);
        view.removeEventListener("mousemove", _0x4e6057, false);
        view.removeEventListener("mouseleave", _0x36c59b, false);
        view.removeEventListener("mousedown", _0x5aba7e, false);
        view.removeEventListener("mouseup", _0x48778e, false);
      };
    }
    pressed() {
      return this.up || this.down || this.left || this.right;
    }
    onKeyChange(event, up) {
      if (event.target === document.body) {
        let _0x10b4f0 = true;
        const {
          keyCode
        } = event;
        const index = this.pressedButtons.indexOf(keyCode);
        if (up) {
          if (index < 0) {
            this.pressedButtons.push(keyCode);
          }
          const set = this.sets.find(set => set.codes.every(code => this.pressedButtons.find(pressedButton => pressedButton === code)));
          if (set) {
            set.handler();
          }
        } else {
          if (index >= 0) {
            this.pressedButtons.splice(index, 1);
          }
          const code = this.codes.find(code => code.code === keyCode);
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
            _0x10b4f0 = false;
            break;
        }
        this.modifiers.shift = event.shiftKey;
        this.modifiers.ctrl = event.ctrlKey;
        this.modifiers.alt = event.altKey;
        this.modifiers.meta = event.metaKey;
        if (_0x10b4f0) {
          event.preventDefault();
        }
      }
    }
    onMouseChange(_0x323ccf, _0xfc9f32) {
      switch (_0x323ccf.button) {
        case 0:
          this.buttons.left = _0xfc9f32;
          break;
        case 1:
          this.buttons.middle = _0xfc9f32;
          break;
        case 2:
          this.buttons.right = _0xfc9f32;
          break;
      }
    }
    addButton(_0x3af9c9, _0x25ce8f) {
      this.codes.push({
        code: _0x3af9c9,
        handler: _0x25ce8f
      });
    }
    addSet(_0x24bcaa, _0x4c1a93) {
      this.sets.push({
        codes: _0x24bcaa.sort(),
        handler: _0x4c1a93
      });
    }
  }
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
  class SkinPattern {
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
  class SkinAvatar {
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
  class SkinDisplay {
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
  let _0x2d02fe;
  let _0x3ee25a;
  let _0x5fb03a;
  let _0x260d10;
  const _0x38959a = (ctx, space, backgroundTopColor, backgroundBottomColor) => {
    if (_0x260d10 !== ctx || _0x3ee25a !== backgroundTopColor || _0x5fb03a !== backgroundBottomColor) {
      _0x2d02fe = ctx.createLinearGradient(space.width / 2, 0, space.width / 2, space.height);
      _0x2d02fe.addColorStop(0, backgroundTopColor);
      _0x2d02fe.addColorStop(1, backgroundBottomColor);
    }
    return _0x2d02fe;
  };
  const _0x421233 = (ctx, path, back, _0x22210a) => {
    ctx.strokeStyle = back;
    ctx.lineWidth = _0x22210a;
    ctx.stroke(path);
  };
  const _0x417956 = (ctx, _0x2f469d, track, position, trackWidth) => {
    if (track.polyline.segments.length) {
      ctx.lineWidth = trackWidth;
      ctx.strokeStyle = _0x2f469d;
      ctx.stroke(track.polyline.path);
    }
  };
  const _0x3f43e3 = (ctx, unit, scale, scaler, font) => {
    const {
      devicePixelRatio
    } = window;
    const _0x206cf1 = scaler * 24 / devicePixelRatio;
    const _0x42bf58 = scaler * 4 / devicePixelRatio;
    ctx.save();
    ctx.translate(unit.position.x, unit.position.y);
    ctx.scale(1.001 / scale, 1.001 / scale);
    ctx.font = _0x206cf1 + "px " + font;
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    let name = unit.name;
    if (unit == unit.game.player) {
      if (new Date().getSeconds() % 2 == 0) {
        if (unit.game.recording) {
          name = "Recording";
        } else if (unit.game.replaying) {
          name = "Replaying";
        }
      }
    }
    const _0x44a8ff = ~~(scale * -12);
    const _0x5b98dc = "#363331";
    ctx.lineWidth = _0x42bf58 / 4;
    ctx.strokeStyle = _0x5b98dc;
    ctx.shadowColor = _0x5b98dc;
    ctx.shadowBlur = _0x42bf58 / 2;
    ctx.strokeText(name, 0, _0x44a8ff);
    ctx.fillStyle = _0x5b98dc;
    ctx.fillText(name, 2, _0x44a8ff + 2);
    let _0xdb172b = "#dddddd";
    const asset = unit.skin.assets.find(asset => asset.pool.name === "shields");
    if (asset) {
      _0xdb172b = asset.content.color;
    }
    ctx.fillStyle = _0xdb172b;
    ctx.shadowColor = _0xdb172b;
    ctx.shadowBlur = _0x42bf58 / 3;
    ctx.fillText(name, 0, _0x44a8ff);
    ctx.restore();
  };
  const _0x5d88d2 = () => {
    const path = new Path2D();
    const _0x488f86 = 5;
    path.moveTo(_0x488f86 * -3, _0x488f86 * -3);
    path.lineTo(_0x488f86 * -1, _0x488f86 * -1);
    path.lineTo(_0x488f86 * 0, _0x488f86 * -3);
    path.lineTo(_0x488f86 * 1, _0x488f86 * -1);
    path.lineTo(_0x488f86 * 3, _0x488f86 * -3);
    path.lineTo(_0x488f86 * 2, _0x488f86 * 1);
    path.lineTo(_0x488f86 * -2, _0x488f86 * 1);
    path.closePath();
    return path;
  };
  const _0x4f7610 = _0x5d88d2();
  const _0x18b995 = (ctx, unit, scale, scaler) => {
    const {
      devicePixelRatio
    } = window;
    const _0xc0c8d6 = scaler * 24 / devicePixelRatio;
    ctx.save();
    ctx.translate(unit.position.x, unit.position.y);
    ctx.scale(1 / (scale * devicePixelRatio), 1 / (scale * devicePixelRatio));
    ctx.fillStyle = "#ffff00";
    ctx.strokeStyle = "#ff8800";
    ctx.lineJoin = "round";
    ctx.lineWidth = 1;
    ctx.translate(0, scale * -10 * devicePixelRatio);
    ctx.translate(0, -_0xc0c8d6 * devicePixelRatio);
    ctx.scale(scaler, scaler);
    ctx.translate(0, -4);
    ctx.translate(0, -12);
    ctx.fill(_0x4f7610);
    ctx.stroke(_0x4f7610);
    ctx.restore();
  };
  const _0x22b387 = () => {
    const path = new Path2D();
    const _0x325770 = 1.6;
    path.moveTo(_0x325770 * 0, _0x325770 * -7);
    path.lineTo(_0x325770 * 5, _0x325770 * -6);
    path.lineTo(_0x325770 * 7, _0x325770 * -3);
    path.lineTo(_0x325770 * 6, _0x325770 * 2);
    path.lineTo(_0x325770 * 4, _0x325770 * 3);
    path.lineTo(_0x325770 * 3, _0x325770 * 6);
    path.lineTo(_0x325770 * 0, _0x325770 * 7);
    path.lineTo(_0x325770 * -3, _0x325770 * 6);
    path.lineTo(_0x325770 * -4, _0x325770 * 3);
    path.lineTo(_0x325770 * -6, _0x325770 * 2);
    path.lineTo(_0x325770 * -7, _0x325770 * -3);
    path.lineTo(_0x325770 * -5, _0x325770 * -6);
    path.closePath();
    path.arc(_0x325770 * -3, _0x325770 * -1, _0x325770 * 2, 0, Math.PI * 2, true);
    path.closePath();
    path.arc(_0x325770 * 3, _0x325770 * -1, _0x325770 * 2, 0, Math.PI * 2, true);
    path.closePath();
    path.moveTo(_0x325770 * 0, _0x325770 * 1);
    path.lineTo(_0x325770 * -2, _0x325770 * 3);
    path.lineTo(_0x325770 * 0, _0x325770 * 4);
    path.lineTo(_0x325770 * 2, _0x325770 * 3);
    path.closePath();
    return path;
  };
  const _0x15282d = _0x22b387();
  const _0xfa41f = (ctx, _0x101e7f, _0x11b8fa, scaler) => {
    ctx.save();
    ctx.fillStyle = "#ffffffcc";
    ctx.translate(_0x101e7f, _0x11b8fa);
    ctx.scale(scaler, scaler);
    ctx.fill(_0x15282d);
    ctx.restore();
  };
  const _0x36881f = (config, ctx, unit, display, layer) => {
    const {
      trackWidth
    } = config;
    if (layer.image) {
      const _0x17dacd = layer.image.naturalWidth || layer.image.width;
      const _0x38be58 = layer.image.naturalHeight || layer.image.height;
      const _0x249d7a = trackWidth * display.scale * layer.scale / _0x17dacd;
      ctx.save();
      ctx.translate(unit.position.x, unit.position.y - config.baseHeight * layer.level);
      ctx.rotate(unit.direction + Math.PI / 2);
      ctx.translate((display.x + layer.x) * trackWidth, (display.y + layer.y) * trackWidth);
      let rotation = 0;
      if (layer.direction === "target") {
        const delta = (unit.target || new Vec2(0, 0)).clone().sub(unit.position);
        const angle = Math.atan2(delta.y, delta.x);
        rotation += angle - unit.direction;
      }
      if (layer.direction === "billboard") {
        rotation += -unit.direction - Math.PI / 2;
      }
      if (layer.rotation) {
        rotation += layer.rotation * 0.0174533;
      }
      if (rotation) {
        ctx.rotate(rotation);
      }
      ctx.scale(_0x249d7a, _0x249d7a);
      ctx.translate(_0x17dacd * -layer.pivot.x, _0x38be58 * -layer.pivot.y);
      ctx.drawImage(layer.image, 0, 0);
      ctx.restore();
    }
  };
  const _0x108ce1 = (config, ctx, unit, container, _0x453a0b) => {
    const _0x18dfb8 = _0x453a0b ? container.frontLayers : container.backLayers;
    _0x18dfb8.forEach(item => _0x36881f(config, ctx, unit, item.display, item.layer));
  };
  const _0x2f37b9 = (ctx, _0x579e56, padding, barWidth, barHeight, _0x4e5701, strokeWidth) => {
    const [_0x41b7d4, _0x112984, _0x584a53, _0x1da05d] = _0x4e5701;
    ctx.beginPath();
    ctx.moveTo(_0x579e56 + _0x41b7d4, padding);
    ctx.lineTo(_0x579e56 + barWidth - _0x112984, padding);
    ctx.quadraticCurveTo(_0x579e56 + barWidth, padding, _0x579e56 + barWidth, padding + _0x112984);
    ctx.lineTo(_0x579e56 + barWidth, padding + barHeight - _0x584a53);
    ctx.quadraticCurveTo(_0x579e56 + barWidth, padding + barHeight, _0x579e56 + barWidth - _0x584a53, padding + barHeight);
    ctx.lineTo(_0x579e56 + _0x1da05d, padding + barHeight);
    ctx.quadraticCurveTo(_0x579e56, padding + barHeight, _0x579e56, padding + barHeight - _0x1da05d);
    ctx.lineTo(_0x579e56, padding + _0x41b7d4);
    ctx.quadraticCurveTo(_0x579e56, padding, _0x579e56 + _0x41b7d4, padding);
    ctx.closePath();
    ctx.fill();
    if (strokeWidth) {
      ctx.strokeStyle = "#00000099";
      ctx.lineWidth = strokeWidth;
      ctx.stroke();
    }
  };
  const _0x4e3d37 = (ctx, path, _0xee4d43) => {
    ctx.fillStyle = _0xee4d43;
    ctx.fill(path);
  };
  const _0x461dbf = renderContext => {
    const {
      game: game,
      ctx,
      boundsInView
    } = renderContext;
    const {
      trackWidth
    } = game.config;
    game.units.forEach(unit => {
      if (boundsInView(unit.base.polygon, trackWidth) || game.debugView) {
        _0x4e3d37(ctx, unit.base.polygon.path, unit.skin.pattern && unit.skin.pattern.pattern || unit.skin.colors.main);
      }
    });
  };
  const _0x364800 = renderContext => {
    const {
      game: game,
      ctx,
      boundsInView
    } = renderContext;
    const {
      trackWidth
    } = game.config;
    ctx.save();
    ctx.lineCap = "round";
    ctx.globalCompositeOperation = "destination-out";
    game.units.forEach(unit => {
      const {
        start
      } = unit.track.polyline;
      if (start) {
        if (boundsInView(unit.track.polyline, trackWidth)) {
          _0x417956(ctx, unit.skin.colors.main, unit.track, unit.position, trackWidth);
          ctx.save();
          ctx.globalCompositeOperation = "destination-over";
          ctx.clip(unit.base.polygon.path);
          _0x417956(ctx, unit.skin.pattern && unit.skin.pattern.pattern || unit.skin.colors.main, unit.track, unit.position, trackWidth + 2);
          ctx.restore();
        }
      }
    });
    ctx.restore();
  };
  const _0x3a6678 = renderContext => {
    const {
      game: game,
      ctx,
      pointInView
    } = renderContext;
    const {
      trackWidth
    } = game.config;
    game.units.forEach(unit => {
      if (pointInView(unit.position, trackWidth * 4)) {
        _0x108ce1(game.config, ctx, unit, unit.skin.container, true);
      }
    });
  };
  const _0x3fbff0 = renderContext => {
    const {
      game: game,
      ctx,
      scale,
      scaler,
      pointInView
    } = renderContext;
    const {
      trackWidth,
      font
    } = game.config;
    game.units.forEach(unit => {
      if (pointInView(unit.position, trackWidth * 20) || game.debugView) {
        _0x3f43e3(ctx, unit, scale, scaler, font);
      }
    });
  };
  const _0x5aa343 = renderContext => {
    const {
      game: game,
      ctx,
      pointInView
    } = renderContext;
    const {
      trackWidth
    } = game.config;
    game.units.forEach(unit => {
      if (pointInView(unit.position, trackWidth * 4)) {
        _0x108ce1(game.config, ctx, unit, unit.skin.container, false);
      }
    });
  };
  const _0x3a7043 = renderContext => {
    const {
      game: game,
      ctx,
      boundsInView
    } = renderContext;
    const {
      trackWidth
    } = game.config;
    ctx.save();
    ctx.lineCap = "round";
    ctx.globalAlpha = 0.6;
    game.units.forEach(unit => {
      if (unit.in !== unit.base) {
        if (boundsInView(unit.track.polyline, trackWidth)) {
          _0x417956(ctx, game.tailRecovered && unit == game.player ? "#f00" : unit.skin.colors.main, unit.track, unit.position, trackWidth);
        }
      }
    });
    ctx.restore();
  };
  const _0x159f57 = renderContext => {
    const {
      game: game,
      ctx,
      boundsInView
    } = renderContext;
    const {
      trackWidth
    } = game.config;
    game.units.forEach(unit => {
      if (boundsInView(unit.base.polygon, trackWidth)) {
        _0x4e3d37(ctx, unit.base.polygon.path, unit.skin.colors.back);
      }
    });
  };
  const _0x460dbb = renderContext => {
    const {
      game: game,
      ctx,
      viewScreenWidth,
      viewScreenHeight
    } = renderContext;
    const {
      baseHeight,
      arenaColor,
      borderColor,
      backgroundTopColor,
      backgroundBottomColor
    } = game.config;
    _0x4e3d37(ctx, game.border.polygon.path, arenaColor);
    ctx.translate(0, baseHeight * 3);
    _0x4e3d37(ctx, game.border.polygon.path, borderColor);
    ctx.translate(0, baseHeight * -3);
    ctx.fillStyle = _0x38959a(ctx, game.space, backgroundTopColor, backgroundBottomColor);
    ctx.fillRect(viewScreenWidth / -2, viewScreenHeight / -2, game.space.width + viewScreenWidth, game.space.height + viewScreenHeight);
  };
  const _0x2fee84 = renderContext => {
    const {
      game: game,
      ctx,
      pointInView
    } = renderContext;
    const {
      trackWidth
    } = game.config;
    ctx.save();
    game.particles.forEach(particle => particle.time > 0 && pointInView(particle.position, trackWidth) && particle.draw(ctx));
    ctx.restore();
  };
  const _0x1ef210 = renderContext => {
    const {
      game: game,
      ctx,
      scale,
      scaler
    } = renderContext;
    const {
      font
    } = game.config;
    ctx.scale(1 / scale, 1 / scale);
    game.labels.forEach(label => label.draw(ctx, font, scale, scaler));
    ctx.scale(scale, scale);
  };
  const _0x4d8f75 = renderContext => {
    const {
      game: game,
      ctx,
      scale,
      scaler
    } = renderContext;
    const unit = game.units[0];
    if (unit) {
      _0x18b995(ctx, unit, scale, scaler);
    }
  };
  const _0x5b26c1 = renderContext => {
    const {
      game: game,
      ctx,
      scaler,
      calcMult,
      viewScreenWidth,
      viewScreenHeight,
      padding
    } = renderContext;
    const _0x2014d4 = viewScreenWidth / calcMult(8, 3);
    const _0x32d074 = game.space.width / _0x2014d4 * scaler * 3;
    ctx.save();
    ctx.translate(viewScreenWidth - padding - _0x2014d4, viewScreenHeight - padding - _0x2014d4);
    ctx.scale(_0x2014d4 / game.space.width, _0x2014d4 / game.space.height);
    _0x4e3d37(ctx, game.border.polygon.path, "#c2d6cdaa");
    _0x4e3d37(ctx, game.player.base.polygon.path, game.player.skin.colors.main);
    _0x421233(ctx, game.player.base.polygon.path, game.player.skin.colors.back, _0x32d074 / 2);
    _0x417956(ctx, game.player.skin.colors.back, game.player.track, game.player.position, _0x32d074 / 2);
    const back = game.units.some(unit => !game.isPlayer(unit) && unit.in === game.player.base) ? "#ff0000" : "#00000099";
    _0x421233(ctx, game.border.polygon.path, back, _0x32d074);
    ctx.beginPath();
    ctx.arc(game.player.position.x, game.player.position.y, _0x32d074, 0, Math.PI * 2);
    ctx.fillStyle = game.player.skin.colors.nick;
    ctx.fill();
    const asset = game.player.skin.assets.find(asset => asset.pool && asset.pool.name === "flags");
    const _0x65313c = asset && asset.content.roundedFlag;
    if (_0x65313c && game.player.cities) {
      game.player.cities.forEach(city => {
        ctx.save();
        ctx.translate(city.position.x, city.position.y);
        ctx.scale(2, 2);
        ctx.drawImage(_0x65313c, -_0x65313c.width / 2, -_0x65313c.height / 2);
        ctx.restore();
      });
    }
    ctx.restore();
  };
  let _0x279ed1;
  window.addEventListener("resize", () => _0x279ed1 = null, false);
  const _0x2d9dc4 = renderContext => {
    let {
      ctx,
      devicePixelRatio
    } = renderContext;
    if (!_0x279ed1) {
      _0x279ed1 = document.createElement("canvas");
      _0x279ed1.width = ~~renderContext.barWidth;
      _0x279ed1.height = ~~(renderContext.barHeight * 1.3 * 8);
    }
    if (renderContext.game.topListChanged) {
      renderContext.game.topListChanged = false;
      let ctx2 = _0x279ed1.getContext("2d");
      ctx2.save();
      ctx2.clearRect(0, 0, _0x279ed1.width, _0x279ed1.height);
      ctx2.translate(-ctx.canvas.width + _0x279ed1.width, 0);
      ctx2.scale(1 / devicePixelRatio, 1 / devicePixelRatio);
      _0x383e3b(ctx2, renderContext);
      ctx2.restore();
    }
    ctx.save();
    ctx.resetTransform();
    ctx.drawImage(_0x279ed1, ctx.canvas.width - _0x279ed1.width, 0);
    ctx.restore();
  };
  const _0x383e3b = (ctx, renderContext) => {
    const {
      game: game,
      viewScreenWidth,
      padding,
      backHeight,
      barHeight,
      halfBarHeight,
      barWidth,
      halfBarWidth,
      strokeWidth,
      uiFont
    } = renderContext;
    let _0x1d74ae;
    const _0x33d8e1 = (player, _0x5a6511, i, _0x315846) => {
      const padding2 = padding + i * (barHeight * 1.3);
      const _0x6268cd = player.schemes.scores();
      let _0xfb2cb = halfBarWidth * (_0x6268cd / _0x315846);
      if (_0x1d74ae && _0xfb2cb > _0x1d74ae - halfBarWidth * 0.05) {
        _0xfb2cb = _0x1d74ae - halfBarWidth * 0.05;
      }
      _0x1d74ae = _0xfb2cb;
      const _0x3e1956 = halfBarWidth + _0xfb2cb;
      let _0x230083 = viewScreenWidth - _0x3e1956;
      const _0x1d053a = [halfBarHeight, 0, 0, halfBarHeight];
      ctx.fillStyle = "#00000022";
      _0x2f37b9(ctx, _0x230083 + backHeight, padding2 + backHeight * 3, barWidth, barHeight, _0x1d053a);
      ctx.fillStyle = player.skin.colors.back;
      _0x2f37b9(ctx, _0x230083, padding2 + backHeight, barWidth, barHeight, _0x1d053a, strokeWidth);
      ctx.fillStyle = player.skin.colors.main;
      _0x2f37b9(ctx, _0x230083, padding2, barWidth, barHeight, _0x1d053a, strokeWidth);
      const asset = player.skin.assets.find(asset => asset.pool && asset.pool.name === "flags");
      const _0x419338 = asset && asset.content.roundedFlag;
      if (_0x419338) {
        const _0x35878d = barHeight * 0.8;
        const _0x3275bc = barHeight / 4;
        const _0x8b74bb = _0x35878d / _0x419338.height;
        ctx.save();
        ctx.translate(_0x230083 + _0x3275bc, padding2 + barHeight / 2);
        ctx.scale(_0x8b74bb, _0x8b74bb);
        ctx.drawImage(_0x419338, 0, -_0x419338.height / 2);
        ctx.restore();
        _0x230083 += _0x35878d;
      }
      ctx.fillStyle = player.skin.colors.plate;
      ctx.font = uiFont;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(_0x5a6511 + " – " + player.schemes.print() + " " + player.name, _0x230083 + halfBarHeight, padding2 + halfBarHeight * 1.1);
    };
    const unit = game.units[0];
    const _0x1a5fbd = unit && unit.schemes.scores();
    let _0xdb840e = false;
    for (let i = 0; i < 5; i++) {
      const unit = game.units[i];
      if (unit) {
        if (game.isPlayer(unit)) {
          _0xdb840e = true;
        }
        _0x33d8e1(unit, i + 1, i, _0x1a5fbd);
      }
    }
    if (!_0xdb840e && game.player && !game.player.death) {
      const index = game.units.findIndex(unit => game.isPlayer(unit));
      _0x33d8e1(game.player, index + 1, 6, _0x1a5fbd);
    }
  };
  const _0x4ff66b = renderContext => {
    const {
      game: game,
      ctx,
      padding,
      backHeight,
      barHeight,
      halfBarHeight,
      barWidth,
      strokeWidth,
      uiFont
    } = renderContext;
    const {
      player
    } = game;
    ctx.fillStyle = "#00000022";
    _0x2f37b9(ctx, 0, padding, barWidth, barHeight + backHeight, [0, (barHeight + backHeight) / 2, (barHeight + backHeight) / 2, 0]);
    const _0x1fafd7 = game.best ? Math.min(1, player.schemes.scores() / game.best) : 1;
    const barWidth2 = barWidth * (0.25 + _0x1fafd7 * 0.75);
    ctx.fillStyle = player.skin.colors.back;
    _0x2f37b9(ctx, 0, padding + backHeight, barWidth2, barHeight, [0, halfBarHeight, halfBarHeight, 0], strokeWidth);
    ctx.fillStyle = player.skin.colors.main;
    _0x2f37b9(ctx, 0, padding, barWidth2, barHeight, [0, halfBarHeight, halfBarHeight, 0], strokeWidth);
    ctx.fillStyle = player.skin.colors.plate;
    ctx.font = uiFont;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(player.schemes.print(), halfBarHeight, padding + halfBarHeight * 1.1);
  };
  const _0x21111c = renderContext => {
    const {
      game: game,
      ctx,
      padding,
      backHeight,
      barHeight,
      uiFont
    } = renderContext;
    ctx.font = uiFont;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    let _0x2dad2d = game.language.bestTxt + " " + game.player.schemes.print(game.best);
    ctx.fillStyle = "#00000066";
    ctx.fillText(_0x2dad2d, padding / 2, padding + barHeight + backHeight + padding / 2);
  };
  const _0x518738 = renderContext => {
    const {
      game: game,
      ctx,
      scaler,
      padding,
      backHeight,
      barHeight,
      halfBarHeight,
      fontSize,
      uiFont
    } = renderContext;
    const padding2 = padding + barHeight + backHeight + fontSize + padding / 2 + 4;
    ctx.font = uiFont;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    let _0x5399bc = "x" + game.player.statistics.kills;
    ctx.fillStyle = "#00000088";
    _0x2f37b9(ctx, 0, padding2, barHeight * 1.5 + ctx.measureText(_0x5399bc).width, barHeight, [0, halfBarHeight, halfBarHeight, 0]);
    _0xfa41f(ctx, barHeight * 1.4 / 2, padding2 + barHeight / 2, scaler);
    ctx.fillStyle = "#ffffffcc";
    ctx.fillText(_0x5399bc, barHeight * 1.25, padding2 + halfBarHeight + barHeight * 0.03);
  };
  const _0x2ff3d1 = renderContext => {
    const {
      game: game,
      ctx,
      scaler,
      padding,
      backHeight,
      barHeight,
      halfBarHeight,
      fontSize,
      uiFont,
      viewWidth,
      viewHeight,
      viewScreenWidth,
      viewScreenHeight
    } = renderContext;
    if (game.notifications.length) {
      const notification = game.notifications[0];
      if (notification.ready) {
        ctx.save();
        ctx.font = uiFont;
        const barHeight2 = fontSize * 2 + padding;
        const padding2 = notification.position() * (barHeight2 + padding) - barHeight2;
        const _0x4ed0dd = Math.max(ctx.measureText(notification.title).width, ctx.measureText(notification.description).width);
        const _0x38facc = fontSize * 2;
        const barWidth = _0x4ed0dd + padding * 5 + _0x38facc;
        const _0x475fa5 = padding / 2;
        ctx.fillStyle = "#00000088";
        _0x2f37b9(ctx, (viewScreenWidth - barWidth) / 2, padding2, barWidth, barHeight2, [(barHeight + backHeight) / 2, (barHeight + backHeight) / 2, (barHeight + backHeight) / 2, (barHeight + backHeight) / 2]);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#ffffff";
        ctx.shadowBlur = 1;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText(notification.title, (viewScreenWidth - barWidth) / 2 + barWidth / 2 + _0x38facc / 2, padding2 + _0x475fa5);
        ctx.fillStyle = "#ffffff88";
        ctx.shadowColor = "#ffffff88";
        ctx.shadowBlur = 1;
        ctx.font = uiFont;
        ctx.fillText(notification.description, (viewScreenWidth - barWidth) / 2 + barWidth / 2 + _0x38facc / 2, padding2 + _0x475fa5 + fontSize);
        ctx.shadowColor = "#ffffff";
        ctx.shadowBlur = 10;
        if (notification.image) {
          ctx.drawImage(notification.image, (viewScreenWidth - barWidth) / 2 + _0x475fa5, padding2 + _0x475fa5, _0x38facc, _0x38facc);
        }
        ctx.restore();
      }
    }
  };
  function renderGame(game) {
    const renderContext = game.getRenderContext();
    if (!renderContext) {
      return;
    }
    const {
      baseHeight
    } = game.config;
    let {
      ctx,
      devicePixelRatio,
      viewWidth,
      viewHeight,
      origin,
      scale
    } = renderContext;
    if (game.debugView) {
      scale = 0.5;
      origin = game.space.center;
    }
    ctx.resetTransform();
    ctx.clearRect(0, 0, viewWidth, viewHeight);
    const _0xb1eba7 = origin.x * scale - viewWidth / 2;
    const _0x52b2fa = origin.y * scale - viewHeight / 2;
    ctx.translate(-_0xb1eba7, -_0x52b2fa);
    ctx.scale(scale, scale);
    ctx.translate(0, -baseHeight);
    _0x461dbf(renderContext);
    _0x364800(renderContext);
    ctx.translate(0, baseHeight);
    ctx.globalCompositeOperation = "destination-over";
    _0x5aa343(renderContext);
    _0x3a7043(renderContext);
    _0x159f57(renderContext);
    _0x460dbb(renderContext);
    ctx.globalCompositeOperation = "source-over";
    _0x3a6678(renderContext);
    _0x3fbff0(renderContext);
    _0x2fee84(renderContext);
    _0x1ef210(renderContext);
    _0x4d8f75(renderContext);
    ctx.resetTransform();
    ctx.scale(1 / devicePixelRatio, 1 / devicePixelRatio);
    if (game.player) {
      _0x2d9dc4(renderContext);
      _0x4ff66b(renderContext);
      _0x21111c(renderContext);
      _0x518738(renderContext);
      _0x5b26c1(renderContext);
      _0x2ff3d1(renderContext);
    }
    if (game.debug || game.recording || game.replaying) {
      renderDebugOverlay(game);
    }
  }
  function renderDebugOverlay(game) {
    const {
      view
    } = game;
    if (!view) {
      return;
    }
    const {
      font
    } = game.config;
    const ctx = view.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#ffffff";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    let _0x491973 = game.quality * 160;
    const _0x4dea04 = (_0x520648 = "", _0xc64be1 = 0) => {
      if (_0x520648) {
        ctx.strokeText(_0x520648, 10 + _0xc64be1 * 20, _0x491973);
        ctx.fillText(_0x520648, 10 + _0xc64be1 * 20, _0x491973);
      }
      _0x491973 += game.quality * 20;
    };
    _0x4dea04("Update time: " + game.stats.ut.toFixed(1));
    _0x4dea04("AI time: " + game.stats.ait.toFixed(1), 1);
    _0x4dea04("Spawn time: " + game.stats.st.toFixed(1), 1);
    _0x4dea04("Render time: " + game.stats.rt.toFixed(1));
    _0x4dea04("FPS: " + Math.round(game.stats.fps));
    _0x4dea04("Quality: " + game.quality);
    _0x4dea04();
    _0x4dea04("Units: " + game.units.length);
    _0x4dea04("Level: " + game.level.toFixed(3));
    _0x4dea04();
    _0x4dea04("Particles: " + game.particles.length);
    _0x4dea04();
    if (game.recording) {
      _0x4dea04("Recording: " + game.recording.duration().toFixed(1) + " s");
    }
    if (game.replaying) {
      _0x4dea04("Replaying: " + game.replaying.currentlyPlaying().toFixed(1) + "/" + game.replaying.duration().toFixed(1) + " s");
    }
    if (game.debugGraph) {
      const _0x1d8eca = view.width / 3;
      const _0x17818e = 100;
      const path = new Path2D();
      const path2 = new Path2D();
      const path3 = new Path2D();
      const path4 = new Path2D();
      path4.moveTo(0, 0);
      let _0x3c276f = 16.67;
      game.metrics.forEach(metric => {
        _0x3c276f = Math.max(_0x3c276f, metric.frameTime);
      });
      _0x3c276f *= 1.1;
      const _0x5baa4d = _0x1d8eca / (_0xd09b08 - 1);
      const _0x80f60e = _0x17818e / _0x3c276f;
      ctx.save();
      ctx.translate((view.width - _0x1d8eca) / 2, _0x17818e);
      ctx.fillStyle = "#00000033";
      ctx.fillRect(0, -_0x17818e, _0x1d8eca, _0x17818e);
      game.metrics.forEach((metric, index) => {
        path.lineTo(_0x5baa4d * index, -metric.updateTime * _0x80f60e);
        path2.lineTo(_0x5baa4d * index, -metric.renderTime * _0x80f60e);
        path4.lineTo(_0x5baa4d * index, -(metric.updateTime + metric.renderTime) * _0x80f60e);
        path3.lineTo(_0x5baa4d * index, -metric.frameTime * _0x80f60e);
      });
      path4.lineTo(_0x5baa4d * (game.metrics.length - 1), 0);
      ctx.lineWidth = 1;
      const _0x531fc7 = _0x80f60e * 16.67;
      ctx.strokeStyle = "red";
      ctx.beginPath();
      ctx.moveTo(0, -_0x531fc7);
      ctx.lineTo(_0x1d8eca, -_0x531fc7);
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
      game.metrics.forEach((metric, index) => {
        const {
          returns,
          kills
        } = metric.events;
        if (returns || kills) {
          if (kills) {
            ctx.strokeStyle = "#99000040";
          } else {
            ctx.strokeStyle = "#00000040";
          }
          ctx.beginPath();
          ctx.moveTo(_0x5baa4d * index, 0);
          ctx.lineTo(_0x5baa4d * index, -_0x17818e);
          ctx.stroke();
        }
      });
      ctx.restore();
    }
  }
  var LANG_RU = {
    name: "ru",
    lng: {
      yourScore: "ВАШ РЕЗУЛЬТАТ",
      bestScore: "ЛУЧШИЙ РЕЗУЛЬТАТ",
      newText: "НОВЫЙ",
      timePlayed: "ДЛИТЕЛЬНОСТЬ",
      playersKilled: "УБИТО",
      playAgain: "ИГРАТЬ СНОВА",
      menu: "МЕНЮ",
      messages: ["Не знаете как играть?", "Коснитесь экрана для управления", "Пересекайте хвосты противников и не позволяйте им пересечь свой!", "Захватите всю карту"],
      nosupport: "Игра не поддерживается на вашем браузере",
      btnPlay: "ИГРАТЬ",
      placeholderText: "Ваше имя",
      defaultPlayerName: "Игрок",
      bestTxt: "ЛУЧШИЙ",
      killText: "Убит",
      btnContinue: "ПРОДОЛЖИТЬ",
      extraLife: "ДОПОЛНИТЕЛЬНАЯ ЖИЗНЬ!",
      btnSelect: "ВЫБРАТЬ"
    }
  };
  const createApi = (config, _0x51cd14, _0x4e068e, nameManager, schemesManager, achievementsProfile) => {
    let result = {};
    if (Path2D) {
      result.create = view => {
        const {
          arenaSize,
          quadSize,
          borderPoints
        } = config;
        const spatialGrid = new SpatialGrid(arenaSize, arenaSize, quadSize);
        Vec2.space = spatialGrid;
        const vec2 = new Vec2(arenaSize / 2, arenaSize / 2);
        const baseRadius = Math.min(vec2.x, vec2.y) * 0.95;
        const border = Border.circular(vec2, borderPoints, baseRadius);
        const skinManager = _0x4e068e(config, view);
        const game = new Game(config, view, spatialGrid, border, skinManager, null, nameManager, new Controller(view, new KeyboardModeSwitch()), _0x51cd14.lng, schemesManager, achievementsProfile, Math.random());
        skinManager.game = game;
        game.renderer = renderGame;
        result.game = game;
        game.controller.addSet([16, 18, 81, 66, 77], () => {
          game.debug = !game.debug;
        });
        game.controller.addButton(71, () => {
          game.debugGraph = !game.debugGraph;
        });
      };
      result.preparing = true;
      let _0x3ad283 = 0;
      let _0x1e248a;
      const _0x3b8a97 = () => {
        const {
          prepareMult
        } = config;
        let {
          prepareBatchCount
        } = config;
        while (prepareBatchCount--) {
          result.game.update(1000 / 60 * prepareMult + Math.random());
          _0x3ad283++;
        }
      };
      result.prepare = _0x53bf70 => {
        const {
          game: game
        } = result;
        _0x1e248a = setInterval(() => {
          if (nameManager.aviable()) {
            _0x3b8a97();
            if (_0x3ad283 > config.prepareCounter) {
              clearInterval(_0x1e248a);
              result.preparing = false;
              game.visible = true;
              if (!game.looped) {
                game.loop();
              }
              if (_0x53bf70) {
                _0x53bf70();
              }
            }
          }
        }, 0);
      };
      result.start = (name, skin, _0x441c23, _0x190f9e, extraLife) => {
        const game = result.game;
        if (result.preparing) {
          clearInterval(_0x1e248a);
          const time = now();
          while (_0x3ad283 < config.prepareCounter) {
            _0x3b8a97();
            if (now() - time > config.maxPreparingTime) {
              break;
            }
          }
        }
        game.best = _0x441c23;
        game.spawnPlayer(name, skin, extraLife);
        if (extraLife) {
          game.player.addLabel({
            text: LANG_RU.lng.extraLife,
            time: 5000,
            color: "#7fed4c"
          });
        }
        if (_0x190f9e) {
          game.gameOverCallback = _0x190f9e;
        }
        result.preparing = false;
        game.visible = true;
        if (!game.looped) {
          game.loop();
        }
        window.focus();
      };
    } else {
      result = null;
    }
    return result;
  };
  var _0x4214bf;
  var _0x336185;
  var _0x5146fe;
  var _0x45ddd0 = 0;
  var _0x3811d2 = [];
  var _0x120ae0 = _0x4c28c2.__r;
  var _0x2bb42e = _0x4c28c2.diffed;
  var _0xa02686 = _0x4c28c2.__c;
  var _0x3ae5b4 = _0x4c28c2.unmount;
  function getHookState(_0x5bec12, _0x375caa) {
    if (_0x4c28c2.__h) {
      _0x4c28c2.__h(_0x336185, _0x5bec12, _0x45ddd0 || _0x375caa);
    }
    _0x45ddd0 = 0;
    var _0x5d4bf0 = _0x336185.__H ||= {
      __: [],
      __h: []
    };
    if (_0x5bec12 >= _0x5d4bf0.__.length) {
      _0x5d4bf0.__.push({});
    }
    return _0x5d4bf0.__[_0x5bec12];
  }
  function useState(_0x179f26) {
    _0x45ddd0 = 1;
    return useReducer(_0x572c6e, _0x179f26);
  }
  function useReducer(_0x268a16, _0x77450f, _0x573727) {
    var hookState = getHookState(_0x4214bf++, 2);
    hookState.t = _0x268a16;
    if (!hookState.__c) {
      hookState.__ = [_0x573727 ? _0x573727(_0x77450f) : _0x572c6e(undefined, _0x77450f), function (_0x4eeef0) {
        var _0xfd25aa = hookState.t(hookState.__[0], _0x4eeef0);
        if (hookState.__[0] !== _0xfd25aa) {
          hookState.__ = [_0xfd25aa, hookState.__[1]];
          hookState.__c.setState({});
        }
      }];
      hookState.__c = _0x336185;
    }
    return hookState.__;
  }
  function useEffect(_0x525b68, _0x28f13b) {
    var hookState = getHookState(_0x4214bf++, 3);
    if (!_0x4c28c2.__s && _0xccaa6c(hookState.__H, _0x28f13b)) {
      hookState.__ = _0x525b68;
      hookState.__H = _0x28f13b;
      _0x336185.__H.__h.push(hookState);
    }
  }
  function useRef(_0x31b960) {
    _0x45ddd0 = 5;
    return useMemo(function () {
      return {
        current: _0x31b960
      };
    }, []);
  }
  function useMemo(_0x56caf9, _0x481e03) {
    var hookState = getHookState(_0x4214bf++, 7);
    if (_0xccaa6c(hookState.__H, _0x481e03)) {
      hookState.__ = _0x56caf9();
      hookState.__H = _0x481e03;
      hookState.__h = _0x56caf9;
    }
    return hookState.__;
  }
  function useContext(LanguageContext) {
    var _0x243c65 = _0x336185.context[LanguageContext.__c];
    var hookState = getHookState(_0x4214bf++, 9);
    hookState.__c = LanguageContext;
    if (_0x243c65) {
      if (hookState.__ == null) {
        hookState.__ = true;
        _0x243c65.sub(_0x336185);
      }
      return _0x243c65.props.value;
    } else {
      return LanguageContext.__;
    }
  }
  function _0x3d47c1() {
    _0x3811d2.some(function (item) {
      if (item.__P) {
        try {
          item.__H.__h.forEach(_0x4f712f);
          item.__H.__h.forEach(_0x4d2f5f);
          item.__H.__h = [];
        } catch (_0x17c90f) {
          item.__H.__h = [];
          _0x4c28c2.__e(_0x17c90f, item.__v);
          return true;
        }
      }
    });
    _0x3811d2 = [];
  }
  _0x4c28c2.__r = function (_0x1baac8) {
    if (_0x120ae0) {
      _0x120ae0(_0x1baac8);
    }
    _0x4214bf = 0;
    var __H = (_0x336185 = _0x1baac8.__c).__H;
    if (__H) {
      __H.__h.forEach(_0x4f712f);
      __H.__h.forEach(_0x4d2f5f);
      __H.__h = [];
    }
  };
  _0x4c28c2.diffed = function (_0x293972) {
    if (_0x2bb42e) {
      _0x2bb42e(_0x293972);
    }
    var __c = _0x293972.__c;
    if (__c && __c.__H && __c.__H.__h.length) {
      if (_0x3811d2.push(__c) === 1 || _0x5146fe !== _0x4c28c2.requestAnimationFrame) {
        ((_0x5146fe = _0x4c28c2.requestAnimationFrame) || function (_0x1a6409) {
          var _0x2ecb0f;
          function _0x711e95() {
            clearTimeout(_0xb55311);
            if (_0x22bd21) {
              cancelAnimationFrame(_0x2ecb0f);
            }
            setTimeout(_0x1a6409);
          }
          var _0xb55311 = setTimeout(_0x711e95, 100);
          if (_0x22bd21) {
            _0x2ecb0f = requestAnimationFrame(_0x711e95);
          }
        })(_0x3d47c1);
      }
    }
  };
  _0x4c28c2.__c = function (_0x47bb76, _0x1ced3b) {
    _0x1ced3b.some(function (item) {
      try {
        item.__h.forEach(_0x4f712f);
        item.__h = item.__h.filter(function (item) {
          return !item.__ || _0x4d2f5f(item);
        });
      } catch (_0x1bd124) {
        _0x1ced3b.some(function (item) {
          item.__h &&= [];
        });
        _0x1ced3b = [];
        _0x4c28c2.__e(_0x1bd124, item.__v);
      }
    });
    if (_0xa02686) {
      _0xa02686(_0x47bb76, _0x1ced3b);
    }
  };
  _0x4c28c2.unmount = function (_0x24219e) {
    if (_0x3ae5b4) {
      _0x3ae5b4(_0x24219e);
    }
    var __c = _0x24219e.__c;
    if (__c && __c.__H) {
      try {
        __c.__H.__.forEach(_0x4f712f);
      } catch (_0x15236f) {
        _0x4c28c2.__e(_0x15236f, __c.__v);
      }
    }
  };
  var _0x22bd21 = typeof requestAnimationFrame == "function";
  function _0x4f712f(_0x4727c2) {
    if (typeof _0x4727c2.u == "function") {
      _0x4727c2.u();
    }
  }
  function _0x4d2f5f(item) {
    item.u = item.__();
  }
  function _0xccaa6c(__H, _0x66baa3) {
    return !__H || __H.length !== _0x66baa3.length || _0x66baa3.some(function (item, index) {
      return item !== __H[index];
    });
  }
  function _0x572c6e(_0x3b7587, _0x30e5f2) {
    if (typeof _0x30e5f2 == "function") {
      return _0x30e5f2(_0x3b7587);
    } else {
      return _0x30e5f2;
    }
  }
  var _0x2aa187 = Object.assign;
  const LANGUAGES = [];
  const setLanguages = result => {
    const {
      en
    } = result;
    Object.entries(result).forEach(([_0x481b18, _0x2f0d2c]) => {
      LANGUAGES.push({
        name: _0x481b18,
        lng: _0x2aa187(_0x2aa187({}, en), _0x2f0d2c)
      });
    });
  };
  const _0x4d828b = (navigator.languages && navigator.languages.length && navigator.languages[0] || navigator.userLanguage || navigator.language || navigator.browserLanguage || "en").substr(0, 2).toLowerCase();
  const getLanguage = () => LANGUAGES.find(item => item.name === _0x4d828b) || LANGUAGES.find(item => item.name === "en");
  const LanguageContext = createContext();
  const _0x313732 = ({
    messages
  }) => {
    const [_0x2eef6d, _0x3e00f1] = useState(0);
    useEffect(() => {
      const _0x88d3da = setInterval(() => _0x3e00f1(_0x39ba1e => (_0x39ba1e + 1) % messages.length), 3000);
      return () => clearInterval(_0x88d3da);
    }, []);
    return createElement("div", {
      class: "tips"
    }, createElement("div", {
      class: "tip",
      key: _0x2eef6d
    }, messages[_0x2eef6d]));
  };
  const _0x449096 = ({
    config,
    apply
  }) => {
    if (!config) {
      return null;
    }
    return createElement("form", {
      class: "config",
      onSubmit: apply
    }, Object.entries(config).map(([_0x14b1f7, _0x22ff59]) => createElement("label", {
      style: "color: white;"
    }, _0x14b1f7, "\xA0", createElement("input", {
      type: "text",
      id: _0x14b1f7,
      name: _0x14b1f7,
      value: _0x22ff59,
      autocomplete: "off",
      maxlength: "10"
    }))), createElement("button", {
      id: "apply",
      name: "apply",
      class: "yellow"
    }, "Применить"));
  };
  const _0x613dc8 = ({
    api,
    view,
    setPreparing,
    setState
  }) => {
    const _0x4dd059 = api && api.game && api.game.config;
    const _0x307f95 = event => {
      event.preventDefault();
      Object.keys(_0x4dd059).forEach(item => {
        const elementById = document.getElementById(item);
        if (elementById) {
          const _0x5c8252 = parseFloat(elementById.value);
          _0x4dd059[item] = _0x5c8252 !== _0x5c8252 ? elementById.value : _0x5c8252;
        }
      });
      api.game.stopped = true;
      api.create(view.current);
      setPreparing(true);
      api.prepare(() => setPreparing(false));
      setState("menu");
    };
    return createElement("div", {
      class: "uibox"
    }, createElement("div", {
      class: "logo"
    }, createElement("img", {
      src: "assets/images/logo.png"
    })), createElement(_0x449096, {
      config: _0x4dd059,
      apply: _0x307f95
    }));
  };
  const _0x11635f = ({
    setLanguage
  }) => {
    const _0x3ae834 = useContext(LanguageContext);
    const _0x1df60f = LANGUAGES.map((item, index) => createElement("li", {
      class: item === _0x3ae834 ? "active" : "",
      onClick: () => setLanguage(LANGUAGES[index])
    }, item.name.toUpperCase()));
    return createElement("div", {
      id: "footer"
    }, createElement("ul", {
      id: "lng"
    }, _0x1df60f));
  };
  const _0x2b87a7 = ({
    nickName,
    setNickName,
    playable,
    preparing,
    start,
    route,
    provider,
    setLanguage,
    api,
    skin
  }) => {
    const {
      lng
    } = useContext(LanguageContext);
    const _0x7e5b2d = api && api.game && api.game.config;
    const _0x582227 = !!api;
    const _0x3e6418 = _0x474014 => setNickName(_0x474014.target.value);
    const _0x56e19e = _0x582227;
    const _0xe04ee3 = event => {
      event.preventDefault();
      if (_0x56e19e) {
        start();
      }
    };
    useEffect(() => {
      if (window.ads && window.ads.showAds) {
        window.ads.showAds();
      }
    }, []);
    return createElement(Fragment, null, createElement("div", {
      id: "left_side"
    }), createElement("div", {
      class: "uibox"
    }, createElement("div", {
      class: "logo"
    }, createElement("img", {
      src: "assets/images/logo.png"
    })), createElement(_0x313732, {
      messages: lng.messages
    }), createElement("div", {
      class: "play"
    }, createElement("input", {
      type: "text",
      id: "nick",
      name: "nick",
      value: nickName,
      autocomplete: "off",
      placeholder: lng.placeholderText,
      maxlength: "12",
      oninput: _0x3e6418
    }), createElement("button", {
      id: "play",
      name: "play",
      class: "yellow" + (_0x56e19e ? "" : " disabled"),
      onClick: _0xe04ee3
    }, lng.btnPlay), createElement("button", {
      id: "skins",
      name: "skins",
      class: "orange noPadding",
      onClick: () => route("skins")
    }, createElement("img", {
      width: "30",
      height: "30",
      src: "assets/skins/select/" + (skin || "noskin").toLowerCase().replace(/\s+/g, "") + ".png"
    }))), !_0x582227 && createElement("p", {
      class: "notsupported"
    }, lng.nosupport)), createElement("div", {
      id: "right_side"
    }));
  };
  const _0x5389c6 = ({
    nickName,
    bestScore,
    setBestScore,
    setResults,
    setPreparing,
    api,
    route,
    skin,
    lastPercent
  }) => {
    useEffect(() => {
      const _0x545eda = _0x3ee818 => {
        if (_0x3ee818.newBest) {
          setBestScore(_0x3ee818.score);
        }
        setResults(_0x3ee818);
        route("results");
      };
      if (window.ads && window.ads.hideAds) {
        window.ads.hideAds();
      }
      api.game.language = useContext(LanguageContext).lng;
      let skin2 = skin;
      if (skin2 === "default" || skin2 === "No skin") {
        skin2 = "";
      }
      api.start(nickName, skin2, bestScore, _0x545eda, lastPercent);
      const {
        dataLayer
      } = window;
      if (dataLayer) {
        dataLayer.push({
          event: "levelStart",
          publisher: "CONNECT2MEDIA",
          productKey: "paper2IO"
        });
      }
      setPreparing(false);
    }, []);
    return null;
  };
  const _0x665b7b = ({
    bestScore,
    results,
    start,
    route,
    provider,
    country = undefined
  }) => {
    const _0xb87c1f = () => route("menu");
    const {
      lng
    } = useContext(LanguageContext);
    const {
      dataLayer
    } = window;
    if (dataLayer) {
      dataLayer.push({
        event: "levelCompletion",
        publisher: "CONNECT2MEDIA",
        productKey: "paper2IO"
      });
    }
    useEffect(() => {
      if (window.ads && window.ads.showAds) {
        window.ads.showAds();
      }
    }, []);
    return createElement(Fragment, null, createElement("div", {
      id: "left_side"
    }), createElement("div", {
      class: "uibox"
    }, createElement("div", {
      class: "logo"
    }, createElement("img", {
      src: "assets/images/logo.png"
    })), createElement("div", {
      class: "nav"
    }, createElement("button", {
      class: "yellow slider-5",
      id: "menu",
      onClick: _0xb87c1f
    }, lng.btnContinue)), createElement("div", {
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
    }, results.score.toFixed(2) + "%"), createElement("div", {
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
  };
  const _0x16897a = ({
    name
  }) => {
    return createElement("div", {
      class: "skin"
    }, createElement("div", {
      class: "skin-view"
    }, createElement("h3", null, name), createElement("img", {
      src: "assets/skins/select/" + name.toLowerCase().replace(/\s+/g, "") + ".png"
    })));
  };
  const _0x226e7e = ({
    skins,
    skin,
    menu,
    setSkin
  }) => {
    const {
      lng
    } = useContext(LanguageContext);
    const index = skins.findIndex(skin2 => skin2.name === skin);
    const [_0x52fa22, _0x2309d4] = useState(index > 0 ? index : 0);
    const _0xd186be = _0xfc8857 => {
      if (_0xfc8857 >= 0 && _0xfc8857 < skins.length) {
        _0x2309d4(_0xfc8857);
        setSkin(skins[_0xfc8857].name);
      }
    };
    return createElement("div", {
      class: "skinbox"
    }, createElement("div", {
      class: "skins-container"
    }, createElement("button", {
      name: "left",
      class: "orange",
      onClick: () => _0xd186be(_0x52fa22 - 1)
    }, "<"), createElement(_0x16897a, {
      name: skins[_0x52fa22].name
    }), createElement("button", {
      name: "right",
      class: "orange",
      onClick: () => _0xd186be(_0x52fa22 + 1)
    }, ">")), createElement("div", {
      class: "nav"
    }, createElement("button", {
      class: "green",
      onClick: menu
    }, lng.btnSelect)));
  };
  const _0x33ae25 = ({
    skins,
    skin,
    route,
    setSkin
  }) => {
    const _0x511672 = () => route("menu");
    useEffect(() => {
      const elementById = document.getElementById("paperio-site_multisize");
      if (elementById) {
        elementById.style.display = "none";
      }
    }, []);
    return createElement(Fragment, null, createElement("div", {
      id: "left_side"
    }), createElement("div", {
      class: "uibox"
    }, createElement("div", {
      class: "logo"
    }, createElement("img", {
      src: "assets/images/logo.png"
    })), createElement(_0x226e7e, {
      skins: [{
        name: "No skin"
      }].concat(skins),
      menu: _0x511672,
      setSkin: setSkin,
      skin: skin
    })), createElement("div", {
      id: "right_side"
    }));
  };
  const App = ({
    api,
    storage,
    ads,
    provider,
    skins,
    mode = "common"
  }) => {
    const _0x2a1468 = useRef(null);
    const [_0xae90a5, _0xe9f489] = useState(false);
    const [_0x3c010f, _0x4213e6] = useState("menu");
    const [_0x7671bd, _0x4023ac] = useState(true);
    const [_0x293a25, _0x5c440b] = useState(getLanguage());
    const [_0x50dae7, _0x536f0c] = useState(null);
    const _0x1cb8f8 = "paper.io.storage";
    const _0x16b845 = storage.getJSON(_0x1cb8f8) || {};
    const [_0x38110e, _0x495989] = useState(_0x16b845.nickName || "");
    const [_0x43a473, _0x421708] = useState(_0x16b845.bestScore || 0);
    const [_0x4f80f0, _0x33ebdc] = useState(_0x16b845.skin || "");
    const _0x48fc9f = {
      expires: 365
    };
    if (_0x38110e !== _0x16b845.nickName || _0x43a473 !== _0x16b845.bestScore || _0x4f80f0 !== _0x16b845.skin) {
      storage.set(_0x1cb8f8, {
        nickName: _0x38110e,
        bestScore: _0x43a473,
        skin: _0x4f80f0
      }, _0x48fc9f);
    }
    useEffect(() => {
      if (api) {
        api.create(_0x2a1468.current);
        api.prepare(() => _0x4023ac(false));
        _0xe9f489(true);
      }
    }, []);
    api.startGame = () => {
      const elementById = document.getElementById("overlay");
      if (elementById) {
        elementById.style.display = "none";
      }
      if (api && api.game) {
        api.game.visible = true;
      }
      _0x4213e6("game");
    };
    const _0x28fd93 = () => {
      const elementById = document.getElementById("overlay");
      if (elementById) {
        elementById.style.display = "block";
        elementById.style.animation = "fadein 500ms";
      }
      if (api && api.game) {
        api.game.visible = false;
      }
      window.ShowPreroll();
    };
    return createElement(Fragment, null, createElement("canvas", {
      class: _0x3c010f === "game" || _0x7671bd ? "" : "fadein",
      id: "view",
      ref: _0x2a1468
    }), _0x3c010f !== "game" && createElement("div", {
      id: "ui_overlay"
    }), createElement(LanguageContext.Provider, {
      value: _0x293a25
    }, createElement("div", {
      id: "ui",
      class: _0x3c010f === "game" ? "hide" : ""
    }, _0x3c010f === "menu" && createElement(_0x2b87a7, {
      nickName: _0x38110e,
      setNickName: _0x495989,
      playable: _0xae90a5,
      preparing: _0x7671bd,
      start: _0x28fd93,
      route: _0x4213e6,
      provider: provider,
      setLanguage: _0x5c440b,
      api: api,
      setState: _0x4213e6,
      skins: skins,
      skin: _0x4f80f0
    }), _0x3c010f === "game" && createElement(_0x5389c6, {
      nickName: _0x38110e,
      bestScore: _0x43a473,
      setBestScore: _0x421708,
      setResults: _0x536f0c,
      setPreparing: _0x4023ac,
      api: api,
      route: _0x4213e6,
      skin: _0x4f80f0
    }), _0x3c010f === "results" && createElement(_0x665b7b, {
      bestScore: _0x43a473,
      results: _0x50dae7,
      start: _0x28fd93,
      route: _0x4213e6,
      provider: provider
    }), _0x3c010f === "config" && createElement(_0x613dc8, {
      api: api,
      view: _0x2a1468,
      setPreparing: _0x4023ac,
      setState: _0x4213e6
    }), _0x3c010f === "skins" && createElement(_0x33ae25, {
      skins: skins,
      skin: _0x4f80f0,
      route: _0x4213e6,
      setSkin: _0x33ebdc
    })), _0x3c010f !== "game" && createElement(_0x11635f, {
      setLanguage: _0x5c440b
    })), createElement("div", {
      id: "overlay"
    }));
  };
  let DEFAULT_CONFIG = {
    arenaSize: 2000,
    quadSize: 20,
    borderPoints: 300,
    prepareMult: 3,
    prepareBatchCount: 5,
    maxPreparingTime: 500,
    baseRadius: 30,
    baseCount: 50,
    minScale: 3,
    maxScale: 4.5,
    observerScale: 2.5,
    trackWidth: 8,
    unitSpeed: 90,
    spawnTimeout: 3000,
    prepareCounter: 6000,
    prepareAcceleration: 30,
    baseHeight: 2,
    botsCount: 15,
    botLevel: -1,
    startBotLevel: 0.1,
    noPlayerBotLevel: 0.5,
    nearPlayerBotSpawnCount: 1,
    followKiller: true,
    selfKillDelay: 1000,
    enemyKillDelay: 2000,
    arenaColor: "#e7fff4",
    borderColor: "#88a799",
    backgroundTopColor: "#2d6998",
    backgroundBottomColor: "#81faff",
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
  };
  var PALETTE = ["#3b5998", "#8b9dc3", "#2a4d69", "#4b86b4", "#8dbdff", "#64a1f4", "#3b7dd8", "#843b62", "#8874a3", "#8d5524", "#c68642", "#f1c27d", "#f77f00", "#fcbf49", "#ffe066", "#65737e", "#a7adba", "#4a7c59", "#1a936f", "#88d498", "#2a9d8f", "#68b0ab", "#99e550", "#6abe30", "#4b692f", "#8f974a", "#8a6f30", "#524b24", "#d62828", "#fe4a49", "#ed6a5a", "#ff3377", "#ff77aa", "#ff99cc", "#b23a48", "#fcb9b2"];
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
  class ColoredPool extends AssetPool {
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
  class ClassicSkinPool extends AssetPool {
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
  class SkinManager extends SkinManagerBase {
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
  const BOT_NAMES_RAW = "DeadMorose\nold_demon\nfox\nDeFreeZe\nGoSeek\nKeyplex\nDarkfury\nFunnyway\nBLACK_PRINCE\n[BigBoss]ShadiBoo\nDizzer\nKARATEL\nHowlux\nLight_Soul\n2fab4u\nBoOT\nMrKat2017\nSkulL\nCmeTano4Ka\nflash\nh1me3ra\nHoward\ni_Pro\nred_devil\nbest_of_the_best\nblow_crazy \nface_of_vengeance\nGlambit \nMASTER_GRIF\nMr.ByBlIk\nn1ce_DayZ\nRantom\nAbove Daemons\ncompany_THE_Best\nDanie\ndarklight\nDaxmaut\ndiablo\ngreat_man\nkiller_innothing\nNix\nValett\nDarkAngelKael\nduelist\ni_zadrot\nMonster_Energy\nMr.Winston\nRaindrops\nSumerbraum\nTermit\nTITAN\nWOOOlf\nAVSTRAL\nBadLike\nBuri\ncop_zombie\ndestroyer_for_us\nEKEN\nEksnet\nFrostorik\nghost_of_fear\nHotzarzim\nj111m\nKael\nKikET\n4CHAN\nPIKABU\n9GAG\naustralia\naustria\nayylmao\nbait\nbangladesh\nbelgium\nbosnia\nbotswana\nbrazil\nbulgaria\ncambodia\ncanada\nchile\nchina\ncia\nconfederate\ncroatia\ndenmark\nea\nearth\nestonia\neuropeanunion\nfacepunch\nfeminism\nfinland\nfrance\ngermanempire\ngermany\ngreece\nhongkong\nhungary\nindia\nindiana\nindonesia\niran\niraq\nireland\nitaly\njamaica\njapan\nkc\nlatvia\nlithuania\nluxembourg\nmaldivas\nmatriarchy\nmexico\nmoon\nnazi\nnetherlands\nnigeria\nnorthkorea\nnorway\norigin\npakistan\npatriarchy\nperu\npewdiepie\npiccolo\npoland\nportugal\nprodota\nqingdynasty\nquebec\nreddit\nrussia\nsanik\nsatanist\nsealand\nsouthkorea\nspain\nstalin\nsteam\nsweden\nswitzerland\ntaiwan\ntexas\nthailand\ntsaristrussia\ntumblr\nukraine\nunitedkingdom\nusa\nussr\nvinesauce\nyaranaika\ntumblr\nhongkong\nKillerGamer\nLimuzin\nmage\nMCGaMeR\nMr_Het\nNadornsMonsters\nnero\noutcaster\nSteepCat\nTUCA\nurban_hunter\nvirtual_lord\nwertyi\nWinstonLight\nWoJDoo\nArtemad\nClydeKautz\nBarney\nRhodaPing\nSharlaPropes\nNanciTyner\nIlaWorm\nSebastianRawlinson\nCraigFlury\nEstebanBrehm\nDeberaVancuren\nTabithaOlivieri\nTrishaKimball\nMilagrosHyler\nCinderellaGerson\nFranBaldridge\nMelisaBrock\nGaynelleSimmonds\nEttaMirabella\nLaveraLabrecque\nBudNormand\nEliasSherwood\nJackpot\nSensation\nChuck\nSoots\nTheSaint\nICEman\nMiracleSnoopy\nBahartet\nBiotary\nHammer85\nBizcarit\nBlackenta\nBurkelstrin\nBurntSeen\nChariana\ngoldfinger\nConfidentHelp\nCopiconc\nDemocoman\nGaartely\nGenantro\nGlitzMcGenius\nJuliatu\nKalstaxi\nKeymatr\nKredicon\nLuvGurly\nMasteranca\nMediaBolt\nMeemuset\nMonsterInformer\nOccuiffu\nOnnitall\nRodeonevedo\nSandBlondeFully\nShipnease\nSlypectle\nSpinfonexu\nAdocarli\nAnglosi\nSimba\nAuetonbr\nBanshfeli\nQWERT\nBezequaci\nBizarrebobw\nBizarrewo\nBlenetra\nBootXboxStein\nBradleyFinest\nCeticRaven\nChunkyKlug\nDailiesHigh\nDravencybe\nFarerSaiyan\nGabring\nHalcytech\nHeminepe\nHeraldhama\nImagene\nLolandexte\nLucebayn\nMatroner\nMediumbben\nMofficanki\nNateinvelo\nTIMBERLAKE\nNessDiddy\nPlatinumTrippin\ntheviking\nPlusedge\nRaetstalyda\nJustinStromberg\nRebecaSenn\nRoxy\nNeil\nMaria\nWarren\nGrace\nWilliam\nJane\nVanessa\nLisa\nStephanie\nDidi\nBoris\nRuth\nLeonard\nJack\nCaroline\nSebastian\nConnor\nIan\nTOMAS\nSue\nFOX\nDylan\nLisa\nGrace\nJabbaDabba\nJennifer\nBenjamin\nPiPPa\nSteven\nJoe\nKNine\nKevin\nCaroline\nMcFlurry\nKatherine\nLeah\nIrene\nOwen\nUna\nGabrielleSlater\nAmyFisher\nAngelaGrant\nAlisonOgden\nDeadshot\nNitro\nTrevorBlack\nKatherinePullman\nOliverMacDonald\nAvaVaughan\nJenniferWhite\nWarrenPeters\nLeahCameron\nAlisonBerry\nKeithBuckland\nJulianMackay\nNatalieSanderson\nviZion\nJoshuaPeake\nKeithDowd\nHotdog\nJamesLambert\nJanBond\nColinMarshall\nJasonRees\nFRED\nJaneHughes\nLeonardOliver\nHarryAnderson\nGraceSmith\nDeirdreJones\nAudreySpringer\nEllaGray\nDominicHamilton\nKeithBlake\nRuthJackson\nMollyHudson\nSophieBerry\nCarolineLyman\nEmmaHudson\nJoeLyman\nOliviaPiper\nChristopherAllan\nMariaKing\nPippaSlater\nSarahJohnston\nRyanWhite\nJackHill\nWilliamMackay\nBenjaminAlsop\nAmandaRoberts\nThomasParsons\nLiamMcGrath\nJanHenderson\nSoniaChapman\nWilliam\nLily\nPeter\nKeith\nIsaac\nLeah\nMadeleine\nKaren\nFrank\nAlan\nMichael\nRachel\nDominic\nPaul\nNicola\nEmily\nTim\nbigBEN\nCohen\nGood\nFrancis\nOdom\nGreen\nCain\nTrevino\nLucero\nAshley\nigloo\nduffer\nloaded\nsickness\ngreeting\nlonely\nbafflement\ntrusty\nalteration\nevil\nsolva\npenumbra\ndauphine\nalluring\nlilly\nstinchar\ncubic\nblackbrook\nrebuff\ninclined\nlyon\nsquash\nunique\nlyne\nchewy\nmasticate\nmagnet\nknit\nindolent\nsevere\nfestus\ntrain\nincisionKim\nBean\nAguilar\nErnesto\nCurtis\nCortez\nTyshawn\nBrady\nBeckett\nXavier\nCason\nBryson\nSheldon\nPierce\nDeshawn\nAndy\nAaron\nArmando\nKarson\nK9\nNadia\nJovan\nErin\nTerry\nGrayson\nCelia\nAlexzander\nCannon\nJoey\nStella\nGracie\nKFCLOVER\nChico\nPrince\nMocha\nScooter\nChester\nCoco\nDusty\nZoe\nSocks\njefferson\nignore\nalladale\nvirtue\nprovided\ncohesive\nbullfinche\ncomet\ndip\nzipper\npostulate\nlick\nbashful\npascals\nrudy\ngloaming\ncashew\nmixcloud\ntraumatic\nprostate\npeas\nmelon\nbulbous\ngavel\nnumnah\nnavel\nriver\nsaskatoon\ncaused\nhardy\npare\nfemale\nvolunteer\nspeck\nyears\nvalid\narmpit\nbobby\nbolham\ngoogle\nbrennand\npastry\nweapon\ncuillin\ndescent\neasier\nmore\nrisedale\ngoggles\ncute\nmagellanic\nrenal\nzunyi\nEveryPrivate\nChipmunkThreat\nLeafyForefoot\nSebastianExxon\nHuckFaisalabad\nWheelchairHadar\nBulimiaMilk\nEiderStallion\nMoronicBuckinghamshire\nPayBiff\nHillsboroughEnvelope\nAllianzRhapsody\nArseEnteral\nBoronRadiant\nArchiveUntrue\nPlasticSpeech\nOfficerWiltshire\nBungBuzzard\nMoscowStellar\nTrialsHearty\nModelHorse\nBootsGrimacing\nShiraMosedale\nLeopardClapper\nSkatersStars\nCaramelizeStraws\nAngolanVinomadefied\nBatterySiemens\nHedgeThompson\nLukaIcing\nMimosaBrunswick\nTinForgetful\nHumberHook\nSeagullTrump\nBookerTouring\nSugarWarn\nCustardsStructure\nRudyBarium\nElectrolyteDisfigured\nBlighterPhysicist\nAntoniadiAtom\nPachaRule\nMaltyPatches\nHonoluluSwedish\nGemGleaming\nAssociatedThose\nAfterCointreau\nEyesPierre\nStewartGels\nAretePuppy\nFullscreenTrophic\nMailWillow\nScaupFrosty\nZaraBipedal\nCheapScafell\nDevonYolk\nSkegCohesive\nCricketBashful\nCocoaPuck\nDecathlonIschemic\nOftSnottor\nCheepNewlyn\nSwimGrill\nBaubleSymbolic\nAstronomerSpam\nVarlotLealt\nSensorSquamish\nKeyTechnetium\nCrummyQuirky\nVinePlane\nWaterskiBlind\nOrdinateCrown\nSpotTense\nFumeVine\nGlasswareCherries\nPhenomenonWillied\nPappusWazzed\nFilterSpace\nHypnosisSociable\nGaffEnder\nTordaHelpless\nResearchMat\nAmpereHeptagon\nEclipseBaldy\nLliediDiopside\nRockersGatcombe\nSabineEssential\nPlutoAbsurd\nTagTestify\nForswearJosie\nEquuleusFalter\nChewieFluther\nWombYakama\nHinderHighland\nBiteSeptum\nRifleGym\nJuneauInboard\nTroubadourChillingwood\nNeogeneLecturer\nSullivanStencils\nCheesecakePit\nClumpUnhelpful\nCheckBig\nLollyPumpkin\nCitrusyCountless\nVarunaRemy\nDivergentOils\nFallingTalisker\nBlackwaterNifty\nBrinkworthFranklyn\nFreddyPostman\nClumperPoke\nSlopeTokahee\nStencilsHume\nJijiKey\nAdeptStores\nUnicodeIgneous\nMeatyNut\nMaskSpark\nForegoingMoist\nEthicalConfident\nOblongataIsraeli\nGreenAle\nFibulaJoss\nShrugMinge\nFlowsWhispers\nActiveGlissade\nExaltedSpaghetti\nMeerkatMatch\nCouldHoff\nYawnObtuse\nCrazyUnknown\nPlanemoTyler\nCalderaBeans\nSoundcloudJapan\nSeveralGalled\nStarbucksDomain\nEdibleGlazier\nResourcesCapital\nNitrogenBella\nFlavorfulProtoplanet\nTeachSqueeze\nMeiosisSiphon\nTelephoneMarl\nTrundleRitec\nTheodoreShamrock\nNoirMelody\nVanillaArmenian\nHonkExoticism\nMandibleSepsis\nVenomousSignal\nManukaEval\nLooksLeaves\nFriedInto\nBlowTalented\nStubbsHeadphones\nWigeonNewcastle\nLoadHamster\nPinkieSaint\nEuphoniumRedundant\nSabdenRoad\nSuccessApache\nPateraCitric\nBalnagownQuiver\nGambianHartford\nRidingNostalgic\nAmbushFlex\nBretonCommon\nSpot!Fine\nPlaintivePride\nDiphthongPraline\nShearraInflate\nWoldsLennon\nSordiniMeathead\nSordCegidog\nSelfiesWeigh\nOrganVile\nPinchWeixin\nSassyFlag\nAlberniDart\nBowenImmense\nRulerFocus\nMaggotMine\nRegulateInventions\nMeshAlbite\nPoxArabella\nTikiFredericton\nNeedleDiapir\nGeneBlurt\nBindyFollowed\nMongolianTurtle\nSenseProfess\nFoldingHacking\nArsonistClipping\nKerryBonnie\nMaliciousMilitary\nMountainFrivolous\nCannonCog\nCordFlapping\nSnickerIndonesian\ndome\nking\nohio\nstandard\nfustilarian\nnative\nsupply\namherst\ninitial\ntowel\npumpion\nperfect\nmouldy\nflasks\ncarina\nduchess\ncrackers\nexciting\nhole\nwiggle\ngreat\nben\npoop\notis\npolite\nslapping\notherwise\ngrilled\nwes\nsummary\nnice\nbasketball\nstarbolins\nbaby\nbooking\nrhubarb\nperson\nshooter\nbounded\nnorthamptonshire\nsyllable\ngreenish\nuptight\ntweed\nthe\nreeky\nlathered\nascension\nobtain\nnagging\nchallenger\nsecret\nworcester\nlangley\npolly\nurinal\ntrusting\nbeverley\nfrankie\ndartmoor\nmash\ngillie\nmethodist\ngalaxy\nmozart\nbarrage\nspoticus\nscheduled\neel\npanel\nflapjack\nchemist\nalbert\nmetacarpus\ndense\nbleeding\nfixation\nniggles\ncamel\nrosin\ncommunity\nleash\ndulais\nladder\nlee\nindices\nyou\neducation\ndumplings\nbid\nprince\nartiste\navocet\nburns\nbarney\nmanaged\nburritos\npeduncle\npaltry\nequator\nsubmerge\nexpected\nfags\nperl\nclueless\ncartier\nwombled\nbearded\nkalman\ntrees\npink\naddie\ntod\nusd";
  var BOT_NAMES = BOT_NAMES_RAW.split("\n");
  var _0xb5f7a4 = Object.assign;
  console.log("Version: A6 2020-10-14T10:51:36.392Z");
  const CONFIG = _0xb5f7a4(_0xb5f7a4({}, DEFAULT_CONFIG), {
    followKiller: true,
    selfKillDelay: 1000,
    enemyKillDelay: 2000
  });
  const _0x5d6a09 = fetch("assets/languages.json").then(result => result.json());
  const _0x1632c3 = fetch("assets/skins/skins.json").then(result => result.json());
  Promise.all([_0x5d6a09, _0x1632c3]).then(([result, result2]) => {
    setLanguages(result);
    const _0x57ada2 = (config, view) => {
      let coloredPool = new ColoredPool(config);
      let classicSkinPool = new ClassicSkinPool(config, view, "assets/skins/", result2);
      const skinManager = new SkinManager(coloredPool, classicSkinPool, 1);
      return skinManager;
    };
    const schemesManager = new SchemesManager(ClassicScoreScheme);
    const achievementStore = new AchievementStore([]);
    achievementStore.load();
    const api = createApi(CONFIG, getLanguage(), _0x57ada2, new NamePool(BOT_NAMES, Math.random()), schemesManager, achievementStore);
    window.paperio2api = api;
    render(createElement(App, {
      api: api,
      storage: Cookies,
      skins: result2
    }), document.getElementById("game"));
  });
  window.__paperio = {
    Game,
    Unit,
    Player,
    Bot,
    Vec2,
    Polygon,
    StateMachine,
    BOT_STATES,
    DEFAULT_CONFIG,
    CONFIG,
    createRng
  };
})();