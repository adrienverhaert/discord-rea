/* Recovered shipped factory. Module 881335.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7627836..7628089
 * Raw property SHA-256: 8f4982a9dcce9e2eed1a2311efb877448aad71f61b10989630ee6ba372284989
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(729937),
    r = n(981616),
    a = n(285933),
    s = n(227005);
  async function l(e, t, n) {
    let { hasSpotifyAccount: l, activity: o, user: d } = e;
    (0, s.A)(l) &&
      null != o &&
      null != o.sync_id &&
      (await (0, r.dM)(), i.ZH(o, d.id), (0, a.A)(t, d, o, n));
  }
}
