/* Recovered shipped factory. Module 439864.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4796494..4796905
 * Raw property SHA-256: 4bd31ffe28d1fe5ed33686f7accb64dffb33310aa4331529fb78cbdd1895ccac
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { q: () => c });
  var i = n(649852),
    r = n.n(i),
    a = n(243264),
    s = n(929396),
    l = n(649079),
    o = n(471677);
  let d = r()(
    (e, t) => {
      o.YK.fetchMany([e, t]);
    },
    o.fo,
    { leading: !0, maxWait: o.Mg },
  );
  function c(e, t, n) {
    let i = null != n ? (0, l.$g)(n, t) : null;
    i?.onQuery(e);
    let r = (0, s.C7)(e);
    if (null == r) return null;
    d(r, t);
    let o = a.A.getClosestResults(r, t),
      c = (o?.results ?? []).filter(s.qS);
    return (null != o && i?.onResults(o.query, c), c);
  }
}
