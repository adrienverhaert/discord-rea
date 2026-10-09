/* Recovered shipped factory. Module 303612.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 257109..257584
 * Raw property SHA-256: 8d5d47a73656b5a6c49b2b59b83aa060beb2fe4fc5940b1953b2edc1aca5b1dc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => u, y: () => c });
  var l = n(477900);
  n(582128);
  var i = n(23339),
    r = n(319060),
    a = n(628677),
    s = n(234914);
  let o = (0, i.xI)(r.A.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
  function u(e) {
    let { listing: t, imageSize: n, alt: i, ...r } = e,
      s = (0, a.R)(t, n);
    return (0, l.jsx)("img", { src: s, alt: i, ...r });
  }
  function c(e) {
    let { listing: t, aspectRatio: n = 16 / 9, height: i, ...r } = e,
      u = (i - 2 * o) * n,
      c = (0, a.R)(t, u),
      d = (0, a.R)(t, u, { shouldAnimate: !1 });
    return (0, l.jsx)(s.A, { src: c, backgroundSrc: d, aspectRatio: n, ...r });
  }
}
