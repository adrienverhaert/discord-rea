/* Recovered shipped factory. Module 664929.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2999151..2999688
 * Raw property SHA-256: 3aa20b67eb5f0772f6bbe5028b628290403423868c82be1b4aa57f120937a868
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Rg: () => l, Yn: () => d, a8: () => o });
  var i = n(392054),
    r = n(213404),
    a = n(834968),
    s = n(73510);
  function l(e) {
    return e.type === i.Hf.BUILT_IN ? a.A : r.A;
  }
  function o(e) {
    return `${e / 16}rem`;
  }
  function d(e, t) {
    let n = t,
      i = !1,
      r = t.indexOf(":");
    if (r >= 0) {
      let e = t.lastIndexOf(" ", r);
      e >= 0 ? ((t = t.substring(0, e)), (i = !0)) : (t = t.substring(0, r));
    } else t = t.substring(0, t.length);
    let a = t.split(" ", s.uA + 1);
    return (
      a.length > s.uA && ((i = !0), a.pop()),
      (t = a.join(" ")),
      (n.length > t.length || t.endsWith(" ")) && ((i = !0), (t = t.trimEnd())),
      { text: t, parts: a, hasSpaceTerminator: i }
    );
  }
}
