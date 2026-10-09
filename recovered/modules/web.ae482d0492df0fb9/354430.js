/* Recovered shipped factory. Module 354430.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4365966..4366538
 * Raw property SHA-256: bebc3cf672f3a207f8126c54462452c25e7136baa8002f56085f57e72bce658c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(17928),
    r = n(73153);
  let a = { topEmojisByGuildId: {} },
    s = a,
    l = {};
  class o extends i.Ay.PersistedStore {
    static displayName = "TopEmojiStore";
    static persistKey = "TopEmojiStore";
    initialize(e) {
      s = e ?? a;
    }
    getState() {
      return s;
    }
    getTopEmojiIdsByGuildId(e) {
      return s.topEmojisByGuildId[e];
    }
    getIsFetching(e) {
      return l[e];
    }
  }
  let d = new o(r.h, {
    LOGOUT: function () {
      ((s = a), (l = {}));
    },
    TOP_EMOJIS_FETCH: function (e) {
      let { guildId: t } = e;
      l[t] = !0;
    },
    TOP_EMOJIS_FETCH_SUCCESS: function (e) {
      let { guildId: t, topEmojisMetadata: n } = e;
      ((s.topEmojisByGuildId[t] = n.map((e) => e.emojiId)), (l[t] = !1));
    },
  });
}
