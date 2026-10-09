/* Recovered shipped factory. Module 145643.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3966496..3966908
 * Raw property SHA-256: 8474d74ab8360be7763ecc132f6dcb8b6fa60f08cc6043c9533eab785b8e1d6c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153),
    a = n(71393);
  let s = new Map();
  class l extends i.Ay.Store {
    static displayName = "GuildRoleConnectionsConfigurationStore";
    initialize() {
      this.waitFor(a.A);
    }
    getGuildRoleConnectionsConfiguration(e) {
      return s.get(e);
    }
  }
  let o = new l(r.h, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
      let { roleId: t, roleConnectionConfigurations: n } = e;
      s.set(t, n);
    },
  });
}
