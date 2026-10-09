/* Recovered shipped factory. Module 38021.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10468336..10468920
 * Raw property SHA-256: 1777f853acb6a3eb81a65c70f161e8680625a12bbcd249a3b0bd819d0f12e98b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Dx: () => o, PQ: () => l, aS: () => d, dI: () => a, wR: () => s });
  var i = n(477900),
    r = n(582128);
  function a(e) {
    let t = JSON.stringify(e);
    return { ...e, key: t };
  }
  function s() {
    let e = r.useContext(o);
    if (null == e) throw Error("useThemeContext must be used within a ThemeContext.Provider");
    return e;
  }
  let l = a({
      theme: n(818348).NJ.LIGHT,
      primaryColor: null,
      secondaryColor: null,
      gradient: null,
      flags: 0,
      contrast: 1,
      saturation: 1,
      density: "compact",
      disableAdaptiveTheme: !1,
      reduceAdaptiveTheme: !1,
    }),
    o = r.createContext(l);
  function d(e) {
    let { children: t } = e,
      n = s();
    return (0, i.jsx)(i.Fragment, { children: t(n) });
  }
}
