/* Recovered shipped factory. Module 722023.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 47531..47897
 * Raw property SHA-256: 7f48028bc60631652e1c22fb6d97ad285756f4fd6479c6acdcc02f79f7e4583c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function r(e) {
    return function (t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.match(e.matchPattern);
      if (!r) return null;
      var o = r[0],
        a = t.match(e.parsePattern);
      if (!a) return null;
      var i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
      return { value: (i = n.valueCallback ? n.valueCallback(i) : i), rest: t.slice(o.length) };
    };
  }
  n.d(t, { A: () => r });
}
