/* Recovered shipped factory. Module 526162.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2864874..2866064
 * Raw property SHA-256: 67b4df1bd8dcd57cceedcda06e78b0c8d7096f6192a104ea0c3d6c369fde8b2a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => T });
  var i = n(17928),
    r = n(73153),
    a = n(793943),
    s = n(287809),
    l = n(174459),
    o = n(158045),
    d = n(350972),
    c = n(652215),
    u = n(49999),
    _ = n(202541);
  let E = { client: { desktop: d.LW.DEFAULT, coachmarkImpressions: 0 } },
    A = !0;
  function h() {
    (A = !o.Ay.canUsePremiumAppIcons(s.default.getCurrentUser())) && f(d.LW.DEFAULT);
  }
  function f(e) {
    ((E.client.desktop = e),
      A ||
        l.default.track(c.HAw.APP_ICON_UPDATED, {
          icon_id: e,
          user_premium_tier: s.default.getCurrentUser()?.premiumType,
          icon_premium_tier: e !== d.LW.DEFAULT ? _.PremiumTypes.TIER_2 : null,
        }));
  }
  function I() {
    A && (E.client = { desktop: d.LW.DEFAULT, coachmarkImpressions: 2 });
  }
  class p extends i.Ay.PersistedStore {
    static displayName = "AppIconPersistedStoreState";
    static persistKey = "AppIconPersistedStoreState";
    initialize(e) {
      (null != e && (E = e), this.waitFor(s.default), this.syncWith([s.default], h));
    }
    get isUpsellPreview() {
      return A;
    }
    getState() {
      return E;
    }
    getCurrentDesktopIcon() {
      return E?.client?.desktop;
    }
  }
  let T = new p(r.h, {
    APP_ICON_UPDATED: function (e) {
      let { id: t } = e;
      null != t && f(t);
    },
    APP_ICON_EDITOR_RESET: I,
    APP_ICON_TRACK_IMPRESSION: function (e) {
      let { markAsDismissed: t } = e;
      ((E.client.coachmarkImpressions += 1),
        E.client.coachmarkImpressions >= 2 && (t?.(u.i.UNKNOWN), I(), (0, a.Jp)()));
    },
    LOGOUT: I,
  });
}
