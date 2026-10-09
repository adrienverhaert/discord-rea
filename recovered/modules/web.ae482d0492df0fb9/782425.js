/* Recovered shipped factory. Module 782425.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10691001..10691238
 * Raw property SHA-256: 23dbadef95f56d36c1ed63c7e9d2cb160674f2edea06717e21ae5089cad99e87
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { EV: () => o, NM: () => a, ZE: () => l, gm: () => s });
  let i = {},
    r = null;
  function a(e) {
    let t = i[e] ?? 0;
    (0 === t && r?.(e, !0), (i[e] = t + 1));
  }
  function s(e) {
    (i[e]--, 0 === i[e] && r?.(e, !1));
  }
  function l(e) {
    return i[e] ?? 0;
  }
  function o(e) {
    r = e ?? null;
  }
}
