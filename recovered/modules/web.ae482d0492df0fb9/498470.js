/* Recovered shipped factory. Module 498470.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6807809..6809636
 * Raw property SHA-256: 0c01dca02e90972ce29af3c21583f9063e900ca53694643fde05656be68e4c10
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { h: () => f, x: () => h });
  var i = n(308588),
    r = n(509434),
    a = n(403581),
    s = n(104510),
    l = n(987144),
    o = n(75678),
    d = n(976860),
    c = n(44724),
    u = n(71393),
    _ = n(202541),
    E = n(92737),
    A = n(652215);
  function h(e) {
    let { buttonAction: t } = e;
    switch (t ?? i.d.UNSPECIFIED) {
      case i.d.OPEN_SOCIAL_LAYER_STOREFRONT:
        return { icon: r.I, iconPosition: "end" };
      case i.d.OPEN_GUILD_BOOST_CHECKOUT:
        return { icon: s._ };
      default:
        return { icon: a.t };
    }
  }
  function f(e) {
    let {
      buttonAction: t,
      deeplinkSection: n,
      applicationId: r,
      guildId: a,
      analyticsLocations: s = [],
      analyticsLocation: h,
      onClose: f,
    } = e;
    switch (t) {
      case i.d.OPEN_GUILD_BOOST_CHECKOUT:
        return () => {
          let e = null != a ? u.A.getGuild(a) : null;
          null != e &&
            (0, l.g)({ guild: e, analyticsLocations: s, analyticsLocation: h ?? {}, onClose: f });
        };
      case i.d.OPEN_SOCIAL_LAYER_STOREFRONT:
        return () => {
          (null != r && (0, c.default)({ applicationId: r }), f?.());
        };
      case i.d.OPEN_MARKETING_PAGE:
        return () => {
          let e =
            null != n && "" !== n
              ? `${A.BVt.APPLICATION_STORE}?${E.x}=${encodeURIComponent(n)}`
              : A.BVt.APPLICATION_STORE;
          ((0, d.pX)(e), f?.());
        };
      case i.d.OPEN_TIER_1_PAYMENT_MODAL:
        return () =>
          (0, o.A)({
            subscriptionTier: _.pe.TIER_1,
            analyticsLocations: s,
            analyticsObject: {
              ...h,
              object: A.ZSU.BUTTON_CTA,
              objectType: A.AnalyticsObjectTypes.TIER_1,
            },
            onClose: (e) => {
              e && f?.();
            },
          });
      case i.d.OPEN_PLAN_SELECTION_MODAL:
        return () => (0, o.A)({ analyticsLocations: s });
      case i.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
        return () =>
          (0, o.A)({
            subscriptionTier: _.pe.TIER_2,
            initialPlanId: _.gD.PREMIUM_GROUP_MONTH,
            analyticsLocations: s,
            analyticsObject: {
              ...h,
              object: A.ZSU.BUTTON_CTA,
              objectType: A.AnalyticsObjectTypes.TIER_2,
            },
            onClose: (e) => {
              e && f?.();
            },
          });
      case i.d.OPEN_TIER_2_PAYMENT_MODAL:
      case i.d.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
      default:
        return () =>
          (0, o.A)({
            subscriptionTier: _.pe.TIER_2,
            analyticsLocations: s,
            analyticsObject: {
              ...h,
              object: A.ZSU.BUTTON_CTA,
              objectType: A.AnalyticsObjectTypes.TIER_2,
            },
            onClose: (e) => {
              e && f?.();
            },
          });
    }
  }
}
