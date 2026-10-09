/* Recovered shipped factory. Module 112420.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7274053..7274287
 * Raw property SHA-256: 186df6e9d534b226cc6a73a6fee7e255f58b55fef68fda66391eb7821d9d0c5a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C: () => r, v: () => a });
  let i = null;
  function r(e) {
    i = e;
  }
  function a(e) {
    if (null == i) return null;
    try {
      return i(e);
    } catch (e) {
      return (console.error("[rpc] command interceptor threw; running the real handler", e), null);
    }
  }
}
