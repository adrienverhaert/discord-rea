/* Recovered shipped factory. Module 457408.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3028367..3028740
 * Raw property SHA-256: 757b3176feeb6e609c5d9aaa401a2d56d15b9d8f90e96b2d85f950d9086fdb41
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  let i = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-05-age-restricted-application-commands",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  var r = n(501592),
    a = n(587895);
  function s(e) {
    if (!i.getConfig({ location: "isApplicationAgeRestricted" }).enabled) return !1;
    let t = a.A.getApplication(e);
    return (0, r.K)(t?.contentClassification);
  }
}
