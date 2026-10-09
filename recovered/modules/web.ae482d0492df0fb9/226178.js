/* Recovered shipped factory. Module 226178.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3927767..3928272
 * Raw property SHA-256: 8b313580d62e213f55c0fd44786cdc56b9e27d89e370f63609fa38573241eb27
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { i: () => o });
  var i = n(485845),
    r = n(179771),
    a = n(136722),
    s = n(803306);
  let l = [r.F.BOT, r.F.APPLICATIONS_COMMANDS];
  function o(e) {
    let { applicationId: t, application: n, guildId: r } = e,
      o = n?.integrationTypesConfig?.[i.b.GUILD_INSTALL]?.oauth2InstallParams ?? n?.installParams;
    return {
      clientId: t,
      guildId: r,
      disableGuildSelect: !0,
      integrationType: i.b.GUILD_INSTALL,
      scopes: o?.scopes ?? l,
      permissions: o?.permissions != null ? a.iu(o.permissions) : void 0,
      callback: () => ((0, s.eO)(t, { withMutualGuilds: !0 }), !0),
    };
  }
}
