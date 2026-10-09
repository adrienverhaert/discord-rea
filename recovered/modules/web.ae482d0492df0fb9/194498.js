/* Recovered shipped factory. Module 194498.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2250564..2250801
 * Raw property SHA-256: 5b8c9713f84c24932f3d17a602dfdb46cbc8c8685bad284b4f85693986288d5c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(66455),
    r = n(964486);
  function a(e) {
    let t = (0, i.A)(e);
    (0, r.Ay)(() => {
      let e = requestAnimationFrame(function n() {
        (t.current?.(), (e = requestAnimationFrame(n)));
      });
      return () => cancelAnimationFrame(e);
    });
  }
}
