/* Recovered shipped factory. Module 549973.
 * Source: recovered/web/assets/fa0713482ce09a96.js
 * UTF-16 property offsets: 95..482
 * Raw property SHA-256: 5848946b29c3e9c0ff4503f796ca36ca6398bea3373c738218c7ecc7ab5038b0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, i) {
  i.d(t, { e: () => a });
  var l = i(582128),
    s = i(927813),
    r = i(995273);
  function a(e) {
    let { timestamp: t, abbreviated: i = !0 } = e,
      [a, n] = l.useState(() => (0, r.jb)(t, i));
    return (
      l.useEffect(() => {
        n((0, r.jb)(t, i));
        let e = Date.now() - t;
        if (e > s.A.Millis.DAY) return;
        let l = e >= s.A.Millis.HOUR ? s.A.Millis.HOUR : s.A.Millis.MINUTE,
          a = setInterval(
            () => {
              n((0, r.jb)(t, i));
            },
            l,
            l - (e % l),
          );
        return () => clearInterval(a);
      }, [t, i]),
      a
    );
  }
}
