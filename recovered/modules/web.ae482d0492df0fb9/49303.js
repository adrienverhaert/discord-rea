/* Recovered shipped factory. Module 49303.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5418966..5419491
 * Raw property SHA-256: 48ecef48fde2e4f3f0b549a68a6fd75f9b9e469809aa587d8032689359092c69
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { PY: () => a, Rk: () => s, jb: () => o, q9: () => l });
  var i = n(174459),
    r = n(652215);
  let a = {
      ALL_SYSTEM_MESSAGES: "all_system_messages",
      LEADERBOARD_SYSTEM_MESSAGES: "leaderboard_system_messages",
      WHITEBOARD_SYSTEM_MESSAGES: "whiteboard_system_messages",
    },
    s = { WINNER_BADGE: "winner_badge", LEADERBOARD_SYSTEM_MESSAGE: "leaderboard_system_message" };
  function l(e, t, n) {
    i.default.track(r.HAw.SERVER_HUB_TOGGLE_SETTING, { guild_id: e, type: t, value: n });
  }
  function o(e, t) {
    i.default.track(r.HAw.SERVER_HUB_VISIT, { guild_id: e, source: t });
  }
}
