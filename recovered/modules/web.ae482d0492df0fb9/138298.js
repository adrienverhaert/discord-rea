/* Recovered shipped factory. Module 138298.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7456782..7459194
 * Raw property SHA-256: 06faffbfa4bb477dbecb54f43f23ba62a9d489d6dc363d1f26b2382e43a16e06
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => A });
  var i = n(73153),
    r = n(148494),
    a = n(56562),
    s = n(225142),
    l = n(547),
    o = n(976860),
    d = n(95701),
    c = n(734057),
    u = n(940382),
    _ = n(652215),
    E = n(746080);
  let A = {
    openPrivateChannelAsSidebar(e) {
      let { channelId: t, messageId: n, baseChannelId: a, hasSingleMessageRequest: s } = e;
      (i.h.dispatch({
        type: "SIDEBAR_VIEW_CHANNEL",
        sidebarType: u.PE.VIEW_MESSAGE_REQUEST,
        baseChannelId: a,
        channelId: t,
        details: { hasSingleMessageRequest: s },
      }),
        null != n
          ? r.A.jumpToMessage({ channelId: t, messageId: n, flash: !0 })
          : l.A.fetchMessages({ channelId: t }));
    },
    openChannelAsSidebar(e) {
      let { guildId: t, channelId: n, baseChannelId: s, flash: o = !0, details: d } = e;
      (i.h.dispatch({
        type: "SIDEBAR_VIEW_CHANNEL",
        sidebarType: u.PE.VIEW_CHANNEL,
        guildId: t,
        baseChannelId: s,
        channelId: n,
        details: d,
      }),
        null != d.initialMessageId
          ? r.A.jumpToMessage({
              channelId: n,
              messageId: d.initialMessageId,
              flash: o,
              jumpType: a.vx.INSTANT,
            })
          : l.A.fetchMessages({ guildId: t, channelId: n }));
    },
    openResourceChannelAsSidebar(e) {
      let { guildId: t, channelId: n } = e;
      null != t &&
        ((0, s.bN)(t, n, !1),
        i.h.dispatch({
          type: "SIDEBAR_VIEW_CHANNEL",
          sidebarType: u.PE.VIEW_CHANNEL,
          guildId: t,
          baseChannelId: E.VV.GUILD_HOME,
          channelId: n,
          details: { type: u.kk.CHAT },
        }));
    },
    openModReportAsSidebar(e) {
      let { guildId: t, baseChannelId: n, channelId: s, flash: o = !0, details: d } = e;
      (i.h.dispatch({
        type: "SIDEBAR_VIEW_CHANNEL",
        sidebarType: u.PE.VIEW_MOD_REPORT,
        baseChannelId: n,
        channelId: s,
        details: d,
      }),
        d?.initialMessageId != null
          ? r.A.jumpToMessage({
              channelId: s,
              messageId: d.initialMessageId,
              flash: o,
              jumpType: a.vx.INSTANT,
            })
          : l.A.fetchMessages({ guildId: t, channelId: s }));
    },
    openThreadAsSidebar(e) {
      let { guildId: t, baseChannelId: n, channelId: s, flash: E = !0, details: A } = e,
        h = c.A.getChannel(n);
      null != h && (0, d.oI)(h.type)
        ? (0, o.bG)(_.BVt.CHANNEL(t, s, A.initialMessageId ?? void 0))
        : (i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_CHANNEL,
            baseChannelId: n,
            channelId: s,
            details: A,
          }),
          null != A.initialMessageId
            ? r.A.jumpToMessage({
                channelId: s,
                messageId: A.initialMessageId,
                flash: E,
                jumpType: a.vx.INSTANT,
              })
            : l.A.fetchMessages({ guildId: t, channelId: s }));
    },
    closeChannelSidebar(e) {
      i.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
    },
    openGuildSidebar(e) {
      let { guildId: t, baseChannelId: n, sidebarType: r, details: a } = e;
      return i.h.dispatch({
        type: "SIDEBAR_VIEW_GUILD",
        sidebarType: r,
        baseChannelId: n,
        guildId: t,
        details: a,
      });
    },
    closeGuildSidebar(e) {
      i.h.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
    },
    setSelectedSearchContext(e) {
      i.h.dispatch({ type: "SIDEBAR_SET_SELECTED_SEARCH_CONTEXT", searchContextId: e });
    },
  };
}
