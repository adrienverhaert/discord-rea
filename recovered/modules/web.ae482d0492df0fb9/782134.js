/* Recovered shipped factory. Module 782134.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10180334..10180918
 * Raw property SHA-256: 5fc3bdb254c0b39595e318c0a3309f93fd228c7ccfb47ce34e43763b5e8bfe6d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { PlayIcon: () => l });
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
        d: "M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z",
        className: d,
      }),
    });
  }
}
