/* Recovered shipped factory. Module 17591.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4367660..4367957
 * Raw property SHA-256: 1ec04c2f1efaf228829aff2959db3cccf8b4a7c511156e3861d809b15c8a50de
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { V: () => l });
  var i = n(287809),
    r = n(236285),
    a = n(354430),
    s = n(451731);
  function l(e) {
    if (null == e || null == i.default.getCurrentUser()) return;
    let t = r.Ay.getTopEmojisMetadata(e);
    if (null != t) {
      let { topEmojisTTL: e } = t;
      if (null == e || Date.now() < e) return;
    }
    a.A.getIsFetching(e) || (0, s.l2)(e);
  }
}
