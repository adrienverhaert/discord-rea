/* Recovered shipped factory. Module 881636.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10000691..10001262
 * Raw property SHA-256: 8b61d73993eb1eed08005045bd49daf1abbafac5b631683d682c9a44649e90a7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { u: () => l });
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
        d: "M8.3 3.3a1 1 0 0 0 0 1.4l7.29 7.3-7.3 7.3a1 1 0 1 0 1.42 1.4l8-8a1 1 0 0 0 0-1.4l-8-8a1 1 0 0 0-1.42 0Z",
        className: d,
      }),
    });
  }
}
