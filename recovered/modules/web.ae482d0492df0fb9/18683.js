/* Recovered shipped factory. Module 18683.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5702448..5703130
 * Raw property SHA-256: 444c476455eef743e24bab818049cf43017c0454db6affdc76ceed8628fbbe52
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(306173),
    r = n(52133),
    a = n(439372),
    s = n(945810),
    l = n(710195),
    o = n(892842);
  let d = null;
  function c() {
    if (!(0, i.xd)() || (0, o.hw)()) return;
    let e = {};
    for (let t of o.ML) {
      let n = t.getCurrentConfig({ autoTrackExposure: !1 });
      ((e[t.id] = n), t.trackExposureIfCachedConfigMatches(n));
    }
    (null != d && (0, r.A)(d, e)) || ((0, i.Ih)().flushToCache(JSON.stringify(e)), (d = e));
  }
  class u extends a.A {
    actions = {};
    stores = new Map().set(l.A, c);
    _initialize() {
      o.ML.forEach((e) => {
        e.setExperiment(
          (0, s.mj)({
            kind: "user",
            name: e.id,
            defaultConfig: { treatmentId: -1 },
            variations: Object.fromEntries(
              e.getTreatments().map((e) => {
                let { treatmentId: t } = e;
                return [t, { treatmentId: t }];
              }),
            ),
          }),
        );
      });
    }
    _terminate() {}
  }
  let _ = new u();
}
