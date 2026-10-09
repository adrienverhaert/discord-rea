/* Recovered shipped factory. Module 933832.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9997709..9998300
 * Raw property SHA-256: e238c4b61195061ce2cf829d1851022cddec978fed4dc4cd2ba0053480df267f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { CheckmarkLargeIcon: () => l });
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
        d: "M21.7 5.3a1 1 0 0 1 0 1.4l-12 12a1 1 0 0 1-1.4 0l-6-6a1 1 0 1 1 1.4-1.4L9 16.58l11.3-11.3a1 1 0 0 1 1.4 0Z",
        className: d,
      }),
    });
  }
}
