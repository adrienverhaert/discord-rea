/* Recovered shipped factory. Module 116891.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6793085..6793424
 * Raw property SHA-256: 947640da82d41aeea47b0b85b0e63b8639ebd6134a3b7acbd1f9619d6d40404d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { eT: () => s, fj: () => r });
  var i = n(240921);
  let r = "1080p",
    a = (0, i.Ay)({
      name: "2026-04-server-boost-copy-1440p",
      kind: "user",
      defaultConfig: { streamQualityMarketingResolution: r },
      variations: { 1: { streamQualityMarketingResolution: "1440p" } },
    });
  function s(e) {
    return a.getConfig({ location: e }).streamQualityMarketingResolution;
  }
}
