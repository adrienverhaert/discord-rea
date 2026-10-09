/* Recovered shipped factory. Module 800754.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 177001..177253
 * Raw property SHA-256: b2af7f9ed6caf4319cb4abf48de8075859f90a27fb03f0e2d3f0f2558f136ae2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(163785),
    o = n(614795),
    a = n(687382),
    i = Math.ceil,
    u = Math.max;
  e.exports = function (e, t, n) {
    t = (n ? o(e, t, n) : void 0 === t) ? 1 : u(a(t), 0);
    var l = null == e ? 0 : e.length;
    if (!l || t < 1) return [];
    for (var s = 0, c = 0, f = Array(i(l / t)); s < l;) f[c++] = r(e, s, (s += t));
    return f;
  };
}
