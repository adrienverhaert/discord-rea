/* Recovered shipped factory. Module 304162.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5880916..5881246
 * Raw property SHA-256: 1bfd7437c21b5c8bef4802c0c17037010eb9d68796d2ed1bf57a5b0dfdb73301
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A8: () => r, et: () => s, m3: () => a });
  var i = n(59318);
  let r = 4;
  function a(e) {
    if (null == e) return;
    let { thumbnail: t, image: n } = e;
    return null != t ? (t.proxy_url ?? t.url) : null != n ? (n.proxy_url ?? n.url) : void 0;
  }
  function s(e) {
    if (null == e) return;
    let { url: t, proxy_url: n } = e;
    return null != t && null != n ? ((0, i.r1)(t) ? `${n}?format=webp` : n) : t;
  }
}
