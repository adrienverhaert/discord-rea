/* Recovered shipped factory. Module 106983.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3604277..3604864
 * Raw property SHA-256: 7e46e34f1f6fc2d892f8f990a6d9c274913ddf00b55855275cf6e45c6e07b996
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C: () => r, z: () => s });
  var i,
    r =
      (((i = {}).Kill = "cs2_kill"),
      (i.MultiKill = "cs2_multi_kill"),
      (i.Ace = "cs2_ace"),
      (i.Assist = "cs2_assist"),
      (i.Death = "cs2_death"),
      (i.BombPlant = "cs2_bomb_plant"),
      (i.BombDefused = "cs2_bomb_defused"),
      (i.BombExploded = "cs2_bomb_exploded"),
      (i.RoundStart = "cs2_round_start"),
      (i.RoundEnd = "cs2_round_end"),
      (i.PlayStateChange = "cs2_play_state_change"),
      (i.InMatchChange = "cs2_in_match_change"),
      (i.RoundWinningKill = "cs2_round_winning_kill"),
      (i.GameWinningKill = "cs2_game_winning_kill"),
      i);
  let a = new Set(Object.values(r));
  function s(e) {
    return null != e.eventName && a.has(e.eventName);
  }
}
