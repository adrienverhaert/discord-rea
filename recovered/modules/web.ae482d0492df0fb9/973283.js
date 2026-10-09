/* Recovered shipped factory. Module 973283.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4153060..4153372
 * Raw property SHA-256: 7bbdb03543aded14e552e0c287892d18c5d7d93476ebd228abe65e7000940d92
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { D2: () => r, WD: () => a });
  let i = (0, n(945810).mj)({
    name: "2026-09-design-systems-notification-components",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  function r(e) {
    return i.useConfig({ location: e }).enabled;
  }
  function a(e) {
    return i.getConfig({ location: e }).enabled;
  }
}
