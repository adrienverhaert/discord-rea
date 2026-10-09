/* Recovered shipped factory. Module 500470.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6524773..6525061
 * Raw property SHA-256: 0ebde5c3e14bc5f0021f3a4fcdc2cbdcacf410f073952cb581092f6e7ab90669
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { k: () => l, x: () => s });
  var i = n(702841),
    r = n(287809),
    a = n(695515);
  function s() {
    let e = (0, i.bG)([a.A], () => a.A.getSelectedTeenId());
    return (0, i.bG)([r.default], () => (null !== e ? r.default.getUser(e) : void 0));
  }
  function l() {
    return (0, i.bG)([a.A], () => a.A.getSelectedTeenId());
  }
}
