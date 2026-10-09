/* Recovered shipped factory. Module 84776.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 20008..20260
 * Raw property SHA-256: 704a0bc03c8dae187404a65d2ff87d12da6330568ec74847344c7124c6b4172f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function r(e) {
    var t = new Date(
      Date.UTC(
        e.getFullYear(),
        e.getMonth(),
        e.getDate(),
        e.getHours(),
        e.getMinutes(),
        e.getSeconds(),
        e.getMilliseconds(),
      ),
    );
    return (t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime());
  }
  n.d(t, { A: () => r });
}
