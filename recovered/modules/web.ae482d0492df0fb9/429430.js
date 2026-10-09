/* Recovered shipped factory. Module 429430.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10592921..10594355
 * Raw property SHA-256: e038d7fe690d14114a6e9f7e9591cbc6a186b61aa47e303d7ba34eeb7ebdb595
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(941426),
    r = n(935172),
    a = n(731854);
  let s = new i.Vy("ConnectionEventFramerateReducer");
  class l {
    connection;
    sinkWants;
    framerateReductionTimeout;
    constructor(e, t) {
      ((this.connection = e),
        (this.sinkWants = t),
        s.enableNativeLogger(!0),
        e.on(r.y.Speaking, this.handleSpeaking),
        e.on(r.y.Mute, this.handleSelfMute),
        this.initialize());
    }
    initialize() {
      this.userSpeakingChange(!0);
    }
    handleSpeaking = (e, t) => {
      e === this.connection.userId && this.userSpeakingChange(t === a.ME.NONE);
    };
    handleSelfMute = (e) => {
      this.connection.hasDesktopSource() ||
        (this.destroyFramerateScaleFactorTimers(),
        (this.sinkWants.isMuted = e),
        this.updateRemoteWantsFramerate());
    };
    userSpeakingChange(e) {
      if (!this.connection.hasDesktopSource()) {
        if ((this.destroyFramerateScaleFactorTimers(), !e)) {
          this.sinkWants.isMuted &&
            ((this.sinkWants.isMuted = !1), this.updateRemoteWantsFramerate());
          return;
        }
        this.framerateReductionTimeout = setTimeout(() => {
          this.connection.destroyed ||
            (s.info(`BaseConnection.userSpeakingChange: Reduced framerate after ${a.qm} ms.`),
            (this.framerateReductionTimeout = void 0),
            (this.sinkWants.isMuted = !0),
            this.updateRemoteWantsFramerate());
        }, a.qm);
      }
    }
    destroyFramerateScaleFactorTimers() {
      "number" == typeof this.framerateReductionTimeout &&
        (clearTimeout(this.framerateReductionTimeout), (this.framerateReductionTimeout = void 0));
    }
    updateRemoteWantsFramerate() {
      this.connection.updateVideoQuality(["remoteSinkWantsMaxFramerate"]);
    }
    destroy() {
      this.destroyFramerateScaleFactorTimers();
    }
  }
}
