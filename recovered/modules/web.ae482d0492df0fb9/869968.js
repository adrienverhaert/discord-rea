/* Recovered shipped factory. Module 869968.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6670082..6670549
 * Raw property SHA-256: 86eaf3baaa0a360e85ae631e4c3f66b0cf7f3a839926803217b6f11215f0e417
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(17928),
    r = n(73153);
  let a = !1,
    s = !1,
    l = !1;
  class o extends i.Ay.Store {
    static displayName = "CheckoutRecoveryStore";
    getIsTargeted() {
      return l;
    }
    shouldFetchCheckoutRecovery() {
      return !a && !s;
    }
  }
  let d = new o(r.h, {
    CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function (e) {
      ((s = !0), (a = !1), (l = e.isTargeted));
    },
    CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function () {
      ((s = !0), (a = !1));
    },
    CHECKOUT_RECOVERY_STATUS_FETCH: function () {
      a = !0;
    },
    LOGOUT: function () {
      ((a = !1), (s = !1), (l = !1));
    },
  });
}
