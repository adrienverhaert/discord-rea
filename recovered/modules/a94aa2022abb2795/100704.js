/* Recovered shipped factory. Module 100704.
 * Source: recovered/web/assets/a94aa2022abb2795.js
 * UTF-16 property offsets: 95..405
 * Raw property SHA-256: 40294161ab5171aa7a101bd312e112d1c2fe95d43b3ab1e41aeee45f1fefb80d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, i) {
  i.d(t, { HB: () => r, d3: () => n, qq: () => c });
  var l = i(927813);
  let r = 12 * l.A.Millis.HOUR,
    c = 10 * l.A.Millis.MINUTE;
  function n(e) {
    let { fetchState: t, fetchedAt: i, needsPricing: l = !1, hasPricingCoverage: n = !1 } = e;
    if ("error" === t) return null == i || Date.now() - i > c;
    let o = l && !n;
    return "loading" === t ? o : null == i || o || Date.now() - i > r;
  }
}
