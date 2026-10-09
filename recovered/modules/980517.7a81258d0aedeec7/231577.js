/* Recovered shipped factory. Module 231577.
 * Source: recovered/web/assets/980517.7a81258d0aedeec7.js
 * UTF-16 property offsets: 51081..51466
 * Raw property SHA-256: a82bbb5de0ecd74d3a5a41eab9e83d59d282207f48903bcc34a08e67ecab7f98
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { eJ: () => a });
  var n = r(978862);
  function a() {
    let e = n.O,
      t = e.crypto || e.msCrypto,
      r = () => 16 * Math.random();
    try {
      if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
      t &&
        t.getRandomValues &&
        (r = () => {
          let e = new Uint8Array(1);
          return (t.getRandomValues(e), e[0]);
        });
    } catch (e) {}
    return "10000000100040008000100000000000".replace(/[018]/g, (e) =>
      (e ^ ((15 & r()) >> (e / 4))).toString(16),
    );
  }
}
