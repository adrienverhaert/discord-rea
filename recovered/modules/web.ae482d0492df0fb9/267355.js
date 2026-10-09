/* Recovered shipped factory. Module 267355.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6218227..6218589
 * Raw property SHA-256: 4f253561817277237829d007d5a633d22f96ce14749dfa875d2cda802549c2bc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { D: () => o, W: () => d });
  var i = n(567249),
    r = n(140069),
    a = n(233741),
    s = n(222506);
  n(672396);
  var l = n(392164);
  function o() {
    let e = a.A.getTargetPID();
    return (
      !(null == e || -1 === e || !a.A.isFocused(e) || s.A.isInputLocked(e)) &&
      !!i.A.getWindowVisible(l.f)
    );
  }
  function d(e) {
    if (__OVERLAY__) return !1;
    let t = r.A.getSelectedChannelId();
    return null != t && t === e && o();
  }
}
