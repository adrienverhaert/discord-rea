/* Recovered shipped factory. Module 363487.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6796899..6797165
 * Raw property SHA-256: 774f73618fa629ddbf892fd8ab40afd465c1c5ef24784b5684eba0cda3c4749e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o, G: () => l });
  var i = n(17928),
    r = n(71393),
    a = n(576705),
    s = n(818348);
  function l(e, t) {
    return null == t || null == e.getGuildPermissions(t) ? null : e.can(s.xB.ADMINISTRATOR, t);
  }
  function o(e) {
    return (0, i.bG)([a.A, r.A], () => l(a.A, r.A.getGuild(e)));
  }
}
