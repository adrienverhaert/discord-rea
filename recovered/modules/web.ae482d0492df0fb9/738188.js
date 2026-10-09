/* Recovered shipped factory. Module 738188.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10312905..10313670
 * Raw property SHA-256: 4ee406ced7bb16e2beae9b839376139fbb5f2d3e3be174573027980f19775265
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { WarningIcon: () => l });
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
        d: "M10 3.1a2.37 2.37 0 0 1 4 0l8.71 14.75c.84 1.41-.26 3.15-2 3.15H3.29c-1.74 0-2.84-1.74-2-3.15L9.99 3.1Zm3.25 14.65a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM13.06 14l.37-5.94a1 1 0 0 0-1-1.06h-.87a1 1 0 0 0-1 1.06l.38 5.94a1.06 1.06 0 0 0 2.12 0Z",
        clipRule: "evenodd",
        className: d,
      }),
    });
  }
}
