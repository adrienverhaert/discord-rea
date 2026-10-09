/* Recovered shipped factory. Module 326337.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5974144..5974650
 * Raw property SHA-256: 14ed5a872eeb714d039d841c4a3ce95bf71937057fad117d4c406b50944f6210
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { I: () => c, h: () => d });
  var i = n(17928),
    r = n(775602),
    a = n(885386),
    s = n(531685),
    l = n(652215);
  function o(e, t, n) {
    var i;
    return (
      (i = Math.ceil(1.05 * Math.ceil(e / ((t ? 65 : 91) * (n / l.hH7.FONT_SIZE_DEFAULT))))),
      Math.max(10, Math.min(l.EMb, i))
    );
  }
  function d() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    let e = Math.max(s.A.windowSize().height - 145, 400),
      t = r.Ay.fontSize;
    return o(e, a.hH.getSetting(), t);
  }
  function c(e, t) {
    return o(
      (0, i.bG)([s.A], () => Math.max(s.A.windowSize().height - 145, 400)),
      e,
      t,
    );
  }
}
