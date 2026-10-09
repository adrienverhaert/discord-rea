/* Recovered shipped factory. Module 72755.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5859235..5860625
 * Raw property SHA-256: 020bc5417f8da5d2e3449edc81c9bcd59d1a5220d832ff5170d43b0bc30ef315
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => m });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(661531),
    o = n(97808),
    d = n(654107),
    c = n(707683);
  let u = function (e) {
    let { children: t, shouldAnimate: n } = e;
    return n
      ? (0, i.jsx)("div", {
          className: c.nw,
          children: (0, i.jsx)("div", { className: c.WH, children: t }),
        })
      : t;
  };
  var _ = n(543699),
    E = n(999291),
    A = n(920601),
    h = n(903209);
  let f = (0, n(945810).mj)({
    name: "2026-09-video-background-profile-fetch",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  var I = n(652215),
    p = n(996988),
    T = n(621647);
  let m = function (e) {
    let {
        style: t,
        src: n,
        backgroundSrc: a,
        userId: c,
        guildId: m,
        pulseSpeakingIndicator: g = !1,
        speaking: S = !1,
        ...N
      } = e,
      C = a ?? n,
      O = (0, d.Ay)(C, l.A.unsafe_rawColors.PRIMARY_800.css),
      R = f.useConfig({ location: "VideoBackground" }).enabled,
      L = (0, E.Ay)(c ?? I.dJq, m),
      y = (0, _.tM)(L?.themeColors?.[0]) ?? I.NJ8.DARK,
      { profileThemeStyle: D, profileThemeClassName: v } = (0, A.A)({
        theme: y,
        themeType: p.d.VIDEO_TILE_BACKGROUND,
        primaryColor: L?.themeColors?.[0] ?? null,
        secondaryColor: L?.themeColors?.[1] ?? null,
      }),
      b = L?.themeColors?.[0] != null && L?.themeColors?.[1] != null;
    if (
      (r.useEffect(() => {
        null != c && R && (0, h.A)(c, void 0, { guildId: m, dispatchWait: !0 });
      }, [R, c, m]),
      null == n)
    )
      return null;
    let M = (0, i.jsx)(o.eu, { className: T.R, src: n, ...N }),
      P = { ...t, backgroundColor: O };
    return (0, i.jsx)("div", {
      style: b ? { ...t, ...D } : { ...P },
      className: s()(T.T, { [v]: b }),
      children: g ? (0, i.jsx)(u, { shouldAnimate: S, children: M }) : M,
    });
  };
}
