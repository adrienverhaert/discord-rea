/* Recovered shipped factory. Module 378135.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6881343..6881967
 * Raw property SHA-256: ddda7d467a23ecd93d47052d5e7c4e2ec81db64f55ceb04480b9c966f868343d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { P: () => d, k: () => c });
  var i = n(582128),
    r = n(17928),
    a = n(451988),
    s = n(287809),
    l = n(354670),
    o = n(158045);
  function d(e) {
    return e?.hasExpired ?? !1;
  }
  function c(e) {
    let t = (0, r.bG)([l.A], () => l.A.getUserTrialOffer(e)),
      [n, d] = i.useState(t?.hasExpired ?? !1),
      c =
        !(0, r.bG)([s.default], () => (0, o.TW)(s.default.getCurrentUser())) ||
        l.A.canFractionalPremiumUserUseOffer();
    return (
      i.useEffect(() => {
        if (null != t && t.hasAcknowledged) {
          let e = new a.Ep();
          return (
            !(function i() {
              if (null == t) return;
              let r = null != t.expiresAt ? t.expiresAt.getTime() - Date.now() : 0;
              e?.start(r, () => {
                !n && t.hasExpired ? d(!0) : i();
              });
            })(),
            () => e.stop()
          );
        }
      }, [n, t]),
      !n && c ? t : null
    );
  }
}
