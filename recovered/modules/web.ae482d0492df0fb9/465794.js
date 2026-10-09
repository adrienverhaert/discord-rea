/* Recovered shipped factory. Module 465794.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6858401..6859158
 * Raw property SHA-256: be1e643f5a355dc3823a78a3d304de2b0c399e9269ae7553da611c22062932dc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(477900),
    r = n(821609),
    a = n(783420),
    s = n(938973);
  let l = function (e) {
    let {
        subscriptionTier: t,
        onClick: n,
        postSuccessGuild: l,
        onSubscribeModalClose: o,
        premiumModalAnalyticsLocation: d,
        applicationId: c,
        confirmationFooter: u,
        buttonTextOverride: _,
        defaultTextOverride: E,
        iconOverride: A,
        variantOverride: h,
        disabled: f,
        ...I
      } = e,
      { subscribeButtonProps: p } = (0, s.B)({
        subscriptionTier: t,
        buttonTextOverride: _,
        defaultTextOverride: E,
        iconOverride: A,
        variantOverride: h,
      });
    return (0, i.jsx)(a.A, {
      onClick: n,
      subscriptionTier: t,
      postSuccessGuild: l,
      onSubscribeModalClose: o,
      premiumModalAnalyticsLocation: d,
      applicationId: c,
      confirmationFooter: u,
      children: (e) => {
        let { onClick: t } = e;
        return (0, i.jsx)(r.$, { onClick: t, ...p, ...I, disabled: !0 === p.disabled || !0 === f });
      },
    });
  };
}
