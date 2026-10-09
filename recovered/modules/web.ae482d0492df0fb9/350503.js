/* Recovered shipped factory. Module 350503.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8176725..8176922
 * Raw property SHA-256: b227986fcda37350671b055de28cb9717eae0d5e50d1937eaba53f4866bdcc13
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { p: () => a, v: () => r });
  var i = n(873298);
  function r(e) {
    return e === i.tI.PERSONAL ? i.tI.PERSONAL : i.tI.GUILD;
  }
  function a(e, t) {
    return e === i.tI.GUILD || e === i.tI.PERSONAL ? e : r(t);
  }
}
