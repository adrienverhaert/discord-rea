/* Recovered shipped factory. Module 61491.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11594049..11594469
 * Raw property SHA-256: 47dbb242eea9978bca1814821b694e327d9b7f7ccf8b371136510a152a96a92d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e, t, n) {
    return n * (Math.max(e, 0) / t.width);
  }
  function r(e, t, n) {
    return a((e / t) * 100, n);
  }
  function a(e, t) {
    return (e / 100) * t.width;
  }
  function s(e) {
    let t = e < 0 ? "-" : "",
      n = 0 | (e = Math.abs(e)),
      i = Math.floor(n / 3600),
      r = Math.floor((n % 3600) / 60),
      a = n % 60;
    return i > 0
      ? `${t}${i}:${String(r).padStart(2, "0")}:${String(a).padStart(2, "0")}`
      : `${t}${r}:${String(a).padStart(2, "0")}`;
  }
  n.d(t, { DX: () => r, TO: () => a, hc: () => i, rB: () => s });
}
