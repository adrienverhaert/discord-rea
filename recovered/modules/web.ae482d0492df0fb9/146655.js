/* Recovered shipped factory. Module 146655.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7983685..7984397
 * Raw property SHA-256: 668682315a941399fee602e772c6352e28467084974452113814b2fbd470ee1a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => f });
  var i = n(582128),
    r = n(17928),
    a = n(87664),
    s = n(517164),
    l = n(20805),
    o = n(83971),
    d = n(583846),
    c = n(192820),
    u = n(290863),
    _ = n(343129),
    E = n(731854);
  let A = [],
    h = [];
  function f(e) {
    let t = (0, r.bG)([c.Ay], () => c.Ay.supports(E.O5.VIDEO)),
      n = (0, a.A)(e),
      f = (0, r.bG)([u.A], () => u.A.getActivities(e)),
      I = (0, r.bG)([s.A], () => s.A.getUserOutbox(e)),
      { live: p, recent: T } = (0, i.useMemo)(() => {
        let e = (0, _.U)(f),
          t = I?.entries.filter(
            (t) =>
              !(0, d.Hd)(t) &&
              ((0, l.Tq)(t)
                ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, o.qb)(t, e))
                : (0, l.Lf)(t)
                  ? !e.some((e) => null != e && (0, o.SU)(t, e))
                  : (0, l.$R)(t)),
          );
        return { live: 0 === e.length ? A : e, recent: null == t || 0 === t.length ? h : t };
      }, [f, I?.entries]);
    return { live: p, recent: T, stream: t ? n : null, outbox: I };
  }
}
