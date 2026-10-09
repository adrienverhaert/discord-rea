/* Recovered shipped factory. Module 922590.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4760358..4760872
 * Raw property SHA-256: 9c9504a6995a6df96bb79990327d245cf63cf8914c0a47624863a979faf07d00
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { KL: () => c, f1: () => o, fi: () => d });
  var i = n(17928),
    r = n(996439),
    a = n(800828),
    s = n(652215);
  function l(e, t) {
    let [n] = (0, i.bG)(
      [a.A],
      () => [a.A.getGameRelationshipsForUserByType(e, t), a.A.getGameRelationshipsVersion()],
      [t, e],
      r.D,
    );
    return n;
  }
  function o(e) {
    return l(e, s.eA$.FRIEND);
  }
  function d(e) {
    return l(e, s.eA$.PENDING_INCOMING);
  }
  function c(e, t) {
    let [n] = (0, i.bG)(
      [a.A],
      () => {
        let n = a.A.getGameRelationshipsForUserByType(e, t),
          i = a.A.getGameRelationshipsVersion();
        return [n.length > 0, i];
      },
      [t, e],
      r.D,
    );
    return n;
  }
}
