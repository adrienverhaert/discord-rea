/* Recovered shipped factory. Module 515925.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10564868..10565556
 * Raw property SHA-256: 1764ecf71d157607f1ab38aaea0bedcf9c91e45ec6eb9272d4cf7b81754ae235
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    G1: () => d,
    Ih: () => s,
    Oy: () => u,
    kk: () => o,
    t7: () => c,
    tR: () => l,
    uU: () => A,
    uc: () => E,
    xd: () => r.x,
    xy: () => _,
  });
  var i = n(31436),
    r = n(279234);
  let a = null;
  function s() {
    return (0, i.Ay)().ExperimentCacher;
  }
  function l(e) {
    return (0, i.Ay)().BlockedDomainsStore.isBlockedDomain(e) ?? null;
  }
  function o(e) {
    (0, i.Ay)().BlockedDomainsStore.startFetchingBlockedDomains(e);
  }
  function d() {
    return "libdiscore logs are part of the main app logs";
  }
  function c(e, t) {
    return (0, i.Ay)().rustMultiply(e, t);
  }
  function u() {
    (0, i.Ay)().crash();
  }
  function _(e) {
    return (0, i.Ay)().generateLaunchSignature(e);
  }
  function E() {
    if (null != a) return a;
    try {
      return (a = new ((0, i.Ay)().FluxApi)());
    } catch {
      return null;
    }
  }
  function A() {
    return null;
  }
}
