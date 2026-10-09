/* Recovered shipped factory. Module 12470.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10317753..10318539
 * Raw property SHA-256: 4580289715032f0136b275824e3b6a484316caa8c9f4e0616cbb08350dc4a44f
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
          d: "M9 22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v3.59l4.3-4.3a1 1 0 0 1 1.4 1.42L4.42 21H8a1 1 0 0 1 1 1Z",
          className: d,
        }),
        (0, i.jsx)("path", {
          fill: "string" == typeof o ? o : o.css,
          d: "M19 22a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v6a1 1 0 1 0 2 0V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6a1 1 0 1 0 0 2h6Z",
          className: d,
        }),
      ],
    });
  }
}
