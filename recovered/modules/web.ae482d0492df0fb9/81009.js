/* Recovered shipped factory. Module 81009.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6072746..6073937
 * Raw property SHA-256: 1566640bd8401c2ce9f8370fb24859c80d66eb046831dbfa1714dc653be4dc34
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => I });
  var i = n(739187),
    r = n(857250),
    a = n(97483),
    s = n(192308),
    l = n(976860),
    o = n(73153),
    d = n(439372),
    c = n(576991),
    u = n(287809),
    _ = n(376463);
  class E extends d.A {
    actions = {
      LOGOUT: (e) => this.handleLogout(e),
      MULTI_ACCOUNT_SWITCH_START: (e) => this.handleMultiAccountSwitchStart(e),
    };
    _initialize() {
      (o.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), this.handleConnectionOpen());
    }
    _terminate() {
      o.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    }
    handleLogout(e) {
      e.isSwitchingAccount && this.onSwitchStart();
    }
    handleMultiAccountSwitchStart(e) {
      (0, c.m)(e.targetUserId);
    }
    handleConnectionOpen = () => {
      let e = _.A.getSwitchResult();
      if (null == e) return;
      let t = u.default.getCurrentUser();
      null != t &&
        (e.success ? this.onSwitchSuccess(t, e.navigateHome) : this.onSwitchError(t),
        (0, c.m)(null),
        this.onSwitchComplete());
    };
  }
  var A = n(573879),
    h = n(652215),
    f = n(660183);
  let I = new (class extends E {
    onSwitchStart() {}
    onSwitchSuccess(e, t) {
      setTimeout(() => {
        (t && (0, l.pX)(h.BVt.ME),
          (0, i.P)(
            (0, r.o)(
              f.intl.formatToPlainString(f.t.wx7O3L, { username: e.username }),
              a.Ck.SUCCESS,
            ),
          ));
      }, 100);
    }
    onSwitchError() {
      (0, i.P)((0, r.o)(f.intl.string(f.t.pqvKWA), a.Ck.FAILURE));
    }
    onSwitchComplete() {
      ((0, s.closeModal)(A.ov), (0, s.closeModal)(A.Gl));
    }
  })();
}
