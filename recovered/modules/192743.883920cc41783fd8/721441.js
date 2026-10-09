/* Recovered shipped factory. Module 721441.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 28143..28714
 * Raw property SHA-256: a7d77582949546bbdcf565b8745e46bacd7f4495fbded0427611d08d338a7741
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var r = n(29583),
    o = n(992663),
    a = n(683706),
    i = n(618027),
    u = n(290656),
    l = n(514356);
  function s(e, t) {
    (0, i.A)(2, arguments);
    var n,
      s = (0, r.default)(e),
      c = (0, r.default)(t),
      f = (0, a.A)(s, c),
      d = Math.abs((0, o.default)(s, c));
    if (d < 1) n = 0;
    else {
      (1 === s.getMonth() && s.getDate() > 27 && s.setDate(30), s.setMonth(s.getMonth() - f * d));
      var h = (0, a.A)(s, c) === -f;
      ((function (e) {
        (0, i.A)(1, arguments);
        var t = (0, r.default)(e);
        return (0, u.default)(t).getTime() === (0, l.default)(t).getTime();
      })((0, r.default)(e)) &&
        1 === d &&
        1 === (0, a.A)(e, c) &&
        (h = !1),
        (n = f * (d - Number(h))));
    }
    return 0 === n ? 0 : n;
  }
}
