/* Recovered shipped factory. Module 347209.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4367327..4367659
 * Raw property SHA-256: 1d101cc1f4d3f5c3f178dfcd59f24fffc6cb11d8a649c0308ed7d5fc9837f5c9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(439372),
    r = n(967198),
    a = n(17591),
    s = n(307731);
  class l extends i.A {
    actions = { EMOJI_INTERACTION_INITIATED: this.handleInteraction };
    handleInteraction(e) {
      let { interaction: t } = e;
      if ([s.EmojiInteractionPoint.EmojiButtonMouseEntered].includes(t)) {
        let e = r.A.getGuildId();
        (0, a.V)(e);
      }
    }
  }
  let o = new l();
}
