/* Recovered shipped factory. Module 162199.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7263706..7264044
 * Raw property SHA-256: bcdb148fca7c00680fc29ab576f2004a5f83de9910ccd8b4e0ed0c2222ec46f9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o, j: () => d });
  var i = n(17928),
    r = n(181079),
    a = n(5180),
    s = n(967198),
    l = n(652215);
  function o(e) {
    let t = (0, i.bG)([s.A], () => s.A.getGuildId());
    return null != t ? t : e.getGuildId();
  }
  function d(e) {
    return (0, a.ai)(s.A.getGuildId()) &&
      (r.A.isFavorite(e.id) || (e.isThread() && r.A.isFavorite(e.parent_id)))
      ? l.YYv
      : e.getGuildId();
  }
}
