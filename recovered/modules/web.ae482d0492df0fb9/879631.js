/* Recovered shipped factory. Module 879631.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9682847..9683489
 * Raw property SHA-256: fb868e29671253d90f1396b748cc1e2fe541483b18ed29567a4cb4302b40eebd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $: () => s });
  var i = n(536637),
    r = n.n(i),
    a = n(660183);
  function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.intl.string(a.t.Yl1D84),
      i = r().duration(e, "seconds");
    return i.days() > 0
      ? a.intl.formatToPlainString(t ? a.t.GBLpQ8 : a.t["k2UNz+"], { days: i.days() })
      : i.hours() > 0
        ? a.intl.formatToPlainString(t ? a.t.rhY1Rs : a.t.xCjYxK, { hours: i.hours() })
        : i.minutes() > 0
          ? a.intl.formatToPlainString(t ? a.t["XIGt+W"] : a.t.iXLF9W, { minutes: i.minutes() })
          : e > 0
            ? a.intl.formatToPlainString(t ? a.t.pyvjRp : a.t.geSp4K, { seconds: i.seconds() })
            : t
              ? a.intl.string(a.t.Yl1D84)
              : n;
  }
}
