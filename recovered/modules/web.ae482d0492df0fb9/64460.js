/* Recovered shipped factory. Module 64460.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2269411..2270029
 * Raw property SHA-256: 12cd01d92bd4e69a8e3620029b6bfc2a6922fa6731a91d264bc264411119e0b8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { J: () => u }), n(321073));
  var i = n(749884),
    r = n(976860),
    a = n(345942),
    s = n(114129),
    l = n(442325),
    o = n(967198),
    d = n(711014),
    c = n(652215);
  let u = {
    binds: (() => {
      let e = [];
      for (let t = 1; t < 10; t++) e.push(`mod+${t}`);
      return e;
    })(),
    comboKeysBindGlobal: !0,
    action(e, t) {
      let n,
        u = parseInt(t.split("+")[1], 10);
      if ((0 === u && (u = 10), l.A.isTabBarVisible())) {
        let e = l.A.getTabs()[u - 1];
        return (null != e && (0, s.ZD)(e.id), !1);
      }
      if (
        !isNaN(u) &&
        0 !== u &&
        null !=
          (n =
            1 === u
              ? c.ME
              : (0, i.J)()
                ? 2 === u
                  ? c.YYv
                  : d.Ay.getFlattenedGuildIds()[u - 3]
                : d.Ay.getFlattenedGuildIds()[u - 2])
      )
        return (
          n === c.ME && null == o.A.getGuildId() ? (0, r.pX)(c.BVt.CHANNEL(n)) : (0, a.u)(n),
          !1
        );
    },
  };
}
