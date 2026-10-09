/* Recovered shipped factory. Module 920268.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3224398..3224971
 * Raw property SHA-256: 83d2065dca3c413ef1de77502e99efbec82e8397c89edfad9c259e4c1849fc50
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(136722),
    r = n(317525),
    a = n(71393),
    s = n(652215);
  let l = [
      s.rbe.GUILD_TEXT,
      s.rbe.GUILD_VOICE,
      s.rbe.GUILD_ANNOUNCEMENT,
      s.rbe.GUILD_FORUM,
      s.rbe.GUILD_APP,
      s.rbe.PUBLIC_THREAD,
      s.rbe.PRIVATE_THREAD,
    ],
    o = i.kg(s.xBc.VIEW_CHANNEL, s.xBc.SEND_MESSAGES);
  function d(e) {
    if (null == e || !l.includes(e.type)) return [];
    let t = a.A.getGuild(e.guild_id);
    return null == t
      ? []
      : Object.values(e.permissionOverwrites)
          .filter(
            (e) =>
              0 === e.type &&
              r.A.getRole(t.id, e.id)?.tags?.guild_connections === null &&
              !i.X8(e.deny, o),
          )
          .map((e) => r.A.getRole(t.id, e.id))
          .filter((e) => null != e);
  }
}
