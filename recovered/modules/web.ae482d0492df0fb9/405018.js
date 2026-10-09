/* Recovered shipped factory. Module 405018.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8311104..8311920
 * Raw property SHA-256: 3c46fb0cce60c52a93b070911802f329d4cd22f08827d14a9d0b87200c039998
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l, M: () => o });
  var i = n(17928),
    r = n(71393),
    a = n(607567),
    s = n(652215);
  function l(e) {
    return (0, i.cf)(
      [a.Ay, r.A],
      () => {
        let t = a.Ay.countVoiceStatesForChannel(e.id),
          n = r.A.getGuild(e.getGuildId());
        return null == n
          ? { reachedLimit: !1, limit: -1 }
          : e.type === s.rbe.GUILD_STAGE_VOICE
            ? { reachedLimit: t > n.maxStageVideoChannelUsers, limit: n.maxStageVideoChannelUsers }
            : {
                reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                limit: n.maxVideoChannelUsers,
              };
      },
      [e],
    );
  }
  function o(e) {
    let t = a.Ay.countVoiceStatesForChannel(e.id),
      n = r.A.getGuild(e.getGuildId());
    return null == n
      ? { reachedLimit: !1, limit: -1 }
      : e.type === s.rbe.GUILD_STAGE_VOICE
        ? { reachedLimit: t > n.maxStageVideoChannelUsers, limit: n.maxStageVideoChannelUsers }
        : {
            reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
            limit: n.maxVideoChannelUsers,
          };
  }
}
