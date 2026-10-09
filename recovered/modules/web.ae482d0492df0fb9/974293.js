/* Recovered shipped factory. Module 974293.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3593278..3593623
 * Raw property SHA-256: fbebfd6182afdba7a4ef5811861ca4a324c9abb400718035fe76a0221365e02e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $i: () => r, aJ: () => a });
  let i = (0, n(945810).mj)({
    kind: "user",
    name: "2026-04-clips-v3-runtime",
    defaultConfig: { enableClipsV3ML: !1 },
    variations: { 1: { enableClipsV3ML: !1 }, 2: { enableClipsV3ML: !0 } },
  });
  function r(e) {
    return i.getConfig({ location: e }).enableClipsV3ML;
  }
  function a(e) {
    return i.useConfig({ location: e }).enableClipsV3ML;
  }
}
