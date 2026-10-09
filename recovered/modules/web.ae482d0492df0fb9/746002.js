/* Recovered shipped factory. Module 746002.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3872866..3873450
 * Raw property SHA-256: c2650ba7111315ebf74954445d43f686640ebd02e80e2c704f35423b044a6810
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t),
    n.d(t, {
      BASE_URL_BY_RELEASE_CHANNEL: () => s,
      CollectiblesItemAssetFormat: () => a,
      getCollectiblesItemAssetUrl: () => l,
      parseSkuIdFromServerData: () => r.V,
    }));
  var i,
    r = n(628856),
    a = (((i = {}).ANIMATED = "animated"), (i.STATIC = "static"), (i.VIDEO = "video"), i);
  let s =
    "production" === window.GLOBAL_ENV.PROJECT_ENV
      ? "https://cdn.discordapp.com"
      : "staging" === window.GLOBAL_ENV.PROJECT_ENV
        ? "https://staging-cdn.discord.co"
        : "http://localhost:3000/_storage";
  function l(e) {
    let { skuId: t, assetFormat: n, assetId: i } = e;
    return null == t ? null : `${s}/media/v1/collectibles-shop/${t}/${i ? `${i}/` : ""}${n}`;
  }
}
