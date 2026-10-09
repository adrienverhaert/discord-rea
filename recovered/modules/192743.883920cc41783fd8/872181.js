/* Recovered shipped factory. Module 872181.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 636300..636725
 * Raw property SHA-256: 22c4e729eb764aca0aa7d15679b5076e5a5ffafadc902f14ec05f5dbfddca1be
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r,
    o = n(860511),
    a = n(985848),
    i = n(339626),
    u = n(676528),
    l = n(65978),
    s = n(192819),
    c = n(627),
    f = o.Function,
    d =
      /MSIE .\./.test(l) ||
      ("BUN" === u &&
        ((r = o.Bun.version.split(".")).length < 3 ||
          ("0" === r[0] && (r[1] < 3 || ("3" === r[1] && "0" === r[2])))));
  e.exports = function (e, t) {
    var n = t ? 2 : 1;
    return d
      ? function (r, o) {
          var u = c(arguments.length, 1) > n,
            l = i(r) ? r : f(r),
            d = u ? s(arguments, n) : [],
            h = u
              ? function () {
                  a(l, this, d);
                }
              : l;
          return t ? e(h, o) : e(h);
        }
      : e;
  };
}
