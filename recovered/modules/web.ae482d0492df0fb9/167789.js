/* Recovered shipped factory. Module 167789.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10492060..10492527
 * Raw property SHA-256: caf35543b46b4233995e70821b95de5658a9a36cc1ce0937e41af4eddcf5c2eb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { O: () => r });
  let i = (0, n(613345).V)();
  function r(e, t) {
    if (void 0 !== i && null != i.requestIdleCallback && null != i.cancelIdleCallback) {
      let r = !1,
        a = null;
      function n() {
        r || ((r = !0), null != a && (i.clearTimeout(a), (a = null)), e());
      }
      let s = i.requestIdleCallback(n, t);
      return (
        (a = i.setTimeout(() => {
          (r || i.cancelIdleCallback(s), n());
        }, t?.timeout ?? 1e3)),
        () => {
          (i.cancelIdleCallback(s), null != a && (i.clearTimeout(a), (a = null)));
        }
      );
    }
    {
      let t = i.setTimeout(e, 0);
      return () => {
        i.clearTimeout(t);
      };
    }
  }
}
