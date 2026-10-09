/* Recovered shipped factory. Module 276208.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2508549..2510317
 * Raw property SHA-256: 9ea2032d8d5f33664279d9339556dbf7f22c9820b55a397a35ba832e4a8188d4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { X: () => I, N: () => h });
  var i,
    r = n(972347),
    a = n(451988),
    s = n(73153),
    l = n(626584),
    o = n(6494),
    d = n(927813),
    c = n(869146),
    u = n(531685),
    _ = n(652215),
    E = n(392164);
  function A() {
    return (
      u.A.isVisible() ||
      c.A.getWindowVisible(_.MLl.CHANNEL_CALL_POPOUT) ||
      c.A.getWindowVisible(_.MLl.ACTIVITY_POPOUT) ||
      c.A.getWindowVisible(E.f) ||
      (function () {
        for (let e of c.A.getWindowKeys())
          if (e.startsWith(_.MLl.CALL_TILE_POPOUT) && c.A.getWindowVisible(e)) return !0;
        return !1;
      })()
    );
  }
  var h =
    (((i = {}).WindowVisibilityChanged = "window-visibility-changed"),
    (i.IncomingVideoEnabledChanged = "incoming-video-enabled-changed"),
    i);
  class f extends r.A {
    disableVideoTimer = new a.Ep();
    discordVisible = !0;
    incomingVideoEnabled = !0;
    lastEnabledChange = performance.now();
    logger = new l.A("WindowVisibilityVideoManager");
    HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS = 30 * d.A.Millis.SECOND;
    constructor() {
      (super(),
        s.h.subscribe("WINDOW_VISIBILITY_CHANGE", this.update),
        s.h.subscribe("APP_STATE_UPDATE", this.update),
        o.A.addOnPipModeChangedListener(this.update));
    }
    isIncomingVideoEnabled() {
      return this.incomingVideoEnabled;
    }
    lastIncomingVideoEnabledChangeTime() {
      return this.lastEnabledChange;
    }
    update = () => {
      this.discordVisible !== A() &&
        ((this.discordVisible = A()),
        this.emit("window-visibility-changed", this.discordVisible),
        this.discordVisible
          ? (this.disableVideoTimer.stop(), this.setIncomingVideoEnabled(!0))
          : this.disableVideoTimer.start(this.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
              this.setIncomingVideoEnabled(!1);
            }));
    };
    setIncomingVideoEnabled(e) {
      let t = this.incomingVideoEnabled !== e;
      ((this.incomingVideoEnabled = e),
        t &&
          (this.logger.info(
            `Incoming video enabled changed, incomingVideoEnabled = ${this.incomingVideoEnabled}`,
          ),
          (this.lastEnabledChange = performance.now()),
          this.emit("incoming-video-enabled-changed", this.incomingVideoEnabled)));
    }
  }
  let I = new f();
}
