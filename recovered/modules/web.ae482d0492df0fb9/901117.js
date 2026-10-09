/* Recovered shipped factory. Module 901117.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9936451..9938026
 * Raw property SHA-256: 3a0dc8ef5210ff2113f17b42ce8a78fed12b4466b1c818205d55eaecdd33b659
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Z: () => l });
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
          d: "M16.48 13.71a1.1 1.1 0 0 1 2.04 0l.46 1.24c.19.5.57.88 1.07 1.07l1.24.46c.95.35.95 1.7 0 2.04l-1.24.46c-.5.19-.88.57-1.07 1.07l-.46 1.24a1.1 1.1 0 0 1-2.04 0l-.46-1.24a1.8 1.8 0 0 0-1.07-1.07l-1.24-.46a1.1 1.1 0 0 1 0-2.04l1.24-.46c.5-.19.88-.57 1.07-1.07l.46-1.24ZM5.86 13.27a.89.89 0 0 1 1.28 0l.75.77a.9.9 0 0 0 .54.26l1.06.12c.5.06.85.52.8 1.02l-.13 1.08c-.02.2.03.42.14.6l.56.92c.27.43.14 1-.28 1.26l-.9.58a.92.92 0 0 0-.37.48l-.36 1.02a.9.9 0 0 1-1.15.57l-1-.36a.89.89 0 0 0-.6 0l-1 .36a.9.9 0 0 1-1.15-.57l-.36-1.02a.92.92 0 0 0-.37-.48l-.9-.58a.93.93 0 0 1-.28-1.26l.56-.93c.11-.17.16-.38.14-.59l-.12-1.08c-.06-.5.3-.96.8-1.02l1.05-.12a.9.9 0 0 0 .54-.26l.75-.77ZM3.21 3.32A1.78 1.78 0 0 1 5.4 2.06l4.3 1.15a1.78 1.78 0 0 1 1.25 2.18l-1.15 4.3a1.78 1.78 0 0 1-2.18 1.25l-4.3-1.15A1.78 1.78 0 0 1 2.07 7.6l1.15-4.3Z",
          className: d,
        }),
        (0, i.jsx)("path", {
          fill: "string" == typeof o ? o : o.css,
          fillRule: "evenodd",
          d: "M18.72.56a2.5 2.5 0 0 1 2.5 2.5v.5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5v-.5a2.5 2.5 0 0 1 2.5-2.5Zm0 1.5a1 1 0 0 0-1 1v.5h2v-.5a1 1 0 0 0-1-1Z",
          clipRule: "evenodd",
          className: d,
        }),
      ],
    });
  }
}
