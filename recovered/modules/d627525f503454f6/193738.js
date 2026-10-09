/* Recovered shipped factory. Module 193738.
 * Source: recovered/web/assets/d627525f503454f6.js
 * UTF-16 property offsets: 95..1075
 * Raw property SHA-256: 725df98370fa4beac98aa27a3475e74ae6cb4703a99b95e8fe3188660daafcbb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, i) {
  i.d(n, { A: () => A });
  var t = i(477900);
  i(582128);
  var a = i(17928),
    s = i(688810),
    r = i(280450),
    u = i(994500),
    d = i(573355),
    l = i(102951),
    c = i(652215),
    o = i(996988);
  function A(e) {
    let { user: n, themeType: i } = e,
      { newestAnalyticsLocation: A } = (0, s.Ay)(),
      I = (0, a.bG)([r.default], () => r.default.getId() === n.id),
      h = (0, a.bG)([u.A], () => u.A.getRelationshipType(n.id)),
      {
        gameFriends: p,
        hasOutgoingPendingGameFriends: N,
        hasIncomingPendingGameFriends: g,
      } = (0, l.J)({ userId: n.id }),
      G = p.length > 0 || N || g;
    if (null == n || n.bot || I || h === c.eA$.BLOCKED) return null;
    if (h === c.eA$.NONE && G)
      return i === o.d.MODAL
        ? null
        : (0, t.jsx)(d.VI, {
            user: n,
            gameFriends: p,
            hasOutgoingPendingGameFriends: N,
            hasIncomingPendingGameFriends: g,
            analyticsLocation: A,
          });
    switch (h) {
      case c.eA$.FRIEND:
      case c.eA$.PENDING_INCOMING:
      case c.eA$.PENDING_OUTGOING:
        if (i === o.d.MODAL && h !== c.eA$.FRIEND) return null;
        return (0, t.jsx)(d.bc, { user: n, relationshipType: h, analyticsLocation: A });
      default:
        if (i === o.d.MODAL) return null;
        return (0, t.jsx)(d.SE, { userId: n.id, analyticsLocation: A });
    }
  }
}
