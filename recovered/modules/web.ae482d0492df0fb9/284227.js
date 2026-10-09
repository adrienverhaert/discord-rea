/* Recovered shipped factory. Module 284227.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6255291..6256212
 * Raw property SHA-256: 0adb058d30a86cb4dd64b735f9cefa8d8775c8bef1f49aed22dedb98593fcb47
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(132500),
    r = n(439372),
    a = n(815706),
    s = n(41984);
  let l = (0, n(945810).mj)({
    kind: "user",
    name: "2025-09-overlay-state-tracking",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  var o = n(652215);
  let d = new Map();
  class c extends r.A {
    actions = {
      OVERLAY_TRACK_STATE_CHANGED: this.handleTrackStateChanged,
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
    };
    handleTrackStateChanged(e) {
      l.getConfig({ location: "tracking-manager" }).enabled &&
        (e.newState === s.AR.INITIALIZING && d.set(e.pid, (0, i.A)()),
        (0, a.z)(o.HAw.OVERLAY_STATE_CHANGED, {
          new_state: e.newState,
          old_state: e.oldState,
          pid: e.pid,
          init_session_id: d.get(e.pid),
          reason: e.reason,
        }),
        (e.newState === s.AR.OVERLAY_RENDERING ||
          e.newState === s.AR.OVERLAY_DISABLED ||
          e.newState === s.AR.OVERLAY_CRASHED_DISABLED ||
          e.newState === s.AR.OVERLAY_TEARING_DOWN) &&
          d.delete(e.pid));
    }
    handleRunningGamesChange(e) {
      for (let t of e.removed) d.delete(t.pid);
    }
  }
  let u = new c();
}
