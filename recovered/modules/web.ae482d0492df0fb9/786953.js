/* Recovered shipped factory. Module 786953.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8415853..8417750
 * Raw property SHA-256: 8ddc0a7f0b473721ec11ed4b488459888979be2001404fe0fb6e2956485ba3cc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Bf: () => _, Ce: () => E, J$: () => A });
  var i = n(636537),
    r = n(73153),
    a = n(913122),
    s = n(626584),
    l = n(977445),
    o = n(67480),
    d = n(38405),
    c = n(652215);
  let u = new s.A("VirtualCurrencyActionCreators");
  async function _() {
    r.h.wait(() => {
      r.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
    });
    try {
      let e = await i.Bo.get({ url: c.Rsh.VIRTUAL_CURRENCY_USER_BALANCE, rejectWithError: !1 }),
        t = e.body.balance;
      return (r.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS", balance: t }), e.body);
    } catch (t) {
      let e = t instanceof a.Ey ? t : new a.Ey(t);
      r.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL", error: e });
    }
  }
  async function E() {
    r.h.wait(() => {
      r.h.dispatch({ type: "VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH" });
    });
    try {
      let e = await i.Bo.get({
          url: c.Rsh.VIRTUAL_CURRENCY_USER_TOTAL_REDEEMED,
          rejectWithError: !1,
        }),
        t = e.body.total_redeemed;
      return (
        r.h.dispatch({ type: "VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH_SUCCESS", totalRedeemed: t }),
        e.body
      );
    } catch (t) {
      let e = t instanceof a.Ey ? t : new a.Ey(t);
      r.h.dispatch({ type: "VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH_FAIL", error: e });
    }
  }
  async function A(e) {
    let {
      skuId: t,
      loadId: n,
      onRedeemStart: s,
      onRedeemSucceed: E,
      onRedeemFail: A,
      shouldRefetchBalance: h = !0,
    } = e;
    (r.h.wait(() => {
      r.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: t });
    }),
      s?.());
    try {
      let e = o.A.get(t),
        a = e?.applicationId,
        s = null != a && (0, l.Fs)(a),
        A = { checkout_session_id: n };
      s && (A.test_mode = !0);
      let f = (
        await i.Bo.post({ url: c.Rsh.VIRTUAL_CURRENCY_SKU_REDEEM(t), body: A, rejectWithError: !1 })
      ).body;
      if (null == f || !Array.isArray(f)) {
        let e = "Could not read entitlements from Virtual Currency redemption response. Response: ",
          t = Error(e, f);
        throw (
          u.error(e, f),
          d.A.captureException(t, { tags: { app_context: "virtual_currency" } }),
          t
        );
      }
      return (
        r.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS", skuId: t, entitlements: f }),
        h && _(),
        E?.(f),
        f
      );
    } catch (n) {
      let e = n instanceof a.Ey ? n : new a.Ey(n);
      (r.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_FAIL", skuId: t, error: e }),
        h && _(),
        A?.(e));
    }
  }
}
