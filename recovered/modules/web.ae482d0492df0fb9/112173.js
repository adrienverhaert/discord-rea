/* Recovered shipped factory. Module 112173.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9946648..9947336
 * Raw property SHA-256: cda65c6e7717c5965282739ff4a7a9d3e77a1d7ece7c051e1ab7db6b44c8ad68
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { J: () => l });
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
        d: "M16.3 21.7a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0-1.4-1.4L18 18.58V3a1 1 0 1 0-2 0v15.59l-2.3-2.3a1 1 0 0 0-1.4 1.42l4 4ZM6.3 2.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L8 5.42V21a1 1 0 1 1-2 0V5.41l-2.3 2.3a1 1 0 0 1-1.4-1.42l4-4Z",
        className: d,
      }),
    });
  }
}
