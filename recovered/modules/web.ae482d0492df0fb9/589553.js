/* Recovered shipped factory. Module 589553.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3742061..3742264
 * Raw property SHA-256: 39c1f609c22747862fe1f4647e4aa62521ebf230081059273ff9b199e24f5141
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(439818),
    r = n(696016);
  function a(e, t) {
    let n = (0, i.A)((0, r.cM)(e.createdAt)),
      a = (0, i.A)(null != e.name && "" !== e.name ? e.name : n),
      s = "" !== a ? a : n;
    return `${s}.${t}`;
  }
}
