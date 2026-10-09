/* Recovered shipped factory. Module 342073.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10313671..10314358
 * Raw property SHA-256: e67100801208bbf6825d5f80d1a76a6fea4c005ac7734cee5b6c61eb89e3dc41
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { L: () => l });
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
        d: "M7 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1ZM11 6a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0V6ZM1 8a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0V8ZM16 5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0V5ZM22 8a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z",
        className: d,
      }),
    });
  }
}
