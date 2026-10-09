/* Recovered shipped factory. Module 826383.
 * Source: recovered/web/assets/4a6df3baccf03720.js
 * UTF-16 property offsets: 412..668
 * Raw property SHA-256: cf6e107e9483be53730fa73c92b3332d54a64b524cf9e5e7bc27fb6e4c4014f6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => s });
  var l = n(582128),
    r = n(17928),
    i = n(285059),
    a = n(698441);
  function s(t, e, n) {
    let s = (0, r.bG)([a.Ay], () => a.Ay.getUserCount(e, n));
    return (
      (0, l.useEffect)(() => {
        null != t && null != e && i.A.getGuildEventUserCounts(t, e, null != n ? [n] : []);
      }, [e, t, n]),
      s
    );
  }
}
