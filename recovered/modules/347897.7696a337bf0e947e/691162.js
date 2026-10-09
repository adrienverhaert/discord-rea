/* Recovered shipped factory. Module 691162.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 425084..425597
 * Raw property SHA-256: c588a90ded996c36fcddd841346936935291a6f23080aee804f5ffdf97a7f4a6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(757431),
    i = r(567242),
    o = r(933300),
    a = r(605468),
    s = r(154613),
    l = r(547210),
    u = r(475694),
    c = r(499018),
    f = r(795734),
    p = r(906046),
    d = r(400696),
    h = Object("a"),
    m = "a" !== h[0] || !(0 in h),
    v = p("String.prototype.split");
  e.exports = function (e) {
    var t,
      r = c(this),
      p = u((m && d(r) ? v(r, "") : r).length);
    if (!l(e)) throw TypeError("Array.prototype.map callback must be a function");
    arguments.length > 1 && (t = arguments[1]);
    for (var h = n(r, p), y = 0; y < p;) {
      var g = f(y);
      if (s(r, g)) {
        var b = i(e, t, [a(r, g), y, r]);
        o(h, g, b);
      }
      y += 1;
    }
    return h;
  };
}
