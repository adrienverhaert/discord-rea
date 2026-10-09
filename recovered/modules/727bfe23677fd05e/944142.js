/* Recovered shipped factory. Module 944142.
 * Source: recovered/web/assets/727bfe23677fd05e.js
 * UTF-16 property offsets: 37561..37851
 * Raw property SHA-256: ed76cd3c564d053c031fba43f24215e0fe75e9083ece061d8b2b0ad15469b820
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => a });
  var r = n(17928),
    s = n(73153);
  let i = new Map();
  class o extends r.Ay.Store {
    getLiveReload(e) {
      return i.get(e) ?? null;
    }
  }
  let a = new o(s.h, {
    CONJURE_LIVE_RELOAD_SET: function (e) {
      let { projectId: t, enabled: n, error: r, phase: s, step: o } = e;
      i.set(t, { enabled: n, error: r, phase: s, step: o });
    },
  });
}
