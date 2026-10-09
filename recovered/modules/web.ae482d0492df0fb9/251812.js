/* Recovered shipped factory. Module 251812.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5420077..5420695
 * Raw property SHA-256: f05813d14d6ad800e85c82218d1e4e97cffd61766533b12c6c3d58ea6e638390
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { K: () => s });
  var i = n(518782),
    r = n(104129),
    a = n(660183);
  function s(e) {
    switch (e) {
      case i.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
        return {
          name: a.intl.string(r.default["8aHNu0"]),
          question: a.intl.string(r.default["A+HRrQ"]),
        };
      case i.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
        return {
          name: a.intl.string(r.default.ZwDYuP),
          question: a.intl.string(r.default["9FItmd"]),
        };
      case i.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
        return { name: a.intl.string(r.default.JeFo7p), question: a.intl.string(r.default.GXDPol) };
      default:
        return { name: a.intl.string(r.default.btBTIw), question: a.intl.string(r.default.H8RhX0) };
    }
  }
}
