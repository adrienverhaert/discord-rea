/* Recovered shipped factory. Module 100767.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2489848..2490378
 * Raw property SHA-256: 9ca0e93ab7c5afd4a873ae3d43035b6692be2ab27e718893877b597466f9bc6b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $j: () => r, _X: () => l, aW: () => a, wz: () => s });
  var i = n(8880);
  let r = null != window.speechSynthesis;
  function a(e, t) {
    let n = e.replace(/(https?:\/\/[^\s]+)/g, (e) => {
      let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
      return null != t ? t[1] : "";
    });
    null != t &&
      n.length > t &&
      (n = (n = n.substring(0, t)).substring(0, Math.min(n.length, n.lastIndexOf(" "))));
    let r = new SpeechSynthesisUtterance(n);
    return ((r.rate = i.A.speechRate), r);
  }
  function s(e, t) {
    r && ((e.voice = t), speechSynthesis.speak(e));
  }
  function l() {
    r && speechSynthesis.cancel();
  }
}
