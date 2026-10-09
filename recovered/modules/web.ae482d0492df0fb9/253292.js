/* Recovered shipped factory. Module 253292.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3836285..3837111
 * Raw property SHA-256: 3c0459f3b1519a96830fc06c82dda66ebf62973821523b49179219523faeb1c0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { K: () => d });
  var i = n(582128),
    r = n(17928),
    a = n(775602),
    s = n(723702),
    l = n(746002),
    o = n(901139);
  function d(e) {
    let { getImgCache: t } = (0, o.TW)(),
      n = (0, r.bG)([a.Ay], () => a.Ay.useReducedMotion);
    return i.useMemo(() => {
      if (null != e.previewToolKey && "" !== e.previewToolKey) {
        let n = t(e.previewToolKey);
        return { staticImageUrl: n?.staticUrl, animatedImageUrl: n?.animatedUrl };
      }
      let i = (platform.name ?? "unknown").toLowerCase(),
        r = n || (0, s.isLinux)() || "safari" === i;
      return {
        staticImageUrl: (0, l.getCollectiblesItemAssetUrl)({
          skuId: e.skuId,
          assetFormat: l.CollectiblesItemAssetFormat.STATIC,
        }),
        ...(r
          ? {
              animatedImageUrl: (0, l.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: l.CollectiblesItemAssetFormat.ANIMATED,
              }),
            }
          : {
              videoUrl: (0, l.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: l.CollectiblesItemAssetFormat.VIDEO,
              }),
            }),
      };
    }, [e, t, n]);
  }
}
