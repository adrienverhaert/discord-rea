/* Recovered shipped factory. Module 110742.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3595015..3595711
 * Raw property SHA-256: 3193b1cdb94a7603da8435d25d24ef5ecfd595ee939671e35b5037f49e6b6c0e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { Gn: () => l, Vi: () => o, hL: () => d }), n(938796));
  var i = n(665260),
    r = n(42502),
    a = n(696016),
    s = n(652215);
  function l(e) {
    if (e.type === a.nQ.CLIP && null != e.applicationId && null != e.syncTimestamp)
      return {
        applicationId: e.applicationId,
        startTimestamp: e.syncTimestamp - e.length,
        endTimestamp: e.syncTimestamp,
      };
  }
  function o(e) {
    let t = (0, i.Lt)(e.flags ?? 0, s.sbO.IS_CLIP),
      n = e.application?.id,
      a = (0, r.A)(e);
    if (null != n && null != a && t)
      return {
        applicationId: n,
        startTimestamp: a.syncTimestamp - 1e3 * a.duration,
        endTimestamp: a.syncTimestamp,
      };
  }
  function d(e, t) {
    if (e.applicationId !== t.applicationId) return;
    let n = Math.min(e.endTimestamp, t.endTimestamp) - Math.max(e.startTimestamp, t.startTimestamp);
    return n > 5e3 ? n : void 0;
  }
}
