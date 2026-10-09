/* Recovered shipped factory. Module 456797.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9525844..9526103
 * Raw property SHA-256: 3c510ff2ca4ad37522345b8965657b2f2526550fe924d7880f4b05053c37e74a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e, t, n) {
    return new MouseEvent(e, {
      screenX: t,
      screenY: n,
      clientX: t,
      clientY: n,
      bubbles: !0,
      view: window,
    });
  }
  function r(e, t, n) {
    let i = document.elementFromPoint(t, n);
    if (null == i) throw Error();
    i.dispatchEvent(e);
  }
  n.d(t, { K: () => r, _: () => i });
}
