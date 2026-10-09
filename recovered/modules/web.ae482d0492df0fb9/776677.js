/* Recovered shipped factory. Module 776677.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2652454..2654127
 * Raw property SHA-256: 0ba7e7ae893f219896ab84f2822b56a8d9a5115889d514a80c8061d581458fb6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => f, o: () => h });
  var i,
    r = n(723702),
    a = n(170148),
    s = n(454292),
    l = n(550151),
    o = n(206589),
    d = n(125017),
    c = n(55730),
    u = n(287613),
    _ = n(874546),
    E = n(702631),
    A = n(652215),
    h =
      (((i = {}).CAN_JOIN = "can_join"), (i.CANNOT_JOIN = "cannot_join"), (i.JOINED = "joined"), i);
  function f(e) {
    let t,
      n,
      {
        user: i,
        activity: h,
        application: f,
        channelId: I,
        currentUser: p,
        isEmbedded: T,
        ChannelStore: m,
        GuildStore: g,
        GuildMemberCountStore: S,
        RelationshipStore: N,
        SelectedChannelStore: C,
        VoiceStateStore: O,
        PermissionStore: R,
        LocalActivityStore: L,
        SelfPresenceStore: y,
        EmbeddedActivitiesStore: D,
      } = e;
    if (
      (!T && null != (t = (0, s.A)(L, y, h?.application_id)) && (0, o.w)(t, h)) ||
      (T && null != (n = D.getCurrentEmbeddedActivity()) && n.applicationId === h?.application_id)
    )
      return "joined";
    if (null == i) return "cannot_join";
    if (T && null != I)
      return (0, l.Ay)({
        userId: i.id,
        activity: h,
        channelId: I,
        currentUser: p,
        application: f,
        isActivitiesEnabledForCurrentPlatform: (0, a.A)(),
        ChannelStore: m,
        VoiceStateStore: O,
        PermissionStore: R,
        GuildStore: g,
      }) === l.Gy.CAN_JOIN
        ? "can_join"
        : "cannot_join";
    if (
      (T && null == I && !(0, c.A)(h, A.jUm.CONTEXTLESS)) ||
      (!T && (!(0, _.Ay)(h) || !(0, r.platformSupportsActivityJoin)()))
    )
      return "cannot_join";
    let v = (0, d._)(h);
    if (!(0, u.A)(v) || (0, E.U)(v)) return "cannot_join";
    if ((0, c.A)(h, A.jUm.PARTY_PRIVACY_FRIENDS) && N.isFriend(i.id)) return "can_join";
    if ((0, c.A)(h, A.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
      let e = m.getChannel(C.getVoiceChannelId());
      if (null == e || !O.isInChannel(e.id, i.id)) return "cannot_join";
      switch (e.type) {
        case A.rbe.DM:
        case A.rbe.GROUP_DM:
          return "can_join";
      }
      let t = g.getGuild(e.getGuildId());
      if (null == t || t.features.has(A.GuildFeatures.COMMUNITY)) return "cannot_join";
      let n = S.getMemberCount(t.id);
      if (null != n && n < 100) return "can_join";
    }
    return "cannot_join";
  }
}
