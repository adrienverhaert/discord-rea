/* Recovered shipped factory. Module 773545.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7065852..7067059
 * Raw property SHA-256: 5beb4114e87713a4c9153030ca3c004fdcb3940a0a458eadb1d909684a3aa3b1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Dp: () => f, kW: () => I, r8: () => p });
  var i = n(582128),
    r = n(323889),
    a = n(17928),
    s = n(157695),
    l = n(107195),
    o = n(183636),
    d = n(927813),
    c = n(396813),
    u = n(859703),
    _ = n(971276),
    E = n(977416);
  let A = 30 * d.A.Millis.SECOND;
  function h(e, t, n) {
    if (!(!(0, _.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now()))) {
      if ("focused" !== o.A.getState()) {
        null != e && (0, c.Fr)(t, e.ttlMillis);
        return;
      }
      s.A.isFetchingAdToDeliverByPlacement(t) ||
        (s.A.canRefreshAd(t) && ((0, c.N1)(), (0, c.r8)(t, n)));
    }
  }
  function f(e) {
    return (0, a.bG)([s.A], () => s.A.deliveryAdDecisionByPlacement.get(e) ?? null, [e]);
  }
  function I(e) {
    let t = (0, i.useRef)(null),
      n = f(e);
    (0, i.useEffect)(() => {
      (null != t.current && clearInterval(t.current),
        h(n, e, "questBar-open"),
        (t.current = setInterval(() => {
          h(s.A.deliveryAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
        }, A)));
      let i = t.current;
      return () => {
        null != i && clearInterval(i);
      };
    }, [n, e]);
  }
  function p(e, t) {
    let n = (0, a.bG)([u.A], () => u.A.getQuestPreviewOverride(t), [t]),
      s = f(e),
      o = (0, l.Yz)(s?.creative),
      d = (0, a.bG)([u.A], () => (null != o ? (u.A.quests.get(o) ?? null) : null), [o]),
      c = null == d || (0, E.Ic)(d) ? null : d,
      _ = n ?? c,
      A = (0, l.I4)(s?.creative);
    return (0, i.useMemo)(
      () =>
        null != _
          ? { type: r.p.QUEST, quest: _ }
          : null != A
            ? { type: r.p.BOUNTY, bounty: A }
            : { type: r.p.NO_FILL },
      [_, A],
    );
  }
}
