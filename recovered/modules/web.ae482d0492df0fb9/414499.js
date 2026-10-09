/* Recovered shipped factory. Module 414499.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10018995..10019563
 * Raw property SHA-256: adc009468699ae83a2c3cc6973997a9027af7314d4581faea7619370165e7a8d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { h: () => l });
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
        d: "M14 4a5 5 0 0 1 5 5v.2A5.5 5.5 0 0 1 17.5 20H5a4 4 0 0 1-.85-7.9 4 4 0 0 1 5.18-4.87A5 5 0 0 1 14 4Z",
        className: d,
      }),
    });
  }
}
