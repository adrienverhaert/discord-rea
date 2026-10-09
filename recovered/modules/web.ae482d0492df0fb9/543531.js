/* Recovered shipped factory. Module 543531.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9457676..9458034
 * Raw property SHA-256: f4e3448afee9655e9289346fd717a1eeb16c63112015aaaf3ab2327e9395a450
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Xt: () => s, wR: () => r, zK: () => a });
  var i = n(73153);
  function r(e, t, n) {
    i.h.dispatch({ type: "ANALYTICS_FEED_ITEM_SEEN", id: e, feedItemId: t, timestampMillis: n });
  }
  function a(e, t, n) {
    i.h.dispatch({ type: "ANALYTICS_FEED_ITEM_UNSEEN", id: e, feedItemId: t, timestampMillis: n });
  }
  function s(e, t) {
    i.h.dispatch({ type: "ANALYTICS_FEED_FLUSH", id: e, force: t });
  }
}
