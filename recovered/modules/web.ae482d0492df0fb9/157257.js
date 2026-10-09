/* Recovered shipped factory. Module 157257.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9308750..9309242
 * Raw property SHA-256: 72ab85219edc0f9269ba895ad773193c2a434bec5e9f5369844d7c400a589cb5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  n.d(t, { A: () => d });
  var r = n(17928),
    a = n(73153),
    s = n(952818),
    l = n(760751);
  class o extends r.Ay.Store {
    initialize() {
      this.waitFor(l.A, s.Ay);
    }
    static displayName = "OverlayRunningGameStore";
    getGameForPID(e) {
      if (__OVERLAY__ || null == e) return null;
      let t = s.Ay.getGameOrTransformedSubgameForPID(e);
      return null != t ? l.A.findGame(t) : null;
    }
    getGame() {
      return i;
    }
  }
  let d = new o(a.h, {
    OVERLAY_INITIALIZE: function (e) {
      i = e.currentGame;
    },
    OVERLAY_SET_ASSOCIATED_GAME: function (e) {
      i = e.associatedGame;
    },
  });
}
