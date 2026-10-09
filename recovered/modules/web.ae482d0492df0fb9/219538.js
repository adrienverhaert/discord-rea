/* Recovered shipped factory. Module 219538.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3127864..3128402
 * Raw property SHA-256: 9cf74db2379f2d8e50a8ff08a71b10b098a7fe999a7b03e60af2a9783e0ad5f0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { r: () => a, w: () => s });
  var i = n(636537),
    r = n(652215);
  async function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (
      await i.Bo.post({
        url: r.Rsh.BILLING_STRIPE_SETUP_INTENT_SECRET,
        oldFormErrors: !0,
        rejectWithError: !0,
        ...e,
      })
    ).body;
  }
  async function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (
      await i.Bo.post({
        url: r.Rsh.BILLING_STRIPE_SETUP_INTENT_SECRET_FOR_PAYMENT_ELEMENTS,
        oldFormErrors: !0,
        rejectWithError: !0,
        failImmediatelyWhenRateLimited: !0,
        ...e,
      })
    ).body;
  }
}
