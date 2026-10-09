/* Recovered shipped factory. Module 682492.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6631901..6632166
 * Raw property SHA-256: 3b95e1d4869d2cf77ce57ebcb80270feda21885324ccd3da2b4aef232d514da6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e, t) {
    let [, , n, i] = e.split("/"),
      r = {};
    if (null != t && "" !== t) for (let [e, n] of new URLSearchParams(t)) r[e] = n;
    return { collection: n ?? null, story: i ?? null, controlOverrides: r };
  }
  (n.r(t), n.d(t, { parsePlaygroundUrl: () => i }), n(323874), n(14289), n(35956));
}
