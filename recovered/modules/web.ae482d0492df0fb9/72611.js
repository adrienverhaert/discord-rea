/* Recovered shipped factory. Module 72611.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7284018..7284633
 * Raw property SHA-256: a43a013847d0bfbf403f1d537302e9f31655ac44a0f42342d475591707a71a5e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $D: () => c, J9: () => o, US: () => u, Xw: () => _, eZ: () => d });
  var i = n(399091),
    r = n(19575),
    a = n(898335);
  let s = "" === r.Ay.releaseChannel ? "stable" : r.Ay.releaseChannel,
    l = (0, a.b)({
      name: "dota",
      channel: s,
      isEnabled: () => i.A.getConfig({ location: "gsi config install" }).enableDotaGsi,
      readToken: () => r.Ay.readDotaGsiToken(s),
      writeConfig: (e, t) => r.Ay.writeDotaGsiConfig(e, t, s),
      deleteConfig: () => r.Ay.deleteDotaGsiConfig(s),
      debugLogPayload: (e) => r.Ay.debugLogDotaGsiPayload(e),
    });
  function o(e) {
    return e === l.getGsiPath();
  }
  let d = l.ensureGsiConfigInstalled,
    c = l.registerGsiHandler,
    u = l.unregisterGsiHandler,
    _ = l.handleGsiRequest;
}
