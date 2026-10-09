/* Recovered shipped factory. Module 864145.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6846620..6846947
 * Raw property SHA-256: f2e3afb0ef4e2f19abb6a89985a7e59d708dec1db93b79b882a2132a82d4fac2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { K: () => r, X: () => a });
  let i = (0, n(945810).mj)({
    name: "2026-03-soundmoji-rendering",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  function r(e) {
    let { location: t } = e;
    return i.getConfig({ location: t }).enabled;
  }
  function a(e) {
    let { location: t } = e;
    return i.useConfig({ location: t }).enabled;
  }
}
