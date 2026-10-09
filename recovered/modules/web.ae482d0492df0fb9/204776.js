/* Recovered shipped factory. Module 204776.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3027351..3028109
 * Raw property SHA-256: 9c7c28ac5e5274eddd1fd146026e26af75f02efebe459fc83f9ac0a46721ebb6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ie: () => s, Kp: () => l, Rx: () => o });
  var i = n(485845),
    r = n(264322),
    a = n(73510);
  function s(e) {
    let { customInstallUrl: t, installParams: n, integrationTypesConfig: i } = e;
    return (
      null != t ||
      null != n ||
      (null != i &&
        Object.values(i).some(
          (e) => e?.oauth2_install_params != null || e?.oauth2InstallParams != null,
        ))
    );
  }
  function l(e) {
    let { customInstallUrl: t, installParams: n, integrationTypesConfig: r } = e;
    return (
      s({ customInstallUrl: t, installParams: n, integrationTypesConfig: r }) &&
      null != r &&
      i.b.USER_INSTALL in r
    );
  }
  function o(e) {
    let { applicationId: t, channel: n, commandIntegrationTypes: s } = e;
    return !(
      (null != s && !s.includes(i.b.USER_INSTALL)) ||
      t === a.Ik.BUILT_IN ||
      r.Ay.hasUserStateApplication(t) ||
      (null != n &&
        r.Ay.hasContextStateApplication({ applicationId: t, channelId: n.id, guildId: n.guild_id }))
    );
  }
}
