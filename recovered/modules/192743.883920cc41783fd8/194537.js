/* Recovered shipped factory. Module 194537.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 27431..27972
 * Raw property SHA-256: 59b219f4c8671f6438af307e4b3cdf0b5c91539ce5d24565e0948fb86d4580eb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var r = n(29583),
    o = n(892227),
    a = n(618027);
  function i(e, t) {
    var n =
      e.getFullYear() - t.getFullYear() ||
      e.getMonth() - t.getMonth() ||
      e.getDate() - t.getDate() ||
      e.getHours() - t.getHours() ||
      e.getMinutes() - t.getMinutes() ||
      e.getSeconds() - t.getSeconds() ||
      e.getMilliseconds() - t.getMilliseconds();
    return n < 0 ? -1 : n > 0 ? 1 : n;
  }
  function u(e, t) {
    (0, a.A)(2, arguments);
    var n = (0, r.default)(e),
      u = (0, r.default)(t),
      l = i(n, u),
      s = Math.abs((0, o.default)(n, u));
    n.setDate(n.getDate() - l * s);
    var c = Number(i(n, u) === -l),
      f = l * (s - c);
    return 0 === f ? 0 : f;
  }
}
