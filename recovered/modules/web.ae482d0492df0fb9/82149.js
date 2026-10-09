/* Recovered shipped factory. Module 82149.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7647998..7648896
 * Raw property SHA-256: 4d6dd45934cbfa2c3526fc5568ebd263efca6e2a0a7c63db9d6cda88828cbbb4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Cy: () => _, IS: () => E, UW: () => u, eL: () => c });
  var i = n(280450),
    r = n(734057),
    a = n(71393),
    s = n(312006),
    l = n(516607),
    o = n(652215);
  let d = "stage:";
  function c(e, t) {
    let n = 0,
      r = i.default.getId();
    s.Ay.isSpeaker(r, e.id) && (n |= 1);
    let l = a.A.getGuild(e.getGuildId());
    null != l &&
      (l.features.has(o.GuildFeatures.PARTNERED) && (n |= 2),
      l.features.has(o.GuildFeatures.VERIFIED) && (n |= 4));
    let c = n.toString(16);
    return `${d}${e.guild_id}:${e.id}:${c}:${t.id}`;
  }
  function u(e) {
    if (null == e || null == e.party) return;
    let { id: t, size: n } = e.party;
    try {
      if (null == t || !t.startsWith(d)) return;
      let [, e, i, r, a] = t.split(":"),
        s = parseInt(r, 16);
      return {
        guildId: e,
        channelId: i,
        size: n,
        userIsSpeaker: (1 & s) != 0,
        guildIsPartnered: (2 & s) != 0,
        guildIsVerified: (4 & s) != 0,
        stageInstanceId: a,
      };
    } catch (e) {
      return null;
    }
  }
  function _(e) {
    return e?.application_id === l.SS;
  }
  function E(e) {
    let t = u(e);
    if (null == t) return !1;
    let { channelId: n } = t;
    return null != r.A.getChannel(n);
  }
}
