/* Recovered shipped factory. Module 368049.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6084562..6084825
 * Raw property SHA-256: b197738d324aca87b790ea6a2fd96c564ad11bc4f2939193bd0bf397aba49df8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(187522);
  class r extends i.V {
    requestPermissionCore(e, t) {
      return Promise.resolve(!0);
    }
    hasPermissionCore(e, t) {
      return Promise.resolve(!0);
    }
    openSettings(e) {}
    didHavePermission(e) {
      return !0;
    }
    openAlertModal(e) {}
  }
  let a = new r();
}
