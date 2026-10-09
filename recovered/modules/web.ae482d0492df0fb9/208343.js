/* Recovered shipped factory. Module 208343.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6651366..6651587
 * Raw property SHA-256: 63798a7bea36220706283b0d191b82f5296ffdea9f2345cd457cb0c61cef5fa0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(17928),
    r = n(531685),
    a = n(3137);
  function s(e) {
    let t = (0, i.bG)([r.A], () => r.A.isFocused());
    return (0, i.bG)([a.A], () =>
      a.A.isEnabled({ shakeLocation: e }) && t ? a.A.shakeIntensity : 0,
    );
  }
}
