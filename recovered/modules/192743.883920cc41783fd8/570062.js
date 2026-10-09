/* Recovered shipped factory. Module 570062.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 160511..160714
 * Raw property SHA-256: 06f6f180b8e72bf87759f938ac1937a3b68fd55d969acd09ba6f614071e4b944
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(667349);
  e.exports = function (e, t) {
    return function (n, o) {
      if (null == n) return n;
      if (!r(n)) return e(n, o);
      for (
        var a = n.length, i = t ? a : -1, u = Object(n);
        (t ? i-- : ++i < a) && !1 !== o(u[i], i, u);
      );
      return n;
    };
  };
}
