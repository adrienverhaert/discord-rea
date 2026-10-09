/* Recovered shipped factory. Module 253390.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 363119..363683
 * Raw property SHA-256: f8e4ff7e4eb33384ba2564048564bf6bd2db5458a78329101033745996a4dd6b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { v: () => u });
  var l = n(284009),
    i = n.n(l),
    r = n(97352),
    a = n(158045),
    s = n(202541),
    o = n(652215);
  function u(e, t) {
    let n = r.A.get(e.planId);
    i()(null != n, "missing premium subscription plan");
    let l = r.A.getForSkuAndInterval((0, a.mH)(s.pe.GUILD), n.interval, n.intervalCount);
    i()(null != l, "missing premium guild plan");
    let u = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
      c = (e.status === o.Dmq.CANCELED ? 0 : (0, a.bx)(u)) + t,
      d = u.filter((e) => e.planId !== l.id);
    if (c < 0) throw Error("Invalid adjustment");
    return 0 === c ? d : [...d, { planId: l.id, quantity: c }];
  }
}
