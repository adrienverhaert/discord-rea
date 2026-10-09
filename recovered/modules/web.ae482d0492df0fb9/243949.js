/* Recovered shipped factory. Module 243949.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7905169..7905730
 * Raw property SHA-256: cb864a51dbd10764737ee0e7140d04f20736e1bce6f8588fbd1d258523c89568
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(477900);
  n(582128);
  var r = n(477782),
    a = n(688810),
    s = n(267102),
    l = n(183555),
    o = n(402860),
    d = n(652215),
    c = n(660183);
  function u(e) {
    let { label: t, onAction: n, icon: u, ..._ } = e,
      { analyticsLocations: E } = (0, a.Ay)(),
      { context: A } = (0, l.NJ)(),
      h = (0, s.aL)(),
      f = (0, s.Us)();
    return (0, i.jsx)(r.Dr, {
      id: "user-profile",
      label: t ?? c.intl.string(c.t.LYju5J),
      action: () => {
        (n?.(),
          (0, o.openUserProfileModal)({ sourceAnalyticsLocations: E, appContext: f, ...A, ..._ }),
          h.dispatch(d.jej.POPOUT_CLOSE));
      },
      icon: u,
      leadingAccessory: null != u ? { type: "icon", icon: u } : void 0,
    });
  }
}
