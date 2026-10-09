/* Recovered shipped factory. Module 947641.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9997072..9997708
 * Raw property SHA-256: 1bb7ee7889441e93c8367533658b6a98f33d2a2b513d8da8db32f7aec4260546
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { r: () => l });
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
        fillRule: "evenodd",
        d: "M22.06 4.94a1.5 1.5 0 0 1 0 2.12l-12 12a1.5 1.5 0 0 1-2.12 0l-6-6a1.5 1.5 0 0 1 2.12-2.12L9 15.88 19.94 4.94a1.5 1.5 0 0 1 2.12 0Z",
        clipRule: "evenodd",
        className: d,
      }),
    });
  }
}
