/* Recovered shipped factory. Module 446466.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 29123..29739
 * Raw property SHA-256: 58be8974c12b0a8433fde217aadbdc3d859ef00518417ae94c6b13520c078053
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { default: () => u }));
  var r = n(98430),
    o = n(29583),
    a = n(998280),
    i = n(618027);
  function u(e, t) {
    (0, i.A)(1, arguments);
    var n,
      u,
      l,
      s,
      c,
      f,
      d,
      h,
      p = (0, r.q)(),
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
    var m = (0, o.default)(e),
      v = m.getDay();
    return (
      m.setDate(m.getDate() + ((v < y ? -7 : 0) + 6 - (v - y))),
      m.setHours(23, 59, 59, 999),
      m
    );
  }
}
