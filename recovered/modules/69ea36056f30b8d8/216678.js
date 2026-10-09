/* Recovered shipped factory. Module 216678.
 * Source: recovered/web/assets/69ea36056f30b8d8.js
 * UTF-16 property offsets: 1793..2424
 * Raw property SHA-256: 53812edb87f4b0b185f0d0a26fcb007046efc3f761c3b975fe8430f63988733c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (o, t, n) {
  n.d(t, { q: () => i });
  var e = n(391048),
    a = n(589078);
  function i(o) {
    let t = a.UnifiedCheckoutFlowManagerSingletons[a.CL.PREMIUM_APPS_OTP_CHECKOUT].get(),
      {
        applicationId: n,
        skuId: i,
        onClose: l,
        onComplete: d,
        analyticsLocations: s,
        analyticsLocationObject: r,
        contextKey: u,
        isGift: c = !1,
      } = o;
    return t.openCheckoutModal({
      modalAPIOptions: {
        modalKey: "premium-apps-otp-checkout-modal",
        contextKey: u,
        onCloseCallback() {
          (0, e.ET)();
        },
      },
      checkoutConfiguration: { applicationId: n, skuId: i },
      unifiedCheckoutProviderProps: { analyticsLocations: s },
      forwardedPaymentModalProps: { analyticsObject: r },
      checkoutHandlers: { onClose: l, onComplete: d },
      giftContextProps: { isGift: c },
    });
  }
}
