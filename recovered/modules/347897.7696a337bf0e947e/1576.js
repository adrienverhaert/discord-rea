/* Recovered shipped factory. Module 1576.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1169469..1169896
 * Raw property SHA-256: 8eb53627785799d0f336fd3bed22e750c6febfe0019f95178785f9b5c54babaf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { EG: () => u, N9: () => o, au: () => a, j5: () => l });
  var n = r(644255),
    i = r(295551);
  function o(e) {
    return (0, n.lg)() ? e.altKey : e.ctrlKey;
  }
  function a(e, t) {
    let r = `[data-key="${CSS.escape(String(t))}"]`,
      n = e.current?.dataset.collection;
    return (n && (r = `[data-collection="${CSS.escape(n)}"]${r}`), e.current?.querySelector(r));
  }
  let s = new WeakMap();
  function l(e) {
    let t = (0, i.Bi)();
    return (s.set(e, t), t);
  }
  function u(e) {
    return s.get(e);
  }
}
