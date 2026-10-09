/* Recovered shipped factory. Module 907085.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10050710..10051244
 * Raw property SHA-256: f4e69eb9d9a72843d9e5be3ceba282861cf3b4093b1e9746765be9a4f5c3ca63
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { b: () => l });
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
      children: (0, i.jsx)("rect", {
        width: "16",
        height: "16",
        x: "12",
        y: "1",
        fill: "string" == typeof o ? o : o.css,
        rx: "2",
        transform: "rotate(45 12 1)",
        className: d,
      }),
    });
  }
}
