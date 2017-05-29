(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.minisolvers = global.minisolvers || {})));
}(this, (function (exports) { 'use strict';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var libminisat = createCommonjsModule(function (module) {
  var _b2;_b2 || (_b2 = eval("(function() { try { return Module || {} } catch(e) { return {} } })()"));var g = {},
      k;for (k in _b2) {
    _b2.hasOwnProperty(k) && (g[k] = _b2[k]);
  }var m = !1,
      p = !1,
      q = !1,
      aa = !1;
  if (_b2.ENVIRONMENT) {
    if ("WEB" === _b2.ENVIRONMENT) m = !0;else if ("WORKER" === _b2.ENVIRONMENT) p = !0;else if ("NODE" === _b2.ENVIRONMENT) q = !0;else if ("SHELL" === _b2.ENVIRONMENT) aa = !0;else throw Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.");
  } else m = "object" === (typeof window === "undefined" ? "undefined" : _typeof(window)), p = "function" === typeof importScripts, q = "object" === (typeof process === "undefined" ? "undefined" : _typeof(process)) && "function" === typeof require && !m && !p, aa = !m && !q && !p;
  if (q) {
    _b2.print || (_b2.print = console.log);_b2.printErr || (_b2.printErr = console.warn);var ba, ca;_b2.read = function (a, c) {
      ba || (ba = require("fs"));ca || (ca = require("path"));a = ca.normalize(a);var d = ba.readFileSync(a);return c ? d : d.toString();
    };_b2.readBinary = function (a) {
      a = _b2.read(a, !0);a.buffer || (a = new Uint8Array(a));assert(a.buffer);return a;
    };_b2.load = function (a) {
      da(read(a));
    };_b2.thisProgram || (_b2.thisProgram = 1 < process.argv.length ? process.argv[1].replace(/\\/g, "/") : "unknown-program");_b2.arguments = process.argv.slice(2);"undefined" !== 'object' && (module.exports = _b2);process.on("uncaughtException", function (a) {
      if (!(a instanceof r)) throw a;
    });_b2.inspect = function () {
      return "[Emscripten Module object]";
    };
  } else if (aa) _b2.print || (_b2.print = print), "undefined" != typeof printErr && (_b2.printErr = printErr), _b2.read = "undefined" != typeof read ? read : function () {
    throw "no read() available";
  }, _b2.readBinary = function (a) {
    if ("function" === typeof readbuffer) return new Uint8Array(readbuffer(a));a = read(a, "binary");assert("object" === (typeof a === "undefined" ? "undefined" : _typeof(a)));return a;
  }, "undefined" != typeof scriptArgs ? _b2.arguments = scriptArgs : "undefined" != typeof arguments && (_b2.arguments = arguments), "function" === typeof quit && (_b2.quit = function (a) {
    quit(a);
  }), eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined");else if (m || p) _b2.read = function (a) {
    var c = new XMLHttpRequest();c.open("GET", a, !1);c.send(null);return c.responseText;
  }, p && (_b2.readBinary = function (a) {
    var c = new XMLHttpRequest();c.open("GET", a, !1);c.responseType = "arraybuffer";c.send(null);return c.response;
  }), _b2.readAsync = function (a, c, d) {
    var e = new XMLHttpRequest();e.open("GET", a, !0);e.responseType = "arraybuffer";e.onload = function () {
      200 == e.status || 0 == e.status && e.response ? c(e.response) : d();
    };e.onerror = d;e.send(null);
  }, "undefined" != typeof arguments && (_b2.arguments = arguments), "undefined" !== typeof console ? (_b2.print || (_b2.print = function (a) {
    console.log(a);
  }), _b2.printErr || (_b2.printErr = function (a) {
    console.warn(a);
  })) : _b2.print || (_b2.print = function () {}), p && (_b2.load = importScripts), "undefined" === typeof _b2.setWindowTitle && (_b2.setWindowTitle = function (a) {
    document.title = a;
  });else throw "Unknown runtime environment. Where are we?";function da(a) {
    eval.call(null, a);
  }!_b2.load && _b2.read && (_b2.load = function (a) {
    da(_b2.read(a));
  });_b2.print || (_b2.print = function () {});_b2.printErr || (_b2.printErr = _b2.print);_b2.arguments || (_b2.arguments = []);_b2.thisProgram || (_b2.thisProgram = "./this.program");_b2.quit || (_b2.quit = function (a, c) {
    throw c;
  });_b2.print = _b2.print;_b2.f = _b2.printErr;_b2.preRun = [];_b2.postRun = [];for (k in g) {
    g.hasOwnProperty(k) && (_b2[k] = g[k]);
  }var g = void 0,
      x = { c: function c(a) {
      return tempRet0 = a;
    }, G: function G() {
      return tempRet0;
    }, n: function n() {
      return u;
    }, h: function h(a) {
      u = a;
    }, u: function u(a) {
      switch (a) {case "i1":case "i8":
          return 1;case "i16":
          return 2;case "i32":
          return 4;case "i64":
          return 8;case "float":
          return 4;case "double":
          return 8;default:
          return "*" === a[a.length - 1] ? x.i : "i" === a[0] ? (a = parseInt(a.substr(1)), assert(0 === a % 8), a / 8) : 0;}
    }, D: function D(a) {
      return Math.max(x.u(a), x.i);
    }, J: 16, Y: function Y(a, c) {
      "double" === c || "i64" === c ? a & 7 && (assert(4 === (a & 7)), a += 4) : assert(0 === (a & 3));return a;
    }, R: function R(a, c, d) {
      return d || "i64" != a && "double" != a ? a ? Math.min(c || (a ? x.D(a) : 0), x.i) : Math.min(c, 8) : 8;
    }, j: function j(a, c, d) {
      return d && d.length ? _b2["dynCall_" + a].apply(null, [c].concat(d)) : _b2["dynCall_" + a].call(null, c);
    }, e: [], w: function w(a) {
      for (var c = 0; c < x.e.length; c++) {
        if (!x.e[c]) return x.e[c] = a, 2 * (1 + c);
      }throw "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";
    }, I: function I(a) {
      x.e[(a - 2) / 2] = null;
    }, b: function b(a) {
      x.b.m || (x.b.m = {});x.b.m[a] || (x.b.m[a] = 1, _b2.f(a));
    },
    l: {}, T: function T(a, c) {
      assert(c);x.l[c] || (x.l[c] = {});var d = x.l[c];d[a] || (d[a] = 1 === c.length ? function () {
        return x.j(c, a);
      } : 2 === c.length ? function (d) {
        return x.j(c, a, [d]);
      } : function () {
        return x.j(c, a, Array.prototype.slice.call(arguments));
      });return d[a];
    }, S: function S() {
      throw "You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work";
    }, g: function g(a) {
      var c = u;u = u + a | 0;u = u + 15 & -16;return c;
    }, o: function o(a) {
      var c = y;y = y + a | 0;y = y + 15 & -16;return c;
    }, k: function k(a) {
      var c = z[A >> 2];a = (c + a + 15 | 0) & -16;z[A >> 2] = a;return a >= B && !ea() ? (z[A >> 2] = c, 0) : c;
    }, q: function q(a, c) {
      return Math.ceil(a / (c ? c : 16)) * (c ? c : 16);
    }, X: function X(a, c, d) {
      return d ? +(a >>> 0) + 4294967296 * +(c >>> 0) : +(a >>> 0) + 4294967296 * +(c | 0);
    }, v: 8, i: 4, K: 0 };_b2.Runtime = x;x.addFunction = x.w;x.removeFunction = x.I;var C = 0;function assert(a, c) {
    a || D("Assertion failed: " + c);
  }
  function fa(a) {
    var c = _b2["_" + a];if (!c) try {
      c = eval("_" + a);
    } catch (d) {}assert(c, "Cannot call unknown function " + a + " (perhaps LLVM optimizations or closure removed it?)");return c;
  }var ga, ha;
  (function () {
    function a(a) {
      a = a.toString().match(f).slice(1);return { arguments: a[0], body: a[1], returnValue: a[2] };
    }function c() {
      if (!l) {
        l = {};for (var c in d) {
          d.hasOwnProperty(c) && (l[c] = a(d[c]));
        }
      }
    }var d = { stackSave: function stackSave() {
        x.n();
      }, stackRestore: function stackRestore() {
        x.h();
      }, arrayToC: function arrayToC(a) {
        var c = x.g(a.length);ia(a, c);return c;
      }, stringToC: function stringToC(a) {
        var c = 0;if (null !== a && void 0 !== a && 0 !== a) {
          var d = (a.length << 2) + 1,
              c = x.g(d);G(a, c, d);
        }return c;
      } },
        e = { string: d.stringToC, array: d.arrayToC };ha = function ha(a, c, d, f, l) {
      a = fa(a);var E = [],
          F = 0;if (f) for (var w = 0; w < f.length; w++) {
        var S = e[d[w]];S ? (0 === F && (F = x.n()), E[w] = S(f[w])) : E[w] = f[w];
      }d = a.apply(null, E);"string" === c && (d = H(d));if (0 !== F) {
        if (l && l.async) {
          EmterpreterAsync.L.push(function () {
            x.h(F);
          });return;
        }x.h(F);
      }return d;
    };var f = /^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/,
        l = null;ga = function ga(d, e, f) {
      f = f || [];var v = fa(d);d = f.every(function (a) {
        return "number" === a;
      });var L = "string" !== e;if (L && d) return v;var E = f.map(function (a, c) {
        return "$" + c;
      });e = "(function(" + E.join(",") + ") {";var F = f.length;if (!d) {
        c();e += "var stack = " + l.stackSave.body + ";";for (var w = 0; w < F; w++) {
          var S = E[w],
              M = f[w];"number" !== M && (M = l[M + "ToC"], e += "var " + M.arguments + " = " + S + ";", e += M.body + ";", e += S + "=(" + M.returnValue + ");");
        }
      }f = a(function () {
        return v;
      }).returnValue;e += "var ret = " + f + "(" + E.join(",") + ");";L || (f = a(function () {
        return H;
      }).returnValue, e += "ret = " + f + "(ret);");d || (c(), e += l.stackRestore.body.replace("()", "(stack)") + ";");return eval(e + "return ret})");
    };
  })();_b2.ccall = ha;_b2.cwrap = ga;
  function ja(a, c, d) {
    d = d || "i8";"*" === d.charAt(d.length - 1) && (d = "i32");switch (d) {case "i1":
        I[a >> 0] = c;break;case "i8":
        I[a >> 0] = c;break;case "i16":
        J[a >> 1] = c;break;case "i32":
        z[a >> 2] = c;break;case "i64":
        tempI64 = [c >>> 0, (tempDouble = c, 1 <= +ka(tempDouble) ? 0 < tempDouble ? (la(+ma(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+na((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)];z[a >> 2] = tempI64[0];z[a + 4 >> 2] = tempI64[1];break;case "float":
        oa[a >> 2] = c;break;case "double":
        pa[a >> 3] = c;break;default:
        D("invalid type for setValue: " + d);}
  }_b2.setValue = ja;function qa(a, c) {
    c = c || "i8";"*" === c.charAt(c.length - 1) && (c = "i32");switch (c) {case "i1":
        return I[a >> 0];case "i8":
        return I[a >> 0];case "i16":
        return J[a >> 1];case "i32":
        return z[a >> 2];case "i64":
        return z[a >> 2];case "float":
        return oa[a >> 2];case "double":
        return pa[a >> 3];default:
        D("invalid type for setValue: " + c);}return null;
  }_b2.getValue = qa;_b2.ALLOC_NORMAL = 0;_b2.ALLOC_STACK = 1;_b2.ALLOC_STATIC = 2;_b2.ALLOC_DYNAMIC = 3;_b2.ALLOC_NONE = 4;
  function K(a, c, d, e) {
    var f, l;"number" === typeof a ? (f = !0, l = a) : (f = !1, l = a.length);var h = "string" === typeof c ? c : null;d = 4 == d ? e : ["function" === typeof N ? N : x.o, x.g, x.o, x.k][void 0 === d ? 2 : d](Math.max(l, h ? 1 : c.length));if (f) {
      e = d;assert(0 == (d & 3));for (a = d + (l & -4); e < a; e += 4) {
        z[e >> 2] = 0;
      }for (a = d + l; e < a;) {
        I[e++ >> 0] = 0;
      }return d;
    }if ("i8" === h) return a.subarray || a.slice ? O.set(a, d) : O.set(new Uint8Array(a), d), d;e = 0;for (var n, t; e < l;) {
      var v = a[e];"function" === typeof v && (v = x.U(v));f = h || c[e];0 === f ? e++ : ("i64" == f && (f = "i32"), ja(d + e, v, f), t !== f && (n = x.u(f), t = f), e += n);
    }return d;
  }_b2.allocate = K;_b2.getMemory = function (a) {
    return ra ? P ? N(a) : x.k(a) : x.o(a);
  };function H(a, c) {
    if (0 === c || !a) return "";for (var d = 0, e, f = 0;;) {
      e = O[a + f >> 0];d |= e;if (0 == e && !c) break;f++;if (c && f == c) break;
    }c || (c = f);e = "";if (128 > d) {
      for (; 0 < c;) {
        d = String.fromCharCode.apply(String, O.subarray(a, a + Math.min(c, 1024))), e = e ? e + d : d, a += 1024, c -= 1024;
      }return e;
    }return _b2.UTF8ToString(a);
  }_b2.Pointer_stringify = H;_b2.AsciiToString = function (a) {
    for (var c = "";;) {
      var d = I[a++ >> 0];if (!d) return c;c += String.fromCharCode(d);
    }
  };
  _b2.stringToAscii = function (a, c) {
    return sa(a, c, !1);
  };var ta = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
  function ua(a, c) {
    for (var d = c; a[d];) {
      ++d;
    }if (16 < d - c && a.subarray && ta) return ta.decode(a.subarray(c, d));for (var e, f, l, h, n, t, d = "";;) {
      e = a[c++];if (!e) return d;e & 128 ? (f = a[c++] & 63, 192 == (e & 224) ? d += String.fromCharCode((e & 31) << 6 | f) : (l = a[c++] & 63, 224 == (e & 240) ? e = (e & 15) << 12 | f << 6 | l : (h = a[c++] & 63, 240 == (e & 248) ? e = (e & 7) << 18 | f << 12 | l << 6 | h : (n = a[c++] & 63, 248 == (e & 252) ? e = (e & 3) << 24 | f << 18 | l << 12 | h << 6 | n : (t = a[c++] & 63, e = (e & 1) << 30 | f << 24 | l << 18 | h << 12 | n << 6 | t))), 65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023)))) : d += String.fromCharCode(e);
    }
  }_b2.UTF8ArrayToString = ua;_b2.UTF8ToString = function (a) {
    return ua(O, a);
  };
  function va(a, c, d, e) {
    if (!(0 < e)) return 0;var f = d;e = d + e - 1;for (var l = 0; l < a.length; ++l) {
      var h = a.charCodeAt(l);55296 <= h && 57343 >= h && (h = 65536 + ((h & 1023) << 10) | a.charCodeAt(++l) & 1023);if (127 >= h) {
        if (d >= e) break;c[d++] = h;
      } else {
        if (2047 >= h) {
          if (d + 1 >= e) break;c[d++] = 192 | h >> 6;
        } else {
          if (65535 >= h) {
            if (d + 2 >= e) break;c[d++] = 224 | h >> 12;
          } else {
            if (2097151 >= h) {
              if (d + 3 >= e) break;c[d++] = 240 | h >> 18;
            } else {
              if (67108863 >= h) {
                if (d + 4 >= e) break;c[d++] = 248 | h >> 24;
              } else {
                if (d + 5 >= e) break;c[d++] = 252 | h >> 30;c[d++] = 128 | h >> 24 & 63;
              }c[d++] = 128 | h >> 18 & 63;
            }c[d++] = 128 | h >> 12 & 63;
          }c[d++] = 128 | h >> 6 & 63;
        }c[d++] = 128 | h & 63;
      }
    }c[d] = 0;return d - f;
  }_b2.stringToUTF8Array = va;function G(a, c, d) {
    return va(a, O, c, d);
  }_b2.stringToUTF8 = G;function wa(a) {
    for (var c = 0, d = 0; d < a.length; ++d) {
      var e = a.charCodeAt(d);55296 <= e && 57343 >= e && (e = 65536 + ((e & 1023) << 10) | a.charCodeAt(++d) & 1023);127 >= e ? ++c : c = 2047 >= e ? c + 2 : 65535 >= e ? c + 3 : 2097151 >= e ? c + 4 : 67108863 >= e ? c + 5 : c + 6;
    }return c;
  }_b2.lengthBytesUTF8 = wa;"undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");
  function xa(a) {
    return a.replace(/__Z[\w\d_]+/g, function (a) {
      var d;a: {
        var e = _b2.___cxa_demangle || _b2.__cxa_demangle;if (e) try {
          var f = a.substr(1),
              l = wa(f) + 1,
              h = N(l);G(f, h, l);var n = N(4),
              t = e(h, 0, 0, n);if (0 === qa(n, "i32") && t) {
            d = H(t);break a;
          }
        } catch (v) {} finally {
          h && ya(h), n && ya(n), t && ya(t);
        } else x.b("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");d = a;
      }return a === d ? a : a + " [" + d + "]";
    });
  }
  function za() {
    var a;a: {
      a = Error();if (!a.stack) {
        try {
          throw Error(0);
        } catch (c) {
          a = c;
        }if (!a.stack) {
          a = "(no stack trace available)";break a;
        }
      }a = a.stack.toString();
    }_b2.extraStackTrace && (a += "\n" + _b2.extraStackTrace());return xa(a);
  }_b2.stackTrace = za;var Aa = 65536,
      Ba = 16777216,
      Ca = 16777216;function Da(a, c) {
    0 < a % c && (a += c - a % c);return a;
  }var buffer, I, O, J, Ea, z, Fa, oa, pa;
  function Ga() {
    _b2.HEAP8 = I = new Int8Array(buffer);_b2.HEAP16 = J = new Int16Array(buffer);_b2.HEAP32 = z = new Int32Array(buffer);_b2.HEAPU8 = O = new Uint8Array(buffer);_b2.HEAPU16 = Ea = new Uint16Array(buffer);_b2.HEAPU32 = Fa = new Uint32Array(buffer);_b2.HEAPF32 = oa = new Float32Array(buffer);_b2.HEAPF64 = pa = new Float64Array(buffer);
  }var Ha, y, ra, Ia, u, Ja, Ka, A;Ha = y = Ia = u = Ja = Ka = A = 0;ra = !1;
  _b2.reallocBuffer || (_b2.reallocBuffer = function (a) {
    var c;try {
      if (ArrayBuffer.a) c = ArrayBuffer.a(buffer, a);else {
        var d = I;c = new ArrayBuffer(a);new Int8Array(c).set(d);
      }
    } catch (e) {
      return !1;
    }return La(c) ? c : !1;
  });function ea() {
    var a = _b2.usingWasm ? Aa : Ba,
        c = 2147483648 - a;if (z[A >> 2] > c) return !1;for (B = Math.max(B, Ca); B < z[A >> 2];) {
      536870912 >= B ? B = Da(2 * B, a) : B = Math.min(Da((3 * B + 2147483648) / 4, a), c);
    }a = _b2.reallocBuffer(B);if (!a || a.byteLength != B) return !1;_b2.buffer = buffer = a;Ga();return !0;
  }var Ma;
  try {
    Ma = Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get), Ma(new ArrayBuffer(4));
  } catch (Na) {
    Ma = function Ma(a) {
      return a.byteLength;
    };
  }var Oa = _b2.TOTAL_STACK || 5242880,
      B = _b2.TOTAL_MEMORY || 16777216;B < Oa && _b2.f("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + B + "! (TOTAL_STACK=" + Oa + ")");_b2.buffer ? buffer = _b2.buffer : buffer = new ArrayBuffer(B);Ga();z[0] = 1668509029;J[1] = 25459;if (115 !== O[2] || 99 !== O[3]) throw "Runtime error: expected the system to be little-endian!";
  _b2.HEAP = void 0;_b2.buffer = buffer;_b2.HEAP8 = I;_b2.HEAP16 = J;_b2.HEAP32 = z;_b2.HEAPU8 = O;_b2.HEAPU16 = Ea;_b2.HEAPU32 = Fa;_b2.HEAPF32 = oa;_b2.HEAPF64 = pa;function Q(a) {
    for (; 0 < a.length;) {
      var c = a.shift();if ("function" == typeof c) c();else {
        var d = c.t;"number" === typeof d ? void 0 === c.d ? _b2.dynCall_v(d) : _b2.dynCall_vi(d, c.d) : d(void 0 === c.d ? null : c.d);
      }
    }
  }var Pa = [],
      Qa = [],
      Ra = [],
      Sa = [],
      Ta = [],
      P = !1;function Ua(a) {
    Pa.unshift(a);
  }_b2.addOnPreRun = Ua;_b2.addOnInit = function (a) {
    Qa.unshift(a);
  };_b2.addOnPreMain = function (a) {
    Ra.unshift(a);
  };_b2.addOnExit = function (a) {
    Sa.unshift(a);
  };
  function Va(a) {
    Ta.unshift(a);
  }_b2.addOnPostRun = Va;function Wa(a, c, d) {
    d = Array(0 < d ? d : wa(a) + 1);a = va(a, d, 0, d.length);c && (d.length = a);return d;
  }_b2.intArrayFromString = Wa;_b2.intArrayToString = function (a) {
    for (var c = [], d = 0; d < a.length; d++) {
      var e = a[d];255 < e && (e &= 255);c.push(String.fromCharCode(e));
    }return c.join("");
  };_b2.writeStringToMemory = function (a, c, d) {
    x.b("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");var e, f;d && (f = c + wa(a), e = I[f]);G(a, c, Infinity);d && (I[f] = e);
  };
  function ia(a, c) {
    I.set(a, c);
  }_b2.writeArrayToMemory = ia;function sa(a, c, d) {
    for (var e = 0; e < a.length; ++e) {
      I[c++ >> 0] = a.charCodeAt(e);
    }d || (I[c >> 0] = 0);
  }_b2.writeAsciiToMemory = sa;Math.imul && -5 === Math.imul(4294967295, 5) || (Math.imul = function (a, c) {
    var d = a & 65535,
        e = c & 65535;return d * e + ((a >>> 16) * e + d * (c >>> 16) << 16) | 0;
  });Math.V = Math.imul;Math.clz32 || (Math.clz32 = function (a) {
    a = a >>> 0;for (var c = 0; 32 > c; c++) {
      if (a & 1 << 31 - c) return c;
    }return 32;
  });Math.O = Math.clz32;Math.trunc || (Math.trunc = function (a) {
    return 0 > a ? Math.ceil(a) : Math.floor(a);
  });
  Math.trunc = Math.trunc;var ka = Math.abs,
      na = Math.ceil,
      ma = Math.floor,
      Xa = Math.pow,
      la = Math.min,
      R = 0,
      Ya = null,
      T = null;_b2.addRunDependency = function () {
    R++;_b2.monitorRunDependencies && _b2.monitorRunDependencies(R);
  };_b2.removeRunDependency = function () {
    R--;_b2.monitorRunDependencies && _b2.monitorRunDependencies(R);if (0 == R && (null !== Ya && (clearInterval(Ya), Ya = null), T)) {
      var a = T;T = null;a();
    }
  };_b2.preloadedImages = {};_b2.preloadedAudios = {};Ha = 8;y = Ha + 7360;Qa.push({ t: function t() {
      Za();
    } });
  K([36, 3, 0, 0, 108, 3, 0, 0, 36, 3, 0, 0, 206, 3, 0, 0, 76, 3, 0, 0, 184, 6, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 36, 3, 0, 0, 207, 6, 0, 0, 76, 3, 0, 0, 121, 7, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 76, 3, 0, 0, 192, 7, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 76, 3, 0, 0, 43, 20, 0, 0, 96, 0, 0, 0, 0, 0, 0, 0, 76, 3, 0, 0, 216, 19, 0, 0, 112, 0, 0, 0, 0, 0, 0, 0, 36, 3, 0, 0, 249, 19, 0, 0, 76, 3, 0, 0, 6, 20, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 4, 0, 0, 0, 7, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 175, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116, 2, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 183, 24, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116, 2, 0, 0, 10, 0, 0, 0, 100, 0, 0, 0, 232, 3, 0, 0, 16, 39, 0, 0, 160, 134, 1, 0, 64, 66, 15, 0, 128, 150, 152, 0, 0, 225, 245, 5, 95, 112, 137, 0, 255, 9, 47, 15, 0, 0, 0, 0, 80, 0, 0, 0, 9, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 120, 0, 0, 0, 9, 0, 0, 0, 13, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 78, 55, 77, 105, 110, 105, 115, 97, 116, 50, 48, 79, 117, 116, 79, 102, 77, 101, 109, 111, 114, 121, 69, 120, 99, 101, 112, 116, 105, 111, 110, 69, 0, 124, 32, 32, 71, 97, 114, 98, 97, 103, 101, 32, 99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 58, 32, 32, 32, 37, 49, 50, 100, 32, 98, 121, 116, 101, 115, 32, 61, 62, 32, 37, 49, 50, 100, 32, 98, 121, 116, 101, 115, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 124, 10, 0, 78, 55, 77, 105, 110, 105, 115, 97, 116, 54, 83, 111, 108, 118, 101, 114, 69, 0, 118, 97, 114, 45, 100, 101, 99, 97, 121, 0, 84, 104, 101, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 97, 99, 116, 105, 118, 105, 116, 121, 32, 100, 101, 99, 97, 121, 32, 102, 97, 99, 116, 111, 114, 0, 67, 79, 82, 69, 0, 60, 100, 111, 117, 98, 108, 101, 62, 0, 99, 108, 97, 45, 100, 101, 99, 97, 121, 0, 84, 104, 101, 32, 99, 108, 97, 117, 115, 101, 32, 97, 99, 116, 105, 118, 105, 116, 121, 32, 100, 101, 99, 97, 121, 32, 102, 97, 99, 116, 111, 114, 0, 114, 110, 100, 45, 102, 114, 101, 113, 0, 84, 104, 101, 32, 102, 114, 101, 113, 117, 101, 110, 99, 121, 32, 119, 105, 116, 104, 32, 119, 104, 105, 99, 104, 32, 116, 104, 101, 32, 100, 101, 99, 105, 115, 105, 111, 110, 32, 104, 101, 117, 114, 105, 115, 116, 105, 99, 32, 116, 114, 105, 101, 115, 32, 116, 111, 32, 99, 104, 111, 111, 115, 101, 32, 97, 32, 114, 97, 110, 100, 111, 109, 32, 118, 97, 114, 105, 97, 98, 108, 101, 0, 114, 110, 100, 45, 115, 101, 101, 100, 0, 85, 115, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 114, 97, 110, 100, 111, 109, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 115, 101, 108, 101, 99, 116, 105, 111, 110, 0, 99, 99, 109, 105, 110, 45, 109, 111, 100, 101, 0, 67, 111, 110, 116, 114, 111, 108, 115, 32, 99, 111, 110, 102, 108, 105, 99, 116, 32, 99, 108, 97, 117, 115, 101, 32, 109, 105, 110, 105, 109, 105, 122, 97, 116, 105, 111, 110, 32, 40, 48, 61, 110, 111, 110, 101, 44, 32, 49, 61, 98, 97, 115, 105, 99, 44, 32, 50, 61, 100, 101, 101, 112, 41, 0, 60, 105, 110, 116, 51, 50, 62, 0, 112, 104, 97, 115, 101, 45, 115, 97, 118, 105, 110, 103, 0, 67, 111, 110, 116, 114, 111, 108, 115, 32, 116, 104, 101, 32, 108, 101, 118, 101, 108, 32, 111, 102, 32, 112, 104, 97, 115, 101, 32, 115, 97, 118, 105, 110, 103, 32, 40, 48, 61, 110, 111, 110, 101, 44, 32, 49, 61, 108, 105, 109, 105, 116, 101, 100, 44, 32, 50, 61, 102, 117, 108, 108, 41, 0, 114, 110, 100, 45, 105, 110, 105, 116, 0, 82, 97, 110, 100, 111, 109, 105, 122, 101, 32, 116, 104, 101, 32, 105, 110, 105, 116, 105, 97, 108, 32, 97, 99, 116, 105, 118, 105, 116, 121, 0, 60, 98, 111, 111, 108, 62, 0, 108, 117, 98, 121, 0, 85, 115, 101, 32, 116, 104, 101, 32, 76, 117, 98, 121, 32, 114, 101, 115, 116, 97, 114, 116, 32, 115, 101, 113, 117, 101, 110, 99, 101, 0, 114, 102, 105, 114, 115, 116, 0, 84, 104, 101, 32, 98, 97, 115, 101, 32, 114, 101, 115, 116, 97, 114, 116, 32, 105, 110, 116, 101, 114, 118, 97, 108, 0, 114, 105, 110, 99, 0, 82, 101, 115, 116, 97, 114, 116, 32, 105, 110, 116, 101, 114, 118, 97, 108, 32, 105, 110, 99, 114, 101, 97, 115, 101, 32, 102, 97, 99, 116, 111, 114, 0, 103, 99, 45, 102, 114, 97, 99, 0, 84, 104, 101, 32, 102, 114, 97, 99, 116, 105, 111, 110, 32, 111, 102, 32, 119, 97, 115, 116, 101, 100, 32, 109, 101, 109, 111, 114, 121, 32, 97, 108, 108, 111, 119, 101, 100, 32, 98, 101, 102, 111, 114, 101, 32, 97, 32, 103, 97, 114, 98, 97, 103, 101, 32, 99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 32, 105, 115, 32, 116, 114, 105, 103, 103, 101, 114, 101, 100, 0, 109, 105, 110, 45, 108, 101, 97, 114, 110, 116, 115, 0, 77, 105, 110, 105, 109, 117, 109, 32, 108, 101, 97, 114, 110, 116, 32, 99, 108, 97, 117, 115, 101, 32, 108, 105, 109, 105, 116, 0, 32, 32, 45, 37, 115, 44, 32, 45, 110, 111, 45, 37, 115, 0, 111, 110, 0, 111, 102, 102, 0, 40, 100, 101, 102, 97, 117, 108, 116, 58, 32, 37, 115, 41, 10, 0, 10, 32, 32, 32, 32, 32, 32, 32, 32, 37, 115, 10, 0, 78, 55, 77, 105, 110, 105, 115, 97, 116, 49, 48, 66, 111, 111, 108, 79, 112, 116, 105, 111, 110, 69, 0, 78, 55, 77, 105, 110, 105, 115, 97, 116, 54, 79, 112, 116, 105, 111, 110, 69, 0, 32, 32, 45, 37, 45, 49, 50, 115, 32, 61, 32, 37, 45, 56, 115, 32, 91, 0, 105, 109, 105, 110, 0, 37, 52, 100, 0, 32, 46, 46, 32, 0, 105, 109, 97, 120, 0, 93, 32, 40, 100, 101, 102, 97, 117, 108, 116, 58, 32, 37, 100, 41, 10, 0, 69, 82, 82, 79, 82, 33, 32, 118, 97, 108, 117, 101, 32, 60, 37, 115, 62, 32, 105, 115, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 32, 102, 111, 114, 32, 111, 112, 116, 105, 111, 110, 32, 34, 37, 115, 34, 46, 10, 0, 69, 82, 82, 79, 82, 33, 32, 118, 97, 108, 117, 101, 32, 60, 37, 115, 62, 32, 105, 115, 32, 116, 111, 111, 32, 115, 109, 97, 108, 108, 32, 102, 111, 114, 32, 111, 112, 116, 105, 111, 110, 32, 34, 37, 115, 34, 46, 10, 0, 78, 55, 77, 105, 110, 105, 115, 97, 116, 57, 73, 110, 116, 79, 112, 116, 105, 111, 110, 69, 0, 32, 32, 45, 37, 45, 49, 50, 115, 32, 61, 32, 37, 45, 56, 115, 32, 37, 99, 37, 52, 46, 50, 103, 32, 46, 46, 32, 37, 52, 46, 50, 103, 37, 99, 32, 40, 100, 101, 102, 97, 117, 108, 116, 58, 32, 37, 103, 41, 10, 0, 78, 55, 77, 105, 110, 105, 115, 97, 116, 49, 50, 68, 111, 117, 98, 108, 101, 79, 112, 116, 105, 111, 110, 69, 0, 124, 32, 37, 57, 100, 32, 124, 32, 37, 55, 100, 32, 37, 56, 100, 32, 37, 56, 100, 32, 124, 32, 37, 56, 100, 32, 37, 56, 100, 32, 37, 54, 46, 48, 102, 32, 124, 32, 37, 54, 46, 51, 102, 32, 37, 37, 32, 124, 10, 0, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 91, 32, 83, 101, 97, 114, 99, 104, 32, 83, 116, 97, 116, 105, 115, 116, 105, 99, 115, 32, 93, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 0, 124, 32, 67, 111, 110, 102, 108, 105, 99, 116, 115, 32, 124, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 82, 73, 71, 73, 78, 65, 76, 32, 32, 32, 32, 32, 32, 32, 32, 32, 124, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 69, 65, 82, 78, 84, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 124, 32, 80, 114, 111, 103, 114, 101, 115, 115, 32, 124, 0, 124, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 124, 32, 32, 32, 32, 86, 97, 114, 115, 32, 32, 67, 108, 97, 117, 115, 101, 115, 32, 76, 105, 116, 101, 114, 97, 108, 115, 32, 124, 32, 32, 32, 32, 76, 105, 109, 105, 116, 32, 32, 67, 108, 97, 117, 115, 101, 115, 32, 76, 105, 116, 47, 67, 108, 32, 124, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 124, 0, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 0, 17, 0, 10, 0, 17, 17, 17, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 15, 10, 17, 17, 17, 3, 10, 7, 0, 1, 19, 9, 11, 11, 0, 0, 9, 6, 11, 0, 0, 11, 0, 6, 17, 0, 0, 0, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 10, 10, 17, 17, 17, 0, 10, 0, 0, 2, 0, 9, 11, 0, 0, 0, 9, 0, 11, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 9, 12, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 4, 13, 0, 0, 0, 0, 9, 14, 0, 0, 0, 0, 0, 14, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 15, 0, 0, 0, 0, 9, 16, 0, 0, 0, 0, 0, 16, 0, 0, 16, 0, 0, 18, 0, 0, 0, 18, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 18, 18, 18, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 10, 0, 0, 0, 0, 9, 11, 0, 0, 0, 0, 0, 11, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 9, 12, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 45, 43, 32, 32, 32, 48, 88, 48, 120, 0, 40, 110, 117, 108, 108, 41, 0, 45, 48, 88, 43, 48, 88, 32, 48, 88, 45, 48, 120, 43, 48, 120, 32, 48, 120, 0, 105, 110, 102, 0, 73, 78, 70, 0, 78, 65, 78, 0, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 46, 0, 84, 33, 34, 25, 13, 1, 2, 3, 17, 75, 28, 12, 16, 4, 11, 29, 18, 30, 39, 104, 110, 111, 112, 113, 98, 32, 5, 6, 15, 19, 20, 21, 26, 8, 22, 7, 40, 36, 23, 24, 9, 10, 14, 27, 31, 37, 35, 131, 130, 125, 38, 42, 43, 60, 61, 62, 63, 67, 71, 74, 77, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 99, 100, 101, 102, 103, 105, 106, 107, 108, 114, 115, 116, 121, 122, 123, 124, 0, 73, 108, 108, 101, 103, 97, 108, 32, 98, 121, 116, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 0, 68, 111, 109, 97, 105, 110, 32, 101, 114, 114, 111, 114, 0, 82, 101, 115, 117, 108, 116, 32, 110, 111, 116, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 98, 108, 101, 0, 78, 111, 116, 32, 97, 32, 116, 116, 121, 0, 80, 101, 114, 109, 105, 115, 115, 105, 111, 110, 32, 100, 101, 110, 105, 101, 100, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 110, 111, 116, 32, 112, 101, 114, 109, 105, 116, 116, 101, 100, 0, 78, 111, 32, 115, 117, 99, 104, 32, 102, 105, 108, 101, 32, 111, 114, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 78, 111, 32, 115, 117, 99, 104, 32, 112, 114, 111, 99, 101, 115, 115, 0, 70, 105, 108, 101, 32, 101, 120, 105, 115, 116, 115, 0, 86, 97, 108, 117, 101, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 32, 102, 111, 114, 32, 100, 97, 116, 97, 32, 116, 121, 112, 101, 0, 78, 111, 32, 115, 112, 97, 99, 101, 32, 108, 101, 102, 116, 32, 111, 110, 32, 100, 101, 118, 105, 99, 101, 0, 79, 117, 116, 32, 111, 102, 32, 109, 101, 109, 111, 114, 121, 0, 82, 101, 115, 111, 117, 114, 99, 101, 32, 98, 117, 115, 121, 0, 73, 110, 116, 101, 114, 114, 117, 112, 116, 101, 100, 32, 115, 121, 115, 116, 101, 109, 32, 99, 97, 108, 108, 0, 82, 101, 115, 111, 117, 114, 99, 101, 32, 116, 101, 109, 112, 111, 114, 97, 114, 105, 108, 121, 32, 117, 110, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 73, 110, 118, 97, 108, 105, 100, 32, 115, 101, 101, 107, 0, 67, 114, 111, 115, 115, 45, 100, 101, 118, 105, 99, 101, 32, 108, 105, 110, 107, 0, 82, 101, 97, 100, 45, 111, 110, 108, 121, 32, 102, 105, 108, 101, 32, 115, 121, 115, 116, 101, 109, 0, 68, 105, 114, 101, 99, 116, 111, 114, 121, 32, 110, 111, 116, 32, 101, 109, 112, 116, 121, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 114, 101, 115, 101, 116, 32, 98, 121, 32, 112, 101, 101, 114, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 116, 105, 109, 101, 100, 32, 111, 117, 116, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 114, 101, 102, 117, 115, 101, 100, 0, 72, 111, 115, 116, 32, 105, 115, 32, 100, 111, 119, 110, 0, 72, 111, 115, 116, 32, 105, 115, 32, 117, 110, 114, 101, 97, 99, 104, 97, 98, 108, 101, 0, 65, 100, 100, 114, 101, 115, 115, 32, 105, 110, 32, 117, 115, 101, 0, 66, 114, 111, 107, 101, 110, 32, 112, 105, 112, 101, 0, 73, 47, 79, 32, 101, 114, 114, 111, 114, 0, 78, 111, 32, 115, 117, 99, 104, 32, 100, 101, 118, 105, 99, 101, 32, 111, 114, 32, 97, 100, 100, 114, 101, 115, 115, 0, 66, 108, 111, 99, 107, 32, 100, 101, 118, 105, 99, 101, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0, 78, 111, 32, 115, 117, 99, 104, 32, 100, 101, 118, 105, 99, 101, 0, 78, 111, 116, 32, 97, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 73, 115, 32, 97, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 84, 101, 120, 116, 32, 102, 105, 108, 101, 32, 98, 117, 115, 121, 0, 69, 120, 101, 99, 32, 102, 111, 114, 109, 97, 116, 32, 101, 114, 114, 111, 114, 0, 73, 110, 118, 97, 108, 105, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0, 65, 114, 103, 117, 109, 101, 110, 116, 32, 108, 105, 115, 116, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0, 83, 121, 109, 98, 111, 108, 105, 99, 32, 108, 105, 110, 107, 32, 108, 111, 111, 112, 0, 70, 105, 108, 101, 110, 97, 109, 101, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0, 84, 111, 111, 32, 109, 97, 110, 121, 32, 111, 112, 101, 110, 32, 102, 105, 108, 101, 115, 32, 105, 110, 32, 115, 121, 115, 116, 101, 109, 0, 78, 111, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 66, 97, 100, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 0, 78, 111, 32, 99, 104, 105, 108, 100, 32, 112, 114, 111, 99, 101, 115, 115, 0, 66, 97, 100, 32, 97, 100, 100, 114, 101, 115, 115, 0, 70, 105, 108, 101, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 0, 84, 111, 111, 32, 109, 97, 110, 121, 32, 108, 105, 110, 107, 115, 0, 78, 111, 32, 108, 111, 99, 107, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 82, 101, 115, 111, 117, 114, 99, 101, 32, 100, 101, 97, 100, 108, 111, 99, 107, 32, 119, 111, 117, 108, 100, 32, 111, 99, 99, 117, 114, 0, 83, 116, 97, 116, 101, 32, 110, 111, 116, 32, 114, 101, 99, 111, 118, 101, 114, 97, 98, 108, 101, 0, 80, 114, 101, 118, 105, 111, 117, 115, 32, 111, 119, 110, 101, 114, 32, 100, 105, 101, 100, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 99, 97, 110, 99, 101, 108, 101, 100, 0, 70, 117, 110, 99, 116, 105, 111, 110, 32, 110, 111, 116, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 101, 100, 0, 78, 111, 32, 109, 101, 115, 115, 97, 103, 101, 32, 111, 102, 32, 100, 101, 115, 105, 114, 101, 100, 32, 116, 121, 112, 101, 0, 73, 100, 101, 110, 116, 105, 102, 105, 101, 114, 32, 114, 101, 109, 111, 118, 101, 100, 0, 68, 101, 118, 105, 99, 101, 32, 110, 111, 116, 32, 97, 32, 115, 116, 114, 101, 97, 109, 0, 78, 111, 32, 100, 97, 116, 97, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 68, 101, 118, 105, 99, 101, 32, 116, 105, 109, 101, 111, 117, 116, 0, 79, 117, 116, 32, 111, 102, 32, 115, 116, 114, 101, 97, 109, 115, 32, 114, 101, 115, 111, 117, 114, 99, 101, 115, 0, 76, 105, 110, 107, 32, 104, 97, 115, 32, 98, 101, 101, 110, 32, 115, 101, 118, 101, 114, 101, 100, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 101, 114, 114, 111, 114, 0, 66, 97, 100, 32, 109, 101, 115, 115, 97, 103, 101, 0, 70, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 32, 105, 110, 32, 98, 97, 100, 32, 115, 116, 97, 116, 101, 0, 78, 111, 116, 32, 97, 32, 115, 111, 99, 107, 101, 116, 0, 68, 101, 115, 116, 105, 110, 97, 116, 105, 111, 110, 32, 97, 100, 100, 114, 101, 115, 115, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0, 77, 101, 115, 115, 97, 103, 101, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 119, 114, 111, 110, 103, 32, 116, 121, 112, 101, 32, 102, 111, 114, 32, 115, 111, 99, 107, 101, 116, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 110, 111, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 83, 111, 99, 107, 101, 116, 32, 116, 121, 112, 101, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 78, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 102, 97, 109, 105, 108, 121, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 65, 100, 100, 114, 101, 115, 115, 32, 102, 97, 109, 105, 108, 121, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 98, 121, 32, 112, 114, 111, 116, 111, 99, 111, 108, 0, 65, 100, 100, 114, 101, 115, 115, 32, 110, 111, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 78, 101, 116, 119, 111, 114, 107, 32, 105, 115, 32, 100, 111, 119, 110, 0, 78, 101, 116, 119, 111, 114, 107, 32, 117, 110, 114, 101, 97, 99, 104, 97, 98, 108, 101, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 114, 101, 115, 101, 116, 32, 98, 121, 32, 110, 101, 116, 119, 111, 114, 107, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 97, 98, 111, 114, 116, 101, 100, 0, 78, 111, 32, 98, 117, 102, 102, 101, 114, 32, 115, 112, 97, 99, 101, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 83, 111, 99, 107, 101, 116, 32, 105, 115, 32, 99, 111, 110, 110, 101, 99, 116, 101, 100, 0, 83, 111, 99, 107, 101, 116, 32, 110, 111, 116, 32, 99, 111, 110, 110, 101, 99, 116, 101, 100, 0, 67, 97, 110, 110, 111, 116, 32, 115, 101, 110, 100, 32, 97, 102, 116, 101, 114, 32, 115, 111, 99, 107, 101, 116, 32, 115, 104, 117, 116, 100, 111, 119, 110, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 97, 108, 114, 101, 97, 100, 121, 32, 105, 110, 32, 112, 114, 111, 103, 114, 101, 115, 115, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 105, 110, 32, 112, 114, 111, 103, 114, 101, 115, 115, 0, 83, 116, 97, 108, 101, 32, 102, 105, 108, 101, 32, 104, 97, 110, 100, 108, 101, 0, 82, 101, 109, 111, 116, 101, 32, 73, 47, 79, 32, 101, 114, 114, 111, 114, 0, 81, 117, 111, 116, 97, 32, 101, 120, 99, 101, 101, 100, 101, 100, 0, 78, 111, 32, 109, 101, 100, 105, 117, 109, 32, 102, 111, 117, 110, 100, 0, 87, 114, 111, 110, 103, 32, 109, 101, 100, 105, 117, 109, 32, 116, 121, 112, 101, 0, 78, 111, 32, 101, 114, 114, 111, 114, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 255, 255, 255, 255, 255, 255, 255, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 255, 255, 255, 255, 255, 255, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 4, 7, 3, 6, 5, 0, 105, 110, 102, 105, 110, 105, 116, 121, 0, 110, 97, 110, 0, 78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 49, 54, 95, 95, 115, 104, 105, 109, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0, 83, 116, 57, 116, 121, 112, 101, 95, 105, 110, 102, 111, 0, 78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 50, 48, 95, 95, 115, 105, 95, 99, 108, 97, 115, 115, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0, 78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 49, 55, 95, 95, 99, 108, 97, 115, 115, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0], "i8", 4, x.v);var $a = y;y += 16;function ab(a, c) {
    Sa.unshift({ t: a, d: c });
  }
  _b2._i64Subtract = bb;_b2._i64Add = cb;function U() {
    return !!U.a;
  }var db = 0,
      eb = {};function V() {
    var a = db;if (!a) return (x.c(0), 0) | 0;var c = eb[a],
        d = c.type;if (!d) return (x.c(0), a) | 0;var e = Array.prototype.slice.call(arguments);_b2.___cxa_is_pointer_type(d);V.buffer || (V.buffer = N(4));z[V.buffer >> 2] = a;for (var a = V.buffer, f = 0; f < e.length; f++) {
      if (e[f] && _b2.___cxa_can_catch(e[f], d, a)) return a = z[a >> 2], c.A = a, (x.c(e[f]), a) | 0;
    }a = z[a >> 2];return (x.c(d), a) | 0;
  }_b2._memset = fb;_b2._bitshift64Lshr = gb;_b2._bitshift64Shl = hb;var W = 0;
  function X() {
    W += 4;return z[W - 4 >> 2];
  }
  var ib = {},
      jb = K([8, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 7, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0], "i8", 2);_b2._llvm_cttz_i32 = kb;_b2.___udivmoddi4 = lb;_b2.___udivdi3 = mb;_b2.___muldsi3 = nb;_b2.___muldi3 = ob;_b2._sbrk = pb;function Y(a, c) {
    W = c;try {
      var d = X(),
          e = X(),
          f = X(),
          l = 0;Y.buffer || (Y.a = [null, [], []], Y.r = function (a, c) {
        var d = Y.a[a];assert(d);0 === c || 10 === c ? ((1 === a ? _b2.print : _b2.printErr)(ua(d, 0)), d.length = 0) : d.push(c);
      });for (var h = 0; h < f; h++) {
        for (var n = z[e + 8 * h >> 2], t = z[e + (8 * h + 4) >> 2], v = 0; v < t; v++) {
          Y.r(d, O[n + v]);
        }l += t;
      }return l;
    } catch (L) {
      return "undefined" !== typeof FS && L instanceof FS.p || D(L), -L.s;
    }
  }
  _b2.___uremdi3 = qb;_b2._memcpy = rb;function sb(a) {
    _b2.exit(a);
  }_b2._llvm_bswap_i32 = tb;_b2._malloc = N;var ub = y;y += 16;Sa.push(function () {
    var a = _b2._fflush;a && a(0);if (a = Y.r) {
      var c = Y.a;c[1].length && a(1, 10);c[2].length && a(2, 10);
    }
  });A = K(1, "i32", 2);Ia = u = x.q(y);Ja = Ia + Oa;Ka = x.q(Ja);z[A >> 2] = Ka;ra = !0;
  _b2.B = { Math: Math, Int8Array: Int8Array, Int16Array: Int16Array, Int32Array: Int32Array, Uint8Array: Uint8Array, Uint16Array: Uint16Array, Uint32Array: Uint32Array, Float32Array: Float32Array, Float64Array: Float64Array, NaN: NaN, Infinity: Infinity, byteLength: Ma };
  _b2.C = { abort: D, assert: assert, enlargeMemory: ea, getTotalMemory: function getTotalMemory() {
      return B;
    }, abortOnCannotGrowMemory: function abortOnCannotGrowMemory() {
      D("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + B + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ");
    }, invoke_iiii: function invoke_iiii(a, c, d, e) {
      try {
        return _b2.dynCall_iiii(a, c, d, e);
      } catch (f) {
        if ("number" !== typeof f && "longjmp" !== f) throw f;_b2.setThrew(1, 0);
      }
    }, invoke_viiiii: function invoke_viiiii(a, c, d, e, f, l) {
      try {
        _b2.dynCall_viiiii(a, c, d, e, f, l);
      } catch (h) {
        if ("number" !== typeof h && "longjmp" !== h) throw h;_b2.setThrew(1, 0);
      }
    }, invoke_vi: function invoke_vi(a, c) {
      try {
        _b2.dynCall_vi(a, c);
      } catch (d) {
        if ("number" !== typeof d && "longjmp" !== d) throw d;_b2.setThrew(1, 0);
      }
    }, invoke_vii: function invoke_vii(a, c, d) {
      try {
        _b2.dynCall_vii(a, c, d);
      } catch (e) {
        if ("number" !== typeof e && "longjmp" !== e) throw e;_b2.setThrew(1, 0);
      }
    },
    invoke_ii: function invoke_ii(a, c) {
      try {
        return _b2.dynCall_ii(a, c);
      } catch (d) {
        if ("number" !== typeof d && "longjmp" !== d) throw d;_b2.setThrew(1, 0);
      }
    }, invoke_v: function invoke_v(a) {
      try {
        _b2.dynCall_v(a);
      } catch (c) {
        if ("number" !== typeof c && "longjmp" !== c) throw c;_b2.setThrew(1, 0);
      }
    }, invoke_viiiiii: function invoke_viiiiii(a, c, d, e, f, l, h) {
      try {
        _b2.dynCall_viiiiii(a, c, d, e, f, l, h);
      } catch (n) {
        if ("number" !== typeof n && "longjmp" !== n) throw n;_b2.setThrew(1, 0);
      }
    }, invoke_iii: function invoke_iii(a, c, d) {
      try {
        return _b2.dynCall_iii(a, c, d);
      } catch (e) {
        if ("number" !== typeof e && "longjmp" !== e) throw e;
        _b2.setThrew(1, 0);
      }
    }, invoke_viiii: function invoke_viiii(a, c, d, e, f) {
      try {
        _b2.dynCall_viiii(a, c, d, e, f);
      } catch (l) {
        if ("number" !== typeof l && "longjmp" !== l) throw l;_b2.setThrew(1, 0);
      }
    }, ___lock: function ___lock() {}, ___cxa_atexit: function ___cxa_atexit() {
      return ab.apply(null, arguments);
    }, _llvm_pow_f64: Xa, ___cxa_throw: function ___cxa_throw(a, c, d) {
      eb[a] = { Z: a, A: a, type: c, P: d, $: 0, N: !1, aa: !1 };db = a;"uncaught_exception" in U ? U.a++ : U.a = 1;throw a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
    }, ___syscall54: function ___syscall54(a, c) {
      W = c;return 0;
    }, _atexit: ab, _abort: function _abort() {
      _b2.abort();
    }, ___setErrNo: function ___setErrNo(a) {
      _b2.___errno_location && (z[_b2.___errno_location() >> 2] = a);return a;
    }, ___syscall6: function ___syscall6(a, c) {
      W = c;try {
        var d = ib.F();FS.close(d);return 0;
      } catch (e) {
        return "undefined" !== typeof FS && e instanceof FS.p || D(e), -e.s;
      }
    }, ___syscall140: function ___syscall140(a, c) {
      W = c;try {
        var d = ib.F(),
            e = X(),
            f = X(),
            l = X(),
            h = X();assert(0 === e);FS.W(d, f, h);z[l >> 2] = d.position;d.H && 0 === f && 0 === h && (d.H = null);return 0;
      } catch (n) {
        return "undefined" !== typeof FS && n instanceof FS.p || D(n), -n.s;
      }
    }, ___syscall146: Y, _emscripten_memcpy_big: function _emscripten_memcpy_big(a, c, d) {
      O.set(O.subarray(c, c + d), a);return a;
    }, ___gxx_personality_v0: function ___gxx_personality_v0() {}, ___unlock: function ___unlock() {}, ___resumeException: function ___resumeException(a) {
      db || (db = a);throw a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
    }, _exit: function _exit(a) {
      sb(a);
    }, ___cxa_find_matching_catch: V, __exit: sb, ___cxa_pure_virtual: function ___cxa_pure_virtual() {
      C = !0;throw "Pure virtual function called!";
    }, ___cxa_allocate_exception: function ___cxa_allocate_exception(a) {
      return N(a);
    }, __ZSt18uncaught_exceptionv: U, DYNAMICTOP_PTR: A, tempDoublePtr: $a, ABORT: C, STACKTOP: u, STACK_MAX: Ja, cttz_i8: jb, ___dso_handle: ub }; // EMSCRIPTEN_START_ASM
  var Z = function (global, env, buffer) {
    "almost asm";

    var _ref;

    var a = global.Int8Array;var b = global.Int16Array;var c = global.Int32Array;var d = global.Uint8Array;var e = global.Uint16Array;var f = global.Uint32Array;var g = global.Float32Array;var h = global.Float64Array;var i = new a(buffer);var j = new b(buffer);var k = new c(buffer);var l = new d(buffer);var m = new e(buffer);var n = new f(buffer);var o = new g(buffer);var p = new h(buffer);var q = global.byteLength;var r = env.DYNAMICTOP_PTR | 0;var s = env.tempDoublePtr | 0;var t = env.ABORT | 0;var u = env.STACKTOP | 0;var v = env.STACK_MAX | 0;var w = env.cttz_i8 | 0;var x = env.___dso_handle | 0;var y = 0;var z = 0;var A = 0;var B = 0;var C = global.NaN,
        D = global.Infinity;var E = 0,
        F = 0,
        G = 0,
        H = 0,
        I = 0.0,
        J = 0,
        K = 0,
        L = 0,
        M = 0.0;var N = 0;var O = global.Math.floor;var P = global.Math.abs;var Q = global.Math.sqrt;var R = global.Math.pow;var S = global.Math.cos;var T = global.Math.sin;var U = global.Math.tan;var V = global.Math.acos;var W = global.Math.asin;var X = global.Math.atan;var Y = global.Math.atan2;var Z = global.Math.exp;var _ = global.Math.log;var $ = global.Math.ceil;var aa = global.Math.imul;var ba = global.Math.min;var ca = global.Math.max;var da = global.Math.clz32;var ea = env.abort;var fa = env.assert;var ga = env.enlargeMemory;var ha = env.getTotalMemory;var ia = env.abortOnCannotGrowMemory;var ja = env.invoke_iiii;var ka = env.invoke_viiiii;var la = env.invoke_vi;var ma = env.invoke_vii;var na = env.invoke_ii;var oa = env.invoke_v;var pa = env.invoke_viiiiii;var qa = env.invoke_iii;var ra = env.invoke_viiii;var sa = env.___lock;var ta = env.___cxa_atexit;var ua = env._llvm_pow_f64;var va = env.___cxa_throw;var wa = env.___syscall54;var xa = env._atexit;var ya = env._abort;var za = env.___setErrNo;var Aa = env.___syscall6;var Ba = env.___syscall140;var Ca = env.___syscall146;var Da = env._emscripten_memcpy_big;var Ea = env.___gxx_personality_v0;var Fa = env.___unlock;var Ga = env.___resumeException;var Ha = env._exit;var Ia = env.___cxa_find_matching_catch;var Ja = env.__exit;var Ka = env.___cxa_pure_virtual;var La = env.___cxa_allocate_exception;var Ma = env.__ZSt18uncaught_exceptionv;var Na = 0.0;function Oa(newBuffer) {
      if (q(newBuffer) & 16777215 || q(newBuffer) <= 16777215 || q(newBuffer) > 2147483648) return false;i = new a(newBuffer);j = new b(newBuffer);k = new c(newBuffer);l = new d(newBuffer);m = new e(newBuffer);n = new f(newBuffer);o = new g(newBuffer);p = new h(newBuffer);buffer = newBuffer;return true;
    }
    // EMSCRIPTEN_START_FUNCS
    function Ya(a) {
      a = a | 0;var b = 0;b = u;u = u + a | 0;u = u + 15 & -16;return b | 0;
    }function Za() {
      return u | 0;
    }function _a(a) {
      a = a | 0;u = a;
    }function $a(a, b) {
      a = a | 0;b = b | 0;u = a;v = b;
    }function ab(a, b) {
      a = a | 0;b = b | 0;if (!y) {
        y = a;z = b;
      }
    }function bb(a) {
      a = a | 0;N = a;
    }function cb() {
      return N | 0;
    }function db() {
      var a = 0;a = Qd(688) | 0;Vb(a);return a | 0;
    }function eb(a) {
      a = a | 0;if (!a) return;Ra[k[(k[a >> 2] | 0) + 4 >> 2] & 15](a);return;
    }function fb(a) {
      a = a | 0;return k[a + 540 >> 2] | 0;
    }function gb(a) {
      a = a | 0;return k[a + 208 >> 2] | 0;
    }function hb(a, b) {
      a = a | 0;b = b | 0;k[a + 88 >> 2] = b;return;
    }function ib(a, b) {
      a = a | 0;b = b | 0;i[a + 92 >> 0] = b & 1;return;
    }function jb(a, b) {
      a = a | 0;b = b | 0;i[a + 93 >> 0] = b & 1;return;
    }function kb(a, b) {
      a = a | 0;b = +b;p[a + 72 >> 3] = b;return;
    }function lb(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0;d = u;u = u + 16 | 0;e = d + 1 | 0;f = d;i[f >> 0] = b;i[e >> 0] = i[f >> 0] | 0;c = Wb(a, e, c) | 0;u = d;return c | 0;
    }function mb(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0;o = u;u = u + 16 | 0;l = o;k[l >> 2] = 0;m = l + 4 | 0;k[m >> 2] = 0;n = l + 8 | 0;k[n >> 2] = 0;a: do {
        if ((b | 0) > 0) {
          d = 0;f = 0;h = 0;g = 0;e = 0;while (1) {
            j = k[c + (d << 2) >> 2] | 0;j = (((j | 0) < 0 ? 0 - j | 0 : j) << 1) + -2 | j >>> 31;if ((f | 0) == (h | 0)) {
              e = (h >> 1) + 2 & -2;e = (e | 0) > 2 ? e : 2;if ((e | 0) > (2147483647 - h | 0)) {
                d = 9;break;
              }e = e + h | 0;k[n >> 2] = e;e = Nd(g, e << 2) | 0;k[l >> 2] = e;if (!e) {
                i = xc() | 0;if ((k[i >> 2] | 0) == 12) {
                  d = 9;break;
                }e = k[l >> 2] | 0;f = k[m >> 2] | 0;i = e;
              } else {
                f = h;i = e;
              }
            } else {
              i = e;e = g;
            }k[m >> 2] = f + 1;k[i + (f << 2) >> 2] = j;d = d + 1 | 0;if ((d | 0) >= (b | 0)) break a;f = k[m >> 2] | 0;h = k[n >> 2] | 0;g = e;e = i;
          }if ((d | 0) == 9) va(La(1) | 0, 8, 0);
        }
      } while (0);d = a + 628 | 0;Ab(l, d);d = $b(a, d) | 0;e = k[l >> 2] | 0;if (!e) {
        u = o;return d | 0;
      }k[m >> 2] = 0;Md(e);k[l >> 2] = 0;k[n >> 2] = 0;u = o;return d | 0;
    }function nb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0;d = a + 4 | 0;e = k[d >> 2] | 0;f = a + 8 | 0;if ((e | 0) == (k[f >> 2] | 0)) {
        c = (e >> 1) + 2 & -2;c = (c | 0) > 2 ? c : 2;if ((c | 0) > (2147483647 - e | 0)) {
          f = La(1) | 0;va(f | 0, 8, 0);
        }g = k[a >> 2] | 0;e = c + e | 0;k[f >> 2] = e;f = Nd(g, e << 2) | 0;k[a >> 2] = f;if ((f | 0) == 0 ? (g = xc() | 0, (k[g >> 2] | 0) == 12) : 0) {
          g = La(1) | 0;va(g | 0, 8, 0);
        }
      }f = k[a >> 2] | 0;g = k[d >> 2] | 0;k[d >> 2] = g + 1;k[f + (g << 2) >> 2] = k[b >> 2];return;
    }function ob(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0;d = u;u = u + 16 | 0;c = d;k[c >> 2] = (((b | 0) < 0 ? 0 - b | 0 : b) << 1) + -2 | b >>> 31;b = a + 628 | 0;if (k[b >> 2] | 0) k[a + 632 >> 2] = 0;nb(b, c);c = $b(a, b) | 0;u = d;return c | 0;
    }function pb(a) {
      a = a | 0;var b = 0;b = a + 664 | 0;k[b >> 2] = -1;k[b + 4 >> 2] = -1;k[b + 8 >> 2] = -1;k[b + 12 >> 2] = -1;if (k[a + 304 >> 2] | 0) k[a + 308 >> 2] = 0;return (rc(a) | 0) << 24 >> 24 == 0 | 0;
    }function qb(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0;o = u;u = u + 16 | 0;l = o;k[l >> 2] = 0;m = l + 4 | 0;k[m >> 2] = 0;n = l + 8 | 0;k[n >> 2] = 0;a: do {
        if ((b | 0) > 0) {
          d = 0;f = 0;h = 0;g = 0;e = 0;while (1) {
            j = k[c + (d << 2) >> 2] | 0;j = (((j | 0) < 0 ? 0 - j | 0 : j) << 1) + -2 | j >>> 31;if ((f | 0) == (h | 0)) {
              e = (h >> 1) + 2 & -2;e = (e | 0) > 2 ? e : 2;if ((e | 0) > (2147483647 - h | 0)) {
                d = 9;break;
              }e = e + h | 0;k[n >> 2] = e;e = Nd(g, e << 2) | 0;k[l >> 2] = e;if (!e) {
                i = xc() | 0;if ((k[i >> 2] | 0) == 12) {
                  d = 9;break;
                }e = k[l >> 2] | 0;f = k[m >> 2] | 0;i = e;
              } else {
                f = h;i = e;
              }
            } else {
              i = e;e = g;
            }k[m >> 2] = f + 1;k[i + (f << 2) >> 2] = j;d = d + 1 | 0;if ((d | 0) >= (b | 0)) break a;f = k[m >> 2] | 0;h = k[n >> 2] | 0;g = e;e = i;
          }if ((d | 0) == 9) va(La(1) | 0, 8, 0);
        }
      } while (0);d = a + 664 | 0;k[d >> 2] = -1;k[d + 4 >> 2] = -1;k[d + 8 >> 2] = -1;k[d + 12 >> 2] = -1;Ab(l, a + 304 | 0);d = (rc(a) | 0) << 24 >> 24 == 0;e = k[l >> 2] | 0;if (!e) {
        u = o;return d | 0;
      }k[m >> 2] = 0;Md(e);k[l >> 2] = 0;k[n >> 2] = 0;u = o;return d | 0;
    }function rb(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0;C = u;u = u + 16 | 0;z = C;y = k[a + 540 >> 2] | 0;k[z >> 2] = 0;A = z + 4 | 0;k[A >> 2] = 0;B = z + 8 | 0;k[B >> 2] = 0;t = (y | 0) < -1 ? -1 : y + 1 | 0;x = Rd(t) | 0;qe(x | 0, 0, t | 0) | 0;a: do {
        if ((b | 0) > 0) {
          if (d) {
            s = 0;g = 0;l = 0;m = 0;n = 0;o = 0;h = 0;q = 0;j = 0;while (1) {
              t = c + (s << 2) | 0;r = k[t >> 2] | 0;r = (((r | 0) < 0 ? 0 - r | 0 : r) << 1) + -2 | r >>> 31;if ((h | 0) == (q | 0)) {
                g = (q >> 1) + 2 & -2;g = (g | 0) > 2 ? g : 2;if ((g | 0) > (2147483647 - q | 0)) {
                  g = 25;break;
                }g = g + q | 0;k[B >> 2] = g;g = Nd(j, g << 2) | 0;k[z >> 2] = g;if (!g) {
                  q = xc() | 0;if ((k[q >> 2] | 0) == 12) {
                    g = 25;break;
                  }p = k[z >> 2] | 0;j = p;l = p;m = p;n = p;h = k[A >> 2] | 0;
                } else {
                  j = g;l = g;m = g;n = g;h = q;p = g;
                }
              } else {
                j = g;p = o;
              }k[A >> 2] = h + 1;k[p + (h << 2) >> 2] = r;i[x + (k[t >> 2] | 0) >> 0] = 1;g = s + 1 | 0;if ((g | 0) >= (b | 0)) {
                f = j;v = l;w = m;e = n;break a;
              }s = g;g = j;o = p;h = k[A >> 2] | 0;q = k[B >> 2] | 0;j = p;
            }if ((g | 0) == 25) {
              C = La(1) | 0;va(C | 0, 8, 0);
            }
          } else {
            g = 0;o = 0;p = 0;m = 0;q = 0;l = 0;h = 0;n = 0;j = 0;while (1) {
              t = c + (g << 2) | 0;s = k[t >> 2] | 0;s = (((s | 0) < 0 ? 0 - s | 0 : s) << 1) + -2 | s >>> 31;if ((h | 0) == (n | 0)) {
                h = (n >> 1) + 2 & -2;h = (h | 0) > 2 ? h : 2;if ((h | 0) > (2147483647 - n | 0)) {
                  g = 25;break;
                }h = h + n | 0;k[B >> 2] = h;h = Nd(j, h << 2) | 0;k[z >> 2] = h;if (!h) {
                  r = xc() | 0;if ((k[r >> 2] | 0) == 12) {
                    g = 25;break;
                  }h = k[z >> 2] | 0;n = k[A >> 2] | 0;r = h;j = h;l = h;m = h;
                } else {
                  r = h;j = h;l = h;m = h;
                }
              } else {
                n = h;r = l;j = o;l = p;h = q;
              }k[A >> 2] = n + 1;k[r + (n << 2) >> 2] = s;i[x + (0 - (k[t >> 2] | 0)) >> 0] = 1;g = g + 1 | 0;if ((g | 0) >= (b | 0)) {
                f = j;v = l;w = m;e = h;break a;
              }o = j;p = l;q = h;l = r;h = k[A >> 2] | 0;n = k[B >> 2] | 0;j = r;
            }if ((g | 0) == 25) {
              C = La(1) | 0;va(C | 0, 8, 0);
            }
          }
        } else {
          f = 0;v = 0;w = 0;e = 0;
        }
      } while (0);b: do {
        if ((y | 0) >= 1) if (d) {
          j = 1;e = v;while (1) {
            if (!(i[x + j >> 0] | 0)) {
              h = (j << 1) + -2 | (0 - j | 0) >>> 31;g = k[A >> 2] | 0;if ((g | 0) == (k[B >> 2] | 0)) {
                f = (g >> 1) + 2 & -2;f = (f | 0) > 2 ? f : 2;if ((f | 0) > (2147483647 - g | 0)) {
                  g = 34;break;
                }w = f + g | 0;k[B >> 2] = w;e = Nd(e, w << 2) | 0;k[z >> 2] = e;if (!e) {
                  w = xc() | 0;if ((k[w >> 2] | 0) == 12) {
                    g = 34;break;
                  }g = k[A >> 2] | 0;e = k[z >> 2] | 0;
                }
              } else e = f;k[A >> 2] = g + 1;k[e + (g << 2) >> 2] = h;f = e;
            }if ((j | 0) < (y | 0)) j = j + 1 | 0;else break b;
          }if ((g | 0) == 34) {
            C = La(1) | 0;va(C | 0, 8, 0);
          }
        } else {
          j = 1;f = w;while (1) {
            if (!(i[x + j >> 0] | 0)) {
              h = (j << 1) + -2 | j >>> 31;g = k[A >> 2] | 0;if ((g | 0) == (k[B >> 2] | 0)) {
                f = (g >> 1) + 2 & -2;f = (f | 0) > 2 ? f : 2;if ((f | 0) > (2147483647 - g | 0)) {
                  g = 34;break;
                }w = f + g | 0;k[B >> 2] = w;e = Nd(e, w << 2) | 0;k[z >> 2] = e;if (!e) {
                  w = xc() | 0;if ((k[w >> 2] | 0) == 12) {
                    g = 34;break;
                  }g = k[A >> 2] | 0;e = k[z >> 2] | 0;
                }
              } else e = f;k[A >> 2] = g + 1;k[e + (g << 2) >> 2] = h;f = e;
            }if ((j | 0) < (y | 0)) j = j + 1 | 0;else break b;
          }if ((g | 0) == 34) {
            C = La(1) | 0;va(C | 0, 8, 0);
          }
        }
      } while (0);Td(x);e = a + 664 | 0;k[e >> 2] = -1;k[e + 4 >> 2] = -1;k[e + 8 >> 2] = -1;k[e + 12 >> 2] = -1;Ab(z, a + 304 | 0);e = (rc(a) | 0) << 24 >> 24 == 0;f = k[z >> 2] | 0;if (!f) {
        u = C;return e | 0;
      }k[A >> 2] = 0;Md(f);k[z >> 2] = 0;k[B >> 2] = 0;u = C;return e | 0;
    }function sb(a) {
      a = a | 0;return pc(a) | 0;
    }function tb(a, b) {
      a = a | 0;b = b | 0;return (i[(k[a + 4 >> 2] | 0) + (b + -1) >> 0] | 0) != 1 | 0;
    }function ub(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0;if ((c | 0) >= (d | 0)) return;e = k[a + 4 >> 2] | 0;a = c;do {
        k[b + (a - c << 2) >> 2] = (i[e + a >> 0] | 0) != 1 & 1;a = a + 1 | 0;
      } while ((a | 0) != (d | 0));return;
    }function vb(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;if ((c | 0) >= (d | 0)) {
        d = 0;return d | 0;
      }g = e - c | 0;f = k[a + 4 >> 2] | 0;e = 0;a = c;do {
        if (!(i[f + a >> 0] | 0)) {
          k[b + (e << 2) >> 2] = g + a;e = e + 1 | 0;
        }a = a + 1 | 0;
      } while ((a | 0) != (d | 0));return e | 0;
    }function wb(a) {
      a = a | 0;return k[a + 36 >> 2] | 0;
    }function xb(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0;g = a + 36 | 0;e = k[g >> 2] | 0;if ((e | 0) <= 0) {
        g = e;return g | 0;
      }f = d - b | 0;e = k[a + 32 >> 2] | 0;d = 0;do {
        k[c + (d << 2) >> 2] = f + (k[e + (d << 2) >> 2] >> 1);d = d + 1 | 0;b = k[g >> 2] | 0;
      } while ((d | 0) < (b | 0));return b | 0;
    }function yb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0;m = u;u = u + 32 | 0;i = m + 12 | 0;e = m;k[i >> 2] = 0;j = i + 4 | 0;k[j >> 2] = 0;l = i + 8 | 0;k[l >> 2] = 0;k[e >> 2] = 0;f = e + 4 | 0;k[f >> 2] = 0;g = e + 8 | 0;k[g >> 2] = 0;sc(a, i, e, 1) | 0;h = k[f >> 2] | 0;c = k[e >> 2] | 0;if ((h | 0) <= 0) {
        if (c | 0) d = 3;
      } else {
        a = 0;do {
          d = k[c + (a << 2) >> 2] | 0;d = aa((d << 1 & 2 ^ 2) + -1 | 0, (d >> 1) + 1 | 0) | 0;k[b + (a << 2) >> 2] = d;a = a + 1 | 0;
        } while ((a | 0) != (h | 0));d = 3;
      }if ((d | 0) == 3) {
        k[f >> 2] = 0;Md(c);k[e >> 2] = 0;k[g >> 2] = 0;
      }a = k[i >> 2] | 0;if (!a) {
        u = m;return h | 0;
      }k[j >> 2] = 0;Md(a);k[i >> 2] = 0;k[l >> 2] = 0;u = m;return h | 0;
    }function zb(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0;r = u;u = u + 32 | 0;o = r + 12 | 0;n = r;k[o >> 2] = 0;p = o + 4 | 0;k[p >> 2] = 0;q = o + 8 | 0;k[q >> 2] = 0;a: do {
        if ((d | 0) > 0) {
          e = 0;g = 0;i = 0;h = 0;f = 0;while (1) {
            l = k[c + (e << 2) >> 2] | 0;l = (((l | 0) < 0 ? 0 - l | 0 : l) << 1) + -2 | l >>> 31;if ((g | 0) == (i | 0)) {
              f = (i >> 1) + 2 & -2;f = (f | 0) > 2 ? f : 2;if ((f | 0) > (2147483647 - i | 0)) {
                m = 9;break;
              }f = f + i | 0;k[q >> 2] = f;f = Nd(h, f << 2) | 0;k[o >> 2] = f;if (!f) {
                j = xc() | 0;if ((k[j >> 2] | 0) == 12) {
                  m = 9;break;
                }f = k[o >> 2] | 0;g = k[p >> 2] | 0;j = f;
              } else {
                g = i;j = f;
              }
            } else {
              j = f;f = h;
            }k[p >> 2] = g + 1;k[j + (g << 2) >> 2] = l;e = e + 1 | 0;if ((e | 0) >= (d | 0)) break a;g = k[p >> 2] | 0;i = k[q >> 2] | 0;h = f;f = j;
          }if ((m | 0) == 9) va(La(1) | 0, 8, 0);
        }
      } while (0);k[n >> 2] = 0;i = n + 4 | 0;k[i >> 2] = 0;g = n + 8 | 0;k[g >> 2] = 0;sc(a, o, n, 1) | 0;h = k[i >> 2] | 0;f = k[n >> 2] | 0;if ((h | 0) <= 0) {
        if (f | 0) m = 13;
      } else {
        e = 0;do {
          m = k[f + (e << 2) >> 2] | 0;m = aa((m << 1 & 2 ^ 2) + -1 | 0, (m >> 1) + 1 | 0) | 0;k[b + (e << 2) >> 2] = m;e = e + 1 | 0;
        } while ((e | 0) != (h | 0));m = 13;
      }if ((m | 0) == 13) {
        k[i >> 2] = 0;Md(f);k[n >> 2] = 0;k[g >> 2] = 0;
      }e = k[o >> 2] | 0;if (!e) {
        u = r;return h | 0;
      }k[p >> 2] = 0;Md(e);k[o >> 2] = 0;k[q >> 2] = 0;u = r;return h | 0;
    }function Ab(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;g = k[b >> 2] | 0;h = b + 4 | 0;if (!g) d = k[h >> 2] | 0;else {
        k[h >> 2] = 0;d = 0;
      }i = a + 4 | 0;c = k[i >> 2] | 0;if ((d | 0) < (c | 0)) {
        e = b + 8 | 0;f = k[e >> 2] | 0;if ((f | 0) < (c | 0)) {
          j = c + 1 - f & -2;d = (f >> 1) + 2 & -2;d = (j | 0) > (d | 0) ? j : d;if ((d | 0) > (2147483647 - f | 0)) {
            j = La(1) | 0;va(j | 0, 8, 0);
          }j = d + f | 0;k[e >> 2] = j;j = Nd(g, j << 2) | 0;k[b >> 2] = j;if ((j | 0) == 0 ? (j = xc() | 0, (k[j >> 2] | 0) == 12) : 0) {
            j = La(1) | 0;va(j | 0, 8, 0);
          }
        }d = k[h >> 2] | 0;if ((d | 0) < (c | 0)) do {
          k[(k[b >> 2] | 0) + (d << 2) >> 2] = 0;d = d + 1 | 0;
        } while ((d | 0) != (c | 0));k[h >> 2] = c;c = k[i >> 2] | 0;
      }if ((c | 0) <= 0) return;e = k[a >> 2] | 0;d = k[b >> 2] | 0;c = 0;do {
        k[d + (c << 2) >> 2] = k[e + (c << 2) >> 2];c = c + 1 | 0;
      } while ((c | 0) < (k[i >> 2] | 0));return;
    }function Bb(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;k[a >> 2] = 144;b = a + 628 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 632 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 636 >> 2] = 0;
      }b = a + 616 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 620 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 624 >> 2] = 0;
      }b = a + 604 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 608 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 612 >> 2] = 0;
      }b = a + 588 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 592 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 596 >> 2] = 0;
      }b = a + 576 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 580 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 584 >> 2] = 0;
      }b = a + 564 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 568 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 572 >> 2] = 0;
      }b = k[a + 544 >> 2] | 0;if (b | 0) Md(b);b = a + 472 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 476 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 480 >> 2] = 0;
      }b = a + 460 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 464 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 468 >> 2] = 0;
      }h = a + 412 | 0;b = a + 444 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 448 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 452 >> 2] = 0;
      }b = a + 428 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 432 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 436 >> 2] = 0;
      }b = k[h >> 2] | 0;if (b | 0) {
        g = a + 416 | 0;c = k[g >> 2] | 0;if ((c | 0) > 0) {
          f = 0;while (1) {
            d = b + (f * 12 | 0) | 0;e = k[d >> 2] | 0;if (e) {
              k[b + (f * 12 | 0) + 4 >> 2] = 0;Md(e);k[d >> 2] = 0;k[b + (f * 12 | 0) + 8 >> 2] = 0;c = k[g >> 2] | 0;
            }b = f + 1 | 0;if ((b | 0) >= (c | 0)) break;f = b;b = k[h >> 2] | 0;
          }b = k[h >> 2] | 0;
        }k[g >> 2] = 0;Md(b);k[h >> 2] = 0;k[a + 420 >> 2] = 0;
      }b = a + 396 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 400 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 404 >> 2] = 0;
      }b = a + 380 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 384 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 388 >> 2] = 0;
      }b = a + 364 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 368 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 372 >> 2] = 0;
      }b = a + 348 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 352 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 356 >> 2] = 0;
      }b = a + 332 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 336 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 340 >> 2] = 0;
      }b = a + 316 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 320 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 324 >> 2] = 0;
      }b = a + 304 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 308 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 312 >> 2] = 0;
      }b = a + 292 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 296 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 300 >> 2] = 0;
      }b = a + 280 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 284 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 288 >> 2] = 0;
      }b = a + 268 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 272 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 276 >> 2] = 0;
      }b = a + 256 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 260 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 264 >> 2] = 0;
      }b = a + 32 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 36 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 40 >> 2] = 0;
      }b = a + 16 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 20 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 24 >> 2] = 0;
      }b = a + 4 | 0;c = k[b >> 2] | 0;if (!c) return;k[a + 8 >> 2] = 0;Md(c);k[b >> 2] = 0;k[a + 12 >> 2] = 0;return;
    }function Cb(a) {
      a = a | 0;Bb(a);Sd(a);return;
    }function Db(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0;h = u;u = u + 32 | 0;c = h;d = h + 8 | 0;e = a + 544 | 0;f = a + 548 | 0;g = a + 556 | 0;b = (k[f >> 2] | 0) - (k[g >> 2] | 0) | 0;k[d >> 2] = 0;k[d + 4 >> 2] = 0;k[d + 8 >> 2] = 0;k[d + 12 >> 2] = 0;Eb(d, b);b = d + 16 | 0;i[b >> 0] = 0;Fb(a, d);if ((k[a + 44 >> 2] | 0) > 1) {
        j = k[d + 4 >> 2] << 2;k[c >> 2] = k[f >> 2] << 2;k[c + 4 >> 2] = j;Id(909, c) | 0;
      }i[a + 560 >> 0] = i[b >> 0] | 0;b = k[e >> 2] | 0;if (b | 0) Md(b);k[e >> 2] = k[d >> 2];k[f >> 2] = k[d + 4 >> 2];k[a + 552 >> 2] = k[d + 8 >> 2];k[g >> 2] = k[d + 12 >> 2];u = h;return;
    }function Eb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0;d = a + 8 | 0;e = k[d >> 2] | 0;if (e >>> 0 < b >>> 0) c = e;else return;while (1) {
        if (c >>> 0 >= b >>> 0) break;c = ((c >>> 3) + 2 + (c >>> 1) & -2) + c | 0;k[d >> 2] = c;if (c >>> 0 <= e >>> 0) {
          f = 4;break;
        }
      }if ((f | 0) == 4) va(La(1) | 0, 8, 0);c = Nd(k[a >> 2] | 0, c << 2) | 0;if ((c | 0) == 0 ? (f = xc() | 0, (k[f >> 2] | 0) == 12) : 0) va(La(1) | 0, 8, 0);k[a >> 2] = c;return;
    }function Fb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0;s = a + 412 | 0;r = a + 448 | 0;d = k[r >> 2] | 0;o = a + 444 | 0;c = k[o >> 2] | 0;if ((d | 0) > 0) {
        p = a + 428 | 0;q = a + 456 | 0;n = 0;do {
          m = c + (n << 2) | 0;e = k[m >> 2] | 0;if (i[(k[p >> 2] | 0) + e >> 0] | 0) {
            c = k[s >> 2] | 0;j = c + (e * 12 | 0) + 4 | 0;d = k[j >> 2] | 0;if ((d | 0) > 0) {
              h = c + (e * 12 | 0) | 0;c = 0;e = 0;do {
                f = k[h >> 2] | 0;g = f + (c << 3) | 0;if ((k[(k[k[q >> 2] >> 2] | 0) + (k[g >> 2] << 2) >> 2] & 3 | 0) != 1) {
                  t = g;g = k[t + 4 >> 2] | 0;d = f + (e << 3) | 0;k[d >> 2] = k[t >> 2];k[d + 4 >> 2] = g;e = e + 1 | 0;d = k[j >> 2] | 0;
                }c = c + 1 | 0;
              } while ((c | 0) < (d | 0));
            } else {
              e = 0;c = 0;
            }c = c - e | 0;if ((c | 0) > 0) k[j >> 2] = d - c;i[(k[p >> 2] | 0) + (k[m >> 2] | 0) >> 0] = 0;c = k[o >> 2] | 0;d = k[r >> 2] | 0;
          }n = n + 1 | 0;
        } while ((n | 0) < (d | 0));
      }if (c | 0) k[r >> 2] = 0;m = a + 540 | 0;if ((k[m >> 2] | 0) > 0) {
        n = a + 544 | 0;j = 0;do {
          h = j << 1;c = k[s >> 2] | 0;g = c + (h * 12 | 0) + 4 | 0;if ((k[g >> 2] | 0) > 0) {
            d = c + (h * 12 | 0) | 0;c = 0;do {
              e = (k[d >> 2] | 0) + (c << 3) | 0;f = (k[n >> 2] | 0) + (k[e >> 2] << 2) | 0;if (!(k[f >> 2] & 16)) {
                t = Gb(b, f) | 0;k[e >> 2] = t;k[f >> 2] = k[f >> 2] | 16;k[f + 4 >> 2] = t;
              } else k[e >> 2] = k[f + 4 >> 2];c = c + 1 | 0;
            } while ((c | 0) < (k[g >> 2] | 0));c = k[s >> 2] | 0;
          }d = h | 1;g = c + (d * 12 | 0) + 4 | 0;if ((k[g >> 2] | 0) > 0) {
            d = c + (d * 12 | 0) | 0;c = 0;do {
              e = (k[d >> 2] | 0) + (c << 3) | 0;f = (k[n >> 2] | 0) + (k[e >> 2] << 2) | 0;if (!(k[f >> 2] & 16)) {
                t = Gb(b, f) | 0;k[e >> 2] = t;k[f >> 2] = k[f >> 2] | 16;k[f + 4 >> 2] = t;
              } else k[e >> 2] = k[f + 4 >> 2];c = c + 1 | 0;
            } while ((c | 0) < (k[g >> 2] | 0));
          }j = j + 1 | 0;
        } while ((j | 0) < (k[m >> 2] | 0));
      }m = a + 284 | 0;if ((k[m >> 2] | 0) > 0) {
        n = a + 280 | 0;o = a + 396 | 0;p = a + 544 | 0;q = a + 332 | 0;c = 0;do {
          e = k[o >> 2] | 0;f = e + (k[(k[n >> 2] | 0) + (c << 2) >> 2] >> 1 << 3) | 0;g = k[f >> 2] | 0;do {
            if ((g | 0) != -1) {
              h = (k[p >> 2] | 0) + (g << 2) | 0;d = k[h + 4 >> 2] | 0;if (k[h >> 2] & 16 | 0) {
                k[f >> 2] = d;break;
              }j = d >> 1;t = (l[(k[q >> 2] | 0) + j >> 0] ^ d & 1) & 255;s = i[6308] | 0;if (t << 24 >> 24 == s << 24 >> 24 & ((s & 255) >>> 1 ^ 1) | s & 2 & t & 255 | 0 ? (t = k[e + (j << 3) >> 2] | 0, (t | 0) != -1 & (t | 0) == (g | 0)) : 0) {
                t = Gb(b, h) | 0;k[f >> 2] = t;k[h >> 2] = k[h >> 2] | 16;k[h + 4 >> 2] = t;
              }
            }
          } while (0);c = c + 1 | 0;
        } while ((c | 0) < (k[m >> 2] | 0));
      }o = a + 272 | 0;d = k[o >> 2] | 0;if ((d | 0) > 0) {
        m = a + 268 | 0;n = a + 544 | 0;c = 0;e = 0;f = k[m >> 2] | 0;do {
          g = f + (c << 2) | 0;h = (k[n >> 2] | 0) + (k[g >> 2] << 2) | 0;j = k[h >> 2] | 0;if ((j & 3 | 0) != 1) {
            if (!(j & 16)) {
              d = Gb(b, h) | 0;k[g >> 2] = d;k[h >> 2] = k[h >> 2] | 16;k[h + 4 >> 2] = d;d = k[m >> 2] | 0;f = d;d = k[d + (c << 2) >> 2] | 0;
            } else {
              d = k[h + 4 >> 2] | 0;k[g >> 2] = d;
            }k[f + (e << 2) >> 2] = d;e = e + 1 | 0;d = k[o >> 2] | 0;
          }c = c + 1 | 0;
        } while ((c | 0) < (d | 0));
      } else {
        e = 0;c = 0;
      }c = c - e | 0;if ((c | 0) > 0) k[o >> 2] = d - c;o = a + 260 | 0;d = k[o >> 2] | 0;if ((d | 0) > 0) {
        n = a + 256 | 0;m = a + 544 | 0;e = 0;c = 0;f = k[n >> 2] | 0;do {
          g = f + (e << 2) | 0;h = (k[m >> 2] | 0) + (k[g >> 2] << 2) | 0;j = k[h >> 2] | 0;if ((j & 3 | 0) != 1) {
            if (!(j & 16)) {
              d = Gb(b, h) | 0;k[g >> 2] = d;k[h >> 2] = k[h >> 2] | 16;k[h + 4 >> 2] = d;d = k[n >> 2] | 0;f = d;d = k[d + (e << 2) >> 2] | 0;
            } else {
              d = k[h + 4 >> 2] | 0;k[g >> 2] = d;
            }k[f + (c << 2) >> 2] = d;c = c + 1 | 0;d = k[o >> 2] | 0;
          }e = e + 1 | 0;
        } while ((e | 0) < (d | 0));
      } else {
        e = 0;c = 0;
      }c = e - c | 0;if ((c | 0) <= 0) return;k[o >> 2] = d - c;return;
    }function Gb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0;d = k[b >> 2] | 0;c = d >>> 2 & 1 | (l[a + 16 >> 0] | 0);d = ((c + (d >>> 5) << 2) + 4 | 0) >>> 2;f = a + 4 | 0;Eb(a, d + (k[f >> 2] | 0) | 0);e = k[f >> 2] | 0;d = d + e | 0;k[f >> 2] = d;if (d >>> 0 < e >>> 0) va(La(1) | 0, 8, 0);d = (k[a >> 2] | 0) + (e << 2) | 0;a = k[b >> 2] & -9 | c << 3;k[d >> 2] = a;if ((k[b >> 2] | 0) >>> 0 > 31) {
        a = 0;do {
          k[d + 4 + (a << 2) >> 2] = k[b + 4 + (a << 2) >> 2];a = a + 1 | 0;
        } while ((a | 0) < ((k[b >> 2] | 0) >>> 5 | 0));a = k[d >> 2] | 0;
      }c = a >>> 5;if (!(a & 8)) return e | 0;k[d + 4 + (c << 2) >> 2] = k[b + 4 + (c << 2) >> 2];return e | 0;
    }function Hb() {
      var a = 0;i[6308] = 0;i[6309] = 1;i[6310] = 2;Ib(5200, 992, 1002, 1037, 1042);k[1300] = 164;p[653] = 0.0;p[654] = 1.0;i[5240] = 0;i[5241] = 0;p[656] = .95;Ib(5256, 1051, 1061, 1037, 1042);k[1314] = 164;p[660] = 0.0;p[661] = 1.0;i[5296] = 0;i[5297] = 0;p[663] = .999;Ib(5312, 1094, 1103, 1037, 1042);k[1328] = 164;p[667] = 0.0;p[668] = 1.0;i[5352] = 1;i[5353] = 1;p[670] = 0.0;Ib(5368, 1185, 1194, 1037, 1042);k[1342] = 164;p[674] = 0.0;p[675] = D;i[5408] = 0;i[5409] = 0;p[677] = 91648253.0;Ib(5544, 1232, 1243, 1037, 1307);k[1386] = 188;a = 5564;k[a >> 2] = 0;k[a + 4 >> 2] = 2;k[1393] = 2;Ib(5576, 1315, 1328, 1037, 1307);k[1394] = 188;a = 5596;k[a >> 2] = 0;k[a + 4 >> 2] = 2;k[1401] = 2;Ib(5608, 1391, 1400, 1037, 1431);k[1402] = 212;i[5628] = 0;Ib(5632, 1438, 1443, 1037, 1431);k[1408] = 212;i[5652] = 1;Ib(5656, 1473, 1480, 1037, 1307);k[1414] = 188;a = 5676;k[a >> 2] = 1;k[a + 4 >> 2] = 2147483647;k[1421] = 100;Ib(5424, 1506, 1511, 1037, 1042);k[1356] = 164;p[681] = 1.0;p[682] = D;i[5464] = 0;i[5465] = 0;p[684] = 2.0;Ib(5480, 1544, 1552, 1037, 1042);k[1370] = 164;p[688] = 0.0;p[689] = D;i[5520] = 0;i[5521] = 0;p[691] = .2;Ib(5688, 1631, 1643, 1037, 1307);k[1422] = 188;a = 5708;k[a >> 2] = 0;k[a + 4 >> 2] = 2147483647;k[1429] = 0;return;
    }function Ib(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;k[a >> 2] = 236;k[a + 4 >> 2] = b;k[a + 8 >> 2] = c;k[a + 12 >> 2] = d;k[a + 16 >> 2] = e;if ((i[5536] | 0) == 0 ? ke(5536) | 0 : 0) {
        k[1430] = 0;k[1431] = 0;k[1432] = 0;ta(14, 5720, x | 0) | 0;
      }b = k[1431] | 0;if ((b | 0) != (k[1432] | 0)) {
        e = b;d = k[1430] | 0;c = e + 1 | 0;k[1431] = c;e = d + (e << 2) | 0;k[e >> 2] = a;return;
      }c = (b >> 1) + 2 & -2;c = (c | 0) > 2 ? c : 2;if ((c | 0) > (2147483647 - b | 0)) {
        e = La(1) | 0;va(e | 0, 8, 0);
      }d = k[1430] | 0;e = c + b | 0;k[1432] = e;e = Nd(d, e << 2) | 0;k[1430] = e;if ((e | 0) == 0 ? (e = xc() | 0, (k[e >> 2] | 0) == 12) : 0) {
        e = La(1) | 0;va(e | 0, 8, 0);
      }e = k[1431] | 0;d = k[1430] | 0;c = e + 1 | 0;k[1431] = c;e = d + (e << 2) | 0;k[e >> 2] = a;return;
    }function Jb(a) {
      a = a | 0;return;
    }function Kb(a) {
      a = a | 0;Sd(a);return;
    }function Lb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0;if ((i[b >> 0] | 0) != 45) {
        a = 0;return a | 0;
      }c = b + 1 | 0;if ((i[c >> 0] | 0) == 110 ? (i[b + 2 >> 0] | 0) == 111 : 0) {
        e = (i[b + 3 >> 0] | 0) == 45;d = (e ^ 1) & 1;c = e ? b + 4 | 0 : c;
      } else d = 1;if (Dc(c, k[a + 4 >> 2] | 0) | 0) {
        e = 0;return e | 0;
      }i[a + 20 >> 0] = d;e = 1;return e | 0;
    }function Mb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0;h = u;u = u + 32 | 0;g = h + 16 | 0;f = h + 8 | 0;c = h;d = k[63] | 0;e = a + 4 | 0;j = k[e >> 2] | 0;k[c >> 2] = j;k[c + 4 >> 2] = j;Fd(d, 1671, c) | 0;c = 0;while (1) {
        j = c >>> 0 < (32 - ((Fc(k[e >> 2] | 0) | 0) << 1) | 0) >>> 0;Gd(32, d) | 0;if (j) c = c + 1 | 0;else break;
      }k[f >> 2] = i[a + 20 >> 0] | 0 ? 1685 : 1688;Fd(d, 1692, f) | 0;if (!b) {
        u = h;return;
      }k[g >> 2] = k[a + 8 >> 2];Fd(d, 1707, g) | 0;Gd(10, d) | 0;u = h;return;
    }function Nb(a) {
      a = a | 0;Sd(a);return;
    }function Ob(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0;n = u;u = u + 32 | 0;m = n + 8 | 0;l = n;j = n + 16 | 0;if ((i[b >> 0] | 0) != 45) {
        m = 0;u = n;return m | 0;
      }e = b + 1 | 0;g = a + 4 | 0;f = k[g >> 2] | 0;c = i[f >> 0] | 0;a: do {
        if (!(c << 24 >> 24)) b = e;else {
          d = 0;b = e;while (1) {
            d = d + 1 | 0;if ((i[b >> 0] | 0) != c << 24 >> 24) {
              b = 0;break;
            }c = i[f + d >> 0] | 0;b = e + d | 0;if (!(c << 24 >> 24)) break a;
          }u = n;return b | 0;
        }
      } while (0);if ((i[b >> 0] | 0) != 61) {
        m = 0;u = n;return m | 0;
      }b = b + 1 | 0;c = md(b, j, 10) | 0;do {
        if (k[j >> 2] | 0) {
          if ((c | 0) > (k[a + 24 >> 2] | 0)) {
            j = k[63] | 0;f = k[g >> 2] | 0;k[l >> 2] = b;k[l + 4 >> 2] = f;Fd(j, 1815, l) | 0;Ha(1);
          }if ((c | 0) < (k[a + 20 >> 2] | 0)) {
            l = k[63] | 0;j = k[g >> 2] | 0;k[m >> 2] = b;k[m + 4 >> 2] = j;Fd(l, 1864, m) | 0;Ha(1);
          } else {
            k[a + 28 >> 2] = c;h = 1;break;
          }
        } else h = 0;
      } while (0);m = h;u = n;return m | 0;
    }function Pb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = u;u = u + 48 | 0;f = i + 32 | 0;h = i + 24 | 0;g = i + 16 | 0;d = i + 8 | 0;c = i;e = k[63] | 0;j = k[a + 16 >> 2] | 0;k[c >> 2] = k[a + 4 >> 2];k[c + 4 >> 2] = j;Fd(e, 1761, c) | 0;c = k[a + 20 >> 2] | 0;if ((c | 0) == -2147483648) sd(1779, 4, 1, e) | 0;else {
        k[d >> 2] = c;Fd(e, 1784, d) | 0;
      }sd(1788, 4, 1, e) | 0;c = k[a + 24 >> 2] | 0;if ((c | 0) == 2147483647) sd(1793, 4, 1, e) | 0;else {
        k[g >> 2] = c;Fd(e, 1784, g) | 0;
      }k[h >> 2] = k[a + 28 >> 2];Fd(e, 1798, h) | 0;if (!b) {
        u = i;return;
      }k[f >> 2] = k[a + 8 >> 2];Fd(e, 1707, f) | 0;Gd(10, e) | 0;u = i;return;
    }function Qb(a) {
      a = a | 0;Sd(a);return;
    }function Rb(a, b) {
      a = a | 0;b = b | 0;var c = 0.0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0.0;n = u;u = u + 32 | 0;m = n + 8 | 0;l = n;j = n + 16 | 0;if ((i[b >> 0] | 0) != 45) {
        m = 0;u = n;return m | 0;
      }f = b + 1 | 0;h = a + 4 | 0;g = k[h >> 2] | 0;d = i[g >> 0] | 0;a: do {
        if (!(d << 24 >> 24)) b = f;else {
          e = 0;b = f;while (1) {
            e = e + 1 | 0;if ((i[b >> 0] | 0) != d << 24 >> 24) {
              b = 0;break;
            }d = i[g + e >> 0] | 0;b = f + e | 0;if (!(d << 24 >> 24)) break a;
          }u = n;return b | 0;
        }
      } while (0);if ((i[b >> 0] | 0) != 61) {
        m = 0;u = n;return m | 0;
      }b = b + 1 | 0;c = +Kd(b, j);if (!(k[j >> 2] | 0)) b = 0;else {
        o = +p[a + 32 >> 3];if (c >= o ? c != o | (i[a + 41 >> 0] | 0) == 0 : 0) {
          j = k[63] | 0;g = k[h >> 2] | 0;k[l >> 2] = b;k[l + 4 >> 2] = g;Fd(j, 1815, l) | 0;Ha(1);
        }o = +p[a + 24 >> 3];if (c <= o ? c != o | (i[a + 40 >> 0] | 0) == 0 : 0) {
          l = k[63] | 0;j = k[h >> 2] | 0;k[m >> 2] = b;k[m + 4 >> 2] = j;Fd(l, 1864, m) | 0;Ha(1);
        }p[a + 48 >> 3] = c;b = 1;
      }m = b;u = n;return m | 0;
    }function Sb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0.0,
          h = 0,
          j = 0.0,
          l = 0.0,
          m = 0,
          n = 0;e = u;u = u + 64 | 0;d = e + 48 | 0;f = e;c = k[63] | 0;n = k[a + 16 >> 2] | 0;m = i[a + 40 >> 0] | 0 ? 91 : 40;l = +p[a + 24 >> 3];j = +p[a + 32 >> 3];h = i[a + 41 >> 0] | 0 ? 93 : 41;g = +p[a + 48 >> 3];k[f >> 2] = k[a + 4 >> 2];k[f + 4 >> 2] = n;k[f + 8 >> 2] = m;p[f + 16 >> 3] = l;p[f + 24 >> 3] = j;k[f + 32 >> 2] = h;p[f + 40 >> 3] = g;Fd(c, 1934, f) | 0;if (!b) {
        u = e;return;
      }k[d >> 2] = k[a + 8 >> 2];Fd(c, 1707, d) | 0;Gd(10, c) | 0;u = e;return;
    }function Tb(a) {
      a = a | 0;var b = 0;b = k[a >> 2] | 0;if (!b) return;k[a + 4 >> 2] = 0;Md(b);k[a >> 2] = 0;k[a + 8 >> 2] = 0;return;
    }function Ub(a) {
      a = a | 0;Sd(a);return;
    }function Vb(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0;k[a >> 2] = 144;c = a + 4 | 0;b = a + 32 | 0;k[c >> 2] = 0;k[c + 4 >> 2] = 0;k[c + 8 >> 2] = 0;k[c + 12 >> 2] = 0;k[c + 16 >> 2] = 0;k[c + 20 >> 2] = 0;k[b >> 2] = 0;k[b + 4 >> 2] = 0;k[b + 8 >> 2] = 0;k[b + 12 >> 2] = 0;p[a + 48 >> 3] = +p[656];p[a + 56 >> 3] = +p[663];p[a + 64 >> 3] = +p[670];p[a + 72 >> 3] = +p[677];i[a + 80 >> 0] = i[5652] | 0;k[a + 84 >> 2] = k[1393];k[a + 88 >> 2] = k[1401];i[a + 92 >> 0] = 0;i[a + 93 >> 0] = i[5628] | 0;p[a + 96 >> 3] = +p[691];k[a + 104 >> 2] = k[1429];k[a + 108 >> 2] = k[1421];p[a + 112 >> 3] = +p[684];p[a + 120 >> 3] = .3333333333333333;p[a + 128 >> 3] = 1.1;k[a + 136 >> 2] = 100;p[a + 144 >> 3] = 1.5;k[a + 332 >> 2] = 0;k[a + 336 >> 2] = 0;k[a + 340 >> 2] = 0;k[a + 348 >> 2] = 0;k[a + 352 >> 2] = 0;k[a + 356 >> 2] = 0;k[a + 364 >> 2] = 0;k[a + 368 >> 2] = 0;k[a + 372 >> 2] = 0;k[a + 380 >> 2] = 0;k[a + 384 >> 2] = 0;k[a + 388 >> 2] = 0;k[a + 396 >> 2] = 0;k[a + 400 >> 2] = 0;k[a + 404 >> 2] = 0;b = a + 544 | 0;k[a + 412 >> 2] = 0;k[a + 416 >> 2] = 0;k[a + 420 >> 2] = 0;k[a + 428 >> 2] = 0;k[a + 432 >> 2] = 0;k[a + 436 >> 2] = 0;k[a + 444 >> 2] = 0;k[a + 448 >> 2] = 0;k[a + 452 >> 2] = 0;qe(a + 152 | 0, 0, 176) | 0;k[a + 456 >> 2] = b;c = a + 460 | 0;k[c >> 2] = 0;k[c + 4 >> 2] = 0;k[c + 8 >> 2] = 0;k[c + 12 >> 2] = 0;k[c + 16 >> 2] = 0;k[c + 20 >> 2] = 0;k[a + 488 >> 2] = a + 316;i[a + 492 >> 0] = 1;p[a + 496 >> 3] = 1.0;p[a + 504 >> 3] = 1.0;k[a + 512 >> 2] = 0;k[a + 516 >> 2] = -1;c = a + 520 | 0;k[c >> 2] = 0;k[c + 4 >> 2] = 0;k[c + 8 >> 2] = 0;k[c + 12 >> 2] = 0;i[a + 536 >> 0] = 1;c = a + 540 | 0;k[c >> 2] = 0;k[c + 4 >> 2] = 0;k[c + 8 >> 2] = 0;k[c + 12 >> 2] = 0;k[c + 16 >> 2] = 0;Eb(b, 1048576);i[a + 560 >> 0] = 0;b = a + 604 | 0;c = a + 664 | 0;d = a + 564 | 0;e = d + 36 | 0;do {
        k[d >> 2] = 0;d = d + 4 | 0;
      } while ((d | 0) < (e | 0));d = b;e = d + 36 | 0;do {
        k[d >> 2] = 0;d = d + 4 | 0;
      } while ((d | 0) < (e | 0));k[c >> 2] = -1;k[c + 4 >> 2] = -1;k[c + 8 >> 2] = -1;k[c + 12 >> 2] = -1;i[a + 680 >> 0] = 0;return;
    }function Wb(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0.0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          q = 0,
          r = 0;o = u;u = u + 16 | 0;f = o;d = a + 580 | 0;e = k[d >> 2] | 0;if ((e | 0) > 0) {
        m = e + -1 | 0;n = k[(k[a + 576 >> 2] | 0) + (m << 2) >> 2] | 0;k[d >> 2] = m;
      } else {
        m = a + 540 | 0;n = k[m >> 2] | 0;k[m >> 2] = n + 1;
      }g = a + 412 | 0;h = n << 1;k[f >> 2] = h;Xb(g, f);k[f >> 2] = h | 1;Xb(g, f);g = a + 332 | 0;h = i[6310] | 0;m = n + 1 | 0;l = a + 336 | 0;if ((k[l >> 2] | 0) <= (n | 0)) {
        d = a + 340 | 0;e = k[d >> 2] | 0;if ((e | 0) <= (n | 0)) {
          q = n + 2 - e & -2;f = (e >> 1) + 2 & -2;f = (q | 0) > (f | 0) ? q : f;if ((f | 0) > (2147483647 - e | 0)) {
            q = La(1) | 0;va(q | 0, 8, 0);
          }r = k[g >> 2] | 0;q = f + e | 0;k[d >> 2] = q;q = Nd(r, q) | 0;k[g >> 2] = q;if ((q | 0) == 0 ? (r = xc() | 0, (k[r >> 2] | 0) == 12) : 0) {
            r = La(1) | 0;va(r | 0, 8, 0);
          }
        }d = k[l >> 2] | 0;if ((d | 0) <= (n | 0)) qe((k[g >> 2] | 0) + d | 0, 0, m - d | 0) | 0;k[l >> 2] = m;
      }i[(k[g >> 2] | 0) + n >> 0] = h;g = a + 396 | 0;h = a + 400 | 0;if ((k[h >> 2] | 0) <= (n | 0)) {
        d = a + 404 | 0;e = k[d >> 2] | 0;if ((e | 0) <= (n | 0)) {
          r = n + 2 - e & -2;f = (e >> 1) + 2 & -2;f = (r | 0) > (f | 0) ? r : f;if ((f | 0) > (2147483647 - e | 0)) {
            r = La(1) | 0;va(r | 0, 8, 0);
          }q = k[g >> 2] | 0;r = f + e | 0;k[d >> 2] = r;r = Nd(q, r << 3) | 0;k[g >> 2] = r;if ((r | 0) == 0 ? (r = xc() | 0, (k[r >> 2] | 0) == 12) : 0) {
            r = La(1) | 0;va(r | 0, 8, 0);
          }
        }d = k[h >> 2] | 0;if ((d | 0) <= (n | 0)) do {
          r = (k[g >> 2] | 0) + (d << 3) | 0;k[r >> 2] = 0;k[r + 4 >> 2] = 0;d = d + 1 | 0;
        } while ((d | 0) != (m | 0));k[h >> 2] = m;
      }h = (k[g >> 2] | 0) + (n << 3) | 0;k[h >> 2] = -1;k[h + 4 >> 2] = 0;h = a + 316 | 0;if (!(i[a + 93 >> 0] | 0)) j = 0.0;else {
        r = a + 72 | 0;j = +p[r >> 3] * 1389796.0;j = j - +(~~(j / 2147483647.0) | 0) * 2147483647.0;p[r >> 3] = j;j = j / 2147483647.0 * 1.0e-05;
      }g = a + 320 | 0;if ((k[g >> 2] | 0) <= (n | 0)) {
        d = a + 324 | 0;e = k[d >> 2] | 0;if ((e | 0) <= (n | 0)) {
          r = n + 2 - e & -2;f = (e >> 1) + 2 & -2;f = (r | 0) > (f | 0) ? r : f;if ((f | 0) > (2147483647 - e | 0)) {
            r = La(1) | 0;va(r | 0, 8, 0);
          }q = k[h >> 2] | 0;r = f + e | 0;k[d >> 2] = r;r = Nd(q, r << 3) | 0;k[h >> 2] = r;if ((r | 0) == 0 ? (r = xc() | 0, (k[r >> 2] | 0) == 12) : 0) {
            r = La(1) | 0;va(r | 0, 8, 0);
          }
        }d = k[g >> 2] | 0;if ((d | 0) <= (n | 0)) qe((k[h >> 2] | 0) + (d << 3) | 0, 0, m - d << 3 | 0) | 0;k[g >> 2] = m;
      }p[(k[h >> 2] | 0) + (n << 3) >> 3] = j;g = a + 588 | 0;h = a + 592 | 0;if ((k[h >> 2] | 0) <= (n | 0)) {
        d = a + 596 | 0;e = k[d >> 2] | 0;if ((e | 0) <= (n | 0)) {
          r = n + 2 - e & -2;f = (e >> 1) + 2 & -2;f = (r | 0) > (f | 0) ? r : f;if ((f | 0) > (2147483647 - e | 0)) {
            r = La(1) | 0;va(r | 0, 8, 0);
          }q = k[g >> 2] | 0;r = f + e | 0;k[d >> 2] = r;r = Nd(q, r) | 0;k[g >> 2] = r;if ((r | 0) == 0 ? (r = xc() | 0, (k[r >> 2] | 0) == 12) : 0) {
            r = La(1) | 0;va(r | 0, 8, 0);
          }
        }d = k[h >> 2] | 0;if ((d | 0) <= (n | 0)) do {
          i[(k[g >> 2] | 0) + d >> 0] = 0;d = d + 1 | 0;
        } while ((d | 0) != (m | 0));k[h >> 2] = m;
      }i[(k[g >> 2] | 0) + n >> 0] = 0;g = a + 348 | 0;h = a + 352 | 0;if ((k[h >> 2] | 0) <= (n | 0)) {
        d = a + 356 | 0;e = k[d >> 2] | 0;if ((e | 0) <= (n | 0)) {
          r = n + 2 - e & -2;f = (e >> 1) + 2 & -2;f = (r | 0) > (f | 0) ? r : f;if ((f | 0) > (2147483647 - e | 0)) {
            r = La(1) | 0;va(r | 0, 8, 0);
          }q = k[g >> 2] | 0;r = f + e | 0;k[d >> 2] = r;r = Nd(q, r) | 0;k[g >> 2] = r;if ((r | 0) == 0 ? (r = xc() | 0, (k[r >> 2] | 0) == 12) : 0) {
            r = La(1) | 0;va(r | 0, 8, 0);
          }
        }d = k[h >> 2] | 0;if ((d | 0) <= (n | 0)) do {
          i[(k[g >> 2] | 0) + d >> 0] = 0;d = d + 1 | 0;
        } while ((d | 0) != (m | 0));k[h >> 2] = m;
      }i[(k[g >> 2] | 0) + n >> 0] = 1;l = a + 364 | 0;g = i[b >> 0] | 0;h = a + 368 | 0;if ((k[h >> 2] | 0) <= (n | 0)) {
        d = a + 372 | 0;e = k[d >> 2] | 0;if ((e | 0) <= (n | 0)) {
          r = n + 2 - e & -2;f = (e >> 1) + 2 & -2;f = (r | 0) > (f | 0) ? r : f;if ((f | 0) > (2147483647 - e | 0)) {
            r = La(1) | 0;va(r | 0, 8, 0);
          }q = k[l >> 2] | 0;r = f + e | 0;k[d >> 2] = r;r = Nd(q, r) | 0;k[l >> 2] = r;if ((r | 0) == 0 ? (r = xc() | 0, (k[r >> 2] | 0) == 12) : 0) {
            r = La(1) | 0;va(r | 0, 8, 0);
          }
        }d = k[h >> 2] | 0;if ((d | 0) <= (n | 0)) qe((k[l >> 2] | 0) + d | 0, 0, m - d | 0) | 0;k[h >> 2] = m;
      }i[(k[l >> 2] | 0) + n >> 0] = g;g = a + 380 | 0;h = a + 384 | 0;if ((k[h >> 2] | 0) <= (n | 0)) {
        d = a + 388 | 0;e = k[d >> 2] | 0;if ((e | 0) <= (n | 0)) {
          r = n + 2 - e & -2;f = (e >> 1) + 2 & -2;f = (r | 0) > (f | 0) ? r : f;if ((f | 0) > (2147483647 - e | 0)) {
            r = La(1) | 0;va(r | 0, 8, 0);
          }q = k[g >> 2] | 0;r = f + e | 0;k[d >> 2] = r;r = Nd(q, r) | 0;k[g >> 2] = r;if ((r | 0) == 0 ? (r = xc() | 0, (k[r >> 2] | 0) == 12) : 0) {
            r = La(1) | 0;va(r | 0, 8, 0);
          }
        }d = k[h >> 2] | 0;if ((d | 0) <= (n | 0)) do {
          i[(k[g >> 2] | 0) + d >> 0] = 0;d = d + 1 | 0;
        } while ((d | 0) != (m | 0));k[h >> 2] = m;
      }d = a + 280 | 0;e = a + 288 | 0;f = k[e >> 2] | 0;if ((f | 0) <= (n | 0)) {
        r = n + 2 - f & -2;g = (f >> 1) + 2 & -2;g = (r | 0) > (g | 0) ? r : g;if ((g | 0) > (2147483647 - f | 0)) {
          r = La(1) | 0;va(r | 0, 8, 0);
        }q = k[d >> 2] | 0;r = g + f | 0;k[e >> 2] = r;r = Nd(q, r << 2) | 0;k[d >> 2] = r;if ((r | 0) == 0 ? (r = xc() | 0, (k[r >> 2] | 0) == 12) : 0) {
          r = La(1) | 0;va(r | 0, 8, 0);
        }
      }d = c & 1;g = a + 380 | 0;e = (k[g >> 2] | 0) + n | 0;f = (i[e >> 0] | 0) == 0;if (c) {
        if (f) {
          r = a + 200 | 0;q = r;q = pe(k[q >> 2] | 0, k[q + 4 >> 2] | 0, 1, 0) | 0;k[r >> 2] = q;k[r + 4 >> 2] = N;
        }
      } else if (!f) {
        r = a + 200 | 0;q = r;q = pe(k[q >> 2] | 0, k[q + 4 >> 2] | 0, -1, -1) | 0;k[r >> 2] = q;k[r + 4 >> 2] = N;
      }i[e >> 0] = d;d = a + 460 | 0;if ((k[a + 476 >> 2] | 0) > (n | 0) ? (k[(k[a + 472 >> 2] | 0) + (n << 2) >> 2] | 0) > -1 : 0) {
        u = o;return n | 0;
      }if (!(i[(k[g >> 2] | 0) + n >> 0] | 0)) {
        u = o;return n | 0;
      }Yb(d, n);u = o;return n | 0;
    }function Xb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0;l = u;u = u + 16 | 0;j = l;d = k[b >> 2] | 0;g = d + 1 | 0;h = a + 4 | 0;if ((k[h >> 2] | 0) <= (d | 0)) {
        e = a + 8 | 0;f = k[e >> 2] | 0;if ((f | 0) <= (d | 0)) {
          m = d + 2 - f & -2;c = (f >> 1) + 2 & -2;c = (m | 0) > (c | 0) ? m : c;if ((c | 0) > (2147483647 - f | 0)) {
            m = La(1) | 0;va(m | 0, 8, 0);
          }n = k[a >> 2] | 0;m = c + f | 0;k[e >> 2] = m;m = Nd(n, m * 12 | 0) | 0;k[a >> 2] = m;if ((m | 0) == 0 ? (n = xc() | 0, (k[n >> 2] | 0) == 12) : 0) {
            n = La(1) | 0;va(n | 0, 8, 0);
          }
        }c = k[h >> 2] | 0;if ((d | 0) >= (c | 0)) qe((k[a >> 2] | 0) + (c * 12 | 0) | 0, 0, (g - c | 0) * 12 | 0) | 0;k[h >> 2] = g;d = k[b >> 2] | 0;
      }c = k[a >> 2] | 0;if (!(k[c + (d * 12 | 0) >> 2] | 0)) {
        n = d;i[j >> 0] = 0;m = a + 16 | 0;n = n + 1 | 0;_b(m, n, j);u = l;return;
      }k[c + (d * 12 | 0) + 4 >> 2] = 0;n = k[b >> 2] | 0;i[j >> 0] = 0;m = a + 16 | 0;n = n + 1 | 0;_b(m, n, j);u = l;return;
    }function Yb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0;l = u;u = u + 16 | 0;i = l;k[i >> 2] = b;h = a + 12 | 0;f = b + 1 | 0;g = a + 16 | 0;if ((k[g >> 2] | 0) <= (b | 0)) {
        d = a + 20 | 0;e = k[d >> 2] | 0;if ((e | 0) <= (b | 0)) {
          j = b + 2 - e & -2;c = (e >> 1) + 2 & -2;c = (j | 0) > (c | 0) ? j : c;if ((c | 0) > (2147483647 - e | 0)) {
            l = La(1) | 0;va(l | 0, 8, 0);
          }m = k[h >> 2] | 0;j = c + e | 0;k[d >> 2] = j;j = Nd(m, j << 2) | 0;k[h >> 2] = j;if ((j | 0) == 0 ? (m = xc() | 0, (k[m >> 2] | 0) == 12) : 0) {
            m = La(1) | 0;va(m | 0, 8, 0);
          }
        }c = k[g >> 2] | 0;if ((c | 0) <= (b | 0)) {
          qe((k[h >> 2] | 0) + (c << 2) | 0, -1, f - c << 2 | 0) | 0;b = k[i >> 2] | 0;
        }k[g >> 2] = f;
      }k[(k[h >> 2] | 0) + (b << 2) >> 2] = k[a + 4 >> 2];Zb(a, i);j = k[h >> 2] | 0;b = k[j + (k[i >> 2] << 2) >> 2] | 0;g = k[a >> 2] | 0;h = k[g + (b << 2) >> 2] | 0;if (!b) {
        a = 0;m = g + (a << 2) | 0;k[m >> 2] = h;m = j + (h << 2) | 0;k[m >> 2] = a;u = l;return;
      }f = a + 28 | 0;c = b;while (1) {
        b = c;c = c + -1 >> 1;d = g + (c << 2) | 0;e = k[d >> 2] | 0;m = k[k[f >> 2] >> 2] | 0;if (!(+p[m + (h << 3) >> 3] > +p[m + (e << 3) >> 3])) {
          c = 14;break;
        }k[g + (b << 2) >> 2] = e;k[j + (k[d >> 2] << 2) >> 2] = b;if (!c) {
          b = 0;c = 14;break;
        }
      }if ((c | 0) == 14) {
        m = g + (b << 2) | 0;k[m >> 2] = h;m = j + (h << 2) | 0;k[m >> 2] = b;u = l;return;
      }
    }function Zb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0;d = a + 4 | 0;e = k[d >> 2] | 0;f = a + 8 | 0;if ((e | 0) == (k[f >> 2] | 0)) {
        c = (e >> 1) + 2 & -2;c = (c | 0) > 2 ? c : 2;if ((c | 0) > (2147483647 - e | 0)) {
          f = La(1) | 0;va(f | 0, 8, 0);
        }g = k[a >> 2] | 0;e = c + e | 0;k[f >> 2] = e;f = Nd(g, e << 2) | 0;k[a >> 2] = f;if ((f | 0) == 0 ? (g = xc() | 0, (k[g >> 2] | 0) == 12) : 0) {
          g = La(1) | 0;va(g | 0, 8, 0);
        }
      }f = k[a >> 2] | 0;g = k[d >> 2] | 0;k[d >> 2] = g + 1;k[f + (g << 2) >> 2] = k[b >> 2];return;
    }function _b(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0;g = a + 4 | 0;if ((k[g >> 2] | 0) >= (b | 0)) return;e = a + 8 | 0;f = k[e >> 2] | 0;if ((f | 0) < (b | 0)) {
        h = b + 1 - f & -2;d = (f >> 1) + 2 & -2;d = (h | 0) > (d | 0) ? h : d;if ((d | 0) > (2147483647 - f | 0)) {
          h = La(1) | 0;va(h | 0, 8, 0);
        }j = k[a >> 2] | 0;h = d + f | 0;k[e >> 2] = h;h = Nd(j, h) | 0;k[a >> 2] = h;if ((h | 0) == 0 ? (j = xc() | 0, (k[j >> 2] | 0) == 12) : 0) {
          j = La(1) | 0;va(j | 0, 8, 0);
        }
      }d = k[g >> 2] | 0;if ((d | 0) < (b | 0)) do {
        i[(k[a >> 2] | 0) + d >> 0] = i[c >> 0] | 0;d = d + 1 | 0;
      } while ((d | 0) != (b | 0));k[g >> 2] = b;return;
    }function $b(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0;s = u;u = u + 16 | 0;c = s + 1 | 0;r = a + 492 | 0;if (!(i[r >> 0] | 0)) {
        a = 0;u = s;return a | 0;
      }o = k[b >> 2] | 0;q = b + 4 | 0;p = k[q >> 2] | 0;i[c >> 0] = i[s >> 0] | 0;ac(o, p, c);c = k[q >> 2] | 0;a: do {
        if ((c | 0) > 0) {
          n = a + 332 | 0;m = i[6308] | 0;o = m & 2;p = (m & 255) >>> 1 ^ 1;d = 0;e = 0;f = -2;while (1) {
            g = k[b >> 2] | 0;j = k[g + (d << 2) >> 2] | 0;h = (l[(k[n >> 2] | 0) + (j >> 1) >> 0] ^ j & 1) & 255;if ((j | 0) == (f ^ 1 | 0) ? 1 : (h << 24 >> 24 == m << 24 >> 24 & p | o & h & 255 | 0) != 0) {
              c = 1;break;
            }t = i[6309] | 0;if (!((j | 0) == (f | 0) ? 1 : (((t & 255) >>> 1 ^ 1) & h << 24 >> 24 == t << 24 >> 24 | h & 2 & t & 255 | 0) != 0)) {
              k[g + (e << 2) >> 2] = j;e = e + 1 | 0;f = j;c = k[q >> 2] | 0;
            }d = d + 1 | 0;if ((d | 0) >= (c | 0)) break a;
          }u = s;return c | 0;
        } else {
          e = 0;d = 0;
        }
      } while (0);t = d - e | 0;d = c - t | 0;if ((t | 0) > 0) {
        k[q >> 2] = d;c = d;
      }switch (c | 0) {case 0:
          {
            i[r >> 0] = 0;t = 0;u = s;return t | 0;
          }case 1:
          {
            q = k[k[b >> 2] >> 2] | 0;b = q >> 1;i[(k[a + 332 >> 2] | 0) + b >> 0] = q & 1;p = k[a + 296 >> 2] | 0;b = (k[a + 396 >> 2] | 0) + (b << 3) | 0;k[b >> 2] = -1;k[b + 4 >> 2] = p;b = k[a + 280 >> 2] | 0;p = a + 284 | 0;t = k[p >> 2] | 0;k[p >> 2] = t + 1;k[b + (t << 2) >> 2] = q;t = (bc(a) | 0) == -1;i[r >> 0] = t & 1;u = s;return t | 0;
          }default:
          {
            f = cc(a + 544 | 0, b, 0) | 0;g = a + 256 | 0;h = a + 260 | 0;c = k[h >> 2] | 0;d = a + 264 | 0;if ((c | 0) == (k[d >> 2] | 0)) {
              e = (c >> 1) + 2 & -2;e = (e | 0) > 2 ? e : 2;if ((e | 0) > (2147483647 - c | 0)) {
                t = La(1) | 0;va(t | 0, 8, 0);
              }r = k[g >> 2] | 0;t = e + c | 0;k[d >> 2] = t;t = Nd(r, t << 2) | 0;k[g >> 2] = t;if ((t | 0) == 0 ? (t = xc() | 0, (k[t >> 2] | 0) == 12) : 0) {
                t = La(1) | 0;va(t | 0, 8, 0);
              }c = k[h >> 2] | 0;
            }t = k[g >> 2] | 0;k[h >> 2] = c + 1;k[t + (c << 2) >> 2] = f;dc(a, f);t = 1;u = s;return t | 0;
          }}return 0;
    }function ac(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0;o = u;u = u + 16 | 0;j = o + 2 | 0;m = o + 1 | 0;n = o;if ((b | 0) < 16) {
        g = b + -1 | 0;if ((b | 0) > 1) e = 0;else {
          u = o;return;
        }do {
          f = e;e = e + 1 | 0;if ((e | 0) < (b | 0)) {
            c = f;d = e;do {
              c = (k[a + (d << 2) >> 2] | 0) < (k[a + (c << 2) >> 2] | 0) ? d : c;d = d + 1 | 0;
            } while ((d | 0) != (b | 0));
          } else c = f;l = a + (f << 2) | 0;m = k[l >> 2] | 0;n = a + (c << 2) | 0;k[l >> 2] = k[n >> 2];k[n >> 2] = m;
        } while ((e | 0) != (g | 0));u = o;return;
      }l = k[a + (b >>> 1 << 2) >> 2] | 0;d = b;c = -1;while (1) {
        do {
          c = c + 1 | 0;g = a + (c << 2) | 0;h = k[g >> 2] | 0;
        } while ((h | 0) < (l | 0));do {
          d = d + -1 | 0;e = a + (d << 2) | 0;f = k[e >> 2] | 0;
        } while ((l | 0) < (f | 0));if ((c | 0) >= (d | 0)) break;k[g >> 2] = f;k[e >> 2] = h;
      }i[j >> 0] = i[m >> 0] | 0;ac(a, c, j);i[j >> 0] = i[n >> 0] | 0;ac(g, b - c | 0, j);u = o;return;
    }function bc(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0,
          H = 0,
          I = 0;z = a + 512 | 0;b = k[z >> 2] | 0;D = a + 284 | 0;if ((b | 0) >= (k[D >> 2] | 0)) {
        H = -1;F = 0;D = 0;G = a + 184 | 0;B = G;E = B;E = k[E >> 2] | 0;B = B + 4 | 0;B = k[B >> 2] | 0;B = pe(E | 0, B | 0, F | 0, D | 0) | 0;E = N;C = G;k[C >> 2] = B;G = G + 4 | 0;k[G >> 2] = E;G = a + 520 | 0;E = G;C = E;C = k[C >> 2] | 0;E = E + 4 | 0;E = k[E >> 2] | 0;D = oe(C | 0, E | 0, F | 0, D | 0) | 0;F = N;E = G;k[E >> 2] = D;G = G + 4 | 0;k[G >> 2] = F;return H | 0;
      }E = a + 280 | 0;F = a + 428 | 0;y = a + 412 | 0;G = a + 332 | 0;H = a + 544 | 0;A = a + 296 | 0;B = a + 396 | 0;C = a + 456 | 0;c = -1;x = 0;a: while (1) {
        k[z >> 2] = b + 1;m = k[(k[E >> 2] | 0) + (b << 2) >> 2] | 0;if (i[(k[F >> 2] | 0) + m >> 0] | 0) {
          b = k[y >> 2] | 0;j = b + (m * 12 | 0) + 4 | 0;d = k[j >> 2] | 0;if ((d | 0) > 0) {
            h = b + (m * 12 | 0) | 0;b = 0;e = 0;do {
              f = k[h >> 2] | 0;g = f + (b << 3) | 0;if ((k[(k[k[C >> 2] >> 2] | 0) + (k[g >> 2] << 2) >> 2] & 3 | 0) != 1) {
                v = g;w = k[v + 4 >> 2] | 0;d = f + (e << 3) | 0;k[d >> 2] = k[v >> 2];k[d + 4 >> 2] = w;e = e + 1 | 0;d = k[j >> 2] | 0;
              }b = b + 1 | 0;
            } while ((b | 0) < (d | 0));
          } else {
            e = 0;b = 0;
          }b = b - e | 0;if ((b | 0) > 0) k[j >> 2] = d - b;i[(k[F >> 2] | 0) + m >> 0] = 0;
        }w = k[y >> 2] | 0;x = x + 1 | 0;e = k[w + (m * 12 | 0) >> 2] | 0;w = w + (m * 12 | 0) + 4 | 0;b = k[w >> 2] | 0;v = e + (b << 3) | 0;b: do {
          if (!b) {
            d = e;b = e;
          } else {
            u = m ^ 1;t = e + -1 + (b << 3) | 0;d = e;b = e;while (1) {
              while (1) {
                q = d;c: while (1) {
                  f = k[q + 4 >> 2] | 0;s = (l[(k[G >> 2] | 0) + (f >> 1) >> 0] ^ f & 1) & 255;g = i[6308] | 0;h = g & 2;j = (g & 255) >>> 1 ^ 1;if (s << 24 >> 24 == g << 24 >> 24 & j | h & s & 255 | 0) {
                    e = 19;break;
                  }s = k[q >> 2] | 0;p = (k[H >> 2] | 0) + (s << 2) | 0;d = p + 4 | 0;e = k[d >> 2] | 0;if ((e | 0) == (u | 0)) {
                    o = p + 8 | 0;r = k[o >> 2] | 0;k[d >> 2] = r;k[o >> 2] = u;
                  } else r = e;d = q + 8 | 0;if ((r | 0) != (f | 0) ? (o = (l[(k[G >> 2] | 0) + (r >> 1) >> 0] ^ r & 1) & 255, o << 24 >> 24 == g << 24 >> 24 & j | h & o & 255 | 0) : 0) {
                    e = 27;break;
                  }e = k[p >> 2] | 0;if (e >>> 0 <= 95) {
                    e = 37;break;
                  }m = k[G >> 2] | 0;h = i[6309] | 0;n = h & 2;o = (h & 255) >>> 1 ^ 1;f = e >>> 5;e = 2;while (1) {
                    g = p + 4 + (e << 2) | 0;j = k[g >> 2] | 0;I = (l[m + (j >> 1) >> 0] ^ j & 1) & 255;e = e + 1 | 0;if (!(I << 24 >> 24 == h << 24 >> 24 & o | n & I & 255)) break;if ((e | 0) >= (f | 0)) {
                      e = 38;break c;
                    }
                  }f = p + 8 | 0;k[f >> 2] = j;k[g >> 2] = u;f = k[f >> 2] ^ 1;I = k[y >> 2] | 0;h = I + (f * 12 | 0) | 0;j = I + (f * 12 | 0) + 4 | 0;e = k[j >> 2] | 0;f = I + (f * 12 | 0) + 8 | 0;if ((e | 0) == (k[f >> 2] | 0)) {
                    g = (e >> 1) + 2 & -2;g = (g | 0) > 2 ? g : 2;if ((g | 0) > (2147483647 - e | 0)) {
                      e = 34;break a;
                    }q = k[h >> 2] | 0;I = g + e | 0;k[f >> 2] = I;I = Nd(q, I << 3) | 0;k[h >> 2] = I;if ((I | 0) == 0 ? (I = xc() | 0, (k[I >> 2] | 0) == 12) : 0) {
                      e = 34;break a;
                    }e = k[j >> 2] | 0;
                  }I = k[h >> 2] | 0;k[j >> 2] = e + 1;I = I + (e << 3) | 0;k[I >> 2] = s;k[I + 4 >> 2] = r;if ((d | 0) == (v | 0)) {
                    d = v;break b;
                  } else q = d;
                }if ((e | 0) == 19) {
                  e = 0;s = q;I = k[s + 4 >> 2] | 0;d = b;k[d >> 2] = k[s >> 2];k[d + 4 >> 2] = I;d = q + 8 | 0;b = b + 8 | 0;
                } else if ((e | 0) == 27) {
                  e = 0;I = b;k[I >> 2] = s;k[I + 4 >> 2] = r;b = b + 8 | 0;
                } else if ((e | 0) == 37) {
                  h = i[6309] | 0;e = 38;
                }if ((e | 0) == 38) {
                  j = b + 8 | 0;e = b;k[e >> 2] = s;k[e + 4 >> 2] = r;e = r >> 1;f = r & 1;g = (k[G >> 2] | 0) + e | 0;I = (l[g >> 0] ^ f) & 255;if (I << 24 >> 24 == h << 24 >> 24 & ((h & 255) >>> 1 ^ 1) | h & 2 & I & 255 | 0) break;i[g >> 0] = f;b = k[A >> 2] | 0;I = (k[B >> 2] | 0) + (e << 3) | 0;k[I >> 2] = s;k[I + 4 >> 2] = b;I = k[E >> 2] | 0;b = k[D >> 2] | 0;k[D >> 2] = b + 1;k[I + (b << 2) >> 2] = r;b = j;
                }if ((d | 0) == (v | 0)) {
                  d = v;break b;
                }
              }k[z >> 2] = k[D >> 2];if (d >>> 0 < v >>> 0) {
                e = (t + (0 - d) | 0) >>> 3;c = b + 16 | 0;b = j;while (1) {
                  p = d;d = d + 8 | 0;r = k[p + 4 >> 2] | 0;I = b;k[I >> 2] = k[p >> 2];k[I + 4 >> 2] = r;if (d >>> 0 >= v >>> 0) break;else b = b + 8 | 0;
                }d = q + 16 + (e << 3) | 0;b = c + (e << 3) | 0;
              } else b = j;if ((d | 0) == (v | 0)) {
                d = v;c = s;break;
              } else c = s;
            }
          }
        } while (0);b = d - b | 0;if ((b | 0) > 0) k[w >> 2] = (k[w >> 2] | 0) - (b >>> 3);b = k[z >> 2] | 0;if ((b | 0) >= (k[D >> 2] | 0)) {
          e = 46;break;
        }
      }if ((e | 0) == 34) va(La(1) | 0, 8, 0);else if ((e | 0) == 46) {
        I = c;G = x;E = ((x | 0) < 0) << 31 >> 31;H = a + 184 | 0;C = H;F = C;F = k[F >> 2] | 0;C = C + 4 | 0;C = k[C >> 2] | 0;C = pe(F | 0, C | 0, G | 0, E | 0) | 0;F = N;D = H;k[D >> 2] = C;H = H + 4 | 0;k[H >> 2] = F;H = a + 520 | 0;F = H;D = F;D = k[D >> 2] | 0;F = F + 4 | 0;F = k[F >> 2] | 0;E = oe(D | 0, F | 0, G | 0, E | 0) | 0;G = N;F = H;k[F >> 2] = E;H = H + 4 | 0;k[H >> 2] = G;return I | 0;
      }return 0;
    }function cc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;c = c & 1;d = l[a + 16 >> 0] | 0 | c;e = b + 4 | 0;f = ((d + (k[e >> 2] | 0) << 2) + 4 | 0) >>> 2;h = a + 4 | 0;Eb(a, f + (k[h >> 2] | 0) | 0);g = k[h >> 2] | 0;f = f + g | 0;k[h >> 2] = f;if (f >>> 0 < g >>> 0) va(La(1) | 0, 8, 0);f = (k[a >> 2] | 0) + (g << 2) | 0;a = d << 3 | c << 2;k[f >> 2] = k[f >> 2] & -32 | a;a = k[e >> 2] << 5 | a;k[f >> 2] = a;if ((k[e >> 2] | 0) > 0) {
        a = k[b >> 2] | 0;c = 0;do {
          k[f + 4 + (c << 2) >> 2] = k[a + (c << 2) >> 2];c = c + 1 | 0;
        } while ((c | 0) < (k[e >> 2] | 0));a = k[f >> 2] | 0;
      }if (!(a & 8)) return g | 0;c = a >>> 5;if (a & 4 | 0) {
        o[f + 4 + (c << 2) >> 2] = 0.0;return g | 0;
      }if (!c) {
        a = 0;c = 0;
      } else {
        d = 0;a = 0;do {
          a = 1 << ((k[f + 4 + (d << 2) >> 2] | 0) >>> 1 & 31) | a;d = d + 1 | 0;
        } while ((d | 0) != (c | 0));
      }k[f + 4 + (c << 2) >> 2] = a;return g | 0;
    }function dc(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0;m = (k[a + 544 >> 2] | 0) + (b << 2) | 0;l = m + 4 | 0;d = k[l >> 2] ^ 1;i = a + 412 | 0;e = k[i >> 2] | 0;j = e + (d * 12 | 0) | 0;g = m + 8 | 0;f = k[g >> 2] | 0;h = e + (d * 12 | 0) + 4 | 0;c = k[h >> 2] | 0;d = e + (d * 12 | 0) + 8 | 0;if ((c | 0) == (k[d >> 2] | 0)) {
        e = (c >> 1) + 2 & -2;e = (e | 0) > 2 ? e : 2;if ((e | 0) > (2147483647 - c | 0)) {
          m = La(1) | 0;va(m | 0, 8, 0);
        }n = k[j >> 2] | 0;e = e + c | 0;k[d >> 2] = e;e = Nd(n, e << 3) | 0;k[j >> 2] = e;if ((e | 0) == 0 ? (n = xc() | 0, (k[n >> 2] | 0) == 12) : 0) {
          n = La(1) | 0;va(n | 0, 8, 0);
        }c = k[h >> 2] | 0;
      }d = k[j >> 2] | 0;k[h >> 2] = c + 1;d = d + (c << 3) | 0;k[d >> 2] = b;k[d + 4 >> 2] = f;d = k[g >> 2] ^ 1;n = k[i >> 2] | 0;h = n + (d * 12 | 0) | 0;f = k[l >> 2] | 0;g = n + (d * 12 | 0) + 4 | 0;c = k[g >> 2] | 0;d = n + (d * 12 | 0) + 8 | 0;if ((c | 0) == (k[d >> 2] | 0)) {
        e = (c >> 1) + 2 & -2;e = (e | 0) > 2 ? e : 2;if ((e | 0) > (2147483647 - c | 0)) {
          n = La(1) | 0;va(n | 0, 8, 0);
        }l = k[h >> 2] | 0;n = e + c | 0;k[d >> 2] = n;n = Nd(l, n << 3) | 0;k[h >> 2] = n;if ((n | 0) == 0 ? (n = xc() | 0, (k[n >> 2] | 0) == 12) : 0) {
          n = La(1) | 0;va(n | 0, 8, 0);
        }c = k[g >> 2] | 0;
      }n = k[h >> 2] | 0;k[g >> 2] = c + 1;n = n + (c << 3) | 0;k[n >> 2] = b;k[n + 4 >> 2] = f;if (!(k[m >> 2] & 4)) {
        n = a + 208 | 0;b = n;b = pe(k[b >> 2] | 0, k[b + 4 >> 2] | 0, 1, 0) | 0;k[n >> 2] = b;k[n + 4 >> 2] = N;n = a + 224 | 0;b = k[m >> 2] | 0;b = b >>> 5;a = n;m = a;m = k[m >> 2] | 0;a = a + 4 | 0;a = k[a >> 2] | 0;a = pe(b | 0, 0, m | 0, a | 0) | 0;m = N;b = n;k[b >> 2] = a;n = n + 4 | 0;k[n >> 2] = m;return;
      } else {
        n = a + 216 | 0;b = n;b = pe(k[b >> 2] | 0, k[b + 4 >> 2] | 0, 1, 0) | 0;k[n >> 2] = b;k[n + 4 >> 2] = N;n = a + 232 | 0;b = k[m >> 2] | 0;b = b >>> 5;a = n;m = a;m = k[m >> 2] | 0;a = a + 4 | 0;a = k[a >> 2] | 0;a = pe(b | 0, 0, m | 0, a | 0) | 0;m = N;b = n;k[b >> 2] = a;n = n + 4 | 0;k[n >> 2] = m;return;
      }
    }function ec(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0;o = u;u = u + 16 | 0;f = o;h = a + 544 | 0;j = (k[h >> 2] | 0) + (b << 2) | 0;g = j + 4 | 0;d = k[g >> 2] ^ 1;k[f >> 2] = d;e = a + 428 | 0;c = k[e >> 2] | 0;d = c + d | 0;if (!(i[d >> 0] | 0)) {
        i[d >> 0] = 1;nb(a + 444 | 0, f);c = k[e >> 2] | 0;
      }e = k[j + 8 >> 2] ^ 1;k[f >> 2] = e;c = c + e | 0;if (!(i[c >> 0] | 0)) {
        i[c >> 0] = 1;nb(a + 444 | 0, f);
      }if (!(k[j >> 2] & 4)) {
        c = a + 208 | 0;f = c;f = pe(k[f >> 2] | 0, k[f + 4 >> 2] | 0, -1, -1) | 0;k[c >> 2] = f;k[c + 4 >> 2] = N;c = a + 224 | 0;
      } else {
        c = a + 216 | 0;f = c;f = pe(k[f >> 2] | 0, k[f + 4 >> 2] | 0, -1, -1) | 0;k[c >> 2] = f;k[c + 4 >> 2] = N;c = a + 232 | 0;
      }f = c;f = oe(k[f >> 2] | 0, k[f + 4 >> 2] | 0, (k[j >> 2] | 0) >>> 5 | 0, 0) | 0;k[c >> 2] = f;k[c + 4 >> 2] = N;g = k[g >> 2] | 0;c = g >> 1;g = (l[(k[a + 332 >> 2] | 0) + c >> 0] ^ g & 1) & 255;f = i[6308] | 0;if ((g << 24 >> 24 == f << 24 >> 24 & ((f & 255) >>> 1 ^ 1) | f & 2 & g & 255 | 0 ? (m = (k[a + 396 >> 2] | 0) + (c << 3) | 0, n = k[m >> 2] | 0, (n | 0) != -1) : 0) ? ((k[h >> 2] | 0) + (n << 2) | 0) == (j | 0) : 0) k[m >> 2] = -1;k[j >> 2] = k[j >> 2] & -4 | 1;m = k[(k[h >> 2] | 0) + (b << 2) >> 2] | 0;n = a + 556 | 0;k[n >> 2] = ((((m >>> 3 & 1) + (m >>> 5) << 2) + 4 | 0) >>> 2) + (k[n >> 2] | 0);u = o;return;
    }function fc(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0;r = a + 296 | 0;if ((k[r >> 2] | 0) <= (b | 0)) return;s = a + 284 | 0;d = k[s >> 2] | 0;p = a + 292 | 0;c = k[p >> 2] | 0;e = k[c + (b << 2) >> 2] | 0;if ((d | 0) > (e | 0)) {
        f = a + 280 | 0;g = a + 332 | 0;h = a + 88 | 0;j = a + 348 | 0;l = a + 460 | 0;m = a + 476 | 0;n = a + 472 | 0;o = a + 380 | 0;do {
          d = d + -1 | 0;c = k[(k[f >> 2] | 0) + (d << 2) >> 2] >> 1;i[(k[g >> 2] | 0) + c >> 0] = i[6310] | 0;e = k[h >> 2] | 0;if ((e | 0) <= 1) {
            if ((e | 0) == 1 ? (d | 0) > (k[(k[p >> 2] | 0) + ((k[r >> 2] | 0) + -1 << 2) >> 2] | 0) : 0) q = 12;
          } else q = 12;if ((q | 0) == 12) {
            q = 0;i[(k[j >> 2] | 0) + c >> 0] = k[(k[f >> 2] | 0) + (d << 2) >> 2] & 1;
          }if (!((k[m >> 2] | 0) > (c | 0) ? (k[(k[n >> 2] | 0) + (c << 2) >> 2] | 0) > -1 : 0)) q = 16;if ((q | 0) == 16 ? (q = 0, i[(k[o >> 2] | 0) + c >> 0] | 0) : 0) Yb(l, c);c = k[p >> 2] | 0;e = k[c + (b << 2) >> 2] | 0;
        } while ((d | 0) > (e | 0));d = k[s >> 2] | 0;
      }k[a + 512 >> 2] = e;c = k[c + (b << 2) >> 2] | 0;if ((d | 0) > (c | 0)) k[s >> 2] = c;if ((k[r >> 2] | 0) <= (b | 0)) return;k[r >> 2] = b;return;
    }function gc(a) {
      a = a | 0;var b = 0,
          c = 0.0,
          d = 0,
          e = 0,
          f = 0.0,
          g = 0,
          h = 0,
          j = 0.0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0;x = a + 72 | 0;c = +p[x >> 3] * 1389796.0;c = c - +(~~(c / 2147483647.0) | 0) * 2147483647.0;p[x >> 3] = c;w = a + 464 | 0;if (c / 2147483647.0 < +p[a + 64 >> 3] ? (b = k[w >> 2] | 0, (b | 0) != 0) : 0) {
        c = c * 1389796.0;c = c - +(~~(c / 2147483647.0) | 0) * 2147483647.0;p[x >> 3] = c;b = k[(k[a + 460 >> 2] | 0) + (~~(c / 2147483647.0 * +(b | 0)) << 2) >> 2] | 0;u = i[(k[a + 332 >> 2] | 0) + b >> 0] | 0;v = i[6310] | 0;if ((((v & 255) >>> 1 ^ 1) & u << 24 >> 24 == v << 24 >> 24 | u & 2 & v & 255 | 0) != 0 ? (i[(k[a + 380 >> 2] | 0) + b >> 0] | 0) != 0 : 0) {
          v = a + 176 | 0;u = v;u = pe(k[u >> 2] | 0, k[u + 4 >> 2] | 0, 1, 0) | 0;k[v >> 2] = u;k[v + 4 >> 2] = N;
        }
      } else b = -1;r = a + 460 | 0;s = a + 472 | 0;t = a + 488 | 0;u = a + 332 | 0;v = a + 380 | 0;d = b;while (1) {
        if (((d | 0) != -1 ? (q = i[(k[u >> 2] | 0) + d >> 0] | 0, y = i[6310] | 0, z = (y & 255) >>> 1 ^ 1, z & q << 24 >> 24 == y << 24 >> 24 | q & 2 & y & 255 | 0) : 0) ? i[(k[v >> 2] | 0) + d >> 0] | 0 : 0) break;b = k[w >> 2] | 0;if (!b) {
          b = -2;A = 26;break;
        }q = k[r >> 2] | 0;d = k[q >> 2] | 0;e = k[q + (b + -1 << 2) >> 2] | 0;k[q >> 2] = e;n = k[s >> 2] | 0;k[n + (e << 2) >> 2] = 0;k[n + (d << 2) >> 2] = -1;e = (k[w >> 2] | 0) + -1 | 0;k[w >> 2] = e;if ((e | 0) <= 1) continue;o = k[q >> 2] | 0;b = 0;g = 0;m = 1;while (1) {
          h = g + 2 | 0;if ((h | 0) < (e | 0)) {
            l = k[q + (h << 2) >> 2] | 0;g = k[q + (m << 2) >> 2] | 0;e = k[k[t >> 2] >> 2] | 0;j = +p[e + (l << 3) >> 3];f = +p[e + (g << 3) >> 3];if (j > f) {
              f = j;g = l;
            } else A = 16;
          } else {
            l = k[k[t >> 2] >> 2] | 0;A = k[q + (m << 2) >> 2] | 0;e = l;g = A;f = +p[l + (A << 3) >> 3];A = 16;
          }if ((A | 0) == 16) {
            A = 0;h = m;
          }if (!(f > +p[e + (o << 3) >> 3])) break;k[q + (b << 2) >> 2] = g;k[n + (g << 2) >> 2] = b;g = h << 1;m = g | 1;e = k[w >> 2] | 0;if ((m | 0) >= (e | 0)) {
            b = h;break;
          } else b = h;
        }k[q + (b << 2) >> 2] = o;k[n + (o << 2) >> 2] = b;
      }if ((A | 0) == 26) return b | 0;b = i[(k[a + 364 >> 2] | 0) + d >> 0] | 0;do {
        if (z & b << 24 >> 24 == y << 24 >> 24 | y & 2 & b & 255) {
          if (!(i[a + 92 >> 0] | 0)) {
            b = (i[(k[a + 348 >> 2] | 0) + d >> 0] | 0) != 0;break;
          } else {
            j = c * 1389796.0;j = j - +(~~(j / 2147483647.0) | 0) * 2147483647.0;p[x >> 3] = j;b = j / 2147483647.0 < .5;break;
          }
        } else {
          A = i[6308] | 0;b = (((A & 255) >>> 1 ^ 1) & b << 24 >> 24 == A << 24 >> 24 | b & 2 & A & 255 | 0) != 0;
        }
      } while (0);A = b & 1 | d << 1;return A | 0;
    }function hc(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0,
          H = 0.0,
          I = 0,
          J = 0,
          K = 0,
          L = 0,
          M = 0,
          O = 0,
          P = 0,
          Q = 0,
          R = 0.0,
          S = 0;Q = u;u = u + 16 | 0;I = Q + 4 | 0;J = Q;M = c + 4 | 0;e = k[M >> 2] | 0;g = c + 8 | 0;if ((e | 0) == (k[g >> 2] | 0)) {
        f = (e >> 1) + 2 & -2;f = (f | 0) > 2 ? f : 2;if ((f | 0) > (2147483647 - e | 0)) {
          Q = La(1) | 0;va(Q | 0, 8, 0);
        }O = k[c >> 2] | 0;P = f + e | 0;k[g >> 2] = P;P = Nd(O, P << 2) | 0;k[c >> 2] = P;if ((P | 0) == 0 ? (P = xc() | 0, (k[P >> 2] | 0) == 12) : 0) {
          Q = La(1) | 0;va(Q | 0, 8, 0);
        }e = k[M >> 2] | 0;
      }k[(k[c >> 2] | 0) + (e << 2) >> 2] = 0;k[M >> 2] = (k[M >> 2] | 0) + 1;O = a + 396 | 0;K = a + 544 | 0;s = a + 280 | 0;P = a + 588 | 0;t = a + 504 | 0;v = a + 316 | 0;w = a + 540 | 0;x = a + 476 | 0;y = a + 472 | 0;z = a + 460 | 0;A = a + 488 | 0;B = a + 296 | 0;C = a + 496 | 0;D = a + 272 | 0;E = a + 268 | 0;e = 0;j = (k[a + 284 >> 2] | 0) + -1 | 0;l = -2;while (1) {
        h = k[K >> 2] | 0;r = h + (b << 2) | 0;f = k[r >> 2] | 0;if ((f & 4 | 0) != 0 ? (H = +p[C >> 3], q = r + 4 + (f >>> 5 << 2) | 0, R = H + +o[q >> 2], o[q >> 2] = R, R > 1.0e20) : 0) {
          g = k[D >> 2] | 0;if ((g | 0) > 0) {
            b = k[E >> 2] | 0;f = 0;do {
              q = h + (k[b + (f << 2) >> 2] << 2) | 0;q = q + 4 + ((k[q >> 2] | 0) >>> 5 << 2) | 0;o[q >> 2] = +o[q >> 2] * 1.0e-20;f = f + 1 | 0;
            } while ((f | 0) != (g | 0));
          }p[C >> 3] = H * 1.0e-20;g = k[r >> 2] | 0;
        } else g = f;f = (l | 0) != -2 & 1;if (f >>> 0 < g >>> 5 >>> 0) do {
          g = k[r + 4 + (f << 2) >> 2] | 0;k[I >> 2] = g;l = g >> 1;q = k[P >> 2] | 0;do {
            if ((i[q + l >> 0] | 0) == 0 ? (k[(k[O >> 2] | 0) + (l << 3) + 4 >> 2] | 0) > 0 : 0) {
              m = k[v >> 2] | 0;n = m + (l << 3) | 0;R = +p[t >> 3] + +p[n >> 3];p[n >> 3] = R;if (R > 1.e+100) {
                h = k[w >> 2] | 0;if ((h | 0) > 0) {
                  b = 0;do {
                    n = m + (b << 3) | 0;p[n >> 3] = +p[n >> 3] * 1.0e-100;b = b + 1 | 0;
                  } while ((b | 0) != (h | 0));
                }p[t >> 3] = +p[t >> 3] * 1.0e-100;
              }if ((k[x >> 2] | 0) > (l | 0) ? (F = k[y >> 2] | 0, G = k[F + (l << 2) >> 2] | 0, (G | 0) > -1) : 0) {
                m = k[z >> 2] | 0;n = k[m + (G << 2) >> 2] | 0;a: do {
                  if (!G) g = 0;else {
                    b = G;while (1) {
                      g = b;b = b + -1 >> 1;h = m + (b << 2) | 0;l = k[h >> 2] | 0;S = k[k[A >> 2] >> 2] | 0;if (!(+p[S + (n << 3) >> 3] > +p[S + (l << 3) >> 3])) break a;k[m + (g << 2) >> 2] = l;k[F + (k[h >> 2] << 2) >> 2] = g;if (!b) {
                        g = 0;break;
                      }
                    }
                  }
                } while (0);k[m + (g << 2) >> 2] = n;k[F + (n << 2) >> 2] = g;g = k[I >> 2] | 0;
              }i[q + (g >> 1) >> 0] = 1;if ((k[(k[O >> 2] | 0) + (k[I >> 2] >> 1 << 3) + 4 >> 2] | 0) < (k[B >> 2] | 0)) {
                nb(c, I);break;
              } else {
                e = e + 1 | 0;break;
              }
            }
          } while (0);f = f + 1 | 0;
        } while ((f | 0) < ((k[r >> 2] | 0) >>> 5 | 0));b = k[s >> 2] | 0;h = k[P >> 2] | 0;do {
          l = j;j = j + -1 | 0;l = k[b + (l << 2) >> 2] | 0;f = l >> 1;g = h + f | 0;
        } while (!(i[g >> 0] | 0));b = k[(k[O >> 2] | 0) + (f << 3) >> 2] | 0;i[g >> 0] = 0;if ((e | 0) > 1) e = e + -1 | 0;else break;
      }k[k[c >> 2] >> 2] = l ^ 1;s = a + 616 | 0;h = k[s >> 2] | 0;r = a + 620 | 0;if (!h) e = k[r >> 2] | 0;else {
        k[r >> 2] = 0;e = 0;
      }f = k[M >> 2] | 0;if ((e | 0) < (f | 0)) {
        e = a + 624 | 0;g = k[e >> 2] | 0;if ((g | 0) < (f | 0)) {
          S = f + 1 - g & -2;b = (g >> 1) + 2 & -2;b = (S | 0) > (b | 0) ? S : b;if ((b | 0) > (2147483647 - g | 0)) {
            S = La(1) | 0;va(S | 0, 8, 0);
          }S = b + g | 0;k[e >> 2] = S;S = Nd(h, S << 2) | 0;k[s >> 2] = S;if ((S | 0) == 0 ? (S = xc() | 0, (k[S >> 2] | 0) == 12) : 0) {
            S = La(1) | 0;va(S | 0, 8, 0);
          }
        }e = k[r >> 2] | 0;if ((e | 0) < (f | 0)) do {
          k[(k[s >> 2] | 0) + (e << 2) >> 2] = 0;e = e + 1 | 0;
        } while ((e | 0) != (f | 0));k[r >> 2] = f;f = k[M >> 2] | 0;
      }if ((f | 0) > 0) {
        g = k[c >> 2] | 0;b = k[s >> 2] | 0;e = 0;do {
          k[b + (e << 2) >> 2] = k[g + (e << 2) >> 2];e = e + 1 | 0;f = k[M >> 2] | 0;
        } while ((e | 0) < (f | 0));
      }switch (k[a + 84 >> 2] | 0) {case 2:
          {
            if ((f | 0) > 1) {
              e = 1;g = 1;do {
                f = k[c >> 2] | 0;b = k[f + (g << 2) >> 2] | 0;if ((k[(k[O >> 2] | 0) + (b >> 1 << 3) >> 2] | 0) != -1) {
                  k[J >> 2] = b;k[I >> 2] = k[J >> 2];if (!(ic(a, I) | 0)) {
                    b = k[c >> 2] | 0;f = b;b = k[b + (g << 2) >> 2] | 0;L = 57;
                  }
                } else L = 57;if ((L | 0) == 57) {
                  L = 0;k[f + (e << 2) >> 2] = b;e = e + 1 | 0;
                }g = g + 1 | 0;f = k[M >> 2] | 0;
              } while ((g | 0) < (f | 0));
            } else {
              g = 1;e = 1;
            }break;
          }case 1:
          {
            if ((f | 0) > 1) {
              q = k[c >> 2] | 0;g = 1;e = 1;do {
                m = k[q + (g << 2) >> 2] | 0;n = k[O >> 2] | 0;b = k[n + (m >> 1 << 3) >> 2] | 0;b: do {
                  if ((b | 0) != -1) {
                    j = (k[K >> 2] | 0) + (b << 2) | 0;b = k[j >> 2] | 0;if (b >>> 0 > 63) {
                      l = k[P >> 2] | 0;h = b >>> 5;b = 1;do {
                        S = k[j + 4 + (b << 2) >> 2] >> 1;if ((i[l + S >> 0] | 0) == 0 ? (k[n + (S << 3) + 4 >> 2] | 0) > 0 : 0) {
                          L = 65;break b;
                        }b = b + 1 | 0;
                      } while ((b | 0) < (h | 0));
                    }
                  } else L = 65;
                } while (0);if ((L | 0) == 65) {
                  L = 0;k[q + (e << 2) >> 2] = m;e = e + 1 | 0;f = k[M >> 2] | 0;
                }g = g + 1 | 0;
              } while ((g | 0) < (f | 0));
            } else {
              g = 1;e = 1;
            }break;
          }default:
          {
            g = f;e = f;
          }}S = a + 240 | 0;L = S;L = pe(k[L >> 2] | 0, k[L + 4 >> 2] | 0, f | 0, ((f | 0) < 0) << 31 >> 31 | 0) | 0;k[S >> 2] = L;k[S + 4 >> 2] = N;e = g - e | 0;if ((e | 0) > 0) {
        h = f - e | 0;k[M >> 2] = h;
      } else h = f;S = a + 248 | 0;a = S;a = pe(k[a >> 2] | 0, k[a + 4 >> 2] | 0, h | 0, ((h | 0) < 0) << 31 >> 31 | 0) | 0;k[S >> 2] = a;k[S + 4 >> 2] = N;if ((h | 0) == 1) e = 0;else {
        b = k[c >> 2] | 0;if ((h | 0) > 2) {
          g = k[O >> 2] | 0;f = 2;e = 1;do {
            e = (k[g + (k[b + (f << 2) >> 2] >> 1 << 3) + 4 >> 2] | 0) > (k[g + (k[b + (e << 2) >> 2] >> 1 << 3) + 4 >> 2] | 0) ? f : e;f = f + 1 | 0;
          } while ((f | 0) < (h | 0));
        } else e = 1;c = b + (e << 2) | 0;e = k[c >> 2] | 0;S = b + 4 | 0;k[c >> 2] = k[S >> 2];k[S >> 2] = e;e = k[(k[O >> 2] | 0) + (e >> 1 << 3) + 4 >> 2] | 0;
      }k[d >> 2] = e;if ((k[r >> 2] | 0) > 0) e = 0;else {
        u = Q;return;
      }do {
        i[(k[P >> 2] | 0) + (k[(k[s >> 2] | 0) + (e << 2) >> 2] >> 1) >> 0] = 0;e = e + 1 | 0;
      } while ((e | 0) < (k[r >> 2] | 0));u = Q;return;
    }function ic(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0;r = a + 396 | 0;s = a + 544 | 0;c = (k[s >> 2] | 0) + (k[(k[r >> 2] | 0) + (k[b >> 2] >> 1 << 3) >> 2] << 2) | 0;n = a + 604 | 0;m = a + 608 | 0;if (k[n >> 2] | 0) k[m >> 2] = 0;o = a + 588 | 0;p = a + 612 | 0;l = a + 616 | 0;d = 1;a: while (1) {
        if (d >>> 0 < (k[c >> 2] | 0) >>> 5 >>> 0) {
          g = k[c + 4 + (d << 2) >> 2] | 0;h = g >> 1;e = k[r >> 2] | 0;do {
            if ((k[e + (h << 3) + 4 >> 2] | 0) != 0 ? (q = i[(k[o >> 2] | 0) + h >> 0] | 0, (q + -1 & 255) >= 2) : 0) {
              j = k[b >> 2] | 0;a = k[m >> 2] | 0;f = (a | 0) == (k[p >> 2] | 0);if (!(q << 24 >> 24 == 3 ? 1 : (k[e + (h << 3) >> 2] | 0) == -1)) {
                if (f) {
                  c = (a >> 1) + 2 & -2;c = (c | 0) > 2 ? c : 2;if ((c | 0) > (2147483647 - a | 0)) {
                    c = 22;break a;
                  }e = k[n >> 2] | 0;f = c + a | 0;k[p >> 2] = f;f = Nd(e, f << 3) | 0;k[n >> 2] = f;if ((f | 0) == 0 ? (f = xc() | 0, (k[f >> 2] | 0) == 12) : 0) {
                    c = 22;break a;
                  }a = k[m >> 2] | 0;
                }c = k[n >> 2] | 0;k[m >> 2] = a + 1;a = c + (a << 3) | 0;k[a >> 2] = d;k[a + 4 >> 2] = j;k[b >> 2] = g;a = 0;d = 0;c = (k[s >> 2] | 0) + (k[(k[r >> 2] | 0) + (h << 3) >> 2] << 2) | 0;break;
              }if (f) {
                e = (a >> 1) + 2 & -2;e = (e | 0) > 2 ? e : 2;if ((e | 0) > (2147483647 - a | 0)) {
                  c = 12;break a;
                }g = k[n >> 2] | 0;h = e + a | 0;k[p >> 2] = h;h = Nd(g, h << 3) | 0;k[n >> 2] = h;if ((h | 0) == 0 ? (h = xc() | 0, (k[h >> 2] | 0) == 12) : 0) {
                  c = 12;break a;
                }a = k[m >> 2] | 0;
              }h = k[n >> 2] | 0;k[m >> 2] = a + 1;a = h + (a << 3) | 0;k[a >> 2] = 0;k[a + 4 >> 2] = j;a = k[m >> 2] | 0;if ((a | 0) > 0) {
                f = 0;do {
                  e = (k[o >> 2] | 0) + (k[(k[n >> 2] | 0) + (f << 3) + 4 >> 2] >> 1) | 0;if (!(i[e >> 0] | 0)) {
                    i[e >> 0] = 3;nb(l, (k[n >> 2] | 0) + (f << 3) + 4 | 0);a = k[m >> 2] | 0;
                  }f = f + 1 | 0;
                } while ((f | 0) < (a | 0));a = 1;
              } else a = 1;
            } else a = 4;
          } while (0);switch (a & 7) {case 4:case 0:
              {
                a = d;break;
              }default:
              {
                c = 31;break a;
              }}
        } else {
          a = (k[o >> 2] | 0) + (k[b >> 2] >> 1) | 0;if (!(i[a >> 0] | 0)) {
            i[a >> 0] = 2;nb(l, b);
          }a = k[m >> 2] | 0;if (!a) {
            a = 2;c = 31;break;
          }j = k[n >> 2] | 0;c = a + -1 | 0;a = k[j + (c << 3) >> 2] | 0;c = k[j + (c << 3) + 4 >> 2] | 0;k[b >> 2] = c;c = (k[s >> 2] | 0) + (k[(k[r >> 2] | 0) + (c >> 1 << 3) >> 2] << 2) | 0;k[m >> 2] = (k[m >> 2] | 0) + -1;
        }d = a + 1 | 0;
      }if ((c | 0) == 12) va(La(1) | 0, 8, 0);else if ((c | 0) == 22) va(La(1) | 0, 8, 0);else if ((c | 0) == 31) return (a | 0) == 2 | 0;return 0;
    }function jc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0;t = u;u = u + 16 | 0;r = t + 4 | 0;s = t;e = c + 20 | 0;f = c + 16 | 0;if ((k[e >> 2] | 0) > 0) {
        d = 0;do {
          i[(k[c >> 2] | 0) + (k[(k[f >> 2] | 0) + (d << 2) >> 2] | 0) >> 0] = 0;d = d + 1 | 0;
        } while ((d | 0) < (k[e >> 2] | 0));
      }if (k[f >> 2] | 0) k[e >> 2] = 0;d = k[b >> 2] | 0;k[s >> 2] = d;i[r >> 0] = 0;_b(c, d + 1 | 0, r);b = (k[c >> 2] | 0) + d | 0;if (!(i[b >> 0] | 0)) {
        i[b >> 0] = 1;nb(c + 16 | 0, s);
      }if (!(k[a + 296 >> 2] | 0)) {
        u = t;return;
      }l = d >> 1;m = a + 588 | 0;i[(k[m >> 2] | 0) + l >> 0] = 1;b = k[a + 284 >> 2] | 0;n = a + 292 | 0;d = k[k[n >> 2] >> 2] | 0;if ((b | 0) > (d | 0)) {
        o = a + 280 | 0;p = a + 396 | 0;q = c + 16 | 0;j = a + 544 | 0;do {
          b = b + -1 | 0;e = k[(k[o >> 2] | 0) + (b << 2) >> 2] | 0;h = e >> 1;if (i[(k[m >> 2] | 0) + h >> 0] | 0) {
            f = k[p >> 2] | 0;d = k[f + (h << 3) >> 2] | 0;a: do {
              if ((d | 0) == -1) {
                d = e ^ 1;k[s >> 2] = d;i[r >> 0] = 0;_b(c, d + 1 | 0, r);d = (k[c >> 2] | 0) + d | 0;if (!(i[d >> 0] | 0)) {
                  i[d >> 0] = 1;nb(q, s);
                }
              } else {
                g = (k[j >> 2] | 0) + (d << 2) | 0;e = k[g >> 2] | 0;if (e >>> 0 > 63) {
                  d = 1;a = f;while (1) {
                    f = k[g + 4 + (d << 2) >> 2] >> 1;if ((k[a + (f << 3) + 4 >> 2] | 0) > 0) {
                      i[(k[m >> 2] | 0) + f >> 0] = 1;e = k[g >> 2] | 0;
                    }d = d + 1 | 0;if ((d | 0) >= (e >>> 5 | 0)) break a;a = k[p >> 2] | 0;
                  }
                }
              }
            } while (0);i[(k[m >> 2] | 0) + h >> 0] = 0;d = k[k[n >> 2] >> 2] | 0;
          }
        } while ((b | 0) > (d | 0));
      }i[(k[m >> 2] | 0) + l >> 0] = 0;u = t;return;
    }function kc(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          q = 0,
          r = 0.0,
          s = 0,
          t = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0;w = u;u = u + 16 | 0;c = w + 4 | 0;j = w;v = a + 272 | 0;q = k[v >> 2] | 0;r = +p[a + 496 >> 3] / +(q | 0);s = a + 544 | 0;m = a + 268 | 0;n = k[m >> 2] | 0;k[j >> 2] = s;k[c >> 2] = k[j >> 2];lc(n, q, c);c = k[v >> 2] | 0;if ((c | 0) > 0) {
        n = a + 332 | 0;q = a + 396 | 0;b = 0;d = 0;do {
          e = k[m >> 2] | 0;f = k[e + (d << 2) >> 2] | 0;g = (k[s >> 2] | 0) + (f << 2) | 0;h = k[g >> 2] | 0;do {
            if (h >>> 0 > 95) {
              x = k[g + 4 >> 2] | 0;j = x >> 1;x = ((l[(k[n >> 2] | 0) + j >> 0] | 0) ^ x & 1) & 255;y = i[6308] | 0;if (x << 24 >> 24 == y << 24 >> 24 & ((y & 255) >>> 1 ^ 1) | y & 2 & x & 255 | 0 ? (y = k[(k[q >> 2] | 0) + (j << 3) >> 2] | 0, (y | 0) != -1 & (y | 0) == (f | 0)) : 0) {
                t = 9;break;
              }if ((d | 0) >= ((c | 0) / 2 | 0 | 0) ? !(+o[g + 4 + (h >>> 5 << 2) >> 2] < r) : 0) {
                t = 9;break;
              }ec(a, f);
            } else t = 9;
          } while (0);if ((t | 0) == 9) {
            t = 0;k[e + (b << 2) >> 2] = f;b = b + 1 | 0;
          }d = d + 1 | 0;c = k[v >> 2] | 0;
        } while ((d | 0) < (c | 0));
      } else {
        d = 0;b = 0;
      }b = d - b | 0;if ((b | 0) > 0) k[v >> 2] = c - b;if (!(+((k[a + 556 >> 2] | 0) >>> 0) > +p[a + 96 >> 3] * +((k[a + 548 >> 2] | 0) >>> 0))) {
        u = w;return;
      }Ra[k[(k[a >> 2] | 0) + 8 >> 2] & 15](a);u = w;return;
    }function lc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0.0,
          l = 0,
          m = 0,
          n = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          v = 0,
          w = 0,
          x = 0;x = u;u = u + 16 | 0;s = x + 8 | 0;t = x + 4 | 0;w = x;if ((b | 0) < 16) {
        q = b + -1 | 0;if ((b | 0) <= 1) {
          u = x;return;
        }p = k[c >> 2] | 0;l = 0;do {
          d = l;l = l + 1 | 0;m = a + (d << 2) | 0;n = k[m >> 2] | 0;if ((l | 0) < (b | 0)) {
            i = k[p >> 2] | 0;h = l;e = n;do {
              f = i + (k[a + (h << 2) >> 2] << 2) | 0;g = k[f >> 2] | 0;do {
                if (g >>> 0 > 95) {
                  w = i + (e << 2) | 0;c = (k[w >> 2] | 0) >>> 5;if ((c | 0) != 2 ? !(+o[f + 4 + (g >>> 5 << 2) >> 2] < +o[w + 4 + (c << 2) >> 2]) : 0) break;d = h;
                }
              } while (0);h = h + 1 | 0;f = a + (d << 2) | 0;e = k[f >> 2] | 0;
            } while ((h | 0) != (b | 0));d = f;
          } else {
            e = n;d = m;
          }k[m >> 2] = e;k[d >> 2] = n;
        } while ((l | 0) != (q | 0));u = x;return;
      }v = k[a + (b >>> 1 << 2) >> 2] | 0;e = b;d = -1;while (1) {
        d = d + 1 | 0;g = a + (d << 2) | 0;i = k[g >> 2] | 0;r = k[c >> 2] | 0;q = k[r >> 2] | 0;h = q + (i << 2) | 0;f = k[h >> 2] | 0;n = q + (v << 2) | 0;p = k[n >> 2] | 0;a: do {
          if (f >>> 0 > 95) {
            m = p >>> 5;l = (m | 0) == 2;m = n + 4 + (m << 2) | 0;do {
              if (!l ? !(+o[h + 4 + (f >>> 5 << 2) >> 2] < +o[m >> 2]) : 0) break a;d = d + 1 | 0;g = a + (d << 2) | 0;i = k[g >> 2] | 0;h = q + (i << 2) | 0;f = k[h >> 2] | 0;
            } while (f >>> 0 > 95);
          }
        } while (0);e = e + -1 | 0;f = a + (e << 2) | 0;b: do {
          if (p >>> 0 > 95) {
            j = +o[n + 4 + (p >>> 5 << 2) >> 2];while (1) {
              n = q + (k[f >> 2] << 2) | 0;p = (k[n >> 2] | 0) >>> 5;if ((p | 0) != 2 ? !(j < +o[n + 4 + (p << 2) >> 2]) : 0) break b;p = e + -1 | 0;f = a + (p << 2) | 0;e = p;
            }
          }
        } while (0);if ((d | 0) >= (e | 0)) break;k[g >> 2] = k[f >> 2];k[f >> 2] = i;
      }c = r;k[t >> 2] = c;k[s >> 2] = k[t >> 2];lc(a, d, s);k[w >> 2] = c;k[s >> 2] = k[w >> 2];lc(g, b - d | 0, s);u = x;return;
    }function mc(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = 0;u = b + 4 | 0;d = k[u >> 2] | 0;if ((d | 0) > 0) {
        s = a + 544 | 0;t = a + 332 | 0;e = 0;c = 0;do {
          f = k[b >> 2] | 0;d = k[f + (e << 2) >> 2] | 0;r = (k[s >> 2] | 0) + (d << 2) | 0;p = k[r >> 2] | 0;do {
            if (p >>> 0 > 31) {
              j = k[t >> 2] | 0;m = i[6308] | 0;n = m & 2;o = (m & 255) >>> 1 ^ 1;g = p >>> 5;h = 0;do {
                v = k[r + 4 + (h << 2) >> 2] | 0;v = ((l[j + (v >> 1) >> 0] | 0) ^ v & 1) & 255;h = h + 1 | 0;if (v << 24 >> 24 == m << 24 >> 24 & o | n & v & 255 | 0) {
                  q = 8;break;
                }
              } while ((h | 0) < (g | 0));if ((q | 0) == 8) {
                q = 0;ec(a, d);break;
              }if (p >>> 0 > 95) {
                h = 2;f = p;do {
                  d = r + 4 + (h << 2) | 0;v = k[d >> 2] | 0;v = ((l[(k[t >> 2] | 0) + (v >> 1) >> 0] | 0) ^ v & 1) & 255;q = i[6309] | 0;if (!(v << 24 >> 24 == q << 24 >> 24 & ((q & 255) >>> 1 ^ 1) | q & 2 & v & 255)) d = h;else {
                    k[d >> 2] = k[r + 4 + (g + -1 << 2) >> 2];d = k[r >> 2] | 0;f = d >>> 5;if (d & 8) {
                      k[r + 4 + (f + -1 << 2) >> 2] = k[r + 4 + (f << 2) >> 2];d = k[r >> 2] | 0;
                    }f = d + -32 | 0;k[r >> 2] = f;d = h + -1 | 0;
                  }h = d + 1 | 0;g = f >>> 5;
                } while ((h | 0) < (g | 0));d = k[b >> 2] | 0;f = d;d = k[d + (e << 2) >> 2] | 0;q = 10;
              } else q = 10;
            } else q = 10;
          } while (0);if ((q | 0) == 10) {
            q = 0;k[f + (c << 2) >> 2] = d;c = c + 1 | 0;
          }e = e + 1 | 0;d = k[u >> 2] | 0;
        } while ((e | 0) < (d | 0));
      } else {
        e = 0;c = 0;
      }c = e - c | 0;if ((c | 0) <= 0) return;k[u >> 2] = d - c;return;
    }function nc(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0;p = u;u = u + 16 | 0;m = p;k[m >> 2] = 0;n = m + 4 | 0;k[n >> 2] = 0;o = m + 8 | 0;k[o >> 2] = 0;h = a + 540 | 0;b = k[h >> 2] | 0;a: do {
        if ((b | 0) > 0) {
          j = a + 380 | 0;l = a + 332 | 0;c = 0;f = 0;e = 0;g = 0;while (1) {
            if ((i[(k[j >> 2] | 0) + g >> 0] | 0) != 0 ? (q = i[(k[l >> 2] | 0) + g >> 0] | 0, d = i[6310] | 0, (((d & 255) >>> 1 ^ 1) & q << 24 >> 24 == d << 24 >> 24 | q & 2 & d & 255 | 0) != 0) : 0) {
              d = k[n >> 2] | 0;if ((d | 0) == (k[o >> 2] | 0)) {
                b = (d >> 1) + 2 & -2;b = (b | 0) > 2 ? b : 2;if ((b | 0) > (2147483647 - d | 0)) {
                  b = 11;break;
                }b = b + d | 0;k[o >> 2] = b;b = Nd(c, b << 2) | 0;k[m >> 2] = b;if (!b) {
                  q = xc() | 0;if ((k[q >> 2] | 0) == 12) {
                    b = 11;break;
                  }c = k[m >> 2] | 0;d = k[n >> 2] | 0;e = c;
                } else {
                  e = b;c = b;
                }
              } else c = f;k[n >> 2] = d + 1;k[e + (d << 2) >> 2] = g;b = k[h >> 2] | 0;f = c;
            }g = g + 1 | 0;if ((g | 0) >= (b | 0)) break a;
          }if ((b | 0) == 11) va(La(1) | 0, 8, 0);
        }
      } while (0);oc(a + 460 | 0, m);b = k[m >> 2] | 0;if (!b) {
        u = p;return;
      }k[n >> 2] = 0;Md(b);k[m >> 2] = 0;k[o >> 2] = 0;u = p;return;
    }function oc(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0.0,
          g = 0.0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          q = 0,
          r = 0,
          s = 0;s = a + 4 | 0;e = k[a >> 2] | 0;if ((k[s >> 2] | 0) <= 0) {
        if (e | 0) r = 4;
      } else {
        d = k[a + 12 >> 2] | 0;c = 0;do {
          k[d + (k[e + (c << 2) >> 2] << 2) >> 2] = -1;c = c + 1 | 0;
        } while ((c | 0) < (k[s >> 2] | 0));r = 4;
      }if ((r | 0) == 4) k[s >> 2] = 0;e = b + 4 | 0;if ((k[e >> 2] | 0) <= 0) return;d = a + 12 | 0;c = 0;do {
        q = (k[b >> 2] | 0) + (c << 2) | 0;k[(k[d >> 2] | 0) + (k[q >> 2] << 2) >> 2] = c;Zb(a, q);c = c + 1 | 0;
      } while ((c | 0) < (k[e >> 2] | 0));c = k[s >> 2] | 0;if ((c | 0) <= 1) return;o = k[a >> 2] | 0;q = a + 28 | 0;m = a + 12 | 0;n = k[m >> 2] | 0;l = c >>> 1;while (1) {
        i = l + -1 | 0;j = k[o + (i << 2) >> 2] | 0;d = i << 1;e = d | 1;a: do {
          if ((e | 0) < (c | 0)) {
            h = i;while (1) {
              b = d + 2 | 0;if ((b | 0) < (c | 0)) {
                a = k[o + (b << 2) >> 2] | 0;d = k[o + (e << 2) >> 2] | 0;c = k[k[q >> 2] >> 2] | 0;g = +p[c + (a << 3) >> 3];f = +p[c + (d << 3) >> 3];if (g > f) {
                  f = g;d = a;
                } else r = 16;
              } else {
                a = k[k[q >> 2] >> 2] | 0;r = k[o + (e << 2) >> 2] | 0;c = a;d = r;f = +p[a + (r << 3) >> 3];r = 16;
              }if ((r | 0) == 16) {
                r = 0;b = e;
              }if (!(f > +p[c + (j << 3) >> 3])) {
                c = h;break a;
              }k[o + (h << 2) >> 2] = d;k[(k[m >> 2] | 0) + (d << 2) >> 2] = h;d = b << 1;e = d | 1;c = k[s >> 2] | 0;if ((e | 0) >= (c | 0)) {
                c = b;break;
              } else h = b;
            }
          } else c = i;
        } while (0);k[o + (c << 2) >> 2] = j;k[n + (j << 2) >> 2] = c;if ((l | 0) <= 1) break;l = i;c = k[s >> 2] | 0;
      }return;
    }function pc(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          q = 0;b = a + 492 | 0;if (i[b >> 0] | 0 ? (bc(a) | 0) == -1 : 0) {
        m = a + 284 | 0;n = a + 516 | 0;if ((k[m >> 2] | 0) == (k[n >> 2] | 0)) {
          o = 1;return o | 0;
        }j = a + 520 | 0;l = j;h = k[l + 4 >> 2] | 0;if ((h | 0) > 0 | (h | 0) == 0 & (k[l >> 2] | 0) >>> 0 > 0) {
          o = 1;return o | 0;
        }mc(a, a + 268 | 0);if (i[a + 536 >> 0] | 0) {
          mc(a, a + 256 | 0);h = a + 564 | 0;l = a + 568 | 0;if ((k[l >> 2] | 0) > 0) {
            c = a + 588 | 0;b = 0;do {
              i[(k[c >> 2] | 0) + (k[(k[h >> 2] | 0) + (b << 2) >> 2] | 0) >> 0] = 1;b = b + 1 | 0;
            } while ((b | 0) < (k[l >> 2] | 0));
          }b = k[m >> 2] | 0;if ((b | 0) > 0) {
            f = k[a + 280 >> 2] | 0;g = k[a + 588 >> 2] | 0;d = 0;c = 0;do {
              e = k[f + (c << 2) >> 2] | 0;if (!(i[g + (e >> 1) >> 0] | 0)) {
                k[f + (d << 2) >> 2] = e;d = d + 1 | 0;b = k[m >> 2] | 0;
              }c = c + 1 | 0;
            } while ((c | 0) < (b | 0));
          } else {
            d = 0;c = 0;
          }c = c - d | 0;if ((c | 0) > 0) {
            b = b - c | 0;k[m >> 2] = b;
          }k[a + 512 >> 2] = b;a: do {
            if ((k[l >> 2] | 0) > 0) {
              c = a + 588 | 0;b = 0;do {
                i[(k[c >> 2] | 0) + (k[(k[h >> 2] | 0) + (b << 2) >> 2] | 0) >> 0] = 0;b = b + 1 | 0;d = k[l >> 2] | 0;
              } while ((b | 0) < (d | 0));g = a + 576 | 0;if ((d | 0) > 0) {
                e = a + 580 | 0;f = a + 584 | 0;d = 0;while (1) {
                  b = k[e >> 2] | 0;if ((b | 0) == (k[f >> 2] | 0)) {
                    c = (b >> 1) + 2 & -2;c = (c | 0) > 2 ? c : 2;if ((c | 0) > (2147483647 - b | 0)) {
                      o = 26;break;
                    }q = k[g >> 2] | 0;c = c + b | 0;k[f >> 2] = c;c = Nd(q, c << 2) | 0;k[g >> 2] = c;if ((c | 0) == 0 ? (q = xc() | 0, (k[q >> 2] | 0) == 12) : 0) {
                      o = 26;break;
                    }b = k[e >> 2] | 0;
                  }c = k[g >> 2] | 0;k[c + (b << 2) >> 2] = 0;q = k[e >> 2] | 0;k[e >> 2] = q + 1;b = k[h >> 2] | 0;k[c + (q << 2) >> 2] = k[b + (d << 2) >> 2];d = d + 1 | 0;if ((d | 0) >= (k[l >> 2] | 0)) break a;
                }if ((o | 0) == 26) va(La(1) | 0, 8, 0);
              } else o = 20;
            } else o = 20;
          } while (0);if ((o | 0) == 20) b = k[h >> 2] | 0;if (b | 0) k[l >> 2] = 0;
        }if (+((k[a + 556 >> 2] | 0) >>> 0) > +p[a + 96 >> 3] * +((k[a + 548 >> 2] | 0) >>> 0)) Ra[k[(k[a >> 2] | 0) + 8 >> 2] & 15](a);nc(a);k[n >> 2] = k[m >> 2];o = a + 224 | 0;q = a + 232 | 0;o = pe(k[q >> 2] | 0, k[q + 4 >> 2] | 0, k[o >> 2] | 0, k[o + 4 >> 2] | 0) | 0;q = j;k[q >> 2] = o;k[q + 4 >> 2] = N;q = 1;return q | 0;
      }i[b >> 0] = 0;q = 0;return q | 0;
    }function qc(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0.0,
          e = 0,
          f = 0,
          g = 0,
          h = 0.0,
          j = 0.0,
          m = 0,
          n = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          v = 0,
          w = 0.0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0,
          H = 0,
          I = 0,
          J = 0,
          K = 0,
          L = 0,
          M = 0,
          O = 0,
          P = 0,
          Q = 0,
          S = 0,
          T = 0,
          U = 0,
          V = 0,
          W = 0,
          X = 0,
          Y = 0,
          Z = 0,
          _ = 0,
          $ = 0,
          aa = 0,
          ba = 0,
          ca = 0,
          da = 0,
          ea = 0,
          fa = 0,
          ga = 0,
          ha = 0,
          ia = 0,
          ja = 0,
          ka = 0,
          la = 0,
          ma = 0,
          na = 0,
          oa = 0,
          pa = 0,
          qa = 0,
          ra = 0,
          sa = 0,
          ta = 0,
          ua = 0;ua = u;u = u + 64 | 0;A = ua + 60 | 0;ma = ua;B = ua + 52 | 0;ra = ua + 40 | 0;W = ua + 56 | 0;k[ra >> 2] = 0;sa = ra + 4 | 0;k[sa >> 2] = 0;ta = ra + 8 | 0;k[ta >> 2] = 0;C = a + 160 | 0;D = C;D = pe(k[D >> 2] | 0, k[D + 4 >> 2] | 0, 1, 0) | 0;k[C >> 2] = D;k[C + 4 >> 2] = N;C = (b | 0) < 0;D = a + 680 | 0;E = a + 664 | 0;F = a + 672 | 0;oa = a + 296 | 0;G = a + 272 | 0;pa = a + 284 | 0;H = a + 640 | 0;I = a + 308 | 0;J = a + 304 | 0;K = a + 332 | 0;L = a + 16 | 0;M = a + 292 | 0;O = a + 168 | 0;P = a + 396 | 0;Q = a + 280 | 0;S = a + 184 | 0;T = a + 192 | 0;U = a + 48 | 0;V = a + 504 | 0;X = a + 56 | 0;Y = a + 496 | 0;Z = a + 656 | 0;_ = a + 144 | 0;$ = a + 648 | 0;aa = a + 128 | 0;ba = a + 44 | 0;ca = a + 200 | 0;da = a + 208 | 0;ea = a + 224 | 0;fa = a + 216 | 0;ga = a + 232 | 0;ha = a + 540 | 0;qa = a + 292 | 0;ia = a + 544 | 0;ja = a + 268 | 0;ka = a + 276 | 0;la = a + 268 | 0;m = 0;e = 0;a: while (1) {
        n = C | (m | 0) < (b | 0);while (1) {
          c = bc(a) | 0;if ((c | 0) != -1) break;if (!n) {
            na = 39;break a;
          }if (i[D >> 0] | 0) {
            na = 39;break a;
          }c = E;f = k[c + 4 >> 2] | 0;if ((f | 0) >= 0 ? (z = T, y = k[z + 4 >> 2] | 0, !(y >>> 0 < f >>> 0 | ((y | 0) == (f | 0) ? (k[z >> 2] | 0) >>> 0 < (k[c >> 2] | 0) >>> 0 : 0))) : 0) {
            na = 39;break a;
          }c = F;f = k[c + 4 >> 2] | 0;if ((f | 0) >= 0 ? (z = S, y = k[z + 4 >> 2] | 0, !(y >>> 0 < f >>> 0 | ((y | 0) == (f | 0) ? (k[z >> 2] | 0) >>> 0 < (k[c >> 2] | 0) >>> 0 : 0))) : 0) {
            na = 39;break a;
          }if ((k[oa >> 2] | 0) == 0 ? !(pc(a) | 0) : 0) {
            na = 48;break a;
          }if (!(+((k[G >> 2] | 0) - (k[pa >> 2] | 0) | 0) >= +p[H >> 3])) c = -2;else {
            kc(a);c = -2;
          }b: while (1) {
            f = k[oa >> 2] | 0;if ((f | 0) >= (k[I >> 2] | 0)) break;g = k[(k[J >> 2] | 0) + (f << 2) >> 2] | 0;f = (l[(k[K >> 2] | 0) + (g >> 1) >> 0] ^ g & 1) & 255;z = i[6308] | 0;if (!(f << 24 >> 24 == z << 24 >> 24 & ((z & 255) >>> 1 ^ 1) | z & 2 & f & 255)) {
              z = i[6309] | 0;if (!(((z & 255) >>> 1 ^ 1) & f << 24 >> 24 == z << 24 >> 24 | f & 2 & z & 255)) {
                f = 5;c = g;
              } else {
                k[W >> 2] = g ^ 1;k[A >> 2] = k[W >> 2];jc(a, A, L);f = 1;e = i[6309] | 0;
              }
            } else {
              k[A >> 2] = k[pa >> 2];Zb(M, A);f = 0;
            }switch (f & 7) {case 0:
                break;case 5:
                break b;default:
                {
                  na = 61;break b;
                }}
          }if ((na | 0) == 61) {
            na = 0;if (!f) continue;else break a;
          }if ((c | 0) == -2) {
            z = O;z = pe(k[z >> 2] | 0, k[z + 4 >> 2] | 0, 1, 0) | 0;c = O;k[c >> 2] = z;k[c + 4 >> 2] = N;c = gc(a) | 0;if ((c | 0) == -2) {
              na = 59;break a;
            }
          }k[A >> 2] = k[pa >> 2];Zb(M, A);y = c >> 1;i[(k[K >> 2] | 0) + y >> 0] = c & 1;z = k[oa >> 2] | 0;y = (k[P >> 2] | 0) + (y << 3) | 0;k[y >> 2] = -1;k[y + 4 >> 2] = z;y = k[Q >> 2] | 0;z = k[pa >> 2] | 0;k[pa >> 2] = z + 1;k[y + (z << 2) >> 2] = c;
        }y = T;y = pe(k[y >> 2] | 0, k[y + 4 >> 2] | 0, 1, 0) | 0;z = T;k[z >> 2] = y;k[z + 4 >> 2] = N;z = m + 1 | 0;if (!(k[oa >> 2] | 0)) {
          na = 5;break;
        }if (k[ra >> 2] | 0) k[sa >> 2] = 0;hc(a, c, ra, B);fc(a, k[B >> 2] | 0);if ((k[sa >> 2] | 0) == 1) {
          c = k[k[ra >> 2] >> 2] | 0;y = c >> 1;i[(k[K >> 2] | 0) + y >> 0] = c & 1;f = k[oa >> 2] | 0;y = (k[P >> 2] | 0) + (y << 3) | 0;k[y >> 2] = -1;k[y + 4 >> 2] = f;y = k[Q >> 2] | 0;f = k[pa >> 2] | 0;k[pa >> 2] = f + 1;f = y + (f << 2) | 0;
        } else {
          n = cc(ia, ra, 1) | 0;c = k[G >> 2] | 0;if ((c | 0) == (k[ka >> 2] | 0)) {
            f = (c >> 1) + 2 & -2;f = (f | 0) > 2 ? f : 2;if ((f | 0) > (2147483647 - c | 0)) {
              na = 14;break;
            }x = k[ja >> 2] | 0;y = f + c | 0;k[ka >> 2] = y;y = Nd(x, y << 2) | 0;k[ja >> 2] = y;if ((y | 0) == 0 ? (y = xc() | 0, (k[y >> 2] | 0) == 12) : 0) {
              na = 14;break;
            }c = k[G >> 2] | 0;
          }f = k[ja >> 2] | 0;k[G >> 2] = c + 1;k[f + (c << 2) >> 2] = n;dc(a, n);f = k[ia >> 2] | 0;y = f + (n << 2) | 0;d = +p[Y >> 3];y = y + 4 + ((k[y >> 2] | 0) >>> 5 << 2) | 0;w = d + +o[y >> 2];o[y >> 2] = w;if (w > 1.0e20) {
            g = k[G >> 2] | 0;if ((g | 0) > 0) {
              m = k[la >> 2] | 0;c = 0;do {
                y = f + (k[m + (c << 2) >> 2] << 2) | 0;y = y + 4 + ((k[y >> 2] | 0) >>> 5 << 2) | 0;o[y >> 2] = +o[y >> 2] * 1.0e-20;c = c + 1 | 0;
              } while ((c | 0) != (g | 0));
            }p[Y >> 3] = d * 1.0e-20;
          }c = k[k[ra >> 2] >> 2] | 0;y = c >> 1;i[(k[K >> 2] | 0) + y >> 0] = c & 1;f = k[oa >> 2] | 0;y = (k[P >> 2] | 0) + (y << 3) | 0;k[y >> 2] = n;k[y + 4 >> 2] = f;y = k[Q >> 2] | 0;f = k[pa >> 2] | 0;k[pa >> 2] = f + 1;f = y + (f << 2) | 0;
        }k[f >> 2] = c;p[V >> 3] = +p[V >> 3] * (1.0 / +p[U >> 3]);p[Y >> 3] = +p[Y >> 3] * (1.0 / +p[X >> 3]);y = (k[Z >> 2] | 0) + -1 | 0;k[Z >> 2] = y;if (y | 0) {
          m = z;continue;
        }w = +p[_ >> 3] * +p[$ >> 3];p[$ >> 3] = w;k[Z >> 2] = ~~w;w = +p[aa >> 3] * +p[H >> 3];p[H >> 3] = w;if ((k[ba >> 2] | 0) <= 0) {
          m = z;continue;
        }x = k[T >> 2] | 0;y = k[ca >> 2] | 0;m = k[oa >> 2] | 0;if (!m) c = pa;else c = k[qa >> 2] | 0;n = k[c >> 2] | 0;q = k[da >> 2] | 0;r = k[ea >> 2] | 0;s = k[fa >> 2] | 0;v = ga;t = k[v >> 2] | 0;v = k[v + 4 >> 2] | 0;j = +(k[ha >> 2] | 0);h = 1.0 / j;if ((m | 0) < 0) d = 0.0;else {
          g = 0;d = 0.0;while (1) {
            if (!g) f = 0;else f = k[(k[qa >> 2] | 0) + (g + -1 << 2) >> 2] | 0;if ((g | 0) == (m | 0)) c = pa;else c = (k[qa >> 2] | 0) + (g << 2) | 0;d = d + +R(+h, + +(g | 0)) * +((k[c >> 2] | 0) - f | 0);if ((g | 0) == (m | 0)) break;else g = g + 1 | 0;
          }
        }k[ma >> 2] = x;k[ma + 4 >> 2] = y - n;k[ma + 8 >> 2] = q;k[ma + 12 >> 2] = r;k[ma + 16 >> 2] = ~~w;k[ma + 20 >> 2] = s;p[ma + 24 >> 3] = (+(t >>> 0) + 4294967296.0 * +(v >>> 0)) / +(s | 0);p[ma + 32 >> 3] = d / j * 100.0;Id(2009, ma) | 0;m = z;
      }if ((na | 0) == 5) e = i[6309] | 0;else if ((na | 0) == 14) va(La(1) | 0, 8, 0);else if ((na | 0) == 39) {
        j = +(k[ha >> 2] | 0);h = 1.0 / j;g = k[oa >> 2] | 0;if ((g | 0) < 0) d = 0.0;else {
          f = 0;d = 0.0;while (1) {
            if (!f) e = 0;else e = k[(k[qa >> 2] | 0) + (f + -1 << 2) >> 2] | 0;if ((f | 0) == (g | 0)) c = pa;else c = (k[qa >> 2] | 0) + (f << 2) | 0;d = d + +R(+h, + +(f | 0)) * +((k[c >> 2] | 0) - e | 0);if ((f | 0) == (g | 0)) break;else f = f + 1 | 0;
          }
        }p[a + 528 >> 3] = d / j;fc(a, 0);e = i[6310] | 0;
      } else if ((na | 0) == 48) e = i[6309] | 0;else if ((na | 0) == 59) e = i[6308] | 0;c = k[ra >> 2] | 0;if (!c) {
        u = ua;return e | 0;
      }k[sa >> 2] = 0;Md(c);k[ra >> 2] = 0;k[ta >> 2] = 0;u = ua;return e | 0;
    }function rc(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0.0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = 0,
          w = 0.0,
          x = 0;v = a + 4 | 0;if (k[v >> 2] | 0) k[a + 8 >> 2] = 0;u = a + 36 | 0;c = a + 32 | 0;if ((k[u >> 2] | 0) > 0) {
        e = a + 16 | 0;b = 0;do {
          i[(k[e >> 2] | 0) + (k[(k[c >> 2] | 0) + (b << 2) >> 2] | 0) >> 0] = 0;b = b + 1 | 0;
        } while ((b | 0) < (k[u >> 2] | 0));
      }if (k[c >> 2] | 0) k[u >> 2] = 0;t = a + 492 | 0;if (!(i[t >> 0] | 0)) {
        v = i[6309] | 0;return v | 0;
      }b = a + 152 | 0;s = b;s = pe(k[s >> 2] | 0, k[s + 4 >> 2] | 0, 1, 0) | 0;k[b >> 2] = s;k[b + 4 >> 2] = N;w = +p[a + 120 >> 3] * +(k[a + 208 >> 2] | 0);b = a + 640 | 0;p[b >> 3] = w;d = +(k[a + 104 >> 2] | 0);if (w < d) p[b >> 3] = d;b = k[a + 136 >> 2] | 0;p[a + 648 >> 3] = +(b | 0);k[a + 656 >> 2] = b;b = i[6310] | 0;s = a + 44 | 0;if ((k[s >> 2] | 0) > 0) {
        Hd(2059) | 0;Hd(2139) | 0;Hd(2219) | 0;Hd(2299) | 0;c = i[6310] | 0;
      } else c = b;q = a + 192 | 0;r = a + 184 | 0;a: do {
        if (!(((c & 255) >>> 1 ^ 1) & b << 24 >> 24 == c << 24 >> 24 | b & 2 & c & 255)) j = b;else {
          g = a + 80 | 0;h = a + 112 | 0;l = a + 108 | 0;m = a + 680 | 0;n = a + 664 | 0;o = a + 672 | 0;b = 0;do {
            d = +p[h >> 3];if (i[g >> 0] | 0) {
              if ((b | 0) < 1) {
                c = 0;e = 0;
              } else {
                e = 1;c = 0;do {
                  c = c + 1 | 0;e = e << 1 | 1;
                } while ((e | 0) <= (b | 0));e = e + -1 | 0;
              }if ((e | 0) != (b | 0)) {
                f = b;do {
                  j = e >> 1;c = c + -1 | 0;f = (f | 0) % (j | 0) | 0;e = j + -1 | 0;
                } while ((e | 0) != (f | 0));
              }
            } else c = b;w = +R(+d, + +(c | 0));j = qc(a, ~~(w * +(k[l >> 2] | 0))) | 0;if (i[m >> 0] | 0) break a;c = n;e = k[c + 4 >> 2] | 0;if ((e | 0) >= 0 ? (f = q, x = k[f + 4 >> 2] | 0, !(x >>> 0 < e >>> 0 | ((x | 0) == (e | 0) ? (k[f >> 2] | 0) >>> 0 < (k[c >> 2] | 0) >>> 0 : 0))) : 0) break a;c = o;e = k[c + 4 >> 2] | 0;if ((e | 0) >= 0) {
              x = r;f = k[x + 4 >> 2] | 0;c = f >>> 0 < e >>> 0 | ((f | 0) == (e | 0) ? (k[x >> 2] | 0) >>> 0 < (k[c >> 2] | 0) >>> 0 : 0);if (c) b = (c & 1) + b | 0;else break a;
            } else b = b + 1 | 0;x = i[6310] | 0;
          } while ((((x & 255) >>> 1 ^ 1) & j << 24 >> 24 == x << 24 >> 24 | j & 2 & x & 255 | 0) != 0);
        }
      } while (0);if ((k[s >> 2] | 0) > 0) Hd(2299) | 0;x = i[6308] | 0;b = j & 2;if (!(((x & 255) >>> 1 ^ 1) & j << 24 >> 24 == x << 24 >> 24 | b & x & 255)) {
        x = i[6309] | 0;if (((x & 255) >>> 1 ^ 1) & j << 24 >> 24 == x << 24 >> 24 | b & x & 255 | 0 ? (k[u >> 2] | 0) == 0 : 0) i[t >> 0] = 0;
      } else {
        h = a + 540 | 0;b = k[h >> 2] | 0;g = a + 8 | 0;if ((k[g >> 2] | 0) < (b | 0)) {
          c = a + 12 | 0;e = k[c >> 2] | 0;if ((e | 0) < (b | 0)) {
            x = b + 1 - e & -2;f = (e >> 1) + 2 & -2;f = (x | 0) > (f | 0) ? x : f;if ((f | 0) > (2147483647 - e | 0)) {
              x = La(1) | 0;va(x | 0, 8, 0);
            }u = k[v >> 2] | 0;x = f + e | 0;k[c >> 2] = x;x = Nd(u, x) | 0;k[v >> 2] = x;if ((x | 0) == 0 ? (x = xc() | 0, (k[x >> 2] | 0) == 12) : 0) {
              x = La(1) | 0;va(x | 0, 8, 0);
            }
          }c = k[g >> 2] | 0;if ((b | 0) > (c | 0)) qe((k[v >> 2] | 0) + c | 0, 0, b - c | 0) | 0;k[g >> 2] = b;b = k[h >> 2] | 0;
        }if ((b | 0) > 0) {
          c = a + 332 | 0;b = 0;do {
            i[(k[v >> 2] | 0) + b >> 0] = i[(k[c >> 2] | 0) + b >> 0] | 0;b = b + 1 | 0;
          } while ((b | 0) < (k[h >> 2] | 0));
        }
      }fc(a, 0);x = j;return x | 0;
    }function sc(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          v = 0,
          w = 0;v = u;u = u + 16 | 0;s = v;t = a + 284 | 0;k[s >> 2] = k[t >> 2];Zb(a + 292 | 0, s);s = b + 4 | 0;e = k[s >> 2] | 0;a: do {
        if ((e | 0) > 0) {
          o = a + 332 | 0;p = a + 296 | 0;q = a + 396 | 0;r = a + 280 | 0;n = 0;while (1) {
            f = k[(k[b >> 2] | 0) + (n << 2) >> 2] | 0;g = f >> 1;h = f & 1;j = (k[o >> 2] | 0) + g | 0;m = ((l[j >> 0] | 0) ^ h) & 255;w = i[6309] | 0;if (m << 24 >> 24 == w << 24 >> 24 & ((w & 255) >>> 1 ^ 1) | w & 2 & m & 255 | 0) break;w = i[6310] | 0;if (((w & 255) >>> 1 ^ 1) & m << 24 >> 24 == w << 24 >> 24 | m & 2 & w & 255) {
              i[j >> 0] = h;e = k[p >> 2] | 0;w = (k[q >> 2] | 0) + (g << 3) | 0;k[w >> 2] = -1;k[w + 4 >> 2] = e;w = k[r >> 2] | 0;e = k[t >> 2] | 0;k[t >> 2] = e + 1;k[w + (e << 2) >> 2] = f;e = k[s >> 2] | 0;
            }n = n + 1 | 0;if ((n | 0) >= (e | 0)) break a;
          }fc(a, 0);w = 0;u = v;return w | 0;
        }
      } while (0);if (d) e = 0;else e = k[t >> 2] | 0;if ((bc(a) | 0) == -1) {
        if (k[c >> 2] | 0) k[c + 4 >> 2] = 0;if ((e | 0) < (k[t >> 2] | 0)) {
          f = a + 280 | 0;do {
            nb(c, (k[f >> 2] | 0) + (e << 2) | 0);e = e + 1 | 0;
          } while ((e | 0) < (k[t >> 2] | 0));e = 1;
        } else e = 1;
      } else e = 0;fc(a, 0);w = e;u = v;return w | 0;
    }function tc(a) {
      a = a | 0;var b = 0,
          c = 0;b = u;u = u + 16 | 0;c = b;a = Ac(k[a + 60 >> 2] | 0) | 0;k[c >> 2] = a;a = wc(Aa(6, c | 0) | 0) | 0;u = b;return a | 0;
    }function uc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0;m = u;u = u + 48 | 0;j = m + 16 | 0;f = m;e = m + 32 | 0;h = a + 28 | 0;d = k[h >> 2] | 0;k[e >> 2] = d;i = a + 20 | 0;d = (k[i >> 2] | 0) - d | 0;k[e + 4 >> 2] = d;k[e + 8 >> 2] = b;k[e + 12 >> 2] = c;d = d + c | 0;g = a + 60 | 0;k[f >> 2] = k[g >> 2];k[f + 4 >> 2] = e;k[f + 8 >> 2] = 2;f = wc(Ca(146, f | 0) | 0) | 0;a: do {
        if ((d | 0) != (f | 0)) {
          b = 2;while (1) {
            if ((f | 0) < 0) break;d = d - f | 0;o = k[e + 4 >> 2] | 0;n = f >>> 0 > o >>> 0;e = n ? e + 8 | 0 : e;b = (n << 31 >> 31) + b | 0;o = f - (n ? o : 0) | 0;k[e >> 2] = (k[e >> 2] | 0) + o;n = e + 4 | 0;k[n >> 2] = (k[n >> 2] | 0) - o;k[j >> 2] = k[g >> 2];k[j + 4 >> 2] = e;k[j + 8 >> 2] = b;f = wc(Ca(146, j | 0) | 0) | 0;if ((d | 0) == (f | 0)) {
              l = 3;break a;
            }
          }k[a + 16 >> 2] = 0;k[h >> 2] = 0;k[i >> 2] = 0;k[a >> 2] = k[a >> 2] | 32;if ((b | 0) == 2) c = 0;else c = c - (k[e + 4 >> 2] | 0) | 0;
        } else l = 3;
      } while (0);if ((l | 0) == 3) {
        o = k[a + 44 >> 2] | 0;k[a + 16 >> 2] = o + (k[a + 48 >> 2] | 0);k[h >> 2] = o;k[i >> 2] = o;
      }u = m;return c | 0;
    }function vc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0;e = u;u = u + 32 | 0;f = e;d = e + 20 | 0;k[f >> 2] = k[a + 60 >> 2];k[f + 4 >> 2] = 0;k[f + 8 >> 2] = b;k[f + 12 >> 2] = d;k[f + 16 >> 2] = c;if ((wc(Ba(140, f | 0) | 0) | 0) < 0) {
        k[d >> 2] = -1;a = -1;
      } else a = k[d >> 2] | 0;u = e;return a | 0;
    }function wc(a) {
      a = a | 0;var b = 0;if (a >>> 0 > 4294963200) {
        b = xc() | 0;k[b >> 2] = 0 - a;a = -1;
      }return a | 0;
    }function xc() {
      return (yc() | 0) + 64 | 0;
    }function yc() {
      return zc() | 0;
    }function zc() {
      return 380;
    }function Ac(a) {
      a = a | 0;return a | 0;
    }function Bc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0;e = u;u = u + 32 | 0;d = e;k[a + 36 >> 2] = 1;if ((k[a >> 2] & 64 | 0) == 0 ? (k[d >> 2] = k[a + 60 >> 2], k[d + 4 >> 2] = 21523, k[d + 8 >> 2] = e + 16, wa(54, d | 0) | 0) : 0) i[a + 75 >> 0] = -1;d = uc(a, b, c) | 0;u = e;return d | 0;
    }function Cc() {
      return 5732;
    }function Dc(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0;c = i[a >> 0] | 0;d = i[b >> 0] | 0;if (c << 24 >> 24 == 0 ? 1 : c << 24 >> 24 != d << 24 >> 24) a = d;else {
        do {
          a = a + 1 | 0;b = b + 1 | 0;c = i[a >> 0] | 0;d = i[b >> 0] | 0;
        } while (!(c << 24 >> 24 == 0 ? 1 : c << 24 >> 24 != d << 24 >> 24));a = d;
      }return (c & 255) - (a & 255) | 0;
    }function Ec(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0;f = b & 255;d = (c | 0) != 0;a: do {
        if (d & (a & 3 | 0) != 0) {
          e = b & 255;while (1) {
            if ((i[a >> 0] | 0) == e << 24 >> 24) {
              g = 6;break a;
            }a = a + 1 | 0;c = c + -1 | 0;d = (c | 0) != 0;if (!(d & (a & 3 | 0) != 0)) {
              g = 5;break;
            }
          }
        } else g = 5;
      } while (0);if ((g | 0) == 5) if (d) g = 6;else c = 0;b: do {
        if ((g | 0) == 6) {
          e = b & 255;if ((i[a >> 0] | 0) != e << 24 >> 24) {
            d = aa(f, 16843009) | 0;c: do {
              if (c >>> 0 > 3) while (1) {
                f = k[a >> 2] ^ d;if ((f & -2139062144 ^ -2139062144) & f + -16843009 | 0) break;a = a + 4 | 0;c = c + -4 | 0;if (c >>> 0 <= 3) {
                  g = 11;break c;
                }
              } else g = 11;
            } while (0);if ((g | 0) == 11) if (!c) {
              c = 0;break;
            }while (1) {
              if ((i[a >> 0] | 0) == e << 24 >> 24) break b;a = a + 1 | 0;c = c + -1 | 0;if (!c) {
                c = 0;break;
              }
            }
          }
        }
      } while (0);return (c | 0 ? a : 0) | 0;
    }function Fc(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0;d = a;a: do {
        if (!(d & 3)) c = 4;else {
          b = d;while (1) {
            if (!(i[a >> 0] | 0)) {
              a = b;break a;
            }a = a + 1 | 0;b = a;if (!(b & 3)) {
              c = 4;break;
            }
          }
        }
      } while (0);if ((c | 0) == 4) {
        while (1) {
          b = k[a >> 2] | 0;if (!((b & -2139062144 ^ -2139062144) & b + -16843009)) a = a + 4 | 0;else break;
        }if ((b & 255) << 24 >> 24) do {
          a = a + 1 | 0;
        } while ((i[a >> 0] | 0) != 0);
      }return a - d | 0;
    }function Gc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0;r = u;u = u + 224 | 0;m = r + 120 | 0;o = r + 80 | 0;p = r;q = r + 136 | 0;d = o;e = d + 40 | 0;do {
        k[d >> 2] = 0;d = d + 4 | 0;
      } while ((d | 0) < (e | 0));k[m >> 2] = k[c >> 2];if ((Hc(0, b, m, p, o) | 0) < 0) c = -1;else {
        if ((k[a + 76 >> 2] | 0) > -1) n = Ic(a) | 0;else n = 0;c = k[a >> 2] | 0;l = c & 32;if ((i[a + 74 >> 0] | 0) < 1) k[a >> 2] = c & -33;d = a + 48 | 0;if (!(k[d >> 2] | 0)) {
          e = a + 44 | 0;f = k[e >> 2] | 0;k[e >> 2] = q;g = a + 28 | 0;k[g >> 2] = q;h = a + 20 | 0;k[h >> 2] = q;k[d >> 2] = 80;j = a + 16 | 0;k[j >> 2] = q + 80;c = Hc(a, b, m, p, o) | 0;if (f) {
            Pa[k[a + 36 >> 2] & 7](a, 0, 0) | 0;c = (k[h >> 2] | 0) == 0 ? -1 : c;k[e >> 2] = f;k[d >> 2] = 0;k[j >> 2] = 0;k[g >> 2] = 0;k[h >> 2] = 0;
          }
        } else c = Hc(a, b, m, p, o) | 0;d = k[a >> 2] | 0;k[a >> 2] = d | l;if (n | 0) Jc(a);c = (d & 32 | 0) == 0 ? c : -1;
      }u = r;return c | 0;
    }function Hc(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0;G = u;u = u + 64 | 0;C = G + 16 | 0;D = G;A = G + 24 | 0;E = G + 8 | 0;F = G + 20 | 0;k[C >> 2] = b;x = (a | 0) != 0;y = A + 40 | 0;z = y;A = A + 39 | 0;B = E + 4 | 0;g = 0;f = 0;n = 0;a: while (1) {
        do {
          if ((f | 0) > -1) if ((g | 0) > (2147483647 - f | 0)) {
            f = xc() | 0;k[f >> 2] = 75;f = -1;break;
          } else {
            f = g + f | 0;break;
          }
        } while (0);g = i[b >> 0] | 0;if (!(g << 24 >> 24)) {
          w = 87;break;
        } else h = b;b: while (1) {
          switch (g << 24 >> 24) {case 37:
              {
                g = h;w = 9;break b;
              }case 0:
              {
                g = h;break b;
              }default:
              {}}v = h + 1 | 0;k[C >> 2] = v;g = i[v >> 0] | 0;h = v;
        }c: do {
          if ((w | 0) == 9) while (1) {
            w = 0;if ((i[h + 1 >> 0] | 0) != 37) break c;g = g + 1 | 0;h = h + 2 | 0;k[C >> 2] = h;if ((i[h >> 0] | 0) == 37) w = 9;else break;
          }
        } while (0);g = g - b | 0;if (x) Kc(a, b, g);if (g | 0) {
          b = h;continue;
        }l = h + 1 | 0;g = (i[l >> 0] | 0) + -48 | 0;if (g >>> 0 < 10) {
          v = (i[h + 2 >> 0] | 0) == 36;t = v ? g : -1;n = v ? 1 : n;l = v ? h + 3 | 0 : l;
        } else t = -1;k[C >> 2] = l;g = i[l >> 0] | 0;h = (g << 24 >> 24) + -32 | 0;d: do {
          if (h >>> 0 < 32) {
            m = 0;o = g;while (1) {
              g = 1 << h;if (!(g & 75913)) {
                g = o;break d;
              }m = g | m;l = l + 1 | 0;k[C >> 2] = l;g = i[l >> 0] | 0;h = (g << 24 >> 24) + -32 | 0;if (h >>> 0 >= 32) break;else o = g;
            }
          } else m = 0;
        } while (0);if (g << 24 >> 24 == 42) {
          h = l + 1 | 0;g = (i[h >> 0] | 0) + -48 | 0;if (g >>> 0 < 10 ? (i[l + 2 >> 0] | 0) == 36 : 0) {
            k[e + (g << 2) >> 2] = 10;g = k[d + ((i[h >> 0] | 0) + -48 << 3) >> 2] | 0;n = 1;l = l + 3 | 0;
          } else {
            if (n | 0) {
              f = -1;break;
            }if (x) {
              n = (k[c >> 2] | 0) + (4 - 1) & ~(4 - 1);g = k[n >> 2] | 0;k[c >> 2] = n + 4;n = 0;l = h;
            } else {
              g = 0;n = 0;l = h;
            }
          }k[C >> 2] = l;v = (g | 0) < 0;g = v ? 0 - g | 0 : g;m = v ? m | 8192 : m;
        } else {
          g = Lc(C) | 0;if ((g | 0) < 0) {
            f = -1;break;
          }l = k[C >> 2] | 0;
        }do {
          if ((i[l >> 0] | 0) == 46) {
            if ((i[l + 1 >> 0] | 0) != 42) {
              k[C >> 2] = l + 1;h = Lc(C) | 0;l = k[C >> 2] | 0;break;
            }o = l + 2 | 0;h = (i[o >> 0] | 0) + -48 | 0;if (h >>> 0 < 10 ? (i[l + 3 >> 0] | 0) == 36 : 0) {
              k[e + (h << 2) >> 2] = 10;h = k[d + ((i[o >> 0] | 0) + -48 << 3) >> 2] | 0;l = l + 4 | 0;k[C >> 2] = l;break;
            }if (n | 0) {
              f = -1;break a;
            }if (x) {
              v = (k[c >> 2] | 0) + (4 - 1) & ~(4 - 1);h = k[v >> 2] | 0;k[c >> 2] = v + 4;
            } else h = 0;k[C >> 2] = o;l = o;
          } else h = -1;
        } while (0);s = 0;while (1) {
          if (((i[l >> 0] | 0) + -65 | 0) >>> 0 > 57) {
            f = -1;break a;
          }v = l + 1 | 0;k[C >> 2] = v;o = i[(i[l >> 0] | 0) + -65 + (2379 + (s * 58 | 0)) >> 0] | 0;q = o & 255;if ((q + -1 | 0) >>> 0 < 8) {
            s = q;l = v;
          } else break;
        }if (!(o << 24 >> 24)) {
          f = -1;break;
        }r = (t | 0) > -1;do {
          if (o << 24 >> 24 == 19) {
            if (r) {
              f = -1;break a;
            } else w = 49;
          } else {
            if (r) {
              k[e + (t << 2) >> 2] = q;r = d + (t << 3) | 0;t = k[r + 4 >> 2] | 0;w = D;k[w >> 2] = k[r >> 2];k[w + 4 >> 2] = t;w = 49;break;
            }if (!x) {
              f = 0;break a;
            }Mc(D, q, c);
          }
        } while (0);if ((w | 0) == 49 ? (w = 0, !x) : 0) {
          g = 0;b = v;continue;
        }l = i[l >> 0] | 0;l = (s | 0) != 0 & (l & 15 | 0) == 3 ? l & -33 : l;r = m & -65537;t = (m & 8192 | 0) == 0 ? m : r;e: do {
          switch (l | 0) {case 110:
              switch ((s & 255) << 24 >> 24) {case 0:
                  {
                    k[k[D >> 2] >> 2] = f;g = 0;b = v;continue a;
                  }case 1:
                  {
                    k[k[D >> 2] >> 2] = f;g = 0;b = v;continue a;
                  }case 2:
                  {
                    g = k[D >> 2] | 0;k[g >> 2] = f;k[g + 4 >> 2] = ((f | 0) < 0) << 31 >> 31;g = 0;b = v;continue a;
                  }case 3:
                  {
                    j[k[D >> 2] >> 1] = f;g = 0;b = v;continue a;
                  }case 4:
                  {
                    i[k[D >> 2] >> 0] = f;g = 0;b = v;continue a;
                  }case 6:
                  {
                    k[k[D >> 2] >> 2] = f;g = 0;b = v;continue a;
                  }case 7:
                  {
                    g = k[D >> 2] | 0;k[g >> 2] = f;k[g + 4 >> 2] = ((f | 0) < 0) << 31 >> 31;g = 0;b = v;continue a;
                  }default:
                  {
                    g = 0;b = v;continue a;
                  }}case 112:
              {
                l = 120;h = h >>> 0 > 8 ? h : 8;b = t | 8;w = 61;break;
              }case 88:case 120:
              {
                b = t;w = 61;break;
              }case 111:
              {
                l = D;b = k[l >> 2] | 0;l = k[l + 4 >> 2] | 0;q = Oc(b, l, y) | 0;r = z - q | 0;m = 0;o = 2843;h = (t & 8 | 0) == 0 | (h | 0) > (r | 0) ? h : r + 1 | 0;r = t;w = 67;break;
              }case 105:case 100:
              {
                l = D;b = k[l >> 2] | 0;l = k[l + 4 >> 2] | 0;if ((l | 0) < 0) {
                  b = oe(0, 0, b | 0, l | 0) | 0;l = N;m = D;k[m >> 2] = b;k[m + 4 >> 2] = l;m = 1;o = 2843;w = 66;break e;
                } else {
                  m = (t & 2049 | 0) != 0 & 1;o = (t & 2048 | 0) == 0 ? (t & 1 | 0) == 0 ? 2843 : 2845 : 2844;w = 66;break e;
                }
              }case 117:
              {
                l = D;m = 0;o = 2843;b = k[l >> 2] | 0;l = k[l + 4 >> 2] | 0;w = 66;break;
              }case 99:
              {
                i[A >> 0] = k[D >> 2];b = A;m = 0;o = 2843;q = y;l = 1;h = r;break;
              }case 109:
              {
                l = xc() | 0;l = Qc(k[l >> 2] | 0) | 0;w = 71;break;
              }case 115:
              {
                l = k[D >> 2] | 0;l = l | 0 ? l : 2853;w = 71;break;
              }case 67:
              {
                k[E >> 2] = k[D >> 2];k[B >> 2] = 0;k[D >> 2] = E;q = -1;l = E;w = 75;break;
              }case 83:
              {
                b = k[D >> 2] | 0;if (!h) {
                  Rc(a, 32, g, 0, t);b = 0;w = 84;
                } else {
                  q = h;l = b;w = 75;
                }break;
              }case 65:case 71:case 70:case 69:case 97:case 103:case 102:case 101:
              {
                g = Tc(a, +p[D >> 3], g, h, t, l) | 0;b = v;continue a;
              }default:
              {
                m = 0;o = 2843;q = y;l = h;h = t;
              }}
        } while (0);f: do {
          if ((w | 0) == 61) {
            t = D;s = k[t >> 2] | 0;t = k[t + 4 >> 2] | 0;q = Nc(s, t, y, l & 32) | 0;o = (b & 8 | 0) == 0 | (s | 0) == 0 & (t | 0) == 0;m = o ? 0 : 2;o = o ? 2843 : 2843 + (l >> 4) | 0;r = b;b = s;l = t;w = 67;
          } else if ((w | 0) == 66) {
            q = Pc(b, l, y) | 0;r = t;w = 67;
          } else if ((w | 0) == 71) {
            w = 0;t = Ec(l, 0, h) | 0;s = (t | 0) == 0;b = l;m = 0;o = 2843;q = s ? l + h | 0 : t;l = s ? h : t - l | 0;h = r;
          } else if ((w | 0) == 75) {
            w = 0;o = l;b = 0;h = 0;while (1) {
              m = k[o >> 2] | 0;if (!m) break;h = Sc(F, m) | 0;if ((h | 0) < 0 | h >>> 0 > (q - b | 0) >>> 0) break;b = h + b | 0;if (q >>> 0 > b >>> 0) o = o + 4 | 0;else break;
            }if ((h | 0) < 0) {
              f = -1;break a;
            }Rc(a, 32, g, b, t);if (!b) {
              b = 0;w = 84;
            } else {
              m = 0;while (1) {
                h = k[l >> 2] | 0;if (!h) {
                  w = 84;break f;
                }h = Sc(F, h) | 0;m = h + m | 0;if ((m | 0) > (b | 0)) {
                  w = 84;break f;
                }Kc(a, F, h);if (m >>> 0 >= b >>> 0) {
                  w = 84;break;
                } else l = l + 4 | 0;
              }
            }
          }
        } while (0);if ((w | 0) == 67) {
          w = 0;l = (b | 0) != 0 | (l | 0) != 0;t = (h | 0) != 0 | l;l = ((l ^ 1) & 1) + (z - q) | 0;b = t ? q : y;q = y;l = t ? (h | 0) > (l | 0) ? h : l : h;h = (h | 0) > -1 ? r & -65537 : r;
        } else if ((w | 0) == 84) {
          w = 0;Rc(a, 32, g, b, t ^ 8192);g = (g | 0) > (b | 0) ? g : b;b = v;continue;
        }s = q - b | 0;r = (l | 0) < (s | 0) ? s : l;t = r + m | 0;g = (g | 0) < (t | 0) ? t : g;Rc(a, 32, g, t, h);Kc(a, o, m);Rc(a, 48, g, t, h ^ 65536);Rc(a, 48, r, s, 0);Kc(a, b, s);Rc(a, 32, g, t, h ^ 8192);b = v;
      }g: do {
        if ((w | 0) == 87) if (!a) if (!n) f = 0;else {
          f = 1;while (1) {
            b = k[e + (f << 2) >> 2] | 0;if (!b) break;Mc(d + (f << 3) | 0, b, c);f = f + 1 | 0;if ((f | 0) >= 10) {
              f = 1;break g;
            }
          }while (1) {
            if (k[e + (f << 2) >> 2] | 0) {
              f = -1;break g;
            }f = f + 1 | 0;if ((f | 0) >= 10) {
              f = 1;break;
            }
          }
        }
      } while (0);u = G;return f | 0;
    }function Ic(a) {
      a = a | 0;return 0;
    }function Jc(a) {
      a = a | 0;return;
    }function Kc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;if (!(k[a >> 2] & 32)) dd(b, c, a) | 0;return;
    }function Lc(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0;c = k[a >> 2] | 0;d = (i[c >> 0] | 0) + -48 | 0;if (d >>> 0 < 10) {
        b = 0;do {
          b = d + (b * 10 | 0) | 0;c = c + 1 | 0;k[a >> 2] = c;d = (i[c >> 0] | 0) + -48 | 0;
        } while (d >>> 0 < 10);
      } else b = 0;return b | 0;
    }function Mc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0.0;a: do {
        if (b >>> 0 <= 20) do {
          switch (b | 0) {case 9:
              {
                d = (k[c >> 2] | 0) + (4 - 1) & ~(4 - 1);b = k[d >> 2] | 0;k[c >> 2] = d + 4;k[a >> 2] = b;break a;
              }case 10:
              {
                d = (k[c >> 2] | 0) + (4 - 1) & ~(4 - 1);b = k[d >> 2] | 0;k[c >> 2] = d + 4;d = a;k[d >> 2] = b;k[d + 4 >> 2] = ((b | 0) < 0) << 31 >> 31;break a;
              }case 11:
              {
                d = (k[c >> 2] | 0) + (4 - 1) & ~(4 - 1);b = k[d >> 2] | 0;k[c >> 2] = d + 4;d = a;k[d >> 2] = b;k[d + 4 >> 2] = 0;break a;
              }case 12:
              {
                d = (k[c >> 2] | 0) + (8 - 1) & ~(8 - 1);b = d;e = k[b >> 2] | 0;b = k[b + 4 >> 2] | 0;k[c >> 2] = d + 8;d = a;k[d >> 2] = e;k[d + 4 >> 2] = b;break a;
              }case 13:
              {
                e = (k[c >> 2] | 0) + (4 - 1) & ~(4 - 1);d = k[e >> 2] | 0;k[c >> 2] = e + 4;d = (d & 65535) << 16 >> 16;e = a;k[e >> 2] = d;k[e + 4 >> 2] = ((d | 0) < 0) << 31 >> 31;break a;
              }case 14:
              {
                e = (k[c >> 2] | 0) + (4 - 1) & ~(4 - 1);d = k[e >> 2] | 0;k[c >> 2] = e + 4;e = a;k[e >> 2] = d & 65535;k[e + 4 >> 2] = 0;break a;
              }case 15:
              {
                e = (k[c >> 2] | 0) + (4 - 1) & ~(4 - 1);d = k[e >> 2] | 0;k[c >> 2] = e + 4;d = (d & 255) << 24 >> 24;e = a;k[e >> 2] = d;k[e + 4 >> 2] = ((d | 0) < 0) << 31 >> 31;break a;
              }case 16:
              {
                e = (k[c >> 2] | 0) + (4 - 1) & ~(4 - 1);d = k[e >> 2] | 0;k[c >> 2] = e + 4;e = a;k[e >> 2] = d & 255;k[e + 4 >> 2] = 0;break a;
              }case 17:
              {
                e = (k[c >> 2] | 0) + (8 - 1) & ~(8 - 1);f = +p[e >> 3];k[c >> 2] = e + 8;p[a >> 3] = f;break a;
              }case 18:
              {
                e = (k[c >> 2] | 0) + (8 - 1) & ~(8 - 1);f = +p[e >> 3];k[c >> 2] = e + 8;p[a >> 3] = f;break a;
              }default:
              break a;}
        } while (0);
      } while (0);return;
    }function Nc(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;if (!((a | 0) == 0 & (b | 0) == 0)) do {
        c = c + -1 | 0;i[c >> 0] = l[2891 + (a & 15) >> 0] | 0 | d;a = re(a | 0, b | 0, 4) | 0;b = N;
      } while (!((a | 0) == 0 & (b | 0) == 0));return c | 0;
    }function Oc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;if (!((a | 0) == 0 & (b | 0) == 0)) do {
        c = c + -1 | 0;i[c >> 0] = a & 7 | 48;a = re(a | 0, b | 0, 3) | 0;b = N;
      } while (!((a | 0) == 0 & (b | 0) == 0));return c | 0;
    }function Pc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0;if (b >>> 0 > 0 | (b | 0) == 0 & a >>> 0 > 4294967295) {
        while (1) {
          d = ze(a | 0, b | 0, 10, 0) | 0;c = c + -1 | 0;i[c >> 0] = d & 255 | 48;d = a;a = ve(a | 0, b | 0, 10, 0) | 0;if (!(b >>> 0 > 9 | (b | 0) == 9 & d >>> 0 > 4294967295)) break;else b = N;
        }b = a;
      } else b = a;if (b) while (1) {
        c = c + -1 | 0;i[c >> 0] = (b >>> 0) % 10 | 0 | 48;if (b >>> 0 < 10) break;else b = (b >>> 0) / 10 | 0;
      }return c | 0;
    }function Qc(a) {
      a = a | 0;var b = 0;b = (Zc() | 0) + 188 | 0;return _c(a, k[b >> 2] | 0) | 0;
    }function Rc(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = u;u = u + 256 | 0;f = g;if ((c | 0) > (d | 0) & (e & 73728 | 0) == 0) {
        e = c - d | 0;qe(f | 0, b | 0, (e >>> 0 < 256 ? e : 256) | 0) | 0;if (e >>> 0 > 255) {
          b = c - d | 0;do {
            Kc(a, f, 256);e = e + -256 | 0;
          } while (e >>> 0 > 255);e = b & 255;
        }Kc(a, f, e);
      }u = g;return;
    }function Sc(a, b) {
      a = a | 0;b = b | 0;if (!a) a = 0;else a = Xc(a, b, 0) | 0;return a | 0;
    }function Tc(a, b, c, d, e, f) {
      a = a | 0;b = +b;c = c | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0.0,
          r = 0,
          s = 0,
          t = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0;G = u;u = u + 560 | 0;j = G + 8 | 0;t = G;F = G + 524 | 0;E = F;m = G + 512 | 0;k[t >> 2] = 0;D = m + 12 | 0;Uc(b) | 0;if ((N | 0) < 0) {
        b = -b;B = 1;A = 2860;
      } else {
        B = (e & 2049 | 0) != 0 & 1;A = (e & 2048 | 0) == 0 ? (e & 1 | 0) == 0 ? 2861 : 2866 : 2863;
      }Uc(b) | 0;C = N & 2146435072;do {
        if (C >>> 0 < 2146435072 | (C | 0) == 2146435072 & 0 < 0) {
          q = +Vc(b, t) * 2.0;g = q != 0.0;if (g) k[t >> 2] = (k[t >> 2] | 0) + -1;w = f | 32;if ((w | 0) == 97) {
            r = f & 32;p = (r | 0) == 0 ? A : A + 9 | 0;o = B | 2;g = 12 - d | 0;do {
              if (!(d >>> 0 > 11 | (g | 0) == 0)) {
                b = 8.0;do {
                  g = g + -1 | 0;b = b * 16.0;
                } while ((g | 0) != 0);if ((i[p >> 0] | 0) == 45) {
                  b = -(b + (-q - b));break;
                } else {
                  b = q + b - b;break;
                }
              } else b = q;
            } while (0);h = k[t >> 2] | 0;g = (h | 0) < 0 ? 0 - h | 0 : h;g = Pc(g, ((g | 0) < 0) << 31 >> 31, D) | 0;if ((g | 0) == (D | 0)) {
              g = m + 11 | 0;i[g >> 0] = 48;
            }i[g + -1 >> 0] = (h >> 31 & 2) + 43;n = g + -2 | 0;i[n >> 0] = f + 15;m = (d | 0) < 1;j = (e & 8 | 0) == 0;g = F;do {
              C = ~~b;h = g + 1 | 0;i[g >> 0] = l[2891 + C >> 0] | r;b = (b - +(C | 0)) * 16.0;if ((h - E | 0) == 1 ? !(j & (m & b == 0.0)) : 0) {
                i[h >> 0] = 46;g = g + 2 | 0;
              } else g = h;
            } while (b != 0.0);C = g - E | 0;E = D - n | 0;D = (d | 0) != 0 & (C + -2 | 0) < (d | 0) ? d + 2 | 0 : C;g = E + o + D | 0;Rc(a, 32, c, g, e);Kc(a, p, o);Rc(a, 48, c, g, e ^ 65536);Kc(a, F, C);Rc(a, 48, D - C | 0, 0, 0);Kc(a, n, E);Rc(a, 32, c, g, e ^ 8192);break;
          }h = (d | 0) < 0 ? 6 : d;if (g) {
            g = (k[t >> 2] | 0) + -28 | 0;k[t >> 2] = g;b = q * 268435456.0;
          } else {
            b = q;g = k[t >> 2] | 0;
          }C = (g | 0) < 0 ? j : j + 288 | 0;j = C;do {
            y = ~~b >>> 0;k[j >> 2] = y;j = j + 4 | 0;b = (b - +(y >>> 0)) * 1.0e9;
          } while (b != 0.0);if ((g | 0) > 0) {
            m = C;o = j;while (1) {
              n = (g | 0) < 29 ? g : 29;g = o + -4 | 0;if (g >>> 0 >= m >>> 0) {
                j = 0;do {
                  x = se(k[g >> 2] | 0, 0, n | 0) | 0;x = pe(x | 0, N | 0, j | 0, 0) | 0;y = N;v = ze(x | 0, y | 0, 1e9, 0) | 0;k[g >> 2] = v;j = ve(x | 0, y | 0, 1e9, 0) | 0;g = g + -4 | 0;
                } while (g >>> 0 >= m >>> 0);if (j) {
                  m = m + -4 | 0;k[m >> 2] = j;
                }
              }j = o;while (1) {
                if (j >>> 0 <= m >>> 0) break;g = j + -4 | 0;if (!(k[g >> 2] | 0)) j = g;else break;
              }g = (k[t >> 2] | 0) - n | 0;k[t >> 2] = g;if ((g | 0) > 0) o = j;else break;
            }
          } else m = C;if ((g | 0) < 0) {
            d = ((h + 25 | 0) / 9 | 0) + 1 | 0;s = (w | 0) == 102;do {
              r = 0 - g | 0;r = (r | 0) < 9 ? r : 9;if (m >>> 0 < j >>> 0) {
                n = (1 << r) + -1 | 0;o = 1e9 >>> r;p = 0;g = m;do {
                  y = k[g >> 2] | 0;k[g >> 2] = (y >>> r) + p;p = aa(y & n, o) | 0;g = g + 4 | 0;
                } while (g >>> 0 < j >>> 0);g = (k[m >> 2] | 0) == 0 ? m + 4 | 0 : m;if (!p) {
                  m = g;g = j;
                } else {
                  k[j >> 2] = p;m = g;g = j + 4 | 0;
                }
              } else {
                m = (k[m >> 2] | 0) == 0 ? m + 4 | 0 : m;g = j;
              }j = s ? C : m;j = (g - j >> 2 | 0) > (d | 0) ? j + (d << 2) | 0 : g;g = (k[t >> 2] | 0) + r | 0;k[t >> 2] = g;
            } while ((g | 0) < 0);g = m;d = j;
          } else {
            g = m;d = j;
          }y = C;if (g >>> 0 < d >>> 0) {
            j = (y - g >> 2) * 9 | 0;n = k[g >> 2] | 0;if (n >>> 0 >= 10) {
              m = 10;do {
                m = m * 10 | 0;j = j + 1 | 0;
              } while (n >>> 0 >= m >>> 0);
            }
          } else j = 0;s = (w | 0) == 103;v = (h | 0) != 0;m = h - ((w | 0) != 102 ? j : 0) + ((v & s) << 31 >> 31) | 0;if ((m | 0) < (((d - y >> 2) * 9 | 0) + -9 | 0)) {
            m = m + 9216 | 0;r = C + 4 + (((m | 0) / 9 | 0) + -1024 << 2) | 0;m = ((m | 0) % 9 | 0) + 1 | 0;if ((m | 0) < 9) {
              n = 10;do {
                n = n * 10 | 0;m = m + 1 | 0;
              } while ((m | 0) != 9);
            } else n = 10;o = k[r >> 2] | 0;p = (o >>> 0) % (n >>> 0) | 0;m = (r + 4 | 0) == (d | 0);if (!(m & (p | 0) == 0)) {
              q = (((o >>> 0) / (n >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;x = (n | 0) / 2 | 0;b = p >>> 0 < x >>> 0 ? .5 : m & (p | 0) == (x | 0) ? 1.0 : 1.5;if (B) {
                x = (i[A >> 0] | 0) == 45;b = x ? -b : b;q = x ? -q : q;
              }m = o - p | 0;k[r >> 2] = m;if (q + b != q) {
                x = m + n | 0;k[r >> 2] = x;if (x >>> 0 > 999999999) {
                  j = r;while (1) {
                    m = j + -4 | 0;k[j >> 2] = 0;if (m >>> 0 < g >>> 0) {
                      g = g + -4 | 0;k[g >> 2] = 0;
                    }x = (k[m >> 2] | 0) + 1 | 0;k[m >> 2] = x;if (x >>> 0 > 999999999) j = m;else break;
                  }
                } else m = r;j = (y - g >> 2) * 9 | 0;o = k[g >> 2] | 0;if (o >>> 0 >= 10) {
                  n = 10;do {
                    n = n * 10 | 0;j = j + 1 | 0;
                  } while (o >>> 0 >= n >>> 0);
                }
              } else m = r;
            } else m = r;m = m + 4 | 0;m = d >>> 0 > m >>> 0 ? m : d;x = g;
          } else {
            m = d;x = g;
          }w = m;while (1) {
            if (w >>> 0 <= x >>> 0) {
              t = 0;break;
            }g = w + -4 | 0;if (!(k[g >> 2] | 0)) w = g;else {
              t = 1;break;
            }
          }d = 0 - j | 0;do {
            if (s) {
              g = ((v ^ 1) & 1) + h | 0;if ((g | 0) > (j | 0) & (j | 0) > -5) {
                n = f + -1 | 0;h = g + -1 - j | 0;
              } else {
                n = f + -2 | 0;h = g + -1 | 0;
              }g = e & 8;if (!g) {
                if (t ? (z = k[w + -4 >> 2] | 0, (z | 0) != 0) : 0) {
                  if (!((z >>> 0) % 10 | 0)) {
                    m = 0;g = 10;do {
                      g = g * 10 | 0;m = m + 1 | 0;
                    } while (!((z >>> 0) % (g >>> 0) | 0 | 0));
                  } else m = 0;
                } else m = 9;g = ((w - y >> 2) * 9 | 0) + -9 | 0;if ((n | 32 | 0) == 102) {
                  r = g - m | 0;r = (r | 0) > 0 ? r : 0;h = (h | 0) < (r | 0) ? h : r;r = 0;break;
                } else {
                  r = g + j - m | 0;r = (r | 0) > 0 ? r : 0;h = (h | 0) < (r | 0) ? h : r;r = 0;break;
                }
              } else r = g;
            } else {
              n = f;r = e & 8;
            }
          } while (0);s = h | r;o = (s | 0) != 0 & 1;p = (n | 32 | 0) == 102;if (p) {
            v = 0;g = (j | 0) > 0 ? j : 0;
          } else {
            g = (j | 0) < 0 ? d : j;g = Pc(g, ((g | 0) < 0) << 31 >> 31, D) | 0;m = D;if ((m - g | 0) < 2) do {
              g = g + -1 | 0;i[g >> 0] = 48;
            } while ((m - g | 0) < 2);i[g + -1 >> 0] = (j >> 31 & 2) + 43;g = g + -2 | 0;i[g >> 0] = n;v = g;g = m - g | 0;
          }g = B + 1 + h + o + g | 0;Rc(a, 32, c, g, e);Kc(a, A, B);Rc(a, 48, c, g, e ^ 65536);if (p) {
            n = x >>> 0 > C >>> 0 ? C : x;r = F + 9 | 0;o = r;p = F + 8 | 0;m = n;do {
              j = Pc(k[m >> 2] | 0, 0, r) | 0;if ((m | 0) == (n | 0)) {
                if ((j | 0) == (r | 0)) {
                  i[p >> 0] = 48;j = p;
                }
              } else if (j >>> 0 > F >>> 0) {
                qe(F | 0, 48, j - E | 0) | 0;do {
                  j = j + -1 | 0;
                } while (j >>> 0 > F >>> 0);
              }Kc(a, j, o - j | 0);m = m + 4 | 0;
            } while (m >>> 0 <= C >>> 0);if (s | 0) Kc(a, 2907, 1);if (m >>> 0 < w >>> 0 & (h | 0) > 0) while (1) {
              j = Pc(k[m >> 2] | 0, 0, r) | 0;if (j >>> 0 > F >>> 0) {
                qe(F | 0, 48, j - E | 0) | 0;do {
                  j = j + -1 | 0;
                } while (j >>> 0 > F >>> 0);
              }Kc(a, j, (h | 0) < 9 ? h : 9);m = m + 4 | 0;j = h + -9 | 0;if (!(m >>> 0 < w >>> 0 & (h | 0) > 9)) {
                h = j;break;
              } else h = j;
            }Rc(a, 48, h + 9 | 0, 9, 0);
          } else {
            s = t ? w : x + 4 | 0;if ((h | 0) > -1) {
              t = F + 9 | 0;r = (r | 0) == 0;d = t;o = 0 - E | 0;p = F + 8 | 0;n = x;do {
                j = Pc(k[n >> 2] | 0, 0, t) | 0;if ((j | 0) == (t | 0)) {
                  i[p >> 0] = 48;j = p;
                }do {
                  if ((n | 0) == (x | 0)) {
                    m = j + 1 | 0;Kc(a, j, 1);if (r & (h | 0) < 1) {
                      j = m;break;
                    }Kc(a, 2907, 1);j = m;
                  } else {
                    if (j >>> 0 <= F >>> 0) break;qe(F | 0, 48, j + o | 0) | 0;do {
                      j = j + -1 | 0;
                    } while (j >>> 0 > F >>> 0);
                  }
                } while (0);E = d - j | 0;Kc(a, j, (h | 0) > (E | 0) ? E : h);h = h - E | 0;n = n + 4 | 0;
              } while (n >>> 0 < s >>> 0 & (h | 0) > -1);
            }Rc(a, 48, h + 18 | 0, 18, 0);Kc(a, v, D - v | 0);
          }Rc(a, 32, c, g, e ^ 8192);
        } else {
          F = (f & 32 | 0) != 0;g = B + 3 | 0;Rc(a, 32, c, g, e & -65537);Kc(a, A, B);Kc(a, b != b | 0.0 != 0.0 ? F ? 5076 : 2887 : F ? 2879 : 2883, 3);Rc(a, 32, c, g, e ^ 8192);
        }
      } while (0);u = G;return ((g | 0) < (c | 0) ? c : g) | 0;
    }function Uc(a) {
      a = +a;var b = 0;p[s >> 3] = a;b = k[s >> 2] | 0;N = k[s + 4 >> 2] | 0;return b | 0;
    }function Vc(a, b) {
      a = +a;b = b | 0;return + +Wc(a, b);
    }function Wc(a, b) {
      a = +a;b = b | 0;var c = 0,
          d = 0,
          e = 0;p[s >> 3] = a;c = k[s >> 2] | 0;d = k[s + 4 >> 2] | 0;e = re(c | 0, d | 0, 52) | 0;switch (e & 2047) {case 0:
          {
            if (a != 0.0) {
              a = +Wc(a * 18446744073709551616.0, b);c = (k[b >> 2] | 0) + -64 | 0;
            } else c = 0;k[b >> 2] = c;break;
          }case 2047:
          break;default:
          {
            k[b >> 2] = (e & 2047) + -1022;k[s >> 2] = c;k[s + 4 >> 2] = d & -2146435073 | 1071644672;a = +p[s >> 3];
          }}return +a;
    }function Xc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;do {
        if (a) {
          if (b >>> 0 < 128) {
            i[a >> 0] = b;a = 1;break;
          }c = (Yc() | 0) + 188 | 0;if (!(k[k[c >> 2] >> 2] | 0)) if ((b & -128 | 0) == 57216) {
            i[a >> 0] = b;a = 1;break;
          } else {
            a = xc() | 0;k[a >> 2] = 84;a = -1;break;
          }if (b >>> 0 < 2048) {
            i[a >> 0] = b >>> 6 | 192;i[a + 1 >> 0] = b & 63 | 128;a = 2;break;
          }if (b >>> 0 < 55296 | (b & -8192 | 0) == 57344) {
            i[a >> 0] = b >>> 12 | 224;i[a + 1 >> 0] = b >>> 6 & 63 | 128;i[a + 2 >> 0] = b & 63 | 128;a = 3;break;
          }if ((b + -65536 | 0) >>> 0 < 1048576) {
            i[a >> 0] = b >>> 18 | 240;i[a + 1 >> 0] = b >>> 12 & 63 | 128;i[a + 2 >> 0] = b >>> 6 & 63 | 128;i[a + 3 >> 0] = b & 63 | 128;a = 4;break;
          } else {
            a = xc() | 0;k[a >> 2] = 84;a = -1;break;
          }
        } else a = 1;
      } while (0);return a | 0;
    }function Yc() {
      return zc() | 0;
    }function Zc() {
      return zc() | 0;
    }function _c(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0;d = 0;while (1) {
        if ((l[2909 + d >> 0] | 0) == (a | 0)) {
          a = 2;break;
        }c = d + 1 | 0;if ((c | 0) == 87) {
          c = 2997;d = 87;a = 5;break;
        } else d = c;
      }if ((a | 0) == 2) if (!d) c = 2997;else {
        c = 2997;a = 5;
      }if ((a | 0) == 5) while (1) {
        do {
          a = c;c = c + 1 | 0;
        } while ((i[a >> 0] | 0) != 0);d = d + -1 | 0;if (!d) break;else a = 5;
      }return $c(c, k[b + 20 >> 2] | 0) | 0;
    }function $c(a, b) {
      a = a | 0;b = b | 0;return ad(a, b) | 0;
    }function ad(a, b) {
      a = a | 0;b = b | 0;if (!b) b = 0;else b = bd(k[b >> 2] | 0, k[b + 4 >> 2] | 0, a) | 0;return (b | 0 ? b : a) | 0;
    }function bd(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0;o = (k[a >> 2] | 0) + 1794895138 | 0;f = cd(k[a + 8 >> 2] | 0, o) | 0;d = cd(k[a + 12 >> 2] | 0, o) | 0;e = cd(k[a + 16 >> 2] | 0, o) | 0;a: do {
        if ((f >>> 0 < b >>> 2 >>> 0 ? (n = b - (f << 2) | 0, d >>> 0 < n >>> 0 & e >>> 0 < n >>> 0) : 0) ? ((e | d) & 3 | 0) == 0 : 0) {
          n = d >>> 2;m = e >>> 2;l = 0;while (1) {
            h = f >>> 1;j = l + h | 0;g = j << 1;e = g + n | 0;d = cd(k[a + (e << 2) >> 2] | 0, o) | 0;e = cd(k[a + (e + 1 << 2) >> 2] | 0, o) | 0;if (!(e >>> 0 < b >>> 0 & d >>> 0 < (b - e | 0) >>> 0)) {
              d = 0;break a;
            }if (i[a + (e + d) >> 0] | 0) {
              d = 0;break a;
            }d = Dc(c, a + e | 0) | 0;if (!d) break;d = (d | 0) < 0;if ((f | 0) == 1) {
              d = 0;break a;
            } else {
              l = d ? l : j;f = d ? h : f - h | 0;
            }
          }d = g + m | 0;e = cd(k[a + (d << 2) >> 2] | 0, o) | 0;d = cd(k[a + (d + 1 << 2) >> 2] | 0, o) | 0;if (d >>> 0 < b >>> 0 & e >>> 0 < (b - d | 0) >>> 0) d = (i[a + (d + e) >> 0] | 0) == 0 ? a + d | 0 : 0;else d = 0;
        } else d = 0;
      } while (0);return d | 0;
    }function cd(a, b) {
      a = a | 0;b = b | 0;var c = 0;c = Be(a | 0) | 0;return ((b | 0) == 0 ? a : c) | 0;
    }function dd(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;d = c + 16 | 0;e = k[d >> 2] | 0;if (!e) {
        if (!(ed(c) | 0)) {
          e = k[d >> 2] | 0;f = 5;
        } else d = 0;
      } else f = 5;a: do {
        if ((f | 0) == 5) {
          h = c + 20 | 0;g = k[h >> 2] | 0;d = g;if ((e - g | 0) >>> 0 < b >>> 0) {
            d = Pa[k[c + 36 >> 2] & 7](c, a, b) | 0;break;
          }b: do {
            if ((i[c + 75 >> 0] | 0) > -1) {
              g = b;while (1) {
                if (!g) {
                  f = 0;e = a;break b;
                }e = g + -1 | 0;if ((i[a + e >> 0] | 0) == 10) break;else g = e;
              }d = Pa[k[c + 36 >> 2] & 7](c, a, g) | 0;if (d >>> 0 < g >>> 0) break a;f = g;e = a + g | 0;b = b - g | 0;d = k[h >> 2] | 0;
            } else {
              f = 0;e = a;
            }
          } while (0);Ae(d | 0, e | 0, b | 0) | 0;k[h >> 2] = (k[h >> 2] | 0) + b;d = f + b | 0;
        }
      } while (0);return d | 0;
    }function ed(a) {
      a = a | 0;var b = 0,
          c = 0;b = a + 74 | 0;c = i[b >> 0] | 0;i[b >> 0] = c + 255 | c;b = k[a >> 2] | 0;if (!(b & 8)) {
        k[a + 8 >> 2] = 0;k[a + 4 >> 2] = 0;c = k[a + 44 >> 2] | 0;k[a + 28 >> 2] = c;k[a + 20 >> 2] = c;k[a + 16 >> 2] = c + (k[a + 48 >> 2] | 0);a = 0;
      } else {
        k[a >> 2] = b | 32;a = -1;
      }return a | 0;
    }function fd(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0;i = u;u = u + 128 | 0;g = i;k[g >> 2] = 0;h = g + 4 | 0;k[h >> 2] = a;k[g + 44 >> 2] = a;f = g + 8 | 0;k[f >> 2] = (a | 0) < 0 ? -1 : a + 2147483647 | 0;k[g + 76 >> 2] = -1;gd(g, 0);c = hd(g, c, 1, d, e) | 0;if (b | 0) k[b >> 2] = a + ((k[h >> 2] | 0) + (k[g + 108 >> 2] | 0) - (k[f >> 2] | 0));u = i;return c | 0;
    }function gd(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0;k[a + 104 >> 2] = b;c = k[a + 8 >> 2] | 0;d = k[a + 4 >> 2] | 0;e = c - d | 0;k[a + 108 >> 2] = e;k[a + 100 >> 2] = (b | 0) != 0 & (e | 0) > (b | 0) ? d + b | 0 : c;return;
    }function hd(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0;a: do {
        if (b >>> 0 > 36) {
          e = xc() | 0;k[e >> 2] = 22;e = 0;d = 0;
        } else {
          r = a + 4 | 0;q = a + 100 | 0;do {
            f = k[r >> 2] | 0;if (f >>> 0 < (k[q >> 2] | 0) >>> 0) {
              k[r >> 2] = f + 1;f = l[f >> 0] | 0;
            } else f = id(a) | 0;
          } while ((jd(f) | 0) != 0);b: do {
            switch (f | 0) {case 43:case 45:
                {
                  f = ((f | 0) == 45) << 31 >> 31;g = k[r >> 2] | 0;if (g >>> 0 < (k[q >> 2] | 0) >>> 0) {
                    k[r >> 2] = g + 1;p = f;f = l[g >> 0] | 0;break b;
                  } else {
                    p = f;f = id(a) | 0;break b;
                  }
                }default:
                p = 0;}
          } while (0);g = (b | 0) == 0;do {
            if ((b | 16 | 0) == 16 & (f | 0) == 48) {
              f = k[r >> 2] | 0;if (f >>> 0 < (k[q >> 2] | 0) >>> 0) {
                k[r >> 2] = f + 1;f = l[f >> 0] | 0;
              } else f = id(a) | 0;if ((f | 32 | 0) != 120) if (g) {
                b = 8;n = 46;break;
              } else {
                n = 32;break;
              }f = k[r >> 2] | 0;if (f >>> 0 < (k[q >> 2] | 0) >>> 0) {
                k[r >> 2] = f + 1;f = l[f >> 0] | 0;
              } else f = id(a) | 0;if ((l[4802 + f >> 0] | 0) > 15) {
                d = (k[q >> 2] | 0) != 0;if (d) k[r >> 2] = (k[r >> 2] | 0) + -1;if (!c) {
                  gd(a, 0);e = 0;d = 0;break a;
                }if (!d) {
                  e = 0;d = 0;break a;
                }k[r >> 2] = (k[r >> 2] | 0) + -1;e = 0;d = 0;break a;
              } else {
                b = 16;n = 46;
              }
            } else {
              b = g ? 10 : b;if ((l[4802 + f >> 0] | 0) >>> 0 < b >>> 0) n = 32;else {
                if (k[q >> 2] | 0) k[r >> 2] = (k[r >> 2] | 0) + -1;gd(a, 0);e = xc() | 0;k[e >> 2] = 22;e = 0;d = 0;break a;
              }
            }
          } while (0);c: do {
            if ((n | 0) == 32) if ((b | 0) == 10) {
              b = f + -48 | 0;if (b >>> 0 < 10) {
                f = 0;g = b;do {
                  f = (f * 10 | 0) + g | 0;b = k[r >> 2] | 0;if (b >>> 0 < (k[q >> 2] | 0) >>> 0) {
                    k[r >> 2] = b + 1;b = l[b >> 0] | 0;
                  } else b = id(a) | 0;g = b + -48 | 0;
                } while (g >>> 0 < 10 & f >>> 0 < 429496729);c = 0;
              } else {
                b = f;f = 0;c = 0;
              }h = b + -48 | 0;if (h >>> 0 < 10) {
                g = b;do {
                  b = xe(f | 0, c | 0, 10, 0) | 0;j = N;m = ((h | 0) < 0) << 31 >> 31;o = ~m;if (j >>> 0 > o >>> 0 | (j | 0) == (o | 0) & b >>> 0 > ~h >>> 0) {
                    b = 10;n = 72;break c;
                  }f = pe(b | 0, j | 0, h | 0, m | 0) | 0;c = N;b = k[r >> 2] | 0;if (b >>> 0 < (k[q >> 2] | 0) >>> 0) {
                    k[r >> 2] = b + 1;g = l[b >> 0] | 0;
                  } else g = id(a) | 0;h = g + -48 | 0;
                } while (h >>> 0 < 10 & (c >>> 0 < 429496729 | (c | 0) == 429496729 & f >>> 0 < 2576980378));if (h >>> 0 > 9) {
                  g = p;b = c;
                } else {
                  b = 10;n = 72;
                }
              } else {
                g = p;b = c;
              }
            } else n = 46;
          } while (0);d: do {
            if ((n | 0) == 46) {
              if (!(b + -1 & b)) {
                n = i[5058 + ((b * 23 | 0) >>> 5 & 7) >> 0] | 0;c = i[4802 + f >> 0] | 0;g = c & 255;if (g >>> 0 < b >>> 0) {
                  f = 0;h = g;do {
                    f = h | f << n;g = k[r >> 2] | 0;if (g >>> 0 < (k[q >> 2] | 0) >>> 0) {
                      k[r >> 2] = g + 1;g = l[g >> 0] | 0;
                    } else g = id(a) | 0;c = i[4802 + g >> 0] | 0;h = c & 255;
                  } while (f >>> 0 < 134217728 & h >>> 0 < b >>> 0);h = 0;
                } else {
                  g = f;h = 0;f = 0;
                }j = re(-1, -1, n | 0) | 0;m = N;if ((c & 255) >>> 0 >= b >>> 0 | (h >>> 0 > m >>> 0 | (h | 0) == (m | 0) & f >>> 0 > j >>> 0)) {
                  c = h;n = 72;break;
                } else g = h;while (1) {
                  f = se(f | 0, g | 0, n | 0) | 0;h = N;f = c & 255 | f;g = k[r >> 2] | 0;if (g >>> 0 < (k[q >> 2] | 0) >>> 0) {
                    k[r >> 2] = g + 1;g = l[g >> 0] | 0;
                  } else g = id(a) | 0;c = i[4802 + g >> 0] | 0;if ((c & 255) >>> 0 >= b >>> 0 | (h >>> 0 > m >>> 0 | (h | 0) == (m | 0) & f >>> 0 > j >>> 0)) {
                    c = h;n = 72;break d;
                  } else g = h;
                }
              }c = i[4802 + f >> 0] | 0;g = c & 255;if (g >>> 0 < b >>> 0) {
                f = 0;h = g;do {
                  f = h + (aa(f, b) | 0) | 0;g = k[r >> 2] | 0;if (g >>> 0 < (k[q >> 2] | 0) >>> 0) {
                    k[r >> 2] = g + 1;g = l[g >> 0] | 0;
                  } else g = id(a) | 0;c = i[4802 + g >> 0] | 0;h = c & 255;
                } while (f >>> 0 < 119304647 & h >>> 0 < b >>> 0);h = 0;
              } else {
                g = f;f = 0;h = 0;
              }if ((c & 255) >>> 0 < b >>> 0) {
                n = ve(-1, -1, b | 0, 0) | 0;o = N;m = h;while (1) {
                  if (m >>> 0 > o >>> 0 | (m | 0) == (o | 0) & f >>> 0 > n >>> 0) {
                    c = m;n = 72;break d;
                  }h = xe(f | 0, m | 0, b | 0, 0) | 0;j = N;c = c & 255;if (j >>> 0 > 4294967295 | (j | 0) == -1 & h >>> 0 > ~c >>> 0) {
                    c = m;n = 72;break d;
                  }f = pe(c | 0, 0, h | 0, j | 0) | 0;h = N;g = k[r >> 2] | 0;if (g >>> 0 < (k[q >> 2] | 0) >>> 0) {
                    k[r >> 2] = g + 1;g = l[g >> 0] | 0;
                  } else g = id(a) | 0;c = i[4802 + g >> 0] | 0;if ((c & 255) >>> 0 >= b >>> 0) {
                    c = h;n = 72;break;
                  } else m = h;
                }
              } else {
                c = h;n = 72;
              }
            }
          } while (0);if ((n | 0) == 72) if ((l[4802 + g >> 0] | 0) >>> 0 < b >>> 0) {
            do {
              f = k[r >> 2] | 0;if (f >>> 0 < (k[q >> 2] | 0) >>> 0) {
                k[r >> 2] = f + 1;f = l[f >> 0] | 0;
              } else f = id(a) | 0;
            } while ((l[4802 + f >> 0] | 0) >>> 0 < b >>> 0);g = xc() | 0;k[g >> 2] = 34;g = (d & 1 | 0) == 0 & 0 == 0 ? p : 0;b = e;f = d;
          } else {
            g = p;b = c;
          }if (k[q >> 2] | 0) k[r >> 2] = (k[r >> 2] | 0) + -1;if (!(b >>> 0 < e >>> 0 | (b | 0) == (e | 0) & f >>> 0 < d >>> 0)) {
            if (!((d & 1 | 0) != 0 | 0 != 0 | (g | 0) != 0)) {
              r = xc() | 0;k[r >> 2] = 34;d = pe(d | 0, e | 0, -1, -1) | 0;e = N;break;
            }if (b >>> 0 > e >>> 0 | (b | 0) == (e | 0) & f >>> 0 > d >>> 0) {
              r = xc() | 0;k[r >> 2] = 34;break;
            }
          }d = ((g | 0) < 0) << 31 >> 31;d = oe(f ^ g | 0, b ^ d | 0, g | 0, d | 0) | 0;e = N;
        }
      } while (0);N = e;return d | 0;
    }function id(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;c = a + 104 | 0;g = k[c >> 2] | 0;if ((g | 0) != 0 ? (k[a + 108 >> 2] | 0) >= (g | 0) : 0) h = 4;else {
        b = kd(a) | 0;if ((b | 0) >= 0) {
          d = k[c >> 2] | 0;c = a + 8 | 0;if (d) {
            f = k[c >> 2] | 0;c = k[a + 4 >> 2] | 0;e = a + 108 | 0;d = d - (k[e >> 2] | 0) | 0;g = f;if ((f - c | 0) < (d | 0)) {
              f = g;d = g;
            } else {
              f = c + (d + -1) | 0;d = g;
            }
          } else {
            d = k[c >> 2] | 0;e = a + 108 | 0;f = d;c = k[a + 4 >> 2] | 0;
          }k[a + 100 >> 2] = f;if (d | 0) k[e >> 2] = d + 1 - c + (k[e >> 2] | 0);c = c + -1 | 0;if ((l[c >> 0] | 0 | 0) != (b | 0)) i[c >> 0] = b;
        } else h = 4;
      }if ((h | 0) == 4) {
        k[a + 100 >> 2] = 0;b = -1;
      }return b | 0;
    }function jd(a) {
      a = a | 0;return ((a | 0) == 32 | (a + -9 | 0) >>> 0 < 5) & 1 | 0;
    }function kd(a) {
      a = a | 0;var b = 0,
          c = 0;c = u;u = u + 16 | 0;b = c;if ((ld(a) | 0) == 0 ? (Pa[k[a + 32 >> 2] & 7](a, b, 1) | 0) == 1 : 0) a = l[b >> 0] | 0;else a = -1;u = c;return a | 0;
    }function ld(a) {
      a = a | 0;var b = 0,
          c = 0;b = a + 74 | 0;c = i[b >> 0] | 0;i[b >> 0] = c + 255 | c;b = a + 20 | 0;c = a + 28 | 0;if ((k[b >> 2] | 0) >>> 0 > (k[c >> 2] | 0) >>> 0) Pa[k[a + 36 >> 2] & 7](a, 0, 0) | 0;k[a + 16 >> 2] = 0;k[c >> 2] = 0;k[b >> 2] = 0;b = k[a >> 2] | 0;if (!(b & 4)) {
        c = (k[a + 44 >> 2] | 0) + (k[a + 48 >> 2] | 0) | 0;k[a + 8 >> 2] = c;k[a + 4 >> 2] = c;b = b << 27 >> 31;
      } else {
        k[a >> 2] = b | 32;b = -1;
      }return b | 0;
    }function md(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;c = fd(a, b, c, -2147483648, 0) | 0;return c | 0;
    }function nd() {
      sa(5796);return 5804;
    }function od() {
      Fa(5796);return;
    }function pd(a) {
      a = a | 0;var b = 0,
          c = 0;do {
        if (a) {
          if ((k[a + 76 >> 2] | 0) <= -1) {
            b = qd(a) | 0;break;
          }c = (Ic(a) | 0) == 0;b = qd(a) | 0;if (!c) Jc(a);
        } else {
          if (!(k[188] | 0)) b = 0;else b = pd(k[188] | 0) | 0;a = nd() | 0;a = k[a >> 2] | 0;if (a) do {
            if ((k[a + 76 >> 2] | 0) > -1) c = Ic(a) | 0;else c = 0;if ((k[a + 20 >> 2] | 0) >>> 0 > (k[a + 28 >> 2] | 0) >>> 0) b = qd(a) | 0 | b;if (c | 0) Jc(a);a = k[a + 56 >> 2] | 0;
          } while ((a | 0) != 0);od();
        }
      } while (0);return b | 0;
    }function qd(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0;b = a + 20 | 0;g = a + 28 | 0;if ((k[b >> 2] | 0) >>> 0 > (k[g >> 2] | 0) >>> 0 ? (Pa[k[a + 36 >> 2] & 7](a, 0, 0) | 0, (k[b >> 2] | 0) == 0) : 0) a = -1;else {
        c = a + 4 | 0;d = k[c >> 2] | 0;e = a + 8 | 0;f = k[e >> 2] | 0;if (d >>> 0 < f >>> 0) Pa[k[a + 40 >> 2] & 7](a, d - f | 0, 1) | 0;k[a + 16 >> 2] = 0;k[g >> 2] = 0;k[b >> 2] = 0;k[e >> 2] = 0;k[c >> 2] = 0;a = 0;
      }return a | 0;
    }function rd(a, b) {
      a = a | 0;b = b | 0;var c = 0;c = Fc(a) | 0;return ((sd(a, 1, c, b) | 0) != (c | 0)) << 31 >> 31 | 0;
    }function sd(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0;e = aa(c, b) | 0;c = (b | 0) == 0 ? 0 : c;if ((k[d + 76 >> 2] | 0) > -1) {
        f = (Ic(d) | 0) == 0;a = dd(a, e, d) | 0;if (!f) Jc(d);
      } else a = dd(a, e, d) | 0;if ((a | 0) != (e | 0)) c = (a >>> 0) / (b >>> 0) | 0;return c | 0;
    }function td(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0;j = u;u = u + 16 | 0;g = j;h = b & 255;i[g >> 0] = h;d = a + 16 | 0;e = k[d >> 2] | 0;if (!e) {
        if (!(ed(a) | 0)) {
          e = k[d >> 2] | 0;f = 4;
        } else c = -1;
      } else f = 4;do {
        if ((f | 0) == 4) {
          f = a + 20 | 0;d = k[f >> 2] | 0;if (d >>> 0 < e >>> 0 ? (c = b & 255, (c | 0) != (i[a + 75 >> 0] | 0)) : 0) {
            k[f >> 2] = d + 1;i[d >> 0] = h;break;
          }if ((Pa[k[a + 36 >> 2] & 7](a, g, 1) | 0) == 1) c = l[g >> 0] | 0;else c = -1;
        }
      } while (0);u = j;return c | 0;
    }function ud(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0.0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0;switch (b | 0) {case 0:
          {
            j = -149;m = 24;g = 4;break;
          }case 1:
          {
            j = -1074;m = 53;g = 4;break;
          }case 2:
          {
            j = -1074;m = 53;g = 4;break;
          }default:
          d = 0.0;}a: do {
        if ((g | 0) == 4) {
          o = a + 4 | 0;n = a + 100 | 0;do {
            b = k[o >> 2] | 0;if (b >>> 0 < (k[n >> 2] | 0) >>> 0) {
              k[o >> 2] = b + 1;b = l[b >> 0] | 0;
            } else b = id(a) | 0;
          } while ((jd(b) | 0) != 0);b: do {
            switch (b | 0) {case 43:case 45:
                {
                  f = 1 - (((b | 0) == 45 & 1) << 1) | 0;b = k[o >> 2] | 0;if (b >>> 0 < (k[n >> 2] | 0) >>> 0) {
                    k[o >> 2] = b + 1;e = l[b >> 0] | 0;break b;
                  } else {
                    e = id(a) | 0;break b;
                  }
                }default:
                {
                  e = b;f = 1;
                }}
          } while (0);b = 0;do {
            if ((e | 32 | 0) != (i[5067 + b >> 0] | 0)) break;do {
              if (b >>> 0 < 7) {
                e = k[o >> 2] | 0;if (e >>> 0 < (k[n >> 2] | 0) >>> 0) {
                  k[o >> 2] = e + 1;e = l[e >> 0] | 0;break;
                } else {
                  e = id(a) | 0;break;
                }
              }
            } while (0);b = b + 1 | 0;
          } while (b >>> 0 < 8);c: do {
            switch (b | 0) {case 8:
                break;case 3:
                {
                  g = 23;break;
                }default:
                {
                  h = (c | 0) != 0;if (h & b >>> 0 > 3) if ((b | 0) == 8) break c;else {
                    g = 23;break c;
                  }d: do {
                    if (!b) {
                      b = 0;do {
                        if ((e | 32 | 0) != (i[5076 + b >> 0] | 0)) break d;do {
                          if (b >>> 0 < 2) {
                            e = k[o >> 2] | 0;if (e >>> 0 < (k[n >> 2] | 0) >>> 0) {
                              k[o >> 2] = e + 1;e = l[e >> 0] | 0;break;
                            } else {
                              e = id(a) | 0;break;
                            }
                          }
                        } while (0);b = b + 1 | 0;
                      } while (b >>> 0 < 3);
                    }
                  } while (0);switch (b | 0) {case 3:
                      {
                        b = k[o >> 2] | 0;if (b >>> 0 < (k[n >> 2] | 0) >>> 0) {
                          k[o >> 2] = b + 1;b = l[b >> 0] | 0;
                        } else b = id(a) | 0;if ((b | 0) == 40) b = 1;else {
                          if (!(k[n >> 2] | 0)) {
                            d = C;break a;
                          }k[o >> 2] = (k[o >> 2] | 0) + -1;d = C;break a;
                        }while (1) {
                          e = k[o >> 2] | 0;if (e >>> 0 < (k[n >> 2] | 0) >>> 0) {
                            k[o >> 2] = e + 1;e = l[e >> 0] | 0;
                          } else e = id(a) | 0;if (!((e + -48 | 0) >>> 0 < 10 | (e + -65 | 0) >>> 0 < 26) ? !((e | 0) == 95 | (e + -97 | 0) >>> 0 < 26) : 0) break;b = b + 1 | 0;
                        }if ((e | 0) == 41) {
                          d = C;break a;
                        }e = (k[n >> 2] | 0) == 0;if (!e) k[o >> 2] = (k[o >> 2] | 0) + -1;if (!h) {
                          o = xc() | 0;k[o >> 2] = 22;gd(a, 0);d = 0.0;break a;
                        }if (!b) {
                          d = C;break a;
                        }while (1) {
                          b = b + -1 | 0;if (!e) k[o >> 2] = (k[o >> 2] | 0) + -1;if (!b) {
                            d = C;break a;
                          }
                        }
                      }case 0:
                      {
                        if ((e | 0) == 48) {
                          b = k[o >> 2] | 0;if (b >>> 0 < (k[n >> 2] | 0) >>> 0) {
                            k[o >> 2] = b + 1;b = l[b >> 0] | 0;
                          } else b = id(a) | 0;if ((b | 32 | 0) == 120) {
                            d = +vd(a, m, j, f, c);break a;
                          }if (!(k[n >> 2] | 0)) b = 48;else {
                            k[o >> 2] = (k[o >> 2] | 0) + -1;b = 48;
                          }
                        } else b = e;d = +wd(a, b, m, j, f, c);break a;
                      }default:
                      {
                        if (k[n >> 2] | 0) k[o >> 2] = (k[o >> 2] | 0) + -1;o = xc() | 0;k[o >> 2] = 22;gd(a, 0);d = 0.0;break a;
                      }}
                }}
          } while (0);if ((g | 0) == 23) {
            e = (k[n >> 2] | 0) == 0;if (!e) k[o >> 2] = (k[o >> 2] | 0) + -1;if ((c | 0) != 0 & b >>> 0 > 3) do {
              if (!e) k[o >> 2] = (k[o >> 2] | 0) + -1;b = b + -1 | 0;
            } while (b >>> 0 > 3);
          }d = +(f | 0) * D;
        }
      } while (0);return +d;
    }function vd(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0.0,
          g = 0,
          h = 0,
          i = 0.0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0.0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = 0,
          w = 0;w = a + 4 | 0;g = k[w >> 2] | 0;v = a + 100 | 0;if (g >>> 0 < (k[v >> 2] | 0) >>> 0) {
        k[w >> 2] = g + 1;g = l[g >> 0] | 0;h = 0;
      } else {
        g = id(a) | 0;h = 0;
      }a: while (1) {
        switch (g | 0) {case 46:
            {
              n = 8;break a;
            }case 48:
            break;default:
            {
              s = 0;t = 0;p = 1.0;f = 0.0;u = 0;r = h;h = 0;q = 0;m = 0;j = 0;break a;
            }}g = k[w >> 2] | 0;if (g >>> 0 < (k[v >> 2] | 0) >>> 0) {
          k[w >> 2] = g + 1;g = l[g >> 0] | 0;h = 1;continue;
        } else {
          g = id(a) | 0;h = 1;continue;
        }
      }if ((n | 0) == 8) {
        g = k[w >> 2] | 0;if (g >>> 0 < (k[v >> 2] | 0) >>> 0) {
          k[w >> 2] = g + 1;g = l[g >> 0] | 0;
        } else g = id(a) | 0;if ((g | 0) == 48) {
          j = 0;h = 0;do {
            g = k[w >> 2] | 0;if (g >>> 0 < (k[v >> 2] | 0) >>> 0) {
              k[w >> 2] = g + 1;g = l[g >> 0] | 0;
            } else g = id(a) | 0;j = pe(j | 0, h | 0, -1, -1) | 0;h = N;
          } while ((g | 0) == 48);s = 1;t = 0;p = 1.0;f = 0.0;u = 0;r = 1;q = 0;m = 0;
        } else {
          s = 1;t = 0;p = 1.0;f = 0.0;u = 0;r = h;h = 0;q = 0;m = 0;j = 0;
        }
      }while (1) {
        n = g + -48 | 0;o = (g | 0) == 46;if (n >>> 0 >= 10 ? !(o | ((g | 32) + -97 | 0) >>> 0 < 6) : 0) break;if (o) {
          if (!s) {
            s = 1;n = t;i = p;g = u;j = m;h = q;
          } else {
            g = 46;break;
          }
        } else {
          g = (g | 0) > 57 ? (g | 32) + -87 | 0 : n;do {
            if (!((q | 0) < 0 | (q | 0) == 0 & m >>> 0 < 8)) {
              if ((q | 0) < 0 | (q | 0) == 0 & m >>> 0 < 14) {
                p = p * .0625;n = t;i = p;f = f + p * +(g | 0);g = u;break;
              } else {
                g = (t | 0) != 0 | (g | 0) == 0;n = g ? t : 1;i = p;f = g ? f : f + p * .5;g = u;break;
              }
            } else {
              n = t;i = p;g = g + (u << 4) | 0;
            }
          } while (0);m = pe(m | 0, q | 0, 1, 0) | 0;r = 1;q = N;
        }o = k[w >> 2] | 0;if (o >>> 0 < (k[v >> 2] | 0) >>> 0) {
          k[w >> 2] = o + 1;t = n;p = i;u = g;g = l[o >> 0] | 0;continue;
        } else {
          t = n;p = i;u = g;g = id(a) | 0;continue;
        }
      }do {
        if (!r) {
          g = k[v >> 2] | 0;h = (g | 0) != 0;if (h) k[w >> 2] = (k[w >> 2] | 0) + -1;if (e) {
            if (h) k[w >> 2] = (k[w >> 2] | 0) + -1;if (!((s | 0) == 0 | (g | 0) == 0)) k[w >> 2] = (k[w >> 2] | 0) + -1;
          } else gd(a, 0);f = +(d | 0) * 0.0;
        } else {
          n = (s | 0) == 0;o = n ? m : j;n = n ? q : h;if ((q | 0) < 0 | (q | 0) == 0 & m >>> 0 < 8) {
            h = u;j = q;do {
              h = h << 4;m = pe(m | 0, j | 0, 1, 0) | 0;j = N;
            } while ((j | 0) < 0 | (j | 0) == 0 & m >>> 0 < 8);m = h;
          } else m = u;if ((g | 32 | 0) == 112) {
            h = xd(a, e) | 0;g = N;if ((h | 0) == 0 & (g | 0) == -2147483648) {
              if (!e) {
                gd(a, 0);f = 0.0;break;
              }if (!(k[v >> 2] | 0)) {
                h = 0;g = 0;
              } else {
                k[w >> 2] = (k[w >> 2] | 0) + -1;h = 0;g = 0;
              }
            }
          } else if (!(k[v >> 2] | 0)) {
            h = 0;g = 0;
          } else {
            k[w >> 2] = (k[w >> 2] | 0) + -1;h = 0;g = 0;
          }j = se(o | 0, n | 0, 2) | 0;j = pe(j | 0, N | 0, -32, -1) | 0;j = pe(j | 0, N | 0, h | 0, g | 0) | 0;g = N;if (!m) {
            f = +(d | 0) * 0.0;break;
          }w = 0 - c | 0;e = ((w | 0) < 0) << 31 >> 31;if ((g | 0) > (e | 0) | (g | 0) == (e | 0) & j >>> 0 > w >>> 0) {
            b = xc() | 0;k[b >> 2] = 34;f = +(d | 0) * 1797693134862315708145274.0e284 * 1797693134862315708145274.0e284;break;
          }w = c + -106 | 0;e = ((w | 0) < 0) << 31 >> 31;if ((g | 0) < (e | 0) | (g | 0) == (e | 0) & j >>> 0 < w >>> 0) {
            b = xc() | 0;k[b >> 2] = 34;f = +(d | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;break;
          }if ((m | 0) > -1) {
            h = m;do {
              w = !(f >= .5);h = h << 1 | (w ^ 1) & 1;f = f + (w ? f : f + -1.0);j = pe(j | 0, g | 0, -1, -1) | 0;g = N;
            } while ((h | 0) > -1);p = f;m = h;
          } else p = f;w = ((b | 0) < 0) << 31 >> 31;c = oe(32, 0, c | 0, ((c | 0) < 0) << 31 >> 31 | 0) | 0;g = pe(c | 0, N | 0, j | 0, g | 0) | 0;c = N;if ((w | 0) > (c | 0) | (w | 0) == (c | 0) & b >>> 0 > g >>> 0) {
            if ((g | 0) > 0) n = 59;else {
              h = 0;g = 84;n = 61;
            }
          } else {
            g = b;n = 59;
          }if ((n | 0) == 59) if ((g | 0) < 53) {
            h = g;g = 84 - g | 0;n = 61;
          } else {
            i = 0.0;f = +(d | 0);
          }if ((n | 0) == 61) {
            f = +(d | 0);i = +zd(+yd(1.0, g), f);g = h;
          }d = (m & 1 | 0) == 0 & (p != 0.0 & (g | 0) < 32);f = f * (d ? 0.0 : p) + (i + f * +(((d & 1) + m | 0) >>> 0)) - i;if (!(f != 0.0)) {
            d = xc() | 0;k[d >> 2] = 34;
          }f = +Bd(f, j);
        }
      } while (0);return +f;
    }function wd(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0.0,
          h = 0.0,
          i = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0.0,
          r = 0.0,
          s = 0.0,
          t = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0,
          H = 0,
          I = 0.0;H = u;u = u + 512 | 0;E = H;F = d + c | 0;G = 0 - F | 0;B = a + 4 | 0;C = a + 100 | 0;i = 0;a: while (1) {
        switch (b | 0) {case 46:
            {
              z = 6;break a;
            }case 48:
            break;default:
            {
              v = 0;o = i;p = 0;n = 0;break a;
            }}b = k[B >> 2] | 0;if (b >>> 0 < (k[C >> 2] | 0) >>> 0) {
          k[B >> 2] = b + 1;b = l[b >> 0] | 0;i = 1;continue;
        } else {
          b = id(a) | 0;i = 1;continue;
        }
      }if ((z | 0) == 6) {
        b = k[B >> 2] | 0;if (b >>> 0 < (k[C >> 2] | 0) >>> 0) {
          k[B >> 2] = b + 1;b = l[b >> 0] | 0;
        } else b = id(a) | 0;if ((b | 0) == 48) {
          i = 0;b = 0;while (1) {
            i = pe(i | 0, b | 0, -1, -1) | 0;n = N;b = k[B >> 2] | 0;if (b >>> 0 < (k[C >> 2] | 0) >>> 0) {
              k[B >> 2] = b + 1;b = l[b >> 0] | 0;
            } else b = id(a) | 0;if ((b | 0) == 48) b = n;else {
              v = 1;o = 1;p = i;break;
            }
          }
        } else {
          v = 1;o = i;p = 0;n = 0;
        }
      }k[E >> 2] = 0;m = b + -48 | 0;j = (b | 0) == 46;b: do {
        if (j | m >>> 0 < 10) {
          A = E + 496 | 0;w = 0;i = 0;t = 0;x = v;y = o;z = m;o = 0;m = 0;c: while (1) {
            do {
              if (j) {
                if (!x) {
                  x = 1;p = o;n = m;
                } else break c;
              } else {
                o = pe(o | 0, m | 0, 1, 0) | 0;m = N;v = (b | 0) != 48;if ((i | 0) >= 125) {
                  if (!v) break;k[A >> 2] = k[A >> 2] | 1;break;
                }j = E + (i << 2) | 0;if (!w) b = z;else b = b + -48 + ((k[j >> 2] | 0) * 10 | 0) | 0;k[j >> 2] = b;w = w + 1 | 0;y = (w | 0) == 9;w = y ? 0 : w;i = (y & 1) + i | 0;t = v ? o : t;y = 1;
              }
            } while (0);b = k[B >> 2] | 0;if (b >>> 0 < (k[C >> 2] | 0) >>> 0) {
              k[B >> 2] = b + 1;b = l[b >> 0] | 0;
            } else b = id(a) | 0;z = b + -48 | 0;j = (b | 0) == 46;if (!(j | z >>> 0 < 10)) {
              v = x;j = y;z = 29;break b;
            }
          }b = w;j = (y | 0) != 0;z = 37;
        } else {
          w = 0;i = 0;t = 0;j = o;o = 0;m = 0;z = 29;
        }
      } while (0);do {
        if ((z | 0) == 29) {
          A = (v | 0) == 0;p = A ? o : p;n = A ? m : n;j = (j | 0) != 0;if (!(j & (b | 32 | 0) == 101)) if ((b | 0) > -1) {
            b = w;z = 37;break;
          } else {
            b = w;z = 39;break;
          }j = xd(a, f) | 0;b = N;if ((j | 0) == 0 & (b | 0) == -2147483648) {
            if (!f) {
              gd(a, 0);g = 0.0;break;
            }if (!(k[C >> 2] | 0)) {
              j = 0;b = 0;
            } else {
              k[B >> 2] = (k[B >> 2] | 0) + -1;j = 0;b = 0;
            }
          }y = pe(j | 0, b | 0, p | 0, n | 0) | 0;b = w;n = N;z = 41;
        }
      } while (0);if ((z | 0) == 37) if (k[C >> 2] | 0) {
        k[B >> 2] = (k[B >> 2] | 0) + -1;if (j) {
          y = p;z = 41;
        } else z = 40;
      } else z = 39;if ((z | 0) == 39) if (j) {
        y = p;z = 41;
      } else z = 40;do {
        if ((z | 0) == 40) {
          G = xc() | 0;k[G >> 2] = 22;gd(a, 0);g = 0.0;
        } else if ((z | 0) == 41) {
          j = k[E >> 2] | 0;if (!j) {
            g = +(e | 0) * 0.0;break;
          }if (((m | 0) < 0 | (m | 0) == 0 & o >>> 0 < 10) & ((y | 0) == (o | 0) & (n | 0) == (m | 0)) ? (c | 0) > 30 | (j >>> c | 0) == 0 : 0) {
            g = +(e | 0) * +(j >>> 0);break;
          }a = (d | 0) / -2 | 0;C = ((a | 0) < 0) << 31 >> 31;if ((n | 0) > (C | 0) | (n | 0) == (C | 0) & y >>> 0 > a >>> 0) {
            G = xc() | 0;k[G >> 2] = 34;g = +(e | 0) * 1797693134862315708145274.0e284 * 1797693134862315708145274.0e284;break;
          }a = d + -106 | 0;C = ((a | 0) < 0) << 31 >> 31;if ((n | 0) < (C | 0) | (n | 0) == (C | 0) & y >>> 0 < a >>> 0) {
            G = xc() | 0;k[G >> 2] = 34;g = +(e | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;break;
          }if (b) {
            if ((b | 0) < 9) {
              m = E + (i << 2) | 0;j = k[m >> 2] | 0;do {
                j = j * 10 | 0;b = b + 1 | 0;
              } while ((b | 0) != 9);k[m >> 2] = j;
            }i = i + 1 | 0;
          }if ((t | 0) < 9 ? (t | 0) <= (y | 0) & (y | 0) < 18 : 0) {
            b = k[E >> 2] | 0;if ((y | 0) == 9) {
              g = +(e | 0) * +(b >>> 0);break;
            }if ((y | 0) < 9) {
              g = +(e | 0) * +(b >>> 0) / +(k[756 + (8 - y << 2) >> 2] | 0);break;
            }a = c + 27 + (aa(y, -3) | 0) | 0;if ((a | 0) > 30 | (b >>> a | 0) == 0) {
              g = +(e | 0) * +(b >>> 0) * +(k[756 + (y + -10 << 2) >> 2] | 0);break;
            }
          }b = (y | 0) % 9 | 0;if (!b) {
            b = 0;m = 0;
          } else {
            t = (y | 0) > -1 ? b : b + 9 | 0;o = k[756 + (8 - t << 2) >> 2] | 0;if (i) {
              p = 1e9 / (o | 0) | 0;m = 0;n = 0;j = y;b = 0;do {
                B = E + (b << 2) | 0;C = k[B >> 2] | 0;a = ((C >>> 0) / (o >>> 0) | 0) + m | 0;k[B >> 2] = a;m = aa(p, (C >>> 0) % (o >>> 0) | 0) | 0;a = (b | 0) == (n | 0) & (a | 0) == 0;j = a ? j + -9 | 0 : j;n = a ? n + 1 & 127 : n;b = b + 1 | 0;
              } while ((b | 0) != (i | 0));if (!m) m = n;else {
                k[E + (i << 2) >> 2] = m;m = n;i = i + 1 | 0;
              }
            } else {
              m = 0;i = 0;j = y;
            }b = 0;y = 9 - t + j | 0;
          }d: while (1) {
            t = (y | 0) < 18;v = (y | 0) == 18;w = E + (m << 2) | 0;while (1) {
              if (!t) {
                if (!v) {
                  j = y;break d;
                }if ((k[w >> 2] | 0) >>> 0 >= 9007199) {
                  j = 18;break d;
                }
              }j = 0;x = i;i = i + 127 | 0;while (1) {
                n = i & 127;o = E + (n << 2) | 0;i = se(k[o >> 2] | 0, 0, 29) | 0;i = pe(i | 0, N | 0, j | 0, 0) | 0;j = N;if (j >>> 0 > 0 | (j | 0) == 0 & i >>> 0 > 1e9) {
                  p = ve(i | 0, j | 0, 1e9, 0) | 0;i = ze(i | 0, j | 0, 1e9, 0) | 0;
                } else p = 0;k[o >> 2] = i;a = (n | 0) == (m | 0);x = (i | 0) == 0 & (((n | 0) != (x + 127 & 127 | 0) | a) ^ 1) ? n : x;if (a) break;else {
                  j = p;i = n + -1 | 0;
                }
              }b = b + -29 | 0;if (p | 0) break;else i = x;
            }m = m + 127 & 127;i = x + 127 & 127;j = E + ((x + 126 & 127) << 2) | 0;if ((m | 0) == (x | 0)) k[j >> 2] = k[j >> 2] | k[E + (i << 2) >> 2];else i = x;k[E + (m << 2) >> 2] = p;y = y + 9 | 0;
          }e: while (1) {
            w = i + 1 & 127;x = E + ((i + 127 & 127) << 2) | 0;while (1) {
              p = (j | 0) == 18;v = (j | 0) > 27 ? 9 : 1;y = m;while (1) {
                m = 0;while (1) {
                  n = m + y & 127;if ((n | 0) == (i | 0)) {
                    D = 2;z = 88;break;
                  }n = k[E + (n << 2) >> 2] | 0;o = k[788 + (m << 2) >> 2] | 0;if (n >>> 0 < o >>> 0) {
                    D = 2;z = 88;break;
                  }if (n >>> 0 > o >>> 0) break;m = m + 1 | 0;if ((m | 0) >= 2) {
                    D = m;z = 88;break;
                  }
                }if ((z | 0) == 88 ? (z = 0, p & (D | 0) == 2) : 0) {
                  g = 0.0;n = 0;break e;
                }b = v + b | 0;if ((y | 0) == (i | 0)) y = i;else break;
              }p = (1 << v) + -1 | 0;t = 1e9 >>> v;o = 0;m = y;n = y;do {
                B = E + (n << 2) | 0;C = k[B >> 2] | 0;a = (C >>> v) + o | 0;k[B >> 2] = a;o = aa(C & p, t) | 0;a = (n | 0) == (m | 0) & (a | 0) == 0;j = a ? j + -9 | 0 : j;m = a ? m + 1 & 127 : m;n = n + 1 & 127;
              } while ((n | 0) != (i | 0));if (!o) continue;if ((w | 0) != (m | 0)) break;k[x >> 2] = k[x >> 2] | 1;
            }k[E + (i << 2) >> 2] = o;i = w;
          }do {
            m = n + y & 127;j = i + 1 & 127;if ((m | 0) == (i | 0)) {
              k[E + (j + -1 << 2) >> 2] = 0;i = j;
            }g = g * 1.0e9 + +((k[E + (m << 2) >> 2] | 0) >>> 0);n = n + 1 | 0;
          } while ((n | 0) != 2);s = +(e | 0);h = s * g;n = b + 53 | 0;o = n - d | 0;p = (o | 0) < (c | 0);m = p ? (o | 0) > 0 ? o : 0 : c;if ((m | 0) < 53) {
            I = +zd(+yd(1.0, 105 - m | 0), h);q = +Ad(h, +yd(1.0, 53 - m | 0));r = I;g = q;q = I + (h - q);
          } else {
            r = 0.0;g = 0.0;q = h;
          }j = y + 2 & 127;if ((j | 0) != (i | 0)) {
            j = k[E + (j << 2) >> 2] | 0;do {
              if (j >>> 0 >= 5e8) {
                if ((j | 0) != 5e8) {
                  g = s * .75 + g;break;
                }if ((y + 3 & 127 | 0) == (i | 0)) {
                  g = s * .5 + g;break;
                } else {
                  g = s * .75 + g;break;
                }
              } else {
                if ((j | 0) == 0 ? (y + 3 & 127 | 0) == (i | 0) : 0) break;g = s * .25 + g;
              }
            } while (0);if ((53 - m | 0) > 1 ? !(+Ad(g, 1.0) != 0.0) : 0) h = g + 1.0;else h = g;
          } else h = g;g = q + h - r;do {
            if ((n & 2147483647 | 0) > (-2 - F | 0)) {
              F = !(+P(+g) >= 9007199254740992.0);b = ((F ^ 1) & 1) + b | 0;g = F ? g : g * .5;if ((b + 50 | 0) <= (G | 0) ? !(h != 0.0 & (p & ((m | 0) != (o | 0) | F))) : 0) break;G = xc() | 0;k[G >> 2] = 34;
            }
          } while (0);g = +Bd(g, b);
        }
      } while (0);u = H;return +g;
    }function xd(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;i = a + 4 | 0;c = k[i >> 2] | 0;h = a + 100 | 0;if (c >>> 0 < (k[h >> 2] | 0) >>> 0) {
        k[i >> 2] = c + 1;c = l[c >> 0] | 0;
      } else c = id(a) | 0;switch (c | 0) {case 43:case 45:
          {
            d = (c | 0) == 45 & 1;c = k[i >> 2] | 0;if (c >>> 0 < (k[h >> 2] | 0) >>> 0) {
              k[i >> 2] = c + 1;c = l[c >> 0] | 0;
            } else c = id(a) | 0;if ((b | 0) != 0 & (c + -48 | 0) >>> 0 > 9 ? (k[h >> 2] | 0) != 0 : 0) k[i >> 2] = (k[i >> 2] | 0) + -1;break;
          }default:
          d = 0;}if ((c + -48 | 0) >>> 0 > 9) {
        if (!(k[h >> 2] | 0)) {
          d = -2147483648;c = 0;
        } else {
          k[i >> 2] = (k[i >> 2] | 0) + -1;d = -2147483648;c = 0;
        }
      } else {
        e = 0;do {
          e = c + -48 + (e * 10 | 0) | 0;c = k[i >> 2] | 0;if (c >>> 0 < (k[h >> 2] | 0) >>> 0) {
            k[i >> 2] = c + 1;c = l[c >> 0] | 0;
          } else c = id(a) | 0;
        } while ((c + -48 | 0) >>> 0 < 10 & (e | 0) < 214748364);b = ((e | 0) < 0) << 31 >> 31;if ((c + -48 | 0) >>> 0 < 10) {
          do {
            b = xe(e | 0, b | 0, 10, 0) | 0;e = N;c = pe(c | 0, ((c | 0) < 0) << 31 >> 31 | 0, -48, -1) | 0;e = pe(c | 0, N | 0, b | 0, e | 0) | 0;b = N;c = k[i >> 2] | 0;if (c >>> 0 < (k[h >> 2] | 0) >>> 0) {
              k[i >> 2] = c + 1;c = l[c >> 0] | 0;
            } else c = id(a) | 0;
          } while ((c + -48 | 0) >>> 0 < 10 & ((b | 0) < 21474836 | (b | 0) == 21474836 & e >>> 0 < 2061584302));f = c;g = e;
        } else {
          f = c;g = e;
        }c = k[h >> 2] | 0;if ((f + -48 | 0) >>> 0 < 10) do {
          e = k[i >> 2] | 0;if (e >>> 0 < c >>> 0) {
            k[i >> 2] = e + 1;e = l[e >> 0] | 0;
          } else {
            e = id(a) | 0;c = k[h >> 2] | 0;
          }
        } while ((e + -48 | 0) >>> 0 < 10);if (c | 0) k[i >> 2] = (k[i >> 2] | 0) + -1;i = (d | 0) != 0;c = oe(0, 0, g | 0, b | 0) | 0;d = i ? N : b;c = i ? c : g;
      }N = d;return c | 0;
    }function yd(a, b) {
      a = +a;b = b | 0;var c = 0,
          d = 0;if ((b | 0) <= 1023) {
        if ((b | 0) < -1022) {
          a = a * 2.2250738585072014e-308;c = b + 1022 | 0;d = (c | 0) < -1022;b = b + 2044 | 0;a = d ? a * 2.2250738585072014e-308 : a;b = d ? (b | 0) > -1022 ? b : -1022 : c;
        }
      } else {
        a = a * 8988465674311579538646525.0e283;d = b + -1023 | 0;c = (d | 0) > 1023;b = b + -2046 | 0;a = c ? a * 8988465674311579538646525.0e283 : a;b = c ? (b | 0) < 1023 ? b : 1023 : d;
      }c = se(b + 1023 | 0, 0, 52) | 0;d = N;k[s >> 2] = c;k[s + 4 >> 2] = d;return +(a * +p[s >> 3]);
    }function zd(a, b) {
      a = +a;b = +b;return + +Ed(a, b);
    }function Ad(a, b) {
      a = +a;b = +b;return + +Cd(a, b);
    }function Bd(a, b) {
      a = +a;b = b | 0;return + +yd(a, b);
    }function Cd(a, b) {
      a = +a;b = +b;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0;p[s >> 3] = a;g = k[s >> 2] | 0;i = k[s + 4 >> 2] | 0;p[s >> 3] = b;l = k[s >> 2] | 0;m = k[s + 4 >> 2] | 0;d = re(g | 0, i | 0, 52) | 0;d = d & 2047;j = re(l | 0, m | 0, 52) | 0;j = j & 2047;n = i & -2147483648;f = se(l | 0, m | 0, 1) | 0;h = N;a: do {
        if (!((f | 0) == 0 & (h | 0) == 0) ? (e = Dd(b) | 0, c = N & 2147483647, !((d | 0) == 2047 | (c >>> 0 > 2146435072 | (c | 0) == 2146435072 & e >>> 0 > 0))) : 0) {
          c = se(g | 0, i | 0, 1) | 0;e = N;if (!(e >>> 0 > h >>> 0 | (e | 0) == (h | 0) & c >>> 0 > f >>> 0)) return +((c | 0) == (f | 0) & (e | 0) == (h | 0) ? a * 0.0 : a);if (!d) {
            c = se(g | 0, i | 0, 12) | 0;e = N;if ((e | 0) > -1 | (e | 0) == -1 & c >>> 0 > 4294967295) {
              d = 0;do {
                d = d + -1 | 0;c = se(c | 0, e | 0, 1) | 0;e = N;
              } while ((e | 0) > -1 | (e | 0) == -1 & c >>> 0 > 4294967295);
            } else d = 0;g = se(g | 0, i | 0, 1 - d | 0) | 0;f = N;
          } else f = i & 1048575 | 1048576;if (!j) {
            e = se(l | 0, m | 0, 12) | 0;h = N;if ((h | 0) > -1 | (h | 0) == -1 & e >>> 0 > 4294967295) {
              c = 0;do {
                c = c + -1 | 0;e = se(e | 0, h | 0, 1) | 0;h = N;
              } while ((h | 0) > -1 | (h | 0) == -1 & e >>> 0 > 4294967295);
            } else c = 0;l = se(l | 0, m | 0, 1 - c | 0) | 0;j = c;i = N;
          } else i = m & 1048575 | 1048576;e = oe(g | 0, f | 0, l | 0, i | 0) | 0;c = N;h = (c | 0) > -1 | (c | 0) == -1 & e >>> 0 > 4294967295;b: do {
            if ((d | 0) > (j | 0)) {
              while (1) {
                if (h) {
                  if ((e | 0) == 0 & (c | 0) == 0) break;
                } else {
                  e = g;c = f;
                }g = se(e | 0, c | 0, 1) | 0;f = N;d = d + -1 | 0;e = oe(g | 0, f | 0, l | 0, i | 0) | 0;c = N;h = (c | 0) > -1 | (c | 0) == -1 & e >>> 0 > 4294967295;if ((d | 0) <= (j | 0)) break b;
              }b = a * 0.0;break a;
            }
          } while (0);if (h) {
            if ((e | 0) == 0 & (c | 0) == 0) {
              b = a * 0.0;break;
            }
          } else {
            c = f;e = g;
          }if (c >>> 0 < 1048576 | (c | 0) == 1048576 & e >>> 0 < 0) do {
            e = se(e | 0, c | 0, 1) | 0;c = N;d = d + -1 | 0;
          } while (c >>> 0 < 1048576 | (c | 0) == 1048576 & e >>> 0 < 0);if ((d | 0) > 0) {
            m = pe(e | 0, c | 0, 0, -1048576) | 0;c = N;d = se(d | 0, 0, 52) | 0;c = c | N;d = m | d;
          } else {
            d = re(e | 0, c | 0, 1 - d | 0) | 0;c = N;
          }k[s >> 2] = d;k[s + 4 >> 2] = c | n;b = +p[s >> 3];
        } else o = 3;
      } while (0);if ((o | 0) == 3) {
        b = a * b;b = b / b;
      }return +b;
    }function Dd(a) {
      a = +a;var b = 0;p[s >> 3] = a;b = k[s >> 2] | 0;N = k[s + 4 >> 2] | 0;return b | 0;
    }function Ed(a, b) {
      a = +a;b = +b;var c = 0,
          d = 0;p[s >> 3] = a;d = k[s >> 2] | 0;c = k[s + 4 >> 2] | 0;p[s >> 3] = b;c = k[s + 4 >> 2] & -2147483648 | c & 2147483647;k[s >> 2] = d;k[s + 4 >> 2] = c;return + +p[s >> 3];
    }function Fd(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0;d = u;u = u + 16 | 0;e = d;k[e >> 2] = c;c = Gc(a, b, e) | 0;u = d;return c | 0;
    }function Gd(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0;h = a & 255;c = a & 255;if ((k[b + 76 >> 2] | 0) >= 0 ? (Ic(b) | 0) != 0 : 0) {
        if ((c | 0) != (i[b + 75 >> 0] | 0) ? (f = b + 20 | 0, g = k[f >> 2] | 0, g >>> 0 < (k[b + 16 >> 2] | 0) >>> 0) : 0) {
          k[f >> 2] = g + 1;i[g >> 0] = h;
        } else c = td(b, a) | 0;Jc(b);
      } else j = 3;do {
        if ((j | 0) == 3) {
          if ((c | 0) != (i[b + 75 >> 0] | 0) ? (d = b + 20 | 0, e = k[d >> 2] | 0, e >>> 0 < (k[b + 16 >> 2] | 0) >>> 0) : 0) {
            k[d >> 2] = e + 1;i[e >> 0] = h;break;
          }c = td(b, a) | 0;
        }
      } while (0);return c | 0;
    }function Hd(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0;d = k[156] | 0;if ((k[d + 76 >> 2] | 0) > -1) e = Ic(d) | 0;else e = 0;do {
        if ((rd(a, d) | 0) < 0) a = 1;else {
          if ((i[d + 75 >> 0] | 0) != 10 ? (b = d + 20 | 0, c = k[b >> 2] | 0, c >>> 0 < (k[d + 16 >> 2] | 0) >>> 0) : 0) {
            k[b >> 2] = c + 1;i[c >> 0] = 10;a = 0;break;
          }a = (td(d, 10) | 0) < 0;
        }
      } while (0);if (e | 0) Jc(d);return a << 31 >> 31 | 0;
    }function Id(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0;c = u;u = u + 16 | 0;d = c;k[d >> 2] = b;b = Gc(k[156] | 0, a, d) | 0;u = c;return b | 0;
    }function Jd(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0.0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;h = u;u = u + 128 | 0;g = h;e = g;f = e + 124 | 0;do {
        k[e >> 2] = 0;e = e + 4 | 0;
      } while ((e | 0) < (f | 0));e = g + 4 | 0;k[e >> 2] = a;f = g + 8 | 0;k[f >> 2] = -1;k[g + 44 >> 2] = a;k[g + 76 >> 2] = -1;gd(g, 0);d = +ud(g, c, 1);c = (k[e >> 2] | 0) - (k[f >> 2] | 0) + (k[g + 108 >> 2] | 0) | 0;if (b | 0) k[b >> 2] = c | 0 ? a + c | 0 : a;u = h;return +d;
    }function Kd(a, b) {
      a = a | 0;b = b | 0;return + +Jd(a, b, 1);
    }
    function Ld(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0,
          H = 0,
          I = 0,
          J = 0,
          K = 0;K = u;u = u + 16 | 0;n = K;do {
        if (a >>> 0 < 245) {
          o = a >>> 0 < 11 ? 16 : a + 11 & -8;a = o >>> 3;s = k[1452] | 0;c = s >>> a;if (c & 3 | 0) {
            a = (c & 1 ^ 1) + a | 0;c = 5848 + (a << 1 << 2) | 0;d = c + 8 | 0;e = k[d >> 2] | 0;f = e + 8 | 0;g = k[f >> 2] | 0;do {
              if ((c | 0) != (g | 0)) {
                if (g >>> 0 < (k[1456] | 0) >>> 0) ya();b = g + 12 | 0;if ((k[b >> 2] | 0) == (e | 0)) {
                  k[b >> 2] = c;k[d >> 2] = g;break;
                } else ya();
              } else k[1452] = s & ~(1 << a);
            } while (0);J = a << 3;k[e + 4 >> 2] = J | 3;J = e + J + 4 | 0;k[J >> 2] = k[J >> 2] | 1;J = f;u = K;return J | 0;
          }r = k[1454] | 0;if (o >>> 0 > r >>> 0) {
            if (c | 0) {
              h = 2 << a;a = c << a & (h | 0 - h);a = (a & 0 - a) + -1 | 0;h = a >>> 12 & 16;a = a >>> h;d = a >>> 5 & 8;a = a >>> d;f = a >>> 2 & 4;a = a >>> f;c = a >>> 1 & 2;a = a >>> c;b = a >>> 1 & 1;b = (d | h | f | c | b) + (a >>> b) | 0;a = 5848 + (b << 1 << 2) | 0;c = a + 8 | 0;f = k[c >> 2] | 0;h = f + 8 | 0;d = k[h >> 2] | 0;do {
                if ((a | 0) != (d | 0)) {
                  if (d >>> 0 < (k[1456] | 0) >>> 0) ya();e = d + 12 | 0;if ((k[e >> 2] | 0) == (f | 0)) {
                    k[e >> 2] = a;k[c >> 2] = d;i = s;break;
                  } else ya();
                } else {
                  i = s & ~(1 << b);k[1452] = i;
                }
              } while (0);g = (b << 3) - o | 0;k[f + 4 >> 2] = o | 3;d = f + o | 0;k[d + 4 >> 2] = g | 1;k[d + g >> 2] = g;if (r | 0) {
                e = k[1457] | 0;b = r >>> 3;c = 5848 + (b << 1 << 2) | 0;b = 1 << b;if (i & b) {
                  b = c + 8 | 0;a = k[b >> 2] | 0;if (a >>> 0 < (k[1456] | 0) >>> 0) ya();else {
                    j = a;l = b;
                  }
                } else {
                  k[1452] = i | b;j = c;l = c + 8 | 0;
                }k[l >> 2] = e;k[j + 12 >> 2] = e;k[e + 8 >> 2] = j;k[e + 12 >> 2] = c;
              }k[1454] = g;k[1457] = d;J = h;u = K;return J | 0;
            }j = k[1453] | 0;if (j) {
              a = (j & 0 - j) + -1 | 0;I = a >>> 12 & 16;a = a >>> I;H = a >>> 5 & 8;a = a >>> H;J = a >>> 2 & 4;a = a >>> J;c = a >>> 1 & 2;a = a >>> c;b = a >>> 1 & 1;b = k[6112 + ((H | I | J | c | b) + (a >>> b) << 2) >> 2] | 0;a = (k[b + 4 >> 2] & -8) - o | 0;c = k[b + 16 + (((k[b + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;if (!c) {
                i = b;g = a;
              } else {
                do {
                  I = (k[c + 4 >> 2] & -8) - o | 0;J = I >>> 0 < a >>> 0;a = J ? I : a;b = J ? c : b;c = k[c + 16 + (((k[c + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;
                } while ((c | 0) != 0);i = b;g = a;
              }e = k[1456] | 0;if (i >>> 0 < e >>> 0) ya();h = i + o | 0;if (i >>> 0 >= h >>> 0) ya();f = k[i + 24 >> 2] | 0;c = k[i + 12 >> 2] | 0;do {
                if ((c | 0) == (i | 0)) {
                  a = i + 20 | 0;b = k[a >> 2] | 0;if (!b) {
                    a = i + 16 | 0;b = k[a >> 2] | 0;if (!b) {
                      m = 0;break;
                    }
                  }while (1) {
                    c = b + 20 | 0;d = k[c >> 2] | 0;if (d | 0) {
                      b = d;a = c;continue;
                    }c = b + 16 | 0;d = k[c >> 2] | 0;if (!d) break;else {
                      b = d;a = c;
                    }
                  }if (a >>> 0 < e >>> 0) ya();else {
                    k[a >> 2] = 0;m = b;break;
                  }
                } else {
                  d = k[i + 8 >> 2] | 0;if (d >>> 0 < e >>> 0) ya();b = d + 12 | 0;if ((k[b >> 2] | 0) != (i | 0)) ya();a = c + 8 | 0;if ((k[a >> 2] | 0) == (i | 0)) {
                    k[b >> 2] = c;k[a >> 2] = d;m = c;break;
                  } else ya();
                }
              } while (0);a: do {
                if (f | 0) {
                  b = k[i + 28 >> 2] | 0;a = 6112 + (b << 2) | 0;do {
                    if ((i | 0) == (k[a >> 2] | 0)) {
                      k[a >> 2] = m;if (!m) {
                        k[1453] = j & ~(1 << b);break a;
                      }
                    } else if (f >>> 0 >= (k[1456] | 0) >>> 0) {
                      k[f + 16 + (((k[f + 16 >> 2] | 0) != (i | 0) & 1) << 2) >> 2] = m;if (!m) break a;else break;
                    } else ya();
                  } while (0);a = k[1456] | 0;if (m >>> 0 < a >>> 0) ya();k[m + 24 >> 2] = f;b = k[i + 16 >> 2] | 0;do {
                    if (b | 0) if (b >>> 0 < a >>> 0) ya();else {
                      k[m + 16 >> 2] = b;k[b + 24 >> 2] = m;break;
                    }
                  } while (0);b = k[i + 20 >> 2] | 0;if (b | 0) if (b >>> 0 < (k[1456] | 0) >>> 0) ya();else {
                    k[m + 20 >> 2] = b;k[b + 24 >> 2] = m;break;
                  }
                }
              } while (0);if (g >>> 0 < 16) {
                J = g + o | 0;k[i + 4 >> 2] = J | 3;J = i + J + 4 | 0;k[J >> 2] = k[J >> 2] | 1;
              } else {
                k[i + 4 >> 2] = o | 3;k[h + 4 >> 2] = g | 1;k[h + g >> 2] = g;if (r | 0) {
                  d = k[1457] | 0;b = r >>> 3;c = 5848 + (b << 1 << 2) | 0;b = 1 << b;if (s & b) {
                    b = c + 8 | 0;a = k[b >> 2] | 0;if (a >>> 0 < (k[1456] | 0) >>> 0) ya();else {
                      p = a;q = b;
                    }
                  } else {
                    k[1452] = s | b;p = c;q = c + 8 | 0;
                  }k[q >> 2] = d;k[p + 12 >> 2] = d;k[d + 8 >> 2] = p;k[d + 12 >> 2] = c;
                }k[1454] = g;k[1457] = h;
              }J = i + 8 | 0;u = K;return J | 0;
            }
          }
        } else if (a >>> 0 <= 4294967231) {
          a = a + 11 | 0;o = a & -8;j = k[1453] | 0;if (j) {
            d = 0 - o | 0;a = a >>> 8;if (a) {
              if (o >>> 0 > 16777215) h = 31;else {
                q = (a + 1048320 | 0) >>> 16 & 8;C = a << q;p = (C + 520192 | 0) >>> 16 & 4;C = C << p;h = (C + 245760 | 0) >>> 16 & 2;h = 14 - (p | q | h) + (C << h >>> 15) | 0;h = o >>> (h + 7 | 0) & 1 | h << 1;
              }
            } else h = 0;c = k[6112 + (h << 2) >> 2] | 0;b: do {
              if (!c) {
                c = 0;a = 0;C = 81;
              } else {
                a = 0;g = o << ((h | 0) == 31 ? 0 : 25 - (h >>> 1) | 0);f = 0;while (1) {
                  e = (k[c + 4 >> 2] & -8) - o | 0;if (e >>> 0 < d >>> 0) if (!e) {
                    a = c;d = 0;e = c;C = 85;break b;
                  } else {
                    a = c;d = e;
                  }e = k[c + 20 >> 2] | 0;c = k[c + 16 + (g >>> 31 << 2) >> 2] | 0;f = (e | 0) == 0 | (e | 0) == (c | 0) ? f : e;e = (c | 0) == 0;if (e) {
                    c = f;C = 81;break;
                  } else g = g << ((e ^ 1) & 1);
                }
              }
            } while (0);if ((C | 0) == 81) {
              if ((c | 0) == 0 & (a | 0) == 0) {
                a = 2 << h;a = j & (a | 0 - a);if (!a) break;q = (a & 0 - a) + -1 | 0;l = q >>> 12 & 16;q = q >>> l;i = q >>> 5 & 8;q = q >>> i;m = q >>> 2 & 4;q = q >>> m;p = q >>> 1 & 2;q = q >>> p;c = q >>> 1 & 1;a = 0;c = k[6112 + ((i | l | m | p | c) + (q >>> c) << 2) >> 2] | 0;
              }if (!c) {
                i = a;h = d;
              } else {
                e = c;C = 85;
              }
            }if ((C | 0) == 85) while (1) {
              C = 0;c = (k[e + 4 >> 2] & -8) - o | 0;q = c >>> 0 < d >>> 0;c = q ? c : d;a = q ? e : a;e = k[e + 16 + (((k[e + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;if (!e) {
                i = a;h = c;break;
              } else {
                d = c;C = 85;
              }
            }if ((i | 0) != 0 ? h >>> 0 < ((k[1454] | 0) - o | 0) >>> 0 : 0) {
              e = k[1456] | 0;if (i >>> 0 < e >>> 0) ya();g = i + o | 0;if (i >>> 0 >= g >>> 0) ya();f = k[i + 24 >> 2] | 0;c = k[i + 12 >> 2] | 0;do {
                if ((c | 0) == (i | 0)) {
                  a = i + 20 | 0;b = k[a >> 2] | 0;if (!b) {
                    a = i + 16 | 0;b = k[a >> 2] | 0;if (!b) {
                      r = 0;break;
                    }
                  }while (1) {
                    c = b + 20 | 0;d = k[c >> 2] | 0;if (d | 0) {
                      b = d;a = c;continue;
                    }c = b + 16 | 0;d = k[c >> 2] | 0;if (!d) break;else {
                      b = d;a = c;
                    }
                  }if (a >>> 0 < e >>> 0) ya();else {
                    k[a >> 2] = 0;r = b;break;
                  }
                } else {
                  d = k[i + 8 >> 2] | 0;if (d >>> 0 < e >>> 0) ya();b = d + 12 | 0;if ((k[b >> 2] | 0) != (i | 0)) ya();a = c + 8 | 0;if ((k[a >> 2] | 0) == (i | 0)) {
                    k[b >> 2] = c;k[a >> 2] = d;r = c;break;
                  } else ya();
                }
              } while (0);c: do {
                if (f) {
                  b = k[i + 28 >> 2] | 0;a = 6112 + (b << 2) | 0;do {
                    if ((i | 0) == (k[a >> 2] | 0)) {
                      k[a >> 2] = r;if (!r) {
                        s = j & ~(1 << b);k[1453] = s;break c;
                      }
                    } else if (f >>> 0 >= (k[1456] | 0) >>> 0) {
                      k[f + 16 + (((k[f + 16 >> 2] | 0) != (i | 0) & 1) << 2) >> 2] = r;if (!r) {
                        s = j;break c;
                      } else break;
                    } else ya();
                  } while (0);a = k[1456] | 0;if (r >>> 0 < a >>> 0) ya();k[r + 24 >> 2] = f;b = k[i + 16 >> 2] | 0;do {
                    if (b | 0) if (b >>> 0 < a >>> 0) ya();else {
                      k[r + 16 >> 2] = b;k[b + 24 >> 2] = r;break;
                    }
                  } while (0);b = k[i + 20 >> 2] | 0;if (b) {
                    if (b >>> 0 < (k[1456] | 0) >>> 0) ya();else {
                      k[r + 20 >> 2] = b;k[b + 24 >> 2] = r;s = j;break;
                    }
                  } else s = j;
                } else s = j;
              } while (0);do {
                if (h >>> 0 >= 16) {
                  k[i + 4 >> 2] = o | 3;k[g + 4 >> 2] = h | 1;k[g + h >> 2] = h;b = h >>> 3;if (h >>> 0 < 256) {
                    c = 5848 + (b << 1 << 2) | 0;a = k[1452] | 0;b = 1 << b;if (a & b) {
                      b = c + 8 | 0;a = k[b >> 2] | 0;if (a >>> 0 < (k[1456] | 0) >>> 0) ya();else {
                        x = a;y = b;
                      }
                    } else {
                      k[1452] = a | b;x = c;y = c + 8 | 0;
                    }k[y >> 2] = g;k[x + 12 >> 2] = g;k[g + 8 >> 2] = x;k[g + 12 >> 2] = c;break;
                  }b = h >>> 8;if (b) {
                    if (h >>> 0 > 16777215) b = 31;else {
                      I = (b + 1048320 | 0) >>> 16 & 8;J = b << I;H = (J + 520192 | 0) >>> 16 & 4;J = J << H;b = (J + 245760 | 0) >>> 16 & 2;b = 14 - (H | I | b) + (J << b >>> 15) | 0;b = h >>> (b + 7 | 0) & 1 | b << 1;
                    }
                  } else b = 0;c = 6112 + (b << 2) | 0;k[g + 28 >> 2] = b;a = g + 16 | 0;k[a + 4 >> 2] = 0;k[a >> 2] = 0;a = 1 << b;if (!(s & a)) {
                    k[1453] = s | a;k[c >> 2] = g;k[g + 24 >> 2] = c;k[g + 12 >> 2] = g;k[g + 8 >> 2] = g;break;
                  }a = h << ((b | 0) == 31 ? 0 : 25 - (b >>> 1) | 0);d = k[c >> 2] | 0;while (1) {
                    if ((k[d + 4 >> 2] & -8 | 0) == (h | 0)) {
                      C = 139;break;
                    }c = d + 16 + (a >>> 31 << 2) | 0;b = k[c >> 2] | 0;if (!b) {
                      C = 136;break;
                    } else {
                      a = a << 1;d = b;
                    }
                  }if ((C | 0) == 136) {
                    if (c >>> 0 < (k[1456] | 0) >>> 0) ya();else {
                      k[c >> 2] = g;k[g + 24 >> 2] = d;k[g + 12 >> 2] = g;k[g + 8 >> 2] = g;break;
                    }
                  } else if ((C | 0) == 139) {
                    b = d + 8 | 0;a = k[b >> 2] | 0;J = k[1456] | 0;if (a >>> 0 >= J >>> 0 & d >>> 0 >= J >>> 0) {
                      k[a + 12 >> 2] = g;k[b >> 2] = g;k[g + 8 >> 2] = a;k[g + 12 >> 2] = d;k[g + 24 >> 2] = 0;break;
                    } else ya();
                  }
                } else {
                  J = h + o | 0;k[i + 4 >> 2] = J | 3;J = i + J + 4 | 0;k[J >> 2] = k[J >> 2] | 1;
                }
              } while (0);J = i + 8 | 0;u = K;return J | 0;
            }
          }
        } else o = -1;
      } while (0);c = k[1454] | 0;if (c >>> 0 >= o >>> 0) {
        b = c - o | 0;a = k[1457] | 0;if (b >>> 0 > 15) {
          J = a + o | 0;k[1457] = J;k[1454] = b;k[J + 4 >> 2] = b | 1;k[J + b >> 2] = b;k[a + 4 >> 2] = o | 3;
        } else {
          k[1454] = 0;k[1457] = 0;k[a + 4 >> 2] = c | 3;J = a + c + 4 | 0;k[J >> 2] = k[J >> 2] | 1;
        }J = a + 8 | 0;u = K;return J | 0;
      }g = k[1455] | 0;if (g >>> 0 > o >>> 0) {
        H = g - o | 0;k[1455] = H;J = k[1458] | 0;I = J + o | 0;k[1458] = I;k[I + 4 >> 2] = H | 1;k[J + 4 >> 2] = o | 3;J = J + 8 | 0;u = K;return J | 0;
      }if (!(k[1570] | 0)) {
        k[1572] = 4096;k[1571] = 4096;k[1573] = -1;k[1574] = -1;k[1575] = 0;k[1563] = 0;a = n & -16 ^ 1431655768;k[n >> 2] = a;k[1570] = a;a = 4096;
      } else a = k[1572] | 0;h = o + 48 | 0;i = o + 47 | 0;f = a + i | 0;e = 0 - a | 0;j = f & e;if (j >>> 0 <= o >>> 0) {
        J = 0;u = K;return J | 0;
      }a = k[1562] | 0;if (a | 0 ? (x = k[1560] | 0, y = x + j | 0, y >>> 0 <= x >>> 0 | y >>> 0 > a >>> 0) : 0) {
        J = 0;u = K;return J | 0;
      }d: do {
        if (!(k[1563] & 4)) {
          c = k[1458] | 0;e: do {
            if (c) {
              d = 6256;while (1) {
                a = k[d >> 2] | 0;if (a >>> 0 <= c >>> 0 ? (w = d + 4 | 0, (a + (k[w >> 2] | 0) | 0) >>> 0 > c >>> 0) : 0) break;a = k[d + 8 >> 2] | 0;if (!a) {
                  C = 163;break e;
                } else d = a;
              }b = f - g & e;if (b >>> 0 < 2147483647) {
                a = ye(b | 0) | 0;if ((a | 0) == ((k[d >> 2] | 0) + (k[w >> 2] | 0) | 0)) {
                  if ((a | 0) != (-1 | 0)) {
                    g = b;f = a;C = 180;break d;
                  }
                } else {
                  d = a;C = 171;
                }
              } else b = 0;
            } else C = 163;
          } while (0);do {
            if ((C | 0) == 163) {
              c = ye(0) | 0;if ((c | 0) != (-1 | 0) ? (b = c, t = k[1571] | 0, v = t + -1 | 0, b = ((v & b | 0) == 0 ? 0 : (v + b & 0 - t) - b | 0) + j | 0, t = k[1560] | 0, v = b + t | 0, b >>> 0 > o >>> 0 & b >>> 0 < 2147483647) : 0) {
                y = k[1562] | 0;if (y | 0 ? v >>> 0 <= t >>> 0 | v >>> 0 > y >>> 0 : 0) {
                  b = 0;break;
                }a = ye(b | 0) | 0;if ((a | 0) == (c | 0)) {
                  g = b;f = c;C = 180;break d;
                } else {
                  d = a;C = 171;
                }
              } else b = 0;
            }
          } while (0);do {
            if ((C | 0) == 171) {
              c = 0 - b | 0;if (!(h >>> 0 > b >>> 0 & (b >>> 0 < 2147483647 & (d | 0) != (-1 | 0)))) if ((d | 0) == (-1 | 0)) {
                b = 0;break;
              } else {
                g = b;f = d;C = 180;break d;
              }a = k[1572] | 0;a = i - b + a & 0 - a;if (a >>> 0 >= 2147483647) {
                g = b;f = d;C = 180;break d;
              }if ((ye(a | 0) | 0) == (-1 | 0)) {
                ye(c | 0) | 0;b = 0;break;
              } else {
                g = a + b | 0;f = d;C = 180;break d;
              }
            }
          } while (0);k[1563] = k[1563] | 4;C = 178;
        } else {
          b = 0;C = 178;
        }
      } while (0);if (((C | 0) == 178 ? j >>> 0 < 2147483647 : 0) ? (B = ye(j | 0) | 0, y = ye(0) | 0, z = y - B | 0, A = z >>> 0 > (o + 40 | 0) >>> 0, !((B | 0) == (-1 | 0) | A ^ 1 | B >>> 0 < y >>> 0 & ((B | 0) != (-1 | 0) & (y | 0) != (-1 | 0)) ^ 1)) : 0) {
        g = A ? z : b;f = B;C = 180;
      }if ((C | 0) == 180) {
        b = (k[1560] | 0) + g | 0;k[1560] = b;if (b >>> 0 > (k[1561] | 0) >>> 0) k[1561] = b;j = k[1458] | 0;do {
          if (j) {
            b = 6256;while (1) {
              a = k[b >> 2] | 0;c = b + 4 | 0;d = k[c >> 2] | 0;if ((f | 0) == (a + d | 0)) {
                C = 190;break;
              }e = k[b + 8 >> 2] | 0;if (!e) break;else b = e;
            }if (((C | 0) == 190 ? (k[b + 12 >> 2] & 8 | 0) == 0 : 0) ? j >>> 0 < f >>> 0 & j >>> 0 >= a >>> 0 : 0) {
              k[c >> 2] = d + g;J = j + 8 | 0;J = (J & 7 | 0) == 0 ? 0 : 0 - J & 7;I = j + J | 0;J = (k[1455] | 0) + (g - J) | 0;k[1458] = I;k[1455] = J;k[I + 4 >> 2] = J | 1;k[I + J + 4 >> 2] = 40;k[1459] = k[1574];break;
            }b = k[1456] | 0;if (f >>> 0 < b >>> 0) {
              k[1456] = f;h = f;
            } else h = b;c = f + g | 0;b = 6256;while (1) {
              if ((k[b >> 2] | 0) == (c | 0)) {
                C = 198;break;
              }a = k[b + 8 >> 2] | 0;if (!a) break;else b = a;
            }if ((C | 0) == 198 ? (k[b + 12 >> 2] & 8 | 0) == 0 : 0) {
              k[b >> 2] = f;m = b + 4 | 0;k[m >> 2] = (k[m >> 2] | 0) + g;m = f + 8 | 0;m = f + ((m & 7 | 0) == 0 ? 0 : 0 - m & 7) | 0;b = c + 8 | 0;b = c + ((b & 7 | 0) == 0 ? 0 : 0 - b & 7) | 0;l = m + o | 0;i = b - m - o | 0;k[m + 4 >> 2] = o | 3;do {
                if ((b | 0) != (j | 0)) {
                  if ((b | 0) == (k[1457] | 0)) {
                    J = (k[1454] | 0) + i | 0;k[1454] = J;k[1457] = l;k[l + 4 >> 2] = J | 1;k[l + J >> 2] = J;break;
                  }a = k[b + 4 >> 2] | 0;if ((a & 3 | 0) == 1) {
                    g = a & -8;e = a >>> 3;f: do {
                      if (a >>> 0 >= 256) {
                        f = k[b + 24 >> 2] | 0;d = k[b + 12 >> 2] | 0;do {
                          if ((d | 0) == (b | 0)) {
                            d = b + 16 | 0;c = d + 4 | 0;a = k[c >> 2] | 0;if (!a) {
                              a = k[d >> 2] | 0;if (!a) {
                                H = 0;break;
                              } else c = d;
                            }while (1) {
                              d = a + 20 | 0;e = k[d >> 2] | 0;if (e | 0) {
                                a = e;c = d;continue;
                              }d = a + 16 | 0;e = k[d >> 2] | 0;if (!e) break;else {
                                a = e;c = d;
                              }
                            }if (c >>> 0 < h >>> 0) ya();else {
                              k[c >> 2] = 0;H = a;break;
                            }
                          } else {
                            e = k[b + 8 >> 2] | 0;if (e >>> 0 < h >>> 0) ya();a = e + 12 | 0;if ((k[a >> 2] | 0) != (b | 0)) ya();c = d + 8 | 0;if ((k[c >> 2] | 0) == (b | 0)) {
                              k[a >> 2] = d;k[c >> 2] = e;H = d;break;
                            } else ya();
                          }
                        } while (0);if (!f) break;a = k[b + 28 >> 2] | 0;c = 6112 + (a << 2) | 0;do {
                          if ((b | 0) != (k[c >> 2] | 0)) {
                            if (f >>> 0 >= (k[1456] | 0) >>> 0) {
                              k[f + 16 + (((k[f + 16 >> 2] | 0) != (b | 0) & 1) << 2) >> 2] = H;if (!H) break f;else break;
                            } else ya();
                          } else {
                            k[c >> 2] = H;if (H | 0) break;k[1453] = k[1453] & ~(1 << a);break f;
                          }
                        } while (0);d = k[1456] | 0;if (H >>> 0 < d >>> 0) ya();k[H + 24 >> 2] = f;a = b + 16 | 0;c = k[a >> 2] | 0;do {
                          if (c | 0) if (c >>> 0 < d >>> 0) ya();else {
                            k[H + 16 >> 2] = c;k[c + 24 >> 2] = H;break;
                          }
                        } while (0);a = k[a + 4 >> 2] | 0;if (!a) break;if (a >>> 0 < (k[1456] | 0) >>> 0) ya();else {
                          k[H + 20 >> 2] = a;k[a + 24 >> 2] = H;break;
                        }
                      } else {
                        c = k[b + 8 >> 2] | 0;d = k[b + 12 >> 2] | 0;a = 5848 + (e << 1 << 2) | 0;do {
                          if ((c | 0) != (a | 0)) {
                            if (c >>> 0 < h >>> 0) ya();if ((k[c + 12 >> 2] | 0) == (b | 0)) break;ya();
                          }
                        } while (0);if ((d | 0) == (c | 0)) {
                          k[1452] = k[1452] & ~(1 << e);break;
                        }do {
                          if ((d | 0) == (a | 0)) E = d + 8 | 0;else {
                            if (d >>> 0 < h >>> 0) ya();a = d + 8 | 0;if ((k[a >> 2] | 0) == (b | 0)) {
                              E = a;break;
                            }ya();
                          }
                        } while (0);k[c + 12 >> 2] = d;k[E >> 2] = c;
                      }
                    } while (0);b = b + g | 0;e = g + i | 0;
                  } else e = i;b = b + 4 | 0;k[b >> 2] = k[b >> 2] & -2;k[l + 4 >> 2] = e | 1;k[l + e >> 2] = e;b = e >>> 3;if (e >>> 0 < 256) {
                    c = 5848 + (b << 1 << 2) | 0;a = k[1452] | 0;b = 1 << b;do {
                      if (!(a & b)) {
                        k[1452] = a | b;I = c;J = c + 8 | 0;
                      } else {
                        b = c + 8 | 0;a = k[b >> 2] | 0;if (a >>> 0 >= (k[1456] | 0) >>> 0) {
                          I = a;J = b;break;
                        }ya();
                      }
                    } while (0);k[J >> 2] = l;k[I + 12 >> 2] = l;k[l + 8 >> 2] = I;k[l + 12 >> 2] = c;break;
                  }b = e >>> 8;do {
                    if (!b) b = 0;else {
                      if (e >>> 0 > 16777215) {
                        b = 31;break;
                      }I = (b + 1048320 | 0) >>> 16 & 8;J = b << I;H = (J + 520192 | 0) >>> 16 & 4;J = J << H;b = (J + 245760 | 0) >>> 16 & 2;b = 14 - (H | I | b) + (J << b >>> 15) | 0;b = e >>> (b + 7 | 0) & 1 | b << 1;
                    }
                  } while (0);d = 6112 + (b << 2) | 0;k[l + 28 >> 2] = b;a = l + 16 | 0;k[a + 4 >> 2] = 0;k[a >> 2] = 0;a = k[1453] | 0;c = 1 << b;if (!(a & c)) {
                    k[1453] = a | c;k[d >> 2] = l;k[l + 24 >> 2] = d;k[l + 12 >> 2] = l;k[l + 8 >> 2] = l;break;
                  }a = e << ((b | 0) == 31 ? 0 : 25 - (b >>> 1) | 0);d = k[d >> 2] | 0;while (1) {
                    if ((k[d + 4 >> 2] & -8 | 0) == (e | 0)) {
                      C = 265;break;
                    }c = d + 16 + (a >>> 31 << 2) | 0;b = k[c >> 2] | 0;if (!b) {
                      C = 262;break;
                    } else {
                      a = a << 1;d = b;
                    }
                  }if ((C | 0) == 262) {
                    if (c >>> 0 < (k[1456] | 0) >>> 0) ya();else {
                      k[c >> 2] = l;k[l + 24 >> 2] = d;k[l + 12 >> 2] = l;k[l + 8 >> 2] = l;break;
                    }
                  } else if ((C | 0) == 265) {
                    b = d + 8 | 0;a = k[b >> 2] | 0;J = k[1456] | 0;if (a >>> 0 >= J >>> 0 & d >>> 0 >= J >>> 0) {
                      k[a + 12 >> 2] = l;k[b >> 2] = l;k[l + 8 >> 2] = a;k[l + 12 >> 2] = d;k[l + 24 >> 2] = 0;break;
                    } else ya();
                  }
                } else {
                  J = (k[1455] | 0) + i | 0;k[1455] = J;k[1458] = l;k[l + 4 >> 2] = J | 1;
                }
              } while (0);J = m + 8 | 0;u = K;return J | 0;
            }b = 6256;while (1) {
              a = k[b >> 2] | 0;if (a >>> 0 <= j >>> 0 ? (D = a + (k[b + 4 >> 2] | 0) | 0, D >>> 0 > j >>> 0) : 0) break;b = k[b + 8 >> 2] | 0;
            }e = D + -47 | 0;a = e + 8 | 0;a = e + ((a & 7 | 0) == 0 ? 0 : 0 - a & 7) | 0;e = j + 16 | 0;a = a >>> 0 < e >>> 0 ? j : a;b = a + 8 | 0;c = f + 8 | 0;c = (c & 7 | 0) == 0 ? 0 : 0 - c & 7;J = f + c | 0;c = g + -40 - c | 0;k[1458] = J;k[1455] = c;k[J + 4 >> 2] = c | 1;k[J + c + 4 >> 2] = 40;k[1459] = k[1574];c = a + 4 | 0;k[c >> 2] = 27;k[b >> 2] = k[1564];k[b + 4 >> 2] = k[1565];k[b + 8 >> 2] = k[1566];k[b + 12 >> 2] = k[1567];k[1564] = f;k[1565] = g;k[1567] = 0;k[1566] = b;b = a + 24 | 0;do {
              J = b;b = b + 4 | 0;k[b >> 2] = 7;
            } while ((J + 8 | 0) >>> 0 < D >>> 0);if ((a | 0) != (j | 0)) {
              f = a - j | 0;k[c >> 2] = k[c >> 2] & -2;k[j + 4 >> 2] = f | 1;k[a >> 2] = f;b = f >>> 3;if (f >>> 0 < 256) {
                c = 5848 + (b << 1 << 2) | 0;a = k[1452] | 0;b = 1 << b;if (a & b) {
                  b = c + 8 | 0;a = k[b >> 2] | 0;if (a >>> 0 < (k[1456] | 0) >>> 0) ya();else {
                    F = a;G = b;
                  }
                } else {
                  k[1452] = a | b;F = c;G = c + 8 | 0;
                }k[G >> 2] = j;k[F + 12 >> 2] = j;k[j + 8 >> 2] = F;k[j + 12 >> 2] = c;break;
              }b = f >>> 8;if (b) {
                if (f >>> 0 > 16777215) c = 31;else {
                  I = (b + 1048320 | 0) >>> 16 & 8;J = b << I;H = (J + 520192 | 0) >>> 16 & 4;J = J << H;c = (J + 245760 | 0) >>> 16 & 2;c = 14 - (H | I | c) + (J << c >>> 15) | 0;c = f >>> (c + 7 | 0) & 1 | c << 1;
                }
              } else c = 0;d = 6112 + (c << 2) | 0;k[j + 28 >> 2] = c;k[j + 20 >> 2] = 0;k[e >> 2] = 0;b = k[1453] | 0;a = 1 << c;if (!(b & a)) {
                k[1453] = b | a;k[d >> 2] = j;k[j + 24 >> 2] = d;k[j + 12 >> 2] = j;k[j + 8 >> 2] = j;break;
              }a = f << ((c | 0) == 31 ? 0 : 25 - (c >>> 1) | 0);d = k[d >> 2] | 0;while (1) {
                if ((k[d + 4 >> 2] & -8 | 0) == (f | 0)) {
                  C = 292;break;
                }c = d + 16 + (a >>> 31 << 2) | 0;b = k[c >> 2] | 0;if (!b) {
                  C = 289;break;
                } else {
                  a = a << 1;d = b;
                }
              }if ((C | 0) == 289) {
                if (c >>> 0 < (k[1456] | 0) >>> 0) ya();else {
                  k[c >> 2] = j;k[j + 24 >> 2] = d;k[j + 12 >> 2] = j;k[j + 8 >> 2] = j;break;
                }
              } else if ((C | 0) == 292) {
                b = d + 8 | 0;a = k[b >> 2] | 0;J = k[1456] | 0;if (a >>> 0 >= J >>> 0 & d >>> 0 >= J >>> 0) {
                  k[a + 12 >> 2] = j;k[b >> 2] = j;k[j + 8 >> 2] = a;k[j + 12 >> 2] = d;k[j + 24 >> 2] = 0;break;
                } else ya();
              }
            }
          } else {
            J = k[1456] | 0;if ((J | 0) == 0 | f >>> 0 < J >>> 0) k[1456] = f;k[1564] = f;k[1565] = g;k[1567] = 0;k[1461] = k[1570];k[1460] = -1;b = 0;do {
              J = 5848 + (b << 1 << 2) | 0;k[J + 12 >> 2] = J;k[J + 8 >> 2] = J;b = b + 1 | 0;
            } while ((b | 0) != 32);J = f + 8 | 0;J = (J & 7 | 0) == 0 ? 0 : 0 - J & 7;I = f + J | 0;J = g + -40 - J | 0;k[1458] = I;k[1455] = J;k[I + 4 >> 2] = J | 1;k[I + J + 4 >> 2] = 40;k[1459] = k[1574];
          }
        } while (0);b = k[1455] | 0;if (b >>> 0 > o >>> 0) {
          H = b - o | 0;k[1455] = H;J = k[1458] | 0;I = J + o | 0;k[1458] = I;k[I + 4 >> 2] = H | 1;k[J + 4 >> 2] = o | 3;J = J + 8 | 0;u = K;return J | 0;
        }
      }J = xc() | 0;k[J >> 2] = 12;J = 0;u = K;return J | 0;
    }function Md(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0;if (!a) return;c = a + -8 | 0;g = k[1456] | 0;if (c >>> 0 < g >>> 0) ya();a = k[a + -4 >> 2] | 0;b = a & 3;if ((b | 0) == 1) ya();d = a & -8;o = c + d | 0;a: do {
        if (!(a & 1)) {
          a = k[c >> 2] | 0;if (!b) return;j = c + (0 - a) | 0;i = a + d | 0;if (j >>> 0 < g >>> 0) ya();if ((j | 0) == (k[1457] | 0)) {
            a = o + 4 | 0;b = k[a >> 2] | 0;if ((b & 3 | 0) != 3) {
              r = j;e = i;m = j;break;
            }k[1454] = i;k[a >> 2] = b & -2;k[j + 4 >> 2] = i | 1;k[j + i >> 2] = i;return;
          }d = a >>> 3;if (a >>> 0 < 256) {
            b = k[j + 8 >> 2] | 0;c = k[j + 12 >> 2] | 0;a = 5848 + (d << 1 << 2) | 0;if ((b | 0) != (a | 0)) {
              if (b >>> 0 < g >>> 0) ya();if ((k[b + 12 >> 2] | 0) != (j | 0)) ya();
            }if ((c | 0) == (b | 0)) {
              k[1452] = k[1452] & ~(1 << d);r = j;e = i;m = j;break;
            }if ((c | 0) != (a | 0)) {
              if (c >>> 0 < g >>> 0) ya();a = c + 8 | 0;if ((k[a >> 2] | 0) == (j | 0)) f = a;else ya();
            } else f = c + 8 | 0;k[b + 12 >> 2] = c;k[f >> 2] = b;r = j;e = i;m = j;break;
          }f = k[j + 24 >> 2] | 0;c = k[j + 12 >> 2] | 0;do {
            if ((c | 0) == (j | 0)) {
              c = j + 16 | 0;b = c + 4 | 0;a = k[b >> 2] | 0;if (!a) {
                a = k[c >> 2] | 0;if (!a) {
                  h = 0;break;
                } else b = c;
              }while (1) {
                c = a + 20 | 0;d = k[c >> 2] | 0;if (d | 0) {
                  a = d;b = c;continue;
                }c = a + 16 | 0;d = k[c >> 2] | 0;if (!d) break;else {
                  a = d;b = c;
                }
              }if (b >>> 0 < g >>> 0) ya();else {
                k[b >> 2] = 0;h = a;break;
              }
            } else {
              d = k[j + 8 >> 2] | 0;if (d >>> 0 < g >>> 0) ya();a = d + 12 | 0;if ((k[a >> 2] | 0) != (j | 0)) ya();b = c + 8 | 0;if ((k[b >> 2] | 0) == (j | 0)) {
                k[a >> 2] = c;k[b >> 2] = d;h = c;break;
              } else ya();
            }
          } while (0);if (f) {
            a = k[j + 28 >> 2] | 0;b = 6112 + (a << 2) | 0;do {
              if ((j | 0) == (k[b >> 2] | 0)) {
                k[b >> 2] = h;if (!h) {
                  k[1453] = k[1453] & ~(1 << a);r = j;e = i;m = j;break a;
                }
              } else if (f >>> 0 >= (k[1456] | 0) >>> 0) {
                k[f + 16 + (((k[f + 16 >> 2] | 0) != (j | 0) & 1) << 2) >> 2] = h;if (!h) {
                  r = j;e = i;m = j;break a;
                } else break;
              } else ya();
            } while (0);c = k[1456] | 0;if (h >>> 0 < c >>> 0) ya();k[h + 24 >> 2] = f;a = j + 16 | 0;b = k[a >> 2] | 0;do {
              if (b | 0) if (b >>> 0 < c >>> 0) ya();else {
                k[h + 16 >> 2] = b;k[b + 24 >> 2] = h;break;
              }
            } while (0);a = k[a + 4 >> 2] | 0;if (a) {
              if (a >>> 0 < (k[1456] | 0) >>> 0) ya();else {
                k[h + 20 >> 2] = a;k[a + 24 >> 2] = h;r = j;e = i;m = j;break;
              }
            } else {
              r = j;e = i;m = j;
            }
          } else {
            r = j;e = i;m = j;
          }
        } else {
          r = c;e = d;m = c;
        }
      } while (0);if (m >>> 0 >= o >>> 0) ya();a = o + 4 | 0;b = k[a >> 2] | 0;if (!(b & 1)) ya();if (!(b & 2)) {
        a = k[1457] | 0;if ((o | 0) == (k[1458] | 0)) {
          q = (k[1455] | 0) + e | 0;k[1455] = q;k[1458] = r;k[r + 4 >> 2] = q | 1;if ((r | 0) != (a | 0)) return;k[1457] = 0;k[1454] = 0;return;
        }if ((o | 0) == (a | 0)) {
          q = (k[1454] | 0) + e | 0;k[1454] = q;k[1457] = m;k[r + 4 >> 2] = q | 1;k[m + q >> 2] = q;return;
        }e = (b & -8) + e | 0;d = b >>> 3;b: do {
          if (b >>> 0 >= 256) {
            f = k[o + 24 >> 2] | 0;a = k[o + 12 >> 2] | 0;do {
              if ((a | 0) == (o | 0)) {
                c = o + 16 | 0;b = c + 4 | 0;a = k[b >> 2] | 0;if (!a) {
                  a = k[c >> 2] | 0;if (!a) {
                    n = 0;break;
                  } else b = c;
                }while (1) {
                  c = a + 20 | 0;d = k[c >> 2] | 0;if (d | 0) {
                    a = d;b = c;continue;
                  }c = a + 16 | 0;d = k[c >> 2] | 0;if (!d) break;else {
                    a = d;b = c;
                  }
                }if (b >>> 0 < (k[1456] | 0) >>> 0) ya();else {
                  k[b >> 2] = 0;n = a;break;
                }
              } else {
                b = k[o + 8 >> 2] | 0;if (b >>> 0 < (k[1456] | 0) >>> 0) ya();c = b + 12 | 0;if ((k[c >> 2] | 0) != (o | 0)) ya();d = a + 8 | 0;if ((k[d >> 2] | 0) == (o | 0)) {
                  k[c >> 2] = a;k[d >> 2] = b;n = a;break;
                } else ya();
              }
            } while (0);if (f | 0) {
              a = k[o + 28 >> 2] | 0;b = 6112 + (a << 2) | 0;do {
                if ((o | 0) == (k[b >> 2] | 0)) {
                  k[b >> 2] = n;if (!n) {
                    k[1453] = k[1453] & ~(1 << a);break b;
                  }
                } else if (f >>> 0 >= (k[1456] | 0) >>> 0) {
                  k[f + 16 + (((k[f + 16 >> 2] | 0) != (o | 0) & 1) << 2) >> 2] = n;if (!n) break b;else break;
                } else ya();
              } while (0);c = k[1456] | 0;if (n >>> 0 < c >>> 0) ya();k[n + 24 >> 2] = f;a = o + 16 | 0;b = k[a >> 2] | 0;do {
                if (b | 0) if (b >>> 0 < c >>> 0) ya();else {
                  k[n + 16 >> 2] = b;k[b + 24 >> 2] = n;break;
                }
              } while (0);a = k[a + 4 >> 2] | 0;if (a | 0) if (a >>> 0 < (k[1456] | 0) >>> 0) ya();else {
                k[n + 20 >> 2] = a;k[a + 24 >> 2] = n;break;
              }
            }
          } else {
            b = k[o + 8 >> 2] | 0;c = k[o + 12 >> 2] | 0;a = 5848 + (d << 1 << 2) | 0;if ((b | 0) != (a | 0)) {
              if (b >>> 0 < (k[1456] | 0) >>> 0) ya();if ((k[b + 12 >> 2] | 0) != (o | 0)) ya();
            }if ((c | 0) == (b | 0)) {
              k[1452] = k[1452] & ~(1 << d);break;
            }if ((c | 0) != (a | 0)) {
              if (c >>> 0 < (k[1456] | 0) >>> 0) ya();a = c + 8 | 0;if ((k[a >> 2] | 0) == (o | 0)) l = a;else ya();
            } else l = c + 8 | 0;k[b + 12 >> 2] = c;k[l >> 2] = b;
          }
        } while (0);k[r + 4 >> 2] = e | 1;k[m + e >> 2] = e;if ((r | 0) == (k[1457] | 0)) {
          k[1454] = e;return;
        }
      } else {
        k[a >> 2] = b & -2;k[r + 4 >> 2] = e | 1;k[m + e >> 2] = e;
      }a = e >>> 3;if (e >>> 0 < 256) {
        c = 5848 + (a << 1 << 2) | 0;b = k[1452] | 0;a = 1 << a;if (b & a) {
          a = c + 8 | 0;b = k[a >> 2] | 0;if (b >>> 0 < (k[1456] | 0) >>> 0) ya();else {
            p = b;q = a;
          }
        } else {
          k[1452] = b | a;p = c;q = c + 8 | 0;
        }k[q >> 2] = r;k[p + 12 >> 2] = r;k[r + 8 >> 2] = p;k[r + 12 >> 2] = c;return;
      }a = e >>> 8;if (a) {
        if (e >>> 0 > 16777215) a = 31;else {
          p = (a + 1048320 | 0) >>> 16 & 8;q = a << p;o = (q + 520192 | 0) >>> 16 & 4;q = q << o;a = (q + 245760 | 0) >>> 16 & 2;a = 14 - (o | p | a) + (q << a >>> 15) | 0;a = e >>> (a + 7 | 0) & 1 | a << 1;
        }
      } else a = 0;d = 6112 + (a << 2) | 0;k[r + 28 >> 2] = a;k[r + 20 >> 2] = 0;k[r + 16 >> 2] = 0;b = k[1453] | 0;c = 1 << a;do {
        if (b & c) {
          b = e << ((a | 0) == 31 ? 0 : 25 - (a >>> 1) | 0);d = k[d >> 2] | 0;while (1) {
            if ((k[d + 4 >> 2] & -8 | 0) == (e | 0)) {
              a = 124;break;
            }c = d + 16 + (b >>> 31 << 2) | 0;a = k[c >> 2] | 0;if (!a) {
              a = 121;break;
            } else {
              b = b << 1;d = a;
            }
          }if ((a | 0) == 121) {
            if (c >>> 0 < (k[1456] | 0) >>> 0) ya();else {
              k[c >> 2] = r;k[r + 24 >> 2] = d;k[r + 12 >> 2] = r;k[r + 8 >> 2] = r;break;
            }
          } else if ((a | 0) == 124) {
            a = d + 8 | 0;b = k[a >> 2] | 0;q = k[1456] | 0;if (b >>> 0 >= q >>> 0 & d >>> 0 >= q >>> 0) {
              k[b + 12 >> 2] = r;k[a >> 2] = r;k[r + 8 >> 2] = b;k[r + 12 >> 2] = d;k[r + 24 >> 2] = 0;break;
            } else ya();
          }
        } else {
          k[1453] = b | c;k[d >> 2] = r;k[r + 24 >> 2] = d;k[r + 12 >> 2] = r;k[r + 8 >> 2] = r;
        }
      } while (0);r = (k[1460] | 0) + -1 | 0;k[1460] = r;if (!r) a = 6264;else return;while (1) {
        a = k[a >> 2] | 0;if (!a) break;else a = a + 8 | 0;
      }k[1460] = -1;return;
    }function Nd(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0;if (!a) {
        b = Ld(b) | 0;return b | 0;
      }if (b >>> 0 > 4294967231) {
        b = xc() | 0;k[b >> 2] = 12;b = 0;return b | 0;
      }c = Od(a + -8 | 0, b >>> 0 < 11 ? 16 : b + 11 & -8) | 0;if (c | 0) {
        b = c + 8 | 0;return b | 0;
      }c = Ld(b) | 0;if (!c) {
        b = 0;return b | 0;
      }d = k[a + -4 >> 2] | 0;d = (d & -8) - ((d & 3 | 0) == 0 ? 8 : 4) | 0;Ae(c | 0, a | 0, (d >>> 0 < b >>> 0 ? d : b) | 0) | 0;Md(a);b = c;return b | 0;
    }function Od(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0;o = a + 4 | 0;n = k[o >> 2] | 0;c = n & -8;j = a + c | 0;h = k[1456] | 0;d = n & 3;if (!((d | 0) != 1 & a >>> 0 >= h >>> 0 & a >>> 0 < j >>> 0)) ya();e = k[j + 4 >> 2] | 0;if (!(e & 1)) ya();if (!d) {
        if (b >>> 0 < 256) {
          a = 0;return a | 0;
        }if (c >>> 0 >= (b + 4 | 0) >>> 0 ? (c - b | 0) >>> 0 <= k[1572] << 1 >>> 0 : 0) return a | 0;a = 0;return a | 0;
      }if (c >>> 0 >= b >>> 0) {
        c = c - b | 0;if (c >>> 0 <= 15) return a | 0;m = a + b | 0;k[o >> 2] = n & 1 | b | 2;k[m + 4 >> 2] = c | 3;o = m + c + 4 | 0;k[o >> 2] = k[o >> 2] | 1;Pd(m, c);return a | 0;
      }if ((j | 0) == (k[1458] | 0)) {
        m = (k[1455] | 0) + c | 0;c = m - b | 0;d = a + b | 0;if (m >>> 0 <= b >>> 0) {
          a = 0;return a | 0;
        }k[o >> 2] = n & 1 | b | 2;k[d + 4 >> 2] = c | 1;k[1458] = d;k[1455] = c;return a | 0;
      }if ((j | 0) == (k[1457] | 0)) {
        e = (k[1454] | 0) + c | 0;if (e >>> 0 < b >>> 0) {
          a = 0;return a | 0;
        }c = e - b | 0;d = n & 1;if (c >>> 0 > 15) {
          n = a + b | 0;m = n + c | 0;k[o >> 2] = d | b | 2;k[n + 4 >> 2] = c | 1;k[m >> 2] = c;d = m + 4 | 0;k[d >> 2] = k[d >> 2] & -2;d = n;
        } else {
          k[o >> 2] = d | e | 2;d = a + e + 4 | 0;k[d >> 2] = k[d >> 2] | 1;d = 0;c = 0;
        }k[1454] = c;k[1457] = d;return a | 0;
      }if (e & 2 | 0) {
        a = 0;return a | 0;
      }l = (e & -8) + c | 0;if (l >>> 0 < b >>> 0) {
        a = 0;return a | 0;
      }m = l - b | 0;f = e >>> 3;a: do {
        if (e >>> 0 >= 256) {
          g = k[j + 24 >> 2] | 0;e = k[j + 12 >> 2] | 0;do {
            if ((e | 0) == (j | 0)) {
              e = j + 16 | 0;d = e + 4 | 0;c = k[d >> 2] | 0;if (!c) {
                c = k[e >> 2] | 0;if (!c) {
                  i = 0;break;
                } else d = e;
              }while (1) {
                e = c + 20 | 0;f = k[e >> 2] | 0;if (f | 0) {
                  c = f;d = e;continue;
                }e = c + 16 | 0;f = k[e >> 2] | 0;if (!f) break;else {
                  c = f;d = e;
                }
              }if (d >>> 0 < h >>> 0) ya();else {
                k[d >> 2] = 0;i = c;break;
              }
            } else {
              f = k[j + 8 >> 2] | 0;if (f >>> 0 < h >>> 0) ya();c = f + 12 | 0;if ((k[c >> 2] | 0) != (j | 0)) ya();d = e + 8 | 0;if ((k[d >> 2] | 0) == (j | 0)) {
                k[c >> 2] = e;k[d >> 2] = f;i = e;break;
              } else ya();
            }
          } while (0);if (g | 0) {
            c = k[j + 28 >> 2] | 0;d = 6112 + (c << 2) | 0;do {
              if ((j | 0) == (k[d >> 2] | 0)) {
                k[d >> 2] = i;if (!i) {
                  k[1453] = k[1453] & ~(1 << c);break a;
                }
              } else if (g >>> 0 >= (k[1456] | 0) >>> 0) {
                k[g + 16 + (((k[g + 16 >> 2] | 0) != (j | 0) & 1) << 2) >> 2] = i;if (!i) break a;else break;
              } else ya();
            } while (0);e = k[1456] | 0;if (i >>> 0 < e >>> 0) ya();k[i + 24 >> 2] = g;c = j + 16 | 0;d = k[c >> 2] | 0;do {
              if (d | 0) if (d >>> 0 < e >>> 0) ya();else {
                k[i + 16 >> 2] = d;k[d + 24 >> 2] = i;break;
              }
            } while (0);c = k[c + 4 >> 2] | 0;if (c | 0) if (c >>> 0 < (k[1456] | 0) >>> 0) ya();else {
              k[i + 20 >> 2] = c;k[c + 24 >> 2] = i;break;
            }
          }
        } else {
          d = k[j + 8 >> 2] | 0;e = k[j + 12 >> 2] | 0;c = 5848 + (f << 1 << 2) | 0;if ((d | 0) != (c | 0)) {
            if (d >>> 0 < h >>> 0) ya();if ((k[d + 12 >> 2] | 0) != (j | 0)) ya();
          }if ((e | 0) == (d | 0)) {
            k[1452] = k[1452] & ~(1 << f);break;
          }if ((e | 0) != (c | 0)) {
            if (e >>> 0 < h >>> 0) ya();c = e + 8 | 0;if ((k[c >> 2] | 0) == (j | 0)) g = c;else ya();
          } else g = e + 8 | 0;k[d + 12 >> 2] = e;k[g >> 2] = d;
        }
      } while (0);c = n & 1;if (m >>> 0 < 16) {
        k[o >> 2] = l | c | 2;o = a + l + 4 | 0;k[o >> 2] = k[o >> 2] | 1;return a | 0;
      } else {
        n = a + b | 0;k[o >> 2] = c | b | 2;k[n + 4 >> 2] = m | 3;o = n + m + 4 | 0;k[o >> 2] = k[o >> 2] | 1;Pd(n, m);return a | 0;
      }return 0;
    }function Pd(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0;o = a + b | 0;c = k[a + 4 >> 2] | 0;a: do {
        if (!(c & 1)) {
          f = k[a >> 2] | 0;if (!(c & 3)) return;l = a + (0 - f) | 0;j = f + b | 0;h = k[1456] | 0;if (l >>> 0 < h >>> 0) ya();if ((l | 0) == (k[1457] | 0)) {
            a = o + 4 | 0;c = k[a >> 2] | 0;if ((c & 3 | 0) != 3) {
              r = l;e = j;break;
            }k[1454] = j;k[a >> 2] = c & -2;k[l + 4 >> 2] = j | 1;k[l + j >> 2] = j;return;
          }d = f >>> 3;if (f >>> 0 < 256) {
            c = k[l + 8 >> 2] | 0;b = k[l + 12 >> 2] | 0;a = 5848 + (d << 1 << 2) | 0;if ((c | 0) != (a | 0)) {
              if (c >>> 0 < h >>> 0) ya();if ((k[c + 12 >> 2] | 0) != (l | 0)) ya();
            }if ((b | 0) == (c | 0)) {
              k[1452] = k[1452] & ~(1 << d);r = l;e = j;break;
            }if ((b | 0) != (a | 0)) {
              if (b >>> 0 < h >>> 0) ya();a = b + 8 | 0;if ((k[a >> 2] | 0) == (l | 0)) g = a;else ya();
            } else g = b + 8 | 0;k[c + 12 >> 2] = b;k[g >> 2] = c;r = l;e = j;break;
          }f = k[l + 24 >> 2] | 0;b = k[l + 12 >> 2] | 0;do {
            if ((b | 0) == (l | 0)) {
              b = l + 16 | 0;c = b + 4 | 0;a = k[c >> 2] | 0;if (!a) {
                a = k[b >> 2] | 0;if (!a) {
                  i = 0;break;
                } else c = b;
              }while (1) {
                b = a + 20 | 0;d = k[b >> 2] | 0;if (d | 0) {
                  a = d;c = b;continue;
                }b = a + 16 | 0;d = k[b >> 2] | 0;if (!d) break;else {
                  a = d;c = b;
                }
              }if (c >>> 0 < h >>> 0) ya();else {
                k[c >> 2] = 0;i = a;break;
              }
            } else {
              d = k[l + 8 >> 2] | 0;if (d >>> 0 < h >>> 0) ya();a = d + 12 | 0;if ((k[a >> 2] | 0) != (l | 0)) ya();c = b + 8 | 0;if ((k[c >> 2] | 0) == (l | 0)) {
                k[a >> 2] = b;k[c >> 2] = d;i = b;break;
              } else ya();
            }
          } while (0);if (f) {
            a = k[l + 28 >> 2] | 0;c = 6112 + (a << 2) | 0;do {
              if ((l | 0) == (k[c >> 2] | 0)) {
                k[c >> 2] = i;if (!i) {
                  k[1453] = k[1453] & ~(1 << a);r = l;e = j;break a;
                }
              } else if (f >>> 0 >= (k[1456] | 0) >>> 0) {
                k[f + 16 + (((k[f + 16 >> 2] | 0) != (l | 0) & 1) << 2) >> 2] = i;if (!i) {
                  r = l;e = j;break a;
                } else break;
              } else ya();
            } while (0);b = k[1456] | 0;if (i >>> 0 < b >>> 0) ya();k[i + 24 >> 2] = f;a = l + 16 | 0;c = k[a >> 2] | 0;do {
              if (c | 0) if (c >>> 0 < b >>> 0) ya();else {
                k[i + 16 >> 2] = c;k[c + 24 >> 2] = i;break;
              }
            } while (0);a = k[a + 4 >> 2] | 0;if (a) {
              if (a >>> 0 < (k[1456] | 0) >>> 0) ya();else {
                k[i + 20 >> 2] = a;k[a + 24 >> 2] = i;r = l;e = j;break;
              }
            } else {
              r = l;e = j;
            }
          } else {
            r = l;e = j;
          }
        } else {
          r = a;e = b;
        }
      } while (0);g = k[1456] | 0;if (o >>> 0 < g >>> 0) ya();a = o + 4 | 0;c = k[a >> 2] | 0;if (!(c & 2)) {
        a = k[1457] | 0;if ((o | 0) == (k[1458] | 0)) {
          q = (k[1455] | 0) + e | 0;k[1455] = q;k[1458] = r;k[r + 4 >> 2] = q | 1;if ((r | 0) != (a | 0)) return;k[1457] = 0;k[1454] = 0;return;
        }if ((o | 0) == (a | 0)) {
          q = (k[1454] | 0) + e | 0;k[1454] = q;k[1457] = r;k[r + 4 >> 2] = q | 1;k[r + q >> 2] = q;return;
        }e = (c & -8) + e | 0;d = c >>> 3;b: do {
          if (c >>> 0 >= 256) {
            f = k[o + 24 >> 2] | 0;b = k[o + 12 >> 2] | 0;do {
              if ((b | 0) == (o | 0)) {
                b = o + 16 | 0;c = b + 4 | 0;a = k[c >> 2] | 0;if (!a) {
                  a = k[b >> 2] | 0;if (!a) {
                    n = 0;break;
                  } else c = b;
                }while (1) {
                  b = a + 20 | 0;d = k[b >> 2] | 0;if (d | 0) {
                    a = d;c = b;continue;
                  }b = a + 16 | 0;d = k[b >> 2] | 0;if (!d) break;else {
                    a = d;c = b;
                  }
                }if (c >>> 0 < g >>> 0) ya();else {
                  k[c >> 2] = 0;n = a;break;
                }
              } else {
                d = k[o + 8 >> 2] | 0;if (d >>> 0 < g >>> 0) ya();a = d + 12 | 0;if ((k[a >> 2] | 0) != (o | 0)) ya();c = b + 8 | 0;if ((k[c >> 2] | 0) == (o | 0)) {
                  k[a >> 2] = b;k[c >> 2] = d;n = b;break;
                } else ya();
              }
            } while (0);if (f | 0) {
              a = k[o + 28 >> 2] | 0;c = 6112 + (a << 2) | 0;do {
                if ((o | 0) == (k[c >> 2] | 0)) {
                  k[c >> 2] = n;if (!n) {
                    k[1453] = k[1453] & ~(1 << a);break b;
                  }
                } else if (f >>> 0 >= (k[1456] | 0) >>> 0) {
                  k[f + 16 + (((k[f + 16 >> 2] | 0) != (o | 0) & 1) << 2) >> 2] = n;if (!n) break b;else break;
                } else ya();
              } while (0);b = k[1456] | 0;if (n >>> 0 < b >>> 0) ya();k[n + 24 >> 2] = f;a = o + 16 | 0;c = k[a >> 2] | 0;do {
                if (c | 0) if (c >>> 0 < b >>> 0) ya();else {
                  k[n + 16 >> 2] = c;k[c + 24 >> 2] = n;break;
                }
              } while (0);a = k[a + 4 >> 2] | 0;if (a | 0) if (a >>> 0 < (k[1456] | 0) >>> 0) ya();else {
                k[n + 20 >> 2] = a;k[a + 24 >> 2] = n;break;
              }
            }
          } else {
            c = k[o + 8 >> 2] | 0;b = k[o + 12 >> 2] | 0;a = 5848 + (d << 1 << 2) | 0;if ((c | 0) != (a | 0)) {
              if (c >>> 0 < g >>> 0) ya();if ((k[c + 12 >> 2] | 0) != (o | 0)) ya();
            }if ((b | 0) == (c | 0)) {
              k[1452] = k[1452] & ~(1 << d);break;
            }if ((b | 0) != (a | 0)) {
              if (b >>> 0 < g >>> 0) ya();a = b + 8 | 0;if ((k[a >> 2] | 0) == (o | 0)) m = a;else ya();
            } else m = b + 8 | 0;k[c + 12 >> 2] = b;k[m >> 2] = c;
          }
        } while (0);k[r + 4 >> 2] = e | 1;k[r + e >> 2] = e;if ((r | 0) == (k[1457] | 0)) {
          k[1454] = e;return;
        }
      } else {
        k[a >> 2] = c & -2;k[r + 4 >> 2] = e | 1;k[r + e >> 2] = e;
      }a = e >>> 3;if (e >>> 0 < 256) {
        b = 5848 + (a << 1 << 2) | 0;c = k[1452] | 0;a = 1 << a;if (c & a) {
          a = b + 8 | 0;c = k[a >> 2] | 0;if (c >>> 0 < (k[1456] | 0) >>> 0) ya();else {
            p = c;q = a;
          }
        } else {
          k[1452] = c | a;p = b;q = b + 8 | 0;
        }k[q >> 2] = r;k[p + 12 >> 2] = r;k[r + 8 >> 2] = p;k[r + 12 >> 2] = b;return;
      }a = e >>> 8;if (a) {
        if (e >>> 0 > 16777215) a = 31;else {
          p = (a + 1048320 | 0) >>> 16 & 8;q = a << p;o = (q + 520192 | 0) >>> 16 & 4;q = q << o;a = (q + 245760 | 0) >>> 16 & 2;a = 14 - (o | p | a) + (q << a >>> 15) | 0;a = e >>> (a + 7 | 0) & 1 | a << 1;
        }
      } else a = 0;d = 6112 + (a << 2) | 0;k[r + 28 >> 2] = a;k[r + 20 >> 2] = 0;k[r + 16 >> 2] = 0;c = k[1453] | 0;b = 1 << a;if (!(c & b)) {
        k[1453] = c | b;k[d >> 2] = r;k[r + 24 >> 2] = d;k[r + 12 >> 2] = r;k[r + 8 >> 2] = r;return;
      }c = e << ((a | 0) == 31 ? 0 : 25 - (a >>> 1) | 0);d = k[d >> 2] | 0;while (1) {
        if ((k[d + 4 >> 2] & -8 | 0) == (e | 0)) {
          a = 121;break;
        }b = d + 16 + (c >>> 31 << 2) | 0;a = k[b >> 2] | 0;if (!a) {
          a = 118;break;
        } else {
          c = c << 1;d = a;
        }
      }if ((a | 0) == 118) {
        if (b >>> 0 < (k[1456] | 0) >>> 0) ya();k[b >> 2] = r;k[r + 24 >> 2] = d;k[r + 12 >> 2] = r;k[r + 8 >> 2] = r;return;
      } else if ((a | 0) == 121) {
        a = d + 8 | 0;c = k[a >> 2] | 0;q = k[1456] | 0;if (!(c >>> 0 >= q >>> 0 & d >>> 0 >= q >>> 0)) ya();k[c + 12 >> 2] = r;k[a >> 2] = r;k[r + 8 >> 2] = c;k[r + 12 >> 2] = d;k[r + 24 >> 2] = 0;return;
      }
    }function Qd(a) {
      a = a | 0;var b = 0;b = (a | 0) == 0 ? 1 : a;while (1) {
        a = Ld(b) | 0;if (a | 0) break;a = me() | 0;if (!a) {
          a = 0;break;
        }Ua[a & 1]();
      }return a | 0;
    }function Rd(a) {
      a = a | 0;return Qd(a) | 0;
    }function Sd(a) {
      a = a | 0;Md(a);return;
    }function Td(a) {
      a = a | 0;Sd(a);return;
    }function Ud(a) {
      a = a | 0;return;
    }function Vd(a) {
      a = a | 0;Ud(a);Sd(a);return;
    }function Wd(a) {
      a = a | 0;return;
    }function Xd(a) {
      a = a | 0;return;
    }function Yd(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0;g = u;u = u + 64 | 0;e = g;if (!(ae(a, b, 0) | 0)) {
        if ((b | 0) != 0 ? (f = ee(b, 96, 80, 0) | 0, (f | 0) != 0) : 0) {
          b = e + 4 | 0;d = b + 52 | 0;do {
            k[b >> 2] = 0;b = b + 4 | 0;
          } while ((b | 0) < (d | 0));k[e >> 2] = f;k[e + 8 >> 2] = a;k[e + 12 >> 2] = -1;k[e + 48 >> 2] = 1;Xa[k[(k[f >> 2] | 0) + 28 >> 2] & 3](f, e, k[c >> 2] | 0, 1);if ((k[e + 24 >> 2] | 0) == 1) {
            k[c >> 2] = k[e + 16 >> 2];b = 1;
          } else b = 0;
        } else b = 0;
      } else b = 1;u = g;return b | 0;
    }function Zd(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;if (ae(a, k[b + 8 >> 2] | 0, f) | 0) de(0, b, c, d, e);return;
    }function _d(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0;do {
        if (!(ae(a, k[b + 8 >> 2] | 0, e) | 0)) {
          if (ae(a, k[b >> 2] | 0, e) | 0) {
            a = b + 32 | 0;if ((k[b + 16 >> 2] | 0) != (c | 0) ? (f = b + 20 | 0, (k[f >> 2] | 0) != (c | 0)) : 0) {
              k[a >> 2] = d;k[f >> 2] = c;d = b + 40 | 0;k[d >> 2] = (k[d >> 2] | 0) + 1;if ((k[b + 36 >> 2] | 0) == 1 ? (k[b + 24 >> 2] | 0) == 2 : 0) i[b + 54 >> 0] = 1;k[b + 44 >> 2] = 4;break;
            }if ((d | 0) == 1) k[a >> 2] = 1;
          }
        } else ce(0, b, c, d);
      } while (0);return;
    }function $d(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;if (ae(a, k[b + 8 >> 2] | 0, 0) | 0) be(0, b, c, d);return;
    }function ae(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return (a | 0) == (b | 0) | 0;
    }function be(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0;a = b + 16 | 0;e = k[a >> 2] | 0;f = b + 36 | 0;g = b + 24 | 0;do {
        if (e) {
          if ((e | 0) != (c | 0)) {
            k[f >> 2] = (k[f >> 2] | 0) + 1;k[g >> 2] = 2;i[b + 54 >> 0] = 1;break;
          }if ((k[g >> 2] | 0) == 2) k[g >> 2] = d;
        } else {
          k[a >> 2] = c;k[g >> 2] = d;k[f >> 2] = 1;
        }
      } while (0);return;
    }function ce(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0;if ((k[b + 4 >> 2] | 0) == (c | 0) ? (e = b + 28 | 0, (k[e >> 2] | 0) != 1) : 0) k[e >> 2] = d;return;
    }function de(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          j = 0;i[b + 53 >> 0] = 1;do {
        if ((k[b + 4 >> 2] | 0) == (d | 0)) {
          i[b + 52 >> 0] = 1;d = b + 16 | 0;f = k[d >> 2] | 0;h = b + 54 | 0;j = b + 48 | 0;g = b + 24 | 0;a = b + 36 | 0;if (!f) {
            k[d >> 2] = c;k[g >> 2] = e;k[a >> 2] = 1;if (!((k[j >> 2] | 0) == 1 & (e | 0) == 1)) break;i[h >> 0] = 1;break;
          }if ((f | 0) != (c | 0)) {
            k[a >> 2] = (k[a >> 2] | 0) + 1;i[h >> 0] = 1;break;
          }a = k[g >> 2] | 0;if ((a | 0) == 2) {
            k[g >> 2] = e;a = e;
          }if ((k[j >> 2] | 0) == 1 & (a | 0) == 1) i[h >> 0] = 1;
        }
      } while (0);return;
    }function ee(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0;p = u;u = u + 64 | 0;n = p;m = k[a >> 2] | 0;o = a + (k[m + -8 >> 2] | 0) | 0;m = k[m + -4 >> 2] | 0;k[n >> 2] = c;k[n + 4 >> 2] = a;k[n + 8 >> 2] = b;k[n + 12 >> 2] = d;a = n + 16 | 0;b = n + 20 | 0;d = n + 24 | 0;e = n + 28 | 0;f = n + 32 | 0;g = n + 40 | 0;h = a;l = h + 36 | 0;do {
        k[h >> 2] = 0;h = h + 4 | 0;
      } while ((h | 0) < (l | 0));j[a + 36 >> 1] = 0;i[a + 38 >> 0] = 0;a: do {
        if (ae(m, c, 0) | 0) {
          k[n + 48 >> 2] = 1;Va[k[(k[m >> 2] | 0) + 20 >> 2] & 3](m, n, o, o, 1, 0);a = (k[d >> 2] | 0) == 1 ? o : 0;
        } else {
          Qa[k[(k[m >> 2] | 0) + 24 >> 2] & 3](m, n, o, 1, 0);switch (k[n + 36 >> 2] | 0) {case 0:
              {
                a = (k[g >> 2] | 0) == 1 & (k[e >> 2] | 0) == 1 & (k[f >> 2] | 0) == 1 ? k[b >> 2] | 0 : 0;break a;
              }case 1:
              break;default:
              {
                a = 0;break a;
              }}if ((k[d >> 2] | 0) != 1 ? !((k[g >> 2] | 0) == 0 & (k[e >> 2] | 0) == 1 & (k[f >> 2] | 0) == 1) : 0) {
            a = 0;break;
          }a = k[a >> 2] | 0;
        }
      } while (0);u = p;return a | 0;
    }function fe(a) {
      a = a | 0;Ud(a);Sd(a);return;
    }function ge(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;if (ae(a, k[b + 8 >> 2] | 0, f) | 0) de(0, b, c, d, e);else {
        a = k[a + 8 >> 2] | 0;Va[k[(k[a >> 2] | 0) + 20 >> 2] & 3](a, b, c, d, e, f);
      }return;
    }function he(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          j = 0;do {
        if (!(ae(a, k[b + 8 >> 2] | 0, e) | 0)) {
          f = a + 8 | 0;if (!(ae(a, k[b >> 2] | 0, e) | 0)) {
            h = k[f >> 2] | 0;Qa[k[(k[h >> 2] | 0) + 24 >> 2] & 3](h, b, c, d, e);break;
          }a = b + 32 | 0;if ((k[b + 16 >> 2] | 0) != (c | 0) ? (g = b + 20 | 0, (k[g >> 2] | 0) != (c | 0)) : 0) {
            k[a >> 2] = d;d = b + 44 | 0;if ((k[d >> 2] | 0) == 4) break;a = b + 52 | 0;i[a >> 0] = 0;j = b + 53 | 0;i[j >> 0] = 0;f = k[f >> 2] | 0;Va[k[(k[f >> 2] | 0) + 20 >> 2] & 3](f, b, c, c, 1, e);if (i[j >> 0] | 0) {
              if (!(i[a >> 0] | 0)) {
                a = 3;h = 11;
              } else a = 3;
            } else {
              a = 4;h = 11;
            }if ((h | 0) == 11) {
              k[g >> 2] = c;j = b + 40 | 0;k[j >> 2] = (k[j >> 2] | 0) + 1;if ((k[b + 36 >> 2] | 0) == 1 ? (k[b + 24 >> 2] | 0) == 2 : 0) i[b + 54 >> 0] = 1;
            }k[d >> 2] = a;break;
          }if ((d | 0) == 1) k[a >> 2] = 1;
        } else ce(0, b, c, d);
      } while (0);return;
    }function ie(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;if (ae(a, k[b + 8 >> 2] | 0, 0) | 0) be(0, b, c, d);else {
        a = k[a + 8 >> 2] | 0;Xa[k[(k[a >> 2] | 0) + 28 >> 2] & 3](a, b, c, d);
      }return;
    }function ke(a) {
      a = a | 0;if ((i[a >> 0] | 0) == 1) a = 0;else {
        i[a >> 0] = 1;a = 1;
      }return a | 0;
    }function me() {
      var a = 0;a = k[1576] | 0;k[1576] = a + 0;return a | 0;
    }function ne() {}function oe(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;return (N = d, a - c >>> 0 | 0) | 0;
    }function pe(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;c = a + c >>> 0;return (N = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
    }function qe(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0;f = a + c | 0;b = b & 255;if ((c | 0) >= 67) {
        while (a & 3) {
          i[a >> 0] = b;a = a + 1 | 0;
        }d = f & -4 | 0;e = d - 64 | 0;g = b | b << 8 | b << 16 | b << 24;while ((a | 0) <= (e | 0)) {
          k[a >> 2] = g;k[a + 4 >> 2] = g;k[a + 8 >> 2] = g;k[a + 12 >> 2] = g;k[a + 16 >> 2] = g;k[a + 20 >> 2] = g;k[a + 24 >> 2] = g;k[a + 28 >> 2] = g;k[a + 32 >> 2] = g;k[a + 36 >> 2] = g;k[a + 40 >> 2] = g;k[a + 44 >> 2] = g;k[a + 48 >> 2] = g;k[a + 52 >> 2] = g;k[a + 56 >> 2] = g;k[a + 60 >> 2] = g;a = a + 64 | 0;
        }while ((a | 0) < (d | 0)) {
          k[a >> 2] = g;a = a + 4 | 0;
        }
      }while ((a | 0) < (f | 0)) {
        i[a >> 0] = b;a = a + 1 | 0;
      }return f - c | 0;
    }function re(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;if ((c | 0) < 32) {
        N = b >>> c;return a >>> c | (b & (1 << c) - 1) << 32 - c;
      }N = 0;return b >>> c - 32 | 0;
    }function se(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;if ((c | 0) < 32) {
        N = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;return a << c;
      }N = a << c - 32;return 0;
    }function te(a) {
      a = a | 0;var b = 0;b = i[w + (a & 255) >> 0] | 0;if ((b | 0) < 8) return b | 0;b = i[w + (a >> 8 & 255) >> 0] | 0;if ((b | 0) < 8) return b + 8 | 0;b = i[w + (a >> 16 & 255) >> 0] | 0;if ((b | 0) < 8) return b + 16 | 0;return (i[w + (a >>> 24) >> 0] | 0) + 24 | 0;
    }function ue(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0;l = a;i = b;j = i;g = c;n = d;h = n;if (!j) {
        f = (e | 0) != 0;if (!h) {
          if (f) {
            k[e >> 2] = (l >>> 0) % (g >>> 0);k[e + 4 >> 2] = 0;
          }n = 0;e = (l >>> 0) / (g >>> 0) >>> 0;return (N = n, e) | 0;
        } else {
          if (!f) {
            n = 0;e = 0;return (N = n, e) | 0;
          }k[e >> 2] = a | 0;k[e + 4 >> 2] = b & 0;n = 0;e = 0;return (N = n, e) | 0;
        }
      }f = (h | 0) == 0;do {
        if (g) {
          if (!f) {
            f = (da(h | 0) | 0) - (da(j | 0) | 0) | 0;if (f >>> 0 <= 31) {
              m = f + 1 | 0;h = 31 - f | 0;b = f - 31 >> 31;g = m;a = l >>> (m >>> 0) & b | j << h;b = j >>> (m >>> 0) & b;f = 0;h = l << h;break;
            }if (!e) {
              n = 0;e = 0;return (N = n, e) | 0;
            }k[e >> 2] = a | 0;k[e + 4 >> 2] = i | b & 0;n = 0;e = 0;return (N = n, e) | 0;
          }f = g - 1 | 0;if (f & g | 0) {
            h = (da(g | 0) | 0) + 33 - (da(j | 0) | 0) | 0;p = 64 - h | 0;m = 32 - h | 0;i = m >> 31;o = h - 32 | 0;b = o >> 31;g = h;a = m - 1 >> 31 & j >>> (o >>> 0) | (j << m | l >>> (h >>> 0)) & b;b = b & j >>> (h >>> 0);f = l << p & i;h = (j << p | l >>> (o >>> 0)) & i | l << m & h - 33 >> 31;break;
          }if (e | 0) {
            k[e >> 2] = f & l;k[e + 4 >> 2] = 0;
          }if ((g | 0) == 1) {
            o = i | b & 0;p = a | 0 | 0;return (N = o, p) | 0;
          } else {
            p = te(g | 0) | 0;o = j >>> (p >>> 0) | 0;p = j << 32 - p | l >>> (p >>> 0) | 0;return (N = o, p) | 0;
          }
        } else {
          if (f) {
            if (e | 0) {
              k[e >> 2] = (j >>> 0) % (g >>> 0);k[e + 4 >> 2] = 0;
            }o = 0;p = (j >>> 0) / (g >>> 0) >>> 0;return (N = o, p) | 0;
          }if (!l) {
            if (e | 0) {
              k[e >> 2] = 0;k[e + 4 >> 2] = (j >>> 0) % (h >>> 0);
            }o = 0;p = (j >>> 0) / (h >>> 0) >>> 0;return (N = o, p) | 0;
          }f = h - 1 | 0;if (!(f & h)) {
            if (e | 0) {
              k[e >> 2] = a | 0;k[e + 4 >> 2] = f & j | b & 0;
            }o = 0;p = j >>> ((te(h | 0) | 0) >>> 0);return (N = o, p) | 0;
          }f = (da(h | 0) | 0) - (da(j | 0) | 0) | 0;if (f >>> 0 <= 30) {
            b = f + 1 | 0;h = 31 - f | 0;g = b;a = j << h | l >>> (b >>> 0);b = j >>> (b >>> 0);f = 0;h = l << h;break;
          }if (!e) {
            o = 0;p = 0;return (N = o, p) | 0;
          }k[e >> 2] = a | 0;k[e + 4 >> 2] = i | b & 0;o = 0;p = 0;return (N = o, p) | 0;
        }
      } while (0);if (!g) {
        j = h;i = 0;h = 0;
      } else {
        m = c | 0 | 0;l = n | d & 0;j = pe(m | 0, l | 0, -1, -1) | 0;c = N;i = h;h = 0;do {
          d = i;i = f >>> 31 | i << 1;f = h | f << 1;d = a << 1 | d >>> 31 | 0;n = a >>> 31 | b << 1 | 0;oe(j | 0, c | 0, d | 0, n | 0) | 0;p = N;o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;h = o & 1;a = oe(d | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;b = N;g = g - 1 | 0;
        } while ((g | 0) != 0);j = i;i = 0;
      }g = 0;if (e | 0) {
        k[e >> 2] = a;k[e + 4 >> 2] = b;
      }o = (f | 0) >>> 31 | (j | g) << 1 | (g << 1 | f >>> 31) & 0 | i;p = (f << 1 | 0 >>> 31) & -2 | h;return (N = o, p) | 0;
    }function ve(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;return ue(a, b, c, d, 0) | 0;
    }function we(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0;f = a & 65535;e = b & 65535;c = aa(e, f) | 0;d = a >>> 16;a = (c >>> 16) + (aa(e, d) | 0) | 0;e = b >>> 16;b = aa(e, f) | 0;return (N = (a >>> 16) + (aa(e, d) | 0) + (((a & 65535) + b | 0) >>> 16) | 0, a + b << 16 | c & 65535 | 0) | 0;
    }function xe(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0;e = a;f = c;c = we(e, f) | 0;a = N;return (N = (aa(b, f) | 0) + (aa(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
    }function ye(a) {
      a = a | 0;var b = 0,
          c = 0;c = a + 15 & -16 | 0;b = k[r >> 2] | 0;a = b + c | 0;if ((c | 0) > 0 & (a | 0) < (b | 0) | (a | 0) < 0) {
        ia() | 0;za(12);return -1;
      }k[r >> 2] = a;if ((a | 0) > (ha() | 0) ? (ga() | 0) == 0 : 0) {
        za(12);k[r >> 2] = b;return -1;
      }return b | 0;
    }function ze(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0;f = u;u = u + 16 | 0;e = f | 0;ue(a, b, c, d, e) | 0;u = f;return (N = k[e + 4 >> 2] | 0, k[e >> 2] | 0) | 0;
    }function Ae(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0;if ((c | 0) >= 8192) return Da(a | 0, b | 0, c | 0) | 0;f = a | 0;e = a + c | 0;if ((a & 3) == (b & 3)) {
        while (a & 3) {
          if (!c) return f | 0;i[a >> 0] = i[b >> 0] | 0;a = a + 1 | 0;b = b + 1 | 0;c = c - 1 | 0;
        }c = e & -4 | 0;d = c - 64 | 0;while ((a | 0) <= (d | 0)) {
          k[a >> 2] = k[b >> 2];k[a + 4 >> 2] = k[b + 4 >> 2];k[a + 8 >> 2] = k[b + 8 >> 2];k[a + 12 >> 2] = k[b + 12 >> 2];k[a + 16 >> 2] = k[b + 16 >> 2];k[a + 20 >> 2] = k[b + 20 >> 2];k[a + 24 >> 2] = k[b + 24 >> 2];k[a + 28 >> 2] = k[b + 28 >> 2];k[a + 32 >> 2] = k[b + 32 >> 2];k[a + 36 >> 2] = k[b + 36 >> 2];k[a + 40 >> 2] = k[b + 40 >> 2];k[a + 44 >> 2] = k[b + 44 >> 2];k[a + 48 >> 2] = k[b + 48 >> 2];k[a + 52 >> 2] = k[b + 52 >> 2];k[a + 56 >> 2] = k[b + 56 >> 2];k[a + 60 >> 2] = k[b + 60 >> 2];a = a + 64 | 0;b = b + 64 | 0;
        }while ((a | 0) < (c | 0)) {
          k[a >> 2] = k[b >> 2];a = a + 4 | 0;b = b + 4 | 0;
        }
      } else {
        c = e - 4 | 0;while ((a | 0) < (c | 0)) {
          i[a >> 0] = i[b >> 0] | 0;i[a + 1 >> 0] = i[b + 1 >> 0] | 0;i[a + 2 >> 0] = i[b + 2 >> 0] | 0;i[a + 3 >> 0] = i[b + 3 >> 0] | 0;a = a + 4 | 0;b = b + 4 | 0;
        }
      }while ((a | 0) < (e | 0)) {
        i[a >> 0] = i[b >> 0] | 0;a = a + 1 | 0;b = b + 1 | 0;
      }return f | 0;
    }function Be(a) {
      a = a | 0;return (a & 255) << 24 | (a >> 8 & 255) << 16 | (a >> 16 & 255) << 8 | a >>> 24 | 0;
    }function Ce(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;return Pa[a & 7](b | 0, c | 0, d | 0) | 0;
    }function De(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;Qa[a & 3](b | 0, c | 0, d | 0, e | 0, f | 0);
    }function Ee(a, b) {
      a = a | 0;b = b | 0;Ra[a & 15](b | 0);
    }function Fe(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;Sa[a & 3](b | 0, c | 0);
    }function Ge(a, b) {
      a = a | 0;b = b | 0;return Ta[a & 1](b | 0) | 0;
    }function He(a) {
      a = a | 0;Ua[a & 1]();
    }function Ie(a, b, c, d, e, f, g) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;Va[a & 3](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0);
    }function Je(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return Wa[a & 3](b | 0, c | 0) | 0;
    }function Ke(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;Xa[a & 3](b | 0, c | 0, d | 0, e | 0);
    }function Le(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;ea(0);return 0;
    }function Me(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;ea(1);
    }function Ne(a) {
      a = a | 0;ea(2);
    }function Oe(a, b) {
      a = a | 0;b = b | 0;ea(3);
    }function Pe(a) {
      a = a | 0;ea(4);return 0;
    }function Qe() {
      ea(5);
    }function Re() {
      Ka();
    }function Se(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;ea(6);
    }function Te(a, b) {
      a = a | 0;b = b | 0;ea(7);return 0;
    }function Ue(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;ea(8);
    }

    // EMSCRIPTEN_END_FUNCS
    var Pa = [Le, uc, vc, Bc, Yd, Le, Le, Le];var Qa = [Me, _d, he, Me];var Ra = [Ne, Bb, Cb, Db, Jb, Qb, Nb, Kb, Ub, Ud, Vd, Wd, Xd, fe, Tb, Ne];var Sa = [Oe, Sb, Pb, Mb];var Ta = [Pe, tc];var Ua = [Qe, Re];var Va = [Se, Zd, ge, Se];var Wa = [Te, Rb, Ob, Lb];var Xa = [Ue, $d, ie, Ue];return _ref = { _conflictSize: wb, _Solver_delete: eb, _memset: qe, _modelValue: tb, _bitshift64Lshr: re, _solve_assumptions: qb, _solve: pb, _bitshift64Shl: se, _fflush: pd, _Solver_new: db, _getImplies_assumptions: zb, _nClauses: gb, _sbrk: ye, _getModelTrues: vb, _check_complete: rb, _memcpy: Ae, _llvm_bswap_i32: Be, _newVar: lb, ___muldi3: xe, _unsatCore: xb, _setRndSeed: kb, ___uremdi3: ze, _addUnit: ob, _addClause: mb, _i64Subtract: oe, ___udivmoddi4: ue, _i64Add: pe, _emscripten_get_global_libc: Cc, _setPhaseSaving: hb, _fillModel: ub, ___udivdi3: ve, ___errno_location: xc, ___muldsi3: we, _free: Md, _llvm_cttz_i32: te, _malloc: Ld, _setRndInitAct: jb, _setRndPol: ib, _nVars: fb, _getImplies: yb, _simplify: sb, __GLOBAL__sub_I_Solver_cc: Hb, runPostSets: ne, _emscripten_replace_memory: Oa, stackAlloc: Ya, stackSave: Za, stackRestore: _a, establishStackSpace: $a, setTempRet0: bb, getTempRet0: cb, setThrew: ab }, defineProperty(_ref, "stackAlloc", Ya), defineProperty(_ref, "stackSave", Za), defineProperty(_ref, "stackRestore", _a), defineProperty(_ref, "establishStackSpace", $a), defineProperty(_ref, "setThrew", ab), defineProperty(_ref, "setTempRet0", bb), defineProperty(_ref, "getTempRet0", cb), defineProperty(_ref, "dynCall_iiii", Ce), defineProperty(_ref, "dynCall_viiiii", De), defineProperty(_ref, "dynCall_vi", Ee), defineProperty(_ref, "dynCall_vii", Fe), defineProperty(_ref, "dynCall_ii", Ge), defineProperty(_ref, "dynCall_v", He), defineProperty(_ref, "dynCall_viiiiii", Ie), defineProperty(_ref, "dynCall_iii", Je), defineProperty(_ref, "dynCall_viiii", Ke), _ref;
  }(

  // EMSCRIPTEN_END_ASM
  _b2.B, _b2.C, buffer);_b2._conflictSize = Z._conflictSize;_b2.stackSave = Z.stackSave;_b2.getTempRet0 = Z.getTempRet0;_b2._Solver_delete = Z._Solver_delete;var mb = _b2.___udivdi3 = Z.___udivdi3;_b2._modelValue = Z._modelValue;var gb = _b2._bitshift64Lshr = Z._bitshift64Lshr;_b2._solve_assumptions = Z._solve_assumptions;
  _b2._solve = Z._solve;var hb = _b2._bitshift64Shl = Z._bitshift64Shl;_b2._addClause = Z._addClause;_b2._fflush = Z._fflush;_b2._Solver_new = Z._Solver_new;var fb = _b2._memset = Z._memset;_b2._nClauses = Z._nClauses;var pb = _b2._sbrk = Z._sbrk;_b2._getModelTrues = Z._getModelTrues;_b2._check_complete = Z._check_complete;var rb = _b2._memcpy = Z._memcpy;_b2.___errno_location = Z.___errno_location;var ob = _b2.___muldi3 = Z.___muldi3;_b2._unsatCore = Z._unsatCore;_b2._setRndSeed = Z._setRndSeed;var qb = _b2.___uremdi3 = Z.___uremdi3;_b2._addUnit = Z._addUnit;_b2.stackAlloc = Z.stackAlloc;
  _b2._newVar = Z._newVar;var bb = _b2._i64Subtract = Z._i64Subtract,
      lb = _b2.___udivmoddi4 = Z.___udivmoddi4;_b2.setTempRet0 = Z.setTempRet0;var cb = _b2._i64Add = Z._i64Add;_b2._emscripten_get_global_libc = Z._emscripten_get_global_libc;_b2._setPhaseSaving = Z._setPhaseSaving;_b2._fillModel = Z._fillModel;var Za = _b2.__GLOBAL__sub_I_Solver_cc = Z.__GLOBAL__sub_I_Solver_cc,
      tb = _b2._llvm_bswap_i32 = Z._llvm_bswap_i32,
      nb = _b2.___muldsi3 = Z.___muldsi3,
      ya = _b2._free = Z._free;_b2.runPostSets = Z.runPostSets;_b2.setThrew = Z.setThrew;_b2.establishStackSpace = Z.establishStackSpace;
  _b2.stackRestore = Z.stackRestore;var kb = _b2._llvm_cttz_i32 = Z._llvm_cttz_i32,
      N = _b2._malloc = Z._malloc;_b2._setRndInitAct = Z._setRndInitAct;_b2._getImplies_assumptions = Z._getImplies_assumptions;var La = _b2._emscripten_replace_memory = Z._emscripten_replace_memory;_b2._setRndPol = Z._setRndPol;_b2._nVars = Z._nVars;_b2._simplify = Z._simplify;_b2._getImplies = Z._getImplies;_b2.dynCall_iiii = Z.dynCall_iiii;_b2.dynCall_viiiii = Z.dynCall_viiiii;_b2.dynCall_vi = Z.dynCall_vi;_b2.dynCall_vii = Z.dynCall_vii;_b2.dynCall_ii = Z.dynCall_ii;_b2.dynCall_v = Z.dynCall_v;
  _b2.dynCall_viiiiii = Z.dynCall_viiiiii;_b2.dynCall_iii = Z.dynCall_iii;_b2.dynCall_viiii = Z.dynCall_viiii;x.g = _b2.stackAlloc;x.n = _b2.stackSave;x.h = _b2.stackRestore;x.Q = _b2.establishStackSpace;x.c = _b2.setTempRet0;x.G = _b2.getTempRet0;_b2.asm = Z;function r(a) {
    this.name = "ExitStatus";this.message = "Program terminated with exit(" + a + ")";this.status = a;
  }r.prototype = Error();r.prototype.constructor = r;var vb = null,
      T = function wb() {
    _b2.calledRun || xb();_b2.calledRun || (T = wb);
  };
  _b2.callMain = _b2.M = function (a) {
    function c() {
      for (var a = 0; 3 > a; a++) {
        e.push(0);
      }
    }a = a || [];P || (P = !0, Q(Qa));var d = a.length + 1,
        e = [K(Wa(_b2.thisProgram), "i8", 0)];c();for (var f = 0; f < d - 1; f += 1) {
      e.push(K(Wa(a[f]), "i8", 0)), c();
    }e.push(0);e = K(e, "i32", 0);try {
      var l = _b2._main(d, e, 0);yb(l, !0);
    } catch (h) {
      h instanceof r || ("SimulateInfiniteLoop" == h ? _b2.noExitRuntime = !0 : ((a = h) && "object" === (typeof h === "undefined" ? "undefined" : _typeof(h)) && h.stack && (a = [h, h.stack]), _b2.f("exception thrown: " + a), _b2.quit(1, h)));
    } finally {}
  };
  function xb(a) {
    function c() {
      if (!_b2.calledRun && (_b2.calledRun = !0, !C)) {
        P || (P = !0, Q(Qa));Q(Ra);if (_b2.onRuntimeInitialized) _b2.onRuntimeInitialized();_b2._main && zb && _b2.callMain(a);if (_b2.postRun) for ("function" == typeof _b2.postRun && (_b2.postRun = [_b2.postRun]); _b2.postRun.length;) {
          Va(_b2.postRun.shift());
        }Q(Ta);
      }
    }a = a || _b2.arguments;null === vb && (vb = Date.now());if (!(0 < R)) {
      if (_b2.preRun) for ("function" == typeof _b2.preRun && (_b2.preRun = [_b2.preRun]); _b2.preRun.length;) {
        Ua(_b2.preRun.shift());
      }Q(Pa);0 < R || _b2.calledRun || (_b2.setStatus ? (_b2.setStatus("Running..."), setTimeout(function () {
        setTimeout(function () {
          _b2.setStatus("");
        }, 1);c();
      }, 1)) : c());
    }
  }_b2.run = _b2.run = xb;function yb(a, c) {
    if (!c || !_b2.noExitRuntime) {
      if (!_b2.noExitRuntime && (C = !0, u = void 0, Q(Sa), _b2.onExit)) _b2.onExit(a);q && process.exit(a);_b2.quit(a, new r(a));
    }
  }_b2.exit = _b2.exit = yb;var Ab = [];
  function D(a) {
    void 0 !== a ? (_b2.print(a), _b2.f(a), a = JSON.stringify(a)) : a = "";C = !0;var c = "abort(" + a + ") at " + za() + "\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";Ab && Ab.forEach(function (d) {
      c = d(c, a);
    });throw c;
  }_b2.abort = _b2.abort = D;if (_b2.preInit) for ("function" == typeof _b2.preInit && (_b2.preInit = [_b2.preInit]); 0 < _b2.preInit.length;) {
    _b2.preInit.pop()();
  }var zb = !0;_b2.noInitialRun && (zb = !1);xb();"undefined" !== 'object' && (module.exports = _b2);
});

var libminicard = createCommonjsModule(function (module) {
  var _b2;_b2 || (_b2 = eval("(function() { try { return Module || {} } catch(e) { return {} } })()"));var g = {},
      k;for (k in _b2) {
    _b2.hasOwnProperty(k) && (g[k] = _b2[k]);
  }var m = !1,
      p = !1,
      q = !1,
      aa = !1;
  if (_b2.ENVIRONMENT) {
    if ("WEB" === _b2.ENVIRONMENT) m = !0;else if ("WORKER" === _b2.ENVIRONMENT) p = !0;else if ("NODE" === _b2.ENVIRONMENT) q = !0;else if ("SHELL" === _b2.ENVIRONMENT) aa = !0;else throw Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.");
  } else m = "object" === (typeof window === "undefined" ? "undefined" : _typeof(window)), p = "function" === typeof importScripts, q = "object" === (typeof process === "undefined" ? "undefined" : _typeof(process)) && "function" === typeof require && !m && !p, aa = !m && !q && !p;
  if (q) {
    _b2.print || (_b2.print = console.log);_b2.printErr || (_b2.printErr = console.warn);var ba, ca;_b2.read = function (a, c) {
      ba || (ba = require("fs"));ca || (ca = require("path"));a = ca.normalize(a);var d = ba.readFileSync(a);return c ? d : d.toString();
    };_b2.readBinary = function (a) {
      a = _b2.read(a, !0);a.buffer || (a = new Uint8Array(a));assert(a.buffer);return a;
    };_b2.load = function (a) {
      da(read(a));
    };_b2.thisProgram || (_b2.thisProgram = 1 < process.argv.length ? process.argv[1].replace(/\\/g, "/") : "unknown-program");_b2.arguments = process.argv.slice(2);"undefined" !== 'object' && (module.exports = _b2);process.on("uncaughtException", function (a) {
      if (!(a instanceof r)) throw a;
    });_b2.inspect = function () {
      return "[Emscripten Module object]";
    };
  } else if (aa) _b2.print || (_b2.print = print), "undefined" != typeof printErr && (_b2.printErr = printErr), _b2.read = "undefined" != typeof read ? read : function () {
    throw "no read() available";
  }, _b2.readBinary = function (a) {
    if ("function" === typeof readbuffer) return new Uint8Array(readbuffer(a));a = read(a, "binary");assert("object" === (typeof a === "undefined" ? "undefined" : _typeof(a)));return a;
  }, "undefined" != typeof scriptArgs ? _b2.arguments = scriptArgs : "undefined" != typeof arguments && (_b2.arguments = arguments), "function" === typeof quit && (_b2.quit = function (a) {
    quit(a);
  }), eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined");else if (m || p) _b2.read = function (a) {
    var c = new XMLHttpRequest();c.open("GET", a, !1);c.send(null);return c.responseText;
  }, p && (_b2.readBinary = function (a) {
    var c = new XMLHttpRequest();c.open("GET", a, !1);c.responseType = "arraybuffer";c.send(null);return c.response;
  }), _b2.readAsync = function (a, c, d) {
    var e = new XMLHttpRequest();e.open("GET", a, !0);e.responseType = "arraybuffer";e.onload = function () {
      200 == e.status || 0 == e.status && e.response ? c(e.response) : d();
    };e.onerror = d;e.send(null);
  }, "undefined" != typeof arguments && (_b2.arguments = arguments), "undefined" !== typeof console ? (_b2.print || (_b2.print = function (a) {
    console.log(a);
  }), _b2.printErr || (_b2.printErr = function (a) {
    console.warn(a);
  })) : _b2.print || (_b2.print = function () {}), p && (_b2.load = importScripts), "undefined" === typeof _b2.setWindowTitle && (_b2.setWindowTitle = function (a) {
    document.title = a;
  });else throw "Unknown runtime environment. Where are we?";function da(a) {
    eval.call(null, a);
  }!_b2.load && _b2.read && (_b2.load = function (a) {
    da(_b2.read(a));
  });_b2.print || (_b2.print = function () {});_b2.printErr || (_b2.printErr = _b2.print);_b2.arguments || (_b2.arguments = []);_b2.thisProgram || (_b2.thisProgram = "./this.program");_b2.quit || (_b2.quit = function (a, c) {
    throw c;
  });_b2.print = _b2.print;_b2.f = _b2.printErr;_b2.preRun = [];_b2.postRun = [];for (k in g) {
    g.hasOwnProperty(k) && (_b2[k] = g[k]);
  }var g = void 0,
      x = { c: function c(a) {
      return tempRet0 = a;
    }, G: function G() {
      return tempRet0;
    }, n: function n() {
      return u;
    }, h: function h(a) {
      u = a;
    }, u: function u(a) {
      switch (a) {case "i1":case "i8":
          return 1;case "i16":
          return 2;case "i32":
          return 4;case "i64":
          return 8;case "float":
          return 4;case "double":
          return 8;default:
          return "*" === a[a.length - 1] ? x.i : "i" === a[0] ? (a = parseInt(a.substr(1)), assert(0 === a % 8), a / 8) : 0;}
    }, D: function D(a) {
      return Math.max(x.u(a), x.i);
    }, J: 16, Y: function Y(a, c) {
      "double" === c || "i64" === c ? a & 7 && (assert(4 === (a & 7)), a += 4) : assert(0 === (a & 3));return a;
    }, R: function R(a, c, d) {
      return d || "i64" != a && "double" != a ? a ? Math.min(c || (a ? x.D(a) : 0), x.i) : Math.min(c, 8) : 8;
    }, j: function j(a, c, d) {
      return d && d.length ? _b2["dynCall_" + a].apply(null, [c].concat(d)) : _b2["dynCall_" + a].call(null, c);
    }, e: [], w: function w(a) {
      for (var c = 0; c < x.e.length; c++) {
        if (!x.e[c]) return x.e[c] = a, 2 * (1 + c);
      }throw "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";
    }, I: function I(a) {
      x.e[(a - 2) / 2] = null;
    }, b: function b(a) {
      x.b.m || (x.b.m = {});x.b.m[a] || (x.b.m[a] = 1, _b2.f(a));
    },
    l: {}, T: function T(a, c) {
      assert(c);x.l[c] || (x.l[c] = {});var d = x.l[c];d[a] || (d[a] = 1 === c.length ? function () {
        return x.j(c, a);
      } : 2 === c.length ? function (d) {
        return x.j(c, a, [d]);
      } : function () {
        return x.j(c, a, Array.prototype.slice.call(arguments));
      });return d[a];
    }, S: function S() {
      throw "You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work";
    }, g: function g(a) {
      var c = u;u = u + a | 0;u = u + 15 & -16;return c;
    }, o: function o(a) {
      var c = y;y = y + a | 0;y = y + 15 & -16;return c;
    }, k: function k(a) {
      var c = z[A >> 2];a = (c + a + 15 | 0) & -16;z[A >> 2] = a;return a >= B && !ea() ? (z[A >> 2] = c, 0) : c;
    }, q: function q(a, c) {
      return Math.ceil(a / (c ? c : 16)) * (c ? c : 16);
    }, X: function X(a, c, d) {
      return d ? +(a >>> 0) + 4294967296 * +(c >>> 0) : +(a >>> 0) + 4294967296 * +(c | 0);
    }, v: 8, i: 4, K: 0 };_b2.Runtime = x;x.addFunction = x.w;x.removeFunction = x.I;var C = 0;function assert(a, c) {
    a || D("Assertion failed: " + c);
  }
  function fa(a) {
    var c = _b2["_" + a];if (!c) try {
      c = eval("_" + a);
    } catch (d) {}assert(c, "Cannot call unknown function " + a + " (perhaps LLVM optimizations or closure removed it?)");return c;
  }var ga, ha;
  (function () {
    function a(a) {
      a = a.toString().match(f).slice(1);return { arguments: a[0], body: a[1], returnValue: a[2] };
    }function c() {
      if (!l) {
        l = {};for (var c in d) {
          d.hasOwnProperty(c) && (l[c] = a(d[c]));
        }
      }
    }var d = { stackSave: function stackSave() {
        x.n();
      }, stackRestore: function stackRestore() {
        x.h();
      }, arrayToC: function arrayToC(a) {
        var c = x.g(a.length);ia(a, c);return c;
      }, stringToC: function stringToC(a) {
        var c = 0;if (null !== a && void 0 !== a && 0 !== a) {
          var d = (a.length << 2) + 1,
              c = x.g(d);G(a, c, d);
        }return c;
      } },
        e = { string: d.stringToC, array: d.arrayToC };ha = function ha(a, c, d, f, l) {
      a = fa(a);var E = [],
          F = 0;if (f) for (var w = 0; w < f.length; w++) {
        var S = e[d[w]];S ? (0 === F && (F = x.n()), E[w] = S(f[w])) : E[w] = f[w];
      }d = a.apply(null, E);"string" === c && (d = H(d));if (0 !== F) {
        if (l && l.async) {
          EmterpreterAsync.L.push(function () {
            x.h(F);
          });return;
        }x.h(F);
      }return d;
    };var f = /^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/,
        l = null;ga = function ga(d, e, f) {
      f = f || [];var v = fa(d);d = f.every(function (a) {
        return "number" === a;
      });var L = "string" !== e;if (L && d) return v;var E = f.map(function (a, c) {
        return "$" + c;
      });e = "(function(" + E.join(",") + ") {";var F = f.length;if (!d) {
        c();e += "var stack = " + l.stackSave.body + ";";for (var w = 0; w < F; w++) {
          var S = E[w],
              M = f[w];"number" !== M && (M = l[M + "ToC"], e += "var " + M.arguments + " = " + S + ";", e += M.body + ";", e += S + "=(" + M.returnValue + ");");
        }
      }f = a(function () {
        return v;
      }).returnValue;e += "var ret = " + f + "(" + E.join(",") + ");";L || (f = a(function () {
        return H;
      }).returnValue, e += "ret = " + f + "(ret);");d || (c(), e += l.stackRestore.body.replace("()", "(stack)") + ";");return eval(e + "return ret})");
    };
  })();_b2.ccall = ha;_b2.cwrap = ga;
  function ja(a, c, d) {
    d = d || "i8";"*" === d.charAt(d.length - 1) && (d = "i32");switch (d) {case "i1":
        I[a >> 0] = c;break;case "i8":
        I[a >> 0] = c;break;case "i16":
        J[a >> 1] = c;break;case "i32":
        z[a >> 2] = c;break;case "i64":
        tempI64 = [c >>> 0, (tempDouble = c, 1 <= +ka(tempDouble) ? 0 < tempDouble ? (la(+ma(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+na((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)];z[a >> 2] = tempI64[0];z[a + 4 >> 2] = tempI64[1];break;case "float":
        oa[a >> 2] = c;break;case "double":
        pa[a >> 3] = c;break;default:
        D("invalid type for setValue: " + d);}
  }_b2.setValue = ja;function qa(a, c) {
    c = c || "i8";"*" === c.charAt(c.length - 1) && (c = "i32");switch (c) {case "i1":
        return I[a >> 0];case "i8":
        return I[a >> 0];case "i16":
        return J[a >> 1];case "i32":
        return z[a >> 2];case "i64":
        return z[a >> 2];case "float":
        return oa[a >> 2];case "double":
        return pa[a >> 3];default:
        D("invalid type for setValue: " + c);}return null;
  }_b2.getValue = qa;_b2.ALLOC_NORMAL = 0;_b2.ALLOC_STACK = 1;_b2.ALLOC_STATIC = 2;_b2.ALLOC_DYNAMIC = 3;_b2.ALLOC_NONE = 4;
  function K(a, c, d, e) {
    var f, l;"number" === typeof a ? (f = !0, l = a) : (f = !1, l = a.length);var h = "string" === typeof c ? c : null;d = 4 == d ? e : ["function" === typeof N ? N : x.o, x.g, x.o, x.k][void 0 === d ? 2 : d](Math.max(l, h ? 1 : c.length));if (f) {
      e = d;assert(0 == (d & 3));for (a = d + (l & -4); e < a; e += 4) {
        z[e >> 2] = 0;
      }for (a = d + l; e < a;) {
        I[e++ >> 0] = 0;
      }return d;
    }if ("i8" === h) return a.subarray || a.slice ? O.set(a, d) : O.set(new Uint8Array(a), d), d;e = 0;for (var n, t; e < l;) {
      var v = a[e];"function" === typeof v && (v = x.U(v));f = h || c[e];0 === f ? e++ : ("i64" == f && (f = "i32"), ja(d + e, v, f), t !== f && (n = x.u(f), t = f), e += n);
    }return d;
  }_b2.allocate = K;_b2.getMemory = function (a) {
    return ra ? P ? N(a) : x.k(a) : x.o(a);
  };function H(a, c) {
    if (0 === c || !a) return "";for (var d = 0, e, f = 0;;) {
      e = O[a + f >> 0];d |= e;if (0 == e && !c) break;f++;if (c && f == c) break;
    }c || (c = f);e = "";if (128 > d) {
      for (; 0 < c;) {
        d = String.fromCharCode.apply(String, O.subarray(a, a + Math.min(c, 1024))), e = e ? e + d : d, a += 1024, c -= 1024;
      }return e;
    }return _b2.UTF8ToString(a);
  }_b2.Pointer_stringify = H;_b2.AsciiToString = function (a) {
    for (var c = "";;) {
      var d = I[a++ >> 0];if (!d) return c;c += String.fromCharCode(d);
    }
  };
  _b2.stringToAscii = function (a, c) {
    return sa(a, c, !1);
  };var ta = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
  function ua(a, c) {
    for (var d = c; a[d];) {
      ++d;
    }if (16 < d - c && a.subarray && ta) return ta.decode(a.subarray(c, d));for (var e, f, l, h, n, t, d = "";;) {
      e = a[c++];if (!e) return d;e & 128 ? (f = a[c++] & 63, 192 == (e & 224) ? d += String.fromCharCode((e & 31) << 6 | f) : (l = a[c++] & 63, 224 == (e & 240) ? e = (e & 15) << 12 | f << 6 | l : (h = a[c++] & 63, 240 == (e & 248) ? e = (e & 7) << 18 | f << 12 | l << 6 | h : (n = a[c++] & 63, 248 == (e & 252) ? e = (e & 3) << 24 | f << 18 | l << 12 | h << 6 | n : (t = a[c++] & 63, e = (e & 1) << 30 | f << 24 | l << 18 | h << 12 | n << 6 | t))), 65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023)))) : d += String.fromCharCode(e);
    }
  }_b2.UTF8ArrayToString = ua;_b2.UTF8ToString = function (a) {
    return ua(O, a);
  };
  function va(a, c, d, e) {
    if (!(0 < e)) return 0;var f = d;e = d + e - 1;for (var l = 0; l < a.length; ++l) {
      var h = a.charCodeAt(l);55296 <= h && 57343 >= h && (h = 65536 + ((h & 1023) << 10) | a.charCodeAt(++l) & 1023);if (127 >= h) {
        if (d >= e) break;c[d++] = h;
      } else {
        if (2047 >= h) {
          if (d + 1 >= e) break;c[d++] = 192 | h >> 6;
        } else {
          if (65535 >= h) {
            if (d + 2 >= e) break;c[d++] = 224 | h >> 12;
          } else {
            if (2097151 >= h) {
              if (d + 3 >= e) break;c[d++] = 240 | h >> 18;
            } else {
              if (67108863 >= h) {
                if (d + 4 >= e) break;c[d++] = 248 | h >> 24;
              } else {
                if (d + 5 >= e) break;c[d++] = 252 | h >> 30;c[d++] = 128 | h >> 24 & 63;
              }c[d++] = 128 | h >> 18 & 63;
            }c[d++] = 128 | h >> 12 & 63;
          }c[d++] = 128 | h >> 6 & 63;
        }c[d++] = 128 | h & 63;
      }
    }c[d] = 0;return d - f;
  }_b2.stringToUTF8Array = va;function G(a, c, d) {
    return va(a, O, c, d);
  }_b2.stringToUTF8 = G;function wa(a) {
    for (var c = 0, d = 0; d < a.length; ++d) {
      var e = a.charCodeAt(d);55296 <= e && 57343 >= e && (e = 65536 + ((e & 1023) << 10) | a.charCodeAt(++d) & 1023);127 >= e ? ++c : c = 2047 >= e ? c + 2 : 65535 >= e ? c + 3 : 2097151 >= e ? c + 4 : 67108863 >= e ? c + 5 : c + 6;
    }return c;
  }_b2.lengthBytesUTF8 = wa;"undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");
  function xa(a) {
    return a.replace(/__Z[\w\d_]+/g, function (a) {
      var d;a: {
        var e = _b2.___cxa_demangle || _b2.__cxa_demangle;if (e) try {
          var f = a.substr(1),
              l = wa(f) + 1,
              h = N(l);G(f, h, l);var n = N(4),
              t = e(h, 0, 0, n);if (0 === qa(n, "i32") && t) {
            d = H(t);break a;
          }
        } catch (v) {} finally {
          h && ya(h), n && ya(n), t && ya(t);
        } else x.b("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");d = a;
      }return a === d ? a : a + " [" + d + "]";
    });
  }
  function za() {
    var a;a: {
      a = Error();if (!a.stack) {
        try {
          throw Error(0);
        } catch (c) {
          a = c;
        }if (!a.stack) {
          a = "(no stack trace available)";break a;
        }
      }a = a.stack.toString();
    }_b2.extraStackTrace && (a += "\n" + _b2.extraStackTrace());return xa(a);
  }_b2.stackTrace = za;var Aa = 65536,
      Ba = 16777216,
      Ca = 16777216;function Da(a, c) {
    0 < a % c && (a += c - a % c);return a;
  }var buffer, I, O, J, Ea, z, Fa, oa, pa;
  function Ga() {
    _b2.HEAP8 = I = new Int8Array(buffer);_b2.HEAP16 = J = new Int16Array(buffer);_b2.HEAP32 = z = new Int32Array(buffer);_b2.HEAPU8 = O = new Uint8Array(buffer);_b2.HEAPU16 = Ea = new Uint16Array(buffer);_b2.HEAPU32 = Fa = new Uint32Array(buffer);_b2.HEAPF32 = oa = new Float32Array(buffer);_b2.HEAPF64 = pa = new Float64Array(buffer);
  }var Ha, y, ra, Ia, u, Ja, Ka, A;Ha = y = Ia = u = Ja = Ka = A = 0;ra = !1;
  _b2.reallocBuffer || (_b2.reallocBuffer = function (a) {
    var c;try {
      if (ArrayBuffer.a) c = ArrayBuffer.a(buffer, a);else {
        var d = I;c = new ArrayBuffer(a);new Int8Array(c).set(d);
      }
    } catch (e) {
      return !1;
    }return La(c) ? c : !1;
  });function ea() {
    var a = _b2.usingWasm ? Aa : Ba,
        c = 2147483648 - a;if (z[A >> 2] > c) return !1;for (B = Math.max(B, Ca); B < z[A >> 2];) {
      536870912 >= B ? B = Da(2 * B, a) : B = Math.min(Da((3 * B + 2147483648) / 4, a), c);
    }a = _b2.reallocBuffer(B);if (!a || a.byteLength != B) return !1;_b2.buffer = buffer = a;Ga();return !0;
  }var Ma;
  try {
    Ma = Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get), Ma(new ArrayBuffer(4));
  } catch (Na) {
    Ma = function Ma(a) {
      return a.byteLength;
    };
  }var Oa = _b2.TOTAL_STACK || 5242880,
      B = _b2.TOTAL_MEMORY || 16777216;B < Oa && _b2.f("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + B + "! (TOTAL_STACK=" + Oa + ")");_b2.buffer ? buffer = _b2.buffer : buffer = new ArrayBuffer(B);Ga();z[0] = 1668509029;J[1] = 25459;if (115 !== O[2] || 99 !== O[3]) throw "Runtime error: expected the system to be little-endian!";
  _b2.HEAP = void 0;_b2.buffer = buffer;_b2.HEAP8 = I;_b2.HEAP16 = J;_b2.HEAP32 = z;_b2.HEAPU8 = O;_b2.HEAPU16 = Ea;_b2.HEAPU32 = Fa;_b2.HEAPF32 = oa;_b2.HEAPF64 = pa;function Q(a) {
    for (; 0 < a.length;) {
      var c = a.shift();if ("function" == typeof c) c();else {
        var d = c.t;"number" === typeof d ? void 0 === c.d ? _b2.dynCall_v(d) : _b2.dynCall_vi(d, c.d) : d(void 0 === c.d ? null : c.d);
      }
    }
  }var Pa = [],
      Qa = [],
      Ra = [],
      Sa = [],
      Ta = [],
      P = !1;function Ua(a) {
    Pa.unshift(a);
  }_b2.addOnPreRun = Ua;_b2.addOnInit = function (a) {
    Qa.unshift(a);
  };_b2.addOnPreMain = function (a) {
    Ra.unshift(a);
  };_b2.addOnExit = function (a) {
    Sa.unshift(a);
  };
  function Va(a) {
    Ta.unshift(a);
  }_b2.addOnPostRun = Va;function Wa(a, c, d) {
    d = Array(0 < d ? d : wa(a) + 1);a = va(a, d, 0, d.length);c && (d.length = a);return d;
  }_b2.intArrayFromString = Wa;_b2.intArrayToString = function (a) {
    for (var c = [], d = 0; d < a.length; d++) {
      var e = a[d];255 < e && (e &= 255);c.push(String.fromCharCode(e));
    }return c.join("");
  };_b2.writeStringToMemory = function (a, c, d) {
    x.b("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");var e, f;d && (f = c + wa(a), e = I[f]);G(a, c, Infinity);d && (I[f] = e);
  };
  function ia(a, c) {
    I.set(a, c);
  }_b2.writeArrayToMemory = ia;function sa(a, c, d) {
    for (var e = 0; e < a.length; ++e) {
      I[c++ >> 0] = a.charCodeAt(e);
    }d || (I[c >> 0] = 0);
  }_b2.writeAsciiToMemory = sa;Math.imul && -5 === Math.imul(4294967295, 5) || (Math.imul = function (a, c) {
    var d = a & 65535,
        e = c & 65535;return d * e + ((a >>> 16) * e + d * (c >>> 16) << 16) | 0;
  });Math.V = Math.imul;Math.clz32 || (Math.clz32 = function (a) {
    a = a >>> 0;for (var c = 0; 32 > c; c++) {
      if (a & 1 << 31 - c) return c;
    }return 32;
  });Math.O = Math.clz32;Math.trunc || (Math.trunc = function (a) {
    return 0 > a ? Math.ceil(a) : Math.floor(a);
  });
  Math.trunc = Math.trunc;var ka = Math.abs,
      na = Math.ceil,
      ma = Math.floor,
      Xa = Math.pow,
      la = Math.min,
      R = 0,
      Ya = null,
      T = null;_b2.addRunDependency = function () {
    R++;_b2.monitorRunDependencies && _b2.monitorRunDependencies(R);
  };_b2.removeRunDependency = function () {
    R--;_b2.monitorRunDependencies && _b2.monitorRunDependencies(R);if (0 == R && (null !== Ya && (clearInterval(Ya), Ya = null), T)) {
      var a = T;T = null;a();
    }
  };_b2.preloadedImages = {};_b2.preloadedAudios = {};Ha = 8;y = Ha + 7376;Qa.push({ t: function t() {
      Za();
    } });
  K([36, 3, 0, 0, 108, 3, 0, 0, 36, 3, 0, 0, 206, 3, 0, 0, 76, 3, 0, 0, 213, 6, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 36, 3, 0, 0, 236, 6, 0, 0, 76, 3, 0, 0, 150, 7, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 76, 3, 0, 0, 221, 7, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 76, 3, 0, 0, 72, 20, 0, 0, 96, 0, 0, 0, 0, 0, 0, 0, 76, 3, 0, 0, 245, 19, 0, 0, 112, 0, 0, 0, 0, 0, 0, 0, 36, 3, 0, 0, 22, 20, 0, 0, 76, 3, 0, 0, 35, 20, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 4, 0, 0, 0, 7, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 196, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 164, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116, 2, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 204, 24, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116, 2, 0, 0, 10, 0, 0, 0, 100, 0, 0, 0, 232, 3, 0, 0, 16, 39, 0, 0, 160, 134, 1, 0, 64, 66, 15, 0, 128, 150, 152, 0, 0, 225, 245, 5, 95, 112, 137, 0, 255, 9, 47, 15, 0, 0, 0, 0, 80, 0, 0, 0, 9, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 120, 0, 0, 0, 9, 0, 0, 0, 13, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 78, 55, 77, 105, 110, 105, 115, 97, 116, 50, 48, 79, 117, 116, 79, 102, 77, 101, 109, 111, 114, 121, 69, 120, 99, 101, 112, 116, 105, 111, 110, 69, 0, 124, 32, 32, 71, 97, 114, 98, 97, 103, 101, 32, 99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 58, 32, 32, 32, 37, 49, 50, 100, 32, 98, 121, 116, 101, 115, 32, 61, 62, 32, 37, 49, 50, 100, 32, 98, 121, 116, 101, 115, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 124, 10, 0, 78, 55, 77, 105, 110, 105, 115, 97, 116, 54, 83, 111, 108, 118, 101, 114, 69, 0, 118, 97, 114, 45, 100, 101, 99, 97, 121, 0, 84, 104, 101, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 97, 99, 116, 105, 118, 105, 116, 121, 32, 100, 101, 99, 97, 121, 32, 102, 97, 99, 116, 111, 114, 0, 67, 79, 82, 69, 0, 60, 100, 111, 117, 98, 108, 101, 62, 0, 99, 108, 97, 45, 100, 101, 99, 97, 121, 0, 84, 104, 101, 32, 99, 108, 97, 117, 115, 101, 32, 97, 99, 116, 105, 118, 105, 116, 121, 32, 100, 101, 99, 97, 121, 32, 102, 97, 99, 116, 111, 114, 0, 114, 110, 100, 45, 102, 114, 101, 113, 0, 84, 104, 101, 32, 102, 114, 101, 113, 117, 101, 110, 99, 121, 32, 119, 105, 116, 104, 32, 119, 104, 105, 99, 104, 32, 116, 104, 101, 32, 100, 101, 99, 105, 115, 105, 111, 110, 32, 104, 101, 117, 114, 105, 115, 116, 105, 99, 32, 116, 114, 105, 101, 115, 32, 116, 111, 32, 99, 104, 111, 111, 115, 101, 32, 97, 32, 114, 97, 110, 100, 111, 109, 32, 118, 97, 114, 105, 97, 98, 108, 101, 0, 114, 110, 100, 45, 115, 101, 101, 100, 0, 85, 115, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 114, 97, 110, 100, 111, 109, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 115, 101, 108, 101, 99, 116, 105, 111, 110, 0, 99, 99, 109, 105, 110, 45, 109, 111, 100, 101, 0, 67, 111, 110, 116, 114, 111, 108, 115, 32, 99, 111, 110, 102, 108, 105, 99, 116, 32, 99, 108, 97, 117, 115, 101, 32, 109, 105, 110, 105, 109, 105, 122, 97, 116, 105, 111, 110, 32, 40, 48, 61, 110, 111, 110, 101, 44, 32, 49, 61, 98, 97, 115, 105, 99, 44, 32, 50, 61, 100, 101, 101, 112, 41, 0, 60, 105, 110, 116, 51, 50, 62, 0, 112, 104, 97, 115, 101, 45, 115, 97, 118, 105, 110, 103, 0, 67, 111, 110, 116, 114, 111, 108, 115, 32, 116, 104, 101, 32, 108, 101, 118, 101, 108, 32, 111, 102, 32, 112, 104, 97, 115, 101, 32, 115, 97, 118, 105, 110, 103, 32, 40, 48, 61, 110, 111, 110, 101, 44, 32, 49, 61, 108, 105, 109, 105, 116, 101, 100, 44, 32, 50, 61, 102, 117, 108, 108, 41, 0, 114, 110, 100, 45, 105, 110, 105, 116, 0, 82, 97, 110, 100, 111, 109, 105, 122, 101, 32, 116, 104, 101, 32, 105, 110, 105, 116, 105, 97, 108, 32, 97, 99, 116, 105, 118, 105, 116, 121, 0, 60, 98, 111, 111, 108, 62, 0, 108, 117, 98, 121, 0, 85, 115, 101, 32, 116, 104, 101, 32, 76, 117, 98, 121, 32, 114, 101, 115, 116, 97, 114, 116, 32, 115, 101, 113, 117, 101, 110, 99, 101, 0, 114, 102, 105, 114, 115, 116, 0, 84, 104, 101, 32, 98, 97, 115, 101, 32, 114, 101, 115, 116, 97, 114, 116, 32, 105, 110, 116, 101, 114, 118, 97, 108, 0, 114, 105, 110, 99, 0, 82, 101, 115, 116, 97, 114, 116, 32, 105, 110, 116, 101, 114, 118, 97, 108, 32, 105, 110, 99, 114, 101, 97, 115, 101, 32, 102, 97, 99, 116, 111, 114, 0, 103, 99, 45, 102, 114, 97, 99, 0, 84, 104, 101, 32, 102, 114, 97, 99, 116, 105, 111, 110, 32, 111, 102, 32, 119, 97, 115, 116, 101, 100, 32, 109, 101, 109, 111, 114, 121, 32, 97, 108, 108, 111, 119, 101, 100, 32, 98, 101, 102, 111, 114, 101, 32, 97, 32, 103, 97, 114, 98, 97, 103, 101, 32, 99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 32, 105, 115, 32, 116, 114, 105, 103, 103, 101, 114, 101, 100, 0, 100, 116, 45, 99, 108, 97, 117, 115, 101, 0, 84, 114, 101, 97, 116, 32, 65, 116, 76, 101, 97, 115, 116, 32, 49, 32, 99, 97, 114, 100, 105, 110, 97, 108, 105, 116, 121, 32, 99, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 32, 97, 115, 32, 114, 101, 103, 117, 108, 97, 114, 32, 99, 108, 97, 117, 115, 101, 115, 0, 32, 32, 45, 37, 115, 44, 32, 45, 110, 111, 45, 37, 115, 0, 111, 110, 0, 111, 102, 102, 0, 40, 100, 101, 102, 97, 117, 108, 116, 58, 32, 37, 115, 41, 10, 0, 10, 32, 32, 32, 32, 32, 32, 32, 32, 37, 115, 10, 0, 78, 55, 77, 105, 110, 105, 115, 97, 116, 49, 48, 66, 111, 111, 108, 79, 112, 116, 105, 111, 110, 69, 0, 78, 55, 77, 105, 110, 105, 115, 97, 116, 54, 79, 112, 116, 105, 111, 110, 69, 0, 32, 32, 45, 37, 45, 49, 50, 115, 32, 61, 32, 37, 45, 56, 115, 32, 91, 0, 105, 109, 105, 110, 0, 37, 52, 100, 0, 32, 46, 46, 32, 0, 105, 109, 97, 120, 0, 93, 32, 40, 100, 101, 102, 97, 117, 108, 116, 58, 32, 37, 100, 41, 10, 0, 69, 82, 82, 79, 82, 33, 32, 118, 97, 108, 117, 101, 32, 60, 37, 115, 62, 32, 105, 115, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 32, 102, 111, 114, 32, 111, 112, 116, 105, 111, 110, 32, 34, 37, 115, 34, 46, 10, 0, 69, 82, 82, 79, 82, 33, 32, 118, 97, 108, 117, 101, 32, 60, 37, 115, 62, 32, 105, 115, 32, 116, 111, 111, 32, 115, 109, 97, 108, 108, 32, 102, 111, 114, 32, 111, 112, 116, 105, 111, 110, 32, 34, 37, 115, 34, 46, 10, 0, 78, 55, 77, 105, 110, 105, 115, 97, 116, 57, 73, 110, 116, 79, 112, 116, 105, 111, 110, 69, 0, 32, 32, 45, 37, 45, 49, 50, 115, 32, 61, 32, 37, 45, 56, 115, 32, 37, 99, 37, 52, 46, 50, 103, 32, 46, 46, 32, 37, 52, 46, 50, 103, 37, 99, 32, 40, 100, 101, 102, 97, 117, 108, 116, 58, 32, 37, 103, 41, 10, 0, 78, 55, 77, 105, 110, 105, 115, 97, 116, 49, 50, 68, 111, 117, 98, 108, 101, 79, 112, 116, 105, 111, 110, 69, 0, 124, 32, 37, 57, 100, 32, 124, 32, 37, 55, 100, 32, 37, 56, 100, 32, 37, 56, 100, 32, 124, 32, 37, 56, 100, 32, 37, 56, 100, 32, 37, 54, 46, 48, 102, 32, 124, 32, 37, 54, 46, 51, 102, 32, 37, 37, 32, 124, 10, 0, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 91, 32, 83, 101, 97, 114, 99, 104, 32, 83, 116, 97, 116, 105, 115, 116, 105, 99, 115, 32, 93, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 0, 124, 32, 67, 111, 110, 102, 108, 105, 99, 116, 115, 32, 124, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 82, 73, 71, 73, 78, 65, 76, 32, 32, 32, 32, 32, 32, 32, 32, 32, 124, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 69, 65, 82, 78, 84, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 124, 32, 80, 114, 111, 103, 114, 101, 115, 115, 32, 124, 0, 124, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 124, 32, 32, 32, 32, 86, 97, 114, 115, 32, 32, 67, 108, 97, 117, 115, 101, 115, 32, 76, 105, 116, 101, 114, 97, 108, 115, 32, 124, 32, 32, 32, 32, 76, 105, 109, 105, 116, 32, 32, 67, 108, 97, 117, 115, 101, 115, 32, 76, 105, 116, 47, 67, 108, 32, 124, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 124, 0, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 0, 17, 0, 10, 0, 17, 17, 17, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 15, 10, 17, 17, 17, 3, 10, 7, 0, 1, 19, 9, 11, 11, 0, 0, 9, 6, 11, 0, 0, 11, 0, 6, 17, 0, 0, 0, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 10, 10, 17, 17, 17, 0, 10, 0, 0, 2, 0, 9, 11, 0, 0, 0, 9, 0, 11, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 9, 12, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 4, 13, 0, 0, 0, 0, 9, 14, 0, 0, 0, 0, 0, 14, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 15, 0, 0, 0, 0, 9, 16, 0, 0, 0, 0, 0, 16, 0, 0, 16, 0, 0, 18, 0, 0, 0, 18, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 18, 18, 18, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 10, 0, 0, 0, 0, 9, 11, 0, 0, 0, 0, 0, 11, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 9, 12, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 45, 43, 32, 32, 32, 48, 88, 48, 120, 0, 40, 110, 117, 108, 108, 41, 0, 45, 48, 88, 43, 48, 88, 32, 48, 88, 45, 48, 120, 43, 48, 120, 32, 48, 120, 0, 105, 110, 102, 0, 73, 78, 70, 0, 78, 65, 78, 0, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 46, 0, 84, 33, 34, 25, 13, 1, 2, 3, 17, 75, 28, 12, 16, 4, 11, 29, 18, 30, 39, 104, 110, 111, 112, 113, 98, 32, 5, 6, 15, 19, 20, 21, 26, 8, 22, 7, 40, 36, 23, 24, 9, 10, 14, 27, 31, 37, 35, 131, 130, 125, 38, 42, 43, 60, 61, 62, 63, 67, 71, 74, 77, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 99, 100, 101, 102, 103, 105, 106, 107, 108, 114, 115, 116, 121, 122, 123, 124, 0, 73, 108, 108, 101, 103, 97, 108, 32, 98, 121, 116, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 0, 68, 111, 109, 97, 105, 110, 32, 101, 114, 114, 111, 114, 0, 82, 101, 115, 117, 108, 116, 32, 110, 111, 116, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 98, 108, 101, 0, 78, 111, 116, 32, 97, 32, 116, 116, 121, 0, 80, 101, 114, 109, 105, 115, 115, 105, 111, 110, 32, 100, 101, 110, 105, 101, 100, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 110, 111, 116, 32, 112, 101, 114, 109, 105, 116, 116, 101, 100, 0, 78, 111, 32, 115, 117, 99, 104, 32, 102, 105, 108, 101, 32, 111, 114, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 78, 111, 32, 115, 117, 99, 104, 32, 112, 114, 111, 99, 101, 115, 115, 0, 70, 105, 108, 101, 32, 101, 120, 105, 115, 116, 115, 0, 86, 97, 108, 117, 101, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 32, 102, 111, 114, 32, 100, 97, 116, 97, 32, 116, 121, 112, 101, 0, 78, 111, 32, 115, 112, 97, 99, 101, 32, 108, 101, 102, 116, 32, 111, 110, 32, 100, 101, 118, 105, 99, 101, 0, 79, 117, 116, 32, 111, 102, 32, 109, 101, 109, 111, 114, 121, 0, 82, 101, 115, 111, 117, 114, 99, 101, 32, 98, 117, 115, 121, 0, 73, 110, 116, 101, 114, 114, 117, 112, 116, 101, 100, 32, 115, 121, 115, 116, 101, 109, 32, 99, 97, 108, 108, 0, 82, 101, 115, 111, 117, 114, 99, 101, 32, 116, 101, 109, 112, 111, 114, 97, 114, 105, 108, 121, 32, 117, 110, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 73, 110, 118, 97, 108, 105, 100, 32, 115, 101, 101, 107, 0, 67, 114, 111, 115, 115, 45, 100, 101, 118, 105, 99, 101, 32, 108, 105, 110, 107, 0, 82, 101, 97, 100, 45, 111, 110, 108, 121, 32, 102, 105, 108, 101, 32, 115, 121, 115, 116, 101, 109, 0, 68, 105, 114, 101, 99, 116, 111, 114, 121, 32, 110, 111, 116, 32, 101, 109, 112, 116, 121, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 114, 101, 115, 101, 116, 32, 98, 121, 32, 112, 101, 101, 114, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 116, 105, 109, 101, 100, 32, 111, 117, 116, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 114, 101, 102, 117, 115, 101, 100, 0, 72, 111, 115, 116, 32, 105, 115, 32, 100, 111, 119, 110, 0, 72, 111, 115, 116, 32, 105, 115, 32, 117, 110, 114, 101, 97, 99, 104, 97, 98, 108, 101, 0, 65, 100, 100, 114, 101, 115, 115, 32, 105, 110, 32, 117, 115, 101, 0, 66, 114, 111, 107, 101, 110, 32, 112, 105, 112, 101, 0, 73, 47, 79, 32, 101, 114, 114, 111, 114, 0, 78, 111, 32, 115, 117, 99, 104, 32, 100, 101, 118, 105, 99, 101, 32, 111, 114, 32, 97, 100, 100, 114, 101, 115, 115, 0, 66, 108, 111, 99, 107, 32, 100, 101, 118, 105, 99, 101, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0, 78, 111, 32, 115, 117, 99, 104, 32, 100, 101, 118, 105, 99, 101, 0, 78, 111, 116, 32, 97, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 73, 115, 32, 97, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 84, 101, 120, 116, 32, 102, 105, 108, 101, 32, 98, 117, 115, 121, 0, 69, 120, 101, 99, 32, 102, 111, 114, 109, 97, 116, 32, 101, 114, 114, 111, 114, 0, 73, 110, 118, 97, 108, 105, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0, 65, 114, 103, 117, 109, 101, 110, 116, 32, 108, 105, 115, 116, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0, 83, 121, 109, 98, 111, 108, 105, 99, 32, 108, 105, 110, 107, 32, 108, 111, 111, 112, 0, 70, 105, 108, 101, 110, 97, 109, 101, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0, 84, 111, 111, 32, 109, 97, 110, 121, 32, 111, 112, 101, 110, 32, 102, 105, 108, 101, 115, 32, 105, 110, 32, 115, 121, 115, 116, 101, 109, 0, 78, 111, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 66, 97, 100, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 0, 78, 111, 32, 99, 104, 105, 108, 100, 32, 112, 114, 111, 99, 101, 115, 115, 0, 66, 97, 100, 32, 97, 100, 100, 114, 101, 115, 115, 0, 70, 105, 108, 101, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 0, 84, 111, 111, 32, 109, 97, 110, 121, 32, 108, 105, 110, 107, 115, 0, 78, 111, 32, 108, 111, 99, 107, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 82, 101, 115, 111, 117, 114, 99, 101, 32, 100, 101, 97, 100, 108, 111, 99, 107, 32, 119, 111, 117, 108, 100, 32, 111, 99, 99, 117, 114, 0, 83, 116, 97, 116, 101, 32, 110, 111, 116, 32, 114, 101, 99, 111, 118, 101, 114, 97, 98, 108, 101, 0, 80, 114, 101, 118, 105, 111, 117, 115, 32, 111, 119, 110, 101, 114, 32, 100, 105, 101, 100, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 99, 97, 110, 99, 101, 108, 101, 100, 0, 70, 117, 110, 99, 116, 105, 111, 110, 32, 110, 111, 116, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 101, 100, 0, 78, 111, 32, 109, 101, 115, 115, 97, 103, 101, 32, 111, 102, 32, 100, 101, 115, 105, 114, 101, 100, 32, 116, 121, 112, 101, 0, 73, 100, 101, 110, 116, 105, 102, 105, 101, 114, 32, 114, 101, 109, 111, 118, 101, 100, 0, 68, 101, 118, 105, 99, 101, 32, 110, 111, 116, 32, 97, 32, 115, 116, 114, 101, 97, 109, 0, 78, 111, 32, 100, 97, 116, 97, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 68, 101, 118, 105, 99, 101, 32, 116, 105, 109, 101, 111, 117, 116, 0, 79, 117, 116, 32, 111, 102, 32, 115, 116, 114, 101, 97, 109, 115, 32, 114, 101, 115, 111, 117, 114, 99, 101, 115, 0, 76, 105, 110, 107, 32, 104, 97, 115, 32, 98, 101, 101, 110, 32, 115, 101, 118, 101, 114, 101, 100, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 101, 114, 114, 111, 114, 0, 66, 97, 100, 32, 109, 101, 115, 115, 97, 103, 101, 0, 70, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 32, 105, 110, 32, 98, 97, 100, 32, 115, 116, 97, 116, 101, 0, 78, 111, 116, 32, 97, 32, 115, 111, 99, 107, 101, 116, 0, 68, 101, 115, 116, 105, 110, 97, 116, 105, 111, 110, 32, 97, 100, 100, 114, 101, 115, 115, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0, 77, 101, 115, 115, 97, 103, 101, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 119, 114, 111, 110, 103, 32, 116, 121, 112, 101, 32, 102, 111, 114, 32, 115, 111, 99, 107, 101, 116, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 110, 111, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 83, 111, 99, 107, 101, 116, 32, 116, 121, 112, 101, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 78, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 102, 97, 109, 105, 108, 121, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 65, 100, 100, 114, 101, 115, 115, 32, 102, 97, 109, 105, 108, 121, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 98, 121, 32, 112, 114, 111, 116, 111, 99, 111, 108, 0, 65, 100, 100, 114, 101, 115, 115, 32, 110, 111, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 78, 101, 116, 119, 111, 114, 107, 32, 105, 115, 32, 100, 111, 119, 110, 0, 78, 101, 116, 119, 111, 114, 107, 32, 117, 110, 114, 101, 97, 99, 104, 97, 98, 108, 101, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 114, 101, 115, 101, 116, 32, 98, 121, 32, 110, 101, 116, 119, 111, 114, 107, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 97, 98, 111, 114, 116, 101, 100, 0, 78, 111, 32, 98, 117, 102, 102, 101, 114, 32, 115, 112, 97, 99, 101, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 83, 111, 99, 107, 101, 116, 32, 105, 115, 32, 99, 111, 110, 110, 101, 99, 116, 101, 100, 0, 83, 111, 99, 107, 101, 116, 32, 110, 111, 116, 32, 99, 111, 110, 110, 101, 99, 116, 101, 100, 0, 67, 97, 110, 110, 111, 116, 32, 115, 101, 110, 100, 32, 97, 102, 116, 101, 114, 32, 115, 111, 99, 107, 101, 116, 32, 115, 104, 117, 116, 100, 111, 119, 110, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 97, 108, 114, 101, 97, 100, 121, 32, 105, 110, 32, 112, 114, 111, 103, 114, 101, 115, 115, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 105, 110, 32, 112, 114, 111, 103, 114, 101, 115, 115, 0, 83, 116, 97, 108, 101, 32, 102, 105, 108, 101, 32, 104, 97, 110, 100, 108, 101, 0, 82, 101, 109, 111, 116, 101, 32, 73, 47, 79, 32, 101, 114, 114, 111, 114, 0, 81, 117, 111, 116, 97, 32, 101, 120, 99, 101, 101, 100, 101, 100, 0, 78, 111, 32, 109, 101, 100, 105, 117, 109, 32, 102, 111, 117, 110, 100, 0, 87, 114, 111, 110, 103, 32, 109, 101, 100, 105, 117, 109, 32, 116, 121, 112, 101, 0, 78, 111, 32, 101, 114, 114, 111, 114, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 255, 255, 255, 255, 255, 255, 255, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 255, 255, 255, 255, 255, 255, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 4, 7, 3, 6, 5, 0, 105, 110, 102, 105, 110, 105, 116, 121, 0, 110, 97, 110, 0, 78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 49, 54, 95, 95, 115, 104, 105, 109, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0, 83, 116, 57, 116, 121, 112, 101, 95, 105, 110, 102, 111, 0, 78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 50, 48, 95, 95, 115, 105, 95, 99, 108, 97, 115, 115, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0, 78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 49, 55, 95, 95, 99, 108, 97, 115, 115, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0], "i8", 4, x.v);var $a = y;y += 16;function ab(a, c) {
    Sa.unshift({ t: a, d: c });
  }_b2._i64Subtract = bb;_b2._i64Add = cb;function U() {
    return !!U.a;
  }var db = 0,
      eb = {};
  function V() {
    var a = db;if (!a) return (x.c(0), 0) | 0;var c = eb[a],
        d = c.type;if (!d) return (x.c(0), a) | 0;var e = Array.prototype.slice.call(arguments);_b2.___cxa_is_pointer_type(d);V.buffer || (V.buffer = N(4));z[V.buffer >> 2] = a;for (var a = V.buffer, f = 0; f < e.length; f++) {
      if (e[f] && _b2.___cxa_can_catch(e[f], d, a)) return a = z[a >> 2], c.A = a, (x.c(e[f]), a) | 0;
    }a = z[a >> 2];return (x.c(d), a) | 0;
  }_b2._memset = fb;_b2._bitshift64Lshr = gb;_b2._bitshift64Shl = hb;var W = 0;function X() {
    W += 4;return z[W - 4 >> 2];
  }
  var ib = {},
      jb = K([8, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 7, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0], "i8", 2);_b2._llvm_cttz_i32 = kb;_b2.___udivmoddi4 = lb;_b2.___udivdi3 = mb;_b2.___muldsi3 = nb;_b2.___muldi3 = ob;_b2._sbrk = pb;function Y(a, c) {
    W = c;try {
      var d = X(),
          e = X(),
          f = X(),
          l = 0;Y.buffer || (Y.a = [null, [], []], Y.r = function (a, c) {
        var d = Y.a[a];assert(d);0 === c || 10 === c ? ((1 === a ? _b2.print : _b2.printErr)(ua(d, 0)), d.length = 0) : d.push(c);
      });for (var h = 0; h < f; h++) {
        for (var n = z[e + 8 * h >> 2], t = z[e + (8 * h + 4) >> 2], v = 0; v < t; v++) {
          Y.r(d, O[n + v]);
        }l += t;
      }return l;
    } catch (L) {
      return "undefined" !== typeof FS && L instanceof FS.p || D(L), -L.s;
    }
  }
  _b2.___uremdi3 = qb;_b2._memcpy = rb;function sb(a) {
    _b2.exit(a);
  }_b2._llvm_bswap_i32 = tb;_b2._malloc = N;var ub = y;y += 16;Sa.push(function () {
    var a = _b2._fflush;a && a(0);if (a = Y.r) {
      var c = Y.a;c[1].length && a(1, 10);c[2].length && a(2, 10);
    }
  });A = K(1, "i32", 2);Ia = u = x.q(y);Ja = Ia + Oa;Ka = x.q(Ja);z[A >> 2] = Ka;ra = !0;
  _b2.B = { Math: Math, Int8Array: Int8Array, Int16Array: Int16Array, Int32Array: Int32Array, Uint8Array: Uint8Array, Uint16Array: Uint16Array, Uint32Array: Uint32Array, Float32Array: Float32Array, Float64Array: Float64Array, NaN: NaN, Infinity: Infinity, byteLength: Ma };
  _b2.C = { abort: D, assert: assert, enlargeMemory: ea, getTotalMemory: function getTotalMemory() {
      return B;
    }, abortOnCannotGrowMemory: function abortOnCannotGrowMemory() {
      D("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + B + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ");
    }, invoke_iiii: function invoke_iiii(a, c, d, e) {
      try {
        return _b2.dynCall_iiii(a, c, d, e);
      } catch (f) {
        if ("number" !== typeof f && "longjmp" !== f) throw f;_b2.setThrew(1, 0);
      }
    }, invoke_viiiii: function invoke_viiiii(a, c, d, e, f, l) {
      try {
        _b2.dynCall_viiiii(a, c, d, e, f, l);
      } catch (h) {
        if ("number" !== typeof h && "longjmp" !== h) throw h;_b2.setThrew(1, 0);
      }
    }, invoke_vi: function invoke_vi(a, c) {
      try {
        _b2.dynCall_vi(a, c);
      } catch (d) {
        if ("number" !== typeof d && "longjmp" !== d) throw d;_b2.setThrew(1, 0);
      }
    }, invoke_vii: function invoke_vii(a, c, d) {
      try {
        _b2.dynCall_vii(a, c, d);
      } catch (e) {
        if ("number" !== typeof e && "longjmp" !== e) throw e;_b2.setThrew(1, 0);
      }
    },
    invoke_ii: function invoke_ii(a, c) {
      try {
        return _b2.dynCall_ii(a, c);
      } catch (d) {
        if ("number" !== typeof d && "longjmp" !== d) throw d;_b2.setThrew(1, 0);
      }
    }, invoke_v: function invoke_v(a) {
      try {
        _b2.dynCall_v(a);
      } catch (c) {
        if ("number" !== typeof c && "longjmp" !== c) throw c;_b2.setThrew(1, 0);
      }
    }, invoke_viiiiii: function invoke_viiiiii(a, c, d, e, f, l, h) {
      try {
        _b2.dynCall_viiiiii(a, c, d, e, f, l, h);
      } catch (n) {
        if ("number" !== typeof n && "longjmp" !== n) throw n;_b2.setThrew(1, 0);
      }
    }, invoke_iii: function invoke_iii(a, c, d) {
      try {
        return _b2.dynCall_iii(a, c, d);
      } catch (e) {
        if ("number" !== typeof e && "longjmp" !== e) throw e;
        _b2.setThrew(1, 0);
      }
    }, invoke_viiii: function invoke_viiii(a, c, d, e, f) {
      try {
        _b2.dynCall_viiii(a, c, d, e, f);
      } catch (l) {
        if ("number" !== typeof l && "longjmp" !== l) throw l;_b2.setThrew(1, 0);
      }
    }, ___lock: function ___lock() {}, ___cxa_atexit: function ___cxa_atexit() {
      return ab.apply(null, arguments);
    }, _llvm_pow_f64: Xa, ___cxa_throw: function ___cxa_throw(a, c, d) {
      eb[a] = { Z: a, A: a, type: c, P: d, $: 0, N: !1, aa: !1 };db = a;"uncaught_exception" in U ? U.a++ : U.a = 1;throw a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
    }, ___syscall54: function ___syscall54(a, c) {
      W = c;return 0;
    }, _atexit: ab, _abort: function _abort() {
      _b2.abort();
    }, ___setErrNo: function ___setErrNo(a) {
      _b2.___errno_location && (z[_b2.___errno_location() >> 2] = a);return a;
    }, ___syscall6: function ___syscall6(a, c) {
      W = c;try {
        var d = ib.F();FS.close(d);return 0;
      } catch (e) {
        return "undefined" !== typeof FS && e instanceof FS.p || D(e), -e.s;
      }
    }, ___syscall140: function ___syscall140(a, c) {
      W = c;try {
        var d = ib.F(),
            e = X(),
            f = X(),
            l = X(),
            h = X();assert(0 === e);FS.W(d, f, h);z[l >> 2] = d.position;d.H && 0 === f && 0 === h && (d.H = null);return 0;
      } catch (n) {
        return "undefined" !== typeof FS && n instanceof FS.p || D(n), -n.s;
      }
    }, ___syscall146: Y, _emscripten_memcpy_big: function _emscripten_memcpy_big(a, c, d) {
      O.set(O.subarray(c, c + d), a);return a;
    }, ___gxx_personality_v0: function ___gxx_personality_v0() {}, ___unlock: function ___unlock() {}, ___resumeException: function ___resumeException(a) {
      db || (db = a);throw a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
    }, _exit: function _exit(a) {
      sb(a);
    }, ___cxa_find_matching_catch: V, __exit: sb, ___cxa_pure_virtual: function ___cxa_pure_virtual() {
      C = !0;throw "Pure virtual function called!";
    }, ___cxa_allocate_exception: function ___cxa_allocate_exception(a) {
      return N(a);
    }, __ZSt18uncaught_exceptionv: U, DYNAMICTOP_PTR: A, tempDoublePtr: $a, ABORT: C, STACKTOP: u, STACK_MAX: Ja, cttz_i8: jb, ___dso_handle: ub }; // EMSCRIPTEN_START_ASM
  var Z = function (global, env, buffer) {
    "almost asm";

    var _ref;

    var a = global.Int8Array;var b = global.Int16Array;var c = global.Int32Array;var d = global.Uint8Array;var e = global.Uint16Array;var f = global.Uint32Array;var g = global.Float32Array;var h = global.Float64Array;var i = new a(buffer);var j = new b(buffer);var k = new c(buffer);var l = new d(buffer);var m = new e(buffer);var n = new f(buffer);var o = new g(buffer);var p = new h(buffer);var q = global.byteLength;var r = env.DYNAMICTOP_PTR | 0;var s = env.tempDoublePtr | 0;var t = env.ABORT | 0;var u = env.STACKTOP | 0;var v = env.STACK_MAX | 0;var w = env.cttz_i8 | 0;var x = env.___dso_handle | 0;var y = 0;var z = 0;var A = 0;var B = 0;var C = global.NaN,
        D = global.Infinity;var E = 0,
        F = 0,
        G = 0,
        H = 0,
        I = 0.0,
        J = 0,
        K = 0,
        L = 0,
        M = 0.0;var N = 0;var O = global.Math.floor;var P = global.Math.abs;var Q = global.Math.sqrt;var R = global.Math.pow;var S = global.Math.cos;var T = global.Math.sin;var U = global.Math.tan;var V = global.Math.acos;var W = global.Math.asin;var X = global.Math.atan;var Y = global.Math.atan2;var Z = global.Math.exp;var _ = global.Math.log;var $ = global.Math.ceil;var aa = global.Math.imul;var ba = global.Math.min;var ca = global.Math.max;var da = global.Math.clz32;var ea = env.abort;var fa = env.assert;var ga = env.enlargeMemory;var ha = env.getTotalMemory;var ia = env.abortOnCannotGrowMemory;var ja = env.invoke_iiii;var ka = env.invoke_viiiii;var la = env.invoke_vi;var ma = env.invoke_vii;var na = env.invoke_ii;var oa = env.invoke_v;var pa = env.invoke_viiiiii;var qa = env.invoke_iii;var ra = env.invoke_viiii;var sa = env.___lock;var ta = env.___cxa_atexit;var ua = env._llvm_pow_f64;var va = env.___cxa_throw;var wa = env.___syscall54;var xa = env._atexit;var ya = env._abort;var za = env.___setErrNo;var Aa = env.___syscall6;var Ba = env.___syscall140;var Ca = env.___syscall146;var Da = env._emscripten_memcpy_big;var Ea = env.___gxx_personality_v0;var Fa = env.___unlock;var Ga = env.___resumeException;var Ha = env._exit;var Ia = env.___cxa_find_matching_catch;var Ja = env.__exit;var Ka = env.___cxa_pure_virtual;var La = env.___cxa_allocate_exception;var Ma = env.__ZSt18uncaught_exceptionv;var Na = 0.0;function Oa(newBuffer) {
      if (q(newBuffer) & 16777215 || q(newBuffer) <= 16777215 || q(newBuffer) > 2147483648) return false;i = new a(newBuffer);j = new b(newBuffer);k = new c(newBuffer);l = new d(newBuffer);m = new e(newBuffer);n = new f(newBuffer);o = new g(newBuffer);p = new h(newBuffer);buffer = newBuffer;return true;
    }
    // EMSCRIPTEN_START_FUNCS
    function Ya(a) {
      a = a | 0;var b = 0;b = u;u = u + a | 0;u = u + 15 & -16;return b | 0;
    }function Za() {
      return u | 0;
    }function _a(a) {
      a = a | 0;u = a;
    }function $a(a, b) {
      a = a | 0;b = b | 0;u = a;v = b;
    }function ab(a, b) {
      a = a | 0;b = b | 0;if (!y) {
        y = a;z = b;
      }
    }function bb(a) {
      a = a | 0;N = a;
    }function cb() {
      return N | 0;
    }function db() {
      var a = 0;a = Xd(592) | 0;Wb(a);return a | 0;
    }function eb(a) {
      a = a | 0;if (!a) return;Ra[k[(k[a >> 2] | 0) + 4 >> 2] & 15](a);return;
    }function fb(a) {
      a = a | 0;return k[a + 400 >> 2] | 0;
    }function gb(a) {
      a = a | 0;return k[a + 240 >> 2] | 0;
    }function hb(a, b) {
      a = a | 0;b = b | 0;k[a + 72 >> 2] = b;return;
    }function ib(a, b) {
      a = a | 0;b = b | 0;i[a + 76 >> 0] = b & 1;return;
    }function jb(a, b) {
      a = a | 0;b = b | 0;i[a + 77 >> 0] = b & 1;return;
    }function kb(a, b) {
      a = a | 0;b = +b;p[a + 56 >> 3] = b;return;
    }function lb(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return Xb(a, b << 24 >> 24 != 0, c) | 0;
    }function mb(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0;a: do {
        if ((b | 0) > 0) {
          m = 0;i = 0;e = 0;h = 0;g = 0;f = 0;while (1) {
            l = k[c + (m << 2) >> 2] | 0;l = (((l | 0) < 0 ? 0 - l | 0 : l) << 1) + -2 | l >>> 31;if ((m | 0) == (e | 0)) {
              j = (m >> 1) + 2 & -2;e = j + -2 >> 31;e = (e & 2) + (j & ~e) | 0;if ((e | 0) > (2147483647 - m | 0)) {
                e = 17;break;
              }e = e + m | 0;f = Ud(h, e << 2) | 0;if (!f) {
                j = Ec() | 0;if ((k[j >> 2] | 0) == 12) {
                  e = 17;break;
                } else {
                  i = f;j = 0;g = 0;f = 0;
                }
              } else {
                i = f;j = f;g = f;
              }
            } else {
              j = f;f = h;
            }h = m + 1 | 0;k[i + (m << 2) >> 2] = l;if ((h | 0) < (b | 0)) {
              m = h;h = f;f = j;
            } else {
              j = g;break a;
            }
          }if ((e | 0) == 17) va(La(1) | 0, 8, 0);
        } else {
          j = 0;i = 0;h = 0;
        }
      } while (0);g = a + 532 | 0;f = a + 536 | 0;if (!(k[g >> 2] | 0)) e = k[f >> 2] | 0;else {
        k[f >> 2] = 0;e = 0;
      }if ((e | 0) < (h | 0)) {
        Ab(g, h);e = k[f >> 2] | 0;if ((e | 0) < (h | 0)) do {
          k[(k[g >> 2] | 0) + (e << 2) >> 2] = 0;e = e + 1 | 0;
        } while ((e | 0) != (h | 0));k[f >> 2] = h;
      }if ((h | 0) > 0) {
        f = k[g >> 2] | 0;e = 0;do {
          k[f + (e << 2) >> 2] = k[i + (e << 2) >> 2];e = e + 1 | 0;
        } while ((e | 0) != (h | 0));
      }e = jc(a, g, d) | 0;if (!i) return e | 0;Td(j);return e | 0;
    }function nb(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0;a: do {
        if ((b | 0) > 0) {
          l = 0;h = 0;d = 0;g = 0;f = 0;e = 0;while (1) {
            j = k[c + (l << 2) >> 2] | 0;j = (((j | 0) < 0 ? 0 - j | 0 : j) << 1) + -2 | j >>> 31;if ((l | 0) == (d | 0)) {
              i = (l >> 1) + 2 & -2;d = i + -2 >> 31;d = (d & 2) + (i & ~d) | 0;if ((d | 0) > (2147483647 - l | 0)) {
                d = 17;break;
              }d = d + l | 0;e = Ud(g, d << 2) | 0;if (!e) {
                i = Ec() | 0;if ((k[i >> 2] | 0) == 12) {
                  d = 17;break;
                } else {
                  h = e;i = 0;f = 0;e = 0;
                }
              } else {
                h = e;i = e;f = e;
              }
            } else {
              i = e;e = g;
            }g = l + 1 | 0;k[h + (l << 2) >> 2] = j;if ((g | 0) < (b | 0)) {
              l = g;g = e;e = i;
            } else {
              i = f;break a;
            }
          }if ((d | 0) == 17) va(La(1) | 0, 8, 0);
        } else {
          i = 0;h = 0;g = 0;
        }
      } while (0);f = a + 532 | 0;e = a + 536 | 0;if (!(k[f >> 2] | 0)) d = k[e >> 2] | 0;else {
        k[e >> 2] = 0;d = 0;
      }if ((d | 0) < (g | 0)) {
        Ab(f, g);d = k[e >> 2] | 0;if ((d | 0) < (g | 0)) do {
          k[(k[f >> 2] | 0) + (d << 2) >> 2] = 0;d = d + 1 | 0;
        } while ((d | 0) != (g | 0));k[e >> 2] = g;
      }if ((g | 0) > 0) {
        e = k[f >> 2] | 0;d = 0;do {
          k[e + (d << 2) >> 2] = k[h + (d << 2) >> 2];d = d + 1 | 0;
        } while ((d | 0) != (g | 0));
      }d = cc(a, f) | 0;if (!h) return d | 0;Td(i);return d | 0;
    }function ob(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0;f = a + 532 | 0;d = k[f >> 2] | 0;e = a + 536 | 0;if (!d) c = k[e >> 2] | 0;else {
        k[e >> 2] = 0;c = 0;
      }if ((c | 0) == (k[a + 540 >> 2] | 0)) {
        Ab(f, c + 1 | 0);c = k[e >> 2] | 0;d = k[f >> 2] | 0;
      }k[e >> 2] = c + 1;k[d + (c << 2) >> 2] = (((b | 0) < 0 ? 0 - b | 0 : b) << 1) + -2 | b >>> 31;return cc(a, f) | 0;
    }function pb(a) {
      a = a | 0;var b = 0;b = a + 568 | 0;k[b >> 2] = -1;k[b + 4 >> 2] = -1;k[b + 8 >> 2] = -1;k[b + 12 >> 2] = -1;if (k[a + 424 >> 2] | 0) k[a + 428 >> 2] = 0;return (yc(a) | 0) << 24 >> 24 == 0 | 0;
    }function qb(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0;a: do {
        if ((b | 0) > 0) {
          l = 0;h = 0;d = 0;g = 0;f = 0;e = 0;while (1) {
            j = k[c + (l << 2) >> 2] | 0;j = (((j | 0) < 0 ? 0 - j | 0 : j) << 1) + -2 | j >>> 31;if ((l | 0) == (d | 0)) {
              i = (l >> 1) + 2 & -2;d = i + -2 >> 31;d = (d & 2) + (i & ~d) | 0;if ((d | 0) > (2147483647 - l | 0)) {
                d = 17;break;
              }d = d + l | 0;e = Ud(g, d << 2) | 0;if (!e) {
                i = Ec() | 0;if ((k[i >> 2] | 0) == 12) {
                  d = 17;break;
                } else {
                  h = e;i = 0;f = 0;e = 0;
                }
              } else {
                h = e;i = e;f = e;
              }
            } else {
              i = e;e = g;
            }g = l + 1 | 0;k[h + (l << 2) >> 2] = j;if ((g | 0) < (b | 0)) {
              l = g;g = e;e = i;
            } else {
              i = f;break a;
            }
          }if ((d | 0) == 17) va(La(1) | 0, 8, 0);
        } else {
          i = 0;h = 0;g = 0;
        }
      } while (0);f = a + 568 | 0;k[f >> 2] = -1;k[f + 4 >> 2] = -1;k[f + 8 >> 2] = -1;k[f + 12 >> 2] = -1;f = a + 424 | 0;e = a + 428 | 0;if (!(k[f >> 2] | 0)) d = k[e >> 2] | 0;else {
        k[e >> 2] = 0;d = 0;
      }if ((d | 0) < (g | 0)) {
        Ab(f, g);d = k[e >> 2] | 0;if ((d | 0) < (g | 0)) do {
          k[(k[f >> 2] | 0) + (d << 2) >> 2] = 0;d = d + 1 | 0;
        } while ((d | 0) != (g | 0));k[e >> 2] = g;
      }if ((g | 0) > 0) {
        e = k[f >> 2] | 0;d = 0;do {
          k[e + (d << 2) >> 2] = k[h + (d << 2) >> 2];d = d + 1 | 0;
        } while ((d | 0) != (g | 0));
      }d = (yc(a) | 0) << 24 >> 24 == 0;if (!h) return d | 0;Td(i);return d | 0;
    }function rb(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0;w = k[a + 400 >> 2] | 0;u = (w | 0) < -1 ? -1 : w + 1 | 0;x = Yd(u) | 0;xe(x | 0, 0, u | 0) | 0;a: do {
        if ((b | 0) > 0) {
          if (d) {
            t = 0;o = 0;e = 0;p = 0;n = 0;l = 0;q = 0;while (1) {
              u = c + (t << 2) | 0;s = k[u >> 2] | 0;s = (((s | 0) < 0 ? 0 - s | 0 : s) << 1) + -2 | s >>> 31;if ((t | 0) == (e | 0)) {
                r = (t >> 1) + 2 & -2;e = r + -2 >> 31;e = (e & 2) + (r & ~e) | 0;if ((e | 0) > (2147483647 - t | 0)) {
                  e = 21;break;
                }e = e + t | 0;l = Ud(q, e << 2) | 0;if (!l) {
                  r = Ec() | 0;if ((k[r >> 2] | 0) == 12) {
                    e = 21;break;
                  } else {
                    o = l;r = 0;n = 0;p = 0;q = 0;
                  }
                } else {
                  o = l;r = l;n = l;p = l;q = l;
                }
              } else r = l;l = t + 1 | 0;k[o + (t << 2) >> 2] = s;i[x + (k[u >> 2] | 0) >> 0] = 1;if ((l | 0) < (b | 0)) {
                t = l;l = r;
              } else {
                f = p;g = n;j = r;h = o;v = l;m = e;break a;
              }
            }if ((e | 0) == 21) {
              A = La(1) | 0;va(A | 0, 8, 0);
            }
          } else {
            t = 0;o = 0;e = 0;p = 0;n = 0;l = 0;q = 0;while (1) {
              u = c + (t << 2) | 0;s = k[u >> 2] | 0;s = (((s | 0) < 0 ? 0 - s | 0 : s) << 1) + -2 | s >>> 31;if ((t | 0) == (e | 0)) {
                r = (t >> 1) + 2 & -2;e = r + -2 >> 31;e = (e & 2) + (r & ~e) | 0;if ((e | 0) > (2147483647 - t | 0)) {
                  e = 21;break;
                }e = e + t | 0;l = Ud(q, e << 2) | 0;if (!l) {
                  r = Ec() | 0;if ((k[r >> 2] | 0) == 12) {
                    e = 21;break;
                  } else {
                    o = l;r = 0;n = 0;p = 0;q = 0;
                  }
                } else {
                  o = l;r = l;n = l;p = l;q = l;
                }
              } else r = l;l = t + 1 | 0;k[o + (t << 2) >> 2] = s;i[x + (0 - (k[u >> 2] | 0)) >> 0] = 1;if ((l | 0) < (b | 0)) {
                t = l;l = r;
              } else {
                f = p;g = n;j = r;h = o;v = l;m = e;break a;
              }
            }if ((e | 0) == 21) {
              A = La(1) | 0;va(A | 0, 8, 0);
            }
          }
        } else {
          f = 0;g = 0;j = 0;h = 0;v = 0;m = 0;
        }
      } while (0);b: do {
        if ((w | 0) >= 1) {
          if (d) {
            o = 1;n = v;while (1) {
              if (!(i[x + o >> 0] | 0)) {
                l = (o << 1) + -2 | (0 - o | 0) >>> 31;if ((n | 0) == (m | 0)) {
                  v = (m >> 1) + 2 & -2;e = v + -2 >> 31;e = (e & 2) + (v & ~e) | 0;if ((e | 0) > (2147483647 - m | 0)) {
                    e = 28;break;
                  }e = e + m | 0;f = Ud(j, e << 2) | 0;if (!f) {
                    v = Ec() | 0;if ((k[v >> 2] | 0) == 12) {
                      e = 28;break;
                    } else {
                      h = f;j = 0;g = 0;f = 0;
                    }
                  } else {
                    h = f;j = f;g = f;
                  }
                } else e = m;k[h + (n << 2) >> 2] = l;l = n + 1 | 0;
              } else {
                l = n;e = m;
              }if ((o | 0) < (w | 0)) {
                o = o + 1 | 0;n = l;m = e;
              } else {
                z = f;A = h;y = l;break b;
              }
            }if ((e | 0) == 28) {
              A = La(1) | 0;va(A | 0, 8, 0);
            }
          } else {
            o = 1;n = v;while (1) {
              if (!(i[x + o >> 0] | 0)) {
                l = (o << 1) + -2 | o >>> 31;if ((n | 0) == (m | 0)) {
                  v = (m >> 1) + 2 & -2;e = v + -2 >> 31;e = (e & 2) + (v & ~e) | 0;if ((e | 0) > (2147483647 - m | 0)) {
                    e = 28;break;
                  }e = e + m | 0;f = Ud(j, e << 2) | 0;if (!f) {
                    v = Ec() | 0;if ((k[v >> 2] | 0) == 12) {
                      e = 28;break;
                    } else {
                      h = f;j = 0;g = 0;f = 0;
                    }
                  } else {
                    h = f;j = f;g = f;
                  }
                } else e = m;k[h + (n << 2) >> 2] = l;l = n + 1 | 0;
              } else {
                l = n;e = m;
              }if ((o | 0) < (w | 0)) {
                o = o + 1 | 0;n = l;m = e;
              } else {
                z = f;A = h;y = l;break b;
              }
            }if ((e | 0) == 28) {
              A = La(1) | 0;va(A | 0, 8, 0);
            }
          }
        } else {
          z = f;A = h;y = v;
        }
      } while (0);_d(x);g = a + 568 | 0;k[g >> 2] = -1;k[g + 4 >> 2] = -1;k[g + 8 >> 2] = -1;k[g + 12 >> 2] = -1;g = a + 424 | 0;f = a + 428 | 0;if (!(k[g >> 2] | 0)) e = k[f >> 2] | 0;else {
        k[f >> 2] = 0;e = 0;
      }if ((e | 0) < (y | 0)) {
        Ab(g, y);e = k[f >> 2] | 0;if ((e | 0) < (y | 0)) do {
          k[(k[g >> 2] | 0) + (e << 2) >> 2] = 0;e = e + 1 | 0;
        } while ((e | 0) != (y | 0));k[f >> 2] = y;
      }if ((y | 0) > 0) {
        f = k[g >> 2] | 0;e = 0;do {
          k[f + (e << 2) >> 2] = k[A + (e << 2) >> 2];e = e + 1 | 0;
        } while ((e | 0) != (y | 0));
      }e = (yc(a) | 0) << 24 >> 24 == 0;if (!A) return e | 0;Td(z);return e | 0;
    }function sb(a) {
      a = a | 0;return wc(a) | 0;
    }function tb(a, b) {
      a = a | 0;b = b | 0;return (i[(k[a + 4 >> 2] | 0) + (b + -1) >> 0] | 0) != 1 | 0;
    }function ub(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0;if ((c | 0) >= (d | 0)) return;e = k[a + 4 >> 2] | 0;a = c;do {
        k[b + (a - c << 2) >> 2] = (i[e + a >> 0] | 0) != 1 & 1;a = a + 1 | 0;
      } while ((a | 0) != (d | 0));return;
    }function vb(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;if ((c | 0) >= (d | 0)) {
        d = 0;return d | 0;
      }g = e - c | 0;f = k[a + 4 >> 2] | 0;e = 0;a = c;do {
        if (!(i[f + a >> 0] | 0)) {
          k[b + (e << 2) >> 2] = g + a;e = e + 1 | 0;
        }a = a + 1 | 0;
      } while ((a | 0) != (d | 0));return e | 0;
    }function wb(a) {
      a = a | 0;return k[a + 20 >> 2] | 0;
    }function xb(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0;g = a + 20 | 0;e = k[g >> 2] | 0;if ((e | 0) <= 0) {
        g = e;return g | 0;
      }f = k[a + 16 >> 2] | 0;b = d - b | 0;e = 0;do {
        k[c + (e << 2) >> 2] = b + (k[f + (e << 2) >> 2] >> 1);e = e + 1 | 0;a = k[g >> 2] | 0;
      } while ((e | 0) < (a | 0));return a | 0;
    }function yb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0;m = u;u = u + 32 | 0;i = m + 12 | 0;e = m;k[i >> 2] = 0;j = i + 4 | 0;k[j >> 2] = 0;l = i + 8 | 0;k[l >> 2] = 0;k[e >> 2] = 0;f = e + 4 | 0;k[f >> 2] = 0;g = e + 8 | 0;k[g >> 2] = 0;zc(a, i, e, 1) | 0;h = k[f >> 2] | 0;c = k[e >> 2] | 0;if ((h | 0) <= 0) {
        if (c | 0) d = 3;
      } else {
        a = 0;do {
          d = k[c + (a << 2) >> 2] | 0;d = aa((d << 1 & 2 ^ 2) + -1 | 0, (d >> 1) + 1 | 0) | 0;k[b + (a << 2) >> 2] = d;a = a + 1 | 0;
        } while ((a | 0) != (h | 0));d = 3;
      }if ((d | 0) == 3) {
        k[f >> 2] = 0;Td(c);k[e >> 2] = 0;k[g >> 2] = 0;
      }a = k[i >> 2] | 0;if (!a) {
        u = m;return h | 0;
      }k[j >> 2] = 0;Td(a);k[i >> 2] = 0;k[l >> 2] = 0;u = m;return h | 0;
    }function zb(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0;r = u;u = u + 32 | 0;o = r + 12 | 0;n = r;k[o >> 2] = 0;p = o + 4 | 0;k[p >> 2] = 0;q = o + 8 | 0;k[q >> 2] = 0;a: do {
        if ((d | 0) > 0) {
          e = 0;g = 0;i = 0;h = 0;f = 0;while (1) {
            l = k[c + (e << 2) >> 2] | 0;l = (((l | 0) < 0 ? 0 - l | 0 : l) << 1) + -2 | l >>> 31;if ((g | 0) == (i | 0)) {
              j = (i >> 1) + 2 & -2;f = j + -2 >> 31;f = (f & 2) + (j & ~f) | 0;if ((f | 0) > (2147483647 - i | 0)) {
                m = 9;break;
              }f = f + i | 0;k[q >> 2] = f;f = Ud(h, f << 2) | 0;k[o >> 2] = f;if (!f) {
                j = Ec() | 0;if ((k[j >> 2] | 0) == 12) {
                  m = 9;break;
                }f = k[o >> 2] | 0;g = k[p >> 2] | 0;j = f;
              } else {
                g = i;j = f;
              }
            } else {
              j = f;f = h;
            }k[p >> 2] = g + 1;k[j + (g << 2) >> 2] = l;e = e + 1 | 0;if ((e | 0) >= (d | 0)) break a;g = k[p >> 2] | 0;i = k[q >> 2] | 0;h = f;f = j;
          }if ((m | 0) == 9) va(La(1) | 0, 8, 0);
        }
      } while (0);k[n >> 2] = 0;i = n + 4 | 0;k[i >> 2] = 0;g = n + 8 | 0;k[g >> 2] = 0;zc(a, o, n, 1) | 0;h = k[i >> 2] | 0;f = k[n >> 2] | 0;if ((h | 0) <= 0) {
        if (f | 0) m = 13;
      } else {
        e = 0;do {
          m = k[f + (e << 2) >> 2] | 0;m = aa((m << 1 & 2 ^ 2) + -1 | 0, (m >> 1) + 1 | 0) | 0;k[b + (e << 2) >> 2] = m;e = e + 1 | 0;
        } while ((e | 0) != (h | 0));m = 13;
      }if ((m | 0) == 13) {
        k[i >> 2] = 0;Td(f);k[n >> 2] = 0;k[g >> 2] = 0;
      }e = k[o >> 2] | 0;if (!e) {
        u = r;return h | 0;
      }k[p >> 2] = 0;Td(e);k[o >> 2] = 0;k[q >> 2] = 0;u = r;return h | 0;
    }function Ab(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0;c = a + 8 | 0;d = k[c >> 2] | 0;if ((d | 0) >= (b | 0)) return;f = b + 1 - d & -2;e = (d >> 1) + 2 & -2;b = e - f >> 31;b = (b & f) + (e & ~b) | 0;if ((b | 0) > (2147483647 - d | 0)) {
        f = La(1) | 0;va(f | 0, 8, 0);
      }e = k[a >> 2] | 0;f = b + d | 0;k[c >> 2] = f;f = Ud(e, f << 2) | 0;k[a >> 2] = f;if (f | 0) return;f = Ec() | 0;if ((k[f >> 2] | 0) == 12) {
        f = La(1) | 0;va(f | 0, 8, 0);
      } else return;
    }function Bb(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;k[a >> 2] = 144;b = a + 532 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 536 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 540 >> 2] = 0;
      }b = a + 520 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 524 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 528 >> 2] = 0;
      }b = a + 508 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 512 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 516 >> 2] = 0;
      }b = a + 496 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 500 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 504 >> 2] = 0;
      }b = k[a + 476 >> 2] | 0;if (b | 0) Td(b);b = a + 452 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 456 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 460 >> 2] = 0;
      }b = a + 440 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 444 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 448 >> 2] = 0;
      }b = a + 424 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 428 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 432 >> 2] = 0;
      }b = a + 396 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 400 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 404 >> 2] = 0;
      }b = a + 384 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 388 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 392 >> 2] = 0;
      }b = a + 372 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 376 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 380 >> 2] = 0;
      }b = a + 360 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 364 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 368 >> 2] = 0;
      }b = a + 348 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 352 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 356 >> 2] = 0;
      }b = a + 336 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 340 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 344 >> 2] = 0;
      }h = a + 296 | 0;b = a + 320 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 324 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 328 >> 2] = 0;
      }b = a + 308 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 312 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 316 >> 2] = 0;
      }b = k[h >> 2] | 0;if (b | 0) {
        g = a + 300 | 0;c = k[g >> 2] | 0;if ((c | 0) > 0) {
          f = 0;while (1) {
            d = b + (f * 12 | 0) | 0;e = k[d >> 2] | 0;if (e) {
              k[b + (f * 12 | 0) + 4 >> 2] = 0;Td(e);k[d >> 2] = 0;k[b + (f * 12 | 0) + 8 >> 2] = 0;c = k[g >> 2] | 0;
            }b = f + 1 | 0;if ((b | 0) >= (c | 0)) break;f = b;b = k[h >> 2] | 0;
          }b = k[h >> 2] | 0;
        }k[g >> 2] = 0;Td(b);k[h >> 2] = 0;k[a + 304 >> 2] = 0;
      }b = a + 272 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 276 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 280 >> 2] = 0;
      }b = a + 248 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 252 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 256 >> 2] = 0;
      }b = a + 236 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 240 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 244 >> 2] = 0;
      }b = a + 16 | 0;c = k[b >> 2] | 0;if (c | 0) {
        k[a + 20 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 24 >> 2] = 0;
      }b = a + 4 | 0;c = k[b >> 2] | 0;if (!c) return;k[a + 8 >> 2] = 0;Td(c);k[b >> 2] = 0;k[a + 12 >> 2] = 0;return;
    }function Cb(a) {
      a = a | 0;Bb(a);Zd(a);return;
    }function Db(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0;h = u;u = u + 32 | 0;c = h;d = h + 8 | 0;e = a + 476 | 0;f = a + 480 | 0;g = a + 488 | 0;b = (k[f >> 2] | 0) - (k[g >> 2] | 0) | 0;k[d >> 2] = 0;k[d + 4 >> 2] = 0;k[d + 8 >> 2] = 0;k[d + 12 >> 2] = 0;Eb(d, b);b = d + 16 | 0;i[b >> 0] = 0;Fb(a, d);if ((k[a + 28 >> 2] | 0) > 1) {
        j = k[d + 4 >> 2] << 2;k[c >> 2] = k[f >> 2] << 2;k[c + 4 >> 2] = j;Pd(909, c) | 0;
      }i[a + 492 >> 0] = i[b >> 0] | 0;b = k[e >> 2] | 0;if (b | 0) Td(b);k[e >> 2] = k[d >> 2];k[f >> 2] = k[d + 4 >> 2];k[a + 484 >> 2] = k[d + 8 >> 2];k[g >> 2] = k[d + 12 >> 2];u = h;return;
    }function Eb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0;d = a + 8 | 0;e = k[d >> 2] | 0;if (e >>> 0 < b >>> 0) c = e;else return;while (1) {
        if (c >>> 0 >= b >>> 0) break;c = ((c >>> 3) + 2 + (c >>> 1) & -2) + c | 0;k[d >> 2] = c;if (c >>> 0 <= e >>> 0) {
          f = 4;break;
        }
      }if ((f | 0) == 4) va(La(1) | 0, 8, 0);c = Ud(k[a >> 2] | 0, c << 2) | 0;if ((c | 0) == 0 ? (f = Ec() | 0, (k[f >> 2] | 0) == 12) : 0) va(La(1) | 0, 8, 0);k[a >> 2] = c;return;
    }function Fb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0;s = a + 296 | 0;r = a + 324 | 0;d = k[r >> 2] | 0;o = a + 320 | 0;c = k[o >> 2] | 0;if ((d | 0) > 0) {
        p = a + 308 | 0;q = a + 332 | 0;n = 0;do {
          m = c + (n << 2) | 0;e = k[m >> 2] | 0;if (i[(k[p >> 2] | 0) + e >> 0] | 0) {
            c = k[s >> 2] | 0;j = c + (e * 12 | 0) + 4 | 0;d = k[j >> 2] | 0;if ((d | 0) > 0) {
              h = c + (e * 12 | 0) | 0;c = 0;e = 0;do {
                f = k[h >> 2] | 0;g = f + (c << 3) | 0;if ((k[(k[k[q >> 2] >> 2] | 0) + (k[g >> 2] << 2) >> 2] & 3 | 0) != 1) {
                  t = g;g = k[t + 4 >> 2] | 0;d = f + (e << 3) | 0;k[d >> 2] = k[t >> 2];k[d + 4 >> 2] = g;e = e + 1 | 0;d = k[j >> 2] | 0;
                }c = c + 1 | 0;
              } while ((c | 0) < (d | 0));
            } else {
              e = 0;c = 0;
            }c = c - e | 0;if ((c | 0) > 0) k[j >> 2] = d - c;i[(k[p >> 2] | 0) + (k[m >> 2] | 0) >> 0] = 0;c = k[o >> 2] | 0;d = k[r >> 2] | 0;
          }n = n + 1 | 0;
        } while ((n | 0) < (d | 0));
      }if (c | 0) k[r >> 2] = 0;h = a + 400 | 0;if ((k[h >> 2] | 0) > 0) {
        j = a + 476 | 0;g = 0;do {
          f = g << 1;c = k[s >> 2] | 0;e = c + (f * 12 | 0) + 4 | 0;if ((k[e >> 2] | 0) > 0) {
            d = c + (f * 12 | 0) | 0;c = 0;do {
              Gb(j, (k[d >> 2] | 0) + (c << 3) | 0, b);c = c + 1 | 0;
            } while ((c | 0) < (k[e >> 2] | 0));c = k[s >> 2] | 0;
          }d = f | 1;e = c + (d * 12 | 0) + 4 | 0;if ((k[e >> 2] | 0) > 0) {
            d = c + (d * 12 | 0) | 0;c = 0;do {
              Gb(j, (k[d >> 2] | 0) + (c << 3) | 0, b);c = c + 1 | 0;
            } while ((c | 0) < (k[e >> 2] | 0));
          }g = g + 1 | 0;
        } while ((g | 0) < (k[h >> 2] | 0));
      }j = a + 376 | 0;c = k[j >> 2] | 0;if ((c | 0) > 0) {
        m = a + 372 | 0;n = a + 396 | 0;o = a + 476 | 0;p = a + 336 | 0;h = 0;do {
          e = k[n >> 2] | 0;f = e + (k[(k[m >> 2] | 0) + (h << 2) >> 2] >> 1 << 3) | 0;g = k[f >> 2] | 0;do {
            if ((g | 0) != -1) {
              d = (k[o >> 2] | 0) + (g << 2) | 0;if (!(k[d >> 2] & 16)) {
                t = k[d + 4 >> 2] | 0;d = t >> 1;if ((l[(k[p >> 2] | 0) + d >> 0] | 0) != (t & 1 | 0)) break;t = k[e + (d << 3) >> 2] | 0;if (!((t | 0) != -1 & (t | 0) == (g | 0))) break;
              }Gb(o, f, b);c = k[j >> 2] | 0;
            }
          } while (0);h = h + 1 | 0;
        } while ((h | 0) < (c | 0));
      }d = a + 252 | 0;if ((k[d >> 2] | 0) > 0) {
        e = a + 476 | 0;f = a + 248 | 0;c = 0;do {
          Gb(e, (k[f >> 2] | 0) + (c << 2) | 0, b);c = c + 1 | 0;
        } while ((c | 0) < (k[d >> 2] | 0));
      }e = a + 240 | 0;if ((k[e >> 2] | 0) <= 0) return;f = a + 476 | 0;d = a + 236 | 0;c = 0;do {
        Gb(f, (k[d >> 2] | 0) + (c << 2) | 0, b);c = c + 1 | 0;
      } while ((c | 0) < (k[e >> 2] | 0));return;
    }function Gb(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0;d = (k[a >> 2] | 0) + (k[b >> 2] << 2) | 0;a = k[d >> 2] | 0;if (a & 16 | 0) {
        k[b >> 2] = k[d + 4 >> 2];return;
      }e = Hb(c, d, (a & 4 | 0) != 0, (a & 32 | 0) != 0) | 0;k[b >> 2] = e;a = k[d >> 2] | 0;k[d >> 2] = a | 16;k[d + 4 >> 2] = e;e = (k[c >> 2] | 0) + (k[b >> 2] << 2) | 0;k[e >> 2] = k[e >> 2] & -4 | a & 3;e = (k[c >> 2] | 0) + (k[b >> 2] << 2) | 0;a = k[e >> 2] | 0;if (a & 4 | 0) {
        k[e + 4 + (a >>> 6 << 2) >> 2] = k[d + 4 + ((k[d >> 2] | 0) >>> 6 << 2) >> 2];return;
      }if (a & 32 | 0) {
        k[e + 4 + (a >>> 6 << 2) >> 2] = k[d + 4 + ((k[d >> 2] | 0) >>> 6 << 2) >> 2];return;
      }if (!(a & 8)) return;a = a >>> 6;if (!a) {
        b = 0;a = 0;
      } else {
        c = 0;b = 0;do {
          b = 1 << ((k[e + 4 + (c << 2) >> 2] | 0) >>> 1 & 31) | b;c = c + 1 | 0;
        } while ((c | 0) != (a | 0));
      }k[e + 4 + (a << 2) >> 2] = b;return;
    }function Hb(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l[a + 16 >> 0] | 0 | (c | d) & 1;f = ((e + ((k[b >> 2] | 0) >>> 6) << 2) + 4 | 0) >>> 2;h = a + 4 | 0;Eb(a, f + (k[h >> 2] | 0) | 0);g = k[h >> 2] | 0;f = f + g | 0;k[h >> 2] = f;if (f >>> 0 < g >>> 0) va(La(1) | 0, 8, 0);f = (k[a >> 2] | 0) + (g << 2) | 0;a = (d & 1) << 5 | (c & 1) << 2 | e << 3;k[f >> 2] = k[f >> 2] & -64 | a;a = k[b >> 2] & -64 | a;k[f >> 2] = a;if ((k[b >> 2] | 0) >>> 0 > 63) {
        a = 0;do {
          k[f + 4 + (a << 2) >> 2] = k[b + 4 + (a << 2) >> 2];a = a + 1 | 0;
        } while ((a | 0) < ((k[b >> 2] | 0) >>> 6 | 0));c = k[f >> 2] | 0;
      } else c = a;if (!(c & 8)) return g | 0;if (c & 4 | 0) {
        o[f + 4 + (c >>> 6 << 2) >> 2] = 0.0;return g | 0;
      }a = c >>> 6;if (c & 32 | 0) {
        k[f + 4 + (a << 2) >> 2] = -1;return g | 0;
      }if (!a) {
        c = 0;a = 0;
      } else {
        d = 0;c = 0;do {
          c = 1 << ((k[f + 4 + (d << 2) >> 2] | 0) >>> 1 & 31) | c;d = d + 1 | 0;
        } while ((d | 0) != (a | 0));
      }k[f + 4 + (a << 2) >> 2] = c;return g | 0;
    }function Ib() {
      var a = 0,
          b = 0,
          c = 0,
          d = 0;c = u;u = u + 16 | 0;b = c;k[1308] = 164;k[1309] = 992;k[1310] = 1002;k[1311] = 1037;k[1312] = 1042;if ((i[5288] | 0) == 0 ? re(5288) | 0 : 0) {
        k[1394] = 0;k[1395] = 0;k[1396] = 0;ta(14, 5576, x | 0) | 0;
      }a = k[1395] | 0;if ((a | 0) == (k[1396] | 0)) {
        Kb(5576, a + 1 | 0);a = k[1395] | 0;
      }d = k[1394] | 0;k[1395] = a + 1;k[d + (a << 2) >> 2] = 5232;k[1308] = 188;p[657] = 0.0;p[658] = 1.0;i[5272] = 0;i[5273] = 0;j[2637] = j[b >> 1] | 0;j[2638] = j[b + 2 >> 1] | 0;j[2639] = j[b + 4 >> 1] | 0;p[660] = .95;k[1324] = 164;k[1325] = 1051;k[1326] = 1061;k[1327] = 1037;k[1328] = 1042;if ((i[5288] | 0) == 0 ? re(5288) | 0 : 0) {
        k[1394] = 0;k[1395] = 0;k[1396] = 0;ta(14, 5576, x | 0) | 0;
      }a = k[1395] | 0;if ((a | 0) == (k[1396] | 0)) {
        Kb(5576, a + 1 | 0);a = k[1395] | 0;
      }d = k[1394] | 0;k[1395] = a + 1;k[d + (a << 2) >> 2] = 5296;k[1324] = 188;p[665] = 0.0;p[666] = 1.0;i[5336] = 0;i[5337] = 0;j[2669] = j[b >> 1] | 0;j[2670] = j[b + 2 >> 1] | 0;j[2671] = j[b + 4 >> 1] | 0;p[668] = .999;k[1338] = 164;k[1339] = 1094;k[1340] = 1103;k[1341] = 1037;k[1342] = 1042;if ((i[5288] | 0) == 0 ? re(5288) | 0 : 0) {
        k[1394] = 0;k[1395] = 0;k[1396] = 0;ta(14, 5576, x | 0) | 0;
      }a = k[1395] | 0;if ((a | 0) == (k[1396] | 0)) {
        Kb(5576, a + 1 | 0);a = k[1395] | 0;
      }d = k[1394] | 0;k[1395] = a + 1;k[d + (a << 2) >> 2] = 5352;k[1338] = 188;p[672] = 0.0;p[673] = 1.0;i[5392] = 1;i[5393] = 1;j[2697] = j[b >> 1] | 0;j[2698] = j[b + 2 >> 1] | 0;j[2699] = j[b + 4 >> 1] | 0;p[675] = 0.0;k[1352] = 164;k[1353] = 1185;k[1354] = 1194;k[1355] = 1037;k[1356] = 1042;if ((i[5288] | 0) == 0 ? re(5288) | 0 : 0) {
        k[1394] = 0;k[1395] = 0;k[1396] = 0;ta(14, 5576, x | 0) | 0;
      }a = k[1395] | 0;if ((a | 0) == (k[1396] | 0)) {
        Kb(5576, a + 1 | 0);a = k[1395] | 0;
      }d = k[1394] | 0;k[1395] = a + 1;k[d + (a << 2) >> 2] = 5408;k[1352] = 188;p[679] = 0.0;p[680] = D;i[5448] = 0;i[5449] = 0;j[2725] = j[b >> 1] | 0;j[2726] = j[b + 2 >> 1] | 0;j[2727] = j[b + 4 >> 1] | 0;p[682] = 91648253.0;k[1397] = 164;k[1398] = 1232;k[1399] = 1243;k[1400] = 1037;k[1401] = 1307;if ((i[5288] | 0) == 0 ? re(5288) | 0 : 0) {
        k[1394] = 0;k[1395] = 0;k[1396] = 0;ta(14, 5576, x | 0) | 0;
      }a = k[1395] | 0;if ((a | 0) == (k[1396] | 0)) {
        Kb(5576, a + 1 | 0);a = k[1395] | 0;
      }d = k[1394] | 0;k[1395] = a + 1;k[d + (a << 2) >> 2] = 5588;k[1397] = 212;d = 5608;k[d >> 2] = 0;k[d + 4 >> 2] = 2;k[1404] = 2;k[1405] = 164;k[1406] = 1315;k[1407] = 1328;k[1408] = 1037;k[1409] = 1307;if ((i[5288] | 0) == 0 ? re(5288) | 0 : 0) {
        k[1394] = 0;k[1395] = 0;k[1396] = 0;ta(14, 5576, x | 0) | 0;
      }a = k[1395] | 0;if ((a | 0) == (k[1396] | 0)) {
        Kb(5576, a + 1 | 0);a = k[1395] | 0;
      }d = k[1394] | 0;k[1395] = a + 1;k[d + (a << 2) >> 2] = 5620;k[1405] = 212;d = 5640;k[d >> 2] = 0;k[d + 4 >> 2] = 2;k[1412] = 2;k[1413] = 164;k[1414] = 1391;k[1415] = 1400;k[1416] = 1037;k[1417] = 1431;if ((i[5288] | 0) == 0 ? re(5288) | 0 : 0) {
        k[1394] = 0;k[1395] = 0;k[1396] = 0;ta(14, 5576, x | 0) | 0;
      }a = k[1395] | 0;if ((a | 0) == (k[1396] | 0)) {
        Kb(5576, a + 1 | 0);a = k[1395] | 0;
      }d = k[1394] | 0;k[1395] = a + 1;k[d + (a << 2) >> 2] = 5652;k[1413] = 236;i[5672] = 0;k[1419] = 164;k[1420] = 1438;k[1421] = 1443;k[1422] = 1037;k[1423] = 1431;if ((i[5288] | 0) == 0 ? re(5288) | 0 : 0) {
        k[1394] = 0;k[1395] = 0;k[1396] = 0;ta(14, 5576, x | 0) | 0;
      }a = k[1395] | 0;if ((a | 0) == (k[1396] | 0)) {
        Kb(5576, a + 1 | 0);a = k[1395] | 0;
      }d = k[1394] | 0;k[1395] = a + 1;k[d + (a << 2) >> 2] = 5676;k[1419] = 236;i[5696] = 1;k[1425] = 164;k[1426] = 1473;k[1427] = 1480;k[1428] = 1037;k[1429] = 1307;if ((i[5288] | 0) == 0 ? re(5288) | 0 : 0) {
        k[1394] = 0;k[1395] = 0;k[1396] = 0;ta(14, 5576, x | 0) | 0;
      }a = k[1395] | 0;if ((a | 0) == (k[1396] | 0)) {
        Kb(5576, a + 1 | 0);a = k[1395] | 0;
      }d = k[1394] | 0;k[1395] = a + 1;k[d + (a << 2) >> 2] = 5700;k[1425] = 212;d = 5720;k[d >> 2] = 1;k[d + 4 >> 2] = 2147483647;k[1432] = 100;k[1366] = 164;k[1367] = 1506;k[1368] = 1511;k[1369] = 1037;k[1370] = 1042;do {
        if (!(i[5288] | 0)) {
          if (!(re(5288) | 0)) break;k[1394] = 0;k[1395] = 0;k[1396] = 0;ta(14, 5576, x | 0) | 0;
        }
      } while (0);a = k[1395] | 0;if ((a | 0) == (k[1396] | 0)) {
        Kb(5576, a + 1 | 0);a = k[1395] | 0;
      }d = k[1394] | 0;k[1395] = a + 1;k[d + (a << 2) >> 2] = 5464;k[1366] = 188;p[686] = 1.0;p[687] = D;i[5504] = 0;i[5505] = 0;j[2753] = j[b >> 1] | 0;j[2754] = j[b + 2 >> 1] | 0;j[2755] = j[b + 4 >> 1] | 0;p[689] = 2.0;k[1380] = 164;k[1381] = 1544;k[1382] = 1552;k[1383] = 1037;k[1384] = 1042;do {
        if (!(i[5288] | 0)) {
          if (!(re(5288) | 0)) break;k[1394] = 0;k[1395] = 0;k[1396] = 0;ta(14, 5576, x | 0) | 0;
        }
      } while (0);a = k[1395] | 0;if ((a | 0) == (k[1396] | 0)) {
        Kb(5576, a + 1 | 0);a = k[1395] | 0;
      }d = k[1394] | 0;k[1395] = a + 1;k[d + (a << 2) >> 2] = 5520;k[1380] = 188;p[693] = 0.0;p[694] = D;i[5560] = 0;i[5561] = 0;j[2781] = j[b >> 1] | 0;j[2782] = j[b + 2 >> 1] | 0;j[2783] = j[b + 4 >> 1] | 0;p[696] = .2;k[1433] = 164;k[1434] = 1631;k[1435] = 1641;k[1436] = 1037;k[1437] = 1431;do {
        if (!(i[5288] | 0)) {
          if (!(re(5288) | 0)) break;k[1394] = 0;k[1395] = 0;k[1396] = 0;ta(14, 5576, x | 0) | 0;
        }
      } while (0);a = k[1395] | 0;if ((a | 0) != (k[1396] | 0)) {
        d = a;b = k[1394] | 0;a = d + 1 | 0;k[1395] = a;d = b + (d << 2) | 0;k[d >> 2] = 5732;k[1433] = 236;i[5752] = 0;u = c;return;
      }Kb(5576, a + 1 | 0);d = k[1395] | 0;b = k[1394] | 0;a = d + 1 | 0;k[1395] = a;d = b + (d << 2) | 0;k[d >> 2] = 5732;k[1433] = 236;i[5752] = 0;u = c;return;
    }function Jb(a) {
      a = a | 0;var b = 0;b = k[a >> 2] | 0;if (!b) return;k[a + 4 >> 2] = 0;Td(b);k[a >> 2] = 0;k[a + 8 >> 2] = 0;return;
    }function Kb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0;c = a + 8 | 0;d = k[c >> 2] | 0;if ((d | 0) >= (b | 0)) return;f = b + 1 - d & -2;e = (d >> 1) + 2 & -2;b = e - f >> 31;b = (b & f) + (e & ~b) | 0;if ((b | 0) > (2147483647 - d | 0)) {
        f = La(1) | 0;va(f | 0, 8, 0);
      }e = k[a >> 2] | 0;f = b + d | 0;k[c >> 2] = f;f = Ud(e, f << 2) | 0;k[a >> 2] = f;if (f | 0) return;f = Ec() | 0;if ((k[f >> 2] | 0) == 12) {
        f = La(1) | 0;va(f | 0, 8, 0);
      } else return;
    }function Lb(a) {
      a = a | 0;return;
    }function Mb(a) {
      a = a | 0;Zd(a);return;
    }function Nb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0;if ((i[b >> 0] | 0) != 45) {
        a = 0;return a | 0;
      }c = b + 1 | 0;if ((i[c >> 0] | 0) == 110 ? (i[b + 2 >> 0] | 0) == 111 : 0) {
        e = (i[b + 3 >> 0] | 0) == 45;d = (e ^ 1) & 1;c = e ? b + 4 | 0 : c;
      } else d = 1;if (Kc(c, k[a + 4 >> 2] | 0) | 0) {
        e = 0;return e | 0;
      }i[a + 20 >> 0] = d;e = 1;return e | 0;
    }function Ob(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0;h = u;u = u + 32 | 0;g = h + 16 | 0;f = h + 8 | 0;c = h;d = k[63] | 0;e = a + 4 | 0;j = k[e >> 2] | 0;k[c >> 2] = j;k[c + 4 >> 2] = j;Md(d, 1700, c) | 0;c = 0;while (1) {
        j = c >>> 0 < (32 - ((Mc(k[e >> 2] | 0) | 0) << 1) | 0) >>> 0;Nd(32, d) | 0;if (j) c = c + 1 | 0;else break;
      }k[f >> 2] = i[a + 20 >> 0] | 0 ? 1714 : 1717;Md(d, 1721, f) | 0;if (!b) {
        u = h;return;
      }k[g >> 2] = k[a + 8 >> 2];Md(d, 1736, g) | 0;Nd(10, d) | 0;u = h;return;
    }function Pb(a) {
      a = a | 0;Zd(a);return;
    }function Qb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0;n = u;u = u + 32 | 0;m = n + 8 | 0;l = n;j = n + 16 | 0;if ((i[b >> 0] | 0) != 45) {
        m = 0;u = n;return m | 0;
      }e = b + 1 | 0;g = a + 4 | 0;f = k[g >> 2] | 0;c = i[f >> 0] | 0;a: do {
        if (!(c << 24 >> 24)) b = e;else {
          d = 0;b = e;while (1) {
            d = d + 1 | 0;if ((i[b >> 0] | 0) != c << 24 >> 24) {
              b = 0;break;
            }c = i[f + d >> 0] | 0;b = e + d | 0;if (!(c << 24 >> 24)) break a;
          }u = n;return b | 0;
        }
      } while (0);if ((i[b >> 0] | 0) != 61) {
        m = 0;u = n;return m | 0;
      }b = b + 1 | 0;c = td(b, j, 10) | 0;do {
        if (k[j >> 2] | 0) {
          if ((c | 0) > (k[a + 24 >> 2] | 0)) {
            j = k[63] | 0;f = k[g >> 2] | 0;k[l >> 2] = b;k[l + 4 >> 2] = f;Md(j, 1844, l) | 0;Ha(1);
          }if ((c | 0) < (k[a + 20 >> 2] | 0)) {
            l = k[63] | 0;j = k[g >> 2] | 0;k[m >> 2] = b;k[m + 4 >> 2] = j;Md(l, 1893, m) | 0;Ha(1);
          } else {
            k[a + 28 >> 2] = c;h = 1;break;
          }
        } else h = 0;
      } while (0);m = h;u = n;return m | 0;
    }function Rb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;i = u;u = u + 48 | 0;f = i + 32 | 0;h = i + 24 | 0;g = i + 16 | 0;d = i + 8 | 0;c = i;e = k[63] | 0;j = k[a + 16 >> 2] | 0;k[c >> 2] = k[a + 4 >> 2];k[c + 4 >> 2] = j;Md(e, 1790, c) | 0;c = k[a + 20 >> 2] | 0;if ((c | 0) == -2147483648) zd(1808, 4, 1, e) | 0;else {
        k[d >> 2] = c;Md(e, 1813, d) | 0;
      }zd(1817, 4, 1, e) | 0;c = k[a + 24 >> 2] | 0;if ((c | 0) == 2147483647) zd(1822, 4, 1, e) | 0;else {
        k[g >> 2] = c;Md(e, 1813, g) | 0;
      }k[h >> 2] = k[a + 28 >> 2];Md(e, 1827, h) | 0;if (!b) {
        u = i;return;
      }k[f >> 2] = k[a + 8 >> 2];Md(e, 1736, f) | 0;Nd(10, e) | 0;u = i;return;
    }function Sb(a) {
      a = a | 0;Zd(a);return;
    }function Tb(a, b) {
      a = a | 0;b = b | 0;var c = 0.0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0.0;n = u;u = u + 32 | 0;m = n + 8 | 0;l = n;j = n + 16 | 0;if ((i[b >> 0] | 0) != 45) {
        m = 0;u = n;return m | 0;
      }f = b + 1 | 0;h = a + 4 | 0;g = k[h >> 2] | 0;d = i[g >> 0] | 0;a: do {
        if (!(d << 24 >> 24)) b = f;else {
          e = 0;b = f;while (1) {
            e = e + 1 | 0;if ((i[b >> 0] | 0) != d << 24 >> 24) {
              b = 0;break;
            }d = i[g + e >> 0] | 0;b = f + e | 0;if (!(d << 24 >> 24)) break a;
          }u = n;return b | 0;
        }
      } while (0);if ((i[b >> 0] | 0) != 61) {
        m = 0;u = n;return m | 0;
      }b = b + 1 | 0;c = +Rd(b, j);if (!(k[j >> 2] | 0)) b = 0;else {
        o = +p[a + 32 >> 3];if (c >= o ? c != o | (i[a + 41 >> 0] | 0) == 0 : 0) {
          j = k[63] | 0;g = k[h >> 2] | 0;k[l >> 2] = b;k[l + 4 >> 2] = g;Md(j, 1844, l) | 0;Ha(1);
        }o = +p[a + 24 >> 3];if (c <= o ? c != o | (i[a + 40 >> 0] | 0) == 0 : 0) {
          l = k[63] | 0;j = k[h >> 2] | 0;k[m >> 2] = b;k[m + 4 >> 2] = j;Md(l, 1893, m) | 0;Ha(1);
        }p[a + 48 >> 3] = c;b = 1;
      }m = b;u = n;return m | 0;
    }function Ub(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0.0,
          h = 0,
          j = 0.0,
          l = 0.0,
          m = 0,
          n = 0;e = u;u = u + 64 | 0;d = e + 48 | 0;f = e;c = k[63] | 0;n = k[a + 16 >> 2] | 0;m = i[a + 40 >> 0] | 0 ? 91 : 40;l = +p[a + 24 >> 3];j = +p[a + 32 >> 3];h = i[a + 41 >> 0] | 0 ? 93 : 41;g = +p[a + 48 >> 3];k[f >> 2] = k[a + 4 >> 2];k[f + 4 >> 2] = n;k[f + 8 >> 2] = m;p[f + 16 >> 3] = l;p[f + 24 >> 3] = j;k[f + 32 >> 2] = h;p[f + 40 >> 3] = g;Md(c, 1963, f) | 0;if (!b) {
        u = e;return;
      }k[d >> 2] = k[a + 8 >> 2];Md(c, 1736, d) | 0;Nd(10, c) | 0;u = e;return;
    }function Vb(a) {
      a = a | 0;Zd(a);return;
    }function Wb(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0;k[a >> 2] = 144;b = a + 4 | 0;k[b >> 2] = 0;k[b + 4 >> 2] = 0;k[b + 8 >> 2] = 0;k[b + 12 >> 2] = 0;k[b + 16 >> 2] = 0;k[b + 20 >> 2] = 0;k[b + 24 >> 2] = 0;p[a + 32 >> 3] = +p[660];p[a + 40 >> 3] = +p[668];p[a + 48 >> 3] = +p[675];p[a + 56 >> 3] = +p[682];i[a + 64 >> 0] = i[5696] | 0;k[a + 68 >> 2] = k[1404];k[a + 72 >> 2] = k[1412];i[a + 76 >> 0] = 0;i[a + 77 >> 0] = i[5672] | 0;p[a + 80 >> 3] = +p[696];k[a + 88 >> 2] = k[1432];p[a + 96 >> 3] = +p[689];i[a + 104 >> 0] = i[5752] | 0;p[a + 112 >> 3] = .3333333333333333;p[a + 120 >> 3] = 1.1;k[a + 128 >> 2] = 100;p[a + 136 >> 3] = 1.5;b = a + 232 | 0;f = a + 144 | 0;g = f + 88 | 0;do {
        k[f >> 2] = 0;f = f + 4 | 0;
      } while ((f | 0) < (g | 0));i[b >> 0] = 1;d = a + 236 | 0;k[d >> 2] = 0;k[d + 4 >> 2] = 0;k[d + 8 >> 2] = 0;k[d + 12 >> 2] = 0;k[d + 16 >> 2] = 0;k[d + 20 >> 2] = 0;p[a + 264 >> 3] = 1.0;d = a + 272 | 0;k[d >> 2] = 0;k[a + 276 >> 2] = 0;k[a + 280 >> 2] = 0;p[a + 288 >> 3] = 1.0;e = a + 476 | 0;b = e;c = a + 332 | 0;f = a + 296 | 0;g = f + 36 | 0;do {
        k[f >> 2] = 0;f = f + 4 | 0;
      } while ((f | 0) < (g | 0));k[c >> 2] = b;b = a + 412 | 0;f = a + 336 | 0;g = f + 76 | 0;do {
        k[f >> 2] = 0;f = f + 4 | 0;
      } while ((f | 0) < (g | 0));k[b >> 2] = -1;b = a + 416 | 0;k[b >> 2] = 0;k[b + 4 >> 2] = 0;k[b + 8 >> 2] = 0;k[b + 12 >> 2] = 0;k[b + 16 >> 2] = 0;k[a + 436 >> 2] = d;b = a + 440 | 0;k[b >> 2] = 0;k[b + 4 >> 2] = 0;k[b + 8 >> 2] = 0;k[b + 12 >> 2] = 0;k[b + 16 >> 2] = 0;k[b + 20 >> 2] = 0;k[b + 24 >> 2] = 0;k[b + 28 >> 2] = 0;i[a + 472 >> 0] = 1;k[e >> 2] = 0;k[e + 4 >> 2] = 0;k[e + 8 >> 2] = 0;k[e + 12 >> 2] = 0;Eb(e, 1048576);i[a + 492 >> 0] = 0;b = a + 568 | 0;f = a + 496 | 0;g = f + 48 | 0;do {
        k[f >> 2] = 0;f = f + 4 | 0;
      } while ((f | 0) < (g | 0));k[b >> 2] = -1;k[b + 4 >> 2] = -1;k[b + 8 >> 2] = -1;k[b + 12 >> 2] = -1;i[a + 584 >> 0] = 0;return;
    }function Xb(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0.0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          q = 0;n = u;u = u + 16 | 0;f = n;l = b & 1;j = a + 400 | 0;m = k[j >> 2] | 0;h = a + 296 | 0;b = m << 1;k[f >> 2] = b;Yb(h, f);k[f >> 2] = b | 1;Yb(h, f);f = a + 336 | 0;h = a + 340 | 0;b = k[h >> 2] | 0;d = a + 344 | 0;if ((b | 0) == (k[d >> 2] | 0)) {
        o = (b >> 1) + 2 & -2;e = o + -2 >> 31;e = (e & 2) + (o & ~e) | 0;if ((e | 0) > (2147483647 - b | 0)) {
          o = La(1) | 0;va(o | 0, 8, 0);
        }q = k[f >> 2] | 0;o = e + b | 0;k[d >> 2] = o;o = Ud(q, o) | 0;k[f >> 2] = o;if ((o | 0) == 0 ? (q = Ec() | 0, (k[q >> 2] | 0) == 12) : 0) {
          q = La(1) | 0;va(q | 0, 8, 0);
        }b = k[h >> 2] | 0;
      }d = k[f >> 2] | 0;k[h >> 2] = b + 1;i[d + b >> 0] = 2;d = a + 396 | 0;b = k[j >> 2] | 0;if ((b | 0) == (k[a + 404 >> 2] | 0)) {
        Zb(d, b + 1 | 0);b = k[j >> 2] | 0;
      }d = k[d >> 2] | 0;k[j >> 2] = b + 1;d = d + (b << 3) | 0;k[d >> 2] = -1;k[d + 4 >> 2] = 0;d = a + 272 | 0;if (!(i[a + 77 >> 0] | 0)) g = 0.0;else {
        q = a + 56 | 0;g = +p[q >> 3] * 1389796.0;g = g - +(~~(g / 2147483647.0) | 0) * 2147483647.0;p[q >> 3] = g;g = g / 2147483647.0 * 1.0e-05;
      }e = a + 276 | 0;b = k[e >> 2] | 0;if ((b | 0) == (k[a + 280 >> 2] | 0)) {
        _b(d, b + 1 | 0);b = k[e >> 2] | 0;
      }d = k[d >> 2] | 0;k[e >> 2] = b + 1;p[d + (b << 3) >> 3] = g;d = a + 496 | 0;h = a + 500 | 0;b = k[h >> 2] | 0;e = a + 504 | 0;if ((b | 0) == (k[e >> 2] | 0)) {
        q = (b >> 1) + 2 & -2;f = q + -2 >> 31;f = (f & 2) + (q & ~f) | 0;if ((f | 0) > (2147483647 - b | 0)) {
          q = La(1) | 0;va(q | 0, 8, 0);
        }o = k[d >> 2] | 0;q = f + b | 0;k[e >> 2] = q;q = Ud(o, q) | 0;k[d >> 2] = q;if ((q | 0) == 0 ? (q = Ec() | 0, (k[q >> 2] | 0) == 12) : 0) {
          q = La(1) | 0;va(q | 0, 8, 0);
        }b = k[h >> 2] | 0;
      }d = k[d >> 2] | 0;k[h >> 2] = b + 1;i[d + b >> 0] = 0;d = a + 348 | 0;h = a + 352 | 0;b = k[h >> 2] | 0;e = a + 356 | 0;if ((b | 0) == (k[e >> 2] | 0)) {
        q = (b >> 1) + 2 & -2;f = q + -2 >> 31;f = (f & 2) + (q & ~f) | 0;if ((f | 0) > (2147483647 - b | 0)) {
          q = La(1) | 0;va(q | 0, 8, 0);
        }o = k[d >> 2] | 0;q = f + b | 0;k[e >> 2] = q;q = Ud(o, q) | 0;k[d >> 2] = q;if ((q | 0) == 0 ? (q = Ec() | 0, (k[q >> 2] | 0) == 12) : 0) {
          q = La(1) | 0;va(q | 0, 8, 0);
        }b = k[h >> 2] | 0;
      }d = k[d >> 2] | 0;k[h >> 2] = b + 1;i[d + b >> 0] = l;d = a + 360 | 0;h = a + 364 | 0;b = k[h >> 2] | 0;e = a + 368 | 0;if ((b | 0) == (k[e >> 2] | 0)) {
        q = (b >> 1) + 2 & -2;f = q + -2 >> 31;f = (f & 2) + (q & ~f) | 0;if ((f | 0) > (2147483647 - b | 0)) {
          q = La(1) | 0;va(q | 0, 8, 0);
        }o = k[d >> 2] | 0;q = f + b | 0;k[e >> 2] = q;q = Ud(o, q) | 0;k[d >> 2] = q;if ((q | 0) == 0 ? (q = Ec() | 0, (k[q >> 2] | 0) == 12) : 0) {
          q = La(1) | 0;va(q | 0, 8, 0);
        }b = k[h >> 2] | 0;
      }i[(k[d >> 2] | 0) + b >> 0] = 0;k[h >> 2] = (k[h >> 2] | 0) + 1;Ab(a + 372 | 0, m + 1 | 0);b = c & 1;f = a + 360 | 0;d = (k[f >> 2] | 0) + m | 0;e = (i[d >> 0] | 0) == 0;if (c) {
        if (e) {
          q = a + 192 | 0;o = q;o = we(k[o >> 2] | 0, k[o + 4 >> 2] | 0, 1, 0) | 0;k[q >> 2] = o;k[q + 4 >> 2] = N;
        }
      } else if (!e) {
        q = a + 192 | 0;o = q;o = we(k[o >> 2] | 0, k[o + 4 >> 2] | 0, -1, -1) | 0;k[q >> 2] = o;k[q + 4 >> 2] = N;
      }i[d >> 0] = b;b = a + 436 | 0;if ((k[a + 456 >> 2] | 0) > (m | 0) ? (k[(k[a + 452 >> 2] | 0) + (m << 2) >> 2] | 0) > -1 : 0) {
        u = n;return m | 0;
      }if (!(i[(k[f >> 2] | 0) + m >> 0] | 0)) {
        u = n;return m | 0;
      }$b(b, m);u = n;return m | 0;
    }function Yb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0;c = k[b >> 2] | 0;d = c + 1 | 0;e = a + 4 | 0;if ((k[e >> 2] | 0) <= (c | 0)) {
        bc(a, d);f = k[e >> 2] | 0;if ((c | 0) >= (f | 0)) xe((k[a >> 2] | 0) + (f * 12 | 0) | 0, 0, (d - f | 0) * 12 | 0) | 0;k[e >> 2] = d;c = k[b >> 2] | 0;
      }f = a + 12 | 0;g = c + 1 | 0;h = a + 16 | 0;if ((k[h >> 2] | 0) > (c | 0)) return;b = a + 20 | 0;d = k[b >> 2] | 0;if ((d | 0) <= (c | 0)) {
        j = c + 2 - d & -2;a = (d >> 1) + 2 & -2;e = a - j >> 31;e = (e & j) + (a & ~e) | 0;if ((e | 0) > (2147483647 - d | 0)) {
          j = La(1) | 0;va(j | 0, 8, 0);
        }a = k[f >> 2] | 0;j = e + d | 0;k[b >> 2] = j;j = Ud(a, j) | 0;k[f >> 2] = j;if ((j | 0) == 0 ? (j = Ec() | 0, (k[j >> 2] | 0) == 12) : 0) {
          j = La(1) | 0;va(j | 0, 8, 0);
        }
      }b = k[h >> 2] | 0;if ((b | 0) <= (c | 0)) do {
        i[(k[f >> 2] | 0) + b >> 0] = 0;b = b + 1 | 0;
      } while ((b | 0) != (g | 0));k[h >> 2] = g;return;
    }function Zb(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0;c = a + 8 | 0;d = k[c >> 2] | 0;if ((d | 0) >= (b | 0)) return;f = b + 1 - d & -2;e = (d >> 1) + 2 & -2;b = e - f >> 31;b = (b & f) + (e & ~b) | 0;if ((b | 0) > (2147483647 - d | 0)) {
        f = La(1) | 0;va(f | 0, 8, 0);
      }e = k[a >> 2] | 0;f = b + d | 0;k[c >> 2] = f;f = Ud(e, f << 3) | 0;k[a >> 2] = f;if (f | 0) return;f = Ec() | 0;if ((k[f >> 2] | 0) == 12) {
        f = La(1) | 0;va(f | 0, 8, 0);
      } else return;
    }function _b(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0;c = a + 8 | 0;d = k[c >> 2] | 0;if ((d | 0) >= (b | 0)) return;f = b + 1 - d & -2;e = (d >> 1) + 2 & -2;b = e - f >> 31;b = (b & f) + (e & ~b) | 0;if ((b | 0) > (2147483647 - d | 0)) {
        f = La(1) | 0;va(f | 0, 8, 0);
      }e = k[a >> 2] | 0;f = b + d | 0;k[c >> 2] = f;f = Ud(e, f << 3) | 0;k[a >> 2] = f;if (f | 0) return;f = Ec() | 0;if ((k[f >> 2] | 0) == 12) {
        f = La(1) | 0;va(f | 0, 8, 0);
      } else return;
    }function $b(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;g = a + 16 | 0;c = b + 1 | 0;d = a + 20 | 0;if ((k[d >> 2] | 0) <= (b | 0)) {
        ac(g, c);e = k[d >> 2] | 0;if ((e | 0) <= (b | 0)) xe((k[g >> 2] | 0) + (e << 2) | 0, -1, c - e << 2 | 0) | 0;k[d >> 2] = c;
      }e = a + 4 | 0;f = a + 8 | 0;c = k[g >> 2] | 0;k[c + (b << 2) >> 2] = k[f >> 2];d = k[f >> 2] | 0;if ((d | 0) == (k[a + 12 >> 2] | 0)) {
        ac(e, d + 1 | 0);i = k[g >> 2] | 0;c = k[f >> 2] | 0;
      } else {
        i = c;c = d;
      }h = k[e >> 2] | 0;k[f >> 2] = c + 1;k[h + (c << 2) >> 2] = b;c = k[i + (b << 2) >> 2] | 0;g = k[h + (c << 2) >> 2] | 0;if (!c) {
        b = 0;a = h + (b << 2) | 0;k[a >> 2] = g;a = i + (g << 2) | 0;k[a >> 2] = b;return;
      }d = c;while (1) {
        c = d;d = d + -1 >> 1;e = h + (d << 2) | 0;f = k[e >> 2] | 0;b = k[k[a >> 2] >> 2] | 0;if (!(+p[b + (g << 3) >> 3] > +p[b + (f << 3) >> 3])) {
          d = 11;break;
        }k[h + (c << 2) >> 2] = f;k[i + (k[e >> 2] << 2) >> 2] = c;if (!d) {
          c = 0;d = 11;break;
        }
      }if ((d | 0) == 11) {
        a = h + (c << 2) | 0;k[a >> 2] = g;a = i + (g << 2) | 0;k[a >> 2] = c;return;
      }
    }function ac(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0;c = a + 8 | 0;d = k[c >> 2] | 0;if ((d | 0) >= (b | 0)) return;f = b + 1 - d & -2;e = (d >> 1) + 2 & -2;b = e - f >> 31;b = (b & f) + (e & ~b) | 0;if ((b | 0) > (2147483647 - d | 0)) {
        f = La(1) | 0;va(f | 0, 8, 0);
      }e = k[a >> 2] | 0;f = b + d | 0;k[c >> 2] = f;f = Ud(e, f << 2) | 0;k[a >> 2] = f;if (f | 0) return;f = Ec() | 0;if ((k[f >> 2] | 0) == 12) {
        f = La(1) | 0;va(f | 0, 8, 0);
      } else return;
    }function bc(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0;c = a + 8 | 0;d = k[c >> 2] | 0;if ((d | 0) >= (b | 0)) return;f = b + 1 - d & -2;e = (d >> 1) + 2 & -2;b = e - f >> 31;b = (b & f) + (e & ~b) | 0;if ((b | 0) > (2147483647 - d | 0)) {
        f = La(1) | 0;va(f | 0, 8, 0);
      }e = k[a >> 2] | 0;f = b + d | 0;k[c >> 2] = f;f = Ud(e, f * 12 | 0) | 0;k[a >> 2] = f;if (f | 0) return;f = Ec() | 0;if ((k[f >> 2] | 0) == 12) {
        f = La(1) | 0;va(f | 0, 8, 0);
      } else return;
    }function cc(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0;p = u;u = u + 16 | 0;c = p + 1 | 0;o = a + 232 | 0;if (!(i[o >> 0] | 0)) {
        a = 0;u = p;return a | 0;
      }j = k[b >> 2] | 0;n = b + 4 | 0;m = k[n >> 2] | 0;i[c >> 0] = i[p >> 0] | 0;dc(j, m, c);c = k[n >> 2] | 0;a: do {
        if ((c | 0) > 0) {
          m = a + 336 | 0;d = 0;e = 0;f = -2;while (1) {
            g = k[b >> 2] | 0;j = k[g + (d << 2) >> 2] | 0;h = (l[(k[m >> 2] | 0) + (j >> 1) >> 0] ^ j & 1) & 255;if ((j | 0) == (f ^ 1 | 0) | h << 24 >> 24 == 0) {
              c = 1;break;
            }if (!((j | 0) == (f | 0) | h << 24 >> 24 == 1)) {
              k[g + (e << 2) >> 2] = j;e = e + 1 | 0;f = j;c = k[n >> 2] | 0;
            }d = d + 1 | 0;if ((d | 0) >= (c | 0)) break a;
          }u = p;return c | 0;
        } else {
          e = 0;d = 0;
        }
      } while (0);m = d - e | 0;d = c - m | 0;if ((m | 0) > 0) {
        k[n >> 2] = d;c = d;
      }switch (c | 0) {case 0:
          {
            i[o >> 0] = 0;a = 0;u = p;return a | 0;
          }case 1:
          {
            m = k[k[b >> 2] >> 2] | 0;n = m >> 1;i[(k[a + 336 >> 2] | 0) + n >> 0] = m & 1;j = k[a + 388 >> 2] | 0;n = (k[a + 396 >> 2] | 0) + (n << 3) | 0;k[n >> 2] = -1;k[n + 4 >> 2] = j;n = k[a + 372 >> 2] | 0;j = a + 376 | 0;b = k[j >> 2] | 0;k[j >> 2] = b + 1;k[n + (b << 2) >> 2] = m;a = (ec(a) | 0) == -1;i[o >> 0] = a & 1;u = p;return a | 0;
          }default:
          {
            d = fc(a + 476 | 0, b, 0, 0) | 0;e = a + 236 | 0;f = a + 240 | 0;c = k[f >> 2] | 0;if ((c | 0) == (k[a + 244 >> 2] | 0)) {
              gc(e, c + 1 | 0);c = k[f >> 2] | 0;
            }o = k[e >> 2] | 0;k[f >> 2] = c + 1;k[o + (c << 2) >> 2] = d;hc(a, d);a = 1;u = p;return a | 0;
          }}return 0;
    }function dc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0;o = u;u = u + 16 | 0;j = o + 2 | 0;m = o + 1 | 0;n = o;if ((b | 0) < 16) {
        g = b + -1 | 0;if ((b | 0) > 1) e = 0;else {
          u = o;return;
        }do {
          f = e;e = e + 1 | 0;if ((e | 0) < (b | 0)) {
            c = f;d = e;do {
              c = (k[a + (d << 2) >> 2] | 0) < (k[a + (c << 2) >> 2] | 0) ? d : c;d = d + 1 | 0;
            } while ((d | 0) != (b | 0));
          } else c = f;l = a + (f << 2) | 0;m = k[l >> 2] | 0;n = a + (c << 2) | 0;k[l >> 2] = k[n >> 2];k[n >> 2] = m;
        } while ((e | 0) != (g | 0));u = o;return;
      }l = k[a + (b >>> 1 << 2) >> 2] | 0;d = b;c = -1;while (1) {
        do {
          c = c + 1 | 0;g = a + (c << 2) | 0;h = k[g >> 2] | 0;
        } while ((h | 0) < (l | 0));do {
          d = d + -1 | 0;e = a + (d << 2) | 0;f = k[e >> 2] | 0;
        } while ((l | 0) < (f | 0));if ((c | 0) >= (d | 0)) break;k[g >> 2] = f;k[e >> 2] = h;
      }i[j >> 0] = i[m >> 0] | 0;dc(a, c, j);i[j >> 0] = i[n >> 0] | 0;dc(g, b - c | 0, j);u = o;return;
    }function ec(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0,
          H = 0,
          I = 0,
          J = 0,
          K = 0,
          L = 0,
          M = 0,
          O = 0,
          P = 0,
          Q = 0,
          R = 0;O = a + 296 | 0;q = a + 324 | 0;c = k[q >> 2] | 0;n = a + 320 | 0;b = k[n >> 2] | 0;if ((c | 0) > 0) {
        o = a + 308 | 0;p = a + 332 | 0;m = 0;do {
          j = b + (m << 2) | 0;d = k[j >> 2] | 0;if (i[(k[o >> 2] | 0) + d >> 0] | 0) {
            b = k[O >> 2] | 0;h = b + (d * 12 | 0) + 4 | 0;c = k[h >> 2] | 0;if ((c | 0) > 0) {
              g = b + (d * 12 | 0) | 0;b = 0;d = 0;do {
                e = k[g >> 2] | 0;f = e + (b << 3) | 0;if ((k[(k[k[p >> 2] >> 2] | 0) + (k[f >> 2] << 2) >> 2] & 3 | 0) != 1) {
                  K = f;L = k[K + 4 >> 2] | 0;c = e + (d << 3) | 0;k[c >> 2] = k[K >> 2];k[c + 4 >> 2] = L;d = d + 1 | 0;c = k[h >> 2] | 0;
                }b = b + 1 | 0;
              } while ((b | 0) < (c | 0));
            } else {
              d = 0;b = 0;
            }b = b - d | 0;if ((b | 0) > 0) k[h >> 2] = c - b;i[(k[o >> 2] | 0) + (k[j >> 2] | 0) >> 0] = 0;b = k[n >> 2] | 0;c = k[q >> 2] | 0;
          }m = m + 1 | 0;
        } while ((m | 0) < (c | 0));
      }if (b | 0) k[q >> 2] = 0;F = a + 408 | 0;b = k[F >> 2] | 0;G = a + 376 | 0;if ((b | 0) >= (k[G >> 2] | 0)) {
        R = -1;O = 0;P = 0;Q = a + 176 | 0;K = Q;M = K;M = k[M >> 2] | 0;K = K + 4 | 0;K = k[K >> 2] | 0;K = we(M | 0, K | 0, O | 0, P | 0) | 0;M = N;L = Q;k[L >> 2] = K;Q = Q + 4 | 0;k[Q >> 2] = M;Q = a + 416 | 0;a = Q;M = a;M = k[M >> 2] | 0;a = a + 4 | 0;a = k[a >> 2] | 0;a = ve(M | 0, a | 0, O | 0, P | 0) | 0;P = N;O = Q;k[O >> 2] = a;Q = Q + 4 | 0;k[Q >> 2] = P;return R | 0;
      }H = a + 372 | 0;I = a + 476 | 0;J = a + 336 | 0;K = a + 388 | 0;L = a + 396 | 0;c = -1;E = 0;do {
        k[F >> 2] = b + 1;B = k[(k[H >> 2] | 0) + (b << 2) >> 2] | 0;D = k[O >> 2] | 0;E = E + 1 | 0;e = k[D + (B * 12 | 0) >> 2] | 0;D = D + (B * 12 | 0) + 4 | 0;d = k[D >> 2] | 0;b = e + (d << 3) | 0;if (!d) {
          d = e;b = e;
        } else {
          C = B ^ 1;A = d << 3;z = e + -1 + A | 0;A = e + -8 + -1 + A | 0;d = e;do {
            w = e;h = k[e + 4 >> 2] | 0;if ((h | 0) != -2 ? (l[(k[J >> 2] | 0) + (h >> 1) >> 0] | 0) == (h & 1 | 0) : 0) {
              w = e;x = k[w + 4 >> 2] | 0;y = d;k[y >> 2] = k[w >> 2];k[y + 4 >> 2] = x;d = d + 8 | 0;e = e + 8 | 0;
            } else R = 22;a: do {
              if ((R | 0) == 22) {
                R = 0;y = k[e >> 2] | 0;x = (k[I >> 2] | 0) + (y << 2) | 0;v = k[x >> 2] | 0;if (!(v & 32)) {
                  f = x + 4 | 0;g = k[f >> 2] | 0;if ((g | 0) == (C | 0)) {
                    u = x + 8 | 0;n = k[u >> 2] | 0;k[f >> 2] = n;k[u >> 2] = C;
                  } else n = g;o = e + 8 | 0;if ((n | 0) != (h | 0) ? (l[(k[J >> 2] | 0) + (n >> 1) >> 0] | 0) == (n & 1 | 0) : 0) {
                    e = d;k[e >> 2] = y;k[e + 4 >> 2] = n;d = d + 8 | 0;e = o;break;
                  }b: do {
                    if (v >>> 0 > 191) {
                      m = k[J >> 2] | 0;g = v >>> 6;f = 2;while (1) {
                        h = x + 4 + (f << 2) | 0;j = k[h >> 2] | 0;f = f + 1 | 0;if ((l[m + (j >> 1) >> 0] ^ j & 1 | 0) != 1) break;if ((f | 0) >= (g | 0)) break b;
                      }x = x + 8 | 0;k[x >> 2] = j;k[h >> 2] = C;x = k[x >> 2] ^ 1;w = k[O >> 2] | 0;f = w + (x * 12 | 0) | 0;g = w + (x * 12 | 0) + 4 | 0;e = k[g >> 2] | 0;if ((e | 0) == (k[w + (x * 12 | 0) + 8 >> 2] | 0)) {
                        ic(f, e + 1 | 0);e = k[g >> 2] | 0;
                      }x = k[f >> 2] | 0;k[g >> 2] = e + 1;e = x + (e << 3) | 0;k[e >> 2] = y;k[e + 4 >> 2] = n;e = o;break a;
                    }
                  } while (0);j = d + 8 | 0;f = d;k[f >> 2] = y;k[f + 4 >> 2] = n;f = n >> 1;g = n & 1;h = (k[J >> 2] | 0) + f | 0;if ((l[h >> 0] ^ g | 0) != 1) {
                    i[h >> 0] = g;d = k[K >> 2] | 0;e = (k[L >> 2] | 0) + (f << 3) | 0;k[e >> 2] = y;k[e + 4 >> 2] = d;e = k[H >> 2] | 0;d = k[G >> 2] | 0;k[G >> 2] = d + 1;k[e + (d << 2) >> 2] = n;d = j;e = o;break;
                  }k[F >> 2] = k[G >> 2];if (o >>> 0 >= b >>> 0) {
                    d = j;e = o;c = y;break;
                  }g = (A + (0 - w) | 0) >>> 3;f = d + 16 | 0;d = j;c = o;while (1) {
                    v = c;c = c + 8 | 0;w = k[v + 4 >> 2] | 0;x = d;k[x >> 2] = k[v >> 2];k[x + 4 >> 2] = w;if (c >>> 0 >= b >>> 0) break;else d = d + 8 | 0;
                  }d = f + (g << 3) | 0;e = e + 16 + (g << 3) | 0;c = y;break;
                }q = v >>> 6;r = k[x + 4 + (q << 2) >> 2] | 0;s = q - r | 0;c: do {
                  if ((r | 0) > 0) {
                    t = k[J >> 2] | 0;u = r + -1 | 0;d: do {
                      if ((q | 0) > (r | 0)) {
                        p = 0;h = 0;g = 0;f = -1;e: while (1) {
                          o = x + 4 + (p << 2) | 0;m = k[o >> 2] | 0;j = l[t + (m >> 1) >> 0] | 0;do {
                            if (!(j & 2)) {
                              if ((j ^ m & 1 | 0) == 1) {
                                g = g + 1 | 0;if ((g | 0) < (u | 0)) break;else {
                                  R = 34;break d;
                                }
                              }n = h + 1 | 0;if ((h | 0) > (s | 0)) break d;if ((m | 0) == (B | 0)) {
                                f = r;while (1) {
                                  j = x + 4 + (f << 2) | 0;h = k[j >> 2] | 0;f = f + 1 | 0;if ((l[t + (h >> 1) >> 0] | 0) != (h & 1 | 0)) break e;if ((f | 0) >= (q | 0)) {
                                    h = n;f = -2;break;
                                  }
                                }
                              } else h = n;
                            }
                          } while (0);p = p + 1 | 0;if ((p | 0) >= (r | 0)) {
                            M = h;R = 41;break d;
                          }
                        }k[j >> 2] = B;k[o >> 2] = h;R = 42;
                      } else {
                        n = 0;m = 0;g = 0;f = -1;while (1) {
                          j = k[x + 4 + (n << 2) >> 2] | 0;h = l[t + (j >> 1) >> 0] | 0;do {
                            if (!(h & 2)) {
                              if ((h ^ j & 1 | 0) == 1) {
                                g = g + 1 | 0;if ((g | 0) < (u | 0)) {
                                  h = m;break;
                                } else {
                                  R = 34;break d;
                                }
                              }if ((m | 0) > (s | 0)) break d;h = m + 1 | 0;f = (j | 0) != (B | 0) ? f : -2;
                            } else h = m;
                          } while (0);n = n + 1 | 0;if ((n | 0) >= (r | 0)) {
                            M = h;R = 41;break;
                          } else m = h;
                        }
                      }
                    } while (0);if ((R | 0) == 34) {
                      h = f >>> 0 > 4294967293 ? B : f;R = 42;
                    } else if ((R | 0) == 41 ? (R = 0, (M | 0) <= 1) : 0) {
                      f = v;break;
                    }f: do {
                      if ((R | 0) == 42) {
                        R = 0;switch (h | 0) {case -1:
                            break f;case -2:
                            {
                              f = k[x >> 2] | 0;break c;
                            }default:
                            {}}j = e + 8 | 0;if ((h | 0) == (B | 0)) {
                          x = e;y = k[x + 4 >> 2] | 0;e = d;k[e >> 2] = k[x >> 2];k[e + 4 >> 2] = y;d = d + 8 | 0;e = j;break a;
                        }x = k[O >> 2] | 0;f = x + (h * 12 | 0) | 0;g = x + (h * 12 | 0) + 4 | 0;e = k[g >> 2] | 0;if ((e | 0) == (k[x + (h * 12 | 0) + 8 >> 2] | 0)) {
                          ic(f, e + 1 | 0);e = k[g >> 2] | 0;
                        }x = k[f >> 2] | 0;k[g >> 2] = e + 1;e = x + (e << 3) | 0;k[e >> 2] = y;k[e + 4 >> 2] = -2;e = j;break a;
                      }
                    } while (0);k[F >> 2] = k[G >> 2];if (e >>> 0 >= b >>> 0) {
                      c = y;break a;
                    }g = (z + (0 - w) | 0) >>> 3;f = d + 8 | 0;c = e;while (1) {
                      v = c;c = c + 8 | 0;w = k[v + 4 >> 2] | 0;x = d;k[x >> 2] = k[v >> 2];k[x + 4 >> 2] = w;if (c >>> 0 >= b >>> 0) break;else d = d + 8 | 0;
                    }d = f + (g << 3) | 0;e = e + 8 + (g << 3) | 0;c = y;break a;
                  } else f = v;
                } while (0);if ((k[x + 4 + (f >>> 6 << 2) >> 2] | 0) > 0) {
                  h = 0;do {
                    g = k[x + 4 + (h << 2) >> 2] | 0;if ((g | 0) != (B | 0) ? (P = g >> 1, Q = (k[J >> 2] | 0) + P | 0, (l[Q >> 0] ^ g & 1 | 0) != 1) : 0) {
                      v = g ^ 1;i[Q >> 0] = v & 1;f = k[K >> 2] | 0;w = (k[L >> 2] | 0) + (P << 3) | 0;k[w >> 2] = y;k[w + 4 >> 2] = f;w = k[H >> 2] | 0;f = k[G >> 2] | 0;k[G >> 2] = f + 1;k[w + (f << 2) >> 2] = v;f = k[x >> 2] | 0;
                    }h = h + 1 | 0;
                  } while ((h | 0) < (k[x + 4 + (f >>> 6 << 2) >> 2] | 0));
                }w = e;x = k[w + 4 >> 2] | 0;y = d;k[y >> 2] = k[w >> 2];k[y + 4 >> 2] = x;d = d + 8 | 0;e = e + 8 | 0;
              }
            } while (0);
          } while ((e | 0) != (b | 0));
        }b = b - d | 0;if ((b | 0) > 0) k[D >> 2] = (k[D >> 2] | 0) - (b >>> 3);b = k[F >> 2] | 0;
      } while ((b | 0) < (k[G >> 2] | 0));R = c;O = E;P = ((E | 0) < 0) << 31 >> 31;Q = a + 176 | 0;K = Q;M = K;M = k[M >> 2] | 0;K = K + 4 | 0;K = k[K >> 2] | 0;K = we(M | 0, K | 0, O | 0, P | 0) | 0;M = N;L = Q;k[L >> 2] = K;Q = Q + 4 | 0;k[Q >> 2] = M;Q = a + 416 | 0;a = Q;M = a;M = k[M >> 2] | 0;a = a + 4 | 0;a = k[a >> 2] | 0;a = ve(M | 0, a | 0, O | 0, P | 0) | 0;P = N;O = Q;k[O >> 2] = a;Q = Q + 4 | 0;k[Q >> 2] = P;return R | 0;
    }function fc(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l[a + 16 >> 0] | 0 | (c | d) & 1;f = b + 4 | 0;g = ((e + (k[f >> 2] | 0) << 2) + 4 | 0) >>> 2;i = a + 4 | 0;Eb(a, g + (k[i >> 2] | 0) | 0);h = k[i >> 2] | 0;g = g + h | 0;k[i >> 2] = g;if (g >>> 0 < h >>> 0) va(La(1) | 0, 8, 0);g = (k[a >> 2] | 0) + (h << 2) | 0;c = (d & 1) << 5 | (c & 1) << 2 | e << 3;k[g >> 2] = k[g >> 2] & -64 | c;c = k[f >> 2] << 6 | c;k[g >> 2] = c;if ((k[f >> 2] | 0) > 0) {
        c = k[b >> 2] | 0;a = 0;do {
          k[g + 4 + (a << 2) >> 2] = k[c + (a << 2) >> 2];a = a + 1 | 0;
        } while ((a | 0) < (k[f >> 2] | 0));c = k[g >> 2] | 0;
      }if (!(c & 8)) return h | 0;if (c & 4 | 0) {
        o[g + 4 + (c >>> 6 << 2) >> 2] = 0.0;return h | 0;
      }a = c >>> 6;if (c & 32 | 0) {
        k[g + 4 + (a << 2) >> 2] = -1;return h | 0;
      }if (!a) {
        c = 0;a = 0;
      } else {
        d = 0;c = 0;do {
          c = 1 << ((k[g + 4 + (d << 2) >> 2] | 0) >>> 1 & 31) | c;d = d + 1 | 0;
        } while ((d | 0) != (a | 0));
      }k[g + 4 + (a << 2) >> 2] = c;return h | 0;
    }function gc(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0;c = a + 8 | 0;d = k[c >> 2] | 0;if ((d | 0) >= (b | 0)) return;f = b + 1 - d & -2;e = (d >> 1) + 2 & -2;b = e - f >> 31;b = (b & f) + (e & ~b) | 0;if ((b | 0) > (2147483647 - d | 0)) {
        f = La(1) | 0;va(f | 0, 8, 0);
      }e = k[a >> 2] | 0;f = b + d | 0;k[c >> 2] = f;f = Ud(e, f << 2) | 0;k[a >> 2] = f;if (f | 0) return;f = Ec() | 0;if ((k[f >> 2] | 0) == 12) {
        f = La(1) | 0;va(f | 0, 8, 0);
      } else return;
    }function hc(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0;j = (k[a + 476 >> 2] | 0) + (b << 2) | 0;c = k[j >> 2] | 0;if (!(c & 32)) {
        i = j + 4 | 0;l = k[i >> 2] ^ 1;e = a + 296 | 0;m = k[e >> 2] | 0;f = m + (l * 12 | 0) | 0;g = j + 8 | 0;d = k[g >> 2] | 0;h = m + (l * 12 | 0) + 4 | 0;c = k[h >> 2] | 0;if ((c | 0) == (k[m + (l * 12 | 0) + 8 >> 2] | 0)) {
          ic(f, c + 1 | 0);c = k[h >> 2] | 0;
        }m = k[f >> 2] | 0;k[h >> 2] = c + 1;m = m + (c << 3) | 0;k[m >> 2] = b;k[m + 4 >> 2] = d;m = k[g >> 2] ^ 1;l = k[e >> 2] | 0;f = l + (m * 12 | 0) | 0;d = k[i >> 2] | 0;e = l + (m * 12 | 0) + 4 | 0;c = k[e >> 2] | 0;if ((c | 0) == (k[l + (m * 12 | 0) + 8 >> 2] | 0)) {
          ic(f, c + 1 | 0);c = k[e >> 2] | 0;
        }m = k[f >> 2] | 0;k[e >> 2] = c + 1;m = m + (c << 3) | 0;k[m >> 2] = b;k[m + 4 >> 2] = d;j = k[j >> 2] | 0;m = j & 4 | 0 ? a + 208 | 0 : a + 200 | 0;j = j >>> 6;l = m;a = l;a = k[a >> 2] | 0;l = l + 4 | 0;l = k[l >> 2] | 0;j = we(a | 0, l | 0, j | 0, 0) | 0;l = N;a = m;k[a >> 2] = j;m = m + 4 | 0;k[m >> 2] = l;return;
      }c = c >>> 6;if ((k[j + 4 + (c << 2) >> 2] | 0) > 0) {
        g = a + 296 | 0;f = 0;do {
          m = k[j + 4 + (f << 2) >> 2] | 0;l = k[g >> 2] | 0;d = l + (m * 12 | 0) | 0;e = l + (m * 12 | 0) + 4 | 0;c = k[e >> 2] | 0;if ((c | 0) == (k[l + (m * 12 | 0) + 8 >> 2] | 0)) {
            ic(d, c + 1 | 0);c = k[e >> 2] | 0;
          }m = k[d >> 2] | 0;k[e >> 2] = c + 1;c = m + (c << 3) | 0;k[c >> 2] = b;k[c + 4 >> 2] = -2;f = f + 1 | 0;c = (k[j >> 2] | 0) >>> 6;
        } while ((f | 0) < (k[j + 4 + (c << 2) >> 2] | 0));
      }m = a + 200 | 0;j = c;l = m;a = l;a = k[a >> 2] | 0;l = l + 4 | 0;l = k[l >> 2] | 0;j = we(a | 0, l | 0, j | 0, 0) | 0;l = N;a = m;k[a >> 2] = j;m = m + 4 | 0;k[m >> 2] = l;return;
    }function ic(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0;c = a + 8 | 0;d = k[c >> 2] | 0;if ((d | 0) >= (b | 0)) return;f = b + 1 - d & -2;e = (d >> 1) + 2 & -2;b = e - f >> 31;b = (b & f) + (e & ~b) | 0;if ((b | 0) > (2147483647 - d | 0)) {
        f = La(1) | 0;va(f | 0, 8, 0);
      }e = k[a >> 2] | 0;f = b + d | 0;k[c >> 2] = f;f = Ud(e, f << 3) | 0;k[a >> 2] = f;if (f | 0) return;f = Ec() | 0;if ((k[f >> 2] | 0) == 12) {
        f = La(1) | 0;va(f | 0, 8, 0);
      } else return;
    }function jc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0;q = u;u = u + 16 | 0;d = q + 1 | 0;o = a + 232 | 0;if (!(i[o >> 0] | 0)) {
        a = 0;u = q;return a | 0;
      }m = k[b >> 2] | 0;p = b + 4 | 0;n = k[p >> 2] | 0;i[d >> 0] = i[q >> 0] | 0;dc(m, n, d);d = k[p >> 2] | 0;if ((d | 0) > 0) {
        n = a + 336 | 0;f = 0;e = 0;m = -2;while (1) {
          g = k[b >> 2] | 0;j = k[g + (e << 2) >> 2] | 0;h = (l[(k[n >> 2] | 0) + (j >> 1) >> 0] ^ j & 1) & 255;do {
            if (h << 24 >> 24) {
              if (!((j | 0) == (m | 0) | h << 24 >> 24 == 1)) {
                if ((j | 0) == (m ^ 1 | 0)) {
                  f = f + -1 | 0;c = c + -1 | 0;g = j;break;
                } else {
                  k[g + (f << 2) >> 2] = j;f = f + 1 | 0;g = j;d = k[p >> 2] | 0;break;
                }
              } else g = m;
            } else {
              c = c + -1 | 0;g = m;
            }
          } while (0);e = e + 1 | 0;if ((e | 0) < (d | 0)) m = g;else break;
        }
      } else {
        f = 0;e = 0;
      }e = e - f | 0;if ((e | 0) > 0) {
        d = d - e | 0;k[p >> 2] = d;
      }if ((c | 0) >= (d | 0)) {
        a = 1;u = q;return a | 0;
      }if ((c | 0) < 0) {
        i[o >> 0] = 0;a = 0;u = q;return a | 0;
      }if ((c | 0) == (d + -1 | 0) & (i[a + 104 >> 0] | 0) != 0) {
        if ((d | 0) > 0) {
          e = k[b >> 2] | 0;d = 0;do {
            o = e + (d << 2) | 0;k[o >> 2] = k[o >> 2] ^ 1;d = d + 1 | 0;
          } while ((d | 0) < (k[p >> 2] | 0));
        }a = cc(a, b) | 0;u = q;return a | 0;
      }if (c | 0) {
        e = a + 476 | 0;f = fc(e, b, 0, 1) | 0;e = (k[e >> 2] | 0) + (f << 2) | 0;k[e + 4 + ((k[e >> 2] | 0) >>> 6 << 2) >> 2] = 1 - c + (k[p >> 2] | 0);c = a + 236 | 0;e = a + 240 | 0;d = k[e >> 2] | 0;if ((d | 0) == (k[a + 244 >> 2] | 0)) {
          gc(c, d + 1 | 0);d = k[e >> 2] | 0;
        }p = k[c >> 2] | 0;k[e >> 2] = d + 1;k[p + (d << 2) >> 2] = f;hc(a, f);a = 1;u = q;return a | 0;
      }if ((d | 0) > 0) {
        e = a + 336 | 0;c = a + 388 | 0;f = a + 396 | 0;g = a + 372 | 0;h = a + 376 | 0;d = 0;do {
          m = k[(k[b >> 2] | 0) + (d << 2) >> 2] | 0;j = m ^ 1;m = m >> 1;i[(k[e >> 2] | 0) + m >> 0] = j & 1;n = k[c >> 2] | 0;m = (k[f >> 2] | 0) + (m << 3) | 0;k[m >> 2] = -1;k[m + 4 >> 2] = n;m = k[g >> 2] | 0;n = k[h >> 2] | 0;k[h >> 2] = n + 1;k[m + (n << 2) >> 2] = j;d = d + 1 | 0;
        } while ((d | 0) < (k[p >> 2] | 0));
      }a = (ec(a) | 0) == -1;i[o >> 0] = a & 1;u = q;return a | 0;
    }function kc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0;m = (k[a + 476 >> 2] | 0) + (b << 2) | 0;g = k[m + 4 >> 2] ^ 1;if (!c) {
        f = a + 308 | 0;c = k[f >> 2] | 0;d = c + g | 0;if (!(i[d >> 0] | 0)) {
          i[d >> 0] = 1;d = a + 320 | 0;e = a + 324 | 0;c = k[e >> 2] | 0;if ((c | 0) == (k[a + 328 >> 2] | 0)) {
            Ab(d, c + 1 | 0);c = k[e >> 2] | 0;
          }b = k[d >> 2] | 0;k[e >> 2] = c + 1;k[b + (c << 2) >> 2] = g;c = k[f >> 2] | 0;
        }f = k[m + 8 >> 2] ^ 1;c = c + f | 0;if (!(i[c >> 0] | 0)) {
          i[c >> 0] = 1;d = a + 320 | 0;e = a + 324 | 0;c = k[e >> 2] | 0;if ((c | 0) == (k[a + 328 >> 2] | 0)) {
            Ab(d, c + 1 | 0);c = k[e >> 2] | 0;
          }b = k[d >> 2] | 0;k[e >> 2] = c + 1;k[b + (c << 2) >> 2] = f;
        }
      } else {
        j = a + 296 | 0;c = k[j >> 2] | 0;h = c + (g * 12 | 0) | 0;l = m + 8 | 0;g = c + (g * 12 | 0) + 4 | 0;f = k[g >> 2] | 0;a: do {
          if ((f | 0) > 0) {
            d = k[h >> 2] | 0;e = 0;do {
              if ((k[d + (e << 3) >> 2] | 0) == (b | 0)) break a;e = e + 1 | 0;
            } while ((e | 0) < (f | 0));
          } else e = 0;
        } while (0);d = f + -1 | 0;if ((e | 0) < (d | 0)) {
          c = e;do {
            d = c;c = c + 1 | 0;n = k[h >> 2] | 0;e = n + (c << 3) | 0;f = k[e + 4 >> 2] | 0;d = n + (d << 3) | 0;k[d >> 2] = k[e >> 2];k[d + 4 >> 2] = f;d = (k[g >> 2] | 0) + -1 | 0;
          } while ((c | 0) < (d | 0));c = k[j >> 2] | 0;
        }k[g >> 2] = d;g = k[l >> 2] ^ 1;f = c + (g * 12 | 0) | 0;g = c + (g * 12 | 0) + 4 | 0;e = k[g >> 2] | 0;b: do {
          if ((e | 0) > 0) {
            c = k[f >> 2] | 0;d = 0;do {
              if ((k[c + (d << 3) >> 2] | 0) == (b | 0)) break b;d = d + 1 | 0;
            } while ((d | 0) < (e | 0));
          } else d = 0;
        } while (0);c = e + -1 | 0;if ((d | 0) < (c | 0)) do {
          c = d;d = d + 1 | 0;l = k[f >> 2] | 0;b = l + (d << 3) | 0;n = k[b + 4 >> 2] | 0;c = l + (c << 3) | 0;k[c >> 2] = k[b >> 2];k[c + 4 >> 2] = n;c = (k[g >> 2] | 0) + -1 | 0;
        } while ((d | 0) < (c | 0));k[g >> 2] = c;
      }m = k[m >> 2] | 0;n = m & 4 | 0 ? a + 208 | 0 : a + 200 | 0;a = n;m = ve(k[a >> 2] | 0, k[a + 4 >> 2] | 0, m >>> 6 | 0, 0) | 0;k[n >> 2] = m;k[n + 4 >> 2] = N;return;
    }function lc(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0;n = a + 476 | 0;o = (k[n >> 2] | 0) + (b << 2) | 0;c = k[o >> 2] | 0;if (!(c & 32)) {
        kc(a, b, 0);m = k[o + 4 >> 2] | 0;c = m >> 1;if (((l[(k[a + 336 >> 2] | 0) + c >> 0] | 0 | 0) == (m & 1 | 0) ? (d = (k[a + 396 >> 2] | 0) + (c << 3) | 0, e = k[d >> 2] | 0, (e | 0) != -1) : 0) ? ((k[n >> 2] | 0) + (e << 2) | 0) == (o | 0) : 0) k[d >> 2] = -1;
      } else {
        c = c >>> 6;if ((k[o + 4 + (c << 2) >> 2] | 0) > 0) {
          i = a + 296 | 0;h = 0;do {
            g = k[o + 4 + (h << 2) >> 2] | 0;e = k[i >> 2] | 0;f = e + (g * 12 | 0) | 0;g = e + (g * 12 | 0) + 4 | 0;e = k[g >> 2] | 0;a: do {
              if ((e | 0) > 0) {
                c = k[f >> 2] | 0;d = 0;do {
                  if ((k[c + (d << 3) >> 2] | 0) == (b | 0)) break a;d = d + 1 | 0;
                } while ((d | 0) < (e | 0));
              } else d = 0;
            } while (0);c = e + -1 | 0;if ((d | 0) < (c | 0)) do {
              c = d;d = d + 1 | 0;q = k[f >> 2] | 0;p = q + (d << 3) | 0;e = k[p + 4 >> 2] | 0;c = q + (c << 3) | 0;k[c >> 2] = k[p >> 2];k[c + 4 >> 2] = e;c = (k[g >> 2] | 0) + -1 | 0;
            } while ((d | 0) < (c | 0));k[g >> 2] = c;h = h + 1 | 0;c = (k[o >> 2] | 0) >>> 6;
          } while ((h | 0) < (k[o + 4 + (c << 2) >> 2] | 0));
        }p = a + 200 | 0;q = p;q = ve(k[q >> 2] | 0, k[q + 4 >> 2] | 0, c | 0, 0) | 0;c = p;k[c >> 2] = q;k[c + 4 >> 2] = N;c = k[o >> 2] | 0;if ((k[o + 4 + (c >>> 6 << 2) >> 2] | 0) > 0) {
          g = a + 396 | 0;f = k[a + 336 >> 2] | 0;e = 0;do {
            q = k[o + 4 + (e << 2) >> 2] | 0;d = q >> 1;if ((((l[f + d >> 0] | 0) ^ q & 1 | 0) == 1 ? (j = (k[g >> 2] | 0) + (d << 3) | 0, m = k[j >> 2] | 0, (m | 0) != -1) : 0) ? ((k[n >> 2] | 0) + (m << 2) | 0) == (o | 0) : 0) {
              k[j >> 2] = -1;c = k[o >> 2] | 0;
            }e = e + 1 | 0;
          } while ((e | 0) < (k[o + 4 + (c >>> 6 << 2) >> 2] | 0));
        }
      }k[o >> 2] = k[o >> 2] & -4 | 1;p = k[(k[n >> 2] | 0) + (b << 2) >> 2] | 0;q = a + 488 | 0;k[q >> 2] = ((((p >>> 3 & 1) + (p >>> 6) << 2) + 4 | 0) >>> 2) + (k[q >> 2] | 0);return;
    }function mc(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0;r = a + 388 | 0;if ((k[r >> 2] | 0) <= (b | 0)) return;s = a + 376 | 0;d = k[s >> 2] | 0;p = a + 384 | 0;c = k[p >> 2] | 0;e = k[c + (b << 2) >> 2] | 0;if ((d | 0) > (e | 0)) {
        f = a + 372 | 0;g = a + 336 | 0;h = a + 72 | 0;j = a + 348 | 0;l = a + 436 | 0;m = a + 456 | 0;n = a + 452 | 0;o = a + 360 | 0;do {
          d = d + -1 | 0;c = k[(k[f >> 2] | 0) + (d << 2) >> 2] >> 1;i[(k[g >> 2] | 0) + c >> 0] = 2;e = k[h >> 2] | 0;if ((e | 0) <= 1) {
            if ((e | 0) == 1 ? (d | 0) > (k[(k[p >> 2] | 0) + ((k[r >> 2] | 0) + -1 << 2) >> 2] | 0) : 0) q = 12;
          } else q = 12;if ((q | 0) == 12) {
            q = 0;i[(k[j >> 2] | 0) + c >> 0] = k[(k[f >> 2] | 0) + (d << 2) >> 2] & 1;
          }if (!((k[m >> 2] | 0) > (c | 0) ? (k[(k[n >> 2] | 0) + (c << 2) >> 2] | 0) > -1 : 0)) q = 16;if ((q | 0) == 16 ? (q = 0, i[(k[o >> 2] | 0) + c >> 0] | 0) : 0) $b(l, c);c = k[p >> 2] | 0;e = k[c + (b << 2) >> 2] | 0;
        } while ((d | 0) > (e | 0));d = k[s >> 2] | 0;
      }k[a + 408 >> 2] = e;c = k[c + (b << 2) >> 2] | 0;if ((d | 0) > (c | 0)) k[s >> 2] = c;if ((k[r >> 2] | 0) <= (b | 0)) return;k[r >> 2] = b;return;
    }function nc(a) {
      a = a | 0;var b = 0,
          c = 0.0,
          d = 0,
          e = 0,
          f = 0.0,
          g = 0,
          h = 0,
          j = 0,
          l = 0.0,
          m = 0,
          n = 0,
          o = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0;w = a + 56 | 0;c = +p[w >> 3] * 1389796.0;c = c - +(~~(c / 2147483647.0) | 0) * 2147483647.0;p[w >> 3] = c;x = a + 444 | 0;if (c / 2147483647.0 < +p[a + 48 >> 3] ? (b = k[x >> 2] | 0, (b | 0) != 0) : 0) {
        c = c * 1389796.0;c = c - +(~~(c / 2147483647.0) | 0) * 2147483647.0;p[w >> 3] = c;b = k[(k[a + 440 >> 2] | 0) + (~~(c / 2147483647.0 * +(b | 0)) << 2) >> 2] | 0;if ((i[(k[a + 336 >> 2] | 0) + b >> 0] & 2) != 0 ? (i[(k[a + 360 >> 2] | 0) + b >> 0] | 0) != 0 : 0) {
          v = a + 168 | 0;u = v;u = we(k[u >> 2] | 0, k[u + 4 >> 2] | 0, 1, 0) | 0;k[v >> 2] = u;k[v + 4 >> 2] = N;
        }
      } else b = -1;r = a + 440 | 0;s = a + 452 | 0;t = a + 436 | 0;u = a + 336 | 0;v = a + 360 | 0;d = b;while (1) {
        if (((d | 0) != -1 ? i[(k[u >> 2] | 0) + d >> 0] & 2 : 0) ? i[(k[v >> 2] | 0) + d >> 0] | 0 : 0) break;b = k[x >> 2] | 0;if (!b) {
          b = -2;y = 24;break;
        }q = k[r >> 2] | 0;d = k[q >> 2] | 0;e = k[q + (b + -1 << 2) >> 2] | 0;k[q >> 2] = e;n = k[s >> 2] | 0;k[n + (e << 2) >> 2] = 0;k[n + (d << 2) >> 2] = -1;e = (k[x >> 2] | 0) + -1 | 0;k[x >> 2] = e;if ((e | 0) <= 1) continue;o = k[q >> 2] | 0;b = 0;g = 0;m = 1;while (1) {
          j = g + 2 | 0;if ((j | 0) < (e | 0)) {
            e = k[q + (j << 2) >> 2] | 0;h = k[q + (m << 2) >> 2] | 0;g = k[k[t >> 2] >> 2] | 0;l = +p[g + (e << 3) >> 3];f = +p[g + (h << 3) >> 3];if (l > f) f = l;else {
              e = h;y = 16;
            }
          } else {
            j = k[k[t >> 2] >> 2] | 0;y = k[q + (m << 2) >> 2] | 0;g = j;e = y;f = +p[j + (y << 3) >> 3];y = 16;
          }if ((y | 0) == 16) {
            y = 0;j = m;
          }if (!(f > +p[g + (o << 3) >> 3])) break;k[q + (b << 2) >> 2] = e;k[n + (e << 2) >> 2] = b;g = j << 1;m = g | 1;e = k[x >> 2] | 0;if ((m | 0) >= (e | 0)) {
            b = j;break;
          } else b = j;
        }k[q + (b << 2) >> 2] = o;k[n + (o << 2) >> 2] = b;
      }if ((y | 0) == 24) return b | 0;if (!(i[a + 76 >> 0] | 0)) b = i[(k[a + 348 >> 2] | 0) + d >> 0] | 0;else {
        l = c * 1389796.0;l = l - +(~~(l / 2147483647.0) | 0) * 2147483647.0;p[w >> 3] = l;b = l / 2147483647.0 < .5 & 1;
      }y = (b | 0) != 0 | d << 1;return y | 0;
    }function oc(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0,
          H = 0,
          I = 0,
          J = 0.0,
          K = 0,
          L = 0,
          M = 0,
          O = 0,
          P = 0,
          Q = 0,
          R = 0,
          S = 0,
          T = 0,
          U = 0,
          V = 0,
          W = 0,
          X = 0,
          Y = 0,
          Z = 0,
          _ = 0.0,
          $ = 0;Z = u;u = u + 16 | 0;T = Z + 4 | 0;U = Z;W = c + 4 | 0;e = k[W >> 2] | 0;P = c + 8 | 0;if ((e | 0) == (k[P >> 2] | 0)) {
        Ab(c, e + 1 | 0);e = k[W >> 2] | 0;
      }k[(k[c >> 2] | 0) + (e << 2) >> 2] = 0;k[W >> 2] = (k[W >> 2] | 0) + 1;X = a + 396 | 0;S = a + 476 | 0;Y = a + 496 | 0;w = a + 288 | 0;x = a + 272 | 0;y = a + 400 | 0;z = a + 456 | 0;A = a + 452 | 0;B = a + 440 | 0;C = a + 436 | 0;D = a + 388 | 0;E = a + 264 | 0;F = a + 252 | 0;G = a + 248 | 0;H = a + 372 | 0;I = a + 336 | 0;e = 0;j = (k[a + 376 >> 2] | 0) + -1 | 0;m = -2;while (1) {
        h = k[S >> 2] | 0;v = h + (b << 2) | 0;f = k[v >> 2] | 0;if (!(f & 32)) {
          if ((f & 4 | 0) != 0 ? (J = +p[E >> 3], t = v + 4 + (f >>> 6 << 2) | 0, _ = J + +o[t >> 2], o[t >> 2] = _, _ > 1.0e20) : 0) {
            f = k[F >> 2] | 0;if ((f | 0) > 0) {
              g = k[G >> 2] | 0;b = 0;do {
                t = h + (k[g + (b << 2) >> 2] << 2) | 0;t = t + 4 + ((k[t >> 2] | 0) >>> 6 << 2) | 0;o[t >> 2] = +o[t >> 2] * 1.0e-20;b = b + 1 | 0;
              } while ((b | 0) != (f | 0));
            }p[E >> 3] = J * 1.0e-20;f = k[v >> 2] | 0;
          }b = (m | 0) != -2 & 1;if (b >>> 0 < f >>> 6 >>> 0) do {
            t = k[v + 4 + (b << 2) >> 2] | 0;r = t >> 1;s = (k[Y >> 2] | 0) + r | 0;do {
              if ((i[s >> 0] | 0) == 0 ? (k[(k[X >> 2] | 0) + (r << 3) + 4 >> 2] | 0) > 0 : 0) {
                g = k[x >> 2] | 0;q = g + (r << 3) | 0;_ = +p[w >> 3] + +p[q >> 3];p[q >> 3] = _;if (_ > 1.e+100) {
                  h = k[y >> 2] | 0;if ((h | 0) > 0) {
                    f = 0;do {
                      q = g + (f << 3) | 0;p[q >> 3] = +p[q >> 3] * 1.0e-100;f = f + 1 | 0;
                    } while ((f | 0) != (h | 0));
                  }p[w >> 3] = +p[w >> 3] * 1.0e-100;
                }if ((k[z >> 2] | 0) > (r | 0) ? (K = k[A >> 2] | 0, L = k[K + (r << 2) >> 2] | 0, (L | 0) > -1) : 0) {
                  n = k[B >> 2] | 0;q = k[n + (L << 2) >> 2] | 0;a: do {
                    if (!L) f = 0;else {
                      g = L;while (1) {
                        f = g;g = g + -1 >> 1;h = n + (g << 2) | 0;m = k[h >> 2] | 0;$ = k[k[C >> 2] >> 2] | 0;if (!(+p[$ + (q << 3) >> 3] > +p[$ + (m << 3) >> 3])) break a;k[n + (f << 2) >> 2] = m;k[K + (k[h >> 2] << 2) >> 2] = f;if (!g) {
                          f = 0;break;
                        }
                      }
                    }
                  } while (0);k[n + (f << 2) >> 2] = q;k[K + (q << 2) >> 2] = f;
                }i[s >> 0] = 1;if ((k[(k[X >> 2] | 0) + (r << 3) + 4 >> 2] | 0) >= (k[D >> 2] | 0)) {
                  e = e + 1 | 0;break;
                }f = k[W >> 2] | 0;if ((f | 0) == (k[P >> 2] | 0)) {
                  Ab(c, f + 1 | 0);f = k[W >> 2] | 0;
                }$ = k[c >> 2] | 0;k[W >> 2] = f + 1;k[$ + (f << 2) >> 2] = t;
              }
            } while (0);b = b + 1 | 0;
          } while ((b | 0) < ((k[v >> 2] | 0) >>> 6 | 0));
        } else if (f >>> 0 > 63) {
          r = 0;do {
            b = k[v + 4 + (r << 2) >> 2] | 0;q = b >> 1;do {
              if (((l[(k[I >> 2] | 0) + q >> 0] | 0) == (b & 1 | 0) ? (M = b ^ 1, O = (k[Y >> 2] | 0) + q | 0, (i[O >> 0] | 0) == 0) : 0) ? (k[(k[X >> 2] | 0) + (q << 3) + 4 >> 2] | 0) > 0 : 0) {
                f = k[x >> 2] | 0;$ = f + (q << 3) | 0;_ = +p[w >> 3] + +p[$ >> 3];p[$ >> 3] = _;if (_ > 1.e+100) {
                  g = k[y >> 2] | 0;if ((g | 0) > 0) {
                    b = 0;do {
                      $ = f + (b << 3) | 0;p[$ >> 3] = +p[$ >> 3] * 1.0e-100;b = b + 1 | 0;
                    } while ((b | 0) != (g | 0));
                  }p[w >> 3] = +p[w >> 3] * 1.0e-100;
                }if ((k[z >> 2] | 0) > (q | 0) ? (Q = k[A >> 2] | 0, R = k[Q + (q << 2) >> 2] | 0, (R | 0) > -1) : 0) {
                  m = k[B >> 2] | 0;n = k[m + (R << 2) >> 2] | 0;b: do {
                    if (!R) b = 0;else {
                      f = R;while (1) {
                        b = f;f = f + -1 >> 1;g = m + (f << 2) | 0;h = k[g >> 2] | 0;$ = k[k[C >> 2] >> 2] | 0;if (!(+p[$ + (n << 3) >> 3] > +p[$ + (h << 3) >> 3])) break b;k[m + (b << 2) >> 2] = h;k[Q + (k[g >> 2] << 2) >> 2] = b;if (!f) {
                          b = 0;break;
                        }
                      }
                    }
                  } while (0);k[m + (b << 2) >> 2] = n;k[Q + (n << 2) >> 2] = b;
                }i[O >> 0] = 1;if ((k[(k[X >> 2] | 0) + (q << 3) + 4 >> 2] | 0) >= (k[D >> 2] | 0)) {
                  e = e + 1 | 0;break;
                }b = k[W >> 2] | 0;if ((b | 0) == (k[P >> 2] | 0)) {
                  Ab(c, b + 1 | 0);b = k[W >> 2] | 0;
                }$ = k[c >> 2] | 0;k[W >> 2] = b + 1;k[$ + (b << 2) >> 2] = M;
              }
            } while (0);r = r + 1 | 0;
          } while ((r | 0) < ((k[v >> 2] | 0) >>> 6 | 0));
        }f = k[H >> 2] | 0;g = k[Y >> 2] | 0;do {
          m = j;j = j + -1 | 0;m = k[f + (m << 2) >> 2] | 0;b = m >> 1;h = g + b | 0;
        } while (!(i[h >> 0] | 0));b = k[(k[X >> 2] | 0) + (b << 3) >> 2] | 0;i[h >> 0] = 0;if ((e | 0) > 1) e = e + -1 | 0;else break;
      }k[k[c >> 2] >> 2] = m ^ 1;t = a + 520 | 0;s = a + 524 | 0;if (!(k[t >> 2] | 0)) e = k[s >> 2] | 0;else {
        k[s >> 2] = 0;e = 0;
      }b = k[W >> 2] | 0;if ((e | 0) < (b | 0)) {
        Ab(t, b);e = k[s >> 2] | 0;if ((e | 0) < (b | 0)) do {
          k[(k[t >> 2] | 0) + (e << 2) >> 2] = 0;e = e + 1 | 0;
        } while ((e | 0) != (b | 0));k[s >> 2] = b;b = k[W >> 2] | 0;
      }if ((b | 0) > 0) {
        f = k[c >> 2] | 0;g = k[t >> 2] | 0;e = 0;do {
          k[g + (e << 2) >> 2] = k[f + (e << 2) >> 2];e = e + 1 | 0;b = k[W >> 2] | 0;
        } while ((e | 0) < (b | 0));
      }switch (k[a + 68 >> 2] | 0) {case 2:
          {
            f = (b | 0) > 1;if (f) {
              g = k[c >> 2] | 0;h = k[X >> 2] | 0;j = 0;e = 1;do {
                j = 1 << (k[h + (k[g + (e << 2) >> 2] >> 1 << 3) + 4 >> 2] & 31) | j;e = e + 1 | 0;
              } while ((e | 0) < (b | 0));if (f) {
                e = 1;f = 1;do {
                  b = k[c >> 2] | 0;g = k[b + (f << 2) >> 2] | 0;if ((k[(k[X >> 2] | 0) + (g >> 1 << 3) >> 2] | 0) != -1) {
                    k[U >> 2] = g;k[T >> 2] = k[U >> 2];if (!(pc(a, T, j) | 0)) {
                      g = k[c >> 2] | 0;b = g;g = k[g + (f << 2) >> 2] | 0;V = 74;
                    }
                  } else V = 74;if ((V | 0) == 74) {
                    V = 0;k[b + (e << 2) >> 2] = g;e = e + 1 | 0;
                  }f = f + 1 | 0;b = k[W >> 2] | 0;
                } while ((f | 0) < (b | 0));
              } else {
                f = 1;e = 1;
              }
            } else {
              f = 1;e = 1;
            }break;
          }case 1:
          {
            if ((b | 0) > 1) {
              r = k[c >> 2] | 0;e = 1;f = 1;do {
                n = k[r + (f << 2) >> 2] | 0;q = k[X >> 2] | 0;g = k[q + (n >> 1 << 3) >> 2] | 0;c: do {
                  if ((g | 0) != -1) {
                    j = (k[S >> 2] | 0) + (g << 2) | 0;g = k[j >> 2] | 0;if (g >>> 0 > 127) {
                      m = k[Y >> 2] | 0;h = g >>> 6;g = 1;do {
                        $ = k[j + 4 + (g << 2) >> 2] >> 1;if ((i[m + $ >> 0] | 0) == 0 ? (k[q + ($ << 3) + 4 >> 2] | 0) > 0 : 0) {
                          V = 82;break c;
                        }g = g + 1 | 0;
                      } while ((g | 0) < (h | 0));
                    }
                  } else V = 82;
                } while (0);if ((V | 0) == 82) {
                  V = 0;k[r + (e << 2) >> 2] = n;e = e + 1 | 0;b = k[W >> 2] | 0;
                }f = f + 1 | 0;
              } while ((f | 0) < (b | 0));
            } else {
              f = 1;e = 1;
            }break;
          }default:
          {
            f = b;e = b;
          }}$ = a + 216 | 0;V = $;V = we(k[V >> 2] | 0, k[V + 4 >> 2] | 0, b | 0, ((b | 0) < 0) << 31 >> 31 | 0) | 0;k[$ >> 2] = V;k[$ + 4 >> 2] = N;e = f - e | 0;if ((e | 0) > 0) {
        h = b - e | 0;k[W >> 2] = h;
      } else h = b;$ = a + 224 | 0;a = $;a = we(k[a >> 2] | 0, k[a + 4 >> 2] | 0, h | 0, ((h | 0) < 0) << 31 >> 31 | 0) | 0;k[$ >> 2] = a;k[$ + 4 >> 2] = N;if ((h | 0) == 1) e = 0;else {
        g = k[c >> 2] | 0;if ((h | 0) > 2) {
          f = k[X >> 2] | 0;b = 2;e = 1;do {
            e = (k[f + (k[g + (b << 2) >> 2] >> 1 << 3) + 4 >> 2] | 0) > (k[f + (k[g + (e << 2) >> 2] >> 1 << 3) + 4 >> 2] | 0) ? b : e;b = b + 1 | 0;
          } while ((b | 0) < (h | 0));
        } else e = 1;c = g + (e << 2) | 0;e = k[c >> 2] | 0;$ = g + 4 | 0;k[c >> 2] = k[$ >> 2];k[$ >> 2] = e;e = k[(k[X >> 2] | 0) + (e >> 1 << 3) + 4 >> 2] | 0;
      }k[d >> 2] = e;if ((k[s >> 2] | 0) > 0) e = 0;else {
        u = Z;return;
      }do {
        i[(k[Y >> 2] | 0) + (k[(k[t >> 2] | 0) + (e << 2) >> 2] >> 1) >> 0] = 0;e = e + 1 | 0;
      } while ((e | 0) < (k[s >> 2] | 0));u = Z;return;
    }function pc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0;s = a + 508 | 0;e = k[s >> 2] | 0;p = a + 512 | 0;if (!e) d = k[p >> 2] | 0;else {
        k[p >> 2] = 0;d = 0;
      }w = a + 516 | 0;if ((d | 0) == (k[w >> 2] | 0)) {
        Ab(s, d + 1 | 0);d = k[p >> 2] | 0;e = k[s >> 2] | 0;
      }k[p >> 2] = d + 1;k[e + (d << 2) >> 2] = k[b >> 2];z = a + 520 | 0;B = a + 524 | 0;C = k[B >> 2] | 0;d = k[p >> 2] | 0;if ((d | 0) <= 0) {
        C = 1;return C | 0;
      }m = a + 396 | 0;n = a + 476 | 0;A = a + 496 | 0;o = a + 528 | 0;j = a + 336 | 0;a: while (1) {
        d = d + -1 | 0;h = (k[n >> 2] | 0) + (k[(k[m >> 2] | 0) + (k[e + (d << 2) >> 2] >> 1 << 3) >> 2] << 2) | 0;k[p >> 2] = d;d = k[h >> 2] | 0;if (!(d & 32)) {
          if (d >>> 0 > 127) {
            g = 1;do {
              f = k[h + 4 + (g << 2) >> 2] | 0;e = f >> 1;a = k[A >> 2] | 0;b = a + e | 0;if ((i[b >> 0] | 0) == 0 ? (q = k[m >> 2] | 0, r = k[q + (e << 3) + 4 >> 2] | 0, (r | 0) > 0) : 0) {
                if ((k[q + (e << 3) >> 2] | 0) == -1) {
                  e = 32;break a;
                }if (!(1 << (r & 31) & c)) {
                  e = 32;break a;
                }i[b >> 0] = 1;d = k[p >> 2] | 0;if ((d | 0) == (k[w >> 2] | 0)) {
                  Ab(s, d + 1 | 0);d = k[p >> 2] | 0;
                }a = k[s >> 2] | 0;k[p >> 2] = d + 1;k[a + (d << 2) >> 2] = f;d = k[B >> 2] | 0;if ((d | 0) == (k[o >> 2] | 0)) {
                  Ab(z, d + 1 | 0);d = k[B >> 2] | 0;
                }a = k[z >> 2] | 0;k[B >> 2] = d + 1;k[a + (d << 2) >> 2] = f;d = k[h >> 2] | 0;
              }g = g + 1 | 0;
            } while ((g | 0) < (d >>> 6 | 0));
          }
        } else if (d >>> 0 >= 64) {
          a = 0;do {
            e = k[h + 4 + (a << 2) >> 2] | 0;b = e >> 1;if (((l[(k[j >> 2] | 0) + b >> 0] | 0) == (e & 1 | 0) ? (t = e ^ 1, y = k[A >> 2] | 0, u = y + b | 0, (i[u >> 0] | 0) == 0) : 0) ? (v = k[m >> 2] | 0, x = k[v + (b << 3) + 4 >> 2] | 0, (x | 0) > 0) : 0) {
              if ((k[v + (b << 3) >> 2] | 0) == -1) {
                e = 17;break a;
              }if (!(1 << (x & 31) & c)) {
                e = 17;break a;
              }i[u >> 0] = 1;d = k[p >> 2] | 0;if ((d | 0) == (k[w >> 2] | 0)) {
                Ab(s, d + 1 | 0);d = k[p >> 2] | 0;
              }g = k[s >> 2] | 0;k[p >> 2] = d + 1;k[g + (d << 2) >> 2] = t;d = k[B >> 2] | 0;if ((d | 0) == (k[o >> 2] | 0)) {
                Ab(z, d + 1 | 0);d = k[B >> 2] | 0;
              }g = k[z >> 2] | 0;k[B >> 2] = d + 1;k[g + (d << 2) >> 2] = t;d = k[h >> 2] | 0;
            }a = a + 1 | 0;
          } while ((a | 0) < (d >>> 6 | 0));
        }d = k[p >> 2] | 0;if ((d | 0) <= 0) {
          d = 1;e = 44;break;
        }e = k[s >> 2] | 0;
      }if ((e | 0) == 17) {
        d = k[B >> 2] | 0;if ((C | 0) < (d | 0)) {
          i[y + (k[(k[z >> 2] | 0) + (C << 2) >> 2] >> 1) >> 0] = 0;e = C + 1 | 0;d = k[B >> 2] | 0;if ((e | 0) < (d | 0)) do {
            i[(k[A >> 2] | 0) + (k[(k[z >> 2] | 0) + (e << 2) >> 2] >> 1) >> 0] = 0;e = e + 1 | 0;d = k[B >> 2] | 0;
          } while ((e | 0) < (d | 0));
        }if ((d | 0) <= (C | 0)) {
          C = 0;return C | 0;
        }k[B >> 2] = C;C = 0;return C | 0;
      } else if ((e | 0) == 32) {
        d = k[B >> 2] | 0;if ((C | 0) < (d | 0)) {
          i[a + (k[(k[z >> 2] | 0) + (C << 2) >> 2] >> 1) >> 0] = 0;e = C + 1 | 0;d = k[B >> 2] | 0;if ((e | 0) < (d | 0)) do {
            i[(k[A >> 2] | 0) + (k[(k[z >> 2] | 0) + (e << 2) >> 2] >> 1) >> 0] = 0;e = e + 1 | 0;d = k[B >> 2] | 0;
          } while ((e | 0) < (d | 0));
        }if ((d | 0) <= (C | 0)) {
          C = 0;return C | 0;
        }k[B >> 2] = C;C = 0;return C | 0;
      } else if ((e | 0) == 44) return d | 0;return 0;
    }function qc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0;e = k[c >> 2] | 0;s = c + 4 | 0;if (!e) d = k[s >> 2] | 0;else {
        k[s >> 2] = 0;d = 0;
      }t = c + 8 | 0;if ((d | 0) == (k[t >> 2] | 0)) {
        Ab(c, d + 1 | 0);f = k[s >> 2] | 0;e = k[c >> 2] | 0;
      } else f = d;k[s >> 2] = f + 1;d = k[b >> 2] | 0;k[e + (f << 2) >> 2] = d;if (!(k[a + 388 >> 2] | 0)) return;m = d >> 1;n = a + 496 | 0;i[(k[n >> 2] | 0) + m >> 0] = 1;e = k[a + 376 >> 2] | 0;o = a + 384 | 0;d = k[k[o >> 2] >> 2] | 0;if ((e | 0) > (d | 0)) {
        p = a + 372 | 0;q = a + 396 | 0;r = a + 476 | 0;j = a + 336 | 0;do {
          e = e + -1 | 0;b = k[(k[p >> 2] | 0) + (e << 2) >> 2] | 0;h = b >> 1;if (i[(k[n >> 2] | 0) + h >> 0] | 0) {
            a = k[q >> 2] | 0;d = k[a + (h << 3) >> 2] | 0;a: do {
              if ((d | 0) != -1) {
                g = (k[r >> 2] | 0) + (d << 2) | 0;b = k[g >> 2] | 0;if (!(b & 32)) {
                  if (b >>> 0 > 127) d = 1;else break;while (1) {
                    f = k[g + 4 + (d << 2) >> 2] >> 1;if ((k[a + (f << 3) + 4 >> 2] | 0) > 0) {
                      i[(k[n >> 2] | 0) + f >> 0] = 1;b = k[g >> 2] | 0;
                    }d = d + 1 | 0;if ((d | 0) >= (b >>> 6 | 0)) break a;a = k[q >> 2] | 0;
                  }
                } else {
                  if (b >>> 0 < 64) break;else {
                    f = 0;d = b;
                  }do {
                    a = k[g + 4 + (f << 2) >> 2] | 0;b = a >> 1;if ((l[(k[j >> 2] | 0) + b >> 0] | 0) == (a & 1 | 0) ? (k[(k[q >> 2] | 0) + (b << 3) + 4 >> 2] | 0) > 0 : 0) {
                      i[(k[n >> 2] | 0) + b >> 0] = 1;d = k[g >> 2] | 0;
                    }f = f + 1 | 0;
                  } while ((f | 0) < (d >>> 6 | 0));
                }
              } else {
                d = k[s >> 2] | 0;if ((d | 0) == (k[t >> 2] | 0)) {
                  Ab(c, d + 1 | 0);d = k[s >> 2] | 0;
                }g = k[c >> 2] | 0;k[s >> 2] = d + 1;k[g + (d << 2) >> 2] = b ^ 1;
              }
            } while (0);i[(k[n >> 2] | 0) + h >> 0] = 0;d = k[k[o >> 2] >> 2] | 0;
          }
        } while ((e | 0) > (d | 0));
      }i[(k[n >> 2] | 0) + m >> 0] = 0;return;
    }function rc(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          m = 0,
          n = 0,
          q = 0.0,
          r = 0,
          s = 0,
          t = 0,
          v = 0,
          w = 0;v = u;u = u + 16 | 0;c = v + 4 | 0;i = v;t = a + 252 | 0;n = k[t >> 2] | 0;q = +p[a + 264 >> 3] / +(n | 0);r = a + 476 | 0;j = a + 248 | 0;m = k[j >> 2] | 0;k[i >> 2] = r;k[c >> 2] = k[i >> 2];sc(m, n, c);c = k[t >> 2] | 0;if ((c | 0) > 0) {
        m = a + 336 | 0;n = a + 396 | 0;b = 0;d = 0;do {
          e = k[j >> 2] | 0;f = k[e + (d << 2) >> 2] | 0;g = (k[r >> 2] | 0) + (f << 2) | 0;h = k[g >> 2] | 0;do {
            if (h >>> 0 > 191) {
              w = k[g + 4 >> 2] | 0;i = w >> 1;if ((l[(k[m >> 2] | 0) + i >> 0] | 0 | 0) == (w & 1 | 0) ? (w = k[(k[n >> 2] | 0) + (i << 3) >> 2] | 0, (w | 0) != -1 & (w | 0) == (f | 0)) : 0) {
                s = 9;break;
              }if ((d | 0) >= ((c | 0) / 2 | 0 | 0) ? !(+o[g + 4 + (h >>> 6 << 2) >> 2] < q) : 0) {
                s = 9;break;
              }lc(a, f);
            } else s = 9;
          } while (0);if ((s | 0) == 9) {
            s = 0;k[e + (b << 2) >> 2] = f;b = b + 1 | 0;
          }d = d + 1 | 0;c = k[t >> 2] | 0;
        } while ((d | 0) < (c | 0));
      } else {
        d = 0;b = 0;
      }b = d - b | 0;if ((b | 0) > 0) k[t >> 2] = c - b;if (!(+((k[a + 488 >> 2] | 0) >>> 0) > +p[a + 80 >> 3] * +((k[a + 480 >> 2] | 0) >>> 0))) {
        u = v;return;
      }Ra[k[(k[a >> 2] | 0) + 8 >> 2] & 15](a);u = v;return;
    }function sc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0.0,
          l = 0,
          m = 0,
          n = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          v = 0,
          w = 0,
          x = 0;x = u;u = u + 16 | 0;s = x + 8 | 0;t = x + 4 | 0;w = x;if ((b | 0) < 16) {
        q = b + -1 | 0;if ((b | 0) <= 1) {
          u = x;return;
        }p = k[c >> 2] | 0;l = 0;do {
          d = l;l = l + 1 | 0;m = a + (d << 2) | 0;n = k[m >> 2] | 0;if ((l | 0) < (b | 0)) {
            i = k[p >> 2] | 0;h = l;e = n;do {
              f = i + (k[a + (h << 2) >> 2] << 2) | 0;g = k[f >> 2] | 0;do {
                if (g >>> 0 > 191) {
                  w = i + (e << 2) | 0;c = (k[w >> 2] | 0) >>> 6;if ((c | 0) != 2 ? !(+o[f + 4 + (g >>> 6 << 2) >> 2] < +o[w + 4 + (c << 2) >> 2]) : 0) break;d = h;
                }
              } while (0);h = h + 1 | 0;f = a + (d << 2) | 0;e = k[f >> 2] | 0;
            } while ((h | 0) != (b | 0));d = f;
          } else {
            e = n;d = m;
          }k[m >> 2] = e;k[d >> 2] = n;
        } while ((l | 0) != (q | 0));u = x;return;
      }v = k[a + (b >>> 1 << 2) >> 2] | 0;e = b;d = -1;while (1) {
        d = d + 1 | 0;g = a + (d << 2) | 0;i = k[g >> 2] | 0;r = k[c >> 2] | 0;q = k[r >> 2] | 0;h = q + (i << 2) | 0;f = k[h >> 2] | 0;n = q + (v << 2) | 0;p = k[n >> 2] | 0;a: do {
          if (f >>> 0 > 191) {
            m = p >>> 6;l = (m | 0) == 2;m = n + 4 + (m << 2) | 0;do {
              if (!l ? !(+o[h + 4 + (f >>> 6 << 2) >> 2] < +o[m >> 2]) : 0) break a;d = d + 1 | 0;g = a + (d << 2) | 0;i = k[g >> 2] | 0;h = q + (i << 2) | 0;f = k[h >> 2] | 0;
            } while (f >>> 0 > 191);
          }
        } while (0);e = e + -1 | 0;f = a + (e << 2) | 0;b: do {
          if (p >>> 0 > 191) {
            j = +o[n + 4 + (p >>> 6 << 2) >> 2];while (1) {
              n = q + (k[f >> 2] << 2) | 0;p = (k[n >> 2] | 0) >>> 6;if ((p | 0) != 2 ? !(j < +o[n + 4 + (p << 2) >> 2]) : 0) break b;p = e + -1 | 0;f = a + (p << 2) | 0;e = p;
            }
          }
        } while (0);if ((d | 0) >= (e | 0)) break;k[g >> 2] = k[f >> 2];k[f >> 2] = i;
      }c = r;k[t >> 2] = c;k[s >> 2] = k[t >> 2];sc(a, d, s);k[w >> 2] = c;k[s >> 2] = k[w >> 2];sc(g, b - d | 0, s);u = x;return;
    }function tc(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0;q = b + 4 | 0;d = k[q >> 2] | 0;if ((d | 0) > 0) {
        o = a + 476 | 0;p = a + 336 | 0;c = 0;e = 0;do {
          m = k[b >> 2] | 0;n = k[m + (e << 2) >> 2] | 0;i = (k[o >> 2] | 0) + (n << 2) | 0;h = k[i >> 2] | 0;j = h >>> 6;d = (j | 0) != 0;a: do {
            if (!(h & 32)) {
              if (d) {
                f = k[p >> 2] | 0;d = 0;while (1) {
                  h = k[i + 4 + (d << 2) >> 2] | 0;d = d + 1 | 0;if ((l[f + (h >> 1) >> 0] | 0 | 0) == (h & 1 | 0)) {
                    d = 13;break a;
                  }if ((d | 0) >= (j | 0)) {
                    d = 14;break;
                  }
                }
              } else d = 14;
            } else if (d) {
              g = k[p >> 2] | 0;h = i + 4 + (j << 2) | 0;f = 0;d = 0;while (1) {
                r = k[i + 4 + (f << 2) >> 2] | 0;if (((l[g + (r >> 1) >> 0] | 0) ^ r & 1 | 0) == 1) {
                  d = d + 1 | 0;if ((d | 0) >= ((k[h >> 2] | 0) + -1 | 0)) {
                    d = 13;break a;
                  }
                }f = f + 1 | 0;if ((f | 0) >= (j | 0)) {
                  d = 14;break;
                }
              }
            } else d = 14;
          } while (0);if ((d | 0) == 13) lc(a, n);else if ((d | 0) == 14) {
            k[m + (c << 2) >> 2] = n;c = c + 1 | 0;
          }e = e + 1 | 0;d = k[q >> 2] | 0;
        } while ((e | 0) < (d | 0));
      } else {
        e = 0;c = 0;
      }c = e - c | 0;if ((c | 0) <= 0) return;k[q >> 2] = d - c;return;
    }function uc(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0;p = u;u = u + 16 | 0;m = p;k[m >> 2] = 0;n = m + 4 | 0;k[n >> 2] = 0;o = m + 8 | 0;k[o >> 2] = 0;h = a + 400 | 0;b = k[h >> 2] | 0;a: do {
        if ((b | 0) > 0) {
          j = a + 360 | 0;l = a + 336 | 0;c = 0;f = 0;e = 0;g = 0;while (1) {
            if ((i[(k[j >> 2] | 0) + g >> 0] | 0) != 0 ? (i[(k[l >> 2] | 0) + g >> 0] & 2) != 0 : 0) {
              d = k[n >> 2] | 0;if ((d | 0) == (k[o >> 2] | 0)) {
                f = (d >> 1) + 2 & -2;b = f + -2 >> 31;b = (b & 2) + (f & ~b) | 0;if ((b | 0) > (2147483647 - d | 0)) {
                  b = 11;break;
                }b = b + d | 0;k[o >> 2] = b;b = Ud(c, b << 2) | 0;k[m >> 2] = b;if (!b) {
                  f = Ec() | 0;if ((k[f >> 2] | 0) == 12) {
                    b = 11;break;
                  }c = k[m >> 2] | 0;d = k[n >> 2] | 0;e = c;
                } else {
                  e = b;c = b;
                }
              } else c = f;k[n >> 2] = d + 1;k[e + (d << 2) >> 2] = g;b = k[h >> 2] | 0;f = c;
            }g = g + 1 | 0;if ((g | 0) >= (b | 0)) break a;
          }if ((b | 0) == 11) va(La(1) | 0, 8, 0);
        }
      } while (0);vc(a + 436 | 0, m);b = k[m >> 2] | 0;if (!b) {
        u = p;return;
      }k[n >> 2] = 0;Td(b);k[m >> 2] = 0;k[o >> 2] = 0;u = p;return;
    }function vc(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0.0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0.0,
          n = 0,
          o = 0,
          q = 0,
          r = 0,
          s = 0;l = a + 4 | 0;s = a + 8 | 0;e = k[l >> 2] | 0;if ((k[s >> 2] | 0) <= 0) {
        if (e | 0) r = 4;
      } else {
        d = k[a + 16 >> 2] | 0;c = 0;do {
          k[d + (k[e + (c << 2) >> 2] << 2) >> 2] = -1;c = c + 1 | 0;
        } while ((c | 0) < (k[s >> 2] | 0));r = 4;
      }if ((r | 0) == 4) k[s >> 2] = 0;h = b + 4 | 0;if ((k[h >> 2] | 0) <= 0) return;i = a + 16 | 0;j = a + 12 | 0;f = 0;do {
        d = (k[b >> 2] | 0) + (f << 2) | 0;k[(k[i >> 2] | 0) + (k[d >> 2] << 2) >> 2] = f;c = k[s >> 2] | 0;if ((c | 0) == (k[j >> 2] | 0)) {
          ac(l, c + 1 | 0);c = k[s >> 2] | 0;e = k[l >> 2] | 0;
        }q = k[d >> 2] | 0;k[s >> 2] = c + 1;k[e + (c << 2) >> 2] = q;f = f + 1 | 0;
      } while ((f | 0) < (k[h >> 2] | 0));c = k[s >> 2] | 0;if ((c | 0) <= 1) return;o = a + 16 | 0;q = k[o >> 2] | 0;n = c >>> 1;while (1) {
        b = n + -1 | 0;l = k[e + (b << 2) >> 2] | 0;d = b << 1;f = d | 1;a: do {
          if ((f | 0) < (c | 0)) {
            j = b;while (1) {
              h = d + 2 | 0;if ((h | 0) < (c | 0)) {
                i = k[e + (h << 2) >> 2] | 0;d = k[e + (f << 2) >> 2] | 0;c = k[k[a >> 2] >> 2] | 0;m = +p[c + (i << 3) >> 3];g = +p[c + (d << 3) >> 3];if (m > g) {
                  g = m;d = i;
                } else r = 18;
              } else {
                i = k[k[a >> 2] >> 2] | 0;r = k[e + (f << 2) >> 2] | 0;c = i;d = r;g = +p[i + (r << 3) >> 3];r = 18;
              }if ((r | 0) == 18) {
                r = 0;h = f;
              }if (!(g > +p[c + (l << 3) >> 3])) {
                c = j;break a;
              }k[e + (j << 2) >> 2] = d;k[(k[o >> 2] | 0) + (d << 2) >> 2] = j;d = h << 1;f = d | 1;c = k[s >> 2] | 0;if ((f | 0) >= (c | 0)) {
                c = h;break;
              } else j = h;
            }
          } else c = b;
        } while (0);k[e + (c << 2) >> 2] = l;k[q + (l << 2) >> 2] = c;if ((n | 0) <= 1) break;n = b;c = k[s >> 2] | 0;
      }return;
    }function wc(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0;b = a + 232 | 0;if (i[b >> 0] | 0 ? (ec(a) | 0) == -1 : 0) {
        c = a + 376 | 0;d = a + 412 | 0;if ((k[c >> 2] | 0) == (k[d >> 2] | 0)) {
          a = 1;return a | 0;
        }b = a + 416 | 0;e = b;f = k[e + 4 >> 2] | 0;if ((f | 0) > 0 | (f | 0) == 0 & (k[e >> 2] | 0) >>> 0 > 0) {
          f = 1;return f | 0;
        }tc(a, a + 248 | 0);if (i[a + 472 >> 0] | 0) tc(a, a + 236 | 0);if (+((k[a + 488 >> 2] | 0) >>> 0) > +p[a + 80 >> 3] * +((k[a + 480 >> 2] | 0) >>> 0)) Ra[k[(k[a >> 2] | 0) + 8 >> 2] & 15](a);uc(a);k[d >> 2] = k[c >> 2];e = a + 200 | 0;f = a + 208 | 0;e = we(k[f >> 2] | 0, k[f + 4 >> 2] | 0, k[e >> 2] | 0, k[e + 4 >> 2] | 0) | 0;f = b;k[f >> 2] = e;k[f + 4 >> 2] = N;f = 1;return f | 0;
      }i[b >> 0] = 0;f = 0;return f | 0;
    }function xc(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0.0,
          e = 0,
          f = 0,
          g = 0,
          h = 0.0,
          j = 0.0,
          m = 0,
          n = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0,
          H = 0,
          I = 0,
          J = 0,
          K = 0,
          L = 0,
          M = 0,
          O = 0,
          P = 0,
          Q = 0,
          S = 0,
          T = 0,
          U = 0,
          V = 0,
          W = 0,
          X = 0,
          Y = 0,
          Z = 0,
          _ = 0,
          $ = 0,
          aa = 0,
          ba = 0,
          ca = 0,
          da = 0,
          ea = 0,
          fa = 0,
          ga = 0,
          ha = 0,
          ia = 0,
          ja = 0,
          ka = 0,
          la = 0,
          ma = 0,
          na = 0,
          oa = 0,
          pa = 0,
          qa = 0,
          ra = 0,
          sa = 0;sa = u;u = u + 64 | 0;y = sa + 60 | 0;ka = sa;z = sa + 56 | 0;pa = sa + 44 | 0;U = sa + 40 | 0;k[pa >> 2] = 0;qa = pa + 4 | 0;k[qa >> 2] = 0;ra = pa + 8 | 0;k[ra >> 2] = 0;A = a + 152 | 0;ma = A;ma = we(k[ma >> 2] | 0, k[ma + 4 >> 2] | 0, 1, 0) | 0;k[A >> 2] = ma;k[A + 4 >> 2] = N;A = a + 184 | 0;ma = a + 388 | 0;B = a + 336 | 0;C = a + 396 | 0;D = a + 372 | 0;na = a + 376 | 0;E = a + 32 | 0;F = a + 288 | 0;G = a + 40 | 0;H = a + 264 | 0;I = a + 560 | 0;J = a + 136 | 0;K = a + 552 | 0;L = a + 120 | 0;M = a + 544 | 0;O = a + 28 | 0;P = a + 192 | 0;Q = a + 240 | 0;S = a + 200 | 0;T = a + 252 | 0;V = a + 208 | 0;W = a + 400 | 0;oa = a + 384 | 0;X = a + 476 | 0;Y = a + 248 | 0;Z = a + 256 | 0;_ = a + 248 | 0;$ = (b | 0) < 0;aa = a + 584 | 0;ba = a + 568 | 0;ca = a + 576 | 0;da = a + 428 | 0;ea = a + 424 | 0;fa = a + 384 | 0;ga = a + 392 | 0;ha = a + 16 | 0;ia = a + 160 | 0;ja = a + 176 | 0;c = 0;a: while (1) {
        while (1) {
          e = ec(a) | 0;if ((e | 0) == -1) break;w = A;w = we(k[w >> 2] | 0, k[w + 4 >> 2] | 0, 1, 0) | 0;x = A;k[x >> 2] = w;k[x + 4 >> 2] = N;c = c + 1 | 0;if (!(k[ma >> 2] | 0)) {
            e = 1;break a;
          }if (k[pa >> 2] | 0) k[qa >> 2] = 0;oc(a, e, pa, z);mc(a, k[z >> 2] | 0);if ((k[qa >> 2] | 0) == 1) {
            e = k[k[pa >> 2] >> 2] | 0;x = e >> 1;i[(k[B >> 2] | 0) + x >> 0] = e & 1;f = k[ma >> 2] | 0;x = (k[C >> 2] | 0) + (x << 3) | 0;k[x >> 2] = -1;k[x + 4 >> 2] = f;x = k[D >> 2] | 0;f = k[na >> 2] | 0;k[na >> 2] = f + 1;f = x + (f << 2) | 0;
          } else {
            n = fc(X, pa, 1, 0) | 0;e = k[T >> 2] | 0;if ((e | 0) == (k[Z >> 2] | 0)) {
              gc(Y, e + 1 | 0);e = k[T >> 2] | 0;
            }f = k[Y >> 2] | 0;k[T >> 2] = e + 1;k[f + (e << 2) >> 2] = n;hc(a, n);f = k[X >> 2] | 0;x = f + (n << 2) | 0;d = +p[H >> 3];x = x + 4 + ((k[x >> 2] | 0) >>> 6 << 2) | 0;j = d + +o[x >> 2];o[x >> 2] = j;if (j > 1.0e20) {
              g = k[T >> 2] | 0;if ((g | 0) > 0) {
                m = k[_ >> 2] | 0;e = 0;do {
                  x = f + (k[m + (e << 2) >> 2] << 2) | 0;x = x + 4 + ((k[x >> 2] | 0) >>> 6 << 2) | 0;o[x >> 2] = +o[x >> 2] * 1.0e-20;e = e + 1 | 0;
                } while ((e | 0) != (g | 0));
              }p[H >> 3] = d * 1.0e-20;
            }e = k[k[pa >> 2] >> 2] | 0;x = e >> 1;i[(k[B >> 2] | 0) + x >> 0] = e & 1;f = k[ma >> 2] | 0;x = (k[C >> 2] | 0) + (x << 3) | 0;k[x >> 2] = n;k[x + 4 >> 2] = f;x = k[D >> 2] | 0;f = k[na >> 2] | 0;k[na >> 2] = f + 1;f = x + (f << 2) | 0;
          }k[f >> 2] = e;p[F >> 3] = +p[F >> 3] * (1.0 / +p[E >> 3]);p[H >> 3] = +p[H >> 3] * (1.0 / +p[G >> 3]);x = (k[I >> 2] | 0) + -1 | 0;k[I >> 2] = x;if (x | 0) continue;d = +p[J >> 3] * +p[K >> 3];p[K >> 3] = d;k[I >> 2] = ~~d;d = +p[L >> 3] * +p[M >> 3];p[M >> 3] = d;if ((k[O >> 2] | 0) <= 0) continue;x = k[A >> 2] | 0;s = k[ma >> 2] | 0;if (!s) e = na;else e = k[oa >> 2] | 0;t = (k[P >> 2] | 0) - (k[e >> 2] | 0) | 0;v = k[Q >> 2] | 0;w = k[S >> 2] | 0;m = ~~d;n = k[T >> 2] | 0;r = V;q = k[r >> 2] | 0;r = k[r + 4 >> 2] | 0;j = +(k[W >> 2] | 0);h = 1.0 / j;if ((s | 0) < 0) d = 0.0;else {
            g = 0;d = 0.0;while (1) {
              if (!g) f = 0;else f = k[(k[oa >> 2] | 0) + (g + -1 << 2) >> 2] | 0;if ((g | 0) == (s | 0)) e = na;else e = (k[oa >> 2] | 0) + (g << 2) | 0;d = d + +R(+h, + +(g | 0)) * +((k[e >> 2] | 0) - f | 0);if ((g | 0) == (s | 0)) break;else g = g + 1 | 0;
            }
          }k[ka >> 2] = x;k[ka + 4 >> 2] = t;k[ka + 8 >> 2] = v;k[ka + 12 >> 2] = w;k[ka + 16 >> 2] = m;k[ka + 20 >> 2] = n;p[ka + 24 >> 3] = (+(q >>> 0) + 4294967296.0 * +(r >>> 0)) / +(n | 0);p[ka + 32 >> 3] = d / j * 100.0;Pd(2038, ka) | 0;
        }if (!($ | (c | 0) < (b | 0))) {
          la = 34;break;
        }if (i[aa >> 0] | 0) {
          la = 34;break;
        }e = ba;f = k[e + 4 >> 2] | 0;if ((f | 0) >= 0 ? (x = A, w = k[x + 4 >> 2] | 0, !(w >>> 0 < f >>> 0 | ((w | 0) == (f | 0) ? (k[x >> 2] | 0) >>> 0 < (k[e >> 2] | 0) >>> 0 : 0))) : 0) {
          la = 34;break;
        }e = ca;f = k[e + 4 >> 2] | 0;if ((f | 0) >= 0 ? (x = ja, w = k[x + 4 >> 2] | 0, !(w >>> 0 < f >>> 0 | ((w | 0) == (f | 0) ? (k[x >> 2] | 0) >>> 0 < (k[e >> 2] | 0) >>> 0 : 0))) : 0) {
          la = 34;break;
        }if ((k[ma >> 2] | 0) == 0 ? !(wc(a) | 0) : 0) {
          e = 1;break;
        }if (!(+((k[T >> 2] | 0) - (k[na >> 2] | 0) | 0) >= +p[M >> 3])) e = -2;else {
          rc(a);e = -2;
        }b: while (1) {
          f = k[ma >> 2] | 0;if ((f | 0) >= (k[da >> 2] | 0)) break;g = k[(k[ea >> 2] | 0) + (f << 2) >> 2] | 0;switch (((l[(k[B >> 2] | 0) + (g >> 1) >> 0] ^ g & 1) & 255) << 24 >> 24) {case 0:
              {
                g = k[na >> 2] | 0;if ((f | 0) == (k[ga >> 2] | 0)) {
                  ac(fa, f + 1 | 0);f = k[ma >> 2] | 0;
                }x = k[fa >> 2] | 0;k[ma >> 2] = f + 1;k[x + (f << 2) >> 2] = g;f = 0;break;
              }case 1:
              {
                k[U >> 2] = g ^ 1;k[y >> 2] = k[U >> 2];qc(a, y, ha);f = 1;break;
              }default:
              {
                f = 5;e = g;
              }}switch (f & 7) {case 0:
              break;case 5:
              break b;default:
              {
                la = 57;break b;
              }}
        }if ((la | 0) == 57) {
          la = 0;if (!f) continue;else {
            e = 1;break;
          }
        }if ((e | 0) == -2) {
          x = ia;x = we(k[x >> 2] | 0, k[x + 4 >> 2] | 0, 1, 0) | 0;e = ia;k[e >> 2] = x;k[e + 4 >> 2] = N;e = nc(a) | 0;if ((e | 0) == -2) {
            e = 0;break;
          }
        }g = k[na >> 2] | 0;f = k[ma >> 2] | 0;if ((f | 0) == (k[ga >> 2] | 0)) {
          ac(fa, f + 1 | 0);f = k[ma >> 2] | 0;
        }w = k[fa >> 2] | 0;k[ma >> 2] = f + 1;k[w + (f << 2) >> 2] = g;w = e >> 1;i[(k[B >> 2] | 0) + w >> 0] = e & 1;x = k[ma >> 2] | 0;w = (k[C >> 2] | 0) + (w << 3) | 0;k[w >> 2] = -1;k[w + 4 >> 2] = x;w = k[D >> 2] | 0;x = k[na >> 2] | 0;k[na >> 2] = x + 1;k[w + (x << 2) >> 2] = e;
      }if ((la | 0) == 34) {
        j = +(k[W >> 2] | 0);h = 1.0 / j;g = k[ma >> 2] | 0;if ((g | 0) < 0) d = 0.0;else {
          f = 0;d = 0.0;while (1) {
            if (!f) e = 0;else e = k[(k[oa >> 2] | 0) + (f + -1 << 2) >> 2] | 0;if ((f | 0) == (g | 0)) c = na;else c = (k[oa >> 2] | 0) + (f << 2) | 0;d = d + +R(+h, + +(f | 0)) * +((k[c >> 2] | 0) - e | 0);if ((f | 0) == (g | 0)) break;else f = f + 1 | 0;
          }
        }p[a + 464 >> 3] = d / j;mc(a, 0);e = 2;
      }c = k[pa >> 2] | 0;if (!c) {
        u = sa;return e | 0;
      }k[qa >> 2] = 0;Td(c);k[pa >> 2] = 0;k[ra >> 2] = 0;u = sa;return e | 0;
    }function yc(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0.0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = 0;u = a + 4 | 0;if (k[u >> 2] | 0) k[a + 8 >> 2] = 0;if (k[a + 16 >> 2] | 0) k[a + 20 >> 2] = 0;t = a + 232 | 0;if (!(i[t >> 0] | 0)) {
        u = 1;return u | 0;
      }f = a + 144 | 0;s = f;s = we(k[s >> 2] | 0, k[s + 4 >> 2] | 0, 1, 0) | 0;k[f >> 2] = s;k[f + 4 >> 2] = N;p[a + 544 >> 3] = +(k[a + 240 >> 2] | 0) * +p[a + 112 >> 3];f = k[a + 128 >> 2] | 0;p[a + 552 >> 3] = +(f | 0);k[a + 560 >> 2] = f;f = a + 28 | 0;if ((k[f >> 2] | 0) > 0) {
        Od(2088) | 0;Od(2168) | 0;Od(2248) | 0;Od(2328) | 0;
      }g = a + 184 | 0;j = a + 176 | 0;l = a + 64 | 0;m = a + 96 | 0;n = a + 88 | 0;o = a + 584 | 0;q = a + 568 | 0;r = a + 576 | 0;b = 0;do {
        h = +p[m >> 3];if (i[l >> 0] | 0) {
          if ((b | 0) < 1) {
            c = 0;d = 0;
          } else {
            d = 1;c = 0;do {
              c = c + 1 | 0;d = d << 1 | 1;
            } while ((d | 0) <= (b | 0));d = d + -1 | 0;
          }if ((d | 0) != (b | 0)) {
            e = b;do {
              s = d >> 1;c = c + -1 | 0;e = (e | 0) % (s | 0) | 0;d = s + -1 | 0;
            } while ((d | 0) != (e | 0));
          }
        } else c = b;h = +R(+h, + +(c | 0));s = xc(a, ~~(h * +(k[n >> 2] | 0))) | 0;if (i[o >> 0] | 0) break;c = q;d = k[c + 4 >> 2] | 0;if ((d | 0) >= 0 ? (e = g, v = k[e + 4 >> 2] | 0, !(v >>> 0 < d >>> 0 | ((v | 0) == (d | 0) ? (k[e >> 2] | 0) >>> 0 < (k[c >> 2] | 0) >>> 0 : 0))) : 0) break;c = r;d = k[c + 4 >> 2] | 0;if ((d | 0) >= 0) {
          v = j;e = k[v + 4 >> 2] | 0;c = e >>> 0 < d >>> 0 | ((e | 0) == (d | 0) ? (k[v >> 2] | 0) >>> 0 < (k[c >> 2] | 0) >>> 0 : 0);if (c) b = (c & 1) + b | 0;else break;
        } else b = b + 1 | 0;
      } while ((s & 2) != 0);if ((k[f >> 2] | 0) > 0) Od(2328) | 0;switch (s << 24 >> 24) {case 0:
          {
            g = a + 400 | 0;b = k[g >> 2] | 0;f = a + 8 | 0;if ((k[f >> 2] | 0) < (b | 0)) {
              c = a + 12 | 0;d = k[c >> 2] | 0;if ((d | 0) < (b | 0)) {
                t = b + 1 - d & -2;v = (d >> 1) + 2 & -2;e = v - t >> 31;e = (e & t) + (v & ~e) | 0;if ((e | 0) > (2147483647 - d | 0)) {
                  v = La(1) | 0;va(v | 0, 8, 0);
                }t = k[u >> 2] | 0;v = e + d | 0;k[c >> 2] = v;v = Ud(t, v) | 0;k[u >> 2] = v;if ((v | 0) == 0 ? (v = Ec() | 0, (k[v >> 2] | 0) == 12) : 0) {
                  v = La(1) | 0;va(v | 0, 8, 0);
                }
              }c = k[f >> 2] | 0;if ((b | 0) > (c | 0)) xe((k[u >> 2] | 0) + c | 0, 0, b - c | 0) | 0;k[f >> 2] = b;b = k[g >> 2] | 0;
            }if ((b | 0) > 0) {
              c = a + 336 | 0;b = 0;do {
                i[(k[u >> 2] | 0) + b >> 0] = i[(k[c >> 2] | 0) + b >> 0] | 0;b = b + 1 | 0;
              } while ((b | 0) < (k[g >> 2] | 0));
            }break;
          }case 1:
          {
            if (!(k[a + 20 >> 2] | 0)) i[t >> 0] = 0;break;
          }default:
          {}}mc(a, 0);v = s;return v | 0;
    }function zc(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0;f = a + 384 | 0;t = a + 376 | 0;g = k[t >> 2] | 0;s = a + 388 | 0;e = k[s >> 2] | 0;if ((e | 0) == (k[a + 392 >> 2] | 0)) {
        ac(f, e + 1 | 0);e = k[s >> 2] | 0;
      }o = k[f >> 2] | 0;k[s >> 2] = e + 1;k[o + (e << 2) >> 2] = g;o = b + 4 | 0;e = k[o >> 2] | 0;a: do {
        if ((e | 0) > 0) {
          p = a + 336 | 0;q = a + 396 | 0;r = a + 372 | 0;n = 0;while (1) {
            f = k[(k[b >> 2] | 0) + (n << 2) >> 2] | 0;g = f >> 1;h = f & 1;j = (k[p >> 2] | 0) + g | 0;m = l[j >> 0] | 0;if ((m ^ h | 0) == 1) break;if (m & 2) {
              i[j >> 0] = h;e = k[s >> 2] | 0;m = (k[q >> 2] | 0) + (g << 3) | 0;k[m >> 2] = -1;k[m + 4 >> 2] = e;m = k[r >> 2] | 0;e = k[t >> 2] | 0;k[t >> 2] = e + 1;k[m + (e << 2) >> 2] = f;e = k[o >> 2] | 0;
            }n = n + 1 | 0;if ((n | 0) >= (e | 0)) break a;
          }mc(a, 0);a = 0;return a | 0;
        }
      } while (0);if (d) e = 0;else e = k[t >> 2] | 0;if ((ec(a) | 0) == -1) {
        f = k[c >> 2] | 0;if (f | 0) k[c + 4 >> 2] = 0;if ((e | 0) < (k[t >> 2] | 0)) {
          j = a + 372 | 0;m = c + 4 | 0;n = c + 8 | 0;do {
            h = k[j >> 2] | 0;g = k[m >> 2] | 0;if ((g | 0) == (k[n >> 2] | 0)) {
              Ab(c, g + 1 | 0);g = k[m >> 2] | 0;f = k[c >> 2] | 0;
            }k[m >> 2] = g + 1;k[f + (g << 2) >> 2] = k[h + (e << 2) >> 2];e = e + 1 | 0;
          } while ((e | 0) < (k[t >> 2] | 0));e = 1;
        } else e = 1;
      } else e = 0;mc(a, 0);a = e;return a | 0;
    }function Ac(a) {
      a = a | 0;var b = 0,
          c = 0;b = u;u = u + 16 | 0;c = b;a = Hc(k[a + 60 >> 2] | 0) | 0;k[c >> 2] = a;a = Dc(Aa(6, c | 0) | 0) | 0;u = b;return a | 0;
    }function Bc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0;m = u;u = u + 48 | 0;j = m + 16 | 0;f = m;e = m + 32 | 0;h = a + 28 | 0;d = k[h >> 2] | 0;k[e >> 2] = d;i = a + 20 | 0;d = (k[i >> 2] | 0) - d | 0;k[e + 4 >> 2] = d;k[e + 8 >> 2] = b;k[e + 12 >> 2] = c;d = d + c | 0;g = a + 60 | 0;k[f >> 2] = k[g >> 2];k[f + 4 >> 2] = e;k[f + 8 >> 2] = 2;f = Dc(Ca(146, f | 0) | 0) | 0;a: do {
        if ((d | 0) != (f | 0)) {
          b = 2;while (1) {
            if ((f | 0) < 0) break;d = d - f | 0;o = k[e + 4 >> 2] | 0;n = f >>> 0 > o >>> 0;e = n ? e + 8 | 0 : e;b = (n << 31 >> 31) + b | 0;o = f - (n ? o : 0) | 0;k[e >> 2] = (k[e >> 2] | 0) + o;n = e + 4 | 0;k[n >> 2] = (k[n >> 2] | 0) - o;k[j >> 2] = k[g >> 2];k[j + 4 >> 2] = e;k[j + 8 >> 2] = b;f = Dc(Ca(146, j | 0) | 0) | 0;if ((d | 0) == (f | 0)) {
              l = 3;break a;
            }
          }k[a + 16 >> 2] = 0;k[h >> 2] = 0;k[i >> 2] = 0;k[a >> 2] = k[a >> 2] | 32;if ((b | 0) == 2) c = 0;else c = c - (k[e + 4 >> 2] | 0) | 0;
        } else l = 3;
      } while (0);if ((l | 0) == 3) {
        o = k[a + 44 >> 2] | 0;k[a + 16 >> 2] = o + (k[a + 48 >> 2] | 0);k[h >> 2] = o;k[i >> 2] = o;
      }u = m;return c | 0;
    }function Cc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0;e = u;u = u + 32 | 0;f = e;d = e + 20 | 0;k[f >> 2] = k[a + 60 >> 2];k[f + 4 >> 2] = 0;k[f + 8 >> 2] = b;k[f + 12 >> 2] = d;k[f + 16 >> 2] = c;if ((Dc(Ba(140, f | 0) | 0) | 0) < 0) {
        k[d >> 2] = -1;a = -1;
      } else a = k[d >> 2] | 0;u = e;return a | 0;
    }function Dc(a) {
      a = a | 0;var b = 0;if (a >>> 0 > 4294963200) {
        b = Ec() | 0;k[b >> 2] = 0 - a;a = -1;
      }return a | 0;
    }function Ec() {
      return (Fc() | 0) + 64 | 0;
    }function Fc() {
      return Gc() | 0;
    }function Gc() {
      return 380;
    }function Hc(a) {
      a = a | 0;return a | 0;
    }function Ic(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0;e = u;u = u + 32 | 0;d = e;k[a + 36 >> 2] = 1;if ((k[a >> 2] & 64 | 0) == 0 ? (k[d >> 2] = k[a + 60 >> 2], k[d + 4 >> 2] = 21523, k[d + 8 >> 2] = e + 16, wa(54, d | 0) | 0) : 0) i[a + 75 >> 0] = -1;d = Bc(a, b, c) | 0;u = e;return d | 0;
    }function Jc() {
      return 5756;
    }function Kc(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0;c = i[a >> 0] | 0;d = i[b >> 0] | 0;if (c << 24 >> 24 == 0 ? 1 : c << 24 >> 24 != d << 24 >> 24) a = d;else {
        do {
          a = a + 1 | 0;b = b + 1 | 0;c = i[a >> 0] | 0;d = i[b >> 0] | 0;
        } while (!(c << 24 >> 24 == 0 ? 1 : c << 24 >> 24 != d << 24 >> 24));a = d;
      }return (c & 255) - (a & 255) | 0;
    }function Lc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0;f = b & 255;d = (c | 0) != 0;a: do {
        if (d & (a & 3 | 0) != 0) {
          e = b & 255;while (1) {
            if ((i[a >> 0] | 0) == e << 24 >> 24) {
              g = 6;break a;
            }a = a + 1 | 0;c = c + -1 | 0;d = (c | 0) != 0;if (!(d & (a & 3 | 0) != 0)) {
              g = 5;break;
            }
          }
        } else g = 5;
      } while (0);if ((g | 0) == 5) if (d) g = 6;else c = 0;b: do {
        if ((g | 0) == 6) {
          e = b & 255;if ((i[a >> 0] | 0) != e << 24 >> 24) {
            d = aa(f, 16843009) | 0;c: do {
              if (c >>> 0 > 3) while (1) {
                f = k[a >> 2] ^ d;if ((f & -2139062144 ^ -2139062144) & f + -16843009 | 0) break;a = a + 4 | 0;c = c + -4 | 0;if (c >>> 0 <= 3) {
                  g = 11;break c;
                }
              } else g = 11;
            } while (0);if ((g | 0) == 11) if (!c) {
              c = 0;break;
            }while (1) {
              if ((i[a >> 0] | 0) == e << 24 >> 24) break b;a = a + 1 | 0;c = c + -1 | 0;if (!c) {
                c = 0;break;
              }
            }
          }
        }
      } while (0);return (c | 0 ? a : 0) | 0;
    }function Mc(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0;d = a;a: do {
        if (!(d & 3)) c = 4;else {
          b = d;while (1) {
            if (!(i[a >> 0] | 0)) {
              a = b;break a;
            }a = a + 1 | 0;b = a;if (!(b & 3)) {
              c = 4;break;
            }
          }
        }
      } while (0);if ((c | 0) == 4) {
        while (1) {
          b = k[a >> 2] | 0;if (!((b & -2139062144 ^ -2139062144) & b + -16843009)) a = a + 4 | 0;else break;
        }if ((b & 255) << 24 >> 24) do {
          a = a + 1 | 0;
        } while ((i[a >> 0] | 0) != 0);
      }return a - d | 0;
    }function Nc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0;r = u;u = u + 224 | 0;m = r + 120 | 0;o = r + 80 | 0;p = r;q = r + 136 | 0;d = o;e = d + 40 | 0;do {
        k[d >> 2] = 0;d = d + 4 | 0;
      } while ((d | 0) < (e | 0));k[m >> 2] = k[c >> 2];if ((Oc(0, b, m, p, o) | 0) < 0) c = -1;else {
        if ((k[a + 76 >> 2] | 0) > -1) n = Pc(a) | 0;else n = 0;c = k[a >> 2] | 0;l = c & 32;if ((i[a + 74 >> 0] | 0) < 1) k[a >> 2] = c & -33;d = a + 48 | 0;if (!(k[d >> 2] | 0)) {
          e = a + 44 | 0;f = k[e >> 2] | 0;k[e >> 2] = q;g = a + 28 | 0;k[g >> 2] = q;h = a + 20 | 0;k[h >> 2] = q;k[d >> 2] = 80;j = a + 16 | 0;k[j >> 2] = q + 80;c = Oc(a, b, m, p, o) | 0;if (f) {
            Pa[k[a + 36 >> 2] & 7](a, 0, 0) | 0;c = (k[h >> 2] | 0) == 0 ? -1 : c;k[e >> 2] = f;k[d >> 2] = 0;k[j >> 2] = 0;k[g >> 2] = 0;k[h >> 2] = 0;
          }
        } else c = Oc(a, b, m, p, o) | 0;d = k[a >> 2] | 0;k[a >> 2] = d | l;if (n | 0) Qc(a);c = (d & 32 | 0) == 0 ? c : -1;
      }u = r;return c | 0;
    }function Oc(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0;G = u;u = u + 64 | 0;C = G + 16 | 0;D = G;A = G + 24 | 0;E = G + 8 | 0;F = G + 20 | 0;k[C >> 2] = b;x = (a | 0) != 0;y = A + 40 | 0;z = y;A = A + 39 | 0;B = E + 4 | 0;g = 0;f = 0;n = 0;a: while (1) {
        do {
          if ((f | 0) > -1) if ((g | 0) > (2147483647 - f | 0)) {
            f = Ec() | 0;k[f >> 2] = 75;f = -1;break;
          } else {
            f = g + f | 0;break;
          }
        } while (0);g = i[b >> 0] | 0;if (!(g << 24 >> 24)) {
          w = 87;break;
        } else h = b;b: while (1) {
          switch (g << 24 >> 24) {case 37:
              {
                g = h;w = 9;break b;
              }case 0:
              {
                g = h;break b;
              }default:
              {}}v = h + 1 | 0;k[C >> 2] = v;g = i[v >> 0] | 0;h = v;
        }c: do {
          if ((w | 0) == 9) while (1) {
            w = 0;if ((i[h + 1 >> 0] | 0) != 37) break c;g = g + 1 | 0;h = h + 2 | 0;k[C >> 2] = h;if ((i[h >> 0] | 0) == 37) w = 9;else break;
          }
        } while (0);g = g - b | 0;if (x) Rc(a, b, g);if (g | 0) {
          b = h;continue;
        }l = h + 1 | 0;g = (i[l >> 0] | 0) + -48 | 0;if (g >>> 0 < 10) {
          v = (i[h + 2 >> 0] | 0) == 36;t = v ? g : -1;n = v ? 1 : n;l = v ? h + 3 | 0 : l;
        } else t = -1;k[C >> 2] = l;g = i[l >> 0] | 0;h = (g << 24 >> 24) + -32 | 0;d: do {
          if (h >>> 0 < 32) {
            m = 0;o = g;while (1) {
              g = 1 << h;if (!(g & 75913)) {
                g = o;break d;
              }m = g | m;l = l + 1 | 0;k[C >> 2] = l;g = i[l >> 0] | 0;h = (g << 24 >> 24) + -32 | 0;if (h >>> 0 >= 32) break;else o = g;
            }
          } else m = 0;
        } while (0);if (g << 24 >> 24 == 42) {
          h = l + 1 | 0;g = (i[h >> 0] | 0) + -48 | 0;if (g >>> 0 < 10 ? (i[l + 2 >> 0] | 0) == 36 : 0) {
            k[e + (g << 2) >> 2] = 10;g = k[d + ((i[h >> 0] | 0) + -48 << 3) >> 2] | 0;n = 1;l = l + 3 | 0;
          } else {
            if (n | 0) {
              f = -1;break;
            }if (x) {
              n = (k[c >> 2] | 0) + (4 - 1) & ~(4 - 1);g = k[n >> 2] | 0;k[c >> 2] = n + 4;n = 0;l = h;
            } else {
              g = 0;n = 0;l = h;
            }
          }k[C >> 2] = l;v = (g | 0) < 0;g = v ? 0 - g | 0 : g;m = v ? m | 8192 : m;
        } else {
          g = Sc(C) | 0;if ((g | 0) < 0) {
            f = -1;break;
          }l = k[C >> 2] | 0;
        }do {
          if ((i[l >> 0] | 0) == 46) {
            if ((i[l + 1 >> 0] | 0) != 42) {
              k[C >> 2] = l + 1;h = Sc(C) | 0;l = k[C >> 2] | 0;break;
            }o = l + 2 | 0;h = (i[o >> 0] | 0) + -48 | 0;if (h >>> 0 < 10 ? (i[l + 3 >> 0] | 0) == 36 : 0) {
              k[e + (h << 2) >> 2] = 10;h = k[d + ((i[o >> 0] | 0) + -48 << 3) >> 2] | 0;l = l + 4 | 0;k[C >> 2] = l;break;
            }if (n | 0) {
              f = -1;break a;
            }if (x) {
              v = (k[c >> 2] | 0) + (4 - 1) & ~(4 - 1);h = k[v >> 2] | 0;k[c >> 2] = v + 4;
            } else h = 0;k[C >> 2] = o;l = o;
          } else h = -1;
        } while (0);s = 0;while (1) {
          if (((i[l >> 0] | 0) + -65 | 0) >>> 0 > 57) {
            f = -1;break a;
          }v = l + 1 | 0;k[C >> 2] = v;o = i[(i[l >> 0] | 0) + -65 + (2408 + (s * 58 | 0)) >> 0] | 0;q = o & 255;if ((q + -1 | 0) >>> 0 < 8) {
            s = q;l = v;
          } else break;
        }if (!(o << 24 >> 24)) {
          f = -1;break;
        }r = (t | 0) > -1;do {
          if (o << 24 >> 24 == 19) {
            if (r) {
              f = -1;break a;
            } else w = 49;
          } else {
            if (r) {
              k[e + (t << 2) >> 2] = q;r = d + (t << 3) | 0;t = k[r + 4 >> 2] | 0;w = D;k[w >> 2] = k[r >> 2];k[w + 4 >> 2] = t;w = 49;break;
            }if (!x) {
              f = 0;break a;
            }Tc(D, q, c);
          }
        } while (0);if ((w | 0) == 49 ? (w = 0, !x) : 0) {
          g = 0;b = v;continue;
        }l = i[l >> 0] | 0;l = (s | 0) != 0 & (l & 15 | 0) == 3 ? l & -33 : l;r = m & -65537;t = (m & 8192 | 0) == 0 ? m : r;e: do {
          switch (l | 0) {case 110:
              switch ((s & 255) << 24 >> 24) {case 0:
                  {
                    k[k[D >> 2] >> 2] = f;g = 0;b = v;continue a;
                  }case 1:
                  {
                    k[k[D >> 2] >> 2] = f;g = 0;b = v;continue a;
                  }case 2:
                  {
                    g = k[D >> 2] | 0;k[g >> 2] = f;k[g + 4 >> 2] = ((f | 0) < 0) << 31 >> 31;g = 0;b = v;continue a;
                  }case 3:
                  {
                    j[k[D >> 2] >> 1] = f;g = 0;b = v;continue a;
                  }case 4:
                  {
                    i[k[D >> 2] >> 0] = f;g = 0;b = v;continue a;
                  }case 6:
                  {
                    k[k[D >> 2] >> 2] = f;g = 0;b = v;continue a;
                  }case 7:
                  {
                    g = k[D >> 2] | 0;k[g >> 2] = f;k[g + 4 >> 2] = ((f | 0) < 0) << 31 >> 31;g = 0;b = v;continue a;
                  }default:
                  {
                    g = 0;b = v;continue a;
                  }}case 112:
              {
                l = 120;h = h >>> 0 > 8 ? h : 8;b = t | 8;w = 61;break;
              }case 88:case 120:
              {
                b = t;w = 61;break;
              }case 111:
              {
                l = D;b = k[l >> 2] | 0;l = k[l + 4 >> 2] | 0;q = Vc(b, l, y) | 0;r = z - q | 0;m = 0;o = 2872;h = (t & 8 | 0) == 0 | (h | 0) > (r | 0) ? h : r + 1 | 0;r = t;w = 67;break;
              }case 105:case 100:
              {
                l = D;b = k[l >> 2] | 0;l = k[l + 4 >> 2] | 0;if ((l | 0) < 0) {
                  b = ve(0, 0, b | 0, l | 0) | 0;l = N;m = D;k[m >> 2] = b;k[m + 4 >> 2] = l;m = 1;o = 2872;w = 66;break e;
                } else {
                  m = (t & 2049 | 0) != 0 & 1;o = (t & 2048 | 0) == 0 ? (t & 1 | 0) == 0 ? 2872 : 2874 : 2873;w = 66;break e;
                }
              }case 117:
              {
                l = D;m = 0;o = 2872;b = k[l >> 2] | 0;l = k[l + 4 >> 2] | 0;w = 66;break;
              }case 99:
              {
                i[A >> 0] = k[D >> 2];b = A;m = 0;o = 2872;q = y;l = 1;h = r;break;
              }case 109:
              {
                l = Ec() | 0;l = Xc(k[l >> 2] | 0) | 0;w = 71;break;
              }case 115:
              {
                l = k[D >> 2] | 0;l = l | 0 ? l : 2882;w = 71;break;
              }case 67:
              {
                k[E >> 2] = k[D >> 2];k[B >> 2] = 0;k[D >> 2] = E;q = -1;l = E;w = 75;break;
              }case 83:
              {
                b = k[D >> 2] | 0;if (!h) {
                  Yc(a, 32, g, 0, t);b = 0;w = 84;
                } else {
                  q = h;l = b;w = 75;
                }break;
              }case 65:case 71:case 70:case 69:case 97:case 103:case 102:case 101:
              {
                g = _c(a, +p[D >> 3], g, h, t, l) | 0;b = v;continue a;
              }default:
              {
                m = 0;o = 2872;q = y;l = h;h = t;
              }}
        } while (0);f: do {
          if ((w | 0) == 61) {
            t = D;s = k[t >> 2] | 0;t = k[t + 4 >> 2] | 0;q = Uc(s, t, y, l & 32) | 0;o = (b & 8 | 0) == 0 | (s | 0) == 0 & (t | 0) == 0;m = o ? 0 : 2;o = o ? 2872 : 2872 + (l >> 4) | 0;r = b;b = s;l = t;w = 67;
          } else if ((w | 0) == 66) {
            q = Wc(b, l, y) | 0;r = t;w = 67;
          } else if ((w | 0) == 71) {
            w = 0;t = Lc(l, 0, h) | 0;s = (t | 0) == 0;b = l;m = 0;o = 2872;q = s ? l + h | 0 : t;l = s ? h : t - l | 0;h = r;
          } else if ((w | 0) == 75) {
            w = 0;o = l;b = 0;h = 0;while (1) {
              m = k[o >> 2] | 0;if (!m) break;h = Zc(F, m) | 0;if ((h | 0) < 0 | h >>> 0 > (q - b | 0) >>> 0) break;b = h + b | 0;if (q >>> 0 > b >>> 0) o = o + 4 | 0;else break;
            }if ((h | 0) < 0) {
              f = -1;break a;
            }Yc(a, 32, g, b, t);if (!b) {
              b = 0;w = 84;
            } else {
              m = 0;while (1) {
                h = k[l >> 2] | 0;if (!h) {
                  w = 84;break f;
                }h = Zc(F, h) | 0;m = h + m | 0;if ((m | 0) > (b | 0)) {
                  w = 84;break f;
                }Rc(a, F, h);if (m >>> 0 >= b >>> 0) {
                  w = 84;break;
                } else l = l + 4 | 0;
              }
            }
          }
        } while (0);if ((w | 0) == 67) {
          w = 0;l = (b | 0) != 0 | (l | 0) != 0;t = (h | 0) != 0 | l;l = ((l ^ 1) & 1) + (z - q) | 0;b = t ? q : y;q = y;l = t ? (h | 0) > (l | 0) ? h : l : h;h = (h | 0) > -1 ? r & -65537 : r;
        } else if ((w | 0) == 84) {
          w = 0;Yc(a, 32, g, b, t ^ 8192);g = (g | 0) > (b | 0) ? g : b;b = v;continue;
        }s = q - b | 0;r = (l | 0) < (s | 0) ? s : l;t = r + m | 0;g = (g | 0) < (t | 0) ? t : g;Yc(a, 32, g, t, h);Rc(a, o, m);Yc(a, 48, g, t, h ^ 65536);Yc(a, 48, r, s, 0);Rc(a, b, s);Yc(a, 32, g, t, h ^ 8192);b = v;
      }g: do {
        if ((w | 0) == 87) if (!a) if (!n) f = 0;else {
          f = 1;while (1) {
            b = k[e + (f << 2) >> 2] | 0;if (!b) break;Tc(d + (f << 3) | 0, b, c);f = f + 1 | 0;if ((f | 0) >= 10) {
              f = 1;break g;
            }
          }while (1) {
            if (k[e + (f << 2) >> 2] | 0) {
              f = -1;break g;
            }f = f + 1 | 0;if ((f | 0) >= 10) {
              f = 1;break;
            }
          }
        }
      } while (0);u = G;return f | 0;
    }function Pc(a) {
      a = a | 0;return 0;
    }function Qc(a) {
      a = a | 0;return;
    }function Rc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;if (!(k[a >> 2] & 32)) kd(b, c, a) | 0;return;
    }function Sc(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0;c = k[a >> 2] | 0;d = (i[c >> 0] | 0) + -48 | 0;if (d >>> 0 < 10) {
        b = 0;do {
          b = d + (b * 10 | 0) | 0;c = c + 1 | 0;k[a >> 2] = c;d = (i[c >> 0] | 0) + -48 | 0;
        } while (d >>> 0 < 10);
      } else b = 0;return b | 0;
    }function Tc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0.0;a: do {
        if (b >>> 0 <= 20) do {
          switch (b | 0) {case 9:
              {
                d = (k[c >> 2] | 0) + (4 - 1) & ~(4 - 1);b = k[d >> 2] | 0;k[c >> 2] = d + 4;k[a >> 2] = b;break a;
              }case 10:
              {
                d = (k[c >> 2] | 0) + (4 - 1) & ~(4 - 1);b = k[d >> 2] | 0;k[c >> 2] = d + 4;d = a;k[d >> 2] = b;k[d + 4 >> 2] = ((b | 0) < 0) << 31 >> 31;break a;
              }case 11:
              {
                d = (k[c >> 2] | 0) + (4 - 1) & ~(4 - 1);b = k[d >> 2] | 0;k[c >> 2] = d + 4;d = a;k[d >> 2] = b;k[d + 4 >> 2] = 0;break a;
              }case 12:
              {
                d = (k[c >> 2] | 0) + (8 - 1) & ~(8 - 1);b = d;e = k[b >> 2] | 0;b = k[b + 4 >> 2] | 0;k[c >> 2] = d + 8;d = a;k[d >> 2] = e;k[d + 4 >> 2] = b;break a;
              }case 13:
              {
                e = (k[c >> 2] | 0) + (4 - 1) & ~(4 - 1);d = k[e >> 2] | 0;k[c >> 2] = e + 4;d = (d & 65535) << 16 >> 16;e = a;k[e >> 2] = d;k[e + 4 >> 2] = ((d | 0) < 0) << 31 >> 31;break a;
              }case 14:
              {
                e = (k[c >> 2] | 0) + (4 - 1) & ~(4 - 1);d = k[e >> 2] | 0;k[c >> 2] = e + 4;e = a;k[e >> 2] = d & 65535;k[e + 4 >> 2] = 0;break a;
              }case 15:
              {
                e = (k[c >> 2] | 0) + (4 - 1) & ~(4 - 1);d = k[e >> 2] | 0;k[c >> 2] = e + 4;d = (d & 255) << 24 >> 24;e = a;k[e >> 2] = d;k[e + 4 >> 2] = ((d | 0) < 0) << 31 >> 31;break a;
              }case 16:
              {
                e = (k[c >> 2] | 0) + (4 - 1) & ~(4 - 1);d = k[e >> 2] | 0;k[c >> 2] = e + 4;e = a;k[e >> 2] = d & 255;k[e + 4 >> 2] = 0;break a;
              }case 17:
              {
                e = (k[c >> 2] | 0) + (8 - 1) & ~(8 - 1);f = +p[e >> 3];k[c >> 2] = e + 8;p[a >> 3] = f;break a;
              }case 18:
              {
                e = (k[c >> 2] | 0) + (8 - 1) & ~(8 - 1);f = +p[e >> 3];k[c >> 2] = e + 8;p[a >> 3] = f;break a;
              }default:
              break a;}
        } while (0);
      } while (0);return;
    }function Uc(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;if (!((a | 0) == 0 & (b | 0) == 0)) do {
        c = c + -1 | 0;i[c >> 0] = l[2920 + (a & 15) >> 0] | 0 | d;a = ye(a | 0, b | 0, 4) | 0;b = N;
      } while (!((a | 0) == 0 & (b | 0) == 0));return c | 0;
    }function Vc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;if (!((a | 0) == 0 & (b | 0) == 0)) do {
        c = c + -1 | 0;i[c >> 0] = a & 7 | 48;a = ye(a | 0, b | 0, 3) | 0;b = N;
      } while (!((a | 0) == 0 & (b | 0) == 0));return c | 0;
    }function Wc(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0;if (b >>> 0 > 0 | (b | 0) == 0 & a >>> 0 > 4294967295) {
        while (1) {
          d = Ge(a | 0, b | 0, 10, 0) | 0;c = c + -1 | 0;i[c >> 0] = d & 255 | 48;d = a;a = Ce(a | 0, b | 0, 10, 0) | 0;if (!(b >>> 0 > 9 | (b | 0) == 9 & d >>> 0 > 4294967295)) break;else b = N;
        }b = a;
      } else b = a;if (b) while (1) {
        c = c + -1 | 0;i[c >> 0] = (b >>> 0) % 10 | 0 | 48;if (b >>> 0 < 10) break;else b = (b >>> 0) / 10 | 0;
      }return c | 0;
    }function Xc(a) {
      a = a | 0;var b = 0;b = (ed() | 0) + 188 | 0;return fd(a, k[b >> 2] | 0) | 0;
    }function Yc(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = u;u = u + 256 | 0;f = g;if ((c | 0) > (d | 0) & (e & 73728 | 0) == 0) {
        e = c - d | 0;xe(f | 0, b | 0, (e >>> 0 < 256 ? e : 256) | 0) | 0;if (e >>> 0 > 255) {
          b = c - d | 0;do {
            Rc(a, f, 256);e = e + -256 | 0;
          } while (e >>> 0 > 255);e = b & 255;
        }Rc(a, f, e);
      }u = g;return;
    }function Zc(a, b) {
      a = a | 0;b = b | 0;if (!a) a = 0;else a = cd(a, b, 0) | 0;return a | 0;
    }function _c(a, b, c, d, e, f) {
      a = a | 0;b = +b;c = c | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0.0,
          r = 0,
          s = 0,
          t = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0;G = u;u = u + 560 | 0;j = G + 8 | 0;t = G;F = G + 524 | 0;E = F;m = G + 512 | 0;k[t >> 2] = 0;D = m + 12 | 0;$c(b) | 0;if ((N | 0) < 0) {
        b = -b;B = 1;A = 2889;
      } else {
        B = (e & 2049 | 0) != 0 & 1;A = (e & 2048 | 0) == 0 ? (e & 1 | 0) == 0 ? 2890 : 2895 : 2892;
      }$c(b) | 0;C = N & 2146435072;do {
        if (C >>> 0 < 2146435072 | (C | 0) == 2146435072 & 0 < 0) {
          q = +ad(b, t) * 2.0;g = q != 0.0;if (g) k[t >> 2] = (k[t >> 2] | 0) + -1;w = f | 32;if ((w | 0) == 97) {
            r = f & 32;p = (r | 0) == 0 ? A : A + 9 | 0;o = B | 2;g = 12 - d | 0;do {
              if (!(d >>> 0 > 11 | (g | 0) == 0)) {
                b = 8.0;do {
                  g = g + -1 | 0;b = b * 16.0;
                } while ((g | 0) != 0);if ((i[p >> 0] | 0) == 45) {
                  b = -(b + (-q - b));break;
                } else {
                  b = q + b - b;break;
                }
              } else b = q;
            } while (0);h = k[t >> 2] | 0;g = (h | 0) < 0 ? 0 - h | 0 : h;g = Wc(g, ((g | 0) < 0) << 31 >> 31, D) | 0;if ((g | 0) == (D | 0)) {
              g = m + 11 | 0;i[g >> 0] = 48;
            }i[g + -1 >> 0] = (h >> 31 & 2) + 43;n = g + -2 | 0;i[n >> 0] = f + 15;m = (d | 0) < 1;j = (e & 8 | 0) == 0;g = F;do {
              C = ~~b;h = g + 1 | 0;i[g >> 0] = l[2920 + C >> 0] | r;b = (b - +(C | 0)) * 16.0;if ((h - E | 0) == 1 ? !(j & (m & b == 0.0)) : 0) {
                i[h >> 0] = 46;g = g + 2 | 0;
              } else g = h;
            } while (b != 0.0);C = g - E | 0;E = D - n | 0;D = (d | 0) != 0 & (C + -2 | 0) < (d | 0) ? d + 2 | 0 : C;g = E + o + D | 0;Yc(a, 32, c, g, e);Rc(a, p, o);Yc(a, 48, c, g, e ^ 65536);Rc(a, F, C);Yc(a, 48, D - C | 0, 0, 0);Rc(a, n, E);Yc(a, 32, c, g, e ^ 8192);break;
          }h = (d | 0) < 0 ? 6 : d;if (g) {
            g = (k[t >> 2] | 0) + -28 | 0;k[t >> 2] = g;b = q * 268435456.0;
          } else {
            b = q;g = k[t >> 2] | 0;
          }C = (g | 0) < 0 ? j : j + 288 | 0;j = C;do {
            y = ~~b >>> 0;k[j >> 2] = y;j = j + 4 | 0;b = (b - +(y >>> 0)) * 1.0e9;
          } while (b != 0.0);if ((g | 0) > 0) {
            m = C;o = j;while (1) {
              n = (g | 0) < 29 ? g : 29;g = o + -4 | 0;if (g >>> 0 >= m >>> 0) {
                j = 0;do {
                  x = ze(k[g >> 2] | 0, 0, n | 0) | 0;x = we(x | 0, N | 0, j | 0, 0) | 0;y = N;v = Ge(x | 0, y | 0, 1e9, 0) | 0;k[g >> 2] = v;j = Ce(x | 0, y | 0, 1e9, 0) | 0;g = g + -4 | 0;
                } while (g >>> 0 >= m >>> 0);if (j) {
                  m = m + -4 | 0;k[m >> 2] = j;
                }
              }j = o;while (1) {
                if (j >>> 0 <= m >>> 0) break;g = j + -4 | 0;if (!(k[g >> 2] | 0)) j = g;else break;
              }g = (k[t >> 2] | 0) - n | 0;k[t >> 2] = g;if ((g | 0) > 0) o = j;else break;
            }
          } else m = C;if ((g | 0) < 0) {
            d = ((h + 25 | 0) / 9 | 0) + 1 | 0;s = (w | 0) == 102;do {
              r = 0 - g | 0;r = (r | 0) < 9 ? r : 9;if (m >>> 0 < j >>> 0) {
                n = (1 << r) + -1 | 0;o = 1e9 >>> r;p = 0;g = m;do {
                  y = k[g >> 2] | 0;k[g >> 2] = (y >>> r) + p;p = aa(y & n, o) | 0;g = g + 4 | 0;
                } while (g >>> 0 < j >>> 0);g = (k[m >> 2] | 0) == 0 ? m + 4 | 0 : m;if (!p) {
                  m = g;g = j;
                } else {
                  k[j >> 2] = p;m = g;g = j + 4 | 0;
                }
              } else {
                m = (k[m >> 2] | 0) == 0 ? m + 4 | 0 : m;g = j;
              }j = s ? C : m;j = (g - j >> 2 | 0) > (d | 0) ? j + (d << 2) | 0 : g;g = (k[t >> 2] | 0) + r | 0;k[t >> 2] = g;
            } while ((g | 0) < 0);g = m;d = j;
          } else {
            g = m;d = j;
          }y = C;if (g >>> 0 < d >>> 0) {
            j = (y - g >> 2) * 9 | 0;n = k[g >> 2] | 0;if (n >>> 0 >= 10) {
              m = 10;do {
                m = m * 10 | 0;j = j + 1 | 0;
              } while (n >>> 0 >= m >>> 0);
            }
          } else j = 0;s = (w | 0) == 103;v = (h | 0) != 0;m = h - ((w | 0) != 102 ? j : 0) + ((v & s) << 31 >> 31) | 0;if ((m | 0) < (((d - y >> 2) * 9 | 0) + -9 | 0)) {
            m = m + 9216 | 0;r = C + 4 + (((m | 0) / 9 | 0) + -1024 << 2) | 0;m = ((m | 0) % 9 | 0) + 1 | 0;if ((m | 0) < 9) {
              n = 10;do {
                n = n * 10 | 0;m = m + 1 | 0;
              } while ((m | 0) != 9);
            } else n = 10;o = k[r >> 2] | 0;p = (o >>> 0) % (n >>> 0) | 0;m = (r + 4 | 0) == (d | 0);if (!(m & (p | 0) == 0)) {
              q = (((o >>> 0) / (n >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;x = (n | 0) / 2 | 0;b = p >>> 0 < x >>> 0 ? .5 : m & (p | 0) == (x | 0) ? 1.0 : 1.5;if (B) {
                x = (i[A >> 0] | 0) == 45;b = x ? -b : b;q = x ? -q : q;
              }m = o - p | 0;k[r >> 2] = m;if (q + b != q) {
                x = m + n | 0;k[r >> 2] = x;if (x >>> 0 > 999999999) {
                  j = r;while (1) {
                    m = j + -4 | 0;k[j >> 2] = 0;if (m >>> 0 < g >>> 0) {
                      g = g + -4 | 0;k[g >> 2] = 0;
                    }x = (k[m >> 2] | 0) + 1 | 0;k[m >> 2] = x;if (x >>> 0 > 999999999) j = m;else break;
                  }
                } else m = r;j = (y - g >> 2) * 9 | 0;o = k[g >> 2] | 0;if (o >>> 0 >= 10) {
                  n = 10;do {
                    n = n * 10 | 0;j = j + 1 | 0;
                  } while (o >>> 0 >= n >>> 0);
                }
              } else m = r;
            } else m = r;m = m + 4 | 0;m = d >>> 0 > m >>> 0 ? m : d;x = g;
          } else {
            m = d;x = g;
          }w = m;while (1) {
            if (w >>> 0 <= x >>> 0) {
              t = 0;break;
            }g = w + -4 | 0;if (!(k[g >> 2] | 0)) w = g;else {
              t = 1;break;
            }
          }d = 0 - j | 0;do {
            if (s) {
              g = ((v ^ 1) & 1) + h | 0;if ((g | 0) > (j | 0) & (j | 0) > -5) {
                n = f + -1 | 0;h = g + -1 - j | 0;
              } else {
                n = f + -2 | 0;h = g + -1 | 0;
              }g = e & 8;if (!g) {
                if (t ? (z = k[w + -4 >> 2] | 0, (z | 0) != 0) : 0) {
                  if (!((z >>> 0) % 10 | 0)) {
                    m = 0;g = 10;do {
                      g = g * 10 | 0;m = m + 1 | 0;
                    } while (!((z >>> 0) % (g >>> 0) | 0 | 0));
                  } else m = 0;
                } else m = 9;g = ((w - y >> 2) * 9 | 0) + -9 | 0;if ((n | 32 | 0) == 102) {
                  r = g - m | 0;r = (r | 0) > 0 ? r : 0;h = (h | 0) < (r | 0) ? h : r;r = 0;break;
                } else {
                  r = g + j - m | 0;r = (r | 0) > 0 ? r : 0;h = (h | 0) < (r | 0) ? h : r;r = 0;break;
                }
              } else r = g;
            } else {
              n = f;r = e & 8;
            }
          } while (0);s = h | r;o = (s | 0) != 0 & 1;p = (n | 32 | 0) == 102;if (p) {
            v = 0;g = (j | 0) > 0 ? j : 0;
          } else {
            g = (j | 0) < 0 ? d : j;g = Wc(g, ((g | 0) < 0) << 31 >> 31, D) | 0;m = D;if ((m - g | 0) < 2) do {
              g = g + -1 | 0;i[g >> 0] = 48;
            } while ((m - g | 0) < 2);i[g + -1 >> 0] = (j >> 31 & 2) + 43;g = g + -2 | 0;i[g >> 0] = n;v = g;g = m - g | 0;
          }g = B + 1 + h + o + g | 0;Yc(a, 32, c, g, e);Rc(a, A, B);Yc(a, 48, c, g, e ^ 65536);if (p) {
            n = x >>> 0 > C >>> 0 ? C : x;r = F + 9 | 0;o = r;p = F + 8 | 0;m = n;do {
              j = Wc(k[m >> 2] | 0, 0, r) | 0;if ((m | 0) == (n | 0)) {
                if ((j | 0) == (r | 0)) {
                  i[p >> 0] = 48;j = p;
                }
              } else if (j >>> 0 > F >>> 0) {
                xe(F | 0, 48, j - E | 0) | 0;do {
                  j = j + -1 | 0;
                } while (j >>> 0 > F >>> 0);
              }Rc(a, j, o - j | 0);m = m + 4 | 0;
            } while (m >>> 0 <= C >>> 0);if (s | 0) Rc(a, 2936, 1);if (m >>> 0 < w >>> 0 & (h | 0) > 0) while (1) {
              j = Wc(k[m >> 2] | 0, 0, r) | 0;if (j >>> 0 > F >>> 0) {
                xe(F | 0, 48, j - E | 0) | 0;do {
                  j = j + -1 | 0;
                } while (j >>> 0 > F >>> 0);
              }Rc(a, j, (h | 0) < 9 ? h : 9);m = m + 4 | 0;j = h + -9 | 0;if (!(m >>> 0 < w >>> 0 & (h | 0) > 9)) {
                h = j;break;
              } else h = j;
            }Yc(a, 48, h + 9 | 0, 9, 0);
          } else {
            s = t ? w : x + 4 | 0;if ((h | 0) > -1) {
              t = F + 9 | 0;r = (r | 0) == 0;d = t;o = 0 - E | 0;p = F + 8 | 0;n = x;do {
                j = Wc(k[n >> 2] | 0, 0, t) | 0;if ((j | 0) == (t | 0)) {
                  i[p >> 0] = 48;j = p;
                }do {
                  if ((n | 0) == (x | 0)) {
                    m = j + 1 | 0;Rc(a, j, 1);if (r & (h | 0) < 1) {
                      j = m;break;
                    }Rc(a, 2936, 1);j = m;
                  } else {
                    if (j >>> 0 <= F >>> 0) break;xe(F | 0, 48, j + o | 0) | 0;do {
                      j = j + -1 | 0;
                    } while (j >>> 0 > F >>> 0);
                  }
                } while (0);E = d - j | 0;Rc(a, j, (h | 0) > (E | 0) ? E : h);h = h - E | 0;n = n + 4 | 0;
              } while (n >>> 0 < s >>> 0 & (h | 0) > -1);
            }Yc(a, 48, h + 18 | 0, 18, 0);Rc(a, v, D - v | 0);
          }Yc(a, 32, c, g, e ^ 8192);
        } else {
          F = (f & 32 | 0) != 0;g = B + 3 | 0;Yc(a, 32, c, g, e & -65537);Rc(a, A, B);Rc(a, b != b | 0.0 != 0.0 ? F ? 5105 : 2916 : F ? 2908 : 2912, 3);Yc(a, 32, c, g, e ^ 8192);
        }
      } while (0);u = G;return ((g | 0) < (c | 0) ? c : g) | 0;
    }function $c(a) {
      a = +a;var b = 0;p[s >> 3] = a;b = k[s >> 2] | 0;N = k[s + 4 >> 2] | 0;return b | 0;
    }function ad(a, b) {
      a = +a;b = b | 0;return + +bd(a, b);
    }function bd(a, b) {
      a = +a;b = b | 0;var c = 0,
          d = 0,
          e = 0;p[s >> 3] = a;c = k[s >> 2] | 0;d = k[s + 4 >> 2] | 0;e = ye(c | 0, d | 0, 52) | 0;switch (e & 2047) {case 0:
          {
            if (a != 0.0) {
              a = +bd(a * 18446744073709551616.0, b);c = (k[b >> 2] | 0) + -64 | 0;
            } else c = 0;k[b >> 2] = c;break;
          }case 2047:
          break;default:
          {
            k[b >> 2] = (e & 2047) + -1022;k[s >> 2] = c;k[s + 4 >> 2] = d & -2146435073 | 1071644672;a = +p[s >> 3];
          }}return +a;
    }function cd(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;do {
        if (a) {
          if (b >>> 0 < 128) {
            i[a >> 0] = b;a = 1;break;
          }c = (dd() | 0) + 188 | 0;if (!(k[k[c >> 2] >> 2] | 0)) if ((b & -128 | 0) == 57216) {
            i[a >> 0] = b;a = 1;break;
          } else {
            a = Ec() | 0;k[a >> 2] = 84;a = -1;break;
          }if (b >>> 0 < 2048) {
            i[a >> 0] = b >>> 6 | 192;i[a + 1 >> 0] = b & 63 | 128;a = 2;break;
          }if (b >>> 0 < 55296 | (b & -8192 | 0) == 57344) {
            i[a >> 0] = b >>> 12 | 224;i[a + 1 >> 0] = b >>> 6 & 63 | 128;i[a + 2 >> 0] = b & 63 | 128;a = 3;break;
          }if ((b + -65536 | 0) >>> 0 < 1048576) {
            i[a >> 0] = b >>> 18 | 240;i[a + 1 >> 0] = b >>> 12 & 63 | 128;i[a + 2 >> 0] = b >>> 6 & 63 | 128;i[a + 3 >> 0] = b & 63 | 128;a = 4;break;
          } else {
            a = Ec() | 0;k[a >> 2] = 84;a = -1;break;
          }
        } else a = 1;
      } while (0);return a | 0;
    }function dd() {
      return Gc() | 0;
    }function ed() {
      return Gc() | 0;
    }function fd(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0;d = 0;while (1) {
        if ((l[2938 + d >> 0] | 0) == (a | 0)) {
          a = 2;break;
        }c = d + 1 | 0;if ((c | 0) == 87) {
          c = 3026;d = 87;a = 5;break;
        } else d = c;
      }if ((a | 0) == 2) if (!d) c = 3026;else {
        c = 3026;a = 5;
      }if ((a | 0) == 5) while (1) {
        do {
          a = c;c = c + 1 | 0;
        } while ((i[a >> 0] | 0) != 0);d = d + -1 | 0;if (!d) break;else a = 5;
      }return gd(c, k[b + 20 >> 2] | 0) | 0;
    }function gd(a, b) {
      a = a | 0;b = b | 0;return hd(a, b) | 0;
    }function hd(a, b) {
      a = a | 0;b = b | 0;if (!b) b = 0;else b = id(k[b >> 2] | 0, k[b + 4 >> 2] | 0, a) | 0;return (b | 0 ? b : a) | 0;
    }function id(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0;o = (k[a >> 2] | 0) + 1794895138 | 0;f = jd(k[a + 8 >> 2] | 0, o) | 0;d = jd(k[a + 12 >> 2] | 0, o) | 0;e = jd(k[a + 16 >> 2] | 0, o) | 0;a: do {
        if ((f >>> 0 < b >>> 2 >>> 0 ? (n = b - (f << 2) | 0, d >>> 0 < n >>> 0 & e >>> 0 < n >>> 0) : 0) ? ((e | d) & 3 | 0) == 0 : 0) {
          n = d >>> 2;m = e >>> 2;l = 0;while (1) {
            h = f >>> 1;j = l + h | 0;g = j << 1;e = g + n | 0;d = jd(k[a + (e << 2) >> 2] | 0, o) | 0;e = jd(k[a + (e + 1 << 2) >> 2] | 0, o) | 0;if (!(e >>> 0 < b >>> 0 & d >>> 0 < (b - e | 0) >>> 0)) {
              d = 0;break a;
            }if (i[a + (e + d) >> 0] | 0) {
              d = 0;break a;
            }d = Kc(c, a + e | 0) | 0;if (!d) break;d = (d | 0) < 0;if ((f | 0) == 1) {
              d = 0;break a;
            } else {
              l = d ? l : j;f = d ? h : f - h | 0;
            }
          }d = g + m | 0;e = jd(k[a + (d << 2) >> 2] | 0, o) | 0;d = jd(k[a + (d + 1 << 2) >> 2] | 0, o) | 0;if (d >>> 0 < b >>> 0 & e >>> 0 < (b - d | 0) >>> 0) d = (i[a + (d + e) >> 0] | 0) == 0 ? a + d | 0 : 0;else d = 0;
        } else d = 0;
      } while (0);return d | 0;
    }function jd(a, b) {
      a = a | 0;b = b | 0;var c = 0;c = Ie(a | 0) | 0;return ((b | 0) == 0 ? a : c) | 0;
    }function kd(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;d = c + 16 | 0;e = k[d >> 2] | 0;if (!e) {
        if (!(ld(c) | 0)) {
          e = k[d >> 2] | 0;f = 5;
        } else d = 0;
      } else f = 5;a: do {
        if ((f | 0) == 5) {
          h = c + 20 | 0;g = k[h >> 2] | 0;d = g;if ((e - g | 0) >>> 0 < b >>> 0) {
            d = Pa[k[c + 36 >> 2] & 7](c, a, b) | 0;break;
          }b: do {
            if ((i[c + 75 >> 0] | 0) > -1) {
              g = b;while (1) {
                if (!g) {
                  f = 0;e = a;break b;
                }e = g + -1 | 0;if ((i[a + e >> 0] | 0) == 10) break;else g = e;
              }d = Pa[k[c + 36 >> 2] & 7](c, a, g) | 0;if (d >>> 0 < g >>> 0) break a;f = g;e = a + g | 0;b = b - g | 0;d = k[h >> 2] | 0;
            } else {
              f = 0;e = a;
            }
          } while (0);He(d | 0, e | 0, b | 0) | 0;k[h >> 2] = (k[h >> 2] | 0) + b;d = f + b | 0;
        }
      } while (0);return d | 0;
    }function ld(a) {
      a = a | 0;var b = 0,
          c = 0;b = a + 74 | 0;c = i[b >> 0] | 0;i[b >> 0] = c + 255 | c;b = k[a >> 2] | 0;if (!(b & 8)) {
        k[a + 8 >> 2] = 0;k[a + 4 >> 2] = 0;c = k[a + 44 >> 2] | 0;k[a + 28 >> 2] = c;k[a + 20 >> 2] = c;k[a + 16 >> 2] = c + (k[a + 48 >> 2] | 0);a = 0;
      } else {
        k[a >> 2] = b | 32;a = -1;
      }return a | 0;
    }function md(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0;i = u;u = u + 128 | 0;g = i;k[g >> 2] = 0;h = g + 4 | 0;k[h >> 2] = a;k[g + 44 >> 2] = a;f = g + 8 | 0;k[f >> 2] = (a | 0) < 0 ? -1 : a + 2147483647 | 0;k[g + 76 >> 2] = -1;nd(g, 0);c = od(g, c, 1, d, e) | 0;if (b | 0) k[b >> 2] = a + ((k[h >> 2] | 0) + (k[g + 108 >> 2] | 0) - (k[f >> 2] | 0));u = i;return c | 0;
    }function nd(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0;k[a + 104 >> 2] = b;c = k[a + 8 >> 2] | 0;d = k[a + 4 >> 2] | 0;e = c - d | 0;k[a + 108 >> 2] = e;k[a + 100 >> 2] = (b | 0) != 0 & (e | 0) > (b | 0) ? d + b | 0 : c;return;
    }function od(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0;a: do {
        if (b >>> 0 > 36) {
          e = Ec() | 0;k[e >> 2] = 22;e = 0;d = 0;
        } else {
          r = a + 4 | 0;q = a + 100 | 0;do {
            f = k[r >> 2] | 0;if (f >>> 0 < (k[q >> 2] | 0) >>> 0) {
              k[r >> 2] = f + 1;f = l[f >> 0] | 0;
            } else f = pd(a) | 0;
          } while ((qd(f) | 0) != 0);b: do {
            switch (f | 0) {case 43:case 45:
                {
                  f = ((f | 0) == 45) << 31 >> 31;g = k[r >> 2] | 0;if (g >>> 0 < (k[q >> 2] | 0) >>> 0) {
                    k[r >> 2] = g + 1;p = f;f = l[g >> 0] | 0;break b;
                  } else {
                    p = f;f = pd(a) | 0;break b;
                  }
                }default:
                p = 0;}
          } while (0);g = (b | 0) == 0;do {
            if ((b | 16 | 0) == 16 & (f | 0) == 48) {
              f = k[r >> 2] | 0;if (f >>> 0 < (k[q >> 2] | 0) >>> 0) {
                k[r >> 2] = f + 1;f = l[f >> 0] | 0;
              } else f = pd(a) | 0;if ((f | 32 | 0) != 120) if (g) {
                b = 8;n = 46;break;
              } else {
                n = 32;break;
              }f = k[r >> 2] | 0;if (f >>> 0 < (k[q >> 2] | 0) >>> 0) {
                k[r >> 2] = f + 1;f = l[f >> 0] | 0;
              } else f = pd(a) | 0;if ((l[4831 + f >> 0] | 0) > 15) {
                d = (k[q >> 2] | 0) != 0;if (d) k[r >> 2] = (k[r >> 2] | 0) + -1;if (!c) {
                  nd(a, 0);e = 0;d = 0;break a;
                }if (!d) {
                  e = 0;d = 0;break a;
                }k[r >> 2] = (k[r >> 2] | 0) + -1;e = 0;d = 0;break a;
              } else {
                b = 16;n = 46;
              }
            } else {
              b = g ? 10 : b;if ((l[4831 + f >> 0] | 0) >>> 0 < b >>> 0) n = 32;else {
                if (k[q >> 2] | 0) k[r >> 2] = (k[r >> 2] | 0) + -1;nd(a, 0);e = Ec() | 0;k[e >> 2] = 22;e = 0;d = 0;break a;
              }
            }
          } while (0);c: do {
            if ((n | 0) == 32) if ((b | 0) == 10) {
              b = f + -48 | 0;if (b >>> 0 < 10) {
                f = 0;g = b;do {
                  f = (f * 10 | 0) + g | 0;b = k[r >> 2] | 0;if (b >>> 0 < (k[q >> 2] | 0) >>> 0) {
                    k[r >> 2] = b + 1;b = l[b >> 0] | 0;
                  } else b = pd(a) | 0;g = b + -48 | 0;
                } while (g >>> 0 < 10 & f >>> 0 < 429496729);c = 0;
              } else {
                b = f;f = 0;c = 0;
              }h = b + -48 | 0;if (h >>> 0 < 10) {
                g = b;do {
                  b = Ee(f | 0, c | 0, 10, 0) | 0;j = N;m = ((h | 0) < 0) << 31 >> 31;o = ~m;if (j >>> 0 > o >>> 0 | (j | 0) == (o | 0) & b >>> 0 > ~h >>> 0) {
                    b = 10;n = 72;break c;
                  }f = we(b | 0, j | 0, h | 0, m | 0) | 0;c = N;b = k[r >> 2] | 0;if (b >>> 0 < (k[q >> 2] | 0) >>> 0) {
                    k[r >> 2] = b + 1;g = l[b >> 0] | 0;
                  } else g = pd(a) | 0;h = g + -48 | 0;
                } while (h >>> 0 < 10 & (c >>> 0 < 429496729 | (c | 0) == 429496729 & f >>> 0 < 2576980378));if (h >>> 0 > 9) {
                  g = p;b = c;
                } else {
                  b = 10;n = 72;
                }
              } else {
                g = p;b = c;
              }
            } else n = 46;
          } while (0);d: do {
            if ((n | 0) == 46) {
              if (!(b + -1 & b)) {
                n = i[5087 + ((b * 23 | 0) >>> 5 & 7) >> 0] | 0;c = i[4831 + f >> 0] | 0;g = c & 255;if (g >>> 0 < b >>> 0) {
                  f = 0;h = g;do {
                    f = h | f << n;g = k[r >> 2] | 0;if (g >>> 0 < (k[q >> 2] | 0) >>> 0) {
                      k[r >> 2] = g + 1;g = l[g >> 0] | 0;
                    } else g = pd(a) | 0;c = i[4831 + g >> 0] | 0;h = c & 255;
                  } while (f >>> 0 < 134217728 & h >>> 0 < b >>> 0);h = 0;
                } else {
                  g = f;h = 0;f = 0;
                }j = ye(-1, -1, n | 0) | 0;m = N;if ((c & 255) >>> 0 >= b >>> 0 | (h >>> 0 > m >>> 0 | (h | 0) == (m | 0) & f >>> 0 > j >>> 0)) {
                  c = h;n = 72;break;
                } else g = h;while (1) {
                  f = ze(f | 0, g | 0, n | 0) | 0;h = N;f = c & 255 | f;g = k[r >> 2] | 0;if (g >>> 0 < (k[q >> 2] | 0) >>> 0) {
                    k[r >> 2] = g + 1;g = l[g >> 0] | 0;
                  } else g = pd(a) | 0;c = i[4831 + g >> 0] | 0;if ((c & 255) >>> 0 >= b >>> 0 | (h >>> 0 > m >>> 0 | (h | 0) == (m | 0) & f >>> 0 > j >>> 0)) {
                    c = h;n = 72;break d;
                  } else g = h;
                }
              }c = i[4831 + f >> 0] | 0;g = c & 255;if (g >>> 0 < b >>> 0) {
                f = 0;h = g;do {
                  f = h + (aa(f, b) | 0) | 0;g = k[r >> 2] | 0;if (g >>> 0 < (k[q >> 2] | 0) >>> 0) {
                    k[r >> 2] = g + 1;g = l[g >> 0] | 0;
                  } else g = pd(a) | 0;c = i[4831 + g >> 0] | 0;h = c & 255;
                } while (f >>> 0 < 119304647 & h >>> 0 < b >>> 0);h = 0;
              } else {
                g = f;f = 0;h = 0;
              }if ((c & 255) >>> 0 < b >>> 0) {
                n = Ce(-1, -1, b | 0, 0) | 0;o = N;m = h;while (1) {
                  if (m >>> 0 > o >>> 0 | (m | 0) == (o | 0) & f >>> 0 > n >>> 0) {
                    c = m;n = 72;break d;
                  }h = Ee(f | 0, m | 0, b | 0, 0) | 0;j = N;c = c & 255;if (j >>> 0 > 4294967295 | (j | 0) == -1 & h >>> 0 > ~c >>> 0) {
                    c = m;n = 72;break d;
                  }f = we(c | 0, 0, h | 0, j | 0) | 0;h = N;g = k[r >> 2] | 0;if (g >>> 0 < (k[q >> 2] | 0) >>> 0) {
                    k[r >> 2] = g + 1;g = l[g >> 0] | 0;
                  } else g = pd(a) | 0;c = i[4831 + g >> 0] | 0;if ((c & 255) >>> 0 >= b >>> 0) {
                    c = h;n = 72;break;
                  } else m = h;
                }
              } else {
                c = h;n = 72;
              }
            }
          } while (0);if ((n | 0) == 72) if ((l[4831 + g >> 0] | 0) >>> 0 < b >>> 0) {
            do {
              f = k[r >> 2] | 0;if (f >>> 0 < (k[q >> 2] | 0) >>> 0) {
                k[r >> 2] = f + 1;f = l[f >> 0] | 0;
              } else f = pd(a) | 0;
            } while ((l[4831 + f >> 0] | 0) >>> 0 < b >>> 0);g = Ec() | 0;k[g >> 2] = 34;g = (d & 1 | 0) == 0 & 0 == 0 ? p : 0;b = e;f = d;
          } else {
            g = p;b = c;
          }if (k[q >> 2] | 0) k[r >> 2] = (k[r >> 2] | 0) + -1;if (!(b >>> 0 < e >>> 0 | (b | 0) == (e | 0) & f >>> 0 < d >>> 0)) {
            if (!((d & 1 | 0) != 0 | 0 != 0 | (g | 0) != 0)) {
              r = Ec() | 0;k[r >> 2] = 34;d = we(d | 0, e | 0, -1, -1) | 0;e = N;break;
            }if (b >>> 0 > e >>> 0 | (b | 0) == (e | 0) & f >>> 0 > d >>> 0) {
              r = Ec() | 0;k[r >> 2] = 34;break;
            }
          }d = ((g | 0) < 0) << 31 >> 31;d = ve(f ^ g | 0, b ^ d | 0, g | 0, d | 0) | 0;e = N;
        }
      } while (0);N = e;return d | 0;
    }function pd(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;c = a + 104 | 0;g = k[c >> 2] | 0;if ((g | 0) != 0 ? (k[a + 108 >> 2] | 0) >= (g | 0) : 0) h = 4;else {
        b = rd(a) | 0;if ((b | 0) >= 0) {
          d = k[c >> 2] | 0;c = a + 8 | 0;if (d) {
            f = k[c >> 2] | 0;c = k[a + 4 >> 2] | 0;e = a + 108 | 0;d = d - (k[e >> 2] | 0) | 0;g = f;if ((f - c | 0) < (d | 0)) {
              f = g;d = g;
            } else {
              f = c + (d + -1) | 0;d = g;
            }
          } else {
            d = k[c >> 2] | 0;e = a + 108 | 0;f = d;c = k[a + 4 >> 2] | 0;
          }k[a + 100 >> 2] = f;if (d | 0) k[e >> 2] = d + 1 - c + (k[e >> 2] | 0);c = c + -1 | 0;if ((l[c >> 0] | 0 | 0) != (b | 0)) i[c >> 0] = b;
        } else h = 4;
      }if ((h | 0) == 4) {
        k[a + 100 >> 2] = 0;b = -1;
      }return b | 0;
    }function qd(a) {
      a = a | 0;return ((a | 0) == 32 | (a + -9 | 0) >>> 0 < 5) & 1 | 0;
    }function rd(a) {
      a = a | 0;var b = 0,
          c = 0;c = u;u = u + 16 | 0;b = c;if ((sd(a) | 0) == 0 ? (Pa[k[a + 32 >> 2] & 7](a, b, 1) | 0) == 1 : 0) a = l[b >> 0] | 0;else a = -1;u = c;return a | 0;
    }function sd(a) {
      a = a | 0;var b = 0,
          c = 0;b = a + 74 | 0;c = i[b >> 0] | 0;i[b >> 0] = c + 255 | c;b = a + 20 | 0;c = a + 28 | 0;if ((k[b >> 2] | 0) >>> 0 > (k[c >> 2] | 0) >>> 0) Pa[k[a + 36 >> 2] & 7](a, 0, 0) | 0;k[a + 16 >> 2] = 0;k[c >> 2] = 0;k[b >> 2] = 0;b = k[a >> 2] | 0;if (!(b & 4)) {
        c = (k[a + 44 >> 2] | 0) + (k[a + 48 >> 2] | 0) | 0;k[a + 8 >> 2] = c;k[a + 4 >> 2] = c;b = b << 27 >> 31;
      } else {
        k[a >> 2] = b | 32;b = -1;
      }return b | 0;
    }function td(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;c = md(a, b, c, -2147483648, 0) | 0;return c | 0;
    }function ud() {
      sa(5820);return 5828;
    }function vd() {
      Fa(5820);return;
    }function wd(a) {
      a = a | 0;var b = 0,
          c = 0;do {
        if (a) {
          if ((k[a + 76 >> 2] | 0) <= -1) {
            b = xd(a) | 0;break;
          }c = (Pc(a) | 0) == 0;b = xd(a) | 0;if (!c) Qc(a);
        } else {
          if (!(k[188] | 0)) b = 0;else b = wd(k[188] | 0) | 0;a = ud() | 0;a = k[a >> 2] | 0;if (a) do {
            if ((k[a + 76 >> 2] | 0) > -1) c = Pc(a) | 0;else c = 0;if ((k[a + 20 >> 2] | 0) >>> 0 > (k[a + 28 >> 2] | 0) >>> 0) b = xd(a) | 0 | b;if (c | 0) Qc(a);a = k[a + 56 >> 2] | 0;
          } while ((a | 0) != 0);vd();
        }
      } while (0);return b | 0;
    }function xd(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0;b = a + 20 | 0;g = a + 28 | 0;if ((k[b >> 2] | 0) >>> 0 > (k[g >> 2] | 0) >>> 0 ? (Pa[k[a + 36 >> 2] & 7](a, 0, 0) | 0, (k[b >> 2] | 0) == 0) : 0) a = -1;else {
        c = a + 4 | 0;d = k[c >> 2] | 0;e = a + 8 | 0;f = k[e >> 2] | 0;if (d >>> 0 < f >>> 0) Pa[k[a + 40 >> 2] & 7](a, d - f | 0, 1) | 0;k[a + 16 >> 2] = 0;k[g >> 2] = 0;k[b >> 2] = 0;k[e >> 2] = 0;k[c >> 2] = 0;a = 0;
      }return a | 0;
    }function yd(a, b) {
      a = a | 0;b = b | 0;var c = 0;c = Mc(a) | 0;return ((zd(a, 1, c, b) | 0) != (c | 0)) << 31 >> 31 | 0;
    }function zd(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0;e = aa(c, b) | 0;c = (b | 0) == 0 ? 0 : c;if ((k[d + 76 >> 2] | 0) > -1) {
        f = (Pc(d) | 0) == 0;a = kd(a, e, d) | 0;if (!f) Qc(d);
      } else a = kd(a, e, d) | 0;if ((a | 0) != (e | 0)) c = (a >>> 0) / (b >>> 0) | 0;return c | 0;
    }function Ad(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0;j = u;u = u + 16 | 0;g = j;h = b & 255;i[g >> 0] = h;d = a + 16 | 0;e = k[d >> 2] | 0;if (!e) {
        if (!(ld(a) | 0)) {
          e = k[d >> 2] | 0;f = 4;
        } else c = -1;
      } else f = 4;do {
        if ((f | 0) == 4) {
          f = a + 20 | 0;d = k[f >> 2] | 0;if (d >>> 0 < e >>> 0 ? (c = b & 255, (c | 0) != (i[a + 75 >> 0] | 0)) : 0) {
            k[f >> 2] = d + 1;i[d >> 0] = h;break;
          }if ((Pa[k[a + 36 >> 2] & 7](a, g, 1) | 0) == 1) c = l[g >> 0] | 0;else c = -1;
        }
      } while (0);u = j;return c | 0;
    }function Bd(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0.0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0;switch (b | 0) {case 0:
          {
            j = -149;m = 24;g = 4;break;
          }case 1:
          {
            j = -1074;m = 53;g = 4;break;
          }case 2:
          {
            j = -1074;m = 53;g = 4;break;
          }default:
          d = 0.0;}a: do {
        if ((g | 0) == 4) {
          o = a + 4 | 0;n = a + 100 | 0;do {
            b = k[o >> 2] | 0;if (b >>> 0 < (k[n >> 2] | 0) >>> 0) {
              k[o >> 2] = b + 1;b = l[b >> 0] | 0;
            } else b = pd(a) | 0;
          } while ((qd(b) | 0) != 0);b: do {
            switch (b | 0) {case 43:case 45:
                {
                  f = 1 - (((b | 0) == 45 & 1) << 1) | 0;b = k[o >> 2] | 0;if (b >>> 0 < (k[n >> 2] | 0) >>> 0) {
                    k[o >> 2] = b + 1;e = l[b >> 0] | 0;break b;
                  } else {
                    e = pd(a) | 0;break b;
                  }
                }default:
                {
                  e = b;f = 1;
                }}
          } while (0);b = 0;do {
            if ((e | 32 | 0) != (i[5096 + b >> 0] | 0)) break;do {
              if (b >>> 0 < 7) {
                e = k[o >> 2] | 0;if (e >>> 0 < (k[n >> 2] | 0) >>> 0) {
                  k[o >> 2] = e + 1;e = l[e >> 0] | 0;break;
                } else {
                  e = pd(a) | 0;break;
                }
              }
            } while (0);b = b + 1 | 0;
          } while (b >>> 0 < 8);c: do {
            switch (b | 0) {case 8:
                break;case 3:
                {
                  g = 23;break;
                }default:
                {
                  h = (c | 0) != 0;if (h & b >>> 0 > 3) if ((b | 0) == 8) break c;else {
                    g = 23;break c;
                  }d: do {
                    if (!b) {
                      b = 0;do {
                        if ((e | 32 | 0) != (i[5105 + b >> 0] | 0)) break d;do {
                          if (b >>> 0 < 2) {
                            e = k[o >> 2] | 0;if (e >>> 0 < (k[n >> 2] | 0) >>> 0) {
                              k[o >> 2] = e + 1;e = l[e >> 0] | 0;break;
                            } else {
                              e = pd(a) | 0;break;
                            }
                          }
                        } while (0);b = b + 1 | 0;
                      } while (b >>> 0 < 3);
                    }
                  } while (0);switch (b | 0) {case 3:
                      {
                        b = k[o >> 2] | 0;if (b >>> 0 < (k[n >> 2] | 0) >>> 0) {
                          k[o >> 2] = b + 1;b = l[b >> 0] | 0;
                        } else b = pd(a) | 0;if ((b | 0) == 40) b = 1;else {
                          if (!(k[n >> 2] | 0)) {
                            d = C;break a;
                          }k[o >> 2] = (k[o >> 2] | 0) + -1;d = C;break a;
                        }while (1) {
                          e = k[o >> 2] | 0;if (e >>> 0 < (k[n >> 2] | 0) >>> 0) {
                            k[o >> 2] = e + 1;e = l[e >> 0] | 0;
                          } else e = pd(a) | 0;if (!((e + -48 | 0) >>> 0 < 10 | (e + -65 | 0) >>> 0 < 26) ? !((e | 0) == 95 | (e + -97 | 0) >>> 0 < 26) : 0) break;b = b + 1 | 0;
                        }if ((e | 0) == 41) {
                          d = C;break a;
                        }e = (k[n >> 2] | 0) == 0;if (!e) k[o >> 2] = (k[o >> 2] | 0) + -1;if (!h) {
                          o = Ec() | 0;k[o >> 2] = 22;nd(a, 0);d = 0.0;break a;
                        }if (!b) {
                          d = C;break a;
                        }while (1) {
                          b = b + -1 | 0;if (!e) k[o >> 2] = (k[o >> 2] | 0) + -1;if (!b) {
                            d = C;break a;
                          }
                        }
                      }case 0:
                      {
                        if ((e | 0) == 48) {
                          b = k[o >> 2] | 0;if (b >>> 0 < (k[n >> 2] | 0) >>> 0) {
                            k[o >> 2] = b + 1;b = l[b >> 0] | 0;
                          } else b = pd(a) | 0;if ((b | 32 | 0) == 120) {
                            d = +Cd(a, m, j, f, c);break a;
                          }if (!(k[n >> 2] | 0)) b = 48;else {
                            k[o >> 2] = (k[o >> 2] | 0) + -1;b = 48;
                          }
                        } else b = e;d = +Dd(a, b, m, j, f, c);break a;
                      }default:
                      {
                        if (k[n >> 2] | 0) k[o >> 2] = (k[o >> 2] | 0) + -1;o = Ec() | 0;k[o >> 2] = 22;nd(a, 0);d = 0.0;break a;
                      }}
                }}
          } while (0);if ((g | 0) == 23) {
            e = (k[n >> 2] | 0) == 0;if (!e) k[o >> 2] = (k[o >> 2] | 0) + -1;if ((c | 0) != 0 & b >>> 0 > 3) do {
              if (!e) k[o >> 2] = (k[o >> 2] | 0) + -1;b = b + -1 | 0;
            } while (b >>> 0 > 3);
          }d = +(f | 0) * D;
        }
      } while (0);return +d;
    }function Cd(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0.0,
          g = 0,
          h = 0,
          i = 0.0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0.0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = 0,
          w = 0;w = a + 4 | 0;g = k[w >> 2] | 0;v = a + 100 | 0;if (g >>> 0 < (k[v >> 2] | 0) >>> 0) {
        k[w >> 2] = g + 1;g = l[g >> 0] | 0;h = 0;
      } else {
        g = pd(a) | 0;h = 0;
      }a: while (1) {
        switch (g | 0) {case 46:
            {
              n = 8;break a;
            }case 48:
            break;default:
            {
              s = 0;t = 0;p = 1.0;f = 0.0;u = 0;r = h;h = 0;q = 0;m = 0;j = 0;break a;
            }}g = k[w >> 2] | 0;if (g >>> 0 < (k[v >> 2] | 0) >>> 0) {
          k[w >> 2] = g + 1;g = l[g >> 0] | 0;h = 1;continue;
        } else {
          g = pd(a) | 0;h = 1;continue;
        }
      }if ((n | 0) == 8) {
        g = k[w >> 2] | 0;if (g >>> 0 < (k[v >> 2] | 0) >>> 0) {
          k[w >> 2] = g + 1;g = l[g >> 0] | 0;
        } else g = pd(a) | 0;if ((g | 0) == 48) {
          j = 0;h = 0;do {
            g = k[w >> 2] | 0;if (g >>> 0 < (k[v >> 2] | 0) >>> 0) {
              k[w >> 2] = g + 1;g = l[g >> 0] | 0;
            } else g = pd(a) | 0;j = we(j | 0, h | 0, -1, -1) | 0;h = N;
          } while ((g | 0) == 48);s = 1;t = 0;p = 1.0;f = 0.0;u = 0;r = 1;q = 0;m = 0;
        } else {
          s = 1;t = 0;p = 1.0;f = 0.0;u = 0;r = h;h = 0;q = 0;m = 0;j = 0;
        }
      }while (1) {
        n = g + -48 | 0;o = (g | 0) == 46;if (n >>> 0 >= 10 ? !(o | ((g | 32) + -97 | 0) >>> 0 < 6) : 0) break;if (o) {
          if (!s) {
            s = 1;n = t;i = p;g = u;j = m;h = q;
          } else {
            g = 46;break;
          }
        } else {
          g = (g | 0) > 57 ? (g | 32) + -87 | 0 : n;do {
            if (!((q | 0) < 0 | (q | 0) == 0 & m >>> 0 < 8)) {
              if ((q | 0) < 0 | (q | 0) == 0 & m >>> 0 < 14) {
                p = p * .0625;n = t;i = p;f = f + p * +(g | 0);g = u;break;
              } else {
                g = (t | 0) != 0 | (g | 0) == 0;n = g ? t : 1;i = p;f = g ? f : f + p * .5;g = u;break;
              }
            } else {
              n = t;i = p;g = g + (u << 4) | 0;
            }
          } while (0);m = we(m | 0, q | 0, 1, 0) | 0;r = 1;q = N;
        }o = k[w >> 2] | 0;if (o >>> 0 < (k[v >> 2] | 0) >>> 0) {
          k[w >> 2] = o + 1;t = n;p = i;u = g;g = l[o >> 0] | 0;continue;
        } else {
          t = n;p = i;u = g;g = pd(a) | 0;continue;
        }
      }do {
        if (!r) {
          g = k[v >> 2] | 0;h = (g | 0) != 0;if (h) k[w >> 2] = (k[w >> 2] | 0) + -1;if (e) {
            if (h) k[w >> 2] = (k[w >> 2] | 0) + -1;if (!((s | 0) == 0 | (g | 0) == 0)) k[w >> 2] = (k[w >> 2] | 0) + -1;
          } else nd(a, 0);f = +(d | 0) * 0.0;
        } else {
          n = (s | 0) == 0;o = n ? m : j;n = n ? q : h;if ((q | 0) < 0 | (q | 0) == 0 & m >>> 0 < 8) {
            h = u;j = q;do {
              h = h << 4;m = we(m | 0, j | 0, 1, 0) | 0;j = N;
            } while ((j | 0) < 0 | (j | 0) == 0 & m >>> 0 < 8);m = h;
          } else m = u;if ((g | 32 | 0) == 112) {
            h = Ed(a, e) | 0;g = N;if ((h | 0) == 0 & (g | 0) == -2147483648) {
              if (!e) {
                nd(a, 0);f = 0.0;break;
              }if (!(k[v >> 2] | 0)) {
                h = 0;g = 0;
              } else {
                k[w >> 2] = (k[w >> 2] | 0) + -1;h = 0;g = 0;
              }
            }
          } else if (!(k[v >> 2] | 0)) {
            h = 0;g = 0;
          } else {
            k[w >> 2] = (k[w >> 2] | 0) + -1;h = 0;g = 0;
          }j = ze(o | 0, n | 0, 2) | 0;j = we(j | 0, N | 0, -32, -1) | 0;j = we(j | 0, N | 0, h | 0, g | 0) | 0;g = N;if (!m) {
            f = +(d | 0) * 0.0;break;
          }w = 0 - c | 0;e = ((w | 0) < 0) << 31 >> 31;if ((g | 0) > (e | 0) | (g | 0) == (e | 0) & j >>> 0 > w >>> 0) {
            b = Ec() | 0;k[b >> 2] = 34;f = +(d | 0) * 1797693134862315708145274.0e284 * 1797693134862315708145274.0e284;break;
          }w = c + -106 | 0;e = ((w | 0) < 0) << 31 >> 31;if ((g | 0) < (e | 0) | (g | 0) == (e | 0) & j >>> 0 < w >>> 0) {
            b = Ec() | 0;k[b >> 2] = 34;f = +(d | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;break;
          }if ((m | 0) > -1) {
            h = m;do {
              w = !(f >= .5);h = h << 1 | (w ^ 1) & 1;f = f + (w ? f : f + -1.0);j = we(j | 0, g | 0, -1, -1) | 0;g = N;
            } while ((h | 0) > -1);p = f;m = h;
          } else p = f;w = ((b | 0) < 0) << 31 >> 31;c = ve(32, 0, c | 0, ((c | 0) < 0) << 31 >> 31 | 0) | 0;g = we(c | 0, N | 0, j | 0, g | 0) | 0;c = N;if ((w | 0) > (c | 0) | (w | 0) == (c | 0) & b >>> 0 > g >>> 0) {
            if ((g | 0) > 0) n = 59;else {
              h = 0;g = 84;n = 61;
            }
          } else {
            g = b;n = 59;
          }if ((n | 0) == 59) if ((g | 0) < 53) {
            h = g;g = 84 - g | 0;n = 61;
          } else {
            i = 0.0;f = +(d | 0);
          }if ((n | 0) == 61) {
            f = +(d | 0);i = +Gd(+Fd(1.0, g), f);g = h;
          }d = (m & 1 | 0) == 0 & (p != 0.0 & (g | 0) < 32);f = f * (d ? 0.0 : p) + (i + f * +(((d & 1) + m | 0) >>> 0)) - i;if (!(f != 0.0)) {
            d = Ec() | 0;k[d >> 2] = 34;
          }f = +Id(f, j);
        }
      } while (0);return +f;
    }function Dd(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0.0,
          h = 0.0,
          i = 0,
          j = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0.0,
          r = 0.0,
          s = 0.0,
          t = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0,
          H = 0,
          I = 0.0;H = u;u = u + 512 | 0;E = H;F = d + c | 0;G = 0 - F | 0;B = a + 4 | 0;C = a + 100 | 0;i = 0;a: while (1) {
        switch (b | 0) {case 46:
            {
              z = 6;break a;
            }case 48:
            break;default:
            {
              v = 0;o = i;p = 0;n = 0;break a;
            }}b = k[B >> 2] | 0;if (b >>> 0 < (k[C >> 2] | 0) >>> 0) {
          k[B >> 2] = b + 1;b = l[b >> 0] | 0;i = 1;continue;
        } else {
          b = pd(a) | 0;i = 1;continue;
        }
      }if ((z | 0) == 6) {
        b = k[B >> 2] | 0;if (b >>> 0 < (k[C >> 2] | 0) >>> 0) {
          k[B >> 2] = b + 1;b = l[b >> 0] | 0;
        } else b = pd(a) | 0;if ((b | 0) == 48) {
          i = 0;b = 0;while (1) {
            i = we(i | 0, b | 0, -1, -1) | 0;n = N;b = k[B >> 2] | 0;if (b >>> 0 < (k[C >> 2] | 0) >>> 0) {
              k[B >> 2] = b + 1;b = l[b >> 0] | 0;
            } else b = pd(a) | 0;if ((b | 0) == 48) b = n;else {
              v = 1;o = 1;p = i;break;
            }
          }
        } else {
          v = 1;o = i;p = 0;n = 0;
        }
      }k[E >> 2] = 0;m = b + -48 | 0;j = (b | 0) == 46;b: do {
        if (j | m >>> 0 < 10) {
          A = E + 496 | 0;w = 0;i = 0;t = 0;x = v;y = o;z = m;o = 0;m = 0;c: while (1) {
            do {
              if (j) {
                if (!x) {
                  x = 1;p = o;n = m;
                } else break c;
              } else {
                o = we(o | 0, m | 0, 1, 0) | 0;m = N;v = (b | 0) != 48;if ((i | 0) >= 125) {
                  if (!v) break;k[A >> 2] = k[A >> 2] | 1;break;
                }j = E + (i << 2) | 0;if (!w) b = z;else b = b + -48 + ((k[j >> 2] | 0) * 10 | 0) | 0;k[j >> 2] = b;w = w + 1 | 0;y = (w | 0) == 9;w = y ? 0 : w;i = (y & 1) + i | 0;t = v ? o : t;y = 1;
              }
            } while (0);b = k[B >> 2] | 0;if (b >>> 0 < (k[C >> 2] | 0) >>> 0) {
              k[B >> 2] = b + 1;b = l[b >> 0] | 0;
            } else b = pd(a) | 0;z = b + -48 | 0;j = (b | 0) == 46;if (!(j | z >>> 0 < 10)) {
              v = x;j = y;z = 29;break b;
            }
          }b = w;j = (y | 0) != 0;z = 37;
        } else {
          w = 0;i = 0;t = 0;j = o;o = 0;m = 0;z = 29;
        }
      } while (0);do {
        if ((z | 0) == 29) {
          A = (v | 0) == 0;p = A ? o : p;n = A ? m : n;j = (j | 0) != 0;if (!(j & (b | 32 | 0) == 101)) if ((b | 0) > -1) {
            b = w;z = 37;break;
          } else {
            b = w;z = 39;break;
          }j = Ed(a, f) | 0;b = N;if ((j | 0) == 0 & (b | 0) == -2147483648) {
            if (!f) {
              nd(a, 0);g = 0.0;break;
            }if (!(k[C >> 2] | 0)) {
              j = 0;b = 0;
            } else {
              k[B >> 2] = (k[B >> 2] | 0) + -1;j = 0;b = 0;
            }
          }y = we(j | 0, b | 0, p | 0, n | 0) | 0;b = w;n = N;z = 41;
        }
      } while (0);if ((z | 0) == 37) if (k[C >> 2] | 0) {
        k[B >> 2] = (k[B >> 2] | 0) + -1;if (j) {
          y = p;z = 41;
        } else z = 40;
      } else z = 39;if ((z | 0) == 39) if (j) {
        y = p;z = 41;
      } else z = 40;do {
        if ((z | 0) == 40) {
          G = Ec() | 0;k[G >> 2] = 22;nd(a, 0);g = 0.0;
        } else if ((z | 0) == 41) {
          j = k[E >> 2] | 0;if (!j) {
            g = +(e | 0) * 0.0;break;
          }if (((m | 0) < 0 | (m | 0) == 0 & o >>> 0 < 10) & ((y | 0) == (o | 0) & (n | 0) == (m | 0)) ? (c | 0) > 30 | (j >>> c | 0) == 0 : 0) {
            g = +(e | 0) * +(j >>> 0);break;
          }a = (d | 0) / -2 | 0;C = ((a | 0) < 0) << 31 >> 31;if ((n | 0) > (C | 0) | (n | 0) == (C | 0) & y >>> 0 > a >>> 0) {
            G = Ec() | 0;k[G >> 2] = 34;g = +(e | 0) * 1797693134862315708145274.0e284 * 1797693134862315708145274.0e284;break;
          }a = d + -106 | 0;C = ((a | 0) < 0) << 31 >> 31;if ((n | 0) < (C | 0) | (n | 0) == (C | 0) & y >>> 0 < a >>> 0) {
            G = Ec() | 0;k[G >> 2] = 34;g = +(e | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;break;
          }if (b) {
            if ((b | 0) < 9) {
              m = E + (i << 2) | 0;j = k[m >> 2] | 0;do {
                j = j * 10 | 0;b = b + 1 | 0;
              } while ((b | 0) != 9);k[m >> 2] = j;
            }i = i + 1 | 0;
          }if ((t | 0) < 9 ? (t | 0) <= (y | 0) & (y | 0) < 18 : 0) {
            b = k[E >> 2] | 0;if ((y | 0) == 9) {
              g = +(e | 0) * +(b >>> 0);break;
            }if ((y | 0) < 9) {
              g = +(e | 0) * +(b >>> 0) / +(k[756 + (8 - y << 2) >> 2] | 0);break;
            }a = c + 27 + (aa(y, -3) | 0) | 0;if ((a | 0) > 30 | (b >>> a | 0) == 0) {
              g = +(e | 0) * +(b >>> 0) * +(k[756 + (y + -10 << 2) >> 2] | 0);break;
            }
          }b = (y | 0) % 9 | 0;if (!b) {
            b = 0;m = 0;
          } else {
            t = (y | 0) > -1 ? b : b + 9 | 0;o = k[756 + (8 - t << 2) >> 2] | 0;if (i) {
              p = 1e9 / (o | 0) | 0;m = 0;n = 0;j = y;b = 0;do {
                B = E + (b << 2) | 0;C = k[B >> 2] | 0;a = ((C >>> 0) / (o >>> 0) | 0) + m | 0;k[B >> 2] = a;m = aa(p, (C >>> 0) % (o >>> 0) | 0) | 0;a = (b | 0) == (n | 0) & (a | 0) == 0;j = a ? j + -9 | 0 : j;n = a ? n + 1 & 127 : n;b = b + 1 | 0;
              } while ((b | 0) != (i | 0));if (!m) m = n;else {
                k[E + (i << 2) >> 2] = m;m = n;i = i + 1 | 0;
              }
            } else {
              m = 0;i = 0;j = y;
            }b = 0;y = 9 - t + j | 0;
          }d: while (1) {
            t = (y | 0) < 18;v = (y | 0) == 18;w = E + (m << 2) | 0;while (1) {
              if (!t) {
                if (!v) {
                  j = y;break d;
                }if ((k[w >> 2] | 0) >>> 0 >= 9007199) {
                  j = 18;break d;
                }
              }j = 0;x = i;i = i + 127 | 0;while (1) {
                n = i & 127;o = E + (n << 2) | 0;i = ze(k[o >> 2] | 0, 0, 29) | 0;i = we(i | 0, N | 0, j | 0, 0) | 0;j = N;if (j >>> 0 > 0 | (j | 0) == 0 & i >>> 0 > 1e9) {
                  p = Ce(i | 0, j | 0, 1e9, 0) | 0;i = Ge(i | 0, j | 0, 1e9, 0) | 0;
                } else p = 0;k[o >> 2] = i;a = (n | 0) == (m | 0);x = (i | 0) == 0 & (((n | 0) != (x + 127 & 127 | 0) | a) ^ 1) ? n : x;if (a) break;else {
                  j = p;i = n + -1 | 0;
                }
              }b = b + -29 | 0;if (p | 0) break;else i = x;
            }m = m + 127 & 127;i = x + 127 & 127;j = E + ((x + 126 & 127) << 2) | 0;if ((m | 0) == (x | 0)) k[j >> 2] = k[j >> 2] | k[E + (i << 2) >> 2];else i = x;k[E + (m << 2) >> 2] = p;y = y + 9 | 0;
          }e: while (1) {
            w = i + 1 & 127;x = E + ((i + 127 & 127) << 2) | 0;while (1) {
              p = (j | 0) == 18;v = (j | 0) > 27 ? 9 : 1;y = m;while (1) {
                m = 0;while (1) {
                  n = m + y & 127;if ((n | 0) == (i | 0)) {
                    D = 2;z = 88;break;
                  }n = k[E + (n << 2) >> 2] | 0;o = k[788 + (m << 2) >> 2] | 0;if (n >>> 0 < o >>> 0) {
                    D = 2;z = 88;break;
                  }if (n >>> 0 > o >>> 0) break;m = m + 1 | 0;if ((m | 0) >= 2) {
                    D = m;z = 88;break;
                  }
                }if ((z | 0) == 88 ? (z = 0, p & (D | 0) == 2) : 0) {
                  g = 0.0;n = 0;break e;
                }b = v + b | 0;if ((y | 0) == (i | 0)) y = i;else break;
              }p = (1 << v) + -1 | 0;t = 1e9 >>> v;o = 0;m = y;n = y;do {
                B = E + (n << 2) | 0;C = k[B >> 2] | 0;a = (C >>> v) + o | 0;k[B >> 2] = a;o = aa(C & p, t) | 0;a = (n | 0) == (m | 0) & (a | 0) == 0;j = a ? j + -9 | 0 : j;m = a ? m + 1 & 127 : m;n = n + 1 & 127;
              } while ((n | 0) != (i | 0));if (!o) continue;if ((w | 0) != (m | 0)) break;k[x >> 2] = k[x >> 2] | 1;
            }k[E + (i << 2) >> 2] = o;i = w;
          }do {
            m = n + y & 127;j = i + 1 & 127;if ((m | 0) == (i | 0)) {
              k[E + (j + -1 << 2) >> 2] = 0;i = j;
            }g = g * 1.0e9 + +((k[E + (m << 2) >> 2] | 0) >>> 0);n = n + 1 | 0;
          } while ((n | 0) != 2);s = +(e | 0);h = s * g;n = b + 53 | 0;o = n - d | 0;p = (o | 0) < (c | 0);m = p ? (o | 0) > 0 ? o : 0 : c;if ((m | 0) < 53) {
            I = +Gd(+Fd(1.0, 105 - m | 0), h);q = +Hd(h, +Fd(1.0, 53 - m | 0));r = I;g = q;q = I + (h - q);
          } else {
            r = 0.0;g = 0.0;q = h;
          }j = y + 2 & 127;if ((j | 0) != (i | 0)) {
            j = k[E + (j << 2) >> 2] | 0;do {
              if (j >>> 0 >= 5e8) {
                if ((j | 0) != 5e8) {
                  g = s * .75 + g;break;
                }if ((y + 3 & 127 | 0) == (i | 0)) {
                  g = s * .5 + g;break;
                } else {
                  g = s * .75 + g;break;
                }
              } else {
                if ((j | 0) == 0 ? (y + 3 & 127 | 0) == (i | 0) : 0) break;g = s * .25 + g;
              }
            } while (0);if ((53 - m | 0) > 1 ? !(+Hd(g, 1.0) != 0.0) : 0) h = g + 1.0;else h = g;
          } else h = g;g = q + h - r;do {
            if ((n & 2147483647 | 0) > (-2 - F | 0)) {
              F = !(+P(+g) >= 9007199254740992.0);b = ((F ^ 1) & 1) + b | 0;g = F ? g : g * .5;if ((b + 50 | 0) <= (G | 0) ? !(h != 0.0 & (p & ((m | 0) != (o | 0) | F))) : 0) break;G = Ec() | 0;k[G >> 2] = 34;
            }
          } while (0);g = +Id(g, b);
        }
      } while (0);u = H;return +g;
    }function Ed(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;i = a + 4 | 0;c = k[i >> 2] | 0;h = a + 100 | 0;if (c >>> 0 < (k[h >> 2] | 0) >>> 0) {
        k[i >> 2] = c + 1;c = l[c >> 0] | 0;
      } else c = pd(a) | 0;switch (c | 0) {case 43:case 45:
          {
            d = (c | 0) == 45 & 1;c = k[i >> 2] | 0;if (c >>> 0 < (k[h >> 2] | 0) >>> 0) {
              k[i >> 2] = c + 1;c = l[c >> 0] | 0;
            } else c = pd(a) | 0;if ((b | 0) != 0 & (c + -48 | 0) >>> 0 > 9 ? (k[h >> 2] | 0) != 0 : 0) k[i >> 2] = (k[i >> 2] | 0) + -1;break;
          }default:
          d = 0;}if ((c + -48 | 0) >>> 0 > 9) {
        if (!(k[h >> 2] | 0)) {
          d = -2147483648;c = 0;
        } else {
          k[i >> 2] = (k[i >> 2] | 0) + -1;d = -2147483648;c = 0;
        }
      } else {
        e = 0;do {
          e = c + -48 + (e * 10 | 0) | 0;c = k[i >> 2] | 0;if (c >>> 0 < (k[h >> 2] | 0) >>> 0) {
            k[i >> 2] = c + 1;c = l[c >> 0] | 0;
          } else c = pd(a) | 0;
        } while ((c + -48 | 0) >>> 0 < 10 & (e | 0) < 214748364);b = ((e | 0) < 0) << 31 >> 31;if ((c + -48 | 0) >>> 0 < 10) {
          do {
            b = Ee(e | 0, b | 0, 10, 0) | 0;e = N;c = we(c | 0, ((c | 0) < 0) << 31 >> 31 | 0, -48, -1) | 0;e = we(c | 0, N | 0, b | 0, e | 0) | 0;b = N;c = k[i >> 2] | 0;if (c >>> 0 < (k[h >> 2] | 0) >>> 0) {
              k[i >> 2] = c + 1;c = l[c >> 0] | 0;
            } else c = pd(a) | 0;
          } while ((c + -48 | 0) >>> 0 < 10 & ((b | 0) < 21474836 | (b | 0) == 21474836 & e >>> 0 < 2061584302));f = c;g = e;
        } else {
          f = c;g = e;
        }c = k[h >> 2] | 0;if ((f + -48 | 0) >>> 0 < 10) do {
          e = k[i >> 2] | 0;if (e >>> 0 < c >>> 0) {
            k[i >> 2] = e + 1;e = l[e >> 0] | 0;
          } else {
            e = pd(a) | 0;c = k[h >> 2] | 0;
          }
        } while ((e + -48 | 0) >>> 0 < 10);if (c | 0) k[i >> 2] = (k[i >> 2] | 0) + -1;i = (d | 0) != 0;c = ve(0, 0, g | 0, b | 0) | 0;d = i ? N : b;c = i ? c : g;
      }N = d;return c | 0;
    }function Fd(a, b) {
      a = +a;b = b | 0;var c = 0,
          d = 0;if ((b | 0) <= 1023) {
        if ((b | 0) < -1022) {
          a = a * 2.2250738585072014e-308;c = b + 1022 | 0;d = (c | 0) < -1022;b = b + 2044 | 0;a = d ? a * 2.2250738585072014e-308 : a;b = d ? (b | 0) > -1022 ? b : -1022 : c;
        }
      } else {
        a = a * 8988465674311579538646525.0e283;d = b + -1023 | 0;c = (d | 0) > 1023;b = b + -2046 | 0;a = c ? a * 8988465674311579538646525.0e283 : a;b = c ? (b | 0) < 1023 ? b : 1023 : d;
      }c = ze(b + 1023 | 0, 0, 52) | 0;d = N;k[s >> 2] = c;k[s + 4 >> 2] = d;return +(a * +p[s >> 3]);
    }function Gd(a, b) {
      a = +a;b = +b;return + +Ld(a, b);
    }function Hd(a, b) {
      a = +a;b = +b;return + +Jd(a, b);
    }function Id(a, b) {
      a = +a;b = b | 0;return + +Fd(a, b);
    }function Jd(a, b) {
      a = +a;b = +b;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0;p[s >> 3] = a;g = k[s >> 2] | 0;i = k[s + 4 >> 2] | 0;p[s >> 3] = b;l = k[s >> 2] | 0;m = k[s + 4 >> 2] | 0;d = ye(g | 0, i | 0, 52) | 0;d = d & 2047;j = ye(l | 0, m | 0, 52) | 0;j = j & 2047;n = i & -2147483648;f = ze(l | 0, m | 0, 1) | 0;h = N;a: do {
        if (!((f | 0) == 0 & (h | 0) == 0) ? (e = Kd(b) | 0, c = N & 2147483647, !((d | 0) == 2047 | (c >>> 0 > 2146435072 | (c | 0) == 2146435072 & e >>> 0 > 0))) : 0) {
          c = ze(g | 0, i | 0, 1) | 0;e = N;if (!(e >>> 0 > h >>> 0 | (e | 0) == (h | 0) & c >>> 0 > f >>> 0)) return +((c | 0) == (f | 0) & (e | 0) == (h | 0) ? a * 0.0 : a);if (!d) {
            c = ze(g | 0, i | 0, 12) | 0;e = N;if ((e | 0) > -1 | (e | 0) == -1 & c >>> 0 > 4294967295) {
              d = 0;do {
                d = d + -1 | 0;c = ze(c | 0, e | 0, 1) | 0;e = N;
              } while ((e | 0) > -1 | (e | 0) == -1 & c >>> 0 > 4294967295);
            } else d = 0;g = ze(g | 0, i | 0, 1 - d | 0) | 0;f = N;
          } else f = i & 1048575 | 1048576;if (!j) {
            e = ze(l | 0, m | 0, 12) | 0;h = N;if ((h | 0) > -1 | (h | 0) == -1 & e >>> 0 > 4294967295) {
              c = 0;do {
                c = c + -1 | 0;e = ze(e | 0, h | 0, 1) | 0;h = N;
              } while ((h | 0) > -1 | (h | 0) == -1 & e >>> 0 > 4294967295);
            } else c = 0;l = ze(l | 0, m | 0, 1 - c | 0) | 0;j = c;i = N;
          } else i = m & 1048575 | 1048576;e = ve(g | 0, f | 0, l | 0, i | 0) | 0;c = N;h = (c | 0) > -1 | (c | 0) == -1 & e >>> 0 > 4294967295;b: do {
            if ((d | 0) > (j | 0)) {
              while (1) {
                if (h) {
                  if ((e | 0) == 0 & (c | 0) == 0) break;
                } else {
                  e = g;c = f;
                }g = ze(e | 0, c | 0, 1) | 0;f = N;d = d + -1 | 0;e = ve(g | 0, f | 0, l | 0, i | 0) | 0;c = N;h = (c | 0) > -1 | (c | 0) == -1 & e >>> 0 > 4294967295;if ((d | 0) <= (j | 0)) break b;
              }b = a * 0.0;break a;
            }
          } while (0);if (h) {
            if ((e | 0) == 0 & (c | 0) == 0) {
              b = a * 0.0;break;
            }
          } else {
            c = f;e = g;
          }if (c >>> 0 < 1048576 | (c | 0) == 1048576 & e >>> 0 < 0) do {
            e = ze(e | 0, c | 0, 1) | 0;c = N;d = d + -1 | 0;
          } while (c >>> 0 < 1048576 | (c | 0) == 1048576 & e >>> 0 < 0);if ((d | 0) > 0) {
            m = we(e | 0, c | 0, 0, -1048576) | 0;c = N;d = ze(d | 0, 0, 52) | 0;c = c | N;d = m | d;
          } else {
            d = ye(e | 0, c | 0, 1 - d | 0) | 0;c = N;
          }k[s >> 2] = d;k[s + 4 >> 2] = c | n;b = +p[s >> 3];
        } else o = 3;
      } while (0);if ((o | 0) == 3) {
        b = a * b;b = b / b;
      }return +b;
    }function Kd(a) {
      a = +a;var b = 0;p[s >> 3] = a;b = k[s >> 2] | 0;N = k[s + 4 >> 2] | 0;return b | 0;
    }function Ld(a, b) {
      a = +a;b = +b;var c = 0,
          d = 0;p[s >> 3] = a;d = k[s >> 2] | 0;c = k[s + 4 >> 2] | 0;p[s >> 3] = b;c = k[s + 4 >> 2] & -2147483648 | c & 2147483647;k[s >> 2] = d;k[s + 4 >> 2] = c;return + +p[s >> 3];
    }function Md(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0;d = u;u = u + 16 | 0;e = d;k[e >> 2] = c;c = Nc(a, b, e) | 0;u = d;return c | 0;
    }function Nd(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          j = 0;h = a & 255;c = a & 255;if ((k[b + 76 >> 2] | 0) >= 0 ? (Pc(b) | 0) != 0 : 0) {
        if ((c | 0) != (i[b + 75 >> 0] | 0) ? (f = b + 20 | 0, g = k[f >> 2] | 0, g >>> 0 < (k[b + 16 >> 2] | 0) >>> 0) : 0) {
          k[f >> 2] = g + 1;i[g >> 0] = h;
        } else c = Ad(b, a) | 0;Qc(b);
      } else j = 3;do {
        if ((j | 0) == 3) {
          if ((c | 0) != (i[b + 75 >> 0] | 0) ? (d = b + 20 | 0, e = k[d >> 2] | 0, e >>> 0 < (k[b + 16 >> 2] | 0) >>> 0) : 0) {
            k[d >> 2] = e + 1;i[e >> 0] = h;break;
          }c = Ad(b, a) | 0;
        }
      } while (0);return c | 0;
    }function Od(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0;d = k[156] | 0;if ((k[d + 76 >> 2] | 0) > -1) e = Pc(d) | 0;else e = 0;do {
        if ((yd(a, d) | 0) < 0) a = 1;else {
          if ((i[d + 75 >> 0] | 0) != 10 ? (b = d + 20 | 0, c = k[b >> 2] | 0, c >>> 0 < (k[d + 16 >> 2] | 0) >>> 0) : 0) {
            k[b >> 2] = c + 1;i[c >> 0] = 10;a = 0;break;
          }a = (Ad(d, 10) | 0) < 0;
        }
      } while (0);if (e | 0) Qc(d);return a << 31 >> 31 | 0;
    }function Pd(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0;c = u;u = u + 16 | 0;d = c;k[d >> 2] = b;b = Nc(k[156] | 0, a, d) | 0;u = c;return b | 0;
    }function Qd(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0.0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;h = u;u = u + 128 | 0;g = h;e = g;f = e + 124 | 0;do {
        k[e >> 2] = 0;e = e + 4 | 0;
      } while ((e | 0) < (f | 0));e = g + 4 | 0;k[e >> 2] = a;f = g + 8 | 0;k[f >> 2] = -1;k[g + 44 >> 2] = a;k[g + 76 >> 2] = -1;nd(g, 0);d = +Bd(g, c, 1);c = (k[e >> 2] | 0) - (k[f >> 2] | 0) + (k[g + 108 >> 2] | 0) | 0;if (b | 0) k[b >> 2] = c | 0 ? a + c | 0 : a;u = h;return +d;
    }function Rd(a, b) {
      a = a | 0;b = b | 0;return + +Qd(a, b, 1);
    }
    function Sd(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0,
          H = 0,
          I = 0,
          J = 0,
          K = 0;K = u;u = u + 16 | 0;n = K;do {
        if (a >>> 0 < 245) {
          o = a >>> 0 < 11 ? 16 : a + 11 & -8;a = o >>> 3;s = k[1458] | 0;c = s >>> a;if (c & 3 | 0) {
            a = (c & 1 ^ 1) + a | 0;c = 5872 + (a << 1 << 2) | 0;d = c + 8 | 0;e = k[d >> 2] | 0;f = e + 8 | 0;g = k[f >> 2] | 0;do {
              if ((c | 0) != (g | 0)) {
                if (g >>> 0 < (k[1462] | 0) >>> 0) ya();b = g + 12 | 0;if ((k[b >> 2] | 0) == (e | 0)) {
                  k[b >> 2] = c;k[d >> 2] = g;break;
                } else ya();
              } else k[1458] = s & ~(1 << a);
            } while (0);J = a << 3;k[e + 4 >> 2] = J | 3;J = e + J + 4 | 0;k[J >> 2] = k[J >> 2] | 1;J = f;u = K;return J | 0;
          }r = k[1460] | 0;if (o >>> 0 > r >>> 0) {
            if (c | 0) {
              h = 2 << a;a = c << a & (h | 0 - h);a = (a & 0 - a) + -1 | 0;h = a >>> 12 & 16;a = a >>> h;d = a >>> 5 & 8;a = a >>> d;f = a >>> 2 & 4;a = a >>> f;c = a >>> 1 & 2;a = a >>> c;b = a >>> 1 & 1;b = (d | h | f | c | b) + (a >>> b) | 0;a = 5872 + (b << 1 << 2) | 0;c = a + 8 | 0;f = k[c >> 2] | 0;h = f + 8 | 0;d = k[h >> 2] | 0;do {
                if ((a | 0) != (d | 0)) {
                  if (d >>> 0 < (k[1462] | 0) >>> 0) ya();e = d + 12 | 0;if ((k[e >> 2] | 0) == (f | 0)) {
                    k[e >> 2] = a;k[c >> 2] = d;i = s;break;
                  } else ya();
                } else {
                  i = s & ~(1 << b);k[1458] = i;
                }
              } while (0);g = (b << 3) - o | 0;k[f + 4 >> 2] = o | 3;d = f + o | 0;k[d + 4 >> 2] = g | 1;k[d + g >> 2] = g;if (r | 0) {
                e = k[1463] | 0;b = r >>> 3;c = 5872 + (b << 1 << 2) | 0;b = 1 << b;if (i & b) {
                  b = c + 8 | 0;a = k[b >> 2] | 0;if (a >>> 0 < (k[1462] | 0) >>> 0) ya();else {
                    j = a;l = b;
                  }
                } else {
                  k[1458] = i | b;j = c;l = c + 8 | 0;
                }k[l >> 2] = e;k[j + 12 >> 2] = e;k[e + 8 >> 2] = j;k[e + 12 >> 2] = c;
              }k[1460] = g;k[1463] = d;J = h;u = K;return J | 0;
            }j = k[1459] | 0;if (j) {
              a = (j & 0 - j) + -1 | 0;I = a >>> 12 & 16;a = a >>> I;H = a >>> 5 & 8;a = a >>> H;J = a >>> 2 & 4;a = a >>> J;c = a >>> 1 & 2;a = a >>> c;b = a >>> 1 & 1;b = k[6136 + ((H | I | J | c | b) + (a >>> b) << 2) >> 2] | 0;a = (k[b + 4 >> 2] & -8) - o | 0;c = k[b + 16 + (((k[b + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;if (!c) {
                i = b;g = a;
              } else {
                do {
                  I = (k[c + 4 >> 2] & -8) - o | 0;J = I >>> 0 < a >>> 0;a = J ? I : a;b = J ? c : b;c = k[c + 16 + (((k[c + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;
                } while ((c | 0) != 0);i = b;g = a;
              }e = k[1462] | 0;if (i >>> 0 < e >>> 0) ya();h = i + o | 0;if (i >>> 0 >= h >>> 0) ya();f = k[i + 24 >> 2] | 0;c = k[i + 12 >> 2] | 0;do {
                if ((c | 0) == (i | 0)) {
                  a = i + 20 | 0;b = k[a >> 2] | 0;if (!b) {
                    a = i + 16 | 0;b = k[a >> 2] | 0;if (!b) {
                      m = 0;break;
                    }
                  }while (1) {
                    c = b + 20 | 0;d = k[c >> 2] | 0;if (d | 0) {
                      b = d;a = c;continue;
                    }c = b + 16 | 0;d = k[c >> 2] | 0;if (!d) break;else {
                      b = d;a = c;
                    }
                  }if (a >>> 0 < e >>> 0) ya();else {
                    k[a >> 2] = 0;m = b;break;
                  }
                } else {
                  d = k[i + 8 >> 2] | 0;if (d >>> 0 < e >>> 0) ya();b = d + 12 | 0;if ((k[b >> 2] | 0) != (i | 0)) ya();a = c + 8 | 0;if ((k[a >> 2] | 0) == (i | 0)) {
                    k[b >> 2] = c;k[a >> 2] = d;m = c;break;
                  } else ya();
                }
              } while (0);a: do {
                if (f | 0) {
                  b = k[i + 28 >> 2] | 0;a = 6136 + (b << 2) | 0;do {
                    if ((i | 0) == (k[a >> 2] | 0)) {
                      k[a >> 2] = m;if (!m) {
                        k[1459] = j & ~(1 << b);break a;
                      }
                    } else if (f >>> 0 >= (k[1462] | 0) >>> 0) {
                      k[f + 16 + (((k[f + 16 >> 2] | 0) != (i | 0) & 1) << 2) >> 2] = m;if (!m) break a;else break;
                    } else ya();
                  } while (0);a = k[1462] | 0;if (m >>> 0 < a >>> 0) ya();k[m + 24 >> 2] = f;b = k[i + 16 >> 2] | 0;do {
                    if (b | 0) if (b >>> 0 < a >>> 0) ya();else {
                      k[m + 16 >> 2] = b;k[b + 24 >> 2] = m;break;
                    }
                  } while (0);b = k[i + 20 >> 2] | 0;if (b | 0) if (b >>> 0 < (k[1462] | 0) >>> 0) ya();else {
                    k[m + 20 >> 2] = b;k[b + 24 >> 2] = m;break;
                  }
                }
              } while (0);if (g >>> 0 < 16) {
                J = g + o | 0;k[i + 4 >> 2] = J | 3;J = i + J + 4 | 0;k[J >> 2] = k[J >> 2] | 1;
              } else {
                k[i + 4 >> 2] = o | 3;k[h + 4 >> 2] = g | 1;k[h + g >> 2] = g;if (r | 0) {
                  d = k[1463] | 0;b = r >>> 3;c = 5872 + (b << 1 << 2) | 0;b = 1 << b;if (s & b) {
                    b = c + 8 | 0;a = k[b >> 2] | 0;if (a >>> 0 < (k[1462] | 0) >>> 0) ya();else {
                      p = a;q = b;
                    }
                  } else {
                    k[1458] = s | b;p = c;q = c + 8 | 0;
                  }k[q >> 2] = d;k[p + 12 >> 2] = d;k[d + 8 >> 2] = p;k[d + 12 >> 2] = c;
                }k[1460] = g;k[1463] = h;
              }J = i + 8 | 0;u = K;return J | 0;
            }
          }
        } else if (a >>> 0 <= 4294967231) {
          a = a + 11 | 0;o = a & -8;j = k[1459] | 0;if (j) {
            d = 0 - o | 0;a = a >>> 8;if (a) {
              if (o >>> 0 > 16777215) h = 31;else {
                q = (a + 1048320 | 0) >>> 16 & 8;C = a << q;p = (C + 520192 | 0) >>> 16 & 4;C = C << p;h = (C + 245760 | 0) >>> 16 & 2;h = 14 - (p | q | h) + (C << h >>> 15) | 0;h = o >>> (h + 7 | 0) & 1 | h << 1;
              }
            } else h = 0;c = k[6136 + (h << 2) >> 2] | 0;b: do {
              if (!c) {
                c = 0;a = 0;C = 81;
              } else {
                a = 0;g = o << ((h | 0) == 31 ? 0 : 25 - (h >>> 1) | 0);f = 0;while (1) {
                  e = (k[c + 4 >> 2] & -8) - o | 0;if (e >>> 0 < d >>> 0) if (!e) {
                    a = c;d = 0;e = c;C = 85;break b;
                  } else {
                    a = c;d = e;
                  }e = k[c + 20 >> 2] | 0;c = k[c + 16 + (g >>> 31 << 2) >> 2] | 0;f = (e | 0) == 0 | (e | 0) == (c | 0) ? f : e;e = (c | 0) == 0;if (e) {
                    c = f;C = 81;break;
                  } else g = g << ((e ^ 1) & 1);
                }
              }
            } while (0);if ((C | 0) == 81) {
              if ((c | 0) == 0 & (a | 0) == 0) {
                a = 2 << h;a = j & (a | 0 - a);if (!a) break;q = (a & 0 - a) + -1 | 0;l = q >>> 12 & 16;q = q >>> l;i = q >>> 5 & 8;q = q >>> i;m = q >>> 2 & 4;q = q >>> m;p = q >>> 1 & 2;q = q >>> p;c = q >>> 1 & 1;a = 0;c = k[6136 + ((i | l | m | p | c) + (q >>> c) << 2) >> 2] | 0;
              }if (!c) {
                i = a;h = d;
              } else {
                e = c;C = 85;
              }
            }if ((C | 0) == 85) while (1) {
              C = 0;c = (k[e + 4 >> 2] & -8) - o | 0;q = c >>> 0 < d >>> 0;c = q ? c : d;a = q ? e : a;e = k[e + 16 + (((k[e + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;if (!e) {
                i = a;h = c;break;
              } else {
                d = c;C = 85;
              }
            }if ((i | 0) != 0 ? h >>> 0 < ((k[1460] | 0) - o | 0) >>> 0 : 0) {
              e = k[1462] | 0;if (i >>> 0 < e >>> 0) ya();g = i + o | 0;if (i >>> 0 >= g >>> 0) ya();f = k[i + 24 >> 2] | 0;c = k[i + 12 >> 2] | 0;do {
                if ((c | 0) == (i | 0)) {
                  a = i + 20 | 0;b = k[a >> 2] | 0;if (!b) {
                    a = i + 16 | 0;b = k[a >> 2] | 0;if (!b) {
                      r = 0;break;
                    }
                  }while (1) {
                    c = b + 20 | 0;d = k[c >> 2] | 0;if (d | 0) {
                      b = d;a = c;continue;
                    }c = b + 16 | 0;d = k[c >> 2] | 0;if (!d) break;else {
                      b = d;a = c;
                    }
                  }if (a >>> 0 < e >>> 0) ya();else {
                    k[a >> 2] = 0;r = b;break;
                  }
                } else {
                  d = k[i + 8 >> 2] | 0;if (d >>> 0 < e >>> 0) ya();b = d + 12 | 0;if ((k[b >> 2] | 0) != (i | 0)) ya();a = c + 8 | 0;if ((k[a >> 2] | 0) == (i | 0)) {
                    k[b >> 2] = c;k[a >> 2] = d;r = c;break;
                  } else ya();
                }
              } while (0);c: do {
                if (f) {
                  b = k[i + 28 >> 2] | 0;a = 6136 + (b << 2) | 0;do {
                    if ((i | 0) == (k[a >> 2] | 0)) {
                      k[a >> 2] = r;if (!r) {
                        s = j & ~(1 << b);k[1459] = s;break c;
                      }
                    } else if (f >>> 0 >= (k[1462] | 0) >>> 0) {
                      k[f + 16 + (((k[f + 16 >> 2] | 0) != (i | 0) & 1) << 2) >> 2] = r;if (!r) {
                        s = j;break c;
                      } else break;
                    } else ya();
                  } while (0);a = k[1462] | 0;if (r >>> 0 < a >>> 0) ya();k[r + 24 >> 2] = f;b = k[i + 16 >> 2] | 0;do {
                    if (b | 0) if (b >>> 0 < a >>> 0) ya();else {
                      k[r + 16 >> 2] = b;k[b + 24 >> 2] = r;break;
                    }
                  } while (0);b = k[i + 20 >> 2] | 0;if (b) {
                    if (b >>> 0 < (k[1462] | 0) >>> 0) ya();else {
                      k[r + 20 >> 2] = b;k[b + 24 >> 2] = r;s = j;break;
                    }
                  } else s = j;
                } else s = j;
              } while (0);do {
                if (h >>> 0 >= 16) {
                  k[i + 4 >> 2] = o | 3;k[g + 4 >> 2] = h | 1;k[g + h >> 2] = h;b = h >>> 3;if (h >>> 0 < 256) {
                    c = 5872 + (b << 1 << 2) | 0;a = k[1458] | 0;b = 1 << b;if (a & b) {
                      b = c + 8 | 0;a = k[b >> 2] | 0;if (a >>> 0 < (k[1462] | 0) >>> 0) ya();else {
                        x = a;y = b;
                      }
                    } else {
                      k[1458] = a | b;x = c;y = c + 8 | 0;
                    }k[y >> 2] = g;k[x + 12 >> 2] = g;k[g + 8 >> 2] = x;k[g + 12 >> 2] = c;break;
                  }b = h >>> 8;if (b) {
                    if (h >>> 0 > 16777215) b = 31;else {
                      I = (b + 1048320 | 0) >>> 16 & 8;J = b << I;H = (J + 520192 | 0) >>> 16 & 4;J = J << H;b = (J + 245760 | 0) >>> 16 & 2;b = 14 - (H | I | b) + (J << b >>> 15) | 0;b = h >>> (b + 7 | 0) & 1 | b << 1;
                    }
                  } else b = 0;c = 6136 + (b << 2) | 0;k[g + 28 >> 2] = b;a = g + 16 | 0;k[a + 4 >> 2] = 0;k[a >> 2] = 0;a = 1 << b;if (!(s & a)) {
                    k[1459] = s | a;k[c >> 2] = g;k[g + 24 >> 2] = c;k[g + 12 >> 2] = g;k[g + 8 >> 2] = g;break;
                  }a = h << ((b | 0) == 31 ? 0 : 25 - (b >>> 1) | 0);d = k[c >> 2] | 0;while (1) {
                    if ((k[d + 4 >> 2] & -8 | 0) == (h | 0)) {
                      C = 139;break;
                    }c = d + 16 + (a >>> 31 << 2) | 0;b = k[c >> 2] | 0;if (!b) {
                      C = 136;break;
                    } else {
                      a = a << 1;d = b;
                    }
                  }if ((C | 0) == 136) {
                    if (c >>> 0 < (k[1462] | 0) >>> 0) ya();else {
                      k[c >> 2] = g;k[g + 24 >> 2] = d;k[g + 12 >> 2] = g;k[g + 8 >> 2] = g;break;
                    }
                  } else if ((C | 0) == 139) {
                    b = d + 8 | 0;a = k[b >> 2] | 0;J = k[1462] | 0;if (a >>> 0 >= J >>> 0 & d >>> 0 >= J >>> 0) {
                      k[a + 12 >> 2] = g;k[b >> 2] = g;k[g + 8 >> 2] = a;k[g + 12 >> 2] = d;k[g + 24 >> 2] = 0;break;
                    } else ya();
                  }
                } else {
                  J = h + o | 0;k[i + 4 >> 2] = J | 3;J = i + J + 4 | 0;k[J >> 2] = k[J >> 2] | 1;
                }
              } while (0);J = i + 8 | 0;u = K;return J | 0;
            }
          }
        } else o = -1;
      } while (0);c = k[1460] | 0;if (c >>> 0 >= o >>> 0) {
        b = c - o | 0;a = k[1463] | 0;if (b >>> 0 > 15) {
          J = a + o | 0;k[1463] = J;k[1460] = b;k[J + 4 >> 2] = b | 1;k[J + b >> 2] = b;k[a + 4 >> 2] = o | 3;
        } else {
          k[1460] = 0;k[1463] = 0;k[a + 4 >> 2] = c | 3;J = a + c + 4 | 0;k[J >> 2] = k[J >> 2] | 1;
        }J = a + 8 | 0;u = K;return J | 0;
      }g = k[1461] | 0;if (g >>> 0 > o >>> 0) {
        H = g - o | 0;k[1461] = H;J = k[1464] | 0;I = J + o | 0;k[1464] = I;k[I + 4 >> 2] = H | 1;k[J + 4 >> 2] = o | 3;J = J + 8 | 0;u = K;return J | 0;
      }if (!(k[1576] | 0)) {
        k[1578] = 4096;k[1577] = 4096;k[1579] = -1;k[1580] = -1;k[1581] = 0;k[1569] = 0;a = n & -16 ^ 1431655768;k[n >> 2] = a;k[1576] = a;a = 4096;
      } else a = k[1578] | 0;h = o + 48 | 0;i = o + 47 | 0;f = a + i | 0;e = 0 - a | 0;j = f & e;if (j >>> 0 <= o >>> 0) {
        J = 0;u = K;return J | 0;
      }a = k[1568] | 0;if (a | 0 ? (x = k[1566] | 0, y = x + j | 0, y >>> 0 <= x >>> 0 | y >>> 0 > a >>> 0) : 0) {
        J = 0;u = K;return J | 0;
      }d: do {
        if (!(k[1569] & 4)) {
          c = k[1464] | 0;e: do {
            if (c) {
              d = 6280;while (1) {
                a = k[d >> 2] | 0;if (a >>> 0 <= c >>> 0 ? (w = d + 4 | 0, (a + (k[w >> 2] | 0) | 0) >>> 0 > c >>> 0) : 0) break;a = k[d + 8 >> 2] | 0;if (!a) {
                  C = 163;break e;
                } else d = a;
              }b = f - g & e;if (b >>> 0 < 2147483647) {
                a = Fe(b | 0) | 0;if ((a | 0) == ((k[d >> 2] | 0) + (k[w >> 2] | 0) | 0)) {
                  if ((a | 0) != (-1 | 0)) {
                    g = b;f = a;C = 180;break d;
                  }
                } else {
                  d = a;C = 171;
                }
              } else b = 0;
            } else C = 163;
          } while (0);do {
            if ((C | 0) == 163) {
              c = Fe(0) | 0;if ((c | 0) != (-1 | 0) ? (b = c, t = k[1577] | 0, v = t + -1 | 0, b = ((v & b | 0) == 0 ? 0 : (v + b & 0 - t) - b | 0) + j | 0, t = k[1566] | 0, v = b + t | 0, b >>> 0 > o >>> 0 & b >>> 0 < 2147483647) : 0) {
                y = k[1568] | 0;if (y | 0 ? v >>> 0 <= t >>> 0 | v >>> 0 > y >>> 0 : 0) {
                  b = 0;break;
                }a = Fe(b | 0) | 0;if ((a | 0) == (c | 0)) {
                  g = b;f = c;C = 180;break d;
                } else {
                  d = a;C = 171;
                }
              } else b = 0;
            }
          } while (0);do {
            if ((C | 0) == 171) {
              c = 0 - b | 0;if (!(h >>> 0 > b >>> 0 & (b >>> 0 < 2147483647 & (d | 0) != (-1 | 0)))) if ((d | 0) == (-1 | 0)) {
                b = 0;break;
              } else {
                g = b;f = d;C = 180;break d;
              }a = k[1578] | 0;a = i - b + a & 0 - a;if (a >>> 0 >= 2147483647) {
                g = b;f = d;C = 180;break d;
              }if ((Fe(a | 0) | 0) == (-1 | 0)) {
                Fe(c | 0) | 0;b = 0;break;
              } else {
                g = a + b | 0;f = d;C = 180;break d;
              }
            }
          } while (0);k[1569] = k[1569] | 4;C = 178;
        } else {
          b = 0;C = 178;
        }
      } while (0);if (((C | 0) == 178 ? j >>> 0 < 2147483647 : 0) ? (B = Fe(j | 0) | 0, y = Fe(0) | 0, z = y - B | 0, A = z >>> 0 > (o + 40 | 0) >>> 0, !((B | 0) == (-1 | 0) | A ^ 1 | B >>> 0 < y >>> 0 & ((B | 0) != (-1 | 0) & (y | 0) != (-1 | 0)) ^ 1)) : 0) {
        g = A ? z : b;f = B;C = 180;
      }if ((C | 0) == 180) {
        b = (k[1566] | 0) + g | 0;k[1566] = b;if (b >>> 0 > (k[1567] | 0) >>> 0) k[1567] = b;j = k[1464] | 0;do {
          if (j) {
            b = 6280;while (1) {
              a = k[b >> 2] | 0;c = b + 4 | 0;d = k[c >> 2] | 0;if ((f | 0) == (a + d | 0)) {
                C = 190;break;
              }e = k[b + 8 >> 2] | 0;if (!e) break;else b = e;
            }if (((C | 0) == 190 ? (k[b + 12 >> 2] & 8 | 0) == 0 : 0) ? j >>> 0 < f >>> 0 & j >>> 0 >= a >>> 0 : 0) {
              k[c >> 2] = d + g;J = j + 8 | 0;J = (J & 7 | 0) == 0 ? 0 : 0 - J & 7;I = j + J | 0;J = (k[1461] | 0) + (g - J) | 0;k[1464] = I;k[1461] = J;k[I + 4 >> 2] = J | 1;k[I + J + 4 >> 2] = 40;k[1465] = k[1580];break;
            }b = k[1462] | 0;if (f >>> 0 < b >>> 0) {
              k[1462] = f;h = f;
            } else h = b;c = f + g | 0;b = 6280;while (1) {
              if ((k[b >> 2] | 0) == (c | 0)) {
                C = 198;break;
              }a = k[b + 8 >> 2] | 0;if (!a) break;else b = a;
            }if ((C | 0) == 198 ? (k[b + 12 >> 2] & 8 | 0) == 0 : 0) {
              k[b >> 2] = f;m = b + 4 | 0;k[m >> 2] = (k[m >> 2] | 0) + g;m = f + 8 | 0;m = f + ((m & 7 | 0) == 0 ? 0 : 0 - m & 7) | 0;b = c + 8 | 0;b = c + ((b & 7 | 0) == 0 ? 0 : 0 - b & 7) | 0;l = m + o | 0;i = b - m - o | 0;k[m + 4 >> 2] = o | 3;do {
                if ((b | 0) != (j | 0)) {
                  if ((b | 0) == (k[1463] | 0)) {
                    J = (k[1460] | 0) + i | 0;k[1460] = J;k[1463] = l;k[l + 4 >> 2] = J | 1;k[l + J >> 2] = J;break;
                  }a = k[b + 4 >> 2] | 0;if ((a & 3 | 0) == 1) {
                    g = a & -8;e = a >>> 3;f: do {
                      if (a >>> 0 >= 256) {
                        f = k[b + 24 >> 2] | 0;d = k[b + 12 >> 2] | 0;do {
                          if ((d | 0) == (b | 0)) {
                            d = b + 16 | 0;c = d + 4 | 0;a = k[c >> 2] | 0;if (!a) {
                              a = k[d >> 2] | 0;if (!a) {
                                H = 0;break;
                              } else c = d;
                            }while (1) {
                              d = a + 20 | 0;e = k[d >> 2] | 0;if (e | 0) {
                                a = e;c = d;continue;
                              }d = a + 16 | 0;e = k[d >> 2] | 0;if (!e) break;else {
                                a = e;c = d;
                              }
                            }if (c >>> 0 < h >>> 0) ya();else {
                              k[c >> 2] = 0;H = a;break;
                            }
                          } else {
                            e = k[b + 8 >> 2] | 0;if (e >>> 0 < h >>> 0) ya();a = e + 12 | 0;if ((k[a >> 2] | 0) != (b | 0)) ya();c = d + 8 | 0;if ((k[c >> 2] | 0) == (b | 0)) {
                              k[a >> 2] = d;k[c >> 2] = e;H = d;break;
                            } else ya();
                          }
                        } while (0);if (!f) break;a = k[b + 28 >> 2] | 0;c = 6136 + (a << 2) | 0;do {
                          if ((b | 0) != (k[c >> 2] | 0)) {
                            if (f >>> 0 >= (k[1462] | 0) >>> 0) {
                              k[f + 16 + (((k[f + 16 >> 2] | 0) != (b | 0) & 1) << 2) >> 2] = H;if (!H) break f;else break;
                            } else ya();
                          } else {
                            k[c >> 2] = H;if (H | 0) break;k[1459] = k[1459] & ~(1 << a);break f;
                          }
                        } while (0);d = k[1462] | 0;if (H >>> 0 < d >>> 0) ya();k[H + 24 >> 2] = f;a = b + 16 | 0;c = k[a >> 2] | 0;do {
                          if (c | 0) if (c >>> 0 < d >>> 0) ya();else {
                            k[H + 16 >> 2] = c;k[c + 24 >> 2] = H;break;
                          }
                        } while (0);a = k[a + 4 >> 2] | 0;if (!a) break;if (a >>> 0 < (k[1462] | 0) >>> 0) ya();else {
                          k[H + 20 >> 2] = a;k[a + 24 >> 2] = H;break;
                        }
                      } else {
                        c = k[b + 8 >> 2] | 0;d = k[b + 12 >> 2] | 0;a = 5872 + (e << 1 << 2) | 0;do {
                          if ((c | 0) != (a | 0)) {
                            if (c >>> 0 < h >>> 0) ya();if ((k[c + 12 >> 2] | 0) == (b | 0)) break;ya();
                          }
                        } while (0);if ((d | 0) == (c | 0)) {
                          k[1458] = k[1458] & ~(1 << e);break;
                        }do {
                          if ((d | 0) == (a | 0)) E = d + 8 | 0;else {
                            if (d >>> 0 < h >>> 0) ya();a = d + 8 | 0;if ((k[a >> 2] | 0) == (b | 0)) {
                              E = a;break;
                            }ya();
                          }
                        } while (0);k[c + 12 >> 2] = d;k[E >> 2] = c;
                      }
                    } while (0);b = b + g | 0;e = g + i | 0;
                  } else e = i;b = b + 4 | 0;k[b >> 2] = k[b >> 2] & -2;k[l + 4 >> 2] = e | 1;k[l + e >> 2] = e;b = e >>> 3;if (e >>> 0 < 256) {
                    c = 5872 + (b << 1 << 2) | 0;a = k[1458] | 0;b = 1 << b;do {
                      if (!(a & b)) {
                        k[1458] = a | b;I = c;J = c + 8 | 0;
                      } else {
                        b = c + 8 | 0;a = k[b >> 2] | 0;if (a >>> 0 >= (k[1462] | 0) >>> 0) {
                          I = a;J = b;break;
                        }ya();
                      }
                    } while (0);k[J >> 2] = l;k[I + 12 >> 2] = l;k[l + 8 >> 2] = I;k[l + 12 >> 2] = c;break;
                  }b = e >>> 8;do {
                    if (!b) b = 0;else {
                      if (e >>> 0 > 16777215) {
                        b = 31;break;
                      }I = (b + 1048320 | 0) >>> 16 & 8;J = b << I;H = (J + 520192 | 0) >>> 16 & 4;J = J << H;b = (J + 245760 | 0) >>> 16 & 2;b = 14 - (H | I | b) + (J << b >>> 15) | 0;b = e >>> (b + 7 | 0) & 1 | b << 1;
                    }
                  } while (0);d = 6136 + (b << 2) | 0;k[l + 28 >> 2] = b;a = l + 16 | 0;k[a + 4 >> 2] = 0;k[a >> 2] = 0;a = k[1459] | 0;c = 1 << b;if (!(a & c)) {
                    k[1459] = a | c;k[d >> 2] = l;k[l + 24 >> 2] = d;k[l + 12 >> 2] = l;k[l + 8 >> 2] = l;break;
                  }a = e << ((b | 0) == 31 ? 0 : 25 - (b >>> 1) | 0);d = k[d >> 2] | 0;while (1) {
                    if ((k[d + 4 >> 2] & -8 | 0) == (e | 0)) {
                      C = 265;break;
                    }c = d + 16 + (a >>> 31 << 2) | 0;b = k[c >> 2] | 0;if (!b) {
                      C = 262;break;
                    } else {
                      a = a << 1;d = b;
                    }
                  }if ((C | 0) == 262) {
                    if (c >>> 0 < (k[1462] | 0) >>> 0) ya();else {
                      k[c >> 2] = l;k[l + 24 >> 2] = d;k[l + 12 >> 2] = l;k[l + 8 >> 2] = l;break;
                    }
                  } else if ((C | 0) == 265) {
                    b = d + 8 | 0;a = k[b >> 2] | 0;J = k[1462] | 0;if (a >>> 0 >= J >>> 0 & d >>> 0 >= J >>> 0) {
                      k[a + 12 >> 2] = l;k[b >> 2] = l;k[l + 8 >> 2] = a;k[l + 12 >> 2] = d;k[l + 24 >> 2] = 0;break;
                    } else ya();
                  }
                } else {
                  J = (k[1461] | 0) + i | 0;k[1461] = J;k[1464] = l;k[l + 4 >> 2] = J | 1;
                }
              } while (0);J = m + 8 | 0;u = K;return J | 0;
            }b = 6280;while (1) {
              a = k[b >> 2] | 0;if (a >>> 0 <= j >>> 0 ? (D = a + (k[b + 4 >> 2] | 0) | 0, D >>> 0 > j >>> 0) : 0) break;b = k[b + 8 >> 2] | 0;
            }e = D + -47 | 0;a = e + 8 | 0;a = e + ((a & 7 | 0) == 0 ? 0 : 0 - a & 7) | 0;e = j + 16 | 0;a = a >>> 0 < e >>> 0 ? j : a;b = a + 8 | 0;c = f + 8 | 0;c = (c & 7 | 0) == 0 ? 0 : 0 - c & 7;J = f + c | 0;c = g + -40 - c | 0;k[1464] = J;k[1461] = c;k[J + 4 >> 2] = c | 1;k[J + c + 4 >> 2] = 40;k[1465] = k[1580];c = a + 4 | 0;k[c >> 2] = 27;k[b >> 2] = k[1570];k[b + 4 >> 2] = k[1571];k[b + 8 >> 2] = k[1572];k[b + 12 >> 2] = k[1573];k[1570] = f;k[1571] = g;k[1573] = 0;k[1572] = b;b = a + 24 | 0;do {
              J = b;b = b + 4 | 0;k[b >> 2] = 7;
            } while ((J + 8 | 0) >>> 0 < D >>> 0);if ((a | 0) != (j | 0)) {
              f = a - j | 0;k[c >> 2] = k[c >> 2] & -2;k[j + 4 >> 2] = f | 1;k[a >> 2] = f;b = f >>> 3;if (f >>> 0 < 256) {
                c = 5872 + (b << 1 << 2) | 0;a = k[1458] | 0;b = 1 << b;if (a & b) {
                  b = c + 8 | 0;a = k[b >> 2] | 0;if (a >>> 0 < (k[1462] | 0) >>> 0) ya();else {
                    F = a;G = b;
                  }
                } else {
                  k[1458] = a | b;F = c;G = c + 8 | 0;
                }k[G >> 2] = j;k[F + 12 >> 2] = j;k[j + 8 >> 2] = F;k[j + 12 >> 2] = c;break;
              }b = f >>> 8;if (b) {
                if (f >>> 0 > 16777215) c = 31;else {
                  I = (b + 1048320 | 0) >>> 16 & 8;J = b << I;H = (J + 520192 | 0) >>> 16 & 4;J = J << H;c = (J + 245760 | 0) >>> 16 & 2;c = 14 - (H | I | c) + (J << c >>> 15) | 0;c = f >>> (c + 7 | 0) & 1 | c << 1;
                }
              } else c = 0;d = 6136 + (c << 2) | 0;k[j + 28 >> 2] = c;k[j + 20 >> 2] = 0;k[e >> 2] = 0;b = k[1459] | 0;a = 1 << c;if (!(b & a)) {
                k[1459] = b | a;k[d >> 2] = j;k[j + 24 >> 2] = d;k[j + 12 >> 2] = j;k[j + 8 >> 2] = j;break;
              }a = f << ((c | 0) == 31 ? 0 : 25 - (c >>> 1) | 0);d = k[d >> 2] | 0;while (1) {
                if ((k[d + 4 >> 2] & -8 | 0) == (f | 0)) {
                  C = 292;break;
                }c = d + 16 + (a >>> 31 << 2) | 0;b = k[c >> 2] | 0;if (!b) {
                  C = 289;break;
                } else {
                  a = a << 1;d = b;
                }
              }if ((C | 0) == 289) {
                if (c >>> 0 < (k[1462] | 0) >>> 0) ya();else {
                  k[c >> 2] = j;k[j + 24 >> 2] = d;k[j + 12 >> 2] = j;k[j + 8 >> 2] = j;break;
                }
              } else if ((C | 0) == 292) {
                b = d + 8 | 0;a = k[b >> 2] | 0;J = k[1462] | 0;if (a >>> 0 >= J >>> 0 & d >>> 0 >= J >>> 0) {
                  k[a + 12 >> 2] = j;k[b >> 2] = j;k[j + 8 >> 2] = a;k[j + 12 >> 2] = d;k[j + 24 >> 2] = 0;break;
                } else ya();
              }
            }
          } else {
            J = k[1462] | 0;if ((J | 0) == 0 | f >>> 0 < J >>> 0) k[1462] = f;k[1570] = f;k[1571] = g;k[1573] = 0;k[1467] = k[1576];k[1466] = -1;b = 0;do {
              J = 5872 + (b << 1 << 2) | 0;k[J + 12 >> 2] = J;k[J + 8 >> 2] = J;b = b + 1 | 0;
            } while ((b | 0) != 32);J = f + 8 | 0;J = (J & 7 | 0) == 0 ? 0 : 0 - J & 7;I = f + J | 0;J = g + -40 - J | 0;k[1464] = I;k[1461] = J;k[I + 4 >> 2] = J | 1;k[I + J + 4 >> 2] = 40;k[1465] = k[1580];
          }
        } while (0);b = k[1461] | 0;if (b >>> 0 > o >>> 0) {
          H = b - o | 0;k[1461] = H;J = k[1464] | 0;I = J + o | 0;k[1464] = I;k[I + 4 >> 2] = H | 1;k[J + 4 >> 2] = o | 3;J = J + 8 | 0;u = K;return J | 0;
        }
      }J = Ec() | 0;k[J >> 2] = 12;J = 0;u = K;return J | 0;
    }function Td(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0;if (!a) return;c = a + -8 | 0;g = k[1462] | 0;if (c >>> 0 < g >>> 0) ya();a = k[a + -4 >> 2] | 0;b = a & 3;if ((b | 0) == 1) ya();d = a & -8;o = c + d | 0;a: do {
        if (!(a & 1)) {
          a = k[c >> 2] | 0;if (!b) return;j = c + (0 - a) | 0;i = a + d | 0;if (j >>> 0 < g >>> 0) ya();if ((j | 0) == (k[1463] | 0)) {
            a = o + 4 | 0;b = k[a >> 2] | 0;if ((b & 3 | 0) != 3) {
              r = j;e = i;m = j;break;
            }k[1460] = i;k[a >> 2] = b & -2;k[j + 4 >> 2] = i | 1;k[j + i >> 2] = i;return;
          }d = a >>> 3;if (a >>> 0 < 256) {
            b = k[j + 8 >> 2] | 0;c = k[j + 12 >> 2] | 0;a = 5872 + (d << 1 << 2) | 0;if ((b | 0) != (a | 0)) {
              if (b >>> 0 < g >>> 0) ya();if ((k[b + 12 >> 2] | 0) != (j | 0)) ya();
            }if ((c | 0) == (b | 0)) {
              k[1458] = k[1458] & ~(1 << d);r = j;e = i;m = j;break;
            }if ((c | 0) != (a | 0)) {
              if (c >>> 0 < g >>> 0) ya();a = c + 8 | 0;if ((k[a >> 2] | 0) == (j | 0)) f = a;else ya();
            } else f = c + 8 | 0;k[b + 12 >> 2] = c;k[f >> 2] = b;r = j;e = i;m = j;break;
          }f = k[j + 24 >> 2] | 0;c = k[j + 12 >> 2] | 0;do {
            if ((c | 0) == (j | 0)) {
              c = j + 16 | 0;b = c + 4 | 0;a = k[b >> 2] | 0;if (!a) {
                a = k[c >> 2] | 0;if (!a) {
                  h = 0;break;
                } else b = c;
              }while (1) {
                c = a + 20 | 0;d = k[c >> 2] | 0;if (d | 0) {
                  a = d;b = c;continue;
                }c = a + 16 | 0;d = k[c >> 2] | 0;if (!d) break;else {
                  a = d;b = c;
                }
              }if (b >>> 0 < g >>> 0) ya();else {
                k[b >> 2] = 0;h = a;break;
              }
            } else {
              d = k[j + 8 >> 2] | 0;if (d >>> 0 < g >>> 0) ya();a = d + 12 | 0;if ((k[a >> 2] | 0) != (j | 0)) ya();b = c + 8 | 0;if ((k[b >> 2] | 0) == (j | 0)) {
                k[a >> 2] = c;k[b >> 2] = d;h = c;break;
              } else ya();
            }
          } while (0);if (f) {
            a = k[j + 28 >> 2] | 0;b = 6136 + (a << 2) | 0;do {
              if ((j | 0) == (k[b >> 2] | 0)) {
                k[b >> 2] = h;if (!h) {
                  k[1459] = k[1459] & ~(1 << a);r = j;e = i;m = j;break a;
                }
              } else if (f >>> 0 >= (k[1462] | 0) >>> 0) {
                k[f + 16 + (((k[f + 16 >> 2] | 0) != (j | 0) & 1) << 2) >> 2] = h;if (!h) {
                  r = j;e = i;m = j;break a;
                } else break;
              } else ya();
            } while (0);c = k[1462] | 0;if (h >>> 0 < c >>> 0) ya();k[h + 24 >> 2] = f;a = j + 16 | 0;b = k[a >> 2] | 0;do {
              if (b | 0) if (b >>> 0 < c >>> 0) ya();else {
                k[h + 16 >> 2] = b;k[b + 24 >> 2] = h;break;
              }
            } while (0);a = k[a + 4 >> 2] | 0;if (a) {
              if (a >>> 0 < (k[1462] | 0) >>> 0) ya();else {
                k[h + 20 >> 2] = a;k[a + 24 >> 2] = h;r = j;e = i;m = j;break;
              }
            } else {
              r = j;e = i;m = j;
            }
          } else {
            r = j;e = i;m = j;
          }
        } else {
          r = c;e = d;m = c;
        }
      } while (0);if (m >>> 0 >= o >>> 0) ya();a = o + 4 | 0;b = k[a >> 2] | 0;if (!(b & 1)) ya();if (!(b & 2)) {
        a = k[1463] | 0;if ((o | 0) == (k[1464] | 0)) {
          q = (k[1461] | 0) + e | 0;k[1461] = q;k[1464] = r;k[r + 4 >> 2] = q | 1;if ((r | 0) != (a | 0)) return;k[1463] = 0;k[1460] = 0;return;
        }if ((o | 0) == (a | 0)) {
          q = (k[1460] | 0) + e | 0;k[1460] = q;k[1463] = m;k[r + 4 >> 2] = q | 1;k[m + q >> 2] = q;return;
        }e = (b & -8) + e | 0;d = b >>> 3;b: do {
          if (b >>> 0 >= 256) {
            f = k[o + 24 >> 2] | 0;a = k[o + 12 >> 2] | 0;do {
              if ((a | 0) == (o | 0)) {
                c = o + 16 | 0;b = c + 4 | 0;a = k[b >> 2] | 0;if (!a) {
                  a = k[c >> 2] | 0;if (!a) {
                    n = 0;break;
                  } else b = c;
                }while (1) {
                  c = a + 20 | 0;d = k[c >> 2] | 0;if (d | 0) {
                    a = d;b = c;continue;
                  }c = a + 16 | 0;d = k[c >> 2] | 0;if (!d) break;else {
                    a = d;b = c;
                  }
                }if (b >>> 0 < (k[1462] | 0) >>> 0) ya();else {
                  k[b >> 2] = 0;n = a;break;
                }
              } else {
                b = k[o + 8 >> 2] | 0;if (b >>> 0 < (k[1462] | 0) >>> 0) ya();c = b + 12 | 0;if ((k[c >> 2] | 0) != (o | 0)) ya();d = a + 8 | 0;if ((k[d >> 2] | 0) == (o | 0)) {
                  k[c >> 2] = a;k[d >> 2] = b;n = a;break;
                } else ya();
              }
            } while (0);if (f | 0) {
              a = k[o + 28 >> 2] | 0;b = 6136 + (a << 2) | 0;do {
                if ((o | 0) == (k[b >> 2] | 0)) {
                  k[b >> 2] = n;if (!n) {
                    k[1459] = k[1459] & ~(1 << a);break b;
                  }
                } else if (f >>> 0 >= (k[1462] | 0) >>> 0) {
                  k[f + 16 + (((k[f + 16 >> 2] | 0) != (o | 0) & 1) << 2) >> 2] = n;if (!n) break b;else break;
                } else ya();
              } while (0);c = k[1462] | 0;if (n >>> 0 < c >>> 0) ya();k[n + 24 >> 2] = f;a = o + 16 | 0;b = k[a >> 2] | 0;do {
                if (b | 0) if (b >>> 0 < c >>> 0) ya();else {
                  k[n + 16 >> 2] = b;k[b + 24 >> 2] = n;break;
                }
              } while (0);a = k[a + 4 >> 2] | 0;if (a | 0) if (a >>> 0 < (k[1462] | 0) >>> 0) ya();else {
                k[n + 20 >> 2] = a;k[a + 24 >> 2] = n;break;
              }
            }
          } else {
            b = k[o + 8 >> 2] | 0;c = k[o + 12 >> 2] | 0;a = 5872 + (d << 1 << 2) | 0;if ((b | 0) != (a | 0)) {
              if (b >>> 0 < (k[1462] | 0) >>> 0) ya();if ((k[b + 12 >> 2] | 0) != (o | 0)) ya();
            }if ((c | 0) == (b | 0)) {
              k[1458] = k[1458] & ~(1 << d);break;
            }if ((c | 0) != (a | 0)) {
              if (c >>> 0 < (k[1462] | 0) >>> 0) ya();a = c + 8 | 0;if ((k[a >> 2] | 0) == (o | 0)) l = a;else ya();
            } else l = c + 8 | 0;k[b + 12 >> 2] = c;k[l >> 2] = b;
          }
        } while (0);k[r + 4 >> 2] = e | 1;k[m + e >> 2] = e;if ((r | 0) == (k[1463] | 0)) {
          k[1460] = e;return;
        }
      } else {
        k[a >> 2] = b & -2;k[r + 4 >> 2] = e | 1;k[m + e >> 2] = e;
      }a = e >>> 3;if (e >>> 0 < 256) {
        c = 5872 + (a << 1 << 2) | 0;b = k[1458] | 0;a = 1 << a;if (b & a) {
          a = c + 8 | 0;b = k[a >> 2] | 0;if (b >>> 0 < (k[1462] | 0) >>> 0) ya();else {
            p = b;q = a;
          }
        } else {
          k[1458] = b | a;p = c;q = c + 8 | 0;
        }k[q >> 2] = r;k[p + 12 >> 2] = r;k[r + 8 >> 2] = p;k[r + 12 >> 2] = c;return;
      }a = e >>> 8;if (a) {
        if (e >>> 0 > 16777215) a = 31;else {
          p = (a + 1048320 | 0) >>> 16 & 8;q = a << p;o = (q + 520192 | 0) >>> 16 & 4;q = q << o;a = (q + 245760 | 0) >>> 16 & 2;a = 14 - (o | p | a) + (q << a >>> 15) | 0;a = e >>> (a + 7 | 0) & 1 | a << 1;
        }
      } else a = 0;d = 6136 + (a << 2) | 0;k[r + 28 >> 2] = a;k[r + 20 >> 2] = 0;k[r + 16 >> 2] = 0;b = k[1459] | 0;c = 1 << a;do {
        if (b & c) {
          b = e << ((a | 0) == 31 ? 0 : 25 - (a >>> 1) | 0);d = k[d >> 2] | 0;while (1) {
            if ((k[d + 4 >> 2] & -8 | 0) == (e | 0)) {
              a = 124;break;
            }c = d + 16 + (b >>> 31 << 2) | 0;a = k[c >> 2] | 0;if (!a) {
              a = 121;break;
            } else {
              b = b << 1;d = a;
            }
          }if ((a | 0) == 121) {
            if (c >>> 0 < (k[1462] | 0) >>> 0) ya();else {
              k[c >> 2] = r;k[r + 24 >> 2] = d;k[r + 12 >> 2] = r;k[r + 8 >> 2] = r;break;
            }
          } else if ((a | 0) == 124) {
            a = d + 8 | 0;b = k[a >> 2] | 0;q = k[1462] | 0;if (b >>> 0 >= q >>> 0 & d >>> 0 >= q >>> 0) {
              k[b + 12 >> 2] = r;k[a >> 2] = r;k[r + 8 >> 2] = b;k[r + 12 >> 2] = d;k[r + 24 >> 2] = 0;break;
            } else ya();
          }
        } else {
          k[1459] = b | c;k[d >> 2] = r;k[r + 24 >> 2] = d;k[r + 12 >> 2] = r;k[r + 8 >> 2] = r;
        }
      } while (0);r = (k[1466] | 0) + -1 | 0;k[1466] = r;if (!r) a = 6288;else return;while (1) {
        a = k[a >> 2] | 0;if (!a) break;else a = a + 8 | 0;
      }k[1466] = -1;return;
    }function Ud(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0;if (!a) {
        b = Sd(b) | 0;return b | 0;
      }if (b >>> 0 > 4294967231) {
        b = Ec() | 0;k[b >> 2] = 12;b = 0;return b | 0;
      }c = Vd(a + -8 | 0, b >>> 0 < 11 ? 16 : b + 11 & -8) | 0;if (c | 0) {
        b = c + 8 | 0;return b | 0;
      }c = Sd(b) | 0;if (!c) {
        b = 0;return b | 0;
      }d = k[a + -4 >> 2] | 0;d = (d & -8) - ((d & 3 | 0) == 0 ? 8 : 4) | 0;He(c | 0, a | 0, (d >>> 0 < b >>> 0 ? d : b) | 0) | 0;Td(a);b = c;return b | 0;
    }function Vd(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0;o = a + 4 | 0;n = k[o >> 2] | 0;c = n & -8;j = a + c | 0;h = k[1462] | 0;d = n & 3;if (!((d | 0) != 1 & a >>> 0 >= h >>> 0 & a >>> 0 < j >>> 0)) ya();e = k[j + 4 >> 2] | 0;if (!(e & 1)) ya();if (!d) {
        if (b >>> 0 < 256) {
          a = 0;return a | 0;
        }if (c >>> 0 >= (b + 4 | 0) >>> 0 ? (c - b | 0) >>> 0 <= k[1578] << 1 >>> 0 : 0) return a | 0;a = 0;return a | 0;
      }if (c >>> 0 >= b >>> 0) {
        c = c - b | 0;if (c >>> 0 <= 15) return a | 0;m = a + b | 0;k[o >> 2] = n & 1 | b | 2;k[m + 4 >> 2] = c | 3;o = m + c + 4 | 0;k[o >> 2] = k[o >> 2] | 1;Wd(m, c);return a | 0;
      }if ((j | 0) == (k[1464] | 0)) {
        m = (k[1461] | 0) + c | 0;c = m - b | 0;d = a + b | 0;if (m >>> 0 <= b >>> 0) {
          a = 0;return a | 0;
        }k[o >> 2] = n & 1 | b | 2;k[d + 4 >> 2] = c | 1;k[1464] = d;k[1461] = c;return a | 0;
      }if ((j | 0) == (k[1463] | 0)) {
        e = (k[1460] | 0) + c | 0;if (e >>> 0 < b >>> 0) {
          a = 0;return a | 0;
        }c = e - b | 0;d = n & 1;if (c >>> 0 > 15) {
          n = a + b | 0;m = n + c | 0;k[o >> 2] = d | b | 2;k[n + 4 >> 2] = c | 1;k[m >> 2] = c;d = m + 4 | 0;k[d >> 2] = k[d >> 2] & -2;d = n;
        } else {
          k[o >> 2] = d | e | 2;d = a + e + 4 | 0;k[d >> 2] = k[d >> 2] | 1;d = 0;c = 0;
        }k[1460] = c;k[1463] = d;return a | 0;
      }if (e & 2 | 0) {
        a = 0;return a | 0;
      }l = (e & -8) + c | 0;if (l >>> 0 < b >>> 0) {
        a = 0;return a | 0;
      }m = l - b | 0;f = e >>> 3;a: do {
        if (e >>> 0 >= 256) {
          g = k[j + 24 >> 2] | 0;e = k[j + 12 >> 2] | 0;do {
            if ((e | 0) == (j | 0)) {
              e = j + 16 | 0;d = e + 4 | 0;c = k[d >> 2] | 0;if (!c) {
                c = k[e >> 2] | 0;if (!c) {
                  i = 0;break;
                } else d = e;
              }while (1) {
                e = c + 20 | 0;f = k[e >> 2] | 0;if (f | 0) {
                  c = f;d = e;continue;
                }e = c + 16 | 0;f = k[e >> 2] | 0;if (!f) break;else {
                  c = f;d = e;
                }
              }if (d >>> 0 < h >>> 0) ya();else {
                k[d >> 2] = 0;i = c;break;
              }
            } else {
              f = k[j + 8 >> 2] | 0;if (f >>> 0 < h >>> 0) ya();c = f + 12 | 0;if ((k[c >> 2] | 0) != (j | 0)) ya();d = e + 8 | 0;if ((k[d >> 2] | 0) == (j | 0)) {
                k[c >> 2] = e;k[d >> 2] = f;i = e;break;
              } else ya();
            }
          } while (0);if (g | 0) {
            c = k[j + 28 >> 2] | 0;d = 6136 + (c << 2) | 0;do {
              if ((j | 0) == (k[d >> 2] | 0)) {
                k[d >> 2] = i;if (!i) {
                  k[1459] = k[1459] & ~(1 << c);break a;
                }
              } else if (g >>> 0 >= (k[1462] | 0) >>> 0) {
                k[g + 16 + (((k[g + 16 >> 2] | 0) != (j | 0) & 1) << 2) >> 2] = i;if (!i) break a;else break;
              } else ya();
            } while (0);e = k[1462] | 0;if (i >>> 0 < e >>> 0) ya();k[i + 24 >> 2] = g;c = j + 16 | 0;d = k[c >> 2] | 0;do {
              if (d | 0) if (d >>> 0 < e >>> 0) ya();else {
                k[i + 16 >> 2] = d;k[d + 24 >> 2] = i;break;
              }
            } while (0);c = k[c + 4 >> 2] | 0;if (c | 0) if (c >>> 0 < (k[1462] | 0) >>> 0) ya();else {
              k[i + 20 >> 2] = c;k[c + 24 >> 2] = i;break;
            }
          }
        } else {
          d = k[j + 8 >> 2] | 0;e = k[j + 12 >> 2] | 0;c = 5872 + (f << 1 << 2) | 0;if ((d | 0) != (c | 0)) {
            if (d >>> 0 < h >>> 0) ya();if ((k[d + 12 >> 2] | 0) != (j | 0)) ya();
          }if ((e | 0) == (d | 0)) {
            k[1458] = k[1458] & ~(1 << f);break;
          }if ((e | 0) != (c | 0)) {
            if (e >>> 0 < h >>> 0) ya();c = e + 8 | 0;if ((k[c >> 2] | 0) == (j | 0)) g = c;else ya();
          } else g = e + 8 | 0;k[d + 12 >> 2] = e;k[g >> 2] = d;
        }
      } while (0);c = n & 1;if (m >>> 0 < 16) {
        k[o >> 2] = l | c | 2;o = a + l + 4 | 0;k[o >> 2] = k[o >> 2] | 1;return a | 0;
      } else {
        n = a + b | 0;k[o >> 2] = c | b | 2;k[n + 4 >> 2] = m | 3;o = n + m + 4 | 0;k[o >> 2] = k[o >> 2] | 1;Wd(n, m);return a | 0;
      }return 0;
    }function Wd(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0;o = a + b | 0;c = k[a + 4 >> 2] | 0;a: do {
        if (!(c & 1)) {
          f = k[a >> 2] | 0;if (!(c & 3)) return;l = a + (0 - f) | 0;j = f + b | 0;h = k[1462] | 0;if (l >>> 0 < h >>> 0) ya();if ((l | 0) == (k[1463] | 0)) {
            a = o + 4 | 0;c = k[a >> 2] | 0;if ((c & 3 | 0) != 3) {
              r = l;e = j;break;
            }k[1460] = j;k[a >> 2] = c & -2;k[l + 4 >> 2] = j | 1;k[l + j >> 2] = j;return;
          }d = f >>> 3;if (f >>> 0 < 256) {
            c = k[l + 8 >> 2] | 0;b = k[l + 12 >> 2] | 0;a = 5872 + (d << 1 << 2) | 0;if ((c | 0) != (a | 0)) {
              if (c >>> 0 < h >>> 0) ya();if ((k[c + 12 >> 2] | 0) != (l | 0)) ya();
            }if ((b | 0) == (c | 0)) {
              k[1458] = k[1458] & ~(1 << d);r = l;e = j;break;
            }if ((b | 0) != (a | 0)) {
              if (b >>> 0 < h >>> 0) ya();a = b + 8 | 0;if ((k[a >> 2] | 0) == (l | 0)) g = a;else ya();
            } else g = b + 8 | 0;k[c + 12 >> 2] = b;k[g >> 2] = c;r = l;e = j;break;
          }f = k[l + 24 >> 2] | 0;b = k[l + 12 >> 2] | 0;do {
            if ((b | 0) == (l | 0)) {
              b = l + 16 | 0;c = b + 4 | 0;a = k[c >> 2] | 0;if (!a) {
                a = k[b >> 2] | 0;if (!a) {
                  i = 0;break;
                } else c = b;
              }while (1) {
                b = a + 20 | 0;d = k[b >> 2] | 0;if (d | 0) {
                  a = d;c = b;continue;
                }b = a + 16 | 0;d = k[b >> 2] | 0;if (!d) break;else {
                  a = d;c = b;
                }
              }if (c >>> 0 < h >>> 0) ya();else {
                k[c >> 2] = 0;i = a;break;
              }
            } else {
              d = k[l + 8 >> 2] | 0;if (d >>> 0 < h >>> 0) ya();a = d + 12 | 0;if ((k[a >> 2] | 0) != (l | 0)) ya();c = b + 8 | 0;if ((k[c >> 2] | 0) == (l | 0)) {
                k[a >> 2] = b;k[c >> 2] = d;i = b;break;
              } else ya();
            }
          } while (0);if (f) {
            a = k[l + 28 >> 2] | 0;c = 6136 + (a << 2) | 0;do {
              if ((l | 0) == (k[c >> 2] | 0)) {
                k[c >> 2] = i;if (!i) {
                  k[1459] = k[1459] & ~(1 << a);r = l;e = j;break a;
                }
              } else if (f >>> 0 >= (k[1462] | 0) >>> 0) {
                k[f + 16 + (((k[f + 16 >> 2] | 0) != (l | 0) & 1) << 2) >> 2] = i;if (!i) {
                  r = l;e = j;break a;
                } else break;
              } else ya();
            } while (0);b = k[1462] | 0;if (i >>> 0 < b >>> 0) ya();k[i + 24 >> 2] = f;a = l + 16 | 0;c = k[a >> 2] | 0;do {
              if (c | 0) if (c >>> 0 < b >>> 0) ya();else {
                k[i + 16 >> 2] = c;k[c + 24 >> 2] = i;break;
              }
            } while (0);a = k[a + 4 >> 2] | 0;if (a) {
              if (a >>> 0 < (k[1462] | 0) >>> 0) ya();else {
                k[i + 20 >> 2] = a;k[a + 24 >> 2] = i;r = l;e = j;break;
              }
            } else {
              r = l;e = j;
            }
          } else {
            r = l;e = j;
          }
        } else {
          r = a;e = b;
        }
      } while (0);g = k[1462] | 0;if (o >>> 0 < g >>> 0) ya();a = o + 4 | 0;c = k[a >> 2] | 0;if (!(c & 2)) {
        a = k[1463] | 0;if ((o | 0) == (k[1464] | 0)) {
          q = (k[1461] | 0) + e | 0;k[1461] = q;k[1464] = r;k[r + 4 >> 2] = q | 1;if ((r | 0) != (a | 0)) return;k[1463] = 0;k[1460] = 0;return;
        }if ((o | 0) == (a | 0)) {
          q = (k[1460] | 0) + e | 0;k[1460] = q;k[1463] = r;k[r + 4 >> 2] = q | 1;k[r + q >> 2] = q;return;
        }e = (c & -8) + e | 0;d = c >>> 3;b: do {
          if (c >>> 0 >= 256) {
            f = k[o + 24 >> 2] | 0;b = k[o + 12 >> 2] | 0;do {
              if ((b | 0) == (o | 0)) {
                b = o + 16 | 0;c = b + 4 | 0;a = k[c >> 2] | 0;if (!a) {
                  a = k[b >> 2] | 0;if (!a) {
                    n = 0;break;
                  } else c = b;
                }while (1) {
                  b = a + 20 | 0;d = k[b >> 2] | 0;if (d | 0) {
                    a = d;c = b;continue;
                  }b = a + 16 | 0;d = k[b >> 2] | 0;if (!d) break;else {
                    a = d;c = b;
                  }
                }if (c >>> 0 < g >>> 0) ya();else {
                  k[c >> 2] = 0;n = a;break;
                }
              } else {
                d = k[o + 8 >> 2] | 0;if (d >>> 0 < g >>> 0) ya();a = d + 12 | 0;if ((k[a >> 2] | 0) != (o | 0)) ya();c = b + 8 | 0;if ((k[c >> 2] | 0) == (o | 0)) {
                  k[a >> 2] = b;k[c >> 2] = d;n = b;break;
                } else ya();
              }
            } while (0);if (f | 0) {
              a = k[o + 28 >> 2] | 0;c = 6136 + (a << 2) | 0;do {
                if ((o | 0) == (k[c >> 2] | 0)) {
                  k[c >> 2] = n;if (!n) {
                    k[1459] = k[1459] & ~(1 << a);break b;
                  }
                } else if (f >>> 0 >= (k[1462] | 0) >>> 0) {
                  k[f + 16 + (((k[f + 16 >> 2] | 0) != (o | 0) & 1) << 2) >> 2] = n;if (!n) break b;else break;
                } else ya();
              } while (0);b = k[1462] | 0;if (n >>> 0 < b >>> 0) ya();k[n + 24 >> 2] = f;a = o + 16 | 0;c = k[a >> 2] | 0;do {
                if (c | 0) if (c >>> 0 < b >>> 0) ya();else {
                  k[n + 16 >> 2] = c;k[c + 24 >> 2] = n;break;
                }
              } while (0);a = k[a + 4 >> 2] | 0;if (a | 0) if (a >>> 0 < (k[1462] | 0) >>> 0) ya();else {
                k[n + 20 >> 2] = a;k[a + 24 >> 2] = n;break;
              }
            }
          } else {
            c = k[o + 8 >> 2] | 0;b = k[o + 12 >> 2] | 0;a = 5872 + (d << 1 << 2) | 0;if ((c | 0) != (a | 0)) {
              if (c >>> 0 < g >>> 0) ya();if ((k[c + 12 >> 2] | 0) != (o | 0)) ya();
            }if ((b | 0) == (c | 0)) {
              k[1458] = k[1458] & ~(1 << d);break;
            }if ((b | 0) != (a | 0)) {
              if (b >>> 0 < g >>> 0) ya();a = b + 8 | 0;if ((k[a >> 2] | 0) == (o | 0)) m = a;else ya();
            } else m = b + 8 | 0;k[c + 12 >> 2] = b;k[m >> 2] = c;
          }
        } while (0);k[r + 4 >> 2] = e | 1;k[r + e >> 2] = e;if ((r | 0) == (k[1463] | 0)) {
          k[1460] = e;return;
        }
      } else {
        k[a >> 2] = c & -2;k[r + 4 >> 2] = e | 1;k[r + e >> 2] = e;
      }a = e >>> 3;if (e >>> 0 < 256) {
        b = 5872 + (a << 1 << 2) | 0;c = k[1458] | 0;a = 1 << a;if (c & a) {
          a = b + 8 | 0;c = k[a >> 2] | 0;if (c >>> 0 < (k[1462] | 0) >>> 0) ya();else {
            p = c;q = a;
          }
        } else {
          k[1458] = c | a;p = b;q = b + 8 | 0;
        }k[q >> 2] = r;k[p + 12 >> 2] = r;k[r + 8 >> 2] = p;k[r + 12 >> 2] = b;return;
      }a = e >>> 8;if (a) {
        if (e >>> 0 > 16777215) a = 31;else {
          p = (a + 1048320 | 0) >>> 16 & 8;q = a << p;o = (q + 520192 | 0) >>> 16 & 4;q = q << o;a = (q + 245760 | 0) >>> 16 & 2;a = 14 - (o | p | a) + (q << a >>> 15) | 0;a = e >>> (a + 7 | 0) & 1 | a << 1;
        }
      } else a = 0;d = 6136 + (a << 2) | 0;k[r + 28 >> 2] = a;k[r + 20 >> 2] = 0;k[r + 16 >> 2] = 0;c = k[1459] | 0;b = 1 << a;if (!(c & b)) {
        k[1459] = c | b;k[d >> 2] = r;k[r + 24 >> 2] = d;k[r + 12 >> 2] = r;k[r + 8 >> 2] = r;return;
      }c = e << ((a | 0) == 31 ? 0 : 25 - (a >>> 1) | 0);d = k[d >> 2] | 0;while (1) {
        if ((k[d + 4 >> 2] & -8 | 0) == (e | 0)) {
          a = 121;break;
        }b = d + 16 + (c >>> 31 << 2) | 0;a = k[b >> 2] | 0;if (!a) {
          a = 118;break;
        } else {
          c = c << 1;d = a;
        }
      }if ((a | 0) == 118) {
        if (b >>> 0 < (k[1462] | 0) >>> 0) ya();k[b >> 2] = r;k[r + 24 >> 2] = d;k[r + 12 >> 2] = r;k[r + 8 >> 2] = r;return;
      } else if ((a | 0) == 121) {
        a = d + 8 | 0;c = k[a >> 2] | 0;q = k[1462] | 0;if (!(c >>> 0 >= q >>> 0 & d >>> 0 >= q >>> 0)) ya();k[c + 12 >> 2] = r;k[a >> 2] = r;k[r + 8 >> 2] = c;k[r + 12 >> 2] = d;k[r + 24 >> 2] = 0;return;
      }
    }function Xd(a) {
      a = a | 0;var b = 0;b = (a | 0) == 0 ? 1 : a;while (1) {
        a = Sd(b) | 0;if (a | 0) break;a = te() | 0;if (!a) {
          a = 0;break;
        }Ua[a & 1]();
      }return a | 0;
    }function Yd(a) {
      a = a | 0;return Xd(a) | 0;
    }function Zd(a) {
      a = a | 0;Td(a);return;
    }function _d(a) {
      a = a | 0;Zd(a);return;
    }function $d(a) {
      a = a | 0;return;
    }function ae(a) {
      a = a | 0;$d(a);Zd(a);return;
    }function be(a) {
      a = a | 0;return;
    }function ce(a) {
      a = a | 0;return;
    }function de(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0;g = u;u = u + 64 | 0;e = g;if (!(he(a, b, 0) | 0)) {
        if ((b | 0) != 0 ? (f = le(b, 96, 80, 0) | 0, (f | 0) != 0) : 0) {
          b = e + 4 | 0;d = b + 52 | 0;do {
            k[b >> 2] = 0;b = b + 4 | 0;
          } while ((b | 0) < (d | 0));k[e >> 2] = f;k[e + 8 >> 2] = a;k[e + 12 >> 2] = -1;k[e + 48 >> 2] = 1;Xa[k[(k[f >> 2] | 0) + 28 >> 2] & 3](f, e, k[c >> 2] | 0, 1);if ((k[e + 24 >> 2] | 0) == 1) {
            k[c >> 2] = k[e + 16 >> 2];b = 1;
          } else b = 0;
        } else b = 0;
      } else b = 1;u = g;return b | 0;
    }function ee(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;if (he(a, k[b + 8 >> 2] | 0, f) | 0) ke(0, b, c, d, e);return;
    }function fe(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0;do {
        if (!(he(a, k[b + 8 >> 2] | 0, e) | 0)) {
          if (he(a, k[b >> 2] | 0, e) | 0) {
            a = b + 32 | 0;if ((k[b + 16 >> 2] | 0) != (c | 0) ? (f = b + 20 | 0, (k[f >> 2] | 0) != (c | 0)) : 0) {
              k[a >> 2] = d;k[f >> 2] = c;d = b + 40 | 0;k[d >> 2] = (k[d >> 2] | 0) + 1;if ((k[b + 36 >> 2] | 0) == 1 ? (k[b + 24 >> 2] | 0) == 2 : 0) i[b + 54 >> 0] = 1;k[b + 44 >> 2] = 4;break;
            }if ((d | 0) == 1) k[a >> 2] = 1;
          }
        } else je(0, b, c, d);
      } while (0);return;
    }function ge(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;if (he(a, k[b + 8 >> 2] | 0, 0) | 0) ie(0, b, c, d);return;
    }function he(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return (a | 0) == (b | 0) | 0;
    }function ie(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0;a = b + 16 | 0;e = k[a >> 2] | 0;f = b + 36 | 0;g = b + 24 | 0;do {
        if (e) {
          if ((e | 0) != (c | 0)) {
            k[f >> 2] = (k[f >> 2] | 0) + 1;k[g >> 2] = 2;i[b + 54 >> 0] = 1;break;
          }if ((k[g >> 2] | 0) == 2) k[g >> 2] = d;
        } else {
          k[a >> 2] = c;k[g >> 2] = d;k[f >> 2] = 1;
        }
      } while (0);return;
    }function je(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0;if ((k[b + 4 >> 2] | 0) == (c | 0) ? (e = b + 28 | 0, (k[e >> 2] | 0) != 1) : 0) k[e >> 2] = d;return;
    }function ke(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          j = 0;i[b + 53 >> 0] = 1;do {
        if ((k[b + 4 >> 2] | 0) == (d | 0)) {
          i[b + 52 >> 0] = 1;d = b + 16 | 0;f = k[d >> 2] | 0;h = b + 54 | 0;j = b + 48 | 0;g = b + 24 | 0;a = b + 36 | 0;if (!f) {
            k[d >> 2] = c;k[g >> 2] = e;k[a >> 2] = 1;if (!((k[j >> 2] | 0) == 1 & (e | 0) == 1)) break;i[h >> 0] = 1;break;
          }if ((f | 0) != (c | 0)) {
            k[a >> 2] = (k[a >> 2] | 0) + 1;i[h >> 0] = 1;break;
          }a = k[g >> 2] | 0;if ((a | 0) == 2) {
            k[g >> 2] = e;a = e;
          }if ((k[j >> 2] | 0) == 1 & (a | 0) == 1) i[h >> 0] = 1;
        }
      } while (0);return;
    }function le(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0;p = u;u = u + 64 | 0;n = p;m = k[a >> 2] | 0;o = a + (k[m + -8 >> 2] | 0) | 0;m = k[m + -4 >> 2] | 0;k[n >> 2] = c;k[n + 4 >> 2] = a;k[n + 8 >> 2] = b;k[n + 12 >> 2] = d;a = n + 16 | 0;b = n + 20 | 0;d = n + 24 | 0;e = n + 28 | 0;f = n + 32 | 0;g = n + 40 | 0;h = a;l = h + 36 | 0;do {
        k[h >> 2] = 0;h = h + 4 | 0;
      } while ((h | 0) < (l | 0));j[a + 36 >> 1] = 0;i[a + 38 >> 0] = 0;a: do {
        if (he(m, c, 0) | 0) {
          k[n + 48 >> 2] = 1;Va[k[(k[m >> 2] | 0) + 20 >> 2] & 3](m, n, o, o, 1, 0);a = (k[d >> 2] | 0) == 1 ? o : 0;
        } else {
          Qa[k[(k[m >> 2] | 0) + 24 >> 2] & 3](m, n, o, 1, 0);switch (k[n + 36 >> 2] | 0) {case 0:
              {
                a = (k[g >> 2] | 0) == 1 & (k[e >> 2] | 0) == 1 & (k[f >> 2] | 0) == 1 ? k[b >> 2] | 0 : 0;break a;
              }case 1:
              break;default:
              {
                a = 0;break a;
              }}if ((k[d >> 2] | 0) != 1 ? !((k[g >> 2] | 0) == 0 & (k[e >> 2] | 0) == 1 & (k[f >> 2] | 0) == 1) : 0) {
            a = 0;break;
          }a = k[a >> 2] | 0;
        }
      } while (0);u = p;return a | 0;
    }function me(a) {
      a = a | 0;$d(a);Zd(a);return;
    }function ne(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;if (he(a, k[b + 8 >> 2] | 0, f) | 0) ke(0, b, c, d, e);else {
        a = k[a + 8 >> 2] | 0;Va[k[(k[a >> 2] | 0) + 20 >> 2] & 3](a, b, c, d, e, f);
      }return;
    }function oe(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          j = 0;do {
        if (!(he(a, k[b + 8 >> 2] | 0, e) | 0)) {
          f = a + 8 | 0;if (!(he(a, k[b >> 2] | 0, e) | 0)) {
            h = k[f >> 2] | 0;Qa[k[(k[h >> 2] | 0) + 24 >> 2] & 3](h, b, c, d, e);break;
          }a = b + 32 | 0;if ((k[b + 16 >> 2] | 0) != (c | 0) ? (g = b + 20 | 0, (k[g >> 2] | 0) != (c | 0)) : 0) {
            k[a >> 2] = d;d = b + 44 | 0;if ((k[d >> 2] | 0) == 4) break;a = b + 52 | 0;i[a >> 0] = 0;j = b + 53 | 0;i[j >> 0] = 0;f = k[f >> 2] | 0;Va[k[(k[f >> 2] | 0) + 20 >> 2] & 3](f, b, c, c, 1, e);if (i[j >> 0] | 0) {
              if (!(i[a >> 0] | 0)) {
                a = 3;h = 11;
              } else a = 3;
            } else {
              a = 4;h = 11;
            }if ((h | 0) == 11) {
              k[g >> 2] = c;j = b + 40 | 0;k[j >> 2] = (k[j >> 2] | 0) + 1;if ((k[b + 36 >> 2] | 0) == 1 ? (k[b + 24 >> 2] | 0) == 2 : 0) i[b + 54 >> 0] = 1;
            }k[d >> 2] = a;break;
          }if ((d | 0) == 1) k[a >> 2] = 1;
        } else je(0, b, c, d);
      } while (0);return;
    }function pe(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;if (he(a, k[b + 8 >> 2] | 0, 0) | 0) ie(0, b, c, d);else {
        a = k[a + 8 >> 2] | 0;Xa[k[(k[a >> 2] | 0) + 28 >> 2] & 3](a, b, c, d);
      }return;
    }function re(a) {
      a = a | 0;if ((i[a >> 0] | 0) == 1) a = 0;else {
        i[a >> 0] = 1;a = 1;
      }return a | 0;
    }function te() {
      var a = 0;a = k[1582] | 0;k[1582] = a + 0;return a | 0;
    }function ue() {}function ve(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;return (N = d, a - c >>> 0 | 0) | 0;
    }function we(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;c = a + c >>> 0;return (N = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
    }function xe(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0;f = a + c | 0;b = b & 255;if ((c | 0) >= 67) {
        while (a & 3) {
          i[a >> 0] = b;a = a + 1 | 0;
        }d = f & -4 | 0;e = d - 64 | 0;g = b | b << 8 | b << 16 | b << 24;while ((a | 0) <= (e | 0)) {
          k[a >> 2] = g;k[a + 4 >> 2] = g;k[a + 8 >> 2] = g;k[a + 12 >> 2] = g;k[a + 16 >> 2] = g;k[a + 20 >> 2] = g;k[a + 24 >> 2] = g;k[a + 28 >> 2] = g;k[a + 32 >> 2] = g;k[a + 36 >> 2] = g;k[a + 40 >> 2] = g;k[a + 44 >> 2] = g;k[a + 48 >> 2] = g;k[a + 52 >> 2] = g;k[a + 56 >> 2] = g;k[a + 60 >> 2] = g;a = a + 64 | 0;
        }while ((a | 0) < (d | 0)) {
          k[a >> 2] = g;a = a + 4 | 0;
        }
      }while ((a | 0) < (f | 0)) {
        i[a >> 0] = b;a = a + 1 | 0;
      }return f - c | 0;
    }function ye(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;if ((c | 0) < 32) {
        N = b >>> c;return a >>> c | (b & (1 << c) - 1) << 32 - c;
      }N = 0;return b >>> c - 32 | 0;
    }function ze(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;if ((c | 0) < 32) {
        N = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;return a << c;
      }N = a << c - 32;return 0;
    }function Ae(a) {
      a = a | 0;var b = 0;b = i[w + (a & 255) >> 0] | 0;if ((b | 0) < 8) return b | 0;b = i[w + (a >> 8 & 255) >> 0] | 0;if ((b | 0) < 8) return b + 8 | 0;b = i[w + (a >> 16 & 255) >> 0] | 0;if ((b | 0) < 8) return b + 16 | 0;return (i[w + (a >>> 24) >> 0] | 0) + 24 | 0;
    }function Be(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0;l = a;i = b;j = i;g = c;n = d;h = n;if (!j) {
        f = (e | 0) != 0;if (!h) {
          if (f) {
            k[e >> 2] = (l >>> 0) % (g >>> 0);k[e + 4 >> 2] = 0;
          }n = 0;e = (l >>> 0) / (g >>> 0) >>> 0;return (N = n, e) | 0;
        } else {
          if (!f) {
            n = 0;e = 0;return (N = n, e) | 0;
          }k[e >> 2] = a | 0;k[e + 4 >> 2] = b & 0;n = 0;e = 0;return (N = n, e) | 0;
        }
      }f = (h | 0) == 0;do {
        if (g) {
          if (!f) {
            f = (da(h | 0) | 0) - (da(j | 0) | 0) | 0;if (f >>> 0 <= 31) {
              m = f + 1 | 0;h = 31 - f | 0;b = f - 31 >> 31;g = m;a = l >>> (m >>> 0) & b | j << h;b = j >>> (m >>> 0) & b;f = 0;h = l << h;break;
            }if (!e) {
              n = 0;e = 0;return (N = n, e) | 0;
            }k[e >> 2] = a | 0;k[e + 4 >> 2] = i | b & 0;n = 0;e = 0;return (N = n, e) | 0;
          }f = g - 1 | 0;if (f & g | 0) {
            h = (da(g | 0) | 0) + 33 - (da(j | 0) | 0) | 0;p = 64 - h | 0;m = 32 - h | 0;i = m >> 31;o = h - 32 | 0;b = o >> 31;g = h;a = m - 1 >> 31 & j >>> (o >>> 0) | (j << m | l >>> (h >>> 0)) & b;b = b & j >>> (h >>> 0);f = l << p & i;h = (j << p | l >>> (o >>> 0)) & i | l << m & h - 33 >> 31;break;
          }if (e | 0) {
            k[e >> 2] = f & l;k[e + 4 >> 2] = 0;
          }if ((g | 0) == 1) {
            o = i | b & 0;p = a | 0 | 0;return (N = o, p) | 0;
          } else {
            p = Ae(g | 0) | 0;o = j >>> (p >>> 0) | 0;p = j << 32 - p | l >>> (p >>> 0) | 0;return (N = o, p) | 0;
          }
        } else {
          if (f) {
            if (e | 0) {
              k[e >> 2] = (j >>> 0) % (g >>> 0);k[e + 4 >> 2] = 0;
            }o = 0;p = (j >>> 0) / (g >>> 0) >>> 0;return (N = o, p) | 0;
          }if (!l) {
            if (e | 0) {
              k[e >> 2] = 0;k[e + 4 >> 2] = (j >>> 0) % (h >>> 0);
            }o = 0;p = (j >>> 0) / (h >>> 0) >>> 0;return (N = o, p) | 0;
          }f = h - 1 | 0;if (!(f & h)) {
            if (e | 0) {
              k[e >> 2] = a | 0;k[e + 4 >> 2] = f & j | b & 0;
            }o = 0;p = j >>> ((Ae(h | 0) | 0) >>> 0);return (N = o, p) | 0;
          }f = (da(h | 0) | 0) - (da(j | 0) | 0) | 0;if (f >>> 0 <= 30) {
            b = f + 1 | 0;h = 31 - f | 0;g = b;a = j << h | l >>> (b >>> 0);b = j >>> (b >>> 0);f = 0;h = l << h;break;
          }if (!e) {
            o = 0;p = 0;return (N = o, p) | 0;
          }k[e >> 2] = a | 0;k[e + 4 >> 2] = i | b & 0;o = 0;p = 0;return (N = o, p) | 0;
        }
      } while (0);if (!g) {
        j = h;i = 0;h = 0;
      } else {
        m = c | 0 | 0;l = n | d & 0;j = we(m | 0, l | 0, -1, -1) | 0;c = N;i = h;h = 0;do {
          d = i;i = f >>> 31 | i << 1;f = h | f << 1;d = a << 1 | d >>> 31 | 0;n = a >>> 31 | b << 1 | 0;ve(j | 0, c | 0, d | 0, n | 0) | 0;p = N;o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;h = o & 1;a = ve(d | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;b = N;g = g - 1 | 0;
        } while ((g | 0) != 0);j = i;i = 0;
      }g = 0;if (e | 0) {
        k[e >> 2] = a;k[e + 4 >> 2] = b;
      }o = (f | 0) >>> 31 | (j | g) << 1 | (g << 1 | f >>> 31) & 0 | i;p = (f << 1 | 0 >>> 31) & -2 | h;return (N = o, p) | 0;
    }function Ce(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;return Be(a, b, c, d, 0) | 0;
    }function De(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0,
          f = 0;f = a & 65535;e = b & 65535;c = aa(e, f) | 0;d = a >>> 16;a = (c >>> 16) + (aa(e, d) | 0) | 0;e = b >>> 16;b = aa(e, f) | 0;return (N = (a >>> 16) + (aa(e, d) | 0) + (((a & 65535) + b | 0) >>> 16) | 0, a + b << 16 | c & 65535 | 0) | 0;
    }function Ee(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0;e = a;f = c;c = De(e, f) | 0;a = N;return (N = (aa(b, f) | 0) + (aa(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
    }function Fe(a) {
      a = a | 0;var b = 0,
          c = 0;c = a + 15 & -16 | 0;b = k[r >> 2] | 0;a = b + c | 0;if ((c | 0) > 0 & (a | 0) < (b | 0) | (a | 0) < 0) {
        ia() | 0;za(12);return -1;
      }k[r >> 2] = a;if ((a | 0) > (ha() | 0) ? (ga() | 0) == 0 : 0) {
        za(12);k[r >> 2] = b;return -1;
      }return b | 0;
    }function Ge(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0;f = u;u = u + 16 | 0;e = f | 0;Be(a, b, c, d, e) | 0;u = f;return (N = k[e + 4 >> 2] | 0, k[e >> 2] | 0) | 0;
    }function He(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0;if ((c | 0) >= 8192) return Da(a | 0, b | 0, c | 0) | 0;f = a | 0;e = a + c | 0;if ((a & 3) == (b & 3)) {
        while (a & 3) {
          if (!c) return f | 0;i[a >> 0] = i[b >> 0] | 0;a = a + 1 | 0;b = b + 1 | 0;c = c - 1 | 0;
        }c = e & -4 | 0;d = c - 64 | 0;while ((a | 0) <= (d | 0)) {
          k[a >> 2] = k[b >> 2];k[a + 4 >> 2] = k[b + 4 >> 2];k[a + 8 >> 2] = k[b + 8 >> 2];k[a + 12 >> 2] = k[b + 12 >> 2];k[a + 16 >> 2] = k[b + 16 >> 2];k[a + 20 >> 2] = k[b + 20 >> 2];k[a + 24 >> 2] = k[b + 24 >> 2];k[a + 28 >> 2] = k[b + 28 >> 2];k[a + 32 >> 2] = k[b + 32 >> 2];k[a + 36 >> 2] = k[b + 36 >> 2];k[a + 40 >> 2] = k[b + 40 >> 2];k[a + 44 >> 2] = k[b + 44 >> 2];k[a + 48 >> 2] = k[b + 48 >> 2];k[a + 52 >> 2] = k[b + 52 >> 2];k[a + 56 >> 2] = k[b + 56 >> 2];k[a + 60 >> 2] = k[b + 60 >> 2];a = a + 64 | 0;b = b + 64 | 0;
        }while ((a | 0) < (c | 0)) {
          k[a >> 2] = k[b >> 2];a = a + 4 | 0;b = b + 4 | 0;
        }
      } else {
        c = e - 4 | 0;while ((a | 0) < (c | 0)) {
          i[a >> 0] = i[b >> 0] | 0;i[a + 1 >> 0] = i[b + 1 >> 0] | 0;i[a + 2 >> 0] = i[b + 2 >> 0] | 0;i[a + 3 >> 0] = i[b + 3 >> 0] | 0;a = a + 4 | 0;b = b + 4 | 0;
        }
      }while ((a | 0) < (e | 0)) {
        i[a >> 0] = i[b >> 0] | 0;a = a + 1 | 0;b = b + 1 | 0;
      }return f | 0;
    }function Ie(a) {
      a = a | 0;return (a & 255) << 24 | (a >> 8 & 255) << 16 | (a >> 16 & 255) << 8 | a >>> 24 | 0;
    }function Je(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;return Pa[a & 7](b | 0, c | 0, d | 0) | 0;
    }function Ke(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;Qa[a & 3](b | 0, c | 0, d | 0, e | 0, f | 0);
    }function Le(a, b) {
      a = a | 0;b = b | 0;Ra[a & 15](b | 0);
    }function Me(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;Sa[a & 3](b | 0, c | 0);
    }function Ne(a, b) {
      a = a | 0;b = b | 0;return Ta[a & 1](b | 0) | 0;
    }function Oe(a) {
      a = a | 0;Ua[a & 1]();
    }function Pe(a, b, c, d, e, f, g) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;Va[a & 3](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0);
    }function Qe(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return Wa[a & 3](b | 0, c | 0) | 0;
    }function Re(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;Xa[a & 3](b | 0, c | 0, d | 0, e | 0);
    }function Se(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;ea(0);return 0;
    }function Te(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;ea(1);
    }function Ue(a) {
      a = a | 0;ea(2);
    }function Ve(a, b) {
      a = a | 0;b = b | 0;ea(3);
    }function We(a) {
      a = a | 0;ea(4);return 0;
    }function Xe() {
      ea(5);
    }function Ye() {
      Ka();
    }function Ze(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;ea(6);
    }function _e(a, b) {
      a = a | 0;b = b | 0;ea(7);return 0;
    }function $e(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;ea(8);
    }

    // EMSCRIPTEN_END_FUNCS
    var Pa = [Se, Bc, Cc, Ic, de, Se, Se, Se];var Qa = [Te, fe, oe, Te];var Ra = [Ue, Bb, Cb, Db, Lb, Vb, Sb, Pb, Mb, $d, ae, be, ce, me, Jb, Ue];var Sa = [Ve, Ub, Rb, Ob];var Ta = [We, Ac];var Ua = [Xe, Ye];var Va = [Ze, ee, ne, Ze];var Wa = [_e, Tb, Qb, Nb];var Xa = [$e, ge, pe, $e];return _ref = { _conflictSize: wb, _Solver_delete: eb, _memset: xe, _modelValue: tb, _bitshift64Lshr: ye, _solve_assumptions: qb, _solve: pb, _bitshift64Shl: ze, _malloc: Sd, _fflush: wd, _Solver_new: db, _getImplies_assumptions: zb, _nClauses: gb, _sbrk: Fe, _getModelTrues: vb, _check_complete: rb, _memcpy: He, _llvm_bswap_i32: Ie, _newVar: lb, ___muldi3: Ee, _unsatCore: xb, _setRndSeed: kb, ___uremdi3: Ge, _addUnit: ob, _addClause: nb, _i64Subtract: ve, ___udivmoddi4: Be, _i64Add: we, _emscripten_get_global_libc: Jc, _setPhaseSaving: hb, _fillModel: ub, ___udivdi3: Ce, ___errno_location: Ec, ___muldsi3: De, _free: Td, _llvm_cttz_i32: Ae, _addAtMost: mb, _setRndInitAct: jb, _setRndPol: ib, _nVars: fb, _getImplies: yb, _simplify: sb, __GLOBAL__sub_I_Solver_cc: Ib, runPostSets: ue, _emscripten_replace_memory: Oa, stackAlloc: Ya, stackSave: Za, stackRestore: _a, establishStackSpace: $a, setTempRet0: bb, getTempRet0: cb, setThrew: ab }, defineProperty(_ref, "stackAlloc", Ya), defineProperty(_ref, "stackSave", Za), defineProperty(_ref, "stackRestore", _a), defineProperty(_ref, "establishStackSpace", $a), defineProperty(_ref, "setThrew", ab), defineProperty(_ref, "setTempRet0", bb), defineProperty(_ref, "getTempRet0", cb), defineProperty(_ref, "dynCall_iiii", Je), defineProperty(_ref, "dynCall_viiiii", Ke), defineProperty(_ref, "dynCall_vi", Le), defineProperty(_ref, "dynCall_vii", Me), defineProperty(_ref, "dynCall_ii", Ne), defineProperty(_ref, "dynCall_v", Oe), defineProperty(_ref, "dynCall_viiiiii", Pe), defineProperty(_ref, "dynCall_iii", Qe), defineProperty(_ref, "dynCall_viiii", Re), _ref;
  }(

  // EMSCRIPTEN_END_ASM
  _b2.B, _b2.C, buffer);_b2._conflictSize = Z._conflictSize;_b2.stackSave = Z.stackSave;_b2.getTempRet0 = Z.getTempRet0;_b2._Solver_delete = Z._Solver_delete;var mb = _b2.___udivdi3 = Z.___udivdi3;_b2._modelValue = Z._modelValue;var gb = _b2._bitshift64Lshr = Z._bitshift64Lshr;_b2._solve_assumptions = Z._solve_assumptions;
  _b2._solve = Z._solve;var hb = _b2._bitshift64Shl = Z._bitshift64Shl;_b2._addAtMost = Z._addAtMost;_b2._addClause = Z._addClause;_b2._fflush = Z._fflush;_b2._Solver_new = Z._Solver_new;var fb = _b2._memset = Z._memset;_b2._nClauses = Z._nClauses;var pb = _b2._sbrk = Z._sbrk;_b2._getModelTrues = Z._getModelTrues;_b2._check_complete = Z._check_complete;var rb = _b2._memcpy = Z._memcpy;_b2.___errno_location = Z.___errno_location;var ob = _b2.___muldi3 = Z.___muldi3;_b2._unsatCore = Z._unsatCore;_b2._setRndSeed = Z._setRndSeed;var qb = _b2.___uremdi3 = Z.___uremdi3;_b2._addUnit = Z._addUnit;
  _b2.stackAlloc = Z.stackAlloc;_b2._newVar = Z._newVar;var bb = _b2._i64Subtract = Z._i64Subtract,
      lb = _b2.___udivmoddi4 = Z.___udivmoddi4;_b2.setTempRet0 = Z.setTempRet0;var cb = _b2._i64Add = Z._i64Add;_b2._emscripten_get_global_libc = Z._emscripten_get_global_libc;_b2._setPhaseSaving = Z._setPhaseSaving;_b2._fillModel = Z._fillModel;var Za = _b2.__GLOBAL__sub_I_Solver_cc = Z.__GLOBAL__sub_I_Solver_cc,
      tb = _b2._llvm_bswap_i32 = Z._llvm_bswap_i32,
      nb = _b2.___muldsi3 = Z.___muldsi3,
      ya = _b2._free = Z._free;_b2.runPostSets = Z.runPostSets;_b2.setThrew = Z.setThrew;
  _b2.establishStackSpace = Z.establishStackSpace;_b2.stackRestore = Z.stackRestore;var kb = _b2._llvm_cttz_i32 = Z._llvm_cttz_i32,
      N = _b2._malloc = Z._malloc;_b2._setRndInitAct = Z._setRndInitAct;_b2._getImplies_assumptions = Z._getImplies_assumptions;var La = _b2._emscripten_replace_memory = Z._emscripten_replace_memory;_b2._setRndPol = Z._setRndPol;_b2._nVars = Z._nVars;_b2._simplify = Z._simplify;_b2._getImplies = Z._getImplies;_b2.dynCall_iiii = Z.dynCall_iiii;_b2.dynCall_viiiii = Z.dynCall_viiiii;_b2.dynCall_vi = Z.dynCall_vi;_b2.dynCall_vii = Z.dynCall_vii;
  _b2.dynCall_ii = Z.dynCall_ii;_b2.dynCall_v = Z.dynCall_v;_b2.dynCall_viiiiii = Z.dynCall_viiiiii;_b2.dynCall_iii = Z.dynCall_iii;_b2.dynCall_viiii = Z.dynCall_viiii;x.g = _b2.stackAlloc;x.n = _b2.stackSave;x.h = _b2.stackRestore;x.Q = _b2.establishStackSpace;x.c = _b2.setTempRet0;x.G = _b2.getTempRet0;_b2.asm = Z;function r(a) {
    this.name = "ExitStatus";this.message = "Program terminated with exit(" + a + ")";this.status = a;
  }r.prototype = Error();r.prototype.constructor = r;var vb = null,
      T = function wb() {
    _b2.calledRun || xb();_b2.calledRun || (T = wb);
  };
  _b2.callMain = _b2.M = function (a) {
    function c() {
      for (var a = 0; 3 > a; a++) {
        e.push(0);
      }
    }a = a || [];P || (P = !0, Q(Qa));var d = a.length + 1,
        e = [K(Wa(_b2.thisProgram), "i8", 0)];c();for (var f = 0; f < d - 1; f += 1) {
      e.push(K(Wa(a[f]), "i8", 0)), c();
    }e.push(0);e = K(e, "i32", 0);try {
      var l = _b2._main(d, e, 0);yb(l, !0);
    } catch (h) {
      h instanceof r || ("SimulateInfiniteLoop" == h ? _b2.noExitRuntime = !0 : ((a = h) && "object" === (typeof h === "undefined" ? "undefined" : _typeof(h)) && h.stack && (a = [h, h.stack]), _b2.f("exception thrown: " + a), _b2.quit(1, h)));
    } finally {}
  };
  function xb(a) {
    function c() {
      if (!_b2.calledRun && (_b2.calledRun = !0, !C)) {
        P || (P = !0, Q(Qa));Q(Ra);if (_b2.onRuntimeInitialized) _b2.onRuntimeInitialized();_b2._main && zb && _b2.callMain(a);if (_b2.postRun) for ("function" == typeof _b2.postRun && (_b2.postRun = [_b2.postRun]); _b2.postRun.length;) {
          Va(_b2.postRun.shift());
        }Q(Ta);
      }
    }a = a || _b2.arguments;null === vb && (vb = Date.now());if (!(0 < R)) {
      if (_b2.preRun) for ("function" == typeof _b2.preRun && (_b2.preRun = [_b2.preRun]); _b2.preRun.length;) {
        Ua(_b2.preRun.shift());
      }Q(Pa);0 < R || _b2.calledRun || (_b2.setStatus ? (_b2.setStatus("Running..."), setTimeout(function () {
        setTimeout(function () {
          _b2.setStatus("");
        }, 1);c();
      }, 1)) : c());
    }
  }_b2.run = _b2.run = xb;function yb(a, c) {
    if (!c || !_b2.noExitRuntime) {
      if (!_b2.noExitRuntime && (C = !0, u = void 0, Q(Sa), _b2.onExit)) _b2.onExit(a);q && process.exit(a);_b2.quit(a, new r(a));
    }
  }_b2.exit = _b2.exit = yb;var Ab = [];
  function D(a) {
    void 0 !== a ? (_b2.print(a), _b2.f(a), a = JSON.stringify(a)) : a = "";C = !0;var c = "abort(" + a + ") at " + za() + "\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";Ab && Ab.forEach(function (d) {
      c = d(c, a);
    });throw c;
  }_b2.abort = _b2.abort = D;if (_b2.preInit) for ("function" == typeof _b2.preInit && (_b2.preInit = [_b2.preInit]); 0 < _b2.preInit.length;) {
    _b2.preInit.pop()();
  }var zb = !0;_b2.noInitialRun && (zb = !1);xb();"undefined" !== 'object' && (module.exports = _b2);
});

var Solver = function () {
    function Solver(lib) {
        classCallCheck(this, Solver);

        this.lib = lib;
        this.S = this.lib.ccall('Solver_new', 'number', []);
    }

    createClass(Solver, [{
        key: 'delete',
        value: function _delete() {
            this.lib.ccall('Solver_delete', 'number', ['number'], [this.S]);
        }
    }, {
        key: 'nvars',
        value: function nvars() {
            return this.lib.ccall('nVars', 'number', ['number'], [this.S]);
        }
    }, {
        key: 'nclauses',
        value: function nclauses() {
            return this.lib.ccall('nClauses', 'number', ['number'], [this.S]);
        }
    }, {
        key: 'new_var',
        value: function new_var() {
            return this.lib.ccall('newVar', 'number', ['number', 'number', 'number'], [this.S, 2, 1]);
        }
    }, {
        key: 'add_clause',
        value: function add_clause(clause) {
            // TODO: checking, singleton detection (see pyminisolvers)
            return this.lib.ccall('addClause', 'number', ['number', 'number', 'array'], [this.S, clause.length, new Uint8Array(new Int32Array(clause).buffer)]);
        }
    }, {
        key: 'solve',
        value: function solve() {
            return this.lib.ccall('solve', 'number', ['number'], [this.S]);
        }
    }, {
        key: 'get_model',
        value: function get_model() {
            var nv = this.nvars();
            var ptr = this.lib._malloc(4 * nv);
            var modelarr = this.lib.HEAP32.subarray(ptr >> 2, (ptr >> 2) + nv);
            this.lib.ccall('fillModel', null, ['number', 'number', 'number', 'number'], [this.S, ptr, 0, this.nvars()]);
            var model = new Int32Array(modelarr); // copy array (can't use Array.from or TypedArray.slice() in IE11...)
            this.lib._free(ptr);
            return model;
        }
    }]);
    return Solver;
}();

var MinisatSolver = function (_Solver) {
    inherits(MinisatSolver, _Solver);

    function MinisatSolver() {
        classCallCheck(this, MinisatSolver);
        return possibleConstructorReturn(this, (MinisatSolver.__proto__ || Object.getPrototypeOf(MinisatSolver)).call(this, libminisat));
    }

    return MinisatSolver;
}(Solver);

var MinicardSolver = function (_Solver2) {
    inherits(MinicardSolver, _Solver2);

    function MinicardSolver() {
        classCallCheck(this, MinicardSolver);
        return possibleConstructorReturn(this, (MinicardSolver.__proto__ || Object.getPrototypeOf(MinicardSolver)).call(this, libminicard));
    }

    return MinicardSolver;
}(Solver);

exports.MinisatSolver = MinisatSolver;
exports.MinicardSolver = MinicardSolver;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=minisolvers.js.map