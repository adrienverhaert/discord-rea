/* Recovered shipped factory. Module 514042.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10063282..10064058
 * Raw property SHA-256: 2821a35741919b83033bd4934551530c9a648904808465baf5be6c48cdc58ea4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { FileIcon: () => l });
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
          d: "M18 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h7.5c.28 0 .5.22.5.5V5a5 5 0 0 0 5 5h2.5c.28 0 .5.22.5.5V18a4 4 0 0 1-4 4Z",
          className: d,
        }),
        (0, i.jsx)("path", {
          fill: "string" == typeof o ? o : o.css,
          d: "M21.7 7.94c.01.03 0 .06-.04.06H19a3 3 0 0 1-3-3V2.34c0-.03.03-.05.06-.04a3 3 0 0 1 .82.58l4.24 4.24a3 3 0 0 1 .58.82Z",
          className: d,
        }),
      ],
    });
  }
}
