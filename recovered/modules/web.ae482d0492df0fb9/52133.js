/* Recovered shipped factory. Module 52133.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11309525..11310120
 * Raw property SHA-256: 427cc1f6bbe21387225c17faaf0452d8202f9acc5c30a6873a7eaed4bcb7fc56
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => r, v: () => a }), n(321073));
  let i = {};
  function r(e, t, n) {
    let { shouldWarnLargeObjects: r, logCallback: a } =
      arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i;
    if (e === t) return !0;
    if (void 0 === e || void 0 === t) return e === t;
    let s = Object.keys(e),
      l = Object.keys(t);
    if (s.length !== l.length) return !1;
    for (let i = 0; i < s.length; i++) {
      let r = s[i];
      if (e[r] !== t[r] && (null == n || !n.includes(r))) return !1;
    }
    return !0;
  }
  function a(e, t) {
    let { logCallback: n, shouldWarnLargeObjects: r } =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i;
    return null != t && e.length === t.length && e.every((e, n) => t[n] === e);
  }
}
