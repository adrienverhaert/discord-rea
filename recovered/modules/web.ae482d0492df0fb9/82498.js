/* Recovered shipped factory. Module 82498.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6716316..6718758
 * Raw property SHA-256: c73c3cb79698fcb478572480d6c60301aae596bc471e8acea796d697a71620ec
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { By: () => T, E4: () => g, Gb: () => m, Yc: () => p, uq: () => S });
  var i = n(666860),
    r = n(427358),
    a = n(47675),
    s = n(321191),
    l = n(734057),
    o = n(498642),
    d = n(696451),
    c = n(71393),
    u = n(192820),
    _ = n(573163),
    E = n(994500),
    A = n(116956),
    h = n(287809),
    f = n(927813),
    I = n(652215);
  function p(e) {
    if (null == e) return;
    let t = l.A.getChannel(e);
    if (null == t) return;
    let n = c.A.getGuild(t.guild_id),
      i = null == n && t.isDM() && h.default.getUser(t.recipients[0])?.bot === !0,
      r = t.isPrivate() ? t.recipients.length : 0,
      a = n?.features.has(I.GuildFeatures.VIP_REGIONS),
      s = o.A.getMemberCount(t.guild_id),
      d = _.Ay.getSnapshot(e, 10 * f.A.Millis.SECOND),
      u = d.unread,
      E = d.mentionCount;
    return {
      channel_type: t.type,
      is_app_dm: i,
      channel_size_total: r,
      channel_was_unread: u,
      channel_mention_count: E,
      guild_is_vip: a,
      guild_size_total: s,
    };
  }
  function T(e) {
    if (null == e) return;
    let t = l.A.getChannel(e);
    if (null == t) return;
    let n = t.guild_id,
      r = u.Ay.isVideoEnabled(),
      { voice_state_count: a, video_stream_count: s, video_enabled: o } = (0, i.JK)(n, e, r),
      { custom_status_count: d } = (0, i.dL)(n, e);
    return {
      voice_state_count: a,
      channel_type: t.type,
      channel_bitrate: t.bitrate,
      video_stream_count: s,
      video_enabled: o,
      custom_status_count: d,
    };
  }
  function m(e) {
    let t = A.A.getRTCConnection(e);
    if (null == t) return;
    let { duration: n, avg_resolution: i } = t.getVideoStats() ?? {};
    return {
      duration: n,
      max_viewers: t.getMaxViewers(),
      channel_type: l.A.getChannel(t.channelId)?.type,
      avg_resolution: i,
      share_application_name: t.analyticsContext.streamApplication?.name,
    };
  }
  function g(e, t) {
    if (null == e) return;
    let { userId: n, guildId: i } = e,
      l = h.default.getUser(n),
      o = r.A.getUserAffinity(n),
      c = null != i ? d.Ay.getMember(i, n) : null;
    return {
      relationship_type: E.A.getRelationshipType(n),
      profile_layout: t,
      is_guild_profile: null != i,
      is_bot_profile: l?.bot,
      user_status: (0, a.CD)(n),
      profile_properties: (0, a.XH)({ user: l, userProfile: e._userProfile }),
      guild_profile_properties: (0, a.XH)({
        guildMember: c,
        guildMemberProfile: e._guildMemberProfile,
      }),
      num_mutual_guilds: s.A.getMutualGuilds(n)?.length,
      num_mutual_friends: s.A.getMutualFriendsCount(n),
      profile_badges:
        e
          .getBadges()
          ?.map((e) => {
            let { id: t } = e;
            return t;
          })
          .filter((e) => "string" == typeof e) ?? [],
      communication_probability: o?.communicationProbability,
      communication_rank: o?.communicationRank,
      related_since: E.A.getSince(n),
      avatar_decoration_sku_id: l?.avatarDecoration?.skuId,
      profile_effect_sku_id: e.profileEffect?.skuId,
      profile_frame_sku_id: e.profileFrame?.skuId,
    };
  }
  function S(e, t, n) {
    return {
      upsell_type: e,
      ...(null != t && { has_premium_stream_fps: t }),
      ...(null != n && { has_premium_stream_resolution: n }),
    };
  }
}
