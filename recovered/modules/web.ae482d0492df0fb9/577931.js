/* Recovered shipped factory. Module 577931.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3097929..3098834
 * Raw property SHA-256: 12278c0608fd0de774036863dea72a6e8ed31c168f833e197a98212812fb6977
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(582128),
    r = n(17928),
    a = n(287809),
    s = n(982240),
    l = n(988341),
    o = n(234e3),
    d = n(248284),
    c = n(555149);
  function u() {
    let e = a.default.getCurrentUser()?.id,
      t = (0, r.yK)([s.Ay], () => (null == e ? [] : s.Ay.getBadges(e)), [e]),
      { pendingBadgeDisplayOrder: n, pendingBadgeHiddenBadges: u } = (0, c.A)(),
      _ = i.useMemo(
        () => (0, l.Cw)((0, o.S0)(t, { pendingBadgeDisplayOrder: n, pendingBadgeHiddenBadges: u })),
        [t, n, u],
      ),
      E = (0, d.A)((e) => e.hiddenOrder),
      { hiddenBadges: A, nextHiddenOrder: h } = i.useMemo(() => {
        let e = new Map(_.hiddenBadges.map((e) => [e.badge_id, e])),
          t = E.flatMap((t) => {
            let n = e.get(t);
            return null != n ? [n] : [];
          }),
          n = new Set(t.map((e) => e.badge_id)),
          i = [...t, ..._.hiddenBadges.filter((e) => !n.has(e.badge_id))];
        return { hiddenBadges: i, nextHiddenOrder: i.map((e) => e.badge_id) };
      }, [_.hiddenBadges, E]);
    return (
      i.useEffect(() => {
        (h.length === E.length && h.every((e, t) => e === E[t])) ||
          d.A.setState({ hiddenOrder: h });
      }, [h, E]),
      { ..._, hiddenBadges: A }
    );
  }
}
