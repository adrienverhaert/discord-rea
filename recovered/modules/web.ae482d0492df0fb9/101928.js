/* Recovered shipped factory. Module 101928.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7981314..7982102
 * Raw property SHA-256: 35c27a2d27ccb2a370a0ed4d317d909f91c9028f0535d410ee8d5133c6683ba8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(317097),
    r = n(17928),
    a = n(374994),
    s = n(462887),
    l = n(736653),
    o = n(775602),
    d = n(654107),
    c = n(543699),
    u = n(837529),
    _ = n(652215);
  function E(e) {
    let {
        user: t,
        displayProfile: n,
        pendingThemeColors: E,
        pendingAvatarSrc: A,
        isPreview: h,
        forceUserTheme: f,
      } = e,
      I = (0, l.Ay)(),
      p = (0, u.Wd)(),
      T = (0, r.bG)([o.Ay], () => o.Ay.syncProfileThemeWithUserTheme),
      m = A ?? t?.getAvatarURL(n?.guildId, 80),
      g = (0, a.nt)("PRIMARY_530", { saturation: 1 }),
      [S, N] = (0, d.rh)(m, g, !1);
    if (null != p) return p;
    if (!n?.canEditThemes && !h) return { theme: I, primaryColor: null, secondaryColor: null };
    let C = n?.getPreviewThemeColors(E),
      O = C?.[0] ?? (0, i.LX)(S),
      R = C?.[1] ?? (0, i.LX)(N),
      L = T || f ? I : ((0, c.tM)(O) ?? I);
    return (
      L === _.NJ8.ASH && (0, s.M)(I) ? (L = I) : L === _.NJ8.ASH && (0, s.q)(I) && (L = _.NJ8.DARK),
      { theme: L, primaryColor: O, secondaryColor: R }
    );
  }
}
