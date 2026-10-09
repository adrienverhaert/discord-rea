/* Recovered shipped factory. Module 165685.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3034395..3035419
 * Raw property SHA-256: c1124f18c683798a599439516aa5895491c2d2edeeac72581243896c1505d35b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => A });
  var i = n(477900);
  n(582128);
  var r = n(192308),
    a = n(830215),
    s = n(439372),
    l = n(287809),
    o = n(174459),
    d = n(536194),
    c = n(715314),
    u = n(652215),
    _ = n(818348);
  class E extends s.A {
    actions = { POST_CONNECTION_OPEN: this.handleConnectionOpen };
    handleConnectionOpen() {
      let e = l.default.getCurrentUser();
      if (null == e || d.P.isDisallowPopupsSet()) return;
      let t = c.A.requiredActionsIncludes(e.id, [u.Kby.UPDATE_PASSWORD]);
      c.A.wasLoginAttemptedInSession(e.id) && t
        ? (0, r.openModalLazy)(
            async () => {
              let { default: e } = await Promise.all([
                n.e("349619"),
                n.e("627323"),
                n.e("647999"),
                n.e("580890"),
              ]).then(n.bind(n, 398177));
              return function (t) {
                async function n() {
                  (await t.onClose(), a.A.logout("login_required_account_manager", u.BVt.LOGIN));
                }
                return (0, i.jsx)(e, {
                  ...t,
                  onSuccess: function () {
                    (o.default.track(u.HAw.FORCED_UPDATE_PASSWORD_SUCCEEDED), t.onClose());
                  },
                  onClose: n,
                  requirementsUpdated: !0,
                });
              };
            },
            { modalKey: "LOGIN_REQUIRED_ACTIONS_MODAL_KEY", onCloseRequest: _.FX, instant: !0 },
          )
        : t && a.A.logout("login_required_account_manager", u.BVt.LOGIN);
    }
  }
  let A = new E();
}
