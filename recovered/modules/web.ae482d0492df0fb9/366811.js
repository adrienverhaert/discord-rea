/* Recovered shipped factory. Module 366811.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7245564..7246322
 * Raw property SHA-256: ac3b5be099685a4c7189a610f76d01f715e3baa0573fe5a65448796087ab02d5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(882035),
    r = n(121894),
    a = n(463347),
    s = n(334465),
    l = n(652215);
  function o(e) {
    let t = (0, s.B)(e ?? "", {
      path: l.BVt.CHANNEL(a.pv.guildId(), a.pv.channelId({ optional: !0 }), ":messageId?"),
    });
    if (null != t) {
      let { guildId: e, channelId: n } = t.params;
      return { guildId: e === l.ME ? null : e, channelId: n ?? null };
    }
    let n = (0, s.B)(e ?? "", { path: l.BVt.GUILD_BOOSTING_MARKETING(a.pv.guildId()) });
    return null != n
      ? { guildId: n.params.guildId, channelId: null }
      : { guildId: null, channelId: null };
  }
  let d = (0, i.h)((e) => ({
    path: null,
    basePath: "/",
    guildId: null,
    channelId: null,
    updatePath(t) {
      let { guildId: n, channelId: i } = o(t);
      (0, r.r)(() => e({ path: t, guildId: n, channelId: i }));
    },
    resetPath(t) {
      let { guildId: n, channelId: i } = o(t);
      (0, r.r)(() => e({ path: null, guildId: n, channelId: i, basePath: t }));
    },
  }));
}
