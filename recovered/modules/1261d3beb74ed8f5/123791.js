/* Recovered shipped factory. Module 123791.
 * Source: recovered/web/assets/1261d3beb74ed8f5.js
 * UTF-16 property offsets: 548..1048
 * Raw property SHA-256: e6372b32029dfb9bb6d2fdd3e555d33a2403f92b307f5865efc3f95074bfdadf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, r) {
  r.d(e, { C: () => E, F: () => _ });
  var s = r(582128),
    o = r(17928),
    i = r(996759),
    n = r(339048),
    a = r(800342),
    c = r(163437),
    u = r(280450),
    A = r(97352),
    p = r(652676),
    T = r(67480);
  function E(t) {
    s.useEffect(() => {
      _(t);
    }, [t]);
    let e = (0, o.yK)(
        [p.A, T.A, A.A],
        () => {
          let e = p.A.getStoreLayout(t);
          return (0, c.oC)(e.subscriptions, T.A, A.A);
        },
        [t],
      ),
      r = (0, o.yK)([p.A], () => p.A.getStoreLayout(t).otps, [t]);
    return s.useMemo(() => ({ subscriptions: e, otps: r }), [e, r]);
  }
  function _(t) {
    ((0, i.V)(t), (0, a.JI)(t), u.default.isAuthenticated() && (0, n.LM)(t, !1));
  }
}
