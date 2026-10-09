/* Recovered shipped factory. Module 300233.
 * Source: recovered/web/assets/a16e6ef86d7f513b.js
 * UTF-16 property offsets: 15667..16656
 * Raw property SHA-256: dcdc00dddf6a985953f6ee987202427a2a206f84086a90069f91fddab7c53ef5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { H: () => d, X: () => c });
  var l = n(477900),
    r = n(582128),
    o = n(702841),
    i = n(595528),
    a = n(579908),
    u = n(636194);
  let s = r.createContext(void 0);
  function c(e) {
    let t = r.useContext(s);
    if (null == t)
      throw Error(
        `${e ?? "useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`,
      );
    let { listingsLoaded: n, fetchGroupListingsForGuild: l } = t;
    return (
      r.useEffect(() => {
        l();
      }, [l]),
      n
    );
  }
  function d(e) {
    let {
        guildId: t,
        children: n,
        refetchOnMount: c,
        includeSoftDeleted: d,
        countryCode: C,
        dontFetchWhileTrue: h,
      } = e,
      p = (0, o.bG)([i.A], () => i.A.isConnected()),
      m = (0, o.bG)([u.A], () =>
        null != t ? u.A.getSubscriptionGroupListingsForGuildFetchState(t) : u.e.FETCHED,
      ),
      [E, f] = r.useState(!0 === c),
      _ = r.useCallback(() => {
        if (null == t || !p || !0 === h) return;
        let e = u.A.getSubscriptionGroupListingsForGuildFetchState(t);
        (E || e === u.e.NOT_FETCHED) && (f(!1), a.WA(t, { includeSoftDeleted: d, countryCode: C }));
      }, [p, t, d, C, h, E]),
      y = m === u.e.FETCHED && !E;
    return (0, l.jsx)(s.Provider, {
      value: { listingsLoaded: y, fetchGroupListingsForGuild: _ },
      children: n,
    });
  }
}
