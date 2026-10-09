/* Recovered shipped factory. Module 635222.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4368465..4368686
 * Raw property SHA-256: 4c5fe8f16ddb658118a147a0b787208090ec485c99734836d2dfe6cdf8b0ab06
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(7584);
  let r = function (e) {
    let t = new Map();
    for (let n of e) {
      if (null != n.id) {
        t.set(n.id, n);
        continue;
      }
      let e = i.Ay.convertSurrogateToBase(n.surrogates) ?? n;
      t.set(e.name, e);
    }
    return t;
  };
}
