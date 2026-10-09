/* Recovered shipped factory. Module 353835.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9525112..9525843
 * Raw property SHA-256: b378044825caa12215ed03c1e2395c827e5f3b822917060004f5b7d35f0f0af5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(19575);
  let r = {
    clearNavigationHistory() {
      i.Ay.clearNavigationHistory();
    },
    flushDNSCache() {
      i.Ay.flushDNSCache();
    },
    flushCookies: () => i.Ay.flushCookies(),
    setApplicationBackgroundColor(e) {
      i.Ay.setApplicationBackgroundColor(e);
    },
    setZoomFactor: (e) => i.Ay.setZoomFactor(e),
    focus(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      i.Ay.focus(e, t);
    },
    submitLiveCrashReport: (e) => i.Ay.submitLiveCrashReport(e),
    getPidFromDesktopSource: (e) => i.Ay.getPidFromDesktopSource(e),
    getAudioPid: (e) => i.Ay.getAudioPid(e),
    generateSessionFromPid: (e) => i.Ay.generateSessionFromPid(e),
    getAppHardwareAccelerationEnabled: () => i.Ay.getEnableHardwareAcceleration(),
    getDiscordIsElevated: () => i.Ay.getDiscordIsElevated(),
  };
}
