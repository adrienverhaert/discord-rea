/* Recovered shipped factory. Module 217284.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6088064..6088491
 * Raw property SHA-256: f85ce8b2b80a955b2899f050a29c256cda3c3e21ca9b6f43fc7ac924ef4e3ead
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t),
    n.d(t, {
      getKrispModel: () => r,
      setKrispModelOverride: () => s,
      setKrispSuppressionLevel: () => a,
    }));
  var i = n(19575);
  function r() {
    try {
      return i.Ay.requireModule("discord_krisp").getNcModelFilename();
    } catch (e) {
      return Promise.resolve(null);
    }
  }
  function a(e) {
    try {
      i.Ay.requireModule("discord_krisp").setSuppressionLevel?.(e);
    } catch (e) {}
  }
  function s(e) {
    try {
      i.Ay.requireModule("discord_krisp").setNcModel(e);
    } catch (e) {}
  }
}
