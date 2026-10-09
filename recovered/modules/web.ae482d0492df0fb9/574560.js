/* Recovered shipped factory. Module 574560.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4782709..4783748
 * Raw property SHA-256: a0f82a81c0a0a908e09d511b0dca73ebce066fde0412a6985761bfe8ffd682c9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153);
  let a = { gameUpsellsDismissal: {} },
    s = { ...a };
  class l extends i.Ay.PersistedStore {
    static displayName = "GameUpsellStore";
    static persistKey = "GameUpsellStore";
    initialize(e) {
      s = e ?? s;
    }
    getState() {
      return s;
    }
    getGameUpsellDismissal(e, t) {
      return s.gameUpsellsDismissal[t]?.[e] ?? null;
    }
    getAllGameUpsellDismissals(e) {
      return s.gameUpsellsDismissal[e] ?? null;
    }
  }
  let o = new l(r.h, {
    LOGOUT: function () {
      s = { ...a };
    },
    GAME_UPSELL_DISMISS: function (e) {
      let { applicationIds: t, dismissedAt: n, dismissibleContent: i } = e;
      if (0 === t.length) return !1;
      let r = {
        ...s,
        gameUpsellsDismissal: { ...s.gameUpsellsDismissal, [i]: { ...s.gameUpsellsDismissal[i] } },
      };
      for (let e of t) {
        let t = s.gameUpsellsDismissal[i]?.[e],
          a = null != t ? t.timesDismissed + 1 : 1;
        r.gameUpsellsDismissal[i][e] = { dismissedAt: n, timesDismissed: a };
      }
      s = r;
    },
    GAME_UPSELL_DISMISS_CLEAR: function (e) {
      let { applicationId: t, dismissibleContent: n } = e,
        i = s.gameUpsellsDismissal[n];
      if (null == i || null == i[t]) return;
      let r = { ...i };
      (delete r[t], (s = { gameUpsellsDismissal: { ...s.gameUpsellsDismissal, [n]: r } }));
    },
  });
}
