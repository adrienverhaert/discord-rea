/* Recovered shipped factory. Module 525104.
 * Source: recovered/web/assets/8b4eb1e0c14512a7.js
 * UTF-16 property offsets: 6053..6567
 * Raw property SHA-256: 2982c0f61a354ee02332b5fadc9b79fc6ff82f004bda17740cf0f0092d385ba2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  (n.d(e, { A: () => c }), n(321073));
  var r = n(582128),
    l = n(17928),
    s = n(555337),
    i = n(645619),
    a = n(743981);
  function c() {
    let t = (0, l.bG)([s.A], () => s.A.getGuild()),
      e = (0, l.bG)([i.A], () => i.A.getStateForGuild(t?.id)?.allPowerups);
    return (0, r.useMemo)(() => {
      let n = a.hc.map((t) => ({ kind: t })),
        r = [];
      return (
        t?.features == null ||
          Object.keys(a.Tf).forEach((l) => {
            let s = a.Tf[l],
              i = a.kO[l],
              c = e?.[i],
              d = c?.title,
              u = s.map((t) => ({ kind: t, packName: d }));
            t.features.has(l) ? n.push(...u) : r.push(...u);
          }),
        { unlockedBadges: n, lockedBadges: r }
      );
    }, [t?.features, e]);
  }
}
