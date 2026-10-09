/* Recovered shipped factory. Module 163785.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 156676..156845
 * Raw property SHA-256: e1aaa0070236b6d8643741fbaf7f6dd19153b6e7325aa91f2ec793d7b883a529
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  e.exports = function (e, t, n) {
    var r = -1,
      o = e.length;
    (t < 0 && (t = -t > o ? 0 : o + t),
      (n = n > o ? o : n) < 0 && (n += o),
      (o = t > n ? 0 : (n - t) >>> 0),
      (t >>>= 0));
    for (var a = Array(o); ++r < o;) a[r] = e[r + t];
    return a;
  };
}
