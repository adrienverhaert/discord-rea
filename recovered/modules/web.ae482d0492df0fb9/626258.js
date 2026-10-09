/* Recovered shipped factory. Module 626258.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9983930..9984876
 * Raw property SHA-256: 48e0b6ff38a53a4f1c399424005ab59a18098d9dfaea382e8bcbd2c771ed173e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
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
        d: "M4.46 5.03A4 4 0 0 1 8.34 2h7.32a4 4 0 0 1 3.88 3.03L20.78 10H22a1 1 0 1 1 0 2h-.54c.35.59.54 1.27.54 2v4a2 2 0 0 1-1 1.73V21a1 1 0 1 1-2 0v-1H5v1a1 1 0 1 1-2 0v-1.27A2 2 0 0 1 2 18v-4c0-.73.2-1.41.54-2H2a1 1 0 1 1 0-2h1.22l1.24-4.97Zm13.14.48L18.72 10H5.28L6.4 5.51A2 2 0 0 1 8.34 4h7.32a2 2 0 0 1 1.94 1.51ZM10 14a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Zm-6 1a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm14-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z",
        clipRule: "evenodd",
        className: d,
      }),
    });
  }
}
