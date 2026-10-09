/* Recovered shipped factory. Module 92259.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10136444..10137184
 * Raw property SHA-256: 8f9770ac99de0449540d9228188525ba358ed1296b16dac76fa767a5a9316a37
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { V: () => l });
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
          fillRule: "evenodd",
          d: "M15.62 17.03a9 9 0 1 1 1.41-1.41l4.68 4.67a1 1 0 0 1-1.42 1.42l-4.67-4.68ZM17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z",
          clipRule: "evenodd",
          className: d,
        }),
        (0, i.jsx)("path", {
          fill: "string" == typeof o ? o : o.css,
          d: "M6 10a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z",
          className: d,
        }),
      ],
    });
  }
}
