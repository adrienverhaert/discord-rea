/* Recovered shipped factory. Module 646917.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7028105..7028492
 * Raw property SHA-256: ece8a660171c20cd71052808e249ece021449edefd7a67a6ee98f0fc93734708
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { m: () => o, z: () => l });
  var i = n(17928),
    r = n(287809),
    a = n(158045),
    s = n(576761);
  function l() {
    return (0, i.bG)([r.default], () => o(r.default.getCurrentUser()));
  }
  function o(e) {
    return null == e
      ? s.MA.INELIGIBLE
      : a.Ay.canUseMoreQuestOrbs(e)
        ? (0, s._z)(e) === s.Et.XBOX_GAME_PASS
          ? s.MA.XBOX_GAME_PASS
          : s.MA.NITRO
        : e?.isFractionalPremiumWithNoStandardSub()
          ? s.MA.INELIGIBLE
          : s.MA.UPSELL;
  }
}
