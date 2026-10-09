/* Recovered shipped factory. Module 831544.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10142384..10143115
 * Raw property SHA-256: 629064585c79abd240e328a006838d9080611f64647ebd9dddfe145d2a45b873
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { MicrophoneIcon: () => l });
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
          d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
          className: d,
        }),
        (0, i.jsx)("path", {
          fill: "string" == typeof o ? o : o.css,
          d: "M6 10a1 1 0 0 0-2 0 8 8 0 0 0 7 7.94V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
          className: d,
        }),
      ],
    });
  }
}
