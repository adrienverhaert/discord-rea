/* Recovered shipped factory. Module 210528.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7610254..7610525
 * Raw property SHA-256: 18cc9b04dac5607ac56778200c2d9836429667d583752810aa896083bfad38dd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(17928),
    r = n(73153);
  let a = !1;
  class s extends i.Ay.Store {
    static displayName = "SpotifyProtocolStore";
    isProtocolRegistered() {
      return a;
    }
  }
  let l = new s(r.h, {
    SPOTIFY_SET_PROTOCOL_REGISTERED: function (e) {
      let { isRegistered: t } = e;
      a = t;
    },
  });
}
