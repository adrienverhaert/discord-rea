/* Recovered shipped factory. Module 699645.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 151466..152096
 * Raw property SHA-256: e1d80c02157ba5e851b927c3904ccbbc6e17a69912fe9f98c6c00c40863c48db
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(72408),
    o = n(850666),
    a = n(484785),
    i = n(48106),
    u = n(109850),
    l = n(377482),
    s = n(208009),
    c = n(678270),
    f = "[object Arguments]",
    d = "[object Array]",
    h = "[object Object]",
    p = Object.prototype.hasOwnProperty;
  e.exports = function (e, t, n, y, m, v) {
    var g = l(e),
      b = l(t),
      w = g ? d : u(e),
      _ = b ? d : u(t);
    ((w = w == f ? h : w), (_ = _ == f ? h : _));
    var k = w == h,
      x = _ == h,
      S = w == _;
    if (S && s(e)) {
      if (!s(t)) return !1;
      ((g = !0), (k = !1));
    }
    if (S && !k)
      return (v || (v = new r()), g || c(e) ? o(e, t, n, y, m, v) : a(e, t, w, n, y, m, v));
    if (!(1 & n)) {
      var E = k && p.call(e, "__wrapped__"),
        O = x && p.call(t, "__wrapped__");
      if (E || O) {
        var T = E ? e.value() : e,
          R = O ? t.value() : t;
        return (v || (v = new r()), m(T, R, n, y, v));
      }
    }
    return !!S && (v || (v = new r()), i(e, t, n, y, m, v));
  };
}
