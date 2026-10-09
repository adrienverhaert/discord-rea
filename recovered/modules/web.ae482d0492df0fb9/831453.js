/* Recovered shipped factory. Module 831453.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10204661..10205353
 * Raw property SHA-256: e3aa71b5dd043f79b4057637d98ea0effb48b45759031c00eceb9693b3f5dcd9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { H: () => l });
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
        d: "M8.3 1.3a1 1 0 0 0 0 1.4l.29.3H6a4 4 0 0 0-4 4v3a1 1 0 1 0 2 0V7c0-1.1.9-2 2-2h2.59l-.3.3a1 1 0 0 0 1.42 1.4l2-2a1 1 0 0 0 0-1.4l-2-2a1 1 0 0 0-1.42 0ZM22 11a3 3 0 0 0-3-3h-8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-8Z",
        className: d,
      }),
    });
  }
}
