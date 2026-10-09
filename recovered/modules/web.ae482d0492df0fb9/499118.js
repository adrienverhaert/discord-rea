/* Recovered shipped factory. Module 499118.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4978700..4979172
 * Raw property SHA-256: 0955ff7bb2772d1a4b4859c04c0b462b20d25aca7364e8be9fa2e828155fca45
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(17928),
    r = n(73153),
    a = n(823448),
    s = n(351022);
  let l = [];
  function o() {
    l = [];
  }
  class d extends i.Ay.Store {
    static displayName = "GlobalDiscoveryServersSearchLayoutStore";
    initialize() {
      this.waitFor(a.A, s.A);
    }
    getVisibleTabs() {
      return l;
    }
  }
  let c = new d(r.h, {
    CONNECTION_OPEN: o,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: o,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
      let { query: t } = e,
        n = a.A.getCounts(t);
      if (null == n) return !1;
      l = n;
    },
  });
}
