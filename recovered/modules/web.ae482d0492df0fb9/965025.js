/* Recovered shipped factory. Module 965025.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4995178..4995408
 * Raw property SHA-256: f126723203e9b1d06bd4e1c20e89f07302e6ceccdc417aae419f6d8340ad3d3d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(507756),
    r = n(731854);
  function a(e, t, n, a) {
    if (n.type !== r.ei.FIXED) return n;
    let s = (0, i.A)(e, t, n.height, a);
    return s === n.height ? n : { ...n, width: Math.round((n.width * s) / n.height), height: s };
  }
}
