/* Recovered shipped factory. Module 692957.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2638308..2638575
 * Raw property SHA-256: 8616bcf92e43a89d5fc0ed8ac71ed0d1d2d2b89e4a914e88bf63654ecc09c49b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(587895);
  function r(e) {
    let { applicationId: t, activityConfigs: n, applications: r } = e,
      a = r?.find((e) => e.id === t) ?? i.A.getApplication(t),
      s = n.find((e) => e.application_id === t);
    return null == s || null == a ? null : { activity: s, application: a };
  }
}
