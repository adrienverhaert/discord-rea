/* Recovered shipped factory. Module 877717.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8969340..8969784
 * Raw property SHA-256: 1cdc08e218a8b517009db9e31a4f3c836ddaba47039e9912334143f5fa447ec2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153),
    a = n(652215);
  let s = {};
  class l extends i.Ay.Store {
    static displayName = "HookErrorStore";
    getHookError(e) {
      return s[e];
    }
  }
  let o = new l(r.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function () {
      s = {};
    },
    MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: function () {
      delete s[a.LU7.SOUND];
    },
    MEDIA_ENGINE_SOUNDSHARE_FAILED: function (e) {
      let { errorMessage: t, errorCode: n } = e;
      s[a.LU7.SOUND] = { errorMessage: t, errorCode: n };
    },
  });
}
