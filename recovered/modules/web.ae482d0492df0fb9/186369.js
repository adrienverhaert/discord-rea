/* Recovered shipped factory. Module 186369.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3218878..3219424
 * Raw property SHA-256: 1b5da9f643df0853077b3b9134e8770c3b98a601500c913d7c2dd075cfccc8bd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { S: () => a, b: () => s });
  var i = n(600975),
    r = n(688151);
  let a = (0, i.C)({
    kind: "guild",
    id: "2025-12_voice_channel_hoisting",
    label: "Voice Channel Hoisting",
    commonTriggerPoint: r.$G.VOICE_CALL,
    defaultConfig: { enableWaveformIcon: !1, enableHighlight: !1 },
    treatments: [
      {
        id: 1,
        label: "Both waveform and highlight",
        config: { enableWaveformIcon: !0, enableHighlight: !0 },
      },
      {
        id: 2,
        label: "Waveform icon only",
        config: { enableWaveformIcon: !0, enableHighlight: !1 },
      },
    ],
  });
  function s(e, t) {
    return a.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !1 });
  }
}
