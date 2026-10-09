/* Recovered shipped factory. Module 478996.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8421936..8422413
 * Raw property SHA-256: 69f9d84443215169beca160ec8f2fde564da2d96ee59eec8caa3f74bbaff5468
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { rQ: () => o, W0: () => i.W, Qr: () => d.Q });
  var i = n(309954),
    r = n(582128),
    a = n(17928),
    s = n(786953),
    l = n(505274);
  function o(e) {
    let {
      totalRedeemed: t,
      isFetching: n,
      error: i,
    } = (0, a.cf)([l.A], () => ({
      totalRedeemed: l.A.totalRedeemed,
      isFetching: l.A.isFetchingTotalRedeemed,
      error: l.A.fetchTotalRedeemedError,
    }));
    return (
      (0, r.useEffect)(() => {
        e?.disableFetch === !0 || n || null != t || null != i || (0, s.Ce)();
      }, [t, n, i, e?.disableFetch]),
      { totalRedeemed: t, isFetching: n, error: i }
    );
  }
  var d = n(715054);
}
