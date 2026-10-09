/* Recovered shipped factory. Module 555424.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3241001..3241451
 * Raw property SHA-256: c38e0c947ac968bf8a79675047876e7f9d064bff97b682e9d5937dc1c8ff7157
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { _j: () => a, h3: () => s }), n(827669));
  var i = n(652215);
  let r = ["+:", "@", "#", ":", "/"].sort((e, t) => t.length - e.length),
    a = new Set(["("]);
  function s(e, t) {
    let n = (function (e) {
        for (let t = 0; t < e.length; t++)
          if (
            (function (e, t) {
              let n;
              return 0 === t || i.ugJ.test(e[t - 1]) || (null != (n = e[t - 1]) && a.has(n));
            })(e, t)
          ) {
            for (let n of r) if (e.startsWith(n, t)) return e.slice(t);
          }
        return e;
      })(e),
      s = e.length - n.length;
    return { word: n, fullWord: t.slice(s), didTrimPrefix: s > 0 };
  }
}
