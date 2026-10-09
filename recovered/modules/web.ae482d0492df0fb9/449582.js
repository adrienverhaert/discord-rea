/* Recovered shipped factory. Module 449582.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3835769..3836068
 * Raw property SHA-256: 9b8fe0de2ca968ce7a7a00a16248942332a2547f828b08c85cd76bd9fbd09b1d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { r: () => l });
  var i = n(582128),
    r = n(17928),
    a = n(696451),
    s = n(780898);
  function l(e) {
    let { user: t, guildId: n } = e,
      l = (0, r.bG)([a.Ay], () => (null != n && null != t ? a.Ay.getMember(n, t.id) : null));
    return i.useMemo(() => {
      if (null != t) return (0, s.WK)(l?.collectibles?.nameplate) ?? t.nameplate;
    }, [l, t]);
  }
}
