/* Recovered shipped factory. Module 601298.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6941131..6941691
 * Raw property SHA-256: bda463208327a5718940c7dc13b0eed9e639a320b5a41393af6bbece831f749f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { X: () => a });
  var i = n(403362),
    r = n(469054);
  function a(e) {
    let {
      assetOrigin: t = r.E.NEW_ASSET,
      imageUri: n,
      staticImageUri: a,
      description: s,
      originalAsset: l,
      originalMd5: o,
    } = e;
    switch (t) {
      case r.E.NEW_ASSET:
        return {
          assetOrigin: t,
          imageUri: n,
          staticImageUri: a,
          description: s,
          originalAsset: void 0,
          originalMd5: o,
        };
      case r.E.EDITED_ARCHIVED_ASSET:
        return {
          assetOrigin: t,
          imageUri: n,
          staticImageUri: a,
          description: s,
          originalAsset: l,
          originalMd5: o,
        };
      case r.E.ARCHIVED_ASSET:
        return { assetOrigin: t, imageUri: n, description: void 0, originalAsset: l };
      default:
        (0, i.xb)(t);
    }
  }
}
