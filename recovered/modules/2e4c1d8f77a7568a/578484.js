/* Recovered shipped factory. Module 578484.
 * Source: recovered/web/assets/2e4c1d8f77a7568a.js
 * UTF-16 property offsets: 6958..7295
 * Raw property SHA-256: 5566aa497c84c3c72d7e2c1d613b29c9ffb0a83106446a907c9eecc4c2a09272
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, a) {
  a.d(t, { D: () => i });
  let n = (0, a(945810).mj)({
    name: "2026-09-server-onboarding-setup-progress",
    kind: "user",
    defaultConfig: { showSetupProgressRow: !1, boostBeforeAddApp: !1 },
    variations: {
      1: { showSetupProgressRow: !0, boostBeforeAddApp: !1 },
      2: { showSetupProgressRow: !0, boostBeforeAddApp: !0 },
    },
  });
  function i(e) {
    return n.useConfig({ location: e });
  }
}
