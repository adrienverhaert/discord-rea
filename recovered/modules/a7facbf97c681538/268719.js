/* Recovered shipped factory. Module 268719.
 * Source: recovered/web/assets/a7facbf97c681538.js
 * UTF-16 property offsets: 113102..113553
 * Raw property SHA-256: c057d39c748db4ac631a6bca6a3e67a858a54d69f14fa7097d63d6c0ae311768
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => o });
  var i = n(477900);
  n(582128);
  var l = n(17928),
    s = n(994500),
    a = n(217424);
  function r(e) {
    let { message: t, channel: n, compact: r } = e,
      o = (0, l.bG)([s.A], () => null != t.interaction && s.A.isBlocked(t.interaction.user.id), [
        t.interaction,
      ]);
    return (0, i.jsx)(a.A, { message: t, channel: n, compact: r, isInteractionUserBlocked: o });
  }
  function o(e, t, n) {
    return null != e.interaction && "" !== e.interaction.displayName
      ? (0, i.jsx)(r, { message: e, channel: t, compact: n })
      : null;
  }
}
