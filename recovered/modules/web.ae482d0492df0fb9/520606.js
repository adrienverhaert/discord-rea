/* Recovered shipped factory. Module 520606.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8717313..8717909
 * Raw property SHA-256: 7cd7e45f61f6444742bebf4b0f1a04a69dcca5e0a0013af5a5d8f14511c2c81b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(315069),
    r = n(32731);
  class a extends i.A {
    skuId;
    skuProductLine;
    skuName;
    isOwned;
    gifterUserId;
    sku;
    addedAt;
    constructor(e) {
      (super(),
        (this.skuId = e.sku_id),
        (this.skuProductLine = e.sku_product_line),
        (this.skuName = e.sku_name),
        (this.isOwned = e.is_owned),
        (this.gifterUserId = e.gifter_user_id),
        (this.sku = e.sku),
        (this.addedAt = e.added_at));
    }
    static fromServer(e) {
      let {
        sku_id: t,
        sku_product_line: n,
        sku_name: i,
        is_owned: s,
        gifter_user_id: l,
        sku: o,
        ...d
      } = e;
      return new a({
        ...d,
        sku_id: t,
        sku_product_line: n,
        sku_name: i,
        is_owned: s,
        gifter_user_id: l,
        sku: null != o ? r.A.createFromServer(o) : void 0,
      });
    }
  }
}
