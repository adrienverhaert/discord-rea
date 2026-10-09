/* Recovered shipped factory. Module 783977.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10066919..10067728
 * Raw property SHA-256: d6324da9d95275b542ee313dc360826805ab2b445ded5e4e64796162136a4b6c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { R: () => l });
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
        d: "M22 5a1 1 0 0 1-1 1h-8.2a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 5c0 .34.04.67.11 1H3a1 1 0 0 1 0-2h3.11A4.5 4.5 0 0 0 6 5ZM22 19a1 1 0 0 1-1 1h-8.2a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 19c0 .34.04.67.11 1H3a1 1 0 1 1 0-2h3.11A4.5 4.5 0 0 0 6 19ZM21 13a1 1 0 1 0 0-2h-3.2a2.5 2.5 0 1 0 0 2H21ZM11.11 13a4.5 4.5 0 0 1 0-2H3a1 1 0 1 0 0 2h8.11Z",
        className: d,
      }),
    });
  }
}
