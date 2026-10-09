/* Recovered shipped factory. Module 48507.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10125176..10126188
 * Raw property SHA-256: 8f7e31275a55d81290247a243183c389a112212d7a21654d86a1676b5a38e9ed
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { x: () => l });
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
        d: "M13.23 18h-2.27l-.99-2.77H4.75L3.76 18H1.5L6.21 5.58h2.3L13.23 18ZM7.36 7.87 5.44 13.3h3.85L7.36 7.87ZM17 18.25c-.75 0-1.38-.22-1.88-.66a2.36 2.36 0 0 1-.76-1.88c0-1.9 1.73-2.86 5.18-2.9v-.25c0-.51-.15-.91-.45-1.2-.3-.29-.72-.43-1.26-.43a3.55 3.55 0 0 0-2.3.97l-.97-1.24c.4-.44.9-.77 1.5-1.01a4.95 4.95 0 0 1 1.88-.36c2.4 0 3.58 1.09 3.58 3.27V18h-1.81l-.17-1.06a3.01 3.01 0 0 1-2.53 1.31Zm.51-1.58c.78 0 1.46-.38 2.03-1.14v-1.4c-1.1.04-1.92.18-2.44.43-.53.24-.8.6-.8 1.06 0 .34.11.6.33.78.21.18.5.27.88.27Z",
        clipRule: "evenodd",
        className: d,
      }),
    });
  }
}
