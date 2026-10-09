/* Recovered shipped factory. Module 477421.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6772194..6772762
 * Raw property SHA-256: 354816a844720bc2d48c71a7b475cf1dfec9e63f9e84bdafd7d59632b8f3239f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(582128),
    r = n(17928),
    a = n(73153),
    s = n(277984),
    l = n(280450),
    o = n(615405),
    d = n(295405);
  function c() {
    let e = (0, r.bG)([d.A], () => d.A.getDefaultBillingCountryCode()),
      t = (0, r.bG)([o.A], () => o.A.ipLocation),
      n = (0, r.bG)([l.default], () => l.default.isAuthenticated());
    return (
      i.useEffect(() => {
        a.h.wait(() => {
          !n || o.A.isPaymentSourceFetching || d.A.hasFetchedPaymentSources || s.$o();
        });
      }, [n]),
      i.useEffect(() => {
        n && !o.A.ipLocationLoaded && s.jZ();
      }, [t, n]),
      {
        defaultBillingCountryCode: e,
        ipCountryCode: t?.countryCode,
        ipSubdivisionCode: t?.subdivisionCode,
      }
    );
  }
}
