/* Recovered shipped factory. Module 710821.
 * Source: recovered/web/assets/536004.a83dbed8d40db3b2.js
 * UTF-16 property offsets: 3325..3541
 * Raw property SHA-256: 3378ace2f147864085e89f23063bf9992860639697b78c3bc3d66218d637d01e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(503199),
    o = e(120394),
    a = RangeError;
  r.exports = function (r, t, e, i) {
    var p = n(r),
      f = o(e),
      u = f < 0 ? p + f : f;
    if (u >= p || u < 0) throw new a("Incorrect index");
    for (var y = new t(p), c = 0; c < p; c++) y[c] = c === u ? i : r[c];
    return y;
  };
}
