/* Recovered shipped factory. Module 714736.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7541469..7541765
 * Raw property SHA-256: 66d1a4a50786bb868093bd897c3d557fc352f8e6de6ce5dc7bf7408d349ef596
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { W: () => r, j: () => a });
  let i = (0, n(945810).mj)({
    kind: "guild",
    name: "2026-09-soundboard-echo",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  function r(e, t) {
    return i.useConfig({ guildId: e, location: t });
  }
  function a(e, t) {
    return i.getConfig({ guildId: e, location: t });
  }
}
