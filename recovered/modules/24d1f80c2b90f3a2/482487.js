/* Recovered shipped factory. Module 482487.
 * Source: recovered/web/assets/24d1f80c2b90f3a2.js
 * UTF-16 property offsets: 5278..6004
 * Raw property SHA-256: 65e52802d067e6380bb7cd8df56c382e404d469c1f88bd6906540f327deb19e2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => G, m: () => P });
  var l = n(582128),
    u = n(17928),
    r = n(554146),
    i = n(501419),
    o = n(131607),
    s = n(645619),
    A = n(786173),
    _ = n(568065),
    E = n(49999);
  let a = r.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE;
  function d(e) {
    let t = (0, u.bG)([s.A], () => s.A.getStateForGuild(e)),
      n = (0, A.A)(e, t ?? void 0);
    return n >= _.QS.GUILD_THEME ? n : 0;
  }
  function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = d(e),
      [u, r] = (0, o.RF)(n > 0 && !t ? a : null, n),
      i = u === a,
      s = l.useCallback(
        function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.i.TAKE_ACTION;
          i && r(e);
        },
        [i, r],
      );
    return { showNewBadgeOnRow: i, dismissNewBadgeIfShown: s };
  }
  function P(e) {
    let t = d(e);
    l.useEffect(() => {
      t > 0 && (0, i.$l)(a, t, { dismissAction: E.i.AUTO_DISMISS, guildId: e });
    }, [t, e]);
  }
}
