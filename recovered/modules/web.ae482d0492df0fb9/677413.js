/* Recovered shipped factory. Module 677413.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7727337..7727537
 * Raw property SHA-256: b85ef8f320ec6e4006ebd06667940812b1c70bcc245a6b3016c1ec74d9571a59
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => a, U1: () => r, f5: () => i });
  let i = "@silent",
    r = RegExp(`^${i}(\\s|$)`);
  function a(e) {
    return null == e ? [!1, ""] : null == e.match(r) ? [!1, e] : [!0, e.substring(i.length).trim()];
  }
}
