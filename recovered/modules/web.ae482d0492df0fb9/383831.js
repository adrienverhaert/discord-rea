/* Recovered shipped factory. Module 383831.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8407209..8407697
 * Raw property SHA-256: 1eabb1df0ddd3fcd9c110c76a205aa5dca7312d5ee2efe34876d251678e0ac2e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(477900);
  n(582128);
  var r = n(70688),
    a = n(869003),
    s = n(688810),
    l = n(384059),
    o = n(204651),
    d = n(660183);
  function c(e) {
    let { location: t, applicationId: n, centerButton: c = !1, ...u } = e,
      { parentAnalyticsLocation: _ } = (0, s.Ay)(),
      E = c ? o.l : o.A;
    return (0, i.jsx)(E, {
      ...u,
      isTrayButton: !1,
      onClick: function () {
        ((0, l.X)(_, l.O.LEAVE_ACTIVITY),
          a.A.leaveActivity({ location: t, applicationId: n, showFeedback: !0 }));
      },
      iconComponent: r.DoorExitIcon,
      label: d.intl.string(d.t["R/FK4A"]),
    });
  }
}
