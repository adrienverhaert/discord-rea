/* Recovered shipped factory. Module 612324.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11655349..11655585
 * Raw property SHA-256: b448912014105aa7c67c56b625d64a287cc852b43e1379d3f3a00a4281321558
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(582128);
  function r() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return i.useCallback((e) => {
      t.forEach((t) => {
        null != t && ("function" == typeof t ? t(e) : (t.current = e));
      });
    }, t);
  }
}
