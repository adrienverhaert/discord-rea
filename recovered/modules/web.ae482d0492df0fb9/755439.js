/* Recovered shipped factory. Module 755439.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9334937..9335551
 * Raw property SHA-256: fbbabbbf8be70c1cd091e3dde2600b55708fb1fd2b7019d3c7dee484f036e2f2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(17928),
    r = n(73153),
    a = n(613057);
  let s = null,
    l = [
      a.Hi.REDISTRIBUTABLE_INSTALL_FAILED,
      a.Hi.POST_INSTALL_FAILED,
      a.Hi.POST_INSTALL_CANCELLED,
    ],
    o = [
      a.Hi.APPLICATION_NOT_FOUND,
      a.Hi.APPLICATION_LOAD_FAILED,
      a.Hi.INTERRUPTED,
      a.Hi.DESERIALIZATION_FAILED,
    ];
  class d extends i.Ay.Store {
    static displayName = "DispatchApplicationErrorStore";
    getLastError() {
      return s;
    }
  }
  let c = new d(r.h, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
      null != s && null != s.code && l.includes(s.code) && (s = null);
    },
    DISPATCH_APPLICATION_ERROR: function (e) {
      let { error: t } = e;
      s = null != t.code && o.includes(t.code) ? null : t;
    },
  });
}
