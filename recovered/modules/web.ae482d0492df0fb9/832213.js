/* Recovered shipped factory. Module 832213.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9673182..9673591
 * Raw property SHA-256: 6c0dd59d5f2143c8d012a3703da18cbcef67fa1a4b42d13a3337c793f7317902
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { D: () => a, M: () => r });
  var i,
    r =
      (((i = {}).Unknown = "unknown"),
      (i.Main = "main"),
      (i.Renderer = "renderer"),
      (i.GPU = "gpu"),
      (i.Utility = "utility"),
      (i.Crashpad = "crashpad"),
      (i.Clips = "clips"),
      (i.Ndi = "ndi"),
      i);
  class a {
    cpuCoreCount;
    getSystemMetrics() {
      return Promise.resolve(null);
    }
    setShouldCollectHermesInstrumentedStats(e) {}
    getCurrentHermesInstrumentedStatsSummary() {}
    getCPUCoreCount() {
      return this.cpuCoreCount;
    }
  }
}
