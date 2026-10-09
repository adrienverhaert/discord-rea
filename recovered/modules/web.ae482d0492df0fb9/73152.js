/* Recovered shipped factory. Module 73152.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10129274..10130223
 * Raw property SHA-256: d04d14d7eb74c361f1f075aad01464dec26a6a408b12fa67f5c96a3263872c6c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { E: () => l });
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
          d: "M11.8 3.75a5.98 5.98 0 0 1 8.98 7.85 1 1 0 0 1-1.6-1.21 3.98 3.98 0 0 0-5.97-5.22l-2.51 2.5a1 1 0 1 1-1.42-1.4l2.52-2.52ZM7.68 9.28a1 1 0 0 1 0 1.42L5.17 13.2a3.98 3.98 0 0 0 5.22 5.98 1 1 0 1 1 1.21 1.59 5.98 5.98 0 0 1-7.85-8.98l2.52-2.52a1 1 0 0 1 1.4 0Z",
          fill: "string" == typeof o ? o : o.css,
          className: d,
        }),
        (0, i.jsx)("path", {
          d: "M14.7 10.7a1 1 0 0 0-1.4-1.4l-4 4a1 1 0 1 0 1.4 1.4l4-4ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
          fill: "string" == typeof o ? o : o.css,
          className: d,
        }),
      ],
    });
  }
}
