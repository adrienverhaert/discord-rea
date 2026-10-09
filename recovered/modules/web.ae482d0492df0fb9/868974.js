/* Recovered shipped factory. Module 868974.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7411064..7411407
 * Raw property SHA-256: bb7702f07b0d26555b479dd9c5855bf2151adbbe52ab7fcd66c82329cdfc806d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { H: () => r, s: () => a });
  let i = (0, n(945810).mj)({
    name: "2025-05-search-results-feedback",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  function r(e) {
    let { location: t } = e,
      { enabled: n } = i.useConfig({ location: t });
    return n;
  }
  function a(e) {
    let { location: t } = e,
      { enabled: n } = i.getConfig({ location: t });
    return n;
  }
}
