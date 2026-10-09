/* Recovered shipped factory. Module 715054.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8422821..8424284
 * Raw property SHA-256: 701b57ee7b9249d951c6d953571602999684d54362a8eee9843066339d44f2f9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Q: () => d });
  var i = n(582128),
    r = n(158317),
    a = n(423686),
    s = n(786953),
    l = n(211287),
    o = n(660183);
  function d(e) {
    let [t, n] = (0, i.useState)(""),
      [d, c] = (0, i.useState)([]),
      [u, _] = (0, i.useState)(null),
      [E, A] = (0, i.useState)(!1),
      { enabled: h } = l.A.useConfig({ location: "orb_checkout_modal" }),
      f = e?.order ?? null,
      I = e?.onSignFailure,
      {
        error: p,
        signOrder: T,
        reportError: m,
      } = (0, a.f)({ order: f, errorSource: "orb_redeem_orders_api", onSignFailure: I }),
      g = h ? p : u,
      S = (0, i.useCallback)(
        async (e, t, n) => {
          A(!0);
          let i = await T({ loadId: t, errorExtra: { skuId: e, loadId: t } });
          if ("signed" !== i.type) return void A(!1);
          try {
            let e = await (0, r.Vw)(i.order.id);
            if (0 === e.length) throw new r.j2();
            (c(e), n?.(e));
          } catch (n) {
            m(n, { skuId: e, loadId: t, orderId: i.order.id });
          } finally {
            A(!1);
          }
        },
        [T, m],
      ),
      N = (0, i.useCallback)(
        (e, t, n) =>
          (0, s.J$)({
            skuId: e,
            loadId: t,
            onRedeemStart: function () {
              (A(!0), _(null));
            },
            onRedeemSucceed: function (e) {
              (c(e), A(!1), n?.(e));
            },
            onRedeemFail: function (e) {
              (_(e), A(!1));
            },
          }),
        [],
      ),
      C = (0, i.useCallback)(
        (e, t, n) => {
          h ? S(e, t, n) : N(e, t, n);
        },
        [h, S, N],
      );
    return (
      (0, i.useEffect)(() => {
        if (null != g)
          return void n(o.intl.format(o.t["7gHWrd"], { amount: "1 orb", errorMessage: g.message }));
        if (null != d && d.length > 0) {
          let e = d.map((e) => e.sku?.name);
          n(
            o.intl.format(o.t.JxNFav, {
              amountDescription: "1 orb",
              redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === d.length ? "ID" : "IDs"}: ${d.map((e) => e.id).join(", ")}`,
            }),
          );
          return;
        }
        n("");
      }, [d, g]),
      { entitlements: d, error: g, isSubmitting: E, responseMessage: t, redeemVirtualCurrency: C }
    );
  }
}
