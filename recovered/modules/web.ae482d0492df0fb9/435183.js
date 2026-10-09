/* Recovered shipped factory. Module 435183.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 569133..572767
 * Raw property SHA-256: d0ae82b435b75e342ed2b4e84cd1a6fe95f0b380f2392145c5bac2a1f28950d0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, {
    Ay: () => f,
    D3: () => h,
    RT: () => A,
    Ts: () => c,
    VN: () => u,
    c4: () => _,
    fy: () => E,
  }),
    n(938796));
  var i = n(636537),
    r = n(73153),
    a = n(568185);
  n(250953);
  var s = n(867455);
  n(863036);
  var l = n(734057),
    o = n(398590),
    d = n(652215);
  function c(e, t, n) {
    r.h.dispatch({ type: "CHANNEL_SETTINGS_INIT", channelId: e, location: t, subsection: n });
  }
  function u() {
    r.h.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
  }
  function _(e) {
    r.h.dispatch({ type: "CHANNEL_SETTINGS_SET_SECTION", section: e });
  }
  function E(e) {
    let {
      name: t,
      type: n,
      topic: i,
      bitrate: a,
      userLimit: s,
      nsfw: l,
      flags: o,
      rateLimitPerUser: d,
      defaultThreadRateLimitPerUser: c,
      defaultAutoArchiveDuration: u,
      template: _,
      defaultReactionEmoji: E,
      rtcRegion: A,
      videoQualityMode: h,
      autoArchiveDuration: f,
      locked: I,
      invitable: p,
      availableTags: T,
      defaultSortOrder: m,
      defaultForumLayout: g,
      defaultTagSetting: S,
      iconEmoji: N,
      themeColor: C,
      applicationId: O,
    } = e;
    r.h.dispatch({
      type: "CHANNEL_SETTINGS_UPDATE",
      name: t,
      channelType: n,
      topic: i,
      bitrate: a,
      userLimit: s,
      nsfw: l,
      flags: o,
      rateLimitPerUser: d,
      defaultThreadRateLimitPerUser: c,
      defaultAutoArchiveDuration: u,
      template: _,
      defaultReactionEmoji: E,
      rtcRegion: A,
      videoQualityMode: h,
      autoArchiveDuration: f,
      locked: I,
      invitable: p,
      availableTags: T,
      defaultSortOrder: m,
      defaultForumLayout: g,
      defaultTagSetting: S,
      iconEmoji: N,
      themeColor: C,
      applicationId: O,
    });
  }
  async function A(e, t) {
    let {
        name: n,
        type: o,
        position: c,
        topic: u,
        bitrate: _,
        userLimit: E,
        nsfw: A,
        flags: h,
        permissionOverwrites: f,
        rateLimitPerUser: I,
        defaultThreadRateLimitPerUser: p,
        defaultAutoArchiveDuration: T,
        template: m,
        defaultReactionEmoji: g,
        rtcRegion: S,
        videoQualityMode: N,
        autoArchiveDuration: C,
        locked: O,
        invitable: R,
        availableTags: L,
        defaultSortOrder: y,
        defaultForumLayout: D,
        defaultTagSetting: v,
        iconEmoji: b,
        themeColor: M,
        applicationId: P,
      } = t,
      U = l.A.getChannel(e);
    return (
      null != U &&
        (o === U.type && (o = void 0),
        (u ?? "") === (U.topic ?? "") && (u = void 0),
        (P ?? null) === (U.application_id ?? null) && (P = void 0)),
      U?.isGameInvitesChannel() && (T = void 0),
      r.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
      await s.A.unarchiveThreadIfNecessary(e),
      i.Bo.patch({
        url: d.Rsh.CHANNEL(e),
        body: {
          name: n,
          type: o,
          position: c,
          topic: u,
          bitrate: _,
          user_limit: E,
          nsfw: A,
          flags: h,
          permission_overwrites: f,
          rate_limit_per_user: I,
          default_thread_rate_limit_per_user: p,
          default_auto_archive_duration: T,
          template: m,
          rtc_region: S,
          video_quality_mode: N,
          auto_archive_duration: C,
          locked: O,
          invitable: R,
          default_reaction_emoji:
            null != g
              ? { emoji_id: g?.emojiId, emoji_name: g?.emojiName }
              : null === g
                ? null
                : void 0,
          available_tags: L?.map((e) => ({
            id: e.id,
            name: e.name,
            emoji_id: e.emojiId,
            emoji_name: e.emojiName,
            moderated: e.moderated,
          })),
          default_sort_order: y,
          default_forum_layout: D,
          default_tag_setting: v,
          icon_emoji: null != b ? { id: b.id, name: b.name } : null === b ? null : void 0,
          theme_color: M,
          application_id: P,
        },
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
      }).then(
        (t) => {
          r.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS", channelId: e });
          let n = U?.getGuildId();
          return (null == n || U?.isThread() || a.A.checkGuildTemplateDirty(n), t);
        },
        (e) => (r.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
      )
    );
  }
  async function h(e) {
    let t = l.A.getChannel(e);
    await i.Bo.del({ url: d.Rsh.CHANNEL(e), oldFormErrors: !0, rejectWithError: !0 });
    let n = t?.getGuildId();
    (null == n || t?.isThread() || a.A.checkGuildTemplateDirty(n), u());
  }
  let f = {
    init: c,
    open: function (e, t, n) {
      (c(e, t, n), (0, o.id)(d.zgK.CHANNEL_SETTINGS));
    },
    close: u,
    setSection: _,
    selectPermissionOverwrite: function (e) {
      r.h.dispatch({ type: "CHANNEL_SETTINGS_OVERWRITE_SELECT", overwriteId: e });
    },
    updateChannel: E,
    saveChannel: A,
    deleteChannel: h,
    updateVoiceChannelStatus: function (e, t) {
      return i.Bo.put({
        url: d.Rsh.UPDATE_VOICE_CHANNEL_STATUS(e),
        body: { status: t },
        rejectWithError: (0, i.fT)(),
      });
    },
    removeLinkedLobby: function (e) {
      return i.Bo.del({ url: d.Rsh.CHANNEL_LINKED_LOBBY(e), rejectWithError: !0 });
    },
  };
}
