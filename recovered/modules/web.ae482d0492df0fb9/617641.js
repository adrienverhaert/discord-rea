/* Recovered shipped factory. Module 617641.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7432254..7432626
 * Raw property SHA-256: d817db359031160cd6a8418afa74a5a0a3fb9fceda7e1375fbcf70d68ef96549
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Lc: () => a, wv: () => r });
  let i = (0, n(240921).Ay)({
    name: "2026-04-inappropriate-conversations-prescan",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  function r(e) {
    let { location: t } = e,
      { enabled: n } = i.getConfig({ location: t });
    return n;
  }
  function a(e) {
    let { location: t } = e,
      { enabled: n } = i.useConfig({ location: t });
    return n;
  }
}
