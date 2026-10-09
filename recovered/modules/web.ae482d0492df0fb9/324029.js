/* Recovered shipped factory. Module 324029.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7283407..7284017
 * Raw property SHA-256: 1a25503ca42e839da0312dd785b439e262ec4562de4fc4a83678217e2608bea7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { JX: () => _, se: () => d, v_: () => c, xp: () => o, yR: () => u });
  var i = n(240899),
    r = n(19575),
    a = n(898335);
  let s = "" === r.Ay.releaseChannel ? "stable" : r.Ay.releaseChannel,
    l = (0, a.b)({
      name: "cs2",
      channel: s,
      isEnabled: () => i.A.getConfig({ location: "gsi config install" }).enableCs2Gsi,
      readToken: () => r.Ay.readCs2GsiToken(s),
      writeConfig: (e, t) => r.Ay.writeCs2GsiConfig(e, t, s),
      deleteConfig: () => r.Ay.deleteCs2GsiConfig(s),
      debugLogPayload: (e) => r.Ay.debugLogCs2GsiPayload(e),
    });
  function o(e) {
    return e === l.getGsiPath();
  }
  let d = l.ensureGsiConfigInstalled,
    c = l.registerGsiHandler,
    u = l.unregisterGsiHandler,
    _ = l.handleGsiRequest;
}
