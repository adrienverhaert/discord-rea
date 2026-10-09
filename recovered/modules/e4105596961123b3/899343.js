/* Recovered shipped factory. Module 899343.
 * Source: recovered/web/assets/e4105596961123b3.js
 * UTF-16 property offsets: 2088..2432
 * Raw property SHA-256: 8b384c1d2c362cfb975eabb7a217e13289ee983025516dd0f12849bf8011307b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, s, t) {
  t.d(s, { f: () => a });
  var n = t(582128),
    r = t(166532),
    i = t(566980);
  function a(e) {
    let {
        purchaseState: s,
        currentStep: t,
        initialScene: a,
        purchaseScene: l,
        errorScene: c,
        successScene: u,
      } = e,
      [o, d] = (0, n.useState)(a);
    return (
      (0, n.useEffect)(() => {
        s === i.h.PURCHASING ? d(l) : s === i.h.FAIL && d(c);
      }, [s, l, c]),
      (0, n.useEffect)(() => {
        t === r.pn.CONFIRM && d(u);
      }, [t, u]),
      [o, d]
    );
  }
}
