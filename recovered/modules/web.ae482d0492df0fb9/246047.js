/* Recovered shipped factory. Module 246047.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8388370..8388743
 * Raw property SHA-256: 5997c6d4bfa73561962061d89c65ed02a75db99fab28336888729a5584ae48aa
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { c: () => s, v: () => l });
  var i = n(477900);
  n(582128);
  var r = n(621466),
    a = n(607470);
  function s(e) {
    return null == e
      ? null
      : null != e.domNode
        ? e.domNode
        : (0, r.vq)(e, HTMLVideoElement)
          ? e
          : null;
  }
  let l = (e) => {
    let { ref: t, src: n, onSourceError: r, isScrubbing: s, children: l, ...o } = e;
    return (0, i.jsxs)(a.A, {
      ...o,
      ref: t,
      children: [l, null != n && (0, i.jsx)("source", { onError: r, src: n })],
    });
  };
}
