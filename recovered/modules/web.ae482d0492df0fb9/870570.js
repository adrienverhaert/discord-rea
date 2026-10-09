/* Recovered shipped factory. Module 870570.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9243046..9243348
 * Raw property SHA-256: 4865cb1209cf807f16cb9511cc9784211c5276b269d3e4f91d45d472e12772c4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153);
  let a = null;
  class s extends i.Ay.Store {
    static displayName = "UserRequiredActionStore";
    hasAction() {
      return null != a;
    }
    getAction() {
      return a;
    }
  }
  function l(e) {
    a = e.requiredAction;
  }
  let o = new s(r.h, { CONNECTION_OPEN: l, USER_REQUIRED_ACTION_UPDATE: l });
}
