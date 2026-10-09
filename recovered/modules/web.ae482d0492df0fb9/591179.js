/* Recovered shipped factory. Module 591179.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7973586..7973895
 * Raw property SHA-256: 198b1bcd77df6f79cf3ad9e3b19c3dd06967f8c1b6949cdc49d21436f1891810
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { E: () => a, X: () => r });
  let i = (0, n(945810).mj)({
    name: "2026-03-wysiwyg-user-profile-editing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  function r(e) {
    let { enabled: t } = i.useConfig({ location: e });
    return t;
  }
  function a(e) {
    return i.getConfig({ location: e }).enabled;
  }
}
