/* Recovered shipped factory. Module 920601.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7990950..7993182
 * Raw property SHA-256: 05600867f9f13676105781ca937365d9560320c59a49ce7fd0256f2dce7597a4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => m });
  var i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(317097),
    l = n(17928),
    o = n(366010),
    d = n(112834),
    c = n(775602),
    u = n(345815),
    _ = n(590703),
    E = n(543699),
    A = n(702841),
    h = n(374994),
    f = n(661531),
    I = n(996988);
  let p = {
      [I.d.POPOUT]: "user-profile-popout",
      [I.d.MODAL]: "user-profile-modal",
      [I.d.MODAL_V2]: "user-profile-modal-v2",
      [I.d.SIDEBAR]: "user-profile-sidebar",
      [I.d.VIDEO_TILE_BACKGROUND]: "user-profile-video-tile-background",
      [I.d.EMBED]: "user-profile-embed",
    },
    T = Object.freeze({
      "--profile-gradient-primary-color": "var(--background-surface-high)",
      "--profile-gradient-secondary-color": "var(--background-surface-high)",
      "--profile-gradient-overlay-color": "rgba(0, 0, 0, 0)",
      "--profile-gradient-button-color": "var(--background-mod-subtle)",
      "--profile-gradient-modal-background-color": "var(--background-base-lower)",
    });
  function m(e) {
    let t,
      { theme: n, themeType: r, primaryColor: I, secondaryColor: m, forceUserTheme: g = !1 } = e,
      [S, N] = (0, l.yK)([c.Ay], () => [
        c.Ay.desaturateUserColors,
        c.Ay.syncProfileThemeWithUserTheme,
      ]),
      C =
        ((t = (0, A.bG)([c.Ay], () => c.Ay.saturation)),
        (0, i.useMemo)(() => {
          if (null == n) return null;
          let e = { theme: n, saturation: t };
          return {
            overlaySyncedWithUserTheme:
              f.A.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve(e).hex(),
            overlay: f.A.colors.PROFILE_GRADIENT_OVERLAY.resolve(e).hex(),
            sectionBox: f.A.colors.PROFILE_GRADIENT_SECTION_BOX.resolve(e).hex(),
            dividerOpacity: n === (0, h.$D)().DARK ? 0.24 : 0.12,
            rolePillBackgroundColor:
              f.A.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve(e).hex(),
          };
        }, [n, t])),
      O = N || g ? C?.overlaySyncedWithUserTheme : C?.overlay;
    return {
      profileThemeStyle: (0, i.useMemo)(() => {
        if (null == I || null == m || null == C || null == O) return T;
        function e(e, t) {
          return (0, s.$k)(e, S, null, t);
        }
        return {
          "--profile-gradient-primary-color": e(I),
          "--profile-gradient-secondary-color": e(m),
          "--profile-gradient-overlay-color": O,
          "--profile-gradient-button-color": e((0, E.wg)(I)),
          "--profile-gradient-modal-background-color": e((0, E.v2)(I, m, N || g ? n : void 0)),
          ...(0, u.Zk)({
            enabled: !0,
            primaryColor: I,
            secondaryColor: m,
            isDarkTheme: (0, o.M)(n),
            textMixAmount: 25,
          }),
        };
      }, [I, m, C, O, N, g, n, S]),
      profileThemeClassName: a()((0, d.m)(n), null != r ? { [p[r]]: !0 } : void 0, {
        [_.Gc]: null != I,
        "custom-user-profile-theme": null != I,
        "profile-theme-synced-with-user-theme": null != I && (N || g),
      }),
    };
  }
}
