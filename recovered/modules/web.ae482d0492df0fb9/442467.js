/* Recovered shipped factory. Module 442467.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3526307..3527065
 * Raw property SHA-256: 7cc8fcc2264d1fd59af2eb7331f2e67634f25075092de74dcd8d373f5f4fa740
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C: () => s, d: () => l });
  var i,
    r = n(136857),
    a = n(595528),
    s =
      (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
      (i[(i.PENDING = 1)] = "PENDING"),
      (i[(i.SUCCESS = 2)] = "SUCCESS"),
      (i[(i.ERROR = 3)] = "ERROR"),
      i);
  function l(e, t) {
    function n(t) {
      a.A.isConnected() &&
        t.code === r.Ay.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED &&
        e({ purchaseTokenAuthState: 1 });
    }
    return {
      purchaseTokenAuthState: 0,
      purchaseTokenHash: null,
      expiresAt: null,
      handlePaymentFailureForPurchaseTokenAuth: (e) => {
        let { error: t } = e;
        n(t instanceof r.Ay ? t : new r.Ay(t));
      },
      handleBillingErrorForPurchaseTokenAuth: n,
      handlePurchaseTokenAuth: (t) => {
        e({
          purchaseTokenAuthState: 2,
          purchaseTokenHash: t.purchaseTokenHash,
          expiresAt: t.expiresAt,
        });
      },
      resetPurchaseTokenState: () => {
        e({ purchaseTokenAuthState: 0, purchaseTokenHash: null, expiresAt: null });
      },
    };
  }
}
