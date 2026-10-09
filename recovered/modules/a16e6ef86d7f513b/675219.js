/* Recovered shipped factory. Module 675219.
 * Source: recovered/web/assets/a16e6ef86d7f513b.js
 * UTF-16 property offsets: 3656..11371
 * Raw property SHA-256: f37d406d68072a067e2f0dbb67af338d7a4a42152a4b77b26d8be2c17c668a62
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  (n.d(t, { od: () => x }), n(321073));
  var l = n(477900),
    r = n(582128),
    o = n(132500),
    i = n(192308),
    a = n(231723),
    u = n(73153),
    s = n(166532),
    c = n(925847),
    d = n(310829),
    C = n(505274),
    h = n(174459),
    p = n(75304),
    m = n(145659),
    E = n(241440),
    f = n(531740),
    _ = n(982291),
    y = n(852607),
    A = n(331611),
    g = n(169797),
    S = n(652215);
  n(322076);
  var N = n(202541),
    T = n(660183);
  let I = {
      [p.C.ORB_CHECKOUT]: {
        allowGiftCustomization: !1,
        excludePaymentAuthSteps: !0,
        predicateStepType: "unified",
      },
      [p.C.COLLECTIBLES_CHECKOUT]: {
        allowGiftCustomization: !0,
        predicateStepType: "one_time_payment",
      },
      [p.C.SLAYER_STOREFRONT_CHECKOUT]: {
        allowGiftCustomization: !0,
        predicateStepType: "one_time_payment",
      },
      [p.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
      [p.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
      [p.C.PREMIUM_APPS_OTP_CHECKOUT]: {
        allowGiftCustomization: !0,
        predicateStepType: "one_time_payment",
      },
      [p.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
      [p.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
      [p.C.GUILD_PRODUCT_CHECKOUT]: {
        allowGiftCustomization: !1,
        predicateStepType: "one_time_payment",
      },
      [p.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
      [p.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT]: {
        allowGiftCustomization: !1,
        predicateStepType: "subscription",
      },
      [p.C.PAST_DUE_MAGIC_LINK_CHECKOUT]: { allowGiftCustomization: !1 },
    },
    k = (0, r.lazy)(() =>
      Promise.all([
        n.e("339384"),
        n.e("793438"),
        n.e("154791"),
        n.e("725246"),
        n.e("312665"),
        n.e("208430"),
      ])
        .then(n.bind(n, 427325))
        .then((e) => {
          let { UnifiedCheckoutInstance: t } = e;
          return { default: t };
        }),
    );
  function O(e) {
    return (0, l.jsx)(k, { ...e });
  }
  class x {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
      this.checkoutFlow = e;
      const t = f.Y[e];
      if (
        !(function (e, t) {
          return null != t && t.implemented && t.flowType === e;
        })(e, t)
      )
        throw Error(`Checkout flow ${e} is not implemented`);
      ((this.checkoutFlowConfiguration = t),
        (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
        (this.internalCheckoutFlowControls = I[e]),
        (this.override_analytic_params =
          this.tenantCheckoutFlowConfig.TENANT_PROVIDER_CONFIGS.overrideAnalyticParams));
    }
    getCheckoutStep(e) {
      return this.tenantCheckoutFlowConfig.CHECKOUT_STEPS[e];
    }
    generateRenderHeader() {
      let { CustomHeaderComponent: e } = this.tenantCheckoutFlowConfig;
      if (null != e)
        return (t) => {
          let { handleClose: n, step: r } = t;
          return (0, l.jsx)(e, { onClose: n, step: r });
        };
    }
    getPredicateStepConfig() {
      let { CUSTOM_PREDICATE_STEP_CONFIG: e } = this.tenantCheckoutFlowConfig,
        { predicateStepType: t } = this.internalCheckoutFlowControls;
      return null != e
        ? { key: null, renderStep: e.renderStep, options: e.options }
        : "one_time_payment" === t
          ? y.kO
          : "subscription" === t
            ? y.r3
            : {
                key: null,
                renderStep: (e) =>
                  (0, l.jsx)(A.e, { paymentModalStepProps: e, defaultStep: s.pn.REVIEW }),
              };
    }
    getAddPaymentStepConfig(e) {
      let { isGift: t } = e,
        { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
      if (this.checkoutFlow !== p.C.ORB_CHECKOUT)
        return {
          key: s.pn.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, l.jsx)(_.c, {
              checkoutFlow: this.checkoutFlow,
              paymentModalStepProps: e,
              returnStep: s.pn.REVIEW,
              returnStepIfNoPaymentSources: t && n ? s.pn.GIFT_CUSTOMIZATION : void 0,
            }),
          options: { renderHeader: !0 },
        };
    }
    getGiftCustomizationStepConfig(e) {
      let { isGift: t } = e,
        { allowGiftCustomization: n } = this.internalCheckoutFlowControls,
        r = this.getCheckoutStep(s.pn.GIFT_CUSTOMIZATION);
      if (t && n && null != r)
        return {
          key: s.pn.GIFT_CUSTOMIZATION,
          renderStep: (e) => (0, l.jsx)(r, { ...e }),
          options: {
            modalSizeGetter: () => "xl",
            useBreadcrumbLabel: () => T.intl.string(T.t["W685+b"]),
          },
        };
    }
    getReviewStepConfig() {
      let e = this.getCheckoutStep(s.pn.REVIEW);
      return {
        key: s.pn.REVIEW,
        renderStep: (t) => (0, l.jsx)(e, { ...t }),
        options: { useBreadcrumbLabel: () => T.intl.string(T.t.QBnNHq) },
      };
    }
    createDefinedStepConfigsArray(e) {
      return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
      let { isGift: t } = e,
        { CUSTOM_CONFIRM_STEP_CONFIG: n, STEPS_BEFORE_CHECKOUT: l = [] } =
          this.tenantCheckoutFlowConfig,
        { excludePaymentAuthSteps: r } = this.internalCheckoutFlowControls,
        o = this.getPredicateStepConfig(),
        i = this.getGiftCustomizationStepConfig({ isGift: t }),
        a = this.getAddPaymentStepConfig({ isGift: t }),
        u = this.getReviewStepConfig(),
        c = this.createDefinedStepConfigsArray([
          o,
          ...(null != i ? [i] : []),
          ...l,
          a,
          ...(r ? [] : y.PL),
          u,
        ]);
      return (
        null != n && c.push({ key: s.pn.CONFIRM, renderStep: n.renderStep, options: n.options }),
        c
      );
    }
    getApplicationId(e) {
      return this.checkoutFlow === p.C.ORB_CHECKOUT && null != e
        ? (0, d.P)(e)
        : this.checkoutFlow === p.C.COLLECTIBLES_CHECKOUT
          ? S.FYj
          : this.checkoutFlow === p.C.PREMIUM_CHECKOUT
            ? N.tv
            : void 0;
    }
    trackPaymentFlowCanceled(e) {
      let {
          loadId: t,
          skuId: n,
          skuProductLine: l,
          applicationId: r,
          discoverySessionId: o,
          analyticsLocation: i,
          analyticsLocations: a,
          analyticsObject: u,
          analyticsSourceLocation: s,
          isGift: c,
          eligibleForTrial: d,
        } = e,
        E = C.A.balance;
      h.default.track(S.HAw.PAYMENT_FLOW_CANCELED, {
        load_id: t,
        discovery_session_id: o,
        payment_type: S.frM[this.checkoutFlowConfiguration.purchaseType],
        is_gift: c,
        sku_id: n,
        sku_product_line: l,
        application_id: r,
        location: i ?? u,
        location_stack: a,
        source: s,
        eligible_for_trial: d,
        payment_modal_version: "v2",
        checkout_design: m.r.UNIFIED,
        checkout_flow: this.checkoutFlow,
        virtual_currency_balance: E,
        ...(this.checkoutFlow === p.C.PREMIUM_CHECKOUT ? { subscription_type: S.rzx.PREMIUM } : {}),
        ...this.override_analytic_params,
      });
    }
    getStandaloneLoadId() {
      return (0, c.A)() ?? (0, o.A)();
    }
    renderCheckoutInstance(e) {
      let {
          giftContextProps: t,
          checkoutHandlers: { onComplete: s, onClose: c } = {},
          checkoutConfiguration: {
            skuId: d,
            skuProductLine: C,
            discoverySessionId: h,
            applicationId: p,
            activeSubscription: m,
            initialPaymentSourceId: f,
          },
          unifiedCheckoutProviderProps: { analyticsLocations: _, analyticsSourceLocation: y },
          forwardedPaymentModalProps: { analyticsObject: A, ...S } = {},
          tenantParams: N,
        } = e,
        T = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
        I = arguments.length > 2 ? arguments[2] : void 0,
        k = arguments.length > 3 ? arguments[3] : void 0,
        x = { current: k ?? (0, o.A)() },
        v = { current: null },
        { modalKey: w } = I,
        j = this.generateRenderHeader(),
        F = p ?? this.getApplicationId(d),
        P = !!(null != t && t.isGift),
        R = !1,
        G = {
          ...S,
          checkoutFlow: this.checkoutFlow,
          checkoutFlowConfiguration: this.checkoutFlowConfiguration,
          tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
          stepConfigs: this.generateCheckoutStepConfigs({ isGift: P }),
          onComplete: (e) => {
            (null != s && s(e), (R = !0));
          },
          onClose: c,
          renderHeader: j,
          skuId: d ?? null,
          tenantParams: N ?? {},
          loadId: x.current,
          onOrderCreated: function (e) {
            ((x.current = e.id), (v.current = e));
          },
          discoverySessionId: h,
          activeSubscription: m ?? null,
          initialPaymentSourceId: f ?? null,
          applicationId: F,
          analyticsLocations: _,
          analyticsObject: A,
          analyticsSourceLocation: y,
          giftContextProps: t,
        };
      if ("modal" === T)
        return (0, i.openModalLazy)(
          async () => {
            let { UnifiedCheckoutInstance: e } = await Promise.all([
              n.e("339384"),
              n.e("793438"),
              n.e("154791"),
              n.e("725246"),
              n.e("312665"),
              n.e("208430"),
            ]).then(n.bind(n, 427325));
            return (t) => (0, l.jsx)(e, { ...G, renderModalProps: t });
          },
          {
            ...I,
            onCloseRequest: () => {
              (null != I.onCloseRequest && I.onCloseRequest(R, x.current),
                I.skipCloseModalOnCloseRequest || (0, i.closeModal)(w, I.contextKey));
            },
            onCloseCallback: () => {
              (u.h.dispatch({ type: "CHECKOUT_MODAL_CLOSE", didSucceed: R }),
                R ||
                  ((0, E.S)({ checkoutSucceeded: R, order: v.current }),
                  this.trackPaymentFlowCanceled({
                    loadId: x.current,
                    skuId: d,
                    skuProductLine: C,
                    applicationId: F,
                    discoverySessionId: h,
                    analyticsLocation: S.analyticsLocation,
                    analyticsLocations: _,
                    analyticsObject: A,
                    analyticsSourceLocation: y,
                    isGift: P,
                    eligibleForTrial: null != S.trialId,
                  })),
                null != I.onCloseCallback && I.onCloseCallback(R),
                null != c && c(R, d));
            },
            modalKey: w,
          },
        );
      {
        let e = S.paymentModalOnClose ?? c,
          t = {
            transitionState: a.ip.ENTERED,
            onClose: () => (null != e && e(!1), Promise.resolve()),
          };
        return (0, l.jsx)(r.Suspense, {
          fallback: (0, l.jsx)(g.KT, {}),
          children: (0, l.jsx)(O, { ...G, paymentModalOnClose: e, renderModalProps: t }),
        });
      }
    }
    openCheckoutModal(e) {
      let { modalAPIOptions: t } = e;
      return this.renderCheckoutInstance(e, "modal", t);
    }
    renderStandaloneCheckout(e, t) {
      return this.renderCheckoutInstance(e, "standalone", { modalKey: "standalone-checkout" }, t);
    }
  }
}
