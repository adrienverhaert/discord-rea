/* Recovered shipped factory. Module 901930.
 * Source: recovered/web/assets/a16e6ef86d7f513b.js
 * UTF-16 property offsets: 19594..21468
 * Raw property SHA-256: 82a31d539f1e44ec2c78f9374f54df89ab117ae89c2d5f7b2262349c9d657660
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => A, j: () => y });
  var l = n(477900),
    r = n(582128),
    o = n(192308),
    i = n(28863),
    a = n(683071),
    u = n(308528),
    s = n(913122),
    c = n(136857),
    d = n(211083),
    C = n(655857),
    h = n(642639),
    p = n(834981),
    m = n(975571),
    E = n(166532),
    f = n(652215),
    _ = n(660183);
  function y(e) {
    let { planError: t, hasSelectedPaymentElementSourceType: n } = e,
      { paymentError: a } = (0, d.o)(),
      { dropdownCurrencies: y } = (0, C.Jn)(),
      { purchaseError: A, purchasePreviewError: g } = (0, h.t4)((e) => ({
        purchaseError: e.purchaseError,
        purchasePreviewError: e.purchasePreviewError,
      })),
      S = null;
    null != g
      ? (S = g)
      : null != a && (0, E.h5)(a, n)
        ? (S = a)
        : null != A
          ? (S = A)
          : null != t && (S = t);
    let N = (0, p.vx)(),
      T = r.useCallback(() => {
        ((0, o.closeAllModals)(), u.A.openPrivateChannel({ recipientIds: N }));
      }, [N]),
      I = y.length > 1,
      k = null != S ? S.message : "";
    if (
      null != S &&
      S instanceof s.Ey &&
      (S.code === c.tG.CARD_DECLINED && I && (k += ` ${_.intl.string(_.t.iWvwQS)}`),
      S.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (k = _.intl.string(_.t.ypuSd8)),
      S.code === f.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (k = _.intl.string(_.t.mXMmWE)),
      S.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (k = _.intl.string(_.t.mC1Fjz)),
      (S.code === c.tG.BILLING_SPENDING_LIMIT_REACHED ||
        S.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
        (k = _.intl.format(_.t["mv/fF2"], {
          guardianHook: (e, t) =>
            N.length > 0
              ? (0, l.jsx)(i.Anchor, { onClick: T, children: e }, t)
              : (0, l.jsx)(r.Fragment, { children: e }, t),
        })),
      S.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
      let e = _.intl.format(_.t.BPDKoA, {
        helpdeskArticle: m.A.getArticleURL(f.MVz.BILLING).concat(f.bNI.INVALID_BILLING_ADDRESS),
      });
      k = (0, l.jsxs)(l.Fragment, { children: [_.intl.string(_.t["yVIm/G"]), " ", e] });
    }
    return { error: S, errorMessage: k };
  }
  function A(e) {
    let {
        planError: t,
        purchaseErrorBlockRef: n,
        hasSelectedPaymentElementSourceType: r,
        className: o,
      } = e,
      { error: i, errorMessage: u } = y({ planError: t, hasSelectedPaymentElementSourceType: r });
    return null == i
      ? null
      : (0, l.jsx)("div", {
          ref: n,
          className: o,
          children: (0, l.jsx)(a.w, { type: "critical", children: u }),
        });
  }
}
