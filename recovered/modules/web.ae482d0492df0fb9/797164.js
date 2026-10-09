/* Recovered shipped factory. Module 797164.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3135539..3135770
 * Raw property SHA-256: 8f570a32a3eb10b1008584092af5e3750e8130524e658ccdb9f0e5a5b48c6a5a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(306173),
    r = n(439372);
  class a extends r.A {
    intervalID;
    _initialize() {
      if ((0, i.xd)()) {
        let e = `https:${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/bad-hash-delta`;
        (0, i.kk)(e);
        return;
      }
    }
  }
  let s = new a();
}
