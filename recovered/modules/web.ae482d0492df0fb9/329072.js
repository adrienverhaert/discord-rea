/* Recovered shipped factory. Module 329072.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3185854..3187060
 * Raw property SHA-256: 1ad891bc37a24825ccb51e32f573f335ac902f1b87bde1bcccb077d5186727ae
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => g });
  var i = n(477900);
  n(582128);
  var r = n(284009),
    a = n.n(r),
    s = n(17928),
    l = n(980707),
    o = n(477782),
    d = n(820284),
    c = n(688810),
    u = n(270816),
    _ = n(287809),
    E = n(855187),
    A = n(625903),
    h = n(474397),
    f = n(780964),
    I = n(766075),
    p = n(652215),
    T = n(660183),
    m = n(731854);
  function g(e) {
    let { onClose: t, onSelect: n, minimal: r = !1, appContext: g, onInteraction: S } = e,
      { analyticsLocations: N } = (0, c.Ay)(),
      C = (0, s.bG)([_.default], () => {
        let e = _.default.getCurrentUser();
        return (a()(null != e, "VideoDeviceMenu: currentUser cannot be undefined"), e);
      }),
      O = (0, u.H)({ deviceType: m.oh.VIDEO_INPUT, analyticsLocations: N, asSubmenu: r }),
      R = (0, E.A)(C.id, g),
      L = (function (e) {
        let { analyticsLocations: t } = (0, c.Ay)();
        return (0, i.jsx)(o.Dr, {
          id: "video-settings",
          label: T.intl.string(T.t.LKzQSF),
          action: () => {
            ((0, I.openUserSettings)(f.X.CAMERA_CATEGORY, { analyticsLocations: t }),
              (0, h.A)(e, e === p.BRT.POPOUT));
          },
          icon: A.SettingsIcon,
          leadingAccessory: { type: "icon", icon: A.SettingsIcon },
        });
      })(g);
    return (0, i.jsx)(d.A, {
      object: p.ZSU.CONTEXT_MENU,
      children: (0, i.jsxs)(l.W, {
        "data-menu-migrated": !0,
        onClose: t,
        navId: "video-device-context",
        variant: "fixed",
        "aria-label": T.intl.string(T.t.F122Gz),
        onSelect: n,
        onInteraction: S,
        children: [O, (0, i.jsxs)(o.rX, { children: [R, r ? L : null] })],
      }),
    });
  }
}
