/* Recovered shipped factory. Module 781609.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5582416..5583165
 * Raw property SHA-256: f13962be200efaaf0d7be21bc33ff41652f9970b599e11732ac09675d9067f29
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(439372),
    r = n(710195),
    a = n(965957),
    s = n(312671),
    l = n(458640),
    o = n(771527),
    d = n(552122),
    c = n(235079);
  class u extends i.A {
    stores = new Map().set(r.A, () => this.handleExperimentUpdated());
    actions = { NOTIFICATIONS_SET_DISABLED_SOUNDS: this.updateRingtone };
    handleExperimentUpdated = () => {
      (this.updateSoundpack(), this.updateRingtone());
    };
    updateSoundpack() {
      let e = s.A.getSoundpack(),
        t = s.A.getLastSoundpackExperimentId(),
        n = o.A.experiment?.definition.name,
        i = d.A.isEligible();
      i || (null == t && e === c.i.CLASSIC)
        ? i && null != o.A.soundpack && n !== t && e !== o.A.soundpack && (0, a.p)(o.A.soundpack, n)
        : (0, a.p)(c.i.CLASSIC, null);
    }
    updateRingtone() {
      if (d.A.isEligible()) {
        let e = (0, l.A)(s.A.getSoundpack());
        null != e.call_ringing && e.call_ringing;
      }
    }
  }
  let _ = new u();
}
