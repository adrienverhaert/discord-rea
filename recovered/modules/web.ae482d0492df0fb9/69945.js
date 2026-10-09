/* Recovered shipped factory. Module 69945.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6848940..6849315
 * Raw property SHA-256: bd340cb6e26e9b0d342e1db16db0cb695c7d524051edbb3d16dd18af48334b20
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(734057),
    r = n(576705),
    a = n(287809),
    s = n(158045);
  n(980504);
  var l = n(818348);
  function o(e, t, n) {
    let o = i.A.getChannel(n);
    if (e?.guildId === "0" || e?.guildId === o?.guild_id || e?.guildId === t) return !0;
    let d = s.Ay.canUseSoundboardEverywhere(a.default.getCurrentUser());
    return (null == o || null == o.guild_id || r.A.can(l.xB.USE_EXTERNAL_SOUNDS, o)) && d;
  }
}
