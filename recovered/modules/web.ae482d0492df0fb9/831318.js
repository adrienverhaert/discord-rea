/* Recovered shipped factory. Module 831318.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6926526..6927710
 * Raw property SHA-256: 1bdc521ec5cd4565eeef964a69e8c5b5269db7f6061de510411f803118e466df
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(477900);
  n(582128);
  var r = n(403581),
    a = n(772707),
    s = n(158045),
    l = n(724651),
    o = n(732280),
    d = n(783420),
    c = n(511484),
    u = n(202541),
    _ = n(660183);
  let E = function (e) {
    let {
        transitionState: t,
        title: n,
        subtitle: E,
        graphic: A,
        guildBoostProps: h,
        onClose: f,
        onSecondaryClick: I,
        secondaryCTA: p,
        gradientColor: T = "nitro-pink",
        badgeType: m = null,
        subscriptionTier: g = u.pe.TIER_2,
        hidePremiumOfferUpsell: S,
        children: N,
      } = e,
      C = (0, o.V)(),
      O = (0, l.O)(),
      R = !S && (C?.subscriptionTrial?.skuId === g || (0, c.U9)(O, g)) && null == h,
      L = _.intl.string(_.t.pj0XBN);
    R &&
      (null != C
        ? (L = (0, s.FY)({
            intervalType: C?.subscriptionTrial?.interval,
            intervalCount: C?.subscriptionTrial?.intervalCount,
          }))
        : null != O &&
          (L = _.intl.formatToPlainString(_.t.bkQ4bH, { percent: O.discount.amount })));
    let y = "beta" === m ? "beta" : null != C ? "free_trial" : m;
    return (0, i.jsx)(d.A, {
      subscriptionTier: g,
      children: (e) => {
        let { onClick: s } = e;
        return (0, i.jsx)(a.k, {
          title: n,
          subtitle: E,
          graphic: A,
          gradientColor: T,
          transitionState: t,
          onClose: async () => await f(),
          actions: [
            { text: p, variant: "secondary", size: "md", onClick: I },
            {
              text: L,
              variant: "expressive",
              size: "md",
              onClick: async (e) => {
                (await f(), s(e));
              },
              icon: r.t,
            },
          ],
          ...(null !== y && { badge: { type: y, variant: "expressive" } }),
          children: N,
        });
      },
    });
  };
}
