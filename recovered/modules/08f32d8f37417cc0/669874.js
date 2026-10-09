/* Recovered shipped factory. Module 669874.
 * Source: recovered/web/assets/08f32d8f37417cc0.js
 * UTF-16 property offsets: 769..1801
 * Raw property SHA-256: c7954c255998884d1bf0bac838c0ab4a225e0037d9da007ab98694131803d93a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { j: () => a, v: () => i.v });
  var l = n(260447),
    r = n(174459),
    i = n(71804),
    s = n(652215);
  class a extends l.z {
    getSentryAppContext() {
      return "billing";
    }
    getSentryTags(e, t) {
      return { ...super.getSentryTags(e, t), checkout_error: "true", billing_context: "checkout" };
    }
    getSentryExtras(e) {
      let {
        loadId: t,
        selectedSkuId: n,
        selectedPlanId: l,
        skuIds: r,
        isGift: s,
        purchaseType: a,
        locationStack: u,
        checkoutStepsHistory: c,
      } = this.props;
      return {
        loadId: t,
        selectedSkuId: n,
        selectedPlanId: l,
        isGift: s,
        purchaseType: a,
        skuIds: r,
        locationStack: u,
        checkoutStepsHistory:
          null != c
            ? c.map((e) => (e.toLowerCase().includes("auth") ? e.replaceAll("auth", "a") : e))
            : [],
        ...(e instanceof i.v ? { checkoutErrorExtraInformation: e.extraSentryInformation } : {}),
      };
    }
    onErrorCaught(e, t, n) {
      this.emitPaymentFlowErrorAnalytics(e, n);
    }
    emitPaymentFlowErrorAnalytics(e, t) {
      let n = this.getCrashedFlag(e),
        { loadId: l, locationStack: i, additionalAnalyticsData: a } = this.props,
        u = "string" == typeof e ? e : e.message;
      r.default.track(s.HAw.PAYMENT_FLOW_ERROR, {
        load_id: l,
        crashed: n,
        error_message: u,
        sentry_event_id: t,
        location_stack: i ?? [],
        ...a,
      });
    }
  }
}
