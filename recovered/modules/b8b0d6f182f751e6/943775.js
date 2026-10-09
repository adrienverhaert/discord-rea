/* Recovered shipped factory. Module 943775.
 * Source: recovered/web/assets/b8b0d6f182f751e6.js
 * UTF-16 property offsets: 95..316
 * Raw property SHA-256: cad9034d52e01f00ad9df095280b2169e3692e5832b0061a25750f8c8a962758
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, n, e) {
  e.d(n, { A: () => l });
  var i = e(998218);
  function l(t, n) {
    let e = t.getIconSource(n);
    if (null != e && "number" != typeof e) {
      let t;
      if ((Array.isArray(e) ? e.length > 0 && (t = e[0].uri) : (t = e.uri), null != t))
        return i.A.toURLSafe(t) ?? void 0;
    }
  }
}
