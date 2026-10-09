/* Recovered shipped factory. Module 593643.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3218420..3218877
 * Raw property SHA-256: 745f2f37214424984978055840ad9b154337539b9e527a59e230295e2b5c38b0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { D8: () => s, _U: () => a });
  var i = n(600975),
    r = n(688151);
  let a = (0, i.C)({
    id: "2026-03_voice_badge",
    kind: "guild",
    commonTriggerPoint: r.$G.VOICE_CALL,
    label: "Display Voice Channel Badge",
    defaultConfig: { enabled: !1 },
    treatments: [
      { id: 0, label: "Control", config: { enabled: !1 } },
      { id: 1, label: "Show voice badges", config: { enabled: !0 } },
    ],
  });
  function s(e) {
    let { guildId: t, location: n } = e;
    return a.useExperiment({ guildId: t, location: n }, { autoTrackExposure: !0 });
  }
}
