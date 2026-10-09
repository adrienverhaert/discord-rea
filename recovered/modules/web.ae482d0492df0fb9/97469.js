/* Recovered shipped factory. Module 97469.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7459533..7460571
 * Raw property SHA-256: 2e18c969d016a7971ea299461f42064dd3f0661b89e4dfbb5eea6ea7e87c2802
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $i: () => _, NC: () => A, qo: () => E });
  var i = n(17928),
    r = n(462887),
    a = n(467135),
    s = n(147248),
    l = n(875317),
    o = n(363195),
    d = n(885386),
    c = n(652215);
  function u(e) {
    let {
        theme: t,
        darkSidebar: n,
        gradientPreset: i,
        clientThemeSettings: a,
        isCustomThemeEditorActive: s,
        hasActiveGuildTheme: l,
        isGuildThemePreviewActive: o,
      } = e,
      d = null != a.customUserThemeSettings;
    return (0, r.q)(t) && n && null == i && !(d || s || l || o);
  }
  function _() {
    let e = (0, l.fX)();
    return u({
      theme: o.A.theme,
      darkSidebar: d.l$.getSetting(),
      gradientPreset: s.A.gradientPreset,
      clientThemeSettings: d.eh.getSetting(),
      isCustomThemeEditorActive: a.ko.getState().isEditorActive(),
      hasActiveGuildTheme: null != e,
      isGuildThemePreviewActive: !1,
    });
  }
  function E() {
    let e = d.eh.useSetting(),
      t = d.l$.useSetting(),
      n = (0, a.ko)((e) => e.isEditorActive()),
      r = null != (0, l.Q)(),
      c = (0, l.gM)();
    return (0, i.bG)([o.A, s.A], () =>
      u({
        theme: o.A.theme,
        darkSidebar: t,
        gradientPreset: s.A.gradientPreset,
        clientThemeSettings: e,
        isCustomThemeEditorActive: n,
        hasActiveGuildTheme: r,
        isGuildThemePreviewActive: c,
      }),
    );
  }
  function A() {
    return E() ? c.NJ8.ASH : void 0;
  }
}
