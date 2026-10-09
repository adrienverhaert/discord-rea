/* Recovered shipped factory. Module 564804.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 21690..22509
 * Raw property SHA-256: 8e4d8626a92c3e9863a7ecb1b2dd1928ea807298c9053a420db6052236a853c2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var r = n(29583),
    o = n(618027),
    a = n(327922),
    i = n(998280),
    u = n(98430);
  function l(e, t) {
    (0, o.A)(1, arguments);
    var n,
      l,
      s,
      c,
      f,
      d,
      h,
      p,
      y = (0, r.default)(e),
      m = y.getUTCFullYear(),
      v = (0, u.q)(),
      g = (0, i.A)(
        null !=
          (n =
            null !=
            (l =
              null !=
              (s =
                null != (c = null == t ? void 0 : t.firstWeekContainsDate)
                  ? c
                  : null == t || null == (f = t.locale) || null == (d = f.options)
                    ? void 0
                    : d.firstWeekContainsDate)
                ? s
                : v.firstWeekContainsDate)
              ? l
              : null == (h = v.locale) || null == (p = h.options)
                ? void 0
                : p.firstWeekContainsDate)
          ? n
          : 1,
      );
    if (!(g >= 1 && g <= 7))
      throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var b = new Date(0);
    (b.setUTCFullYear(m + 1, 0, g), b.setUTCHours(0, 0, 0, 0));
    var w = (0, a.A)(b, t),
      _ = new Date(0);
    (_.setUTCFullYear(m, 0, g), _.setUTCHours(0, 0, 0, 0));
    var k = (0, a.A)(_, t);
    return y.getTime() >= w.getTime() ? m + 1 : y.getTime() >= k.getTime() ? m : m - 1;
  }
}
