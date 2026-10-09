/* Recovered shipped factory. Module 304296.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5010458..5011855
 * Raw property SHA-256: 64bea9e2fb642227ceed3a1655583fccbf645cc41db319982a85fbb5f1f9f7b8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => f });
  var i = n(17928),
    r = n(73153),
    a = n(723702),
    s = n(19575);
  let l = new Set(["nvidia"]);
  var o = n(299855),
    d = n.n(o);
  let c = { [a.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" } },
    u = { [a.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } },
    _ = !1,
    E = !0,
    A = !1;
  class h extends i.Ay.Store {
    static displayName = "StreamingCapabilitiesStore";
    initialize() {
      !a.isPlatformEmbedded ||
        __OVERLAY__ ||
        s.Ay.getGPUDriverVersions().then((e) => {
          ((_ = (function (e) {
            let t = u[(0, a.getPlatform)()];
            if (null == t) return !1;
            for (let n of Object.keys(e)) {
              let i = e[n],
                r = t[n];
              if (null == i || null == r || null != i.error) continue;
              let a = `${i.major ?? 0}.${i.minor ?? 0}.0`;
              if (!d().satisfies(a, r)) return !0;
            }
            return !1;
          })(e)),
            (E = (function (e) {
              for (let t of Object.keys(e)) {
                let n = e[t];
                if (null != n && null == n.error && l.has(t)) return !0;
              }
              return !1;
            })(e)),
            (A = (function (e) {
              let t = c[(0, a.getPlatform)()];
              if (null == t) return !1;
              for (let n of Object.keys(e)) {
                let i = e[n],
                  r = t[n];
                if (null == i || null == r || null != i.error) continue;
                let a = `${i.major ?? 0}.${i.minor ?? 0}.0`;
                if (!d().satisfies(a, r)) return !0;
              }
              return !1;
            })(e)),
            this.emitChange());
        });
    }
    get GPUDriversOutdated() {
      return _;
    }
    get canUseHardwareAcceleration() {
      return E;
    }
    get problematicGPUDriver() {
      return A;
    }
    getState() {
      return { GPUDriversOutdated: _, canUseHardwareAcceleration: E, problematicGPUDriver: A };
    }
  }
  let f = new h(r.h, {
    OVERLAY_INITIALIZE: function (e) {
      let { streamingCapabilitiesStoreState: t } = e;
      ((_ = t.GPUDriversOutdated), (E = t.canUseHardwareAcceleration));
    },
  });
}
