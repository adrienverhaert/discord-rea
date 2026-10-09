/* Recovered shipped factory. Module 425557.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10272012..10273307
 * Raw property SHA-256: e931af188d17298b739bd5cb32a8913a54ed16d9dbf9ff66f7c0288583ac845c
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
          fillRule: "evenodd",
          d: "M19 15a2.5 2.5 0 0 1 2.5 2.5v.5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5v-.5A2.5 2.5 0 0 1 19 15Zm0 1.5a1 1 0 0 0-1 1v.5h2v-.5a1 1 0 0 0-1-1Z",
          clipRule: "evenodd",
          fill: "string" == typeof o ? o : o.css,
          className: d,
        }),
        (0, i.jsx)("path", {
          d: "M1.73 11.67a1 1 0 0 1 1.3-.13l9.55 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36a1 1 0 0 1 0 1.4l-.35.36a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7ZM5.51 10.03a1 1 0 0 1 1.39-.27l7.82 5.21c.22.15.29.44.18.68l-.1.24a1.45 1.45 0 0 1-.57.7.56.56 0 0 1-.64.03l-7.8-5.2a1 1 0 0 1-.28-1.39ZM8.34 7.2a1 1 0 0 1 1.39-.27l8.48 5.66c.24.15.08.46-.2.52-.46.1-.9.28-1.29.51-.17.1-.4.1-.57 0L8.62 8.58a1 1 0 0 1-.28-1.38ZM12.36 1.04a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8a1 1 0 0 1 0-1.41l.36-.36Z",
          fill: "string" == typeof o ? o : o.css,
          className: d,
        }),
      ],
    });
  }
}
