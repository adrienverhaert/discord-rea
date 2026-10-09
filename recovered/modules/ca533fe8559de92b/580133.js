/* Recovered shipped factory. Module 580133.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 251881..252744
 * Raw property SHA-256: 9f48ecabb6eaa4b54776f0126c89f20c7c42ceb1391a89ad93097f3bf7a8a925
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { f: () => d, l: () => p });
  var l = n(477900),
    i = n(582128),
    r = n(725836),
    a = n(883645),
    s = n(427675),
    o = n(642639),
    u = n(584160),
    c = n(169797);
  function d(e) {
    let { headerBadgeConfig: t } = e,
      {
        selectedSkuId: n,
        paymentSourceId: r,
        checkoutPaymentSources: d,
        checkoutStoreCountry: p,
      } = (0, o.t4)((e) => ({
        selectedSkuId: e.selectedSkuId,
        paymentSourceId: e.paymentSourceId,
        checkoutPaymentSources: e.get("checkoutPaymentSources"),
        checkoutStoreCountry: e.get("checkoutStoreCountry"),
      })),
      m = (0, s.S3)(),
      h = (0, a.s2)(),
      C = i.useMemo(() => {
        if (null == r) return null;
        let e = d.find((e) => e.id === r);
        return null == e ? null : (e.relocationCountry ?? null);
      }, [d, r]),
      f = i.useMemo(
        () =>
          (0, u.u)({
            step: h ?? void 0,
            skuId: n ?? (null != m ? m.id : null),
            storeCountryFromCheckoutContext: p,
            relocationCountry: C,
            ...t,
          }),
        [h, m, n, p, C, t],
      );
    return (0, l.jsx)(c.s3, { ...f });
  }
  function p() {
    let { setCheckoutHeaderElementNode: e } = (0, r.ck)();
    return (0, l.jsx)("div", { ref: e });
  }
}
