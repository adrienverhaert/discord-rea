/* Recovered shipped factory. Module 929396.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4793485..4793850
 * Raw property SHA-256: a305d8b0d84b691f8aca716b05d174be652700c488e0a18300160a83aee96c8c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C7: () => a, bC: () => r, qS: () => s });
  var i = n(926675);
  function r(e, t) {
    for (let n = e.length - 1; n >= 1; n--) {
      let i = t(e.slice(0, n));
      if (null != i) {
        if (i.length > 0) return !1;
        return n >= 7;
      }
    }
    return !1;
  }
  function a(e) {
    if (null == e) return null;
    let t = e.trim().toLowerCase().replaceAll("_", " ").slice(0, 100);
    return t.length > 0 ? t : null;
  }
  function s(e) {
    return !i.Z.has(e.id);
  }
}
