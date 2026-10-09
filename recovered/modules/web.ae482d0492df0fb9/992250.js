/* Recovered shipped factory. Module 992250.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9285505..9286038
 * Raw property SHA-256: c77bff459b413ac6112ce70f27a66f4e85f88d3561297b46e7c051397e55ff60
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(17928),
    r = n(73153),
    a = n(808728),
    s = n(287809),
    l = n(652215);
  let o = null;
  function d() {
    let e = s.default.getCurrentUser();
    if (null == e || e.mfaEnabled === o) return !1;
    o = e.mfaEnabled;
  }
  class c extends i.Ay.Store {
    static displayName = "GuildMFAWarningStore";
    initialize() {
      (this.waitFor(s.default, a.Ay), this.syncWith([s.default, a.Ay], d));
    }
    isVisible(e) {
      return (
        null != e && e.mfaLevel === l.EkJ.ELEVATED && !1 === o && a.Ay.hasElevatedPermissions(e.id)
      );
    }
  }
  let u = new c(r.h, {
    CONNECTION_OPEN: d,
    GUILD_UPDATE: function () {
      return !0;
    },
  });
}
