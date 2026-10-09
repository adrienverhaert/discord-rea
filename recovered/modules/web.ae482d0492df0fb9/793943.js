/* Recovered shipped factory. Module 793943.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4043044..4043751
 * Raw property SHA-256: e11bea767cf95fc9f1bf2437bf9093e968a40d940689a6b851f7da77ab4020a2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { HP: () => o, Jp: () => E, dJ: () => c, fy: () => u, nf: () => _, xv: () => d });
  var i,
    r,
    a,
    s = n(196765),
    l = n(121894),
    o =
      (((i = {}).CLIENT_THEMES = "CLIENT_THEMES"),
      (i.APP_ICON = "APP_ICON"),
      (i.CUSTOM_THEME = "CUSTOM_THEME"),
      (i.GUILD_THEME_PREVIEW = "GUILD_THEME_PREVIEW"),
      (i.APPLICATION_TEST_MODE_DEBUG = "APPLICATION_TEST_MODE_DEBUG"),
      i),
    d =
      (((r = {}).CLIENT_THEMES_EDITOR = "CLIENT_THEMES_EDITOR"),
      (r.SETTING = "SETTING"),
      (r.SHARE_MESSAGE = "SHARE_MESSAGE"),
      r),
    c = (((a = {}).GUILD_SETTINGS = "GUILD_SETTINGS"), (a.PERK_MODAL = "PERK_MODAL"), a);
  let u = (0, s.v)(() => ({ activePanel: null, metadata: null }));
  function _(e, t) {
    (0, l.r)(() => {
      u.setState({ activePanel: e, metadata: t ?? null });
    });
  }
  function E() {
    (0, l.r)(() => {
      u.setState({ activePanel: null, metadata: null });
    });
  }
}
