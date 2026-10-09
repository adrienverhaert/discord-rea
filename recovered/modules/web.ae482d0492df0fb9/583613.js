/* Recovered shipped factory. Module 583613.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9555364..9555849
 * Raw property SHA-256: 15b23fc4a0e64530eaf703c0ac7220b3421a081c7121f0d000fc91787c50f9a9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e, t) {
    if (e === t) return !0;
    if (null == e || null == t || e.length !== t.length) return !1;
    let n = e.length;
    for (let i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
    return !0;
  }
  function r(e) {
    let t = null,
      n = null;
    return function () {
      for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
      return (i(t, a) || (n = e(...a)), (t = a), n);
    };
  }
  function a(e) {
    for (var t in e) e.hasOwnProperty(t) && delete e[t];
  }
  function s(e) {
    for (let t in e) return !1;
    return !0;
  }
  n.d(t, { DJ: () => s, LP: () => a, L_: () => r, in: () => i });
}
