/* Recovered shipped factory. Module 105600.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7451663..7451866
 * Raw property SHA-256: facaae82feaa02f37cc4961bcc335096ef4d1317e11a53c0fdf123d7bd64b5d0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { U: () => s });
  var i = n(636537),
    r = n(549022),
    a = n(652215);
  function s(e) {
    return (
      (0, r.jG)(e),
      i.Bo.post({ url: a.Rsh.CHANNEL_BLOCKED_USER_WARNING_ACK(e), rejectWithError: (0, i.fT)() })
    );
  }
}
