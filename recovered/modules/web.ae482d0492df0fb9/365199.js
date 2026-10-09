/* Recovered shipped factory. Module 365199.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10149506..10150130
 * Raw property SHA-256: 99e486373b84d5838a2e08fa7f940e7eb624048d3a02ece9159bafd69c640a57
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { MoreHorizontalIcon: () => l });
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
        d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
        clipRule: "evenodd",
        className: d,
      }),
    });
  }
}
