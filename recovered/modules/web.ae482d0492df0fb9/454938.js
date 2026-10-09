/* Recovered shipped factory. Module 454938.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5067218..5067474
 * Raw property SHA-256: 5be4d0091d8cd94b00e71b9e3ed3dd53907f942a0bfdef19a67051c1d4b1fa3c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(426983),
    r = n(176128);
  let a = new Set([
    i._.PARTNERED,
    i._.VERIFIED,
    i._.VERIFIED_AND_PARTNERED,
    i._.COMMUNITY,
    i._.DISCOVERABLE,
  ]);
  function s(e) {
    if (null == e) return !1;
    let t = (0, r.Jp)(e),
      n = (0, i.K)(t);
    return a.has(n);
  }
}
