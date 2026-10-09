/* Recovered shipped factory. Module 508155.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5076427..5077731
 * Raw property SHA-256: d688dcce21a69299507e59db4ad07889136b073758d494458269405d0d8f3daf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { t: () => s });
  var i = n(652215),
    r = n(202541),
    a = n(660183);
  let s = [
    {
      tier: i.TVA.TIER_1,
      perks: [
        {
          perkIcon: r.TP.EMOJI,
          getCopy: () =>
            a.intl.formatToPlainString(a.t.Tlz0x1, {
              numEmojiSlots: r.TG[i.TVA.TIER_1].limits.emoji,
            }),
        },
        {
          perkIcon: r.TP.SOUNDBOARD,
          getCopy: () =>
            a.intl.formatToPlainString(a.t["v+MIfo"], {
              numSoundboardSlots: r.TG[i.TVA.TIER_1].limits.soundboardSounds,
            }),
          isNew: !0,
        },
        { perkIcon: r.TP.ANIMATED, getCopy: () => a.intl.string(a.t.PbAyub) },
        { perkIcon: r.TP.AUDIO, getCopy: () => a.intl.string(a.t["WH+OeI"]) },
      ],
    },
    {
      tier: i.TVA.TIER_2,
      perks: [
        { perkIcon: r.TP.STREAM, getCopy: () => a.intl.string(a.t.y4ft4D) },
        {
          perkIcon: r.TP.UPLOAD,
          getCopy: () =>
            a.intl.formatToPlainString(a.t.aFRl53, { uploadSizeLimit: a.intl.string(a.t.M6qV8j) }),
        },
        { perkIcon: r.TP.CUSTOM_ROLE_ICON, getCopy: () => a.intl.string(a.t["6PV6Qc"]) },
        { perkIcon: r.TP.CUSTOMIZATION, getCopy: () => a.intl.string(a.t["1a5rjl"]) },
      ],
    },
    {
      tier: i.TVA.TIER_3,
      perks: [
        { perkIcon: r.TP.VANITY, getCopy: () => a.intl.string(a.t.adNGjW) },
        {
          perkIcon: r.TP.UPLOAD,
          getCopy: () =>
            a.intl.formatToPlainString(a.t.aFRl53, { uploadSizeLimit: a.intl.string(a.t.yMOW8D) }),
        },
        { perkIcon: r.TP.AUDIO, getCopy: () => a.intl.string(a.t.Tsljqo) },
        { perkIcon: r.TP.ANIMATED, getCopy: () => a.intl.string(a.t.nRKlmC) },
        {
          perkIcon: r.TP.STAGE_VIDEO,
          getCopy: () => a.intl.formatToPlainString(a.t.hsZ88d, { numStageSeats: i.uaN }),
        },
      ],
    },
  ];
}
