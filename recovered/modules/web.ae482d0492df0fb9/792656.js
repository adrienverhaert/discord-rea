/* Recovered shipped factory. Module 792656.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6857882..6858400
 * Raw property SHA-256: c66566a1de335793918da37837db28bd6a6b61c30032098bf3cc3de96ee04854
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(477900),
    r = n(465794),
    a = n(204413);
  function s(e) {
    let {
        subscriptionTier: t,
        hasActivePromotion: n,
        useShorterCTA: s,
        isPersistentCTA: l,
        buttonTextOverride: o,
        defaultTextOverride: d,
        iconOverride: c,
        variantOverride: u,
        ..._
      } = e,
      { subscribeButtonProps: E, subscriptionTier: A } = (0, a.$)({
        subscriptionTier: t,
        hasActivePromotion: n,
        useShorterCTA: s,
        isPersistentCTA: l,
        buttonTextOverride: o,
        defaultTextOverride: d,
        iconOverride: c,
        variantOverride: u,
      });
    return (0, i.jsx)(r.A, { ..._, ...E, subscriptionTier: A });
  }
}
