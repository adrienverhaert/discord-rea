/* Recovered shipped factory. Module 357801.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5317207..5317732
 * Raw property SHA-256: 9baa00dd54fa4a04e6dab51cb7b7a9d954e15bfe6e2265a271c1d7716bd9f0b1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { F: () => l });
  var i = n(536637),
    r = n.n(i),
    a = n(935208),
    s = n(988794);
  function l(e, t, n, i) {
    let l = r()(),
      o = new Date(e.scheduled_start_time).getTime(),
      d = { start: o - s.Oz, end: o };
    if (l.isBetween(d.start, d.end)) {
      if (null != t) {
        let e = r()(t),
          n = e.isBetween(d.start, d.end),
          a = e.isBetween(r()(o).subtract(s.nN, "days"), o);
        return n || (a && !i) ? void 0 : s.w0.EVENT_STARTING_SOON;
      }
      return s.w0.EVENT_STARTING_SOON;
    }
    let c = a.default.extractTimestamp(e.id),
      u = Math.min((n ?? c) + s.aj, o);
    if (l.isBetween(c, u) && null == t && !i) return s.w0.NEW_EVENT;
  }
}
