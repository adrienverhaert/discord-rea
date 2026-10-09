/* Recovered shipped factory. Module 96607.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8255435..8255614
 * Raw property SHA-256: 1b42af6e006f5b2c43f650fa8aecb8cf4d7cfea1e15a40d3c334c5acb5bfe269
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(17928),
    r = n(287809);
  function a() {
    return (0, i.bG)([r.default], () => {
      let e = r.default.getCurrentUser();
      return e?.nsfwAllowed ?? null;
    });
  }
}
