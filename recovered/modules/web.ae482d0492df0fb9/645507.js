/* Recovered shipped factory. Module 645507.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4140802..4141085
 * Raw property SHA-256: 71635469d303c01e584d5a702abef18432d9982073077d7cf12f4d7f6fc3a966
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(403918),
    r = n(660183);
  function a(e) {
    let t = null != e && e.size > 0 ? i.P2.filter((t) => !e.has(t.value)) : i.P2;
    if (0 === t.length) return { value: i.W_.ADD_STATUS, label: () => r.intl.string(r.t.Vq4UmS) };
    let n = Math.floor(Math.random() * t.length);
    return t[n];
  }
}
