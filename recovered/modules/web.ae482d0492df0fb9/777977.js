/* Recovered shipped factory. Module 777977.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2698123..2698409
 * Raw property SHA-256: 3412c40cdcfff19999960c9fea5810296f1bf8c7189b09cd11591a5da08fa59f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $P: () => d, Eh: () => o, OR: () => l, Ps: () => s });
  let i = null,
    r = new Set();
  function a() {
    for (let e of r) e();
  }
  function s(e) {
    ((i = { ...e }), a());
  }
  function l(e) {
    null != i && (null == e || i.iframeId === e) && ((i = null), a());
  }
  function o() {
    return i;
  }
  function d(e) {
    return (
      r.add(e),
      () => {
        r.delete(e);
      }
    );
  }
}
