/* Recovered shipped factory. Module 630248.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3012814..3014275
 * Raw property SHA-256: dc57f7e3bb8646c9b22cf24d14be5850afaece43a4dafd366c14acb33cd8b165
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => p }), n(321073));
  var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(73153),
    l = n(155718),
    o = n(283047),
    d = n(933958),
    c = n(617617);
  n(705751);
  var u = n(355097);
  let _ = [l.kc.CHAT, l.kc.PRIMARY_ENTRY_POINT],
    E = { pendingUsages: [] },
    A = new o.A({
      computeBonus: () => 100,
      lookupKey: (e) => e,
      afterCompute: () => {},
      numFrequentlyItems: 100,
    });
  function h(e) {
    (E.pendingUsages.push({ key: e, timestamp: Date.now() }), A.track(e), A.compute());
  }
  function f() {
    let e = c.A.frecencyWithoutFetchingLatest,
      t = e.applicationFrecency?.applications ?? {};
    A.overwriteHistory(
      r().mapValues(t, (e) => ({
        ...e,
        recentUses: e.recentUses.map(Number).filter((e) => e > 0),
      })),
      E.pendingUsages,
    );
  }
  class I extends a.Ay.PersistedStore {
    static displayName = "ApplicationFrecencyStore";
    static persistKey = "ApplicationFrecency";
    initialize(e) {
      (null != e && (E = e), this.waitFor(d.Ay, c.A), this.syncWith([c.A], f));
    }
    getState() {
      return E;
    }
    hasPendingUsage() {
      return E.pendingUsages.length > 0;
    }
    getApplicationFrecencyWithoutLoadingLatest() {
      return A;
    }
    getScoreWithoutLoadingLatest(e) {
      return A.getScore(e) ?? 0;
    }
    getTopApplicationsWithoutLoadingLatest() {
      return A.frequently;
    }
  }
  let p = new I(s.h, {
    APPLICATION_COMMAND_USED: function (e) {
      let { command: t } = e;
      if (!_.includes(t.type) || d.Ay.getLaunchState(t.applicationId)?.isLaunching) return !1;
      h(t.applicationId);
    },
    EMBEDDED_ACTIVITY_OPEN: function (e) {
      let { applicationId: t } = e;
      h(t);
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
      let {
        settings: { type: t },
        wasSaved: n,
      } = e;
      if (t !== u.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
      E.pendingUsages = [];
    },
  });
}
