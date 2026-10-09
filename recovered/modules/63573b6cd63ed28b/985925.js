/* Recovered shipped factory. Module 985925.
 * Source: recovered/web/assets/63573b6cd63ed28b.js
 * UTF-16 property offsets: 1525..1956
 * Raw property SHA-256: 6b05c4fb5ef917850d42edbb583eb9be78c4f77985cc6c25ccb353686d34ecc1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, l) {
  l.d(t, { q: () => I, r: () => a });
  var n = l(136722),
    r = l(17928),
    u = l(71393),
    d = l(287809),
    i = l(488926),
    E = l(402655);
  function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.A, d.default];
    if (null == e) return !1;
    let [l, r] = t,
      a = l.getGuild(e);
    if (null == a) return !1;
    let I = r.getCurrentUser();
    return n.X8(i.cc({ user: I, context: a, checkElevated: !1 }), E.M);
  }
  function I(e) {
    return (0, r.bG)([u.A, d.default], () => a(e, [u.A, d.default]), [e]);
  }
}
