/* Recovered shipped factory. Module 562153.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9608992..9609503
 * Raw property SHA-256: 9a71ae8c6d13a7abf6bc364622439aff04f283246b3efd5bc9b33c5a786ddb02
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => _, mG: () => c, tJ: () => d, tx: () => u });
  var i = n(17928),
    r = n(734057),
    a = n(696451),
    s = n(994500),
    l = n(427262),
    o = n(660183);
  function d(e, t, n) {
    if (null == n) return null;
    if (null != e) return a.Ay.getNick(e, n.id);
    if (null != t) {
      let e = r.A.getChannel(t);
      if (e?.isPrivate()) return s.A.getNickname(n.id);
    }
    return null;
  }
  function c(e, t, n) {
    return null == n ? o.intl.string(o.t.sKdZ6U) : (d(e, t, n) ?? l.Ay.getName(n));
  }
  function u(e, t, n) {
    return (0, i.bG)([a.Ay, r.A, s.A], () => c(e, t, n));
  }
  let _ = { getNickname: d, getName: c, useName: u };
}
