/* Recovered shipped factory. Module 657043.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2581798..2582210
 * Raw property SHA-256: 5932cedafa23409ba594a7d40d5b3648bfea47c9c5017a7a9246fcb98654ceb0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { BX: () => r, KN: () => a });
  let i = (0, n(945810).mj)({
    name: "2026-09-a11y-chassis-target-size",
    kind: "user",
    defaultConfig: { enabled: !1, rtcLargerTarget: !1 },
    variations: {
      0: { enabled: !1, rtcLargerTarget: !1 },
      1: { enabled: !0, rtcLargerTarget: !1 },
      2: { enabled: !0, rtcLargerTarget: !0 },
    },
  });
  function r(e) {
    return i.useConfig({ location: e }).enabled;
  }
  function a(e) {
    return i.useConfig({ location: e }).rtcLargerTarget;
  }
}
