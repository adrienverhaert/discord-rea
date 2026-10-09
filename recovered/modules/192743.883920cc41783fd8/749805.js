/* Recovered shipped factory. Module 749805.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 20261..20611
 * Raw property SHA-256: 64415f6624a68890b0437f673afca0cc9ddcf14eb411e67f76e6badd1f43c6f4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var r = n(29583),
    o = n(576103),
    a = n(216803),
    i = n(618027);
  function u(e) {
    (0, i.A)(1, arguments);
    var t = (0, r.default)(e);
    return (
      Math.round(
        ((0, o.A)(t).getTime() -
          (function (e) {
            (0, i.A)(1, arguments);
            var t = (0, a.A)(e),
              n = new Date(0);
            return (n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0), (0, o.A)(n));
          })(t).getTime()) /
          6048e5,
      ) + 1
    );
  }
}
