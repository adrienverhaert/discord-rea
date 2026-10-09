/* Recovered shipped factory. Module 453774.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7495542..7496097
 * Raw property SHA-256: e744bfc49b27f2dbd36097f09ff9d603bcb8fd2348671ff422ac61285686f6f5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(582128),
    r = n(17928),
    a = n(429913),
    s = n(832163);
  function l(e) {
    var t;
    let n,
      l,
      o,
      d =
        ((t = i.useMemo(() => (null != e ? [e] : []), [e])),
        (n = (0, r.bG)([s.A], () => s.A.getConfig())),
        (l = i.useMemo(() => {
          if (null == n || 0 === t.length) return [];
          let e = new Set(t);
          return Array.from(
            new Set(
              n.storefronts
                .filter((t) => e.has(t.applicationId) || e.has(t.gameId))
                .map((e) => e.applicationId),
            ),
          );
        }, [n, t])),
        (o = (0, a.A)(l)),
        i.useMemo(() => o.reduce((e, t) => (null == t || (e[t.id] = t), e), {}), [o]));
    return i.useMemo(() => {
      let e = Object.values(d);
      return 0 === e.length ? null : e[0];
    }, [d]);
  }
}
