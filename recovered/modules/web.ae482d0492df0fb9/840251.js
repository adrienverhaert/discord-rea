/* Recovered shipped factory. Module 840251.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4440266..4440802
 * Raw property SHA-256: 3de3ca211882fd16d6043e24660e621dd23ad92fb799cf39be32166db53ca1c7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { E: () => r });
  var i = n(710195);
  n(688151);
  class r {
    experiments;
    triggerPoint;
    params;
    constructor(e, t, n) {
      ((this.experiments = e), (this.triggerPoint = t), (this.params = n));
    }
    registeredExperimentIds() {
      return this.experiments.map((e) => e.definition.id);
    }
    trigger() {
      var e, t;
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (i.A.trackCommonTriggerPointExposures(this.params.location),
        this.triggerPoint,
        (e = this.experiments),
        (t = { ...this.params, ...n }),
        e.forEach((e) => {
          e.trackExposure(t);
        }));
    }
    getExperiments() {
      return this.experiments;
    }
  }
}
