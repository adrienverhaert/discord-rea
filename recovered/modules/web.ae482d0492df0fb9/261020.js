/* Recovered shipped factory. Module 261020.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3994888..3995182
 * Raw property SHA-256: e36f9c2949c5e549154f113957a1b696f6f08c9a258e0ff065b821d941e4c4f6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C: () => s, n: () => l });
  var i = n(210528),
    r = n(723702),
    a = n(272984);
  function s(e) {
    let t = null;
    ((0, r.isDesktop)() || (t = window.open("", "_blank")),
      null != t ? (t.location.href = e) : window.open(e));
  }
  function l(e, t) {
    s(i.A.isProtocolRegistered() ? a.RQ.PLAYER_OPEN(e, t) : a.RQ.WEB_OPEN(e, t));
  }
}
