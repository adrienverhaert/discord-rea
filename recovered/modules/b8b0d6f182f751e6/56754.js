/* Recovered shipped factory. Module 56754.
 * Source: recovered/web/assets/b8b0d6f182f751e6.js
 * UTF-16 property offsets: 317..561
 * Raw property SHA-256: d78c0ff1c2332445f5c70c9117e17bfef752a96c66c1ad59d7a51585cee82e92
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, n, e) {
  e.d(n, { L: () => r });
  var i = e(17928),
    l = e(469778);
  function r(t) {
    return (0, i.bG)(
      [l.A],
      () => {
        let n = l.A.getForSku(t);
        if (null == n) return !1;
        let e = 0;
        for (let t of n) {
          let n = t.endsAt?.getTime() ?? 1 / 0;
          n >= e && (e = n);
        }
        return e > new Date().getTime();
      },
      [t],
    );
  }
}
