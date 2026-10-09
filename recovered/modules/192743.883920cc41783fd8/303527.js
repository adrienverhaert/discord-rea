/* Recovered shipped factory. Module 303527.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 46876..47530
 * Raw property SHA-256: 940204ee1148965249715a879648b4f3432dfed7fc683941f3759e0c68ed4f84
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function r(e) {
    return function (t) {
      var n,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        o = r.width,
        a = (o && e.matchPatterns[o]) || e.matchPatterns[e.defaultMatchWidth],
        i = t.match(a);
      if (!i) return null;
      var u = i[0],
        l = (o && e.parsePatterns[o]) || e.parsePatterns[e.defaultParseWidth],
        s = Array.isArray(l)
          ? (function (e, t) {
              for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
            })(l, function (e) {
              return e.test(u);
            })
          : (function (e, t) {
              for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
            })(l, function (e) {
              return e.test(u);
            });
      return (
        (n = e.valueCallback ? e.valueCallback(s) : s),
        { value: (n = r.valueCallback ? r.valueCallback(n) : n), rest: t.slice(u.length) }
      );
    };
  }
  n.d(t, { A: () => r });
}
