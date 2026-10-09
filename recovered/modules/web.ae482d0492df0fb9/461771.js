/* Recovered shipped factory. Module 461771.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9867198..9867427
 * Raw property SHA-256: 54d0b8cc9760ecc975344443e76b70c1468d56146667d3faacda84a540dc78bc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { T: () => a, e: () => r });
  let i = new Map();
  function r(e, t) {
    let n = i.get(e);
    return (null == n && ((n = new Set()), i.set(e, n)), n.add(t), () => n?.delete(t));
  }
  function a(e, t, n) {
    let r = i.get(e);
    if (null != r) for (let e of r) e(t, n);
  }
}
