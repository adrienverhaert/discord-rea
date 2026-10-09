/* Recovered shipped factory. Module 955418.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2697748..2698122
 * Raw property SHA-256: 53faf3812f602970512529f0e4135b2d0adeb3d9b662435d103d4ed9d4975b72
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { EX: () => o, NO: () => c, SV: () => u, ny: () => d });
  let i = null,
    r = null,
    a = new Set();
  function s() {
    for (let e of a) e();
  }
  function l() {
    null != r && (clearTimeout(r), (r = null));
  }
  function o(e) {
    (l(), (i = { ...e }), (r = setTimeout(() => d(), 8e3)), s());
  }
  function d(e) {
    null != i && (null == e || i.iframeId === e) && (l(), (i = null), s());
  }
  function c() {
    return i;
  }
  function u(e) {
    return (
      a.add(e),
      () => {
        a.delete(e);
      }
    );
  }
}
