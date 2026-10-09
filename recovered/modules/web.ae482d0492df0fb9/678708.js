/* Recovered shipped factory. Module 678708.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10070776..10071350
 * Raw property SHA-256: c8ff74cd886d9a04b7d8cdebf8fc6ab14f93dfcc8286a6e3ef1bec23448e6d96
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { FolderIcon: () => l });
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
        d: "M2 5a3 3 0 0 1 3-3h3.93a2 2 0 0 1 1.66.9L12 5h7a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z",
        className: d,
      }),
    });
  }
}
