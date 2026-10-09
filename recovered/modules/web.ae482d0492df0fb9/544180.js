/* Recovered shipped factory. Module 544180.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9074781..9075285
 * Raw property SHA-256: eece172e80b55b9b1aacf3bac3fd9df65c7bdbf32c4c3bd8f4e934e3daeeb710
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(17928),
    r = n(73153),
    a = n(209489),
    s = n(652215);
  let l = s.wY_.UNKNOWN,
    o = s.NKC.UNKNOWN,
    d = null;
  function c(e) {
    ((l = null != e.type ? e.type : s.wY_.UNKNOWN),
      (o = e.effectiveSpeed ?? s.NKC.UNKNOWN),
      (d = e.serviceProvider),
      _.emitChange());
  }
  class u extends i.Ay.Store {
    static displayName = "NetworkStore";
    initialize() {
      (a.A.getNetworkInformation().then(c), a.A.addChangeCallback(c));
    }
    getType() {
      return l;
    }
    getEffectiveConnectionSpeed() {
      return o;
    }
    getServiceProvider() {
      return d;
    }
  }
  let _ = new u(r.h, {}),
    E = _;
}
