/* Recovered shipped factory. Module 432779.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6771594..6772193
 * Raw property SHA-256: c84abb7a706a8c4a5c4c72c0fab0b3a5fd3cc3d42750e7cb4bf8bb9f88100ad8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(582128),
    r = n(17928),
    a = n(451988),
    s = n(287809),
    l = n(354670),
    o = n(158045),
    d = n(202541);
  function c(e, t) {
    let n = (0, r.bG)([l.A], () => l.A.getUserDiscountOffer(e)),
      [c, u] = i.useState(n?.hasExpired() ?? !1),
      _ = (0, r.bG)([s.default], () => (0, o.TW)(s.default.getCurrentUser())),
      E = d.i_.includes(e);
    return (
      i.useEffect(() => {
        if (!n?.hasAcknowledged()) return;
        let e = new a.Ep();
        return (
          !(function t() {
            if (!n?.hasAcknowledged()) return;
            let i = null != n.expiresAt ? n.expiresAt.getTime() - Date.now() : 0;
            e?.start(i, () => {
              !c && n.hasExpired() ? u(!0) : t();
            });
          })(),
          () => e.stop()
        );
      }, [c, n]),
      !c && (!_ || t || E) ? n : null
    );
  }
}
