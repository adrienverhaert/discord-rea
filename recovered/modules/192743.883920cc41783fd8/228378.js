/* Recovered shipped factory. Module 228378.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 25464..25830
 * Raw property SHA-256: 1c65e24cf565475044993b5e6fa05c27689d1d96761fe2acf79bc75648d688d8
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
      i = (0, r.A)(t);
    if (isNaN(i)) return new Date(NaN);
    if (!i) return n;
    var u = n.getDate(),
      l = new Date(n.getTime());
    return (l.setMonth(n.getMonth() + i + 1, 0), u >= l.getDate())
      ? l
      : (n.setFullYear(l.getFullYear(), l.getMonth(), u), n);
  }
}
