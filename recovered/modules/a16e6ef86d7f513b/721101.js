/* Recovered shipped factory. Module 721101.
 * Source: recovered/web/assets/a16e6ef86d7f513b.js
 * UTF-16 property offsets: 95..701
 * Raw property SHA-256: 1c25b4d27140c84301008b0c11f27ea50ea8ff0447a563b08986f8c3e9219b32
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => s });
  var l = n(17928),
    r = n(73153);
  let o = !1,
    i = null,
    a = null;
  class u extends l.Ay.Store {
    static displayName = "PaymentSourceCreationContextStore";
    get loading() {
      return o;
    }
    get error() {
      return i;
    }
    get data() {
      return a;
    }
  }
  let s = new u(r.h, {
    PAYMENT_SOURCE_CREATION_CONTEXT_CLEAR: function (e) {
      ((o = !1), (i = null), (a = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START: function (e) {
      ((o = !0), (i = null), (a = null));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS: function (e) {
      let { data: t } = e;
      ((o = !1), (i = null), (a = t));
    },
    PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL: function (e) {
      let { error: t } = e;
      ((o = !1), (i = t), (a = null));
    },
    LOGOUT: function () {
      ((o = !1), (i = null), (a = null));
    },
  });
}
