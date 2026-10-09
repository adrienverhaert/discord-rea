/* Recovered shipped factory. Module 546121.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7067060..7067951
 * Raw property SHA-256: 3051fb4ea70eb692847f8c5f221ca2170a5fcb1865bc071e20559442292c4c6d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { WM: () => o });
  let i = (0, n(945810).mj)({
    name: "2026-08-vq-remaining-time-truncation",
    kind: "user",
    defaultConfig: { truncateMoreThanSeconds: null },
    variations: { 1: { truncateMoreThanSeconds: 30 }, 2: { truncateMoreThanSeconds: 60 } },
  });
  var r = n(792620),
    a = n(190107),
    s = n(660183);
  function l(e, t) {
    let { minutes: n, seconds: i } = (0, r.lG)(e),
      a = 60 * n + i,
      l = t?.truncate != null && a > t.truncate,
      o = l ? t.truncate : a;
    return o >= 60
      ? s.intl.formatToPlainString(l ? s.t.XTdnRd : s.t.PHhTXX, { count: Math.round(o / 60) })
      : s.intl.formatToPlainString(l ? s.t["spl/XS"] : s.t.rUfeQx, { count: o });
  }
  function o(e) {
    let { truncateMoreThanSeconds: t } = i.getConfig({ location: a.rE.QUESTS_CARD });
    return (function (e, t) {
      let { truncateMoreThanSeconds: n } = t;
      return e.percentComplete > 0
        ? s.intl.formatToPlainString(s.t["pF/deA"], { durationShort: l(e) })
        : s.intl.formatToPlainString(s.t.CHrvqg, { durationShort: l(e, { truncate: n }) });
    })(e, { truncateMoreThanSeconds: t });
  }
}
