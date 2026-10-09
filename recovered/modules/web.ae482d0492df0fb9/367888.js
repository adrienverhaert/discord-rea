/* Recovered shipped factory. Module 367888.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6694877..6695394
 * Raw property SHA-256: 8f7edefdb984443169bc4007687329e36343626b70a0e55ea977f9f5abdd4511
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { _1: () => r, a9: () => a });
  var i = n(202541);
  function r(e) {
    return e.find((e) => {
      let t = i.hd[e.planId];
      return null != t && null != t.premiumType;
    });
  }
  function a(e, t, n) {
    let a = r(e);
    if (null == a) {
      if (e.length > 0) {
        let r = i.hd[e[0].planId];
        ((t = r.interval), (n = r.intervalCount));
      }
      return (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (
          Object.keys(i.hd).find((n) => {
            let r = i.hd[n];
            return null != r && r.skuId === i.pe.NONE && r.interval === e && r.intervalCount === t;
          }) ?? i.gD.NONE_MONTH
        );
      })(t, n);
    }
    return a.planId;
  }
}
