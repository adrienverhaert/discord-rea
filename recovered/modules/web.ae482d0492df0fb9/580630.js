/* Recovered shipped factory. Module 580630.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9666897..9668021
 * Raw property SHA-256: 8ef86d44c4ee2a457ce947f1198465ce6e7b22674436236b28f4a5424de4826c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $g: () => d, CE: () => c, RS: () => _, l9: () => u });
  var i = n(465323),
    r = n(773669),
    a = n(723702),
    s = n(202541);
  n(818348);
  var l = n(660183);
  let o = Object.freeze(["en-CA", "en-AU", "en-NZ"]);
  function d(e, t, n) {
    return (function (e, t, n) {
      let s = { ...(n ?? {}) },
        l = n?.localeOverride ?? r.default.locale;
      ("en-US" === l && o.includes(r.default.systemLocale) && (s.currencyDisplay = "code"),
        "en-US" === l &&
          (0, a.isWindows)() &&
          "en-GB" === r.default.systemLocale &&
          (s.currencyDisplay = "code"));
      let { maximumFractionDigits: d, minimumFractionDigits: c } = s;
      return (0 === d && null == c && (s.minimumFractionDigits = 0), (0, i.$g)(e, t, l, s));
    })(e, t, n);
  }
  function c(e, t, n) {
    if (t === s.WT.YEAR) return l.intl.formatToPlainString(l.t["rS8FA+"], { price: e });
    if (t === s.WT.MONTH && 1 === n) return l.intl.formatToPlainString(l.t.AbOLNu, { price: e });
    if (t === s.WT.MONTH && n > 1)
      return l.intl.formatToPlainString(l.t["Qc+9ww"], { price: e, intervalCount: n });
    throw Error(`Unsupported interval type: ${t}, and interval count: ${n}`);
  }
  function u(e, t) {
    return Intl.NumberFormat(e, { style: "percent", minimumFractionDigits: 0 }).format(t);
  }
  function _(e, t, n) {
    var i;
    return (i = d(e, t, n)).length > 5 ? i.replace(/\.00(?=[\s)]|$)/g, "") : i;
  }
}
