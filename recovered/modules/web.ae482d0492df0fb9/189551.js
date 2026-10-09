/* Recovered shipped factory. Module 189551.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4334398..4334620
 * Raw property SHA-256: a010498216d13b45d0e5dedb0b7874f8226211e7632648d59a09302f834ab6d3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { G: () => r, K: () => a });
  var i = n(73153);
  function r(e) {
    i.h.dispatch({ type: "TOGGLE_GUILD_EXPANDED_STATE", guildId: e });
  }
  function a(e) {
    i.h.dispatch({ type: "EMOJI_INTERACTION_INITIATED", interaction: e });
  }
}
