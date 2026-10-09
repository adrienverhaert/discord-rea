/* Recovered shipped factory. Module 39938.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7658960..7659419
 * Raw property SHA-256: 3e7f2a5f134a2d446253e44b310de2fc908b85c391fb6d6a4967c7046758be6c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153);
  let a = !1,
    s = !1;
  class l extends i.Ay.DeviceSettingsStore {
    static displayName = "StageMusicStore";
    static persistKey = "StageMusicStore";
    initialize(e) {
      null != e && (a = e);
    }
    isMuted() {
      return a;
    }
    shouldPlay() {
      return s;
    }
    getUserAgnosticState() {
      return a;
    }
  }
  let o = new l(r.h, {
    STAGE_MUSIC_MUTE: function (e) {
      let { muted: t } = e;
      ((a = t), (s = !1));
    },
    STAGE_MUSIC_PLAY: function (e) {
      let { play: t } = e;
      s = t;
    },
    VOICE_CHANNEL_SELECT: function () {
      s = !1;
    },
  });
}
