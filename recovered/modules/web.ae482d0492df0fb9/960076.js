/* Recovered shipped factory. Module 960076.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2662044..2662258
 * Raw property SHA-256: d7c7d538c8307b2049a875b63f332182408c5d68c94360958be7ec2fb467f71b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(818023),
    r = n(652215);
  function a(e) {
    return e.type === r.$pd.STREAMING && null != e.url && i.yz.test(e.url);
  }
  function s(e) {
    return null != e && (Array.isArray(e) ? e.some(a) : a(e));
  }
}
