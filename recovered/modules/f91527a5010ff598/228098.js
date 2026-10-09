/* Recovered shipped factory. Module 228098.
 * Source: recovered/web/assets/f91527a5010ff598.js
 * UTF-16 property offsets: 240796..241176
 * Raw property SHA-256: c809e53c8b0257d6e9eb8ad46725a3813e863d9418ff4d7bb1c1bfa8692b431e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => c });
  var l = n(17928),
    i = n(473529),
    s = n(543465),
    a = n(395504),
    r = n(652215),
    o = n(746080);
  function c(e) {
    let t = (0, a.jN)(e?.getGuildId() != null ? e.guild_id : r.eGj),
      n = (0, l.bG)([s.Ay], () => null != e && s.Ay.isChannelRecordOrParentOptedIn(e)),
      c = (0, i.d)(e?.guild_id ?? r.eGj);
    if (null == e) return !1;
    let d = c && e.hasFlag(o.lx.IS_GUILD_RESOURCE_CHANNEL);
    return t && !d && !n && !e.isThread();
  }
}
