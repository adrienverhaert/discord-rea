/* Recovered shipped factory. Module 36167.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 268079..268791
 * Raw property SHA-256: d1b7cf4e8a41a6a7e77121ded29a8d2d170f52386e62bbd86adc71ffa48868ea
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  (n.d(t, { OD: () => o, my: () => u, xq: () => s }), n(323874), n(14289), n(35956));
  var l = n(132500),
    i = n(636537),
    r = n(998218),
    a = n(652215);
  function s(e, t, n) {
    let s = new URL(r.A.makeUrl(a.BVt.BILLING_LOGIN_HANDOFF, !1)),
      o = (0, l.A)();
    return (
      s.searchParams.append("handoff_key", o),
      s.searchParams.append("redirect_to", e),
      i.Bo.post({
        url: a.Rsh.HANDOFF,
        body: { key: o },
        oldFormErrors: !0,
        rejectWithError: !1,
      }).then(
        (e) => t(e, s),
        (t) => n(t, e),
      )
    );
  }
  function o(e, t, n) {
    let {
      planId: l,
      isGift: i,
      loadId: r,
      paymentMethodType: o,
      deepLinkType: u,
      usePresetOffer: c,
      flowType: d,
    } = e;
    return s(a.BVt.BILLING_STANDALONE_CHECKOUT_PAGE(l, i, r, o, u, c, d), t, n);
  }
  function u(e, t) {
    return o(
      e,
      (e, t) => {
        (t.searchParams.append("handoff_token", e.body.handoff_token), window.open(t.href));
      },
      t,
    );
  }
}
