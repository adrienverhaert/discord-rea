/* Recovered shipped factory. Module 528772.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7517744..7518052
 * Raw property SHA-256: 304b64bfb70a1acaeef266ec8ab3d28f2e2c764a85d7905b735a79d0998ff7ea
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153);
  let a = !1,
    s = !1;
  class l extends i.Ay.Store {
    static displayName = "SoundboardOverlayStore";
    get keepOpen() {
      return s;
    }
    get enabled() {
      return a;
    }
  }
  let o = new l(r.h, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
      ((a = e.enabled), e.enabled && (s = e.keepOpen ?? !1));
    },
  });
}
