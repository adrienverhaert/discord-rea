/* Recovered shipped factory. Module 706083.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5751477..5752254
 * Raw property SHA-256: 46bd091410e3e704ca084a56668e41a40d48a6c2896fa279bb1794930a1f8a9c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { o: () => E });
  var i = n(730852),
    r = n(235393),
    a = n(376943),
    s = n(741231),
    l = n(734057),
    o = n(696451),
    d = n(71393),
    c = n(449054);
  let u = (0, n(945810).mj)({
    name: "2026-02-voice-channel-link-click",
    kind: "user",
    defaultConfig: { navigateOnly: !1 },
    variations: { 1: { navigateOnly: !0 } },
  });
  var _ = n(652215);
  async function E(e, t, n) {
    if (null == t) return;
    if (
      (r.A.trackDiscordLinkClicked({ guildId: e, channelId: t, messageId: n }),
      null != e && !o.Ay.isCurrentUserGuest(e))
    ) {
      let i = d.A.getGuild(e);
      if (i?.joinedAt == null)
        try {
          await c.Z2(e, {}, { channelId: t, messageId: n });
          return;
        } catch {}
    }
    let E = l.A.getChannel(t);
    if (null != E && null == n && E.isGuildVocal() && (0, a.nc)(E)) {
      let { navigateOnly: e } = u.getConfig({ location: "channel_mention" });
      if (!e) return void i.default.selectVoiceChannel(E.id);
    }
    (0, s.A)(_.BVt.CHANNEL(e, t, n));
  }
}
