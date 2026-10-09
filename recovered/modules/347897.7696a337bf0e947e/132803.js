/* Recovered shipped factory. Module 132803.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 155633..156575
 * Raw property SHA-256: 0ab16190a89b6946d884ad07df14c91a3c33c25115784e4d4e1abe7257d660f2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, {
    $7: () => l,
    $r: () => c,
    OX: () => o,
    __: () => u,
    bX: () => f,
    is: () => a,
    lQ: () => i,
    n4: () => s,
  });
  var n = r(672722),
    i = function () {},
    o = function (e, t, r) {
      return Object.defineProperty(e, t, { value: r, writable: !0, configurable: !0 });
    },
    a = {
      arr: Array.isArray,
      obj: function (e) {
        return !!e && "Object" === e.constructor.name;
      },
      fun: function (e) {
        return "function" == typeof e;
      },
      str: function (e) {
        return "string" == typeof e;
      },
      num: function (e) {
        return "number" == typeof e;
      },
      und: function (e) {
        return void 0 === e;
      },
    };
  function s(e, t) {
    if (a.arr(e)) {
      if (!a.arr(t) || e.length !== t.length) return !1;
      for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
      return !0;
    }
    return e === t;
  }
  var l = function (e) {
      return a.str(e) && ("#" == e[0] || /\d/.test(e) || !!(n.colorNames && n.colorNames[e]));
    },
    u = function (e, t, r) {
      a.fun(e.forEach)
        ? e.forEach(t, r)
        : Object.keys(e).forEach(function (n) {
            return t.call(r, e[n], n);
          });
    },
    c = function (e) {
      return a.und(e) ? [] : a.arr(e) ? e : [e];
    };
  function f(e, t) {
    if (e.size) {
      var r = Array.from(e);
      (e.clear(), u(r, t));
    }
  }
}
