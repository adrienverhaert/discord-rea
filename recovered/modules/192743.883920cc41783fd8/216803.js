/* Recovered shipped factory. Module 216803.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 20612..21000
 * Raw property SHA-256: a7829c4531f39acce836c7a314527acf597454d4d50790e9f19f5f802028ad95
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(29583),
    o = n(618027),
    a = n(576103);
  function i(e) {
    (0, o.A)(1, arguments);
    var t = (0, r.default)(e),
      n = t.getUTCFullYear(),
      i = new Date(0);
    (i.setUTCFullYear(n + 1, 0, 4), i.setUTCHours(0, 0, 0, 0));
    var u = (0, a.A)(i),
      l = new Date(0);
    (l.setUTCFullYear(n, 0, 4), l.setUTCHours(0, 0, 0, 0));
    var s = (0, a.A)(l);
    return t.getTime() >= u.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
  }
}
