/* Recovered shipped factory. Module 310507.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3135116..3135538
 * Raw property SHA-256: 6ed171cc8df500a14aa883a1420dba49e2cf02a0ee6759bb9bd9d593c23c8dd5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(315069);
  class r extends i.A {
    id;
    interval;
    intervalCount;
    skuId;
    static createFromServer(e) {
      return new r({
        id: e.id,
        interval: e.interval,
        intervalCount: e.interval_count,
        skuId: e.sku_id,
      });
    }
    constructor(e) {
      (super(),
        (this.id = e.id),
        (this.interval = e.interval),
        (this.intervalCount = e.intervalCount),
        (this.skuId = e.skuId));
    }
    get isMultiInterval() {
      return null != this.intervalCount && this.intervalCount > 1;
    }
  }
}
