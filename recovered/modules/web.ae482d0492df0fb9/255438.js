/* Recovered shipped factory. Module 255438.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9551126..9551997
 * Raw property SHA-256: ba3a1067aa7a202a5ea64c34ef13c92a80000326cd0d5469208ad196002e1120
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { XF: () => r, Xq: () => s, up: () => l });
  var i = n(660183);
  let r = 1024,
    a = { useKibibytes: !1, showDecimalForGB: !0, useSpace: !0 };
  function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
      n = t.useKibibytes ? 1024 : 1e3,
      r = t.useKibibytes ? 1024 : 1e3,
      s = Math.ceil(e / n);
    if (s < r)
      return t.useSpace
        ? i.intl.formatToPlainString(i.t.cS889N, { size: s })
        : i.intl.formatToPlainString(i.t.pIn7Af, { size: s });
    let l = s / r;
    return (
      (l = t.showDecimalForGB ? Math.round(10 * l) / 10 : Math.round(l)),
      t.useSpace
        ? i.intl.formatToPlainString(i.t.yhEXX7, { size: l })
        : i.intl.formatToPlainString(i.t.TbMX9D, { size: l })
    );
  }
  function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
      n = t.useKibibytes ? r : 1e3,
      l = t.useKibibytes ? 1024 : 1e3,
      o = e / n;
    return o / l >= 1
      ? s(o, t)
      : t.useSpace
        ? i.intl.formatToPlainString(i.t.bTzRR6, { size: Math.ceil(o) })
        : i.intl.formatToPlainString(i.t.kEk9pr, { size: Math.ceil(o) });
  }
}
