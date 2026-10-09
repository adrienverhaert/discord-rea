/* Recovered shipped factory. Module 842144.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6501334..6502261
 * Raw property SHA-256: 799d39e1722bb63133117c394bab552fbe69fd06fcdf543fa92820cef339c99d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(17928),
    r = n(873298),
    a = n(73153),
    s = n(761821);
  let l = !1,
    o = {},
    d = {};
  class c extends i.Ay.Store {
    static displayName = "FamilyCenterControlledSettingsStore";
    getSettings(e) {
      return o[e];
    }
    getControlledSettings(e) {
      return o[e];
    }
    hasSettingsForUser(e) {
      return null != o[e];
    }
    getConsents(e) {
      return d[e];
    }
    hasConsented(e, t) {
      if (null == e) return !1;
      let n = d[e];
      return null != n && null != n[t] && n[t].consented;
    }
    get isLoading() {
      return l;
    }
  }
  let u = new c(a.h, {
    FAMILY_CENTER_TEEN_SETTINGS_FETCH_START: function () {
      l = !0;
    },
    FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS: function (e) {
      let { userId: t, settings: n, consents: i } = e;
      (null != n && (o[t] = (0, s.Gd)(n)), null != i && (d[t] = i), (l = !1));
    },
    FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS: function (e) {
      let { userId: t, consents: n } = e;
      d[t] = n;
    },
    FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS: function (e) {
      let { userId: t, settings: n } = e,
        i = (0, s.Gd)(n);
      o[t] = (0, s.RK)(r.nT, o[t], i);
    },
    LOGOUT: function () {
      ((o = {}), (d = {}), (l = !1));
    },
  });
}
