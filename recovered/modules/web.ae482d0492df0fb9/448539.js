/* Recovered shipped factory. Module 448539.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10408711..10409116
 * Raw property SHA-256: 263ded53f1a6464a50dc2304df6106b774a4b521ee0d92aacc18e658d2683848
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l, F: () => a });
  var i = n(582128),
    r = n(333007);
  let a = { observe() {}, unobserve() {} },
    s = Object.freeze({ box: "border-box" });
  function l(e) {
    let { ref: t, onUpdate: n, resizeObserver: a, listenerMap: l, key: o } = e;
    (0, i.useLayoutEffect)(() => {
      let { current: e } = t;
      return (
        null != e &&
          (l.set(e, (e) => {
            (0, r.flushSync)(() => {
              n(e, o);
            });
          }),
          a.observe(e, s)),
        () => {
          null != e && (a.unobserve(e), l.delete(e));
        }
      );
    }, [n, a, t, l, o]);
  }
}
