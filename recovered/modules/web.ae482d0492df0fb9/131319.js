/* Recovered shipped factory. Module 131319.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8832412..8832650
 * Raw property SHA-256: 9b3ca2e2e20b597472e0677650fea08c9b6a4633528ccbd80bd455bd0029e7a4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(17928),
    r = n(73153);
  let a = n(731854).PR;
  class s extends i.Ay.Store {
    static displayName = "BitRateStore";
    get bitrate() {
      return a;
    }
  }
  let l = new s(r.h, {
    SET_CHANNEL_BITRATE: function (e) {
      a = e.bitrate;
    },
  });
}
