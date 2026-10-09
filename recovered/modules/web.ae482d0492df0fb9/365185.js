/* Recovered shipped factory. Module 365185.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4009480..4009817
 * Raw property SHA-256: 837144e5b16ec1fa30e59d794bf3e16cd8cebf65145a528d62a10f1e89e79a7a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(17928),
    r = n(517164),
    a = n(99753),
    s = n(424994);
  function l(e) {
    let { activity: t, user: n } = e,
      l = (0, i.bG)(
        [a.A],
        () => a.A.getMatchingInboxEntry({ activity: t, userId: n.id, feedId: s.X1.GLOBAL_FEED }),
        [t, n.id],
      ),
      o = (0, i.bG)([r.A], () => r.A.getMatchingOutboxEntry({ activity: t, userId: n.id }), [
        t,
        n.id,
      ]);
    return l ?? o;
  }
}
