/* Recovered shipped factory. Module 26430.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10137955..10138630
 * Raw property SHA-256: ea84945429b85c8cf4b6acfc16145f4739bbbdf289054d368053f37af2abfa32
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { _: () => l });
  var i = n(477900);
  n(582128);
  var r = n(661531),
    a = n(996682),
    s = n(27989);
  function l(e) {
    let {
        size: t = "md",
        width: n,
        height: l,
        color: o = r.A.colors.INTERACTIVE_ICON_DEFAULT,
        colorClass: d = "",
        ...c
      } = e,
      u = (0, s.J)(t),
      _ = u?.width ?? n,
      E = u?.height ?? l;
    return (0, i.jsx)("svg", {
      ...(0, a.A)(c),
      xmlns: "http://www.w3.org/2000/svg",
      width: _,
      height: E,
      fill: "none",
      viewBox: "0 0 24 24",
      children: (0, i.jsx)("path", {
        fill: "string" == typeof o ? o : o.css,
        d: "M14 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.41l-5.3 5.3a1 1 0 0 1-1.4-1.42L18.58 4H15a1 1 0 0 1-1-1ZM5.41 20H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v3.59l5.3-5.3a1 1 0 0 1 1.4 1.42L5.42 20Z",
        className: d,
      }),
    });
  }
}
