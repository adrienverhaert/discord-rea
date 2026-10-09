/* Recovered shipped factory. Module 725836.
 * Source: recovered/web/assets/f7d9d732bb94900b.js
 * UTF-16 property offsets: 95..1007
 * Raw property SHA-256: 9aef14a35c6858c5d3568f2c4eec5906fb91b9d78f7ad9b5159cb33f8247b2b9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  r.d(t, { I6: () => p, UY: () => c, bx: () => s, ck: () => a, e0: () => i, gw: () => d });
  var n = r(477900),
    l = r(582128),
    u = r(333007);
  let [o, a] = (0, r(786300).A)();
  function i(e) {
    let { children: t } = e,
      [r, u] = l.useState(null),
      [a, i] = l.useState(null),
      [c, s] = l.useState(null),
      d = l.useMemo(
        () => ({
          setCheckoutFooterContentNode: u,
          checkoutFooterContentNode: r,
          checkoutHeaderElementNode: a,
          setCheckoutHeaderElementNode: i,
          checkoutFooterLineItemNode: c,
          setCheckoutFooterLineItemNode: s,
        }),
        [r, u, a, i, c, s],
      );
    return (0, n.jsx)(o.Provider, { value: d, children: t });
  }
  function c(e) {
    let { children: t } = e,
      { checkoutHeaderElementNode: r } = a();
    return null == r ? null : u.createPortal(t, r);
  }
  function s(e) {
    let { children: t } = e,
      { checkoutFooterContentNode: r } = a();
    return null == r ? null : u.createPortal(t, r);
  }
  function d(e) {
    let { children: t } = e,
      { checkoutFooterLineItemNode: r } = a();
    return null == r ? null : u.createPortal(t, r);
  }
  function p() {
    let e = l.useContext(o);
    return null == e ? null : e.checkoutFooterLineItemNode;
  }
}
