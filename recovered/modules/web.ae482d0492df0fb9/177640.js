/* Recovered shipped factory. Module 177640.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2860819..2861027
 * Raw property SHA-256: 0d4e208ecbd704afdce2df55993399eb718d568898e9a0648c7073e3186b76fc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(702841),
    r = n(287809);
  function a(e) {
    return (0, i.bG)(
      [r.default],
      () =>
        null != e &&
        e.isDM() &&
        1 === e.recipients.length &&
        r.default.getUser(e.recipients[0])?.bot === !0,
    );
  }
}
