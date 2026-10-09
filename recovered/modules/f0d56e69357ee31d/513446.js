/* Recovered shipped factory. Module 513446.
 * Source: recovered/web/assets/f0d56e69357ee31d.js
 * UTF-16 property offsets: 95..229
 * Raw property SHA-256: cf8a7bce03d874c1ffc65759d49189f6036bffddb9966970d8eea1796cdcabe8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (s, t, a) {
  a.d(t, { a: () => c });
  var u = a(636537);
  function c(s) {
    return !(s instanceof u.oh) || s.status < 400 || s.status >= 500 || 429 === s.status;
  }
}
