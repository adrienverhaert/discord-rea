/* Recovered shipped factory. Module 99677.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9988114..9988979
 * Raw property SHA-256: 948a1aca01913c66f7c4f1c04ae6d9fcec65e75d2415da4dc11be388fcc49195
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { t: () => l });
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
          d: "M12.2 22c.5-.01.66-.84.37-1.24A3 3 0 0 1 15 16h.46c.35 0 .6-.34.56-.69a3 3 0 0 1 5.1-2.43l.06.06c.29.28.77.12.8-.28L22 12a10 10 0 1 0-18.45 5.36c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22h10Z",
          fill: "string" == typeof o ? o : o.css,
          className: d,
        }),
        (0, i.jsx)("path", {
          d: "M19.7 14.3a1 1 0 0 0-1.4 1.4l.29.3 2 2H15a1 1 0 1 0 0 2h5.59l-2.3 2.3a1 1 0 0 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4l-2.57-2.58-1.43-1.43Z",
          fill: "string" == typeof o ? o : o.css,
          className: d,
        }),
      ],
    });
  }
}
