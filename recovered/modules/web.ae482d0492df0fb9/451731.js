/* Recovered shipped factory. Module 451731.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4366539..4367326
 * Raw property SHA-256: 3f132a22bee19e43418f123c111693691ca6c6accf19a2ce237ed42ef46e7e0c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { l2: () => l, mz: () => d, uV: () => o });
  var i = n(636537),
    r = n(73153),
    a = n(463347),
    s = n(652215);
  function l(e) {
    (0, a.tZ)(e) ||
      (r.h.dispatch({ type: "TOP_EMOJIS_FETCH", guildId: e }),
      i.Bo.get({ url: s.Rsh.TOP_EMOJIS_FOR_GUILD(e), oldFormErrors: !0, rejectWithError: !0 }).then(
        (t) =>
          r.h.dispatch({
            type: "TOP_EMOJIS_FETCH_SUCCESS",
            guildId: e,
            topEmojisMetadata: t.body.items
              .map((e) => ({ emojiId: e.emoji_id, rank: e.emoji_rank }))
              .sort((e, t) => e.rank - t.rank),
          }),
        () => r.h.dispatch({ type: "TOP_EMOJIS_FETCH_FAILURE", guildId: e }),
      ));
  }
  function o(e, t) {
    (r.h.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED" }),
      null != e &&
        null != t &&
        r.h.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_PENDING", guildId: e, emojiId: t }));
  }
  function d(e, t) {
    null != e &&
      null != t &&
      r.h.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED", guildId: e, emojiId: t });
  }
}
