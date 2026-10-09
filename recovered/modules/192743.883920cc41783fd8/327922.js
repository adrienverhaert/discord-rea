/* Recovered shipped factory. Module 327922.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 23935..24538
 * Raw property SHA-256: 6aa8d2387cc69981eb1ee137ffc939d25b2a0f88e1213a308ba5f60ce58efeab
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var r = n(29583),
    o = n(618027),
    a = n(998280),
    i = n(98430);
  function u(e, t) {
    (0, o.A)(1, arguments);
    var n,
      u,
      l,
      s,
      c,
      f,
      d,
      h,
      p = (0, i.q)(),
      y = (0, a.A)(
        null !=
          (n =
            null !=
            (u =
              null !=
              (l =
                null != (s = null == t ? void 0 : t.weekStartsOn)
                  ? s
                  : null == t || null == (c = t.locale) || null == (f = c.options)
                    ? void 0
                    : f.weekStartsOn)
                ? l
                : p.weekStartsOn)
              ? u
              : null == (d = p.locale) || null == (h = d.options)
                ? void 0
                : h.weekStartsOn)
          ? n
          : 0,
      );
    if (!(y >= 0 && y <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var m = (0, r.default)(e),
      v = m.getUTCDay();
    return (m.setUTCDate(m.getUTCDate() - (7 * (v < y) + v - y)), m.setUTCHours(0, 0, 0, 0), m);
  }
}
