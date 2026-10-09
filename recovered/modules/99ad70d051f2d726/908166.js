/* Recovered shipped factory. Module 908166.
 * Source: recovered/web/assets/99ad70d051f2d726.js
 * UTF-16 property offsets: 95..623
 * Raw property SHA-256: a32141e7335a146cf593bcd3cb36fbba8726fe6c490d791994cd695c92cb865a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (a, e, t) {
  t.d(e, { x: () => r });
  var l = t(582128),
    n = t(655857),
    s = t(642639);
  function r() {
    let { displayCurrency: a } = (0, n.Jn)(),
      {
        selectedSkuId: e,
        skuIds: t,
        isGift: r,
        getOrCreateSetupIntent: h,
      } = (0, s.t4)((a) => ({
        selectedSkuId: a.selectedSkuId,
        skuIds: a.skuIds,
        isGift: a.isGift,
        getOrCreateSetupIntent: a.getOrCreateSetupIntent,
      })),
      i = e ?? (1 === t.length ? t[0] : void 0),
      c = l.useMemo(() => ({ currency: a, sku_id: i, is_gift: r }), [a, i, r]);
    return {
      createSetupIntent: l.useCallback(() => h(c, { forceRecreate: !0 }), [h, c]),
      createSetupIntentDeduped: l.useCallback(() => h(c), [h, c]),
    };
  }
}
