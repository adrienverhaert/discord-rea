/* Recovered shipped factory. Module 439174.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7926035..7926539
 * Raw property SHA-256: 8bfe073e93374df05229e0664efd9dcd76df5700ae14b61f5f8923232f8c58b8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { UO: () => d, Xr: () => o, cZ: () => l, e0: () => s });
  var i = n(536637),
    r = n.n(i),
    a = n(202541);
  function s(e) {
    return a.VD[e];
  }
  function l(e) {
    return null == s(e) ? null : e;
  }
  function o(e, t) {
    if (null == t) return null;
    let n = s(e);
    if (null == n) return null;
    let i = r()(t);
    return (i.add(n.tenureReqNumMonths, "months"), i.add(1, "days"), i.toDate());
  }
  function d(e) {
    if (null == e) return null;
    let t = new Date().getTime();
    for (let n = a.sp.length - 1; n >= 0; n--) {
      let i = a.sp[n],
        r = o(i, e);
      if (null != r && t >= r.getTime()) return i;
    }
    return null;
  }
}
