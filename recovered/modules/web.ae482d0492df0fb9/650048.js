/* Recovered shipped factory. Module 650048.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8879679..8880548
 * Raw property SHA-256: 6900d1d27d08cbfc4c03d89e6be33b523db505717e1ac0c672e43fcc5b684732
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(17928),
    r = n(506774),
    a = n(73153),
    s = n(652215);
  let l = { lastViewedPath: null, lastViewedNonVoicePath: null },
    o = l,
    d = "LAST_VIEWED_PATH";
  class c extends i.Ay.PersistedStore {
    static displayName = "DefaultRouteStore";
    static persistKey = "DefaultRouteStore";
    static migrations = [
      () => {
        let e = r.w.get(d, null);
        return (r.w.remove(d), { lastViewedPath: e });
      },
    ];
    initialize() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
      o = e ?? l;
    }
    get defaultRoute() {
      return s.BVt.ME;
    }
    get lastNonVoiceRoute() {
      return o.lastViewedNonVoicePath ?? s.BVt.ME;
    }
    get fallbackRoute() {
      return s.BVt.ME;
    }
    getState() {
      return o;
    }
  }
  let u = new c(a.h, {
    SAVE_LAST_ROUTE: function (e) {
      let { path: t } = e;
      return ((o.lastViewedPath = t), !0);
    },
    SAVE_LAST_NON_VOICE_ROUTE: function (e) {
      let { path: t } = e;
      return ((o.lastViewedNonVoicePath = t), !0);
    },
    LOGOUT: function () {
      o = { lastViewedPath: null, lastViewedNonVoicePath: null };
    },
  });
}
