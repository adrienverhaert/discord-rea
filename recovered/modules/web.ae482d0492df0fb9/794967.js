/* Recovered shipped factory. Module 794967.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5366759..5367534
 * Raw property SHA-256: cc70fd0b9c22708010c137988911804fec416b76b196cccecdcbbe660e995237
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { D: () => d, c: () => o });
  var i = n(636537),
    r = n(73153),
    a = n(395671),
    s = n(889227),
    l = n(652215);
  async function o(e) {
    let t = (
      await i.Bo.get({
        url: l.Rsh.GUILD_INTEGRATIONS(e),
        query: { include_applications: !0, include_role_connections_metadata: !0 },
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
      })
    ).body.map((e) => ({
      ...e,
      application:
        "application" in e && null != e.application ? a.kJ.createFromServer(e.application) : void 0,
      user: "user" in e && null != e.user ? new s.A(e.user) : void 0,
    }));
    return (
      r.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INTEGRATIONS", guildId: e, integrations: t }),
      t
    );
  }
  function d(e) {
    return i.Bo.get({ url: l.Rsh.GUILD_WIDGET(e), oldFormErrors: !0, rejectWithError: !0 }).then(
      (e) => {
        r.h.dispatch({
          type: "GUILD_SETTINGS_SET_WIDGET",
          enabled: e.body.enabled,
          channelId: e.body.channel_id,
        });
      },
    );
  }
}
