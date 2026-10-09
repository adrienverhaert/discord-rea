/* Recovered shipped factory. Module 117549.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9257118..9257376
 * Raw property SHA-256: e0c2c4c9b9abea8385c02df4e1d280dafa9d8ce8b5eb5738e31a61ea7cdc29a6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(17928),
    r = n(73153);
  let a = n(652215).K3c.AUTO;
  class s extends i.Ay.Store {
    static displayName = "VideoQualityModeStore";
    get mode() {
      return a;
    }
  }
  let l = new s(r.h, {
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
      a = e.mode;
    },
  });
}
