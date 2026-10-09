/* Recovered shipped factory. Module 390486.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3149858..3150263
 * Raw property SHA-256: ee8894cf4b828b3162e90f8adcac4f3f01113f062ebfca3e7ed9bc63d3077f05
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { H: () => a, R: () => s });
  var i = n(506774);
  let r = "recentBuildOverrides";
  function a() {
    return (i.w.get(r) ?? []).filter((e) => null == e.exp || e.exp > Date.now());
  }
  function s(e, t) {
    if (null == t || null == e || null == e.targetBuildOverride.discord_web) return;
    let n = { id: e.targetBuildOverride.discord_web.id, payload: t, exp: Date.parse(e.expiresAt) },
      s = [n, ...a().filter((e) => n.id !== e.id)].slice(0, 5);
    i.w.set(r, s);
  }
}
