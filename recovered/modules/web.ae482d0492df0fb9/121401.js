/* Recovered shipped factory. Module 121401.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3003187..3003377
 * Raw property SHA-256: f3040fa697a7f7a4a8871da385ece0dfed755476d7ebaac014fae9d05aa5f944
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e, t) {
    return `${e}:${t}`;
  }
  function r(e) {
    let t = e.split(":");
    if (2 !== t.length) return null;
    let [n, i] = t;
    return { applicationId: n, skuId: i };
  }
  n.d(t, { L: () => i, u: () => r });
}
