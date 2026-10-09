/* Recovered shipped factory. Module 295405.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9269655..9270890
 * Raw property SHA-256: f05e4220797d211f648815405d44d1a87053f2b85b6cf477c6db60774578bba8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(17928),
    r = n(73153),
    a = n(202613);
  let s = {},
    l = null,
    o = !1,
    d = !1;
  function c(e) {
    let { paymentSource: t } = e;
    ((s = { ...s, [t.id]: t }), (t.isDefault || 1 === Object.keys(s).length) && (l = t.id));
  }
  class u extends i.Ay.Store {
    static displayName = "PaymentSourceStore";
    get paymentSources() {
      return s;
    }
    get paymentSourceIds() {
      return Object.keys(s);
    }
    get defaultPaymentSourceId() {
      return l;
    }
    get defaultPaymentSource() {
      return null != l ? s[l] : null;
    }
    get hasFetchedPaymentSources() {
      return o;
    }
    get paymentSourceFetchError() {
      return d;
    }
    getDefaultBillingCountryCode() {
      let e = this.defaultPaymentSource;
      return null == e ? null : e.paymentMethodCountry;
    }
    getPaymentSource(e) {
      return s[e];
    }
  }
  let _ = new u(r.h, {
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: c,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: c,
    BILLING_PAYMENT_SOURCE_FETCH_SUCCESS: c,
    BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: function (e) {
      let { paymentSources: t } = e;
      for (let e of ((s = {}), (l = null), t))
        ((s[e.id] = a.Ay.createFromServer(e)), e.default && (l = e.id));
      (null == l && t.length > 0 && (l = t[0].id), (o = !0), (d = !1));
    },
    BILLING_PAYMENT_SOURCES_FETCH_FAIL: function () {
      d = !0;
    },
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function (e) {
      let { id: t } = e;
      if (((s = { ...s }), delete s[t], l === t)) {
        let e = Object.keys(s);
        l = 0 === e.length ? null : e[0];
      }
    },
    LOGOUT: function () {
      ((s = {}), (l = null), (o = !1), (d = !1));
    },
  });
}
