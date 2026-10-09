/* Recovered shipped factory. Module 342220.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6797646..6798324
 * Raw property SHA-256: 4410df14ee1644fe9d771f700116d34a35ffda95aa55ec4bb35fde95aee5d5d3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _, X: () => u });
  var i = n(17928),
    r = n(696451),
    a = n(711014),
    s = n(287809),
    l = n(178368),
    o = n(474090),
    d = n(202541);
  function c(e, t, n) {
    return (
      !(null == e || e.isPremiumGroupMember()) &&
      (!!(
        (0, o.ki)(e, d.PremiumTypes.TIER_2) || t.some((e) => null != e.premiumGuildSubscription)
      ) ||
        n.some((t) => {
          let n = r.Ay.getMember(t, e.id);
          return n?.premiumSince != null;
        }))
    );
  }
  function u() {
    return c(
      s.default.getCurrentUser(),
      l.A.hasFetched ? Object.values(l.A.boostSlots) : [],
      a.Ay.getFlattenedGuildIds(),
    );
  }
  function _() {
    return c(
      (0, i.bG)([s.default], () => s.default.getCurrentUser()),
      (0, i.yK)([l.A], () => (l.A.hasFetched ? Object.values(l.A.boostSlots) : [])),
      (0, i.bG)([a.Ay], () => a.Ay.getFlattenedGuildIds()),
    );
  }
}
