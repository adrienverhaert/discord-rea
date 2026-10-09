/* Recovered shipped factory. Module 715641.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9949859..9950769
 * Raw property SHA-256: 19ea9796ed77d8035c3606186e53f9782e062b04664635e1b77d4ae8e2175063
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { b: () => l });
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
        d: "M4.6 4.52A3 3 0 0 1 7.54 2H19.9a2 2 0 0 1 1.97 2.32l-2.46 15.16A3 3 0 0 1 16.45 22H4.1a2 2 0 0 1-1.97-2.32L4.59 4.52ZM9 5a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1Zm3.91 5.63a.97.97 0 0 0-1.82 0l-.34.93a2 2 0 0 1-1.19 1.19l-.93.34a.97.97 0 0 0 0 1.82l.93.34a2 2 0 0 1 1.19 1.19l.34.93a.97.97 0 0 0 1.82 0l.34-.93a2 2 0 0 1 1.19-1.19l.93-.34a.97.97 0 0 0 0-1.82l-.93-.34a2 2 0 0 1-1.19-1.19l-.34-.93Z",
        clipRule: "evenodd",
        className: d,
      }),
    });
  }
}
