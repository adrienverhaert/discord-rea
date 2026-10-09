/* Recovered shipped factory. Module 464831.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 141541..142145
 * Raw property SHA-256: 5091904589c8a6521aed82fee577ed6b6aa0fe287d9a0ee32c08ff1de48b447d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { default: () => u }));
  var r = n(29583),
    o = n(998280),
    a = n(618027),
    i = n(98430);
  function u(e, t) {
    (0, a.A)(1, arguments);
    var n,
      u,
      l,
      s,
      c,
      f,
      d,
      h,
      p = (0, i.q)(),
      y = (0, o.A)(
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
      v = m.getDay();
    return (m.setDate(m.getDate() - (7 * (v < y) + v - y)), m.setHours(0, 0, 0, 0), m);
  }
}
