/* Recovered shipped factory. Module 812808.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6142652..6143017
 * Raw property SHA-256: 3a1f1b5b82ea2548c9a422d10f102ec74131f4bc32c3db1f8bf6e2cf4cc9b8d2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { B: () => o, G: () => l });
  var i = n(17928),
    r = n(153488),
    a = n(531685);
  n(595);
  var s = n(652215);
  function l() {
    var e, t;
    return (
      (e = (0, i.bG)([a.A], () => a.A.windowSize().width)),
      (t = (0, i.bG)([r.A], () => r.A.hasConsented(s.YAq.PERSONALIZATION))),
      e > 1200 && t
    );
  }
  function o() {
    var e, t;
    return (
      (e = a.A.windowSize().width),
      (t = r.A.hasConsented(s.YAq.PERSONALIZATION)),
      e > 1200 && t
    );
  }
}
