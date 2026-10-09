/* Recovered shipped factory. Module 882733.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7790287..7790477
 * Raw property SHA-256: 7ed88971ba80e31d3491b41a0c283562efbc61af9cddef8fe17b49ff92db8be4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { k: () => r });
  var i = n(280450);
  function r(e) {
    let t = i.default.getId();
    return (
      null != t &&
      !!(e.removedMemberIds?.includes(t) || e.addedMembers?.some((e) => e.userId === t))
    );
  }
}
