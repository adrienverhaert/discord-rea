/* Recovered shipped factory. Module 636889.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9687514..9687799
 * Raw property SHA-256: 5a0d43641bf6267e3af1c5de3dbbc9b85a1d7a6b5db6a495c5ccbc7d99087113
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e, t, n) {
    let i = 0,
      r = e.length;
    for (; i < r;) {
      let a = (i + r) >>> 1;
      0 > n(e[a], t) ? (i = a + 1) : (r = a);
    }
    return i;
  }
  function r(e, t, n) {
    let r = i(e, t, n);
    e.splice(r, 0, t);
  }
  function a(e, t, n) {
    let r = i(e, t, n);
    return !(r >= e.length) && 0 === n(e[r], t) && (e.splice(r, 1), !0);
  }
  n.d(t, { TF: () => a, Yr: () => r });
}
