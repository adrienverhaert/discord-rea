/* Recovered shipped factory. Module 10088.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3779789..3780341
 * Raw property SHA-256: 47808602db8e89b052b2a87714a9551f0ff3991749d8946288fa3e4ea6016888
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(17928),
    r = n(73153),
    a = n(652215);
  let s = null,
    l = {};
  class o extends i.Ay.Store {
    static displayName = "CodedLinkNativeAppStateStore";
    getState(e) {
      return l[e];
    }
    getHighestState() {
      return s;
    }
  }
  let d = new o(r.h, {
    NATIVE_APP_MODAL_OPENING: function (e) {
      let { code: t } = e;
      ((l[t] = a.fAW.OPENING), null === s && (s = a.fAW.OPENING));
    },
    NATIVE_APP_MODAL_OPENED: function (e) {
      let { code: t } = e;
      ((l[t] = a.fAW.OPEN), (s = a.fAW.OPEN));
    },
    NATIVE_APP_MODAL_OPEN_FAILED: function (e) {
      let { code: t } = e;
      ((l[t] = a.fAW.OPEN_FAIL), (null === s || s === a.fAW.OPENING) && (s = a.fAW.OPEN_FAIL));
    },
  });
}
