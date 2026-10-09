/* Recovered shipped factory. Module 374421.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 150449..150650
 * Raw property SHA-256: aab941c6f0ca19f712528b28597c44344e63da8f343388b023490acbc80e83db
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(143029),
    o = n(808638);
  e.exports = function e(t, n, a, i, u) {
    var l = -1,
      s = t.length;
    for (a || (a = o), u || (u = []); ++l < s;) {
      var c = t[l];
      n > 0 && a(c) ? (n > 1 ? e(c, n - 1, a, i, u) : r(u, c)) : i || (u[u.length] = c);
    }
    return u;
  };
}
