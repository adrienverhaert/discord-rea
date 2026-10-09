/* Recovered shipped factory. Module 287743.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8002317..8002552
 * Raw property SHA-256: 78d4b5154f7ccb02c66024cd9cc9ff7d37dc0cb01613c8e7d47bdc79e212c89f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(573648);
  function r(e) {
    if (null == e || !e.startsWith("h:")) return null;
    let [t] = e.slice(2).split(",");
    if (null == t || 0 === t.length) return null;
    let n = i.A.get(t);
    return null != n && n.enabled ? n : null;
  }
}
