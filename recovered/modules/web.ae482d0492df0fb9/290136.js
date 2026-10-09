/* Recovered shipped factory. Module 290136.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10008974..10009974
 * Raw property SHA-256: f7a07a6fc4fb42a78aaf30a414cef52a7b92f9a0f1a8f36cc63c2869eba7d9f0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { CircleQuestionIcon: () => l });
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
        secondaryColor: o = "transparent",
        secondaryColorClass: d = "",
        color: c = r.A.colors.INTERACTIVE_ICON_DEFAULT,
        colorClass: u = "",
        ..._
      } = e,
      E = (0, s.J)(t),
      A = E?.width ?? n,
      h = E?.height ?? l;
    return (0, i.jsxs)("svg", {
      ...(0, a.A)(_),
      xmlns: "http://www.w3.org/2000/svg",
      width: A,
      height: h,
      fill: "none",
      viewBox: "0 0 24 24",
      children: [
        (0, i.jsx)("circle", {
          cx: "12",
          cy: "12",
          r: "10",
          fill: "string" == typeof o ? o : o.css,
          className: d,
        }),
        (0, i.jsx)("path", {
          fill: "string" == typeof c ? c : c.css,
          fillRule: "evenodd",
          d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z",
          clipRule: "evenodd",
          className: u,
        }),
      ],
    });
  }
}
