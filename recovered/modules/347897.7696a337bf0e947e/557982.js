/* Recovered shipped factory. Module 557982.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1010578..1010930
 * Raw property SHA-256: e3ed26d6cff38d1c2e4276fdcd521d5bd8418bb2bffd655a81a85ebc39ff8ac1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(439619),
    i = r(741623),
    o = n("%Number%"),
    a = r(858156),
    s = r(449950),
    l = r(483955);
  e.exports = function (e) {
    var t = a(e) ? e : s(e, o);
    if ("symbol" == typeof t) throw new i("Cannot convert a Symbol value to a number");
    if ("bigint" == typeof t) throw new i("Conversion from 'BigInt' to 'number' is not allowed.");
    return "string" == typeof t ? l(t) : +t;
  };
}
