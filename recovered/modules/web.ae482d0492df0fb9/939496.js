/* Recovered shipped factory. Module 939496.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8069432..8069950
 * Raw property SHA-256: 67c4d639a9539bebded7c140a15db470fbc43aa6d8459696579b3d5e7e6f36c0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { E: () => d, U: () => o });
  var i = n(477900),
    r = n(582128),
    a = n(677313),
    s = n(363195);
  let l = r.createContext({
    theme: s.A.themePreferenceForSystemTheme((0, a.A)()),
    themeType: null,
    primaryColor: null,
    secondaryColor: null,
    userId: null,
  });
  function o(e) {
    let { theme: t, themeType: n, primaryColor: a, secondaryColor: s, userId: o, children: d } = e,
      c = r.useMemo(
        () => ({ theme: t, themeType: n, primaryColor: a, secondaryColor: s, userId: o }),
        [t, n, a, s, o],
      );
    return (0, i.jsx)(l.Provider, { value: c, children: d });
  }
  function d() {
    return r.useContext(l);
  }
}
