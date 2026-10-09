/* Recovered shipped factory. Module 951001.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 581264..582090
 * Raw property SHA-256: b8015a33ef53ba1fa30471755db38b599252a5b56aa9e0488cfe60e421bdb523
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(73153);
  let r = {
    updateChannelDimensions(e, t, n, r, a, s) {
      (i.h.dispatch({
        type: "UPDATE_CHANNEL_DIMENSIONS",
        channelId: e,
        timestamp: t,
        scrollTop: n,
        scrollHeight: r,
        offsetHeight: a,
      }),
        s?.());
    },
    updateChannelListScroll(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      i.h.dispatch({
        type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
        guildId: e,
        scrollTop: t,
        channelIds: n,
      });
    },
    channelListScrollTo(e, t) {
      i.h.dispatch({
        type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
        guildId: e,
        scrollTo: t,
        channelIds: [],
      });
    },
    clearChannelListScrollTo(e) {
      i.h.dispatch({
        type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
        guildId: e,
        scrollTo: null,
        channelIds: [],
      });
    },
    clearChannelDimensions(e, t) {
      this.updateChannelDimensions(e, Date.now(), null, null, null, t);
    },
    updateGuildListScrollTo(e) {
      i.h.dispatch({ type: "UPDATE_GUILD_LIST_DIMENSIONS", scrollTop: e });
    },
  };
}
