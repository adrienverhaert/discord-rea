/* Recovered shipped factory. Module 38181.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4962476..4962859
 * Raw property SHA-256: 7abd4b529dfb6ad01073805a0a489d136645199065dd99fc94c15e8d246088bb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153);
  let a = [],
    s = null;
  class l extends i.Ay.Store {
    static displayName = "ApplicationDirectoryCategoriesStore";
    getLastFetchTimeMs() {
      return s;
    }
    getCategories() {
      return a;
    }
    getCategory(e) {
      return a.find((t) => t.id === e);
    }
  }
  let o = new l(r.h, {
    APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function (e) {
      let { categories: t } = e;
      ((a = t), (s = Date.now()));
    },
  });
}
