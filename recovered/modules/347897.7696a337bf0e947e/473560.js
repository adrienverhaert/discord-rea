/* Recovered shipped factory. Module 473560.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 498057..498258
 * Raw property SHA-256: df2e7cf0ffeb2c4fe83a07fd17db086aff5d2bead19e0ed6df5e3ae06bd8af8f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(969001),
    i = function () {
      return !!n;
    };
  ((i.hasArrayLengthDefineBug = function () {
    if (!n) return null;
    try {
      return 1 !== n([], "length", { value: 1 }).length;
    } catch (e) {
      return !0;
    }
  }),
    (e.exports = i));
}
