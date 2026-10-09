/* Recovered shipped factory. Module 429433.
 * Source: recovered/web/assets/ae04ed75dc5bc7f3.js
 * UTF-16 property offsets: 253836..254197
 * Raw property SHA-256: c5d55b412d19cd0931fcf042d52d719654fdf6fab5fbdf927fc8a68432548720
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { C: () => r });
  var i = n(477900);
  n(582128);
  var l = n(879064),
    s = n(307731);
  function r(e) {
    let { channel: t, closePopout: n, analyticsOverride: r, onSelectEmoji: a, messageId: o } = e;
    return (0, i.jsx)(l.A, {
      closePopout: n,
      channel: t,
      onSelectEmoji: a,
      pickerIntention: s.EmojiIntention.REACTION,
      showAddEmojiButton: null == t || null != t.guild_id,
      analyticsOverride: r,
      messageId: o,
    });
  }
}
