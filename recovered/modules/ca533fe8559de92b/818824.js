/* Recovered shipped factory. Module 818824.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 250388..250806
 * Raw property SHA-256: 64ce94eecf453baaa5aabc7e437993e95ed7647e229c2c691511a3c3c3d674b0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { U: () => o });
  var l = n(582128),
    i = n(997101),
    r = n(17928),
    a = n(615405),
    s = n(642639);
  function o() {
    let { hasAcceptedTerms: e, setHasAcceptedTerms: t } = (0, s.t4)((e) => ({
        hasAcceptedTerms: e.hasAcceptedTerms,
        setHasAcceptedTerms: e.setHasAcceptedTerms,
      })),
      n = (0, r.bG)([a.A], () => i.M.EEA_COUNTRIES.has(a.A.ipCountryCodeWithFallback));
    return (
      l.useLayoutEffect(() => {
        t(!n);
      }, [n, t]),
      { immediateDelivery: n ? { value: e, onChange: t } : void 0 }
    );
  }
}
