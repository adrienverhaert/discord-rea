/* Recovered shipped factory. Module 215530.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7993522..7993875
 * Raw property SHA-256: 8c51c22f4943d5b365221aeaca901eaf95b9d690d226ce5b35f17ca68ed09a38
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(582128),
    r = n(17928),
    a = n(885386),
    s = n(994500);
  function l(e) {
    let t = a.j0.useSetting(),
      { isBlocked: n, isIgnored: l } = (0, r.cf)([s.A], () => ({
        isBlocked: s.A.isBlocked(e),
        isIgnored: s.A.isIgnored(e),
      })),
      [o, d] = (0, i.useState)(n || l);
    return (
      (0, i.useEffect)(() => d(n || l), [n, l]),
      [
        o && !(l && t),
        (0, i.useCallback)(() => {
          d(!1);
        }, []),
      ]
    );
  }
}
