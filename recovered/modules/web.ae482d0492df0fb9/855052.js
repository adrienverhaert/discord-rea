/* Recovered shipped factory. Module 855052.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8720661..8721544
 * Raw property SHA-256: 593dd70357f0c6d65bc8a079fa8744e1b58bee6e302f12b867266ab0c8694557
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => c, C3: () => _, Lh: () => u, y9: () => E });
  var i = n(315069),
    r = n(395671),
    a = n(520606),
    s = n(872472),
    l = n(394300),
    o = n(721932),
    d = n(652215);
  class c extends i.A {
    id;
    userId;
    items;
    applications;
    constructor(e) {
      (super(),
        (this.id = e.id),
        (this.userId = e.userId),
        (this.items = e.items),
        (this.applications = e.applications ?? void 0));
    }
    static fromServer(e) {
      let { user_id: t, wishlist_items: n, ...i } = e,
        u = n.map((e) => {
          switch (e.sku_product_line) {
            case d.EZt.COLLECTIBLES:
              return s.A.fromServer(e);
            case d.EZt.SOCIAL_LAYER_GAME_ITEM:
              return o.A.fromServer(e);
            case d.EZt.PREMIUM:
              return l.A.fromServer(e);
            default:
              return a.A.fromServer(e);
          }
        });
      return new c({
        ...i,
        userId: t,
        items: u,
        applications: i.applications?.map((e) => r.Ay.createFromServer(e)) ?? void 0,
      });
    }
  }
  function u(e) {
    return e.items.map((e) => e.skuId);
  }
  function _(e, t) {
    return e.items.some((e) => e.skuId === t);
  }
  function E(e) {
    return new Set(e.items.map((e) => e.skuProductLine));
  }
}
