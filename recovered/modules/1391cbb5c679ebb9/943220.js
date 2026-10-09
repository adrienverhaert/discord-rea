/* Recovered shipped factory. Module 943220.
 * Source: recovered/web/assets/1391cbb5c679ebb9.js
 * UTF-16 property offsets: 3831..4203
 * Raw property SHA-256: da505fa70bfcfd023c6d6f7536d5f5f6e75474b43c333a1fe35fe48666b98553
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, l, n) {
  n.d(l, { A: () => t });
  var a = n(477900);
  n(582128);
  var s = n(763754),
    i = n(799162),
    r = n(812299);
  function t(e) {
    let l = (0, s.Ay)(e.message),
      n = (0, r.y)({
        message: e.message,
        channel: e.channel,
        user: e.message?.author ?? e.userOverride,
        compact: !!e.compact,
        isRepliedMessage: !!e.isRepliedMessage,
      }),
      t = {};
    return (
      null != n && (t[i.w.SYSTEM_TAG] = n),
      (0, a.jsx)(i.A, { ...e, author: l, decorations: t })
    );
  }
}
