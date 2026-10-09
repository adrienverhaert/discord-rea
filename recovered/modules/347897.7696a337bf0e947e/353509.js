/* Recovered shipped factory. Module 353509.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1045774..1046125
 * Raw property SHA-256: ad42f33446e7c99e4892fbcb1ab20fdfb779275a4496517c8a35df3777c88db7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { i: () => s, r: () => a });
  var n = r(407815),
    i = r(986664),
    o = r(582128);
  let a = (0, o.createContext)({ isSelected: !1 }),
    s = (0, o.forwardRef)(function (e, t) {
      [e, t] = (0, n.JT)(e, t, a);
      let { isSelected: r, ...s } = e;
      return o.createElement(i.e, {
        ...s,
        ref: t,
        className: e.className || "react-aria-SelectionIndicator",
        name: "SelectionIndicator",
        isVisible: r,
      });
    });
}
