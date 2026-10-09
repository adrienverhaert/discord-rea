/* Recovered shipped factory. Module 352003.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3007490..3008148
 * Raw property SHA-256: ab9a5edbe981ec84e707c78a0b5006688dd4cebdc587aec3d3002a9091161cd0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(582128),
    r = n(17928),
    a = n(885386),
    s = n(403362),
    l = n(382483),
    o = n(385113);
  function d(e) {
    let t = a.Q_.useSetting(),
      n = (0, r.bG)([o.A], () => o.A.getFeaturedFetchState()),
      d = (0, r.bG)([o.A], () => o.A.getDeveloperFetchState()),
      c = (0, r.yK)([o.A], () => e.filter((e) => o.A.getFetchState(e) === o.e.NOT_FETCHED)),
      u = (0, r.yK)([o.A], () => e.map((e) => o.A.getConfig(e)).filter(s.Vq));
    return (
      i.useEffect(() => {
        (0, l.Wq)().catch(() => {});
      }, []),
      i.useEffect(() => {
        t && (0, l.i$)().catch(() => {});
      }, [t]),
      i.useEffect(() => {
        if (
          n !== o.e.NOT_FETCHED &&
          n !== o.e.FETCHING &&
          (!t || (d !== o.e.NOT_FETCHED && d !== o.e.FETCHING))
        )
          for (let e of c) (0, l.un)(e).catch(() => {});
      }, [d, n, c, t]),
      u
    );
  }
}
