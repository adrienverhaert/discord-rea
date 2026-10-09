/* Recovered shipped factory. Module 842901.
 * Source: recovered/web/assets/52c27b413f754515.js
 * UTF-16 property offsets: 7590..7950
 * Raw property SHA-256: 3d0364d10bc9fbe611309b750a4a0ad34eed8b85d391ae75f882ba78bba51cd1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  (n.d(t, { E: () => r, T: () => o }), n(801541));
  var l = n(889137),
    i = n(744593),
    s = n(191567);
  function r(e, t) {
    let n = (0, l.YW)(t)
      .with(i.Z.IMAGE_ONLY_ANSWERS, () => s.EK)
      .otherwise(() => s.fD);
    return {
      styles: {
        loserSelected: n,
        normal: n,
        notVoted: n,
        selected: n,
        voted: s.pq,
        victorSelected: s.iu,
        victorNotSelected: s.iu,
        normalVote: n,
      },
    };
  }
  function o(e, t) {
    return e.getAvatarURL(t, 20, !1);
  }
}
