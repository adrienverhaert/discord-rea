/* Recovered shipped factory. Module 639735.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6703631..6704643
 * Raw property SHA-256: 141890680cc0491cada1880603f69206f837f6257e92ba8852eb98d2209faee2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(17928),
    r = n(73153);
  let a = { canPlayWowMoment: !1, isFetchingWowMomentMedia: !1, wowMomentWumpusMediaUrl: null };
  class s extends i.Ay.Store {
    static displayName = "PurchasedItemsFestivityStore";
    getState() {
      return a;
    }
    get canPlayWowMoment() {
      return a.canPlayWowMoment;
    }
    get isFetchingWowMomentMedia() {
      return a.isFetchingWowMomentMedia;
    }
    get wowMomentWumpusMedia() {
      return a.wowMomentWumpusMediaUrl;
    }
  }
  let l = new s(r.h, {
    LOGOUT: function () {
      a = { canPlayWowMoment: !1, isFetchingWowMomentMedia: !1, wowMomentWumpusMediaUrl: null };
    },
    PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function (e) {
      let { value: t } = e;
      a.canPlayWowMoment = t;
    },
    PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function () {
      a.isFetchingWowMomentMedia = !0;
    },
    PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function (e) {
      let { wumpusMedia: t } = e;
      ((a.wowMomentWumpusMediaUrl = t), (a.isFetchingWowMomentMedia = !1));
    },
    PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE: function () {
      ((a.isFetchingWowMomentMedia = !1), (a.canPlayWowMoment = !1));
    },
  });
}
