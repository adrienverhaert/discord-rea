/* Recovered shipped factory. Module 815021.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9897067..9897379
 * Raw property SHA-256: 9b805f9cb182d807db1a2d539b166a6b8fabae390b1b2f9a83021f63e3f496aa
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { J: () => l });
  var i = n(477900);
  n(582128);
  var r = n(972213),
    a = n(460890),
    s = n(657718);
  function l(e) {
    let { variant: t = "icon-only", "aria-label": n, ...l } = e,
      { i18n: o } = (0, a.G9)();
    return (0, i.jsx)(s.S, {
      ...l,
      "aria-label": n ?? o.CLOSE_BUTTON_LABEL,
      icon: r.XLargeIcon,
      variant: t,
      text: void 0,
      fullWidth: !1,
    });
  }
}
