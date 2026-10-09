/* Recovered shipped factory. Module 643056.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3092314..3092656
 * Raw property SHA-256: f1c7b2bacb1add0b6d8dfa6bcc231ce100c550c6bf5d53f5d797a5afa6ea2890
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a, d: () => r });
  let i = (0, n(945810).mj)({
    name: "2026-08-badge-management",
    kind: "user",
    defaultConfig: { enabled: !1, tenureBadgeHideable: !1 },
    variations: {
      1: { enabled: !0, tenureBadgeHideable: !0 },
      2: { enabled: !0, tenureBadgeHideable: !1 },
    },
  });
  function r(e) {
    let { location: t } = e;
    return i.useConfig({ location: t }).enabled;
  }
  let a = i;
}
