/* Recovered shipped factory. Module 51758.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5150954..5151401
 * Raw property SHA-256: bcf236ff0dab2ce22f45ed339164ac8481fc8558ced8083a1e9ea14287936bb6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { H: () => d, V: () => o });
  var i = n(17928),
    r = n(696451),
    a = n(71393),
    s = n(287809),
    l = n(709977);
  function o(e) {
    let [t, n, i] =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, s.default, r.Ay];
    if (null == e) return !1;
    let o = t.getGuild(e),
      d = n.getCurrentUser(),
      c = !1;
    return (null != d && (c = i.getMember(e, d.id)?.isPending ?? !1), c && !!(0, l.Qd)(o));
  }
  function d(e) {
    return (0, i.bG)([a.A, s.default, r.Ay], () => null != e && o(e, [a.A, s.default, r.Ay]), [e]);
  }
}
