/* Recovered shipped factory. Module 385987.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 46181..46410
 * Raw property SHA-256: b95d575aef73576269b44133f12e3521085f2c056ea5cf67e6c7a3140c1346d0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function r(e) {
    return function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = t.width ? String(t.width) : e.defaultWidth;
      return e.formats[n] || e.formats[e.defaultWidth];
    };
  }
  n.d(t, { A: () => r });
}
