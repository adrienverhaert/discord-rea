/* Recovered shipped factory. Module 769591.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6111886..6112981
 * Raw property SHA-256: f1e48aa45ce120d4421a8b8bb60aeb2c36bf6fc58592482fd3a223de851bae8f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { b8: () => u, ct: () => E, os: () => A }), n(938796));
  var i = n(665260),
    r = n(17928),
    a = n(544743),
    s = n(543465),
    l = n(935208),
    o = n(652215),
    d = n(355097),
    c = n(660183);
  function u() {
    return [
      { id: "15-minutes", label: c.intl.string(c.t["8ot6gv"]), value: d.Xx.MINUTES_15 },
      { id: "1-hour", label: c.intl.string(c.t.UMWBZr), value: d.Xx.HOURS_1 },
      { id: "3-hours", label: c.intl.string(c.t.QmYWtu), value: d.Xx.HOURS_3 },
      { id: "8-hours", label: c.intl.string(c.t.EpAXPC), value: d.Xx.HOURS_8 },
      { id: "24-hours", label: c.intl.string(c.t["755t4q"]), value: d.Xx.HOURS_24 },
      { id: "forever", label: c.intl.string(c.t.r3LawO), value: d.Xx.ALWAYS },
    ];
  }
  let _ = { ignoreMute: !1, ignoreUnreadSetting: !0, ignoreNotificationSetting: !1 };
  function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
    return l.default.keys(e).filter((n) => {
      let r = e[n].message_notifications !== o.orn.NULL,
        s =
          i.Lt(e[n].flags ?? 0, d.vv.UNREADS_ALL_MESSAGES) ||
          i.Lt(e[n].flags ?? 0, d.vv.UNREADS_ONLY_MENTIONS);
      return (
        (!t.ignoreUnreadSetting && s) ||
        (!t.ignoreNotificationSetting && r) ||
        (!t.ignoreMute && (0, a.tG)(e[n]))
      );
    });
  }
  function A(e) {
    return (0, r.bG)([s.Ay], () => s.Ay.useNewNotifications);
  }
}
