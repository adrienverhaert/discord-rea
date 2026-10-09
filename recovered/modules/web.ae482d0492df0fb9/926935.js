/* Recovered shipped factory. Module 926935.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6074815..6075117
 * Raw property SHA-256: 693cf78fd51d9adfc2c5df5acdefbffef1431797b418901f0c922ef51c4d80eb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(439372),
    r = n(77729),
    a = n(351906);
  let s = !1;
  function l() {
    let e = r.A?.window?.setContentProtection;
    if (null == e) return;
    let t = a.A.enableContentProtection;
    t !== s && (e(t), (s = t));
  }
  class o extends i.A {
    stores = new Map().set(a.A, l);
    constructor() {
      (l(), super());
    }
  }
  let d = new o();
}
