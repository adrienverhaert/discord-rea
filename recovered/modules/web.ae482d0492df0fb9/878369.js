/* Recovered shipped factory. Module 878369.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3025880..3026273
 * Raw property SHA-256: 0ad165ea08d10bc17789864ed97dead8dfcd6ad5aa5202a03029bbab6e3b4876
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Q: () => a });
  var i = n(280450),
    r = n(768349);
  function a(e) {
    return {
      id: e?.id ?? "0",
      linkType: e?.linkType ?? r.J.UNKNOWN,
      referrerId: e?.referrerId ?? i.default.getId(),
      activityCustomId: e?.activityCustomId,
      onView: e?.onView,
      onLinkCopied: e?.onLinkCopied,
      guildId: e?.guildId,
      channelId: e?.channelId,
      messageId: e?.messageId,
      isDeadEnd: e?.isDeadEnd ?? !1,
      appEmbedState: e?.appEmbedState,
    };
  }
}
