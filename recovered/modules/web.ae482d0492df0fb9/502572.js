/* Recovered shipped factory. Module 502572.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 809595..810110
 * Raw property SHA-256: 67b67d312c8ae8b368cf0a5afd4e1269af2152f1757c4fbfa385fc33ffc9d76f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(477900),
    r = n(582128),
    a = n(900002);
  function s(e) {
    let { mouseLeaveDelay: t = 100, ...n } = e,
      { children: s, className: l, ...o } = n,
      d = r.useRef(0),
      [c, u] = r.useState(!1);
    return (0, i.jsx)("div", {
      className: l,
      onMouseEnter:
        0 !== t
          ? function () {
              (clearTimeout(d.current), u(!0));
            }
          : () => {},
      onMouseLeave:
        0 !== t
          ? function () {
              (clearTimeout(d.current), (d.current = setTimeout(() => u(!1), t)));
            }
          : () => {},
      children: (0, i.jsx)(a.ST, {
        "data-migration-pending": !0,
        forceOpen: c,
        disableTooltipPointerEvents: !1,
        ...o,
        children: s,
      }),
    });
  }
}
