/* Recovered shipped factory. Module 75721.
 * Source: recovered/web/assets/d6579b2786c3c94e.js
 * UTF-16 property offsets: 95..589
 * Raw property SHA-256: a4415c1487f2f139e7134a6cd2b9b4e7fc6fb26d4cf4b1912e4b6c12450b07cd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (u, i, n) {
  n.d(i, { WA: () => r, _f: () => p });
  var l = n(17928),
    t = n(793480),
    e = n(71393),
    d = n(576705),
    a = n(652215);
  function c(u) {
    let i = (0, l.bG)([e.A], () => e.A.getGuild(u?.guild_id)),
      n = (0, t.m0)({ guildId: u?.guild_id, location: "VoiceChannelApp" });
    return (
      null != u &&
      u.type === a.rbe.GUILD_VOICE &&
      n &&
      i?.features.has(a.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) !== !0
    );
  }
  function r(u) {
    return c(u) ? (u?.application_id ?? null) : null;
  }
  function p(u) {
    let i = c(u),
      n = (0, l.bG)([d.A], () => null != u && d.A.can(a.xBc.MANAGE_CHANNELS, u));
    return i && n;
  }
}
