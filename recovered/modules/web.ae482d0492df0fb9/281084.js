/* Recovered shipped factory. Module 281084.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8235442..8235891
 * Raw property SHA-256: 0c5c9ed4fdc1954746e30165721daf04d88fb4e9e8d6108cc18b7b5b8cd90e2b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => l }), n(142703));
  var i = n(439372),
    r = n(885386);
  let a = !1;
  class s extends i.A {
    actions = {
      POST_CONNECTION_OPEN: () => {
        this.setVerifyTimezone();
      },
      OVERLAY_INITIALIZE: this.setVerifyTimezone,
      USER_SETTINGS_PROTO_UPDATE: this.ensureTimezoneUpdated,
    };
    setVerifyTimezone() {
      a = !0;
    }
    ensureTimezoneUpdated() {
      if (!a) return;
      a = !1;
      let e = new Date().getTimezoneOffset();
      r.JI.getSetting() !== e && setImmediate(() => r.JI.updateSetting(e));
    }
  }
  let l = new s();
}
