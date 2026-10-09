/* Recovered shipped factory. Module 309954.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8422414..8422820
 * Raw property SHA-256: 43dba6d33980d12a403e0b8339cdc4d69bc42bef1b638cad79115ebd10697b7b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { W: () => l });
  var i = n(582128),
    r = n(17928),
    a = n(786953),
    s = n(505274);
  function l(e) {
    let {
      balance: t,
      isFetching: n,
      error: l,
    } = (0, r.cf)([s.A], () => ({
      balance: s.A.balance,
      isFetching: s.A.isFetchingBalance,
      error: s.A.fetchBalanceError,
    }));
    return (
      (0, i.useEffect)(() => {
        e?.disableFetch || null !== t || null !== l || s.A.isFetchingBalance || (0, a.Bf)();
      }, [t, l, e?.disableFetch]),
      { balance: t, isFetching: n, error: l }
    );
  }
}
