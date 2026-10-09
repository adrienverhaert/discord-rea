/* Recovered shipped factory. Module 312671.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7595707..7596341
 * Raw property SHA-256: 8ba459d104b2afe2dc0fe3b9e1db63084c08343f04e9224bcf92e06a5e591f31
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153),
    a = n(235079);
  let s = { soundpack: a.i.CLASSIC, lastSoundpackExperimentId: null };
  class l extends i.Ay.PersistedStore {
    static displayName = "SoundpackStore";
    static persistKey = "SoundpackStore";
    initialize(e) {
      null != e &&
        ((s = e), Object.values(a.i).includes(s.soundpack) || (s.soundpack = a.i.CLASSIC));
    }
    getState() {
      return s;
    }
    getSoundpack() {
      return s.soundpack;
    }
    getLastSoundpackExperimentId() {
      return s.lastSoundpackExperimentId;
    }
  }
  let o = new l(r.h, {
    SET_SOUNDPACK: function (e) {
      let { soundpack: t, forExperimentId: n } = e;
      s = {
        soundpack: t,
        lastSoundpackExperimentId: void 0 !== n ? n : s.lastSoundpackExperimentId,
      };
    },
  });
}
