/* Recovered shipped factory. Module 526701.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10023334..10024095
 * Raw property SHA-256: f2247ce26bbbb61d7e0c6af4f58654b8879f2e6ea5db412e3f116472df45c5b0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { j: () => l });
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
        color: o = r.A.colors.ICON_FEEDBACK_WARNING,
        colorClass: d = "",
        ...c
      } = e,
      u = (0, s.J)(t),
      _ = u?.width ?? n,
      E = u?.height ?? l;
    return (0, i.jsxs)("svg", {
      ...(0, a.A)(c),
      xmlns: "http://www.w3.org/2000/svg",
      width: _,
      height: E,
      fill: "none",
      viewBox: "0 0 24 24",
      children: [
        (0, i.jsx)("path", {
          fill: "string" == typeof o ? o : o.css,
          d: "M3 7a1 1 0 0 0 0 2 12 12 0 0 1 12 12 1 1 0 1 0 2 0A14 14 0 0 0 3 7Z",
          className: d,
        }),
        (0, i.jsx)("path", {
          fill: "string" == typeof o ? o : o.css,
          d: "M3 12a1 1 0 1 0 0 2 7 7 0 0 1 7 7 1 1 0 1 0 2 0 9 9 0 0 0-9-9ZM2 17.83c0-.46.37-.83.83-.83C5.13 17 7 18.87 7 21.17c0 .46-.37.83-.83.83H3a1 1 0 0 1-1-1v-3.17Z",
          className: d,
        }),
      ],
    });
  }
}
