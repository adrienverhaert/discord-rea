/* Recovered shipped factory. Module 52391.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 167611..167895
 * Raw property SHA-256: ff280d2eefa4c81973f3c13ccbdb8e626cc35f804d341e1f762551de3c9166ff
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(161858),
    o = n(114727),
    a = n(377482),
    i = n(486412),
    u = n(59471),
    l = n(849044);
  e.exports = function (e, t, n) {
    t = r(t, e);
    for (var s = -1, c = t.length, f = !1; ++s < c;) {
      var d = l(t[s]);
      if (!(f = null != e && n(e, d))) break;
      e = e[d];
    }
    return f || ++s != c
      ? f
      : !!(c = null == e ? 0 : e.length) && u(c) && i(d, c) && (a(e) || o(e));
  };
}
