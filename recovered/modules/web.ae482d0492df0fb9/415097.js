/* Recovered shipped factory. Module 415097.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5909614..5909915
 * Raw property SHA-256: cc3a62ebc54c3ea6e34d84cec737d4b5d327faef78ef708b576069f1bb73798e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Z: () => l });
  var i = n(776231),
    r = n(644447),
    a = n(515718),
    s = n(536763);
  function l(e, t) {
    if ("IMAGE" !== e.type) return;
    if (!(0, a.eJ)(e)) return void (0, i.yt)(e.url);
    let n = (0, r.E)({ proxyURL: e.proxyUrl, url: e.url });
    (0, s.A)({ src: n, width: e.width, height: e.height, hasMultiple: t, options: e });
  }
}
