/* Recovered shipped factory. Module 571136.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 45891..46180
 * Raw property SHA-256: 1d4442df006153bae2f9e1c772d8fbb85e7491c4e0b9cb9d597e114239659a2c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { default: () => a }));
  var r = n(29583),
    o = n(618027);
  function a(e, t) {
    (0, o.A)(2, arguments);
    var n = (0, r.default)(e).getTime(),
      a = (0, r.default)(t.start).getTime(),
      i = (0, r.default)(t.end).getTime();
    if (!(a <= i)) throw RangeError("Invalid interval");
    return n >= a && n <= i;
  }
}
