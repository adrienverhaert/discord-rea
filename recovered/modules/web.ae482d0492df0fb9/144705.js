/* Recovered shipped factory. Module 144705.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3606170..3606572
 * Raw property SHA-256: 6baa062cc023dd56278e3e44d195cc837529d1c77b2efa9795b907e12101da2a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { I: () => r, j: () => s });
  var i,
    r =
      (((i = {}).Kill = "dota2_kill"),
      (i.MultiKill = "dota2_multi_kill"),
      (i.Assist = "dota2_assist"),
      (i.Death = "dota2_death"),
      (i.RoshanKill = "dota2_roshan_kill"),
      (i.GameEnd = "dota2_game_end"),
      (i.InMatchChange = "dota2_in_match_change"),
      (i.PlayStateChange = "dota2_play_state_change"),
      i);
  let a = new Set(Object.values(r));
  function s(e) {
    return null != e.eventName && a.has(e.eventName);
  }
}
