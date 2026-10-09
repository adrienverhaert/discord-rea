/* Recovered shipped factory. Module 108822.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4420153..4420663
 * Raw property SHA-256: 908c6c70f4f98bb7b0f1eef65f64df5341051682714ed437fd2cc59a6ec25124
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => A });
  var i = n(17928),
    r = n(73153),
    a = n(736056),
    s = n(710195);
  (0, n(945810).mj)({
    name: "2026-03-debug-experiment",
    kind: "user",
    defaultConfig: {},
    variations: { 1: {}, 2: {} },
  });
  var l = n(99066),
    o = n(840251),
    d = n(688151);
  let c = [l.t4],
    u = new o.E(c, d.$G.CONNECTION_OPEN, { location: "app open" });
  function _() {
    u.trigger();
  }
  class E extends i.Ay.Store {
    static displayName = "ExperimentTriggerPointStore";
    constructor() {
      super(r.h, { CONNECTION_OPEN: _ }, r.A.Early);
    }
    initialize() {
      this.waitFor(a.A, s.A);
    }
  }
  let A = new E();
}
