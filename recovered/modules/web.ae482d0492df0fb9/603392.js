/* Recovered shipped factory. Module 603392.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10490168..10490503
 * Raw property SHA-256: 7da478d6c7cd177e1d8c721d631a03615e86a54138e2add3af8332edf3418616
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { r: () => s });
  var i = n(582128),
    r = n(844222),
    a = n(460890);
  function s(e, t) {
    let { theme: n, saturation: s, experiments: l } = (0, a.G9)(),
      { highContrastModeEnabled: o } = i.useContext(r.C),
      d = l?.enabledExperiments ?? [];
    return e.resolve({
      theme: t ?? n,
      saturation: s,
      enabledExperiments: d,
      density: "compact",
      highContrastModeEnabled: o,
    });
  }
}
