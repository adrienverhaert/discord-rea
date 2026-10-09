/* Recovered shipped factory. Module 831617.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4773065..4773507
 * Raw property SHA-256: 6ac96de09f40c64876347808125700889ae0f3040815ad654a285fa6744504d2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C$: () => a, TS: () => r, x1: () => i });
  let i = (0, n(600975).C)({
    kind: "guild",
    id: "2025-08_portkey_enabled",
    label: "GameServer Enabled",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable GameServer", config: { enabled: !0 } }],
  });
  function r(e, t) {
    return i.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
  }
  function a(e, t) {
    return i.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
  }
}
