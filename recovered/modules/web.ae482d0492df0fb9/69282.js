/* Recovered shipped factory. Module 69282.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7243885..7244744
 * Raw property SHA-256: d60e23fcc334f80bb06acff4c11a206de8f780fc1f7959b67ab8f8b16521947d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ib: () => c, Xx: () => o, ox: () => d });
  var i = n(582128),
    r = n(17928),
    a = n(376304),
    s = n(317525),
    l = n(71393);
  function o(e) {
    let { guildId: t, roleId: n, size: a = 20, role: o, guild: c } = e,
      _ = (0, r.bG)([l.A, s.A], () => u({ guildId: t, roleId: n, role: o, guild: c }, l.A, s.A), [
        t,
        n,
        o,
        c,
      ]);
    return i.useMemo(() => d(_, a), [_, a]);
  }
  function d(e, t) {
    if (null == e) return;
    let n = (0, a.sE)(e, t);
    if (null != n)
      return {
        src: n.customIconSrc,
        name: e.name,
        roleId: e.id,
        size: t,
        unicodeEmoji: n.unicodeEmoji,
      };
  }
  function c(e, t) {
    let n = (0, r.bG)([l.A, s.A], () => u({ guildId: e, role: t }, l.A, s.A), [e, t]);
    return i.useMemo(() => d(n), [n]);
  }
  function u(e) {
    let { guildId: t, roleId: n, role: i, guild: r } = e,
      o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A,
      d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.A,
      c = r ?? o.getGuild(t),
      u = i ?? (null != t && null != n ? d.getRole(t, n) : void 0);
    if (null != c && null != u && (0, a.fm)(c, u)) return u;
  }
}
