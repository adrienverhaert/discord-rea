/* Recovered shipped factory. Module 900923.
 * Source: recovered/web/assets/536004.a83dbed8d40db3b2.js
 * UTF-16 property offsets: 5215..5385
 * Raw property SHA-256: 6799d9b1045f614e6bb74b2d39748b4660b8060c72001ed261180e4dbcc42c19
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(374316),
    o = TypeError;
  r.exports = function (r) {
    var t = n(r, "number");
    if ("number" == typeof t) throw new o("Can't convert number to bigint");
    return BigInt(t);
  };
}
