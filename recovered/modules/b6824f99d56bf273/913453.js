/* Recovered shipped factory. Module 913453.
 * Source: recovered/web/assets/b6824f99d56bf273.js
 * UTF-16 property offsets: 326..1191
 * Raw property SHA-256: 3e3686bd9e82f7872ce004b13fff1136f9fd99532727e2c723852235b77be3a8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => d });
  var i = n(582128),
    r = n(435558),
    u = n(819169),
    l = n(17928),
    a = n(427358),
    s = n(711014),
    o = n(321191);
  function d(e) {
    let [t, n, d, c, f] = (0, l.yK)([o.A], () => [
        o.A.getMutualFriendsCount(e.id),
        o.A.getMutualFriends(e.id),
        o.A.getMutualGuilds(e.id),
        o.A.isFetchingProfile(e.id),
        o.A.isFetchingFriends(e.id),
      ]),
      g = (0, l.bG)([a.A], () => a.A.getUserAffinitiesMap()),
      A = (0, l.bG)([s.Ay], () => s.Ay.getFlattenedGuildIds()),
      h = (0, i.useMemo)(
        () =>
          null == n || n.length < 2
            ? n
            : (0, r.sortBy)(n, (e) => {
                let { user: t } = e;
                return -((g.get(t.id)?.communicationProbability ?? -1) * 1);
              }),
        [n, g],
      ),
      m = (0, i.useMemo)(() => {
        if (null == d || d.length < 2) return d;
        let e = Object.fromEntries(A.map((e, t) => [e, t]));
        return (0, r.sortBy)(d, (t) => {
          let { guild: n } = t;
          return e[n.id] ?? A.length;
        });
      }, [d, A]),
      b = (0, u.A)(t),
      p = (0, u.A)(h),
      y = (0, u.A)(m);
    return {
      mutualFriendsCount: t ?? b,
      mutualFriends: h ?? p,
      mutualGuilds: m ?? y,
      isFetching: c,
      isFetchingFriends: f,
    };
  }
}
