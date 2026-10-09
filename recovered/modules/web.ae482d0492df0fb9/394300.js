/* Recovered shipped factory. Module 394300.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8719231..8719691
 * Raw property SHA-256: 99cec3bb3c523ae6be929f088d48a3a26a3309a835d4090f9a8b48673ef1e2ae
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l, P: () => s });
  var i = n(32731),
    r = n(520606),
    a = n(652215);
  function s(e) {
    return e instanceof l;
  }
  class l extends r.A {
    sku;
    constructor(e) {
      (super(e), (this.skuProductLine = a.EZt.PREMIUM), (this.sku = e.sku));
    }
    static fromServer(e) {
      let t = i.A.createFromServer(e.sku);
      if (null == t) throw Error("SKU not found");
      return new l({ ...e, sku: t });
    }
    static fromSKU(e) {
      return null == e
        ? null
        : new l({ sku_id: e.id, sku_product_line: a.EZt.PREMIUM, sku_name: e.name, sku: e });
    }
  }
}
