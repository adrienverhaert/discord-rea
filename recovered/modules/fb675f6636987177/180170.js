/* Recovered shipped factory. Module 180170.
 * Source: recovered/web/assets/fb675f6636987177.js
 * UTF-16 property offsets: 95..598
 * Raw property SHA-256: fc959cd6c3c3ada0faabd4e7bd9ceac63d30fbe1322f4af5b9add82866d5150e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (E, d, _) {
  _.d(d, { fq: () => N, He: () => p, Il: () => c });
  var i = _(73153);
  (_(793574), _(734057));
  var t = _(309010),
    h = _(967198);
  _(287809);
  var a = _(174459),
    e = _(435738),
    n = _(652215);
  function c() {
    (i.h.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" }),
      a.default.track(n.HAw.MEMBERLIST_CONTENT_FEED_HIDDEN, {
        channel_id: t.Ay.getChannelId(),
        guild_id: h.A.getGuildId(),
        hidden: e.A.hidden,
      }));
  }
  function p() {
    i.h.dispatch({ type: "GAME_PROFILE_OPEN" });
  }
  function N() {
    i.h.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
  }
}
