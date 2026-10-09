/* Recovered shipped factory. Module 912051.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9799843..9800182
 * Raw property SHA-256: 6119e654ae7923f01ac7f67d6c6304458e0568e6f7784d63e657d0000a557f78
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  function r() {
    return (void 0 === i && (i = void 0 === Intl?.Segmenter ? null : new Intl.Segmenter()), i);
  }
  function a(e) {
    let t = r();
    if (null == t) return e.length;
    let n = t.segment(e),
      i = 0;
    for (let e of n) i += 1;
    return i;
  }
  function s(e) {
    let t = r();
    return null == t ? Array.from(e) : Array.from(t.segment(e), (e) => e.segment);
  }
  n.d(t, { W: () => a, p: () => s });
}
