/* Recovered shipped factory. Module 755584.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 579213..581020
 * Raw property SHA-256: a19ea1de471a9d81dd375d9addfbcbc2f84cd5cd7ed3eae515fbe134880bcbed
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => A }), n(938796));
  var i = n(562708),
    r = n(636537),
    a = n(933681),
    s = n(73153),
    l = n(568185),
    o = n(543465),
    d = n(477427),
    c = n(499785),
    u = n(832712),
    _ = n(652215),
    E = n(355097);
  let A = {
    createChannel(e) {
      let {
        guildId: t,
        type: n,
        name: A,
        permissionOverwrites: h = [],
        bitrate: f,
        userLimit: I,
        parentId: p,
        skuId: T,
        branchId: m,
        applicationId: g,
        flags: S,
        availableTags: N,
        gameId: C,
      } = e;
      s.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId: t, channelType: n });
      let O = { type: n, name: A, permission_overwrites: h };
      if (
        (null != f && f !== _.gp3 && (O.bitrate = f),
        null != I && I > 0 && (O.user_limit = I),
        null != p && (O.parent_id = p),
        null != S && (O.flags = S),
        null != N &&
          N.length > 0 &&
          (O.available_tags = N.map((e) => ({
            name: e.name,
            emoji_id: e.emojiId,
            emoji_name: e.emojiName,
            moderated: e.moderated,
          }))),
        null != C && (O.game_id = C),
        n === _.rbe.GUILD_STORE)
      ) {
        if (null == T) throw Error("Unexpected missing SKU");
        ((O.sku_id = T), (O.branch_id = m));
      }
      if (n === _.rbe.GUILD_APP) {
        if (null == g) throw Error("Unexpected missing application");
        O.application_id = g;
      }
      return c.A.post({
        url: _.Rsh.GUILD_CHANNELS(t),
        body: O,
        oldFormErrors: !0,
        trackedActionData: {
          event: i.NetworkActionNames.CHANNEL_CREATE,
          properties: (e) =>
            (0, a.e0)({
              is_private: h.length > 0,
              channel_id: e?.body?.id,
              channel_type: e?.body?.type,
            }),
        },
        rejectWithError: (0, r.fT)(),
      }).then(
        (e) => (
          o.Ay.isOptInEnabled(t) &&
            u.A.updateChannelOverrideSettings({
              guildId: t,
              channelId: e.body.id,
              settings: { flags: E.vv.OPT_IN_ENABLED },
              label: d.fd.OptedIn,
            }),
          l.A.checkGuildTemplateDirty(t),
          e
        ),
        (e) => {
          throw (s.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: e.body }), e);
        },
      );
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, s) =>
      c.A.post({
        url: _.Rsh.GUILD_CHANNELS(e),
        body: { name: t, type: n, topic: s },
        oldFormErrors: !0,
        trackedActionData: {
          event: i.NetworkActionNames.CHANNEL_CREATE,
          properties: (e) =>
            (0, a.e0)({ is_private: !0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
        },
        rejectWithError: (0, r.fT)(),
      }),
  };
}
