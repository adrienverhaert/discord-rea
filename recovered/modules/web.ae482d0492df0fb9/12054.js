/* Recovered shipped factory. Module 12054.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9959764..9960536
 * Raw property SHA-256: 273af4cba96e126d7ca155a519f3593f9cc4d6f620f84567719b9552fccf14bf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { y: () => l });
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
        d: "M11.62 2.08a1 1 0 0 1 1.09.21l5 5a1 1 0 0 1-.09 1.5L13.6 12l4.02 3.22a1 1 0 0 1 .09 1.49l-5 5A1 1 0 0 1 11 21v-6.92l-3.38 2.7a1 1 0 0 1-1.24-1.56L10.4 12 6.38 8.78a1 1 0 0 1 1.24-1.56L11 9.92V3a1 1 0 0 1 .62-.92Zm1.38 12 2.5 2-2.5 2.5v-4.5Zm0-4.16v-4.5l2.5 2.5-2.5 2Z",
        clipRule: "evenodd",
        className: d,
      }),
    });
  }
}
