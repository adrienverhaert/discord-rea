/* Recovered shipped factory. Module 118517.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7215726..7216200
 * Raw property SHA-256: 85ff6a1d884334a5ae2cab34185e70318cecef98a2442a4bb2fc658a66a885c9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Jx: () => s, Yf: () => r, vz: () => a });
  var i = n(73153);
  function r(e) {
    let {
      message: t,
      channel: n,
      shouldMention: r,
      showMentionToggle: a,
      source: s,
      mediaMention: l,
    } = e;
    i.h.dispatch({
      type: "CREATE_PENDING_REPLY",
      message: t,
      channel: n,
      shouldMention: r,
      showMentionToggle: a,
      source: s,
      mediaMention: l,
    });
  }
  function a(e, t) {
    i.h.dispatch({ type: "SET_PENDING_REPLY_SHOULD_MENTION", channelId: e, shouldMention: t });
  }
  function s(e) {
    i.h.dispatch({ type: "DELETE_PENDING_REPLY", channelId: e });
  }
}
