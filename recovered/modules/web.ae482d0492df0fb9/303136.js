/* Recovered shipped factory. Module 303136.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4046448..4046890
 * Raw property SHA-256: 4bd07c285e5318ecf2e4b69e90f02915111e32a4149df10e02b57f75530eb584
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(477900);
  n(582128);
  var r = n(17928),
    a = n(775602),
    s = n(607470);
  let l = function (e) {
    let {
        src: t,
        children: n,
        fallbackImage: l,
        className: o,
        preload: d,
        forceReducedMotion: c,
      } = e,
      u = (0, r.bG)([a.Ay], () => a.Ay.useReducedMotion) || c;
    return u && null != l
      ? (0, i.jsx)("img", { src: l, alt: "", className: o })
      : (0, i.jsx)(s.A, {
          muted: !0,
          autoPlay: !u,
          loop: !u,
          playsInline: !0,
          "aria-hidden": "true",
          src: t,
          className: o,
          preload: d,
          children: n,
        });
  };
}
