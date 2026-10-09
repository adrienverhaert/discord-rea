/* Recovered shipped factory. Module 86379.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3128403..3128795
 * Raw property SHA-256: ed349740e8bb6749ce9f0e9bbec3e12646a15e020abcc52f7b665bdb43333576
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Hp: () => s, dw: () => l });
  var i = n(945810),
    r = n(477421);
  let a = (0, i.mj)({
    name: "2026-03-block-purchases",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  function s() {
    let { enabled: e } = a.useConfig({ location: "c519a9_1" }),
      { defaultBillingCountryCode: t } = (0, r.A)();
    return e || "RU" === t;
  }
  function l() {
    let { enabled: e } = a.useConfig({ location: "dc120b_3" });
    return e;
  }
}
