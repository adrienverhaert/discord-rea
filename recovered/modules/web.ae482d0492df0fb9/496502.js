/* Recovered shipped factory. Module 496502.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7594540..7595147
 * Raw property SHA-256: df7cce06bc150b5d447b34f82dab312af705bafae6f89130d2aa2efa34995338
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { v: () => d });
  var i = n(477900),
    r = n(582128),
    a = n(442433),
    s = n(71393),
    l = n(287809),
    o = n(158045);
  function d(e, t) {
    return r.useCallback(
      (r) => {
        let d;
        r.stopPropagation();
        let c = s.A.getGuild(e.guildId),
          u = l.default.getCurrentUser();
        (null != c || o.Ay.canUseCustomCallSounds(u)) &&
          ((d = l.default.getCurrentUser()),
          (null != c || o.Ay.canUseCustomCallSounds(d)) &&
            (0, a.L3)(r, async () => {
              let { default: r } = await Promise.all([
                n.e("503376"),
                n.e("926132"),
                n.e("146652"),
                n.e("638221"),
                n.e("482861"),
                n.e("61440"),
              ]).then(n.bind(n, 710339));
              return (n) => (0, i.jsx)(r, { ...n, soundGuild: c, activeCallGuildId: t, sound: e });
            }));
      },
      [e, t],
    );
  }
}
