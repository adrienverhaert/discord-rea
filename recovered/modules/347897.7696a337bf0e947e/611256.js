/* Recovered shipped factory. Module 611256.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 812617..813129
 * Raw property SHA-256: 45881120c8f140fadc096a2f9efc8b6aa5de4dcc3456ecd1735623b0fdf795c1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(439619),
    i = r(207001),
    o = r(473560)(),
    a = r(267768),
    s = r(741623),
    l = n("%Math.floor%");
  e.exports = function (e, t) {
    if ("function" != typeof e) throw new s("`fn` is not a function");
    if ("number" != typeof t || t < 0 || t > 0xffffffff || l(t) !== t)
      throw new s("`length` must be a positive 32-bit integer");
    var r = arguments.length > 2 && !!arguments[2],
      n = !0,
      u = !0;
    if ("length" in e && a) {
      var c = a(e, "length");
      (c && !c.configurable && (n = !1), c && !c.writable && (u = !1));
    }
    return ((n || u || !r) && (o ? i(e, "length", t, !0, !0) : i(e, "length", t)), e);
  };
}
