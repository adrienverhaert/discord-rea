/* Recovered shipped factory. Module 451704.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7739327..7739736
 * Raw property SHA-256: 48e1c3e989be74aab8038325e8f32a58e9d4adacd72cce94b27fdd8526de29ae
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { getIsNativeSystemCpuTimesEnabled: () => s }));
  var i = n(945810),
    r = n(723702);
  let a = (0, i.mj)({
    name: "2026-10-desktop-game-perf",
    kind: "user",
    defaultConfig: { nativeSystemCpuTimes: !1 },
    variations: { 0: { nativeSystemCpuTimes: !1 }, 1: { nativeSystemCpuTimes: !0 } },
  });
  function s() {
    return (
      (0, r.isDesktop)() &&
      (0, r.isWindows)() &&
      a.getConfig({ location: "system_metrics_sample" }).nativeSystemCpuTimes
    );
  }
}
