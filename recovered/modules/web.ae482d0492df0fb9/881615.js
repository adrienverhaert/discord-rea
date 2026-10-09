/* Recovered shipped factory. Module 881615.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2770280..2770972
 * Raw property SHA-256: 363cb73e344cbb9e7b94bc9c058570e770007f9b5e65d6fa76052bb288d69564
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Db: () => u, sN: () => c });
  var i = n(132500),
    r = n(73153),
    a = n(927813),
    s = n(38405),
    l = n(604594);
  let o = 12 * a.A.Millis.HOUR,
    d = null;
  function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = Date.now();
    return (
      null == d ||
      (function (e) {
        let t = Date.now();
        if (t < e.createdAtTimestamp)
          return (
            s.A.addBreadcrumb({
              category: "ad",
              message: `future facing timestamp Date.now(): ${t}, initialized timestamp: ${e.createdAtTimestamp}`,
            }),
            !0
          );
        let n = t - e.lastUsedTimestamp > l.jj,
          i = t - e.createdAtTimestamp > o;
        return n || i;
      })(d)
        ? ((d = { uuid: (0, i.A)(), createdAtTimestamp: t, lastUsedTimestamp: t, version: l.Ir }),
          r.h.dispatch({ type: "AD_SESSION_RESET" }))
        : e && (d.lastUsedTimestamp = t),
      d
    );
  }
  function u() {
    d = null;
  }
}
