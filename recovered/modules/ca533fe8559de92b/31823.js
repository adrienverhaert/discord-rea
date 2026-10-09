/* Recovered shipped factory. Module 31823.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 244633..245078
 * Raw property SHA-256: e2b796cc680932dff93225a99972bfce7af6e5aae6ffe145170db4efe8bd7eff
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { V: () => u });
  var l = n(17928),
    i = n(933958),
    r = n(627363),
    a = n(20015),
    s = n(642639),
    o = n(652215);
  function u() {
    let e = (0, s.t4)((e) => e.applicationId),
      { data: t } = (0, r.YY)(e),
      n = null != t && t.isEmbedded && (0, a.n)(t, o.gfo.EMBEDDED_IAP);
    return {
      application: t,
      isEmbeddedIAP: n,
      activitySessionId: (0, l.bG)([i.Ay], () => {
        let t = Array.from(i.Ay.getSelfEmbeddedActivities().values()).find((t) => {
          let { applicationId: n } = t;
          return n === e;
        });
        return t?.compositeInstanceId;
      }),
    };
  }
}
