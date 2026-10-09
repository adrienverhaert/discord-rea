/* Recovered shipped factory. Module 422033.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9335552..9336043
 * Raw property SHA-256: f0b58b9666cca9847496a77e479942507005d12632727a9f531917d52d93950a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153);
  let a = null,
    s = !1;
  class l extends i.Ay.Store {
    static displayName = "DispatchApplicationLaunchSetupStore";
    getLastProgress() {
      return a;
    }
    isRunning() {
      return s;
    }
  }
  let o = new l(r.h, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
      s = !0;
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function (e) {
      let { progress: t, total: n, name: i } = e;
      a = { progress: t, total: n, name: i };
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
      ((a = null), (s = !1));
    },
  });
}
