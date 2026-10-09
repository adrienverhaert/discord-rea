/* Recovered shipped factory. Module 331887.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5537463..5537923
 * Raw property SHA-256: 590d738d548b31077db9b00c5704cb26a6f7f3f00fb14e91f8b3e7751370135e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  n.d(t, { A: () => o });
  var r = n(17928),
    a = n(73153);
  let s = !1;
  class l extends r.Ay.Store {
    static displayName = "DataHarvestStore";
    get harvestType() {
      return i;
    }
    get requestingHarvest() {
      return s;
    }
  }
  let o = new l(a.h, {
    CONNECTION_OPEN: function () {
      i = void 0;
    },
    UPDATE_DATA_HARVEST_TYPE: function (e) {
      let { harvestType: t } = e;
      ((s = !1), (i = t));
    },
    LOAD_DATA_HARVEST_TYPE_START: function () {
      s = !0;
    },
    LOAD_DATA_HARVEST_TYPE_FAILURE: function () {
      s = !1;
    },
    LOGOUT: function () {
      ((s = !1), (i = null));
    },
  });
}
