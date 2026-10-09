/* Recovered shipped factory. Module 747773.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1177618..1177958
 * Raw property SHA-256: 3bac3ed2a340bb61fc6977cc6c42ff17e4e7f1f2ef3b3f7d80681d7bf97c5db5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  function n(e, t) {
    if (!e) return !1;
    let r = window.getComputedStyle(e),
      n = document.scrollingElement || document.documentElement,
      i = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
    return (
      e === n && "hidden" !== r.overflow && (i = !0),
      i && t && (i = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth),
      i
    );
  }
  r.d(t, { o: () => n });
}
