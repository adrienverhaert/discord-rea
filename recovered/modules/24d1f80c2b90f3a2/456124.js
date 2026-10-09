/* Recovered shipped factory. Module 456124.
 * Source: recovered/web/assets/24d1f80c2b90f3a2.js
 * UTF-16 property offsets: 12199..12516
 * Raw property SHA-256: ef650f466a40ba38f631043c01d35aadcb147d4ea9df6dc400fb9dd0598113f5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { E: () => A });
  var l = n(512750),
    u = n(17928),
    r = n(645619),
    i = n(383272),
    o = n(998418),
    s = n(568065);
  function A(e, t) {
    var n, A;
    let _ = (0, u.bG)([r.A], () => r.A.getStateForGuild(e)),
      E = _?.allPowerups[l.d0],
      a = (0, o.Ay)(e, E);
    return (
      (n = (0, i.lY)(e, t)),
      (A = a.type),
      n && null != E && null != E.storeRemovalDate && A === s.b_.POWERUP_ACTIVATED
    );
  }
}
