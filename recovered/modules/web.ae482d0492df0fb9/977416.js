/* Recovered shipped factory. Module 977416.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7073377..7073677
 * Raw property SHA-256: a5257a9cc5778116f10ab8d232253144a62de6c3a4259cc01e4a3c51eaababdf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e) {
    return new Date(e.expiresAt).valueOf() <= Date.now();
  }
  function r(e) {
    return i(e.config);
  }
  function a(e) {
    let t = null,
      n = Date.now();
    for (let i of e) {
      let e = new Date(i.config.expiresAt).valueOf();
      !(e <= n) && (null == t || e < t) && (t = e);
    }
    return t;
  }
  n.d(t, { Ic: () => r, kd: () => i, v1: () => a });
}
