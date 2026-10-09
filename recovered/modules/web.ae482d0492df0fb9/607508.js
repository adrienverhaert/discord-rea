/* Recovered shipped factory. Module 607508.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7815487..7816387
 * Raw property SHA-256: 9638f49e11e137cd023c01fef1ce17d54046eb612cc8a8a1e933a1fdb4919da9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { X: () => u, l: () => c }), n(938796));
  var i = n(665260),
    r = n(17928),
    a = n(734057),
    s = n(543465),
    l = n(152007),
    o = n(37411),
    d = n(652215);
  function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Ay,
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.A,
      c = t.flags(e.id);
    if (null == c) return o.CP.NO_MESSAGES;
    if ((0, i.Lt)(c, o.CP.ALL_MESSAGES)) return o.CP.ALL_MESSAGES;
    if ((0, i.Lt)(c, o.CP.ONLY_MENTIONS)) return o.CP.ONLY_MENTIONS;
    if ((0, i.Lt)(c, o.CP.NO_MESSAGES)) return o.CP.NO_MESSAGES;
    let u = r.getChannel(e.parent_id);
    if (null == u || n.isGuildOrCategoryOrChannelMuted(u.guild_id, u.id)) return o.CP.NO_MESSAGES;
    let _ = n.resolvedMessageNotifications(u);
    return _ === d.orn.NO_MESSAGES
      ? o.CP.NO_MESSAGES
      : _ === d.orn.ONLY_MENTIONS
        ? o.CP.ONLY_MENTIONS
        : o.CP.ALL_MESSAGES;
  }
  function u(e) {
    return (0, r.bG)([l.A, s.Ay, a.A], () => c(e), [e]);
  }
}
