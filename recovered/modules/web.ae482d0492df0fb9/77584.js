/* Recovered shipped factory. Module 77584.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7902013..7903049
 * Raw property SHA-256: 960af3a73b7a7fc3c51684da5e73a4e9a52d23a3d4a8168ed8b80495b16c8b77
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => f });
  var i = n(477900);
  n(582128);
  var r = n(192308),
    a = n(803306),
    s = n(439372),
    l = n(734057),
    o = n(309010),
    d = n(287809),
    c = n(716371),
    u = n(652215);
  let _ = !1;
  function E(e) {
    if (__OVERLAY__) return;
    let t = d.default.getCurrentUser();
    if (null == t) return;
    let n = o.Ay.getChannelId(),
      i = l.A.getDMFromUserId(c.K);
    if (!t.hasUrgentMessages() || i === n) return A({ channelId: n });
    _ || ((_ = !0), e());
  }
  function A(e) {
    let { channelId: t } = e,
      n = d.default.getCurrentUser(),
      i = t === l.A.getDMFromUserId(c.K);
    null != n &&
      n.hasUrgentMessages() &&
      i &&
      ((_ = !1), a.lA(u.nhx.HAS_UNREAD_URGENT_MESSAGES, !1));
  }
  class h extends s.A {
    handleShowUrgentMessageAlert;
    actions = {
      POST_CONNECTION_OPEN: () => E(this.handleShowUrgentMessageAlert),
      MESSAGE_CREATE: () => E(this.handleShowUrgentMessageAlert),
      CHANNEL_SELECT: A,
    };
    constructor(e) {
      (super(), (this.handleShowUrgentMessageAlert = e));
    }
  }
  let f = new h(() =>
    (0, r.openModalLazy)(
      async () => {
        let { default: e } = await Promise.all([n.e("454048"), n.e("689913"), n.e("136724")]).then(
          n.bind(n, 531519),
        );
        return (t) => (0, i.jsx)(e, { ...t });
      },
      { modalKey: c.r, onCloseRequest: u.FXj },
    ),
  );
}
