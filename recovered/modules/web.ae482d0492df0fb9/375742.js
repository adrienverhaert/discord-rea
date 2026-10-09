/* Recovered shipped factory. Module 375742.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4994714..4994914
 * Raw property SHA-256: 11fd01196f3c4ee135bcaa30d768eb812302f76d218b2b4403b535692093e11b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(327649),
    r = n(753070);
  function a(e, t, n, a) {
    let s = r.ZV.find((s) => s.fps === e && (0, i.A)(r.jQ.PRESET_CUSTOM, s.resolution, e, t, n, a));
    return s?.resolution ?? null;
  }
}
