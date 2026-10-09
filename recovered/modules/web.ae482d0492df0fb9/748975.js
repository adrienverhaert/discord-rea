/* Recovered shipped factory. Module 748975.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2664199..2664855
 * Raw property SHA-256: da6f5e8caeb997d54e8ef9b3e328f6a4263aa4c578ce79d392d0f44785072af4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => f });
  var i = n(367513),
    r = n(587895),
    a = n(568598),
    s = n(198052),
    l = n(709055),
    o = n(976860),
    d = n(795816),
    c = n(933958),
    u = n(851907),
    _ = n(969151),
    E = n(108959),
    A = n(5867),
    h = n(652215);
  function f(e, t) {
    let n = c.Ay.getSelfEmbeddedActivityForLocation(t);
    if (null == n) return;
    let f = r.A.getApplication(n.applicationId),
      I = (0, _.H)(n.location),
      p = (0, u.Ay)({ application: f, channelId: I });
    null != p
      ? (0, l.A)(p)
      : null != I &&
        ((0, o.pX)(h.BVt.CHANNEL(e, I)),
        (0, E.A)(I)
          ? (i.A.selectParticipant(
              I,
              (0, a.Qt)({ applicationId: n.applicationId, instanceId: n?.compositeInstanceId }),
            ),
            s.A.getLayout(I) !== h.DUB.FULL_SCREEN && i.A.updateLayout(I, h.DUB.NO_CHAT))
          : (0, d.gk)(A.Gd.PANEL));
  }
}
