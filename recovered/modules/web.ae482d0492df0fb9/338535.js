/* Recovered shipped factory. Module 338535.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3859391..3859592
 * Raw property SHA-256: 00fdb71a16b11cee36894d2717b501f7e100e7a4269f035f63a1d3ec84b46472
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(315069);
  class r extends i.A {
    skuId;
    constructor(e) {
      (super(), (this.skuId = e.skuId));
    }
    static fromServer(e) {
      let { sku_id: t, ...n } = e;
      return new r({ ...n, skuId: t });
    }
  }
}
