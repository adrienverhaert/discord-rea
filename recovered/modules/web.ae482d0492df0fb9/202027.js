/* Recovered shipped factory. Module 202027.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5223568..5223828
 * Raw property SHA-256: b1757ebba232bf47aec120b19e423277f0c615b42ed705fed786a013eb8a2d54
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(702841),
    r = n(236285),
    a = n(7584);
  function s(e, t) {
    return {
      customEmoji: (0, i.bG)([r.Ay], () => (null != e ? r.Ay.getCustomEmojiById(e) : null), [e]),
      unicodeEmoji: null != t ? a.Ay.getByName(a.Ay.convertSurrogateToName(t, !1)) : null,
    };
  }
}
