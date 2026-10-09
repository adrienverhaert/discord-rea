/* Recovered shipped factory. Module 630449.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 285374..286192
 * Raw property SHA-256: 6b8f99e2eba090d6d0648eab965274171a9fc5cc6759a7cdcb0936d332a86c6a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, {
    KU: () => h,
    m6: () => u,
    o5: () => l,
    rB: () => p,
    rm: () => c,
    v4: () => d,
    vn: () => f,
  });
  var r = n(657829),
    i = n(75109),
    o = n(128377),
    a = n(690094),
    s = n(978862);
  function l() {
    let e = (0, i.E)();
    return (0, r.h)(e).getCurrentScope();
  }
  function c() {
    let e = (0, i.E)();
    return (0, r.h)(e).getIsolationScope();
  }
  function u() {
    return (0, s.B)("globalScope", () => new o.H());
  }
  function d(...e) {
    let t = (0, i.E)(),
      n = (0, r.h)(t);
    if (2 === e.length) {
      let [t, r] = e;
      return t ? n.withSetScope(t, r) : n.withScope(r);
    }
    return n.withScope(e[0]);
  }
  function p(...e) {
    let t = (0, i.E)(),
      n = (0, r.h)(t);
    if (2 === e.length) {
      let [t, r] = e;
      return t ? n.withSetIsolationScope(t, r) : n.withIsolationScope(r);
    }
    return n.withIsolationScope(e[0]);
  }
  function h() {
    return l().getClient();
  }
  function f(e) {
    let { traceId: t, spanId: n, parentSpanId: r } = e.getPropagationContext();
    return (0, a.Ce)({ trace_id: t, span_id: n, parent_span_id: r });
  }
}
