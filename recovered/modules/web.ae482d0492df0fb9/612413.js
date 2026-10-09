/* Recovered shipped factory. Module 612413.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6930861..6931339
 * Raw property SHA-256: 2b156ddd5d3125b764357962f9fb68788320521aed96ee7e49c9495785929250
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Tp: () => l, mh: () => s, zA: () => a });
  var i = n(945810);
  let r = (0, i.mj)({
      kind: "user",
      name: "2026-09-youtube-3p",
      defaultConfig: { enabled: !1 },
      variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    a = (0, i.mj)({
      kind: "user",
      name: "2026-09-youtube-3p-nagbar",
      defaultConfig: { enabled: !1 },
      variations: { 1: { enabled: !0 } },
    });
  function s(e) {
    let { location: t } = e,
      { enabled: n } = r.useConfig({ location: t });
    return n;
  }
  function l(e) {
    let { location: t } = e,
      { enabled: n } = r.getConfig({ location: t });
    return n;
  }
}
