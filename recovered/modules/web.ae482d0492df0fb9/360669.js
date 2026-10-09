/* Recovered shipped factory. Module 360669.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10027820..10028582
 * Raw property SHA-256: 121419a5004cc8013abf73b8e19927f5751cbfbc4f7c3be6724c6645c244bb7c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { B: () => l });
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
        d: "M0 6c0-1.1 1.07-2 2.4-2h19.2c1.32 0 2.4.9 2.4 2v1H0V6ZM2.4 20C1.07 20 0 19.1 0 18v-8h24v8c0 1.1-1.08 2-2.4 2H2.4ZM18 12a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM3 13a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z",
        clipRule: "evenodd",
        className: d,
      }),
    });
  }
}
