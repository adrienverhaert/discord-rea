/* Recovered shipped factory. Module 807098.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6809864..6810130
 * Raw property SHA-256: cab64693938e7e34d46ffb6441631cd7a5289407d89a94e3fdadd644202db81f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { T: () => l });
  var i = n(17928),
    r = n(462887),
    a = n(736653),
    s = n(775602);
  function l(e, t) {
    let n = (0, a.Ay)(),
      l = (0, i.bG)([s.Ay], () => s.Ay.useReducedMotion);
    return null == e
      ? null
      : (0, r.M)(n) || t
        ? l
          ? e.darkStaticUrl
          : e.darkUrl
        : l
          ? e.lightStaticUrl
          : e.lightUrl;
  }
}
