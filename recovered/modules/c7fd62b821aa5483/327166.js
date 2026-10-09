/* Recovered shipped factory. Module 327166.
 * Source: recovered/web/assets/c7fd62b821aa5483.js
 * UTF-16 property offsets: 95..419
 * Raw property SHA-256: 6bb908a3c11dcb84c23e224ad8a6db524027c89f978cc3d59c9c594507503d77
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { D: () => s });
  var i = n(17928),
    l = n(994500),
    d = n(800828),
    r = n(652215),
    a = n(660183);
  function s(t, e) {
    return (0, i.bG)(
      [d.A, l.A],
      () =>
        l.A.getRelationshipType(t) === r.eA$.PENDING_INCOMING
          ? a.intl.string(a.t.wPI56w)
          : d.A.getGameRelationshipsForUser(t).length > 0
            ? a.intl.string(a.t.LAcY7m)
            : (e ?? a.intl.string(a.t.w5uwoI)),
      [t, e],
    );
  }
}
