/* Recovered shipped factory. Module 877991.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2274242..2274557
 * Raw property SHA-256: b3fa81d181ed3ef813e7431b3323e6035d2747c21fe65206c6256a78067b939c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { L: () => o });
  var i = n(189551),
    r = n(186111),
    a = n(625494),
    s = n(652215),
    l = n(307731);
  let o = {
    binds: ["mod+e"],
    comboKeysBindGlobal: !0,
    action: () =>
      !(r.A.getLayers().length > 0) &&
      ((0, i.K)(l.EmojiInteractionPoint.SearchEmojiKeybindPressed),
      a._.dispatchToLastSubscribed(s.jej.TOGGLE_EMOJI_POPOUT),
      !1),
  };
}
