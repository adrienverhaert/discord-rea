/* Recovered shipped factory. Module 606325.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4639795..4640095
 * Raw property SHA-256: acb643845df9061b3cb8a6e37ab5c41ac6084b46ea819cb53f35952497081803
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Je: () => r, Lk: () => a, sk: () => s });
  var i = n(73153);
  function r(e) {
    i.h.dispatch({ type: "FRIENDS_LIST_SET_GROUPING_MODE", mode: e });
  }
  function a(e) {
    i.h.dispatch({ type: "FRIENDS_LIST_SET_VOICE_GROUPING_ENABLED", enabled: e });
  }
  function s() {
    i.h.dispatch({ type: "FRIENDS_LIST_TEAR_DOWN" });
  }
}
