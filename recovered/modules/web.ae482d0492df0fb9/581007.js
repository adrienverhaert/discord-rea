/* Recovered shipped factory. Module 581007.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5536906..5537462
 * Raw property SHA-256: 7764e259c2cab227049ae284fb75f6ad31f8f840b926ac8504e21fcd231f2cf9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Dm: () => s, aC: () => a, kY: () => l });
  var i = n(600975),
    r = n(688151);
  let a = (0, i.C)({
    kind: "guild",
    id: "2026-02_hangout_window",
    label: "Hangout Window",
    defaultConfig: { enableHangoutWindow: !1 },
    commonTriggerPoint: r.$G.VOICE_CALL,
    treatments: [{ id: 1, label: "Enable Hangout Window", config: { enableHangoutWindow: !0 } }],
  });
  function s(e) {
    let { guildId: t, location: n } = e;
    return a.useExperiment({ guildId: t, location: n }, { autoTrackExposure: !0 });
  }
  function l(e) {
    let { guildId: t, location: n } = e;
    return a.getCurrentConfig({ guildId: t, location: n }, { autoTrackExposure: !0 });
  }
}
