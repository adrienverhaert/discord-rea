/* Recovered shipped factory. Module 766172.
 * Source: recovered/web/assets/782d5882697dd8f9.js
 * UTF-16 property offsets: 23005..23191
 * Raw property SHA-256: 4f3a18824f0eb7326e816809af7ac9d85d4868cfe7ed9039f8c1b1a9bbad2af9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { Y: () => i });
  var r = n(575593);
  function i(e) {
    let { product: t, selectedVariantIndex: n } = e;
    return t.type === r.R.VARIANTS_GROUP && null != n
      ? (t.variants?.[n]?.skuId ?? t.skuId)
      : t.skuId;
  }
}
