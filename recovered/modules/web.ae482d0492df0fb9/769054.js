/* Recovered shipped factory. Module 769054.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4439083..4439312
 * Raw property SHA-256: 8cb9a17d6b168a325e9c21e19ec52218e1f17a58e96d6b93a97206bdf0ee307f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { h: () => s });
  var i = n(618468),
    r = n(102609);
  let a = { id: -1, label: "Not Eligible", shortLabel: "Not Eligible", type: i.FZ.OVERRIDE };
  function s(e) {
    return e.system !== r.l5.APEX ? e.variants : [a].concat(e.variants);
  }
}
