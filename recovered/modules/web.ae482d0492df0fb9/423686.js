/* Recovered shipped factory. Module 423686.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6533075..6535996
 * Raw property SHA-256: 28ce4f6d103abbd4c5a4624f7607f4303c207594e0328808d36385702533252c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { f: () => h });
  var i = n(582128),
    r = n(136857),
    a = n(739508),
    s = n(158317),
    l = n(71532);
  async function o() {
    let e = await (0, l.Cv)();
    if (null == e) throw Error("Stripe is not loaded");
    return e;
  }
  async function d(e, t) {
    let { error: n, paymentIntent: i } = await e.retrievePaymentIntent(t);
    if (null != n) throw Error(`Could not retrieve the payment intent: ${n.message}`);
    if (null == i) throw Error("Payment intent does not exist");
    return i;
  }
  async function c(e, t, n) {
    let { error: i } = await e.confirmCardPayment(t, n);
    if (null != i) throw Error(`Card authentication failed: ${i.message}`);
  }
  async function u(e) {
    let { client_secret: t, payment_method_id: n } = e;
    if (null == t) throw Error("Stripe 3DS context has no client secret");
    let i = await o(),
      r = await d(i, t);
    switch (r.status) {
      case "succeeded":
      case "processing":
        return;
      case "requires_payment_method":
      case "requires_confirmation":
      case "requires_action":
        return c(
          i,
          t,
          (function (e, t) {
            if ("requires_payment_method" === e.status && null != t) return { payment_method: t };
          })(r, n),
        );
      default:
        throw Error(`Unexpected payment intent status: ${r.status}`);
    }
  }
  async function _(e) {
    if (null == e) throw Error("Order signing was deferred without a deferral context");
    let { payment_redirect_context: t, stripe_3ds_context: n } = e;
    if (null != t)
      return void (function (e) {
        let { redirect_url: t } = e;
        if (null == t) throw Error("Payment redirect context has no redirect url");
        window.open(t);
      })(t);
    if (null != n) return void (await u(n));
    throw Error("Order signing deferral context has no action the client can complete");
  }
  var E = n(26279),
    A = n(660183);
  function h(e) {
    let { order: t, errorSource: n, onSignFailure: l, onError: o } = e,
      [d, c] = (0, i.useState)(null),
      u = (0, i.useCallback)(
        (e) => {
          (c(e), o?.(e));
        },
        [o],
      ),
      h = (0, i.useCallback)(
        (e, t, i) => {
          let s = e instanceof r.Ay ? e : new r.Ay(e);
          (0, a.gr)(e) || (0, a.pM)(e instanceof Error ? e : s, { tags: { source: n }, extra: t });
          let l = null != i ? new r.Ay(i) : s;
          return (u(l), l);
        },
        [n, u],
      ),
      f = (0, i.useCallback)(
        async function () {
          let {
            loadId: e,
            purchaseToken: n,
            gatewayCheckoutContext: i,
            errorExtra: a,
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (null == t) return (u(new r.Ay("Order not created yet")), { type: "failed" });
          c(null);
          try {
            let l = await (0, s.Ub)({
              orderId: t.id,
              loadId: e,
              purchaseToken: n,
              gatewayCheckoutContext: i,
            });
            if (l.status === E.Re.SIGNED) return { type: "signed", order: l };
            if (l.status === E.Re.SIGNING_IN_PROGRESS) {
              let e = l.billing_facet;
              try {
                await _(null != e ? e.order_signing_deferral_context : null);
              } catch (e) {
                return (
                  h(e, { ...a, orderId: t.id }, A.intl.string(A.t.khEaRI)),
                  { type: "failed" }
                );
              }
              return { type: "pending", order: l };
            }
            let o = (function (e) {
              let { error: t } = e;
              return null == t || t.code === E.lD.UNKNOWN_ERROR_CODE
                ? null
                : new r.Ay(t.message, t.billing_error_code);
            })(l);
            if (null != o) return (u(o), { type: "failed" });
            if (null != l.error) throw Error(`Order signing failed with error: ${l.error.code}`);
            throw Error(`Unexpected order status: ${l.status}`);
          } catch (e) {
            if (e instanceof s.FY) return (l?.(e.order), u(e), { type: "failed" });
            return (h(e, { ...a, orderId: t.id }), { type: "failed" });
          }
        },
        [t, l, h, u],
      );
    return { error: d, signOrder: f, reportError: h };
  }
}
