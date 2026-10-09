/* Recovered shipped factory. Module 30529.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4659772..4660000
 * Raw property SHA-256: ac1ff089fa3e1e34e19ec75f15e2eb0d6cee1d7cb1e47407bb13ec7b168b7276
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { X: () => a });
  var i = n(544105),
    r = n(652215);
  function a(e) {
    switch (e) {
      case r.fg2.XBOX:
        return i.f$.XBOX;
      case r.fg2.PLAYSTATION:
      case r.fg2.PLAYSTATION_STAGING:
        return i.f$.PLAYSTATION;
      default:
        return null;
    }
  }
}
