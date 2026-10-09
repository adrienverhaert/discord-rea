/* Recovered shipped factory. Module 311358.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 55162..136743
 * Raw property SHA-256: c12c4ea2a453351a023bc442ef90306c832a93be084b93e17ab4ecff80cec74f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { default: () => rv }));
  var r = n(728898),
    o = n(128170),
    a = n(29583),
    i = n(291048),
    u = n(84776),
    l = n(368617),
    s = n(998280),
    c = n(618027);
  function f(e) {
    return (f =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function d(e, t) {
    if ("function" != typeof t && null !== t)
      throw TypeError("Super expression must either be null or a function");
    ((e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      t && h(e, t));
  }
  function h(e, t) {
    return (h =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function p(e) {
    var t = (function () {
      if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0);
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var n,
        r,
        o,
        a = m(e);
      return (
        (o = t ? Reflect.construct(a, arguments, m(this).constructor) : a.apply(this, arguments)),
        (n = this),
        (r = o) && ("object" === f(r) || "function" == typeof r) ? r : y(n)
      );
    };
  }
  function y(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function m(e) {
    return (m = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function v(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
  }
  function g(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      ((r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r));
    }
  }
  function b(e, t, n) {
    return (t && g(e.prototype, t), n && g(e, n), e);
  }
  function w(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var _ = (function () {
      function e() {
        (v(this, e), w(this, "subPriority", 0));
      }
      return (
        b(e, [
          {
            key: "validate",
            value: function (e, t) {
              return !0;
            },
          },
        ]),
        e
      );
    })(),
    k = (function (e) {
      d(n, e);
      var t = p(n);
      function n(e, r, o, a, i) {
        var u;
        return (
          v(this, n),
          ((u = t.call(this)).value = e),
          (u.validateValue = r),
          (u.setValue = o),
          (u.priority = a),
          i && (u.subPriority = i),
          u
        );
      }
      return (
        b(n, [
          {
            key: "validate",
            value: function (e, t) {
              return this.validateValue(e, this.value, t);
            },
          },
          {
            key: "set",
            value: function (e, t, n) {
              return this.setValue(e, t, this.value, n);
            },
          },
        ]),
        n
      );
    })(_),
    x = (function (e) {
      d(n, e);
      var t = p(n);
      function n() {
        var e;
        v(this, n);
        for (var r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
        return (
          w(y((e = t.call.apply(t, [this].concat(o)))), "priority", 10),
          w(y(e), "subPriority", -1),
          e
        );
      }
      return (
        b(n, [
          {
            key: "set",
            value: function (e, t) {
              if (t.timestampIsSet) return e;
              var n = new Date(0);
              return (
                n.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
                n.setHours(
                  e.getUTCHours(),
                  e.getUTCMinutes(),
                  e.getUTCSeconds(),
                  e.getUTCMilliseconds(),
                ),
                n
              );
            },
          },
        ]),
        n
      );
    })(_),
    S = (function () {
      var e;
      function t() {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
      }
      return (
        (e = [
          {
            key: "run",
            value: function (e, t, n, r) {
              var o = this.parse(e, t, n, r);
              return o
                ? {
                    setter: new k(
                      o.value,
                      this.validate,
                      this.set,
                      this.priority,
                      this.subPriority,
                    ),
                    rest: o.rest,
                  }
                : null;
            },
          },
          {
            key: "validate",
            value: function (e, t, n) {
              return !0;
            },
          },
        ]),
        (function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r));
          }
        })(t.prototype, e),
        t
      );
    })();
  function E(e) {
    return (E =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function O(e, t) {
    return (O =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function T(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function R(e) {
    return (R = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function A(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var C = (function (e) {
      if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function");
      ((o.prototype = Object.create(e && e.prototype, {
        constructor: { value: o, writable: !0, configurable: !0 },
      })),
        e && O(o, e));
      var t,
        n,
        r =
          ((t = (function () {
            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var e,
              n,
              r,
              a = R(o);
            return (
              (r = t
                ? Reflect.construct(a, arguments, R(this).constructor)
                : a.apply(this, arguments)),
              (e = this),
              (n = r) && ("object" === E(n) || "function" == typeof n) ? n : T(e)
            );
          });
      function o() {
        var e;
        if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
        return (
          A(T((e = r.call.apply(r, [this].concat(n)))), "priority", 140),
          A(T(e), "incompatibleTokens", ["R", "u", "t", "T"]),
          e
        );
      }
      return (
        (n = [
          {
            key: "parse",
            value: function (e, t, n) {
              switch (t) {
                case "G":
                case "GG":
                case "GGG":
                  return n.era(e, { width: "abbreviated" }) || n.era(e, { width: "narrow" });
                case "GGGGG":
                  return n.era(e, { width: "narrow" });
                default:
                  return (
                    n.era(e, { width: "wide" }) ||
                    n.era(e, { width: "abbreviated" }) ||
                    n.era(e, { width: "narrow" })
                  );
              }
            },
          },
          {
            key: "set",
            value: function (e, t, n) {
              return ((t.era = n), e.setUTCFullYear(n, 0, 1), e.setUTCHours(0, 0, 0, 0), e);
            },
          },
        ]),
        (function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r));
          }
        })(o.prototype, n),
        o
      );
    })(S),
    M = n(575223),
    D = /^(1[0-2]|0?\d)/,
    P = /^(3[0-1]|[0-2]?\d)/,
    N = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    j = /^(5[0-3]|[0-4]?\d)/,
    L = /^(2[0-3]|[0-1]?\d)/,
    z = /^(2[0-4]|[0-1]?\d)/,
    U = /^(1[0-1]|0?\d)/,
    Y = /^(1[0-2]|0?\d)/,
    I = /^[0-5]?\d/,
    F = /^[0-5]?\d/,
    W = /^\d/,
    H = /^\d{1,2}/,
    B = /^\d{1,3}/,
    q = /^\d{1,4}/,
    V = /^-?\d+/,
    $ = /^-?\d/,
    G = /^-?\d{1,2}/,
    X = /^-?\d{1,3}/,
    Q = /^-?\d{1,4}/,
    Z = /^([+-])(\d{2})(\d{2})?|Z/,
    K = /^([+-])(\d{2})(\d{2})|Z/,
    J = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    ee = /^([+-])(\d{2}):(\d{2})|Z/,
    et = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
  function en(e, t) {
    return e ? { value: t(e.value), rest: e.rest } : e;
  }
  function er(e, t) {
    var n = t.match(e);
    return n ? { value: parseInt(n[0], 10), rest: t.slice(n[0].length) } : null;
  }
  function eo(e, t) {
    var n = t.match(e);
    if (!n) return null;
    if ("Z" === n[0]) return { value: 0, rest: t.slice(1) };
    var r = "+" === n[1] ? 1 : -1,
      o = n[2] ? parseInt(n[2], 10) : 0,
      a = n[3] ? parseInt(n[3], 10) : 0,
      i = n[5] ? parseInt(n[5], 10) : 0;
    return { value: r * (o * M.s0 + a * M.Cg + i * M._m), rest: t.slice(n[0].length) };
  }
  function ea(e, t) {
    switch (e) {
      case 1:
        return er(W, t);
      case 2:
        return er(H, t);
      case 3:
        return er(B, t);
      case 4:
        return er(q, t);
      default:
        return er(RegExp("^\\d{1," + e + "}"), t);
    }
  }
  function ei(e, t) {
    switch (e) {
      case 1:
        return er($, t);
      case 2:
        return er(G, t);
      case 3:
        return er(X, t);
      case 4:
        return er(Q, t);
      default:
        return er(RegExp("^-?\\d{1," + e + "}"), t);
    }
  }
  function eu(e) {
    switch (e) {
      case "morning":
        return 4;
      case "evening":
        return 17;
      case "pm":
      case "noon":
      case "afternoon":
        return 12;
      default:
        return 0;
    }
  }
  function el(e, t) {
    var n,
      r = t > 0,
      o = r ? t : 1 - t;
    if (o <= 50) n = e || 100;
    else {
      var a = o + 50;
      n = e + 100 * Math.floor(a / 100) - 100 * (e >= a % 100);
    }
    return r ? n : 1 - n;
  }
  function es(e) {
    return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
  }
  function ec(e) {
    return (ec =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function ef(e, t) {
    return (ef =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function ed(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function eh(e) {
    return (eh = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function ep(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var ey = (function (e) {
      if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function");
      ((o.prototype = Object.create(e && e.prototype, {
        constructor: { value: o, writable: !0, configurable: !0 },
      })),
        e && ef(o, e));
      var t,
        n,
        r =
          ((t = (function () {
            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var e,
              n,
              r,
              a = eh(o);
            return (
              (r = t
                ? Reflect.construct(a, arguments, eh(this).constructor)
                : a.apply(this, arguments)),
              (e = this),
              (n = r) && ("object" === ec(n) || "function" == typeof n) ? n : ed(e)
            );
          });
      function o() {
        var e;
        if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
        return (
          ep(ed((e = r.call.apply(r, [this].concat(n)))), "priority", 130),
          ep(ed(e), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]),
          e
        );
      }
      return (
        (n = [
          {
            key: "parse",
            value: function (e, t, n) {
              var r = function (e) {
                return { year: e, isTwoDigitYear: "yy" === t };
              };
              switch (t) {
                case "y":
                  return en(ea(4, e), r);
                case "yo":
                  return en(n.ordinalNumber(e, { unit: "year" }), r);
                default:
                  return en(ea(t.length, e), r);
              }
            },
          },
          {
            key: "validate",
            value: function (e, t) {
              return t.isTwoDigitYear || t.year > 0;
            },
          },
          {
            key: "set",
            value: function (e, t, n) {
              var r = e.getUTCFullYear();
              if (n.isTwoDigitYear) {
                var o = el(n.year, r);
                return (e.setUTCFullYear(o, 0, 1), e.setUTCHours(0, 0, 0, 0), e);
              }
              var a = "era" in t && 1 !== t.era ? 1 - n.year : n.year;
              return (e.setUTCFullYear(a, 0, 1), e.setUTCHours(0, 0, 0, 0), e);
            },
          },
        ]),
        (function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r));
          }
        })(o.prototype, n),
        o
      );
    })(S),
    em = n(564804),
    ev = n(327922);
  function eg(e) {
    return (eg =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function eb(e, t) {
    return (eb =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function ew(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function e_(e) {
    return (e_ = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function ek(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var ex = (function (e) {
      if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function");
      ((o.prototype = Object.create(e && e.prototype, {
        constructor: { value: o, writable: !0, configurable: !0 },
      })),
        e && eb(o, e));
      var t,
        n,
        r =
          ((t = (function () {
            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var e,
              n,
              r,
              a = e_(o);
            return (
              (r = t
                ? Reflect.construct(a, arguments, e_(this).constructor)
                : a.apply(this, arguments)),
              (e = this),
              (n = r) && ("object" === eg(n) || "function" == typeof n) ? n : ew(e)
            );
          });
      function o() {
        var e;
        if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
        return (
          ek(ew((e = r.call.apply(r, [this].concat(n)))), "priority", 130),
          ek(ew(e), "incompatibleTokens", [
            "y",
            "R",
            "u",
            "Q",
            "q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "i",
            "t",
            "T",
          ]),
          e
        );
      }
      return (
        (n = [
          {
            key: "parse",
            value: function (e, t, n) {
              var r = function (e) {
                return { year: e, isTwoDigitYear: "YY" === t };
              };
              switch (t) {
                case "Y":
                  return en(ea(4, e), r);
                case "Yo":
                  return en(n.ordinalNumber(e, { unit: "year" }), r);
                default:
                  return en(ea(t.length, e), r);
              }
            },
          },
          {
            key: "validate",
            value: function (e, t) {
              return t.isTwoDigitYear || t.year > 0;
            },
          },
          {
            key: "set",
            value: function (e, t, n, r) {
              var o = (0, em.A)(e, r);
              if (n.isTwoDigitYear) {
                var a = el(n.year, o);
                return (
                  e.setUTCFullYear(a, 0, r.firstWeekContainsDate),
                  e.setUTCHours(0, 0, 0, 0),
                  (0, ev.A)(e, r)
                );
              }
              var i = "era" in t && 1 !== t.era ? 1 - n.year : n.year;
              return (
                e.setUTCFullYear(i, 0, r.firstWeekContainsDate),
                e.setUTCHours(0, 0, 0, 0),
                (0, ev.A)(e, r)
              );
            },
          },
        ]),
        (function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r));
          }
        })(o.prototype, n),
        o
      );
    })(S),
    eS = n(576103);
  function eE(e) {
    return (eE =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function eO(e, t) {
    return (eO =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function eT(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function eR(e) {
    return (eR = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function eA(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var eC = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && eO(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = eR(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, eR(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === eE(n) || "function" == typeof n) ? n : eT(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        eA(eT((e = r.call.apply(r, [this].concat(n)))), "priority", 130),
        eA(eT(e), "incompatibleTokens", [
          "G",
          "y",
          "Y",
          "u",
          "Q",
          "q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "e",
          "c",
          "t",
          "T",
        ]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t) {
            return "R" === t ? ei(4, e) : ei(t.length, e);
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            var r = new Date(0);
            return (r.setUTCFullYear(n, 0, 4), r.setUTCHours(0, 0, 0, 0), (0, eS.A)(r));
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function eM(e) {
    return (eM =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function eD(e, t) {
    return (eD =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function eP(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function eN(e) {
    return (eN = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function ej(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var eL = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && eD(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = eN(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, eN(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === eM(n) || "function" == typeof n) ? n : eP(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        ej(eP((e = r.call.apply(r, [this].concat(n)))), "priority", 130),
        ej(eP(e), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t) {
            return "u" === t ? ei(4, e) : ei(t.length, e);
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            return (e.setUTCFullYear(n, 0, 1), e.setUTCHours(0, 0, 0, 0), e);
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function ez(e) {
    return (ez =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function eU(e, t) {
    return (eU =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function eY(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function eI(e) {
    return (eI = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function eF(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var eW = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && eU(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = eI(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, eI(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === ez(n) || "function" == typeof n) ? n : eY(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        eF(eY((e = r.call.apply(r, [this].concat(n)))), "priority", 120),
        eF(eY(e), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t, n) {
            switch (t) {
              case "Q":
              case "QQ":
                return ea(t.length, e);
              case "Qo":
                return n.ordinalNumber(e, { unit: "quarter" });
              case "QQQ":
                return (
                  n.quarter(e, { width: "abbreviated", context: "formatting" }) ||
                  n.quarter(e, { width: "narrow", context: "formatting" })
                );
              case "QQQQQ":
                return n.quarter(e, { width: "narrow", context: "formatting" });
              default:
                return (
                  n.quarter(e, { width: "wide", context: "formatting" }) ||
                  n.quarter(e, { width: "abbreviated", context: "formatting" }) ||
                  n.quarter(e, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (e, t) {
            return t >= 1 && t <= 4;
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            return (e.setUTCMonth((n - 1) * 3, 1), e.setUTCHours(0, 0, 0, 0), e);
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function eH(e) {
    return (eH =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function eB(e, t) {
    return (eB =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function eq(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function eV(e) {
    return (eV = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function e$(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var eG = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && eB(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = eV(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, eV(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === eH(n) || "function" == typeof n) ? n : eq(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        e$(eq((e = r.call.apply(r, [this].concat(n)))), "priority", 120),
        e$(eq(e), "incompatibleTokens", [
          "Y",
          "R",
          "Q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t, n) {
            switch (t) {
              case "q":
              case "qq":
                return ea(t.length, e);
              case "qo":
                return n.ordinalNumber(e, { unit: "quarter" });
              case "qqq":
                return (
                  n.quarter(e, { width: "abbreviated", context: "standalone" }) ||
                  n.quarter(e, { width: "narrow", context: "standalone" })
                );
              case "qqqqq":
                return n.quarter(e, { width: "narrow", context: "standalone" });
              default:
                return (
                  n.quarter(e, { width: "wide", context: "standalone" }) ||
                  n.quarter(e, { width: "abbreviated", context: "standalone" }) ||
                  n.quarter(e, { width: "narrow", context: "standalone" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (e, t) {
            return t >= 1 && t <= 4;
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            return (e.setUTCMonth((n - 1) * 3, 1), e.setUTCHours(0, 0, 0, 0), e);
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function eX(e) {
    return (eX =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function eQ(e, t) {
    return (eQ =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function eZ(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function eK(e) {
    return (eK = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function eJ(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var e0 = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && eQ(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = eK(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, eK(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === eX(n) || "function" == typeof n) ? n : eZ(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        eJ(eZ((e = r.call.apply(r, [this].concat(n)))), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "L",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        eJ(eZ(e), "priority", 110),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t, n) {
            var r = function (e) {
              return e - 1;
            };
            switch (t) {
              case "M":
                return en(er(D, e), r);
              case "MM":
                return en(ea(2, e), r);
              case "Mo":
                return en(n.ordinalNumber(e, { unit: "month" }), r);
              case "MMM":
                return (
                  n.month(e, { width: "abbreviated", context: "formatting" }) ||
                  n.month(e, { width: "narrow", context: "formatting" })
                );
              case "MMMMM":
                return n.month(e, { width: "narrow", context: "formatting" });
              default:
                return (
                  n.month(e, { width: "wide", context: "formatting" }) ||
                  n.month(e, { width: "abbreviated", context: "formatting" }) ||
                  n.month(e, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (e, t) {
            return t >= 0 && t <= 11;
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            return (e.setUTCMonth(n, 1), e.setUTCHours(0, 0, 0, 0), e);
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function e1(e) {
    return (e1 =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function e2(e, t) {
    return (e2 =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function e3(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function e5(e) {
    return (e5 = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function e6(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var e4 = (function (e) {
      if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function");
      ((o.prototype = Object.create(e && e.prototype, {
        constructor: { value: o, writable: !0, configurable: !0 },
      })),
        e && e2(o, e));
      var t,
        n,
        r =
          ((t = (function () {
            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var e,
              n,
              r,
              a = e5(o);
            return (
              (r = t
                ? Reflect.construct(a, arguments, e5(this).constructor)
                : a.apply(this, arguments)),
              (e = this),
              (n = r) && ("object" === e1(n) || "function" == typeof n) ? n : e3(e)
            );
          });
      function o() {
        var e;
        if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
        return (
          e6(e3((e = r.call.apply(r, [this].concat(n)))), "priority", 110),
          e6(e3(e), "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "M",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
          ]),
          e
        );
      }
      return (
        (n = [
          {
            key: "parse",
            value: function (e, t, n) {
              var r = function (e) {
                return e - 1;
              };
              switch (t) {
                case "L":
                  return en(er(D, e), r);
                case "LL":
                  return en(ea(2, e), r);
                case "Lo":
                  return en(n.ordinalNumber(e, { unit: "month" }), r);
                case "LLL":
                  return (
                    n.month(e, { width: "abbreviated", context: "standalone" }) ||
                    n.month(e, { width: "narrow", context: "standalone" })
                  );
                case "LLLLL":
                  return n.month(e, { width: "narrow", context: "standalone" });
                default:
                  return (
                    n.month(e, { width: "wide", context: "standalone" }) ||
                    n.month(e, { width: "abbreviated", context: "standalone" }) ||
                    n.month(e, { width: "narrow", context: "standalone" })
                  );
              }
            },
          },
          {
            key: "validate",
            value: function (e, t) {
              return t >= 0 && t <= 11;
            },
          },
          {
            key: "set",
            value: function (e, t, n) {
              return (e.setUTCMonth(n, 1), e.setUTCHours(0, 0, 0, 0), e);
            },
          },
        ]),
        (function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r));
          }
        })(o.prototype, n),
        o
      );
    })(S),
    e8 = n(789316);
  function e9(e) {
    return (e9 =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function e7(e, t) {
    return (e7 =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function te(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function tt(e) {
    return (tt = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function tn(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var tr = (function (e) {
      if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function");
      ((o.prototype = Object.create(e && e.prototype, {
        constructor: { value: o, writable: !0, configurable: !0 },
      })),
        e && e7(o, e));
      var t,
        n,
        r =
          ((t = (function () {
            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var e,
              n,
              r,
              a = tt(o);
            return (
              (r = t
                ? Reflect.construct(a, arguments, tt(this).constructor)
                : a.apply(this, arguments)),
              (e = this),
              (n = r) && ("object" === e9(n) || "function" == typeof n) ? n : te(e)
            );
          });
      function o() {
        var e;
        if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
        return (
          tn(te((e = r.call.apply(r, [this].concat(n)))), "priority", 100),
          tn(te(e), "incompatibleTokens", [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "i",
            "t",
            "T",
          ]),
          e
        );
      }
      return (
        (n = [
          {
            key: "parse",
            value: function (e, t, n) {
              switch (t) {
                case "w":
                  return er(j, e);
                case "wo":
                  return n.ordinalNumber(e, { unit: "week" });
                default:
                  return ea(t.length, e);
              }
            },
          },
          {
            key: "validate",
            value: function (e, t) {
              return t >= 1 && t <= 53;
            },
          },
          {
            key: "set",
            value: function (e, t, n, r) {
              return (0, ev.A)(
                (function (e, t, n) {
                  (0, c.A)(2, arguments);
                  var r = (0, a.default)(e),
                    o = (0, s.A)(t),
                    i = (0, e8.A)(r, n) - o;
                  return (r.setUTCDate(r.getUTCDate() - 7 * i), r);
                })(e, n, r),
                r,
              );
            },
          },
        ]),
        (function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r));
          }
        })(o.prototype, n),
        o
      );
    })(S),
    to = n(749805);
  function ta(e) {
    return (ta =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function ti(e, t) {
    return (ti =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function tu(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function tl(e) {
    return (tl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function ts(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var tc = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && ti(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = tl(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, tl(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === ta(n) || "function" == typeof n) ? n : tu(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        ts(tu((e = r.call.apply(r, [this].concat(n)))), "priority", 100),
        ts(tu(e), "incompatibleTokens", [
          "y",
          "Y",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "e",
          "c",
          "t",
          "T",
        ]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t, n) {
            switch (t) {
              case "I":
                return er(j, e);
              case "Io":
                return n.ordinalNumber(e, { unit: "week" });
              default:
                return ea(t.length, e);
            }
          },
        },
        {
          key: "validate",
          value: function (e, t) {
            return t >= 1 && t <= 53;
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            return (0, eS.A)(
              (function (e, t) {
                (0, c.A)(2, arguments);
                var n = (0, a.default)(e),
                  r = (0, s.A)(t),
                  o = (0, to.A)(n) - r;
                return (n.setUTCDate(n.getUTCDate() - 7 * o), n);
              })(e, n),
            );
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function tf(e) {
    return (tf =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function td(e, t) {
    return (td =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function th(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function tp(e) {
    return (tp = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function ty(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var tm = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    tv = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    tg = (function (e) {
      if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function");
      ((o.prototype = Object.create(e && e.prototype, {
        constructor: { value: o, writable: !0, configurable: !0 },
      })),
        e && td(o, e));
      var t,
        n,
        r =
          ((t = (function () {
            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var e,
              n,
              r,
              a = tp(o);
            return (
              (r = t
                ? Reflect.construct(a, arguments, tp(this).constructor)
                : a.apply(this, arguments)),
              (e = this),
              (n = r) && ("object" === tf(n) || "function" == typeof n) ? n : th(e)
            );
          });
      function o() {
        var e;
        if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
        return (
          ty(th((e = r.call.apply(r, [this].concat(n)))), "priority", 90),
          ty(th(e), "subPriority", 1),
          ty(th(e), "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
          ]),
          e
        );
      }
      return (
        (n = [
          {
            key: "parse",
            value: function (e, t, n) {
              switch (t) {
                case "d":
                  return er(P, e);
                case "do":
                  return n.ordinalNumber(e, { unit: "date" });
                default:
                  return ea(t.length, e);
              }
            },
          },
          {
            key: "validate",
            value: function (e, t) {
              var n = es(e.getUTCFullYear()),
                r = e.getUTCMonth();
              return n ? t >= 1 && t <= tv[r] : t >= 1 && t <= tm[r];
            },
          },
          {
            key: "set",
            value: function (e, t, n) {
              return (e.setUTCDate(n), e.setUTCHours(0, 0, 0, 0), e);
            },
          },
        ]),
        (function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r));
          }
        })(o.prototype, n),
        o
      );
    })(S);
  function tb(e) {
    return (tb =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function tw(e, t) {
    return (tw =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function t_(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function tk(e) {
    return (tk = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function tx(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var tS = (function (e) {
      if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function");
      ((o.prototype = Object.create(e && e.prototype, {
        constructor: { value: o, writable: !0, configurable: !0 },
      })),
        e && tw(o, e));
      var t,
        n,
        r =
          ((t = (function () {
            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var e,
              n,
              r,
              a = tk(o);
            return (
              (r = t
                ? Reflect.construct(a, arguments, tk(this).constructor)
                : a.apply(this, arguments)),
              (e = this),
              (n = r) && ("object" === tb(n) || "function" == typeof n) ? n : t_(e)
            );
          });
      function o() {
        var e;
        if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
        return (
          tx(t_((e = r.call.apply(r, [this].concat(n)))), "priority", 90),
          tx(t_(e), "subpriority", 1),
          tx(t_(e), "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "E",
            "i",
            "e",
            "c",
            "t",
            "T",
          ]),
          e
        );
      }
      return (
        (n = [
          {
            key: "parse",
            value: function (e, t, n) {
              switch (t) {
                case "D":
                case "DD":
                  return er(N, e);
                case "Do":
                  return n.ordinalNumber(e, { unit: "date" });
                default:
                  return ea(t.length, e);
              }
            },
          },
          {
            key: "validate",
            value: function (e, t) {
              return es(e.getUTCFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
            },
          },
          {
            key: "set",
            value: function (e, t, n) {
              return (e.setUTCMonth(0, n), e.setUTCHours(0, 0, 0, 0), e);
            },
          },
        ]),
        (function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r));
          }
        })(o.prototype, n),
        o
      );
    })(S),
    tE = n(98430);
  function tO(e, t, n) {
    (0, c.A)(2, arguments);
    var r,
      o,
      i,
      u,
      l,
      f,
      d,
      h,
      p = (0, tE.q)(),
      y = (0, s.A)(
        null !=
          (r =
            null !=
            (o =
              null !=
              (i =
                null != (u = null == n ? void 0 : n.weekStartsOn)
                  ? u
                  : null == n || null == (l = n.locale) || null == (f = l.options)
                    ? void 0
                    : f.weekStartsOn)
                ? i
                : p.weekStartsOn)
              ? o
              : null == (d = p.locale) || null == (h = d.options)
                ? void 0
                : h.weekStartsOn)
          ? r
          : 0,
      );
    if (!(y >= 0 && y <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var m = (0, a.default)(e),
      v = (0, s.A)(t),
      g = 7 * (((v % 7) + 7) % 7 < y) + v - m.getUTCDay();
    return (m.setUTCDate(m.getUTCDate() + g), m);
  }
  function tT(e) {
    return (tT =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function tR(e, t) {
    return (tR =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function tA(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function tC(e) {
    return (tC = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function tM(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var tD = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && tR(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = tC(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, tC(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === tT(n) || "function" == typeof n) ? n : tA(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        tM(tA((e = r.call.apply(r, [this].concat(n)))), "priority", 90),
        tM(tA(e), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t, n) {
            switch (t) {
              case "E":
              case "EE":
              case "EEE":
                return (
                  n.day(e, { width: "abbreviated", context: "formatting" }) ||
                  n.day(e, { width: "short", context: "formatting" }) ||
                  n.day(e, { width: "narrow", context: "formatting" })
                );
              case "EEEEE":
                return n.day(e, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return (
                  n.day(e, { width: "short", context: "formatting" }) ||
                  n.day(e, { width: "narrow", context: "formatting" })
                );
              default:
                return (
                  n.day(e, { width: "wide", context: "formatting" }) ||
                  n.day(e, { width: "abbreviated", context: "formatting" }) ||
                  n.day(e, { width: "short", context: "formatting" }) ||
                  n.day(e, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (e, t) {
            return t >= 0 && t <= 6;
          },
        },
        {
          key: "set",
          value: function (e, t, n, r) {
            return ((e = tO(e, n, r)).setUTCHours(0, 0, 0, 0), e);
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function tP(e) {
    return (tP =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function tN(e, t) {
    return (tN =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function tj(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function tL(e) {
    return (tL = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function tz(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var tU = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && tN(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = tL(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, tL(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === tP(n) || "function" == typeof n) ? n : tj(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        tz(tj((e = r.call.apply(r, [this].concat(n)))), "priority", 90),
        tz(tj(e), "incompatibleTokens", [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "E",
          "i",
          "c",
          "t",
          "T",
        ]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t, n, r) {
            var o = function (e) {
              var t = 7 * Math.floor((e - 1) / 7);
              return ((e + r.weekStartsOn + 6) % 7) + t;
            };
            switch (t) {
              case "e":
              case "ee":
                return en(ea(t.length, e), o);
              case "eo":
                return en(n.ordinalNumber(e, { unit: "day" }), o);
              case "eee":
                return (
                  n.day(e, { width: "abbreviated", context: "formatting" }) ||
                  n.day(e, { width: "short", context: "formatting" }) ||
                  n.day(e, { width: "narrow", context: "formatting" })
                );
              case "eeeee":
                return n.day(e, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return (
                  n.day(e, { width: "short", context: "formatting" }) ||
                  n.day(e, { width: "narrow", context: "formatting" })
                );
              default:
                return (
                  n.day(e, { width: "wide", context: "formatting" }) ||
                  n.day(e, { width: "abbreviated", context: "formatting" }) ||
                  n.day(e, { width: "short", context: "formatting" }) ||
                  n.day(e, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (e, t) {
            return t >= 0 && t <= 6;
          },
        },
        {
          key: "set",
          value: function (e, t, n, r) {
            return ((e = tO(e, n, r)).setUTCHours(0, 0, 0, 0), e);
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function tY(e) {
    return (tY =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function tI(e, t) {
    return (tI =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function tF(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function tW(e) {
    return (tW = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function tH(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var tB = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && tI(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = tW(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, tW(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === tY(n) || "function" == typeof n) ? n : tF(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        tH(tF((e = r.call.apply(r, [this].concat(n)))), "priority", 90),
        tH(tF(e), "incompatibleTokens", [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "E",
          "i",
          "e",
          "t",
          "T",
        ]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t, n, r) {
            var o = function (e) {
              var t = 7 * Math.floor((e - 1) / 7);
              return ((e + r.weekStartsOn + 6) % 7) + t;
            };
            switch (t) {
              case "c":
              case "cc":
                return en(ea(t.length, e), o);
              case "co":
                return en(n.ordinalNumber(e, { unit: "day" }), o);
              case "ccc":
                return (
                  n.day(e, { width: "abbreviated", context: "standalone" }) ||
                  n.day(e, { width: "short", context: "standalone" }) ||
                  n.day(e, { width: "narrow", context: "standalone" })
                );
              case "ccccc":
                return n.day(e, { width: "narrow", context: "standalone" });
              case "cccccc":
                return (
                  n.day(e, { width: "short", context: "standalone" }) ||
                  n.day(e, { width: "narrow", context: "standalone" })
                );
              default:
                return (
                  n.day(e, { width: "wide", context: "standalone" }) ||
                  n.day(e, { width: "abbreviated", context: "standalone" }) ||
                  n.day(e, { width: "short", context: "standalone" }) ||
                  n.day(e, { width: "narrow", context: "standalone" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (e, t) {
            return t >= 0 && t <= 6;
          },
        },
        {
          key: "set",
          value: function (e, t, n, r) {
            return ((e = tO(e, n, r)).setUTCHours(0, 0, 0, 0), e);
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function tq(e) {
    return (tq =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function tV(e, t) {
    return (tV =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function t$(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function tG(e) {
    return (tG = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function tX(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var tQ = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && tV(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = tG(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, tG(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === tq(n) || "function" == typeof n) ? n : t$(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        tX(t$((e = r.call.apply(r, [this].concat(n)))), "priority", 90),
        tX(t$(e), "incompatibleTokens", [
          "y",
          "Y",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "E",
          "e",
          "c",
          "t",
          "T",
        ]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t, n) {
            var r = function (e) {
              return 0 === e ? 7 : e;
            };
            switch (t) {
              case "i":
              case "ii":
                return ea(t.length, e);
              case "io":
                return n.ordinalNumber(e, { unit: "day" });
              case "iii":
                return en(
                  n.day(e, { width: "abbreviated", context: "formatting" }) ||
                    n.day(e, { width: "short", context: "formatting" }) ||
                    n.day(e, { width: "narrow", context: "formatting" }),
                  r,
                );
              case "iiiii":
                return en(n.day(e, { width: "narrow", context: "formatting" }), r);
              case "iiiiii":
                return en(
                  n.day(e, { width: "short", context: "formatting" }) ||
                    n.day(e, { width: "narrow", context: "formatting" }),
                  r,
                );
              default:
                return en(
                  n.day(e, { width: "wide", context: "formatting" }) ||
                    n.day(e, { width: "abbreviated", context: "formatting" }) ||
                    n.day(e, { width: "short", context: "formatting" }) ||
                    n.day(e, { width: "narrow", context: "formatting" }),
                  r,
                );
            }
          },
        },
        {
          key: "validate",
          value: function (e, t) {
            return t >= 1 && t <= 7;
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            return (
              (e = (function (e, t) {
                (0, c.A)(2, arguments);
                var n = (0, s.A)(t);
                n % 7 == 0 && (n -= 7);
                var r = (0, a.default)(e),
                  o = 7 * (((n % 7) + 7) % 7 < 1) + n - r.getUTCDay();
                return (r.setUTCDate(r.getUTCDate() + o), r);
              })(e, n)).setUTCHours(0, 0, 0, 0),
              e
            );
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function tZ(e) {
    return (tZ =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function tK(e, t) {
    return (tK =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function tJ(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function t0(e) {
    return (t0 = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function t1(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var t2 = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && tK(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = t0(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, t0(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === tZ(n) || "function" == typeof n) ? n : tJ(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        t1(tJ((e = r.call.apply(r, [this].concat(n)))), "priority", 80),
        t1(tJ(e), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t, n) {
            switch (t) {
              case "a":
              case "aa":
              case "aaa":
                return (
                  n.dayPeriod(e, { width: "abbreviated", context: "formatting" }) ||
                  n.dayPeriod(e, { width: "narrow", context: "formatting" })
                );
              case "aaaaa":
                return n.dayPeriod(e, { width: "narrow", context: "formatting" });
              default:
                return (
                  n.dayPeriod(e, { width: "wide", context: "formatting" }) ||
                  n.dayPeriod(e, { width: "abbreviated", context: "formatting" }) ||
                  n.dayPeriod(e, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            return (e.setUTCHours(eu(n), 0, 0, 0), e);
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function t3(e) {
    return (t3 =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function t5(e, t) {
    return (t5 =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function t6(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function t4(e) {
    return (t4 = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function t8(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var t9 = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && t5(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = t4(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, t4(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === t3(n) || "function" == typeof n) ? n : t6(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        t8(t6((e = r.call.apply(r, [this].concat(n)))), "priority", 80),
        t8(t6(e), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t, n) {
            switch (t) {
              case "b":
              case "bb":
              case "bbb":
                return (
                  n.dayPeriod(e, { width: "abbreviated", context: "formatting" }) ||
                  n.dayPeriod(e, { width: "narrow", context: "formatting" })
                );
              case "bbbbb":
                return n.dayPeriod(e, { width: "narrow", context: "formatting" });
              default:
                return (
                  n.dayPeriod(e, { width: "wide", context: "formatting" }) ||
                  n.dayPeriod(e, { width: "abbreviated", context: "formatting" }) ||
                  n.dayPeriod(e, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            return (e.setUTCHours(eu(n), 0, 0, 0), e);
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function t7(e) {
    return (t7 =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function ne(e, t) {
    return (ne =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function nt(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function nn(e) {
    return (nn = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function nr(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var no = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && ne(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = nn(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, nn(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === t7(n) || "function" == typeof n) ? n : nt(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        nr(nt((e = r.call.apply(r, [this].concat(n)))), "priority", 80),
        nr(nt(e), "incompatibleTokens", ["a", "b", "t", "T"]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t, n) {
            switch (t) {
              case "B":
              case "BB":
              case "BBB":
                return (
                  n.dayPeriod(e, { width: "abbreviated", context: "formatting" }) ||
                  n.dayPeriod(e, { width: "narrow", context: "formatting" })
                );
              case "BBBBB":
                return n.dayPeriod(e, { width: "narrow", context: "formatting" });
              default:
                return (
                  n.dayPeriod(e, { width: "wide", context: "formatting" }) ||
                  n.dayPeriod(e, { width: "abbreviated", context: "formatting" }) ||
                  n.dayPeriod(e, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            return (e.setUTCHours(eu(n), 0, 0, 0), e);
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function na(e) {
    return (na =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function ni(e, t) {
    return (ni =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function nu(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function nl(e) {
    return (nl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function ns(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var nc = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && ni(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = nl(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, nl(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === na(n) || "function" == typeof n) ? n : nu(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        ns(nu((e = r.call.apply(r, [this].concat(n)))), "priority", 70),
        ns(nu(e), "incompatibleTokens", ["H", "K", "k", "t", "T"]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t, n) {
            switch (t) {
              case "h":
                return er(Y, e);
              case "ho":
                return n.ordinalNumber(e, { unit: "hour" });
              default:
                return ea(t.length, e);
            }
          },
        },
        {
          key: "validate",
          value: function (e, t) {
            return t >= 1 && t <= 12;
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            var r = e.getUTCHours() >= 12;
            return (
              r && n < 12
                ? e.setUTCHours(n + 12, 0, 0, 0)
                : r || 12 !== n
                  ? e.setUTCHours(n, 0, 0, 0)
                  : e.setUTCHours(0, 0, 0, 0),
              e
            );
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function nf(e) {
    return (nf =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function nd(e, t) {
    return (nd =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function nh(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function np(e) {
    return (np = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function ny(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var nm = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && nd(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = np(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, np(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === nf(n) || "function" == typeof n) ? n : nh(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        ny(nh((e = r.call.apply(r, [this].concat(n)))), "priority", 70),
        ny(nh(e), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t, n) {
            switch (t) {
              case "H":
                return er(L, e);
              case "Ho":
                return n.ordinalNumber(e, { unit: "hour" });
              default:
                return ea(t.length, e);
            }
          },
        },
        {
          key: "validate",
          value: function (e, t) {
            return t >= 0 && t <= 23;
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            return (e.setUTCHours(n, 0, 0, 0), e);
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function nv(e) {
    return (nv =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function ng(e, t) {
    return (ng =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function nb(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function nw(e) {
    return (nw = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function n_(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var nk = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && ng(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = nw(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, nw(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === nv(n) || "function" == typeof n) ? n : nb(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        n_(nb((e = r.call.apply(r, [this].concat(n)))), "priority", 70),
        n_(nb(e), "incompatibleTokens", ["h", "H", "k", "t", "T"]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t, n) {
            switch (t) {
              case "K":
                return er(U, e);
              case "Ko":
                return n.ordinalNumber(e, { unit: "hour" });
              default:
                return ea(t.length, e);
            }
          },
        },
        {
          key: "validate",
          value: function (e, t) {
            return t >= 0 && t <= 11;
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            return (
              e.getUTCHours() >= 12 && n < 12
                ? e.setUTCHours(n + 12, 0, 0, 0)
                : e.setUTCHours(n, 0, 0, 0),
              e
            );
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function nx(e) {
    return (nx =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function nS(e, t) {
    return (nS =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function nE(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function nO(e) {
    return (nO = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function nT(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var nR = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && nS(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = nO(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, nO(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === nx(n) || "function" == typeof n) ? n : nE(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        nT(nE((e = r.call.apply(r, [this].concat(n)))), "priority", 70),
        nT(nE(e), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t, n) {
            switch (t) {
              case "k":
                return er(z, e);
              case "ko":
                return n.ordinalNumber(e, { unit: "hour" });
              default:
                return ea(t.length, e);
            }
          },
        },
        {
          key: "validate",
          value: function (e, t) {
            return t >= 1 && t <= 24;
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            return (e.setUTCHours(n <= 24 ? n % 24 : n, 0, 0, 0), e);
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function nA(e) {
    return (nA =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function nC(e, t) {
    return (nC =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function nM(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function nD(e) {
    return (nD = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function nP(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var nN = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && nC(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = nD(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, nD(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === nA(n) || "function" == typeof n) ? n : nM(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        nP(nM((e = r.call.apply(r, [this].concat(n)))), "priority", 60),
        nP(nM(e), "incompatibleTokens", ["t", "T"]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t, n) {
            switch (t) {
              case "m":
                return er(I, e);
              case "mo":
                return n.ordinalNumber(e, { unit: "minute" });
              default:
                return ea(t.length, e);
            }
          },
        },
        {
          key: "validate",
          value: function (e, t) {
            return t >= 0 && t <= 59;
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            return (e.setUTCMinutes(n, 0, 0), e);
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function nj(e) {
    return (nj =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function nL(e, t) {
    return (nL =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function nz(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function nU(e) {
    return (nU = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function nY(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var nI = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && nL(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = nU(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, nU(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === nj(n) || "function" == typeof n) ? n : nz(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        nY(nz((e = r.call.apply(r, [this].concat(n)))), "priority", 50),
        nY(nz(e), "incompatibleTokens", ["t", "T"]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t, n) {
            switch (t) {
              case "s":
                return er(F, e);
              case "so":
                return n.ordinalNumber(e, { unit: "second" });
              default:
                return ea(t.length, e);
            }
          },
        },
        {
          key: "validate",
          value: function (e, t) {
            return t >= 0 && t <= 59;
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            return (e.setUTCSeconds(n, 0), e);
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function nF(e) {
    return (nF =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function nW(e, t) {
    return (nW =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function nH(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function nB(e) {
    return (nB = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function nq(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var nV = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && nW(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = nB(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, nB(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === nF(n) || "function" == typeof n) ? n : nH(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        nq(nH((e = r.call.apply(r, [this].concat(n)))), "priority", 30),
        nq(nH(e), "incompatibleTokens", ["t", "T"]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t) {
            return en(ea(t.length, e), function (e) {
              return Math.floor(e * Math.pow(10, -t.length + 3));
            });
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            return (e.setUTCMilliseconds(n), e);
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function n$(e) {
    return (n$ =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function nG(e, t) {
    return (nG =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function nX(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function nQ(e) {
    return (nQ = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function nZ(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var nK = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && nG(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = nQ(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, nQ(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === n$(n) || "function" == typeof n) ? n : nX(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        nZ(nX((e = r.call.apply(r, [this].concat(n)))), "priority", 10),
        nZ(nX(e), "incompatibleTokens", ["t", "T", "x"]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t) {
            switch (t) {
              case "X":
                return eo(Z, e);
              case "XX":
                return eo(K, e);
              case "XXXX":
                return eo(J, e);
              case "XXXXX":
                return eo(et, e);
              default:
                return eo(ee, e);
            }
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            return t.timestampIsSet ? e : new Date(e.getTime() - n);
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function nJ(e) {
    return (nJ =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function n0(e, t) {
    return (n0 =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function n1(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function n2(e) {
    return (n2 = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function n3(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var n5 = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && n0(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = n2(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, n2(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === nJ(n) || "function" == typeof n) ? n : n1(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        n3(n1((e = r.call.apply(r, [this].concat(n)))), "priority", 10),
        n3(n1(e), "incompatibleTokens", ["t", "T", "X"]),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e, t) {
            switch (t) {
              case "x":
                return eo(Z, e);
              case "xx":
                return eo(K, e);
              case "xxxx":
                return eo(J, e);
              case "xxxxx":
                return eo(et, e);
              default:
                return eo(ee, e);
            }
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            return t.timestampIsSet ? e : new Date(e.getTime() - n);
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function n6(e) {
    return (n6 =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function n4(e, t) {
    return (n4 =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function n8(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function n9(e) {
    return (n9 = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function n7(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var re = (function (e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    ((o.prototype = Object.create(e && e.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      e && n4(o, e));
    var t,
      n,
      r =
        ((t = (function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            n,
            r,
            a = n9(o);
          return (
            (r = t
              ? Reflect.construct(a, arguments, n9(this).constructor)
              : a.apply(this, arguments)),
            (e = this),
            (n = r) && ("object" === n6(n) || "function" == typeof n) ? n : n8(e)
          );
        });
    function o() {
      var e;
      if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
      for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
      return (
        n7(n8((e = r.call.apply(r, [this].concat(n)))), "priority", 40),
        n7(n8(e), "incompatibleTokens", "*"),
        e
      );
    }
    return (
      (n = [
        {
          key: "parse",
          value: function (e) {
            return er(V, e);
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            return [new Date(1e3 * n), { timestampIsSet: !0 }];
          },
        },
      ]),
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r));
        }
      })(o.prototype, n),
      o
    );
  })(S);
  function rt(e) {
    return (rt =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function rn(e, t) {
    return (rn =
      Object.setPrototypeOf ||
      function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
  }
  function rr(e) {
    if (void 0 === e)
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function ro(e) {
    return (ro = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function ra(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  var ri = (function (e) {
      if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function");
      ((o.prototype = Object.create(e && e.prototype, {
        constructor: { value: o, writable: !0, configurable: !0 },
      })),
        e && rn(o, e));
      var t,
        n,
        r =
          ((t = (function () {
            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var e,
              n,
              r,
              a = ro(o);
            return (
              (r = t
                ? Reflect.construct(a, arguments, ro(this).constructor)
                : a.apply(this, arguments)),
              (e = this),
              (n = r) && ("object" === rt(n) || "function" == typeof n) ? n : rr(e)
            );
          });
      function o() {
        var e;
        if (!(this instanceof o)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
        return (
          ra(rr((e = r.call.apply(r, [this].concat(n)))), "priority", 20),
          ra(rr(e), "incompatibleTokens", "*"),
          e
        );
      }
      return (
        (n = [
          {
            key: "parse",
            value: function (e) {
              return er(V, e);
            },
          },
          {
            key: "set",
            value: function (e, t, n) {
              return [new Date(n), { timestampIsSet: !0 }];
            },
          },
        ]),
        (function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r));
          }
        })(o.prototype, n),
        o
      );
    })(S),
    ru = {
      G: new C(),
      y: new ey(),
      Y: new ex(),
      R: new eC(),
      u: new eL(),
      Q: new eW(),
      q: new eG(),
      M: new e0(),
      L: new e4(),
      w: new tr(),
      I: new tc(),
      d: new tg(),
      D: new tS(),
      E: new tD(),
      e: new tU(),
      c: new tB(),
      i: new tQ(),
      a: new t2(),
      b: new t9(),
      B: new no(),
      h: new nc(),
      H: new nm(),
      K: new nk(),
      k: new nR(),
      m: new nN(),
      s: new nI(),
      S: new nV(),
      X: new nK(),
      x: new n5(),
      t: new re(),
      T: new ri(),
    };
  function rl(e) {
    return (rl =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function rs(e, t) {
    if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
      if (
        Array.isArray(e) ||
        (o = (function (e) {
          if (e) {
            if ("string" == typeof e) return rc(e, void 0);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            if (
              ("Object" === t && e.constructor && (t = e.constructor.name),
              "Map" === t || "Set" === t)
            )
              return Array.from(e);
            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
              return rc(e, void 0);
          }
        })(e)) ||
        (t && e && "number" == typeof e.length)
      ) {
        o && (e = o);
        var n = 0,
          r = function () {};
        return {
          s: r,
          n: function () {
            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
          },
          e: function (e) {
            throw e;
          },
          f: r,
        };
      }
      throw TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    }
    var o,
      a,
      i = !0,
      u = !1;
    return {
      s: function () {
        o = e[Symbol.iterator]();
      },
      n: function () {
        var e = o.next();
        return ((i = e.done), e);
      },
      e: function (e) {
        ((u = !0), (a = e));
      },
      f: function () {
        try {
          i || null == o.return || o.return();
        } finally {
          if (u) throw a;
        }
      },
    };
  }
  function rc(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  var rf = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    rd = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    rh = /^'([^]*?)'?$/,
    rp = /''/g,
    ry = /\S/,
    rm = /[a-zA-Z]/;
  function rv(e, t, n, f) {
    (0, c.A)(3, arguments);
    var d = String(e),
      h = String(t),
      p = (0, tE.q)(),
      y = null != (g = null != (b = null == f ? void 0 : f.locale) ? b : p.locale) ? g : r.A;
    if (!y.match) throw RangeError("locale must contain match property");
    var m = (0, s.A)(
      null !=
        (w =
          null !=
          (_ =
            null !=
            (k =
              null != (S = null == f ? void 0 : f.firstWeekContainsDate)
                ? S
                : null == f || null == (E = f.locale) || null == (O = E.options)
                  ? void 0
                  : O.firstWeekContainsDate)
              ? k
              : p.firstWeekContainsDate)
            ? _
            : null == (T = p.locale) || null == (R = T.options)
              ? void 0
              : R.firstWeekContainsDate)
        ? w
        : 1,
    );
    if (!(m >= 1 && m <= 7))
      throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var v = (0, s.A)(
      null !=
        (A =
          null !=
          (C =
            null !=
            (M =
              null != (D = null == f ? void 0 : f.weekStartsOn)
                ? D
                : null == f || null == (P = f.locale) || null == (N = P.options)
                  ? void 0
                  : N.weekStartsOn)
              ? M
              : p.weekStartsOn)
            ? C
            : null == (j = p.locale) || null == (L = j.options)
              ? void 0
              : L.weekStartsOn)
        ? A
        : 0,
    );
    if (!(v >= 0 && v <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if ("" === h)
      if ("" === d) return (0, a.default)(n);
      else return new Date(NaN);
    var g,
      b,
      w,
      _,
      k,
      S,
      E,
      O,
      T,
      R,
      A,
      C,
      M,
      D,
      P,
      N,
      j,
      L,
      z,
      U = { firstWeekContainsDate: m, weekStartsOn: v, locale: y },
      Y = [new x()],
      I = h
        .match(rd)
        .map(function (e) {
          var t = e[0];
          return t in i.A ? (0, i.A[t])(e, y.formatLong) : e;
        })
        .join("")
        .match(rf),
      F = [],
      W = rs(I);
    try {
      for (W.s(); !(z = W.n()).done;) {
        var H = (function () {
          var t = z.value;
          (!(null != f && f.useAdditionalWeekYearTokens) && (0, l.xM)(t) && (0, l.lJ)(t, h, e),
            !(null != f && f.useAdditionalDayOfYearTokens) && (0, l.ef)(t) && (0, l.lJ)(t, h, e));
          var n = t[0],
            r = ru[n];
          if (r) {
            var o = r.incompatibleTokens;
            if (Array.isArray(o)) {
              var a = F.find(function (e) {
                return o.includes(e.token) || e.token === n;
              });
              if (a)
                throw RangeError(
                  "The format string mustn't contain `"
                    .concat(a.fullToken, "` and `")
                    .concat(t, "` at the same time"),
                );
            } else if ("*" === r.incompatibleTokens && F.length > 0)
              throw RangeError(
                "The format string mustn't contain `".concat(
                  t,
                  "` and any other token at the same time",
                ),
              );
            F.push({ token: n, fullToken: t });
            var i = r.run(d, t, y.match, U);
            if (!i) return { v: new Date(NaN) };
            (Y.push(i.setter), (d = i.rest));
          } else {
            if (n.match(rm))
              throw RangeError(
                "Format string contains an unescaped latin alphabet character `" + n + "`",
              );
            if (
              ("''" === t ? (t = "'") : "'" === n && (t = t.match(rh)[1].replace(rp, "'")),
              0 !== d.indexOf(t))
            )
              return { v: new Date(NaN) };
            d = d.slice(t.length);
          }
        })();
        if ("object" === rl(H)) return H.v;
      }
    } catch (e) {
      W.e(e);
    } finally {
      W.f();
    }
    if (d.length > 0 && ry.test(d)) return new Date(NaN);
    var B = Y.map(function (e) {
        return e.priority;
      })
        .sort(function (e, t) {
          return t - e;
        })
        .filter(function (e, t, n) {
          return n.indexOf(e) === t;
        })
        .map(function (e) {
          return Y.filter(function (t) {
            return t.priority === e;
          }).sort(function (e, t) {
            return t.subPriority - e.subPriority;
          });
        })
        .map(function (e) {
          return e[0];
        }),
      q = (0, a.default)(n);
    if (isNaN(q.getTime())) return new Date(NaN);
    var V,
      $ = (0, o.A)(q, (0, u.A)(q)),
      G = {},
      X = rs(B);
    try {
      for (X.s(); !(V = X.n()).done;) {
        var Q = V.value;
        if (!Q.validate($, U)) return new Date(NaN);
        var Z = Q.set($, G, U);
        Array.isArray(Z)
          ? (($ = Z[0]),
            (function (e, t) {
              if (null == e)
                throw TypeError("assign requires that input parameter not be null or undefined");
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(G, Z[1]))
          : ($ = Z);
      }
    } catch (e) {
      X.e(e);
    } finally {
      X.f();
    }
    return $;
  }
}
