/* Recovered shipped factory. Module 113265.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3885094..3885855
 * Raw property SHA-256: 76451d3a7e483a09798094213dd29b0529485e44fb9c15981bc415dadb497696
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { z: () => o });
  var i = n(582128),
    r = n(575593),
    a = n(466459),
    s = n(116833),
    l = n(152472);
  function o(e) {
    let { userId: t, product: n, selectedVariantIndex: o, location: d, onError: c } = e,
      u = i.useMemo(
        () =>
          n.type === r.R.VARIANTS_GROUP && null != o && n.variants?.[o] != null ? n.variants[o] : n,
        [n, o],
      ),
      _ = u.skuId,
      E = (0, l.c)({
        userId: t,
        skuId: _,
        nuxGraphic: (function (e) {
          let { product: t } = e,
            n = "6/4";
          switch (t.type) {
            case r.R.NAMEPLATE:
            case r.R.AVATAR_DECORATION:
              n = "16/9";
              break;
            case r.R.BUNDLE:
            case r.R.PROFILE_EFFECT:
            default:
              n = "6/4";
          }
          return {
            type: "dynamic",
            component: s.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
            aspectRatio: n,
            props: { product: t, forCollectedModal: !0 },
          };
        })({ product: u }),
        location: d,
        onError: c,
      }),
      { isPurchased: A } = (0, a.h)(u);
    return { ...E, specificProductOrVariant: u, isPurchased: A };
  }
}
