/* Recovered shipped factory. Module 782603.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9953843..9954716
 * Raw property SHA-256: d613e21732bfe8951ff65138ae8bb45ecab968b909f50f82adf038f08286ad8d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { BellIcon: () => l });
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
        d: "M9.7 2.89c.18-.07.32-.24.37-.43a2 2 0 0 1 3.86 0c.05.2.19.36.38.43A7 7 0 0 1 19 9.5v2.09c0 .12.05.24.13.33l1.1 1.22a3 3 0 0 1 .77 2.01v.28c0 .67-.34 1.29-.95 1.56-1.31.6-4 1.51-8.05 1.51-4.05 0-6.74-.91-8.05-1.5-.61-.28-.95-.9-.95-1.57v-.28a3 3 0 0 1 .77-2l1.1-1.23a.5.5 0 0 0 .13-.33V9.5a7 7 0 0 1 4.7-6.61ZM9.18 19.84A.16.16 0 0 0 9 20a3 3 0 1 0 6 0c0-.1-.09-.17-.18-.16a24.86 24.86 0 0 1-5.64 0Z",
        className: d,
      }),
    });
  }
}
