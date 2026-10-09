/* Recovered shipped factory. Module 97626.
 * Source: recovered/web/assets/827385.f252b13aac29f74a.js
 * UTF-16 property offsets: 17851..18055
 * Raw property SHA-256: 78cb8cc312b9ac3c6289e6df078e0bffd931616d19b5ac8d5e015c1d49b5cffb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { z: () => a });
  function a(e, n, t, a, r) {
    var u = e[n];
    if (void 0 === u) return r;
    let s = Number(u);
    if (isNaN(s) || s < t || s > a) throw RangeError(`${s} is outside of range [${t}, ${a}]`);
    return Math.floor(s);
  }
}
