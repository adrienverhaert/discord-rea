/* Recovered shipped factory. Module 805143.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7533654..7534198
 * Raw property SHA-256: 49cc1c25224733ba6d5cabb65065c5c08a88b3c60f3631f245f6c404d833503e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { Y: () => u }), n(667532));
  var i = n(582128),
    r = n(702841),
    a = n(576705),
    s = n(711014),
    l = n(287809),
    o = n(158045),
    d = n(652215),
    c = n(818348);
  function u(e, t) {
    let n = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
      u = e?.guild_id ?? d.dJq,
      _ = (0, r.bG)([s.Ay], () => s.Ay.getFlattenedGuildIds()),
      E = (0, r.bG)(
        [a.A],
        () => null == e || null == e.guild_id || a.A.can(c.xB.USE_EXTERNAL_SOUNDS, e),
      );
    return i.useMemo(() => {
      if ((o.Ay.canUseSoundboardEverywhere(n) || !t) && E) {
        let e = "" !== u,
          t = e ? _.filter((e) => e !== u) : _;
        return (e && t.unshift(u), t);
      }
      return [u];
    }, [n, t, u, _, E]);
  }
}
