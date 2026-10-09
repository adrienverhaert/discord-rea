/* Recovered shipped factory. Module 743693.
 * Source: recovered/web/assets/3fcf1f7387780416.js
 * UTF-16 property offsets: 3562..4045
 * Raw property SHA-256: 0191e77ca5fc1f768c08933c1715b5b6ab8b7120564879d11ddac7744c853038
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, r) {
  r.d(e, { _: () => o });
  var i = r(477900),
    n = r(17928),
    l = r(753704),
    a = r(280450),
    u = r(471505);
  function o(t) {
    let { sku: e, location: r, isCardHovered: o = !0, trackButtonClick: s, ..._ } = t,
      d = (0, n.bG)([a.default], () => a.default.getId()),
      {
        isWishlisted: T,
        isBusy: c,
        isFirstTimeWishlister: b,
        handleToggle: N,
      } = (0, u.G)({ userId: d, sku: e, location: r, trackButtonClick: s });
    return (0, i.jsx)(l._, {
      skuId: e.id,
      productName: e.name,
      isWishlisted: T,
      isBusy: c,
      isFirstTimeWishlister: b,
      isVisuallyHidden: !o && !T,
      onClick: N,
      ..._,
    });
  }
}
