/* Recovered shipped factory. Module 881373.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6776346..6776670
 * Raw property SHA-256: 418ff903cbbaafeb3b0b86c149c295696c7c8402f851478fb13cb0ef214fd8ae
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { K2: () => s, YS: () => o, aW: () => r, y$: () => a });
  var i = n(240921);
  let r = 30,
    a = 5,
    s = 5,
    l = (0, i.Ay)({
      kind: "user",
      name: "2026-03-l-3pp",
      defaultConfig: { enabled: !1 },
      variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
  function o(e) {
    let { location: t } = e,
      { enabled: n } = l.useConfig({ location: t });
    return { functionalityEnabled: n };
  }
}
