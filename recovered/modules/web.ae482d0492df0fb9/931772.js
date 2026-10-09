/* Recovered shipped factory. Module 931772.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3869065..3869678
 * Raw property SHA-256: 6127224fbf3e300e2265b5cc7cdb5e22138ff538e9f496feb2cef4b731f39c09
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(440745),
    r = n.n(i),
    a = n(317097),
    s = n(315069);
  class l extends s.A {
    storeListingId;
    skuId;
    name;
    summary;
    styles;
    constructor(e) {
      (super(),
        (this.storeListingId = e.storeListingId),
        (this.skuId = e.skuId),
        (this.name = e.name),
        (this.summary = e.summary?.trim()),
        (this.styles = e.styles));
    }
    static fromServer(e) {
      let { store_listing_id: t, sku_id: n, styles: i, ...s } = e;
      return new l({
        ...s,
        storeListingId: t,
        skuId: n,
        styles:
          null == i
            ? i
            : {
                backgroundColors: i.background_colors.map((e) => r()((0, a.Hl)(e))),
                buttonColors: i.button_colors.map((e) => r()((0, a.Hl)(e))),
                confettiColors: i.confetti_colors.map((e) => r()((0, a.Hl)(e))),
              },
      });
    }
  }
}
