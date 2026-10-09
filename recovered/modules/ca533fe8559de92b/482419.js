/* Recovered shipped factory. Module 482419.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 233001..233661
 * Raw property SHA-256: d50e34103225e5396a3ebf988d79ce3e168bfcf44c11f135c0e4da26dbca8678
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { k: () => c });
  var l = n(477900);
  n(582128);
  var i = n(888751),
    r = n(854354),
    a = n(400612),
    s = n(270537),
    o = n(649975),
    u = n(660183);
  function c(e) {
    let {
        discriminatedInvoicePreview: t,
        subscriptionPlan: n,
        subscriptionTrial: c,
        isPrepaidPaymentSource: d,
        isCustomGift: p,
      } = e,
      { invoicePreview: m } = t,
      h = [];
    h =
      t.type === a.u$.PREMIUM_GIFT
        ? (0, i.fk)(m, { isCustomGift: p, isPrepaidPaymentSource: d, subscriptionPlan: n })
        : (0, i.IY)(m, {
            isPrepaidPaymentSource: d,
            invoiceSummaryType: t.type,
            subscriptionPlan: n,
            subscriptionTrial: c,
          }).lineItems;
    let C = (0, r.lp)(m, { manualLineItems: h, includeTaxLineItem: !0 });
    return (0, l.jsx)(s.Vm, {
      label: u.intl.string(o.default.eoXh7B),
      lineItems: C,
      currency: m.currency,
    });
  }
}
