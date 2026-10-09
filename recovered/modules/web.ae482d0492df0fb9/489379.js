/* Recovered shipped factory. Module 489379.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7987166..7987730
 * Raw property SHA-256: c12e201df14232aef90c02616d9bbe4ccb5312cbfd0c30af77bd878e5ce354cf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d, c: () => o });
  var i = n(17928),
    r = n(765379),
    a = n(714114),
    s = n(290863),
    l = n(977997);
  function o(e) {
    let { activity: t, voiceChannelId: n, voiceStateForSession: i } = e;
    return (0, r.A)(t) && i?.channelId === n;
  }
  function d(e) {
    let { userId: t, guildId: n } = e,
      { voiceState: r, voiceChannel: d } = (0, a.Ay)({ userId: t, guildId: n }),
      c = d?.id;
    return {
      voiceState: r,
      voiceChannel: d,
      voiceActivity: (0, i.bG)([s.A, l.A], () => {
        if (null != t && null != c)
          return (
            s.A.findActivity(t, (e) =>
              o({
                activity: e,
                voiceChannelId: c,
                voiceStateForSession: l.A.getVoiceStateForSession(t, e.session_id),
              }),
            ) ?? void 0
          );
      }),
    };
  }
}
