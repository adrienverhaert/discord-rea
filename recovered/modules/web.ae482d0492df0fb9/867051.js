/* Recovered shipped factory. Module 867051.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2329895..2330819
 * Raw property SHA-256: 498cc88d7d9d2bed248cc0059ca6c5534514ba8a60b8f5d48b07f8134dfd93b0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Wj: () => u, e: () => c, h1: () => d, hZ: () => o, yE: () => _ });
  var i = n(284009),
    r = n.n(i),
    a = n(357758),
    s = n(810531),
    l = n(52133);
  function o(e, t, n) {
    return E(e[t], n) ? e : { ...e, [t]: n };
  }
  function d(e, t) {
    let n = null;
    for (let i in t) {
      let r = e[i],
        a = t[i];
      void 0 === a || E(r, a) || (null == n ? (n = { ...e, [i]: a }) : (n[i] = a));
    }
    return null != n ? n : e;
  }
  function c(e, t, n) {
    return (r()(null == t || t[s.L] === e, "Existing record type does not match the expected type"),
    null != t &&
      (function (e, t) {
        if (e === t) return !0;
        for (let n of Object.keys(e)) if (!E(e[n], t[n])) return !1;
        return !0;
      })(t, n))
      ? t
      : _(e, n);
  }
  function u(e, t) {
    return "object" == typeof t && null != t && (s.L in t && t[s.L]) === e;
  }
  function _(e, t) {
    return ((t[s.L] = e), t);
  }
  function E(e, t) {
    return null == e || null == t
      ? e === t
      : e === t ||
          (e instanceof Date && t instanceof Date
            ? e.getTime() === t.getTime()
            : e instanceof Set && t instanceof Set
              ? (0, a._)(e, t)
              : Array.isArray(e) && Array.isArray(t)
                ? (0, l.v)(e, t)
                : "object" == typeof e && "object" == typeof t && (0, l.A)(e, t));
  }
}
