/* Recovered shipped factory. Module 933725.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5428025..5428388
 * Raw property SHA-256: b1a362042cdf3a070a1872478464290420d84517e302ae48e453e928c031a76c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { m: () => l });
  var i = n(636537),
    r = n(73153),
    a = n(287809),
    s = n(652215);
  async function l(e, t) {
    try {
      let n = await i.Bo.put({
        url: s.Rsh.USER_SET_GUILD_IDENTITY,
        body: { identity_guild_id: e, identity_enabled: t },
        rejectWithError: !1,
      });
      return (
        r.h.dispatch({
          type: "CURRENT_USER_UPDATE",
          user: { ...a.default.getCurrentUser(), ...n.body },
        }),
        n
      );
    } catch (e) {
      return e;
    }
  }
}
