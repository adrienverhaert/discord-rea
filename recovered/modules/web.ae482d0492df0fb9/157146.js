/* Recovered shipped factory. Module 157146.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7761430..7761748
 * Raw property SHA-256: 8c11ef011dc28ef86fe6eb16824bfa3ca62efd1bf162b03ac65fa68bafdc2233
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Un: () => r, dV: () => s, fS: () => a });
  var i = n(873298);
  let r = "(min-width: 1024px) and (min-height: 820px)",
    a = "cozy";
  function s(e, t) {
    switch (e) {
      case i.NS.RESPONSIVE:
        return t;
      case i.NS.COZY:
        return "cozy";
      case i.NS.DEFAULT:
        return "default";
      case i.NS.COMPACT:
        return "compact";
      default:
        return "default";
    }
  }
}
