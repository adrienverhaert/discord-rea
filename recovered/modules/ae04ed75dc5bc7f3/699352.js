/* Recovered shipped factory. Module 699352.
 * Source: recovered/web/assets/ae04ed75dc5bc7f3.js
 * UTF-16 property offsets: 252755..253835
 * Raw property SHA-256: 515f0e236e4a6afc844b1552c1ecbf21bc424d3e1be7115cafb0abfc9ed55ac8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => r, J: () => a });
  var i = n(477900);
  n(582128);
  var l = n(21878),
    s = n(230797);
  function r(e) {
    let {
      channelMessageProps: { message: t, channel: n, compact: r = !1 },
      hasSpoilerEmbeds: a,
      hasBailedAst: o,
      handleContextMenu: d,
      isInteracting: c,
      isAutomodBlockedMessage: u,
      isMessageSnapshot: m,
      renderThreadAccessory: h,
      renderSuppressEmbeds: g,
      renderReactions: p,
      hideInviteEmbedBanner: A,
      hideActivityInvite: x,
      disableComponentInteractivity: f,
      className: I,
    } = e;
    return u
      ? null
      : (0, i.jsx)(l.A, {
          message: t,
          children: (0, i.jsx)(s.Ay, {
            className: I,
            isInteracting: c,
            message: t,
            channel: n,
            compact: r,
            hasSpoilerEmbeds: a,
            hasBailedAst: o,
            isMessageSnapshot: m,
            onMediaItemContextMenu: d,
            renderThreadAccessory: h,
            disableComponentInteractivity: f,
            renderSuppressEmbeds: g,
            renderReactions: p,
            hideInviteEmbedBanner: A,
            hideActivityInvite: x,
          }),
        });
  }
  function a(e, t, n) {
    let {
      message: l,
      channel: r,
      compact: a = !1,
      renderThreadAccessory: o,
      disableReactionCreates: d,
      disableReactionUpdates: c,
    } = e;
    return (0, i.jsx)(s.OC, {
      message: l,
      channel: r,
      compact: a,
      hasSpoilerEmbeds: t,
      hasBailedAst: n,
      renderThreadAccessory: o,
      disableReactionCreates: d,
      disableReactionUpdates: c,
    });
  }
}
