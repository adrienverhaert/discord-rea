/* Recovered shipped factory. Module 241524.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2249426..2249757
 * Raw property SHA-256: ea0387e1e21ed1705a29a1a4aa32b731203200c5e75f8a0d38aa83249857af5d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(582128),
    r = n(267102);
  function a(e) {
    let { renderWindow: t } = (0, i.useContext)(r.Ay),
      [n, a] = (0, i.useState)(() => t.matchMedia(e)?.matches ?? !1);
    return (
      (0, i.useEffect)(() => {
        let n = t.matchMedia(e);
        function i(e) {
          a(e?.matches ?? !1);
        }
        return (i(n), n?.addListener(i), () => n?.removeListener(i));
      }, [e, t]),
      n
    );
  }
}
