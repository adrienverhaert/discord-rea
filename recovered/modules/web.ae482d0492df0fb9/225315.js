/* Recovered shipped factory. Module 225315.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8704582..8705781
 * Raw property SHA-256: f0b8efc0c8c4621caf23008bbd8b18a1792f5212a7cead11b5f72eba7e39af5e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Fy: () => l, Vv: () => d, Xx: () => c, i4: () => u, oZ: () => o, ry: () => s });
  var i = n(636537),
    r = n(73153),
    a = n(652215);
  function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    r.h.dispatch({ type: "WELCOME_SCREEN_VIEW", guildId: e, isLurking: t });
  }
  async function l(e) {
    r.h.dispatch({ type: "WELCOME_SCREEN_FETCH_START" });
    try {
      let t = await i.Bo.get({
        url: a.Rsh.GUILD_WELCOME_SCREEN(e),
        oldFormErrors: !0,
        rejectWithError: !0,
      });
      return (
        r.h.dispatch({ type: "WELCOME_SCREEN_FETCH_SUCCESS", guildId: e, welcomeScreen: t.body }),
        t.body
      );
    } catch (e) {
      r.h.dispatch({ type: "WELCOME_SCREEN_FETCH_FAIL" });
    }
  }
  function o() {
    r.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_RESET" });
  }
  function d() {
    r.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_CLEAR" });
  }
  function c(e) {
    r.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_UPDATE", settings: e });
  }
  async function u(e, t) {
    r.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT" });
    try {
      let n = await i.Bo.patch({
        url: a.Rsh.GUILD_WELCOME_SCREEN(e),
        body: { description: t.description, welcome_channels: t.channels, enabled: t.enabled },
        oldFormErrors: !0,
        rejectWithError: !0,
      });
      r.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_SUCCESS", guildId: e, welcomeScreen: n.body });
    } catch (e) {
      r.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_FAILURE" });
    }
  }
}
