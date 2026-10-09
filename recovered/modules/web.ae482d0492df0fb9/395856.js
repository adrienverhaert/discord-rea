/* Recovered shipped factory. Module 395856.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3827242..3827577
 * Raw property SHA-256: 660f349d77656a595c8996743da1c75baaa86a793893ec161d564085a9d2ebc1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $: () => l, k: () => s });
  var i = n(582128);
  let r = (0, n(945810).mj)({
      name: "2026-06-improved-shop-loading",
      kind: "user",
      defaultConfig: { enabled: !1 },
      variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    a = i.createContext(null),
    s = a.Provider;
  function l(e) {
    let t = i.useContext(a),
      n = r.useConfig({ location: e }).enabled;
    return t ?? n;
  }
}
