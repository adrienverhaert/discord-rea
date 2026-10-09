/* Recovered shipped factory. Module 837529.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7982103..7982916
 * Raw property SHA-256: db760c8b0a34475bf6451d4b5ed418ba61f6a6b17f1e37fe12ab049f802787f9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Nx: () => c, Qq: () => u, Wd: () => d, Zt: () => o });
  var i = n(196765),
    r = n(462887),
    a = n(736653),
    s = n(543699),
    l = n(652215);
  let o = (0, i.v)()((e) => ({
    themeOverride: null,
    savedClientTheme: null,
    setThemeOverride: (t) => e({ themeOverride: t }),
    setSavedClientTheme: (t) => e({ savedClientTheme: t }),
  }));
  function d() {
    let e,
      t = o((e) => e.themeOverride),
      n = (0, a.Ay)();
    if (null == t) return null;
    let i = null,
      d = null;
    return (
      "nitro" === t.mode
        ? ((i = t.themeColors?.[0] ?? null),
          (d = t.themeColors?.[1] ?? null),
          (e = null != i && null != d ? ((0, s.tM)(i) ?? n) : n))
        : (e = t.themeType ?? n),
      e === l.NJ8.ASH && (0, r.M)(n) ? (e = n) : e === l.NJ8.ASH && (0, r.q)(n) && (e = l.NJ8.DARK),
      { theme: e, primaryColor: i, secondaryColor: d }
    );
  }
  function c() {
    let e = o((e) => e.themeOverride);
    return null != e && ("non-nitro" === e.mode || !0 === e.disableBanner);
  }
  function u() {
    let e = o((e) => e.themeOverride);
    return null != e && "non-nitro" === e.mode;
  }
}
