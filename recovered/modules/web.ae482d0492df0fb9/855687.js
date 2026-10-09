/* Recovered shipped factory. Module 855687.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5653237..5653436
 * Raw property SHA-256: 88db4daecf0defff932b65f1a0272b970ff7d2e368bfcc2fc9bece6d5d13b956
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { K: () => r });
  var i = n(652215);
  function r(e, t, n, r) {
    let a = n ?? t;
    return (
      (null != a && e.can(i.xBc.CREATE_INSTANT_INVITE, a)) ||
      (null != t && null != t.vanityURLCode) ||
      r?.invite_code != null
    );
  }
}
