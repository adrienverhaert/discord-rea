/* Recovered shipped factory. Module 576103.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 23713..23934
 * Raw property SHA-256: 25b87f970058c9308ac55632712f535a53bcb1e2bf2e19af7a9a5f47b1593452
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var r = n(29583),
    o = n(618027);
  function a(e) {
    (0, o.A)(1, arguments);
    var t = (0, r.default)(e),
      n = t.getUTCDay();
    return (t.setUTCDate(t.getUTCDate() - (7 * (n < 1) + n - 1)), t.setUTCHours(0, 0, 0, 0), t);
  }
}
