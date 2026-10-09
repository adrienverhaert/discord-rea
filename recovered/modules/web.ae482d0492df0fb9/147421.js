/* Recovered shipped factory. Module 147421.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7199303..7199613
 * Raw property SHA-256: 5c36e310bd905aa5f05144a4288e597d52d79e3689ed84a96f447cb2a41ad1fb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { h: () => r, p: () => a });
  var i = n(73153);
  function r(e, t, n, r) {
    i.h.dispatch({
      type: "BURST_REACTION_PICKER_ANIMATION_ADD",
      messageId: e,
      emojiName: t,
      emojiId: n,
      startPosition: r,
    });
  }
  function a(e, t, n) {
    i.h.dispatch({
      type: "BURST_REACTION_PICKER_ANIMATION_CLEAR",
      messageId: e,
      emojiName: t,
      emojiId: n,
    });
  }
}
