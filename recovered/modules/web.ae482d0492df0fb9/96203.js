/* Recovered shipped factory. Module 96203.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7494792..7495541
 * Raw property SHA-256: e17da0d3707f544ab1a8b8a7b3f34a335205113eb98112b447531676d9c505db
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(582128),
    r = n(435558),
    a = n(17928),
    s = n(633075),
    l = n(289173),
    o = n(999291),
    d = n(832163),
    c = n(501838);
  function u(e) {
    let { userId: t } = e,
      n = (0, o.Ay)(t),
      u = i.useMemo(() => (n?.userId != null ? [n.userId] : []), [n]),
      _ = (0, c.w)({ userIds: u }),
      E = (0, c.mn)({ userIds: u }),
      A = (0, c.tR)(u),
      h = (0, a.yK)(
        [d.A],
        () => {
          if (n?.widgets == null) return [];
          let e = new Set();
          for (let t of n?.widgets ?? [])
            if (t instanceof l.Yy)
              t.games.forEach((t) => {
                let n = d.A.getApplicationIdFromDetectableId(t.gameId);
                null != n && e.add(n);
              });
            else if (t instanceof s.R) {
              let n = d.A.getApplicationIdFromDetectableId(t.applicationId);
              null != n && e.add(n);
            }
          return Array.from(e).sort();
        },
        [n],
      );
    return i.useMemo(
      () => (n?.application != null ? [] : (0, r.uniq)([..._, ...E, ...A, ...h])),
      [n?.application, _, E, A, h],
    );
  }
}
