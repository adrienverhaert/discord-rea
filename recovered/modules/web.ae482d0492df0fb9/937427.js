/* Recovered shipped factory. Module 937427.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7698980..7699293
 * Raw property SHA-256: 0f84c25c8d64ccf6e47c979ef7ff8ab1e33bc2cd5c1b115497e5cc798a072112
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  n.d(t, { A: () => l });
  var r = n(17928),
    a = n(73153);
  class s extends r.Ay.Store {
    static displayName = "StorefrontPromotionOverrideStore";
    getPromotionIdOverride() {
      return i;
    }
  }
  let l = new s(a.h, {
    LOGOUT: function () {
      i = void 0;
    },
    STOREFRONT_PROMOTION_ID_OVERRIDE_SET: function (e) {
      i = e.promotionIdOverride;
    },
  });
}
