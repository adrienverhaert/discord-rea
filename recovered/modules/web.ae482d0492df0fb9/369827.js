/* Recovered shipped factory. Module 369827.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6537373..6537713
 * Raw property SHA-256: 4e2f735f14fa5973329466c1ad8eea60d2234d0dd102ce873071ae3334b35a88
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { L: () => l });
  var i = n(582128),
    r = n(17928),
    a = n(277984),
    s = n(295405);
  function l() {
    let { defaultPaymentSourceId: e, hasFetchedPaymentSources: t } = (0, r.cf)([s.A], () => ({
      defaultPaymentSourceId: s.A.defaultPaymentSourceId,
      hasFetchedPaymentSources: s.A.hasFetchedPaymentSources,
    }));
    return (
      i.useEffect(() => {
        t || (0, a.$o)();
      }, [t]),
      e
    );
  }
}
