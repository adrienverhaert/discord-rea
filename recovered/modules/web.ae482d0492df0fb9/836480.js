/* Recovered shipped factory. Module 836480.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10022539..10023333
 * Raw property SHA-256: ca1897c65cf5a9014ce0a0f936f2a753855b924556c405ebb39835c6d67a7379
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { CompassIcon: () => l });
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
          d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
          className: d,
        }),
        (0, i.jsx)("path", {
          fill: "string" == typeof o ? o : o.css,
          fillRule: "evenodd",
          d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z",
          clipRule: "evenodd",
          className: d,
        }),
      ],
    });
  }
}
