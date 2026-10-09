/* Recovered shipped factory. Module 206692.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11740428..11740907
 * Raw property SHA-256: a93146349b438eacf907b983d6cef6ea90236c176c170767e2a9073e8ca34daf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $v: () => o, e: () => s, wB: () => l });
  let i = new WeakMap(),
    r = new WeakMap();
  function a(e, t) {
    e.forEach((e) => {
      let n = r.get(t)?.get(e.target);
      null != n && n.call(null, e);
    });
  }
  function s(e) {
    let t = i.get(e);
    return (
      null == t && ((t = new IntersectionObserver(a, e)), i.set(e, t), r.set(t, new WeakMap())),
      t
    );
  }
  function l(e, t, n) {
    let i = r.get(e) ?? new WeakMap();
    (i.has(t) || e.observe(t), i.set(t, n), r.set(e, i));
  }
  function o(e, t) {
    let n = r.get(e) ?? new WeakMap();
    n.has(t) && (n.delete(t), e.unobserve(t), r.set(e, n));
  }
}
