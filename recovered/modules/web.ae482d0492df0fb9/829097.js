/* Recovered shipped factory. Module 829097.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8299662..8299973
 * Raw property SHA-256: 8a248d5a64ce0d13e9a2cf251d3f8546d544d0128719d110d4b8af8e73a2e6fd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { _: () => r });
  let i = (0, n(945810).mj)({
    name: "2025-09-video-qoe-metrics-tracking",
    kind: "user",
    defaultConfig: { externalAnalyticsEnabled: !1 },
    variations: { 0: { externalAnalyticsEnabled: !1 }, 1: { externalAnalyticsEnabled: !0 } },
  });
  function r(e) {
    let { location: t } = e;
    return i.getConfig({ location: t });
  }
}
