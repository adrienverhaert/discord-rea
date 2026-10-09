/* Recovered shipped factory. Module 100057.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3873451..3874065
 * Raw property SHA-256: 1d6aab6d85e757aac0d4e402f6640d21033a328600d0cfdf2ba312aa088a9b58
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { t: () => s, z: () => l });
  var i,
    r = n(174459),
    a = n(652215),
    s =
      (((i = {}).SHOP_MOUNTED = "shop_mounted"),
      (i.CATEGORIES_FETCH_STARTED = "categories_fetch_started"),
      (i.CATEGORIES_FETCH_COMPLETED = "categories_fetch_completed"),
      (i.SHOP_HOME_FETCH_STARTED = "shop_home_fetch_started"),
      (i.SHOP_HOME_FETCH_COMPLETED = "shop_home_fetch_completed"),
      (i.SHOP_RENDERED = "shop_rendered"),
      i);
  function l(e) {
    let {
      sessionId: t,
      checkpoint: n,
      tab: i,
      unpublishedCategoriesShown: s,
      cacheDisabled: l,
    } = e;
    r.default.track(a.HAw.COLLECTIBLES_SHOP_PERF_TRACKED, {
      page_session_id: t,
      checkpoint: n,
      tab: i,
      unpublished_categories_shown: s,
      cache_disabled: l,
    });
  }
}
