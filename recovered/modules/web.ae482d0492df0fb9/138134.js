/* Recovered shipped factory. Module 138134.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10068512..10069231
 * Raw property SHA-256: 21b009d26312199801b39e94f133ea0b950e369a8cd5f5f8a2605c4ca390c12b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { FlagIcon: () => l });
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
        d: "M3 1a1 1 0 0 1 1 1v.82l8.67-1.45A2 2 0 0 1 15 3.35v1.47l5.67-.95A2 2 0 0 1 23 5.85v7.3a2 2 0 0 1-1.67 1.98l-9 1.5a2 2 0 0 1-1.78-.6c-.2-.21-.08-.54.18-.68a5.01 5.01 0 0 0 1.94-1.94c.18-.32-.1-.66-.46-.6L4 14.18V21a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Z",
        className: d,
      }),
    });
  }
}
