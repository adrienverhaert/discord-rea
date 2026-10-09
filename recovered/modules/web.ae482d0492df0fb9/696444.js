/* Recovered shipped factory. Module 696444.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3859593..3860014
 * Raw property SHA-256: 81a3967c0ab16359dfb25a6caa6816ec29a85a9ef16f4a55adea0782e4db3856
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(384726);
  class r {
    prices;
    type;
    premiumType;
    name;
    skuId;
    summary;
    constructor(e) {
      ((this.prices = e.prices),
        (this.type = e.type),
        (this.premiumType = e.premiumType),
        (this.name = e.name),
        (this.skuId = e.skuId),
        (this.summary = e.summary));
    }
    static fromServer(e) {
      let { prices: t, type: n, premium_type: a, name: s, sku_id: l, summary: o } = e;
      return new r({ prices: (0, i.A)(t), type: n, premiumType: a, name: s, skuId: l, summary: o });
    }
  }
}
