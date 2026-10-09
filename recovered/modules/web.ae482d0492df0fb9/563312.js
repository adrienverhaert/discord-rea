/* Recovered shipped factory. Module 563312.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5326465..5327131
 * Raw property SHA-256: 536cef91304f5413b4806ac28c15122d1850a032e45e6767213d9159909a1d5a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => l, YR: () => d, nh: () => o });
  var i = n(17928),
    r = n(698441),
    a = n(722260),
    s = n(974930);
  function l(e, t) {
    t = t ?? (0, s.G3)(e);
    let n = (0, a.A)(t, e.id);
    return c(e, n, t);
  }
  function o(e, t) {
    let n = (0, i.bG)([r.Ay], () => r.Ay.getGuildScheduledEvent(e));
    t = t ?? (0, s.G3)(n);
    let l = (0, a.A)(t, n?.id);
    return null == n ? null : c(n, l, t);
  }
  function d(e, t) {
    let n = (0, a.m)(t, e.id);
    return c(e, n, t);
  }
  function c(e, t, n) {
    if (null == e.recurrence_rule || null == n)
      return {
        startTime: new Date(e.scheduled_start_time),
        endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null,
      };
    let i = (0, s.CI)(n, e),
      { startDate: r, endDate: a } = (0, s.Ri)(i, t);
    return { startTime: r.toDate(), endTime: a?.toDate() };
  }
}
