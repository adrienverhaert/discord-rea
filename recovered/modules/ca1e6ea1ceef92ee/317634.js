/* Recovered shipped factory. Module 317634.
 * Source: recovered/web/assets/ca1e6ea1ceef92ee.js
 * UTF-16 property offsets: 95..461
 * Raw property SHA-256: 023c3f04a15adc85f6d46112b8c117fe260a3b29d35771e0105c9c7cb0615a12
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, s, _) {
  _.d(s, { B: () => S, s: () => T });
  var a = _(73153),
    i = _(473953),
    p = _(593673);
  function S(t, s) {
    a.h.dispatch({ type: "GUILD_SETTINGS_GUILD_SPACE_SETTINGS_UPDATE", guildId: t, settings: s });
  }
  async function T(t, s) {
    let _ = { ...s };
    s.enabled || (_.publish_status = p.B.DRAFT);
    let S = await (0, i.W)(t, _);
    a.h.dispatch({ type: "GUILD_SETTINGS_SET_GUILD_SPACE_SETTINGS", guildId: t, settings: S });
  }
}
