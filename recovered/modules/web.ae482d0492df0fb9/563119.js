/* Recovered shipped factory. Module 563119.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10247519..10248621
 * Raw property SHA-256: 75c1763473213484ea3566723ee0cd2ddd44136f00be6e4547b30f7d22288da8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $: () => l });
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
        d: "M21.3 15.3a1 1 0 1 1 1.4 1.4L20.42 19l2.3 2.3a1 1 0 1 1-1.42 1.4L19 20.42l-2.3 2.3a1 1 0 1 1-1.4-1.42L17.58 19l-2.3-2.3a1 1 0 1 1 1.42-1.4L19 17.58l2.3-2.3ZM13.86 19.86a3.01 3.01 0 0 0-.84 1.64c-.05.27-.27.5-.54.5H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h9.12c.22 0 .33.27.18.43l-.44.43ZM12 2a4 4 0 0 1 3.1 6.52c-.76.95-1.6 1.99-1.6 3.21V13h.87c.11 0 .2.09.2.2.01.08-.03.15-.1.2a3 3 0 0 0-1.07 4.15c.12.19 0 .45-.22.45H3a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h5.5v-1.27c0-1.22-.84-2.26-1.6-3.21A4 4 0 0 1 12 2ZM19 13c.32 0 .62.05.9.14.27.08.28.43.07.61l-.1.11-.52.5a.5.5 0 0 1-.7 0l-.51-.5a3 3 0 0 0-.85-.6.14.14 0 0 1-.09-.12c0-.08.07-.14.14-.14H19Z",
        className: d,
      }),
    });
  }
}
