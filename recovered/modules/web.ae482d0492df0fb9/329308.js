/* Recovered shipped factory. Module 329308.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3065595..3066997
 * Raw property SHA-256: a6e5649a382a1ac95667ce479e53b9f4d3d9d8beb300d1583d8470037a80b383
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { SV: () => c, t1: () => d });
  var i,
    r = n(315069),
    a = n(718446),
    s = n(652215),
    l = n(190107),
    o = n(355097),
    d =
      (((i = d || {}).SHOP = "SHOP"),
      (i.SHOP_ORBS_TAB = "SHOP_ORBS_TAB"),
      (i.NITRO_HOME = "NITRO_HOME"),
      (i.QUEST_HOME = "QUEST_HOME"),
      (i.QUEST_ORBS = "QUEST_ORBS"),
      (i.APPS_HOME = "APPS_HOME"),
      (i.SETTINGS = "SETTINGS"),
      (i.PLAYGROUND = "PLAYGROUND"),
      i);
  class c extends r.A {
    id;
    path;
    type;
    label;
    collectionId;
    IconComponent;
    static fromType(e, t, n, i, r) {
      switch (e) {
        case "SHOP":
          return new c({ path: s.BVt.COLLECTIBLES_SHOP, type: "SHOP" });
        case "NITRO_HOME":
          return new c({ path: s.BVt.NITRO_HOME, type: "NITRO_HOME" });
        case "QUEST_HOME":
          return new c({ path: s.BVt.QUEST_HOME, type: "QUEST_HOME" });
        case "APPS_HOME":
          return new c({ path: s.BVt.GLOBAL_DISCOVERY_APPS, type: "APPS_HOME" });
        case "SETTINGS":
          return new c({
            path: t ?? (0, a.settingsPathToRoute)(o.od.ACCOUNT),
            label: n,
            type: "SETTINGS",
          });
        case "PLAYGROUND":
          return new c({
            path: t ?? s.BVt.APP,
            type: "PLAYGROUND",
            label: n,
            collectionId: i,
            IconComponent: r,
          });
        case "SHOP_ORBS_TAB":
          return new c({ path: s.BVt.COLLECTIBLES_SHOP, type: "SHOP_ORBS_TAB" });
        case "QUEST_ORBS":
          return new c({
            path: `${s.BVt.QUEST_HOME}?filter=${l.BQ.VIRTUAL_CURRENCY}`,
            type: "QUEST_ORBS",
          });
        default:
          throw Error("Unhandled InAppNavigationType");
      }
    }
    constructor(e) {
      (super(),
        (this.id = null != e.collectionId ? `${e.type}_${e.collectionId}` : e.type),
        (this.path = e.path),
        (this.type = e.type),
        (this.label = e.label),
        (this.collectionId = e.collectionId),
        (this.IconComponent = e.IconComponent));
    }
  }
}
