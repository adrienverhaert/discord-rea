/* Recovered shipped factory. Module 721932.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8719692..8720144
 * Raw property SHA-256: a1fb9e76a4d77e14864a0b6d74470c557690b58fbdd46e5ee8f38855aa737a70
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $: () => a, A: () => s });
  var i = n(32731),
    r = n(520606);
  function a(e) {
    return e instanceof s;
  }
  class s extends r.A {
    sku;
    constructor(e) {
      (super(e), (this.skuProductLine = e.sku.productLine), (this.sku = e.sku));
    }
    static fromServer(e) {
      let t = i.A.createFromServer(e.sku);
      if (null == t) throw Error("SKU not found");
      return new s({ ...e, sku: t });
    }
    static fromSKU(e) {
      return null == e
        ? null
        : new s({ sku_id: e.id, sku_product_line: e.productLine, sku_name: e.name, sku: e });
    }
  }
}
