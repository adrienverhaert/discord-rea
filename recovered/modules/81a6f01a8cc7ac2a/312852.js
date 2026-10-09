/* Recovered shipped factory. Module 312852.
 * Source: recovered/web/assets/81a6f01a8cc7ac2a.js
 * UTF-16 property offsets: 93..299
 * Raw property SHA-256: b783a898ea7965112bde0cb764cf7507d0dfc7f33cf7a4c55af61ab5a025ecf7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (s, a, n) {
  n.d(a, { K: () => h });
  var t = n(17928),
    u = n(4227),
    d = n(623373);
  function h(s) {
    let a = (0, t.bG)([u.A], () => u.A.purchases);
    return null != s && (0, d.B1)(s)
      ? Math.max(
          0,
          s.variants.findIndex((s) => !a.has(s.skuId)),
        )
      : 0;
  }
}
