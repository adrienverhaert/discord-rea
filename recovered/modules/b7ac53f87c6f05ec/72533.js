/* Recovered shipped factory. Module 72533.
 * Source: recovered/web/assets/b7ac53f87c6f05ec.js
 * UTF-16 property offsets: 22390..22723
 * Raw property SHA-256: 9f83ebd98b8fb0bda9046c775e42c501d379b55845271385eaf2e023d0aa8fec
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => r, o: () => a });
  var i = n(17928),
    l = n(71393),
    s = n(652215);
  function r(e) {
    return (0, i.bG)([l.A], () => {
      let t = l.A.getGuild(e);
      return null != t && t.features.has(s.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
    });
  }
  function a(e) {
    let t = l.A.getGuild(e);
    return null != t && t.features.has(s.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
  }
}
