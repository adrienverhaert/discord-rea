/* Recovered shipped factory. Module 238040.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11752486..11752987
 * Raw property SHA-256: 22c9545f5e4e98245aab2e22efdad01b08b25732d1411798f957923480cb4d5b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $v: () => d, JE: () => c, NQ: () => l, wB: () => o });
  var i = n(121894);
  let r = new WeakMap(),
    a = new Map(),
    s = new WeakMap();
  function l(e, t, n) {
    (r.set(t, e), a.set(e, n));
    let l = t.ownerDocument?.defaultView ?? window,
      o = s.get(l);
    return (
      null == o &&
        ((o = new l.ResizeObserver((e) => {
          (0, i.r)(() => {
            for (let t of e) {
              let e = t.target,
                n = r.get(e);
              if (null == n) continue;
              let i = a.get(n);
              null != i && i(t);
            }
          });
        })),
        s.set(l, o)),
      o
    );
  }
  function o(e, t) {
    e.observe(t);
  }
  function d(e, t) {
    e.unobserve(t);
  }
  function c(e, t) {
    (a.delete(e), null != t && r.delete(t));
  }
}
