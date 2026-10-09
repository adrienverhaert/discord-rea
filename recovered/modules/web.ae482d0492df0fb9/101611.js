/* Recovered shipped factory. Module 101611.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5232512..5233257
 * Raw property SHA-256: c9744e520d9bbdf6c694cd53dc2544478b36b628289dea865ba1c329e2027e4b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { Lr: () => u, j4: () => c, jY: () => _ }), n(938796));
  var i = n(665260),
    r = n(702841),
    a = n(696451),
    s = n(701785),
    l = n(65995),
    o = n(978165),
    d = n(340837);
  function c(e, t) {
    let n = (0, o.A)(e),
      i = (0, r.bG)([s.h], () => s.h.getNewMemberActions(e), [e]),
      a = (0, r.bG)([l.A], () => l.A.getCompletedActions(e));
    if (!n) return {};
    let d = i?.findIndex((e) => e.channelId === t.id) ?? 0,
      c = d >= 0 && null != i ? i[d] : null,
      u = null != c && a?.[c.channelId] === !0;
    return { channelAction: c, completed: u };
  }
  function u(e, t) {
    let n = (0, r.bG)([s.h], () => s.h.getNewMemberActions(e)),
      i = (0, r.bG)([l.A], () => l.A.getCompletedActions(e));
    return n?.find((e) => i?.[e.channelId] !== !0 && e.channelId !== t);
  }
  function _(e) {
    let t = (0, r.bG)([a.Ay], () => a.Ay.getSelfMember(e));
    return (0, i.Lt)(t?.flags ?? 0, d.D.COMPLETED_HOME_ACTIONS);
  }
}
