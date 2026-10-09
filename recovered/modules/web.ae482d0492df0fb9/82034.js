/* Recovered shipped factory. Module 82034.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9926412..9927590
 * Raw property SHA-256: 2f7d9d4278ca2d70d7bf148cd44a76e5d8417b6b80c2d5a274b9d9c3a1e27954
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { K: () => l });
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
          d: "M12 3a9 9 0 0 0-7.47 14.03c.28.41.28.97-.06 1.35-.4.45-1.12.44-1.47-.05a11 11 0 1 1 18 0c-.35.5-1.06.5-1.47.05a1.1 1.1 0 0 1-.06-1.35A9 9 0 0 0 12 3Z",
          className: d,
        }),
        (0, i.jsx)("path", {
          fill: "string" == typeof o ? o : o.css,
          d: "M18.25 15.15c-.3.58-1.07.62-1.5.13a1.2 1.2 0 0 1-.16-1.29A4.98 4.98 0 0 0 12 7a5 5 0 0 0-4.59 7c.19.42.16.93-.15 1.28-.44.49-1.22.45-1.51-.13a7 7 0 1 1 12.5 0Z",
          className: d,
        }),
        (0, i.jsx)("path", {
          fill: "string" == typeof o ? o : o.css,
          d: "M14.99 12.3c-.04.38-.5.47-.76.19a3.05 3.05 0 0 0-.25-.25l-.3-.27c-.5-.46-1.04-.97-1.68-.97-.64 0-1.19.5-1.68.97l-.3.27-.25.25c-.26.28-.72.2-.76-.19L9 12a3 3 0 1 1 5.99.3ZM12.74 13.83a1 1 0 0 0-1.48 0l-6.76 7.5A1 1 0 0 0 5.25 23h13.5a1 1 0 0 0 .75-1.67l-6.76-7.5Z",
          className: d,
        }),
      ],
    });
  }
}
