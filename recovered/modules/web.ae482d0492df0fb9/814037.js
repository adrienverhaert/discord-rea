/* Recovered shipped factory. Module 814037.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7451867..7453203
 * Raw property SHA-256: 6c68ddf8926191554c7eb52d33e0d01b31d4fde8cbe0bbc7bbee6e4d1c90c776
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => f });
  var i = n(439372),
    r = n(734057);
  n(763827);
  var a = n(994500),
    s = n(549022);
  n(842524);
  var l = n(477900);
  n(582128);
  var o = n(192308),
    d = n(174459),
    c = n(105600),
    u = n(64175),
    _ = n(652215);
  function E(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let i = r.A.getChannel(t);
    if (null != i && i.isGroupDM()) {
      let e = i.recipients.filter((e) => a.A.isBlocked(e)),
        r = i.recipients.filter((e) => a.A.isIgnored(e));
      (e.length > 0 || r.length > 0) &&
        !i.blockedUserWarningDismissed &&
        !(0, s.DY)(t) &&
        (function (e) {
          let { channelId: t, blockedUserIds: i, ignoredUserIds: r } = e;
          (0, o.openModalLazy)(
            async () => {
              let { default: e } = await Promise.all([
                n.e("20409"),
                n.e("560338"),
                n.e("501546"),
                n.e("921327"),
                n.e("722640"),
                n.e("454048"),
                n.e("481647"),
                n.e("418943"),
                n.e("24922"),
                n.e("565617"),
                n.e("342234"),
                n.e("420577"),
                n.e("383792"),
                n.e("124958"),
              ]).then(n.bind(n, 876717));
              return (n) => {
                let { transitionState: a, onClose: s } = n;
                return (0, l.jsx)(e, {
                  channelId: t,
                  blockedUserIds: i,
                  ignoredUserIds: r,
                  transitionState: a,
                  onClose: s,
                });
              };
            },
            {
              onCloseCallback: () => {
                ((0, c.U)(t),
                  d.default.track(_.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: u.Qi.DISMISS,
                    channel_id: t,
                    warning_medium: u.W_.MODAL,
                    blocked_user_ids: i,
                    ignored_user_ids: r,
                  }));
              },
            },
          );
        })({ channelId: t, blockedUserIds: e, ignoredUserIds: r });
    }
  }
  function A(e) {
    let { state: t } = e;
  }
  (n(227724), n(100544));
  class h extends i.A {
    actions = { CHANNEL_SELECT: E, APP_STATE_UPDATE: A };
  }
  let f = new h();
}
