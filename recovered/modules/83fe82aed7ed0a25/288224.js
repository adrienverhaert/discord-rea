/* Recovered shipped factory. Module 288224.
 * Source: recovered/web/assets/83fe82aed7ed0a25.js
 * UTF-16 property offsets: 1268..1431
 * Raw property SHA-256: f531855e0c1151e025aede3a1f8addeb20ba0f489da9410116e3f9cee0ed58ec
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, i, t) {
  t.d(i, { X: () => a });
  var n = t(73153);
  function a(e) {
    let { emojiId: i, userImage: t } = e;
    n.h.dispatch({ type: "EMOJI_CACHE_RAW_EMOJI_ASSET", emojiId: i, userImage: t });
  }
}
