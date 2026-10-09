/* Recovered shipped factory. Module 387408.
 * Source: recovered/web/assets/952c5754e975d897.js
 * UTF-16 property offsets: 95..589
 * Raw property SHA-256: d000ebdd43eedf973953760d0cbadea1ebd5f8e693c546eea07588cffed1d0b3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, s, t) {
  (t.d(s, { A: () => m }), t(938796));
  var a = t(427930);
  function m(e, s) {
    return null == (s = s ?? ((0, a.A)(e) ? e.messageSnapshots[0] : void 0))
      ? e
      : e.merge({
          content: s.message.content,
          attachments: s.message.attachments,
          embeds: s.message.embeds,
          flags: s.message.flags,
          components: s.message.components,
          editedTimestamp: null,
          timestamp: s.message.timestamp,
          codedLinks: s.message.codedLinks,
          reactions: [],
          messageSnapshots: [],
          stickers: s.message.stickers,
          stickerItems: s.message.stickerItems,
          customRenderedContent: null,
        });
  }
}
