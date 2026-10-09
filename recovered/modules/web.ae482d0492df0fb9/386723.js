/* Recovered shipped factory. Module 386723.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8292049..8292363
 * Raw property SHA-256: 2423bf2355d6c5a58c98793359072ed52843089a4dc7b735d53fdac2aa900e7e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { o: () => o, z: () => l });
  var i = n(947320),
    r = n(205693),
    a = n(824744),
    s = n(355097);
  function l(e, t) {
    let n = t === r.x.STREAM ? i.i.STREAM : i.i.USER;
    return 1 > Math.abs((0, a.M)(n) - (0, a.M)(e)) ? n : e;
  }
  function o(e) {
    switch (e) {
      case r.x.DEFAULT:
        return s.W.USER;
      case r.x.STREAM:
        return s.W.STREAM;
      default:
        return;
    }
  }
}
