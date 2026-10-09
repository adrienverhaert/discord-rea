/* Recovered shipped factory. Module 15073.
 * Source: recovered/web/assets/07b846d975ff9e51.js
 * UTF-16 property offsets: 95..740
 * Raw property SHA-256: 91eb3f178589c9bcc70e5ce3e32b7fdd6f36b082c25d30214a87125e18c46721
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, a, t) {
  t.d(a, { TZ: () => r, zi: () => s });
  var i = t(17928),
    n = t(600975),
    d = t(576705),
    u = t(652215);
  let l = (0, n.C)({
    kind: "guild",
    id: "2022-11_default_disable_mass_mention",
    label: "Disable mass mentions for communities by default",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
  });
  function s(e) {
    return l.useExperiment({ guildId: e, location: "dd4beb_1" }, { autoTrackExposure: !0 });
  }
  function r(e) {
    let a = (0, i.bG)([d.A], () => d.A.can(u.xBc.MANAGE_GUILD, e)),
      { enabled: t } = l.useExperiment(
        { guildId: e?.id ?? u.dJq, location: "dd4beb_3" },
        { autoTrackExposure: !0 },
      );
    if (null == e) return !1;
    let n = e.features.has(u.GuildFeatures.COMMUNITY);
    return a && n && t;
  }
}
