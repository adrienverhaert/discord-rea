/* Recovered shipped factory. Module 196736.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4773508..4773792
 * Raw property SHA-256: f9124f7d97f0e95d5a02f49e88b3b5f583c659cbdd3e85590073815ecbf673ae
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { H: () => r });
  let i = (0, n(945810).mj)({
    name: "2026-06-game-server-hosting-in-shop",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 } },
  });
  function r(e) {
    let { location: t } = e;
    return i.useConfig({ location: t }).enabled;
  }
}
