/* Recovered shipped factory. Module 644103.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4782545..4782708
 * Raw property SHA-256: 613de013a3cb41585332d68023a0e5efd2c52833b5cf30b79805e245ef2938c5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Y: () => r, v: () => a });
  let i = new Set();
  function r(e) {
    return (
      i.add(e),
      () => {
        i.delete(e);
      }
    );
  }
  function a(e) {
    if (0 !== i.size) for (let t of i) t(e);
  }
}
