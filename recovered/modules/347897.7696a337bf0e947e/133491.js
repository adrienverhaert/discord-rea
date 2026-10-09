/* Recovered shipped factory. Module 133491.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 577062..577515
 * Raw property SHA-256: 65551c192fb1022f10f6b15a429d1671aeb6adeb28b293fcfb6f46cdc04b3779
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n,
    i = r(906046),
    o = r(429013)(/^\s*(?:function)?\*/),
    a = r(581070)(),
    s = r(428495),
    l = i("Object.prototype.toString"),
    u = i("Function.prototype.toString"),
    c = function () {
      if (!a) return !1;
      try {
        return Function("return function*() {}")();
      } catch (e) {}
    };
  e.exports = function (e) {
    if ("function" != typeof e) return !1;
    if (o(u(e))) return !0;
    if (!a) return "[object GeneratorFunction]" === l(e);
    if (!s) return !1;
    if (void 0 === n) {
      var t = c();
      n = !!t && s(t);
    }
    return s(e) === n;
  };
}
