/* Recovered shipped factory. Module 379031.
 * Source: recovered/web/assets/a16e6ef86d7f513b.js
 * UTF-16 property offsets: 21560..21722
 * Raw property SHA-256: 038f5dc6891b807f0d4e27e4630422dc2a3e758cee1fcde0ede7e2846d66686c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { g: () => o });
  var l = n(288106);
  let r = new Set(["gift_customization", "sku_gift_badge"]);
  function o(e) {
    return r.has(e) ? l.QK.GIFT : l.QK.SELF_PURCHASE;
  }
}
