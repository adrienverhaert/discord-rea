/* Recovered shipped factory. Module 946356.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8068181..8069431
 * Raw property SHA-256: c3ecb89935014e22f76d5f842c658827098b1ccc82768e93899a2de332a5a015
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => A });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(86182),
    l = n(77157),
    o = n(875741),
    d = n(486020),
    c = n(101928),
    u = n(920601),
    _ = n(939496),
    E = n(52020);
  let A = Object.assign(
    function (e) {
      let {
          user: t,
          displayProfile: n,
          themeType: r,
          profileFrameSkuIdOverride: A,
          className: h,
          innerClassName: f,
          style: I,
          pendingThemeColors: p,
          themeOverride: T,
          children: m,
          isPrivate: g = !1,
          forceShowPremium: S = !1,
          forceUserTheme: N = !1,
          ref: C,
        } = e,
        {
          theme: O,
          primaryColor: R,
          secondaryColor: L,
        } = (0, c.A)({
          user: t,
          displayProfile: n,
          pendingThemeColors: p,
          isPreview: S,
          forceUserTheme: N,
        }),
        { profileThemeStyle: y, profileThemeClassName: D } = (0, u.A)({
          theme: T ?? O,
          themeType: r,
          primaryColor: R,
          secondaryColor: L,
          forceUserTheme: N,
        }),
        v = (0, l.A)(void 0 !== A ? A : n?.profileFrame?.skuId),
        { profileFrameStyle: b, profileFrameClassName: M } = (0, o.A)(v),
        P = (0, d.VI)(n?.banner);
      return (0, i.jsx)("div", {
        className: a()(E.A7, D, M, h, g && E.Gw, P && "has-animated-banner"),
        style: { ...y, ...b, ...I },
        ref: C,
        children: (0, i.jsx)("div", {
          className: a()(E.vW, f),
          children: (0, i.jsx)(s.w, {
            theme: T ?? O,
            children: (0, i.jsx)(_.U, {
              themeType: r,
              theme: T ?? O,
              primaryColor: R,
              secondaryColor: L,
              userId: t.id,
              children: m,
            }),
          }),
        }),
      });
    },
    {
      Overlay: function (e) {
        let { children: t, className: n, ref: r } = e;
        return (0, i.jsx)("div", { ref: r, className: a()(E.Lw, n), children: t });
      },
    },
  );
}
