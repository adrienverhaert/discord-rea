/* Recovered shipped factory. Module 414133.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6795314..6795605
 * Raw property SHA-256: e3defb99b4a0563c959c65df4b0394e3a1cab1198ab2add45d6e1d8e459c61f4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { OS: () => a, ht: () => r });
  let i = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-server-theme-user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  function r(e) {
    return i.getConfig({ location: e }).enabled;
  }
  function a(e) {
    return i.useConfig({ location: e }).enabled;
  }
}
