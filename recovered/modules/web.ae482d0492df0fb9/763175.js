/* Recovered shipped factory. Module 763175.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9943745..9944324
 * Raw property SHA-256: 9732f045302ce2014ae80decd0e2bf2e8f3a8c7b2e1e18aec4c9f86802b2181d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { D: () => l });
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
        d: "M12.7 3.3a1 1 0 0 0-1.4 0l-8 8a1 1 0 1 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l6.3 6.3a1 1 0 0 0 1.4-1.42l-8-8Z",
        className: d,
      }),
    });
  }
}
