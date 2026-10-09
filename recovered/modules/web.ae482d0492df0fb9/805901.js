/* Recovered shipped factory. Module 805901.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 786151..786460
 * Raw property SHA-256: 3567c013c37b3382f8b01922f0f8c19096a01ddc53f390497b1f2bf7978fa6e6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { c: () => l });
  var i = n(477900),
    r = n(582128),
    a = n(202091),
    s = n(844222);
  function l(e) {
    let { shouldAnimate: t = "respect-motion-settings", ...n } = e,
      l = r.useContext(s.C).reducedMotion.enabled;
    return (0, i.jsx)(a.Spring, {
      ...n,
      immediate: !("animate-always" === t || ("respect-motion-settings" === t && !l)),
    });
  }
}
