/* Recovered shipped factory. Module 540999.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8887056..8887774
 * Raw property SHA-256: b0d0b0348e86163f565333863d425712662fc63cf3667614416338465d60e7b6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(17928),
    r = n(73153),
    a = n(572009),
    s = n(71393),
    l = n(287809),
    o = n(688151),
    d = n(115093);
  let c = "production" === d.B.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === d.B.STAGING;
  function u() {
    c = (0, a.I9)(l.default.getCurrentUser());
  }
  class _ extends i.Ay.Store {
    static displayName = "DeveloperExperimentStore";
    initialize() {
      (this.waitFor(l.default, s.A),
        Object.defineProperties(this, {
          isDeveloper: { configurable: !1, get: () => c, set: () => {} },
        }),
        u(),
        setTimeout(() => Object.freeze(this)));
    }
    getExperimentDescriptor() {
      return c
        ? {
            type: "developer",
            name: "discord_dev_testing",
            revision: 1,
            override: !0,
            bucket: o.RE.TREATMENT_1,
          }
        : null;
    }
  }
  let E = new _(r.h, { CONNECTION_OPEN: u, OVERLAY_INITIALIZE: u, CURRENT_USER_UPDATE: u });
}
