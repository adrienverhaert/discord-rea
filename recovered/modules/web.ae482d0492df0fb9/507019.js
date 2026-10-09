/* Recovered shipped factory. Module 507019.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6561903..6562287
 * Raw property SHA-256: ff9cc4ea8f831be435889125ddbb63d3cd0235ca62ead0472580dc52b187b28a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(157559),
    r = n(717398),
    a = n(660183);
  function s(e) {
    i.A.show({
      title: a.intl.string(a.t.z2pFjo),
      body: a.intl.formatToPlainString(a.t["0nTvEw"], { incomingRequestCount: e }),
      confirmText: a.intl.string(a.t["cY+Oob"]),
      confirmVariant: "critical-primary",
      cancelText: a.intl.string(a.t["ETE/oC"]),
      onConfirm: function () {
        r.A.clearPendingRelationships();
      },
    });
  }
}
