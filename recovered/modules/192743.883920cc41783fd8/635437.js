/* Recovered shipped factory. Module 635437.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 139819..140289
 * Raw property SHA-256: 930641d5c47ff5b59746c90fecf664d44baef00b91201414e55c7e743aabcac5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { default: () => i }));
  var r = n(998280),
    o = n(29583),
    a = n(618027);
  function i(e, t) {
    (0, a.A)(2, arguments);
    var n = (0, o.default)(e),
      i = (0, r.A)(t),
      u = n.getFullYear(),
      l = n.getDate(),
      s = new Date(0);
    (s.setFullYear(u, i, 15), s.setHours(0, 0, 0, 0));
    var c = (function (e) {
      (0, a.A)(1, arguments);
      var t = (0, o.default)(e),
        n = t.getFullYear(),
        r = t.getMonth(),
        i = new Date(0);
      return (i.setFullYear(n, r + 1, 0), i.setHours(0, 0, 0, 0), i.getDate());
    })(s);
    return (n.setMonth(i, Math.min(l, c)), n);
  }
}
