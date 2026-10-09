/* Recovered shipped factory. Module 697951.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6060103..6060407
 * Raw property SHA-256: c023e13e3a4ccd177dba1cfa52124875c9b67cdf213b760cba1fad6e37e1933e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(439372),
    r = n(741231),
    a = n(14509),
    s = n(276041),
    l = n(652215);
  class o extends i.A {
    async handleChannelCreate(e) {
      let { channel: t } = e;
      (0, a.TT)(t) && (await (0, a.ml)(s.$), (0, r.A)(l.BVt.CHANNEL(null, t.id)));
    }
    actions = { CHANNEL_CREATE: this.handleChannelCreate };
  }
  let d = new o();
}
