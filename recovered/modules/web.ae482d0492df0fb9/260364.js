/* Recovered shipped factory. Module 260364.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6986266..6987248
 * Raw property SHA-256: 949cff6bdf62545aeefee891a1dd740657b77a44aaf5f424c4722b57cf7e3a78
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(731738),
    r = n(183636),
    a = n(807393),
    s = n(174459),
    l = n(652215);
  let o = new (class {
    startTime = null;
    questId = null;
    timeoutTimer = null;
    clearTimeoutTimer() {
      null != this.timeoutTimer && (clearTimeout(this.timeoutTimer), (this.timeoutTimer = null));
    }
    sendMetric(e, t, n) {
      Math.random() > 0.1 ||
        (a.A.distribution(
          { name: i.K.QUEST_BAR_RENDER_DELAY, tags: [`quest_id:${e}`, `timeout:${t}`] },
          n,
        ),
        s.default.track(l.HAw.QUEST_BAR_RENDER_DELAY, { quest_id: e, timeout: t, duration: n }));
    }
    startTracking(e) {
      (this.clearTracking(),
        (this.startTime = performance.now()),
        (this.questId = e),
        (this.timeoutTimer = setTimeout(() => {
          this.stopTracking(e, !0);
        }, 3e4)));
    }
    stopTracking(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (null !== this.startTime && this.questId === e) {
        if ("focused" === r.A.getState()) {
          let n = Math.min(t ? 3e4 : Math.round(performance.now() - this.startTime), 3e4);
          this.sendMetric(e, t, n);
        }
        this.clearTracking();
      }
    }
    clearTracking() {
      (this.clearTimeoutTimer(), (this.startTime = null), (this.questId = null));
    }
  })();
}
