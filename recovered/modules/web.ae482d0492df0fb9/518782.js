/* Recovered shipped factory. Module 518782.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5422731..5423939
 * Raw property SHA-256: e9ef4b18c30328f8bf16dbd95733de88c8f8d4184c06adae509d5ee3baddaa2e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Nu: () => l, RE: () => a, Rt: () => o, zu: () => s });
  var i,
    r,
    a =
      (((i = {})[(i.GAMING_LEADERBOARD_STAT_UNSPECIFIED = 0)] =
        "GAMING_LEADERBOARD_STAT_UNSPECIFIED"),
      (i[(i.GAMING_LEADERBOARD_STAT_HOURS_PLAYED = 1)] = "GAMING_LEADERBOARD_STAT_HOURS_PLAYED"),
      (i[(i.GAMING_LEADERBOARD_STAT_DAYS_PLAYED = 2)] = "GAMING_LEADERBOARD_STAT_DAYS_PLAYED"),
      (i[(i.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED = 3)] =
        "GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED"),
      i),
    s =
      (((r = {})[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
      (r[(r.COMPETITION_ENDED = 1)] = "COMPETITION_ENDED"),
      (r[(r.COMPETITION_STARTED = 2)] = "COMPETITION_STARTED"),
      (r[(r.LEADER_CHANGED = 3)] = "LEADER_CHANGED"),
      r);
  function l(e) {
    return null != e &&
      null != e.user_id &&
      null != e.value &&
      null != e.event &&
      0 !== e.event &&
      e.event in s &&
      null != e.stat &&
      0 !== e.stat &&
      e.stat in a
      ? {
          event: e.event,
          stat: e.stat,
          userId: e.user_id,
          secondaryUserId: e.secondary_user_id ?? null,
          value: e.value,
        }
      : null;
  }
  function o(e) {
    if (null == e) return null;
    let t = e.winning_stat ?? null,
      n = e.winning_streak ?? null,
      i = e.winning_week ?? null,
      r = e.current_leader_stat ?? null,
      a = e.current_leader_week ?? null;
    return null == t && null == n && null == i && null == r && null == a
      ? null
      : {
          winningStat: t,
          winningStreak: n,
          winningWeek: i,
          winningValue: e.winning_value ?? null,
          currentLeaderStat: r,
          currentLeaderWeek: a,
        };
  }
}
