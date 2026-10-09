/* Recovered shipped factory. Module 997997.
 * Source: recovered/web/assets/87ae5c990642b23f.js
 * UTF-16 property offsets: 95..393
 * Raw property SHA-256: b692ebfc6e920cd2c0f06654003f7561d5c8a5606b069425ac09156bdb0fcc7c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (l, e, n) {
  n.d(e, { C: () => t, K: () => u });
  var s,
    r = n(174459),
    a = n(652215),
    t =
      (((s = {}).STORE_MODAL = "store_modal"),
      (s.DETAILS_MODAL = "details_modal"),
      (s.STORE_EMBED = "store_embed"),
      (s.SKU_EMBED = "sku_embed"),
      s);
  function u(l, e, n) {
    r.default.track(a.HAw.STOREFRONT_COPY_LINK_CLICKED, { application_id: l, area: e, sku_id: n });
  }
}
