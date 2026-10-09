/* Recovered shipped factory. Module 183580.
 * Source: recovered/web/assets/827385.f252b13aac29f74a.js
 * UTF-16 property offsets: 42725..42954
 * Raw property SHA-256: 4e774fa01ab2bb3a6930ec44c2a0fdbf7243d253b4a9d7efddf1fd91acc37a60
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { q: () => r });
  let a = new WeakMap();
  function r(e, n) {
    let t = a.get(e);
    t || ((t = new Set(e)), a.set(e, t));
    let r = n;
    for (;;) {
      if (t.has(r)) return r;
      let e = r.lastIndexOf("-");
      if (!~e) return;
      (e >= 2 && "-" === r[e - 2] && (e -= 2), (r = r.slice(0, e)));
    }
  }
}
