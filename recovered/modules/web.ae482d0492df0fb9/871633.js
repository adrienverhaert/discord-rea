/* Recovered shipped factory. Module 871633.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7242988..7243884
 * Raw property SHA-256: 43da3808e3612a48f50820f3d53129ebaa545fe0dc4cf1b7530aa76571a0fbfa
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { Zb: () => c, MT: () => s, CO: () => l, n1: () => o, bB: () => d, hD: () => a }),
    n(435558),
    n(975807),
    n(738533),
    n(723702));
  var i = n(227309),
    r = n(652215);
  function a(e) {
    return e.distributor === r.d3x.ROBLOX && null != e.sku
      ? `${e.sku}:${e.gameMetadata?.[i.IO.PLACE_ID] ?? ""}`
      : null;
  }
  function s(e) {
    return e.distributor === r.d3x.ROBLOX &&
      null != e.gameMetadata &&
      null != e.gameMetadata[i.IO.PLACE_ID]
      ? JSON.stringify({ placeId: e.gameMetadata[i.IO.PLACE_ID] })
      : null;
  }
  function l(e) {
    return e.distributor !== r.d3x.ROBLOX ||
      null == e.gameMetadata ||
      null == e.gameMetadata[i.IO.ROBLOX_TIME_STARTED] ||
      e.id === i.a7 ||
      null == e.gameName
      ? {}
      : { name: e.gameName, sync_id: e.gameMetadata[i.IO.ROBLOX_TIME_STARTED] };
  }
  function o(e) {
    return e.distributor === r.d3x.ROBLOX && e.id !== i.a7;
  }
  function d(e) {
    return e.thirdPartySkus.some((e) => e.distributor === r.d3x.ROBLOX);
  }
  function c(e) {
    return e.id !== i.aX && e.thirdPartySkus.some((e) => e.distributor === r.d3x.ROBLOX);
  }
}
