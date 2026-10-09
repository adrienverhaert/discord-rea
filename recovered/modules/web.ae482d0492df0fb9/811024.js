/* Recovered shipped factory. Module 811024.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2588199..2588754
 * Raw property SHA-256: 8d80de10f38e690181ad49671a848296e59e79743b8066d6d0139a6b880a21ed
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { AX: () => o, Gp: () => c, pE: () => d });
  var i = n(478437),
    r = n(17928),
    a = n(734057),
    s = n(576705),
    l = n(818348);
  function o(e) {
    var t;
    if (null == e) return !1;
    let n = a.A.getChannel(e.parent_id);
    return (
      (null == n || n?.type === i.r.GUILD_CATEGORY) &&
      ((t = e.type),
      [i.r.GUILD_TEXT, i.r.GUILD_VOICE, i.r.GROUP_DM, i.r.DM, i.r.GUILD_SPACE].includes(t))
    );
  }
  function d(e) {
    return u(e, s.A);
  }
  function c(e) {
    return (0, r.bG)([a.A, s.A], () => u(a.A.getChannel(e), s.A));
  }
  function u(e, t) {
    return (
      null != e &&
      void 0 !== e &&
      !!o(e) &&
      (null == e.guild_id || !!t.can(l.xB.USE_EMBEDDED_ACTIVITIES, e)) &&
      !0
    );
  }
}
