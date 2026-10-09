/* Recovered shipped factory. Module 570287.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7975293..7975972
 * Raw property SHA-256: f76facf38d85d09b61c95db2b4364dcf9d6dbb366e639d511aa0d37265c40653
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u, q: () => c });
  var i = n(17928),
    r = n(800828),
    a = n(857071),
    s = n(885386),
    l = n(280450),
    o = n(696451),
    d = n(994500);
  function c(e, t) {
    let n = l.default.getId() === e,
      i = null != t && a.A.isLurking(t),
      c = s.$s.getSetting(),
      u = d.A.isFriend(e);
    return (
      (!n && !i && (u || null != o.Ay.memberOf(e).find((e) => !c.includes(e)))) ||
      (r.A.getGameFriendsForUser(e).length > 0 && s.Zk.getSetting())
    );
  }
  function u(e, t) {
    let n = (0, i.bG)([l.default], () => l.default.getId() === e),
      c = (0, i.bG)([a.A], () => null != t && a.A.isLurking(t)),
      u = s.$s.useSetting();
    return (0, i.bG)(
      [d.A, o.Ay, r.A],
      () =>
        (!n && !c && (d.A.isFriend(e) || null != o.Ay.memberOf(e).find((e) => !u.includes(e)))) ||
        (r.A.getGameFriendsForUser(e).length > 0 && s.Zk.getSetting()),
    );
  }
}
