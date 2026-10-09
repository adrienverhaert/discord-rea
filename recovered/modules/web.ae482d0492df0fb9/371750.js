/* Recovered shipped factory. Module 371750.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10066276..10066918
 * Raw property SHA-256: 82c4f69a217c289b5265c6fe08795b4db3116cc02acff14c2e45eaabc9361c78
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { FilterIcon: () => l });
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
        d: "M21 8.5a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1ZM18 13a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1ZM15 17.5a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1Z",
        className: d,
      }),
    });
  }
}
