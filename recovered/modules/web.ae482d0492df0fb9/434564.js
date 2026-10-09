/* Recovered shipped factory. Module 434564.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6796472..6796898
 * Raw property SHA-256: 6fee1420c8f3f32bcf593dc5977a20c675466d13006ae81e4710a5956bb5ae1e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o, G: () => l });
  var i = n(17928),
    r = n(71393),
    a = n(864310),
    s = n(652215);
  function l(e) {
    let t = (0, a.Z)(e),
      n = r.A.getGuild(e)?.premiumTier ?? s.TVA.NONE;
    return s.M2T[n] + t.available;
  }
  function o(e) {
    let t = (0, a.A)(e),
      n = (0, i.bG)([r.A], () => r.A.getGuild(e)?.premiumTier ?? s.TVA.NONE);
    return (
      ((0, i.bG)(
        [r.A],
        () => r.A.getGuild(e)?.features.has(s.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0,
      )
        ? 0
        : s.M2T[n]) + t.available
    );
  }
}
