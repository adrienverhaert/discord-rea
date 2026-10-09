/* Recovered shipped factory. Module 837881.
 * Source: recovered/web/assets/a455afa9e12582fe.js
 * UTF-16 property offsets: 82..323
 * Raw property SHA-256: cfa9e04a1bb12b1786a96ea39222f7ab197c90aecbc2fac07bb6ef02aafcced4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, r, t) {
  var e = t(498059),
    u = t(24011),
    i = t(86486),
    p = t(580589),
    a = t(797674),
    h = Math.max;
  n.exports = function (n) {
    if (!(n && n.length)) return [];
    var r = 0;
    return (
      (n = e(n, function (n) {
        if (a(n)) return ((r = h(n.length, r)), !0);
      })),
      p(r, function (r) {
        return u(n, i(r));
      })
    );
  };
}
