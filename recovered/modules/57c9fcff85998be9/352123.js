/* Recovered shipped factory. Module 352123.
 * Source: recovered/web/assets/57c9fcff85998be9.js
 * UTF-16 property offsets: 4042..4488
 * Raw property SHA-256: ce90b4ef8dbe1ecf5477aa54bff6b19d665b9dc1b5df326020bc616cd29b0921
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => o, b: () => E });
  var r = n(17928),
    i = n(734057),
    c = n(71393),
    a = n(576705),
    l = n(652215);
  function o(t) {
    let e = (0, r.bG)([c.A], () => c.A.getGuild(t.guildId)),
      n = (0, r.bG)([i.A], () => i.A.getChannel(t.channelId)),
      o = (0, r.bG)([a.A], () => a.A.can(l.xBc.ADMINISTRATOR, e)),
      E = (0, r.bG)([a.A], () => a.A.can(l.xBc.MANAGE_MESSAGES, n));
    return { isEntryAdmin: o, canEdit: o || E, canRemove: o || E };
  }
  function E(t) {
    return (0, r.bG)([a.A], () => a.A.can(l.xBc.SEND_MESSAGES, t));
  }
}
