/* Recovered shipped factory. Module 872472.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8717910..8719230
 * Raw property SHA-256: cacd08938b1e92b042485825846b6ccf0195dbae49e22f315479cfb606fc8c67
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => E }), n(321073));
  var i = n(575593),
    r = n(898461),
    a = n(474012),
    s = n(837015),
    l = n(203632),
    o = n(892118),
    d = n(32731),
    c = n(520606),
    u = n(652215);
  function _(e) {
    switch (e.type) {
      case i.R.AVATAR_DECORATION:
        return r.A.fromServer(e);
      case i.R.PROFILE_EFFECT:
        return l.Ay.fromServer(e);
      case i.R.NAMEPLATE:
        return s.A.fromServer(e);
      case i.R.PROFILE_FRAME:
        return o.A.fromServer(e);
      default:
        return null;
    }
  }
  class E extends c.A {
    collectiblesItem;
    bundleItems;
    constructor(e) {
      if ((super(e), (this.skuProductLine = u.EZt.COLLECTIBLES), null != e.bundle_items)) {
        const t = [];
        for (const n of e.bundle_items) {
          const e = _(n);
          null != e && t.push(e);
        }
        if (0 === t.length) throw Error("Bundle has no valid items");
        this.bundleItems = t;
      } else if (null != e.collectibles_item) {
        const t = _(e.collectibles_item);
        if (null == t) throw Error("Collectibles item not found");
        this.collectiblesItem = t;
      } else if (!e.skipValidation)
        throw Error("Collectibles wishlist item missing both collectibles_item and bundle_items");
    }
    static fromServer(e) {
      return new E({ ...e, sku: null != e.sku ? d.A.createFromServer(e.sku) : void 0 });
    }
    static fromSKU(e) {
      let t = (0, a.T7)(e);
      if (null == t) return null;
      let n = new E({
        sku_id: e.id,
        sku_product_line: u.EZt.COLLECTIBLES,
        sku_name: e.name,
        sku: e,
        skipValidation: !0,
      });
      return (
        (n.collectiblesItem = "single" === t.type ? t.item : void 0),
        (n.bundleItems = "bundle" === t.type ? t.items : void 0),
        n
      );
    }
  }
}
