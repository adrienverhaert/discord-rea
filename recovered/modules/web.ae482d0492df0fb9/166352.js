/* Recovered shipped factory. Module 166352.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2660398..2660582
 * Raw property SHA-256: 76d8d5b69e0993d78605d5ffd00b5bfd8aae3373b3e6923d08d3b040e58012ce
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(155718),
    r = n(723702);
  function a(e) {
    let t;
    return (
      (t = (0, r.isIOS)() ? i.Yl.IOS : (0, r.isAndroid)() ? i.Yl.ANDROID : i.Yl.WEB),
      e?.includes(t) ?? !1
    );
  }
}
