/* Recovered shipped factory. Module 329972.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2767802..2768028
 * Raw property SHA-256: 52aa9dd16cd59b5c58cc715201e27ab38f555b61e2ba3b9a0dc369d8283793b1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { v: () => r });
  let i = (0, n(945810).mj)({
    name: "2025-09-server-nsfw-level",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  function r(e) {
    return i.getConfig({ location: e }).enabled;
  }
}
