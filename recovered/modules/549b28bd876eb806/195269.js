/* Recovered shipped factory. Module 195269.
 * Source: recovered/web/assets/549b28bd876eb806.js
 * UTF-16 property offsets: 95..472
 * Raw property SHA-256: fe1f21211dd88d72c518678fdadf63402508addef0d658363ef2e018eec7283f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  e.d(t, { L: () => s });
  var n = e(582128),
    o = e(642639);
  function s() {
    let r = n.useRef(null),
      { purchaseError: t, setPurchaseError: e } = (0, o.t4)((r) => ({
        purchaseError: r.purchaseError,
        setPurchaseError: r.setPurchaseError,
      }));
    return (
      n.useEffect(() => {
        null != t && null != r.current && r.current.scrollIntoView({ behavior: "smooth" });
      }, [t]),
      { purchaseError: t, setPurchaseError: e, purchaseErrorBlockRef: r }
    );
  }
}
