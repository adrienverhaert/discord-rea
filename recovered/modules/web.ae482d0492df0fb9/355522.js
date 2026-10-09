/* Recovered shipped factory. Module 355522.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9950770..9951669
 * Raw property SHA-256: 9ca34397099f4336d7385ea0b63cc64c1cd91953cf59982e08550b5a1fdda838
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { M: () => l });
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
          d: "M9 15H8v-4h1v4ZM12 11a1 1 0 0 1 1 1v3h-2v-3a1 1 0 0 1 1-1ZM16 15h-1v-4h1v4Z",
          className: d,
        }),
        (0, i.jsx)("path", {
          fill: "string" == typeof o ? o : o.css,
          fillRule: "evenodd",
          d: "M21.6 4c1.32 0 2.4.9 2.4 2v12c0 1.1-1.08 2-2.4 2H2.4C1.08 20 0 19.1 0 18V6c0-1.1 1.08-2 2.4-2h19.2Zm-9.18 3.15c-.27-.1-.57-.1-.84 0L4.45 9.7a.67.67 0 0 0 .22 1.3H6v4a1 1 0 0 0-1 1v1h14v-1a1 1 0 0 0-.9-1H18v-4h1.33a.67.67 0 0 0 .22-1.3l-7.13-2.55Z",
          clipRule: "evenodd",
          className: d,
        }),
      ],
    });
  }
}
