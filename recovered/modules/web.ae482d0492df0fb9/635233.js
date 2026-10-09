/* Recovered shipped factory. Module 635233.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4549767..4550420
 * Raw property SHA-256: 7b123982368807dbec55ce835aa7d2dffbbee5b4aebba20724ba58a91ffb94d7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Kg: () => d, LO: () => c, P: () => _, TX: () => u, mv: () => o, uS: () => E });
  var i = n(967198),
    r = n(174459),
    a = n(5180),
    s = n(652215);
  let l = "manual_browsing";
  function o(e) {
    (0, a.ai)(i.A.getGuildId()) || (l = e);
  }
  function d() {
    let e = l;
    return ((l = "manual_browsing"), e);
  }
  function c(e, t, n) {
    r.default.track(s.HAw.FAVORITES_GUILD_ADD_TO_FAVORITES, {
      source: e,
      channel_type: t,
      total_favorites: n,
    });
  }
  function u(e, t) {
    r.default.track(s.HAw.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, {
      channel_type: e,
      total_favorites: t,
    });
  }
  function _() {
    r.default.track(s.HAw.FAVORITES_GUILD_ORDER_UPDATED);
  }
  function E(e, t) {
    r.default.track(s.HAw.FAVORITES_GUILD_SETTING_TOGGLED, { source: e, is_visible: t });
  }
}
