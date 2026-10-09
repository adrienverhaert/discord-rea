/* Recovered shipped factory. Module 533129.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4950546..4950959
 * Raw property SHA-256: 28d60ded7a664f1672e03a94070b13341d423001ad918851c36a07aacbcb2514
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { WL: () => l, np: () => s, tx: () => a });
  var i = n(174459),
    r = n(652215);
  function a(e) {
    let { selectedTab: t } = e;
    i.default.track(r.HAw.GLOBAL_DISCOVERY_VIEWED, { selected_tab: t });
  }
  function s(e) {
    let { selectedCategoryId: t } = e;
    i.default.track(r.HAw.GLOBAL_DISCOVERY_SERVERS_VIEWED, { selected_category_id: t });
  }
  function l(e) {
    let { source: t } = e;
    i.default.track(r.HAw.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, { source: t });
  }
}
