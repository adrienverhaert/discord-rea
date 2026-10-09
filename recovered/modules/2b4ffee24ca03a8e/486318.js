/* Recovered shipped factory. Module 486318.
 * Source: recovered/web/assets/2b4ffee24ca03a8e.js
 * UTF-16 property offsets: 95..689
 * Raw property SHA-256: 752a2562f604c187a9b774efb204b92d466c86976372ce9b7b15f4786c672075
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (a, r, e) {
  e.d(r, { N: () => c, e: () => p });
  var n = e(116833),
    t = e(871123);
  function p(a) {
    let {
      imageUrl: r,
      backgroundImageUrl: e,
      altText: t,
      overlayImageUrl: p,
      customClassNames: c,
      rewardGraphic: i,
    } = a;
    return {
      type: "dynamic",
      component: n.DynamicGraphicComponent.SOCIAL_LAYER_SKU_PREVIEW,
      aspectRatio: null != i ? "16/9" : "6/4",
      props: {
        imageUrl: r,
        backgroundImageUrl: e,
        altText: t,
        overlayImageUrl: p,
        customClassNames: c,
        rewardGraphic: i,
      },
    };
  }
  function c(a) {
    let { reward: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return p({
      imageUrl: (0, t.fq)(a),
      backgroundImageUrl: (0, t.xf)(a),
      altText: a.name,
      rewardGraphic: r?.graphic,
    });
  }
}
