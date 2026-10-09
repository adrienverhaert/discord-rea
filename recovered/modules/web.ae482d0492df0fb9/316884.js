/* Recovered shipped factory. Module 316884.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4271570..4271993
 * Raw property SHA-256: 04271c36a80ff7349c4cbf547f8de43ff8483e51781661a25e70febc064ddec4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o, b: () => l });
  var i = n(702841),
    r = n(236285),
    a = n(307731);
  let s = [];
  function l(e) {
    let { emojiStoreInstance: t = r.Ay, guildId: n, pickerIntention: i } = e;
    return {
      topEmojis: i !== a.EmojiIntention.REACTION ? t.getTopEmoji(n) : s,
      newlyAddedEmojis: i !== a.EmojiIntention.REACTION ? t.getNewlyAddedEmoji(n) : s,
    };
  }
  function o(e, t) {
    return (0, i.cf)(
      [r.Ay],
      () => l({ emojiStoreInstance: r.Ay, guildId: e, pickerIntention: t }),
      [e, t],
    );
  }
}
