/* Recovered shipped factory. Module 792251.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6566193..6566579
 * Raw property SHA-256: 463da48e92bcb3436d4835a18453ce7e8e42f3009227007dd541c0bd7fc25610
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    if (0 === e) return 0;
    let n = e / t;
    return (n < 1 ? Math.pow(n, 2.8) : Math.pow(10, ((n - 1) * 6) / 20)) * t;
  }
  function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    if (0 === e) return 0;
    let n = e / t;
    return (n < 1 ? Math.pow(n, 0.35714285714285715) : (20 * Math.log10(n)) / 6 + 1) * t;
  }
  n.d(t, { M: () => r, w: () => i });
}
