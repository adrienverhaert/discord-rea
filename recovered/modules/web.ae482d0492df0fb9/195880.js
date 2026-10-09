/* Recovered shipped factory. Module 195880.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5973947..5974143
 * Raw property SHA-256: faa68bb6c8a8d327e1e6e9f4c3e647bd5e081d1a4a0cd995250e6d8b35b24682
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { m: () => s });
  var i = n(935208);
  let r = 0,
    a = new i.SnowflakeSequence();
  function s() {
    let e = Date.now();
    return (r !== e && (a.reset(), (r = e)), i.default.fromTimestampWithSequence(e, a));
  }
}
