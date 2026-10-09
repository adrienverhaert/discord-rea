/* Recovered shipped factory. Module 771640.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5535651..5536905
 * Raw property SHA-256: fecb718b29c91b12322c4f8183ffefe9641d6863a1cfe0e7feebb470f01fe8f1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { eW: () => O, em: () => N, oi: () => C, wN: () => S });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(661531),
    l = n(406810),
    o = n(789645),
    d = n(933832),
    c = n(22231),
    u = n(812993),
    _ = n(565787),
    E = n(81466),
    A = n(451394),
    h = n(31300),
    f = n(428689),
    I = n(983851),
    p = n(323384),
    T = n(513461),
    m = n(791606),
    g = n(260727);
  function S(e, t, n) {
    return (0, i.jsx)(u.hV, { count: e, color: t, "aria-hidden": n });
  }
  function N() {
    return (0, i.jsx)(u.fk, { icon: (0, _.k)(m.A), disableColor: !0, className: g.yk });
  }
  function C(e) {
    let t,
      {
        audio: n,
        video: i,
        screenshare: r,
        isCurrentUserConnected: a,
        liveStage: s,
        activeEvent: l,
        activity: o,
      } = e;
    if (l) t = E.CalendarIcon;
    else if (s) t = A.q;
    else if (r) t = h.k;
    else if (i) t = f.VideoIcon;
    else if (n) t = I.H;
    else {
      if (!o) return null;
      t = p.k;
    }
    return R({ icon: t, isCurrentUserConnected: a });
  }
  function O(e) {
    let { guildJoinRequestStatus: t } = e,
      [n, i] = (function (e) {
        switch (e) {
          case T.B5.SUBMITTED:
            return [void 0, l.ClockIcon];
          case T.B5.REJECTED:
            return [s.A.unsafe_rawColors.RED_400.css, o.P];
          case T.B5.APPROVED:
            return [s.A.unsafe_rawColors.GREEN_360.css, d.CheckmarkLargeIcon];
          default:
            return [void 0, c.PencilIcon];
        }
      })(t);
    return R({ icon: i, color: n });
  }
  function R(e) {
    let { icon: t, color: n, isCurrentUserConnected: r } = e;
    return (0, i.jsx)(u.fk, {
      icon: t,
      className: a()(g.bG, { [g.gB]: r }),
      ...(null == n ? { disableColor: !0 } : { color: n }),
    });
  }
}
