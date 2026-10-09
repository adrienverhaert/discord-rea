/* Recovered shipped factory. Module 801146.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7410657..7411063
 * Raw property SHA-256: f49cd3536b867a93c059a9f1a922f2b7368ce41baad5f41a10f8bdc79b1cf936
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(811315),
    r = n.n(i),
    a = n(17928),
    s = n(73153);
  let l = null;
  function o(e) {
    let { searchContext: t } = e;
    if (r()(l, t)) return !1;
    l = t;
  }
  class d extends a.Ay.Store {
    static displayName = "SelectedSearchContextStore";
    getSelectedSearchContext() {
      return l;
    }
  }
  let c = new d(s.h, {
    SEARCH_AUTOCOMPLETE_INITIALIZE: o,
    SEARCH_AUTOCOMPLETE_QUERY_UPDATE: o,
    SEARCH_QUERY_TEXT_CLEAR: function () {
      l = null;
    },
  });
}
