/* Recovered shipped factory. Module 789316.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 21001..21689
 * Raw property SHA-256: f7de17b8c82bde21dec7e21f37d57b696aa2e2595b2028dc5bd45cf72fabd394
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var r = n(29583),
    o = n(327922),
    a = n(564804),
    i = n(618027),
    u = n(998280),
    l = n(98430);
  function s(e, t) {
    (0, i.A)(1, arguments);
    var n = (0, r.default)(e);
    return (
      Math.round(
        ((0, o.A)(n, t).getTime() -
          (function (e, t) {
            (0, i.A)(1, arguments);
            var n,
              r,
              s,
              c,
              f,
              d,
              h,
              p,
              y = (0, l.q)(),
              m = (0, u.A)(
                null !=
                  (n =
                    null !=
                    (r =
                      null !=
                      (s =
                        null != (c = null == t ? void 0 : t.firstWeekContainsDate)
                          ? c
                          : null == t || null == (f = t.locale) || null == (d = f.options)
                            ? void 0
                            : d.firstWeekContainsDate)
                        ? s
                        : y.firstWeekContainsDate)
                      ? r
                      : null == (h = y.locale) || null == (p = h.options)
                        ? void 0
                        : p.firstWeekContainsDate)
                  ? n
                  : 1,
              ),
              v = (0, a.A)(e, t),
              g = new Date(0);
            return (g.setUTCFullYear(v, 0, m), g.setUTCHours(0, 0, 0, 0), (0, o.A)(g, t));
          })(n, t).getTime()) /
          6048e5,
      ) + 1
    );
  }
}
