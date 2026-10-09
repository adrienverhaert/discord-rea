/* Recovered shipped factory. Module 596434.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 146851..147270
 * Raw property SHA-256: e88b03d1ba8038b0e94c965d8c88b54546233278f5a7ff245abe271af83cf69b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(580589),
    o = n(114727),
    a = n(377482),
    i = n(208009),
    u = n(486412),
    l = n(678270),
    s = Object.prototype.hasOwnProperty;
  e.exports = function (e, t) {
    var n = a(e),
      c = !n && o(e),
      f = !n && !c && i(e),
      d = !n && !c && !f && l(e),
      h = n || c || f || d,
      p = h ? r(e.length, String) : [],
      y = p.length;
    for (var m in e)
      (t || s.call(e, m)) &&
        !(
          h &&
          ("length" == m ||
            (f && ("offset" == m || "parent" == m)) ||
            (d && ("buffer" == m || "byteLength" == m || "byteOffset" == m)) ||
            u(m, y))
        ) &&
        p.push(m);
    return p;
  };
}
