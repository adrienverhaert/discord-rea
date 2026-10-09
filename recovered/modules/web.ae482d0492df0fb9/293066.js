/* Recovered shipped factory. Module 293066.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9296212..9296967
 * Raw property SHA-256: 41cf4d18653c8e82e2dc597ea09feace020cbd663659711bc71eb4561eeb86bd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  (n.d(t, { A: () => o }), n(321073));
  var r = n(17928),
    a = n(73153);
  let s = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
  class l extends r.Ay.PersistedStore {
    static displayName = "ApplicationStoreUserSettingsStore";
    static persistKey = "ApplicationStoreUserSettingsStore";
    static migrations = [
      (e) => (null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e),
    ];
    initialize(e) {
      i = e ?? s;
    }
    getState() {
      return i;
    }
    get hasAcceptedStoreTerms() {
      return i.hasAcceptedStoreTerms;
    }
    hasAcceptedEULA(e) {
      return i.hasAcceptedEulaIds.includes(e);
    }
  }
  let o = new l(a.h, {
    APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
      i.hasAcceptedStoreTerms = !0;
    },
    APPLICATION_STORE_ACCEPT_EULA: function (e) {
      let { eulaId: t } = e;
      if (i.hasAcceptedEulaIds.includes(t)) return !1;
      i.hasAcceptedEulaIds.push(t);
    },
  });
}
