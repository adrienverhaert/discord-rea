/* Recovered shipped factory. Module 827341.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1099757..1100186
 * Raw property SHA-256: e8ebac375dada1fdc0fe9e683c2af66abc64e3a403e48ecfd3dbedfca8e03fab
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { $: () => a });
  var n = r(117530),
    i = r(361854),
    o = r(582128);
  function a(e, t) {
    let r = t?.isDisabled,
      [a, s] = (0, o.useState)(!1);
    return (
      (0, i.N)(() => {
        if (e?.current && !r) {
          let t = () => {
            e.current && s(!!(0, n.N$)(e.current, { tabbable: !0 }).nextNode());
          };
          t();
          let r = new MutationObserver(t);
          return (
            r.observe(e.current, {
              subtree: !0,
              childList: !0,
              attributes: !0,
              attributeFilter: ["tabIndex", "disabled"],
            }),
            () => {
              r.disconnect();
            }
          );
        }
      }),
      !r && a
    );
  }
}
