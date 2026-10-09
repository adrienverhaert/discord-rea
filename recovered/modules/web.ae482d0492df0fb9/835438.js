/* Recovered shipped factory. Module 835438.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6087174..6088063
 * Raw property SHA-256: 717bdc9c5fd773f5ec0f821ebc1b7f6ce6777a987575084d947e4bf9d0d4a9f1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => A });
  var i = n(205693),
    r = n(827343),
    a = n(439372),
    s = n(710195),
    l = n(192820),
    o = n(723702),
    d = n(240921);
  let c = { enableStats: !1 },
    u = (0, d.Ay)({
      kind: "user",
      name: "2026-03-krisp-stats-collection",
      defaultConfig: c,
      variations: { 1: { ...c, enableStats: !0 } },
    });
  var _ = n(652215);
  class E extends a.A {
    handleExperimentChange = () => {
      if ((0, o.isWeb)()) return;
      let { enableStats: e } = u.getConfig({
        location: "KrispExperimentManager handleExperimentChange",
      });
      r.default.setNoiseCancellationEnableStats(e);
    };
    handleRtcConnectionState = (e) => {
      let { state: t, context: n } = e;
      (0, o.isWeb)() ||
        (n === i.x.DEFAULT &&
          t !== _.S7L.DISCONNECTED &&
          t === _.S7L.RTC_CONNECTED &&
          l.Ay.getKrispEnableStats() &&
          l.Ay.getNoiseCancellation() &&
          (r.default.setNoiseCancellation(!1), r.default.setNoiseCancellation(!0)));
    };
    stores = new Map().set(s.A, this.handleExperimentChange);
    actions = { RTC_CONNECTION_STATE: this.handleRtcConnectionState };
  }
  let A = new E();
}
