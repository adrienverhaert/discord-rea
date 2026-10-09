/* Recovered shipped factory. Module 456819.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 159583..159804
 * Raw property SHA-256: e0fca964f3edf0192403ecafa3c778fd2e05ba51e8a0c047279d5e50fa88f840
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(554861);
  e.exports = function (e, t, n) {
    for (var o = -1, a = e.criteria, i = t.criteria, u = a.length, l = n.length; ++o < u;) {
      var s = r(a[o], i[o]);
      if (s) {
        if (o >= l) return s;
        return s * ("desc" == n[o] ? -1 : 1);
      }
    }
    return e.index - t.index;
  };
}
