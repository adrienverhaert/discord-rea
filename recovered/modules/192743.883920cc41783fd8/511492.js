/* Recovered shipped factory. Module 511492.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 159907..160120
 * Raw property SHA-256: aaf44a86a52cb08ece362797819556103c8c555dc15e196ec5a11e97557528d6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(998178),
    o = n(413053);
  e.exports = function (e, t, n, a) {
    var i = !n;
    n || (n = {});
    for (var u = -1, l = t.length; ++u < l;) {
      var s = t[u],
        c = a ? a(n[s], e[s], s, n, e) : void 0;
      (void 0 === c && (c = e[s]), i ? o(n, s, c) : r(n, s, c));
    }
    return n;
  };
}
