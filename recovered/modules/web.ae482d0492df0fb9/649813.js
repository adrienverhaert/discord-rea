/* Recovered shipped factory. Module 649813.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3215782..3216714
 * Raw property SHA-256: 0e20cc0305d6f5f681fc81c55f581bceb135aa62e058d8782994d941e610c698
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(73153),
    r = n(730852),
    a = n(439372),
    s = n(976860),
    l = n(345942),
    o = n(192820),
    d = n(309010),
    c = n(967198),
    u = n(652215);
  class _ extends a.A {
    actions = {
      GUILD_CREATE: this.handleGuildCreate,
      CHANNEL_CREATE: this.handleChannelCreate,
      LOGOUT: this.handleLogout,
    };
    handleGuildCreate(e) {
      let { guild: t } = e,
        n = d.Ay.getChannelId(u.ME),
        i = d.Ay.getVoiceChannelId();
      (t.id === n && (0, l.u)(t.id),
        t.id === i &&
          !1 !== t.unavailable &&
          null == i &&
          r.default.selectVoiceChannel((0, d.cX)(t.id)));
    }
    handleChannelCreate(e) {
      let { channel: t } = e;
      if (t.type !== u.rbe.GROUP_DM) return;
      let n = t.originChannelId,
        i = d.Ay.getChannelId(u.eGj);
      (null == c.A.getGuildId() && null != n && n === i && (0, s.pX)(u.BVt.CHANNEL(u.ME, t.id)),
        null != n &&
          n === d.Ay.getVoiceChannelId() &&
          r.default.selectVoiceChannel(t.id, o.Ay.isVideoEnabled()));
    }
    handleLogout() {
      i.h.dispatch({
        type: "VOICE_CHANNEL_SELECT",
        channelId: null,
        guildId: null,
        video: !1,
        currentVoiceChannelId: null,
        joinVoiceId: null,
      });
    }
  }
  let E = new _();
}
