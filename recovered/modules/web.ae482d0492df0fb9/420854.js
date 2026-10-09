/* Recovered shipped factory. Module 420854.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10280288..10281121
 * Raw property SHA-256: 7813e5ffcdf63ac5f452ce76891bd6198836aac118d2c6711875a03ff88824b4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { E: () => l });
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
        d: "M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-.13l.96 1.45a1 1 0 0 1-1.66 1.1L15.47 20H8.53l-1.7 2.55a1 1 0 0 1-1.67-1.1L6.13 20H6a3 3 0 0 1-3-3V5Zm5 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 5a1 1 0 0 1 1-1h5v8H6a1 1 0 0 1-1-1V5Zm8 7h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-5v8Z",
        clipRule: "evenodd",
        className: d,
      }),
    });
  }
}
