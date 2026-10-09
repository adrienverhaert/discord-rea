/* Recovered shipped factory. Module 333421.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4180722..4181017
 * Raw property SHA-256: e7be8f54c55704d90379f3f92ec2aefaf07e35b80bbba7aa077a7f82becbd516
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { AG: () => a, my: () => r, uJ: () => s });
  let i = RegExp("^dev://devtools/([-\\w._0-9]+)(/([-\\w._0-9]+))?$", "i");
  function r(e) {
    return i.test(e);
  }
  function a(e) {
    let t = e.match(i);
    return null == t || null == t[1] ? null : t[1];
  }
  function s(e) {
    let t = e.match(i);
    return null == t ? null : (t[3] ?? null);
  }
}
