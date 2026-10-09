/* Recovered shipped factory. Module 159201.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8249871..8250211
 * Raw property SHA-256: 566c2684508490c4f246fecc6409a63fc1ec65950798876d6d5b5753582ecdf3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { a: () => a, f: () => r });
  var i = n(767589);
  function r(e, t) {
    let n = e.fields.find((e) => e.localName === t);
    if (null == n) throw Error(`Unknown proto field name ${String(t)}`);
    return n.T();
  }
  function a(e, t, n, r, a) {
    let s = null != e ? n.fromBinary(n.toBinary(e), i.Su) : n.create();
    if (!1 === t(s)) return null;
    let l = r.create();
    return ((l[a] = s), l);
  }
}
