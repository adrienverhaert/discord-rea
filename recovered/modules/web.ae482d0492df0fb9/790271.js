/* Recovered shipped factory. Module 790271.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4155078..4155597
 * Raw property SHA-256: f466f64eb8dd0f53928d3c238ef177c2ce86104983ddf14107e0a49cdeb88842
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { mz: () => o, ni: () => l });
  var i = n(17928),
    r = n(945810),
    a = n(287809);
  let s = (0, r.mj)({
    name: "2026-02-mana-playground-access",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  function l(e) {
    let t = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
      n = t?.isStaff() === !0 || t?.isStaffPersonal() === !0,
      r = s.useConfig({ location: e }).enabled;
    return n || r;
  }
  function o(e) {
    let t = a.default.getCurrentUser();
    return (
      t?.isStaff() === !0 || t?.isStaffPersonal() === !0 || s.getConfig({ location: e }).enabled
    );
  }
}
