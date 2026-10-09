/* Recovered shipped factory. Module 567242.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1005577..1005890
 * Raw property SHA-256: 61f3263b6186b2a01f0fd5cb2191bedd547e4c416d2b7785bc3409f05989f9d5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(439619),
    i = r(906046),
    o = r(741623),
    a = r(32561),
    s = n("%Reflect.apply%", !0) || i("Function.prototype.apply");
  e.exports = function (e, t) {
    var r = arguments.length > 2 ? arguments[2] : [];
    if (!a(r))
      throw new o("Assertion failed: optional `argumentsList`, if provided, must be a List");
    return s(e, t, r);
  };
}
