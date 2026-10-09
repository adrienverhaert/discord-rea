/* Recovered shipped factory. Module 259464.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3824705..3825025
 * Raw property SHA-256: 771abed9e44a7dd12f095ac5c5821a956bfaae892c142ef9824ffbccceeb04b1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { U: () => s, Z: () => a });
  var i = n(702841),
    r = n(696451);
  function a(e, t) {
    return (0, i.bG)([r.Ay], () => s(e, t, [r.Ay]));
  }
  function s(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.Ay],
      [i] = n,
      a = null != t && null != e ? i.getMember(t, e.id) : null;
    return a?.avatarDecoration ?? e?.avatarDecoration;
  }
}
