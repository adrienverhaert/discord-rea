/* Recovered shipped factory. Module 211083.
 * Source: recovered/web/assets/a16e6ef86d7f513b.js
 * UTF-16 property offsets: 15124..15666
 * Raw property SHA-256: d90e4501908ce42db3f65b0ea846de5667ef823a58c13cb7e3e3f79c2d27aa8b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { o: () => u });
  var l = n(582128),
    r = n(17928),
    o = n(251913),
    i = n(825755),
    a = n(642639);
  function u() {
    let e = (0, r.bG)([i.A], () => i.A.error),
      {
        paymentAuthError: t,
        isAwaitingPaymentAuthentication: n,
        paymentAuthWasCancelled: u,
      } = (0, a.t4)((e) => ({
        paymentAuthError: e.paymentAuthError,
        isAwaitingPaymentAuthentication: e.isAwaitingPaymentAuthentication,
        paymentAuthWasCancelled: e.paymentAuthWasCancelled,
      })),
      s = l.useMemo(
        () => (n ? o.oc.PENDING : u ? o.oc.CANCELLED : null != t ? o.oc.ERROR : o.oc.NONE),
        [n, u, t],
      );
    return { paymentError: null != t ? t : e, paymentAuthenticationState: s };
  }
}
