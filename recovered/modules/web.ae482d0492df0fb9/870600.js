/* Recovered shipped factory. Module 870600.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4143347..4143880
 * Raw property SHA-256: 6852c2e72723a2df2a2f5abc6bc7601d2a62ffa4d7d1d346728c3004f88c0cde
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { El: () => r, cE: () => a });
  var i = n(441574);
  function r(e) {
    return {
      emojis: e.emojis.map((e) =>
        null != e.id ? { custom_emoji_id: e.id } : { unicode_emoji: e.name },
      ),
      animation: e.animation,
      typing_suggestion: e.typingSuggestion,
    };
  }
  function a(e) {
    return null == e
      ? null
      : {
          emojis: (e.emojis ?? []).map((e) =>
            null != e.custom_emoji_id
              ? { id: e.custom_emoji_id, name: "", animated: e.animated ?? !1 }
              : { name: e.unicode_emoji ?? "" },
          ),
          typingSuggestion: e.typing_suggestion ?? i.gm.UNSPECIFIED,
          animation: e.animation ?? i.pR.UNSPECIFIED,
        };
  }
  (i.gm.UNSPECIFIED, i.pR.UNSPECIFIED);
}
