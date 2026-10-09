/* Recovered shipped factory. Module 573083.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3921423..3923107
 * Raw property SHA-256: 20b04b7f585623023d0afe9b90d0bd5a53ebbc8f7a9d30c471472c488a39cd66
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    CU: () => f,
    GU: () => E,
    T7: () => p,
    W3: () => T,
    Wg: () => d,
    YN: () => _,
    Zv: () => g,
    h2: () => m,
    oJ: () => u,
    pF: () => h,
    wK: () => I,
  });
  var i = n(582128);
  let r = new Map(),
    a = new Set(),
    s = new Set();
  function l() {
    for (let e of [...a])
      try {
        e();
      } catch (e) {
        console.error("[vibegrations] control lease subscriber threw", e);
      }
  }
  function o(e) {
    for (let t of [...s])
      try {
        t(e);
      } catch (e) {
        console.error("[vibegrations] control release subscriber threw", e);
      }
  }
  function d(e) {
    let t = r.get(e) ?? { holders: 0, timers: new Set() };
    ((t.holders += 1), r.set(e, t));
    let n = !1,
      i = setTimeout(() => {
        (console.warn("[vibegrations] control lease expired without release", { projectId: e }),
          a());
      }, 35e3);
    function a() {
      if (n || ((n = !0), clearTimeout(i), r.get(e) !== t)) return;
      (t.timers.delete(i), (t.holders -= 1));
      let a = t.holders <= 0;
      (a && r.delete(e), l(), a && o(e));
    }
    return (t.timers.add(i), l(), a);
  }
  let c = new Map();
  function u(e) {
    let t = c.get(e),
      n = setTimeout(() => _(e), 2e4);
    if (null != t) {
      clearTimeout(t.timer);
      let i = d(e);
      (t.release(), c.set(e, { release: i, timer: n }));
      return;
    }
    c.set(e, { release: d(e), timer: n });
  }
  function _(e) {
    let t = c.get(e);
    null != t && (c.delete(e), clearTimeout(t.timer), t.release());
  }
  function E(e) {
    A.delete(e);
    let t = c.get(e);
    null != t && (c.delete(e), clearTimeout(t.timer));
    let n = r.get(e);
    if (null != n) {
      for (let e of n.timers) clearTimeout(e);
      (r.delete(e), l(), o(e));
    }
  }
  let A = new Set();
  function h(e, t) {
    A.has(e) !== t && (t ? A.add(e) : A.delete(e), l());
  }
  function f(e) {
    let t = i.useCallback(() => null != e && A.has(e), [e]);
    return i.useSyncExternalStore(T, t, t);
  }
  function I(e) {
    return (r.get(e)?.holders ?? 0) > 0;
  }
  function p() {
    return [...r.keys()];
  }
  function T(e) {
    return (
      a.add(e),
      () => {
        a.delete(e);
      }
    );
  }
  function m(e) {
    return (
      s.add(e),
      () => {
        s.delete(e);
      }
    );
  }
  function g(e) {
    let t = i.useCallback(() => null != e && I(e), [e]);
    return i.useSyncExternalStore(T, t, t);
  }
}
