/* Recovered shipped factory. Module 935159.
 * Source: recovered/web/assets/6e68f8fcd1e8e1d7.js
 * UTF-16 property offsets: 95..532
 * Raw property SHA-256: 37f92f534431c3144d7d1e733fd604a718aab05785cb4f3c95d0ea32f3815331
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, E, p) {
  p.d(E, { Lx: () => N, Nt: () => h, iF: () => _, pE: () => c });
  var i = p(73153);
  function _(t) {
    let { eventId: E, stageId: p } = t;
    (null != E || null != p) &&
      i.h.dispatch({ type: "LIVE_CHANNEL_NOTICE_HIDE", eventId: E, stageId: p });
  }
  function N(t) {
    i.h.dispatch({ type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE", eventId: t });
  }
  function c(t) {
    i.h.dispatch({ type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN", guildEventId: t });
  }
  function h(t) {
    i.h.dispatch({ type: "EVENT_BANNER_DISMISS", eventId: t });
  }
}
