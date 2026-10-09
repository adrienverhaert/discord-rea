/* Recovered shipped factory. Module 933204.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7533308..7533653
 * Raw property SHA-256: d4356dcd6f644e4e2ad2fb124d9cfacf700cb7a5addce95d6d89495d91f7c474
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { I: () => d, T: () => o });
  var i = n(582128),
    r = n(702841),
    a = n(71393),
    s = n(209932);
  function l(e, t) {
    return e.filter((e) => null == t.get(e));
  }
  function o() {
    let e = (0, r.yK)([a.A], () => a.A.getGuildIds()),
      t = (0, r.bG)([s.A], () => s.A.getSounds());
    return (0, i.useMemo)(() => l(e, t), [e, t]);
  }
  function d() {
    return l(a.A.getGuildIds(), s.A.getSounds());
  }
}
